import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import styles from "./journeys-hero.module.css";

export function JourneysHero() {
  return (
    <section className={styles.hero} aria-labelledby="journeys-title">
      <Image
        src="/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp"
        alt="The Great Wall winding across the mountains near Beijing"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className={styles.image}
      />
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>AVIORA / Private China travel</p>
        <h1 id="journeys-title">China, at your own pace.</h1>
        <p className={styles.description}>
          Distinctive routes, privately planned around the places and people that matter to you.
        </p>
        <div className={styles.actions}>
          <Link href="#journey-catalog">
            Explore journeys <ArrowRight aria-hidden="true" />
          </Link>
          <a href="#traveling-with-aviora">
            The AVIORA approach <ArrowDown aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
