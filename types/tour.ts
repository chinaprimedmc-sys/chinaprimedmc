import type { LinkAction, MediaAsset } from "@/types/component-library";

export type TourStyle =
  | "First-time China"
  | "Family"
  | "Luxury"
  | "Culture"
  | "Nature"
  | "Food"
  | "Photography"
  | "Muslim-friendly"
  | "Senior-friendly";

export type TourOverviewFact = {
  label: string;
  value: string;
  helper?: string;
};

export type TourHighlight = {
  title: string;
  description: string;
  category: TourStyle;
  image: MediaAsset;
};

export type TourDayActivity = {
  time?: string;
  title: string;
  description: string;
};

export type TourItineraryDay = {
  day: number;
  title: string;
  destination: string;
  summary: string;
  image: MediaAsset;
  hotel?: string;
  meals?: string[];
  transport?: string;
  activities: TourDayActivity[];
  guideNote?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
};

export type TourAccommodation = {
  name: string;
  destination: string;
  description: string;
  roomStyle?: string;
  highlights: string[];
  image: MediaAsset;
};

export type TourExperienceOption = {
  title: string;
  description: string;
  badges: string[];
  image: MediaAsset;
  href?: string;
};

export type TourRouteStop = {
  name: string;
  days: string;
  description: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
};

export type RelatedDestination = {
  name: string;
  description: string;
  image: MediaAsset;
  href: string;
};

export type RelatedTour = {
  title: string;
  description: string;
  tags: string[];
  image: MediaAsset;
  route: string;
  duration: string;
  href: string;
};

export type TourFaq = {
  question: string;
  answer: string;
};

export type TourPlanningSupport = {
  eyebrow: string;
  title: string;
  description: string;
  items: TourOverviewFact[];
  note: string;
};

export type TourInquiry = {
  emailHref: string;
  whatsappHref?: string;
  scheduleCallHref?: string;
  defaultMessage: string;
};

export type Tour = {
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  route: string;
  styles: TourStyle[];
  hero: {
    eyebrow?: string;
    image: MediaAsset;
    primary: LinkAction;
    secondary: LinkAction;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  overview: {
    pitch: string;
    facts: TourOverviewFact[];
  };
  planningSupport?: TourPlanningSupport;
  highlights: TourHighlight[];
  itinerary: TourItineraryDay[];
  accommodations: TourAccommodation[];
  included: string[];
  excluded: string[];
  optionalExperiences: TourExperienceOption[];
  transportation: {
    title: string;
    description: string;
    items: TourOverviewFact[];
  };
  routeMap: {
    title: string;
    description: string;
    stops: TourRouteStop[];
  };
  gallery: MediaAsset[];
  faqs: TourFaq[];
  related: {
    tours: RelatedTour[];
    destinations: RelatedDestination[];
  };
  inquiry: TourInquiry;
};
