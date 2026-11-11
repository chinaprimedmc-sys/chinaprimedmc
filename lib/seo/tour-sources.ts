import type { Tour } from "@/types/tour";

/** Cite only official sources also shown on the page. Never use sameAs or endorsements. */
export function tourOfficialCitations(tour: Tour) {
  return (tour.planningResources ?? [])
    .filter((resource) => resource.officialPublisher)
    .map((resource) => ({
      "@type": "WebPage" as const,
      name: resource.label,
      url: resource.href,
      description: resource.description,
      publisher: {
        "@type": "Organization" as const,
        name: resource.officialPublisher,
      },
    }));
}
