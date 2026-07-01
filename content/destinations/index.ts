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
      title: "Private Beijing Tours and Luxury Beijing Travel",
      description:
        "Plan a private Beijing journey with China Prime DMC: Forbidden City, Great Wall, hutongs, family-friendly pacing, luxury hotels, and expert local guides.",
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
        title: "First China, Beautifully Paced",
        description:
          "Beijing, Xi'an, Chengdu, and Shanghai with private guides, stronger pacing, and the big icons handled calmly.",
        tags: ["First-time", "Private"],
        image: destinationAsset.beijingForbiddenCity,
        route: "Beijing, Xi'an, Chengdu, Shanghai",
        duration: "10-12 days",
        style: "Private classic",
        href: inquiryHref,
      },
      {
        title: "China With Kids",
        description:
          "A family-friendly route with Beijing, pandas, easy nature, hands-on meals, and shorter city days.",
        tags: ["Family", "Children"],
        image: destinationAsset.chengduPanda,
        route: "Beijing, Chengdu, Yangshuo, Shanghai",
        duration: "9-11 days",
        style: "Easy family",
        href: inquiryHref,
      },
      {
        title: "Imperial China and Cinematic Landscapes",
        description:
          "Pair Beijing's imperial story with Xi'an history and one dramatic landscape chapter.",
        tags: ["Culture", "Photography"],
        image: destinationAsset.xianTerracotta,
        route: "Beijing, Xi'an, Zhangjiajie",
        duration: "8-10 days",
        style: "Culture and nature",
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
