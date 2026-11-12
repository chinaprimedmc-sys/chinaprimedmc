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

const title = "China Tours for Women, With Room to Travel Your Way.";
const planningHref = "/start-planning?preference=Women%27s%20travel&source=women-travel-guide";
const contents = [
  ["your-journey", "Choose how you travel"],
  ["safety", "Safety and local support"],
  ["arrival", "Arrival and transfers"],
  ["hotels", "Hotels and rooms"],
  ["routes", "Routes and interests"],
  ["practicalities", "Everyday practicalities"],
  ["cost", "Costs and inclusions"],
  ["planning", "Planning with AVIORA"],
  ["planning-answers", "More planning answers"],
  ["questions", "Common questions"],
  ["reading-next", "Guides and journeys to compare"],
] as const;

const questions = [
  [
    "Are these women-only group tours?",
    "This guide describes private journeys for your own party, including a woman traveling alone, friends, partners or relatives. It does not advertise scheduled departures with other guests. Guide and driver assignments are discussed separately; a private tour does not automatically mean an all-female service team.",
  ],
  [
    "Can I travel independently on some days?",
    "We can discuss a mix of guided visits and independent time. The proposal should identify which days include a guide or vehicle. Independent outings are outside those reserved services, so agree meeting points and transport plans before separating from your guide.",
  ],
  [
    "Is travel insurance included?",
    "Do not assume personal travel insurance is included. Check the written quotation and arrange suitable coverage for your circumstances, activities and medical needs. Ask your insurer about exclusions and emergency assistance before departure.",
  ],
  [
    "Can I enquire without a travel companion or fixed dates?",
    "Yes. Tell us you expect to travel solo and give an approximate month, trip length and interests. That is enough to start discussing possibilities. A confirmed price and availability require more specific arrangements.",
  ],
] as const;

export const metadata: Metadata = createTravelGuideMetadata("women");

export default function WomenTravelPage() {
  return (
    <PageContainer tone="white" className={styles.page}>
      <SiteNavigation />
      <JsonLd id="women-guide-breadcrumb" data={travelGuideBreadcrumb("women")} />
      <JsonLd id="women-guide-article" data={travelGuideSchema("women", title)} />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/about">About AVIORA</Link>
          <span aria-hidden="true">/</span>
          <span>Women travelers</span>
        </nav>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Private China travel for women</p>
          <h1>{title}</h1>
          <p className={styles.subtitle}>
            Travel solo, with a friend or across generations. Build a journey around your interests,
            with practical arrangements you understand before you leave.
          </p>
          <TravelGuideByline />
          <TrackedLink
            href={planningHref}
            className={styles.button}
            trackingLabel="Discuss this journey"
            trackingPlacement="guide-hero"
          >
            Discuss your China journey <span aria-hidden="true">↗</span>
          </TrackedLink>
        </header>
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="In this women’s travel guide">
            <p>In this guide</p>
            <ol>
              {contents.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className={styles.article} aria-label="China travel guide for women">
            <TravelGuideOverview id="women" />
            <div className={styles.introduction}>
              <p>
                AVIORA plans private China tours for women traveling alone or with their own
                companions. Your proposal brings the route, hotels, guided visits, transport and
                local coordination into one place, with the service scope explained before booking.
              </p>
              <p>
                You might want a deep introduction to Chinese history, a food-focused city break, a
                photography journey or time away with someone you rarely see. Start with those
                reasons for traveling. Then consider the arrangements that will help you enjoy the
                trip: a clear arrival plan, a well-chosen hotel and knowing whom to contact when a
                question comes up.
              </p>
            </div>

            <section id="your-journey">
              <h2>What kind of China journey would you enjoy?</h2>
              <p>
                Women do not share one set of travel interests or one level of confidence abroad.
                The useful questions are personal: how independently do you want to travel, which
                experiences matter most and where would local help make a difference?
              </p>
              <dl className={styles.factList}>
                <div>
                  <dt>Traveling solo</dt>
                  <dd>
                    Choose your own interests and daily rhythm. Discuss which visits benefit from a
                    guide and how you want to spend independent time.
                  </dd>
                </div>
                <div>
                  <dt>Traveling with friends or a partner</dt>
                  <dd>
                    Compare preferred budgets, room arrangements and energy levels before building
                    the route. Leave space for different interests.
                  </dd>
                </div>
                <div>
                  <dt>Mothers and daughters</dt>
                  <dd>
                    Plan around both generations, including walking comfort, personal interests and
                    whether sharing a room works for you.
                  </dd>
                </div>
                <div>
                  <dt>A first visit to China</dt>
                  <dd>
                    Give arrival arrangements, language support and travel between cities as much
                    attention as the attraction list.
                  </dd>
                </div>
              </dl>
              <p>
                A private journey means the reserved guiding and transport are arranged for your
                party as specified. Attractions, hotels and scheduled trains or flights remain
                shared public environments. The guide or vehicle is available during the services
                agreed in your booking.
              </p>
            </section>

            <section id="safety">
              <h2>Is China safe for solo female travelers?</h2>
              <p>
                No destination or tour can guarantee personal safety. For a woman considering solo
                travel in China, the useful approach is to review current official travel advice and
                examine the actual itinerary: arrival time, hotel location, transport, communication
                and independent outings.
              </p>
              <p>
                A private tour can reduce uncertainty by organizing particular services and giving
                you named contacts. It does not remove the need for personal judgment or replace
                emergency services, medical care or travel insurance.
              </p>
              <h3>Ask how support works before booking.</h3>
              <ul>
                <li>Who handles an arrival problem or a change to a reserved service?</li>
                <li>Which contact channel should you use during the trip?</li>
                <li>What contact arrangements apply outside guided hours?</li>
                <li>What should you do if you cannot reach your first contact?</li>
              </ul>
              <p>
                Confirm the answers in your travel documents and keep an offline copy. For an
                immediate emergency, use the appropriate local emergency service rather than waiting
                for a tour coordinator to respond.
              </p>
              <p>
                Check the travel advice issued by your own government before booking and again
                before departure. Examples include the{" "}
                <a
                  href="https://www.gov.uk/foreign-travel-advice/china"
                  target="_blank"
                  rel="noreferrer"
                >
                  UK Foreign, Commonwealth &amp; Development Office
                </a>{" "}
                and the{" "}
                <a
                  href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  US Department of State
                </a>
                . Advice may differ by nationality and circumstances.
              </p>
            </section>

            <section id="arrival">
              <h2>Make your first arrival straightforward.</h2>
              <p>
                Landing in an unfamiliar airport is easier when the next steps are already clear. If
                an arrival transfer is included, your documents should explain the meeting point,
                how to identify the person meeting you and what to do if you cannot find each other.
              </p>
              <p>
                Share your flight number, arrival airport and terminal information when available.
                Ask how a delay or missed connection affects the transfer, including any waiting
                limits or extra charges. Keep your hotel’s name, address in Chinese and telephone
                number accessible without an internet connection.
              </p>
              <h3>Plan the first evening around your arrival.</h3>
              <p>
                A late flight may leave time only for the transfer, check-in and a simple meal.
                After a long international journey, an early appointment the following morning may
                feel demanding. Give the arrival day enough space before adding sightseeing.
              </p>
              <p>
                For travel between cities, look beyond the flight or train duration. Include hotel
                checkout, station or airport transfers, security procedures and the onward journey
                to your next hotel. These details can determine whether a route feels comfortable.
              </p>
            </section>

            <section id="hotels">
              <h2>Choose hotels for the way you will use them.</h2>
              <p>
                A star rating is only one part of a hotel decision. Consider the neighborhood, ease
                of reaching your planned visits, reception arrangements and the practicalities of
                returning after dinner.
              </p>
              <p>
                Tell us whether you prefer a lively central area, a quieter setting or a particular
                style of property. If you expect to explore independently, ask about nearby dining,
                transport and the route back to the hotel.
              </p>
              <h3>Solo rooms and shared rooms</h3>
              <p>
                For solo travel, check the actual room category and occupancy basis. A
                single-occupancy booking may use a double or twin room; it does not describe one
                universal layout.
              </p>
              <p>
                For two travelers, request the bed configuration you need. Twin beds, a double bed,
                separate rooms and connecting rooms are different arrangements. Availability should
                be checked for the specific dates and property. A preference is confirmed only when
                it appears as confirmed in the written booking.
              </p>
              <p>
                If stairs, lift access, bathroom layout or another accommodation detail matters to
                you, raise it early. Hotel photographs rarely answer every practical question.
              </p>
            </section>

            <section id="routes">
              <h2>Build your route around interests, then connect the places.</h2>
              <p>
                A trip becomes more personal when the route follows what you want to experience.
                There is no need to select activities because they are marketed to women. Tell us
                what draws you to China, whether that is architecture, contemporary art, hiking,
                archaeology, tea or regional food.
              </p>
              <div className={styles.destinations}>
                <div>
                  <h3>Beijing: history and neighborhoods</h3>
                  <p>
                    Combine major historic sites with time in traditional neighborhoods and local
                    food. Great Wall visits require attention to travel time, terrain and the access
                    route.
                  </p>
                </div>
                <div>
                  <h3>Xi’an: archaeology and city life</h3>
                  <p>
                    Explore the context behind the Terracotta Warriors, then allow time for the
                    city’s other layers. Discuss how much museum and historical sightseeing you
                    enjoy.
                  </p>
                </div>
                <div>
                  <h3>Chengdu: food and everyday culture</h3>
                  <p>
                    Consider pandas, tea-house life and Sichuan cuisine. Share spice preferences and
                    dietary requirements before arranging meals or food experiences.
                  </p>
                </div>
                <div>
                  <h3>Shanghai: architecture and contemporary China</h3>
                  <p>
                    Connect riverfront views, urban neighborhoods and cultural interests. Plan
                    independent time around the areas you actually want to explore.
                  </p>
                </div>
              </div>
              <h3>How long should a first trip be?</h3>
              <p>
                Begin with your available nights and international arrival and departure points. A
                shorter visit may work best with one city or two well-connected destinations. With
                around ten to fourteen days, several cities can be considered while leaving time for
                transfers and slower days.
              </p>
              <p>
                More destinations mean more packing, check-ins and travel days. Ask what an
                additional stop contributes, then compare it with an extra day somewhere already on
                the route.
              </p>
              <p>
                <Link href="/tours">Explore private China journey ideas</Link>
              </p>
            </section>

            <section id="practicalities">
              <h2>Prepare for the everyday details.</h2>
              <h3>Connectivity and communication</h3>
              <p>
                Decide how you will access mobile data and contact your travel team. International
                roaming, travel eSIMs and local services have different conditions; check device
                compatibility, coverage and provider terms before purchasing. Some familiar online
                services may be unavailable in mainland China.
              </p>
              <p>
                Save hotel details, meeting instructions and key contacts offline. If you plan to
                meet a guide after independent time, agree a precise place and a practical fallback
                if messaging fails.
              </p>
              <h3>Payments and identification</h3>
              <p>
                Check current payment options with your bank and any payment provider you plan to
                use. Foreign-card support, account verification and transaction limits can vary.
                Carry an alternative payment method and keep access to identification required for
                your booked travel services.
              </p>
              <h3>Food, health and personal comfort</h3>
              <p>
                Share dietary restrictions and allergies before confirming the route. Restaurant
                choices can be discussed, but an allergen-free kitchen cannot be assumed. Ask your
                clinician about personal medical preparation and your insurer about coverage,
                including any activities or existing conditions.
              </p>
              <p>
                Choose clothing and footwear for the weather, walking and places you plan to visit.
                Religious and cultural sites may have specific requirements. Tell us if access to
                toilets, rest breaks or another practical need affects your day; these are useful
                planning details.
              </p>
              <h3>Guides and personal preferences</h3>
              <p>
                If you prefer a female guide, request one early. Availability depends on dates,
                language and destination, and must be checked. We will distinguish a request from a
                confirmed assignment. Share any boundaries or concerns relevant to the services, so
                the proposed arrangements can address them clearly.
              </p>
            </section>

            <section id="cost">
              <h2>What does a private China tour for one woman cost?</h2>
              <p>
                A reliable quote depends on your dates, route, accommodation and reserved services.
                Solo travelers may pay more per person than two people sharing the same itinerary
                because a room, vehicle or guide may be priced for the service rather than divided
                among several guests.
              </p>
              <p>
                That does not mean every cost doubles. Admission tickets and some transport are
                individual costs, while the treatment of rooms and private services depends on the
                actual booking.
              </p>
              <ul>
                <li>
                  <strong>Accommodation:</strong> room category, number of nights and occupancy
                  basis.
                </li>
                <li>
                  <strong>Private services:</strong> guided days, vehicle use, transfers and
                  selected activities.
                </li>
                <li>
                  <strong>Route:</strong> travel between cities and the number of hotel changes.
                </li>
                <li>
                  <strong>Timing:</strong> dates, holidays and supplier availability.
                </li>
              </ul>
              <p>
                Compare quotations using the total price, currency, inclusions and exclusions. Check
                whether international flights, meals, optional outings, insurance and personal
                expenses are included. Payment and cancellation conditions belong alongside the
                itinerary when you make your decision.
              </p>
            </section>

            <section id="planning">
              <h2>How AVIORA plans your journey.</h2>
              <p>
                Begin with approximate dates, the number of travelers, a budget range and a few
                interests. Tell us which parts of travel you enjoy organizing yourself and which you
                would like us to coordinate.
              </p>
              <h3>Turn preferences into practical arrangements.</h3>
              <p>
                We discuss the route, pace, hotels and guided services together. Requests such as a
                female guide, a particular room setup or additional arrival assistance need to be
                assessed for the actual dates and destinations.
              </p>
              <h3>Review the details in writing.</h3>
              <p>
                Your proposal should identify what is offered, the status of requested arrangements,
                the price and applicable conditions. Ask questions before accepting it. An enquiry
                or draft proposal does not reserve services.
              </p>
              <h3>Confirm and prepare.</h3>
              <p>
                Follow the acceptance and payment process in your{" "}
                <Link href="/terms">booking documents and terms</Link>. Before departure, review
                meeting instructions, confirmed services and contact arrangements. Check entry
                requirements with the relevant Chinese embassy or consulate and the{" "}
                <a href="https://en.nia.gov.cn/" target="_blank" rel="noreferrer">
                  National Immigration Administration of China
                </a>
                .
              </p>
              <p>
                AVIORA China Travel is operated by {siteConfig.operator.englishReferenceName}. Your
                booking documents identify the contracting company and agreed service scope.{" "}
                <Link href="/company">Read about our operating company</Link> or{" "}
                <Link href="/about/founder">meet our founder</Link>.
              </p>
            </section>

            <TravelGuideAnswers id="women" />
            <section id="questions">
              <h2>Questions women travelers often ask.</h2>
              <div className={styles.questions}>
                {questions.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <TravelGuideReading id="women" />
            <section className={styles.closing} aria-labelledby="women-next-step">
              <h2 id="women-next-step">Start with the journey you want.</h2>
              <p>
                Tell us what you would like to experience in China, who is traveling and what would
                help you feel prepared. You do not need a finished itinerary to begin.
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
