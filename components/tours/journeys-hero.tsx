import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { heroPhoto, journeysCopy } from "@/content/tours/journeys-curation";

import styles from "./journeys-hero.module.css";

export function JourneysHero() {
  return (
    <section className={styles.hero} aria-labelledby="journeys-title">
      <Image
        src={heroPhoto.src}
        alt={heroPhoto.alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>{journeysCopy.heroEyebrow}</p>
        <h1 id="journeys-title">
          {journeysCopy.heroLead} <em>{journeysCopy.heroEm}</em>
        </h1>
        <p className={styles.sub}>{journeysCopy.heroSub}</p>
        <div className={styles.actions}>
          <Link className={styles.button} href="/start-planning?source=journeys-hero">
            Plan my journey
          </Link>
          <Link className={styles.link} href="#finder">
            Find a journey <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
