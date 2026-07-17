import { destinationAsset } from "@/content/destinations/assets";
import type { MediaAsset } from "@/types/component-library";

export type TravelStyle = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  idealFor: string[];
  designNotes: string[];
  image: MediaAsset;
  relatedTourSlugs: string[];
  relatedDestinationSlugs: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const travelStyles: TravelStyle[] = [
  {
    slug: "family",
    title: "Family China",
    eyebrow: "Travel style",
    summary:
      "Private China journeys for families who need wonder, flexibility, and realistic daily pacing.",
    idealFor: [
      "Parents traveling with school-age children or teens",
      "Multi-generational families balancing different energy levels",
      "Travelers who want hands-on moments rather than only monuments",
    ],
    designNotes: [
      "Shorter museum blocks, stronger guide storytelling, and flexible starts",
      "Hotels chosen for room setup, breakfast reliability, and transfer logic",
      "Food and activity options that can adapt to children without flattening the culture",
    ],
    image: destinationAsset.chengduPanda,
    relatedTourSlugs: ["first-china-beautifully-paced"],
    relatedDestinationSlugs: ["beijing", "chengdu", "shanghai"],
    seo: {
      title: "Private China Family Travel and Tours With Kids",
      description:
        "Plan private China family travel with child-aware guides, pandas, hands-on food, flexible pacing, and hotel logic for parents and children.",
      keywords: ["China family travel", "China with kids", "private China family tour"],
    },
  },
  {
    slug: "luxury",
    title: "Quiet Luxury China",
    eyebrow: "Travel style",
    summary:
      "Luxury here means better rhythm, better rooms, better guide judgment, and fewer moments of friction.",
    idealFor: [
      "Couples or families who value calm logistics over public package travel",
      "Travelers who want premium hotels but still want local texture",
      "Advisors seeking a polished DMC ground partner",
    ],
    designNotes: [
      "Hotel tier and room category are matched to the route rhythm",
      "Private transfers reduce waiting, backtracking, and arrival stress",
      "Guide quality and timing matter as much as the visible itinerary",
    ],
    image: destinationAsset.shanghaiSkyline,
    relatedTourSlugs: ["first-china-beautifully-paced"],
    relatedDestinationSlugs: ["beijing", "shanghai"],
    seo: {
      title: "Luxury Private China Travel",
      description:
        "Design a quiet luxury China journey with private guides, better hotels, smooth transfers, and custom routing for international travelers.",
      keywords: ["luxury China travel", "private luxury China tour", "China DMC luxury"],
    },
  },
  {
    slug: "slow-travel",
    title: "Slow Travel China",
    eyebrow: "Travel style",
    summary:
      "A slower China journey leaves room for neighborhoods, meals, rest, and unscripted context.",
    idealFor: [
      "Travelers who dislike checklist pacing",
      "Older guests who want comfort without losing depth",
      "Couples who prefer fewer cities and more texture",
    ],
    designNotes: [
      "Fewer hotel changes and more two- or three-night stays",
      "Later starts and lighter afternoons where comfort matters",
      "Neighborhood time balanced with major cultural sites",
    ],
    image: destinationAsset.chengduTeaHouse,
    relatedTourSlugs: ["first-china-beautifully-paced"],
    relatedDestinationSlugs: ["chengdu", "shanghai"],
    seo: {
      title: "Slow Travel China Private Journeys",
      description:
        "Plan a slower private China itinerary with fewer hotel changes, softer pacing, and deeper local texture.",
      keywords: [
        "slow travel China",
        "private China itinerary slow pace",
        "senior friendly China travel",
      ],
    },
  },
  {
    slug: "photography",
    title: "Photography-Focused China",
    eyebrow: "Travel style",
    summary:
      "Photography-led trips protect light, timing, viewpoints, and the patience needed for better images.",
    idealFor: [
      "Travelers who care about light and composition",
      "Couples or small groups who want visual variety",
      "First-time visitors who want iconic sites at better hours",
    ],
    designNotes: [
      "Earlier starts or later returns where the image is worth it",
      "Crowd-aware timing for major sites",
      "Landscape and city contrast planned into the route",
    ],
    image: destinationAsset.guilinRiver,
    relatedTourSlugs: ["first-china-beautifully-paced"],
    relatedDestinationSlugs: ["beijing", "shanghai"],
    seo: {
      title: "Private China Photography Travel",
      description:
        "Plan private China photography travel with better timing, scenic routes, iconic city views, and guide support.",
      keywords: ["China photography tour", "private China photo trip", "China scenic itinerary"],
    },
  },
];

export function getTravelStyleBySlug(slug: string) {
  return travelStyles.find((style) => style.slug === slug);
}

export function getTravelStyleSlugs() {
  return travelStyles.map((style) => style.slug);
}
