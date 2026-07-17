import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { getJourneyCatalogItem, journeyCatalog } from "@/content/tours/catalog";
import { getTourBySlug } from "@/content/tours";
import { TourFrameworkTemplate } from "@/features/tours/tour-framework-template";
import { TourTemplate } from "@/features/tours/tour-template";
import { CmsJourneyTemplate } from "@/features/tours/cms-journey-template";
import { getPublishedCmsJourney, getPublishedCmsJourneys } from "@/lib/cms/data";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const cmsJourneys = await getPublishedCmsJourneys();
  return [
    ...new Set([
      ...journeyCatalog.map((item) => item.slug),
      ...cmsJourneys.map((item) => item.slug),
    ]),
  ].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  const framework = getJourneyCatalogItem(slug);
  const cmsJourney = !tour && !framework ? await getPublishedCmsJourney(slug) : null;

  if (!tour && !framework && !cmsJourney) {
    return createMetadata({ title: "Tour Not Found", noIndex: true });
  }

  if (framework && !tour) {
    return createMetadata({
      title: framework.title,
      description: framework.summary,
      path: `/tours/${framework.slug}`,
      image: framework.image.src,
    });
  }

  if (cmsJourney) {
    return createMetadata({
      title: cmsJourney.seo_title,
      description: cmsJourney.seo_description,
      path: `/tours/${cmsJourney.slug}`,
      image: cmsJourney.hero_image?.url,
    });
  }

  if (!tour) {
    return createMetadata({ title: "Tour Not Found", noIndex: true });
  }

  return createMetadata({
    title: tour.seo.title,
    description: tour.seo.description,
    path: `/tours/${tour.slug}`,
    image: tour.hero.image.src,
  });
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  const framework = getJourneyCatalogItem(slug);
  const cmsJourney = !tour && !framework ? await getPublishedCmsJourney(slug) : null;

  if (!tour && !framework && !cmsJourney) {
    notFound();
  }

  if (framework && !tour) {
    return (
      <>
        <JsonLd
          id={`${framework.slug}-breadcrumb-schema`}
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journeys", path: "/tours" },
            { name: framework.title, path: `/tours/${framework.slug}` },
          ])}
        />
        <TourFrameworkTemplate item={framework} />
      </>
    );
  }

  if (cmsJourney) {
    return (
      <>
        <JsonLd
          id={`${cmsJourney.slug}-breadcrumb-schema`}
          data={breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journeys", path: "/tours" },
            { name: cmsJourney.title, path: `/tours/${cmsJourney.slug}` },
          ])}
        />
        <CmsJourneyTemplate journey={cmsJourney} />
      </>
    );
  }

  if (!tour) {
    notFound();
  }

  return (
    <>
      <JsonLd id={`${tour.slug}-tour-schema`} data={touristTripSchema(tour)} />
      <JsonLd
        id={`${tour.slug}-faq-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: tour.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <JsonLd
        id={`${tour.slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tours", path: "/tours" },
          { name: tour.title, path: `/tours/${tour.slug}` },
        ])}
      />
      <TourTemplate tour={tour} />
    </>
  );
}

function touristTripSchema(tour: NonNullable<ReturnType<typeof getTourBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.title,
    description: tour.seo.description,
    url: new URL(`/tours/${tour.slug}`, siteConfig.url).toString(),
    image: new URL(tour.hero.image.src, siteConfig.url).toString(),
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: tour.itinerary.map((day, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "TouristAttraction",
          name: day.title,
          description: day.summary,
          touristType: tour.styles,
          geo: day.coordinates
            ? {
                "@type": "GeoCoordinates",
                latitude: day.coordinates.latitude,
                longitude: day.coordinates.longitude,
              }
            : undefined,
        },
      })),
    },
  };
}
