import { ReviewCard } from "@/components/cards";
import type { ReviewItem } from "@/types/component-library";

export function LuxuryReview({ review }: { review: ReviewItem }) {
  return <ReviewCard review={review} variant="featured" />;
}
