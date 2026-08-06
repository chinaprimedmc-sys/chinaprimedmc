import { destinationAsset } from "@/content/destinations/assets";
import type { JournalArticle } from "@/types/journal";

const author = {
  name: "AVIORA Travel Team",
  role: "China travel specialists",
};

export const publishedJournalArticles: JournalArticle[] = [
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
    readingTime: "10 min read",
    hero: { eyebrow: "Entry planning", image: destinationAsset.shanghaiSkyline },
    gallery: [destinationAsset.shanghaiSkyline, destinationAsset.beijingForbiddenCityWide],
    content: [],
    seo: {
      title: "China 240-Hour Visa-Free Transit Guide 2026",
      description:
        "Check China’s 240-hour visa-free transit rules, eligible routes, ports and permitted areas before building a Beijing or Shanghai stopover.",
      keywords: [
        "China 240-hour visa-free transit",
        "China transit without visa",
        "China TWOV rules",
        "China stopover itinerary",
      ],
      ogImage: destinationAsset.shanghaiSkyline,
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
    readingTime: "8 min read",
    hero: { eyebrow: "Arrival essentials", image: destinationAsset.chengduTeaHouse },
    gallery: [destinationAsset.chengduTeaHouse, destinationAsset.shanghaiSkyline],
    content: [],
    seo: {
      title: "China Accommodation Registration for Foreigners",
      description:
        "Understand China’s 24-hour accommodation registration rule, hotel handling and the 2026 online pilot for private-home stays before you arrive.",
      keywords: [
        "China accommodation registration for foreigners",
        "China temporary residence registration tourist",
        "register stay in China private apartment",
      ],
      ogImage: destinationAsset.chengduTeaHouse,
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
    readingTime: "9 min read",
    hero: { eyebrow: "Rail planning", image: destinationAsset.xianTerracotta },
    gallery: [destinationAsset.xianTerracotta, destinationAsset.shanghaiSkyline],
    content: [],
    seo: {
      title: "China High-Speed Train Guide for Foreigners",
      description:
        "Book and board China high-speed trains with a passport, understand e-tickets, seat choices, baggage rules and station timing with confidence.",
      keywords: [
        "China high-speed train for foreigners",
        "China train passport booking",
        "China Railway 12306 foreign passport",
        "China train baggage rules",
      ],
      ogImage: destinationAsset.xianTerracotta,
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
    readingTime: "9 min read",
    hero: { eyebrow: "Practical planning", image: destinationAsset.shanghaiSkyline },
    gallery: [destinationAsset.shanghaiSkyline, destinationAsset.chengduTeaHouse],
    content: [],
    seo: {
      title: "China Mobile Payments for Tourists: Setup Guide",
      description:
        "Set up Alipay or Weixin Pay with an overseas card, keep reliable backups and know where cash or cards still matter on a China trip.",
      keywords: [
        "China mobile payment for tourists",
        "Alipay for foreigners",
        "WeChat Pay overseas card",
        "paying in China as a tourist",
      ],
      ogImage: destinationAsset.shanghaiSkyline,
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
    readingTime: "8 min read",
    hero: { eyebrow: "Beijing planning", image: destinationAsset.beijingForbiddenCityWide },
    gallery: [destinationAsset.beijingForbiddenCityWide, destinationAsset.beijingForbiddenCity],
    content: [],
    seo: {
      title: "Forbidden City Tickets for Foreigners: 2026 Guide",
      description:
        "Reserve Forbidden City tickets with a passport, avoid same-day and Monday mistakes, and plan a well-paced Palace Museum visit before Beijing.",
      keywords: [
        "Forbidden City tickets for foreigners",
        "Palace Museum tickets passport",
        "Forbidden City advance booking",
        "Forbidden City closed Monday",
      ],
      ogImage: destinationAsset.beijingForbiddenCityWide,
    },
    related: {
      destinations: ["beijing"],
      tours: ["beijing-great-wall-private-5-day-tour", "first-china-beautifully-paced"],
    },
    sourcePath: "content/journal/articles/2026-08-06-forbidden-city-tickets-foreigners.md",
  },
];
