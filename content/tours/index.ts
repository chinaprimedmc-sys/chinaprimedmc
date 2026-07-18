import { destinationAsset } from "@/content/destinations/assets";
import { chengduAsset, firstChinaAsset } from "@/content/tours/assets";
import type { Tour } from "@/types/tour";

const firstChinaEmail =
  "mailto:chinaprimedmc@gmail.com?subject=Customize%20First%20China%20Beautifully%20Paced&body=Hi%20China%20Prime%20DMC%2C%0A%0AI%27d%20like%20to%20customize%20First%20China%2C%20Beautifully%20Paced.%0A%0ATravelers%3A%0ADates%3A%0APreferred%20comfort%20level%3A%0AKey%20concerns%3A%0A";

const firstChinaWhatsApp =
  "https://wa.me/447985052302?text=Hi%20China%20Prime%20DMC%2C%20I%27d%20like%20to%20customize%20First%20China%2C%20Beautifully%20Paced.";

export const tours: Tour[] = [
  {
    slug: "first-china-beautifully-paced",
    title: "First China, Beautifully Paced",
    subtitle:
      "A private 9-day China journey through Beijing, Xi'an, and Shanghai for travelers who want the essential chapters without the exhaustion.",
    duration: "9 Days / 8 Nights",
    route: "Beijing, Xi'an, Shanghai",
    styles: ["First-time China", "Family", "Culture", "Luxury"],
    hero: {
      eyebrow: "Private journey proposal",
      image: firstChinaAsset.beijingForbiddenCityMoat,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Customize My Journey", href: "#inquiry" },
    },
    seo: {
      title: "9-Day Private Beijing Xi'an Shanghai Tour",
      description:
        "Plan a private 9-day Beijing Xi'an Shanghai tour with flexible pacing, private guides, thoughtful transfers, and a route shaped around your travelers.",
      keywords: [
        "private Beijing Xi'an Shanghai tour",
        "9 day China itinerary",
        "private China tour",
        "luxury Beijing Xi'an Shanghai travel",
        "Beijing Xi'an Shanghai family tour",
      ],
    },
    overview: {
      pitch:
        "A clear first-China arc: four days in Beijing, two days in Xi'an, and three days in Shanghai, with the timing and comfort level adjusted around your group.",
      facts: [
        {
          label: "Duration",
          value: "9 days / 8 nights",
          helper: "Beijing 4 days, Xi'an 2, Shanghai 3.",
        },
        {
          label: "Destinations",
          value: "3 cities",
          helper: "Imperial Beijing, historic Xi'an, modern Shanghai.",
        },
        {
          label: "Travel Style",
          value: "Private, flexible",
          helper: "A route idea shaped around your travelers.",
        },
        {
          label: "Pacing",
          value: "Easy to moderate",
          helper: "Walking and transfer days are adjusted in planning.",
        },
        {
          label: "Suitable For",
          value: "Couples, families, seniors",
          helper: "Private logistics reduce unnecessary friction.",
        },
        {
          label: "Price Guide",
          value: "By comfort tier",
          helper: "Comfortable, Luxury, or Ultra-bespoke after inquiry.",
        },
      ],
    },
    highlights: [
      {
        title: "Beijing, with room for the scale",
        description:
          "Give the Forbidden City, Temple of Heaven, hutong texture, and Great Wall their own breathing room instead of racing between landmarks.",
        category: "Culture",
        image: firstChinaAsset.beijingGreatWallWide,
      },
      {
        title: "Xi'an, one deep historical chapter",
        description:
          "Use two focused days to understand the Terracotta Army, with the visit paced around energy, interest, and the rest of the route.",
        category: "First-time China",
        image: firstChinaAsset.xianTerracottaGroup,
      },
      {
        title: "Shanghai, a modern final note",
        description:
          "Move between riverfront architecture, neighborhood life, food, and skyline views without turning the finale into a shopping schedule.",
        category: "Luxury",
        image: firstChinaAsset.shanghaiWaterfrontGroup,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Beijing",
        destination: "Beijing",
        summary:
          "Illustrative — shaped around you. A private arrival, a calm hotel check-in, and a first evening that respects your flight time and energy.",
        image: firstChinaAsset.beijingTempleOfHeavenCorridor,
        hotel: "Beijing stay: Comfortable, Luxury, or Ultra-bespoke tier selected after inquiry",
        meals: ["As arranged in the final proposal"],
        transport: "Private airport transfer, subject to final proposal",
        activities: [
          {
            title: "Arrival support",
            description:
              "Your arrival plan can include airport meeting support, luggage flow, and a direct transfer to your selected stay.",
          },
          {
            title: "A soft first evening",
            description:
              "Keep the first night open for rest or a short neighborhood introduction if your arrival time allows.",
          },
        ],
        guideNote:
          "The first day is intentionally light. Exact meeting arrangements, meals, and hotel selection are confirmed in the personalized proposal.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        day: 2,
        title: "Imperial Beijing",
        destination: "Beijing",
        summary:
          "Illustrative — shaped around you. Put the Forbidden City at the center of the day, then add a quieter cultural layer if the group has the energy for it.",
        image: firstChinaAsset.beijingForbiddenCityLion,
        hotel: "Beijing stay: selected comfort tier",
        meals: ["As arranged in the final proposal"],
        transport: "Private vehicle and guide support, subject to final proposal",
        activities: [
          {
            time: "Morning",
            title: "Forbidden City context",
            description:
              "Follow the palace axis with historical storytelling, photo pauses, and a route adjusted to walking comfort.",
          },
          {
            time: "Afternoon",
            title: "A second layer of Beijing",
            description:
              "Choose temple atmosphere, hutong texture, or an earlier finish based on the group.",
          },
        ],
        guideNote:
          "Site sequence and entry timing depend on availability, season, and the final route plan.",
        coordinates: { latitude: 39.9163, longitude: 116.3972 },
      },
      {
        day: 3,
        title: "Temple life and Beijing texture",
        destination: "Beijing",
        summary:
          "Illustrative — shaped around you. A slower day for the Temple of Heaven, architectural detail, and the everyday side of the capital.",
        image: firstChinaAsset.beijingTempleOfHeavenReflection,
        hotel: "Beijing stay: selected comfort tier",
        meals: ["As arranged in the final proposal"],
        transport: "Private vehicle and guide support, subject to final proposal",
        activities: [
          {
            time: "Morning",
            title: "Temple of Heaven",
            description:
              "Use the complex as a place to notice proportion, color, ritual architecture, and the rhythm of the surrounding park.",
          },
          {
            time: "Afternoon",
            title: "Flexible Beijing afternoon",
            description:
              "Leave room for a neighborhood walk, a hands-on cultural moment, or rest before the Great Wall day.",
          },
        ],
        guideNote:
          "The activity mix can be softened for older travelers or made more hands-on for families.",
        coordinates: { latitude: 39.8822, longitude: 116.4066 },
      },
      {
        day: 4,
        title: "The Great Wall, at your pace",
        destination: "Beijing",
        summary:
          "Illustrative — shaped around you. Give the Great Wall a full day, with the section, start time, and walking expectations chosen around the group.",
        image: firstChinaAsset.beijingGreatWallSolo,
        hotel: "Beijing stay: selected comfort tier",
        meals: ["As arranged in the final proposal"],
        transport: "Private vehicle and guide support, subject to final proposal",
        activities: [
          {
            title: "A dedicated Wall day",
            description:
              "Choose the final section and route according to season, fitness, weather, and crowd tolerance.",
          },
          {
            title: "A measured return",
            description:
              "Keep the evening open so the day ends with the view, not a second checklist.",
          },
        ],
        guideNote:
          "The exact Great Wall section is not fixed on this sample page and will be confirmed against your group profile.",
        coordinates: { latitude: 40.4319, longitude: 116.5704 },
      },
      {
        day: 5,
        title: "High-speed rail to Xi'an",
        destination: "Xi'an",
        summary:
          "Illustrative — shaped around you. Travel from Beijing to Xi'an with station and luggage support, then settle into a first look at the city.",
        image: firstChinaAsset.xianTerracottaPit,
        hotel: "Xi'an stay: Comfortable, Luxury, or Ultra-bespoke tier selected after inquiry",
        meals: ["As arranged in the final proposal"],
        transport: "High-speed rail and private transfers, subject to final proposal",
        activities: [
          {
            title: "Rail transition",
            description:
              "The route can include station timing guidance, ticket coordination, luggage flow, and an arrival transfer.",
          },
          {
            title: "Xi'an orientation",
            description:
              "Use the arrival window for a light introduction if the group feels ready; otherwise keep it restorative.",
          },
        ],
        guideNote:
          "Transport schedules, ticket class, and final transfer details are confirmed only after dates and traveler needs are known.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        day: 6,
        title: "The Terracotta Army and Xi'an",
        destination: "Xi'an",
        summary:
          "Illustrative — shaped around you. Spend the day with the Terracotta Army, then leave space for Xi'an food culture or a gentler city finish.",
        image: firstChinaAsset.xianTerracottaPortrait,
        hotel: "Xi'an stay: selected comfort tier",
        meals: ["As arranged in the final proposal"],
        transport: "Private vehicle and guide support, subject to final proposal",
        activities: [
          {
            title: "Terracotta Army",
            description:
              "Let the excavation pits and surviving figures carry the story, with time for questions and unhurried viewing.",
          },
          {
            title: "A flexible Xi'an evening",
            description:
              "Add a food-focused or old-city layer only if it suits the group's interests and energy.",
          },
        ],
        guideNote:
          "Any food, prayer, dietary, or walking requirements should be shared before the proposal is finalized.",
        coordinates: { latitude: 34.384, longitude: 109.278 },
      },
      {
        day: 7,
        title: "Arrive in Shanghai",
        destination: "Shanghai",
        summary:
          "Illustrative — shaped around you. Transition east, then let Shanghai make its first impression through the riverfront and skyline.",
        image: firstChinaAsset.shanghaiHuangpuSunset,
        hotel: "Shanghai stay: Comfortable, Luxury, or Ultra-bespoke tier selected after inquiry",
        meals: ["As arranged in the final proposal"],
        transport: "Selected domestic transport and private transfers, subject to final proposal",
        activities: [
          {
            title: "A gentle Shanghai arrival",
            description:
              "Keep the first Shanghai window simple: settle in, read the skyline, and let the city arrive at its own pace.",
          },
          {
            title: "Waterfront evening",
            description:
              "An evening view can be considered around weather, energy, and the group's preferred walking distance.",
          },
        ],
        guideNote:
          "The best arrival-day plan depends on the final transport schedule and how much energy remains after the transfer.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        day: 8,
        title: "Old and new Shanghai",
        destination: "Shanghai",
        summary:
          "Illustrative — shaped around you. Move between architecture, neighborhood life, food, and modern city views without making shopping the point.",
        image: firstChinaAsset.shanghaiBicycleRide,
        hotel: "Shanghai stay: selected comfort tier",
        meals: ["As arranged in the final proposal"],
        transport: "Private vehicle, guide support, and short walks, subject to final proposal",
        activities: [
          {
            title: "Neighborhood perspective",
            description:
              "A private guide can connect riverfront history, local streets, design, and contemporary city life in one readable day.",
          },
          {
            title: "A lived-in layer",
            description:
              "Consider a bicycle, market, or food experience only when it matches the group's comfort and interests.",
          },
        ],
        guideNote:
          "Shopping is never required. The final day plan can stay experience-led unless the group specifically requests retail time.",
        coordinates: { latitude: 31.2406, longitude: 121.4908 },
      },
      {
        day: 9,
        title: "A measured Shanghai farewell",
        destination: "Shanghai",
        summary:
          "Illustrative — shaped around you. Keep the final morning flexible, then arrange departure support around your confirmed flight time.",
        image: firstChinaAsset.shanghaiBundNight,
        meals: ["As arranged in the final proposal"],
        transport: "Private airport transfer, subject to final proposal",
        activities: [
          {
            title: "A final choice",
            description:
              "Use the remaining time for a quiet breakfast, a short local walk, or a last view of the city if the schedule allows.",
          },
          {
            title: "Departure support",
            description:
              "The departure plan can include timing guidance, luggage assistance, and a private transfer to the airport.",
          },
        ],
        guideNote:
          "Final airport timing is always based on the confirmed flight details and the group's preferred margin.",
        coordinates: { latitude: 31.1443, longitude: 121.8083 },
      },
    ],
    accommodations: [
      {
        name: "Beijing stay | selected comfort tier",
        destination: "Beijing",
        description:
          "Choose a Comfortable, Luxury, or Ultra-bespoke stay based on location, room configuration, service expectations, and the group's walking needs.",
        roomStyle: "Room configuration confirmed after inquiry",
        highlights: ["Location fit", "Room comfort", "Transfer efficiency"],
        image: firstChinaAsset.beijingTempleOfHeavenMorning,
      },
      {
        name: "Xi'an stay | selected comfort tier",
        destination: "Xi'an",
        description:
          "The final stay is selected around access, rest, room needs, and the balance between the Terracotta Army visit and city time.",
        roomStyle: "Room configuration confirmed after inquiry",
        highlights: ["Rest between site visits", "Route position", "Group requirements"],
        image: destinationAsset.xianTerracotta,
      },
      {
        name: "Shanghai stay | selected comfort tier",
        destination: "Shanghai",
        description:
          "Choose the final hotel tier and neighborhood after dates, preferred atmosphere, room needs, and departure logistics are understood.",
        roomStyle: "Room configuration confirmed after inquiry",
        highlights: ["Neighborhood fit", "Finale comfort", "Airport access"],
        image: firstChinaAsset.shanghaiPudongSkyline,
      },
    ],
    included: [
      "Private itinerary planning around your dates and travelers",
      "English-speaking guide support in each destination, subject to final proposal",
      "Private airport, rail, and city transfers where included in the confirmed plan",
      "Sightseeing and reservation coordination agreed in the final proposal",
      "Operational support while traveling, as outlined before confirmation",
    ],
    excluded: [
      "International flights",
      "China visa fees or documentation costs when applicable",
      "Hotel, guide, transport, and meal upgrades outside the selected proposal",
      "Personal expenses and optional activities",
      "Travel insurance",
    ],
    optionalExperiences: [
      {
        title: "A gentler walking rhythm",
        description:
          "Adjust site order, vehicle support, rest windows, and daily starts around older travelers, children, or anyone who prefers less walking.",
        badges: ["Senior-aware", "Family"],
        image: firstChinaAsset.beijingGreatWallCouple,
      },
      {
        title: "Food and neighborhood texture",
        description:
          "Build in local food or market time around dietary needs, appetite, comfort, and the level of interpretation your group wants.",
        badges: ["Food", "Local life"],
        image: firstChinaAsset.shanghaiMarketVisit,
      },
      {
        title: "Photography-led timing",
        description:
          "Shape starts, pauses, and viewpoints around light and personal interest without turning the route into a production schedule.",
        badges: ["Photography", "Private"],
        image: firstChinaAsset.shanghaiSkyscrapersAtNight,
      },
    ],
    transportation: {
      title: "Transfers should make the route feel lighter.",
      description:
        "The sample route uses high-speed rail between Beijing and Xi'an, then selected domestic transport to Shanghai. Exact services, class, and timings are confirmed after dates are known.",
      items: [
        {
          label: "Airport",
          value: "Private arrival and departure support",
          helper: "Included only as defined in the final proposal.",
        },
        {
          label: "Rail",
          value: "Beijing to Xi'an by high-speed rail",
          helper: "Station flow and luggage planning can be arranged.",
        },
        {
          label: "City transfer",
          value: "Xi'an to Shanghai connection",
          helper: "The final mode depends on dates, comfort, and schedule.",
        },
      ],
    },
    routeMap: {
      title: "A focused first-China arc.",
      description:
        "Four days in Beijing, two in Xi'an, and three in Shanghai create a compact route with enough room for the major chapters to feel personal.",
      stops: [
        {
          name: "Beijing",
          days: "Days 1-4",
          description: "Forbidden City, Temple of Heaven, hutong texture, and the Great Wall.",
          coordinates: { latitude: 39.9042, longitude: 116.4074 },
        },
        {
          name: "Xi'an",
          days: "Days 5-6",
          description: "Terracotta Army and one focused chapter of historic city life.",
          coordinates: { latitude: 34.3416, longitude: 108.9398 },
        },
        {
          name: "Shanghai",
          days: "Days 7-9",
          description: "Riverfront architecture, neighborhood life, food, and a modern finale.",
          coordinates: { latitude: 31.2304, longitude: 121.4737 },
        },
      ],
    },
    gallery: [
      firstChinaAsset.beijingGreatWallGroup,
      firstChinaAsset.beijingTempleOfHeavenCeiling,
      firstChinaAsset.beijingTempleOfHeavenClose,
      firstChinaAsset.beijingTempleOfHeavenCostumeEncounter,
      firstChinaAsset.beijingTempleOfHeavenCostumeWalk,
      firstChinaAsset.shanghaiPudongCoupleNight,
      firstChinaAsset.shanghaiStreetFoodGroup,
      firstChinaAsset.shanghaiStreetFoodMen,
      firstChinaAsset.shanghaiTempleAndModernCity,
      firstChinaAsset.shanghaiYuyuanGroup,
    ],
    faqs: [
      {
        question: "Is this a fixed package?",
        answer:
          "No. This is a carefully shaped route idea. Hotel tier, daily starts, transport details, meals, accessibility needs, and optional experiences are confirmed only after your inquiry.",
      },
      {
        question: "Can the route work for children or older parents?",
        answer:
          "Yes, the private format allows walking blocks, rest windows, vehicle support, and meal timing to be shaped around the people traveling. The final plan should be reviewed against each traveler's needs.",
      },
      {
        question: "What does the hotel level mean?",
        answer:
          "Comfortable, Luxury, and Ultra-bespoke are planning tiers rather than promises of specific properties. Actual hotel suggestions depend on dates, availability, room needs, and your preferences.",
      },
      {
        question: "Is shopping required?",
        answer:
          "No. The route is designed around culture, local life, food, architecture, and personal pace. Shopping is only added when you request it.",
      },
    ],
    related: {
      tours: [],
      destinations: [
        {
          name: "Beijing",
          description:
            "The imperial opening chapter: palace scale, temple mornings, hutongs, and the Great Wall.",
          image: destinationAsset.beijingForbiddenCity,
          href: "/destinations/beijing",
        },
        {
          name: "Shanghai",
          description:
            "A modern finale with riverfront architecture, neighborhood life, and easy departure logistics.",
          image: destinationAsset.shanghaiSkyline,
          href: "/destinations/shanghai",
        },
      ],
    },
    inquiry: {
      emailHref: firstChinaEmail,
      whatsappHref: firstChinaWhatsApp,
      scheduleCallHref: "tel:+447985052302",
      defaultMessage:
        "I am interested in First China, Beautifully Paced. Please suggest the best route, hotel tier, and pacing for my travelers.",
    },
  },
  {
    slug: "chengdu-pandas-sichuan-table",
    title: "Chengdu, Pandas & Sichuan Table",
    subtitle:
      "A private 5-day Chengdu journey built around pandas, teahouse afternoons, and the layered heat and fragrance of Sichuan cooking.",
    duration: "5 Days / 4 Nights",
    route: "Chengdu and Leshan",
    styles: ["Family", "Food", "Culture", "Senior-friendly"],
    hero: {
      eyebrow: "Private Chengdu journey",
      image: chengduAsset.heroPanda,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Customize My Journey", href: "#inquiry" },
    },
    seo: {
      title: "5-Day Private Chengdu Panda and Sichuan Food Tour",
      description:
        "A private 5-day Chengdu itinerary with an early panda visit, teahouse culture, Sichuan food, private car travel, and a flexible Leshan option.",
      keywords: [
        "private Chengdu panda tour",
        "5 day Chengdu itinerary",
        "Sichuan food tour",
        "Chengdu family tour",
        "private China tour Chengdu",
      ],
    },
    overview: {
      pitch:
        "A softer western-China chapter: pandas in the morning, tea and neighbourhood life in the afternoon, with the route adjusted around children, older travellers, and appetite.",
      facts: [
        { label: "Duration", value: "5 days / 4 nights", helper: "Four nights based in Chengdu." },
        {
          label: "Destinations",
          value: "Chengdu + Leshan",
          helper: "Leshan is optional, not compulsory.",
        },
        {
          label: "Travel Style",
          value: "Private, flexible",
          helper: "Private car and personally vetted guide.",
        },
        {
          label: "Pacing",
          value: "Easy to moderate",
          helper: "The panda visit anchors the day; afternoons stay breathable.",
        },
        {
          label: "Suitable For",
          value: "Families, seniors, food lovers",
          helper: "Activities and spice levels are adjusted around your group.",
        },
        {
          label: "Price Guide",
          value: "By comfort tier",
          helper: "Confirmed after dates, rooms, and traveler needs are known.",
        },
      ],
    },
    highlights: [
      {
        title: "Pandas before the crowds",
        description:
          "Enter early, stay as long as the group enjoys it, then return by private car for tea and lunch rather than stacking another sightseeing block.",
        category: "Family",
        image: chengduAsset.pandaDetail,
      },
      {
        title: "Sichuan, at your level of heat",
        description:
          "A personally vetted guide can introduce markets, tea, and local dishes around allergies, children, and your comfort with spice.",
        category: "Food",
        image: chengduAsset.food,
      },
      {
        title: "Chengdu's softer social rhythm",
        description:
          "Tea, parks, and neighbourhood life give the route a gentler centre before you decide whether Leshan belongs in the final day.",
        category: "Culture",
        image: chengduAsset.tea,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive into Chengdu's easy pace",
        destination: "Chengdu",
        summary:
          "Your private driver meets you at the airport or station and settles you into the city without adding a sightseeing obligation.",
        image: chengduAsset.heroCity,
        hotel: "Chengdu stay: selected comfort tier",
        meals: ["As arranged in the final proposal"],
        transport: "Private airport or station transfer",
        activities: [
          {
            title: "A soft first evening",
            description:
              "Take a gentle walk through a neighbourhood such as Kuixinglou, or simply rest before your first full day.",
          },
        ],
        guideNote: "Arrival timing and the first evening are shaped around your flight and energy.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        day: 2,
        title: "Pandas before the day begins",
        destination: "Chengdu",
        summary:
          "Visit the Chengdu Research Base early, when the pandas are most active and the paths are quieter, then return to the city for tea.",
        image: chengduAsset.pandaMorning,
        hotel: "Chengdu stay: selected comfort tier",
        meals: ["Breakfast; other meals as arranged"],
        transport: "Private vehicle and guide",
        activities: [
          {
            time: "Morning",
            title: "Chengdu Research Base",
            description:
              "Your guide keeps the route shaded and manageable, with time to pause rather than chase every enclosure.",
          },
          {
            time: "Afternoon",
            title: "People's Park tea",
            description:
              "A proper teahouse pause gives children room to move and grandparents time to watch the city.",
          },
        ],
        guideNote:
          "The panda base is the day's main experience; the afternoon remains intentionally light.",
        coordinates: { latitude: 30.7337, longitude: 104.1436 },
      },
      {
        day: 3,
        title: "A city understood through taste",
        destination: "Chengdu",
        summary:
          "Move between Wuhou Shrine, old lanes, and a food experience that can be fragrant and mild or properly fiery.",
        image: chengduAsset.spice,
        hotel: "Chengdu stay: selected comfort tier",
        meals: ["Breakfast; Sichuan meal or cooking experience as arranged"],
        transport: "Private vehicle and guide",
        activities: [
          {
            title: "History and neighbourhood texture",
            description:
              "Visit Wuhou Shrine or nearby lanes with a guide who explains the city without turning the day into a lecture.",
          },
          {
            title: "Market or cooking",
            description:
              "Choose a food walk or small cooking lesson around your group's appetite, allergies, and confidence with spice.",
          },
        ],
        guideNote: "A slower afternoon, extra tea, or a rest window can replace any optional stop.",
        coordinates: { latitude: 30.6499, longitude: 104.0557 },
      },
      {
        day: 4,
        title: "Leshan, or more Chengdu",
        destination: "Leshan / Chengdu",
        summary:
          "Those who want the scale of the Leshan Giant Buddha can make the private journey; others can stay in Chengdu for a market, gallery, or long lunch.",
        image: chengduAsset.leshan,
        hotel: "Chengdu stay: selected comfort tier",
        meals: ["Breakfast; lunch as arranged"],
        transport: "Private vehicle, with a flexible return",
        activities: [
          {
            title: "Leshan option",
            description:
              "Choose an accessible viewing route and return when the river cliffs have said enough.",
          },
          {
            title: "Chengdu alternative",
            description: "Keep the day local with tea, a market, or an unhurried meal.",
          },
        ],
        guideNote: "Leshan is optional and never treated as a test of endurance.",
        coordinates: { latitude: 29.5483, longitude: 103.7677 },
      },
      {
        day: 5,
        title: "A final morning, then onward",
        destination: "Chengdu",
        summary:
          "Have one last bowl of noodles, a quiet park walk, or a lie-in before your driver takes you to the station or airport.",
        image: chengduAsset.rail,
        meals: ["Breakfast"],
        transport: "Private departure transfer",
        activities: [
          {
            title: "A final choice",
            description:
              "Use the remaining time for tea, breakfast, or a gentle local walk before departure.",
          },
          {
            title: "Onward support",
            description:
              "We remain reachable as you continue to Xi'an, Chongqing, or your next China chapter.",
          },
        ],
        guideNote:
          "Departure timing follows your confirmed connection, with a practical margin for the group.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
    ],
    accommodations: [
      {
        name: "Private travel comfort | selected around your group",
        destination: "Chengdu",
        description:
          "The final hotel and vehicle plan is chosen around room configuration, quiet rest, easy access, and the mobility needs of your family.",
        roomStyle: "Hotel and room configuration confirmed after inquiry",
        highlights: ["Private transfers", "Quiet rest", "Easy access"],
        image: chengduAsset.carInterior,
      },
    ],
    included: [
      "Private itinerary planning around your dates and travelers",
      "Private car and driver on route days where included in the final proposal",
      "English-speaking, personally vetted guide support",
      "Sightseeing and reservation coordination agreed in the final proposal",
      "Operational WhatsApp support while traveling",
    ],
    excluded: [
      "International flights",
      "China visa fees or documentation costs when applicable",
      "Hotel, guide, transport, and meal upgrades outside the selected proposal",
      "Personal expenses and travel insurance",
    ],
    optionalExperiences: [
      {
        title: "A gentler walking rhythm",
        description:
          "Adjust panda-base routes, rest windows, vehicle support, and daily starts around children or older travelers.",
        badges: ["Senior-aware", "Family"],
        image: chengduAsset.car,
      },
      {
        title: "Food and tea texture",
        description:
          "Build in a market, tea house, or cooking moment around appetite and spice tolerance.",
        badges: ["Food", "Local life"],
        image: chengduAsset.teaDetail,
      },
      {
        title: "A human point of contact",
        description:
          "Your personally vetted guide remains part of the experience, with direct support when the plan needs to change.",
        badges: ["Flexible", "Private"],
        image: chengduAsset.guide,
      },
    ],
    transportation: {
      title: "Private transport keeps the route light.",
      description:
        "A private car and driver handle airport, city, panda-base, and optional Leshan transfers, with the day able to slow down when the group needs it.",
      items: [
        {
          label: "Airport",
          value: "Private arrival and departure support",
          helper: "Included as defined in the final proposal.",
        },
        {
          label: "City transfer",
          value: "Private car and driver",
          helper: "No forced group joins or coach timetable.",
        },
        {
          label: "Onward",
          value: "Rail or flight support",
          helper: "Station and luggage flow can be arranged.",
        },
      ],
    },
    routeMap: {
      title: "A compact Chengdu chapter.",
      description:
        "Four nights in Chengdu create room for pandas, food, tea, and a considered Leshan option without overfilling every day.",
      stops: [
        {
          name: "Chengdu",
          days: "Days 1-5",
          description: "Pandas, tea houses, Wuhou Shrine, Sichuan food, and flexible city time.",
          coordinates: { latitude: 30.5728, longitude: 104.0668 },
        },
        {
          name: "Leshan",
          days: "Optional Day 4",
          description:
            "The Giant Buddha, reached by private car when the group wants the wider day.",
          coordinates: { latitude: 29.5483, longitude: 103.7677 },
        },
      ],
    },
    gallery: [
      chengduAsset.routeLeshan,
      chengduAsset.cityGalleryOne,
      chengduAsset.cityGalleryTwo,
      chengduAsset.cityGalleryThree,
      chengduAsset.teaGalleryOne,
      chengduAsset.teaGalleryTwo,
      chengduAsset.teaGalleryThree,
    ],
    faqs: [
      {
        question: "Is this a fixed package?",
        answer:
          "No. This is a five-day route idea. Hotel tier, starts, meals, walking load, and the Leshan option are confirmed around your travelers.",
      },
      {
        question: "Can we skip Leshan?",
        answer:
          "Yes. Leshan is optional. A slower Chengdu day with tea, food, markets, or rest is a complete alternative.",
      },
      {
        question: "Is the route suitable for older travelers?",
        answer:
          "Often yes, when the panda-base walking route and daily starts are reviewed honestly in advance. Private transport makes shorter days possible.",
      },
      {
        question: "Can Sichuan food be mild?",
        answer:
          "Yes. We plan around allergies, children, and spice tolerance, from fragrant and mild to properly fiery.",
      },
    ],
    related: {
      tours: [],
      destinations: [
        {
          name: "Chengdu",
          description: "Pandas, tea houses, Sichuan food, and a slower sense of daily life.",
          image: destinationAsset.chengduPanda,
          href: "/destinations/chengdu",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=Customize%20Chengdu%2C%20Pandas%20%26%20Sichuan%20Table",
      whatsappHref:
        "https://wa.me/447985052302?text=Hi%20China%20Prime%20DMC%2C%20I%27d%20like%20to%20customize%20the%20Chengdu%20panda%20and%20Sichuan%20journey.",
      scheduleCallHref: "tel:+447985052302",
      defaultMessage:
        "I am interested in Chengdu, Pandas & Sichuan Table. Please suggest the best pacing for my travelers.",
    },
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getTourSlugs() {
  return tours.map((tour) => tour.slug);
}
