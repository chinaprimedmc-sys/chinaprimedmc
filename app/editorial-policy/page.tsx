import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

import styles from "./editorial-policy.module.css";

export const metadata: Metadata = createMetadata({
  title: "Editorial & Verification Policy | AVIORA China Travel",
  description:
    "How AVIORA China Travel creates, checks, updates and corrects its China travel planning guides and published service information.",
  path: "/editorial-policy",
});

const standards = [
  {
    title: "Who publishes this guidance",
    body: "The AVIORA China Travel Team publishes the Journal and product guidance. It is part of the guest-facing AVIORA brand and operates through the Guangzhou-registered legal operator named on our Company page.",
  },
  {
    title: "What is first-party guidance",
    body: "Route pace, hotel-fit reasoning, private-service design, price basis and the way AVIORA coordinates confirmed services are our own operational judgment. We label this as AVIORA guidance rather than presenting it as an independent rule.",
  },
  {
    title: "What requires an outside source",
    body: "For entry, visa, railway, airport, attraction-ticket, health, accessibility, weather and seasonal rules, we prioritize the responsible government body, operator or attraction. A linked source remains the authority for that rule.",
  },
  {
    title: "What changes at booking",
    body: "Published routes and prices explain a planning starting point. Hotels, room categories, guides, vehicles, rail, flights, tickets, inclusions and the final total are confirmed only in a date-specific written proposal, booking confirmation and contract.",
  },
];

export default function EditorialPolicyPage() {
  const policyUrl = new URL("/editorial-policy", siteConfig.url).toString();

  return (
    <main className={styles.page}>
      <SiteNavigation />
      <JsonLd
        id="editorial-policy-webpage-schema"
        data={webPageSchema({
          url: policyUrl,
          name: "AVIORA China Travel Editorial and Verification Policy",
          description:
            "The editorial, source-selection, review and correction policy for AVIORA China Travel's published planning guidance.",
          about: { "@id": `${siteConfig.url}/#organization` },
          mainEntity: {
            "@type": "Organization",
            "@id": `${policyUrl}#editorial-team`,
            name: "AVIORA China Travel Team",
            parentOrganization: { "@id": `${siteConfig.url}/#organization` },
          },
        })}
      />
      <JsonLd
        id="editorial-team-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${policyUrl}#editorial-team`,
          name: "AVIORA China Travel Team",
          url: policyUrl,
          parentOrganization: { "@id": `${siteConfig.url}/#organization` },
          description:
            "The China-based travel planning and operations team responsible for AVIORA's published travel guidance and service information.",
        }}
      />
      <JsonLd
        id="editorial-policy-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Editorial & Verification Policy", path: "/editorial-policy" },
        ])}
      />

      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Editorial &amp; Verification Policy</p>
          <h1>Useful guidance should show where it comes from.</h1>
          <p>
            AVIORA publishes China travel guidance to help travelers make practical decisions. We
            distinguish our own China-based planning judgment from rules controlled by governments,
            carriers, attractions and suppliers.
          </p>
          <dl className={styles.meta}>
            <div>
              <dt>Publisher</dt>
              <dd>AVIORA China Travel Team</dd>
            </div>
            <div>
              <dt>Last reviewed</dt>
              <dd>October 9, 2026</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>English-language public guidance</dd>
            </div>
          </dl>
        </header>

        <section className={styles.standards} aria-labelledby="standards-title">
          <p className={styles.eyebrow}>Our standard</p>
          <h2 id="standards-title">How we separate planning advice from fact.</h2>
          <div className={styles.standardGrid}>
            {standards.map((standard, index) => (
              <article key={standard.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{standard.title}</h3>
                <p>{standard.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.reviewCycle} aria-labelledby="review-cycle-title">
          <div>
            <p className={styles.eyebrow}>Review cycle</p>
            <h2 id="review-cycle-title">We review changeable information first.</h2>
          </div>
          <div>
            <p>
              Visa and entry, payments, rail, airport, ticketing, weather, medical and accessibility
              guidance is reviewed at least quarterly and sooner when a material source changes.
              Every guide carries its publication or source-check date. We update the page and its
              structured data when the underlying guidance changes.
            </p>
            <p>
              Product pages are reviewed when AVIORA changes the published route design, price basis
              or stated inclusion. They do not claim live supplier availability.
            </p>
          </div>
        </section>

        <section className={styles.reviewPolicy} aria-labelledby="guest-feedback-title">
          <p className={styles.eyebrow}>Guest feedback</p>
          <h2 id="guest-feedback-title">Published feedback has a clear publication rule.</h2>
          <p>{siteConfig.entity.reviewPolicy}</p>
          <Link href="/reviews">Read traveler feedback</Link>
        </section>

        <section className={styles.correction} aria-labelledby="corrections-title">
          <p className={styles.eyebrow}>Corrections</p>
          <h2 id="corrections-title">Spot something that needs attention?</h2>
          <p>
            Send the page URL, the statement in question and, where possible, the primary source to
            <a href={`mailto:${siteConfig.entity.correctionEmail}`}>
              {" "}
              {siteConfig.entity.correctionEmail}
            </a>
            . We review factual correction requests and update confirmed errors with the relevant
            review date.
          </p>
          <div className={styles.links}>
            <Link href="/company">Company and licensing</Link>
            <Link href="/terms">Booking terms</Link>
            <Link href="/contact">Contact AVIORA</Link>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
