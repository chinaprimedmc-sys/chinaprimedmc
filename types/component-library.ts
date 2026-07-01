import type { ReactNode } from "react";

export type ComponentSize = "sm" | "md" | "lg";
export type ComponentTone = "light" | "dark" | "glass";
export type ComponentVariant = "small" | "medium" | "large" | "featured";

export type MediaAsset = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectPosition?: string;
};

export type LinkAction = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
};

export type MetricItem = {
  label: string;
  value: string;
  helper?: string;
};

export type CardMeta = {
  label: string;
  value: string;
};

export type ReviewItem = {
  quote: string;
  name: string;
  country?: string;
  rating?: number;
  date?: string;
  trip?: string;
  avatar?: MediaAsset;
  media?: MediaAsset;
};

export type TimelineItem = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: MediaAsset;
  hotel?: string;
  meals?: string[];
  transport?: string;
  activities?: string[];
  children?: ReactNode;
};
