"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";

import { TourCard } from "@/components/cards/tour-card";
import { NoResultsState } from "@/components/empty-states/preset-empty-states";
import { Badge } from "@/components/ui/badge";
import { GridSystem } from "@/components/layout/grid-system";
import { cn } from "@/lib/utils/cn";
import type { CatalogJourney } from "@/types/catalog";

type JourneyFilterPanelProps = {
  journeys: CatalogJourney[];
  categories: string[];
  styles: string[];
};

export function JourneyFilterPanel({ journeys, categories, styles }: JourneyFilterPanelProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);

  const filteredJourneys = useMemo(
    () =>
      journeys.filter((journey) => {
        const categoryMatch =
          !selectedCategories.length || selectedCategories.includes(journey.category);
        const styleMatch =
          !selectedStyles.length || journey.styles.some((style) => selectedStyles.includes(style));

        return categoryMatch && styleMatch;
      }),
    [journeys, selectedCategories, selectedStyles],
  );

  const hasFilters = selectedCategories.length > 0 || selectedStyles.length > 0;

  return (
    <div className="grid gap-5">
      <div className="border-foreground/8 bg-background/80 rounded-[1.5rem] border p-3 shadow-sm md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="bg-foreground text-background grid size-8 shrink-0 place-items-center rounded-full md:size-9">
                <SlidersHorizontal size={16} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold">Filter journeys instantly</p>
                <p className="text-muted mt-0.5 text-sm">
                  Choose a style or category without leaving the page.
                </p>
              </div>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Badge className="bg-foreground/5 text-foreground w-fit">
              {filteredJourneys.length} journeys
            </Badge>
            {hasFilters ? (
              <button
                type="button"
                onClick={() => {
                  setSelectedCategories([]);
                  setSelectedStyles([]);
                }}
                className="border-foreground/10 hover:bg-foreground/5 inline-flex h-9 items-center gap-1.5 rounded-full border px-3 text-sm font-semibold transition"
              >
                <X size={14} aria-hidden="true" />
                Clear
              </button>
            ) : null}
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:gap-5">
          <FilterGroup
            label="Category"
            options={categories}
            selected={selectedCategories}
            onToggle={(value) => setSelectedCategories((current) => toggleValue(current, value))}
          />
          <FilterGroup
            label="Travel style"
            options={styles}
            selected={selectedStyles}
            onToggle={(value) => setSelectedStyles((current) => toggleValue(current, value))}
          />
        </div>
      </div>

      {filteredJourneys.length ? (
        <GridSystem columns={3}>
          {filteredJourneys.map((journey) => (
            <TourCard
              key={journey.slug}
              title={journey.title}
              description={journey.summary}
              image={journey.image}
              badges={[journey.category, ...journey.styles.slice(0, 2)]}
              meta={[
                { label: "Route", value: journey.route },
                { label: "Length", value: journey.duration },
              ]}
              href={`/journey/${journey.slug}`}
              action={{ label: "View journey", href: `/journey/${journey.slug}` }}
            />
          ))}
        </GridSystem>
      ) : (
        <NoResultsState />
      )}
    </div>
  );
}

function FilterGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="grid gap-2">
      <p className="text-muted text-xs font-semibold tracking-[0.16em] uppercase">{label}</p>
      <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
        {options.map((option) => {
          const active = selected.includes(option);

          return (
            <button
              key={option}
              type="button"
              data-testid={`journey-filter-${label.toLowerCase().replace(/\s+/g, "-")}-${option
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "")}`}
              onClick={() => onToggle(option)}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold transition md:px-4",
                active
                  ? "bg-foreground text-background"
                  : "bg-foreground/5 text-foreground hover:bg-foreground/10",
              )}
              aria-pressed={active}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}
