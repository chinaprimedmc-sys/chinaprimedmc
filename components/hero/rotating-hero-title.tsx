"use client";

import { useEffect, useMemo, useState } from "react";

type RotatingHeroTitleProps = {
  fixedText: string;
  items: string[];
};

export function RotatingHeroTitle({ fixedText, items }: RotatingHeroTitleProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reducedMotion || items.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [items.length, reducedMotion]);

  const longestItem = useMemo(
    () => items.reduce((longest, item) => (item.length > longest.length ? item : longest), ""),
    [items],
  );

  const activeItem = items[index] ?? items[0] ?? "";

  return (
    <>
      <span className="sr-only">
        {fixedText}
        {items[0]}
      </span>
      <span aria-hidden="true" className="hero-title-visible">
        {fixedText}
        <span className="hero-title-rotator">
          <span className="hero-title-measure">{longestItem}</span>
          {items.map((item) => (
            <span className="hero-title-item" data-active={item === activeItem} key={item}>
              {item}
            </span>
          ))}
        </span>
      </span>
    </>
  );
}
