import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type MagazineLayoutProps = {
  lead: ReactNode;
  aside: ReactNode;
  footer?: ReactNode;
  className?: string;
};

export function MagazineLayout({ lead, aside, footer, className }: MagazineLayoutProps) {
  return (
    <div className={cn("grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:gap-6", className)}>
      <div className="min-h-96 overflow-hidden rounded-[2rem]">{lead}</div>
      <div className="grid gap-5">{aside}</div>
      {footer ? <div className="lg:col-span-2">{footer}</div> : null}
    </div>
  );
}
