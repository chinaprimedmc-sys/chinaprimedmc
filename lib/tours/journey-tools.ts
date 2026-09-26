/**
 * 本模块职责：定义 Journeys 导航工具与目录面板之间的浏览器事件契约。
 * 输入：无。
 * 输出：搜索与筛选面板的稳定事件名。
 * 不负责：事件监听、导航样式或筛选业务逻辑。
 */

export const JOURNEY_SEARCH_EVENT = "aviora:journeys:open-search";
export const JOURNEY_FILTER_EVENT = "aviora:journeys:open-filter";
