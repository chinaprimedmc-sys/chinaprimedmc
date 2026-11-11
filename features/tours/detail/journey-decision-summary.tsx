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
        {model.included.length > 0 && (
          <div>
            <dt>Covered in this itinerary</dt>
            <dd>
              <ul>
                {model.included.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#included" className={styles.link}>
                See all inclusions
              </a>
            </dd>
          </div>
        )}
        {model.excluded.length > 0 && (
          <div>
            <dt>Budget separately for</dt>
            <dd>
              <ul>
                {model.excluded.slice(0, 2).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a href="#included" className={styles.link}>
                See all exclusions
              </a>
            </dd>
          </div>
        )}
      </dl>
      <p className={styles.confirmation}>
        Your written proposal confirms the services, availability and price for your dates.{" "}
        <Link href="/terms">Booking terms</Link>
      </p>
    </section>
  );
}
