"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import type { MediaAsset } from "@/types/component-library";

type ExploreItem = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: MediaAsset;
};

type PlanningStep = {
  number: string;
  title: string;
  description: string;
};

export function HomeReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const revealRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = revealRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10%", threshold: 0.12 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={revealRef}
      className={cn("home-reveal", className)}
      data-visible={visible}
      style={{ "--home-reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function DestinationFocusGallery({ items }: { items: ExploreItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="home-destination-gallery" data-active={activeIndex}>
      <div className="home-destination-gallery__rail" aria-label="Explore China">
        {items.map((item, index) => {
          const active = index === activeIndex;

          return (
            <Link
              href={item.href}
              key={item.title}
              className="home-destination-gallery__item group"
              data-active={active}
              onFocus={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onPointerDown={() => setActiveIndex(index)}
              aria-label={`${item.title}: ${item.description}`}
            >
              <OptimizedImage
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 62vw, 86vw"
                objectPosition={item.image.objectPosition}
                frameClassName="absolute inset-0 h-full"
                className="home-destination-gallery__image h-full w-full"
              />
              <div className="home-destination-gallery__shade" aria-hidden="true" />
              <div className="home-destination-gallery__copy">
                <p>{item.eyebrow}</p>
                <div className="home-destination-gallery__title-row">
                  <h3>{item.title}</h3>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </div>
                <span>{item.description}</span>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="home-destination-gallery__controls" aria-label="Choose a visual story">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.title}
            aria-label={`Show ${item.title}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PlanningStory({ image, steps }: { image: MediaAsset; steps: PlanningStep[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];
        if (!visibleEntry) return;

        const index = Number((visibleEntry.target as HTMLElement).dataset.stepIndex);
        setActiveIndex(index);
      },
      { rootMargin: "-28% 0px -38%", threshold: [0.2, 0.5, 0.8] },
    );

    stepRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-planning-story">
      <div className="home-planning-story__media">
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width:1024px) 44vw, 100vw"
          objectPosition={image.objectPosition}
          frameClassName="absolute inset-0 h-full"
          className="home-planning-story__image h-full w-full"
        />
        <div className="home-planning-story__caption">
          <span>Designed around people</span>
          <strong>Not around a fixed package</strong>
        </div>
      </div>
      <ol className="home-planning-story__steps">
        <span
          className="home-planning-story__progress"
          style={
            {
              "--planning-progress": `${((activeIndex + 1) / steps.length) * 100}%`,
            } as CSSProperties
          }
          aria-hidden="true"
        />
        {steps.map((step, index) => (
          <li
            key={step.number}
            ref={(node) => {
              stepRefs.current[index] = node;
            }}
            data-step-index={index}
            data-active={index === activeIndex}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <span className="home-planning-story__number">{step.number}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
