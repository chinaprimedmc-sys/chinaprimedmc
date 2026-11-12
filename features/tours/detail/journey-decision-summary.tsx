import Link from "next/link";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import type { TourDetailModel } from "./tour-detail-model";
import styles from "./journey-decision-summary.module.css";

/** A reading aid from the published product; never infers accessibility or inclusions. */
export function JourneyDecisionSummary({ model }: { model: TourDetailModel }) {
  const fact = (label: string) => model.quickFacts.find((item) => item.label === label)?.value;
  const hasItinerary = !model.isFramework && model.days.some((day) => day.summary);
  const hasWalking = model.days.some((day) => day.steps);
  const suitedTo = getJourneyCatalogItem(model.slug)?.bestForSummary ?? fact("Ideal for");

  return (
    <section
      className={styles.summary}
      aria-labelledby="decision-summary-title"
      data-decision-summary
    >
      <header className={styles.header}>
        <p className={styles.eyebrow}>Before you choose</p>
        <h2 id="decision-summary-title">Is this your kind of journey?</h2>
      </header>
      <dl className={styles.grid}>
        {suitedTo && (
          <div>
            <dt>Best suited to</dt>
            <dd>{suitedTo}</dd>
          </div>
        )}
        <div>
          <dt>Pace &amp; walking</dt>
          <dd>
            <p>{fact("Pace") ?? "Discuss your walking comfort and preferred pace with us."}</p>
            {hasItinerary && (
              <a href="#itinerary" className={styles.link}>
                {hasWalking ? "See walking estimates by day" : "Review the daily activities"}
              </a>
            )}
          </dd>
        </div>
      </dl>
      <nav className={styles.scopeLinks} aria-label="Journey service scope">
        {model.included.length > 0 && <a href="#included">See all inclusions</a>}
        {model.excluded.length > 0 && <a href="#included">See all exclusions</a>}
        {model.comparison && <a href="#compare-durations">Compare these itineraries</a>}
      </nav>
      <p className={styles.confirmation}>
        Your written proposal confirms the services, availability and price for your dates.{" "}
        <Link href="/terms">Booking terms</Link>
      </p>
    </section>
  );
}
