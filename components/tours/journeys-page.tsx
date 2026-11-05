import Link from "next/link";

import { WhatsAppIcon } from "@/components/icons";
import { journeysCopy } from "@/content/tours/journeys-curation";
import { journeyFaqs } from "@/content/tours/journeys-page-content";
import { siteConfig } from "@/config/site";

import { buildExplorerItems } from "@/lib/tours/journey-explorer-items";

import { GuestVoice } from "@/components/trust/trust";
import { EnquirySection } from "@/components/forms/enquiry-section";
import { JourneysExplorer } from "./journeys-explorer";
import styles from "./journeys-page.module.css";

const whatsapp = "https://wa.me/8618027438191";

export function JourneysPage({ initialQueryString = "" }: { initialQueryString?: string }) {
  const since = new Date(siteConfig.operator.founded).getFullYear();
  const explorerItems = buildExplorerItems();

  return (
    <div className={styles.page} data-journeys-page="true">
      <JourneysExplorer items={explorerItems} initialQueryString={initialQueryString} />

      <div className={styles.wrap}>
        <section className={styles.statement} aria-label="About AVIORA">
          <p className={styles.definition}>{journeysCopy.definition}</p>
          <p className={styles.big}>{journeysCopy.statement}</p>
          <dl className={styles.proof}>
            <div>
              <dt>Since {since}</dt>
              <dd>A licensed China operator, based in Guangzhou</dd>
            </div>
            <div>
              <dt>No hidden costs</dt>
              <dd>
                What is included, what is not, and every optional extra, in writing before you pay
              </dd>
            </div>
            <div>
              <dt>Within a day</dt>
              <dd>A specialist replies to you on WhatsApp</dd>
            </div>
          </dl>
        </section>
      </div>

      <div className={styles.wrap}>
        <GuestVoice topic="hotels" count={1} seed="journeys" title="Guests on the hotels" />
        <GuestVoice topic="guides" count={1} seed="journeys" title="Guests on their guides" />
        <GuestVoice topic="pace" count={1} seed="journeys" title="Guests on the pace" />
      </div>

      <div className={styles.wrap}>
        <section aria-labelledby="steps-title">
          <header className={styles.head}>
            <h2 id="steps-title">{journeysCopy.stepsTitle}</h2>
          </header>
          <ol className={styles.steps}>
            {journeysCopy.steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{["i", "ii", "iii", "iv"][index]}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={styles.faq} aria-labelledby="journey-faq-title">
          <h2 id="journey-faq-title">{journeysCopy.faqTitle}</h2>
          <div className={styles.faqList}>
            {journeyFaqs.slice(0, 4).map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <EnquirySection
        placement="journeys"
        tone="stone"
        title={journeysCopy.closingTitle}
        intro="Tell us when you would like to travel and who is coming. We will suggest a route from this page, or design one from scratch."
      />

      <div className={styles.mobileActionBar} aria-label="Journey enquiry actions">
        <Link href="/start-planning?source=journeys-mobile">Plan my journey</Link>
        <a href={whatsapp} aria-label="WhatsApp our team">
          <WhatsAppIcon aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
