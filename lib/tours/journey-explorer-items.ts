/**
 * 本模块职责：把行程目录整理成 Journeys 页浏览器使用的轻量条目（仅在服务端运行）。
 * 输入：journeyCatalog、层级映射、标签数据、卡片文案与精选照片。
 * 输出：可序列化的 ExplorerItem 数组，按层级、再按天数排序。
 * 不负责：筛选与搜索（见 journey-explorer.ts、journey-search.ts）与界面。
 * 关键规则：不把整份目录送到浏览器，只送卡片与搜索需要的字段；价格只输出已核实的起价文案，其余为“按日期和人数报价”。
 */

import { journeyCatalogByPriority } from "@/content/tours/catalog";
import type { ExplorerItem } from "@/lib/tours/journey-explorer";
import { buildExplorerItem } from "./journey-explorer-item";

export { buildExplorerItem, shortDuration } from "./journey-explorer-item";

export function buildExplorerItems(): ExplorerItem[] {
  return journeyCatalogByPriority.map(buildExplorerItem);
}
