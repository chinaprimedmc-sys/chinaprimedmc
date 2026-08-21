import { tours } from "@/content/tours";
import { chinaFamilyAsset, firstChinaAsset } from "@/content/tours/assets";
import type { MediaAsset } from "@/types/component-library";

export type JourneyCatalogItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  hook: string;
  image: MediaAsset;
  visualStatus?: "ready" | "pending";
  href: string;
  kind: "featured" | "framework";
  commercialRole: JourneyCommercialRoleId;
  commercialRoleLabel: string;
  commercialPriority: number;
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
  | "business"
  | "culture"
  | "food"
  | "nature"
  | "wildlife"
  | "family"
  | "wellness"
  | "photography"
  | "slow-travel";

export type JourneyCommercialRoleId = "signature" | "essential" | "nature" | "extension";

type JourneyCatalogBase = Omit<
  JourneyCatalogItem,
  | "paceLabel"
  | "transportSummary"
  | "highlights"
  | "bestForSummary"
  | "pricing"
  | "discovery"
  | "commercialRole"
  | "commercialRoleLabel"
  | "commercialPriority"
>;

export type JourneyExperienceId =
  | "pandas"
  | "great-wall"
  | "ancient-china"
  | "food"
  | "scenery"
  | "modern-cities"
  | "local-life"
  | "wellness"
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
const chinaConsidered = tours.find(
  (tour) => tour.slug === "china-at-an-easier-pace-12-day-private-tour",
);
const chinaFamily = tours.find(
  (tour) => tour.slug === "china-family-tour-with-pandas-12-day-private-tour",
);
const muslimFriendlyChina = tours.find(
  (tour) => tour.slug === "muslim-friendly-china-tour-great-wall-desert-stars",
);
const qingchengWellness = tours.find(
  (tour) => tour.slug === "qingcheng-mountain-private-wellness-retreat-10-day",
);
const greaterBayBusiness = tours.find(
  (tour) => tour.slug === "guangzhou-shenzhen-tailor-made-business-tour-4-day",
);
const mutianyuPrivateDayTour = tours.find(
  (tour) => tour.slug === "private-mutianyu-great-wall-day-tour",
);
const privateShanghaiDayTour = tours.find(
  (tour) => tour.slug === "private-shanghai-day-tour-guide-driver",
);
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

if (!chinaConsidered) {
  throw new Error("The 12-day China at an Easier Pace journey is required.");
}

if (!chinaFamily) {
  throw new Error("The 12-day China family journey is required.");
}

if (!muslimFriendlyChina) {
  throw new Error(
    "The Muslim-friendly China and Ningxia journey is required for the journeys catalog.",
  );
}

if (!qingchengWellness) {
  throw new Error("The 10-day Qingcheng Mountain wellness retreat is required.");
}

if (!greaterBayBusiness) {
  throw new Error("The 4-day Guangzhou and Shenzhen business journey is required.");
}

if (!mutianyuPrivateDayTour) {
  throw new Error("The private Mutianyu Great Wall day tour is required.");
}

if (!privateShanghaiDayTour) {
  throw new Error("The private Shanghai day tour is required.");
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
  eyebrow: "First-China essential",
  summary: flagship.subtitle,
  hook: "Three defining cities with expert private guides, considered hotels and well-managed rail travel.",
  image: firstChinaAsset.shanghaiWaterfrontGroup,
  href: `/tours/${flagship.slug}`,
  kind: "framework",
  routeLabel: flagship.route,
  durationLabel: "9 days / 8 nights",
  styleFilters: ["First-time China", "Culture"],
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

const chinaConsideredJourney: JourneyCatalogBase = {
  slug: chinaConsidered.slug,
  title: chinaConsidered.title,
  eyebrow: "AVIORA flagship journey",
  summary: chinaConsidered.subtitle,
  hook: "China's defining first route with five-star hotels, local masters, private cultural encounters and protected recovery between the landmark days.",
  image: firstChinaAsset.beijingGreatWallCouple,
  href: `/tours/${chinaConsidered.slug}`,
  kind: "featured",
  routeLabel: chinaConsidered.route,
  durationLabel: "12 days / 11 nights",
  styleFilters: ["Quiet Luxury", "Culture", "Slow Travel"],
  destinationFilters: ["Beijing", "Xi'an", "Shanghai"],
  bestForFilters: [
    "Mature travelers",
    "Couples",
    "Adult children planning for parents",
    "First-time visitors",
  ],
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
    "multigenerational",
    "older-travelers",
    "private-groups",
  ],
  planningNeedFilters: [
    "vegetarian-friendly",
    "slower-pacing",
    "mobility-aware",
    "quiet-luxury",
    "food-focused",
    "photography-led",
  ],
  recommendedDaysMin: 12,
  recommendedDaysMax: 12,
  destinations: [
    { label: "Beijing", href: "/destinations/beijing" },
    { label: "Xi'an", href: "/destinations/xian" },
    { label: "Shanghai", href: "/destinations/shanghai" },
  ],
  planningNote:
    "The published route includes two choice days and only two hotel changes; the final walking plan is reviewed around the travellers before confirmation.",
};

const chinaFamilyJourney: JourneyCatalogBase = {
  slug: chinaFamily.slug,
  title: chinaFamily.title,
  eyebrow: "AVIORA flagship family journey",
  summary: chinaFamily.subtitle,
  hook: "The Great Wall, Terracotta Warriors, giant pandas and Shanghai become a family story through private, age-aware experiences and protected downtime.",
  image: chinaFamilyAsset.hero,
  href: `/tours/${chinaFamily.slug}`,
  kind: "featured",
  routeLabel: chinaFamily.route,
  durationLabel: "12 days / 11 nights",
  styleFilters: ["Family", "Culture", "Wildlife"],
  destinationFilters: ["Beijing", "Xi'an", "Chengdu", "Shanghai"],
  bestForFilters: [
    "Families",
    "Multigenerational families",
    "First-time visitors",
    "Luxury travelers",
  ],
  experienceFilters: [
    "pandas",
    "great-wall",
    "ancient-china",
    "food",
    "modern-cities",
    "local-life",
    "photography",
  ],
  travelerFilters: ["first-time", "families", "multigenerational", "private-groups"],
  planningNeedFilters: [
    "child-friendly",
    "slower-pacing",
    "quiet-luxury",
    "food-focused",
    "photography-led",
    "vegetarian-friendly",
  ],
  recommendedDaysMin: 12,
  recommendedDaysMax: 12,
  destinations: [
    { label: "Beijing", href: "/destinations/beijing" },
    { label: "Xi'an", href: "/destinations/xian" },
    { label: "Chengdu", href: "/destinations/chengdu" },
    { label: "Shanghai", href: "/destinations/shanghai" },
  ],
};

const muslimFriendlyChinaJourney: JourneyCatalogBase = {
  slug: muslimFriendlyChina.slug,
  title: muslimFriendlyChina.title,
  eyebrow: "AVIORA signature Muslim-friendly journey",
  summary: muslimFriendlyChina.subtitle,
  hook: "See imperial Beijing and the Terracotta Warriors, then make halal noodles in Xi'an, meet Ningxia's Hui food culture and dine beneath the desert sky.",
  image: muslimFriendlyChina.hero.image,
  visualStatus: "pending",
  href: `/tours/${muslimFriendlyChina.slug}`,
  kind: "featured",
  routeLabel: muslimFriendlyChina.route,
  durationLabel: "13 days / 12 nights",
  styleFilters: ["Muslim-friendly", "Luxury", "Culture", "Food", "Family"],
  destinationFilters: ["Beijing", "Xi'an", "Yinchuan", "Zhongwei", "Shanghai"],
  bestForFilters: [
    "Muslim travelers",
    "Muslim families",
    "Couples",
    "Multigenerational families",
    "Private groups",
  ],
  experienceFilters: [
    "great-wall",
    "ancient-china",
    "food",
    "scenery",
    "local-life",
    "photography",
    "silk-road",
  ],
  travelerFilters: ["first-time", "couples", "families", "multigenerational", "private-groups"],
  planningNeedFilters: [
    "muslim-friendly",
    "women-traveler-support",
    "vegetarian-friendly",
    "slower-pacing",
    "child-friendly",
    "quiet-luxury",
    "food-focused",
    "photography-led",
  ],
  recommendedDaysMin: 13,
  recommendedDaysMax: 14,
  destinations: [
    { label: "Beijing", href: "/destinations/beijing" },
    { label: "Xi'an", href: "/destinations/xian" },
    { label: "Yinchuan", href: `/tours/${muslimFriendlyChina.slug}#itinerary` },
    { label: "Zhongwei", href: `/tours/${muslimFriendlyChina.slug}#itinerary` },
    { label: "Shanghai", href: "/destinations/shanghai" },
  ],
  planningNote:
    "The published design includes a 14-day Shanghai extension option. Ningxia and desert accommodation are assessed honestly against the actual date-specific supply.",
};

const greaterBayBusinessJourney: JourneyCatalogBase = {
  slug: greaterBayBusiness.slug,
  title: greaterBayBusiness.title,
  eyebrow: "Tailor-made Guangzhou & Shenzhen business tour",
  summary: greaterBayBusiness.subtitle,
  hook: "Your flights, meetings and exhibition hours come first; hotels, private transport, bilingual support and flexible cultural or technology modules are built around them.",
  image: greaterBayBusiness.hero.image,
  visualStatus: "pending",
  href: `/tours/${greaterBayBusiness.slug}`,
  kind: "featured",
  routeLabel: greaterBayBusiness.route,
  durationLabel: "4–7 days / fully tailor-made",
  styleFilters: ["Business", "Luxury", "Food", "Culture", "Modern China"],
  destinationFilters: ["Guangzhou", "Shenzhen"],
  bestForFilters: ["Executives", "Founders", "Buyers", "Small business teams"],
  experienceFilters: ["modern-cities", "food", "local-life"],
  travelerFilters: ["couples", "solo-travelers", "private-groups"],
  planningNeedFilters: [
    "women-traveler-support",
    "vegetarian-friendly",
    "mobility-aware",
    "food-focused",
  ],
  recommendedDaysMin: 4,
  recommendedDaysMax: 7,
  destinations: [
    { label: "Guangzhou", href: `/tours/${greaterBayBusiness.slug}#itinerary` },
    { label: "Shenzhen", href: `/tours/${greaterBayBusiness.slug}#itinerary` },
  ],
  planningNote:
    "Four to seven days is the usual planning range, not a fixed package length. Confirmed flights, meetings, fairs and supplier addresses are placed first; the cities, nights and experiences are then built around them.",
};

const mutianyuPrivateDayJourney: JourneyCatalogBase = {
  slug: mutianyuPrivateDayTour.slug,
  title: mutianyuPrivateDayTour.title,
  eyebrow: "Private Mutianyu Great Wall day tour",
  summary: mutianyuPrivateDayTour.subtitle,
  hook: "A private Beijing hotel pickup, English-speaking guide, admission and a Wall route chosen around your group, with no shopping stops and transparent mountain-transport options.",
  image: mutianyuPrivateDayTour.hero.image,
  visualStatus: "pending",
  href: `/tours/${mutianyuPrivateDayTour.slug}`,
  kind: "featured",
  routeLabel: mutianyuPrivateDayTour.route,
  durationLabel: "1 private day · 7–9 hours",
  styleFilters: ["Culture", "Family", "Senior-friendly", "Photography"],
  destinationFilters: ["Beijing"],
  bestForFilters: ["First-time visitors", "Families", "Couples", "Older travelers"],
  experienceFilters: ["great-wall", "scenery", "photography"],
  travelerFilters: [
    "first-time",
    "couples",
    "families",
    "multigenerational",
    "older-travelers",
    "private-groups",
    "solo-travelers",
  ],
  planningNeedFilters: ["child-friendly", "mobility-aware", "photography-led"],
  recommendedDaysMin: 1,
  recommendedDaysMax: 1,
  destinations: [
    { label: "Mutianyu Great Wall", href: `/tours/${mutianyuPrivateDayTour.slug}#itinerary` },
  ],
  planningNote:
    "Your hotel address, ticket plan, walking comfort and preferred mountain transport are confirmed before the day, so the Great Wall visit follows your group rather than a coach-tour timetable.",
};

const privateShanghaiDayJourney: JourneyCatalogBase = {
  slug: privateShanghaiDayTour.slug,
  title: privateShanghaiDayTour.title,
  eyebrow: "Private Shanghai day tour with guide and driver",
  summary: privateShanghaiDayTour.subtitle,
  hook: "See Yu Garden, the Old City, the Bund, a Huangpu ferry crossing and the former French Concession with one private guide, vehicle and clear hotel-to-hotel plan.",
  image: privateShanghaiDayTour.hero.image,
  visualStatus: "pending",
  href: `/tours/${privateShanghaiDayTour.slug}`,
  kind: "featured",
  routeLabel: privateShanghaiDayTour.route,
  durationLabel: "1 private day · about 8 hours",
  styleFilters: ["Culture", "Food", "Family", "Photography", "Modern China"],
  destinationFilters: ["Shanghai"],
  bestForFilters: [
    "First-time visitors",
    "Couples",
    "Families",
    "Older travelers",
    "Small private groups",
  ],
  experienceFilters: ["modern-cities", "ancient-china", "local-life", "food", "photography"],
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
    "vegetarian-friendly",
    "slower-pacing",
    "child-friendly",
    "mobility-aware",
    "food-focused",
    "photography-led",
  ],
  recommendedDaysMin: 1,
  recommendedDaysMax: 1,
  destinations: [{ label: "Shanghai", href: "/destinations/shanghai" }],
  planningNote:
    "The base tour begins and ends at a central Shanghai hotel. Airports, railway stations, cruise ports, evening extensions and additional private service hours are confirmed and priced separately before booking.",
};

const qingchengWellnessJourney: JourneyCatalogBase = {
  slug: qingchengWellness.slug,
  title: qingchengWellness.title,
  eyebrow: "AVIORA private Daoist-inspired retreat",
  summary: qingchengWellness.subtitle,
  hook: "Stay seven uninterrupted nights beneath Qingcheng Mountain, with private tai chi, tea, Daoist cultural context, two treatments and a full day that asks nothing of you.",
  image: qingchengWellness.hero.image,
  visualStatus: "pending",
  href: `/tours/${qingchengWellness.slug}`,
  kind: "featured",
  routeLabel: qingchengWellness.route,
  durationLabel: "10 days / 9 nights",
  styleFilters: ["Wellness", "Quiet Luxury", "Nature", "Culture", "Slow Travel"],
  destinationFilters: ["Chengdu", "Qingcheng Mountain"],
  bestForFilters: ["Executives", "Women travelers", "Couples", "Solo travelers", "Private groups"],
  experienceFilters: ["wellness", "scenery", "ancient-china", "food", "local-life"],
  travelerFilters: ["couples", "older-travelers", "solo-travelers", "private-groups"],
  planningNeedFilters: [
    "women-traveler-support",
    "vegetarian-friendly",
    "slower-pacing",
    "mobility-aware",
    "quiet-luxury",
    "food-focused",
  ],
  recommendedDaysMin: 10,
  recommendedDaysMax: 13,
  destinations: [
    { label: "Chengdu", href: "/destinations/chengdu" },
    { label: "Qingcheng Mountain", href: `/tours/${qingchengWellness.slug}#itinerary` },
  ],
  planningNote:
    "The core product protects seven consecutive Qingcheng nights. Hangzhou, pandas or another China chapter is added before or after the retreat, never through its middle.",
};

const chengduChongqingZhangjiajieJourney: JourneyCatalogBase = {
  slug: chengduChongqingZhangjiajie.slug,
  title: chengduChongqingZhangjiajie.title,
  eyebrow: "Nature and food journey",
  summary: chengduChongqingZhangjiajie.subtitle,
  hook: "Pandas, Sichuan flavor, Chongqing after dark and Zhangjiajie's sandstone peaks, with two days left open for your own rhythm.",
  image: chengduChongqingZhangjiajie.hero.image,
  href: `/tours/${chengduChongqingZhangjiajie.slug}`,
  kind: "framework",
  routeLabel: chengduChongqingZhangjiajie.route,
  durationLabel: "11 days / 10 nights",
  styleFilters: ["Nature", "Food", "Photography"],
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
  eyebrow: "Private Chengdu extension",
  summary: chengdu.subtitle,
  hook: "Pandas at the right hour, one comfortable hotel base and Sichuan food guided by local knowledge.",
  image: chengdu.hero.image,
  href: `/tours/${chengdu.slug}`,
  kind: "framework",
  routeLabel: chengdu.route,
  durationLabel: "5 days / 4 nights",
  styleFilters: ["Family", "Food", "Wildlife"],
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
  kind: "framework",
  routeLabel: chengduJiuzhaigou.route,
  durationLabel: "7 days / 6 nights",
  styleFilters: ["Nature", "Wildlife", "Photography"],
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
  eyebrow: "City and nature journey",
  summary: shanghaiZhangjiajie.subtitle,
  hook: "City energy and extraordinary mountain scenery, connected by a carefully managed domestic flight plan.",
  image: shanghaiZhangjiajie.hero.image,
  href: `/tours/${shanghaiZhangjiajie.slug}`,
  kind: "framework",
  routeLabel: shanghaiZhangjiajie.route,
  durationLabel: "8 days / 7 nights",
  styleFilters: ["Nature", "Photography", "Modern China"],
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
  eyebrow: "Private Beijing extension",
  summary: beijingUnhurried.subtitle,
  hook: "One well-located hotel, expert private support and Beijing's essential landmarks across five considered days.",
  image: firstChinaAsset.beijingGreatWallSunriseHero,
  href: `/tours/${beijingUnhurried.slug}`,
  kind: "framework",
  routeLabel: beijingUnhurried.route,
  durationLabel: "5 days / 4 nights",
  styleFilters: ["Culture", "Slow Travel"],
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
  kind: "framework",
  routeLabel: xianBeijing.route,
  durationLabel: "6 days / 5 nights",
  styleFilters: ["Culture", "Food", "Muslim-friendly"],
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
  privateShanghaiDayJourney,
  mutianyuPrivateDayJourney,
  greaterBayBusinessJourney,
  qingchengWellnessJourney,
  chinaConsideredJourney,
  chinaFamilyJourney,
  muslimFriendlyChinaJourney,
  chengduChongqingZhangjiajieJourney,
  beijingXianChengduShanghaiJourney,
  firstChina,
  chengduJourney,
  chengduJiuzhaigouJourney,
  beijingUnhurriedJourney,
  shanghaiZhangjiajieJourney,
  xianBeijingJourney,
];

const commercialPortfolio: Record<
  string,
  Pick<JourneyCatalogItem, "commercialRole" | "commercialRoleLabel" | "commercialPriority">
> = {
  "private-shanghai-day-tour-guide-driver": {
    commercialRole: "essential",
    commercialRoleLabel: "Private Shanghai day tour",
    commercialPriority: 109,
  },
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": {
    commercialRole: "extension",
    commercialRoleLabel: "Tailor-made Guangzhou & Shenzhen business tour",
    commercialPriority: 91,
  },
  "private-mutianyu-great-wall-day-tour": {
    commercialRole: "essential",
    commercialRoleLabel: "Private Great Wall day tour",
    commercialPriority: 110,
  },
  "qingcheng-mountain-private-wellness-retreat-10-day": {
    commercialRole: "signature",
    commercialRoleLabel: "Signature private wellness retreat",
    commercialPriority: 98,
  },
  "muslim-friendly-china-tour-great-wall-desert-stars": {
    commercialRole: "signature",
    commercialRoleLabel: "Signature Muslim family journey",
    commercialPriority: 94,
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    commercialRole: "signature",
    commercialRoleLabel: "Signature family journey",
    commercialPriority: 100,
  },
  "china-at-an-easier-pace-12-day-private-tour": {
    commercialRole: "signature",
    commercialRoleLabel: "Signature slow journey",
    commercialPriority: 96,
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    commercialRole: "essential",
    commercialRoleLabel: "First-China essential",
    commercialPriority: 92,
  },
  "first-china-beautifully-paced": {
    commercialRole: "essential",
    commercialRoleLabel: "Classic first journey",
    commercialPriority: 84,
  },
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    commercialRole: "nature",
    commercialRoleLabel: "Nature and food journey",
    commercialPriority: 80,
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    commercialRole: "nature",
    commercialRoleLabel: "Sichuan nature journey",
    commercialPriority: 76,
  },
  "shanghai-zhangjiajie-floating-peaks": {
    commercialRole: "nature",
    commercialRoleLabel: "City and nature journey",
    commercialPriority: 72,
  },
  "chengdu-pandas-sichuan-table": {
    commercialRole: "extension",
    commercialRoleLabel: "Private Chengdu extension",
    commercialPriority: 64,
  },
  "beijing-great-wall-private-5-day-tour": {
    commercialRole: "extension",
    commercialRoleLabel: "Private Beijing extension",
    commercialPriority: 60,
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    commercialRole: "extension",
    commercialRoleLabel: "Imperial cities extension",
    commercialPriority: 56,
  },
};

const commercialDetails: Record<
  string,
  Pick<JourneyCatalogItem, "paceLabel" | "transportSummary" | "highlights" | "bestForSummary">
> = {
  "private-shanghai-day-tour-guide-driver": {
    paceLabel: "Easy to moderate, privately adjusted around the group",
    transportSummary:
      "Private central-hotel pickup and return, private vehicle and one included Huangpu public-ferry crossing",
    highlights: [
      "Enter Yu Garden with admission arranged",
      "Understand the Old City before reaching the skyline",
      "Cross the Huangpu by public ferry with your guide",
      "Read the Bund and Pudong as two sides of one city",
      "Finish among former French Concession lanes and local life",
    ],
    bestForSummary:
      "First-time Shanghai visitors, couples, families, older travelers and small private groups who want one clear, professionally handled city day",
  },
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": {
    paceLabel: "Agenda-first, efficient and completely adjustable",
    transportSummary:
      "Private MPV during confirmed service windows, with Guangzhou, Shenzhen or Hong Kong gateway transfers as quoted",
    highlights: [
      "Build every service around fixed flights, meetings and fair hours",
      "Shop, cook and explore Guangzhou family culture with a local host",
      "Add a contextual traditional Chinese medicine introduction",
      "Select one date-confirmed Shenzhen innovation chapter",
      "Keep one China-based team responsible for the operating plan",
    ],
    bestForSummary:
      "Executives, founders, buyers and small teams who already have part of their South China schedule and want everything else to work around it",
  },
  "private-mutianyu-great-wall-day-tour": {
    paceLabel: "Private, flexible and professionally paced around your group",
    transportSummary:
      "Private Beijing hotel pickup and return, plus the included Mutianyu scenic-area shuttle",
    highlights: [
      "Private hotel pickup, guide, admission and return in one confirmed plan",
      "A walking route chosen around your group rather than a fixed tower count",
      "No shopping stops, shared coach logistics or hidden mountain-transport charges",
      "Cable car, chairlift and toboggan shown as transparent optional choices",
      "Live conditions and practical alternatives explained before the day starts",
    ],
    bestForSummary:
      "First-time Beijing visitors, families, couples, older travelers and small private groups who want the Great Wall handled clearly from hotel pickup to return",
  },
  "qingcheng-mountain-private-wellness-retreat-10-day": {
    paceLabel: "Unhurried, privately adjustable and built around protected blank space",
    transportSummary: "Private transfers with one hotel change and no domestic flight",
    highlights: [
      "Stay seven uninterrupted nights beneath Qingcheng Mountain",
      "Move privately with a tai chi teacher and clear cultural interpretation",
      "Keep a complete day free of touring or guide obligations",
      "Receive two individually selected resort treatments per guest",
      "Take one realistic tea, movement or breathing rhythm home",
    ],
    bestForSummary:
      "Executives, women, couples and private travelers who value cultural depth, privacy and time that is genuinely their own",
  },
  "muslim-friendly-china-tour-great-wall-desert-stars": {
    paceLabel: "Balanced, prayer-aware and privately adjustable",
    transportSummary:
      "Private vehicles, first-class high-speed rail and domestic flights selected for your dates",
    highlights: [
      "Eat a private halal picnic beside the Great Wall",
      "Make noodles in Xi'an after its Great Mosque courtyards",
      "Watch the desert darken over an alcohol-free dinner",
      "Share Ningxia food traditions with a Hui host or cook",
      "AVIORA Muslim Journey Standard throughout",
    ],
    bestForSummary:
      "Muslim families, couples and private groups who want iconic China plus living Muslim heritage and a desert finale",
  },
  "china-at-an-easier-pace-12-day-private-tour": {
    paceLabel: "Easy to moderate, with protected recovery",
    transportSummary:
      "Private transfers, first-class high-speed rail and a nonstop domestic flight",
    highlights: [
      "Tai chi with a local teacher",
      "A private Beijing courtyard table",
      "Terracotta Army and clay artisan encounter",
      "Shanghai with an architecture specialist",
    ],
    bestForSummary:
      "Mature travellers and couples who value comfort, depth and fewer rushed decisions",
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    paceLabel: "Age-aware private pacing with protected family downtime",
    transportSummary:
      "Private transfers, two first-class high-speed trains and a nonstop domestic flight",
    highlights: [
      "Junior Curator Mission in the Forbidden City",
      "Great Wall family challenge and photographer",
      "Terracotta Army and private clay studio",
      "Pandas with conservation-focused interpretation",
      "Shanghai market-to-private-kitchen finale",
    ],
    bestForSummary:
      "Families with children aged 6–17 who want China's icons without managing the daily logistics",
  },
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    paceLabel: "Balanced overall, with active mountain days and two flexible days",
    transportSummary: "Private transfers, high-speed rail and a domestic flight",
    highlights: [
      "Pandas at their most active time of day",
      "Chongqing's layered nightscape with a local host",
      "Two distinct Zhangjiajie mountain days",
    ],
    bestForSummary: "Food, wildlife and dramatic scenery in one regional journey",
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    paceLabel: "Balanced first-time route",
    transportSummary: "Private transfers, high-speed rail and a domestic flight",
    highlights: [
      "A quieter Great Wall section with private timing",
      "Terracotta Warriors with historical interpretation",
      "Pandas when they are most active",
      "A Shanghai neighborhood and riverfront finale",
    ],
    bestForSummary: "First-time visitors who want China's essential contrasts",
  },
  "first-china-beautifully-paced": {
    paceLabel: "Comfortable, unhurried",
    transportSummary: "Private transfers and high-speed rail between three cities",
    highlights: [
      "A full Great Wall day",
      "Imperial Beijing with room for context",
      "Terracotta Warriors without a rushed connection",
      "Shanghai after dark",
    ],
    bestForSummary: "First-time visitors who prefer fewer hotel changes",
  },
  "chengdu-pandas-sichuan-table": {
    paceLabel: "Easy one-base stay",
    transportSummary: "Private vehicle throughout, with an optional Leshan day trip",
    highlights: [
      "Pandas at the right hour",
      "A guided Sichuan table",
      "Tea-house culture with local context",
      "An optional private Leshan day",
    ],
    bestForSummary: "Families and food lovers seeking a short private break",
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    paceLabel: "Active nature days, planned rests",
    transportSummary: "Private transfers plus the fastest suitable Chengdu connection",
    highlights: [
      "Pandas at their most active time",
      "A full day among Jiuzhaigou's lakes and waterfalls",
      "Plateau landscapes with altitude-aware planning",
    ],
    bestForSummary: "Nature-focused travelers comfortable with altitude and park walking",
  },
  "beijing-great-wall-private-5-day-tour": {
    paceLabel: "Comfortable single-city pace",
    transportSummary: "Private airport, city and Great Wall transfers",
    highlights: [
      "A Great Wall section selected around your pace",
      "Forbidden City with historical context",
      "Temple of Heaven in the morning",
      "One hotel base throughout",
    ],
    bestForSummary: "A focused Beijing introduction without changing hotels",
  },
  "shanghai-zhangjiajie-floating-peaks": {
    paceLabel: "Moderate with active park days",
    transportSummary: "Private transfers and a domestic flight between regions",
    highlights: [
      "Shanghai's riverfront and lived-in neighborhoods",
      "A managed flight into the mountain region",
      "Wulingyuan's sandstone peaks",
      "A separate Tianmen Mountain day",
    ],
    bestForSummary: "Travelers combining modern China with major mountain scenery",
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    paceLabel: "Efficient cultural route",
    transportSummary: "Private transfers and high-speed rail from Xi'an to Beijing",
    highlights: [
      "Terracotta Warriors with historical interpretation",
      "Xi'an's Muslim Quarter and halal food heritage",
      "High-speed rail between the imperial capitals",
      "A privately paced Great Wall day",
    ],
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
  "private-shanghai-day-tour-guide-driver": {
    fromUsd: 672,
    basis:
      "Indicative starting price per private group of four guests, equivalent to US$168 per guest. A two-guest private tour starts from US$558 total. Optional experiences, airports and cruise-port transfers are separate.",
    inclusionSummary:
      "Includes central Shanghai hotel pickup and return, private vehicle and driver for the confirmed service window, private English-speaking guide, Yu Garden admission, one ordinary Huangpu public-ferry crossing, bottled water and no compulsory shopping stops.",
    finalPriceNote:
      "Indicative private-group totals outside major holidays are: one guest US$468; two guests US$558; three guests US$628; four guests US$672; five guests US$795; and six guests US$930. The exact vehicle, hotel address, date and service window are checked before confirmation.",
    additionalNote:
      "Published upgrades include Shanghai Tower from US$35 per guest, a curated Shanghainese lunch from US$38 per guest, snack making from US$88 per guest and a Huangpu night-cruise extension from US$328 per group of up to four.",
  },
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": {
    fromUsd: 2280,
    basis:
      "Indicative starting price per person, based on four guests sharing two rooms outside major exhibition and peak periods, equivalent to a group total from US$9,120.",
    inclusionSummary:
      "The published starting price covers the sample 4-day, 3-night framework: selected premium business hotels, two rooms, confirmed private transfers and vehicle windows, bilingual support as stated, agenda planning, the selected Guangzhou market-to-kitchen culture module, one Shenzhen innovation chapter and China-based operating support.",
    finalPriceNote:
      "Most journeys run for 4–7 days and are priced after the fixed agenda is reviewed. Fully tailored 4-day versions commonly fall between US$2,600 and US$3,600 per person; additional days, nights and service hours are quoted transparently. A typical two-guest 4-day version starts from approximately US$2,880 per person outside major exhibition periods.",
    additionalNote:
      "Major fair dates, extended vehicle or interpreter hours, named vehicle models, professional interpretation, supplier sourcing, factory audits, confirmed company access and Hong Kong cross-boundary services are quoted separately.",
  },
  "private-mutianyu-great-wall-day-tour": {
    fromUsd: 198,
    basis:
      "Indicative starting price per person, based on four guests traveling privately, equivalent to a private-group total from US$792. Optional mountain transport and lunch are separate.",
    inclusionSummary:
      "Includes private Beijing hotel pickup and return within main urban districts, private vehicle and driver, private English-speaking guide, Mutianyu admission, scenic-area shuttle, bottled water and no compulsory shopping stops.",
    finalPriceNote:
      "Smaller parties have a higher per-person price because private guide and vehicle costs are shared by fewer guests. Your exact hotel address, date, group and selected mountain transport are confirmed before you book.",
    additionalNote:
      "Round-trip cable car and chairlift-up/toboggan-down options are approximately US$22 per person; one-way mountain transport is approximately US$15 per person, subject to the operator's current rate and live operation.",
  },
  "qingcheng-mountain-private-wellness-retreat-10-day": {
    fromUsd: 11800,
    basis:
      "Indicative starting price per person, based on four guests sharing two rooms outside peak periods, equivalent to a group total from US$47,200.",
    inclusionSummary:
      "Includes 9 nights across a luxury Chengdu hotel and seven-night Qingcheng Mountain retreat, two rooms, private transfers, confirmed private guiding and cultural sessions, seven listed lunches or dinners, two resort treatments per guest, entrance arrangements and AVIORA Quiet Journey Standard support.",
    finalPriceNote:
      "Most fully tailored versions fall between US$13,800 and US$18,800 per person, depending on dates, exact retreat, room category, practitioner program, spa inclusions and private dining.",
    additionalNote:
      "Signature versions above US$20,000 per person may include larger villas or suites, deeper private practitioner programs and a separate Hangzhou extension. International flights and any unconfirmed medical or clinical service are excluded.",
  },
  "muslim-friendly-china-tour-great-wall-desert-stars": {
    fromUsd: 7680,
    basis:
      "Indicative starting price per person, based on four guests sharing two rooms outside peak periods, equivalent to a group total from US$30,720.",
    inclusionSummary:
      "Includes 12 nights in selected premium city hotels plus the best suitable Ningxia and desert accommodation available for your dates, two rooms, private guides and vehicles, first-class Beijing–Xi'an rail, domestic transport named before booking, planned verified meals, listed private experiences and AVIORA Muslim Journey Standard support.",
    finalPriceNote:
      "Most fully tailored versions fall between US$8,300 and US$10,800 per person, depending on dates, city hotels, Ningxia and desert room categories, transport class, meal research and confirmed hosts.",
    additionalNote:
      "Premium suites, business-class rail, full photographer coverage, signature desert lodges and a 14-day Shanghai extension are quoted separately. International flights are not included.",
  },
  "china-at-an-easier-pace-12-day-private-tour": {
    fromUsd: 6480,
    basis:
      "Indicative starting price per person, based on four guests sharing two rooms outside peak holiday periods.",
    inclusionSummary:
      "Includes 11 nights in selected premium five-star hotels, private guiding and vehicles on confirmed touring days, listed entrance tickets, Beijing–Xi'an first-class rail, a nonstop Xi'an–Shanghai economy flight, selected meals, the listed private cultural encounters and China-based journey support.",
    finalPriceNote:
      "Most privately designed versions fall between US$6,800 and US$8,500 per person, depending on dates, hotel and room selection, party size and personal interests.",
    additionalNote:
      "Luxury and Signature versions with Peninsula-level hotels, larger rooms and transport upgrades are quoted separately.",
  },
  "china-family-tour-with-pandas-12-day-private-tour": {
    fromUsd: 6880,
    basis:
      "Indicative starting price per person, based on a family of four: two adults and two children aged 6–11 sharing two rooms outside Chinese public holidays, school-holiday pressure dates and other peak periods, equivalent to a family total from US$27,520.",
    inclusionSummary:
      "Includes 11 nights in selected premium five-star hotels, two rooms, private family-ready guides and vehicles, listed entrance tickets, two first-class rail sectors, a nonstop Chengdu–Shanghai economy flight, selected meals, the listed hands-on private experiences and China-based family journey support.",
    finalPriceNote:
      "Most privately designed versions fall between US$7,500 and US$9,200 per person, depending on dates, children's ages, hotel and connecting-room selection, confirmed specialists and personal interests.",
    additionalNote:
      "Luxury and Signature versions with larger connecting rooms or suites, Peninsula-level hotels, upgraded transport and additional specialist access are quoted separately.",
  },
  "chengdu-pandas-sichuan-table": {
    fromUsd: 1590,
    ...sharedPricingDetails,
  },
  "beijing-great-wall-private-5-day-tour": {
    fromUsd: 1690,
    ...sharedPricingDetails,
  },
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": {
    fromUsd: 2090,
    ...sharedPricingDetails,
  },
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": {
    fromUsd: 2690,
    ...sharedPricingDetails,
  },
  "shanghai-zhangjiajie-floating-peaks": {
    fromUsd: 2990,
    ...sharedPricingDetails,
  },
  "first-china-beautifully-paced": {
    fromUsd: 3190,
    ...sharedPricingDetails,
  },
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": {
    fromUsd: 3990,
    ...sharedPricingDetails,
    additionalNote:
      "Two open days are intentionally unprogrammed. Optional private experiences are quoted separately.",
  },
  "beijing-xian-chengdu-shanghai-private-11-day-tour": {
    fromUsd: 4290,
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
    ...commercialPortfolio[journey.slug],
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
  const slow = /slow|comfortable|unhurried|easy/.test(commercial.paceLabel.toLowerCase());
  const active = /active|efficient/.test(commercial.paceLabel.toLowerCase());
  const transportText = commercial.transportSummary.toLowerCase();
  const focus = new Set<JourneyFocusId>();
  if (journey.travelerFilters.includes("first-time")) focus.add("first-trip");
  if (journey.styleFilters.includes("Business")) focus.add("business");
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
  if (journey.experienceFilters.includes("wellness")) focus.add("wellness");
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
    featuredRank: commercialPortfolio[journey.slug].commercialPriority,
    searchableText: text,
  };
}

export function getJourneyCatalogItem(slug: string) {
  return journeyCatalog.find((item) => item.slug === slug);
}
