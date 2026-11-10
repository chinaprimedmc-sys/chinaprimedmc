"use client";

/**
 * 本模块职责：行程逐日展示——可折叠的每日卡片，加上手机端也能一指点按的“Day 1…Day N”跳转条。
 * 输入：已整理好的每日行程数据。
 * 输出：前两天默认展开、其余折叠的 <details> 列表；点击跳转条会展开并滚动到对应日期。
 * 不负责：每日数据的来源（见 tour-detail-model.ts）与页面其他区块。
 * 关键规则：折叠内容仍在 HTML 中（原生 details），搜索引擎和无脚本环境都能读到完整行程；
 * 少于 4 天的行程不显示跳转条；滚动遵守“减少动态效果”偏好。
 */

import { ChevronDown } from "@/components/icons/symbols";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { TourDetailDay } from "./tour-detail-model";
import styles from "./tour-journey.module.css";

const OPEN_BY_DEFAULT = 2;
const JUMP_BAR_MIN_DAYS = 4;

export function TourDayItinerary({ days }: { days: TourDetailDay[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const jumpRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const showJump = days.length >= JUMP_BAR_MIN_DAYS;

  useEffect(() => {
    if (!showJump) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const items = listRef.current?.querySelectorAll<HTMLElement>("[data-day-item]");
      if (!items) return;
      const line = window.innerHeight * 0.35;
      let current = 0;
      items.forEach((item, index) => {
        if (item.getBoundingClientRect().top <= line) current = index;
      });
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
    };
  }, [showJump]);

  useEffect(() => {
    // 当前日期的按钮横向滚入视野，避免在窄屏上被挤出可见区。
    const bar = jumpRef.current;
    const chip = bar?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!chip || !bar) return;
    bar.scrollTo({ left: chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2 });
  }, [active]);

  const jumpTo = (index: number) => {
    const item = listRef.current?.querySelector<HTMLElement>(`#day-${index + 1}`);
    if (!item) return;
    item.querySelector("details")?.setAttribute("open", "");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    item.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    setActive(index);
  };

  return (
    <>
      {showJump ? (
        <nav className={styles.dayJump} aria-label="Jump to a day">
          <div className={styles.dayJumpTrack} ref={jumpRef}>
            {days.map((day, index) => (
              <button
                key={day.label}
                type="button"
                className={styles.dayJumpChip}
                aria-current={active === index ? "true" : undefined}
                onClick={() => jumpTo(index)}
              >
                Day {index + 1}
              </button>
            ))}
          </div>
        </nav>
      ) : null}
      <ol className={styles.days} ref={listRef}>
        {days.map((day, index) => (
          <li key={day.label} id={`day-${index + 1}`} className={styles.day} data-day-item>
            <details className={styles.dayDetails} open={index < OPEN_BY_DEFAULT || undefined}>
              <summary className={styles.daySummary}>
                <span>
                  <span className={styles.dayLabel}>
                    {day.label} · {day.destination}
                  </span>
                  <h3>{day.title}</h3>
                </span>
                <ChevronDown size={22} aria-hidden="true" />
              </summary>
              <div className={styles.dayBody}>
                {day.image && index !== days.length - 1 && (
                  <div className={styles.dayPhoto}>
                    <Image
                      src={day.image.src}
                      alt={day.image.alt}
                      fill
                      sizes="(max-width: 899px) 100vw, 26vw"
                    />
                  </div>
                )}
                <div className={styles.dayNarrative}>
                  <p>{day.summary}</p>
                  {day.experiences.length > 0 && (
                    <ul className={styles.experiences}>
                      {day.experiences.map((experience) => (
                        <li key={experience.title}>
                          <b>{experience.title}</b>
                          {experience.description && <span>{experience.description}</span>}
                        </li>
                      ))}
                    </ul>
                  )}
                  {day.guideInsight && (
                    <blockquote className={styles.insight}>{day.guideInsight}</blockquote>
                  )}
                </div>
                {(day.transit || day.steps || day.rest) && (
                  <dl className={styles.dayMetrics}>
                    {day.transit && (
                      <div>
                        <dt>Transit</dt>
                        <dd>{day.transit}</dd>
                      </div>
                    )}
                    {day.steps && (
                      <div>
                        <dt>Estimated walking</dt>
                        <dd>{day.steps}</dd>
                      </div>
                    )}
                    {day.rest && (
                      <div>
                        <dt>Rest / hotel return</dt>
                        <dd>{day.rest}</dd>
                      </div>
                    )}
                  </dl>
                )}
                <dl className={styles.dayMeta}>
                  <div>
                    <dt>Stay</dt>
                    <dd>{day.stay}</dd>
                  </div>
                  <div>
                    <dt>Meals</dt>
                    <dd>{day.meals}</dd>
                  </div>
                  <div>
                    <dt>Travel</dt>
                    <dd>{day.transport}</dd>
                  </div>
                </dl>
              </div>
            </details>
          </li>
        ))}
      </ol>
    </>
  );
}
