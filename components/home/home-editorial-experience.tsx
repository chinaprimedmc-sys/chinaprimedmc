"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";

import type { MediaAsset } from "@/types/component-library";

import styles from "./home-editorial-experience.module.css";

type FeaturedJourney = {
  title: string;
  displayTitle: string;
  routeLine: string;
  description: string;
  image: MediaAsset;
  href: string;
  duration: string;
};

type IntentPath = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  image: MediaAsset;
};

type TrustPoint = {
  title: string;
  description: string;
};

type PlanningStep = {
  number: string;
  title: string;
  description: string;
};

type HomeEditorialExperienceProps = {
  desktopImage: MediaAsset;
  mobileImage: MediaAsset;
  featuredJourneys: FeaturedJourney[];
  intentPaths: IntentPath[];
  trustPoints: TrustPoint[];
  planningSteps: PlanningStep[];
  ctaImage: MediaAsset;
  primaryHref: string;
};

const ease = [0.16, 1, 0.3, 1] as const;
const mobileTrustTitles = [
  "Local decisions, made locally.",
  "Private travel, without forced shopping.",
  "Hotels and pacing, chosen around you.",
  "Support that stays close.",
];

export function HomeEditorialExperience({
  desktopImage,
  mobileImage,
  featuredJourneys,
  intentPaths,
  trustPoints,
  planningSteps,
  ctaImage,
  primaryHref,
}: HomeEditorialExperienceProps) {
  return (
    <div className={styles.page}>
      <EditorialHero
        desktopImage={desktopImage}
        mobileImage={mobileImage}
        primaryHref={primaryHref}
      />
      <BrandManifesto trustPoints={trustPoints} image={intentPaths[2]?.image ?? desktopImage} />
      {featuredJourneys.length ? (
        <SelectedJourneys journeys={featuredJourneys.slice(0, 4)} primaryHref={primaryHref} />
      ) : null}
      <IntentDirectory items={intentPaths.slice(0, 4)} />
      <PlanningLine
        steps={planningSteps.slice(0, 3)}
        images={intentPaths.slice(0, 3).map((item) => item.image)}
      />
      <FinalConversation image={ctaImage} primaryHref={primaryHref} />
    </div>
  );
}

function EditorialHero({
  desktopImage,
  mobileImage,
  primaryHref,
}: {
  desktopImage: MediaAsset;
  mobileImage: MediaAsset;
  primaryHref: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <motion.div
        className={styles.heroMedia}
        animate={reduceMotion ? undefined : { scale: [1, 1.038], x: ["0%", "-0.55%"] }}
        transition={{ duration: 24, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
      >
        <picture>
          <source media="(min-width: 769px)" srcSet={desktopImage.src} />
          <img
            src={mobileImage.src}
            alt={desktopImage.alt}
            width={mobileImage.width}
            height={mobileImage.height}
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </motion.div>
      <motion.div
        className={styles.heroVeil}
        initial={reduceMotion ? false : { opacity: 0.38 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.1, delay: 0.35, ease }}
        aria-hidden="true"
      />

      <div className={styles.heroCopy}>
        <motion.p
          className={styles.eyebrow}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25, ease }}
        >
          AVIORA · Private China travel
        </motion.p>
        <motion.span
          className={styles.goldRule}
          initial={reduceMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.42, ease }}
          aria-hidden="true"
        />

        <h1 id="home-hero-title" className={styles.heroTitle} aria-label="Private, designed.">
          {["Private,", "designed."].map((line, index) => (
            <span key={line}>
              <span className={styles.lineMask}>
                <motion.span
                  initial={reduceMotion ? false : { y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.86, delay: 0.52 + index * 0.11, ease }}
                >
                  {line}
                </motion.span>
              </span>
              {index === 0 ? " " : null}
            </span>
          ))}
        </h1>

        <motion.p
          className={styles.heroDescription}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.82, ease }}
        >
          Thoughtful routes, carefully chosen hotels and local support throughout your journey.
        </motion.p>

        <motion.div
          className={styles.heroActions}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.94, ease }}
        >
          <EditorialLink href={primaryHref}>Start planning</EditorialLink>
          <EditorialLink href="#journeys" muted>
            Explore journeys
          </EditorialLink>
        </motion.div>
      </div>

      <motion.div
        className={styles.heroFolio}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.08 }}
      >
        <span>01 / China, seen privately</span>
        <span>Shanghai · Blue hour</span>
      </motion.div>

      <Link href="#why-aviora" className={styles.scrollCue}>
        <span>Scroll to enter China</span>
        <i aria-hidden="true" />
        <ArrowDown size={14} aria-hidden="true" />
      </Link>
    </section>
  );
}

function BrandManifesto({ trustPoints, image }: { trustPoints: TrustPoint[]; image: MediaAsset }) {
  return (
    <section id="why-aviora" className={styles.manifesto}>
      <Reveal className={styles.manifestoStatement}>
        <p className={styles.darkEyebrow}>Why AVIORA</p>
        <h2>
          China is not
          <br />a checklist.
          <br />
          It is a rhythm.
        </h2>
      </Reveal>

      <div className={styles.manifestoBody}>
        <Reveal>
          <p className={styles.manifestoLead}>
            A considered journey depends on hundreds of quiet decisions: when to arrive, where to
            stay, who should guide and when the day needs room to breathe.
          </p>
        </Reveal>
        <div className={styles.trustLedger}>
          {trustPoints.slice(0, 4).map((point, index) => (
            <Reveal key={point.title} delay={index * 80}>
              <article>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.desktopTrustTitle}>{point.title}</h3>
                  <h3 className={styles.mobileTrustTitle}>{mobileTrustTitles[index]}</h3>
                  <p>{point.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <Reveal className={styles.manifestoImage}>
        <ResponsiveEditorialImage image={image} sizes="(min-width: 1024px) 34vw, 86vw" />
      </Reveal>
    </section>
  );
}

function SelectedJourneys({
  journeys,
  primaryHref,
}: {
  journeys: FeaturedJourney[];
  primaryHref: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const activeJourney = journeys[activeIndex];

  const show = (nextIndex: number) => {
    setActiveIndex((nextIndex + journeys.length) % journeys.length);
  };

  return (
    <section id="journeys" className={styles.journeys}>
      <Reveal className={styles.sectionHeading}>
        <p>02 / Selected journeys</p>
        <h2>Journeys as cinema.</h2>
        <span>
          Considered starting points, each reshaped around your dates, hotels and preferred rhythm.
        </span>
      </Reveal>

      <div
        className={styles.journeyStage}
        tabIndex={0}
        aria-label="Selected private journeys"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") show(activeIndex - 1);
          if (event.key === "ArrowRight") show(activeIndex + 1);
        }}
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (pointerStart.current === null) return;
          const distance = event.clientX - pointerStart.current;
          if (Math.abs(distance) > 48) show(activeIndex + (distance < 0 ? 1 : -1));
          pointerStart.current = null;
        }}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
      >
        <div className={styles.journeyMedia}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeJourney.href}
              className={styles.journeyScene}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.992 }}
              transition={{ duration: 0.95, ease }}
            >
              <ResponsiveEditorialImage
                image={activeJourney.image}
                sizes="(min-width: 1024px) 68vw, 100vw"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
          <div className={styles.journeyShade} aria-hidden="true" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${activeJourney.href}-title`}
              className={styles.journeyTitle}
              initial={reduceMotion ? false : { opacity: 0, y: "102%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: "-35%" }}
              transition={{ duration: 0.78, delay: 0.08, ease }}
            >
              <p>{activeJourney.routeLine}</p>
              <h3 title={activeJourney.title}>{activeJourney.displayTitle}</h3>
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${activeJourney.href}-mobile-title`}
            className={styles.mobileJourneyTitle}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.52, ease }}
          >
            <p>{activeJourney.routeLine}</p>
            <h3>{activeJourney.displayTitle}</h3>
          </motion.div>
        </AnimatePresence>

        <div className={styles.journeyDetails} aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${activeJourney.href}-details`}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.58, delay: 0.18, ease }}
            >
              <p className={styles.journeyCount}>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(journeys.length).padStart(2, "0")}
              </p>
              <p className={styles.journeySummary}>{activeJourney.description}</p>
              <div className={styles.journeyActions}>
                <EditorialLink href={activeJourney.href}>Explore the journey</EditorialLink>
                <EditorialLink
                  href={`${primaryHref}?journey=${encodeURIComponent(activeJourney.href.split("/").pop() ?? "")}`}
                  muted
                >
                  Request a proposal
                </EditorialLink>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className={styles.journeyArrows}>
            <button
              type="button"
              onClick={() => show(activeIndex - 1)}
              aria-label="Previous journey"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => show(activeIndex + 1)} aria-label="Next journey">
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.filmStrip} aria-label="Choose a featured journey">
        {journeys.map((journey, index) => (
          <button
            type="button"
            key={journey.href}
            aria-label={`Show ${journey.displayTitle}`}
            aria-pressed={index === activeIndex}
            onClick={() => show(index)}
          >
            <span className={styles.filmThumb}>
              <ResponsiveEditorialImage image={{ ...journey.image, alt: "" }} sizes="7rem" />
            </span>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{journey.displayTitle}</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

function IntentDirectory({ items }: { items: IntentPath[] }) {
  return (
    <section className={styles.intents}>
      <Reveal className={styles.intentHeading}>
        <p>03 / Find your China</p>
        <h2>
          What do you want
          <br />
          China to feel like?
        </h2>
      </Reveal>

      <div className={styles.intentGrid}>
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 85} className={styles.intentReveal}>
            <Link href={item.href} className={styles.intentItem} data-layout={index + 1}>
              <span className={styles.intentMedia}>
                <ResponsiveEditorialImage
                  image={item.image}
                  sizes={index === 0 ? "32vw" : "52vw"}
                />
              </span>
              <span className={styles.intentCopy}>
                <small>{item.eyebrow}</small>
                <span>
                  <h3>{item.title}</h3>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </span>
                <p>{item.description}</p>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <EditorialLink href="/destinations">Explore all destinations</EditorialLink>
      </Reveal>
    </section>
  );
}

function PlanningLine({ steps, images }: { steps: PlanningStep[]; images: MediaAsset[] }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.planning}>
      <Reveal className={styles.planningHeading}>
        <p>04 / From a conversation to China</p>
        <h2>A clear path to a private journey.</h2>
        <span>
          You share what matters. We turn it into one considered direction, then confirm every
          important detail in writing.
        </span>
      </Reveal>

      <div className={styles.planningTrack}>
        <motion.i
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1.2, ease }}
          aria-hidden="true"
        />
        {steps.map((step, index) => (
          <Reveal key={step.number} delay={index * 100} className={styles.planningStep}>
            <span className={styles.planningNode} aria-hidden="true" />
            <div className={styles.planningPhoto} data-index={index + 1}>
              {images[index] ? (
                <ResponsiveEditorialImage
                  image={images[index]}
                  sizes="(min-width: 769px) 30vw, calc(100vw - 64px)"
                />
              ) : null}
            </div>
            <p>{step.number}</p>
            <h3>{step.title}</h3>
            <span>{step.description}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function FinalConversation({ image, primaryHref }: { image: MediaAsset; primaryHref: string }) {
  return (
    <section className={styles.finalCta}>
      <Reveal className={styles.finalImage}>
        <ResponsiveEditorialImage image={image} sizes="(min-width: 768px) 58vw, 100vw" />
      </Reveal>
      <Reveal className={styles.finalCopy}>
        <p>05 / The beginning of a considered journey</p>
        <h2>
          Tell us what your ideal
          <br />
          China trip looks like.
        </h2>
        <EditorialLink href={primaryHref} light>
          Request my trip plan
        </EditorialLink>
        <span>A China specialist will respond with a considered first direction.</span>
      </Reveal>
    </section>
  );
}

function Reveal({
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
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.72, delay: delay / 1000, ease }}
    >
      {children}
    </motion.div>
  );
}

function EditorialLink({
  href,
  children,
  muted = false,
  light = false,
}: {
  href: string;
  children: ReactNode;
  muted?: boolean;
  light?: boolean;
}) {
  return (
    <Link
      href={href}
      className={styles.editorialLink}
      data-muted={muted || undefined}
      data-light={light || undefined}
    >
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}

function ResponsiveEditorialImage({
  image,
  sizes,
  priority = false,
}: {
  image: MediaAsset;
  sizes: string;
  priority?: boolean;
}) {
  const width = image.width ?? 1600;
  const height = image.height ?? 900;

  return (
    <span className={styles.responsiveImage}>
      <Image
        src={image.src}
        alt={image.alt}
        width={width}
        height={height}
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        style={{ objectPosition: image.objectPosition }}
      />
    </span>
  );
}
