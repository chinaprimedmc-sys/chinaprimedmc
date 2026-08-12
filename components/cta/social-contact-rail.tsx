"use client";

import { Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { cn } from "@/lib/utils/cn";
import { trackEvent } from "@/lib/analytics/events";

export function SocialContactRail({
  whatsappHref,
  email,
}: {
  whatsappHref: string;
  email: string;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isJournalPage = pathname === "/journal";
  const isBackend = pathname.startsWith("/admin");
  const [heroHasPassed, setHeroHasPassed] = useState(false);
  const [featuredJourneyInView, setFeaturedJourneyInView] = useState(false);
  const [expertFormInView, setExpertFormInView] = useState(false);
  const [formFieldFocused, setFormFieldFocused] = useState(false);
  const [journalMastheadPassed, setJournalMastheadPassed] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const hero = document.querySelector<HTMLElement>(".home-conversion-hero, .home-hero-split");
    const featuredJourney = document.querySelector<HTMLElement>(".home-featured-cinema");
    const expertForm = document.querySelector<HTMLElement>("#find-your-china");

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroHasPassed(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
      },
      { threshold: 0 },
    );
    observer.observe(hero);

    const featuredObserver = featuredJourney
      ? new IntersectionObserver(
          ([entry]) => setFeaturedJourneyInView(Boolean(entry?.isIntersecting)),
          { threshold: 0.08 },
        )
      : null;
    if (featuredJourney) featuredObserver?.observe(featuredJourney);

    const expertObserver = expertForm
      ? new IntersectionObserver(([entry]) => setExpertFormInView(Boolean(entry?.isIntersecting)), {
          threshold: 0.04,
        })
      : null;
    if (expertForm) expertObserver?.observe(expertForm);

    const handleFocusIn = (event: FocusEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        setFormFieldFocused(true);
      }
    };
    const handleFocusOut = () => setFormFieldFocused(false);
    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("focusout", handleFocusOut);

    return () => {
      observer.disconnect();
      featuredObserver?.disconnect();
      expertObserver?.disconnect();
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, [isHomePage]);

  useEffect(() => {
    if (!isJournalPage) {
      return;
    }

    const masthead = document.querySelector<HTMLElement>(".journal-masthead");

    if (!masthead) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setJournalMastheadPassed(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0);
      },
      { threshold: 0 },
    );
    observer.observe(masthead);

    return () => observer.disconnect();
  }, [isJournalPage]);

  if (isBackend) return null;

  const isVisible = isJournalPage
    ? journalMastheadPassed
    : !isHomePage || (heroHasPassed && !featuredJourneyInView);
  const hideForForm = isHomePage && (expertFormInView || formFieldFocused);

  return (
    <>
      <div className={cn("social-contact-rail", isVisible && !hideForForm && "is-visible")}>
        <QuickContactLink
          href={whatsappHref}
          label="WhatsApp"
          className="social-contact-rail__quick-link--whatsapp"
          external
        >
          <WhatsAppIcon aria-hidden="true" />
        </QuickContactLink>
        <QuickContactLink
          href={`mailto:${email}`}
          label="Email"
          className="social-contact-rail__quick-link--email"
        >
          <Mail aria-hidden="true" />
        </QuickContactLink>
      </div>
    </>
  );
}

function QuickContactLink({
  href,
  label,
  className,
  external = false,
  children,
}: {
  href: string;
  label: string;
  className: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className={cn("social-contact-rail__quick-link", className)}
      aria-label={`${label} AVIORA`}
      onClick={() =>
        trackEvent(external ? "whatsapp_click" : "email_click", {
          placement: "floating_quick_contact",
        })
      }
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="social-contact-rail__quick-label" aria-hidden="true">
        {label}
      </span>
      <span className="social-contact-rail__quick-icon">{children}</span>
    </a>
  );
}
