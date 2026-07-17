import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getDestinationSlugs } from "@/content/destinations";
import { journalArticles } from "@/content/journal";
import { journeyCatalog } from "@/content/tours/catalog";
import { getTravelStyleSlugs } from "@/content/travel-styles";
import { isIndexableCmsJourney, isIndexableCmsPost } from "@/lib/cms/adapters";
import { getPublishedCmsJourneys, getPublishedCmsPosts } from "@/lib/cms/data";

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
  const [cmsJourneys, cmsPosts] = await Promise.all([
    getPublishedCmsJourneys(),
    getPublishedCmsPosts(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ([path, changeFrequency, priority]) => ({
      url: new URL(path, siteConfig.url).toString(),
      changeFrequency,
      priority,
    }),
  );

  const destinationEntries: MetadataRoute.Sitemap = getDestinationSlugs().map((slug) => ({
    url: new URL(`/destinations/${slug}`, siteConfig.url).toString(),
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

  const cmsJourneyEntries: MetadataRoute.Sitemap = cmsJourneys
    .filter(isIndexableCmsJourney)
    .map((journey) => ({
      url: new URL(`/tours/${journey.slug}`, siteConfig.url).toString(),
      lastModified: journey.updated_at,
      changeFrequency: "monthly",
      priority: 0.85,
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

  const localArticleSlugs = new Set(journalArticles.map(({ slug }) => slug));
  const cmsPostEntries: MetadataRoute.Sitemap = cmsPosts
    .filter((post) => !localArticleSlugs.has(post.slug) && isIndexableCmsPost(post))
    .map((post) => ({
      url: new URL(`/journal/${post.slug}`, siteConfig.url).toString(),
      lastModified: post.updated_at,
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  return deduplicate([
    ...staticEntries,
    ...destinationEntries,
    ...flagshipEntries,
    ...cmsJourneyEntries,
    ...styleEntries,
    ...localArticleEntries,
    ...cmsPostEntries,
  ]);
}

function deduplicate(entries: MetadataRoute.Sitemap) {
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
