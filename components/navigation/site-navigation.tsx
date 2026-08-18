"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Map, Menu, Search as SearchIcon, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { trackCtaClick, trackEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";
import type { NavigationItem } from "@/types/component-library";

type SiteNavigationProps = {
  brand?: string;
  items: NavigationItem[];
  className?: string;
  cta?: { label: string; href: string };
  mobileCta?: { label: string; href: string };
  whatsapp?: { label: string; href: string };
  languages?: string[];
  currencies?: string[];
  tone?: "adaptive" | "dark" | "light";
  showWhatsapp?: boolean;
  variant?: "default" | "minimal";
  mobileScrolledTools?: {
    filterLabel: string;
    filterEvent: string;
    searchLabel: string;
    searchEvent: string;
    planLabel: string;
    planHref: string;
  };
  journeyDetailTools?: {
    journeysLabel: string;
    journeysHref: string;
    planLabel: string;
    planHref: string;
    journeySlug: string;
  };
};

export function SiteNavigation({
  brand = "AVIORA",
  items,
  className,
  cta = { label: "Start Planning", href: "/start-planning" },
  mobileCta = cta,
  whatsapp = { label: "WhatsApp", href: "https://wa.me/447985052302" },
  tone = "light",
  variant = "minimal",
  mobileScrolledTools,
  journeyDetailTools,
}: SiteNavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [navigationLens, setNavigationLens] = useState({ left: 0, width: 0, visible: false });
  const [toolHint, setToolHint] = useState<"search" | "filter" | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    let frame = 0;
    let previous = false;

    const update = () => {
      frame = 0;
      const next = previous ? window.scrollY > 24 : window.scrollY > 64;
      if (next === previous) return;
      previous = next;
      setScrolled(next);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!scrolled || !mobileScrolledTools) return;
    const viewport = window.innerWidth < 1024 ? "mobile" : "desktop";
    const storageKey = `aviora-journey-tools-introduced-v1-${viewport}`;
    if (sessionStorage.getItem(storageKey)) return;

    const showSearch = window.setTimeout(() => {
      sessionStorage.setItem(storageKey, "true");
      setToolHint("search");
    }, 650);
    const showFilter = window.setTimeout(() => setToolHint("filter"), 2650);
    const hideHint = window.setTimeout(() => setToolHint(null), 4650);

    return () => {
      window.clearTimeout(showSearch);
      window.clearTimeout(showFilter);
      window.clearTimeout(hideHint);
    };
  }, [mobileScrolledTools, scrolled]);

  const darkSurface = tone === "dark" || (!scrolled && tone !== "light" && variant !== "minimal");

  const positionNavigationLens = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const target = (event.target as HTMLElement).closest<HTMLAnchorElement>("a");
    if (!target || !event.currentTarget.contains(target)) return;
    const navigationRect = event.currentTarget.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    setNavigationLens({
      left: targetRect.left - navigationRect.left,
      width: targetRect.width,
      visible: true,
    });
  };

  return (
    <header
      className={cn(
        "site-navigation-shell fixed inset-x-0 top-0 z-50 transition-[border-color,box-shadow,padding,background-color] duration-300 ease-[var(--ease-apple)]",
        scrolled && "is-scrolled",
        variant === "minimal"
          ? "border-b border-neutral-950/8 bg-[var(--bg-primary)]"
          : "px-3 pt-3 md:px-5",
        scrolled
          ? tone === "dark"
            ? "border-b border-white/10 bg-neutral-950/94 pt-0 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            : variant === "minimal"
              ? "border-b border-neutral-950/10 bg-[var(--bg-primary)]"
              : "border-b border-neutral-950/8 bg-[var(--bg-primary)] pt-0 shadow-[0_10px_30px_rgba(22,21,18,0.08)]"
          : tone === "light"
            ? "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-28 before:bg-gradient-to-b before:from-white/72 before:to-transparent"
            : "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-28 before:bg-gradient-to-b before:from-black/35 before:to-transparent",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-[58px] max-w-7xl items-center justify-between px-3.5 transition duration-300 ease-[var(--ease-apple)] md:h-[62px] md:px-4 lg:px-5",
          variant === "minimal" &&
            "h-20 px-5 text-neutral-950 [--brand-wordmark-color:var(--text-primary)] md:h-20 md:px-8",
          scrolled
            ? tone === "dark"
              ? "h-[70px] text-white [--brand-wordmark-color:#ffffff] md:h-[70px]"
              : "h-[70px] text-neutral-950 [--brand-wordmark-color:var(--text-primary)] md:h-[70px]"
            : variant === "minimal" || tone === "light"
              ? "text-neutral-950 [--brand-wordmark-color:var(--text-primary)]"
              : "text-white [--brand-wordmark-color:#ffffff]",
        )}
      >
        <Link
          href="/"
          className="site-navigation__island site-navigation__brand brand-wordmark h-10 shrink-0 text-[18px]"
        >
          {brand}
        </Link>

        <nav
          aria-label="Primary"
          className="site-navigation__island site-navigation__primary relative hidden items-center gap-0.5 lg:flex"
          onPointerOver={positionNavigationLens}
          onPointerLeave={() => setNavigationLens((current) => ({ ...current, visible: false }))}
        >
          <span
            className={cn("site-navigation__hover-lens", navigationLens.visible && "is-visible")}
            style={{
              transform: `translate3d(${navigationLens.left}px, 0, 0)`,
              width: navigationLens.width,
            }}
            aria-hidden="true"
          />
          {items.map((item) => (
            <NavigationMenuItem
              key={`${item.label}-${item.href}`}
              item={item}
              active={isNavigationItemActive(item.href, pathname)}
              scrolled={scrolled}
              dark={tone === "dark"}
              light={tone === "light"}
              minimal={variant === "minimal"}
            />
          ))}
        </nav>

        <div className="site-navigation__actions hidden shrink-0 items-center gap-2 lg:flex">
          {scrolled && mobileScrolledTools ? (
            <>
              <button
                type="button"
                className="site-navigation__desktop-tool site-navigation__desktop-tool--search"
                onClick={() => window.dispatchEvent(new Event(mobileScrolledTools.searchEvent))}
                aria-label="Search journeys"
                title="Search journeys"
              >
                <SearchIcon size={17} strokeWidth={1.7} aria-hidden="true" />
                {toolHint === "search" ? (
                  <span className="site-navigation__tool-coachmark" role="status">
                    Search here
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                className="site-navigation__desktop-tool site-navigation__desktop-tool--filter"
                onClick={() => window.dispatchEvent(new Event(mobileScrolledTools.filterEvent))}
                aria-label="Filter journeys"
                title="Filter journeys"
              >
                <SlidersHorizontal size={17} strokeWidth={1.7} aria-hidden="true" />
                {toolHint === "filter" ? (
                  <span className="site-navigation__tool-coachmark" role="status">
                    Filter here
                  </span>
                ) : null}
              </button>
            </>
          ) : null}
          {scrolled && journeyDetailTools ? (
            <Link
              href={journeyDetailTools.journeysHref}
              className="site-navigation__detail-journeys-desktop"
              onClick={() =>
                trackCtaClick(
                  journeyDetailTools.journeysLabel,
                  journeyDetailTools.journeysHref,
                  "tour-detail-nav-journeys-desktop",
                  journeyDetailTools.journeySlug,
                )
              }
            >
              <Map size={15} strokeWidth={1.7} aria-hidden="true" />
              <span>{journeyDetailTools.journeysLabel}</span>
            </Link>
          ) : (
            <NavigationHelpLink href={whatsapp.href} />
          )}
          <Link
            href={scrolled && journeyDetailTools ? journeyDetailTools.planHref : cta.href}
            className={cn(
              "site-navigation__planning-cta",
              darkSurface
                ? "site-navigation__planning-cta--dark"
                : "site-navigation__planning-cta--light",
            )}
            onClick={() => {
              if (!scrolled || !journeyDetailTools) return;
              trackCtaClick(
                journeyDetailTools.planLabel,
                journeyDetailTools.planHref,
                "tour-detail-nav-plan-desktop",
                journeyDetailTools.journeySlug,
              );
            }}
          >
            <span>{scrolled && journeyDetailTools ? journeyDetailTools.planLabel : cta.label}</span>
            <ArrowUpRight size={14} strokeWidth={1.7} aria-hidden="true" />
          </Link>
        </div>

        <div
          className={cn(
            "site-navigation__mobile-actions flex items-center gap-1.5 lg:hidden",
            scrolled && mobileScrolledTools && "site-navigation__mobile-actions--journeys",
            scrolled && journeyDetailTools && "site-navigation__mobile-actions--detail",
          )}
        >
          {scrolled && journeyDetailTools ? (
            <>
              <Link
                href={journeyDetailTools.journeysHref}
                className="site-navigation__detail-journeys"
                onClick={() =>
                  trackCtaClick(
                    journeyDetailTools.journeysLabel,
                    journeyDetailTools.journeysHref,
                    "tour-detail-nav-journeys-mobile",
                    journeyDetailTools.journeySlug,
                  )
                }
              >
                {journeyDetailTools.journeysLabel}
              </Link>
              <Link
                href={journeyDetailTools.planHref}
                className="site-navigation__detail-plan"
                onClick={() =>
                  trackCtaClick(
                    journeyDetailTools.planLabel,
                    journeyDetailTools.planHref,
                    "tour-detail-nav-plan-mobile",
                    journeyDetailTools.journeySlug,
                  )
                }
              >
                {journeyDetailTools.planLabel}
              </Link>
              <MobileNavigation
                brand={brand}
                items={items}
                cta={{ label: journeyDetailTools.planLabel, href: journeyDetailTools.planHref }}
                whatsapp={whatsapp}
                darkSurface={darkSurface}
              />
            </>
          ) : scrolled && mobileScrolledTools ? (
            <>
              <button
                type="button"
                className="site-navigation__journey-filter"
                onClick={() => window.dispatchEvent(new Event(mobileScrolledTools.filterEvent))}
              >
                <SlidersHorizontal size={14} strokeWidth={1.8} aria-hidden="true" />
                <span>{mobileScrolledTools.filterLabel}</span>
                {toolHint === "filter" ? (
                  <span className="site-navigation__mobile-tool-coachmark" role="status">
                    Filter here
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                className="site-navigation__journey-search"
                onClick={() => window.dispatchEvent(new Event(mobileScrolledTools.searchEvent))}
              >
                <SearchIcon size={14} strokeWidth={1.8} aria-hidden="true" />
                <span>{mobileScrolledTools.searchLabel}</span>
                {toolHint === "search" ? (
                  <span className="site-navigation__mobile-tool-coachmark" role="status">
                    Search here
                  </span>
                ) : null}
              </button>
              <Link href={mobileScrolledTools.planHref} className="site-navigation__journey-plan">
                {mobileScrolledTools.planLabel}
              </Link>
              <a
                href={buildWhatsAppHelpHref(whatsapp.href)}
                target="_blank"
                rel="noreferrer"
                className="site-navigation__mobile-help"
                onClick={() =>
                  trackEvent("whatsapp_click", { placement: "mobile_journeys_toolbar" })
                }
                aria-label="Message an AVIORA travel advisor on WhatsApp"
              >
                <span className="site-navigation__mobile-help-icon" aria-hidden="true">
                  <WhatsAppIcon />
                </span>
              </a>
            </>
          ) : (
            <>
              <Link
                href={mobileCta.href}
                className={cn(
                  "site-navigation__mobile-planning",
                  darkSurface
                    ? "site-navigation__mobile-planning--dark"
                    : "site-navigation__mobile-planning--light",
                )}
              >
                {mobileCta.label}
              </Link>
              <a
                href={buildWhatsAppHelpHref(whatsapp.href)}
                target="_blank"
                rel="noreferrer"
                className="site-navigation__mobile-help"
                onClick={() =>
                  trackEvent("whatsapp_click", {
                    placement: scrolled ? "mobile_navigation_bar" : "mobile_navigation_hero",
                  })
                }
                aria-label="Message an AVIORA travel advisor on WhatsApp"
              >
                <span className="site-navigation__mobile-help-icon" aria-hidden="true">
                  <WhatsAppIcon />
                </span>
                <span className="site-navigation__mobile-help-label">Message an Advisor</span>
              </a>
              <MobileNavigation
                brand={brand}
                items={items}
                cta={cta}
                whatsapp={whatsapp}
                darkSurface={darkSurface}
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
}

function NavigationMenuItem({
  item,
  active,
  scrolled,
  dark,
  light,
  minimal,
}: {
  item: NavigationItem;
  active: boolean;
  scrolled: boolean;
  dark: boolean;
  light: boolean;
  minimal: boolean;
}) {
  const triggerClassName = cn(
    "relative inline-flex min-h-11 items-center px-3 py-2 text-[15px] font-medium transition focus-visible:outline-none focus-visible:ring-1",
    minimal
      ? "after:absolute after:right-3 after:bottom-1.5 after:left-3 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100"
      : "rounded-full",
    (scrolled && !dark) || (!scrolled && light)
      ? "hover:bg-neutral-950/[0.06] focus-visible:ring-neutral-950/20"
      : "hover:bg-white/14 focus-visible:ring-white/35",
  );

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className={triggerClassName}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <Link href={item.href} className={triggerClassName} aria-current={active ? "page" : undefined}>
      {item.label}
    </Link>
  );
}

function isNavigationItemActive(href: string, pathname: string) {
  const itemPath = href.split(/[?#]/)[0];
  if (!itemPath || itemPath === "/") return pathname === "/";
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
}

function MobileNavigation({
  brand,
  items,
  cta,
  whatsapp,
  darkSurface,
}: {
  brand: string;
  items: NavigationItem[];
  cta: { label: string; href: string };
  whatsapp: { label: string; href: string };
  darkSurface: boolean;
}) {
  const pathname = usePathname();

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "site-navigation__mobile-trigger",
            darkSurface
              ? "site-navigation__mobile-trigger--dark"
              : "site-navigation__mobile-trigger--light",
          )}
          aria-label="Open menu"
        >
          <Menu size={19} strokeWidth={1.65} aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-navigation-overlay fixed inset-0 z-[80] bg-[#0f1a22]/24 backdrop-blur-[3px]" />
        <Dialog.Content className="mobile-navigation-panel fixed inset-y-0 right-0 z-[81] flex w-[min(92vw,23rem)] flex-col bg-[rgba(247,249,249,0.96)] p-6 text-[#172129] shadow-[-18px_0_60px_rgba(13,24,31,0.14)] backdrop-blur-2xl sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="brand-wordmark text-[17px]">{brand}</Dialog.Title>
            <Dialog.Close className="mobile-navigation-close" aria-label="Close menu">
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile primary" className="mobile-navigation-links mt-12 grid gap-1">
            {items.map((item) => {
              const active = isNavigationItemActive(item.href, pathname);
              return (
                <Dialog.Close key={`${item.label}-${item.href}`} asChild>
                  <Link
                    href={item.href}
                    className="mobile-navigation-link"
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                  </Link>
                </Dialog.Close>
              );
            })}
          </nav>

          <div className="mobile-navigation-standard mt-8 border-t border-[#172129]/10 pt-5">
            <span className="mobile-navigation-standard__label">The AVIORA standard</span>
            <div className="mobile-navigation-standard__list">
              <div className="mobile-navigation-standard__item">
                <div className="mobile-navigation-standard__copy">
                  <strong>Licensed in China</strong>
                  <span>Planned and operated by our team on the ground.</span>
                </div>
              </div>
              <div className="mobile-navigation-standard__item">
                <div className="mobile-navigation-standard__copy">
                  <strong>Exclusively yours</strong>
                  <span>A private journey, shaped around your pace.</span>
                </div>
              </div>
              <div className="mobile-navigation-standard__item">
                <div className="mobile-navigation-standard__copy">
                  <strong>No shopping stops</strong>
                  <span>Every stop earns its place.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-navigation-cta mt-auto grid gap-2.5 border-t border-[#172129]/10 pt-5">
            <a
              href={buildWhatsAppHelpHref(whatsapp.href)}
              target="_blank"
              rel="noreferrer"
              className="mobile-navigation-whatsapp"
              onClick={() => trackEvent("whatsapp_click", { placement: "mobile_navigation" })}
            >
              <span>Message an Advisor</span>
            </a>
            <Link href={cta.href} className="mobile-navigation-planning">
              <span>{cta.label}</span>
            </Link>
            <p className="px-1 pt-1 text-center text-[11px] leading-5 text-[#172129]/46">
              Local support from people based in China.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function NavigationHelpLink({ href, compact = false }: { href: string; compact?: boolean }) {
  const helpHref = buildWhatsAppHelpHref(href);

  return (
    <a
      href={helpHref}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("whatsapp_click", { placement: "navigation_help" })}
      className={cn("site-navigation__help-link", compact && "site-navigation__help-link--compact")}
      aria-label="Message an AVIORA travel advisor on WhatsApp"
    >
      <span className="site-navigation__help-icon">
        <WhatsAppIcon aria-hidden="true" />
      </span>
      {!compact ? <span>Message an Advisor</span> : null}
    </a>
  );
}

function buildWhatsAppHelpHref(href: string) {
  try {
    const url = new URL(href);
    if (!url.searchParams.has("text")) {
      url.searchParams.set(
        "text",
        "Hi AVIORA, I'm planning a private trip to China and would like some help.",
      );
    }
    return url.toString();
  } catch {
    return href;
  }
}
