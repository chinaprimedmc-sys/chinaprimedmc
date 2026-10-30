/**
 * 本模块职责：2026-10 批次的 10 篇实用指南——决策、信任与规划类文章。
 * 输入：无运行时输入，内容为人工撰写。
 * 输出：JournalArticle 列表，由 published.ts 汇入公开目录。
 * 不负责：价格数字（以 catalog 与 /terms 为准，文中只引用其公开口径）、路由与结构化数据。
 * 关键规则：每条事实要么来自本站公开条款/行程数据，要么写明"常见做法"并给出来源；
 * 不对第三方做无法证实的断言；不承诺任何具体日期的供应商库存。
 */

import type {
  JournalArticle,
  JournalContentBlock as Block,
  JournalCitation,
} from "@/types/journal";

const author = {
  name: "AVIORA China Travel Team",
  role: "China travel specialists",
};

const PUBLISHED = "2026-10-29";

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const h = (title: string): Block => ({
  type: "heading",
  id: slugify(title),
  title,
  level: 2,
});
export const p = (body: string): Block => ({ type: "paragraph", body });
export const ul = (...items: string[]): Block => ({ type: "list", style: "unordered", items });
export const ol = (...items: string[]): Block => ({ type: "list", style: "ordered", items });
export const table = (headers: string[], ...rows: string[][]): Block => ({
  type: "table",
  headers,
  rows,
});
export const note = (title: string, body: string): Block => ({
  type: "callout",
  tone: "note",
  title,
  body,
});
export const warn = (title: string, body: string): Block => ({
  type: "callout",
  tone: "warning",
  title,
  body,
});
export const faq = (question: string, answer: string): Block => ({ type: "faq", question, answer });
export const cta = (
  title: string,
  description: string,
  href: string,
  label = "Plan my journey",
): Block => ({
  type: "cta",
  eyebrow: "Talk to a China specialist",
  title,
  description,
  primary: { label, href },
});

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectPosition?: string;
};
export const photos = {
  temple: {
    src: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-reflection.webp",
    alt: "The Temple of Heaven in Beijing reflected in still water at dawn",
    width: 1446,
    height: 1920,
  },
  shanghai: {
    src: "/tours/first-china-beautifully-paced/shanghai-huangpu-sunset.webp",
    alt: "Shanghai's skyline glowing at sunset above the Huangpu River",
    width: 1439,
    height: 1920,
  },
  yunnan: {
    src: "/tours/luxury-yunnan-private-tour/jade-dragon.jpg",
    alt: "Jade Dragon Snow Mountain rising above Lijiang in Yunnan",
    width: 1920,
    height: 864,
    objectPosition: "58% center",
  },
  forbiddenCity: {
    src: "/tours/beijing-unhurried/forbidden-city.webp",
    alt: "The Forbidden City in Beijing seen from above in autumn light",
    width: 1800,
    height: 2400,
  },
  tea: {
    src: "/tours/chengdu-pandas/detail-tea.webp",
    alt: "A gaiwan of green tea on a Chengdu teahouse table",
    width: 2000,
    height: 2667,
  },
  summerPalace: {
    src: "/tours/beijing-unhurried/summer-palace.webp",
    alt: "The Summer Palace above Kunming Lake in Beijing",
    width: 1441,
    height: 1920,
  },
  zhangjiajie: {
    src: "/tours/shanghai-zhangjiajie-floating-peaks/hero-floating-peaks.webp",
    alt: "Sandstone pillars rising through mist in Zhangjiajie",
    width: 1280,
    height: 1920,
  },
  jiuzhaigou: {
    src: "/tours/chengdu-pandas-jiuzhaigou/hero.webp",
    alt: "A turquoise lake framed by autumn forest in Jiuzhaigou",
    width: 1600,
    height: 1067,
  },
  chongqing: {
    src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chongqing-07.webp",
    alt: "Chongqing's riverfront towers lit at dusk",
    width: 1600,
    height: 1067,
  },
  greatWall: {
    src: "/tours/beijing-unhurried/great-wall-sunrise.webp",
    alt: "The Great Wall above a sea of cloud at sunrise",
    width: 1406,
    height: 2400,
  },
} satisfies Record<string, Photo>;

export type Spec = {
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  category: JournalArticle["category"];
  tags: string[];
  readingTime: string;
  hero: Photo;
  heroEyebrow: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  related: NonNullable<JournalArticle["related"]>;
  conversion: NonNullable<JournalArticle["conversion"]>;
  contentType: NonNullable<NonNullable<JournalArticle["editorial"]>["contentType"]>;
  decisionStage: NonNullable<NonNullable<JournalArticle["editorial"]>["decisionStage"]>;
  keyAnswer: string;
  appliesTo: string[];
  relatedJourneyReason: string;
  watchFor?: string;
  operatorRead?: string;
  changeWhen?: string;
  citations?: JournalCitation[];
  content: Block[];
};

export const build = (spec: Spec): JournalArticle => ({
  slug: spec.slug,
  title: spec.title,
  dek: spec.dek,
  excerpt: spec.excerpt,
  category: spec.category,
  tags: spec.tags,
  author,
  publishedAt: PUBLISHED,
  updatedAt: PUBLISHED,
  lastFactCheckedAt: PUBLISHED,
  readingTime: spec.readingTime,
  hero: { image: spec.hero, eyebrow: spec.heroEyebrow, mode: "image" },
  gallery: [],
  content: spec.content,
  seo: { title: spec.seoTitle, description: spec.seoDescription, keywords: spec.keywords },
  related: spec.related,
  citations: spec.citations,
  conversion: spec.conversion,
  editorial: {
    contentType: spec.contentType,
    decisionStage: spec.decisionStage,
    keyAnswer: spec.keyAnswer,
    appliesTo: spec.appliesTo,
    relatedJourneyReason: spec.relatedJourneyReason,
    watchFor: spec.watchFor,
    operatorRead: spec.operatorRead,
    changeWhen: spec.changeWhen,
  },
});

/** 本批文章在 practical-guides-more.ts 中。此文件只保留写作工具。 */
