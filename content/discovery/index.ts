import { destinations, getDestinationBySlug } from "@/content/destinations";
import { destinationAsset } from "@/content/destinations/assets";
import { journalArticles } from "@/content/journal";
import { audienceGuides, planningCards, planningFaqCategories } from "@/content/planning";
import { tours } from "@/content/tours";
import type { DiscoveryFilters, DiscoveryItem, DiscoveryType } from "@/types/discovery";

const destinationItems: DiscoveryItem[] = destinations.map((destination) => {
  const travelStyle = destination.quickFacts.find((fact) => fact.label === "Travel Style")?.value;
  const seasons = destination.bestTime.seasons.map((season) => season.label);

  return {
    id: `destination:${destination.slug}`,
    type: "destination",
    title: destination.name,
    description: `${destination.hero.tagline} ${destination.hero.summary}`,
    href: `/destinations/${destination.slug}`,
    image: destination.hero.image,
    category: "Destination",
    tags: [
      destination.slug,
      destination.region.toLowerCase().replaceAll(" ", "-"),
      ...destination.highlights.map((highlight) => highlight.category.toLowerCase()),
      ...(travelStyle
        ? travelStyle.split(",").map((style) => style.trim().toLowerCase().replaceAll(" ", "-"))
        : []),
    ],
    region: destination.region,
    season: seasons,
    travelStyle: travelStyle?.split(",").map((style) => style.trim()),
    interests: destination.highlights.map((highlight) => highlight.category),
    familyFriendly: destination.quickFacts
      .find((fact) => fact.label === "Suitable For")
      ?.value.toLowerCase()
      .includes("famil"),
    privateTour: true,
  };
});

const tourItems: DiscoveryItem[] = tours.map((tour) => ({
  id: `tour:${tour.slug}`,
  type: "tour",
  title: tour.title,
  description: tour.subtitle,
  href: `/tours/${tour.slug}`,
  image: tour.hero.image,
  category: "Private Tour",
  tags: [
    tour.slug,
    ...tour.styles.map((style) => style.toLowerCase().replaceAll(" ", "-")),
    ...tour.route.toLowerCase().split(", "),
  ],
  region: "Multi-region",
  season: ["Spring", "Autumn", "Summer"],
  travelStyle: tour.styles,
  interests: ["Culture", "Family", "Food", "Photography", "Train Travel"],
  days: Number.parseInt(tour.duration, 10),
  luxuryLevel: "Luxury",
  familyFriendly: tour.styles.includes("Family"),
  privateTour: true,
}));

const experienceItems: DiscoveryItem[] = [
  {
    id: "experience:pandas",
    type: "experience",
    title: "Panda morning in Chengdu",
    description:
      "A family-friendly panda experience planned at a smarter hour, with relaxed guide pacing.",
    href: "/search?type=experience&q=panda",
    image: destinationAsset.chengduPanda,
    category: "Experience",
    tags: ["chengdu", "pandas", "family-travel", "wildlife"],
    region: "Southwest China",
    travelStyle: ["Family", "First-time China"],
    interests: ["Family", "Nature"],
    familyFriendly: true,
  },
  {
    id: "experience:private-guides",
    type: "experience",
    title: "Private guide storytelling",
    description:
      "Context-rich guiding that adapts to children, older parents, photographers, or first-time visitors.",
    href: "/search?type=experience&q=private%20guide",
    image: destinationAsset.beijingForbiddenCityWide,
    category: "Experience",
    tags: ["private-guides", "culture", "first-time-china", "beijing"],
    region: "China-wide",
    travelStyle: ["Culture", "Luxury", "Family"],
    interests: ["Culture", "History"],
    privateTour: true,
  },
  {
    id: "experience:train-travel",
    type: "experience",
    title: "High-speed rail made easy",
    description:
      "Station timing, tickets, luggage flow, and transfer support so China by rail feels smooth.",
    href: "/search?type=experience&q=rail",
    image: destinationAsset.shanghaiSkyline,
    category: "Experience",
    tags: ["train-travel", "logistics", "first-time-china"],
    region: "China-wide",
    travelStyle: ["First-time China", "Family"],
    interests: ["Train Travel"],
  },
];

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

const planningItems: DiscoveryItem[] = planningCards.map((card) => ({
  id: `planning:${card.href}`,
  type: card.href === "/faq" ? "faq" : "experience",
  title: card.title,
  description: card.description,
  href: card.href,
  image: card.image,
  category: "Planning",
  tags: [
    card.title.toLowerCase().replaceAll(" ", "-"),
    ...card.badges.map((badge) => badge.toLowerCase().replaceAll(" ", "-")),
  ],
  familyFriendly: card.href.includes("travellers=families"),
  privateTour: true,
}));

const startPlanningItem: DiscoveryItem = {
  id: "planning:start-planning",
  type: "experience",
  title: "Start Planning",
  description:
    "A short multi-step inquiry for private China travelers covering who is traveling, dates, style, and contact preferences.",
  href: "/start-planning",
  category: "Planning",
  tags: ["start-planning", "inquiry", "custom-route", "private-china"],
  privateTour: true,
};

const audienceGuideItems: DiscoveryItem[] = audienceGuides.map((guide) => ({
  id: `audience:${guide.slug}`,
  type: "experience",
  title: guide.slug === "family-travel" ? "Family Travel" : "Senior Travel",
  description: guide.summary,
  href:
    guide.slug === "family-travel"
      ? "/tours?travellers=families"
      : "/tours?needs=slower-pacing&pace=easy&sort=relaxed",
  image: guide.image,
  category: "Audience",
  tags: [
    guide.slug,
    ...guide.bestFor.map((item) => item.toLowerCase().replaceAll(" ", "-")),
    ...guide.designDetails.map((item) => item.title.toLowerCase().replaceAll(" ", "-")),
  ],
  travelStyle: [guide.slug === "family-travel" ? "Family" : "Senior-friendly"],
  interests: guide.designDetails.map((item) => item.title),
  familyFriendly: guide.slug === "family-travel",
  privateTour: true,
}));

const planningFaqItems: DiscoveryItem[] = planningFaqCategories.flatMap((category, index) =>
  category.items.map((item, itemIndex) => ({
    id: `planning-faq:${index}-${itemIndex}`,
    type: "faq" as const,
    title: item.question,
    description: item.answer,
    href: "/faq",
    category: "Planning FAQ",
    tags: [
      category.category.toLowerCase().replaceAll(" ", "-"),
      "faq",
      item.question.toLowerCase().replaceAll(" ", "-"),
    ],
    interests: [category.category],
  })),
);

export const discoveryIndex: DiscoveryItem[] = [
  ...destinationItems,
  ...tourItems,
  ...experienceItems,
  startPlanningItem,
  ...planningItems,
  ...audienceGuideItems,
  ...planningFaqItems,
  ...articleItems,
];

export const popularSearches = [
  "Beijing",
  "China with kids",
  "Pandas",
  "First China itinerary",
  "High-speed rail",
  "Best time to visit China",
  "Visa",
  "Family travel",
  "Senior travel",
];

export function searchDiscovery(query: string, filters: DiscoveryFilters = {}) {
  const normalizedQuery = normalize(query || filters.query || "");
  const terms = normalizedQuery.split(" ").filter(Boolean);

  return discoveryIndex
    .map((item) => ({ ...item, score: scoreItem(item, terms) }))
    .filter((item) => item.score > 0 || !terms.length)
    .filter((item) => matchesFilters(item, filters))
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0) || a.title.localeCompare(b.title));
}

export function getSmartSuggestions(query: string) {
  const results = searchDiscovery(query).slice(0, 6);

  if (results.length) {
    return results;
  }

  return discoveryIndex
    .filter((item) => ["destination", "tour", "article"].includes(item.type))
    .slice(0, 5);
}

export function getRecommendationsForItem(item: DiscoveryItem) {
  const tagSet = new Set(item.tags);
  return discoveryIndex
    .filter((candidate) => candidate.id !== item.id)
    .map((candidate) => ({
      ...candidate,
      score: candidate.tags.reduce((total, tag) => total + (tagSet.has(tag) ? 2 : 0), 0),
    }))
    .filter((candidate) => (candidate.score ?? 0) > 0)
    .sort((a, b) => (b.score ?? 0) - (a.score ?? 0))
    .slice(0, 6);
}

export function getRecommendationsByType(type: DiscoveryType) {
  return discoveryIndex.filter((item) => item.type === type).slice(0, 6);
}

export function getDiscoveryItem(id: string) {
  return discoveryIndex.find((item) => item.id === id);
}

export function getDiscoveryItemByHref(href: string) {
  return discoveryIndex.find((item) => item.href === href);
}

export function getRelatedForDestination(slug: string) {
  const destination = getDestinationBySlug(slug);
  const item = discoveryIndex.find((candidate) => candidate.href === `/destinations/${slug}`);

  if (!destination || !item) {
    return [];
  }

  return getRecommendationsForItem(item);
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
