import type { MediaAsset } from "@/types/component-library";
import type { JournalArticle, JournalCategory } from "@/types/journal";

const author = {
  name: "AVIORA China Travel Team",
  role: "China-based journey designers and operators",
};

const journey = "china-at-an-easier-pace-12-day-private-tour";

const images = {
  couple: {
    src: "/tours/first-china-beautifully-paced/beijing-great-wall-couple.webp",
    alt: "A couple pausing together on the Great Wall outside Beijing",
    width: 1280,
    height: 1920,
    fit: "contain",
  },
  guide: {
    src: "/journal/2026-08-18/older-travelers-private-guide.webp",
    alt: "Travelers exploring China with a private local guide",
    width: 1448,
    height: 1086,
    fit: "contain",
  },
  wall: {
    src: "/tours/first-china-beautifully-paced/beijing-great-wall-wide.webp",
    alt: "The Great Wall crossing green mountains outside Beijing",
    width: 1920,
    height: 1280,
    fit: "contain",
  },
  palace: {
    src: "/journal/2026-08-19/forbidden-city-walking-surfaces-full.webp",
    alt: "Stone courtyards and palace roofs inside the Forbidden City",
    width: 768,
    height: 1024,
    fit: "contain",
  },
  train: {
    src: "/journal/2026-08-06/china-high-speed-train-boarding.webp",
    alt: "An international traveler boarding a high-speed train in China",
    width: 2400,
    height: 3200,
    fit: "contain",
  },
  terracotta: {
    src: "/tours/first-china-beautifully-paced/xian-terracotta-army-group.webp",
    alt: "Travelers viewing the Terracotta Army near Xi'an",
    width: 1920,
    height: 1440,
    fit: "contain",
  },
  shanghai: {
    src: "/tours/first-china-beautifully-paced/shanghai-waterfront-group.webp",
    alt: "Travelers enjoying the Shanghai waterfront together",
    width: 1920,
    height: 1440,
    fit: "contain",
  },
  temple: {
    src: "/journal/2026-08-19/temple-of-heaven-travelers-full.webp",
    alt: "Travelers spending an unhurried morning at the Temple of Heaven",
    width: 1200,
    height: 1600,
    fit: "contain",
  },
  team: {
    src: "/home/editorial/travel-trade-team-singapore.webp",
    alt: "AVIORA China travel specialists meeting international travel partners",
    width: 1080,
    height: 810,
    fit: "contain",
  },
} satisfies Record<string, MediaAsset>;

type Input = {
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  category?: JournalCategory;
  tags: string[];
  readingTime: string;
  eyebrow: string;
  hero: MediaAsset;
  gallery: MediaAsset[];
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  articles: string[];
  conversionTitle: string;
  conversionDescription: string;
  conversionLabel: string;
  preference: string;
  journey?: string;
  destinations?: string[];
  experiences?: string[];
};

function article(input: Input): JournalArticle {
  return {
    slug: input.slug,
    title: input.title,
    dek: input.dek,
    excerpt: input.excerpt,
    category: input.category ?? "Travel Guides",
    tags: input.tags,
    author,
    publishedAt: "2026-08-20",
    updatedAt: "2026-08-20",
    readingTime: input.readingTime,
    editorPick: true,
    hero: { eyebrow: input.eyebrow, image: input.hero },
    gallery: input.gallery,
    content: [],
    seo: {
      title: input.seoTitle,
      description: input.seoDescription,
      keywords: input.keywords,
      ogImage: input.hero,
    },
    related: {
      destinations: input.destinations ?? ["beijing", "xian", "shanghai"],
      tours: [input.journey ?? journey],
      experiences: input.experiences ?? ["private-guides", "train-travel"],
      articles: input.articles,
    },
    sourcePath: `content/journal/articles/2026-08-20-${input.slug}.md`,
    conversion: {
      eyebrow: "Ask the team that operates the journey",
      title: input.conversionTitle,
      description: input.conversionDescription,
      label: input.conversionLabel,
      href: `/start-planning?source=journal-${input.slug}&placement=journal-final-cta&preference=${input.preference}`,
      image: input.gallery[0],
    },
  };
}

export const growthLaunchArticles: JournalArticle[] = [
  article({
    slug: "china-tours-for-seniors",
    title: "China Tours for Seniors: What a Good Tour Should Actually Change",
    dek: "A senior-friendly label proves nothing. See which route, hotel, transfer and guide decisions should be visibly different before you pay.",
    excerpt:
      "A field-level comparison of China tours for seniors, built from the hard days and handovers that brochures tend to hide.",
    tags: ["senior-travel", "private-guides", "first-time-china", "beijing", "xian", "shanghai"],
    readingTime: "18 min read",
    eyebrow: "China senior tour guide",
    hero: images.couple,
    gallery: [images.guide, images.terracotta, images.shanghai],
    seoTitle: "China Tours for Seniors: What Good Tours Change",
    seoDescription:
      "Compare China tours for seniors by route, hard days, rooms and transfers, with a published 12-day private benchmark from US$6,480 per person.",
    keywords: [
      "China tours for seniors",
      "senior China tours",
      "China tours for over 60s",
      "best China tour for seniors",
    ],
    articles: [
      "how-much-walking-china-tour",
      "china-trip-with-older-parents",
      "china-tours-seniors-limited-mobility",
    ],
    conversionTitle: "Send us the itinerary you are comparing.",
    conversionDescription:
      "We will identify its hardest days, hidden transfers and missing confirmations before discussing whether a private route would be better.",
    conversionLabel: "Request a Tour Comparison",
    preference: "senior-tour-comparison",
  }),
  article({
    slug: "best-places-to-visit-china-first-time",
    title: "Best Places to Visit in China for a First Trip: Choose by Experience, Not Fame",
    dek: "Beijing, Xi'an, Shanghai, Chengdu, Guilin and Zhangjiajie all deserve attention. They do not all belong in the same first itinerary.",
    excerpt:
      "A first-trip destination comparison that shows what each place adds, how many nights it needs and what must leave when it enters the route.",
    tags: ["first-time-china", "beijing", "xian", "shanghai", "chengdu"],
    readingTime: "19 min read",
    eyebrow: "First China trip",
    hero: images.shanghai,
    gallery: [images.wall, images.terracotta, images.temple],
    seoTitle: "Best Places to Visit in China for First-Time Visitors",
    seoDescription:
      "Compare the best places to visit in China for a first trip by experience, nights, transport and real 10, 12 and 14-day route trade-offs.",
    keywords: [
      "best places to visit in China for first time",
      "where to go in China first time",
      "best cities in China for tourists",
      "China first trip destinations",
    ],
    articles: [
      "first-trip-to-china-planning-guide",
      "how-many-days-in-china-7-10-14-day-itineraries",
      "best-time-to-visit-china",
    ],
    conversionTitle: "Choose the route before collecting the cities.",
    conversionDescription:
      "Tell us your dates and the three experiences that matter most. We will show which destinations earn their place and which do not.",
    conversionLabel: "Compare My Destination Options",
    preference: "first-trip-destination-review",
    journey: "beijing-xian-chengdu-shanghai-private-11-day-tour",
    destinations: ["beijing", "xian", "shanghai", "chengdu", "zhangjiajie"],
  }),
  article({
    slug: "china-trip-with-older-parents",
    title: "Planning a China Trip With Older Parents: 12 Questions Before Booking",
    dek: "Twelve family conversations that prevent parents becoming passengers and adult children becoming unpaid trip managers.",
    excerpt:
      "A practical planning guide built around what parents want, what the family should decide and what the local team should carry.",
    tags: ["senior-travel", "family-travel", "first-time-china", "private-guides"],
    readingTime: "17 min read",
    eyebrow: "China with older parents",
    hero: images.guide,
    gallery: [images.temple, images.train, images.shanghai],
    seoTitle: "China Trip With Older Parents: 12 Questions",
    seoDescription:
      "Planning a China trip with older parents? Use 12 practical questions and a written family brief for pace, rooms, meals, luggage and local support.",
    keywords: [
      "China trip with older parents",
      "travel to China with elderly parents",
      "China family trip with parents",
      "China tour for parents",
    ],
    articles: [
      "china-tours-for-seniors",
      "how-much-walking-china-tour",
      "china-tours-seniors-limited-mobility",
    ],
    conversionTitle: "Let every traveler have a voice in the route.",
    conversionDescription:
      "Tell us what each family member values and which details are difficult to discuss. We will turn the answers into a workable journey.",
    conversionLabel: "Plan a Trip for My Parents",
    preference: "older-parents-planning",
  }),
  article({
    slug: "china-tours-seniors-limited-mobility",
    title: "China Tours for Seniors With Limited Mobility: What Can and Cannot Be Adapted",
    dek: "Private planning can remove substantial friction. It cannot make every ancient site step-free. See the precise boundary before booking.",
    excerpt:
      "A site-by-site account of workable adaptations, unresolved access questions and the situations in which we would recommend a different route.",
    tags: ["senior-travel", "private-guides", "beijing", "xian", "shanghai"],
    readingTime: "18 min read",
    eyebrow: "Mobility-aware China planning",
    hero: images.palace,
    gallery: [images.wall, images.terracotta, images.guide],
    seoTitle: "China Tours for Seniors With Limited Mobility",
    seoDescription:
      "See what China tours for seniors with limited mobility can adapt, what ancient sites cannot promise and what a written mobility review records.",
    keywords: [
      "China tours for seniors with limited mobility",
      "accessible China tours for seniors",
      "China tour with wheelchair",
      "China travel mobility support",
    ],
    articles: [
      "how-much-walking-china-tour",
      "mutianyu-great-wall-walking-cable-car",
      "china-tours-for-seniors",
    ],
    conversionTitle: "We will say no when the route does not fit.",
    conversionDescription:
      "Share movement, equipment and essential experiences. We will separate feasible adaptations from claims that cannot be verified.",
    conversionLabel: "Request a Mobility Review",
    preference: "mobility-route-review",
  }),
  article({
    slug: "how-much-does-a-trip-to-china-cost",
    title: "How Much Does a Trip to China Cost? Build a Budget That Matches the Journey",
    dek: "Flights are only the first number. Hotels, city changes, guide coverage, rail class, meals and the dates you choose decide whether a China budget is realistic.",
    excerpt:
      "A transparent China trip budget guide for independent, privately supported and fully tailored travel without invented universal prices.",
    tags: ["first-time-china", "luxury-travel", "private-guides", "train-travel"],
    readingTime: "16 min read",
    eyebrow: "China trip budget",
    hero: images.train,
    gallery: [images.team, images.shanghai, images.guide],
    seoTitle: "How Much Does a Trip to China Cost? Budget Guide",
    seoDescription:
      "Plan a realistic China trip cost with published 2026 private land examples from US$1,690, plus flights, hotels, trains, guides, meals and city changes.",
    keywords: [
      "how much does a trip to China cost",
      "China trip cost",
      "China travel budget",
      "cost of China vacation",
    ],
    articles: [
      "private-china-tour-cost-2026",
      "what-is-included-private-china-tour",
      "china-high-speed-train-foreigners",
    ],
    conversionTitle: "Ask for a budget with its assumptions visible.",
    conversionDescription:
      "Share your dates, travelers, hotel expectations and preferred route. We will separate the fixed costs, the choices and the upgrades before quoting.",
    conversionLabel: "Scope My China Budget",
    preference: "china-trip-budget",
    journey: "first-china-beautifully-paced",
  }),
  article({
    slug: "private-china-tour-vs-self-guided",
    title: "Private China Tour or Self-Guided Trip? Decide by the Work You Want to Own",
    dek: "China can be traveled independently. The useful comparison is not freedom versus control, but which reservations, handovers and decisions you want to carry yourself.",
    excerpt:
      "A fair, task-by-task comparison of self-guided China travel, selective local support and a fully private journey.",
    tags: ["first-time-china", "private-guides", "train-travel"],
    readingTime: "17 min read",
    eyebrow: "Private or independent",
    hero: images.temple,
    gallery: [images.guide, images.train, images.couple],
    seoTitle: "Private China Tour vs Self-Guided Trip: Compare",
    seoDescription:
      "Compare a private China tour with self-guided travel by task, risk and cost, including a real nine-day private benchmark from US$3,190 per person.",
    keywords: [
      "private China tour vs self guided",
      "China self guided tour",
      "do I need a tour guide in China",
      "independent travel China",
    ],
    articles: [
      "how-to-choose-private-china-tour-company",
      "private-china-tour-vs-group-tour",
      "china-high-speed-train-foreigners",
    ],
    conversionTitle: "Buy support only where it changes the trip.",
    conversionDescription:
      "Tell us what you enjoy arranging and what you do not. We can propose a fully private journey or support only the difficult sections.",
    conversionLabel: "Compare My Support Options",
    preference: "private-vs-self-guided",
    journey: "beijing-xian-chengdu-shanghai-private-11-day-tour",
  }),
  article({
    slug: "china-tours-from-usa",
    title: "China Tours From the USA: Plan the Land Trip Around the Long-Haul Flights",
    dek: "Count the nights in China, test open-jaw gateways and protect the arrival day before comparing itineraries with the same advertised length.",
    excerpt:
      "A US-focused planning guide to gateways, usable nights, domestic connections, payment setup and China-based support.",
    tags: ["first-time-china", "private-guides", "train-travel", "beijing", "shanghai"],
    readingTime: "16 min read",
    eyebrow: "China tours from America",
    hero: images.shanghai,
    gallery: [images.train, images.guide, images.temple],
    seoTitle: "China Tours From USA: Flights, Routes & Local Support",
    seoDescription:
      "Compare China tours from the USA by real nights in China, arrival and departure gateways, first-day pacing, domestic transport and local support.",
    keywords: [
      "China tours from USA",
      "China vacation packages from USA",
      "China private tours from USA",
      "China trip from America",
    ],
    articles: [
      "first-trip-to-china-planning-guide",
      "china-240-hour-visa-free-transit-guide",
      "how-to-travel-between-beijing-xian-chengdu-shanghai",
    ],
    conversionTitle: "Test the route before buying the long-haul flights.",
    conversionDescription:
      "Share your US departure airport and date window. We will compare gateways, usable nights and the first two days before shaping the land journey.",
    conversionLabel: "Plan From My US Gateway",
    preference: "usa-china-planning",
    journey: "beijing-xian-chengdu-shanghai-private-11-day-tour",
  }),
  article({
    slug: "luxury-china-tour-planning-guide",
    title: "Luxury China Tours: What Should Be Better Beyond the Hotel Name?",
    dek: "Real luxury appears in time, access, guide judgment, room detail and recovery when conditions change - not in a string of five-star logos.",
    excerpt:
      "A buyer's guide to the operational differences that should be visible in a high-end private China journey before you pay.",
    tags: ["luxury-travel", "private-guides", "first-time-china"],
    readingTime: "15 min read",
    eyebrow: "Luxury China travel",
    hero: images.team,
    gallery: [images.guide, images.shanghai, images.temple],
    seoTitle: "Luxury China Tours: A Private Journey Buyer's Guide",
    seoDescription:
      "Compare luxury China tours by hotel detail, private guides, access, transport, dining, flexibility and local support. See what premium should actually change.",
    keywords: [
      "luxury China tours",
      "luxury China travel",
      "private luxury China tour",
      "bespoke China vacation",
    ],
    articles: [
      "private-china-tour-cost-2026",
      "how-to-choose-private-china-tour-company",
      "what-is-included-private-china-tour",
    ],
    conversionTitle: "Make the premium visible before you pay it.",
    conversionDescription:
      "Share the rooms, experiences and service moments that matter. We will translate them into named arrangements and explicit confirmations.",
    conversionLabel: "Design a Luxury China Journey",
    preference: "luxury-china-journey",
    journey: "beijing-xian-chengdu-shanghai-private-11-day-tour",
  }),
  article({
    slug: "beijing-or-shanghai-first-time",
    title: "Beijing or Shanghai for a First Trip? Start With the Experience You Want",
    dek: "Beijing carries more of imperial China; Shanghai gives the easier international landing and a sharper view of the present. The right first city depends on the rest of the route.",
    excerpt:
      "A practical Beijing-versus-Shanghai comparison covering sights, day trips, walking, airports, food and onward travel.",
    tags: ["first-time-china", "beijing", "shanghai", "train-travel"],
    readingTime: "15 min read",
    eyebrow: "Beijing vs Shanghai",
    hero: images.wall,
    gallery: [images.shanghai, images.temple, images.train],
    seoTitle: "Beijing or Shanghai for First-Time Visitors? Compare",
    seoDescription:
      "Choose Beijing or Shanghai for a first China trip by landmarks, atmosphere, day trips, airports, walking and route connections. See when to visit both.",
    keywords: [
      "Beijing or Shanghai first time",
      "Beijing vs Shanghai travel",
      "should I visit Beijing or Shanghai",
      "Beijing Shanghai first trip",
    ],
    articles: [
      "best-places-to-visit-china-first-time",
      "how-many-days-beijing-xian-shanghai",
      "shanghai-pudong-hongqiao-airport-guide",
    ],
    conversionTitle: "Choose the gateway as part of the route.",
    conversionDescription:
      "Send your flight options and must-see experiences. We will test Beijing-first, Shanghai-first and open-jaw versions before you book.",
    conversionLabel: "Compare My Gateway Options",
    preference: "beijing-shanghai-gateway",
    journey: "first-china-beautifully-paced",
    destinations: ["beijing", "shanghai"],
  }),
  article({
    slug: "two-week-china-itinerary-first-time",
    title: "Two Weeks in China: A First-Time Itinerary With Four Different Chapters",
    dek: "Fourteen days can hold Beijing, Xi'an, Chengdu and Shanghai if each city has a reason to be there and the transfer days are treated as real days.",
    excerpt:
      "A complete two-week China itinerary with nights, transport logic, alternatives and the exact trade-offs behind a four-city route.",
    tags: ["first-time-china", "beijing", "xian", "chengdu", "shanghai", "train-travel"],
    readingTime: "19 min read",
    eyebrow: "Two weeks in China",
    hero: images.couple,
    gallery: [images.wall, images.terracotta, images.shanghai],
    seoTitle: "Two Weeks in China: First-Time 14-Day Itinerary",
    seoDescription:
      "Plan two weeks in China with a 14-day Beijing, Xi'an, Chengdu and Shanghai route, slower alternatives and a real four-city price benchmark.",
    keywords: [
      "two weeks in China itinerary",
      "14 day China itinerary",
      "China itinerary 2 weeks",
      "two week China trip first time",
    ],
    articles: [
      "how-many-days-in-china-7-10-14-day-itineraries",
      "10-day-china-itinerary-first-time-visitors",
      "how-to-travel-between-beijing-xian-chengdu-shanghai",
    ],
    conversionTitle: "Make every fourth city earn the transfer.",
    conversionDescription:
      "Tell us whether pandas, food, landscape or extra time matter most. We will adapt the 14-day structure before checking services.",
    conversionLabel: "Shape My Two-Week Route",
    preference: "two-week-china-route",
    journey: "beijing-xian-chengdu-shanghai-private-11-day-tour",
    destinations: ["beijing", "xian", "chengdu", "shanghai"],
  }),
];
