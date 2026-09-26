import { ArrowRight, Circle, Languages, Map, MessagesSquare } from "lucide-react";
import Link from "next/link";

import { WhatsAppIcon } from "@/components/icons";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { journeyFaqs } from "@/content/tours/journeys-page-content";

import { JourneyCatalog } from "./journey-catalog";
import { JourneyInquiryForm } from "./journey-inquiry-form";
import { JourneysHero } from "./journeys-hero";
import styles from "./journeys-page.module.css";

const guidePrinciples = [
  {
    title: "Historical Context",
    description: "Understand how each place fits into the wider story of China.",
  },
  {
    title: "Living Culture",
    description: "Meet traditions as they are practiced and shared today.",
  },
  {
    title: "Personal Interpretation",
    description: "Ask questions and explore subjects that genuinely interest you.",
  },
] as const;

const processSteps = [
  {
    title: "Tell Us What Matters",
    description: "Share your dates, interests, preferred pace and accommodation style.",
  },
  {
    title: "We Design The Route",
    description: "A China specialist shapes the cities, experiences, hotels and logistics.",
  },
  {
    title: "Travel Privately",
    description: "Explore with your own guide, private vehicle and a journey created for you.",
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

      <section className={styles.multiCity} aria-labelledby="multi-city-title">
        <div className={styles.multiCityMedia}>
          <div className={styles.imagePlaceholder} aria-label="Image placeholder">
            Image placeholder
          </div>
          <div className={styles.multiCityPanel}>
            <p>Tailor-Made Multi-City Journeys</p>
            <h2 id="multi-city-title">One private route, seamlessly connected.</h2>
            <p>
              A complete journey across several destinations, designed around your dates, interests
              and preferred pace.
            </p>
            <div className={styles.route} aria-label="Example multi-city route">
              <span>Beijing</span>
              <ArrowRight aria-hidden="true" />
              <span>Xi&apos;an</span>
              <ArrowRight aria-hidden="true" />
              <span>Shanghai</span>
            </div>
            <Link href="/tours?type=multi-city#journey-catalog">
              Explore Multi-City Journeys
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.guide} aria-labelledby="guide-title">
        <div className={styles.guideMedia} aria-label="Image placeholder">
          Image placeholder
        </div>
        <div className={styles.guideCopy}>
          <p className={styles.eyebrow}>Expert-Led Cultural Travel</p>
          <h2 id="guide-title">Go beyond the landmarks.</h2>
          <p className={styles.guideIntro}>
            Our private guides bring China into context through history, architecture, local
            traditions and the stories that connect them.
          </p>
          <ol className={styles.guideList}>
            {guidePrinciples.map((principle, index) => (
              <li key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <header>
          <p className={styles.eyebrow}>Designed Around You</p>
          <h2 id="process-title">From an idea to your private China journey.</h2>
        </header>
        <ol className={styles.processPath}>
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <span className={styles.marker}>
                <Circle aria-hidden="true" />
                {index + 1}
              </span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.enquiry} id="tailor-your-journey" aria-labelledby="enquiry-title">
        <div className={styles.enquiryIntro}>
          <p className={styles.eyebrow}>A Personal Starting Point</p>
          <h2 id="enquiry-title">Let us shape your journey.</h2>
          <p>
            Tell us what you would like to experience. A China specialist will help turn it into a
            private route.
          </p>
          <div className={styles.enquiryFacts}>
            <p>
              <Languages aria-hidden="true" />
              Expert local guidance
            </p>
            <p>
              <Map aria-hidden="true" />
              Flexible route design
            </p>
            <p>
              <MessagesSquare aria-hidden="true" />
              One China-based team
            </p>
          </div>
          <div className={styles.whatsapp}>
            <p>WhatsApp a specialist</p>
            <a href="https://wa.me/447985052302">
              <WhatsAppIcon />
              +44 7985052302
            </a>
            <a href="https://wa.me/8617788721361">
              <WhatsAppIcon />
              +86 17788721361
            </a>
          </div>
        </div>
        <div className={styles.formPanel}>
          <JourneyInquiryForm />
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="journey-faq-title">
        <header>
          <p className={styles.eyebrow}>Before You Enquire</p>
          <h2 id="journey-faq-title">Private China journeys, answered clearly.</h2>
        </header>
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
        <Link href="#tailor-your-journey">Start planning</Link>
        <a href="https://wa.me/447985052302" aria-label="WhatsApp a specialist">
          <WhatsAppIcon />
        </a>
      </div>
    </div>
  );
}
