import type { Tour } from "@/types/tour";
import type { ItineraryProductInput } from "@/lib/seo/schema";

/** Visible product facts are also the structured-data facts, with no separate SEO-only promises. */
export function tourSearchSpecification(
  tour: Tour,
): Pick<ItineraryProductInput, "description" | "duration" | "additionalProperties"> {
  return {
    description: tour.overview.answer ?? tour.seo.description,
    duration: tour.durationIso ?? `P${tour.itinerary.length}D`,
    additionalProperties: tour.overview.practicalities?.map(({ label, value }) => ({
      name: label,
      value,
    })),
  };
}
