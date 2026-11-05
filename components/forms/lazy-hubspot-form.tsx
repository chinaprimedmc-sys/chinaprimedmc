"use client";

/**
 * 本模块职责：只在表单接近视口时才加载 HubSpot 表单（及其脚本）。
 * 输入：可选的“进入视口”回调与提前量。
 * 输出：占位容器，进入视口后换成 HubSpotForm。
 * 不负责：表单字段与提交（由 HubSpot 处理）。
 * 关键规则：页面首屏不加载 HubSpot 脚本，避免拖慢 Core Web Vitals；
 * 没有 IntersectionObserver 的浏览器在挂载后立即加载。
 */

import { useEffect, useRef, useState } from "react";

import { HubSpotForm } from "./hubspot-form";

export function LazyHubSpotForm({
  onVisible,
  rootMargin = "600px 0px",
}: {
  onVisible?: () => void;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reveal = () => {
      setShow(true);
      onVisible?.();
    };
    if (typeof IntersectionObserver === "undefined") {
      const timer = window.setTimeout(reveal, 0);
      return () => window.clearTimeout(timer);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        reveal();
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
    // onVisible 只在首次进入视口时调用一次，不需要作为依赖重新订阅。
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rootMargin]);

  return (
    <div ref={ref} style={{ minHeight: 320 }}>
      {show ? (
        <HubSpotForm />
      ) : (
        <p aria-live="polite" style={{ opacity: 0.6 }}>
          Loading form…
        </p>
      )}
    </div>
  );
}
