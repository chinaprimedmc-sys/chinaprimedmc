import { type ReactNode, useEffect, useMemo, useState } from "react";

type ImageAsset = {
  avif?: string;
  webp?: string;
  avifSet?: string;
  webpSet?: string;
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
  nights: string;
  fit: string;
  pace: string;
  places: string;
  copy: string;
  includes: string[];
  excludes: string[];
  themes: string[];
  audiences: string[];
  destinationTags: string[];
  bestTime: string;
  transport: string;
  priceFrom: string;
  heroPromise: string;
  coreReasons: string[];
  highlights: { title: string; copy: string; image: ImageAsset }[];
  daysPlan: { day: string; place: string; highlight: string; morning: string; afternoon: string; evening: string }[];
  comfortNotes: string[];
  faq: { q: string; a: string }[];
  image: ImageAsset;
};

type PageKey = "home" | "destinations" | "experiences" | "tours" | "contact";

type LocationState = {
  page: PageKey;
  pathname: string;
  search: string;
};

type TravelStyle = {
  id: "classic" | "premium" | "signature";
  name: string;
  price: string;
  promise: string;
  hotel: string;
  guide: string;
  dining: string;
  pace: string;
  access: string;
  bestFor: string;
};

const routes: Record<PageKey, string> = {
  home: "/",
  destinations: "/destinations",
  experiences: "/experiences",
  tours: "/private-china-tours",
  contact: "/contact",
};

function programImage(folder: string, name: string, alt: string): ImageAsset {
  const base = `/programs/${folder}/${name}`;
  return {
    avif: `${base}-1920.avif`,
    webp: `${base}-1920.webp`,
    avifSet: `${base}-960.avif 960w, ${base}-1400.avif 1400w, ${base}-1920.avif 1920w`,
    webpSet: `${base}-960.webp 960w, ${base}-1400.webp 1400w, ${base}-1920.webp 1920w`,
    jpg: `${base}.jpg`,
    alt,
  };
}

function jpgImage(folder: string, name: string, alt: string): ImageAsset {
  return {
    jpg: `/programs/${folder}/${name}.jpg`,
    alt,
  };
}

const visuals = {
  zhangjiajieForest: programImage(
    "zhangjiajie-fenghuang-5-day",
    "china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park",
    "Misty sandstone peaks in Zhangjiajie National Forest Park, China",
  ),
  tianmenMountain: programImage(
    "zhangjiajie-fenghuang-5-day",
    "china-prime-dmc-zhangjiajie-fenghuang-5-day-tianmen-mountain",
    "Tianmen Mountain road and cliffs in Zhangjiajie",
  ),
  panda: {
    avif: "/editorial/china-prime-dmc-real-giant-panda-family-china-trip-1920.avif",
    avifSet: "/editorial/china-prime-dmc-real-giant-panda-family-china-trip-960.avif 960w, /editorial/china-prime-dmc-real-giant-panda-family-china-trip-1400.avif 1400w, /editorial/china-prime-dmc-real-giant-panda-family-china-trip-1920.avif 1920w",
    webp: "/editorial/china-prime-dmc-real-giant-panda-family-china-trip.webp",
    jpg: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-chengdu-research-base-of-giant-panda-breeding.jpg",
    alt: "Real giant panda for a family China journey in Chengdu",
  },
  liRiver: programImage(
    "guangzhou-guilin-yangshuo-6-day",
    "china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river",
    "Li River karst mountains near Guilin and Yangshuo",
  ),
  yangshuo: programImage(
    "guangzhou-guilin-yangshuo-6-day",
    "china-prime-dmc-guangzhou-guilin-yangshuo-6-day-yangshuo-county",
    "Yangshuo countryside with limestone karst scenery",
  ),
  meili: programImage(
    "shangri-la-meili-snow-mountain-8-day",
    "china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains",
    "Meili Snow Mountains in Yunnan at sunrise",
  ),
  songzanlin: programImage(
    "shangri-la-meili-snow-mountain-8-day",
    "china-prime-dmc-shangri-la-meili-snow-mountain-8-day-songzanlin-monastery",
    "Songzanlin Monastery in Shangri-La, Yunnan",
  ),
  greatWall: programImage(
    "beijing-great-wall-gubei-5-day",
    "china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china",
    "Great Wall of China winding across mountain ridges",
  ),
  forbiddenCity: programImage(
    "beijing-great-wall-gubei-5-day",
    "china-prime-dmc-beijing-great-wall-gubei-5-day-forbidden-city",
    "Forbidden City palace architecture in Beijing",
  ),
  crescentLake: programImage(
    "silk-road-gansu-ningxia-8-day",
    "china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang",
    "Crescent Lake and desert dunes in Dunhuang",
  ),
  zhangye: programImage(
    "silk-road-gansu-ningxia-8-day",
    "china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark",
    "Zhangye National Geopark rainbow mountains in Gansu",
  ),
  westLake: programImage(
    "shanghai-hangzhou-huangshan-9-day",
    "china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake",
    "West Lake in Hangzhou for a luxury slow China journey",
  ),
  huangshan: programImage(
    "shanghai-hangzhou-huangshan-9-day",
    "china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan",
    "Huangshan granite peaks above clouds",
  ),
  bund: programImage(
    "shanghai-hangzhou-huangshan-9-day",
    "china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund",
    "Shanghai skyline from the Bund at blue hour",
  ),
  xidi: programImage(
    "shanghai-hangzhou-huangshan-9-day",
    "china-prime-dmc-shanghai-hangzhou-huangshan-9-day-xidi",
    "Xidi ancient village architecture near Huangshan",
  ),
  jiuzhaigou: programImage(
    "sichuan-tibetan-nature-10-day",
    "china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou",
    "Jiuzhaigou lakes and mountain scenery in Sichuan",
  ),
  huanglong: programImage(
    "sichuan-tibetan-nature-10-day",
    "china-prime-dmc-sichuan-tibetan-nature-10-day-huanglong-scenic-and-historic-interest-area",
    "Huanglong travertine pools in Sichuan",
  ),
  hongya: programImage(
    "chongqing-chengdu-culture-food-5-day",
    "china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave",
    "Hongya Cave and Chongqing skyline at night",
  ),
  heavenlyLake: programImage(
    "southern-xinjiang-silk-road-9-day",
    "china-prime-dmc-southern-xinjiang-silk-road-9-day-heavenly-lake-of-tian-shan",
    "Heavenly Lake of Tianshan in Xinjiang",
  ),
  kashgar: programImage(
    "southern-xinjiang-silk-road-9-day",
    "china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar",
    "Kashgar old city on a Silk Road China journey",
  ),
  lujiazui: programImage(
    "southwest-china-yangtze-14-day",
    "china-prime-dmc-southwest-china-yangtze-14-day-lujiazui",
    "Lujiazui skyline in Shanghai",
  ),
  namtso: programImage(
    "tibet-lhasa-nyingchi-8-day",
    "china-prime-dmc-tibet-lhasa-nyingchi-8-day-namtso",
    "Namtso lake and Tibetan plateau scenery",
  ),
  yangtzeGorge: programImage(
    "china-yangtze-cruise-13-day",
    "china-prime-dmc-china-yangtze-cruise-13-day-wu-gorge",
    "Wu Gorge cliffs along the Yangtze River",
  ),
  shennongStream: programImage(
    "china-yangtze-cruise-13-day",
    "china-prime-dmc-china-yangtze-cruise-13-day-shennong-stream",
    "Shennong Stream canyon scenery on the Yangtze",
  ),
  terracotta: jpgImage(
    "beijing-xian-shanghai-8-day",
    "china-prime-dmc-beijing-xian-shanghai-8-day-terracotta-army",
    "Terracotta Army in Xian for a classic private China tour",
  ),
  muslimQuarter: jpgImage(
    "beijing-xian-shanghai-8-day",
    "china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an",
    "Xian Muslim Quarter for Muslim-friendly private China travel",
  ),
  foodStreet: jpgImage(
    "chongqing-chengdu-culture-food-5-day",
    "china-prime-dmc-chongqing-chengdu-culture-food-5-day-sichuan-cuisine",
    "Sichuan cuisine table for a private China food journey",
  ),
  templeOfHeaven: programImage(
    "beijing-great-wall-gubei-5-day",
    "china-prime-dmc-beijing-great-wall-gubei-5-day-temple-of-heaven",
    "Temple of Heaven in Beijing for a private culture trip",
  ),
  gubei: programImage(
    "beijing-great-wall-gubei-5-day",
    "china-prime-dmc-beijing-great-wall-gubei-5-day-gubei-water-town",
    "Gubei Water Town near the Great Wall at dusk",
  ),
  shapotou: programImage(
    "silk-road-gansu-ningxia-8-day",
    "china-prime-dmc-silk-road-gansu-ningxia-8-day-shapotou",
    "Shapotou desert and Yellow River landscape in Ningxia",
  ),
  chimelong: programImage(
    "family-beijing-shanghai-guangzhou-10-day",
    "china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-chimelong-safari-park",
    "Chimelong Safari Park for a family China journey",
  ),
  disney: programImage(
    "family-beijing-shanghai-guangzhou-10-day",
    "china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-shanghai-disneyland",
    "Shanghai Disneyland for a China with kids itinerary",
  ),
  dali: programImage(
    "shangri-la-meili-snow-mountain-8-day",
    "china-prime-dmc-shangri-la-meili-snow-mountain-8-day-dali-city",
    "Dali old town and Cangshan mountain in Yunnan",
  ),
  longji: jpgImage(
    "guangzhou-guilin-yangshuo-6-day",
    "china-prime-dmc-guangzhou-guilin-yangshuo-6-day-longji-rice-terraces",
    "Longji rice terraces near Guilin",
  ),
  hongcun: jpgImage(
    "shanghai-hangzhou-huangshan-9-day",
    "china-prime-dmc-shanghai-hangzhou-huangshan-9-day-hongcun",
    "Hongcun ancient village near Huangshan",
  ),
  potala: jpgImage(
    "tibet-lhasa-nyingchi-8-day",
    "china-prime-dmc-tibet-lhasa-nyingchi-8-day-potala-palace",
    "Potala Palace in Lhasa, Tibet",
  ),
  stoneForest: jpgImage(
    "southwest-china-yangtze-14-day",
    "china-prime-dmc-southwest-china-yangtze-14-day-kunming-stone-forest",
    "Stone Forest karst landscape in Kunming",
  ),
};

const heroImage = visuals.zhangjiajieForest;

const travelStyles: TravelStyle[] = [
  {
    id: "classic",
    name: "Classic Private",
    price: "US$220-320 pp/day",
    promise: "Private comfort without overcomplication.",
    hotel: "Comfortable 4-star or character boutique hotels in practical locations.",
    guide: "Private English-speaking guide on touring days, with private transfers where they matter most.",
    dining: "Local restaurant suggestions and flexible dining at your own pace.",
    pace: "Balanced sightseeing with efficient logistics and clear daily structure.",
    access: "Essential highlights, smart timing, and no shopping-tour pressure.",
    bestFor: "First-time visitors who want China to feel easy, private, and well organized.",
  },
  {
    id: "premium",
    name: "Premium Private",
    price: "US$380-550 pp/day",
    promise: "Better hotels, better pacing, better guide matching.",
    hotel: "Handpicked 4.5-5 star hotels or better boutique stays with stronger locations.",
    guide: "Guide matching by interest: family, food, culture, photography, or soft adventure.",
    dining: "More thoughtful restaurant planning, comfort-aware choices, and special local meals.",
    pace: "Fewer rushed starts, more room for children or older parents, and smoother city changes.",
    access: "Private moments, scenic timing, stronger support, and more refined daily flow.",
    bestFor: "Families, couples, and multi-city travelers who want the trip to feel polished.",
  },
  {
    id: "signature",
    name: "Signature Luxury",
    price: "US$600-950+ pp/day",
    promise: "The most personal version of China we can design.",
    hotel: "Luxury hotels, suites, design-led stays, or top-tier boutique properties where available.",
    guide: "Senior guide matching, VIP-style logistics, and more flexible daily control.",
    dining: "Curated dining, private cultural moments, scenic meals, and special experience planning.",
    pace: "Slower rhythm, fewer compromises, more privacy, and more room for surprise.",
    access: "Milestone-level planning, upgraded logistics, and bespoke experiences where feasible.",
    bestFor: "Honeymoons, milestone family trips, high-net-worth travelers, and complex custom requests.",
  },
];

function contactPathForTour(tour: Tour, style: TravelStyle) {
  const params = new URLSearchParams({
    journey: tour.slug,
    style: style.id,
  });
  return `${routes.contact}?${params.toString()}`;
}

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
    image: visuals.tianmenMountain,
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
    image: visuals.panda,
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
    image: visuals.liRiver,
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
    image: visuals.meili,
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
    image: visuals.greatWall,
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
    image: visuals.crescentLake,
  },
];

const experiences: Experience[] = [
  {
    title: "Eat where the city actually eats",
    copy: "A private food walk can be elegant without becoming staged: night markets, tea houses, family-run kitchens, and the right table at the right hour.",
    image: visuals.hongya,
  },
  {
    title: "See the icons without the exhaustion",
    copy: "The Great Wall, Forbidden City, Terracotta Warriors, and Shanghai skyline can feel personal when the pacing is designed around your family.",
    image: visuals.forbiddenCity,
  },
  {
    title: "Make China feel easy",
    copy: "English-speaking support, private transfers, high-speed rail planning, food preferences, family rhythm, and local help when plans change.",
    image: visuals.bund,
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
    image: visuals.hongya,
  },
  {
    title: "Culture & local life",
    subtitle: "For travelers who want context, not a lecture.",
    promise: "Temples, old neighborhoods, gardens, calligraphy, tea, museums, markets, and guide-led stories are paced so China feels understandable without becoming academic.",
    bestFor: "First-time visitors, culture seekers, multi-generation trips",
    pace: "One deep cultural anchor per day, with room to wander.",
    pairsWith: ["Beijing", "Xi'an", "Suzhou", "Luoyang"],
    routeIdeas: ["Beijing hutongs before the palace crowds", "Suzhou gardens with a quieter water-town afternoon", "Luoyang heritage with modern rail comfort"],
    image: visuals.templeOfHeaven,
  },
  {
    title: "Nature & landscapes",
    subtitle: "For the moment China suddenly feels larger than expected.",
    promise: "We plan mountains, rivers, terraces, snow peaks, and desert light around weather, crowds, transfers, walking levels, and photography windows, so the beauty does not come with exhaustion.",
    bestFor: "Photographers, couples, active families, repeat travelers",
    pace: "Scenic days need recovery space between transfers.",
    pairsWith: ["Zhangjiajie", "Guilin", "Huangshan", "Yunnan"],
    routeIdeas: ["Zhangjiajie peaks with Fenghuang old town", "Guilin and Yangshuo river country", "Yunnan mountains with boutique-style pacing"],
    image: visuals.jiuzhaigou,
  },
  {
    title: "Family China",
    subtitle: "For children, parents, and grandparents traveling at one real pace.",
    promise: "The goal is not to make children endure China. It is to make China feel alive for them: pandas, trains, hands-on food, short cultural moments, flexible mornings, and hotels that make sense.",
    bestFor: "Families with children, teens, or older parents",
    pace: "Balanced days with private transfers and fewer hotel changes.",
    pairsWith: ["Beijing", "Chengdu", "Guilin", "Shanghai"],
    routeIdeas: ["Great Wall, pandas, and skyline finale", "Guilin countryside with child-friendly soft adventure", "Shanghai plus water town and food"],
    image: visuals.panda,
  },
  {
    title: "Luxury slow travel",
    subtitle: "For travelers who would rather feel more than see more.",
    promise: "Luxury in China is not only a better hotel. It is a cleaner route, quieter timing, private guide chemistry, beautiful meals, scenic transfers, and days that leave space for surprise.",
    bestFor: "Couples, high-net-worth travelers, honeymoon-style trips",
    pace: "Slower, hotel-aware, with fewer rushed departures.",
    pairsWith: ["Yunnan", "Hangzhou", "Shanghai", "Huangshan"],
    routeIdeas: ["Yunnan highlands with old towns and snow mountains", "Shanghai and Hangzhou with gardens and design-led stays", "Huangshan with village architecture and sunrise pacing"],
    image: visuals.westLake,
  },
  {
    title: "Soft adventure",
    subtitle: "For travelers who want movement without pressure.",
    promise: "Glass bridges, river walks, cable cars, village cycling, canyon views, and mountain trails can be exciting without becoming extreme. We match the route to your real energy level.",
    bestFor: "Active couples, teens, photography travelers, fit seniors",
    pace: "Active mornings, comfortable transfers, optional harder routes.",
    pairsWith: ["Zhangjiajie", "Yangshuo", "Tiger Leaping Gorge", "Huangshan"],
    routeIdeas: ["Zhangjiajie viewpoints without overpacking", "Yangshuo cycling and river scenery", "Yunnan gorge views with private driver support"],
    image: visuals.yangshuo,
  },
  {
    title: "Muslim-friendly travel",
    subtitle: "For families who need confidence before the trip begins.",
    promise: "Halal-aware planning is not one restaurant note. It is route choice, dining research, prayer-aware timing, private transport, family comfort, and clear expectations city by city.",
    bestFor: "Muslim families, multi-generation travelers, first-time China visitors",
    pace: "Private, food-aware, with practical downtime.",
    pairsWith: ["Beijing", "Xi'an", "Shanghai", "Guilin"],
    routeIdeas: ["Classic China with researched halal dining", "Xi'an culture with Muslim Quarter context", "Guilin scenery with easier family pacing"],
    image: visuals.muslimQuarter,
  },
  {
    title: "Photography trips",
    subtitle: "For travelers who build the day around light.",
    promise: "We consider sunrise access, blue-hour city views, weather buffers, viewpoint logistics, crowd timing, and routes that let the camera rest between big scenes.",
    bestFor: "Landscape photographers, creators, couples, repeat travelers",
    pace: "Early starts when worth it, slower middays, flexible evenings.",
    pairsWith: ["Huangshan", "Guilin", "Dunhuang", "Shanghai"],
    routeIdeas: ["Huangshan sunrise with ancient villages", "Dunhuang desert light and Buddhist caves", "Shanghai skyline and water-town contrast"],
    image: visuals.zhangye,
  },
];


type TourInput = {
  title: string;
  slug: string;
  days: number;
  places: string[];
  fit: string;
  pace: string;
  copy: string;
  audiences: string[];
  themes: string[];
  image: ImageAsset;
  highlightImages: ImageAsset[];
  bestTime?: string;
  transport?: string;
  priceFrom?: string;
};

function makeTour(input: TourInput): Tour {
  const dayBlocks = input.places.map((place, index) => {
    const base = Math.floor(input.days / input.places.length);
    const extra = index < input.days % input.places.length ? 1 : 0;
    const length = Math.max(1, base + extra);
    const start = input.places.slice(0, index).reduce((sum, _, prevIndex) => sum + Math.max(1, base + (prevIndex < input.days % input.places.length ? 1 : 0)), 1);
    const end = start + length - 1;
    return {
      day: start === end ? `Day ${start}` : `Days ${start}-${end}`,
      place,
      highlight: `Let ${place} become more than a stop on the map.`,
      morning: `Begin with the place that gives ${place} its emotional shape, paced around quiet timing and guide context.`,
      afternoon: `Continue with a softer local moment: a neighborhood walk, scenic transfer, museum, market, garden, or landscape viewpoint depending on the city.`,
      evening: `Keep the evening flexible, with dining suggestions and enough space to rest rather than rush into the next day.`,
    };
  });

  const highlightTitles = [
    input.places[0] ? `${input.places[0]} with better timing` : "Private timing",
    input.places[1] ? `${input.places[1]} without the rush` : "Local context",
    input.places[2] ? `${input.places[2]} as a real memory` : "Comfortable flow",
  ];

  return {
    title: input.title,
    slug: input.slug,
    days: `${input.days} Days`,
    nights: `${Math.max(1, input.days - 1)} Nights`,
    fit: input.fit,
    pace: input.pace,
    places: input.places.join(", "),
    copy: input.copy,
    includes: ["Private English-speaking guide on touring days", "Private transfers and high-speed rail planning", "Handpicked hotels based on selected travel style", "Daily timing designed around comfort, weather, and crowds"],
    excludes: ["International flights", "China visa fees", "Travel insurance", "Personal expenses and optional upgrades"],
    themes: input.themes,
    audiences: input.audiences,
    destinationTags: input.places,
    bestTime: input.bestTime ?? "March-May and September-November are usually the most comfortable, with seasonal adjustments available.",
    transport: input.transport ?? "Private car, high-speed rail, and selected domestic flights when they protect comfort.",
    priceFrom: input.priceFrom ?? "From US$220 pp/day",
    heroPromise: input.copy,
    coreReasons: highlightTitles,
    highlights: highlightTitles.map((title, index) => ({
      title,
      copy: index === 0
        ? "We place the biggest moment where it belongs in the day, not where a generic schedule would put it."
        : index === 1
          ? "The route protects energy between cities so the journey feels considered, not compressed."
          : "Private planning lets food, hotels, guide chemistry, and daily rhythm match the travelers.",
      image: input.highlightImages[index % input.highlightImages.length],
    })),
    daysPlan: dayBlocks,
    comfortNotes: ["No shopping-tour pressure", "Guide matching based on traveler style", "Food preferences and halal-aware planning can be built in", "Senior-friendly and child-friendly pacing can be requested before quotation"],
    faq: [
      { q: "Can this journey be customized?", a: "Yes. The route is a starting point. We adjust hotels, pace, cities, food needs, walking level, and guide style around your dates and travelers." },
      { q: "Is this suitable for a first trip to China?", a: input.audiences.includes("First-time visitors") ? "Yes. This route is designed to make China feel understandable without stripping away the wonder." : "It can be adapted for first-time visitors, though we may simplify transfers if it is your first China journey." },
      { q: "Do you include shopping stops?", a: "No. We design private journeys around travel value, not commission-driven shopping stops." },
      { q: "How does pricing work?", a: "You choose a travel style first. Final pricing depends on dates, hotel level, room mix, guide needs, transport, and special experiences." },
    ],
    image: input.image,
  };
}

const journeyCovers = {
  firstChinaFamilyPrivateTour: {
    avif: "/journey-covers/first-china-family-private-tour-great-wall-jinshanling-1920.avif",
    webp: "/journey-covers/first-china-family-private-tour-great-wall-jinshanling-1920.webp",
    avifSet: "/journey-covers/first-china-family-private-tour-great-wall-jinshanling-960.avif 960w, /journey-covers/first-china-family-private-tour-great-wall-jinshanling-1400.avif 1400w, /journey-covers/first-china-family-private-tour-great-wall-jinshanling-1920.avif 1920w",
    webpSet: "/journey-covers/first-china-family-private-tour-great-wall-jinshanling-960.webp 960w, /journey-covers/first-china-family-private-tour-great-wall-jinshanling-1400.webp 1400w, /journey-covers/first-china-family-private-tour-great-wall-jinshanling-1920.webp 1920w",
    jpg: "/journey-covers/first-china-family-private-tour-great-wall-jinshanling.jpg",
    alt: "Great Wall of China under clear blue sky on a bright mountain ridge",
  },
  familyChinaBeijingXianGuilinShanghai: {
    avif: "/journey-covers/family-china-panda-chengdu-private-tour-1920.avif",
    webp: "/journey-covers/family-china-panda-chengdu-private-tour-1920.webp",
    avifSet: "/journey-covers/family-china-panda-chengdu-private-tour-960.avif 960w, /journey-covers/family-china-panda-chengdu-private-tour-1400.avif 1400w, /journey-covers/family-china-panda-chengdu-private-tour-1920.avif 1920w",
    webpSet: "/journey-covers/family-china-panda-chengdu-private-tour-960.webp 960w, /journey-covers/family-china-panda-chengdu-private-tour-1400.webp 1400w, /journey-covers/family-china-panda-chengdu-private-tour-1920.webp 1920w",
    jpg: "/journey-covers/family-china-panda-chengdu-private-tour.jpg",
    alt: "Real giant panda resting in bright green habitat for a family China journey",
  },
  chinaWithKidsBeijingChengduYangshuoShanghai: {
    avif: "/journey-covers/china-with-kids-yangshuo-karst-countryside-1920.avif",
    webp: "/journey-covers/china-with-kids-yangshuo-karst-countryside-1920.webp",
    avifSet: "/journey-covers/china-with-kids-yangshuo-karst-countryside-960.avif 960w, /journey-covers/china-with-kids-yangshuo-karst-countryside-1400.avif 1400w, /journey-covers/china-with-kids-yangshuo-karst-countryside-1920.avif 1920w",
    webpSet: "/journey-covers/china-with-kids-yangshuo-karst-countryside-960.webp 960w, /journey-covers/china-with-kids-yangshuo-karst-countryside-1400.webp 1400w, /journey-covers/china-with-kids-yangshuo-karst-countryside-1920.webp 1920w",
    jpg: "/journey-covers/china-with-kids-yangshuo-karst-countryside.jpg",
    alt: "Aerial view of Yangshuo karst mountains and countryside in Guangxi China",
  },
  goldenTriangleBeijingXianShanghai: {
    avif: "/journey-covers/golden-triangle-forbidden-city-beijing-1920.avif",
    webp: "/journey-covers/golden-triangle-forbidden-city-beijing-1920.webp",
    avifSet: "/journey-covers/golden-triangle-forbidden-city-beijing-960.avif 960w, /journey-covers/golden-triangle-forbidden-city-beijing-1400.avif 1400w, /journey-covers/golden-triangle-forbidden-city-beijing-1920.avif 1920w",
    webpSet: "/journey-covers/golden-triangle-forbidden-city-beijing-960.webp 960w, /journey-covers/golden-triangle-forbidden-city-beijing-1400.webp 1400w, /journey-covers/golden-triangle-forbidden-city-beijing-1920.webp 1920w",
    jpg: "/journey-covers/golden-triangle-forbidden-city-beijing.jpg",
    alt: "Forbidden City rooftops viewed from Jingshan Hill in Beijing",
  },
  grandChinaIconsPandasRiversSkyline: {
    avif: "/journey-covers/grand-china-li-river-guilin-karst-1920.avif",
    webp: "/journey-covers/grand-china-li-river-guilin-karst-1920.webp",
    avifSet: "/journey-covers/grand-china-li-river-guilin-karst-960.avif 960w, /journey-covers/grand-china-li-river-guilin-karst-1400.avif 1400w, /journey-covers/grand-china-li-river-guilin-karst-1920.avif 1920w",
    webpSet: "/journey-covers/grand-china-li-river-guilin-karst-960.webp 960w, /journey-covers/grand-china-li-river-guilin-karst-1400.webp 1400w, /journey-covers/grand-china-li-river-guilin-karst-1920.webp 1920w",
    jpg: "/journey-covers/grand-china-li-river-guilin-karst.jpg",
    alt: "Li River winding through dramatic Guilin karst mountains in China",
  },
  beijingXianZhangjiajiePrivateTour: {
    avif: "/journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road-1920.avif",
    webp: "/journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road-1920.webp",
    avifSet: "/journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road-960.avif 960w, /journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road-1400.avif 1400w, /journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road-1920.avif 1920w",
    webpSet: "/journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road-960.webp 960w, /journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road-1400.webp 1400w, /journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road-1920.webp 1920w",
    jpg: "/journey-covers/beijing-xian-zhangjiajie-tianmen-mountain-road.jpg",
    alt: "Tianmen Mountain road and cliffs in Zhangjiajie for a scenic private China tour",
  },
  beijingZhangjiajieGuilinShanghai: {
    avif: "/journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-1920.avif",
    webp: "/journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-1920.webp",
    avifSet: "/journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-960.avif 960w, /journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-1400.avif 1400w, /journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-1920.avif 1920w",
    webpSet: "/journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-960.webp 960w, /journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-1400.webp 1400w, /journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-1920.webp 1920w",
    jpg: "/journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park.jpg",
    alt: "Sandstone pillars of Zhangjiajie National Forest Park rising through mist",
  },
  shanghaiHangzhouHuangshanBeijing: {
    avif: "/journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-1920.avif",
    webp: "/journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-1920.webp",
    avifSet: "/journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-960.avif 960w, /journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-1400.avif 1400w, /journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-1920.avif 1920w",
    webpSet: "/journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-960.webp 960w, /journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-1400.webp 1400w, /journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-1920.webp 1920w",
    jpg: "/journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds.jpg",
    alt: "Huangshan granite peaks and pine trees above clouds in Anhui China",
  },
  yangtzeChengduClassicChina: {
    avif: "/journey-covers/yangtze-chengdu-classic-three-gorges-qutang-1920.avif",
    webp: "/journey-covers/yangtze-chengdu-classic-three-gorges-qutang-1920.webp",
    avifSet: "/journey-covers/yangtze-chengdu-classic-three-gorges-qutang-960.avif 960w, /journey-covers/yangtze-chengdu-classic-three-gorges-qutang-1400.avif 1400w, /journey-covers/yangtze-chengdu-classic-three-gorges-qutang-1920.avif 1920w",
    webpSet: "/journey-covers/yangtze-chengdu-classic-three-gorges-qutang-960.webp 960w, /journey-covers/yangtze-chengdu-classic-three-gorges-qutang-1400.webp 1400w, /journey-covers/yangtze-chengdu-classic-three-gorges-qutang-1920.webp 1920w",
    jpg: "/journey-covers/yangtze-chengdu-classic-three-gorges-qutang.jpg",
    alt: "Qutang Gorge cliffs along the Yangtze River in China",
  },
  chinaIconsLandscapesTwoWeeks: {
    avif: "/journey-covers/china-icons-landscapes-meili-snow-mountains-1920.avif",
    webp: "/journey-covers/china-icons-landscapes-meili-snow-mountains-1920.webp",
    avifSet: "/journey-covers/china-icons-landscapes-meili-snow-mountains-960.avif 960w, /journey-covers/china-icons-landscapes-meili-snow-mountains-1400.avif 1400w, /journey-covers/china-icons-landscapes-meili-snow-mountains-1920.avif 1920w",
    webpSet: "/journey-covers/china-icons-landscapes-meili-snow-mountains-960.webp 960w, /journey-covers/china-icons-landscapes-meili-snow-mountains-1400.webp 1400w, /journey-covers/china-icons-landscapes-meili-snow-mountains-1920.webp 1920w",
    jpg: "/journey-covers/china-icons-landscapes-meili-snow-mountains.jpg",
    alt: "Panoramic Meili Snow Mountains in Yunnan with dramatic alpine light",
  },
  pandaFamilyChengduLeshanChongqing: {
    avif: "/journey-covers/panda-family-leshan-giant-buddha-sichuan-1920.avif",
    webp: "/journey-covers/panda-family-leshan-giant-buddha-sichuan-1920.webp",
    avifSet: "/journey-covers/panda-family-leshan-giant-buddha-sichuan-960.avif 960w, /journey-covers/panda-family-leshan-giant-buddha-sichuan-1400.avif 1400w, /journey-covers/panda-family-leshan-giant-buddha-sichuan-1920.avif 1920w",
    webpSet: "/journey-covers/panda-family-leshan-giant-buddha-sichuan-960.webp 960w, /journey-covers/panda-family-leshan-giant-buddha-sichuan-1400.webp 1400w, /journey-covers/panda-family-leshan-giant-buddha-sichuan-1920.webp 1920w",
    jpg: "/journey-covers/panda-family-leshan-giant-buddha-sichuan.jpg",
    alt: "Leshan Giant Buddha carved into red cliffs in Sichuan China",
  },
  familySoftAdventureBeijingChengduGuilinShanghai: {
    avif: "/journey-covers/family-soft-adventure-longsheng-rice-terraces-1920.avif",
    webp: "/journey-covers/family-soft-adventure-longsheng-rice-terraces-1920.webp",
    avifSet: "/journey-covers/family-soft-adventure-longsheng-rice-terraces-960.avif 960w, /journey-covers/family-soft-adventure-longsheng-rice-terraces-1400.avif 1400w, /journey-covers/family-soft-adventure-longsheng-rice-terraces-1920.avif 1920w",
    webpSet: "/journey-covers/family-soft-adventure-longsheng-rice-terraces-960.webp 960w, /journey-covers/family-soft-adventure-longsheng-rice-terraces-1400.webp 1400w, /journey-covers/family-soft-adventure-longsheng-rice-terraces-1920.webp 1920w",
    jpg: "/journey-covers/family-soft-adventure-longsheng-rice-terraces.jpg",
    alt: "Longji rice terraces curving across green mountain slopes in Guangxi",
  },
  multiGenerationChinaBeijingXianChengduHangzhou: {
    avif: "/journey-covers/multi-generation-china-west-lake-hangzhou-1920.avif",
    webp: "/journey-covers/multi-generation-china-west-lake-hangzhou-1920.webp",
    avifSet: "/journey-covers/multi-generation-china-west-lake-hangzhou-960.avif 960w, /journey-covers/multi-generation-china-west-lake-hangzhou-1400.avif 1400w, /journey-covers/multi-generation-china-west-lake-hangzhou-1920.avif 1920w",
    webpSet: "/journey-covers/multi-generation-china-west-lake-hangzhou-960.webp 960w, /journey-covers/multi-generation-china-west-lake-hangzhou-1400.webp 1400w, /journey-covers/multi-generation-china-west-lake-hangzhou-1920.webp 1920w",
    jpg: "/journey-covers/multi-generation-china-west-lake-hangzhou.jpg",
    alt: "West Lake in Hangzhou with calm water and elegant lakeside scenery",
  },
  easyChinaChildrenShanghaiHangzhouGuilin: {
    avif: "/journey-covers/easy-china-children-shanghai-disneyland-castle-1920.avif",
    webp: "/journey-covers/easy-china-children-shanghai-disneyland-castle-1920.webp",
    avifSet: "/journey-covers/easy-china-children-shanghai-disneyland-castle-960.avif 960w, /journey-covers/easy-china-children-shanghai-disneyland-castle-1400.avif 1400w, /journey-covers/easy-china-children-shanghai-disneyland-castle-1920.avif 1920w",
    webpSet: "/journey-covers/easy-china-children-shanghai-disneyland-castle-960.webp 960w, /journey-covers/easy-china-children-shanghai-disneyland-castle-1400.webp 1400w, /journey-covers/easy-china-children-shanghai-disneyland-castle-1920.webp 1920w",
    jpg: "/journey-covers/easy-china-children-shanghai-disneyland-castle.jpg",
    alt: "Enchanted Storybook Castle at Shanghai Disneyland for a family China trip",
  },
  teenFriendlyChinaBeijingXianZhangjiajieShanghai: {
    avif: "/journey-covers/teen-friendly-china-zhangjiajie-glass-bridge-1920.avif",
    webp: "/journey-covers/teen-friendly-china-zhangjiajie-glass-bridge-1920.webp",
    avifSet: "/journey-covers/teen-friendly-china-zhangjiajie-glass-bridge-960.avif 960w, /journey-covers/teen-friendly-china-zhangjiajie-glass-bridge-1400.avif 1400w, /journey-covers/teen-friendly-china-zhangjiajie-glass-bridge-1920.avif 1920w",
    webpSet: "/journey-covers/teen-friendly-china-zhangjiajie-glass-bridge-960.webp 960w, /journey-covers/teen-friendly-china-zhangjiajie-glass-bridge-1400.webp 1400w, /journey-covers/teen-friendly-china-zhangjiajie-glass-bridge-1920.webp 1920w",
    jpg: "/journey-covers/teen-friendly-china-zhangjiajie-glass-bridge.jpg",
    alt: "Zhangjiajie Glass Bridge suspended above a deep canyon in Hunan China",
  },
  muslimFriendlyClassicBeijingXianShanghai: {
    avif: "/journey-covers/muslim-friendly-classic-xian-great-mosque-1920.avif",
    webp: "/journey-covers/muslim-friendly-classic-xian-great-mosque-1920.webp",
    avifSet: "/journey-covers/muslim-friendly-classic-xian-great-mosque-960.avif 960w, /journey-covers/muslim-friendly-classic-xian-great-mosque-1400.avif 1400w, /journey-covers/muslim-friendly-classic-xian-great-mosque-1920.avif 1920w",
    webpSet: "/journey-covers/muslim-friendly-classic-xian-great-mosque-960.webp 960w, /journey-covers/muslim-friendly-classic-xian-great-mosque-1400.webp 1400w, /journey-covers/muslim-friendly-classic-xian-great-mosque-1920.webp 1920w",
    jpg: "/journey-covers/muslim-friendly-classic-xian-great-mosque.jpg",
    alt: "Traditional courtyard architecture inside the Great Mosque of Xian",
  },
  muslimFriendlyChinaGuilin: {
    avif: "/journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill-1920.avif",
    webp: "/journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill-1920.webp",
    avifSet: "/journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill-960.avif 960w, /journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill-1400.avif 1400w, /journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill-1920.avif 1920w",
    webpSet: "/journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill-960.webp 960w, /journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill-1400.webp 1400w, /journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill-1920.webp 1920w",
    jpg: "/journey-covers/muslim-friendly-china-guilin-elephant-trunk-hill.jpg",
    alt: "Elephant Trunk Hill and river scenery in Guilin China",
  },
  halalAwareFamilyChinaBeijingXianChengduShanghai: {
    avif: "/journey-covers/halal-aware-family-china-chengdu-panda-base-1920.avif",
    webp: "/journey-covers/halal-aware-family-china-chengdu-panda-base-1920.webp",
    avifSet: "/journey-covers/halal-aware-family-china-chengdu-panda-base-960.avif 960w, /journey-covers/halal-aware-family-china-chengdu-panda-base-1400.avif 1400w, /journey-covers/halal-aware-family-china-chengdu-panda-base-1920.avif 1920w",
    webpSet: "/journey-covers/halal-aware-family-china-chengdu-panda-base-960.webp 960w, /journey-covers/halal-aware-family-china-chengdu-panda-base-1400.webp 1400w, /journey-covers/halal-aware-family-china-chengdu-panda-base-1920.webp 1920w",
    jpg: "/journey-covers/halal-aware-family-china-chengdu-panda-base.jpg",
    alt: "Giant panda at Chengdu Panda Base in Sichuan for a family China journey",
  },
  silkRoadMuslimHeritageXianLanzhouDunhuangZhangye: {
    avif: "/journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake-1920.avif",
    webp: "/journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake-1920.webp",
    avifSet: "/journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake-960.avif 960w, /journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake-1400.avif 1400w, /journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake-1920.avif 1920w",
    webpSet: "/journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake-960.webp 960w, /journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake-1400.webp 1400w, /journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake-1920.webp 1920w",
    jpg: "/journey-covers/silk-road-muslim-heritage-dunhuang-crescent-lake.jpg",
    alt: "Crescent Lake and golden dunes in Dunhuang on the Silk Road",
  },
  luxuryChinaCouplesShanghaiHangzhouHuangshan: {
    avif: "/journey-covers/luxury-china-couples-hangzhou-west-lake-sunset-1920.avif",
    webp: "/journey-covers/luxury-china-couples-hangzhou-west-lake-sunset-1920.webp",
    avifSet: "/journey-covers/luxury-china-couples-hangzhou-west-lake-sunset-960.avif 960w, /journey-covers/luxury-china-couples-hangzhou-west-lake-sunset-1400.avif 1400w, /journey-covers/luxury-china-couples-hangzhou-west-lake-sunset-1920.avif 1920w",
    webpSet: "/journey-covers/luxury-china-couples-hangzhou-west-lake-sunset-960.webp 960w, /journey-covers/luxury-china-couples-hangzhou-west-lake-sunset-1400.webp 1400w, /journey-covers/luxury-china-couples-hangzhou-west-lake-sunset-1920.webp 1920w",
    jpg: "/journey-covers/luxury-china-couples-hangzhou-west-lake-sunset.jpg",
    alt: "Warm sunset over West Lake in Hangzhou for a luxury couples journey",
  },
  yunnanSlowLuxuryDaliLijiangShangriLaMeili: {
    avif: "/journey-covers/yunnan-slow-luxury-lijiang-old-town-1920.avif",
    webp: "/journey-covers/yunnan-slow-luxury-lijiang-old-town-1920.webp",
    avifSet: "/journey-covers/yunnan-slow-luxury-lijiang-old-town-960.avif 960w, /journey-covers/yunnan-slow-luxury-lijiang-old-town-1400.avif 1400w, /journey-covers/yunnan-slow-luxury-lijiang-old-town-1920.avif 1920w",
    webpSet: "/journey-covers/yunnan-slow-luxury-lijiang-old-town-960.webp 960w, /journey-covers/yunnan-slow-luxury-lijiang-old-town-1400.webp 1400w, /journey-covers/yunnan-slow-luxury-lijiang-old-town-1920.webp 1920w",
    jpg: "/journey-covers/yunnan-slow-luxury-lijiang-old-town.jpg",
    alt: "Lijiang Old Town rooftops and canals in Yunnan China",
  },
  chinaHoneymoonShanghaiHangzhouGuilinYunnan: {
    avif: "/journey-covers/china-honeymoon-yulong-river-yangshuo-1920.avif",
    webp: "/journey-covers/china-honeymoon-yulong-river-yangshuo-1920.webp",
    avifSet: "/journey-covers/china-honeymoon-yulong-river-yangshuo-960.avif 960w, /journey-covers/china-honeymoon-yulong-river-yangshuo-1400.avif 1400w, /journey-covers/china-honeymoon-yulong-river-yangshuo-1920.avif 1920w",
    webpSet: "/journey-covers/china-honeymoon-yulong-river-yangshuo-960.webp 960w, /journey-covers/china-honeymoon-yulong-river-yangshuo-1400.webp 1400w, /journey-covers/china-honeymoon-yulong-river-yangshuo-1920.webp 1920w",
    jpg: "/journey-covers/china-honeymoon-yulong-river-yangshuo.jpg",
    alt: "Yulong River and limestone karst scenery in Yangshuo for a China honeymoon",
  },
  signatureHeritageBeijingHangzhouShanghaiZhangjiajie: {
    avif: "/journey-covers/signature-heritage-gubei-water-town-simatai-1920.avif",
    webp: "/journey-covers/signature-heritage-gubei-water-town-simatai-1920.webp",
    avifSet: "/journey-covers/signature-heritage-gubei-water-town-simatai-960.avif 960w, /journey-covers/signature-heritage-gubei-water-town-simatai-1400.avif 1400w, /journey-covers/signature-heritage-gubei-water-town-simatai-1920.avif 1920w",
    webpSet: "/journey-covers/signature-heritage-gubei-water-town-simatai-960.webp 960w, /journey-covers/signature-heritage-gubei-water-town-simatai-1400.webp 1400w, /journey-covers/signature-heritage-gubei-water-town-simatai-1920.webp 1920w",
    jpg: "/journey-covers/signature-heritage-gubei-water-town-simatai.jpg",
    alt: "Gubei Water Town viewed from Simatai Great Wall near Beijing",
  },
  zhangjiajieFenghuangPhotography: {
    avif: "/journey-covers/zhangjiajie-fenghuang-photography-old-town-1920.avif",
    webp: "/journey-covers/zhangjiajie-fenghuang-photography-old-town-1920.webp",
    avifSet: "/journey-covers/zhangjiajie-fenghuang-photography-old-town-960.avif 960w, /journey-covers/zhangjiajie-fenghuang-photography-old-town-1400.avif 1400w, /journey-covers/zhangjiajie-fenghuang-photography-old-town-1920.avif 1920w",
    webpSet: "/journey-covers/zhangjiajie-fenghuang-photography-old-town-960.webp 960w, /journey-covers/zhangjiajie-fenghuang-photography-old-town-1400.webp 1400w, /journey-covers/zhangjiajie-fenghuang-photography-old-town-1920.webp 1920w",
    jpg: "/journey-covers/zhangjiajie-fenghuang-photography-old-town.jpg",
    alt: "Fenghuang ancient town along the river in Hunan China",
  },
  guilinLongjiHuangshanLandscape: {
    avif: "/journey-covers/guilin-longji-huangshan-landscape-rice-terraces-1920.avif",
    webp: "/journey-covers/guilin-longji-huangshan-landscape-rice-terraces-1920.webp",
    avifSet: "/journey-covers/guilin-longji-huangshan-landscape-rice-terraces-960.avif 960w, /journey-covers/guilin-longji-huangshan-landscape-rice-terraces-1400.avif 1400w, /journey-covers/guilin-longji-huangshan-landscape-rice-terraces-1920.avif 1920w",
    webpSet: "/journey-covers/guilin-longji-huangshan-landscape-rice-terraces-960.webp 960w, /journey-covers/guilin-longji-huangshan-landscape-rice-terraces-1400.webp 1400w, /journey-covers/guilin-longji-huangshan-landscape-rice-terraces-1920.webp 1920w",
    jpg: "/journey-covers/guilin-longji-huangshan-landscape-rice-terraces.jpg",
    alt: "Longji Dragon Back rice terraces glowing across mountain slopes",
  },
  silkRoadDesertPhotographyXianZhangyeDunhuangTurpan: {
    avif: "/journey-covers/silk-road-desert-photography-zhangye-danxia-1920.avif",
    webp: "/journey-covers/silk-road-desert-photography-zhangye-danxia-1920.webp",
    avifSet: "/journey-covers/silk-road-desert-photography-zhangye-danxia-960.avif 960w, /journey-covers/silk-road-desert-photography-zhangye-danxia-1400.avif 1400w, /journey-covers/silk-road-desert-photography-zhangye-danxia-1920.avif 1920w",
    webpSet: "/journey-covers/silk-road-desert-photography-zhangye-danxia-960.webp 960w, /journey-covers/silk-road-desert-photography-zhangye-danxia-1400.webp 1400w, /journey-covers/silk-road-desert-photography-zhangye-danxia-1920.webp 1920w",
    jpg: "/journey-covers/silk-road-desert-photography-zhangye-danxia.jpg",
    alt: "Colorful hoodoos and rock formations at Zhangye Danxia in Gansu",
  },
  chengduChongqingFoodJourney: {
    avif: "/journey-covers/chengdu-chongqing-food-journey-hongya-cave-night-1920.avif",
    webp: "/journey-covers/chengdu-chongqing-food-journey-hongya-cave-night-1920.webp",
    avifSet: "/journey-covers/chengdu-chongqing-food-journey-hongya-cave-night-960.avif 960w, /journey-covers/chengdu-chongqing-food-journey-hongya-cave-night-1400.avif 1400w, /journey-covers/chengdu-chongqing-food-journey-hongya-cave-night-1920.avif 1920w",
    webpSet: "/journey-covers/chengdu-chongqing-food-journey-hongya-cave-night-960.webp 960w, /journey-covers/chengdu-chongqing-food-journey-hongya-cave-night-1400.webp 1400w, /journey-covers/chengdu-chongqing-food-journey-hongya-cave-night-1920.webp 1920w",
    jpg: "/journey-covers/chengdu-chongqing-food-journey-hongya-cave-night.jpg",
    alt: "Hongya Cave glowing at night above the riverside in Chongqing China",
  },
  shanghaiSuzhouHangzhouFoodDesign: {
    avif: "/journey-covers/shanghai-suzhou-hangzhou-lingering-garden-1920.avif",
    webp: "/journey-covers/shanghai-suzhou-hangzhou-lingering-garden-1920.webp",
    avifSet: "/journey-covers/shanghai-suzhou-hangzhou-lingering-garden-960.avif 960w, /journey-covers/shanghai-suzhou-hangzhou-lingering-garden-1400.avif 1400w, /journey-covers/shanghai-suzhou-hangzhou-lingering-garden-1920.avif 1920w",
    webpSet: "/journey-covers/shanghai-suzhou-hangzhou-lingering-garden-960.webp 960w, /journey-covers/shanghai-suzhou-hangzhou-lingering-garden-1400.webp 1400w, /journey-covers/shanghai-suzhou-hangzhou-lingering-garden-1920.webp 1920w",
    jpg: "/journey-covers/shanghai-suzhou-hangzhou-lingering-garden.jpg",
    alt: "Lingering Garden classical architecture in Suzhou China",
  },
  seniorFriendlyClassicChina: {
    avif: "/journey-covers/senior-friendly-classic-temple-of-heaven-beijing-1920.avif",
    webp: "/journey-covers/senior-friendly-classic-temple-of-heaven-beijing-1920.webp",
    avifSet: "/journey-covers/senior-friendly-classic-temple-of-heaven-beijing-960.avif 960w, /journey-covers/senior-friendly-classic-temple-of-heaven-beijing-1400.avif 1400w, /journey-covers/senior-friendly-classic-temple-of-heaven-beijing-1920.avif 1920w",
    webpSet: "/journey-covers/senior-friendly-classic-temple-of-heaven-beijing-960.webp 960w, /journey-covers/senior-friendly-classic-temple-of-heaven-beijing-1400.webp 1400w, /journey-covers/senior-friendly-classic-temple-of-heaven-beijing-1920.webp 1920w",
    jpg: "/journey-covers/senior-friendly-classic-temple-of-heaven-beijing.jpg",
    alt: "Temple of Heaven in Beijing under clear blue sky",
  },
  easyPaceChinaShanghaiHangzhouGuilinChengdu: {
    avif: "/journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake-1920.avif",
    webp: "/journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake-1920.webp",
    avifSet: "/journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake-960.avif 960w, /journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake-1400.avif 1400w, /journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake-1920.avif 1920w",
    webpSet: "/journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake-960.webp 960w, /journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake-1400.webp 1400w, /journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake-1920.webp 1920w",
    jpg: "/journey-covers/easy-pace-china-jiuzhaigou-five-flower-lake.jpg",
    alt: "Five Flower Lake in Jiuzhaigou with bright turquoise water and forest",
  },
};

const editorialVisuals = {
  plannerCta: {
    avif: "/editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline-1920.avif",
    webp: "/editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline-1920.webp",
    avifSet: "/editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline-960.avif 960w, /editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline-1400.avif 1400w, /editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline-1920.avif 1920w",
    webpSet: "/editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline-960.webp 960w, /editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline-1400.webp 1400w, /editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline-1920.webp 1920w",
    jpg: "/editorial/china-prime-dmc-plan-private-china-trip-shanghai-pudong-skyline.jpg",
    alt: "Shanghai Pudong skyline as a modern landmark for planning a private China trip",
  },
};

const tours: Tour[] = [
  makeTour({ title: "First China, beautifully paced", slug: "first-china-family-private-tour", days: 10, places: ["Beijing", "Xi'an", "Chengdu", "Shanghai"], fit: "Families / Couples / First-time visitors", pace: "Balanced, private, low-friction", audiences: ["First-time visitors", "Families", "Couples"], themes: ["Classic China", "Family friendly", "Culture"], image: journeyCovers.firstChinaFamilyPrivateTour, highlightImages: [visuals.greatWall, visuals.terracotta, visuals.panda], copy: "The essential China route, shaped around comfort: the Great Wall, imperial Beijing, the Terracotta Warriors, pandas, and a modern Shanghai finale without forcing every day to feel packed." }),
  makeTour({ title: "A Family China Journey With Pandas and River Light", slug: "family-china-beijing-xian-guilin-shanghai", days: 12, places: ["Beijing", "Xi'an", "Guilin", "Yangshuo", "Shanghai"], fit: "Families / Multi-generation", pace: "Balanced with child-friendly breathing room", audiences: ["Families", "Children", "Older parents"], themes: ["Family friendly", "Nature", "Classic China"], image: journeyCovers.familyChinaBeijingXianGuilinShanghai, highlightImages: [visuals.panda, visuals.liRiver, visuals.greatWall], copy: "A family-first route that mixes China icons with pandas, karst mountains, easy countryside time, and private support for children or grandparents." }),
  makeTour({ title: "China With Kids, Made Easy", slug: "china-with-kids-beijing-chengdu-yangshuo-shanghai", days: 11, places: ["Beijing", "Chengdu", "Yangshuo", "Shanghai"], fit: "Families with younger children", pace: "Easy, playful, private", audiences: ["Families", "Children", "First-time visitors"], themes: ["Family friendly", "Pandas", "Soft adventure"], image: journeyCovers.chinaWithKidsBeijingChengduYangshuoShanghai, highlightImages: [visuals.panda, visuals.yangshuo, visuals.disney], copy: "A softer China itinerary for families who want pandas, gentle nature, hands-on moments, and fewer hard hotel changes." }),
  makeTour({ title: "The Golden Triangle of China", slug: "golden-triangle-beijing-xian-shanghai", days: 8, places: ["Beijing", "Xi'an", "Shanghai"], fit: "First-time visitors / Couples", pace: "Efficient and polished", audiences: ["First-time visitors", "Couples", "Senior-friendly"], themes: ["Classic China", "Culture", "City icons"], image: journeyCovers.goldenTriangleBeijingXianShanghai, highlightImages: [visuals.forbiddenCity, visuals.terracotta, visuals.bund], copy: "A clean, iconic route for travelers who want the Great Wall, the Terracotta Warriors, and Shanghai in one private journey." }),
  makeTour({ title: "Grand China: Icons, Pandas, Rivers and Skyline", slug: "grand-china-icons-pandas-rivers-skyline", days: 14, places: ["Beijing", "Xi'an", "Chengdu", "Guilin", "Yangshuo", "Shanghai"], fit: "Families / First-timers / Couples", pace: "Rich but carefully spaced", audiences: ["First-time visitors", "Families", "Couples"], themes: ["Classic China", "Nature", "Pandas"], image: journeyCovers.grandChinaIconsPandasRiversSkyline, highlightImages: [visuals.greatWall, visuals.panda, visuals.liRiver], copy: "A fuller first China journey with the icons, panda country, river landscapes, and a polished city finale." }),
  makeTour({ title: "Beijing, Xi'an and Zhangjiajie for First-Timers", slug: "beijing-xian-zhangjiajie-private-tour", days: 9, places: ["Beijing", "Xi'an", "Zhangjiajie"], fit: "First-timers / Photography", pace: "Scenic, active-light", audiences: ["First-time visitors", "Photographers", "Couples"], themes: ["Classic China", "Photography", "Nature"], image: journeyCovers.beijingXianZhangjiajiePrivateTour, highlightImages: [visuals.greatWall, visuals.terracotta, visuals.tianmenMountain], copy: "A compact route that pairs China history with the surreal sandstone peaks of Zhangjiajie." }),
  makeTour({ title: "China Icons and Avatar Peaks", slug: "beijing-zhangjiajie-guilin-shanghai", days: 12, places: ["Beijing", "Zhangjiajie", "Guilin", "Yangshuo", "Shanghai"], fit: "Couples / Families / Photographers", pace: "Scenic and balanced", audiences: ["Families", "Photographers", "Couples"], themes: ["Nature", "Classic China", "Soft adventure"], image: journeyCovers.beijingZhangjiajieGuilinShanghai, highlightImages: [visuals.zhangjiajieForest, visuals.liRiver, visuals.bund], copy: "A high-impact visual route for travelers who want China to feel cinematic from mountains to river country to skyline." }),
  makeTour({ title: "Shanghai, Hangzhou, Huangshan and Beijing", slug: "shanghai-hangzhou-huangshan-beijing", days: 10, places: ["Shanghai", "Hangzhou", "Huangshan", "Beijing"], fit: "Couples / Culture / Photography", pace: "Elegant, scenic, polished", audiences: ["Couples", "Photographers", "Luxury travelers"], themes: ["Luxury pace", "Photography", "Culture"], image: journeyCovers.shanghaiHangzhouHuangshanBeijing, highlightImages: [visuals.bund, visuals.westLake, visuals.huangshan], copy: "A sophisticated east-China route with skyline, gardens, West Lake, ancient villages, mountain views, and a Beijing finale." }),
  makeTour({ title: "Yangtze, Chengdu and Classic China", slug: "yangtze-chengdu-classic-china", days: 13, places: ["Beijing", "Xi'an", "Chengdu", "Yangtze River", "Shanghai"], fit: "Couples / Senior-friendly / Slow travel", pace: "Comfortable and scenic", audiences: ["Senior-friendly", "Couples", "First-time visitors"], themes: ["Classic China", "River journey", "Slow travel"], image: journeyCovers.yangtzeChengduClassicChina, highlightImages: [visuals.greatWall, visuals.panda, visuals.yangtzeGorge], copy: "A slower route that blends China's classic cities with pandas and the dramatic gorges of the Yangtze." }),
  makeTour({ title: "China Icons and Landscapes in Two Weeks", slug: "china-icons-landscapes-two-weeks", days: 15, places: ["Beijing", "Xi'an", "Zhangjiajie", "Guilin", "Shanghai"], fit: "First-timers / Nature lovers", pace: "Immersive and varied", audiences: ["First-time visitors", "Nature lovers", "Photographers"], themes: ["Classic China", "Nature", "Photography"], image: journeyCovers.chinaIconsLandscapesTwoWeeks, highlightImages: [visuals.greatWall, visuals.zhangjiajieForest, visuals.liRiver], copy: "A two-week private journey for travelers who want the recognizable icons and the landscapes that make China feel immense." }),
  makeTour({ title: "Panda Country and Sichuan Family Time", slug: "panda-family-chengdu-leshan-chongqing", days: 8, places: ["Chengdu", "Leshan", "Dujiangyan", "Chongqing"], fit: "Families / Food lovers", pace: "Warm, flavorful, flexible", audiences: ["Families", "Children", "Food lovers"], themes: ["Pandas", "Food", "Family friendly"], image: journeyCovers.pandaFamilyChengduLeshanChongqing, highlightImages: [visuals.panda, visuals.hongya, visuals.huanglong], copy: "A playful Sichuan route with pandas, teahouses, giant Buddha heritage, local food, and Chongqing night views." }),
  makeTour({ title: "Family Soft Adventure Across China", slug: "family-soft-adventure-beijing-chengdu-guilin-shanghai", days: 10, places: ["Beijing", "Chengdu", "Guilin", "Shanghai"], fit: "Families / First-timers", pace: "Balanced with soft adventure", audiences: ["Families", "Children", "First-time visitors"], themes: ["Family friendly", "Soft adventure", "Nature"], image: journeyCovers.familySoftAdventureBeijingChengduGuilinShanghai, highlightImages: [visuals.greatWall, visuals.panda, visuals.longji], copy: "A family route that keeps the icons but adds pandas, countryside, food, and easy movement without turning the trip into endurance travel." }),
  makeTour({ title: "Multi-Generation China at a Comfortable Pace", slug: "multi-generation-china-beijing-xian-chengdu-hangzhou", days: 12, places: ["Beijing", "Xi'an", "Chengdu", "Hangzhou"], fit: "Multi-generation / Senior-friendly", pace: "Comfortable, private, thoughtful", audiences: ["Senior-friendly", "Families", "Older parents"], themes: ["Family friendly", "Senior-friendly", "Culture"], image: journeyCovers.multiGenerationChinaBeijingXianChengduHangzhou, highlightImages: [visuals.greatWall, visuals.terracotta, visuals.westLake], copy: "A private route for families traveling with older parents, balancing famous sights with calmer hotels, gardens, tea, and fewer rushed starts." }),
  makeTour({ title: "Easy China With Children", slug: "easy-china-children-shanghai-hangzhou-guilin", days: 9, places: ["Shanghai", "Hangzhou", "Guilin", "Yangshuo"], fit: "Families / Easy pace", pace: "Gentle, scenic, low-friction", audiences: ["Families", "Children"], themes: ["Family friendly", "Easy pace", "Nature"], image: journeyCovers.easyChinaChildrenShanghaiHangzhouGuilin, highlightImages: [visuals.disney, visuals.westLake, visuals.yangshuo], copy: "An easier first route for families who want China to feel welcoming through skyline, water, gardens, food, and countryside." }),
  makeTour({ title: "Teen-Friendly China With Big Views", slug: "teen-friendly-china-beijing-xian-zhangjiajie-shanghai", days: 11, places: ["Beijing", "Xi'an", "Zhangjiajie", "Shanghai"], fit: "Families with teens", pace: "Active-light and visual", audiences: ["Families", "Teenagers", "Photographers"], themes: ["Soft adventure", "Family friendly", "Classic China"], image: journeyCovers.teenFriendlyChinaBeijingXianZhangjiajieShanghai, highlightImages: [visuals.greatWall, visuals.tianmenMountain, visuals.bund], copy: "A visual, high-energy route for families with teens: history, mountain viewpoints, glass walkways, and a modern skyline ending." }),
  makeTour({ title: "Muslim-Friendly Classic China", slug: "muslim-friendly-classic-beijing-xian-shanghai", days: 8, places: ["Beijing", "Xi'an", "Shanghai"], fit: "Muslim families / First-timers", pace: "Prayer-aware, food-aware, private", audiences: ["Muslim travelers", "Families", "First-time visitors"], themes: ["Muslim-friendly", "Classic China", "Culture"], image: journeyCovers.muslimFriendlyClassicBeijingXianShanghai, highlightImages: [visuals.greatWall, visuals.muslimQuarter, visuals.bund], copy: "A halal-aware version of China's classic triangle, with researched dining, private transport, and realistic pacing." }),
  makeTour({ title: "Muslim-Friendly China With Guilin", slug: "muslim-friendly-china-guilin", days: 10, places: ["Beijing", "Xi'an", "Guilin", "Shanghai"], fit: "Muslim families / Nature", pace: "Private, food-aware, scenic", audiences: ["Muslim travelers", "Families", "Nature lovers"], themes: ["Muslim-friendly", "Nature", "Classic China"], image: journeyCovers.muslimFriendlyChinaGuilin, highlightImages: [visuals.muslimQuarter, visuals.liRiver, visuals.greatWall], copy: "A Muslim-friendly private route that adds Guilin's river landscapes to China's classic cultural spine." }),
  makeTour({ title: "Halal-Aware Family China", slug: "halal-aware-family-china-beijing-xian-chengdu-shanghai", days: 12, places: ["Beijing", "Xi'an", "Chengdu", "Shanghai"], fit: "Muslim families / Multi-generation", pace: "Private and comfort-aware", audiences: ["Muslim travelers", "Families", "Older parents"], themes: ["Muslim-friendly", "Family friendly", "Pandas"], image: journeyCovers.halalAwareFamilyChinaBeijingXianChengduShanghai, highlightImages: [visuals.greatWall, visuals.muslimQuarter, visuals.panda], copy: "A family-friendly China route with halal-aware planning, pandas, culture, and practical private logistics." }),
  makeTour({ title: "Silk Road Muslim Heritage Journey", slug: "silk-road-muslim-heritage-xian-lanzhou-dunhuang-zhangye", days: 9, places: ["Xi'an", "Lanzhou", "Zhangye", "Dunhuang"], fit: "Muslim travelers / Culture / Photography", pace: "Historic and scenic", audiences: ["Muslim travelers", "Culture lovers", "Photographers"], themes: ["Muslim-friendly", "Silk Road", "Photography"], image: journeyCovers.silkRoadMuslimHeritageXianLanzhouDunhuangZhangye, highlightImages: [visuals.muslimQuarter, visuals.zhangye, visuals.crescentLake], copy: "A westward route through old trade corridors, desert light, Buddhist caves, and Muslim heritage connections." }),
  makeTour({ title: "Luxury China for Couples", slug: "luxury-china-couples-shanghai-hangzhou-huangshan", days: 10, places: ["Shanghai", "Hangzhou", "Huangshan"], fit: "Couples / Luxury", pace: "Slow, design-led, scenic", audiences: ["Couples", "Luxury travelers"], themes: ["Luxury pace", "Honeymoon", "Photography"], image: journeyCovers.luxuryChinaCouplesShanghaiHangzhouHuangshan, highlightImages: [visuals.bund, visuals.westLake, visuals.huangshan], copy: "A refined route for couples who want skyline, gardens, mountain atmosphere, private pacing, and space for excellent hotels." }),
  makeTour({ title: "Yunnan Slow Luxury", slug: "yunnan-slow-luxury-dali-lijiang-shangri-la-meili", days: 12, places: ["Dali", "Lijiang", "Shangri-La", "Meili Snow Mountain"], fit: "Luxury / Couples / Scenic roads", pace: "Slow, scenic, boutique-style", audiences: ["Luxury travelers", "Couples", "Culture lovers"], themes: ["Luxury pace", "Nature", "Culture"], image: journeyCovers.yunnanSlowLuxuryDaliLijiangShangriLaMeili, highlightImages: [visuals.dali, visuals.songzanlin, visuals.meili], copy: "A spacious Yunnan journey through old towns, Tibetan culture, scenic roads, and mountain light." }),
  makeTour({ title: "China Honeymoon: Skyline, Lake, Karst and Highlands", slug: "china-honeymoon-shanghai-hangzhou-guilin-yunnan", days: 13, places: ["Shanghai", "Hangzhou", "Guilin", "Yangshuo", "Yunnan"], fit: "Honeymoon / Couples", pace: "Romantic, scenic, unhurried", audiences: ["Couples", "Luxury travelers"], themes: ["Honeymoon", "Luxury pace", "Nature"], image: journeyCovers.chinaHoneymoonShanghaiHangzhouGuilinYunnan, highlightImages: [visuals.bund, visuals.westLake, visuals.yangshuo], copy: "A romantic route built around contrast: city lights, lake calm, river landscapes, and Yunnan highlands." }),
  makeTour({ title: "Signature Heritage China", slug: "signature-heritage-beijing-hangzhou-shanghai-zhangjiajie", days: 14, places: ["Beijing", "Hangzhou", "Shanghai", "Zhangjiajie"], fit: "Luxury / Culture / Nature", pace: "Polished and spacious", audiences: ["Luxury travelers", "Couples", "Families"], themes: ["Luxury pace", "Culture", "Nature"], image: journeyCovers.signatureHeritageBeijingHangzhouShanghaiZhangjiajie, highlightImages: [visuals.gubei, visuals.westLake, visuals.zhangjiajieForest], copy: "A premium heritage-and-landscape journey with private timing, strong hotels, slower days, and high-impact scenery." }),
  makeTour({ title: "Zhangjiajie and Fenghuang Photography Journey", slug: "zhangjiajie-fenghuang-photography", days: 9, places: ["Zhangjiajie", "Tianmen Mountain", "Fenghuang"], fit: "Photography / Nature", pace: "Image-led with early starts", audiences: ["Photographers", "Couples", "Nature lovers"], themes: ["Photography", "Nature", "Soft adventure"], image: journeyCovers.zhangjiajieFenghuangPhotography, highlightImages: [visuals.zhangjiajieForest, visuals.tianmenMountain, visuals.gubei], copy: "A focused visual journey through Zhangjiajie's peaks, cliff roads, and the old-town atmosphere of Fenghuang." }),
  makeTour({ title: "Guilin, Longji and Huangshan Landscape Journey", slug: "guilin-longji-huangshan-landscape", days: 11, places: ["Guilin", "Longji", "Yangshuo", "Huangshan"], fit: "Photography / Nature", pace: "Scenic, sunrise-aware", audiences: ["Photographers", "Nature lovers", "Couples"], themes: ["Photography", "Nature", "Slow travel"], image: journeyCovers.guilinLongjiHuangshanLandscape, highlightImages: [visuals.liRiver, visuals.longji, visuals.huangshan], copy: "A landscape-first China route connecting karst rivers, rice terraces, villages, and Huangshan mountain light." }),
  makeTour({ title: "Silk Road Desert Photography", slug: "silk-road-desert-photography-xian-zhangye-dunhuang-turpan", days: 12, places: ["Xi'an", "Zhangye", "Dunhuang", "Turpan"], fit: "Photography / Adventure", pace: "Big landscapes, carefully spaced", audiences: ["Photographers", "Adventure travelers", "Culture lovers"], themes: ["Photography", "Silk Road", "Adventure"], image: journeyCovers.silkRoadDesertPhotographyXianZhangyeDunhuangTurpan, highlightImages: [visuals.zhangye, visuals.crescentLake, visuals.shapotou], copy: "A desert-light journey through frontier cities, rainbow mountains, dunes, caves, and Silk Road stories." }),
  makeTour({ title: "Chengdu and Chongqing Food Journey", slug: "chengdu-chongqing-food-journey", days: 7, places: ["Chengdu", "Leshan", "Chongqing"], fit: "Food lovers / Couples", pace: "Flavorful and flexible", audiences: ["Food lovers", "Couples", "Families"], themes: ["Food", "City life", "Pandas"], image: journeyCovers.chengduChongqingFoodJourney, highlightImages: [visuals.foodStreet, visuals.panda, visuals.hongya], copy: "A food-led route through teahouses, Sichuan flavors, pandas, river-city night views, and private local guidance." }),
  makeTour({ title: "Shanghai, Suzhou and Hangzhou Food and Design", slug: "shanghai-suzhou-hangzhou-food-design", days: 9, places: ["Shanghai", "Suzhou", "Hangzhou"], fit: "Food / Design / Couples", pace: "Polished and urban-soft", audiences: ["Couples", "Food lovers", "Luxury travelers"], themes: ["Food", "Design", "Luxury pace"], image: journeyCovers.shanghaiSuzhouHangzhouFoodDesign, highlightImages: [visuals.bund, visuals.xidi, visuals.westLake], copy: "A refined lower-Yangtze route through skyline, gardens, tea, design neighborhoods, and graceful dining." }),
  makeTour({ title: "Senior-Friendly Classic China", slug: "senior-friendly-classic-china", days: 8, places: ["Beijing", "Xi'an", "Shanghai"], fit: "Senior-friendly / First-time visitors", pace: "Easy, private, low-stress", audiences: ["Senior-friendly", "First-time visitors", "Couples"], themes: ["Senior-friendly", "Classic China", "Easy pace"], image: journeyCovers.seniorFriendlyClassicChina, highlightImages: [visuals.templeOfHeaven, visuals.terracotta, visuals.bund], copy: "A classic China route redesigned around comfortable starts, private transfers, fewer hard walking blocks, and clear guide support." }),
  makeTour({ title: "Easy-Pace China: Cities, Gardens and Pandas", slug: "easy-pace-china-shanghai-hangzhou-guilin-chengdu", days: 10, places: ["Shanghai", "Hangzhou", "Guilin", "Chengdu"], fit: "Easy pace / Families / Senior-friendly", pace: "Gentle, scenic, private", audiences: ["Senior-friendly", "Families", "Couples"], themes: ["Easy pace", "Nature", "Pandas"], image: journeyCovers.easyPaceChinaShanghaiHangzhouGuilinChengdu, highlightImages: [visuals.westLake, visuals.liRiver, visuals.panda], copy: "A softer private route that avoids hard intensity while still giving travelers skyline, gardens, river scenery, and pandas." }),
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

function getLocationState(): LocationState {
  return {
    page: getPageFromPath(window.location.pathname),
    pathname: window.location.pathname,
    search: window.location.search,
  };
}

function useLocationState(): LocationState {
  const [locationState, setLocationState] = useState<LocationState>(() => getLocationState());

  useEffect(() => {
    const onPopState = () => setLocationState(getLocationState());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return locationState;
}

function navigatePath(path: string) {
  if (`${window.location.pathname}${window.location.search}` !== path) {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigateTo(page: PageKey) {
  navigatePath(routes[page]);
}

function Picture({ image, className, loading = "lazy" }: { image: ImageAsset; className?: string; loading?: "lazy" | "eager" }) {
  return (
    <picture className={className}>
      {image.avif ? <source srcSet={image.avifSet ?? image.avif} sizes="(max-width: 680px) 100vw, (max-width: 1180px) 92vw, 1440px" type="image/avif" /> : null}
      {image.webp ? <source srcSet={image.webpSet ?? image.webp} sizes="(max-width: 680px) 100vw, (max-width: 1180px) 92vw, 1440px" type="image/webp" /> : null}
      <img src={image.jpg} alt={image.alt} loading={loading} decoding="async" fetchPriority={loading === "eager" ? "high" : "auto"} />
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
        image={visuals.liRiver}
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
        image={visuals.jiuzhaigou}
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

function ToursPage({ pathname }: { pathname: string }) {
  const selectedSlug = pathname.replace(`${routes.tours}/`, "");
  const selectedTour = selectedSlug && selectedSlug !== routes.tours ? tours.find((tour) => tour.slug === selectedSlug) : undefined;

  if (selectedTour) {
    return <TourDetailPage tour={selectedTour} />;
  }

  return (
    <main id="top">
      <PageHero
        eyebrow="Private China tours"
        title="Begin with an idea. We will make it feel like your trip."
        copy="Every route below is a starting point, not a package. We adjust pace, hotels, food needs, guides, transport, and daily rhythm around the people who are actually traveling."
        image={visuals.huangshan}
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
      <TripExplorer />
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

function ContactPage({ search }: { search: string }) {
  const params = new URLSearchParams(search);
  const selectedTour = tours.find((tour) => tour.slug === params.get("journey"));
  const selectedStyle = travelStyles.find((style) => style.id === params.get("style"));
  const travelStyleChoices = ["First-time China", "Family trip", "Luxury pace", "Muslim-friendly", "Food journey", "Photography", "Soft adventure", "Senior-friendly"];
  const briefTemplates = [
    "We are visiting China for the first time and want the icons without feeling rushed.",
    "We are traveling with children or older parents and need a comfortable pace.",
    "We care most about food, culture, local life, and a route that feels personal.",
    "We need halal-aware planning, private transport, and dining confidence.",
  ];
  const selectedBrief = selectedTour && selectedStyle
    ? `Hi China Prime DMC,\n\nI am interested in the ${selectedStyle.name} version of this journey.\n\nJourney: ${selectedTour.title}\nRoute: ${selectedTour.places}\nSelected Travel Style: ${selectedStyle.name}\nBudget Guide: ${selectedStyle.price}\n\nApproximate travel dates:\nNumber of travelers:\nAges of children or older travelers:\nHotel preference:\nFood requirements:\nPreferred pace:\nQuestions:\n`
    : "";

  return (
    <main id="top">
      <PageHero
        eyebrow="Trip planner"
        title="Tell us the trip you are hoping for. We will make it easier to see."
        copy="You do not need a perfect itinerary yet. Share your dates, travelers, comfort level, and a few dreams. We will turn that into a first private China route direction."
        image={visuals.greatWall}
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
          {selectedTour && selectedStyle ? (
            <div className="selected-brief-card">
              <span>You selected</span>
              <strong>{selectedTour.title}</strong>
              <p>{selectedStyle.name} / {selectedStyle.price}</p>
            </div>
          ) : null}
          <div className="contact-visual-mosaic" aria-label="Private China trip planning scenes">
            <Picture image={visuals.westLake} />
            <Picture image={visuals.panda} />
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
              {travelStyleChoices.map((style) => (
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
              defaultValue={selectedBrief}
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

function TripExplorer() {
  const [activeTheme, setActiveTheme] = useState("All");
  const [activeAudience, setActiveAudience] = useState("All");
  const [activeDuration, setActiveDuration] = useState("All");
  const themeOptions = ["All", "Classic China", "Family friendly", "Muslim-friendly", "Luxury pace", "Nature", "Photography", "Food", "Senior-friendly"];
  const audienceOptions = ["All", "First-time visitors", "Families", "Couples", "Muslim travelers", "Senior-friendly", "Luxury travelers", "Photographers"];
  const durationOptions = ["All", "7-9 Days", "10-12 Days", "13+ Days"];
  const filteredTours = tours.filter((tour) => {
    const dayCount = Number.parseInt(tour.days, 10);
    const durationMatch = activeDuration === "All"
      || (activeDuration === "7-9 Days" && dayCount <= 9)
      || (activeDuration === "10-12 Days" && dayCount >= 10 && dayCount <= 12)
      || (activeDuration === "13+ Days" && dayCount >= 13);
    return (activeTheme === "All" || tour.themes.includes(activeTheme))
      && (activeAudience === "All" || tour.audiences.includes(activeAudience))
      && durationMatch;
  });

  return (
    <section className="trip-explorer" aria-labelledby="trip-explorer-title">
      <div className="section-heading narrow">
        <p className="eyebrow dark">30 private journey ideas</p>
        <h2 id="trip-explorer-title">Filter by the way you want China to feel.</h2>
        <p>These routes are original China Prime journey frameworks inspired by proven inbound travel logic from leading luxury travel brands, then rewritten around private pacing, comfort, and conversion-ready detail.</p>
      </div>
      <div className="trip-filter-panel" aria-label="Trip filters">
        <FilterGroup label="Theme" options={themeOptions} value={activeTheme} onChange={setActiveTheme} />
        <FilterGroup label="Traveler" options={audienceOptions} value={activeAudience} onChange={setActiveAudience} />
        <FilterGroup label="Length" options={durationOptions} value={activeDuration} onChange={setActiveDuration} />
      </div>
      <div className="trip-result-count">{filteredTours.length} journey ideas match your filters</div>
      <div className="tour-grid tour-grid-expanded">
        {filteredTours.map((tour) => (
          <article className="tour-card trip-card" key={tour.slug}>
            <button className="trip-card-link" type="button" onClick={() => navigatePath(`${routes.tours}/${tour.slug}`)} aria-label={`View ${tour.title}`} />
            <Picture image={tour.image} className="tour-media" />
            <div className="tour-body">
              <div className="tour-meta">
                <span>{tour.days}</span>
                <span>{tour.priceFrom}</span>
              </div>
              <h3>{tour.title}</h3>
              <p>{tour.copy}</p>
              <div className="info-strip slim"><span>Route</span><strong>{tour.places}</strong></div>
              <div className="trip-badges">
                {[...tour.audiences.slice(0, 2), ...tour.themes.slice(0, 2)].map((item) => <span key={item}>{item}</span>)}
              </div>
              <button className="text-link trip-text-button" type="button" onClick={() => navigatePath(`${routes.tours}/${tour.slug}`)}>View journey details</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FilterGroup({ label, options, value, onChange }: { label: string; options: string[]; value: string; onChange: (value: string) => void }) {
  return (
    <div className="filter-group">
      <span>{label}</span>
      <div className="filter-options">
        {options.map((option) => (
          <button className={option === value ? "is-selected" : undefined} type="button" key={option} onClick={() => onChange(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function TourDetailPage({ tour }: { tour: Tour }) {
  const related = tours.filter((candidate) => candidate.slug !== tour.slug && candidate.themes.some((theme) => tour.themes.includes(theme))).slice(0, 3);

  return (
    <main id="top">
      <section className="tour-detail-hero" aria-labelledby="tour-detail-title">
        <Picture image={tour.image} className="page-hero-media" loading="eager" />
        <div className="page-hero-overlay" />
        <div className="tour-detail-hero-copy">
          <button className="back-link" type="button" onClick={() => navigateTo("tours")}>Back to journeys</button>
          <p className="eyebrow">{tour.fit}</p>
          <h1 id="tour-detail-title">{tour.title}</h1>
          <p>{tour.heroPromise}</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => navigatePath(contactPathForTour(tour, travelStyles[1]))}>Design the Premium version</button>
            <a className="button button-ghost" href="#travel-style">Compare travel styles</a>
          </div>
        </div>
      </section>

      <section className="quick-facts" aria-label="Journey quick facts">
        {[
          ["Length", `${tour.days} / ${tour.nights}`],
          ["Route", tour.places],
          ["Pace", tour.pace],
          ["Best time", tour.bestTime],
          ["Transport", tour.transport],
          ["Budget guide", tour.priceFrom],
        ].map(([label, value]) => (
          <div className="quick-fact" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="journey-reasons" aria-labelledby="journey-reasons-title">
        <p className="eyebrow dark">Why this journey works</p>
        <h2 id="journey-reasons-title">The route gives you contrast without making China feel exhausting.</h2>
        <div className="reason-grid">
          {tour.coreReasons.map((reason) => <article key={reason}><strong>{reason}</strong><p>{tour.copy}</p></article>)}
        </div>
      </section>

      <section className="visual-highlights" aria-labelledby="visual-highlights-title">
        <div className="section-heading narrow">
          <p className="eyebrow dark">Moments that carry the trip</p>
          <h2 id="visual-highlights-title">Highlights are designed as memories, not checklist items.</h2>
        </div>
        <div className="highlight-grid">
          {tour.highlights.map((highlight) => (
            <article className="highlight-card" key={highlight.title}>
              <Picture image={highlight.image} className="highlight-media" />
              <div>
                <h3>{highlight.title}</h3>
                <p>{highlight.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="day-plan" aria-labelledby="day-plan-title">
        <div className="section-heading narrow">
          <p className="eyebrow dark">Day by day</p>
          <h2 id="day-plan-title">A clear rhythm, with one highlight anchoring each stop.</h2>
        </div>
        <div className="day-plan-list">
          {tour.daysPlan.map((day) => (
            <article className="day-card" key={`${day.day}-${day.place}`}>
              <span>{day.day}</span>
              <h3>{day.place}</h3>
              <strong>Highlight: {day.highlight}</strong>
              <p><b>Morning:</b> {day.morning}</p>
              <p><b>Afternoon:</b> {day.afternoon}</p>
              <p><b>Evening:</b> {day.evening}</p>
            </article>
          ))}
        </div>
      </section>

      <TravelStyleSelector tour={tour} />

      <section className="journey-practical" aria-labelledby="journey-practical-title">
        <p className="eyebrow dark">Comfort and clarity</p>
        <h2 id="journey-practical-title">Know what is handled before you ask for a quote.</h2>
        <div className="practical-grid">
          <article><h3>Included</h3>{tour.includes.map((item) => <p key={item}>{item}</p>)}</article>
          <article><h3>Not included</h3>{tour.excludes.map((item) => <p key={item}>{item}</p>)}</article>
          <article><h3>Comfort notes</h3>{tour.comfortNotes.map((item) => <p key={item}>{item}</p>)}</article>
        </div>
      </section>

      <section className="faq-section" aria-labelledby="faq-title">
        <p className="eyebrow dark">Before you decide</p>
        <h2 id="faq-title">Questions travelers usually ask before China feels possible.</h2>
        <div className="faq-grid">
          {tour.faq.map((item) => <article key={item.q}><strong>{item.q}</strong><p>{item.a}</p></article>)}
        </div>
      </section>

      {related.length ? (
        <section className="related-journeys" aria-labelledby="related-title">
          <div className="section-heading narrow">
            <p className="eyebrow dark">Related journeys</p>
            <h2 id="related-title">Similar routes worth comparing.</h2>
          </div>
          <div className="tour-grid">
            {related.map((item) => (
              <article className="tour-card trip-card" key={item.slug}>
                <button className="trip-card-link" type="button" onClick={() => navigatePath(`${routes.tours}/${item.slug}`)} aria-label={`View ${item.title}`} />
                <Picture image={item.image} className="tour-media" />
                <div className="tour-body">
                  <div className="tour-meta"><span>{item.days}</span><span>{item.priceFrom}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}
      <PlannerSection />
    </main>
  );
}

function TravelStyleSelector({ tour }: { tour: Tour }) {
  return (
    <section className="travel-style-selector" id="travel-style" aria-labelledby="travel-style-title">
      <div className="section-heading narrow">
        <p className="eyebrow dark">Choose your travel style</p>
        <h2 id="travel-style-title">Select the level of service before you ask for a route.</h2>
        <p>Guests are not choosing cheap, medium, and expensive. They are choosing how polished, flexible, and personal the journey should feel.</p>
      </div>
      <div className="style-grid">
        {travelStyles.map((style) => (
          <article className={`style-card ${style.id === "premium" ? "is-featured" : ""}`} key={style.id}>
            {style.id === "premium" ? <span className="style-ribbon">Most requested</span> : null}
            <h3>{style.name}</h3>
            <strong>{style.price}</strong>
            <p>{style.promise}</p>
            <dl>
              <div><dt>Hotel style</dt><dd>{style.hotel}</dd></div>
              <div><dt>Guide & driver</dt><dd>{style.guide}</dd></div>
              <div><dt>Dining</dt><dd>{style.dining}</dd></div>
              <div><dt>Pace</dt><dd>{style.pace}</dd></div>
              <div><dt>Special access</dt><dd>{style.access}</dd></div>
            </dl>
            <button className="button button-primary" type="button" onClick={() => navigatePath(contactPathForTour(tour, style))}>Design this style</button>
          </article>
        ))}
      </div>
    </section>
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
      <Picture image={editorialVisuals.plannerCta} className="planner-media" />
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
  const locationState = useLocationState();
  const page = locationState.page;
  const activeTour = page === "tours" ? tours.find((tour) => locationState.pathname.endsWith(`/${tour.slug}`)) : undefined;
  const meta = useMemo(() => activeTour ? {
    title: `${activeTour.title} | Private China Tour | China Prime`,
    description: activeTour.copy,
  } : pageMeta[page], [activeTour, page]);

  useEffect(() => {
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", meta.description);
  }, [meta]);

  return (
    <div className="site-shell">
      <Header page={page} />
      {page === "destinations" ? <DestinationsPage /> : page === "experiences" ? <ExperiencesPage /> : page === "tours" ? <ToursPage pathname={locationState.pathname} /> : page === "contact" ? <ContactPage search={locationState.search} /> : <HomePage />}
      <Footer />
      {page !== "contact" ? <PageLink className="floating-inquiry" page="contact">Start planning</PageLink> : null}
    </div>
  );
}
