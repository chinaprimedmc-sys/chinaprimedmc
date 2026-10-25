"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useId, useRef, useState } from "react";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import {
  defaultJourneyFilters,
  filterJourneys,
  writeJourneyFilters,
  type JourneyFilterState,
} from "@/lib/tours/journey-filter";
import { useJourneyFilters } from "@/lib/tours/use-journey-filters";
import { isDayTour } from "@/lib/tours/journey-groups";
import { JourneyCard } from "./journey-card";
import { JourneyFilterFields } from "./journey-tools";
import { MobileJourneyMatch } from "./mobile-journey-match";
import styles from "./journey-catalog.module.css";

const formats = [
  { label: "All journeys", format: "all", scope: "all" },
  { label: "Day tours", format: "day-tour", scope: "all" },
  { label: "Single-city stays", format: "multi-day", scope: "single-city" },
  { label: "Multi-city journeys", format: "multi-day", scope: "multi-city" },
] as const;

const signatureJourneySlugs = new Set([
  "first-china-beautifully-paced",
  "china-family-tour-with-pandas-12-day-private-tour",
  "luxury-yunnan-private-tour",
  "china-at-an-easier-pace-12-day-private-tour",
  "beijing-xian-chengdu-shanghai-private-11-day-tour",
  "qingcheng-mountain-private-wellness-retreat-10-day",
]);

function hasActiveFilters(filters: JourneyFilterState) {
  return (
    filters.format !== "all" ||
    filters.scope !== "all" ||
    filters.destination.length > 0 ||
    filters.duration.length > 0 ||
    filters.travelStyle.length > 0 ||
    filters.need !== null ||
    filters.query.trim().length > 0 ||
    filters.sort !== "recommended" ||
    filters.collection !== "all" ||
    filters.experience !== "all" ||
    filters.pace.length > 0
  );
}

function JourneyCollectionRail({
  title,
  eyebrow,
  description,
  items,
}: {
  title: string;
  eyebrow: string;
  description: string;
  items: JourneyCatalogItem[];
}) {
  const rail = useRef<HTMLDivElement>(null);
  return (
    <section
      className={styles.collection}
      aria-labelledby={`collection-${title.toLowerCase().replaceAll(" ", "-")}`}
    >
      <header className={styles.collectionHeader}>
        <div>
          <p>
            {eyebrow} · {items.length}
          </p>
          <h3 id={`collection-${title.toLowerCase().replaceAll(" ", "-")}`}>{title}</h3>
          <span>{description}</span>
        </div>
        <div className={styles.collectionArrows} aria-label={`${title} carousel controls`}>
          <button
            type="button"
            aria-label={`Previous ${title}`}
            onClick={() => rail.current?.scrollBy({ left: -380, behavior: "smooth" })}
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label={`Next ${title}`}
            onClick={() => rail.current?.scrollBy({ left: 380, behavior: "smooth" })}
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </div>
      </header>
      <div
        ref={rail}
        className={styles.collectionRail}
        tabIndex={0}
        aria-label={`${title} journeys`}
      >
        {items.map((item) => (
          <JourneyCard item={item} key={item.slug} />
        ))}
      </div>
    </section>
  );
}

export function JourneyCatalog({
  items,
  initialQueryString = "",
  variant = "catalog",
}: {
  items: JourneyCatalogItem[];
  initialQueryString?: string;
  variant?: "home" | "catalog" | "search";
}) {
  const { filters, update } = useJourneyFilters(initialQueryString);
  const id = useId();
  const rail = useRef<HTMLDivElement>(null);
  const [mobileBrowsing, setMobileBrowsing] = useState(
    () => variant === "catalog" && hasActiveFilters(filters),
  );
  const results = filterJourneys(items, filters);
  const activeFilters = hasActiveFilters(filters);
  const showingBrowse = mobileBrowsing || (variant === "catalog" && activeFilters);
  const showCollections = (variant === "catalog" || variant === "home") && !activeFilters;
  const signatureJourneys = results.filter(
    (item) => signatureJourneySlugs.has(item.slug) && item.visualStatus !== "pending",
  );
  const dayTours = results.filter(isDayTour);
  // Pending signature journeys fall back to this rail so every journey stays discoverable.
  const beyondTheIcons = results.filter(
    (item) =>
      !isDayTour(item) && !signatureJourneys.some((signature) => signature.slug === item.slug),
  );
  const set = (patch: Partial<JourneyFilterState>, mode: "push" | "replace" = "push") =>
    update({ ...filters, ...patch }, mode);
  const reset = () => update(defaultJourneyFilters);
  return (
    <section
      id={variant === "home" ? "journey-finder" : "journey-catalog"}
      className={styles.catalog}
      aria-labelledby={variant === "search" ? undefined : id + "-title"}
      aria-label={variant === "search" ? "Journey search results" : undefined}
      data-finder={variant}
      data-mobile-browse={
        showingBrowse || variant === "home" || variant === "search" ? "true" : "false"
      }
    >
      {variant !== "search" && (
        <MobileJourneyMatch
          items={items}
          browsing={showingBrowse}
          onBrowse={() => setMobileBrowsing(true)}
          showEntry={variant === "catalog"}
        />
      )}
      {variant !== "search" && (
        <header className={styles.header}>
          <div>
            <h2 id={id + "-title"}>
              {showingBrowse ? "Browse the collections" : "Journeys worth making your own"}
            </h2>
            <p>Start with a route, then make the days, pace and details yours.</p>
          </div>
          {variant === "home" && (
            <Link href={"/tours?" + writeJourneyFilters(filters) + "#journey-catalog"}>
              Explore journeys <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </header>
      )}
      {showCollections && variant === "catalog" && (
        <div className={styles.featured}>
          <JourneyCollectionRail
            eyebrow="A place to begin"
            title="Signature Journeys"
            description="Our most considered starting points for a private trip through China."
            items={signatureJourneys}
          />
        </div>
      )}
      {variant === "catalog" && !activeFilters && (
        <div className={styles.browseHeading}>
          <h2>Explore every possibility</h2>
          <p>Browse by type or refine the routes around your plans.</p>
        </div>
      )}
      {variant !== "search" && (
        <div className={styles.types} role="group" aria-label="Journey type">
          {formats
            .filter(
              (option) =>
                option.format === "all" ||
                filterJourneys(items, {
                  ...defaultJourneyFilters,
                  format: option.format,
                  scope: option.scope,
                }).length > 0,
            )
            .map((option) => (
              <button
                key={option.label}
                type="button"
                aria-pressed={filters.format === option.format && filters.scope === option.scope}
                onClick={() => set({ format: option.format, scope: option.scope })}
              >
                {option.label}
                <span>
                  {
                    filterJourneys(items, {
                      ...filters,
                      format: option.format,
                      scope: option.scope,
                    }).length
                  }
                </span>
              </button>
            ))}
        </div>
      )}
      {variant !== "search" && (
        <div className={styles.toolbar}>
          <label className={styles.search}>
            <span className="sr-only">Search journeys</span>
            <input
              type="search"
              placeholder="City, experience or journey"
              value={filters.query}
              onChange={(event) => set({ query: event.target.value }, "replace")}
            />
          </label>
          <Dialog.Root>
            <Dialog.Trigger className={styles.filterButton}>
              <SlidersHorizontal size={17} aria-hidden="true" /> Filters
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.overlay} />
              <Dialog.Content className={styles.dialog}>
                <div className={styles.dialogHeader}>
                  <Dialog.Title>Filter journeys</Dialog.Title>
                  <Dialog.Close aria-label="Close filters">
                    <X size={20} />
                  </Dialog.Close>
                </div>
                <Dialog.Description>
                  Choose what matters. Counts reflect your current selections.
                </Dialog.Description>
                <div className={styles.dialogCities} role="group" aria-label="City shortcuts">
                  <span>City</span>
                  {["Beijing", "Xi'an", "Shanghai", "Chengdu"].map((city) => (
                    <button
                      type="button"
                      key={city}
                      aria-pressed={filters.query === city}
                      onClick={() => set({ query: filters.query === city ? "" : city })}
                    >
                      {city}
                    </button>
                  ))}
                </div>
                <JourneyFilterFields items={items} filters={filters} onChange={set} />
                <label className={styles.dialogSort}>
                  Sort by
                  <select
                    value={filters.sort}
                    onChange={(event) =>
                      set({ sort: event.target.value as JourneyFilterState["sort"] }, "replace")
                    }
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-low">Price per person</option>
                    <option value="duration-low">Shortest first</option>
                    <option value="duration-high">Longest first</option>
                  </select>
                </label>
                <div className={styles.dialogFooter}>
                  <button type="button" onClick={reset}>
                    Clear all
                  </button>
                  <Dialog.Close>Show {results.length} journeys</Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
          <label className={styles.sort}>
            <span className="sr-only">Sort journeys</span>
            <select
              aria-label="Sort journeys"
              value={filters.sort}
              onChange={(event) =>
                set({ sort: event.target.value as JourneyFilterState["sort"] }, "replace")
              }
            >
              <option value="recommended">Recommended</option>
              <option value="price-low">Price per person</option>
              <option value="duration-low">Shortest first</option>
              <option value="duration-high">Longest first</option>
            </select>
          </label>
        </div>
      )}
      {variant !== "search" && (
        <div className={styles.cities} aria-label="City shortcuts">
          <span>Explore:</span>
          {["Beijing", "Xi'an", "Shanghai", "Chengdu"].map((city) => (
            <button
              type="button"
              key={city}
              aria-pressed={filters.query === city}
              onClick={() => set({ query: filters.query === city ? "" : city })}
            >
              {city}
            </button>
          ))}
        </div>
      )}
      <div className={styles.summary}>
        <p role="status">
          <strong>{results.length}</strong> {results.length === 1 ? "journey" : "journeys"}
          {showCollections ? " · arranged in three collections" : ""}
          {filters.sort === "price-low" ? " · compared per person at the stated party size" : ""}
        </p>
        {variant === "search" ? (
          <Link href={"/tours?" + writeJourneyFilters(filters) + "#journey-catalog"}>
            Refine in Journeys <ArrowRight size={16} aria-hidden="true" />
          </Link>
        ) : activeFilters ? (
          <button type="button" onClick={reset}>
            Clear filters
          </button>
        ) : null}
        {variant === "home" && (
          <div className={styles.arrows}>
            <button
              type="button"
              aria-label="Previous journeys"
              onClick={() => rail.current?.scrollBy({ left: -320 })}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next journeys"
              onClick={() => rail.current?.scrollBy({ left: 320 })}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        )}
      </div>
      {showCollections ? (
        <div className={styles.collections}>
          {variant !== "catalog" && (
            <JourneyCollectionRail
              eyebrow="A place to begin"
              title="Signature Journeys"
              description="Our most considered starting points for a private trip through China."
              items={signatureJourneys}
            />
          )}
          <JourneyCollectionRail
            eyebrow="Go further"
            title="Beyond the Familiar"
            description="Different landscapes, regional stories and a more personal way into China."
            items={beyondTheIcons}
          />
          <JourneyCollectionRail
            eyebrow="A day of its own"
            title="Private Day Tours"
            description="A focused day with a private guide and a route designed around your time."
            items={dayTours}
          />
        </div>
      ) : (
        <div
          ref={rail}
          className={variant === "home" ? styles.rail : styles.grid}
          tabIndex={variant === "home" ? 0 : undefined}
          aria-label="Journey results"
        >
          {results.map((item) => (
            <JourneyCard item={item} key={item.slug} />
          ))}
        </div>
      )}
      {!results.length && (
        <div className={styles.empty}>
          <h3>No matching journeys yet</h3>
          <p>Try removing a filter, or tell us the route you have in mind.</p>
          <button type="button" onClick={reset}>
            Show all journeys
          </button>
          <Link href="/start-planning">Start planning</Link>
        </div>
      )}
    </section>
  );
}
