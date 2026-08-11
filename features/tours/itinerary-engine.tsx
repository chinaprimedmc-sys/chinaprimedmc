"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Hotel,
  MapPin,
  TrainFront,
  Utensils,
} from "lucide-react";
import { useRef, useState, type TouchEvent } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import type { TourItineraryDay } from "@/types/tour";

type ItineraryEngineProps = {
  days: TourItineraryDay[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export function ItineraryEngine({ days }: ItineraryEngineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const activeDay = days[activeIndex];
  const progress = ((activeIndex + 1) / days.length) * 100;
  const isOpenDay = activeDay ? /^your\s/i.test(activeDay.title) : false;

  function selectDay(index: number) {
    setActiveIndex(Math.max(0, Math.min(days.length - 1, index)));
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < 54) return;
    selectDay(distance < 0 ? activeIndex + 1 : activeIndex - 1);
  }

  if (!activeDay) return null;

  return (
    <div className="grid min-w-0 gap-7">
      <div className="grid gap-3">
        <div className="flex items-center justify-between gap-4 text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--text-secondary)] uppercase">
          <span>Day {String(activeDay.day).padStart(2, "0")}</span>
          <span>
            {activeIndex + 1} of {days.length}
          </span>
        </div>
        <div className="h-px overflow-hidden bg-black/10">
          <motion.div
            className="h-full origin-left bg-[var(--accent)]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: reduceMotion ? 0 : 0.55, ease }}
          />
        </div>
      </div>

      <div className="grid min-w-0 gap-8 lg:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-10">
        <nav
          className="flex min-w-0 gap-2 overflow-x-auto pb-2 lg:max-h-[72svh] lg:flex-col lg:overflow-y-auto lg:pr-3 lg:pb-0"
          role="tablist"
          aria-label="Journey days"
        >
          {days.map((day, index) => (
            <button
              key={day.day}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              onClick={() => selectDay(index)}
              className={cn(
                "group relative min-w-[6.8rem] shrink-0 border-l px-4 py-3 text-left transition-colors lg:min-w-0 lg:border-b lg:border-l-0 lg:px-0 lg:py-4",
                index === activeIndex
                  ? "border-[var(--accent)] text-[var(--text-primary)]"
                  : "border-black/10 text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              )}
            >
              <span className="block text-[0.64rem] font-bold tracking-[0.14em] uppercase">
                Day {String(day.day).padStart(2, "0")}
              </span>
              <span className="mt-1.5 block truncate text-xs font-semibold">{day.destination}</span>
              <motion.span
                className="absolute right-0 bottom-0 left-0 hidden h-px origin-left bg-[var(--accent)] lg:block"
                animate={{ scaleX: index === activeIndex ? 1 : 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
              />
            </button>
          ))}
        </nav>

        <section
          className="min-w-0"
          aria-live="polite"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={activeDay.day}
              role="tabpanel"
              className="grid min-w-0 gap-7"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.58, ease }}
            >
              <div className="group relative aspect-[16/9] min-h-[15rem] overflow-hidden rounded-lg bg-[var(--bg-secondary)] md:min-h-[25rem] lg:min-h-[31rem]">
                <motion.div
                  className="absolute inset-0"
                  initial={reduceMotion ? false : { scale: 1.045, clipPath: "inset(0 8% 0 0)" }}
                  animate={{ scale: 1, clipPath: "inset(0 0% 0 0)" }}
                  transition={{ duration: reduceMotion ? 0.01 : 0.85, ease }}
                >
                  <OptimizedImage
                    src={activeDay.image.src}
                    alt={activeDay.image.alt}
                    fill
                    sizes="(min-width: 1024px) 72vw, 100vw"
                    objectPosition={activeDay.image.objectPosition}
                    frameClassName="h-full w-full bg-[var(--bg-secondary)]"
                    className="h-full w-full brightness-[1.03] saturate-[1.08] transition-transform duration-[1600ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025] motion-reduce:transform-none"
                    showSkeleton={false}
                  />
                </motion.div>
                <div className="absolute top-5 left-5 flex items-center gap-3 rounded-full border border-white/72 bg-white/78 px-4 py-2 text-xs font-semibold text-[#172019] shadow-sm backdrop-blur-xl md:top-6 md:left-6">
                  <CalendarDays size={15} aria-hidden="true" />
                  Day {String(activeDay.day).padStart(2, "0")}
                </div>
                {isOpenDay ? (
                  <div className="absolute right-5 bottom-5 rounded-full border border-white/72 bg-white/82 px-4 py-2 text-[0.66rem] font-bold tracking-[0.12em] text-[#172019] uppercase shadow-sm backdrop-blur-xl md:right-6 md:bottom-6">
                    Your day, your way
                  </div>
                ) : null}
              </div>

              <div className="grid gap-8 xl:grid-cols-[minmax(0,0.82fr)_minmax(22rem,1.18fr)] xl:gap-14">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
                    <span className="tracking-[0.15em] text-[var(--accent)] uppercase">
                      Day {String(activeDay.day).padStart(2, "0")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[var(--text-secondary)]">
                      <MapPin size={14} aria-hidden="true" />
                      {activeDay.destination}
                    </span>
                  </div>
                  <h3 className="mt-4 max-w-2xl font-serif text-[2.6rem] leading-[0.96] font-medium md:text-[3.55rem]">
                    {activeDay.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
                    {activeDay.summary}
                  </p>

                  <div className="mt-7 grid gap-3 border-y border-black/10 py-5 text-xs leading-5">
                    {activeDay.hotel ? (
                      <Meta icon={<Hotel size={15} />} label="Stay" value={activeDay.hotel} />
                    ) : null}
                    {activeDay.transport ? (
                      <Meta
                        icon={<TrainFront size={15} />}
                        label="Move"
                        value={activeDay.transport}
                      />
                    ) : null}
                    {activeDay.meals?.length ? (
                      <Meta
                        icon={<Utensils size={15} />}
                        label="Meals"
                        value={activeDay.meals.join(", ")}
                      />
                    ) : null}
                  </div>
                </div>

                <div className="relative grid content-start gap-0 pl-8 before:absolute before:top-3 before:bottom-3 before:left-[0.36rem] before:w-px before:bg-black/12">
                  {activeDay.activities.map((activity, index) => (
                    <motion.div
                      key={`${activeDay.day}-${activity.title}`}
                      className="relative pb-7 last:pb-0"
                      initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.18, ease }}
                    >
                      <span className="absolute top-1 -left-8 grid size-3 place-items-center rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_#fff]" />
                      <p className="text-[0.66rem] font-bold tracking-[0.13em] text-[var(--text-secondary)] uppercase">
                        {activity.time ?? "Flexible"}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold tracking-[-0.015em]">
                        {activity.title}
                      </h4>
                      <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--text-secondary)]">
                        {activity.description}
                      </p>
                    </motion.div>
                  ))}
                  {activeDay.guideNote ? (
                    <motion.p
                      className="mt-7 border-t border-black/10 pt-5 text-sm leading-6 text-[var(--text-secondary)]"
                      initial={reduceMotion ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.38 }}
                    >
                      <span className="font-semibold text-[var(--text-primary)]">Local note: </span>
                      {activeDay.guideNote}
                    </motion.p>
                  ) : null}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </section>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-black/10 pt-5">
        <button
          type="button"
          onClick={() => selectDay(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] transition hover:text-[var(--text-primary)] disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-x-1"
          />
          Previous day
        </button>
        <button
          type="button"
          onClick={() => selectDay(activeIndex + 1)}
          disabled={activeIndex === days.length - 1}
          className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[var(--text-primary)] transition disabled:cursor-not-allowed disabled:opacity-30"
        >
          Next day
          <ArrowRight
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[1rem_3rem_1fr] items-start gap-2">
      <span className="mt-0.5 text-[var(--accent)]">{icon}</span>
      <span className="font-semibold text-[var(--text-primary)]">{label}</span>
      <span className="text-[var(--text-secondary)]">{value}</span>
    </div>
  );
}
