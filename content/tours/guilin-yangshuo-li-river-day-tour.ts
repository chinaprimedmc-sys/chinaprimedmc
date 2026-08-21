import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

// Route-specific photography will be added after rights and subject accuracy are confirmed.
const pendingImage: MediaAsset = {
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "Photography for the Guilin to Yangshuo Li River cruise day is being prepared",
  width: 1920,
  height: 1080,
};

export const guilinYangshuoLiRiverDayTour: Tour = {
  slug: "guilin-yangshuo-li-river-cruise-private-day-tour",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-08-21",
  title: "Guilin to Yangshuo Li River Cruise Day with Private Guide & Transfers",
  subtitle:
    "Leave your Guilin hotel with the cruise ticket, port transfer and luggage plan already handled, travel to Yangshuo on a four-star public Li River cruise, then choose whether your private day ends at a Yangshuo hotel or returns you to Guilin.",
  duration: "1 Day · Private support · Usually 9–11 hours",
  route:
    "Guilin hotel · Li River four-star public cruise · Yangshuo · Yangshuo finish or Guilin return",
  styles: ["Nature", "Culture", "Family", "Photography", "Senior-friendly"],
  hero: {
    eyebrow:
      "Guilin hotel pickup · four-star public cruise · private guide and transfers · two clear finish choices",
    image: pendingImage,
    primary: { label: "Check My Cruise Date", href: "#inquiry" },
    secondary: { label: "Compare Finish Options", href: "#price" },
  },
  seo: {
    title: "Guilin to Yangshuo Li River Cruise Private Day Tour",
    description:
      "A Guilin to Yangshuo Li River cruise day with central-hotel pickup, four-star public cruise ticket, private English-speaking guide, luggage handling and a choice to end in Yangshuo or return to Guilin. From US$688 for four guests.",
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
      "The cruise is the famous part; the difficult part is everything around it. Different ports, ticket categories, morning pickup times, luggage, the one-way arrival in Yangshuo and the question of how to get back to Guilin can turn a simple-looking day into several separate bookings. AVIORA connects those decisions in one private operating plan. Your vehicle and English-speaking guide collect you from a confirmed central Guilin hotel, the standard four-star public cruise ticket is arranged, and your finish is selected before payment: arrive at a Yangshuo hotel with your luggage, or continue by private vehicle back to Guilin. The cruise vessel itself is shared with other passengers; the guide, road transport, coordination and Yangshuo chapter are private for your party.",
    facts: [
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
          "The US$688 four-guest starting price ends in Yangshuo. The four-guest Guilin-return version starts from US$758 total.",
      },
      {
        label: "Luggage",
        value: "Planned in advance instead of carried through the cruise day",
        helper:
          "For a Yangshuo finish, normal travel luggage can be transferred by the private vehicle to the confirmed Yangshuo hotel. Quantity and unusual items are checked first.",
      },
      {
        label: "Walking",
        value: "Easy to moderate, with port ramps, vessel steps and Yangshuo surfaces",
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
      do: "Meet your private English-speaking guide, keep passports available and hand over any confirmed transfer luggage before departure.",
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
        "The public cruise ticket, hotel pickup, port transfer and private English-speaking guide are connected under one operating plan.",
      category: "Nature",
      image: pendingImage,
    },
    {
      title: "A real choice between Yangshuo and Guilin",
      description:
        "Stay in Yangshuo with your luggage delivered, or return privately to Guilin—both options are explained before payment.",
      category: "Family",
      image: pendingImage,
    },
    {
      title: "A restrained Yangshuo chapter after the cruise",
      description:
        "Use the remaining time for countryside perspective and a calm finish instead of pretending every Yangshuo attraction fits into one afternoon.",
      category: "Photography",
      image: pendingImage,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Guilin hotel to the Li River, then finish the day your way",
      destination: "Guilin · Li River · Yangshuo",
      summary:
        "Meet your private English-speaking guide and vehicle at the confirmed central Guilin hotel. Transfer to the port assigned for the booked sailing and board the included standard four-star public Li River cruise. Travel downstream through the karst landscape to Yangshuo, then reunite with the private vehicle for a short countryside-oriented land chapter. Finish at a confirmed Yangshuo hotel with normal luggage transferred by road, or select the longer private return to your Guilin hotel. Exact port, sailing, vessel, timing, ticket inclusions and river conditions remain date-specific.",
      image: pendingImage,
      hotel:
        "No overnight stay included · finish at a confirmed Yangshuo hotel or return to your central Guilin hotel",
      meals: [
        "The standard onboard meal attached to the confirmed four-star cruise ticket, if supplied by the cruise operator; exact format confirmed for the date",
      ],
      transport:
        "Private central-Guilin hotel pickup and port transfer; shared four-star public cruise to Yangshuo; private Yangshuo land transport; optional private road return to Guilin",
      activities: [
        {
          title: "Confirmed Guilin hotel pickup and luggage handover",
          description:
            "Meet with the pickup, port, cruise category and finish already stated. Yangshuo-bound normal luggage travels separately in the confirmed private vehicle when arranged.",
        },
        {
          title: "Included standard four-star public cruise ticket",
          description:
            "Board through the operator's public process with your guide's assistance. The boat is shared with other passengers and remains under the cruise operator's control.",
        },
        {
          title: "The continuous Li River karst landscape",
          description:
            "Watch the scenery change across several hours, with space for photography, quiet observation and useful interpretation rather than constant commentary.",
        },
        {
          title: "A private Yangshuo countryside perspective",
          description:
            "Reconnect with the private vehicle and use the available afternoon for a short rural route chosen around weather, traffic, arrival time and your onward plan.",
        },
        {
          title: "Yangshuo hotel finish or Guilin hotel return",
          description:
            "End at the address that suits your itinerary. The selected finish and associated total are written into the proposal before booking.",
        },
      ],
      guideNote:
        "Send your travel date, Guilin hotel, group size, child ages, luggage quantity, Yangshuo hotel if applicable and preferred finish. Also share stair, balance, wheelchair, heat or dietary concerns. Cruise operation and visible scenery remain subject to live river and weather conditions.",
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
      image: pendingImage,
    },
  ],
  included: [
    "Private pickup at a hotel in Guilin's main urban area; airports, railway stations, distant hotels and non-standard addresses are quoted before booking",
    "Private air-conditioned vehicle and professional driver for the confirmed road-service window",
    "Private English-speaking guide for the confirmed hotel, port, cruise and Yangshuo service window",
    "Standard adult four-star public Li River cruise ticket for the confirmed travelers",
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
        "Choose the Guilin-return finish from US$70 per group of up to four, making the four-guest day US$758 total from. The private vehicle, guide service window and central Guilin drop-off are confirmed for the date.",
      badges: ["From US$70 per group", "4 guests: US$758 total from"],
      image: pendingImage,
    },
    {
      title: "Yulong River bamboo-raft chapter",
      description:
        "Add a date- and traveler-eligible Yulong River bamboo-raft experience from US$45 per guest. Age, height, passenger pairing, water, safety and operator rules are checked before payment; operation is never guaranteed.",
      badges: ["From US$45 pp", "Eligibility and operation checked"],
      image: pendingImage,
    },
    {
      title: "Extended private Yangshuo countryside route",
      description:
        "Add up to two hours of private countryside touring from US$128 per group of up to four. The route may use the private vehicle and short walks; cycling or e-bikes are not included unless separately confirmed.",
      badges: ["From US$128 per group", "Up to 2 hours"],
      image: pendingImage,
    },
    {
      title: "Ruyi Peak cableway and mountain-view extension",
      description:
        "Add the date-confirmed Ruyi Peak experience from US$58 per guest, including standard admission and the required private-service extension when workable. Walking, glass surfaces, weather and cableway operation are reviewed first.",
      badges: ["From US$58 pp", "Weather and walking reviewed"],
      image: pendingImage,
    },
    {
      title: "Yangshuo evening performance",
      description:
        "Add a confirmed evening performance from US$88 per guest for standard seating and booking coordination. Venue, program, seat category, weather policy and any additional private transport or Guilin return are priced in writing.",
      badges: ["From US$88 pp", "Transport quoted to your finish"],
      image: pendingImage,
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
        description: "Private road transfer to the port assigned for the booked public sailing.",
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
  gallery: [],
  faqs: [
    {
      question: "What does the US$688 starting price include?",
      answer:
        "It is an indicative private-group starting price for four guests, equivalent to US$172 per guest, for the version that starts at a central Guilin hotel and ends at a confirmed Yangshuo hotel. It includes private pickup and port transfer, a private English-speaking guide, standard four-star public Li River cruise tickets, the standard onboard meal only when attached to the confirmed tickets, a short private Yangshuo countryside chapter, normal pre-confirmed luggage transfer to the Yangshuo hotel, bottled water and no compulsory shopping stops.",
    },
    {
      question: "How much is the version that returns to Guilin?",
      answer:
        "For four guests, the central-Guilin return version starts from US$758 total, equivalent to approximately US$190 per guest. The indicative two-guest return version starts from US$598 total. The written proposal confirms the final Guilin address, service window, vehicle and any seasonal or out-of-area supplement.",
    },
    {
      question: "What are the published prices for different group sizes?",
      answer:
        "Outside major public holidays and unusual pickup requirements, the Yangshuo-finish private-group prices start from: one guest US$438; two guests US$528 total; three guests US$608 total; four guests US$688 total; five guests US$830 total; and six guests US$972 total. A central-Guilin return starts from an additional US$70 per group of up to four and is quoted for larger parties. Cruise ticket category, vehicle and service time are checked before confirmation.",
    },
    {
      question: "Is the Li River cruise private?",
      answer:
        "No. The included four-star cruise is a scheduled public passenger cruise shared with other travelers. Your English-speaking guide, road vehicle, port coordination, luggage plan and Yangshuo land arrangements are private for your booking party. A private boat charter is not included or implied.",
    },
    {
      question: "Can we take our luggage from Guilin to Yangshuo?",
      answer:
        "Yes for the Yangshuo-finish version when the quantity and hotel are confirmed in advance. Normal travel luggage is carried by the private road vehicle and delivered to the confirmed Yangshuo hotel, so you do not need to manage it as ordinary hand luggage throughout the cruise. Oversized, fragile or unusually valuable items require a separate written plan.",
    },
    {
      question: "Which port and what time will the cruise leave?",
      answer:
        "The exact port, pickup and sailing are date-specific and follow confirmed operator inventory and operating conditions. Your final operating message states the known details before the day. Website timings are planning ranges, not a promise that every sailing uses the same port or departure time.",
    },
    {
      question: "Is a meal included on the cruise?",
      answer:
        "Only the standard onboard meal supplied with the confirmed four-star ticket is included. The meal format, menu, dining area and suitability for dietary needs can vary by operator and sailing. Share allergies and dietary requirements before booking; a separate restaurant meal is not included unless written into the proposal.",
    },
    {
      question: "Can we add Yulong River bamboo rafting after the cruise?",
      answer:
        "Sometimes. It starts from US$45 per eligible guest and must be checked against the actual cruise arrival, season, water conditions, age, height, passenger-pairing and operator safety rules. It is deliberately optional because it is not suitable or available for every traveler and date.",
    },
    {
      question: "What happens if weather or water conditions change the sailing?",
      answer:
        "The cruise operator may change the vessel, port, timing, passenger areas, route or operation for navigation, water, weather, maintenance, capacity or safety reasons. AVIORA communicates known material changes and explains available alternatives and any price effect. Identical scenery, visibility and sailing conditions cannot be guaranteed.",
    },
    {
      question: "How quickly can you confirm my date?",
      answer:
        "Send your date, group size, Guilin hotel, preferred finish and luggage details through the form or WhatsApp. During China business hours, we aim to reply within one hour with an initial availability check. A booking is confirmed only after the written proposal, required payment, cruise tickets and supplier arrangements are confirmed in writing.",
    },
  ],
  related: {
    tours: [
      {
        title: "China, Made for Families",
        description:
          "A twelve-day private family journey connecting Beijing, Xi'an, Chengdu and Shanghai with age-aware pacing and protected downtime.",
        tags: ["Private", "Family", "First-time China"],
        image: pendingImage,
        route: "Beijing · Xi'an · Chengdu · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-family-tour-with-pandas-12-day-private-tour",
      },
      {
        title: "Shanghai & Zhangjiajie: City Lights to Floating Peaks",
        description:
          "An eight-day private route pairing Shanghai with China's sandstone mountain landscapes.",
        tags: ["Private", "Nature", "Photography"],
        image: pendingImage,
        route: "Shanghai · Zhangjiajie",
        duration: "8 days / 7 nights",
        href: "/tours/shanghai-zhangjiajie-floating-peaks",
      },
    ],
    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Guilin%20to%20Yangshuo%20Li%20River%20Cruise%20Day&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20check%20the%20Guilin%20to%20Yangshuo%20Li%20River%20cruise%20day.%0A%0ADate%3A%0ANumber%20of%20guests%20and%20child%20ages%3A%0AGuilin%20hotel%3A%0APreferred%20finish%20%28Yangshuo%20hotel%20or%20return%20to%20Guilin%29%3A%0AYangshuo%20hotel%20if%20applicable%3A%0ALuggage%20quantity%3A%0AOptional%20experiences%20of%20interest%3A%0AAny%20mobility%2C%20dietary%20or%20other%20considerations%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20check%20the%20Guilin%20to%20Yangshuo%20Li%20River%20cruise%20day.%20My%20date%2C%20group%20size%2C%20Guilin%20hotel%2C%20luggage%20and%20preferred%20finish%20are%3A",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I would like to check a Guilin to Yangshuo Li River cruise day and choose whether to finish in Yangshuo or return to Guilin.",
  },
};
