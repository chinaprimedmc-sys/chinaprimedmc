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
  {
    label: "Styles",
    href: "/styles",
  },
  { label: "Planning", href: "/planning" },
  { label: "Journal", href: "/journal" },
];

export const primaryAction: LinkAction = {
  label: "Plan My Trip",
  href: "/start-planning",
};

export const secondaryHeroActions = {
  whatsapp: {
    label: "WhatsApp Us",
    href: "https://wa.me/447985052302",
  },
  email: {
    label: "Email a Specialist",
    href: "mailto:chinaprimedmc@gmail.com?subject=Question%20for%20a%20China%20Specialist",
  },
};

export const heroImage: MediaAsset = {
  src: "/home/beijing-temple-of-heaven-full-portrait.jpg",
  alt: "The Hall of Prayer for Good Harvests at Beijing's Temple of Heaven in clear morning light",
  width: 1820,
  height: 2428,
  priority: true,
  objectPosition: "50% 100%",
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
    alt: "A face-to-face China travel consultation at an inbound tourism trade event in Kuala Lumpur",
    width: 1080,
    height: 720,
    objectPosition: "50% 48%",
  },
  tradeBuyerMeeting: {
    src: "/home/editorial/travel-trade-buyer-meeting-kuala-lumpur.webp",
    alt: "A face-to-face discussion with a regional travel buyer at an inbound tourism event in Kuala Lumpur",
    width: 1080,
    height: 720,
    objectPosition: "50% 50%",
  },
  tradeMuslimBuyers: {
    src: "/home/editorial/muslim-travel-buyers-kuala-lumpur.webp",
    alt: "China travel representatives speaking with Muslim travel buyers at a tourism event in Kuala Lumpur",
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
    eyebrow: "Travel styles",
    title: "Find your rhythm",
    description:
      "Family time, quiet luxury, photography, or a slower journey with room to notice more.",
    href: "/styles",
    image: homeEditorialImages.guilinLandscape,
  },
];

export const planningSteps = [
  {
    number: "01",
    title: "Tell us the shape of the trip",
    description:
      "Dates, travelers, interests, pace, comfort level, and anything that needs extra care.",
  },
  {
    number: "02",
    title: "Receive a first route direction",
    description:
      "We connect the right cities, travel time, daily rhythm, and hotel logic into a clear starting point.",
  },
  {
    number: "03",
    title: "Refine it with a specialist",
    description:
      "We adjust the details with you until the journey feels personal, practical, and ready to travel.",
  },
];

export const destinationImages = {
  beijing: {
    src: "/home/beijing-forbidden-city.jpg",
    alt: "Forbidden City palace roofs and courtyards in Beijing",
    width: 1920,
    height: 1200,
    objectPosition: "50% 48%",
  },
  shanghai: {
    src: "/home/shanghai-pudong-skyline.jpg",
    alt: "Pudong skyline in Shanghai at dusk above the Huangpu River",
    width: 1920,
    height: 1080,
    objectPosition: "50% 42%",
  },
  chengdu: {
    src: "/home/chengdu-panda.jpg",
    alt: "A giant panda at the Chengdu panda breeding and research center",
    width: 1920,
    height: 1200,
    objectPosition: "54% 42%",
  },
  guilin: {
    src: "/home/guilin-li-river.jpg",
    alt: "Li River karst mountains and calm water near Guilin",
    width: 1920,
    height: 1200,
    objectPosition: "50% 50%",
  },
  zhangjiajie: {
    src: "/home/zhangjiajie-national-forest.jpg",
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
    src: "/home/xian-terracotta-army.jpg",
    alt: "Terracotta Army figures representing China's living cultural depth",
    width: 1920,
    height: 1200,
    objectPosition: "50% 52%",
  },
  rail: {
    src: "/home/shanghai-pudong-skyline.jpg",
    alt: "Shanghai skyline representing smooth private China logistics",
    width: 1920,
    height: 1080,
    objectPosition: "50% 52%",
  },
  xian: {
    src: "/home/xian-terracotta-army.jpg",
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
    title: "Luxury is the absence of friction",
    description:
      "Private transfers, flexible pacing, stronger hotels, smart rail planning, and calm English communication.",
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
    poeticTitle: "China's essential first journey, beautifully paced.",
    description: "Imperial Beijing, historic Xi'an, and modern Shanghai without the rush.",
    image: firstChinaAsset.beijingForbiddenCityMoat,
    href: "/tours/first-china-beautifully-paced",
    duration: "9 days / 8 nights",
    route: "Beijing · Xi'an · Shanghai",
    bestFor: "First-time visitors",
  },
  {
    title: "5-Day Chengdu Panda & Sichuan Food Private Tour",
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
    title: "You will not be left figuring China out alone.",
    description:
      "Rail timing, payments, tickets, transfers, and guide communication are planned before they become stress.",
  },
  {
    title: "The trip is private, not a shopping tour.",
    description:
      "Your guide, vehicle, pace, meals, and daily rhythm are built around your family or group.",
  },
  {
    title: "Special needs are planned before arrival.",
    description:
      "Children, older parents, halal-aware meals, lighter walking days, and dietary notes are designed in.",
  },
];

export const journal = [
  {
    title: "How to plan a first private trip to China",
    excerpt:
      "The practical questions travelers ask before they fall in love with the route: pace, trains, food, payment, hotels, and guides.",
    href: "/journal/how-to-plan-a-first-private-trip-to-china",
    image: firstChinaAsset.beijingTempleOfHeavenCeiling,
    category: "First-time China",
  },
  {
    title: "Family travel: what actually works",
    excerpt:
      "Why pandas, rivers, hands-on meals, and shorter city days often work better than a checklist of landmarks.",
    href: "/journal/china-with-kids-what-actually-works",
    image: firstChinaAsset.shanghaiMarketVisit,
    category: "Family travel",
  },
  {
    title: "When to visit China for the best light and comfort",
    excerpt:
      "A calmer way to think about spring, autumn, school holidays, mountain weather, and photography seasons.",
    href: "/journal/best-time-for-a-first-china-journey",
    image: firstChinaAsset.xianTerracottaPit,
    category: "Seasonal planning",
  },
];

export const b2bAction: LinkAction = {
  label: "For Travel Advisors",
  href: "/contact",
};
