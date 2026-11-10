import { siteConfig } from "@/config/site";
import {
  homeFeaturedJourneys,
  homeSearch,
  homeSearchGuides,
  homeServiceJourney,
} from "@/content/home/search";
import { journeyCatalog } from "@/content/tours/catalog";
import { journeyPhotos } from "@/content/tours/journeys-curation";
import { webPageSchema } from "@/lib/seo/schema";

/** Describe only the services and journey summaries actually rendered on the homepage. */
export function homepageSchema() {
  const homeUrl = new URL("/", siteConfig.url).toString();
  const organization = { "@id": `${homeUrl}#organization` };
  const serviceId = `${homeUrl}#private-china-tours`;
  const journeysId = `${homeUrl}#featured-journeys`;
  const journeys = homeFeaturedJourneys.flatMap((selection) => {
    const journey = journeyCatalog.find((item) => item.slug === selection.slug);
    if (!journey) return [];
    const url = new URL(journey.href, siteConfig.url).toString();

    return [
      {
        "@type": "TouristTrip",
        "@id": `${url}#tour`,
        url,
        name: selection.title,
        description: selection.description,
        image: new URL(journeyPhotos[journey.slug].src, siteConfig.url).toString(),
        touristType: selection.audience,
        provider: organization,
      },
    ];
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...webPageSchema({
          url: homeUrl,
          name: `${homeSearch.title} | ${siteConfig.name}`,
          description: homeSearch.description,
          about: organization,
          mainEntity: { "@id": serviceId },
        }),
        hasPart: { "@id": `${homeUrl}#faq` },
        mentions: { "@id": journeysId },
        relatedLink: homeSearchGuides.map(({ href }) => new URL(href, siteConfig.url).toString()),
      },
      {
        "@type": "Service",
        "@id": serviceId,
        name: "Full-service private China tours",
        serviceType: ["Private tailor-made tours", "Full-service China travel coordination"],
        description: homeSearch.overview,
        url: homeUrl,
        provider: organization,
        areaServed: { "@type": "Country", name: "China" },
        audience: homeSearch.audiences.map((audienceType) => ({
          "@type": "Audience",
          audienceType,
        })),
        mainEntityOfPage: { "@id": `${homeUrl}#webpage` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services coordinated within a complete private China journey",
          itemListElement: homeServiceJourney.stages.map((stage) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: stage.title,
              description: stage.body,
              provider: organization,
            },
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": journeysId,
        name: "Three private journeys. A place to start.",
        url: journeysId,
        numberOfItems: journeys.length,
        itemListElement: journeys.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item,
        })),
      },
    ],
  };
}
