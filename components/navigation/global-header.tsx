"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ArrowUpRight, ChevronDown, Menu, Search, X } from "@/components/icons/symbols";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { trackCtaClick, trackEvent } from "@/lib/analytics/events";
import { privateJourneyOffer } from "@/lib/tours/journey-offer";

import { navigationConfig, type NavigationGroup } from "./navigation-config";
import styles from "./global-header.module.css";

const fullBleedHeroPrefixes = ["/china-destinations"];

const fullBleedHeroPaths = [
  "/tailor-made-china-tours",
  "/fixed-itinerary-china-tours",
  "/private-china-day-tours",
  "/private-guide-and-driver-china",
];

export function GlobalHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isJourneysPage = pathname === "/tours";
  // Pages that open with a full-bleed photo get a transparent bar until the visitor scrolls.
  const overImage =
    isHome ||
    pathname.startsWith("/tours") ||
    fullBleedHeroPaths.includes(pathname) ||
    fullBleedHeroPrefixes.some((prefix) => pathname.startsWith(prefix));
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState("");

  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled(scrollTop > 24);
      setDesktopMenu("");
    };

    const scheduleScrollState = () => {
      if (frameId === 0) frameId = window.requestAnimationFrame(updateScrollState);
    };

    scheduleScrollState();
    window.addEventListener("scroll", scheduleScrollState, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleScrollState);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <header
        className={styles.header}
        data-global-navigation="true"
        data-tone={overImage ? "over-image" : "on-light"}
        data-scrolled={isScrolled || !overImage ? "true" : undefined}
        data-journeys-navigation={isJourneysPage || undefined}
        data-menu-open={isMenuOpen || undefined}
        data-submenu-open={Boolean(desktopMenu) || undefined}
      >
        <div className={styles.desktopShell}>
          <BrandLink className={styles.brandIsland} />
          <NavigationMenu.Root
            className={styles.navIsland}
            aria-label="Primary navigation"
            value={desktopMenu}
            onValueChange={setDesktopMenu}
            activationMode="manual"
          >
            <NavigationMenu.List className={styles.navList}>
              {navigationConfig.groups.map((group) => {
                const active = isGroupActive(group, pathname);
                return (
                  <NavigationMenu.Item key={group.id} value={group.id} className={styles.navItem}>
                    <NavigationMenu.Link asChild active={active}>
                      <Link
                        href={group.href}
                        className={styles.navLink}
                        data-active={active || undefined}
                        aria-current={active ? "page" : undefined}
                      >
                        {desktopLabel(group.id, group.label)}
                      </Link>
                    </NavigationMenu.Link>
                    <NavigationMenu.Trigger
                      className={styles.navToggle}
                      aria-label={`Open ${desktopLabel(group.id, group.label)} menu`}
                    >
                      <ChevronDown size={14} aria-hidden="true" />
                    </NavigationMenu.Trigger>
                    <NavPanel group={group} />
                  </NavigationMenu.Item>
                );
              })}
            </NavigationMenu.List>
          </NavigationMenu.Root>
          <div className={styles.rightGroup}>
            <JourneyTools className={styles.toolsIsland} />
            <PlanLink className={styles.actionIsland} placement="global_header_desktop" />
          </div>
        </div>

        <div className={styles.mobileShell}>
          <BrandLink className={styles.mobileBrand} />
          <div className={styles.mobileActions}>
            <PlanLink className={styles.mobilePlan} placement="global_header_mobile" compact />
            <Dialog.Trigger
              type="button"
              className={styles.iconIsland}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </Dialog.Trigger>
          </div>
        </div>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.mobileOverlay} />
          <Dialog.Content
            id="site-mobile-navigation"
            className={styles.mobileMenu}
            aria-describedby={undefined}
          >
            <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
            <MobileMenu pathname={pathname} onClose={() => setIsMenuOpen(false)} />
          </Dialog.Content>
        </Dialog.Portal>
      </header>
    </Dialog.Root>
  );
}

function BrandLink({ className }: { className: string }) {
  return (
    <Link href="/" className={className} aria-label="AVIORA China home">
      <span className={styles.wordmark}>AVIORA</span>
    </Link>
  );
}

function JourneyTools({ className }: { className: string }) {
  return (
    <div className={className} aria-label="Journey tools">
      <Link href="/search" className={styles.iconIsland} aria-label="Search journeys">
        <Search aria-hidden="true" />
      </Link>
    </div>
  );
}

function NavPanel({ group }: { group: NavigationGroup }) {
  const featured = "featured" in group ? group.featured : undefined;
  return (
    <NavigationMenu.Content className={styles.panel}>
      <div className={styles.panelInner}>
        <div className={styles.panelColumns}>
          {group.columns.map((column, index) => (
            <ul key={`${group.id}-${index}`}>
              {column.links.map((link) => (
                <li key={link.href + link.label}>
                  <NavigationMenu.Link asChild>
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenu.Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        {featured ? (
          <NavigationMenu.Link asChild>
            <Link href={featured.href} className={styles.panelFeatured}>
              <span className={styles.panelPhoto}>
                <Image src={featured.image} alt={featured.imageAlt} fill sizes="260px" />
              </span>
              <span className={styles.panelMeta}>{featured.meta}</span>
              <strong>{featured.title}</strong>
              <span className={styles.panelCta}>
                {featured.label} <ArrowUpRight aria-hidden="true" />
              </span>
            </Link>
          </NavigationMenu.Link>
        ) : null}
      </div>
    </NavigationMenu.Content>
  );
}

function PlanLink({
  className,
  placement,
  compact = false,
}: {
  className: string;
  placement: string;
  compact?: boolean;
}) {
  return (
    <Link
      href={navigationConfig.action.href}
      className={className}
      onClick={() =>
        trackCtaClick(navigationConfig.action.label, navigationConfig.action.href, placement)
      }
    >
      <span>{compact ? "Plan" : navigationConfig.action.label}</span>
      {compact ? null : <ArrowUpRight aria-hidden="true" />}
    </Link>
  );
}

function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  return (
    <div className={styles.mobileMenuInner} data-mobile-menu="true">
      <div className={styles.mobileMenuHeader}>
        <BrandLink className={styles.mobileMenuBrand} />
        <button
          type="button"
          className={styles.iconIsland}
          aria-label="Close navigation menu"
          onClick={onClose}
        >
          <X aria-hidden="true" />
        </button>
      </div>
      <nav className={styles.mobileMenuBody} aria-label="Mobile navigation">
        {navigationConfig.groups.map((group) => {
          const active = isGroupActive(group, pathname);
          const links = group.columns.flatMap((column) => column.links);
          return (
            <details
              className={styles.mobileGroup}
              key={group.id}
              name="mobile-nav"
              open={active || undefined}
            >
              <summary data-active={active || undefined}>
                {desktopLabel(group.id, group.label)}
                <ChevronDown aria-hidden="true" />
              </summary>
              <div className={styles.mobileSubLinks}>
                <Link href={group.href} onClick={onClose}>
                  View all
                </Link>
                {links
                  .filter((link) => link.href !== group.href)
                  .map((link) => (
                    <Link
                      key={`${group.id}-${link.href}-${link.label}`}
                      href={link.href}
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  ))}
              </div>
            </details>
          );
        })}
        <PlanLink className={styles.mobilePrimaryAction} placement="global_header_mobile_menu" />
        {privateJourneyOffer.active ? (
          <button
            type="button"
            className={styles.mobileOffer}
            onClick={() => {
              onClose();
              window.dispatchEvent(new CustomEvent("aviora:claim-offer"));
            }}
          >
            {privateJourneyOffer.discountPercent}% off your private journey
            <ArrowUpRight aria-hidden="true" />
          </button>
        ) : null}
        <a
          className={styles.mobileContact}
          href={navigationConfig.action.whatsapp[0].href}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            trackEvent("whatsapp_click", { placement: "mobile_menu" });
            onClose();
          }}
        >
          <WhatsAppIcon aria-hidden="true" />
          <span>WhatsApp our China team</span>
        </a>
      </nav>
    </div>
  );
}

function isGroupActive(group: NavigationGroup, pathname: string) {
  return group.activePrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

function desktopLabel(id: NavigationGroup["id"], fallback: string) {
  const labels: Record<NavigationGroup["id"], string> = {
    journeys: "Journeys",
    destinations: "Destinations",
    "why-aviora": "About AVIORA",
    "travel-guide": "Journal",
    "travel-trade": "Travel Trade",
  };
  return labels[id] ?? fallback;
}
