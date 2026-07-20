import { destinationAsset } from "@/content/destinations/assets";
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
  {
    id: "northwest",
    label: "Silk Road & Far West",
    note: "Desert history, bazaars and immense horizons",
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
  guilin: destinationAsset.guilinRiver,
  jiuzhaigou: destinationAsset.jiuzhaigouLake,
  xian: destinationAsset.xianTerracotta,
  yunnan: destinationAsset.yunnanLijiang,
  zhangjiajie: destinationAsset.zhangjiajieForest,
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
    bestFor: "A first journey",
    interests: ["icons", "heritage", "food"],
    image: images.beijing,
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
    image: images.xian,
  },
  {
    id: "harbin",
    name: "Harbin",
    region: "north",
    kicker: "Winter spectacle",
    description: "A northern city transformed by ice, snow and a distinctive architectural story.",
    stay: "2–3 nights",
    bestFor: "Winter travel",
    interests: ["city", "heritage"],
    image: images.jiuzhaigou,
  },
  {
    id: "inner-mongolia",
    name: "Inner Mongolia",
    region: "north",
    kicker: "Open horizons",
    description:
      "Grasslands, pastoral traditions and a sense of space rarely associated with a first image of China.",
    stay: "3–5 nights",
    bestFor: "Nature and families",
    interests: ["landscape", "heritage"],
    image: images.zhangjiajie,
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
    image: images.shanghai,
    guideHref: "/destinations/shanghai",
  },
  {
    id: "hangzhou",
    name: "Hangzhou",
    region: "east",
    kicker: "Lake & tea country",
    description:
      "West Lake calm, refined food and green tea landscapes within easy reach of Shanghai.",
    stay: "2–3 nights",
    bestFor: "Slow elegance",
    interests: ["landscape", "food", "heritage"],
    image: images.tea,
  },
  {
    id: "suzhou",
    name: "Suzhou",
    region: "east",
    kicker: "Gardens & canals",
    description:
      "Classical gardens, intimate canals and the disciplined beauty of Jiangnan design.",
    stay: "1–2 nights",
    bestFor: "Art and architecture",
    interests: ["heritage", "landscape"],
    image: images.yunnan,
  },
  {
    id: "huangshan",
    name: "Huangshan",
    region: "east",
    kicker: "Ink-painting peaks",
    description:
      "Granite summits, mountain light and historic villages that reward an unhurried approach.",
    stay: "3–4 nights",
    bestFor: "Hikers and photographers",
    interests: ["landscape", "heritage"],
    image: images.zhangjiajie,
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
    image: images.chengdu,
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
    image: images.shanghai,
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
    image: images.jiuzhaigou,
  },
  {
    id: "dali",
    name: "Dali",
    region: "southwest",
    kicker: "Lake & mountain life",
    description:
      "A gentler Yunnan chapter shaped by Erhai Lake, village encounters and open skies.",
    stay: "3–4 nights",
    bestFor: "Slow travel",
    interests: ["landscape", "heritage", "food"],
    image: images.yunnan,
  },
  {
    id: "lijiang",
    name: "Lijiang",
    region: "southwest",
    kicker: "Old town & high peaks",
    description:
      "Naxi heritage, stone lanes and mountain landscapes, best explored beyond the busiest hours.",
    stay: "3–4 nights",
    bestFor: "Culture and scenery",
    interests: ["heritage", "landscape"],
    image: images.yunnan,
  },
  {
    id: "shangri-la",
    name: "Shangri-La",
    region: "southwest",
    kicker: "Highland Yunnan",
    description:
      "Tibetan cultural landscapes, monasteries and high-altitude valleys requiring thoughtful pacing.",
    stay: "3–4 nights",
    bestFor: "Remote discovery",
    interests: ["landscape", "heritage"],
    image: images.jiuzhaigou,
  },
  {
    id: "guilin",
    name: "Guilin & Yangshuo",
    region: "south",
    kicker: "Karst country",
    description:
      "River journeys, limestone silhouettes and country roads that make landscape the main event.",
    stay: "3–4 nights",
    bestFor: "Soft adventure",
    interests: ["landscape", "food"],
    image: images.guilin,
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
    image: images.zhangjiajie,
  },
  {
    id: "guangzhou",
    name: "Guangzhou",
    region: "south",
    kicker: "Cantonese China",
    description:
      "Dim sum traditions, riverfront modernity and a trading-city confidence with deep roots.",
    stay: "2–3 nights",
    bestFor: "Food and business travel",
    interests: ["food", "city", "heritage"],
    image: images.tea,
  },
  {
    id: "dunhuang",
    name: "Dunhuang",
    region: "northwest",
    kicker: "Desert Silk Road",
    description:
      "Cave art, dunes and oasis history at one of the Silk Road's most resonant crossroads.",
    stay: "3–4 nights",
    bestFor: "Art and archaeology",
    interests: ["heritage", "landscape"],
    image: images.xian,
  },
  {
    id: "kashgar",
    name: "Kashgar",
    region: "northwest",
    kicker: "Western crossroads",
    description:
      "Bazaars, craft traditions and a Central Asian cultural texture unlike eastern China.",
    stay: "3–5 nights",
    bestFor: "Experienced explorers",
    interests: ["heritage", "food"],
    image: images.yunnan,
  },
  {
    id: "urumqi",
    name: "Urumqi & Tianshan",
    region: "northwest",
    kicker: "Mountains beyond the city",
    description:
      "A gateway to alpine lakes, vast distances and the food cultures of China's far west.",
    stay: "3–5 nights",
    bestFor: "Landscape and food",
    interests: ["landscape", "food"],
    image: images.jiuzhaigou,
  },
];

for (const destination of explorerDestinations) {
  destination.guideHref = `/destinations/${destination.id}`;
}

export const destinationInterestImages: Record<DestinationInterest, MediaAsset> = {
  icons: images.beijing,
  pandas: images.chengdu,
  food: images.tea,
  landscape: images.guilin,
  heritage: images.xian,
  city: images.shanghai,
};
