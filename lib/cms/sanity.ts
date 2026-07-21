import "server-only";

import { sanityClient } from "@/sanity/lib/client";
import type { CmsBlogPost, CmsJourney } from "@/lib/cms/types";

const r2MediaProjection = `{
  "id": coalesce(key, url),
  "file_name": coalesce(key, url),
  "url": url,
  "storage_path": key,
  "mime_type": mimeType,
  "size_bytes": coalesce(sizeBytes, 0),
  "width": width,
  "height": height,
  "alt_text": alt,
  "object_position": coalesce(objectPosition, "50% 50%")
}`;

const journeyProjection = `{
  "id": _id,
  title,
  "slug": slug.current,
  subtitle,
  summary,
  route,
  "duration_label": durationLabel,
  price,
  "best_for": bestFor,
  "status": "published",
  "seo_title": seoTitle,
  "seo_description": seoDescription,
  "content": {
    "intro": intro,
    "body": intro,
    "styles": styles,
    "destinations": destinations[]->name,
    "gallery": gallery[]{"src": url, "alt": alt, width, height, "objectPosition": objectPosition},
    "days": days[]{day, city, title, description}
  },
  "sort_order": coalesce(sortOrder, 100),
  "published_at": _createdAt,
  "updated_at": _updatedAt,
  "hero_image": heroImage${r2MediaProjection}
}`;

const blogProjection = `{
  "id": _id,
  title,
  "slug": slug.current,
  subtitle,
  summary,
  category,
  author,
  "status": "published",
  "seo_title": seoTitle,
  "seo_description": seoDescription,
  "content": {
    "body": pt::text(body),
    tags,
    "gallery": gallery[]{"src": url, "alt": alt, width, height, "objectPosition": objectPosition},
    readingTime
  },
  "sort_order": coalesce(sortOrder, 100),
  "published_at": coalesce(publishedAt, _createdAt),
  "updated_at": _updatedAt,
  "hero_image": heroImage${r2MediaProjection}
}`;

export function getSanityJourneys() {
  return sanityClient.fetch<CmsJourney[]>(
    `*[_type == "journey" && defined(slug.current)] | order(coalesce(sortOrder, 100) asc, _createdAt desc) ${journeyProjection}`,
    {},
    { next: { revalidate: 60, tags: ["cms-journeys"] } },
  );
}

export function getSanityJourney(slug: string) {
  return sanityClient.fetch<CmsJourney | null>(
    `*[_type == "journey" && slug.current == $slug][0] ${journeyProjection}`,
    { slug },
    { next: { revalidate: 60, tags: ["cms-journeys", `cms-journey-${slug}`] } },
  );
}

export function getSanityPosts() {
  return sanityClient.fetch<CmsBlogPost[]>(
    `*[_type == "blogPost" && defined(slug.current)] | order(coalesce(sortOrder, 100) asc, coalesce(publishedAt, _createdAt) desc) ${blogProjection}`,
    {},
    { next: { revalidate: 60, tags: ["cms-blog-posts"] } },
  );
}

export function getSanityPost(slug: string) {
  return sanityClient.fetch<CmsBlogPost | null>(
    `*[_type == "blogPost" && slug.current == $slug][0] ${blogProjection}`,
    { slug },
    { next: { revalidate: 60, tags: ["cms-blog-posts", `cms-blog-${slug}`] } },
  );
}
