import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type FeatureCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        "rounded-[var(--radius-card)] border border-white/78 bg-white/62 p-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl transition-[transform,box-shadow,background-color] hover:-translate-y-1 hover:bg-white/76 hover:shadow-[var(--shadow-large)] md:p-6",
        className,
      )}
    >
      {icon ? (
        <div className="bg-foreground text-background mb-5 grid size-11 place-items-center rounded-full">
          {icon}
        </div>
      ) : null}
      <h3 className="type-card-title">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-6">{description}</p>
    </article>
  );
}
