export const typography = {
  hero: "type-hero",
  pageTitle: "type-page-title",
  sectionTitle: "type-section-title",
  cardTitle: "type-card-title",
  body: "type-body",
  caption: "type-caption",
} as const;

export type TypographyLevel = keyof typeof typography;
