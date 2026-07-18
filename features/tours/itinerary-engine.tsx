"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Clock3, Hotel, MapPin, TrainFront, Utensils } from "lucide-react";
import { useMemo, useState } from "react";

import { fadeUp } from "@/animations/motion-presets";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";
import type { TourItineraryDay } from "@/types/tour";

type ItineraryEngineProps = {
  days: TourItineraryDay[];
};

export function ItineraryEngine({ days }: ItineraryEngineProps) {
  const defaultValue = days.map((day) => `day-${day.day}`);
  const [activeDays, setActiveDays] = useState(defaultValue);

  const activeIndex = useMemo(() => {
    const index = days.findIndex((day) => `day-${day.day}` === activeDays[0]);
    return index >= 0 ? index : 0;
  }, [activeDays, days]);

  return (
    <div className="grid max-w-full min-w-0 gap-5 lg:grid-cols-[15rem_minmax(0,1fr)] lg:items-start">
      <aside className="min-w-0 lg:sticky lg:top-28">
        <div className="border-border flex max-w-full min-w-0 gap-2 overflow-x-auto rounded-[1.5rem] border bg-white/78 p-2 shadow-sm backdrop-blur-xl lg:grid lg:overflow-visible">
          {days.map((day, index) => (
            <button
              key={day.day}
              type="button"
              onClick={() =>
                setActiveDays((current) =>
                  current.includes(`day-${day.day}`)
                    ? current.filter((value) => value !== `day-${day.day}`)
                    : [...current, `day-${day.day}`],
                )
              }
              className={cn(
                "min-w-[7.25rem] rounded-[1.15rem] px-3 py-3 text-left transition duration-300 ease-[var(--ease-apple)] lg:min-w-0",
                activeDays.includes(`day-${day.day}`)
                  ? "bg-foreground text-background shadow-sm"
                  : "hover:bg-foreground/6 text-foreground",
              )}
              aria-pressed={index === activeIndex}
            >
              <span className="block text-[0.68rem] font-bold tracking-[0.14em] uppercase opacity-70">
                Day {day.day}
              </span>
              <span className="mt-1 line-clamp-2 block text-sm leading-tight font-semibold">
                {day.destination}
              </span>
            </button>
          ))}
        </div>
      </aside>

      <Accordion.Root
        type="multiple"
        value={activeDays}
        onValueChange={setActiveDays}
        className="grid min-w-0 gap-4"
      >
        {days.map((day) => (
          <Accordion.Item
            key={day.day}
            value={`day-${day.day}`}
            className="border-border overflow-hidden rounded-[1.6rem] border bg-white shadow-sm"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 p-5 text-left md:p-6">
                <span className="grid gap-2">
                  <span className="flex flex-wrap items-center gap-2">
                    <Badge>Day {day.day}</Badge>
                    <span className="text-muted inline-flex items-center gap-1.5 text-xs font-semibold">
                      <MapPin size={14} aria-hidden="true" />
                      {day.destination}
                    </span>
                  </span>
                  <span className="text-xl leading-tight font-semibold tracking-[-0.025em] md:text-2xl">
                    {day.title}
                  </span>
                </span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 transition group-data-[state=open]:rotate-180"
                />
              </Accordion.Trigger>
            </Accordion.Header>
            <AnimatePresence initial={false}>
              <Accordion.Content>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="border-border grid min-w-0 gap-5 border-t p-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:p-6"
                >
                  <div className="grid min-w-0 content-start gap-5">
                    <p className="text-muted text-sm leading-7 md:text-base">{day.summary}</p>

                    <div className="grid gap-3 text-sm">
                      {day.hotel ? (
                        <Meta icon={<Hotel size={16} />} label="Hotel" value={day.hotel} />
                      ) : null}
                      {day.transport ? (
                        <Meta
                          icon={<TrainFront size={16} />}
                          label="Transport"
                          value={day.transport}
                        />
                      ) : null}
                      {day.meals?.length ? (
                        <Meta
                          icon={<Utensils size={16} />}
                          label="Meals"
                          value={day.meals.join(", ")}
                        />
                      ) : null}
                    </div>

                    <div className="grid gap-3">
                      {day.activities.map((activity) => (
                        <article
                          key={`${day.day}-${activity.title}`}
                          className="bg-foreground/[0.035] rounded-[1.2rem] p-4"
                        >
                          <div className="flex items-start gap-3">
                            <span className="bg-foreground text-background mt-0.5 grid size-8 shrink-0 place-items-center rounded-full">
                              <Clock3 size={14} aria-hidden="true" />
                            </span>
                            <div>
                              <p className="text-xs font-bold tracking-[0.14em] uppercase opacity-60">
                                {activity.time ?? "Flexible"}
                              </p>
                              <h3 className="mt-1 text-base font-semibold tracking-[-0.015em]">
                                {activity.title}
                              </h3>
                              <p className="text-muted mt-1 text-sm leading-6">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>

                    {day.guideNote ? (
                      <div className="border-border rounded-[1.25rem] border bg-white/72 p-4">
                        <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-60">
                          Guide note
                        </p>
                        <p className="text-muted mt-2 text-sm leading-6">{day.guideNote}</p>
                      </div>
                    ) : null}
                  </div>

                  <OptimizedImage
                    src={day.image.src}
                    alt={day.image.alt}
                    width={day.image.width ?? 900}
                    height={day.image.height ?? 700}
                    sizes="(min-width:1024px) 48vw, 100vw"
                    objectPosition={day.image.objectPosition}
                    frameClassName="aspect-[4/3] rounded-[1.35rem] md:aspect-[5/4]"
                    className="h-full w-full"
                  />
                </motion.div>
              </Accordion.Content>
            </AnimatePresence>
          </Accordion.Item>
        ))}
      </Accordion.Root>
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
