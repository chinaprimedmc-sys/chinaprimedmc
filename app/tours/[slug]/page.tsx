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
    return (
      <>
        <JsonLd
          id={`${staticTour.slug}-tour-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: staticTour.title,
            description: staticTour.seo.description,
            url: new URL(`/tours/${staticTour.slug}`, siteConfig.url).toString(),
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
              })),
            },
            touristType: staticTour.styles,
            duration: `P${staticTour.itinerary.length}D`,
            areaServed: staticTour.route.split(",").map((destination) => ({
              "@type": "Place",
              name: destination.trim(),
            })),
            offers: catalogItem
              ? {
                  "@type": "Offer",
                  price: catalogItem.pricing.fromUsd,
                  priceCurrency: "USD",
                  url: new URL(`/tours/${staticTour.slug}`, siteConfig.url).toString(),
                  description: catalogItem.pricing.basis,
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
