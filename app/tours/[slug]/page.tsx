import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CmsJourneyTemplate } from "@/features/tours/cms-journey-template";
import { isIndexableCmsJourney } from "@/lib/cms/adapters";
import { getPublishedCmsJourney, getPublishedCmsJourneys } from "@/lib/cms/data";
import { getPublicSiteSettings } from "@/lib/cms/public-content";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type TourPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const cmsJourneys = await getPublishedCmsJourneys();
  return cmsJourneys.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: TourPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cmsJourney = await getPublishedCmsJourney(slug);

  if (!cmsJourney) {
    notFound();
  }

  return createMetadata({
    title: cmsJourney.seo_title,
    description: cmsJourney.seo_description,
    path: `/tours/${cmsJourney.slug}`,
    image: cmsJourney.hero_image?.url,
    noIndex: !isIndexableCmsJourney(cmsJourney),
  });
}

export default async function TourPage({ params }: TourPageProps) {
  const { slug } = await params;
  const [cmsJourney, settings] = await Promise.all([
    getPublishedCmsJourney(slug),
    getPublicSiteSettings(),
  ]);

  if (!cmsJourney) {
    notFound();
  }

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
      <CmsJourneyTemplate journey={cmsJourney} settings={settings} />
    </>
  );
}
