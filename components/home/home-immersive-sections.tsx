"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
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
  navLabel: string;
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
  const [isPaused, setIsPaused] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const didSwipe = useRef(false);

  useEffect(() => {
    if (isPaused || items.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, [isPaused, items.length]);

  if (!items.length) return null;

  const previous = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setActiveIndex((current) => (current + 1) % items.length);

  return (
    <div
      className="home-destination-gallery"
      data-active={activeIndex % 3}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="home-destination-gallery__rail"
        aria-label="Explore China destinations"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            previous();
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            next();
          }
        }}
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
          didSwipe.current = false;
          setIsPaused(true);
        }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return;
          const distance = event.clientX - pointerStart.current;
          if (Math.abs(distance) > 42) {
            didSwipe.current = true;
            if (distance < 0) next();
            else previous();
          }
          pointerStart.current = null;
          setIsPaused(false);
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
          setIsPaused(false);
        }}
      >
        {items.map((item, index) => {
          const offset = homeCircularOffset(index, activeIndex, items.length);
          const distance = Math.abs(offset);
          const active = distance === 0;
          const visible = distance <= 2;
          const scale = active ? 1 : distance === 1 ? 0.78 : 0.64;
          const opacity = active ? 1 : distance === 1 ? 0.66 : 0.3;

          return (
            <Link
              href={item.href}
              key={item.title}
              className="home-destination-gallery__item group"
              data-active={active}
              data-visible={visible}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              style={{
                opacity,
                filter: active ? "saturate(1)" : "saturate(.65) brightness(.72)",
                transform: `translate(calc(-50% + ${offset} * clamp(12rem, 28vw, 28rem)), -50%) scale(${scale}) rotateY(${offset * -12}deg)`,
                zIndex: active ? 20 : distance === 1 ? 10 : 1,
              }}
              onFocus={() => setActiveIndex(index)}
              onClick={(event) => {
                if (didSwipe.current) {
                  event.preventDefault();
                  didSwipe.current = false;
                  return;
                }
                if (!active) {
                  event.preventDefault();
                  setActiveIndex(index);
                }
              }}
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
                <strong>{active ? "Explore destination" : "Bring to centre"}</strong>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="home-destination-gallery__controls">
        <p>
          <span>{String(activeIndex + 1).padStart(2, "0")}</span> /{" "}
          {String(items.length).padStart(2, "0")} · {items[activeIndex]?.title}
        </p>
        <div className="home-destination-gallery__progress" aria-label="Choose a destination">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.title}
              aria-label={`Show ${item.title}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <div className="home-destination-gallery__arrows">
          <button type="button" onClick={previous} aria-label="Previous destination">
            <ArrowLeft aria-hidden="true" />
          </button>
          <button type="button" onClick={next} aria-label="Next destination">
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

function homeCircularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
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
              <strong>{journey.navLabel || journey.title}</strong>
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
