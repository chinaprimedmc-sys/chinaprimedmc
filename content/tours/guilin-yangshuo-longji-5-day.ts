import type { Tour } from "@/types/tour";
import type { MediaAsset } from "@/types/component-library";

export const guilinLongjiImages = {
  hero: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/01-karst-water-reflections.webp",
    alt: "Karst peaks reflected in landscaped water beneath a blue sky",
    width: 2400,
    height: 1350,
  },
  terraces: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/02-longji-terraces.webp",
    alt: "Layered Longji rice terraces with fields and hillside buildings",
    width: 1600,
    height: 2133,
  },
  morning: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/03-longji-morning-light.webp",
    alt: "Morning light and mist above the Longji rice terraces",
    width: 1600,
    height: 2133,
  },
  terracePath: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/04-longji-village-path.webp",
    alt: "Stone steps between timber village buildings beneath rice terraces",
    width: 1600,
    height: 2133,
  },
  cruise: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/05-li-river-cruise-interior.webp",
    alt: "Seating and windows inside a Li River cruise vessel",
    width: 1600,
    height: 2133,
  },
  villageRoofs: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/06-yangshuo-area-village-rooftops.webp",
    alt: "Traditional tiled rooftops in a village in the Yangshuo area",
    width: 1600,
    height: 2315,
  },
  villageLane: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/07-yangshuo-area-village-lane.webp",
    alt: "Village rooftops and distant hills seen through an opening",
    width: 1600,
    height: 2133,
  },
  guilinRoom: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/08-riverside-room-reference.webp",
    alt: "Example guest room with a broad window facing water and karst hills",
    width: 1242,
    height: 1656,
  },
  yangshuoRoom: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/09-countryside-room-reference.webp",
    alt: "Example countryside guest room with open views of fields and karst peaks",
    width: 1600,
    height: 2133,
  },
  vehicle: {
    src: "/tours/guilin-yangshuo-longji-private-5-day-tour/10-private-vehicle-interior-reference.webp",
    alt: "Example private vehicle interior for guided road transfers; final vehicle confirmed in the proposal",
    width: 1600,
    height: 1200,
  },
} satisfies Record<string, MediaAsset>;

export const guilinYangshuoLongji5DayTour: Tour = {
  slug: "guilin-yangshuo-longji-private-5-day-tour",
  visualStatus: "ready",
  updatedAt: "2026-11-12",
  title: "5-Day Guilin, Yangshuo & Longji Private Tour",
  subtitle:
    "River scenery, rice terraces and time in the countryside, with two nights in Guilin, two in Yangshuo and just one hotel change. Your guide and road transfers are private; the Li River cruise is shared.",
  duration: "5 Days / 4 Nights",
  durationIso: "P5D",
  route: "Guilin · Longji day trip · Li River · Yangshuo",
  styles: ["Nature", "Culture", "Photography", "Family"],
  hero: {
    eyebrow: "Private Guangxi journey · 5 days / 4 nights · one hotel change",
    image: guilinLongjiImages.hero,
    primary: { label: "Plan My Guilin Journey", href: "#enquiry" },
    secondary: { label: "Explore the Five Days", href: "#itinerary" },
  },
  seo: {
    title: "5-Day Guilin, Yangshuo & Longji Private Tour",
    description:
      "Plan five days in Guilin, Yangshuo and Longji with a private guide, shared Li River cruise and luggage transfer. Four nights, one hotel change, tailored quote.",
    preserveCopy: true,
    keywords: [
      "Guilin Yangshuo Longji private tour 5 days",
      "Guilin Yangshuo itinerary 5 days",
      "Longji rice terraces private tour from Guilin",
      "Guilin to Yangshuo tour with luggage transfer",
      "Li River cruise with private guide",
      "Guilin Yangshuo family private tour",
    ],
  },
  overview: {
    pitch:
      "Give each landscape its own day. At Longji, follow a chosen village route through working rice terraces; on the Li River, watch the limestone peaks unfold from the water. Finish with a full day around Yangshuo, where a short village walk and time beside the river leave room to enjoy the setting. Thoughtful logistics keep the trip connected without filling every hour.",
    answer:
      "This five-day Guilin, Yangshuo and Longji private tour combines four hotel nights, a Longji rice-terrace day trip, a shared four-star Li River cruise and Yangshuo countryside time. Stay two nights in Guilin and two in Yangshuo, with one hotel change. Private guiding, road transfers and agreed luggage delivery support the route. Hotels, tickets and your date-specific price are confirmed in a written proposal.",
    practicalities: [
      {
        label: "Route and nights",
        value:
          "Five days / four nights: Guilin for nights 1–2, Yangshuo for nights 3–4. Longji is a day trip from Guilin, not a third overnight base. One hotel change.",
      },
      {
        label: "Private and shared services",
        value:
          "Your own English-speaking guide and a separate driver with a private road vehicle for the agreed programme. The scheduled four-star Li River cruise and its passenger facilities are shared; no private boat charter is included.",
      },
      {
        label: "Longji walking and access",
        value:
          "Choose one Longji village area and viewpoint route before booking. Uneven paths, slopes and steps remain; vehicle access does not mean access to every viewpoint. Tell us about stair, wheelchair or stroller requirements before we propose the route.",
      },
      {
        label: "Luggage transfer",
        value:
          "On Day 3, agreed bags travel by road from the Guilin hotel to the Yangshuo hotel while you cruise. Bag numbers, sizes, vehicle capacity and handover arrangements are confirmed in writing. Carry passports, medicines and valuables yourself.",
      },
      {
        label: "Meals",
        value:
          "The proposed basis is four hotel breakfasts on Days 2–5. A boat lunch is included only if the confirmed cruise ticket provides it. Other lunches, dinners and drinks are separate unless listed in the quote.",
      },
      {
        label: "Arrival and departure",
        value:
          "Day 1 arrival transfer and Day 5 departure transfer are proposed inclusions. Specify Guilin Liangjiang International Airport (KWL), Guilin, Guilin North, Guilin West or Yangshuo railway station: these are different transfer points. Exact addresses and times determine the final plan.",
      },
      {
        label: "Season and scenery",
        value:
          "Terrace colour follows local planting, irrigation and harvest, which vary by village and year. Rain, heat, mist and river conditions can affect the experience. No particular field colour, clear view or sailing is guaranteed.",
      },
      {
        label: "Price and confirmation",
        value:
          "Request a written quote for your dates, party, rooms, guide language and services. No public starting price is set for this new route. Proposed hotels, cruise tickets and activities remain subject to availability before booking.",
      },
    ],
    facts: [
      {
        label: "Hotels",
        value: "Properties and room categories selected in your written proposal",
      },
      { label: "Duration", value: "5 days / 4 nights" },
      { label: "Overnight bases", value: "Guilin 2 nights · Yangshuo 2 nights" },
      { label: "Hotel changes", value: "One" },
      { label: "Cruise", value: "Shared four-star Li River vessel" },
      { label: "Longji", value: "Separate full-day excursion" },
      { label: "Price", value: "Written quote for your dates and party" },
    ],
  },
  highlights: [
    {
      title: "Longji with time to understand the terraces",
      description:
        "Spend a dedicated day in one selected village area, with a walking route matched to your ability and an explanation of the landscape as a working agricultural place.",
      category: "Culture",
      image: guilinLongjiImages.terraces,
    },
    {
      title: "A river journey that moves you onward",
      description:
        "Cruise downstream to Yangshuo as your luggage travels separately by road. The river becomes part of the route, with no same-day drive back to Guilin.",
      category: "Nature",
      image: guilinLongjiImages.cruise,
    },
    {
      title: "A full Yangshuo countryside day",
      description:
        "Leave room for village lanes, riverside scenery and breaks. Cycling, rafting and evening performances are choices to discuss, rather than compulsory additions.",
      category: "Photography",
      image: guilinLongjiImages.villageLane,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Guilin and settle in",
      destination: "Guilin",
      summary:
        "Meet your driver at the confirmed Guilin airport or railway station and transfer to your hotel for the first of two nights. Keep the arrival day light; any city walk depends on your actual arrival time and is agreed separately.",
      image: guilinLongjiImages.guilinRoom,
      hotel: "Guilin · first of two nights",
      meals: ["Meals at your own expense"],
      transport: "Private arrival transfer",
      activities: [
        {
          title: "A clear arrival handover",
          description:
            "Your proposal names the meeting point, vehicle capacity, luggage allowance and contact arrangement. Late arrival is accommodated through the confirmed transfer, not a promise of extra sightseeing.",
        },
        {
          title: "Prepare for Longji",
          description:
            "Review tomorrow's village route, footwear and weather with the local team. Leave large bags at your Guilin hotel for the day trip.",
        },
      ],
      transit:
        "Transfer time depends on the actual arrival point and hotel address; confirm it against your flight or train.",
      steps: "Arrival-day walking only; no fixed sightseeing commitment.",
      rest: "Hotel time after arrival.",
    },
    {
      day: 2,
      title: "Longji rice terraces: one village, a considered route",
      destination: "Longji · return to Guilin",
      summary:
        "Take a full-day private excursion from Guilin to the Longji rice terraces in Longsheng County. Use one confirmed village area, such as Ping'an or Dazhai, with a selected viewpoint walk. Return to the same Guilin hotel; this day does not include the Li River cruise.",
      image: guilinLongjiImages.terraces,
      hotel: "Guilin · second night",
      meals: ["Breakfast", "Lunch and dinner at your own expense"],
      transport:
        "Private road vehicle; required local scenic-area transport specified in the quote",
      activities: [
        {
          title: "The road into the hills",
          description:
            "Allow a substantial return road journey and time for the area's entry and local transport arrangements. The final itinerary names the village, meeting points, any shuttle or cableway and the selected viewpoint.",
        },
        {
          title: "Terraces and village life",
          description:
            "Walk with your guide at a manageable pace. Learn how water, elevation and farming shape the terraces. A village lunch can be arranged at your expense; photography of residents and visits to homes require permission.",
        },
        {
          title: "Return without moving hotels",
          description:
            "Return to Guilin with time to prepare for the next day's river journey. Do not add multiple distant villages simply to lengthen the attraction list.",
        },
      ],
      guideNote:
        "Longji is not a flat-access sightseeing stop. If the proposed steps are unsuitable, agree a reduced route or replacement before paying.",
      transit:
        "Reserve the full day. Road time, local transfers and walking depend on the chosen village, hotel, traffic and weather; confirm a dated schedule before booking.",
      steps:
        "Uneven village paths and terrace steps; exact route and approximate walking duration confirmed before booking.",
      rest: "Seated breaks and a lunch stop within the agreed route.",
    },
    {
      day: 3,
      title: "Cruise the Li River from Guilin to Yangshuo",
      destination: "Li River · Yangshuo",
      summary:
        "Check out of Guilin and transfer to the assigned cruise port. Board a scheduled four-star public Li River vessel with your private guide, while your agreed luggage travels by road. After disembarking, transfer to your Yangshuo hotel for two nights; the afternoon stays light.",
      image: guilinLongjiImages.cruise,
      hotel: "Yangshuo · first of two nights",
      meals: ["Breakfast", "Boat lunch only if included in the confirmed ticket"],
      transport: "Private port and hotel transfers · shared cruise · agreed road luggage delivery",
      activities: [
        {
          title: "Boarding handled in advance",
          description:
            "The written plan identifies the operator, port, check-in arrangements and ticket class. A four-star cruise is a vessel category, not a private charter or a promise of a particular seat, deck or meal.",
        },
        {
          title: "The landscape from the river",
          description:
            "Enjoy the changing karst scenery with interpretation from your guide and unhurried time to watch the river. Sailing time and the operating route follow the actual service and conditions.",
        },
        {
          title: "Luggage handover and hotel arrival",
          description:
            "Confirm delivered bags at the Yangshuo hotel using the agreed handover arrangement. Keep valuables with you. A short orientation is possible if sailing and arrival leave time; a second major attraction is not included by default.",
        },
      ],
      transit:
        "Allow this as a full transfer-and-cruise day; the operator's sailing and boarding schedule determines departure from Guilin.",
      steps:
        "Port approaches, gangways and boat steps; accessibility must be checked for the actual vessel.",
      rest: "Seated cruise time followed by hotel time.",
    },
    {
      day: 4,
      title: "Yangshuo countryside at your pace",
      destination: "Yangshuo",
      summary:
        "Explore the Yangshuo countryside with a private guide and vehicle, choosing a short village walk and riverside viewpoints around the Yulong River area. Balance time outdoors with breaks, then return to the same hotel. Bamboo rafting, cycling and evening shows are separately arranged options.",
      image: guilinLongjiImages.villageLane,
      hotel: "Yangshuo · second night",
      meals: ["Breakfast", "Lunch and dinner at your own expense"],
      transport: "Private road vehicle for the agreed touring window",
      activities: [
        {
          title: "Village lanes and riverside views",
          description:
            "Agree a route around the hotel location, weather and your interests. Quiet roads and river viewpoints offer an alternative to filling the day with ticketed attractions; access conditions are checked locally.",
        },
        {
          title: "Choose an activity only if it suits you",
          description:
            "Ask about Yulong River bamboo rafting or a guided cycling route. Participation rules, equipment, weather, traffic exposure and additional fees must be confirmed. Neither activity is required to enjoy this day.",
        },
        {
          title: "An afternoon with breathing room",
          description:
            "Include a meal break and hotel rest within the quoted service window. If you want sunset photography or an evening show, arrange transport and guide hours explicitly rather than assuming all-day standby.",
        },
      ],
      transit: "Local road transfers depend on your Yangshuo hotel and agreed countryside route.",
      steps:
        "Flexible short walks on village paths; cycling and rafting are not the default route.",
      rest: "Lunch break and an agreed hotel return.",
    },
    {
      day: 5,
      title: "Leave Yangshuo with the right connection",
      destination: "Yangshuo · confirmed departure point",
      summary:
        "After breakfast, transfer to the airport or railway station named in your proposal. Allow the full road journey from Yangshuo and the carrier's check-in buffer. This is a departure day, with no major sightseeing commitment before your connection.",
      image: guilinLongjiImages.vehicle,
      meals: ["Breakfast, subject to the hotel's serving time"],
      transport: "Private departure transfer to the agreed airport or station",
      activities: [
        {
          title: "Match the transfer to your ticket",
          description:
            "Yangshuo railway station is outside central Yangshuo, near Xingping. It is not interchangeable with Guilin, Guilin North, Guilin West or KWL airport. Send the exact departure point and time before booking.",
        },
        {
          title: "Adjust early departures sensibly",
          description:
            "For an early flight or train, review whether the final night should move closer to the departure point. Any hotel or route change is re-quoted; tight connections are not guaranteed.",
        },
      ],
      transit:
        "Departure time is calculated from the exact hotel, airport or station, road conditions and required check-in margin.",
      steps: "Hotel and terminal walking.",
      rest: "No scheduled sightseeing before departure.",
    },
  ],
  accommodations: [
    {
      name: "Your selected Guilin hotel",
      destination: "Guilin · 2 nights",
      description:
        "Choose a well-located hotel with suitable room space and straightforward vehicle access. The proposal names the property, room category, bedding, breakfast and cancellation terms; no named hotel is held at this planning stage. The supplied room photograph illustrates a possible style, not a confirmed property, room or view.",
      roomStyle: "Double or twin room as quoted",
      highlights: ["Two consecutive nights", "Luggage stays here during the Longji day trip"],
      image: guilinLongjiImages.guilinRoom,
    },
    {
      name: "Your selected Yangshuo stay",
      destination: "Yangshuo · 2 nights",
      description:
        "Discuss a countryside setting versus town access before choosing. Remote locations can add transfer time, while rural stays may have stairs or limited step-free access. Confirm the actual location and room rather than assuming every stay has a river view. The supplied countryside-room photograph is a style reference; the property and room are confirmed in your proposal.",
      roomStyle: "Room and bedding confirmed in writing",
      highlights: [
        "Two consecutive nights",
        "Location reviewed against countryside touring and departure",
      ],
      image: guilinLongjiImages.yangshuoRoom,
    },
  ],
  included: [
    "Proposed four hotel nights: two in Guilin and two in Yangshuo, with room category and four breakfasts confirmed in the written quote.",
    "Private English-speaking guide and separate driver with a private road vehicle for the scheduled touring on Days 2–4; exact working hours confirmed before booking.",
    "Private Day 1 arrival transfer and Day 5 departure transfer to the named airport or railway station; driver-only unless guide assistance is expressly listed.",
    "Longji admission and the local transport required for the selected village route, itemised in the proposal; any cableway must be explicitly listed.",
    "Standard shared four-star Li River cruise ticket, private port transfers and agreed road luggage delivery from Guilin to the Yangshuo hotel on Day 3.",
    "Boat lunch only when attached to the confirmed cruise ticket. No compulsory shopping stops.",
  ],
  excluded: [
    "International or domestic flights and trains to or from this regional route.",
    "Lunches, dinners and drinks except a boat lunch expressly included in the confirmed ticket; early breakfast or breakfast boxes unless confirmed.",
    "Private boat charter, guaranteed window seat or premium cruise seating unless separately contracted.",
    "Bamboo rafting, cycling, e-bikes, evening shows, additional scenic attractions and extra guide or vehicle hours unless added to the written quote.",
    "Visas, travel insurance, gratuities and personal expenses. Child seats, oversized luggage, accessible transport and additional rooms must be requested and priced as needed.",
  ],
  optionalExperiences: [],
  transportation: {
    title: "Connected by private road services and a shared river cruise",
    description:
      "Keep Longji, the cruise and Yangshuo countryside on separate days. The operating plan connects the actual hotels, assigned port and named departure point, with luggage capacity and service hours agreed before booking. The vehicle photograph is illustrative; the actual vehicle, seating and luggage capacity are confirmed in your proposal.",
    items: [
      {
        label: "Longji return",
        value: "One dedicated excursion from Guilin; village and local transport specified.",
      },
      {
        label: "Cruise day",
        value:
          "Shared four-star sailing downstream; guide accompanies you, agreed bags travel separately by road.",
      },
      {
        label: "Departure",
        value:
          "One private transfer from Yangshuo to your confirmed airport or railway station; review early departures before buying tickets.",
      },
    ],
  },
  routeMap: {
    title: "Two bases, three distinct landscapes",
    description:
      "Guilin for arrival and Longji; the Li River as the transition; Yangshuo for the countryside and departure. The map is an orientation, not a driving or sailing timetable.",
    stops: [
      {
        name: "Guilin",
        days: "Days 1–2 · 2 nights",
        description: "Arrival base and return point for the Longji day trip.",
        coordinates: { latitude: 25.274, longitude: 110.29 },
      },
      {
        name: "Longji rice terraces",
        days: "Day 2 · day trip",
        description:
          "One selected village and viewpoint route in Longsheng County; return to Guilin.",
        coordinates: { latitude: 25.76, longitude: 110.12 },
      },
      {
        name: "Yangshuo",
        days: "Days 3–5 · 2 nights",
        description:
          "Arrive by shared Li River cruise; countryside day and a separately timed departure transfer.",
        coordinates: { latitude: 24.778, longitude: 110.496 },
      },
    ],
  },
  gallery: [
    guilinLongjiImages.hero,
    guilinLongjiImages.terraces,
    guilinLongjiImages.morning,
    guilinLongjiImages.terracePath,
    guilinLongjiImages.cruise,
    guilinLongjiImages.villageRoofs,
    guilinLongjiImages.villageLane,
    guilinLongjiImages.guilinRoom,
    guilinLongjiImages.yangshuoRoom,
    guilinLongjiImages.vehicle,
  ],
  faqLimit: 30,
  faqs: [
    {
      question: "Is five days enough for Guilin, Yangshuo and Longji?",
      answer:
        "Five days and four nights allow an arrival day, a separate Longji day trip, a Li River cruise to Yangshuo, a countryside day and departure. You stay two nights in each base. Add time if you want extensive terrace hiking, more villages or an early departure that would otherwise shorten the stay.",
    },
    {
      question: "What is private on this Guilin and Yangshuo tour?",
      answer:
        "The proposed guide, driver and road vehicle are dedicated to your party during the agreed touring hours. The scheduled four-star Li River vessel is shared with other passengers. Attraction facilities and local scenic-area transport may also be shared. Exclusive access and a private boat are not included.",
    },
    {
      question: "Does the tour include luggage transfer from Guilin to Yangshuo?",
      answer:
        "Yes, the proposed Day 3 plan sends agreed bags by road to your Yangshuo hotel while you cruise. Confirm bag numbers, sizes, vehicle capacity and the delivery handover in writing. Carry passports, valuables, medicines and what you need on the boat yourself.",
    },
    {
      question: "Do we sleep at the Longji rice terraces?",
      answer:
        "No. This five-day version visits Longji as a full-day return trip from Guilin, so you change hotels only once. A terrace overnight is a different version requiring a revised luggage, road and cruise plan; ask us to rework the nights rather than simply adding a late return.",
    },
    {
      question: "Which Longji village will we visit: Ping'an or Dazhai?",
      answer:
        "Your proposal selects one village area and a realistic viewpoint route after reviewing your walking ability, travel date and local access. Ping'an and Dazhai are alternatives in this itinerary, not a promise to cover both. The chosen route, local transport and any cableway fees are listed before booking.",
    },
    {
      question: "How much walking is involved at Longji, and is it wheelchair accessible?",
      answer:
        "Village paths and terrace viewpoints can involve slopes, uneven surfaces and steps. The amount depends on the selected village and viewpoint; we confirm a route and approximate walking duration before booking. Tell us about mobility limits, wheelchairs or strollers first. A car transfer or cableway does not make the full route step-free.",
    },
    {
      question: "When is the best time to see the Longji rice terraces?",
      answer:
        "Choose dates around the scenery you prefer, then check the selected village's current farming cycle. Irrigated fields, growing rice and harvest scenery occur at different stages; dates and colours vary by altitude, village and year. We do not guarantee green or golden terraces in a particular month. Weather and local access also matter.",
    },
    {
      question: "Is the Li River cruise a private boat?",
      answer:
        "No. This itinerary proposes a scheduled four-star public cruise with your private guide aboard. Boarding areas, decks and passenger facilities are shared. The operator, port, ticket category, seat arrangements and meal basis are confirmed for your date; a private charter requires a separate quote.",
    },
    {
      question: "Is the Yulong River bamboo raft the same as the Li River cruise?",
      answer:
        "No. The Li River cruise is the main downstream boat journey from the Guilin area to Yangshuo on Day 3. Yulong River bamboo rafting is a separate local activity around Yangshuo. It is optional here, with its own participation rules, weather limitations, availability and fee.",
    },
    {
      question: "What happens if the Li River cruise is cancelled?",
      answer:
        "We review the operator's notice and discuss a workable land alternative or route adjustment. Ticket refunds, additional transport costs and any hotel changes follow the booked suppliers' terms and your written agreement. A replacement sailing, clear weather or identical scenery cannot be promised.",
    },
    {
      question: "Can children join this Guilin and Yangshuo private tour?",
      answer:
        "Yes, we can propose the route for families after checking ages, bedding, walking stamina and transport needs. Longji steps and boat boarding need particular attention. Child cruise fares and seating follow the actual ticket rules. Bamboo rafting or cycling is not automatically suitable or included; child seats must be requested and confirmed.",
    },
    {
      question: "Can we skip cycling and bamboo rafting in Yangshuo?",
      answer:
        "Yes. The standard countryside day uses a private road vehicle and agreed short walks. Cycling, e-bikes and bamboo rafting are optional and separately quoted, subject to suitability and operating conditions. You do not need to take part in them to follow the five-day route.",
    },
    {
      question: "Where should we stay: Guilin or Yangshuo?",
      answer:
        "This route uses both: two Guilin nights for arrival and the Longji day trip, followed by two Yangshuo nights for the river arrival and countryside. In Yangshuo, choose countryside atmosphere or easier town access after reviewing the exact hotel location, stairs, room type and departure transfer.",
    },
    {
      question: "Which airport or railway station should we use?",
      answer:
        "Send your proposed flight or train before booking. Guilin Liangjiang International Airport uses code KWL. Guilin, Guilin North, Guilin West and Yangshuo railway stations are separate locations. Yangshuo station is near Xingping, outside central Yangshuo. We match your transfer to the exact ticket and hotel, with a check-in buffer.",
    },
    {
      question: "Can we fly out early on Day 5?",
      answer:
        "Possibly, but the road transfer from your actual Yangshuo hotel must be reviewed against the flight and airport check-in requirement. A very early departure may justify moving the final night closer to Guilin or adding a night. Such changes are re-quoted; do not assume a short transfer or guaranteed tight connection.",
    },
    {
      question: "How much does this five-day Guilin private tour cost?",
      answer:
        "This new route is quoted for your dates and party; no public starting price has been set. The written total depends on hotel and room choices, adults and child ages, guide language, vehicle and luggage capacity, cruise tickets, Longji route and arrival and departure points. Optional activities are itemised separately.",
    },
    {
      question: "Which meals are included?",
      answer:
        "The proposed basis includes four hotel breakfasts on Days 2–5, subject to serving times, and a boat lunch only if it comes with the confirmed cruise ticket. Other lunches, dinners and drinks are at your expense unless your written quote includes them. Tell us about allergies or dietary needs before choosing meals.",
    },
    {
      question: "How is this different from your Guilin to Yangshuo day tour?",
      answer:
        "The day tour handles one cruise day and a selected finish. This five-day journey adds four hotel nights, a separate Longji excursion, a full Yangshuo countryside day and confirmed arrival and departure transfers. Choose the day tour if your hotels and wider Guangxi itinerary are already arranged.",
    },
    {
      question: "Can we add this route to a longer China itinerary?",
      answer:
        "Yes. It can form a regional chapter in a wider trip once actual flights or trains and transfer times are checked. Connections from Beijing, Shanghai, Xi'an, Hong Kong or other cities are not included by default. We confirm the transport, ticket terms and any additional night in a revised proposal.",
    },
    {
      question: "Does this route qualify for visa-free entry or transit?",
      answer:
        "The itinerary itself does not establish entry eligibility. Requirements depend on nationality, travel document, entry point, onward travel and the policy in force on your travel dates. Check the National Immigration Administration's current guidance and your carrier before booking; we do not treat a general visa-free headline as approval for an individual trip.",
    },
  ],
  related: { useListedTours: true, tours: [], destinations: [] },
  planningResources: [
    {
      label: "Guilin and Yangshuo destination guide",
      href: "/destinations/guilin",
      description: "Read about the region before choosing hotel locations and your onward route.",
    },
    {
      label: "Five days in Guilin and Yangshuo",
      href: "/journal/guilin-yangshuo-itinerary-5-days",
      description: "Compare the regional planning choices behind a five-day stay.",
    },
    {
      label: "Need only the cruise day?",
      href: "/tours/guilin-yangshuo-li-river-cruise-private-day-tour",
      description:
        "Choose the existing one-day service if your hotels and wider route are already arranged.",
    },
    {
      label: "Guilin Municipal Government",
      href: "https://www.guilin.gov.cn/",
      officialPublisher: "Guilin Municipal Government",
      description:
        "Official regional information and notices. Confirm date-specific cruise operations with the booked operator; this portal does not establish ticket availability or endorse this tour.",
    },
    {
      label: "South China Karst: UNESCO property record",
      href: "https://whc.unesco.org/en/list/1248/",
      officialPublisher: "UNESCO World Heritage Centre",
      description:
        "Authoritative context for South China Karst, including the Guilin component. This designation does not apply to every stop in the itinerary and does not establish Longji's status or operating rules.",
    },
    {
      label: "China Railway 12306",
      href: "https://www.12306.cn/en/index.html",
      officialPublisher: "China Railway 12306",
      description:
        "Check railway booking guidance and the actual departure station. Train times, seats and ticket rules require a date-specific booking check.",
    },
    {
      label: "National Immigration Administration",
      href: "https://en.nia.gov.cn/",
      officialPublisher: "National Immigration Administration",
      description:
        "Consult current entry and transit guidance for your nationality and routing. No visa-free entitlement is promised by this itinerary.",
    },
  ],
  inquiryChecklist: [
    "Travel dates and adults / child ages",
    "Arrival and departure flight or train, exact airport or station",
    "Hotel preference, rooms, bedding and accessibility needs",
    "Longji walking ability and stair limits",
    "Luggage numbers and sizes for Day 3",
    "Guide language, dietary needs and optional activity requests",
  ],
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=5-Day%20Guilin%20Yangshuo%20Longji%20Private%20Tour",
    whatsappHref:
      "https://wa.me/8618027438191?text=Please%20help%20me%20plan%20a%20five-day%20Guilin%2C%20Yangshuo%20and%20Longji%20private%20tour.",
    defaultMessage:
      "Please help me plan five days in Guilin, Yangshuo and Longji. My dates, party, room preferences, walking needs, luggage and exact arrival and departure connections are:",
  },
};
