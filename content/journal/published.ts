import { destinationAsset } from "@/content/destinations/assets";
import { homeEditorialImages } from "@/content/home/homepage";
import {
  chengduImages,
  chongqingImages,
  zhangjiajieImages,
} from "@/content/tours/chengdu-chongqing-zhangjiajie-assets";
import type { JournalArticle } from "@/types/journal";
import { commercialJournalArticles } from "@/content/journal/commercial";
import { buildDayTourArticles } from "@/content/journal/day-tours/article";
import { chengduCluster } from "@/content/journal/day-tours/chengdu";
import { guilinCluster } from "@/content/journal/day-tours/guilin";
import { mutianyuCluster } from "@/content/journal/day-tours/mutianyu";
import { shanghaiCluster } from "@/content/journal/day-tours/shanghai";
import { xianCluster } from "@/content/journal/day-tours/xian";
import { audienceExperienceArticles } from "@/content/journal/audience-experience";

const author = {
  name: "AVIORA China Travel Team",
  role: "China travel specialists",
};

const journalImages = {
  chengduDays: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chengdu-12.webp",
    alt: "A giant panda eating bamboo during a morning visit in Chengdu",
    width: 1600,
    height: 1067,
    objectPosition: "50% 48%",
  },
  chongqingThreeDay: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chongqing-01.webp",
    alt: "Chongqing's layered skyline during the blue hour",
    width: 1600,
    height: 1067,
    objectPosition: "50% 48%",
  },
  zhangjiajieStay: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/zhangjiajie-15.webp",
    alt: "Zhangjiajie's quartz-sandstone pillars emerging from morning mist",
    width: 1600,
    height: 1067,
    objectPosition: "50% 48%",
  },
  chengduChongqingZhangjiajie: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/hero-01.webp",
    alt: "International travelers looking across Zhangjiajie's sandstone peaks",
    width: 1600,
    height: 1067,
    objectPosition: "50% 46%",
  },
  chengduChongqingZhangjiajieChengdu: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chengdu-01.webp",
    alt: "Giant panda resting in a green habitat in Chengdu",
    width: 1600,
    height: 1067,
    objectPosition: "50% 48%",
  },
  chengduChongqingZhangjiajieChongqing: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chongqing-01.webp",
    alt: "Chongqing's layered skyline during the blue hour",
    width: 1600,
    height: 1067,
    objectPosition: "50% 48%",
  },
  chengduChongqingZhangjiajieForest: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/zhangjiajie-01.webp",
    alt: "Forest and sandstone peaks in Zhangjiajie National Forest Park",
    width: 1600,
    height: 1067,
    objectPosition: "50% 48%",
  },
  privateChinaTourCost: {
    src: "/home/editorial/great-wall-private-china-travel.webp",
    alt: "Private travelers walking on the Great Wall during a tailored China journey",
    width: 1086,
    height: 1448,
    objectPosition: "50% 48%",
  },
  tenDayChinaItinerary: {
    src: "/tours/first-china-beautifully-paced/shanghai-waterfront-group.webp",
    alt: "International visitors beside the Shanghai waterfront on a first China journey",
    width: 1920,
    height: 1440,
    objectPosition: "50% 50%",
  },
  singaporePrivateChinaTour: {
    src: "/home/editorial/travel-trade-team-singapore.webp",
    alt: "AVIORA China travel specialists meeting international travel partners in Singapore",
    width: 1080,
    height: 810,
    objectPosition: "50% 48%",
  },
  visaFreeTransit: {
    src: "/journal/2026-08-06/visa-free-transit-shanghai.webp",
    alt: "International visitors on the Bund with the Shanghai skyline behind them",
    width: 1620,
    height: 1080,
    objectPosition: "50% 52%",
  },
  accommodationRegistration: {
    src: "/journal/2026-08-06/accommodation-registration-check-in.webp",
    alt: "International guests with hotel staff at a reception in China",
    width: 1706,
    height: 1279,
    objectPosition: "50% 58%",
  },
  highSpeedTrain: {
    src: "/journal/2026-08-06/china-high-speed-train-boarding.webp",
    alt: "International traveler beside a high-speed train platform in China",
    width: 2400,
    height: 3200,
    objectPosition: "50% 48%",
  },
  mobilePayment: {
    src: "/journal/2026-08-06/china-mobile-payment.webp",
    alt: "Traveler completing a mobile payment at a counter in China",
    width: 2400,
    height: 3200,
    objectPosition: "50% 57%",
  },
  forbiddenCityEntrance: {
    src: "/journal/2026-08-06/forbidden-city-entrance.webp",
    alt: "Bronze guardian lion at the entrance to the Forbidden City in Beijing",
    width: 2400,
    height: 3199,
    objectPosition: "64% 60%",
  },
  chengduPandaBase: {
    src: "/journal/2026-08-07/chengdu-panda-base-hero.webp",
    alt: "Two giant pandas resting and feeding on wooden platforms at Chengdu Panda Base",
    width: 1800,
    height: 1200,
    objectPosition: "50% 48%",
  },
  chengduPandaBaseSocial: {
    src: "/journal/2026-08-07/chengdu-panda-base-social-v2.webp",
    alt: "Two giant pandas resting among bamboo and timber platforms at Chengdu Panda Base",
    width: 1200,
    height: 630,
    objectPosition: "50% 50%",
  },
  chengduPandasPlatform: {
    src: "/journal/2026-08-07/chengdu-pandas-platform.webp",
    alt: "Two giant pandas resting and feeding on wooden platforms at Chengdu Panda Base",
    width: 1200,
    height: 1600,
    objectPosition: "50% 48%",
  },
  chengduPandaClose: {
    src: "/journal/2026-08-07/chengdu-panda-close-view.webp",
    alt: "A giant panda walking through a wooded enclosure at Chengdu Panda Base",
    width: 1200,
    height: 1600,
    objectPosition: "50% 52%",
  },
  simCardAirport: {
    src: "/journal/2026-08-07/china-sim-card-airport-counter-hero.webp",
    alt: "China Unicom tourist SIM card counter at Beijing Daxing International Airport",
    width: 1800,
    height: 1200,
    objectPosition: "50% 48%",
  },
  simCardSocial: {
    src: "/journal/2026-08-07/china-sim-card-social-v2.webp",
    alt: "International traveler receiving mobile connectivity help at a modern China airport",
    width: 1200,
    height: 630,
    objectPosition: "50% 50%",
  },
  simCardCounter: {
    src: "/journal/2026-08-07/china-sim-card-airport-counter.webp",
    alt: "China Unicom tourist SIM card counter at Beijing Daxing International Airport",
    width: 1200,
    height: 1600,
    objectPosition: "50% 48%",
  },
  simCardPlanBoard: {
    src: "/journal/2026-08-07/china-unicom-tourist-sim-plan-board.webp",
    alt: "Printed China Unicom tourist SIM plan board at Beijing Daxing International Airport",
    width: 1200,
    height: 1600,
    objectPosition: "50% 52%",
  },
  shanghaiAirportGuide: {
    src: "/home/shanghai-pudong-skyline.webp",
    alt: "Shanghai Pudong skyline seen across the Huangpu River",
    width: 1920,
    height: 1080,
    objectPosition: "50% 45%",
  },
  goldenWeekRail: {
    src: "/journal/2026-08-08/china-golden-week-high-speed-rail-hero.webp",
    alt: "Fuxing high-speed trains lined up at Shenzhen North Railway Station",
    width: 1800,
    height: 1200,
    objectPosition: "50% 52%",
  },
  goldenWeekRailPortrait: {
    src: "/journal/2026-08-08/shenzhen-north-high-speed-trains.webp",
    alt: "Fuxing high-speed trains lined up at Shenzhen North Railway Station",
    width: 1200,
    height: 1803,
    objectPosition: "50% 50%",
  },
  greatWallComparison: {
    src: "/tours/beijing-unhurried/great-wall-walk.webp",
    alt: "Cable car beside Great Wall ramparts crossing a mountain ridge",
    width: 2400,
    height: 1641,
    objectPosition: "50% 48%",
  },
  greatWallOverview: {
    src: "/tours/beijing-unhurried/great-wall-overview.webp",
    alt: "Great Wall ramparts crossing forested mountains near Beijing",
    width: 864,
    height: 1488,
    objectPosition: "50% 46%",
  },
  terracottaArmy: {
    src: "/home/xian-terracotta-army.webp",
    alt: "Rows of terracotta warriors inside the Qin Shi Huang Mausoleum Museum",
    width: 1400,
    height: 927,
    objectPosition: "50% 48%",
  },
  terracottaPortrait: {
    src: "/tours/first-china-beautifully-paced/xian-terracotta-army-portrait.webp",
    alt: "Individual terracotta warrior showing detailed armor and facial features",
    width: 1440,
    height: 1920,
    objectPosition: "50% 45%",
  },
  powerBank: {
    src: "/journal/2026-08-08/china-domestic-flight-power-bank-hero.webp",
    alt: "Power bank and charging cable inside a passenger's carry-on bag",
    width: 1800,
    height: 1200,
    objectPosition: "50% 50%",
  },
  powerBankCarryOn: {
    src: "/journal/2026-08-08/power-bank-in-carry-on-bag.webp",
    alt: "Power bank and charging cable inside a passenger's carry-on bag",
    width: 1200,
    height: 1600,
    objectPosition: "50% 50%",
  },
  medicine: {
    src: "/journal/2026-08-08/bringing-medicine-to-china-hero.webp",
    alt: "Several medicines kept in their labeled original packaging for travel",
    width: 1800,
    height: 1200,
    objectPosition: "50% 50%",
  },
  medicineSocial: {
    src: "/journal/2026-08-08/bringing-medicine-to-china-social-v2.webp",
    alt: "Traveler organizing labeled medicines and a medication list before packing for China",
    width: 1200,
    height: 630,
    objectPosition: "50% 50%",
  },
  medicinePackaging: {
    src: "/journal/2026-08-08/medicine-in-original-packaging.webp",
    alt: "Several medicines kept in their labeled original packaging for travel",
    width: 1200,
    height: 1600,
    objectPosition: "50% 50%",
  },
  medicineList: {
    src: "/journal/2026-08-08/personal-medicine-declaration-list.webp",
    alt: "Example bilingual personal medicine declaration list",
    width: 1200,
    height: 1600,
    objectPosition: "50% 46%",
  },
} as const;

const basePublishedJournalArticles: JournalArticle[] = [
  ...commercialJournalArticles,
  {
    slug: "how-many-days-in-chengdu-itinerary",
    title: "How Many Days in Chengdu? A 3-to-5-Day Planning Guide",
    dek: "Choose the right Chengdu stay length for pandas, tea houses, Sichuan food, families and a wider private China route.",
    excerpt:
      "A practical answer for three, four or five days in Chengdu, with panda timing, hotel logic, food planning and product routes.",
    category: "Destinations",
    tags: ["chengdu", "pandas", "food", "family-travel", "slow-travel"],
    author,
    publishedAt: "2026-08-12",
    readingTime: "11 min read",
    editorPick: true,
    hero: { eyebrow: "Chengdu stay planning", image: journalImages.chengduDays },
    gallery: [chengduImages[3], chengduImages[15], chengduImages[8]],
    content: [],
    seo: {
      title: "How Many Days in Chengdu? 3-to-5-Day Itinerary",
      description:
        "Decide how many days to spend in Chengdu with realistic plans for pandas, tea houses, Sichuan food, families and a wider private China route.",
      keywords: [
        "how many days in Chengdu",
        "Chengdu itinerary 3 days",
        "Chengdu itinerary 5 days",
        "how long to stay in Chengdu",
        "Chengdu panda itinerary",
      ],
      ogImage: journalImages.chengduDays,
    },
    related: {
      destinations: ["chengdu"],
      tours: ["chengdu-pandas-sichuan-table", "chengdu-chongqing-zhangjiajie-private-11-day-tour"],
      experiences: ["pandas", "food", "private-guides"],
      articles: [
        "chengdu-panda-base-tickets-foreigners",
        "chengdu-chongqing-zhangjiajie-itinerary",
      ],
    },
    conversion: {
      eyebrow: "Choose the right Chengdu pace",
      title: "Know whether Chengdu needs three or five days.",
      description:
        "Share your dates, travelers and wider route. AVIORA will recommend a stay length and explain what fits before preparing the proposal.",
      label: "Plan My Chengdu Stay",
      href: "/start-planning?source=journal-chengdu-days",
    },
    sourcePath: "content/journal/articles/2026-08-12-how-many-days-in-chengdu-itinerary.md",
  },
  {
    slug: "3-day-chongqing-itinerary",
    title: "A 3-Day Chongqing Itinerary That Respects the City",
    dek: "Plan Chongqing by geography, food and city levels, with realistic day and night routes, hotel logic and private transport support.",
    excerpt:
      "A three-day Chongqing plan that explains the vertical city without reducing it to a list of viral viewpoints.",
    category: "Destinations",
    tags: ["chongqing", "food", "photography", "family-travel", "private-guides"],
    author,
    publishedAt: "2026-08-12",
    readingTime: "10 min read",
    editorPick: true,
    hero: { eyebrow: "Chongqing city planning", image: journalImages.chongqingThreeDay },
    gallery: [chongqingImages[2], chongqingImages[11], chongqingImages[15]],
    content: [],
    seo: {
      title: "3-Day Chongqing Itinerary: What to See and Where to Stay",
      description:
        "Plan three days in Chongqing with realistic routes for its vertical streets, river views, hotpot, night photography, hotels and private transport.",
      keywords: [
        "3 day Chongqing itinerary",
        "Chongqing itinerary",
        "how many days in Chongqing",
        "where to stay in Chongqing",
        "Chongqing private tour",
      ],
      ogImage: journalImages.chongqingThreeDay,
    },
    related: {
      destinations: ["chongqing"],
      tours: ["chengdu-chongqing-zhangjiajie-private-11-day-tour"],
      experiences: ["food", "private-guides"],
      articles: ["chengdu-chongqing-zhangjiajie-itinerary", "private-china-tour-cost-2026"],
    },
    conversion: {
      eyebrow: "Plan the vertical city properly",
      title: "Build Chongqing around levels, transfers and real interests.",
      description:
        "Share your dates, party, food interests and walking comfort. AVIORA will connect the hotel, transport, night route and open day.",
      label: "Plan My Chongqing Route",
      href: "/start-planning?source=journal-chongqing-3-day",
    },
    sourcePath: "content/journal/articles/2026-08-12-3-day-chongqing-itinerary.md",
  },
  {
    slug: "where-to-stay-in-zhangjiajie",
    title: "Where to Stay in Zhangjiajie: Wulingyuan or the City?",
    dek: "Compare Wulingyuan and Zhangjiajie City by park access, Tianmen Mountain, airport transfers, walking load and a realistic mountain route.",
    excerpt:
      "A practical accommodation guide that helps you choose the right Zhangjiajie base before booking the hotel.",
    category: "Destinations",
    tags: ["zhangjiajie", "nature", "photography", "family-travel", "private-guides"],
    author,
    publishedAt: "2026-08-12",
    readingTime: "11 min read",
    editorPick: true,
    hero: { eyebrow: "Zhangjiajie stay planning", image: journalImages.zhangjiajieStay },
    gallery: [zhangjiajieImages[0], zhangjiajieImages[17], zhangjiajieImages[19]],
    content: [],
    seo: {
      title: "Where to Stay in Zhangjiajie: Wulingyuan vs City",
      description:
        "Compare Wulingyuan and Zhangjiajie City hotels by park access, Tianmen Mountain, airport transfers, walking load and a realistic 3-to-4-night route.",
      keywords: [
        "where to stay in Zhangjiajie",
        "Wulingyuan or Zhangjiajie City",
        "how many days in Zhangjiajie",
        "Zhangjiajie itinerary 4 days",
        "Zhangjiajie hotel near national park",
      ],
      ogImage: journalImages.zhangjiajieStay,
    },
    related: {
      destinations: ["zhangjiajie"],
      tours: [
        "shanghai-zhangjiajie-floating-peaks",
        "chengdu-chongqing-zhangjiajie-private-11-day-tour",
      ],
      experiences: ["private-guides"],
      articles: ["chengdu-chongqing-zhangjiajie-itinerary", "private-china-tour-cost-2026"],
    },
    conversion: {
      eyebrow: "Choose the right mountain base",
      title: "Select Wulingyuan or the city before you book the room.",
      description:
        "Share your arrival, departure, park priorities and walking preferences. AVIORA will recommend the base and sequence before preparing the proposal.",
      label: "Plan My Zhangjiajie Stay",
      href: "/start-planning?source=journal-zhangjiajie-stay",
    },
    sourcePath: "content/journal/articles/2026-08-12-where-to-stay-in-zhangjiajie.md",
  },
  {
    slug: "chengdu-chongqing-zhangjiajie-itinerary",
    title: "11-Day Chengdu, Chongqing & Zhangjiajie Itinerary",
    dek: "Move from Chengdu's pandas and tea houses to Chongqing after dark and Zhangjiajie's sandstone peaks, with one China team protecting every handover.",
    excerpt:
      "A vivid 11-day southwest China route, plus the operator, contract and support checks that matter before you book.",
    category: "Destinations",
    tags: ["chengdu", "chongqing", "zhangjiajie", "nature", "food", "photography"],
    author,
    publishedAt: "2026-08-12",
    readingTime: "9 min read",
    featured: true,
    editorPick: true,
    hero: {
      eyebrow: "Three-region private route",
      image: journalImages.chengduChongqingZhangjiajie,
    },
    gallery: [
      journalImages.chengduChongqingZhangjiajieChengdu,
      journalImages.chengduChongqingZhangjiajieChongqing,
      journalImages.chengduChongqingZhangjiajieForest,
    ],
    content: [],
    seo: {
      title: "11-Day Chengdu, Chongqing & Zhangjiajie Itinerary",
      description:
        "Compare an 11-day Chengdu, Chongqing and Zhangjiajie itinerary, daily pacing, walking load and how to choose a reliable China tour operator.",
      keywords: [
        "Chengdu Chongqing Zhangjiajie itinerary",
        "11 day China itinerary Chengdu Chongqing Zhangjiajie",
        "Chengdu Chongqing Zhangjiajie tour",
        "private Zhangjiajie itinerary",
        "China panda and Zhangjiajie tour",
      ],
      ogImage: journalImages.chengduChongqingZhangjiajie,
    },
    related: {
      destinations: ["chengdu", "chongqing", "zhangjiajie"],
      tours: [
        "chengdu-chongqing-zhangjiajie-private-11-day-tour",
        "chengdu-pandas-sichuan-table",
        "shanghai-zhangjiajie-floating-peaks",
      ],
      experiences: ["pandas", "food", "private-guides"],
      articles: [
        "chengdu-panda-base-tickets-foreigners",
        "10-day-china-itinerary-first-time-visitors",
        "private-china-tour-cost-2026",
      ],
    },
    conversion: {
      eyebrow: "Plan It With One China Team",
      title: "Arrive With Every Handover Accounted For.",
      description:
        "Share your dates, party and walking preferences. We will map the hotels, tickets, guides, transfers and weather options before preparing the written proposal.",
      label: "Request the 11-Day Proposal",
      href: "/start-planning?source=journal-ccz-itinerary",
    },
    sourcePath: "content/journal/articles/2026-08-12-chengdu-chongqing-zhangjiajie-itinerary.md",
  },
  {
    slug: "private-china-tour-cost-2026",
    title: "Private China Tour Pricing: What Your 2026 Quotation Should Include",
    dek: "A practical guide to comparing private China tour quotations, from hotel standards and guide coverage to transport, tickets and the final inclusions.",
    excerpt:
      "Learn what shapes private China tour pricing, how to compare proposals fairly and which details should be clear before you book.",
    category: "Luxury Travel",
    tags: ["first-time-china", "luxury-travel", "family-travel", "private-guides"],
    author,
    publishedAt: "2026-08-10",
    readingTime: "12 min read",
    editorPick: true,
    hero: { eyebrow: "Tour price planning", image: journalImages.privateChinaTourCost },
    gallery: [
      journalImages.privateChinaTourCost,
      journalImages.tenDayChinaItinerary,
      destinationAsset.shanghaiSkyline,
    ],
    content: [],
    seo: {
      title: "Private China Tour Pricing: 2026 Quotation Guide",
      description:
        "Compare private China tour pricing with a practical 2026 guide to hotel standards, guides, transport, tickets, inclusions and quotation questions.",
      keywords: [
        "private China tour pricing",
        "private China tour cost",
        "private China tour quotation",
        "China tour price guide",
        "China travel budget planning",
        "luxury China tour pricing",
      ],
      ogImage: journalImages.privateChinaTourCost,
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
      experiences: ["private-guides", "train-travel"],
      articles: ["10-day-china-itinerary-first-time-visitors", "private-china-tour-from-singapore"],
    },
    conversion: {
      eyebrow: "A clearer quotation",
      title: "Receive a China tour proposal you can compare properly.",
      description:
        "Share your dates, travelers, hotel expectations and preferred route. We will explain the route assumptions and principal inclusions before asking you to decide.",
      label: "Request My Costed Proposal",
      href: "/start-planning?source=journal-cost-guide",
    },
    sourcePath: "content/journal/articles/2026-08-10-private-china-tour-cost-2026.md",
  },
  {
    slug: "10-day-china-itinerary-first-time-visitors",
    title: "A Well-Paced 10-Day China Itinerary for First-Time Visitors",
    dek: "Use Beijing, Xi’an and Shanghai to build a first China trip with realistic travel days, three strong city chapters and room to enjoy them.",
    excerpt:
      "A day-by-day Beijing, Xi’an and Shanghai route with practical pacing, transport choices and alternatives for families and older travelers.",
    category: "Travel Guides",
    tags: ["first-time-china", "beijing", "xian", "shanghai", "train-travel"],
    author,
    publishedAt: "2026-08-10",
    updatedAt: "2026-08-13",
    readingTime: "14 min read",
    editorPick: true,
    hero: { eyebrow: "First China itinerary", image: journalImages.tenDayChinaItinerary },
    gallery: [
      journalImages.tenDayChinaItinerary,
      journalImages.greatWallComparison,
      journalImages.terracottaArmy,
    ],
    content: [],
    seo: {
      title: "10-Day China Itinerary for First-Time Visitors (2026)",
      description:
        "Plan 10 days in China with Beijing, Xi’an and Shanghai, realistic travel time, a Great Wall day and practical private-tour pacing.",
      keywords: [
        "10 day China itinerary",
        "China itinerary 10 days",
        "first time China itinerary",
        "Beijing Xi'an Shanghai itinerary",
        "10 days in China",
      ],
      ogImage: journalImages.tenDayChinaItinerary,
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
      experiences: ["private-guides", "train-travel"],
      articles: [
        "private-china-tour-cost-2026",
        "china-high-speed-train-foreigners",
        "mutianyu-badaling-jinshanling-great-wall",
      ],
    },
    conversion: {
      eyebrow: "Your ten-day route",
      title: "Make the classic itinerary fit the people taking it.",
      description:
        "Tell us your dates, interests and walking preferences. We will adjust the city sequence, transport and daily load before preparing the proposal.",
      label: "Shape My 10-Day Route",
      href: "/start-planning?source=journal-10-day-itinerary",
    },
    sourcePath: "content/journal/articles/2026-08-10-10-day-china-itinerary-first-time-visitors.md",
  },
  {
    slug: "private-china-tour-from-singapore",
    title: "How to Plan a Private China Tour from Singapore",
    dek: "Choose the route, gateways, hotels and local support for a private China holiday designed around travelers departing from Singapore.",
    excerpt:
      "A Singapore-focused planning guide covering trip length, route ideas, entry checks, payments, families and Muslim-friendly requirements.",
    category: "Travel Guides",
    tags: ["singapore", "first-time-china", "family-travel", "muslim-friendly"],
    author,
    publishedAt: "2026-08-10",
    readingTime: "13 min read",
    editorPick: true,
    hero: {
      eyebrow: "Singapore to China",
      image: journalImages.singaporePrivateChinaTour,
    },
    gallery: [
      journalImages.singaporePrivateChinaTour,
      journalImages.tenDayChinaItinerary,
      destinationAsset.chengduPanda,
    ],
    content: [],
    seo: {
      title: "Private China Tour from Singapore: Planning Guide",
      description:
        "Plan a private China tour from Singapore with route ideas, flight logic, entry checks, payments, family pacing and local support.",
      keywords: [
        "private China tour from Singapore",
        "China private tour package from Singapore",
        "China itinerary from Singapore",
        "China tour for Singapore travellers",
        "Muslim friendly China private tour",
      ],
      ogImage: journalImages.singaporePrivateChinaTour,
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: [
        "first-china-beautifully-paced",
        "beijing-xian-chengdu-shanghai-private-11-day-tour",
        "chengdu-pandas-sichuan-table",
      ],
      experiences: ["private-guides", "train-travel", "food"],
      articles: [
        "10-day-china-itinerary-first-time-visitors",
        "private-china-tour-cost-2026",
        "china-mobile-payments-foreign-tourists",
      ],
    },
    conversion: {
      eyebrow: "Singapore to China",
      title: "Plan the route before committing to the wrong flights.",
      description:
        "Share your travel window, party and priorities. We will suggest the right arrival city, trip length and route for a private journey from Singapore.",
      label: "Plan From Singapore",
      href: "/start-planning?source=journal-singapore-guide",
    },
    sourcePath: "content/journal/articles/2026-08-10-private-china-tour-from-singapore.md",
  },
  {
    slug: "aviora-ttg-asia-matta-connect-2026",
    title: "Listening Before Designing: AVIORA at MATTA Connect",
    dek: "TTG Asia named Guohui Shi of China Prime DMC, AVIORA's China operating team, in its MATTA Connect 2026 coverage. The more important story is why listening comes before itinerary design.",
    excerpt:
      "How AVIORA turns conversations with Malaysian travel buyers into clearer, more considerate private journeys through China.",
    category: "Industry News",
    tags: ["travel-trade", "malaysia", "muslim-friendly", "private-guides"],
    author,
    publishedAt: "2026-08-08",
    readingTime: "6 min read",
    featured: true,
    editorPick: true,
    hero: {
      eyebrow: "AVIORA in the travel trade",
      image: homeEditorialImages.tradeBuyerMeeting,
    },
    gallery: [homeEditorialImages.tradeMuslimBuyers, homeEditorialImages.tradeConsultation],
    content: [],
    seo: {
      title: "AVIORA at MATTA Connect | Featured in TTG Asia",
      description:
        "TTG Asia named Guohui Shi of AVIORA's China operating team in its MATTA Connect coverage. Read how listening shapes more thoughtful private China journeys.",
      keywords: [
        "AVIORA MATTA Connect",
        "AVIORA private China travel",
        "China Prime DMC TTG Asia",
        "China Prime DMC MATTA Connect",
        "Guohui Shi China Prime DMC",
        "China inbound travel specialist",
        "Malaysia China private travel",
      ],
      ogImage: homeEditorialImages.tradeBuyerMeeting,
    },
    related: {
      tours: [
        "first-china-beautifully-paced",
        "chengdu-pandas-jiuzhaigou-private-7-day-tour",
        "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      ],
      articles: ["china-240-hour-visa-free-transit-guide", "china-high-speed-train-foreigners"],
    },
    citations: [
      {
        name: "MATTA Connect gains traction as B2B platform",
        url: "https://www.ttgasia.com/2026/07/30/matta-connect-gains-traction-as-b2b-platform/",
        publisher: "TTG Asia",
        publishedAt: "2026-07-30",
      },
    ],
    sourcePath: "content/journal/articles/2026-08-08-china-prime-dmc-ttg-asia-matta-connect.md",
  },
  {
    slug: "china-240-hour-visa-free-transit-guide",
    title: "China’s 240-Hour Visa-Free Transit: A Route-First Guide",
    dek: "Check nationality, ports, onward routing and permitted areas before building a visa-free China stopover.",
    excerpt:
      "A route-first explanation of China’s 240-hour transit policy for travelers planning Beijing, Shanghai or another eligible stopover.",
    category: "Visa",
    tags: ["first-time-china", "beijing", "shanghai", "private-guides"],
    author,
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-13",
    readingTime: "10 min read",
    hero: { eyebrow: "Entry planning", image: journalImages.visaFreeTransit },
    gallery: [journalImages.visaFreeTransit, journalImages.greatWallComparison],
    content: [],
    seo: {
      title: "China 240-Hour Visa-Free Transit 2026: Routes & Rules",
      description:
        "Check who qualifies for China’s 240-hour visa-free transit in 2026, including third-country routes, eligible ports, permitted areas and entry documents.",
      keywords: [
        "China 240-hour visa-free transit",
        "China transit without visa",
        "China TWOV rules",
        "China stopover itinerary",
      ],
      ogImage: journalImages.visaFreeTransit,
    },
    related: {
      destinations: ["beijing", "shanghai"],
      tours: ["first-china-beautifully-paced"],
    },
    sourcePath: "content/journal/articles/2026-08-06-china-240-hour-visa-free-transit-guide.md",
  },
  {
    slug: "china-accommodation-registration-foreigners",
    title: "China Accommodation Registration for Foreign Visitors",
    dek: "Understand hotel registration, private-home stays and the current online pilot before arriving in China.",
    excerpt:
      "What foreign visitors need to know about China’s accommodation registration rules for hotels, apartments and private homes.",
    category: "Travel Guides",
    tags: ["first-time-china", "private-guides"],
    author,
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-13",
    readingTime: "8 min read",
    hero: { eyebrow: "Arrival essentials", image: journalImages.accommodationRegistration },
    gallery: [journalImages.accommodationRegistration, destinationAsset.shanghaiSkyline],
    content: [],
    seo: {
      title: "China Hotel Registration for Foreigners: 2026 Rules",
      description:
        "Learn how China’s accommodation registration works for foreign visitors in hotels, apartments and private homes, including the 24-hour rule.",
      keywords: [
        "China accommodation registration for foreigners",
        "China temporary residence registration tourist",
        "register stay in China private apartment",
      ],
      ogImage: journalImages.accommodationRegistration,
    },
    sourcePath:
      "content/journal/articles/2026-08-06-china-accommodation-registration-foreigners.md",
  },
  {
    slug: "china-high-speed-train-foreigners",
    title: "China High-Speed Trains: A Passport-to-Platform Guide",
    dek: "Book, enter and board China’s high-speed trains with the right passport details, timing and seat choice.",
    excerpt:
      "A practical guide to China high-speed rail covering passport booking, e-tickets, stations, seats, baggage and missed trains.",
    category: "Train Travel",
    tags: ["train-travel", "first-time-china", "family-travel"],
    author,
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-13",
    readingTime: "9 min read",
    hero: { eyebrow: "Rail planning", image: journalImages.highSpeedTrain },
    gallery: [journalImages.highSpeedTrain, destinationAsset.shanghaiSkyline],
    content: [],
    seo: {
      title: "China High-Speed Trains for Foreigners: 2026 Guide",
      description:
        "Learn how foreigners book and board China high-speed trains with a passport, including 12306, e-tickets, seats, luggage and station timing.",
      keywords: [
        "China high-speed train for foreigners",
        "China train passport booking",
        "China Railway 12306 foreign passport",
        "China train baggage rules",
      ],
      ogImage: journalImages.highSpeedTrain,
    },
    related: {
      destinations: ["beijing", "shanghai"],
      tours: ["first-china-beautifully-paced"],
      experiences: ["train-travel"],
    },
    sourcePath: "content/journal/articles/2026-08-06-china-high-speed-train-foreigners.md",
  },
  {
    slug: "china-mobile-payments-foreign-tourists",
    title: "Mobile Payments in China: A Visitor’s Setup Guide",
    dek: "Set up a mobile wallet with an overseas card and keep reliable card and cash backups for your trip.",
    excerpt:
      "How international visitors can prepare mobile payments, overseas cards and RMB cash before traveling in China.",
    category: "Travel Guides",
    tags: ["first-time-china", "family-travel", "train-travel"],
    author,
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-13",
    readingTime: "9 min read",
    hero: { eyebrow: "Practical planning", image: journalImages.mobilePayment },
    gallery: [journalImages.mobilePayment, destinationAsset.chengduTeaHouse],
    content: [],
    seo: {
      title: "Alipay & WeChat Pay for Tourists in China: 2026 Guide",
      description:
        "Set up Alipay or WeChat Pay in China with a foreign card, understand verification and fees, and keep practical cash and card backups.",
      keywords: [
        "China mobile payment for tourists",
        "Alipay for foreigners",
        "WeChat Pay overseas card",
        "paying in China as a tourist",
      ],
      ogImage: journalImages.mobilePayment,
    },
    sourcePath: "content/journal/articles/2026-08-06-china-mobile-payments-foreign-tourists.md",
  },
  {
    slug: "forbidden-city-tickets-foreigners",
    title: "Forbidden City Tickets for Foreign Visitors",
    dek: "Reserve with the correct passport, avoid same-day and Monday mistakes, and plan a realistic Palace Museum visit.",
    excerpt:
      "A clear booking and visit guide for foreign passport holders planning the Forbidden City in Beijing.",
    category: "Destinations",
    tags: ["beijing", "first-time-china", "private-guides"],
    author,
    publishedAt: "2026-08-06",
    updatedAt: "2026-08-13",
    readingTime: "8 min read",
    hero: { eyebrow: "Beijing planning", image: journalImages.forbiddenCityEntrance },
    gallery: [journalImages.forbiddenCityEntrance, journalImages.greatWallComparison],
    content: [],
    seo: {
      title: "How to Book Forbidden City Tickets as a Foreigner (2026)",
      description:
        "Book Forbidden City tickets with a foreign passport, understand the advance reservation process, Monday closure and realistic visit timing.",
      keywords: [
        "Forbidden City tickets for foreigners",
        "Palace Museum tickets passport",
        "Forbidden City advance booking",
        "Forbidden City closed Monday",
      ],
      ogImage: journalImages.forbiddenCityEntrance,
    },
    related: {
      destinations: ["beijing"],
      tours: ["beijing-great-wall-private-5-day-tour", "first-china-beautifully-paced"],
    },
    sourcePath: "content/journal/articles/2026-08-06-forbidden-city-tickets-foreigners.md",
  },
  {
    slug: "chengdu-panda-base-tickets-foreigners",
    title: "Chengdu Panda Base Tickets for Foreign Visitors",
    dek: "Reserve with the correct passport, choose a workable entry window and plan a cooler, calmer morning at Chengdu Panda Base.",
    excerpt:
      "How foreign visitors can reserve Chengdu Panda Base tickets, choose an entry window and plan a comfortable half-day visit.",
    category: "Family Travel",
    tags: ["chengdu", "pandas", "family-travel", "first-time-china"],
    author,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-13",
    readingTime: "9 min read",
    editorPick: true,
    hero: { eyebrow: "Chengdu planning", image: journalImages.chengduPandaBase },
    gallery: [journalImages.chengduPandasPlatform, journalImages.chengduPandaClose],
    content: [],
    seo: {
      title: "Chengdu Panda Base Tickets & Hours: 2026 Guide",
      description:
        "Learn how foreign visitors book Chengdu Panda Base tickets in 2026, check opening hours, use passport details and choose the right morning entry.",
      keywords: [
        "Chengdu Panda Base tickets for foreigners",
        "Chengdu Research Base ticket reservation",
        "Chengdu panda tickets passport",
        "Chengdu Panda Base opening hours",
        "Chengdu panda visit morning",
      ],
      ogImage: journalImages.chengduPandaBaseSocial,
    },
    related: {
      destinations: ["chengdu"],
      tours: ["chengdu-pandas-sichuan-table"],
      articles: ["china-high-speed-train-foreigners"],
    },
    sourcePath: "content/journal/articles/2026-08-07-chengdu-panda-base-tickets-foreigners.md",
  },
  {
    slug: "china-sim-card-esim-internet-foreign-tourists",
    title: "China SIM Cards and Mobile Data for Foreign Visitors",
    dek: "Compare roaming, travel eSIMs and local SIM cards, then keep a practical backup for maps, payments and arrival contacts.",
    excerpt:
      "A practical comparison of roaming, eSIM and local SIM options for international visitors who need dependable mobile data in China.",
    category: "Travel Guides",
    tags: ["first-time-china", "beijing", "shanghai", "chengdu"],
    author,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-13",
    readingTime: "8 min read",
    hero: { eyebrow: "Connectivity planning", image: journalImages.simCardAirport },
    gallery: [journalImages.simCardCounter, journalImages.simCardPlanBoard],
    content: [],
    seo: {
      title: "China SIM Card vs eSIM for Tourists: 2026 Guide",
      description:
        "Compare China tourist SIM cards, eSIMs and roaming in 2026, including setup, airport purchase, app access and a reliable data backup plan.",
      keywords: [
        "China SIM card for tourists",
        "China eSIM for foreign visitors",
        "mobile data in China",
        "China roaming travel",
        "China internet for tourists",
      ],
      ogImage: journalImages.simCardSocial,
    },
    related: {
      destinations: ["beijing", "shanghai", "chengdu"],
      articles: ["china-mobile-payments-foreign-tourists"],
    },
    sourcePath:
      "content/journal/articles/2026-08-07-china-sim-card-esim-internet-foreign-tourists.md",
  },
  {
    slug: "shanghai-pudong-hongqiao-airport-guide",
    title: "Shanghai Pudong or Hongqiao Airport: A Visitor Guide",
    dek: "Confirm PVG or SHA, compare onward transfers and choose the hotel location only after the correct airport is known.",
    excerpt:
      "A clear comparison of Shanghai Pudong and Hongqiao airports for international arrivals, hotel transfers and onward rail connections.",
    category: "Travel Guides",
    tags: ["shanghai", "first-time-china", "private-guides"],
    author,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-13",
    readingTime: "8 min read",
    hero: { eyebrow: "Shanghai arrival", image: journalImages.shanghaiAirportGuide },
    gallery: [],
    content: [],
    seo: {
      title: "Pudong vs Hongqiao Airport: Which Is Better for Shanghai?",
      description:
        "Compare Shanghai Pudong and Hongqiao airports by international flights, city transfers, railway access and the most practical hotel location.",
      keywords: [
        "Pudong or Hongqiao airport",
        "Shanghai airports for tourists",
        "Shanghai airport transfer",
        "PVG vs SHA",
        "Shanghai arrival planning",
      ],
      ogImage: journalImages.shanghaiAirportGuide,
    },
    related: {
      destinations: ["shanghai"],
      tours: ["first-china-beautifully-paced", "shanghai-zhangjiajie-floating-peaks"],
      articles: ["china-sim-card-esim-internet-foreign-tourists"],
    },
    sourcePath: "content/journal/articles/2026-08-07-shanghai-pudong-hongqiao-airport-guide.md",
  },
  {
    slug: "china-golden-week-travel-2026",
    title: "China’s 2026 Golden Week: Should You Travel?",
    dek: "Use the official October 1–7 dates to decide whether to keep, shift or redesign a private China itinerary.",
    excerpt:
      "A decision guide to China’s 2026 National Day holiday, covering route timing, transport, hotels and capacity-controlled attractions.",
    category: "Travel Guides",
    tags: ["autumn", "first-time-china", "train-travel"],
    author,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-13",
    readingTime: "9 min read",
    featured: true,
    hero: { eyebrow: "Seasonal planning", image: journalImages.goldenWeekRail },
    gallery: [journalImages.goldenWeekRailPortrait],
    content: [],
    seo: {
      title: "China Golden Week 2026: Dates, Crowds & Travel Advice",
      description:
        "China’s 2026 National Day Golden Week runs October 1–7. Learn what crowds affect, what to reserve early and when to change your route.",
      keywords: [
        "China Golden Week 2026",
        "China National Day holiday 2026",
        "travel China October 2026",
        "China Golden Week crowds",
        "China October holiday dates",
      ],
      ogImage: journalImages.goldenWeekRail,
    },
    related: {
      tours: ["first-china-beautifully-paced"],
      articles: ["china-high-speed-train-foreigners"],
      experiences: ["train-travel"],
    },
    sourcePath: "content/journal/articles/2026-08-08-china-golden-week-travel-2026.md",
  },
  {
    slug: "mutianyu-badaling-jinshanling-great-wall",
    title: "Mutianyu, Badaling or Jinshanling: Which Great Wall Section?",
    dek: "Compare access, walking load, crowd patterns and photography priorities before choosing a Great Wall day from Beijing.",
    excerpt:
      "A practical comparison of Mutianyu, Badaling and Jinshanling for travelers choosing the right Great Wall section from Beijing.",
    category: "Destinations",
    tags: ["beijing", "private-guides", "luxury-travel"],
    author,
    publishedAt: "2026-08-08",
    readingTime: "10 min read",
    editorPick: true,
    hero: { eyebrow: "Beijing day trip", image: journalImages.greatWallComparison },
    gallery: [journalImages.greatWallOverview],
    content: [],
    seo: {
      title: "Mutianyu vs Badaling vs Jinshanling Great Wall",
      description:
        "Compare Mutianyu, Badaling and Jinshanling by access, walking load, scenery and travel time to choose the right Great Wall section from Beijing.",
      keywords: [
        "Mutianyu vs Badaling vs Jinshanling",
        "best Great Wall section from Beijing",
        "Mutianyu or Badaling",
        "Jinshanling Great Wall day trip",
        "Great Wall for seniors",
      ],
      ogImage: journalImages.greatWallComparison,
    },
    related: {
      destinations: ["beijing"],
      tours: ["beijing-great-wall-private-5-day-tour", "first-china-beautifully-paced"],
      articles: ["forbidden-city-tickets-foreigners"],
    },
    sourcePath: "content/journal/articles/2026-08-08-mutianyu-badaling-jinshanling-great-wall.md",
  },
  {
    slug: "terracotta-army-tickets-foreign-visitors",
    title: "Terracotta Army Tickets for Foreign Visitors",
    dek: "Reserve with the correct passport, use the current entrance instructions and protect enough time for a dedicated Xi’an half-day.",
    excerpt:
      "A passport booking and visit guide for foreign visitors planning the Terracotta Army from central Xi’an.",
    category: "History",
    tags: ["xian", "first-time-china", "private-guides"],
    author,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-13",
    readingTime: "9 min read",
    editorPick: true,
    hero: { eyebrow: "Xi’an planning", image: journalImages.terracottaArmy },
    gallery: [journalImages.terracottaPortrait],
    content: [],
    seo: {
      title: "How to Book Terracotta Army Tickets as a Foreigner (2026)",
      description:
        "Book Terracotta Army tickets with a foreign passport, understand advance reservations, entrance details and how long to allow from Xi’an.",
      keywords: [
        "Terracotta Army tickets for foreigners",
        "Terracotta Warriors ticket passport",
        "Qin Shi Huang Mausoleum Museum booking",
        "Terracotta Army opening hours 2026",
        "Xi'an Terracotta Army visit",
      ],
      ogImage: journalImages.terracottaArmy,
    },
    related: {
      destinations: ["xian"],
      tours: [
        "first-china-beautifully-paced",
        "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      ],
      articles: ["china-high-speed-train-foreigners"],
    },
    sourcePath: "content/journal/articles/2026-08-08-terracotta-army-tickets-foreign-visitors.md",
  },
  {
    slug: "china-domestic-flight-power-bank-rules",
    title: "China Domestic Flight Power Bank Rules for Visitors",
    dek: "Check the physical CCC mark, readable capacity label, recall status and carry-on rules before a mainland domestic flight.",
    excerpt:
      "What international visitors need to check before taking a power bank through security for a domestic flight in mainland China.",
    category: "Travel Guides",
    tags: ["first-time-china", "family-travel"],
    author,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-13",
    readingTime: "9 min read",
    hero: { eyebrow: "Domestic flight rules", image: journalImages.powerBank },
    gallery: [journalImages.powerBankCarryOn],
    content: [],
    seo: {
      title: "China Power Bank Rules 2026: CCC/3C Flight Guide",
      description:
        "Check China’s 2026 power bank rules for domestic flights, including the CCC or 3C mark, 100Wh limit, carry-on storage and recalled models.",
      keywords: [
        "China domestic flight power bank rules",
        "China 3C power bank rule",
        "CCC power bank China airport",
        "power bank China domestic flight",
        "China airline battery rules",
      ],
      ogImage: journalImages.powerBank,
    },
    related: {
      tours: ["shanghai-zhangjiajie-floating-peaks"],
      articles: ["shanghai-pudong-hongqiao-airport-guide"],
    },
    sourcePath: "content/journal/articles/2026-08-08-china-domestic-flight-power-bank-rules.md",
  },
  {
    slug: "bringing-prescription-medicine-to-china",
    title: "Bringing Prescription Medicine to China: A Visitor Checklist",
    dek: "Check active ingredients, prepare supporting documents and carry a reasonable personal supply in clearly labeled original packaging.",
    excerpt:
      "A documentation and packing checklist for international visitors bringing prescription medicine through China Customs.",
    category: "Travel Guides",
    tags: ["first-time-china", "family-travel"],
    author,
    publishedAt: "2026-08-08",
    updatedAt: "2026-08-13",
    readingTime: "10 min read",
    hero: { eyebrow: "Health planning", image: journalImages.medicine },
    gallery: [journalImages.medicinePackaging, journalImages.medicineList],
    content: [],
    seo: {
      title: "Can You Bring Prescription Medicine to China? 2026 Guide",
      description:
        "Learn how to bring personal prescription medicine into China, including original packaging, doctor letters, active ingredients and customs checks.",
      keywords: [
        "bringing prescription medicine to China",
        "China customs medication rules",
        "travel to China with medicine",
        "psychotropic medicine China entry",
        "prescription letter China travel",
      ],
      ogImage: journalImages.medicineSocial,
    },
    related: {
      tours: ["first-china-beautifully-paced"],
      articles: ["china-accommodation-registration-foreigners"],
    },
    sourcePath: "content/journal/articles/2026-08-08-bringing-prescription-medicine-to-china.md",
  },
];

const textHeroImage = journalImages.tenDayChinaItinerary;

const operationalJournalArticles: JournalArticle[] = [
  {
    slug: "china-family-hotel-rooms-connecting-rooms-extra-beds",
    title: "China Hotel Rooms for Families: Connecting Rooms, Extra Beds and What to Confirm",
    dek: "Choose family rooms in China by the confirmed sleeping plan, not a room label that may mean something different at each hotel.",
    excerpt:
      "A practical guide to connecting rooms, adjoining rooms, extra beds, occupancy, breakfast and written room confirmation for families visiting China.",
    category: "Family Travel",
    tags: ["family-travel", "first-time-china", "private-guides"],
    author,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    lastFactCheckedAt: "2026-09-26",
    readingTime: "11 min read",
    editorPick: true,
    hero: { eyebrow: "Family room planning", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "China Hotel Rooms for Families: Room Guide",
      description:
        "Plan China hotel rooms for a family. Compare connecting and adjoining rooms, extra beds, occupancy, breakfast and written confirmation before booking.",
      keywords: [
        "China hotel rooms for families",
        "connecting rooms China hotels",
        "extra bed China hotel",
        "family room China",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: ["china-family-tour-with-pandas-12-day-private-tour", "first-china-beautifully-paced"],
      articles: [
        "best-age-for-china-family-tour",
        "china-family-tour-cost-four",
        "where-to-stay-in-beijing-first-time",
      ],
    },
    conversion: {
      eyebrow: "Confirm the room before the trip",
      title: "Build the family route around the rooms you actually need.",
      description:
        "Share the children's ages, preferred bedding and whether an internal connecting door is essential. We will identify what needs written hotel confirmation before quoting.",
      label: "Plan Our Family Journey",
      href: "/start-planning?source=journal-family-hotel-rooms",
    },
    editorial: {
      contentType: "practical",
      decisionStage: "prepare",
      keyAnswer:
        "A family room label is not enough: confirm occupancy, beds, internal doors, breakfast and the exact room category in writing.",
      appliesTo: [
        "Families",
        "Multigenerational groups",
        "Travelers needing separate sleeping spaces",
      ],
      relatedJourneyReason:
        "The 12-day family journey uses several hotels, so room continuity matters at every stop.",
    },
    sourcePath:
      "content/journal/articles/2026-09-26-china-family-hotel-rooms-connecting-rooms-extra-beds.md",
  },
  {
    slug: "food-allergies-dietary-restrictions-china-travel",
    title: "Food Allergies and Dietary Restrictions in China: A Safer Planning Guide",
    dek: "Turn a dietary requirement into a restaurant, translation and backup plan instead of relying on one translated sentence at the table.",
    excerpt:
      "How to communicate allergies, reduce cross-contact risk, choose restaurants and design a China itinerary around real dietary needs.",
    category: "Food",
    tags: ["food", "family-travel", "first-time-china", "private-guides"],
    author,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    lastFactCheckedAt: "2026-09-26",
    readingTime: "12 min read",
    editorPick: true,
    hero: { eyebrow: "Dietary planning", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Food Allergies in China: Travel & Dining Guide",
      description:
        "Travel in China with food allergies or dietary restrictions. Plan translations, restaurants, cross-contact questions, breakfasts and emergency backups.",
      keywords: [
        "food allergies China travel",
        "dietary restrictions China",
        "gluten free China travel",
        "vegetarian China tour",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: ["china-family-tour-with-pandas-12-day-private-tour", "first-china-beautifully-paced"],
      articles: [
        "first-trip-to-china-planning-guide",
        "bringing-prescription-medicine-to-china",
        "best-apps-for-china-travel-2026",
      ],
    },
    conversion: {
      eyebrow: "Plan food before arrival",
      title: "Make the dietary plan part of the route, not a daily surprise.",
      description:
        "Tell us the exact allergen, severity, acceptable kitchens and foods you can reliably eat. We will explain what can be requested and what cannot be guaranteed.",
      label: "Discuss Dietary Needs",
      href: "/start-planning?source=journal-food-allergies",
    },
    editorial: {
      contentType: "practical",
      decisionStage: "prepare",
      keyAnswer:
        "Translate the exact restriction, select suitable kitchens in advance and carry a backup; a guide can communicate but cannot guarantee an allergen-free kitchen.",
      appliesTo: [
        "Travelers with allergies",
        "Vegetarians and vegans",
        "Families with selective eaters",
      ],
      relatedJourneyReason:
        "A private route can pre-screen meals and protect flexible food choices across multiple cities.",
    },
    sourcePath:
      "content/journal/articles/2026-09-26-food-allergies-dietary-restrictions-china-travel.md",
  },
  {
    slug: "china-high-speed-trains-with-children",
    title: "China High-Speed Trains With Children: Tickets, Stations, Seats and Luggage",
    dek: "Plan the whole hotel-to-hotel family transfer, including passport tickets, station time, food, luggage and the arrival handoff.",
    excerpt:
      "A parent-focused China rail guide covering child fares, passports, seats, boarding, strollers, luggage and realistic transfer timing.",
    category: "Train Travel",
    tags: ["train-travel", "family-travel", "first-time-china"],
    author,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    lastFactCheckedAt: "2026-09-26",
    readingTime: "12 min read",
    editorPick: true,
    hero: { eyebrow: "Family rail planning", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "China High-Speed Trains With Children: 2026 Guide",
      description:
        "Take China high-speed trains with children. Understand child tickets, passport booking, seats, station timing, strollers, food and luggage.",
      keywords: [
        "China high speed train with children",
        "China train child ticket",
        "family train travel China",
        "China train stroller",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: [
        "china-family-tour-with-pandas-12-day-private-tour",
        "beijing-xian-chengdu-shanghai-private-11-day-tour",
      ],
      articles: [
        "china-high-speed-train-foreigners",
        "china-family-tour-with-pandas-12-days",
        "china-packing-list-2026",
      ],
    },
    conversion: {
      eyebrow: "Make the transfer part of the trip",
      title: "Connect the train, children, luggage and both hotels.",
      description:
        "Share the children's ages, passport names, stroller and luggage plan. We will test the complete station day before recommending the train.",
      label: "Plan Our Family Transfers",
      href: "/start-planning?source=journal-family-train",
    },
    editorial: {
      contentType: "practical",
      decisionStage: "prepare",
      keyAnswer:
        "Use each child's valid passport details, choose whether every child needs a seat, and plan the transfer from one hotel room to the next.",
      appliesTo: [
        "Families with children",
        "Families carrying a stroller",
        "Multigenerational groups",
      ],
      relatedJourneyReason:
        "The family panda journey uses rail between major city chapters and protects both station handoffs.",
    },
    sourcePath: "content/journal/articles/2026-09-26-china-high-speed-trains-with-children.md",
  },
  {
    slug: "private-guide-vs-driver-china",
    title: "Private Guide vs Driver in China: Who Does What on a Private Tour?",
    dek: "Understand the different responsibilities of a licensed guide, professional driver, journey designer and operations team before comparing quotations.",
    excerpt:
      "A clear explanation of guide and driver roles in China, including airport meetings, station handoffs, attraction visits and on-trip changes.",
    category: "Travel Guides",
    tags: ["private-guides", "first-time-china", "luxury-travel"],
    author,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    lastFactCheckedAt: "2026-09-26",
    readingTime: "10 min read",
    editorPick: true,
    hero: { eyebrow: "Private service explained", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Private Guide vs Driver in China: Roles Explained",
      description:
        "Compare a private guide and driver in China. Learn who handles interpretation, vehicles, luggage, airport meetings, station transfers and itinerary changes.",
      keywords: [
        "private guide vs driver China",
        "China tour guide and driver",
        "private driver China tour",
        "English speaking guide China",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["first-china-beautifully-paced", "china-at-an-easier-pace-12-day-private-tour"],
      articles: [
        "what-is-included-private-china-tour",
        "private-china-tour-proposal-checklist",
        "what-private-support-changes-first-china-trip",
      ],
    },
    conversion: {
      eyebrow: "Compare service, not labels",
      title: "See who is responsible at every handoff.",
      description:
        "Send us a proposal or route. We will show where guiding, driving, station assistance and China-based operations are included or still unclear.",
      label: "Review My Service Plan",
      href: "/start-planning?source=journal-guide-driver",
    },
    editorial: {
      contentType: "comparison",
      decisionStage: "evaluate",
      keyAnswer:
        "The guide leads interpretation and the day's guest experience; the driver controls the vehicle. A reliable private journey states where each service begins and ends.",
      appliesTo: [
        "First-time visitors",
        "Travelers comparing quotations",
        "Families and older travelers",
      ],
      relatedJourneyReason:
        "The first-China journey shows separate guide, driver and operations responsibilities across a complete route.",
    },
    sourcePath: "content/journal/articles/2026-09-26-private-guide-vs-driver-china.md",
  },
  {
    slug: "luggage-multi-city-china-trip",
    title: "Luggage on a Multi-City China Trip: Trains, Flights and Hotel Handoffs",
    dek: "Pack for the transfer chain, not only the airline, and decide who handles each bag between checkout, security, boarding and the next hotel.",
    excerpt:
      "A practical luggage strategy for China high-speed trains, domestic flights, station security, hotel changes and family travel.",
    category: "Travel Guides",
    tags: ["train-travel", "first-time-china", "family-travel"],
    author,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    lastFactCheckedAt: "2026-09-26",
    readingTime: "11 min read",
    hero: { eyebrow: "Multi-city packing", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Luggage on a Multi-City China Trip: Practical Guide",
      description:
        "Manage luggage on a multi-city China trip. Plan train storage, flight limits, hotel transfers, station security and a lighter packing system.",
      keywords: [
        "luggage multi city China trip",
        "China train luggage",
        "China tour packing luggage",
        "China domestic flight baggage",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
      articles: [
        "china-high-speed-train-foreigners",
        "china-packing-list-2026",
        "how-to-travel-between-beijing-xian-chengdu-shanghai",
      ],
    },
    conversion: {
      eyebrow: "Plan every handoff",
      title: "Make the route work with the luggage you will really carry.",
      description:
        "Tell us the number and size of bags, mobility needs and shopping plans. We will compare rail, air and transfer days with the full luggage chain included.",
      label: "Plan My Multi-City Route",
      href: "/start-planning?source=journal-luggage",
    },
    editorial: {
      contentType: "practical",
      decisionStage: "prepare",
      keyAnswer:
        "Keep each traveler able to move one main case through security and boarding, then write down who handles the bags at every hotel, station and airport handoff.",
      appliesTo: [
        "Multi-city travelers",
        "Families",
        "Older travelers",
        "Travelers using high-speed rail",
      ],
      relatedJourneyReason:
        "The four-city route includes several hotel-to-hotel transfers where luggage design affects the entire day.",
    },
    sourcePath: "content/journal/articles/2026-09-26-luggage-multi-city-china-trip.md",
  },
  {
    slug: "muslim-friendly-travel-china-halal-prayer-guide",
    title: "Muslim-Friendly Travel in China: Halal Meals, Prayer and Route Planning",
    dek: "Plan halal food and prayer as part of the route while distinguishing confirmed arrangements from assumptions about a restaurant or hotel.",
    excerpt:
      "A practical Muslim-friendly China travel guide covering halal meals, breakfast, prayer timing, mosques, ingredient checks and private route design.",
    category: "Travel Guides",
    tags: ["muslim-friendly", "food", "family-travel", "private-guides"],
    author,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    lastFactCheckedAt: "2026-09-26",
    readingTime: "12 min read",
    editorPick: true,
    hero: { eyebrow: "Muslim-friendly planning", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Muslim-Friendly China Travel: Halal & Prayer Guide",
      description:
        "Plan Muslim-friendly travel in China with halal meals, prayer timing, mosque stops, hotel breakfast checks and clear restaurant confirmation.",
      keywords: [
        "Muslim friendly China travel",
        "halal food China tour",
        "Muslim China itinerary",
        "prayer facilities China travel",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["muslim-friendly-china-tour-great-wall-desert-stars"],
      articles: [
        "private-china-tour-from-singapore",
        "food-allergies-dietary-restrictions-china-travel",
        "first-trip-to-china-planning-guide",
      ],
    },
    conversion: {
      eyebrow: "Design the route around real needs",
      title: "Confirm meals and prayer space before the day begins.",
      description:
        "Share your halal standard, prayer priorities, Ramadan dates and family needs. We will state what is confirmed, what needs checking and where the route should remain flexible.",
      label: "Plan a Muslim-Friendly Journey",
      href: "/start-planning?source=journal-muslim-friendly",
    },
    editorial: {
      contentType: "practical",
      decisionStage: "prepare",
      keyAnswer:
        "A Muslim-friendly route needs named meal arrangements, ingredient questions, prayer timing and realistic travel buffers; the label alone is not confirmation.",
      appliesTo: ["Muslim travelers", "Families", "Travelers visiting during Ramadan"],
      relatedJourneyReason:
        "The Great Wall to desert route is designed around Muslim travelers rather than adding a generic dietary note later.",
    },
    sourcePath:
      "content/journal/articles/2026-09-26-muslim-friendly-travel-china-halal-prayer-guide.md",
  },
  {
    slug: "china-weather-disruption-backup-planning",
    title: "China Weather Disruptions: How to Build a Better Backup Plan",
    dek: "Protect the experience by deciding which days can move, which reservations cannot and what a genuinely useful alternative looks like.",
    excerpt:
      "Plan for rain, heat, snow, typhoons, attraction closures and transport disruption without pretending any operator can control the weather.",
    category: "Travel Guides",
    tags: ["first-time-china", "family-travel", "private-guides", "nature"],
    author,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    lastFactCheckedAt: "2026-09-26",
    readingTime: "11 min read",
    editorPick: true,
    hero: { eyebrow: "Contingency planning", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "China Weather Disruptions: Travel Backup Planning",
      description:
        "Prepare a China itinerary for rain, heat, snow, typhoons and closures. Learn how to protect fixed bookings and create useful backup days.",
      keywords: [
        "China weather travel disruption",
        "China trip backup plan",
        "China typhoon travel",
        "China rain itinerary",
      ],
    },
    related: {
      destinations: ["beijing", "chengdu", "zhangjiajie", "shanghai"],
      tours: [
        "beijing-xian-chengdu-shanghai-private-11-day-tour",
        "shanghai-zhangjiajie-floating-peaks",
      ],
      articles: [
        "best-time-to-visit-china",
        "china-golden-week-travel-2026",
        "how-difficult-is-zhangjiajie",
      ],
    },
    conversion: {
      eyebrow: "Prepare a second good decision",
      title: "Build a route that can change without losing its purpose.",
      description:
        "Share your dates and non-negotiable experiences. We will identify weather-sensitive days, fixed reservations and realistic alternatives before travel.",
      label: "Review My Travel Window",
      href: "/start-planning?source=journal-weather-backup",
    },
    editorial: {
      contentType: "practical",
      decisionStage: "prepare",
      keyAnswer:
        "Protect fixed reservations, monitor official warnings and prepare alternatives with comparable value instead of a generic indoor stop.",
      appliesTo: [
        "Multi-city travelers",
        "Mountain routes",
        "Summer and winter visitors",
        "Families",
      ],
      relatedJourneyReason:
        "Private multi-city journeys can keep flexible days and local teams ready to resequence services when conditions change.",
    },
    sourcePath: "content/journal/articles/2026-09-26-china-weather-disruption-backup-planning.md",
  },
  {
    slug: "china-travel-emergency-support-what-to-do",
    title: "What If Something Goes Wrong in China? A Traveler's Action Plan",
    dek: "Know the first call, the documents to protect and the difference between emergency services, consular help, insurance and tour-operator support.",
    excerpt:
      "A calm action plan for a lost passport or phone, illness, missed train, supplier change and other disruptions during a China trip.",
    category: "Travel Guides",
    tags: ["first-time-china", "private-guides", "family-travel"],
    author,
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    lastFactCheckedAt: "2026-09-26",
    readingTime: "12 min read",
    editorPick: true,
    hero: { eyebrow: "On-trip support", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "China Travel Emergency Plan: What to Do & Who to Call",
      description:
        "Know what to do if you lose a passport or phone, become ill, miss a train or face a supplier change during a China trip.",
      keywords: [
        "China travel emergency",
        "lost passport China tourist",
        "missed train China",
        "China tourist emergency numbers",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: ["first-china-beautifully-paced", "china-at-an-easier-pace-12-day-private-tour"],
      articles: [
        "private-china-tour-arrival-handoff-checklist",
        "what-private-support-changes-first-china-trip",
        "china-sim-card-esim-internet-foreign-tourists",
      ],
    },
    conversion: {
      eyebrow: "Know the support path",
      title: "Travel with responsibilities and escalation steps written down.",
      description:
        "Ask us who answers during the trip, what the local team can change and where insurance, authorities or your embassy must take over.",
      label: "Review On-Trip Support",
      href: "/start-planning?source=journal-emergency-support",
    },
    editorial: {
      contentType: "operator",
      decisionStage: "evaluate",
      keyAnswer:
        "Use emergency services for immediate danger, your embassy for passport and consular issues, insurance for covered costs, and the operator for itinerary coordination.",
      appliesTo: [
        "All international visitors",
        "First-time visitors",
        "Families",
        "Travelers with fixed onward bookings",
      ],
      relatedJourneyReason:
        "A privately operated journey makes the local escalation path explicit before the traveler needs it.",
    },
    sourcePath: "content/journal/articles/2026-09-26-china-travel-emergency-support-what-to-do.md",
  },
  {
    slug: "how-to-plan-private-china-trip",
    title: "How to Plan a Private China Trip: From First Conversation to Final Itinerary",
    dek: "A practical planning framework for turning your travel priorities, pace and logistics into a private China journey you can actually evaluate.",
    excerpt:
      "Learn what to share, what a good proposal should show and how AVIORA connects route design, hotels, transport, guiding and local support.",
    category: "Travel Guides",
    tags: ["private-guides", "first-time-china", "luxury-travel"],
    author,
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    lastFactCheckedAt: "2026-09-27",
    readingTime: "9 min read",
    editorPick: true,
    hero: { eyebrow: "Private trip planning", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "How to Plan a Private China Trip | AVIORA",
      description:
        "Plan a private China trip with a clear route, realistic pace, hotels, transport, guides and local support. A practical AVIORA planning guide.",
      keywords: [
        "how to plan a private China trip",
        "private China itinerary planning",
        "tailor made China travel",
        "China travel specialist",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["first-china-beautifully-paced", "china-at-an-easier-pace-12-day-private-tour"],
      articles: [
        "first-trip-to-china-planning-guide",
        "private-china-tour-proposal-checklist",
        "what-is-included-private-china-tour",
      ],
    },
    conversion: {
      eyebrow: "Start with the right questions",
      title: "Tell us what a good China trip needs to feel like.",
      description:
        "Share your dates, travelers, priorities and pace. We will turn the conversation into a route you can review line by line.",
      label: "Start Planning My Trip",
      href: "/start-planning?source=journal-private-trip-planning",
    },
    editorial: {
      contentType: "operator",
      decisionStage: "decide",
      keyAnswer:
        "A private China trip should begin with traveler priorities and operating constraints, then turn into a written route with clear service responsibility and confirmation status.",
      appliesTo: ["First-time visitors", "Couples", "Families", "Small private groups"],
      relatedJourneyReason:
        "The first-China journey shows how a conversation becomes a paced Beijing, Xi'an and Shanghai route.",
    },
    sourcePath: "content/journal/articles/2026-09-27-how-to-plan-private-china-trip.md",
  },
  {
    slug: "private-china-tour-transfers-handoffs-support",
    title: "Private China Tour Transfers: Handoffs, Luggage and Local Support",
    dek: "The quality of a multi-city private trip is often decided between the attractions: at the hotel door, railway station, airport and next-city arrival.",
    excerpt:
      "Understand how private China tour transfers should be planned, including luggage, guide changes, railway stations, airports and the support path between cities.",
    category: "Travel Guides",
    tags: ["train-travel", "private-guides", "first-time-china", "luxury-travel"],
    author,
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    lastFactCheckedAt: "2026-09-27",
    readingTime: "9 min read",
    hero: { eyebrow: "Multi-city operations", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Private China Tour Transfers and Handoffs Explained",
      description:
        "Learn how private China tour transfers should cover luggage, hotels, high-speed rail, airports, guide changes and local support.",
      keywords: [
        "private China tour transfers",
        "China tour airport transfer",
        "China train station transfer",
        "multi city China tour support",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
      articles: [
        "luggage-multi-city-china-trip",
        "china-high-speed-train-foreigners",
        "private-guide-vs-driver-china",
      ],
    },
    conversion: {
      eyebrow: "Make the in-between moments clear",
      title: "Plan the route from hotel door to hotel door.",
      description:
        "Tell us your luggage, mobility and city sequence. We will identify each meeting point, transfer owner and next contact before travel.",
      label: "Plan My Transfers",
      href: "/start-planning?source=journal-transfer-support",
    },
    editorial: {
      contentType: "operator",
      decisionStage: "evaluate",
      keyAnswer:
        "A transfer is not complete until the traveler knows where the handoff begins, who is responsible, how luggage moves and who answers if timing changes.",
      appliesTo: ["Multi-city travelers", "Families", "Older travelers", "First-time visitors"],
      relatedJourneyReason:
        "The first-China route connects airport arrival, high-speed rail and hotel changes under one local operating plan.",
    },
    sourcePath:
      "content/journal/articles/2026-09-27-private-china-tour-transfers-handoffs-support.md",
  },
  {
    slug: "china-tour-no-forced-shopping",
    title: "No Forced Shopping on a China Tour: What to Ask Before Booking",
    dek: "A clear shopping policy is simple to state: sightseeing and cultural experiences should not depend on visiting a required store or buying something.",
    excerpt:
      "Learn how to ask about shopping stops, guide incentives, free time and route priorities before booking a private China tour.",
    category: "Travel Guides",
    tags: ["private-guides", "first-time-china", "luxury-travel"],
    author,
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    lastFactCheckedAt: "2026-09-27",
    readingTime: "7 min read",
    hero: { eyebrow: "A clear service promise", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "China Tours With No Forced Shopping: Questions to Ask",
      description:
        "Understand what a no-forced-shopping China tour should mean, what to confirm in writing and how AVIORA keeps the route focused on your priorities.",
      keywords: [
        "China tour no forced shopping",
        "China private tour shopping policy",
        "China tour shopping stops",
        "private China travel",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["first-china-beautifully-paced", "china-at-an-easier-pace-12-day-private-tour"],
      articles: [
        "how-to-choose-private-china-tour-company",
        "what-is-included-private-china-tour",
        "private-china-tour-proposal-checklist",
      ],
    },
    conversion: {
      eyebrow: "Keep the journey yours",
      title: "Tell us what you want to spend your time doing.",
      description:
        "We can build the route around history, food, neighborhoods, nature or family time, and confirm what is and is not part of the plan.",
      label: "Plan a Shopping-Free Journey",
      href: "/start-planning?source=journal-no-forced-shopping",
    },
    editorial: {
      contentType: "operator",
      decisionStage: "evaluate",
      keyAnswer:
        "Ask for a written statement that shopping is optional, that required sightseeing does not depend on a purchase, and that the day remains aligned with the agreed route.",
      appliesTo: ["First-time visitors", "Families", "Couples", "Travelers comparing operators"],
      relatedJourneyReason:
        "AVIORA's private first-China journeys are built around confirmed sightseeing, local interpretation and traveler priorities rather than required shopping stops.",
    },
    sourcePath: "content/journal/articles/2026-09-27-china-tour-no-forced-shopping.md",
  },
  {
    slug: "how-to-choose-hotels-china-itinerary",
    title: "How to Choose Hotels for a China Itinerary: Location, Rooms and Route Logic",
    dek: "The right hotel is not simply the highest star rating. It should make the next morning, room arrangement and transfer day work better.",
    excerpt:
      "Use a practical hotel framework for China travel: location, room setup, breakfast, service level, neighborhood fit and the effect on the route.",
    category: "Luxury Hotels",
    tags: ["luxury-travel", "first-time-china", "family-travel"],
    author,
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    lastFactCheckedAt: "2026-09-27",
    readingTime: "8 min read",
    hero: { eyebrow: "Hotels as part of the route", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "How to Choose Hotels for a China Itinerary",
      description:
        "Choose China hotels by location, room setup, breakfast, service level and route logic. A practical guide for private journey planning.",
      keywords: [
        "how to choose hotels in China itinerary",
        "best hotel location China itinerary",
        "China family hotel rooms",
        "China luxury hotel planning",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "shanghai", "yunnan"],
      tours: ["first-china-beautifully-paced", "luxury-yunnan-private-tour"],
      articles: [
        "where-to-stay-in-beijing-first-time",
        "where-to-stay-in-shanghai-first-time",
        "china-family-hotel-rooms-connecting-rooms-extra-beds",
      ],
    },
    conversion: {
      eyebrow: "Choose the stay around the traveler",
      title: "Tell us what makes a hotel feel right for your trip.",
      description:
        "Share room needs, preferred atmosphere, breakfast expectations and walking comfort. We will assess hotels as part of the route, not in isolation.",
      label: "Discuss Our Hotel Needs",
      href: "/start-planning?source=journal-hotel-planning",
    },
    editorial: {
      contentType: "comparison",
      decisionStage: "evaluate",
      keyAnswer:
        "Choose hotels by the job they perform in the itinerary: a useful location, a workable room plan, reliable service and a clear relationship to the next movement.",
      appliesTo: ["Couples", "Families", "Older travelers", "Premium private travelers"],
      relatedJourneyReason:
        "The first-China route uses hotel location and room basis to protect sightseeing time and make multi-city movement easier.",
    },
    sourcePath: "content/journal/articles/2026-09-27-how-to-choose-hotels-china-itinerary.md",
  },
  {
    slug: "china-private-tour-weather-delay-support",
    title: "China Private Tour Support: What Happens When Weather or Delays Change the Plan?",
    dek: "Good support is not a promise that nothing will change. It is a clear process for deciding what can move, what is fixed and who acts next.",
    excerpt:
      "Understand how a China-based private operator can respond to rain, storms, transport delays, closures and traveler needs without making promises no one can control.",
    category: "Travel Guides",
    tags: ["private-guides", "first-time-china", "nature", "luxury-travel"],
    author,
    publishedAt: "2026-09-27",
    updatedAt: "2026-09-27",
    lastFactCheckedAt: "2026-09-27",
    readingTime: "8 min read",
    hero: { eyebrow: "Support when plans move", image: textHeroImage, mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "China Private Tour Support for Weather and Delays",
      description:
        "Learn how a private China tour operator should handle weather, delays, closures and traveler changes with clear decisions and local support.",
      keywords: [
        "China private tour support",
        "China tour weather delay",
        "China itinerary changes",
        "China travel operator support",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: ["first-china-beautifully-paced", "beijing-xian-chengdu-shanghai-private-11-day-tour"],
      articles: [
        "china-weather-disruption-backup-planning",
        "china-travel-emergency-support-what-to-do",
        "what-private-support-changes-first-china-trip",
      ],
    },
    conversion: {
      eyebrow: "Know the response before you need it",
      title: "Build flexibility around the experiences that matter most.",
      description:
        "Share your fixed dates and non-negotiables. We will identify weather-sensitive days, supplier limits and the local contact path before travel.",
      label: "Review My Support Plan",
      href: "/start-planning?source=journal-weather-delay-support",
    },
    editorial: {
      contentType: "operator",
      decisionStage: "evaluate",
      keyAnswer:
        "A responsible operator separates what it can coordinate from what it cannot control, then gives the traveler a named contact, realistic alternatives and clear cost or reservation implications.",
      appliesTo: [
        "Multi-city travelers",
        "Families",
        "Mountain routes",
        "Travelers with fixed onward plans",
      ],
      relatedJourneyReason:
        "The first-China journey demonstrates how a China-based team can coordinate guides, transport, hotels and next-day decisions across several cities.",
    },
    sourcePath: "content/journal/articles/2026-09-27-china-private-tour-weather-delay-support.md",
  },
];

const dayTourJournalArticles = buildDayTourArticles([
  mutianyuCluster,
  shanghaiCluster,
  xianCluster,
  chengduCluster,
  guilinCluster,
]);

export const publishedJournalArticles: JournalArticle[] = [
  ...basePublishedJournalArticles,
  ...operationalJournalArticles,
  ...audienceExperienceArticles,
  ...dayTourJournalArticles,
];
