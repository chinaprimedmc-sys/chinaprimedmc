"use client";

/**
 * 本模块职责：Journeys 页主体——顶部带搜索的首屏、粘性控制栏（层级标签、三个筛选、两个开关）、结果网格。
 * 输入：服务端整理好的行程条目与初始查询字符串。
 * 输出：可搜索、可筛选、可分享链接的行程浏览体验（桌面弹出菜单，手机底部面板）。
 * 不负责：页面下方的流程、FAQ、结尾 CTA（见 journeys-page.tsx）与结构化数据。
 * 关键规则：服务端渲染全部卡片，筛选只在浏览器里隐藏；不显示价格；URL 是唯一状态来源，写回时保留 utm 等无关参数。
 */

import {
  ChevronDown as Chevron,
  SlidersHorizontal as SlidersIcon,
} from "@/components/icons/symbols";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

import { heroPhoto } from "@/content/tours/journeys-curation";
import { interestTags, whoTags } from "@/content/tours/journey-tags";
import { journeyCategories } from "@/content/tours/classification";
import { trackEvent } from "@/lib/analytics/events";
import {
  activeFilterCount,
  countWith,
  emptyState,
  itemsToIndex,
  lengthOptions,
  readExplorerState,
  runExplorer,
  sortOptions,
  tierOptions,
  writeExplorerState,
  type ExplorerItem,
  type ExplorerState,
  type SortId,
  type TierFilter,
} from "@/lib/tours/journey-explorer";

import { JourneySearchBox } from "./journey-search-box";
import { JourneyTile } from "./journey-tile";
import styles from "./journeys-explorer.module.css";

const popularInHero = ["Great Wall", "Pandas", "Xi'an", "Family", "10 days", "Easier pace"];

/** 写回地址栏时需要清掉的参数（新参数与旧版参数）；其余如 utm 保持不变。 */
const managedKeys = [
  "tier",
  "category",
  "length",
  "who",
  "interest",
  "easy",
  "halal",
  "q",
  "sort",
  "type",
  "format",
  "travelStyle",
  "style",
  "focus",
  "duration",
  "days",
  "scope",
  "need",
  "needs",
  "travellers",
  "family",
  "pace",
  "query",
  "region",
  "destination",
  "collection",
  "experience",
];

type GroupKey = "category" | "length" | "who" | "interest";

const groups: ReadonlyArray<{
  key: GroupKey;
  label: string;
  options: ReadonlyArray<{ value: string; label: string }>;
}> = [
  {
    key: "category",
    label: "Journey focus",
    options: Object.entries(journeyCategories).map(([value, category]) => ({
      value,
      label: category.label,
    })),
  },
  {
    key: "length",
    label: "Length",
    options: lengthOptions.map((o) => ({ value: o.id, label: o.label })),
  },
  { key: "who", label: "Who is travelling", options: whoTags.map((t) => ({ value: t, label: t })) },
  {
    key: "interest",
    label: "Interest",
    options: interestTags.map((t) => ({ value: t, label: t })),
  },
];

export function JourneysExplorer({
  items,
  initialQueryString = "",
}: {
  items: ExplorerItem[];
  initialQueryString?: string;
}) {
  const index = useMemo(() => itemsToIndex(items), [items]);
  const [state, setState] = useState<ExplorerState>(() =>
    readExplorerState(new URLSearchParams(initialQueryString)),
  );
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [heroSearchVisible, setHeroSearchVisible] = useState(true);
  const heroSearchWrap = useRef<HTMLDivElement>(null);
  const heroInput = useRef<HTMLInputElement>(null);
  const compactInput = useRef<HTMLInputElement>(null);
  const sheet = useRef<HTMLDialogElement>(null);
  const filtersRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);

  const results = useMemo(() => runExplorer(index, state), [index, state]);
  // 访客改过筛选/搜索之后，新出现的卡片才做入场；首次加载由滚动进场负责。
  const [initialKey] = useState(() => writeExplorerState(state).toString());
  const changed = writeExplorerState(state).toString() !== initialKey;
  const filterCount = activeFilterCount(state);
  const hasQuery = state.q.trim().length > 0;

  // URL 是状态来源：每次变化都写回（replaceState，不触发导航），保留无关参数与 hash。
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const url = new URL(window.location.href);
    for (const key of managedKeys) url.searchParams.delete(key);
    for (const [key, value] of writeExplorerState(state)) url.searchParams.set(key, value);
    window.history.replaceState(null, "", url);
  }, [state]);

  // 首屏搜索框移出屏幕后，粘性栏里出现紧凑搜索（桌面）或搜索按钮（手机）。
  useEffect(() => {
    const node = heroSearchWrap.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setHeroSearchVisible(entry.isIntersecting),
      {
        rootMargin: "-64px 0px 0px 0px",
      },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // 点击空白处或按 Esc 关闭下拉筛选；按 “/” 聚焦搜索（桌面习惯）。
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!filtersRef.current?.contains(event.target as Node)) setOpenGroup(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenGroup(null);
      const target = event.target as HTMLElement;
      if (
        event.key === "/" &&
        !/INPUT|TEXTAREA|SELECT/.test(target.tagName) &&
        !target.isContentEditable
      ) {
        event.preventDefault();
        (heroSearchVisible ? heroInput : compactInput).current?.focus();
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [heroSearchVisible]);

  const update = (patch: Partial<ExplorerState>) =>
    setState((current) => ({ ...current, ...patch }));

  const toggle = (key: GroupKey, value: string) =>
    setState((current) => {
      const list = current[key] as string[];
      const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
      trackEvent("tours_filter_change", { filter: key, value, selected: !list.includes(value) });
      return { ...current, [key]: next } as ExplorerState;
    });

  const setQuery = (q: string) => update({ q });
  const commitQuery = (q: string) => {
    update({ q });
    if (q) {
      const count = runExplorer(index, { ...state, q }).length;
      trackEvent("search", { search_term: q.slice(0, 80), results: count });
      if (!count) trackEvent("search_no_results", { search_term: q.slice(0, 80) });
    }
  };

  const clearAll = () => setState({ ...emptyState });
  const activeChips = [
    ...groups.flatMap((group) =>
      (state[group.key] as string[]).map((value) => ({
        id: `${group.key}-${value}`,
        label: group.options.find((option) => option.value === value)?.label ?? value,
        remove: () => toggle(group.key, value),
      })),
    ),
    ...(state.easierPace
      ? [{ id: "easier", label: "Easier pace", remove: () => update({ easierPace: false }) }]
      : []),
    ...(state.muslimFriendly
      ? [
          {
            id: "muslim",
            label: "Muslim-friendly",
            remove: () => update({ muslimFriendly: false }),
          },
        ]
      : []),
  ];
  const selectTier = (tier: TierFilter) => {
    trackEvent("tours_tier_tab_click", { tier });
    update({ tier });
  };

  const tierCount = (tier: TierFilter) => runExplorer(index, { ...state, tier }).length;
  const currentTier = tierOptions.find((option) => option.id === state.tier) ?? tierOptions[0];
  const otherTiers =
    state.tier !== "all" && (hasQuery || filterCount > 0)
      ? tierOptions
          .filter((o) => o.id !== "all" && o.id !== state.tier)
          .map((o) => ({ option: o, count: tierCount(o.id) }))
          .filter((x) => x.count > 0)
      : [];
  const correction = results.length === 0 && hasQuery ? index.didYouMean(state.q) : null;
  const showDiy = state.tier !== "day" && results.length > 3;

  const countFor = (key: GroupKey, value: string) =>
    countWith(index, state, { [key]: [value] } as Partial<ExplorerState>);

  const filterButton = (
    key: GroupKey,
    label: string,
    options: ReadonlyArray<{ value: string; label: string }>,
  ) => {
    const selected = state[key] as string[];
    const open = openGroup === key;
    return (
      <div className={styles.filterWrap} key={key}>
        <button
          type="button"
          className={styles.filterButton}
          aria-expanded={open}
          aria-haspopup="true"
          data-on={selected.length > 0}
          onClick={() => setOpenGroup(open ? null : key)}
        >
          {label}
          {selected.length ? ` · ${selected.length}` : ""}
          <Chevron />
        </button>
        {open ? (
          <div className={styles.popover} role="group" aria-label={label}>
            {options.map((option) => (
              <label className={styles.popoverOption} key={option.value}>
                <input
                  type="checkbox"
                  checked={selected.includes(option.value)}
                  onChange={() => toggle(key, option.value)}
                />
                {option.label}
                <small>{countFor(key, option.value)}</small>
              </label>
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  const goodToKnowCount = (state.easierPace ? 1 : 0) + (state.muslimFriendly ? 1 : 0);
  const easyTotal = items.filter((i) => i.easierPace).length;
  const halalTotal = items.filter((i) => i.muslimFriendly).length;

  return (
    <div className={styles.root}>
      <section className={styles.hero} aria-labelledby="journeys-title">
        <div className={styles.heroMedia}>
          <Image
            src={heroPhoto.src}
            alt={heroPhoto.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className={`${styles.heroImage} motion-settle`}
          />
          <div className={styles.heroShade} aria-hidden="true" />
        </div>
        <div className={styles.wrap}>
          <h1 id="journeys-title" className="motion-rise" style={{ ["--i" as string]: 0 }}>
            Private journeys <em>across China.</em>
          </h1>
          <p className={`${styles.heroSub} motion-rise`} style={{ ["--i" as string]: 1 }}>
            Every journey is private and priced for your dates and group. Search a place or a sight,
            or browse by type of trip.
          </p>
          <div ref={heroSearchWrap} className="motion-rise" style={{ ["--i" as string]: 2 }}>
            <JourneySearchBox
              value={state.q}
              onChange={setQuery}
              onCommit={commitQuery}
              index={index}
              inputRef={heroInput}
              placeholder="Search “Great Wall”, “pandas”, “10 days”…"
            />
          </div>
          <div className={`${styles.popular} motion-rise`} style={{ ["--i" as string]: 3 }}>
            <span>Popular:</span>
            {popularInHero.map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  commitQuery(term);
                  document
                    .getElementById("journey-results")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.controls}>
        <div className={styles.wrap}>
          {!heroSearchVisible ? (
            <div className={styles.compact}>
              <JourneySearchBox
                value={state.q}
                onChange={setQuery}
                onCommit={commitQuery}
                index={index}
                inputRef={compactInput}
                compact
                label="Search journeys"
                placeholder="Search journeys"
              />
            </div>
          ) : null}
          <div className={styles.tabs} role="group" aria-label="Type of journey">
            {[...tierOptions]
              .sort(
                (a, b) =>
                  ["all", "signature", "tailor-made-example", "day"].indexOf(a.id) -
                  ["all", "signature", "tailor-made-example", "day"].indexOf(b.id),
              )
              .map((option) => {
                const count = tierCount(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={state.tier === option.id}
                    aria-controls="journey-results"
                    data-zero={count === 0}
                    className={styles.tab}
                    onClick={() => selectTier(option.id)}
                  >
                    {option.label} <small>{count}</small>
                  </button>
                );
              })}
          </div>
          <div className={styles.filters} ref={filtersRef} aria-label="Filters">
            {groups.map((group) => filterButton(group.key, group.label, group.options))}
            <div className={styles.filterWrap}>
              <button
                type="button"
                className={styles.filterButton}
                aria-expanded={openGroup === "good"}
                aria-haspopup="true"
                data-on={goodToKnowCount > 0}
                onClick={() => setOpenGroup(openGroup === "good" ? null : "good")}
              >
                Good to know{goodToKnowCount ? ` · ${goodToKnowCount}` : ""}
                <Chevron />
              </button>
              {openGroup === "good" ? (
                <div className={styles.popover} role="group" aria-label="Good to know">
                  <label className={styles.popoverOption}>
                    <input
                      type="checkbox"
                      checked={state.easierPace}
                      onChange={(e) => update({ easierPace: e.target.checked })}
                    />
                    Easier pace<small>{easyTotal}</small>
                  </label>
                  <label className={styles.popoverOption}>
                    <input
                      type="checkbox"
                      checked={state.muslimFriendly}
                      onChange={(e) => update({ muslimFriendly: e.target.checked })}
                    />
                    Muslim-friendly<small>{halalTotal}</small>
                  </label>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <main className={styles.wrap} id="journey-results">
        <div className={styles.explain}>
          <p>
            {state.tier === "all"
              ? `${items.length} private journeys across China, from a single day to nearly two weeks.`
              : currentTier.explain}
          </p>
          {currentTier.link ? (
            <Link href={currentTier.link.href}>{currentTier.link.label} →</Link>
          ) : null}
        </div>

        <div className={styles.mobileBar}>
          <button
            type="button"
            className={styles.sheetButton}
            onClick={() => sheet.current?.showModal()}
          >
            <SlidersIcon /> Filters {filterCount ? <b>{filterCount}</b> : null}
          </button>
          <label className={styles.mobileSort}>
            <span>Sort</span>
            <select value={state.sort} onChange={(e) => update({ sort: e.target.value as SortId })}>
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.id === "rec" && hasQuery ? "Best match" : option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        {activeChips.length ? (
          <div className={styles.activeChips} aria-label="Active filters">
            {activeChips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={chip.remove}
                aria-label={`Remove filter ${chip.label}`}
              >
                {chip.label} <span aria-hidden="true">×</span>
              </button>
            ))}
          </div>
        ) : null}

        <div className={styles.resultsHead}>
          <span role="status" aria-live="polite">
            <strong>{results.length}</strong> {results.length === 1 ? "journey" : "journeys"}
            {hasQuery ? <> for “{state.q.trim()}”</> : null}
          </span>
          {hasQuery || filterCount ? (
            <button type="button" className={styles.linkButton} onClick={clearAll}>
              Clear all
            </button>
          ) : null}
          <label className={styles.sort}>
            Sort
            <select value={state.sort} onChange={(e) => update({ sort: e.target.value as SortId })}>
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.id === "rec" && hasQuery ? "Best match" : option.label}
                </option>
              ))}
            </select>
          </label>
          <p className={styles.priceNote}>
            Every journey is individually priced for your dates and group.
          </p>
        </div>

        {otherTiers.length && results.length < 3 ? (
          <p className={styles.others}>
            {results.length ? "Also" : "No matches here, but there are"} matches in:{" "}
            {otherTiers.map(({ option, count }) => (
              <button key={option.id} type="button" onClick={() => selectTier(option.id)}>
                {option.label} ({count})
              </button>
            ))}
          </p>
        ) : null}

        <div className={styles.grid} data-stagger-in={changed ? "" : undefined}>
          {results.map(({ item }, position) => (
            <Fragment key={item.slug}>
              {showDiy && position === 6 ? <DiyCard /> : null}
              <JourneyTile item={item} query={state.q} position={position} />
            </Fragment>
          ))}
          {showDiy && results.length <= 6 ? <DiyCard /> : null}
          {results.length === 0 ? (
            <div className={styles.empty}>
              <h3>
                {hasQuery
                  ? `No journeys for “${state.q.trim()}”.`
                  : "No journey matches all of that."}
              </h3>
              {correction ? (
                <p>
                  Did you mean{" "}
                  <button
                    type="button"
                    className={styles.linkButton}
                    onClick={() => commitQuery(correction)}
                  >
                    {correction}
                  </button>
                  ?
                </p>
              ) : (
                <p>
                  Try a place, a sight or a trip length, or remove a filter. For accessibility or
                  medical needs, tell us and we will plan it with you.
                </p>
              )}
              <div className={styles.emptyChips}>
                {["Great Wall", "Pandas", "Xi'an", "Family", "10 days"].map((term) => (
                  <button key={term} type="button" onClick={() => commitQuery(term)}>
                    {term}
                  </button>
                ))}
              </div>
              <button type="button" className={styles.linkButton} onClick={clearAll}>
                Clear search and filters
              </button>
              <DiyCard />
            </div>
          ) : null}
        </div>
      </main>

      <dialog
        ref={sheet}
        className={styles.sheet}
        aria-labelledby="filters-title"
        onClick={(e) => {
          if (e.target === sheet.current) sheet.current?.close();
        }}
      >
        <div className={styles.sheetInner}>
          <span className={styles.sheetHandle} aria-hidden="true" />
          <header>
            <h2 id="filters-title">Filters</h2>
            <button
              type="button"
              className={styles.linkButton}
              onClick={() =>
                setState((c) => ({ ...emptyState, q: c.q, tier: c.tier, sort: c.sort }))
              }
            >
              Clear all
            </button>
            <button
              type="button"
              className={styles.sheetClose}
              aria-label="Close filters"
              onClick={() => sheet.current?.close()}
            >
              ×
            </button>
          </header>
          <div className={styles.sheetBody}>
            {groups.map((group) => (
              <fieldset key={group.key}>
                <legend>{group.label}</legend>
                <div className={styles.sheetChips}>
                  {group.options.map((option) => (
                    <label key={option.value}>
                      <input
                        type="checkbox"
                        checked={(state[group.key] as string[]).includes(option.value)}
                        onChange={() => toggle(group.key, option.value)}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            ))}
            <fieldset>
              <legend>Good to know</legend>
              <div className={styles.sheetChips}>
                <label>
                  <input
                    type="checkbox"
                    checked={state.easierPace}
                    onChange={(e) => update({ easierPace: e.target.checked })}
                  />
                  <span>Easier pace</span>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={state.muslimFriendly}
                    onChange={(e) => update({ muslimFriendly: e.target.checked })}
                  />
                  <span>Muslim-friendly</span>
                </label>
              </div>
            </fieldset>
          </div>
          <footer>
            <button
              type="button"
              disabled={results.length === 0}
              onClick={() => sheet.current?.close()}
            >
              {results.length
                ? `Show ${results.length} ${results.length === 1 ? "journey" : "journeys"}`
                : "No journeys match"}
            </button>
          </footer>
        </div>
      </dialog>
    </div>
  );
}

function DiyCard() {
  return (
    <aside className={styles.diy}>
      <h3>Don’t see it? We’ll design it.</h3>
      <p>
        Tell us your dates, who is travelling and what you love. We design the route from a blank
        page.
      </p>
      <Link href="/start-planning?source=journeys-grid">Design my journey</Link>
    </aside>
  );
}
