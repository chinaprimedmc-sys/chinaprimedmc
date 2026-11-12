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

const title = "Your First China Trip, Planned With Clarity.";
const planningHref =
  "/start-planning?preference=First%20visit%20to%20China&source=first-time-guide";
const contents = [
  ["where-to-start", "Where to begin"],
  ["routes", "Routes and trip length"],
  ["when-to-go", "Dates and seasons"],
  ["entry", "Passports and entry checks"],
  ["arrival", "Your first arrival"],
  ["payments-connectivity", "Payments and connectivity"],
  ["getting-around", "Transport, hotels and food"],
  ["planning", "Costs and booking"],
  ["planning-answers", "More planning answers"],
  ["questions", "Common questions"],
  ["reading-next", "Guides and journeys to compare"],
] as const;

const questions = [
  [
    "How many days do I need for a first China trip?",
    "Start with your available nights and the experiences you most want to include. A shorter trip may suit one city or two well-connected destinations. Around ten to fourteen days gives more scope for a multi-city introduction, provided transfers and rest receive enough time. These are planning examples, not entry-permission rules.",
  ],
  [
    "Do I need a visa to visit China?",
    "It depends on your passport, purpose of travel, dates, route and the entry arrangements that apply to you. Check current rules with the relevant Chinese embassy or consulate and the National Immigration Administration before booking. A tour reservation does not establish visa-free eligibility or guarantee entry.",
  ],
  [
    "Do I need to speak Mandarin?",
    "You can discuss guided services in your preferred language, subject to availability and confirmation. For independent time, keep your hotel address in Chinese, meeting instructions and travel contacts available offline. A guide is present during the services agreed in your booking.",
  ],
  [
    "Can I use my usual bank card and phone?",
    "Check with your bank, payment provider and mobile provider before departure. Card acceptance, identity verification, transaction limits, roaming, eSIM compatibility and access to online services can vary. Prepare an alternative payment method and offline travel information.",
  ],
  [
    "Is a private tour the same as an all-inclusive holiday?",
    "No. Private describes the reserved services arranged for your own party. Your quotation should state exactly which hotels, guiding, transport, admissions and meals are included. Public attractions and scheduled trains or flights remain shared with other travelers.",
  ],
  [
    "Should I book international flights before enquiring?",
    "You can enquire before buying flights. Comparing arrival and departure cities alongside the route may help avoid unnecessary backtracking. If flights are already booked, share the details so the ground arrangements can be planned around them. Services are reserved only through the agreed booking process.",
  ],
] as const;

export const metadata: Metadata = createTravelGuideMetadata("first-time");

export default function FirstTimeChinaPage() {
  return (
    <PageContainer tone="white" className={styles.page}>
      <SiteNavigation />
      <JsonLd id="first-time-guide-breadcrumb" data={travelGuideBreadcrumb("first-time")} />
      <JsonLd id="first-time-guide-article" data={travelGuideSchema("first-time", title)} />
      <div className={styles.container}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/about">About AVIORA</Link>
          <span aria-hidden="true">/</span>
          <span>First-time visitors</span>
        </nav>
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Private China travel for first-time visitors</p>
          <h1>{title}</h1>
          <p className={styles.subtitle}>
            Begin with what you want to experience. Connect the places, understand the practical
            details and arrive knowing what happens next.
          </p>
          <TravelGuideByline />
          <TrackedLink
            href={planningHref}
            className={styles.button}
            trackingLabel="Discuss this journey"
            trackingPlacement="guide-hero"
          >
            Discuss your first China trip <span aria-hidden="true">↗</span>
          </TrackedLink>
        </header>
        <div className={styles.layout}>
          <nav className={styles.contents} aria-label="In this first-time China travel guide">
            <p>In this guide</p>
            <ol>
              {contents.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ol>
          </nav>
          <article className={styles.article} aria-label="First-time China travel guide">
            <TravelGuideOverview id="first-time" />
            <div className={styles.introduction}>
              <p>
                AVIORA plans private China journeys for international visitors, bringing itinerary
                design, hotels, guides, transport and local coordination into one written proposal.
                For a first visit, we begin with your interests and available time, then work
                through the route and the practical arrangements.
              </p>
              <p>
                You do not need to understand every destination or arrive with a finished itinerary.
                A few priorities, approximate dates and an honest sense of your preferred pace
                provide a useful starting point.
              </p>
            </div>

            <section id="where-to-start">
              <h2>How do you start planning a first trip to China?</h2>
              <p>
                Choose a few experiences you most want to have, decide how much time you can spend
                and compare arrival and departure options. Then build a route that leaves room for
                transfers, meals and rest. Check entry requirements before committing to bookings.
              </p>
              <p>
                Perhaps you want to walk on the Great Wall, understand the Terracotta Warriors, see
                pandas or explore contemporary city life. Select the experiences that matter most to
                you rather than trying to include every well-known stop.
              </p>
              <dl className={styles.factList}>
                <div>
                  <dt>Your interests</dt>
                  <dd>
                    History, food, landscapes, art, family experiences or a particular place you
                    have always wanted to see.
                  </dd>
                </div>
                <div>
                  <dt>Your available time</dt>
                  <dd>The nights you can spend in China, including arrival and departure days.</dd>
                </div>
                <div>
                  <dt>Your comfortable pace</dt>
                  <dd>
                    How you feel about early starts, walking, hotel changes and independent time.
                  </dd>
                </div>
                <div>
                  <dt>Your budget range</dt>
                  <dd>
                    The amount you are comfortable spending and whether it includes international
                    flights.
                  </dd>
                </div>
              </dl>
              <p>
                Share essential dietary, room or access needs early. They can affect which hotels
                and services belong in the proposal.
              </p>
            </section>

            <section id="routes">
              <h2>Where should you go on your first visit?</h2>
              <p>
                Beijing, Xi’an, Chengdu and Shanghai offer different introductions to China. You do
                not need to visit all four. The right combination depends on your interests,
                available nights and how much time you want to spend moving between places.
              </p>
              <div className={styles.destinations}>
                <div>
                  <h3>Beijing: imperial history and the Great Wall</h3>
                  <p>
                    Consider palace history, traditional neighborhoods and an excursion to the Great
                    Wall. Large sites and out-of-city visits require realistic walking and transfer
                    time.
                  </p>
                </div>
                <div>
                  <h3>Xi’an: archaeology and earlier capitals</h3>
                  <p>
                    The Terracotta Warriors can anchor a history-focused stay. Allow time for the
                    excursion and for the city beyond its most famous archaeological site.
                  </p>
                </div>
                <div>
                  <h3>Chengdu: pandas and Sichuan culture</h3>
                  <p>
                    Pandas, tea-house life and regional food provide a different rhythm. Discuss
                    panda-base routes, walking and food preferences when planning.
                  </p>
                </div>
                <div>
                  <h3>Shanghai: architecture and urban life</h3>
                  <p>
                    Explore riverfront views, neighborhoods and contemporary China. Its suitability
                    as a start or finish depends on your flight options and wider route.
                  </p>
                </div>
              </div>
              <h3>How many days should you allow?</h3>
              <p>
                For a shorter stay, one city or two well-connected destinations may provide a
                comfortable introduction. Around ten to fourteen days allows more scope for a
                multi-city journey, with time set aside for the connections.
              </p>
              <p>
                A Beijing–Xi’an–Shanghai route is one possible starting point for history and urban
                life. Adding Chengdu changes the transport plan and the number of nights needed.
                Treat these as discussion routes; the order and suitability depend on your dates and
                services.
              </p>
              <p>
                Count hotel nights and transfer days, not just destinations. A late arrival offers
                little sightseeing time, while an intercity journey can occupy much of a day. Adding
                a place is useful when there is enough time to enjoy it.
              </p>
              <p>
                <Link href="/tours">Explore private China journey ideas</Link> and{" "}
                <Link href="/destinations">browse destinations</Link> to identify what interests you
                most.
              </p>
            </section>

            <section id="when-to-go">
              <h2>When should you visit China for the first time?</h2>
              <p>
                Compare the conditions in the places on your route rather than choosing a season for
                the whole country. Temperature, rainfall and daylight vary by region, and a
                city-focused holiday has different requirements from a mountain journey.
              </p>
              <p>
                Spring and autumn are useful periods to compare for many city itineraries, but they
                do not guarantee mild weather or quiet sites. Summer heat, winter cold and seasonal
                operating conditions need to be assessed for the actual visits you want.
              </p>
              <p>
                Check the current public-holiday calendar before fixing dates. Domestic holiday
                travel can affect transport, hotel availability, prices and crowd levels. If your
                dates are fixed, discuss what that means for the route and daily timing.
              </p>
              <p>
                School holidays, a special event or a particular landscape may matter more to you
                than a broad seasonal recommendation. Tell us what is fixed and where you have
                flexibility.
              </p>
            </section>

            <section id="entry">
              <h2>Check passports and entry requirements before booking.</h2>
              <p>
                Whether you need a visa depends on your passport, purpose of travel, dates, route
                and applicable entry arrangements. Visa-free entry and transit arrangements are
                distinct categories with their own conditions. A suggested itinerary does not
                establish your eligibility.
              </p>
              <p>
                Use current information from the relevant Chinese embassy or consulate and the{" "}
                <a href="https://en.nia.gov.cn/" target="_blank" rel="noreferrer">
                  National Immigration Administration of China
                </a>
                . Check any requirements with your carrier as well. Do not rely on another
                traveler’s experience or an undated article to decide what applies to you.
              </p>
              <ul>
                <li>Review passport validity and any requirements for your travel documents.</li>
                <li>
                  Check permitted entry points, duration, travel area and onward-travel conditions
                  where relevant.
                </li>
                <li>
                  Review every border crossing if your route includes Hong Kong, Macao or travel
                  outside mainland China.
                </li>
                <li>Allow time for any necessary application before making commitments.</li>
              </ul>
              <p>
                Keep names and passport details consistent across booked services. Share information
                needed for reservations through the booking process and ask how to correct a
                discrepancy before tickets are issued.
              </p>
            </section>

            <section id="arrival">
              <h2>Know what happens when you land.</h2>
              <p>
                If an arrival transfer is included, your travel documents should explain the meeting
                point, how to identify the person meeting you and what to do if you cannot find each
                other. Keep those instructions accessible without mobile data.
              </p>
              <p>
                Share the flight number and arrival airport, including terminal information when
                available. Ask how delays affect the transfer and whether waiting limits or extra
                charges apply. Save your hotel’s name, address in Chinese and telephone number
                offline.
              </p>
              <h3>Leave breathing room on the first day.</h3>
              <p>
                After a long flight, immigration, luggage collection and the journey to the hotel
                can take time. An early arrival does not automatically include immediate room
                access. Check the hotel’s check-in arrangements if resting on arrival is important.
              </p>
              <p>
                A simple first evening and a realistic following morning often make a better
                introduction than a tightly packed arrival schedule. Tell us how you usually feel
                after international travel.
              </p>
            </section>

            <section id="payments-connectivity">
              <h2>Prepare payments and mobile connectivity before departure.</h2>
              <h3>Payments</h3>
              <p>
                Digital payments are common in China, but the practical options for an international
                visitor depend on the provider, account setup, bank card and merchant. Check the
                current conditions for services such as Alipay or Weixin Pay with the provider
                rather than assuming every foreign card will work everywhere.
              </p>
              <p>
                Review identity verification, card-linking requirements, fees and transaction
                limits. Ask your bank about overseas use and prepare an alternative payment method.
                A successful setup does not guarantee every later transaction, so avoid depending on
                one app or card for the entire journey.
              </p>
              <h3>Mobile data and messaging</h3>
              <p>
                Compare international roaming, travel eSIMs and local services according to your
                device and needs. Check compatibility, coverage, activation and provider terms. Some
                familiar online services may be unavailable in mainland China; confirm that your
                planned contact channel will work for you.
              </p>
              <p>
                Download or save your itinerary, hotel details, meeting instructions and key
                contacts before flying. If you expect to use maps or translation independently,
                check the tools you plan to use and keep essential addresses in Chinese.
              </p>
              <p>
                Before departure, agree how to reach the China team, what contact arrangements apply
                outside guided hours and what to do if your first contact is unavailable.
              </p>
            </section>

            <section id="getting-around">
              <h2>Understand the transport, hotel and meal arrangements.</h2>
              <h3>Flights and high-speed trains</h3>
              <p>
                Compare the full hotel-to-hotel journey. A short scheduled flight or train ride
                still involves transfers, security, waiting and onward travel. Station or airport
                location can change which option works best.
              </p>
              <p>
                Check luggage conditions and any assistance needs for the actual service. Ask where
                your guide or driver meets you at each end and which parts you handle independently.
                Keep the identification used for the reservation available as instructed.
              </p>
              <h3>Hotels</h3>
              <p>
                Choose location and room setup alongside star rating. A property near your interests
                may suit independent evenings, while room occupancy, bed configuration and access
                features need specific confirmation.
              </p>
              <p>
                Check whether breakfast is included, what check-in arrangements apply and whether
                any essential room request is confirmed. Hotel photographs rarely answer every
                practical question.
              </p>
              <h3>Food and dietary needs</h3>
              <p>
                Explain what you enjoy eating and how adventurous you want meals to be. Regional
                cuisines differ; a food-focused journey and a trip with mostly familiar meal choices
                can both be discussed.
              </p>
              <p>
                Share allergies and dietary requirements before booking. Discuss ingredients,
                communication and suitable restaurant choices; an allergen-free kitchen cannot be
                assumed. If halal arrangements are important, see our{" "}
                <Link href="/china-tours-for-muslim-travelers">Muslim travel planning guide</Link>.
              </p>
              <p>
                Families can also review{" "}
                <Link href="/china-family-tours">traveling with children</Link>, while travelers
                with particular walking or access needs can read our{" "}
                <Link href="/china-tours-for-seniors">guide to a comfortable pace</Link>.
              </p>
            </section>

            <section id="planning">
              <h2>What does a first private China tour cost?</h2>
              <p>
                The price depends on your dates, party size, hotels, route and reserved services. A
                useful quotation states the total in a named currency and explains the room basis,
                inclusions, exclusions and payment and cancellation conditions.
              </p>
              <p>
                Check international flights, domestic transport, admissions, meals, guiding,
                transfers, optional outings and personal expenses separately. Personal travel
                insurance should not be assumed to be included; review coverage for your
                circumstances and activities with your insurer.
              </p>
              <h3>What does AVIORA arrange?</h3>
              <p>
                We discuss your interests, pace and budget, then connect them with the practical
                route and services. The written proposal identifies the arrangements offered and
                their availability status. Raise essential requests before accepting it.
              </p>
              <p>
                Private services are arranged for your party during the agreed times. Public
                attractions and scheduled transport remain shared environments. A private tour is
                not automatically all-inclusive or accompanied by a guide throughout every hour of
                the trip.
              </p>
              <h3>From enquiry to departure</h3>
              <p>
                An enquiry or draft proposal does not reserve services. Confirmation follows the
                acceptance and payment process in your{" "}
                <Link href="/terms">booking documents and terms</Link>. Before traveling, review
                confirmed services, arrival instructions and contact details, then raise any
                remaining practical questions.
              </p>
              <p>
                AVIORA China Travel is operated by {siteConfig.operator.englishReferenceName}. Your
                booking identifies the contracting company and agreed service scope.{" "}
                <Link href="/company">Read about our operating company</Link> and{" "}
                <Link href="/about/founder">meet our founder</Link>.
              </p>
            </section>

            <TravelGuideAnswers id="first-time" />
            <section id="questions">
              <h2>Questions first-time visitors often ask.</h2>
              <div className={styles.questions}>
                {questions.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
            <TravelGuideReading id="first-time" />
            <section className={styles.closing} aria-labelledby="first-time-next-step">
              <h2 id="first-time-next-step">Start with what brings you to China.</h2>
              <p>
                Tell us your approximate dates, who is traveling and a few experiences you would
                love to have. We can help you discuss a route and work through the details from
                there.
              </p>
              <TrackedLink
                href={planningHref}
                className={styles.button}
                trackingLabel="Discuss this journey"
                trackingPlacement="guide-closing"
              >
                Start planning your first China trip <span aria-hidden="true">↗</span>
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
