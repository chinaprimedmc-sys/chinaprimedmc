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
  | "solo-travelers"
  | "private-groups";

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
const chengduJiuzhaigou = tours.find(
  (tour) => tour.slug === "chengdu-pandas-jiuzhaigou-private-7-day-tour",
);
const shanghaiZhangjiajie = tours.find(
  (tour) => tour.slug === "shanghai-zhangjiajie-floating-peaks",
);
const beijingUnhurried = tours.find(
  (tour) => tour.slug === "beijing-great-wall-private-5-day-tour",
);
const xianBeijing = tours.find(
  (tour) => tour.slug === "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
);

if (!flagship) {
  throw new Error("The flagship journey is required for the journeys catalog.");
}

if (!chengdu) {
  throw new Error("The Chengdu journey is required for the journeys catalog.");
}

if (!chengduJiuzhaigou) {
  throw new Error("The Chengdu and Jiuzhaigou journey is required for the journeys catalog.");
}

if (!shanghaiZhangjiajie) {
  throw new Error("The Shanghai and Zhangjiajie journey is required for the journeys catalog.");
}

if (!beijingUnhurried) {
  throw new Error("The five-day Beijing journey is required for the journeys catalog.");
}

if (!xianBeijing) {
  throw new Error("The Xi'an and Beijing journey is required for the journeys catalog.");
}

const firstChina: JourneyCatalogItem = {
  slug: flagship.slug,
  title: flagship.title,
  eyebrow: "Featured journey",
  summary: flagship.subtitle,
  hook: "Three defining cities with expert private guides, considered hotels and well-managed rail travel.",
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
    "solo-travelers",
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
  hook: "Pandas at the right hour, one comfortable hotel base and Sichuan food guided by local knowledge.",
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
    "solo-travelers",
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

const chengduJiuzhaigouJourney: JourneyCatalogItem = {
  slug: chengduJiuzhaigou.slug,
  title: chengduJiuzhaigou.title,
  eyebrow: "Private Sichuan journey",
  summary: chengduJiuzhaigou.subtitle,
  hook: "Pandas at a better hour, Sichuan food and Jiuzhaigou's alpine lakes, connected with private support.",
  image: chengduJiuzhaigou.hero.image,
  href: `/tours/${chengduJiuzhaigou.slug}`,
  kind: "featured",
  routeLabel: chengduJiuzhaigou.route,
  durationLabel: "7 days / 6 nights",
  styleFilters: ["Nature", "Family", "Food", "Photography", "Slow Travel"],
  destinationFilters: ["Chengdu", "Jiuzhaigou"],
  bestForFilters: ["Families", "Couples", "Nature travellers", "Photography travellers"],
  experienceFilters: ["pandas", "food", "scenery", "local-life", "photography"],
  travelerFilters: [
    "first-time",
    "couples",
    "families",
    "multigenerational",
    "older-travelers",
    "private-groups",
    "solo-travelers",
  ],
  planningNeedFilters: [
    "muslim-friendly",
    "vegetarian-friendly",
    "slower-pacing",
    "child-friendly",
    "mobility-aware",
    "food-focused",
    "photography-led",
  ],
  recommendedDaysMin: 7,
  recommendedDaysMax: 8,
  destinations: [
    { label: "Chengdu", href: "/destinations/chengdu" },
    { label: "Jiuzhaigou", href: "/destinations/jiuzhaigou" },
  ],
  planningNote:
    "Ends in the Jiuzhaigou area; add a Chengdu return when your onward flight requires it.",
};

const shanghaiZhangjiajieJourney: JourneyCatalogItem = {
  slug: shanghaiZhangjiajie.slug,
  title: shanghaiZhangjiajie.title,
  eyebrow: "New private journey",
  summary: shanghaiZhangjiajie.subtitle,
  hook: "City energy and extraordinary mountain scenery, connected by a carefully managed domestic flight plan.",
  image: shanghaiZhangjiajie.hero.image,
  href: `/tours/${shanghaiZhangjiajie.slug}`,
  kind: "featured",
  routeLabel: shanghaiZhangjiajie.route,
  durationLabel: "8 days / 7 nights",
  styleFilters: ["Quiet Luxury", "Family", "Photography", "Slow Travel"],
  destinationFilters: ["Shanghai", "Zhangjiajie"],
  bestForFilters: ["First-time visitors", "Families", "Couples", "Luxury travelers"],
  experienceFilters: ["scenery", "modern-cities", "local-life", "photography"],
  travelerFilters: [
    "first-time",
    "couples",
    "families",
    "multigenerational",
    "older-travelers",
    "private-groups",
    "solo-travelers",
  ],
  planningNeedFilters: [
    "muslim-friendly",
    "vegetarian-friendly",
    "slower-pacing",
    "child-friendly",
    "mobility-aware",
    "quiet-luxury",
    "photography-led",
  ],
  recommendedDaysMin: 8,
  recommendedDaysMax: 8,
  destinations: [
    { label: "Shanghai", href: "/destinations/shanghai" },
    { label: "Zhangjiajie", href: "/destinations/zhangjiajie" },
  ],
};

const beijingUnhurriedJourney: JourneyCatalogItem = {
  slug: beijingUnhurried.slug,
  title: beijingUnhurried.title,
  eyebrow: "New private journey",
  summary: beijingUnhurried.subtitle,
  hook: "One well-located hotel, expert private support and Beijing's essential landmarks across five considered days.",
  image: beijingUnhurried.hero.image,
  href: `/tours/${beijingUnhurried.slug}`,
  kind: "featured",
  routeLabel: beijingUnhurried.route,
  durationLabel: "5 days / 4 nights",
  styleFilters: ["Quiet Luxury", "Culture", "Slow Travel"],
  destinationFilters: ["Beijing"],
  bestForFilters: ["First-time visitors", "Families", "Couples", "Seniors"],
  experienceFilters: ["great-wall", "ancient-china", "food", "local-life", "photography"],
  travelerFilters: [
    "first-time",
    "couples",
    "families",
    "multigenerational",
    "older-travelers",
    "private-groups",
    "solo-travelers",
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
  recommendedDaysMin: 5,
  recommendedDaysMax: 5,
  destinations: [{ label: "Beijing", href: "/destinations/beijing" }],
};

const xianBeijingJourney: JourneyCatalogItem = {
  slug: xianBeijing.slug,
  title: xianBeijing.title,
  eyebrow: "Private imperial capitals journey",
  summary: xianBeijing.subtitle,
  hook: "Terracotta Warriors, Xi'an's living heritage and the Great Wall, linked by private support and high-speed rail.",
  image: xianBeijing.hero.image,
  href: `/tours/${xianBeijing.slug}`,
  kind: "featured",
  routeLabel: xianBeijing.route,
  durationLabel: "6 days / 5 nights",
  styleFilters: ["Quiet Luxury", "Culture", "Family", "Slow Travel"],
  destinationFilters: ["Xi'an", "Beijing"],
  bestForFilters: ["First-time visitors", "Families", "Couples", "Muslim travelers"],
  experienceFilters: ["great-wall", "ancient-china", "food", "local-life", "photography"],
  travelerFilters: [
    "first-time",
    "couples",
    "families",
    "multigenerational",
    "older-travelers",
    "private-groups",
    "solo-travelers",
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
  recommendedDaysMin: 6,
  recommendedDaysMax: 7,
  destinations: [
    { label: "Xi'an", href: "/destinations/xian" },
    { label: "Beijing", href: "/destinations/beijing" },
  ],
};

export const journeyCatalog: JourneyCatalogItem[] = [
  firstChina,
  chengduJourney,
  chengduJiuzhaigouJourney,
  beijingUnhurriedJourney,
  shanghaiZhangjiajieJourney,
  xianBeijingJourney,
];

export function getJourneyCatalogItem(slug: string) {
  return journeyCatalog.find((item) => item.slug === slug);
}
