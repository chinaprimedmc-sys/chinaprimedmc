import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import { cmsBlogInputSchema, cmsJourneyInputSchema } from "@/lib/cms/schema";
import { supabaseRest } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed =
    body?.type === "journey"
      ? cmsJourneyInputSchema.safeParse(body)
      : cmsBlogInputSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "请检查必填字段。", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const input = parsed.data;
  const now = new Date().toISOString();
  const isJourney = input.type === "journey";
  const table = isJourney ? "cms_journeys" : "cms_blog_posts";
  const record = isJourney
    ? {
        title: input.title,
        slug: input.slug,
        subtitle: input.subtitle,
        summary: input.summary,
        route: input.route,
        duration_label: input.durationLabel,
        price: input.price,
        best_for: input.bestFor,
        status: input.status,
        hero_image_id: input.heroImageId ?? null,
        seo_title: input.seoTitle,
        seo_description: input.seoDescription,
        content: {
          intro: input.summary,
          body: input.body,
          styles: input.styles,
          destinations: input.destinations,
          days: input.days,
          gallery: input.gallery,
        },
        published_at: input.status === "published" ? now : null,
        updated_at: now,
      }
    : {
        title: input.title,
        slug: input.slug,
        subtitle: input.subtitle,
        summary: input.summary,
        category: input.category,
        author: input.author,
        status: input.status,
        hero_image_id: input.heroImageId ?? null,
        seo_title: input.seoTitle,
        seo_description: input.seoDescription,
        content: {
          body: input.body,
          tags: input.tags,
          gallery: input.gallery,
          readingTime: input.readingTime,
        },
        published_at: input.status === "published" ? now : null,
        updated_at: now,
      };

  const conflict = input.id ? `id=eq.${input.id}` : "on_conflict=slug";
  const method = input.id ? "PATCH" : "POST";
  const result = await supabaseRest<Array<{ id: string; slug: string }>>(
    `${table}?${conflict}&select=id,slug`,
    {
      role: "service",
      method,
      headers: {
        Prefer: input.id
          ? "return=representation"
          : "resolution=merge-duplicates,return=representation",
      },
      body: JSON.stringify(record),
      cache: "no-store",
    },
  );

  revalidateTag(isJourney ? "cms-journeys" : "cms-blog-posts", "max");
  revalidatePath(isJourney ? "/tours" : "/journal");
  revalidatePath(`/${isJourney ? "tours" : "journal"}/${input.slug}`);

  return NextResponse.json({ ok: true, record: result[0] });
}
