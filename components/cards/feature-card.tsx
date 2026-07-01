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
        "border-border rounded-[1.75rem] border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:p-6",
        className,
      )}
    >
      {icon ? (
        <div className="bg-foreground text-background mb-5 grid size-11 place-items-center rounded-full">
          {icon}
        </div>
      ) : null}
      <h3 className="text-xl font-semibold tracking-[-0.02em]">{title}</h3>
      <p className="text-muted mt-3 text-sm leading-6">{description}</p>
    </article>
  );
}
