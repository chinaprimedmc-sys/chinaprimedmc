"use client";

import * as Popover from "@radix-ui/react-popover";
import { ArrowUpRight, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { cn } from "@/lib/utils/cn";

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
  const [journalMastheadPassed, setJournalMastheadPassed] = useState(false);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const hero = document.querySelector<HTMLElement>(".home-conversion-hero, .home-hero-split");
    const featuredJourney = document.querySelector<HTMLElement>(".home-featured-cinema");

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

    return () => {
      observer.disconnect();
      featuredObserver?.disconnect();
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

  return (
    <Popover.Root>
      <div className={cn("social-contact-rail", isVisible && "is-visible")}>
        <Popover.Trigger className="social-contact-rail__trigger" aria-label="Contact us">
          <span className="social-contact-rail__trigger-label">Contact us</span>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align="end"
            side="top"
            sideOffset={12}
            collisionPadding={12}
            className="social-contact-rail__panel"
          >
            <div className="social-contact-rail__panel-heading">
              <p className="social-contact-rail__panel-eyebrow">A direct line</p>
              <p className="social-contact-rail__panel-title">Speak with a China specialist.</p>
            </div>
            <div className="social-contact-rail__options">
              <ContactOption
                href={whatsappHref}
                label="WhatsApp us"
                detail="Quick questions and route ideas"
                external
              >
                <WhatsAppIcon className="social-contact-rail__option-icon social-contact-rail__option-icon--whatsapp" />
              </ContactOption>
              <ContactOption
                href={`mailto:${email}`}
                label="Email us"
                detail="Thoughtful trip planning"
              >
                <Mail
                  className="social-contact-rail__option-icon social-contact-rail__option-icon--email"
                  aria-hidden="true"
                />
              </ContactOption>
            </div>
            <Popover.Close className="social-contact-rail__close">Close</Popover.Close>
            <Popover.Arrow className="social-contact-rail__arrow" />
          </Popover.Content>
        </Popover.Portal>
      </div>
    </Popover.Root>
  );
}

function ContactOption({
  href,
  label,
  detail,
  external = false,
  children,
}: {
  href: string;
  label: string;
  detail: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="social-contact-rail__option"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="social-contact-rail__option-mark">{children}</span>
      <span className="social-contact-rail__option-copy">
        <span className="social-contact-rail__option-label">{label}</span>
        <span className="social-contact-rail__option-detail">{detail}</span>
      </span>
      <ArrowUpRight className="social-contact-rail__option-arrow" aria-hidden="true" />
    </a>
  );
}
