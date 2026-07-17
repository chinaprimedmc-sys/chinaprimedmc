"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, type SVGProps } from "react";

import { CtaButton } from "@/components/cta";
import { cn } from "@/lib/utils/cn";
import type { NavigationItem } from "@/types/component-library";

type SiteNavigationProps = {
  brand?: string;
  items: NavigationItem[];
  cta?: { label: string; href: string };
  whatsapp?: { label: string; href: string };
  languages?: string[];
  currencies?: string[];
};

export function SiteNavigation({
  brand = "aviora",
  items,
  cta = { label: "Plan My Trip", href: "/contact" },
  whatsapp = { label: "WhatsApp", href: "https://wa.me/447985052302" },
}: SiteNavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-[border-color,box-shadow,padding] duration-300 ease-[var(--ease-apple)] md:px-5",
        scrolled
          ? "border-b border-neutral-950/8 bg-[var(--bg-primary)] pt-0 shadow-[0_10px_30px_rgba(22,21,18,0.08)]"
          : "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:-z-10 before:h-28 before:bg-gradient-to-b before:from-black/35 before:to-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex h-[58px] max-w-7xl items-center justify-between px-3.5 transition duration-300 ease-[var(--ease-apple)] md:h-[62px] md:px-4 lg:px-5",
          scrolled
            ? "h-[70px] text-neutral-950 [--brand-wordmark-color:var(--text-primary)] md:h-[70px]"
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
            />
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex">
          <WhatsAppLink
            href={whatsapp.href}
            label={whatsapp.label}
            compact={false}
            scrolled={scrolled}
          />
          <CtaButton href={cta.href} size="sm" className="h-10 min-h-10 px-5 text-sm font-medium">
            {cta.label}
          </CtaButton>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <WhatsAppLink href={whatsapp.href} label={whatsapp.label} compact scrolled={scrolled} />
          <MobileNavigation
            brand={brand}
            items={items}
            cta={cta}
            whatsapp={whatsapp}
            scrolled={scrolled}
          />
        </div>
      </div>
    </header>
  );
}

function NavigationMenuItem({ item, scrolled }: { item: NavigationItem; scrolled: boolean }) {
  const triggerClassName = cn(
    "inline-flex min-h-10 items-center rounded px-3 py-2 !text-[15px] !font-medium transition focus-visible:outline-none focus-visible:ring-1",
    scrolled
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
  scrolled,
}: {
  brand: string;
  items: NavigationItem[];
  cta: { label: string; href: string };
  whatsapp: { label: string; href: string };
  scrolled: boolean;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={cn(
            "grid size-10 place-items-center rounded border transition",
            scrolled
              ? "border-neutral-950/10 bg-neutral-950/[0.04] text-neutral-950"
              : "border-white/20 bg-white/12 text-white",
          )}
          aria-label="Open menu"
        >
          <Menu size={18} aria-hidden="true" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-black/28 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-3 right-3 bottom-3 z-[81] flex w-[min(86vw,360px)] flex-col rounded-[1.5rem] border border-white/70 bg-white/94 p-4 text-neutral-950 shadow-[0_28px_90px_rgba(15,23,42,0.22)] backdrop-blur-2xl">
          <div className="flex items-center justify-between gap-4">
            <Dialog.Title className="text-[15px] font-semibold tracking-[-0.01em]">
              {brand}
            </Dialog.Title>
            <Dialog.Close
              className="grid size-10 place-items-center rounded transition hover:bg-neutral-950/[0.06]"
              aria-label="Close menu"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile primary" className="mt-6 grid gap-1">
            {items.map((item) => (
              <Dialog.Close key={`${item.label}-${item.href}`} asChild>
                <Link
                  href={item.href}
                  className="flex min-h-12 items-center rounded-2xl px-3 text-[15px] font-medium transition hover:bg-neutral-950/[0.045]"
                >
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <div className="mt-auto grid gap-2 border-t border-neutral-950/8 pt-4">
            <CtaButton href={cta.href} size="sm" className="h-11 w-full">
              {cta.label}
            </CtaButton>
            <a
              href={whatsapp.href}
              className="inline-flex h-10 items-center justify-center gap-2 rounded border border-neutral-950/10 text-sm font-medium text-neutral-800 transition hover:bg-neutral-950/[0.045]"
            >
              <WhatsAppIcon size={16} aria-hidden="true" />
              {whatsapp.label}
            </a>
            <p className="px-1 pt-1 text-center text-xs leading-5 text-neutral-500">
              aviora — a China Prime DMC company.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function WhatsAppLink({
  href,
  label,
  compact,
  scrolled,
}: {
  href: string;
  label: string;
  compact: boolean;
  scrolled: boolean;
}) {
  if (compact) {
    return (
      <a
        href={href}
        aria-label={label}
        className={cn(
          "grid size-11 place-items-center rounded border transition",
          scrolled
            ? "border-neutral-950/10 bg-neutral-950/[0.04] text-neutral-950"
            : "border-white/20 bg-white/12 text-white",
        )}
      >
        <WhatsAppIcon size={22} aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "grid size-10 place-items-center rounded transition",
        scrolled
          ? "text-neutral-700 hover:bg-neutral-950/[0.055]"
          : "text-white/88 hover:bg-white/12",
      )}
      aria-label={label}
    >
      <WhatsAppIcon size={22} aria-hidden="true" />
    </a>
  );
}

function WhatsAppIcon({ size = 18, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      {...props}
    >
      <path d="M5.2 19.1 6.3 15a7.4 7.4 0 1 1 2.8 2.8l-3.9 1.3Z" />
      <path d="M9.6 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.4-.1.6l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 2 2 .2.1.3.1.5-.1l.5-.6c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.5v.4c0 .3-.1.6-.4.8-.5.4-1.2.6-1.9.5-1.2-.2-2.7-.9-3.9-2.1-1.1-1.1-1.9-2.5-2.1-3.8-.1-.7.2-1.4.6-1.8Z" />
    </svg>
  );
}
