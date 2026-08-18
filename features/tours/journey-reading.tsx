import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getJourneyReadingArticles } from "@/lib/content/journey-journal-links";
import styles from "./journey-reading.module.css";

export function JourneyReading({ journeySlug }: { journeySlug: string }) {
  const articles = getJourneyReadingArticles(journeySlug);
  if (!articles.length) return null;

  return (
    <section className={styles.section} aria-labelledby={`${journeySlug}-reading-title`}>
      <div className={styles.head}>
        <p className={styles.eyebrow}>Useful for this route</p>
        <h2 id={`${journeySlug}-reading-title`}>Travel notes from our China-based team.</h2>
      </div>
      <div className={styles.list}>
        {articles.map((article) => (
          <Link className={styles.item} href={article.href} key={article.slug}>
            <div className={styles.copy}>
              <p>
                {article.category} · {article.readingTime}
              </p>
              <h3>{article.title}</h3>
            </div>
            <ArrowUpRight className={styles.arrow} size={18} aria-hidden="true" />
          </Link>
        ))}
      </div>
      <Link className={styles.all} href="/journal">
        Explore all China travel guides <ArrowUpRight size={15} aria-hidden="true" />
      </Link>
    </section>
  );
}
