import type { JourneyCatalogItem } from "@/content/tours/catalog";

export type JourneyDiscoveryProfile = {
  slug: string;
  path: string;
  name: string;
  metadataTitle: string;
  metadataDescription: string;
  queryString: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  service: {
    eyebrow: string;
    title: string;
    description: string;
    items: Array<{
      title: string;
      detail: string;
    }>;
    confirmation: string;
    planningHref: string;
  };
  matches: (journey: JourneyCatalogItem) => boolean;
};

export const journeyDiscoveryProfiles: JourneyDiscoveryProfile[] = [
  {
    slug: "muslim-friendly-china",
    path: "/tours/discover/muslim-friendly-china",
    name: "Muslim-Friendly China Travel",
    metadataTitle: "Muslim-Friendly China Tours | Private Journeys",
    metadataDescription:
      "Explore private China journeys planned around halal dining, prayer timing, local guidance and your preferred travel pace.",
    queryString: "needs=muslim-friendly",
    hero: {
      eyebrow: "AVIORA · Muslim-Friendly Private Travel",
      title: "Muslim-Friendly China Journeys, Planned With Care.",
      description:
        "Explore private routes that can be shaped around halal dining, prayer timing and the needs of the people traveling.",
    },
    service: {
      eyebrow: "How AVIORA Serves You",
      title: "Travel China With Confidence.",
      description:
        "Muslim-friendly private China travel is planned from the beginning, with practical arrangements discussed and confirmed before you book.",
      items: [
        {
          title: "Halal Dining",
          detail:
            "Suitable options are checked locally, with alternatives where choices are limited.",
        },
        {
          title: "Prayer-Friendly Pacing",
          detail: "Prayer times and mosque visits can be considered in the daily plan.",
        },
        {
          title: "Prepared Local Guides",
          detail: "Dietary and practical requirements are shared before your arrival.",
        },
      ],
      confirmation: "Confirmed arrangements are shown clearly in your final itinerary.",
      planningHref: "/start-planning?source=muslim-friendly-journeys",
    },
    matches: (journey) => journey.planningNeedFilters.includes("muslim-friendly"),
  },
  {
    slug: "family-china-tours",
    path: "/tours/discover/family-china-tours",
    name: "Private China Family Journeys",
    metadataTitle: "Private China Family Tours | Tailor-Made Journeys",
    metadataDescription:
      "Explore private family tours of China with suitable hotels, private vehicles and daily pacing planned for every generation.",
    queryString: "travellers=families",
    hero: {
      eyebrow: "AVIORA · Private Family Travel",
      title: "Private China Journeys Designed For Families.",
      description:
        "Find routes that can be planned around children, parents and grandparents, with private support throughout.",
    },
    service: {
      eyebrow: "How AVIORA Serves Your Family",
      title: "Easier Days For Every Generation.",
      description:
        "Family-friendly private China tours are shaped around children’s ages, the comfort of older relatives and the rhythm of your family.",
      items: [
        {
          title: "Age-Aware Pacing",
          detail: "Daily timing, breaks and activity levels are balanced for the people traveling.",
        },
        {
          title: "Family-Ready Hotels",
          detail: "Room configurations and essential hotel requirements are checked in advance.",
        },
        {
          title: "Private Transfers",
          detail: "A private vehicle reduces daily logistics and keeps the journey flexible.",
        },
      ],
      confirmation: "Essential family requirements are confirmed before booking.",
      planningHref: "/start-planning?source=family-journeys",
    },
    matches: (journey) => journey.travelerFilters.includes("families"),
  },
  {
    slug: "china-tours-for-women",
    path: "/tours/discover/china-tours-for-women",
    name: "Private China Travel for Women",
    metadataTitle: "China Tours for Women | Private Local Support",
    metadataDescription:
      "Explore private China tours for women with private guides, trusted drivers and local support from arrival to departure.",
    queryString: "needs=women-traveler-support",
    hero: {
      eyebrow: "AVIORA · Private Travel For Women",
      title: "Private China Journeys With Trusted Local Support.",
      description:
        "Explore routes suited to women traveling solo or together, with private guides, drivers and a China-based team close at hand.",
    },
    service: {
      eyebrow: "How AVIORA Supports You",
      title: "Thoughtful Support Throughout.",
      description:
        "Private China tours for women combine carefully selected local partners, considered arrangements and responsive support from arrival to departure.",
      items: [
        {
          title: "Trusted Local Team",
          detail:
            "Guides, drivers and private transfers are arranged through our China-based team.",
        },
        {
          title: "Considered Stays",
          detail: "Hotel locations and evening arrangements are reviewed with comfort in mind.",
        },
        {
          title: "Personal Support",
          detail: "A local contact remains available when help or an adjustment is needed.",
        },
      ],
      confirmation: "Female guides may be requested and confirmed where available.",
      planningHref: "/start-planning?source=women-friendly-journeys",
    },
    matches: (journey) => journey.planningNeedFilters.includes("women-traveler-support"),
  },
  {
    slug: "easy-paced-china",
    path: "/tours/discover/easy-paced-china",
    name: "Senior-Friendly, Easy-Paced China Journeys",
    metadataTitle: "Senior-Friendly Private China Tours | AVIORA",
    metadataDescription:
      "Explore senior-friendly private China tours with fewer hotel changes, considered walking routes, private transport and flexible daily starts.",
    queryString: "needs=slower-pacing&pace=easy&sort=relaxed",
    hero: {
      eyebrow: "AVIORA · Senior-Friendly Private Travel",
      title: "Easy-Paced China Journeys With More Room To Breathe.",
      description:
        "Explore private routes with a gentler rhythm, then adjust walking, rest time and daily starts around the people traveling.",
    },
    service: {
      eyebrow: "How AVIORA Plans For Comfort",
      title: "See China At A Pace That Feels Right.",
      description:
        "Senior-friendly private China tours are planned with gentler days, fewer hotel changes and practical movement between each experience.",
      items: [
        {
          title: "Gentler Pacing",
          detail: "Balanced sightseeing leaves time to rest, enjoy and recover between days.",
        },
        {
          title: "Easier Access",
          detail:
            "Walking routes, drop-off points and mobility requirements are reviewed in advance.",
        },
        {
          title: "Flexible Days",
          detail: "Private travel allows daily timing to adapt when a slower pace is needed.",
        },
      ],
      confirmation: "Mobility and accessibility requirements are reviewed before booking.",
      planningHref: "/start-planning?source=senior-friendly-journeys",
    },
    matches: (journey) => journey.discovery.pace === "easy",
  },
];

export function getJourneyDiscoveryProfile(slug: string) {
  return journeyDiscoveryProfiles.find((profile) => profile.slug === slug);
}
