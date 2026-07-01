import type { LinkAction, MediaAsset, NavigationItem, ReviewItem } from "@/types/component-library";

export const homeNavItems: NavigationItem[] = [
  {
    label: "Destinations",
    href: "#destinations",
    children: [
      {
        label: "First-time China",
        href: "#journeys",
        description: "Beijing, Xi'an, Chengdu, Guilin, and Shanghai in a calm private rhythm.",
      },
      {
        label: "Natural China",
        href: "#destinations",
        description: "Karst rivers, mountain parks, glassy lakes, deserts, and snow peaks.",
      },
    ],
  },
  {
    label: "Experiences",
    href: "#experiences",
    children: [
      {
        label: "Family-friendly",
        href: "#experiences",
        description: "Slower pacing, child-aware guides, and moments everyone can enjoy.",
      },
      {
        label: "Muslim-friendly",
        href: "#why",
        description: "Halal-aware planning, prayer timing awareness, and respectful routing.",
      },
    ],
  },
  { label: "Journeys", href: "#journeys" },
  { label: "Why Us", href: "#why" },
  { label: "Journal", href: "#journal" },
];

export const heroImage: MediaAsset = {
  src: "/editorial/china-prime-dmc-home-hero-unsplash-victor-he-2400.jpg",
  alt: "A cinematic view of the Forbidden City in Beijing by Victor He",
  width: 2400,
  height: 1588,
  priority: true,
  objectPosition: "50% 44%",
};

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
    src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river-1400.webp",
    alt: "Bright Li River karst mountains and calm water near Guilin",
    width: 1400,
    height: 933,
    objectPosition: "50% 50%",
  },
  zhangjiajie: {
    src: "/journey-covers/china-avatar-peaks-zhangjiajie-national-forest-park-1400.webp",
    alt: "Dramatic sandstone spire forest rising through Zhangjiajie National Forest Park",
    width: 1400,
    height: 875,
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
    src: "/journey-covers/shanghai-hangzhou-huangshan-yellow-mountain-clouds-1400.webp",
    alt: "Bright Huangshan mountain peaks representing smooth China journey design",
    width: 1400,
    height: 875,
    objectPosition: "50% 42%",
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
  {
    title: "Guilin & Yangshuo",
    description: "Karst peaks, riverside villages, cycling lanes, and painterly morning light.",
    image: destinationImages.guilin,
    badges: ["Nature", "Soft adventure"],
  },
  {
    title: "Zhangjiajie",
    description: "Sandstone pillars, forest walks, and the cinematic China teenagers remember.",
    image: destinationImages.zhangjiajie,
    badges: ["Drama", "Adventure"],
  },
  {
    title: "Yunnan",
    description:
      "Old towns, mountain air, Naxi culture, boutique stays, and a slower southwest rhythm.",
    image: destinationImages.yunnan,
    badges: ["Culture", "Slow travel"],
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
    title: "First China, Beautifully Paced",
    description:
      "A private introduction for couples or families who want the icons, but not the rush.",
    image: destinationImages.beijing,
    badges: ["10-12 days"],
    meta: [
      { label: "Route", value: "Beijing, Xi'an, Chengdu, Shanghai" },
      { label: "Best for", value: "First-time visitors" },
    ],
  },
  {
    title: "China With Kids",
    description:
      "Pandas, easy nature, hands-on food moments, and hotels chosen for comfort between discoveries.",
    image: destinationImages.guilin,
    badges: ["9-11 days"],
    meta: [
      { label: "Route", value: "Beijing, Chengdu, Yangshuo, Shanghai" },
      { label: "Pace", value: "Easy, playful, private" },
    ],
  },
  {
    title: "Landscapes That Stay With You",
    description:
      "A cinematic route through river valleys, mountain parks, and the kind of scenery people cross oceans for.",
    image: destinationImages.zhangjiajie,
    badges: ["12-14 days"],
    meta: [
      { label: "Route", value: "Guilin, Zhangjiajie, Yunnan" },
      { label: "Style", value: "Nature and photography" },
    ],
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

export const reviews: ReviewItem[] = [
  {
    quote:
      "We wanted China to feel exciting, not overwhelming. The pacing made all the difference.",
    name: "Family traveler",
    country: "United States",
    rating: 5,
    trip: "First China, Beautifully Paced",
  },
  {
    quote:
      "Our guide knew when to explain, when to step back, and when the kids simply needed snacks.",
    name: "Private family guest",
    country: "Australia",
    rating: 5,
    trip: "China With Kids",
  },
  {
    quote: "The logistics were invisible. That is exactly what made the journey feel luxurious.",
    name: "Couple traveler",
    country: "United Kingdom",
    rating: 5,
    trip: "Landscapes That Stay With You",
  },
];

export const journal = [
  {
    title: "How to plan a first private trip to China",
    excerpt:
      "The practical questions travelers ask before they fall in love with the route: pace, trains, food, payment, hotels, and guides.",
    href: "/journal/how-to-plan-a-first-private-trip-to-china",
    image: destinationImages.beijing,
    category: "First-time China",
  },
  {
    title: "China with kids: what actually works",
    excerpt:
      "Why pandas, rivers, hands-on meals, and shorter city days often work better than a checklist of landmarks.",
    href: "/journal/china-with-kids-what-actually-works",
    image: destinationImages.chengdu,
    category: "Family travel",
  },
  {
    title: "When to visit China for the best light and comfort",
    excerpt:
      "A calmer way to think about spring, autumn, school holidays, mountain weather, and photography seasons.",
    href: "/journal/best-time-for-a-first-china-journey",
    image: heroImage,
    category: "Seasonal planning",
  },
];

export const primaryAction: LinkAction = {
  label: "Start Planning My China Journey",
  href: "mailto:chinaprimedmc@gmail.com?subject=Private%20China%20Journey%20Inquiry",
};

export const b2bAction: LinkAction = {
  label: "For Travel Advisors",
  href: "#footer",
};
