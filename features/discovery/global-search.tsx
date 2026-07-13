"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Clock3, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { getSmartSuggestions, popularSearches } from "@/content/discovery";
import { cn } from "@/lib/utils/cn";
import { useAppStore } from "@/stores/app-store";

type GlobalSearchProps = {
  compact?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  showTrigger?: boolean;
};

export function GlobalSearch({
  compact = false,
  onOpenChange,
  open,
  showTrigger = true,
}: GlobalSearchProps) {
  const [query, setQuery] = useState("");
  const recentlyViewed = useAppStore((state) => state.recentlyViewed);

  const suggestions = useMemo(() => getSmartSuggestions(query), [query]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {showTrigger ? (
        <Dialog.Trigger asChild>
          <button
            type="button"
            aria-label="Open search"
            className={cn(
              "grid rounded-full border border-white/45 bg-white/24 backdrop-blur-xl transition hover:bg-white/36",
              compact ? "size-10 place-items-center" : "h-10 w-10 place-items-center",
            )}
          >
            <Search size={17} aria-hidden="true" />
          </button>
        </Dialog.Trigger>
      ) : null}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-black/28 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-4 left-1/2 z-[71] grid max-h-[calc(100svh-2rem)] w-[min(94vw,56rem)] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-white/70 bg-white/82 shadow-[var(--shadow-glass)] backdrop-blur-2xl md:top-20">
          <div className="border-border flex items-center justify-between gap-4 border-b p-4 md:p-5">
            <Dialog.Title className="text-muted text-sm font-semibold tracking-[0.18em] uppercase">
              Search China
            </Dialog.Title>
            <Dialog.Close
              className="hover:bg-foreground/5 grid size-9 place-items-center rounded-full"
              aria-label="Close search"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="grid gap-5 overflow-y-auto p-4 md:p-5">
            <form
              action="/search"
              className="border-foreground/10 flex items-center gap-3 rounded-full border bg-white/78 px-5 py-4"
            >
              <Search size={18} aria-hidden="true" />
              <label className="sr-only" htmlFor="global-search-input">
                Search destinations, tours, experiences, and guides
              </label>
              <input
                id="global-search-input"
                name="q"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="placeholder:text-muted w-full bg-transparent text-base outline-none"
                placeholder="Try Beijing, pandas, China with kids..."
                autoComplete="off"
              />
              <button
                type="submit"
                className="bg-foreground text-background hover:bg-foreground/85 rounded-full px-4 py-2 text-sm font-semibold transition"
              >
                Search
              </button>
            </form>

            <div className="grid gap-3">
              <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-60">
                Smart suggestions
              </p>
              <div className="grid gap-2">
                {suggestions.map((item) => (
                  <Dialog.Close asChild key={item.id}>
                    <Link
                      href={item.href}
                      className="hover:bg-foreground/[0.035] border-border flex items-center justify-between gap-4 rounded-[1.25rem] border bg-white p-3 transition"
                    >
                      <span>
                        <span className="block text-sm font-semibold">{item.title}</span>
                        <span className="text-muted mt-1 line-clamp-1 block text-xs">
                          {item.description}
                        </span>
                      </span>
                      <Badge>{item.type}</Badge>
                    </Link>
                  </Dialog.Close>
                ))}
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-60">
                  Popular searches
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <Dialog.Close asChild key={term}>
                      <Link href={`/search?q=${encodeURIComponent(term)}`}>
                        <Badge>{term}</Badge>
                      </Link>
                    </Dialog.Close>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-60">
                  Recently viewed
                </p>
                <div className="mt-3 grid gap-2">
                  {recentlyViewed.length ? (
                    recentlyViewed.slice(0, 3).map((item) => (
                      <Dialog.Close asChild key={item.id}>
                        <Link
                          href={item.href}
                          className="text-muted hover:text-foreground inline-flex items-center gap-2 text-sm"
                        >
                          <Clock3 size={14} aria-hidden="true" />
                          {item.title}
                        </Link>
                      </Dialog.Close>
                    ))
                  ) : (
                    <p className="text-muted text-sm">Recently viewed ideas will appear here.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
