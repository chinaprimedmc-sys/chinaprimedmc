"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";

import type { TourFaq, TourItineraryDay, TourRouteStop } from "@/types/tour";
import styles from "./tour-dossier.module.css";

export function RouteLogic({ stops }: { stops: TourRouteStop[] }) {
  const [active, setActive] = useState(0);
  const stop = stops[active];
  if (!stop) return null;

  return (
    <div className={styles.routeLogic}>
      <div className={styles.routeTrack} role="tablist" aria-label="Route sequence">
        {stops.map((item, index) => (
          <button
            key={`${item.name}-${index}`}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={styles.routeStop}
            data-active={active === index}
            onClick={() => setActive(index)}
            onFocus={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.name}</strong>
            <small>{item.days}</small>
          </button>
        ))}
      </div>
      <div className={styles.routeExplanation} role="tabpanel">
        <p>Why this stop earns its place</p>
        <h3>{stop.name}</h3>
        <div key={stop.name}>
          {stop.description ||
            "The final sequence is reviewed around your dates and transport availability."}
        </div>
      </div>
    </div>
  );
}

export function DailyRouteLedger({ days }: { days: TourItineraryDay[] }) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue={days[0] ? `day-${days[0].day}` : undefined}
    >
      {days.map((day) => (
        <Accordion.Item key={day.day} value={`day-${day.day}`} className={styles.ledgerDay}>
          <Accordion.Header>
            <Accordion.Trigger className={styles.ledgerTrigger}>
              <span className={styles.dayNumber}>Day {String(day.day).padStart(2, "0")}</span>
              <span className={styles.dayLead}>
                <strong>{day.title}</strong>
                <span>{day.destination}</span>
                <em>{day.summary}</em>
              </span>
              <span className={styles.dayMeta}>
                <span>{day.transport ?? "Private timing"}</span>
                <span>{day.hotel ? `Stay: ${day.destination}` : "Stay confirmed in proposal"}</span>
              </span>
              <span className={styles.accordionIcon} aria-hidden="true">
                <Plus className={styles.plus} size={18} />
                <Minus className={styles.minus} size={18} />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className={styles.ledgerContent}>
            <div className={styles.ledgerInner}>
              <div>
                <p className={styles.microLabel}>What the day feels like</p>
                <p>{day.summary}</p>
              </div>
              <div>
                <p className={styles.microLabel}>Practical rhythm</p>
                <ol>
                  {day.activities.map((activity) => (
                    <li key={`${day.day}-${activity.title}`}>
                      <strong>
                        {activity.time ? `${activity.time} · ` : ""}
                        {activity.title}
                      </strong>
                      <span>{activity.description}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <dl className={styles.dayDetails}>
                <div>
                  <dt>Transport</dt>
                  <dd>{day.transport ?? "Confirmed around your dates"}</dd>
                </div>
                <div>
                  <dt>Meals</dt>
                  <dd>{day.meals?.join(", ") || "As confirmed in the written proposal"}</dd>
                </div>
                <div>
                  <dt>Stay</dt>
                  <dd>{day.hotel ?? day.destination}</dd>
                </div>
              </dl>
              {day.guideNote ? (
                <p className={styles.guideNote}>
                  <strong>Planning note</strong>
                  {day.guideNote}
                </p>
              ) : null}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

export function DossierFaq({ faqs }: { faqs: TourFaq[] }) {
  const [value, setValue] = useState(() => {
    if (typeof window === "undefined") return "";
    const hash = window.location.hash;
    return hash.startsWith("#faq-") ? hash.slice(1) : "";
  });

  return (
    <Accordion.Root type="single" collapsible value={value} onValueChange={setValue}>
      {faqs.map((faq, index) => {
        const id = `faq-${index + 1}`;
        return (
          <Accordion.Item id={id} key={faq.question} value={id} className={styles.faqItem}>
            <Accordion.Header>
              <Accordion.Trigger className={styles.faqTrigger}>
                <span>{faq.question}</span>
                <ChevronDown size={18} aria-hidden="true" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.faqContent}>
              <p>{faq.answer}</p>
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}

export function DossierStickyCta({ href }: { href: string }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const final = document.getElementById("final-inquiry");
    const onScroll = () =>
      setVisible(
        window.scrollY > 620 && !(final && final.getBoundingClientRect().top < window.innerHeight),
      );
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={styles.mobileSticky} data-visible={visible}>
      <a href={href}>
        Request a dated proposal <span>↗</span>
      </a>
    </div>
  );
}
