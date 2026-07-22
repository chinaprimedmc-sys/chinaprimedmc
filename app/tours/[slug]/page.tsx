import type { Metadata } from "next";
import { notFound } from "next/navigation";

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

export async function generateStaticParams() {
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
