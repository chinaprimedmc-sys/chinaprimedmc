import { siteConfig } from "@/config/site";
import { homeFaqs } from "@/content/home/redesign";
import { homeFeaturedJourneys, homeSearch, homeServiceJourney } from "@/content/home/search";
import { getTourBySlug } from "@/content/tours";
import { journeyCatalog } from "@/content/tours/catalog";

/** Optional reading aid; the indexable homepage remains the source of these statements. */
export function renderHomepageSearchGuide() {
  const featured = homeFeaturedJourneys.flatMap((selection) => {
    const journey = journeyCatalog.find((item) => item.slug === selection.slug);
    return journey
      ? [
          `- [${journey.durationLabel}: ${selection.title}](${new URL(journey.href, siteConfig.url)}): ${selection.description} Suitable for: ${selection.audience}.`,
        ]
      : [];
  });
  const family = getTourBySlug("china-family-tour-with-pandas-12-day-private-tour");
  const familyBasis = family?.overview.facts.find((fact) => fact.label === "Published Basis");

  return `## Homepage service overview

${homeSearch.overview}

## Full-service journey coordination

${homeServiceJourney.description}

${homeServiceJourney.stages.map((stage) => `### ${stage.title}\n\n${stage.body}`).join("\n\n")}

## Homepage featured journeys

${featured.join("\n")}

${familyBasis?.helper ? `### Published family-tour pricing basis\n\n${familyBasis.value}. ${familyBasis.helper}\n\nThis is the family journey's published starting estimate, not a site-wide rate. The final price is quoted for the travel dates, party and room choices.\n\n` : ""}## Questions answered on the homepage

${homeFaqs.map((faq) => `### ${faq.question}\n\n${faq.answer}`).join("\n\n")}`;
}
