"use client";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import {
  journeyDurationOptions,
  journeyRegionOptions,
  journeyStyleOptions,
} from "@/content/tours/journeys-page-content";
import { filterJourneys, type JourneyFilterState } from "@/lib/tours/journey-filter";
import styles from "./journey-catalog.module.css";
const fields = [
  {
    key: "destination",
    label: "Region",
    options: journeyRegionOptions.filter((o) => o.value !== "all"),
  },
  {
    key: "duration",
    label: "Duration",
    options: journeyDurationOptions.filter((o) => o.value !== "all"),
  },
  {
    key: "travelStyle",
    label: "Travel style",
    options: [
      ...journeyStyleOptions.filter((o) => o.value !== "all"),
      { value: "wildlife", label: "Wildlife" },
      { value: "business", label: "Business" },
      { value: "photography", label: "Photography" },
      { value: "slow-travel", label: "Slow travel" },
    ],
  },
  {
    key: "pace",
    label: "Pace",
    options: [
      { value: "easy", label: "Easy" },
      { value: "balanced", label: "Balanced" },
      { value: "active", label: "Active" },
    ],
  },
] as const;
export const journeyNeedOptions = [
  "muslim-friendly",
  "women-traveler-support",
  "vegetarian-friendly",
  "slower-pacing",
  "child-friendly",
  "mobility-aware",
  "quiet-luxury",
  "food-focused",
  "photography-led",
] as const;
export function JourneyFilterFields({
  items,
  filters,
  onChange,
}: {
  items: JourneyCatalogItem[];
  filters: JourneyFilterState;
  onChange: (patch: Partial<JourneyFilterState>) => void;
}) {
  return (
    <div className={styles.fields}>
      {fields.map((field) => (
        <fieldset key={field.key}>
          <legend>{field.label}</legend>
          <div className={styles.choices}>
            {field.options.map((option) => {
              const values = filters[field.key] as string[];
              const checked = values.includes(option.value);
              const count = filterJourneys(items, {
                ...filters,
                [field.key]: [option.value],
              }).length;
              return (
                <label key={option.value}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() =>
                      onChange({
                        [field.key]: checked
                          ? values.filter((v) => v !== option.value)
                          : [...values, option.value],
                      })
                    }
                  />
                  <span>{option.label}</span>
                  <small>{count}</small>
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
      <label className={styles.need}>
        Planning need
        <select
          value={filters.need ?? ""}
          onChange={(event) =>
            onChange({ need: (event.target.value as JourneyFilterState["need"]) || null })
          }
        >
          <option value="">Any planning need</option>
          {journeyNeedOptions.map((need) => (
            <option key={need} value={need}>
              {need.replaceAll("-", " ")} ({filterJourneys(items, { ...filters, need }).length})
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
