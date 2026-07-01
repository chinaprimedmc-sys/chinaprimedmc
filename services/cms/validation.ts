import { destinationAsset } from "@/content/destinations/assets";
import type { CatalogJourney, CmsVisibility, ExperienceCategory } from "@/types/catalog";
import type {
  CmsContentType,
  CmsDestinationRecord,
  CmsExperienceRecord,
  CmsJourneyRecord,
  CmsRecord,
} from "@/types/cms";

const validTypes: CmsContentType[] = ["destinations", "experiences", "journeys"];
const experienceCategories: ExperienceCategory[] = [
  "Culture",
  "Food",
  "Nature",
  "Luxury",
  "Family",
];
const journeyCategories: CatalogJourney["category"][] = ["Luxury", "Classic", "Family", "Custom"];

export function isCmsContentType(value: string): value is CmsContentType {
  return validTypes.includes(value as CmsContentType);
}

export function parseCmsRecord(type: CmsContentType, value: unknown): CmsRecord {
  const input = isRecord(value) ? value : {};
  const slug = normalizeSlug(stringField(input.slug) || stringField(input.title) || "untitled");
  const title = stringField(input.title) || titleFromSlug(slug);
  const summary = stringField(input.summary) || "A CMS-managed China Prime DMC content page.";
  const visibility: CmsVisibility = {
    state: stringField(input.state) === "draft" ? "draft" : "published",
    featured: booleanField(input.featured),
    rankingScore: numberField(input.rankingScore, 50),
    manualPin: optionalNumberField(input.manualPin),
  };
  const image = {
    src: stringField(input.imageSrc) || destinationAsset.beijingForbiddenCity.src,
    alt: stringField(input.imageAlt) || `${title} image`,
    width: numberField(input.imageWidth, 1920),
    height: numberField(input.imageHeight, 1200),
    objectPosition: stringField(input.imageObjectPosition) || "50% 50%",
  };
  const base = {
    slug,
    title,
    summary,
    image,
    visibility,
    seoTitle: stringField(input.seoTitle) || title,
    seoDescription: stringField(input.seoDescription) || summary,
    updatedAt: new Date().toISOString(),
  };

  if (type === "destinations") {
    return {
      ...base,
      type: "destination",
      name: stringField(input.name) || title,
      region: stringField(input.region) || "China",
      destinationType: destinationTypeField(input.destinationType),
      experienceSlugs: listField(input.experienceSlugs),
      journeySlugs: listField(input.journeySlugs),
    } satisfies CmsDestinationRecord;
  }

  if (type === "experiences") {
    return {
      ...base,
      type: "experience",
      category: experienceCategoryField(input.category),
      duration: stringField(input.duration) || "Half day",
      suitableFor: listField(input.suitableFor, ["Private travelers"]),
      whatYouWillDo: listField(input.whatYouWillDo, [
        "Enjoy a privately paced experience shaped around the route.",
      ]),
      destinationSlugs: listField(input.destinationSlugs),
      journeySlugs: listField(input.journeySlugs),
    } satisfies CmsExperienceRecord;
  }

  return {
    ...base,
    type: "journey",
    category: journeyCategoryField(input.category),
    duration: stringField(input.duration) || "Tailor-made",
    route: stringField(input.route) || "China",
    styles: listField(input.styles, ["Private"]),
    destinationSlugs: listField(input.destinationSlugs),
    experienceSlugs: listField(input.experienceSlugs),
  } satisfies CmsJourneyRecord;
}

export function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 96);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function stringField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function numberField(value: unknown, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function optionalNumberField(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function booleanField(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "1";
}

function listField(value: unknown, fallback: string[] = []) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/[\n,]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return fallback;
}

function destinationTypeField(value: unknown): CmsDestinationRecord["destinationType"] {
  const normalized = stringField(value);
  if (["City", "Nature", "Culture", "Classic Gateway"].includes(normalized)) {
    return normalized as CmsDestinationRecord["destinationType"];
  }
  return "City";
}

function experienceCategoryField(value: unknown) {
  const normalized = stringField(value);
  return experienceCategories.includes(normalized as ExperienceCategory)
    ? (normalized as ExperienceCategory)
    : "Culture";
}

function journeyCategoryField(value: unknown) {
  const normalized = stringField(value);
  return journeyCategories.includes(normalized as CatalogJourney["category"])
    ? (normalized as CatalogJourney["category"])
    : "Classic";
}

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
