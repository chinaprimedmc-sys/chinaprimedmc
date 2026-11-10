import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

const shanghaiImage = (file: string, alt: string, width: number, height: number): MediaAsset => ({
  src: `/tours/private-shanghai-day-tour/${file}`,
  alt,
  width,
  height,
});

const lujiazui = shanghaiImage(
  "01-shanghai-lujiazui-at-dusk.webp",
  "Lujiazui skyline at dusk, with the Oriental Pearl Tower and Shanghai Tower",
  4649,
  6000,
);
const yuGarden = shanghaiImage(
  "02-yu-garden-traditional-architecture.webp",
  "Traditional Chinese architecture illuminated at Yu Garden in Shanghai",
  3072,
  4096,
);
const bundClockTower = shanghaiImage(
  "03-shanghai-bund-clock-tower-at-night.webp",
  "The historic Bund clock tower and waterfront buildings at night",
  3024,
  4032,
);
const bundWaterfront = shanghaiImage(
  "04-shanghai-bund-historic-waterfront-at-night.webp",
  "Historic Bund architecture glowing beside Shanghai's evening streets",
  2268,
  3024,
);
const privateVehicle: MediaAsset = {
  src: "/tours/mutianyu-private-day-tour/05-private-luxury-vehicle.webp",
  alt: "Spacious premium vehicle interior for a private Shanghai day tour",
  width: 1440,
  height: 1920,
};
const shanghaiGallery = [lujiazui, yuGarden, bundClockTower, bundWaterfront, privateVehicle];

export const privateShanghaiDayTour: Tour = {
  slug: "private-shanghai-day-tour-guide-driver",
  visualStatus: "ready",
  publishedAt: "2026-08-21",
  updatedAt: "2026-11-10",
  title: "Private Shanghai Day Tour with Guide and Driver",
  subtitle:
    "See Yu Garden, the Bund and the former French Concession with your own guide and driver. Central Shanghai hotel pickup, garden admission and one public Huangpu ferry crossing are included; lunch, tower tickets and evening cruises are optional.",
  duration: "1 Day · Private · About 8 hours",
  durationIso: "PT8H",
  route: "Shanghai hotel · Old City · Bund · Former French Concession · Shanghai hotel",
  styles: ["Culture", "Food", "Family", "Photography"],
  hero: {
    eyebrow: "Private Shanghai day tour · guide, driver and Yu Garden admission · no shopping",
    image: lujiazui,
    primary: { label: "Check My Date", href: "#enquiry" },
    secondary: { label: "See What Is Included", href: "#included" },
  },
  seo: {
    title: "Private Shanghai Day Tour with Guide and Driver",
    description:
      "See Yu Garden, the Bund and the former French Concession on a private Shanghai day tour with hotel pickup, your own guide and driver, and a public ferry crossing.",
    preserveCopy: true,
    keywords: [
      "private Shanghai day tour",
      "Shanghai private tour with guide and driver",
      "Shanghai one day tour with hotel pickup",
      "Yu Garden Bund French Concession tour",
      "Shanghai private tour English speaking guide",
    ],
  },
  overview: {
    pitch:
      "Start with the garden and Old City, compare the Bund with Pudong across the Huangpu River, then slow down on the tree-lined streets of the former French Concession. Your guide connects the history and daily life behind these places while your driver handles the transfers. The route leaves room for lunch and pauses; adding a tower visit or an evening cruise means choosing what to replace or extending the service window.",
    answer:
      "This private Shanghai day tour is an approximately eight-hour city sightseeing tour for one booking party, with a private guide, a separate driver and central-hotel pickup and return. It connects Yu Garden (Yuyuan Garden), the Old City, the Bund, one public Huangpu River ferry crossing and the former French Concession. Yu Garden admission and the ferry fare are included. Lunch, Shanghai Tower and an evening sightseeing cruise are separate; airport and cruise-port pickups require a different written quote.",
    practicalities: [
      {
        label: "Duration",
        value:
          "About 8 hours from central-hotel pickup to return; the service window is confirmed in writing.",
      },
      {
        label: "Private service",
        value:
          "Your own guide and a separate driver with an air-conditioned vehicle; public attractions and the ferry are shared.",
      },
      {
        label: "Pickup area",
        value:
          "Central Shanghai hotels. Pudong (PVG), Hongqiao (SHA), railway stations and Wusongkou cruise-port transfers are quoted separately.",
      },
      {
        label: "Guide language",
        value:
          "Request an English-speaking guide or another available language; date-specific availability is confirmed before booking.",
      },
      {
        label: "Included tickets",
        value:
          "Yu Garden interior admission and one ordinary Huangpu public-ferry crossing, subject to operation.",
      },
      {
        label: "Optional experiences",
        value:
          "Lunch, Shanghai Tower observation-deck tickets and an evening sightseeing cruise are separate unless listed in your written quote.",
      },
      {
        label: "Walking and access",
        value:
          "Garden paths, steps, uneven paving and ferry boarding remain part of the visit; share mobility needs before confirmation.",
      },
      {
        label: "Pricing and accommodation",
        value: "One written total for your private party. No overnight accommodation is included.",
      },
    ],
    facts: [
      {
        label: "Suitable for",
        value: "First-time Shanghai visitors who want a guided city day from their hotel",
      },
      {
        label: "Pacing",
        value: "Easy to moderate walking, with garden steps and public-ferry boarding",
      },
      {
        label: "Time",
        value: "About 8 hours door to door",
        helper:
          "A typical hotel pickup is 09:00. Exact timing changes with your hotel, traffic, Yu Garden operating hours and any confirmed upgrade.",
      },
      {
        label: "Included",
        value: "Private vehicle, guide, Yu Garden admission and public Huangpu ferry",
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
        "Enter the ticketed interior of Yu Garden (also called Yuyuan Garden) with admission arranged, then explore the surrounding Old City and Yuyuan Bazaar with your guide. This is the intimate, older Shanghai of pavilions, rockwork, bridges, shop signs and food scents, not a generic photo stop.",
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
        value: "One private guide in the confirmed language stays responsible for the route",
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
      image: yuGarden,
    },
    {
      title: "A river crossing that makes the city legible",
      description:
        "Take the public Huangpu ferry with your guide to see the Bund and Pudong as two sides of the same city, not as disconnected attractions.",
      category: "Photography",
      image: bundWaterfront,
    },
    {
      title: "A real afternoon in the former French Concession",
      description:
        "Finish in leafy lane-house streets where Shanghai's residential rhythm, cafes and architecture offer a quieter perspective than a landmark checklist.",
      category: "Food",
      image: bundClockTower,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Old Shanghai, riverfront contrast and a leafy final chapter",
      destination: "Shanghai",
      summary:
        "Meet your private guide and vehicle at the confirmed Shanghai hotel. Begin in Yu Garden and the Old City, then move to the Bund and cross the Huangpu by public ferry for the river perspective. After independent lunch time or a pre-booked dining upgrade, continue through a walkable former French Concession neighborhood before a private return to the hotel. The exact sequence is adjusted around weather, traffic, opening hours and the group, with any unavailable core stop and proposed replacement explained before you agree.",
      image: lujiazui,
      hotel: "No overnight stay required · pickup and return at your Shanghai hotel",
      meals: ["Independent lunch time; curated Shanghainese lunch available as an upgrade"],
      transport:
        "Private central-Shanghai hotel pickup and return, private vehicle during the confirmed service window, plus one Huangpu public-ferry crossing",
      activities: [
        {
          title: "Central Shanghai hotel pickup",
          time: "Around 09:00 · confirmed for your hotel",
          description:
            "Meet in your hotel lobby or another agreed central Shanghai address. The final operating message names the pickup time, guide contact and return arrangement.",
        },
        {
          title: "Yu Garden (Yuyuan Garden) and the Old City",
          time: "Morning · allow around 1.5–2 hours",
          description:
            "Enter the classical garden with the included admission, then explore a selected part of the surrounding Old City and Yuyuan Bazaar. Garden entry is distinct from a walk through the shopping streets outside. Opening and reservation conditions are checked for your date.",
        },
        {
          title: "The Bund and one Huangpu public-ferry crossing",
          time: "Late morning to early afternoon · allow around 1.5–2 hours including transfers",
          description:
            "Walk a section of the Bund to compare its historic west-bank buildings with the Pudong skyline. Your guide accompanies one ordinary public-ferry crossing when service permits. The driver coordinates the onward pickup on the arrival bank; a second crossing or sightseeing cruise is not implied.",
        },
        {
          title: "Lunch break",
          time: "Around midday · allow around 1 hour",
          description:
            "Keep lunch independent or request a pre-arranged Shanghainese meal. Food, drinks and any paid tasting are separate unless listed in your quote. Share allergies or dietary requirements before booking.",
        },
        {
          title: "Former French Concession at your pace",
          time: "Afternoon · allow around 1–1.5 hours",
          description:
            "Explore a selected stretch of tree-lined streets and lane-house architecture in the former French Concession. Coffee and snacks are optional personal purchases. This is a public neighborhood walk, not guaranteed entry to residential lanes or private homes.",
        },
        {
          title: "Private hotel return",
          time: "Around 17:00 · traffic permitting",
          description:
            "Return to the agreed central hotel or address within the confirmed service window. The timing is illustrative; tell us about any train, flight, ship or evening reservation so we can assess a safe route and return margin before booking.",
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
      image: privateVehicle,
    },
  ],
  included: [
    "Private pickup and return at a Shanghai hotel in the main central districts; airport, cruise-port, out-of-area and non-standard locations are quoted before booking",
    "Private air-conditioned vehicle with professional driver for the confirmed service window",
    "Private guide for the confirmed sightseeing day; English or another requested language subject to date-specific written confirmation",
    "Yu Garden interior admission and one ordinary Huangpu public-ferry crossing (shared public services; subject to operation)",
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
        "Add advance-arranged Shanghai Tower observation-deck admission. The written quote states the ticket and timing. To fit it within about eight hours, shorten or replace a neighborhood stop, or separately confirm additional guide and vehicle hours. Skyline visibility depends on the weather.",
      badges: ["Advance arrangement"],
      image: lujiazui,
    },
    {
      title: "Curated Shanghainese lunch",
      description:
        "Add a pre-arranged local lunch, with an approachable fixed menu and dietary review before booking. Drinks and dishes beyond the agreed menu are separate.",
      badges: ["Dietary needs checked"],
      image: bundClockTower,
    },
    {
      title: "Huangpu River night-cruise extension",
      description:
        "Extend the private day into the evening. Request a separate quote stating the sailing, standard shared-boat tickets, guide assistance, private return transfer and any additional service hours. A private boat charter is a different request.",
      badges: ["Separately quoted", "Evening extension"],
      image: bundWaterfront,
    },
    {
      title: "Hands-on Shanghai snack-making experience",
      description:
        "Add a small-group or private-arrangement workshop to learn a Shanghai-style snack, subject to the host's schedule and your final route. The exact format is confirmed before payment.",
      badges: ["Host availability"],
      image: yuGarden,
    },
    {
      title: "Additional private touring time",
      description:
        "Add time only when your date and guide, driver and vehicle availability support it, charged by the hour. This is useful for an evening plan, a slower pace or a confirmed late departure.",
      badges: ["Subject to availability"],
      image: privateVehicle,
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
  gallery: shanghaiGallery.slice(1),
  faqLimit: 17,
  faqs: [
    {
      question: "What can I see in Shanghai in one day on this private tour?",
      answer:
        "The core route covers Yu Garden and the surrounding Old City, the Bund, one ordinary Huangpu public-ferry crossing and a selected walk in the former French Concession. Plan about eight hours from central-hotel pickup to return, including transfers and a lunch break. The exact order follows opening conditions, traffic and your pace; any unavailable stop and replacement are explained.",
    },
    {
      question: "Does the Shanghai day tour include hotel pickup and a private driver?",
      answer:
        "Yes. The core package includes pickup and return at a confirmed central Shanghai hotel, a private air-conditioned vehicle with a professional driver, and a separate private guide during the agreed service window. Send your full hotel address before booking. Airport, station, cruise-port and out-of-area transfers require a separate quote.",
    },
    {
      question: "Can I book an English-speaking private guide in Shanghai?",
      answer:
        "Request an English-speaking guide when you inquire. Your written quote confirms the guide language and date-specific availability. Other languages can be requested subject to availability. This package includes both a guide and a separate driver; guide-only arrangements have a different scope and quote.",
    },
    {
      question: "Is Yu Garden admission included, or do we only visit Yuyuan Bazaar?",
      answer:
        "Admission to the ticketed interior of Yu Garden, also called Yuyuan Garden, is included. The surrounding Yuyuan Bazaar and Old City lanes are a separate public shopping area. Nearby temple admission, food and purchases are not automatically included. We check garden opening and ticket arrangements for your date; if access is unavailable, a replacement is explained before confirmation.",
    },
    {
      question: "Is the Huangpu River ferry a private sightseeing cruise?",
      answer:
        "No. The included river experience is one ordinary public-ferry crossing with your guide, shared with other passengers. It is a short transport crossing, not a narrated cruise, private charter or evening skyline cruise. The boarding point and onward vehicle pickup are coordinated for the operating route. Ferry service, queues and boarding conditions can change.",
    },
    {
      question: "Is this a private Shanghai tour or a small-group departure?",
      answer:
        "The guide, vehicle and driver are private to your booking party. You do not join a scheduled group of other tour guests. Yu Garden, the Bund, public streets and the public ferry are shared with other visitors; private touring does not provide exclusive venue access or automatic priority entry.",
    },
    {
      question: "How much does a private Shanghai day tour cost for two people or a family?",
      answer:
        "Request one total for your actual private party. The written quote states your date, adult and child numbers, vehicle, guide language, pickup and return addresses, service hours and any chosen extras. A two-person quote and a family quote may require different vehicle or ticket arrangements. No published starting price is currently verified for this tour; the total is confirmed before payment.",
    },
    {
      question: "Can this be a Shanghai shore excursion from Wusongkou cruise port?",
      answer:
        "Potentially, with a separately planned and quoted port pickup and return. Wusongkou cruise port is not a central-hotel pickup point. Send the ship name, date, port or terminal, earliest permitted disembarkation and required all-aboard time. The sightseeing route is reduced if necessary. Return margins and port access must be reviewed; a return-to-ship guarantee is not included.",
    },
    {
      question: "Can I take a Shanghai layover tour from Pudong or Hongqiao airport?",
      answer:
        "A separately quoted layover tour may be possible after the actual flight, airport, terminal, arrival process, luggage and onward check-in deadline are reviewed. The standard city day does not include Pudong (PVG) or Hongqiao (SHA) airport transfers. Scheduled layover length is not the same as usable sightseeing time. Confirm your eligibility to enter China using official immigration guidance; booking a tour does not grant entry.",
    },
    {
      question: "Can we add Shanghai Tower and still finish in about eight hours?",
      answer:
        "Shanghai Tower observation-deck admission is optional. To keep the same service window, we may shorten or replace part of the neighborhood walk; otherwise additional guide, vehicle and driver hours need a separate quote. Tickets, opening conditions and visibility are checked for the chosen date. The tower is not automatically included with a Pudong skyline view.",
    },
    {
      question: "Can we add a Huangpu River night cruise?",
      answer:
        "Yes, request an evening extension when you inquire. Your quote must state the cruise ticket type, sailing, extra guide and vehicle hours, and return arrangement. The standard day finishes around late afternoon and does not include an evening cruise. A standard sightseeing cruise is shared with other passengers; private charter, premium seating and dinner are separate requests.",
    },
    {
      question: "Is lunch included, and are there compulsory shopping stops?",
      answer:
        "Lunch is separate unless a specific arranged meal appears in your written quote. You can take independent lunch time or request a restaurant plan with dietary requirements reviewed in advance. There are no compulsory factory, tea or sales stops. Walking through Yuyuan Bazaar does not create an obligation to shop; personal purchases, snacks and drinks are separate.",
    },
    {
      question: "How much walking is involved for children or older travelers?",
      answer:
        "Expect walking and standing at Yu Garden, the Bund and the former French Concession, with possible steps, uneven paving, crowds and ferry boarding. Private transfers and shorter walks can help, but this is not a guaranteed step-free tour. Share child ages, stroller or wheelchair use, stairs and standing tolerance before booking; the route and ferry suitability are reviewed individually.",
    },
    {
      question: "What happens if Yu Garden is closed, the ferry stops or it rains?",
      answer:
        "We check the date-specific plan and explain any unavailable stop before confirmation where known. If conditions change during the day, your guide discusses a revised sequence or alternative with you. An alternative paid admission, different transfer or extended service time is confirmed before an additional charge. Applicable change and cancellation terms are set out in your written booking terms; we do not promise a specific ferry sailing or venue operation.",
    },
    {
      question: "How do I check availability and confirm the Shanghai tour?",
      answer:
        "Send your preferred date, party details, pickup and return addresses, guide language, main interests and any fixed departure deadline. We check guide, vehicle and ticket arrangements before sending a written proposal. An inquiry does not hold the date. Booking becomes binding only after the agreed terms, required payment and written booking and supplier confirmation.",
    },
  ],
  planningResources: [
    {
      label: "Shanghai destination guide",
      href: "/destinations/shanghai",
      description: "Choose the city neighborhoods and experiences that matter most to you.",
    },
    {
      label: "Private guide and driver services in China",
      href: "/private-guide-and-driver-china",
      description:
        "Compare a planned sightseeing day with a guide-and-driver service built around your own route.",
    },
    {
      label: "Shanghai official visitor information",
      href: "https://english.shanghai.gov.cn/en-TravelinShanghai/index.html",
      description:
        "Use the municipal visitor portal for official travel information; date-specific venue and transport conditions still need confirmation.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A 12-day premium private China journey that gives Shanghai multiple unhurried chapters after Beijing and Xi'an.",
        tags: ["Private", "First-time China", "Easy pace"],
        image: lujiazui,
        route: "Beijing · Xi'an · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
      },
      {
        title: "Shanghai & Zhangjiajie: City and Mountain Contrast",
        description:
          "A longer private route linking Shanghai's city life with major sandstone mountain scenery.",
        tags: ["Private", "Shanghai", "Nature"],
        image: lujiazui,
        route: "Shanghai · Zhangjiajie",
        duration: "8 days / 7 nights",
        href: "/tours/shanghai-zhangjiajie-floating-peaks",
      },
    ],
    destinations: [],
  },
  inquiryChecklist: [
    "Preferred date, number of adults and children's ages",
    "Hotel or pickup address, return point and any fixed departure deadline",
    "Preferred guide language and main sightseeing interests",
    "Walking, ferry boarding, dietary and luggage requirements",
    "Optional lunch, Shanghai Tower or evening cruise; flight or ship details for terminal pickups",
  ],
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Shanghai%20Day%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20check%20a%20private%20Shanghai%20day%20tour.%0A%0ADate%3A%0ANumber%20of%20guests%20and%20ages%20if%20children%3A%0AShanghai%20hotel%20or%20pickup%20address%3A%0AAny%20airport%2C%20cruise-port%20or%20evening%20connection%3A%0AOptional%20experiences%20of%20interest%3A%0AAny%20mobility%2C%20dietary%20or%20other%20considerations%3A%0A",
    whatsappHref: `https://wa.me/8618027438191?text=${encodeURIComponent("Hello AVIORA, I would like a private-group quote for the Shanghai day tour.\nPreferred date:\nAdults and children (with ages):\nHotel / pickup address:\nReturn address and fixed departure deadline:\nPreferred guide language:\nPriorities: Yu Garden / Bund / former French Concession\nOptional: Shanghai Tower / lunch / evening cruise\nWalking, ferry boarding, dietary or luggage needs:\nIf airport or cruise port: flight / ship / terminal and arrival / departure details:")}`,
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage: "I would like to check a private Shanghai day tour from my Shanghai hotel.",
  },
};
