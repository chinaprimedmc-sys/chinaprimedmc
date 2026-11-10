/**
 * Compatibility adapter for search and content relationships.
 * Identity, copy and media come from the same sources as public destination pages.
 * Add destinations in explorer.ts, editorial.ts and guide-assets.ts, never here.
 */
import {
  explorerDestinations,
  getDestinationRegionLabel,
  journeyIncludesDestination,
} from "@/content/destinations/explorer";
import { destinationPlanningGuides } from "@/content/destinations/planning-guides";
import { getDestinationEditorial } from "@/content/destinations/editorial";
import { destinationGuideAssets } from "@/content/destinations/guide-assets";
import { journeyCatalog } from "@/content/tours/catalog";
import type { Destination, DestinationHighlight } from "@/types/destination";

const interestCategories: Record<string, DestinationHighlight["category"]> = {
  icons: "Architecture",
  pandas: "Nature",
  food: "Food",
  landscape: "Nature",
  heritage: "Culture",
  city: "Architecture",
};

export const destinations: Destination[] = explorerDestinations.map((destination) => {
  const editorial = getDestinationEditorial(destination);
  const gallery = destinationGuideAssets[destination.id].gallery;
  const planningHref = `/start-planning?destination=${encodeURIComponent(destination.name)}&source=destination-guide`;
  const tours = journeyCatalog
    .filter((journey) => journeyIncludesDestination(destination, journey))
    .map((journey) => ({
      title: journey.title,
      description: journey.summary,
      tags: journey.styleFilters,
      image: journey.image,
      route: journey.routeLabel,
      duration: journey.durationLabel,
      style: journey.paceLabel,
      href: journey.href,
    }));
  const experiences = editorial.experiences.map((title, index) => ({
    title,
    description: editorial.planningNotes[index],
    badges: destination.interests,
    image: gallery[index] ?? destination.image,
  }));
  return {
    slug: destination.id,
    name: destination.name,
    region: getDestinationRegionLabel(destination.region),
    hero: {
      eyebrow: "Destination guide",
      tagline: destination.kicker,
      summary: destination.description,
      image: destination.image,
      primary: { label: "Explore private journeys", href: "#private-journeys" },
      secondary: { label: "Plan this destination", href: planningHref },
    },
    seo: {
      title:
        destinationPlanningGuides[destination.id]?.seoTitle ??
        `Private ${destination.name} Tours and Travel Guide`,
      description:
        destinationPlanningGuides[destination.id]?.seoDescription ?? destination.description,
      keywords: [destination.name, ...destination.interests],
    },
    quickFacts: [
      { label: "Location", value: getDestinationRegionLabel(destination.region) },
      { label: "Recommended Stay", value: destination.stay },
      { label: "Travel Style", value: destination.interests.join(", ") },
      { label: "Suitable For", value: destination.bestFor },
    ],
    whyVisit: {
      title: editorial.culturalStory.title,
      body: editorial.orientation,
      image: gallery[0],
    },
    bestTime: { title: "When to go", summary: editorial.bestTime, seasons: [] },
    highlights: editorial.experiences.map((title, index) => ({
      title,
      description: editorial.planningNotes[index],
      category: interestCategories[destination.interests[index] ?? destination.interests[0]],
      image: gallery[index] ?? destination.image,
    })),
    experiences,
    hotels: [],
    tours,
    gallery,
    tips: editorial.planningNotes.map((description) => ({
      title: "Planning ahead",
      description,
      category: "Transportation" as const,
    })),
    faqs: editorial.faqs,
    related: { journeys: tours.slice(0, 3), experiences, articles: [] },
  };
});

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}

export function getDestinationSlugs() {
  return destinations.map((destination) => destination.slug);
}
