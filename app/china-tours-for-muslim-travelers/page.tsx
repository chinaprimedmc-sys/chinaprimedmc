import type { Metadata } from "next";
import Link from "next/link";
import { TrackedLink } from "@/components/cta/tracked-link";

import { SiteNavigation } from "@/components/navigation/site-navigation";
import { SiteFooter } from "@/components/footer/site-footer";
import { PageContainer } from "@/components/layout/page-container";
import { JsonLd } from "@/lib/seo/json-ld";
import {
  createTravelGuideMetadata,
  travelGuideBreadcrumb,
  travelGuideSchema,
} from "@/lib/seo/travel-guide";
import {
  TravelGuideByline,
  TravelGuideOverview,
  TravelGuideAnswers,
  TravelGuideReading,
} from "@/components/travel-guides/search-support";
import { siteConfig } from "@/config/site";
import styles from "../china-family-tours/family.module.css";

const title = "Private China Tours for Muslim Travelers, Thoughtfully Planned.";
const planningHref =
  "/start-planning?preference=Halal%20dining%20and%20prayer%20planning&source=muslim-travel-guide";
const contents = [
  ["your-priorities", "Begin with your priorities"],
  ["halal-dining", "Halal dining and verification"],
  ["prayer", "Prayer time and mosque visits"],
  ["routes", "Routes and destinations"],
  ["hotels", "Hotels and breakfast"],
  ["ramadan", "Travel during Ramadan"],
  ["travel-days", "Family and travel days"],
  ["planning", "Costs and written arrangements"],
  ["planning-answers", "More planning answers"],
  ["questions", "Common questions"],
  ["reading-next", "Guides and journeys to compare"],
] as const;

const questions = [
  [
    "Are all meals on a private China tour halal?",
    "Only the meals and arrangements specified in your confirmed booking should be treated as included. Tell us your halal requirements before the route is finalized. A private tour, a vegetarian dish or a restaurant’s no-pork statement does not by itself establish that a meal meets your requirements.",
  ],
  [
    "Does AVIORA provide halal certification?",
    "This guide does not claim that AVIORA is a halal certification body or that all proposed suppliers hold a particular certification. If certification is essential, specify the evidence and certifying authority you accept. Any available supplier documentation should be reviewed before you agree to the arrangement.",
  ],
  [
    "Can we include a mosque visit or Friday prayer?",
    "We can discuss the request when planning the route. The particular mosque’s opening, worship access, visitor arrangements and facilities need to be checked. Tell us whether the purpose is worship, a cultural visit or both, and whether access for women is essential.",
  ],
  [
    "Can you arrange halal breakfast at the hotel?",
    "Ask before booking the property. A hotel buffet or a breakfast inclusion does not establish halal preparation. We can discuss the hotel’s information and possible alternatives, but a specific arrangement should be treated as requested until confirmed in writing.",
  ],
  [
    "Can we travel in China during Ramadan?",
    "A trip can be discussed around your intended fasting practice, meal timing, rest and prayer priorities. Check whether suitable suhoor and iftar arrangements are actually available for the proposed dates and locations. Early transport departures and long excursions need particular attention.",
  ],
  [
    "Can we request a Muslim guide?",
    "You may state the request, but a guide’s faith or particular religious knowledge should not be assumed. Availability must be checked separately for your language, dates and destinations. Tell us which practical skills and requirements are essential so the proposed service can be assessed.",
  ],
] as const;

export const metadata: Metadata = createTravelGuideMetadata("muslim");

export default function MuslimTravelPage() {
  return (
    <PageContainer tone="white" className={styles.page}>
      <SiteNavigation />
      <JsonLd id="muslim-guide-breadcrumb" data={travelGuideBreadcrumb("muslim")} />
      <JsonLd id="muslim-guide-article" data={travelGuideSchema("muslim", title)} />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/about">About AVIORA</Link>
          <span aria-hidden="true">/</span>
          <span>Muslim travelers</span>
        </nav>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Private China travel for Muslim travelers</p>
          <h1>{title}</h1>
          <p className={styles.subtitle}>
            Explore China through your interests, with dining, prayer and daily rhythm discussed
            from the beginning.
          </p>
          <TravelGuideByline />
          <TrackedLink
            href={planningHref}
            className={styles.button}
            trackingLabel="Discuss this journey"
            trackingPlacement="guide-hero"
          >
            Discuss your travel requirements <span aria-hidden="true">↗</span>
          </TrackedLink>
        </header>
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="In this Muslim travel guide">
            <p>In this guide</p>
            <ol>
              {contents.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className={styles.article} aria-label="China travel guide for Muslim travelers">
            <TravelGuideOverview id="muslim" />
            <div className={styles.introduction}>
              <p>
                AVIORA plans private China journeys around your interests and practical
                requirements. For Muslim travelers, that begins with a clear discussion of halal
                dining, prayer arrangements, accommodation and the shape of each travel day.
                Specific supplier arrangements are checked before booking.
              </p>
              <p>
                You may be visiting China for its history, landscapes, food or time together as a
                family. Those reasons belong at the center of the route. Planning meals and worship
                alongside the sightseeing helps you judge which itinerary works for you and what
                needs further confirmation.
              </p>
            </div>

            <section id="your-priorities">
              <h2>What should a China tour for Muslim travelers include?</h2>
              <p>
                A useful proposal connects your chosen destinations with the meal arrangements,
                prayer opportunities and hotel details you require. The phrase “Muslim-friendly” is
                too broad to describe those services on its own.
              </p>
              <p>
                Travelers differ in the evidence they accept for halal dining, their preferences for
                worship arrangements and the services they want included. Explain your own
                requirements so we can assess the proposed route against them.
              </p>
              <dl className={styles.factList}>
                <div>
                  <dt>Dining</dt>
                  <dd>
                    Which meals do you want arranged, what halal evidence do you require and what
                    preparation details matter to you?
                  </dd>
                </div>
                <div>
                  <dt>Prayer</dt>
                  <dd>
                    Do you want mosque visits, time to return to the hotel or another particular
                    arrangement during outings?
                  </dd>
                </div>
                <div>
                  <dt>Accommodation</dt>
                  <dd>
                    Are breakfast, room facilities, restaurant proximity or particular privacy
                    requirements essential?
                  </dd>
                </div>
                <div>
                  <dt>Travel dates</dt>
                  <dd>
                    Will your journey fall during Ramadan, include Friday prayer or coincide with
                    another date important to your party?
                  </dd>
                </div>
              </dl>
              <p>
                Tell us which requests are essential to booking and which are preferences. That
                distinction helps us explain whether a proposed service meets your needs or whether
                an alternative should be considered.
              </p>
            </section>

            <section id="halal-dining">
              <h2>How should halal dining in China be checked?</h2>
              <p>
                Halal dining needs to be assessed at the restaurant and meal level. A destination
                name, a dish description or a general promise of “no pork” does not establish
                ingredients, sourcing or preparation practices.
              </p>
              <p>
                The Chinese term <span lang="zh-CN">清真</span> (qingzhen) is useful when discussing
                halal food. A sign or listing is a starting point for enquiries; it does not answer
                every question about certification, current operations or the standards you require.
              </p>
              <h3>Start with the evidence you need.</h3>
              <p>
                If you require certification, tell us which authority or documentation you accept.
                Ask what evidence is available for the proposed restaurant and whether it covers the
                relevant location or service. Do not assume every business uses the same
                certification system.
              </p>
              <ul>
                <li>
                  <strong>Ingredients and sourcing:</strong> meat, stocks, sauces, gelatin and other
                  ingredients relevant to your requirements.
                </li>
                <li>
                  <strong>Preparation:</strong> shared equipment, utensils, storage and any
                  separation you require.
                </li>
                <li>
                  <strong>Alcohol:</strong> cooking ingredients and whether alcohol is served on the
                  premises, if relevant to your choice.
                </li>
                <li>
                  <strong>Service details:</strong> the particular branch, opening hours, menu and
                  ability to serve your party.
                </li>
              </ul>
              <p>
                Vegetarian, seafood and no-pork dishes are not automatically substitutes for
                verified halal preparation. Explain whether any of these options are acceptable to
                you, and under what conditions. Your planner should not decide that on your behalf.
              </p>
              <h3>Plan meals for the whole day.</h3>
              <p>
                A restaurant near your city hotel may not help during a long excursion. Review lunch
                stops, late arrivals and meals on train or flight days alongside the route. If a
                suitable option cannot be confirmed, discuss a different visit sequence or an
                alternative before booking.
              </p>
              <p>
                Where an arranged meal is essential, your documents should identify what has been
                agreed and any unresolved details. Restaurant availability can change; ask how a
                replacement would be discussed rather than assuming any nearby venue will meet the
                same requirements.
              </p>
            </section>

            <section id="prayer">
              <h2>Build prayer arrangements into the daily schedule.</h2>
              <p>
                Discuss prayer priorities before fixing the day’s sightseeing. Travel distances,
                timed admissions and the location of suitable facilities can affect what is
                practical. Leaving a vague gap in the itinerary does not confirm access to a prayer
                space.
              </p>
              <p>
                Use prayer times for the specific city and date from a source you trust. Let us know
                how you want these considered in the schedule. Religious decisions about travel and
                worship remain yours; a travel planner can help coordinate the practical
                arrangements.
              </p>
              <h3>Mosque visits and Friday prayer</h3>
              <p>
                Tell us whether you want to attend worship or visit a site for its history and
                architecture. Those purposes can involve different access arrangements. Opening
                hours, worship access, admission procedures and any visitor restrictions need to be
                checked with the particular site.
              </p>
              <p>
                If women in your party need prayer facilities, ask specifically about the provision
                and access. Also discuss ablution facilities, clothing requirements and any mobility
                considerations. A map marker or a published visitor listing does not confirm all of
                these details.
              </p>
              <p>
                For Friday prayer, allow for the journey to and from the mosque, arrival procedures
                and the effect on lunch and afternoon visits. Put an essential attendance request
                into the route discussion early.
              </p>
            </section>

            <section id="routes">
              <h2>Choose a route that connects your interests and requirements.</h2>
              <p>
                Begin with what you hope to experience, then check the practical arrangements in
                each place. Availability can differ between neighborhoods, excursion routes and
                individual suppliers within the same city.
              </p>
              <div className={styles.destinations}>
                <div>
                  <h3>Beijing</h3>
                  <p>
                    Imperial history, the Great Wall and traditional neighborhoods offer a varied
                    introduction. Great Wall days deserve particular meal and prayer planning
                    because they take you outside the central city.
                  </p>
                </div>
                <div>
                  <h3>Xi’an</h3>
                  <p>
                    Archaeology and the city’s Muslim heritage can form part of a broader history
                    journey. Assess individual restaurants and mosque access separately from a
                    neighborhood’s reputation.
                  </p>
                </div>
                <div>
                  <h3>Shanghai</h3>
                  <p>
                    Architecture, museums and contemporary urban life provide a different
                    perspective. Coordinate dining and worship requests with the actual areas you
                    will visit.
                  </p>
                </div>
                <div>
                  <h3>Chengdu</h3>
                  <p>
                    Pandas, tea-house culture and Sichuan history offer varied possibilities.
                    Discuss suitable meal arrangements and spice preferences separately; they are
                    different requirements.
                  </p>
                </div>
              </div>
              <h3>Allow time for the connections.</h3>
              <p>
                For a short trip, one city or two well-connected destinations may be easier to
                coordinate. With around ten to fourteen days, a multi-city route can be discussed
                while allowing space for transfers and daily requirements.
              </p>
              <p>
                Adding a destination adds more than sightseeing. It introduces another hotel, new
                meal checks and a travel day. An extra night in a city you already want to visit may
                give you a more enjoyable journey.
              </p>
              <p>
                <Link href="/tours">Explore private China journey ideas</Link> as starting points
                for a discussion about your route and requirements.
              </p>
            </section>

            <section id="hotels">
              <h2>Check hotel breakfast and facilities explicitly.</h2>
              <p>
                A hotel’s international brand or star rating does not establish halal food service.
                Breakfast may be included in the room rate while offering no arrangement that meets
                your requirements.
              </p>
              <p>
                Ask about the specific food service, preparation and evidence you need. A vegetarian
                section of a shared buffet does not by itself answer questions about utensils or
                ingredients. If the hotel cannot confirm a suitable breakfast, discuss other options
                before choosing the property.
              </p>
              <h3>Location and room requests</h3>
              <p>
                Proximity to suitable restaurants or a mosque can be useful, but check actual travel
                time and access rather than relying on a neighborhood description. A location that
                works for meals should also make sense for the rest of your itinerary.
              </p>
              <p>
                Tell us about room configurations, bathroom needs or facilities that are essential
                to you. Prayer mats, qibla information, particular bathroom fittings and private
                leisure facilities should be requested and checked individually rather than assumed.
              </p>
              <p>
                If a requirement cannot be confirmed at the proposed property, the proposal should
                make that clear so you can decide whether to consider another hotel.
              </p>
            </section>

            <section id="ramadan">
              <h2>Planning a China trip during Ramadan.</h2>
              <p>
                If you intend to fast during the journey, discuss meal timing, rest and prayer
                before the schedule is finalized. Suhoor may fall outside normal hotel breakfast
                hours, while a long excursion or delayed arrival can complicate iftar arrangements.
              </p>
              <ul>
                <li>
                  <strong>Before dawn:</strong> check whether a suitable meal can actually be
                  provided and how it will reach you.
                </li>
                <li>
                  <strong>During the day:</strong> consider walking demands, weather, travel time
                  and the rest you prefer.
                </li>
                <li>
                  <strong>At sunset:</strong> review the day’s location, transport and confirmed
                  meal arrangements.
                </li>
                <li>
                  <strong>In the evening:</strong> allow for your prayer priorities and the
                  following morning’s start.
                </li>
              </ul>
              <p>
                Do not assume restaurants or hotels will change their normal hours. Any special meal
                service needs to be checked for your dates. If your party includes people with
                different meal schedules, explain that so the arrangements can account for everyone.
              </p>
              <p>
                Confirm your intended dates and practices when enquiring, including any flexibility
                around the beginning or end of Ramadan. Personal religious or health decisions
                should be discussed with the advisers you choose.
              </p>
            </section>

            <section id="travel-days">
              <h2>Coordinate family needs and travel days together.</h2>
              <p>
                Halal dining and prayer requests are part of the wider journey. Children’s meal
                preferences, grandparents’ walking comfort and your party’s interests still shape
                the day. Share these details together so one arrangement does not inadvertently make
                another more difficult.
              </p>
              <p>
                On flight and train days, check what food is available and what is actually
                confirmed. A special-meal request is not the same as a confirmed meal, and
                provisions at a station or airport should not be assumed to meet your requirements.
              </p>
              <p>
                If you plan to carry food, check current carrier, security and entry rules for the
                particular items. Keep travel documents, hotel information and agreed contact
                details available offline.
              </p>
              <p>
                Private guiding and transport cover the services described in your booking. Discuss
                how to reach the China team for a change to an arranged meal or visit, including
                contact arrangements outside guided hours.
              </p>
              <p>
                For additional planning questions, see our guides for{" "}
                <Link href="/china-family-tours">families traveling with children</Link> and{" "}
                <Link href="/china-tours-for-seniors">
                  travelers who prefer a more comfortable pace
                </Link>
                .
              </p>
            </section>

            <section id="planning">
              <h2>Costs, confirmations and planning with AVIORA.</h2>
              <p>
                A reliable price depends on your dates, route, hotel choices, party size and
                services. Specific dining arrangements, additional transfers or a different hotel
                location may affect both the cost and the itinerary. Ask for those effects to be
                explained before deciding.
              </p>
              <h3>Share a clear brief.</h3>
              <p>
                Start with approximate dates, interests, the number of travelers and a budget range.
                Explain halal requirements, acceptable verification, prayer priorities and any
                essential hotel facilities. Identify which requests are conditions of your booking.
              </p>
              <h3>Review the proposal at service level.</h3>
              <p>
                Your proposal should distinguish confirmed arrangements from requests still awaiting
                a supplier response. Check which meals are included, where independent arrangements
                remain and what information supports an essential requirement.
              </p>
              <p>
                The quotation should state the currency, total price, inclusions, exclusions and
                payment and cancellation conditions. An enquiry or draft proposal does not reserve
                services. Confirmation follows the acceptance and payment process in your{" "}
                <Link href="/terms">booking documents and terms</Link>.
              </p>
              <p>
                AVIORA China Travel is operated by {siteConfig.operator.englishReferenceName}. Your
                booking identifies the contracting company and agreed service scope.{" "}
                <Link href="/company">Read about our operating company</Link> or{" "}
                <Link href="/about/founder">meet our founder</Link>.
              </p>
            </section>

            <TravelGuideAnswers id="muslim" />
            <section id="questions">
              <h2>Questions Muslim travelers often ask.</h2>
              <div className={styles.questions}>
                {questions.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <TravelGuideReading id="muslim" />
            <section className={styles.closing} aria-labelledby="muslim-next-step">
              <h2 id="muslim-next-step">Tell us what matters to your journey.</h2>
              <p>
                Share the places you hope to see and the dining, prayer and accommodation
                requirements you want considered. We can begin with your priorities and discuss the
                details that need checking.
              </p>
              <TrackedLink
                href={planningHref}
                className={styles.button}
                trackingLabel="Discuss this journey"
                trackingPlacement="guide-closing"
              >
                Start planning your China journey <span aria-hidden="true">↗</span>
              </TrackedLink>
              <p>
                <Link href="/about#designed-around-you">Back to journeys designed around you</Link>
              </p>
            </section>
          </article>
        </div>
      </div>
      <SiteFooter />
    </PageContainer>
  );
}
