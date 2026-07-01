import type { Metadata } from "next";

import { destinationAsset } from "@/content/destinations/assets";
import {
  CatalogListTemplate,
  ExperienceGrid,
  FilterLink,
} from "@/features/catalog/catalog-list-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getCmsCatalog } from "@/services/cms/resolver";

type ExperiencesPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export const metadata: Metadata = createMetadata({
  title: "Private China Experiences",
  description:
    "Browse private China experiences by culture, food, nature, luxury, and family travel themes.",
  path: "/experiences",
  image: destinationAsset.yangshuoYulongRiver.src,
});

export const dynamic = "force-dynamic";

export default async function ExperiencesPage({ searchParams }: ExperiencesPageProps) {
  const filters = await searchParams;
  const { experiences: catalogExperiences } = await getCmsCatalog();
  const experiences = catalogExperiences.filter((experience) => {
    if (filters.category && experience.category !== filters.category) return false;
    return experience.visibility.state === "published";
  });
  const categories = [...new Set(catalogExperiences.map((experience) => experience.category))];

  return (
    <>
      <JsonLd
        id="experiences-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Experiences", path: "/experiences" },
        ])}
      />
      <JsonLd
        id="experiences-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Private China Experiences",
          url: "https://chinaprimedmc.com/experiences",
          mainEntity: {
            "@type": "ItemList",
            itemListElement: catalogExperiences.map((experience, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://chinaprimedmc.com/experience/${experience.slug}`,
              name: experience.title,
            })),
          },
        }}
      />
      <CatalogListTemplate
        eyebrow="Experiences"
        title="Choose the moments you want to remember."
        description="Private experiences give the trip its texture: food, culture, nature, family ease, photography timing, and quiet access where possible."
        image={destinationAsset.yangshuoYulongRiver}
        countLabel={`${experiences.length} experiences`}
        filters={
          <>
            <FilterLink href="/experiences" label="All" active={!filters.category} />
            {categories.map((category) => (
              <FilterLink
                key={category}
                href={`/experiences?category=${encodeURIComponent(category)}`}
                label={category}
                active={filters.category === category}
              />
            ))}
          </>
        }
      >
        <ExperienceGrid experiences={experiences} />
      </CatalogListTemplate>
    </>
  );
}
