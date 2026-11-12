import { formatJourneyStartingPrice } from "@/lib/tours/journey-pricing";
/**
 * 本模块职责：行程详情页——把一条行程呈现为一份"私人行程提案"。
 * 输入：TourDetailModel（价格、日程、包含项均来自 catalog 与 content，本组件不另写）。
 * 输出：从首屏、答案摘要、逐日行程到评价与询盘的完整页面。
 * 不负责：价格计算（复用 JourneyConfigurationProvider / JourneyPrice）、结构化数据（在路由层）。
 * 关键规则：核心内容（逐日行程）直接展开在页面中，不藏在弹窗里，保证读者与爬虫都能读到。
 */

import { ArrowRight, Check, Minus } from "@/components/icons/symbols";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { JourneyGallery } from "@/components/media/journey-gallery";
import { JourneyRouteMap } from "@/components/tours/route-map/journey-route-map";
import { journeyCatalog } from "@/content/tours/catalog";
import { journeyTiers } from "@/content/tours/tiers";
import { InlineEnquiryForm } from "@/components/forms/inline-enquiry-form";
import { GuestVoice, TrustLine } from "@/components/trust/trust";
import { JourneyTile } from "@/components/tours/journey-tile";
import { buildExplorerItem } from "@/lib/tours/journey-explorer-items";
import { placeGlossary } from "@/content/tours/card-copy";
import { detailCopy, detailHeroPhotos, journeyPhotos } from "@/content/tours/journeys-curation";
import { RecordViewed } from "@/features/discovery/record-viewed";
import {
  JourneyPrice,
  JourneyWhatsAppAction,
} from "@/features/tours/detail/journey-booking-summary";
import { JourneyConfigurationProvider } from "@/features/tours/detail/journey-configuration";
import { TourDetailAnalytics } from "@/features/tours/detail/tour-detail-interactions";
import { TourFaqAccordion } from "@/features/tours/detail/tour-faq-accordion";
import type { TourDetailModel } from "@/features/tours/detail/tour-detail-model";
import { TourDayItinerary } from "@/features/tours/detail/tour-day-itinerary";
import { getJourneyReadingArticles } from "@/lib/content/journey-journal-links";
import type { JourneyPriceSelection } from "@/lib/tours/journey-price";

import { JourneyDecisionSummary } from "./journey-decision-summary";

import styles from "./tour-journey.module.css";

/** Core first-visit route shows the broader planning collection selected in journey-links. */
const FLAGSHIP_SLUG = "beijing-xian-shanghai-private-10-day-tour";

export function TourDetailLanding({
  model,
  initialSelection,
  originDestinationName,
}: {
  model: TourDetailModel;
  initialSelection?: JourneyPriceSelection;
  originDestinationName?: string;
}) {
  const hero = detailHeroPhotos[model.slug] ??
    journeyPhotos[model.slug] ?? {
      src: model.heroImage.src,
      alt: model.heroImage.alt,
    };
  const price = model.pricingBlock
    ? `From ${model.pricingBlock.from}`
    : model.price?.fromUsd
      ? formatJourneyStartingPrice(model.price.fromUsd)
      : "Individually priced";
  const catalogItem = journeyCatalog.find((item) => item.slug === model.slug);
  const tier = journeyTiers[model.slug as keyof typeof journeyTiers];
  const adjustableNote =
    tier === "signature"
      ? "A starting point, not a fixed package: dates, party size, interests, hotels and pace can all be adjusted."
      : tier === "tailor-made-example"
        ? "An example of a tailored journey. We design the final route around your needs."
        : null;
  const placeNames = model.routeLabel.split(/\s·\s|\sto\s/).filter((name) => placeGlossary[name]);
  const glossary = placeNames.slice(0, 3).map((name) => `${name}: ${placeGlossary[name]}`);
  const fact = (label: string) => model.quickFacts.find((item) => item.label === label)?.value;
  const days = model.days.filter((day) => day.summary);
  const isDayTour = (catalogItem?.recommendedDaysMax ?? 2) <= 1;

  const automaticOthers = journeyCatalog
    .filter((item) => item.slug !== model.slug && item.recommendedDaysMax <= 1 === isDayTour)
    .map((item) => ({
      item,
      score: item.destinationFilters.filter((place) => model.routeLabel.includes(place)).length,
    }))
    .sort((a, b) => b.score - a.score || b.item.commercialPriority - a.item.commercialPriority)
    .slice(0, 3)
    .map(({ item }) => item);
  const others = model.relatedTourHrefs
    ? model.relatedTourHrefs.flatMap((href) =>
        journeyCatalog.filter((item) => item.href === href && item.slug !== model.slug),
      )
    : automaticOthers;
  const guides = getJourneyReadingArticles(model.slug, model.slug === FLAGSHIP_SLUG ? 7 : 3);

  const answer =
    model.answerSummary ??
    [
      `${model.headline} is a private ${isDayTour ? "day tour" : `${model.duration} China journey`}`,
      model.routeLabel ? ` through ${model.routeLabel}` : "",
      ", designed and operated by AVIORA, a licensed China-based tour operator.",
      fact("Ideal for") ? ` Best for ${lowerFirst(fact("Ideal for") ?? "")}.` : "",
    ].join("");

  const answerSentences = Array.from(
    new Intl.Segmenter("en", { granularity: "sentence" }).segment(answer),
    ({ segment }) => segment.trim(),
  ).filter(Boolean);
  const hasLongAnswer = answer.split(/\s+/).length > 70 && answerSentences.length > 1;
  const experienceSentences = Array.from(
    new Intl.Segmenter("en", { granularity: "sentence" }).segment(model.decisionSummary),
    ({ segment }) => segment.trim(),
  ).filter(Boolean);
  const leadWithExperience = hasLongAnswer && experienceSentences.length > 1;
  const leadAnswer = leadWithExperience
    ? experienceSentences[0]
    : hasLongAnswer
      ? answerSentences[0]
      : answer;
  const overviewBody = leadWithExperience
    ? experienceSentences.slice(1).join(" ")
    : model.decisionSummary;
  const serviceSentences = leadWithExperience ? answerSentences : answerSentences.slice(1);

  return (
    <JourneyConfigurationProvider
      basePrice={model.price?.fromUsd}
      initialSelection={initialSelection}
      journeySlug={model.slug}
      duration={model.duration}
      priceBasis={model.price?.basis ?? "Final price confirmed in writing"}
      pricingUnit={model.price?.pricingUnit ?? "per-person"}
      basePartySize={model.price?.basePartySize ?? 2}
    >
      <PageContainer className={`${styles.page}`} tone="white" data-new-tour-detail="true">
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

        <section className={styles.hero} aria-labelledby="journey-title">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className={`${styles.heroImage} motion-settle`}
            style={{ objectPosition: ("position" in hero && hero.position) || "center 45%" }}
          />
          <div className={styles.heroShade} aria-hidden="true" />
          <div className={`${styles.heroBody} motion-drift`}>
            <p className={`${styles.eyebrow} motion-rise`} style={{ ["--i" as string]: 0 }}>
              {model.journeyRoleLabel}
            </p>
            <h1 id="journey-title" className="motion-rise" style={{ ["--i" as string]: 1 }}>
              {model.headline}
            </h1>
            <p className={`${styles.route} motion-rise`} style={{ ["--i" as string]: 2 }}>
              {model.routeLabel} · {model.duration}
            </p>
            <div className="motion-rise" style={{ ["--i" as string]: 3 }}>
              <TrustLine />
            </div>
          </div>
        </section>

        {(catalogItem?.styleFilters.includes("Senior-friendly") ||
          catalogItem?.planningNeedFilters.includes("mobility-aware")) && (
          <div className={styles.suitabilityBar} aria-label="Journey suitability">
            {catalogItem?.styleFilters.includes("Senior-friendly") && <span>Senior-friendly</span>}
            {catalogItem?.planningNeedFilters.includes("mobility-aware") && (
              <span>Mobility-aware</span>
            )}
          </div>
        )}

        <div className={styles.wrap}>
          <section className={styles.mobileOverview} aria-label="Journey at a glance">
            <p className={styles.mobilePriceLabel}>
              {model.price?.fromUsd || model.pricingBlock ? "Starting price" : "Your journey price"}
            </p>
            <div className={styles.mobilePrice}>
              {model.pricingBlock ? (
                <>
                  <strong>{model.pricingBlock.from}</strong>
                  <small>
                    {model.pricingBlock.unit} · {model.pricingBlock.currencyNote}
                  </small>
                </>
              ) : (
                <JourneyPrice fallback={price} journeySlug={model.slug} />
              )}
            </div>
            <p className={styles.mobileBasis}>
              {(
                model.pricingBlock?.note ??
                model.price?.basis ??
                "Prepared around your dates and party. Final services and price are confirmed in writing."
              )
                .split(/(?<=[.!?])\s/)[0]
                .replace(/^Starting price per person, based on /, "Per person, based on ")}
            </p>
            <a className={styles.mobileEnquire} href="#enquire">
              Ask about this journey <ArrowRight size={16} aria-hidden="true" />
            </a>
            <p className={styles.mobileReassurance}>
              No payment to enquire. Personal reply normally within 24 hours.
            </p>
          </section>
          <nav className={styles.sectionNavigation} aria-label="Journey sections">
            {!model.isFramework && days.length > 0 ? (
              <a href="#itinerary">Daily itinerary</a>
            ) : null}
            <a href="#included">Included &amp; excluded</a>
            {model.pricingBlock ? (
              <a href="#pricing">Price details</a>
            ) : (
              <a href="#enquiry">Price details</a>
            )}
            <a href="#faq">Questions</a>
          </nav>
          <dl className={styles.facts}>
            <div>
              <dt>Length</dt>
              <dd>{model.duration}</dd>
            </div>
            <div>
              <dt>Route</dt>
              <dd>{model.routeLabel}</dd>
            </div>
            {fact("Pace") && (
              <div>
                <dt>Pace</dt>
                <dd>{fact("Pace")}</dd>
              </div>
            )}
            <div>
              <dt>{isDayTour ? "Pickup" : "Hotels"}</dt>
              <dd>
                {isDayTour
                  ? (fact("Pickup") ?? "Your hotel")
                  : (fact("Hotels") ?? model.hotelStandard)}
              </dd>
            </div>
          </dl>

          <div className={styles.layout}>
            <div className={styles.main}>
              <section className={styles.summary} aria-label={detailCopy.summaryLead}>
                <p className={styles.answer}>{leadAnswer}</p>
                <JourneyDecisionSummary model={model} />
                <details className={styles.overviewDetails}>
                  <summary>Journey highlights &amp; service notes</summary>
                  <div>
                    <p className={styles.lede}>{overviewBody}</p>
                    {model.signatureMoments.length > 0 && (
                      <ul className={styles.moments}>
                        {model.signatureMoments.map((moment) => (
                          <li key={moment}>{moment}</li>
                        ))}
                      </ul>
                    )}
                    {hasLongAnswer &&
                      serviceSentences.map((sentence) => <p key={sentence}>{sentence}</p>)}
                    {glossary.length > 0 && <p className={styles.gloss}>{glossary.join(" · ")}</p>}
                  </div>
                </details>
                {model.answerSummary && model.lastReviewedLabel && (
                  <p className={styles.footnote}>
                    Product information updated: {model.lastReviewedLabel}. Date-specific services
                    are confirmed before booking.
                  </p>
                )}
              </section>

              {model.routeStops.length > 1 && (
                <section aria-labelledby="route-title">
                  <h2 id="route-title" className={styles.h2}>
                    {detailCopy.routeTitle}
                  </h2>
                  <JourneyRouteMap stops={model.routeMap.stops} />
                </section>
              )}

              {!model.isFramework && days.length > 0 && (
                <section id="itinerary" aria-labelledby="days-title">
                  <h2 id="days-title" className={styles.h2}>
                    {isDayTour ? "The day" : detailCopy.daysTitle}
                  </h2>
                  <p className={styles.note}>{detailCopy.daysNote}</p>
                  <TourDayItinerary days={days} />
                </section>
              )}

              {model.comparison && (
                <section id="compare-durations" aria-labelledby="compare-durations-title">
                  <h2 id="compare-durations-title" className={styles.h2}>
                    {model.comparison.title}
                  </h2>
                  <p className={styles.note}>{model.comparison.intro}</p>
                  <div
                    className={styles.comparisonScroll}
                    role="region"
                    aria-label={model.comparison.title}
                    tabIndex={0}
                  >
                    <table className={styles.comparisonTable}>
                      <caption className={styles.comparisonCaption}>
                        {model.comparison.title}
                      </caption>
                      <thead>
                        <tr>
                          {model.comparison.columns.map((column) => (
                            <th scope="col" key={column}>
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {model.comparison.rows.map(([label, shorter, longer]) => (
                          <tr key={label}>
                            <th scope="row">{label}</th>
                            <td>{shorter}</td>
                            <td>{longer}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Link href={model.comparison.href} className={styles.link}>
                    {model.comparison.linkLabel}
                  </Link>
                </section>
              )}

              {model.visitOptions && (
                <section id="visit-options" aria-labelledby="visit-options-title">
                  <h2 id="visit-options-title" className={styles.h2}>
                    {model.visitOptions.title}
                  </h2>
                  <p className={styles.note}>{model.visitOptions.intro}</p>
                  <dl className={styles.standards}>
                    {model.visitOptions.options.map((option) => (
                      <div key={option.title}>
                        <dt>{option.title}</dt>
                        <dd>
                          <p>{option.description}</p>
                          <p>
                            <strong>Walking: </strong>
                            {option.walking}
                          </p>
                          <p>
                            <strong>Quote: </strong>
                            {option.priceNote}
                          </p>
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className={styles.footnote}>{model.visitOptions.note}</p>
                </section>
              )}

              {model.seniorStandard && (
                <>
                  <section className={styles.senior} aria-labelledby="senior-lead-title">
                    <h2 id="senior-lead-title" className={styles.h2}>
                      Reclaim the joy of discovery, without the strain
                    </h2>
                    <p className={styles.seniorLead}>{model.seniorStandard.lead}</p>
                    <ul className={styles.seniorHighlights}>
                      {model.seniorStandard.highlights.map((item) => (
                        <li key={item.title}>
                          <b>{item.title}</b>
                          <span>{item.body}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className={styles.difference} aria-labelledby="difference-title">
                    <h2 id="difference-title" className={styles.h2}>
                      The AVIORA difference
                    </h2>
                    <div className={styles.differenceGrid}>
                      <div>
                        <h3>{model.seniorStandard.difference.painTitle}</h3>
                        <p>{model.seniorStandard.difference.pain}</p>
                      </div>
                      <div data-solution>
                        <h3>{model.seniorStandard.difference.solutionTitle}</h3>
                        <p>{model.seniorStandard.difference.solution}</p>
                      </div>
                    </div>
                  </section>

                  <section id="care-standard" aria-labelledby="care-title">
                    <h2 id="care-title" className={styles.h2}>
                      {model.seniorStandard.careTitle}
                    </h2>
                    <ol className={styles.careGrid}>
                      {model.seniorStandard.care.map((item, index) => (
                        <li key={item.title}>
                          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                          <b>{item.title}</b>
                          <p>{item.body}</p>
                        </li>
                      ))}
                    </ol>
                  </section>
                </>
              )}

              {model.seniorStandard && (
                <section id="accessibility" aria-labelledby="dining-title">
                  <h2 id="dining-title" className={styles.h2}>
                    {model.seniorStandard.diningTitle}
                  </h2>
                  <p className={styles.note}>{model.seniorStandard.diningIntro}</p>
                  <dl className={styles.standards}>
                    {model.seniorStandard.dining.map((item) => (
                      <div key={item.title}>
                        <dt>{item.title}</dt>
                        <dd>{item.body}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              <section id="included" aria-labelledby="included-title">
                <h2 id="included-title" className={styles.h2}>
                  {detailCopy.includedTitle}
                </h2>
                <p className={styles.note}>{detailCopy.includedNote}</p>
                <div className={styles.coverage}>
                  <div>
                    <h3>Included</h3>
                    <ul>
                      {model.included.map((item) => (
                        <li key={item}>
                          <Check size={16} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3>Not included</h3>
                    <ul className={styles.excluded}>
                      {model.excluded.map((item) => (
                        <li key={item}>
                          <Minus size={16} aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className={styles.footnote}>
                  Your written proposal confirms the exact hotels, transport and services for your
                  dates. <Link href="/terms">Read the booking terms</Link>
                </p>
              </section>

              {model.pricingBlock && (
                <section id="pricing" className={styles.priceBlock} aria-labelledby="pricing-title">
                  <p className={styles.priceEyebrow}>{model.pricingBlock.eyebrow}</p>
                  <h2 id="pricing-title" className={styles.priceHeadline}>
                    <span>Starting from</span>
                    <b>{model.pricingBlock.from}</b>
                    <span>/ {model.pricingBlock.unit.replace("per ", "")}</span>
                  </h2>
                  <p className={styles.priceCurrency}>{model.pricingBlock.currencyNote}</p>
                  <p className={styles.priceNote}>{model.pricingBlock.note}</p>
                  <dl className={styles.priceFactors}>
                    {model.pricingBlock.factors.map((factor) => (
                      <div key={factor.title}>
                        <dt>{factor.title}</dt>
                        <dd>{factor.body}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className={styles.priceRange}>
                    Typical range: <b>{model.pricingBlock.range}</b>
                  </p>
                </section>
              )}

              {model.practicalities && (
                <section id="tour-details" aria-labelledby="tour-details-title">
                  <h2 id="tour-details-title" className={styles.h2}>
                    {isDayTour
                      ? "What this private day tour includes"
                      : "What this private journey includes"}
                  </h2>
                  <details className={styles.serviceDetails}>
                    <summary>Read the full service specification</summary>
                    <dl className={styles.standards}>
                      {model.practicalities.map(({ label, value }) => (
                        <div key={label}>
                          <dt>{label}</dt>
                          <dd>{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                </section>
              )}

              <aside className={styles.serviceRecords} aria-labelledby="service-records-title">
                <h3 id="service-records-title">Check the service behind the itinerary</h3>
                <p>
                  See who operates your trip, how bookings are confirmed and where guest feedback
                  comes from.
                </p>
                <ul>
                  <li>
                    <Link href="/company">Operating company &amp; licensing details</Link>
                  </li>
                  <li>
                    <Link href="/terms">Payment, changes &amp; cancellation terms</Link>
                  </li>
                  <li>
                    <Link href="/reviews">Guest feedback &amp; source information</Link>
                  </li>
                </ul>
              </aside>

              <GuestVoice topic={isDayTour ? "transport" : "pace"} count={1} seed={model.slug} />

              {model.guideProfile && (
                <section aria-labelledby="guides-profile-title">
                  <h2 id="guides-profile-title" className={styles.h2}>
                    {model.guideProfile.title}
                  </h2>
                  <p>{model.guideProfile.description}</p>
                  <ul className={styles.why}>
                    {model.guideProfile.specialists.map((guide) => (
                      <li key={guide.city}>
                        <b>{guide.city}</b>
                        <span>{guide.profile}</span>
                      </li>
                    ))}
                    <li>
                      <b>{model.guideProfile.languagesLabel}</b>
                      <span>{model.guideProfile.languages.join(", ")}</span>
                    </li>
                  </ul>
                </section>
              )}

              <section aria-labelledby="why-title">
                <details className={styles.serviceDetails}>
                  <summary id="why-title">{detailCopy.whyTitle}</summary>

                  <ul className={styles.why}>
                    {detailCopy.why.map((point) => (
                      <li key={point.title}>
                        <b>{point.title}</b>
                        <span>{point.body}</span>
                      </li>
                    ))}
                  </ul>
                </details>
              </section>
              <section id="faq" aria-labelledby="faq-title" className={styles.faq}>
                <h2 id="faq-title" className={styles.h2}>
                  {detailCopy.faqTitle}
                </h2>
                <TourFaqAccordion faqs={model.faqs} journeySlug={model.slug} />
              </section>
            </div>

            <aside className={styles.booking} id="enquiry" aria-label="Plan this journey">
              {model.pricingBlock ? (
                <>
                  <p className={styles.bookingFrom}>Starting from</p>
                  <div className={styles.price}>
                    <strong>{model.pricingBlock.from}</strong>
                    <small>
                      {model.pricingBlock.unit} · {model.pricingBlock.currencyNote}
                    </small>
                  </div>
                  <p className={styles.basis}>{model.pricingBlock.note}</p>
                  <a className={styles.priceLink} href="#pricing">
                    See what moves the price
                  </a>
                </>
              ) : (
                <>
                  {!model.price?.fromUsd ? <p className={styles.bookingFrom}>Pricing</p> : null}
                  <div className={styles.price}>
                    <JourneyPrice fallback={price} journeySlug={model.slug} />
                  </div>

                  <p className={styles.basis}>
                    {catalogItem?.pricing.cardBasis ?? model.price?.basis}
                  </p>
                  <details className={styles.priceDetails}>
                    <summary>Price basis &amp; inclusions</summary>
                    {adjustableNote ? <p>{adjustableNote}</p> : null}
                    <p>{model.price?.basis ?? "Prepared around your dates"}</p>
                    <p>
                      {model.price?.detail ?? "The final proposal confirms the exact services."}
                    </p>
                    <p>{model.price?.note ?? "No payment is required to send an enquiry."}</p>
                    {model.price?.additionalNote ? <p>{model.price.additionalNote}</p> : null}
                  </details>
                </>
              )}
              <div className={styles.bookingForm}>
                <p className={styles.bookingFormTitle}>Plan your journey</p>
                <InlineEnquiryForm
                  planningContext={{
                    currentJourney: { slug: model.slug, title: model.displayTitle },
                    destinationName: originDestinationName,
                  }}
                  placement="tour-detail-aside"
                  journeyTitle={model.displayTitle}
                />
              </div>
              <JourneyWhatsAppAction
                baseHref={model.whatsappHref}
                journeySlug={model.slug}
                journeyTitle={model.displayTitle}
                className={styles.whatsapp}
                placement="detail-booking-card"
              />
              {model.inquiryChecklist ? (
                <>
                  <p className={styles.bookingNote}>For a useful availability check, send:</p>
                  <ul className={styles.experiences}>
                    {model.inquiryChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className={styles.bookingNote}>
                    We check your pickup and chosen route, then confirm the private-group total in
                    writing.
                  </p>
                </>
              ) : (
                <p className={styles.bookingNote}>{detailCopy.bookingNote}</p>
              )}
              <Link className={styles.operator} href="/company">
                Meet the China-based operator
              </Link>
            </aside>
          </div>

          {model.gallery.length > 2 && (
            <JourneyGallery
              images={model.gallery.filter((image) => image.src !== hero.src).slice(0, 8)}
            />
          )}

          {others.length > 0 && (
            <section aria-labelledby="related-title">
              <h2 id="related-title" className={styles.h2}>
                {detailCopy.relatedTitle}
              </h2>
              <div className={styles.relatedTiles}>
                {others.map((item, position) => (
                  <JourneyTile key={item.slug} item={buildExplorerItem(item)} position={position} />
                ))}
              </div>
            </section>
          )}

          {guides.length > 0 && (
            <section aria-labelledby="guides-title">
              <h2 id="guides-title" className={styles.h2}>
                {detailCopy.guidesTitle}
              </h2>
              <div className={styles.guides}>
                {guides.map((article) => (
                  <Link href={article.href} key={article.href}>
                    <b>{article.title}</b>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {[
            { official: true, title: "Official sources and visitor rules", id: "official-sources" },
            { official: false, title: "More planning information", id: "planning-resources" },
          ].map(({ official, title, id }) => {
            const resources = model.planningResources?.filter(
              (resource) => Boolean(resource.officialPublisher) === official,
            );
            if (!resources?.length) return null;
            return (
              <section key={id} aria-labelledby={`${id}-title`}>
                <h2 id={`${id}-title`} className={styles.h2}>
                  {title}
                </h2>
                <ul className={styles.why}>
                  {resources.map((resource) => (
                    <li key={resource.href}>
                      <b>
                        <a href={resource.href}>{resource.label}</a>
                      </b>
                      {resource.officialPublisher && (
                        <span>Publisher: {resource.officialPublisher}</span>
                      )}
                      <span>{resource.description}</span>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <p className={styles.seeAll}>
          <Link href="/tours">See every journey</Link>
        </p>

        <SiteFooter tone="white" />
      </PageContainer>
    </JourneyConfigurationProvider>
  );
}

function lowerFirst(text: string) {
  return text.charAt(0).toLowerCase() + text.slice(1);
}
