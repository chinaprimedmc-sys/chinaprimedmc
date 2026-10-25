"use client";

import { ArrowRight, Compass, Route } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { JOURNEY_MATCH_EVENT } from "@/lib/tours/journey-tools";

import styles from "./home-redesign.module.css";

function openJourneyMatch() {
  window.dispatchEvent(new CustomEvent(JOURNEY_MATCH_EVENT));
}

export function HomeMobileHeroActions() {
  return (
    <div className={styles.mobileHeroActions}>
      <button type="button" onClick={openJourneyMatch}>
        Find my journey <ArrowRight aria-hidden="true" />
      </button>
      <Link href="/tours">Browse all journeys</Link>
    </div>
  );
}

export function HomeMobilePlanningCard() {
  return (
    <div className={styles.mobilePlanningCard}>
      <p>Private planning</p>
      <h3>A China specialist, when you are ready.</h3>
      <span>Share your first name and WhatsApp. We normally reply within 24 hours.</span>
      <Link href="/start-planning">
        Start planning <ArrowRight aria-hidden="true" />
      </Link>
    </div>
  );
}

export function HomeMobileApp() {
  const [dockVisible, setDockVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-home-hero]");
    const footer = document.querySelector<HTMLElement>("footer");
    if (!hero) return;

    let heroVisible = true;
    let footerVisible = false;
    const update = () => setDockVisible(!heroVisible && !footerVisible);
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroVisible = entry.isIntersecting;
        update();
      },
      { threshold: 0.16 },
    );
    const footerObserver = footer
      ? new IntersectionObserver(
          ([entry]) => {
            footerVisible = entry.isIntersecting;
            update();
          },
          { threshold: 0.04 },
        )
      : null;

    heroObserver.observe(hero);
    if (footer && footerObserver) footerObserver.observe(footer);
    return () => {
      heroObserver.disconnect();
      footerObserver?.disconnect();
    };
  }, []);

  return (
    <>
      <nav
        className={styles.mobileDock}
        data-visible={dockVisible ? "true" : undefined}
        aria-label="Quick journey actions"
      >
        <Link href="#journey-finder">
          <Route aria-hidden="true" />
          <span>Journeys</span>
        </Link>
        <button type="button" className={styles.mobileDockMatch} onClick={openJourneyMatch}>
          <Compass aria-hidden="true" />
          <span>Match</span>
        </button>
        <Link href="/start-planning">
          <ArrowRight aria-hidden="true" />
          <span>Plan</span>
        </Link>
      </nav>
    </>
  );
}
