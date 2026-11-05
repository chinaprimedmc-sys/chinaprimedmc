/**
 * 本模块职责：全站统一的信任组件——评分行（TrustLine）与就地评论条（GuestVoice）。
 * 输入：主题、数量、种子（页面标识）。
 * 输出：服务端渲染的小块内容；每条评论都链接到评论页上的完整原文。
 * 不负责：评论数据与选择逻辑（lib/reviews/review-voice.ts）。
 * 关键规则：不显示星级结构化数据；不写“已验证”。
 */

import Link from "next/link";

import { pickVoices, reviewStats } from "@/lib/reviews/review-voice";
import type { TopicId } from "@/lib/reviews/review-board";

import styles from "./trust.module.css";

const topicTitles: Record<TopicId, string> = {
  hotels: "Guests on the hotels",
  guides: "Guests on their guides",
  transport: "Guests on private transport",
  pace: "Guests on the pace",
  value: "Guests on value",
};

const topicLinkText: Record<TopicId, string> = {
  hotels: "hotels",
  guides: "guides",
  transport: "private transport",
  pace: "pace and comfort",
  value: "value",
};

export function TrustLine({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const { average } = reviewStats();
  return (
    <Link href="/reviews" className={`${styles.line} ${tone === "light" ? styles.lineLight : ""}`}>
      <span
        className={styles.stars}
        style={{ ["--fill" as string]: `${(Number(average) / 5) * 100}%` }}
        aria-hidden="true"
      />
      <b>{average}</b>
      <span>Read what our guests say</span>
    </Link>
  );
}

export function GuestVoice({
  topic,
  count = 2,
  seed = "",
  title,
}: {
  topic: TopicId;
  count?: number;
  seed?: string;
  title?: string;
}) {
  const voices = pickVoices(topic, count, seed);
  if (!voices.length) return null;
  return (
    <aside className={styles.voice} aria-label={title ?? topicTitles[topic]}>
      <p className={styles.voiceTitle}>{title ?? topicTitles[topic]}</p>
      <div className={styles.voiceGrid}>
        {voices.map((voice) => (
          <figure key={voice.id}>
            <blockquote>“{voice.passage}”</blockquote>
            <figcaption>
              {voice.author}, {voice.location} ·{" "}
              <Link href={`/reviews?review=${voice.id}`}>Read the full review</Link>
            </figcaption>
          </figure>
        ))}
      </div>
      <Link className={styles.voiceMore} href={`/reviews?mentions=${topic}`}>
        Read more guest reviews about {topicLinkText[topic]} →
      </Link>
    </aside>
  );
}
