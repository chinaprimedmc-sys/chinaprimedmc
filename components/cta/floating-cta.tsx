"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { CtaButton } from "@/components/cta/cta-button";
import { cn } from "@/lib/utils/cn";

export function FloatingCta({
  label = "Start Planning",
  href = "/contact",
  className,
  placement,
  journeySlug,
  showAfter = 0,
}: {
  label?: string;
  href?: string;
  className?: string;
  placement?: string;
  journeySlug?: string;
  showAfter?: number;
}) {
  const [visible, setVisible] = useState(showAfter === 0);

  useEffect(() => {
    if (showAfter === 0) return;

    function updateVisibility() {
      setVisible(window.scrollY >= showAfter);
    }

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [showAfter]);

  return (
    <div
      className={cn(
        "floating-cta transition-[opacity,transform] duration-500",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        className,
      )}
    >
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
