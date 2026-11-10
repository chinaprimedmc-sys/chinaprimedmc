/** 产品大类由 classification.ts 的主子类派生，避免维护两份归属表。 */
import {
  journeyCategories,
  journeyClassification,
  type JourneyTier,
  type PublicJourneySlug,
} from "@/content/tours/classification";

export type { JourneyTier } from "@/content/tours/classification";

export const journeyTiers = Object.fromEntries(
  (Object.keys(journeyClassification) as PublicJourneySlug[]).map((slug) => [
    slug,
    journeyCategories[journeyClassification[slug].category].tier,
  ]),
) as Record<PublicJourneySlug, JourneyTier>;

const slugsFor = (tier: JourneyTier) =>
  (Object.keys(journeyTiers) as PublicJourneySlug[]).filter((slug) => journeyTiers[slug] === tier);

export const dayExperienceSlugs = slugsFor("day");
export const signatureJourneySlugs = slugsFor("signature");
export const tailorMadeExampleSlugs = slugsFor("tailor-made-example");
