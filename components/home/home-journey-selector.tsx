"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { KeyboardEvent, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

import styles from "@/components/home/home-redesign.module.css";
import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import { WhatsAppIcon } from "@/components/icons";

export type HomeJourney = {
  title: string;
  meta: string;
  mobileDuration: string;
  mobileAudience: string;
  duration: string;
  fit: string;
  summary: string;
  proofs: string[];
  price: string;
  priceBasis: string;
  href: string;
  image: { src: string; alt: string; width: number; height: number };
};

export function HomeSectionReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -4% 0px" }}
      transition={{ duration: 0.92, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function HomeJourneySelector({
  journeys,
  whatsappHref,
}: {
  journeys: HomeJourney[];
  whatsappHref: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectionVersion, setSelectionVersion] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const mobileListRef = useRef<HTMLDivElement | null>(null);
  const mobileCardRefs = useRef<Array<HTMLElement | null>>([]);
  const reduceMotion = useReducedMotion();
  const selectedJourney = journeys[selectedIndex];

  useEffect(() => {
    const list = mobileListRef.current;
    if (!list) return;

    let frame = 0;
    const initialScrollLeft = list.scrollLeft;
    delete list.dataset.interacted;
    const updateDepth = () => {
      frame = 0;
      const listBounds = list.getBoundingClientRect();
      const listCenter = listBounds.left + listBounds.width / 2;
      const depthRange = Math.max(listBounds.width * 0.72, 1);

      mobileCardRefs.current.forEach((card) => {
        if (!card) return;
        const cardBounds = card.getBoundingClientRect();
        const cardCenter = cardBounds.left + cardBounds.width / 2;
        const offset = Math.max(-1, Math.min(1, (cardCenter - listCenter) / depthRange));
        const distance = Math.abs(offset);

        card.style.setProperty("--mobile-journey-rotate", `${offset * -8}deg`);
        card.style.setProperty("--mobile-journey-scale", String(1 - distance * 0.055));
        card.style.setProperty("--mobile-journey-z", `${(1 - distance) * 18}px`);
      });
    };

    const scheduleDepthUpdate = () => {
      if (Math.abs(list.scrollLeft - initialScrollLeft) > 24) {
        list.dataset.interacted = "true";
      }
      if (frame) return;
      frame = window.requestAnimationFrame(updateDepth);
    };

    updateDepth();
    list.addEventListener("scroll", scheduleDepthUpdate, { passive: true });
    window.addEventListener("resize", scheduleDepthUpdate);

    return () => {
      list.removeEventListener("scroll", scheduleDepthUpdate);
      window.removeEventListener("resize", scheduleDepthUpdate);
      window.cancelAnimationFrame(frame);
    };
  }, [journeys.length]);

  if (!selectedJourney) return null;
  const getJourneyWhatsappHref = (title: string) => {
    const separator = whatsappHref.includes("?") ? "&" : "?";
    return `${whatsappHref}${separator}text=${encodeURIComponent(`Hello AVIORA, I would like to know more about the ${title} journey.`)}`;
  };
  const journeyWhatsappHref = getJourneyWhatsappHref(selectedJourney.title);

  const selectJourney = (index: number) => {
    setSelectedIndex(index);
    setSelectionVersion((version) => version + 1);
  };

  const selectJourneyFromKeyboard = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % journeys.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + journeys.length) % journeys.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = journeys.length - 1;
    else return;

    event.preventDefault();
    selectJourney(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <>
      <div className={styles.desktopJourneySelector}>
        <div className={styles.journeyEditorialLayout}>
          <div className={styles.journeyVisualColumn}>
            <Link
              href={selectedJourney.href}
              className={styles.journeyNaturalMedia}
              aria-label={`Explore ${selectedJourney.title}`}
            >
              <div className={styles.journeyNaturalImageStage}>
                <AnimatePresence initial={false}>
                  <motion.div
                    key={`${selectedJourney.image.src}-${selectionVersion}`}
                    className={styles.journeyNaturalImageLayer}
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.92, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <OptimizedImage
                      src={selectedJourney.image.src}
                      alt={selectedJourney.image.alt}
                      width={selectedJourney.image.width}
                      height={selectedJourney.image.height}
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      frameClassName={styles.journeyNaturalImageFrame}
                      className={styles.journeyNaturalImage}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </Link>
          </div>

          <div
            className={styles.journeyEditorialDetails}
            id="selected-journey-panel"
            aria-live="polite"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={`${selectedJourney.href}-${selectionVersion}`}
                className={styles.journeyEditorialDetailsLayer}
                initial={reduceMotion ? false : { opacity: 0, y: 7 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
                transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.journeyEditorialIntro}>
                  <p className={styles.journeyEditorialMeta}>{selectedJourney.meta}</p>
                  <p className={styles.journeyFit}>{selectedJourney.fit}</p>
                  <h3>{selectedJourney.title}</h3>
                  <p className={styles.journeyEditorialDescription}>{selectedJourney.summary}</p>
                </div>

                <div
                  className={styles.journeyServiceProofs}
                  aria-label="What makes this journey private"
                >
                  {selectedJourney.proofs.map((proof) => (
                    <span key={proof}>{proof}</span>
                  ))}
                </div>

                <div className={styles.journeyDecisionRow}>
                  <div className={styles.journeyCommercialBlock}>
                    <p className={styles.journeyEditorialPrice}>
                      <span>{selectedJourney.duration} private journey from</span>
                      <strong>{selectedJourney.price}</strong>
                      <small>{selectedJourney.priceBasis}</small>
                    </p>
                  </div>
                </div>
                <div className={styles.journeyActionRow}>
                  <Link href={selectedJourney.href} className={styles.journeyEditorialCta}>
                    View itinerary <ArrowUpRight aria-hidden="true" />
                  </Link>
                  <a
                    href={journeyWhatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.journeyWhatsappCta}
                  >
                    <WhatsAppIcon /> Message Our China Team
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className={styles.journeySelectorDock}>
          <div
            className={styles.journeySelectorRow}
            role="tablist"
            aria-label="Selected private journeys"
          >
            {journeys.map((journey, index) => {
              const isSelected = selectedIndex === index;
              return (
                <button
                  key={journey.href}
                  type="button"
                  role="tab"
                  className={cn(
                    styles.journeySelectorPill,
                    isSelected && styles.journeySelectorPillActive,
                  )}
                  aria-selected={isSelected}
                  aria-controls="selected-journey-panel"
                  tabIndex={isSelected ? 0 : -1}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  onClick={() => selectJourney(index)}
                  onKeyDown={(event) => selectJourneyFromKeyboard(event, index)}
                >
                  <strong>{journey.title}</strong>
                  <span>{journey.meta}</span>
                </button>
              );
            })}
          </div>
          <Link href="/tours" className={styles.journeyExploreLink}>
            Explore all journeys <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className={styles.mobileJourneyViewport}>
        <div
          ref={mobileListRef}
          className={styles.mobileJourneyList}
          aria-label="Selected private journeys"
        >
          {journeys.map((journey, index) => (
            <article
              className={styles.mobileJourney}
              key={journey.href}
              ref={(node) => {
                mobileCardRefs.current[index] = node;
              }}
            >
              <Link
                href={journey.href}
                className={styles.mobileJourneyImage}
                aria-label={`Explore ${journey.title}`}
              >
                <OptimizedImage
                  src={journey.image.src}
                  alt={journey.image.alt}
                  width={journey.image.width}
                  height={journey.image.height}
                  sizes="88vw"
                  className={styles.naturalImage}
                />
              </Link>
              <div className={styles.mobileJourneyCopy}>
                <div className={styles.mobileJourneyKeyInfo}>
                  <strong>{journey.mobileDuration}</strong>
                  <span>{journey.mobileAudience}</span>
                </div>
                <span className={styles.mobileJourneyDivider} aria-hidden="true" />
                <h3>
                  <Link href={journey.href}>{journey.title}</Link>
                </h3>
                <span>{journey.summary}</span>
                <p
                  className={styles.mobileJourneyProofs}
                  aria-label="What makes this journey private"
                >
                  {journey.proofs.map((proof) => (
                    <span key={proof}>{proof}</span>
                  ))}
                </p>
                <p className={styles.journeyPrice}>
                  <strong>From {journey.price}</strong>
                  <small>{journey.priceBasis}</small>
                </p>
                <div className={styles.mobileJourneyActions}>
                  <Link href={journey.href} className={styles.journeyPrimaryLink}>
                    View journey <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
