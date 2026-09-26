import { ArrowUpRight } from "lucide-react";

import { OptimizedImage } from "@/components/media/optimized-image";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { TrackedLink } from "@/components/cta";
import styles from "./journey-bridge.module.css";

export type JourneyBridgeData = {
  journey: JourneyCatalogItem;
  alternatives: JourneyCatalogItem[];
  eyebrow: string;
  title: string;
  description: string;
  journeyLabel: string;
  planningLabel: string;
  planningHref: string;
  advisorHref: string;
};

export function JournalJourneyPrompt() {
  return (
    <aside className={styles.prompt} aria-label="Private journey planning">
      <span className={styles.promptLine} aria-hidden="true" />
      <div>
        <p>Want to see how this pacing works across a complete journey?</p>
        <span>
          The 12-day route separates the heavier days and protects the time that makes China
          enjoyable.
        </span>
      </div>
      <TrackedLink
        href="#related-tours"
        trackingLabel="Explore the 12-day journey"
        trackingPlacement="journal-testimonial-prompt"
      >
        Explore the 12-day journey <ArrowUpRight size={15} aria-hidden="true" />
      </TrackedLink>
    </aside>
  );
}

export function JournalJourneyBridge({ bridge }: { bridge: JourneyBridgeData }) {
  const { journey } = bridge;
  const imageIsPortrait =
    Boolean(journey.image.width && journey.image.height) &&
    (journey.image.height ?? 0) > (journey.image.width ?? 0);

  return (
    <section className={styles.section} id="related-tours" data-journey-slug={journey.slug}>
      <div className={styles.inner}>
        <div
          className={`${styles.media} ${imageIsPortrait ? styles.mediaPortrait : styles.mediaLandscape}`}
        >
          <OptimizedImage
            src={journey.image.src}
            alt={journey.image.alt}
            width={journey.image.width ?? 1600}
            height={journey.image.height ?? 1067}
            sizes="(min-width: 1024px) 50vw, 100vw"
            objectPosition={journey.image.objectPosition}
          />
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Journey In Context</p>
          <h2>{bridge.title}</h2>
          <p className={styles.route}>{journey.title}</p>
          <p className={styles.description}>{bridge.description}</p>
          <dl className={styles.context}>
            <div>
              <dt>Why It Works</dt>
              <dd>{journey.hook}</dd>
            </div>
            <div>
              <dt>Who It Suits</dt>
              <dd>{journey.bestForSummary}</dd>
            </div>
            <div>
              <dt>The Trade-Off</dt>
              <dd>
                {journey.planningNote ??
                  `${journey.paceLabel} pacing with ${journey.transportSummary.toLowerCase()}.`}
              </dd>
            </div>
            <div>
              <dt>We Would Change This When</dt>
              <dd>
                Your available nights, walking comfort or preferred hotel rhythm call for fewer
                stops and more time in each place.
              </dd>
            </div>
          </dl>
          <div className={styles.actions}>
            <TrackedLink
              href={journey.href}
              className={styles.primaryAction}
              trackingLabel="See This Journey"
              trackingPlacement="journal-primary-journey"
              journeySlug={journey.slug}
              data-journal-event="related_journey_open"
              data-placement="journey-in-context"
              data-journey-slug={journey.slug}
            >
              See This Journey <ArrowUpRight size={15} aria-hidden="true" />
            </TrackedLink>
            <TrackedLink
              href={bridge.planningHref}
              className={styles.planningLink}
              trackingLabel="Ask Us To Adapt It"
              trackingPlacement="journal-plan-journey"
              journeySlug={journey.slug}
              data-journal-event="planning_start"
              data-placement="journey-in-context"
              data-journey-slug={journey.slug}
            >
              Ask Us To Adapt It
              <ArrowUpRight size={15} aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
