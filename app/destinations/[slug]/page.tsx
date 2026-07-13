import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { getDestinationBySlug, getDestinationSlugs } from "@/content/destinations";
import { DestinationTemplate } from "@/features/destinations/destination-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type DestinationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return createMetadata({ title: "Destination Not Found", noIndex: true });
  }

  return createMetadata({
    title: destination.seo.title,
    description: destination.seo.description,
    path: `/destinations/${destination.slug}`,
    image: destination.hero.image.src,
  });
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`${destination.slug}-destination-schema`}
        data={touristDestinationSchema(destination)}
      />
      <JsonLd
        id={`${destination.slug}-faq-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: destination.faqs.map((faq) => ({
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
        id={`${destination.slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: destination.name, path: `/destinations/${destination.slug}` },
        ])}
      />
      <DestinationTemplate destination={destination} />
    </>
  );
}

function touristDestinationSchema(
  destination: NonNullable<ReturnType<typeof getDestinationBySlug>>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.seo.description,
    url: new URL(`/destinations/${destination.slug}`, siteConfig.url).toString(),
    image: new URL(destination.hero.image.src, siteConfig.url).toString(),
    touristType: destination.quickFacts
      .find((fact) => fact.label === "Suitable For")
      ?.value.split(",")
      .map((item) => item.trim()),
    geo: destination.coordinates
      ? {
          "@type": "GeoCoordinates",
          latitude: destination.coordinates.latitude,
          longitude: destination.coordinates.longitude,
        }
      : undefined,
    containsPlace: destination.highlights.map((highlight) => ({
      "@type": "TouristAttraction",
      name: highlight.title,
      description: highlight.description,
    })),
  };
}
