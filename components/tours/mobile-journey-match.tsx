"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, ArrowRight, Check, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { getJourneyCardTitle } from "@/content/tours/card-copy";
import {
  matchJourneys,
  readMatchAnswers,
  writeMatchAnswers,
  type MatchAnswers,
} from "@/lib/tours/journey-match";
import { JOURNEY_MATCH_EVENT } from "@/lib/tours/journey-tools";

import styles from "./mobile-journey-match.module.css";

const scenes = [
  {
    src: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.jpg",
    alt: "Great Wall winding over the mountains near Beijing",
    label: "Your time",
    title: "How long can you get away?",
    options: [
      { value: "one-day", label: "One day" },
      { value: "four-seven", label: "4–7 days" },
      { value: "eight-twelve", label: "8–12 days" },
      { value: "thirteen-plus", label: "13+ days" },
      { value: "flexible", label: "My dates are open" },
    ],
  },
  {
    src: "/home/editorial/philosophy-family-friendly.avif",
    alt: "Family learning to make dumplings with local hosts",
    label: "Your people",
    title: "Who’s coming with you?",
    options: [
      { value: "couple", label: "My partner" },
      { value: "family", label: "My family" },
      { value: "friends", label: "Friends" },
      { value: "solo", label: "Just me" },
    ],
  },
  {
    src: "/tours/luxury-yunnan-private-tour/jade-dragon.jpg",
    alt: "Jade Dragon Snow Mountain in Yunnan",
    label: "Your memories",
    title: "What draws you to China?",
    options: [
      { value: "icons", label: "The places I’ve dreamed of" },
      { value: "together", label: "Time together as a family" },
      { value: "nature", label: "Landscapes and open space" },
      { value: "culture", label: "Everyday life and culture" },
    ],
  },
  {
    src: "/tours/first-china-beautifully-paced/shanghai-huangpu-sunset.webp",
    alt: "Shanghai skyline across the Huangpu River at sunset",
    label: "Your rhythm",
    title: "How should the days feel?",
    options: [
      { value: "easy", label: "Room to linger" },
      { value: "balanced", label: "A bit of both" },
      { value: "active", label: "Full of discovery" },
    ],
  },
] as const;

const initial: Partial<MatchAnswers> = { interests: [] };

function selectionSummary(answers: MatchAnswers) {
  const time = {
    "one-day": "One day",
    "four-seven": "4–7 days",
    "eight-twelve": "8–12 days",
    "thirteen-plus": "13+ days",
    flexible: "Flexible dates",
  }[answers.time];
  const people = { couple: "For two", family: "Family", friends: "With friends", solo: "Solo" }[
    answers.company
  ];
  return `${time} · ${people}`;
}

export function MobileJourneyMatch({
  items,
  onBrowse,
  browsing,
  showEntry = true,
}: {
  items: JourneyCatalogItem[];
  onBrowse: () => void;
  browsing: boolean;
  showEntry?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [answers, setAnswers] = useState<Partial<MatchAnswers>>(initial);
  const [advancing, setAdvancing] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const externalTriggerRef = useRef<HTMLElement | null>(null);
  const advanceTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const restore = (fromHistory = false) => {
      if (!window.matchMedia("(max-width: 767px)").matches) return;
      const saved = readMatchAnswers(new URL(window.location.href).searchParams.get("match"));
      if (saved) {
        setAnswers(saved);
        setRevealed(true);
        setOpen(true);
      } else if (fromHistory) {
        setOpen(false);
      }
    };
    const media = window.matchMedia("(max-width: 767px)");
    const onViewportChange = () => {
      if (media.matches) restore();
      else setOpen(false);
    };
    const onHistoryChange = () => restore(true);
    restore();
    window.addEventListener("popstate", onHistoryChange);
    media.addEventListener("change", onViewportChange);
    return () => {
      if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
      window.removeEventListener("popstate", onHistoryChange);
      media.removeEventListener("change", onViewportChange);
    };
  }, []);

  useEffect(() => {
    const onOpen = () => {
      externalTriggerRef.current = document.activeElement as HTMLElement | null;
      if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
      setAnswers({ interests: [] });
      setStep(0);
      setRevealed(false);
      setAdvancing(false);
      setOpen(true);
    };
    window.addEventListener(JOURNEY_MATCH_EVENT, onOpen);
    return () => window.removeEventListener(JOURNEY_MATCH_EVENT, onOpen);
  }, []);

  function close() {
    if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
    advanceTimerRef.current = null;
    setAdvancing(false);
    setOpen(false);
    if (window.location.search.includes("match=")) {
      const url = new URL(window.location.href);
      url.searchParams.delete("match");
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }
  }

  function start() {
    if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
    setAnswers({ interests: [] });
    setStep(0);
    setRevealed(false);
    setAdvancing(false);
    setOpen(true);
  }

  function finish(nextAnswers: MatchAnswers) {
    setRevealed(true);
    setAdvancing(false);
    const url = new URL(window.location.href);
    url.searchParams.set("match", writeMatchAnswers(nextAnswers));
    window.history.pushState(null, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function moveForward(nextAnswers: Partial<MatchAnswers>) {
    if (step === 2 || advancing) return;
    setAdvancing(true);
    advanceTimerRef.current = window.setTimeout(() => {
      advanceTimerRef.current = null;
      if (step < scenes.length - 1) {
        setStep(step + 1);
        setAdvancing(false);
        return;
      }
      finish(nextAnswers as MatchAnswers);
    }, 520);
  }

  function continueFromInterests() {
    if (!answers.interests?.length || advancing) return;
    setAdvancing(true);
    advanceTimerRef.current = window.setTimeout(() => {
      advanceTimerRef.current = null;
      setStep(3);
      setAdvancing(false);
    }, 420);
  }

  function select(value: string) {
    if (advancing) return;
    if (step === 0) {
      const next = { ...answers, time: value as MatchAnswers["time"] };
      setAnswers(next);
      moveForward(next);
    }
    if (step === 1) {
      const next = { ...answers, company: value as MatchAnswers["company"] };
      setAnswers(next);
      moveForward(next);
    }
    if (step === 2)
      setAnswers((current) => {
        const interests = current.interests ?? [];
        const interest = value as MatchAnswers["interests"][number];
        return {
          ...current,
          interests: interests.includes(interest)
            ? interests.filter((item) => item !== interest)
            : [...interests.slice(-1), interest],
        };
      });
    if (step === 3) {
      const next = { ...answers, pace: value as MatchAnswers["pace"] };
      setAnswers(next);
      moveForward(next);
    }
  }

  function moveBack() {
    if (advanceTimerRef.current) window.clearTimeout(advanceTimerRef.current);
    advanceTimerRef.current = null;
    setAdvancing(false);
    setStep((current) => Math.max(0, current - 1));
  }

  const selected =
    step === 0
      ? answers.time
      : step === 1
        ? answers.company
        : step === 3
          ? answers.pace
          : undefined;
  const canContinue = step === 2 ? Boolean(answers.interests?.length) : Boolean(selected);
  const results =
    revealed && answers.time && answers.company && answers.interests?.length && answers.pace
      ? matchJourneys(items, answers as MatchAnswers)
      : [];
  const top = results[0];

  return (
    <>
      {showEntry ? (
        <div className={browsing ? styles.returnEntry : styles.entry}>
          <>
            <Image
              src={scenes[0].src}
              alt=""
              fill
              sizes="100vw"
              className={styles.entryImage}
              priority
              fetchPriority="high"
            />
            <div className={styles.entryShade} aria-hidden="true" />
          </>
          <div className={styles.entryContent}>
            {!browsing ? (
              <>
                <div className={styles.entryEyebrow}>
                  <span aria-hidden="true" /> Privately planned. Locally supported.
                </div>
                <p className={styles.entryCount}>A private journey in four choices</p>
                <h1>
                  <span>Find your way</span>
                  <span>through China.</span>
                </h1>
              </>
            ) : (
              <>
                <div className={styles.returnEyebrow}>Journey Match</div>
                <h2>Still deciding?</h2>
                <p className={styles.returnCopy}>Four quick choices. One clearer place to begin.</p>
              </>
            )}
            <button ref={triggerRef} type="button" className={styles.entryButton} onClick={start}>
              <span>
                <small>01 / 04</small> {browsing ? "Match my journey" : "Find my journey"}
              </span>
              <ArrowRight size={19} aria-hidden="true" />
            </button>
            {!browsing && (
              <button type="button" className={styles.browseButton} onClick={onBrowse}>
                Browse all {items.length} journeys
              </button>
            )}
          </div>
        </div>
      ) : null}
      <Dialog.Root
        open={open}
        onOpenChange={(next) => {
          if (!next) close();
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content
            className={styles.dialog}
            aria-describedby={undefined}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              (triggerRef.current ?? externalTriggerRef.current)?.focus();
            }}
          >
            {!revealed ? (
              <div className={styles.scene} data-advancing={advancing || undefined}>
                <Image
                  key={scenes[step].src}
                  src={scenes[step].src}
                  alt={scenes[step].alt}
                  fill
                  sizes="100vw"
                  className={styles.sceneImage}
                  priority={step === 0}
                />
                <div className={styles.sceneShade} aria-hidden="true" />
                <span key={step} className={styles.sceneNumber} aria-hidden="true">
                  {String(step + 1).padStart(2, "0")}
                </span>
                <div className={styles.sceneInner}>
                  <header className={styles.sceneHeader}>
                    <button
                      type="button"
                      onClick={step === 0 ? close : moveBack}
                      aria-label={step === 0 ? "Close journey finder" : "Previous question"}
                    >
                      {step === 0 ? (
                        <X size={20} aria-hidden="true" />
                      ) : (
                        <ArrowLeft size={20} aria-hidden="true" />
                      )}
                    </button>
                    <span>
                      AVIORA <span className={styles.headerDivider}>/</span> JOURNEY FINDER
                    </span>
                    <span className={styles.stepCount}>
                      {step + 1} / {scenes.length}
                    </span>
                  </header>
                  <div
                    className={styles.progress}
                    aria-label={`Question ${step + 1} of ${scenes.length}`}
                  >
                    {scenes.map((scene, index) => (
                      <span key={scene.label} data-current={index <= step || undefined} />
                    ))}
                  </div>
                  <div
                    key={step}
                    className={styles.question}
                    data-advancing={advancing || undefined}
                  >
                    <p className={styles.questionLabel}>{scenes[step].label}</p>
                    <Dialog.Title>{scenes[step].title}</Dialog.Title>
                    <p className={styles.hint}>
                      {step === 2 ? "Choose up to two, then continue." : "Choose one to continue."}
                    </p>
                    <div className={styles.options} role="group" aria-label={scenes[step].title}>
                      {scenes[step].options.map((option, index) => {
                        const isSelected =
                          step === 2
                            ? answers.interests?.includes(
                                option.value as MatchAnswers["interests"][number],
                              )
                            : selected === option.value;
                        return (
                          <button
                            type="button"
                            key={option.value}
                            aria-pressed={Boolean(isSelected)}
                            disabled={advancing}
                            onClick={() => select(option.value)}
                          >
                            <span className={styles.optionIndex}>
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span className={styles.optionLabel}>{option.label}</span>
                            <span className={styles.optionCheck}>
                              {isSelected ? <Check size={16} aria-hidden="true" /> : null}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {step === 2 && (
                      <button
                        className={styles.continue}
                        type="button"
                        disabled={!canContinue || advancing}
                        onClick={continueFromInterests}
                      >
                        Continue <ArrowRight size={18} aria-hidden="true" />
                      </button>
                    )}
                    {step > 0 && (
                      <button
                        className={styles.backText}
                        type="button"
                        onClick={moveBack}
                        disabled={advancing}
                      >
                        <ArrowLeft size={15} aria-hidden="true" /> Back
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : top ? (
              <div className={styles.results}>
                <header className={styles.resultsHeader}>
                  <span>
                    AVIORA <span className={styles.headerDivider}>/</span> YOUR JOURNEYS
                  </span>
                  <Dialog.Close aria-label="Close journey results" onClick={close}>
                    <X size={20} aria-hidden="true" />
                  </Dialog.Close>
                </header>
                <div className={styles.resultIntro}>
                  <p>{selectionSummary(answers as MatchAnswers)}</p>
                  <Dialog.Title>
                    {top.exact ? "A good place to start." : "Let’s shape this around you."}
                  </Dialog.Title>
                  <p>
                    {top.exact
                      ? "One published route stands out for the way you want to travel."
                      : "No published route fits every choice. Here’s the closest starting point, with the differences clearly shown."}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setRevealed(false);
                      setStep(0);
                    }}
                  >
                    <ArrowLeft size={16} aria-hidden="true" /> Edit preferences
                  </button>
                </div>
                <div className={styles.resultMedia}>
                  {top.item.visualStatus === "pending" ? (
                    <span className={styles.resultPlaceholder} aria-hidden="true">
                      <small>Photography to follow</small>
                      <strong>{top.item.destinationFilters.join(" · ")}</strong>
                    </span>
                  ) : (
                    <Image
                      src={top.item.image.src}
                      alt={top.item.image.alt}
                      fill
                      sizes="100vw"
                      className={styles.resultImage}
                      style={{ objectPosition: top.item.image.objectPosition ?? "center" }}
                    />
                  )}
                </div>
                <div className={styles.primaryResult}>
                  <p className={styles.resultLabel}>
                    {top.exact ? "Your starting point" : "Closest published route"}
                  </p>
                  <h3>{getJourneyCardTitle(top.item)}</h3>
                  <p className={styles.resultRoute}>{top.item.routeLabel}</p>
                  <ul>
                    {top.reasons.slice(0, 2).map((reason) => (
                      <li key={reason}>{reason}</li>
                    ))}
                  </ul>
                  {top.differences.length > 0 && (
                    <p className={styles.difference}>{top.differences.join(" ")}</p>
                  )}
                  <div className={styles.priceRow}>
                    <span>
                      {top.item.pricing.fromUsd ? (
                        <>
                          From{" "}
                          <strong>US${top.item.pricing.fromUsd.toLocaleString("en-US")}</strong>
                        </>
                      ) : (
                        <strong>Price on request</strong>
                      )}{" "}
                      <small>
                        {top.item.pricing.pricingUnit === "private-group"
                          ? "per private group of four"
                          : "per person · based on four guests"}
                      </small>
                    </span>
                  </div>
                  <Link href={top.item.href} onClick={close} className={styles.viewLink}>
                    Explore this journey <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  {!top.exact && (
                    <Link
                      href={`/start-planning?match=${encodeURIComponent(writeMatchAnswers(answers as MatchAnswers))}`}
                      onClick={close}
                      className={styles.customLink}
                    >
                      Plan a route around my choices
                    </Link>
                  )}
                </div>
                {results.length > 1 && (
                  <section className={styles.otherResults} aria-label="Other journeys">
                    <h3>Other ways to go</h3>
                    {results.slice(1).map(({ item, differences }) => (
                      <Link
                        href={item.href}
                        key={item.slug}
                        onClick={close}
                        className={styles.otherLink}
                      >
                        <span className={styles.otherPhoto}>
                          {item.visualStatus === "pending" ? (
                            <span className={styles.otherPlaceholder} aria-hidden="true">
                              Photo
                              <br />
                              soon
                            </span>
                          ) : (
                            <Image src={item.image.src} alt="" fill sizes="92px" />
                          )}
                        </span>
                        <span className={styles.otherCopy}>
                          <strong>{getJourneyCardTitle(item)}</strong>
                          <small>{differences[0] ?? item.bestForSummary}</small>
                          <em>
                            {item.pricing.fromUsd
                              ? `From US$${item.pricing.fromUsd.toLocaleString("en-US")}`
                              : "Price on request"}{" "}
                            {item.pricing.pricingUnit === "private-group"
                              ? "per private group of four"
                              : "per person · four guests"}
                          </em>
                        </span>
                        <ArrowRight size={17} aria-hidden="true" />
                      </Link>
                    ))}
                  </section>
                )}
                <button
                  type="button"
                  className={styles.allResults}
                  onClick={() => {
                    close();
                    onBrowse();
                  }}
                >
                  Browse all journeys
                </button>
              </div>
            ) : null}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
