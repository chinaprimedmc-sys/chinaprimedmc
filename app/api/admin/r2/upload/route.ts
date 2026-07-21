import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const allowedTypes = new Set(["image/avif", "image/webp", "image/jpeg", "image/png"]);
const maxBytes = 12 * 1024 * 1024;

export async function POST(request: Request) {
  const formData = await request.formData().catch(() => null);
  const file = formData?.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "请选择一张图片。" }, { status: 400 });
  }
  if (!allowedTypes.has(file.type) || file.size <= 0 || file.size > maxBytes) {
    return NextResponse.json(
      { error: "仅支持 AVIF、WebP、JPEG、PNG，单张不超过 12 MB。" },
      { status: 400 },
    );
  }

  const config = getR2Config();
  const key = buildKey(file.name, file.type);
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
        Body: Buffer.from(await file.arrayBuffer()),
        ContentType: file.type,
        ContentLength: file.size,
        CacheControl: "public, max-age=31536000, immutable",
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
  return config as Record<keyof typeof config, string>;
}

function buildKey(fileName: string, contentType: string) {
  const stem =
    fileName
      .replace(/\.[^.]+$/, "")
      .normalize("NFKD")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase()
      .slice(0, 72) || "aviora-media";
  const extension = contentType === "image/jpeg" ? "jpg" : contentType.split("/")[1];
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "/");
  return `cms/${date}/${crypto.randomUUID()}-${stem}.${extension}`;
}
