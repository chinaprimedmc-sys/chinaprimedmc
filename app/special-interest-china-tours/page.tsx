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

const title = "Special-Interest China Tours, Built Around Your Curiosity.";
const planningHref =
  "/start-planning?preference=Special-interest%20journey&source=special-interest-guide";
const contents = [
  ["your-interest", "Turn an interest into a journey"],
  ["food", "Food and tea"],
  ["photography", "Photography"],
  ["culture", "History, art and craft"],
  ["nature", "Nature and walking"],
  ["heritage", "Family heritage"],
  ["route", "Route, timing and companions"],
  ["planning", "Expertise, costs and confirmation"],
  ["planning-answers", "More planning answers"],
  ["questions", "Common questions"],
  ["reading-next", "Guides and journeys to compare"],
] as const;

const questions = [
  [
    "Do I need specialist knowledge to book a themed China tour?",
    "No. Explain what interests you and how deeply you want to explore it. A first introduction and a technically focused visit need different pacing, activities and guiding. Examples of books, photographs or previous experiences can help clarify your interests.",
  ],
  [
    "Can one itinerary combine several interests?",
    "Yes. Food, architecture and photography, for example, can share a route. Choose the main priority first so the schedule has a clear focus. Additional activities should fit the available time, locations and needs of your party.",
  ],
  [
    "Can you arrange private access to a museum, studio or workshop?",
    "You can request it, but access depends on the venue, host, dates and permission. A private tour does not itself provide exclusive access or an out-of-hours visit. Treat a proposed meeting or visit as requested until the relevant arrangement is confirmed in writing.",
  ],
  [
    "Can you help plan a visit connected to my family’s roots?",
    "We can discuss the known location, your records and the travel arrangements that may be possible. Finding relatives, identifying an ancestral home or gaining access to records cannot be promised. Share only the personal information needed for the enquiry and consider the privacy of living people.",
  ],
  [
    "What happens if a key activity cannot go ahead?",
    "Discuss the role of that activity before booking and review the applicable supplier and cancellation conditions. Weather, venue closures or host availability may affect plans. Ask which alternatives can be considered and whether they change the price or route.",
  ],
] as const;

export const metadata: Metadata = createTravelGuideMetadata("special-interests");

export default function SpecialInterestChinaPage() {
  return (
    <PageContainer tone="white" className={styles.page}>
      <SiteNavigation />
      <JsonLd
        id="special-interest-guide-breadcrumb"
        data={travelGuideBreadcrumb("special-interests")}
      />
      <JsonLd
        id="special-interest-guide-article"
        data={travelGuideSchema("special-interests", title)}
      />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/about">About AVIORA</Link>
          <span aria-hidden="true">/</span>
          <span>Special interests</span>
        </nav>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Private special-interest travel in China</p>
          <h1>{title}</h1>
          <p className={styles.subtitle}>
            Follow the subject that draws you to China, with time to look more closely, ask better
            questions and make the journey your own.
          </p>
          <TravelGuideByline />
          <TrackedLink
            href={planningHref}
            className={styles.button}
            trackingLabel="Discuss this journey"
            trackingPlacement="guide-hero"
          >
            Tell us what interests you <span aria-hidden="true">↗</span>
          </TrackedLink>
        </header>
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="In this special-interest travel guide">
            <p>In this guide</p>
            <ol>
              {contents.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className={styles.article} aria-label="Special-interest China travel guide">
            <TravelGuideOverview id="special-interests" />
            <div className={styles.introduction}>
              <p>
                AVIORA develops private China journeys around personal interests, bringing the
                route, hotels, guiding, transport and selected activities into one written proposal.
                Food, photography, history, art, nature and family heritage can each provide a
                starting point. Specific hosts, specialist services and access requests need to be
                checked for your dates.
              </p>
              <p>
                A focused journey gives you time to engage with a subject. That might mean comparing
                regional flavors, returning to a place in different light or spending a longer
                morning at a museum. Tell us what you want to understand or experience, and we can
                discuss the places and arrangements that would support it.
              </p>
            </div>

            <section id="your-interest">
              <h2>What is a special-interest China tour?</h2>
              <p>
                A special-interest tour uses a subject to guide the choice of destinations, visits,
                timing and services. Its value comes from how those elements connect: the right
                context, enough time and activities suited to your level of interest.
              </p>
              <p>
                You do not need to be an expert. A curious first-time visitor may want an
                introduction to Chinese tea, while an experienced enthusiast may have specific
                questions about production or regional traditions. Those are different briefs.
              </p>
              <dl className={styles.factList}>
                <div>
                  <dt>The subject</dt>
                  <dd>What draws you in, and which aspects matter most?</dd>
                </div>
                <div>
                  <dt>The depth</dt>
                  <dd>
                    Would you enjoy a broad introduction, a practical activity or more detailed
                    discussion?
                  </dd>
                </div>
                <div>
                  <dt>The experience</dt>
                  <dd>
                    Do you want to observe, taste, photograph, walk, make something or meet a
                    suitable host?
                  </dd>
                </div>
                <div>
                  <dt>The essential element</dt>
                  <dd>
                    Is one place, activity or type of expertise central to your decision to travel?
                  </dd>
                </div>
              </dl>
              <p>
                A photograph, reading list or example from a previous trip can be useful. Explain
                what you liked about it so the proposal can reflect the underlying interest.
              </p>
            </section>

            <section id="food">
              <h2>Food and tea: explore the context behind the flavors.</h2>
              <p>
                A food-focused journey can connect regional dishes with markets, neighborhoods and
                the rhythms of everyday life. Begin with what you enjoy: tasting a wide variety,
                understanding ingredients, visiting particular regions or learning through a
                practical session.
              </p>
              <p>
                Chengdu and Xi’an offer different starting points for regional food interests.
                Beijing or Shanghai may fit a wider route that combines meals with history or
                architecture. The restaurant and activity choices still need to be assessed
                individually.
              </p>
              <h3>Decide how you want to participate.</h3>
              <p>
                A guided tasting, a cooking class and a restaurant meal offer different experiences.
                For a class, discuss the menu, group format, language, practical tasks and what you
                will actually prepare. A private itinerary does not automatically make an activity
                private.
              </p>
              <p>
                For tea interests, explain whether you want an introductory tasting, regional
                context, a producer visit or a more technical discussion. Harvest-related visits
                depend on location, season and host arrangements; participation should not be
                assumed from a suggested destination.
              </p>
              <p>
                Share allergies, dietary restrictions and spice preferences before activities are
                selected. Ingredient and preparation questions need to be checked with the provider.
                If halal requirements are important, see our{" "}
                <Link href="/china-tours-for-muslim-travelers">Muslim travel planning guide</Link>.
              </p>
            </section>

            <section id="photography">
              <h2>Photography: make time for the pictures you want to take.</h2>
              <p>
                A photography-focused itinerary begins with the subject: architecture, landscapes,
                street scenes, portraits or details of daily life. That choice affects the route,
                time of day, walking and the amount of equipment you want to carry.
              </p>
              <p>
                Tell us whether photography is the purpose of the journey or something you want to
                enjoy alongside general sightseeing. An early departure for light may suit one party
                while making another day unnecessarily tiring.
              </p>
              <h3>Separate logistics from tuition.</h3>
              <p>
                A destination guide can help with agreed local arrangements without being a
                photography instructor. If you want technical tuition, portfolio feedback or
                particular photographic expertise, request that service explicitly so availability
                and qualifications can be assessed.
              </p>
              <p>
                Weather, light, crowds and access conditions affect what is possible. A sunrise
                outing does not promise a clear sky or a particular image. Discuss alternatives and
                whether returning to the same location matters more than adding another stop.
              </p>
              <p>
                Respect people’s consent and site photography rules. Tripods, drones, commercial
                shoots and particular locations may have restrictions or permission requirements.
                Ask about the equipment and activity you intend to use before assuming it can be
                included.
              </p>
            </section>

            <section id="culture">
              <h2>History, art and craft: follow a question through the route.</h2>
              <p>
                A focused cultural trip can connect what you see with a theme you want to
                understand. You might compare imperial capitals, explore architecture across periods
                or combine a museum visit with a practical introduction to a craft.
              </p>
              <p>
                Beijing and Xi’an can form a starting point for historical interests, while Shanghai
                offers another perspective on architecture and urban change. The route should
                reflect your question, available time and the visits that can actually be arranged.
              </p>
              <h3>Choose the right level of interpretation.</h3>
              <p>
                General guiding, academic expertise and a practitioner’s demonstration are different
                services. Tell us whether you want a clear introduction or a detailed subject
                discussion, and in which language. Named specialists or particular credentials need
                confirmation.
              </p>
              <p>
                For a craft session, clarify whether you will observe or participate, what materials
                are provided and how long the activity lasts. Ask about group size and any age,
                access or safety requirements relevant to your party.
              </p>
              <p>
                A studio, workshop or museum visit remains subject to the host’s arrangements.
                Private access, meetings with particular people and visits outside public hours
                should appear only as confirmed services when the relevant agreement is in place.
              </p>
            </section>

            <section id="nature">
              <h2>Nature and walking: match the setting to the whole day.</h2>
              <p>
                Describe what you want from time outdoors: a scenic introduction, a sustained walk,
                landscape photography or a particular natural interest. Then consider the terrain,
                season, elevation and journey needed to reach the place.
              </p>
              <p>
                A viewpoint reached by transport can still involve steps or a queue. A short trail
                can be demanding because of its surface, gradient or exposure. Ask about the actual
                route rather than relying on a label such as “easy.”
              </p>
              <ul>
                <li>
                  <strong>Conditions:</strong> likely weather, daylight, seasonal access and the
                  available alternatives.
                </li>
                <li>
                  <strong>Physical demands:</strong> walking time, gradients, steps, elevation and
                  opportunities to rest.
                </li>
                <li>
                  <strong>Services:</strong> guiding, transport, equipment and any specialist
                  knowledge requested.
                </li>
                <li>
                  <strong>Expectations:</strong> the role of wildlife, flowering or other seasonal
                  features in your plans.
                </li>
              </ul>
              <p>
                Wildlife sightings and seasonal conditions cannot be guaranteed. If one natural
                event is the main reason for your journey, discuss that before dates and services
                are fixed. Review personal health and activity questions with the appropriate
                clinician or insurer.
              </p>
              <p>
                Our <Link href="/china-tours-for-seniors">guide to traveling at your own pace</Link>{" "}
                includes more questions about walking, equipment and access.
              </p>
            </section>

            <section id="heritage">
              <h2>Family heritage: begin with what is already known.</h2>
              <p>
                A heritage journey may center on a known hometown, a family story or the wish to
                understand where earlier generations lived. Begin with the information you can
                identify and the experience you hope to have.
              </p>
              <p>
                Place names may have different spellings or may have changed over time. A village
                name in Chinese, an old address or an approximate location can help frame an
                enquiry. Explain which details are established and which are uncertain.
              </p>
              <h3>Distinguish travel planning from research.</h3>
              <p>
                Reaching a known location is a different task from tracing relatives or identifying
                an ancestral property. Research, translation, record access and introductions need
                their own scope and feasibility checks. A journey cannot promise a family discovery
                or an emotional outcome.
              </p>
              <p>
                Consider the privacy of living people and the consent needed for contact or visits.
                Share only information relevant to the enquiry through an agreed channel. Any
                proposed meeting or access to a private place requires the people involved to agree.
              </p>
              <p>
                Leave room in the route for reflection and for the possibility that a location has
                changed. Tell us whether you also want broader cultural or historical context around
                the family visit.
              </p>
            </section>

            <section id="route">
              <h2>Give the theme enough time, and the journey enough variety.</h2>
              <p>
                A focused itinerary may benefit from fewer hotel changes and longer stays. Time
                spent traveling between regions competes with time for the subject itself. Start
                with the essential experiences, then assess how they connect.
              </p>
              <p>
                For example, a city photography day might include an agreed morning outing, rest or
                independent time and a second visit later in the day. A workshop may work better
                with a free afternoon than between two timed admissions. These are planning
                examples, not confirmed schedules.
              </p>
              <h3>Traveling with people who have different interests</h3>
              <p>
                Discuss how much of the trip everyone wants to share. Some parties enjoy a common
                morning visit with optional independent time later. Separate guiding, vehicles or
                activities need to be planned and priced where required.
              </p>
              <p>
                Children’s interests, walking comfort and dietary needs still belong in the brief.
                Our <Link href="/china-family-tours">family travel guide</Link> can help if several
                generations are traveling together.
              </p>
              <p>
                If this is your first visit, you can combine a theme with a broader introduction.
                Our <Link href="/first-time-china-tours">first-time China guide</Link> covers entry
                checks, payments and arrival preparation.{" "}
                <Link href="/destinations">Browse destinations</Link> and{" "}
                <Link href="/tours">private journey ideas</Link> to begin comparing possibilities.
              </p>
            </section>

            <section id="planning">
              <h2>How AVIORA develops a special-interest journey.</h2>
              <p>
                Start with your subject, approximate dates, party size and a budget range. Describe
                the level of depth you want and any experience that is essential to your decision.
                We discuss the route and check the proposed services against that brief.
              </p>
              <h3>Confirm the expertise and access.</h3>
              <p>
                The proposal should distinguish destination guiding from specialist instruction, and
                a suggested activity from one confirmed by a provider. Ask who will deliver a
                session, in which language, for how long and in what format. Any essential
                credentials or access arrangements need explicit confirmation.
              </p>
              <h3>Understand the cost.</h3>
              <p>
                Dates, hotels, transport, guiding and activity fees affect the price. Specialist
                time, translation, materials or additional visits may introduce separate costs.
                Check whether an experience is shared or reserved exclusively for your party.
              </p>
              <p>
                Your quotation should state the currency, total price, inclusions, exclusions and
                relevant supplier conditions. Ask what happens if an essential host or activity
                becomes unavailable, and how alternatives would be discussed.
              </p>
              <h3>Review the booking details.</h3>
              <p>
                An enquiry or draft proposal does not reserve services. Confirmation follows the
                acceptance and payment process in your{" "}
                <Link href="/terms">booking documents and terms</Link>. Before departure, review the
                confirmed arrangements, meeting instructions and equipment or preparation needed for
                your activities.
              </p>
              <p>
                AVIORA China Travel is operated by {siteConfig.operator.englishReferenceName}. Your
                booking identifies the contracting company and agreed service scope.{" "}
                <Link href="/company">Read about our operating company</Link> and{" "}
                <Link href="/about/founder">meet our founder</Link>.
              </p>
            </section>

            <TravelGuideAnswers id="special-interests" />
            <section id="questions">
              <h2>Questions about special-interest China travel.</h2>
              <div className={styles.questions}>
                {questions.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <TravelGuideReading id="special-interests" />
            <section className={styles.closing} aria-labelledby="special-interest-next-step">
              <h2 id="special-interest-next-step">Tell us what you would love to explore.</h2>
              <p>
                Share a subject, a question or a place that has stayed in your imagination. Add your
                approximate dates and who is traveling, and we can begin discussing a journey with
                that interest at its center.
              </p>
              <TrackedLink
                href={planningHref}
                className={styles.button}
                trackingLabel="Discuss this journey"
                trackingPlacement="guide-closing"
              >
                Start planning around your interests <span aria-hidden="true">↗</span>
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
