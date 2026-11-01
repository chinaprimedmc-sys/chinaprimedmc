/**
 * 本模块职责：首页——一句话、一个动作、一路走到询盘。
 * 输入：primary CTA 链接（来自站点设置）。
 * 输出：首屏、证据条、品牌主张、找行程、精选行程、评价、目的地、流程、运营方、文章、FAQ、询盘。
 * 不负责：行程价格与天数（读取 catalog）、评价正文（读取 traveler-reviews）、结构化数据（在路由层）。
 * 关键规则：不展示任何无法核实的奖项、媒体或人物；评价引文必须是原文中的真实句子。
 */

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/cta/tracked-link";
import { SiteFooter } from "@/components/footer/site-footer";
import { HubSpotForm } from "@/components/forms/hubspot-form";
import { WhatsAppIcon } from "@/components/icons";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { homeFaqs } from "@/content/home/redesign";
import { serviceAchievements } from "@/content/home/service-achievements";
import { getPublicTravelerReviews } from "@/content/home/traveler-reviews";
import { journeyCatalog } from "@/content/tours/catalog";
import {
  getJourneyCardDescription,
  getJourneyHeadline,
  getJourneyRouteLabel,
  placeGlossary,
} from "@/content/tours/card-copy";
import { journeyPhotos, journeysCopy } from "@/content/tours/journeys-curation";
import { excerpt } from "@/lib/text/excerpt";

import { HomeSentence } from "./home-sentence";
import styles from "./home.module.css";

const featuredSlugs = [
  "beijing-xian-shanghai-private-9-day-tour",
  "chengdu-chongqing-zhangjiajie-private-11-day-tour",
  "luxury-yunnan-private-tour",
] as const;

const waysToTravel = [
  {
    label: "Tailor-made",
    title: "Your China, designed for you.",
    body: "Tell us what you love. We build the route, the hotels and the pace, from the great sights to the China most visitors never see.",
    cta: "Design my trip",
    href: "/tailor-made-china-tours",
    image: "/tours/luxury-yunnan-private-tour/erhai-landscape.jpg",
    alt: "Erhai Lake under a bright blue sky in Dali, Yunnan",
  },
  {
    label: "Fixed itineraries",
    title: "Short on time? It is already planned.",
    body: "Choose a route we have already refined. Hotels, guides and transfers are set, so there is nothing left to work out.",
    cta: "See ready routes",
    href: "/fixed-itinerary-china-tours",
    image: "/tours/first-china-beautifully-paced/beijing-temple-of-heaven-reflection.webp",
    alt: "The Temple of Heaven reflected in still water in Beijing",
  },
  {
    label: "Private day tours",
    title: "One day, handled properly.",
    body: "A private guide takes care of the tickets, the queues and the language, so you simply enjoy the Great Wall, the Terracotta Army or the pandas.",
    cta: "Plan a day",
    href: "/private-china-day-tours",
    image: "/tours/mutianyu-private-day-tour/01-mutianyu-great-wall-autumn-panorama.webp",
    alt: "The Mutianyu section of the Great Wall in autumn",
  },
  {
    label: "Guide and driver",
    title: "Booked it yourself? Add a local.",
    body: "Already have your flights and hotels? Bring in a guide who speaks your language and a driver who knows the road.",
    cta: "See the service",
    href: "/private-guide-and-driver-china",
    image: "/tours/private-chengdu-panda-day-tour/02-chengdu-peoples-park-teahouse.webp",
    alt: "A teahouse courtyard in Chengdu's People's Park",
  },
] as const;

const services = [
  {
    title: "Tailor-made private journeys",
    body: (
      <>
        Whether you want to explore one destination in depth or travel across China, we design your
        itinerary around your <strong>interests, travel dates and preferred pace</strong>. Every
        journey is <strong>planned exclusively for your party</strong>, with the flexibility to make
        the most of your time in China.
      </>
    ),
  },
  {
    title: "Private guides and drivers",
    body: (
      <>
        Explore with a <strong>local guide in your language</strong>, in English, French, German,
        Spanish, Russian, Italian, Japanese, Chinese or Thai, and a{" "}
        <strong>dedicated private driver</strong>. Your sightseeing arrangements and ground
        transportation are organized around your party, with{" "}
        <strong>private airport and train station transfers</strong> to make getting around easier.
      </>
    ),
  },
  {
    title: "Hotels, transport and tickets",
    body: (
      <>
        We arrange <strong>hotel stays, domestic flights and train tickets</strong>, as well as
        admission tickets for the sights and experiences on your itinerary. All arrangements and
        inclusions are <strong>clearly outlined before you confirm</strong> your trip. International
        flights are not included.
      </>
    ),
  },
  {
    title: "Day tours and local experiences",
    body: (
      <>
        Discover iconic sights such as the <strong>Great Wall</strong>, the{" "}
        <strong>Terracotta Army</strong> and Chengdu&apos;s <strong>giant pandas</strong>. Go beyond
        the usual sightseeing with experiences that bring you closer to local life, from regional
        cooking and tea to traditional crafts.
      </>
    ),
  },
  {
    title: "Travel planned around your needs",
    body: (
      <>
        From family travel and a more relaxed pace for older travelers to{" "}
        <strong>halal dining options</strong> and <strong>time for daily prayers</strong>, we take
        your group&apos;s needs into account from the very beginning. These arrangements are{" "}
        <strong>built into your itinerary</strong>, not added as an afterthought.
      </>
    ),
  },
  {
    title: "Support throughout your trip",
    body: (
      <>
        Our <strong>China-based team</strong> is available on{" "}
        <strong>WhatsApp throughout your journey</strong>. From flight delays and transfer changes
        to unexpected adjustments along the way, we&apos;re here to help coordinate things and keep
        your trip on track.
      </>
    ),
  },
] as const;

const promises = [
  {
    title: "One team, start to finish",
    body: "The people who design your route are the people who answer the phone when a flight changes.",
  },
  {
    title: "Nothing sold on the side",
    body: "No compulsory shopping stops and no commission detours. Anything optional is listed separately, and it is your call.",
  },
  {
    title: "Every detail in writing",
    body: "Hotels, transport, inclusions, exclusions and price are set out in your proposal before you pay.",
  },
] as const;

const steps = [
  {
    title: "Tell us about your trip",
    body: "Your dates, who is traveling, the pace you like and anything we should plan around. A few lines on WhatsApp is enough.",
  },
  {
    title: "Receive a private proposal",
    body: "A route built for your party, with hotels, transport and price laid out. Never a seat on a fixed departure.",
  },
  {
    title: "Adjust until it is right",
    body: "Change the days, the hotels or the pace as often as you need. Nothing is booked until you confirm in writing.",
  },
  {
    title: "Travel with one local team",
    body: "Your guide, your driver and the China team behind them are briefed on your plan and within reach throughout.",
  },
] as const;

const destinations = [
  {
    name: "Beijing",
    href: "/destinations/beijing",
    image: "/tours/beijing-unhurried/forbidden-city.webp",
    alt: "The Forbidden City in Beijing seen from above in autumn light",
    position: "center 40%",
  },
  {
    name: "Xi'an",
    href: "/destinations/xian",
    image: "/tours/xian-beijing-private-journey/day-01.webp",
    alt: "Xi'an's Bell Tower against a pink evening sky",
    position: "center",
  },
  {
    name: "Chengdu",
    href: "/destinations/chengdu",
    image: "/tours/chengdu-pandas/chengdu-hero-panda.webp",
    alt: "Giant pandas eating bamboo at a Chengdu sanctuary",
    position: "center",
  },
  {
    name: "Shanghai",
    href: "/destinations/shanghai",
    image: "/tours/first-china-beautifully-paced/shanghai-huangpu-sunset.webp",
    alt: "Shanghai's skyline glowing at sunset above the Huangpu River",
    position: "center 45%",
  },
] as const;

const moreDestinations = [
  ["Chongqing", "/destinations/chongqing"],
  ["Zhangjiajie", "/destinations/zhangjiajie"],
  ["Jiuzhaigou", "/destinations/jiuzhaigou"],
  ["Leshan", "/destinations/leshan"],
] as const;

const guides = [
  {
    kicker: "Planning",
    title: "What a private China tour costs in 2026",
    note: "What drives the price, and what a quotation should list.",
    href: "/journal/private-china-tour-cost-2026",
  },
  {
    kicker: "Entry",
    title: "China visa requirements for US citizens",
    note: "The current entry rules, with the official sources behind them.",
    href: "/journal/china-visa-requirements-us-citizens-2026",
  },
  {
    kicker: "Timing",
    title: "The best time to visit China",
    note: "Which season suits which region, and when the crowds arrive.",
    href: "/journal/best-time-to-visit-china",
  },
] as const;

const whatsapp = "https://wa.me/8618027438191";
/** 首页大图卡片的照片覆盖：雪山照片偏曝光，首页改用更清晰的洱海。 */
const tilePhotoOverrides: Record<string, { src: string; alt: string; position?: string }> = {
  "luxury-yunnan-private-tour": {
    src: "/tours/luxury-yunnan-private-tour/erhai-landscape.jpg",
    alt: "Erhai Lake under a bright blue sky in Dali, Yunnan",
    position: "center 55%",
  },
};
/** 评价中的原句，用于大字引文；若原文被改动则退回到自动摘录。 */
const quotedSentence =
  "The value wasn't simply in the hotels, although the hotels were excellent. It was in all the friction we didn't have to deal with.";

const capitalise = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export function HomePage({ planningHref }: { planningHref: string }) {
  const reviews = getPublicTravelerReviews();
  const quoted =
    reviews.find((review) => review.paragraphs.join(" ").includes(quotedSentence)) ?? null;
  const fallback = reviews.find((review) => review.language === "en") ?? reviews[0];
  const quoteReview = quoted ?? fallback;
  const quoteText = quoted ? quotedSentence : excerpt(fallback.paragraphs[0], 220);
  const since = new Date(siteConfig.operator.founded).getFullYear();
  const travelers = serviceAchievements.find((item) => item.id === "guests-hosted");
  const countries = serviceAchievements.find((item) => item.id === "countries-served");
  const featured = featuredSlugs
    .map((slug) => journeyCatalog.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

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
          <p className={styles.eyebrow}>Private China journeys · Est. {since}</p>
          <h1 id="home-title">
            A more personal way to <em>experience China.</em>
          </h1>
          <p className={styles.heroSub}>
            Every journey begins with what matters to you. Your interests, your pace, the places you
            want to discover — all come together in a thoughtfully planned itinerary, with your own
            knowledgeable local guide and private driver.
          </p>
          <ul className={styles.heroTags}>
            <li>Private guide</li>
            <li>Private driver</li>
            <li>No shopping stops</li>
          </ul>
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
              See the journeys <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ul className={styles.evidence} aria-label="Why travelers trust AVIORA">
        <li>
          <strong>Since {since}</strong>
          <span>A licensed inbound operator, based in Guangzhou</span>
        </li>
        <li>
          <strong>{reviews.length} reviews</strong>
          <span>Written by travelers after they came home</span>
        </li>
        <li>
          <strong>{travelers?.display ?? "12,000+"} travelers</strong>
          <span>From more than {countries?.display.replace("+", "") ?? "30"} countries</span>
        </li>
        <li>
          <strong>Within a day</strong>
          <span>A China-based specialist replies on WhatsApp</span>
        </li>
      </ul>

      <section className={styles.ways} aria-labelledby="ways-title">
        <p className={styles.kicker}>Four ways to travel</p>
        <h2 id="ways-title" className={styles.big}>
          However you like to plan, <em>China is taken care of.</em>
        </h2>
        <ul className={styles.wayGrid}>
          {waysToTravel.map((way, index) => (
            <li key={way.title}>
              <span className={styles.wayIndex} aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Link href={way.href}>
                <div className={styles.wayPhoto}>
                  <span className={styles.wayLabel}>{way.label}</span>
                  <Image src={way.image} alt={way.alt} fill sizes="(max-width: 767px) 50vw, 25vw" />
                </div>
                <h3>{way.title}</h3>
                <p>{way.body}</p>
                <span className={styles.tileLink}>
                  {way.cta} <ArrowRight size={14} aria-hidden="true" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className={styles.servicesIntro}>
          <p className={styles.kicker}>What we do</p>
          <h2 id="services-title" className={styles.big}>
            From the first conversation to your journey home,{" "}
            <em>one team is there every step of the way.</em>
          </h2>
        </div>
        <div className={styles.serviceList}>
          {services.map((service, index) => (
            <details key={service.title} name="services" open={index === 0}>
              <summary>
                <span className={styles.serviceNumber} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <span className={styles.serviceIcon} aria-hidden="true" />
              </summary>
              <p>{service.body}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <p className={styles.kicker}>Why private</p>
        <h2 id="manifesto-title" className={styles.big}>
          Most trips to China go wrong in the gaps: the transfer nobody met, the ticket nobody
          booked, the hour lost between two cities. <em>We plan the gaps out.</em>
        </h2>
        <ul className={styles.promises}>
          {promises.map((promise) => (
            <li key={promise.title}>
              <h3>{promise.title}</h3>
              <p>{promise.body}</p>
            </li>
          ))}
        </ul>
        <p className={styles.definition}>{journeysCopy.definition}</p>
      </section>

      <section className={styles.begin} aria-labelledby="begin-title">
        <div className={styles.beginInner}>
          <p className={styles.kicker} id="begin-title">
            Not sure where to start?
          </p>
          <HomeSentence />
        </div>
      </section>

      <section className={styles.featured} aria-labelledby="featured-title">
        <header className={styles.head}>
          <div>
            <h2 id="featured-title">Three ways to see China.</h2>
            <p className={styles.headNote}>
              Each is a starting point. Change the days, the pace or the hotels and we rework the
              whole route around you.
            </p>
          </div>
          <Link className={styles.textLink} href="/tours">
            All {journeyCatalog.length} journeys
          </Link>
        </header>
        <div className={styles.featuredGrid}>
          {featured.map((item, index) => {
            const photo = tilePhotoOverrides[item.slug] ?? journeyPhotos[item.slug];
            return (
              <Link
                href={item.href}
                className={`${styles.tile} ${index === 0 ? styles.tileLead : ""}`}
                key={item.slug}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 900px) 100vw, 44vw"
                      : "(max-width: 900px) 100vw, 28vw"
                  }
                  style={{ objectPosition: photo.position ?? "center" }}
                />
                <span className={styles.tileShade} aria-hidden="true" />
                <span className={styles.tileText}>
                  <span className={styles.tileKicker}>
                    {getJourneyRouteLabel(item)} · {item.durationLabel.replace(" / ", " · ")}
                  </span>
                  <strong>{getJourneyHeadline(item)}</strong>
                  <span className={styles.tileNote}>{getJourneyCardDescription(item)}</span>
                  <span className={styles.tileLink}>
                    View the journey <ArrowRight size={14} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className={styles.quote} aria-label="A traveler's words">
        <div className={styles.quotePhoto}>
          <Image
            src={journeyPhotos["china-at-an-easier-pace-12-day-private-tour"].src}
            alt={journeyPhotos["china-at-an-easier-pace-12-day-private-tour"].alt}
            fill
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </div>
        <div className={styles.quoteText}>
          <p className={styles.kicker}>In a traveler&apos;s words</p>
          <blockquote>“{quoteText}”</blockquote>
          <p className={styles.attribution}>
            {quoteReview.author}, {quoteReview.location}
          </p>
          <Link className={styles.textLink} href="/reviews">
            Read all {reviews.length} reviews
          </Link>
        </div>
      </section>

      <section className={styles.places} aria-labelledby="places-title">
        <header className={styles.head}>
          <h2 id="places-title">Where most journeys begin.</h2>
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
                    style={{ objectPosition: place.position }}
                  />
                </div>
                <h3>{place.name}</h3>
                <p>{capitalise(placeGlossary[place.name] ?? "")}.</p>
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
        <p className={styles.moreLine}>
          We plan private tours throughout China, not only in these cities.{" "}
          <Link href="/china-destinations">See every region</Link>
        </p>
      </section>

      <section className={styles.steps} aria-labelledby="steps-title">
        <header className={styles.head}>
          <h2 id="steps-title">How it works.</h2>
        </header>
        <ol>
          {steps.map((step, index) => (
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
          <p className={styles.kicker}>The company behind the journeys</p>
          <h2 id="operator-title">
            A licensed China company, with offices in Beijing, Shanghai and Xi&apos;an.
          </h2>
        </div>
        <div>
          <p>
            Every AVIORA journey is designed and operated by{" "}
            {siteConfig.operator.englishReferenceName}, a registered company in{" "}
            {siteConfig.operator.locality} that is {siteConfig.operator.tourismLicense.statement}.
            You can see who we are, where we are registered and how we are licensed before you send
            a single message.
          </p>
          <Link className={styles.textLink} href="/company">
            Company, offices and registration
          </Link>
        </div>
      </section>

      <section className={styles.guides} aria-labelledby="guides-title">
        <header className={styles.head}>
          <h2 id="guides-title">Read before you decide.</h2>
          <Link className={styles.textLink} href="/journal">
            The journal
          </Link>
        </header>
        <div className={styles.guideGrid}>
          {guides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              <span className={styles.kicker}>{guide.kicker}</span>
              <h3>{guide.title}</h3>
              <p>{guide.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.faq} aria-labelledby="faq-title">
        <h2 id="faq-title">Good questions to ask us.</h2>
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
          <h2 id="closing-title">Tell us when you would like to go.</h2>
          <p>
            Share a few details about your trip. A China-based specialist replies, normally within a
            day, with a first idea of the route. No payment, no obligation.
          </p>
          <a className={styles.whatsappLink} href={whatsapp}>
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
