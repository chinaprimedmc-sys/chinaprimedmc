import type { LinkAction, MediaAsset } from "@/types/component-library";

export type DestinationFact = {
  label: string;
  value: string;
  helper?: string;
};

export type DestinationHighlight = {
  title: string;
  description: string;
  category: "Nature" | "Culture" | "Food" | "Architecture" | "Family" | "Photography" | "Luxury";
  image: MediaAsset;
};

export type DestinationExperience = {
  title: string;
  description: string;
  badges: string[];
  image: MediaAsset;
};

export type DestinationHotel = {
  name: string;
  description: string;
  style: string;
  image: MediaAsset;
};

export type DestinationTour = {
  title: string;
  description: string;
  tags: string[];
  image: MediaAsset;
  route: string;
  duration: string;
  style: string;
  href: string;
};

export type DestinationTip = {
  title: string;
  description: string;
  category:
    "Weather" | "Transportation" | "Language" | "Payment" | "Safety" | "Packing" | "Internet";
};

export type DestinationFaq = {
  question: string;
  answer: string;
};

export type DestinationRelatedContent = {
  journeys: DestinationTour[];
  experiences: DestinationExperience[];
  articles: Array<{
    title: string;
    excerpt: string;
    category: string;
    image: MediaAsset;
    href: string;
  }>;
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  hero: {
    eyebrow?: string;
    tagline: string;
    summary: string;
    image: MediaAsset;
    primary: LinkAction;
    secondary: LinkAction;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  quickFacts: DestinationFact[];
  whyVisit: {
    title: string;
    body: string;
    image: MediaAsset;
  };
  bestTime: {
    title: string;
    summary: string;
    seasons: DestinationFact[];
  };
  highlights: DestinationHighlight[];
  experiences: DestinationExperience[];
  hotels?: DestinationHotel[];
  tours: DestinationTour[];
  gallery: MediaAsset[];
  tips: DestinationTip[];
  faqs: DestinationFaq[];
  related: DestinationRelatedContent;
};
