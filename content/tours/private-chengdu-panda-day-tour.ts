import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

const chengduImage = (file: string, alt: string, width: number, height: number): MediaAsset => ({
  src: `/tours/private-chengdu-panda-day-tour/${file}`,
  alt,
  width,
  height,
});

const pandaBase = chengduImage(
  "01-chengdu-panda-base-morning.webp",
  "A giant panda resting among trees at Chengdu Research Base of Giant Panda Breeding",
  1600,
  2133,
);
const peoplesParkTeahouse = chengduImage(
  "02-chengdu-peoples-park-teahouse.webp",
  "Locals sharing tea and conversation at a traditional teahouse in Chengdu People's Park",
  1179,
  1500,
);
const peoplesParkTeaTable = chengduImage(
  "03-chengdu-peoples-park-tea-table.webp",
  "A Sichuan-style tea table beside the lake in Chengdu People's Park",
  1179,
  1500,
);
const sichuanHotpot = chengduImage(
  "04-chengdu-sichuan-hotpot.webp",
  "A spread of Sichuan hotpot ingredients and broth in Chengdu",
  1600,
  2133,
);
const privateVehicle: MediaAsset = {
  src: "/tours/mutianyu-private-day-tour/05-private-luxury-vehicle.webp",
  alt: "Illustrative private vehicle interior for a private Chengdu day tour",
  width: 1440,
  height: 1920,
};
const chengduGallery = [
  pandaBase,
  peoplesParkTeahouse,
  peoplesParkTeaTable,
  sichuanHotpot,
  privateVehicle,
];
export const privateChengduPandaDayTour: Tour = {
  slug: "private-chengdu-panda-day-tour-early-morning",
  visualStatus: "ready",
  publishedAt: "2026-08-21",
  updatedAt: "2026-11-11",
  title: "Private Chengdu Panda Tour with Hotel Pickup",
  subtitle:
    "Start from your Chengdu hotel at a sensible early hour, enter with admission arranged and follow a private guide who adapts the panda-base route around live openings, crowds, weather and animal activity before a slower Chengdu afternoon.",
  duration: "1 Day · Private · About 8 hours",
  durationIso: "PT8H",
  route: "Chengdu hotel · Chengdu Panda Base · People's Park · Chengdu hotel",
  styles: ["Family", "Nature", "Culture", "Photography"],
  hero: {
    eyebrow: "Private Chengdu panda tour · early start · guide, driver and admission · no shopping",
    image: pandaBase,
    primary: { label: "Check My Date", href: "#enquiry" },
    secondary: { label: "See What Is Included", href: "#included" },
  },
  seo: {
    title: "Private Chengdu Panda Tour with Hotel Pickup",
    description:
      "Visit Chengdu Panda Base with a private guide, driver, hotel pickup and admission, then walk in People's Park. Early start; lunch and tea are optional.",
    preserveCopy: true,
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
      "A panda day is shaped as much by timing as by the ticket. Giant pandas choose their own rhythm, public areas can become crowded and the base may change which enclosures or nurseries are open. This private tour begins early from your Chengdu hotel, with admission, vehicle and multilingual guide arranged in advance. Your guide checks the practical conditions and chooses a sensible route through the public base rather than promising a fixed animal performance. After the morning visit, return to central Chengdu for an unhurried People's Park and tea-culture chapter. There are no compulsory shopping stops, panda-souvenir factories or claims of private animal access.",
    answer:
      "Visit Chengdu Panda Base with your own guide and separate driver, then explore People's Park. This private hotel-to-hotel day is planned around eight hours, usually 7–9 hours. Central Chengdu transfers, standard admission and the park walk are included. Lunch, tea and internal electric carts cost extra. Timing follows public opening rules; panda activity, cub sightings and direct animal contact are not guaranteed.",
    practicalities: [
      {
        label: "Duration",
        value:
          "Plan around 8 hours, usually 7–9 hours door to door. The written service window and confirmed pickup govern the day.",
      },
      {
        label: "Which panda base",
        value:
          "Chengdu Research Base of Giant Panda Breeding, also called Chengdu Panda Base. Dujiangyan, Wolong and Bifengxia are different sites and are not included.",
      },
      {
        label: "Private service",
        value:
          "Your own guide, a separate driver and an air-conditioned vehicle. Public entry, animal habitats and internal transport are shared with other visitors.",
      },
      {
        label: "Guide language",
        value:
          "Request an English-speaking guide or another available language; language and date-specific availability are confirmed before booking. A keeper or research specialist is not promised.",
      },
      {
        label: "Admission",
        value:
          "Standard Chengdu Panda Base admission is included, subject to reservation confirmation. This provides no VIP entrance, early access before public opening or queue bypass.",
      },
      {
        label: "Panda viewing",
        value:
          "A public observation visit. Specific pandas, active behavior, cubs, nurseries and red pandas cannot be guaranteed; no holding, touching, feeding or backstage access.",
      },
      {
        label: "Walking and internal carts",
        value:
          "Expect walking, slopes, queues and standing across a large site. Internal electric carts are optional, separately paid and subject to public operation; they do not remove all walking.",
      },
      {
        label: "Afternoon and meals",
        value:
          "A People's Park walk is included. Lunch, tea, drinks, hosted tea and cooking sessions are separate; a cooking session may replace the park or require extra hours.",
      },
      {
        label: "Pickup and return",
        value:
          "Central Chengdu hotels. Chengdu Tianfu Airport (TFU), Shuangliu Airport (CTU), railway stations and non-central addresses require a separate transfer quote and timing review.",
      },
      {
        label: "Price and accommodation",
        value:
          "One written total for your private party, based on date, guests, guide language, addresses and service window. No overnight accommodation is included.",
      },
      {
        label: "Starting-price basis",
        value: getPublishedPriceDisclosure("private-chengdu-panda-day-tour-early-morning"),
      },
      { label: "Accommodation", value: "No overnight accommodation is included." },
    ],
    facts: [
      {
        label: "Suitable for",
        value: "Chengdu visitors who want a guided panda morning with private hotel transfers",
      },
      {
        label: "Pacing",
        value: "Early start, substantial base walking and a flexible park afternoon",
      },
      {
        label: "Time",
        value: "About 8 hours; usually 7–9 hours door to door",
        helper:
          "Pickup is commonly around 07:00–07:30, then adjusted for your hotel, season, ticket window, current base hours and selected afternoon plan.",
      },
      {
        label: "Included",
        value: "Private vehicle, multilingual guide and Chengdu Panda Base admission",
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
      do: "Bring the entry documents confirmed for your date and comfortable shoes; expect live animals with their own daily rhythms.",
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
          "The early start is a hotel departure plan, not admission before public opening. Public queues and security still apply.",
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
      title: "An early start from your own hotel",
      description:
        "Leave central Chengdu at a time planned around public opening, with tickets, private transport and the practical entrance plan arranged in advance.",
      category: "Family",
      image: pandaBase,
    },
    {
      title: "A route shaped around live panda-base conditions",
      description:
        "Your guide responds to public openings, crowd flow, weather and visible animal activity rather than promising a fixed sequence or a specific panda performance.",
      category: "Nature",
      image: pandaBase,
    },
    {
      title: "A slower Chengdu afternoon beyond the panda image",
      description:
        "People's Park, tea-house culture and everyday city life give the day a relaxed second chapter without forcing another major attraction.",
      category: "Culture",
      image: peoplesParkTeahouse,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Pandas at a better hour, then Chengdu at its own pace",
      destination: "Chengdu",
      summary:
        "Meet your private multilingual guide and vehicle at the confirmed Chengdu hotel for an early departure. Enter Chengdu Research Base of Giant Panda Breeding with the included standard admission and follow a public route adapted to current openings, crowd flow, weather and animal activity. After independent lunch time or a selected Sichuan meal, return to central Chengdu for a flexible People's Park and tea-culture walk before a private hotel return. Exact timing and visible animals remain date- and condition-specific.",
      image: pandaBase,
      hotel: "No overnight stay required · pickup and return at your Chengdu hotel",
      meals: ["Independent lunch time; selected Sichuan lunch available as an upgrade"],
      transport:
        "Private central-Chengdu hotel pickup and return, with private vehicle and professional driver during the confirmed service window",
      activities: [
        {
          time: "07:00\u201307:30 \u00b7 indicative pickup",
          title: "An early, confirmed hotel pickup",
          description:
            "Meet in your hotel lobby with the pickup time, guide contact, admission basis and return arrangement already stated in the final operating message.",
        },
        {
          time: "Morning \u00b7 public opening and entry",
          title: "Included Chengdu Panda Base admission",
          description:
            "Enter through the confirmed public process. Your guide manages the practical arrival and chooses the first area around current conditions rather than a rigid brochure route.",
        },
        {
          time: "Morning \u00b7 main public habitats",
          title: "Giant pandas with behavior and biology explained",
          description:
            "Observe available public habitats and learn how age, diet, temperature, personality and daily rhythm affect what visitors can see.",
        },
        {
          time: "Late morning \u00b7 interpretation and city transfer",
          title: "Conservation without invented access",
          description:
            "Understand the public conservation and breeding context while keeping a clear boundary between visitor observation and restricted professional animal care.",
        },
        {
          time: "Lunch break, then afternoon park walk and hotel return",
          title: "People's Park and Chengdu's slower social rhythm",
          description:
            "Return to the city for a flexible park and tea-culture walk, with optional hosted tea, lunch or cooking experiences added only when selected.",
        },
      ],
      guideNote:
        "Tell us about child ages, stroller or wheelchair use, walking limitations, heat sensitivity, dietary needs and any airport or rail connection with a fixed return deadline, preferred guide language, luggage and standing concerns. Live animals determine their own visibility and behavior; the guide can adapt the public route but cannot guarantee a specific panda or encounter.",
      coordinates: { latitude: 30.7345, longitude: 104.1456 },
    },
  ],
  accommodations: [
    {
      name: "Your Chengdu hotel or confirmed central address",
      destination: "Chengdu",
      description:
        "This is a private day tour, so no overnight stay is included. Service begins and ends at a hotel in Chengdu's main urban districts or another confirmed central location. Airport, railway-station and non-standard pickup requirements are priced before booking.",
      roomStyle: "No overnight stay required",
      highlights: [
        "Early hotel pickup",
        "Confirmed admission",
        "Private return",
        "No hotel change",
      ],
      image: privateVehicle,
    },
  ],
  included: [
    "Private pickup and return at a hotel in Chengdu's main urban districts; airports, railway stations, out-of-area hotels and non-standard locations are quoted before booking",
    "Private air-conditioned vehicle with professional driver for the confirmed service window",
    "Private guide in the language confirmed before booking for the Panda Base and central Chengdu day",
    "A flexible guided People's Park walk; tea and drinks are separate",
    "Standard admission to Chengdu Research Base of Giant Panda Breeding for the confirmed travelers",
    "Pre-trip review of hotel address, date, group details, ticket information, walking preferences and child or mobility considerations",
    "Bottled water in the vehicle and one final operating message with pickup, contacts and the confirmed plan",
    "No compulsory shopping stops or claims of private animal contact",
  ],
  excluded: [
    "Lunch, tea, drinks, personal purchases, gratuities, travel insurance and items not expressly listed as included",
    "Internal electric cart, hosted tea, cooking class, evening performance and other upgrades unless selected in the written confirmation",
    "Airport or railway-station pickup or drop-off, out-of-area hotels, late-night return or additional vehicle and guide hours unless quoted",
    "Panda holding, touching, feeding, keeper access, a specific panda, cub, behavior, nursery, red-panda area or behind-the-scenes access",
    "Guaranteed operation of any public habitat, internal transport or visitor facility affected by animal welfare, weather, maintenance, capacity, safety or base decisions",
    "Wheelchair, porter, medical care or accessibility equipment unless separately requested and confirmed",
  ],
  optionalExperiences: [
    {
      title: "Selected Sichuan lunch",
      description:
        "Add a pre-arranged Sichuan lunch, with spice level, allergies and dietary preferences reviewed before booking. Drinks and dishes beyond the agreed menu remain separate.",
      badges: ["Spice level checked"],
      image: sichuanHotpot,
    },
    {
      title: "Hosted People's Park tea table",
      description:
        "Add a hosted tea-house experience with reserved timing, selected tea and cultural interpretation. It takes place in a public tea-house setting and is not advertised as a private venue unless specifically confirmed.",
      badges: ["Public tea-house setting"],
      image: peoplesParkTeaTable,
    },
    {
      title: "Hands-on Sichuan cooking experience",
      description:
        "A cooking session may replace the People's Park walk or require separately quoted extra hours. The host, dishes, group format, dietary fit, transfers and any added service time are stated before payment.",
      badges: ["Host availability"],
      image: sichuanHotpot,
    },
    {
      title: "Sichuan opera evening extension",
      description:
        "Request a separately quoted evening extension. Venue, seats, program, ticket coverage, guide assistance, vehicle hours and hotel return must be agreed before payment; these are not included in the day-tour price.",
      badges: ["Separately quoted", "Evening extension"],
      image: sichuanHotpot,
    },
    {
      title: "Additional private touring time",
      description:
        "Add guide, driver and vehicle time by the hour, subject to date-specific availability. This can support a slower base visit, longer tea stop or confirmed evening plan.",
      badges: ["Subject to availability"],
      image: privateVehicle,
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
          "Main urban hotel districts are included; Tianfu Airport (TFU), Shuangliu Airport (CTU), railway stations and distant addresses are checked first.",
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
  gallery: chengduGallery.slice(1),
  faqLimit: 18,
  faqs: [
    {
      question: "Which panda base does this Chengdu private tour visit?",
      answer:
        "The tour visits Chengdu Research Base of Giant Panda Breeding, commonly called Chengdu Panda Base. It does not visit Dujiangyan, Wolong or Bifengxia. Those are different sites requiring a different route and quote; this is not a two-base tour.",
    },
    {
      question:
        "What is included, and how much does a private panda tour cost for two people or a family?",
      answer:
        getPublishedPriceDisclosure("private-chengdu-panda-day-tour-early-morning") +
        " Lunch, People's Park tea, internal carts and airport or station transfers are separate unless expressly added.",
    },
    {
      question: "How early is pickup, and is this a VIP or skip-the-line panda tour?",
      answer:
        "Pickup is commonly planned around 07:00–07:30, subject to hotel address, season, current opening hours and ticket window. This is not VIP entry, access before public opening or a skip-the-line service. Standard reservation arrangements do not bypass security, capacity controls or public queues. The written pickup and service window are confirmed for your date.",
    },
    {
      question: "Can you guarantee active pandas, panda cubs or red pandas?",
      answer:
        "No. Earlier, cooler periods can offer a useful chance of visible activity, but feeding, climbing, rest and indoor or outdoor visibility depend on the animals and base decisions. Specific pandas, cubs, nurseries and red-panda areas are not guaranteed. Your guide adapts to the public areas open on the day.",
    },
    {
      question: "Can we hold, touch or feed a panda?",
      answer:
        "No. This product is a public observation visit with no panda holding, touching, feeding, keeper access or backstage interaction. The private element is your guide and transport; the animal habitats are shared with other visitors.",
    },
    {
      question: "Is a panda volunteer program included at Dujiangyan or Wolong?",
      answer:
        "No. Volunteering is not part of this tour, and no volunteer place is promised. A request for another base or an official program needs separate checks of the site, date, age and participation rules, availability, transport and price. Do not assume a volunteer request includes touching or feeding pandas.",
    },
    {
      question: "Can we book an English-speaking guide and a separate driver?",
      answer:
        "Yes, request an English-speaking guide or another available language. The guide language, availability and a separate driver are confirmed before booking. Your guide interprets the public visit; a panda keeper, researcher or specialist scientist is not promised.",
    },
    {
      question: "Are Panda Base tickets included, and do foreign visitors need a passport?",
      answer:
        "Standard admission is included, subject to reservation confirmation. We check the current identity, child-ticket and entry-document requirements for your date and explain what originals to bring. You do not need to send passport numbers in an initial inquiry; any necessary ticket-booking information is collected later through the agreed booking channel.",
    },
    {
      question: "How much walking is involved, and is the internal electric cart included?",
      answer:
        "The base is large and involves walking, slopes, standing and queues. The internal electric cart is not included; any separately paid use depends on public routes, availability and queues. It is not a private shuttle or a way to bypass entry controls, and some walking remains. Share wheelchair, stroller, walking-distance and standing needs before confirmation.",
    },
    {
      question: "Is this panda tour suitable for children or older travelers?",
      answer:
        "It can work for families and older travelers when the route matches their needs. An early start and a large public site can be tiring. Tell us child ages, stroller or wheelchair use, heat sensitivity and comfortable walking and standing limits. We review a shorter route and rest opportunities before accepting the plan; step-free access throughout is not promised.",
    },
    {
      question: "Are lunch and People's Park tea included?",
      answer:
        "The People's Park walk is included; lunch, tea and other drinks are not. Choose independent lunch time or request a separately quoted Sichuan meal or hosted tea table. Tell us about allergies, dietary needs and spice preferences. A park walk is not a reserved tea-house seat, private venue or included tea service.",
    },
    {
      question: "Can we add Sichuan cooking or an evening opera performance?",
      answer:
        "Yes, subject to availability and a separate quote. Cooking may replace the People's Park walk or require extra hours. An opera evening extends beyond the standard day: venue, seats, program, ticket coverage, transfers, guide assistance, service hours and hotel return must be stated before payment.",
    },
    {
      question: "Can pickup be at Tianfu Airport, Shuangliu Airport or a railway station?",
      answer:
        "These transfers are separately quoted. State Chengdu Tianfu Airport (TFU) or Shuangliu Airport (CTU), or the exact railway station, flight or train time, luggage and required return deadline. Arrival procedures and transfer time can make an early panda-base visit impractical; a same-day arrival or layover needs a separate timing review before booking.",
    },
    {
      question: "What happens in summer heat, rain, crowds or a closure?",
      answer:
        "Weather can change animal visibility, walking comfort and open facilities. Earlier timing does not guarantee cool conditions or low crowds, including on public holidays. The guide can adapt open public routes and breaks; a major closure or unsafe conditions require a review of alternatives and the applicable written change or cancellation terms. No particular habitat or cart operation is guaranteed.",
    },
    {
      question: "How long is the day, and can we book only a panda-base morning?",
      answer:
        "The standard day is planned around eight hours, usually 7–9 hours from central-hotel pickup to return, including the Panda Base, lunch break and People's Park. Traffic, entry and the chosen route affect the schedule. A panda-only morning is a different service window and quote; skipping the park does not automatically change the confirmed price. Share any fixed train or flight deadline.",
    },
    {
      question: "How do we check availability and confirm the booking?",
      answer:
        "Send your preferred date, adult and child numbers, hotel address, guide language, access needs and any fixed return deadline. We check admission and service availability, then provide the scope, total, optional costs and booking terms. A booking is confirmed only when the required payment, tickets and supplier arrangements have been confirmed in writing; submitting an inquiry does not reserve entry.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "5-Day Chengdu Panda and Sichuan Food Tour",
        description:
          "Stay four nights in Chengdu and add the agreed Sichuan food experience and a preselected Day 4 route.",
        tags: ["Family", "Food", "Culture"],
        image: {
          src: "/tours/chengdu-pandas/chengdu-hero-panda.webp",
          alt: "A giant panda resting among bamboo near Chengdu",
          width: 6016,
          height: 4016,
        },
        route: "Chengdu and Leshan",
        duration: "5 days / 4 nights",
        href: "/tours/chengdu-pandas-sichuan-table",
      },
      {
        title: "12-Day Private China Tour: Shanghai to Beijing",
        description:
          "Add Chengdu and public Dujiangyan panda observation to a twelve-day Shanghai–Chengdu–Xi’an–Beijing journey. This longer route visits a different panda facility.",
        tags: ["First-time China", "Family", "Culture"],
        image: {
          src: "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour/photo-42.webp",
          alt: "Shanghai's towers and riverfront illuminated beneath a pink evening sky",
          priority: true,
          objectPosition: "50% 48%",
        },
        route: "Shanghai · Chengdu · Xi'an · Beijing",
        duration: "12 days / 11 nights",
        href: "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour",
      },
    ],

    destinations: [],
  },
  inquiryChecklist: [
    "Preferred date; number of adults and child ages",
    "Chengdu hotel / pickup address and return address",
    "Preferred guide language",
    "Walking, standing, stroller, wheelchair and heat considerations",
    "Any flight / train, exact airport or station, luggage and fixed return deadline",
    "Optional meal, tea, cooking or opera request and dietary needs",
  ],
  planningResources: [
    {
      label: "Plan a Chengdu stay",
      href: "/destinations/chengdu",
      description: "Decide whether a single panda day or a longer Chengdu stay fits your route.",
    },
    {
      label: "Panda Base tickets for foreign visitors",
      href: "/journal/chengdu-panda-base-tickets-foreigners",
      description: "Prepare for identity, reservation and entry questions before choosing a tour.",
    },
    {
      label: "Official Panda Base visitor notices",
      href: "https://www.panda.org.cn/en/service/notice",
      officialPublisher: "Chengdu Research Base of Giant Panda Breeding",
      description:
        "Consult the attraction's notices; current access and visitor rules need date-specific checking.",
    },
    {
      label: "Official Panda Base opening information",
      href: "https://www.panda.org.cn/en/service/opentime",
      officialPublisher: "Chengdu Research Base of Giant Panda Breeding",
      description:
        "Check published opening information; a hotel departure time is not a promise of early admission.",
    },
  ],
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Chengdu%20Panda%20Day%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20check%20a%20private%20Chengdu%20panda%20day%20tour.%0A%0ADate%3A%0ANumber%20of%20guests%20and%20ages%20if%20children%3A%0AChengdu%20hotel%20or%20pickup%20address%3A%0AAny%20airport%20or%20railway%20connection%3A%0AOptional%20experiences%20of%20interest%3A%0AAny%20mobility%2C%20dietary%20or%20other%20considerations%3A%0A",
    whatsappHref:
      "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20would%20like%20to%20check%20a%20private%20Chengdu%20panda%20tour.%0A%0APreferred%20date%3B%20number%20of%20adults%20and%20child%20ages%3A%0AChengdu%20hotel%20/%20pickup%20address%20and%20return%20address%3A%0APreferred%20guide%20language%3A%0AWalking%2C%20standing%2C%20stroller%2C%20wheelchair%20and%20heat%20considerations%3A%0AAny%20flight%20/%20train%2C%20exact%20airport%20or%20station%2C%20luggage%20and%20fixed%20return%20deadline%3A%0AOptional%20meal%2C%20tea%2C%20cooking%20or%20opera%20request%20and%20dietary%20needs%3A%0APlease%20explain%20any%20ticket-booking%20documents%20after%20checking%20availability.",
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "I would like to check a private early-morning Chengdu panda day tour from my Chengdu hotel.",
  },
};
