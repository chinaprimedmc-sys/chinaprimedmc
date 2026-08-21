import {
  ArrowUpRight,
  BellRing,
  Building2,
  Check,
  Mail,
  MessageCircle,
  Route,
  UsersRound,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { homeEditorialImages } from "@/content/home/homepage";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import styles from "./china-dmc.module.css";

export const metadata: Metadata = createMetadata({
  title: "China DMC for Travel Trade Partners | China Prime DMC",
  description:
    "China DMC services for tour operators and travel advisors: tailor-made itineraries, ground handling, guides, transport and local support.",
  path: "/china-dmc",
  image: homeEditorialImages.tradeBuyerMeeting.src,
  imageWidth: homeEditorialImages.tradeBuyerMeeting.width,
  imageHeight: homeEditorialImages.tradeBuyerMeeting.height,
  imageAlt: homeEditorialImages.tradeBuyerMeeting.alt,
  keywords: [
    "China DMC",
    "DMC China",
    "China destination management company",
    "China ground handler",
    "China inbound tour operator",
  ],
});

const capabilities = [
  {
    number: "01",
    icon: Route,
    title: "Tailor-Made Itinerary Design",
    text: "Route logic, realistic pacing and experiences shaped around your market, client profile and commercial brief.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Hotels, Guides & Transport",
    text: "One China team coordinates accommodation, licensed guides, private vehicles, rail, domestic flights and key handovers.",
  },
  {
    number: "03",
    icon: UsersRound,
    title: "Special-Interest Operations",
    text: "Practical planning for families, older travelers, women travelers, Muslim guests, food-led programs and private groups.",
  },
  {
    number: "04",
    icon: BellRing,
    title: "On-Trip Local Response",
    text: "A reachable operations team follows the journey in China and acts when weather, transport or client needs change.",
  },
];

const workingPrinciples = [
  "Clear net quotations and written inclusions",
  "No unapproved substitutions",
  "No compulsory shopping stops",
  "Operational checks before arrival",
  "English communication with one accountable team",
  "Respect for the advisor-client relationship",
];

const process = [
  {
    number: "01",
    title: "Send the Brief",
    text: "Share the market, dates, group profile, budget direction, hotel level and non-negotiables.",
  },
  {
    number: "02",
    title: "Review the Operating Plan",
    text: "We return a route direction, service assumptions and the questions that materially affect delivery or price.",
  },
  {
    number: "03",
    title: "Confirm in Writing",
    text: "Hotels, services, inclusions, payment terms and cancellation conditions are documented before operation.",
  },
  {
    number: "04",
    title: "Operate & Report",
    text: "Our local team manages the journey, responds to changes and keeps the trade partner informed when action is required.",
  },
];

const tradeEmailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "China DMC partnership enquiry",
)}&body=${encodeURIComponent(
  "Hello China Prime DMC team,\\n\\nCompany / market:\\nTravel dates:\\nNumber of travelers:\\nRoute or destinations:\\nHotel level / budget direction:\\nSupport needed from your China DMC partner:\\n",
)}`;

const tradeWhatsappHref = `https://wa.me/447985052302?text=${encodeURIComponent(
  "Hello China Prime DMC, I am contacting you about a travel trade partnership. Our company/market is [company and country], and we need support for [brief].",
)}`;

const tradeNavigation = [
  { label: "Services", href: "/china-dmc#capabilities" },
  { label: "Standards", href: "/china-dmc#standards" },
  { label: "Process", href: "/china-dmc#process" },
  { label: "Trade Evidence", href: "/journal/aviora-ttg-asia-matta-connect-2026" },
];

export default function ChinaDmcPage() {
  return (
    <main className={styles.page}>
      <JsonLd
        id="china-dmc-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "China DMC", path: "/china-dmc" },
        ])}
      />
      <JsonLd
        id="china-dmc-service-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${siteConfig.url}/china-dmc#service`,
          name: "China Destination Management Services",
          serviceType: "China destination management and inbound ground handling",
          url: `${siteConfig.url}/china-dmc`,
          areaServed: { "@type": "Country", name: "China" },
          audience: {
            "@type": "BusinessAudience",
            audienceType: "Tour operators, travel agencies and travel advisors",
          },
          provider: { "@id": `${siteConfig.url}/#organization` },
        }}
      />

      <SiteNavigation
        brand="CHINA PRIME DMC"
        items={tradeNavigation}
        cta={{ label: "Send a Trade Brief", href: tradeEmailHref }}
        mobileCta={{ label: "Send a Trade Brief", href: tradeEmailHref }}
        whatsapp={{ label: "Trade WhatsApp", href: tradeWhatsappHref }}
        showWhatsapp={false}
        tone="light"
      />

      <section className={styles.hero} aria-labelledby="china-dmc-title" data-hero-layout="true">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>CHINA PRIME DMC · FOR THE TRAVEL TRADE</p>
            <h1 id="china-dmc-title">
              <span className={styles.headingLine}>Your China DMC. Your Client</span>
              <span className={styles.headingLine}>Relationship Protected.</span>
            </h1>
            <p className={styles.lead}>
              China Prime DMC designs and operates tailor-made China travel for tour operators and
              advisors. You keep the client relationship; one China-based team handles the
              itinerary, suppliers, handovers and on-trip response.
            </p>
            <div className={styles.actions}>
              <a href={tradeEmailHref} className={styles.primaryAction}>
                Send a Trade Brief <Mail aria-hidden="true" />
              </a>
              <a
                href={tradeWhatsappHref}
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryAction}
              >
                WhatsApp Our China Team <MessageCircle aria-hidden="true" />
              </a>
            </div>
            <p className={styles.heroProof}>
              Licensed China inbound operator · Established 2018 · Clear net quotations · No forced
              shopping
            </p>
          </div>

          <figure className={styles.heroMedia}>
            <OptimizedImage
              src={homeEditorialImages.tradeConsultation.src}
              alt={homeEditorialImages.tradeConsultation.alt}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 58vw"
              frameClassName={styles.heroImageFrame}
              className={styles.heroImage}
            />
            <figcaption>Planning China face-to-face · Kuala Lumpur · 2026</figcaption>
          </figure>
        </div>
      </section>

      <section className={styles.intro} aria-labelledby="dmc-intro-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>LOCAL DELIVERY, PARTNER-LED RELATIONSHIPS</p>
          <div className={styles.introGrid}>
            <h2 id="dmc-intro-title">
              <span className={styles.headingLine}>You Own the Client Relationship.</span>
              <span className={styles.headingLine}>We Own the Delivery in China.</span>
            </h2>
            <div className={styles.introCopy}>
              <p>
                We work behind your brand, not around it. Before arrival, we test routing, reconfirm
                services and flag risks early. During travel, one reachable operations team manages
                every handover and responds when plans change.
              </p>
              <p>
                Compressed routes, unsuitable hotel locations and requests that cannot be guaranteed
                are raised before confirmation, with practical alternatives.
              </p>
            </div>
            <figure className={styles.introPhoto}>
              <OptimizedImage
                src="/home/editorial/travel-trade-booth-singapore.webp"
                alt="The China Prime DMC operating team meeting travel trade partners in Singapore"
                fill
                sizes="(max-width: 767px) 100vw, 24vw"
                frameClassName={styles.introPhotoFrame}
                className={styles.introPhotoImage}
              />
              <figcaption>China operating team · Singapore · 2026</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className={styles.capabilitySection}
        aria-labelledby="capabilities-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>WHAT WE OPERATE</p>
            <h2 id="capabilities-title">
              <span className={styles.headingLine}>Everything on the Ground,</span>
              <span className={styles.headingLine}>Managed by One China Team.</span>
            </h2>
          </div>
          <div className={styles.capabilityGrid}>
            {capabilities.map((item) => {
              const Icon = item.icon;
              return (
                <article className={styles.capability} key={item.number}>
                  <span className={styles.capabilityNumber} aria-hidden="true">
                    {item.number}
                  </span>
                  <span className={styles.capabilityIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="standards" className={styles.proofSection} aria-labelledby="standards-title">
        <div className={styles.container}>
          <div className={styles.proofHeader}>
            <div className={styles.proofCopy}>
              <p className={styles.eyebrow}>THE OPERATING STANDARD</p>
              <h2 id="standards-title">
                <span className={styles.headingLine}>Clear Commitments</span>
                <span className={styles.headingLine}>That Protect Repeat Business.</span>
              </h2>
              <p>
                Written clarity before arrival and accountable local response during travel protect
                both the guest experience and the relationship you built.
              </p>
            </div>
            <figure className={styles.proofImageWrap}>
              <OptimizedImage
                src={homeEditorialImages.tradeBuyerMeeting.src}
                alt={homeEditorialImages.tradeBuyerMeeting.alt}
                fill
                sizes="(max-width: 767px) 100vw, 42vw"
                frameClassName={styles.proofImageFrame}
                className={styles.proofImage}
              />
              <figcaption>Working directly with travel partners · Kuala Lumpur · 2026</figcaption>
            </figure>
          </div>

          <ul className={styles.commitmentGrid}>
            {workingPrinciples.map((item) => (
              <li key={item}>
                <span aria-hidden="true">
                  <Check />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className={styles.proofDisclosure}>
            <p className={styles.legalProof}>
              AVIORA&apos;s inbound services are operated in China by{" "}
              {siteConfig.operator.englishReferenceName}, established {siteConfig.operator.founded}.
            </p>
            <Link className={styles.textLink} href="/journal/aviora-ttg-asia-matta-connect-2026">
              See our documented travel-trade participation <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="process" className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>HOW WE WORK TOGETHER</p>
            <h2 id="process-title">
              <span className={styles.headingLine}>From Trade Brief</span>
              <span className={styles.headingLine}>to Accountable Delivery.</span>
            </h2>
          </div>
          <ol className={styles.processList}>
            {process.map((item) => (
              <li key={item.number}>
                <span className={styles.processNumber}>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="trade-brief" className={styles.finalCta} aria-labelledby="trade-contact-title">
        <OptimizedImage
          src="/home/editorial/travel-trade-team-singapore.webp"
          alt="The China Prime DMC team at an international travel trade event in Singapore"
          fill
          sizes="100vw"
          frameClassName={styles.finalCtaMedia}
          className={styles.finalCtaImage}
        />
        <div className={styles.finalCtaShade} aria-hidden="true" />
        <div className={styles.finalCtaInner}>
          <p className={styles.eyebrow}>YOUR CHINA OPERATING PARTNER</p>
          <h2 id="trade-contact-title">
            <span className={styles.headingLine}>Send the Brief.</span>
            <span className={styles.headingLine}>We Will Make the Next Step Clear.</span>
          </h2>
          <p>
            Send the client profile, travel dates, route, hotel level and budget direction. We will
            respond with the operational questions and a practical next step.
          </p>
          <div className={styles.actions}>
            <a href={tradeEmailHref} className={styles.primaryAction}>
              Send a Trade Brief <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href={tradeWhatsappHref}
              target="_blank"
              rel="noreferrer"
              className={styles.secondaryAction}
            >
              WhatsApp Our China Team
            </a>
          </div>
        </div>
      </section>

      <SiteFooter variant="trade" email={siteConfig.email} />
    </main>
  );
}
