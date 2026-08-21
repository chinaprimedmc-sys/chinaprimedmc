import type { LinkAction, MediaAsset, NavigationItem } from "@/types/component-library";

import { chengduAsset, firstChinaAsset } from "@/content/tours/assets";

export const homeNavItems: NavigationItem[] = [
  {
    label: "Journeys",
    href: "/tours",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  { label: "About AVIORA", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Travel Trade", href: "/china-dmc" },
];

export const primaryAction: LinkAction = {
  label: "Plan My Trip",
  href: "/start-planning",
};

export const secondaryHeroActions = {
  whatsapp: {
    label: "Message Our China Team",
    href: "https://wa.me/447985052302",
  },
  email: {
    label: "Email Our China Team",
    href: "mailto:chinaprimedmc@gmail.com?subject=Question%20for%20a%20China%20Specialist",
  },
};

export const heroImage: MediaAsset = {
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "A traveler looking across the Great Wall near Beijing",
  width: 1086,
  height: 1448,
  priority: true,
  objectPosition: "58% 52%",
};

export const desktopHeroImage: MediaAsset = {
  src: "/home/shanghai-blue-hour-desktop-hero.avif",
  alt: "Shanghai's Lujiazui skyline and the Oriental Pearl Tower at blue hour",
  width: 2400,
  height: 1600,
  priority: true,
  objectPosition: "50% 50%",
};

export const mobileHeroImage: MediaAsset = {
  src: "/home/shanghai-blue-hour-mobile-hero-768.avif",
  alt: "The Oriental Pearl Tower above Shanghai at blue hour",
  width: 768,
  height: 1662,
  priority: true,
  objectPosition: "50% 50%",
};

export const homeEditorialImages = {
  greatWall: {
    src: "/home/editorial/great-wall-private-china-travel.webp",
    alt: "A traveler looking across the Great Wall as it winds through green mountains near Beijing",
    width: 1086,
    height: 1448,
    objectPosition: "50% 44%",
  },
  shanghaiWaterfront: {
    src: "/home/editorial/shanghai-family-waterfront.webp",
    alt: "Travelers gathered along the Shanghai waterfront with the Pudong skyline behind them",
    width: 1350,
    height: 1800,
    objectPosition: "50% 42%",
  },
  paintingExperience: {
    src: "/home/editorial/chinese-painting-cultural-experience.webp",
    alt: "A traveler practicing traditional Chinese brush painting during a hands-on cultural experience",
    width: 1350,
    height: 1800,
    objectPosition: "50% 50%",
  },
  guilinLandscape: {
    src: "/home/editorial/guilin-li-river-karst-landscape.webp",
    alt: "Karst mountains and a river curving around a village near Guilin",
    width: 1800,
    height: 1200,
    objectPosition: "50% 48%",
  },
  tradeConsultation: {
    src: "/home/editorial/travel-trade-consultation-kuala-lumpur.webp",
    alt: "A face-to-face conversation about planning travel in China in Kuala Lumpur",
    width: 1080,
    height: 720,
    objectPosition: "50% 48%",
  },
  tradeBuyerMeeting: {
    src: "/home/editorial/travel-trade-buyer-meeting-kuala-lumpur.webp",
    alt: "The AVIORA team discussing private China travel at an international tourism event in Kuala Lumpur",
    width: 1080,
    height: 720,
    objectPosition: "50% 50%",
  },
  tradeMuslimBuyers: {
    src: "/home/editorial/muslim-travel-buyers-kuala-lumpur.webp",
    alt: "The AVIORA team discussing Muslim-friendly China travel in Kuala Lumpur",
    width: 1080,
    height: 720,
    objectPosition: "50% 50%",
  },
} satisfies Record<string, MediaAsset>;

export const exploreChina = [
  {
    eyebrow: "Destination",
    title: "Beijing",
    description: "Imperial scale, quiet courtyards, and Great Wall timing shaped around your pace.",
    href: "/destinations/beijing",
    image: homeEditorialImages.greatWall,
  },
  {
    eyebrow: "Destination",
    title: "Shanghai",
    description: "Skyline energy, neighborhood texture, and an easy first landing in modern China.",
    href: "/destinations/shanghai",
    image: homeEditorialImages.shanghaiWaterfront,
  },
  {
    eyebrow: "Private journeys",
    title: "Find your rhythm",
    description:
      "Family time, exceptional comfort, photography, or a slower trip with room to notice more.",
    href: "/tours",
    image: homeEditorialImages.guilinLandscape,
  },
];

export const planningSteps = [
  {
    number: "01",
    title: "Share the essentials",
    description:
      "Dates, travelers, priorities, hotel expectations and anything needing extra care.",
  },
  {
    number: "02",
    title: "Review a considered direction",
    description: "We recommend the route, length of stay, hotel level and private service plan.",
  },
  {
    number: "03",
    title: "Confirm every important detail",
    description: "Hotels, room categories, inclusions and final pricing are confirmed in writing.",
  },
];

export const destinationImages = {
  beijing: {
    src: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp",
    alt: "The Great Wall crossing the mountains near Beijing in warm evening light",
    width: 1920,
    height: 1080,
    objectPosition: "50% 45%",
  },
  shanghai: {
    src: "/home/shanghai-pudong-skyline.webp",
    alt: "Pudong skyline in Shanghai at dusk above the Huangpu River",
    width: 1920,
    height: 1080,
    objectPosition: "50% 42%",
  },
  chengdu: {
    src: "/home/chengdu-panda.webp",
    alt: "A giant panda at the Chengdu panda breeding and research center",
    width: 1920,
    height: 1200,
    objectPosition: "54% 42%",
  },
  guilin: {
    src: "/home/guilin-li-river.webp",
    alt: "Li River karst mountains and calm water near Guilin",
    width: 1920,
    height: 1200,
    objectPosition: "50% 50%",
  },
  zhangjiajie: {
    src: "/home/zhangjiajie-national-forest.webp",
    alt: "Sandstone spire forest rising through Zhangjiajie National Forest Park",
    width: 1920,
    height: 1200,
    objectPosition: "52% 38%",
  },
  yunnan: {
    src: "/home/yunnan-lijiang-old-town.webp",
    alt: "Lijiang Old Town in Yunnan glowing at blue hour",
    width: 1920,
    height: 1200,
    objectPosition: "50% 52%",
  },
};

export const storyImages = {
  tea: {
    src: "/home/xian-terracotta-army.webp",
    alt: "Terracotta Army figures representing China's living cultural depth",
    width: 1920,
    height: 1200,
    objectPosition: "50% 52%",
  },
  rail: {
    src: "/home/shanghai-pudong-skyline.webp",
    alt: "Shanghai skyline representing smooth private China logistics",
    width: 1920,
    height: 1080,
    objectPosition: "50% 52%",
  },
  xian: {
    src: "/home/xian-terracotta-army.webp",
    alt: "Terracotta Army figures in Xi'an, China",
    width: 1920,
    height: 1200,
    objectPosition: "50% 48%",
  },
};

export const destinations = [
  {
    title: "Beijing",
    description:
      "Imperial courtyards, quiet hutongs, and private Great Wall timing without the rush.",
    image: destinationImages.beijing,
    badges: ["History", "First-time"],
  },
  {
    title: "Shanghai",
    description:
      "A polished first landing: skyline views, Art Deco streets, design hotels, and easy logistics.",
    image: destinationImages.shanghai,
    badges: ["Modern", "Luxury"],
  },
  {
    title: "Chengdu",
    description: "Pandas, teahouses, Sichuan flavors, and a gentler rhythm for families.",
    image: destinationImages.chengdu,
    badges: ["Pandas", "Food"],
  },
];

export const experiences = [
  {
    title: "Family travel that still feels like a vacation",
    description:
      "Pandas, trains, river landscapes, light walking, and guides who know when children need space.",
    image: destinationImages.chengdu,
    badges: ["Family"],
  },
  {
    title: "Comfort shows in the details",
    description:
      "Private transfers, flexible days, better-located hotels, well-planned rail travel and clear English communication.",
    image: storyImages.rail,
    badges: ["Luxury"],
  },
  {
    title: "Culture you can feel, not just photograph",
    description:
      "Tea, markets, temples, night views, craft neighborhoods, seasonal light, and places with a living pulse.",
    image: storyImages.tea,
    badges: ["Culture"],
  },
];

export const journeys = [
  {
    title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
    titleLocation: "Beijing, Xi'an & Shanghai",
    titleExperience: "",
    titleSuffix: "Private Tour",
    durationBadge: "9 DAYS · 8 NIGHTS",
    isoDuration: "P9D",
    accent: "gold" as const,
    poeticTitle: "Three defining cities, planned at a comfortable pace.",
    description: "Imperial Beijing, historic Xi'an, and modern Shanghai without the rush.",
    image: firstChinaAsset.beijingGreatWallSunriseHero,
    href: "/tours/first-china-beautifully-paced",
    duration: "9 days / 8 nights",
    route: "Beijing · Xi'an · Shanghai",
    bestFor: "First-time visitors",
  },
  {
    title: "5-Day Chengdu Panda & Sichuan Food Private Tour",
    titleLocation: "Chengdu",
    titleExperience: "Panda & Sichuan Food",
    titleSuffix: "Private Tour",
    durationBadge: "5 DAYS · 4 NIGHTS",
    isoDuration: "P5D",
    accent: "bamboo" as const,
    poeticTitle: "Pandas, teahouses, and Sichuan flavor at an unhurried pace.",
    description: "A softer Chengdu chapter built around pandas, tea, food, and local life.",
    image: chengduAsset.heroPanda,
    href: "/tours/chengdu-pandas-sichuan-table",
    duration: "5 days / 4 nights",
    route: "Chengdu · Optional Leshan",
    bestFor: "Families and food lovers",
  },
];

export const proofPoints = [
  {
    title: "A guide chosen for judgment, not just language.",
    description: "Strong English, destination knowledge and the confidence to adjust a day well.",
  },
  {
    title: "Hotels selected beyond the star rating.",
    description: "We consider location, room category, service, breakfast and route efficiency.",
  },
  {
    title: "Local support throughout the journey.",
    description:
      "A China-based team remains reachable for timing, transport and practical changes.",
  },
];

export const journal = [
  {
    title: "China’s 240-hour visa-free transit explained",
    excerpt:
      "Check nationality, ports, onward routing and permitted areas before building a visa-free China stopover.",
    href: "/journal/china-240-hour-visa-free-transit-guide",
    image: firstChinaAsset.beijingTempleOfHeavenCeiling,
    category: "Entry planning",
  },
  {
    title: "Mobile payments in China for visitors",
    excerpt: "Prepare mobile wallets, overseas cards and RMB cash before traveling in China.",
    href: "/journal/china-mobile-payments-foreign-tourists",
    image: firstChinaAsset.shanghaiMarketVisit,
    category: "Practical travel",
  },
  {
    title: "China high-speed trains: passport to platform",
    excerpt: "Book and board with the right passport details, station timing and seat choice.",
    href: "/journal/china-high-speed-train-foreigners",
    image: firstChinaAsset.xianTerracottaPit,
    category: "Rail planning",
  },
];
