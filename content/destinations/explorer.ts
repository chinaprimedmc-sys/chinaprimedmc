import { destinationAsset } from "@/content/destinations/assets";
import { destinationGuideAssets } from "@/content/destinations/guide-assets";
import type { MediaAsset } from "@/types/component-library";

export const destinationInterests = [
  { id: "icons", label: "Icons of China", note: "Great Wall, palaces and ancient capitals" },
  { id: "pandas", label: "Pandas & wildlife", note: "Conservation, mountains and family moments" },
  { id: "food", label: "Food & local life", note: "Markets, tea houses and regional kitchens" },
  {
    id: "landscape",
    label: "Extraordinary landscapes",
    note: "Karst rivers, peaks, lakes and grasslands",
  },
  { id: "heritage", label: "Living heritage", note: "Old towns, Silk Road stories and craft" },
  {
    id: "city",
    label: "Future-facing cities",
    note: "Skylines, design, energy and easy connections",
  },
] as const;

export type DestinationInterest = (typeof destinationInterests)[number]["id"];

export const destinationRegions = [
  {
    id: "north",
    label: "North China",
    note: "Monumental history and seasonal contrast",
  },
  { id: "east", label: "East China", note: "Water towns, gardens and modern China" },
  {
    id: "southwest",
    label: "Southwest China",
    note: "Pandas, spice, mountains and minority cultures",
  },
  {
    id: "northeast",
    label: "Northeast China",
    note: "Winter cities, forests and mountain country",
  },
  { id: "central", label: "Central China", note: "Mountain landscapes and historic capitals" },
  { id: "northwest", label: "Northwest China", note: "Silk Road history and highland landscapes" },
  {
    id: "south",
    label: "South China",
    note: "River landscapes and expressive regional food",
  },
] as const;

export type DestinationRegion = (typeof destinationRegions)[number]["id"];

export type ExplorerDestination = {
  id: string;
  name: string;
  region: DestinationRegion;
  kicker: string;
  description: string;
  stay: string;
  bestFor: string;
  interests: DestinationInterest[];
  relatedDestinationIds: string[];
  journeyDestinationNames?: string[];
  image: MediaAsset;
  guideHref?: string;
};

const images = {
  beijing: destinationAsset.beijingForbiddenCityWide,
  shanghai: destinationAsset.shanghaiSkyline,
  chengdu: destinationAsset.chengduPanda,
  tea: destinationAsset.chengduTeaHouse,
  jiuzhaigou: destinationAsset.jiuzhaigouLake,
  xian: destinationAsset.xianTerracotta,
  zhangjiajie: destinationAsset.zhangjiajieForest,
  chongqing: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chongqing-01.webp",
    alt: "Chongqing's layered skyline during the blue hour",
    width: 1600,
    height: 1067,
    objectPosition: "50% 48%",
  },
  leshan: {
    src: "/tours/chengdu-pandas/day-leshan.webp",
    alt: "The Leshan Giant Buddha beside the river",
    width: 2000,
    height: 2667,
    objectPosition: "50% 44%",
  },
};

export const explorerDestinations: ExplorerDestination[] = [
  {
    id: "beijing",
    name: "Beijing",
    region: "north",
    kicker: "Imperial China",
    description:
      "Plan the Forbidden City, a separate Great Wall day and hutong life with private guiding and transfers, allowing time for walking, tickets and your onward route.",
    stay: "3–5 nights",
    bestFor: "A first trip to China",
    interests: ["icons", "heritage", "food"],
    relatedDestinationIds: ["xian", "shanghai"],
    image: destinationGuideAssets.beijing.hero,
    guideHref: "/destinations/beijing",
  },
  {
    id: "xian",
    name: "Xi'an",
    region: "northwest",
    kicker: "Ancient capital",
    description:
      "Plan the Terracotta Warriors and Xi’an’s Old City with private guiding, realistic transfer time and room for the City Wall, neighborhood food and Silk Road history.",
    stay: "2–3 nights",
    bestFor: "History in context",
    interests: ["icons", "heritage", "food"],
    relatedDestinationIds: ["beijing", "chengdu"],
    image: destinationGuideAssets.xian.hero,
  },
  {
    id: "shanghai",
    name: "Shanghai",
    region: "east",
    kicker: "Modern China",
    description:
      "Plan the Bund, Yu Garden and neighborhood walks with practical hotel choices, private guiding and transfers matched to your Shanghai airport or onward route.",
    stay: "2–4 nights",
    bestFor: "An easy finale",
    interests: ["city", "food", "heritage"],
    relatedDestinationIds: ["beijing", "guilin"],
    image: destinationGuideAssets.shanghai.hero,
    guideHref: "/destinations/shanghai",
  },
  {
    id: "chengdu",
    name: "Chengdu",
    region: "southwest",
    kicker: "Pandas & Sichuan table",
    description:
      "Plan a panda morning, Sichuan meals and time for tea, with private guiding, a practical Chengdu base and a separate Leshan or Jiuzhaigou extension if it fits.",
    stay: "3–5 nights",
    bestFor: "Families and food lovers",
    interests: ["pandas", "food", "city"],
    relatedDestinationIds: ["chongqing", "leshan", "jiuzhaigou"],
    image: destinationGuideAssets.chengdu.hero,
    guideHref: "/destinations/chengdu",
  },
  {
    id: "chongqing",
    name: "Chongqing",
    region: "southwest",
    kicker: "Vertical megacity",
    description:
      "Plan Chongqing’s river views, hillside neighborhoods and hotpot with realistic walking, hotel access and private transfers between districts.",
    stay: "2–3 nights",
    bestFor: "Urban energy",
    interests: ["city", "food"],
    relatedDestinationIds: ["chengdu", "zhangjiajie"],
    image: destinationGuideAssets.chongqing.hero,
  },
  {
    id: "leshan",
    name: "Leshan",
    region: "southwest",
    kicker: "Giant Buddha & river landscape",
    description:
      "Plan the Leshan Giant Buddha from Chengdu with a clear choice of boat or walking views, realistic transfers and a route matched to steps, weather and mobility.",
    stay: "Day trip or 1 night",
    bestFor: "Culture and monumental heritage",
    interests: ["icons", "heritage", "landscape"],
    relatedDestinationIds: ["chengdu"],
    image: destinationGuideAssets.leshan.hero,
  },
  {
    id: "jiuzhaigou",
    name: "Jiuzhaigou",
    region: "southwest",
    kicker: "Alpine colour",
    description:
      "Plan Jiuzhaigou’s lakes and forests with realistic mountain transfers, a practical hotel base, park-bus and walking choices, and time for altitude and weather.",
    stay: "3–4 nights",
    bestFor: "Landscape seekers",
    interests: ["landscape"],
    relatedDestinationIds: ["chengdu"],
    image: destinationGuideAssets.jiuzhaigou.hero,
  },
  {
    id: "zhangjiajie",
    name: "Zhangjiajie",
    region: "central",
    kicker: "Sandstone worlds",
    description:
      "Vertical pillar forests and dramatic viewpoints, with route design crucial for crowd and walking comfort.",
    stay: "3–4 nights",
    bestFor: "Big scenery",
    interests: ["landscape"],
    relatedDestinationIds: ["chongqing", "guilin"],
    image: destinationGuideAssets.zhangjiajie.hero,
  },
  {
    id: "guilin",
    name: "Guilin & Yangshuo",
    journeyDestinationNames: ["Guilin", "Yangshuo"],
    region: "south",
    kicker: "Karst rivers & countryside",
    description:
      "Follow the Li River through karst peaks, then slow down in Yangshuo for village lanes, local food and open countryside.",
    stay: "3–4 nights",
    bestFor: "Landscape and a slower pace",
    interests: ["landscape", "heritage", "food"],
    relatedDestinationIds: ["shanghai", "zhangjiajie"],
    image: destinationGuideAssets.guilin.hero,
  },
];

for (const destination of explorerDestinations) {
  destination.guideHref = `/destinations/${destination.id}`;
}

export const destinationInterestImages: Record<DestinationInterest, MediaAsset> = {
  icons: images.beijing,
  pandas: images.chengdu,
  food: images.tea,
  landscape: images.zhangjiajie,
  heritage: images.xian,
  city: images.shanghai,
};

/** Human-readable regions are shared by directory, search and destination guides. */
export function getDestinationRegionLabel(region: DestinationRegion) {
  return destinationRegions.find((item) => item.id === region)!.label;
}

export function journeyIncludesDestination(
  destination: ExplorerDestination,
  journey: { destinationFilters: string[] },
) {
  return (destination.journeyDestinationNames ?? [destination.name]).some((name) =>
    journey.destinationFilters.includes(name),
  );
}
