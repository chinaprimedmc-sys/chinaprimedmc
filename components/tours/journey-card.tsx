import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { getJourneyCardDescription, getJourneyCardTitle } from "@/content/tours/card-copy";
import { isDayTour, matchesJourneyScope } from "@/lib/tours/journey-groups";

import styles from "./journey-card.module.css";

export function JourneyCard({ item }: { item: JourneyCatalogItem }) {
  const productType = isDayTour(item)
    ? "Private day tour"
    : matchesJourneyScope(item, "single-city")
      ? "Private single-city stay"
      : "Private multi-city journey";
  const cardTitle = getJourneyCardTitle(item);

  return (
    <article className={styles.card} data-journey-slug={item.slug}>
      <Link className={styles.mediaLink} href={item.href} aria-label={`Explore ${cardTitle}`}>
        {item.visualStatus === "pending" ? (
          <span className={`${styles.media} ${styles.placeholder}`} aria-hidden="true">
            <small>Photography to follow</small>
            <strong>{item.destinationFilters.join(" · ")}</strong>
          </span>
        ) : (
          <Image
            className={styles.photo}
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 50vw, 380px"
            style={{ objectPosition: item.image.objectPosition ?? "center" }}
          />
        )}
      </Link>

      <div className={styles.body}>
        <div className={styles.cardTopline}>
          <p className={styles.type}>{productType}</p>
          {item.statusLabel ? <span className={styles.status}>{item.statusLabel}</span> : null}
        </div>
        <h3>
          <Link href={item.href}>{cardTitle}</Link>
        </h3>
        <p className={styles.description}>{getJourneyCardDescription(item)}</p>
        <dl className={styles.details}>
          <div>
            <dt>Duration</dt>
            <dd>{item.durationLabel}</dd>
          </div>
          <div>
            <dt>Best for</dt>
            <dd>{item.bestForSummary}</dd>
          </div>
        </dl>
        {item.highlights.length ? (
          <ul className={styles.highlights}>
            {item.highlights.slice(0, 3).map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
        <div className={styles.cardFooter}>
          <div className={styles.price}>
            <span>{item.pricing.fromUsd ? "From" : "Pricing"}</span>
            <strong>
              {item.pricing.fromUsd
                ? `US$${item.pricing.fromUsd.toLocaleString("en-US")}`
                : "On request"}
            </strong>
            <small>
              {item.pricing.fromUsd
                ? item.pricing.pricingUnit === "private-group"
                  ? "Per private group of four"
                  : "Per person · based on four guests"
                : item.pricing.cardBasis}
            </small>
          </div>
          <Link className={styles.cta} href={item.href}>
            View journey <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
