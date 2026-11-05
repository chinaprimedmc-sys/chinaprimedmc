"use client";

/**
 * 本模块职责：Journal 杂志式首页——筛选标签、首屏大图精选、统一比例的文章网格、网格内的行程推广横幅。
 * 输入：服务端整理好的文章条目、精选文章 slug、初始查询字符串。
 * 输出：可筛选、可搜索、可分享链接的文章浏览体验。
 * 不负责：页面外壳、结构化数据与页脚（见 journal-hub-template.tsx）。
 * 关键规则：全部文章都在服务端 HTML 里（超出当前数量的用 hidden，爬虫仍能看到链接）；
 * 筛选时精选大图只在“全部”且无搜索词时显示；横幅卡片插在第 6 篇之后，且每个视图最多一张；
 * 价格 US$3,800 与行程页保持一致；配色只用站点的黑白灰。
 */

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

import { trackEvent } from "@/lib/analytics/events";
import {
  filterMagazine,
  readMagazineState,
  tagFor,
  topicCounts,
  topics,
  type MagazineItem,
  type TopicId,
} from "@/lib/journal/magazine";

import styles from "./journal-magazine.module.css";

const PAGE = 12;
const BANNER_AFTER = 6;
const tourHref = "/tours/beijing-xian-shanghai-private-10-day-tour";
const bannerPhoto = {
  src: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp",
  alt: "The Great Wall winding over the mountains near Beijing at sunrise",
};

function Card({ item, position }: { item: MagazineItem; position: number }) {
  return (
    <Link
      href={`/journal/${item.slug}`}
      className={styles.card}
      data-journal-event="article_open"
      data-article-slug={item.slug}
      data-placement="magazine-grid"
      onClick={() =>
        trackEvent("journal_card_click", { article: item.slug, position: position + 1 })
      }
    >
      <span className={styles.thumb}>
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 699px) calc(100vw - 40px), (max-width: 1023px) 50vw, 400px"
          style={{ objectPosition: item.image.objectPosition ?? "center" }}
        />
      </span>
      <span className={styles.meta}>
        <b>{tagFor(item)}</b>
        <span aria-hidden="true">·</span>
        <span>{item.readingTime}</span>
      </span>
      <h3>{item.title}</h3>
      <p>{item.excerpt}</p>
    </Link>
  );
}

function Banner() {
  return (
    <aside className={styles.banner} aria-label="Featured journey">
      <Image
        src={bannerPhoto.src}
        alt={bannerPhoto.alt}
        fill
        sizes="(max-width: 1023px) 100vw, 1200px"
        className={styles.bannerImage}
      />
      <span className={styles.bannerShade} aria-hidden="true" />
      <div className={styles.bannerBody}>
        <p className={styles.bannerKicker}>The journey behind these guides</p>
        <h3>The 10-Day Slow-Paced Golden Triangle</h3>
        <p>
          Beijing, Xi&apos;an and Shanghai at a pace that protects your energy: zero-stair Great
          Wall access, luggage-free bullet trains and a 3:30 PM return to the hotel.
        </p>
        <div className={styles.bannerActions}>
          <Link
            href={tourHref}
            className={styles.bannerButton}
            onClick={() => trackEvent("journal_banner_click", { placement: "grid" })}
          >
            See the 10-day journey
          </Link>
          <span>From US$3,800 per person</span>
        </div>
      </div>
    </aside>
  );
}

export function JournalMagazine({
  items,
  featuredSlug,
  initialQueryString = "",
}: {
  items: MagazineItem[];
  featuredSlug: string;
  initialQueryString?: string;
}) {
  const initial = useMemo(
    () => readMagazineState(new URLSearchParams(initialQueryString)),
    [initialQueryString],
  );
  const [topic, setTopic] = useState<TopicId>(initial.topic);
  const [query, setQuery] = useState(initial.q);
  const [shown, setShown] = useState(PAGE);
  const [initialKey] = useState(`${initial.topic}|${initial.q}`);
  const mounted = useRef(false);

  const counts = useMemo(() => topicCounts(items), [items]);
  const featured = items.find((item) => item.slug === featuredSlug) ?? items[0];
  const showFeatured = topic === "all" && !query.trim() && Boolean(featured);
  const list = useMemo(() => {
    const filtered = filterMagazine(items, topic, query);
    return showFeatured ? filtered.filter((item) => item.slug !== featured?.slug) : filtered;
  }, [items, topic, query, showFeatured, featured]);
  const changed = `${topic}|${query.trim()}` !== initialKey;

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const url = new URL(window.location.href);
    url.searchParams.delete("topic");
    url.searchParams.delete("q");
    if (topic !== "all") url.searchParams.set("topic", topic);
    if (query.trim()) url.searchParams.set("q", query.trim());
    window.history.replaceState(null, "", url);
  }, [topic, query]);

  const pick = (next: TopicId) => {
    setShown(PAGE);
    setTopic(next);
    trackEvent("journal_topic_click", { topic: next });
  };

  return (
    <div className={styles.root}>
      <header className={styles.head}>
        <p className={styles.eyebrow}>The AVIORA Journal</p>
        <h1>China, clearly.</h1>
        <p className={styles.dek}>
          Guides from the team that plans and runs private journeys in China, for families, couples
          and travelers who prefer an easier pace.
        </p>
      </header>

      <div className={styles.controls}>
        <div className={styles.pills} role="group" aria-label="Filter guides by topic">
          {topics.map((entry) => (
            <button
              key={entry.id}
              type="button"
              aria-pressed={topic === entry.id}
              className={styles.pill}
              onClick={() => pick(entry.id)}
            >
              {entry.label} <small>{counts[entry.id]}</small>
            </button>
          ))}
        </div>
        <label className={styles.search}>
          <span className={styles.srOnly}>Search guides</span>
          <input
            type="search"
            value={query}
            placeholder="Search guides"
            maxLength={80}
            enterKeyHint="search"
            autoComplete="off"
            onChange={(event) => {
              setShown(PAGE);
              setQuery(event.target.value);
            }}
          />
        </label>
      </div>

      {showFeatured && featured ? (
        <Link
          href={`/journal/${featured.slug}`}
          className={styles.hero}
          data-journal-event="article_open"
          data-article-slug={featured.slug}
          data-placement="magazine-hero"
          onClick={() => trackEvent("journal_card_click", { article: featured.slug, position: 0 })}
        >
          <span className={styles.heroImage}>
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              priority
              fetchPriority="high"
              sizes="(max-width: 1023px) 100vw, 60vw"
              style={{ objectPosition: featured.image.objectPosition ?? "center" }}
            />
          </span>
          <span className={styles.heroCopy}>
            <span className={styles.meta}>
              <b>Featured · {tagFor(featured)}</b>
              <span aria-hidden="true">·</span>
              <span>{featured.readingTime}</span>
            </span>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <span className={styles.heroLink}>
              Read the guide <i aria-hidden="true">→</i>
            </span>
          </span>
        </Link>
      ) : null}

      <p className={styles.status} role="status" aria-live="polite">
        {list.length === 0
          ? "No guides match."
          : `${list.length} ${list.length === 1 ? "guide" : "guides"}${topic !== "all" ? ` in ${topics.find((t) => t.id === topic)?.label}` : ""}${query.trim() ? ` for “${query.trim()}”` : ""}`}
        {topic !== "all" || query.trim() ? (
          <>
            {" · "}
            <button
              type="button"
              className={styles.clear}
              onClick={() => {
                setTopic("all");
                setQuery("");
                setShown(PAGE);
              }}
            >
              Clear
            </button>
          </>
        ) : null}
      </p>

      <div className={styles.grid} data-stagger-in={changed ? "" : undefined}>
        {list.map((item, index) => (
          <Fragment key={item.slug}>
            {index === BANNER_AFTER ? <Banner /> : null}
            <div className={styles.cell} hidden={index >= shown}>
              <Card item={item} position={index + 1} />
            </div>
          </Fragment>
        ))}
        {list.length > 0 && list.length <= BANNER_AFTER ? <Banner /> : null}
      </div>

      {list.length === 0 ? (
        <div className={styles.empty}>
          <h3>Nothing here yet.</h3>
          <p>
            Try another topic, or tell us what you are working out and we will point you to the
            right guide.
          </p>
        </div>
      ) : null}

      {shown < list.length ? (
        <button
          type="button"
          className={styles.more}
          onClick={() => {
            setShown((value) => value + PAGE);
            trackEvent("journal_show_more", { shown: shown + PAGE });
          }}
        >
          Show {Math.min(PAGE, list.length - shown)} more guides
        </button>
      ) : null}
    </div>
  );
}
