import { getDestinationBySlug } from "@/content/destinations";
import { destinationAsset } from "@/content/destinations/assets";
import { journalArticles } from "@/content/journal";
import { getTourBySlug, tours } from "@/content/tours";
import type { MediaAsset } from "@/types/component-library";
import type { DestinationExperience, DestinationTour } from "@/types/destination";
import type { JournalArticle } from "@/types/journal";
import type { RelatedDestination, RelatedTour, TourExperienceOption } from "@/types/tour";

export type ContentRelationships = {
  destinations: RelatedDestination[];
  tours: RelatedTour[];
  experiences: TourExperienceOption[];
  articles: Array<{
    title: string;
    excerpt: string;
    category: string;
    image: MediaAsset;
    href: string;
  }>;
};

const experienceCatalog: Record<string, TourExperienceOption> = {
  pandas: {
    title: "Panda morning in Chengdu",
    description:
      "A family-friendly panda experience planned at a smarter hour, with guide pacing that keeps the day relaxed.",
    badges: ["Family", "Pandas"],
    image: destinationAsset.chengduPanda,
  },
  "private-guides": {
    title: "Private guide storytelling",
    description:
      "Context-rich guiding that adapts to children, older parents, photographers, food lovers, or first-time visitors.",
    badges: ["Private", "Culture"],
    image: destinationAsset.beijingForbiddenCityWide,
  },
  "train-travel": {
    title: "High-speed rail made easy",
    description:
      "Station timing, tickets, luggage flow, and transfer support so China by rail feels smooth instead of confusing.",
    badges: ["Train Travel", "Logistics"],
    image: destinationAsset.shanghaiSkyline,
  },
  food: {
    title: "Food experiences without guesswork",
    description:
      "Local flavor shaped around comfort, dietary needs, children, and the right level of adventure.",
    badges: ["Food", "Local Life"],
    image: destinationAsset.chengduTeaHouse,
  },
};

export function getRelationshipsForArticle(article: JournalArticle): ContentRelationships {
  const manualDestinationSlugs = article.related?.destinations ?? [];
  const inferredDestinationSlugs = article.tags.filter((tag) => ["beijing"].includes(tag));
  const destinationSlugs = unique([...manualDestinationSlugs, ...inferredDestinationSlugs]);

  const manualTourSlugs = article.related?.tours ?? [];
  const inferredTourSlugs = tours
    .filter((tour) =>
      tour.styles.some((style) =>
        article.tags.some((tag) => style.toLowerCase().replaceAll(" ", "-") === tag),
      ),
    )
    .map((tour) => tour.slug);
  const tourSlugs = unique([...manualTourSlugs, ...inferredTourSlugs]);

  const experienceSlugs = unique([
    ...(article.related?.experiences ?? []),
    ...article.tags.filter((tag) => experienceCatalog[tag]),
  ]);

  const manualArticleSlugs = article.related?.articles ?? [];
  const inferredArticleSlugs = journalArticles
    .filter(
      (candidate) =>
        candidate.slug !== article.slug && candidate.tags.some((tag) => article.tags.includes(tag)),
    )
    .map((candidate) => candidate.slug);

  return {
    destinations: destinationSlugs
      .map((slug) => getDestinationBySlug(slug))
      .filter(isDefined)
      .map((destination) => ({
        name: destination.name,
        description: destination.hero.tagline,
        image: destination.hero.image,
        href: `/destinations/${destination.slug}`,
      })),
    tours: tourSlugs
      .map((slug) => getTourBySlug(slug))
      .filter(isDefined)
      .map((tour) => ({
        title: tour.title,
        description: tour.subtitle,
        tags: tour.styles.slice(0, 3),
        image: tour.hero.image,
        route: tour.route,
        duration: tour.duration,
        href: `/tours/${tour.slug}`,
      })),
    experiences: experienceSlugs.map((slug) => experienceCatalog[slug]).filter(isDefined),
    articles: unique([...manualArticleSlugs, ...inferredArticleSlugs])
      .map((slug) => journalArticles.find((candidate) => candidate.slug === slug))
      .filter(isDefined)
      .map((related) => ({
        title: related.title,
        excerpt: related.excerpt,
        category: related.category,
        image: related.hero.image,
        href: `/journal/${related.slug}`,
      })),
  };
}

export function getRelationshipsForDestination(slug: string) {
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return { articles: [], tours: [], experiences: [] };
  }

  return {
    articles: journalArticles
      .filter(
        (article) => article.tags.includes(slug) || article.related?.destinations?.includes(slug),
      )
      .map((article) => ({
        title: article.title,
        excerpt: article.excerpt,
        category: article.category,
        image: article.hero.image,
        href: `/journal/${article.slug}`,
      })),
    tours: destination.related.journeys as DestinationTour[],
    experiences: destination.related.experiences as DestinationExperience[],
  };
}

export function getRelationshipsForTour(slug: string) {
  const tour = getTourBySlug(slug);

  if (!tour) {
    return { articles: [] };
  }

  return {
    articles: journalArticles
      .filter(
        (article) =>
          article.related?.tours?.includes(slug) ||
          tour.styles.some((style) =>
            article.tags.includes(style.toLowerCase().replaceAll(" ", "-")),
          ),
      )
      .map((article) => ({
        title: article.title,
        excerpt: article.excerpt,
        category: article.category,
        image: article.hero.image,
        href: `/journal/${article.slug}`,
      })),
  };
}

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

function isDefined<T>(value: T | undefined | null): value is T {
  return value != null;
}
