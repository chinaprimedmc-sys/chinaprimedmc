import { ArrowRight, ArrowUpRight, Clock3, ShieldCheck, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/cta/tracked-link";
import { SiteFooter } from "@/components/footer/site-footer";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { TravelerReviewRail } from "@/components/reviews/traveler-review-rail";
import { getInterleavedTravelerReviews, travelerReviews } from "@/content/home/traveler-reviews";
import { serviceAchievements } from "@/content/home/service-achievements";
import { siteConfig } from "@/config/site";
import { homeFaqs, homePlanningGuides, homeTravelerNeeds } from "@/content/home/redesign";

import { HomeStandardPanel } from "./home-standard-panel";
import { HomeJourneyFinder as HomeJourneyFinderTool } from "./home-journey-finder";
import { HomeMobileApp, HomeMobileHeroActions, HomeMobilePlanningCard } from "./home-mobile-app";
import styles from "./home-redesign.module.css";

type HomeRedesignProps = {
  planningHref: string;
};

export function HomeRedesign({ planningHref }: HomeRedesignProps) {
  return (
    <main className={styles.page}>
      <SiteNavigation />
      <HomeMobileApp />
      {/* 01 首屏与产品入口：先让访客理解品牌，再快速进入可比较的路线。 */}
      <div className={styles.openingComposition}>
        <HomeHero planningHref={planningHref} />
        <TravelerReviewRail
          reviews={getInterleavedTravelerReviews()}
          reviewCount={travelerReviews.length}
        />
        <HomeJourneyFinderTool />
        <HomeProof />
      </div>

      {/* 04 服务标准：说明私人导游、交通与预订流程如何落实。 */}
      <HomeOperatingStandard />

      {/* 05 个人适配：把旅客需求直接连接到相关行程。 */}
      <HomeTravelerNeeds />

      {/* 06 决策支持先回答关键问题，再承接询盘。 */}
      <HomePlanningIntelligence />

      <HomePlanning />

      <SiteFooter />
    </main>
  );
}

function HomeHero({ planningHref }: { planningHref: string }) {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title" data-home-hero>
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
            <HomeMobileHeroActions />
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
  const operatorFacts = [
    {
      title: "A named China operator",
      detail: `${siteConfig.operator.legalName} (${siteConfig.operator.englishReferenceName}) is registered in Guangzhou, Guangdong.`,
    },
    {
      title: "Offices in three cities",
      detail: `AVIORA has offices in ${siteConfig.operator.officeCities.join(", ")}.`,
    },
    {
      title: "Licensed for inbound tourism",
      detail: `The operating company is ${siteConfig.operator.tourismLicense.statement}.`,
    },
  ] as const;

  return (
    <section className={styles.proof} aria-labelledby="home-proof-title">
      <div className={`${styles.container} ${styles.proofInner}`}>
        <header className={styles.proofStory}>
          <p className={styles.eyebrow}>Who operates your journey</p>
          <h2 id="home-proof-title">A China-based operator, with people on the ground.</h2>
          <p className={styles.proofLead}>
            AVIORA China Travel is the guest-facing brand of China Prime DMC. The local operating
            company and office network are clearly identified before you enquire.
          </p>
        </header>

        <div className={styles.proofJourney}>
          <figure className={styles.proofMedia}>
            <Image
              src="/home/editorial/travel-trade-buyer-meeting-kuala-lumpur.webp"
              alt="AVIORA team member meeting an international travel partner at the ICGETE travel trade event in Kuala Lumpur"
              fill
              sizes="(max-width: 767px) 100vw, 58vw"
              style={{ objectPosition: "50% 50%" }}
            />
          </figure>

          <ol className={styles.proofStandards} aria-label="AVIORA operating details">
            {operatorFacts.map((point, index) => (
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
          {serviceAchievements.map((achievement) => (
            <li key={achievement.id}>
              <strong>{achievement.display}</strong>
              <span>{achievement.shortLabel}</span>
            </li>
          ))}
        </ul>

        <Link className={styles.proofCompanyLink} href="/company">
          Company, offices and registration
          <ArrowUpRight aria-hidden="true" />
        </Link>
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
            <p className={styles.eyebrow}>How the service works</p>
            <h2 id="home-standard-title">Private services, coordinated around your trip.</h2>
          </div>
          <p>See what is arranged, what is confirmed in writing and what remains your choice.</p>
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
      <div className={`${styles.container} ${styles.mobilePlanningCardWrap}`}>
        <HomeMobilePlanningCard />
      </div>
      <div className={`${styles.container} ${styles.planningInner}`}>
        <div className={styles.planningStory}>
          <header className={`${styles.sectionIntro} ${styles.planningIntro}`}>
            <p className={styles.eyebrow}>Private China Travel, Personally Planned</p>
            <h2 id="home-planning-title">
              <span className={styles.heroDesktopCopy}>Tell us what matters on your trip.</span>
              <span className={styles.heroMobileCopy}>What matters on your trip?</span>
            </h2>
            <p>
              Share your dates and priorities. A China-based specialist will follow up with a route
              and clear price basis.
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
              <span aria-hidden="true">02</span> No payment to make an enquiry
            </li>
            <li>
              <span aria-hidden="true">03</span>
              <Link href="/company">Meet the operator before you book</Link>
            </li>
          </ul>
        </div>

        <div className={styles.planningForm}>
          <header className={styles.planningFormHeader}>
            <h3>Tell us about your trip.</h3>
            <p>Just your first name and WhatsApp number to get started.</p>
          </header>
          <InquiryForm placement="homepage-quick-brief" />
        </div>
      </div>
    </section>
  );
}
