import { ArrowUpRight } from "lucide-react";

import { OptimizedImage } from "@/components/media/optimized-image";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { CtaButton, TrackedLink } from "@/components/cta";
import styles from "./journey-bridge.module.css";

type JourneyBridgeData = {
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
    <section
      className={`${styles.section} journal-breathing-divider journal-breathing-divider--bottom`}
      id="related-tours"
      data-journey-slug={journey.slug}
    >
      <div className={styles.inner}>
        <div
          className={`${styles.media} ${imageIsPortrait ? styles.mediaPortrait : styles.mediaLandscape}`}
        >
          <OptimizedImage
            src={journey.image.src}
            alt={journey.image.alt}
            width={journey.image.width ?? 1600}
            height={journey.image.height ?? 1067}
            sizes="(min-width: 1024px) 52vw, 100vw"
            objectPosition={journey.image.objectPosition}
          />
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{bridge.eyebrow}</p>
          <h2>{bridge.title}</h2>
          <p className={styles.description}>{bridge.description}</p>
          <div className={styles.promise}>
            <strong>Arrive in China. We handle the journey.</strong>
            <span>
              From airport pickup to departure day, the confirmed itinerary is coordinated by our
              China-based team.
            </span>
          </div>
          <dl className={styles.facts}>
            <div>
              <dt>Route</dt>
              <dd>{journey.routeLabel}</dd>
            </div>
            <div>
              <dt>Suggested length</dt>
              <dd>{journey.durationLabel}</dd>
            </div>
          </dl>
          <ul className={styles.valueList} aria-label="Why travelers choose this journey">
            <li>Airport pickup + transfers</li>
            <li>4/5-star hotels + private guides</li>
            <li>Tickets + China-based support</li>
          </ul>
          <div className={styles.actions}>
            <CtaButton
              href={journey.href}
              size="sm"
              icon={<ArrowUpRight size={16} aria-hidden="true" />}
              className={styles.primaryAction}
              aria-label={bridge.journeyLabel}
              data-cta-placement="journal-primary-journey"
              data-journey-slug={journey.slug}
            >
              {bridge.journeyLabel}
            </CtaButton>
            <TrackedLink
              href={bridge.planningHref}
              className={styles.planningLink}
              trackingLabel={bridge.planningLabel}
              trackingPlacement="journal-plan-journey"
              journeySlug={journey.slug}
              data-cta-placement="journal-plan-journey"
              data-journey-slug={journey.slug}
            >
              {bridge.planningLabel}
              <ArrowUpRight size={15} aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
