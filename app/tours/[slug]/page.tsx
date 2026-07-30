import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { assertPublicRouteSlugs, publicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { getTourBySlug } from "@/content/tours";
import { getJourneyCatalogItem, journeyCatalog } from "@/content/tours/catalog";
import { TourFrameworkTemplate } from "@/features/tours/tour-framework-template";
import { TourTemplate } from "@/features/tours/tour-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  assertPublicRouteSlugs(
    "tours",
    journeyCatalog.map(({ slug }) => slug),
  );
  return publicRouteSlugs.tours.map((slug) => ({ slug }));
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
  });
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const staticTour = getTourBySlug(slug);

  if (staticTour) {
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
            image: new URL(staticTour.hero.image.src, siteConfig.url).toString(),
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
            provider: { "@id": `${siteConfig.url}/#organization` },
          }}
        />
        <JsonLd
          id={`${staticTour.slug}-faq-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: staticTour.faqs.map((faq) => ({
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

  return (
    <>
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
