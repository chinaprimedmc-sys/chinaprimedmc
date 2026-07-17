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
  }).catch(async (error) => {
    await deleteStorageObject(storagePath);
    throw error;
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

export async function DELETE(request: Request) {
  const id = new URL(request.url).searchParams.get("id");
  if (!id) return NextResponse.json({ error: "Missing media ID." }, { status: 400 });
  const rows = await supabaseRest<Array<{ storage_path: string }>>(
    `cms_media_assets?select=storage_path&id=eq.${encodeURIComponent(id)}&limit=1`,
    { role: "service", cache: "no-store" },
  );
  const media = rows[0];
  if (!media) return NextResponse.json({ error: "Media not found." }, { status: 404 });

  const referenced = await supabaseRest<boolean>("rpc/media_is_referenced", {
    role: "service",
    method: "POST",
    body: JSON.stringify({ media_id: id }),
    cache: "no-store",
  });
  if (referenced) {
    return NextResponse.json({ error: "图片仍被内容引用，不能删除。" }, { status: 409 });
  }

  await deleteStorageObject(media.storage_path);
  await supabaseRest(`cms_media_assets?id=eq.${id}`, {
    role: "service",
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
    cache: "no-store",
  });
  return NextResponse.json({ ok: true });
}

async function deleteStorageObject(storagePath: string) {
  const { url, key } = getSupabaseServiceConfig();
  const response = await fetch(`${url}/storage/v1/object/cms-media/${storagePath}`, {
    method: "DELETE",
    headers: { apikey: key, Authorization: `Bearer ${key}` },
  });
  if (!response.ok && response.status !== 404) throw new Error("Storage cleanup failed.");
}
