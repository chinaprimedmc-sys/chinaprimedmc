import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { explorerDestinations } from "@/content/destinations/explorer";
import { journalArticles } from "@/content/journal";
import { journeyCatalog } from "@/content/tours/catalog";
import { getTourBySlug } from "@/content/tours";

const staticRoutes = [
  ["/", "weekly", 1],
  ["/destinations", "weekly", 0.85],
  ["/china-destinations", "weekly", 0.84],
  ["/china-destinations/north-china", "monthly", 0.78],
  ["/china-destinations/northeast-china", "monthly", 0.74],
  ["/china-destinations/east-china", "monthly", 0.78],
  ["/china-destinations/central-china", "monthly", 0.74],
  ["/china-destinations/south-china", "monthly", 0.78],
  ["/china-destinations/southwest-china", "monthly", 0.78],
  ["/china-destinations/northwest-china", "monthly", 0.78],
  ["/tours", "weekly", 0.85],
  ["/tailor-made-china-tours", "weekly", 0.84],
  ["/fixed-itinerary-china-tours", "weekly", 0.84],
  ["/private-china-day-tours", "weekly", 0.84],
  ["/private-guide-and-driver-china", "weekly", 0.84],
  ["/china-tours-from-usa", "weekly", 0.86],
  ["/luxury-china-tours", "weekly", 0.86],
  ["/journal", "weekly", 0.75],
  ["/about", "monthly", 0.7],
  ["/china-family-tours", "monthly", 0.8],
  ["/china-tours-for-women", "monthly", 0.8],
  ["/china-tours-for-seniors", "monthly", 0.8],
  ["/china-tours-for-muslim-travelers", "monthly", 0.8],
  ["/first-time-china-tours", "monthly", 0.8],
  ["/special-interest-china-tours", "monthly", 0.8],
  ["/about/founder", "monthly", 0.7],
  ["/company", "monthly", 0.72],
  ["/editorial-policy", "monthly", 0.55],
  ["/reviews", "monthly", 0.6],
  ["/china-dmc", "monthly", 0.4],
  ["/contact", "monthly", 0.65],
  ["/faq", "monthly", 0.6],
  ["/start-planning", "monthly", 0.6],
  ["/privacy", "yearly", 0.35],
  ["/cookies", "yearly", 0.35],
  ["/terms", "yearly", 0.35],
] as const;

const familyPillarArticles = new Set([
  "the-ultimate-guide-to-traveling-in-china-with-kids",
  "chengdu-panda-base-family-guide",
  "mutianyu-great-wall-multigenerational-guide",
  "multigenerational-china-travel-blueprint",
  "bringing-history-to-life-forbidden-city-terracotta-warriors",
  "shanghai-chengdu-modern-china-tech-family-guide",
  "zero-shopping-policy-luxury-china-inbound-dmc",
]);

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
  const journeyEntries: MetadataRoute.Sitemap = journeyCatalog.map(({ slug, kind }) => {
    const tour = getTourBySlug(slug);
    return {
      url: new URL(`/tours/${slug}`, siteConfig.url).toString(),
      lastModified: tour?.updatedAt,
      changeFrequency: "monthly",
      priority: kind === "featured" ? 0.9 : 0.82,
    };
  });

  const localArticleEntries: MetadataRoute.Sitemap = journalArticles.map((article) => ({
    url: new URL(`/journal/${article.slug}`, siteConfig.url).toString(),
    lastModified: article.updatedAt ?? article.publishedAt,
    changeFrequency: "monthly",
    priority: familyPillarArticles.has(article.slug) ? 0.85 : 0.72,
  }));

  return deduplicate([
    ...staticEntries,
    ...destinationEntries,
    ...journeyEntries,
    ...localArticleEntries,
  ]);
}

function deduplicate(entries: MetadataRoute.Sitemap) {
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
