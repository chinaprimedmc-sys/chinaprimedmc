import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { assertPublicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { getArticleBySlug, getArticleSlugs } from "@/content/journal";
import {
  firstTripPlanningDecisions,
  firstTripPlanningGuide,
  routeRealityCheckTerms,
} from "@/content/journal/first-trip-planning-framework";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import type { JournalArticle } from "@/types/journal";
import { ArticleTemplate } from "@/features/journal/article-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { articleSchemaData, breadcrumbSchema } from "@/lib/seo/schema";
import { hydrateJournalArticle } from "@/lib/content/journal-markdown";
import { getRelationshipsForArticle } from "@/lib/content/relationship-engine";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const articleSlugs = getArticleSlugs();
  assertPublicRouteSlugs("journal", articleSlugs);
  return articleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const articleSummary = getArticleBySlug(slug);

  if (!articleSummary) {
    notFound();
  }

  const article = await hydrateJournalArticle(articleSummary);
  const socialImage = article.seo.ogImage ?? article.hero.image;

  return createMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path: article.seo.canonicalPath ?? `/journal/${article.slug}`,
    image: socialImage.src,
    imageWidth: socialImage.width,
    imageHeight: socialImage.height,
    imageAlt: socialImage.alt,
    type: "article",
    noIndex: false,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const articleSummary = getArticleBySlug(slug);

  if (!articleSummary) {
    notFound();
  }

  const article = await hydrateJournalArticle(articleSummary);

  const relationships = getRelationshipsForArticle(article);
  const faqs = article.content.filter((block) => block.type === "faq");
  const planningSchemas = firstTripPlanningSchemas(article);

  return (
    <>
      <JsonLd id={`${article.slug}-article-schema`} data={articleSchema(article)} />
      {faqs.length ? (
        <JsonLd
          id={`${article.slug}-faq-schema`}
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) =>
              faq.type === "faq"
                ? {
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: faq.answer,
                    },
                  }
                : null,
            ),
          }}
        />
      ) : null}
      <JsonLd
        id={`${article.slug}-breadcrumb-schema`}
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/journal" },
          { name: article.title, path: `/journal/${article.slug}` },
        ])}
      />
      {planningSchemas.map((schema) => (
        <JsonLd key={schema.id} id={schema.id} data={schema.data} />
      ))}
      <ArticleTemplate article={article} relationships={relationships} />
    </>
  );
}

function articleSchema(article: JournalArticle) {
  const socialImage = article.seo.ogImage ?? article.hero.image;
  const isFirstTripPlanningGuide = article.slug === firstTripPlanningGuide.slug;
  const articleUrl = new URL(`/journal/${article.slug}`, siteConfig.url).toString();

  const schema = articleSchemaData({
    headline: article.title,
    description: article.seo.description,
    image: {
      url: new URL(socialImage.src, siteConfig.url).toString(),
      width: socialImage.width,
      height: socialImage.height,
    },
    url: articleUrl,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    authorName: article.author.name,
    authorRole: article.author.role,
    articleSection: article.category,
    wordCount: countArticleWords(article),
    keywords: article.seo.keywords,
    about: [
      ...(isFirstTripPlanningGuide
        ? [{ type: "Thing" as const, name: firstTripPlanningGuide.topic }]
        : []),
      ...(article.related?.destinations ?? []).map((slug) => ({
        type: "Place" as const,
        name: destinationName(slug),
        url: new URL(`/destinations/${slug}`, siteConfig.url).toString(),
      })),
    ],
    mentions: (article.related?.tours ?? []).flatMap((slug) => {
      const journey = getJourneyCatalogItem(slug);
      return journey
        ? [
            {
              type: "TouristTrip" as const,
              name: journey.title,
              url: new URL(`/tours/${slug}`, siteConfig.url).toString(),
              id: new URL(`/tours/${slug}#tour`, siteConfig.url).toString(),
            },
          ]
        : [];
    }),
    citations: article.citations,
  });

  return isFirstTripPlanningGuide
    ? {
        ...schema,
        hasPart: [
          { "@id": `${articleUrl}#planning-decisions` },
          { "@id": `${articleUrl}#route-reality-check` },
        ],
      }
    : schema;
}

function firstTripPlanningSchemas(article: JournalArticle) {
  if (article.slug !== firstTripPlanningGuide.slug) return [];

  const articleUrl = new URL(`/journal/${article.slug}`, siteConfig.url).toString();
  const articleId = `${articleUrl}#article`;
  const organizationId = `${siteConfig.url}/#organization`;
  const journeyUrl = new URL(
    `/tours/${firstTripPlanningGuide.journeySlug}`,
    siteConfig.url,
  ).toString();
  const journeyId = `${journeyUrl}#tour`;
  const frameworkAnchor = `${articleUrl}#the-aviora-route-reality-check`;
  const frameworkId = `${articleUrl}#route-reality-check`;

  const frameworkRelationships = {
    isPartOf: { "@id": articleId },
    creator: { "@id": organizationId },
    about: { "@id": journeyId, "@type": "TouristTrip", name: "China, Considered" },
  };

  return [
    {
      id: `${article.slug}-planning-decisions-schema`,
      data: {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${articleUrl}#planning-decisions`,
        name: "12 decisions for planning a first trip to China",
        description:
          "The ordered planning sequence AVIORA uses to test a first-China route before flights, hotels and date-specific services are confirmed.",
        url: articleUrl,
        numberOfItems: firstTripPlanningDecisions.length,
        mainEntityOfPage: { "@id": articleUrl },
        subjectOf: { "@id": articleId },
        itemListElement: firstTripPlanningDecisions.map((decision, index) => {
          const decisionUrl = `${articleUrl}#${decision.anchor}`;
          return {
            "@type": "ListItem",
            position: index + 1,
            name: decision.name,
            url: decisionUrl,
            item: {
              "@type": "Thing",
              "@id": decisionUrl,
              name: decision.name,
              description: decision.description,
              url: decisionUrl,
            },
          };
        }),
      },
    },
    {
      id: `${article.slug}-route-reality-check-schema`,
      data: {
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        "@id": frameworkId,
        name: "AVIORA Route Reality Check",
        description:
          "AVIORA's six-part operational framework for testing whether a private China itinerary can work for the stated travelers, dates and route before booking.",
        url: frameworkAnchor,
        ...frameworkRelationships,
        hasDefinedTerm: routeRealityCheckTerms.map((term) => ({
          "@type": "DefinedTerm",
          "@id": `${frameworkId}-${term.slug}`,
          name: term.name,
          description: term.description,
          url: frameworkAnchor,
          inDefinedTermSet: { "@id": frameworkId },
        })),
      },
    },
  ];
}

function destinationName(slug: string) {
  if (slug === "xian") return "Xi'an";
  return slug
    .split("-")
    .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
    .join(" ");
}

function countArticleWords(article: JournalArticle) {
  const text = article.content
    .flatMap((block) => {
      switch (block.type) {
        case "heading":
          return [block.title];
        case "paragraph":
          return [block.body];
        case "list":
          return block.items;
        case "table":
          return [...block.headers, ...block.rows.flat()];
        case "callout":
          return [block.title ?? "", block.body];
        case "quote":
          return [block.quote, block.attribution ?? ""];
        case "cta":
          return [block.title, block.description];
        case "faq":
          return [block.question, block.answer];
        case "image":
          return [block.caption ?? ""];
      }
    })
    .join(" ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .trim();

  return text ? text.split(/\s+/).length : undefined;
}
