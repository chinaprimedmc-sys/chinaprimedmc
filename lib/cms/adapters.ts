import type { JourneyCatalogItem } from "@/content/tours/catalog";
import type { CmsBlogPost, CmsJourney, CmsMediaAsset } from "@/lib/cms/types";
import type { JournalArticle, JournalCategory, JournalContentBlock } from "@/types/journal";
import type { MediaAsset } from "@/types/component-library";

const journalCategories = new Set<JournalCategory>([
  "Destinations",
  "Travel Guides",
  "Visa",
  "Food",
  "Culture",
  "Luxury Hotels",
  "Festivals",
  "Adventure",
  "Family Travel",
  "Photography",
  "Luxury Travel",
  "Train Travel",
  "Nature",
  "History",
  "Shopping",
]);

export function cmsMediaToAsset(media: CmsMediaAsset): MediaAsset {
  return {
    src: media.url,
    alt: media.alt_text,
    width: media.width ?? undefined,
    height: media.height ?? undefined,
    objectPosition: media.object_position || undefined,
  };
}

export function cmsJourneyToCatalogItem(journey: CmsJourney): JourneyCatalogItem | null {
  if (!journey.hero_image) return null;

  const destinations = journey.content.destinations ?? [];
  return {
    slug: journey.slug,
    title: journey.title,
    eyebrow: "Private journey",
    summary: journey.subtitle,
    hook: journey.summary,
    image: cmsMediaToAsset(journey.hero_image),
    href: `/tours/${journey.slug}`,
    kind: "framework",
    routeLabel: journey.route,
    durationLabel: journey.duration_label,
    styleFilters: journey.content.styles ?? [],
    destinationFilters: destinations,
    bestForFilters: splitBestFor(journey.best_for),
    destinations: destinations.map((destination) => ({
      label: destination,
      href: destinationHref(destination, journey.slug),
    })),
    statusLabel: journey.price,
    planningNote: journey.summary,
  };
}

export function isIndexableCmsJourney(journey: CmsJourney) {
  return Boolean(
    journey.hero_image &&
    journey.seo_title.trim() &&
    journey.seo_description.trim().length >= 80 &&
    journey.content.intro?.trim() &&
    journey.content.days &&
    journey.content.days.length >= 3,
  );
}

export function isIndexableCmsPost(post: CmsBlogPost) {
  return Boolean(
    post.hero_image &&
    post.published_at &&
    post.seo_title.trim() &&
    post.seo_description.trim().length >= 80 &&
    post.content.body &&
    post.content.body.trim().length >= 700,
  );
}

export function cmsBlogToArticle(post: CmsBlogPost): JournalArticle | null {
  if (!post.hero_image || !post.published_at) return null;

  const hero = cmsMediaToAsset(post.hero_image);
  return {
    slug: post.slug,
    title: post.title,
    dek: post.subtitle,
    excerpt: post.summary,
    category: toJournalCategory(post.category),
    tags: post.content.tags ?? [],
    author: { name: post.author, role: "China travel editor" },
    publishedAt: post.published_at,
    updatedAt: post.updated_at,
    readingTime: post.content.readingTime || "5 min read",
    hero: { image: hero, eyebrow: post.category },
    gallery: post.content.gallery ?? [],
    content: markdownToBlocks(post.content.body ?? ""),
    seo: {
      title: post.seo_title,
      description: post.seo_description,
      keywords: post.content.tags ?? [],
      ogImage: hero,
    },
  };
}

function markdownToBlocks(markdown: string): JournalContentBlock[] {
  const blocks: JournalContentBlock[] = [];
  let paragraph: string[] = [];

  function flushParagraph() {
    const body = paragraph.join(" ").trim();
    if (body) blocks.push({ type: "paragraph", body });
    paragraph = [];
  }

  for (const rawLine of markdown.split(/\r?\n/)) {
    const line = rawLine.trim();
    const heading = line.match(/^#{1,3}\s+(.+)$/);
    if (heading) {
      flushParagraph();
      const title = heading[1].trim();
      blocks.push({ type: "heading", id: slugify(title), title });
    } else if (!line) {
      flushParagraph();
    } else {
      paragraph.push(line.replace(/^[-*]\s+/, ""));
    }
  }
  flushParagraph();
  return blocks;
}

function toJournalCategory(value: string): JournalCategory {
  return journalCategories.has(value as JournalCategory)
    ? (value as JournalCategory)
    : "Travel Guides";
}

function splitBestFor(value: string) {
  return value
    .split(/[,/|]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function destinationHref(destination: string, journeySlug: string) {
  const slug = slugify(destination.replace("'", ""));
  if (slug === "xian") return `/tours/${journeySlug}`;
  return `/destinations/${slug}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
