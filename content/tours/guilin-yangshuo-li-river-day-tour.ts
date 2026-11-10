import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

const yangshuoImage = (file: string, alt: string, width: number, height: number): MediaAsset => ({
  src: `/tours/guilin-yangshuo-li-river-day-tour/${file}`,
  alt,
  width,
  height,
});

const yangshuoKarst = yangshuoImage(
  "01-yangshuo-karst-countryside.webp",
  "Karst peaks and a quiet countryside retreat in Yangshuo",
  1600,
  2133,
);
const rainyLiRiver = yangshuoImage(
  "02-li-river-cruise-rainy-karst.webp",
  "Karst mountains and river boats on the Li River in misty weather",
  1600,
  2044,
);
const yulongBambooRaft = yangshuoImage(
  "03-yulong-river-bamboo-raft.webp",
  "A traditional bamboo raft drifting beneath a leafy canopy on the Yulong River",
  1600,
  2133,
);
const cruiseLounge = yangshuoImage(
  "04-li-river-cruise-lounge.webp",
  "Seating lounge aboard a Li River cruise vessel",
  1600,
  2133,
);
const cruiseWindowSeat = yangshuoImage(
  "05-li-river-cruise-window-seat.webp",
  "Window-side seating aboard a Li River cruise with karst scenery outside",
  1600,
  2133,
);
const privateVehicle: MediaAsset = {
  src: "/tours/mutianyu-private-day-tour/05-private-luxury-vehicle.webp",
  alt: "Private vehicle interior used for Guilin hotel and port transfers",
  width: 1440,
  height: 1920,
};
const yangshuoGallery = [
  yangshuoKarst,
  rainyLiRiver,
  yulongBambooRaft,
  cruiseLounge,
  cruiseWindowSeat,
  privateVehicle,
];

export const guilinYangshuoLiRiverDayTour: Tour = {
  slug: "guilin-yangshuo-li-river-cruise-private-day-tour",
  visualStatus: "ready",
  publishedAt: "2026-08-21",
  updatedAt: "2026-11-10",
  title: "Guilin to Yangshuo Li River Cruise with Guide",
  subtitle:
    "Leave your Guilin hotel with the cruise ticket, port transfer and luggage plan already handled, travel to Yangshuo on a four-star public Li River cruise, then finish at your confirmed Yangshuo hotel or add a separately quoted private road return to Guilin.",
  duration: "1 Day · Private support · Usually 9–11 hours",
  durationIso: "PT10H",
  route:
    "Guilin hotel · Li River four-star public cruise · Yangshuo · Yangshuo finish or Guilin return",
  styles: ["Nature", "Culture", "Family", "Photography"],
  hero: {
    eyebrow:
      "Guilin hotel pickup · four-star public cruise · private guide and transfers · two clear finish choices",
    image: rainyLiRiver,
    primary: { label: "Check My Cruise Date", href: "#enquiry" },
    secondary: { label: "See Inclusions & Finish Choices", href: "#included" },
  },
  seo: {
    title: "Guilin to Yangshuo Li River Cruise with Guide",
    description:
      "Take a shared four-star Li River cruise from Guilin to Yangshuo with a private guide, hotel pickup and luggage transfer. Guilin return is separately quoted.",
    preserveCopy: true,
    keywords: [
      "Guilin to Yangshuo Li River cruise",
      "private Guilin Yangshuo day tour",
      "Li River cruise hotel pickup",
      "four star Li River cruise",
      "Guilin day tour to Yangshuo",
      "Li River cruise with private guide",
      "Guilin Yangshuo tour with luggage",
      "Li River cruise return to Guilin",
    ],
  },
  overview: {
    pitch:
      "Watch limestone peaks, villages and bamboo-lined banks unfold from the river, with time to photograph the landscape or simply sit and look. Your guide adds context without filling every quiet moment. The afternoon stays deliberately short: a countryside perspective and the hotel finish that fits your onward journey, rather than a race through Yangshuo's attractions.",
    answer:
      "This Guilin to Yangshuo Li River cruise day combines a shared four-star passenger sailing with a private guide, separate driver and road transfers for your party. Plan around ten hours, usually 9\u201311 hours depending on the selected finish and sailing. Standard cruise tickets, central Guilin hotel pickup, a short Yangshuo countryside route and pre-confirmed normal luggage transfer to your Yangshuo hotel are included. The base version ends in Yangshuo; a private road return to Guilin costs extra and must be selected before booking. This is not a private boat charter. Any onboard meal follows the confirmed ticket; bamboo rafting and other attractions are separate.",
    practicalities: [
      {
        label: "Cruise and location",
        value:
          "A scheduled four-star public Li River cruise downstream from the assigned Guilin-area port to Yangshuo, Guangxi. This is not a private boat charter or a Yulong River bamboo raft.",
      },
      {
        label: "Duration",
        value:
          "Plan around 10 hours, usually 9–11 hours including road transfers and the Yangshuo land chapter. The selected finish, actual sailing and written service window govern the day.",
      },
      {
        label: "Private service",
        value:
          "Your own guide, a separate driver and private road vehicle. The cruise vessel, boarding controls, decks and other passenger facilities are shared.",
      },
      {
        label: "Guide language",
        value:
          "Request an English-speaking guide or another available language. The confirmed language and guide service window cover hotel pickup, boarding, the cruise and the Yangshuo route.",
      },
      {
        label: "Ticket and seat",
        value:
          "Standard four-star public cruise tickets are included, subject to reservation confirmation. Vessel, port, deck, seat and ticket inclusions are confirmed for the sailing; no window seat or exclusive cabin is promised.",
      },
      {
        label: "Where the day ends",
        value:
          "The base version ends at a confirmed Yangshuo hotel. A private road return to central Guilin is a separately priced finish option, not a return cruise.",
      },
      {
        label: "Luggage",
        value:
          "For a Yangshuo finish, a pre-confirmed quantity of normal luggage travels by road to the confirmed hotel. State bag numbers and sizes; retain passports, medication and valuables with you.",
      },
      {
        label: "Meals",
        value:
          "Only an onboard meal attached to the confirmed ticket is included. Buffet, Western food and special diets are not guaranteed. Other meals, drinks and snacks are separate.",
      },
      {
        label: "Walking and access",
        value:
          "Port approaches, gangways, vessel steps and Yangshuo surfaces can involve walking and standing. Step-free boarding and lift access are not assumed; mobility needs require review.",
      },
      {
        label: "Price and extras",
        value:
          "One written total for your actual party and selected finish. Bamboo rafting, Ruyi Peak, cycling, shows, extra hours and airport or railway-station transfers are separate. No accommodation is included.",
      },
    ],
    facts: [
      {
        label: "Suitable for",
        value:
          "Guilin visitors who want a coordinated one-way river day and a confirmed hotel finish",
      },
      {
        label: "Pacing",
        value: "A long day with seated sailing, port walking and a short Yangshuo land route",
      },
      {
        label: "Time",
        value: "Usually 9–11 hours, depending on the finish you choose",
        helper:
          "Cruise departure, port, sailing time, road conditions and any Yangshuo extension are confirmed for the date. A Guilin return normally creates the longer day.",
      },
      {
        label: "Cruise",
        value: "Standard four-star public Li River cruise ticket included",
        helper:
          "This is not a private charter. Vessel, deck, seat, port, departure and onboard meal arrangements remain subject to the confirmed ticket and operator conditions.",
      },
      {
        label: "Finish choice",
        value: "End in Yangshuo or return privately to Guilin",
        helper:
          "The base day ends in Yangshuo. A private return to central Guilin is available and quoted with your plan.",
      },
      {
        label: "Luggage",
        value: "Planned in advance instead of carried through the cruise day",
        helper:
          "For a Yangshuo finish, normal travel luggage can be transferred by the private vehicle to the confirmed Yangshuo hotel. Quantity and unusual items are checked first.",
      },
      {
        label: "Walking",
        value: "Port walking, gangways, vessel steps and Yangshuo surfaces",
        helper:
          "The cruise reduces walking but is not necessarily step-free. Share wheelchair, balance, stair, heat or standing concerns before booking.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Your Guilin Hotel",
      days: "Morning pickup",
      title: "Leave with the ticket, port and luggage questions already settled",
      description:
        "Your final operating message states the pickup time, guide contact, confirmed cruise category, expected port, luggage plan and selected finish. The exact morning is built backwards from the live sailing rather than a generic brochure time.",
      see: "A private vehicle at your confirmed Guilin hotel and a practical route to the port selected for the booked sailing.",
      do: "Meet your guide in the confirmed language, retain the required entry documents, medication and valuables, and hand over only pre-confirmed transfer luggage.",
      feel: "That a one-way river journey has been turned into one connected day rather than a chain of uncertain transfers.",
    },
    {
      location: "The Li River",
      days: "Approximately four hours on the water",
      title: "Watch the karst landscape unfold at river speed",
      description:
        "Board the confirmed four-star public cruise and travel downstream through the limestone landscape between Guilin and Yangshuo. Your guide helps identify the geography and visual rhythm without filling every quiet moment with commentary.",
      see: "Layered karst peaks, river bends, cultivated banks, villages, bamboo and changing reflections as the boat moves south.",
      do: "Move between the available passenger areas, photograph the landscape and pause long enough to understand why the Li River is experienced as a continuous journey rather than one viewpoint.",
      feel: "That the scenery is revealing itself instead of being consumed as a sequence of roadside photo stops.",
    },
    {
      location: "Yangshuo",
      days: "Arrival and private land chapter",
      title: "Step off the shared cruise into a private plan again",
      description:
        "After the public sailing, reunite with the private vehicle and continue with a restrained Yangshuo chapter chosen around arrival time, weather and your finish. The base design favors countryside perspective and a calm transfer over squeezing several ticketed attractions into the afternoon.",
      see: "Yangshuo's closer karst formations, rural roads and the relationship between fields, villages and limestone peaks.",
      do: "Take a short privately guided countryside route, stop when conditions and traffic allow, and decide whether the day should remain scenic or include a pre-booked upgrade.",
      feel: "That Yangshuo is more than the point where the boat empties—and that the afternoon still belongs to your party.",
    },
    {
      location: "Your Chosen Finish",
      days: "Late afternoon or early evening",
      title: "Finish where your real itinerary needs you to be",
      description:
        "Choose the ending before booking. If you are staying in Yangshuo, your normal travel luggage is delivered with the vehicle and the day finishes at the confirmed hotel. If you are still based in Guilin, continue privately by road and return to your confirmed hotel.",
      see: "Either your Yangshuo accommodation ready for the next chapter, or the familiar Guilin hotel where your day began.",
      do: "Avoid sourcing a last-minute return car, negotiating with luggage or discovering too late that the cruise is primarily a one-way journey.",
      feel: "That the day ends cleanly—not with a transport problem after the main experience is over.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Li River Day Standard",
    title: "One famous cruise, two honest finish choices and no hidden transfer gap.",
    description:
      "The product is designed around the decisions travelers actually need to make. We distinguish the shared cruise from the private service, state the finish before payment and avoid promising a fixed vessel feature or river condition that has not been confirmed.",
    items: [
      {
        label: "01 · Public cruise, private handling",
        value:
          "The four-star cruise is shared; your guide, road vehicle and operating plan are private",
        helper:
          "Other passengers will be on the vessel. We do not describe a public scheduled cruise as a private boat charter.",
      },
      {
        label: "02 · Ticket clarity",
        value:
          "The confirmed cruise category and known ticket inclusions are stated before the day",
        helper:
          "Deck, seat, cabin, buffet, vessel and boarding arrangements are described only to the level actually confirmed for the date.",
      },
      {
        label: "03 · Port coordination",
        value: "Pickup is planned around the assigned departure port and sailing",
        helper:
          "Ports, sailings and road times can change. The final operating message replaces generic website timing.",
      },
      {
        label: "04 · Luggage continuity",
        value: "Yangshuo-bound luggage can travel by the private road vehicle",
        helper:
          "Normal quantity is checked before confirmation. Oversized, fragile or unusually valuable items require a separate plan.",
      },
      {
        label: "05 · A finish selected in advance",
        value: "End in Yangshuo or return to Guilin—never discover the difference on arrival",
        helper:
          "The written proposal names the final address, service window and any return supplement.",
      },
      {
        label: "06 · No shopping detours",
        value: "No compulsory pearl, tea, silk or souvenir stop",
        helper: "The river, countryside and your onward logistics remain the purpose of the day.",
      },
    ],
    note: "Li River sailings remain subject to operator inventory, water level, weather, navigation controls, maintenance, safety decisions, seasonal routing and port changes. AVIORA cannot guarantee a specific vessel, deck, seat, meal format, exact departure time, uninterrupted visibility or identical sailing route. If the operator materially changes or suspends the sailing, available alternatives and any price effect are explained before acceptance whenever timing permits.",
  },
  highlights: [
    {
      title: "A four-star Li River cruise without the booking maze",
      description:
        "The public cruise ticket, hotel pickup, port transfer and private multilingual guide are connected under one operating plan.",
      category: "Nature",
      image: rainyLiRiver,
    },
    {
      title: "A real choice between Yangshuo and Guilin",
      description:
        "Stay in Yangshuo with your luggage delivered, or return privately to Guilin—both options are explained before payment.",
      category: "Family",
      image: privateVehicle,
    },
    {
      title: "A restrained Yangshuo chapter after the cruise",
      description:
        "Use the remaining time for countryside perspective and a calm finish instead of pretending every Yangshuo attraction fits into one afternoon.",
      category: "Photography",
      image: yangshuoKarst,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Guilin hotel to the Li River, then finish the day your way",
      destination: "Guilin · Li River · Yangshuo",
      summary:
        "Meet your private multilingual guide and vehicle at the confirmed central Guilin hotel. Transfer to the port assigned for the booked sailing and board the included standard four-star public Li River cruise. Travel downstream through the karst landscape to Yangshuo, then reunite with the private vehicle for a short countryside-oriented land chapter. Finish at a confirmed Yangshuo hotel with normal luggage transferred by road, or select the longer private return to your Guilin hotel. Exact port, sailing, vessel, timing, ticket inclusions and river conditions remain date-specific.",
      image: rainyLiRiver,
      hotel:
        "No overnight stay included · finish at a confirmed Yangshuo hotel or return to your central Guilin hotel",
      meals: [
        "The standard onboard meal attached to the confirmed four-star cruise ticket, if supplied by the cruise operator; exact format confirmed for the date",
      ],
      transport:
        "Private central-Guilin hotel pickup and port transfer; shared four-star public cruise to Yangshuo; private Yangshuo land transport; optional private road return to Guilin",
      activities: [
        {
          time: "Morning \u00b7 pickup timed to the confirmed sailing",
          title: "Confirmed Guilin hotel pickup and luggage handover",
          description:
            "Meet with the pickup, port, cruise category and finish already stated. Yangshuo-bound normal luggage travels separately in the confirmed private vehicle when arranged.",
        },
        {
          time: "Morning \u00b7 port arrival and public boarding",
          title: "Included standard four-star public cruise ticket",
          description:
            "Board through the operator's public process with your guide's assistance. The boat is shared with other passengers and remains under the cruise operator's control.",
        },
        {
          time: "Several hours on the river \u00b7 approximately 4 hours, subject to navigation",
          title: "The continuous Li River karst landscape",
          description:
            "Watch the scenery change across several hours, with space for photography, quiet observation and useful interpretation rather than constant commentary.",
        },
        {
          time: "Afternoon \u00b7 after the actual disembarkation",
          title: "A private Yangshuo countryside perspective",
          description:
            "Reconnect with the private vehicle and use the available afternoon for a short rural route chosen around weather, traffic, arrival time and your onward plan.",
        },
        {
          time: "Late afternoon or evening \u00b7 depending on selected finish",
          title: "Yangshuo hotel finish or Guilin hotel return",
          description:
            "End at the address that suits your itinerary. The selected finish and associated total are written into the proposal before booking.",
        },
      ],
      guideNote:
        "Send your travel date, Guilin hotel, group size, child ages, luggage quantity, Yangshuo hotel if applicable and preferred finish. Also share your preferred guide language, stair, balance, wheelchair, heat or dietary concerns and any fixed flight or train deadline. Keep passports, medication and valuables with you rather than in transferred bags. Cruise operation and visible scenery remain subject to live river and weather conditions.",
      coordinates: { latitude: 24.773, longitude: 110.4966 },
    },
  ],
  accommodations: [
    {
      name: "Your confirmed Guilin or Yangshuo hotel",
      destination: "Guilin or Yangshuo",
      description:
        "This is a private day tour, so no accommodation is included. The base version begins at a central Guilin hotel and ends at a confirmed Yangshuo hotel. The Guilin-return version ends at the central Guilin hotel or address stated in the proposal.",
      roomStyle: "No overnight stay included",
      highlights: [
        "Central Guilin pickup",
        "Yangshuo luggage delivery",
        "Two finish choices",
        "No hotel change forced by the product",
      ],
      image: yangshuoKarst,
    },
  ],
  included: [
    "Private pickup at a hotel in Guilin's main urban area; airports, railway stations, distant hotels and non-standard addresses are quoted before booking",
    "Private air-conditioned vehicle and professional driver for the confirmed road-service window",
    "Private guide in the language confirmed before booking for the hotel, port, cruise and Yangshuo service window",
    "Standard four-star public Li River cruise tickets for the confirmed travelers; child fare and seat arrangements are stated before booking",
    "The standard onboard meal only when it is part of the confirmed cruise ticket; exact format is stated before the day",
    "A short private Yangshuo countryside-oriented land chapter, adjusted to the actual arrival, weather and selected finish",
    "For the Yangshuo-finish version, transfer of a normal pre-confirmed quantity of travel luggage to the confirmed Yangshuo hotel",
    "Bottled water in the private vehicle, one final operating message and no compulsory shopping stops",
  ],
  excluded: [
    "Accommodation, restaurant meals beyond any confirmed cruise-ticket meal, drinks, personal purchases, gratuities, travel insurance and items not expressly listed as included",
    "Private boat charter, exclusive cabin, guaranteed deck, guaranteed seat, guaranteed window position or a specific vessel unless separately confirmed in writing",
    "Private road return from Yangshuo to Guilin unless the Guilin-return finish is selected and priced in the written proposal",
    "Yulong River bamboo rafting, Ruyi Peak, evening shows, cycling, e-bikes and other optional experiences unless selected and confirmed",
    "Airport or railway-station pickup or drop-off, out-of-area hotels, late-night service and additional guide or vehicle hours unless quoted",
    "Guaranteed sailing, route, water level, scenery visibility, weather, meal format or public facility operation affected by river, navigation, safety, maintenance, capacity or operator decisions",
    "Wheelchair, porter, medical care, specialist accessibility equipment or handling of unconfirmed oversized, fragile or valuable luggage",
  ],
  optionalExperiences: [
    {
      title: "Private return to your Guilin hotel",
      description:
        "Choose a private Guilin-return finish instead of staying in Yangshuo. The private vehicle, guide service window and central Guilin drop-off are confirmed for the date.",
      badges: ["Priced with your plan"],
      image: privateVehicle,
    },
    {
      title: "Yulong River bamboo-raft chapter",
      description:
        "The Yulong River is different from the Li River. Request a separately quoted bamboo-raft experience only when the cruise arrival and your selected finish leave enough time. Age, height, passenger pairing, water, safety and operator rules are checked before payment; operation is never guaranteed.",
      badges: ["Eligibility and operation checked"],
      image: yulongBambooRaft,
    },
    {
      title: "Extended private Yangshuo countryside route",
      description:
        "Request separately quoted extra private countryside time, with the exact hours agreed before booking. The route may use the private vehicle and short walks; cycling or e-bikes are not included unless separately confirmed.",
      badges: ["Hours confirmed in writing"],
      image: yangshuoKarst,
    },
    {
      title: "Ruyi Peak cableway and mountain-view extension",
      description:
        "Request a separately quoted Ruyi Peak extension when workable. Confirm the ticket components, route and added private-service hours before booking; this may replace the short countryside chapter. Walking, glass surfaces, weather and cableway operation are reviewed first.",
      badges: ["Weather and walking reviewed"],
      image: yangshuoKarst,
    },
    {
      title: "Yangshuo evening performance",
      description:
        "Add a confirmed evening performance with standard seating and booking coordination. Venue, program, seat category, weather policy and any additional private transport or Guilin return are priced in writing.",
      badges: ["Transport quoted to your finish"],
      image: yangshuoKarst,
    },
  ],
  transportation: {
    title: "A one-way river journey with the road logistics joined up at both ends",
    description:
      "The operating plan connects your Guilin hotel to the assigned port, the public cruise to Yangshuo and the private finish after disembarkation. It does not promise a private vessel, bypass public boarding controls or remove the cruise operator's authority over sailings.",
    items: [
      {
        label: "Pickup",
        value: "Central Guilin hotel or confirmed main-urban address",
        helper:
          "Airports, railway stations, distant resorts and non-standard pickup points are checked and priced before booking.",
      },
      {
        label: "To the port",
        value: "Private vehicle matched to the party and confirmed luggage",
        helper:
          "The assigned port and pickup time follow the booked sailing and can differ by operator or operating day.",
      },
      {
        label: "On the river",
        value: "Shared four-star public cruise",
        helper:
          "Boarding, vessel, passenger areas, meal, route and timing remain subject to the cruise operator's confirmed arrangements.",
      },
      {
        label: "Finish",
        value: "Yangshuo hotel or private road return to central Guilin",
        helper:
          "The final address, guide and vehicle service window, luggage plan and total price are written into the proposal.",
      },
    ],
  },
  routeMap: {
    title: "Guilin hotel to Yangshuo by river—with the ending chosen before you leave",
    description:
      "The day begins privately at your Guilin hotel, joins the scheduled four-star public cruise for the defining river journey, returns to private support in Yangshuo and ends either at your Yangshuo hotel or back in Guilin.",
    stops: [
      {
        name: "Guilin hotel pickup",
        days: "Morning",
        description: "Private pickup with the ticket, port and luggage plan already confirmed.",
        coordinates: { latitude: 25.2736, longitude: 110.29 },
      },
      {
        name: "Confirmed Li River cruise port",
        days: "Boarding",
        description:
          "Private road transfer to the assigned port. The map point is illustrative; use the confirmed boarding address.",
        coordinates: { latitude: 25.1977, longitude: 110.4398 },
      },
      {
        name: "Li River",
        days: "Cruise",
        description: "A shared four-star sailing through the continuous karst landscape.",
        coordinates: { latitude: 24.9186, longitude: 110.4414 },
      },
      {
        name: "Yangshuo",
        days: "Afternoon",
        description: "Private vehicle reunion, a restrained countryside chapter and chosen finish.",
        coordinates: { latitude: 24.773, longitude: 110.4966 },
      },
      {
        name: "Yangshuo finish or Guilin return",
        days: "Finish",
        description: "End at the confirmed hotel named in the written proposal.",
        coordinates: { latitude: 24.773, longitude: 110.4966 },
      },
    ],
  },
  gallery: yangshuoGallery.slice(1),
  faqLimit: 19,
  faqs: [
    {
      question: "Is the Li River cruise private or shared?",
      answer:
        "The four-star sailing is a shared public passenger cruise, not a private boat charter. Your guide, road vehicle, separate driver and agreed land arrangements are private for your booking party. Other passengers use the vessel, boarding areas and decks; private service does not bypass public security or boarding queues.",
    },
    {
      question: "What does the tour cost for two people or a family?",
      answer:
        "Request one written total for your actual party, travel date and selected finish. The base Yangshuo-finish version includes central Guilin hotel pickup, private guide and road transport, standard four-star public cruise tickets, a short Yangshuo countryside route and pre-confirmed normal luggage transfer to the Yangshuo hotel. A meal is included only when attached to the confirmed ticket. Child fares, seats, optional activities and any Guilin return are specified in the quote. No public numerical starting price is published.",
    },
    {
      question: "Can we finish in Yangshuo instead of returning to Guilin?",
      answer:
        "Yes. Ending at a confirmed Yangshuo hotel is the base version and works for travelers moving between hotels. No accommodation is included. Tell us the hotel name and address before booking; a distant countryside resort may need different transfer time and a revised quote.",
    },
    {
      question: "Is the return from Yangshuo to Guilin included, and is it by boat?",
      answer:
        "No. The base version ends in Yangshuo. A return to central Guilin is separately quoted and made by private road vehicle, not a return cruise. Confirm the final Guilin address and service window before payment. It makes a longer day, so afternoon upgrades must be checked against the return plan.",
    },
    {
      question: "Can our luggage travel from Guilin to our Yangshuo hotel?",
      answer:
        "Yes, when the bag quantity, sizes, vehicle capacity and hotel delivery arrangement are confirmed in advance. For the Yangshuo-finish version, normal luggage travels separately by road rather than being carried through the cruise. Keep passports, medication, money and valuables with you. Oversized or fragile items need a separate plan; do not assume every bag will fit or that the hotel can accept unattended delivery.",
    },
    {
      question: "Which port does the cruise use, and what time is hotel pickup?",
      answer:
        "The assigned departure port, downstream arrival point and sailing time follow the confirmed operator arrangements. Your pickup is planned backwards from boarding and the hotel address. Do not independently travel to a port based on a generic website schedule. The final operating message states the known details; navigation or operator changes may still affect the day.",
    },
    {
      question: "How long is the Li River cruise and the whole day?",
      answer:
        "Allow approximately four hours on the river as a planning guide, with actual duration and route subject to water, navigation and operator decisions. The complete day is planned around ten hours, usually 9–11 hours including road transfers and the short Yangshuo route. The selected finish matters: a Guilin return generally takes longer. The written service window is confirmed for your date.",
    },
    {
      question: "Can we have an English-speaking guide on the cruise?",
      answer:
        "Request an English-speaking guide or another available language. We confirm language and availability before booking. The private guide service covers the agreed hotel pickup, port, cruise and Yangshuo route; it does not depend on public onboard announcements being in English. Your separate driver handles the agreed road logistics.",
    },
    {
      question: "Are four-star cruise tickets, a window seat and an upper deck guaranteed?",
      answer:
        "Standard four-star cruise tickets are included, subject to reservation confirmation. Four-star describes the booked cruise category; it is not a promise of a specific vessel, cabin, upper deck or window seat. Seat and passenger-area details are stated only to the level confirmed. A photograph of a lounge or window seat illustrates the experience rather than guaranteeing your allocation.",
    },
    {
      question: "Do foreign visitors need a passport, and how are children's tickets handled?",
      answer:
        "We check the current identity and entry-document requirements for the sailing and explain what originals to bring. Share child ages and any height information required for fare and seat checks; do not assume children travel free or automatically receive a separate seat. Initial inquiries do not need passport numbers. Necessary ticket-booking details are collected later through the agreed booking channel after availability checks.",
    },
    {
      question: "Is lunch included, and can the boat provide vegetarian or allergy-safe food?",
      answer:
        "Only the onboard meal attached to the confirmed ticket is included. Meal format, menu and service vary; a buffet, Western dishes or a suitable vegetarian, halal or allergy-safe meal are not guaranteed. Share your specific dietary needs before booking so we can check options and any permitted food you may bring. Other restaurant meals, drinks and snacks are separate.",
    },
    {
      question:
        "Is the Li River cruise suitable for children, older travelers or wheelchair users?",
      answer:
        "The seated cruise can be comfortable, but the full day still involves port approaches, gangways, steps, standing and uneven Yangshuo surfaces. Do not assume step-free boarding, lifts or wheelchair-accessible toilets. Tell us wheelchair dimensions, transfer ability, stair and standing limits, child ages and stroller needs; feasibility must be reviewed for the booked vessel and route before confirmation.",
    },
    {
      question: "Is Yulong River bamboo rafting included after the cruise?",
      answer:
        "No. The Yulong River bamboo raft is a different river experience from the large Li River passenger cruise. Rafting is separately quoted and depends on cruise arrival, remaining time, age, height, passenger pairing, water and operator safety rules. It may replace the short countryside chapter or require extra service hours. No fixed eligibility thresholds or availability are promised here.",
    },
    {
      question: "Can we add Ruyi Peak, cycling or an evening show?",
      answer:
        "Ask us to check one priority against your sailing and finish rather than assuming every attraction fits. These are separate activities with their own tickets, timing, weather and access conditions. They may replace the short countryside route or require extra guide and vehicle hours. An evening performance needs a separately agreed return plan, especially if you are staying in Guilin. Cycling and e-bikes are not included.",
    },
    {
      question: "What happens if rain, low water or a navigation closure affects the cruise?",
      answer:
        "Rain or mist can change visibility without necessarily cancelling a sailing. Water levels, navigation controls, weather or safety decisions can change the port, vessel, duration or route, or suspend operation. We explain known material changes, feasible alternatives and any price effect for your agreement where timing permits. A road sightseeing substitute is not treated as an identical cruise; changes and refunds follow the applicable written booking terms.",
    },
    {
      question: "Can you collect us at Guilin airport or a railway station, or start in Yangshuo?",
      answer:
        "These requests need a different timing review and separate quote. State Guilin Liangjiang International Airport (KWL) or the exact station, such as Guilin, Guilin North, Guilin West or Yangshuo, plus arrival time, luggage and your fixed departure deadline. Do not assume a station named Yangshuo is the cruise landing. The standard product starts at a central Guilin hotel; a same-day flight or train connection is not guaranteed to fit a scheduled sailing.",
    },
    {
      question: "How do we reserve the cruise day?",
      answer:
        "Send the date, adult and child numbers, guide language, Guilin pickup hotel, chosen finish, final hotel and bag details. Include access and dietary needs and any fixed onward departure. We check sailing and service availability, then provide the total, ticket inclusions, luggage arrangement and booking terms. An inquiry does not reserve a sailing; confirmation follows the required payment, tickets and written supplier arrangements.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [],
    destinations: [
      {
        name: "Guilin & Yangshuo",
        description: "Explore the river, karst countryside and hotel bases for a longer stay.",
        image: yangshuoKarst,
        href: "/destinations/guilin",
      },
    ],
  },
  inquiryChecklist: [
    "Preferred date; adults and child ages",
    "Preferred guide language",
    "Guilin hotel / pickup address",
    "Preferred finish: Yangshuo hotel or private road return to Guilin",
    "Final hotel name and address; luggage bag numbers and sizes",
    "Walking, stairs, wheelchair, stroller and dietary considerations",
    "Any flight / train, exact airport or station and fixed departure deadline",
    "Optional rafting, countryside, Ruyi Peak or show request",
  ],
  planningResources: [
    {
      label: "Guilin and Yangshuo destination guide",
      href: "/destinations/guilin",
      description:
        "Understand the river, countryside and where to stay before selecting your finish.",
    },
    {
      label: "Yangshuo finish or return to Guilin?",
      href: "/journal/li-river-cruise-yangshuo-or-guilin-return",
      description: "Compare hotel-to-hotel travel with a longer day returning to Guilin.",
    },
    {
      label: "Plan five days in Guilin and Yangshuo",
      href: "/journal/guilin-yangshuo-itinerary-5-days",
      description:
        "Consider a longer stay when rafting, village time and additional landscapes matter.",
    },
    {
      label: "Guilin Municipal Government",
      href: "https://www.guilin.gov.cn/",
      description:
        "Regional visitor information; this does not replace the booked cruise operator's sailing and ticket confirmation.",
    },
  ],
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Guilin%20to%20Yangshuo%20Li%20River%20Cruise%20Day&body=Hello%20AVIORA%2C%20I%20would%20like%20to%20check%20a%20Guilin%20to%20Yangshuo%20Li%20River%20cruise%20day.%0A%0APreferred%20date%3B%20adults%20and%20child%20ages%3A%0APreferred%20guide%20language%3A%0AGuilin%20hotel%20/%20pickup%20address%3A%0APreferred%20finish%3A%20Yangshuo%20hotel%20or%20private%20road%20return%20to%20Guilin%3A%0AFinal%20hotel%20name%20and%20address%3B%20luggage%20bag%20numbers%20and%20sizes%3A%0AWalking%2C%20stairs%2C%20wheelchair%2C%20stroller%20and%20dietary%20considerations%3A%0AAny%20flight%20/%20train%2C%20exact%20airport%20or%20station%20and%20fixed%20departure%20deadline%3A%0AOptional%20rafting%2C%20countryside%2C%20Ruyi%20Peak%20or%20show%20request%3A%0APlease%20explain%20any%20ticket-booking%20documents%20after%20checking%20availability.",
    whatsappHref:
      "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20would%20like%20to%20check%20a%20Guilin%20to%20Yangshuo%20Li%20River%20cruise%20day.%0A%0APreferred%20date%3B%20adults%20and%20child%20ages%3A%0APreferred%20guide%20language%3A%0AGuilin%20hotel%20/%20pickup%20address%3A%0APreferred%20finish%3A%20Yangshuo%20hotel%20or%20private%20road%20return%20to%20Guilin%3A%0AFinal%20hotel%20name%20and%20address%3B%20luggage%20bag%20numbers%20and%20sizes%3A%0AWalking%2C%20stairs%2C%20wheelchair%2C%20stroller%20and%20dietary%20considerations%3A%0AAny%20flight%20/%20train%2C%20exact%20airport%20or%20station%20and%20fixed%20departure%20deadline%3A%0AOptional%20rafting%2C%20countryside%2C%20Ruyi%20Peak%20or%20show%20request%3A%0APlease%20explain%20any%20ticket-booking%20documents%20after%20checking%20availability.",
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "I would like to check a Guilin to Yangshuo Li River cruise day and choose whether to finish in Yangshuo or return to Guilin.",
  },
};
