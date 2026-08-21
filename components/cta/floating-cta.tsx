import { ArrowUpRight } from "lucide-react";

import { CtaButton } from "@/components/cta/cta-button";
import { cn } from "@/lib/utils/cn";

export function FloatingCta({
  label = "Plan My Trip",
  href = "/contact",
  className,
  placement,
  journeySlug,
}: {
  label?: string;
  href?: string;
  className?: string;
  placement?: string;
  journeySlug?: string;
}) {
  return (
    <div className={cn("floating-cta", className)}>
      <CtaButton
        href={href}
        variant="lightFrosted"
        size="sm"
        icon={<ArrowUpRight size={15} aria-hidden="true" />}
        data-cta-placement={placement}
        data-journey-slug={journeySlug}
      >
        {label}
      </CtaButton>
    </div>
  );
}
