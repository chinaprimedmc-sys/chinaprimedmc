import type { Tour } from "@/types/tour";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import { getJourneySeoTitle } from "@/content/tours/card-copy";
import { createMetadata } from "@/lib/seo/metadata";

/** Keep intentionally authored commercial snippets intact; retain legacy behavior elsewhere. */
export function createTourMetadata(tour: Tour) {
  const catalog = getJourneyCatalogItem(tour.slug);
  return createMetadata({
    title: tour.seo.preserveCopy
      ? tour.seo.title
      : catalog
        ? getJourneySeoTitle(catalog)
        : tour.seo.title,
    description: tour.seo.description,
    path: `/tours/${tour.slug}`,
    image: tour.visualStatus === "pending" ? undefined : tour.hero.image.src,
    imageWidth: tour.visualStatus === "pending" ? undefined : tour.hero.image.width,
    imageHeight: tour.visualStatus === "pending" ? undefined : tour.hero.image.height,
    imageAlt: tour.visualStatus === "pending" ? undefined : tour.hero.image.alt,
    keywords: tour.seo.keywords,
    titleYear: tour.seo.preserveCopy
      ? undefined
      : Number((tour.updatedAt ?? tour.publishedAt)?.slice(0, 4)),
    callToAction: tour.seo.preserveCopy
      ? undefined
      : "View the itinerary and request a tailored proposal",
  });
}
