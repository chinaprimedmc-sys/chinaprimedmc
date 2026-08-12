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
    label: "North & Imperial China",
    note: "Monumental history and seasonal contrast",
  },
  { id: "east", label: "East & Lower Yangtze", note: "Water towns, gardens and modern China" },
  {
    id: "southwest",
    label: "Southwest China",
    note: "Pandas, spice, mountains and minority cultures",
  },
  {
    id: "south",
    label: "South & Karst Country",
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
      "The Great Wall, palace scale and hutong life, with enough time to understand what you are seeing.",
    stay: "3–5 nights",
    bestFor: "A first trip to China",
    interests: ["icons", "heritage", "food"],
    image: destinationGuideAssets.beijing.hero,
    guideHref: "/destinations/beijing",
  },
  {
    id: "xian",
    name: "Xi'an",
    region: "north",
    kicker: "Ancient capital",
    description: "Terracotta warriors, city walls and the eastern beginning of the Silk Road.",
    stay: "2–3 nights",
    bestFor: "History in context",
    interests: ["icons", "heritage", "food"],
    image: destinationGuideAssets.xian.hero,
  },
  {
    id: "shanghai",
    name: "Shanghai",
    region: "east",
    kicker: "Modern China",
    description:
      "A confident waterfront city where Art Deco streets, local neighborhoods and new China meet.",
    stay: "2–4 nights",
    bestFor: "An easy finale",
    interests: ["city", "food", "heritage"],
    image: destinationGuideAssets.shanghai.hero,
    guideHref: "/destinations/shanghai",
  },
  {
    id: "chengdu",
    name: "Chengdu",
    region: "southwest",
    kicker: "Pandas & Sichuan table",
    description:
      "Panda conservation, tea-house rhythm and one of China's most magnetic food cultures.",
    stay: "3–5 nights",
    bestFor: "Families and food lovers",
    interests: ["pandas", "food", "city"],
    image: destinationGuideAssets.chengdu.hero,
    guideHref: "/destinations/chengdu",
  },
  {
    id: "chongqing",
    name: "Chongqing",
    region: "southwest",
    kicker: "Vertical megacity",
    description:
      "A cinematic river city of layered streets, night views, hotpot and startling urban scale.",
    stay: "2–3 nights",
    bestFor: "Urban energy",
    interests: ["city", "food"],
    image: destinationGuideAssets.chongqing.hero,
  },
  {
    id: "leshan",
    name: "Leshan",
    region: "southwest",
    kicker: "Giant Buddha & river landscape",
    description:
      "The UNESCO-listed Giant Buddha and its river setting, planned as a considered private day from Chengdu.",
    stay: "Day trip or 1 night",
    bestFor: "Culture and monumental heritage",
    interests: ["icons", "heritage", "landscape"],
    image: destinationGuideAssets.leshan.hero,
  },
  {
    id: "jiuzhaigou",
    name: "Jiuzhaigou",
    region: "southwest",
    kicker: "Alpine colour",
    description:
      "Clear lakes, forested valleys and highland scenery with access planned around comfort.",
    stay: "3–4 nights",
    bestFor: "Landscape seekers",
    interests: ["landscape"],
    image: destinationGuideAssets.jiuzhaigou.hero,
  },
  {
    id: "zhangjiajie",
    name: "Zhangjiajie",
    region: "south",
    kicker: "Sandstone worlds",
    description:
      "Vertical pillar forests and dramatic viewpoints, with route design crucial for crowd and walking comfort.",
    stay: "3–4 nights",
    bestFor: "Big scenery",
    interests: ["landscape"],
    image: destinationGuideAssets.zhangjiajie.hero,
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
