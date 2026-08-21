import { ArrowRight, Check, CircleDollarSign, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { homeNavItems } from "@/content/home/homepage";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import styles from "./high-intent-tour-landing.module.css";

export type HighIntentLandingContent = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  answerTitle: string;
  answer: string[];
  decisionTitle: string;
  decisionIntro: string;
  decisionRows: Array<{ label: string; recommendation: string; reason: string }>;
  proofTitle: string;
  proof: Array<{ title: string; body: string }>;
  journeysTitle: string;
  journeysIntro: string;
  finalTitle: string;
  finalBody: string;
  planningHref: string;
  planningLabel: string;
  articleHref: string;
  articleLabel: string;
};

type Props = {
  content: HighIntentLandingContent;
  journeys: JourneyCatalogItem[];
};

export function HighIntentTourLanding({ content, journeys }: Props) {
  return (
    <PageContainer tone="white" className={styles.page}>
      <SiteNavigation
        tone="adaptive"
        variant="default"
        items={homeNavItems}
        cta={{ label: content.planningLabel, href: content.planningHref }}
        showWhatsapp={false}
      />

      <section className={styles.hero} aria-labelledby="high-intent-title" data-hero-layout="true">
        <OptimizedImage
          src={content.heroImage}
          alt={content.heroAlt}
          fill
          priority
          sizes="100vw"
          frameClassName={styles.heroMedia}
          className={styles.heroImage}
        />
        <div className={styles.heroShade} aria-hidden="true" />
        <ContentContainer size="xl" className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p>{content.eyebrow}</p>
            <h1 id="high-intent-title">{content.title}</h1>
            <span>{content.intro}</span>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} href={content.planningHref}>
                {content.planningLabel} <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link className={styles.secondaryAction} href={content.articleHref}>
                {content.articleLabel}
              </Link>
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className={styles.trustBand} aria-label="AVIORA operating standard">
        <ContentContainer size="xl" className={styles.trustGrid}>
          <span>
            <ShieldCheck size={17} aria-hidden="true" /> Licensed China operator since 2018
          </span>
          <span>
            <MapPin size={17} aria-hidden="true" /> One China-based operating team
          </span>
          <span>
            <Check size={17} aria-hidden="true" /> No forced shopping
          </span>
          <span>
            <CircleDollarSign size={17} aria-hidden="true" /> Price assumptions stated in writing
          </span>
        </ContentContainer>
      </section>

      <section className={styles.answerSection}>
        <ContentContainer size="lg" className={styles.answerGrid}>
          <div>
            <p className={styles.eyebrow}>THE ANSWER FIRST</p>
            <h2>{content.answerTitle}</h2>
          </div>
          <div className={styles.answerCopy}>
            {content.answer.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className={styles.journeySection} id="journeys">
        <ContentContainer size="xl">
          <header className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>PUBLISHED PRIVATE JOURNEYS</p>
              <h2>{content.journeysTitle}</h2>
            </div>
            <p>{content.journeysIntro}</p>
          </header>
          <div className={styles.journeyGrid}>
            {journeys.map((journey) => (
              <article className={styles.journeyCard} key={journey.slug}>
                <OptimizedImage
                  src={journey.image.src}
                  alt={journey.image.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 33vw"
                  frameClassName={styles.journeyImageWrap}
                  className={styles.journeyImage}
                />
                <div className={styles.journeyBody}>
                  <div className={styles.journeyMeta}>
                    <span>{journey.durationLabel}</span>
                    <span>From US${journey.pricing.fromUsd.toLocaleString()} pp</span>
                  </div>
                  <h3>{journey.title}</h3>
                  <p>{journey.routeLabel}</p>
                  <p className={styles.bestFor}>{journey.bestForSummary}</p>
                  <Link href={journey.href}>
                    View journey and price basis <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.priceNote}>
            Published prices are land-only indicative starting figures. Each journey page states its
            party-size, room and date assumptions. International flights are not included unless a
            written proposal says otherwise.
          </p>
        </ContentContainer>
      </section>

      <section className={styles.decisionSection}>
        <ContentContainer size="lg">
          <header className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>CHOOSE BY FIT</p>
              <h2>{content.decisionTitle}</h2>
            </div>
            <p>{content.decisionIntro}</p>
          </header>
          <div className={styles.decisionTable} role="table" aria-label={content.decisionTitle}>
            {content.decisionRows.map((row) => (
              <div className={styles.decisionRow} role="row" key={row.label}>
                <strong role="cell">{row.label}</strong>
                <span role="cell">{row.recommendation}</span>
                <p role="cell">{row.reason}</p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className={styles.proofSection}>
        <ContentContainer size="lg">
          <p className={styles.eyebrow}>WHAT WE PUT IN WRITING</p>
          <h2>{content.proofTitle}</h2>
          <div className={styles.proofGrid}>
            {content.proof.map((item, index) => (
              <div className={styles.proofItem} key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section className={styles.finalSection}>
        <ContentContainer size="lg" className={styles.finalInner}>
          <div>
            <p className={styles.eyebrow}>START WITH THE REAL CONSTRAINTS</p>
            <h2>{content.finalTitle}</h2>
            <p>{content.finalBody}</p>
          </div>
          <Link className={styles.primaryAction} href={content.planningHref}>
            {content.planningLabel} <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </ContentContainer>
      </section>

      <SiteFooter />
    </PageContainer>
  );
}
