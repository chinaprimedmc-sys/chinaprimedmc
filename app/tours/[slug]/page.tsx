import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { assertPublicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem, journeyCatalog } from "@/content/tours/catalog";
import { TourFrameworkTemplate } from "@/features/tours/tour-framework-template";
import { bookingPolicyFaqs, frameworkTourFaqs } from "@/features/tours/detail/tour-detail-model";
import { TourTemplate } from "@/features/tours/tour-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getJourneyReadingArticles } from "@/lib/content/journey-journal-links";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  assertPublicRouteSlugs(
    "tours",
    journeyCatalog.map(({ slug }) => slug),
  );
  return journeyCatalog.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const staticTour = getTourBySlug(slug);

  if (staticTour) {
    return createMetadata({
      title: staticTour.seo.title,
      description: staticTour.seo.description,
      path: `/tours/${staticTour.slug}`,
      image: staticTour.hero.image.src,
      keywords: staticTour.seo.keywords,
    });
  }

  const journey = getJourneyCatalogItem(slug);

  if (!journey) {
    notFound();
  }

  return createMetadata({
    title: journey.title,
    description: journey.summary,
    path: `/tours/${journey.slug}`,
    image: journey.image.src,
    keywords: [
      `${journey.routeLabel} private tour`,
      `${journey.durationLabel} China itinerary`,
      "private China tour",
      ...journey.destinations.map((destination) => `${destination.label} private tour`),
    ],
  });
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const staticTour = getTourBySlug(slug);

  if (staticTour) {
    const catalogItem = getJourneyCatalogItem(staticTour.slug);
    const reading = getJourneyReadingArticles(staticTour.slug);
    const tourUrl = new URL(`/tours/${staticTour.slug}`, siteConfig.url).toString();
    const isChinaConsidered = staticTour.slug === "china-at-an-easier-pace-12-day-private-tour";
    const isChinaFamily = staticTour.slug === "china-family-tour-with-pandas-12-day-private-tour";
    const tourProperties = isChinaFamily
      ? [
          ["Duration", "12 days / 11 nights"],
          ["Accommodation standard", "Premium five-star family hotels"],
          ["Accommodation duration", "11 nights"],
          ["Published price basis", "Two adults and two children aged 6–11 sharing two rooms"],
          ["Family pacing", "Age-aware private pacing with protected family downtime"],
          ["Age bands", "6–9, 10–13 and 14–17"],
          ["Beijing to Xi'an", "First-class high-speed rail"],
          ["Xi'an to Chengdu", "First-class high-speed rail"],
          ["Chengdu to Shanghai", "Nonstop economy-class domestic flight"],
          [
            "Signature experiences",
            "Private tai chi, Junior Curator Mission, Great Wall family challenge, clay-warrior studio, giant pandas and private Shanghai kitchen",
          ],
          ["Touring service", "Private family-ready English-speaking guides and private vehicles"],
          ["Shopping policy", "No compulsory shopping stops"],
          ["International flights", "Not included"],
        ]
      : isChinaConsidered
        ? [
            ["Duration", "12 days / 11 nights"],
            ["Accommodation standard", "Premium five-star hotels"],
            ["Accommodation duration", "11 nights"],
            ["Published price basis", "Four guests sharing two rooms outside peak periods"],
            ["Pace", "Easy to moderate, with protected recovery time"],
            ["Hotel changes", "Two"],
            ["Beijing to Xi'an", "First-class high-speed rail"],
            ["Xi'an to Shanghai", "Nonstop economy-class domestic flight"],
            ["Touring service", "Private English-speaking guides and private vehicles"],
            ["Shopping policy", "No compulsory shopping stops"],
            ["International flights", "Not included"],
          ]
        : [
            ["Accommodation standard", "Selected four- and five-star hotels"],
            ["Tour format", "Private, tailor-made journey"],
          ];
    return (
      <>
        <JsonLd
          id={`${staticTour.slug}-tour-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "@id": `${tourUrl}#tour`,
            identifier: staticTour.slug,
            sku: staticTour.slug,
            name: staticTour.title,
            description: staticTour.seo.description,
            url: tourUrl,
            mainEntityOfPage: { "@id": `${tourUrl}#webpage` },
            category: catalogItem?.commercialRoleLabel ?? "Premium private China tour",
            duration: `P${staticTour.itinerary.length}D`,
            brand: {
              "@type": "Brand",
              name: siteConfig.name,
            },
            audience: isChinaFamily
              ? {
                  "@type": "PeopleAudience",
                  audienceType:
                    "Families with children aged 6 to 17, first-time China visitors and multigenerational families",
                }
              : isChinaConsidered
                ? {
                    "@type": "PeopleAudience",
                    audienceType:
                      "Couples, mature travelers, families planning for parents and first-time China visitors",
                  }
                : undefined,
            image: Array.from(
              new Set([
                staticTour.hero.image.src,
                ...staticTour.itinerary.map((day) => day.image.src),
                ...staticTour.gallery.map((image) => image.src),
              ]),
            ).map((image) => new URL(image, siteConfig.url).toString()),
            itinerary: {
              "@type": "ItemList",
              numberOfItems: staticTour.itinerary.length,
              itemListElement: staticTour.itinerary.map((day) => ({
                "@type": "ListItem",
                position: day.day,
                name: `Day ${day.day}: ${day.title}`,
                description: day.summary,
                item: {
                  "@type": "TouristTrip",
                  name: `Day ${day.day}: ${day.title}`,
                  description: day.summary,
                  itinerary: [
                    {
                      "@type": "Place",
                      name: day.destination,
                      geo: day.coordinates
                        ? {
                            "@type": "GeoCoordinates",
                            latitude: day.coordinates.latitude,
                            longitude: day.coordinates.longitude,
                          }
                        : undefined,
                    },
                    {
                      "@type": "ItemList",
                      name: `Day ${day.day} experiences`,
                      numberOfItems: day.activities.length,
                      itemListElement: day.activities.map((activity, index) => ({
                        "@type": "ListItem",
                        position: index + 1,
                        item: {
                          "@type": "Thing",
                          name: activity.title,
                          description: activity.description,
                        },
                      })),
                    },
                  ],
                },
              })),
            },
            touristType: catalogItem?.bestForFilters ?? staticTour.styles,
            offers: catalogItem
              ? {
                  "@type": "Offer",
                  price: catalogItem.pricing.fromUsd,
                  priceCurrency: "USD",
                  url: tourUrl,
                  availability: "https://schema.org/LimitedAvailability",
                  category: "Private premium China tour",
                  description: catalogItem.pricing.basis,
                  seller: { "@id": `${siteConfig.url}/#organization` },
                  priceSpecification: {
                    "@type": "UnitPriceSpecification",
                    price: catalogItem.pricing.fromUsd,
                    priceCurrency: "USD",
                    unitText: "per person",
                    description: catalogItem.pricing.basis,
                  },
                }
              : undefined,
            additionalProperty: [
              ...(catalogItem
                ? [
                    ["Journey collection", catalogItem.commercialRoleLabel],
                    ["Best for", catalogItem.bestForSummary],
                    ["Walking level", catalogItem.discovery.walkingLevel],
                  ]
                : []),
              ...tourProperties,
            ].map(([name, value]) => ({
              "@type": "PropertyValue",
              name,
              value,
            })),
            subjectOf: reading.map((article) => ({
              "@type": "Article",
              name: article.title,
              url: new URL(article.href, siteConfig.url).toString(),
            })),
            provider: { "@id": `${siteConfig.url}/#organization` },
          }}
        />
        <JsonLd
          id={`${staticTour.slug}-webpage-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${tourUrl}#webpage`,
            url: tourUrl,
            name: staticTour.seo.title,
            description: staticTour.seo.description,
            inLanguage: "en-US",
            datePublished: staticTour.publishedAt,
            dateModified: staticTour.updatedAt,
            publisher: { "@id": `${siteConfig.url}/#organization` },
            reviewedBy: { "@id": `${siteConfig.url}/#organization` },
            mainEntity: { "@id": `${tourUrl}#tour` },
            isPartOf: { "@id": `${siteConfig.url}/#website` },
          }}
        />
        <JsonLd
          id={`${staticTour.slug}-faq-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [...staticTour.faqs, ...bookingPolicyFaqs].map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
        <JsonLd
          id={`${staticTour.slug}-breadcrumb-schema`}
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journeys", path: "/tours" },
            { name: staticTour.title, path: `/tours/${staticTour.slug}` },
          ])}
        />
        <TourTemplate tour={staticTour} />
      </>
    );
  }

  const journey = getJourneyCatalogItem(slug);

  if (!journey) {
    notFound();
  }

  const reading = getJourneyReadingArticles(journey.slug);

  return (
    <>
      <JsonLd
        id={`${journey.slug}-tour-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: journey.title,
          description: journey.summary,
          url: new URL(`/tours/${journey.slug}`, siteConfig.url).toString(),
          image: new URL(journey.image.src, siteConfig.url).toString(),
          touristType: journey.bestForFilters,
          duration: `P${journey.recommendedDaysMin}D`,
          itinerary: {
            "@type": "ItemList",
            numberOfItems: journey.destinations.length,
            itemListElement: journey.destinations.map((destination, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: destination.label,
              url: new URL(destination.href, siteConfig.url).toString(),
            })),
          },
          areaServed: journey.destinations.map((destination) => ({
            "@type": "Place",
            name: destination.label,
          })),
          offers: {
            "@type": "Offer",
            price: journey.pricing.fromUsd,
            priceCurrency: "USD",
            url: new URL(`/tours/${journey.slug}`, siteConfig.url).toString(),
            description: journey.pricing.basis,
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: journey.pricing.fromUsd,
              priceCurrency: "USD",
              unitText: "per person",
              description: journey.pricing.basis,
            },
          },
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "Accommodation standard",
              value: "Selected four- and five-star hotels",
            },
            {
              "@type": "PropertyValue",
              name: "Tour format",
              value: "Private, tailor-made journey",
            },
          ],
          subjectOf: reading.map((article) => ({
            "@type": "Article",
            name: article.title,
            url: new URL(article.href, siteConfig.url).toString(),
          })),
          provider: { "@id": `${siteConfig.url}/#organization` },
        }}
      />
      <JsonLd
        id={`${journey.slug}-faq-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: frameworkTourFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />
      <JsonLd
        id={`${journey.slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journeys", path: "/tours" },
          { name: journey.title, path: `/tours/${journey.slug}` },
        ])}
      />
      <TourFrameworkTemplate item={journey} />
    </>
  );
}
