"use client";

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
    <div className={cn("fixed right-5 bottom-5 z-50 hidden md:block", className)}>
      <CtaButton
        href={href}
        variant="glass"
        size="sm"
        className="border-white/80 bg-white/70 text-sm shadow-[0_18px_60px_rgba(10,12,14,0.16)]"
        icon={<ArrowUpRight size={16} aria-hidden="true" />}
      >
        {label}
      </CtaButton>
    </div>
  );
}
