import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { TourTemplate } from "@/features/tours/tour-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getCmsJourneyDetail } from "@/services/cms/resolver";

type JourneyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: JourneyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const journey = await getCmsJourneyDetail(slug);

  if (!journey) {
    return createMetadata({ title: "Journey Not Found", noIndex: true });
  }

  return createMetadata({
    title: journey.seo.title,
    description: journey.seo.description,
    path: `/journey/${journey.slug}`,
    image: journey.hero.image.src,
  });
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { slug } = await params;
  const journey = await getCmsJourneyDetail(slug);

  if (!journey) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`${journey.slug}-journey-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: journey.title,
          description: journey.seo.description,
          url: new URL(`/journey/${journey.slug}`, siteConfig.url).toString(),
          image: new URL(journey.hero.image.src, siteConfig.url).toString(),
          itinerary: {
            "@type": "ItemList",
            itemListElement: journey.itinerary.map((day, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "TouristAttraction",
                name: day.title,
                description: day.summary,
              },
            })),
          },
        }}
      />
      <JsonLd
        id={`${journey.slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journeys", path: "/journeys" },
          { name: journey.title, path: `/journey/${journey.slug}` },
        ])}
      />
      <JsonLd
        id={`${journey.slug}-faq-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: journey.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }}
      />
      <TourTemplate tour={journey} />
    </>
  );
}
