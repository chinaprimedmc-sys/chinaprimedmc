"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
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
  routeLine: string;
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
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("home-reveal", className)}
      data-visible={shouldReduceMotion ? true : undefined}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      style={{ "--home-reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </motion.div>
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
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const pointerStart = useRef<number | null>(null);
  const didSwipe = useRef(false);
  const resumeTimer = useRef<number | null>(null);
  const mediaX = useMotionValue(0);
  const mediaY = useMotionValue(0);
  const mediaSpringX = useSpring(mediaX, { stiffness: 75, damping: 24, mass: 0.9 });
  const mediaSpringY = useSpring(mediaY, { stiffness: 75, damping: 24, mass: 0.9 });

  useEffect(() => {
    if (isPaused || journeys.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setDirection(1);
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
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex((index + journeys.length) % journeys.length);
    pauseAfterInteraction();
  };
  const activeJourney = journeys[activeIndex];

  return (
    <motion.section
      id="journeys"
      className="home-featured-cinema"
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
        <motion.header
          className="home-featured-cinema__header"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
          <p>Featured private journeys</p>
          <p aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={activeIndex}
                className="home-featured-cinema__counter"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -7 }}
                transition={{ duration: 0.28 }}
              >
                {String(activeIndex + 1).padStart(2, "0")}
              </motion.span>
            </AnimatePresence>{" "}
            / {String(journeys.length).padStart(2, "0")}
          </p>
        </motion.header>

        <div className="home-featured-cinema__layout">
          <motion.div
            className="home-featured-cinema__media"
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 28, clipPath: "inset(0 0 18% 0)" }
            }
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            onPointerMove={(event) => {
              if (shouldReduceMotion || event.pointerType === "touch") return;
              const bounds = event.currentTarget.getBoundingClientRect();
              mediaX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * -18);
              mediaY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -14);
            }}
            onPointerLeave={() => {
              mediaX.set(0);
              mediaY.set(0);
            }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                className="home-featured-cinema__scene"
                data-active="true"
                key={activeJourney.href}
                initial={
                  shouldReduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: direction * 52,
                        clipPath: direction > 0 ? "inset(0 0 0 14%)" : "inset(0 14% 0 0)",
                      }
                }
                animate={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0%)" }}
                exit={
                  shouldReduceMotion
                    ? undefined
                    : {
                        opacity: 0,
                        x: direction * -28,
                        clipPath: direction > 0 ? "inset(0 12% 0 0)" : "inset(0 0 0 12%)",
                      }
                }
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div
                  className="home-featured-cinema__image-motion"
                  style={shouldReduceMotion ? undefined : { x: mediaSpringX, y: mediaSpringY }}
                  animate={shouldReduceMotion ? undefined : { scale: [1.025, 1.075] }}
                  transition={{ duration: 7.6, ease: "linear" }}
                >
                  <OptimizedImage
                    src={activeJourney.image.src}
                    alt={activeJourney.image.alt}
                    fill
                    sizes="(min-width: 768px) 62vw, calc(100vw - 2rem)"
                    frameClassName="absolute inset-0 h-full"
                    className="home-featured-cinema__image h-full w-full object-cover"
                  />
                </motion.div>
                <div className="home-featured-cinema__media-shade" aria-hidden="true" />
                {!shouldReduceMotion ? (
                  <motion.span
                    className="home-featured-cinema__light-sweep"
                    aria-hidden="true"
                    initial={{ x: "-125%" }}
                    animate={{ x: "185%" }}
                    transition={{ duration: 1.25, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  />
                ) : null}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="home-featured-cinema__content">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={activeJourney.href}
                className="home-featured-cinema__chapter"
                data-active="true"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: 0.62, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.p
                  className="home-featured-cinema__route"
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.55, delay: 0.16 }}
                >
                  {activeJourney.routeLine}
                </motion.p>
                <h2 title={activeJourney.title}>
                  {activeJourney.displayTitle.split(/\s+/).map((word, index, words) => (
                    <span key={`${word}-${index}`}>
                      <span className="home-featured-cinema__word-mask">
                        <motion.span
                          className="home-featured-cinema__word"
                          initial={shouldReduceMotion ? false : { y: "112%", opacity: 0 }}
                          animate={{ y: "0%", opacity: 1 }}
                          transition={{
                            duration: 0.72,
                            delay: 0.2 + index * 0.035,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        >
                          {word}
                        </motion.span>
                      </span>
                      {index < words.length - 1 ? " " : null}
                    </span>
                  ))}
                </h2>
                <motion.p
                  className="home-featured-cinema__summary"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.42 }}
                >
                  {activeJourney.description}
                </motion.p>
                <motion.div
                  className="home-featured-cinema__actions"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.52 }}
                >
                  <Link
                    href={activeJourney.href}
                    className="home-featured-cinema__link"
                    onClick={(event) => {
                      if (!didSwipe.current) return;
                      event.preventDefault();
                      didSwipe.current = false;
                    }}
                  >
                    Explore the journey
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </Link>
                  <Link
                    href={`/start-planning?journey=${encodeURIComponent(activeJourney.href.split("/").pop() ?? "")}`}
                    className="home-featured-cinema__link home-featured-cinema__link--secondary"
                    onClick={(event) => {
                      if (!didSwipe.current) return;
                      event.preventDefault();
                      didSwipe.current = false;
                    }}
                  >
                    Request a proposal
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </motion.div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="home-featured-cinema__navigation"
          aria-label="Featured journeys"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        >
          {journeys.map((journey, index) => (
            <Link
              href={journey.href}
              key={journey.href}
              onClick={(event) => {
                if (index === activeIndex) return;
                event.preventDefault();
                showJourney(index);
              }}
              aria-label={
                index === activeIndex
                  ? `Open ${journey.displayTitle}`
                  : `Show ${journey.displayTitle}`
              }
              aria-current={index === activeIndex ? "true" : undefined}
            >
              {index === activeIndex ? (
                <motion.span
                  className="home-featured-cinema__active-rail"
                  layoutId="home-featured-active-rail"
                  transition={{ type: "spring", stiffness: 280, damping: 30 }}
                  aria-hidden="true"
                />
              ) : null}
              <span className="home-featured-cinema__thumb">
                <OptimizedImage
                  src={journey.image.src}
                  alt=""
                  fill
                  sizes="5rem"
                  frameClassName="absolute inset-0 h-full"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="home-featured-cinema__navigation-copy">
                <strong>{journey.navLabel || journey.title}</strong>
                <small>{journey.duration}</small>
                <span className="home-featured-cinema__navigation-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </span>
            </Link>
          ))}
        </motion.div>
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
          <span
            key={`${activeIndex}-${isPaused}`}
            style={
              {
                "--featured-duration": "7600ms",
                animationPlayState: isPaused ? "paused" : "running",
              } as CSSProperties
            }
          />
        </div>
        <style>{`
          .home-featured-cinema__counter {
            display: inline-block;
            min-width: 1.35rem;
          }

          .home-featured-cinema__header p:last-child {
            margin-right: 6.75rem;
            min-width: 4.25rem;
            text-align: right;
          }

          .home-featured-cinema__image-motion {
            inset: -14px;
            position: absolute;
            will-change: transform;
          }

          .home-featured-cinema__media-shade {
            background: linear-gradient(115deg, rgba(7, 8, 7, 0.08), transparent 42%, rgba(7, 8, 7, 0.04));
            inset: 0;
            pointer-events: none;
            position: absolute;
            z-index: 2;
          }

          .home-featured-cinema__light-sweep {
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.16), transparent);
            inset: 0 auto 0 -35%;
            pointer-events: none;
            position: absolute;
            transform: skewX(-12deg);
            width: 42%;
            z-index: 3;
          }

          .home-featured-cinema__word-mask {
            display: inline-block;
            margin-bottom: -0.18em;
            overflow: hidden;
            padding-block: 0.06em 0.18em;
            vertical-align: bottom;
          }

          .home-featured-cinema__word {
            display: inline-block;
            will-change: transform, opacity;
          }

          .home-featured-cinema__navigation > a {
            overflow: hidden;
            position: relative;
          }

          .home-featured-cinema__active-rail {
            background: var(--text-primary);
            height: 2px;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 3;
          }

          .home-featured-cinema__thumb img {
            filter: saturate(0.72);
            transform: scale(1.01);
            transition: filter 600ms ease, transform 800ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          .home-featured-cinema__navigation > a:hover .home-featured-cinema__thumb img,
          .home-featured-cinema__navigation > a[aria-current="true"] .home-featured-cinema__thumb img {
            filter: saturate(1.08);
            transform: scale(1.09);
          }

          .home-featured-cinema__link svg,
          .home-featured-cinema__arrows svg {
            transition: transform 350ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          .home-featured-cinema__link:hover svg {
            transform: translate(2px, -2px);
          }

          .home-featured-cinema__arrows button:hover svg {
            transform: translateX(2px);
          }

          .home-featured-cinema__arrows button:first-child:hover svg {
            transform: translateX(-2px);
          }

          @media (max-width: 767px) {
            .home-featured-cinema__header p:last-child {
              margin-right: 0;
            }

            .home-featured-cinema__image-motion {
              inset: -8px;
            }

            .home-featured-cinema__light-sweep {
              display: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .home-featured-cinema__image-motion,
            .home-featured-cinema__word,
            .home-featured-cinema__thumb img,
            .home-featured-cinema__link svg,
            .home-featured-cinema__arrows svg {
              animation: none;
              transform: none;
              transition: none;
            }
          }
        `}</style>
      </div>
    </motion.section>
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
