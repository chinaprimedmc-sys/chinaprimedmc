import { tours } from "@/content/tours";
import { firstChinaAsset } from "@/content/tours/assets";
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
  paceLabel: string;
  transportSummary: string;
  highlights: string[];
  bestForSummary: string;
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
  pricing: JourneyPricing;
  discovery: JourneyDiscoveryData;
};

export type JourneyPricing = {
  fromUsd: number;
  basis: string;
  inclusionSummary: string;
  finalPriceNote: string;
  additionalNote?: string;
};

export type JourneyDiscoveryData = {
  focus: JourneyFocusId[];
  pace: "easy" | "balanced" | "active";
  walkingLevel: "minimal" | "moderate" | "active";
  altitude: "none" | "some" | "high";
  transport: Array<"private-car" | "high-speed-rail" | "domestic-flight">;
  seasons: Array<"spring" | "summer" | "autumn" | "winter">;
  hotelChanges: number;
  featuredRank: number;
  searchableText: string;
};

export type JourneyFocusId =
  | "first-trip"
  | "culture"
  | "food"
  | "nature"
  | "wildlife"
  | "family"
  | "photography"
  | "slow-travel";

type JourneyCatalogBase = Omit<
  JourneyCatalogItem,
  "paceLabel" | "transportSummary" | "highlights" | "bestForSummary" | "pricing" | "discovery"
>;

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
  | "women-traveler-support"
  | "vegetarian-friendly"
  | "slower-pacing"
  | "child-friendly"
  | "mobility-aware"
  | "quiet-luxury"
  | "food-focused"
  | "photography-led";

const flagship = tours.find((tour) => tour.slug === "first-china-beautifully-paced");
const beijingXianChengduShanghai = tours.find(
  (tour) => tour.slug === "beijing-xian-chengdu-shanghai-private-11-day-tour",
);
const chengduChongqingZhangjiajie = tours.find(
  (tour) => tour.slug === "chengdu-chongqing-zhangjiajie-private-11-day-tour",
);
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

if (!beijingXianChengduShanghai) {
  throw new Error("The 11-day Beijing, Xi'an, Chengdu and Shanghai journey is required.");
}

if (!chengduChongqingZhangjiajie) {
  throw new Error("The 11-day Chengdu, Chongqing and Zhangjiajie journey is required.");
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

const firstChina: JourneyCatalogBase = {
  slug: flagship.slug,
  title: flagship.title,
  eyebrow: "Featured journey",
  summary: flagship.subtitle,
  hook: "Three defining cities with expert private guides, considered hotels and well-managed rail travel.",
  image: firstChinaAsset.shanghaiWaterfrontGroup,
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

const chengduChongqingZhangjiajieJourney: JourneyCatalogBase = {
  slug: chengduChongqingZhangjiajie.slug,
  title: chengduChongqingZhangjiajie.title,
  eyebrow: "New private journey",
  summary: chengduChongqingZhangjiajie.subtitle,
  hook: "Pandas, Sichuan flavor, Chongqing after dark and Zhangjiajie's sandstone peaks, with two days left open for your own rhythm.",
  image: chengduChongqingZhangjiajie.hero.image,
  href: `/tours/${chengduChongqingZhangjiajie.slug}`,
  kind: "featured",
  routeLabel: chengduChongqingZhangjiajie.route,
  durationLabel: "11 days / 10 nights",
  styleFilters: ["Nature", "Family", "Food", "Photography", "Quiet Luxury", "Slow Travel"],
  destinationFilters: ["Chengdu", "Chongqing", "Zhangjiajie"],
  bestForFilters: [
    "Couples",
    "Families",
    "Nature travellers",
    "Food lovers",
    "Photography travellers",
  ],
  experienceFilters: ["pandas", "food", "scenery", "modern-cities", "local-life", "photography"],
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
  recommendedDaysMin: 10,
  recommendedDaysMax: 12,
  destinations: [
    { label: "Chengdu", href: "/destinations/chengdu" },
    { label: "Chongqing", href: "/destinations/chongqing" },
    { label: "Zhangjiajie", href: "/destinations/zhangjiajie" },
  ],
  planningNote:
    "Days 6 and 10 can remain entirely open or become paid private experiences selected in advance.",
};

const beijingXianChengduShanghaiJourney: JourneyCatalogBase = {
  slug: beijingXianChengduShanghai.slug,
  title: beijingXianChengduShanghai.title,
  eyebrow: "Signature first-time China journey",
  summary: beijingXianChengduShanghai.subtitle,
  hook: "The Great Wall, Terracotta Warriors, giant pandas and Shanghai, connected with private support across eleven balanced days.",
  image: beijingXianChengduShanghai.hero.image,
  href: `/tours/${beijingXianChengduShanghai.slug}`,
  kind: "featured",
  routeLabel: beijingXianChengduShanghai.route,
  durationLabel: "11 days / 10 nights",
  styleFilters: ["First-time China", "Family", "Culture", "Food"],
  destinationFilters: ["Beijing", "Xi'an", "Chengdu", "Shanghai"],
  bestForFilters: ["First-time visitors", "Families", "Couples", "Multigenerational travelers"],
  experienceFilters: [
    "pandas",
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
  ],
  planningNeedFilters: [
    "muslim-friendly",
    "vegetarian-friendly",
    "slower-pacing",
    "child-friendly",
    "mobility-aware",
    "food-focused",
  ],
  recommendedDaysMin: 11,
  recommendedDaysMax: 12,
  destinations: [
    { label: "Beijing", href: "/destinations/beijing" },
    { label: "Xi'an", href: "/destinations/xian" },
    { label: "Chengdu", href: "/destinations/chengdu" },
    { label: "Shanghai", href: "/destinations/shanghai" },
  ],
  planningNote:
    "The framework uses high-speed rail between Beijing, Xi'an and Chengdu, then a domestic flight to Shanghai; final services depend on your dates.",
};

const chengduJourney: JourneyCatalogBase = {
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

const chengduJiuzhaigouJourney: JourneyCatalogBase = {
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

const shanghaiZhangjiajieJourney: JourneyCatalogBase = {
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

const beijingUnhurriedJourney: JourneyCatalogBase = {
  slug: beijingUnhurried.slug,
  title: beijingUnhurried.title,
  eyebrow: "New private journey",
  summary: beijingUnhurried.subtitle,
  hook: "One well-located hotel, expert private support and Beijing's essential landmarks across five considered days.",
  image: firstChinaAsset.beijingGreatWallSunriseHero,
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

const xianBeijingJourney: JourneyCatalogBase = {
  slug: xianBeijing.slug,
  title: xianBeijing.title,
  eyebrow: "Private imperial capitals journey",
  summary: xianBeijing.subtitle,
  hook: "Terracotta Warriors, Xi'an's living heritage and the Great Wall, linked by private support and high-speed rail.",
  image: {
    src: "/tours/xian-beijing-private-journey/day-02.webp",
    alt: "Terracotta Warriors standing in formation near Xi'an",
    width: 1600,
    height: 1067,
  },
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

const journeyCatalogBase: JourneyCatalogBase[] = [
  chengduChongqingZhangjiajieJourney,
  beijingXianChengduShanghaiJourney,
  firstChina,
  chengduJourney,
  chengduJiuzhaigouJourney,
  beijingUnhurriedJourney,
  shanghaiZhangjiajieJourney,
  xianBeijingJourney,
];

const commercialDetails: Record<
  string,
  Pick<JourneyCatalogItem, "paceLabel" | "transportSummary" | "highlights" | "bestForSummary">
> = {
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    paceLabel: "Balanced with two flexible days",
    transportSummary: "Private transfers, high-speed rail and a domestic flight",
    highlights: ["Giant pandas", "Chongqing night views", "Zhangjiajie national parks"],
    bestForSummary: "Food, wildlife and dramatic scenery in one regional journey",
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    paceLabel: "Balanced first-time route",
    transportSummary: "Private transfers, high-speed rail and a domestic flight",
    highlights: ["Great Wall", "Terracotta Warriors", "Giant pandas", "Shanghai"],
    bestForSummary: "First-time visitors who want China's essential contrasts",
  },
  "first-china-beautifully-paced": {
    paceLabel: "Comfortable, unhurried",
    transportSummary: "Private transfers and high-speed rail between three cities",
    highlights: ["Great Wall", "Imperial Beijing", "Terracotta Warriors", "The Bund"],
    bestForSummary: "First-time visitors who prefer fewer hotel changes",
  },
  "chengdu-pandas-sichuan-table": {
    paceLabel: "Easy one-base stay",
    transportSummary: "Private vehicle throughout, with an optional Leshan day trip",
    highlights: ["Giant pandas", "Sichuan food", "Tea-house culture", "Leshan"],
    bestForSummary: "Families and food lovers seeking a short private break",
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    paceLabel: "Active nature days, planned rests",
    transportSummary: "Private transfers plus the fastest suitable Chengdu connection",
    highlights: ["Giant pandas", "Jiuzhaigou lakes", "Tibetan plateau landscapes"],
    bestForSummary: "Nature-focused travelers comfortable with altitude and park walking",
  },
  "beijing-great-wall-private-5-day-tour": {
    paceLabel: "Comfortable single-city pace",
    transportSummary: "Private airport, city and Great Wall transfers",
    highlights: ["Great Wall", "Forbidden City", "Temple of Heaven", "Hutong life"],
    bestForSummary: "A focused Beijing introduction without changing hotels",
  },
  "shanghai-zhangjiajie-floating-peaks": {
    paceLabel: "Moderate with active park days",
    transportSummary: "Private transfers and a domestic flight between regions",
    highlights: ["The Bund", "Shanghai neighborhoods", "Zhangjiajie peaks", "Glass bridge"],
    bestForSummary: "Travelers combining modern China with major mountain scenery",
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    paceLabel: "Efficient cultural route",
    transportSummary: "Private transfers and high-speed rail from Xi'an to Beijing",
    highlights: ["Terracotta Warriors", "Muslim Quarter", "Forbidden City", "Great Wall"],
    bestForSummary: "History-led travelers with six days in northern China",
  },
};

const sharedPricingDetails = {
  basis:
    "Indicative starting price per person, based on four guests sharing two rooms outside peak holiday periods. Smaller parties may have a higher per-person price because private guide and vehicle costs are shared across fewer travelers.",
  inclusionSummary:
    "Includes selected four- or five-star hotels, private guiding and vehicles on scheduled touring days, listed entrance tickets and confirmed domestic transport.",
  finalPriceNote: "Your dates, hotel preferences and travel style shape the final price.",
};

const journeyPricing: Record<string, JourneyPricing> = {
  "chengdu-pandas-sichuan-table": {
    fromUsd: 1190,
    ...sharedPricingDetails,
  },
  "beijing-great-wall-private-5-day-tour": {
    fromUsd: 1290,
    ...sharedPricingDetails,
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    fromUsd: 1590,
    ...sharedPricingDetails,
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    fromUsd: 1990,
    ...sharedPricingDetails,
  },
  "shanghai-zhangjiajie-floating-peaks": {
    fromUsd: 2290,
    ...sharedPricingDetails,
  },
  "first-china-beautifully-paced": {
    fromUsd: 2390,
    ...sharedPricingDetails,
  },
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    fromUsd: 2990,
    ...sharedPricingDetails,
    additionalNote:
      "Two open days are intentionally unprogrammed. Optional private experiences are quoted separately.",
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    fromUsd: 3290,
    ...sharedPricingDetails,
  },
};

export const journeyCatalog: JourneyCatalogItem[] = journeyCatalogBase.map((journey) => {
  const enrichedJourney: JourneyCatalogBase = {
    ...journey,
    planningNeedFilters: journey.travelerFilters.includes("solo-travelers")
      ? [...journey.planningNeedFilters, "women-traveler-support"]
      : journey.planningNeedFilters,
  };

  return {
    ...enrichedJourney,
    ...commercialDetails[journey.slug],
    pricing: journeyPricing[journey.slug],
    discovery: buildDiscoveryData(enrichedJourney, commercialDetails[journey.slug]),
  };
});

function buildDiscoveryData(
  journey: JourneyCatalogBase,
  commercial: (typeof commercialDetails)[string],
): JourneyDiscoveryData {
  const text = [
    journey.title,
    journey.summary,
    journey.hook,
    journey.routeLabel,
    journey.durationLabel,
    journey.styleFilters.join(" "),
    journey.destinationFilters.join(" "),
    journey.bestForFilters.join(" "),
    journey.experienceFilters.join(" "),
    journey.travelerFilters.join(" "),
    journey.planningNeedFilters.join(" "),
    commercial.paceLabel,
    commercial.transportSummary,
    commercial.highlights.join(" "),
    commercial.bestForSummary,
  ]
    .join(" ")
    .toLowerCase();
  const slow = /slow|comfortable|unhurried|easy|flexible/.test(commercial.paceLabel.toLowerCase());
  const active = /active|efficient/.test(commercial.paceLabel.toLowerCase());
  const transportText = commercial.transportSummary.toLowerCase();
  const focus = new Set<JourneyFocusId>();
  if (journey.travelerFilters.includes("first-time")) focus.add("first-trip");
  if (
    journey.experienceFilters.some((id) =>
      ["great-wall", "ancient-china", "silk-road"].includes(id),
    )
  )
    focus.add("culture");
  if (journey.experienceFilters.includes("food")) focus.add("food");
  if (journey.experienceFilters.includes("scenery")) focus.add("nature");
  if (journey.experienceFilters.includes("pandas")) focus.add("wildlife");
  if (journey.travelerFilters.includes("families")) focus.add("family");
  if (journey.experienceFilters.includes("photography")) focus.add("photography");
  if (journey.styleFilters.some((style) => style.toLowerCase().includes("slow")) || slow)
    focus.add("slow-travel");

  return {
    focus: Array.from(focus),
    pace: active ? "active" : slow ? "easy" : "balanced",
    walkingLevel: active ? "active" : slow ? "minimal" : "moderate",
    altitude: journey.destinationFilters.includes("Jiuzhaigou") ? "some" : "none",
    transport: [
      "private-car" as const,
      ...(transportText.includes("rail") ? (["high-speed-rail"] as const) : []),
      ...(transportText.includes("flight") ? (["domestic-flight"] as const) : []),
    ],
    seasons: ["spring", "summer", "autumn", "winter"],
    hotelChanges: Math.max(0, journey.destinationFilters.length - 1),
    featuredRank: journey.kind === "featured" ? 10 : 5,
    searchableText: text,
  };
}

export function getJourneyCatalogItem(slug: string) {
  return journeyCatalog.find((item) => item.slug === slug);
}
