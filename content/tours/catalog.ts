import { tours } from "@/content/tours";
import type { MediaAsset } from "@/types/component-library";

export type JourneyCatalogItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  hook: string;
  image: MediaAsset;
  href: string;
  kind: "featured" | "framework";
  routeLabel: string;
  durationLabel: string;
  styleFilters: string[];
  destinationFilters: string[];
  bestForFilters: string[];
  experienceFilters: JourneyExperienceId[];
  travelerFilters: JourneyTravelerId[];
  planningNeedFilters: JourneyPlanningNeedId[];
  recommendedDaysMin: number;
  recommendedDaysMax: number;
  destinations: { label: string; href: string }[];
  statusLabel?: string;
  planningNote?: string;
};

export type JourneyExperienceId =
  | "pandas"
  | "great-wall"
  | "ancient-china"
  | "food"
  | "scenery"
  | "modern-cities"
  | "local-life"
  | "photography"
  | "silk-road";

export type JourneyTravelerId =
  | "first-time"
  | "couples"
  | "families"
  | "multigenerational"
  | "older-travelers"
  | "private-groups"
  | "travel-advisors";

export type JourneyPlanningNeedId =
  | "muslim-friendly"
  | "vegetarian-friendly"
  | "slower-pacing"
  | "child-friendly"
  | "mobility-aware"
  | "quiet-luxury"
  | "food-focused"
  | "photography-led";

const flagship = tours[0];
const chengdu = tours.find((tour) => tour.slug === "chengdu-pandas-sichuan-table");

if (!flagship) {
  throw new Error("The flagship journey is required for the journeys catalog.");
}

if (!chengdu) {
  throw new Error("The Chengdu journey is required for the journeys catalog.");
}

const firstChina: JourneyCatalogItem = {
  slug: flagship.slug,
  title: flagship.title,
  eyebrow: "Featured journey",
  summary: flagship.subtitle,
  hook: "A considered first-China arc, with the pace and comfort level shaped around the people traveling.",
  image: flagship.hero.image,
  href: `/tours/${flagship.slug}`,
  kind: "featured",
  routeLabel: flagship.route,
  durationLabel: "9 days / 8 nights",
  styleFilters: ["Quiet Luxury"],
  destinationFilters: ["Beijing", "Xi'an", "Shanghai"],
  bestForFilters: ["First-time visitors", "Families", "Couples", "Luxury travelers"],
  experienceFilters: [
    "great-wall",
    "ancient-china",
    "food",
    "modern-cities",
    "local-life",
    "photography",
  ],
  travelerFilters: [
    "first-time",
    "couples",
    "families",
    "multigenerational",
    "older-travelers",
    "private-groups",
    "travel-advisors",
  ],
  planningNeedFilters: [
    "muslim-friendly",
    "vegetarian-friendly",
    "slower-pacing",
    "child-friendly",
    "mobility-aware",
    "quiet-luxury",
    "food-focused",
    "photography-led",
  ],
  recommendedDaysMin: 9,
  recommendedDaysMax: 9,
  destinations: [
    { label: "Beijing", href: "/destinations/beijing" },
    { label: "Xi'an", href: `/tours/${flagship.slug}#itinerary` },
    { label: "Shanghai", href: "/destinations/shanghai" },
  ],
};

const chengduJourney: JourneyCatalogItem = {
  slug: chengdu.slug,
  title: chengdu.title,
  eyebrow: "Private journey",
  summary: chengdu.subtitle,
  hook: "Pandas, tea, and Sichuan food with enough breathing room for families and older travelers.",
  image: chengdu.hero.image,
  href: `/tours/${chengdu.slug}`,
  kind: "featured",
  routeLabel: chengdu.route,
  durationLabel: "5 days / 4 nights",
  styleFilters: ["Family", "Food", "Slow Travel"],
  destinationFilters: ["Chengdu", "Leshan"],
  bestForFilters: ["Families", "Seniors", "Food lovers"],
  experienceFilters: ["pandas", "food", "scenery", "local-life", "photography"],
  travelerFilters: [
    "first-time",
    "families",
    "multigenerational",
    "older-travelers",
    "private-groups",
    "travel-advisors",
  ],
  planningNeedFilters: [
    "muslim-friendly",
    "vegetarian-friendly",
    "slower-pacing",
    "child-friendly",
    "mobility-aware",
    "food-focused",
  ],
  recommendedDaysMin: 5,
  recommendedDaysMax: 5,
  destinations: [
    { label: "Chengdu", href: "/destinations/chengdu" },
    { label: "Leshan", href: `/tours/${chengdu.slug}#itinerary` },
  ],
};

export const journeyCatalog: JourneyCatalogItem[] = [firstChina, chengduJourney];

export function getJourneyCatalogItem(slug: string) {
  return journeyCatalog.find((item) => item.slug === slug);
}
