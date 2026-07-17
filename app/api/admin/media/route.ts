import { NextResponse } from "next/server";

import { getSupabaseServiceConfig, supabaseRest } from "@/lib/supabase/server";

const allowedTypes = new Set(["image/webp", "image/jpeg", "image/png"]);
const maxSize = 5 * 1024 * 1024;

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file");
  const altText = String(formData.get("altText") ?? "").trim();
  const category = String(formData.get("category") ?? "general").trim();
  const width = Number(formData.get("width") ?? 0) || null;
  const height = Number(formData.get("height") ?? 0) || null;

  if (!(file instanceof File) || !allowedTypes.has(file.type) || file.size > maxSize) {
    return NextResponse.json(
      { error: "请上传 5MB 以内的 WebP、JPEG 或 PNG 图片。" },
      { status: 400 },
    );
  }
  if (altText.length < 3) {
    return NextResponse.json({ error: "请填写图片 Alt 描述。" }, { status: 400 });
  }

  const extension = file.type === "image/webp" ? "webp" : file.type === "image/png" ? "png" : "jpg";
  const safeCategory = category.replace(/[^a-z0-9-]/gi, "-").toLowerCase();
  const storagePath = `${safeCategory}/${crypto.randomUUID()}.${extension}`;
  const { url, key } = getSupabaseServiceConfig();
  const upload = await fetch(`${url}/storage/v1/object/cms-media/${storagePath}`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": file.type,
      "x-upsert": "false",
    },
    body: await file.arrayBuffer(),
  });

  if (!upload.ok) {
    return NextResponse.json({ error: "图片上传失败，请重试。" }, { status: 502 });
  }

  const publicUrl = `${url}/storage/v1/object/public/cms-media/${storagePath}`;
  const rows = await supabaseRest<Array<{ id: string }>>("cms_media_assets?select=id", {
    role: "service",
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      file_name: file.name,
      url: publicUrl,
      storage_path: storagePath,
      mime_type: file.type,
      size_bytes: file.size,
      width,
      height,
      alt_text: altText,
      category: safeCategory,
      usage: "website",
      object_position: "50% 50%",
      metadata: { uploaded_via: "admin-cms" },
    }),
    cache: "no-store",
  });

  return NextResponse.json({
    ok: true,
    media: {
      id: rows[0]?.id,
      src: publicUrl,
      alt: altText,
      width,
      height,
      objectPosition: "50% 50%",
    },
  });
}
