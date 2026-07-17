import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getDestinationSlugs } from "@/content/destinations";
import { getArticleSlugs } from "@/content/journal";
import { journeyCatalog } from "@/content/tours/catalog";
import { getTravelStyleSlugs } from "@/content/travel-styles";
import { getPublishedCmsJourneys, getPublishedCmsPosts } from "@/lib/cms/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cmsJourneys, cmsPosts] = await Promise.all([
    getPublishedCmsJourneys(),
    getPublishedCmsPosts(),
  ]);
  const excludedRoutes = new Set([
    "/admin",
    "/admin/analytics",
    "/admin/customers",
    "/admin/destinations",
    "/admin/experiences",
    "/admin/inquiries",
    "/admin/journal",
    "/admin/media",
    "/admin/seo",
    "/admin/settings",
    "/admin/system",
    "/admin/tours",
    "/component-playground",
    "/component-showcase",
  ]);

  const staticRoutes = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: new URL("/destinations", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: new URL("/tours", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: new URL("/styles", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: new URL("/journal", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.75,
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
      url: new URL("/planning", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    },
    {
      url: new URL("/start-planning", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.76,
    },
    {
      url: new URL("/planning/visa", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.64,
    },
    {
      url: new URL("/planning/faq", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.64,
    },
    {
      url: new URL("/family-travel", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.62,
    },
    {
      url: new URL("/senior-travel", siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.62,
    },
  ].filter((route) => {
    const pathname = new URL(route.url).pathname;
    return !excludedRoutes.has(pathname);
  });

  const destinationRoutes = getDestinationSlugs().map((slug) => ({
    url: new URL(`/destinations/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tourSlugs = [
    ...new Set([...journeyCatalog.map(({ slug }) => slug), ...cmsJourneys.map(({ slug }) => slug)]),
  ];
  const tourRoutes = tourSlugs.map((slug) => ({
    url: new URL(`/tours/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const styleRoutes = getTravelStyleSlugs().map((slug) => ({
    url: new URL(`/styles/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const journalSlugs = [...new Set([...getArticleSlugs(), ...cmsPosts.map(({ slug }) => slug)])];
  const journalRoutes = journalSlugs.map((slug) => ({
    url: new URL(`/journal/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes, ...styleRoutes, ...journalRoutes];
}
