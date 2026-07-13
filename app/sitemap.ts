import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getDestinationSlugs } from "@/content/destinations";
import { getArticleSlugs } from "@/content/journal";
import { getTourSlugs } from "@/content/tours";

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];

  const destinationRoutes = getDestinationSlugs().map((slug) => ({
    url: new URL(`/destinations/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const tourRoutes = getTourSlugs().map((slug) => ({
    url: new URL(`/tours/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const journalRoutes = getArticleSlugs().map((slug) => ({
    url: new URL(`/journal/${slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...destinationRoutes, ...tourRoutes, ...journalRoutes];
}
