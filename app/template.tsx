import type { ReactNode } from "react";

/**
 * 每次路由切换都会重新挂载（Next 的 template 语义），所以 .page-enter 的淡入会在站内跳转时播放。
 * 只有 opacity：不使用 transform，否则会让固定定位的页头和粘性控制栏失效。
 * 首次加载不播放（见 styles/motion.css 里的 html[data-soft-nav]）。
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
