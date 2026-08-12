"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";

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

type HeroScene = {
  label: string;
  location: string;
  desktopImage: MediaAsset;
  mobileImage?: MediaAsset;
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
  "Planned and operated locally.",
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
  const heroScenes: HeroScene[] = [
    {
      label: "Shanghai",
      location: "Shanghai · Blue hour",
      desktopImage,
      mobileImage,
    },
    ...intentPaths.slice(0, 3).map((item) => ({
      label: item.title.includes("Pandas")
        ? "Chengdu"
        : item.title.includes("Food")
          ? "Local life"
          : "Beijing",
      location: `${item.title} · China`,
      desktopImage: item.image,
      mobileImage: item.image,
    })),
  ];

  return (
    <main className={styles.page}>
      <EditorialHero scenes={heroScenes} primaryHref={primaryHref} />
      <TrustPrelude trustPoints={trustPoints} />
      <BrandDepth trustPoints={trustPoints} image={intentPaths[2]?.image ?? desktopImage} />
      {featuredJourneys.length ? (
        <SelectedJourneys journeys={featuredJourneys.slice(0, 4)} primaryHref={primaryHref} />
      ) : null}
      <IntentDirectory items={intentPaths.slice(0, 4)} />
      <PlanningLine
        steps={planningSteps.slice(0, 3)}
        images={intentPaths.slice(0, 3).map((item) => item.image)}
      />
      <FinalConversation image={ctaImage} primaryHref={primaryHref} />
    </main>
  );
}

function EditorialHero({ scenes, primaryHref }: { scenes: HeroScene[]; primaryHref: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.5 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.5 });
  const imageX = useTransform(smoothX, [-1, 1], [-7, 7]);
  const imageY = useTransform(smoothY, [-1, 1], [-5, 5]);
  const frameRotateY = useTransform(smoothX, [-1, 1], [-0.85, 0.85]);
  const frameRotateX = useTransform(smoothY, [-1, 1], [0.7, -0.7]);
  const copyX = useTransform(smoothX, [-1, 1], [-3, 3]);
  const activeScene = scenes[activeIndex] ?? scenes[0];

  const updatePointer = (event: ReactPointerEvent<HTMLElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      className={styles.hero}
      aria-labelledby="home-hero-title"
      onPointerMove={updatePointer}
      onPointerLeave={resetPointer}
    >
      <motion.div className={styles.heroCopy} style={reduceMotion ? undefined : { x: copyX }}>
        <motion.p
          className={styles.eyebrow}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease }}
        >
          Private China travel · Operated locally
        </motion.p>

        <h1 id="home-hero-title" className={styles.heroTitle}>
          {["Private China", "journeys,", "thoughtfully designed."].map((line, index) => (
            <span className={styles.lineMask} key={line}>
              <motion.span
                initial={reduceMotion ? false : { y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.88, delay: 0.34 + index * 0.11, ease }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className={styles.heroDescription}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.7, ease }}
        >
          Tailored routes, considered hotels and trusted local support from your first conversation
          to your return home.
        </motion.p>

        <motion.div
          className={styles.heroActions}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.82, ease }}
        >
          <PrimaryLink href={primaryHref}>Start planning</PrimaryLink>
          <EditorialLink href="#journeys" muted>
            Explore journeys
          </EditorialLink>
        </motion.div>

        <motion.p
          className={styles.heroSignature}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 1.02 }}
        >
          AVIORA · Private, designed.
        </motion.p>
      </motion.div>

      <motion.div
        className={styles.heroVisual}
        style={reduceMotion ? undefined : { rotateX: frameRotateX, rotateY: frameRotateY }}
      >
        <motion.div
          className={styles.heroFrame}
          style={reduceMotion ? undefined : { x: imageX, y: imageY }}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={activeScene.label}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.992 }}
              transition={{ duration: 0.9, ease }}
            >
              <HeroSceneImage scene={activeScene} priority={activeIndex === 0} />
              <figcaption>
                <span>{String(activeIndex + 1).padStart(2, "0")}</span>
                <span>{activeScene.location}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <span className={styles.heroCoordinate} aria-hidden="true">
            31.2304° N<br />
            121.4737° E
          </span>
        </motion.div>

        <div className={styles.heroIndex} aria-label="Choose a China perspective">
          {scenes.map((scene, index) => (
            <button
              type="button"
              key={`${scene.label}-${index}`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{scene.label}</strong>
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function TrustPrelude({ trustPoints }: { trustPoints: TrustPoint[] }) {
  return (
    <section className={styles.trustPrelude} aria-label="Why travellers trust AVIORA">
      {trustPoints.slice(0, 3).map((point, index) => (
        <Reveal key={point.title} delay={index * 70}>
          <article>
            <Check size={15} strokeWidth={1.6} aria-hidden="true" />
            <div>
              <strong>{mobileTrustTitles[index]}</strong>
              <span>{point.description}</span>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  );
}

function BrandDepth({ trustPoints, image }: { trustPoints: TrustPoint[]; image: MediaAsset }) {
  return (
    <section id="why-aviora" className={styles.brandDepth}>
      <div className={styles.depthImageColumn}>
        <Reveal className={styles.depthImageFrame}>
          <ResponsiveEditorialImage image={image} sizes="(min-width: 769px) 46vw, 100vw" />
          <span className={styles.depthImageNote}>Local context · Quiet decisions · China</span>
        </Reveal>
      </div>

      <div className={styles.depthCopy}>
        <Reveal>
          <p className={styles.darkEyebrow}>01 / Why AVIORA</p>
          <h2>The difference is in the decisions you never have to manage.</h2>
          <p className={styles.depthLead}>
            A private journey depends on timing, hotel location, the right guide and a local team
            that remains close when plans need to move.
          </p>
        </Reveal>

        <div className={styles.trustLedger}>
          {trustPoints.slice(0, 4).map((point, index) => (
            <Reveal key={point.title} delay={index * 75}>
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
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const smoothTiltX = useSpring(tiltX, { stiffness: 95, damping: 24 });
  const smoothTiltY = useSpring(tiltY, { stiffness: 95, damping: 24 });
  const mediaRotateY = useTransform(smoothTiltX, [-1, 1], [-0.7, 0.7]);
  const mediaRotateX = useTransform(smoothTiltY, [-1, 1], [0.55, -0.55]);
  const activeJourney = journeys[activeIndex];

  const show = (nextIndex: number) => {
    setActiveIndex((nextIndex + journeys.length) % journeys.length);
  };

  const updateTilt = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    tiltX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    tiltY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);
  };

  return (
    <section id="journeys" className={styles.journeys}>
      <Reveal className={styles.sectionHeading}>
        <p>02 / Selected private journeys</p>
        <h2>China, composed around the way you want to travel.</h2>
        <span>
          These are considered starting points. Dates, hotels, pacing and private experiences are
          refined around you.
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
        <motion.div
          className={styles.journeyMedia}
          onPointerMove={updateTilt}
          onPointerLeave={() => {
            tiltX.set(0);
            tiltY.set(0);
          }}
          style={reduceMotion ? undefined : { rotateX: mediaRotateX, rotateY: mediaRotateY }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeJourney.href}
              className={styles.journeyScene}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.018 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, scale: 0.992 }}
              transition={{ duration: 0.95, ease }}
            >
              <ResponsiveEditorialImage
                image={activeJourney.image}
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority={activeIndex === 0}
              />
            </motion.div>
          </AnimatePresence>
          <span className={styles.journeyFolio}>
            {String(activeIndex + 1).padStart(2, "0")} / {String(journeys.length).padStart(2, "0")}
          </span>
        </motion.div>

        <div className={styles.journeyDetails} aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${activeJourney.href}-details`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.62, delay: 0.12, ease }}
            >
              <p className={styles.journeyRoute}>{activeJourney.routeLine}</p>
              <h3>{activeJourney.displayTitle}</h3>
              <p className={styles.journeySummary}>{activeJourney.description}</p>
              <div className={styles.journeyActions}>
                <PrimaryLink href={activeJourney.href}>View journey</PrimaryLink>
                <EditorialLink
                  href={`${primaryHref}?journey=${encodeURIComponent(activeJourney.href.split("/").pop() ?? "")}`}
                  muted
                >
                  Plan this journey
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
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{journey.displayTitle}</strong>
            <small>{journey.duration}</small>
          </button>
        ))}
      </div>

      <Reveal className={styles.allJourneysLink}>
        <EditorialLink href="/tours">Explore all private journeys</EditorialLink>
      </Reveal>
    </section>
  );
}

function IntentDirectory({ items }: { items: IntentPath[] }) {
  return (
    <section className={styles.intents}>
      <Reveal className={styles.intentHeading}>
        <p>03 / Find your China</p>
        <h2>What would you like China to feel like?</h2>
        <span>
          Begin with the feeling you want from the journey. We will shape the route around it.
        </span>
      </Reveal>

      <div className={styles.intentGrid}>
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 85} className={styles.intentReveal}>
            <Link href={item.href} className={styles.intentItem} data-layout={index + 1}>
              <motion.span
                className={styles.intentMedia}
                whileHover={{ y: -5, rotateY: index % 2 ? -0.45 : 0.45 }}
                transition={{ duration: 0.55, ease }}
              >
                <ResponsiveEditorialImage
                  image={item.image}
                  sizes="(min-width: 769px) 44vw, 100vw"
                />
                <i aria-hidden="true" />
              </motion.span>
              <span className={styles.intentCopy}>
                <small>
                  {String(index + 1).padStart(2, "0")} · {item.eyebrow}
                </small>
                <span>
                  <h3>{item.title}</h3>
                  <ArrowUpRight size={19} aria-hidden="true" />
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
        <p>04 / How planning works</p>
        <h2>A considered journey starts with a simple conversation.</h2>
        <span>
          Share the essentials. A China specialist will turn them into a practical first direction,
          then refine every important detail with you.
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
                  sizes="(min-width: 769px) 28vw, 100vw"
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
        <ResponsiveEditorialImage image={image} sizes="(min-width: 769px) 52vw, 100vw" />
        <span>Guilin · China</span>
      </Reveal>
      <Reveal className={styles.finalCopy}>
        <p>05 / Start with a real conversation</p>
        <h2>Tell us what your ideal China trip looks like.</h2>
        <p className={styles.finalDescription}>
          A China specialist will review what matters to you and come back with a considered first
          direction.
        </p>
        <PrimaryLink href={primaryHref} light>
          Start planning your China trip
        </PrimaryLink>
        <span>No fixed package. No pressure to book. One clear place to begin.</span>
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
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16, margin: "0px 0px -7% 0px" }}
      transition={{ duration: 0.72, delay: delay / 1000, ease }}
    >
      {children}
    </motion.div>
  );
}

function PrimaryLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <Link href={href} className={styles.primaryLink} data-light={light || undefined}>
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}

function EditorialLink({
  href,
  children,
  muted = false,
}: {
  href: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <Link href={href} className={styles.editorialLink} data-muted={muted || undefined}>
      <span>{children}</span>
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}

function HeroSceneImage({ scene, priority = false }: { scene: HeroScene; priority?: boolean }) {
  const mobile = scene.mobileImage ?? scene.desktopImage;
  const desktopWidth = scene.desktopImage.width ?? 1600;
  const desktopHeight = scene.desktopImage.height ?? 1000;
  const mobileWidth = mobile.width ?? desktopWidth;
  const mobileHeight = mobile.height ?? desktopHeight;

  return (
    <picture>
      <source media="(min-width: 769px)" srcSet={scene.desktopImage.src} />
      <img
        src={mobile.src}
        alt={scene.desktopImage.alt}
        width={mobileWidth}
        height={mobileHeight}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        data-desktop-width={desktopWidth}
        data-desktop-height={desktopHeight}
      />
    </picture>
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
      />
    </span>
  );
}
