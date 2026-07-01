"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, ChevronDown, Globe2, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CtaButton } from "@/components/cta";
import { GlobalSearch } from "@/features/discovery/global-search";
import { cn } from "@/lib/utils/cn";
import { publicNavigation } from "@/config/public-site";
import type { NavigationItem } from "@/types/component-library";

type SiteNavigationProps = {
  brand?: string;
  items?: NavigationItem[];
  cta?: { label: string; href: string };
  languages?: string[];
  currencies?: string[];
};

export function SiteNavigation({
  brand = "China Prime DMC",
  items = publicNavigation,
  cta = { label: "Start Planning", href: "/contact" },
  languages = ["EN"],
  currencies = ["USD"],
}: SiteNavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div
        className={cn(
          "mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 rounded-full px-3 transition duration-300 ease-[var(--ease-apple)] md:h-16 md:px-5",
          scrolled
            ? "border border-white/60 bg-white/62 shadow-[var(--shadow-glass)] backdrop-blur-2xl"
            : "bg-transparent text-white",
        )}
      >
        <Link
          href="/"
          className="inline-flex min-h-10 max-w-[12.25rem] min-w-0 items-center truncate text-sm font-semibold tracking-[-0.01em] sm:max-w-none md:text-base"
        >
          {brand}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {items.map((item) => (
            <NavigationMenuItem key={item.href} item={item} />
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <SearchTrigger onClick={() => setSearchOpen(true)} />
          <Switcher icon={<Globe2 size={15} aria-hidden="true" />} value={languages[0] ?? "EN"} />
          <Switcher value={currencies[0] ?? "USD"} />
          <CtaButton
            href={cta.href}
            variant="glass"
            size="sm"
            className={cn(scrolled && "text-foreground border-white/80 bg-white/72")}
          >
            {cta.label}
          </CtaButton>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <SearchTrigger compact onClick={() => setSearchOpen(true)} />
          <MobileNavigation
            brand={brand}
            items={items}
            cta={cta}
            languages={languages}
            currencies={currencies}
            onSearchOpen={() => setSearchOpen(true)}
          />
        </div>
      </div>
      <ScrollProgress />
      <GlobalSearch compact open={searchOpen} onOpenChange={setSearchOpen} showTrigger={false} />
    </header>
  );
}

function SearchTrigger({ compact = false, onClick }: { compact?: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label="Open search"
      onClick={onClick}
      className={cn(
        "grid rounded-full border border-white/45 bg-white/24 backdrop-blur-xl transition hover:bg-white/36",
        compact ? "size-10 place-items-center" : "h-10 w-10 place-items-center",
      )}
    >
      <Search size={17} aria-hidden="true" />
    </button>
  );
}

function NavigationMenuItem({ item }: { item: NavigationItem }) {
  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className="inline-flex min-h-10 items-center rounded-full px-3 py-2 text-sm font-medium transition hover:bg-white/18 xl:px-4"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative">
      <Link
        href={item.href}
        className="flex min-h-10 items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition hover:bg-white/18 xl:px-4"
      >
        {item.label}
        <ChevronDown size={14} aria-hidden="true" />
      </Link>
      <div className="text-foreground pointer-events-none invisible absolute top-full left-1/2 mt-3 w-[34rem] -translate-x-1/2 rounded-[1.5rem] border border-white/65 bg-white/76 p-4 opacity-0 shadow-[var(--shadow-glass)] backdrop-blur-2xl transition group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
        <div className="grid grid-cols-2 gap-2">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="hover:bg-foreground/5 rounded-2xl p-4 transition"
            >
              <span className="block text-sm font-semibold">{child.label}</span>
              {child.description ? (
                <span className="text-muted mt-1 block text-sm leading-6">{child.description}</span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNavigation({
  brand,
  items,
  cta,
  languages,
  currencies,
  onSearchOpen,
}: {
  brand: string;
  items: NavigationItem[];
  cta: { label: string; href: string };
  languages: string[];
  currencies: string[];
  onSearchOpen: () => void;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="grid size-10 place-items-center rounded-full border border-white/45 bg-white/24 backdrop-blur-xl"
          aria-label="Open menu"
        >
          <Menu size={19} aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/35 backdrop-blur-sm" />
        <Dialog.Content className="text-foreground fixed inset-x-3 top-3 bottom-3 z-[81] flex max-h-[calc(100dvh-1.5rem)] flex-col overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 shadow-[var(--shadow-glass)] backdrop-blur-2xl sm:inset-x-auto sm:right-3 sm:left-auto sm:w-[25rem]">
          <div className="border-foreground/8 flex shrink-0 items-center justify-between gap-3 border-b px-4 py-3">
            <Dialog.Title className="min-w-0 truncate text-sm font-semibold">{brand}</Dialog.Title>
            <Dialog.Close
              className="hover:bg-foreground/5 grid size-10 place-items-center rounded-full"
              aria-label="Close menu"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="border-foreground/8 grid shrink-0 grid-cols-[1fr_auto_auto] gap-2 border-b p-3">
            <Dialog.Close asChild>
              <button
                type="button"
                onClick={onSearchOpen}
                className="border-foreground/10 bg-foreground/[0.035] hover:bg-foreground/[0.06] inline-flex min-w-0 items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition"
              >
                <Search size={16} aria-hidden="true" />
                <span className="truncate">Search</span>
              </button>
            </Dialog.Close>
            <MobilePill>{languages[0] ?? "EN"}</MobilePill>
            <MobilePill>{currencies[0] ?? "USD"}</MobilePill>
          </div>

          <nav
            className="grid min-h-0 flex-1 content-start gap-2 overflow-y-auto px-3 py-3"
            aria-label="Mobile primary"
          >
            {items.map((item) => (
              <div
                key={item.href}
                className="border-foreground/8 rounded-[1.25rem] border bg-white/58 p-2 shadow-sm"
              >
                <Dialog.Close asChild>
                  <Link
                    href={item.href}
                    className="group hover:bg-foreground/5 flex min-h-12 items-center justify-between gap-3 rounded-2xl px-3 py-2.5 text-base font-semibold transition"
                  >
                    <span className="min-w-0 truncate">{item.label}</span>
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 opacity-45 transition group-hover:translate-x-0.5 group-hover:opacity-80"
                    />
                  </Link>
                </Dialog.Close>
                {item.children?.length ? (
                  <div className="grid gap-1 px-1 pb-1">
                    {item.children.map((child) => (
                      <Dialog.Close asChild key={child.href}>
                        <Link
                          href={child.href}
                          className="hover:bg-foreground/[0.045] grid gap-0.5 rounded-[1rem] px-3 py-2.5 transition"
                        >
                          <span className="text-sm font-semibold">{child.label}</span>
                          {child.description ? (
                            <span className="text-muted line-clamp-2 text-xs leading-5">
                              {child.description}
                            </span>
                          ) : null}
                        </Link>
                      </Dialog.Close>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="border-foreground/8 shrink-0 border-t bg-white/72 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-xl">
            <Dialog.Close asChild>
              <CtaButton
                href={cta.href}
                variant="light"
                className="border-foreground/10 text-foreground w-full bg-white/86 shadow-sm hover:bg-white"
              >
                {cta.label}
              </CtaButton>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function MobilePill({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="border-foreground/10 bg-foreground/[0.035] inline-flex min-h-11 items-center justify-center rounded-full border px-3 text-xs font-bold"
    >
      {children}
    </button>
  );
}

function Switcher({ value, icon }: { value: string; icon?: React.ReactNode }) {
  return (
    <button
      type="button"
      className="inline-flex h-10 items-center gap-1.5 rounded-full border border-white/45 bg-white/18 px-3 text-xs font-semibold backdrop-blur-xl transition hover:bg-white/32"
    >
      {icon}
      {value}
    </button>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mx-auto mt-2 hidden h-px max-w-7xl overflow-hidden rounded-full bg-white/20 md:block">
      <div
        className="bg-foreground/70 h-full transition-transform"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
      />
    </div>
  );
}
