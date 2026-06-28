import { type ReactNode, useEffect, useMemo, useState } from "react";

type ImageAsset = {
  avif?: string;
  webp?: string;
  jpg: string;
  alt: string;
};

type Destination = {
  name: string;
  slug: string;
  promise: string;
  mood: string;
  why: string;
  bestTime: string;
  highlights: string[];
  travelFor: string[];
  image: ImageAsset;
};

type Experience = {
  title: string;
  copy: string;
  image: ImageAsset;
};

type ExperienceCluster = {
  title: string;
  subtitle: string;
  promise: string;
  bestFor: string;
  pace: string;
  pairsWith: string[];
  routeIdeas: string[];
  image: ImageAsset;
};

type Tour = {
  title: string;
  slug: string;
  days: string;
  fit: string;
  pace: string;
  places: string;
  copy: string;
  includes: string[];
  image: ImageAsset;
};

type PageKey = "home" | "destinations" | "experiences" | "tours" | "contact";

const routes: Record<PageKey, string> = {
  home: "/",
  destinations: "/destinations",
  experiences: "/experiences",
  tours: "/private-china-tours",
  contact: "/contact",
};

const heroImage: ImageAsset = {
  avif: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park-1920.avif",
  webp: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park-1920.webp",
  jpg: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park.jpg",
  alt: "Misty sandstone peaks in Zhangjiajie National Forest Park, China",
};

const destinations: Destination[] = [
  {
    name: "Zhangjiajie",
    slug: "zhangjiajie",
    promise: "Walk through stone pillars that feel almost unreal.",
    mood: "Nature / Photography / First China Trip",
    why: "Zhangjiajie is for travelers who want China to feel cinematic on day one: mist, glass walkways, cliff elevators, forest trails, and views that make every photo look impossible.",
    bestTime: "April to June and September to November for softer weather, clearer light, and fewer heavy holiday crowds.",
    highlights: ["Avatar-style sandstone peaks", "Tianmen Mountain", "Forest viewpoints", "Fenghuang old town add-on"],
    travelFor: ["Photographers", "Adventure-light families", "Couples", "Nature lovers"],
    image: {
      avif: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain-1920.avif",
      webp: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain-1920.webp",
      jpg: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain.jpg",
      alt: "Tianmen Mountain landscape in Zhangjiajie",
    },
  },
  {
    name: "Chengdu & Sichuan",
    slug: "chengdu-sichuan",
    promise: "Pandas, teahouses, soft mornings, and food with a pulse.",
    mood: "Family / Food / Slow Culture",
    why: "Chengdu gives first-time visitors an unusually warm entry into China: pandas for children, tea houses for grandparents, spicy food for curious travelers, and mountain landscapes nearby.",
    bestTime: "March to June and September to November. Winter can also work well for pandas and slower city days.",
    highlights: ["Giant panda base", "Sichuan food walks", "Teahouse culture", "Jiuzhaigou or Leshan extensions"],
    travelFor: ["Families", "Food lovers", "Senior-friendly pacing", "Soft adventure"],
    image: {
      jpg: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
      alt: "Giant panda experience in Chengdu, Sichuan",
    },
  },
  {
    name: "Guilin & Yangshuo",
    slug: "guilin-yangshuo",
    promise: "Karst mountains, river light, bamboo rafts, and village roads.",
    mood: "Couples / Nature / Gentle Adventure",
    why: "Guilin and Yangshuo are ideal when travelers want China to slow down: rivers, limestone peaks, village cycling, cooking classes, and evenings that feel far away from big-city speed.",
    bestTime: "April to June for green countryside, and September to October for comfortable weather and clear views.",
    highlights: ["Li River scenery", "Yangshuo countryside", "Longji rice terraces", "Cooking or cycling experiences"],
    travelFor: ["Couples", "Families", "Landscape photographers", "Slow travelers"],
    image: {
      avif: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river-1920.avif",
      webp: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river-1920.webp",
      jpg: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river.jpg",
      alt: "Li River karst mountains near Guilin and Yangshuo",
    },
  },
  {
    name: "Yunnan Highlands",
    slug: "yunnan-highlands",
    promise: "Snow mountains, old towns, monastery bells, and clear air.",
    mood: "Luxury / Culture / Scenic Roads",
    why: "Yunnan is China at a softer altitude: boutique-style stays, Naxi and Tibetan culture, old towns, dramatic snow mountains, and road journeys that feel spacious and personal.",
    bestTime: "March to May and October to November for crisp light, mild temperatures, and strong mountain visibility.",
    highlights: ["Dali and Lijiang", "Shangri-La", "Meili Snow Mountain", "Tiger Leaping Gorge"],
    travelFor: ["Luxury travelers", "Couples", "Culture seekers", "Scenic road trips"],
    image: {
      avif: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains-1920.avif",
      webp: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains-1920.webp",
      jpg: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg",
      alt: "Meili Snow Mountains in Yunnan",
    },
  },
  {
    name: "Beijing, Xi'an & Shanghai",
    slug: "classic-china",
    promise: "The icons, planned with air between the moments.",
    mood: "First-timers / Families / Culture",
    why: "This classic route works when it is paced well: the Great Wall before the rush, Xi'an with context, and Shanghai as a modern finale rather than just another city stop.",
    bestTime: "March to May and September to November. Winter is crisp and often excellent for photography in Beijing.",
    highlights: ["Great Wall", "Forbidden City", "Terracotta Warriors", "Shanghai skyline"],
    travelFor: ["First-time visitors", "Families", "History lovers", "Multi-generation trips"],
    image: {
      avif: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china-1920.avif",
      webp: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china-1920.webp",
      jpg: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg",
      alt: "Great Wall of China private travel experience",
    },
  },
  {
    name: "Silk Road & Dunhuang",
    slug: "silk-road-dunhuang",
    promise: "Desert light, Buddhist caves, old trade routes, and big sky.",
    mood: "Adventure / Photography / Culture",
    why: "The Silk Road is for travelers who want China to feel ancient and wide open: desert lakes, painted caves, frontier towns, and landscapes that do not look like anywhere else.",
    bestTime: "May to June and September to October for comfortable desert travel and beautiful evening light.",
    highlights: ["Dunhuang", "Mogao Caves", "Crescent Lake", "Zhangye rainbow mountains"],
    travelFor: ["Adventure travelers", "Photographers", "Culture lovers", "Repeat visitors"],
    image: {
      avif: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang-1920.avif",
      webp: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang-1920.webp",
      jpg: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg",
      alt: "Crescent Lake in Dunhuang for a Silk Road China journey",
    },
  },
];

const experiences: Experience[] = [
  {
    title: "Eat where the city actually eats",
    copy: "A private food walk can be elegant without becoming staged: night markets, tea houses, family-run kitchens, and the right table at the right hour.",
    image: {
      avif: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave-1920.avif",
      webp: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave-1920.webp",
      jpg: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg",
      alt: "Chongqing night skyline for a private China food and city life journey",
    },
  },
  {
    title: "See the icons without the exhaustion",
    copy: "The Great Wall, Forbidden City, Terracotta Warriors, and Shanghai skyline can feel personal when the pacing is designed around your family.",
    image: destinations[4].image,
  },
  {
    title: "Make China feel easy",
    copy: "English-speaking support, private transfers, high-speed rail planning, food preferences, family rhythm, and local help when plans change.",
    image: {
      avif: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund-1920.avif",
      webp: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund-1920.webp",
      jpg: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg",
      alt: "Shanghai skyline on the Bund for a modern China itinerary",
    },
  },
];

const experienceClusters: ExperienceCluster[] = [
  {
    title: "Food journeys",
    subtitle: "For travelers who remember a city by the table.",
    promise: "A China food trip should feel generous, curious, and easy to enjoy. We design the evenings around local flavor, neighborhood walks, night views, tea, family-run kitchens, and dining confidence for every comfort level.",
    bestFor: "Food lovers, couples, curious families",
    pace: "Evenings carry the mood; mornings stay softer after big food nights.",
    pairsWith: ["Chengdu", "Chongqing", "Xi'an", "Shanghai"],
    routeIdeas: ["Sichuan flavor with pandas and teahouses", "Xi'an noodles, Muslim Quarter, and imperial history", "Shanghai dining with water-town calm"],
    image: {
      avif: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave-1920.avif",
      webp: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave-1920.webp",
      jpg: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg",
      alt: "Chongqing night skyline for a private China food and city life journey",
    },
  },
  {
    title: "Culture & local life",
    subtitle: "For travelers who want context, not a lecture.",
    promise: "Temples, old neighborhoods, gardens, calligraphy, tea, museums, markets, and guide-led stories are paced so China feels understandable without becoming academic.",
    bestFor: "First-time visitors, culture seekers, multi-generation trips",
    pace: "One deep cultural anchor per day, with room to wander.",
    pairsWith: ["Beijing", "Xi'an", "Suzhou", "Luoyang"],
    routeIdeas: ["Beijing hutongs before the palace crowds", "Suzhou gardens with a quieter water-town afternoon", "Luoyang heritage with modern rail comfort"],
    image: {
      jpg: "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-prince-gong-mansion.jpg",
      alt: "Historic Beijing mansion courtyard for a private China culture trip",
    },
  },
  {
    title: "Nature & landscapes",
    subtitle: "For the moment China suddenly feels larger than expected.",
    promise: "We plan mountains, rivers, terraces, snow peaks, and desert light around weather, crowds, transfers, walking levels, and photography windows, so the beauty does not come with exhaustion.",
    bestFor: "Photographers, couples, active families, repeat travelers",
    pace: "Scenic days need recovery space between transfers.",
    pairsWith: ["Zhangjiajie", "Guilin", "Huangshan", "Yunnan"],
    routeIdeas: ["Zhangjiajie peaks with Fenghuang old town", "Guilin and Yangshuo river country", "Yunnan mountains with boutique-style pacing"],
    image: {
      avif: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou-1920.avif",
      webp: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou-1920.webp",
      jpg: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou.jpg",
      alt: "Jiuzhaigou lakes and mountain scenery for a private China nature journey",
    },
  },
  {
    title: "Family China",
    subtitle: "For children, parents, and grandparents traveling at one real pace.",
    promise: "The goal is not to make children endure China. It is to make China feel alive for them: pandas, trains, hands-on food, short cultural moments, flexible mornings, and hotels that make sense.",
    bestFor: "Families with children, teens, or older parents",
    pace: "Balanced days with private transfers and fewer hotel changes.",
    pairsWith: ["Beijing", "Chengdu", "Guilin", "Shanghai"],
    routeIdeas: ["Great Wall, pandas, and skyline finale", "Guilin countryside with child-friendly soft adventure", "Shanghai plus water town and food"],
    image: {
      jpg: "/programs/chongqing-jiuzhaigou-chengdu-6-day/china-prime-dmc-chongqing-jiuzhaigou-chengdu-6-day-chengdu-research-base-of-giant-panda-breeding.jpg",
      alt: "Giant panda in Chengdu for a family China tour",
    },
  },
  {
    title: "Luxury slow travel",
    subtitle: "For travelers who would rather feel more than see more.",
    promise: "Luxury in China is not only a better hotel. It is a cleaner route, quieter timing, private guide chemistry, beautiful meals, scenic transfers, and days that leave space for surprise.",
    bestFor: "Couples, high-net-worth travelers, honeymoon-style trips",
    pace: "Slower, hotel-aware, with fewer rushed departures.",
    pairsWith: ["Yunnan", "Hangzhou", "Shanghai", "Huangshan"],
    routeIdeas: ["Yunnan highlands with old towns and snow mountains", "Shanghai and Hangzhou with gardens and design-led stays", "Huangshan with village architecture and sunrise pacing"],
    image: {
      avif: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake-1920.avif",
      webp: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake-1920.webp",
      jpg: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg",
      alt: "West Lake in Hangzhou for a luxury slow China journey",
    },
  },
  {
    title: "Soft adventure",
    subtitle: "For travelers who want movement without pressure.",
    promise: "Glass bridges, river walks, cable cars, village cycling, canyon views, and mountain trails can be exciting without becoming extreme. We match the route to your real energy level.",
    bestFor: "Active couples, teens, photography travelers, fit seniors",
    pace: "Active mornings, comfortable transfers, optional harder routes.",
    pairsWith: ["Zhangjiajie", "Yangshuo", "Tiger Leaping Gorge", "Huangshan"],
    routeIdeas: ["Zhangjiajie viewpoints without overpacking", "Yangshuo cycling and river scenery", "Yunnan gorge views with private driver support"],
    image: {
      jpg: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-glass-bridge.jpg",
      alt: "Zhangjiajie glass bridge for a soft adventure China trip",
    },
  },
  {
    title: "Muslim-friendly travel",
    subtitle: "For families who need confidence before the trip begins.",
    promise: "Halal-aware planning is not one restaurant note. It is route choice, dining research, prayer-aware timing, private transport, family comfort, and clear expectations city by city.",
    bestFor: "Muslim families, multi-generation travelers, first-time China visitors",
    pace: "Private, food-aware, with practical downtime.",
    pairsWith: ["Beijing", "Xi'an", "Shanghai", "Guilin"],
    routeIdeas: ["Classic China with researched halal dining", "Xi'an culture with Muslim Quarter context", "Guilin scenery with easier family pacing"],
    image: {
      jpg: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
      alt: "Xi'an Muslim Quarter for Muslim-friendly private China travel",
    },
  },
  {
    title: "Photography trips",
    subtitle: "For travelers who build the day around light.",
    promise: "We consider sunrise access, blue-hour city views, weather buffers, viewpoint logistics, crowd timing, and routes that let the camera rest between big scenes.",
    bestFor: "Landscape photographers, creators, couples, repeat travelers",
    pace: "Early starts when worth it, slower middays, flexible evenings.",
    pairsWith: ["Huangshan", "Guilin", "Dunhuang", "Shanghai"],
    routeIdeas: ["Huangshan sunrise with ancient villages", "Dunhuang desert light and Buddhist caves", "Shanghai skyline and water-town contrast"],
    image: {
      avif: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark-1920.avif",
      webp: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark-1920.webp",
      jpg: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark.jpg",
      alt: "Zhangye National Geopark colors for a China photography journey",
    },
  },
];


const tours: Tour[] = [
  {
    title: "First China, beautifully paced",
    slug: "first-china-family-private-tour",
    days: "10-12 days",
    fit: "Families / Couples / First-timers",
    pace: "Balanced, private, low-friction",
    places: "Beijing, Xi'an, Chengdu or Guilin, Shanghai",
    copy: "The essential China route, rewritten around comfort: private guides, calmer starts, high-speed rail where it makes sense, and enough unscheduled time to let the trip breathe.",
    includes: ["Great Wall timing", "Panda or Guilin add-on", "Family-friendly food planning", "Private transfers"],
    image: {
      jpg: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-terracotta-army.jpg",
      alt: "Terracotta Army in Xi'an for a classic private China tour",
    },
  },
  {
    title: "Mountains, rivers, and quiet villages",
    slug: "china-photography-nature-private-tour",
    days: "9-14 days",
    fit: "Photography / Nature / Slow Travel",
    pace: "Scenic, spacious, sunrise-aware",
    places: "Zhangjiajie, Guilin, Huangshan, Yunnan",
    copy: "A route for travelers who want China to look cinematic without feeling rushed. We plan the light, the transfers, and the recovery time between big landscapes.",
    includes: ["Sunrise windows", "Less crowded viewpoints", "Flexible hiking levels", "Village and river experiences"],
    image: {
      avif: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan-1920.avif",
      webp: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan-1920.webp",
      jpg: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan.jpg",
      alt: "Huangshan mountains for a scenic China photography journey",
    },
  },
  {
    title: "Halal-aware China, privately planned",
    slug: "muslim-friendly-private-china-tour",
    days: "8-14 days",
    fit: "Muslim Families / Multi-city",
    pace: "Prayer-aware, food-aware, private",
    places: "Beijing, Xi'an, Shanghai, Chengdu or Guilin",
    copy: "A comfortable China itinerary with halal dining research, prayer-aware pacing, private transport, and major cultural highlights without making the trip feel constrained.",
    includes: ["Halal dining research", "Private driver-guide days", "Mosque and culture stops", "Family-friendly pacing"],
    image: {
      jpg: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg",
      alt: "Muslim Quarter in Xi'an for Muslim-friendly China travel",
    },
  },
  {
    title: "Yunnan soft-luxury mountain journey",
    slug: "yunnan-luxury-private-tour",
    days: "8-11 days",
    fit: "Couples / Luxury / Culture",
    pace: "Slow, scenic, boutique-style",
    places: "Dali, Lijiang, Shangri-La, Meili Snow Mountain",
    copy: "Old towns, mountain lodges, Tibetan culture, and private scenic drives designed for travelers who want beauty without daily overpacking.",
    includes: ["Scenic private drives", "Boutique-style stays", "Old town evenings", "Mountain-view pacing"],
    image: destinations[3].image,
  },
  {
    title: "Chengdu, Chongqing and panda country",
    slug: "chengdu-chongqing-food-family-tour",
    days: "6-9 days",
    fit: "Families / Food Lovers / Soft Adventure",
    pace: "Warm, flavorful, flexible",
    places: "Chengdu, Leshan or Dujiangyan, Chongqing",
    copy: "A playful route that mixes pandas, Sichuan food, teahouses, river-city night views, and private support for families who want China to feel welcoming quickly.",
    includes: ["Panda visit", "Food walk", "Teahouse time", "Optional mountain or river extension"],
    image: {
      avif: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave-1920.avif",
      webp: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave-1920.webp",
      jpg: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg",
      alt: "Hongya Cave night view in Chongqing for a Chengdu and Chongqing private tour",
    },
  },
  {
    title: "Silk Road desert and cave journey",
    slug: "silk-road-dunhuang-private-tour",
    days: "8-12 days",
    fit: "Adventure / Photography / Culture",
    pace: "Big landscapes, carefully spaced",
    places: "Lanzhou, Zhangye, Jiayuguan, Dunhuang",
    copy: "A western China route for travelers drawn to desert light, Buddhist art, old trade routes, and a side of China that feels wide open and deeply historic.",
    includes: ["Mogao Caves planning", "Desert sunset timing", "Rainbow mountain viewpoints", "Private overland logistics"],
    image: destinations[5].image,
  },
];

const reviews = [
  {
    quote: "China felt huge before we arrived. By day two it felt welcoming, easy, and completely unforgettable.",
    name: "Rachel M.",
    trip: "Family journey / Beijing, Xi'an, Chengdu, Shanghai",
  },
  {
    quote: "The best part was not being rushed. We saw the icons, but the trip still felt like ours.",
    name: "Thomas & Elena",
    trip: "Private couple trip / Yunnan and Guilin",
  },
  {
    quote: "Food, trains, WeChat, timing, guides: all the things we worried about were quietly handled.",
    name: "Nadia A.",
    trip: "Muslim-friendly China route",
  },
];

const pageMeta: Record<PageKey, { title: string; description: string }> = {
  home: {
    title: "Private China Tours for Families, Couples & Luxury Travelers | China Prime",
    description: "Design a private China journey that feels extraordinary, easy, and personal with local experts who plan around your pace, food needs, family rhythm, and travel style.",
  },
  destinations: {
    title: "Best Places to Visit in China for a Private Custom Trip | China Prime",
    description: "Explore China destinations for families, couples, luxury travelers, photographers, food lovers, and first-time visitors, with best times, highlights, and route ideas.",
  },
  experiences: {
    title: "China Travel Experiences for Families, Food Lovers & Luxury Travelers | China Prime",
    description: "Choose private China travel experiences by style: food, culture, nature, family, luxury slow travel, soft adventure, Muslim-friendly planning, and photography routes.",
  },
  tours: {
    title: "Private China Tours & Custom Itinerary Ideas | China Prime",
    description: "Browse private China tour ideas for first-time visitors, families, Muslim travelers, photographers, food lovers, and luxury couples. Every route is customized.",
  },
  contact: {
    title: "Plan a Private China Trip With a Local Specialist | China Prime",
    description: "Share your dates, travel style, food needs, pace, and must-see places. China Prime will turn your first ideas into a private China itinerary direction.",
  },
};

function getPageFromPath(pathname: string): PageKey {
  if (pathname.startsWith(routes.destinations)) return "destinations";
  if (pathname.startsWith(routes.experiences)) return "experiences";
  if (pathname.startsWith(routes.tours)) return "tours";
  if (pathname.startsWith(routes.contact)) return "contact";
  return "home";
}

function usePage(): PageKey {
  const [page, setPage] = useState<PageKey>(() => getPageFromPath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPage(getPageFromPath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return page;
}

function navigateTo(page: PageKey) {
  const path = routes[page];
  if (window.location.pathname !== path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Picture({ image, className, loading = "lazy" }: { image: ImageAsset; className?: string; loading?: "lazy" | "eager" }) {
  return (
    <picture className={className}>
      {image.avif ? <source srcSet={image.avif} type="image/avif" /> : null}
      {image.webp ? <source srcSet={image.webp} type="image/webp" /> : null}
      <img src={image.jpg} alt={image.alt} loading={loading} decoding="async" />
    </picture>
  );
}

function PageLink({ page, children, className, onNavigate }: { page: PageKey; children: ReactNode; className?: string; onNavigate?: () => void }) {
  return (
    <a
      className={className}
      href={routes[page]}
      onClick={(event) => {
        event.preventDefault();
        onNavigate?.();
        navigateTo(page);
      }}
    >
      {children}
    </a>
  );
}

function InquiryLink({ children, className, subject }: { children: ReactNode; className?: string; subject: string }) {
  return (
    <a className={className} href={`mailto:chinaprimedmc@gmail.com?subject=${encodeURIComponent(subject)}`}>
      {children}
    </a>
  );
}

function Header({ page }: { page: PageKey }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="nav" aria-label="Primary navigation">
      <PageLink page="home" className="brand" onNavigate={closeMenu}>
        <span className="brand-mark">CP</span>
        <span>China Prime</span>
      </PageLink>
      <nav className="nav-links" aria-label="Main menu">
        <PageLink page="destinations" className={page === "destinations" ? "is-active" : undefined}>Destinations</PageLink>
        <PageLink page="experiences" className={page === "experiences" ? "is-active" : undefined}>Experiences</PageLink>
        <PageLink page="tours" className={page === "tours" ? "is-active" : undefined}>Private Tours</PageLink>
        <a href={page === "home" ? "#trust" : "/#trust"}>Why Us</a>
      </nav>
      <PageLink className="nav-cta" page="contact" onNavigate={closeMenu}>Start Planning</PageLink>
      <button
        className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="mobile-menu-label">{menuOpen ? "Close" : "Menu"}</span>
        <span className="mobile-menu-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>
      {menuOpen ? (
        <nav className="mobile-nav-panel" aria-label="Mobile menu">
          <PageLink page="destinations" className={page === "destinations" ? "is-active" : undefined} onNavigate={closeMenu}>Destinations</PageLink>
          <PageLink page="experiences" className={page === "experiences" ? "is-active" : undefined} onNavigate={closeMenu}>Experiences</PageLink>
          <PageLink page="tours" className={page === "tours" ? "is-active" : undefined} onNavigate={closeMenu}>Private Tours</PageLink>
          <a href={page === "home" ? "#trust" : "/#trust"} onClick={closeMenu}>Why Us</a>
          <PageLink page="contact" className="mobile-nav-cta" onNavigate={closeMenu}>Start Planning</PageLink>
        </nav>
      ) : null}
    </header>
  );
}

function HomePage() {
  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <Picture image={heroImage} className="hero-media" loading="eager" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Private China journeys for international travelers</p>
          <h1 id="hero-title">China should feel extraordinary, not complicated.</h1>
          <p className="hero-copy">
            We design private China trips around the way you actually travel: your pace, your food needs, your family rhythm, your first questions, and the moments you will remember years later.
          </p>
          <div className="hero-actions">
            <InquiryLink className="button button-primary" subject="Start planning my China journey">Build my itinerary</InquiryLink>
            <PageLink className="button button-ghost" page="destinations">See where China begins</PageLink>
          </div>
        </div>
        <div className="hero-proof" aria-label="Travel planning highlights">
          <span>Founded 2012</span>
          <span>Private guides</span>
          <span>Family & halal-aware planning</span>
        </div>
      </section>

      <section className="intro scene-bright" aria-labelledby="intro-title">
        <div className="section-kicker">Dream first. Details second.</div>
        <div className="intro-grid">
          <h2 id="intro-title">The right China trip does not feel like a checklist.</h2>
          <p>
            It feels like watching your children meet a panda in Chengdu. Like stepping onto the Great Wall before the day gets loud. Like eating noodles in a city you did not expect to love. We handle the complexity so the journey can stay human.
          </p>
        </div>
      </section>

      <section className="destinations" id="destinations" aria-labelledby="destinations-title">
        <div className="section-heading">
          <p className="eyebrow dark">Popular ways to enter China</p>
          <h2 id="destinations-title">Choose the feeling first. We will shape the route.</h2>
        </div>
        <div className="destination-grid compact-destination-grid">
          {destinations.slice(0, 4).map((destination) => (
            <article className="destination-card" key={destination.name}>
              <Picture image={destination.image} className="card-media" />
              <div className="card-copy">
                <p>{destination.mood}</p>
                <h3>{destination.name}</h3>
                <span>{destination.promise}</span>
              </div>
            </article>
          ))}
        </div>
        <div className="section-action">
          <PageLink className="button button-dark" page="destinations">Compare more destinations</PageLink>
        </div>
      </section>

      <section className="split-story" id="experiences" aria-labelledby="experiences-title">
        <div className="split-copy">
          <p className="eyebrow dark">Experiences</p>
          <h2 id="experiences-title">You are not coming this far for a generic tour.</h2>
          <p>
            Your China can be food-led, culture-led, nature-led, family-led, luxury-led, or quietly adventurous. The route should adapt to you, not the other way around.
          </p>
          <PageLink className="text-link" page="experiences">Choose your travel style</PageLink>
        </div>
        <div className="experience-stack">
          {experiences.map((experience) => (
            <article className="experience-card" key={experience.title}>
              <Picture image={experience.image} className="experience-media" />
              <div>
                <h3>{experience.title}</h3>
                <p>{experience.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FeaturedTours limit={3} />
      <TrustSection />
      <ReviewSection />
      <PlannerSection />
    </main>
  );
}

function DestinationsPage() {
  return (
    <main id="top">
      <PageHero
        eyebrow="Destinations"
        title="The China you choose changes the whole story."
        copy="Start with the feeling: dramatic mountains, easier family days, food-led cities, heritage icons, soft luxury, or desert light. Then we design the route around your pace."
        image={destinations[2].image}
      />
      <section className="page-intro" aria-labelledby="destinations-planner-title">
        <div>
          <p className="eyebrow dark">How to choose</p>
          <h2 id="destinations-planner-title">Do not start with a map. Start with what you want to remember.</h2>
        </div>
        <p>
          First-time travelers often try to see everything. A better China journey has contrast: one icon city, one landscape, one local-life moment, and enough space between them. These destination clusters are built to help you decide what belongs in your first route.
        </p>
      </section>
      <section className="destination-index" aria-label="China destination guide cards">
        {destinations.map((destination) => (
          <article className="destination-detail-card" key={destination.slug}>
            <Picture image={destination.image} className="destination-detail-media" />
            <div className="destination-detail-copy">
              <p className="eyebrow dark">{destination.mood}</p>
              <h2>{destination.name}</h2>
              <p>{destination.why}</p>
              <div className="info-strip">
                <span>Best time</span>
                <strong>{destination.bestTime}</strong>
              </div>
              <div className="mini-list">
                {destination.highlights.map((item) => <span key={item}>{item}</span>)}
              </div>
              <div className="audience-row">
                {destination.travelFor.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>
      <RouteBuilder />
      <PlannerSection />
    </main>
  );
}


function ExperiencesPage() {
  return (
    <main id="top">
      <PageHero
        eyebrow="Experiences"
        title="Choose the kind of China you want to feel."
        copy="Some travelers come for food. Some for mountains. Some need a family rhythm, halal-aware planning, or a quieter luxury pace. Start here, then we shape the cities around the experience."
        image={experienceClusters[2].image}
      />
      <section className="experience-manifesto" aria-labelledby="experience-manifesto-title">
        <div>
          <p className="eyebrow dark">A better starting point</p>
          <h2 id="experience-manifesto-title">Most China trips start with places. The best ones start with people.</h2>
        </div>
        <p>
          A first-time family, a food-obsessed couple, a Muslim household, and a photographer should not receive the same route with different hotel names. The experience you want changes the pace, guide style, dining plan, transport choices, and even which cities belong in the itinerary.
        </p>
      </section>

      <section className="experience-editorial" aria-label="China travel experience styles">
        {experienceClusters.map((experience, index) => (
          <article className="experience-feature" key={experience.title}>
            <Picture image={experience.image} className="experience-feature-media" />
            <div className="experience-feature-copy">
              <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
              <p className="eyebrow dark">{experience.bestFor}</p>
              <h2>{experience.title}</h2>
              <h3>{experience.subtitle}</h3>
              <p>{experience.promise}</p>
              <div className="experience-detail-grid">
                <div className="info-strip slim"><span>Pace</span><strong>{experience.pace}</strong></div>
                <div className="info-strip slim"><span>Pairs well with</span><strong>{experience.pairsWith.join(" / ")}</strong></div>
              </div>
              <div className="mini-list">
                {experience.routeIdeas.map((idea) => <span key={idea}>{idea}</span>)}
              </div>
              <InquiryLink className="text-link" subject={`Design a ${experience.title} China journey`}>Ask for this experience style</InquiryLink>
            </div>
          </article>
        ))}
      </section>

      <section className="experience-method" aria-labelledby="experience-method-title">
        <p className="eyebrow dark">How we translate style into route</p>
        <h2 id="experience-method-title">The same destination can become a completely different trip.</h2>
        <div className="comparison-grid">
          <article><strong>Food-led</strong><p>Later starts, stronger local dining, market walks, tea, flexible evenings, and guides who know when to explain and when to let the table speak.</p></article>
          <article><strong>Family-led</strong><p>Shorter cultural blocks, private transfers, panda or hands-on moments, fewer hard hotel changes, and a route that protects everyone&apos;s energy.</p></article>
          <article><strong>Image-led</strong><p>Sunrise timing, viewpoint sequencing, weather buffers, scenic transfers, and fewer rushed museum-heavy days when the light is better outside.</p></article>
        </div>
      </section>
      <FeaturedTours limit={3} />
      <PlannerSection />
    </main>
  );
}

function ToursPage() {
  return (
    <main id="top">
      <PageHero
        eyebrow="Private China tours"
        title="Begin with an idea. We will make it feel like your trip."
        copy="Every route below is a starting point, not a package. We adjust pace, hotels, food needs, guides, transport, and daily rhythm around the people who are actually traveling."
        image={tours[1].image}
      />
      <section className="tour-filter-story" aria-labelledby="tour-filter-title">
        <div>
          <p className="eyebrow dark">Route logic</p>
          <h2 id="tour-filter-title">B2C travelers do not need more products. They need a route they can trust.</h2>
        </div>
        <div className="filter-pills" aria-label="Tour styles">
          {['First-time China', 'Family friendly', 'Muslim-friendly', 'Luxury pace', 'Food-led', 'Photography', 'Soft adventure'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <FeaturedTours limit={tours.length} expanded />
      <section className="comparison-band" aria-labelledby="comparison-title">
        <p className="eyebrow dark">What changes when it is private</p>
        <h2 id="comparison-title">Less guessing. More moments that feel designed for you.</h2>
        <div className="comparison-grid">
          <article><strong>Daily rhythm</strong><p>Start times, walking intensity, meals, and downtime can be shaped around children, parents, jet lag, or photography light.</p></article>
          <article><strong>Food confidence</strong><p>We plan around comfort level, halal-aware needs, picky eaters, allergies, and travelers who want serious local food.</p></article>
          <article><strong>Local decisions</strong><p>When weather, crowds, or traffic change the plan, your guide and planner can adjust without turning the day into stress.</p></article>
        </div>
      </section>
      <PlannerSection />
    </main>
  );
}

function ContactPage() {
  const travelStyles = ["First-time China", "Family trip", "Luxury pace", "Muslim-friendly", "Food journey", "Photography", "Soft adventure", "Senior-friendly"];
  const briefTemplates = [
    "We are visiting China for the first time and want the icons without feeling rushed.",
    "We are traveling with children or older parents and need a comfortable pace.",
    "We care most about food, culture, local life, and a route that feels personal.",
    "We need halal-aware planning, private transport, and dining confidence.",
  ];

  return (
    <main id="top">
      <PageHero
        eyebrow="Trip planner"
        title="Tell us the trip you are hoping for. We will make it easier to see."
        copy="You do not need a perfect itinerary yet. Share your dates, travelers, comfort level, and a few dreams. We will turn that into a first private China route direction."
        image={destinations[1].image}
      />
      <section className="contact-shell" aria-labelledby="contact-title">
        <div className="contact-story">
          <p className="eyebrow dark">Start here</p>
          <h2 id="contact-title">A good China plan begins with the questions travelers are almost afraid to ask.</h2>
          <p>
            Is the pace too tiring? Will the food work? Can children enjoy it? How do trains, payments, guides, and language actually feel on the ground? Tell us what matters, and we will design around it.
          </p>
          <div className="contact-assurance">
            <span>Reply with a first route idea</span>
            <span>No shopping-tour pressure</span>
            <span>Private planning since 2012</span>
          </div>
          <div className="contact-visual-mosaic" aria-label="Private China trip planning scenes">
            <Picture image={destinations[4].image} />
            <Picture image={destinations[1].image} />
          </div>
        </div>

        <form
          className="planner-form"
          action="mailto:chinaprimedmc@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            <span>Your name</span>
            <input name="Name" placeholder="Jane Smith" autoComplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input name="Email" type="email" placeholder="jane@example.com" autoComplete="email" />
          </label>
          <label>
            <span>Approximate travel dates</span>
            <input name="Travel dates" placeholder="October 2026, around 10-12 days" />
          </label>
          <label>
            <span>Travelers</span>
            <input name="Travelers" placeholder="2 adults, 2 children, grandparents..." />
          </label>
          <label className="full-field">
            <span>What kind of China trip sounds right?</span>
            <div className="choice-grid">
              {travelStyles.map((style) => (
                <label key={style} className="choice-pill">
                  <input type="checkbox" name="Travel style" value={style} />
                  <span>{style}</span>
                </label>
              ))}
            </div>
          </label>
          <label className="full-field">
            <span>Use a quick brief starter</span>
            <select name="Brief starter" defaultValue="">
              <option value="" disabled>Choose the closest starting point</option>
              {briefTemplates.map((template) => <option key={template}>{template}</option>)}
            </select>
          </label>
          <label className="full-field">
            <span>Your notes</span>
            <textarea
              name="Trip notes"
              rows={7}
              placeholder="Tell us must-see places, food needs, pace, hotel style, budget range, mobility concerns, or what you want this trip to feel like."
            />
          </label>
          <button type="submit" className="button button-primary">Send my trip brief</button>
          <p className="form-note">Prefer email? Write to chinaprimedmc@gmail.com with your dates and traveler count.</p>
        </form>
      </section>
      <section className="contact-aftercare" aria-labelledby="aftercare-title">
        <p className="eyebrow dark">What happens next</p>
        <h2 id="aftercare-title">You get a thoughtful first direction, not a generic package.</h2>
        <div className="comparison-grid">
          <article><strong>1. We read for intent</strong><p>We look for pace, comfort needs, traveler mix, and the emotional reason behind the trip.</p></article>
          <article><strong>2. We shape a route</strong><p>We suggest a realistic China path with the right contrast: icons, landscapes, food, rest, and logistics.</p></article>
          <article><strong>3. You refine it with us</strong><p>Hotels, guides, food needs, budget, and daily rhythm are adjusted before anything feels final.</p></article>
        </div>
      </section>
    </main>
  );
}

function FeaturedTours({ limit, expanded = false }: { limit: number; expanded?: boolean }) {
  return (
    <section className="tours" id="tours" aria-labelledby="tours-title">
      <div className="section-heading narrow">
        <p className="eyebrow dark">Private tours</p>
        <h2 id="tours-title">Start with a route idea. Leave room for your story.</h2>
        <p>These are not fixed packages. They are starting points for a private China itinerary designed around your dates, budget, comfort level, and travel style.</p>
      </div>
      <div className={expanded ? "tour-grid tour-grid-expanded" : "tour-grid"}>
        {tours.slice(0, limit).map((tour) => (
          <article className="tour-card" key={tour.slug}>
            <Picture image={tour.image} className="tour-media" />
            <div className="tour-body">
              <div className="tour-meta">
                <span>{tour.days}</span>
                <span>{tour.fit}</span>
              </div>
              <h3>{tour.title}</h3>
              <p>{tour.copy}</p>
              {expanded ? (
                <>
                  <div className="info-strip slim"><span>Pace</span><strong>{tour.pace}</strong></div>
                  <div className="info-strip slim"><span>Route</span><strong>{tour.places}</strong></div>
                  <div className="mini-list">
                    {tour.includes.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </>
              ) : null}
              <InquiryLink subject={`Plan this route: ${tour.title}`}>Ask for this route idea</InquiryLink>
            </div>
          </article>
        ))}
      </div>
      {!expanded ? (
        <div className="section-action">
          <PageLink className="button button-dark" page="tours">See private tour ideas</PageLink>
        </div>
      ) : null}
    </section>
  );
}

function TrustSection() {
  return (
    <section className="trust" id="trust" aria-labelledby="trust-title">
      <div className="trust-panel">
        <p className="eyebrow">Why travelers trust us</p>
        <h2 id="trust-title">China is easier when someone local is thinking three steps ahead.</h2>
      </div>
      <div className="trust-grid">
        <article>
          <strong>Human planning</strong>
          <p>No generic form replies. We ask the small questions that change the whole trip: walking tolerance, food comfort, family pace, hotel style, and what you are secretly hoping for.</p>
        </article>
        <article>
          <strong>Private, flexible days</strong>
          <p>Guides and drivers are arranged around your rhythm, so you can slow down, change course, or linger when a place becomes the highlight.</p>
        </article>
        <article>
          <strong>Local support inside China</strong>
          <p>Trains, payments, weather, dining, guide timing, and last-minute changes are handled with calm local help instead of guesswork.</p>
        </article>
      </div>
    </section>
  );
}

function ReviewSection() {
  return (
    <section className="reviews" aria-labelledby="reviews-title">
      <div className="section-heading narrow">
        <p className="eyebrow dark">Traveler stories</p>
        <h2 id="reviews-title">The best feedback is usually relief.</h2>
      </div>
      <div className="review-grid">
        {reviews.map((review) => (
          <figure className="review-card" key={review.name}>
            <blockquote>“{review.quote}”</blockquote>
            <figcaption>
              <strong>{review.name}</strong>
              <span>{review.trip}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function PlannerSection() {
  return (
    <section className="planner" aria-labelledby="planner-title">
      <Picture image={destinations[5].image} className="planner-media" />
      <div className="planner-card">
        <p className="eyebrow dark">Plan with less friction</p>
        <h2 id="planner-title">Tell us what kind of China you want to feel.</h2>
        <p>
          Send your dates, traveler count, must-see places, food needs, and pace. We will return with a first route idea that makes the country feel possible.
        </p>
        <a className="button button-primary" href="mailto:chinaprimedmc@gmail.com?subject=Plan%20my%20private%20China%20trip&body=Travel%20dates:%0ATravelers:%0AInterests:%0AFood%20or%20accessibility%20needs:%0APreferred%20pace:%0AMust-see%20places:%0A">Get my first route idea</a>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: ImageAsset }) {
  return (
    <section className="page-hero" aria-labelledby="page-title">
      <Picture image={image} className="page-hero-media" loading="eager" />
      <div className="page-hero-overlay" />
      <div className="page-hero-copy">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="page-title">{title}</h1>
        <p>{copy}</p>
      </div>
    </section>
  );
}

function RouteBuilder() {
  return (
    <section className="route-builder" aria-labelledby="route-builder-title">
      <div>
        <p className="eyebrow dark">Suggested combinations</p>
        <h2 id="route-builder-title">A strong first China trip usually has contrast.</h2>
      </div>
      <div className="route-steps">
        <article><span>01</span><strong>One icon city</strong><p>Beijing, Xi'an, or Shanghai gives the trip an anchor travelers immediately understand.</p></article>
        <article><span>02</span><strong>One landscape</strong><p>Zhangjiajie, Guilin, Huangshan, Yunnan, or the Silk Road gives the journey emotional scale.</p></article>
        <article><span>03</span><strong>One human moment</strong><p>Pandas, food, tea, village life, calligraphy, markets, or a quiet private guide story makes China feel personal.</p></article>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>China Prime DMC</strong>
        <p>Private China journeys for travelers who want beauty, comfort, and local intelligence.</p>
      </div>
      <div className="footer-links">
        <PageLink page="destinations">Destinations</PageLink>
        <PageLink page="experiences">Experiences</PageLink>
        <PageLink page="tours">Private Tours</PageLink>
        <PageLink page="contact">Contact</PageLink>
      </div>
    </footer>
  );
}

export default function App() {
  const page = usePage();
  const meta = useMemo(() => pageMeta[page], [page]);

  useEffect(() => {
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [meta]);

  return (
    <div className="site-shell">
      <Header page={page} />
      {page === "destinations" ? <DestinationsPage /> : page === "experiences" ? <ExperiencesPage /> : page === "tours" ? <ToursPage /> : page === "contact" ? <ContactPage /> : <HomePage />}
      <Footer />
      {page !== "contact" ? <PageLink className="floating-inquiry" page="contact">Start planning</PageLink> : null}
    </div>
  );
}
