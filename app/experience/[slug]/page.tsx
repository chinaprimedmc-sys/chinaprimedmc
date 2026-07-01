import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ExperienceDetailTemplate } from "@/features/catalog/experience-detail-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import {
  experienceToCatalog,
  getCmsExperience,
  getCmsExperienceRelationships,
} from "@/services/cms/resolver";

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const record = await getCmsExperience(slug);

  if (!record) {
    return createMetadata({ title: "Experience Not Found", noIndex: true });
  }

  const experience = experienceToCatalog(record);

  return createMetadata({
    title: experience.seo.title,
    description: experience.seo.description,
    path: `/experience/${experience.slug}`,
    image: experience.image.src,
  });
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const record = await getCmsExperience(slug);

  if (!record) {
    notFound();
  }

  const experience = experienceToCatalog(record);
  const relationships = await getCmsExperienceRelationships(experience.slug);

  return (
    <>
      <JsonLd
        id={`${experience.slug}-experience-schema`}
        data={{
          "@context": "https://schema.org",
          "@type": "TouristAttraction",
          name: experience.title,
          description: experience.seo.description,
          url: new URL(`/experience/${experience.slug}`, siteConfig.url).toString(),
          image: new URL(experience.image.src, siteConfig.url).toString(),
          touristType: experience.suitableFor,
        }}
      />
      <JsonLd
        id={`${experience.slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Experiences", path: "/experiences" },
          { name: experience.title, path: `/experience/${experience.slug}` },
        ])}
      />
      <ExperienceDetailTemplate
        experience={experience}
        destinations={relationships.destinations}
        journeys={relationships.journeys}
      />
    </>
  );
}
