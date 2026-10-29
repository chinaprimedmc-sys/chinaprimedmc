"use client";

/**
 * 本模块职责：/tours 页的行程浏览器——类型标签、可展开的筛选菜单、已选条件、编辑式网格与咨询入口。
 * 输入：公开行程目录与 URL 查询参数。
 * 输出：可筛选、可排序、可分享链接的行程列表。
 * 不负责：筛选算法与 URL 同步（复用 lib/tours/journey-filter 与 use-journey-filters）、卡片外观。
 */

import { ArrowRight, Check, ChevronDown, Search, X } from "lucide-react";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import {
  defaultJourneyFilters,
  filterJourneys,
  type JourneyFilterState,
} from "@/lib/tours/journey-filter";
import { useJourneyFilters } from "@/lib/tours/use-journey-filters";

import { JourneyCard } from "./journey-card";
import styles from "./journey-explorer.module.css";

type FacetKey = "duration" | "travelStyle" | "destination" | "pace" | "need";
type Option = { value: string; label: string };

const types = [
  { label: "All journeys", format: "all", scope: "all" },
  { label: "Day tours", format: "day-tour", scope: "all" },
  { label: "Single-city stays", format: "multi-day", scope: "single-city" },
  { label: "Multi-city journeys", format: "multi-day", scope: "multi-city" },
] as const;

const facets: Array<{ key: FacetKey; label: string; single?: boolean; options: Option[] }> = [
  {
    key: "duration",
    label: "Length",
    options: [
      { value: "one-day", label: "1 day" },
      { value: "four-seven", label: "4–7 days" },
      { value: "eight-eleven", label: "8–11 days" },
      { value: "twelve-plus", label: "12+ days" },
    ],
  },
  {
    key: "travelStyle",
    label: "Interests",
    options: [
      { value: "first-trip", label: "First China trip" },
      { value: "culture", label: "Culture & history" },
      { value: "nature", label: "Nature & scenery" },
      { value: "family", label: "Family travel" },
      { value: "food", label: "Food & local life" },
      { value: "wellness", label: "Wellness & slower pace" },
      { value: "wildlife", label: "Wildlife" },
      { value: "photography", label: "Photography" },
      { value: "business", label: "Business" },
    ],
  },
  {
    key: "destination",
    label: "Region",
    options: [
      { value: "north", label: "Northern China" },
      { value: "east", label: "Eastern China" },
      { value: "southwest", label: "Southwest China" },
      { value: "south", label: "Southern China" },
      { value: "northwest", label: "Northwest China" },
    ],
  },
  {
    key: "pace",
    label: "Pace",
    options: [
      { value: "easy", label: "Easy · room to linger" },
      { value: "balanced", label: "Balanced" },
      { value: "active", label: "Active · full of discovery" },
    ],
  },
  {
    key: "need",
    label: "Your needs",
    single: true,
    options: [
      { value: "muslim-friendly", label: "Muslim-friendly" },
      { value: "women-traveler-support", label: "Women travelers" },
      { value: "vegetarian-friendly", label: "Vegetarian-friendly" },
      { value: "slower-pacing", label: "Slower pacing" },
      { value: "child-friendly", label: "Child-friendly" },
      { value: "mobility-aware", label: "Mobility-aware" },
      { value: "quiet-luxury", label: "Quiet luxury" },
      { value: "food-focused", label: "Food-focused" },
      { value: "photography-led", label: "Photography-led" },
    ],
  },
];

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: low to high" },
  { value: "duration-low", label: "Shortest first" },
  { value: "duration-high", label: "Longest first" },
] as const;

const labelFor = (key: FacetKey, value: string) =>
  facets.find((facet) => facet.key === key)?.options.find((option) => option.value === value)
    ?.label ?? value;

function selectedValues(filters: JourneyFilterState, key: FacetKey): string[] {
  if (key === "need") return filters.need ? [filters.need] : [];
  return filters[key] as string[];
}

function hasActiveFilters(filters: JourneyFilterState) {
  return (
    filters.format !== "all" ||
    filters.scope !== "all" ||
    filters.destination.length > 0 ||
    filters.duration.length > 0 ||
    filters.travelStyle.length > 0 ||
    filters.need !== null ||
    filters.query.trim().length > 0 ||
    filters.collection !== "all" ||
    filters.experience !== "all" ||
    filters.pace.length > 0
  );
}

export function JourneyExplorer({
  items,
  initialQueryString = "",
}: {
  items: JourneyCatalogItem[];
  initialQueryString?: string;
}) {
  const { filters, update } = useJourneyFilters(initialQueryString);
  const [openFacet, setOpenFacet] = useState<FacetKey | null>(null);
  const bar = useRef<HTMLDivElement>(null);

  // Menus close on outside press and Escape so the filter bar never traps the page.
  useEffect(() => {
    if (!openFacet) return;
    const onPress = (event: PointerEvent) => {
      if (!bar.current?.contains(event.target as Node)) setOpenFacet(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenFacet(null);
    };
    document.addEventListener("pointerdown", onPress);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPress);
      document.removeEventListener("keydown", onKey);
    };
  }, [openFacet]);

  const set = (patch: Partial<JourneyFilterState>, mode: "push" | "replace" = "push") =>
    update({ ...filters, ...patch }, mode);
  const reset = () => update(defaultJourneyFilters);

  const active = hasActiveFilters(filters);
  const filtered = filterJourneys(items, filters);
  // Journeys still waiting for photography never lead the grid.
  const results = [
    ...filtered.filter((item) => item.visualStatus !== "pending"),
    ...filtered.filter((item) => item.visualStatus === "pending"),
  ];
  const featured =
    !active && filters.sort === "recommended" && results[0]?.visualStatus !== "pending"
      ? results[0]
      : undefined;
  const ctaAfter = featured ? 7 : 6;

  const toggle = (key: FacetKey, value: string, single?: boolean) => {
    if (single) {
      set({ need: filters.need === value ? null : (value as JourneyFilterState["need"]) });
      return;
    }
    const current = selectedValues(filters, key);
    const next = current.includes(value)
      ? current.filter((entry) => entry !== value)
      : [...current, value];
    set({ [key]: next } as Partial<JourneyFilterState>);
  };

  const chips: Array<{ id: string; label: string; remove: () => void }> = [];
  const activeType = types.find((t) => t.format === filters.format && t.scope === filters.scope);
  if (!activeType && (filters.format !== "all" || filters.scope !== "all")) {
    chips.push({
      id: "type",
      label: "Custom type",
      remove: () => set({ format: "all", scope: "all" }),
    });
  }
  for (const facet of facets) {
    for (const value of selectedValues(filters, facet.key)) {
      chips.push({
        id: `${facet.key}:${value}`,
        label: labelFor(facet.key, value),
        remove: () => toggle(facet.key, value, facet.single),
      });
    }
  }
  if (filters.query.trim()) {
    chips.push({
      id: "query",
      label: `“${filters.query.trim()}”`,
      remove: () => set({ query: "" }, "replace"),
    });
  }

  return (
    <section id="journey-catalog" className={styles.explorer} aria-labelledby="explorer-title">
      <header className={styles.intro}>
        <p className={styles.eyebrow}>The journeys</p>
        <h2 id="explorer-title">Choose a place to begin.</h2>
        <p>
          Every route is private and adjustable. Pick the one closest to your trip, then we shape
          the days around you.
        </p>
      </header>

      <div className={styles.bar} ref={bar}>
        <div className={styles.barTop}>
          <div className={styles.tabs} role="group" aria-label="Journey type">
            {types
              .filter(
                (type) =>
                  type.format === "all" ||
                  filterJourneys(items, {
                    ...defaultJourneyFilters,
                    format: type.format,
                    scope: type.scope,
                  }).length > 0,
              )
              .map((type) => {
                const count = filterJourneys(items, {
                  ...filters,
                  format: type.format,
                  scope: type.scope,
                }).length;
                return (
                  <button
                    key={type.label}
                    type="button"
                    aria-pressed={filters.format === type.format && filters.scope === type.scope}
                    onClick={() => set({ format: type.format, scope: type.scope })}
                  >
                    {type.label}
                    <span>{count}</span>
                  </button>
                );
              })}
          </div>
          <label className={styles.search}>
            <Search size={17} aria-hidden="true" />
            <span className="sr-only">Search journeys</span>
            <input
              type="search"
              placeholder="Search a city or experience"
              value={filters.query}
              onChange={(event) => set({ query: event.target.value }, "replace")}
            />
          </label>
        </div>

        <div className={styles.barBottom}>
          <div className={styles.facets}>
            {facets.map((facet) => {
              const values = selectedValues(filters, facet.key);
              const open = openFacet === facet.key;
              return (
                <div className={styles.facet} key={facet.key}>
                  <button
                    type="button"
                    className={styles.facetButton}
                    aria-expanded={open}
                    aria-haspopup="true"
                    data-active={values.length > 0}
                    onClick={() => setOpenFacet(open ? null : facet.key)}
                  >
                    {facet.label}
                    {values.length > 0 && <b>{values.length}</b>}
                    <ChevronDown size={15} aria-hidden="true" />
                  </button>
                  {open && (
                    <div className={styles.menu} role="group" aria-label={facet.label}>
                      {facet.options.map((option) => {
                        const checked = values.includes(option.value);
                        const count = filterJourneys(items, {
                          ...filters,
                          ...(facet.key === "need"
                            ? { need: option.value as JourneyFilterState["need"] }
                            : { [facet.key]: [option.value] }),
                        }).length;
                        return (
                          <button
                            key={option.value}
                            type="button"
                            role={facet.single ? "radio" : "checkbox"}
                            aria-checked={checked}
                            disabled={!checked && count === 0}
                            onClick={() => toggle(facet.key, option.value, facet.single)}
                          >
                            <i aria-hidden="true">{checked && <Check size={13} />}</i>
                            <span>{option.label}</span>
                            <small>{count}</small>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <label className={styles.sort}>
            <span>Sort</span>
            <select
              aria-label="Sort journeys"
              value={filters.sort}
              onChange={(event) =>
                set({ sort: event.target.value as JourneyFilterState["sort"] }, "replace")
              }
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className={styles.status}>
          <p role="status">
            <strong>{results.length}</strong> {results.length === 1 ? "journey" : "journeys"}
            {filters.sort === "price-low" ? " · compared per person at the stated party size" : ""}
          </p>
          {chips.length > 0 && (
            <ul className={styles.chips} aria-label="Active filters">
              {chips.map((chip) => (
                <li key={chip.id}>
                  <button type="button" onClick={chip.remove} aria-label={`Remove ${chip.label}`}>
                    {chip.label} <X size={13} aria-hidden="true" />
                  </button>
                </li>
              ))}
              <li>
                <button type="button" className={styles.clear} onClick={reset}>
                  Clear all
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      {results.length > 0 ? (
        <div className={styles.grid} aria-label="Journey results">
          {results.map((item, index) => (
            <Fragment key={item.slug}>
              <div
                className={styles.cell}
                data-featured={featured?.slug === item.slug ? "true" : undefined}
              >
                <JourneyCard item={item} featured={featured?.slug === item.slug} />
              </div>
              {index + 1 === ctaAfter && results.length > ctaAfter + 1 && <HelpTile />}
            </Fragment>
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <h3>No journey matches every choice yet.</h3>
          <p>
            Remove a filter to see more routes, or tell us what you have in mind. Every journey can
            be reshaped, and a specialist will reply within 24 hours.
          </p>
          <div>
            <button type="button" onClick={reset}>
              Show all journeys
            </button>
            <Link href="/start-planning">
              Start planning <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}

      {results.length > 0 && results.length <= ctaAfter + 1 && <HelpTile />}
    </section>
  );
}

function HelpTile() {
  return (
    <aside className={styles.help} aria-label="Plan with a specialist">
      <div>
        <p className={styles.eyebrow}>Not sure which fits?</p>
        <h3>Tell us your dates and what you love. We’ll point you to the right route.</h3>
        <p>
          A China-based specialist replies on WhatsApp, normally within 24 hours. No payment, no
          obligation.
        </p>
      </div>
      <div className={styles.helpActions}>
        <Link href="/start-planning?source=journeys-help-tile" className={styles.helpPrimary}>
          Start planning <ArrowRight size={16} aria-hidden="true" />
        </Link>
        <a href="https://wa.me/8618027438191" className={styles.helpSecondary}>
          <WhatsAppIcon aria-hidden="true" /> WhatsApp our team
        </a>
      </div>
    </aside>
  );
}
