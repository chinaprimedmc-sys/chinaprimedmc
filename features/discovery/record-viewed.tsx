"use client";

import { useEffect } from "react";
import { useMemo } from "react";

import { useAppStore } from "@/stores/app-store";
import type { DiscoveryType } from "@/types/discovery";
import { trackEvent } from "@/lib/analytics/events";

type RecordViewedProps = {
  item: {
    id: string;
    type: DiscoveryType;
    title: string;
    href: string;
  };
};

export function RecordViewed({ item }: RecordViewedProps) {
  const recordViewed = useAppStore((state) => state.recordViewed);
  const stableItem = useMemo(
    () => ({
      id: item.id,
      type: item.type,
      title: item.title,
      href: item.href,
    }),
    [item.href, item.id, item.title, item.type],
  );

  useEffect(() => {
    recordViewed(stableItem);
    if (stableItem.type === "tour") {
      const journeySlug = stableItem.id.replace(/^tour:/, "");
      const viewed = JSON.parse(
        window.sessionStorage.getItem("aviora-viewed-journeys") || "[]",
      ) as string[];
      window.sessionStorage.setItem(
        "aviora-viewed-journeys",
        JSON.stringify([journeySlug, ...viewed.filter((id) => id !== journeySlug)].slice(0, 20)),
      );
    }
    trackEvent(`${stableItem.type}_view`, {
      id: stableItem.id,
      title: stableItem.title.slice(0, 120),
    });
  }, [recordViewed, stableItem]);

  return null;
}
