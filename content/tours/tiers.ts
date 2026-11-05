/**
 * 本模块职责：为每个公开行程指定所属的产品层级，是三层产品体系的唯一来源。
 * 输入：无运行时输入。
 * 输出：层级映射，以及按层级派生的 slug 列表（供服务页与导航使用）。
 * 不负责：价格、标签筛选或页面文案。
 * 关键规则：层级是产品的分类，不是客户人群或主题；家庭、情侣、文化等属于标签，不要在此新增层级。
 */

import type { publicJourneySlugs } from "@/content/tours/catalog";

export type JourneyTier = "day" | "signature" | "tailor-made-example";

type PublicSlug = (typeof publicJourneySlugs)[number];

export const journeyTiers: Record<PublicSlug, JourneyTier> = {
  // Day Experiences
  "private-mutianyu-great-wall-day-tour": "day",
  "private-xian-terracotta-warriors-day-tour": "day",
  "private-shanghai-day-tour-guide-driver": "day",
  "private-chengdu-panda-day-tour-early-morning": "day",
  "guilin-yangshuo-li-river-cruise-private-day-tour": "day",

  // Signature Journeys：定义清晰的多日路线，可按日期、人数和兴趣调整。
  "beijing-great-wall-private-5-day-tour": "signature",
  "chengdu-pandas-sichuan-table": "signature",
  "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour": "signature",
  "chengdu-pandas-jiuzhaigou-private-7-day-tour": "signature",
  "shanghai-zhangjiajie-floating-peaks": "signature",
  "beijing-xian-shanghai-private-9-day-tour": "signature",
  "luxury-yunnan-private-tour": "signature",
  "chengdu-chongqing-zhangjiajie-private-11-day-tour": "signature",
  "beijing-xian-chengdu-shanghai-private-11-day-tour": "signature",
  "china-at-an-easier-pace-12-day-private-tour": "signature",
  "china-family-tour-with-pandas-12-day-private-tour": "signature",

  // 定制范例：本身依赖日期和供应情况，作为 Tailor-Made 页的参考起点展示。
  "muslim-friendly-china-tour-great-wall-desert-stars": "tailor-made-example",
  "qingcheng-mountain-private-wellness-retreat-10-day": "tailor-made-example",
  "guangzhou-shenzhen-tailor-made-business-tour-4-day": "tailor-made-example",
};

const slugsFor = (tier: JourneyTier) =>
  (Object.keys(journeyTiers) as PublicSlug[]).filter((slug) => journeyTiers[slug] === tier);

/** 列表顺序即上面的声明顺序：一日体验按城市，Signature 按天数由短到长。 */
export const dayExperienceSlugs = slugsFor("day");
export const signatureJourneySlugs = slugsFor("signature");
export const tailorMadeExampleSlugs = slugsFor("tailor-made-example");
