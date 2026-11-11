import type { Metadata } from "next";
import white from "@/components/about/white-editorial.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin, ShieldCheck } from "@/components/icons/symbols";

import { AboutNavigation } from "@/components/about/about-navigation";
import { TravelTradeNote } from "@/components/about/travel-trade-note";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { bookingClarity, companyCapabilities, journeyResponsibilities } from "@/content/about";
import { companyIdentity } from "@/content/about/identity";
import { founder } from "@/content/founder";
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
    <main className={`${styles.page} ${white.page}`}>
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
        <AboutNavigation current="/company" />
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Company &amp; Licensing</p>
          <h1>Know who is behind your China journey.</h1>
          <p className={styles.lead}>{companyIdentity.operatorSummary}</p>
          <p className={styles.summary}>
            AVIORA is the name you travel with. The legal company responsible for your booking, the
            agreed service scope and the payment terms are identified in writing before you pay.
          </p>
          <nav className={styles.pageLinks} aria-label="Company page sections">
            <a href="#company-overview-title">What we do</a>
            <a href="#responsibilities">Our responsibilities</a>
            <a href="#registration-heading">Company record</a>
            <a href="#verify-heading">How to verify</a>
            <a href="#booking-heading">Before you pay</a>
          </nav>
        </header>

        <section className={styles.identitySection} aria-labelledby="names-heading">
          <p className={styles.eyebrow}>ONE SERVICE, CLEAR IDENTITIES</p>
          <h2 id="names-heading">How AVIORA, China Prime DMC and the operating company connect.</h2>
          <dl className={styles.identityFacts}>
            <div>
              <dt>Travel brand</dt>
              <dd>
                AVIORA China Travel, also called AVIORA or AVIORA Travel. Founded by{" "}
                {companyIdentity.founderName}, it serves international visitors planning private
                journeys in China.
              </dd>
            </div>
            <div>
              <dt>Travel-trade name</dt>
              <dd>{companyIdentity.tradeRelationship}</dd>
            </div>
            <div>
              <dt>Legal operating company</dt>
              <dd>
                {siteConfig.operator.legalName}
                <br />
                {siteConfig.operator.englishReferenceName}. Its Guangzhou registration date is March
                28, 2018; this is the company registration date.
              </dd>
            </div>
          </dl>
        </section>

        <section className={styles.companyOverview} aria-labelledby="company-overview-title">
          <p className={styles.eyebrow}>COMPANY PROFILE</p>
          <h2 id="company-overview-title">
            Travel design and local coordination, working together.
          </h2>
          <div className={styles.overviewNarrative}>
            <p>
              AVIORA China Travel specializes in private, tailor-made journeys for international
              visitors. We bring itinerary design, hotel planning, private guides, transport and
              local coordination into a connected service, whether you are arranging a first visit,
              a multi-city holiday or a private day within an existing trip.
            </p>
            <p>
              Our approach starts with the way you want to travel. We consider the interests of your
              group alongside the practical realities of a route: distances, station and airport
              transfers, walking requirements, hotel locations, meal preferences and the time needed
              to enjoy each place. A proposal should give you enough detail to understand the
              journey, rather than simply a list of attractions.
            </p>
            <p>
              Our China team connects the requirements discussed during planning with the services
              arranged along your route. The work includes checking service availability,
              coordinating bookings and sharing the practical information needed for arrivals,
              transfers and visits. Any special request becomes part of the service only when
              confirmed in writing.
            </p>
            <p>
              Transparency is part of that service. Your written booking identifies the contracting
              party, itinerary, price, inclusions and applicable conditions before payment. We
              explain the status of requested services and the practical limits of special
              arrangements. Private journeys have no compulsory shopping stops; time for shopping is
              planned only when it is something you want to do.
            </p>
          </div>
          <div className={styles.capabilityList}>
            {companyCapabilities.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

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

        <section className={styles.coordination} aria-labelledby="coordination-title">
          <div>
            <p className={styles.eyebrow}>HOW THE WORK CONNECTS</p>
            <h2 id="coordination-title">One travel brief, from planning to operation.</h2>
          </div>
          <div>
            <p>
              During planning, your interests, preferred pace, room requirements and practical
              concerns become the basis of the proposal. Route design considers the connections
              between cities as well as the experiences within them.
            </p>
            <p>
              Local coordination brings together the agreed hotels, guides, transport and visits.
              The written itinerary defines the scope: services may differ by city, language, travel
              date and supplier availability. Your proposal explains what is included, what remains
              subject to confirmation and what needs a separate arrangement.
            </p>
            <p>
              Before departure, review the arrival instructions and on-trip contact details with the
              team. While you travel, our China team coordinates the agreed services and reviews
              practical options if timing, weather or your needs change.
            </p>
            <p className={styles.languageNote}>
              <strong>Guide languages</strong>
              <br />
              {siteConfig.guideLanguages.join(", ")}. The requested language and availability for
              your route and dates are confirmed in writing.
            </p>
          </div>
        </section>

        <section
          id="responsibilities"
          className={styles.responsibilities}
          aria-labelledby="responsibilities-title"
        >
          <div>
            <p className={styles.eyebrow}>CONNECTED RESPONSIBILITY</p>
            <h2 id="responsibilities-title">Who handles what along your journey.</h2>
            <p className={styles.officeNote}>
              These are the responsibilities that need to stay connected, from the first inquiry to
              local operation. Your booking defines the services included for your trip.
            </p>
          </div>
          <dl className={styles.responsibilityList}>
            {journeyResponsibilities.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>
        <TravelTradeNote id="company-trade-record" />

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
                <dt>Company registered</dt>
                <dd>March 28, 2018</dd>
              </div>
              <div>
                <dt>Unified social credit code</dt>
                <dd>91440101MA5ARE270P</dd>
              </div>
              <div>
                <dt>Travel business</dt>
                <dd>{siteConfig.operator.tourismLicense.shortLabel}</dd>
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

        <section className={styles.verification} aria-labelledby="verify-heading">
          <div>
            <p className={styles.eyebrow}>CHECK THE DETAILS FOR YOURSELF</p>
            <h2 id="verify-heading">A practical way to verify your operator.</h2>
            <p className={styles.officeNote}>
              The Chinese legal name and unified social credit code identify the company. The
              English name above is provided for reference.
            </p>
          </div>
          <ol className={styles.verifySteps}>
            <li>
              <h3>Look up the registration</h3>
              <p>
                Use the official enterprise registry linked above. Search for{" "}
                <span lang="zh-CN">{siteConfig.operator.legalName}</span> or{" "}
                <strong>91440101MA5ARE270P</strong> and compare the company record with the document
                on this page. The registry is in Chinese and may require verification to access.
              </p>
            </li>
            <li>
              <h3>Ask about tourism licensing</h3>
              <p>
                Business registration and travel-agency licensing serve different purposes. Ask our
                team for the travel-agency business permit details so you can review the licensing
                position alongside the registration record. A separate travel-agency permit image
                and permit number are not displayed on this page.
              </p>
              <a
                className={styles.officialLink}
                href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Travel-agency permit verification")}&body=${encodeURIComponent(`Hello AVIORA, please share the travel-agency business permit number, issuing authority and permitted business scope for ${siteConfig.operator.legalName}, together with the permit copy and a way to verify it. Thank you.`)}`}
              >
                Request tourism permit details <ArrowUpRight aria-hidden="true" />
              </a>
            </li>
            <li>
              <h3>Match your booking and payment details</h3>
              <p>
                Check the legal party named in your booking against the payment instructions. If a
                company name or payee is unclear, contact us through the details below before
                transferring funds.
              </p>
            </li>
          </ol>
        </section>

        <section className={styles.bookingSection} aria-labelledby="booking-heading">
          <p className={styles.eyebrow}>CLARITY BEFORE COMMITMENT</p>
          <h2 id="booking-heading">What to review before you pay.</h2>
          <div className={styles.bookingGrid}>
            {bookingClarity.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <Link className={styles.officialLink} href="/terms">
            Read payment, changes and cancellation terms <ArrowUpRight aria-hidden="true" />
          </Link>
        </section>

        <section className={styles.contactSection} aria-labelledby="company-contact">
          <div>
            <p className={styles.eyebrow}>TALK TO THE PEOPLE BEHIND THE BRAND</p>
            <h2 id="company-contact">Questions about the company or your booking?</h2>
            <p className={styles.officeNote}>
              Ask for the company or permit details you need, or discuss your proposed arrangements.
              Enquiries normally receive a personal reply within 24 hours.
            </p>
            <div className={styles.pageLinks}>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              <Link href="/contact">All contact options</Link>
            </div>
          </div>
          <div className={styles.founderNote}>
            <p className={styles.eyebrow}>OUR FOUNDER</p>
            <h3>{founder.name}</h3>
            <p>
              Read the thinking behind AVIORA&apos;s approach to private travel, hospitality and
              discovering China.
            </p>
            <Link className={styles.officialLink} href={founder.path}>
              A letter from Guohui <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
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
