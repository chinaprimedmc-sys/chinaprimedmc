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
    width: 1920,
    height: 1280,
    fit: "contain",
  },
  guide: {
    src: "/journal/2026-08-18/older-travelers-private-guide.webp",
    alt: "Travelers exploring China with a private local guide",
    width: 1600,
    height: 1200,
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
      destinations: ["beijing", "xian", "shanghai"],
      tours: [journey],
      experiences: ["private-guides", "train-travel"],
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

export const seniorClusterArticles: JournalArticle[] = [
  article({
    slug: "china-tours-for-seniors",
    title: "China Tours for Seniors: What a Good Tour Should Actually Change",
    dek: "A senior-friendly label proves nothing. See which route, hotel, transfer and guide decisions should be visibly different before you pay.",
    excerpt:
      "A field-level comparison of China tours for seniors, built from the hard days and handovers that brochures tend to hide.",
    tags: ["senior-travel", "private-guides", "first-time-china", "beijing", "xian", "shanghai"],
    readingTime: "17 min read",
    eyebrow: "China senior tour guide",
    hero: images.couple,
    gallery: [images.guide, images.terracotta, images.shanghai],
    seoTitle: "China Tours for Seniors: What Good Tours Change",
    seoDescription:
      "Compare China tours for seniors by route, hard days, hotels, transfers, guides and flexibility. See what a genuinely easier-paced tour changes.",
    keywords: [
      "China tours for seniors",
      "senior China tours",
      "China tours for over 60s",
      "best China tour for seniors",
    ],
    articles: [
      "china-travel-for-seniors",
      "how-much-walking-china-tour",
      "are-china-group-tours-too-fast-for-seniors",
    ],
    conversionTitle: "Send us the itinerary you are comparing.",
    conversionDescription:
      "We will identify its hardest days, hidden transfers and missing confirmations before discussing whether a private route would be better.",
    conversionLabel: "Request a Tour Comparison",
    preference: "senior-tour-comparison",
  }),
  article({
    slug: "china-travel-for-seniors",
    title: "China Travel for Seniors: A Practical Guide to Planning the Trip Well",
    dek: "Plan the route, season, walking, trains, hotels, payments and support without reducing the traveler to an age bracket.",
    excerpt:
      "A complete practical introduction to senior travel in China, written by the team that handles the journeys on the ground.",
    tags: ["senior-travel", "first-time-china", "train-travel", "private-guides"],
    readingTime: "18 min read",
    eyebrow: "Senior travel in China",
    hero: images.temple,
    gallery: [images.train, images.wall, images.shanghai],
    seoTitle: "China Travel for Seniors: Practical Planning Guide",
    seoDescription:
      "Plan China travel for seniors with realistic advice on routes, walking, weather, trains, hotels, payments and private or group support.",
    keywords: [
      "China travel for seniors",
      "senior travel China",
      "China travel for older adults",
      "China vacation for seniors",
    ],
    articles: [
      "china-tours-for-seniors",
      "best-places-china-senior-travelers",
      "best-time-to-visit-china-for-seniors",
    ],
    conversionTitle: "Tell us what you want China to feel like.",
    conversionDescription:
      "Share your dates, priorities and preferred rhythm. We will recommend the route before asking you to choose a product.",
    conversionLabel: "Discuss My China Trip",
    preference: "senior-china-planning",
  }),
  article({
    slug: "china-trip-with-older-parents",
    title: "Planning a China Trip With Older Parents: 12 Questions Before Booking",
    dek: "Twelve family conversations that prevent parents becoming passengers and adult children becoming unpaid trip managers.",
    excerpt:
      "A practical planning guide built around what parents want, what the family should decide and what the local team should carry.",
    tags: ["senior-travel", "family-travel", "first-time-china", "private-guides"],
    readingTime: "16 min read",
    eyebrow: "China with older parents",
    hero: images.guide,
    gallery: [images.temple, images.train, images.shanghai],
    seoTitle: "China Trip With Older Parents: 12 Questions",
    seoDescription:
      "Planning a China trip with older parents? Ask these 12 questions about pace, rooms, meals, luggage, family time and local support.",
    keywords: [
      "China trip with older parents",
      "travel to China with elderly parents",
      "China family trip with parents",
      "China tour for parents",
    ],
    articles: [
      "china-travel-for-seniors",
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
    readingTime: "17 min read",
    eyebrow: "Mobility-aware China planning",
    hero: images.palace,
    gallery: [images.wall, images.terracotta, images.guide],
    seoTitle: "China Tours for Seniors With Limited Mobility",
    seoDescription:
      "See what China tours for seniors with limited mobility can adapt, what ancient sites cannot guarantee and when we recommend another route.",
    keywords: [
      "China tours for seniors with limited mobility",
      "accessible China tours for seniors",
      "China tour with wheelchair",
      "China travel mobility support",
    ],
    articles: [
      "how-much-walking-china-tour",
      "mutianyu-great-wall-walking-cable-car",
      "china-travel-for-seniors",
    ],
    conversionTitle: "We will say no when the route does not fit.",
    conversionDescription:
      "Share movement, equipment and essential experiences. We will separate feasible adaptations from claims that cannot be verified.",
    conversionLabel: "Request a Mobility Review",
    preference: "mobility-route-review",
  }),
  article({
    slug: "best-places-china-senior-travelers",
    title: "Best Places to Visit in China for Senior Travelers: An Honest Comparison",
    dek: "Compare Beijing, Xi'an, Shanghai, Chengdu, Guilin, Zhangjiajie and a Yangtze cruise by reward, transfers and the physical day behind the image.",
    excerpt:
      "A destination comparison that includes what must leave the itinerary when another famous place is added.",
    tags: ["senior-travel", "first-time-china", "beijing", "xian", "shanghai"],
    readingTime: "16 min read",
    eyebrow: "China destination comparison",
    hero: images.shanghai,
    gallery: [images.wall, images.terracotta, images.temple],
    seoTitle: "Best Places in China for Senior Travelers",
    seoDescription:
      "Compare the best places to visit in China for seniors by cultural value, walking, transfers and the time each destination needs.",
    keywords: [
      "best places to visit in China for seniors",
      "China destinations for senior travelers",
      "senior friendly places in China",
      "best China cities for older travelers",
    ],
    articles: [
      "china-travel-for-seniors",
      "china-itinerary-older-travelers-10-days",
      "best-time-to-visit-china-for-seniors",
    ],
    conversionTitle: "Choose what earns a place - and what does not.",
    conversionDescription:
      "Share the experiences that justify the trip. We will compare routes and show what each additional destination costs in time and energy.",
    conversionLabel: "Compare My Route Options",
    preference: "destination-fit-review",
  }),
  article({
    slug: "are-china-group-tours-too-fast-for-seniors",
    title: "Are China Group Tours Too Fast for Seniors? Private vs Small-Group Travel",
    dek: "The real difference is not the attraction list. It is who controls departure, waiting, walking, meals and the decision to stop.",
    excerpt:
      "A fair comparison for travelers deciding whether shared companionship or private control will produce the better China trip.",
    tags: ["senior-travel", "private-guides", "first-time-china"],
    readingTime: "15 min read",
    eyebrow: "Private vs group pace",
    hero: images.temple,
    gallery: [images.guide, images.train, images.couple],
    seoTitle: "China Group Tours for Seniors: Are They Too Fast?",
    seoDescription:
      "Compare China group tours for seniors with private travel by daily control, waiting, walking, meals, cost and what happens when one person stops.",
    keywords: [
      "China group tours for seniors",
      "private China tour for seniors",
      "small group China tours seniors",
      "are China tours too fast",
    ],
    articles: [
      "china-tours-for-seniors",
      "private-china-tour-vs-group-tour",
      "how-much-walking-china-tour",
    ],
    conversionTitle: "Compare the lived day, not the brochure list.",
    conversionDescription:
      "Send us the group schedule you are considering. We will show which differences private travel would actually create.",
    conversionLabel: "Compare Private and Group",
    preference: "private-vs-group-senior",
  }),
  article({
    slug: "best-time-to-visit-china-for-seniors",
    title: "Best Time to Visit China for Seniors: Weather, Crowds and Better-Paced Days",
    dek: "Choose dates through the hardest outdoor day, holiday pressure and personal weather tolerance rather than a generic national average.",
    excerpt:
      "A season guide that treats heat, cold, crowds and hotel availability as operating conditions, not decorative weather advice.",
    tags: ["senior-travel", "spring", "autumn", "beijing", "xian", "shanghai"],
    readingTime: "14 min read",
    eyebrow: "China season guide",
    hero: images.wall,
    gallery: [images.shanghai, images.temple, images.terracotta],
    seoTitle: "Best Time to Visit China for Seniors",
    seoDescription:
      "Find the best time to visit China for seniors by weather, crowds, holidays and the route's hardest outdoor experience.",
    keywords: [
      "best time to visit China for seniors",
      "best month China senior travel",
      "China weather for seniors",
      "senior China tour season",
    ],
    articles: [
      "best-time-to-visit-china",
      "china-golden-week-travel-2026",
      "china-travel-for-seniors",
    ],
    conversionTitle: "Compare date windows before buying the flights.",
    conversionDescription:
      "Give us two or three possible periods and your weather preferences. We will compare the operating trade-offs across the actual route.",
    conversionLabel: "Request a Date Review",
    preference: "senior-date-review",
  }),
  article({
    slug: "china-tour-cost-for-seniors",
    title: "How Much Does a China Tour for Seniors Cost? What Changes the Quote",
    dek: "There is no age price. Understand how party size, room category, season, transport, guides and included experiences change a private-tour quotation.",
    excerpt:
      "A quote-reading guide that shows where comfort spending pays back and which premium upgrades can safely leave.",
    tags: ["senior-travel", "luxury-travel", "private-guides", "first-time-china"],
    readingTime: "15 min read",
    eyebrow: "Senior China tour cost",
    hero: images.team,
    gallery: [images.train, images.guide, images.shanghai],
    seoTitle: "China Tour Cost for Seniors: Quote Guide",
    seoDescription:
      "Understand China tour cost for seniors: party size, hotels, season, rail, flights, guides and the details every private quote should show.",
    keywords: [
      "China tour cost for seniors",
      "senior China tour price",
      "private China tour cost for seniors",
      "China senior travel packages cost",
    ],
    articles: [
      "private-china-tour-cost-2026",
      "china-tours-for-seniors",
      "are-china-group-tours-too-fast-for-seniors",
    ],
    conversionTitle: "Ask us to explain the quote line by line.",
    conversionDescription:
      "Share dates, travelers and room needs. We will show what drives the price, what protects the journey and what can be removed.",
    conversionLabel: "Request a Cost Review",
    preference: "senior-tour-cost-review",
  }),
  article({
    slug: "china-tours-for-seniors-from-usa",
    title: "China Tours for Seniors From the USA: Flights, First Days and Private Support",
    dek: "Count nights in China, compare open-jaw flights and protect the arrival and departure days before choosing the land itinerary.",
    excerpt:
      "A US-focused planning guide for long-haul flights, gateways, ground support and the difference between package days and days in China.",
    tags: ["senior-travel", "first-time-china", "private-guides", "train-travel"],
    readingTime: "16 min read",
    eyebrow: "China tours from the USA",
    hero: images.train,
    gallery: [images.guide, images.temple, images.shanghai],
    seoTitle: "China Tours for Seniors From USA: Planning Guide",
    seoDescription:
      "Compare China tours for seniors from the USA by flight days, open-jaw gateways, arrival recovery, domestic transport and China-based support.",
    keywords: [
      "China tours for seniors from USA",
      "China tours from USA for seniors",
      "senior China vacation from America",
      "China tour packages from USA seniors",
    ],
    articles: [
      "china-tours-for-seniors",
      "first-trip-to-china-planning-guide",
      "china-240-hour-visa-free-transit-guide",
    ],
    conversionTitle: "Build the land journey around the real flights.",
    conversionDescription:
      "Share your US departure airport and date window. We will test gateways, usable nights and the first two days before shaping the route.",
    conversionLabel: "Plan From My US Gateway",
    preference: "usa-senior-china-planning",
  }),
  article({
    slug: "china-travel-in-your-70s",
    title: "Can You Travel to China in Your 70s? A Realistic First-Trip Guide",
    dek: "Seventy is not an itinerary. Plan from the person, then give the Great Wall, palace and journey enough time to become memories rather than tests.",
    excerpt: "A realistic and optimistic guide to traveling China in your 70s on your own terms.",
    tags: ["senior-travel", "first-time-china", "private-guides", "beijing", "xian", "shanghai"],
    readingTime: "15 min read",
    eyebrow: "China travel in your 70s",
    hero: images.couple,
    gallery: [images.temple, images.shanghai, images.team],
    seoTitle: "China Travel in Your 70s: A Realistic Guide",
    seoDescription:
      "Can you travel to China in your 70s? Plan the route, Great Wall, trains, hotels and support without making this chapter of travel smaller.",
    keywords: [
      "China travel in your 70s",
      "travel to China over 70",
      "China tour for 70 year olds",
      "senior travel to China",
    ],
    articles: [
      "china-travel-for-seniors",
      "how-much-walking-china-tour",
      "china-tours-for-seniors",
    ],
    conversionTitle: "Plan this chapter on your own terms.",
    conversionDescription:
      "Tell us what you want to remember, what feels comfortable and which logistics you want someone else to carry.",
    conversionLabel: "Discuss My First China Journey",
    preference: "travel-in-your-70s",
  }),
];
