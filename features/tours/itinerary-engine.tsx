"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock3, Hotel, MapPin, TrainFront, Utensils } from "lucide-react";
import { useState } from "react";

import { fadeUp } from "@/animations/motion-presets";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Badge } from "@/components/ui/badge";
import type { TourItineraryDay } from "@/types/tour";

type ItineraryEngineProps = {
  days: TourItineraryDay[];
};

export function ItineraryEngine({ days }: ItineraryEngineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeDay = days[activeIndex];

  const selectDay = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(days.length - 1, index)));
  };

  if (!activeDay) return null;

  return (
    <div className="grid min-w-0 gap-5">
      <div className="flex min-w-0 items-center justify-between gap-3">
        <div
          className="flex min-w-0 gap-2 overflow-x-auto pb-1"
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
              className={`min-w-[5.25rem] shrink-0 rounded-full border px-4 py-2.5 text-left transition ${index === activeIndex ? "border-[var(--accent)] bg-[var(--accent)] text-white" : "border-[var(--border-default)] bg-white text-[var(--text-primary)] hover:border-[var(--accent)]"}`}
            >
              <span className="block text-[0.65rem] font-bold tracking-[0.14em] uppercase opacity-70">
                Day {day.day}
              </span>
              <span className="mt-0.5 block truncate text-xs font-semibold">{day.destination}</span>
            </button>
          ))}
        </div>
        <span className="hidden shrink-0 text-xs text-[var(--text-secondary)] sm:block">
          {activeIndex + 1} of {days.length}
        </span>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.article
          key={activeDay.day}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid min-w-0 overflow-hidden rounded-[1.5rem] border border-[var(--border-default)] bg-white shadow-sm md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]"
        >
          <div className="order-2 grid min-w-0 content-start gap-5 p-5 md:order-1 md:p-7">
            <div className="grid gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Day {activeDay.day}</Badge>
                <span className="text-muted inline-flex items-center gap-1.5 text-xs font-semibold">
                  <MapPin size={14} aria-hidden="true" />
                  {activeDay.destination}
                </span>
              </div>
              <h3 className="text-2xl leading-tight font-semibold tracking-[-0.025em] md:text-3xl">
                {activeDay.title}
              </h3>
              <p className="text-muted text-sm leading-7 md:text-base">{activeDay.summary}</p>
            </div>

            <div className="grid gap-3 text-sm">
              {activeDay.hotel ? (
                <Meta icon={<Hotel size={16} />} label="Hotel" value={activeDay.hotel} />
              ) : null}
              {activeDay.transport ? (
                <Meta
                  icon={<TrainFront size={16} />}
                  label="Transport"
                  value={activeDay.transport}
                />
              ) : null}
              {activeDay.meals?.length ? (
                <Meta
                  icon={<Utensils size={16} />}
                  label="Meals"
                  value={activeDay.meals.join(", ")}
                />
              ) : null}
            </div>

            <div className="grid gap-3">
              {activeDay.activities.map((activity) => (
                <div
                  key={`${activeDay.day}-${activity.title}`}
                  className="bg-foreground/[0.035] rounded-[1rem] p-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="bg-foreground text-background mt-0.5 grid size-8 shrink-0 place-items-center rounded-full">
                      <Clock3 size={14} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="text-xs font-bold tracking-[0.14em] uppercase opacity-60">
                        {activity.time ?? "Flexible"}
                      </p>
                      <h4 className="mt-1 text-base font-semibold tracking-[-0.015em]">
                        {activity.title}
                      </h4>
                      <p className="text-muted mt-1 text-sm leading-6">{activity.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {activeDay.guideNote ? (
              <p className="border-border border-t pt-4 text-sm leading-6 text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">Guide note: </span>
                {activeDay.guideNote}
              </p>
            ) : null}
          </div>
          <div className="order-1 min-h-[15rem] md:order-2 md:min-h-full">
            <OptimizedImage
              src={activeDay.image.src}
              alt={activeDay.image.alt}
              width={activeDay.image.width ?? 1200}
              height={activeDay.image.height ?? 900}
              sizes="(min-width: 768px) 52vw, 100vw"
              objectPosition={activeDay.image.objectPosition}
              frameClassName="h-full min-h-[15rem] md:min-h-[34rem]"
              className="h-full w-full"
              showSkeleton={false}
            />
          </div>
        </motion.article>
      </AnimatePresence>

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => selectDay(activeIndex - 1)}
          disabled={activeIndex === 0}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-default)] px-4 py-2.5 text-sm font-semibold transition hover:border-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ArrowLeft size={16} aria-hidden="true" /> Previous day
        </button>
        <button
          type="button"
          onClick={() => selectDay(activeIndex + 1)}
          disabled={activeIndex === days.length - 1}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-35"
        >
          Next day <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-muted mt-0.5">{icon}</span>
      <span>
        <span className="font-semibold">{label}: </span>
        <span className="text-muted">{value}</span>
      </span>
    </div>
  );
}
