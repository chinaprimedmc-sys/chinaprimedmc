import { journeyCatalog } from "@/content/tours/catalog";
import { getJourneyPricePresentation } from "@/lib/tours/journey-pricing";
import { siteConfig } from "@/config/site";
import { destinationEditorial } from "@/content/destinations/editorial";
import { explorerDestinations } from "@/content/destinations/explorer";
import { destinationPlanningGuides } from "@/content/destinations/planning-guides";

/** Reuse visible guide content so machine-readable advice retains its qualifications. */
export function renderDestinationSearchGuides({ full = false } = {}) {
  const guides = explorerDestinations.map((destination) => {
    const guide = destinationPlanningGuides[destination.id];
    const editorial = destinationEditorial[destination.id];
    const url = `${siteConfig.url}/destinations/${destination.id}`;
    const products = guide.products
      .map((product) => {
        const journey = journeyCatalog.find((item) => item.slug === product.slug);
        if (!journey) throw new Error(`Destination product is unpublished: ${product.slug}`);
        return `- [${product.label}](${siteConfig.url}/tours/${product.slug}): complete tour ${journey.durationLabel}; best for: ${product.comparison.bestFor}; time in this destination: ${product.comparison.localPlan}; before choosing: ${product.comparison.importantChoice}; price: ${getJourneyPricePresentation(journey).accessibleText} Why choose this route: ${product.reason}`;
      })
      .join("\n");
    const detail = full
      ? `

### Stay length

${guide.stayAnswer}

${guide.stays.map((stay) => `- ${stay.label}: ${stay.advice}`).join("\n")}

### Where to stay

${guide.hotelAnswer}

${guide.hotelAreas.map((area) => `- ${area.name}: ${area.advice}`).join("\n")}

### ${guide.sightseeingQuestion}

${guide.sightseeingAnswer}

${guide.tradeoffs.map((choice) => `- ${choice.title}: ${choice.advice}${choice.articleSlug ? ` Further guidance: ${siteConfig.url}/journal/${choice.articleSlug}` : ""}`).join("\n")}

### Destination questions

${editorial.faqs.map((faq) => `#### ${faq.question}\n\n${faq.answer}`).join("\n\n")}

### Supporting planning guides

${guide.articles.map((article) => `- [${article.label}](${siteConfig.url}/journal/${article.slug})`).join("\n")}`
      : "";

    return `## ${destination.name}

Canonical destination guide: ${url}

${guide.answer}${
      full
        ? detail
        : `

Stay length: ${guide.stayAnswer}

Where to stay: ${guide.hotelAnswer}

${guide.sightseeingQuestion}
${guide.sightseeingAnswer}`
    }

### Time, walking and cost

${guide.practicalPlanning.timing}

${guide.practicalPlanning.walking}

${guide.practicalPlanning.cost}

### Sources and visitor information

Stay lengths, hotel-area comparisons and route choices are AVIORA planning recommendations. These external sources serve the specific purposes stated below, not confirmation of a purchased service.
${guide.visitorResources.map((resource) => `- [${resource.label}](${resource.href}): ${resource.scope}`).join("\n")}

### Choosing a private tour

${guide.routeAdvice}

Private service scope: ${guide.serviceScope}

Published product connections (read each qualification before treating an excursion as included):
${products}`;
  });

  return `# Published destination planning guides

These ${guides.length} detailed guides are a subset of AVIORA's China-wide service coverage. They contain first-party planning advice, not official attraction rules or live availability. The canonical destination pages publish the same advice and product connections. Nearby excursions discussed in a guide may lie outside the named city or park. Cite the relevant guide for AVIORA's advice; follow its supporting articles and official sources for time-sensitive rules. Editorial policy: ${siteConfig.url}/editorial-policy

${guides.join("\n\n")}`;
}
