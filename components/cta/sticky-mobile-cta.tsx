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
}: {
  label?: string;
  href?: string;
  className?: string;
  showAfter?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > showAfter);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfter]);

  return (
    <div
      className={cn(
        "fixed right-3 bottom-3 z-50 rounded-full border border-white/65 bg-white/52 p-1.5 shadow-[var(--shadow-glass)] backdrop-blur-2xl transition duration-500 ease-[var(--ease-apple)] md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
        className,
      )}
    >
      <CtaButton
        href={href}
        variant="glass"
        size="sm"
        className="h-11 border-white/80 bg-white/72 px-4 text-sm"
        icon={<ArrowUpRight size={17} aria-hidden="true" />}
      >
        {label}
      </CtaButton>
    </div>
  );
}
