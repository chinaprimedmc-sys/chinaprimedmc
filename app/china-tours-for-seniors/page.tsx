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

const title = "Private China Tours for Seniors, at Your Own Pace.";
const planningHref =
  "/start-planning?preference=Comfortable%20pace%20and%20access%20needs&source=senior-travel-guide";
const contents = [
  ["right-for-you", "Is China right for your trip?"],
  ["walking", "Walking, stairs and access"],
  ["pace", "Daily pace and rest"],
  ["routes", "Routes and trip length"],
  ["hotels", "Hotel and room details"],
  ["transport", "Transfers and travel days"],
  ["preparation", "Health and preparation"],
  ["cost", "Costs and planning"],
  ["planning-answers", "More planning answers"],
  ["questions", "Common questions"],
  ["reading-next", "Guides and journeys to compare"],
] as const;

const questions = [
  [
    "Is there an age limit for a private China tour?",
    "Age alone does not establish whether an itinerary is suitable. Discuss your walking comfort, assistance needs and planned activities before booking. Individual suppliers and insurers may have their own conditions or age limits; those need to be checked for your arrangements.",
  ],
  [
    "Can you plan a China tour with less walking?",
    "We can discuss fewer visits, shorter routes, rest time and transport options. Some attractions still require walking between the vehicle and the entrance or through the site. Ask for those demands to be described before deciding whether to include a visit.",
  ],
  [
    "Can I bring a wheelchair, walker or mobility scooter?",
    "Tell us the equipment type, dimensions, weight and any battery details before the route is confirmed. Vehicle storage, hotel access, attraction routes and carrier policies need separate checks. A private vehicle or a hotel lift does not by itself establish that the whole journey is accessible.",
  ],
  [
    "Is a private guide also a personal carer?",
    "A guide provides the guiding and coordination specified in the booking. Personal care, lifting, transfers between a wheelchair and a seat, medication management and clinical support are separate needs. Discuss any required assistance before booking rather than assuming a guide or driver can provide it.",
  ],
  [
    "Can grandparents travel with children and grandchildren?",
    "Yes, a private journey can be discussed around several generations. Share each traveler’s interests and comfortable pace. Some families prefer shared principal visits with optional activities or rest time; any additional guiding or transport must be agreed separately.",
  ],
  [
    "Can we adjust a day if we feel tired?",
    "Tell your guide or the China team as early as possible. Shortening a visit or dropping an optional stop may be practical, but reserved tickets, transport and supplier conditions can limit changes or create costs. Agree the available options before altering a confirmed service.",
  ],
] as const;

export const metadata: Metadata = createTravelGuideMetadata("seniors");

export default function SeniorTravelPage() {
  return (
    <PageContainer tone="white" className={styles.page}>
      <SiteNavigation />
      <JsonLd id="senior-guide-breadcrumb" data={travelGuideBreadcrumb("seniors")} />
      <JsonLd id="senior-guide-article" data={travelGuideSchema("seniors", title)} />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/about">About AVIORA</Link>
          <span aria-hidden="true">/</span>
          <span>Older travelers</span>
        </nav>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Private China travel for older travelers</p>
          <h1>{title}</h1>
          <p className={styles.subtitle}>
            See the China that interests you, with walking, travel days and time to rest considered
            together.
          </p>
          <TravelGuideByline />
          <TrackedLink
            href={planningHref}
            className={styles.button}
            trackingLabel="Discuss this journey"
            trackingPlacement="guide-hero"
          >
            Discuss your preferred pace <span aria-hidden="true">↗</span>
          </TrackedLink>
        </header>
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="In this senior travel guide">
            <p>In this guide</p>
            <ol>
              {contents.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className={styles.article} aria-label="China travel guide for older travelers">
            <TravelGuideOverview id="seniors" />
            <div className={styles.introduction}>
              <p>
                AVIORA plans private China tours for seniors and older travelers around individual
                interests, walking comfort and preferred daily rhythm. The proposal brings together
                the route, hotels, guides, transport and local coordination, with particular access
                requests checked before booking.
              </p>
              <p>
                You may want an active journey, long conversations about history or a quieter
                introduction with fewer hotel changes. There is no single itinerary that suits
                everyone of a particular age. The starting point is what you want to experience and
                what makes a day enjoyable for you.
              </p>
            </div>

            <section id="right-for-you">
              <h2>Is China a good destination for older travelers?</h2>
              <p>
                A China trip can include imperial history, regional food, museums, gardens and time
                observing everyday life. Whether a particular journey suits you depends on its
                physical demands, travel arrangements and the support you need.
              </p>
              <p>
                Large historic sites can involve extended walking, hard surfaces, steps and queues.
                A private car may make travel between visits easier, while leaving a substantial
                distance to cover inside an attraction. Weather, crowds and time spent standing also
                affect how a day feels.
              </p>
              <p>
                The useful question is specific: can this route, with these visits and these
                transfer arrangements, work comfortably for you? Reviewing those details early gives
                you more room to choose alternatives.
              </p>
              <h3>Describe a comfortable day in your own terms.</h3>
              <p>
                Instead of simply saying “an easy tour,” tell us what you enjoy at home or on
                previous trips. Perhaps you walk comfortably for half an hour before sitting down,
                prefer to avoid long stairways or enjoy a full museum morning if the afternoon is
                free. Concrete examples help us discuss the itinerary.
              </p>
            </section>

            <section id="walking">
              <h2>Check walking distances, stairs and access before booking.</h2>
              <p>
                A slower-paced itinerary and a step-free itinerary are different things. Fewer
                attractions may create a calmer day without changing the steps, surfaces or
                distances at each site. Access needs should be discussed separately for every
                essential visit.
              </p>
              <dl className={styles.factList}>
                <div>
                  <dt>Walking and standing</dt>
                  <dd>
                    How long are you comfortable walking without a seat? Is standing in a queue more
                    difficult than moving?
                  </dd>
                </div>
                <div>
                  <dt>Steps and surfaces</dt>
                  <dd>
                    Do you need to avoid stairs entirely, or are a few steps with a handrail
                    manageable? How do uneven paths affect you?
                  </dd>
                </div>
                <div>
                  <dt>Vehicles and equipment</dt>
                  <dd>
                    Can you enter the proposed vehicle comfortably? Will you bring a walking aid,
                    wheelchair or other equipment?
                  </dd>
                </div>
                <div>
                  <dt>Rest and facilities</dt>
                  <dd>
                    How frequently do you prefer a break? Are toilet access, shade or a nearby place
                    to sit important to the visit?
                  </dd>
                </div>
              </dl>
              <h3>Ask about the complete route through a site.</h3>
              <p>
                An accessible entrance does not establish that every area is reachable. Ask how you
                get from the vehicle drop-off to the entrance, which sections can be visited and
                whether the exit uses a different route. Lifts, shuttles or cable cars may reduce
                some demands while introducing queues, boarding requirements or operating
                restrictions.
              </p>
              <p>
                If a wheelchair or scooter is essential, share dimensions, weight, folding
                requirements and battery details where relevant. We need to check the proposed
                services against those requirements. Where a request cannot be confirmed, that
                uncertainty should remain clear in the proposal.
              </p>
            </section>

            <section id="pace">
              <h2>Make rest part of the itinerary.</h2>
              <p>
                A comfortable pace comes from how the day is arranged: the number of visits,
                distance between them, start time and opportunities to sit down. It also includes
                what happens the evening before and whether the next morning involves packing.
              </p>
              <h3>An example of a day with breathing room</h3>
              <ol className={styles.dayExample}>
                <li>
                  <strong>Morning:</strong> one principal visit, with the route and walking demands
                  discussed beforehand.
                </li>
                <li>
                  <strong>Lunch:</strong> a seated meal with time to pause.
                </li>
                <li>
                  <strong>Afternoon:</strong> a shorter visit, independent time or a hotel return
                  where practical.
                </li>
                <li>
                  <strong>Evening:</strong> dinner without an additional late activity unless you
                  want one.
                </li>
              </ol>
              <p>
                This illustrates pacing rather than a promised schedule. Some excursions require a
                longer outing, while timed tickets and transport departures can fix parts of the
                day. A return to the hotel may be impractical when the main visit is far outside the
                city.
              </p>
              <p>
                Tell us whether you value a leisurely breakfast, an afternoon rest or a free evening
                most. We can then consider the trade-offs when a site requires an early departure.
              </p>
            </section>

            <section id="routes">
              <h2>Choose places for their meaning, then review the demands.</h2>
              <p>
                The best route reflects your interests. Historic cities, food, art and landscapes
                can all belong in a journey for older travelers. Each needs to be assessed through
                the actual itinerary rather than a general label such as “senior-friendly.”
              </p>
              <div className={styles.destinations}>
                <div>
                  <h3>Beijing</h3>
                  <p>
                    Imperial history and traditional neighborhoods offer a rich introduction. Large
                    palace sites and Great Wall excursions need particular attention to walking,
                    steps, exposure and time away from the hotel.
                  </p>
                </div>
                <div>
                  <h3>Xi’an</h3>
                  <p>
                    Archaeology and city history can anchor a rewarding stay. Review the Terracotta
                    Warriors excursion as a whole, including transfers, movement through the site
                    and time standing.
                  </p>
                </div>
                <div>
                  <h3>Chengdu</h3>
                  <p>
                    Tea-house life, food and pandas offer different rhythms. Panda-base visits can
                    still involve extensive grounds; discuss routes, weather and any proposed
                    internal transport.
                  </p>
                </div>
                <div>
                  <h3>Shanghai</h3>
                  <p>
                    Architecture, museums and neighborhoods provide varied choices. Hotel location
                    and how you connect the visits matter, especially if you want time to explore
                    independently.
                  </p>
                </div>
              </div>
              <h3>How many days should you allow?</h3>
              <p>
                Start with your available nights and preferred international arrival and departure
                points. A short stay may suit one city or two well-connected destinations. Around
                ten to fourteen days can allow a multi-city journey, provided transfer days receive
                enough space.
              </p>
              <p>
                Staying longer does not require adding more stops. An extra night can make room for
                a rest day or a deeper visit without another hotel change. Compare the value of a
                new destination with the time and effort needed to reach it.
              </p>
              <p>
                <Link href="/tours">Explore private China journey ideas</Link>. If you are traveling
                across generations, our <Link href="/china-family-tours">family travel guide</Link>{" "}
                also discusses shared interests and room arrangements.
              </p>
            </section>

            <section id="hotels">
              <h2>Check hotel details beyond the star rating.</h2>
              <p>
                A well-chosen hotel supports the whole day. Consider its location, access from the
                vehicle, distance to the room and the layout of the bathroom, alongside the room
                category and atmosphere.
              </p>
              <ul>
                <li>
                  <strong>Arrival:</strong> steps, ramps and the distance between the drop-off and
                  reception.
                </li>
                <li>
                  <strong>Room access:</strong> lifts, corridors and any steps within the room
                  category.
                </li>
                <li>
                  <strong>Bathroom:</strong> shower entry, bathtub access and any essential support
                  features.
                </li>
                <li>
                  <strong>Beds:</strong> twin or double configuration and any particular
                  requirement.
                </li>
                <li>
                  <strong>Daily convenience:</strong> breakfast location, dining options and the
                  ease of returning for a rest.
                </li>
              </ul>
              <p>
                An “accessible room” label does not describe every feature. If a detail is
                essential, ask for that feature to be checked with the property. A room request and
                a confirmed room arrangement should be distinguished in writing.
              </p>
              <p>
                For friends or relatives traveling together, discuss whether separate rooms or
                proximity between rooms matters. Adjacent rooms are not necessarily connecting
                rooms, and a requested location may remain subject to confirmation.
              </p>
            </section>

            <section id="transport">
              <h2>Treat travel days as part of the holiday.</h2>
              <p>
                A short flight or train journey can still take much of a day once packing,
                transfers, check-in, security and onward travel are included. Review the complete
                hotel-to-hotel journey when comparing transport choices.
              </p>
              <h3>Private vehicles</h3>
              <p>
                Share any difficulty entering or leaving a vehicle, along with luggage and equipment
                details. Vehicle height, seating, legroom and storage need to suit the actual party.
                A private vehicle does not automatically include a wheelchair lift or a driver
                trained to provide physical assistance.
              </p>
              <h3>Trains, flights and luggage</h3>
              <p>
                Stations and airports can involve walking, queues and handling luggage at different
                stages. Discuss which assistance is available, who provides it and where it starts
                and ends. Carrier or station assistance should be treated as requested until
                confirmed through the relevant process.
              </p>
              <p>
                For powered mobility equipment, check the carrier’s conditions before booking the
                relevant service. Battery and equipment requirements can differ. Avoid relying on a
                general assurance that all transport will accept the same device.
              </p>
              <p>
                Fewer hotel changes and a manageable amount of luggage can make a practical
                difference. Tell us if you prefer a longer direct journey over a connection or would
                rather add a night than travel late.
              </p>
            </section>

            <section id="preparation">
              <h2>Prepare for health, weather and communication needs.</h2>
              <p>
                Discuss your planned route and activities with your own clinician when personal
                medical advice is needed. A travel planner cannot decide whether you are medically
                fit to travel or provide individual treatment advice.
              </p>
              <p>
                Consider temperature, humidity, exposure and altitude when choosing destinations and
                dates. If a proposed route includes higher elevations or demanding excursions,
                review those details before confirming the trip.
              </p>
              <h3>Insurance and medication</h3>
              <p>
                Ask your insurer about your age, existing conditions, planned activities, medical
                expenses and assistance arrangements. Personal travel insurance should not be
                assumed to be included in the tour price.
              </p>
              <p>
                Check medication and entry requirements with the relevant authorities before
                departure. Plan for enough prescribed medication and appropriate documentation based
                on official rules and advice from your clinician or pharmacist.
              </p>
              <h3>Know the agreed support arrangements.</h3>
              <p>
                Keep arrival instructions, hotel addresses and your travel contacts available
                offline. Before departure, confirm how to reach the China team, what arrangements
                apply outside guided hours and what to do if the first contact is unavailable.
              </p>
              <p>
                Tour coordination, personal care and emergency medical assistance are different
                services. If you require help with dressing, lifting, medication or other daily
                care, explain the assistance required before booking. Do not assume it is included
                in a guide’s or driver’s role.
              </p>
              <p>
                Check current travel advice from your own government and entry information from the
                relevant Chinese embassy or consulate and the{" "}
                <a href="https://en.nia.gov.cn/" target="_blank" rel="noreferrer">
                  National Immigration Administration of China
                </a>
                . Requirements depend on individual circumstances and may change.
              </p>
            </section>

            <section id="cost">
              <h2>What does a private China tour for seniors cost?</h2>
              <p>
                The price depends on dates, accommodation, route, party size and the services
                reserved. Age alone does not determine a reliable price or discount. Attraction
                concessions depend on the supplier’s eligibility and identification rules and should
                be checked rather than assumed.
              </p>
              <p>
                A slower-paced trip may involve more hotel nights, different transport or additional
                guided time. Particular room or vehicle requirements can also affect cost and
                availability. Ask which arrangements are essential and which are optional when
                comparing proposals.
              </p>
              <h3>How AVIORA plans your journey</h3>
              <p>
                Start with approximate dates, interests, a budget range and a description of your
                comfortable pace. Explain essential access needs and the assistance each traveler
                requires. You do not need to prepare a finished itinerary.
              </p>
              <p>
                We discuss the route and its trade-offs, then check the proposed services. Your
                written proposal should distinguish confirmed arrangements from requests, describe
                inclusions and exclusions, and state the currency, total price and applicable
                conditions.
              </p>
              <p>
                Review those details alongside the{" "}
                <Link href="/terms">booking documents and terms</Link>. An enquiry or draft proposal
                does not reserve services. Confirmation follows the acceptance and payment process
                set out in your documents.
              </p>
              <p>
                AVIORA China Travel is operated by {siteConfig.operator.englishReferenceName}. Your
                booking identifies the contracting company and agreed service scope.{" "}
                <Link href="/company">Read about our operating company</Link> and{" "}
                <Link href="/about/founder">meet our founder</Link>.
              </p>
            </section>

            <TravelGuideAnswers id="seniors" />
            <section id="questions">
              <h2>Questions older travelers often ask.</h2>
              <div className={styles.questions}>
                {questions.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <TravelGuideReading id="seniors" />
            <section className={styles.closing} aria-labelledby="senior-next-step">
              <h2 id="senior-next-step">Tell us what a good travel day feels like.</h2>
              <p>
                Share the places you hope to see, the experiences you enjoy and the practical
                details that matter. Whether you prefer a full day of discovery or a quieter rhythm,
                we can begin with your priorities.
              </p>
              <TrackedLink
                href={planningHref}
                className={styles.button}
                trackingLabel="Discuss this journey"
                trackingPlacement="guide-closing"
              >
                Start planning at your pace <span aria-hidden="true">↗</span>
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
