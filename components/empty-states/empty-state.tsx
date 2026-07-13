import type { ReactNode } from "react";

import { CtaButton } from "@/components/cta";
import type { LinkAction } from "@/types/component-library";

type EmptyStateProps = {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: LinkAction;
};

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="border-border grid place-items-center rounded-[2rem] border bg-white px-6 py-16 text-center">
      {icon ? (
        <div className="bg-foreground text-background mb-5 grid size-12 place-items-center rounded-full">
          {icon}
        </div>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.03em]">{title}</h2>
      {description ? (
        <p className="text-muted mt-3 max-w-lg text-sm leading-6">{description}</p>
      ) : null}
      {action ? (
        <CtaButton href={action.href} className="mt-6">
          {action.label}
        </CtaButton>
      ) : null}
    </div>
  );
}
