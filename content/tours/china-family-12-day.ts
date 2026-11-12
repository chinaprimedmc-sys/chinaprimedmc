import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
import {
  beijingUnhurriedAsset,
  chengduAsset,
  chinaFamilyAsset,
  firstChinaAsset,
} from "@/content/tours/assets";
import type { Tour } from "@/types/tour";

const hotelByCity = {
  beijing: "Premium five-star family hotel in Beijing · 4 nights",
  xian: "Premium five-star family hotel in Xi'an · 2 nights",
  chengdu: "Premium five-star family hotel in Chengdu · 3 nights",
  shanghai: "Premium five-star family hotel in Shanghai · 2 nights",
};

export const chinaFamily12DayTour: Tour = {
  slug: "china-family-tour-with-pandas-12-day-private-tour",
  publishedAt: "2026-08-19",
  updatedAt: "2026-11-12",
  title: "12-Day Private China Family Tour with Pandas",
  subtitle:
    "For children, China becomes a story they can enter. For parents, it becomes a journey they do not have to manage.",
  duration: "12 Days / 11 Nights",
  route: "Beijing, Xi'an, Chengdu, Shanghai",
  styles: ["Family", "Luxury", "Culture", "First-time China", "Food"],
  hero: {
    eyebrow: "AVIORA flagship private family journey",
    image: chinaFamilyAsset.hero,
    primary: { label: "Explore the 12 Days", href: "#itinerary" },
    secondary: { label: "Design Our Family Journey", href: "#enquiry" },
  },
  seo: {
    title: "12-Day Private China Family Tour with Pandas",
    description:
      "Visit Beijing, Xian, Chengdu and Shanghai in 12 days with private family guides, pandas, hands-on workshops and five-star hotels. Check the age and room basis.",
    keywords: [
      "private China family tour with pandas 12 days",
      "China family tour two rooms",
      "China tour with kids private guide",
      "Great Wall family photographer tour",
      "China family holiday first class train",
    ],

    preserveCopy: true,
  },
  overview: {
    pitch:
      "A private four-city journey engineered for parents, children aged 6–17 and grandparents: one clear daily highlight, hands-on cultural encounters and active coordination of room configuration, private transport, mobility pace and changing family energy. Rest buffers and practical handovers are built into the route so parents can travel with their family rather than manage it.",
    facts: [
      { label: "Hotels", value: "Selected five-star family hotels; two-room starting basis" },
      { label: "Pacing", value: "Family-paced with active site days and protected rest" },
      {
        label: "Suitable for",
        value:
          "Families with children aged 6–17 who want cultural participation and planned downtime; the price example uses ages 6–11.",
      },
    ],

    practicalities: [
      {
        label: "Best for",
        value:
          "Families with children aged 6–17 who want cultural participation and planned downtime; the price example uses ages 6–11.",
      },
      {
        label: "Nights and route",
        value:
          "Beijing 4 nights, Xi’an 2, Chengdu 3 and Shanghai 2: 11 nights, with arrival in Beijing and departure from Shanghai.",
      },
      {
        label: "Private family service",
        value:
          "Local family-oriented guides and separate drivers on the confirmed touring days, plus agreed arrival, departure and intercity transfers. No automatic babysitting or personal care.",
      },
      {
        label: "Rooms",
        value:
          "Selected five-star hotels; two rooms for the starting family example. Connecting rooms, bedding and child occupancy need individual confirmation.",
      },
      {
        label: "Intercity travel",
        value:
          "Beijing–Xi’an and Xi’an–Chengdu first-class high-speed rail; Chengdu–Shanghai nonstop economy flight, with schedules and baggage confirmed.",
      },
      {
        label: "Activities",
        value:
          "Listed tai chi, courtyard meal, half-day Great Wall photographer, clay studio and Shanghai kitchen; one Chengdu option is selected before booking.",
      },
      {
        label: "Pacing",
        value:
          "Arrival and travel days stay lighter; the Panda Base afternoon is free. Shanghai combines a short neighborhood introduction, kitchen lunch, rest and the included farewell dinner.",
      },
      {
        label: "Walking",
        value:
          "The Forbidden City, Wall, museums and stations involve steps, distance and queues. Child ages and every traveler’s walking needs shape the route.",
      },
      {
        label: "Food",
        value:
          "Hotel breakfasts and specifically listed meals are included. Allergies, spice and kitchen suitability require advance discussion.",
      },
      {
        label: "Animal visits",
        value:
          "Public panda observation only; no holding, feeding, keeper or backstage access is included.",
      },
      {
        label: "Starting-price basis",
        value: getPublishedPriceDisclosure("china-family-tour-with-pandas-12-day-private-tour"),
      },
    ],

    answer:
      "A private 12-day China family tour through Beijing, Xi’an, Chengdu and Shanghai, with 11 hotel nights, family guides, two first-class train journeys and a domestic flight. Children explore the Great Wall, Terracotta Army and pandas through age-matched activities. Five-star hotels, selected meals and listed workshops are included. The starting basis is two adults and two children aged 6–11 in two rooms.",
  },
  planningSupport: {
    eyebrow: "Designed around your family",
    title: "The children remember the wonder. The parents remember how easy it felt.",
    description:
      "Before confirmation, we learn each child's age, interests, food preferences and energy pattern. We then adjust the stories, challenge level, start times, room setup and backup plan around your family.",
    items: [
      {
        label: "Ages 6–9",
        value: "Play, make, discover",
        helper: "Shorter story blocks, visual missions and more movement.",
      },
      {
        label: "Ages 10–13",
        value: "Decode and compete",
        helper: "Clues, design challenges and deeper choices.",
      },
      {
        label: "Ages 14–17",
        value: "Debate and create",
        helper: "Photography, architecture, food and contemporary China.",
      },
      {
        label: "Parents",
        value: "Logistics handled",
        helper: "Rooms, tickets, transfers, meals and daily pivots are coordinated.",
      },
    ],
    note: "Connecting rooms and family-room configurations are requested and verified hotel by hotel; they are never represented as confirmed until the property accepts the exact room setup in writing.",
  },
  highlights: [
    {
      title: "History children can enter",
      description:
        "A Junior Curator Mission in the Forbidden City, a family challenge on the Great Wall and a clay-warrior studio after the Terracotta Army turn major landmarks into stories with a role for every age.",
      category: "Family",
      image: firstChinaAsset.beijingForbiddenCityLion,
    },
    {
      title: "Pandas, understood rather than collected",
      description:
        "An early, carefully routed panda-base visit focuses on behavior, habitat and conservation, with age-aware interpretation and a quiet afternoon once the animals and children are ready to slow down.",
      category: "Nature",
      image: chengduAsset.heroPanda,
    },
    {
      title: "A family story worth keeping",
      description:
        "A half-day Great Wall photographer and hands-on kitchen sessions give your family moments to remember. Optional keepsake time in Shanghai can bring together the photographs, field books and things the children have made.",
      category: "Luxury",
      image: firstChinaAsset.shanghaiWaterfrontGroup,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Beijing, with the first decisions already made",
      destination: "Beijing",
      summary:
        "Your arrival team manages the airport welcome, luggage and private transfer. The hotel room setup is checked before arrival, while each child receives an AVIORA travel passport and a welcome pack tailored to their age. The rest of the day stays deliberately open. Family energy: Low.",
      image: firstChinaAsset.beijingTempleOfHeavenCorridor,
      hotel: hotelByCity.beijing,
      meals: ["Hotel breakfast begins the following morning", "Optional light dinner"],
      transport: "Private airport transfer with family arrival support",
      activities: [
        {
          title: "A room setup checked for your family",
          description:
            "Bed configuration, connecting-room status, breakfast arrangements and practical requests are rechecked before you reach the hotel.",
        },
        {
          title: "The children's China travel passport",
          description:
            "An age-matched field book introduces the people, symbols, foods and small missions ahead without turning the journey into homework.",
        },
      ],
      guideNote: "No important sightseeing is placed after a long-haul flight.",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
    },
    {
      day: 2,
      title: "Move, notice and cook in Beijing",
      destination: "Beijing",
      summary:
        "Start with private tai chi in a quieter park corner, then understand the Temple of Heaven through color, sound and morning life. A hutong host welcomes the family into a private courtyard to fold dumplings and share lunch. Return early for a protected afternoon. Family energy: Medium.",
      image: firstChinaAsset.beijingTempleOfHeavenMorning,
      hotel: hotelByCity.beijing,
      meals: ["Breakfast", "Private courtyard dumpling lunch"],
      transport: "Private family vehicle and private guide",
      activities: [
        {
          title: "Private family tai chi",
          description:
            "A local teacher adapts the session into mirroring games for younger children, balance and form for tweens, and a more focused practice for teenagers and parents.",
        },
        {
          title: "Temple of Heaven through living Beijing",
          description:
            "Meet the singers, dancers, chess players and morning regulars while your guide connects the park's human life to its imperial purpose.",
        },
        {
          title: "Dumplings in a private hutong courtyard",
          description:
            "Make, fold and eat lunch with a Beijing host or culinary teacher, with familiar alternatives and dietary needs arranged in advance.",
        },
      ],
      guideNote: "The afternoon is protected for pool, nap or unstructured family time.",
      coordinates: { latitude: 39.8822, longitude: 116.4066 },
    },
    {
      day: 3,
      title: "The Forbidden City becomes a family mystery",
      destination: "Beijing",
      summary:
        "Explore a selected Forbidden City route through roof figures, animals and court rituals, using an age-aware Junior Curator Mission. Around 2.5 hours and 3.5 km is an illustrative route, not a required distance; reservation timing, weather and the children's stamina determine the final plan. Pauses and a seated tea-and-object session are planned where practical. Family energy: Medium to high.",
      image: firstChinaAsset.beijingForbiddenCityLion,
      hotel: hotelByCity.beijing,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private vehicle, timed entry and private family guide",
      activities: [
        {
          title: "Junior Curator Mission",
          description:
            "Children aged 6–9 hunt visual symbols, ages 10–13 decode status and palace rules, and teenagers investigate how architecture shaped power and public image.",
        },
        {
          title: "Private tea, maps and imperial objects",
          description:
            "After the palace, sit with replica objects, maps and archival images so every family member can explain one surprising thing they found.",
        },
      ],
      guideNote:
        "The walking estimate is approximate and varies with access, crowd controls and the route open on the day. The guide plans shaded pauses and confirms the route and exit point before travel; this is not a step-free visit.",
      coordinates: { latitude: 39.9163, longitude: 116.3972 },
    },
    {
      day: 4,
      title: "Your family's Great Wall chapter",
      destination: "Beijing",
      summary:
        "Travel to Mutianyu by private vehicle with confirmed public cable-car tickets, subject to operation. This is not a private cabin. A selected watchtower walk may take around 1.5–2 hours, but the guide sets turn-back points around the youngest and least-mobile guest. A professional photographer joins for a half-day session; the listed lunch and a free evening follow. Family energy: High.",
      image: firstChinaAsset.beijingGreatWallWide,
      hotel: hotelByCity.beijing,
      meals: ["Breakfast", "Mountain-view family lunch"],
      transport: "Private vehicle, guide and suitable cable-car plan",
      activities: [
        {
          title: "The Great Wall Family Challenge",
          description:
            "A route of observation, teamwork and achievable goals is adjusted to the youngest child, weather and crowd conditions. The purpose is a shared victory, not a distance record.",
        },
        {
          title: "Half-day family photography",
          description:
            "A professional photographer captures natural family moments and a small set of considered portraits without turning the day into a continuous photo shoot.",
        },
        {
          title: "Lunch with time to look back",
          description:
            "Pause over a thoughtfully chosen countryside lunch with mountain views; no demanding evening activity is added afterward.",
        },
      ],
      guideNote:
        "The cable-car model and boarding point are confirmed against current scenic-area operations for the travel date. The Wall still has slopes, steps and uneven paving; the walking estimate is a planning range, not a step-free guarantee. Toboggan descent is considered only when age, weather, operation and family preference make it appropriate.",
      coordinates: { latitude: 40.4319, longitude: 116.5704 },
    },
    {
      day: 5,
      title: "First-class rail to Xi'an and the city wall at sunset",
      destination: "Beijing to Xi'an",
      summary:
        "Take the confirmed first-class high-speed train with station and luggage coordination. After hotel check-in and a pause, a short Xi'an City Wall visit can use the mode agreed in your proposal. Bicycles, tandems and electric carts depend on age, availability and site rules; they are not all included alternatives. Family energy: Low to medium.",
      image: chengduAsset.rail,
      hotel: hotelByCity.xian,
      meals: ["Breakfast", "Meals at leisure during the transition"],
      transport: "Private transfers plus Beijing–Xi'an first-class high-speed rail",
      activities: [
        {
          title: "A managed family rail day",
          description:
            "Tickets, passports, luggage, station timing, boarding and the arrival handover are coordinated so parents are not managing separate moving parts.",
        },
        {
          title: "Xi'an City Wall, your way",
          description:
            "Use the short walk or permitted riding arrangement selected before booking. Age and height restrictions, availability, weather and any extra charge must be checked; a different mode is not automatically an included swap.",
        },
      ],
      guideNote: "Business-class rail can be quoted, subject to inventory.",
      coordinates: { latitude: 34.261, longitude: 108.942 },
    },
    {
      day: 6,
      title: "Meet an ancient army, then make one of your own",
      destination: "Xi'an",
      summary:
        "Use a strategically timed entry to reduce avoidable queueing and standing, then follow a focused Pit 1–3 sequence with seated or shaded pauses where the site permits. After lunch, meet a local artisan in a private clay-warrior studio, then return to the hotel for protected downtime. Family energy: High.",
      image: firstChinaAsset.xianTerracottaPit,
      hotel: hotelByCity.xian,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private vehicle and private family guide",
      activities: [
        {
          title: "Priority-timed Terracotta Army visit",
          description:
            "Entry timing is arranged for the confirmed date to reduce unnecessary standing where ticketing and crowd conditions allow. The guide focuses on Pits 1–3 in a clear sequence, building in pauses and time for questions rather than attempting every display case.",
        },
        {
          title: "Private clay-warrior studio",
          description:
            "With a local craftsperson, the family learns how the figures were formed and makes small warriors to take home once drying and packing arrangements are confirmed.",
        },
      ],
      guideNote:
        "Priority timing means a planned entry slot, not a queue-free or skip-the-line guarantee. The museum has crowds, standing and hard surfaces; final entry time depends on the ticket inventory and operating rules for the confirmed date.",
      coordinates: { latitude: 34.3841, longitude: 109.2785 },
    },
    {
      day: 7,
      title: "First-class rail to Chengdu, then tea at local speed",
      destination: "Xi'an to Chengdu",
      summary:
        "Travel by first-class high-speed rail with both station transfers managed. In Chengdu, settle into the hotel before an optional teahouse introduction where your guide handles ordering and translates the rituals of an ordinary local afternoon. Family energy: Low.",
      image: chengduAsset.tea,
      hotel: hotelByCity.chengdu,
      meals: ["Breakfast", "Meals at leisure during the transition"],
      transport: "Private transfers plus Xi'an–Chengdu first-class high-speed rail",
      activities: [
        {
          title: "Door-to-door rail support",
          description:
            "The family is met at both ends, with luggage and boarding timed around the actual train rather than a generic station arrival rule.",
        },
        {
          title: "Optional Chengdu teahouse arrival",
          description:
            "Try covered-bowl tea, watch local games and let Chengdu lower the tempo after two landmark days.",
        },
      ],
      guideNote: "The teahouse is optional; hotel time remains the default if the family is tired.",
      coordinates: { latitude: 30.5728, longitude: 104.0668 },
    },
    {
      day: 8,
      title: "Pandas at their best hour, rest at yours",
      destination: "Chengdu",
      summary:
        "Enter early in the pandas' usual morning activity window, subject to the facility's opening time and the confirmed date. Follow comfortable paved visitor routes at an unhurried pace, then return after lunch. The afternoon is protected for hotel rest, with no sightseeing scheduled. Family energy: Medium.",
      image: chengduAsset.pandaMorning,
      hotel: hotelByCity.chengdu,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private early transfer and private family guide",
      activities: [
        {
          title: "A better-timed panda visit",
          description:
            "The facility and entry time are chosen around the date, opening hours and the pandas' usual morning activity window. The guide uses comfortable paved visitor routes and avoids unnecessary backtracking; animal activity can never be guaranteed.",
        },
        {
          title: "Conservation through children's questions",
          description:
            "A qualified guide or available conservation educator explores bamboo diets, habitat, breeding science and reintroduction through age-matched questions and observation.",
        },
        {
          title: "Protected family downtime",
          description:
            "The afternoon belongs to the family: pool, nap, books, room service or an unplanned walk with no fear of missing a paid headline experience.",
        },
      ],
      guideNote:
        "The afternoon remains free of scheduled touring. This itinerary does not promise panda holding, keeper access or direct animal contact. Any specialist is subject to availability and may be replaced by a mutually agreed equivalent.",
      coordinates: { latitude: 30.7381, longitude: 104.1414 },
    },
    {
      day: 9,
      title: "Choose the Chengdu chapter that fits your children",
      destination: "Chengdu",
      summary:
        "Choose one substantive family experience: a private Sichuan kitchen, the archaeological imagination of Sanxingdui, the scale of Leshan or a full day of rest. Each option is adjusted for ages, appetite and the previous day's energy. Family energy: Your choice.",
      image: chengduAsset.food,
      hotel: hotelByCity.chengdu,
      meals: ["Breakfast", "Meals included according to the confirmed option"],
      transport: "Private service matched to the selected option",
      activities: [
        {
          title: "Option A: A private Sichuan kitchen",
          description:
            "Shop for ingredients, learn how flavor is layered and cook a family meal with spice levels separated so curiosity does not become a dare.",
        },
        {
          title: "Option B: Sanxingdui, the ancient-world mystery",
          description:
            "Explore bronze masks, strange eyes and competing archaeological theories through a visual mission suited especially to curious older children and teenagers.",
        },
        {
          title: "Option C: Leshan by the most suitable route",
          description:
            "See the Giant Buddha using the best practical river or land plan for current operations, weather and family mobility.",
        },
        {
          title: "Rest option",
          description:
            "Keep the full day free, with AVIORA support available and no pressure to replace rest with another attraction.",
        },
      ],
      guideNote:
        "Choose one option before booking so its tickets, host, meal and vehicle hours can be priced and confirmed. Changing the option later may affect availability and cost. A rest day does not automatically include a standby guide or vehicle; any refund or replacement follows the agreed change terms.",
      coordinates: { latitude: 30.5728, longitude: 104.0668 },
    },
    {
      day: 10,
      title: "Fly to Shanghai and meet the skyline",
      destination: "Chengdu to Shanghai",
      summary:
        "A sensibly timed nonstop flight preserves sleep and reduces airport waiting. Private teams handle both transfers and luggage. After check-in, choose a brief Bund reveal or a rooftop first look at the city; the evening remains uncomplicated. Family energy: Low to medium.",
      image: firstChinaAsset.shanghaiPudongSkyline,
      hotel: hotelByCity.shanghai,
      meals: ["Breakfast", "Meals at leisure during the transition"],
      transport: "Private transfers plus nonstop Chengdu–Shanghai economy flight",
      activities: [
        {
          title: "A flight selected around the family day",
          description:
            "The recommended departure balances hotel breakfast, airport time, arrival traffic and a humane check-in rather than simply using the lowest fare.",
        },
        {
          title: "Shanghai's first reveal",
          description:
            "If timing and energy align, meet the Bund and Pudong skyline in one short, high-impact chapter before dinner.",
        },
      ],
      guideNote: "The first city view remains optional if flight operations change.",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
    },
    {
      day: 11,
      title: "A Shanghai Kitchen, Time to Rest and a Family Farewell",
      destination: "Shanghai",
      summary:
        "Begin with a brief neighborhood introduction if the children feel ready, then make the private kitchen lunch the main daytime experience. Protect the afternoon for hotel rest, with optional keepsake time. End with the included farewell dinner. A longer architecture hunt can replace another element by agreement. Family energy: Medium, with a protected afternoon break.",
      image: firstChinaAsset.shanghaiMarketVisit,
      hotel: hotelByCity.shanghai,
      meals: ["Breakfast", "Private kitchen lunch", "Farewell dinner"],
      transport: "Private vehicle and private family guide",
      activities: [
        {
          title: "A short neighborhood introduction",
          description:
            "Notice a few lane houses, signs and architectural details on a short route adjusted to the children. A longer discovery hunt is an alternative arrangement, not a compulsory extra.",
        },
        {
          title: "Market to private kitchen",
          description:
            "Join the confirmed culinary host to prepare lunch in a private studio. A short market stop is included only when specified in the proposal and practical that day. Review allergies, menu and kitchen suitability before booking.",
        },
        {
          title: "Protected rest, with optional keepsake time",
          description:
            "Return to the hotel for a real afternoon break. If the family wishes, collect observations and passport stamps for the small memory-book concept; it can be finished at home. Confirm photographer image delivery separately.",
        },
        {
          title: "A farewell dinner designed around your table",
          description:
            "End in a private room or intimate restaurant selected around the family's food preferences, service style and the flavors they loved most.",
        },
      ],
      guideNote:
        "Keep the afternoon break in the operating plan. The private kitchen lunch and farewell dinner remain included; confirm host, menu, venue and transport hours in writing.",
      coordinates: { latitude: 31.2208, longitude: 121.4547 },
    },
    {
      day: 12,
      title: "Depart Shanghai with every handover covered",
      destination: "Shanghai",
      summary:
        "AVIORA confirms the airport, terminal, pickup time, traffic buffer and luggage plan. A private vehicle takes the family to the correct departure terminal, with no risky sightseeing added before the flight. Family energy: Low.",
      image: firstChinaAsset.shanghaiHuangpuSunset,
      meals: ["Breakfast"],
      transport: "Private airport transfer with departure support",
      activities: [
        {
          title: "A protected family departure",
          description:
            "Flight details, terminal, child seats where required and luggage capacity are checked before pickup.",
        },
      ],
      guideNote:
        "Late checkout can be requested when hotel availability and flight timing justify it.",
      coordinates: { latitude: 31.1443, longitude: 121.8083 },
    },
  ],
  accommodations: [
    {
      name: "Premium Beijing family hotel selection",
      destination: "Beijing",
      description:
        "Four nights in a premium five-star hotel selected for room size, breakfast, pool or family downtime, practical vehicle access and a strong base for the Forbidden City and Great Wall days.",
      roomStyle: "Two rooms, with connecting or family configuration verified before booking",
      highlights: [
        "4-night continuity",
        "Room-setup verification",
        "Family downtime",
        "Central access",
      ],
      image: beijingUnhurriedAsset.hotelRoom,
    },
    {
      name: "Premium Xi'an family hotel selection",
      destination: "Xi'an",
      description:
        "Two nights in a premium five-star hotel that makes the city-wall evening easy while preserving reliable comfort after the Terracotta Army day.",
      roomStyle: "Two rooms, with connecting or family configuration verified before booking",
      highlights: ["City-wall access", "Quiet-room request", "Family breakfast", "Pool preferred"],
      image: firstChinaAsset.xianTerracottaPortrait,
    },
    {
      name: "Premium Chengdu family hotel selection",
      destination: "Chengdu",
      description:
        "Three nights in one comfortable base, chosen for a calm room environment, generous breakfast and the facilities needed for a genuinely restorative panda afternoon.",
      roomStyle: "Two rooms, with connecting or family configuration verified before booking",
      highlights: [
        "3-night continuity",
        "Protected downtime",
        "Comfortable room size",
        "Easy dining",
      ],
      image: chengduAsset.heroCity,
    },
    {
      name: "Premium Shanghai family hotel selection",
      destination: "Shanghai",
      description:
        "Two nights in a premium five-star hotel with a useful neighborhood or river location and a straightforward final airport-transfer strategy.",
      roomStyle: "Two rooms, with connecting or family configuration verified before booking",
      highlights: [
        "Strong location",
        "Room-category clarity",
        "Dining nearby",
        "Departure planning",
      ],
      image: firstChinaAsset.shanghaiPudongCoupleNight,
    },
  ],
  included: [
    "11 nights in selected premium five-star hotels, based on two adults and two children aged 6–11 sharing two rooms",
    "Daily hotel breakfast, selected lunches and the farewell dinner stated in the final proposal",
    "Private multilingual, family-ready guides and private vehicles on confirmed touring days",
    "Private airport and railway-station transfers with luggage and handover support",
    "Beijing–Xi'an and Xi'an–Chengdu first-class high-speed rail tickets",
    "Chengdu–Shanghai nonstop economy-class domestic flight",
    "Confirmed entrance tickets and listed cable-car or site transport arrangements",
    "Private tai chi, Beijing courtyard lunch, half-day family photographer, clay-warrior studio, selected Chengdu experience and Shanghai private-kitchen session",
    "Age-aware travel passports, activity materials and the family journey keepsake concept",
    "AVIORA family itinerary design, restaurant planning and China-based journey support",
    "No compulsory shopping stops",
  ],
  excluded: [
    "International flights to Beijing and from Shanghai",
    "Travel insurance, visas and personal medical expenses",
    "Meals, drinks and room-service charges not stated as included",
    "Hotel spa treatments, laundry, babysitting and personal purchases",
    "Business-class rail, premium flight cabins, suites and exclusive venue access unless quoted",
    "Panda holding, keeper access or any unconfirmed direct animal interaction",
    "Tips and gratuities unless specifically included in the written proposal",
  ],
  optionalExperiences: [
    {
      title: "Sanxingdui with an archaeology specialist",
      description:
        "Upgrade the Chengdu choice day with specialist interpretation of Sanxingdui's bronze masks, ritual world and unresolved archaeological questions.",
      badges: ["Older children", "Subject to availability"],
      image: chengduAsset.heroCity,
    },
    {
      title: "Luxury rooms and family suites",
      description:
        "Move to confirmed connecting categories, larger rooms, suites or club benefits where the upgrade materially improves family comfort.",
      badges: ["Luxury", "Quoted to dates"],
      image: beijingUnhurriedAsset.hotelRoom,
    },
    {
      title: "Additional family photography",
      description:
        "Extend photography into Shanghai or add a professionally edited family album beyond the included Great Wall half day.",
      badges: ["Photography", "Private"],
      image: firstChinaAsset.shanghaiWaterfrontGroup,
    },
  ],
  transportation: {
    title: "Four cities, with every family transition planned door to door",
    description:
      "First-class rail keeps the Beijing–Xi'an and Xi'an–Chengdu sectors comfortable and visible; a nonstop flight prevents Chengdu–Shanghai from consuming an entire day. Private teams manage each departure and arrival.",
    items: [
      {
        label: "Beijing to Xi'an",
        value: "First-class high-speed rail",
        helper: "Private station transfers and boarding support.",
      },
      {
        label: "Xi'an to Chengdu",
        value: "First-class high-speed rail",
        helper: "A manageable daytime journey with handovers at both ends.",
      },
      {
        label: "Chengdu to Shanghai",
        value: "Nonstop daytime flight",
        helper: "Selected around useful family timing, not simply the lowest fare.",
      },
      {
        label: "Private vehicle",
        value: "Sized for four guests and luggage",
        helper: "Child-seat requirements are confirmed in advance.",
      },
    ],
  },
  routeMap: {
    title: "Four chapters, each with a different kind of wonder",
    description:
      "The route creates a clear story from imperial China to archaeology, wildlife and contemporary city life without asking children to absorb everything in one place.",
    stops: [
      {
        name: "Beijing",
        days: "Days 1–4 · 4 nights",
        description: "Tai chi, hutong cooking, the Forbidden City and a family Great Wall day.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        name: "Xi'an",
        days: "Days 5–6 · 2 nights",
        description: "City-wall choices, the Terracotta Army and a private clay-warrior studio.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        name: "Chengdu",
        days: "Days 7–9 · 3 nights",
        description: "Pandas at the right hour, protected rest and one age-matched choice day.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        name: "Shanghai",
        days: "Days 10–12 · 2 nights",
        description: "A skyline reveal, neighborhood discovery and a family-made finale.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
    ],
  },
  gallery: [
    chinaFamilyAsset.hero,
    firstChinaAsset.beijingGreatWallGroup,
    firstChinaAsset.beijingTempleOfHeavenMorning,
    firstChinaAsset.beijingForbiddenCityLion,
    firstChinaAsset.beijingGreatWallWide,
    firstChinaAsset.xianTerracottaPit,
    firstChinaAsset.xianTerracottaGroup,
    chengduAsset.heroPanda,
    chengduAsset.pandaMorning,
    chengduAsset.tea,
    firstChinaAsset.shanghaiWaterfrontGroup,
    firstChinaAsset.shanghaiMarketVisit,
    firstChinaAsset.shanghaiBundNight,
  ],
  faqs: [
    {
      question: "What does this private tour cost, and what is the starting-price basis?",
      answer: getPublishedPriceDisclosure("china-family-tour-with-pandas-12-day-private-tour"),
    },
    {
      question: "Is this China family tour designed for young children or teenagers?",
      answer:
        "Activities are adapted for ages 6–9, 10–13 and 14–17 rather than assigning every child the same task. Younger children can focus on shapes and making; teenagers can explore evidence, architecture and food. Share exact ages, interests and walking tolerance. Children outside these bands need an individual review, and the published price uses the younger family example.",
    },
    {
      question: "Are connecting hotel rooms guaranteed for our family?",
      answer:
        "No. Two rooms are part of the starting-price basis, but connecting rooms are an additional availability question. The proposal names properties, room categories, beds and occupancy. Tell us if an internal connecting door is essential rather than merely preferred; neighboring rooms are not the same arrangement. Suites, extra beds and single occupancy change the quote.",
    },
    {
      question: "Which panda base do we visit, and can children hold a panda?",
      answer:
        "The proposal names the booked public panda facility. No holding, feeding, keeper access or guaranteed encounter is included. The visit uses the facility’s public opening and visitor routes, with the morning planned for observation and the afternoon protected for rest. Animal behavior and cub sightings cannot be guaranteed.",
    },
    {
      question: "Are the Great Wall cable car and photographer included?",
      answer:
        "The listed family package includes the confirmed mountain-transport arrangement and a half-day photographer session. This does not mean a private cable-car cabin or an empty Wall. Before booking, confirm the lift route, photographer hours, image delivery, turnaround and private-use permissions. Steps and slopes remain after cable-car access.",
    },
    {
      question: "Can we choose cooking, Sanxingdui, Leshan or rest in Chengdu?",
      answer:
        "Choose one principal option for Day 9, not all four. Your proposal states the selected tickets, transfers, host, meal and service hours. A rest choice changes the day’s service plan; it is not an automatic refund of an assumed activity price. Leshan and Sanxingdui require different travel and walking arrangements.",
    },
    {
      question: "How busy is the Shanghai family day?",
      answer:
        "Begin with a short neighborhood introduction if everyone feels ready, then make the private kitchen lunch the main daytime experience. Keep the afternoon for hotel rest or optional keepsake time, followed by the included farewell dinner. A longer architecture hunt is a substitute to discuss, not another compulsory activity added to the day.",
    },
    {
      question: "Are child seats, strollers and luggage assistance included?",
      answer:
        "Vehicle capacity and any child-seat arrangement are checked for the actual family before booking; send ages, luggage and seat requirements. Strollers, porters, guaranteed luggage carrying and personal care are not assumed. Station assistance coordinates the connection but does not remove security, walking or the family’s responsibility for belongings.",
    },
    {
      question: "What happens if a child is tired or a workshop host is unavailable?",
      answer:
        "The guide can shorten the walking route and protect scheduled downtime within the confirmed service window. Material changes to tickets, transport or hosts need agreement and may affect cost. A named specialist is not guaranteed until confirmed; any proposed equivalent should be explained before booking rather than quietly substituted.",
    },
    {
      question: "How does this differ from the adult four-city China tour?",
      answer:
        "This route starts in Beijing and ends in Shanghai, using family rooms, age-matched materials, hands-on sessions and protected rest. The adult four-city route runs the other way, includes different cultural visits and an active Jinshanling Wall day. Shared cities do not make the two itineraries interchangeable.",
    },
    {
      question: "Are international flights, visas and all meals included?",
      answer:
        "No. The itinerary includes the named domestic flight and train sectors, not international flights. Visa costs, insurance and unlisted meals are separate. Entry rules depend on passports and the complete international route. Dietary planning is included, but a particular allergy-safe kitchen or certification must be checked with the actual provider.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "12-Day Private China Tour: Shanghai to Beijing",
        description:
          "Choose the adult four-city route for public Dujiangyan panda observation, regional culture and active Jinshanling walking.",
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
        title: "12-Day Private China Tour at an Easier Pace",
        description:
          "Choose three cities and fewer hotel changes when recovery time matters more than adding a panda city.",
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
      "mailto:chinaprimedmc@gmail.com?subject=12-Day%20China%20Family%20Journey%20Private%20Proposal&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20private%20proposal%20for%20China%2C%20Made%20for%20Families.%0A%0ATravel%20month%20or%20dates%3A%0AAdults%3A%0AChildren%27s%20ages%3A%0ARooms%20or%20connecting-room%20preference%3A%0AFamily%20interests%3A%0ADietary%20needs%3A%0A",
    whatsappHref:
      "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20private%20proposal%20for%20China%2C%20Made%20for%20Families%20%2812%20days%29.%20Our%20children%27s%20ages%20are%3A%20",
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "I am interested in China, Made for Families. Our children's ages are: __. Please recommend the right dates, two-room setup and age-aware experiences for us.",
  },

  planningResources: [
    {
      label: "The Palace Museum: official visitor information",
      href: "https://intl.dpm.org.cn/visit.html",
      officialPublisher: "The Palace Museum",
      description:
        "Check reservation, identification and visitor notices for your travel date. Private guiding does not bypass museum admission rules.",
    },
    {
      label: "Mutianyu Great Wall: official visitor information",
      href: "https://www.mutianyugreatwall.com/",
      officialPublisher: "Mutianyu Great Wall scenic area",
      description:
        "Check visitor notices and mountain-transport operation. Admission, shuttle and lift tickets are distinct services; the written proposal specifies which are included.",
    },
    {
      label: "Terracotta Army: official museum ticketing",
      href: "https://www.bmy.com.cn/jingtai/bmyweb/ticketing.html",
      officialPublisher: "Emperor Qinshihuang’s Mausoleum Site Museum",
      description:
        "Consult reservation and entry information for the booked date. A museum ticket does not include private guiding or workshop access.",
    },
    {
      label: "China Railway 12306: passenger information",
      href: "https://www.12306.cn/en/faq.html",
      officialPublisher: "China Railway 12306",
      description:
        "Check accepted identification, ticketing, boarding and baggage guidance. The train, class, seat and transfer arrangements are confirmed for your dates.",
    },
    {
      label: "Chengdu Panda Base: official visitor notices",
      href: "https://www.panda.org.cn/en/service/notice",
      officialPublisher: "Chengdu Research Base of Giant Panda Breeding",
      description:
        "Check public visitor notices for the Chengdu Research Base. This is not evidence of access at another panda center or permission to touch animals.",
    },
    {
      label: "China entry requirements: official information",
      href: "https://en.nia.gov.cn/",
      officialPublisher: "National Immigration Administration of China",
      description:
        "Check the rule that applies to your passport and full international route. Booking this tour does not establish visa-free or transit eligibility.",
    },
  ],

  faqLimit: 13,

  inquiryChecklist: [
    "Dates, adults and children’s ages",
    "Two-room, connecting-room or extra-bed requirements",
    "Comfortable walking time and required breaks",
    "Allergies, spice preferences and kitchen requirements",
    "Preferred Chengdu option and photography priorities",
  ],

  comparison: {
    title: "Family route or adult four-city route?",
    intro: "Choose by the way your party wants to spend the day, not just the shared city list.",
    columns: ["Decision", "This family journey", "Adult four-city journey"],
    rows: [
      [
        "Main emphasis",
        "Age-aware activities, kitchen sessions and protected family breaks",
        "City history, food and public panda observation",
      ],
      ["Route", "Beijing → Xi’an → Chengdu → Shanghai", "Shanghai → Chengdu → Xi’an → Beijing"],
      [
        "Great Wall",
        "Mutianyu with confirmed public cable-car tickets",
        "Jinshanling walking; a more active outing",
      ],
    ],
    href: "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour",
    linkLabel: "Compare the alternative itinerary",
  },
};
