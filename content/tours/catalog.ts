import { destinationAsset } from "@/content/destinations/assets";
import { firstChinaAsset } from "@/content/tours/assets";
import { tours } from "@/content/tours";
import type { MediaAsset } from "@/types/component-library";

export type JourneyCatalogItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  hook: string;
  image: MediaAsset;
  href: string;
  kind: "featured" | "framework";
  routeLabel: string;
  durationLabel: string;
  styleFilters: string[];
  destinationFilters: string[];
  bestForFilters: string[];
  destinations: { label: string; href: string }[];
  statusLabel?: string;
  planningNote?: string;
};

const flagship = tours[0];
const chengdu = tours.find((tour) => tour.slug === "chengdu-pandas-sichuan-table");

if (!flagship) {
  throw new Error("The flagship journey is required for the journeys catalog.");
}

if (!chengdu) {
  throw new Error("The Chengdu journey is required for the journeys catalog.");
}

const firstChina: JourneyCatalogItem = {
  slug: flagship.slug,
  title: flagship.title,
  eyebrow: "Featured journey",
  summary: flagship.subtitle,
  hook: "A considered first-China arc, with the pace and comfort level shaped around the people traveling.",
  image: flagship.hero.image,
  href: `/tours/${flagship.slug}`,
  kind: "featured",
  routeLabel: flagship.route,
  durationLabel: "9-12 days",
  styleFilters: ["Quiet Luxury"],
  destinationFilters: ["Beijing", "Xi'an", "Shanghai"],
  bestForFilters: ["First-time visitors", "Families", "Couples", "Luxury travelers"],
  destinations: [
    { label: "Beijing", href: "/destinations/beijing" },
    { label: "Xi'an", href: `/tours/${flagship.slug}#itinerary` },
    { label: "Shanghai", href: "/destinations/shanghai" },
  ],
};

const chengduJourney: JourneyCatalogItem = {
  slug: chengdu.slug,
  title: chengdu.title,
  eyebrow: "Private journey",
  summary: chengdu.subtitle,
  hook: "Pandas, tea, and Sichuan food with enough breathing room for families and older travelers.",
  image: chengdu.hero.image,
  href: `/tours/${chengdu.slug}`,
  kind: "featured",
  routeLabel: chengdu.route,
  durationLabel: "5 days / 4 nights",
  styleFilters: ["Family", "Food", "Slow Travel"],
  destinationFilters: ["Chengdu", "Leshan"],
  bestForFilters: ["Families", "Seniors", "Food lovers"],
  destinations: [
    { label: "Chengdu", href: "/destinations/chengdu" },
    { label: "Leshan", href: `/tours/${chengdu.slug}#itinerary` },
  ],
};

const frameworkJourneys: JourneyCatalogItem[] = [
  {
    slug: "family-china",
    title: "Family China",
    eyebrow: "Journey framework",
    summary:
      "A private China route shaped around family energy, curiosity, and easier transitions.",
    hook: "The route starts with your family rhythm, then builds the right mix of culture, food, and breathing room.",
    image: firstChinaAsset.beijingGreatWallGroup,
    href: "/tours/family-china",
    kind: "framework",
    routeLabel: "Family-led route planning",
    durationLabel: "9-12 days",
    styleFilters: ["Family"],
    destinationFilters: ["Beijing", "Shanghai", "Chengdu"],
    bestForFilters: ["Families"],
    destinations: [
      { label: "Beijing", href: "/destinations/beijing" },
      { label: "Shanghai", href: "/destinations/shanghai" },
      { label: "Chengdu", href: "/destinations/chengdu" },
    ],
    statusLabel: "Shaped after inquiry",
    planningNote:
      "This is a product direction, not a fixed package. Cities, dates, hotel tier, and daily details are confirmed with your family before a proposal is issued.",
  },
  {
    slug: "quiet-luxury-china",
    title: "Quiet Luxury China",
    eyebrow: "Journey framework",
    summary:
      "A private China journey where better rhythm, thoughtful rooms, and calm logistics carry the experience.",
    hook: "For travelers who want premium comfort without losing local texture or turning the route into a checklist.",
    image: firstChinaAsset.shanghaiPudongCoupleNight,
    href: "/tours/quiet-luxury-china",
    kind: "framework",
    routeLabel: "Comfort-led city and culture planning",
    durationLabel: "9-12 days",
    styleFilters: ["Quiet Luxury"],
    destinationFilters: ["Beijing", "Shanghai"],
    bestForFilters: ["Couples", "Luxury travelers"],
    destinations: [
      { label: "Beijing", href: "/destinations/beijing" },
      { label: "Shanghai", href: "/destinations/shanghai" },
    ],
    statusLabel: "Shaped after inquiry",
    planningNote:
      "The comfort tier is a planning direction rather than a promise of a specific property. Hotel suggestions depend on dates, availability, and room needs.",
  },
  {
    slug: "slow-travel-china",
    title: "Slow Travel China",
    eyebrow: "Journey framework",
    summary:
      "A softer route with fewer rushed changes, more neighborhood texture, and room for rest.",
    hook: "The shape is designed for travelers who would rather understand fewer places properly than race through many.",
    image: destinationAsset.chengduTeaHouse,
    href: "/tours/slow-travel-china",
    kind: "framework",
    routeLabel: "Slower, texture-led route planning",
    durationLabel: "9-12 days",
    styleFilters: ["Slow Travel"],
    destinationFilters: ["Chengdu", "Shanghai"],
    bestForFilters: ["Couples", "Families"],
    destinations: [
      { label: "Chengdu", href: "/destinations/chengdu" },
      { label: "Shanghai", href: "/destinations/shanghai" },
    ],
    statusLabel: "Shaped after inquiry",
    planningNote:
      "The final city sequence and length are chosen around your preferred pace, interests, and mobility needs rather than a pre-set package.",
  },
  {
    slug: "photography-focused-china",
    title: "Photography-Focused China",
    eyebrow: "Journey framework",
    summary:
      "A visual route planned around light, timing, viewpoints, and the patience better images require.",
    hook: "Iconic places remain part of the story, but the day is built around when and how they are best experienced.",
    image: destinationAsset.zhangjiajieSpirePortrait,
    href: "/tours/photography-focused-china",
    kind: "framework",
    routeLabel: "Light- and viewpoint-led planning",
    durationLabel: "9-12 days",
    styleFilters: ["Photography"],
    destinationFilters: ["Beijing", "Shanghai"],
    bestForFilters: ["First-time visitors", "Couples"],
    destinations: [
      { label: "Beijing", href: "/destinations/beijing" },
      { label: "Shanghai", href: "/destinations/shanghai" },
    ],
    statusLabel: "Shaped after inquiry",
    planningNote:
      "The image-led route is refined around your equipment, interests, travel dates, and tolerance for early starts or longer stays.",
  },
];

export const journeyCatalog: JourneyCatalogItem[] = [
  firstChina,
  chengduJourney,
  ...frameworkJourneys,
];

export function getJourneyCatalogItem(slug: string) {
  return journeyCatalog.find((item) => item.slug === slug);
}
