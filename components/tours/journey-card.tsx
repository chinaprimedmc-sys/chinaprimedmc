import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { getJourneyCardDescription, getJourneyCardTitle } from "@/content/tours/card-copy";
import { isDayTour, matchesJourneyScope } from "@/lib/tours/journey-groups";

import styles from "./journey-card.module.css";

export function JourneyCard({
  item,
  featured = false,
}: {
  item: JourneyCatalogItem;
  featured?: boolean;
}) {
  const productType = isDayTour(item)
    ? "Private day tour"
    : matchesJourneyScope(item, "single-city")
      ? "Private single-city stay"
      : "Private multi-city journey";
  const cardTitle = getJourneyCardTitle(item);

  return (
    <article
      className={styles.card}
      data-journey-slug={item.slug}
      data-featured={featured ? "true" : undefined}
    >
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
            sizes={
              featured
                ? "(max-width: 1023px) calc(100vw - 40px), 640px"
                : "(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) 50vw, 380px"
            }
            style={{ objectPosition: item.image.objectPosition ?? "center" }}
          />
        )}
        {featured ? <span className={styles.badge}>{item.commercialRoleLabel}</span> : null}
        <span className={styles.duration}>{item.durationLabel}</span>
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
        <p className={styles.bestFor}>
          <span>Best for</span> {item.bestForSummary}
        </p>
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
