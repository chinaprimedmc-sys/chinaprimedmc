import type { JournalArticle, JournalCitation, JournalContentBlock } from "@/types/journal";

export type DayTourGuide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  keyword: string;
  intent: "answer" | "compare" | "plan" | "evaluate";
  answer: string;
  sections: Array<{ title: string; paragraphs: string[]; items?: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
};

export type DayTourCluster = {
  journey: string;
  destination: string;
  label: string;
  service: string;
  boundary: string;
  citations: JournalCitation[];
  guides: DayTourGuide[];
};

export function buildDayTourArticles(clusters: DayTourCluster[]): JournalArticle[] {
  return clusters.flatMap((cluster) =>
    cluster.guides.map((guide) => {
      const content: JournalContentBlock[] = [
        { type: "paragraph", body: `**${guide.answer}**` },
        ...guide.sections.flatMap<JournalContentBlock>((section, index) => [
          { type: "heading", id: `decision-${index + 1}`, title: section.title },
          ...section.paragraphs.map<JournalContentBlock>((body) => ({ type: "paragraph", body })),
          ...(section.items
            ? [{ type: "list" as const, style: "unordered" as const, items: section.items }]
            : []),
        ]),
        { type: "heading", id: "your-day-tour", title: "How this fits the AVIORA day tour" },
        { type: "paragraph", body: cluster.service },
        { type: "paragraph", body: cluster.boundary },
        {
          type: "callout",
          tone: "note",
          title: "What the sources establish",
          body: "The official references below support attraction background and visitor rules. Route suggestions are AVIORA planning advice, not official attraction instructions. Service inclusions come from the linked AVIORA product; your dated written confirmation determines the booked service. Check the operator's live notices before travel.",
        },
        {
          type: "cta",
          title: `See the ${cluster.label}`,
          description:
            "Review the actual route, price basis, inclusions and optional services. Send your date and hotel for a written availability check before making a booking decision.",
          primary: {
            label: "View day tour",
            href: `/tours/${cluster.journey}?source=journal-${guide.slug}`,
          },
        },
        { type: "heading", id: "continue-planning", title: "Make the next decision" },
        {
          type: "paragraph",
          body: `Continue with [${cluster.guides.find((other) => other.slug !== guide.slug)?.title}](/journal/${cluster.guides.find((other) => other.slug !== guide.slug)?.slug}) or compare the [private guide and driver roles](/journal/private-guide-vs-driver-china). The [${cluster.label}](/tours/${cluster.journey}) is the service reference for this guide; the attraction's current rules take priority over planning examples.`,
        },
        ...guide.faqs.map<JournalContentBlock>((faq) => ({ type: "faq", ...faq })),
      ];
      const words = content.reduce(
        (sum, block) =>
          sum +
          (block.type === "paragraph"
            ? block.body.split(/\s+/).length
            : block.type === "list"
              ? block.items.join(" ").split(/\s+/).length
              : block.type === "faq"
                ? block.answer.split(/\s+/).length
                : 0),
        0,
      );
      return {
        slug: guide.slug,
        title: guide.title,
        dek: guide.description,
        excerpt: guide.description,
        category: "Travel Guides",
        tags: [cluster.destination, "day-tours", "private-guides", "planning"],
        author: {
          name: "AVIORA China Travel Team",
          role: "China-based private travel planning team",
        },
        publishedAt: "2026-10-01",
        updatedAt: "2026-10-01",
        readingTime: `${Math.max(4, Math.ceil(words / 200))} min read`,
        hero: {
          mode: "text",
          eyebrow: `${cluster.label} planning`,
          image: {
            src: "/og/aviora-private-china-tours-social-v2.webp",
            alt: "AVIORA China Travel",
            width: 1200,
            height: 630,
          },
        },
        gallery: [],
        content,
        seo: {
          title: guide.seoTitle,
          description: guide.description,
          keywords: [guide.keyword, cluster.label, "AVIORA day tours"],
          canonicalPath: `/journal/${guide.slug}`,
        },
        related: {
          destinations: [cluster.destination],
          tours: [cluster.journey],
          articles: cluster.guides
            .filter((other) => other.slug !== guide.slug)
            .map((other) => other.slug),
        },
        citations: cluster.citations,
        editorial: {
          contentType: guide.intent === "compare" ? "comparison" : "practical",
          decisionStage: "evaluate",
          keyAnswer: guide.answer,
          relatedJourneyReason: `This guide supports a specific decision on the ${cluster.label}; its product page separates confirmed inclusions from optional services.`,
        },
        conversion: {
          eyebrow: "Plan one useful day",
          title: `Check the ${cluster.label} for your date`,
          description:
            "A China-based specialist will confirm the service window, hotel pickup, traveler requirements and current availability. No booking is confirmed by submitting an inquiry.",
          label: "View day tour",
          href: `/tours/${cluster.journey}?source=journal-${guide.slug}`,
        },
      };
    }),
  );
}
