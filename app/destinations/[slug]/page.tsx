import { destinationPlanningGuides } from "@/content/destinations/planning-guides";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { assertPublicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { EditorialDestinationTemplate } from "@/features/destinations/editorial-destination-template";
import {
  getPublicDestination,
  getPublicDestinations,
  getPublicSiteSettings,
} from "@/lib/cms/public-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { explorerDestinations, journeyIncludesDestination } from "@/content/destinations/explorer";
import { journeyCatalog } from "@/content/tours/catalog";

type DestinationPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const destinations = await getPublicDestinations();
  assertPublicRouteSlugs(
    "destinations",
    destinations.map(({ slug }) => slug),
  );
  return destinations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: DestinationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = await getPublicDestination(slug);
  if (!destination) notFound();

  return createMetadata({
    title: destination.seoTitle,
    description: destination.seoDescription,
    path: `/destinations/${slug}`,
    image: destination.heroImage?.src,
    imageWidth: destination.heroImage?.width,
    imageHeight: destination.heroImage?.height,
    imageAlt: destination.heroImage?.alt,
  });
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params;
  const [destination, destinations, settings] = await Promise.all([
    getPublicDestination(slug),
    getPublicDestinations(),
    getPublicSiteSettings(),
  ]);
  if (!destination) notFound();
  const sourceDestination = explorerDestinations.find((item) => item.id === slug)!;
  const guide = destinationPlanningGuides[slug];
  const url = new URL(`/destinations/${slug}`, siteConfig.url).toString();

  return (
    <>
      <JsonLd
        id={`${slug}-webpage-schema`}
        data={{
          ...webPageSchema({
            url,
            name: destination.seoTitle,
            description: destination.seoDescription,
            about: { "@id": `${url}#destination` },
            mainEntity: { "@id": `${url}#destination` },
          }),
          citation: guide?.visitorResources.map((resource) => ({
            "@type": "CreativeWork",
            name: resource.label,
            url: resource.href,
            description: resource.scope,
          })),
          // Nearby excursions are subjects of the guide, not necessarily inside this place.
          mentions: guide?.attractions.map((name) => ({
            "@type": "TouristAttraction",
            name,
          })),
        }}
      />
      <JsonLd
        id={`${slug}-destination-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          "@id": `${url}#destination`,
          name: destination.name,
          description: destination.seoDescription,
          url,
          mainEntityOfPage: { "@id": `${url}#webpage` },
          image: destination.heroImage
            ? new URL(destination.heroImage.src, siteConfig.url).toString()
            : undefined,
          touristType: destination.bestFor.split(",").map((item) => item.trim()),
        }}
      />
      {guide?.products.length ? (
        <JsonLd
          id={`${slug}-journey-list-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            "@id": `${url}#private-journeys`,
            name: `Private tour planning for ${destination.name}`,
            mainEntityOfPage: { "@id": `${url}#webpage` },
            numberOfItems: guide.products.length,
            itemListElement: guide.products.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: product.label,
              url: new URL(`/tours/${product.slug}`, siteConfig.url).toString(),
            })),
          }}
        />
      ) : null}
      <JsonLd
        id={`${slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: destination.name, path: `/destinations/${slug}` },
        ])}
      />
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
      <EditorialDestinationTemplate
        destination={destination}
        destinations={destinations}
        journeys={journeyCatalog.filter((journey) =>
          journeyIncludesDestination(sourceDestination, journey),
        )}
        cta={{ label: "Plan My Trip", href: settings.primaryCtaHref }}
      />
    </>
  );
}
