/**
 * 本模块职责：把一段长文本截成读起来完整的摘录。
 * 输入：原文与最大长度。输出：在句末截断的文本，找不到合适句末时加省略号。
 * 不负责：多段落处理或 HTML 清洗。
 */
export function excerpt(text: string, max = 250) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const end = cut.lastIndexOf(". ");
  return end > 90 ? cut.slice(0, end + 1) : `${cut.trimEnd()}…`;
}
