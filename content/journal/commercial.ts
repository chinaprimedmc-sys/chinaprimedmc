import { destinationAsset } from "@/content/destinations/assets";
import { commercialArticleContent } from "@/content/journal/commercial-content";
import type { MediaAsset } from "@/types/component-library";
import type { JournalArticle, JournalCategory } from "@/types/journal";

const author = {
  name: "AVIORA Travel Team",
  role: "China travel specialists",
};

const commercialHeroImages = {
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
  conversionTitle: string;
  conversionDescription: string;
  conversionLabel: string;
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
    publishedAt: "2026-08-12",
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
    conversion: {
      eyebrow: "Plan with a China specialist",
      title: input.conversionTitle,
      description: input.conversionDescription,
      label: input.conversionLabel,
      href: `/start-planning?source=journal-${input.slug}`,
    },
  };
}

export const commercialJournalArticles: JournalArticle[] = [
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
    title: "China Itinerary for Older Travelers: A Comfortable 10-Day Route",
    dek: "See Beijing, Xi'an and Shanghai with fewer hotel changes, realistic walking, reliable transfers and time to recover between major sights.",
    excerpt:
      "A comfortable ten-day China itinerary for older and multigenerational travelers who want depth without exhausting days.",
    category: "Travel Guides",
    tags: ["first-time-china", "beijing", "xian", "shanghai", "private-guides"],
    readingTime: "14 min read",
    eyebrow: "Comfortable China travel",
    hero: commercialHeroImages.olderTravelers,
    gallery: [
      destinationAsset.xianTerracotta,
      destinationAsset.shanghaiSkyline,
      destinationAsset.chengduTeaHouse,
    ],
    seoTitle: "China Itinerary for Older Travelers: 10 Days",
    seoDescription:
      "Plan a comfortable 10-day China itinerary for older travelers with fewer hotel changes, manageable walking, private transfers and flexible sightseeing.",
    keywords: [
      "China tour for seniors",
      "China itinerary older travelers",
      "comfortable China tour",
      "China travel for elderly parents",
    ],
    destinations: ["beijing", "xian", "shanghai"],
    tours: [
      "first-china-beautifully-paced",
      "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
    ],
    experiences: ["private-guides", "train-travel"],
    articles: ["10-day-china-itinerary-first-time-visitors", "china-high-speed-train-foreigners"],
    conversionTitle: "Design the route around comfort, not an age label.",
    conversionDescription:
      "Tell us about walking comfort, stairs, room preferences and medical considerations that affect logistics. We will adapt the daily rhythm discreetly.",
    conversionLabel: "Plan a Comfortable Journey",
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
        src: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-morning.webp",
        alt: "The Temple of Heaven in Beijing during a quiet morning visit",
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
];
