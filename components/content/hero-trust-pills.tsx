"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils/cn";

type HeroTrustPillsProps = {
  items: string[];
  className?: string;
  mode?: "list" | "ticker";
  tone?: "dark" | "light";
};

export function HeroTrustPills({
  className,
  items,
  mode = "list",
  tone = "dark",
}: HeroTrustPillsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (mode !== "ticker" || items.length <= 1) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [items.length, mode]);

  if (mode === "ticker") {
    return (
      <div className={cn("hero-trust mt-7 md:mt-10", className)} data-tone={tone}>
        <div className="hero-trust-ticker">
          <div className="hero-trust-ticker__viewport" aria-live="polite">
            {items.map((item, index) => (
              <span
                key={item}
                aria-hidden={index !== activeIndex}
                className="hero-trust-ticker__item"
                data-active={index === activeIndex}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="hero-trust-ticker__steps" aria-hidden="true">
            {items.map((item, index) => (
              <span key={item} data-active={index === activeIndex} />
            ))}
          </div>
        </div>
        <div className="hero-trust-mobile" aria-label="Journey assurances">
          {items.map((item) => (
            <span className="hero-trust-mobile__item" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mx-auto mt-8 flex max-w-full flex-wrap justify-center gap-2 text-white/88",
        className,
      )}
    >
      {items.map((item) => (
        <span
          key={item}
          className="max-w-full rounded border border-white/35 bg-transparent px-3 py-2 text-center text-[0.64rem] leading-snug font-medium tracking-[0.08em] break-words uppercase backdrop-blur-sm sm:px-3.5 sm:text-[0.66rem]"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
