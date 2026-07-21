import "server-only";

import { supabaseRest } from "@/lib/supabase/server";
import {
  getSanityJourney,
  getSanityJourneys,
  getSanityPost,
  getSanityPosts,
} from "@/lib/cms/sanity";
import {
  getCoreJourneyFallback,
  mergeCoreJourneyFallbacks,
  normalizeCoreJourneyTitle,
} from "@/lib/cms/core-journey-fallbacks";
import type { CmsMediaAsset } from "@/lib/cms/types";

const mediaColumns =
  "id,file_name,url,storage_path,mime_type,size_bytes,width,height,alt_text,object_position";

export async function getPublishedCmsJourneys() {
  return mergeCoreJourneyFallbacks((await safeSanity(getSanityJourneys)) ?? []);
}

export async function getPublishedCmsJourney(slug: string) {
  const sanityJourney = await safeSanity(() => getSanityJourney(slug));
  return sanityJourney ? normalizeCoreJourneyTitle(sanityJourney) : getCoreJourneyFallback(slug);
}

export async function getPublishedCmsPosts() {
  return (await safeSanity(getSanityPosts)) ?? [];
}

export async function getPublishedCmsPost(slug: string) {
  const sanityPost = await safeSanity(() => getSanityPost(slug));
  return sanityPost ?? null;
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

async function safeSanity<T>(operation: () => Promise<T>) {
  try {
    return await operation();
  } catch (error) {
    console.error("Sanity CMS read failed.", error);
    return null;
  }
}
