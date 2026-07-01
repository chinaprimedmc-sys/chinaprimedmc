import { siteConfig } from "@/config/site";
import { getEditorPicks, getFeaturedArticle, journalArticles } from "@/content/journal";
import { JournalHubTemplate } from "@/features/journal/journal-hub-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata = createMetadata({
  title: "China Travel Guide",
  description:
    "Premium China travel guides, destination stories, family travel advice, seasonal planning, food, culture, and private journey inspiration.",
  path: "/travel-guide",
});

export default function JournalPage() {
  const featured = getFeaturedArticle();
  const editorPicks = getEditorPicks();
  const latest = journalArticles;

  return (
    <>
      <JsonLd
        id="journal-blog-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "China Prime DMC Travel Guide",
          description:
            "Premium China travel guides, destination stories, family travel advice, seasonal planning, food, culture, and private journey inspiration.",
          url: new URL("/travel-guide", siteConfig.url).toString(),
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
          { name: "Travel Guide", path: "/travel-guide" },
        ])}
      />
      <JournalHubTemplate featured={featured} editorPicks={editorPicks} latest={latest} />
    </>
  );
}
