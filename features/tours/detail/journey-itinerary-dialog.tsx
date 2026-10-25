"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { BedDouble, CarFront, ChevronRight, Utensils, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useJourneyConfiguration } from "./journey-configuration";
import type { TourDetailModel } from "./tour-detail-model";
import { JourneyWhatsAppAction } from "./journey-booking-summary";
import styles from "./journey-itinerary-dialog.module.css";

export function JourneyItineraryDialog({ model }: { model: TourDetailModel }) {
  const { duration } = useJourneyConfiguration();
  const days = model.days;
  const [activeIndex, setActiveIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hasSeenTrigger = useRef(false);
  const hasBeenDismissed = useRef(false);
  const hasBeenOpened = useRef(false);
  const openingAutomatically = useRef(false);
  const lastScrollY = useRef(0);
  const openTimer = useRef<number | null>(null);
  const dayContentRef = useRef<HTMLDivElement>(null);
  const daysNavRef = useRef<HTMLElement>(null);
  const returnToCoverage = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isPrompted, setIsPrompted] = useState(false);

  function updateActiveDay() {
    const content = dayContentRef.current;
    if (!content) return;
    const sections = content.querySelectorAll<HTMLElement>("[data-itinerary-day]");
    let current = 0;
    for (let index = 0; index < sections.length; index++) {
      if (sections[index].offsetTop <= content.scrollTop + 80) current = index;
      else break;
    }
    setActiveIndex((previous) => (previous === current ? previous : current));
  }

  function scrollToDay(index: number) {
    const content = dayContentRef.current;
    const target = content?.querySelectorAll<HTMLElement>("[data-itinerary-day]")[index];
    if (!content || !target) return;
    content.scrollTo({
      top: target.offsetTop,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
    setActiveIndex(index);
  }

  function goToCoverage() {
    returnToCoverage.current = true;
    setIsOpen(false);
    window.setTimeout(() => {
      const heading = document.getElementById("included-title");
      heading?.focus({ preventScroll: true });
      document.getElementById("included")?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
      returnToCoverage.current = false;
    }, 220);
  }

  useEffect(() => {
    const selected = daysNavRef.current?.querySelector<HTMLElement>('[aria-current="step"]');
    const nav = daysNavRef.current;
    if (selected && nav) {
      const top = selected.offsetTop;
      if (top < nav.scrollTop || top + selected.offsetHeight > nav.scrollTop + nav.clientHeight) {
        nav.scrollTo({
          top: top - nav.clientHeight / 2 + selected.offsetHeight / 2,
          behavior: "smooth",
        });
      }
    }
  }, [activeIndex]);

  useEffect(() => {
    const trigger = triggerRef.current;
    if (!trigger) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hasSeenTrigger.current = true;
          setIsPrompted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.85 },
    );
    observer.observe(trigger);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const trigger = triggerRef.current;
    if (!trigger) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > lastScrollY.current;
      lastScrollY.current = currentY;

      if (
        !scrollingDown ||
        !hasSeenTrigger.current ||
        hasBeenDismissed.current ||
        hasBeenOpened.current ||
        isOpen
      )
        return;

      const distancePastTrigger = -trigger.getBoundingClientRect().bottom;
      if (distancePastTrigger < 18) return;

      if (openTimer.current !== null) window.clearTimeout(openTimer.current);
      openTimer.current = window.setTimeout(() => {
        if (document.hidden || hasBeenDismissed.current || hasBeenOpened.current) return;
        openingAutomatically.current = true;
        hasBeenOpened.current = true;
        setIsOpen(true);
        openTimer.current = null;
      }, 110);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (openTimer.current !== null) window.clearTimeout(openTimer.current);
    };
  }, [isOpen]);

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (open) {
          if (!openingAutomatically.current) hasBeenOpened.current = true;
          setActiveIndex(0);
          dayContentRef.current?.scrollTo(0, 0);
        } else {
          hasBeenDismissed.current = true;
        }
        openingAutomatically.current = false;
        setIsOpen(open);
      }}
    >
      <Dialog.Trigger
        ref={triggerRef}
        className={`${styles.openButton} ${isPrompted ? styles.openButtonPrompt : ""}`}
        type="button"
      >
        <span>View day-by-day itinerary</span>
        <ChevronRight size={18} aria-hidden="true" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.dialog}
          aria-describedby="journey-dialog-description"
          onCloseAutoFocus={(event) => {
            if (returnToCoverage.current) event.preventDefault();
          }}
        >
          <div className={styles.header}>
            <div>
              <span className={styles.eyebrow}>Your journey</span>
              <Dialog.Title>{model.route}</Dialog.Title>
              <Dialog.Description id="journey-dialog-description">
                {duration} · Scroll through the journey or choose a day.
              </Dialog.Description>
            </div>
            <Dialog.Close className={styles.close} aria-label="Close itinerary">
              <X size={20} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <div className={styles.body}>
            <nav className={styles.days} ref={daysNavRef} aria-label="Select an itinerary day">
              {days.map((day, index) => (
                <button
                  type="button"
                  key={`${day.label}-${index}`}
                  aria-current={index === activeIndex ? "step" : undefined}
                  onClick={() => scrollToDay(index)}
                >
                  <span>{day.label}</span>
                  <strong>{day.destination}</strong>
                </button>
              ))}
            </nav>
            <div className={styles.dayContent} ref={dayContentRef} onScroll={updateActiveDay}>
              {days.map((day, index) => (
                <section
                  className={styles.daySection}
                  data-itinerary-day
                  key={`${day.label}-${index}`}
                  aria-label={`${day.label}: ${day.title}`}
                >
                  <span className={styles.eyebrow}>
                    {day.label} · {day.destination}
                  </span>
                  <h3>{day.title}</h3>
                  {day.summary ? <p className={styles.lead}>{day.summary}</p> : null}
                  {day.experiences.length ? (
                    <div className={styles.experiences}>
                      {day.experiences.map((experience) => (
                        <div key={experience.title}>
                          <h4>{experience.title}</h4>
                          <p>{experience.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {day.guideInsight ? <p className={styles.insight}>{day.guideInsight}</p> : null}
                  <dl className={styles.facts}>
                    <div>
                      <CarFront size={16} aria-hidden="true" />
                      <dt>Travel</dt>
                      <dd>{day.transport}</dd>
                    </div>
                    {day.meals ? (
                      <div>
                        <Utensils size={16} aria-hidden="true" />
                        <dt>Included meals</dt>
                        <dd>{day.meals}</dd>
                      </div>
                    ) : null}
                    <div>
                      <BedDouble size={16} aria-hidden="true" />
                      <dt>{days.length === 1 ? "End of day" : "Stay"}</dt>
                      <dd>{day.stay}</dd>
                    </div>
                  </dl>
                </section>
              ))}
              <button type="button" className={styles.nextDay} onClick={goToCoverage}>
                What&apos;s included and what isn&apos;t{" "}
                <ChevronRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className={styles.footer}>
            <span>{duration} · Private journey</span>
            <JourneyWhatsAppAction
              baseHref={model.whatsappHref}
              journeySlug={model.slug}
              journeyTitle={model.title}
              className={styles.whatsapp}
              placement="detail-itinerary-dialog"
            />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
