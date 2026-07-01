import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { DestinationTemplate } from "@/features/destinations/destination-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getCmsDestinationDetail } from "@/services/cms/resolver";

type DestinationPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getCmsDestinationDetail(slug);

  if (!destination) {
    return createMetadata({ title: "Destination Not Found", noIndex: true });
  }

  return createMetadata({
    title: destination.seo.title,
    description: destination.seo.description,
    path: `/destination/${destination.slug}`,
    image: destination.hero.image.src,
  });
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = await getCmsDestinationDetail(slug);

  if (!destination) {
    notFound();
  }

  return (
    <>
      <JsonLd
        id={`${destination.slug}-destination-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: destination.name,
          description: destination.seo.description,
          url: new URL(`/destination/${destination.slug}`, siteConfig.url).toString(),
          image: new URL(destination.hero.image.src, siteConfig.url).toString(),
        }}
      />
      <JsonLd
        id={`${destination.slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: destination.name, path: `/destination/${destination.slug}` },
        ])}
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
      <DestinationTemplate destination={destination} />
    </>
  );
}
