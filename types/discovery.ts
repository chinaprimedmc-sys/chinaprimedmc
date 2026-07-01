import type { MediaAsset } from "@/types/component-library";

export type DiscoveryType = "destination" | "tour" | "experience" | "article" | "faq";

export type DiscoveryItem = {
  id: string;
  type: DiscoveryType;
  title: string;
  description: string;
  href: string;
  image?: MediaAsset;
  category?: string;
  tags: string[];
  region?: string;
  season?: string[];
  travelStyle?: string[];
  interests?: string[];
  days?: number;
  luxuryLevel?: "Premium" | "Luxury" | "Ultra-luxury";
  familyFriendly?: boolean;
  privateTour?: boolean;
  score?: number;
};

export type DiscoveryFilters = {
  types?: DiscoveryType[];
  query?: string;
  region?: string[];
  season?: string[];
  travelStyle?: string[];
  interests?: string[];
  days?: string[];
  luxuryLevel?: string[];
  familyFriendly?: boolean;
  privateTour?: boolean;
  category?: string[];
  tags?: string[];
  destination?: string[];
};

export type DiscoverySection = {
  title: string;
  description: string;
  items: DiscoveryItem[];
};

export type TripPlanItem = {
  id: string;
  type: DiscoveryType;
  title: string;
  href: string;
  image?: MediaAsset;
};
