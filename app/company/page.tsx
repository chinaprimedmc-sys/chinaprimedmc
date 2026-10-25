import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, ShieldCheck } from "lucide-react";

import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/lib/seo/json-ld";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { createMetadata } from "@/lib/seo/metadata";

import styles from "./company.module.css";

export const metadata: Metadata = createMetadata({
  title: "AVIORA China Travel | Company, Offices & Registration",
  description:
    "Learn who operates AVIORA China Travel, where our offices are in Beijing, Shanghai and Xi'an, and view the company's business registration record.",
  path: "/company",
});

const offices = siteConfig.operator.officeCities;

export default function CompanyPage() {
  return (
    <main className={styles.page}>
      <SiteNavigation />
      <JsonLd
        id="company-page-schema"
        data={webPageSchema({
          url: `${siteConfig.url}/company`,
          name: "AVIORA China Travel: Company, Offices and Registration",
          description:
            "Company identity and business registration details for AVIORA China Travel, with offices in Beijing, Shanghai and Xi'an and its registered operating company in Guangzhou.",
          about: { "@id": `${siteConfig.url}/#organization` },
        })}
      />
      <JsonLd
        id="company-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Company & Licensing", path: "/company" },
        ])}
      />

      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Company &amp; Licensing</p>
          <h1>Know who is behind your China journey.</h1>
          <p className={styles.lead}>
            AVIORA China Travel, also known as AVIORA Travel, is the guest-facing travel brand of
            China Prime DMC. Both operate through {siteConfig.operator.legalName} (
            {siteConfig.operator.englishReferenceName}), the China-registered operating company.
          </p>
          <p className={styles.summary}>
            For travelers looking for China travel, AVIORA plans private, tailor-made journeys,
            private day tours, and guide and driver services. Our offices are in Beijing, Shanghai
            and Xi&apos;an. The operating company is registered in Guangzhou, Guangdong.
          </p>
          <p className={styles.summary}>
            {siteConfig.entity.guestBrandRelationship} Booking scope, payment timing and the
            contracting party are set out in the written proposal and booking terms before payment.
          </p>
        </header>

        <section className={styles.officeSection} aria-labelledby="office-heading">
          <div className={styles.sectionHeading}>
            <MapPin aria-hidden="true" />
            <div>
              <p className={styles.eyebrow}>Local Presence</p>
              <h2 id="office-heading">Offices in three key China cities.</h2>
            </div>
          </div>
          <ul className={styles.officeList}>
            {offices.map((city) => (
              <li key={city}>
                <span>{city}</span>
                <span>AVIORA office</span>
              </li>
            ))}
          </ul>
          <p className={styles.officeNote}>
            Our offices in Beijing, Shanghai and Xi&apos;an support local planning and coordination.
            The registered address of the operating company remains in Guangzhou; specific services
            and arrangements are confirmed in each written proposal.
          </p>
        </section>

        <section className={styles.registration} aria-labelledby="registration-heading">
          <div className={styles.registrationCopy}>
            <div className={styles.sectionHeading}>
              <Building2 aria-hidden="true" />
              <div>
                <p className={styles.eyebrow}>Registered Operating Company</p>
                <h2 id="registration-heading">A named company behind the brand.</h2>
              </div>
            </div>
            <dl className={styles.companyFacts}>
              <div>
                <dt>Legal name</dt>
                <dd>
                  {siteConfig.operator.legalName}
                  <span>{siteConfig.operator.englishReferenceName}</span>
                </dd>
              </div>
              <div>
                <dt>Registered in</dt>
                <dd>Guangzhou, Guangdong, China</dd>
              </div>
              <div>
                <dt>Established</dt>
                <dd>March 28, 2018</dd>
              </div>
              <div>
                <dt>Unified social credit code</dt>
                <dd>91440101MA5ARE270P</dd>
              </div>
              <div>
                <dt>Registered address</dt>
                <dd>{siteConfig.operator.address.full}</dd>
              </div>
            </dl>
            <p className={styles.scopeNote}>
              This business license documents the company&apos;s registration. It is not presented
              as a substitute for the separate travel-agency business permit or the written scope of
              services for an individual booking.
            </p>
            <a
              className={styles.officialLink}
              href="https://www.gsxt.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              Search China&apos;s National Enterprise Credit Information Publicity System
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <figure className={styles.document}>
            <a
              href="/company/business-license.jpg"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the business license image at full size"
            >
              <Image
                src="/company/business-license.jpg"
                alt="Business license for 游友汇（广州）国际旅行社有限公司, showing its unified social credit code, Guangzhou registration and registered address"
                width={3270}
                height={2400}
                sizes="(max-width: 800px) 100vw, 48vw"
              />
            </a>
            <figcaption>
              <ShieldCheck aria-hidden="true" />
              Company registration document · Select to view full size
            </figcaption>
          </figure>
        </section>

        <section className={styles.nextStep} aria-label="Explore AVIORA services">
          <p>Planning a trip to China?</p>
          <div>
            <Link href="/tours">
              Explore private China journeys <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/about">
              How AVIORA works <ArrowUpRight aria-hidden="true" />
            </Link>
            <Link href="/editorial-policy">
              Editorial &amp; verification policy <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
