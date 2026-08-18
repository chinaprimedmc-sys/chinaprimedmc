"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { BedDouble, CarFront, ChevronDown, Utensils } from "lucide-react";

import type { TourDetailDay } from "@/features/tours/detail/tour-detail-model";
import styles from "@/features/tours/detail/tour-detail.module.css";
import { trackEvent } from "@/lib/analytics/events";

export function TourDayAccordion({
  days,
  journeySlug,
}: {
  days: TourDetailDay[];
  journeySlug: string;
}) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      className={styles.dayList}
      onValueChange={(value) => {
        if (!value) return;
        trackEvent("tour_itinerary_day_open", {
          journey: journeySlug.slice(0, 160),
          day: value.slice(0, 40),
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
                <small>Day</small>
                <strong>{day.label.replace(/^Day\s*/i, "")}</strong>
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
              <p>{day.summary}</p>
              <dl className={styles.dayFacts}>
                <div>
                  <CarFront size={17} aria-hidden="true" />
                  <span>
                    <dt>Getting around</dt>
                    <dd>{day.transport}</dd>
                  </span>
                </div>
                <div>
                  <Utensils size={17} aria-hidden="true" />
                  <span>
                    <dt>Meals</dt>
                    <dd>{day.meals}</dd>
                  </span>
                </div>
                <div>
                  <BedDouble size={17} aria-hidden="true" />
                  <span>
                    <dt>Hotel</dt>
                    <dd>{day.stay}</dd>
                  </span>
                </div>
              </dl>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
