import { ArrowRight, Check, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { CarouselGallery } from "@/components/gallery/carousel-gallery";
import { PageContainer } from "@/components/layout/page-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { RecordViewed } from "@/features/discovery/record-viewed";
import {
  JourneyEnquiryWhatsApp,
  JourneyMobileCta,
  JourneyPrice,
  JourneyDuration,
} from "@/features/tours/detail/journey-booking-summary";
import { JourneyConfigurationProvider } from "@/features/tours/detail/journey-configuration";
import { JourneyPacePlanner } from "@/features/tours/detail/journey-pace-planner";
import { TourDetailEnquiryForm } from "@/features/tours/detail/tour-detail-enquiry-form";
import { TourFaqAccordion } from "@/features/tours/detail/tour-faq-accordion";
import { TourDayAccordion } from "@/features/tours/detail/tour-day-accordion";
import type { TourDetailModel } from "@/features/tours/detail/tour-detail-model";
import {
  TourDetailAnalytics,
  TrackedTourLink,
} from "@/features/tours/detail/tour-detail-interactions";
import styles from "@/features/tours/detail/tour-detail-landing.module.css";
import type { JourneyPriceSelection } from "@/lib/tours/journey-price";

export function TourDetailLanding({
  model,
  initialSelection,
}: {
  model: TourDetailModel;
  initialSelection?: JourneyPriceSelection;
}) {
  const isFourCityJourney = model.slug === "beijing-xian-chengdu-shanghai-private-11-day-tour";
  const price = model.price ? `US$${model.price.fromUsd.toLocaleString("en-US")}` : "On request";
  const title = model.displayTitle;
  const isDayTour = model.days.length === 1;
  const summary = isFourCityJourney
    ? "Four defining cities, connected by one local team and paced around your party."
    : model.decisionSummary;
  const priceBasis = isFourCityJourney
    ? "Essential from US$2,680 pp / Considered from US$2,980 pp"
    : (model.price?.basis ?? "Prepared around your dates");
  const priceDetail = isFourCityJourney
    ? "Based on four guests sharing two rooms outside peak periods. Selected hotels, confirmed domestic transport, private guiding on touring days and listed admissions are included."
    : (model.price?.detail ?? "The final proposal confirms the exact services and hotel choices.");
  const priceNote = isFourCityJourney
    ? "Your dates, room setup and chosen free-day experience determine the final total."
    : (model.price?.note ?? "No payment is required to send an enquiry.");
  const portraitGallery = model.gallery
    .filter((image) => (image.height ?? 0) > (image.width ?? 0))
    .slice(0, 8);

  return (
    <JourneyConfigurationProvider
      active={isFourCityJourney}
      basePrice={model.price?.fromUsd}
      initialSelection={initialSelection}
      journeySlug={model.slug}
      duration={model.duration}
      priceBasis={model.price?.basis ?? "Final price confirmed in writing"}
      pricingUnit={model.price?.pricingUnit ?? "per-person"}
    >
      <PageContainer className={styles.page} tone="white" data-new-tour-detail="true">
        <RecordViewed
          item={{
            id: `tour:${model.slug}`,
            type: "tour",
            title: model.displayTitle,
            href: `/tours/${model.slug}`,
          }}
        />
        <TourDetailAnalytics journeySlug={model.slug} />
        <SiteNavigation />

        <div>
          <section
            className={styles.hero}
            id="journey-hero"
            aria-labelledby="journey-title"
            data-hero-layout="true"
          >
            <div
              className={[
                styles.heroMedia,
                !model.hasPhotography ? styles.heroMediaPlaceholder : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {model.hasPhotography ? (
                <OptimizedImage
                  src={model.heroImage.src}
                  alt={model.heroImage.alt}
                  fill
                  priority
                  sizes="100vw"
                  quality={90}
                  frameClassName={styles.heroImageFrame}
                  className={styles.heroImage}
                  objectPosition={model.heroImage.objectPosition ?? "center"}
                  showSkeleton={false}
                  fadeIn={false}
                />
              ) : (
                <div className={styles.noPhoto}>
                  <Sparkles aria-hidden="true" /> Photography coming soon
                </div>
              )}
              <div className={styles.heroShade} aria-hidden="true" />
              <div className={styles.heroContent}>
                <p className={styles.eyebrow}>
                  {isFourCityJourney ? "A first journey through China" : model.journeyRoleLabel}
                </p>
                <h1 id="journey-title" aria-label={title}>
                  <span className={styles.desktopTitle}>{title}</span>
                </h1>
                <div className={styles.heroMeta}>
                  <span>
                    <JourneyDuration fallback={model.duration} />
                  </span>
                  <span>{isFourCityJourney ? "4 cities" : model.route}</span>
                  <span>Private journey</span>
                </div>
                <p className={styles.heroDescription}>{summary}</p>
                <div className={styles.heroActions}>
                  <TrackedTourLink
                    className={styles.primaryAction}
                    href="#enquiry"
                    journeySlug={model.slug}
                    label="CHECK AVAILABILITY"
                    placement="detail-hero"
                  >
                    Check availability <ArrowRight size={16} aria-hidden="true" />
                  </TrackedTourLink>
                  <a className={styles.secondaryAction} href="#itinerary">
                    See the days
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.heroDecisionBar} aria-label="Key booking information">
              <div>
                <span className={styles.barLabel}>
                  {isFourCityJourney ? "Selected price" : "From"}
                </span>
                <JourneyPrice fallback={price} journeySlug={model.slug} />
              </div>
              <div>
                <span className={styles.barLabel}>Format</span>
                <strong>100% private</strong>
                <small>No fixed group or compulsory shopping stops</small>
              </div>
              <div>
                <span className={styles.barLabel}>Support</span>
                <strong>One China-based team</strong>
                <small>Before departure and while you travel</small>
              </div>
            </div>
          </section>

          {!isDayTour ? (
            <section className={styles.routeSection} id="overview" aria-labelledby="overview-title">
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>The route at a glance</p>
                <h2 id="overview-title">Your route at a glance.</h2>
                <p>
                  {isFourCityJourney
                    ? "Imperial Beijing, historic Xi'an, relaxed Chengdu and modern Shanghai, connected in an order that keeps travel clear and manageable."
                    : model.routeMap.description}
                </p>
              </div>
              <ol className={styles.routeList}>
                {model.routeMap.stops.map((stop, index) => (
                  <li key={`${stop.name}-${index}`}>
                    <div className={styles.routeTopline}>
                      <span className={styles.routeNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {stop.days ? <span className={styles.routeDays}>{stop.days}</span> : null}
                    </div>
                    <div className={styles.routeCopy}>
                      <strong>{stop.name}</strong>
                      {stop.description ? <p>{stop.description}</p> : null}
                    </div>
                    {index < model.routeMap.stops.length - 1 ? (
                      <ArrowRight className={styles.routeArrow} size={18} aria-hidden="true" />
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {!isDayTour && model.hasPhotography && model.experienceCards.length ? (
            <section className={styles.experienceSection} aria-labelledby="experience-title">
              <div className={styles.sectionHeading}>
                <h2 id="experience-title">Journey highlights.</h2>
                <p>Three cities. Time to experience each one.</p>
              </div>
              <div className={styles.experienceGrid}>
                {model.experienceCards.slice(0, 3).map((experience) => (
                  <article className={styles.experienceCard} key={experience.title}>
                    {experience.image ? (
                      <OptimizedImage
                        src={experience.image.src}
                        alt={experience.image.alt}
                        width={720}
                        height={480}
                        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 46vw, 33vw"
                        className={styles.experienceImage}
                        frameClassName={styles.experienceImageFrame}
                        showSkeleton={false}
                      />
                    ) : (
                      <div className={styles.experiencePlaceholder}>Image coming soon</div>
                    )}
                    <div className={styles.experienceBody}>
                      <span>{experience.label}</span>
                      <h3>{experience.title}</h3>
                      <p>{experience.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {isFourCityJourney ? (
            <JourneyPacePlanner model={model} />
          ) : (
            <section
              className={styles.itinerarySection}
              id="itinerary"
              aria-labelledby="itinerary-title"
            >
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>{model.isFramework ? "The route" : "Day by day"}</p>
                <h2 id="itinerary-title">
                  {isDayTour
                    ? "Your day, clearly planned."
                    : model.isFramework
                      ? "Where this journey takes you."
                      : "The journey, day by day."}
                </h2>
                <p>
                  {isDayTour
                    ? "The plan and practical details, in one place."
                    : model.isFramework
                      ? "The daily plan is tailored after your dates and priorities are confirmed."
                      : "Scan the days, then open any one for the full plan."}
                </p>
              </div>
              <TourDayAccordion
                days={model.days}
                journeySlug={model.slug}
                isFramework={model.isFramework}
              />
            </section>
          )}

          {portraitGallery.length > 0 ? (
            <section className={styles.photoSection} aria-labelledby="photo-story-title">
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>A closer look</p>
                <h2 id="photo-story-title">The places stay with you.</h2>
                <p>Scroll through a few of the details that give this route its character.</p>
              </div>
              <div className={styles.photoCarousel}>
                <CarouselGallery images={portraitGallery} orientation="portrait" />
              </div>
            </section>
          ) : null}

          <section
            className={styles.includedSection}
            id="included"
            aria-labelledby="included-title"
          >
            <div className={styles.sectionHeading}>
              <h2 id="included-title">What&apos;s included.</h2>
              <p>The service details and price basis, clearly set out.</p>
            </div>
            <div className={styles.includedLayout}>
              <div className={styles.includedItems}>
                <ul className={styles.includedList}>
                  {model.included.slice(0, 4).map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {model.included.length > 4 ? (
                  <details className={styles.moreIncluded}>
                    <summary>See all {model.included.length} inclusions</summary>
                    <ul className={styles.includedList}>
                      {model.included.slice(4).map((item) => (
                        <li key={item}>
                          <Check size={17} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : null}
              </div>
              <div className={styles.priceNote}>
                <span className={styles.barLabel}>Starting price</span>
                <JourneyPrice fallback={price} journeySlug={model.slug} />
                <details className={styles.priceDetails}>
                  <summary>How this price is calculated</summary>
                  <strong>{priceBasis}</strong>
                  <p>{priceDetail}</p>
                  <p>{priceNote}</p>
                </details>
                <div className={styles.priceEvidence}>
                  <Link href="/about">Our operating company</Link>
                  <Link href="/terms">Booking terms</Link>
                </div>
                <div className={styles.serviceNote}>
                  <ShieldCheck size={18} aria-hidden="true" />
                  <p>
                    No compulsory shopping stops. Hotels, transport and payment schedule are
                    confirmed in writing before you commit.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.faqSection} id="faq" aria-labelledby="faq-title">
            <div className={styles.faqColumn}>
              <div className={styles.sectionHeading}>
                <h2 id="faq-title">Questions travelers ask before booking.</h2>
              </div>
              <TourFaqAccordion faqs={model.faqs.slice(0, 6)} journeySlug={model.slug} />
            </div>
            <div className={styles.enquiryPanel} id="enquiry">
              <p className={styles.eyebrow}>Personal proposal</p>
              <h2>Is this journey right for you?</h2>
              <p>
                Share four quick details. A China-based specialist will reply with clear next steps
                within 24 hours.
              </p>
              <TourDetailEnquiryForm journeySlug={model.slug} journeyTitle={model.title} />
              <p className={styles.noPayment}>No payment or booking commitment is required.</p>
              <JourneyEnquiryWhatsApp
                baseHref={model.whatsappHref}
                journeySlug={model.slug}
                journeyTitle={title}
              />
            </div>
          </section>
        </div>
        <SiteFooter tone="white" />
        <JourneyMobileCta fallbackPrice={price} journeySlug={model.slug} />
      </PageContainer>
    </JourneyConfigurationProvider>
  );
}
