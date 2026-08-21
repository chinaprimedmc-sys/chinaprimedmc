import { journeyJournalLinks, journeyReadingPriority } from "@/content/journal/journey-links";
import { journalArticles } from "@/content/journal";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import type { JournalArticle } from "@/types/journal";

export function getJourneyBridgeForArticle(article: JournalArticle) {
  const rule = journeyJournalLinks[article.slug];
  const candidateSlugs = unique(
    [rule?.primaryJourney, ...(article.related?.tours ?? [])].filter(isString),
  );
  const journey = candidateSlugs.map(getJourneyCatalogItem).find(isDefined);

  if (!journey) return undefined;

  const alternatives = unique([
    ...(rule?.alternativeJourneys ?? []),
    ...(article.related?.tours ?? []),
  ])
    .filter((slug) => slug !== journey.slug)
    .map(getJourneyCatalogItem)
    .filter(isDefined)
    .slice(0, 2);

  const params = new URLSearchParams({
    source: `journal-${article.slug}`,
    journey: journey.slug,
    placement: "journal-journey-bridge",
  });
  if (rule?.planningPreference) params.set("preference", rule.planningPreference);
  const advisorMessage = [
    "Hello AVIORA, I found this journey through your China travel guide:",
    article.title,
    `Journey: ${journey.title}`,
    "Travel dates:",
    "Number of travelers:",
    "What matters most to us:",
  ].join("\n");

  return {
    journey,
    alternatives,
    eyebrow: "Recommended Private Journey",
    title:
      rule?.title ?? article.conversion?.title ?? "See how this advice works in a real journey",
    description:
      rule?.description ??
      `This ${journey.durationLabel.toLowerCase()} route connects ${journey.routeLabel}. AVIORA can adjust the pacing, hotel standard and daily priorities while arranging private guides, transfers and essential reservations.`,
    journeyLabel: rule?.journeyLabel ?? "See this private journey",
    planningLabel: rule?.planningLabel ?? "Ask about this journey",
    planningHref: `/start-planning?${params.toString()}`,
    advisorHref: `https://wa.me/447985052302?text=${encodeURIComponent(advisorMessage)}`,
  };
}

export function getJourneyReadingArticles(journeySlug: string, limit = 3) {
  const priority = journeyReadingPriority[journeySlug] ?? [];
  return journalArticles
    .map((article) => ({ article, score: articleJourneyScore(article, journeySlug) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => {
      const aPriority = priority.indexOf(a.article.slug);
      const bPriority = priority.indexOf(b.article.slug);
      if (aPriority >= 0 || bPriority >= 0) {
        if (aPriority < 0) return 1;
        if (bPriority < 0) return -1;
        return aPriority - bPriority;
      }
      return b.score - a.score || b.article.publishedAt.localeCompare(a.article.publishedAt);
    })
    .slice(0, limit)
    .map(({ article }) => ({
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      category: article.category,
      readingTime: article.readingTime,
      image: article.hero.image,
      href: `/journal/${article.slug}`,
    }));
}

function articleJourneyScore(article: JournalArticle, journeySlug: string) {
  const rule = journeyJournalLinks[article.slug];
  let score = 0;
  if (journeyReadingPriority[journeySlug]?.includes(article.slug)) score += 40;
  if (rule?.primaryJourney === journeySlug) score += 100;
  if (article.related?.tours?.includes(journeySlug)) score += 60;
  if (rule?.alternativeJourneys?.includes(journeySlug)) score += 20;
  if (/itinerary|how many days|where to stay|tickets|transport/i.test(article.title)) score += 8;
  return score;
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

function isDefined<T>(value: T | undefined | null): value is T {
  return value != null;
}

function isString(value: string | undefined): value is string {
  return Boolean(value);
}
