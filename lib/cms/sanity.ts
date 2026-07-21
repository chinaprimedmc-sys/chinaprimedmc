import "server-only";

import { sanityClient } from "@/sanity/lib/client";
import type { CmsBlogPost, CmsJourney } from "@/lib/cms/types";
import type { MediaAsset, NavigationItem } from "@/types/component-library";

export type SanityTextBlock = { title: string; description?: string };
export type SanitySiteSettings = {
  siteTitle: string;
  brandDescriptor: string;
  defaultSeoDescription: string;
  footerDescription: string;
  email: string;
  whatsapp: string;
  whatsappLabel: string;
  whatsappHref: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  navigation: NavigationItem[];
  socialLinks: Array<{ label: string; href: string }>;
  socialImage?: MediaAsset;
};

export type SanityDestination = {
  id: string;
  name: string;
  slug: string;
  region: string;
  headline: string;
  summary: string;
  kicker: string;
  bestFor: string;
  recommendedStay: string;
  bestTime: string;
  orientation: string;
  interests: string[];
  highlights: string[];
  planningNotes: string[];
  featured: boolean;
  sortOrder: number;
  seoTitle: string;
  seoDescription: string;
  heroImage?: MediaAsset;
};

export type SanityHomePage = {
  heroEyebrow: string;
  heroTitle: string;
  heroCopy: string;
  heroImage?: MediaAsset;
  heroTrustItems: string[];
  featuredJourneys: CmsJourney[];
  featuredDestinations: SanityDestination[];
  featuredPosts: CmsBlogPost[];
  destinationsEyebrow: string;
  destinationsTitle: string;
  destinationsCopy: string;
  whyEyebrow: string;
  whyTitle: string;
  whyCopy: string;
  whyStats: SanityTextBlock[];
  whyPoints: SanityTextBlock[];
  planningEyebrow: string;
  planningTitle: string;
  planningCopy: string;
  planningImage?: MediaAsset;
  planningSteps: SanityTextBlock[];
  tradeEyebrow: string;
  tradeTitle: string;
  tradeCopy: string;
  tradeImages: MediaAsset[];
  journalEyebrow: string;
  journalTitle: string;
  journalCopy: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaCopy: string;
  ctaImage?: MediaAsset;
};

export type SanityDestinationHub = {
  heroEyebrow: string;
  heroTitle: string;
  heroCopy: string;
  heroImage?: MediaAsset;
  interestEyebrow: string;
  interestTitle: string;
  interestCopy: string;
  interests: Array<{ id: string; label: string; note: string; image?: MediaAsset }>;
  featuredEyebrow: string;
  featuredTitle: string;
  featuredCopy: string;
  featuredDestinations: SanityDestination[];
  regionsEyebrow: string;
  regionsTitle: string;
  regionsCopy: string;
  regions: Array<{ id: string; label: string; note: string }>;
  journeysEyebrow: string;
  journeysTitle: string;
  journeysCopy: string;
  featuredJourneys: CmsJourney[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaCopy: string;
  ctaLabel: string;
};

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

const publicMediaProjection = `{
  "src": url,
  "alt": alt,
  width,
  height,
  "objectPosition": coalesce(objectPosition, "50% 50%")
}`;

const destinationProjection = `{
  "id": _id,
  name,
  "slug": slug.current,
  region,
  headline,
  summary,
  kicker,
  bestFor,
  recommendedStay,
  bestTime,
  orientation,
  interests,
  highlights,
  planningNotes,
  featured,
  "sortOrder": coalesce(sortOrder, 100),
  "seoTitle": seoTitle,
  "seoDescription": seoDescription,
  "heroImage": heroImage${publicMediaProjection}
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

export function getSanityDestinations() {
  return sanityClient.fetch<SanityDestination[]>(
    `*[_type == "destination" && defined(slug.current)] | order(coalesce(sortOrder, 100) asc, name asc) ${destinationProjection}`,
    {},
    { next: { revalidate: 60, tags: ["cms-destinations"] } },
  );
}

export function getSanityDestination(slug: string) {
  return sanityClient.fetch<SanityDestination | null>(
    `*[_type == "destination" && slug.current == $slug][0] ${destinationProjection}`,
    { slug },
    { next: { revalidate: 60, tags: ["cms-destinations", `cms-destination-${slug}`] } },
  );
}

export function getSanitySiteSettings() {
  return sanityClient.fetch<SanitySiteSettings | null>(
    `*[_type == "siteSettings" && _id == "siteSettings"][0]{
      siteTitle,
      brandDescriptor,
      defaultSeoDescription,
      footerDescription,
      email,
      whatsapp,
      whatsappLabel,
      whatsappHref,
      primaryCtaLabel,
      primaryCtaHref,
      navigation[]{label, href},
      socialLinks[]{label, href},
      "socialImage": socialImage${publicMediaProjection}
    }`,
    {},
    { next: { revalidate: 60, tags: ["cms-site-settings"] } },
  );
}

export function getSanityHomePage() {
  return sanityClient.fetch<SanityHomePage | null>(
    `*[_type == "homePage" && _id == "homePage"][0]{
      heroEyebrow,
      heroTitle,
      heroCopy,
      "heroImage": heroImage${publicMediaProjection},
      heroTrustItems,
      "featuredJourneys": featuredJourneys[]->${journeyProjection},
      "featuredDestinations": featuredDestinations[]->${destinationProjection},
      "featuredPosts": featuredPosts[]->${blogProjection},
      destinationsEyebrow,
      destinationsTitle,
      destinationsCopy,
      whyEyebrow,
      whyTitle,
      whyCopy,
      whyStats[]{title, description},
      whyPoints[]{title, description},
      planningEyebrow,
      planningTitle,
      planningCopy,
      "planningImage": planningImage${publicMediaProjection},
      planningSteps[]{title, description},
      tradeEyebrow,
      tradeTitle,
      tradeCopy,
      "tradeImages": tradeImages[]${publicMediaProjection},
      journalEyebrow,
      journalTitle,
      journalCopy,
      ctaEyebrow,
      ctaTitle,
      ctaCopy,
      "ctaImage": ctaImage${publicMediaProjection}
    }`,
    {},
    { next: { revalidate: 60, tags: ["cms-home"] } },
  );
}

export function getSanityDestinationHub() {
  return sanityClient.fetch<SanityDestinationHub | null>(
    `*[_type == "destinationHub" && _id == "destinationHub"][0]{
      heroEyebrow,
      heroTitle,
      heroCopy,
      "heroImage": heroImage${publicMediaProjection},
      interestEyebrow,
      interestTitle,
      interestCopy,
      interests[]{id, label, note, "image": image${publicMediaProjection}},
      featuredEyebrow,
      featuredTitle,
      featuredCopy,
      "featuredDestinations": featuredDestinations[]->${destinationProjection},
      regionsEyebrow,
      regionsTitle,
      regionsCopy,
      regions[]{id, label, note},
      journeysEyebrow,
      journeysTitle,
      journeysCopy,
      "featuredJourneys": featuredJourneys[]->${journeyProjection},
      ctaEyebrow,
      ctaTitle,
      ctaCopy,
      ctaLabel
    }`,
    {},
    { next: { revalidate: 60, tags: ["cms-destination-hub"] } },
  );
}
