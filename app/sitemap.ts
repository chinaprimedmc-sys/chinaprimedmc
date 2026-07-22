import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { explorerDestinations } from "@/content/destinations/explorer";
import { journalArticles } from "@/content/journal";
import { journeyCatalog } from "@/content/tours/catalog";
import { getTravelStyleSlugs } from "@/content/travel-styles";

const staticRoutes = [
  ["/", "weekly", 1],
  ["/destinations", "weekly", 0.85],
  ["/tours", "weekly", 0.85],
  ["/styles", "weekly", 0.75],
  ["/journal", "weekly", 0.75],
  ["/about", "monthly", 0.7],
  ["/contact", "monthly", 0.65],
  ["/faq", "monthly", 0.6],
  ["/planning", "monthly", 0.72],
  ["/start-planning", "monthly", 0.6],
  ["/planning/visa", "monthly", 0.64],
  ["/planning/faq", "monthly", 0.64],
  ["/family-travel", "monthly", 0.68],
  ["/senior-travel", "monthly", 0.68],
  ["/privacy", "yearly", 0.2],
  ["/terms", "yearly", 0.2],
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ([path, changeFrequency, priority]) => ({
      url: new URL(path, siteConfig.url).toString(),
      changeFrequency,
      priority,
    }),
  );

  const destinationEntries: MetadataRoute.Sitemap = explorerDestinations.map(({ id }) => ({
    url: new URL(`/destinations/${id}`, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const flagshipEntries: MetadataRoute.Sitemap = journeyCatalog
    .filter(({ kind }) => kind === "featured")
    .map(({ slug }) => ({
      url: new URL(`/tours/${slug}`, siteConfig.url).toString(),
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  const styleEntries: MetadataRoute.Sitemap = getTravelStyleSlugs().map((slug) => ({
    url: new URL(`/styles/${slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const localArticleEntries: MetadataRoute.Sitemap = journalArticles.map((article) => ({
    url: new URL(`/journal/${article.slug}`, siteConfig.url).toString(),
    lastModified: article.updatedAt ?? article.publishedAt,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  return deduplicate([
    ...staticEntries,
    ...destinationEntries,
    ...flagshipEntries,
    ...styleEntries,
    ...localArticleEntries,
  ]);
}

function deduplicate(entries: MetadataRoute.Sitemap) {
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
