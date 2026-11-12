import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
import type { Tour } from "@/types/tour";
import { firstChinaAsset } from "@/content/tours/assets";

// Single authored source; no legacy senior-tour overlay or independent price block.
export const firstChina10DayTour: Tour = {
  slug: "beijing-xian-shanghai-private-10-day-tour",
  publishedAt: "2026-08-21",
  updatedAt: "2026-11-11",
  visualStatus: "ready",
  title: "10-Day Private Tour of Beijing, Xi'an and Shanghai",
  subtitle:
    "Your first trip to China, privately guided through Beijing, Xi'an and Shanghai, with nine hotel nights, local guides, high-speed rail and a domestic flight. Selected landmarks take priority; meals beyond breakfast and optional experiences are quoted separately.",
  duration: "10 Days / 9 Nights",
  durationIso: "P10D",
  route: "Beijing · Xi'an · Shanghai",
  styles: ["First-time China", "Culture", "Photography"],
  hero: {
    eyebrow: "Your first China trip · Private guides · 3 cities · 9 nights",
    image: firstChinaAsset.beijingGreatWallSunriseHero,
    primary: { label: "View the Itinerary", href: "#itinerary" },
    secondary: { label: "Request My Proposal", href: "#enquiry" },
  },
  seo: {
    title: "10-Day Private Tour of Beijing, Xi'an and Shanghai",
    description:
      "Explore Beijing, Xi'an and Shanghai on a 10-day private China tour with nine hotel nights, local guides, rail and a domestic flight. Request a personalized quote.",
    preserveCopy: true,
    keywords: [
      "Beijing Xian Shanghai 10 day private tour",
      "10 day China itinerary first time visitors",
      "private China tour with English speaking guides",
      "Beijing Xian Shanghai tour cost for two",
      "10 or 12 days in China itinerary",
    ],
  },
  overview: {
    pitch:
      "Explore Beijing's imperial palaces, meet the Terracotta Army outside Xi'an, and discover Shanghai's riverfront and neighborhoods. Each major landmark has its own day, with time to ask questions and take a break. The two intercity journeys have dedicated travel days, and your final full day in Shanghai is yours to spend independently or add an experience of your choice.",
    answer:
      "A ten-day private journey from Beijing through Xi’an to Shanghai, with nine hotel nights, breakfast, listed private sightseeing and transfers, Beijing–Xi’an rail and a Xi’an–Shanghai flight. Visit the Forbidden City, Mutianyu and Terracotta Army, then explore Shanghai. Day 9 is independent, without a scheduled guide or vehicle. International flights, lunches, dinners and optional experiences cost extra. Hotels, transport class and reservations are confirmed in writing.",
    practicalities: [
      {
        label: "Duration and nights",
        value:
          "10 days / 9 nights: 4 nights in Beijing, 2 in Xi'an and 3 in Shanghai. International travel before arrival and after departure is outside these ten days.",
      },
      {
        label: "Route and gateways",
        value:
          "Arrive in Beijing and depart from Shanghai, with two hotel changes. International flights are not included; ask about flying into Beijing and home from Shanghai.",
      },
      {
        label: "Private service",
        value:
          "Local private guides in each city, dedicated drivers and vehicles for the scheduled sightseeing and transfers. Public sights, rail and flights are shared; a single guide traveling throughout is not included.",
      },
      {
        label: "Guide language",
        value:
          "Request English-speaking guides or another available language. We confirm guide availability and language in each city before booking. If you would like an archaeology specialist, please ask so we can check availability and cost.",
      },
      {
        label: "Hotels and rooms",
        value:
          "Nine nights in selected centrally located 4- or 5-star hotels. The proposal names each property, room category, bed configuration, number of guests per room and breakfast arrangements; named brands and connecting rooms are not guaranteed.",
      },
      {
        label: "Intercity transport",
        value:
          "The itinerary includes Beijing–Xi'an high-speed rail and a Xi'an–Shanghai domestic flight, with local transfers. Your proposal specifies the train and flight, travel class, baggage allowance and fare conditions before you book.",
      },
      {
        label: "Core visits",
        value:
          "Standard admission for the Forbidden City, Mutianyu Great Wall, the selected Temple of Heaven or Summer Palace visit and the Terracotta Warriors museum. Admission is subject to successful reservation. Visits use regular visitor entrances and security procedures.",
      },
      {
        label: "Great Wall access",
        value:
          "The planned Mutianyu visit includes round-trip enclosed cable-car tickets, subject to operation. You will still encounter steps, slopes and uneven paving on the paths and ramparts.",
      },
      {
        label: "Meals and choices",
        value:
          "Hotel breakfasts are included on Days 2–10. Lunches, dinners, paid workshops, river cruises and the Day 9 choice activity are separate unless expressly added to the proposal.",
      },
      {
        label: "Walking and suitability",
        value:
          "Designed for first-time visitors comfortable with walking, steps and standing at large public sites. Walking distances and daily finish times vary with the route and conditions. Share mobility and heat concerns before booking.",
      },
      {
        label: "Price basis",
        value:
          "A personalized quote for your group, dates and rooms. Room sharing, single occupancy, children, travel dates and chosen services affect the quote.",
      },
      {
        label: "Availability and entry",
        value:
          "A proposed private itinerary, not a confirmed departure. Reservations may require day-order changes. Check the official entry requirements for your passport and full travel route; the tour length alone does not establish visa-free eligibility.",
      },
      {
        label: "Starting-price basis",
        value: getPublishedPriceDisclosure("beijing-xian-shanghai-private-10-day-tour"),
      },
    ],
    facts: [
      {
        label: "Duration",
        value: "10 days / 9 nights",
        helper: "Beijing 4 nights · Xi'an 2 nights · Shanghai 3 nights",
      },
      {
        label: "Suitable For",
        value:
          "First-time visitors with limited time who are comfortable with walking and standing",
      },
      {
        label: "Pacing",
        value: "Focused sightseeing, two intercity travel days and one free choice day",
      },
      {
        label: "Hotels",
        value:
          "Selected central 4- or 5-star hotels; actual properties and rooms confirmed in the proposal",
      },
    ],
  },
  comparison: {
    title: "10 or 12 days in Beijing, Xi'an and Shanghai?",
    intro:
      "Choose by available time and recovery needs. These are proposed route structures; actual services are confirmed for your dates.",
    columns: ["Decision", "10-day first visit", "12-day Easier Pace"],
    rows: [
      [
        "Main reason to choose",
        "A focused classic route when time is limited",
        "More time for recovery and personal choices",
      ],
      ["Hotel nights", "Beijing 4 · Xi'an 2 · Shanghai 3", "Beijing 5 · Xi'an 3 · Shanghai 3"],
      [
        "Main landmarks",
        "Selected Beijing sights, Mutianyu, Terracotta Warriors and Shanghai",
        "The same three-city framework with additional time in Beijing and Xi'an",
      ],
      [
        "Free time and private service",
        "Day 9 is free time; guided options are quoted separately",
        "Protected choice time; the selected rest or touring services need confirmation",
      ],
      [
        "Walking",
        "Steps, standing and large sites; personal review required",
        "More time for breaks and lighter days; walking and access still need an individual review",
      ],
    ],
    href: "/tours/china-at-an-easier-pace-12-day-private-tour",
    linkLabel: "Explore the 12-day Easier Pace route",
  },
  planningSupport: {
    eyebrow: "Why this route",
    title: "Three classic cities, with the choices stated before booking.",
    description:
      "We plan this journey for your group, with your dates, hotel preferences, guide language and walking needs in mind. Before you book, your written proposal sets out the services, total price and reservation conditions. An inquiry does not reserve rooms, transport or tickets.",
    items: [
      {
        label: "One main visit",
        value: "Give major sights their own time",
        helper:
          "The Forbidden City and Great Wall are separate days; Temple of Heaven and Summer Palace are alternatives.",
      },
      {
        label: "Two city moves",
        value: "Rail to Xi'an, then fly to Shanghai",
        helper:
          "Schedules and ticket classes are checked around the date and total door-to-door timing.",
      },
      {
        label: "Local interpretation",
        value: "Private guides in each city",
        helper:
          "Request the language you need. A guide accompanying you between cities is available by separate arrangement.",
      },
      {
        label: "A real choice day",
        value: "Day 9 is yours to spend independently",
        helper:
          "A guide, vehicle, workshop or Zhujiajiao visit is added only if selected and quoted.",
      },
    ],
    note: "For more recovery space, compare the 12-day Easier Pace route. For child-focused activities or pandas, compare the dedicated family and four-city journeys.",
  },
  highlights: [
    {
      title: "Mutianyu with realistic access planning",
      description:
        "A dedicated Great Wall day with round-trip enclosed cable-car tickets planned and a walking route suited to your group. Steps and uneven paving remain.",
      category: "Culture",
      image: firstChinaAsset.beijingGreatWallSolo,
    },
    {
      title: "The Terracotta Army with time to understand it",
      description:
        "A guided public museum visit focused on the main pits when open, without a compulsory banquet, factory or shopping stop.",
      category: "Culture",
      image: firstChinaAsset.xianTerracottaPit,
    },
    {
      title: "Shanghai with room to choose",
      description:
        "A guided riverfront and neighborhood day, followed by a free day or one separately quoted experience.",
      category: "Culture",
      image: firstChinaAsset.shanghaiPudongSkyline,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Beijing",
      destination: "Beijing",
      summary:
        "Keep the first day for arrival, hotel check-in and recovery. Sightseeing is not scheduled on your arrival day.",
      meals: ["No included meal on arrival day"],
      transport: "Private airport-to-hotel transfer",
      activities: [
        {
          time: "Arrival",
          title: "Meet your local arrival team",
          description:
            "The meeting point and contact are confirmed for Beijing Capital (PEK) or Daxing (PKX). Your meeting point is after immigration and baggage collection, in the public arrivals area.",
        },
        {
          time: "After check-in",
          title: "Rest and settle in",
          description:
            "Standard hotel check-in applies; early access to a room is a separate request. Ask for a short practical introduction if arrival timing and agreed guide hours permit.",
        },
      ],
      guideNote:
        "Let us know your arrival airport and flight time so we can plan the pickup. Early check-in is subject to hotel availability.",
      hotel: "Beijing · night 1 of 4",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
      image: firstChinaAsset.beijingTempleOfHeavenCorridor,
    },
    {
      day: 2,
      title: "The Forbidden City as the main visit",
      destination: "Beijing",
      summary:
        "Make the palace the main visit of the day, with a shorter surrounding walk only if the group has energy. Entry and the Beijing day order depend on confirmed reservations.",
      meals: ["Hotel breakfast"],
      transport: "Private vehicle and local guide",
      activities: [
        {
          time: "Morning / reserved entry time",
          title: "Palace halls and imperial planning",
          description:
            "Follow a selected public route with your guide. Expect substantial walking and standing; this product includes no internal sightseeing cart, private entrance or skip-the-line access.",
        },
        {
          time: "After the palace",
          title: "A short walk or an earlier finish",
          description:
            "Agree a short neighborhood walk if useful. Jingshan's uphill viewpoint is optional and not needed to complete the palace day; paid additions are separately confirmed.",
        },
      ],
      guideNote:
        "We may reorder the Beijing days to fit confirmed palace reservations. Wear comfortable shoes for the long paved courtyards.",
      hotel: "Beijing · night 2 of 4",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
      image: firstChinaAsset.beijingForbiddenCityLion,
    },
    {
      day: 3,
      title: "Mutianyu Great Wall",
      destination: "Beijing",
      summary:
        "Allow a dedicated day for the road journey and the Great Wall. The enclosed cable car reduces the climb but does not remove steps, slopes or uneven surfaces.",
      meals: ["Hotel breakfast"],
      transport: "Private vehicle and local guide",
      activities: [
        {
          time: "Morning",
          title: "Drive to Mutianyu and use the enclosed cable car",
          description:
            "Standard entry and round-trip enclosed cable-car tickets are planned, subject to operating and safety decisions. Vehicle access and any required local shuttle arrangements are confirmed for the date.",
        },
        {
          time: "On the wall / afternoon return",
          title: "Choose a manageable wall section",
          description:
            "Choose a comfortable walking route with your guide, without having to reach a particular watchtower. Lunch is separate. A chairlift and toboggan or another Great Wall section requires a revised itinerary and quote.",
        },
      ],
      guideNote:
        "Tell us about concerns with steps or heights before booking. Cable-car operation depends on weather, maintenance and safety conditions.",
      hotel: "Beijing · night 3 of 4",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
      image: firstChinaAsset.beijingGreatWallSolo,
    },
    {
      day: 4,
      title: "Choose one more Beijing perspective",
      destination: "Beijing",
      summary:
        "Choose Temple of Heaven or Summer Palace before booking. One is the main included visit; the route does not promise both plus a workshop in the same day.",
      meals: ["Hotel breakfast"],
      transport: "Private vehicle and local guide",
      activities: [
        {
          time: "Main visit",
          title: "Temple of Heaven or Summer Palace",
          description:
            "The default is a selected Temple of Heaven visit. Summer Palace can replace it in the written plan. The proposal specifies admission coverage; extra exhibitions and boats are not assumed.",
        },
        {
          time: "Remaining time",
          title: "Keep room for a pause",
          description:
            "A short street or park walk can follow if time and energy permit. A hosted tea, pedicab, home visit or dumpling workshop is an optional, separately quoted replacement or extension.",
        },
      ],
      guideNote:
        "Choose the Temple of Heaven or the Summer Palace before booking so your proposal includes the right admission and route.",
      hotel: "Beijing · night 4 of 4",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
      image: firstChinaAsset.beijingTempleOfHeavenReflection,
    },
    {
      day: 5,
      title: "High-speed rail from Beijing to Xi'an",
      destination: "Xi'an",
      summary:
        "Use the day for the station transfer, train journey and arrival in Xi'an. A transfer day consumes time and energy; no paid museum or workshop is built into the arrival afternoon.",
      meals: ["Hotel breakfast"],
      transport: "Private station transfers and booked high-speed rail",
      activities: [
        {
          time: "At your scheduled train time",
          title: "Travel between cities",
          description:
            "Rail tickets and class are confirmed for the date. Allow for station transfers, security, boarding and arrival beyond the train time; no fixed door-to-door duration is promised.",
        },
        {
          time: "After arrival",
          title: "Check in and recover",
          description:
            "A different local team meets you at the agreed public arrival point. Travelers may need to handle luggage through security and onto trains; porters or a traveling escort require separate confirmation.",
        },
      ],
      guideNote:
        "Keep your booking identification, medication and valuables with you. Tell us in advance if you need help lifting or carrying bags.",
      hotel: "Xi'an · night 1 of 2",
      coordinates: { latitude: 34.3416, longitude: 108.9398 },
      image: firstChinaAsset.xianTerracottaPit,
    },
    {
      day: 6,
      title: "The Terracotta Warriors",
      destination: "Xi'an",
      summary:
        "Make the museum the day's priority, with time for the main excavation halls and questions. A short city walk can follow when the group is comfortable.",
      meals: ["Hotel breakfast"],
      transport: "Private vehicle and local guide",
      activities: [
        {
          time: "Museum visit",
          title: "The Terracotta Army in Lintong",
          description:
            "Visit Pits 1, 2 and 3 when open, using standard museum admission. These are public exhibition areas; no archaeologist, priority shuttle, private gallery or burial-chamber access is included.",
        },
        {
          time: "After lunch / return",
          title: "Choose a short Old City walk or rest",
          description:
            "Lunch is separate. If time permits, choose a brief exterior walk near the city wall or old-town lanes. City Wall entry, cycling, a dumpling banquet and clay-warrior making are optional, separately quoted.",
        },
      ],
      guideNote:
        "Leave the afternoon flexible after the museum. City Wall entry and other paid additions need to be arranged separately.",
      hotel: "Xi'an · night 2 of 2",
      coordinates: { latitude: 34.3416, longitude: 108.9398 },
      image: firstChinaAsset.xianTerracottaPortrait,
    },
    {
      day: 7,
      title: "Fly from Xi'an to Shanghai",
      destination: "Shanghai",
      summary:
        "Fly from Xi'an to Shanghai, then transfer to your hotel. Keep the evening open rather than combining a travel day with a mandatory skyline cruise.",
      meals: ["Hotel breakfast"],
      transport: "Private airport transfers and booked domestic flight",
      activities: [
        {
          time: "At your scheduled flight time",
          title: "Leave Xi'an and fly to Shanghai",
          description:
            "The proposal states the flight, cabin, baggage allowance, fare conditions and Shanghai arrival airport. Flight availability and total door-to-door time are checked for your dates.",
        },
        {
          time: "After check-in",
          title: "Rest or explore independently",
          description:
            "If you would like an evening walk on the Bund or a river cruise, ask us to quote it separately. We will check the timing against your flight and allow for possible delays.",
        },
      ],
      guideNote:
        "Check the baggage allowance on your domestic ticket; it may differ from your international allowance.",
      hotel: "Shanghai · night 1 of 3",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
      image: firstChinaAsset.shanghaiHuangpuSunset,
    },
    {
      day: 8,
      title: "Shanghai's riverfront and neighborhoods",
      destination: "Shanghai",
      summary:
        "Explore the Bund and selected former French Concession streets with your local guide, connecting architecture and everyday city life. Leave room for lunch and questions.",
      meals: ["Hotel breakfast"],
      transport: "Private vehicle and local guide",
      activities: [
        {
          time: "Morning",
          title: "The Bund and the city across the river",
          description:
            "Explore the historic waterfront on foot and take in the Pudong skyline across the river. Observation-deck tickets and river cruises are available at additional cost.",
        },
        {
          time: "Afternoon",
          title: "A neighborhood walk at your pace",
          description:
            "Follow selected former French Concession lanes and choose a lunch stop at your own expense. Yu Garden interior, Shanghai Tower and guided tastings require a separately confirmed replacement or extension.",
        },
      ],
      guideNote:
        "Let your guide know whether architecture, street life or food interests you most so the neighborhood walk has a clear focus.",
      hotel: "Shanghai · night 2 of 3",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
      image: firstChinaAsset.shanghaiBicycleRide,
    },
    {
      day: 9,
      title: "A Shanghai choice day",
      destination: "Shanghai",
      summary:
        "Choose a full rest day, a separately quoted city experience or a separately quoted Zhujiajiao excursion. Day 9 is free time, with no private guide or vehicle included unless you book an additional activity.",
      meals: ["Hotel breakfast"],
      transport: "Free day; private guide and vehicle available at additional cost",
      activities: [
        {
          time: "Your chosen plan",
          title: "Rest or book one main activity",
          description:
            "Explore independently, or ask us to check an activity for your date. Guide hours, transport, admission and any workshop or boat are priced explicitly for the option selected.",
        },
        {
          time: "Before the final evening",
          title: "Prepare for departure",
          description:
            "Confirm the next day's airport, pickup and flight deadline. Do not assume a choice day can absorb any missed reservation without checking tickets and staff availability.",
        },
      ],
      guideNote:
        "If you would like a guided activity, request it before booking. Otherwise, enjoy an independent day with no scheduled private guide or vehicle.",
      hotel: "Shanghai · night 3 of 3",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
      image: firstChinaAsset.shanghaiBundNight,
    },
    {
      day: 10,
      title: "Depart from Shanghai",
      destination: "Shanghai",
      summary:
        "Breakfast and the agreed airport transfer complete the journey. No sightseeing is promised before departure; the actual flight determines the schedule.",
      meals: ["Hotel breakfast"],
      transport: "Private departure-airport transfer",
      activities: [
        {
          time: "Flight-dependent",
          title: "Transfer to the correct airport",
          description:
            "Confirm Pudong (PVG) or Hongqiao (SHA), terminal and flight details. Public check-in, security and immigration apply; no airside or VIP escort is included.",
        },
        {
          time: "Departure",
          title: "Continue your onward journey",
          description:
            "International flights and travel after the tour are separate. Extra touring or a late checkout requires a separate availability and price check.",
        },
      ],
      guideNote:
        "We arrange pickup around the confirmed airport, terminal and flight time. Extra touring and late checkout need separate confirmation.",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
      image: firstChinaAsset.shanghaiPudongSkyline,
    },
  ],
  accommodations: [
    {
      name: "Beijing · 4 nights in a selected central hotel",
      destination: "Beijing",
      description:
        "A selected central four- or five-star property. The written proposal names the hotel, room category, bed configuration, number of guests per room and breakfast arrangements before booking.",
      roomStyle: "Double, twin or single occupancy quoted for your party",
      highlights: [
        "Hotel availability checked for your dates",
        "Room type stated",
        "Breakfast arrangements specified",
      ],
      image: firstChinaAsset.beijingTempleOfHeavenMorning,
    },
    {
      name: "Xi'an · 2 nights in a selected central hotel",
      destination: "Xi'an",
      description:
        "A selected central four- or five-star property. The written proposal names the hotel, room category, bed configuration, number of guests per room and breakfast arrangements before booking.",
      roomStyle: "Double, twin or single occupancy quoted for your party",
      highlights: [
        "Hotel availability checked for your dates",
        "Room type stated",
        "Breakfast arrangements specified",
      ],
      image: firstChinaAsset.xianTerracottaPit,
    },
    {
      name: "Shanghai · 3 nights in a selected central hotel",
      destination: "Shanghai",
      description:
        "A selected central four- or five-star property. The written proposal names the hotel, room category, bed configuration, number of guests per room and breakfast arrangements before booking.",
      roomStyle: "Double, twin or single occupancy quoted for your party",
      highlights: [
        "Hotel availability checked for your dates",
        "Room type stated",
        "Breakfast arrangements specified",
      ],
      image: firstChinaAsset.shanghaiPudongSkyline,
    },
  ],
  included: [
    "Nine hotel nights: Beijing 4, Xi'an 2 and Shanghai 3; confirmed hotels, rooms and occupancy stated in the proposal",
    "Hotel breakfasts on Days 2–10, as confirmed with the selected hotels",
    "Local private guides and separate drivers with vehicles on Days 2–4, 6 and 8 during the written service windows",
    "Agreed arrival and departure airport transfers and the listed local station and domestic-airport transfers",
    "Beijing–Xi'an high-speed rail and a Xi'an–Shanghai domestic flight; actual class, baggage and ticket conditions stated before booking",
    "Standard admission for the Forbidden City, Mutianyu and its planned round-trip enclosed cable car, one selected Temple of Heaven or Summer Palace visit, and the Terracotta Warriors museum, subject to reservation and operation",
    "Pre-trip itinerary coordination and operating contacts; no compulsory shopping stops",
  ],
  excluded: [
    "International flights, visas or entry-document fees and travel insurance",
    "Lunches, dinners, drinks and meals beyond the confirmed hotel breakfasts",
    "Day 9 private guide, vehicle and paid activities unless selected and quoted",
    "City Wall admission, Huangpu River cruise, Shanghai Tower, Yu Garden interior, workshops, hosted meals, tea services and other unlisted paid activities",
    "A guide traveling between cities, station porters, guaranteed luggage carrying, specialist medical services or accessibility equipment unless separately confirmed",
    "VIP or airside access, private attraction areas, queue bypass, private boats and guaranteed step-free routes",
    "Hotel upgrades, single-room or extra-bed supplements, early check-in, late checkout, gratuities, personal expenses and additional service hours unless included in the quote",
  ],
  optionalExperiences: [
    {
      title: "Day 9: city experience or Zhujiajiao",
      description:
        "Choose one separately quoted option. The written plan specifies guiding, vehicle hours, tickets and any boat or workshop; otherwise Day 9 remains independent free time.",
      badges: ["Choose before booking"],
      image: firstChinaAsset.shanghaiMarketVisit,
    },
    {
      title: "A hosted meal or cultural workshop",
      description:
        "Ask us to arrange a hosted meal, calligraphy session, clay workshop or another cultural activity, subject to availability. It may replace an existing short walk or require extra service hours.",
      badges: ["Host and scope confirmed"],
      image: firstChinaAsset.xianTerracottaPit,
    },
    {
      title: "Hotel or transport-class upgrade",
      description:
        "Request a different hotel, room, rail or air class. Availability, baggage and fare conditions must be checked; no brand or premium class is assumed.",
      badges: ["Separately quoted"],
      image: firstChinaAsset.shanghaiPudongCoupleNight,
    },
  ],
  transportation: {
    title: "By train to Xi’an, then by air to Shanghai",
    description:
      "The itinerary uses rail from Beijing to Xi'an and a domestic flight to Shanghai. Final schedules and classes are chosen around the actual dates; trains and flights are public services.",
    items: [
      {
        label: "Beijing to Xi'an",
        value: "High-speed rail",
        helper:
          "Transfers to and from the stations are included. Your proposal specifies the train, travel class and baggage allowance.",
      },
      {
        label: "Xi'an to Shanghai",
        value: "Domestic flight",
        helper:
          "Transfers to and from the airports are included. Your proposal specifies the flight, cabin, baggage allowance and fare conditions.",
      },
      {
        label: "Road service",
        value: "Private vehicles for listed touring and transfers",
        helper:
          "Vehicle size, luggage capacity and hours are stated; no specific brand or standby vehicle all day is promised.",
      },
      {
        label: "Luggage and handover",
        value: "Planned local assistance",
        helper:
          "Carrying through security, platforms and train boarding may remain your responsibility; porters require confirmation.",
      },
    ],
  },
  routeMap: {
    title: "Beijing 4 nights · Xi'an 2 nights · Shanghai 3 nights",
    description:
      "Two hotel changes connect three cities. Arrival, departure and the two intercity moves are counted within the ten days.",
    stops: [
      {
        name: "Beijing",
        days: "Days 1–4 · 4 nights",
        description: "Arrival, palace, Great Wall and one selected temple or palace visit.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        name: "Xi'an",
        days: "Days 5–6 · 2 nights",
        description: "Rail arrival and a dedicated Terracotta Army day.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        name: "Shanghai",
        days: "Days 7–10 · 3 nights",
        description: "Flight arrival, guided city day, free choice day and departure.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
    ],
  },
  gallery: [
    firstChinaAsset.beijingGreatWallGroup,
    firstChinaAsset.beijingForbiddenCityLion,
    firstChinaAsset.beijingTempleOfHeavenReflection,
    firstChinaAsset.xianTerracottaPit,
    firstChinaAsset.shanghaiPudongCoupleNight,
    firstChinaAsset.shanghaiYuyuanGroup,
  ],
  faqLimit: 20,
  faqs: [
    {
      question: "Is 10 days enough for Beijing, Xi'an and Shanghai?",
      answer:
        "Yes for a focused first visit, with arrival and departure counted within the ten days. The proposed route has four Beijing nights, two Xi'an nights and three Shanghai nights. It covers selected major sights rather than every attraction. Two intercity moves take substantial time, so this is not ten complete sightseeing days.",
    },
    {
      question: "Should we choose the 10-day or 12-day Beijing, Xi'an and Shanghai tour?",
      answer:
        "Choose ten days when your time is limited and you are comfortable with the planned walking and two travel days. The 12-day China at an Easier Pace route uses five Beijing nights, three Xi'an nights and three Shanghai nights, adding time in Beijing and Xi'an for recovery and choices. It is not a promise of step-free access. Both routes need individual walking and reservation checks.",
    },
    {
      question: "How much does this 10-day private China tour cost for two people or a family?",
      answer: getPublishedPriceDisclosure("beijing-xian-shanghai-private-10-day-tour"),
    },
    {
      question: "Which hotels and room types are included?",
      answer:
        "The plan uses selected centrally located four- or five-star hotels, not a guaranteed hotel brand. Your proposal names the property, room category, double or twin beds, occupancy and breakfast basis in each city. Single rooms, extra beds, family rooms and connecting rooms require specific quotes; connecting rooms and early check-in are not guaranteed.",
    },
    {
      question: "Do we have English-speaking guides and the same guide throughout China?",
      answer:
        "Request English-speaking guides or another available language. The standard format uses a local private guide in each city, separate drivers and one coordinating team. A guide traveling with you between cities is not included. Language, service days, meeting points and hours are confirmed before booking; an archaeologist or specialist researcher is a separate request.",
    },
    {
      question: "Is the tour private, and are there compulsory shopping stops?",
      answer:
        "Your agreed guiding and road transport are private for your party, with no compulsory shopping stops. Hotels, attractions, cable cars, stations, trains and flights are shared public services unless the proposal expressly states otherwise. This is not a fixed group departure, a private train or exclusive access to a sight.",
    },
    {
      question: "Do we take a train or a flight between the cities?",
      answer:
        "The itinerary uses high-speed rail from Beijing to Xi'an and a domestic flight from Xi'an to Shanghai. The latter avoids committing the day to a long rail sector, though flight schedules and door-to-door timing must be checked. Exact trains, flights, class, baggage and fare conditions are confirmed before booking. Replacing a sector changes the itinerary and quote.",
    },
    {
      question: "Will someone carry all our luggage at stations and airports?",
      answer:
        "Not automatically. Local transfers and handover planning are included, but travelers may need to carry or wheel bags through security, along platforms and onto the train. State bag sizes, quantities and any lifting limitations. Porters, equipment or a traveling escort are separately checked services, not a guaranteed luggage-free journey. Keep passports, medication and valuables with you.",
    },
    {
      question: "Are the Forbidden City and Terracotta Warriors tickets guaranteed?",
      answer:
        "An inquiry does not reserve tickets. The plan includes standard admission subject to successful booking. We check ticket-release dates, required identification, closures and entry procedures for your visit; Beijing days may be reordered. If a core visit cannot be reserved, the alternative and any price effect must be agreed rather than treated as identical. The tour does not include a VIP entrance, an internal palace sightseeing cart or skip-the-line access.",
    },
    {
      question: "Does the Mutianyu cable car mean there are no stairs at the Great Wall?",
      answer:
        "No. The planned round-trip enclosed cable car reduces part of the ascent, but access paths and wall sections still include steps, slopes and uneven surfaces. Weather, safety or maintenance can stop operation. We discuss a suitable walking route and alternatives with you before booking; a chairlift and toboggan or another wall section is a different arrangement.",
    },
    {
      question: "Is the 10-day route suitable for older parents, children or wheelchair users?",
      answer:
        "It may work when the actual travelers are comfortable with the planned demands. Large museums, palace grounds, stations and the Great Wall involve walking, standing and steps. Walking distances and finish times vary, and the route is not step-free throughout. Share each person's limits and room needs; the 12-day route offers more recovery time, and the family route may better fit child-focused activities.",
    },
    {
      question: "Are meals, river cruises and cultural workshops included?",
      answer:
        "The itinerary includes hotel breakfasts on Days 2–10. Lunches, dinners, drinks, dumpling banquets, tea services, craft workshops and Huangpu River cruises are separate unless expressly added to your written proposal. Tell us specific dietary needs; a restaurant's ability to provide allergy-safe, gluten-free or verified halal food must be checked, not assumed.",
    },
    {
      question: "What is included on Day 9: rest, Shanghai sightseeing or Zhujiajiao?",
      answer:
        "Day 9 is free for rest or independent exploration, with no scheduled private guide, vehicle or paid activity. You can request one separately quoted city experience or Zhujiajiao excursion. The proposal states the guide hours, vehicle, admission, boat or workshop actually selected. If you want to move a booked activity to this day, we first check ticket and staff availability and any change fees.",
    },
    {
      question: "When is the best time for this three-city China itinerary?",
      answer:
        "Spring and autumn often offer more comfortable sightseeing conditions, but conditions vary across the cities. Summer can be hot and humid; winter in Beijing can be cold. Public holidays can affect crowds, ticket supply and prices. Check your actual dates before selecting hotels and transport rather than assuming one month guarantees good weather or quiet sights.",
    },
    {
      question:
        "Should we fly into Beijing and out of Shanghai, and are airport transfers included?",
      answer:
        "That is the proposed route direction. Agreed arrival and departure transfers and the listed transfers for domestic trains and flights are included. Confirm PEK or PKX in Beijing and PVG or SHA in Shanghai, plus terminals and flight times. International flights, extra out-of-area transfers and added service hours are separate. An early arrival does not guarantee immediate room access.",
    },
    {
      question: "Can we add Chengdu pandas, or reverse the route?",
      answer:
        "Yes. We can review the route and prepare a revised quote with the necessary transport and hotel nights. Pandas are not included in the three-city itinerary. The published 12-day Shanghai–Chengdu–Xi'an–Beijing route is a useful alternative; families can also compare the dedicated 12-day panda journey. Reversing the route requires new ticket, gateway and timing checks rather than simply reversing the day numbers.",
    },
    {
      question: "Does a 10-day itinerary qualify us for visa-free entry or transit?",
      answer:
        "Not by itself. Eligibility depends on passport, entry policy, route, permitted areas, onward travel and your dates. Check current official immigration and consular requirements before booking non-refundable travel. We can provide itinerary information, but a ten-day tour is not proof of eligibility for a particular transit or visa-free policy.",
    },
    {
      question: "How do we book, and what happens if a service changes?",
      answer:
        "Send your dates, party and child ages, room needs, guide language, walking and dietary requirements, gateways and any fixed commitments. We check feasibility and supplier availability, then state the proposed services, total, payment schedule and cancellation terms. Necessary ticket identity details are collected later through the agreed channel; initial inquiry does not require passport numbers. Material changes and alternatives are reviewed under the written terms, and submission alone does not reserve inventory.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "12-Day Private China Tour at an Easier Pace",
        description:
          "Add one Beijing night and one Xi’an night for more recovery time, keeping the same three hotel bases.",
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
      {
        title: "12-Day Private China Tour: Shanghai to Beijing",
        description:
          "Add Chengdu and Dujiangyan panda observation in a twelve-day Shanghai-to-Beijing journey.",
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
      {
        title: "12-Day Private China Family Tour with Pandas",
        description:
          "Choose the twelve-day family route for age-aware activities, two-room planning and a Chengdu panda chapter.",
        tags: ["Family", "Luxury", "Culture"],
        image: {
          src: "/home/editorial/philosophy-family-friendly.avif",
          alt: "Parents, children and local hosts making dumplings together in a Beijing courtyard",
          width: 1536,
          height: 1024,
          objectPosition: "center",
        },
        route: "Beijing · Xi'an · Chengdu · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-family-tour-with-pandas-12-day-private-tour",
      },
    ],

    destinations: [],
  },
  inquiryChecklist: [
    "Preferred dates and number of adults; child ages",
    "Preferred guide language",
    "Rooms, double or twin beds, single rooms and hotel preferences",
    "Walking, stairs, standing, heat and dietary needs",
    "Beijing arrival and Shanghai departure airports, flight times and fixed commitments",
    "Luggage quantities and sizes; any lifting limitations",
    "Day 4: Temple of Heaven or Summer Palace; Day 9: rest or a quoted activity",
  ],
  planningResources: [
    {
      label: "Official Mutianyu Great Wall visitor information",
      href: "https://www.mutianyugreatwall.com/",
      officialPublisher: "Mutianyu Great Wall scenic area",
      description:
        "Consult the scenic area's visitor information and notices. Confirm ticket options, lift operation and safety restrictions for your date; our guide, vehicle and package inclusions are set out in our written proposal.",
    },
    {
      label: "China Railway 12306: passenger information",
      href: "https://www.12306.cn/en/faq.html",
      officialPublisher: "China Railway 12306",
      description:
        "Consult China Railway’s passenger guidance for ticketing, accepted identification and boarding procedures. The actual train, seats, baggage arrangements and departure times require confirmation for your booking.",
    },
    {
      label: "Plan a first trip to China",
      href: "/journal/first-trip-to-china-planning-guide",
      description: "Review gateways, route length and practical decisions before booking.",
    },
    {
      label: "A 10-day first-visit itinerary",
      href: "/journal/10-day-china-itinerary-first-time-visitors",
      description: "Compare the proposed three-city structure with your available days.",
    },
    {
      label: "How many days for Beijing, Xi'an and Shanghai?",
      href: "/journal/how-many-days-beijing-xian-shanghai",
      description: "Understand what extra recovery and choice time adds.",
    },
    {
      label: "China high-speed rail for foreign visitors",
      href: "/journal/china-high-speed-train-foreigners",
      description: "Plan for ticket identification checks, boarding and luggage.",
    },
    {
      label: "Official Palace Museum information",
      href: "https://en.dpm.org.cn/",
      officialPublisher: "The Palace Museum",
      description:
        "Check museum information; reservations and visitor rules still need date-specific confirmation.",
    },
    {
      label: "Official Terracotta Warriors museum",
      href: "https://www.bmy.com.cn/",
      officialPublisher: "Emperor Qinshihuang’s Mausoleum Site Museum",
      description: "Consult the museum's visitor information for the actual travel date.",
    },
    {
      label: "Official China immigration information",
      href: "https://en.nia.gov.cn/",
      officialPublisher: "National Immigration Administration of China",
      description:
        "Check passport- and route-specific entry requirements using official information.",
    },
  ],
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Beijing%20Xi%27an%20Shanghai%2010-Day%20Private%20Tour&body=Hello%20AVIORA%2C%20I%20would%20like%20a%20personalized%20quote%20for%20the%2010-day%20Beijing%2C%20Xi%27an%20and%20Shanghai%20route.%0APreferred%20dates%20and%20number%20of%20adults%3B%20child%20ages%3A%0APreferred%20guide%20language%3A%0ARooms%2C%20double%20or%20twin%20beds%2C%20single%20rooms%20and%20hotel%20preferences%3A%0AWalking%2C%20stairs%2C%20standing%2C%20heat%20and%20dietary%20needs%3A%0ABeijing%20arrival%20and%20Shanghai%20departure%20airports%2C%20flight%20times%20and%20fixed%20commitments%3A%0ALuggage%20quantities%20and%20sizes%3B%20any%20lifting%20limitations%3A%0ADay%204%3A%20Temple%20of%20Heaven%20or%20Summer%20Palace%3B%20Day%209%3A%20rest%20or%20a%20quoted%20activity%3A%0APlease%20explain%20any%20ticket-booking%20identity%20documents%20after%20checking%20availability.",
    whatsappHref:
      "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20would%20like%20a%20personalized%20quote%20for%20the%2010-day%20Beijing%2C%20Xi%27an%20and%20Shanghai%20route.%0APreferred%20dates%20and%20number%20of%20adults%3B%20child%20ages%3A%0APreferred%20guide%20language%3A%0ARooms%2C%20double%20or%20twin%20beds%2C%20single%20rooms%20and%20hotel%20preferences%3A%0AWalking%2C%20stairs%2C%20standing%2C%20heat%20and%20dietary%20needs%3A%0ABeijing%20arrival%20and%20Shanghai%20departure%20airports%2C%20flight%20times%20and%20fixed%20commitments%3A%0ALuggage%20quantities%20and%20sizes%3B%20any%20lifting%20limitations%3A%0ADay%204%3A%20Temple%20of%20Heaven%20or%20Summer%20Palace%3B%20Day%209%3A%20rest%20or%20a%20quoted%20activity%3A%0APlease%20explain%20any%20ticket-booking%20identity%20documents%20after%20checking%20availability.",
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "Please send us a quote for the 10-day Beijing, Xi'an and Shanghai private tour, based on our travel dates, group and room preferences. We would like to compare ten and twelve days.",
  },
};
