import { ArrowUpRight, Mail } from "lucide-react";
import { TrackedLink } from "@/components/cta/tracked-link";
import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import styles from "./page-closing.module.css";

export type PageClosingIntent =
  | "home"
  | "tours"
  | "tour"
  | "journal"
  | "destination"
  | "family"
  | "senior"
  | "about"
  | "trade"
  | "legal";
const content: Record<PageClosingIntent, { eyebrow: string; title: string; primary: string }> = {
  home: {
    eyebrow: "Plan With A Local Team",
    title: "Let China feel considered before you arrive.",
    primary: "Plan My Private Journey",
  },
  tours: {
    eyebrow: "A Clearer Starting Point",
    title: "Not sure which journey fits you best?",
    primary: "Help Me Choose",
  },
  tour: {
    eyebrow: "Make It Yours",
    title: "Shape this journey around your dates and pace.",
    primary: "Tailor This Journey",
  },
  journal: {
    eyebrow: "From Research To A Real Route",
    title: "Turn what you have learned into your journey.",
    primary: "Plan From This Guide",
  },
  destination: {
    eyebrow: "Plan The Details",
    title: "Build this destination into a journey that flows.",
    primary: "Plan This Destination",
  },
  family: {
    eyebrow: "Designed Around Your Family",
    title: "Let us plan around your children, pace and priorities.",
    primary: "Plan Around My Family",
  },
  senior: {
    eyebrow: "Travel At Your Pace",
    title: "Protect comfort without missing what matters.",
    primary: "Plan Around My Pace",
  },
  about: {
    eyebrow: "A China Team You Can Reach",
    title: "Tell us what would make this trip feel right.",
    primary: "Speak With Our China Team",
  },
  trade: {
    eyebrow: "For Tour Operators And Advisors",
    title: "Put your next China brief in local hands.",
    primary: "Send A Trade Brief",
  },
  legal: {
    eyebrow: "Clarity Before Commitment",
    title: "Need an answer about these booking terms?",
    primary: "Ask About These Terms",
  },
};

export function PageClosing({
  intent,
  primaryHref,
  journeySlug,
}: {
  intent: PageClosingIntent;
  primaryHref?: string;
  journeySlug?: string;
}) {
  const copy = content[intent];
  const href = primaryHref ?? `/start-planning?source=closing-${intent}`;
  const whatsappHref = `https://wa.me/447985052302?text=${encodeURIComponent(intent === "trade" ? "Hello China Prime DMC, I would like to discuss a travel-trade brief." : "Hello AVIORA, I would like help planning a private journey in China.")}`;
  return (
    <section className={styles.closing} aria-labelledby={`closing-${intent}-title`}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p>{copy.eyebrow}</p>
          <h2 id={`closing-${intent}-title`}>{copy.title}</h2>
          <span>
            Share your dates, interests and preferred pace. Our China-based team will reply within
            24 hours with a clear first direction.
          </span>
        </div>
        <div className={styles.actions}>
          <TrackedLink
            href={href}
            className={styles.primary}
            trackingLabel={copy.primary}
            trackingPlacement={`closing-${intent}-primary`}
            journeySlug={journeySlug}
          >
            {copy.primary}
            <ArrowUpRight size={17} aria-hidden="true" />
          </TrackedLink>
          <TrackedLink
            href={whatsappHref}
            className={styles.whatsapp}
            target="_blank"
            rel="noreferrer"
            trackingLabel="WhatsApp Our China Team"
            trackingPlacement="closing-whatsapp"
            journeySlug={journeySlug}
          >
            <WhatsAppIcon aria-hidden="true" /> WhatsApp Our China Team
          </TrackedLink>
          <a className={styles.email} href={`mailto:${siteConfig.email}`}>
            <Mail size={15} aria-hidden="true" /> Email Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
