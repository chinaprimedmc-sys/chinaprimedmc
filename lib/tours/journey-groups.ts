/**
 * 本模块职责：定义 Journeys 页高意图筛选的判定规则。
 * 输入：标准化行程数据与筛选值。
 * 输出：行程类型、时长、区域、风格的匹配结果。
 * 不负责：界面状态、URL 同步、排序或产品内容修改。
 * 关键规则：筛选只影响显示，不改变 19 条线路的服务端输出与索引资格。
 */

import type { JourneyCatalogItem, JourneyExperienceId } from "@/content/tours/catalog";

export type JourneyTypeFilter = "all" | "single-city" | "multi-city" | "multi-day" | "day-tour";
export type JourneyDurationFilter =
  | "all"
  | "one-day"
  | "two-three"
  | "four-seven"
  | "eight-eleven"
  | "twelve-plus"
  | "1-7"
  | "8-12"
  | "13+";
export type JourneyRegionFilter = "all" | "north" | "east" | "southwest" | "south" | "northwest";
export type JourneyStyleFilter =
  | "all"
  | "first-trip"
  | "culture"
  | "nature"
  | "family"
  | "food"
  | "wellness"
  | "wildlife"
  | "business"
  | "photography"
  | "slow-travel";
export type JourneyScopeFilter = "all" | "single-city" | "multi-city";
export type JourneyCollectionFilter = "all" | "luxury";
export type JourneyExperienceFilter = "all" | JourneyExperienceId;

const regionKeywords: Record<Exclude<JourneyRegionFilter, "all">, string[]> = {
  north: ["beijing", "xi'an", "xian", "shanxi", "inner mongolia"],
  east: ["shanghai", "suzhou", "hangzhou", "jiangsu", "zhejiang"],
  southwest: [
    "chengdu",
    "sichuan",
    "chongqing",
    "jiuzhaigou",
    "zhangjiajie",
    "yunnan",
    "dali",
    "lijiang",
    "shangri-la",
    "guilin",
    "yangshuo",
  ],
  south: ["guangzhou", "shenzhen", "guangdong", "greater bay"],
  northwest: ["ningxia", "silk road", "desert"],
};

export function isDayTour(item: JourneyCatalogItem) {
  return item.recommendedDaysMax <= 1;
}

export function matchesJourneyType(item: JourneyCatalogItem, value: JourneyTypeFilter) {
  if (value === "all") return true;
  if (value === "day-tour") return isDayTour(item);
  if (value === "multi-day") return !isDayTour(item);
  return !isDayTour(item) && matchesJourneyScope(item, value);
}

export function matchesJourneyScope(item: JourneyCatalogItem, value: JourneyScopeFilter) {
  if (value === "all") return true;
  const destinationCount = new Set(
    item.destinationFilters.map((destination) => destination.toLowerCase()),
  ).size;
  return value === "single-city" ? destinationCount <= 1 : destinationCount > 1;
}

/** Luxury is an editorial collection, not a price threshold. */
export function matchesJourneyCollection(item: JourneyCatalogItem, value: JourneyCollectionFilter) {
  if (value === "all") return true;
  return (
    item.commercialRole === "signature" ||
    item.planningNeedFilters.includes("quiet-luxury") ||
    item.bestForFilters.some((entry) => entry.toLowerCase() === "luxury travelers")
  );
}

export function matchesJourneyExperience(item: JourneyCatalogItem, value: JourneyExperienceFilter) {
  return value === "all" || item.experienceFilters.includes(value);
}

export function matchesJourneyDuration(item: JourneyCatalogItem, value: JourneyDurationFilter) {
  if (value === "all") return true;
  if (value === "one-day") return isDayTour(item);
  if (value === "1-7") return item.recommendedDaysMin <= 7;
  if (value === "8-12") return item.recommendedDaysMin <= 12 && item.recommendedDaysMax >= 8;
  if (value === "13+") return item.recommendedDaysMax >= 13;
  if (value === "two-three") return item.recommendedDaysMax >= 2 && item.recommendedDaysMin <= 3;
  if (value === "four-seven") return item.recommendedDaysMax >= 4 && item.recommendedDaysMin <= 7;
  if (value === "eight-eleven") {
    return item.recommendedDaysMax >= 8 && item.recommendedDaysMin <= 11;
  }
  return item.recommendedDaysMax >= 12;
}

export function matchesJourneyRegion(item: JourneyCatalogItem, value: JourneyRegionFilter) {
  if (value === "all") return true;
  const searchable = [item.routeLabel, ...item.destinationFilters].join(" ").toLowerCase();
  return regionKeywords[value].some((keyword) => searchable.includes(keyword));
}

export function matchesJourneyStyle(item: JourneyCatalogItem, value: JourneyStyleFilter) {
  if (value === "all") return true;
  if (["wildlife", "business", "photography", "slow-travel"].includes(value))
    return item.discovery.focus.some((focus) => focus === value);
  if (value === "nature")
    return item.discovery.focus.some((focus) => ["nature", "wildlife"].includes(focus));
  if (value === "culture") return item.discovery.focus.includes("culture");
  if (value === "family") return item.discovery.focus.includes("family");
  if (value === "food") return item.discovery.focus.includes("food");
  if (value === "wellness") {
    return item.discovery.focus.some((focus) => ["wellness", "slow-travel"].includes(focus));
  }
  return item.discovery.focus.includes("first-trip");
}
