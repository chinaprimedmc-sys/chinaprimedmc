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
  label: string;
  basis: string;
  accessibleText: string;
};

export function getJourneyPricePresentation(item: JourneyCatalogItem): JourneyPricePresentation {
  const amount = `US$${item.pricing.fromUsd.toLocaleString("en-US")}`;
  const label = item.pricing.pricingUnit === "private-group" ? "Private group from" : "From";
  const unit = item.pricing.pricingUnit === "per-person" ? " per person" : "";

  return {
    amount,
    label,
    basis: item.pricing.cardBasis,
    accessibleText: `${label} ${amount}${unit}. ${item.pricing.cardBasis}.`,
  };
}
