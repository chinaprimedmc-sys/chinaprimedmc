"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import type { TourItineraryDay, TourRouteStop } from "@/types/tour";

type JourneyRouteChaptersProps = {
  stops: TourRouteStop[];
  days: TourItineraryDay[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export function JourneyRouteChapters({ stops, days }: JourneyRouteChaptersProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const chapters = useMemo(
    () =>
      stops.map((stop, index) => ({
        ...stop,
        image:
          days.find((day) =>
            day.destination.toLocaleLowerCase().includes(stop.name.toLocaleLowerCase()),
          )?.image ??
          days[index]?.image ??
          days[0]?.image,
      })),
    [days, stops],
  );
  const activeChapter = chapters[activeIndex];

  if (!activeChapter?.image) return null;

  return (
    <section
      id="route-story"
      className="relative scroll-mt-24 overflow-hidden bg-[#172019] py-18 text-white md:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-6 lg:px-8">
        <motion.header
          className="grid gap-5 border-b border-white/14 pb-8 lg:grid-cols-[1fr_0.72fr] lg:items-end"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease }}
        >
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/52 uppercase">
              The journey in three chapters
            </p>
            <h2 className="mt-4 max-w-4xl font-serif text-[2.8rem] leading-[0.94] font-medium md:text-[4.25rem]">
              Feel the route change around you.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/62 md:text-base">
            Each destination has a different rhythm. Scroll through the route and watch the journey
            move from one atmosphere to the next.
          </p>
        </motion.header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.72fr)] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-24 h-[68svh] min-h-[34rem] overflow-hidden rounded-lg bg-[#26342e]">
              <AnimatePresence mode="sync" initial={false}>
                <motion.div
                  key={activeChapter.name}
                  className="absolute inset-0"
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.045 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.985 }}
                  transition={{ duration: 0.85, ease }}
                >
                  <OptimizedImage
                    src={activeChapter.image.src}
                    alt={activeChapter.image.alt}
                    fill
                    sizes="62vw"
                    objectPosition={activeChapter.image.objectPosition}
                    frameClassName="h-full w-full bg-[#26342e]"
                    className="h-full w-full brightness-[0.94] saturate-[1.08]"
                    showSkeleton={false}
                  />
                  <div className="absolute inset-0 bg-black/12" aria-hidden="true" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between border-t border-white/18 bg-[#172019]/72 p-5 backdrop-blur-lg md:p-6">
                <div>
                  <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-white/52 uppercase">
                    Chapter {String(activeIndex + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-serif text-3xl">{activeChapter.name}</p>
                </div>
                <p className="max-w-[15rem] text-right text-xs leading-5 text-white/58">
                  {activeChapter.days}
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              className="absolute top-0 bottom-0 left-[0.28rem] hidden w-px origin-top bg-white/24 lg:block"
              initial={reduceMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease }}
            />
            {chapters.map((chapter, index) => (
              <motion.article
                key={chapter.name}
                className="relative grid min-h-0 content-center border-b border-white/12 py-10 last:border-b-0 lg:min-h-[62vh] lg:py-16 lg:pl-10"
                onViewportEnter={() => setActiveIndex(index)}
                initial={reduceMotion ? false : { opacity: 0.36, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.56 }}
                transition={{ duration: 0.65, ease }}
              >
                <span
                  className="absolute top-1/2 left-0 hidden size-2.5 -translate-y-1/2 rounded-full bg-white lg:block"
                  aria-hidden="true"
                />
                <div className="mb-7 aspect-[3/2] overflow-hidden rounded-lg bg-[#26342e] lg:hidden">
                  <OptimizedImage
                    src={chapter.image.src}
                    alt={chapter.image.alt}
                    width={chapter.image.width ?? 1200}
                    height={chapter.image.height ?? 800}
                    sizes="100vw"
                    objectPosition={chapter.image.objectPosition}
                    frameClassName="h-full w-full"
                    className="h-full w-full"
                    showSkeleton={false}
                  />
                </div>
                <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/46 uppercase">
                  {String(index + 1).padStart(2, "0")} · {chapter.days}
                </p>
                <h3 className="mt-4 font-serif text-[2.7rem] leading-[0.94] font-medium md:text-[3.6rem]">
                  {chapter.name}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-7 text-white/66">
                  {chapter.description}
                </p>
                <div className="mt-7 flex items-center gap-3 text-xs font-semibold tracking-[0.12em] text-white/54 uppercase">
                  Continue through the route
                  <ArrowRight size={15} aria-hidden="true" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
