"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { CtaButton } from "@/components/cta";
import { WhatsAppIcon } from "@/components/icons";
import { buttonBaseStyles, buttonVariants, iconButtonStyles } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils/cn";
import type { NavigationItem } from "@/types/component-library";

type SiteNavigationProps = {
  brand?: string;
  items: NavigationItem[];
  className?: string;
  cta?: { label: string; href: string };
  whatsapp?: { label: string; href: string };
  languages?: string[];
  currencies?: string[];
  tone?: "adaptive" | "dark" | "light";
  showWhatsapp?: boolean;
  scrollThreshold?: number | "hero";
  mobileMenuTone?: "default" | "editorial-dark";
};

export function SiteNavigation({
  brand = "AVIORA",
  items,
  className,
  cta = { label: "Plan My Trip", href: "/contact" },
  whatsapp = { label: "WhatsApp", href: "https://wa.me/447985052302" },
  tone = "adaptive",
  showWhatsapp = true,
  scrollThreshold = 18,
  mobileMenuTone = "default",
}: SiteNavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const threshold = () =>
      scrollThreshold === "hero" ? Math.round(window.innerHeight * 0.18) : scrollThreshold;
    let previous = window.scrollY > threshold();

    const update = () => {
      frame = 0;
      const next = window.scrollY > threshold();
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
  }, [scrollThreshold]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-[border-color,box-shadow,padding] duration-300 ease-[var(--ease-apple)] md:px-5",
        scrolled
          ? tone === "dark"
            ? "border-b border-white/10 bg-neutral-950/94 pt-0 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-xl"
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
          scrolled
            ? tone === "dark"
              ? "h-[70px] text-white [--brand-wordmark-color:#ffffff] md:h-[70px]"
              : "h-[70px] text-neutral-950 [--brand-wordmark-color:var(--text-primary)] md:h-[70px]"
            : tone === "light"
              ? "text-neutral-950 [--brand-wordmark-color:var(--text-primary)]"
              : "text-white [--brand-wordmark-color:#ffffff]",
        )}
      >
        <Link href="/" className="brand-wordmark h-10 shrink-0 text-[18px]">
          {brand}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-0.5 lg:flex">
          {items.map((item) => (
            <NavigationMenuItem
              key={`${item.label}-${item.href}`}
              item={item}
              scrolled={scrolled}
              dark={tone === "dark"}
              light={tone === "light"}
            />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          {showWhatsapp ? <WhatsAppLink href={whatsapp.href} label={whatsapp.label} /> : null}
          <CtaButton
            href={cta.href}
            size="sm"
            className="h-10 min-h-10 !rounded-none !bg-[#1b1c19] !px-5 text-sm font-medium !text-white !shadow-none hover:!bg-[#30483d]"
          >
            {cta.label}
          </CtaButton>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <MobileNavigation
            brand={brand}
            items={items}
            cta={cta}
            whatsapp={whatsapp}
            showWhatsapp={showWhatsapp}
            tone={mobileMenuTone}
          />
        </div>
      </div>
    </header>
  );
}

function NavigationMenuItem({
  item,
  scrolled,
  dark,
  light,
}: {
  item: NavigationItem;
  scrolled: boolean;
  dark: boolean;
  light: boolean;
}) {
  const triggerClassName = cn(
    "inline-flex min-h-10 items-center rounded-full px-3 py-2 !text-[15px] !font-medium transition focus-visible:outline-none focus-visible:ring-1",
    (scrolled && !dark) || (!scrolled && light)
      ? "hover:bg-neutral-950/[0.06] focus-visible:ring-neutral-950/20"
      : "hover:bg-white/14 focus-visible:ring-white/35",
  );

  if (!item.children?.length) {
    return (
      <Link href={item.href} className={triggerClassName}>
        {item.label}
      </Link>
    );
  }

  return (
    <Link href={item.href} className={triggerClassName}>
      {item.label}
    </Link>
  );
}

function MobileNavigation({
  brand,
  items,
  cta,
  whatsapp,
  showWhatsapp,
  tone,
}: {
  brand: string;
  items: NavigationItem[];
  cta: { label: string; href: string };
  whatsapp: { label: string; href: string };
  showWhatsapp: boolean;
  tone: "default" | "editorial-dark";
}) {
  const editorialDark = tone === "editorial-dark";

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className={cn(iconButtonStyles, "size-11")} aria-label="Open menu">
          <Menu size={18} aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            "fixed inset-0 z-[80]",
            editorialDark ? "bg-[#151814]" : "bg-black/28 backdrop-blur-sm",
          )}
        />
        <Dialog.Content
          className={cn(
            "fixed z-[81] flex flex-col p-4",
            editorialDark
              ? "inset-0 w-screen border-0 bg-[#151814] px-5 pt-[max(1.25rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] text-white shadow-none"
              : "top-3 right-3 bottom-3 w-[min(86vw,360px)] rounded-[1.5rem] border border-white/70 bg-white/94 text-neutral-950 shadow-[0_28px_90px_rgba(15,23,42,0.22)] backdrop-blur-2xl",
          )}
        >
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="text-[15px] font-semibold tracking-[-0.01em]">
              {brand}
            </Dialog.Title>
            <Dialog.Close
              className={cn(
                iconButtonStyles,
                editorialDark && "border-white/18 bg-white/8 text-white",
              )}
              aria-label="Close menu"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav
            aria-label="Mobile primary"
            className={cn("mt-8 grid", editorialDark ? "border-t border-white/16" : "gap-1")}
          >
            {items.map((item) => (
              <Dialog.Close key={`${item.label}-${item.href}`} asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex min-h-12 items-center px-4 text-[15px] font-medium transition",
                    editorialDark
                      ? "min-h-16 border-b border-white/16 px-0 font-serif text-3xl font-medium hover:text-[#c7a567]"
                      : "rounded-full hover:bg-neutral-950/[0.045]",
                  )}
                >
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <div
            className={cn(
              "mt-auto grid gap-2 border-t pt-4",
              editorialDark ? "border-white/16" : "border-neutral-950/8",
            )}
          >
            <CtaButton href={cta.href} size="sm" className="h-11 w-full">
              {cta.label}
            </CtaButton>
            {showWhatsapp ? (
              <CtaButton
                href={whatsapp.href}
                variant="whatsappFrosted"
                size="sm"
                target="_blank"
                rel="noreferrer"
                className="h-11 w-full flex-row gap-2.5"
              >
                <WhatsAppIcon className="size-[18px] shrink-0" />
                <span>Chat on WhatsApp</span>
              </CtaButton>
            ) : null}
            <p
              className={cn(
                "px-1 pt-2 text-center text-xs leading-5",
                editorialDark ? "text-white/48" : "text-neutral-500",
              )}
            >
              AVIORA — tailored private travel across China.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function WhatsAppLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        buttonBaseStyles,
        buttonVariants.whatsappFrosted,
        "h-10 min-h-10 gap-2.5 px-4 text-sm font-semibold",
      )}
      aria-label={label}
    >
      <WhatsAppIcon className="size-[18px] shrink-0" />
      <span>{label}</span>
    </a>
  );
}
