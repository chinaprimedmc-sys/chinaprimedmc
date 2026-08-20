import { destinationAsset } from "@/content/destinations/assets";
import { commercialArticleContent } from "@/content/journal/commercial-content";
import { seniorClusterArticles } from "@/content/journal/senior-cluster";
import {
  beijingUnhurriedAsset,
  firstChinaAsset,
  shanghaiZhangjiajieAsset,
} from "@/content/tours/assets";
import type { MediaAsset } from "@/types/component-library";
import type { JournalArticle, JournalCategory, JournalCitation } from "@/types/journal";

const author = {
  name: "AVIORA China Travel Team",
  role: "China travel specialists",
};

const commercialHeroImages = {
  firstTripPlanning: {
    ...firstChinaAsset.beijingGreatWallGroup,
    fit: "contain",
  },
  beijingXianShanghaiDays: {
    ...firstChinaAsset.beijingGreatWallCouple,
    fit: "contain",
  },
  chinaTourWalking: {
    src: "/journal/2026-08-19/china-tour-walking-hero-great-wall-couple-full.webp",
    alt: "Older couple sharing a kiss on the Great Wall at Mutianyu near Beijing",
    width: 1200,
    height: 1600,
    fit: "contain",
  },
  beijingTerracottaDecision: firstChinaAsset.xianTerracottaPit,
  mutianyuWalking: firstChinaAsset.beijingGreatWallWide,
  tianmenVsWulingyuan: destinationAsset.zhangjiajieForest,
  chengduJiuzhaigouTransport: {
    src: "/tours/chengdu-pandas-jiuzhaigou/day-04.webp",
    alt: "Mountain road and forest scenery on the route from Chengdu to Jiuzhaigou",
    width: 1600,
    height: 1067,
  },
  jiuzhaigouAccessibility: {
    src: "/tours/chengdu-pandas-jiuzhaigou/gallery-08.webp",
    alt: "Boardwalk and turquoise water in Jiuzhaigou National Park",
    width: 1200,
    height: 800,
  },
  zhangjiajieDifficulty: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/zhangjiajie-24.webp",
    alt: "Layered sandstone peaks and forest in Zhangjiajie National Forest Park",
    width: 1600,
    height: 1067,
  },
  natureComparison: {
    src: "/home/zhangjiajie-national-forest.webp",
    alt: "Sandstone pillars rising above the forest in Zhangjiajie",
    width: 1920,
    height: 1200,
  },
  pandaTours: {
    src: "/tours/chengdu-pandas/chengdu-hero-panda.webp",
    alt: "A giant panda at a Chengdu conservation base",
    width: 2000,
    height: 1335,
  },
  nineOrElevenDays: {
    src: "/tours/first-china-beautifully-paced/beijing-great-wall-wide.webp",
    alt: "The Great Wall crossing green mountains outside Beijing",
    width: 1920,
    height: 1280,
  },
  privateVsGroup: {
    src: "/tours/first-china-beautifully-paced/shanghai-waterfront-group.webp",
    alt: "International travelers exploring Shanghai together on a private China journey",
    width: 1920,
    height: 1440,
  },
  fourCity: {
    src: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp",
    alt: "The Great Wall crossing Beijing's mountains in warm evening light",
    width: 1920,
    height: 1080,
  },
  chengduJiuzhaigou: {
    src: "/tours/chengdu-pandas-jiuzhaigou/hero.webp",
    alt: "Turquoise alpine lakes and forest in Jiuzhaigou National Park",
    width: 1600,
    height: 1067,
  },
  shanghaiZhangjiajie: {
    src: "/tours/shanghai-zhangjiajie-floating-peaks/hero-floating-peaks.webp",
    alt: "Sandstone peaks rising through the forest in Zhangjiajie",
    width: 1280,
    height: 1920,
  },
  beijingXian: {
    src: "/tours/xian-beijing-private-journey/hero.webp",
    alt: "The Great Wall rising above the mountains near Beijing",
    width: 1600,
    height: 1067,
  },
  bestTime: {
    src: "/home/jiuzhaigou-five-flower-lake.webp",
    alt: "Seasonal forest reflected in the clear water of Jiuzhaigou",
    width: 1920,
    height: 1200,
  },
  chooseCompany: {
    src: "/home/editorial/travel-trade-team-singapore.webp",
    alt: "AVIORA China travel specialists meeting international travel partners",
    width: 1080,
    height: 810,
  },
  privateWorth: {
    src: "/tours/beijing-unhurried/great-wall-walk.webp",
    alt: "Travelers walking along Great Wall ramparts in the Beijing mountains",
    width: 2400,
    height: 1641,
  },
  family: {
    src: "/home/editorial/shanghai-family-waterfront.webp",
    alt: "A family enjoying the Shanghai waterfront during a private China trip",
    width: 1350,
    height: 1800,
  },
  olderTravelers: {
    src: "/tours/beijing-unhurried/great-wall-overview.webp",
    alt: "A quieter Great Wall route crossing green mountains near Beijing",
    width: 864,
    height: 1488,
  },
  tripLength: {
    src: "/tours/first-china-beautifully-paced/shanghai-huangpu-sunset.webp",
    alt: "Shanghai's skyline across the Huangpu River at sunset",
    width: 1439,
    height: 1920,
  },
  inclusions: {
    src: "/journal/2026-08-06/china-high-speed-train-boarding.webp",
    alt: "An international traveler boarding a high-speed train in China",
    width: 2400,
    height: 3200,
  },
} satisfies Record<string, MediaAsset>;

type CommercialArticleInput = {
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  category: JournalCategory;
  tags: string[];
  readingTime: string;
  eyebrow: string;
  hero: MediaAsset;
  gallery: MediaAsset[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  destinations?: string[];
  tours: string[];
  experiences?: string[];
  articles?: string[];
  citations?: JournalCitation[];
  conversionTitle: string;
  conversionDescription: string;
  conversionLabel: string;
  conversionHref?: string;
  conversionImage?: MediaAsset;
  publishedAt?: string;
  sourcePath?: string;
};

function commercialArticle(input: CommercialArticleInput): JournalArticle {
  return {
    slug: input.slug,
    title: input.title,
    dek: input.dek,
    excerpt: input.excerpt,
    category: input.category,
    tags: input.tags,
    author,
    publishedAt: input.publishedAt ?? "2026-08-12",
    readingTime: input.readingTime,
    editorPick: true,
    hero: { eyebrow: input.eyebrow, image: input.hero },
    gallery: input.gallery,
    content: commercialArticleContent[input.slug] ?? [],
    seo: {
      title: input.seoTitle,
      description: input.seoDescription,
      keywords: input.keywords,
      ogImage: input.hero,
    },
    related: {
      destinations: input.destinations,
      tours: input.tours,
      experiences: input.experiences,
      articles: input.articles,
    },
    citations: input.citations,
    updatedAt: input.publishedAt ?? "2026-08-12",
    sourcePath: input.sourcePath,
    conversion: {
      eyebrow: "Plan with a China specialist",
      title: input.conversionTitle,
      description: input.conversionDescription,
      label: input.conversionLabel,
      href: input.conversionHref ?? `/start-planning?source=journal-${input.slug}`,
      image: input.conversionImage,
    },
  };
}

export const commercialJournalArticles: JournalArticle[] = [
  commercialArticle({
    slug: "first-trip-to-china-planning-guide",
    publishedAt: "2026-08-19",
    title: "How AVIORA Plans a First Trip to China Before You Book",
    dek: "Use the decision sequence our China-based team applies to gateways, usable days, city order, reservations, hotels, walking and backup plans before a journey is ready to book.",
    excerpt:
      "The first-party Route Reality Check AVIORA uses to test whether a first-China itinerary will work beyond the page.",
    category: "Travel Guides",
    tags: ["first-time-china", "beijing", "xian", "shanghai", "private-guides", "train-travel"],
    readingTime: "22 min read",
    eyebrow: "First China trip planning",
    hero: commercialHeroImages.firstTripPlanning,
    gallery: [
      {
        src: "/journal/2026-08-06/china-high-speed-train-boarding.webp",
        alt: "An international traveler boarding a high-speed train in China",
        width: 2400,
        height: 3200,
        fit: "contain",
      },
      {
        ...firstChinaAsset.xianTerracottaGroup,
        fit: "contain",
      },
      {
        ...firstChinaAsset.shanghaiWaterfrontGroup,
        fit: "contain",
      },
    ],
    seoTitle: "How to Plan a Trip to China: 12 Decisions Before Booking",
    seoDescription:
      "Plan a first trip to China in the right order. See the 12 route, flight, hotel, ticket and pacing decisions AVIORA checks before booking.",
    keywords: [
      "how to plan a trip to China",
      "first trip to China",
      "China trip planning",
      "China travel tips for first time visitors",
      "things to know before visiting China",
      "best itinerary for first trip to China",
      "China travel checklist",
    ],
    destinations: ["beijing", "xian", "shanghai"],
    tours: ["china-at-an-easier-pace-12-day-private-tour"],
    experiences: ["private-guides", "train-travel"],
    articles: [
      "how-many-days-beijing-xian-shanghai",
      "china-itinerary-older-travelers-10-days",
      "how-much-walking-china-tour",
      "china-240-hour-visa-free-transit-guide",
    ],
    conversionTitle: "Let our China team test the route before you book it.",
    conversionDescription:
      "Share your dates, proposed flights, travelers and city list. We will identify what works, what needs evidence and what should change before avoidable bookings make the route harder.",
    conversionLabel: "Request a Route Reality Check",
    conversionHref:
      "/start-planning?source=journal-first-trip-to-china-planning-guide&journey=china-at-an-easier-pace-12-day-private-tour&placement=journal-final-cta&preference=route-reality-check",
    conversionImage: {
      ...firstChinaAsset.shanghaiWaterfrontGroup,
      fit: "contain",
    },
    sourcePath: "content/journal/articles/2026-08-19-first-trip-to-china-planning-guide.md",
  }),
  commercialArticle({
    slug: "how-many-days-beijing-xian-shanghai",
    publishedAt: "2026-08-19",
    title: "How Many Days Do You Need for Beijing, Xi'an and Shanghai? 8, 10 or 12 Days Compared",
    dek: "Compare the real usable time inside eight, ten and twelve-day routes after arrival, departure and two hotel-to-hotel transitions are counted honestly.",
    excerpt:
      "A first-party comparison of eight, ten and twelve days in Beijing, Xi'an and Shanghai, including the time most itinerary headlines leave unexplained.",
    category: "Travel Guides",
    tags: ["first-time-china", "beijing", "xian", "shanghai", "senior-travel", "private-guides"],
    readingTime: "17 min read",
    eyebrow: "Beijing, Xi'an and Shanghai trip length",
    hero: commercialHeroImages.beijingXianShanghaiDays,
    gallery: [
      {
        src: "/journal/2026-08-06/china-high-speed-train-boarding.webp",
        alt: "An international traveler boarding a high-speed train in China",
        width: 2400,
        height: 3200,
        fit: "contain",
      },
      {
        ...firstChinaAsset.xianTerracottaGroup,
        fit: "contain",
      },
      {
        ...firstChinaAsset.shanghaiWaterfrontGroup,
        fit: "contain",
      },
    ],
    seoTitle: "Beijing, Xi'an & Shanghai: 8, 10 or 12 Days?",
    seoDescription:
      "Compare 8, 10 and 12 days in Beijing, Xi'an and Shanghai using real arrival, transfer, sightseeing and recovery time to choose the right pace.",
    keywords: [
      "how many days Beijing Xian Shanghai",
      "Beijing Xian Shanghai itinerary",
      "8 day Beijing Xian Shanghai itinerary",
      "10 day Beijing Xian Shanghai itinerary",
      "12 day Beijing Xian Shanghai itinerary",
      "how long to spend in Beijing Xian Shanghai",
    ],
    destinations: ["beijing", "xian", "shanghai"],
    tours: ["china-at-an-easier-pace-12-day-private-tour"],
    experiences: ["private-guides", "train-travel"],
    articles: [
      "first-trip-to-china-planning-guide",
      "china-itinerary-older-travelers-10-days",
      "how-much-walking-china-tour",
      "china-high-speed-train-foreigners",
      "private-china-tour-cost-2026",
    ],
    conversionTitle: "Choose the shortest route that still feels like your trip.",
    conversionDescription:
      "Share your available dates, flights and preferred rhythm. We will show what changes between ten and twelve days before preparing a private proposal.",
    conversionLabel: "Compare 10 and 12 Days",
    conversionHref:
      "/start-planning?source=journal-how-many-days-beijing-xian-shanghai&journey=china-at-an-easier-pace-12-day-private-tour&placement=journal-final-cta&preference=trip-length-comparison",
    conversionImage: {
      ...firstChinaAsset.shanghaiWaterfrontGroup,
      fit: "contain",
    },
    sourcePath: "content/journal/articles/2026-08-19-how-many-days-beijing-xian-shanghai.md",
  }),
  commercialArticle({
    slug: "how-much-walking-china-tour",
    publishedAt: "2026-08-19",
    title: "How Much Walking Is There on a China Tour?",
    dek: "Realistic walking ranges for Beijing, Xi'an and Shanghai, including the Great Wall, Forbidden City, Terracotta Army and the parts private planning can change.",
    excerpt:
      "A practical site-by-site guide to distance, stairs, standing, station transfers and recovery on a first China tour.",
    category: "Travel Guides",
    tags: ["senior-travel", "first-time-china", "beijing", "xian", "shanghai", "private-guides"],
    readingTime: "18 min read",
    eyebrow: "China tour walking guide",
    hero: commercialHeroImages.chinaTourWalking,
    gallery: [
      {
        src: "/journal/2026-08-19/shanghai-museum-travelers-full.webp",
        alt: "Older travelers exploring a museum gallery in Shanghai with a private guide",
        width: 1600,
        height: 1200,
        fit: "contain",
      },
      {
        src: "/journal/2026-08-19/terracotta-army-exhibition-full.webp",
        alt: "Terracotta warriors displayed inside the museum complex near Xi'an",
        width: 1200,
        height: 1600,
        fit: "contain",
      },
      {
        src: "/journal/2026-08-19/forbidden-city-walking-surfaces-full.webp",
        alt: "Stone courtyards and palace roofs inside the Forbidden City in Beijing",
        width: 768,
        height: 1024,
        fit: "contain",
      },
    ],
    seoTitle: "How Much Walking Is There on a China Tour?",
    seoDescription:
      "Expect 3-6 km of walking on a typical China tour. Compare steps, stairs and standing in Beijing, Xi'an and Shanghai, plus easier-paced options.",
    keywords: [
      "how much walking on a China tour",
      "China tour walking difficulty",
      "China itinerary with less walking",
      "how many steps on a China tour",
      "China tour for slower walkers",
      "Beijing Xi'an Shanghai walking difficulty",
    ],
    destinations: ["beijing", "xian", "shanghai"],
    tours: ["china-at-an-easier-pace-12-day-private-tour"],
    experiences: ["private-guides", "train-travel"],
    articles: [
      "first-trip-to-china-planning-guide",
      "how-many-days-beijing-xian-shanghai",
      "china-itinerary-older-travelers-10-days",
      "mutianyu-great-wall-walking-cable-car",
      "china-high-speed-train-foreigners",
      "terracotta-army-tickets-foreign-visitors",
    ],
    conversionTitle: "Tell us what a comfortable walking day feels like.",
    conversionDescription:
      "Share your comfortable continuous walking time, stair preferences and recovery pattern. We will show where the harder days sit before shaping the route.",
    conversionLabel: "Review My Walking Comfort",
    conversionHref:
      "/start-planning?source=journal-how-much-walking-china-tour&journey=china-at-an-easier-pace-12-day-private-tour&preference=walking-comfort",
    conversionImage: {
      src: "/journal/2026-08-19/older-travelers-chinese-cultural-experience-full.webp",
      alt: "Older travelers enjoying a traditional Chinese cultural experience together",
      width: 1200,
      height: 1600,
      fit: "contain",
    },
    sourcePath: "content/journal/articles/2026-08-19-how-much-walking-china-tour.md",
  }),
  commercialArticle({
    slug: "terracotta-warriors-day-trip-from-beijing",
    publishedAt: "2026-08-15",
    title: "Terracotta Warriors from Beijing: Day Trip or Overnight in Xi'an?",
    dek: "Compare the real hotel-to-hotel day, high-speed rail logistics and the value of one or two Xi'an nights before committing to a rushed visit.",
    excerpt:
      "An honest decision guide for travelers considering the Terracotta Warriors from Beijing in one day.",
    category: "History",
    tags: ["beijing", "xian", "terracotta-army", "train-travel", "first-time-china"],
    readingTime: "14 min read",
    eyebrow: "Beijing to Xi'an decision guide",
    hero: commercialHeroImages.beijingTerracottaDecision,
    gallery: [
      firstChinaAsset.xianTerracottaGroup,
      firstChinaAsset.xianTerracottaPortrait,
      {
        src: "/tours/xian-beijing-private-journey/day-03.webp",
        alt: "Datang Everbright City illuminated at night in Xi'an",
        width: 1600,
        height: 1067,
      },
    ],
    seoTitle: "Terracotta Warriors from Beijing: Day Trip or Overnight?",
    seoDescription:
      "Can you visit the Terracotta Warriors from Beijing in one day? Compare rail, transfers, museum time and one- or two-night Xi'an plans.",
    keywords: [
      "Terracotta Warriors day trip from Beijing",
      "can you visit Terracotta Warriors from Beijing in one day",
      "Beijing to Xi'an day trip",
      "Beijing to Terracotta Warriors by high speed train",
      "how many nights in Xi'an for Terracotta Warriors",
    ],
    destinations: ["beijing", "xian"],
    tours: [
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      "first-china-beautifully-paced",
      "beijing-xian-chengdu-shanghai-private-11-day-tour",
    ],
    experiences: ["train-travel", "private-guides"],
    articles: [
      "terracotta-army-tickets-foreign-visitors",
      "beijing-xian-itinerary-how-many-days",
      "china-high-speed-train-foreigners",
    ],
    citations: [
      {
        name: "Mausoleum of the First Qin Emperor",
        url: "https://whc.unesco.org/en/list/441/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1987-01-01",
      },
      {
        name: "China Railway 12306 English FAQ",
        url: "https://www.12306.cn/en/faq.html",
        publisher: "China State Railway Group",
        publishedAt: "2026-08-15",
      },
    ],
    conversionTitle: "Decide whether Xi'an deserves a night before choosing the train.",
    conversionDescription:
      "Share your Beijing hotel, travel dates and wider China route. We will explain the realistic sequence and shape a private Xi'an and Beijing proposal around it.",
    conversionLabel: "Plan Beijing and Xi'an",
    conversionImage: {
      src: "/tours/xian-beijing-private-journey/day-01.webp",
      alt: "Xi'an City Wall and Yongning Gate glowing after rain",
      width: 1600,
      height: 1067,
    },
  }),
  commercialArticle({
    slug: "mutianyu-great-wall-walking-cable-car",
    publishedAt: "2026-08-15",
    title: "How Much Walking Is There at Mutianyu Great Wall with the Cable Car?",
    dek: "Understand what the cable car removes, what walking remains and which Mutianyu route suits children, older travelers and mixed-ability families.",
    excerpt:
      "A realistic Mutianyu walking guide built around tower choices, stairs, weather and group energy.",
    category: "Family Travel",
    tags: ["beijing", "great-wall", "family-travel", "senior-travel", "private-guides"],
    readingTime: "14 min read",
    eyebrow: "Mutianyu walking and cable-car guide",
    hero: commercialHeroImages.mutianyuWalking,
    gallery: [
      firstChinaAsset.beijingGreatWallCouple,
      firstChinaAsset.beijingGreatWallSolo,
      beijingUnhurriedAsset.privateService,
    ],
    seoTitle: "How Much Walking at Mutianyu Great Wall with Cable Car?",
    seoDescription:
      "Compare realistic Mutianyu walking routes after the cable car, including stairs, tower choices and advice for kids, seniors and slower walkers.",
    keywords: [
      "how much walking at Mutianyu Great Wall",
      "Mutianyu Great Wall with cable car",
      "Mutianyu cable car route for seniors",
      "Mutianyu Great Wall with kids",
      "is Mutianyu Great Wall difficult",
    ],
    destinations: ["beijing"],
    tours: [
      "beijing-great-wall-private-5-day-tour",
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      "first-china-beautifully-paced",
    ],
    experiences: ["private-guides"],
    articles: [
      "mutianyu-badaling-jinshanling-great-wall",
      "5-day-beijing-great-wall-itinerary",
      "china-itinerary-older-travelers-10-days",
    ],
    citations: [
      {
        name: "Mutianyu Great Wall Official English Website",
        url: "https://en.mutianyugreatwall.com/",
        publisher: "Beijing Mutianyu Great Wall Tourism Service Co.",
        publishedAt: "2026-08-15",
      },
      {
        name: "The Great Wall",
        url: "https://whc.unesco.org/en/list/438/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1987-01-01",
      },
    ],
    conversionTitle: "Build the Great Wall day around the slowest comfortable walker.",
    conversionDescription:
      "Tell us the ages, walking comfort and height preferences in your party. We will recommend a private Mutianyu day without pretending the cable car removes every step.",
    conversionLabel: "Plan My Mutianyu Day",
    conversionImage: beijingUnhurriedAsset.greatWallSunrise,
  }),
  commercialArticle({
    slug: "tianmen-mountain-vs-zhangjiajie-national-forest-park",
    publishedAt: "2026-08-15",
    title: "Tianmen Mountain vs Zhangjiajie National Forest Park: Which Should You Visit?",
    dek: "Compare two separate Zhangjiajie experiences by scenery, hotel base, walking, heights, weather and the number of usable days in your itinerary.",
    excerpt:
      "A clear choice guide for travelers deciding between Tianmen Mountain and Wulingyuan's national-park landscapes.",
    category: "Nature",
    tags: ["zhangjiajie", "nature", "family-travel", "senior-travel", "photography"],
    readingTime: "15 min read",
    eyebrow: "Zhangjiajie attraction decision guide",
    hero: commercialHeroImages.tianmenVsWulingyuan,
    gallery: [
      shanghaiZhangjiajieAsset.wulingyuan,
      shanghaiZhangjiajieAsset.tianmenCave,
      shanghaiZhangjiajieAsset.tianmenCableway,
    ],
    seoTitle: "Tianmen Mountain vs Zhangjiajie National Forest Park",
    seoDescription:
      "Compare Tianmen Mountain and Zhangjiajie National Forest Park by scenery, time, walking, heights, hotels and fit for a first Zhangjiajie trip.",
    keywords: [
      "Tianmen Mountain vs Zhangjiajie National Forest Park",
      "is Tianmen Mountain in Zhangjiajie National Park",
      "Tianmen Mountain or Wulingyuan",
      "is Tianmen Mountain worth it",
      "how many days in Zhangjiajie",
    ],
    destinations: ["zhangjiajie"],
    tours: [
      "shanghai-zhangjiajie-floating-peaks",
      "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    ],
    experiences: ["private-guides"],
    articles: [
      "how-difficult-is-zhangjiajie",
      "where-to-stay-in-zhangjiajie",
      "shanghai-zhangjiajie-8-day-itinerary",
    ],
    citations: [
      {
        name: "Wulingyuan Scenic and Historic Interest Area",
        url: "https://whc.unesco.org/en/list/640/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1992-01-01",
      },
    ],
    conversionTitle: "Choose the mountain days before fixing the Zhangjiajie hotels.",
    conversionDescription:
      "Share your arrival, departure, walking comfort and attitude to heights. We will decide how much time belongs in Wulingyuan and whether Tianmen Mountain improves the route.",
    conversionLabel: "Plan My Zhangjiajie Route",
    conversionImage: {
      src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/zhangjiajie-10.webp",
      alt: "Clouds moving around the dramatic cliffs of Tianmen Mountain",
      width: 1600,
      height: 1067,
    },
  }),
  commercialArticle({
    slug: "chengdu-to-jiuzhaigou-transport",
    publishedAt: "2026-08-13",
    title: "Chengdu to Jiuzhaigou: Train, Flight or Private Transfer?",
    dek: "Compare the complete hotel-to-hotel journey, including stations, airports, luggage, mountain transfers and arrival energy - not only the advertised travel time.",
    excerpt:
      "A practical comparison of high-speed rail, flights and private road transfers from Chengdu to Jiuzhaigou for foreign travelers.",
    category: "Train Travel",
    tags: ["chengdu", "train-travel", "family-travel", "private-guides"],
    readingTime: "12 min read",
    eyebrow: "Jiuzhaigou transport decision",
    hero: commercialHeroImages.chengduJiuzhaigouTransport,
    gallery: [
      {
        src: "/tours/chengdu-pandas-jiuzhaigou/day-03.webp",
        alt: "Travelers preparing for the Chengdu to Jiuzhaigou connection",
        width: 1600,
        height: 1067,
      },
      {
        src: "/tours/chengdu-pandas-jiuzhaigou/gallery-10.webp",
        alt: "Forested mountain scenery in the Jiuzhaigou region",
        width: 1200,
        height: 800,
      },
      {
        src: "/tours/chengdu-pandas-jiuzhaigou/day-05.webp",
        alt: "Clear lakes reached after the journey into Jiuzhaigou",
        width: 1600,
        height: 1067,
      },
    ],
    seoTitle: "Chengdu to Jiuzhaigou: Train, Flight or Transfer?",
    seoDescription:
      "Compare train, flight and private transfer options from Chengdu to Jiuzhaigou, including door-to-door time, luggage, stations and mountain arrival.",
    keywords: [
      "Chengdu to Jiuzhaigou",
      "Chengdu to Jiuzhaigou train",
      "Chengdu to Jiuzhaigou flight",
      "Chengdu Jiuzhaigou private transfer",
    ],
    destinations: ["chengdu", "jiuzhaigou"],
    tours: ["chengdu-pandas-jiuzhaigou-private-7-day-tour"],
    experiences: ["train-travel", "private-guides"],
    articles: ["chengdu-jiuzhaigou-7-day-itinerary", "china-high-speed-train-foreigners"],
    citations: [
      {
        name: "China Railway 12306 English FAQ",
        url: "https://www.12306.cn/en/faq.html",
        publisher: "China State Railway Group",
        publishedAt: "2026-08-13",
      },
    ],
    conversionTitle: "Choose the connection around your real arrival day.",
    conversionDescription:
      "Share your dates, Chengdu hotel, luggage and walking needs. We will compare the live transport options and build the mountain arrival around your party.",
    conversionLabel: "Plan Chengdu and Jiuzhaigou",
  }),
  commercialArticle({
    slug: "jiuzhaigou-altitude-walking-accessibility",
    publishedAt: "2026-08-13",
    title: "Jiuzhaigou Altitude, Walking and Accessibility: Is It Right for You?",
    dek: "Understand park shuttles, boardwalks, steps, altitude and reduced-mobility limits before deciding whether Jiuzhaigou fits your party.",
    excerpt:
      "An honest Jiuzhaigou accessibility guide covering altitude, walking, seniors, wheelchairs, park transport and route adaptation.",
    category: "Nature",
    tags: ["family-travel", "slow-travel", "photography", "private-guides"],
    readingTime: "13 min read",
    eyebrow: "Know the physical reality",
    hero: commercialHeroImages.jiuzhaigouAccessibility,
    gallery: [
      {
        src: "/tours/chengdu-pandas-jiuzhaigou/gallery-03.webp",
        alt: "Jiuzhaigou lake and forest seen from a park walking route",
        width: 1200,
        height: 800,
      },
      {
        src: "/tours/chengdu-pandas-jiuzhaigou/gallery-06.webp",
        alt: "Waterfalls and boardwalk scenery inside Jiuzhaigou",
        width: 1200,
        height: 800,
      },
      {
        src: "/tours/chengdu-pandas-jiuzhaigou/gallery-12.webp",
        alt: "Mountain forest surrounding the lakes of Jiuzhaigou",
        width: 1200,
        height: 800,
      },
    ],
    seoTitle: "Jiuzhaigou Altitude, Walking & Accessibility Guide",
    seoDescription:
      "Assess Jiuzhaigou altitude, walking, steps, park shuttles and wheelchair limits before choosing a private Chengdu and Jiuzhaigou tour.",
    keywords: [
      "Jiuzhaigou altitude",
      "Jiuzhaigou walking difficulty",
      "Jiuzhaigou accessibility",
      "Jiuzhaigou for seniors",
    ],
    destinations: ["jiuzhaigou", "chengdu"],
    tours: ["chengdu-pandas-jiuzhaigou-private-7-day-tour"],
    experiences: ["private-guides"],
    articles: ["chengdu-to-jiuzhaigou-transport", "chengdu-jiuzhaigou-7-day-itinerary"],
    citations: [
      {
        name: "Jiuzhaigou Valley Scenic and Historic Interest Area",
        url: "https://whc.unesco.org/en/list/637/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1992-01-01",
      },
    ],
    conversionTitle: "Design the park day around real mobility, not an age label.",
    conversionDescription:
      "Tell us the walking, stair and rest needs of every traveler. We will explain what can be reduced, what remains unavoidable and how the route can adapt.",
    conversionLabel: "Check My Jiuzhaigou Fit",
  }),
  commercialArticle({
    slug: "how-difficult-is-zhangjiajie",
    publishedAt: "2026-08-13",
    title: "How Difficult Is Zhangjiajie? Walking, Stairs, Cable Cars and Park Days",
    dek: "A realistic guide to the effort behind Zhangjiajie's famous views, including stairs, queues, elevators, cableways, hotel location and weather.",
    excerpt:
      "Assess Zhangjiajie walking difficulty and choose a private route that matches your knees, stamina, height comfort and available days.",
    category: "Nature",
    tags: ["zhangjiajie", "family-travel", "slow-travel", "photography"],
    readingTime: "13 min read",
    eyebrow: "Plan the mountain honestly",
    hero: commercialHeroImages.zhangjiajieDifficulty,
    gallery: [
      {
        src: "/tours/shanghai-zhangjiajie-floating-peaks/tianmen-cableway.webp",
        alt: "Cable car traveling toward Tianmen Mountain in Zhangjiajie",
        width: 1440,
        height: 1920,
      },
      {
        src: "/tours/shanghai-zhangjiajie-floating-peaks/golden-whip-stream.webp",
        alt: "Lower forest walking route beside Golden Whip Stream",
        width: 1920,
        height: 1440,
      },
      {
        src: "/tours/shanghai-zhangjiajie-floating-peaks/tianmen-mountain-cave.webp",
        alt: "Tianmen Cave and its long stairway in Zhangjiajie",
        width: 1179,
        height: 1609,
      },
    ],
    seoTitle: "How Difficult Is Zhangjiajie? Walking & Stairs Guide",
    seoDescription:
      "Understand Zhangjiajie walking, stairs, cable cars, elevators, queues and park days before choosing a private China mountain tour.",
    keywords: [
      "how difficult is Zhangjiajie",
      "Zhangjiajie walking difficulty",
      "Zhangjiajie stairs",
      "Zhangjiajie for seniors",
    ],
    destinations: ["zhangjiajie", "shanghai"],
    tours: [
      "shanghai-zhangjiajie-floating-peaks",
      "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    ],
    experiences: ["private-guides"],
    articles: ["where-to-stay-in-zhangjiajie", "shanghai-zhangjiajie-8-day-itinerary"],
    citations: [
      {
        name: "Wulingyuan Scenic and Historic Interest Area",
        url: "https://whc.unesco.org/en/list/640/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1992-01-01",
      },
    ],
    conversionTitle: "Build Zhangjiajie around the hardest traveler in your party.",
    conversionDescription:
      "Share walking distance, stair comfort and any fear of heights. We will compare the lift-assisted routes and keep optional effort genuinely optional.",
    conversionLabel: "Plan My Zhangjiajie Route",
  }),
  commercialArticle({
    slug: "jiuzhaigou-or-zhangjiajie",
    publishedAt: "2026-08-13",
    title: "Jiuzhaigou or Zhangjiajie: Which China Nature Destination Should You Choose?",
    dek: "Compare landscape, walking, altitude, transport, weather and route fit before adding one of China's defining nature destinations.",
    excerpt:
      "A decision guide for choosing Jiuzhaigou or Zhangjiajie based on scenery, effort, family fit, photography and private-tour logistics.",
    category: "Nature",
    tags: ["zhangjiajie", "photography", "family-travel", "first-time-china"],
    readingTime: "14 min read",
    eyebrow: "Choose your nature chapter",
    hero: commercialHeroImages.natureComparison,
    gallery: [
      {
        src: "/home/jiuzhaigou-five-flower-lake.webp",
        alt: "Clear turquoise water and forest at Five Flower Lake in Jiuzhaigou",
        width: 1920,
        height: 1200,
      },
      {
        src: "/tours/shanghai-zhangjiajie-floating-peaks/wulingyuan-peaks.webp",
        alt: "Vertical sandstone pillars in Wulingyuan, Zhangjiajie",
        width: 1440,
        height: 1920,
      },
      {
        src: "/tours/chengdu-pandas-jiuzhaigou/gallery-01.webp",
        alt: "A forest-framed lake in Jiuzhaigou National Park",
        width: 1200,
        height: 800,
      },
    ],
    seoTitle: "Jiuzhaigou or Zhangjiajie: Which Should You Visit?",
    seoDescription:
      "Compare Jiuzhaigou and Zhangjiajie by scenery, walking, altitude, weather, families, photography and private-tour route options.",
    keywords: [
      "Jiuzhaigou or Zhangjiajie",
      "Jiuzhaigou vs Zhangjiajie",
      "best nature destination China",
      "China nature private tour",
    ],
    destinations: ["jiuzhaigou", "zhangjiajie"],
    tours: [
      "chengdu-pandas-jiuzhaigou-private-7-day-tour",
      "shanghai-zhangjiajie-floating-peaks",
      "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    ],
    experiences: ["private-guides"],
    articles: ["jiuzhaigou-altitude-walking-accessibility", "how-difficult-is-zhangjiajie"],
    citations: [
      {
        name: "Jiuzhaigou Valley Scenic and Historic Interest Area",
        url: "https://whc.unesco.org/en/list/637/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1992-01-01",
      },
      {
        name: "Wulingyuan Scenic and Historic Interest Area",
        url: "https://whc.unesco.org/en/list/640/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1992-01-01",
      },
    ],
    conversionTitle: "Choose the landscape that belongs in your wider route.",
    conversionDescription:
      "Share your month, flights, walking comfort and visual priorities. We will recommend the stronger nature chapter and explain the trade-offs.",
    conversionLabel: "Compare Nature Routes",
  }),
  commercialArticle({
    slug: "china-tours-with-pandas",
    publishedAt: "2026-08-13",
    title: "China Tours with Pandas: Which Route Should You Choose?",
    dek: "Compare four private panda routes by trip length, destination mix, transport, walking and the kind of China journey you want after Chengdu.",
    excerpt:
      "Choose between 5-day, 7-day and two 11-day private China panda tours with a clear view of each route's value and trade-offs.",
    category: "Family Travel",
    tags: ["chengdu", "pandas", "family-travel", "first-time-china"],
    readingTime: "14 min read",
    eyebrow: "Compare panda tour routes",
    hero: commercialHeroImages.pandaTours,
    gallery: [
      {
        src: "/journal/2026-08-07/chengdu-panda-close-view.webp",
        alt: "A giant panda walking through a wooded Chengdu enclosure",
        width: 1800,
        height: 1200,
      },
      {
        src: "/tours/chengdu-pandas/day-food.webp",
        alt: "Sichuan food experience on a private Chengdu journey",
        width: 2000,
        height: 2667,
      },
      {
        src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/zhangjiajie-08.webp",
        alt: "Zhangjiajie sandstone scenery on a longer panda and nature route",
        width: 1600,
        height: 1067,
      },
    ],
    seoTitle: "China Tours with Pandas: Compare 4 Private Routes",
    seoDescription:
      "Compare four private China panda tours: 5 days in Chengdu, 7 days with Jiuzhaigou, or 11-day classic and southwest routes.",
    keywords: [
      "China tours with pandas",
      "China panda tour",
      "private panda tour Chengdu",
      "best China tour with pandas",
    ],
    destinations: ["chengdu", "jiuzhaigou"],
    tours: [
      "chengdu-pandas-sichuan-table",
      "chengdu-pandas-jiuzhaigou-private-7-day-tour",
      "beijing-xian-chengdu-shanghai-private-11-day-tour",
      "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    ],
    experiences: ["pandas", "food", "private-guides"],
    articles: ["chengdu-panda-base-tickets-foreigners", "how-many-days-in-chengdu-itinerary"],
    citations: [
      {
        name: "Chengdu Research Base of Giant Panda Breeding",
        url: "https://www.panda.org.cn/en/",
        publisher: "Chengdu Research Base of Giant Panda Breeding",
        publishedAt: "2026-08-13",
      },
    ],
    conversionTitle: "Make pandas the beginning of a coherent China journey.",
    conversionDescription:
      "Tell us your available nights, flights, party and priorities. We will identify which panda route fits and remove the stops that do not add value.",
    conversionLabel: "Choose My Panda Tour",
  }),
  commercialArticle({
    slug: "9-days-or-11-days-in-china",
    publishedAt: "2026-08-13",
    title: "9 Days or 11 Days in China? Compare Two First-Time Private Tour Routes",
    dek: "Decide whether to keep a focused Beijing-Xi'an-Shanghai route or add Chengdu and pandas, with honest transfer and pacing trade-offs.",
    excerpt:
      "A practical 9-day versus 11-day China itinerary comparison for first-time visitors choosing a private route.",
    category: "Travel Guides",
    tags: ["beijing", "xian", "chengdu", "shanghai", "first-time-china"],
    readingTime: "13 min read",
    eyebrow: "Compare first-China routes",
    hero: commercialHeroImages.nineOrElevenDays,
    gallery: [
      {
        src: "/tours/first-china-beautifully-paced/xian-terracotta-army-group.webp",
        alt: "International travelers viewing the Terracotta Army in Xi'an",
        width: 1920,
        height: 1440,
      },
      {
        src: "/home/chengdu-panda.webp",
        alt: "A giant panda representing the Chengdu chapter of an 11-day route",
        width: 1920,
        height: 1200,
      },
      {
        src: "/tours/first-china-beautifully-paced/shanghai-huangpu-sunset.webp",
        alt: "Shanghai skyline at sunset at the end of a first China route",
        width: 1439,
        height: 1920,
      },
    ],
    seoTitle: "9 Days or 11 Days in China? Compare 2 Private Tours",
    seoDescription:
      "Compare 9-day and 11-day private China routes for first-time visitors, including cities, pandas, pace, transfers and who each itinerary suits.",
    keywords: [
      "9 days or 11 days in China",
      "9 day China itinerary",
      "11 day China itinerary",
      "first time China private tour",
    ],
    destinations: ["beijing", "xian", "chengdu", "shanghai"],
    tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
    experiences: ["private-guides", "train-travel", "pandas"],
    articles: [
      "9-day-beijing-xian-shanghai-itinerary",
      "11-day-beijing-xian-chengdu-shanghai-itinerary",
    ],
    citations: [
      {
        name: "China Railway 12306 English FAQ",
        url: "https://www.12306.cn/en/faq.html",
        publisher: "China State Railway Group",
        publishedAt: "2026-08-13",
      },
    ],
    conversionTitle: "Choose the route that deserves your available nights.",
    conversionDescription:
      "Share your flights, priorities and pace. We will show whether Chengdu adds enough value or whether a deeper three-city route is the better trip.",
    conversionLabel: "Compare My 9- and 11-Day Options",
  }),
  commercialArticle({
    slug: "private-china-tour-vs-group-tour",
    title: "Private China Tour vs Group Tour: Which Is Right for You?",
    dek: "Compare pace, guide access, hotels, transport, flexibility and total value before choosing how to travel through China.",
    excerpt:
      "An honest comparison of private and group China tours for couples, families, older travelers and first-time visitors.",
    category: "Travel Guides",
    tags: ["first-time-china", "private-guides", "family-travel", "luxury-travel"],
    readingTime: "11 min read",
    eyebrow: "Choose your travel style",
    hero: commercialHeroImages.privateVsGroup,
    gallery: [
      destinationAsset.xianTerracotta,
      destinationAsset.shanghaiSkyline,
      destinationAsset.chengduTeaHouse,
    ],
    seoTitle: "Private China Tour vs Group Tour: Full Comparison",
    seoDescription:
      "Compare private China tours and group tours by price, pace, hotels, guides, transport and flexibility to choose the right China trip.",
    keywords: [
      "private China tour vs group tour",
      "China private tour or group tour",
      "are private China tours worth it",
      "best way to tour China",
    ],
    destinations: ["beijing", "xian", "shanghai"],
    tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
    experiences: ["private-guides", "train-travel"],
    articles: ["private-china-tour-cost-2026", "10-day-china-itinerary-first-time-visitors"],
    conversionTitle: "Choose the travel format that fits your people, not a generic label.",
    conversionDescription:
      "Share your dates, group size and priorities. We will explain where private support adds value and where independent time may work better.",
    conversionLabel: "Compare My Options",
  }),
  commercialArticle({
    slug: "11-day-beijing-xian-chengdu-shanghai-itinerary",
    title: "11-Day Beijing, Xi'an, Chengdu and Shanghai Itinerary",
    dek: "A realistic first-China route connecting the Great Wall, Terracotta Warriors, giant pandas and Shanghai without turning every day into a transfer.",
    excerpt:
      "Plan eleven balanced days across four defining China cities with practical rail, flight and hotel logic.",
    category: "Travel Guides",
    tags: ["beijing", "xian", "chengdu", "shanghai", "first-time-china", "train-travel"],
    readingTime: "14 min read",
    eyebrow: "Four-city China itinerary",
    hero: commercialHeroImages.fourCity,
    gallery: [
      destinationAsset.chengduPanda,
      destinationAsset.shanghaiSkyline,
      destinationAsset.xianTerracotta,
    ],
    seoTitle: "11-Day Beijing Xi'an Chengdu Shanghai Itinerary",
    seoDescription:
      "Plan an 11-day Beijing, Xi'an, Chengdu and Shanghai itinerary with realistic city stays, high-speed rail, pandas and private tour options.",
    keywords: [
      "11 day China itinerary",
      "Beijing Xi'an Chengdu Shanghai itinerary",
      "China itinerary with pandas",
      "four city China tour",
    ],
    destinations: ["beijing", "xian", "chengdu", "shanghai"],
    tours: ["beijing-xian-chengdu-shanghai-private-11-day-tour"],
    experiences: ["private-guides", "train-travel", "pandas"],
    articles: ["10-day-china-itinerary-first-time-visitors", "private-china-tour-cost-2026"],
    conversionTitle: "Make this four-city route fit your flights and preferred pace.",
    conversionDescription:
      "Tell us your dates, hotel expectations and who is traveling. We will adjust the city nights, transport and private sightseeing around your group.",
    conversionLabel: "Request This 11-Day Route",
  }),
  commercialArticle({
    slug: "chengdu-jiuzhaigou-7-day-itinerary",
    title: "Chengdu and Jiuzhaigou Itinerary: 7 Days in Sichuan",
    dek: "Combine giant pandas, Chengdu food culture and Jiuzhaigou's alpine lakes with a transport plan that respects distance and altitude.",
    excerpt:
      "A seven-day Sichuan itinerary with Chengdu, pandas, regional food and a comfortably planned Jiuzhaigou stay.",
    category: "Travel Guides",
    tags: ["chengdu", "pandas", "family-travel", "photography", "food"],
    readingTime: "13 min read",
    eyebrow: "Sichuan nature itinerary",
    hero: commercialHeroImages.chengduJiuzhaigou,
    gallery: [
      destinationAsset.chengduPanda,
      destinationAsset.chengduTeaHouse,
      destinationAsset.zhangjiajieForest,
    ],
    seoTitle: "Chengdu and Jiuzhaigou 7-Day Itinerary",
    seoDescription:
      "Plan seven days in Chengdu and Jiuzhaigou with panda timing, Sichuan food, mountain transport, hotel areas and a private tour route.",
    keywords: [
      "Chengdu Jiuzhaigou itinerary",
      "7 day Sichuan itinerary",
      "Chengdu to Jiuzhaigou tour",
      "pandas and Jiuzhaigou trip",
    ],
    destinations: ["chengdu", "jiuzhaigou"],
    tours: ["chengdu-pandas-jiuzhaigou-private-7-day-tour", "chengdu-pandas-sichuan-table"],
    experiences: ["pandas", "food", "private-guides"],
    articles: ["how-many-days-in-chengdu-itinerary", "chengdu-panda-base-tickets-foreigners"],
    conversionTitle: "Connect Chengdu and Jiuzhaigou without losing days to weak logistics.",
    conversionDescription:
      "Share your travel month and flight plan. We will check the most sensible connection, mountain pacing and hotel sequence for your dates.",
    conversionLabel: "Plan My Sichuan Journey",
  }),
  commercialArticle({
    slug: "shanghai-zhangjiajie-8-day-itinerary",
    title: "Shanghai and Zhangjiajie Itinerary: How to Plan 8 Days",
    dek: "Pair Shanghai's waterfront and neighborhoods with Zhangjiajie's sandstone peaks through one carefully managed domestic connection.",
    excerpt:
      "An eight-day city-and-nature itinerary with Shanghai, Zhangjiajie, Wulingyuan and realistic flight planning.",
    category: "Travel Guides",
    tags: ["shanghai", "zhangjiajie", "photography", "family-travel", "first-time-china"],
    readingTime: "13 min read",
    eyebrow: "City and mountain itinerary",
    hero: commercialHeroImages.shanghaiZhangjiajie,
    gallery: [
      destinationAsset.shanghaiSkyline,
      destinationAsset.zhangjiajieSpirePortrait,
      destinationAsset.jiuzhaigouLake,
    ],
    seoTitle: "Shanghai and Zhangjiajie 8-Day Itinerary",
    seoDescription:
      "Plan eight days in Shanghai and Zhangjiajie with flight timing, Wulingyuan hotels, national park days and a private China tour option.",
    keywords: [
      "Shanghai Zhangjiajie itinerary",
      "8 day China itinerary Shanghai Zhangjiajie",
      "Shanghai to Zhangjiajie tour",
      "Zhangjiajie itinerary from Shanghai",
    ],
    destinations: ["shanghai", "zhangjiajie"],
    tours: ["shanghai-zhangjiajie-floating-peaks"],
    experiences: ["private-guides"],
    articles: ["where-to-stay-in-zhangjiajie", "shanghai-pudong-hongqiao-airport-guide"],
    conversionTitle: "Build the Shanghai–Zhangjiajie connection around real flight times.",
    conversionDescription:
      "Tell us your arrival airport, dates and walking preferences. We will shape the city stay, mountain hotel and park days around them.",
    conversionLabel: "Request the 8-Day Plan",
  }),
  commercialArticle({
    slug: "beijing-xian-itinerary-how-many-days",
    title: "Beijing and Xi'an Itinerary: How Many Days Do You Need?",
    dek: "Plan the right number of nights for the Great Wall, Forbidden City, Terracotta Warriors and the high-speed train between China's historic capitals.",
    excerpt:
      "A practical five-, six- or seven-day Beijing and Xi'an itinerary for travelers who value history without rushing.",
    category: "Travel Guides",
    tags: ["beijing", "xian", "first-time-china", "train-travel", "family-travel"],
    readingTime: "12 min read",
    eyebrow: "Historic capitals itinerary",
    hero: commercialHeroImages.beijingXian,
    gallery: [
      destinationAsset.xianTerracotta,
      destinationAsset.chengduTeaHouse,
      destinationAsset.shanghaiSkyline,
    ],
    seoTitle: "Beijing and Xi'an Itinerary: 5, 6 or 7 Days",
    seoDescription:
      "Compare five, six and seven-day Beijing and Xi'an itineraries with Great Wall timing, Terracotta Warriors, train travel and private tour options.",
    keywords: [
      "Beijing Xi'an itinerary",
      "how many days Beijing and Xi'an",
      "Beijing Xi'an 6 day tour",
      "Beijing to Xi'an itinerary",
    ],
    destinations: ["beijing", "xian"],
    tours: [
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      "beijing-great-wall-private-5-day-tour",
    ],
    experiences: ["private-guides", "train-travel"],
    articles: [
      "mutianyu-badaling-jinshanling-great-wall",
      "terracotta-army-tickets-foreign-visitors",
    ],
    conversionTitle: "Give both historic capitals enough time to feel distinct.",
    conversionDescription:
      "Share your arrival city, departure city and walking preferences. We will recommend the right sequence and number of nights.",
    conversionLabel: "Plan Beijing and Xi'an",
  }),
  commercialArticle({
    slug: "best-time-to-visit-china",
    title: "Best Time to Visit China: Weather, Crowds and Regional Seasons",
    dek: "Choose your travel month by region, not by one national weather summary, with practical guidance for China's major cities and landscapes.",
    excerpt:
      "A regional China weather and crowd guide for Beijing, Shanghai, Sichuan, Jiuzhaigou and Zhangjiajie.",
    category: "Travel Guides",
    tags: ["first-time-china", "spring", "autumn", "family-travel", "photography"],
    readingTime: "15 min read",
    eyebrow: "China season planner",
    hero: commercialHeroImages.bestTime,
    gallery: [
      destinationAsset.jiuzhaigouLake,
      destinationAsset.zhangjiajieForest,
      destinationAsset.shanghaiSkyline,
    ],
    seoTitle: "Best Time to Visit China: Month-by-Month Guide",
    seoDescription:
      "Find the best time to visit China by region, with weather, crowds and seasonal advice for Beijing, Shanghai, Chengdu, Jiuzhaigou and Zhangjiajie.",
    keywords: [
      "best time to visit China",
      "China weather by month",
      "best month to travel to China",
      "China seasons travel guide",
    ],
    destinations: ["beijing", "shanghai", "chengdu", "jiuzhaigou", "zhangjiajie"],
    tours: [
      "first-china-beautifully-paced",
      "chengdu-pandas-jiuzhaigou-private-7-day-tour",
      "shanghai-zhangjiajie-floating-peaks",
    ],
    experiences: ["private-guides"],
    articles: ["china-golden-week-travel-2026", "10-day-china-itinerary-first-time-visitors"],
    conversionTitle: "Choose the route that works for your travel month.",
    conversionDescription:
      "Tell us when you can travel and what matters most. We will suggest destinations that suit the season and explain the trade-offs clearly.",
    conversionLabel: "Match My Dates to a Route",
  }),
  commercialArticle({
    slug: "how-to-choose-private-china-tour-company",
    title: "How to Choose a Private China Tour Company",
    dek: "Use licensing, local operations, guide standards, quotation clarity and emergency support to assess who will actually deliver your trip.",
    excerpt:
      "A due-diligence checklist for comparing private China tour operators before paying a deposit.",
    category: "Luxury Travel",
    tags: ["private-guides", "luxury-travel", "first-time-china", "family-travel"],
    readingTime: "12 min read",
    eyebrow: "Choose a China operator",
    hero: commercialHeroImages.chooseCompany,
    gallery: [
      destinationAsset.shanghaiSkyline,
      destinationAsset.chengduTeaHouse,
      destinationAsset.xianTerracotta,
    ],
    seoTitle: "How to Choose a Private China Tour Company",
    seoDescription:
      "Compare private China tour companies using licensing, local operations, guide standards, quotation detail, payment terms and traveler support.",
    keywords: [
      "best private China tour company",
      "how to choose China tour operator",
      "private China travel agency",
      "China tour company reviews checklist",
    ],
    tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
    experiences: ["private-guides"],
    articles: ["private-china-tour-cost-2026", "private-china-tour-vs-group-tour"],
    conversionTitle: "Ask us the same hard questions you ask every operator.",
    conversionDescription:
      "We will explain who operates your trip, what the proposal includes and which details remain subject to date-specific confirmation.",
    conversionLabel: "Speak With Our China Team",
  }),
  commercialArticle({
    slug: "is-private-china-tour-worth-it",
    title: "Is a Private China Tour Worth It? An Honest Value Guide",
    dek: "Understand when private guiding, vehicles and local support materially improve a China trip—and when you may not need them every day.",
    excerpt:
      "A balanced value assessment for travelers deciding whether a private China tour justifies the additional cost.",
    category: "Luxury Travel",
    tags: ["private-guides", "luxury-travel", "first-time-china", "family-travel"],
    readingTime: "11 min read",
    eyebrow: "Private tour value",
    hero: commercialHeroImages.privateWorth,
    gallery: [
      destinationAsset.zhangjiajieForest,
      destinationAsset.xianTerracotta,
      destinationAsset.shanghaiSkyline,
    ],
    seoTitle: "Is a Private China Tour Worth It? Honest Guide",
    seoDescription:
      "Decide whether a private China tour is worth it by comparing time, guide access, transport, family needs, flexibility and total trip value.",
    keywords: [
      "is a private China tour worth it",
      "private China tour benefits",
      "China private guide worth it",
      "private tour China value",
    ],
    tours: ["first-china-beautifully-paced", "chengdu-chongqing-zhangjiajie-private-11-day-tour"],
    experiences: ["private-guides", "train-travel"],
    articles: ["private-china-tour-vs-group-tour", "private-china-tour-cost-2026"],
    conversionTitle: "Use private support where it creates real value.",
    conversionDescription:
      "We can combine guided days, managed transfers and independent time instead of selling the same service pattern every day.",
    conversionLabel: "Design the Right Support",
  }),
  commercialArticle({
    slug: "china-family-itinerary-10-to-14-days",
    title: "China Itinerary for Families: 10 to 14 Days",
    dek: "Build a family China trip around pandas, the Great Wall, hands-on culture, sensible transfers and enough downtime for children and parents.",
    excerpt:
      "Flexible 10-, 12- and 14-day China routes for families, with pacing, rooms, food and transport decisions explained.",
    category: "Family Travel",
    tags: ["family-travel", "first-time-china", "pandas", "beijing", "chengdu"],
    readingTime: "15 min read",
    eyebrow: "Family China itinerary",
    hero: commercialHeroImages.family,
    gallery: [
      destinationAsset.chengduPanda,
      destinationAsset.shanghaiSkyline,
      destinationAsset.chengduTeaHouse,
    ],
    seoTitle: "China Family Itinerary: 10, 12 and 14 Days",
    seoDescription:
      "Plan a 10- to 14-day China family itinerary with pandas, the Great Wall, realistic transfers, family rooms, food choices and private tour options.",
    keywords: [
      "China itinerary with kids",
      "China family itinerary",
      "family tour China 10 days",
      "China with children itinerary",
    ],
    destinations: ["beijing", "xian", "chengdu", "shanghai"],
    tours: ["beijing-xian-chengdu-shanghai-private-11-day-tour", "chengdu-pandas-sichuan-table"],
    experiences: ["pandas", "private-guides", "food"],
    articles: [
      "chengdu-panda-base-tickets-foreigners",
      "10-day-china-itinerary-first-time-visitors",
    ],
    conversionTitle: "Plan the family rhythm before choosing the hotels and trains.",
    conversionDescription:
      "Share children's ages, room needs and energy levels. We will recommend a route with realistic days and age-appropriate experiences.",
    conversionLabel: "Plan Our Family Trip",
  }),
  commercialArticle({
    slug: "china-itinerary-older-travelers-10-days",
    publishedAt: "2026-08-18",
    title: "A 12-Day China Itinerary at an Easier Pace",
    dek: "See Beijing, Xi'an and Shanghai through a measured 12-day route designed for more freedom, meaningful days and private support shaped around you.",
    excerpt:
      "A considered 12-day route for a new season of travel, with cultural depth, recovery time and a measured daily rhythm, including families planning with parents.",
    category: "Travel Guides",
    tags: ["senior-travel", "first-time-china", "beijing", "xian", "shanghai", "private-guides"],
    readingTime: "24 min read",
    eyebrow: "China at an easier pace",
    hero: firstChinaAsset.beijingGreatWallCouple,
    gallery: [
      firstChinaAsset.xianTerracottaGroup,
      firstChinaAsset.shanghaiWaterfrontGroup,
      beijingUnhurriedAsset.privateService,
    ],
    seoTitle: "China Itinerary for Seniors: 12 Days at an Easier Pace",
    seoDescription:
      "Plan a 12-day China itinerary for seniors through Beijing, Xi'an and Shanghai, with realistic walking, recovery time and private support.",
    keywords: [
      "China itinerary for seniors",
      "China itinerary for older travelers",
      "12 day China itinerary for seniors",
      "multigenerational China travel",
      "easy paced China itinerary",
      "senior friendly China travel",
    ],
    destinations: ["beijing", "xian", "shanghai"],
    tours: ["china-at-an-easier-pace-12-day-private-tour"],
    experiences: ["private-guides", "train-travel"],
    articles: [
      "first-trip-to-china-planning-guide",
      "how-many-days-beijing-xian-shanghai",
      "mutianyu-great-wall-walking-cable-car",
      "china-high-speed-train-foreigners",
      "terracotta-army-tickets-foreign-visitors",
    ],
    conversionTitle: "Travel with more freedom, on your own terms.",
    conversionDescription:
      "Share your dates, travelers, preferred pace, hotels and practical support needs. An AVIORA China specialist will shape the journey around what you want this next chapter to feel like.",
    conversionLabel: "Shape This Journey Around Your Pace",
    conversionHref: "/start-planning?source=journal-china-easier-pace",
    sourcePath: "content/journal/articles/2026-08-18-china-itinerary-older-travelers-12-days.md",
  }),
  commercialArticle({
    slug: "how-many-days-in-china-7-10-14-day-itineraries",
    title: "How Many Days Do You Need in China? 7, 10 and 14-Day Routes",
    dek: "Choose a realistic trip length by counting meaningful destination days, not simply adding cities to a map.",
    excerpt:
      "Compare seven-, ten- and fourteen-day China itineraries for first visits, nature extensions, families and slower travel.",
    category: "Travel Guides",
    tags: ["first-time-china", "family-travel", "train-travel", "private-guides"],
    readingTime: "14 min read",
    eyebrow: "Choose your trip length",
    hero: commercialHeroImages.tripLength,
    gallery: [
      destinationAsset.zhangjiajieForest,
      destinationAsset.jiuzhaigouLake,
      destinationAsset.xianTerracotta,
    ],
    seoTitle: "How Many Days in China? 7, 10 and 14-Day Plans",
    seoDescription:
      "Decide how many days you need in China with realistic 7-, 10- and 14-day itineraries, city combinations, travel times and private tour ideas.",
    keywords: [
      "how many days in China",
      "7 day China itinerary",
      "10 day China itinerary",
      "14 day China itinerary",
    ],
    destinations: ["beijing", "xian", "chengdu", "shanghai", "zhangjiajie"],
    tours: [
      "first-china-beautifully-paced",
      "beijing-xian-chengdu-shanghai-private-11-day-tour",
      "chengdu-chongqing-zhangjiajie-private-11-day-tour",
    ],
    experiences: ["private-guides", "train-travel"],
    articles: ["10-day-china-itinerary-first-time-visitors", "best-time-to-visit-china"],
    conversionTitle: "Choose the trip length before squeezing in destinations.",
    conversionDescription:
      "Tell us your available nights and priorities. We will show what fits comfortably, what requires flights and what should wait for another trip.",
    conversionLabel: "Shape My China Itinerary",
  }),
  commercialArticle({
    slug: "what-is-included-private-china-tour",
    title: "What Is Included in a Private China Tour?",
    dek: "Understand guides, vehicles, hotels, transport, tickets, meals, operating support and exclusions before comparing private China proposals.",
    excerpt:
      "A line-by-line guide to private China tour inclusions, exclusions and the questions to ask before booking.",
    category: "Luxury Travel",
    tags: ["private-guides", "luxury-travel", "first-time-china", "family-travel"],
    readingTime: "12 min read",
    eyebrow: "Understand your proposal",
    hero: commercialHeroImages.inclusions,
    gallery: [
      destinationAsset.shanghaiSkyline,
      destinationAsset.chengduTeaHouse,
      destinationAsset.xianTerracotta,
    ],
    seoTitle: "What Is Included in a Private China Tour?",
    seoDescription:
      "Learn what a private China tour may include: hotels, guides, vehicles, trains, flights, tickets, meals, support and clearly stated exclusions.",
    keywords: [
      "what is included private China tour",
      "China tour inclusions",
      "private China tour package includes",
      "China tour quotation checklist",
    ],
    tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
    experiences: ["private-guides", "train-travel"],
    articles: ["private-china-tour-cost-2026", "how-to-choose-private-china-tour-company"],
    conversionTitle: "Receive a proposal that states the important inclusions clearly.",
    conversionDescription:
      "Share your dates, route and hotel expectations. We will explain the service assumptions, exclusions and date-dependent items before confirmation.",
    conversionLabel: "Request a Clear Proposal",
  }),
  commercialArticle({
    slug: "china-honeymoon-itinerary-10-to-14-days",
    title: "China Honeymoon Itinerary: Thoughtful 10 to 14-Day Routes",
    dek: "Pair iconic China with private moments, comfortable transfers and enough unplanned time to enjoy the trip together.",
    excerpt:
      "A practical China honeymoon guide for couples choosing between Beijing, Xi'an, Chengdu, Shanghai and a scenic extension.",
    category: "Luxury Travel",
    tags: ["honeymoon", "couples", "first-time-china", "luxury-travel", "private-guides"],
    readingTime: "14 min read",
    eyebrow: "Plan a China honeymoon",
    hero: {
      src: "/tours/first-china-beautifully-paced/beijing-great-wall-couple.webp",
      alt: "A couple walking along the Great Wall in the Beijing mountains",
      width: 1280,
      height: 1920,
      objectPosition: "50% 48%",
    },
    gallery: [
      {
        src: "/tours/first-china-beautifully-paced/shanghai-pudong-couple-night.webp",
        alt: "A couple taking in Shanghai's illuminated skyline at night",
        width: 1440,
        height: 1920,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/first-china-beautifully-paced/shanghai-bund-night.webp",
        alt: "Shanghai's historic Bund glowing after dark",
        width: 1920,
        height: 1280,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-costume-encounter.webp",
        alt: "A cultural encounter in Beijing's Temple of Heaven park",
        width: 1920,
        height: 1280,
        objectPosition: "50% 48%",
      },
    ],
    seoTitle: "China Honeymoon Itinerary: 10 to 14 Days",
    seoDescription:
      "Plan a China honeymoon in 10 to 14 days with romantic city stays, private guides, comfortable rail transfers and a realistic day-by-day route.",
    keywords: [
      "China honeymoon itinerary",
      "China honeymoon 10 days",
      "China honeymoon 14 days",
      "best places in China for couples",
      "private China honeymoon tour",
    ],
    destinations: ["beijing", "xian", "shanghai", "chengdu", "zhangjiajie"],
    tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
    experiences: ["private-guides", "train-travel", "food"],
    articles: ["private-china-tour-cost-2026", "how-many-days-in-china-7-10-14-day-itineraries"],
    conversionTitle: "Turn the places you love into a honeymoon that feels like yours.",
    conversionDescription:
      "Tell us your dates, celebration plans and preferred pace. We will shape private sightseeing, hotels and travel time around the two of you.",
    conversionLabel: "Plan Our China Honeymoon",
  }),
  commercialArticle({
    slug: "how-to-travel-between-beijing-xian-chengdu-shanghai",
    title: "How to Travel Between Beijing, Xi'an, Chengdu and Shanghai",
    dek: "Choose high-speed rail or domestic flights by journey time, station location, luggage and the sightseeing day you protect.",
    excerpt:
      "A clear transport guide for the classic Beijing, Xi'an, Chengdu and Shanghai route, with practical connection logic for foreign visitors.",
    category: "Train Travel",
    tags: ["train-travel", "beijing", "xian", "chengdu", "shanghai", "first-time-china"],
    readingTime: "12 min read",
    eyebrow: "Connect China's classic cities",
    hero: {
      src: "/tours/first-china-beautifully-paced/shanghai-bicycle-ride.webp",
      alt: "Travelers riding bicycles through a Shanghai neighborhood",
      width: 1440,
      height: 1920,
      objectPosition: "50% 48%",
    },
    gallery: [
      {
        src: "/tours/chengdu-pandas/day-rail.webp",
        alt: "A high-speed train journey included in a Chengdu travel route",
        width: 1536,
        height: 1024,
        objectPosition: "50% 48%",
      },
      {
        src: "/journal/2026-08-08/china-golden-week-high-speed-rail-hero.webp",
        alt: "Fuxing high-speed trains at a modern Chinese railway station",
        width: 1800,
        height: 1200,
        objectPosition: "50% 52%",
      },
      {
        src: "/tours/first-china-beautifully-paced/shanghai-market-visit.webp",
        alt: "A guided market visit in Shanghai",
        width: 1440,
        height: 1920,
        objectPosition: "50% 48%",
      },
    ],
    seoTitle: "Beijing to Xi'an, Chengdu and Shanghai: Transport Guide",
    seoDescription:
      "Learn how to travel between Beijing, Xi'an, Chengdu and Shanghai by high-speed train or flight, including luggage, stations, timing and private transfers.",
    keywords: [
      "Beijing Xi'an Chengdu Shanghai transport",
      "China high speed train itinerary",
      "travel from Beijing to Xi'an",
      "Chengdu to Shanghai train or flight",
      "China train travel for foreigners",
    ],
    destinations: ["beijing", "xian", "chengdu", "shanghai"],
    tours: ["beijing-xian-chengdu-shanghai-private-11-day-tour", "first-china-beautifully-paced"],
    experiences: ["train-travel", "private-guides"],
    articles: [
      "china-high-speed-train-foreigners",
      "11-day-beijing-xian-chengdu-shanghai-itinerary",
    ],
    conversionTitle: "Make every transfer support the day you actually want.",
    conversionDescription:
      "Share your arrival airport, luggage and preferred pace. We will compare rail and flight sectors, then coordinate station or airport support.",
    conversionLabel: "Plan My City Connections",
  }),
  commercialArticle({
    slug: "china-travel-safety-for-foreign-visitors",
    title: "China Travel Safety for Foreign Visitors: Practical Advice",
    dek: "Prepare documents, connectivity, payments, transport and emergency contacts so your China trip feels confident and manageable.",
    excerpt:
      "A calm, practical China safety checklist for first-time international visitors, covering common friction points without exaggeration.",
    category: "Travel Guides",
    tags: ["first-time-china", "family-travel", "senior-travel", "travel-planning"],
    readingTime: "13 min read",
    eyebrow: "Prepare with confidence",
    hero: {
      src: "/tours/beijing-unhurried/hotel-room.webp",
      alt: "A comfortable hotel room prepared for travelers in Beijing",
      width: 2400,
      height: 1800,
      objectPosition: "50% 50%",
    },
    gallery: [
      {
        src: "/journal/2026-08-06/accommodation-registration-check-in.webp",
        alt: "International guests checking in with hotel staff in China",
        width: 1706,
        height: 1279,
        objectPosition: "50% 58%",
      },
      {
        src: "/journal/2026-08-07/china-sim-card-airport-counter-hero.webp",
        alt: "A tourist SIM card counter at Beijing Daxing International Airport",
        width: 1800,
        height: 1200,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/first-china-beautifully-paced/shanghai-street-food-group.webp",
        alt: "Travelers sharing a local food experience in Shanghai",
        width: 1440,
        height: 1920,
        objectPosition: "50% 48%",
      },
    ],
    seoTitle: "China Travel Safety Guide for Foreign Visitors",
    seoDescription:
      "Use this practical China travel safety checklist for documents, hotel registration, mobile connectivity, payments, transport, health and emergencies.",
    keywords: [
      "China travel safety for foreigners",
      "is China safe for tourists",
      "China travel tips first time visitors",
      "China emergency numbers tourists",
      "China travel checklist foreign visitors",
    ],
    destinations: ["beijing", "xian", "chengdu", "shanghai"],
    tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
    experiences: ["private-guides", "train-travel"],
    articles: [
      "china-accommodation-registration-foreigners",
      "china-sim-card-esim-internet-foreign-tourists",
      "china-mobile-payments-foreign-tourists",
    ],
    conversionTitle: "Travel with a local plan for the moments that matter.",
    conversionDescription:
      "Tell us who is traveling and what support you need. We will include arrival instructions, local contacts, transport help and practical preparation in your route.",
    conversionLabel: "Plan a Confident China Trip",
  }),
  commercialArticle({
    slug: "9-day-beijing-xian-shanghai-itinerary",
    title: "9-Day Beijing, Xi'an and Shanghai Itinerary: A Better First China Route",
    dek: "Move from imperial Beijing to Xi'an's archaeological depth and Shanghai's contemporary energy with a realistic nine-day rhythm.",
    excerpt:
      "A practical 9-day Beijing, Xi'an and Shanghai itinerary with city-night logic, rail planning and private support where it matters.",
    category: "Travel Guides",
    tags: ["beijing", "xian", "shanghai", "first-time-china", "train-travel"],
    readingTime: "13 min read",
    eyebrow: "The classic first-China route",
    hero: {
      src: "/tours/first-china-beautifully-paced/shanghai-temple-and-modern-city.webp",
      alt: "A Shanghai temple framed by the city's modern skyline",
      width: 1920,
      height: 1280,
      objectPosition: "50% 48%",
    },
    gallery: [
      {
        src: "/tours/xian-beijing-private-journey/day-03.webp",
        alt: "Xi'an's illuminated historic city atmosphere after dark",
        width: 1600,
        height: 1067,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/first-china-beautifully-paced/beijing-great-wall-wide.webp",
        alt: "The Great Wall crossing mountain ridges outside Beijing",
        width: 1920,
        height: 1280,
        objectPosition: "50% 46%",
      },
      {
        src: "/tours/first-china-beautifully-paced/shanghai-yuyuan-group.webp",
        alt: "Travelers exploring the gardens and lanes around Shanghai's Yuyuan area",
        width: 1920,
        height: 1280,
        objectPosition: "50% 48%",
      },
    ],
    seoTitle: "9-Day Beijing, Xi'an and Shanghai Itinerary",
    seoDescription:
      "Plan a realistic 9-day Beijing, Xi'an and Shanghai itinerary with the Great Wall, Terracotta Warriors, high-speed rail, hotels and private tour support.",
    keywords: [
      "9 day Beijing Xi'an Shanghai itinerary",
      "Beijing Xi'an Shanghai tour 9 days",
      "first China itinerary 9 days",
      "private Beijing Xi'an Shanghai tour",
    ],
    destinations: ["beijing", "xian", "shanghai"],
    tours: [
      "first-china-beautifully-paced",
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
    ],
    experiences: ["private-guides", "train-travel"],
    articles: [
      "11-day-beijing-xian-chengdu-shanghai-itinerary",
      "beijing-xian-itinerary-how-many-days",
    ],
    citations: [
      {
        name: "The Great Wall",
        url: "https://whc.unesco.org/en/list/438/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1987-01-01",
      },
      {
        name: "Mausoleum of the First Qin Emperor",
        url: "https://whc.unesco.org/en/list/441/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1987-01-01",
      },
    ],
    conversionTitle: "Make the classic route fit your flight times and energy.",
    conversionDescription:
      "Tell us your arrival city, dates, hotel expectations and walking comfort. We will adjust the nine-day framework before preparing a date-specific proposal.",
    conversionLabel: "Plan This 9-Day Route",
  }),
  commercialArticle({
    slug: "5-day-chengdu-leshan-itinerary",
    title: "5-Day Chengdu and Leshan Itinerary: Pandas, Tea and the Giant Buddha",
    dek: "Combine Chengdu's everyday culture with a considered Leshan day without treating Sichuan as a rushed add-on.",
    excerpt:
      "A five-day Chengdu and Leshan route for travelers who want pandas, food, tea-house life and one meaningful heritage excursion.",
    category: "Destinations",
    tags: ["chengdu", "leshan", "pandas", "food", "family-travel"],
    readingTime: "12 min read",
    eyebrow: "Sichuan in five days",
    hero: {
      src: "/tours/chengdu-pandas/day-leshan.webp",
      alt: "The Leshan Giant Buddha carved into the riverside cliff",
      width: 1536,
      height: 1024,
      objectPosition: "50% 48%",
    },
    gallery: [
      {
        src: "/tours/chengdu-pandas/day-panda-01.webp",
        alt: "A giant panda in a leafy Chengdu habitat",
        width: 1536,
        height: 1024,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/chengdu-pandas/day-tea.webp",
        alt: "A traditional tea-house moment in Chengdu",
        width: 1536,
        height: 1024,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/chengdu-pandas/gallery-city-01.webp",
        alt: "Chengdu street life during a private city walk",
        width: 2000,
        height: 2668,
        objectPosition: "50% 48%",
      },
    ],
    seoTitle: "5-Day Chengdu and Leshan Itinerary with Pandas",
    seoDescription:
      "Plan five days in Chengdu and Leshan with an early panda visit, Sichuan food, tea-house culture, the Giant Buddha and private transport options.",
    keywords: [
      "5 day Chengdu Leshan itinerary",
      "Chengdu Leshan Giant Buddha tour",
      "Chengdu pandas and Leshan itinerary",
      "Leshan day trip from Chengdu",
    ],
    destinations: ["chengdu", "leshan"],
    tours: ["chengdu-pandas-sichuan-table", "chengdu-chongqing-zhangjiajie-private-11-day-tour"],
    experiences: ["pandas", "food", "private-guides"],
    articles: ["how-many-days-in-chengdu-itinerary", "chengdu-panda-base-tickets-foreigners"],
    citations: [
      {
        name: "Mount Emei Scenic Area, including Leshan Giant Buddha Scenic Area",
        url: "https://whc.unesco.org/en/list/779/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1996-01-01",
      },
      {
        name: "Chengdu Research Base of Giant Panda Breeding",
        url: "https://www.panda.org.cn/en/",
        publisher: "Chengdu Research Base of Giant Panda Breeding",
        publishedAt: "2026-08-12",
      },
    ],
    conversionTitle: "Choose the Leshan day that suits your walking and river interests.",
    conversionDescription:
      "Share your group size, panda priorities and comfort with stairs. We will compare the best confirmed viewing approach and keep Chengdu's slower moments intact.",
    conversionLabel: "Plan Chengdu and Leshan",
  }),
  commercialArticle({
    slug: "5-day-beijing-great-wall-itinerary",
    title: "5-Day Beijing and Great Wall Itinerary: Imperial Highlights Without the Rush",
    dek: "Use one Beijing hotel base to connect the Forbidden City, Temple of Heaven, hutongs, Summer Palace and a properly planned Great Wall day.",
    excerpt:
      "A comfortable five-day Beijing itinerary for first-time visitors, families and older travelers who want depth without daily hotel moves.",
    category: "Destinations",
    tags: ["beijing", "great-wall", "first-time-china", "family-travel", "senior-travel"],
    readingTime: "12 min read",
    eyebrow: "Beijing with one hotel base",
    hero: {
      src: "/tours/first-china-beautifully-paced/beijing-great-wall-group-portrait.webp",
      alt: "The Great Wall crossing green mountains near Beijing",
      width: 1440,
      height: 1920,
      objectPosition: "50% 46%",
    },
    gallery: [
      {
        src: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-costume-walk.webp",
        alt: "A traditional costume walk through Beijing's Temple of Heaven park",
        width: 1920,
        height: 1280,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-close.webp",
        alt: "Architectural detail inside Beijing's Temple of Heaven park",
        width: 1920,
        height: 1280,
        objectPosition: "50% 46%",
      },
      {
        src: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-corridor.webp",
        alt: "Historic corridor details inside Beijing's Temple of Heaven park",
        width: 1920,
        height: 1280,
        objectPosition: "50% 48%",
      },
    ],
    seoTitle: "5-Day Beijing and Great Wall Itinerary",
    seoDescription:
      "Plan a 5-day Beijing and Great Wall itinerary with the Forbidden City, Temple of Heaven, hutongs, Summer Palace, Mutianyu options and private transfers.",
    keywords: [
      "5 day Beijing itinerary Great Wall",
      "Beijing Great Wall itinerary",
      "Beijing itinerary for first-time visitors",
      "private Beijing Great Wall tour",
    ],
    destinations: ["beijing"],
    tours: ["beijing-great-wall-private-5-day-tour", "first-china-beautifully-paced"],
    experiences: ["private-guides"],
    articles: ["mutianyu-badaling-jinshanling-great-wall", "forbidden-city-tickets-foreigners"],
    citations: [
      {
        name: "The Great Wall",
        url: "https://whc.unesco.org/en/list/438/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1987-01-01",
      },
      {
        name: "Imperial Palaces of the Ming and Qing Dynasties in Beijing and Shenyang",
        url: "https://whc.unesco.org/en/list/439/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1987-01-01",
      },
    ],
    conversionTitle: "Match the Wall section and city rhythm to your travelers.",
    conversionDescription:
      "Tell us about walking comfort, cable-car preferences, children or older parents. We will build a five-day Beijing plan around your actual group.",
    conversionLabel: "Plan My Beijing Route",
  }),
  commercialArticle({
    slug: "6-day-xian-beijing-itinerary",
    title: "6-Day Xi'an and Beijing Itinerary: Terracotta Warriors to the Great Wall",
    dek: "Start with Xi'an's archaeological and food culture, then finish in Beijing with imperial history and a dedicated Great Wall day.",
    excerpt:
      "A focused six-day Xi'an and Beijing itinerary with high-speed rail logic, passport-linked attractions and realistic sightseeing days.",
    category: "History",
    tags: ["xian", "beijing", "terracotta-army", "great-wall", "history"],
    readingTime: "12 min read",
    eyebrow: "Two historic capitals",
    hero: {
      src: "/tours/xian-beijing-private-journey/day-01.webp",
      alt: "Xi'an City Wall and historic towers after rain",
      width: 1600,
      height: 1067,
      objectPosition: "50% 48%",
    },
    gallery: [
      {
        src: "/tours/xian-beijing-private-journey/day-02.webp",
        alt: "Terracotta Warriors standing in formation near Xi'an",
        width: 1600,
        height: 1067,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/xian-beijing-private-journey/day-05.webp",
        alt: "Imperial Beijing seen from above the Forbidden City",
        width: 1600,
        height: 1067,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/xian-beijing-private-journey/day-06.webp",
        alt: "Mutianyu Great Wall crossing the mountains outside Beijing",
        width: 1600,
        height: 1067,
        objectPosition: "50% 48%",
      },
    ],
    seoTitle: "6-Day Xi'an and Beijing Itinerary with Great Wall",
    seoDescription:
      "Plan six days in Xi'an and Beijing with the Terracotta Army, City Wall, Forbidden City, Mutianyu Great Wall and private rail transfers.",
    keywords: [
      "6 day Xi'an Beijing itinerary",
      "Xi'an Beijing Great Wall tour",
      "Terracotta Warriors and Great Wall itinerary",
      "Xi'an to Beijing high speed train tour",
    ],
    destinations: ["xian", "beijing"],
    tours: [
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      "first-china-beautifully-paced",
    ],
    experiences: ["private-guides", "train-travel"],
    articles: ["beijing-xian-itinerary-how-many-days", "terracotta-army-tickets-foreign-visitors"],
    citations: [
      {
        name: "Mausoleum of the First Qin Emperor",
        url: "https://whc.unesco.org/en/list/441/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1987-01-01",
      },
      {
        name: "China Railway 12306 English FAQ",
        url: "https://www.12306.cn/en/faq.html",
        publisher: "China State Railway Group",
        publishedAt: "2026-08-12",
      },
    ],
    conversionTitle: "Put the archaeological day before the long city walks.",
    conversionDescription:
      "Share your arrival gateway, train preferences and walking comfort. We will sequence Xi'an and Beijing so the history has time to land.",
    conversionLabel: "Plan Xi'an and Beijing",
  }),
  commercialArticle({
    slug: "leshan-giant-buddha-day-trip-guide",
    title: "Leshan Giant Buddha from Chengdu: A Practical Day-Trip Guide",
    dek: "Choose the right viewing approach, travel timing and walking plan for one of Sichuan's most important cultural landscapes.",
    excerpt:
      "Understand the Leshan Giant Buddha day trip before adding it to a Chengdu itinerary, including river views, stairs and private transport.",
    category: "History",
    tags: ["leshan", "chengdu", "culture", "history", "family-travel"],
    readingTime: "10 min read",
    eyebrow: "Plan Leshan properly",
    hero: {
      src: "/tours/chengdu-pandas/route-leshan.webp",
      alt: "The Leshan Giant Buddha and the river landscape below",
      width: 1080,
      height: 1440,
      objectPosition: "50% 46%",
    },
    gallery: [
      {
        src: "/tours/chengdu-pandas/detail-spice.webp",
        alt: "Sichuan spice prepared during a Chengdu food experience",
        width: 1661,
        height: 2560,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/chengdu-pandas/gallery-city-02.webp",
        alt: "Chengdu streets and local life on a Sichuan journey",
        width: 2000,
        height: 2668,
        objectPosition: "50% 48%",
      },
      {
        src: "/tours/chengdu-pandas/gallery-city-03.webp",
        alt: "Chengdu street life on a Sichuan journey",
        width: 2000,
        height: 2668,
        objectPosition: "50% 48%",
      },
    ],
    seoTitle: "Leshan Giant Buddha from Chengdu: Day-Trip Guide",
    seoDescription:
      "Plan a Leshan Giant Buddha day trip from Chengdu with practical transport, viewing options, stairs, timing and a private Chengdu itinerary connection.",
    keywords: [
      "Leshan Giant Buddha from Chengdu",
      "Leshan day trip itinerary",
      "how to visit Leshan Giant Buddha",
      "Chengdu Leshan private tour",
    ],
    destinations: ["leshan", "chengdu"],
    tours: ["chengdu-pandas-sichuan-table"],
    experiences: ["private-guides", "food"],
    articles: ["5-day-chengdu-leshan-itinerary", "how-many-days-in-chengdu-itinerary"],
    citations: [
      {
        name: "Mount Emei Scenic Area, including Leshan Giant Buddha Scenic Area",
        url: "https://whc.unesco.org/en/list/779/",
        publisher: "UNESCO World Heritage Centre",
        publishedAt: "1996-01-01",
      },
    ],
    conversionTitle: "Add Leshan without sacrificing Chengdu's best moments.",
    conversionDescription:
      "Tell us your Chengdu dates, mobility needs and interest in river or cliff views. We will recommend the most realistic Leshan day and transfer plan.",
    conversionLabel: "Plan a Leshan Day",
  }),
  ...seniorClusterArticles,
];
