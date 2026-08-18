import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { explorerDestinations } from "@/content/destinations/explorer";
import { journalArticles } from "@/content/journal";
import { journeyCatalog } from "@/content/tours/catalog";
import { journeyDiscoveryProfiles } from "@/content/tours/discovery-profiles";

const staticRoutes = [
  ["/", "weekly", 1],
  ["/destinations", "weekly", 0.85],
  ["/tours", "weekly", 0.85],
  ["/journal", "weekly", 0.75],
  ["/about", "monthly", 0.7],
  ["/contact", "monthly", 0.65],
  ["/faq", "monthly", 0.6],
  ["/start-planning", "monthly", 0.6],
  ["/family-travel", "monthly", 0.68],
  ["/senior-travel", "monthly", 0.68],
  ["/privacy", "yearly", 0.35],
  ["/cookies", "yearly", 0.35],
  ["/terms", "yearly", 0.35],
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

  // Every published journey is a commercial landing page. Framework journeys
  // are still useful entry points for searchers and must not depend on the
  // featured flag to be discovered.
  const journeyEntries: MetadataRoute.Sitemap = journeyCatalog.map(({ slug, kind }) => ({
    url: new URL(`/tours/${slug}`, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: kind === "featured" ? 0.9 : 0.82,
  }));

  const discoveryEntries: MetadataRoute.Sitemap = journeyDiscoveryProfiles.map(({ path }) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency: "monthly",
    priority: 0.8,
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
    ...journeyEntries,
    ...discoveryEntries,
    ...localArticleEntries,
  ]);
}

function deduplicate(entries: MetadataRoute.Sitemap) {
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
