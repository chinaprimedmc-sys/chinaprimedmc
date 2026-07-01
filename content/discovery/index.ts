import { journalArticles } from "@/content/journal";
export { popularSearches } from "@/content/discovery/popular";
import { getCmsCatalog } from "@/services/cms/resolver";
import type { DiscoveryFilters, DiscoveryItem, DiscoveryType } from "@/types/discovery";

const articleItems: DiscoveryItem[] = journalArticles.map((article) => ({
  id: `article:${article.slug}`,
  type: "article",
  title: article.title,
  description: article.excerpt,
  href: `/journal/${article.slug}`,
  image: article.hero.image,
  category: article.category,
  tags: article.tags,
  season:
    article.tags.includes("spring") || article.tags.includes("autumn")
      ? ["Spring", "Autumn"]
      : undefined,
  travelStyle: article.tags.includes("family-travel")
    ? ["Family"]
    : article.tags.includes("first-time-china")
      ? ["First-time China"]
      : undefined,
  interests: article.tags,
  familyFriendly: article.tags.includes("family-travel"),
}));

export async function getDiscoveryIndex() {
  const { destinations, experiences, journeys } = await getCmsCatalog();
  const destinationItems: DiscoveryItem[] = destinations
    .filter((destination) => destination.visibility.state === "published")
    .map((destination) => ({
      id: `destination:${destination.slug}`,
      type: "destination",
      title: destination.name,
      description: destination.summary,
      href: `/destination/${destination.slug}`,
      image: destination.image,
      category: destination.type,
      tags: [
        destination.slug,
        destination.region,
        destination.type,
        ...destination.experienceSlugs,
      ],
      region: destination.region,
      season: ["Spring", "Autumn"],
      travelStyle: ["First-time China", "Family", "Culture", "Luxury"],
      interests: [destination.type, "Culture", "Family"],
      familyFriendly: true,
    }));

  const journeyItems: DiscoveryItem[] = journeys
    .filter((journey) => journey.visibility.state === "published")
    .map((journey) => ({
      id: `tour:${journey.slug}`,
      type: "tour",
      title: journey.title,
      description: journey.summary,
      href: `/journey/${journey.slug}`,
      image: journey.image,
      category: journey.category,
      tags: [
        journey.slug,
        ...journey.styles.map((style) => style.toLowerCase().replaceAll(" ", "-")),
        ...journey.route
          .toLowerCase()
          .split(",")
          .map((item) => item.trim()),
        ...journey.destinationSlugs,
        ...journey.experienceSlugs,
      ],
      region: "Multi-region",
      season: ["Spring", "Autumn", "Summer"],
      travelStyle: journey.styles,
      interests: [...journey.styles, journey.category, "Private Travel", "Train Travel"],
      days: Number.parseInt(journey.duration, 10),
      luxuryLevel: "Luxury",
      familyFriendly: journey.styles.includes("Family"),
      privateTour: true,
    }));

  const experienceItems: DiscoveryItem[] = experiences
    .filter((experience) => experience.visibility.state === "published")
    .map((experience) => ({
      id: `experience:${experience.slug}`,
      type: "experience",
      title: experience.title,
      description: experience.summary,
      href: `/experience/${experience.slug}`,
      image: experience.image,
      category: experience.category,
      tags: [
        experience.slug,
        experience.category,
        ...experience.destinationSlugs,
        ...experience.journeySlugs,
      ],
      region: experience.destinationSlugs.includes("chengdu")
        ? "Southwest China"
        : experience.destinationSlugs.includes("shanghai")
          ? "East China"
          : "North China",
      travelStyle: ["Family", "First-time China", "Culture", "Luxury"],
      interests: [experience.category, ...experience.suitableFor],
      familyFriendly: experience.suitableFor.includes("Families"),
      privateTour: true,
    }));

  return [...destinationItems, ...journeyItems, ...experienceItems, ...articleItems];
}

export function searchDiscovery(
  index: DiscoveryItem[],
  query: string,
  filters: DiscoveryFilters = {},
) {
  const normalizedQuery = normalize(query || filters.query || "");
  const terms = normalizedQuery.split(" ").filter(Boolean);

  return index
    .map((item) => ({ ...item, score: scoreItem(item, terms) }))
    .filter((item) => item.score > 0 || !terms.length)
    .filter((item) => matchesFilters(item, filters))
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0) || a.title.localeCompare(b.title));
}

export function getSmartSuggestions(index: DiscoveryItem[], query: string) {
  const results = searchDiscovery(index, query).slice(0, 6);

  if (results.length) {
    return results;
  }

  return index.filter((item) => ["destination", "tour", "article"].includes(item.type)).slice(0, 5);
}

export function getRecommendationsForItem(index: DiscoveryItem[], item: DiscoveryItem) {
  const tagSet = new Set(item.tags);
  return index
    .filter((candidate): candidate is DiscoveryItem => candidate.id !== item.id)
    .map((candidate) => ({
      ...candidate,
      score: candidate.tags.reduce(
        (total: number, tag: string) => total + (tagSet.has(tag) ? 2 : 0),
        0,
      ),
    }))
    .filter((candidate) => (candidate.score ?? 0) > 0)
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, 6);
}

export function getRecommendationsByType(index: DiscoveryItem[], type: DiscoveryType) {
  return index.filter((item) => item.type === type).slice(0, 6);
}

export function getDiscoveryItem(index: DiscoveryItem[], id: string) {
  return index.find((item) => item.id === id);
}

export function getDiscoveryItemByHref(index: DiscoveryItem[], href: string) {
  return index.find((item) => item.href === href);
}

export function getRelatedForDestination(index: DiscoveryItem[], slug: string) {
  const item = index.find((candidate) => candidate.href === `/destination/${slug}`);

  if (!item) {
    return [];
  }

  return getRecommendationsForItem(index, item);
}

function scoreItem(item: DiscoveryItem, terms: string[]) {
  if (!terms.length) {
    return 1;
  }

  const haystack = normalize(
    [item.title, item.description, item.category, item.region, ...item.tags]
      .filter(Boolean)
      .join(" "),
  );

  return terms.reduce((score, term) => {
    if (haystack.includes(term)) {
      return score + (normalize(item.title).includes(term) ? 8 : 3);
    }

    return score + fuzzyScore(haystack, term);
  }, 0);
}

function matchesFilters(item: DiscoveryItem, filters: DiscoveryFilters) {
  if (filters.types?.length && !filters.types.includes(item.type)) return false;
  if (filters.region?.length && (!item.region || !filters.region.includes(item.region)))
    return false;
  if (filters.season?.length && !hasOverlap(item.season, filters.season)) return false;
  if (filters.travelStyle?.length && !hasOverlap(item.travelStyle, filters.travelStyle))
    return false;
  if (filters.interests?.length && !hasOverlap(item.interests, filters.interests)) return false;
  if (filters.category?.length && (!item.category || !filters.category.includes(item.category)))
    return false;
  if (filters.tags?.length && !hasOverlap(item.tags, filters.tags)) return false;
  if (filters.destination?.length && !hasOverlap(item.tags, filters.destination)) return false;
  if (
    filters.luxuryLevel?.length &&
    (!item.luxuryLevel || !filters.luxuryLevel.includes(item.luxuryLevel))
  )
    return false;
  if (filters.familyFriendly && !item.familyFriendly) return false;
  if (filters.privateTour && !item.privateTour) return false;
  if (filters.days?.length && item.days && !matchesDayRange(item.days, filters.days)) return false;

  return true;
}

function matchesDayRange(days: number, ranges: string[]) {
  return ranges.some((range) => {
    if (range === "1-7") return days <= 7;
    if (range === "8-12") return days >= 8 && days <= 12;
    if (range === "13+") return days >= 13;
    return false;
  });
}

function hasOverlap(values: string[] | undefined, filters: string[]) {
  if (!values?.length) return false;
  return values.some((value) => filters.includes(value));
}

function fuzzyScore(haystack: string, term: string) {
  let cursor = 0;
  let score = 0;

  for (const letter of term) {
    const index = haystack.indexOf(letter, cursor);
    if (index === -1) return 0;
    score += 0.25;
    cursor = index + 1;
  }

  return score;
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
