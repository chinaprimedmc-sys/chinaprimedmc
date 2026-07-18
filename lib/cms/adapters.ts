import type {
  JourneyCatalogItem,
  JourneyExperienceId,
  JourneyPlanningNeedId,
  JourneyTravelerId,
} from "@/content/tours/catalog";
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
  const styles = journey.content.styles ?? [];
  const bestFor = splitBestFor(journey.best_for);
  const dayRange = parseDayRange(journey.duration_label);
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
    styleFilters: styles,
    destinationFilters: destinations,
    bestForFilters: bestFor,
    experienceFilters: inferJourneyExperiences({
      title: journey.title,
      summary: journey.summary,
      styles,
      destinations,
    }),
    travelerFilters: inferJourneyTravelers(bestFor),
    planningNeedFilters: inferPlanningNeeds({
      title: journey.title,
      summary: journey.summary,
      styles,
      bestFor,
    }),
    recommendedDaysMin: dayRange.min,
    recommendedDaysMax: dayRange.max,
    destinations: destinations.map((destination) => ({
      label: destination,
      href: destinationHref(destination, journey.slug),
    })),
    statusLabel: journey.price,
    planningNote: journey.summary,
  };
}

function inferJourneyExperiences({
  title,
  summary,
  styles,
  destinations,
}: {
  title: string;
  summary: string;
  styles: string[];
  destinations: string[];
}): JourneyExperienceId[] {
  const source = [title, summary, ...styles, ...destinations].join(" ").toLowerCase();
  const experiences = new Set<JourneyExperienceId>();

  if (/panda|wildlife|chengdu/.test(source)) experiences.add("pandas");
  if (/great wall|beijing|xi'?an|ancient|history|culture/.test(source)) {
    experiences.add("great-wall");
    experiences.add("ancient-china");
  }
  if (/food|cuisine|sichuan|market|culinary/.test(source)) experiences.add("food");
  if (/scenery|landscape|nature|mountain|river|photograph|leshan/.test(source)) {
    experiences.add("scenery");
  }
  if (/shanghai|modern|city|skyline|luxury/.test(source)) experiences.add("modern-cities");
  if (/local|slow|family|food|market|neighborhood|chengdu/.test(source)) {
    experiences.add("local-life");
  }
  if (/photograph|photo|viewpoint|landscape/.test(source)) experiences.add("photography");
  if (/silk road|dunhuang|kashgar|xinjiang|gansu/.test(source)) experiences.add("silk-road");

  return [...experiences];
}

function inferJourneyTravelers(bestFor: string[]): JourneyTravelerId[] {
  const source = bestFor.join(" ").toLowerCase();
  const travelers = new Set<JourneyTravelerId>(["private-groups", "travel-advisors"]);

  if (/first/.test(source)) travelers.add("first-time");
  if (/couple|honeymoon/.test(source)) travelers.add("couples");
  if (/family|children|kids/.test(source)) travelers.add("families");
  if (/multi/.test(source)) travelers.add("multigenerational");
  if (/senior|older/.test(source)) travelers.add("older-travelers");

  return [...travelers];
}

function inferPlanningNeeds({
  title,
  summary,
  styles,
  bestFor,
}: {
  title: string;
  summary: string;
  styles: string[];
  bestFor: string[];
}): JourneyPlanningNeedId[] {
  const source = [title, summary, ...styles, ...bestFor].join(" ").toLowerCase();
  const needs = new Set<JourneyPlanningNeedId>();

  if (/muslim|halal|prayer/.test(source)) needs.add("muslim-friendly");
  if (/vegetarian|vegan|diet/.test(source)) needs.add("vegetarian-friendly");
  if (/slow|easy|senior|older|rest/.test(source)) needs.add("slower-pacing");
  if (/family|child|kids/.test(source)) needs.add("child-friendly");
  if (/mobility|accessible|senior|older/.test(source)) needs.add("mobility-aware");
  if (/luxury|premium/.test(source)) needs.add("quiet-luxury");
  if (/food|culinary|cuisine/.test(source)) needs.add("food-focused");
  if (/photograph|photo|viewpoint/.test(source)) needs.add("photography-led");

  return [...needs];
}

function parseDayRange(label: string) {
  const values = [...label.matchAll(/\d+/g)].map((match) => Number(match[0]));
  const daysIndex = label.toLowerCase().indexOf("day");
  const beforeDays = daysIndex >= 0 ? label.slice(0, daysIndex) : label;
  const dayValues = [...beforeDays.matchAll(/\d+/g)].map((match) => Number(match[0]));
  const usableValues = dayValues.length ? dayValues : values;
  const min = usableValues[0] ?? 7;
  const max = usableValues[1] ?? min;
  return { min: Math.min(min, max), max: Math.max(min, max) };
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
