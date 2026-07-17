import { destinationAsset } from "@/content/destinations/assets";
import type { MediaAsset } from "@/types/component-library";

export type PlanningCard = {
  title: string;
  description: string;
  href: string;
  image: MediaAsset;
  badges: string[];
};

export type PlanningFact = {
  label: string;
  value: string;
  helper: string;
};

export type PlanningStep = {
  title: string;
  description: string;
  detail: string;
};

export type PlanningFaqItem = {
  question: string;
  answer: string;
};

export type PlanningFaqCategory = {
  category: string;
  description: string;
  items: PlanningFaqItem[];
};

export type AudienceGuide = {
  slug: "family-travel" | "senior-travel";
  eyebrow: string;
  title: string;
  summary: string;
  image: MediaAsset;
  primaryConcern: string;
  bestFor: string[];
  designDetails: PlanningStep[];
  ctaTitle: string;
  ctaDescription: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export type StartPlanningOption = {
  label: string;
  value: string;
  helper?: string;
};

export const startPlanningOptions = {
  travelerTypes: [
    {
      label: "Family",
      value: "family",
      helper: "Parents, children, grandparents, or school-holiday travel.",
    },
    {
      label: "Couple",
      value: "couple",
      helper: "A private route with more space for hotels, food, and slower days.",
    },
    {
      label: "Solo traveler",
      value: "solo",
      helper: "Private guiding and logistics around one traveler.",
    },
    {
      label: "Small group",
      value: "small-group",
      helper: "Friends, relatives, affinity groups, or advisor-led groups.",
    },
  ],
  travelStyles: [
    {
      label: "Family China",
      value: "family",
      helper: "Pandas, hands-on moments, and child-aware pacing.",
    },
    {
      label: "Quiet luxury",
      value: "quiet-luxury",
      helper: "Better hotels, private transfers, and smoother daily rhythm.",
    },
    {
      label: "Slow travel",
      value: "slow-travel",
      helper: "Fewer cities, more breathing room, gentler starts.",
    },
    {
      label: "Photography-focused",
      value: "photography",
      helper: "Light, timing, viewpoints, and crowd-aware days.",
    },
    {
      label: "Senior-friendly",
      value: "senior-friendly",
      helper: "Comfort-led days, lower walking load, and clearer contact.",
    },
  ],
  destinations: [
    { label: "Beijing", value: "beijing" },
    { label: "Xi'an", value: "xian" },
    { label: "Shanghai", value: "shanghai" },
    { label: "Chengdu", value: "chengdu" },
    { label: "Still deciding", value: "undecided" },
  ],
  budgetTiers: [
    {
      label: "Comfortable",
      value: "comfortable",
      helper: "Well-located hotels, private guiding, and thoughtful daily logistics.",
    },
    {
      label: "Luxury",
      value: "luxury",
      helper: "Higher hotel standards, stronger room choices, and a more seamless pace.",
    },
    {
      label: "Ultra-bespoke",
      value: "ultra-bespoke",
      helper: "Exceptional access, top-tier stays, and planning around highly specific priorities.",
    },
  ],
  contactMethods: [
    { label: "Email", value: "email", helper: "Best for detailed route notes." },
    { label: "WhatsApp", value: "whatsapp", helper: "Fastest for short back-and-forth." },
    { label: "Phone", value: "phone", helper: "Helpful for senior travelers or urgent clarity." },
  ],
} satisfies Record<string, StartPlanningOption[]>;

export const planningCards: PlanningCard[] = [
  {
    title: "Visa and entry planning",
    description:
      "A practical guide to checking current entry rules, required documents, and pre-trip details.",
    href: "/planning/visa",
    image: destinationAsset.shanghaiSkyline,
    badges: ["Entry", "Practical"],
  },
  {
    title: "Planning FAQ",
    description:
      "Grouped answers for safety, internet, food, seasons, shopping policy, and private route design.",
    href: "/planning/faq",
    image: destinationAsset.beijingForbiddenCityWide,
    badges: ["FAQ", "Before you book"],
  },
  {
    title: "Family travel",
    description:
      "How private China trips can be paced around children, parents, hotels, food, and flexible days.",
    href: "/family-travel",
    image: destinationAsset.chengduPanda,
    badges: ["Families", "Kids"],
  },
  {
    title: "Senior-friendly travel",
    description:
      "Comfort-led planning for older travelers, with clearer daily rhythm, fewer hard transitions, and phone-first contact.",
    href: "/senior-travel",
    image: destinationAsset.chengduTeaHouse,
    badges: ["Seniors", "Comfort"],
  },
];

export const visaFacts: PlanningFact[] = [
  {
    label: "Policy focus",
    value: "144/240-hour transit",
    helper: "Current rules should be checked against nationality and route.",
  },
  {
    label: "Eligibility",
    value: "Nationality and route dependent",
    helper: "Eligibility depends on the passport and complete itinerary.",
  },
  {
    label: "Documents",
    value: "Passport, onward ticket, hotel notes",
    helper: "Passport, onward travel, and accommodation details may be relevant.",
  },
  {
    label: "Final check",
    value: "Verify before ticketing",
    helper: "Reconfirm requirements before ticketing and departure.",
  },
];

export const visaSteps: PlanningStep[] = [
  {
    title: "Confirm the route pattern",
    description:
      "Check whether the arrival city, onward destination, and stay length match the current transit policy.",
    detail: "We review the arrival city, onward destination, and planned stay together.",
  },
  {
    title: "Match nationality and documents",
    description:
      "Record passport nationality, passport validity, onward ticket details, and hotel or invitation notes.",
    detail:
      "Share passport nationality and the intended route early so the right checks can be made.",
  },
  {
    title: "Build the itinerary around entry limits",
    description:
      "Avoid route designs that look elegant on paper but create unnecessary entry or transfer risk.",
    detail:
      "Build the route around the applicable entry conditions rather than adjusting them later.",
  },
  {
    title: "Reconfirm close to departure",
    description:
      "Visa and transit policies can change. Final confirmation belongs near booking and again before departure.",
    detail: "Policies can change, so final requirements should be reconfirmed close to departure.",
  },
];

export const planningFaqCategories: PlanningFaqCategory[] = [
  {
    category: "Safety and support",
    description:
      "Questions international travelers ask before trusting a private China ground team.",
    items: [
      {
        question: "Is private China travel suitable for families and older parents?",
        answer:
          "Yes, when the route is designed around pace, vehicle time, hotel location, rest windows, and guide judgment.",
      },
      {
        question: "What happens if weather, illness, or delays change the plan?",
        answer:
          "Private routing gives us more room to adjust timing, transport, meals, and activity order when circumstances change.",
      },
    ],
  },
  {
    category: "Internet, payments, and daily logistics",
    description: "Practical details that make the trip feel easier once travelers arrive.",
    items: [
      {
        question: "Can you help with WeChat, payments, VPN, or local connectivity?",
        answer:
          "Connectivity and payment arrangements depend on your phone, apps, passport, and route. We can discuss practical preparation before departure.",
      },
      {
        question: "How much walking is normal on a private China trip?",
        answer:
          "Walking load depends on the city and site. We mark heavier days in advance and adjust vehicle access, rest timing, and route order.",
      },
    ],
  },
  {
    category: "Food and shopping policy",
    description: "Clear expectations around meals, dietary needs, and no-pressure shopping.",
    items: [
      {
        question: "Can you handle dietary restrictions?",
        answer:
          "Dietary needs should be briefed early so guides can plan restaurant choices, translations, and backup options.",
      },
      {
        question: "Do your private tours include shopping stops?",
        answer:
          "Shopping is added only when travelers request it. The route is experience-led, not commission-led.",
      },
    ],
  },
  {
    category: "Season and route design",
    description: "How timing affects comfort, scenery, crowds, and daily rhythm.",
    items: [
      {
        question: "What is the best season for a first China trip?",
        answer:
          "Spring and autumn are often comfortable, but the right answer depends on destinations, holidays, weather tolerance, and traveler age.",
      },
      {
        question: "Should we choose a classic route or a slower route?",
        answer:
          "Classic routes work well for first-time travelers, but slower routes are often better for families, older travelers, and guests who dislike checklist pacing.",
      },
    ],
  },
];

export const audienceGuides: AudienceGuide[] = [
  {
    slug: "family-travel",
    eyebrow: "Family travel",
    title: "Private China travel that keeps children curious and parents relaxed.",
    summary:
      "Family China works best when the wonder is real but the daily rhythm is kind: shorter site blocks, stronger storytelling, better food choices, and room to change plans.",
    image: destinationAsset.chengduPanda,
    primaryConcern: "Keep the trip flexible without making it feel thin.",
    bestFor: [
      "Parents traveling with school-age children or teens",
      "Multi-generational families with mixed energy levels",
      "Families who want pandas, food, nature, and major icons without constant rushing",
    ],
    designDetails: [
      {
        title: "Child-aware pacing",
        description:
          "Private days are built with shorter museum blocks, later starts where useful, and rest windows before energy drops.",
        detail:
          "Shorter site blocks, flexible starts, and rest windows can help families keep the day enjoyable.",
      },
      {
        title: "Hotels that work for families",
        description:
          "Room setup, breakfast reliability, location, laundry options, and transfer time matter as much as star rating.",
        detail:
          "Room setup, breakfast, location, and transfer time all matter when choosing a family stay.",
      },
      {
        title: "Hands-on cultural moments",
        description:
          "Food, pandas, neighborhoods, river scenery, and easy craft or cooking moments keep children involved.",
        detail:
          "Food, pandas, neighborhoods, and hands-on moments can be balanced around the ages traveling.",
      },
    ],
    ctaTitle: "Tell us the ages before choosing the route.",
    ctaDescription:
      "A family proposal should start with traveler ages, school-holiday dates, comfort level, and any meals or activity concerns.",
    seo: {
      title: "Private China Family Travel With Kids",
      description:
        "Plan private China family travel with child-aware pacing, pandas, food, nature, flexible guides, and hotel logic for parents and children.",
      keywords: ["China family travel", "China with kids", "private China family tour"],
    },
  },
  {
    slug: "senior-travel",
    eyebrow: "Senior-friendly travel",
    title: "China travel paced for comfort, clarity, and confidence.",
    summary:
      "Older travelers often need the same cultural depth with fewer hard edges: clearer timing, gentler walking, private transfers, and direct contact options.",
    image: destinationAsset.chengduTeaHouse,
    primaryConcern: "Make the trip feel calm before making it feel impressive.",
    bestFor: [
      "Retired travelers planning a long-awaited China trip",
      "Adult children organizing travel for older parents",
      "Guests who value direct phone contact, larger text, and simple next steps",
    ],
    designDetails: [
      {
        title: "Walking load is designed, not guessed",
        description:
          "Daily plans flag heavier walking days and adjust routes, vehicle access, stairs, and rest timing where possible.",
        detail:
          "Heavier walking days can be identified early and adjusted around mobility, stairs, and rest timing.",
      },
      {
        title: "Private transfers reduce friction",
        description:
          "Airport flow, station timing, luggage movement, and hotel location are treated as core trip design, not afterthoughts.",
        detail:
          "Airport flow, station timing, luggage movement, and hotel location are treated as part of the route design.",
      },
      {
        title: "Clear contact path",
        description:
          "Phone and WhatsApp remain visible, with simple inquiry steps and less reliance on complex forms.",
        detail:
          "Phone and WhatsApp remain visible so travelers can choose the clearest way to begin the conversation.",
      },
    ],
    ctaTitle: "Prefer to talk first?",
    ctaDescription:
      "For older travelers or adult children planning for parents, a quick phone or WhatsApp conversation can be easier than a long form.",
    seo: {
      title: "Senior-Friendly Private China Travel",
      description:
        "Plan senior-friendly private China travel with gentler pacing, private transfers, lower walking load, direct contact, and comfort-led route design.",
      keywords: [
        "senior China travel",
        "China tours for seniors",
        "private China travel older parents",
      ],
    },
  },
];

export function getAudienceGuide(slug: AudienceGuide["slug"]) {
  return audienceGuides.find((guide) => guide.slug === slug);
}
