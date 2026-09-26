"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { BedDouble, CarFront, ChevronDown, Utensils } from "lucide-react";
import { useState } from "react";

import type { TourDetailDay } from "@/features/tours/detail/tour-detail-model";
import styles from "@/features/tours/detail/tour-detail.module.css";
import { trackEvent } from "@/lib/analytics/events";

export function TourDayAccordion({
  days,
  journeySlug,
  isFramework = false,
}: {
  days: TourDetailDay[];
  journeySlug: string;
  isFramework?: boolean;
}) {
  const singleDay = days.length === 1;
  const [open, setOpen] = useState<string[]>(singleDay ? [days[0].label] : []);
  return (
    <>
      {!singleDay ? (
        <div className={styles.itineraryControls}>
          <p>
            {isFramework ? "Open a stop for planning details." : "Open a day for the full plan."}
          </p>
          <button
            type="button"
            onClick={() => setOpen(open.length === days.length ? [] : days.map((day) => day.label))}
          >
            {open.length === days.length ? "Collapse all days" : "Expand all days"}
          </button>
        </div>
      ) : null}
      <Accordion.Root
        type="multiple"
        value={open}
        className={styles.dayList}
        onValueChange={(value) => {
          setOpen(value);
          const day = value.at(-1);
          if (!day) return;
          trackEvent("tour_itinerary_day_open", {
            journey: journeySlug.slice(0, 160),
            day: day.slice(0, 40),
          });
        }}
      >
        {days.map((day) => (
          <Accordion.Item
            key={`${day.label}-${day.title}`}
            value={day.label}
            className={styles.dayItem}
          >
            <Accordion.Header>
              <Accordion.Trigger className={styles.dayTrigger}>
                <span className={styles.dayLabel}>
                  <small>{isFramework ? "Stop" : "Day"}</small>
                  <strong>{day.label.replace(/^(Day|Route)\s*/i, "")}</strong>
                </span>
                <span className={styles.dayTitle}>
                  <span>{day.destination}</span>
                  <strong>{day.title}</strong>
                </span>
                <ChevronDown className={styles.dayChevron} size={18} aria-hidden="true" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.dayContent}>
              <div className={styles.dayContentInner}>
                {!singleDay && !day.experiences.length && day.summary ? (
                  <p className={styles.daySummary}>{day.summary}</p>
                ) : null}
                {day.experiences.length ? (
                  <ul className={styles.dayNarrative}>
                    {day.experiences.map((experience) => (
                      <li key={experience.title}>
                        <strong>{experience.title}</strong>
                        <span>{experience.description}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {day.guideInsight ? (
                  <div className={styles.guideInsight}>
                    <p>{day.guideInsight}</p>
                  </div>
                ) : null}
                <p className={styles.practicalLabel}>Practical details</p>
                <dl className={styles.dayFacts}>
                  <div>
                    <CarFront size={17} aria-hidden="true" />
                    <span>
                      <dt>Travel support</dt>
                      <dd>{day.transport}</dd>
                    </span>
                  </div>
                  <div>
                    <Utensils size={17} aria-hidden="true" />
                    <span>
                      <dt>{singleDay ? "Dining" : "Meals included"}</dt>
                      <dd>{day.meals}</dd>
                    </span>
                  </div>
                  <div>
                    <BedDouble size={17} aria-hidden="true" />
                    <span>
                      <dt>{singleDay ? "End of day" : "Overnight stay"}</dt>
                      <dd>{day.stay}</dd>
                    </span>
                  </div>
                </dl>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </>
  );
}
