import { siteConfig } from "@/config/site";
import { companyIdentity } from "@/content/about/identity";
import { aboutSearch } from "@/content/about/search";
import { aboutQuestions } from "@/content/about";
import { travelGuideIds, travelGuideSearch } from "@/content/travel-guides/search";

/** The graph describes visible About content; no inferred reviews, endorsements or dates. */
export function aboutPageSchema() {
  const url = `${siteConfig.url}/about`;
  const pageId = `${url}#webpage`;
  const answers = [
    ...aboutSearch.identityAnswers.map((item) => ({
      name: item.question,
      text: item.answer,
      anchor: item.id,
    })),
    ...aboutQuestions.map((item, index) => ({
      name: item.question,
      text: item.answer,
      anchor: `about-answer-${index + 1}`,
    })),
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": pageId,
        url,
        name: "About AVIORA China Travel",
        description: companyIdentity.brandSummary,
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        publisher: { "@id": `${siteConfig.url}/#organization` },
        mainEntity: { "@id": `${siteConfig.url}/#organization` },
        mentions: [
          { "@id": `${siteConfig.url}/#founder` },
          { "@id": `${siteConfig.url}/#operator` },
        ],
        relatedLink: [
          ...aboutSearch.reading.map((item) => new URL(item.href, siteConfig.url).toString()),
          `${siteConfig.url}/company`,
          `${siteConfig.url}/about/founder`,
          `${siteConfig.url}/reviews`,
          `${siteConfig.url}/editorial-policy`,
        ],
        hasPart: [
          ...answers.map((item) => ({
            "@type": "WebPageElement",
            "@id": `${url}#${item.anchor}`,
            url: `${url}#${item.anchor}`,
            name: item.name,
            text: item.text,
          })),
          { "@id": `${url}#traveler-guides` },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${url}#traveler-guides`,
        name: "Private China travel planning by traveler needs",
        itemListElement: travelGuideIds.map((id, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: travelGuideSearch[id].label,
          url: new URL(travelGuideSearch[id].path, siteConfig.url).toString(),
        })),
      },
    ],
  };
}
