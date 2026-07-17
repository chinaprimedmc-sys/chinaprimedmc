import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { z } from "zod";

import { supabaseRest } from "@/lib/supabase/server";

const resourceTypes = ["journeys", "blog_posts"] as const;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const type = url.searchParams.get("type");
  const id = url.searchParams.get("id");
  if (
    !resourceTypes.includes(type as (typeof resourceTypes)[number]) ||
    !z.uuid().safeParse(id).success
  ) {
    return NextResponse.json({ error: "Invalid resource." }, { status: 400 });
  }
  const rows = await supabaseRest<
    Array<{ id: string; revision_number: number; created_at: string }>
  >(
    `cms_revisions?select=id,revision_number,created_at&resource_type=eq.${type}&resource_id=eq.${id}&order=revision_number.desc&limit=30`,
    { role: "service", cache: "no-store" },
  );
  return NextResponse.json({ revisions: rows });
}

export async function POST(request: Request) {
  const parsed = z
    .object({ revisionId: z.uuid(), type: z.enum(resourceTypes) })
    .safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid revision." }, { status: 400 });
  const revisions = await supabaseRest<Array<{ snapshot: Record<string, unknown> }>>(
    `cms_revisions?select=snapshot&id=eq.${parsed.data.revisionId}&resource_type=eq.${parsed.data.type}&limit=1`,
    { role: "service", cache: "no-store" },
  );
  const snapshot = revisions[0]?.snapshot;
  const id = typeof snapshot?.id === "string" ? snapshot.id : null;
  if (!snapshot || !id) return NextResponse.json({ error: "Revision not found." }, { status: 404 });
  const table = `cms_${parsed.data.type}`;
  const allowedFields =
    parsed.data.type === "journeys"
      ? [
          "title",
          "slug",
          "subtitle",
          "summary",
          "route",
          "duration_label",
          "price",
          "best_for",
          "status",
          "hero_image_id",
          "mobile_hero_image_id",
          "seo_title",
          "seo_description",
          "content",
          "sort_order",
          "published_at",
        ]
      : [
          "title",
          "slug",
          "subtitle",
          "summary",
          "category",
          "author",
          "status",
          "hero_image_id",
          "mobile_hero_image_id",
          "seo_title",
          "seo_description",
          "content",
          "sort_order",
          "published_at",
        ];
  const restored = Object.fromEntries(
    allowedFields.filter((field) => field in snapshot).map((field) => [field, snapshot[field]]),
  );
  await supabaseRest(`${table}?id=eq.${id}`, {
    role: "service",
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify({ ...restored, updated_at: new Date().toISOString() }),
    cache: "no-store",
  });
  const tag = parsed.data.type === "journeys" ? "cms-journeys" : "cms-blog-posts";
  const path = parsed.data.type === "journeys" ? "/tours" : "/journal";
  revalidateTag(tag, "max");
  revalidatePath(path);
  return NextResponse.json({ ok: true });
}
