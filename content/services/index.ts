/**
 * 四个服务落地页（定制 / 固定行程 / 一日游 / 导游加司机）的单一内容源。
 * 输入：无。输出：每页的文案、事实、FAQ 与内链；行程列表只存 slug，数据仍从 tours catalog 读取。
 * 不负责：版式（features/service-pages）与结构化数据（lib/seo/service-page-schema.ts）。
 * 关键规则：不写没有依据的价格或承诺；价格与包含项一律引用 catalog 或写明"以书面确认为准"。
 */

import {
  dayExperienceSlugs,
  signatureJourneySlugs,
  tailorMadeExampleSlugs,
} from "@/content/tours/tiers";

export type ServicePageSlug =
  | "tailor-made-china-tours"
  | "fixed-itinerary-china-tours"
  | "private-china-day-tours"
  | "private-guide-and-driver-china";

export type ServiceLink = { label: string; href: string; note?: string };

export type ServicePageContent = {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbName: string;
  /** 上级面包屑（不含首页和本页）。 */
  breadcrumbParents?: Array<{ name: string; path: string }>;
  hero: {
    eyebrow: string;
    title: string;
    emphasis: string;
    lede: string;
    image?: string;
    alt?: string;
    primaryLabel: string;
    secondary: { label: string; href: string };
  };
  facts: Array<{ value: string; label: string }>;
  answer: { kicker: string; title: string; paragraphs: string[] };
  places?: Array<{
    id: string;
    kicker: string;
    title: string;
    intro: string;
    items: Array<{ title: string; body: string; href?: string; linkLabel?: string }>;
  }>;
  fit?: {
    goodTitle: string;
    good: string[];
    notTitle: string;
    not: Array<{ text: string; href: string; linkLabel: string }>;
  };
  scope?: { title: string; included: string[]; notIncluded: string[] };
  steps?: { title: string; items: Array<{ title: string; body: string }> };
  listing?: { id: string; kicker: string; title: string; intro: string; note?: string };
  faqs: Array<{ question: string; answer: string }>;
  related: ServiceLink[];
  enquiry: { kicker: string; title: string; body: string; whatsappHref: string };
  service?: { name: string; serviceType: string; areaServed: string[] };
};

const whatsapp = "https://wa.me/8618027438191";

/** 三个层级的行程列表由 content/tours/tiers.ts 派生；重新分类只需改那里。 */
export const fixedItinerarySlugs = signatureJourneySlugs;
export const tailorMadeStartingPointSlugs = tailorMadeExampleSlugs;
export const dayTourSlugs = dayExperienceSlugs;

const tailorMade: ServicePageContent = {
  slug: "tailor-made-china-tours",
  path: "/tailor-made-china-tours",
  metaTitle: "Tailor-Made China Tours: Private Trips Designed Around You",
  metaDescription:
    "Private tailor-made China tours from a licensed operator with offices in Beijing, Shanghai and Xi'an. Share your interests and pace; we design the route.",
  breadcrumbName: "Tailor-made China tours",
  hero: {
    eyebrow: "Tailor-made China tours",
    title: "Your China,",
    emphasis: "designed around you.",
    lede: "Tell us what you love. We design the route, hotels, guide and driver for your party alone, and you adjust it until it feels right. Nothing is booked until you confirm in writing.",
    image: "/tours/first-china-beautifully-paced/beijing-great-wall-couple.webp",
    alt: "A couple on the Great Wall near Beijing on a private journey",
    primaryLabel: "Design my trip",
    secondary: { label: "See Signature Journeys", href: "/fixed-itinerary-china-tours" },
  },
  facts: [
    { value: "Private", label: "Planned for your party alone" },
    { value: "Since 2018", label: "A licensed inbound operator" },
    { value: "In writing", label: "Hotels, price and inclusions before you pay" },
    { value: "Within a day", label: "A China-based specialist replies" },
  ],
  answer: {
    kicker: "What it is",
    title: "A private trip designed from a blank page.",
    paragraphs: [
      "A tailor-made China tour is a private trip designed from a blank page for your party. You share your dates, who is traveling, your interests and the pace you like. Our China-based team proposes the route, hotels, private guide, driver and transport, and you change it as often as you need before confirming.",
      "It differs from a Signature Journey in one way: it does not start from a published route. If you want one city in depth, a food-led trip, a slower pace for older parents, or halal dining and prayer-aware timing, we build that in from the start rather than adding it later.",
    ],
  },
  fit: {
    goodTitle: "Tailor-made is right when",
    good: [
      "You are not sure how many cities or days to plan for",
      "You are traveling with children, older parents or anyone who needs a gentler pace",
      "You want halal dining, prayer-aware timing or other needs planned in from the start",
      "You have a specific interest: food, pandas, photography, wellness or the Silk Road",
      "You want one team to handle hotels, trains, guides and tickets",
    ],
    notTitle: "Another option may suit you better when",
    not: [
      {
        text: "You want to start from a proven, published route.",
        href: "/fixed-itinerary-china-tours",
        linkLabel: "Browse Signature Journeys",
      },
      {
        text: "You only need a guide or driver for a day or two.",
        href: "/private-guide-and-driver-china",
        linkLabel: "See the guide and driver service",
      },
    ],
  },
  scope: {
    title: "What we arrange for you",
    included: [
      "A route and daily pace designed for your party",
      "Hotels and room categories chosen for location and service",
      "A private multilingual guide on guided days",
      "A private vehicle and driver for touring and transfers",
      "Domestic trains and flights, and admission tickets, booked and confirmed",
      "Local experiences such as cooking, tea and crafts, where you want them",
      "A China-based team on WhatsApp throughout your trip",
    ],
    notIncluded: [
      "International flights",
      "Gratuities, which are listed as not included on our published journeys",
      "Personal expenses, and any item your written proposal lists as not included",
    ],
  },
  steps: {
    title: "How it works",
    items: [
      {
        title: "Tell us about your trip",
        body: "Your dates, who is traveling, the pace you like and anything we should plan around. A few lines on WhatsApp is enough.",
      },
      {
        title: "Receive a private proposal",
        body: "A route built for your party, with hotels, transport and price laid out. Never a seat on a fixed departure.",
      },
      {
        title: "Adjust until it is right",
        body: "Change the days, the hotels or the pace as often as you need. Nothing is booked until you confirm in writing.",
      },
      {
        title: "Travel with one local team",
        body: "Your guide, your driver and the China team behind them are briefed on your plan and within reach throughout.",
      },
    ],
  },
  listing: {
    id: "starting-points",
    kicker: "Starting points",
    title: "Start from a journey you like, then make it yours.",
    intro:
      "Each of these is a published journey that guests often use as a starting point. Change the days, the hotels or the pace and we rework the whole route around you.",
    note: "Every journey is priced individually. Your written proposal reflects your actual dates, party size, hotels and inclusions.",
  },
  faqs: [
    {
      question: "What is the difference between a tailor-made journey and a Signature Journey?",
      answer:
        "A tailor-made journey is designed from a blank page around you and can change at every stage. A Signature Journey starts from a defined, published route that we then adjust to your dates, party and pace. Both are private to your party. Choose tailor-made when you want a different set of cities, and a Signature Journey when you want a proven plan to start from.",
    },
    {
      question: "How long does planning take?",
      answer:
        "A China-based specialist normally replies within a day with a first idea of the route, and you can refine it as often as you like. Many private journeys are booked four to eight months ahead, and earlier for peak periods such as Golden Week. Our guide to booking a private China tour in advance explains the timing.",
    },
    {
      question: "What does a tailor-made China tour cost?",
      answer:
        "The price depends on your dates, party size, hotels, route and pace. Each published journey is priced individually, and your written proposal states exactly what it covers. It reflects your actual choices, and international flights are not included. Our guide to private China tour costs explains what drives the price.",
    },
    {
      question: "Is a tailor-made tour a group tour?",
      answer:
        "No. Your guide, vehicle and daily plan are arranged for your party alone. Flights, trains and ticketed sites such as museums remain shared public services, but your guide meets you and handles the logistics around them.",
    },
    {
      question: "Can I change plans after I have booked?",
      answer:
        "Changes before departure are handled under our booking terms, and your proposal states any stricter supplier conditions before you pay. During the trip, your guide and our China team can adjust timing and sights where operations allow.",
    },
    {
      question: "Can you plan around halal food, children or a slower pace?",
      answer:
        "Yes. Halal dining, prayer-aware timing, family-ready rooms, fewer hotel changes and a gentler pace are planned into the route from the start, not added afterwards. Our guides to Muslim-friendly, family and slower-paced China travel explain how.",
    },
  ],
  related: [
    {
      label: "Signature journeys",
      href: "/fixed-itinerary-china-tours",
      note: "Proven private routes, adjusted to your party",
    },
    {
      label: "Private day tours",
      href: "/private-china-day-tours",
      note: "One day with your own guide and driver",
    },
    {
      label: "Guide and driver",
      href: "/private-guide-and-driver-china",
      note: "Local help for trips you have booked yourself",
    },
    {
      label: "How to plan a private China trip",
      href: "/journal/how-to-plan-private-china-trip",
    },
    {
      label: "How far in advance to book",
      href: "/journal/how-far-in-advance-book-private-china-tour",
    },
    { label: "What a private China tour costs", href: "/journal/private-china-tour-cost-2026" },
  ],
  enquiry: {
    kicker: "Start planning",
    title: "Tell us when you would like to go.",
    body: "Share a few details about your trip. A China-based specialist replies, normally within a day, with a first idea of the route. No payment, no obligation.",
    whatsappHref: `${whatsapp}?text=${encodeURIComponent("Hello AVIORA, I would like help planning a tailor-made private journey in China.")}`,
  },
  service: {
    name: "Tailor-made private China tours",
    serviceType: "Tailor-made private tour planning and operation",
    areaServed: ["China"],
  },
};

const fixedItineraries: ServicePageContent = {
  slug: "fixed-itinerary-china-tours",
  path: "/fixed-itinerary-china-tours",
  metaTitle: "Signature Journeys: Private China Routes, Adjusted to You",
  metaDescription:
    "Private multi-day China journeys with a proven route, from 5 to 12 days. Choose a starting point and we adjust dates, pace and hotels to your party.",
  breadcrumbName: "Signature journeys",
  hero: {
    eyebrow: "Signature journeys",
    title: "A proven route,",
    emphasis: "shaped around you.",
    lede: "Start from a private route we have already refined. Tell us your dates, who is travelling and what matters to you, and we adjust it before anything is booked.",
    image: "/tours/first-china-beautifully-paced/shanghai-huangpu-sunset.webp",
    alt: "The Shanghai skyline glowing at sunset above the Huangpu River",
    primaryLabel: "See the journeys",
    secondary: {
      label: "Want something fully custom? Design my trip",
      href: "/tailor-made-china-tours",
    },
  },
  facts: [
    { value: "Private", label: "Your guide, driver and vehicle" },
    { value: "Defined", label: "A clear route, days and pace to start from" },
    { value: "Adjustable", label: "Dates, party size, interests and hotels" },
    { value: "In writing", label: "Hotels, price and inclusions before you pay" },
  ],
  answer: {
    kicker: "What it is",
    title: "A defined private route, adjusted to your party.",
    paragraphs: [
      "A Signature Journey is a defined private China route: the cities, days and pace have been worked out and published, so you can see exactly what you would be doing. It is a starting point, not a group departure. You choose your dates and party size, tell us what to change, and we confirm the hotels, availability and final price in writing.",
      "Because the route is already designed, there is nothing to plan from scratch. You can compare journeys side by side and see what each day contains. If you want to change the hotels, the pace or a day, we do that with you. If you want a different set of cities altogether, a tailor-made journey is the better fit.",
    ],
  },
  fit: {
    goodTitle: "A Signature Journey is right when",
    good: [
      "You want a clear plan to react to, rather than a blank page",
      "It is your first trip to China and you want a route that is already worked out",
      "You have a set number of days and want to see exactly how they are used",
      "You are comparing options before you commit",
    ],
    notTitle: "Another option may suit you better when",
    not: [
      {
        text: "You want a different mix of cities or a route built from a blank page.",
        href: "/tailor-made-china-tours",
        linkLabel: "Design a tailor-made tour",
      },
      {
        text: "You only need one day in a single city.",
        href: "/private-china-day-tours",
        linkLabel: "See private day tours",
      },
    ],
  },
  scope: {
    title: "What a Signature Journey includes",
    included: [
      "The published route, days and cities as your starting point",
      "Hotels to the standard named on each journey page",
      "Private guiding and a private vehicle on scheduled touring days",
      "Listed entrance tickets and confirmed domestic transport",
      "A China-based team on WhatsApp throughout your trip",
    ],
    notIncluded: [
      "International flights",
      "Gratuities, which are listed as not included on our published journeys",
      "Anything a route page or your written confirmation lists as not included",
    ],
  },
  steps: {
    title: "How booking works",
    items: [
      {
        title: "Choose a journey",
        body: "Compare the published journeys by length, cities and pace, and open any of them to see the day-by-day plan.",
      },
      {
        title: "Tell us your dates and party",
        body: "Share when you want to travel, who is coming and anything you would change. A few lines on WhatsApp or the form below is enough.",
      },
      {
        title: "Receive a written proposal",
        body: "We confirm availability, the hotels, what is included and the final price in writing, with your adjustments. Nothing is booked before you agree.",
      },
      {
        title: "Travel with your guide and driver",
        body: "Your guide and driver run the route as agreed, with our China team within reach throughout.",
      },
    ],
  },
  listing: {
    id: "routes",
    kicker: "The journeys",
    title: "Choose a journey.",
    intro:
      "Each journey is private to your party. Open one to see the day-by-day plan, the hotels and what is included, then tell us what you would adjust.",
    note: "Every journey is priced individually. Smaller parties usually pay more per person because the guide and vehicle are shared by fewer people, and your written proposal states the final price.",
  },
  faqs: [
    {
      question: "Is a Signature Journey a group tour?",
      answer:
        "No. A Signature Journey is a private tour. The route is a proven starting point, and your guide, vehicle and daily schedule are arranged for your party alone. Flights, trains and ticketed sites remain shared public services, and your guide handles the logistics around them.",
    },
    {
      question: "Can I choose my own start date?",
      answer:
        "Yes. These are private journeys, so you choose your dates. We confirm hotel and service availability in writing before you pay. Peak periods such as Golden Week need earlier booking.",
    },
    {
      question: "Can I change the hotels, pace or days?",
      answer:
        "Yes. Hotels, pace and free time can be adjusted to your party before you confirm. If you want to add or swap cities, we rework the route with you as a tailor-made journey.",
    },
    {
      question: "What does the price include?",
      answer:
        "As a rule each journey covers the hotels named on the route page, private guiding and vehicles on scheduled touring days, listed entrance tickets and confirmed domestic transport. International flights are not included. Your written confirmation reflects your actual dates and party size.",
    },
    {
      question: "How is this different from a tailor-made journey?",
      answer:
        "A Signature Journey starts from a defined route and adjusts it. A tailor-made journey starts from a blank page and is designed entirely around you. Both are private to your party.",
    },
    {
      question: "What if I need to cancel?",
      answer:
        "Our standard cancellation schedule is published on the booking terms page. Charges rise from 10% when you cancel more than 60 days before departure to 100% within 14 days. Your confirmation states any stricter supplier conditions before you pay.",
    },
  ],
  related: [
    {
      label: "Tailor-made tours",
      href: "/tailor-made-china-tours",
      note: "Designed around you and open to change",
    },
    {
      label: "Private day tours",
      href: "/private-china-day-tours",
      note: "One day with your own guide and driver",
    },
    {
      label: "Guide and driver",
      href: "/private-guide-and-driver-china",
      note: "Local help for trips you have booked yourself",
    },
    {
      label: "Best places to visit in China for the first time",
      href: "/journal/best-places-to-visit-china-first-time",
    },
    { label: "What a private China tour costs", href: "/journal/private-china-tour-cost-2026" },
    {
      label: "A private tour with no forced shopping",
      href: "/journal/china-tour-no-forced-shopping",
    },
  ],
  enquiry: {
    kicker: "Request a quote",
    title: "Tell us which journey and when.",
    body: "Share the journey you like, your dates and anything you would change. A China-based specialist replies, normally within a day, to confirm availability. No payment, no obligation.",
    whatsappHref: `${whatsapp}?text=${encodeURIComponent("Hello AVIORA, I would like a quote for a Signature Journey. The journey is __ and our dates are __ for __ travelers.")}`,
  },
};

const dayTours: ServicePageContent = {
  slug: "private-china-day-tours",
  path: "/private-china-day-tours",
  metaTitle: "Day Experiences: Private China Day Tours with Your Own Guide",
  metaDescription:
    "Private day tours in Beijing, Xi'an, Shanghai, Chengdu and Guilin. Your own multilingual guide, private vehicle and tickets arranged for one day.",
  breadcrumbName: "Day experiences",
  hero: {
    eyebrow: "Day experiences",
    title: "One day,",
    emphasis: "handled properly.",
    lede: "A private guide takes care of the tickets, the timing and the language, so you simply enjoy the Great Wall, the Terracotta Army, the pandas or the Li River.",
    image: "/tours/mutianyu-private-day-tour/01-mutianyu-great-wall-autumn-panorama.webp",
    alt: "The Mutianyu section of the Great Wall in autumn",
    primaryLabel: "See the day tours",
    secondary: {
      label: "Add this to a longer journey",
      href: "/fixed-itinerary-china-tours",
    },
  },
  facts: [
    { value: "5 cities", label: "Beijing, Xi'an, Shanghai, Chengdu, Guilin" },
    { value: "Private", label: "Your guide, driver and vehicle" },
    { value: "7 to 11 hours", label: "Depending on the tour" },
    { value: "Tickets arranged", label: "Admission handled for you" },
  ],
  answer: {
    kicker: "What it is",
    title: "One day with your own guide and driver.",
    paragraphs: [
      "A private China day tour is a single day with your own multilingual guide and a private vehicle. Your guide and driver collect you from your hotel, tickets and timing are arranged in advance, and the day is paced for your party alone. Each tour below is published with its length, route and inclusions.",
      "Day tours suit travelers who are already in a city, have one day to fill, or want to add a famous sight to a trip they have planned themselves. If you want several days or cities connected, a tailor-made tour is the better fit. If you only need a guide and driver without a fixed sightseeing plan, see our guide and driver service.",
    ],
  },
  places: [
    {
      id: "by-sight",
      kicker: "Choose by sight",
      title: "Which day is yours?",
      intro: "Pick the sight you most want to see. Each has its own tour page with the full plan.",
      items: [
        {
          title: "Beijing: the Mutianyu Great Wall",
          body: "From your Beijing hotel to the right gate, tickets, walking route, mountain transport and return, with one guide and vehicle.",
          href: "/tours/private-mutianyu-great-wall-day-tour",
          linkLabel: "See the Great Wall day",
        },
        {
          title: "Xi'an: the Terracotta Warriors",
          body: "From your hotel to passport-linked admission, the excavation pits and expert interpretation, with a private return.",
          href: "/tours/private-xian-terracotta-warriors-day-tour",
          linkLabel: "See the Terracotta Army day",
        },
        {
          title: "Shanghai: the Old City to the Bund",
          body: "Yu Garden, the Old City, a Huangpu ferry, the Bund and the former French Concession, connected by a private guide and vehicle.",
          href: "/tours/private-shanghai-day-tour-guide-driver",
          linkLabel: "See the Shanghai day",
        },
        {
          title: "Chengdu: the giant pandas",
          body: "A sensible early start, admission arranged and a private guide who adapts the panda-base route to your pace.",
          href: "/tours/private-chengdu-panda-day-tour-early-morning",
          linkLabel: "See the panda day",
        },
        {
          title: "Guilin: the Li River",
          body: "A private day on the Li River from central Guilin, with the cruise, the karst scenery and a Yangshuo finish you can choose.",
          href: "/tours/guilin-yangshuo-li-river-cruise-private-day-tour",
          linkLabel: "See the Li River day",
        },
      ],
    },
  ],
  fit: {
    goodTitle: "A private day tour is right when",
    good: [
      "You are already in the city and have one day to fill",
      "You want to add a famous sight to a trip you planned yourself",
      "You want tickets, timing and the language handled for you",
      "You would rather not share a vehicle or follow a group schedule",
    ],
    notTitle: "Another option may suit you better when",
    not: [
      {
        text: "You want several days or cities connected into one trip.",
        href: "/tailor-made-china-tours",
        linkLabel: "Design a tailor-made tour",
      },
      {
        text: "You want a guide and driver without a fixed sightseeing plan.",
        href: "/private-guide-and-driver-china",
        linkLabel: "See the guide and driver service",
      },
    ],
  },
  scope: {
    title: "What a day tour includes",
    included: [
      "A private multilingual guide",
      "A private vehicle and driver, from and back to your hotel",
      "Admission tickets arranged where the tour requires them",
      "Timing, route and transfers coordinated by our China team",
    ],
    notIncluded: [
      "Meals and drinks, unless the tour page lists them",
      "Optional upgrades listed on each tour page",
      "Gratuities, which are listed as not included on our published journeys",
    ],
  },
  steps: {
    title: "How booking works",
    items: [
      {
        title: "Choose your day",
        body: "Open the tour you like to see the route, the length and what is included.",
      },
      {
        title: "Tell us your date, hotel and party",
        body: "Share the date, where you are staying and how many of you are traveling.",
      },
      {
        title: "Receive written confirmation",
        body: "We confirm the timing, what is included and the final price in writing before you pay.",
      },
      {
        title: "Meet your guide at your hotel",
        body: "Your guide and driver collect you at the agreed time and look after the day.",
      },
    ],
  },
  listing: {
    id: "tours",
    kicker: "The day tours",
    title: "Five private days, ready to book.",
    intro: "Every day tour is private to your party and published with its length and inclusions.",
    note: "Each tour states its pricing unit and basis. Your written confirmation states the final price for your date and party size.",
  },
  faqs: [
    {
      question: "Are these day tours private?",
      answer:
        "Yes. Your guide, driver and vehicle are arranged for your party alone, and the day is paced around you. Ticketed sites remain shared public venues, and your guide handles the logistics around them.",
    },
    {
      question: "How long is each day tour?",
      answer:
        "Between about 7 and 11 hours depending on the tour. The Great Wall and panda days usually run 7 to 9 hours, the Xi'an and Shanghai days about 8 hours, and the Li River day usually 9 to 11 hours.",
    },
    {
      question: "Are tickets included?",
      answer:
        "Tickets that the tour requires are arranged for you. Terracotta Army admission is linked to your passport, so we need your passport details in advance. Our guide to Terracotta Army tickets for foreign visitors explains how it works.",
    },
    {
      question: "Can I combine two days or add another city?",
      answer:
        "Yes, but that becomes a multi-day plan. Tell us the days and cities you have and we design it as a tailor-made tour, with the same private guide and driver approach.",
    },
    {
      question: "What happens if the weather is bad?",
      answer:
        "Your guide and our China team adjust timing and sights where operations allow. Our guide to weather and disruption backup planning explains what can and cannot be changed.",
    },
    {
      question: "Which day tour should I choose?",
      answer:
        "Pick the sight you most want to see. If you are unsure how it fits into a longer trip, our destination guides for Beijing, Xi'an, Shanghai and Chengdu help, or we can plan the whole trip as a tailor-made tour.",
    },
  ],
  related: [
    {
      label: "Tailor-made tours",
      href: "/tailor-made-china-tours",
      note: "Several days or cities, designed around you",
    },
    {
      label: "Signature journeys",
      href: "/fixed-itinerary-china-tours",
      note: "Proven private routes, adjusted to your party",
    },
    {
      label: "Guide and driver",
      href: "/private-guide-and-driver-china",
      note: "A local guide and private vehicle by the day",
    },
    { label: "Beijing destination guide", href: "/destinations/beijing" },
    { label: "Xi'an destination guide", href: "/destinations/xian" },
    {
      label: "Terracotta Army tickets for foreign visitors",
      href: "/journal/terracotta-army-tickets-foreign-visitors",
    },
  ],
  enquiry: {
    kicker: "Plan a day",
    title: "Tell us which day and when.",
    body: "Share the tour you like, your date and where you are staying. A China-based specialist replies, normally within a day. No payment, no obligation.",
    whatsappHref: `${whatsapp}?text=${encodeURIComponent("Hello AVIORA, I would like to book a private day tour. The city is __, the date is __ and there are __ guests.")}`,
  },
};

const guideAndDriver: ServicePageContent = {
  slug: "private-guide-and-driver-china",
  path: "/private-guide-and-driver-china",
  metaTitle: "Private Guide and Driver in China: Book Just the Local Help",
  metaDescription:
    "Hire a private guide and driver anywhere in China, in English, French, German, Spanish, Russian, Italian, Japanese, Chinese or Thai.",
  breadcrumbName: "Private guide and driver in China",
  hero: {
    eyebrow: "Guide and driver",
    title: "Booked it yourself?",
    emphasis: "Add a local.",
    lede: "Already have your flights and hotels? Bring in a guide who speaks your language and a driver who knows the road, by the half day, the day or for several days.",
    image: "/home/standard/private-local-guide.png",
    alt: "An AVIORA private local guide speaking with international guests",
    primaryLabel: "Ask for a quote",
    secondary: {
      label: "Need hotels and trains too? Design my trip",
      href: "/tailor-made-china-tours",
    },
  },
  facts: [
    { value: "Anywhere in China", label: "Not only our office cities" },
    { value: "Half or full day", label: "Or several days" },
    { value: "9 languages", label: "A guide matched to your language and interests" },
    { value: "Written quote", label: "Confirmed before you pay" },
  ],
  answer: {
    kicker: "What it is",
    title: "Local help for the trip you have already planned.",
    paragraphs: [
      "Our private guide and driver service is for travelers who have arranged their own flights, hotels and trains and want local help on the ground. We match a guide who speaks your language (English, French, German, Spanish, Russian, Italian, Japanese, Chinese or Thai) to your interests and send a suitable private vehicle with a driver, for a half day, a full day or several days. You receive a written quote before you pay.",
      "You decide the plan, or we suggest one. Your guide handles the language, the directions and the logistics at each sight, and your driver handles the road, so you are not negotiating taxis or following a map while jet-lagged.",
    ],
  },
  places: [
    {
      id: "services",
      kicker: "Choose your service",
      title: "By the half day, the day or longer.",
      intro:
        "Tell us what you need and we quote it. Each option can include a guide, a driver, or both.",
      items: [
        {
          title: "Half day, about 4 hours",
          body: "A single sight or neighborhood with a guide and driver. The shortest service we offer.",
        },
        {
          title: "Full day, about 8 hours",
          body: "A full sightseeing day with pickup and return at your hotel, paced around your party.",
        },
        {
          title: "Several days",
          body: "Consecutive days in one city, or a route between cities, priced by the day.",
        },
        {
          title: "Airport and station transfers",
          body: "A private vehicle and driver to or from the airport or train station, with a guide if you want help on arrival.",
        },
      ],
    },
    {
      id: "cities",
      kicker: "Where we provide it",
      title: "Anywhere in China.",
      intro:
        "Our offices are in Beijing, Shanghai and Xi'an, and we arrange guides and drivers throughout China, not only in those cities. Tell us where you will be and we quote it.",
      items: [
        {
          title: "Beijing and the north",
          body: "The Forbidden City, the Great Wall, the hutongs and the north of China.",
          href: "/destinations/beijing",
          linkLabel: "Beijing guide",
        },
        {
          title: "Shanghai and the east",
          body: "The Bund, the former French Concession, the Old City and the cities around the Yangtze delta.",
          href: "/destinations/shanghai",
          linkLabel: "Shanghai guide",
        },
        {
          title: "Xi'an and the northwest",
          body: "The Terracotta Army, the city wall, the Muslim Quarter and the Silk Road.",
          href: "/destinations/xian",
          linkLabel: "Xi'an guide",
        },
        {
          title: "Chengdu and the southwest",
          body: "The giant pandas, teahouses, the Sichuan table and the mountains beyond.",
          href: "/destinations/chengdu",
          linkLabel: "Chengdu guide",
        },
        {
          title: "Guangzhou and the south",
          body: "Cantonese food, the Pearl River Delta and the landscapes of the south.",
        },
        {
          title: "Anywhere else",
          body: "Yunnan, Guilin, Hangzhou, the far west or a city not listed here. Ask us for your destination.",
        },
      ],
    },
  ],
  fit: {
    goodTitle: "This service is right when",
    good: [
      "You have already booked your own flights and hotels",
      "You want a guide for the language, the stories and the sight logistics",
      "You want a private vehicle instead of taxis and ride-hailing",
      "You want to pay by the day or half day, with a written quote first",
    ],
    notTitle: "Another option may suit you better when",
    not: [
      {
        text: "You also want us to book hotels, trains and tickets for the whole trip.",
        href: "/tailor-made-china-tours",
        linkLabel: "Design a tailor-made tour",
      },
      {
        text: "You want one famous sight with everything arranged.",
        href: "/private-china-day-tours",
        linkLabel: "See private day tours",
      },
    ],
  },
  scope: {
    title: "What the service includes",
    included: [
      "A local guide who speaks your language and is matched to your interests: English, French, German, Spanish, Russian, Italian, Japanese, Chinese or Thai",
      "A private vehicle with a driver",
      "Vehicle costs such as fuel, tolls and parking",
      "Pickup and return at your hotel or station at agreed times",
      "A China-based team reachable on WhatsApp",
    ],
    notIncluded: [
      "Admission tickets, unless we pre-book them for you and list them in your quote",
      "Meals and drinks for you and your party",
      "Hotels, flights and trains, which our tailor-made service arranges",
      "Gratuities",
    ],
  },
  steps: {
    title: "How to book",
    items: [
      {
        title: "Tell us what you need",
        body: "The city or route, your date, how many passengers and how much luggage, your interests, your preferred language and the hours you want.",
      },
      {
        title: "Receive a written quote",
        body: "The guide, vehicle type, service hours and price, laid out before you pay. There is no payment to receive a quote.",
      },
      {
        title: "Confirm",
        body: "Once you agree, we confirm your guide and driver and share the details.",
      },
      {
        title: "Meet at the agreed place",
        body: "Your guide and driver meet you at your hotel, the airport or the station, at the time agreed.",
      },
    ],
  },
  faqs: [
    {
      question: "Can I hire only a driver or only a guide?",
      answer:
        "Yes. Tell us which you need and we quote it separately. A driver on their own suits transfers and self-guided days, and a guide suits days where you want the language and the stories.",
    },
    {
      question: "How is it priced?",
      answer:
        "By the half day or full day, depending on the city, vehicle type, service hours, number of passengers and luggage. We confirm a written quote before you pay, and there is no payment to receive a quote.",
    },
    {
      question: "Which cities do you cover?",
      answer:
        "We arrange guides and drivers throughout China, not only in the cities where our offices are. Our offices are in Beijing, Shanghai and Xi'an. Tell us your destination and dates and we confirm what we can arrange in your written quote.",
    },
    {
      question: "Are tickets and meals included?",
      answer:
        "Not unless your quote lists them. We can pre-book admission tickets for you and add them to the quote. Meals and drinks for you are paid separately.",
    },
    {
      question: "Which languages do your guides speak?",
      answer:
        "Our guides work in English, French, German, Spanish, Russian, Italian, Japanese, Chinese and Thai. Tell us your language when you ask for a quote, and we confirm the guide for your date in writing before you pay.",
    },
    {
      question: "How early should I ask?",
      answer:
        "As soon as your dates are fixed. Peak periods such as Golden Week need earlier requests, and a longer lead time gives us more choice of guide.",
    },
    {
      question: "Who provides the service?",
      answer:
        "Guides and drivers are arranged through Youyouhui (Guangzhou) International Travel Service Co., Ltd., a registered China company licensed for inbound tourism, operating as AVIORA. We have offices in Beijing, Shanghai and Xi'an.",
    },
  ],
  related: [
    {
      label: "Tailor-made tours",
      href: "/tailor-made-china-tours",
      note: "We also book hotels, trains and tickets",
    },
    {
      label: "Private day tours",
      href: "/private-china-day-tours",
      note: "One famous sight with everything arranged",
    },
    {
      label: "Signature journeys",
      href: "/fixed-itinerary-china-tours",
      note: "Proven private routes, adjusted to your party",
    },
    {
      label: "Private China tour versus self-guided",
      href: "/journal/private-china-tour-vs-self-guided",
    },
    { label: "Best apps for China travel", href: "/journal/best-apps-for-china-travel-2026" },
    { label: "Company, offices and registration", href: "/company" },
  ],
  enquiry: {
    kicker: "Ask for a quote",
    title: "Tell us the city, the date and the hours.",
    body: "Share where you will be, when, and how many of you are traveling. A China-based specialist replies, normally within a day, with a written quote. No payment, no obligation.",
    whatsappHref: `${whatsapp}?text=${encodeURIComponent("Hello AVIORA, I need a private guide and driver in __ on __. There are __ guests and __ pieces of luggage. Our main interests are __ and our preferred language is __.")}`,
  },
  service: {
    name: "Private guide and driver service in China",
    serviceType: "Private multilingual guide and driver service",
    areaServed: ["China"],
  },
};

export const servicePages: Record<ServicePageSlug, ServicePageContent> = {
  "tailor-made-china-tours": tailorMade,
  "fixed-itinerary-china-tours": fixedItineraries,
  "private-china-day-tours": dayTours,
  "private-guide-and-driver-china": guideAndDriver,
};
