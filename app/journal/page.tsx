import { siteConfig } from "@/config/site";
import { JournalHubTemplate } from "@/features/journal/journal-hub-template";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { journalArticles as localJournalArticles, journalSummaries } from "@/content/journal";

export const metadata = createMetadata({
  title: "China Travel Planning Guides | AVIORA Journal",
  description:
    "China travel planning guides from AVIORA's China-based private journey team, covering routes, timing, entry, transport, payments and traveler fit.",
  path: "/journal",
});

export default async function JournalPage() {
  const latest = [...localJournalArticles].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const featured = latest.find((article) => article.featured) ?? latest[0];

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

  return (
    <>
      <JsonLd
        id="journal-blog-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "AVIORA China Travel Journal",
          description:
            "China travel planning guidance from AVIORA's China-based private journey team, covering route design, timing, entry, transport, payments and traveler fit.",
          url: new URL("/journal", siteConfig.url).toString(),
          publisher: {
            "@id": `${siteConfig.url}/#organization`,
          },
          blogPost: latest.map((article) => ({
            "@type": "BlogPosting",
            headline: article.title,
            url: new URL(`/journal/${article.slug}`, siteConfig.url).toString(),
            datePublished: article.publishedAt,
            dateModified: article.updatedAt ?? article.publishedAt,
          })),
        }}
      />
      <JsonLd
        id="journal-collection-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "AVIORA China Travel Journal",
          description:
            "A China travel decision resource for international travelers planning private journeys, with guidance on route design, destination fit and practical preparation.",
          url: new URL("/journal", siteConfig.url).toString(),
          about: [
            { "@type": "Thing", name: "Private travel in China" },
            { "@type": "Thing", name: "China itinerary planning" },
            { "@type": "Thing", name: "China travel preparation" },
          ],
          audience: {
            "@type": "Audience",
            audienceType: "International travelers planning private journeys in China",
          },
          publisher: { "@id": `${siteConfig.url}/#organization` },
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: latest.length,
            itemListElement: latest.map((article, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: new URL(`/journal/${article.slug}`, siteConfig.url).toString(),
              name: article.title,
            })),
          },
        }}
      />
      <JsonLd
        id="journal-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Travel Journal", path: "/journal" },
        ])}
      />
      <JournalHubTemplate featured={featured} articles={journalSummaries} />
    </>
  );
}
