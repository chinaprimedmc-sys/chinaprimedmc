import { destinationAsset } from "@/content/destinations/assets";
import type { JournalArticle } from "@/types/journal";

const author = {
  name: "AVIORA Travel Team",
  role: "China travel specialists",
};

const journalImages = {
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
} as const;

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
    hero: { eyebrow: "Entry planning", image: journalImages.visaFreeTransit },
    gallery: [journalImages.visaFreeTransit, destinationAsset.beijingForbiddenCityWide],
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
    readingTime: "8 min read",
    hero: { eyebrow: "Arrival essentials", image: journalImages.accommodationRegistration },
    gallery: [journalImages.accommodationRegistration, destinationAsset.shanghaiSkyline],
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
    readingTime: "9 min read",
    hero: { eyebrow: "Rail planning", image: journalImages.highSpeedTrain },
    gallery: [journalImages.highSpeedTrain, destinationAsset.shanghaiSkyline],
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
    readingTime: "9 min read",
    hero: { eyebrow: "Practical planning", image: journalImages.mobilePayment },
    gallery: [journalImages.mobilePayment, destinationAsset.chengduTeaHouse],
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
    readingTime: "8 min read",
    hero: { eyebrow: "Beijing planning", image: journalImages.forbiddenCityEntrance },
    gallery: [journalImages.forbiddenCityEntrance, destinationAsset.beijingForbiddenCityWide],
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
      ogImage: journalImages.forbiddenCityEntrance,
    },
    related: {
      destinations: ["beijing"],
      tours: ["beijing-great-wall-private-5-day-tour", "first-china-beautifully-paced"],
    },
    sourcePath: "content/journal/articles/2026-08-06-forbidden-city-tickets-foreigners.md",
  },
];
