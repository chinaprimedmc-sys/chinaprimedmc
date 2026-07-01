import type { MediaAsset } from "@/types/component-library";
import type { TourStyle } from "@/types/tour";

export type CmsPublishingState = "draft" | "published";

export type CmsVisibility = {
  state: CmsPublishingState;
  featured: boolean;
  rankingScore: number;
  manualPin?: number;
};

export type CatalogDestination = {
  slug: string;
  name: string;
  region: string;
  type: "City" | "Nature" | "Culture" | "Classic Gateway";
  summary: string;
  image: MediaAsset;
  visibility: CmsVisibility;
  experienceSlugs: string[];
  journeySlugs: string[];
};

export type ExperienceCategory = "Culture" | "Food" | "Nature" | "Luxury" | "Family";

export type CatalogExperience = {
  slug: string;
  title: string;
  category: ExperienceCategory;
  summary: string;
  whatYouWillDo: string[];
  duration: string;
  suitableFor: string[];
  image: MediaAsset;
  destinationSlugs: string[];
  journeySlugs: string[];
  visibility: CmsVisibility;
  seo: {
    title: string;
    description: string;
  };
};

export type CatalogJourney = {
  slug: string;
  title: string;
  category: "Luxury" | "Classic" | "Family" | "Custom";
  summary: string;
  image: MediaAsset;
  duration: string;
  route: string;
  styles: TourStyle[];
  destinationSlugs: string[];
  experienceSlugs: string[];
  visibility: CmsVisibility;
};

export type RelationshipSummary = {
  destinations: CatalogDestination[];
  experiences: CatalogExperience[];
  journeys: CatalogJourney[];
};
