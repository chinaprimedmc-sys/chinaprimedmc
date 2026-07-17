import "server-only";

import { supabaseRest } from "@/lib/supabase/server";
import type { CmsBlogPost, CmsJourney, CmsMediaAsset } from "@/lib/cms/types";

const mediaColumns =
  "id,file_name,url,storage_path,mime_type,size_bytes,width,height,alt_text,object_position";

export async function getPublishedCmsJourneys() {
  return safePublicCms(() =>
    supabaseRest<CmsJourney[]>(
      `cms_journeys?select=*,hero_image:cms_media_assets!cms_journeys_hero_image_id_fkey(${mediaColumns})&status=eq.published&order=sort_order.asc,published_at.desc`,
      { next: { revalidate: 60, tags: ["cms-journeys"] } },
    ),
  );
}

export async function getPublishedCmsJourney(slug: string) {
  const rows = await safePublicCms(() =>
    supabaseRest<CmsJourney[]>(
      `cms_journeys?select=*,hero_image:cms_media_assets!cms_journeys_hero_image_id_fkey(${mediaColumns})&status=eq.published&slug=eq.${encodeURIComponent(slug)}&limit=1`,
      { next: { revalidate: 60, tags: ["cms-journeys", `cms-journey-${slug}`] } },
    ),
  );
  return rows[0] ?? null;
}

export async function getPublishedCmsPosts() {
  return safePublicCms(() =>
    supabaseRest<CmsBlogPost[]>(
      `cms_blog_posts?select=*,hero_image:cms_media_assets!cms_blog_posts_hero_image_id_fkey(${mediaColumns})&status=eq.published&order=sort_order.asc,published_at.desc`,
      { next: { revalidate: 60, tags: ["cms-blog-posts"] } },
    ),
  );
}

export async function getPublishedCmsPost(slug: string) {
  const rows = await safePublicCms(() =>
    supabaseRest<CmsBlogPost[]>(
      `cms_blog_posts?select=*,hero_image:cms_media_assets!cms_blog_posts_hero_image_id_fkey(${mediaColumns})&status=eq.published&slug=eq.${encodeURIComponent(slug)}&limit=1`,
      { next: { revalidate: 60, tags: ["cms-blog-posts", `cms-blog-${slug}`] } },
    ),
  );
  return rows[0] ?? null;
}

export async function getAdminCmsRows<T>(table: "cms_journeys" | "cms_blog_posts") {
  return supabaseRest<T[]>(
    `${table}?select=*,hero_image:cms_media_assets!${table}_hero_image_id_fkey(${mediaColumns})&order=updated_at.desc`,
    { role: "service", cache: "no-store" },
  );
}

export async function getAdminMedia() {
  return supabaseRest<CmsMediaAsset[]>(`cms_media_assets?select=*&order=created_at.desc`, {
    role: "service",
    cache: "no-store",
  });
}

async function safePublicCms<T>(operation: () => Promise<T[]>) {
  try {
    return await operation();
  } catch (error) {
    console.error("Public CMS read failed; using static fallback.", error);
    return [];
  }
}
