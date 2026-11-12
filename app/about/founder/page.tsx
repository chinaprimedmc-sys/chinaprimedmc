import type { Metadata } from "next";
import white from "@/components/about/white-editorial.module.css";
import Link from "next/link";
import Image from "next/image";

import { AboutNavigation } from "@/components/about/about-navigation";
import { TravelTradeNote } from "@/components/about/travel-trade-note";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { companyIdentity } from "@/content/about/identity";
import { founder } from "@/content/founder";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

import styles from "./founder.module.css";

const description =
  "A message from Guohui Shi, founder of AVIORA China Travel, on why private, tailor-made travel and real hospitality shape every journey in China.";

export const metadata: Metadata = createMetadata({
  title: "Guohui Shi, Founder of AVIORA China Travel",
  description,
  path: founder.path,
  type: "article",
  keywords: [],
  image: founder.photo.src,
  imageWidth: founder.photo.width,
  imageHeight: founder.photo.height,
  imageAlt: founder.photo.alt,
});

export default function FounderPage() {
  const url = new URL(founder.path, siteConfig.url).toString();
  const personId = `${siteConfig.url}/#founder`;

  return (
    <main className={`${styles.page} ${white.page}`}>
      <JsonLd
        id="founder-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About AVIORA", path: "/about" },
          { name: "Founder's story", path: founder.path },
        ])}
      />
      <JsonLd
        id="founder-profile-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${url}#profilepage`,
          url,
          name: "Founder's Story: Guohui Shi",
          description,
          inLanguage: "en-US",
          isPartOf: { "@id": `${siteConfig.url}/#website` },
          publisher: { "@id": `${siteConfig.url}/#organization` },
          mainEntity: {
            "@type": "Person",
            "@id": personId,
            name: founder.name,
            url,
            image: new URL(founder.photo.src, siteConfig.url).toString(),
            subjectOf: {
              "@type": "NewsArticle",
              headline: "MATTA Connect gains traction as B2B platform",
              url: "https://www.ttgasia.com/2026/07/30/matta-connect-gains-traction-as-b2b-platform/",
              publisher: { "@type": "Organization", name: "TTG Asia" },
            },
            jobTitle: founder.jobTitle,
            worksFor: { "@id": `${siteConfig.url}/#organization` },
            description: companyIdentity.founderSummary,
          },
        }}
      />

      <SiteNavigation />

      <div className={styles.routeNavigation}>
        <AboutNavigation current="/about/founder" />
      </div>
      <header className={styles.hero}>
        <div className={styles.heroLayout}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A letter from our founder</p>
            <h1>{founder.name}</h1>
            <p className={styles.byline}>
              {founder.jobTitle}, {founder.organization}
            </p>
            <p className={styles.profileIntro}>{companyIdentity.founderSummary}</p>
          </div>
          <figure className={styles.founderPortrait}>
            <Image
              src={founder.photo.src}
              alt={founder.photo.alt}
              width={founder.photo.width}
              height={founder.photo.height}
              sizes="(max-width: 767px) calc(100vw - 40px), 430px"
              priority
              className={styles.portraitImage}
            />
            <figcaption>{founder.photo.caption}</figcaption>
          </figure>
        </div>
        <nav className={styles.letterNav} aria-label="In this letter">
          <p>In this letter</p>
          <ul>
            {founder.sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <article id="founder-letter" className={styles.letter} aria-label="A letter from Guohui Shi">
        <section className={`${styles.body} ${styles.lead}`} aria-label="Introduction">
          <span aria-hidden="true" />
          <div className={styles.text}>
            {founder.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </section>

        {founder.sections.map((section) => (
          <section
            id={section.id}
            key={section.id}
            className={styles.body}
            aria-labelledby={`${section.id}-title`}
          >
            <h2 id={`${section.id}-title`}>{section.title}</h2>
            <div className={styles.text}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </article>

      <section className={styles.closing} aria-label="Closing">
        <blockquote>{founder.closingLine}</blockquote>
        <p className={styles.signoff}>
          {founder.welcome}
          <strong>{founder.name}</strong>
          <span>
            {founder.jobTitle}, {founder.organization}
          </span>
          <span>{founder.tagline}</span>
        </p>
        <div className={styles.actions}>
          <Link className={styles.button} href="/start-planning?source=founder-story">
            Plan my journey
          </Link>
          <Link className={styles.textLink} href="/about">
            About AVIORA
          </Link>
        </div>
      </section>

      <div className={styles.tradeRecord}>
        <TravelTradeNote id="founder-trade-record" showImage />
      </div>
      <SiteFooter />
    </main>
  );
}
