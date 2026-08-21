import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

// Route-specific photography will be added after rights and subject accuracy are confirmed.
const pendingImage: MediaAsset = {
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "Photography for the private Chengdu panda day tour is being prepared",
  width: 1920,
  height: 1080,
};

export const privateChengduPandaDayTour: Tour = {
  slug: "private-chengdu-panda-day-tour-early-morning",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-08-21",
  title: "Private Chengdu Panda Day Tour, Early Morning & Seamlessly Handled",
  subtitle:
    "Start from your Chengdu hotel at a sensible early hour, enter with admission arranged and follow a private guide who adapts the panda-base route around live openings, crowds, weather and animal activity before a slower Chengdu afternoon.",
  duration: "1 Day · Private · Usually 7–9 hours",
  route: "Chengdu hotel · Chengdu Panda Base · People's Park · Chengdu hotel",
  styles: ["Family", "Nature", "Culture", "Photography"],
  hero: {
    eyebrow: "Private Chengdu panda tour · early start · guide, driver and admission · no shopping",
    image: pendingImage,
    primary: { label: "Check My Date", href: "#inquiry" },
    secondary: { label: "See What Is Included", href: "#price" },
  },
  seo: {
    title: "Private Chengdu Panda Day Tour with Guide & Driver",
    description:
      "A private early-morning Chengdu panda day tour with hotel pickup, English-speaking guide, private vehicle, Panda Base admission, People's Park and no shopping. From US$598 for four guests.",
    keywords: [
      "private Chengdu panda tour",
      "Chengdu Panda Base private day tour",
      "Chengdu panda tour with guide and driver",
      "early morning Chengdu panda tour",
      "Chengdu panda tour hotel pickup",
      "private Chengdu day tour",
      "Chengdu panda family tour",
      "Chengdu panda tour no shopping",
    ],
  },
  overview: {
    pitch:
      "A panda day is shaped as much by timing as by the ticket. Giant pandas choose their own rhythm, public areas can become crowded and the base may change which enclosures or nurseries are open. This private tour begins early from your Chengdu hotel, with admission, vehicle and English-speaking guide arranged in advance. Your guide checks the practical conditions and chooses a sensible route through the public base rather than promising a fixed animal performance. After the morning visit, return to central Chengdu for an unhurried People's Park and tea-culture chapter. There are no compulsory shopping stops, panda-souvenir factories or claims of private animal access.",
    facts: [
      {
        label: "Time",
        value: "Usually 7–9 hours door to door",
        helper:
          "Pickup is commonly around 07:00–07:30, then adjusted for your hotel, season, ticket window, current base hours and selected afternoon plan.",
      },
      {
        label: "Included",
        value: "Private vehicle, English-speaking guide and Chengdu Panda Base admission",
        helper:
          "Pickup and return are included at hotels in Chengdu's main urban districts. Airports, distant hotels and non-standard locations are quoted first.",
      },
      {
        label: "Panda planning",
        value: "Earlier timing and a route adapted to live public conditions",
        helper:
          "Earlier visits can improve the chance of seeing more activity, but no ethical tour can guarantee that a specific panda, cub or behavior will be visible.",
      },
      {
        label: "Walking",
        value: "Moderate, with slopes, queues and optional internal transport",
        helper:
          "The base is large. Share stroller, wheelchair, mobility, heat or standing concerns before booking so the route can be assessed honestly.",
      },
      {
        label: "Animal-welfare boundary",
        value: "No holding, feeding, keeper access or forced interaction promised",
        helper:
          "This is a respectful public observation and interpretation experience. Animal care and base rules always come before the itinerary.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Your Chengdu Hotel",
      days: "Early morning",
      title: "Start before the day becomes hotter, busier and less predictable",
      description:
        "Send your hotel, date, group details and any child or mobility needs. We confirm the pickup, ticket basis, guide contact and current public-base plan before the vehicle arrives.",
      see: "A clear operating message showing when to meet, what is included and which conditions may change the route.",
      do: "Bring your passport, comfortable shoes and honest expectations about live animals rather than a staged performance.",
      feel: "That the most important logistical decision—the start—has already been made sensibly.",
    },
    {
      location: "Chengdu Panda Base",
      days: "Morning activity window",
      title: "Look for behavior, not only a photograph",
      description:
        "Enter with admission arranged and follow a route selected around the base's live public openings, crowd flow, weather and recent animal activity. Your guide helps you notice feeding, climbing, resting, communication and individual differences when those behaviors are visible.",
      see: "Giant pandas in public habitats, age and personality differences, and red pandas or younger animals only where their areas are open and the animals are visible.",
      do: "Observe quietly, learn how the species lives and eats, and move when another public area offers a better use of the morning.",
      feel: "That you watched real animals on their terms instead of rushing from enclosure to enclosure collecting identical pictures.",
    },
    {
      location: "Conservation Context",
      days: "Across the visit",
      title: "Understand what a breeding and research base can—and cannot—show visitors",
      description:
        "Your guide explains the public-facing conservation story, panda biology, breeding challenges and why access is controlled. Interpretation remains factual and avoids inventing keeper privileges or direct-contact opportunities that are not part of the public visit.",
      see: "Public interpretation, habitat design and the visible relationship between research, care, breeding and visitor management.",
      do: "Ask informed questions, distinguish public observation from behind-the-scenes care and understand why animal rest can change what you see.",
      feel: "More respect for the work behind the panda image—and confidence that the experience was not oversold.",
    },
    {
      location: "People's Park & Chengdu Life",
      days: "Slower afternoon",
      title: "Finish at Chengdu's human pace: tea tables, trees and everyday conversation",
      description:
        "After independent lunch time or a selected Sichuan meal, return to central Chengdu for a flexible People's Park chapter. Walk through local social life, tea-house culture and the city's famously unhurried rhythm. A hosted tea table can be added, but no drink or commercial stop is forced into the base price.",
      see: "A central city park, public tea culture, local recreation and a lived-in contrast to the focused morning at the panda base.",
      do: "Walk, pause, watch Chengdu unfold and choose whether a hosted tea service or cooking experience belongs in your day.",
      feel: "That the day introduced both Chengdu's most famous residents and the slower culture of the city around them.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Responsible Panda Day Standard",
    title: "Better timing, honest expectations and one team responsible for the day.",
    description:
      "A responsible panda product should remove transport and ticket uncertainty while refusing to manufacture certainty about live animals. We plan the controllable parts carefully and describe the uncontrollable parts clearly.",
    items: [
      {
        label: "01 · Early hotel pickup",
        value: "The start is planned around your address and the live public opening window",
        helper:
          "We do not advertise a fictional universal 'early access' before the public base opens unless a specific program is confirmed in writing.",
      },
      {
        label: "02 · Admission clarity",
        value: "Standard Chengdu Panda Base admission is included",
        helper:
          "Guest information, ticket date, entry method and current identification requirements are checked before confirmation.",
      },
      {
        label: "03 · Live route decisions",
        value: "The guide responds to open areas, crowds, weather and visible activity",
        helper:
          "A fixed enclosure order is less useful than a guide who can change direction when public conditions change.",
      },
      {
        label: "04 · No animal-contact claims",
        value: "No holding, touching, feeding or keeper access is promised",
        helper:
          "A public panda-base visit is designed around observation and understanding, with animal welfare first.",
      },
      {
        label: "05 · No shopping",
        value: "No souvenir factory, herbal shop or commission stop",
        helper:
          "Independent shopping happens only if you ask and time allows; it never replaces the panda visit or afternoon culture chapter.",
      },
      {
        label: "06 · A gentle afternoon",
        value: "People's Park balances the early start without another major ticketed attraction",
        helper:
          "Lunch, tea, cooking and evening performance upgrades remain transparent and optional.",
      },
    ],
    note: "Chengdu Panda Base admission, internal transport, nurseries, habitats and public areas follow live reservation, identification, animal-welfare, weather, maintenance, capacity and operating rules. AVIORA cannot guarantee a specific panda, cub, feeding time, behavior, nursery, red-panda area or behind-the-scenes access. The responsible alternative is to confirm the controllable arrangements and adapt the public route on the day.",
  },
  highlights: [
    {
      title: "A genuinely earlier start from your own hotel",
      description:
        "Leave central Chengdu before the weakest part of the day, with tickets, private transport and the practical entrance plan arranged in advance.",
      category: "Family",
      image: pendingImage,
    },
    {
      title: "A route shaped around live panda-base conditions",
      description:
        "Your guide responds to public openings, crowd flow, weather and visible animal activity rather than promising a fixed sequence or a specific panda performance.",
      category: "Nature",
      image: pendingImage,
    },
    {
      title: "A slower Chengdu afternoon beyond the panda image",
      description:
        "People's Park, tea-house culture and everyday city life give the day a relaxed second chapter without forcing another major attraction.",
      category: "Culture",
      image: pendingImage,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Pandas at a better hour, then Chengdu at its own pace",
      destination: "Chengdu",
      summary:
        "Meet your private English-speaking guide and vehicle at the confirmed Chengdu hotel for an early departure. Enter Chengdu Research Base of Giant Panda Breeding with the included standard admission and follow a public route adapted to current openings, crowd flow, weather and animal activity. After independent lunch time or a selected Sichuan meal, return to central Chengdu for a flexible People's Park and tea-culture walk before a private hotel return. Exact timing and visible animals remain date- and condition-specific.",
      image: pendingImage,
      hotel: "No overnight stay required · pickup and return at your Chengdu hotel",
      meals: ["Independent lunch time; selected Sichuan lunch available as an upgrade"],
      transport:
        "Private central-Chengdu hotel pickup and return, with private vehicle and professional driver during the confirmed service window",
      activities: [
        {
          title: "An early, confirmed hotel pickup",
          description:
            "Meet in your hotel lobby with the pickup time, guide contact, admission basis and return arrangement already stated in the final operating message.",
        },
        {
          title: "Included Chengdu Panda Base admission",
          description:
            "Enter through the confirmed public process. Your guide manages the practical arrival and chooses the first area around current conditions rather than a rigid brochure route.",
        },
        {
          title: "Giant pandas with behavior and biology explained",
          description:
            "Observe available public habitats and learn how age, diet, temperature, personality and daily rhythm affect what visitors can see.",
        },
        {
          title: "Conservation without invented access",
          description:
            "Understand the public conservation and breeding context while keeping a clear boundary between visitor observation and restricted professional animal care.",
        },
        {
          title: "People's Park and Chengdu's slower social rhythm",
          description:
            "Return to the city for a flexible park and tea-culture walk, with optional hosted tea, lunch or cooking experiences added only when selected.",
        },
      ],
      guideNote:
        "Tell us about child ages, stroller or wheelchair use, walking limitations, heat sensitivity, dietary needs and any airport or rail connection. Live animals determine their own visibility and behavior; the guide can adapt the public route but cannot guarantee a specific panda or encounter.",
      coordinates: { latitude: 30.7345, longitude: 104.1456 },
    },
  ],
  accommodations: [
    {
      name: "Your Chengdu hotel or confirmed central address",
      destination: "Chengdu",
      description:
        "This is a private day tour, so no overnight stay is included. Service begins and ends at a hotel in Chengdu's main urban districts or another confirmed central location. Airport and non-standard pickup requirements are priced before booking.",
      roomStyle: "No overnight stay required",
      highlights: [
        "Early hotel pickup",
        "Confirmed admission",
        "Private return",
        "No hotel change",
      ],
      image: pendingImage,
    },
  ],
  included: [
    "Private pickup and return at a hotel in Chengdu's main urban districts; airports, out-of-area hotels and non-standard locations are quoted before booking",
    "Private air-conditioned vehicle with professional driver for the confirmed service window",
    "Private English-speaking guide for the confirmed Panda Base and central Chengdu day",
    "Standard admission to Chengdu Research Base of Giant Panda Breeding for the confirmed travelers",
    "Pre-trip review of hotel address, date, group details, ticket information, walking preferences and child or mobility considerations",
    "Bottled water in the vehicle and one final operating message with pickup, contacts and the confirmed plan",
    "No compulsory shopping stops or claims of private animal contact",
  ],
  excluded: [
    "Lunch, tea, drinks, personal purchases, gratuities, travel insurance and items not expressly listed as included",
    "Internal electric cart, hosted tea, cooking class, evening performance and other upgrades unless selected in the written confirmation",
    "Airport pickup or drop-off, out-of-area hotels, late-night return or additional vehicle and guide hours unless quoted",
    "Panda holding, touching, feeding, keeper access, a specific panda, cub, behavior, nursery, red-panda area or behind-the-scenes access",
    "Guaranteed operation of any public habitat, internal transport or visitor facility affected by animal welfare, weather, maintenance, capacity, safety or base decisions",
    "Wheelchair, porter, medical care or accessibility equipment unless separately requested and confirmed",
  ],
  optionalExperiences: [
    {
      title: "Selected Sichuan lunch",
      description:
        "Add a pre-arranged Sichuan lunch from US$28 per guest, with spice level, allergies and dietary preferences reviewed before booking. Drinks and dishes beyond the agreed menu remain separate.",
      badges: ["From US$28 pp", "Spice level checked"],
      image: pendingImage,
    },
    {
      title: "Hosted People's Park tea table",
      description:
        "Add a hosted tea-house experience from US$38 per guest with reserved timing, selected tea and cultural interpretation. It takes place in a public tea-house setting and is not advertised as a private venue unless specifically confirmed.",
      badges: ["From US$38 pp", "Public tea-house setting"],
      image: pendingImage,
    },
    {
      title: "Hands-on Sichuan cooking experience",
      description:
        "Add a date-confirmed cooking session from US$78 per guest. The host, dishes, group format, dietary fit, transfers and any added service time are stated before payment.",
      badges: ["From US$78 pp", "Host availability"],
      image: pendingImage,
    },
    {
      title: "Sichuan opera evening extension",
      description:
        "Extend the day from US$328 per group of up to four with standard performance tickets, private vehicle, guide assistance and up to 2.5 additional service hours. Exact venue, seats and program are confirmed for the date.",
      badges: ["From US$328 per group", "Up to 4 guests", "Evening extension"],
      image: pendingImage,
    },
    {
      title: "Additional private touring time",
      description:
        "Add guide, driver and vehicle time at US$58 per private group for each additional hour, subject to date-specific availability. This can support a slower base visit, longer tea stop or confirmed evening plan.",
      badges: ["US$58 per group/hour", "Subject to availability"],
      image: pendingImage,
    },
  ],
  transportation: {
    title: "One early private transfer to the panda base, then an easy return to central Chengdu",
    description:
      "A private vehicle protects the start, removes hotel-to-base navigation and keeps the afternoon connected to your own hotel. It does not create a private entrance, bypass public security or guarantee a fixed travel time in Chengdu traffic.",
    items: [
      {
        label: "Pickup",
        value: "Chengdu hotel lobby or confirmed central address",
        helper:
          "Main urban hotel districts are included; Tianfu airport, Shuangliu airport and distant addresses are checked first.",
      },
      {
        label: "Vehicle",
        value: "Private air-conditioned car or MPV",
        helper:
          "Vehicle size is matched to the party, stroller and luggage, then named in the final operating plan.",
      },
      {
        label: "Inside the base",
        value: "Public walking route with optional operator transport",
        helper:
          "Internal carts and public visitor services follow the base's live queues, tickets, routes and operating decisions.",
      },
      {
        label: "Return",
        value: "People's Park chapter and direct return to the confirmed Chengdu address",
        helper:
          "The afternoon route and any approved address change are stated before the day begins.",
      },
    ],
  },
  routeMap: {
    title: "An early panda morning followed by the Chengdu people actually live",
    description:
      "The route begins at your central hotel, moves privately to Chengdu Panda Base, then returns to People's Park for a slower cultural chapter before the hotel drop-off. Optional tea, cooking, meals and evening performance are added only when confirmed.",
    stops: [
      {
        name: "Chengdu hotel pickup",
        days: "Early start",
        description: "A confirmed central hotel or address pickup.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        name: "Chengdu Panda Base",
        days: "Morning",
        description:
          "Included public admission and a private guide adapting the route to live conditions.",
        coordinates: { latitude: 30.7345, longitude: 104.1456 },
      },
      {
        name: "People's Park",
        days: "Afternoon",
        description: "A flexible park and tea-culture chapter, with hosted tea optional.",
        coordinates: { latitude: 30.6574, longitude: 104.0558 },
      },
      {
        name: "Chengdu hotel return",
        days: "Finish",
        description: "Private return to the confirmed central address.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
    ],
  },
  gallery: [],
  faqs: [
    {
      question: "What does the US$598 starting price include?",
      answer:
        "It is an indicative private-group starting price for four guests, equivalent to approximately US$150 per guest. It includes early pickup and return within Chengdu's main urban hotel districts, a private air-conditioned vehicle and driver during the confirmed service window, a private English-speaking guide, standard Chengdu Panda Base admission, a flexible People's Park culture walk, bottled water and no compulsory shopping stops. Lunch, tea, internal carts and other upgrades are not included.",
    },
    {
      question: "What is the published price for a smaller or larger group?",
      answer:
        "Outside major public holidays and unusual pickup requirements, the indicative private-group prices are: one guest from US$398; two guests from US$478 total; three guests from US$538 total; four guests from US$598 total; five guests from US$710 total; and six guests from US$828 total. Six guests may require a larger vehicle, which is checked before confirmation. Optional experiences remain separate.",
    },
    {
      question: "Why does the tour start early?",
      answer:
        "Pandas often show more visible activity during cooler earlier periods, and an earlier arrival can reduce some crowd pressure. This improves the planning logic but is not a guarantee: weather, animal rest, husbandry needs, public openings and visitor numbers still determine the actual experience.",
    },
    {
      question: "Can you guarantee we will see panda cubs or active pandas?",
      answer:
        "No responsible operator can guarantee a specific panda, cub, nursery, feeding time or behavior. The guide adapts the public route around current openings and visible activity, but animal welfare and base decisions always come first. The tour sells good timing and professional handling, not control over live animals.",
    },
    {
      question: "Can we hold, feed or touch a panda?",
      answer:
        "No. Panda holding, feeding, touching, keeper access and behind-the-scenes interaction are not included or implied. If an officially authorized public program ever exists for your date, it would require separate verification and written confirmation; this product makes no such promise.",
    },
    {
      question: "Is this a private tour or a private panda-base visit?",
      answer:
        "The guide, vehicle and operating plan are private for your booking party. Chengdu Panda Base is a public attraction, so other visitors will be present and entry, habitats, routes and facilities remain under the base's control.",
    },
    {
      question: "Is lunch or tea included?",
      answer:
        "No. Independent lunch time keeps the base price clear. You may add the selected Sichuan lunch from US$28 per guest or a hosted People's Park tea table from US$38 per guest. Menus, spice levels, dietary needs and the tea-house format are confirmed before booking.",
    },
    {
      question: "Can you collect us from Chengdu airport?",
      answer:
        "Yes when the timing is workable, but airports are not included in the central-hotel price. Chengdu Shuangliu International Airport is quoted from US$68 per group each way and Chengdu Tianfu International Airport from US$118 per group each way, subject to the date, flight time, luggage, waiting requirements and final route.",
    },
    {
      question: "Can children or older travelers take this tour?",
      answer:
        "Often yes. Private transport and a private guide improve flexibility, but the base is large and may involve slopes, considerable walking, standing and queues. Share child ages, stroller, wheelchair, mobility and heat concerns before booking so the route, internal transport options and realistic limitations can be discussed.",
    },
    {
      question: "How quickly can you confirm my date?",
      answer:
        "Send your date, group size and Chengdu hotel through the form or WhatsApp. During China business hours, we aim to reply within one hour with an availability check, early pickup plan and any relevant supplement. A booking is confirmed only after the written proposal, required payment, tickets and supplier arrangements are confirmed in writing.",
    },
  ],
  related: {
    tours: [
      {
        title: "Chengdu, Pandas & the Sichuan Table",
        description:
          "A five-day private Chengdu stay with better-timed pandas, Sichuan food, tea-house culture and an optional Leshan chapter.",
        tags: ["Private", "Pandas", "Food"],
        image: pendingImage,
        route: "Chengdu · optional Leshan",
        duration: "5 days / 4 nights",
        href: "/tours/chengdu-pandas-sichuan-table",
      },
      {
        title: "Beijing, Xi'an, Chengdu & Shanghai",
        description:
          "An eleven-day first-China route connecting the Great Wall, Terracotta Warriors, pandas and Shanghai with private support.",
        tags: ["Private", "First-time China", "Pandas"],
        image: pendingImage,
        route: "Beijing · Xi'an · Chengdu · Shanghai",
        duration: "11 days / 10 nights",
        href: "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour",
      },
    ],
    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Chengdu%20Panda%20Day%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20check%20a%20private%20Chengdu%20panda%20day%20tour.%0A%0ADate%3A%0ANumber%20of%20guests%20and%20ages%20if%20children%3A%0AChengdu%20hotel%20or%20pickup%20address%3A%0AAny%20airport%20or%20railway%20connection%3A%0AOptional%20experiences%20of%20interest%3A%0AAny%20mobility%2C%20dietary%20or%20other%20considerations%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20check%20a%20private%20Chengdu%20panda%20day%20tour.%20My%20date%2C%20group%20size%20and%20Chengdu%20hotel%20are%3A",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I would like to check a private early-morning Chengdu panda day tour from my Chengdu hotel.",
  },
};
