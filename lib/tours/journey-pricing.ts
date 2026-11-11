/**
 * 本模块职责：把行程价格数据转换为统一、透明的卡片展示文本。
 * 输入：单条 JourneyCatalogItem。
 * 输出：格式化金额、计价单位、基础人数说明与完整无障碍文本。
 * 不负责：计算新价格、汇率换算、折扣或修改产品数据。
 * 关键规则：私人团总价不得转换成人均价；所有金额沿用 catalog 原值。
 */

import type { JourneyCatalogItem } from "@/content/tours/catalog";

export type JourneyPricePresentation = {
  amount: string;
  displayText: string;
  label: string;
  basis: string;
  accessibleText: string;
};

export function getJourneyPricePresentation(item: JourneyCatalogItem): JourneyPricePresentation {
  const amount = item.pricing.fromUsd
    ? `USD ${item.pricing.fromUsd.toLocaleString("en-US")}`
    : "Individually priced";
  const label = "From";
  const unit = item.pricing.pricingUnit === "per-person" ? " per person" : "";

  return {
    amount,
    displayText: item.pricing.fromUsd ? `${label} ${amount}` : amount,
    label,
    basis: item.pricing.cardBasis,
    accessibleText: item.pricing.fromUsd
      ? `${label} ${amount}${unit}. ${item.pricing.cardBasis}.`
      : `${amount}. ${item.pricing.cardBasis}.`,
  };
}

export function formatJourneyStartingPrice(amount: number) {
  return `From USD ${amount.toLocaleString("en-US")}`;
}

/** Server-rendered starting offer; requested group size does not change this stated basis. */
export function getJourneyStartingOffer(item: JourneyCatalogItem, url: string) {
  if (item.pricing.fromUsd === undefined) return undefined;
  return {
    price: item.pricing.fromUsd,
    priceCurrency: "USD",
    url,
    description: item.pricing.basis,
    unitText:
      item.pricing.pricingUnit === "per-person"
        ? "per person"
        : `per private group of ${item.pricing.basePartySize} guests`,
  };
}
