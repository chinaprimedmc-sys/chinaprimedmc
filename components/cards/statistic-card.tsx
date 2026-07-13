"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils/cn";

export function StatisticCard({
  value,
  label,
  helper,
  className,
}: {
  value: string;
  label: string;
  helper?: string;
  className?: string;
}) {
  const numericValue = useMemo(() => {
    const normalized = value.replace(/,/g, "").trim();
    return /^-?\d+(\.\d+)?$/.test(normalized) ? Number(normalized) : null;
  }, [value]);
  const [animatedValue, setAnimatedValue] = useState("0");
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRef = useRef<HTMLElement | null>(null);
  const hasAnimated = useRef(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (numericValue === null || shouldReduceMotion) return;

    const node = cardRef.current;
    if (!node) return;

    const formatter = new Intl.NumberFormat("en-US", {
      maximumFractionDigits: Number.isInteger(numericValue) ? 0 : 1,
      useGrouping: false,
    });

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      setIsAnimating(true);

      const duration = numericValue === 0 ? 1000 : 1350;
      const start = performance.now();
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = numericValue * easeOut(progress);
        setAnimatedValue(formatter.format(current));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setAnimatedValue(value);
        }
      };

      requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.42 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [numericValue, shouldReduceMotion, value]);

  const displayValue =
    numericValue === null || shouldReduceMotion ? value : isAnimating ? animatedValue : "0";

  return (
    <article
      ref={cardRef}
      className={cn(
        "rounded-[1.75rem] border border-white/70 bg-white/62 p-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl md:p-6",
        className,
      )}
    >
      <p className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{displayValue}</p>
      <p className="mt-3 text-sm font-semibold">{label}</p>
      {helper ? <p className="text-muted mt-2 text-sm leading-6">{helper}</p> : null}
    </article>
  );
}
