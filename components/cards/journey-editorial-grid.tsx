"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import { ArrowUpRight, Check, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useEffect, useMemo, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import type {
  JourneyCatalogItem,
  JourneyCommercialRoleId,
  JourneyFocusId,
  JourneyPlanningNeedId,
  JourneyTravelerId,
} from "@/content/tours/catalog";
import styles from "./journey-discovery.module.css";

type SortId = "recommended" | "shortest" | "longest" | "relaxed" | "active";
type Filters = {
  commercialRoles: JourneyCommercialRoleId[];
  focus: JourneyFocusId[];
  duration: string[];
  destinations: string[];
  pace: string[];
  walking: string[];
  altitude: string[];
  transport: string[];
  travellers: JourneyTravelerId[];
  needs: JourneyPlanningNeedId[];
  seasons: string[];
};

const emptyFilters: Filters = {
  commercialRoles: [],
  focus: [],
  duration: [],
  destinations: [],
  pace: [],
  walking: [],
  altitude: [],
  transport: [],
  travellers: [],
  needs: [],
  seasons: [],
};
const commercialRoleOptions: Array<[JourneyCommercialRoleId, string, string]> = [
  ["signature", "Signature journeys", "Our most distinctive, experience-rich private journeys"],
  ["essential", "First trip to China", "The clearest routes for seeing China's defining contrasts"],
  ["nature", "Nature and scenery", "Pandas, mountain landscapes and regional food culture"],
  [
    "extension",
    "Private extensions",
    "Focused city and regional journeys to combine with a longer trip",
  ],
];
const focusOptions: Array<[JourneyFocusId, string]> = [
  ["first-trip", "First trip to China"],
  ["culture", "History & culture"],
  ["food", "Food & local life"],
  ["nature", "Nature & scenery"],
  ["wildlife", "Wildlife & pandas"],
  ["family", "Family time"],
  ["photography", "Photography"],
  ["slow-travel", "Slow travel"],
];
const durationOptions = [
  ["3-5", "3–5 days"],
  ["6-8", "6–8 days"],
  ["9-11", "9–11 days"],
  ["12-14", "12–14 days"],
  ["15+", "15+ days"],
] as const;
const paceOptions = [
  ["easy", "Easy-going"],
  ["balanced", "Balanced"],
  ["active", "More active"],
] as const;
const walkingOptions = [
  ["minimal", "Minimal walking"],
  ["moderate", "Moderate walking"],
  ["active", "Active walking"],
] as const;
const altitudeOptions = [
  ["none", "No high-altitude stays"],
  ["some", "Some altitude"],
  ["high", "High-altitude travel"],
] as const;
const transportOptions = [
  ["fewer", "Prefer fewer transfers"],
  ["high-speed-rail", "High-speed rail included"],
  ["domestic-flight", "Domestic flights included"],
] as const;
const travellerOptions: Array<[JourneyTravelerId, string]> = [
  ["couples", "Couples"],
  ["families", "Families"],
  ["multigenerational", "Multi-generational groups"],
  ["solo-travelers", "Solo travellers"],
];
const planningNeedOptions: Array<[JourneyPlanningNeedId, string]> = [
  ["muslim-friendly", "Muslim-friendly planning"],
  ["women-traveler-support", "Support for women travelers"],
  ["slower-pacing", "A slower, easier pace"],
  ["child-friendly", "Child-friendly planning"],
  ["mobility-aware", "Mobility-aware planning"],
  ["vegetarian-friendly", "Vegetarian-friendly planning"],
];
const seasonOptions = [
  ["spring", "Spring"],
  ["summer", "Summer"],
  ["autumn", "Autumn"],
  ["winter", "Winter"],
] as const;
const sortOptions: Array<[SortId, string]> = [
  ["recommended", "Recommended"],
  ["shortest", "Shortest first"],
  ["longest", "Longest first"],
  ["relaxed", "More relaxed first"],
  ["active", "More active first"],
];

export function JourneyEditorialGrid({
  items,
  initialQueryString = "",
  hero,
}: {
  items: JourneyCatalogItem[];
  initialQueryString?: string;
  hero?: {
    eyebrow: string;
    title: string;
    description: string;
    service?: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{
        title: string;
        detail: string;
      }>;
      confirmation: string;
      planningHref: string;
    };
  };
}) {
  const heroContent = hero ?? {
    eyebrow: "AVIORA · Private China Tours 2026–2027",
    title: "Choose the China Journey That Fits You.",
    description:
      "Compare signature journeys, first-trip routes, nature journeys and private extensions. Published prices are shown per guest for a private party of four.",
    service: undefined,
  };
  const initialUrlState = getInitialUrlState(initialQueryString);
  const [query, setQuery] = useState(initialUrlState.query);
  const deferredQuery = useDeferredValue(query);
  const [filters, setFilters] = useState<Filters>(initialUrlState.filters);
  const [sort, setSort] = useState<SortId>(initialUrlState.sort);
  const [limit, setLimit] = useState(12);
  const destinations = useMemo(
    () => Array.from(new Set(items.flatMap((item) => item.destinationFilters))).sort(),
    [items],
  );
  const results = useMemo(
    () =>
      sortItems(
        items.filter((item) => matches(item, filters, deferredQuery)),
        sort,
      ),
    [items, filters, deferredQuery, sort],
  );
  const active = Object.values(filters).flat().length;
  const summary = getSummary(filters, query);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    Object.entries(filters).forEach(([key, values]) => {
      if (values.length) params.set(key, values.join(","));
    });
    if (sort !== "recommended") params.set("sort", sort);
    history.replaceState(null, "", `${location.pathname}${params.size ? `?${params}` : ""}`);
  }, [filters, query, sort]);

  const toggle = <K extends keyof Filters>(key: K, value: Filters[K][number]) =>
    setFilters((current) => ({
      ...current,
      [key]: current[key].includes(value as never)
        ? current[key].filter((item) => item !== value)
        : [...current[key], value],
    }));
  const reset = () => {
    setFilters(emptyFilters);
    setQuery("");
    setLimit(12);
  };
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <OptimizedImage
          src="/home/jiuzhaigou-five-flower-lake.webp"
          alt="Autumn forest reflected in the turquoise lakes of Jiuzhaigou Valley"
          fill
          sizes="100vw"
          priority
          frameClassName="absolute inset-0 h-full w-full bg-[#151816]"
          className="object-cover"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <p>{heroContent.eyebrow}</p>
          <h1>{heroContent.title}</h1>
          <span>{heroContent.description}</span>
        </div>
      </section>
      {!heroContent.service ? (
        <section className={styles.catalogAssurance} aria-label="AVIORA service assurance">
          <div>
            <span>
              <Check aria-hidden="true" /> Licensed inbound tourism operator in China
            </span>
            <span>
              <Check aria-hidden="true" /> Private guides and vehicles for your party
            </span>
            <span>
              <Check aria-hidden="true" /> No compulsory shopping stops
            </span>
            <Link href="/about">
              Verify the China operator <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      ) : null}
      {heroContent.service ? (
        <section className={styles.profileService} aria-labelledby="journey-profile-service-title">
          <div className={styles.profileServiceInner}>
            <div className={styles.profileServiceHeader}>
              <div>
                <p>{heroContent.service.eyebrow}</p>
                <h2 id="journey-profile-service-title">{heroContent.service.title}</h2>
              </div>
              <div className={styles.profileServiceIntroduction}>
                <p>{heroContent.service.description}</p>
                <Link href={heroContent.service.planningHref}>
                  Plan Around My Needs
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </div>

            <ul className={styles.profileServiceList}>
              {heroContent.service.items.map((item) => (
                <li key={item.title}>
                  <Check aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className={styles.profileServiceConfirmation}>
              <Check aria-hidden="true" />
              <span>{heroContent.service.confirmation}</span>
            </p>
          </div>
        </section>
      ) : null}
      <section className={styles.discovery} id="journey-discovery">
        <div className={styles.discoveryHead}>
          <div>
            <p className={styles.eyebrow}>Journey discovery</p>
            <h2>Find Your Ideal China Journey.</h2>
          </div>
          <p>
            Search by destination, trip length or travel style. Every route is private and can be
            tailored around you.
          </p>
        </div>
        <div className={styles.journeyPaths} aria-label="Choose a journey collection">
          <p>Choose a starting point</p>
          <div>
            {commercialRoleOptions.map(([value, label, description]) => {
              const selected = filters.commercialRoles.includes(value);
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() =>
                    setFilters((current) => ({
                      ...current,
                      commercialRoles: selected ? [] : [value],
                    }))
                  }
                >
                  <strong>{label}</strong>
                  <span>{description}</span>
                </button>
              );
            })}
          </div>
        </div>
        <label className={styles.search}>
          <Search size={17} strokeWidth={1.7} aria-hidden="true" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by city, experience or journey name"
            aria-label="Search journeys"
          />
          {query ? (
            <button onClick={() => setQuery("")} aria-label="Clear search">
              <X size={18} />
            </button>
          ) : null}
        </label>
        <MobileTools
          resultCount={results.length}
          active={active}
          filters={filters}
          destinations={destinations}
          toggle={toggle}
          reset={reset}
          items={items}
        />
        <MobileJourneySearch query={query} setQuery={setQuery} resultCount={results.length} />
        {summary ? (
          <div className={styles.summary}>
            <span>{summary}</span>
            <button onClick={reset}>Clear filters</button>
          </div>
        ) : null}
        <div className={styles.layout}>
          <aside className={styles.filterRail} aria-label="Journey filters">
            <div className={styles.filterTitle}>
              <span>Filters</span>
              {active ? <button onClick={reset}>Clear all</button> : null}
            </div>
            <FilterSections
              filters={filters}
              destinations={destinations}
              toggle={toggle}
              items={items}
            />
          </aside>
          <div className={styles.results}>
            <div className={styles.resultBar}>
              <p aria-live="polite">
                <strong>{results.length}</strong> {results.length === 1 ? "journey" : "journeys"}
              </p>
              <div className={styles.sortControl}>
                <span>Sort by</span>
                <Select.Root value={sort} onValueChange={(value) => setSort(value as SortId)}>
                  <Select.Trigger className={styles.sortTrigger} aria-label="Sort journeys">
                    <Select.Value />
                    <Select.Icon>
                      <ChevronDown size={14} strokeWidth={1.7} aria-hidden="true" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      className={styles.sortMenu}
                      position="popper"
                      sideOffset={7}
                      align="end"
                    >
                      <Select.Viewport>
                        {sortOptions.map(([value, label]) => (
                          <Select.Item className={styles.sortOption} key={value} value={value}>
                            <Select.ItemText>{label}</Select.ItemText>
                            <Select.ItemIndicator className={styles.sortIndicator}>
                              <Check size={13} strokeWidth={2} aria-hidden="true" />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            </div>
            {results.length ? (
              <>
                <div className={styles.grid}>
                  {results.slice(0, limit).map((item) => (
                    <JourneyResult
                      key={item.slug}
                      item={item}
                      reason={matchReason(item, filters, deferredQuery)}
                    />
                  ))}
                </div>
                {limit < results.length ? (
                  <button
                    className={styles.loadMore}
                    onClick={() => setLimit((value) => value + 12)}
                  >
                    Load more journeys <span>{Math.min(12, results.length - limit)} more</span>
                  </button>
                ) : null}
              </>
            ) : (
              <NoResults reset={reset} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterSections({
  filters,
  destinations,
  toggle,
  items,
}: {
  filters: Filters;
  destinations: string[];
  toggle: <K extends keyof Filters>(key: K, value: Filters[K][number]) => void;
  items: JourneyCatalogItem[];
}) {
  return (
    <div className={styles.filterSections}>
      <FilterGroup
        title="Journey collection"
        options={commercialRoleOptions.map(([value, label]) => [value, label])}
        selected={filters.commercialRoles}
        onToggle={(v) => toggle("commercialRoles", v as JourneyCommercialRoleId)}
        count={(v) => items.filter((i) => i.commercialRole === v).length}
      />
      <FilterGroup
        title="Travel focus"
        options={focusOptions}
        selected={filters.focus}
        onToggle={(v) => toggle("focus", v as JourneyFocusId)}
        count={(v) => items.filter((i) => i.discovery.focus.includes(v as JourneyFocusId)).length}
      />
      <FilterGroup
        title="Duration"
        options={durationOptions}
        selected={filters.duration}
        onToggle={(v) => toggle("duration", v)}
        count={(v) => items.filter((i) => durationMatch(i, v)).length}
      />
      <FilterGroup
        title="Destinations"
        options={destinations.map((value) => [value, value])}
        selected={filters.destinations}
        onToggle={(v) => toggle("destinations", v)}
        count={(v) => items.filter((i) => i.destinationFilters.includes(v)).length}
      />
      <FilterGroup
        title="Travel pace"
        options={paceOptions}
        selected={filters.pace}
        onToggle={(v) => toggle("pace", v)}
        count={(v) => items.filter((i) => i.discovery.pace === v).length}
      />
      <details>
        <summary>
          Travel details <ChevronDown size={16} />
        </summary>
        <FilterGroup
          title="Walking level"
          options={walkingOptions}
          selected={filters.walking}
          onToggle={(v) => toggle("walking", v)}
        />
        <FilterGroup
          title="Altitude"
          options={altitudeOptions}
          selected={filters.altitude}
          onToggle={(v) => toggle("altitude", v)}
        />
        <FilterGroup
          title="Intercity travel"
          options={transportOptions}
          selected={filters.transport}
          onToggle={(v) => toggle("transport", v)}
        />
        <FilterGroup
          title="Who is travelling?"
          options={travellerOptions}
          selected={filters.travellers}
          onToggle={(v) => toggle("travellers", v as JourneyTravelerId)}
        />
        <FilterGroup
          title="Planning preferences"
          options={planningNeedOptions}
          selected={filters.needs}
          onToggle={(v) => toggle("needs", v as JourneyPlanningNeedId)}
          count={(v) =>
            items.filter((i) => i.planningNeedFilters.includes(v as JourneyPlanningNeedId)).length
          }
        />
        <FilterGroup
          title="Best time to travel"
          options={seasonOptions}
          selected={filters.seasons}
          onToggle={(v) => toggle("seasons", v)}
        />
      </details>
    </div>
  );
}

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
  count,
}: {
  title: string;
  options: readonly (readonly [string, string])[];
  selected: readonly string[];
  onToggle: (value: string) => void;
  count?: (value: string) => number;
}) {
  return (
    <fieldset className={styles.filterGroup}>
      <legend>{title}</legend>
      {options.map(([value, label]) => {
        const total = count?.(value);
        return (
          <label key={value} data-disabled={total === 0}>
            <input
              type="checkbox"
              checked={selected.includes(value)}
              disabled={total === 0}
              onChange={() => onToggle(value)}
            />
            <span>{label}</span>
            {typeof total === "number" ? <small>{total}</small> : null}
          </label>
        );
      })}
    </fieldset>
  );
}

function MobileTools(props: {
  resultCount: number;
  active: number;
  filters: Filters;
  destinations: string[];
  toggle: <K extends keyof Filters>(key: K, value: Filters[K][number]) => void;
  reset: () => void;
  items: JourneyCatalogItem[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openFilters = () => setOpen(true);
    window.addEventListener("aviora:open-journey-filters", openFilters);
    return () => window.removeEventListener("aviora:open-journey-filters", openFilters);
  }, []);

  return (
    <div className={styles.mobileTools}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button type="button">
            <span>
              <SlidersHorizontal size={17} />
              Filter journeys {props.active ? `(${props.active})` : ""}
            </span>
            <strong>{props.resultCount} matches</strong>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.sheetOverlay} />
          <Dialog.Content className={styles.sheet}>
            <div className={styles.sheetHead}>
              <Dialog.Title>Filter journeys</Dialog.Title>
              <button onClick={props.reset}>Reset</button>
              <Dialog.Close aria-label="Close filters">
                <X size={20} />
              </Dialog.Close>
            </div>
            <div className={styles.sheetBody}>
              <FilterSections
                filters={props.filters}
                destinations={props.destinations}
                toggle={props.toggle}
                items={props.items}
              />
            </div>
            <div className={styles.sheetFoot}>
              <p>{props.resultCount} journeys match your selection</p>
              <Dialog.Close>View {props.resultCount} journeys</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function MobileJourneySearch({
  query,
  setQuery,
  resultCount,
}: {
  query: string;
  setQuery: (value: string) => void;
  resultCount: number;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openSearch = () => setOpen(true);
    window.addEventListener("aviora:open-journey-search", openSearch);
    return () => window.removeEventListener("aviora:open-journey-search", openSearch);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.mobileSearchOverlay} />
        <Dialog.Content className={styles.mobileSearchSheet}>
          <div className={styles.mobileSearchHead}>
            <Dialog.Title>Find a journey</Dialog.Title>
            <Dialog.Close aria-label="Close journey search">
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <label className={styles.mobileSearchField}>
            <Search size={16} strokeWidth={1.7} aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="City, experience or journey"
              aria-label="Search journeys on mobile"
              autoFocus
            />
            {query ? (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                <X size={16} aria-hidden="true" />
              </button>
            ) : null}
          </label>
          <div className={styles.mobileSearchFoot}>
            <span>
              {resultCount} {resultCount === 1 ? "journey" : "journeys"}
            </span>
            <Dialog.Close>View results</Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function JourneyResult({ item, reason }: { item: JourneyCatalogItem; reason: string }) {
  const displayTitle = getDisplayTitle(item.title);

  return (
    <article className={styles.card}>
      <div className={styles.photoStage}>
        <Link href={item.href}>
          <OptimizedImage
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1000px) 38vw, 100vw"
            frameClassName="absolute inset-0 h-full w-full"
            className="object-cover"
          />
        </Link>
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <p>{item.durationLabel}</p>
          <span>{item.commercialRoleLabel}</span>
        </div>
        <Link href={item.href}>
          <h3>{displayTitle}</h3>
        </Link>
        <span>{item.hook}</span>
        <ul className={styles.moments} aria-label="Signature moments">
          {item.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight}>
              <Check size={13} aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className={styles.price}>
          <strong>From US${item.pricing.fromUsd.toLocaleString("en-US")}</strong>
          <span>per person · 4 guests sharing 2 rooms</span>
        </div>
        {reason ? (
          <div className={styles.match}>
            <strong>Why it matches</strong>
            {reason}
          </div>
        ) : null}
        <dl>
          <div>
            <dt>Best for</dt>
            <dd>{item.bestForSummary}</dd>
          </div>
          <div>
            <dt>Walking</dt>
            <dd>{capitalize(item.discovery.walkingLevel)}</dd>
          </div>
        </dl>
        <div className={styles.cardActions}>
          <Link className={styles.view} href={item.href}>
            <span>View itinerary</span>
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </Link>
          <Link
            className={styles.quote}
            href={`/start-planning?source=journey-catalog&journey=${item.slug}`}
          >
            Request private proposal
          </Link>
        </div>
      </div>
    </article>
  );
}

function NoResults({ reset }: { reset: () => void }) {
  return (
    <div className={styles.noResults}>
      <p className={styles.eyebrow}>No exact match</p>
      <h3>No journeys match all of these choices.</h3>
      <p>
        Remove one practical condition to see nearby routes, or let a specialist design around the
        complete brief.
      </p>
      <div>
        <button onClick={reset}>Clear all filters</button>
        <Link href="/start-planning?source=journey-filter-empty">
          Speak with a China specialist →
        </Link>
      </div>
    </div>
  );
}

function matches(item: JourneyCatalogItem, filters: Filters, query: string) {
  const q = query.trim().toLowerCase();
  if (q && !item.discovery.searchableText.includes(q) && !daysQuery(item, q)) return false;
  if (filters.commercialRoles.length && !filters.commercialRoles.includes(item.commercialRole))
    return false;
  if (filters.focus.length && !filters.focus.some((v) => item.discovery.focus.includes(v)))
    return false;
  if (filters.duration.length && !filters.duration.some((v) => durationMatch(item, v)))
    return false;
  if (
    filters.destinations.length &&
    !filters.destinations.every((v) => item.destinationFilters.includes(v))
  )
    return false;
  if (filters.pace.length && !filters.pace.includes(item.discovery.pace)) return false;
  if (filters.walking.length && !filters.walking.includes(item.discovery.walkingLevel))
    return false;
  if (filters.altitude.length && !filters.altitude.includes(item.discovery.altitude)) return false;
  if (
    filters.transport.length &&
    !filters.transport.every((v) =>
      v === "fewer"
        ? item.discovery.hotelChanges <= 1
        : item.discovery.transport.includes(v as never),
    )
  )
    return false;
  if (
    filters.travellers.length &&
    !filters.travellers.some((v) => item.travelerFilters.includes(v))
  )
    return false;
  if (filters.needs.length && !filters.needs.some((v) => item.planningNeedFilters.includes(v)))
    return false;
  if (
    filters.seasons.length &&
    !filters.seasons.some((v) => item.discovery.seasons.includes(v as never))
  )
    return false;
  return true;
}
function durationMatch(item: JourneyCatalogItem, value: string) {
  const [min, max] = value === "15+" ? [15, 365] : value.split("-").map(Number);
  return item.recommendedDaysMin <= max && item.recommendedDaysMax >= min;
}
function daysQuery(item: JourneyCatalogItem, q: string) {
  const days = Number(q.match(/\d+/)?.[0]);
  return Boolean(days && item.recommendedDaysMin <= days && item.recommendedDaysMax >= days);
}
function sortItems(items: JourneyCatalogItem[], sort: SortId) {
  return [...items].sort((a, b) =>
    sort === "shortest"
      ? a.recommendedDaysMin - b.recommendedDaysMin
      : sort === "longest"
        ? b.recommendedDaysMax - a.recommendedDaysMax
        : sort === "relaxed"
          ? paceScore(a) - paceScore(b)
          : sort === "active"
            ? paceScore(b) - paceScore(a)
            : b.discovery.featuredRank - a.discovery.featuredRank,
  );
}
function paceScore(item: JourneyCatalogItem) {
  return item.discovery.pace === "easy" ? 0 : item.discovery.pace === "balanced" ? 1 : 2;
}
function matchReason(item: JourneyCatalogItem, filters: Filters, query: string) {
  const reasons: string[] = [];
  if (query.trim()) reasons.push(`Matches “${query.trim()}”`);
  if (filters.duration.some((v) => durationMatch(item, v))) reasons.push(item.durationLabel);
  if (filters.commercialRoles.includes(item.commercialRole)) reasons.push(item.commercialRoleLabel);
  if (filters.focus.length) {
    const focus = focusOptions.find(
      ([id]) => item.discovery.focus.includes(id) && filters.focus.includes(id),
    );
    if (focus) reasons.push(focus[1]);
  }
  if (filters.pace.includes(item.discovery.pace))
    reasons.push(`${capitalize(item.discovery.pace)} pace`);
  if (filters.altitude.includes("none") && item.discovery.altitude === "none")
    reasons.push("No high-altitude stays");
  if (filters.needs.length) {
    const need = planningNeedOptions.find(
      ([id]) => item.planningNeedFilters.includes(id) && filters.needs.includes(id),
    );
    if (need) reasons.push(need[1]);
  }
  return reasons.slice(0, 3).join(" · ");
}
function getSummary(filters: Filters, query: string) {
  const values = [
    query.trim() ? `Search: ${query.trim()}` : "",
    ...filters.commercialRoles.map((v) => commercialRoleOptions.find(([id]) => id === v)?.[1] ?? v),
    ...filters.focus.map((v) => focusOptions.find(([id]) => id === v)?.[1] ?? v),
    ...filters.duration.map((v) => durationOptions.find(([id]) => id === v)?.[1] ?? v),
    ...filters.destinations,
    ...filters.pace.map(capitalize),
    ...filters.needs.map((v) => planningNeedOptions.find(([id]) => id === v)?.[1] ?? v),
  ].filter(Boolean);
  return values.slice(0, 4).join(" · ") + (values.length > 4 ? ` · +${values.length - 4}` : "");
}
function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).replaceAll("-", " ");
}

function getDisplayTitle(title: string) {
  return title
    .replace(/^\d+-Day\s+/i, "")
    .replace(/\s+Private\s+(Tour|Journey)$/i, "")
    .trim();
}
function getInitialUrlState(queryString: string): {
  query: string;
  filters: Filters;
  sort: SortId;
} {
  const params = new URLSearchParams(queryString);
  const read = (key: keyof Filters) => params.get(key)?.split(",").filter(Boolean) ?? [];
  const sort = params.get("sort");
  return {
    query: params.get("q") ?? "",
    filters: {
      commercialRoles: read("commercialRoles") as JourneyCommercialRoleId[],
      focus: read("focus") as JourneyFocusId[],
      duration: read("duration"),
      destinations: read("destinations"),
      pace: read("pace"),
      walking: read("walking"),
      altitude: read("altitude"),
      transport: read("transport"),
      travellers: read("travellers") as JourneyTravelerId[],
      needs: read("needs") as JourneyPlanningNeedId[],
      seasons: read("seasons"),
    },
    sort: ["shortest", "longest", "relaxed", "active"].includes(sort ?? "")
      ? (sort as SortId)
      : "recommended",
  };
}
