import { getJournalSearchRole } from "@/content/journal/search-strategy";
import type { JournalSummary } from "@/types/journal";

export type JournalDecisionId = "first-trip" | "route" | "prepare" | "pace" | "private";

export const journalDecisions: Array<{
  id: JournalDecisionId;
  label: string;
  description: string;
}> = [
  {
    id: "first-trip",
    label: "Planning my first China trip",
    description: "Start with time, gateways and a route that works in real days.",
  },
  {
    id: "route",
    label: "Choosing a route",
    description: "Compare places, transfer logic and what deserves more time.",
  },
  {
    id: "prepare",
    label: "Preparing for travel",
    description: "Check entry, tickets, payments, trains and arrival details.",
  },
  {
    id: "pace",
    label: "Travelling at a different pace",
    description: "Plan around mobility, family rhythm and usable energy.",
  },
  {
    id: "private",
    label: "Comparing private travel",
    description: "Understand cost, scope, operator responsibility and fit.",
  },
];

export function getJournalDecision(article: Pick<JournalSummary, "slug" | "category" | "tags">) {
  const pillar = getJournalSearchRole(article.slug)?.pillar ?? "";

  if (/arrival essentials/i.test(pillar) || article.category === "Visa") return "prepare";
  if (/life stage|easier-paced/i.test(pillar)) return "pace";
  if (/private tour decision/i.test(pillar) || article.category === "Industry News")
    return "private";
  if (/first china|high-intent first/i.test(pillar)) return "first-trip";
  return "route";
}

export function findJournalSummary(articles: JournalSummary[], slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function journalSearchText(article: JournalSummary) {
  const role = getJournalSearchRole(article.slug);
  return [
    article.title,
    article.excerpt,
    article.category,
    article.tags.join(" "),
    role?.pillar,
    role?.primaryKeyword,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

const lowercaseTitleWords = /\b(And|As|At|Before|For|From|In|Of|On|Or|The|To|Vs|With|Without)\b/g;

export function formatJournalTitle(title: string) {
  return title.replace(lowercaseTitleWords, (word, offset: number) =>
    offset === 0 ? word : word.toLowerCase(),
  );
}
