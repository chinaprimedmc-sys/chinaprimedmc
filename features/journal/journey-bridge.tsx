import { ArrowUpRight } from "lucide-react";

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

export function JournalJourneyPrompt({ bridge }: { bridge: JourneyBridgeData }) {
  const { journey } = bridge;
  return (
    <aside className={styles.prompt} aria-label="Private journey planning">
      <span className={styles.promptLine} aria-hidden="true" />
      <div>
        <p>See how this advice works in a real private journey</p>
        <span>
          {journey.title}: {bridge.description}
        </span>
      </div>
      <TrackedLink
        href={journey.href}
        trackingLabel={`View ${journey.title}`}
        trackingPlacement="journal-mid-journey-prompt"
        journeySlug={journey.slug}
      >
        View the journey <ArrowUpRight size={15} aria-hidden="true" />
      </TrackedLink>
    </aside>
  );
}

export function JournalJourneyBridge({ bridge }: { bridge: JourneyBridgeData }) {
  const { journey } = bridge;

  return (
    <section className={styles.section} id="related-tours" data-journey-slug={journey.slug}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Recommended Journey</p>
          <h2>{bridge.title}</h2>
          <p className={styles.route}>{journey.title}</p>
          <dl className={styles.context}>
            <div>
              <dt>Why It Connects</dt>
              <dd>{bridge.description}</dd>
            </div>
            <div>
              <dt>Why The Journey Works</dt>
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
              <dt>Change The Plan When</dt>
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
