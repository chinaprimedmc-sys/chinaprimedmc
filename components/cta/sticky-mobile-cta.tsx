"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { CtaButton } from "@/components/cta/cta-button";
import { cn } from "@/lib/utils/cn";

export function StickyMobileCta({
  label = "Plan My Trip",
  href = "/contact",
  className,
  showAfter = 420,
  placement,
  journeySlug,
}: {
  label?: string;
  href?: string;
  className?: string;
  showAfter?: number;
  placement?: string;
  journeySlug?: string;
}) {
  const [hasPassedThreshold, setHasPassedThreshold] = useState(showAfter === 0);

  useEffect(() => {
    if (showAfter === 0) return;

    const updateVisibility = () => setHasPassedThreshold(window.scrollY >= showAfter);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [showAfter]);

  return (
    <div className={cn("sticky-mobile-cta", hasPassedThreshold && "is-visible", className)}>
      <CtaButton
        href={href}
        variant="primary"
        size="md"
        icon={<ArrowUpRight size={16} aria-hidden="true" />}
        data-cta-placement={placement}
        data-journey-slug={journeySlug}
      >
        {label}
      </CtaButton>
    </div>
  );
}
