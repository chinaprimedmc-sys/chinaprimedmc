"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { TravelerReview } from "@/content/home/traveler-reviews";

import {
  TravelerReviewDialog,
  TravelerReviewTile,
  type TravelerReviewCard,
} from "./traveler-review-card";
import styles from "./traveler-review-rail.module.css";

export function TravelerReviewRail({
  reviews,
  reviewCount,
}: {
  reviews: TravelerReview[];
  reviewCount: number;
}) {
  const firstSetRef = useRef<HTMLDivElement>(null);
  const [selectedReview, setSelectedReview] = useState<TravelerReviewCard | null>(null);
  const [duration, setDuration] = useState(2400);

  useEffect(() => {
    const firstSet = firstSetRef.current;
    if (!firstSet) return;

    const updateDuration = () => {
      const pixelsPerSecond = window.matchMedia("(max-width: 767px)").matches ? 26 : 34;
      setDuration(Math.max(1, firstSet.scrollWidth / pixelsPerSecond));
    };

    updateDuration();
    const observer = new ResizeObserver(updateDuration);
    observer.observe(firstSet);
    return () => observer.disconnect();
  }, [reviews.length]);

  const renderReviews = (duplicate = false) =>
    reviews.map((review) => (
      <div className={styles.reviewTile} key={`${duplicate ? "copy-" : ""}${review.id}`}>
        <TravelerReviewTile review={review} onOpen={setSelectedReview} />
      </div>
    ));

  return (
    <section className={styles.section} aria-labelledby="traveler-reviews-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div className={styles.headingCopy}>
            <p className={styles.eyebrow}>Traveler reviews</p>
            <h2 id="traveler-reviews-title">A more considered way to travel China</h2>
            <p>In the words of travelers who&apos;ve journeyed with AVIORA.</p>
          </div>
          <Link className={styles.archiveLink} href="/reviews">
            All {reviewCount} reviews <ArrowUpRight aria-hidden="true" />
          </Link>
        </header>

        <div
          className={`${styles.carousel} ${selectedReview ? styles.paused : ""}`}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${reviewCount} traveler reviews`}
          style={{ "--review-duration": `${duration}s` } as CSSProperties}
        >
          <div className={styles.viewport}>
            <div className={styles.track}>
              <div className={styles.reviewSet} ref={firstSetRef}>
                {renderReviews()}
              </div>
              <div className={styles.reviewSet} aria-hidden="true" inert>
                {renderReviews(true)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <TravelerReviewDialog review={selectedReview} onClose={() => setSelectedReview(null)} />
    </section>
  );
}
