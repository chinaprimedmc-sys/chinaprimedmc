import { siteConfig } from "@/config/site";
import { JournalHubTemplate } from "@/features/journal/journal-hub-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { journalArticles as localJournalArticles } from "@/content/journal";

export const metadata = createMetadata({
  title: "Travel Journal",
  description:
    "Practical China travel guides covering routes, seasons, family trips, food, culture, hotels and private touring.",
  path: "/journal",
});

export default async function JournalPage() {
  const latest = [...localJournalArticles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const featured = latest.find((article) => article.featured) ?? latest[0];
  const editorPicks = latest.filter((article) => article.editorPick);

  if (!featured) {
    return (
      <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-6 py-24 text-center">
        <div>
          <p className="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
            Travel Journal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.03em]">
            Stories are being prepared.
          </h1>
          <p className="text-muted mt-4 leading-7">
            Please check back soon or contact our China journey team for planning advice.
          </p>
        </div>
      </main>
    );
  }

  const categories = [...new Set(latest.map((article) => article.category))];
  const tags = [...new Set(latest.flatMap((article) => article.tags))].map((tag) => ({
    slug: tag,
    label: tag,
  }));

  return (
    <>
      <JsonLd
        id="journal-blog-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "AVIORA China Travel Journal",
          description:
            "Practical China travel guides covering routes, seasons, family trips, food, culture, hotels and private touring.",
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
      <JournalHubTemplate
        featured={featured}
        editorPicks={editorPicks}
        latest={latest}
        categories={categories}
        tags={tags}
      />
    </>
  );
}
