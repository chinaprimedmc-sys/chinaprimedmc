"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import styles from "@/components/home/home-redesign.module.css";
import { cn } from "@/lib/utils/cn";

type ConciergeItem = {
  number: string;
  title: string;
  description: string;
  detail?: string;
};

export function HomeAssuranceAccordion({ items }: { items: ConciergeItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={styles.assuranceList}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `home-assurance-${index}`;
        return (
          <article key={item.number} className={cn(styles.assuranceItem, open && styles.isOpen)}>
            <button
              type="button"
              className={styles.assuranceTrigger}
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
            >
              <span className={styles.assuranceNumber}>{item.number}</span>
              <span className={styles.assuranceHeading}>
                <strong>{item.title}</strong>
                <small>{item.description}</small>
              </span>
              <span className={styles.assuranceIcon} aria-hidden="true">
                {open ? <Minus /> : <Plus />}
              </span>
            </button>
            <div id={panelId} className={styles.assurancePanel} data-open={open}>
              <div>
                <p>{item.detail ?? item.description}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function HomePlanningSteps({ items }: { items: ConciergeItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.planningGrid}>
      {items.map((item, index) => {
        const active = activeIndex === index;
        const panelId = `home-planning-step-${index}`;
        return (
          <article key={item.number} className={cn(styles.planningStep, active && styles.isActive)}>
            <button
              type="button"
              className={styles.planningTrigger}
              aria-expanded={active}
              aria-controls={panelId}
              onPointerEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              <span>{item.number}</span>
              <strong>{item.title}</strong>
              <span className={styles.planningIcon} aria-hidden="true">
                {active ? <Minus /> : <Plus />}
              </span>
            </button>
            <div id={panelId} className={styles.planningPanel} data-open={active}>
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
