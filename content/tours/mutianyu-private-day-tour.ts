import { publishedJourneyPrices } from "@/content/tours/published-prices";
import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

const startingRate = publishedJourneyPrices["private-mutianyu-great-wall-day-tour"].fromUsd;
const startingPrice = `USD ${startingRate.toLocaleString("en-US")}`;
const twoAdultTotal = `USD ${(startingRate * 2).toLocaleString("en-US")}`;

const mutianyuImage = (file: string, alt: string, width: number, height: number): MediaAsset => ({
  src: `/tours/mutianyu-private-day-tour/${file}`,
  alt,
  width,
  height,
});

const panorama = mutianyuImage(
  "01-mutianyu-great-wall-autumn-panorama.webp",
  "Mutianyu Great Wall winding through autumn-colored mountains near Beijing",
  2160,
  3240,
);
const cableCar = mutianyuImage(
  "02-mutianyu-cable-car-autumn-view.webp",
  "Cable cars rising over the autumn mountains at Mutianyu",
  1920,
  2560,
);
const chairlift = mutianyuImage(
  "03-mutianyu-chairlift.webp",
  "Chairlift carrying visitors above the forest at Mutianyu Great Wall",
  2304,
  3838,
);
const watchtower = mutianyuImage(
  "04-mutianyu-great-wall-through-watchtower.webp",
  "Mutianyu Great Wall viewed through a watchtower opening",
  2304,
  3838,
);
const privateVehicle = mutianyuImage(
  "05-private-luxury-vehicle.webp",
  "Example vehicle interior for a private Beijing day tour; the assigned vehicle is confirmed before booking",
  1440,
  1920,
);
const mutianyuGallery = [panorama, cableCar, chairlift, watchtower, privateVehicle];

export const mutianyuPrivateDayTour: Tour = {
  slug: "private-mutianyu-great-wall-day-tour",
  visualStatus: "ready",
  publishedAt: "2026-08-21",
  updatedAt: "2026-11-11",
  title: "Private Mutianyu Great Wall Tour from Beijing",
  subtitle:
    "Spend a full day at Mutianyu with your own guide and driver, Beijing hotel pickup and return, admission and scenic-area shuttle. Choose your walking route and add mountain transport if it suits your day.",
  duration: "1 Day · Private",
  durationIso: "PT8H",
  route: "Beijing · Mutianyu Great Wall · Beijing",
  styles: ["Culture", "Family", "Photography"],
  hero: {
    eyebrow: "Private Beijing day tour · no shopping · 7–9 hours",
    image: panorama,
    primary: { label: "Check My Date", href: "#enquiry" },
    secondary: { label: "See What Is Included", href: "#included" },
  },
  seo: {
    title: "Private Mutianyu Great Wall Tour from Beijing",
    preserveCopy: true,
    description:
      "Private Mutianyu Great Wall tour from Beijing with your own guide, driver, hotel pickup, admission and shuttle. Cable car optional; no shopping stops.",
    keywords: [
      "private Mutianyu Great Wall tour from Beijing",
      "Mutianyu Great Wall tour with hotel pickup",
      "private Great Wall tour with guide and driver",
      "Mutianyu private tour for two people",
      "Mutianyu tour with English-speaking guide",
      "Mutianyu cable car private tour",
      "Mutianyu Great Wall tour for families",
      "Mutianyu Great Wall tour for older travelers",
      "no shopping Great Wall tour from Beijing",
    ],
  },
  overview: {
    answer:
      "Visit Mutianyu Great Wall from your Beijing hotel on a private 7–9-hour day tour. Your own guide, separate driver, air-conditioned vehicle, admission and scenic-area shuttle are included, with around 2–3 hours for the Wall visit. Cable car, chairlift, toboggan and lunch are extra unless added to your proposal. Walking is adapted to your group; steps remain. No compulsory shopping stops.",
    pitch:
      "Give the Great Wall its own day. We check your hotel address, walking preferences and return plans before choosing a departure time and ascent. At Mutianyu, spend your time exploring the ramparts and stopping for views while your guide helps choose a manageable section and turnaround point. Your vehicle waits through the agreed service window; there are no factory visits or sales stops built into the route.",
    practicalities: [
      {
        label: "Duration",
        value: "Usually 7–9 hours door to door; allow around 2–3 hours for the Wall visit.",
      },
      {
        label: "Route",
        value: "Beijing hotel → Mutianyu Great Wall → confirmed Beijing return address.",
      },
      {
        label: "Private service",
        value:
          "Your own guide, a separate driver and an air-conditioned vehicle for the agreed service window.",
      },
      {
        label: "Hotel pickup",
        value:
          "Beijing main urban hotel districts; exact address and any supplement confirmed before booking.",
      },
      {
        label: "Tickets included",
        value:
          "Mutianyu admission and scenic-area shuttle. The shuttle does not take you onto the Wall.",
      },
      {
        label: "Mountain transport",
        value:
          "Cable car, chairlift and toboggan are optional paid additions, confirmed before booking.",
      },
      {
        label: "Walking and access",
        value:
          "Steps, slopes and uneven stone remain after lift access; this is not a step-free tour.",
      },
      {
        label: "Starting-price basis",
        value: `${startingPrice} per person, based on two adults traveling together; ${twoAdultTotal} for two on that basis.`,
      },
      {
        label: "Meals and accommodation",
        value: "Lunch is separate. No overnight accommodation is included.",
      },
      {
        label: "Public-site services",
        value:
          "The guide and road vehicle are private; the Wall, shuttle and any selected lifts are shared with other visitors.",
      },
    ],
    facts: [
      {
        label: "Suitable for",
        value: "Beijing visitors who want one privately guided Great Wall day",
        helper: "Families and older guests should share walking needs before a route is confirmed.",
      },
      {
        label: "Pacing",
        value: "Flexible Wall section; steps and slopes on every route",
        helper: "A cable car reduces the uphill approach but does not make the Wall step-free.",
      },
      {
        label: "Time",
        value: "Usually 7–9 hours door to door",
        helper:
          "Exact pickup and return depend on your Beijing address, traffic, ticket window and the route you choose on the Wall.",
      },
      {
        label: "Included",
        value: "Private vehicle, guide, admission and shuttle",
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
  visitOptions: {
    title: "Choose how you reach the Wall",
    intro:
      "Start with the same private guide, driver, admission and scenic-area shuttle. Then choose the ascent and descent that suit your walking ability and comfort with heights. We quote one total for your party, showing any selected mountain-transport supplement.",
    options: [
      {
        title: "Round-trip enclosed cable car",
        description:
          "Consider this first if you want to reduce the uphill approach and spend more of your energy on the Wall. Your guide chooses a suitable section and turnaround point.",
        walking:
          "Steps, slopes and uneven paving remain after the cable car. This is not a step-free visit.",
        priceNote: "Optional supplement, included in your written total only when selected.",
      },
      {
        title: "Walk up and down",
        description:
          "Use the walking approach to reach the Wall without buying mountain-transport tickets. Best considered by guests who actively want a longer climb.",
        walking:
          "Substantially more uphill and downhill climbing. We review your fitness, available time and conditions before confirming this route.",
        priceNote:
          "Admission and the scenic-area shuttle are included in the core package; no lift supplement.",
      },
      {
        title: "Chairlift up, toboggan down",
        description:
          "An open chairlift ascent and a toboggan descent for guests comfortable with heights and eligible under the operator's current rules.",
        walking:
          "Wall steps remain. Age, height and other operating restrictions must be checked; a fallback descent is confirmed before booking.",
        priceNote: "Optional supplement. Operation depends on weather, safety and availability.",
      },
    ],
    note: "The enclosed cable car and chairlift/toboggan serve different access points. Tickets are not assumed to be interchangeable; any mixed or one-way route needs separate confirmation. Scenic shuttles, lifts and the Wall are shared with other visitors.",
    inquiryChecklist: [
      "Preferred date, number of guests and children's ages",
      "Beijing hotel address and intended return point",
      "Cable car, walk-up or chairlift-and-toboggan preference",
      "Walking limitations, comfort with heights and any fixed return deadline",
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
      image: privateVehicle,
    },
    {
      title: "A Great Wall walk planned around your group",
      description:
        "The ascent, tower range and turnaround point are adjusted to your group, live conditions and selected mountain transport instead of a fixed fitness test.",
      category: "Culture",
      image: cableCar,
    },
    {
      title: "Transparent mountain transport, only if you want it",
      description:
        "Choose cable car, chairlift or toboggan only after the current operation and your comfort level are checked. The cost is shown before you commit.",
      category: "Family",
      image: chairlift,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Hotel pickup, your chosen Wall route, and return to Beijing",
      destination: "Beijing · Mutianyu Great Wall · Beijing",
      summary:
        "Meet your private vehicle and guide at the confirmed Beijing hotel. Travel to Mutianyu, use the included admission and scenic-area shuttle, then choose the practical ascent, walking section and descent for the day. The return vehicle remains with the group through the agreed service window and brings you back to your Beijing hotel or a confirmed central address.",
      image: watchtower,
      hotel: "No overnight stay required · pickup and return at your Beijing hotel",
      meals: ["Independent lunch time; meal reservation available when requested"],
      transport:
        "Private Beijing hotel pickup, Mutianyu return transfer and scenic-area shuttle; exact service window stated before booking",
      activities: [
        {
          title: "Hotel pickup and the drive to Mutianyu",
          time: "About 1.5–2.5 hours on the road",
          description:
            "Meet your private guide and driver at the confirmed hotel lobby or central address. We set the departure time around your address, ticket arrangements and likely traffic; road times are planning ranges, not guarantees.",
        },
        {
          title: "Admission and scenic-area shuttle",
          time: "Allow for entry checks and queues",
          description:
            "Use the included Mutianyu admission and internal shuttle. Your guide handles the arrival sequence and keeps the group moving through the right entry points.",
        },
        {
          title: "Your chosen ascent and time on the Wall",
          time: "Plan around 2–3 hours for the Wall visit",
          description:
            "Follow your pre-agreed cable-car, walking or chairlift-and-toboggan plan, subject to live operation. Your guide adjusts the tower section and turnaround point to your energy. Lift queues and a longer walk-up can change the available Wall time.",
        },
        {
          title: "Lunch choice and private return",
          time: "Usually 7–9 hours door to door",
          description:
            "Take independent lunch time or a restaurant stop agreed in advance, then return to your confirmed Beijing address. Lunch is paid separately. Peak traffic and queues can extend the day; tell us about trains, flights or evening reservations before booking.",
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
      image: cableCar,
    },
  ],
  included: [
    "Private pickup and return within Beijing's main urban hotel districts; non-central hotels, airports and locations outside the confirmed service area are quoted before booking",
    "Private air-conditioned vehicle with professional driver for the confirmed service window",
    "Private guide for the confirmed Mutianyu visit and return; requested language and availability confirmed before booking",
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
        "Add a round-trip cable-car plan when the operator's current route and your group's preferred Wall section make it the right choice. The price follows the confirmed scenic-area rate for your date.",
      badges: ["Subject to operation"],
      image: cableCar,
    },
    {
      title: "Chairlift up and toboggan down",
      description:
        "A popular option for confident guests who want a playful descent, subject to weather, safety conditions, height or age rules and the operator's live decision.",
      badges: ["Weather dependent"],
      image: panorama,
    },
    {
      title: "One-way mountain transport",
      description:
        "Any one-way or mixed ascent-and-descent route is checked separately. Cable-car and chairlift/toboggan tickets are not assumed to be interchangeable.",
      badges: ["Route dependent"],
      image: panorama,
    },
    {
      title: "Reserved Beijing lunch",
      description:
        "Add a clean, reliable restaurant reservation aligned with the return route and your dietary preferences. The restaurant and price are confirmed before booking rather than treated as a mandatory tourist stop.",
      badges: ["Optional", "Dietary needs checked"],
      image: panorama,
    },
  ],
  transportation: {
    title: "One private vehicle, one confirmed route, no coach-group logistics",
    description:
      "Your service is planned from the actual hotel address and the expected ticket window. Your own vehicle keeps hotel transfers straightforward, with its size and service hours agreed before booking. At the scenic area, the included shuttle and any optional lifts are shared services; road times depend on traffic.",
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
  gallery: mutianyuGallery.slice(1),
  faqLimit: 20,
  faqs: [
    {
      question: "What is included in this private Mutianyu Great Wall tour?",
      answer:
        "The tour includes pickup and return in the confirmed Beijing urban hotel area, your own guide, a separate driver and private air-conditioned vehicle for the agreed service window, Mutianyu admission, the scenic-area shuttle, bottled water and pre-trip coordination. Cable car, chairlift, toboggan, lunch and extra hours are separate unless listed in your written proposal. There are no compulsory shopping stops.",
    },
    {
      question: "How much is a private Mutianyu tour for two people?",
      answer: `${startingPrice} per person is the published starting rate, based on two adults traveling together: ${twoAdultTotal} for two on that basis. It covers the listed guide, vehicle, admission and shuttle service, without mountain transport or lunch. Your dates, pickup address, requested guide language, vehicle and selected extras determine the final written total. Prices for one person, families and larger parties are quoted separately.`,
    },
    {
      question: "Will we have our own English-speaking guide and driver?",
      answer:
        "You have your own guide and a separate driver. Request English-speaking service when you send your date so availability can be confirmed. Your guide accompanies the agreed visit rather than simply dropping you at the entrance. Other guide languages are subject to availability and may affect the quote. The vehicle and guiding are private for your party; the scenic area, shuttle and lifts are shared with other visitors.",
    },
    {
      question: "Does the price include Mutianyu cable-car or toboggan tickets?",
      answer:
        "No. Admission and the scenic-area shuttle are included, but cable car, chairlift and toboggan tickets are optional additions. The shuttle connects parts of the visitor area; it is not a lift onto the Wall. We confirm your preferred ascent and descent, ticket cost and any fallback before booking.",
    },
    {
      question: "Should we choose the cable car or the chairlift and toboggan?",
      answer:
        "Consider the enclosed cable car if reducing the uphill approach is your priority. The open chairlift and toboggan may suit visitors comfortable with heights who meet the operator’s current eligibility rules. These systems serve different access points and their tickets are not assumed to be interchangeable. Tell us your walking needs, children’s ages and preferences so we can propose a route and alternative descent.",
    },
    {
      question: "How long does a Mutianyu day trip from Beijing take?",
      answer:
        "Plan on about 7–9 hours from hotel pickup to return, usually allowing around 2–3 hours for the Wall visit. Each road journey can take roughly 1.5–2.5 hours, depending on your address and traffic. Entry checks, shuttle and lift queues, lunch and a walk-up route can change that balance. These are planning ranges, not a guaranteed return time.",
    },
    {
      question: "What time should we leave Beijing for Mutianyu?",
      answer:
        "We set the pickup time around your hotel, travel date, ticket arrangements and preferred walking route. An earlier departure may help avoid some road traffic or busy arrival periods, but cannot guarantee an empty Wall. Tell us about any evening reservation, train or flight before booking so we can assess the return margin rather than rely on an optimistic timetable.",
    },
    {
      question: "Which Beijing hotels are covered by pickup and return?",
      answer:
        "Pickup and return in Beijing’s main urban hotel districts are included, subject to confirmation of the exact address. Send the hotel name and full address; an airport-area hotel or distant suburb can require a different route and supplement. A different central return address may be possible if agreed in advance. Airport and railway-station transfers are not automatically included.",
    },
    {
      question: "How much walking is involved if we take the cable car?",
      answer:
        "The cable car reduces the uphill approach, but steps, slopes and uneven stone remain on the Wall. There is no single walking distance suitable for every group. Your guide agrees a manageable section and turnaround point around balance, stamina, weather and available time. Walking up and down from the visitor area adds substantially more climbing than using a lift.",
    },
    {
      question: "Is this Mutianyu tour suitable for families with children?",
      answer:
        "It can be, with a route matched to the children’s ages and the adults’ expectations. Share ages, walking tolerance, any child-seat request and interest in the toboggan before booking. Toboggan use depends on the operator’s current restrictions and live conditions; it is not guaranteed. We plan breaks and a manageable turnaround rather than require every family to reach the same tower.",
    },
    {
      question: "Can older travelers visit Mutianyu, and is it wheelchair accessible?",
      answer:
        "Older travelers may enjoy a shorter visit with lift access where appropriate, but suitability depends on individual walking ability and balance. This published itinerary is not step-free and should not be booked as a wheelchair-accessible Wall tour. Tell us about stairs, slopes, assistance and equipment needs before payment so we can assess what is practical. A guide is not a substitute for a porter or medical support.",
    },
    {
      question: "What happens if rain or wind stops the cable car or toboggan?",
      answer:
        "Mountain transport may stop because of weather, safety, maintenance or operator decisions. We review the workable alternatives with you; we do not automatically replace lift access with a strenuous climb. Before booking, check the written proposal for how affected tickets and services are handled and which change or cancellation terms apply. Check those terms before payment, especially if your visit depends on a particular lift or descent.",
    },
    {
      question: "Do you arrange tickets, and do foreign visitors need a passport?",
      answer:
        "Mutianyu admission and the scenic-area shuttle are included. We confirm the booking, identification and entry requirements that apply to your date before departure. Keep your passport available for checks if required in the operating instructions. Do not send passport numbers through an initial public inquiry; any details needed for ticketing are requested through the agreed booking process. Current requirements should be checked against the scenic area’s official visitor information.",
    },
    {
      question: "What is the difference between this private tour and a shuttle-bus trip?",
      answer:
        "This tour includes your own guide and driver, confirmed hotel pickup and return, admission coordination and a walking plan adapted to your party. A transfer-only or shared-bus proposal may include a different pickup point, ticket package or level of guiding, so compare the written inclusions. Our private service does not provide exclusive use of the Wall or guaranteed queue-free entry.",
    },
    {
      question: "Can we visit the Forbidden City or another Great Wall section on the same day?",
      answer:
        "This itinerary gives Mutianyu a focused day and does not include the Forbidden City, Badaling or Jinshanling. Adding a major site changes ticket needs, road time and the time available on the Wall. Ask for a revised proposal rather than assume it fits the same price and service window. Our five-day Beijing journey is a better starting point if you want the palace, neighborhoods and Great Wall planned together.",
    },
    {
      question: "Can this tour start at Beijing Capital or Daxing Airport during a layover?",
      answer:
        "Airport pickup and drop-off are outside the standard hotel-based tour and require a separate feasibility review and quote. Share the airport, flight times, luggage and any immigration or entry constraints. Admission to China and eligibility for a visa exemption are determined by the authorities, not this tour booking. We do not promise that a full Mutianyu visit fits every layover or airport connection.",
    },
    {
      question: "Is lunch included, and can you accommodate dietary requirements?",
      answer:
        "Lunch is paid separately, with no compulsory restaurant stop. You can keep lunch independent or ask us to reserve a restaurant along the confirmed route and itemize it in the proposal. Tell us about allergies and dietary requirements before booking so the restaurant can be checked. A reservation request alone does not confirm an allergen-free kitchen or a particular certification.",
    },
    {
      question: "What do you need to confirm our private Great Wall day?",
      answer:
        "Send your date, number of adults and children with ages, Beijing hotel address, return address and any fixed deadline, preferred guide language, mountain-transport choice and walking needs. We check availability before sending the full party price and service terms. An inquiry does not reserve the date; the written proposal, required payment and supplier arrangements must be confirmed before the booking is accepted.",
    },
  ],
  planningResources: [
    {
      label: "Plan a realistic Mutianyu day from Beijing",
      href: "/journal/mutianyu-private-day-tour-itinerary-from-beijing",
      description:
        "How to balance transfers, the Wall visit, lunch and the return without overloading the day.",
    },
    {
      label: "Mutianyu walking and cable-car guide",
      href: "/journal/mutianyu-great-wall-walking-cable-car",
      description:
        "Compare mountain access and the steps that remain when planning for different walking abilities.",
    },
    {
      label: "Mutianyu private tour or shuttle bus?",
      href: "/journal/mutianyu-private-tour-vs-shuttle-bus",
      description:
        "Compare pickup arrangements, guiding and included services before choosing how to visit.",
    },
    {
      label: "Explore Beijing",
      href: "/destinations/beijing",
      description: "Plan the Great Wall alongside Beijing’s imperial sites and neighborhoods.",
    },
    {
      label: "Official Mutianyu Great Wall visitor information",
      href: "https://www.mutianyugreatwall.com/",
      officialPublisher: "Mutianyu Great Wall scenic area",
      description:
        "Official reference for visitor notices and date-specific admission, shuttle and mountain-transport information. Check operating and eligibility rules for your travel date; these services are distinct from AVIORA’s private guide and road vehicle.",
    },
    {
      label: "UNESCO: The Great Wall",
      href: "https://whc.unesco.org/en/list/438/",
      officialPublisher: "UNESCO World Heritage Centre",
      description:
        "Historical context and World Heritage status of the Great Wall. This listing does not establish ticket availability, lift operation, step-free access or endorsement of this tour.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "5-Day Beijing and Great Wall Private Tour",
        description:
          "Choose four Beijing hotel nights and several private sightseeing days if you need a complete city stay.",
        tags: ["Culture", "Luxury", "Senior-friendly"],
        image: {
          src: "/tours/beijing-unhurried/great-wall-walk.webp",
          alt: "A cable car passing the Mutianyu Great Wall across Beijing's mountain landscape",
          width: 2400,
          height: 1641,
        },
        route: "Beijing",
        duration: "5 days / 4 nights",
        href: "/tours/beijing-great-wall-private-5-day-tour",
      },
      {
        title: "12-Day Private China Tour at an Easier Pace",
        description:
          "Keep Mutianyu within a three-city journey with eleven hotel nights and two independent rest days.",
        tags: ["First-time China", "Senior-friendly", "Luxury"],
        image: {
          src: "/tours/first-china-beautifully-paced/beijing-great-wall-couple.webp",
          alt: "Two travelers beside the Great Wall and wooded hills near Beijing",
          width: 1280,
          height: 1920,
        },
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
    whatsappHref: `https://wa.me/8618027438191?text=${encodeURIComponent("Hello AVIORA, I would like a private-group quote for the Mutianyu Great Wall day tour.\nPreferred date:\nAdults and children (with ages):\nBeijing hotel / pickup address:\nReturn address and any fixed deadline:\nRoute: round-trip cable car / walk up and down / chairlift and toboggan\nWalking limitations or concerns about heights:\nPreferred guide language:")}`,
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "I would like to check a private Mutianyu Great Wall day tour from my Beijing hotel.",
  },
};
