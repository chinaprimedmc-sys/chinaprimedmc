"use client";

/**
 * 本模块职责：行程卡片——Journeys 页与三个层级页（Day / Signature / Tailor-Made）共用的唯一卡片。
 * 输入：整理好的行程条目、可选的搜索词（用于高亮）和位置（用于埋点）。
 * 输出：整张可点击的卡片：图片、时长、层级与城市、标题、一句话、最多 3 个标签。
 * 不负责：价格（未核实前不显示）、筛选或网格布局。
 * 关键规则：整张卡片只有一个链接目标；标签最多 3 个，属性标签（Easier pace / Muslim-friendly）优先。
 */

import Image from "next/image";
import Link from "next/link";

import { trackEvent } from "@/lib/analytics/events";
import type { ExplorerItem } from "@/lib/tours/journey-explorer";
import { highlightParts } from "@/lib/tours/journey-search";

import styles from "./journey-tile.module.css";

export function JourneyTile({
  item,
  query = "",
  position = 0,
}: {
  item: ExplorerItem;
  query?: string;
  position?: number;
}) {
  const attributes = [
    item.easierPace ? "Easier pace" : "",
    item.muslimFriendly ? "Muslim-friendly" : "",
  ].filter(Boolean);
  const chips = [...attributes, item.who[0], item.interest[0], item.interest[1], item.who[1]]
    .filter(Boolean)
    .slice(0, 3) as string[];
  return (
    <Link
      className={styles.card}
      href={item.href}
      data-journey-slug={item.slug}
      onClick={() =>
        trackEvent("tours_card_click", {
          journey: item.slug,
          position: position + 1,
          tier: item.tier,
        })
      }
    >
      <div className={styles.cardMedia}>
        {item.image ? (
          <Image
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(max-width: 699px) calc(100vw - 40px), (max-width: 1023px) 50vw, 380px"
            style={{ objectPosition: item.image.position ?? "center" }}
          />
        ) : (
          <span className={styles.cardSoon}>Photography to follow</span>
        )}
        <span className={styles.chip}>{item.duration}</span>
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardEyebrow}>
          {item.tierLabel} · {item.destinations}
        </p>
        <h3>
          <HighlightText text={item.title} query={query} />
        </h3>
        <p className={styles.cardLine}>{item.summary}</p>
        <div className={styles.chips}>
          {chips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
        <span className={styles.cardGo}>
          View journey <i aria-hidden="true">→</i>
        </span>
      </div>
    </Link>
  );
}

function HighlightText({ text, query }: { text: string; query: string }) {
  return (
    <>
      {highlightParts(text, query).map((part, i) =>
        part.match ? (
          <mark key={i} className={styles.mark}>
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  );
}
