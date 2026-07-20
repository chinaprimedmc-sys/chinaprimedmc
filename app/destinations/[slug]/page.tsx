import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { getDestinationBySlug } from "@/content/destinations";
import { explorerDestinations } from "@/content/destinations/explorer";
import { DestinationTemplate } from "@/features/destinations/destination-template";
import { EditorialDestinationTemplate } from "@/features/destinations/editorial-destination-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type DestinationPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return explorerDestinations.map(({ id }) => ({ slug: id }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  const explorerDestination = explorerDestinations.find((item) => item.id === slug);
  if (!destination && !explorerDestination) notFound();

  return createMetadata({
    title: destination?.seo.title ?? `${explorerDestination!.name} Private Travel Guide`,
    description:
      destination?.seo.description ??
      `Explore ${explorerDestination!.name} for a private China journey: signature experiences, recommended stay, best time, practical pacing and regional connections.`,
    path: `/destinations/${slug}`,
    image: destination?.hero.image.src ?? explorerDestination!.image.src,
  });
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  const explorerDestination = explorerDestinations.find((item) => item.id === slug);
  if (!destination && !explorerDestination) notFound();

  const name = destination?.name ?? explorerDestination!.name;
  const description = destination?.seo.description ?? explorerDestination!.description;
  const image = destination?.hero.image.src ?? explorerDestination!.image.src;

  return (
    <>
      <JsonLd
        id={`${slug}-destination-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name,
          description,
          url: new URL(`/destinations/${slug}`, siteConfig.url).toString(),
          image: new URL(image, siteConfig.url).toString(),
          touristType: destination
            ? destination.quickFacts
                .find((fact) => fact.label === "Suitable For")
                ?.value.split(",")
                .map((item) => item.trim())
            : [explorerDestination!.bestFor],
          containsPlace: destination
            ? destination.highlights.map((highlight) => ({
                "@type": "TouristAttraction",
                name: highlight.title,
                description: highlight.description,
              }))
            : undefined,
        }}
      />
      {destination ? (
        <JsonLd
          id={`${slug}-faq-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: destination.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      ) : null}
      <JsonLd
        id={`${slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name, path: `/destinations/${slug}` },
        ])}
      />
      {destination ? (
        <DestinationTemplate destination={destination} />
      ) : (
        <EditorialDestinationTemplate destination={explorerDestination!} />
      )}
    </>
  );
}
