import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { assertPublicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { getArticleBySlug, getArticleSlugs } from "@/content/journal";
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
      <ArticleTemplate article={article} relationships={relationships} />
    </>
  );
}

function articleSchema(article: JournalArticle) {
  const socialImage = article.seo.ogImage ?? article.hero.image;

  return articleSchemaData({
    headline: article.title,
    description: article.seo.description,
    image: {
      url: new URL(socialImage.src, siteConfig.url).toString(),
      width: socialImage.width,
      height: socialImage.height,
    },
    url: new URL(`/journal/${article.slug}`, siteConfig.url).toString(),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    authorName: article.author.name,
    authorRole: article.author.role,
    articleSection: article.category,
    wordCount: countArticleWords(article),
    keywords: article.seo.keywords,
    citations: article.citations,
  });
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
