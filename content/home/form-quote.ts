/**
 * 本模块职责：咨询表单旁边展示的一句评价摘录。
 * 输入：无。
 * 输出：一个很小的静态对象。
 * 不负责：评价数据本身（content/home/traveler-reviews.ts）。
 * 关键规则：必须保持很小——它被客户端组件引用，不能把整份评价文件带进浏览器；
 * 句子必须逐字出现在真实评价里，由 tests/review-board.test.mjs 校验；不对应具体行程，所以只写署名与地点。
 */

export const formQuote = {
  text: "We never had to figure out local transfers, negotiate taxis, work out the best time to leave or wonder what was happening next.",
  author: "Michael Thompson",
  location: "Boston, USA",
} as const;

/** 咨询表单里的评分行：必须与真实评价的统计一致，由测试校验。 */
export const formStats = { average: "4.9" } as const;
