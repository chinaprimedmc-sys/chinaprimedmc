/**
 * 本模块职责：四个服务落地页共用的版式（首屏、答案、适合谁、包含项、步骤、行程列表、FAQ、咨询表单）。
 * 输入：content（文案，来自 content/services）与可选的 journeys（行程目录条目）。
 * 输出：完整页面，含导航和页脚。
 * 不负责：metadata 与结构化数据（在各页面的 page.tsx 里）。
 */
import { ArrowRight, Check, Minus } from "@/components/icons/symbols";
import Image from "next/image";
import Link from "next/link";

import { HubSpotForm } from "@/components/forms/hubspot-form";
import { SiteFooter } from "@/components/footer/site-footer";
import { WhatsAppIcon } from "@/components/icons";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { JourneyTile } from "@/components/tours/journey-tile";
import { buildExplorerItem } from "@/lib/tours/journey-explorer-items";
import { siteConfig } from "@/config/site";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import type { ServicePageContent } from "@/content/services";

import styles from "./service-page.module.css";

export function ServicePage({
  content,
  journeys = [],
}: {
  content: ServicePageContent;
  journeys?: JourneyCatalogItem[];
}) {
  const { hero } = content;
  return (
    <main className={styles.page}>
      <SiteNavigation />

      <section className={styles.hero} aria-labelledby="service-title">
        {hero.image ? (
          <Image
            className={styles.heroImage}
            src={hero.image}
            alt={hero.alt ?? ""}
            fill
            priority
            sizes="100vw"
          />
        ) : null}
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroBody}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>
          <h1 id="service-title">
            {hero.title} <em>{hero.emphasis}</em>
          </h1>
          <p className={styles.lede}>{hero.lede}</p>
          <div className={styles.heroActions}>
            <a
              className={styles.button}
              href={journeys.length && content.listing ? `#${content.listing.id}` : "#enquire"}
            >
              {hero.primaryLabel}
            </a>
            <Link className={styles.textLinkLight} href={hero.secondary.href}>
              {hero.secondary.label} <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ul className={styles.facts} aria-label="Key facts">
        {content.facts.map((fact) => (
          <li key={fact.value}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </li>
        ))}
      </ul>

      <section className={styles.answer} aria-labelledby="answer-title">
        <div>
          <p className={styles.kicker}>{content.answer.kicker}</p>
          <h2 id="answer-title" className={styles.big}>
            {content.answer.title}
          </h2>
        </div>
        <div className={styles.answerText}>
          {content.answer.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </section>

      {content.places?.map((group) => (
        <section key={group.id} className={styles.places} aria-labelledby={`${group.id}-title`}>
          <header className={styles.head}>
            <p className={styles.kicker}>{group.kicker}</p>
            <h2 id={`${group.id}-title`}>{group.title}</h2>
            <p className={styles.headNote}>{group.intro}</p>
          </header>
          <ul className={styles.placeGrid}>
            {group.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.href ? (
                  <Link className={styles.textLink} href={item.href}>
                    {item.linkLabel ?? "Read more"} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ))}

      {content.listing && journeys.length ? (
        <section className={styles.listing} id={content.listing.id} aria-labelledby="listing-title">
          <header className={styles.head}>
            <p className={styles.kicker}>{content.listing.kicker}</p>
            <h2 id="listing-title">{content.listing.title}</h2>
            <p className={styles.headNote}>{content.listing.intro}</p>
          </header>
          <div className={styles.cards}>
            {journeys.map((journey) => (
              <JourneyTile
                key={journey.slug}
                item={buildExplorerItem(journey)}
                position={journeys.indexOf(journey)}
              />
            ))}
          </div>
          {content.listing.note ? <p className={styles.note}>{content.listing.note}</p> : null}
        </section>
      ) : null}

      {content.fit ? (
        <section className={styles.fit} aria-labelledby="fit-title">
          <h2 id="fit-title" className={styles.sr}>
            Is this right for you?
          </h2>
          <div>
            <h3>{content.fit.goodTitle}</h3>
            <ul className={styles.checks}>
              {content.fit.good.map((line) => (
                <li key={line}>
                  <Check size={16} aria-hidden="true" /> {line}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>{content.fit.notTitle}</h3>
            <ul className={styles.alternatives}>
              {content.fit.not.map((item) => (
                <li key={item.href}>
                  <p>{item.text}</p>
                  <Link className={styles.textLink} href={item.href}>
                    {item.linkLabel} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {content.scope ? (
        <section className={styles.scope} aria-labelledby="scope-title">
          <h2 id="scope-title">{content.scope.title}</h2>
          <div className={styles.scopeGrid}>
            <div>
              <h3>Included</h3>
              <ul className={styles.checks}>
                {content.scope.included.map((line) => (
                  <li key={line}>
                    <Check size={16} aria-hidden="true" /> {line}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Not included</h3>
              <ul className={`${styles.checks} ${styles.muted}`}>
                {content.scope.notIncluded.map((line) => (
                  <li key={line}>
                    <Minus size={16} aria-hidden="true" /> {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      {content.steps ? (
        <section className={styles.steps} aria-labelledby="steps-title">
          <h2 id="steps-title">{content.steps.title}</h2>
          <ol>
            {content.steps.items.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className={styles.operator} aria-label="Who runs the service">
        <p className={styles.kicker}>Who is behind it</p>
        <p>
          AVIORA is operated by {siteConfig.operator.englishReferenceName}, a registered company in{" "}
          {siteConfig.operator.locality} that is {siteConfig.operator.tourismLicense.statement}. We
          have offices in {siteConfig.operator.officeCities.join(", ")}.{" "}
          <Link className={styles.inline} href="/company">
            See our company and registration details
          </Link>
          .
        </p>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <h2 id="faq-title">Good questions to ask us.</h2>
        <div>
          {content.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.related} aria-labelledby="related-title">
        <h2 id="related-title">Keep exploring</h2>
        <ul>
          {content.related.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <span>{link.label}</span>
                {link.note ? <small>{link.note}</small> : null}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.closing} id="enquire" aria-labelledby="enquire-title">
        <div className={styles.closingText}>
          <p className={styles.eyebrow}>{content.enquiry.kicker}</p>
          <h2 id="enquire-title">{content.enquiry.title}</h2>
          <p>{content.enquiry.body}</p>
          <a className={styles.whatsappLink} href={content.enquiry.whatsappHref}>
            <WhatsAppIcon aria-hidden="true" /> Prefer to write? Message us on WhatsApp
          </a>
        </div>
        <div className={styles.formPanel}>
          <HubSpotForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
