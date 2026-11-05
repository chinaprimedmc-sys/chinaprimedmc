"use client";

/**
 * 本模块职责：Journeys 页的搜索框——符合 WAI-ARIA combobox 的联想列表、最近搜索与热门搜索。
 * 输入：当前搜索词、搜索索引、提交与改词的回调。
 * 输出：带键盘操作（↑ ↓ Enter Esc）的搜索输入与联想面板。
 * 不负责：筛选结果的展示、URL 同步与埋点（由 journeys-explorer.tsx 处理）。
 * 关键规则：最近搜索只保存在访客自己的浏览器；输入框字号不小于 16px，避免 iOS 自动放大。
 */

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useId, useRef, useState, type ReactNode, type RefObject } from "react";

import type { ExplorerItem } from "@/lib/tours/journey-explorer";
import {
  highlightParts,
  parseQuery,
  popularSearches,
  type JourneySearchIndex,
} from "@/lib/tours/journey-search";

import styles from "./journeys-explorer.module.css";

const recentKey = "aviora-journey-recent";

function readRecent(): string[] {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(recentKey) ?? "[]");
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === "string").slice(0, 5) : [];
  } catch {
    return [];
  }
}

function writeRecent(list: string[]) {
  try {
    window.localStorage.setItem(recentKey, JSON.stringify(list));
  } catch {
    /* 浏览器禁用存储时，最近搜索只是不可用。 */
  }
}

export function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <circle cx="9" cy="9" r="6" />
      <path d="m14 14 4 4" />
    </svg>
  );
}

type Row = { kind: "query"; query: string } | { kind: "journey"; href: string };

const Highlight = ({ text, query }: { text: string; query: string }) => (
  <>
    {highlightParts(text, query).map((part, index) =>
      part.match ? (
        <mark key={index} className={styles.mark}>
          {part.text}
        </mark>
      ) : (
        <span key={index}>{part.text}</span>
      ),
    )}
  </>
);

export function JourneySearchBox({
  value,
  onChange,
  onCommit,
  index,
  placeholder,
  compact = false,
  label = "Search journeys",
  inputRef,
}: {
  value: string;
  onChange: (value: string) => void;
  onCommit: (value: string) => void;
  index: JourneySearchIndex<ExplorerItem>;
  placeholder: string;
  compact?: boolean;
  label?: string;
  inputRef?: RefObject<HTMLInputElement | null>;
}) {
  const router = useRouter();
  const id = useId();
  const listId = `${id}-list`;
  const ownRef = useRef<HTMLInputElement>(null);
  const input = inputRef ?? ownRef;
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [recent, setRecent] = useState<string[]>([]);

  const query = value.trim();
  const rows: Row[] = [];
  const sections: ReactNode[] = [];
  const addRow = (row: Row) => rows.push(row) - 1;

  if (open) {
    if (!query) {
      sections.push(
        <div key="popular" role="group" aria-label="Popular searches">
          <h4 className={styles.panelHeading} aria-hidden="true">
            Popular searches
          </h4>
          {popularSearches.map((term) => {
            const i = addRow({ kind: "query", query: term });
            return (
              <div
                key={term}
                id={`${id}-o${i}`}
                role="option"
                aria-selected={active === i}
                className={styles.option}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => commit(term)}
              >
                <span className={styles.optionIcon}>
                  <SearchIcon />
                </span>
                <span className={styles.optionText}>
                  <b>{term}</b>
                </span>
              </div>
            );
          })}
        </div>,
      );
      if (recent.length) {
        sections.push(
          <div key="recent" role="group" aria-label="Recent searches">
            <h4 className={styles.panelHeading} aria-hidden="true">
              Recent
            </h4>
            {recent.map((term) => {
              const i = addRow({ kind: "query", query: term });
              return (
                <div
                  key={term}
                  id={`${id}-o${i}`}
                  role="option"
                  aria-selected={active === i}
                  className={styles.option}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => commit(term)}
                >
                  <span className={styles.optionIcon} aria-hidden="true">
                    ↺
                  </span>
                  <span className={styles.optionText}>
                    <b>{term}</b>
                  </span>
                </div>
              );
            })}
            <button
              type="button"
              className={styles.panelLink}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => {
                writeRecent([]);
                setRecent([]);
              }}
            >
              Clear recent searches
            </button>
          </div>,
        );
      }
    } else {
      const parsed = parseQuery(query);
      const journeys = index.items
        .map((item) => ({ item, score: index.score(item, parsed) }))
        .filter((entry) => entry.score > 0)
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);
      const topics = index.topicSuggestions(query);
      const correction = !topics.length && !journeys.length ? index.didYouMean(query) : null;

      if (topics.length) {
        sections.push(
          <div key="topics" role="group" aria-label="Places and topics">
            <h4 className={styles.panelHeading} aria-hidden="true">
              Places &amp; topics
            </h4>
            {topics.map((topic) => {
              const i = addRow({ kind: "query", query: topic.label });
              return (
                <div
                  key={topic.label}
                  id={`${id}-o${i}`}
                  role="option"
                  aria-selected={active === i}
                  className={styles.option}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => commit(topic.label)}
                >
                  <span className={styles.optionIcon}>
                    <SearchIcon />
                  </span>
                  <span className={styles.optionText}>
                    <b>
                      <Highlight text={topic.label} query={query} />
                    </b>
                  </span>
                  <span className={styles.optionCount}>
                    {topic.count} {topic.count === 1 ? "journey" : "journeys"}
                  </span>
                </div>
              );
            })}
          </div>,
        );
      }
      if (journeys.length) {
        sections.push(
          <div key="journeys" role="group" aria-label="Journeys">
            <h4 className={styles.panelHeading} aria-hidden="true">
              Journeys
            </h4>
            {journeys.map(({ item }) => {
              const i = addRow({ kind: "journey", href: item.href });
              return (
                <div
                  key={item.slug}
                  id={`${id}-o${i}`}
                  role="option"
                  aria-selected={active === i}
                  className={styles.option}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => router.push(item.href)}
                >
                  {item.image ? (
                    <Image
                      src={item.image.src}
                      alt=""
                      width={48}
                      height={36}
                      className={styles.optionThumb}
                    />
                  ) : (
                    <span className={styles.optionThumb} aria-hidden="true" />
                  )}
                  <span className={styles.optionText}>
                    <b>
                      <Highlight text={item.title} query={query} />
                    </b>
                    <small>
                      {item.tierLabel} · {item.duration}
                    </small>
                  </span>
                </div>
              );
            })}
          </div>,
        );
      }
      if (!topics.length && !journeys.length) {
        sections.push(
          <div key="none" role="presentation" className={styles.optionStatic}>
            <b>No matches for “{query}”</b>
            <small>
              {correction
                ? `Did you mean “${correction}”?`
                : "Try a place, a sight or a trip length"}
            </small>
          </div>,
        );
        if (correction) {
          const i = addRow({ kind: "query", query: correction });
          sections.push(
            <div
              key="fix"
              id={`${id}-o${i}`}
              role="option"
              aria-selected={active === i}
              className={styles.option}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => commit(correction)}
            >
              <span className={styles.optionIcon}>
                <SearchIcon />
              </span>
              <span className={styles.optionText}>
                <b>Search “{correction}”</b>
              </span>
            </div>,
          );
        }
      }
      const i = addRow({ kind: "query", query });
      sections.push(
        <div
          key="all"
          id={`${id}-o${i}`}
          role="option"
          aria-selected={active === i}
          className={styles.option}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => commit(query)}
        >
          <span className={styles.optionIcon}>
            <SearchIcon />
          </span>
          <span className={styles.optionText}>
            <b>See all results for “{query}”</b>
          </span>
        </div>,
      );
    }
  }

  function remember(term: string) {
    const next = [
      term,
      ...readRecent().filter((x) => x.toLowerCase() !== term.toLowerCase()),
    ].slice(0, 5);
    writeRecent(next);
    setRecent(next);
  }

  function commit(term: string) {
    const clean = term.trim();
    onCommit(clean);
    if (clean) remember(clean);
    setOpen(false);
    setActive(-1);
  }

  function choose(position: number) {
    const row = rows[position];
    if (!row) return;
    if (row.kind === "journey") router.push(row.href);
    else commit(row.query);
  }

  return (
    <div className={compact ? styles.searchCompact : styles.searchBox}>
      <form
        className={styles.searchField}
        role="search"
        onSubmit={(event) => {
          event.preventDefault();
          if (active >= 0) choose(active);
          else commit(value);
        }}
      >
        <SearchIcon />
        <input
          ref={input}
          type="search"
          role="combobox"
          aria-label={label}
          aria-expanded={open}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={active >= 0 ? `${id}-o${active}` : undefined}
          placeholder={placeholder}
          value={value}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          enterKeyHint="search"
          inputMode="search"
          maxLength={80}
          onFocus={() => {
            setRecent(readRecent());
            setOpen(true);
          }}
          onBlur={() => window.setTimeout(() => setOpen(false), 120)}
          onChange={(event) => {
            onChange(event.target.value);
            setOpen(true);
            setActive(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
              setActive((current) => Math.min(current + 1, rows.length - 1));
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActive((current) => Math.max(current - 1, -1));
            } else if (event.key === "Escape") {
              // 第一次 Esc 只关闭联想；浏览器对 type=search 的原生“清空”要拦下，第二次才清空。
              event.preventDefault();
              if (open) setOpen(false);
              else if (value) onChange("");
            }
          }}
        />
        {value ? (
          <button
            type="button"
            className={styles.searchClear}
            aria-label="Clear search"
            onClick={() => {
              onChange("");
              onCommit("");
              input.current?.focus();
            }}
          >
            ×
          </button>
        ) : null}
        {compact ? null : (
          <>
            {value ? null : (
              <kbd className={styles.searchKey} aria-hidden="true">
                /
              </kbd>
            )}
            <button type="submit" className={styles.searchGo}>
              Search
            </button>
          </>
        )}
      </form>
      <div
        id={listId}
        role="listbox"
        aria-label="Search suggestions"
        className={styles.panel}
        hidden={!open}
      >
        {sections}
      </div>
    </div>
  );
}
