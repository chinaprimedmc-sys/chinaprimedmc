"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Hotel, TrainFront, Utensils } from "lucide-react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import type { TimelineItem } from "@/types/component-library";

type TravelTimelineProps = {
  items: TimelineItem[];
  defaultOpen?: string;
};

export function TravelTimeline({ items, defaultOpen }: TravelTimelineProps) {
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue={defaultOpen ?? "item-0"}
      className="grid gap-4"
    >
      {items.map((item, index) => (
        <Accordion.Item
          key={`${item.title}-${index}`}
          value={`item-${index}`}
          className="border-border overflow-hidden rounded-[1.5rem] border bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-5 p-5 text-left md:p-6">
              <span>
                {item.eyebrow ? (
                  <span className="text-muted mb-2 block text-xs font-semibold tracking-[0.18em] uppercase">
                    {item.eyebrow}
                  </span>
                ) : null}
                <span className="block text-xl font-semibold tracking-[-0.02em]">{item.title}</span>
              </span>
              <ChevronDown
                size={20}
                aria-hidden="true"
                className="shrink-0 transition group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=closed]:animate-none">
            <div className="border-border grid gap-5 border-t p-5 md:grid-cols-[0.95fr_1.05fr] md:p-6">
              <div>
                <p className="text-muted text-sm leading-7">{item.description}</p>
                <div className="mt-5 grid gap-3 text-sm">
                  {item.hotel ? (
                    <Meta icon={<Hotel size={16} />} label="Hotel" value={item.hotel} />
                  ) : null}
                  {item.transport ? (
                    <Meta
                      icon={<TrainFront size={16} />}
                      label="Transport"
                      value={item.transport}
                    />
                  ) : null}
                  {item.meals?.length ? (
                    <Meta
                      icon={<Utensils size={16} />}
                      label="Meals"
                      value={item.meals.join(", ")}
                    />
                  ) : null}
                </div>
                {item.activities?.length ? (
                  <ul className="mt-5 grid gap-2 text-sm leading-6">
                    {item.activities.map((activity) => (
                      <li key={activity} className="bg-foreground/5 rounded-2xl px-4 py-2">
                        {activity}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.children}
              </div>
              {item.image ? (
                <OptimizedImage
                  src={item.image.src}
                  alt={item.image.alt}
                  width={item.image.width ?? 900}
                  height={item.image.height ?? 680}
                  sizes="(min-width:768px) 45vw, 100vw"
                  frameClassName="aspect-[4/3] rounded-[1.25rem]"
                  className="h-full w-full"
                />
              ) : null}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className={cn("text-muted mt-0.5")}>{icon}</span>
      <span>
        <span className="font-semibold">{label}: </span>
        <span className="text-muted">{value}</span>
      </span>
    </div>
  );
}
