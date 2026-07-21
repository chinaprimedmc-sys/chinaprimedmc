import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

import { imageUploadMaxBytes, validateImageUpload } from "@/lib/security/image-upload";

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > imageUploadMaxBytes + 1024 * 1024) {
    return NextResponse.json({ error: "图片文件不能超过 12 MB。" }, { status: 413 });
  }
  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "请选择一张图片。" }, { status: 400 });
  }
  if (file.size <= 0 || file.size > imageUploadMaxBytes) {
    return NextResponse.json(
      { error: "仅支持 AVIF、WebP、JPEG、PNG，单张不超过 12 MB。" },
      { status: 400 },
    );
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  let image: ReturnType<typeof validateImageUpload>;
  try {
    image = validateImageUpload(bytes, file.type);
  } catch {
    return NextResponse.json(
      { error: "图片内容或尺寸无效，请重新导出为 AVIF、WebP、JPEG 或 PNG。" },
      { status: 400 },
    );
  }

  const config = getR2Config();
  const key = buildKey(file.name, image.extension);
  const client = new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    forcePathStyle: true,
    credentials: { accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey },
  });

  try {
    await client.send(
      new PutObjectCommand({
        Bucket: config.bucket,
        Key: key,
        Body: Buffer.from(bytes),
        ContentType: image.mimeType,
        ContentLength: file.size,
        CacheControl: "public, max-age=31536000, immutable",
        ContentDisposition: "inline",
        Metadata: { width: String(image.width), height: String(image.height) },
      }),
    );
  } catch {
    return NextResponse.json({ error: "R2 存储暂时不可用，请稍后重试。" }, { status: 503 });
  }

  return NextResponse.json({ key, publicUrl: `${config.publicUrl}/${key}` });
}

function getR2Config() {
  const config = {
    accountId: process.env.CLOUDFLARE_R2_ACCOUNT_ID,
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
    bucket: process.env.CLOUDFLARE_R2_BUCKET,
    publicUrl: process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL?.replace(/\/$/, ""),
  };
  if (Object.values(config).some((value) => !value))
    throw new Error("Cloudflare R2 is not configured.");
  if (new URL(config.publicUrl!).protocol !== "https:")
    throw new Error("Cloudflare R2 public URL must use HTTPS.");
  return config as Record<keyof typeof config, string>;
}

function buildKey(fileName: string, extension: string) {
  const stem =
    fileName
      .replace(/\.[^.]+$/, "")
      .normalize("NFKD")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase()
      .slice(0, 72) || "aviora-media";
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "/");
  return `cms/${date}/${crypto.randomUUID()}-${stem}.${extension}`;
}
