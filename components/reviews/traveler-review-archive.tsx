"use client";

import { useState } from "react";

import type { TravelerReviewCard } from "./traveler-review-card";
import { TravelerReviewDialog, TravelerReviewTile } from "./traveler-review-card";
import styles from "./reviews-archive.module.css";

export function TravelerReviewArchive({ reviews }: { reviews: TravelerReviewCard[] }) {
  const [openReview, setOpenReview] = useState<TravelerReviewCard | null>(null);

  return (
    <>
      <ol className={styles.reviewList}>
        {reviews.map((review) => (
          <li key={review.id} lang={review.language}>
            <TravelerReviewTile review={review} onOpen={setOpenReview} />
          </li>
        ))}
      </ol>
      <TravelerReviewDialog review={openReview} onClose={() => setOpenReview(null)} />
    </>
  );
}
