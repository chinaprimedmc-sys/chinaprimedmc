import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getArticleSlugs } from "@/content/journal";
import { getCmsCatalog } from "@/services/cms/resolver";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { destinations, experiences, journeys } = await getCmsCatalog();
  const staticRoutes = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: new URL("/journal", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: new URL("/travel-guide", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.78,
    },
    {
      url: new URL("/search", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    },
    {
      url: new URL("/about", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    },
    {
      url: new URL("/contact", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: new URL("/faq", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    },
    {
      url: new URL("/destinations", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: new URL("/experiences", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.78,
    },
    {
      url: new URL("/journeys", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.86,
    },
  ];

  const canonicalDestinationRoutes = destinations.map((destination) => ({
    url: new URL(`/destination/${destination.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.84,
  }));

  const experienceRoutes = experiences.map((experience) => ({
    url: new URL(`/experience/${experience.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.78,
  }));

  const canonicalJourneyRoutes = journeys.map((journey) => ({
    url: new URL(`/journey/${journey.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.88,
  }));

  const journalRoutes = getArticleSlugs().map((slug) => ({
    url: new URL(`/journal/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...canonicalDestinationRoutes,
    ...experienceRoutes,
    ...canonicalJourneyRoutes,
    ...journalRoutes,
  ];
}
