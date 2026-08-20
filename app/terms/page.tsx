import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowUpRight, CalendarClock, FileCheck2, ReceiptText, RefreshCw } from "lucide-react";

import { SiteFooter } from "@/components/footer/site-footer";
import { PageClosing } from "@/components/footer/page-closing";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { homeNavItems, primaryAction } from "@/content/home/homepage";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import styles from "./terms.module.css";

export const metadata: Metadata = createMetadata({
  title: "China Tour Booking and Cancellation Terms | AVIORA",
  description:
    "Clear AVIORA terms for private China tour bookings, payments, traveler changes, cancellation charges, refunds and extraordinary circumstances.",
  path: "/terms",
});

const policySummary = [
  {
    icon: FileCheck2,
    label: "Confirm in Writing",
    text: "You see the itinerary, full price, payment dates and special supplier terms before you pay.",
  },
  {
    icon: RefreshCw,
    label: "Approve Material Changes",
    text: "We explain a material change and its cost before confirming it whenever practicable.",
  },
  {
    icon: ReceiptText,
    label: "Cancel in Writing",
    text: "The date we receive your notice determines the charge. We acknowledge it within one business day.",
  },
  {
    icon: CalendarClock,
    label: "Receive the Refund Due",
    text: "We provide a written calculation and return the amount due within 14 calendar days.",
  },
];

const cancellationBands = [
  { timing: "More than 60 days before departure", charge: "10%" },
  { timing: "46-60 days before departure", charge: "30%" },
  { timing: "31-45 days before departure", charge: "50%" },
  { timing: "15-30 days before departure", charge: "75%" },
  { timing: "14 days or fewer, or no-show", charge: "100%" },
];

export default function TermsPage() {
  const termsUrl = new URL("/terms", siteConfig.url).toString();

  return (
    <PageContainer tone="white" className={styles.termsPage}>
      <JsonLd
        id="booking-terms-webpage-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": termsUrl + "#webpage",
          url: termsUrl,
          name: "AVIORA Booking, Changes and Cancellation Terms",
          description:
            "Terms for private China journey bookings, changes, cancellation charges and refunds.",
          inLanguage: "en-US",
          datePublished: "2026-07-18",
          dateModified: "2026-08-20",
          publisher: { "@id": siteConfig.url + "/#organization" },
          reviewedBy: { "@id": siteConfig.url + "/#organization" },
          isPartOf: { "@id": siteConfig.url + "/#website" },
        }}
      />
      <JsonLd
        id="booking-terms-service-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": siteConfig.url + "/#private-china-travel-service",
          name: "Private China Journey Planning and Operation",
          serviceType: "Tailor-made private China travel",
          areaServed: { "@type": "Country", name: "China" },
          provider: { "@id": siteConfig.url + "/#organization" },
          termsOfService: termsUrl,
        }}
      />
      <JsonLd
        id="booking-terms-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Booking Terms", path: "/terms" },
        ])}
      />

      <SiteNavigation
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <header className={styles.hero}>
        <ContentContainer size="xl" className={styles.heroInner}>
          <div className={styles.heroTitle}>
            <p className={styles.eyebrow}>BOOKING WITH AVIORA</p>
            <h1>Booking, Changes &amp; Cancellation Terms</h1>
          </div>
          <div className={styles.heroIntroduction}>
            <p className={styles.introLead}>Know what happens before you pay.</p>
            <p>
              This page sets out the standard rules for confirming, changing and cancelling a
              private China journey. <strong>Your signed contract and booking schedule</strong> will
              show the exact services, payment dates and any stricter supplier condition before
              payment.
            </p>
            <dl className={styles.documentMeta}>
              <div>
                <dt>Effective</dt>
                <dd>August 20, 2026</dd>
              </div>
              <div>
                <dt>Applies To</dt>
                <dd>Direct Private Journey Bookings</dd>
              </div>
            </dl>
          </div>
        </ContentContainer>
      </header>

      <main>
        <section className={styles.summarySection} aria-labelledby="terms-at-a-glance">
          <ContentContainer size="xl">
            <div className={styles.sectionIntro}>
              <p className={styles.eyebrow}>AT A GLANCE</p>
              <h2 id="terms-at-a-glance">The Four Rules That Matter Most</h2>
            </div>
            <div className={styles.summaryGrid}>
              {policySummary.map((item, index) => {
                const Icon = item.icon;
                return (
                  <article key={item.label} className={styles.summaryItem}>
                    <div className={styles.summaryMarker}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <Icon aria-hidden="true" />
                    </div>
                    <h3>{item.label}</h3>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>
          </ContentContainer>
        </section>

        <section
          className={styles.scheduleSection}
          id="cancellation"
          aria-labelledby="schedule-title"
        >
          <ContentContainer size="xl" className={styles.scheduleLayout}>
            <div className={styles.scheduleCopy}>
              <p className={styles.eyebrow}>STANDARD CANCELLATION SCHEDULE</p>
              <h2 id="schedule-title">What You Pay If You Cancel</h2>
              <p>
                The charge depends on when we receive your written notice and is applied to the
                total confirmed booking price.{" "}
                <strong>
                  If we recover supplier costs or resell services, we reduce the charge where
                  appropriate.
                </strong>
              </p>
              <p className={styles.scheduleNote}>
                A hotel, flight, rail ticket, permit or limited-capacity experience may carry a
                stricter condition only when it is{" "}
                <strong>identified and accepted before payment</strong>. The same cost will not be
                charged twice.
              </p>
            </div>
            <div className={styles.scheduleTable} role="table" aria-label="Cancellation charges">
              <div className={styles.scheduleHeader} role="row">
                <span role="columnheader">Written Notice Received</span>
                <span role="columnheader">Cancellation Charge</span>
              </div>
              {cancellationBands.map((band) => (
                <div className={styles.scheduleRow} role="row" key={band.timing}>
                  <span role="cell">{band.timing}</span>
                  <strong role="cell">{band.charge}</strong>
                </div>
              ))}
            </div>
          </ContentContainer>
        </section>

        <section className={styles.refundSection} id="refunds" aria-labelledby="refund-title">
          <ContentContainer size="xl" className={styles.refundInner}>
            <p className={styles.refundNumber}>14</p>
            <div>
              <p className={styles.eyebrow}>CALENDAR DAYS</p>
              <h2 id="refund-title">Refunds Issued Within 14 Days</h2>
              <p>
                Once the contract is terminated and the amount due is determined, AVIORA will issue
                that amount to the <strong>original payment method within 14 calendar days</strong>.
                We provide a written calculation and{" "}
                <strong>do not require you to accept a credit</strong> in place of money.
              </p>
            </div>
          </ContentContainer>
        </section>

        <section className={styles.fullTerms} aria-labelledby="complete-terms-title">
          <ContentContainer size="xl" className={styles.fullTermsLayout}>
            <div className={styles.fullTermsHeading}>
              <p className={styles.eyebrow}>COMPLETE TERMS</p>
              <h2 id="complete-terms-title">Find the Rule You Need</h2>
              <p>
                Open only the section relevant to your question.{" "}
                <strong>Mandatory consumer law always comes first.</strong>
              </p>
              <a
                href={"mailto:" + siteConfig.email + "?subject=Question about AVIORA booking terms"}
              >
                Ask About These Terms <ArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className={styles.termList}>
              <PolicyGroup
                number="01"
                eyebrow="BOOKING & PAYMENT"
                title="Before Your Journey Is Confirmed"
              >
                <PolicySection number="01" title="Brand and Contracting Entity" open>
                  <p>
                    AVIORA is the travel brand used on this website. “China Prime DMC” is a service
                    name for our work in China. Unless your booking confirmation states otherwise,
                    travel services in China are contracted and provided by{" "}
                    <strong>{siteConfig.operator.englishReferenceName}</strong> (
                    {siteConfig.operator.legalName}; English translation for reference), registered
                    in Guangzhou on March 28, 2018 and{" "}
                    {siteConfig.operator.tourismLicense.statement}.
                  </p>
                </PolicySection>
                <PolicySection number="02" title="Before a Booking Exists">
                  <p>
                    Website routes, prices, hotels, images and durations are planning examples.
                    Sending an inquiry or receiving a proposal does not create a booking.
                  </p>
                  <p>A booking becomes binding only after all four steps are complete:</p>
                  <PolicyList>
                    <li>we issue a written proposal, quotation or booking confirmation;</li>
                    <li>the authorized booking party formally accepts the contract and terms;</li>
                    <li>the required initial payment is received in cleared funds; and</li>
                    <li>we confirm acceptance and relevant supplier arrangements in writing.</li>
                  </PolicyList>
                </PolicySection>
                <PolicySection number="03" title="Price and Payment">
                  <p>
                    The quotation states the currency, total price, inclusions, exclusions, initial
                    payment, balance date and accepted payment method. It also identifies any
                    service that carries a stricter cancellation condition.
                  </p>
                  <p>
                    After confirmation, a price may change only where the contract expressly permits
                    a direct change in transport cost, tax, government fee or exchange rate. We will
                    show the calculation. If an increase exceeds 8% of the total booking price, you
                    may accept it or terminate without a cancellation charge. A qualifying decrease
                    is passed on, less any reasonable documented processing cost.
                  </p>
                </PolicySection>
                <PolicySection number="04" title="Changes Requested by You">
                  <p>
                    Change requests must be made in writing. We will check availability and explain
                    fare differences, supplier charges and any reasonable administrative cost before
                    confirming a material change where practicable. A reduction in traveler numbers
                    can change the per-person price for rooms, guides and vehicles.
                  </p>
                  <p>
                    A traveler may be replaced where suppliers, ticketing rules, permits and entry
                    requirements allow it. Give at least seven days&apos; notice where possible.
                    Only the actual additional cost of the transfer or name change will be charged.
                  </p>
                </PolicySection>
              </PolicyGroup>

              <PolicyGroup number="02" eyebrow="CANCELLATION & REFUNDS" title="When Plans Change">
                <PolicySection number="05" title="Cancellation by You" open>
                  <p>
                    Send cancellation in writing to {siteConfig.email}. Notice received during our
                    published China business hours takes effect when received; notice received
                    outside those hours takes effect on the next business day. We will acknowledge
                    it within one business day.
                  </p>
                  <p>
                    The standard schedule above applies unless your accepted booking documents
                    clearly identify a different condition. Within five business days, we will
                    provide a written calculation. Where actual savings, recoveries or resale
                    justify a lower charge, the charge will be reduced accordingly.
                  </p>
                </PolicySection>
                <PolicySection number="06" title="Visa Refusal, Illness and Personal Circumstances">
                  <p>
                    Visa refusal, illness, changed work commitments and personal reluctance to
                    travel are normally treated as traveler cancellation. We will help identify
                    recoverable services, but the applicable cancellation schedule remains unless
                    mandatory law or your insurer provides otherwise. Travel insurance should be
                    purchased from the time the booking is confirmed.
                  </p>
                </PolicySection>
                <PolicySection number="07" title="Material Changes by AVIORA">
                  <p>
                    Route sequence, timing and individual suppliers can sometimes require
                    adjustment. A minor operational change that preserves the journey&apos;s
                    character does not create a cancellation right. For a significant change, we
                    will explain the impact and give a reasonable period to choose between:
                  </p>
                  <PolicyList>
                    <li>accepting the revised arrangement and any appropriate price adjustment;</li>
                    <li>accepting a comparable alternative where available; or</li>
                    <li>terminating without a cancellation charge and receiving the amount due.</li>
                  </PolicyList>
                </PolicySection>
                <PolicySection number="08" title="Cancellation by AVIORA">
                  <p>
                    If we cancel before departure for a reason within our control, you may accept a
                    suitable alternative or receive a refund of the amount due within 14 calendar
                    days. A credit may be offered but will not be imposed. We do not refund services
                    already properly performed, and mandatory rights remain unaffected.
                  </p>
                </PolicySection>
                <PolicySection number="09" title="Extraordinary Circumstances">
                  <p>
                    If unavoidable and extraordinary circumstances at the destination or its
                    immediate vicinity significantly affect performance of the journey or carriage
                    to it, you may terminate before departure without a cancellation charge and
                    receive a full refund of payments for the affected package within 14 calendar
                    days. No additional compensation is due solely because of those circumstances.
                  </p>
                  <p>
                    A general concern about travel, where contracted services can still be
                    performed, is not automatically an extraordinary-circumstances cancellation. We
                    assess the official conditions, actual route and ability to perform the
                    contract.
                  </p>
                </PolicySection>
                <PolicySection number="10" title="Refund Method and Calculation">
                  <p>
                    Refunds are issued to the original payment method and in the original payment
                    currency where reasonably possible. We provide a statement showing the booking
                    price, applicable charge, separately disclosed supplier conditions and amount
                    returned. The same cost is never counted twice.
                  </p>
                  <p>
                    Bank, platform and currency-conversion differences outside our control may
                    affect the amount ultimately credited by the recipient&apos;s provider. An
                    undisputed refund will not be withheld solely because another part of the
                    calculation is being discussed.
                  </p>
                </PolicySection>
                <PolicySection number="11" title="No-Show and Unused Services">
                  <p>
                    Failure to arrive, late arrival that prevents a booked service, or voluntary
                    withdrawal after the journey begins is normally treated as 100% cancellation for
                    the affected service. We will still seek reasonable recoveries where possible.
                    If AVIORA fails to provide a contracted service, your rights relating to that
                    failure are not removed by this clause.
                  </p>
                </PolicySection>
              </PolicyGroup>

              <PolicyGroup
                number="03"
                eyebrow="TRAVELER RESPONSIBILITIES"
                title="Documents, Suitability & Support"
              >
                <PolicySection number="12" title="Passports, Entry Rules and Suitability">
                  <p>
                    Travelers remain responsible for passports, visas, transit permissions, health
                    requirements and personal documentation. Tell us before confirmation about
                    mobility, dietary, health, age or accessibility needs that may affect
                    suitability or safe delivery. Entry guidance is general and must be checked
                    against current official rules.
                  </p>
                </PolicySection>
                <PolicySection number="13" title="Suppliers, Insurance and Assistance">
                  <p>
                    Hotels, airlines, rail operators, attractions and some activity providers are
                    independent suppliers. We select and coordinate them with reasonable care and
                    remain responsible for the services we contract to provide, subject to mandatory
                    law and the accepted booking documents.
                  </p>
                  <p>
                    Comprehensive insurance should cover medical care, evacuation, cancellation,
                    interruption, baggage and planned activities. Raise an on-trip problem promptly
                    with the guide or our China team so we have a fair opportunity to assist.
                  </p>
                </PolicySection>
              </PolicyGroup>

              <PolicyGroup
                number="04"
                eyebrow="TRADE & LEGAL"
                title="Contracts, Complaints & Rights"
              >
                <PolicySection number="14" title="Travel Trade Bookings">
                  <p>
                    These consumer-facing terms govern direct private journey bookings. A tour
                    operator, agency or advisor booking under a separately signed travel-trade
                    agreement is governed by that agreement, including net rates, payment deadlines,
                    room release dates, name lists and group reduction terms. The agreement must
                    also identify which party is the package organizer and must not remove any
                    mandatory right held by the traveler.
                  </p>
                </PolicySection>
                <PolicySection number="15" title="Complaints, Law and Mandatory Rights">
                  <p>
                    If an issue is not resolved during travel, send a written summary and supporting
                    documents to {siteConfig.email} as soon as reasonably possible. We first seek a
                    good-faith written resolution.
                  </p>
                  <p>
                    Unless the booking confirmation expressly states otherwise, the contract is
                    governed by the laws of the People&apos;s Republic of China and disputes may be
                    brought before a competent court at the China operating company&apos;s
                    registered location. This does not exclude a consumer protection, refund right,
                    remedy or jurisdiction that applicable mandatory law does not allow the parties
                    to waive.
                  </p>
                </PolicySection>
              </PolicyGroup>
            </div>
          </ContentContainer>
        </section>
      </main>
      <PageClosing
        intent="legal"
        primaryHref={`/contact?subject=${encodeURIComponent("Booking terms question")}`}
      />
      <SiteFooter columns={[{ title: "Explore", items: homeNavItems }]} social={[]} />
    </PageContainer>
  );
}

function PolicySection({
  number,
  title,
  open = false,
  children,
}: {
  number: string;
  title: string;
  open?: boolean;
  children: ReactNode;
}) {
  return (
    <details className={styles.policySection} open={open}>
      <summary>
        <span>{number}</span>
        <strong>{title}</strong>
        <i aria-hidden="true" />
      </summary>
      <div className={styles.policyBody}>{children}</div>
    </details>
  );
}

function PolicyGroup({
  number,
  eyebrow,
  title,
  children,
}: {
  number: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.policyGroup} aria-labelledby={`policy-group-${number}`}>
      <header className={styles.policyGroupHeader}>
        <p>
          {number} / {eyebrow}
        </p>
        <h3 id={`policy-group-${number}`}>{title}</h3>
      </header>
      {children}
    </section>
  );
}

function PolicyList({ children }: { children: ReactNode }) {
  return <ul className={styles.policyList}>{children}</ul>;
}
