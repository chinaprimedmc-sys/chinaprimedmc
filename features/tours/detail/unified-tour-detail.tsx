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
  UtensilsCrossed,
  X,
} from "lucide-react";
import { Fragment, type ReactNode } from "react";

import { SiteFooter } from "@/components/footer/site-footer";
import { PageClosing } from "@/components/footer/page-closing";
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
  const isAgendaFirstBusinessJourney =
    model.slug === "guangzhou-shenzhen-tailor-made-business-tour-4-day";
  const isMutianyuPrivateDayTour = model.slug === "private-mutianyu-great-wall-day-tour";
  const isPrivateShanghaiDayTour = model.slug === "private-shanghai-day-tour-guide-driver";
  const isPrivateXianTerracottaDayTour = model.slug === "private-xian-terracotta-warriors-day-tour";
  const isPrivateChengduPandaDayTour =
    model.slug === "private-chengdu-panda-day-tour-early-morning";
  const isGuilinLiRiverDayTour = model.slug === "guilin-yangshuo-li-river-cruise-private-day-tour";
  const isPrivateDayTour =
    isMutianyuPrivateDayTour ||
    isPrivateShanghaiDayTour ||
    isPrivateXianTerracottaDayTour ||
    isPrivateChengduPandaDayTour ||
    isGuilinLiRiverDayTour;
  const overviewTitle = model.route
    ? `${model.route.replace(/, ([^,]+)$/, " & $1")}, privately.`
    : `A private ${model.duration.toLowerCase()} journey.`;
  const heroRouteLabels =
    model.routeStops.length > 4
      ? [...model.routeStops.slice(0, 3), model.routeStops.at(-1)!].map((stop) => stop.name)
      : model.routeStops.map((stop) => stop.name);

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
        cta={{ label: model.primaryActionLabel, href: model.planningHref }}
        mobileCta={{ label: model.primaryActionLabel, href: model.planningHref }}
        journeyDetailTools={{
          journeysLabel: "Journeys",
          journeysHref: "/tours",
          planLabel: isAgendaFirstBusinessJourney
            ? "Build My Business Journey"
            : isMutianyuPrivateDayTour
              ? "Check My Date"
              : isPrivateShanghaiDayTour
                ? "Check My Date"
                : isPrivateXianTerracottaDayTour
                  ? "Check My Date"
                  : isPrivateChengduPandaDayTour
                    ? "Check My Date"
                    : isGuilinLiRiverDayTour
                      ? "Check My Cruise Date"
                      : "Plan This Journey",
          planHref: model.planningHref,
          journeySlug: model.slug,
        }}
        tone="adaptive"
        variant="default"
      />

      <header className={styles.hero}>
        <div className={styles.heroMedia}>
          {model.hasPhotography ? (
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
          ) : (
            <div className={styles.heroWithoutPhotography} aria-hidden="true">
              {heroRouteLabels.map((label, index) => (
                <Fragment key={label}>
                  {index ? <i /> : null}
                  <span>{label}</span>
                </Fragment>
              ))}
            </div>
          )}
          <div className={styles.heroShade} aria-hidden="true" />
        </div>
        <div className={`${styles.shell} ${styles.heroContent}`}>
          <p className={styles.eyebrow}>
            {model.journeyRoleLabel} · {model.duration}
          </p>
          <h1 className={model.title.length <= 36 ? styles.singleLineMobileTitle : undefined}>
            {model.title}
          </h1>
          <p className={styles.heroSubtitle}>{model.subtitle}</p>
          <div className={styles.heroDecisionRow}>
            {model.price ? (
              <div className={styles.heroPrice}>
                <span>From</span>
                <strong>US${model.price.fromUsd.toLocaleString("en-US")}</strong>
                <small>
                  {isAgendaFirstBusinessJourney
                    ? "per person · 4-day starting framework · based on 4 guests sharing 2 rooms"
                    : isPrivateShanghaiDayTour
                      ? "per private group of 4 · equivalent to US$168 per guest"
                      : isPrivateXianTerracottaDayTour
                        ? "per private group of 4 · equivalent to US$157 per guest"
                        : isPrivateChengduPandaDayTour
                          ? "per private group of 4 · approximately US$150 per guest"
                          : isGuilinLiRiverDayTour
                            ? "per private group of 4 · Yangshuo finish · US$172 per guest"
                            : isMutianyuPrivateDayTour
                              ? "per person · based on 4 guests traveling privately"
                              : "per person · based on 4 guests sharing 2 rooms"}
                </small>
              </div>
            ) : null}
            <div className={styles.heroActions}>
              <TrackedTourLink
                className={styles.primaryAction}
                href={model.planningHref}
                journeySlug={model.slug}
                label={model.primaryActionLabel}
                placement="tour-hero-plan"
              >
                {model.primaryActionLabel} <ArrowUpRight size={16} aria-hidden="true" />
              </TrackedTourLink>
              <TrackedTourLink
                className={styles.secondaryAction}
                href={model.whatsappHref}
                journeySlug={model.slug}
                label={model.whatsappActionLabel}
                placement="tour-hero-whatsapp"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                {model.whatsappActionLabel}
              </TrackedTourLink>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.decisionGuide} aria-labelledby="journey-difference-title">
          <div className={`${styles.shell} ${styles.decisionGuideInner}`}>
            <div className={styles.decisionGuideCopy}>
              <p className={styles.eyebrow}>Why choose this journey</p>
              <h2 id="journey-difference-title">What makes this journey different.</h2>
              <p>{model.decisionSummary}</p>
            </div>
            <ol className={styles.signatureMoments} aria-label="Signature journey moments">
              {model.signatureMoments.map((moment, index) => (
                <li key={moment}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{moment}</strong>
                </li>
              ))}
            </ol>
          </div>
        </section>
        {model.experienceChapters?.length ? (
          <section className={styles.experiencePreview} aria-labelledby="experience-preview-title">
            <div className={styles.shell}>
              <div className={styles.experiencePreviewIntro}>
                <p className={styles.eyebrow}>What you will actually experience</p>
                <h2 id="experience-preview-title">
                  {isAgendaFirstBusinessJourney
                    ? "Five parts you can move around your agenda."
                    : isPrivateShanghaiDayTour
                      ? "Four Shanghai chapters you can already picture."
                      : isPrivateXianTerracottaDayTour
                        ? "Four Xi'an chapters that make the army make sense."
                        : isPrivateChengduPandaDayTour
                          ? "Four Chengdu chapters built around a better panda morning."
                          : isGuilinLiRiverDayTour
                            ? "Four chapters from Guilin pickup to your chosen finish."
                            : isMutianyuPrivateDayTour
                              ? "A Great Wall day with the loose ends handled."
                              : "Five chapters you can already picture."}
                </h2>
                <p>
                  {isAgendaFirstBusinessJourney
                    ? "These are planning modules, not fixed appointments. Keep, move, shorten or replace them after your flights and business commitments are placed."
                    : isMutianyuPrivateDayTour
                      ? "Your hotel, tickets, route, optional mountain transport and return are checked in advance, then the Wall is explored at a pace that fits the people traveling."
                      : isPrivateXianTerracottaDayTour
                        ? "Your hotel, passport-linked admission, museum route, private vehicle and return are checked in advance, so you can focus on what the army actually reveals."
                        : isPrivateChengduPandaDayTour
                          ? "Your early pickup, public admission, private vehicle and guide are confirmed in advance, then the panda-base route adapts to live openings, crowds, weather and visible animal activity."
                          : isGuilinLiRiverDayTour
                            ? "Your hotel pickup, public cruise ticket, port, luggage plan and finish are connected in advance, so the one-way river journey does not leave you solving transport after arrival."
                            : "This is not simply a list of places. Here is what will be in front of you, what you will take part in and why each chapter earns its place in the journey."}
                </p>
              </div>
              <ol className={styles.experienceChapterList}>
                {model.experienceChapters.map((chapter, index) => (
                  <li key={`${chapter.location}-${chapter.days}`}>
                    <div className={styles.experienceChapterLabel}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{chapter.location}</p>
                      <small>{chapter.days}</small>
                    </div>
                    <div className={styles.experienceChapterStory}>
                      <h3>{chapter.title}</h3>
                      <p>{chapter.description}</p>
                    </div>
                    <dl className={styles.experienceChapterDetails}>
                      <div>
                        <dt>See</dt>
                        <dd>{chapter.see}</dd>
                      </div>
                      <div>
                        <dt>Do</dt>
                        <dd>{chapter.do}</dd>
                      </div>
                      <div>
                        <dt>Feel</dt>
                        <dd>{chapter.feel}</dd>
                      </div>
                    </dl>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        ) : null}
        {model.planningSupport ? (
          <section className={styles.serviceStandard} aria-labelledby="service-standard-title">
            <div className={styles.shell}>
              <div className={styles.serviceStandardIntro}>
                <p className={styles.eyebrow}>{model.planningSupport.eyebrow}</p>
                <h2 id="service-standard-title">{model.planningSupport.title}</h2>
                <p>{model.planningSupport.description}</p>
              </div>
              <div className={styles.serviceStandardGrid}>
                {model.planningSupport.items.map((item, index) => (
                  <article key={item.label}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item.label}</h3>
                      <strong>{item.value}</strong>
                      {item.helper ? <p>{item.helper}</p> : null}
                    </div>
                  </article>
                ))}
              </div>
              <p className={styles.serviceStandardNote}>
                <UtensilsCrossed size={17} aria-hidden="true" />
                <span>{model.planningSupport.note}</span>
              </p>
            </div>
          </section>
        ) : null}
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
                    {isAgendaFirstBusinessJourney
                      ? "Usually 4–7 days, with the exact length, cities and services shaped around your fixed business agenda."
                      : isMutianyuPrivateDayTour
                        ? "A private, professionally prepared Great Wall day from your Beijing hotel, with no overnight stay required."
                        : isPrivateXianTerracottaDayTour
                          ? "A private, professionally prepared Terracotta Warriors day from your central Xi'an hotel, with no overnight stay required."
                          : isPrivateChengduPandaDayTour
                            ? "A private, responsibly prepared panda and Chengdu culture day from your central hotel, with no overnight stay required."
                            : isGuilinLiRiverDayTour
                              ? "A four-star public Li River cruise connected by private hotel pickup, guide, road vehicle, luggage handling and the finish your itinerary actually needs."
                              : isPrivateShanghaiDayTour
                                ? "A private, professionally prepared Shanghai city day from your central hotel, with no overnight stay required."
                                : `${model.duration} with private guiding, considered pacing and ${model.hotelStandard.toLowerCase()}.`}
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
              <p className={styles.eyebrow}>
                {isAgendaFirstBusinessJourney
                  ? "Sample 4-day framework"
                  : isMutianyuPrivateDayTour
                    ? "Your day, from hotel pickup to return"
                    : isGuilinLiRiverDayTour
                      ? "Your day, from Guilin pickup to your chosen finish"
                      : "Day by day"}
              </p>
              <h2 id="itinerary-title">
                {isAgendaFirstBusinessJourney
                  ? "A sample framework, rebuilt around you."
                  : "Your day-by-day itinerary."}
              </h2>
              <p>
                {isAgendaFirstBusinessJourney
                  ? "Open a day to see one workable starting version. Choose 4, 5, 6 or 7 days—or another duration—and we rebuild it around your fixed meetings and flights."
                  : isMutianyuPrivateDayTour
                    ? "Open the day to see what is already included, what remains optional and how the route is adapted to your group."
                    : isGuilinLiRiverDayTour
                      ? "Open the day to see how the port, public cruise, luggage, Yangshuo chapter and two finish choices connect."
                      : "Open a day to see the experience, transfers, meals and hotel plan."}
              </p>
            </div>
            <TourDayAccordion days={model.days} journeySlug={model.slug} />
          </div>
        </section>

        {isPrivateDayTour && model.optionalExperiences?.length ? (
          <section
            className={`${styles.section} ${styles.optionalChoices}`}
            aria-labelledby="optional-choices-title"
          >
            <div className={styles.shell}>
              <div className={styles.sectionHeading}>
                <p className={styles.eyebrow}>Transparent optional choices</p>
                <h2 id="optional-choices-title">
                  {isPrivateShanghaiDayTour
                    ? "Add only the Shanghai experiences you want."
                    : isPrivateXianTerracottaDayTour
                      ? "Add only the Xi'an experiences that matter to you."
                      : isPrivateChengduPandaDayTour
                        ? "Add only the Chengdu experiences that improve your day."
                        : isGuilinLiRiverDayTour
                          ? "Choose your finish, then add only what fits."
                          : "Choose your way up and down."}
                </h2>
                <p>
                  {isPrivateShanghaiDayTour
                    ? "Yu Garden admission and the ordinary Huangpu ferry are already included. Each upgrade states whether its price covers admission, an experience, additional private service time or a combination of them."
                    : isPrivateXianTerracottaDayTour
                      ? "Terracotta Warriors admission and the private museum day are already included. Each upgrade states whether its price covers admission, an experience, added private service time or a combination of them."
                      : isPrivateChengduPandaDayTour
                        ? "Standard Panda Base admission, private transport, guide and the People's Park chapter are already included. Each upgrade states whether it covers food, tea, an experience or additional private service time."
                        : isGuilinLiRiverDayTour
                          ? "The four-star public cruise ticket, private Guilin pickup, guide, Yangshuo vehicle and Yangshuo-finish luggage plan are already included. The Guilin return and other additions are priced separately."
                          : "Admission and the scenic-area shuttle are already included. These are optional operator services, shown separately so you only pay for the route that suits your group."}
                </p>
              </div>
              <div className={styles.optionalChoiceGrid}>
                {model.optionalExperiences.map((experience) => (
                  <article key={experience.title}>
                    <div className={styles.optionalChoiceBadges}>
                      {experience.badges.map((badge) => (
                        <span key={badge}>{badge}</span>
                      ))}
                    </div>
                    <h3>{experience.title}</h3>
                    <p>{experience.description}</p>
                  </article>
                ))}
              </div>
              <p className={styles.optionalChoiceNote}>
                {isPrivateShanghaiDayTour
                  ? "Optional experiences are subject to date-specific availability. The exact timing, tickets, added service hours and total are confirmed in writing before you pay."
                  : isPrivateXianTerracottaDayTour
                    ? "Optional experiences are subject to date-specific availability. The exact host, admission, added service hours and total are confirmed in writing before you pay."
                    : isPrivateChengduPandaDayTour
                      ? "Optional experiences are subject to date-specific availability. The exact menu, host, tickets, added service hours and total are confirmed in writing before you pay."
                      : isGuilinLiRiverDayTour
                        ? "Cruise tickets and optional experiences are date-specific. The assigned port, sailing, chosen finish, luggage plan, eligibility rules, added service time and exact total are confirmed in writing before you pay."
                        : "Final mountain-transport prices follow the scenic-area operator's confirmed rate for your date. Toboggan, chairlift and cable-car operation remain subject to live weather, maintenance and safety decisions."}
              </p>
            </div>
          </section>
        ) : null}

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
                {isMutianyuPrivateDayTour
                  ? "A fully private Great Wall day with the address, tickets, vehicle, route and return plan handled by one China-based team."
                  : isPrivateShanghaiDayTour
                    ? "A fully private Shanghai day with the hotel pickup, guide, vehicle, Yu Garden admission, river crossing and return plan handled by one China-based team."
                    : isPrivateXianTerracottaDayTour
                      ? "A fully private Xi'an day with hotel pickup, passport-linked museum admission, guide, vehicle, Old City chapter and return handled by one China-based team."
                      : isPrivateChengduPandaDayTour
                        ? "A fully private Chengdu day with early hotel pickup, Panda Base admission, guide, vehicle, People's Park chapter and return handled by one China-based team."
                        : isGuilinLiRiverDayTour
                          ? "A shared four-star Li River cruise with the private hotel pickup, port transfer, guide, luggage, Yangshuo land chapter and chosen finish handled by one China-based team."
                          : "A privately managed journey, selected stays and one China-based team responsible for the details from arrival to departure."}
              </p>
            </div>

            <div className={styles.hotelPriceGrid}>
              <div className={styles.hotelSummary}>
                <div className={styles.hotelIdentity}>
                  {isPrivateDayTour ? (
                    <CarFront size={22} aria-hidden="true" />
                  ) : (
                    <BedDouble size={22} aria-hidden="true" />
                  )}
                  <div>
                    <p className={styles.subheading}>
                      {isPrivateDayTour
                        ? isGuilinLiRiverDayTour
                          ? "Your pickup and chosen finish"
                          : "Your pickup and return"
                        : "Your hotels"}
                    </p>
                    <h3>
                      {isPrivateDayTour
                        ? isGuilinLiRiverDayTour
                          ? "Guilin pickup · Yangshuo finish or Guilin return"
                          : isPrivateChengduPandaDayTour
                            ? "Door-to-door central Chengdu service"
                            : isPrivateXianTerracottaDayTour
                              ? "Door-to-door central Xi'an service"
                              : isPrivateShanghaiDayTour
                                ? "Door-to-door central Shanghai service"
                                : "Door-to-door Beijing service"
                        : model.hotelStandard}
                    </h3>
                    <p>
                      {isPrivateDayTour
                        ? isGuilinLiRiverDayTour
                          ? "Your central Guilin hotel to the final address confirmed in writing"
                          : isPrivateChengduPandaDayTour
                            ? "Your central Chengdu hotel or confirmed central address"
                            : isPrivateXianTerracottaDayTour
                              ? "Your central Xi'an hotel or confirmed central address"
                              : isPrivateShanghaiDayTour
                                ? "Your central Shanghai hotel or confirmed central address"
                                : "Your Beijing hotel or confirmed central address"
                        : model.hotelDestinations.join(" · ")}
                    </p>
                  </div>
                </div>
                <ul className={styles.valueList} aria-label="What this private journey provides">
                  <li>
                    <Check size={15} aria-hidden="true" />
                    <span>
                      <strong>
                        {isGuilinLiRiverDayTour
                          ? "Private handling around the public cruise."
                          : "Private throughout."}
                      </strong>{" "}
                      {isGuilinLiRiverDayTour
                        ? "Your guide and road transport are private; the scheduled four-star vessel is shared with other passengers."
                        : "Guides and transfers are arranged for your party."}
                    </span>
                  </li>
                  <li>
                    <Check size={15} aria-hidden="true" />
                    <span>
                      <strong>
                        {isPrivateDayTour ? "Clear before the day." : "Named before booking."}
                      </strong>{" "}
                      {isPrivateDayTour
                        ? isGuilinLiRiverDayTour
                          ? "Your pickup, cruise category, known port, luggage plan, finish, service window and selected upgrades are stated before you confirm."
                          : isPrivateChengduPandaDayTour
                            ? "Your early pickup, admission basis, Panda Base plan, service window and selected upgrades are stated before you confirm."
                            : isPrivateXianTerracottaDayTour
                              ? "Your pickup, passport-linked admission, museum plan, service window and selected upgrades are stated before you confirm."
                              : isPrivateShanghaiDayTour
                                ? "Your pickup, Yu Garden admission, ferry plan, service window and selected upgrades are stated before you confirm."
                                : "Your pickup, ticket plan, service window and selected mountain transport are stated before you confirm."
                        : "Every hotel and room category is listed in your written proposal before you confirm."}
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
                    <span>
                      {isPrivateShanghaiDayTour ||
                      isPrivateXianTerracottaDayTour ||
                      isPrivateChengduPandaDayTour ||
                      isGuilinLiRiverDayTour
                        ? "per private group of 4"
                        : "per person"}
                    </span>
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
                      label={model.whatsappActionLabel}
                      placement="tour-price-whatsapp"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Message an advisor about ${model.title} on WhatsApp`}
                    >
                      <MessageCircle size={15} aria-hidden="true" />
                      {model.whatsappActionLabel}
                    </TrackedTourLink>
                    <TrackedTourLink
                      className={styles.priceFormAction}
                      href={model.planningHref}
                      journeySlug={model.slug}
                      label={model.primaryActionLabel}
                      placement="tour-price-form"
                    >
                      <FileCheck2 size={15} aria-hidden="true" />
                      {model.primaryActionLabel}
                    </TrackedTourLink>
                  </div>
                  <p className={styles.priceReassurance}>
                    Share your dates and group size. Personal reply normally within 24 hours; no
                    booking or payment obligation.
                  </p>
                  {model.lastReviewedLabel ? (
                    <p className={styles.priceReviewDate}>
                      Itinerary and published price basis reviewed {model.lastReviewedLabel}.
                    </p>
                  ) : null}
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

      <PageClosing intent="tour" primaryHref={model.planningHref} journeySlug={model.slug} />

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
