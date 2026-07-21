import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { EditorialDestinationTemplate } from "@/features/destinations/editorial-destination-template";
import {
  getPublicDestination,
  getPublicDestinations,
  getPublicSiteSettings,
} from "@/lib/cms/public-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type DestinationPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getPublicDestinations()).map(({ slug }) => ({ slug }));
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

  return (
    <>
      <JsonLd
        id={`${slug}-destination-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "TouristDestination",
          name: destination.name,
          description: destination.seoDescription,
          url: new URL(`/destinations/${slug}`, siteConfig.url).toString(),
          image: destination.heroImage
            ? new URL(destination.heroImage.src, siteConfig.url).toString()
            : undefined,
          touristType: destination.bestFor.split(",").map((item) => item.trim()),
          containsPlace: destination.highlights.map((highlight) => ({
            "@type": "TouristAttraction",
            name: highlight,
          })),
        }}
      />
      <JsonLd
        id={`${slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
          { name: destination.name, path: `/destinations/${slug}` },
        ])}
      />
      <EditorialDestinationTemplate
        destination={destination}
        destinations={destinations}
        navigation={settings.navigation}
        cta={{ label: settings.primaryCtaLabel, href: settings.primaryCtaHref }}
      />
    </>
  );
}
