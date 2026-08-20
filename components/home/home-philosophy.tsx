"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, X } from "lucide-react";
import Link from "next/link";
import type { MouseEvent } from "react";
import { useState } from "react";

import { HomeSectionReveal } from "@/components/home/home-journey-selector";
import { OptimizedImage } from "@/components/media/optimized-image";
import styles from "@/components/home/home-redesign.module.css";

const philosophyCards = [
  {
    title: "Muslim-Friendly",
    ariaLabel: "Learn how AVIORA plans Muslim-friendly private China journeys",
    href: "/tours?needs=muslim-friendly",
    planningHref: "/start-planning?source=homepage-philosophy&need=muslim-friendly",
    image: "/home/editorial/philosophy-muslim-friendly.avif",
    imageAlt: "A Muslim family sharing a halal Chinese meal with a local travel specialist",
    imagePosition: "center",
    heading: "Travel China With Confidence",
    description:
      "Halal dining, prayer time and suitable local support, planned around you from the beginning.",
    services: [
      { title: "Halal Dining", detail: "Locally checked options" },
      { title: "Prayer-Friendly Pace", detail: "Planned into each day" },
      { title: "Prepared Local Guides", detail: "Requirements shared in advance" },
    ],
    confirmation: "Confirmed clearly in your itinerary before booking.",
  },
  {
    title: "Family-Friendly",
    ariaLabel: "Learn how AVIORA plans family-friendly private China journeys",
    href: "/tours?travellers=families",
    planningHref: "/start-planning?source=homepage-philosophy&need=family-friendly",
    image: "/home/editorial/philosophy-family-friendly.avif",
    imageAlt: "A multigenerational family making dumplings together in a Beijing courtyard",
    imagePosition: "center",
    heading: "Easier Days For Every Generation",
    description:
      "Balanced days, family-ready stays and private travel planned around your children’s ages and your family’s rhythm.",
    services: [
      { title: "Age-Aware Pacing", detail: "Built around your family" },
      { title: "Family-Ready Hotels", detail: "Room needs confirmed" },
      { title: "Private Transfers", detail: "Less daily logistics" },
    ],
    confirmation: "Essential family requirements are confirmed before booking.",
  },
  {
    title: "Women-Friendly",
    ariaLabel: "Learn how AVIORA supports women traveling in China",
    href: "/tours?needs=women-traveler-support",
    planningHref: "/start-planning?source=homepage-philosophy&need=women-friendly",
    image: "/home/editorial/philosophy-women-friendly.avif",
    imageAlt: "Women travelers exploring a historic Shanghai neighborhood with a local guide",
    imagePosition: "center",
    heading: "Thoughtful Support Throughout",
    description:
      "Carefully selected guides, considered hotel locations, private transfers and responsive local support throughout your journey.",
    services: [
      { title: "Trusted Local Team", detail: "Carefully selected partners" },
      { title: "Considered Stays", detail: "Locations reviewed carefully" },
      { title: "Personal Support", detail: "A local contact throughout" },
    ],
    confirmation: "Female guides may be requested and confirmed where available.",
  },
  {
    title: "Easy-Paced",
    ariaLabel: "Learn how AVIORA plans senior-friendly, easy-paced private China journeys",
    href: "/tours?needs=slower-pacing&pace=easy&sort=relaxed",
    planningHref: "/start-planning?source=homepage-philosophy&need=easy-paced",
    image: "/home/editorial/philosophy-easy-paced.avif",
    imageAlt: "A couple enjoying an easy-paced Great Wall visit with a private local guide",
    imagePosition: "center",
    heading: "See China At A Pace That Feels Right",
    description:
      "Gentler days, fewer hotel changes, practical walking routes and private transport planned around your comfort.",
    services: [
      { title: "Gentler Pacing", detail: "Time to rest and enjoy" },
      { title: "Easier Access", detail: "Practical routes reviewed" },
      { title: "Flexible Days", detail: "Timing can adapt locally" },
    ],
    confirmation: "Mobility and accessibility requirements are reviewed before booking.",
  },
] as const;

type PhilosophyCard = (typeof philosophyCards)[number];

export function HomePhilosophy() {
  const [activeCard, setActiveCard] = useState<PhilosophyCard | null>(null);

  const openCard = (event: MouseEvent<HTMLAnchorElement>, card: PhilosophyCard) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    setActiveCard(card);
  };

  return (
    <section className={styles.philosophy} aria-labelledby="aviora-philosophy-title">
      <div className={styles.container}>
        <HomeSectionReveal className={styles.philosophyHeader}>
          <h2 id="aviora-philosophy-title">
            <span>THE AVIORA PHILOSOPHY</span>
            <strong>AVIORA China Travel</strong>
          </h2>
          <p>
            <span>True to the place. Personal to you.</span>
            <span>Rich in culture, shaped with care.</span>
          </p>
        </HomeSectionReveal>

        <HomeSectionReveal className={styles.philosophyGridReveal} delay={90}>
          <div className={styles.philosophyGrid}>
            {philosophyCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className={styles.philosophyCard}
                aria-label={card.ariaLabel}
                aria-haspopup="dialog"
                onClick={(event) => openCard(event, card)}
              >
                <span className={styles.philosophyMedia}>
                  <OptimizedImage
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    quality={75}
                    sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1280px) 46vw, 576px"
                    frameClassName="absolute inset-0 h-full w-full"
                    style={{ objectPosition: card.imagePosition }}
                  />
                </span>
                <span className={styles.philosophyCardCopy}>
                  <h3>{card.title}</h3>
                  <span className={styles.philosophyCardPrompt}>How We Serve You</span>
                </span>
              </Link>
            ))}
          </div>
        </HomeSectionReveal>
      </div>

      <Dialog.Root open={Boolean(activeCard)} onOpenChange={(open) => !open && setActiveCard(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.philosophyDialogOverlay} />
          {activeCard ? (
            <Dialog.Content
              className={styles.philosophyDialog}
              aria-describedby="philosophy-service-description"
            >
              <div className={styles.philosophyDialogHeader}>
                <div>
                  <p>HOW AVIORA SERVES YOU</p>
                  <Dialog.Title>{activeCard.heading}</Dialog.Title>
                </div>
                <Dialog.Close
                  className={styles.philosophyDialogClose}
                  aria-label="Close service details"
                >
                  <X aria-hidden="true" />
                </Dialog.Close>
              </div>

              <Dialog.Description
                id="philosophy-service-description"
                className={styles.philosophyDialogDescription}
              >
                {activeCard.description}
              </Dialog.Description>

              <ul className={styles.philosophyDialogServices}>
                {activeCard.services.map((service) => (
                  <li key={service.title}>
                    <Check aria-hidden="true" />
                    <span>
                      <strong>{service.title}</strong>
                      <small>{service.detail}</small>
                    </span>
                  </li>
                ))}
              </ul>

              <p className={styles.philosophyDialogConfirmation}>
                <Check aria-hidden="true" />
                <span>{activeCard.confirmation}</span>
              </p>

              <div className={styles.philosophyDialogActions}>
                <Link href={activeCard.planningHref} className={styles.philosophyDialogPrimary}>
                  Plan Around My Needs
                  <ArrowUpRight aria-hidden="true" />
                </Link>
                <Link href={activeCard.href} className={styles.philosophyDialogSecondary}>
                  Explore Suitable Journeys
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </Dialog.Content>
          ) : null}
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
