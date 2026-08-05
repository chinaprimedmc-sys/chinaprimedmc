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
  displayTitle: string;
  navLabel: string;
  titleLength: "short" | "medium" | "long";
  durationBadge: string;
  accent: "gold" | "bamboo";
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
  const wheelLock = useRef(false);
  const interactionTimer = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused || items.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 6200);
    return () => window.clearInterval(timer);
  }, [isPaused, items.length]);

  useEffect(
    () => () => {
      if (interactionTimer.current) window.clearTimeout(interactionTimer.current);
    },
    [],
  );

  if (!items.length) return null;

  const previous = () => setActiveIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setActiveIndex((current) => (current + 1) % items.length);
  const pauseAfterInteraction = (duration = 1200) => {
    setIsPaused(true);
    if (interactionTimer.current) window.clearTimeout(interactionTimer.current);
    interactionTimer.current = window.setTimeout(() => setIsPaused(false), duration);
  };

  return (
    <div
      className="home-destination-gallery"
      data-active={activeIndex % 3}
      onWheel={(event) => {
        if (Math.abs(event.deltaY) < 10 || wheelLock.current) return;
        wheelLock.current = true;
        if (event.deltaY > 0) next();
        else previous();
        pauseAfterInteraction();
        window.setTimeout(() => {
          wheelLock.current = false;
        }, 260);
      }}
    >
      <div
        className="home-destination-gallery__rail"
        aria-label="Explore China destinations"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            previous();
            pauseAfterInteraction();
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            next();
            pauseAfterInteraction();
          }
        }}
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
          didSwipe.current = false;
          pauseAfterInteraction();
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
          pauseAfterInteraction();
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
          pauseAfterInteraction();
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
              onClick={(event) => {
                if (didSwipe.current) {
                  event.preventDefault();
                  didSwipe.current = false;
                  return;
                }
                if (!active) {
                  event.preventDefault();
                  setActiveIndex(index);
                  pauseAfterInteraction(6000);
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
              onClick={() => {
                setActiveIndex(index);
                pauseAfterInteraction();
              }}
            />
          ))}
        </div>
        <div className="home-destination-gallery__arrows">
          <button
            type="button"
            onClick={() => {
              previous();
              pauseAfterInteraction();
            }}
            aria-label="Previous destination"
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => {
              next();
              pauseAfterInteraction();
            }}
            aria-label="Next destination"
          >
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pointerStart = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const resumeTimer = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused || journeys.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % journeys.length);
    }, 7600);
    return () => window.clearInterval(timer);
  }, [isPaused, journeys.length]);

  useEffect(
    () => () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  if (!journeys.length) return null;

  const pauseAfterInteraction = () => {
    setIsPaused(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setIsPaused(false), 9000);
  };
  const showJourney = (index: number) => {
    setActiveIndex((index + journeys.length) % journeys.length);
    pauseAfterInteraction();
  };

  return (
    <section
      id="journeys"
      className="home-featured-cinema"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onPointerDown={(event) => {
        pointerStart.current = event.clientX;
        didSwipe.current = false;
        pauseAfterInteraction();
      }}
      onPointerUp={(event) => {
        if (pointerStart.current === null) return;
        const distance = event.clientX - pointerStart.current;
        if (Math.abs(distance) > 48) {
          didSwipe.current = true;
          showJourney(activeIndex + (distance < 0 ? 1 : -1));
        }
        pointerStart.current = null;
      }}
      onPointerCancel={() => {
        pointerStart.current = null;
      }}
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
              data-title-length={journey.titleLength}
              aria-hidden={index !== activeIndex}
              inert={index !== activeIndex}
            >
              <p className="home-featured-cinema__eyebrow">
                Featured journey · {String(index + 1).padStart(2, "0")} /{" "}
                {String(journeys.length).padStart(2, "0")}
              </p>
              <p className="home-featured-cinema__duration">{journey.durationBadge}</p>
              <h2 title={journey.title}>{journey.displayTitle}</h2>
              <p className="home-featured-cinema__summary">{journey.description}</p>
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
              <div className="home-featured-cinema__actions">
                <Link
                  href={journey.href}
                  className="home-featured-cinema__link"
                  onClick={(event) => {
                    if (!didSwipe.current) return;
                    event.preventDefault();
                    didSwipe.current = false;
                  }}
                >
                  View journey
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
                <Link
                  href={`/start-planning?journey=${encodeURIComponent(journey.title)}`}
                  className="home-featured-cinema__link home-featured-cinema__link--secondary"
                  onClick={(event) => {
                    if (!didSwipe.current) return;
                    event.preventDefault();
                    didSwipe.current = false;
                  }}
                >
                  Plan this trip
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="home-featured-cinema__navigation" aria-label="Featured journeys">
          {journeys.map((journey, index) => (
            <button
              type="button"
              key={journey.href}
              onClick={() => showJourney(index)}
              aria-label={`Show ${journey.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <span className="home-featured-cinema__navigation-copy">
                <strong>{journey.navLabel || journey.title}</strong>
                <small>{journey.duration}</small>
              </span>
            </button>
          ))}
        </div>
        <div className="home-featured-cinema__arrows">
          <button
            type="button"
            onClick={() => showJourney(activeIndex - 1)}
            aria-label="Previous journey"
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => showJourney(activeIndex + 1)}
            aria-label="Next journey"
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
        <div className="home-featured-cinema__progress" aria-hidden="true">
          <span key={activeIndex} style={{ "--featured-duration": "7600ms" } as CSSProperties} />
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
