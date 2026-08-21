import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

// Photography remains pending until route-specific, rights-cleared images are supplied.
const pendingImage: MediaAsset = {
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "Photography for the private Xi'an Terracotta Warriors day tour is being prepared",
  width: 1920,
  height: 1080,
};

export const privateXianTerracottaDayTour: Tour = {
  slug: "private-xian-terracotta-warriors-day-tour",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-08-21",
  title: "Private Terracotta Warriors Day Tour, Seamlessly Handled",
  subtitle:
    "From your Xi'an hotel to passport-linked admission, the excavation pits, expert interpretation and a private return, one English-speaking guide and vehicle handle the day without shopping stops or jade-factory detours.",
  duration: "1 Day · Private · About 8 hours",
  route: "Xi'an hotel · Terracotta Warriors · Xi'an Old City · Xi'an hotel",
  styles: ["Culture", "Family", "Senior-friendly", "Photography"],
  hero: {
    eyebrow:
      "Private Xi'an day tour · guide, driver and Terracotta Warriors admission · no shopping",
    image: pendingImage,
    primary: { label: "Check My Date", href: "#inquiry" },
    secondary: { label: "See What Is Included", href: "#price" },
  },
  seo: {
    title: "Private Xi'an Terracotta Warriors Day Tour",
    description:
      "An 8-hour private Xi'an Terracotta Warriors day tour with hotel pickup, English-speaking guide, private vehicle, admission, Old City walk and no shopping. From US$628 for four guests.",
    keywords: [
      "private Terracotta Warriors tour",
      "Xi'an Terracotta Warriors private day tour",
      "Terracotta Army tour with guide and driver",
      "Xi'an hotel pickup Terracotta Warriors tour",
      "Terracotta Warriors tour no shopping",
      "private Xi'an day tour",
      "Terracotta Warriors tour for families",
      "Xi'an one day private tour",
    ],
  },
  overview: {
    pitch:
      "The Terracotta Army is visually overwhelming but surprisingly easy to leave without understanding. Pit 1 gives you scale; Pits 2 and 3 reveal military organization, rank and command; conservation displays explain why color disappears and restoration takes years. This private day begins at your Xi'an hotel with passport-linked admission arranged in advance. Your guide connects the excavation, Qin history, archaeology and the individual warriors rather than repeating a memorized list of dates. After the museum, return toward Xi'an's Old City for a flexible cultural walk before the private hotel return. There are no compulsory shopping stops, jade factories or souvenir workshops built into the route.",
    facts: [
      {
        label: "Time",
        value: "About 8 hours door to door",
        helper:
          "A typical central-hotel pickup is 08:30–09:00. Exact timing depends on your address, traffic, ticket window, crowds and selected upgrades.",
      },
      {
        label: "Included",
        value: "Private vehicle, English-speaking guide and Terracotta Warriors admission",
        helper:
          "Pickup and return are included at hotels in Xi'an's main urban districts. Airport, railway-station and distant locations are priced before booking.",
      },
      {
        label: "You will understand",
        value: "Scale, military structure, individuality, archaeology and conservation",
        helper:
          "The visit is designed around the questions most first-time visitors actually have, not only a circuit through three buildings.",
      },
      {
        label: "Walking",
        value: "Easy to moderate, with substantial standing",
        helper:
          "The museum is large and busy. Distances, ramps, stairs, heat and standing time should be discussed before confirmation when mobility is a concern.",
      },
      {
        label: "Service promise",
        value: "Private, no shopping and clear before the day",
        helper:
          "One operating message confirms the hotel, pickup, passport details, guide contact, service window and selected upgrades.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Your Xi'an Hotel",
      days: "Before departure",
      title: "Leave with the admission and return plan already settled",
      description:
        "Send your Xi'an hotel, date, group size and passport details through the secure booking process. We confirm the pickup window, ticket basis, guide contact and practical route before the vehicle arrives.",
      see: "One clear operating plan stating where the day begins, what is included and how you return.",
      do: "Tell us about children, walking limitations, archaeology interests, dietary needs or a train or flight connection.",
      feel: "That the complicated part of visiting a passport-linked attraction has been dealt with before breakfast.",
    },
    {
      location: "Terracotta Warriors · Pit 1",
      days: "The first impact",
      title: "Stand before the army at full scale—and know what you are looking at",
      description:
        "Pit 1 is the moment most travelers have imagined: ranks of life-sized infantry beneath an immense excavation hall. Your guide positions the visit around crowd flow, then explains formation, restoration and why every warrior is not simply an identical moulded figure.",
      see: "The largest excavated formation, restored warriors, active archaeological areas and the scale of an imperial project buried for more than two millennia.",
      do: "Compare faces, hairstyles, armor and posture; identify repaired and unrestored sections; and pause where the formation reads most clearly.",
      feel: "The difference between recognizing a famous image and finally understanding its physical scale.",
    },
    {
      location: "Pits 2 & 3 · Conservation Story",
      days: "Look closer",
      title: "Move from spectacle to evidence: rank, command, cavalry and unfinished archaeology",
      description:
        "The smaller pits help explain how the army functioned. Your guide uses infantry, cavalry, chariots, officers and the command structure to turn the site into a readable military and archaeological story. Displays and operating conditions determine which close-view artifacts are available on the day.",
      see: "Different military units, command arrangements, selected close-view warriors or artifacts and the contrast between excavation and reconstruction.",
      do: "Read rank through clothing and headgear, ask how archaeologists reconstruct fragments, and understand why original pigment is so difficult to preserve.",
      feel: "That the warriors are individual historical evidence rather than thousands of interchangeable statues.",
    },
    {
      location: "Xi'an Old City",
      days: "Afternoon",
      title: "Return to a living city shaped by walls, trade, faith and food",
      description:
        "After independent lunch time or a pre-arranged meal, return toward central Xi'an for a flexible Old City chapter. Depending on traffic, energy and interests, walk near the Bell and Drum Towers, the Muslim Quarter food lanes or the City Wall exterior. Admission-based experiences are added only when selected.",
      see: "Historic city geometry, market lanes, local food preparation and the living multicultural texture behind Xi'an's Silk Road reputation.",
      do: "Walk with context, pause for an independent snack if desired and choose whether a City Wall or artisan upgrade earns a place in your day.",
      feel: "That Xi'an is not only an archaeological day trip but a city whose historical layers are still visible and lived in.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Private Day Tour Standard",
    title: "One major site, properly prepared and clearly explained.",
    description:
      "A private Terracotta Warriors day earns its value by removing the wrong kind of uncertainty: passport-linked admission, hotel pickup, traffic, what to see inside a large museum and whether a shopping stop has been hidden in the route.",
    items: [
      {
        label: "01 · Hotel-first pickup",
        value: "Your actual Xi'an address is checked before confirmation",
        helper:
          "Airport, railway-station, distant-hotel and unusual return supplements are stated before payment.",
      },
      {
        label: "02 · Passport-linked admission",
        value: "Terracotta Warriors admission is included and arranged for the confirmed guests",
        helper:
          "Names, passport details, date and current reservation requirements must match the final booking information.",
      },
      {
        label: "03 · Expert interpretation",
        value: "The guide connects the pits, Qin history, archaeology and conservation",
        helper:
          "The museum remains public and crowded; good interpretation makes the visit coherent without claiming exclusive access.",
      },
      {
        label: "04 · Honest walking plan",
        value: "The route is adjusted around the people traveling",
        helper:
          "Private transport reduces city logistics but cannot remove museum walking, standing, queues or every stair.",
      },
      {
        label: "05 · No shopping",
        value: "No jade factory, souvenir workshop or commission stop",
        helper:
          "An artisan workshop appears only when you choose the hands-on clay-warrior experience and its price is confirmed separately.",
      },
      {
        label: "06 · Transparent upgrades",
        value: "Lunch, City Wall and clay making remain optional",
        helper:
          "You see what each addition costs and whether it changes the service window before you commit.",
      },
    ],
    note: "Terracotta Warriors admission and museum access follow live reservation, passport, security, capacity and operating rules. Xi'an City Wall, bicycles, workshops and performance venues follow their own weather, age, height, safety and availability conditions. AVIORA confirms the date-specific plan but cannot guarantee empty halls, unrestricted display access or an attraction that closes unexpectedly.",
  },
  highlights: [
    {
      title: "Pit 1 with the scale put into context",
      description:
        "See the famous formation with a guide who explains military order, individual details, excavation and restoration instead of leaving you to decode an immense hall alone.",
      category: "Culture",
      image: pendingImage,
    },
    {
      title: "The quieter pits where the army becomes readable",
      description:
        "Use Pits 2 and 3 to understand cavalry, command, rank and archaeological evidence beyond the best-known panoramic view.",
      category: "Senior-friendly",
      image: pendingImage,
    },
    {
      title: "Xi'an as a living old city, not only a museum transfer",
      description:
        "Finish with a flexible Old City walk around walls, towers, market lanes and food culture, without turning the afternoon into compulsory shopping.",
      category: "Photography",
      image: pendingImage,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Terracotta Army in depth, then Xi'an's living Old City",
      destination: "Xi'an · Lintong · Xi'an",
      summary:
        "Meet your private English-speaking guide and vehicle at the confirmed Xi'an hotel. Travel to the Emperor Qinshihuang's Mausoleum Site Museum, use the included passport-linked admission and explore the principal Terracotta Warriors pits with structured interpretation. After independent lunch time or a selected meal, return toward Xi'an for a flexible Old City walk near the Bell and Drum Towers, Muslim Quarter food lanes or City Wall exterior before a private hotel return. Exact sequencing follows ticket timing, traffic, crowds, weather and the group.",
      image: pendingImage,
      hotel: "No overnight stay required · pickup and return at your Xi'an hotel",
      meals: ["Independent lunch time; selected Xi'an noodle lunch available as an upgrade"],
      transport:
        "Private central-Xi'an hotel pickup and return, with private vehicle and professional driver during the confirmed service window",
      activities: [
        {
          title: "A confirmed Xi'an hotel pickup",
          description:
            "Meet in the hotel lobby or another agreed central address. The final operating message states the pickup time, guide contact, ticket basis and return plan.",
        },
        {
          title: "Passport-linked Terracotta Warriors admission",
          description:
            "Use the included admission arranged for the confirmed travelers. Your guide manages the arrival sequence, security process and practical movement between the principal exhibition areas.",
        },
        {
          title: "Pit 1: scale, formation and restoration",
          description:
            "See the largest formation, compare warrior details and understand how fragments become restored figures without reducing the visit to a panoramic photograph.",
        },
        {
          title: "Pits 2 and 3: cavalry, command and archaeology",
          description:
            "Use the smaller pits and available displays to understand military function, rank, excavation choices and conservation challenges.",
        },
        {
          title: "A flexible Xi'an Old City conclusion",
          description:
            "Return to central Xi'an for a contextual walk selected around the day's timing and your energy, with optional City Wall or clay-artisan experiences only when pre-arranged.",
        },
      ],
      guideNote:
        "Please share passport names exactly as shown, hotel details, child ages, mobility or hearing needs, dietary restrictions and any same-day train or flight. The museum is large and can be crowded; a private guide improves pacing but does not create exclusive access.",
      coordinates: { latitude: 34.3841, longitude: 109.2785 },
    },
  ],
  accommodations: [
    {
      name: "Your Xi'an hotel or confirmed central address",
      destination: "Xi'an",
      description:
        "This is a private day tour, so no overnight stay is included. Service begins and ends at a hotel in Xi'an's main urban districts or another confirmed central location. Airport, railway-station and non-standard pickup requirements are priced before booking.",
      roomStyle: "No overnight stay required",
      highlights: [
        "Hotel-first planning",
        "Confirmed admission",
        "Private return",
        "No hotel change",
      ],
      image: pendingImage,
    },
  ],
  included: [
    "Private pickup and return at a hotel in Xi'an's main urban districts; airport, railway-station, out-of-area and non-standard locations are quoted before booking",
    "Private air-conditioned vehicle with professional driver for the confirmed service window",
    "Private English-speaking guide for the confirmed Terracotta Warriors and Old City day",
    "Terracotta Warriors museum admission for the confirmed travelers",
    "Pre-trip review of hotel address, date, group details, passport-linked ticket information, walking preferences and route priorities",
    "Bottled water in the vehicle and one final operating message with pickup, contacts and the confirmed plan",
    "No compulsory shopping stops, jade factories or commission-based souvenir workshops",
  ],
  excluded: [
    "Lunch, drinks, personal purchases, gratuities, travel insurance and items not expressly listed as included",
    "Xi'an City Wall admission, bicycle rental, clay-warrior making, food tastings, shows and other upgrades unless selected in the written confirmation",
    "Airport or railway-station pickup or drop-off, out-of-area hotels, late-night return or additional vehicle and guide hours unless quoted",
    "Guaranteed access to a specific display, viewing position, workshop, performance or venue affected by reservation, security, weather, maintenance, capacity or operator decisions",
    "Wheelchair, porter, medical care, hearing equipment or accessibility services unless separately requested and confirmed",
  ],
  optionalExperiences: [
    {
      title: "Make your own miniature clay warrior",
      description:
        "After seeing the original army, add a practical clay-warrior session from US$58 per guest with a date-confirmed local host or artisan setting. This is an optional hands-on experience, not a disguised shopping stop; the format and take-home item are confirmed before payment.",
      badges: ["From US$58 pp", "Hands-on", "Host availability"],
      image: pendingImage,
    },
    {
      title: "Selected Xi'an noodle lunch",
      description:
        "Add a pre-arranged local lunch from US$28 per guest, with an approachable fixed menu and dietary review. Drinks and dishes beyond the agreed menu remain separate.",
      badges: ["From US$28 pp", "Dietary needs checked"],
      image: pendingImage,
    },
    {
      title: "Xi'an City Wall admission",
      description:
        "Add City Wall admission from US$15 per guest when the day's timing, weather and walking level make an elevated old-city view worthwhile. The route and available gate are confirmed with the final plan.",
      badges: ["From US$15 pp", "Weather considered"],
      image: pendingImage,
    },
    {
      title: "City Wall bicycle rental",
      description:
        "Add bicycle rental from US$18 per guest after City Wall admission, subject to the operator's current age, height, deposit, weather and safety rules. It is not recommended automatically for every traveler.",
      badges: ["From US$18 pp", "Admission separate", "Rules apply"],
      image: pendingImage,
    },
    {
      title: "Additional private touring time",
      description:
        "Add private guide, driver and vehicle time at US$58 per group for each additional hour, subject to date-specific availability. Use it for a slower museum visit, a longer Old City chapter or a confirmed evening plan.",
      badges: ["US$58 per group/hour", "Subject to availability"],
      image: pendingImage,
    },
  ],
  transportation: {
    title: "One private vehicle from your Xi'an hotel to the museum and back",
    description:
      "The Terracotta Warriors museum lies outside central Xi'an. A private vehicle removes the transfer puzzle and keeps the return connected to your Old City plan. It does not guarantee a fixed travel time through city and Lintong traffic or remove walking inside the public museum.",
    items: [
      {
        label: "Pickup",
        value: "Xi'an hotel lobby or confirmed central address",
        helper:
          "Main urban hotel districts are included; airports, railway stations and distant addresses are checked first.",
      },
      {
        label: "Vehicle",
        value: "Private air-conditioned car or MPV",
        helper:
          "Vehicle size is matched to the party and luggage, then named in the final operating plan.",
      },
      {
        label: "At the museum",
        value: "Walking between public exhibition areas with your private guide",
        helper:
          "Museum shuttles, wheelchairs and other services are used only when available and confirmed for the date.",
      },
      {
        label: "Return",
        value: "Old City chapter and direct return to the confirmed Xi'an address",
        helper:
          "The afternoon route and any approved address change are stated before the day begins.",
      },
    ],
  },
  routeMap: {
    title: "From your Xi'an hotel to the army—and back to the living city",
    description:
      "The practical route begins at your hotel, travels privately to the Terracotta Warriors museum in Lintong, then returns toward Xi'an's Old City before the hotel drop-off. Optional workshops, meals and City Wall access are added only when confirmed.",
    stops: [
      {
        name: "Xi'an hotel pickup",
        days: "Start",
        description: "A confirmed lobby or central-address pickup.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        name: "Terracotta Warriors museum",
        days: "Main visit",
        description:
          "Included passport-linked admission and private interpretation of the principal pits.",
        coordinates: { latitude: 34.3841, longitude: 109.2785 },
      },
      {
        name: "Xi'an Old City",
        days: "Afternoon",
        description: "A flexible cultural walk, with admission-based upgrades shown separately.",
        coordinates: { latitude: 34.261, longitude: 108.942 },
      },
      {
        name: "Xi'an hotel return",
        days: "Finish",
        description: "Private return to the confirmed central address.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
    ],
  },
  gallery: [],
  faqs: [
    {
      question: "What does the US$628 starting price include?",
      answer:
        "It is an indicative private-group starting price for four guests, equivalent to US$157 per guest. It includes pickup and return within Xi'an's main urban hotel districts, a private air-conditioned vehicle and driver during the confirmed service window, a private English-speaking guide, Terracotta Warriors museum admission, a flexible central Xi'an Old City walk, bottled water and no compulsory shopping stops. Lunch, City Wall admission, clay making and other upgrades are not included.",
    },
    {
      question: "What is the published price for a smaller or larger group?",
      answer:
        "Outside major public holidays and unusual pickup requirements, the indicative private-group prices are: one guest from US$438; two guests from US$498 total; three guests from US$568 total; four guests from US$628 total; five guests from US$745 total; and six guests from US$870 total. Six guests may require a larger vehicle, which is checked before confirmation. Optional experiences remain separate.",
    },
    {
      question: "Is this a private tour or a shared group tour?",
      answer:
        "It is private for your booking party, with your own vehicle, driver and English-speaking guide during the confirmed service window. The Terracotta Warriors museum and Xi'an's Old City remain public places, so other visitors will be present.",
    },
    {
      question: "Are Terracotta Warriors tickets included?",
      answer:
        "Yes. Standard museum admission for the confirmed travelers is included. Entry is linked to the traveler's identity and current reservation rules, so names and passport details must be supplied accurately through the secure booking process. A requested date remains subject to ticket and supplier confirmation until confirmed in writing.",
    },
    {
      question: "Does the tour visit a jade factory or souvenir workshop?",
      answer:
        "No compulsory jade factory, souvenir workshop or commission-based sales stop is included. The optional clay-warrior session is a paid hands-on cultural experience selected by you, with its format and price confirmed in advance; it is not inserted as a shopping detour.",
    },
    {
      question: "Is lunch included?",
      answer:
        "No. Independent lunch time keeps the base product clear. You can ask the guide for a practical suggestion or add the pre-arranged Xi'an noodle lunch from US$28 per guest. The fixed menu and dietary considerations are checked before booking; extra dishes and drinks remain separate.",
    },
    {
      question: "Can you collect us from Xi'an airport or Xi'an North Railway Station?",
      answer:
        "Yes when the arrival or departure timing is workable, but these locations are not included in the central-hotel price. Xi'an North Railway Station is quoted from US$48 per group each way and Xi'an Xianyang International Airport from US$88 per group each way, subject to the date, time, luggage, waiting requirements and final route.",
    },
    {
      question: "Can children or older travelers take this tour?",
      answer:
        "Often yes. Private transport and a private guide allow pauses and a shorter Old City chapter, but the museum still involves considerable walking, standing, crowds and large exhibition halls. Share ages, mobility, hearing, stroller or wheelchair needs before booking so we can state the responsible adaptations and limitations.",
    },
    {
      question: "How quickly can you confirm my date?",
      answer:
        "Send your date, group size and Xi'an hotel through the form or WhatsApp. During China business hours, we aim to reply within one hour with an availability check, practical pickup plan and any relevant supplement. A booking is confirmed only after the written proposal, required payment, tickets and supplier arrangements are confirmed in writing.",
    },
  ],
  related: {
    tours: [
      {
        title: "Xi'an & Beijing: Warriors, Walls and Imperial Capitals",
        description:
          "A six-day private journey linking the Terracotta Army, Xi'an's living heritage, high-speed rail, imperial Beijing and the Great Wall.",
        tags: ["Private", "History", "High-speed rail"],
        image: pendingImage,
        route: "Xi'an · Beijing",
        duration: "6 days / 5 nights",
        href: "/tours/xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      },
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A premium 12-day private China journey with three full Xi'an nights and time to understand the Terracotta Army without a rushed connection.",
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
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Xi%27an%20Terracotta%20Warriors%20Day%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20check%20a%20private%20Xi%27an%20Terracotta%20Warriors%20day%20tour.%0A%0ADate%3A%0ANumber%20of%20guests%20and%20ages%20if%20children%3A%0AXi%27an%20hotel%20or%20pickup%20address%3A%0AAny%20airport%20or%20railway%20connection%3A%0AOptional%20experiences%20of%20interest%3A%0AAny%20mobility%2C%20hearing%2C%20dietary%20or%20other%20considerations%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20check%20a%20private%20Xi%27an%20Terracotta%20Warriors%20day%20tour.%20My%20date%2C%20group%20size%20and%20Xi%27an%20hotel%20are%3A",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I would like to check a private Xi'an Terracotta Warriors day tour from my Xi'an hotel.",
  },
};
