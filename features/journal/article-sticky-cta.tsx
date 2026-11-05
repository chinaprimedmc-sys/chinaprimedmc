"use client";

/**
 * 本模块职责：文章页手机端底部的轻量转化条，读过约 30% 后出现，直达旗舰 10 天行程。
 * 输入：无（行程链接与起价与 /tours 页保持一致）。
 * 输出：固定在底部的一条链接，读到文末前（约 92%）自动收起，避免和文末的转化区重复。
 * 不负责：文章内的行程推荐卡片（见 journey-bridge.tsx）。
 * 关键规则：只在手机宽度显示；只用 opacity/translate 动画；读者可以关闭，关闭后本页不再出现。
 */

import { X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { trackEvent } from "@/lib/analytics/events";

import styles from "./article-template.module.css";

const SHOW_AT = 0.3;
const HIDE_AT = 0.92;
const tourHref = "/tours/beijing-xian-shanghai-private-10-day-tour";

export function ArticleStickyCta({ articleSlug }: { articleSlug: string }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const article = document.getElementById("article");
    if (!article) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = article.getBoundingClientRect();
      const total = Math.max(article.offsetHeight - window.innerHeight, 1);
      const read = Math.min(Math.max(-rect.top / total, 0), 1.2);
      setVisible(read >= SHOW_AT && read < HIDE_AT);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const shown = visible && !dismissed;

  return (
    <aside
      className={styles.stickyCta}
      data-visible={shown ? "true" : undefined}
      aria-hidden={shown ? undefined : "true"}
      aria-label="Plan your journey"
    >
      <Link
        href={tourHref}
        tabIndex={shown ? undefined : -1}
        onClick={() => trackEvent("journal_sticky_cta_click", { article: articleSlug })}
      >
        <span>
          <small>Private tour · From US$3,800</small>
          <strong>10-Day Slow-Paced Golden Triangle</strong>
        </span>
        <b>View tour</b>
      </Link>
      <button
        type="button"
        aria-label="Dismiss"
        tabIndex={shown ? undefined : -1}
        onClick={() => setDismissed(true)}
      >
        <X size={18} aria-hidden="true" />
      </button>
    </aside>
  );
}
