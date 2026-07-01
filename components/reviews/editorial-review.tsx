import type { ReviewItem } from "@/types/component-library";

export function EditorialReview({ review }: { review: ReviewItem }) {
  return (
    <figure className="mx-auto max-w-4xl text-center">
      <blockquote className="text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-5xl">
        “{review.quote}”
      </blockquote>
      <figcaption className="text-muted mt-6 text-sm font-semibold">
        {review.name}
        {review.country ? `, ${review.country}` : null}
      </figcaption>
    </figure>
  );
}
