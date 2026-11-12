import { siteConfig } from "@/config/site";
import { travelGuideSearch, type TravelGuideId } from "@/content/travel-guides/search";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export function travelGuideBreadcrumb(id: TravelGuideId) {
  const guide = travelGuideSearch[id];
  return {
    ...breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About AVIORA", path: "/about" },
      { name: guide.label, path: guide.path },
    ]),
    "@id": `${new URL(guide.path, siteConfig.url)}#breadcrumb`,
  };
}

export function createTravelGuideMetadata(id: TravelGuideId) {
  const guide = travelGuideSearch[id];
  return createMetadata({
    title: guide.title,
    description: guide.description,
    path: guide.path,
    type: "article",
    // Google does not use meta keywords. Search intent is expressed in visible copy.
    keywords: [],
  });
}

export function travelGuideSchema(id: TravelGuideId, headline: string) {
  const guide = travelGuideSearch[id];
  const url = new URL(guide.path, siteConfig.url).toString();
  const absolute = (href: string) => new URL(href, siteConfig.url).toString();
  const articleId = `${url}#article`;
  const pageId = `${url}#webpage`;
  const teamUrl = absolute("/editorial-policy");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url,
        name: headline,
        description: guide.description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        mainEntity: { "@id": articleId },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        relatedLink: [...guide.reading, ...guide.journeys].map((link) => absolute(link.href)),
      },
      {
        "@type": "Article",
        "@id": articleId,
        url,
        headline,
        description: guide.description,
        abstract: guide.summary,
        inLanguage: "en-US",
        mainEntityOfPage: { "@id": pageId },
        author: {
          "@type": "Organization",
          "@id": `${teamUrl}#editorial-team`,
          name: "AVIORA China Travel Team",
          url: teamUrl,
        },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        about: { "@type": "Thing", name: guide.primaryQuery },
        image: absolute(siteConfig.ogImage),
        citation: guide.sources.map((source) => absolute(source.href)),
        hasPart: guide.answers.map((answer) => ({
          "@type": "WebPageElement",
          "@id": `${url}#${answer.id}`,
          url: `${url}#${answer.id}`,
          name: answer.question,
          text: answer.answer,
          isPartOf: { "@id": articleId },
        })),
      },
    ],
  };
}

/** Optional discovery aid. All passages also appear in the server-rendered pages. */
export function renderTravelerPlanningGuides() {
  return `## Traveler planning guides\n\n${Object.values(travelGuideSearch)
    .map(
      (guide) =>
        `### [${guide.label}](${new URL(guide.path, siteConfig.url)})\n\n${guide.summary}\n\n${guide.answers.map((answer) => `- [${answer.question}](${new URL(`${guide.path}#${answer.id}`, siteConfig.url)}): ${answer.answer}`).join("\n")}`,
    )
    .join("\n\n")}`;
}
