import type { ReviewItem } from "@/types/component-library";
import { siteConfig } from "@/config/site";

export const trustPrinciples = [
  {
    title: "No forced shopping",
    description:
      "Your time is reserved for the journey. Shopping appears only when you request it.",
  },
  {
    title: "Hotels chosen for the route",
    description:
      "Location, room category, breakfast and transfer time matter as much as the star rating.",
  },
  {
    title: "Local support that stays reachable",
    description:
      "A China-based team coordinates guides, vehicles, tickets and changes while you travel.",
  },
];

export const verifiedCredentials = [
  {
    title: siteConfig.operator.tourismLicense.shortLabel,
    description: `${siteConfig.operator.englishReferenceName} is ${siteConfig.operator.tourismLicense.statement}.`,
  },
  {
    title: "China-registered operating company",
    description: `${siteConfig.operator.englishReferenceName} was registered in Guangzhou on March 28, 2018.`,
  },
  {
    title: "Clear contracting relationship",
    description:
      "AVIORA is the overseas-facing brand; your written booking identifies the China contracting and operating entity.",
  },
];

/** @deprecated Use verifiedCredentials. */
export const credentialPlaceholders = verifiedCredentials;

export const teamPlaceholders: { name: string; role: string; bio: string }[] = [];

export type ReviewSource =
  "Direct guest feedback" | "Google Reviews" | "Trustpilot" | "Advisor note";

export type StructuredReview = ReviewItem & {
  id: string;
  source: ReviewSource;
  sourceUrl?: string;
};

export const reviewPlaceholders: StructuredReview[] = [];
