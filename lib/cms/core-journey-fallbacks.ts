import { tours } from "@/content/tours";
import type { CmsJourney, CmsMediaAsset } from "@/lib/cms/types";
import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

const coreJourneyTitleOverrides: Record<string, string> = {
  "first-china-beautifully-paced": "9-Day Beijing, Xi'an & Shanghai Private Tour",
  "chengdu-pandas-sichuan-table": "5-Day Chengdu Panda & Sichuan Food Private Tour",
  "chengdu-pandas-jiuzhaigou-private-7-day-tour":
    "7-Day Chengdu Panda & Jiuzhaigou Private Journey",
  "beijing-great-wall-private-5-day-tour": "5-Day Beijing & Great Wall Private Tour",
  "shanghai-zhangjiajie-floating-peaks": "8-Day Shanghai & Zhangjiajie Private Tour",
};

const coreJourneyOrder = [
  "first-china-beautifully-paced",
  "chengdu-pandas-sichuan-table",
  "chengdu-pandas-jiuzhaigou-private-7-day-tour",
  "beijing-great-wall-private-5-day-tour",
  "shanghai-zhangjiajie-floating-peaks",
];

export function normalizeCoreJourneyTitle(journey: CmsJourney): CmsJourney {
  const title = coreJourneyTitleOverrides[journey.slug];
  return title ? { ...journey, title } : journey;
}

export function mergeCoreJourneyFallbacks(journeys: CmsJourney[]) {
  const normalizedJourneys = journeys.map(normalizeCoreJourneyTitle);
  const existingSlugs = new Set(normalizedJourneys.map((journey) => journey.slug));
  const missingCoreJourneys = coreJourneyFallbacks().filter(
    (journey) => !existingSlugs.has(journey.slug),
  );

  return [...normalizedJourneys, ...missingCoreJourneys].sort(
    (a, b) => a.sort_order - b.sort_order || a.title.localeCompare(b.title),
  );
}

export function getCoreJourneyFallback(slug: string) {
  return coreJourneyFallbacks().find((journey) => journey.slug === slug) ?? null;
}

function coreJourneyFallbacks(): CmsJourney[] {
  return coreJourneyOrder
    .map((slug, index) => {
      const tour = tours.find((item) => item.slug === slug);
      return tour ? tourToCmsJourney(tour, index) : null;
    })
    .filter((journey): journey is CmsJourney => Boolean(journey));
}

function tourToCmsJourney(tour: Tour, index: number): CmsJourney {
  const now = new Date().toISOString();
  return {
    id: `local-${tour.slug}`,
    title: coreJourneyTitleOverrides[tour.slug] || tour.title,
    slug: tour.slug,
    subtitle: tour.subtitle,
    summary: tour.overview.pitch,
    route: tour.route.replaceAll(",", " · "),
    duration_label: tour.duration,
    best_for: bestForFromTour(tour),
    status: "published",
    seo_title: tour.seo.title,
    seo_description: tour.seo.description,
    content: {
      intro: tour.overview.pitch,
      body: tour.overview.pitch,
      styles: tour.styles,
      destinations: tour.route.split(",").map((destination) => destination.trim()),
      gallery: tour.gallery,
      days: tour.itinerary.map((day) => ({
        day: `Day ${day.day}`,
        city: day.destination,
        title: day.title,
        description: day.summary,
      })),
    },
    sort_order: index + 1,
    published_at: now,
    updated_at: now,
    hero_image: mediaAssetToCms(tour.hero.image, `${tour.slug}-hero`),
  };
}

function bestForFromTour(tour: Tour) {
  const suitableFor = tour.overview.facts.find((fact) => fact.label === "Suitable For")?.value;
  return suitableFor || tour.styles.join(", ");
}

function mediaAssetToCms(asset: MediaAsset, id: string): CmsMediaAsset {
  return {
    id,
    file_name: id,
    url: asset.src,
    storage_path: asset.src,
    mime_type: "image/webp",
    size_bytes: 0,
    width: asset.width ?? null,
    height: asset.height ?? null,
    alt_text: asset.alt,
    object_position: asset.objectPosition || "50% 50%",
  };
}
