import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { WhatsAppIcon } from "@/components/icons";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { getPublicTravelerReviews } from "@/content/home/traveler-reviews";
import { closingPhoto, journeysCopy } from "@/content/tours/journeys-curation";
import { journeyFaqs } from "@/content/tours/journeys-page-content";
import { siteConfig } from "@/config/site";

import { JourneyFinder } from "./journey-finder";
import { JourneysHero } from "./journeys-hero";
import { jost, newsreader } from "./journeys-fonts";
import styles from "./journeys-page.module.css";

const whatsapp = "https://wa.me/8618027438191";
const reviewIds = [1, 3, 2];

/** 取评价的开头，在句末截断，保证读起来完整。 */
function excerpt(text: string, max = 250) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const end = cut.lastIndexOf(". ");
  return end > 90 ? cut.slice(0, end + 1) : `${cut.trimEnd()}…`;
}

export function JourneysPage({
  items,
  initialQueryString = "",
}: {
  items: JourneyCatalogItem[];
  initialQueryString?: string;
}) {
  const allReviews = getPublicTravelerReviews();
  const quoted = reviewIds
    .map((id) => allReviews.find((review) => review.id === id && review.language === "en"))
    .filter((review): review is NonNullable<typeof review> => Boolean(review));
  const since = new Date(siteConfig.operator.founded).getFullYear();

  return (
    <div
      className={`${styles.page} ${newsreader.variable} ${jost.variable}`}
      data-journeys-page="true"
    >
      <JourneysHero />

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
              <dt>{allReviews.length} reviews</dt>
              <dd>Written by travelers after they came home</dd>
            </div>
            <div>
              <dt>Within a day</dt>
              <dd>A specialist replies to you on WhatsApp</dd>
            </div>
          </dl>
        </section>
      </div>

      <JourneyFinder items={items} initialQueryString={initialQueryString} />

      <section className={styles.band} aria-labelledby="reviews-title">
        <div className={styles.wrap}>
          <header className={styles.head}>
            <h2 id="reviews-title">{journeysCopy.reviewsTitle}</h2>
            <Link className={styles.link} href="/reviews">
              Read all {allReviews.length} reviews
            </Link>
          </header>
          <div className={styles.reviews}>
            {quoted.map((review) => (
              <figure key={review.id}>
                <blockquote>“{excerpt(review.paragraphs[0])}”</blockquote>
                <figcaption>
                  {review.author}, {review.location}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

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

        <section aria-labelledby="guides-title">
          <header className={styles.head}>
            <h2 id="guides-title">{journeysCopy.guidesTitle}</h2>
            <Link className={styles.link} href="/journal">
              Read the journal
            </Link>
          </header>
          <div className={styles.guides}>
            {journeysCopy.guides.map((guide) => (
              <Link href={guide.href} key={guide.href}>
                <span className={styles.kicker}>{guide.kicker}</span>
                <h3>{guide.title}</h3>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.faq} aria-labelledby="journey-faq-title">
          <h2 id="journey-faq-title">{journeysCopy.faqTitle}</h2>
          <div className={styles.faqList}>
            {journeyFaqs.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section className={styles.closing} aria-labelledby="closing-title">
        <Image
          src={closingPhoto.src}
          alt={closingPhoto.alt}
          fill
          sizes="100vw"
          className={styles.closingImage}
        />
        <div className={styles.closingShade} aria-hidden="true" />
        <div className={styles.closingBody}>
          <h2 id="closing-title">{journeysCopy.closingTitle}</h2>
          <p>
            A specialist in China replies on WhatsApp, normally within a day. No payment, no
            obligation.
          </p>
          <div className={styles.closingActions}>
            <Link className={styles.buttonLight} href="/start-planning?source=journeys-closing">
              Plan my journey
            </Link>
            <a className={styles.linkLight} href={whatsapp}>
              <WhatsAppIcon aria-hidden="true" /> WhatsApp our team{" "}
              <ArrowRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <div className={styles.mobileActionBar} aria-label="Journey enquiry actions">
        <Link href="/start-planning?source=journeys-mobile">Plan my journey</Link>
        <a href={whatsapp} aria-label="WhatsApp our team">
          <WhatsAppIcon aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
