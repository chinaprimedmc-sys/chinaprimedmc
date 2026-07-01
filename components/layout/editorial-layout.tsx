import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type EditorialLayoutProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  media?: ReactNode;
  children?: ReactNode;
  reverse?: boolean;
  className?: string;
};

export function EditorialLayout({
  eyebrow,
  title,
  intro,
  media,
  children,
  reverse = false,
  className,
}: EditorialLayoutProps) {
  return (
    <div
      className={cn(
        "grid items-center gap-8 md:gap-12 lg:grid-cols-[0.9fr_1.1fr]",
        reverse && "lg:grid-cols-[1.1fr_0.9fr]",
        className,
      )}
    >
      <div className={cn("grid gap-5", reverse && "lg:order-2")}>
        {eyebrow ? (
          <div className="text-xs font-semibold tracking-[0.18em] uppercase">{eyebrow}</div>
        ) : null}
        <div className="text-4xl leading-[0.98] font-semibold tracking-[-0.02em] md:text-6xl">
          {title}
        </div>
        {intro ? (
          <div className="text-muted max-w-xl text-base leading-7 md:text-lg">{intro}</div>
        ) : null}
        {children}
      </div>
      {media ? (
        <div className={cn("min-h-72 overflow-hidden rounded-[2rem]", reverse && "lg:order-1")}>
          {media}
        </div>
      ) : null}
    </div>
  );
}
