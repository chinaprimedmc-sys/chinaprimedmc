import { Star } from "lucide-react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import type { ComponentVariant, ReviewItem } from "@/types/component-library";

type ReviewCardProps = {
  review: ReviewItem;
  variant?: ComponentVariant;
  className?: string;
};

export function ReviewCard({ review, variant = "medium", className }: ReviewCardProps) {
  return (
    <article
      className={cn(
        "rounded-[1.75rem] border border-white/70 bg-white/66 p-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl md:p-6",
        variant === "featured" && "md:p-8",
        className,
      )}
    >
      <div
        className="text-brand-gold flex gap-1"
        aria-label={`${review.rating ?? 5} out of 5 stars`}
      >
        {Array.from({ length: review.rating ?? 5 }).map((_, index) => (
          <Star key={index} size={15} fill="currentColor" aria-hidden="true" />
        ))}
      </div>
      <blockquote className="mt-5 text-lg leading-8 font-medium tracking-[-0.01em]">
        “{review.quote}”
      </blockquote>
      <div className="mt-6 flex items-center gap-3">
        {review.avatar ? (
          <OptimizedImage
            src={review.avatar.src}
            alt={review.avatar.alt}
            width={44}
            height={44}
            frameClassName="size-11 rounded-full"
            className="h-full w-full"
          />
        ) : (
          <div className="bg-foreground text-background grid size-11 place-items-center rounded-full text-sm font-semibold">
            {review.name.slice(0, 1)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold">{review.name}</p>
          <p className="text-muted text-xs">
            {[review.country, review.trip].filter(Boolean).join(" · ")}
          </p>
        </div>
      </div>
    </article>
  );
}
