"use client";

/**
 * 本模块职责：评论页——评分总览与分布、筛选与搜索、竖排评论列表（全文就地展开，不需要点进去）。
 * 输入：公开评价列表与初始查询字符串。
 * 输出：类似电商平台的评论体验：桌面左侧粘性总览与筛选，右侧列表；手机上筛选在底部面板。
 * 不负责：评价数据与筛选逻辑（lib/reviews/review-board.ts、content/home/traveler-reviews.ts）、筛选逻辑（lib/reviews/review-board.ts）。
 * 关键规则：不显示评价日期；不显示“已验证”标记；每次只多加载 12 条，避免长页面。
 */

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import type { TravelerReview } from "@/content/home/traveler-reviews";
import { trackEvent } from "@/lib/analytics/events";
import {
  activeBoardFilters,
  emptyBoardState,
  filterReviews,
  languageNames,
  readBoardState,
  summarize,
  writeBoardState,
  type BoardState,
  type ReviewSort,
} from "@/lib/reviews/review-board";

import styles from "./reviews-board.module.css";

const PAGE = 12;
const CLAMP_AT = 380;

const sortLabels: Record<ReviewSort, string> = {
  top: "Top reviews",
  high: "Highest rating",
  low: "Lowest rating",
  long: "Most detailed",
};

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className={styles.stars}
      style={{ ["--fill" as string]: `${(rating / 5) * 100}%` }}
      role="img"
      aria-label={`Rated ${rating.toFixed(1)} out of 5`}
    />
  );
}

function ReviewRow({ review, expanded = false }: { review: TravelerReview; expanded?: boolean }) {
  const [open, setOpen] = useState(expanded);
  const joined = review.paragraphs.join(" ");
  const long = joined.length > CLAMP_AT;
  const initial = review.author.trim().charAt(0).toUpperCase();

  return (
    <article className={styles.row} lang={review.language}>
      <div className={styles.avatar} aria-hidden="true">
        {initial}
      </div>
      <div className={styles.rowBody}>
        <header className={styles.rowHead}>
          <strong>{review.author}</strong>
          <span>{review.location}</span>
          {review.language !== "en" ? (
            <span className={styles.lang} lang="en">
              {languageNames[review.language]}
            </span>
          ) : null}
        </header>
        <div className={styles.rating}>
          <Stars rating={review.rating} />
          <b>{review.rating.toFixed(1)}</b>
          {review.verifiedOn ? <span className={styles.verified}>Verified</span> : null}
        </div>
        {review.journey || review.travelMonth ? (
          <p className={styles.trip}>
            {[
              review.journey,
              review.travelMonth ? `Travelled ${review.travelMonth}` : "",
              review.travellers,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
        ) : null}
        {open || !long ? (
          review.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)
        ) : (
          <p className={styles.clamped}>{joined}</p>
        )}
        {long ? (
          <button
            type="button"
            className={styles.more}
            aria-expanded={open}
            onClick={() => {
              setOpen((value) => !value);
              if (!open) trackEvent("review_expand", { review: review.id });
            }}
          >
            {open ? "Show less" : "Read more"}
          </button>
        ) : null}
      </div>
    </article>
  );
}

export function ReviewsBoard({
  reviews,
  initialQueryString = "",
}: {
  reviews: TravelerReview[];
  initialQueryString?: string;
}) {
  const summary = useMemo(() => summarize(reviews), [reviews]);
  const [state, setState] = useState<BoardState>(() =>
    readBoardState(new URLSearchParams(initialQueryString)),
  );
  const [shown, setShown] = useState(PAGE);
  const sheet = useRef<HTMLDialogElement>(null);
  const mounted = useRef(false);

  const results = useMemo(() => filterReviews(reviews, state), [reviews, state]);
  const active = activeBoardFilters(state);
  const hasSingle = state.review !== null;

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const url = new URL(window.location.href);
    for (const key of ["rating", "lang", "mentions", "q", "sort", "review"])
      url.searchParams.delete(key);
    for (const [key, value] of writeBoardState(state)) url.searchParams.set(key, value);
    window.history.replaceState(null, "", url);
  }, [state]);

  const update = (patch: Partial<BoardState>) => {
    setShown(PAGE);
    setState((current) => ({ ...current, ...patch }));
  };
  const clear = () => {
    setShown(PAGE);
    setState({ ...emptyBoardState, sort: state.sort });
  };

  const filters = (
    <>
      <fieldset>
        <legend>Rating</legend>
        {summary.distribution.map((bucket) => (
          <button
            key={bucket.id}
            type="button"
            className={styles.bar}
            aria-pressed={state.rating === bucket.id}
            onClick={() => update({ rating: state.rating === bucket.id ? null : bucket.id })}
          >
            <span>{bucket.label}</span>
            <span className={styles.track} aria-hidden="true">
              <i style={{ width: `${(bucket.count / summary.total) * 100}%` }} />
            </span>
            <small>{bucket.count}</small>
          </button>
        ))}
      </fieldset>
      <fieldset>
        <legend>Reviews that mention</legend>
        <div className={styles.chips}>
          {summary.mentioned.map((topic) => (
            <button
              key={topic.id}
              type="button"
              aria-pressed={state.topic === topic.id}
              onClick={() => update({ topic: state.topic === topic.id ? null : topic.id })}
            >
              {topic.label} <small>{topic.count}</small>
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>Language</legend>
        <div className={styles.chips}>
          {summary.languages.map((language) => (
            <button
              key={language.id}
              type="button"
              aria-pressed={state.lang === language.id}
              onClick={() => update({ lang: state.lang === language.id ? null : language.id })}
            >
              {language.label} <small>{language.count}</small>
            </button>
          ))}
        </div>
      </fieldset>
    </>
  );

  return (
    <div className={styles.board}>
      <aside className={styles.side} aria-label="Review summary and filters">
        <div className={styles.summary}>
          <div className={styles.score}>
            <strong>{summary.average.toFixed(1)}</strong>
            <span>out of 5</span>
          </div>
          <Stars rating={summary.average} />
          <p>
            Based on what our guests wrote. The most-mentioned topics are{" "}
            {summary.mentioned
              .slice(0, 3)
              .map((topic) => topic.label.toLowerCase())
              .join(", ")}
            .
          </p>
        </div>
        <div className={styles.desktopFilters}>{filters}</div>
        <Link className={styles.planLink} href="/start-planning?source=reviews-side">
          Plan your own journey
        </Link>
      </aside>

      <section className={styles.main} aria-labelledby="reviews-list-title">
        <div className={styles.toolbar}>
          <h2 id="reviews-list-title" className={styles.srOnly}>
            Guest reviews
          </h2>
          <label className={styles.search}>
            <span className={styles.srOnly}>Search reviews</span>
            <input
              type="search"
              placeholder="Search reviews"
              value={state.q}
              maxLength={80}
              enterKeyHint="search"
              autoComplete="off"
              onChange={(event) => update({ q: event.target.value })}
            />
          </label>
          <label className={styles.sort}>
            Sort by
            <select
              value={state.sort}
              onChange={(event) => update({ sort: event.target.value as ReviewSort })}
            >
              {(Object.keys(sortLabels) as ReviewSort[]).map((id) => (
                <option key={id} value={id}>
                  {sortLabels[id]}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            className={styles.filterButton}
            onClick={() => sheet.current?.showModal()}
          >
            Filters{active ? <b>{active}</b> : null}
          </button>
        </div>

        {state.review !== null && results.length === 1 ? (
          <p className={styles.single}>
            You are reading one review.{" "}
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => update({ review: null })}
            >
              See all reviews
            </button>
          </p>
        ) : null}

        <p className={styles.status} role="status" aria-live="polite">
          Showing <strong>{Math.min(shown, results.length)}</strong> of{" "}
          <strong>{results.length}</strong> {results.length === 1 ? "review" : "reviews"}
          {active ? (
            <>
              {" "}
              ·{" "}
              <button type="button" className={styles.linkButton} onClick={clear}>
                Clear filters
              </button>
            </>
          ) : null}
        </p>

        <div
          className={styles.list}
          data-stagger-in={active || state.sort !== "top" ? "" : undefined}
        >
          {results.slice(0, shown).map((review) => (
            <ReviewRow
              key={review.id}
              review={review}
              expanded={results.length === 1 && hasSingle}
            />
          ))}
          {results.length === 0 ? (
            <div className={styles.empty}>
              <h3>No reviews match.</h3>
              <p>Try removing a filter or searching for something else.</p>
              <button type="button" className={styles.linkButton} onClick={clear}>
                Clear filters
              </button>
            </div>
          ) : null}
        </div>

        {shown < results.length ? (
          <button
            type="button"
            className={styles.showMore}
            onClick={() => {
              setShown((value) => value + PAGE);
              trackEvent("reviews_show_more", { shown: shown + PAGE });
            }}
          >
            Show {Math.min(PAGE, results.length - shown)} more reviews
          </button>
        ) : null}
      </section>

      <dialog
        ref={sheet}
        className={styles.sheet}
        aria-labelledby="review-filters-title"
        onClick={(event) => {
          if (event.target === sheet.current) sheet.current?.close();
        }}
      >
        <div className={styles.sheetInner}>
          <header>
            <h2 id="review-filters-title">Filters</h2>
            <button type="button" className={styles.linkButton} onClick={clear}>
              Clear all
            </button>
          </header>
          <div className={styles.sheetBody}>{filters}</div>
          <footer>
            <button type="button" onClick={() => sheet.current?.close()}>
              Show {results.length} {results.length === 1 ? "review" : "reviews"}
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
}
