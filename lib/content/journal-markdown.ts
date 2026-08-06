import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import type { JournalArticle, JournalContentBlock } from "@/types/journal";
import visaTransitMarkdown from "@/content/journal/articles/2026-08-06-china-240-hour-visa-free-transit-guide.md";
import accommodationMarkdown from "@/content/journal/articles/2026-08-06-china-accommodation-registration-foreigners.md";
import trainMarkdown from "@/content/journal/articles/2026-08-06-china-high-speed-train-foreigners.md";
import paymentsMarkdown from "@/content/journal/articles/2026-08-06-china-mobile-payments-foreign-tourists.md";
import forbiddenCityMarkdown from "@/content/journal/articles/2026-08-06-forbidden-city-tickets-foreigners.md";

const bundledMarkdown: Record<string, string> = {
  "content/journal/articles/2026-08-06-china-240-hour-visa-free-transit-guide.md":
    visaTransitMarkdown,
  "content/journal/articles/2026-08-06-china-accommodation-registration-foreigners.md":
    accommodationMarkdown,
  "content/journal/articles/2026-08-06-china-high-speed-train-foreigners.md": trainMarkdown,
  "content/journal/articles/2026-08-06-china-mobile-payments-foreign-tourists.md": paymentsMarkdown,
  "content/journal/articles/2026-08-06-forbidden-city-tickets-foreigners.md": forbiddenCityMarkdown,
};

export async function hydrateJournalArticle(article: JournalArticle): Promise<JournalArticle> {
  if (!article.sourcePath) return article;

  const markdown =
    bundledMarkdown[article.sourcePath] ??
    (await readFile(path.join(process.cwd(), article.sourcePath), "utf8"));

  return {
    ...article,
    content: parseJournalMarkdown(markdown),
  };
}

function parseJournalMarkdown(markdown: string): JournalContentBlock[] {
  const draft = section(markdown, "## Draft", "## Suggested structured data");
  const sources = section(markdown, "## Sources", "## Review Notes");
  const blocks = parseBlocks(draft);

  if (sources.trim()) {
    blocks.push({ type: "heading", id: "sources", title: "Sources and verification" });
    blocks.push(...parseBlocks(sources, false));
  }

  return blocks;
}

function section(markdown: string, start: string, end: string) {
  const startIndex = markdown.indexOf(start);
  if (startIndex === -1) return "";
  const contentStart = startIndex + start.length;
  const endIndex = markdown.indexOf(end, contentStart);
  return markdown.slice(contentStart, endIndex === -1 ? undefined : endIndex).trim();
}

function parseBlocks(markdown: string, parseFaq = true): JournalContentBlock[] {
  const blocks: JournalContentBlock[] = [];
  const lines = markdown.split("\n");
  let paragraph: string[] = [];
  let inFaq = false;
  let faqQuestion: string | null = null;

  const flushParagraph = () => {
    const body = paragraph.join(" ").trim();
    paragraph = [];
    if (!body) return;

    if (inFaq && faqQuestion) {
      blocks.push({ type: "faq", question: faqQuestion, answer: cleanMarkdown(body) });
      faqQuestion = null;
      return;
    }

    blocks.push({ type: "paragraph", body: cleanMarkdown(body) });
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      flushParagraph();
      continue;
    }

    if (line === "## FAQ" && parseFaq) {
      flushParagraph();
      inFaq = true;
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      inFaq = false;
      const title = cleanMarkdown(line.slice(3));
      blocks.push({ type: "heading", id: slugify(title), title });
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      const title = cleanMarkdown(line.slice(4));
      if (inFaq) {
        faqQuestion = title;
      } else {
        blocks.push({ type: "heading", id: slugify(title), title });
      }
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      flushParagraph();
      blocks.push({ type: "paragraph", body: `• ${cleanMarkdown(line.replace(/^[-*]\s+/, ""))}` });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      flushParagraph();
      blocks.push({ type: "paragraph", body: cleanMarkdown(line) });
      continue;
    }

    paragraph.push(line);
  }

  flushParagraph();
  return blocks;
}

function cleanMarkdown(value: string) {
  return value.replace(/\*\*(.*?)\*\*/g, "$1").replace(/`(.*?)`/g, "$1");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
