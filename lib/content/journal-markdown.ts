import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import { toJournalDisplayTitleCase } from "@/content/journal/editorial-upgrades";
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
import olderTravelersItineraryMarkdown from "@/content/journal/articles/2026-08-18-china-itinerary-older-travelers-12-days.md";
import beijingXianShanghaiDaysMarkdown from "@/content/journal/articles/2026-08-19-how-many-days-beijing-xian-shanghai.md";
import chinaTourWalkingMarkdown from "@/content/journal/articles/2026-08-19-how-much-walking-china-tour.md";
import firstTripPlanningMarkdown from "@/content/journal/articles/2026-08-19-first-trip-to-china-planning-guide.md";
import seniorToursMarkdown from "@/content/journal/articles/2026-08-20-china-tours-for-seniors.md";
import firstTripDestinationsMarkdown from "@/content/journal/articles/2026-08-20-best-places-to-visit-china-first-time.md";
import olderParentsMarkdown from "@/content/journal/articles/2026-08-20-china-trip-with-older-parents.md";
import limitedMobilityMarkdown from "@/content/journal/articles/2026-08-20-china-tours-seniors-limited-mobility.md";
import chinaTripCostMarkdown from "@/content/journal/articles/2026-08-20-how-much-does-a-trip-to-china-cost.md";
import privateVsSelfGuidedMarkdown from "@/content/journal/articles/2026-08-20-private-china-tour-vs-self-guided.md";
import chinaToursUsaMarkdown from "@/content/journal/articles/2026-08-20-china-tours-from-usa.md";
import luxuryChinaTourMarkdown from "@/content/journal/articles/2026-08-20-luxury-china-tour-planning-guide.md";
import beijingShanghaiMarkdown from "@/content/journal/articles/2026-08-20-beijing-or-shanghai-first-time.md";
import twoWeekChinaMarkdown from "@/content/journal/articles/2026-08-20-two-week-china-itinerary-first-time.md";
import beijingFourDayMarkdown from "@/content/journal/articles/2026-08-21-beijing-itinerary-4-days.md";
import chinaAppsMarkdown from "@/content/journal/articles/2026-08-21-best-apps-for-china-travel-2026.md";
import chinaPackingMarkdown from "@/content/journal/articles/2026-08-21-china-packing-list-2026.md";
import usChinaVisaMarkdown from "@/content/journal/articles/2026-08-21-china-visa-requirements-us-citizens-2026.md";
import guilinYangshuoMarkdown from "@/content/journal/articles/2026-08-21-guilin-yangshuo-itinerary-5-days.md";
import shanghaiFourDayMarkdown from "@/content/journal/articles/2026-08-21-shanghai-itinerary-4-days.md";
import beijingStayMarkdown from "@/content/journal/articles/2026-08-21-where-to-stay-in-beijing-first-time.md";
import shanghaiStayMarkdown from "@/content/journal/articles/2026-08-21-where-to-stay-in-shanghai-first-time.md";
import xianThreeDayMarkdown from "@/content/journal/articles/2026-08-21-xian-itinerary-3-days.md";
import yunnanTenDayMarkdown from "@/content/journal/articles/2026-08-21-yunnan-itinerary-10-days.md";
import type { JournalArticle, JournalContentBlock } from "@/types/journal";

const fullFrameImageMetadata: Record<string, { width: number; height: number; fit: "contain" }> = {
  "/journal/2026-08-06/china-high-speed-train-boarding.webp": {
    width: 2400,
    height: 3200,
    fit: "contain",
  },
  "/tours/first-china-beautifully-paced/xian-terracotta-army-group.webp": {
    width: 1920,
    height: 1440,
    fit: "contain",
  },
  "/tours/first-china-beautifully-paced/shanghai-waterfront-group.webp": {
    width: 1920,
    height: 1440,
    fit: "contain",
  },
  "/journal/2026-08-19/temple-of-heaven-travelers-full.webp": {
    width: 1200,
    height: 1600,
    fit: "contain",
  },
  "/journal/2026-08-19/forbidden-city-walking-surfaces-full.webp": {
    width: 768,
    height: 1024,
    fit: "contain",
  },
  "/journal/2026-08-19/mutianyu-chairlift-access-full.webp": {
    width: 1067,
    height: 1600,
    fit: "contain",
  },
  "/journal/2026-08-19/terracotta-army-viewing-platform-full.webp": {
    width: 1200,
    height: 1600,
    fit: "contain",
  },
  "/journal/2026-08-19/shanghai-yu-garden-easier-pace-full.webp": {
    width: 1600,
    height: 1200,
    fit: "contain",
  },
  "/journal/2026-08-19/older-travelers-chinese-cultural-experience-full.webp": {
    width: 1200,
    height: 1600,
    fit: "contain",
  },
  "/home/editorial/travel-trade-team-singapore.webp": {
    width: 1080,
    height: 810,
    fit: "contain",
  },
};

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
  "content/journal/articles/2026-08-18-china-itinerary-older-travelers-12-days.md":
    olderTravelersItineraryMarkdown,
  "content/journal/articles/2026-08-19-how-many-days-beijing-xian-shanghai.md":
    beijingXianShanghaiDaysMarkdown,
  "content/journal/articles/2026-08-19-how-much-walking-china-tour.md": chinaTourWalkingMarkdown,
  "content/journal/articles/2026-08-19-first-trip-to-china-planning-guide.md":
    firstTripPlanningMarkdown,
  "content/journal/articles/2026-08-20-china-tours-for-seniors.md": seniorToursMarkdown,
  "content/journal/articles/2026-08-20-best-places-to-visit-china-first-time.md":
    firstTripDestinationsMarkdown,
  "content/journal/articles/2026-08-20-china-trip-with-older-parents.md": olderParentsMarkdown,
  "content/journal/articles/2026-08-20-china-tours-seniors-limited-mobility.md":
    limitedMobilityMarkdown,
  "content/journal/articles/2026-08-20-how-much-does-a-trip-to-china-cost.md":
    chinaTripCostMarkdown,
  "content/journal/articles/2026-08-20-private-china-tour-vs-self-guided.md":
    privateVsSelfGuidedMarkdown,
  "content/journal/articles/2026-08-20-china-tours-from-usa.md": chinaToursUsaMarkdown,
  "content/journal/articles/2026-08-20-luxury-china-tour-planning-guide.md":
    luxuryChinaTourMarkdown,
  "content/journal/articles/2026-08-20-beijing-or-shanghai-first-time.md": beijingShanghaiMarkdown,
  "content/journal/articles/2026-08-20-two-week-china-itinerary-first-time.md":
    twoWeekChinaMarkdown,
  "content/journal/articles/2026-08-21-beijing-itinerary-4-days.md": beijingFourDayMarkdown,
  "content/journal/articles/2026-08-21-best-apps-for-china-travel-2026.md": chinaAppsMarkdown,
  "content/journal/articles/2026-08-21-china-packing-list-2026.md": chinaPackingMarkdown,
  "content/journal/articles/2026-08-21-china-visa-requirements-us-citizens-2026.md":
    usChinaVisaMarkdown,
  "content/journal/articles/2026-08-21-guilin-yangshuo-itinerary-5-days.md": guilinYangshuoMarkdown,
  "content/journal/articles/2026-08-21-shanghai-itinerary-4-days.md": shanghaiFourDayMarkdown,
  "content/journal/articles/2026-08-21-where-to-stay-in-beijing-first-time.md": beijingStayMarkdown,
  "content/journal/articles/2026-08-21-where-to-stay-in-shanghai-first-time.md":
    shanghaiStayMarkdown,
  "content/journal/articles/2026-08-21-xian-itinerary-3-days.md": xianThreeDayMarkdown,
  "content/journal/articles/2026-08-21-yunnan-itinerary-10-days.md": yunnanTenDayMarkdown,
};

export async function hydrateJournalArticle(article: JournalArticle): Promise<JournalArticle> {
  if (!article.sourcePath) {
    return {
      ...article,
      content: polishJournalContent(article.content),
    };
  }

  const markdown =
    bundledMarkdown[article.sourcePath] ??
    (await readFile(path.join(process.cwd(), article.sourcePath), "utf8"));

  const parsed = parseJournalMarkdown(markdown);

  return {
    ...article,
    content: polishJournalContent(parsed.content),
    citations: article.citations?.length ? article.citations : parsed.citations,
  };
}

function polishJournalContent(content: JournalContentBlock[]) {
  let emphasizeNextParagraph = false;

  return content.map<JournalContentBlock>((block) => {
    if (block.type === "heading") {
      emphasizeNextParagraph = block.level !== 3;
      return {
        ...block,
        title:
          block.title === "A Fuller Season, Not a Smaller One"
            ? block.title
            : toJournalDisplayTitleCase(block.title),
      };
    }

    if (block.type === "paragraph" && emphasizeNextParagraph) {
      emphasizeNextParagraph = false;
      return { ...block, body: emphasizeOpeningSentence(block.body) };
    }

    if (block.type !== "image") emphasizeNextParagraph = false;

    if (block.type === "callout" && block.title) {
      return { ...block, title: toJournalDisplayTitleCase(block.title) };
    }

    if (block.type === "cta") {
      return { ...block, title: toJournalDisplayTitleCase(block.title) };
    }

    return block;
  });
}

function emphasizeOpeningSentence(body: string) {
  if (body.includes("**")) return body;

  const sentence = body.match(/^(.+?[.!?])(?:\s|$)/)?.[1];
  if (!sentence || sentence.length < 35 || sentence.length > 240 || sentence.includes("[")) {
    return body;
  }

  return `**${sentence}**${body.slice(sentence.length)}`;
}

function parseJournalMarkdown(markdown: string) {
  const draft = section(markdown, "## Draft", [
    "## Suggested structured data",
    "## Structured Data Recommendation",
    "## SEO & GEO Review",
    "## Sources",
    "## Review Notes",
  ]);
  const sources = section(markdown, "## Sources", "## Review Notes");
  return {
    content: parseBlocks(draft),
    citations: parseSourceCitations(sources),
  };
}

function parseSourceCitations(markdown: string) {
  return markdown
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .flatMap((line) => {
      const url = line.match(/https?:\/\/[^\s—–)]+/)?.[0]?.replace(/[.,;:]$/, "");
      if (!url || /aviora\.example/i.test(url)) return [];

      const rawName = line
        .slice(0, line.indexOf(url))
        .replace(/^[-*]\s+|^\d+\.\s+/, "")
        .replace(/\*\*/g, "")
        .replace(/[,:;—–\s]+$/, "")
        .trim();
      const publishedAt = extractPublishedDate(line);

      return [
        {
          name: rawName || readableSourceName(url),
          url,
          publisher: sourcePublisher(url),
          ...(publishedAt ? { publishedAt } : {}),
        },
      ];
    });
}

function extractPublishedDate(value: string) {
  const match = value.match(/published\s+([^;—–]+?)(?:[;—–]|$)/i);
  if (!match) return undefined;
  const parsed = new Date(match[1].trim());
  return Number.isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10);
}

function readableSourceName(value: string) {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return "Official source";
  }
}

function sourcePublisher(value: string) {
  const host = readableSourceName(value);
  const knownPublishers: Array<[RegExp, string]> = [
    [/12306\.cn/, "China State Railway Group"],
    [/whc\.unesco\.org/, "UNESCO World Heritage Centre"],
    [/panda\.org\.cn/, "Chengdu Research Base of Giant Panda Breeding"],
    [/caac\.gov\.cn/, "Civil Aviation Administration of China"],
    [/iata\.org/, "International Air Transport Association"],
    [/ttgasia\.com/, "TTG Asia"],
    [/shairport\.com/, "Shanghai Airport Authority"],
    [/bmy\.com\.cn/, "Qin Shi Huang Mausoleum Museum"],
    [
      /gov\.cn|nia\.gov\.cn|beijing\.gov\.cn|shanghai\.gov\.cn|cq\.gov\.cn/,
      "Official government source",
    ],
  ];
  return knownPublishers.find(([pattern]) => pattern.test(host))?.[1] ?? host;
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
  let listStyle: "ordered" | "unordered" | null = null;
  let listItems: string[] = [];
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

  const flushList = () => {
    if (!listStyle || !listItems.length) return;
    blocks.push({ type: "list", style: listStyle, items: listItems });
    listStyle = null;
    listItems = [];
  };

  const flushText = () => {
    flushParagraph();
    flushList();
  };

  for (let index = 0; index < lines.length; index += 1) {
    const rawLine = lines[index];
    const line = rawLine.trim();

    if (!line) {
      flushText();
      continue;
    }

    const nextLine = lines[index + 1]?.trim() ?? "";
    if (line.includes("|") && /^\|?\s*:?-{3,}/.test(nextLine)) {
      flushText();
      const headers = parseTableRow(line);
      const rows: string[][] = [];
      index += 2;
      while (index < lines.length && lines[index].trim().includes("|")) {
        rows.push(parseTableRow(lines[index].trim()));
        index += 1;
      }
      index -= 1;
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\(([^)\s]+)\)$/);
    if (image) {
      flushText();
      blocks.push({
        type: "image",
        image: {
          src: image[2],
          alt: image[1],
          ...fullFrameImageMetadata[image[2]],
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
      flushText();
      inFaq = true;
      continue;
    }

    if (line.startsWith("## ")) {
      flushText();
      inFaq = false;
      const title = cleanMarkdown(line.slice(3));
      blocks.push({ type: "heading", id: slugify(title), title, level: 2 });
      continue;
    }

    if (line.startsWith("### ")) {
      flushText();
      const title = cleanMarkdown(line.slice(4));
      if (inFaq) {
        faqQuestion = title;
      } else {
        blocks.push({ type: "heading", id: slugify(title), title, level: 3 });
      }
      continue;
    }

    const unorderedItem = line.match(/^[-*]\s+(.+)/);
    if (unorderedItem) {
      flushParagraph();
      if (listStyle && listStyle !== "unordered") flushList();
      listStyle = "unordered";
      listItems.push(cleanMarkdown(unorderedItem[1]));
      continue;
    }

    const orderedItem = line.match(/^\d+\.\s+(.+)/);
    if (orderedItem) {
      flushParagraph();
      if (listStyle && listStyle !== "ordered") flushList();
      listStyle = "ordered";
      listItems.push(cleanMarkdown(orderedItem[1]));
      continue;
    }

    if (line.startsWith("> ")) {
      flushText();
      const body = cleanMarkdown(line.slice(2));
      const testimonial = body.match(/^[“"](.+?)[”"]\s+[—-]\s+(.+)$/);
      if (testimonial) {
        blocks.push({
          type: "quote",
          quote: testimonial[1],
          attribution: testimonial[2],
        });
        continue;
      }
      blocks.push({
        type: "callout",
        tone: /warning|important|do not|must/i.test(body) ? "warning" : "note",
        body,
      });
      continue;
    }

    flushList();
    paragraph.push(line);
  }

  flushText();
  return blocks;
}

function parseTableRow(value: string) {
  return value
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cleanMarkdown(cell.trim()));
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
