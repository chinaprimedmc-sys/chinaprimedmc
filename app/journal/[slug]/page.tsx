import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { assertPublicRouteSlugs, publicRouteSlugs } from "@/config/public-route-slugs";
import { siteConfig } from "@/config/site";
import { getArticleBySlug, getArticleSlugs } from "@/content/journal";
import type { JournalArticle } from "@/types/journal";
import { ArticleTemplate } from "@/features/journal/article-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const articleSlugs = getArticleSlugs();
  assertPublicRouteSlugs("journal", articleSlugs);
  return publicRouteSlugs.journal.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return createMetadata({
    title: article.seo.title,
    description: article.seo.description,
    path: article.seo.canonicalPath ?? `/journal/${article.slug}`,
    image: article.seo.ogImage?.src ?? article.hero.image.src,
    type: "article",
    noIndex: false,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relationships = { destinations: [], tours: [], experiences: [], articles: [] };
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
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.seo.description,
    image: new URL(article.seo.ogImage?.src ?? article.hero.image.src, siteConfig.url).toString(),
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author.name,
    },
    publisher: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: new URL(`/journal/${article.slug}`, siteConfig.url).toString(),
    keywords: article.seo.keywords,
  };
}
