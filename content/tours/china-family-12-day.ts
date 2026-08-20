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
  updatedAt: "2026-08-19",
  title: "China, Made for Families: Great Wall, Warriors & Pandas",
  subtitle:
    "For children, China becomes a story they can enter. For parents, it becomes a journey they do not have to manage.",
  duration: "12 Days / 11 Nights",
  route: "Beijing, Xi'an, Chengdu, Shanghai",
  styles: ["Family", "Luxury", "Culture", "First-time China", "Food"],
  hero: {
    eyebrow: "AVIORA flagship private family journey",
    image: chinaFamilyAsset.hero,
    primary: { label: "Explore the 12 Days", href: "#itinerary" },
    secondary: { label: "Design Our Family Journey", href: "#inquiry" },
  },
  seo: {
    title: "12-Day Private China Family Tour with Pandas",
    description:
      "A premium 12-day private China family tour through Beijing, Xi'an, Chengdu and Shanghai, with pandas, the Great Wall, hands-on culture and protected downtime.",
    keywords: [
      "12 day China family tour",
      "private China tour with pandas",
      "China family holiday with kids",
      "luxury China family tour",
      "Great Wall Terracotta Warriors panda tour",
      "Beijing Xi'an Chengdu Shanghai family itinerary",
    ],
  },
  overview: {
    pitch:
      "Four defining cities, designed around the way a family actually travels: one emotional high point each day, hands-on encounters that make history tangible, and invisible support for rooms, meals, luggage, tickets and changing energy.",
    facts: [
      {
        label: "Duration",
        value: "12 days / 11 nights",
        helper: "Beijing 4 nights, Xi'an 2 nights, Chengdu 3 nights and Shanghai 2 nights.",
      },
      {
        label: "Designed For",
        value: "Families with children aged 6–17",
        helper:
          "Stories, challenges and hands-on sessions are adjusted for ages 6–9, 10–13 and 14–17.",
      },
      {
        label: "Published Basis",
        value: "Four guests · two rooms",
        helper: "Based on two adults and two children aged 6–11 outside peak periods.",
      },
      {
        label: "Hotels",
        value: "Premium five-star family hotels",
        helper: "The exact two-room or connecting-room setup is verified before booking.",
      },
      {
        label: "Pacing",
        value: "Age-aware and private",
        helper: "High-energy experiences are followed by protected family downtime.",
      },
      {
        label: "Private Service",
        value: "Family-ready guides, vehicles and support",
        helper: "No group-tour timetable, compulsory shopping or parent-managed logistics.",
      },
    ],
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
        "A half-day family photographer, food made together in private kitchens and a final Shanghai memory-book session create a record of what your family noticed, made and laughed about together.",
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
        "Follow a selected palace route rather than every courtyard. Your guide leads an age-aware Junior Curator Mission through animals, roof figures, court rituals and hidden meanings. A private seated tea-and-object session gives the family space to compare discoveries. Family energy: Medium to high.",
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
        "The Forbidden City involves extensive walking and standing; the route and exit point are tailored before travel.",
      coordinates: { latitude: 39.9163, longitude: 116.3972 },
    },
    {
      day: 4,
      title: "Your family's Great Wall chapter",
      destination: "Beijing",
      summary:
        "Reach Mutianyu with private transport, use the suitable cable-car route and take on a family challenge between selected watchtowers. A professional photographer joins for half the day, then a mountain-view lunch and free evening protect the feeling of achievement. Family energy: High.",
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
        "Cable cars reduce but do not remove steps and uneven paving. Toboggan descent is considered only when age, weather, operation and family preference make it appropriate.",
      coordinates: { latitude: 40.4319, longitude: 116.5704 },
    },
    {
      day: 5,
      title: "First-class rail to Xi'an and the city wall at sunset",
      destination: "Beijing to Xi'an",
      summary:
        "AVIORA manages luggage, station navigation and boarding for the first-class high-speed train. After hotel check-in and a pause, see Xi'an's wall in gentler evening light by bicycle, tandem or electric cart according to age and confidence. Family energy: Low to medium.",
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
            "Choose family bicycles, a tandem, an electric cart or a short walk. The decision can change with weather and energy after arrival.",
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
        "Visit the Terracotta Army through a focused story of discovery, individuality and the first emperor. After lunch, enter a local artisan studio where each child and parent shapes and details a small clay warrior. Return for downtime before the evening. Family energy: High.",
      image: firstChinaAsset.xianTerracottaPit,
      hotel: hotelByCity.xian,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private vehicle and private family guide",
      activities: [
        {
          title: "The Terracotta Army, edited for attention",
          description:
            "Your guide sequences the pits around the strongest visual reveals, rest points and each child's questions rather than trying to cover every display case.",
        },
        {
          title: "Private clay-warrior studio",
          description:
            "With a local craftsperson, the family learns how the figures were formed and makes small warriors to take home once drying and packing arrangements are confirmed.",
        },
      ],
      guideNote:
        "The museum has crowds, standing and hard surfaces; an early or strategically timed start is selected for the confirmed travel date.",
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
        "Leave early for the most suitable Chengdu panda facility and a route planned around seasonal behavior, walking and crowds. An age-aware conservation conversation helps children understand what responsible panda care involves. Return after lunch for a completely protected afternoon. Family energy: Medium.",
      image: chengduAsset.pandaMorning,
      hotel: hotelByCity.chengdu,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private early transfer and private family guide",
      activities: [
        {
          title: "A better-timed panda visit",
          description:
            "The facility and entry time are chosen around the date, current conditions and the pandas' usual morning rhythm, with a route that avoids unnecessary backtracking.",
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
        "This itinerary does not promise panda holding, keeper access or direct animal contact. Any specialist is subject to availability and may be replaced by a mutually agreed equivalent.",
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
        "Only one headline option is planned; the day is not built as a multi-stop checklist.",
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
      title: "Decode Shanghai, cook lunch and keep the story",
      destination: "Shanghai",
      summary:
        "Follow an architecture and lane-life hunt designed for your children's ages, then move from a neighborhood market to a private kitchen for lunch. The family closes its AVIORA travel passports and builds a small journey keepsake before a private-room farewell dinner. Family energy: Medium.",
      image: firstChinaAsset.shanghaiMarketVisit,
      hotel: hotelByCity.shanghai,
      meals: ["Breakfast", "Private kitchen lunch", "Farewell dinner"],
      transport: "Private vehicle and private family guide",
      activities: [
        {
          title: "Lane and architecture discovery hunt",
          description:
            "Younger children match doors, signs and shapes; tweens trace trade and neighborhood clues; teenagers photograph the contrast between Art Deco, lane houses and contemporary Shanghai.",
        },
        {
          title: "Market to private kitchen",
          description:
            "Choose ingredients with a culinary host, then make several Shanghainese dishes together in a private studio with allergies and preferences planned ahead.",
        },
        {
          title: "The family journey keepsake",
          description:
            "Photographs, passport stamps, children's observations and favorite family moments are brought together in a small memory book to finish after returning home.",
        },
        {
          title: "A farewell dinner designed around your table",
          description:
            "End in a private room or intimate restaurant selected around the family's food preferences, service style and the flavors they loved most.",
        },
      ],
      guideNote: "The sequence and walking distance adjust to weather and family energy.",
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
    "Private English-speaking, family-ready guides and private vehicles on confirmed touring days",
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
      question: "What does the US$6,880 starting price assume?",
      answer:
        "It is an indicative per-person starting price based on a family of four: two adults and two children aged 6–11 sharing two rooms, traveling outside Chinese public holidays, school-holiday pressure dates and other peak periods. The corresponding family starting total is US$27,520. Final pricing depends on exact dates, children's ages, hotels, room configuration and confirmed experiences.",
    },
    {
      question: "Will this itinerary work for teenagers as well as younger children?",
      answer:
        "Yes. Ages 6–9 receive shorter visual missions and more making; ages 10–13 receive clues, challenges and meaningful choices; ages 14–17 receive stronger photography, design, archaeology, food and contemporary-culture angles. We do not give every age the same script.",
    },
    {
      question: "Are connecting rooms guaranteed?",
      answer:
        "Connecting rooms are not guaranteed by a generic hotel label. AVIORA checks the exact property, room categories and connecting configuration for your dates and states the confirmed setup in the written proposal before booking.",
    },
    {
      question: "Does the tour include holding or feeding a panda?",
      answer:
        "No. The itinerary does not promise holding, feeding, keeper access or direct animal contact. It provides a well-timed visit and responsible conservation-focused interpretation. Any specialist access is subject to availability and replaced only with a mutually agreed equivalent.",
    },
    {
      question: "How much downtime is built in?",
      answer:
        "Arrival day is protected, the Great Wall has a free evening, the panda day has a protected afternoon, the Chengdu choice day can become a full rest day, and transition days carry only optional light activities. Because the journey is private, individual visits can also be shortened on the day.",
    },
    {
      question: "Can you plan for allergies, selective eaters or different spice levels?",
      answer:
        "Yes. We collect dietary information before confirmation, brief guides and restaurants, separate spice levels where practical and identify familiar alternatives near key stops. Severe allergies require a specific risk review because kitchen practices vary by venue.",
    },
    {
      question: "Can grandparents travel on this family journey?",
      answer:
        "Yes. We can adapt vehicles, walking routes, room setup and daily options for a multigenerational party. Historic sites still include steps, uneven ground and standing, so mobility details should be shared before booking.",
    },
    {
      question: "Can we upgrade the journey further?",
      answer:
        "Yes. Larger connecting rooms or suites, Peninsula-level hotels, business-class rail, premium domestic flights, additional photography and verified specialist access can be quoted as Luxury or Signature enhancements.",
    },
  ],
  related: {
    tours: [
      {
        title: "11-Day Beijing, Xi'an, Chengdu & Shanghai Private Tour",
        description:
          "A shorter first-China route with the same four-city arc and a more conventional daily structure.",
        tags: ["First-time China", "Pandas", "Private"],
        image: chengduAsset.heroPanda,
        route: "Beijing · Xi'an · Chengdu · Shanghai",
        duration: "11 days / 10 nights",
        href: "/tours/beijing-xian-chengdu-shanghai-private-11-day-tour",
      },
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A 12-day flagship route designed around mature travelers, measured pacing and cultural depth.",
        tags: ["Quiet luxury", "Easier pace"],
        image: firstChinaAsset.beijingGreatWallCouple,
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
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20private%20proposal%20for%20China%2C%20Made%20for%20Families%20%2812%20days%29.%20Our%20children%27s%20ages%20are%3A%20",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I am interested in China, Made for Families. Our children's ages are: __. Please recommend the right dates, two-room setup and age-aware experiences for us.",
  },
};
