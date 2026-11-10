/** Homepage: private journeys first, operating evidence, then a usable enquiry path. */
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { TrackedLink } from "@/components/cta/tracked-link";
import { SiteFooter } from "@/components/footer/site-footer";
import { HubSpotForm } from "@/components/forms/hubspot-form";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { founder } from "@/content/founder";
import { homeFaqs } from "@/content/home/redesign";
import {
  homeFeaturedJourneys,
  homeSearch,
  homeSearchGuides,
  homeServiceJourney,
} from "@/content/home/search";
import { getPublicTravelerReviews } from "@/content/home/traveler-reviews";
import { getTourBySlug } from "@/content/tours";
import { journeyCatalog } from "@/content/tours/catalog";
import { getJourneyRouteLabel } from "@/content/tours/card-copy";
import { journeyPhotos } from "@/content/tours/journeys-curation";
import { excerpt } from "@/lib/text/excerpt";
import { getJourneyPricePresentation } from "@/lib/tours/journey-pricing";

import styles from "./home.module.css";

const quotedSentence =
  "We never had to figure out local transfers, negotiate taxis, work out the best time to leave or wonder what was happening next.";

const enquiryReviewSelections = [
  {
    id: 16,
    quote:
      "The vehicle gave us somewhere comfortable to recover between activities, the hotels were chosen to make evenings easier and the schedule never felt as though one age group had been prioritised over another.",
  },
  {
    id: 12,
    quote:
      "AVIORA had the next transfer organised, the driver knew where to meet us, the hotels were expecting us and our guide already knew the plan.",
  },
  {
    id: 11,
    quote:
      "We had proper breakfasts, reasonable starts and enough breathing room between activities. We still saw all the places we considered essential, but we didn't come home exhausted.",
  },
] as const;

export function HomePage({ planningHref }: { planningHref: string }) {
  const reviews = getPublicTravelerReviews();
  const enquiryReviews = enquiryReviewSelections.flatMap(({ id, quote }) => {
    const source = reviews.find((review) => review.id === id);
    return source?.paragraphs.join(" ").includes(quote)
      ? [{ id: source.id, author: source.author, location: source.location, quote }]
      : [];
  });
  const quoted = reviews.find((review) => review.paragraphs.join(" ").includes(quotedSentence));
  const review = quoted ?? reviews.find((item) => item.language === "en") ?? reviews[0];
  const quote = quoted ? quotedSentence : review ? excerpt(review.paragraphs[0], 220) : null;
  const since = new Date(siteConfig.operator.founded).getFullYear();
  const familyTour = getTourBySlug("china-family-tour-with-pandas-12-day-private-tour");
  const familyBasis = familyTour?.overview.facts.find((fact) => fact.label === "Published Basis");
  const familyAmount = familyBasis?.helper?.match(/US\$[\d,]+/)?.[0];

  return (
    <div className={styles.page}>
      <SiteNavigation />
      <main id="main-content">
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
              alt="Shanghai’s skyline and the Huangpu River at blue hour"
              width="768"
              height="1662"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={styles.heroBody}>
            <h1 id="home-title">
              {homeSearch.heroTitle[0]}
              <br />
              {homeSearch.heroTitle[1]}
            </h1>
            <p className={styles.heroSub}>{homeSearch.heroDescription}</p>
            <div className={styles.heroActions}>
              <TrackedLink
                href="#featured-journeys"
                className={styles.buttonLight}
                trackingLabel="Explore private journeys"
                trackingPlacement="homepage-hero-browse"
              >
                Explore private journeys <ArrowRight size={16} aria-hidden="true" />
              </TrackedLink>
              <TrackedLink
                href={planningHref}
                className={styles.heroTextLink}
                trackingLabel="Plan my journey"
                trackingPlacement="homepage-hero"
              >
                Plan my journey <ArrowRight size={16} aria-hidden="true" />
              </TrackedLink>
            </div>
          </div>
        </section>

        <nav className={styles.evidence} aria-label="About your China operator">
          <Link href="/company">
            <strong>Licensed in China</strong>
            <span>Operating since {since}</span>
          </Link>
          <Link href="/journal/zero-shopping-policy-luxury-china-inbound-dmc">
            <strong>No compulsory shopping</strong>
            <span>Your touring time stays yours</span>
          </Link>
          <Link href="/reviews">
            <strong>From our guests</strong>
            <span>
              Read their own words <ArrowRight size={13} aria-hidden="true" />
            </span>
          </Link>
        </nav>

        <section
          className={`${styles.section} ${styles.featured}`}
          id="featured-journeys"
          aria-labelledby="featured-title"
        >
          <header className={styles.sectionHeader}>
            <h2 id="featured-title">Three private journeys. A place to start.</h2>
            <p>
              Choose a route to explore. We adjust the dates, hotels and daily pace before anything
              is booked.
            </p>
          </header>
          <div className={styles.journeyGrid}>
            {homeFeaturedJourneys.map((selection) => {
              const item = journeyCatalog.find((journey) => journey.slug === selection.slug);
              if (!item) return null;
              const photo = journeyPhotos[item.slug];
              const price = getJourneyPricePresentation(item);
              const publishedFamilyPrice = item.slug === familyTour?.slug ? familyAmount : null;
              return (
                <article className={styles.journeyCard} key={item.slug}>
                  <TrackedLink
                    href={item.href}
                    className={styles.journeyPhoto}
                    trackingLabel={selection.title}
                    trackingPlacement="homepage-featured-image"
                    journeySlug={item.slug}
                    aria-label={`Explore ${selection.title}`}
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 31vw"
                    />
                  </TrackedLink>
                  <div className={styles.journeyBody}>
                    <p className={styles.audience}>{selection.audience}</p>
                    <h3>
                      <TrackedLink
                        href={item.href}
                        trackingLabel={selection.title}
                        trackingPlacement="homepage-featured-title"
                        journeySlug={item.slug}
                      >
                        {selection.title}
                      </TrackedLink>
                    </h3>
                    <p className={styles.route}>
                      {item.durationLabel} · {getJourneyRouteLabel(item)}
                    </p>
                    <p className={styles.journeyDescription}>{selection.description}</p>
                    <p className={styles.journeyDetail}>{selection.detail}</p>
                    <div className={styles.journeyPrice}>
                      <strong>
                        {publishedFamilyPrice
                          ? `From ${publishedFamilyPrice} per person`
                          : price.amount}
                      </strong>
                      <p>
                        {publishedFamilyPrice
                          ? "Two adults + two children aged 6–11, sharing two rooms outside peak periods. Your dates and room choices determine the final quote."
                          : "A written quote for your dates, party size and hotel choices."}
                      </p>
                    </div>
                    <TrackedLink
                      href={item.href}
                      className={styles.textLink}
                      trackingLabel="Explore this journey"
                      trackingPlacement="homepage-featured"
                      journeySlug={item.slug}
                      aria-label={`Explore ${item.durationLabel} ${selection.title}`}
                    >
                      Explore this journey <ArrowRight size={15} aria-hidden="true" />
                    </TrackedLink>
                  </div>
                </article>
              );
            })}
          </div>
          <div className={styles.browseLinks}>
            <TrackedLink
              href="/tours"
              className={styles.textLink}
              trackingLabel="View all private journeys"
              trackingPlacement="homepage-all-journeys"
            >
              View all private journeys <ArrowRight size={15} aria-hidden="true" />
            </TrackedLink>
            <p>
              Have a different route in mind?{" "}
              <TrackedLink
                href="#start-planning"
                trackingLabel="Tell us your plans"
                trackingPlacement="homepage-custom"
              >
                Tell us your plans.
              </TrackedLink>
            </p>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.familyPlanning}`}
          aria-labelledby="family-planning-title"
        >
          <div className={styles.planningPhoto}>
            <Image
              src="/home/editorial/chinese-painting-cultural-experience.webp"
              alt="A traveler trying traditional Chinese brush painting with a local host"
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
            />
          </div>
          <div className={styles.planningCopy}>
            <h2 id="family-planning-title">What changes when three generations travel together?</h2>
            <p>
              On our 12-day family route, the planning starts with the children’s ages,
              grandparents’ walking comfort and the rooms you need.
            </p>
            <dl className={styles.planningDetails}>
              <div>
                <dt>One main highlight at a time</dt>
                <dd>
                  The Forbidden City visit is planned around 2.5 hours, with rest points and
                  activities adapted to the children’s ages.
                </dd>
              </div>
              <div>
                <dt>Rooms checked before booking</dt>
                <dd>
                  Connecting rooms or a family suite are confirmed with the hotel and recorded in
                  your proposal.
                </dd>
              </div>
              <div>
                <dt>Afternoons with room to recover</dt>
                <dd>
                  An early panda visit in Chengdu is followed by protected afternoon downtime.
                </dd>
              </div>
            </dl>
            <TrackedLink
              href={
                familyTour
                  ? `/start-planning?journey=${familyTour.slug}&source=homepage-family`
                  : planningHref
              }
              className={styles.textLink}
              trackingLabel="Discuss our family trip"
              trackingPlacement="homepage-family-planning"
              journeySlug={familyTour?.slug}
              data-no-enquiry-dialog="true"
            >
              Discuss our family trip <ArrowRight size={15} aria-hidden="true" />
            </TrackedLink>
          </div>
        </section>

        {review && quote ? (
          <figure className={`${styles.section} ${styles.guestQuote}`}>
            <blockquote>“{quote}”</blockquote>
            <figcaption>
              {review.author}, {review.location}
              {review.journey ? <span>{review.journey}</span> : null}
              {review.travelMonth ? <span>{review.travelMonth}</span> : null}
            </figcaption>
            <Link href="/reviews" className={styles.textLink}>
              Read our guest feedback <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </figure>
        ) : null}

        <section
          className={`${styles.section} ${styles.standard}`}
          id="aviora-standard"
          aria-labelledby="standard-title"
        >
          <header className={styles.sectionHeader}>
            <h2 id="standard-title">{homeServiceJourney.title}</h2>
            <p>{homeServiceJourney.description}</p>
          </header>
          <dl className={styles.standardList}>
            {homeServiceJourney.stages.map((item) => (
              <div key={item.title}>
                <dt>{item.title}</dt>
                <dd>{item.body}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.extensionNote}>
            Already have a longer trip arranged?{" "}
            <Link href="/private-china-day-tours">Add a private day extension</Link> or{" "}
            <Link href="/private-guide-and-driver-china">arrange a guide and driver</Link>.
          </p>
        </section>

        <section
          className={`${styles.section} ${styles.enquiry}`}
          id="start-planning"
          data-enquiry-inline
          aria-labelledby="closing-title"
        >
          <div className={styles.enquiryCopy}>
            <h2 id="closing-title">Let’s work out your China trip.</h2>
            <p>
              Tell us who is travelling and the kind of journey you have in mind. A China-based
              specialist normally replies within a day.
            </p>
          </div>
          <div className={styles.enquiryForm} data-home-enquiry-form>
            <HubSpotForm />
          </div>
          <div className={styles.enquiryDetails}>
            <ol className={styles.nextSteps}>
              <li>
                <strong>A first route direction</strong>
                <span>
                  We review the time you have, your interests and the pace that suits your party.
                </span>
              </li>
              <li>
                <strong>A proposal to review</strong>
                <span>
                  Once the direction is clear, we set out hotels, services, inclusions and price in
                  writing.
                </span>
              </li>
            </ol>
            <p className={styles.noObligation}>No payment or booking commitment to enquire.</p>
            {enquiryReviews.length ? (
              <section className={styles.enquiryReviews} aria-labelledby="enquiry-reviews-title">
                <h3 id="enquiry-reviews-title">In our guests’ words.</h3>
                <div className={styles.enquiryReviewList}>
                  {enquiryReviews.map((review) => (
                    <figure className={styles.enquiryReview} key={review.id}>
                      <blockquote>“{review.quote}”</blockquote>
                      <figcaption>
                        <Link
                          href={`/reviews?review=${review.id}`}
                          aria-label={`Read the full review by ${review.author}`}
                        >
                          {review.author}
                        </Link>
                        <span>{review.location}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
            <div className={styles.operator}>
              <p>
                Founded by <Link href={founder.path}>{founder.name}</Link>. Operated by{" "}
                {siteConfig.operator.englishReferenceName}, registered in{" "}
                {siteConfig.operator.locality}.
              </p>
              <Link href="/company">
                Company and licensing details <ArrowRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.about}`}
          id="about-aviora"
          aria-labelledby="about-aviora-title"
        >
          <h2 id="about-aviora-title">{homeSearch.overviewTitle}</h2>
          <div>
            <p>{homeSearch.overview}</p>
            <Link href="/about" className={styles.textLink}>
              Meet AVIORA China Travel <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </section>
        <section
          className={`${styles.section} ${styles.faq}`}
          id="home-faq"
          aria-labelledby="faq-title"
        >
          <h2 id="faq-title">Before you enquire.</h2>
          <div>
            {homeFaqs.map((faq, index) => (
              <details key={faq.question} id={`home-faq-${index + 1}`}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <nav className={`${styles.section} ${styles.guides}`} aria-label="China planning guides">
          <p>Still researching?</p>
          {homeSearchGuides.map((guide) => (
            <Link href={guide.href} key={guide.href}>
              {guide.title} <ArrowRight size={14} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </main>
      <SiteFooter />
    </div>
  );
}
