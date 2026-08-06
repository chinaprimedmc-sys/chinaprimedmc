import { ArrowUpRight } from "lucide-react";

import { CtaButton } from "@/components/cta/cta-button";
import { cn } from "@/lib/utils/cn";

export function FloatingCta({
  label = "Start Planning",
  href = "/contact",
  className,
}: {
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={cn("floating-cta", className)}>
      <CtaButton
        href={href}
        variant="lightFrosted"
        size="sm"
        icon={<ArrowUpRight size={15} aria-hidden="true" />}
      >
        {label}
      </CtaButton>
    </div>
  );
}
