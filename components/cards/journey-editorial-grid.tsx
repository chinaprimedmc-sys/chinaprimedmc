"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import type { JourneyCatalogItem } from "@/content/tours/catalog";

type JourneyEditorialGridProps = {
  items: JourneyCatalogItem[];
};

export function JourneyEditorialGrid({ items }: JourneyEditorialGridProps) {
  const [filters, setFilters] = useState<JourneyFilters>({
    style: null,
    destination: null,
    length: null,
    bestFor: null,
  });
  const filteredItems = useMemo(
    () => items.filter((item) => matchesFilters(item, filters)),
    [filters, items],
  );
  const filterGroups = useMemo(() => createFilterGroups(items), [items]);

  function updateFilter(key: FilterKey, value: string | null) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <div className="grid gap-10">
      <CatalogFilters
        filters={filters}
        groups={filterGroups}
        hasFilters={hasFilters}
        onChange={updateFilter}
        onClear={() => setFilters({ style: null, destination: null, length: null, bestFor: null })}
      />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-14">
        {filteredItems.length ? (
          filteredItems.map((item, index) =>
            item.kind === "featured" ? (
              <FeaturedJourneyCard key={item.slug} item={item} />
            ) : (
              <FrameworkJourneyCard key={item.slug} item={item} index={index} />
            ),
          )
        ) : (
          <div className="border-border border-y py-10 lg:col-span-12">
            <p className="text-foreground text-lg">No journey matches those choices yet.</p>
            <p className="text-muted mt-2 text-base leading-7">
              Clear one filter or start a conversation and we will shape a route around your
              priorities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

type FilterKey = "style" | "destination" | "length" | "bestFor";

type JourneyFilters = Record<FilterKey, string | null>;

type FilterGroupDefinition = {
  key: FilterKey;
  label: string;
  allLabel: string;
  values: string[];
};

function createFilterGroups(items: JourneyCatalogItem[]): FilterGroupDefinition[] {
  return [
    {
      key: "style",
      label: "Travel style",
      allLabel: "All styles",
      values: unique(items.flatMap((item) => item.styleFilters)),
    },
    {
      key: "destination",
      label: "Destination",
      allLabel: "All destinations",
      values: unique(items.flatMap((item) => item.destinationFilters)),
    },
    {
      key: "length",
      label: "Trip length",
      allLabel: "Any length",
      values: unique(items.map((item) => item.durationLabel)),
    },
    {
      key: "bestFor",
      label: "Best for",
      allLabel: "Everyone",
      values: unique(items.flatMap((item) => item.bestForFilters)),
    },
  ];
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}

function matchesFilters(item: JourneyCatalogItem, filters: JourneyFilters) {
  if (filters.style && !item.styleFilters.includes(filters.style)) return false;
  if (filters.destination && !item.destinationFilters.includes(filters.destination)) return false;
  if (filters.length && item.durationLabel !== filters.length) return false;
  if (filters.bestFor && !item.bestForFilters.includes(filters.bestFor)) return false;
  return true;
}

function CatalogFilters({
  filters,
  groups,
  hasFilters,
  onChange,
  onClear,
}: {
  filters: JourneyFilters;
  groups: FilterGroupDefinition[];
  hasFilters: boolean;
  onChange: (key: FilterKey, value: string | null) => void;
  onClear: () => void;
}) {
  return (
    <div className="border-border grid gap-5 border-y py-6">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="text-muted text-xs font-semibold tracking-[0.16em] uppercase">
            Refine the shape
          </p>
          <p className="text-muted mt-2 max-w-xl text-sm leading-6">
            Filter by the kind of journey you want to shape. Results update around the route details
            currently available.
          </p>
        </div>
        {hasFilters ? (
          <button
            type="button"
            onClick={onClear}
            className="shrink-0 rounded-full border border-white/80 bg-white/56 px-4 py-2.5 text-xs font-semibold tracking-[0.08em] text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-xl transition hover:bg-white/86 hover:shadow-[var(--button-glass-shadow)]"
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="grid gap-5 overflow-x-auto pb-1 md:grid-cols-4 md:overflow-visible">
        {groups.map((group) => (
          <FilterGroup
            key={group.key}
            group={group}
            selected={filters[group.key]}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}

function styleHref(style: string) {
  const slugs: Record<string, string> = {
    "Quiet Luxury": "luxury",
    "Slow Travel": "slow-travel",
  };
  return `/styles/${slugs[style] ?? style.toLowerCase().replaceAll(" ", "-")}`;
}

function FilterGroup({
  group,
  selected,
  onChange,
}: {
  group: FilterGroupDefinition;
  selected: string | null;
  onChange: (key: FilterKey, value: string | null) => void;
}) {
  return (
    <div className="min-w-[17rem]">
      <p className="text-muted mb-3 text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
        {group.label}
      </p>
      <div className="flex flex-wrap gap-2">
        {[group.allLabel, ...group.values].map((value, index) => {
          const active = index === 0 ? selected === null : selected === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(group.key, index === 0 ? null : value)}
              className={
                active
                  ? "min-h-10 rounded-full border border-white bg-white/92 px-4 text-xs font-semibold tracking-[0.04em] text-[var(--text-primary)] shadow-[var(--button-glass-shadow)] backdrop-blur-xl"
                  : "min-h-10 rounded-full border border-white/72 bg-white/38 px-4 text-xs font-medium tracking-[0.04em] text-[var(--text-secondary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-xl transition hover:border-white hover:bg-white/74 hover:text-[var(--text-primary)]"
              }
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FeaturedJourneyCard({ item }: { item: JourneyCatalogItem }) {
  return (
    <article className="group relative min-h-[32rem] overflow-hidden rounded-md bg-[var(--bg-secondary)] lg:col-span-12 lg:min-h-[42rem]">
      <Link href={item.href} className="absolute inset-0 z-0" aria-label={`View ${item.title}`}>
        <OptimizedImage
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width:1024px) 92vw, 100vw"
          objectPosition={item.image.objectPosition}
          frameClassName="h-full"
          className="h-full w-full"
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/38 to-black/8" />
      <div className="relative z-10 grid min-h-[32rem] content-end gap-5 p-6 text-white md:min-h-[42rem] md:max-w-4xl md:p-10">
        <div className="pointer-events-auto flex flex-wrap gap-2">
          <span className="rounded border border-white/35 bg-white/12 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] uppercase backdrop-blur-md">
            {item.eyebrow}
          </span>
          {item.styleFilters.map((style) => (
            <Link
              key={style}
              href={styleHref(style)}
              className="rounded border border-white/25 bg-white/8 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] uppercase backdrop-blur-md"
            >
              {style}
            </Link>
          ))}
        </div>
        <div>
          <Link href={item.href} className="pointer-events-auto block">
            <h2 className="max-w-3xl font-serif text-4xl leading-[0.98] font-medium tracking-[-0.02em] md:text-7xl">
              {item.title}
            </h2>
          </Link>
          <p className="mt-4 text-xs font-medium tracking-[0.12em] text-white/75 uppercase">
            {item.routeLabel} · {item.durationLabel}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-white/84 md:text-lg">{item.hook}</p>
        </div>
        <div className="pointer-events-auto flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold">
          <DestinationLinks destinations={item.destinations} dark />
          <Link href={item.href} className="border-b border-white/55 pb-1">
            View full itinerary <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function FrameworkJourneyCard({ item, index }: { item: JourneyCatalogItem; index: number }) {
  const layout =
    index % 3 === 1 ? "lg:col-span-5" : index % 3 === 2 ? "lg:col-span-7" : "lg:col-span-6";
  const portrait = item.image.height && item.image.width && item.image.height > item.image.width;

  return (
    <article className={`grid content-start gap-5 ${layout}`}>
      <Link
        href={item.href}
        className={`block overflow-hidden rounded-md bg-[var(--bg-secondary)] ${portrait ? "aspect-[3/4] md:aspect-[4/5]" : "aspect-[5/3]"}`}
      >
        <OptimizedImage
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(min-width:1024px) 50vw, 100vw"
          objectPosition={item.image.objectPosition}
          frameClassName="h-full"
          className="h-full w-full"
        />
      </Link>
      <div className="border-border grid gap-5 border-t pt-5">
        <div className="grid gap-3">
          <div className="flex flex-wrap gap-2">
            <span className="border-border text-muted rounded border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] uppercase">
              {item.eyebrow}
            </span>
            {item.styleFilters.map((style) => (
              <Link
                key={style}
                href={styleHref(style)}
                className="border-border bg-background text-muted rounded border px-3 py-1 text-[0.68rem] font-semibold tracking-[0.14em] uppercase"
              >
                {style}
              </Link>
            ))}
          </div>
          <div>
            <Link href={item.href} className="block">
              <h2
                className={`text-foreground font-serif leading-[1.02] font-medium tracking-[-0.015em] ${portrait ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
              >
                {item.title}
              </h2>
            </Link>
            <p className="text-muted mt-3 text-xs font-medium tracking-[0.1em] uppercase">
              {item.routeLabel} · {item.durationLabel}
            </p>
            <p className="text-muted mt-3 max-w-2xl text-base leading-7">{item.hook}</p>
          </div>
        </div>
        <div className="grid gap-3">
          <DestinationLinks destinations={item.destinations} />
          <Link href={item.href} className="text-foreground text-sm font-semibold">
            View the framework <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function DestinationLinks({
  destinations,
  dark = false,
}: {
  destinations: JourneyCatalogItem["destinations"];
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap gap-x-3 gap-y-2 text-xs font-medium tracking-[0.12em] uppercase ${dark ? "text-white/78" : "text-muted"}`}
    >
      {destinations.map((destination) => (
        <Link
          key={`${destination.label}-${destination.href}`}
          href={destination.href}
          className={dark ? "border-b border-white/35 pb-1" : "border-border border-b pb-1"}
        >
          {destination.label}
        </Link>
      ))}
    </div>
  );
}
