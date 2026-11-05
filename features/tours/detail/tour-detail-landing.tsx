/**
 * 本模块职责：行程详情页——把一条行程呈现为一份"私人行程提案"。
 * 输入：TourDetailModel（价格、日程、包含项均来自 catalog 与 content，本组件不另写）。
 * 输出：从首屏、答案摘要、逐日行程到评价与询盘的完整页面。
 * 不负责：价格计算（复用 JourneyConfigurationProvider / JourneyPrice）、结构化数据（在路由层）。
 * 关键规则：核心内容（逐日行程）直接展开在页面中，不藏在弹窗里，保证读者与爬虫都能读到。
 */

import { ArrowRight, Check, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
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
  JourneyMobileCta,
  JourneyPrice,
  JourneyWhatsAppAction,
} from "@/features/tours/detail/journey-booking-summary";
import { JourneyConfigurationProvider } from "@/features/tours/detail/journey-configuration";
import { TourDetailAnalytics } from "@/features/tours/detail/tour-detail-interactions";
import { TourFaqAccordion } from "@/features/tours/detail/tour-faq-accordion";
import type { TourDetailModel } from "@/features/tours/detail/tour-detail-model";
import { getJourneyReadingArticles } from "@/lib/content/journey-journal-links";
import type { JourneyPriceSelection } from "@/lib/tours/journey-price";

import styles from "./tour-journey.module.css";

/** 旗舰行程：专家指南区使用 2027 规划标题，并优先链接三篇长者专项文章。 */
const FLAGSHIP_SLUG = "beijing-xian-shanghai-private-10-day-tour";

export function TourDetailLanding({
  model,
  initialSelection,
}: {
  model: TourDetailModel;
  initialSelection?: JourneyPriceSelection;
}) {
  const hero = detailHeroPhotos[model.slug] ??
    journeyPhotos[model.slug] ?? {
      src: model.heroImage.src,
      alt: model.heroImage.alt,
    };
  const price = model.pricingBlock
    ? `From ${model.pricingBlock.from}`
    : model.price?.fromUsd
      ? `US$${model.price.fromUsd.toLocaleString("en-US")}`
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

  const others = journeyCatalog
    .filter((item) => item.slug !== model.slug && item.recommendedDaysMax <= 1 === isDayTour)
    .map((item) => ({
      item,
      score: item.destinationFilters.filter((place) => model.routeLabel.includes(place)).length,
    }))
    .sort((a, b) => b.score - a.score || b.item.commercialPriority - a.item.commercialPriority)
    .slice(0, 3)
    .map(({ item }) => item);
  const guides = getJourneyReadingArticles(model.slug).slice(0, 3);

  const answer = [
    `${model.headline} is a private ${isDayTour ? "day tour" : `${model.duration} China journey`}`,
    model.routeLabel ? ` through ${model.routeLabel}` : "",
    ", designed and operated by AVIORA, a licensed China-based tour operator.",
    fact("Ideal for") ? ` Best for ${lowerFirst(fact("Ideal for") ?? "")}.` : "",
  ].join("");

  return (
    <JourneyConfigurationProvider
      basePrice={model.price?.fromUsd}
      initialSelection={initialSelection}
      journeySlug={model.slug}
      duration={model.duration}
      priceBasis={model.price?.basis ?? "Final price confirmed in writing"}
      pricingUnit={model.price?.pricingUnit ?? "per-person"}
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

        <div className={styles.wrap}>
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
                <p className={styles.answer}>{answer}</p>
                <p className={styles.lede}>{model.decisionSummary}</p>
                {glossary.length > 0 && <p className={styles.gloss}>{glossary.join(" · ")}</p>}
                {model.signatureMoments.length > 0 && (
                  <ul className={styles.moments}>
                    {model.signatureMoments.map((moment) => (
                      <li key={moment}>{moment}</li>
                    ))}
                  </ul>
                )}
              </section>

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

              {model.routeStops.length > 1 && (
                <section aria-labelledby="route-title">
                  <h2 id="route-title" className={styles.h2}>
                    {detailCopy.routeTitle}
                  </h2>
                  <ol className={styles.stops}>
                    {model.routeStops.map((stop) => (
                      <li key={stop.name}>
                        <b>{stop.name}</b>
                        {stop.days && <span>{stop.days}</span>}
                        {placeGlossary[stop.name] && <small>{placeGlossary[stop.name]}</small>}
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              {!model.isFramework && days.length > 0 && (
                <section id="itinerary" aria-labelledby="days-title">
                  <h2 id="days-title" className={styles.h2}>
                    {isDayTour ? "The day" : detailCopy.daysTitle}
                  </h2>
                  <p className={styles.note}>{detailCopy.daysNote}</p>
                  <ol className={styles.days}>
                    {days.map((day, index) => (
                      <li key={day.label} className={styles.day}>
                        {day.image && index !== days.length - 1 && (
                          <div className={styles.dayPhoto}>
                            <Image
                              src={day.image.src}
                              alt={day.image.alt}
                              fill
                              sizes="(max-width: 900px) 100vw, 60vw"
                            />
                          </div>
                        )}
                        <p className={styles.dayLabel}>
                          {day.label} · {day.destination}
                        </p>
                        <h3>{day.title}</h3>
                        <p>{day.summary}</p>
                        {day.experiences.length > 0 && (
                          <ul className={styles.experiences}>
                            {day.experiences.map((experience) => (
                              <li key={experience.title}>
                                <b>{experience.title}</b>
                                {experience.description && <span>{experience.description}</span>}
                              </li>
                            ))}
                          </ul>
                        )}
                        {day.guideInsight && (
                          <blockquote className={styles.insight}>{day.guideInsight}</blockquote>
                        )}
                        {(day.transit || day.steps) && (
                          <dl className={styles.dayMetrics}>
                            {day.transit && (
                              <div>
                                <dt>Transit</dt>
                                <dd>{day.transit}</dd>
                              </div>
                            )}
                            {day.steps && (
                              <div>
                                <dt>Daily step budget</dt>
                                <dd>{day.steps}</dd>
                              </div>
                            )}
                          </dl>
                        )}
                        <dl className={styles.dayMeta}>
                          <div>
                            <dt>Stay</dt>
                            <dd>{day.stay}</dd>
                          </div>
                          <div>
                            <dt>Meals</dt>
                            <dd>{day.meals}</dd>
                          </div>
                          <div>
                            <dt>Travel</dt>
                            <dd>{day.transport}</dd>
                          </div>
                        </dl>
                      </li>
                    ))}
                  </ol>
                </section>
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

              <GuestVoice topic={isDayTour ? "transport" : "hotels"} count={2} seed={model.slug} />

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

              <GuestVoice topic="guides" count={2} seed={model.slug} />

              <section aria-labelledby="why-title">
                <h2 id="why-title" className={styles.h2}>
                  {detailCopy.whyTitle}
                </h2>
                <ul className={styles.why}>
                  {detailCopy.why.map((point) => (
                    <li key={point.title}>
                      <b>{point.title}</b>
                      <span>{point.body}</span>
                    </li>
                  ))}
                </ul>
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
                  <p className={styles.bookingFrom}>
                    {model.price?.fromUsd
                      ? `From · ${model.price.pricingUnit === "private-group" ? "per private group" : "per person"}`
                      : "Pricing"}
                  </p>
                  <div className={styles.price}>
                    <JourneyPrice fallback={price} journeySlug={model.slug} />
                  </div>
                  <p className={styles.basis}>
                    {model.price?.basis ?? "Prepared around your dates"}
                  </p>
                  {adjustableNote ? <p className={styles.basis}>{adjustableNote}</p> : null}
                  <details className={styles.priceDetails}>
                    <summary>How this price is set</summary>
                    <p>
                      {model.price?.detail ?? "The final proposal confirms the exact services."}
                    </p>
                    <p>{model.price?.note ?? "No payment is required to send an enquiry."}</p>
                    {model.price?.additionalNote ? <p>{model.price.additionalNote}</p> : null}
                  </details>
                </>
              )}
              <div className={styles.bookingForm}>
                <p className={styles.bookingFormTitle}>Tell us about your trip</p>
                <InlineEnquiryForm placement="tour-detail-aside" />
              </div>
              <JourneyWhatsAppAction
                baseHref={model.whatsappHref}
                journeySlug={model.slug}
                journeyTitle={model.displayTitle}
                className={styles.whatsapp}
                placement="detail-booking-card"
              />
              <p className={styles.bookingNote}>{detailCopy.bookingNote}</p>
              <Link className={styles.operator} href="/company">
                Meet the China-based operator
              </Link>
            </aside>
          </div>

          <GuestVoice
            topic="pace"
            count={3}
            seed={model.slug}
            title="Guests on the pace and comfort"
          />

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
                {model.slug === FLAGSHIP_SLUG
                  ? "Expert Guides & 2027 Planning Advice"
                  : detailCopy.guidesTitle}
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

          <section id="faq" aria-labelledby="faq-title" className={styles.faq}>
            <h2 id="faq-title" className={styles.h2}>
              {detailCopy.faqTitle}
            </h2>
            <TourFaqAccordion
              faqs={model.faqs.slice(0, model.faqLimit ?? 6)}
              journeySlug={model.slug}
            />
          </section>
        </div>

        <p className={styles.seeAll}>
          <Link href="/tours">See every journey</Link>
        </p>

        <SiteFooter tone="white" />
        <JourneyMobileCta
          fallbackPrice={price}
          journeySlug={model.slug}
          baseHref={model.whatsappHref}
          journeyTitle={model.displayTitle}
        />
      </PageContainer>
    </JourneyConfigurationProvider>
  );
}

function lowerFirst(text: string) {
  return text.charAt(0).toLowerCase() + text.slice(1);
}
