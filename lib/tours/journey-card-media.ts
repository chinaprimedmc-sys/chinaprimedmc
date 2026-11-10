import { chengduAsset } from "@/content/tours/assets";
import { journeyPhotos } from "@/content/tours/journeys-curation";

type EditorialPhoto = { src: string; alt: string; position?: string };

/** Presentation-only crops reuse existing photography without changing any tour data. */
export function getJourneyCardPhoto(slug: string): EditorialPhoto | undefined {
  if (
    slug === "china-family-tour-with-pandas-12-day-private-tour" ||
    slug === "private-chengdu-panda-day-tour-early-morning"
  ) {
    return chengduAsset.pandaMorning;
  }
  if (slug === "luxury-yunnan-private-tour") {
    return {
      src: "/home/yunnan-lijiang-old-town.webp",
      alt: "Traditional tiled rooftops in Lijiang Old Town, Yunnan",
    };
  }
  return journeyPhotos[slug];
}
