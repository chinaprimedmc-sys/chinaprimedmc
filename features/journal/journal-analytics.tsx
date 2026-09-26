"use client";

import { useEffect } from "react";

import { trackEvent } from "@/lib/analytics/events";

export function JournalAnalytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest<HTMLElement>("[data-journal-event]");
      if (!link) return;

      const eventName = link.dataset.journalEvent;
      if (!eventName) return;

      trackEvent(eventName, {
        ...(link.dataset.articleSlug ? { article: link.dataset.articleSlug.slice(0, 160) } : {}),
        ...(link.dataset.journeySlug ? { journey: link.dataset.journeySlug.slice(0, 160) } : {}),
        ...(link.dataset.placement ? { placement: link.dataset.placement.slice(0, 60) } : {}),
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
