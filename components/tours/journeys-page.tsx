import { ArrowRight, Compass, MapPinned, Route } from "lucide-react";
import Link from "next/link";

import { WhatsAppIcon } from "@/components/icons";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { journeyFaqs } from "@/content/tours/journeys-page-content";

import { JourneyCatalog } from "./journey-catalog";
import { JourneysHero } from "./journeys-hero";
import styles from "./journeys-page.module.css";

const serviceDetails = [
  {
    icon: Compass,
    title: "A route with room to breathe",
    description: "Your dates, interests and preferred pace shape the order of each day.",
  },
  {
    icon: Route,
    title: "The connections are considered",
    description: "Guides, private vehicles and travel between cities are planned as one journey.",
  },
  {
    icon: MapPinned,
    title: "People on the ground",
    description: "A China-based team coordinates the details before you travel and along the way.",
  },
] as const;

export function JourneysPage({
  items,
  initialQueryString = "",
}: {
  items: JourneyCatalogItem[];
  initialQueryString?: string;
}) {
  return (
    <div className={styles.page} data-journeys-page="true">
      <JourneysHero />
      <JourneyCatalog items={items} initialQueryString={initialQueryString} />

      <section
        className={styles.service}
        id="traveling-with-aviora"
        aria-labelledby="service-title"
      >
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Traveling with AVIORA</p>
          <h2 id="service-title">A private journey, carefully connected.</h2>
          <p>
            Choose a route that inspires you. We then work through the practical details together,
            from the pace of the days to the people who meet you along the way.
          </p>
        </div>
        <div className={styles.serviceGrid}>
          {serviceDetails.map(({ icon: Icon, title, description }) => (
            <div className={styles.serviceItem} key={title}>
              <Icon aria-hidden="true" size={22} strokeWidth={1.6} />
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.proof} aria-labelledby="proof-title">
        <div>
          <p className={styles.eyebrow}>Before you decide</p>
          <h2 id="proof-title">Know who is planning your journey.</h2>
          <p>
            See the company behind AVIORA, read travelers&apos; accounts, and review what a written
            proposal will confirm before you book.
          </p>
        </div>
        <nav aria-label="About AVIORA and traveler reviews">
          <Link href="/company">
            Our company <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="/reviews">
            Traveler reviews <ArrowRight aria-hidden="true" />
          </Link>
        </nav>
      </section>

      <section className={styles.enquiry} id="tailor-your-journey" aria-labelledby="enquiry-title">
        <div>
          <p className={styles.eyebrow}>Your next step</p>
          <h2 id="enquiry-title">Let&apos;s make it yours.</h2>
          <p>
            Tell us where you would like to go. We&apos;ll help shape the route and confirm the
            services and final price in a written proposal.
          </p>
        </div>
        <div className={styles.enquiryActions}>
          <Link className={styles.primaryAction} href="/start-planning">
            Start planning <ArrowRight aria-hidden="true" />
          </Link>
          <a className={styles.whatsappAction} href="https://wa.me/8618027438191">
            <WhatsAppIcon aria-hidden="true" /> WhatsApp our team
          </a>
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="journey-faq-title">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Good to know</p>
          <h2 id="journey-faq-title">Questions before you go</h2>
        </div>
        <div className={styles.faqList}>
          {journeyFaqs.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <div className={styles.mobileActionBar} aria-label="Journey enquiry actions">
        <Link href="/start-planning">Start planning</Link>
        <a href="https://wa.me/8618027438191" aria-label="WhatsApp our team">
          <WhatsAppIcon aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
