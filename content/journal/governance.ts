import { PUBLIC_JOURNAL_SLUGS } from "@/content/journal/public-manifest";
import { journeyJournalLinks } from "@/content/journal/journey-links";
import { getJournalSearchRole } from "@/content/journal/search-strategy";
import type { JournalArticle } from "@/types/journal";

type Governance = NonNullable<JournalArticle["governance"]>;

const REVIEWED_ON = "2026-10-09";
const NEXT_REVIEW = "2027-01-09";

const officialRuleSlugs = new Set([
  "china-240-hour-visa-free-transit-guide",
  "china-accommodation-registration-foreigners",
  "china-domestic-flight-power-bank-rules",
  "china-high-speed-train-foreigners",
  "china-visa-requirements-us-citizens-2026",
  "bringing-prescription-medicine-to-china",
  "forbidden-city-tickets-foreigners",
  "terracotta-army-tickets-foreign-visitors",
  "chengdu-panda-base-tickets-foreigners",
  "china-golden-week-travel-2026",
]);

const operatorJudgmentSlugs = new Set([
  "china-tour-no-forced-shopping",
  "how-to-choose-hotels-china-itinerary",
  "private-china-tour-cost-2026",
  "what-is-included-private-china-tour",
  "how-to-choose-private-china-tour-company",
  "private-china-tour-proposal-checklist",
  "private-china-tour-arrival-handoff-checklist",
  "what-private-support-changes-first-china-trip",
  "private-china-tour-transfers-handoffs-support",
  "china-private-tour-weather-delay-support",
  "how-to-plan-private-china-trip",
]);

export function getJournalGovernance(slug: string): Governance {
  const role = getJournalSearchRole(slug);
  const journey = journeyJournalLinks[slug];

  if (!role) throw new Error(`Journal governance is missing a search role for ${slug}.`);
  if (!journey?.primaryJourney)
    throw new Error(`Journal governance is missing a primary journey for ${slug}.`);

  return {
    primaryIntent: role.primaryKeyword,
    canonicalOwner: `/journal/${slug}`,
    sourceClass: officialRuleSlugs.has(slug)
      ? "official-required"
      : operatorJudgmentSlugs.has(slug)
        ? "operator"
        : "mixed",
    contentStatus: "published",
    contentReviewedAt: REVIEWED_ON,
    nextReviewAt: NEXT_REVIEW,
    primaryJourney: journey.primaryJourney,
  };
}

/** Fails fast at build time if the published catalogue and governance registry drift apart. */
export function assertJournalGovernance() {
  const intents = new Set<string>();
  for (const slug of PUBLIC_JOURNAL_SLUGS) {
    const governance = getJournalGovernance(slug);
    if (intents.has(governance.primaryIntent)) {
      throw new Error(`Duplicate journal primary intent: ${governance.primaryIntent}`);
    }
    const alternatives = journeyJournalLinks[slug]?.alternativeJourneys ?? [];
    if (alternatives.length > 2) {
      throw new Error(`Too many alternative journeys for ${slug}: ${alternatives.length}`);
    }
    intents.add(governance.primaryIntent);
  }
}
