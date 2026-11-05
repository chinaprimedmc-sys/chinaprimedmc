"use client";

/**
 * 本模块职责：全站统一的滚动进场与页面切换动效的控制器。
 * 输入：当前路由；用户的“减少动效”、省流量、低内存偏好。
 * 输出：在 <html> 上设置 data-motion（full / reduced）；给首屏以下的元素加 data-reveal，进入视口时淡入上移。
 * 不负责：具体的动画样式（styles/motion.css）；首屏入场（各页面用 .motion-rise / .motion-settle）。
 * 关键规则：
 *  - 内容永远在服务端 HTML 里且默认可见；只有 JS 运行后，才把“首屏以下”的元素隐藏，所以首屏永远不会闪，无 JS 时一切可见。
 *  - 用户要求减少动效、开启省流量或设备内存 ≤ 2GB 时完全不做进场动画（data-motion="reduced"）。
 *  - 任何异常都退回 data-motion="reduced"，避免出现“元素永远隐藏”。
 *  - 只动 opacity / translate，不引起布局变化（CLS 为 0）。
 */

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = [
  "h2",
  "h3",
  "figure",
  "blockquote",
  "details",
  "aside",
  "article",
  "[data-journey-slug]",
  "section > p",
  "ol > li",
  "dl > div",
].join(",");

/** 这些祖先里的元素不做进场：固定导航、弹窗、联想面板、页脚，以及明确声明不要的区域。 */
const EXCLUDE =
  "header, nav, footer, dialog, [role='dialog'], [role='listbox'], [aria-hidden='true'], [hidden], [data-no-reveal]";

type NavigatorWithHints = Navigator & {
  connection?: { saveData?: boolean };
  deviceMemory?: number;
};

function motionAllowed() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const nav = navigator as NavigatorWithHints;
  if (nav.connection?.saveData) return false;
  if (typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2) return false;
  return typeof IntersectionObserver !== "undefined";
}

function isFloating(element: Element) {
  for (
    let node: Element | null = element;
    node && node !== document.body;
    node = node.parentElement
  ) {
    const position = getComputedStyle(node).position;
    if (position === "fixed" || position === "sticky") return true;
  }
  return false;
}

/** 横向滑动区（手机上的卡片轮播）里的元素不参与进场：照片先在、标题后出现会很怪。 */
function inHorizontalScroller(element: Element) {
  for (
    let node = element.parentElement;
    node && node !== document.body;
    node = node.parentElement
  ) {
    const overflowX = getComputedStyle(node).overflowX;
    if ((overflowX === "auto" || overflowX === "scroll") && node.scrollWidth > node.clientWidth + 2)
      return true;
  }
  return false;
}

export function MotionController() {
  const pathname = usePathname();

  // 站内跳转的第一次点击之前不播放页面淡入，避免拖慢首次加载（LCP）。
  useEffect(() => {
    const flag = () => {
      document.documentElement.dataset.softNav = "1";
    };
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.(
        "a[href]",
      ) as HTMLAnchorElement | null;
      if (!link || link.target === "_blank") return;
      if (link.origin !== window.location.origin) return;
      if (link.pathname === window.location.pathname) return;
      flag();
    };
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", flag);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", flag);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (!motionAllowed()) {
      root.dataset.motion = "reduced";
      return;
    }

    let observer: IntersectionObserver | null = null;
    const timers: number[] = [];

    try {
      root.dataset.motion = "full";
      const io = new IntersectionObserver(
        (entries) => {
          let index = 0;
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const element = entry.target as HTMLElement;
            const small = window.innerWidth < 700;
            element.style.setProperty(
              "--reveal-delay",
              `${Math.min(index, small ? 3 : 5) * (small ? 70 : 90)}ms`,
            );
            element.dataset.reveal = "in";
            io.unobserve(element);
            index++;
          }
        },
        { rootMargin: "0px 0px -7% 0px", threshold: 0.06 },
      );
      observer = io;

      const scan = () => {
        const foldline = window.innerHeight * 0.94;
        document.querySelectorAll<HTMLElement>(SELECTOR).forEach((element) => {
          if (element.dataset.reveal || element.closest(EXCLUDE)) return;
          if (element.parentElement?.closest("[data-reveal]")) return; // 祖先已经在进场，子元素跟着走
          const rect = element.getBoundingClientRect();
          // 首屏及以上的内容永远不隐藏：不闪、不延迟 LCP。
          if (rect.height === 0 || rect.top < foldline) return;
          if (isFloating(element) || inHorizontalScroller(element)) return;
          element.dataset.reveal = "pending";
          io.observe(element);
        });
      };

      scan();
      // 客户端组件水合后可能才出现的内容，补扫两次（幂等）。
      timers.push(window.setTimeout(scan, 350), window.setTimeout(scan, 1400));
    } catch {
      root.dataset.motion = "reduced";
    }

    return () => {
      observer?.disconnect();
      timers.forEach((id) => window.clearTimeout(id));
      // 路由切换时旧页面的元素会被卸载；残留标记没有影响。
    };
  }, [pathname]);

  return null;
}
