"use client";

/**
 * 本模块职责：行程卡片——Journeys 页与三个层级页（Day / Signature / Tailor-Made）共用的唯一卡片。
 * 输入：整理好的行程条目、可选的搜索词（用于高亮）和位置（用于埋点）。
 * 输出：单链接的编辑式卡片：竖图、路线与时长、标题、一个差异点、适用性和透明报价依据。
 * 不负责：价格计算（只显示已批准公开的起价）、筛选或网格布局。
 * 关键规则：整张卡片只有一个链接目标；关键信息不依赖悬停，也不叠在照片上。
 */

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "@/components/icons/symbols";
import { trackEvent } from "@/lib/analytics/events";
import type { ExplorerItem } from "@/lib/tours/journey-explorer";
import { highlightParts } from "@/lib/tours/journey-search";

import styles from "./journey-tile.module.css";

export function JourneyTile({
  item,
  query = "",
  position = 0,
  featured = false,
}: {
  item: ExplorerItem;
  query?: string;
  position?: number;
  featured?: boolean;
}) {
  const attributes = [
    item.easierPace ? "Easier pace" : "",
    item.muslimFriendly ? "Muslim-friendly" : "",
  ].filter(Boolean);
  return (
    <Link
      className={styles.card}
      href={item.href}
      data-journey-slug={item.slug}
      data-featured={featured || undefined}
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
      </div>
      <div className={styles.cardBody}>
        <p className={styles.cardMeta}>
          {item.categoryLabel} · {item.duration} · {item.destinations}
        </p>
        <h3>
          <HighlightText text={item.title} query={query} />
        </h3>
        <p className={styles.cardLine}>{item.summary}</p>
        {attributes.length > 0 ? (
          <p className={styles.suitability}>{attributes.join(" · ")}</p>
        ) : null}
        <div className={styles.cardFoot}>
          <span className={styles.cardPrice} aria-label={item.priceAccessibleText}>
            <strong>{item.priceLabel}</strong>
            {item.priceNote ? <small>{item.priceNote}</small> : null}
          </span>
          <span className={styles.cardGo}>
            View itinerary <ArrowRight size={18} />
          </span>
        </div>
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
