import type { MediaAsset } from "@/types/component-library";

export type CmsStatus = "draft" | "published";

export type CmsMediaAsset = {
  id: string;
  file_name: string;
  url: string;
  storage_path: string;
  mime_type: string;
  size_bytes: number;
  width: number | null;
  height: number | null;
  alt_text: string;
  object_position: string;
};

export type CmsJourneyContent = {
  intro?: string;
  body?: string;
  styles?: string[];
  destinations?: string[];
  gallery?: MediaAsset[];
  days?: Array<{ day: string; city: string; title: string; description: string }>;
};

export type CmsJourney = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  summary: string;
  route: string;
  duration_label: string;
  best_for: string;
  status: CmsStatus;
  seo_title: string;
  seo_description: string;
  content: CmsJourneyContent;
  sort_order: number;
  published_at: string | null;
  updated_at: string;
  hero_image?: CmsMediaAsset | null;
};

export type CmsBlogContent = {
  body?: string;
  tags?: string[];
  gallery?: MediaAsset[];
  readingTime?: string;
};

export type CmsBlogPost = {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  summary: string;
  category: string;
  author: string;
  status: CmsStatus;
  seo_title: string;
  seo_description: string;
  content: CmsBlogContent;
  sort_order: number;
  published_at: string | null;
  updated_at: string;
  hero_image?: CmsMediaAsset | null;
};
