import { ArrowUpRight, Check, Minus } from "lucide-react";
import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { RecordViewed } from "@/features/discovery/record-viewed";
import {
  JourneyMobileCta,
  JourneyPrice,
  JourneyDuration,
  JourneyWhatsAppAction,
} from "@/features/tours/detail/journey-booking-summary";
import { JourneyConfigurationProvider } from "@/features/tours/detail/journey-configuration";
import { JourneyItineraryDialog } from "@/features/tours/detail/journey-itinerary-dialog";
import { TourProductGallery } from "@/features/tours/detail/tour-product-gallery";
import { TourFaqAccordion } from "@/features/tours/detail/tour-faq-accordion";
import type { TourDetailModel } from "@/features/tours/detail/tour-detail-model";
import { TourDetailAnalytics } from "@/features/tours/detail/tour-detail-interactions";
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
  const price = model.price?.fromUsd
    ? `US$${model.price.fromUsd.toLocaleString("en-US")}`
    : "Price on request";
  const title = model.displayTitle;
  const summary = isFourCityJourney
    ? "One considered route from Shanghai to Beijing, with Chengdu's pandas and Sichuan food culture, Xi'an's ancient heritage, and a guided day on the Great Wall."
    : model.decisionSummary;
  const priceBasis = model.price?.basis ?? "Prepared around your dates";
  const priceDetail =
    model.price?.detail ?? "The final proposal confirms the exact services and hotel choices.";
  const priceNote = model.price?.note ?? "No payment is required to send an enquiry.";
  const additionalPriceNote = model.price?.additionalNote;
  return (
    <JourneyConfigurationProvider
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
          <section className={styles.productHeader} aria-labelledby="journey-title">
            <div className={styles.productGalleryColumn}>
              <TourProductGallery
                hero={model.heroImage}
                gallery={model.gallery}
                hasPhotography={model.hasPhotography}
              />
            </div>
            <div className={styles.productInfo}>
              <p className={styles.eyebrow}>
                {isFourCityJourney ? "A first journey through China" : model.journeyRoleLabel}
              </p>
              <h1 id="journey-title">{title}</h1>
              <div className={styles.productMeta}>
                <span>
                  <JourneyDuration fallback={model.duration} />
                </span>
                <span>{isFourCityJourney ? "4 cities" : model.route}</span>
                <span>Private journey</span>
              </div>
              <Link className={styles.reviewLink} href="/reviews">
                Read AVIORA traveler reviews <ArrowUpRight aria-hidden="true" />
              </Link>
              <p className={styles.productSummary}>{summary}</p>
              <div className={styles.productPrice}>
                <span className={styles.barLabel}>
                  {model.price?.fromUsd ? "From" : "Pricing"} ·{" "}
                  {model.price?.pricingUnit === "private-group"
                    ? "per private group"
                    : "per person"}
                </span>
                <JourneyPrice fallback={price} journeySlug={model.slug} />
                <p>{model.price?.cardBasis ?? "Prepared around your dates"}</p>
                <details className={styles.priceDetails}>
                  <summary>How this price is set</summary>
                  <div>
                    <strong>{priceBasis}</strong>
                    <p>{priceDetail}</p>
                    <p>{priceNote}</p>
                    {additionalPriceNote ? <p>{additionalPriceNote}</p> : null}
                    <div className={styles.priceEvidence}>
                      <Link href="/company">Company and operator details</Link>
                      <Link href="/terms">Booking terms</Link>
                    </div>
                  </div>
                </details>
              </div>
              <div className={styles.productFacts}>
                {model.included.slice(0, 2).map((item) => (
                  <p key={item}>
                    <Check size={15} aria-hidden="true" /> {item}
                  </p>
                ))}
              </div>
              <Link className={styles.operatorLink} href="/company">
                Meet the China-based operator <ArrowUpRight aria-hidden="true" />
              </Link>
              <div id="itinerary" className={styles.itineraryEntry}>
                <JourneyItineraryDialog model={model} />
              </div>
              <div className={styles.productActions}>
                <JourneyWhatsAppAction
                  baseHref={model.whatsappHref}
                  journeySlug={model.slug}
                  journeyTitle={title}
                  className={styles.productAction}
                  placement="detail-product-header"
                />
                <div className={styles.secondaryProductActions}>
                  <Link
                    className={styles.detailPlanningLink}
                    href={`/start-planning?journey=${encodeURIComponent(model.slug)}`}
                  >
                    Ask about dates <ArrowUpRight aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <small className={styles.productNoPressure}>
                Ask a question or share your dates. No payment required.
              </small>
            </div>
          </section>

          <section
            className={styles.includedSection}
            id="included"
            aria-labelledby="included-title"
          >
            <div className={styles.sectionHeading}>
              <h2 id="included-title" tabIndex={-1}>
                What&apos;s included and what isn&apos;t
              </h2>
              <p>Know what your journey covers before you make a decision.</p>
            </div>
            <div className={styles.coverageGrid}>
              <div className={styles.coverageColumn}>
                <div className={styles.coverageHeading}>
                  <span className={styles.coverageIcon}>
                    <Check size={17} aria-hidden="true" />
                  </span>
                  <h3>Included</h3>
                  <span className={styles.coverageCount}>{model.included.length} items</span>
                </div>
                <ul className={styles.includedList}>
                  {model.included.map((item) => (
                    <li key={item}>
                      <Check size={17} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.coverageColumn}>
                <div className={styles.coverageHeading}>
                  <span className={`${styles.coverageIcon} ${styles.coverageIconMuted}`}>
                    <Minus size={17} aria-hidden="true" />
                  </span>
                  <h3>Not included</h3>
                  <span className={styles.coverageCount}>{model.excluded.length} items</span>
                </div>
                <ul className={`${styles.includedList} ${styles.excludedList}`}>
                  {model.excluded.map((item) => (
                    <li key={item}>
                      <Minus size={17} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={styles.coverageFooter}>
              <p>
                Your written proposal confirms the exact hotels, transport and services for your
                dates.
              </p>
              <Link className={styles.termsLink} href="/terms">
                Read booking terms <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </section>

          <section className={styles.fitSection} aria-labelledby="fit-title">
            <div className={styles.fitIntro}>
              <p className={styles.eyebrow}>A clear fit</p>
              <h2 id="fit-title">Is this journey right for you?</h2>
            </div>
            <div className={styles.fitList}>
              <p>
                <strong>A good fit if you want</strong>
                {model.quickFacts.find((fact) => fact.label === "Ideal for")?.value ??
                  "Private guiding, a considered pace and local support throughout."}
              </p>
              <p>
                <strong>Tell us before we confirm</strong>
                Your dates, room setup, walking comfort and any must-have experiences.
              </p>
              <p>
                <strong>No pressure to book</strong>
                Ask questions first. No payment is required to send an enquiry.
              </p>
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
                Share your first name and WhatsApp. A China-based specialist will reply with clear
                next steps within 24 hours.
              </p>
              <Link
                className={styles.detailPlanningLink}
                href={`/start-planning?journey=${encodeURIComponent(model.slug)}`}
              >
                Start planning this journey <ArrowUpRight aria-hidden="true" />
              </Link>
              <p className={styles.noPayment}>No payment or booking commitment is required.</p>
            </div>
          </section>
        </div>
        <SiteFooter tone="white" />
        <JourneyMobileCta
          fallbackPrice={price}
          journeySlug={model.slug}
          baseHref={model.whatsappHref}
          journeyTitle={title}
        />
      </PageContainer>
    </JourneyConfigurationProvider>
  );
}
