"use client";

import { useEffect, useState } from "react";
import { journeyFilterUrl, readJourneyFilters, type JourneyFilterState } from "./journey-filter";

export function useJourneyFilters(initialQueryString = "") {
  const [filters, setFilters] = useState(() =>
    readJourneyFilters(new URLSearchParams(initialQueryString)),
  );
  useEffect(() => {
    const restore = () => {
      const next = readJourneyFilters(new URLSearchParams(window.location.search));
      setFilters(next);
      const url = journeyFilterUrl(next, new URL(window.location.href));
      if (url !== `${window.location.pathname}${window.location.search}${window.location.hash}`)
        window.history.replaceState(null, "", url);
    };
    const timer = window.setTimeout(restore, 0);
    window.addEventListener("popstate", restore);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("popstate", restore);
    };
  }, []);
  function update(next: JourneyFilterState, mode: "push" | "replace" = "push") {
    setFilters(next);
    const url = journeyFilterUrl(next, new URL(window.location.href));
    if (url !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history[mode === "push" ? "pushState" : "replaceState"](null, "", url);
    }
  }
  return { filters, update };
}
