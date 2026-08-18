import {
  ArrowUpRight,
  BedDouble,
  CarFront,
  Check,
  ChevronDown,
  CreditCard,
  FileCheck2,
  Gauge,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/footer/site-footer";
import { CinematicJourneyGallery } from "@/components/gallery/cinematic-journey-gallery";
import { PageContainer } from "@/components/layout/page-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { homeNavItems } from "@/content/home/homepage";
import { RecordViewed } from "@/features/discovery/record-viewed";
import { TourDayAccordion } from "@/features/tours/detail/tour-day-accordion";
import {
  TourDetailAnalytics,
  TrackedTourLink,
} from "@/features/tours/detail/tour-detail-interactions";
import type { TourDetailModel } from "@/features/tours/detail/tour-detail-model";
import { TourFaqAccordion } from "@/features/tours/detail/tour-faq-accordion";
import styles from "@/features/tours/detail/tour-detail.module.css";
import { JourneyReading } from "@/features/tours/journey-reading";

export function UnifiedTourDetail({ model }: { model: TourDetailModel }) {
  const firstStop = model.routeStops.at(0)?.name;
  const lastStop = model.routeStops.at(-1)?.name;
  const overviewTitle =
    firstStop && lastStop && firstStop !== lastStop
      ? `${firstStop} to ${lastStop}, privately.`
      : `A private ${model.duration.toLowerCase()} journey.`;

  return (
    <PageContainer className={styles.page} tone="white" data-unified-tour-detail="true">
      <RecordViewed
        item={{
          id: `tour:${model.slug}`,
          type: "tour",
          title: model.title,
          href: `/tours/${model.slug}`,
        }}
      />
      <TourDetailAnalytics journeySlug={model.slug} />
      <SiteNavigation
        items={homeNavItems}
        className="home-navigation-entrance tour-detail-navigation"
        cta={{ label: "Plan My Trip", href: model.planningHref }}
        mobileCta={{ label: "Plan My Trip", href: model.planningHref }}
        journeyDetailTools={{
          journeysLabel: "Journeys",
          journeysHref: "/tours",
          planLabel: "Plan This Journey",
          planHref: model.planningHref,
          journeySlug: model.slug,
        }}
        tone="adaptive"
        variant="default"
      />

      <header className={styles.hero}>
        <div className={styles.heroMedia}>
          <OptimizedImage
            src={model.heroImage.src}
            alt={model.heroImage.alt}
            fill
            sizes="100vw"
            quality={70}
            priority
            frameClassName="absolute inset-0 h-full w-full"
            className={styles.heroImage}
            style={{ objectPosition: model.heroImage.objectPosition ?? "center" }}
          />
          <div className={styles.heroShade} aria-hidden="true" />
        </div>
        <div className={`${styles.shell} ${styles.heroContent}`}>
          <p className={styles.eyebrow}>{model.duration} · Private China tour</p>
          <h1 className={model.title.length <= 36 ? styles.singleLineMobileTitle : undefined}>
            {model.title}
          </h1>
          <div className={styles.heroDecisionRow}>
            {model.price ? (
              <div className={styles.heroPrice}>
                <span>From</span>
                <strong>US${model.price.fromUsd.toLocaleString("en-US")}</strong>
                <small>per person · 4 guests · 2 rooms</small>
              </div>
            ) : null}
            <div className={styles.heroActions}>
              <TrackedTourLink
                className={styles.primaryAction}
                href={model.planningHref}
                journeySlug={model.slug}
                label="Plan My Trip"
                placement="tour-hero-plan"
              >
                Plan My Trip <ArrowUpRight size={16} aria-hidden="true" />
              </TrackedTourLink>
              <TrackedTourLink
                className={styles.secondaryAction}
                href={model.whatsappHref}
                journeySlug={model.slug}
                label="Message an Advisor"
                placement="tour-hero-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                Message an Advisor
              </TrackedTourLink>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section
          className={`${styles.section} ${styles.overview}`}
          aria-labelledby="tour-overview-title"
        >
          <div className={styles.shell}>
            <div className={styles.overviewLayout}>
              <div className={styles.overviewLead}>
                <div className={styles.sectionHeading}>
                  <p className={styles.eyebrow}>Journey overview</p>
                  <h2 id="tour-overview-title">{overviewTitle}</h2>
                  <p>
                    {model.duration} with private guiding, considered pacing and selected four- and
                    five-star hotels.
                  </p>
                </div>
              </div>
              <div className={styles.overviewStage}>
                <div className={styles.overviewGlass}>
                  <div className={styles.routeLine} aria-label={`Route: ${model.route}`}>
                    {model.routeStops.map((stop, index) => (
                      <div key={`${stop.name}-${index}`}>
                        <span className={styles.routeNumber}>
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className={styles.routeName}>{stop.name}</span>
                        {stop.days ? <small>{stop.days}</small> : null}
                      </div>
                    ))}
                  </div>
                  <dl className={styles.factGrid}>
                    {model.quickFacts.map((fact) => (
                      <div key={fact.label}>
                        <QuickFactIcon label={fact.label} />
                        <span>
                          <dt>{fact.label}</dt>
                          <dd>{fact.value}</dd>
                        </span>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
              <p className={styles.overviewAssurance}>
                <span className={styles.assuranceDesktop}>
                  Licensed China operator since 2018. No forced shopping. Personal replies within 24
                  hours.
                </span>
                <span className={styles.assuranceMobile}>
                  Licensed · Since 2018 · No shopping · 24h reply
                </span>
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} id="itinerary" aria-labelledby="itinerary-title">
          <div className={styles.readingShell}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Day by day</p>
              <h2 id="itinerary-title">Your day-by-day itinerary.</h2>
              <p>Open a day to see the experience, transfers, meals and hotel plan.</p>
            </div>
            <TourDayAccordion days={model.days} journeySlug={model.slug} />
          </div>
        </section>

        {model.gallery.length > 1 ? (
          <CinematicJourneyGallery
            images={model.gallery}
            title="The journey, in photographs."
            journeySlug={model.slug}
          />
        ) : null}

        <section
          className={`${styles.section} ${styles.commercial}`}
          id="price"
          aria-labelledby="price-title"
        >
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Private service and price</p>
              <h2 id="price-title">What you are paying for.</h2>
              <p>
                A privately managed journey, selected stays and one China-based team responsible for
                the details from arrival to departure.
              </p>
            </div>

            <div className={styles.hotelPriceGrid}>
              <div className={styles.hotelSummary}>
                <div className={styles.hotelIdentity}>
                  <BedDouble size={22} aria-hidden="true" />
                  <div>
                    <p className={styles.subheading}>Your hotels</p>
                    <h3>Selected 4- and 5-star stays</h3>
                    <p>{model.hotelDestinations.join(" · ")}</p>
                  </div>
                </div>
                <ul className={styles.valueList} aria-label="What this private journey provides">
                  <li>
                    <Check size={15} aria-hidden="true" />
                    <span>
                      <strong>Private throughout.</strong> Guides and transfers are arranged for
                      your party.
                    </span>
                  </li>
                  <li>
                    <Check size={15} aria-hidden="true" />
                    <span>
                      <strong>Named before booking.</strong> Every hotel and room category is listed
                      in your written proposal before you confirm.
                    </span>
                  </li>
                  <li>
                    <Check size={15} aria-hidden="true" />
                    <span>
                      <strong>Support inside China.</strong> One accountable team coordinates every
                      confirmed service.
                    </span>
                  </li>
                </ul>
              </div>
              {model.price ? (
                <div className={styles.priceSummary}>
                  <p className={styles.subheading}>Private journey from</p>
                  <p className={styles.priceAmount}>
                    US${model.price.fromUsd.toLocaleString("en-US")}
                    <span>per person</span>
                  </p>
                  <p>{compactPriceBasis(model.price.basis)}</p>
                  <p className={styles.priceCustomNote}>{model.price.note}</p>
                  <p className={styles.priceStartingPoint}>
                    This is a planning starting point, not a fixed package price. Your written
                    proposal confirms the exact services and total before you book.
                  </p>
                  <div className={styles.priceActions}>
                    <TrackedTourLink
                      className={styles.priceAction}
                      href={model.whatsappHref}
                      journeySlug={model.slug}
                      label="Message An Advisor"
                      placement="tour-price-whatsapp"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Message an advisor about ${model.title} on WhatsApp`}
                    >
                      <MessageCircle size={15} aria-hidden="true" />
                      Message An Advisor
                    </TrackedTourLink>
                    <TrackedTourLink
                      className={styles.priceFormAction}
                      href={model.planningHref}
                      journeySlug={model.slug}
                      label="Get My Tailored Quote"
                      placement="tour-price-form"
                    >
                      <FileCheck2 size={15} aria-hidden="true" />
                      Get My Tailored Quote
                    </TrackedTourLink>
                  </div>
                  <p className={styles.priceReassurance}>
                    Share your dates and group size. Personal reply normally within 24 hours; no
                    booking or payment obligation.
                  </p>
                </div>
              ) : null}
            </div>

            <div className={styles.inclusionDisclosures}>
              <CompactDisclosure title="What's included" items={model.included} icon="check" />
              <CompactDisclosure title="What's not included" items={model.excluded} icon="x" />
            </div>
          </div>
        </section>

        <section
          className={`${styles.section} ${styles.bookingTerms}`}
          id="booking-terms"
          aria-labelledby="booking-terms-title"
        >
          <div className={styles.shell}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Booking with confidence</p>
              <h2 id="booking-terms-title">Clear before you commit.</h2>
              <p>
                Your contract, payment schedule and cancellation terms are confirmed in writing.
              </p>
            </div>
            <div className={styles.bookingGrid}>
              <BookingPoint
                icon={<FileCheck2 size={20} aria-hidden="true" />}
                title="Written confirmation"
                text="Your booking is binding only after the written contract and terms are accepted, the required initial payment clears, and AVIORA confirms the booking in writing."
              />
              <BookingPoint
                icon={<CreditCard size={20} aria-hidden="true" />}
                title="Payment schedule"
                text="Your proposal states the currency, initial payment, balance date and accepted payment method before you commit."
              />
              <BookingPoint
                icon={<RefreshCcw size={20} aria-hidden="true" />}
                title="Changes and cancellation"
                text="The schedule in your accepted proposal or booking confirmation applies, including any supplier costs that become non-refundable."
              />
            </div>
            <div className={styles.bookingFooter}>
              <div className={styles.bookingOperator}>
                <ShieldCheck size={17} aria-hidden="true" />
                <div>
                  <p>China operating company</p>
                  <strong>{siteConfig.operator.englishReferenceName}</strong>
                  <span>Registered in Guangzhou on March 28, 2018 · Licensed inbound operator</span>
                  <small>Credentials are available for verification before payment.</small>
                </div>
              </div>
              <div className={styles.bookingActions}>
                <TrackedTourLink
                  className={styles.termsLink}
                  href="/about"
                  journeySlug={model.slug}
                  label="Verify our China team"
                  placement="tour-trust-about"
                >
                  Verify our China team <ArrowUpRight size={15} aria-hidden="true" />
                </TrackedTourLink>
                <TrackedTourLink
                  className={styles.termsLink}
                  href="/terms"
                  journeySlug={model.slug}
                  label="Full booking terms"
                  placement="tour-trust-terms"
                >
                  Full booking terms <ArrowUpRight size={15} aria-hidden="true" />
                </TrackedTourLink>
              </div>
            </div>
          </div>
        </section>

        {model.faqs.length ? (
          <section className={styles.section} id="faq" aria-labelledby="faq-title">
            <div className={styles.readingShell}>
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>Questions</p>
                <h2 id="faq-title">Before you plan.</h2>
              </div>
              <TourFaqAccordion faqs={model.faqs} journeySlug={model.slug} />
            </div>
          </section>
        ) : null}

        <div className={styles.readingShell}>
          <JourneyReading journeySlug={model.slug} />
        </div>
      </main>

      <SiteFooter
        columns={[
          {
            title: "Journey",
            items: [
              { label: "Overview", href: "#tour-overview-title" },
              { label: "Itinerary", href: "#itinerary" },
              { label: "Hotels and price", href: "#price" },
            ],
          },
          { title: "Explore", items: homeNavItems },
        ]}
        social={siteConfig.socials.map((href) => ({ label: "Social", href }))}
      />
    </PageContainer>
  );
}

function QuickFactIcon({ label }: { label: string }) {
  const Icon =
    label === "Ideal for"
      ? UsersRound
      : label === "Pace"
        ? Gauge
        : label === "Hotels"
          ? BedDouble
          : CarFront;
  return <Icon className={styles.factIcon} size={19} strokeWidth={1.7} aria-hidden="true" />;
}

function BookingPoint({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className={styles.bookingPoint}>
      <span>{icon}</span>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function CompactDisclosure({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon: "check" | "x";
}) {
  const Icon = icon === "check" ? Check : X;
  return (
    <details
      className={`${styles.compactDisclosure} ${
        icon === "check" ? styles.disclosureIncluded : styles.disclosureExcluded
      }`}
    >
      <summary>
        <span>{title}</span>
        <ChevronDown size={17} aria-hidden="true" />
      </summary>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Icon size={14} aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}

function compactPriceBasis(basis: string) {
  const firstSentence = basis.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim();
  return firstSentence ?? basis;
}
