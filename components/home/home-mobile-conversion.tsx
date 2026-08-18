"use client";

import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

import { OptimizedImage } from "@/components/media/optimized-image";
import styles from "./home-mobile-conversion.module.css";

const trustPoints = [
  "Licensed China operator",
  "Private, no-shopping travel",
  "Tailored routes and hotels",
  "China-based support",
] as const;

const assurances = [
  {
    title: "Licensed locally",
    body: "Operated in China by a registered company licensed for inbound tourism.",
  },
  {
    title: "Private by design",
    body: "Routes, hotels, guides and transport are arranged around your dates and preferred pace.",
  },
  {
    title: "No forced shopping",
    body: "Your time is reserved for the places and experiences you came to China to discover.",
  },
  {
    title: "Support in China",
    body: "A China-based team remains reachable before arrival and while you travel.",
  },
] as const;

export function HomeMobileTrustSummary() {
  return (
    <section className={styles.summary} aria-labelledby="mobile-trust-summary-title">
      <p>Why AVIORA</p>
      <h2 id="mobile-trust-summary-title">Private travel, operated locally in China.</h2>
      <ul>
        {trustPoints.map((point, index) => (
          <li key={point}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{point}</strong>
            <Check size={15} strokeWidth={1.8} aria-hidden="true" />
          </li>
        ))}
      </ul>
      <a href="#mobile-trust-details">
        See how we operate
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}

export function HomeMobileTrustDetails() {
  return (
    <section
      id="mobile-trust-details"
      className={styles.details}
      aria-labelledby="mobile-trust-details-title"
    >
      <div className={styles.teamStory}>
        <OptimizedImage
          src="/home/editorial/travel-trade-booth-singapore.webp"
          alt="The AVIORA China operating team at its IC&GTE travel trade booth in Singapore"
          width={1080}
          height={810}
          sizes="100vw"
          className={styles.teamImage}
        />
        <p>Real people · Local accountability</p>
        <h2 id="mobile-trust-details-title">The people behind your journey.</h2>
        <span>
          Real conversations, considered local decisions and support that remains close throughout
          your time in China.
        </span>
        <Link href="/about">
          Meet AVIORA
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>

      <div className={styles.assurances}>
        <p>How we operate</p>
        {assurances.map((item, index) => (
          <details key={item.title} open={index === 0}>
            <summary>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
              <i aria-hidden="true" />
            </summary>
            <p>{item.body}</p>
          </details>
        ))}
      </div>

      <div className={styles.pressNote}>
        <p>Documented in the travel trade</p>
        <h3>TTG Asia</h3>
        <span>
          TTG Asia identified Guohui Shi of China Prime DMC, AVIORA&apos;s China operating team, in
          its MATTA Connect coverage.
        </span>
        <Link href="/journal/aviora-ttg-asia-matta-connect-2026">
          Read the story
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
