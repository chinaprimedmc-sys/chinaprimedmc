import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import type { JournalArticle, JournalContentBlock } from "@/types/journal";
import visaTransitMarkdown from "@/content/journal/articles/2026-08-06-china-240-hour-visa-free-transit-guide.md";
import accommodationMarkdown from "@/content/journal/articles/2026-08-06-china-accommodation-registration-foreigners.md";
import trainMarkdown from "@/content/journal/articles/2026-08-06-china-high-speed-train-foreigners.md";
import paymentsMarkdown from "@/content/journal/articles/2026-08-06-china-mobile-payments-foreign-tourists.md";
import forbiddenCityMarkdown from "@/content/journal/articles/2026-08-06-forbidden-city-tickets-foreigners.md";
import pandaBaseMarkdown from "@/content/journal/articles/2026-08-07-chengdu-panda-base-tickets-foreigners.md";
import simCardMarkdown from "@/content/journal/articles/2026-08-07-china-sim-card-esim-internet-foreign-tourists.md";
import shanghaiAirportMarkdown from "@/content/journal/articles/2026-08-07-shanghai-pudong-hongqiao-airport-guide.md";
import medicineMarkdown from "@/content/journal/articles/2026-08-08-bringing-prescription-medicine-to-china.md";
import powerBankMarkdown from "@/content/journal/articles/2026-08-08-china-domestic-flight-power-bank-rules.md";
import goldenWeekMarkdown from "@/content/journal/articles/2026-08-08-china-golden-week-travel-2026.md";
import greatWallMarkdown from "@/content/journal/articles/2026-08-08-mutianyu-badaling-jinshanling-great-wall.md";
import terracottaArmyMarkdown from "@/content/journal/articles/2026-08-08-terracotta-army-tickets-foreign-visitors.md";
import mattaConnectMarkdown from "@/content/journal/articles/2026-08-08-china-prime-dmc-ttg-asia-matta-connect.md";
import privateChinaTourCostMarkdown from "@/content/journal/articles/2026-08-10-private-china-tour-cost-2026.md";
import tenDayChinaItineraryMarkdown from "@/content/journal/articles/2026-08-10-10-day-china-itinerary-first-time-visitors.md";
import singaporePrivateChinaTourMarkdown from "@/content/journal/articles/2026-08-10-private-china-tour-from-singapore.md";
import chengduChongqingZhangjiajieMarkdown from "@/content/journal/articles/2026-08-12-chengdu-chongqing-zhangjiajie-itinerary.md";
import chengduDaysMarkdown from "@/content/journal/articles/2026-08-12-how-many-days-in-chengdu-itinerary.md";
import chongqingThreeDayMarkdown from "@/content/journal/articles/2026-08-12-3-day-chongqing-itinerary.md";
import zhangjiajieStayMarkdown from "@/content/journal/articles/2026-08-12-where-to-stay-in-zhangjiajie.md";

const bundledMarkdown: Record<string, string> = {
  "content/journal/articles/2026-08-06-china-240-hour-visa-free-transit-guide.md":
    visaTransitMarkdown,
  "content/journal/articles/2026-08-06-china-accommodation-registration-foreigners.md":
    accommodationMarkdown,
  "content/journal/articles/2026-08-06-china-high-speed-train-foreigners.md": trainMarkdown,
  "content/journal/articles/2026-08-06-china-mobile-payments-foreign-tourists.md": paymentsMarkdown,
  "content/journal/articles/2026-08-06-forbidden-city-tickets-foreigners.md": forbiddenCityMarkdown,
  "content/journal/articles/2026-08-07-chengdu-panda-base-tickets-foreigners.md": pandaBaseMarkdown,
  "content/journal/articles/2026-08-07-china-sim-card-esim-internet-foreign-tourists.md":
    simCardMarkdown,
  "content/journal/articles/2026-08-07-shanghai-pudong-hongqiao-airport-guide.md":
    shanghaiAirportMarkdown,
  "content/journal/articles/2026-08-08-bringing-prescription-medicine-to-china.md":
    medicineMarkdown,
  "content/journal/articles/2026-08-08-china-domestic-flight-power-bank-rules.md":
    powerBankMarkdown,
  "content/journal/articles/2026-08-08-china-golden-week-travel-2026.md": goldenWeekMarkdown,
  "content/journal/articles/2026-08-08-mutianyu-badaling-jinshanling-great-wall.md":
    greatWallMarkdown,
  "content/journal/articles/2026-08-08-terracotta-army-tickets-foreign-visitors.md":
    terracottaArmyMarkdown,
  "content/journal/articles/2026-08-08-china-prime-dmc-ttg-asia-matta-connect.md":
    mattaConnectMarkdown,
  "content/journal/articles/2026-08-10-private-china-tour-cost-2026.md":
    privateChinaTourCostMarkdown,
  "content/journal/articles/2026-08-10-10-day-china-itinerary-first-time-visitors.md":
    tenDayChinaItineraryMarkdown,
  "content/journal/articles/2026-08-10-private-china-tour-from-singapore.md":
    singaporePrivateChinaTourMarkdown,
  "content/journal/articles/2026-08-12-chengdu-chongqing-zhangjiajie-itinerary.md":
    chengduChongqingZhangjiajieMarkdown,
  "content/journal/articles/2026-08-12-how-many-days-in-chengdu-itinerary.md": chengduDaysMarkdown,
  "content/journal/articles/2026-08-12-3-day-chongqing-itinerary.md": chongqingThreeDayMarkdown,
  "content/journal/articles/2026-08-12-where-to-stay-in-zhangjiajie.md": zhangjiajieStayMarkdown,
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
  const draft = section(markdown, "## Draft", [
    "## Suggested structured data",
    "## Structured Data Recommendation",
    "## SEO & GEO Review",
  ]);
  const sources = section(markdown, "## Sources", "## Review Notes");
  const blocks = parseBlocks(draft);

  if (sources.trim()) {
    blocks.push({ type: "heading", id: "sources", title: "Sources and verification" });
    blocks.push(...parseBlocks(sources, false));
  }

  return blocks;
}

function section(markdown: string, start: string, end: string | string[]) {
  const startIndex = markdown.indexOf(start);
  if (startIndex === -1) return "";
  const contentStart = startIndex + start.length;
  const endIndex = [end]
    .flat()
    .map((heading) => markdown.indexOf(heading, contentStart))
    .filter((index) => index !== -1)
    .sort((a, b) => a - b)[0];
  return markdown.slice(contentStart, endIndex === -1 ? undefined : endIndex).trim();
}

function parseBlocks(markdown: string, parseFaq = true): JournalContentBlock[] {
  const blocks: JournalContentBlock[] = [];
  const lines = markdown.split("\n");
  let paragraph: string[] = [];
  let inFaq = false;
  let faqQuestion: string | null = null;
  let pendingImageIndex: number | null = null;

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

    const image = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (image) {
      flushParagraph();
      blocks.push({
        type: "image",
        image: {
          src: image[2],
          alt: image[1],
        },
      });
      pendingImageIndex = blocks.length - 1;
      continue;
    }

    const caption = line.match(/^([*_])([^*_].*)\1$/);
    if (pendingImageIndex !== null && caption) {
      const pendingImage = blocks[pendingImageIndex];
      if (pendingImage?.type === "image") {
        pendingImage.caption = cleanMarkdown(caption[2]);
      }
      pendingImageIndex = null;
      continue;
    }

    pendingImageIndex = null;

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
  return value.replace(/`(.*?)`/g, "$1");
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
