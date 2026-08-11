"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useRef, type PointerEvent } from "react";

import { CtaButton } from "@/components/cta/cta-button";
import { OptimizedImage } from "@/components/media/optimized-image";
import type { Tour } from "@/types/tour";

type TourCinematicHeroProps = {
  tour: Tour;
  planningHref: string;
};

const entranceEase = [0.16, 1, 0.3, 1] as const;

export function TourCinematicHero({ tour, planningHref }: TourCinematicHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 22, mass: 0.8 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 22, mass: 0.8 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageScrollY = useTransform(scrollYProgress, [0, 1], ["0%", "13%"]);
  const imageScrollScale = useTransform(scrollYProgress, [0, 1], [1, 1.09]);
  const copyY = useTransform(scrollYProgress, [0, 0.8], [0, -54]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.68, 1], [1, 0.82, 0]);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * -12);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * -8);
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.section
      ref={heroRef}
      className="relative isolate flex min-h-[88svh] overflow-hidden bg-[#172019] text-white"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      initial={reduceMotion ? false : { opacity: 0, y: 42 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: entranceEase }}
    >
      <motion.div
        className="absolute inset-0 -z-20 origin-center"
        style={reduceMotion ? undefined : { y: imageScrollY, scale: imageScrollScale }}
      >
        <motion.div
          className="absolute -inset-4"
          style={reduceMotion ? undefined : { x: springX, y: springY }}
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1.025, 1.07, 1.04],
                  x: ["0%", "-0.45%", "0.2%"],
                }
          }
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        >
          <OptimizedImage
            src={tour.hero.image.src}
            alt={tour.hero.image.alt}
            fill
            loading="eager"
            priority={tour.hero.image.priority ?? true}
            sizes="100vw"
            objectPosition={tour.hero.image.objectPosition}
            frameClassName="h-full w-full bg-[#172019]"
            className="h-full w-full brightness-[0.88] saturate-[1.08]"
            showSkeleton={false}
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 -z-10 bg-black/24" aria-hidden="true" />

      <motion.div
        className="mx-auto flex w-full max-w-[92rem] flex-col justify-end px-5 pt-32 pb-16 sm:px-6 md:pb-20 lg:px-8"
        style={reduceMotion ? undefined : { y: copyY, opacity: copyOpacity }}
      >
        <div className="max-w-[66rem] [text-shadow:0_2px_24px_rgba(0,0,0,0.34)]">
          <motion.p
            className="font-serif text-[0.72rem] font-medium tracking-[0.18em] text-white/76 uppercase md:text-xs"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.14, ease: entranceEase }}
          >
            {tour.hero.eyebrow ?? "Tailored private journey"}
          </motion.p>

          <div className="mt-5 overflow-hidden pb-1">
            <motion.h1
              className="max-w-[64rem] font-serif text-[2.7rem] leading-[0.94] font-medium text-balance sm:text-[3.25rem] md:text-[4rem] lg:text-[5rem]"
              initial={reduceMotion ? false : { y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, delay: 0.2, ease: entranceEase }}
            >
              {tour.title}
            </motion.h1>
          </div>

          <motion.p
            className="mt-6 max-w-[46rem] text-base leading-7 text-white/84 md:text-lg md:leading-8"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42, ease: entranceEase }}
          >
            {tour.subtitle}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.54, ease: entranceEase }}
          >
            <CtaButton
              href={planningHref}
              variant="lightFrosted"
              size="md"
              icon={<ArrowRight size={17} aria-hidden="true" />}
              className="min-h-13 px-7"
              data-cta-placement="hero"
              data-journey-slug={tour.slug}
            >
              Plan This Journey
            </CtaButton>
            <a
              href="#itinerary"
              className="group inline-flex min-h-11 items-center gap-2 px-1 text-sm font-semibold text-white/88 transition hover:text-white"
            >
              Explore the itinerary
              <ArrowDown
                size={16}
                aria-hidden="true"
                className="transition-transform group-hover:translate-y-1"
              />
            </a>
          </motion.div>

          <motion.dl
            className="mt-9 flex max-w-full flex-wrap items-center gap-y-3 border-t border-white/28 pt-5 text-[0.66rem] font-semibold tracking-[0.12em] text-white/72 uppercase md:mt-10 md:text-[0.7rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: entranceEase }}
          >
            <div className="flex items-center pr-4">
              <dt className="sr-only">Duration</dt>
              <dd>{tour.duration}</dd>
            </div>
            <div className="flex min-w-0 items-center border-l border-white/28 px-4">
              <dt className="sr-only">Route</dt>
              <dd className="max-w-[34rem] leading-5">{tour.route}</dd>
            </div>
            <div className="flex items-center border-l border-white/28 px-4">
              <dt className="sr-only">Service</dt>
              <dd>Private throughout</dd>
            </div>
            <div className="flex items-center border-l border-white/28 pl-4">
              <dt className="sr-only">Shopping policy</dt>
              <dd>No forced shopping</dd>
            </div>
          </motion.dl>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-6 bottom-7 hidden items-center gap-3 text-[0.65rem] font-semibold tracking-[0.18em] text-white/58 uppercase md:flex lg:right-8"
        animate={reduceMotion ? undefined : { opacity: [0.45, 1, 0.45], y: [0, 5, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll to enter
        <ArrowDown size={14} aria-hidden="true" />
      </motion.div>
    </motion.section>
  );
}
