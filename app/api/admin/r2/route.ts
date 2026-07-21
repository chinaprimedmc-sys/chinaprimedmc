import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextResponse } from "next/server";
import { z } from "zod";

const uploadSchema = z.object({
  fileName: z.string().trim().min(1).max(180),
  contentType: z.enum(["image/avif", "image/webp", "image/jpeg", "image/png"]),
  size: z
    .number()
    .int()
    .positive()
    .max(12 * 1024 * 1024),
});

export async function POST(request: Request) {
  const parsed = uploadSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "图片格式不支持或文件超过 12 MB。" }, { status: 400 });
  }

  const config = getR2Config();
  const extension = extensionFor(parsed.data.contentType);
  const stem =
    parsed.data.fileName
      .replace(/\.[^.]+$/, "")
      .normalize("NFKD")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .toLowerCase()
      .slice(0, 72) || "aviora-media";
  const date = new Date().toISOString().slice(0, 10).replaceAll("-", "/");
  const key = `cms/${date}/${crypto.randomUUID()}-${stem}.${extension}`;

  const client = new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    forcePathStyle: true,
    credentials: { accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey },
  });
  const uploadUrl = await getSignedUrl(
    client,
    new PutObjectCommand({
      Bucket: config.bucket,
      Key: key,
      ContentType: parsed.data.contentType,
      ContentLength: parsed.data.size,
      CacheControl: "public, max-age=31536000, immutable",
    }),
    { expiresIn: 300 },
  );

  return NextResponse.json({
    uploadUrl,
    key,
    publicUrl: `${config.publicUrl}/${key}`,
  });
}

function getR2Config() {
  const config = {
    accountId: process.env.CLOUDFLARE_R2_ACCOUNT_ID,
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
    bucket: process.env.CLOUDFLARE_R2_BUCKET,
    publicUrl: process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL?.replace(/\/$/, ""),
  };
  if (Object.values(config).some((value) => !value)) {
    throw new Error("Cloudflare R2 is not fully configured.");
  }
  return config as Record<keyof typeof config, string>;
}

function extensionFor(contentType: string) {
  if (contentType === "image/jpeg") return "jpg";
  return contentType.split("/")[1];
}
