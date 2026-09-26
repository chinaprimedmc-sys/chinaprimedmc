import { ArrowRight, ArrowUpRight, Clock3, ShieldCheck, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/cta/tracked-link";
import { SiteFooter } from "@/components/footer/site-footer";
import { HomeInquiryForm } from "@/components/forms/home-inquiry-form";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import {
  homeEditorialStories,
  homeFaqs,
  homePlanningGuides,
  homeTravelerNeeds,
} from "@/content/home/redesign";

import { HomeStandardPanel } from "./home-standard-panel";
import { HomeJourneyFinder as HomeJourneyFinderTool } from "./home-journey-finder";
import styles from "./home-redesign.module.css";

type HomeRedesignProps = {
  planningHref: string;
};

export function HomeRedesign({ planningHref }: HomeRedesignProps) {
  return (
    <main className={styles.page}>
      <SiteNavigation />
      {/* 01 首屏与产品入口：先让访客理解品牌，再快速进入可比较的路线。 */}
      <div className={styles.openingComposition}>
        <HomeHero planningHref={planningHref} />
        <HomeProof />
        <HomeJourneyFinderTool />
      </div>

      {/* 03 体验叙事：在产品选择之后补充 AVIORA 的旅行视角。 */}
      <HomeExperienceStory />

      {/* 04 服务与预订保障：用服务影像与清晰条款降低预订风险。 */}
      <HomeOperatingStandard />

      {/* 05 个人适配：用真实旅行影像说明 AVIORA 如何照顾不同旅客的需求。 */}
      <HomeTravelerNeeds />

      {/* 07 快速询盘：产品发现与个人适配之后，承接未被现有行程满足的需求。 */}
      <HomePlanning />

      {/* 08 决策支持：使用静态 FAQ 和 Journal 内链回答高意向搜索问题。 */}
      <HomePlanningIntelligence />

      {/* 09 收束行动：用一句价值承诺和两个清晰出口完成转化闭环。 */}
      <HomeClosing planningHref={planningHref} />

      <SiteFooter />
    </main>
  );
}

function HomeHero({ planningHref }: { planningHref: string }) {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <picture className={styles.heroMedia}>
        <source
          media="(min-width: 768px)"
          srcSet="/home/shanghai-blue-hour-desktop-hero-1280.avif 1280w, /home/shanghai-blue-hour-desktop-hero-1600.avif 1600w, /home/shanghai-blue-hour-desktop-hero-1920.avif 1920w, /home/shanghai-blue-hour-desktop-hero.avif 2400w"
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
      <div className={styles.heroScrim} aria-hidden="true" />

      <div className={`${styles.container} ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <div className={styles.heroMain}>
            <p className={styles.heroEyebrow}>China-based. Personally planned.</p>
            <h1 id="home-hero-title">
              <span>China,</span> <span>planned around you.</span>
            </h1>
            <p className={styles.heroLead}>
              <span className={styles.heroDesktopCopy}>
                Private journeys with one China-based team handling the route, guides, drivers and
                details from arrival to departure.
              </span>
              <span className={styles.heroMobileCopy}>
                Private China travel, planned and supported by one local team.
              </span>
            </p>
            <div className={styles.heroActions}>
              <Link href="#journey-finder" className={styles.heroPrimaryAction}>
                <span className={styles.heroDesktopCopy}>Explore journeys</span>
                <span className={styles.heroMobileCopy}>Explore trips</span>
                <ArrowRight aria-hidden="true" />
              </Link>
              <TrackedLink
                href={planningHref}
                className={styles.heroSecondaryAction}
                trackingLabel="Plan with a specialist"
                trackingPlacement="homepage-hero"
              >
                <span className={styles.heroDesktopCopy}>Plan with a specialist</span>
                <span className={styles.heroMobileCopy}>Plan my trip</span>
                <ArrowUpRight aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
          <ul className={styles.heroTrust} aria-label="Why travelers choose AVIORA">
            <li>
              <ShieldCheck aria-hidden="true" />
              <span className={styles.heroDesktopCopy}>Fully licensed in China</span>
              <span className={styles.heroMobileCopy}>Licensed in China</span>
            </li>
            <li>
              <ShoppingBag aria-hidden="true" />
              <span className={styles.heroDesktopCopy}>No shopping stops</span>
              <span className={styles.heroMobileCopy}>No shopping</span>
            </li>
            <li>
              <Clock3 aria-hidden="true" />
              <span className={styles.heroDesktopCopy}>Replies within 24 hours</span>
              <span className={styles.heroMobileCopy}>Reply within 24h</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomeProof() {
  const serviceFlow = [
    {
      title: "Planned around you",
      detail: "Your route, pace and hotels are shaped around the way you want to travel.",
    },
    {
      title: "Connected across China",
      detail: "Guides, drivers, tickets and city-to-city handovers stay coordinated.",
    },
    {
      title: "Supported when plans change",
      detail: "A China-based team responds while you travel, not from another time zone.",
    },
  ] as const;

  const trustPoints = [
    { value: "12,000+", label: "travelers hosted in China" },
    { value: "30+", label: "countries represented" },
    { value: "No", label: "compulsory shopping stops" },
  ] as const;

  return (
    <section className={styles.proof} aria-labelledby="home-proof-title">
      <div className={`${styles.container} ${styles.proofInner}`}>
        <header className={styles.proofStory}>
          <h2 id="home-proof-title">One team in China. Every detail connected.</h2>
          <p className={styles.proofLead}>
            From your first route idea to your final transfer, one local team keeps the journey
            moving around you.
          </p>
        </header>

        <div className={styles.proofJourney}>
          <figure className={styles.proofMedia}>
            <Image
              src="/home/standard/local-guide-private-walk.png"
              alt="A local guide introducing historic China to international travelers"
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
            />
          </figure>

          <ol className={styles.proofStandards} aria-label="How AVIORA looks after your journey">
            {serviceFlow.map((point, index) => (
              <li key={point.title}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{point.title}</strong>
                  <p>{point.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <ul className={styles.proofStats} aria-label="Why travelers trust AVIORA">
          {trustPoints.map((point) => (
            <li key={point.label}>
              <strong>{point.value}</strong>
              <span>{point.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HomeExperienceStory() {
  return (
    <section className={styles.experienceStory} aria-labelledby="home-experience-title">
      <div className={styles.experienceStoryStage}>
        <header className={`${styles.container} ${styles.experienceStoryHeader}`}>
          <h2 id="home-experience-title">Go beyond the expected.</h2>
          <p>Stay longer. Look closer. Meet the people behind the places.</p>
        </header>

        <div className={styles.experienceStoryViewport}>
          <div className={styles.experienceStoryTrack}>
            {homeEditorialStories.map((story, index) => (
              <article key={story.title} className={styles.experienceStoryItem}>
                <div className={styles.experienceStoryImage}>
                  <Image
                    src={story.image.src}
                    alt={story.image.alt}
                    fill
                    sizes="(max-width: 700px) 82vw, (max-width: 1024px) 68vw, 21vw"
                    style={{ objectPosition: story.image.objectPosition }}
                  />
                </div>
                <div className={styles.experienceStoryCopy}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{story.title}</h3>
                  <p>{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeOperatingStandard() {
  return (
    <section className={styles.standard} aria-labelledby="home-standard-title">
      <div className={`${styles.container} ${styles.standardInner}`}>
        <header className={styles.standardHeader}>
          <div>
            <p className={styles.eyebrow}>The AVIORA Standard</p>
            <h2 id="home-standard-title">The details are already handled.</h2>
          </div>
          <p>Guides, vehicles and local support, coordinated by one China-based team.</p>
        </header>

        <HomeStandardPanel />
      </div>
    </section>
  );
}

function HomePlanningIntelligence() {
  return (
    <section className={styles.intelligence} aria-labelledby="home-intelligence-title">
      <div className={styles.container}>
        <header className={styles.splitHeader}>
          <div>
            <h2 id="home-intelligence-title">Answers before you commit.</h2>
          </div>
          <p>Compare routes, prices and practical details before you decide.</p>
        </header>

        <div className={styles.intelligenceGrid}>
          <div className={styles.guideList} aria-label="Private China travel planning guides">
            {homePlanningGuides.map((guide) => (
              <Link href={guide.href} key={guide.href}>
                <span>{guide.category}</span>
                <strong>{guide.title}</strong>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className={styles.faqList}>
            {homeFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeTravelerNeeds() {
  return (
    <section className={styles.needs} aria-labelledby="home-needs-title">
      <div className={styles.container}>
        <div className={styles.needsInline}>
          <header>
            <p className={styles.eyebrow}>Your priorities</p>
            <h2 id="home-needs-title">Travel that fits you.</h2>
            <p>Start with the details that matter most to you.</p>
          </header>
          <ul className={styles.needsGrid}>
            {homeTravelerNeeds.map((need) => (
              <li key={need.title}>
                <TrackedLink
                  href={need.href}
                  trackingLabel={`Explore ${need.title}`}
                  trackingPlacement="homepage-traveler-needs"
                >
                  <span className={styles.needsImageFrame}>
                    <Image
                      className={styles.needsImage}
                      src={need.image}
                      alt={need.alt}
                      fill
                      style={{ objectFit: "cover", objectPosition: "center center" }}
                      sizes="(max-width: 700px) 90vw, (max-width: 1024px) 48vw, 25vw"
                    />
                  </span>
                  <span className={styles.needsCardCopy}>
                    <strong>{need.title}</strong>
                    <span>{need.description}</span>
                  </span>
                  <span className={styles.needsArrow} aria-hidden="true">
                    <ArrowUpRight />
                  </span>
                </TrackedLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HomePlanning() {
  return (
    <section className={styles.planning} id="start-planning" aria-labelledby="home-planning-title">
      <div className={`${styles.container} ${styles.planningInner}`}>
        <div className={styles.planningStory}>
          <header className={`${styles.sectionIntro} ${styles.planningIntro}`}>
            <p className={styles.eyebrow}>Private China Travel, Personally Planned</p>
            <h2 id="home-planning-title">
              <span className={styles.heroDesktopCopy}>Tell us the China you want to see.</span>
              <span className={styles.heroMobileCopy}>The China you want to see.</span>
            </h2>
            <p>
              Share your dates and priorities. We will propose a route, pace and private services in
              writing.
            </p>
          </header>

          <figure className={styles.planningMedia}>
            <span className={styles.planningMediaImage}>
              <Image
                src="/home/planning/consultation-team.jpg"
                alt="A China travel specialist discussing a private journey with a guest"
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1024px) 44vw, 38vw"
                style={{ objectFit: "cover", objectPosition: "center center" }}
              />
            </span>
            <figcaption>Real places. Thoughtful service. A journey made around you.</figcaption>
          </figure>

          <ul className={styles.planningTrust}>
            <li>
              <span aria-hidden="true">01</span> Personal reply within 24 hours
            </li>
            <li>
              <span aria-hidden="true">02</span> No booking obligation
            </li>
            <li>
              <span aria-hidden="true">03</span> One China-based team before and during your trip
            </li>
            <li>
              <span aria-hidden="true">04</span> Fully licensed local guides and private
              arrangements
            </li>
            <li>
              <span aria-hidden="true">05</span> No compulsory shopping stops
            </li>
          </ul>
        </div>

        <div className={styles.planningForm}>
          <header className={styles.planningFormHeader}>
            <h3>Tell us about your trip.</h3>
            <p>Five quick details are enough to get started.</p>
          </header>
          <HomeInquiryForm />
        </div>
      </div>
    </section>
  );
}

function HomeClosing({ planningHref }: { planningHref: string }) {
  return (
    <section className={styles.closing} aria-labelledby="home-closing-title">
      <div className={`${styles.container} ${styles.closingInner}`}>
        <div>
          <h2 id="home-closing-title">Ready to plan your journey?</h2>
        </div>
        <div className={styles.closingAction}>
          <p>Tell us what matters. Our China-based team will help.</p>
          <TrackedLink
            href={planningHref}
            className={styles.closingPrimary}
            trackingLabel="Start planning"
            trackingPlacement="homepage-closing-primary"
          >
            Start planning
            <ArrowUpRight aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
