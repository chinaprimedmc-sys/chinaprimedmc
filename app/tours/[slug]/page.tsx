import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { getTourBySlug, getTourSlugs } from "@/content/tours";
import { TourTemplate } from "@/features/tours/tour-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getTourSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTourBySlug(slug);

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
