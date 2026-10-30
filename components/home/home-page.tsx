/**
 * 本模块职责：首页——一句话、一个动作、一路走到询盘。
 * 输入：primary CTA 链接（来自站点设置）。
 * 输出：首屏、证据条、品牌宣言、找行程、精选行程、评价、目的地、流程、文章、FAQ、询盘。
 * 不负责：行程价格与天数（读取 catalog）、评价正文（读取 traveler-reviews）、结构化数据（在路由层）。
 * 关键规则：不展示任何无法核实的奖项、媒体或人物；没有真人资料时不放头像。
 */

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/cta/tracked-link";
import { SiteFooter } from "@/components/footer/site-footer";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { WhatsAppIcon } from "@/components/icons";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { homeFaqs } from "@/content/home/redesign";
import { getPublicTravelerReviews } from "@/content/home/traveler-reviews";
import { journeyCatalog } from "@/content/tours/catalog";
import { getJourneyHeadline, getJourneyRouteLabel, placeGlossary } from "@/content/tours/card-copy";
import { journeyPhotos, journeysCopy } from "@/content/tours/journeys-curation";
import { excerpt } from "@/lib/text/excerpt";

import { HomeSentence } from "./home-sentence";
import styles from "./home.module.css";

const featuredSlugs = [
  "first-china-beautifully-paced",
  "chengdu-chongqing-zhangjiajie-private-11-day-tour",
  "luxury-yunnan-private-tour",
] as const;

const destinations = [
  {
    name: "Beijing",
    href: "/destinations/beijing",
    image: "/home/beijing-forbidden-city-1400.webp",
    alt: "The Forbidden City in Beijing seen from above",
  },
  {
    name: "Xi'an",
    href: "/destinations/xian",
    image: "/home/xian-terracotta-army.webp",
    alt: "Ranks of Terracotta Warriors in an excavation pit near Xi'an",
  },
  {
    name: "Chengdu",
    href: "/destinations/chengdu",
    image: "/home/chengdu-panda.webp",
    alt: "A giant panda resting in a Chengdu sanctuary",
  },
  {
    name: "Shanghai",
    href: "/destinations/shanghai",
    image: "/home/shanghai-pudong-skyline.webp",
    alt: "Shanghai's Pudong skyline across the Huangpu River",
  },
] as const;

const moreDestinations = [
  ["Chongqing", "/destinations/chongqing"],
  ["Zhangjiajie", "/destinations/zhangjiajie"],
  ["Jiuzhaigou", "/destinations/jiuzhaigou"],
  ["Leshan", "/destinations/leshan"],
] as const;

const whatsapp = "https://wa.me/8618027438191";

export function HomePage({ planningHref }: { planningHref: string }) {
  const reviews = getPublicTravelerReviews();
  const featuredReview =
    reviews.find((review) => review.language === "en" && review.id === 3) ??
    reviews.find((review) => review.language === "en");
  const since = new Date(siteConfig.operator.founded).getFullYear();
  const featured = featuredSlugs
    .map((slug) => journeyCatalog.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const [lead, ...rest] = featured;

  return (
    <main className={styles.page}>
      <SiteNavigation />

      <section className={styles.hero} aria-labelledby="home-title" data-home-hero>
        <picture className={styles.heroMedia}>
          <source
            media="(min-width: 768px)"
            srcSet="/home/shanghai-blue-hour-desktop-hero-1600.avif 1600w, /home/shanghai-blue-hour-desktop-hero-1920.avif 1920w, /home/shanghai-blue-hour-desktop-hero.avif 2400w"
            sizes="100vw"
            type="image/avif"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/home/shanghai-blue-hour-desktop-hero-1280.webp 1280w, /home/shanghai-blue-hour-desktop-hero-1920.webp 1920w"
            sizes="100vw"
            type="image/webp"
          />
          <source
            srcSet="/home/shanghai-blue-hour-mobile-hero-480.avif 480w, /home/shanghai-blue-hour-mobile-hero-768.avif 768w"
            sizes="100vw"
            type="image/avif"
          />
          <img
            src="/home/shanghai-blue-hour-mobile-hero-768.webp"
            srcSet="/home/shanghai-blue-hour-mobile-hero-414.webp 414w, /home/shanghai-blue-hour-mobile-hero-768.webp 768w"
            sizes="100vw"
            alt="Shanghai's Lujiazui skyline and the Oriental Pearl Tower at blue hour"
            width="768"
            height="1662"
            decoding="async"
            fetchPriority="high"
          />
        </picture>
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroBody}>
          <p className={styles.eyebrow}>Designed and operated in China</p>
          <h1 id="home-title">
            Private China tours, <em>designed and run by people who live here.</em>
          </h1>
          <p className={styles.heroSub}>
            Your own guide and driver, a pace that suits you, and every detail confirmed in writing
            before you commit.
          </p>
          <div className={styles.heroActions}>
            <TrackedLink
              href={planningHref}
              className={styles.button}
              trackingLabel="Plan my journey"
              trackingPlacement="homepage-hero"
            >
              Plan my journey
            </TrackedLink>
            <Link className={styles.textLinkLight} href="/tours">
              Browse the journeys <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ul className={styles.evidence} aria-label="Why travelers trust AVIORA">
        <li>
          <strong>Since {since}</strong>
          <span>Licensed inbound operator in China</span>
        </li>
        <li>
          <strong>{reviews.length} reviews</strong>
          <span>From travelers after they came home</span>
        </li>
        <li>
          <strong>Within a day</strong>
          <span>A specialist replies on WhatsApp</span>
        </li>
        <li>
          <strong>No forced shopping</strong>
          <span>Stated in every proposal</span>
        </li>
      </ul>

      <section className={styles.statement} aria-label="About AVIORA">
        <p className={styles.definition}>{journeysCopy.definition}</p>
        <p className={styles.big}>
          We design, run and look after every journey ourselves, from the first message to the last
          transfer. <em>One team in China</em> that plans the route, checks every detail and picks
          up when you call.
        </p>
      </section>

      <section className={styles.begin} aria-labelledby="begin-title">
        <p className={styles.kicker} id="begin-title">
          Begin here
        </p>
        <HomeSentence />
      </section>

      {lead && (
        <section className={styles.featured} aria-labelledby="featured-title">
          <header className={styles.head}>
            <h2 id="featured-title">Where to begin.</h2>
            <Link className={styles.textLink} href="/tours">
              See all {journeyCatalog.length} journeys
            </Link>
          </header>
          <div className={styles.featuredGrid}>
            <Link href={lead.href} className={`${styles.card} ${styles.cardLead}`}>
              <div className={styles.cardPhoto}>
                <Image
                  src={journeyPhotos[lead.slug].src}
                  alt={journeyPhotos[lead.slug].alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
              </div>
              <p className={styles.kicker}>
                {getJourneyRouteLabel(lead)} · {lead.durationLabel.replace(" / ", " · ")}
              </p>
              <h3>{getJourneyHeadline(lead)}</h3>
              <p className={styles.cardText}>{lead.summary}</p>
              <span className={styles.textLink}>View the journey</span>
            </Link>
            {rest.map((item) => (
              <Link href={item.href} className={styles.card} key={item.slug}>
                <div className={styles.cardPhoto}>
                  <Image
                    src={journeyPhotos[item.slug].src}
                    alt={journeyPhotos[item.slug].alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 32vw"
                    style={{ objectPosition: journeyPhotos[item.slug].position ?? "center" }}
                  />
                </div>
                <p className={styles.kicker}>
                  {getJourneyRouteLabel(item)} · {item.durationLabel.replace(" / ", " · ")}
                </p>
                <h3>{getJourneyHeadline(item)}</h3>
                <span className={styles.textLink}>View the journey</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {featuredReview && (
        <section className={styles.quote} aria-label="A traveler's words">
          <blockquote>“{excerpt(featuredReview.paragraphs[0], 330)}”</blockquote>
          <p className={styles.attribution}>
            {featuredReview.author}, {featuredReview.location}
          </p>
          <Link className={styles.textLink} href="/reviews">
            Read all {reviews.length} reviews
          </Link>
        </section>
      )}

      <section className={styles.places} aria-labelledby="places-title">
        <header className={styles.head}>
          <h2 id="places-title">Four places most journeys begin.</h2>
          <Link className={styles.textLink} href="/destinations">
            All destinations
          </Link>
        </header>
        <ul className={styles.placeGrid}>
          {destinations.map((place) => (
            <li key={place.name}>
              <Link href={place.href}>
                <div className={styles.placePhoto}>
                  <Image
                    src={place.image}
                    alt={place.alt}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                  />
                </div>
                <h3>{place.name}</h3>
                <p>{placeGlossary[place.name] ?? ""}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className={styles.moreLine}>
          Also:{" "}
          {moreDestinations.map(([name, href], index) => (
            <span key={name}>
              <Link href={href}>{name}</Link>
              {index < moreDestinations.length - 1 ? " · " : ""}
            </span>
          ))}
        </p>
      </section>

      <section className={styles.steps} aria-labelledby="steps-title">
        <header className={styles.head}>
          <h2 id="steps-title">{journeysCopy.stepsTitle}</h2>
        </header>
        <ol>
          {journeysCopy.steps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">{["i", "ii", "iii", "iv"][index]}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.operator} aria-labelledby="operator-title">
        <div>
          <p className={styles.kicker}>Who operates your journey</p>
          <h2 id="operator-title">A named company, with offices in three Chinese cities.</h2>
        </div>
        <div>
          <p>
            AVIORA journeys are designed and operated through{" "}
            {siteConfig.operator.englishReferenceName}, registered in {siteConfig.operator.locality}{" "}
            and {siteConfig.operator.tourismLicense.statement}. We have offices in{" "}
            {siteConfig.operator.officeCities.join(", ")}.
          </p>
          <Link className={styles.textLink} href="/company">
            Company, offices and registration
          </Link>
        </div>
      </section>

      <section className={styles.guides} aria-labelledby="guides-title">
        <header className={styles.head}>
          <h2 id="guides-title">{journeysCopy.guidesTitle}</h2>
          <Link className={styles.textLink} href="/journal">
            Read the journal
          </Link>
        </header>
        <div className={styles.guideGrid}>
          {journeysCopy.guides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              <span className={styles.kicker}>{guide.kicker}</span>
              <h3>{guide.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <h2 id="faq-title">Questions before you go</h2>
        <div>
          {homeFaqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.closing} id="start-planning" aria-labelledby="closing-title">
        <div className={styles.closingText}>
          <p className={styles.eyebrowLight}>Plan my journey</p>
          <h2 id="closing-title">{journeysCopy.closingTitle}</h2>
          <p>
            Share your first name and WhatsApp number. A specialist in China replies, normally
            within a day. No payment, no obligation.
          </p>
          <a className={styles.whatsappLink} href={whatsapp}>
            <WhatsAppIcon aria-hidden="true" /> Prefer WhatsApp? Message our team
          </a>
        </div>
        <div className={styles.formPanel}>
          <InquiryForm placement="homepage-quick-brief" />
        </div>
      </section>

      <SiteFooter />

      <div className={styles.mobileBar} aria-label="Plan my journey">
        <Link href="/start-planning?source=homepage-mobile">Plan my journey</Link>
        <a href={whatsapp} aria-label="WhatsApp our team">
          <WhatsAppIcon aria-hidden="true" />
        </a>
      </div>
    </main>
  );
}
