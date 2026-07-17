import type { ComponentPropsWithoutRef, CSSProperties } from "react";

import { motionTokens } from "@/design-system/tokens/motion";
import { cn } from "@/lib/utils/cn";

type SkeletonProps = ComponentPropsWithoutRef<"div"> & {
  variant?: "block" | "text" | "media";
  shimmer?: boolean;
};

const skeletonVariants = {
  block: "rounded-2xl",
  text: "h-4 rounded-full",
  media: "rounded-none",
};

export function Skeleton({
  className,
  style,
  variant = "block",
  shimmer = true,
  ...props
}: SkeletonProps) {
  const skeletonStyle = {
    "--skeleton-shimmer-duration": motionTokens.durationCss.shimmer,
    ...style,
  } as CSSProperties;

  return (
    <div
      aria-hidden={props["aria-hidden"] ?? true}
      data-shimmer={shimmer ? "true" : undefined}
      className={cn("skeleton", skeletonVariants[variant], className)}
      style={skeletonStyle}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="border-border rounded-[1.75rem] border bg-[var(--bg-secondary)] p-4">
      <Skeleton className="aspect-[4/3]" variant="media" />
      <Skeleton className="mt-4 h-5 w-3/4" variant="text" />
      <Skeleton className="mt-3 h-4 w-full" variant="text" />
      <Skeleton className="mt-2 h-4 w-2/3" variant="text" />
    </div>
  );
}
