import { catalogDestinations, catalogExperiences, catalogJourneys } from "@/content/catalog";
import type {
  CmsDatabase,
  CmsDestinationRecord,
  CmsExperienceRecord,
  CmsJourneyRecord,
} from "@/types/cms";

const now = "2026-06-30T00:00:00.000Z";

export function createDefaultCmsDatabase(): CmsDatabase {
  return {
    version: 1,
    updatedAt: now,
    destinations: catalogDestinations.map((destination): CmsDestinationRecord => ({
      type: "destination",
      slug: destination.slug,
      title: destination.name,
      name: destination.name,
      summary: destination.summary,
      region: destination.region,
      destinationType: destination.type,
      image: destination.image,
      visibility: destination.visibility,
      seoTitle: `Private ${destination.name} Travel and Tailor-made China Journeys`,
      seoDescription: destination.summary,
      experienceSlugs: destination.experienceSlugs,
      journeySlugs: destination.journeySlugs,
      updatedAt: now,
    })),
    experiences: catalogExperiences.map((experience): CmsExperienceRecord => ({
      type: "experience",
      slug: experience.slug,
      title: experience.title,
      summary: experience.summary,
      image: experience.image,
      visibility: experience.visibility,
      seoTitle: experience.seo.title,
      seoDescription: experience.seo.description,
      category: experience.category,
      duration: experience.duration,
      suitableFor: experience.suitableFor,
      whatYouWillDo: experience.whatYouWillDo,
      destinationSlugs: experience.destinationSlugs,
      journeySlugs: experience.journeySlugs,
      updatedAt: now,
    })),
    journeys: catalogJourneys.map((journey): CmsJourneyRecord => ({
      type: "journey",
      slug: journey.slug,
      title: journey.title,
      summary: journey.summary,
      image: journey.image,
      visibility: journey.visibility,
      seoTitle: `${journey.title} | Private China Journey`,
      seoDescription: journey.summary,
      category: journey.category,
      duration: journey.duration,
      route: journey.route,
      styles: journey.styles,
      destinationSlugs: journey.destinationSlugs,
      experienceSlugs: journey.experienceSlugs,
      updatedAt: now,
    })),
  };
}
