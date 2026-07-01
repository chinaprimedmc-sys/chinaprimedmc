import type { MediaAsset } from "@/types/component-library";
import type { CatalogJourney, ExperienceCategory } from "@/types/catalog";

export type CmsContentType = "destinations" | "experiences" | "journeys";

export type CmsItemState = "draft" | "published";

export type CmsVisibilityFields = {
  state: CmsItemState;
  featured: boolean;
  rankingScore: number;
  manualPin?: number;
};

export type CmsBaseItem = {
  slug: string;
  title: string;
  summary: string;
  image: MediaAsset;
  visibility: CmsVisibilityFields;
  seoTitle?: string;
  seoDescription?: string;
  updatedAt: string;
};

export type CmsDestinationRecord = CmsBaseItem & {
  type: "destination";
  name: string;
  region: string;
  destinationType: "City" | "Nature" | "Culture" | "Classic Gateway";
  experienceSlugs: string[];
  journeySlugs: string[];
};

export type CmsExperienceRecord = CmsBaseItem & {
  type: "experience";
  category: ExperienceCategory;
  duration: string;
  suitableFor: string[];
  whatYouWillDo: string[];
  destinationSlugs: string[];
  journeySlugs: string[];
};

export type CmsJourneyRecord = CmsBaseItem & {
  type: "journey";
  category: CatalogJourney["category"];
  duration: string;
  route: string;
  styles: string[];
  destinationSlugs: string[];
  experienceSlugs: string[];
};

export type CmsRecord = CmsDestinationRecord | CmsExperienceRecord | CmsJourneyRecord;

export type CmsDatabase = {
  version: 1;
  updatedAt: string;
  destinations: CmsDestinationRecord[];
  experiences: CmsExperienceRecord[];
  journeys: CmsJourneyRecord[];
};

export type CmsSaveResult =
  | {
      ok: true;
      item: CmsRecord;
      storage: "file" | "kv";
    }
  | {
      ok: false;
      message: string;
    };
