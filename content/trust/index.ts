import type { ReviewItem } from "@/types/component-library";
import { siteConfig } from "@/config/site";

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

export const verifiedCredentials = [
  {
    title: siteConfig.operator.tourismLicense.shortLabel,
    description: `${siteConfig.operator.legalName} is ${siteConfig.operator.tourismLicense.statement}.`,
  },
  {
    title: "China-registered operating company",
    description: "游友汇（广州）国际旅行社有限公司 was registered in Guangzhou on March 28, 2018.",
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
