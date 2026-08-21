import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

// Photography is intentionally pending. The product should never imply that a
// generic Great Wall image depicts the date-specific Mutianyu operating route.
const pendingImage: MediaAsset = {
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "Photography for the private Mutianyu Great Wall day tour is being prepared",
  width: 1920,
  height: 1080,
};

export const mutianyuPrivateDayTour: Tour = {
  slug: "private-mutianyu-great-wall-day-tour",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-08-21",
  title: "Private Mutianyu Great Wall Tour, Seamlessly Handled",
  subtitle:
    "From your Beijing hotel to the right gate, tickets, walking route, mountain transport and return, one English-speaking guide and private vehicle manage the day around your group.",
  duration: "1 Day · Private",
  route: "Beijing · Mutianyu Great Wall · Beijing",
  styles: ["Culture", "Family", "Senior-friendly", "Photography"],
  hero: {
    eyebrow: "Private Beijing day tour · no shopping · 7–9 hours",
    image: pendingImage,
    primary: { label: "Check My Date", href: "#inquiry" },
    secondary: { label: "See What Is Included", href: "#price" },
  },
  seo: {
    title: "Private Mutianyu Great Wall Day Tour from Beijing",
    description:
      "A private Mutianyu Great Wall day tour from your Beijing hotel with an English-speaking guide, private vehicle, tickets, no shopping and clear optional cable-car or toboggan choices.",
    keywords: [
      "private Mutianyu Great Wall tour",
      "Mutianyu Great Wall private day tour",
      "private Great Wall tour from Beijing hotel",
      "Mutianyu Great Wall tour with private car",
      "Mutianyu cable car private tour",
      "Great Wall tour for families",
      "Great Wall tour for seniors",
      "no shopping Great Wall tour",
    ],
  },
  overview: {
    pitch:
      "A Great Wall day should not begin with ticket uncertainty, a confusing pickup point or an argument about how far to walk. This private Mutianyu tour starts at your Beijing hotel. Before the day, we confirm the hotel address, group, ticket details, likely road timing and whether walking, cable car, chairlift or toboggan is the most sensible choice. At the Wall, your guide adapts the tower range and turnaround point to the people actually traveling. Your private vehicle remains responsible for the return to Beijing. No shopping stops are built into the day.",
    facts: [
      {
        label: "Time",
        value: "Usually 7–9 hours door to door",
        helper:
          "Exact pickup and return depend on your Beijing address, traffic, ticket window and the route you choose on the Wall.",
      },
      {
        label: "Included",
        value: "Private vehicle, English-speaking guide, admission and shuttle",
        helper:
          "Hotel pickup and return are included within Beijing's main urban districts; other locations are quoted before you book.",
      },
      {
        label: "Walking",
        value: "Planned around your group, not a fixed tower count",
        helper:
          "Mutianyu remains historic mountain architecture, with steps, slopes and uneven paving even when mountain transport is used.",
      },
      {
        label: "Mountain transport",
        value: "Optional and chosen after your priorities are known",
        helper:
          "Cable car, chairlift and toboggan operate under the scenic area's live rules, weather and safety conditions.",
      },
      {
        label: "Service promise",
        value: "No shopping, no shared coach and no rushed fixed route",
        helper:
          "One named operating plan explains the pickup, ticket, mountain route, meeting point and return before the day begins.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Your Beijing Hotel",
      days: "Before departure",
      title: "Know the pickup, ticket plan and walking choice before you leave the lobby",
      description:
        "Send your hotel, preferred date, group details and any mobility or confidence-with-heights concerns. We confirm the workable pickup, admission process and an appropriate ascent-and-descent plan before the vehicle arrives.",
      see: "One clear message with pickup time, vehicle contact, ticket approach and the practical plan for the day.",
      do: "Tell us whether you prefer a gentler visit, a longer walk, photography time, a chairlift or a toboggan option.",
      feel: "That the complicated parts have been addressed before they become your problem.",
    },
    {
      location: "Mutianyu Great Wall",
      days: "Your pace",
      title: "Walk a section that suits your group, with a guide who knows when to turn around",
      description:
        "Mutianyu offers restored ramparts and mountain views, but it is still a steep historic site. Your guide sets the route around the day's weather, the available lifts and the energy in your party rather than forcing a predetermined tower target.",
      see: "Forested ridgelines, watchtowers and a Great Wall section selected for a first visit without treating the site like an endurance test.",
      do: "Choose a comfortable section, pause for views and photographs, and use mountain transport when it is confirmed and appropriate.",
      feel: "Supported and unhurried, with a real Great Wall experience rather than a hurried photo stop.",
    },
    {
      location: "Return to Beijing",
      days: "After the Wall",
      title: "Finish with the return plan already in hand",
      description:
        "Your vehicle waits through the agreed service window. After the Wall, return directly to your hotel or, where practical and confirmed in advance, an agreed central Beijing address. Lunch can remain independent or be added before booking.",
      see: "A return transfer that does not leave you looking for the correct coach, driver or meeting point after a long mountain day.",
      do: "Use the ride back to rest, ask your guide questions or adjust the return point within the confirmed operating area.",
      feel: "That the day ends as cleanly as it began.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Private Day Tour Standard",
    title: "A simple day, properly prepared.",
    description:
      "A private Great Wall tour earns its value by removing the wrong kind of uncertainty: where to be, what is included, how much walking is realistic and who is responsible when live conditions change.",
    items: [
      {
        label: "01 · Hotel-first pickup",
        value: "Your actual Beijing address is checked before confirmation",
        helper:
          "We state the pickup window and any extra distance or airport transfer charge before payment.",
      },
      {
        label: "02 · Ticket clarity",
        value: "Admission and the scenic-area shuttle are included",
        helper:
          "Passport details, ticket date and collection method are confirmed in the operating message.",
      },
      {
        label: "03 · Honest walking plan",
        value: "The tower range is chosen around the people traveling",
        helper:
          "A lift can reduce the climb; it does not remove all steps, slopes or exposure on the Wall.",
      },
      {
        label: "04 · Transparent upgrades",
        value: "Mountain transport is optional, not hidden in the price",
        helper:
          "We show the selected cable-car, chairlift or toboggan cost before booking and use the operator's current rules.",
      },
      {
        label: "05 · No shopping",
        value: "No factory stop, tea stop or sales detour",
        helper: "Your day is for Mutianyu and the route needed to reach it well.",
      },
      {
        label: "06 · Weather-aware operation",
        value: "Live conditions are checked against the chosen route",
        helper:
          "If a lift or toboggan is suspended, we explain the available alternatives before changing the plan.",
      },
    ],
    note: "Mutianyu admission, mountain transport and site access follow the scenic area's live reservation, weather, safety and operating rules. AVIORA confirms the date-specific plan and alternatives; no private tour can remove historic steps, wind, rain, crowd controls or a temporary scenic-area closure.",
  },
  highlights: [
    {
      title: "A Beijing hotel pickup you do not need to coordinate",
      description:
        "Your guide and vehicle work from one confirmed hotel address, pickup window and return plan, so the day does not begin with a station, coach group or ticket-office puzzle.",
      category: "Culture",
      image: pendingImage,
    },
    {
      title: "A Wall route chosen for the people actually traveling",
      description:
        "The ascent, tower range and turnaround point are adjusted to your group, live conditions and selected mountain transport instead of a fixed fitness test.",
      category: "Senior-friendly",
      image: pendingImage,
    },
    {
      title: "Transparent mountain transport, only if you want it",
      description:
        "Choose cable car, chairlift or toboggan only after the current operation and your comfort level are checked. The cost is shown before you commit.",
      category: "Family",
      image: pendingImage,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Hotel pickup, Mutianyu at your pace, and a protected return",
      destination: "Beijing · Mutianyu Great Wall · Beijing",
      summary:
        "Meet your private vehicle and English-speaking guide at the confirmed Beijing hotel. Travel to Mutianyu, use the included admission and scenic-area shuttle, then choose the practical ascent, walking section and descent for the day. The return vehicle remains with the group through the agreed service window and brings you back to your Beijing hotel or a confirmed central address.",
      image: pendingImage,
      hotel: "No overnight stay required · pickup and return at your Beijing hotel",
      meals: ["Independent lunch time; meal reservation available when requested"],
      transport:
        "Private Beijing hotel pickup, Mutianyu return transfer and scenic-area shuttle; exact service window stated before booking",
      activities: [
        {
          title: "A confirmed hotel pickup",
          description:
            "Meet at the hotel lobby or another agreed central Beijing address. Your operating message names the pickup window, vehicle contact and return arrangement.",
        },
        {
          title: "Admission and scenic-area shuttle",
          description:
            "Use the included Mutianyu admission and internal shuttle. Your guide handles the arrival sequence and keeps the group moving through the right entry points.",
        },
        {
          title: "A route that follows the day's conditions",
          description:
            "Walk a suitable tower section, pause for views and select optional mountain transport only when the relevant service is operating and fits your group.",
        },
        {
          title: "A direct, unhurried return",
          description:
            "Return to Beijing in the private vehicle without compulsory shopping stops, shared-coach pickups or an uncertain final meeting point.",
        },
      ],
      guideNote:
        "Please tell us in advance about young children, mobility limitations, pregnancy, a fear of heights, a desire to use the toboggan, large luggage or a non-central pickup. These details change the responsible route and should not be guessed on the morning.",
      coordinates: { latitude: 40.4319, longitude: 116.5704 },
    },
  ],
  accommodations: [
    {
      name: "Your Beijing hotel or confirmed central address",
      destination: "Beijing",
      description:
        "This is a private day tour, so no overnight stay is included. The service begins and ends at your Beijing hotel or another confirmed central location, with any non-standard pickup requirement priced clearly before booking.",
      roomStyle: "No overnight stay required",
      highlights: [
        "Door-to-door planning",
        "Confirmed pickup",
        "Private return",
        "No hotel change",
      ],
      image: pendingImage,
    },
  ],
  included: [
    "Private pickup and return within Beijing's main urban hotel districts; non-central hotels, airports and locations outside the confirmed service area are quoted before booking",
    "Private air-conditioned vehicle with professional driver for the confirmed service window",
    "Private English-speaking guide for the confirmed Mutianyu visit and return",
    "Mutianyu Great Wall admission and the scenic-area shuttle bus",
    "Pre-trip review of your hotel address, group details, ticket requirements and preferred walking or mountain-transport approach",
    "Bottled water in the vehicle and one final operating message with pickup, contacts and the confirmed plan",
    "No compulsory shopping stops",
  ],
  excluded: [
    "Cable car, chairlift, toboggan or any mountain transport not selected in your written confirmation",
    "Lunch, personal purchases, gratuities, travel insurance and items not expressly listed as included",
    "Airport pickup or drop-off, out-of-area hotels, late-night return or additional vehicle and guide hours unless quoted",
    "Guaranteed operation of a cable car, chairlift, toboggan or any scenic-area service affected by weather, safety, maintenance, capacity or operator rules",
    "Wheelchair, porter, medical care or accessibility equipment unless separately requested and confirmed",
  ],
  optionalExperiences: [
    {
      title: "Round-trip cable car",
      description:
        "Add a round-trip cable-car plan from approximately US$22 per person when the operator's current route and your group's preferred Wall section make it the right choice. Final price follows the confirmed scenic-area rate for your date.",
      badges: ["Approx. US$22 pp", "Subject to operation"],
      image: pendingImage,
    },
    {
      title: "Chairlift up and toboggan down",
      description:
        "A popular option for confident guests who want a playful descent: approximately US$22 per person, subject to weather, safety conditions, height or age rules and the operator's live decision.",
      badges: ["Approx. US$22 pp", "Weather dependent"],
      image: pendingImage,
    },
    {
      title: "One-way mountain transport",
      description:
        "Add a single cable-car, chairlift or toboggan sector from approximately US$15 per person when the confirmed route makes a one-way choice more sensible than a return ticket.",
      badges: ["Approx. US$15 pp", "Route dependent"],
      image: pendingImage,
    },
    {
      title: "Reserved Beijing lunch",
      description:
        "Add a clean, reliable restaurant reservation aligned with the return route and your dietary preferences. The restaurant and price are confirmed before booking rather than treated as a mandatory tourist stop.",
      badges: ["Optional", "Dietary needs checked"],
      image: pendingImage,
    },
  ],
  transportation: {
    title: "One private vehicle, one confirmed route, no coach-group logistics",
    description:
      "Your service is planned from the actual hotel address and the expected ticket window. A private car reduces unnecessary transfers; it does not guarantee a fixed road time in Beijing traffic or replace the scenic area's own shuttle and mountain-transport systems.",
    items: [
      {
        label: "Pickup",
        value: "Beijing hotel lobby or confirmed central address",
        helper:
          "Main urban hotel districts are included in the base price; other locations are checked first.",
      },
      {
        label: "Vehicle",
        value: "Private air-conditioned car or MPV",
        helper:
          "Vehicle size is matched to the party and luggage, then named in the final operating plan.",
      },
      {
        label: "At Mutianyu",
        value: "Included scenic-area shuttle; optional mountain transport",
        helper:
          "Cable car, chairlift and toboggan remain separate scenic-area products with live operating rules.",
      },
      {
        label: "Return",
        value: "Direct return to the confirmed Beijing address",
        helper: "Service hours and any approved address change are stated before the day begins.",
      },
    ],
  },
  routeMap: {
    title: "A Great Wall day that starts and ends where you are staying",
    description:
      "This is not a hotel-to-coach-to-shopping-stop circuit. The practical route begins at your Beijing hotel, moves privately to Mutianyu, follows the confirmed ticket and walking plan, then returns directly to Beijing.",
    stops: [
      {
        name: "Beijing hotel pickup",
        days: "Start",
        description:
          "A confirmed lobby or central pickup point, selected around the actual address and ticket timing.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        name: "Mutianyu Great Wall",
        days: "Main visit",
        description:
          "Admission, scenic-area shuttle and a private walking plan, with optional mountain transport chosen transparently.",
        coordinates: { latitude: 40.4319, longitude: 116.5704 },
      },
      {
        name: "Beijing return",
        days: "Finish",
        description:
          "Private return to the confirmed hotel or central Beijing address, without compulsory sales stops.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
    ],
  },
  gallery: [],
  faqs: [
    {
      question: "What does the US$198 starting price include?",
      answer:
        "It is an indicative per-person starting price based on four guests traveling privately, equivalent to a group total from US$792. It includes pickup and return within Beijing's main urban hotel districts, a private air-conditioned vehicle and driver during the confirmed service window, a private English-speaking guide, Mutianyu admission, the scenic-area shuttle, bottled water and no compulsory shopping stops. Optional mountain transport and lunch are not included.",
    },
    {
      question: "Is this a private tour or a shared coach tour?",
      answer:
        "It is private for your booking party. You have your own vehicle, driver and English-speaking guide during the confirmed service window. Mutianyu itself is a public scenic area, so other visitors will be present and scenic-area services follow the operator's own rules.",
    },
    {
      question: "What is the indicative price for a different group size?",
      answer:
        "Outside major public holidays and unusual pickup requirements, the indicative Essentials private-group prices are: one guest from US$498; two guests from US$598 total; three guests from US$698 total; four guests from US$792 total; five guests from US$940 total; and six guests from US$1,080 total. The exact vehicle, hotel address, date and service window are checked before confirmation. Optional mountain transport and lunch remain separate.",
    },
    {
      question: "Can you pick us up from our Beijing hotel?",
      answer:
        "Yes, pickup and return within Beijing's main urban hotel districts are included. Send the exact hotel or address before booking so we can confirm the pickup window. Airports, distant suburbs, out-of-area hotels and unusual return locations may require a clearly stated supplement.",
    },
    {
      question: "How much walking is involved at Mutianyu?",
      answer:
        "The right answer depends on the ascent choice, tower section, weather, balance, confidence with heights and your own pace. Cable or chairlift access can reduce the uphill approach, but the Wall still has slopes, uneven stone paving, steps and exposed sections. Tell us what feels comfortable; your guide will plan a sensible route and turnaround point rather than force a fixed tower target.",
    },
    {
      question: "What are the cable car, chairlift and toboggan options?",
      answer:
        "They are optional scenic-area products, not hidden charges. A round-trip cable car is approximately US$22 per person; a chairlift-up and toboggan-down combination is approximately US$22 per person; a one-way option is approximately US$15 per person. We confirm the current operator rate and suitable route before booking. Operations can change because of weather, safety, maintenance, capacity or scenic-area rules.",
    },
    {
      question: "Can children or older travelers take this tour?",
      answer:
        "Often yes, but their ages, confidence with heights, walking ability and any support needs should be shared before booking. We can propose a shorter Wall section and appropriate mountain transport where it is operating. The Wall is not step-free, and toboggan eligibility depends on the operator's current age, height and safety rules.",
    },
    {
      question: "What happens if weather affects the Wall or mountain transport?",
      answer:
        "We check the practical date-specific conditions and explain the options. A cable car, chairlift or toboggan may be suspended for safety. If the scenic area or a selected service cannot operate, we discuss the workable alternative with you; no itinerary promises a weather-proof mountain experience.",
    },
    {
      question: "Is lunch included?",
      answer:
        "No. We keep the base cash-flow price clear and do not force a tourist restaurant into the day. Your guide can allow independent lunch time, or we can reserve a suitable restaurant along the confirmed route and show the cost before booking.",
    },
    {
      question: "How quickly can you confirm my date?",
      answer:
        "Send your date, group size and Beijing hotel through the form or WhatsApp. During China business hours, we aim to reply within one hour with the availability check, practical pickup plan and any relevant supplement. A booking is confirmed only after the written proposal, required payment and supplier arrangements are confirmed in writing.",
    },
  ],
  related: {
    tours: [
      {
        title: "Five Days in Beijing, With the Wall Given Its Own Day",
        description:
          "A privately paced Beijing journey for travelers who want the Great Wall, imperial sites and neighborhoods without compressing everything into one stay.",
        tags: ["Private", "Beijing", "Culture"],
        image: pendingImage,
        route: "Beijing · Mutianyu Great Wall",
        duration: "5 days / 4 nights",
        href: "/tours/beijing-great-wall-private-5-day-tour",
      },
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A longer premium private China journey that protects a full Great Wall day within a well-paced first visit.",
        tags: ["Private", "First-time China", "Easy pace"],
        image: pendingImage,
        route: "Beijing · Xi'an · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
      },
    ],
    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Mutianyu%20Great%20Wall%20Day%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20check%20a%20private%20Mutianyu%20Great%20Wall%20day%20tour.%0A%0ADate%3A%0ANumber%20of%20guests%20and%20ages%20if%20children%3A%0ABeijing%20hotel%20or%20pickup%20address%3A%0AWalking%20or%20mountain-transport%20preference%3A%0AAny%20mobility%2C%20height%20or%20dietary%20considerations%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20check%20a%20private%20Mutianyu%20Great%20Wall%20day%20tour.%20My%20date%2C%20group%20size%20and%20Beijing%20hotel%20are%3A",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I would like to check a private Mutianyu Great Wall day tour from my Beijing hotel.",
  },
};
