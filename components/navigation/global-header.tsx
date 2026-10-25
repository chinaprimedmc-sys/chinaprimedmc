"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, Search, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { trackCtaClick, trackEvent } from "@/lib/analytics/events";

import { navigationConfig, type NavigationGroup } from "./navigation-config";
import styles from "./global-header.module.css";

export function GlobalHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isJourneysPage = pathname === "/tours";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let frameId = 0;

    const updateScrollState = () => {
      frameId = 0;
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      setIsScrolled((current) => {
        const next = scrollTop > 24;
        return current === next ? current : next;
      });
    };

    const scheduleScrollState = () => {
      if (frameId === 0) frameId = window.requestAnimationFrame(updateScrollState);
    };

    scheduleScrollState();
    window.addEventListener("scroll", scheduleScrollState, { passive: true });
    document.addEventListener("scroll", scheduleScrollState, { passive: true, capture: true });
    window.visualViewport?.addEventListener("scroll", scheduleScrollState, { passive: true });
    return () => {
      window.removeEventListener("scroll", scheduleScrollState);
      document.removeEventListener("scroll", scheduleScrollState, true);
      window.visualViewport?.removeEventListener("scroll", scheduleScrollState);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <header
        className={styles.header}
        data-global-navigation="true"
        data-tone={isHome || isJourneysPage ? "over-image" : "on-light"}
        data-scrolled={isScrolled || (!isHome && !isJourneysPage) ? "true" : undefined}
        data-journeys-navigation={isJourneysPage || undefined}
        data-menu-open={isMenuOpen || undefined}
      >
        <div className={styles.desktopShell}>
          <BrandLink className={styles.brandIsland} />
          <nav className={styles.navIsland} aria-label="Primary navigation">
            {navigationConfig.groups.map((group) => {
              const active = isGroupActive(group, pathname);
              return (
                <Link
                  key={group.id}
                  href={group.href}
                  className={styles.navLink}
                  data-active={active || undefined}
                  aria-current={active ? "page" : undefined}
                >
                  {desktopLabel(group.id, group.label)}
                </Link>
              );
            })}
          </nav>
          {isJourneysPage ? <JourneyTools className={styles.toolsIsland} /> : null}
          <WhatsAppMenu />
          <PlanLink className={styles.actionIsland} placement="global_header_desktop" />
        </div>

        <div className={styles.mobileShell}>
          <BrandLink className={styles.mobileBrand} />
          <div className={styles.mobileActions}>
            <WhatsAppLink />
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
          <Dialog.Content className={styles.mobileMenu} aria-describedby={undefined}>
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
      <Link
        href="/tours#journey-catalog"
        className={styles.iconIsland}
        aria-label="Jump to journey filters"
      >
        <SlidersHorizontal aria-hidden="true" />
      </Link>
    </div>
  );
}

function WhatsAppLink() {
  return (
    <a
      href={navigationConfig.action.whatsapp[0].href}
      target="_blank"
      rel="noreferrer"
      className={`${styles.iconIsland} ${styles.whatsappIsland}`}
      aria-label="WhatsApp AVIORA China"
      onClick={() => trackEvent("whatsapp_click", { placement: "mobile_global_header" })}
    >
      <WhatsAppIcon aria-hidden="true" />
    </a>
  );
}

function WhatsAppMenu() {
  return (
    <details className={styles.desktopWhatsapp}>
      <summary
        className={`${styles.iconIsland} ${styles.whatsappIsland}`}
        aria-label="Choose WhatsApp number"
      >
        <WhatsAppIcon aria-hidden="true" />
      </summary>
      <div className={styles.whatsappPopover}>
        <p>WhatsApp our China team</p>
        {navigationConfig.action.whatsapp.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent("whatsapp_click", { placement: "global_header_whatsapp" })}
          >
            <span>{item.label}</span>
            <strong>{item.number}</strong>
          </a>
        ))}
      </div>
    </details>
  );
}

function PlanLink({ className, placement }: { className: string; placement: string }) {
  return (
    <Link
      href={navigationConfig.action.href}
      className={className}
      onClick={() =>
        trackCtaClick(navigationConfig.action.label, navigationConfig.action.href, placement)
      }
    >
      <span>{navigationConfig.action.label}</span>
      <ArrowUpRight aria-hidden="true" />
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
          return (
            <div className={styles.mobileGroup} key={group.id}>
              <Link
                href={group.href}
                className={styles.mobileGroupLink}
                data-active={active || undefined}
                aria-current={active ? "page" : undefined}
                onClick={onClose}
              >
                {group.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
              <div className={styles.mobileSubLinks}>
                {group.columns
                  .flatMap((column) => column.links)
                  .slice(0, 4)
                  .map((link) => (
                    <Link key={`${group.id}-${link.href}`} href={link.href} onClick={onClose}>
                      {link.label}
                    </Link>
                  ))}
              </div>
            </div>
          );
        })}
        <PlanLink className={styles.mobilePrimaryAction} placement="global_header_mobile_menu" />
        <a
          className={styles.mobileContact}
          href={navigationConfig.action.whatsapp[0].href}
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
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
