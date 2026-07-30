import { destinationAsset } from "@/content/destinations/assets";
import type { Destination } from "@/types/destination";

const inquiryHref =
  "mailto:chinaprimedmc@gmail.com?subject=Private%20China%20Destination%20Inquiry";

export const destinations: Destination[] = [
  {
    slug: "beijing",
    name: "Beijing",
    region: "North China",
    coordinates: { latitude: 39.9042, longitude: 116.4074 },
    hero: {
      eyebrow: "Destination guide",
      tagline: "Imperial scale, private rhythm.",
      summary:
        "Beijing is the clearest first chapter for China: palace courtyards, quiet hutongs, temple mornings, and Great Wall moments planned away from the crowds.",
      image: destinationAsset.beijingForbiddenCity,
      primary: { label: "Explore Beijing Tours", href: "#suggested-tours" },
      secondary: { label: "Plan My Beijing Trip", href: inquiryHref },
    },
    seo: {
      title: "Private Beijing Tours with Local Guides",
      description:
        "Plan a private Beijing tour with the Forbidden City, Great Wall, hutongs, well-located hotels and an expert local guide.",
      keywords: [
        "private Beijing tours",
        "luxury Beijing travel",
        "Beijing family tour",
        "Forbidden City private guide",
        "Great Wall private tour",
      ],
    },
    quickFacts: [
      { label: "Location", value: "North China", helper: "Best paired with Xi'an or Shanghai." },
      {
        label: "Best Season",
        value: "Mar-May, Sep-Nov",
        helper: "Clearer skies and milder walking days.",
      },
      {
        label: "Recommended Stay",
        value: "3-5 nights",
        helper: "Enough time for the Wall without rushing.",
      },
      {
        label: "Travel Style",
        value: "Culture, history, family",
        helper: "Strong first-time China destination.",
      },
      {
        label: "Suitable For",
        value: "Families, couples, seniors",
        helper: "Private pacing makes it easier.",
      },
      {
        label: "Visa Notes",
        value: "Transit options may apply",
        helper: "Final rules depend on nationality and route.",
      },
    ],
    whyVisit: {
      title: "Beijing makes China feel understandable without making it feel small.",
      body: "For many travelers, Beijing is where China becomes real: the scale of the Forbidden City, the stillness of temple courtyards, the everyday life of hutongs, and the emotion of standing on the Great Wall. A private route keeps the experience human, paced, and comfortable.",
      image: destinationAsset.beijingForbiddenCityWide,
    },
    bestTime: {
      title: "The best Beijing days are clear, calm, and not rushed.",
      summary:
        "Spring and autumn are usually the most comfortable. Summer can work well for families with smart timing, while winter can be beautiful for travelers who like quieter historic sites.",
      seasons: [
        {
          label: "Spring",
          value: "Comfortable",
          helper: "Good light, blossoms, and mild walking weather.",
        },
        {
          label: "Summer",
          value: "Family holidays",
          helper: "Use early starts, shaded breaks, and lighter afternoons.",
        },
        {
          label: "Autumn",
          value: "Best overall",
          helper: "Crisp air and a strong Great Wall season.",
        },
        {
          label: "Winter",
          value: "Quiet and cinematic",
          helper: "Cold, but atmospheric and less crowded.",
        },
      ],
    },
    highlights: [
      {
        title: "Forbidden City without the checklist feeling",
        description:
          "Move through imperial spaces with context, pauses, and a guide who can make the scale feel personal.",
        category: "Architecture",
        image: destinationAsset.beijingForbiddenCity,
      },
      {
        title: "The Great Wall at a better hour",
        description:
          "Choose quieter sections and timing that protect the emotion of the place, not just the photo.",
        category: "Photography",
        image: destinationAsset.beijingForbiddenCityWide,
      },
      {
        title: "Hutongs, temples, and daily Beijing",
        description:
          "Balance major monuments with smaller streets, tea, local snacks, and slower neighborhood moments.",
        category: "Culture",
        image: destinationAsset.beijingForbiddenCity,
      },
    ],
    experiences: [
      {
        title: "Private Forbidden City storytelling",
        description:
          "A guided route through palace architecture, dynastic stories, family life, and hidden details travelers usually miss.",
        badges: ["Culture", "Private guide"],
        image: destinationAsset.beijingForbiddenCityWide,
      },
      {
        title: "Great Wall sunrise or late afternoon",
        description:
          "A slower Wall experience with private transfers, smarter timing, and enough space to enjoy the view.",
        badges: ["Photography", "Nature"],
        image: destinationAsset.beijingForbiddenCityWide,
      },
      {
        title: "Hands-on family Beijing",
        description:
          "Dumpling kitchens, courtyard neighborhoods, easy museum choices, and guide pacing that works for children.",
        badges: ["Family", "Food"],
        image: destinationAsset.chengduPanda,
      },
    ],
    hotels: [],
    tours: [
      {
        title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
        description:
          "Beijing, Xi'an, and Shanghai with private guides, stronger pacing, and the big icons handled calmly.",
        tags: ["First-time", "Private"],
        image: destinationAsset.beijingForbiddenCity,
        route: "Beijing, Xi'an, Shanghai",
        duration: "9 days",
        style: "Private classic",
        href: inquiryHref,
      },
    ],
    gallery: [destinationAsset.beijingForbiddenCity, destinationAsset.beijingForbiddenCityWide],
    tips: [
      {
        title: "Plan the Great Wall as its own emotional moment.",
        description:
          "Avoid squeezing it between too many city stops. Private timing and the right section matter more than checking a name off a list.",
        category: "Transportation",
      },
      {
        title: "Use private pacing for older parents and children.",
        description:
          "Beijing is large. Shorter museum blocks, shaded rests, and flexible meal timing make the city much easier.",
        category: "Safety",
      },
      {
        title: "Payment and tickets should be arranged in advance.",
        description:
          "Many high-demand sites need planning. Your route should handle tickets, timing, and fallback options before arrival.",
        category: "Payment",
      },
      {
        title: "Expect big walking days unless the route is designed carefully.",
        description:
          "Comfortable shoes, layered clothing, and realistic morning starts keep Beijing inspiring instead of tiring.",
        category: "Packing",
      },
    ],
    faqs: [
      {
        question: "How many days should I spend in Beijing?",
        answer:
          "Most private travelers should plan three to five nights. Three nights can cover the essentials, while four or five gives you a calmer Great Wall day and more local texture.",
      },
      {
        question: "Is Beijing good for families with children?",
        answer:
          "Yes, if the pacing is designed carefully. Children usually enjoy the Great Wall, hutongs, hands-on food experiences, and shorter museum blocks with a flexible guide.",
      },
      {
        question: "Which Great Wall section should I visit?",
        answer:
          "It depends on fitness, season, photography goals, and crowd tolerance. A private plan can choose a quieter or more comfortable section instead of defaulting to the busiest option.",
      },
      {
        question: "Can Beijing work for senior travelers?",
        answer:
          "Yes. Private vehicles, elevator-aware routing, fewer daily stops, and hotel location choices make a major difference for older parents or slower walkers.",
      },
    ],
    related: {
      journeys: [],
      experiences: [],
      articles: [
        {
          title: "How to plan a first private trip to China",
          excerpt:
            "The questions travelers ask before they fall in love with the route: pace, trains, food, payment, hotels, and guides.",
          category: "First-time China",
          image: destinationAsset.beijingForbiddenCity,
          href: inquiryHref,
        },
        {
          title: "China with kids: what actually works",
          excerpt:
            "Why pandas, rivers, hands-on meals, and shorter city days often work better than a checklist of landmarks.",
          category: "Family travel",
          image: destinationAsset.chengduPanda,
          href: inquiryHref,
        },
      ],
    },
  },
  {
    slug: "shanghai",
    name: "Shanghai",
    region: "East China",
    coordinates: { latitude: 31.2304, longitude: 121.4737 },
    hero: {
      eyebrow: "Destination guide",
      tagline: "Modern China with an elegant soft landing.",
      summary:
        "Shanghai pairs skyline drama, Art Deco streets, design hotels, and easy international comfort.",
      image: destinationAsset.shanghaiSkyline,
      primary: { label: "Explore Shanghai Tours", href: "#suggested-tours" },
      secondary: { label: "Plan My Shanghai Trip", href: inquiryHref },
    },
    seo: {
      title: "Private Shanghai Tours and Local Experiences",
      description:
        "Plan a private Shanghai tour with skyline evenings, Art Deco neighborhoods, local food, carefully selected hotels and an expert guide.",
      keywords: [
        "private Shanghai tours",
        "luxury Shanghai travel",
        "Shanghai private guide",
        "Shanghai family tour",
      ],
    },
    quickFacts: [
      { label: "Location", value: "East China", helper: "A natural arrival or finale city." },
      { label: "Best Season", value: "Mar-May, Sep-Nov", helper: "Comfortable walking weather." },
      {
        label: "Recommended Stay",
        value: "2-4 nights",
        helper: "Enough for both old and new Shanghai.",
      },
      {
        label: "Travel Style",
        value: "Design, food, culture",
        helper: "Strong for couples and first-timers.",
      },
      {
        label: "Suitable For",
        value: "Families, couples, seniors",
        helper: "Easy hotel and transport comfort.",
      },
      {
        label: "Travel planning",
        value: "Flexible",
        helper: "Final route details are shaped around your travelers.",
      },
    ],
    whyVisit: {
      title: "Shanghai helps travelers understand China's present tense.",
      body: "The city works well at the beginning or end of a trip, with strong international hotels, layered neighborhoods, skyline views and easy flight connections.",
      image: destinationAsset.shanghaiSkyline,
    },
    bestTime: {
      title: "Shanghai is easiest when the weather supports slow neighborhood time.",
      summary:
        "Spring and autumn are usually strongest. Winter can be stylish and quieter, while summer needs heat-aware pacing.",
      seasons: [
        {
          label: "Spring",
          value: "Fresh and walkable",
          helper: "Good for lanes, food, and gardens.",
        },
        { label: "Summer", value: "Hot and humid", helper: "Use hotel breaks and indoor culture." },
        {
          label: "Autumn",
          value: "Best overall",
          helper: "Comfortable light and skyline evenings.",
        },
        {
          label: "Winter",
          value: "Quiet city style",
          helper: "Cool but manageable with smart routing.",
        },
      ],
    },
    highlights: [
      {
        title: "Bund skyline with context",
        description:
          "Read the city through riverfront architecture, treaty-port history, and modern Pudong contrast.",
        category: "Architecture",
        image: destinationAsset.shanghaiSkyline,
      },
      {
        title: "Former French Concession texture",
        description:
          "Quiet streets, design shops, cafes, and local stories without turning the day into a shopping route.",
        category: "Culture",
        image: destinationAsset.shanghaiSkyline,
      },
      {
        title: "Food-led Shanghai",
        description:
          "Dumplings, neighborhood restaurants, and refined dining can be adjusted around family or senior comfort.",
        category: "Food",
        image: destinationAsset.shanghaiSkyline,
      },
    ],
    experiences: [
      {
        title: "Architecture walk without overload",
        description:
          "A private guide connects the Bund, Art Deco streets, and modern design in a calm half-day route.",
        badges: ["Architecture", "Private guide"],
        image: destinationAsset.shanghaiSkyline,
      },
      {
        title: "Food and neighborhood evening",
        description:
          "A soft, flexible evening designed around appetite, jet lag, and preferred walking distance.",
        badges: ["Food", "Couples"],
        image: destinationAsset.shanghaiSkyline,
      },
      {
        title: "Family-friendly modern China",
        description:
          "Museums, skyline moments, parks, and downtime arranged so children do not spend the day in transit.",
        badges: ["Family", "Easy pacing"],
        image: destinationAsset.shanghaiSkyline,
      },
    ],
    hotels: [],
    tours: [
      {
        title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
        description:
          "A calm first China route ending with Shanghai's skyline, food, and international ease.",
        tags: ["First-time", "Private"],
        image: destinationAsset.shanghaiSkyline,
        route: "Beijing, Xi'an, Shanghai",
        duration: "9 days",
        style: "Private classic",
        href: "/tours/first-china-beautifully-paced",
      },
    ],
    gallery: [destinationAsset.shanghaiSkyline],
    tips: [
      {
        title: "Use Shanghai as a soft landing or finale.",
        description:
          "Its hotels, airport access, and international comfort make arrival and departure days easier.",
        category: "Transportation",
      },
      {
        title: "Protect walking comfort.",
        description:
          "Neighborhoods are rewarding, but private routing should avoid unnecessary backtracking.",
        category: "Safety",
      },
      {
        title: "Separate sightseeing from shopping.",
        description:
          "Retail can be added when requested, but the core day should stay experience-led.",
        category: "Payment",
      },
      {
        title: "Plan skyline timing around weather.",
        description:
          "Evening views are strongest when the schedule leaves room to adjust around visibility.",
        category: "Weather",
      },
    ],
    faqs: [
      {
        question: "Is Shanghai a good first city in China?",
        answer:
          "Yes. Shanghai can be an easy arrival point because hotels, airport transfers, dining, and international comfort are strong.",
      },
      {
        question: "How many nights should we spend in Shanghai?",
        answer:
          "Two to four nights works for most private travelers, depending on arrival timing, food interests, and whether you want a day trip.",
      },
      {
        question: "Is Shanghai suitable for senior travelers?",
        answer:
          "Yes, with hotel location, private transfers, shorter walking blocks, and elevator-aware routing.",
      },
    ],
    related: {
      journeys: [],
      experiences: [],
      articles: [],
    },
  },
  {
    slug: "chengdu",
    name: "Chengdu",
    region: "Southwest China",
    coordinates: { latitude: 30.5728, longitude: 104.0668 },
    hero: {
      eyebrow: "Destination guide",
      tagline: "Pandas, teahouses, and a gentler rhythm.",
      summary:
        "Chengdu gives a private China journey its softer chapter: pandas, Sichuan food, parks, tea, and a pace that works especially well for families.",
      image: destinationAsset.chengduPanda,
      primary: { label: "Explore Chengdu Tours", href: "#suggested-tours" },
      secondary: { label: "Plan My Chengdu Trip", href: inquiryHref },
    },
    seo: {
      title: "Private Chengdu Tours, Panda Experiences and Sichuan Travel",
      description:
        "Plan private Chengdu travel with pandas, teahouses, Sichuan food, family-friendly pacing, and tailored China logistics.",
      keywords: ["private Chengdu tours", "Chengdu panda tour", "Sichuan family travel"],
    },
    quickFacts: [
      {
        label: "Location",
        value: "Southwest China",
        helper: "Pairs well with Xi'an, Yunnan, or Yangshuo.",
      },
      {
        label: "Best Season",
        value: "Mar-Jun, Sep-Nov",
        helper: "Comfortable city and panda days.",
      },
      {
        label: "Recommended Stay",
        value: "2-4 nights",
        helper: "Enough for pandas and Sichuan texture.",
      },
      {
        label: "Travel Style",
        value: "Family, food, slow travel",
        helper: "A softer route chapter.",
      },
      {
        label: "Suitable For",
        value: "Families, couples, seniors",
        helper: "Private pacing is very useful.",
      },
      {
        label: "Travel planning",
        value: "Flexible",
        helper: "Final route details are shaped around your travelers.",
      },
    ],
    whyVisit: {
      title: "Chengdu makes the journey breathe.",
      body: "After heavier historic chapters, Chengdu offers pandas, food, teahouses, parks, and a slower sense of daily life. It is often where family travelers relax into China.",
      image: destinationAsset.chengduTeaHouse,
    },
    bestTime: {
      title: "Chengdu works best when days are paced around pandas and meals.",
      summary:
        "Spring and autumn are most comfortable. Summer can still work for families with morning panda timing and softer afternoons.",
      seasons: [
        { label: "Spring", value: "Soft and green", helper: "Good for parks and food walks." },
        {
          label: "Summer",
          value: "Warm and humid",
          helper: "Keep pandas early and afternoons flexible.",
        },
        { label: "Autumn", value: "Comfortable", helper: "Strong overall season." },
        { label: "Winter", value: "Cool and local", helper: "Good for food and teahouses." },
      ],
    },
    highlights: [
      {
        title: "Panda mornings at a better hour",
        description:
          "Plan around activity windows and family energy instead of treating pandas as a rushed photo stop.",
        category: "Family",
        image: destinationAsset.chengduPanda,
      },
      {
        title: "Teahouse and park life",
        description:
          "A slower look at Chengdu's social rhythm, from tea to mahjong to neighborhood walks.",
        category: "Culture",
        image: destinationAsset.chengduTeaHouse,
      },
      {
        title: "Sichuan food without pressure",
        description:
          "Food can be playful, refined, spicy, mild, halal-aware, or child-friendly depending on the group.",
        category: "Food",
        image: destinationAsset.chengduTeaHouse,
      },
    ],
    experiences: [
      {
        title: "Panda base with family pacing",
        description:
          "Early timing, private transfers, realistic walking, and enough flexibility for children or older parents.",
        badges: ["Family", "Wildlife"],
        image: destinationAsset.chengduPanda,
      },
      {
        title: "Sichuan food introduction",
        description:
          "A guided food experience that can be adjusted for spice level, dietary needs, and comfort.",
        badges: ["Food", "Local life"],
        image: destinationAsset.chengduTeaHouse,
      },
      {
        title: "Tea and neighborhood afternoon",
        description:
          "A calmer day layer for travelers who want China to feel lived-in, not performed.",
        badges: ["Slow travel", "Culture"],
        image: destinationAsset.chengduTeaHouse,
      },
    ],
    hotels: [],
    tours: [],
    gallery: [destinationAsset.chengduPanda, destinationAsset.chengduTeaHouse],
    tips: [
      {
        title: "Visit pandas early.",
        description: "Morning timing usually supports better panda activity and happier children.",
        category: "Weather",
      },
      {
        title: "Keep one slow afternoon.",
        description: "Chengdu's value is partly its rhythm, so avoid overfilling every hour.",
        category: "Packing",
      },
      {
        title: "Brief food preferences clearly.",
        description:
          "Spice, halal, vegetarian, and child-friendly needs can all be handled better when planned in advance.",
        category: "Safety",
      },
    ],
    faqs: [
      {
        question: "Is Chengdu worth adding to a first China trip?",
        answer:
          "For families and travelers who want a softer rhythm, yes. Chengdu balances heavier history chapters with pandas, food, and local life.",
      },
      {
        question: "Can Chengdu work for children?",
        answer:
          "Very well, especially when panda timing, meal choices, and afternoon pacing are designed around children.",
      },
      {
        question: "How many nights are enough in Chengdu?",
        answer:
          "Two nights can cover pandas and a food or tea layer; three or four nights allow a richer Sichuan chapter.",
      },
    ],
    related: {
      journeys: [],
      experiences: [],
      articles: [],
    },
  },
];

export function getDestinationBySlug(slug: string) {
  const destination = destinations.find((item) => item.slug === slug);

  if (!destination) {
    return undefined;
  }

  return {
    ...destination,
    related: {
      ...destination.related,
      journeys: destination.related.journeys.length
        ? destination.related.journeys
        : destination.tours.slice(0, 3),
      experiences: destination.related.experiences.length
        ? destination.related.experiences
        : destination.experiences.slice(0, 3),
    },
  };
}

export function getDestinationSlugs() {
  return destinations.map((destination) => destination.slug);
}
