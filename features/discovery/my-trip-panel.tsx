"use client";

import { ArrowUpRight, Trash2 } from "lucide-react";
import Link from "next/link";

import { CtaButton } from "@/components/cta";
import { Badge } from "@/components/ui/badge";
import { useAppStore } from "@/stores/app-store";

export function MyTripPanel() {
  const tripItems = useAppStore((state) => state.tripItems);
  const removeTripItem = useAppStore((state) => state.removeTripItem);
  const clearTrip = useAppStore((state) => state.clearTrip);

  const mailBody = encodeURIComponent(
    `Hi China Prime DMC,\n\nI'd like help customizing a China journey based on these saved ideas:\n\n${tripItems
      .map((item) => `- ${item.title} (${item.type})`)
      .join("\n")}\n\nTravelers:\nDates:\nComfort level:\nKey concerns:\n`,
  );

  return (
    <aside
      id="my-trip"
      className="border-border rounded-[2rem] border bg-white/78 p-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <Badge>My China Journey</Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Saved ideas</h2>
        </div>
        {tripItems.length ? (
          <button
            type="button"
            className="text-muted hover:text-foreground text-xs font-semibold"
            onClick={clearTrip}
          >
            Clear
          </button>
        ) : null}
      </div>

      <div className="mt-5 grid gap-3">
        {tripItems.length ? (
          tripItems.map((item) => (
            <div
              key={item.id}
              className="border-border flex items-center justify-between gap-3 rounded-[1.15rem] border bg-white p-3"
            >
              <Link href={item.href} className="min-w-0">
                <p className="truncate text-sm font-semibold">{item.title}</p>
                <p className="text-muted mt-1 text-xs capitalize">{item.type}</p>
              </Link>
              <button
                type="button"
                className="hover:bg-foreground/5 grid size-9 shrink-0 place-items-center rounded-full"
                onClick={() => removeTripItem(item.id)}
                aria-label={`Remove ${item.title}`}
              >
                <Trash2 size={15} aria-hidden="true" />
              </button>
            </div>
          ))
        ) : (
          <p className="text-muted rounded-[1.15rem] bg-white p-4 text-sm leading-6">
            Save destinations, journeys, articles, or experiences. They will appear here as a first
            draft of your private China journey.
          </p>
        )}
      </div>

      <CtaButton
        href={`mailto:chinaprimedmc@gmail.com?subject=Request%20My%20Customized%20China%20Journey&body=${mailBody}`}
        className="mt-5 w-full"
        icon={<ArrowUpRight size={16} aria-hidden="true" />}
      >
        Request My Customized Journey
      </CtaButton>
    </aside>
  );
}
