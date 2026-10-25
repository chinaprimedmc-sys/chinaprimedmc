import type { JournalArticle } from "@/types/journal";

const author = {
  name: "AVIORA China Travel Team",
  role: "China travel specialists",
};

const textHeroImage = {
  src: "/tours/first-china-beautifully-paced/shanghai-waterfront-group.webp",
  alt: "International visitors beside the Shanghai waterfront on a first China journey",
  width: 1920,
  height: 1440,
};

export const audienceExperienceArticles: JournalArticle[] = [
  {
    slug: "muslim-friendly-private-china-travel",
    title: "Muslim-Friendly Private China Travel: Meals, Prayer and Honest Planning",
    dek: "A practical guide to discussing halal standards, prayer time, Ramadan and the details a private China itinerary should confirm in writing.",
    excerpt:
      "See how meal requirements, prayer priorities, guide coverage and local logistics can be planned around your own standards, without vague promises.",
    category: "Travel Guides",
    tags: ["muslim-friendly", "food", "private-guides", "family-travel"],
    author,
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    lastFactCheckedAt: "2026-10-04",
    readingTime: "8 min read",
    hero: { image: textHeroImage, eyebrow: "Plan around your practice", mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Muslim-Friendly China Tours: Halal Meals and Prayer Planning | AVIORA",
      description:
        "Plan Muslim-friendly private travel in China with clear meal standards, prayer-aware timing, Ramadan considerations and date-specific confirmations.",
      keywords: [
        "Muslim friendly China tour",
        "halal travel China",
        "prayer time China itinerary",
        "private Muslim China tour",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["muslim-friendly-china-tour-great-wall-desert-stars"],
      articles: [
        "muslim-friendly-travel-china-halal-prayer-guide",
        "food-allergies-dietary-restrictions-china-travel",
        "china-high-speed-trains-with-children",
      ],
    },
    conversion: {
      eyebrow: "Make the details clear before you travel",
      title: "Tell us what your itinerary needs to respect.",
      description:
        "Share your route, dates, meal standards and prayer priorities. We will check what can be arranged and put confirmed details in the proposal.",
      label: "Discuss a Muslim-Friendly Journey",
      href: "/start-planning?source=audience-muslim-travel",
    },
    sourcePath: "content/journal/articles/2026-10-04-muslim-friendly-private-china-travel.md",
    editorial: {
      contentType: "operator",
      decisionStage: "evaluate",
      keyAnswer:
        "A responsible Muslim-friendly itinerary starts with the traveler’s own food and prayer standards, then confirms specific venues, timing and service limits instead of treating a label as a guarantee.",
      appliesTo: ["Muslim travelers", "Families", "Ramadan travelers", "Private China travelers"],
      relatedJourneyReason:
        "The linked private route is designed for Muslim travelers, while meal and prayer arrangements still require date- and venue-specific confirmation.",
    },
  },
  {
    slug: "women-private-china-travel",
    title: "Women Traveling in China: What Thoughtful Private Support Looks Like",
    dek: "A clear look at arrivals, privacy, guide requests, independent time and the local support worth confirming before a China trip.",
    excerpt:
      "Private support should make the practical details legible, not make blanket safety promises. Here is what to ask and what a planner should confirm.",
    category: "Travel Guides",
    tags: ["first-time-china", "private-guides", "luxury-travel"],
    author,
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    lastFactCheckedAt: "2026-10-04",
    readingTime: "8 min read",
    hero: { image: textHeroImage, eyebrow: "Travel with clarity and independence", mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Women Traveling in China: Private Tours, Guides and Support | AVIORA",
      description:
        "Learn what women should confirm when planning a private China trip, from airport handoffs and hotel location to guide requests and local support.",
      keywords: [
        "women traveling in China",
        "China private tour for women",
        "solo female travel China support",
        "female guide China tour",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["first-china-beautifully-paced"],
      articles: [
        "private-china-tour-arrival-handoff-checklist",
        "private-guide-vs-driver-china",
        "what-private-support-changes-first-china-trip",
      ],
    },
    conversion: {
      eyebrow: "Support should fit the traveler",
      title: "Plan the balance of guidance and independent time that feels right.",
      description:
        "Share your dates, arrival details, room preferences and any guide request. We will check availability and clarify the service scope before you decide.",
      label: "Plan My China Journey",
      href: "/start-planning?source=audience-women-travel",
    },
    sourcePath: "content/journal/articles/2026-10-04-women-private-china-travel.md",
    editorial: {
      contentType: "operator",
      decisionStage: "evaluate",
      keyAnswer:
        "Thoughtful private support for women means clear arrival handoffs, useful hotel locations, guide and driver roles explained, independent time respected and guide preferences checked rather than assumed.",
      appliesTo: ["Solo travelers", "Friends", "Mother-daughter trips", "First-time visitors"],
      relatedJourneyReason:
        "The first-China itinerary links Beijing, Xi’an and Shanghai with private touring and coordinated intercity arrangements that can be reviewed around individual preferences.",
    },
  },
  {
    slug: "slow-paced-china-tour-for-seniors",
    title: "A Slower-Paced China Tour: Design for Comfort, Not Fewer Photos",
    dek: "How to assess walking, hotel changes, transfers, rest and accessibility limits when planning China with older travelers.",
    excerpt:
      "A gentler itinerary depends on the full door-to-door day. Learn what to measure, what private service can change and what public sites still control.",
    category: "Travel Guides",
    tags: ["senior-travel", "first-time-china", "private-guides"],
    author,
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    lastFactCheckedAt: "2026-10-04",
    readingTime: "8 min read",
    hero: { image: textHeroImage, eyebrow: "A more considered pace", mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Slow-Paced China Tours for Seniors: Comfort and Realistic Planning | AVIORA",
      description:
        "Plan a slower China tour for older travelers by checking walking, stairs, hotel changes, transfers, rest stops and accessibility limits before booking.",
      keywords: [
        "slow paced China tour for seniors",
        "China tours for older travelers",
        "senior friendly China itinerary",
        "China private tour mobility",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "shanghai"],
      tours: ["china-at-an-easier-pace-12-day-private-tour", "first-china-beautifully-paced"],
      articles: [
        "how-much-walking-china-tour",
        "china-trip-with-older-parents",
        "china-tours-seniors-limited-mobility",
      ],
    },
    conversion: {
      eyebrow: "Comfort is specific",
      title: "Build the route around the walking your group actually enjoys.",
      description:
        "Tell us about comfortable walking time, stairs, rest needs and fixed travel days. We will review the route and identify details that need supplier confirmation.",
      label: "Review a Slower-Paced Route",
      href: "/start-planning?source=audience-senior-travel",
    },
    sourcePath: "content/journal/articles/2026-10-04-slow-paced-china-tour-for-seniors.md",
    editorial: {
      contentType: "operator",
      decisionStage: "evaluate",
      keyAnswer:
        "A slower China itinerary is designed by reviewing the full sequence of walking, standing, stairs, transfers, hotel changes and rest, while clearly identifying access conditions controlled by public venues.",
      appliesTo: [
        "Older travelers",
        "Families traveling with parents",
        "Travelers who prefer a gentler pace",
        "Travelers with mobility considerations",
      ],
      relatedJourneyReason:
        "The 12-day considered route provides a lower-pressure itinerary starting point, subject to a date-specific review of mobility, hotels and attraction access.",
    },
  },
  {
    slug: "private-china-family-tour-planning",
    title: "Private China Family Tours: Plan the Trip Around Every Age",
    dek: "A useful family itinerary starts with room configuration, meal needs, transfer length and energy—not a checklist of attractions.",
    excerpt:
      "See how a private China trip can balance children, parents and grandparents while making hotel, transport and venue limits clear before booking.",
    category: "Family Travel",
    tags: ["family-travel", "private-guides", "first-time-china", "food"],
    author,
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    lastFactCheckedAt: "2026-10-04",
    readingTime: "8 min read",
    hero: { image: textHeroImage, eyebrow: "Plan for the whole family", mode: "text" },
    gallery: [],
    content: [],
    seo: {
      title: "Private China Family Tours: Rooms, Pacing and Practical Planning | AVIORA",
      description:
        "Plan a private China family tour around children’s interests, room arrangements, dietary needs, train transfers, luggage and realistic daily pacing.",
      keywords: [
        "private China family tour",
        "China family tour planning",
        "China itinerary with children",
        "China family travel logistics",
      ],
    },
    related: {
      destinations: ["beijing", "xian", "chengdu", "shanghai"],
      tours: ["china-family-tour-with-pandas-12-day-private-tour"],
      articles: [
        "china-family-hotel-rooms-connecting-rooms-extra-beds",
        "china-high-speed-trains-with-children",
        "food-allergies-dietary-restrictions-china-travel",
        "china-family-tour-with-pandas-12-days",
      ],
    },
    conversion: {
      eyebrow: "One trip, several different needs",
      title: "Let’s shape a China trip your whole family can enjoy.",
      description:
        "Share ages, interests, room needs, meal requirements and the pace that suits your family. We will turn those details into a practical route to review together.",
      label: "Plan a Family China Tour",
      href: "/start-planning?source=audience-family-travel",
    },
    sourcePath: "content/journal/articles/2026-10-04-private-china-family-tour-planning.md",
    editorial: {
      contentType: "operator",
      decisionStage: "evaluate",
      keyAnswer:
        "A well-planned private China family tour coordinates the family’s interests with confirmed room arrangements, realistic transfers, meal needs and one flexible daily anchor, without implying venues are child-proof or supplier requests are guaranteed.",
      appliesTo: [
        "Families with children",
        "Multi-generational families",
        "First-time China visitors",
        "Families with dietary or room requirements",
      ],
      relatedJourneyReason:
        "The linked 12-day family route includes Chengdu pandas and provides a concrete itinerary to assess against the ages, interests and room needs of a specific family.",
    },
  },
];
