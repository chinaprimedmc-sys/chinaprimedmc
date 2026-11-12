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
import styles from "./family.module.css";

const title = "China Family Tours, Planned Around Your Children.";
const planningHref = "/start-planning?preference=Family%20travel&source=family-guide";
const contents = [
  ["family-trip", "Is China right for your family?"],
  ["ages", "Children’s ages"],
  ["route", "Routes and trip length"],
  ["daily-pace", "Daily pace"],
  ["hotels", "Hotels and rooms"],
  ["practicalities", "Food and transport"],
  ["cost", "Family tour costs"],
  ["planning", "Planning with AVIORA"],
  ["planning-answers", "More planning answers"],
  ["questions", "Family travel questions"],
  ["reading-next", "Guides and journeys to compare"],
] as const;
const questions = [
  [
    "Can we enquire before choosing our dates?",
    "Yes. An approximate month or school-holiday period is enough to begin discussing possibilities. Prices and availability require more specific dates before confirmation.",
  ],
  [
    "Can you arrange a journey for children and grandparents?",
    "We can discuss a route around the needs of everyone traveling. Walking comfort, rest, rooms and shared interests should be considered early. Specific access arrangements depend on the destination and service.",
  ],
  [
    "Are international flights included?",
    "Check your quotation. Do not assume that international flights, or any other service not expressly listed, are included. Tell us if your flights are already booked so the ground arrangements can be planned around them.",
  ],
  [
    "Can we change the itinerary during the trip?",
    "Some changes may be possible, subject to timings, availability, reserved services and costs. Discuss a request with your guide or our China team before changing a confirmed arrangement.",
  ],
  [
    "Do we need to pay to make an enquiry?",
    "No payment is required to enquire. We normally reply personally within 24 hours to discuss your plans. A detailed quotation follows once the necessary route and service information has been checked.",
  ],
] as const;

export const metadata: Metadata = createTravelGuideMetadata("family");

export default function FamilyToursPage() {
  return (
    <PageContainer tone="white" className={styles.page}>
      <SiteNavigation />
      <JsonLd id="family-guide-breadcrumb" data={travelGuideBreadcrumb("family")} />
      <JsonLd id="family-guide-article" data={travelGuideSchema("family", title)} />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/about">About AVIORA</Link>
          <span aria-hidden="true">/</span>
          <span>Family travel</span>
        </nav>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Private China family travel</p>
          <h1>{title}</h1>
          <p className={styles.subtitle}>
            Private journeys shaped around your children’s ages, your family’s interests and a pace
            you can enjoy together.
          </p>
          <TravelGuideByline />
          <TrackedLink
            href={planningHref}
            className={styles.button}
            trackingLabel="Discuss this journey"
            trackingPlacement="guide-hero"
          >
            Discuss your family’s journey <span aria-hidden="true">↗</span>
          </TrackedLink>
        </header>
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="In this family travel guide">
            <p>In this guide</p>
            <ol>
              {contents.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className={styles.article} aria-label="China family travel guide">
            <TravelGuideOverview id="family" />
            <div className={styles.introduction}>
              <p>
                AVIORA plans private China family tours for international visitors, bringing
                itinerary design, hotels, guides, transport and local coordination into one written
                proposal. Your journey can combine major sights with hands-on experiences, time in
                local neighborhoods and space to rest. Specific room arrangements, activities and
                practical requests are checked before booking.
              </p>
              <p>
                You do not need to arrive with a finished itinerary. Start with your children’s
                ages, approximate dates and a few things your family enjoys. Those details help us
                discuss which places belong in your journey and how much to plan into each day.
              </p>
            </div>
            <section id="family-trip">
              <h2>Is China a good destination for a family trip?</h2>
              <p>
                China offers many ways for children and adults to share an experience: watching
                pandas, exploring a palace courtyard, tasting unfamiliar food, traveling by train or
                trying a practical craft. The right combination depends on your family’s interests
                and comfort.
              </p>
              <p>
                The main planning challenge is distance. A route that looks straightforward on a map
                can involve packing, transfers, security checks and substantial time between hotels.
                Major attractions may also involve walking, stairs, queues or limited shade.
              </p>
              <p>
                For families, a successful itinerary considers those demands alongside the
                sightseeing. A memorable morning may be enough before lunch and a quieter afternoon.
                An additional city is worthwhile when it adds something your family values and
                leaves enough time to enjoy it.
              </p>
              <p>
                Private arrangements allow us to discuss guiding, vehicles and timing around your
                party. Public attractions and scheduled trains or flights remain shared with other
                travelers, and reservations, opening hours and supplier conditions still apply.
              </p>
            </section>
            <section id="ages">
              <h2>Begin with your children’s ages and interests.</h2>
              <p>
                Age is a useful starting point, although children of the same age can enjoy very
                different trips. Tell us about their curiosity, energy, food preferences and
                experience of traveling.
              </p>
              <dl className={styles.factList}>
                <div>
                  <dt>Babies and preschool children</dt>
                  <dd>
                    Sleep routines, shorter outings, luggage space, room setup and manageable
                    transfers.
                  </dd>
                </div>
                <div>
                  <dt>Primary-school children</dt>
                  <dd>
                    Clear stories, practical activities, animals, food and breaks between larger
                    visits.
                  </dd>
                </div>
                <div>
                  <dt>Teenagers</dt>
                  <dd>
                    Photography, local food, contemporary cities, deeper cultural context and some
                    choice over the day.
                  </dd>
                </div>
                <div>
                  <dt>Children and grandparents together</dt>
                  <dd>
                    Walking comfort, room arrangements, shared experiences and opportunities to rest
                    separately.
                  </dd>
                </div>
              </dl>
              <p>
                These are conversation starters rather than fixed categories. A teenager interested
                in archaeology may want more time at a historic site; a younger child may happily
                spend an afternoon observing everyday life in a neighborhood.
              </p>
              <p>
                Share what has worked on previous holidays, too. Knowing that your family enjoys
                slow breakfasts or dislikes changing hotels can be more useful than a long
                attraction list.
              </p>
            </section>
            <section id="route">
              <h2>Choose a route your family has time to enjoy.</h2>
              <p>
                For a first China family trip, begin with the experiences you would most regret
                missing. Then consider how they connect. Beijing, Xi’an, Chengdu and Shanghai offer
                different possibilities. They do not all need to appear in the same journey.
              </p>
              <div className={styles.destinations}>
                <div>
                  <h3>Beijing</h3>
                  <p>
                    Imperial history, the Great Wall, traditional neighborhoods and food. Large
                    sites and Great Wall excursions can involve substantial walking and travel time.
                  </p>
                </div>
                <div>
                  <h3>Xi’an</h3>
                  <p>
                    The Terracotta Warriors, archaeology, city history and food. Consider excursion
                    timing, transfers and how much historical sightseeing your children enjoy.
                  </p>
                </div>
                <div>
                  <h3>Chengdu</h3>
                  <p>
                    Pandas, Sichuan culture, tea-house life and food. Consider panda-base walking,
                    weather, meal preferences and the time needed to connect with other cities.
                  </p>
                </div>
                <div>
                  <h3>Shanghai</h3>
                  <p>
                    Riverfront views, urban life, architecture and food. Balance major sights with
                    neighborhood time and your arrival or departure arrangements.
                  </p>
                </div>
              </div>
              <p>
                Hands-on activities can add variety, but they should fit naturally into the route.
                Cooking, craft or photography experiences depend on suitable providers, dates, ages
                and availability. A suggested activity becomes part of your booking only when
                confirmed in writing.
              </p>
              <h3>How many days should you allow?</h3>
              <p>
                There is no single ideal length for every family. Your available time, arrival and
                departure points, and tolerance for moving between cities should guide the decision.
              </p>
              <p>
                For a shorter stay, one city with carefully selected excursions, or two
                well-connected destinations, may provide a more comfortable introduction. With
                around ten to fourteen days, a multi-city journey becomes easier to discuss,
                provided the travel days receive enough space.
              </p>
              <p>
                A longer holiday can mean more destinations. It can also mean staying longer in
                fewer places. When reviewing a route, ask how many days involve changing hotels, how
                much time goes into transfers and whether the schedule leaves room for a tired
                morning.
              </p>
              <p>
                <Link href="/tours?travellers=families">Explore family journey ideas</Link>
              </p>
            </section>
            <section id="daily-pace">
              <h2>Plan the shape of each day.</h2>
              <p>
                A family-friendly day begins with realistic expectations about how long everyone
                will enjoy an activity.
              </p>
              <p>
                At some sites, an early start is useful because of reservations, conditions or the
                distance from your hotel. On other days, a relaxed breakfast may be practical. We
                discuss the fixed commitments first, then consider where the day can remain
                flexible.
              </p>
              <h3>A planning example</h3>
              <ol className={styles.dayExample}>
                <li>
                  <strong>Morning:</strong> one principal visit with guiding suited to the
                  children’s interests.
                </li>
                <li>
                  <strong>Lunch:</strong> a practical meal stop, allowing time to discuss
                  preferences.
                </li>
                <li>
                  <strong>Early afternoon:</strong> a rest window or hotel return where the route
                  allows.
                </li>
                <li>
                  <strong>Later afternoon:</strong> a shorter neighborhood walk or optional
                  activity.
                </li>
                <li>
                  <strong>Evening:</strong> dinner arrangements suited to your family’s energy.
                </li>
              </ol>
              <p>
                This illustrates pacing; it is not a promised daily schedule. Some excursions
                require a longer outing, and a hotel return is not practical everywhere.
              </p>
              <p>
                Flexibility also has limits. Tickets, transport departures and reserved activities
                may carry fixed timings or change costs. Your guide and our China team can discuss
                the options available when you want to adjust a day.
              </p>
            </section>
            <section id="hotels">
              <h2>Choose hotels that work for your family.</h2>
              <p>
                A hotel’s location and room setup can affect the whole journey. A room that looks
                spacious in photographs may not accommodate your family under the property’s
                occupancy rules. Two rooms in the same hotel may be on different floors. A requested
                connecting arrangement may still be awaiting confirmation.
              </p>
              <p>Before recommending accommodation, we need to understand:</p>
              <ul>
                <li>Each child’s age at the time of travel.</li>
                <li>How many rooms your family wants.</li>
                <li>Preferred bed arrangements.</li>
                <li>Whether anyone needs a cot, extra bed or step-free access.</li>
                <li>Whether proximity between rooms is essential.</li>
              </ul>
              <h3>Family rooms, extra beds and connecting rooms</h3>
              <p>
                These arrangements vary by property and room category. A family room does not have
                one universal layout, and adjoining rooms are not necessarily connected by an
                internal door.
              </p>
              <p>
                If connecting rooms are important, tell us at the beginning. We will check the
                specific arrangement and explain its status in the proposal. Cots, extra beds and
                connecting rooms are included only when the hotel has confirmed them in writing.
              </p>
              <p>
                Breakfast, laundry options and the area around the hotel also deserve attention.
                Being able to find an easy evening meal or return comfortably after sightseeing can
                make a meaningful difference.
              </p>
            </section>
            <section id="practicalities">
              <h2>Discuss food preferences and allergies early.</h2>
              <p>
                Food can become one of a family’s strongest memories of China. It can also require
                preparation when children prefer familiar dishes or someone has a dietary
                restriction.
              </p>
              <p>
                Tell us what your children usually eat, whether they enjoy trying new food and which
                ingredients they avoid. There is no need to make every meal an adventure.
              </p>
              <p>
                For allergies, explain the specific allergen, severity and any cross-contact
                concerns before the route is confirmed. We can discuss communication and practical
                restaurant choices, but cannot promise that every kitchen can provide an
                allergen-free environment.
              </p>
              <p>
                Families with halal, vegetarian or other requirements should brief us early. Options
                vary by destination and supplier; any specific meal arrangement needs to be checked.
              </p>
              <h3>Allow for luggage, walking and transport days.</h3>
              <p>
                Travel days are part of the itinerary. Children still need meals, breaks and clear
                expectations when moving between cities.
              </p>
              <p>
                Share the number of suitcases, any stroller or mobility aid and your children’s
                ages. Vehicle planning should account for luggage as well as passengers.
              </p>
              <p>
                If your family requires a child restraint, specify the child’s age, height and
                weight. Availability and suitability must be checked for the proposed vehicle and
                route. Do not assume a particular seat is included unless it appears in the
                confirmed arrangements.
              </p>
              <p>
                Tell us about comfortable walking time, stairs, balance or heat tolerance. We can
                review the visits and discuss practical adjustments, while being clear about access
                limitations that remain.
              </p>
              <p>
                Passports, entry permission, travel insurance and personal health preparation should
                be considered before booking. Requirements depend on your circumstances and can
                change. Check current entry information with the{" "}
                <a href="https://en.nia.gov.cn/" target="_blank" rel="noreferrer">
                  National Immigration Administration of China
                </a>{" "}
                and the relevant Chinese embassy or consulate; discuss coverage with your insurer.
              </p>
            </section>
            <section id="cost">
              <h2>What does a private China family tour cost?</h2>
              <p>
                The cost depends on what your family books and when you travel. The number of
                travelers alone does not establish a reliable per-person price.
              </p>
              <ul>
                <li>
                  <strong>Travel dates:</strong> holidays, school breaks and local demand can affect
                  availability and rates.
                </li>
                <li>
                  <strong>Room arrangements:</strong> room count, category, occupancy and connecting
                  requirements influence accommodation costs.
                </li>
                <li>
                  <strong>Children’s ages:</strong> ticket and accommodation policies differ by
                  supplier.
                </li>
                <li>
                  <strong>Route:</strong> additional cities introduce transport and coordination
                  requirements.
                </li>
                <li>
                  <strong>Private services:</strong> guided days, vehicle arrangements and selected
                  experiences affect the total.
                </li>
              </ul>
              <p>
                A child price should be calculated from the relevant arrangements rather than
                assumed to be a fixed percentage of an adult price. Some services are shared within
                your party; others are charged individually.
              </p>
              <p>
                Your quotation should state the currency, family total, inclusions, exclusions,
                payment schedule and relevant supplier conditions. Where a starting price is
                published, read its party size, room basis, travel period and pricing unit alongside
                the amount. The written proposal confirms what applies to your dates and family.
              </p>
            </section>
            <section id="planning">
              <h2>How AVIORA plans your family journey.</h2>
              <p>
                We begin with a conversation about your family, then connect those preferences with
                the practical requirements of traveling in China.
              </p>
              <h3>Share the details that matter.</h3>
              <p>
                Approximate dates, children’s ages, interests and a comfortable budget range give us
                a useful starting point. Mention any essential room, dietary or mobility
                requirements.
              </p>
              <h3>Discuss the route and its trade-offs.</h3>
              <p>
                We consider places, hotel changes, travel days and daily pace together. If a request
                introduces extra cost or a more demanding schedule, we explain that so you can
                decide.
              </p>
              <h3>Review a written proposal.</h3>
              <p>
                The proposal identifies the arrangements offered, their availability status, the
                price and applicable conditions. This is the opportunity to clarify room setups,
                guided services, transport and exclusions.
              </p>
              <h3>Confirm your booking.</h3>
              <p>
                An enquiry or proposal does not reserve the journey. Booking confirmation follows
                the written acceptance and payment process set out in your{" "}
                <Link href="/terms">booking documents and terms</Link>.
              </p>
              <h3>Prepare for departure.</h3>
              <p>
                Before traveling, review arrival arrangements, meeting points and on-trip contact
                details with our China team. Raise practical concerns early so the relevant options
                can be discussed.
              </p>
              <p>
                AVIORA China Travel is operated by {siteConfig.operator.englishReferenceName}. Your
                written booking identifies the legal contracting company and agreed service scope.{" "}
                <Link href="/company">Meet our operating company</Link>.
              </p>
            </section>
            <TravelGuideAnswers id="family" />
            <section id="questions">
              <h2>Questions families often ask.</h2>
              <div className={styles.questions}>
                {questions.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <TravelGuideReading id="family" />
            <section className={styles.closing} aria-labelledby="family-next-step">
              <h2 id="family-next-step">Tell us about your family.</h2>
              <p>
                A useful starting point is simple: your children’s ages, approximate travel dates
                and the things you enjoy doing together.
              </p>
              <p>
                Tell us about a particular interest, a practical concern or a previous holiday that
                worked well. We will help you discuss a China journey with a route and pace that
                suit your family.
              </p>
              <TrackedLink
                href={planningHref}
                className={styles.button}
                trackingLabel="Discuss this journey"
                trackingPlacement="guide-closing"
              >
                Start planning your family journey <span aria-hidden="true">↗</span>
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
