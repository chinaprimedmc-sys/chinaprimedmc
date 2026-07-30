import { destinationAsset } from "@/content/destinations/assets";
import type { JournalArticle, JournalCategory, JournalTag } from "@/types/journal";

export const journalCategories: JournalCategory[] = [
  "Destinations",
  "Travel Guides",
  "Visa",
  "Food",
  "Culture",
  "Luxury Hotels",
  "Festivals",
  "Adventure",
  "Family Travel",
  "Photography",
  "Luxury Travel",
  "Train Travel",
  "Nature",
  "History",
  "Shopping",
];

export const journalTags: JournalTag[] = [
  { slug: "beijing", label: "Beijing", type: "city" },
  { slug: "xian", label: "Xi'an", type: "city" },
  { slug: "chengdu", label: "Chengdu", type: "city" },
  { slug: "shanghai", label: "Shanghai", type: "city" },
  { slug: "first-time-china", label: "First-time China", type: "travel-style" },
  { slug: "family-travel", label: "Family Travel", type: "audience" },
  { slug: "luxury-travel", label: "Luxury Travel", type: "travel-style" },
  { slug: "private-guides", label: "Private Guides", type: "theme" },
  { slug: "train-travel", label: "Train Travel", type: "experience" },
  { slug: "pandas", label: "Pandas", type: "experience" },
  { slug: "food", label: "Food", type: "theme" },
  { slug: "spring", label: "Spring", type: "season" },
  { slug: "autumn", label: "Autumn", type: "season" },
];

const inquiryHref = "mailto:chinaprimedmc@gmail.com?subject=Private%20China%20Journey%20Planning";

export const journalArticles: JournalArticle[] = [
  {
    slug: "how-to-plan-a-first-private-trip-to-china",
    title: "How to Plan a First Private Trip to China Without Feeling Overwhelmed",
    dek: "How to choose the right route, pace, guides and transport for a first private trip to China.",
    excerpt:
      "A calmer planning guide for first-time travelers who want the icons, but not the exhaustion.",
    category: "Travel Guides",
    tags: [
      "beijing",
      "xian",
      "chengdu",
      "shanghai",
      "first-time-china",
      "family-travel",
      "private-guides",
      "train-travel",
    ],
    author: {
      name: "AVIORA Travel Team",
      role: "China travel specialists",
    },
    publishedAt: "2026-06-29",
    readingTime: "7 min read",
    featured: true,
    editorPick: true,
    hero: {
      eyebrow: "First-time China",
      image: destinationAsset.beijingForbiddenCity,
    },
    gallery: [
      destinationAsset.beijingForbiddenCityWide,
      destinationAsset.xianTerracotta,
      destinationAsset.chengduPanda,
      destinationAsset.shanghaiSkyline,
    ],
    content: [
      {
        type: "heading",
        id: "start-with-pace",
        title: "Start with pace, not places",
      },
      {
        type: "paragraph",
        body: "First trips to China often become tiring because they try to include too much. Start with the people traveling. Children may need shorter museum visits, older parents may value more vehicle support, and couples may prefer stronger hotels and quieter evenings. Once the daily pace feels honest, choosing the route becomes easier.",
      },
      {
        type: "paragraph",
        body: "For a first visit, Beijing, Xi'an, and Shanghai create a clear arc: imperial scale, ancient history, and modern city life. The route feels complete without pretending to cover the whole country.",
      },
      {
        type: "image",
        image: destinationAsset.beijingForbiddenCityWide,
        caption: "A strong first China route should leave space for context, not only movement.",
      },
      {
        type: "heading",
        id: "choose-icons-carefully",
        title: "Choose the icons carefully",
      },
      {
        type: "paragraph",
        body: "The Forbidden City, Great Wall, Terracotta Army, pandas and Shanghai skyline are famous for good reason. What matters is how you see them. Better timing, fewer stops and guides who adapt the day to your interests can turn a checklist into a memorable experience.",
      },
      {
        type: "quote",
        quote:
          "Better travel is not about doing more. It is about having the time and support to be present where you are.",
        attribution: "AVIORA travel note",
      },
      {
        type: "heading",
        id: "make-logistics-invisible",
        title: "Make logistics feel invisible",
      },
      {
        type: "paragraph",
        body: "China is easier to travel than many first-time visitors expect, but advance planning still matters. Rail stations are large, major sights use timed tickets, and payments or messaging may feel unfamiliar. Arrange these details before arrival so your attention can stay on the place rather than the process.",
      },
      {
        type: "cta",
        eyebrow: "Private route idea",
        title: "Want a first China route shaped around your travelers?",
        description:
          "Tell us who is traveling, what pace feels right, and what worries you. We will suggest the first route shape.",
        primary: { label: "Plan My Trip", href: inquiryHref },
        secondary: {
          label: "View the 9-day sample route",
          href: "/tours/first-china-beautifully-paced",
        },
        image: destinationAsset.chengduPanda,
      },
      {
        type: "heading",
        id: "what-to-leave-out",
        title: "Know what to leave out",
      },
      {
        type: "paragraph",
        body: "A confident itinerary leaves room. It protects rest after long flights, avoids forcing major sights into every day and keeps choices open for food, photography, children or downtime. That flexibility is one of the clearest benefits of traveling privately.",
      },
      {
        type: "faq",
        question: "How many days should a first China trip be?",
        answer:
          "For this route, nine days allows four days in Beijing, two in Xi'an and three in Shanghai. It can be slowed down or extended around your dates and needs.",
      },
      {
        type: "faq",
        question: "Is China suitable for families with children?",
        answer:
          "Yes, if the route is designed around child-friendly pacing. Pandas, food experiences, short hands-on activities, and flexible afternoons make a major difference.",
      },
    ],
    seo: {
      title: "How to Plan a First Private Trip to China",
      description:
        "A premium first-time China travel planning guide covering route pace, private guides, high-speed rail, family travel, senior-friendly planning, and essential itinerary choices.",
      keywords: [
        "first trip to China",
        "private China itinerary",
        "luxury China travel planning",
        "China family travel",
        "China private guide",
      ],
      ogImage: destinationAsset.beijingForbiddenCity,
    },
    related: {
      destinations: ["beijing"],
      tours: ["first-china-beautifully-paced"],
      experiences: ["pandas", "private-guides", "train-travel"],
      articles: ["china-with-kids-what-actually-works"],
    },
  },
  {
    slug: "china-with-kids-what-actually-works",
    title: "Family Travel: What Actually Works",
    dek: "Pandas, rivers, food, and shorter city days usually work better than an adult checklist.",
    excerpt:
      "A family-first look at designing China routes children can enjoy and parents can trust.",
    category: "Family Travel",
    tags: ["chengdu", "family-travel", "pandas", "food", "first-time-china"],
    author: {
      name: "AVIORA Travel Team",
      role: "Family travel specialists",
    },
    publishedAt: "2026-06-29",
    readingTime: "5 min read",
    editorPick: true,
    hero: {
      eyebrow: "Family travel",
      image: destinationAsset.chengduPanda,
    },
    gallery: [destinationAsset.chengduPanda, destinationAsset.chengduTeaHouse],
    content: [
      {
        type: "heading",
        id: "children-need-rhythm",
        title: "Children need rhythm more than landmarks",
      },
      {
        type: "paragraph",
        body: "Family China travel works best when each day has one clear anchor and enough room around it. Pandas in the morning, a relaxed lunch, and a hands-on afternoon often beat three major sites in a row.",
      },
    ],
    seo: {
      title: "Family Travel Planning Guide",
      description:
        "Plan a family-friendly China trip with private pacing, pandas, hands-on food, shorter museum blocks, and child-aware route design.",
      keywords: ["China with kids", "China family tour", "family-friendly China itinerary"],
      ogImage: destinationAsset.chengduPanda,
    },
    related: {
      tours: ["first-china-beautifully-paced"],
      experiences: ["pandas", "food"],
    },
  },
  {
    slug: "best-time-for-a-first-china-journey",
    title: "The Best Time for a First China Journey",
    dek: "Spring and autumn are not just pleasant. They change how much of China travelers can enjoy comfortably.",
    excerpt:
      "A seasonal planning note for travelers comparing spring, summer holidays, autumn, and winter.",
    category: "Travel Guides",
    tags: ["spring", "autumn", "first-time-china", "beijing", "shanghai"],
    author: {
      name: "AVIORA Travel Team",
      role: "China travel specialists",
    },
    publishedAt: "2026-06-29",
    readingTime: "4 min read",
    hero: {
      eyebrow: "Seasonal planning",
      image: destinationAsset.shanghaiSkyline,
    },
    gallery: [destinationAsset.beijingForbiddenCity, destinationAsset.shanghaiSkyline],
    content: [
      {
        type: "heading",
        id: "comfort-changes-the-trip",
        title: "Comfort changes the trip",
      },
      {
        type: "paragraph",
        body: "Good weather makes private travel feel easier. Spring and autumn usually create the strongest balance of walking comfort, photography, and city energy for a first China journey.",
      },
    ],
    seo: {
      title: "Best Time to Visit China for a First Private Trip",
      description:
        "Compare spring, summer, autumn and winter for a first private China trip, with practical notes on weather, crowds and family comfort.",
      keywords: ["best time to visit China", "China travel seasons", "China autumn travel"],
      ogImage: destinationAsset.shanghaiSkyline,
    },
    related: {
      destinations: ["beijing"],
      tours: ["first-china-beautifully-paced"],
    },
  },
];

export function getArticleBySlug(slug: string) {
  return journalArticles.find((article) => article.slug === slug);
}

export function getArticleSlugs() {
  return journalArticles.map((article) => article.slug);
}

export function getFeaturedArticle() {
  return journalArticles.find((article) => article.featured) ?? journalArticles[0];
}

export function getEditorPicks() {
  return journalArticles.filter((article) => article.editorPick);
}

export function getArticlesByCategory(category: JournalCategory) {
  return journalArticles.filter((article) => article.category === category);
}
