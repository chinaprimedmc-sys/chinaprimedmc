"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

import { ContentContainer } from "@/components/layout/content-container";
import { OptimizedImage } from "@/components/media/optimized-image";

import styles from "./home-trust-introduction.module.css";

const assurances = [
  {
    label: "Licensed locally",
    title: "Licensed to operate locally",
    description:
      "Your journey is operated in China by a registered company licensed to conduct inbound tourism business.",
    evidence: "Guangzhou, China · Registered 2018",
    image: "/home/editorial/travel-trade-booth-singapore.webp",
    alt: "The AVIORA China operating team at its IC&GTE travel trade booth in Singapore",
    caption: "AVIORA's China operating team · IC&GTE Singapore · 2026",
    position: "50% 46%",
  },
  {
    label: "Private by design",
    title: "Private by design",
    description:
      "Routes, hotels, guides and private transport are arranged around your dates, interests and preferred pace.",
    evidence: "One conversation · One considered direction",
    image: "/home/editorial/travel-trade-buyer-meeting-kuala-lumpur.webp",
    alt: "An AVIORA specialist discussing private China travel with an international buyer in Kuala Lumpur",
    caption: "Face-to-face route consultation · Kuala Lumpur · 2026",
    position: "50% 48%",
  },
  {
    label: "No forced shopping",
    title: "Time reserved for the journey",
    description:
      "No forced shopping. Your time is reserved for the places, people and experiences you came to China to discover.",
    evidence: "Experience-led itineraries · No retail stops",
    image: "/home/editorial/muslim-travel-buyers-kuala-lumpur.webp",
    alt: "The AVIORA team listening to Muslim travel buyers at an international tourism event in Kuala Lumpur",
    caption: "Listening to different traveler priorities · Kuala Lumpur · 2026",
    position: "50% 48%",
  },
  {
    label: "Support in China",
    title: "Support that stays close",
    description:
      "A China-based team remains reachable before arrival and throughout your journey, coordinating the details that keep a private trip moving well.",
    evidence: "Before arrival · While traveling · Until return",
    image: "/home/editorial/travel-trade-consultation-kuala-lumpur.webp",
    alt: "An AVIORA specialist in a detailed conversation with a travel buyer in Kuala Lumpur",
    caption: "Clear questions before better travel decisions · Kuala Lumpur · 2026",
    position: "50% 48%",
  },
] as const;

const pressImage = {
  src: "/home/editorial/travel-trade-team-singapore.webp",
  alt: "The AVIORA China operating team at the IC&GTE inbound travel exhibition in Singapore",
};

const ease = [0.16, 1, 0.3, 1] as const;

export function HomeTrustIntroduction() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const reduceMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -15% 0px" });
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-1, 1], [-1.35, 1.35]), {
    stiffness: 90,
    damping: 24,
  });
  const rotateX = useSpring(useTransform(pointerY, [-1, 1], [1.1, -1.1]), {
    stiffness: 90,
    damping: 24,
  });
  const imageX = useSpring(useTransform(pointerX, [-1, 1], [5, -5]), {
    stiffness: 80,
    damping: 25,
  });
  const imageY = useSpring(useTransform(pointerY, [-1, 1], [4, -4]), {
    stiffness: 80,
    damping: 25,
  });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progressScale = useSpring(scrollYProgress, { stiffness: 90, damping: 28, mass: 0.6 });
  const introOpacity = useTransform(scrollYProgress, [0, 0.6, 0.78], [1, 1, 0.28]);
  const stageScale = useTransform(scrollYProgress, [0, 0.14, 0.76, 1], [0.965, 1, 1, 0.975]);
  const evidenceOpacity = useTransform(scrollYProgress, [0, 0.66, 0.8], [1, 1, 0.14]);
  const pressOpacity = useTransform(scrollYProgress, [0.68, 0.79, 1], [0, 1, 1]);
  const pressY = useTransform(scrollYProgress, [0.68, 0.83], [46, 0]);

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (reduceMotion || !isDesktop || progress > 0.76) return;
    const nextIndex = Math.min(3, Math.max(0, Math.floor(progress / 0.19)));
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  useEffect(() => {
    const query = window.matchMedia("(min-width: 901px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const active = assurances[activeIndex];

  const updatePointer = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const localX = event.clientX - bounds.left;
    const localY = event.clientY - bounds.top;
    pointerX.set((localX / bounds.width - 0.5) * 2);
    pointerY.set((localY / bounds.height - 0.5) * 2);
    cursorX.set(localX);
    cursorY.set(localY);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    setShowCursor(false);
  };

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="home-trust-title">
      <div className={styles.progressTrack} aria-hidden="true">
        <motion.span style={{ scaleX: progressScale }} />
      </div>

      <div className={styles.stickyStage}>
        <div className={styles.ambient} aria-hidden="true">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={`ambient-${active.image}`}
              className={styles.ambientImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.24 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.9, ease }}
            >
              <OptimizedImage
                src={active.image}
                alt=""
                fill
                sizes="100vw"
                showSkeleton={false}
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.atmosphere} aria-hidden="true" />

        <ContentContainer size="xl" className={styles.stageInner}>
          <motion.header
            className={styles.intro}
            style={{ opacity: reduceMotion || !isDesktop ? 1 : introOpacity }}
          >
            <motion.p
              className={styles.eyebrow}
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{
                opacity: reduceMotion || isInView ? 1 : 0,
                y: reduceMotion || isInView ? 0 : 10,
              }}
              transition={{ duration: 0.7, ease }}
            >
              01 · Why AVIORA
            </motion.p>
            <h2 id="home-trust-title" className={styles.title}>
              {["Behind every private journey", "is a team already here."].map((line, index) => (
                <span className={styles.titleMask} key={line}>
                  <motion.span
                    initial={reduceMotion ? false : { y: "108%" }}
                    animate={{ y: reduceMotion || isInView ? 0 : "108%" }}
                    transition={{ duration: 0.9, delay: 0.2 + index * 0.11, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>
            <motion.p
              className={styles.description}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{
                opacity: reduceMotion || isInView ? 1 : 0,
                y: reduceMotion || isInView ? 0 : 12,
              }}
              transition={{ duration: 0.75, delay: 0.26, ease }}
            >
              Real conversations, accountable local operation and support that remains close while
              you travel through China.
            </motion.p>
            <motion.div
              className={styles.coordinates}
              initial={reduceMotion ? false : { opacity: 0, width: 0 }}
              animate={{
                opacity: reduceMotion || isInView ? 1 : 0,
                width: reduceMotion || isInView ? "100%" : 0,
              }}
              transition={{ duration: 1, delay: 0.38, ease }}
            >
              <span>Guangzhou · China</span>
              <span>Registered 2018</span>
              <span>Inbound tourism licensed</span>
            </motion.div>
          </motion.header>

          <motion.div
            className={styles.visualStage}
            style={
              reduceMotion
                ? undefined
                : {
                    opacity: isDesktop ? evidenceOpacity : 1,
                    rotateX,
                    rotateY,
                    scale: stageScale,
                    transformPerspective: 1450,
                  }
            }
            onPointerMove={updatePointer}
            onPointerEnter={() => setShowCursor(true)}
            onPointerLeave={resetPointer}
          >
            <div className={styles.photoFrame}>
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={active.image}
                  className={styles.photoLayer}
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.035 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                  transition={{ duration: reduceMotion ? 0.15 : 0.88, ease }}
                  style={reduceMotion ? undefined : { x: imageX, y: imageY }}
                >
                  <OptimizedImage
                    src={active.image}
                    alt={active.alt}
                    fill
                    sizes="(min-width: 1100px) 54vw, 100vw"
                    loading={activeIndex === 0 ? "eager" : "lazy"}
                    objectPosition={active.position}
                    frameClassName={styles.photoInner}
                    className={styles.photoImage}
                    showSkeleton={false}
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>
              <div className={styles.photoShade} aria-hidden="true" />
              <div className={styles.frameMarks} aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={active.caption}
                  className={styles.caption}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: reduceMotion ? 0.1 : 0.5, ease }}
                >
                  {String(activeIndex + 1).padStart(2, "0")} · {active.caption}
                </motion.p>
              </AnimatePresence>
              <motion.div
                className={styles.proofCursor}
                data-visible={showCursor}
                style={{ x: cursorX, y: cursorY }}
                aria-hidden="true"
              >
                <span>View</span>
                <strong>{String(activeIndex + 1).padStart(2, "0")}</strong>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.proofStack}
            aria-label="Why travelers can rely on AVIORA"
            style={reduceMotion || !isDesktop ? undefined : { opacity: evidenceOpacity }}
          >
            {assurances.map((item, index) => {
              const selected = index === activeIndex;
              return (
                <motion.button
                  type="button"
                  className={styles.proofPlate}
                  data-active={selected}
                  key={item.title}
                  onClick={() => setActiveIndex(index)}
                  onPointerEnter={(event) => {
                    if (event.pointerType !== "touch") setActiveIndex(index);
                  }}
                  aria-pressed={selected}
                  initial={reduceMotion ? false : { opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.7, delay: 0.2 + index * 0.08, ease }}
                >
                  <span className={styles.proofNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.proofCopy}>
                    <strong>{item.label}</strong>
                    <span>{item.description}</span>
                    <small>{item.evidence}</small>
                  </span>
                  <span className={styles.proofLine} aria-hidden="true" />
                </motion.button>
              );
            })}
          </motion.div>

          <motion.aside
            className={styles.pressLayer}
            style={reduceMotion ? undefined : { opacity: pressOpacity, y: pressY }}
          >
            <div className={styles.pressImage}>
              <OptimizedImage
                src={pressImage.src}
                alt={pressImage.alt}
                fill
                sizes="(min-width: 1100px) 34vw, 100vw"
                objectPosition="50% 50%"
                frameClassName={styles.pressImageInner}
                className={styles.pressPhoto}
                unoptimized
              />
              <p className={styles.pressImageCaption}>IC&amp;GTE Singapore · April 2026</p>
            </div>
            <div className={styles.pressCopy}>
              <p>Documented in the travel trade</p>
              <h3>TTG Asia</h3>
              <span>MATTA Connect · Ipoh, Malaysia · 2026</span>
              <strong>
                TTG Asia identified Guohui Shi of China Prime DMC, AVIORA&apos;s China operating
                team, in its MATTA Connect coverage.
              </strong>
              <small>Independent event coverage; no endorsement is implied.</small>
              <Link href="/journal/aviora-ttg-asia-matta-connect-2026">
                Read the full story
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.aside>

          <div className={styles.continueCue} aria-hidden="true">
            <span>Trust is the beginning. The journey comes next.</span>
            <ArrowDown size={15} />
          </div>
        </ContentContainer>
      </div>
    </section>
  );
}
