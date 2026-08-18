"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { cn } from "@/lib/utils/cn";
import { trackEvent } from "@/lib/analytics/events";

export function SocialContactRail({ whatsappHref }: { whatsappHref: string; email: string }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isStartPlanningPage = pathname === "/start-planning";
  const isBackend = pathname.startsWith("/admin");
  const [heroHasPassed, setHeroHasPassed] = useState(false);
  const [expertFormInView, setExpertFormInView] = useState(false);
  const [homeFinalCtaInView, setHomeFinalCtaInView] = useState(false);
  const [formFieldFocused, setFormFieldFocused] = useState(false);
  const [mobileHintVisible, setMobileHintVisible] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const hero = document.querySelector<HTMLElement>(
      ".home-redesign-hero, .home-conversion-hero, .home-hero-split",
    );
    const expertForm = document.querySelector<HTMLElement>("#find-your-china");
    const homeFinalCta = document.querySelector<HTMLElement>(".aviora-home-final-cta");

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

    const expertObserver = expertForm
      ? new IntersectionObserver(([entry]) => setExpertFormInView(Boolean(entry?.isIntersecting)), {
          threshold: 0.04,
        })
      : null;
    if (expertForm) expertObserver?.observe(expertForm);

    const finalCtaObserver = homeFinalCta
      ? new IntersectionObserver(
          ([entry]) => setHomeFinalCtaInView(Boolean(entry?.isIntersecting)),
          { threshold: 0.08 },
        )
      : null;
    if (homeFinalCta) finalCtaObserver?.observe(homeFinalCta);

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
      expertObserver?.disconnect();
      finalCtaObserver?.disconnect();
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("focusout", handleFocusOut);
    };
  }, [isHomePage]);

  useEffect(() => {
    const showTimer = window.setTimeout(() => setMobileHintVisible(true), 1600);
    const hideTimer = window.setTimeout(() => setMobileHintVisible(false), 5200);
    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (isBackend) return null;

  const hideForForm =
    isStartPlanningPage ||
    (isHomePage && (expertFormInView || homeFinalCtaInView || formFieldFocused));

  const helpHref = buildWhatsAppHelpHref(whatsappHref);

  return (
    <div
      className={cn(
        "social-contact-rail is-visible",
        isHomePage && "is-homepage",
        heroHasPassed && "is-after-hero",
        hideForForm && "is-hidden-for-form",
      )}
    >
      <a
        href={helpHref}
        className="social-contact-rail__concierge"
        aria-label="Get immediate help from AVIORA on WhatsApp"
        onClick={() => trackEvent("whatsapp_click", { placement: "floating_concierge" })}
        target="_blank"
        rel="noreferrer"
      >
        <span className="social-contact-rail__concierge-icon">
          <WhatsAppIcon aria-hidden="true" />
        </span>
        <span className="social-contact-rail__concierge-copy">
          <strong>Need help?</strong>
          <span>Chat with our China team</span>
        </span>
        <span
          className={cn("social-contact-rail__mobile-hint", mobileHintVisible && "is-visible")}
          aria-hidden="true"
        >
          <strong>Need help?</strong>
          <span>Chat with us</span>
        </span>
      </a>
    </div>
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
