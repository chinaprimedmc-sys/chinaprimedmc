import type { ReviewItem } from "@/types/component-library";

export const trustPrinciples = [
  {
    title: "No shopping-tour pressure",
    description:
      "Private journeys should be experience-led. Shopping time is added only when travelers ask for it.",
  },
  {
    title: "Pacing before quantity",
    description:
      "The route is designed around the people traveling, not around proving how many sites can fit into a day.",
  },
  {
    title: "Local operations, human support",
    description:
      "Travelers need help with transfers, tickets, timing, food, weather, and unexpected changes while they are actually on the ground.",
  },
];

export const credentialPlaceholders = [
  {
    title: "Inbound travel qualification",
    description: "Verified documentation is available during the planning conversation.",
  },
  {
    title: "Company registration",
    description: "Company details can be provided when they are relevant to your booking.",
  },
  {
    title: "Insurance and supplier checks",
    description: "Operational details are discussed as part of the route and supplier review.",
  },
];

export const teamPlaceholders: { name: string; role: string; bio: string }[] = [];

export type ReviewSource =
  "Direct guest feedback" | "Google Reviews" | "Trustpilot" | "Advisor note";

export type StructuredReview = ReviewItem & {
  id: string;
  source: ReviewSource;
  sourceUrl?: string;
};

export const reviewPlaceholders: StructuredReview[] = [];
