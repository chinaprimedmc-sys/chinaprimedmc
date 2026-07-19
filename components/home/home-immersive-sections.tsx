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

type FeaturedJourney = {
  title: string;
  titleLocation: string;
  titleExperience: string;
  titleSuffix: string;
  durationBadge: string;
  accent: "gold" | "bamboo";
  poeticTitle: string;
  description: string;
  image: MediaAsset;
  href: string;
  duration: string;
  route: string;
  bestFor: string;
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

export function FeaturedJourneyCinema({ journeys }: { journeys: FeaturedJourney[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;

    const updateActiveJourney = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;

      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-bounds.top / travel, 0), 0.999);
      const nextIndex = Math.min(Math.floor(progress * journeys.length), journeys.length - 1);
      if (nextIndex === activeIndexRef.current) return;

      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(updateActiveJourney);
    };

    updateActiveJourney();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, [journeys.length]);

  const goToJourney = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
    const target = sectionTop + travel * ((index + 0.15) / journeys.length);
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="journeys"
      className="home-featured-cinema"
      style={{ "--featured-count": journeys.length } as CSSProperties}
    >
      <div className="home-featured-cinema__stage">
        <div className="home-featured-cinema__media" aria-hidden="true">
          {journeys.map((journey, index) => (
            <div
              className="home-featured-cinema__scene"
              data-active={index === activeIndex}
              key={journey.href}
            >
              <OptimizedImage
                src={journey.image.src}
                alt=""
                fill
                sizes="100vw"
                objectPosition={journey.image.objectPosition}
                frameClassName="absolute inset-0 h-full"
                className="home-featured-cinema__image h-full w-full"
              />
            </div>
          ))}
        </div>
        <div className="home-featured-cinema__wash" aria-hidden="true" />

        <div className="home-featured-cinema__content">
          {journeys.map((journey, index) => (
            <article
              key={journey.href}
              className="home-featured-cinema__chapter"
              data-active={index === activeIndex}
              data-accent={journey.accent}
              aria-hidden={index !== activeIndex}
            >
              <p className="home-featured-cinema__eyebrow">
                Featured journey · {String(index + 1).padStart(2, "0")} /{" "}
                {String(journeys.length).padStart(2, "0")}
              </p>
              <p className="home-featured-cinema__duration">{journey.durationBadge}</p>
              <h2 aria-label={journey.title}>
                <span className="sr-only">{journey.durationBadge.split(" DAYS")[0]}-Day </span>
                <span className="home-featured-cinema__location">{journey.titleLocation}</span>
                {journey.titleExperience ? (
                  <span className="home-featured-cinema__experience">
                    {journey.titleExperience}
                  </span>
                ) : null}
                <span className="home-featured-cinema__suffix">{journey.titleSuffix}</span>
              </h2>
              <p className="home-featured-cinema__poetic">{journey.poeticTitle}</p>
              <dl className="home-featured-cinema__facts">
                <div>
                  <dt>Route</dt>
                  <dd>{journey.route}</dd>
                </div>
                <div>
                  <dt>Best for</dt>
                  <dd>{journey.bestFor}</dd>
                </div>
              </dl>
              <p className="home-featured-cinema__summary">{journey.description}</p>
              <Link href={journey.href} className="home-featured-cinema__link">
                Explore this journey
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <div className="home-featured-cinema__navigation" aria-label="Featured journeys">
          {journeys.map((journey, index) => (
            <button
              type="button"
              key={journey.href}
              onClick={() => goToJourney(index)}
              aria-label={`Show ${journey.title}`}
              aria-pressed={index === activeIndex}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <i />
              <strong>{index === 0 ? "Essential China" : "Chengdu"}</strong>
            </button>
          ))}
        </div>

        <div className="home-featured-cinema__scroll-cue" aria-hidden="true">
          <span>Scroll to explore</span>
          <i />
        </div>
      </div>
    </section>
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
