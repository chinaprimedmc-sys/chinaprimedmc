import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

// Product photography will be added only when it depicts this actual city route.
const pendingImage: MediaAsset = {
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "Photography for the private Shanghai day tour is being prepared",
  width: 1920,
  height: 1080,
};

export const privateShanghaiDayTour: Tour = {
  slug: "private-shanghai-day-tour-guide-driver",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-08-21",
  title: "Private Shanghai in One Day, Seamlessly Handled",
  subtitle:
    "A private guide and vehicle connect Yu Garden, the Old City, a Huangpu ferry, the Bund and the former French Concession from your Shanghai hotel, without shopping stops or transport guesswork.",
  duration: "1 Day · Private · About 8 hours",
  route: "Shanghai hotel · Old City · Bund · Former French Concession · Shanghai hotel",
  styles: ["Culture", "Food", "Family", "Photography"],
  hero: {
    eyebrow: "Private Shanghai day tour · guide, driver and Yu Garden admission · no shopping",
    image: pendingImage,
    primary: { label: "Check My Date", href: "#inquiry" },
    secondary: { label: "See What Is Included", href: "#price" },
  },
  seo: {
    title: "Private Shanghai Day Tour with Guide & Driver",
    description:
      "An 8-hour private Shanghai day tour with hotel pickup, English-speaking guide, private vehicle, Yu Garden admission, Huangpu ferry and no shopping stops. From US$672 for four guests.",
    keywords: [
      "private Shanghai day tour",
      "Shanghai private tour with guide and driver",
      "Shanghai one day private tour",
      "Shanghai hotel pickup private tour",
      "Yu Garden Bund French Concession tour",
      "Shanghai private tour no shopping",
      "Shanghai tour for families",
      "Shanghai tour for first time visitors",
    ],
  },
  overview: {
    pitch:
      "Shanghai is easy to underestimate from a map: Yu Garden's lanes, the Bund, the river crossing and the former French Concession are each simple alone, but inefficient when a first-time visitor has to solve tickets, traffic, meeting points and what is actually worth seeing between them. This private day begins at your central Shanghai hotel. Your English-speaking guide, private vehicle and Yu Garden admission are arranged before you leave. You will move from the older, intimate side of the city to the riverfront and then into leafy former-concession streets, using the public Huangpu ferry for the perspective it gives rather than treating it as a transfer problem. There are no compulsory shopping stops.",
    facts: [
      {
        label: "Time",
        value: "About 8 hours door to door",
        helper:
          "A typical hotel pickup is 09:00. Exact timing changes with your hotel, traffic, Yu Garden operating hours and any confirmed upgrade.",
      },
      {
        label: "Included",
        value: "Private vehicle, English-speaking guide, Yu Garden admission and Huangpu ferry",
        helper:
          "Pickup and return are included at hotels in Shanghai's main central districts. Airport, cruise-port and distant locations are priced before booking.",
      },
      {
        label: "You will see",
        value: "Old Shanghai, the Bund, Pudong across the river and the former French Concession",
        helper:
          "The route gives a first-time visitor four distinct views of the city, not only a skyline photograph.",
      },
      {
        label: "Walking",
        value: "Easy to moderate, with flexible pauses",
        helper:
          "Yu Garden and historic lanes have uneven paving, steps and crowds. Tell us about mobility, children or heat concerns before confirmation.",
      },
      {
        label: "Service promise",
        value: "Private, no shopping and clear before the day",
        helper:
          "One final operating message confirms the hotel, pickup time, guide contact, service window and selected upgrades.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Your Shanghai Hotel",
      days: "Before departure",
      title: "Start with a hotel pickup and a route you can picture",
      description:
        "Send your Shanghai hotel, preferred date, group size and any must-see priority. We confirm the pickup window, likely route and practical adjustments before the guide and vehicle arrive.",
      see: "One clear plan for the day, including what is included, where the route begins and how you return.",
      do: "Tell us whether you care most about gardens, food, architecture, skyline views, a gentler pace or time for photographs.",
      feel: "Ready to enjoy Shanghai rather than spend the morning deciding how to navigate it.",
    },
    {
      location: "Yu Garden & the Old City",
      days: "Morning",
      title: "See Shanghai before the towers, in a garden and lanes built to slow you down",
      description:
        "Enter Yu Garden with admission already arranged, then follow your guide through the Old City context around it. This is the intimate, older Shanghai of pavilions, rockwork, bridges, temple roofs, shop signs and food scents, not a generic photo stop.",
      see: "A classical Chinese garden and the dense historic streets that show how the city looked before its modern skyline.",
      do: "Walk at a comfortable pace, hear why the garden was made, identify details you would otherwise pass, and choose a short independent snack stop if desired.",
      feel: "That Shanghai has a human scale and an older story before its famous modern image.",
    },
    {
      location: "The Bund & Huangpu River",
      days: "Midday",
      title: "Cross the river the local way, then understand why the skyline faces both directions",
      description:
        "Stand on the Bund with its historic facades on one side and Pudong's towers on the other. Take the ordinary Huangpu ferry with your guide instead of watching the river only from the pavement. The short crossing makes the old-and-new relationship immediately legible.",
      see: "The Bund's waterfront architecture, the Huangpu River, Lujiazui and Shanghai's best-known modern skyline from ground and water level.",
      do: "Cross by public ferry, pause where the skyline reads best and learn what the river separated, connected and transformed.",
      feel: "That the contrast people call 'old and new Shanghai' finally makes sense as one city.",
    },
    {
      location: "Former French Concession",
      days: "Afternoon",
      title: "Finish among plane trees, villas, cafes and everyday Shanghai life",
      description:
        "The final chapter moves to a quieter, leafy part of Shanghai. Your guide selects a walkable stretch around the former French Concession according to crowd levels, weather and your interests, with time to notice residential lanes, local shops and changing architectural details.",
      see: "Tree-lined streets, lane-house neighborhoods and a lived-in counterpoint to the Bund and Pudong.",
      do: "Walk, pause for coffee or a small local treat if you wish, and return to your hotel with the city arranged into a coherent story.",
      feel: "That you have encountered more than Shanghai's postcard skyline in one well-paced day.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Private Day Tour Standard",
    title: "A clear Shanghai day, with the logistics already settled.",
    description:
      "A private city day is valuable when it removes the small uncertainties that consume a first visit: hotel pickup, tickets, traffic, the right sequence and who is responsible if timing shifts.",
    items: [
      {
        label: "01 · Hotel-first pickup",
        value: "Your actual central Shanghai hotel is checked before confirmation",
        helper:
          "We state any airport, cruise-port, distant-location or late-night supplement before payment.",
      },
      {
        label: "02 · Ticket clarity",
        value: "Yu Garden admission and the Huangpu public ferry are included",
        helper:
          "Other admissions or reserved experiences are listed separately before you agree to them.",
      },
      {
        label: "03 · A route with a reason",
        value: "Old City, riverfront and former-concession chapters are connected deliberately",
        helper:
          "The order may shift around traffic, opening hours, weather and the group, but the promised core experiences remain clear.",
      },
      {
        label: "04 · A guide for the whole day",
        value: "One private English-speaking guide stays responsible for the route",
        helper:
          "The guide explains the city and manages the practical transitions; this is not a driver-only transfer service.",
      },
      {
        label: "05 · No shopping",
        value: "No factory, tea shop or sales detour is built into the day",
        helper:
          "Independent browsing, food and coffee stops happen only when they serve your interests and timing.",
      },
      {
        label: "06 · Transparent upgrades",
        value: "Only add the experiences you actually want",
        helper:
          "Each published upgrade states whether it includes tickets, added private service time or both.",
      },
    ],
    note: "Yu Garden, the Huangpu ferry, Shanghai Tower, evening cruises and all venue access follow live operating, reservation, weather, capacity and safety rules. The route is planned honestly around confirmed conditions; it cannot guarantee empty historic lanes, no queues, a specific ferry sailing or a venue that closes unexpectedly.",
  },
  highlights: [
    {
      title: "Old Shanghai before the skyline",
      description:
        "Enter Yu Garden with admission arranged, then understand the Old City's streets, food and human scale before the day reaches the famous riverfront.",
      category: "Culture",
      image: pendingImage,
    },
    {
      title: "A river crossing that makes the city legible",
      description:
        "Take the public Huangpu ferry with your guide to see the Bund and Pudong as two sides of the same city, not as disconnected attractions.",
      category: "Photography",
      image: pendingImage,
    },
    {
      title: "A real afternoon in the former French Concession",
      description:
        "Finish in leafy lane-house streets where Shanghai's residential rhythm, cafes and architecture offer a quieter perspective than a landmark checklist.",
      category: "Food",
      image: pendingImage,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Old Shanghai, riverfront contrast and a leafy final chapter",
      destination: "Shanghai",
      summary:
        "Meet your private English-speaking guide and vehicle at the confirmed Shanghai hotel. Begin in Yu Garden and the Old City, then move to the Bund and cross the Huangpu by public ferry for the river perspective. After independent lunch time or a pre-booked dining upgrade, continue through a walkable former French Concession neighborhood before a private return to the hotel. The exact sequence is adjusted around weather, traffic, opening hours and the group, while keeping these core Shanghai chapters intact.",
      image: pendingImage,
      hotel: "No overnight stay required · pickup and return at your Shanghai hotel",
      meals: ["Independent lunch time; curated Shanghainese lunch available as an upgrade"],
      transport:
        "Private central-Shanghai hotel pickup and return, private vehicle during the confirmed service window, plus one Huangpu public-ferry crossing",
      activities: [
        {
          title: "A confirmed hotel pickup",
          description:
            "Meet in your hotel lobby or another agreed central Shanghai address. The final operating message names the pickup time, guide contact and return arrangement.",
        },
        {
          title: "Yu Garden and the Old City",
          description:
            "Use the included Yu Garden admission, then explore the surrounding historic context with a guide who explains the garden, streets and details rather than simply leading a walk-through.",
        },
        {
          title: "The Bund and Huangpu ferry",
          description:
            "View the waterfront from the Bund, then take the included public ferry with your guide for the short, revealing cross-river perspective of Pudong and the historic city side.",
        },
        {
          title: "Former French Concession at your pace",
          description:
            "Walk a selected leafy neighborhood with flexibility for coffee, a small snack, photographs or a shorter route when weather, energy or interests require it.",
        },
        {
          title: "A private hotel return",
          description:
            "Return directly to the confirmed central hotel address without shared-coach logistics or compulsory shopping stops.",
        },
      ],
      guideNote:
        "Tell us before booking about children, mobility limitations, a desire for a longer photography stop, a dietary need, an airport or cruise-port connection, or an evening upgrade. These details affect the responsible route and service window.",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
    },
  ],
  accommodations: [
    {
      name: "Your Shanghai hotel or confirmed central address",
      destination: "Shanghai",
      description:
        "This is a private day tour, so no overnight stay is included. Service begins and ends at a central Shanghai hotel or another confirmed central location. Airport, cruise-port and non-standard pickup requirements are priced clearly before booking.",
      roomStyle: "No overnight stay required",
      highlights: ["Hotel-first planning", "Confirmed pickup", "Private return", "No hotel change"],
      image: pendingImage,
    },
  ],
  included: [
    "Private pickup and return at a Shanghai hotel in the main central districts; airport, cruise-port, out-of-area and non-standard locations are quoted before booking",
    "Private air-conditioned vehicle with professional driver for the confirmed service window",
    "Private English-speaking guide for the full confirmed sightseeing day",
    "Yu Garden admission and one ordinary Huangpu public-ferry crossing",
    "Pre-trip review of your hotel address, date, group details, walking preferences and route priorities",
    "Bottled water in the vehicle and one final operating message with pickup, contacts and the confirmed plan",
    "No compulsory shopping stops",
  ],
  excluded: [
    "Lunch, drinks, personal purchases, gratuities, travel insurance and items not expressly listed as included",
    "Shanghai Tower admission, Huangpu night-cruise tickets, shows, cooking experiences and other upgrades unless selected in the written confirmation",
    "Airport, railway-station or cruise-port pickup or drop-off, out-of-area hotels, late-night return or additional vehicle and guide hours unless quoted",
    "Guaranteed entry, sailing, venue operation or a specific guide, vehicle or route affected by weather, maintenance, capacity, traffic, reservation rules or operator decisions",
    "Wheelchair, porter, medical care or accessibility equipment unless separately requested and confirmed",
  ],
  optionalExperiences: [
    {
      title: "Shanghai Tower, 118th-floor observation deck",
      description:
        "Add advance-arranged Shanghai Tower observation-deck admission from US$35 per guest. The price includes the ticket arrangement and itinerary coordination; it does not turn the day into an unlimited-hours extension.",
      badges: ["From US$35 pp", "Advance arrangement"],
      image: pendingImage,
    },
    {
      title: "Curated Shanghainese lunch",
      description:
        "Add a pre-arranged local lunch from US$38 per guest, with an approachable fixed menu and dietary review before booking. Drinks and dishes beyond the agreed menu are separate.",
      badges: ["From US$38 pp", "Dietary needs checked"],
      image: pendingImage,
    },
    {
      title: "Huangpu River night-cruise extension",
      description:
        "Extend the private day into the evening from US$328 per group of up to four. This includes standard cruise tickets, private vehicle, guide assistance and up to 2.5 additional service hours; it is not only a boat-ticket markup.",
      badges: ["From US$328 per group", "Up to 4 guests", "Evening extension"],
      image: pendingImage,
    },
    {
      title: "Hands-on Shanghai snack-making experience",
      description:
        "Add a small-group or private-arrangement workshop from US$88 per guest to learn a Shanghai-style snack, subject to the host's schedule and your final route. The exact format is confirmed before payment.",
      badges: ["From US$88 pp", "Host availability"],
      image: pendingImage,
    },
    {
      title: "Additional private touring time",
      description:
        "Add time only when your date and guide, driver and vehicle availability support it: US$58 per private group for each additional hour. This is useful for an evening plan, a slower pace or a confirmed late departure.",
      badges: ["US$58 per group/hour", "Subject to availability"],
      image: pendingImage,
    },
  ],
  transportation: {
    title: "One private vehicle for the city, plus one short public ferry with context",
    description:
      "A private vehicle keeps the city sequence workable from your actual hotel, while the Huangpu public ferry is included because it is the most direct way to understand Shanghai's waterfront relationship. Neither removes the reality of city traffic, public-site queues or changing ferry operations.",
    items: [
      {
        label: "Pickup",
        value: "Central Shanghai hotel lobby or confirmed central address",
        helper:
          "Main central hotel districts are included; airports, cruise ports and distant locations are checked before you book.",
      },
      {
        label: "Vehicle",
        value: "Private air-conditioned car or MPV with professional driver",
        helper:
          "Vehicle size is matched to the party and luggage, then named in the final operating plan.",
      },
      {
        label: "River crossing",
        value: "Included ordinary Huangpu public ferry",
        helper:
          "The guide manages the crossing; sailing times, queues and operation remain subject to the public operator.",
      },
      {
        label: "Return",
        value: "Direct return to the confirmed Shanghai address",
        helper: "Service hours and any approved address change are stated before the day begins.",
      },
    ],
  },
  routeMap: {
    title: "Four views of Shanghai, connected as one city day",
    description:
      "The route starts at your hotel, then moves through the Old City, the Bund and a public river crossing before ending in the former French Concession. It can change order for practical reasons, but the day is designed to make each Shanghai chapter understandable in relation to the next.",
    stops: [
      {
        name: "Shanghai hotel pickup",
        days: "Start",
        description: "A confirmed central hotel or address pickup.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        name: "Yu Garden & Old City",
        days: "Morning",
        description: "Included garden admission and historic Shanghai context.",
        coordinates: { latitude: 31.2273, longitude: 121.4923 },
      },
      {
        name: "The Bund & Huangpu ferry",
        days: "Midday",
        description: "Waterfront architecture and an included cross-river perspective.",
        coordinates: { latitude: 31.2404, longitude: 121.4906 },
      },
      {
        name: "Former French Concession",
        days: "Afternoon",
        description: "Leafy lanes, local life and architectural contrast.",
        coordinates: { latitude: 31.2149, longitude: 121.4578 },
      },
      {
        name: "Shanghai hotel return",
        days: "Finish",
        description: "Private return to the confirmed central address.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
    ],
  },
  gallery: [],
  faqs: [
    {
      question: "What does the US$672 starting price include?",
      answer:
        "It is an indicative private-group starting price for four guests, equivalent to US$168 per guest. It includes pickup and return within Shanghai's main central hotel districts, a private air-conditioned vehicle and driver during the confirmed service window, a private English-speaking guide, Yu Garden admission, one ordinary Huangpu public-ferry crossing, bottled water and no compulsory shopping stops. Lunch, Shanghai Tower, evening cruises and other upgrades are not included.",
    },
    {
      question: "What is the published price for a smaller or larger group?",
      answer:
        "Outside major public holidays and unusual pickup requirements, the indicative private-group prices are: one guest from US$468; two guests from US$558 total; three guests from US$628 total; four guests from US$672 total; five guests from US$795 total; and six guests from US$930 total. Six guests may require a larger vehicle, which is checked before confirmation. Optional experiences remain separate.",
    },
    {
      question: "Is this a private tour or a shared group tour?",
      answer:
        "It is private for your booking party. You have your own vehicle, driver and English-speaking guide during the confirmed service window. Yu Garden, the Bund, the ferry and public streets remain shared public places, so other visitors will be present.",
    },
    {
      question: "Can you collect us from the airport, cruise port or railway station?",
      answer:
        "Yes, where the timing and route are workable, but these are not priced the same as a central-hotel day because flight, train or ship timing, luggage, traffic and terminal or port access can change the service hours. Hongqiao airport or railway station is quoted from US$68 per group each way, Pudong airport from US$128 per group each way and Wusongkou cruise port from US$138 per group each way, subject to the actual date and timing.",
    },
    {
      question: "Is lunch included?",
      answer:
        "No. The base price stays clear and does not force every guest into a tourist lunch. You can keep independent lunch time, ask your guide for a practical suggestion, or add the pre-arranged curated Shanghainese lunch from US$38 per guest. Drinks are separate unless the written menu says otherwise.",
    },
    {
      question: "Why does the Huangpu night-cruise upgrade cost US$328 for up to four guests?",
      answer:
        "The price is for an evening service extension, not just public cruise tickets. It includes standard cruise tickets for up to four guests, private vehicle, guide assistance and up to 2.5 additional service hours. The exact sailing, operator price and timing are confirmed before booking; premium cabin, dinner or private-charter products are not included unless quoted.",
    },
    {
      question: "Can this tour work for children or older travelers?",
      answer:
        "Often yes. The vehicle and private guide allow pauses and a shorter walking route, but Yu Garden and historic lanes still have uneven paving, steps, crowds and standing time. Share ages, mobility needs, heat sensitivity, strollers or wheelchairs before booking so we can state what can and cannot be responsibly adapted.",
    },
    {
      question: "What happens if weather, crowds or venue access changes?",
      answer:
        "Your guide adjusts the sequence where practical and explains the available alternative. Yu Garden, ferries, Shanghai Tower and cruises can change operation because of weather, capacity, safety, maintenance, reservation rules or public decisions. We do not promise empty lanes, a specific ferry sailing or a venue that has not been confirmed for your date.",
    },
    {
      question: "How quickly can you confirm my date?",
      answer:
        "Send your date, group size and Shanghai hotel through the form or WhatsApp. During China business hours, we aim to reply within one hour with an availability check, a practical pickup plan and any relevant supplement. A booking is confirmed only after the written proposal, required payment and supplier arrangements are confirmed in writing.",
    },
  ],
  related: {
    tours: [
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A 12-day premium private China journey that gives Shanghai multiple unhurried chapters after Beijing and Xi'an.",
        tags: ["Private", "First-time China", "Easy pace"],
        image: pendingImage,
        route: "Beijing · Xi'an · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
      },
      {
        title: "Shanghai & Zhangjiajie: City and Mountain Contrast",
        description:
          "A longer private route linking Shanghai's city life with major sandstone mountain scenery.",
        tags: ["Private", "Shanghai", "Nature"],
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
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Shanghai%20Day%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20check%20a%20private%20Shanghai%20day%20tour.%0A%0ADate%3A%0ANumber%20of%20guests%20and%20ages%20if%20children%3A%0AShanghai%20hotel%20or%20pickup%20address%3A%0AAny%20airport%2C%20cruise-port%20or%20evening%20connection%3A%0AOptional%20experiences%20of%20interest%3A%0AAny%20mobility%2C%20dietary%20or%20other%20considerations%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20check%20a%20private%20Shanghai%20day%20tour.%20My%20date%2C%20group%20size%20and%20Shanghai%20hotel%20are%3A",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage: "I would like to check a private Shanghai day tour from my Shanghai hotel.",
  },
};
