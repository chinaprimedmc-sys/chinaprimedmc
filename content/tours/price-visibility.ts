/**
 * 本模块职责：决定每个行程的价格以何种方式对访客展示。
 * 输入：行程 slug 与 catalog 中的原始价格数据。
 * 输出：可直接渲染的 JourneyPricing（含 status）。
 * 不负责：核实成本、计算折扣或在页面上排版价格。
 * 关键规则：只有 slug 被加入 verifiedPriceSlugs，才会公开数字价格；
 * 其余产品一律使用"按需求个性化报价"文案，原始数字保留在 catalog 以便日后核实后启用。
 */

import type { JourneyPricing } from "@/content/tours/catalog";

export type PriceStatus = "verified-from" | "indicative" | "quote-only";

/**
 * 价格已核实、可以公开 From 价格的行程。
 * 加入 slug 之前，必须确认：成本来源可靠、适用条件明确（人数、季节、住宿标准、含服务范围）。
 * 目前没有任何行程被核实，因此全部为空。
 */
export const verifiedPriceSlugs: ReadonlySet<string> = new Set<string>([]);

const individuallyPriced = {
  cardBasis: "Priced for your dates and group",
  basis:
    "Every AVIORA journey is priced individually. Your written proposal reflects your travel dates, number of travellers, hotel standard, pace and the services you choose.",
  finalPriceNote:
    "Your price depends on the season and dates, how many people travel, hotel category, domestic transport and any optional experiences you add. Private guiding and vehicles are shared across your group, so larger parties usually pay less per person.",
} as const;

/** 价格文案里出现金额（US$ 或 $数字）就视为数字价格。 */
const hasAmount = (text: string | undefined) => !!text && /US\$|\$\s?\d/.test(text);

export function resolveJourneyPricing(
  slug: string,
  pricing: Omit<JourneyPricing, "status">,
): JourneyPricing {
  if (verifiedPriceSlugs.has(slug) && pricing.fromUsd !== undefined) {
    return { ...pricing, status: "verified-from" };
  }

  // 本来就没有公开起价的行程（书面报价）保留原文案。
  if (pricing.fromUsd === undefined) {
    return { ...pricing, status: "quote-only" };
  }

  return {
    ...pricing,
    fromUsd: undefined,
    ...individuallyPriced,
    additionalNote: hasAmount(pricing.additionalNote) ? undefined : pricing.additionalNote,
    status: "indicative",
  };
}
