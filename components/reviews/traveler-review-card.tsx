"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Star, X } from "lucide-react";

import type { TravelerReview } from "@/content/home/traveler-reviews";

import styles from "./traveler-review-card.module.css";

export type TravelerReviewCard = TravelerReview;

export function TravelerReviewTile({
  review,
  onOpen,
}: {
  review: TravelerReviewCard;
  onOpen: (review: TravelerReviewCard) => void;
}) {
  const excerpt = (review.paragraphs[0] ?? "").replace(/\s+/g, " ").trim();
  const conciseExcerpt = excerpt.length > 240 ? `${excerpt.slice(0, 240).trimEnd()}…` : excerpt;

  return (
    <article className={styles.card}>
      <div
        className={styles.rating}
        role="img"
        aria-label={`Rated ${review.rating.toFixed(1)} out of 5`}
      >
        <Star aria-hidden="true" fill="currentColor" />
        <strong>{review.rating.toFixed(1)}</strong>
      </div>
      <p className={styles.excerpt} lang={review.language}>
        {conciseExcerpt}
      </p>
      <footer className={styles.cardFooter}>
        <div className={styles.author}>
          <strong>{review.author}</strong>
          <span>{review.location}</span>
        </div>
        <button type="button" onClick={() => onOpen(review)}>
          Read reviews <ArrowRight aria-hidden="true" />
        </button>
      </footer>
    </article>
  );
}

export function TravelerReviewDialog({
  review,
  onClose,
}: {
  review: TravelerReviewCard | null;
  onClose: () => void;
}) {
  return (
    <Dialog.Root open={Boolean(review)} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.dialogOverlay} />
        {review ? (
          <Dialog.Content className={styles.dialogContent}>
            <header className={styles.dialogHeader}>
              <div>
                <p className={styles.dialogEyebrow}>Traveler review</p>
                <Dialog.Title>{review.author}</Dialog.Title>
                <Dialog.Description>
                  {review.location} · Rated {review.rating.toFixed(1)} out of 5
                </Dialog.Description>
              </div>
              <Dialog.Close className={styles.dialogClose} aria-label="Close review">
                <X aria-hidden="true" />
              </Dialog.Close>
            </header>
            <div className={styles.dialogBody} lang={review.language}>
              {review.paragraphs.map((paragraph, index) => (
                <p key={`${review.id}-${index}`}>{paragraph}</p>
              ))}
            </div>
          </Dialog.Content>
        ) : null}
      </Dialog.Portal>
    </Dialog.Root>
  );
}
