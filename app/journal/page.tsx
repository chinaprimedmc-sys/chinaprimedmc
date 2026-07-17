import { siteConfig } from "@/config/site";
import { getEditorPicks, getFeaturedArticle, journalArticles } from "@/content/journal";
import { JournalHubTemplate } from "@/features/journal/journal-hub-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { cmsBlogToArticle } from "@/lib/cms/adapters";
import { getPublishedCmsPosts } from "@/lib/cms/data";

export const metadata = createMetadata({
  title: "Travel Journal",
  description:
    "Premium China travel guides, destination stories, family travel advice, seasonal planning, food, culture, and private journey inspiration.",
  path: "/journal",
});

export default async function JournalPage() {
  const featured = getFeaturedArticle();
  const cmsPosts = await getPublishedCmsPosts();
  const cmsArticles = cmsPosts
    .map(cmsBlogToArticle)
    .filter((article): article is NonNullable<typeof article> => Boolean(article));
  const cmsSlugs = new Set(cmsArticles.map((article) => article.slug));
  const localArticles = journalArticles.filter((article) => !cmsSlugs.has(article.slug));
  const editorPicks = [...getEditorPicks(), ...cmsArticles.slice(0, 2)];
  const latest = [...cmsArticles, ...localArticles];

  return (
    <>
      <JsonLd
        id="journal-blog-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "China Prime DMC Travel Journal",
          description:
            "Premium China travel guides, destination stories, family travel advice, seasonal planning, food, culture, and private journey inspiration.",
          url: new URL("/journal", siteConfig.url).toString(),
          publisher: {
            "@type": "TravelAgency",
            name: siteConfig.name,
            url: siteConfig.url,
          },
          blogPost: latest.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            url: new URL(`/journal/${article.slug}`, siteConfig.url).toString(),
            datePublished: article.publishedAt,
          })),
        }}
      />
      <JsonLd
        id="journal-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Travel Journal", path: "/journal" },
        ])}
      />
      <JournalHubTemplate featured={featured} editorPicks={editorPicks} latest={latest} />
    </>
  );
}
