import { destinationAsset } from "@/content/destinations/assets";
import {
  beijingUnhurriedAsset,
  chengduAsset,
  firstChinaAsset,
  shanghaiZhangjiajieAsset,
} from "@/content/tours/assets";
import type { Tour } from "@/types/tour";

const firstChinaEmail =
  "mailto:chinaprimedmc@gmail.com?subject=9-Day%20Beijing%20Xi%27an%20Shanghai%20Private%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20the%209-day%20Beijing%2C%20Xi%27an%20and%20Shanghai%20private%20tour.%0A%0ATravelers%3A%0ADates%3A%0AHotel%20preference%3A%0AQuestions%3A%0A";

const firstChinaWhatsApp =
  "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20learn%20more%20about%20the%209-day%20Beijing%2C%20Xi%27an%20and%20Shanghai%20private%20tour.";

const chengduJiuzhaigouImage = (src: string, alt: string, width = 1600, height = 1067) => ({
  src: `/tours/chengdu-pandas-jiuzhaigou/${src}`,
  alt,
  width,
  height,
});

const chengduJiuzhaigouAsset = {
  hero: chengduJiuzhaigouImage(
    "hero.webp",
    "Autumn forest and a turquoise lake in Jiuzhaigou National Park",
  ),
  day01: chengduJiuzhaigouImage(
    "day-01.webp",
    "Traditional covered tea bowl in a Chengdu tea house",
  ),
  day02: chengduJiuzhaigouImage(
    "day-02.webp",
    "Giant panda resting among bamboo at Chengdu Panda Base",
  ),
  day03: chengduJiuzhaigouImage("day-03.webp", "Tea house setting in Chengdu's People's Park"),
  day04: chengduJiuzhaigouImage(
    "day-04.webp",
    "Summer mountain lake and forest scenery near Jiuzhaigou",
  ),
  day05: chengduJiuzhaigouImage(
    "day-05.webp",
    "Clear turquoise lake surrounded by forest in Jiuzhaigou",
  ),
  day06: chengduJiuzhaigouImage(
    "day-06.webp",
    "Autumn colours reflected in a Jiuzhaigou mountain lake",
  ),
  day07: chengduJiuzhaigouImage(
    "day-07.webp",
    "Mountain valley and alpine lake scenery in Jiuzhaigou",
  ),
  gallery: Array.from({ length: 13 }, (_, index) =>
    chengduJiuzhaigouImage(
      `gallery-${String(index + 1).padStart(2, "0")}.webp`,
      "Sichuan and Jiuzhaigou scenery from a private China journey",
      1200,
      800,
    ),
  ),
};

export const tours: Tour[] = [
  {
    slug: "first-china-beautifully-paced",
    title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
    subtitle:
      "China's essential first route, with expert private guiding, considered hotel choices and comfortable city-to-city travel.",
    duration: "9 Days / 8 Nights",
    route: "Beijing, Xi'an, Shanghai",
    styles: ["First-time China", "Family", "Culture", "Luxury"],
    hero: {
      eyebrow: "Private tour idea",
      image: firstChinaAsset.beijingGreatWallSunriseHero,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Plan This Tour", href: "#inquiry" },
    },
    seo: {
      title: "9-Day Private Beijing Xi'an Shanghai Tour",
      description:
        "A 9-day private Beijing, Xi'an and Shanghai tour with expert guides, selected hotels, private transfers and carefully planned rail travel.",
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
        "Three defining cities, connected with private support and enough time to appreciate each one.",
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
          helper: "Private transfers make arrivals and sightseeing days easier.",
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
          "Meet your driver for a private transfer, settle into the hotel and keep the first evening light after your flight.",
        image: firstChinaAsset.beijingTempleOfHeavenCorridor,
        hotel: "Beijing stay: Comfortable, Luxury, or Ultra-bespoke tier selected after inquiry",
        meals: ["As confirmed in your written quotation"],
        transport: "Private airport transfer, as confirmed in writing",
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
          "The first day is intentionally light. Your meeting arrangements, meals and hotel are confirmed in writing before you book.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        day: 2,
        title: "Imperial Beijing",
        destination: "Beijing",
        summary:
          "Give the Forbidden City the time it deserves, then add a quieter cultural visit if the group still has energy.",
        image: firstChinaAsset.beijingForbiddenCityLion,
        hotel: "Beijing stay: selected comfort tier",
        meals: ["As confirmed in your written quotation"],
        transport: "Private vehicle and guide, as confirmed in writing",
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
          "Explore the Temple of Heaven, architectural detail and the everyday side of Beijing at a measured pace.",
        image: firstChinaAsset.beijingTempleOfHeavenReflection,
        hotel: "Beijing stay: selected comfort tier",
        meals: ["As confirmed in your written quotation"],
        transport: "Private vehicle and guide, as confirmed in writing",
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
          "Give the Great Wall a full day, choosing the section, start time and walking level around your group.",
        image: firstChinaAsset.beijingGreatWallSolo,
        hotel: "Beijing stay: selected comfort tier",
        meals: ["As confirmed in your written quotation"],
        transport: "Private vehicle and guide, as confirmed in writing",
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
          "Travel from Beijing to Xi'an with station and luggage support, then settle in with a first look at the city.",
        image: firstChinaAsset.xianTerracottaPit,
        hotel: "Xi'an stay: Comfortable, Luxury, or Ultra-bespoke tier selected after inquiry",
        meals: ["As confirmed in your written quotation"],
        transport: "High-speed rail and private transfers, as confirmed in writing",
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
          "Spend the day with the Terracotta Army, then leave space for Xi'an food culture or a quieter evening.",
        image: firstChinaAsset.xianTerracottaPortrait,
        hotel: "Xi'an stay: selected comfort tier",
        meals: ["As confirmed in your written quotation"],
        transport: "Private vehicle and guide, as confirmed in writing",
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
          "Share any dietary, prayer or walking requirements before the services are confirmed.",
        coordinates: { latitude: 34.384, longitude: 109.278 },
      },
      {
        day: 7,
        title: "Arrive in Shanghai",
        destination: "Shanghai",
        summary:
          "Travel east and let Shanghai make its first impression through the riverfront and skyline.",
        image: firstChinaAsset.shanghaiHuangpuSunset,
        hotel: "Shanghai stay: Comfortable, Luxury, or Ultra-bespoke tier selected after inquiry",
        meals: ["As confirmed in your written quotation"],
        transport: "Selected domestic transport and private transfers, as confirmed in writing",
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
          "Move between architecture, neighborhood life, food and modern city views, with no compulsory shopping stops.",
        image: firstChinaAsset.shanghaiBicycleRide,
        hotel: "Shanghai stay: selected comfort tier",
        meals: ["As confirmed in your written quotation"],
        transport: "Private vehicle, guide and short walks, as confirmed in writing",
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
          "Keep the final morning flexible, then transfer to the airport around your confirmed flight time.",
        image: firstChinaAsset.shanghaiBundNight,
        meals: ["As confirmed in your written quotation"],
        transport: "Private airport transfer, as confirmed in writing",
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
      "English-speaking private guide in each destination, as confirmed in writing",
      "Private airport, rail, and city transfers where included in the confirmed plan",
      "Sightseeing and reservations listed in your written quotation",
      "Local support while traveling, as explained before booking",
    ],
    excluded: [
      "International flights",
      "China visa fees or documentation costs when applicable",
      "Hotel, guide, transport and meal upgrades not listed in your quotation",
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
          helper: "Included only when listed in your written quotation.",
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
        "I am interested in the 9-Day Beijing, Xi'an & Shanghai Private Tour. Please recommend the right hotels and daily pace for my group.",
    },
  },
  {
    slug: "chengdu-pandas-sichuan-table",
    title: "5-Day Chengdu Panda & Sichuan Food Private Tour",
    subtitle:
      "Early panda encounters, teahouse culture and Sichuan food, with a private guide and one comfortable Chengdu base.",
    duration: "5 Days / 4 Nights",
    route: "Chengdu and Leshan",
    styles: ["Family", "Food", "Culture", "Senior-friendly"],
    hero: {
      eyebrow: "Private Chengdu journey",
      image: chengduAsset.heroPanda,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Plan This Tour", href: "#inquiry" },
    },
    seo: {
      title: "5-Day Private Chengdu Panda and Sichuan Food Tour",
      description:
        "A 5-day private Chengdu tour with pandas, teahouse culture, Sichuan food, private transport and an optional Leshan day trip.",
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
        "See Chengdu at its best hours, then enjoy its food and daily life without changing hotels.",
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
        meals: ["As confirmed in your written quotation"],
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
      "Private car and driver on the days listed in your written quotation",
      "English-speaking, personally vetted guide support",
      "Sightseeing and reservations listed in your written quotation",
      "WhatsApp support while traveling",
    ],
    excluded: [
      "International flights",
      "China visa fees or documentation costs when applicable",
      "Hotel, guide, transport and meal upgrades not listed in your quotation",
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
          helper: "Included when listed in your written quotation.",
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
        "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20learn%20more%20about%20the%205-day%20Chengdu%20panda%20and%20Sichuan%20food%20private%20tour.",
      scheduleCallHref: "tel:+447985052302",
      defaultMessage:
        "I am interested in Chengdu, Pandas & Sichuan Table. Please suggest the best pacing for my travelers.",
    },
  },
  {
    slug: "chengdu-pandas-jiuzhaigou-private-7-day-tour",
    title: "7-Day Chengdu Panda & Jiuzhaigou Private Journey",
    subtitle:
      "Giant pandas, Sichuan food and Jiuzhaigou's alpine lakes, connected with private support and a comfortable daily rhythm.",
    duration: "7 Days / 6 Nights",
    route: "Chengdu, Jiuzhaigou",
    styles: ["Nature", "Family", "Food", "Photography", "Senior-friendly"],
    hero: {
      eyebrow: "Private Sichuan journey",
      image: chengduJiuzhaigouAsset.hero,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Request a Tailored Proposal", href: "#inquiry" },
    },
    seo: {
      title: "7-Day Chengdu Panda & Jiuzhaigou Private Tour",
      description:
        "Plan a private 7-day Chengdu and Jiuzhaigou tour with pandas, Sichuan food, alpine lakes, private transfers and flexible pacing.",
      keywords: [
        "Chengdu and Jiuzhaigou private tour",
        "7 day Chengdu Jiuzhaigou itinerary",
        "Chengdu panda and Jiuzhaigou tour",
        "private Jiuzhaigou tour",
        "Jiuzhaigou tour from Chengdu",
        "China panda and nature tour",
        "Chengdu family private tour",
        "Jiuzhaigou tour for seniors",
      ],
    },
    overview: {
      pitch:
        "See pandas at a better hour, understand Chengdu through food and tea, then reach Jiuzhaigou with the regional logistics handled around your group.",
      facts: [
        {
          label: "Duration",
          value: "7 days / 6 nights",
          helper: "Three nights in Chengdu and three in the Jiuzhaigou area.",
        },
        {
          label: "Destinations",
          value: "Chengdu + Jiuzhaigou",
          helper: "City culture, pandas and alpine landscapes in one Sichuan route.",
        },
        {
          label: "Travel Style",
          value: "Private, tailored",
          helper: "Hotels, transport and daily intensity are confirmed around your group.",
        },
        {
          label: "Pacing",
          value: "Easy to moderate",
          helper: "Park transport reduces distance, but paths, steps and altitude remain.",
        },
        {
          label: "Suitable For",
          value: "Couples, families, private groups",
          helper: "Especially strong for nature, pandas and photography interests.",
        },
      ],
    },
    planningSupport: {
      eyebrow: "Before your proposal",
      title: "Mountain logistics deserve a clear plan.",
      description:
        "The right connection, hotel location and walking plan depend on your dates, party and onward travel.",
      items: [
        {
          label: "Journey end",
          value: "Jiuzhaigou area",
          helper: "A return to Chengdu can be added as an eighth day.",
        },
        {
          label: "Altitude",
          value: "Discuss before booking",
          helper: "Huanglong is optional and higher than the main Jiuzhaigou visit.",
        },
        {
          label: "Dietary needs",
          value: "Checked in advance",
          helper: "Share halal, vegetarian and allergy requirements before quotation.",
        },
        {
          label: "Season",
          value: "Conditions vary",
          helper: "Weather, access and transport schedules shape the final plan.",
        },
      ],
      note: "Your written proposal will confirm the operating transport, hotels, tickets and included services for your dates.",
    },
    highlights: [
      {
        title: "Pandas at a better hour",
        description:
          "An early private transfer supports a calmer visit and a better chance of seeing active pandas before the day becomes busier.",
        category: "Family",
        image: chengduJiuzhaigouAsset.day02,
      },
      {
        title: "Jiuzhaigou without the planning burden",
        description:
          "Regional transport, private road transfers, park arrangements and hotel stays are connected around your dates rather than left as separate bookings.",
        category: "Nature",
        image: chengduJiuzhaigouAsset.day05,
      },
      {
        title: "Two contrasting sides of Sichuan",
        description:
          "Chengdu's tea houses and kitchens lead naturally into forested valleys, clear lakes and changing mountain light.",
        category: "Photography",
        image: chengduJiuzhaigouAsset.day03,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Chengdu",
        destination: "Chengdu",
        summary:
          "Meet your local team on arrival and transfer privately to your hotel. The first evening stays light so you can settle in and begin without pressure.",
        image: chengduJiuzhaigouAsset.day01,
        hotel: "Chengdu stay: hotel and room category selected after inquiry",
        meals: ["As confirmed in your written quotation"],
        transport: "Private airport or station transfer",
        activities: [
          {
            title: "Private arrival support",
            description:
              "Your driver meets the confirmed flight or train and takes you directly to the selected hotel.",
          },
          {
            title: "A deliberately quiet evening",
            description:
              "Rest after the journey or take a short neighbourhood walk if your arrival time and energy allow.",
          },
        ],
        guideNote:
          "Arrival support and transfer timing are arranged around your confirmed details.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        day: 2,
        title: "Pandas and a quiet Chengdu afternoon",
        destination: "Chengdu",
        summary:
          "Begin with a carefully timed visit to Chengdu Panda Base, then return to the city for tea, a relaxed neighbourhood walk or time at leisure.",
        image: chengduJiuzhaigouAsset.day02,
        hotel: "Chengdu stay: hotel and room category selected after inquiry",
        meals: ["Breakfast; other meals as confirmed"],
        transport: "Private vehicle and English-speaking guide",
        activities: [
          {
            time: "Morning",
            title: "Chengdu Research Base",
            description:
              "Follow a manageable route through the panda areas with time to pause rather than rushing between every enclosure.",
          },
          {
            time: "Afternoon",
            title: "Tea house or neighbourhood time",
            description:
              "Choose a traditional tea house, a short local walk or a restful afternoon according to the group.",
          },
        ],
        guideNote:
          "Earlier starts generally support a more comfortable panda visit; the afternoon remains flexible.",
        coordinates: { latitude: 30.7337, longitude: 104.1436 },
      },
      {
        day: 3,
        title: "Sichuan flavours and local life",
        destination: "Chengdu",
        summary:
          "Explore Chengdu through its food culture and everyday rhythm, with a private guide adapting the day around spice tolerance, dietary needs and energy.",
        image: chengduJiuzhaigouAsset.day03,
        hotel: "Chengdu stay: hotel and room category selected after inquiry",
        meals: ["Breakfast; food experience as confirmed"],
        transport: "Private vehicle and English-speaking guide",
        activities: [
          {
            title: "Market and neighbourhood context",
            description:
              "See how local ingredients, tea and daily routines fit into Chengdu life with explanation from your guide.",
          },
          {
            title: "A Sichuan table shaped around you",
            description:
              "Select a guided meal, food walk or cooking experience suited to your appetite and preferences.",
          },
        ],
        guideNote:
          "Halal, vegetarian, allergy and other dietary requirements must be shared before confirmation so suitable options can be checked.",
        coordinates: { latitude: 30.657, longitude: 104.066 },
      },
      {
        day: 4,
        title: "From Chengdu into the mountains",
        destination: "Chengdu to Jiuzhaigou",
        summary:
          "Travel towards Jiuzhaigou using the most suitable rail and private road connection operating for your dates, as the landscape changes from urban Sichuan to mountain valleys.",
        image: chengduJiuzhaigouAsset.day04,
        hotel: "Jiuzhaigou area stay: selected around park access and comfort",
        meals: ["Breakfast; other meals as confirmed"],
        transport: "Rail and private road transfer, confirmed for your travel date",
        activities: [
          {
            title: "Managed regional connection",
            description:
              "Tickets, station assistance and the onward private transfer are coordinated as one journey rather than separate bookings.",
          },
          {
            title: "Settle into the Jiuzhaigou area",
            description:
              "Keep the evening free for rest, an early meal and adjustment before the national park day.",
          },
        ],
        guideNote:
          "The exact connection depends on seasonal schedules and operating conditions and will be stated in your written proposal.",
        coordinates: { latitude: 33.2609, longitude: 103.9186 },
      },
      {
        day: 5,
        title: "Jiuzhaigou's lakes and forested valleys",
        destination: "Jiuzhaigou",
        summary:
          "Spend a full day among Jiuzhaigou's clear lakes, waterfalls and forested valleys, with the route adjusted around weather, walking comfort and the places that matter most to you.",
        image: chengduJiuzhaigouAsset.day05,
        hotel: "Jiuzhaigou area stay: selected around park access and comfort",
        meals: ["Breakfast; other meals as confirmed"],
        transport: "Private hotel transfers and national park transport",
        activities: [
          {
            title: "A considered national park route",
            description:
              "Use the park transport and selected walking sections to experience the valleys without treating every stop as compulsory.",
          },
          {
            title: "Time for changing light",
            description:
              "The day leaves room to pause at the lakes and viewpoints that suit the season and visibility.",
          },
        ],
        guideNote:
          "Park transport reduces distance, but paths, steps, queues and changing weather cannot be removed completely.",
        coordinates: { latitude: 33.252, longitude: 103.918 },
      },
      {
        day: 6,
        title: "A second mountain day, chosen carefully",
        destination: "Jiuzhaigou / Huanglong",
        summary:
          "Choose a gentler second day around Jiuzhaigou or consider Huanglong when the season, weather, access, health and walking ability make it appropriate.",
        image: chengduJiuzhaigouAsset.day06,
        hotel: "Jiuzhaigou area stay: selected around park access and comfort",
        meals: ["Breakfast; other meals as confirmed"],
        transport: "Private vehicle according to the confirmed option",
        activities: [
          {
            title: "Gentler Jiuzhaigou option",
            description:
              "Use the day for a slower scenic experience, cultural context or rest rather than repeating a demanding park schedule.",
          },
          {
            title: "Huanglong option",
            description:
              "Visit Huanglong only when current access and the group's altitude and walking considerations support it.",
          },
        ],
        guideNote:
          "Huanglong is optional, reaches higher altitude and is never presented as compulsory.",
        coordinates: { latitude: 32.754, longitude: 103.83 },
      },
      {
        day: 7,
        title: "Depart from the Jiuzhaigou area",
        destination: "Jiuzhaigou",
        summary:
          "Transfer privately to Jiuzhai Huanglong Airport or your confirmed onward connection. An additional return to Chengdu can be arranged as an eighth day.",
        image: chengduJiuzhaigouAsset.day07,
        meals: ["Breakfast"],
        transport: "Private departure transfer",
        activities: [
          {
            title: "Onward travel support",
            description:
              "Departure timing is planned around the confirmed flight or onward arrangement with a practical margin.",
          },
          {
            title: "Optional Chengdu return",
            description:
              "Add an extra night and return connection when your international flight or wider China route requires it.",
          },
        ],
        guideNote:
          "This seven-day version ends in the Jiuzhaigou area; a Chengdu return is quoted separately.",
        coordinates: { latitude: 32.8533, longitude: 103.6822 },
      },
    ],
    accommodations: [
      {
        name: "Chengdu stay | selected around location and rest",
        destination: "Chengdu",
        description:
          "Your hotel is selected around room configuration, breakfast, reliable access and an easy return after private touring.",
        roomStyle: "Hotel tier and room category confirmed after inquiry",
        highlights: ["Well-planned location", "Breakfast", "Private transfers"],
        image: chengduJiuzhaigouAsset.gallery[0],
      },
      {
        name: "Jiuzhaigou stay | selected around park access",
        destination: "Jiuzhaigou",
        description:
          "The mountain stay is chosen around park access, heating or climate comfort, room needs and realistic transfer times.",
        roomStyle: "Hotel tier and room category confirmed after inquiry",
        highlights: ["Park access", "Mountain comfort", "Local support"],
        image: chengduJiuzhaigouAsset.gallery[1],
      },
    ],
    included: [
      "Private itinerary planning around your dates and travelers",
      "Hotels and breakfasts listed in the final written proposal",
      "Private airport, station and road transfers listed in the final proposal",
      "English-speaking guide service as confirmed for each destination",
      "Domestic rail or flight segment when stated in the final proposal",
      "National park transport and attraction tickets listed in the final proposal",
      "Local support before arrival and while traveling",
      "No forced shopping visits",
    ],
    excluded: [
      "International flights",
      "China visa costs or documentation services unless stated",
      "Meals, drinks and optional experiences not listed in the final proposal",
      "Travel insurance, medical costs and personal expenses",
      "Any service not confirmed in the final written proposal",
    ],
    optionalExperiences: [
      {
        title: "A gentler mountain rhythm",
        description:
          "Adjust park sections, starts, rest windows and the second scenic day around children, older travelers or walking comfort.",
        badges: ["Flexible pace", "Private"],
        image: chengduJiuzhaigouAsset.gallery[2],
      },
      {
        title: "Dietary planning before arrival",
        description:
          "Discuss halal, vegetarian, allergy and spice requirements so suitable restaurants and menus can be checked before confirmation.",
        badges: ["Dietary care", "Food"],
        image: chengduJiuzhaigouAsset.gallery[3],
      },
      {
        title: "An eighth day back to Chengdu",
        description:
          "Add a return connection and Chengdu night when it creates a safer or more comfortable onward departure.",
        badges: ["Onward travel", "Flexible"],
        image: chengduJiuzhaigouAsset.gallery[4],
      },
    ],
    transportation: {
      title: "The transport plan is part of the product.",
      description:
        "Chengdu and Jiuzhaigou are connected using the most suitable operating rail, road or flight combination for your dates, with private transfers at each end.",
      items: [
        {
          label: "Chengdu",
          value: "Private city transfers",
          helper: "Airport, panda base and city touring as confirmed.",
        },
        {
          label: "Regional connection",
          value: "Schedule checked by date",
          helper: "The exact rail, road or flight arrangement is confirmed in writing.",
        },
        {
          label: "Jiuzhaigou",
          value: "Private local transfers",
          helper: "Hotel, park and departure logistics according to the final plan.",
        },
      ],
    },
    routeMap: {
      title: "From Sichuan's capital to its alpine valleys.",
      description:
        "Three Chengdu nights create room for pandas and local life before three nights in the Jiuzhaigou area protect the mountain experience from a rushed turnaround.",
      stops: [
        {
          name: "Chengdu",
          days: "Days 1-4",
          description: "Arrival, pandas, tea, Sichuan food and the managed regional connection.",
          coordinates: { latitude: 30.5728, longitude: 104.0668 },
        },
        {
          name: "Jiuzhaigou",
          days: "Days 4-7",
          description:
            "Alpine lakes, forested valleys, a flexible second mountain day and onward departure.",
          coordinates: { latitude: 33.2609, longitude: 103.9186 },
        },
      ],
    },
    gallery: [
      chengduJiuzhaigouAsset.hero,
      chengduJiuzhaigouAsset.day01,
      chengduJiuzhaigouAsset.day02,
      chengduJiuzhaigouAsset.day03,
      chengduJiuzhaigouAsset.day04,
      chengduJiuzhaigouAsset.day05,
      chengduJiuzhaigouAsset.day06,
      chengduJiuzhaigouAsset.day07,
      ...chengduJiuzhaigouAsset.gallery,
    ],
    faqs: [
      {
        question: "How do we travel from Chengdu to Jiuzhaigou?",
        answer:
          "The most suitable rail, road or flight combination is selected for your dates. Your written proposal will name the stations or airports, ticket class, private transfers and expected journey flow.",
      },
      {
        question: "Does this seven-day itinerary return to Chengdu?",
        answer:
          "No. The seven-day version ends in the Jiuzhaigou area. A return connection and additional Chengdu night can be added as an eighth day when it suits your onward travel.",
      },
      {
        question: "Is Jiuzhaigou suitable for older travelers?",
        answer:
          "It can be, when walking comfort, altitude, hotel access and the park route are reviewed honestly before booking. Park vehicles reduce distance, but paths, steps and queues remain.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "The main park day is easy to moderate for many travelers, using park transport between selected areas. The final walking plan depends on seasonal access, crowds and your group's comfort.",
      },
      {
        question: "What altitude should we expect?",
        answer:
          "Jiuzhaigou is a mountain destination and Huanglong is higher. Share relevant health or mobility concerns before planning and seek medical advice when appropriate; Huanglong remains optional.",
      },
      {
        question: "Can families with children take this journey?",
        answer:
          "Yes. Panda timing, private transfers, lighter afternoons and a flexible second mountain day make the route adaptable for many families.",
      },
      {
        question: "Can you arrange halal or vegetarian meals?",
        answer:
          "We can discuss and check suitable options before confirmation. Availability and menu suitability vary by destination, so dietary requirements should be shared before quotation.",
      },
      {
        question: "Can Huanglong be added?",
        answer:
          "Yes, when seasonal access, weather, altitude and walking ability make it appropriate. It is an optional choice rather than a compulsory part of the journey.",
      },
      {
        question: "What happens if mountain weather affects the plan?",
        answer:
          "The local team reviews current conditions and adjusts timing or the second scenic day where possible. Access and visibility cannot be guaranteed, and material changes are discussed with you.",
      },
      {
        question: "How is the private tour quotation calculated?",
        answer:
          "The proposal is based on your dates, party size, hotel and room preferences, transport schedule, guide configuration and requested inclusions. No fixed price is shown because every confirmed plan is tailored.",
      },
    ],
    related: {
      tours: [
        {
          title: "5-Day Chengdu Panda & Sichuan Food Private Tour",
          description:
            "A compact Chengdu stay for travelers who want pandas, food and tea without adding a mountain journey.",
          tags: ["Pandas", "Food", "One hotel base"],
          image: chengduJiuzhaigouAsset.day02,
          route: "Chengdu and Leshan",
          duration: "5 Days / 4 Nights",
          href: "/tours/chengdu-pandas-sichuan-table",
        },
      ],
      destinations: [
        {
          name: "Chengdu",
          description: "Pandas, tea houses, Sichuan food and an easy local rhythm.",
          image: chengduJiuzhaigouAsset.day02,
          href: "/destinations/chengdu",
        },
        {
          name: "Jiuzhaigou",
          description:
            "Clear alpine lakes, waterfalls and forested valleys shaped by season and light.",
          image: chengduJiuzhaigouAsset.day05,
          href: "/destinations/jiuzhaigou",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=7-Day%20Chengdu%20Panda%20%26%20Jiuzhaigou%20Private%20Journey",
      whatsappHref:
        "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20tailored%20proposal%20for%20the%207-day%20Chengdu%20Panda%20and%20Jiuzhaigou%20private%20journey.",
      scheduleCallHref: "tel:+447985052302",
      defaultMessage:
        "I am interested in the 7-Day Chengdu Panda & Jiuzhaigou Private Journey. Please recommend the right hotels, transport plan and daily pace for my group.",
    },
  },
  {
    slug: "beijing-great-wall-private-5-day-tour",
    title: "5-Day Beijing & Great Wall Private Tour",
    subtitle:
      "One well-located hotel, private support and five considered days across imperial Beijing and the Great Wall.",
    duration: "5 Days / 4 Nights",
    route: "Beijing",
    styles: ["Culture", "Luxury", "Senior-friendly", "Muslim-friendly"],
    hero: {
      eyebrow: "Private Beijing journey",
      image: beijingUnhurriedAsset.hero,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Plan My Beijing Journey", href: "#inquiry" },
    },
    seo: {
      title: "5-Day Private Beijing Tour with Great Wall",
      description:
        "A 5-day private Beijing tour with the Forbidden City, Mutianyu Great Wall, hutongs, private transfers and Muslim-friendly planning on request.",
      keywords: [
        "5 day private Beijing tour",
        "Beijing private itinerary",
        "Beijing Great Wall and Forbidden City tour",
        "Muslim-friendly Beijing tour",
        "luxury Beijing private journey",
        "Beijing hutong private tour",
      ],
    },
    overview: {
      pitch:
        "Beijing's essential landmarks, one hotel base and a daily plan adjusted to your interests and walking comfort.",
      facts: [
        {
          label: "Duration",
          value: "5 days / 4 nights",
          helper: "One Beijing hotel throughout the journey.",
        },
        {
          label: "Destinations",
          value: "Beijing",
          helper:
            "Forbidden City, hutongs, Mutianyu Great Wall, Temple of Heaven and Summer Palace.",
        },
        {
          label: "Travel Style",
          value: "Private and flexible",
          helper:
            "English-speaking driver-host for 2 or 4 travelers; separate driver and guide for 6 or 8.",
        },
        {
          label: "Pacing",
          value: "Easy to moderate",
          helper:
            "Walking, rest periods, cable-car options and starts are reviewed around the group.",
        },
        {
          label: "Planning",
          value: "Muslim-friendly available",
          helper: "Dining preferences and prayer timing are discussed before confirmation.",
        },
      ],
    },
    planningSupport: {
      eyebrow: "Muslim-friendly planning",
      title: "Built around your requirements, confirmed before your journey.",
      description:
        "We do not assume what comfortable travel means for your family. Share your dietary, prayer, privacy and pacing needs, then we check the practical details against your actual Beijing dates and route.",
      items: [
        {
          label: "Halal, no-pork or no-alcohol preferences",
          value: "Dining preferences",
          helper:
            "Tell us whether a certification requirement is essential and how you would like meals handled.",
        },
        {
          label: "Daily prayer windows and Friday considerations",
          value: "Prayer timing",
          helper:
            "The route can keep suitable breaks in mind where timing and venue operations allow.",
        },
        {
          label: "Nearby mosque or prayer-space information",
          value: "Local context",
          helper:
            "Specific access, opening hours and practical details are checked rather than assumed.",
        },
        {
          label: "Walking load, privacy and family comfort",
          value: "A measured pace",
          helper:
            "Starts, rest periods, room arrangements and route intensity are reviewed around your group.",
        },
      ],
      note: "Specific restaurant certification, mosque access, prayer space and opening hours are checked for your dates before booking. Meal costs are paid directly unless your written quotation includes them.",
    },
    highlights: [
      {
        title: "Imperial Beijing, without the checklist",
        description:
          "Give the Forbidden City time for context, architecture and photography, then let your English-speaking host or guide adjust the route around walking comfort and interest.",
        category: "Culture",
        image: beijingUnhurriedAsset.forbiddenCityOverview,
      },
      {
        title: "The Great Wall at a gentler rhythm",
        description:
          "Choose the Mutianyu route, start time and cable-car option around the group, with a private vehicle and a measured return to the city.",
        category: "Senior-friendly",
        image: beijingUnhurriedAsset.greatWallOverview,
      },
      {
        title: "Faith and dietary needs, planned before confirmation",
        description:
          "Tell us about halal preferences, certification requirements, no-pork or no-alcohol needs, prayer timing and privacy preferences. We check practical options for your actual dates and route.",
        category: "Muslim-friendly",
        image: beijingUnhurriedAsset.dining,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Beijing, then settle in",
        destination: "Beijing",
        summary:
          "A private arrival transfer, calm hotel check-in, and an intentionally light first evening shaped around your flight time.",
        image: beijingUnhurriedAsset.arrivalHutong,
        hotel:
          "One Beijing hotel throughout the journey, selected and confirmed around your comfort level",
        meals: ["No meals included today"],
        transport: "Private airport or railway-station transfer",
        activities: [
          {
            title: "Private arrival support",
            description:
              "Meet your local representative, move smoothly with your luggage, and transfer directly to the confirmed Beijing stay.",
          },
          {
            title: "A soft first evening",
            description:
              "Rest at the hotel or take a short neighborhood introduction if arrival time and energy allow.",
          },
        ],
        guideNote:
          "Share dietary, prayer, mobility and room preferences before arrival so the local team can prepare the right first-day support.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        day: 2,
        title: "The Forbidden City and hutong life",
        destination: "Beijing",
        summary:
          "Follow the imperial axis with English-speaking local support, then move into the quieter scale of Beijing's hutongs and courtyard life.",
        image: beijingUnhurriedAsset.forbiddenCity,
        hotel: "Beijing hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle, English-speaking support and walking",
        activities: [
          {
            time: "Morning",
            title: "Forbidden City",
            description:
              "Explore the palace complex through stories, architectural details and photo pauses, with the walking route adjusted to the group.",
          },
          {
            time: "Afternoon",
            title: "Hutong workshop and local texture",
            description:
              "Add a private cultural workshop or a slower courtyard and neighborhood walk, depending on the group's interests.",
          },
        ],
        guideNote:
          "Lunch and prayer timing can be planned around the Forbidden City and hutong route. Specific restaurant certification, prayer space and opening hours are checked for your dates before booking.",
        coordinates: { latitude: 39.9163, longitude: 116.3972 },
      },
      {
        day: 3,
        title: "Mutianyu Great Wall, at your pace",
        destination: "Beijing",
        summary:
          "Give Beijing's most iconic landscape a full day, with the walking route, start time and cable-car option chosen around your travelers.",
        image: beijingUnhurriedAsset.greatWallSunrise,
        hotel: "Beijing hotel",
        meals: ["Breakfast"],
        transport:
          "Private vehicle and English-speaking support; scenic-area transport as required",
        activities: [
          {
            time: "Morning",
            title: "Mutianyu Great Wall",
            description:
              "Take a quieter section of the Wall with time for views, photography and rest rather than a rushed loop.",
          },
          {
            time: "Afternoon",
            title: "Flexible descent and return",
            description:
              "Use the cable car when it suits the group, then return to Beijing with the evening deliberately left open.",
          },
        ],
        guideNote:
          "The Wall includes uneven surfaces, steps and changing weather. Dining and prayer timing can be built into the day after the route and requirements are confirmed.",
        coordinates: { latitude: 40.4319, longitude: 116.5704 },
      },
      {
        day: 4,
        title: "Temple of Heaven and Summer Palace",
        destination: "Beijing",
        summary:
          "A measured cultural day combining ritual architecture, open space, water and a more spacious view of Beijing life.",
        image: beijingUnhurriedAsset.summerPalace,
        hotel: "Beijing hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle, English-speaking support and walking",
        activities: [
          {
            time: "Morning",
            title: "Temple of Heaven",
            description:
              "Notice the symbolism, proportions and park life around the Hall of Prayer for Good Harvests.",
          },
          {
            time: "Afternoon",
            title: "Summer Palace",
            description:
              "Take a calm route around Kunming Lake and the imperial gardens, with boat or walking options subject to operations and comfort.",
          },
        ],
        guideNote:
          "The afternoon remains flexible for rest, prayer timing or a shorter cultural route. Your local host or guide can recommend and reserve suitable places; meal costs are paid directly unless the final confirmation states otherwise.",
        coordinates: { latitude: 39.9998, longitude: 116.275 },
      },
      {
        day: 5,
        title: "A considered Beijing departure",
        destination: "Beijing",
        summary:
          "Breakfast, a final quiet morning where the flight allows, and a private transfer timed around your onward journey.",
        image: beijingUnhurriedAsset.privateMpv,
        meals: ["Breakfast"],
        transport: "Private airport or railway-station transfer",
        activities: [
          {
            title: "Protected departure timing",
            description:
              "Leave the hotel with realistic time for traffic, baggage and the confirmed terminal or station.",
          },
          {
            title: "A light final option",
            description:
              "For later departures, a short nearby walk or relaxed breakfast extension can be discussed separately.",
          },
        ],
        guideNote:
          "There is no hotel stay tonight. Early departures may require a breakfast box, subject to hotel policy.",
        coordinates: { latitude: 40.0799, longitude: 116.6031 },
      },
    ],
    accommodations: [
      {
        name: "One Carefully Selected Beijing Stay",
        destination: "Beijing, 4 nights",
        description:
          "Keep the route simple with one hotel base, reducing luggage movement and making the daily rhythm easier to adjust.",
        roomStyle: "Comfortable, Luxury or bespoke tier confirmed after inquiry",
        highlights: ["Breakfast on Days 2-5", "Room configuration and bedding checked in writing"],
        image: beijingUnhurriedAsset.hotelRoom,
      },
    ],
    included: [
      "Four nights at the Beijing hotel confirmed in your written quotation",
      "Hotel breakfast on Days 2-5",
      "Private airport or railway-station arrival and departure transfers",
      "Air-conditioned private touring vehicle",
      "English-speaking driver-host for parties of 2 or 4, or a private driver and English-speaking guide for parties of 6 or 8",
      "Standard admission and scenic-area transport required by the confirmed itinerary",
      "Mutianyu cable-car option only when listed in the final confirmation",
      "No compulsory shopping stops",
      "Planning discussion for dietary preferences, prayer timing, walking comfort and privacy needs",
    ],
    excluded: [
      "International flights, visa, travel insurance and personal expenses",
      "Lunches and dinners unless specifically included in your written quotation",
      "Specific restaurant meal costs unless stated in the final confirmation",
      "Room upgrades, single supplements, early check-in and late check-out",
      "Optional cultural workshops, boat rides or cable-car upgrades unless confirmed",
      "Host, guide and driver gratuities",
      "Extra costs caused by weather, traffic, venue operations or events beyond reasonable control",
    ],
    optionalExperiences: [
      {
        title: "Mutianyu cable-car option",
        description:
          "Reduce the climbing load when it suits the group. Operating conditions, tickets and the final route are confirmed before booking.",
        badges: ["Optional", "Pacing"],
        image: beijingUnhurriedAsset.greatWallWalk,
      },
      {
        title: "A private hutong cultural workshop",
        description:
          "Add a hands-on moment such as a traditional craft or courtyard experience when it fits the group's interests and energy.",
        badges: ["Culture", "Private"],
        image: beijingUnhurriedAsset.handsOnCulture,
      },
      {
        title: "A more flexible dining plan",
        description:
          "Share halal preferences, certification requirements, no-pork or no-alcohol needs and prayer timing before we check suitable options for your dates.",
        badges: ["Muslim-friendly", "Planning"],
        image: beijingUnhurriedAsset.dining,
      },
    ],
    transportation: {
      title: "Private support, with the route kept easy to understand.",
      description:
        "Private airport transfers and a dedicated vehicle connect one Beijing hotel with the city's historic sites and the Mutianyu Great Wall.",
      items: [
        {
          label: "Arrival and departure",
          value: "Private transfer",
          helper:
            "Vehicle size is selected around travelers, luggage and the confirmed airport or station.",
        },
        {
          label: "Sightseeing days",
          value: "Private touring vehicle",
          helper:
            "An English-speaking driver-host supports parties of 2 or 4; parties of 6 or 8 have a separate driver and guide.",
        },
        {
          label: "Great Wall access",
          value: "Scenic-area transport",
          helper:
            "Cable-car or other venue transport is included only when listed in the final confirmation.",
        },
      ],
    },
    routeMap: {
      title: "One hotel base. Five days of Beijing context.",
      description:
        "Stay in Beijing throughout, moving between imperial landmarks, hutong neighborhoods, the Mutianyu mountains and the city's open garden spaces.",
      stops: [
        {
          name: "Central Beijing",
          days: "Days 1-2",
          description:
            "Arrival, the Forbidden City, hutong life and a private cultural workshop option.",
          coordinates: { latitude: 39.9163, longitude: 116.3972 },
        },
        {
          name: "Mutianyu",
          days: "Day 3",
          description:
            "A full Great Wall day with a route and cable-car option shaped around your group.",
          coordinates: { latitude: 40.4319, longitude: 116.5704 },
        },
        {
          name: "Temple of Heaven and Summer Palace",
          days: "Day 4",
          description:
            "Ritual architecture, water, gardens and flexible time for rest or prayer planning.",
          coordinates: { latitude: 39.9998, longitude: 116.275 },
        },
        {
          name: "Beijing departure",
          days: "Day 5",
          description: "A private transfer timed around your onward flight or rail connection.",
          coordinates: { latitude: 40.0799, longitude: 116.6031 },
        },
      ],
    },
    gallery: [
      beijingUnhurriedAsset.hero,
      beijingUnhurriedAsset.forbiddenCityOverview,
      beijingUnhurriedAsset.forbiddenCityGuide,
      beijingUnhurriedAsset.hutongLife,
      beijingUnhurriedAsset.greatWallSunrise,
      beijingUnhurriedAsset.greatWallWalk,
      beijingUnhurriedAsset.summerPalace,
      beijingUnhurriedAsset.handsOnCulture,
      beijingUnhurriedAsset.dining,
      beijingUnhurriedAsset.hotelRoom,
      beijingUnhurriedAsset.privateMpv,
    ],
    faqs: [
      {
        question: "Is this a fixed package or can it be adjusted?",
        answer:
          "It is a complete five-day tour that can be adjusted. Hotel level, start times, walking load, meals, cultural workshop, cable-car option and final price are confirmed for your group and dates.",
      },
      {
        question: "How is the journey Muslim-friendly?",
        answer:
          "We discuss halal preferences, certification requirements, no-pork or no-alcohol needs, prayer timing, nearby prayer-space information and privacy preferences before confirmation. Specific restaurant certification, mosque access, prayer space and opening hours are checked for your dates rather than assumed.",
      },
      {
        question: "Can you guarantee certified halal restaurants?",
        answer:
          "We check the actual route and dates before making any commitment. Tell us whether certification is essential; your written confirmation will state the dining basis and any verified restaurant information.",
      },
      {
        question: "Is the Great Wall suitable for older travelers?",
        answer:
          "Often yes, when the section, start time, cable-car option, rest points and walking expectations are reviewed honestly in advance. The Wall still includes uneven ground and steps, so the route should be matched to the group rather than assumed.",
      },
      {
        question: "Are lunch and dinner included?",
        answer:
          "They are not included unless your written quotation says otherwise. Your guide may recommend and reserve suitable places after your dietary requirements are checked; meal costs are paid directly unless included in the booking confirmation.",
      },
      {
        question: "Are there compulsory shopping stops?",
        answer:
          "No. Restaurants and shopping venues are not selected to generate commission, and this tour has no compulsory shopping stops.",
      },
    ],
    related: {
      tours: [],
      destinations: [
        {
          name: "Beijing",
          description:
            "Imperial architecture, hutong neighborhoods, the Great Wall and a capital with many different rhythms.",
          image: destinationAsset.beijingForbiddenCityWide,
          href: "/destinations/beijing",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=5-Day%20Beijing%20%26%20Great%20Wall%20Private%20Tour%20Quotation",
      whatsappHref:
        "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20quotation%20for%20the%205-day%20private%20Beijing%20tour.%0A%0AMuslim-friendly%20planning%20needs%3A%20",
      scheduleCallHref: "tel:+447985052302",
      defaultMessage:
        "I am interested in the 5-Day Beijing & Great Wall Private Tour. Please help me plan dining preferences, prayer timing and a suitable pace for my travelers.",
    },
  },
  {
    slug: "shanghai-zhangjiajie-floating-peaks",
    title: "8-Day Shanghai & Zhangjiajie Private Tour",
    subtitle:
      "Shanghai's riverfront and Zhangjiajie's sandstone peaks, connected by private transfers, local guides and a protected final night.",
    duration: "8 Days / 7 Nights",
    route: "Shanghai, Wulingyuan, Zhangjiajie",
    styles: ["Nature", "Luxury", "Family", "Photography"],
    hero: {
      eyebrow: "Private Shanghai and Zhangjiajie journey",
      image: shanghaiZhangjiajieAsset.hero,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Request My Quotation", href: "#inquiry" },
    },
    seo: {
      title: "8-Day Private Shanghai and Zhangjiajie Tour",
      description:
        "An 8-day private Shanghai and Zhangjiajie tour with expert guides, private transfers, domestic flights, park transport and selected hotels.",
      keywords: [
        "Shanghai Zhangjiajie private tour",
        "8 day Shanghai Zhangjiajie itinerary",
        "luxury Zhangjiajie tour",
        "private China nature tour",
        "Shanghai and Avatar Mountains tour",
      ],
    },
    overview: {
      pitch:
        "Contemporary Shanghai and extraordinary mountain scenery, joined by a carefully managed domestic flight plan.",
      facts: [
        {
          label: "Duration",
          value: "8 days / 7 nights",
          helper: "Three Shanghai nights and four nights across the Zhangjiajie region.",
        },
        {
          label: "Destinations",
          value: "Shanghai + Zhangjiajie",
          helper: "City skyline, Wulingyuan peaks, Golden Whip Stream, and Tianmen Mountain.",
        },
        {
          label: "Travel Style",
          value: "Private and unhurried",
          helper: "Private transfers and English-speaking local guides.",
        },
        {
          label: "Pacing",
          value: "Easy to moderate",
          helper: "Walking routes and glass experiences can be adjusted.",
        },
        {
          label: "Suitable For",
          value: "Couples, families, private groups",
          helper: "Designed for mid- to high-end international travelers.",
        },
      ],
    },
    highlights: [
      {
        title: "Shanghai from old lanes to river lights",
        description:
          "Move from Yu Garden and the historic Bund to Pudong's illuminated skyline, with a Huangpu River cruise when conditions allow.",
        category: "Culture",
        image: shanghaiZhangjiajieAsset.shanghaiDusk,
      },
      {
        title: "Among Zhangjiajie's floating peaks",
        description:
          "Use the Bailong Elevator, official park shuttles, and cableways to reach Yuanjiajie and Tianzi Mountain without overloading the day.",
        category: "Nature",
        image: shanghaiZhangjiajieAsset.wulingyuan,
      },
      {
        title: "A protected final night in Shanghai",
        description:
          "Return to Shanghai one day before the international departure, creating a calmer ending and a practical buffer around the domestic flight.",
        category: "Luxury",
        image: shanghaiZhangjiajieAsset.shanghaiNight,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Shanghai",
        destination: "Shanghai",
        summary:
          "Meet your representative, transfer privately to the hotel, and keep the first evening deliberately light.",
        image: shanghaiZhangjiajieAsset.privateMpv,
        hotel:
          "Carefully selected Shanghai hotel; final property and room category confirmed in writing",
        meals: ["No meals included today"],
        transport: "Private airport or railway-station transfer",
        activities: [
          {
            title: "Private arrival support",
            description:
              "A vehicle selected around your party and luggage takes you directly to the confirmed hotel.",
          },
          {
            title: "A quiet first evening",
            description:
              "Settle in, confirm the next morning's meeting time, and keep dinner flexible near the hotel.",
          },
        ],
        guideNote:
          "The first day is about arriving well. Drive time is usually 45-90 minutes, depending on the airport, hotel, and traffic.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        day: 2,
        title: "Old and New Shanghai",
        destination: "Shanghai",
        summary:
          "Classical garden details, historic waterfront architecture, and Shanghai's skyline after dark.",
        image: shanghaiZhangjiajieAsset.shanghaiBund,
        hotel: "Shanghai hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle, walking, and standard river cruise when confirmed",
        activities: [
          {
            time: "Morning",
            title: "Yu Garden and the Old City",
            description:
              "Explore rockwork, water, pavilions, and nearby lanes with context from your private guide.",
          },
          {
            time: "Afternoon",
            title: "The Bund",
            description:
              "Walk a selected section of the waterfront where early twentieth-century architecture faces modern Pudong.",
          },
          {
            time: "Evening",
            title: "Huangpu River lights",
            description:
              "Take a standard evening cruise if weather and operations allow, or return to the hotel earlier.",
          },
        ],
        guideNote: "Typical walking is 3-5 kilometres and can be adjusted around the group.",
        coordinates: { latitude: 31.2397, longitude: 121.4998 },
      },
      {
        day: 3,
        title: "Shanghai to Zhangjiajie",
        destination: "Shanghai to Wulingyuan",
        summary:
          "A slow city morning followed by the best confirmed domestic connection to Zhangjiajie.",
        image: shanghaiZhangjiajieAsset.shanghaiDusk,
        hotel: "Carefully selected Wulingyuan hotel near the national-park entrance",
        meals: ["Breakfast"],
        transport: "Private transfers and economy-class domestic flight",
        activities: [
          {
            time: "Morning",
            title: "Shanghai at street level",
            description:
              "Take a short neighborhood walk selected around the hotel's location and flight time.",
          },
          {
            time: "Afternoon",
            title: "Domestic connection",
            description:
              "Transfer privately to the airport and fly on the best confirmed schedule; a direct service is preferred when operating.",
          },
          {
            time: "Evening",
            title: "Arrive in Wulingyuan",
            description:
              "Meet the local team and continue approximately 45-60 minutes to the hotel near the national park.",
          },
        ],
        guideNote:
          "Seasonal flight schedules may require a different timing or connection. The final sector and baggage basis are confirmed before payment.",
        coordinates: { latitude: 29.345, longitude: 110.551 },
      },
      {
        day: 4,
        title: "Yuanjiajie and Tianzi Mountain",
        destination: "Wulingyuan Scenic Area",
        summary:
          "The classic high-peaks day, made more manageable with the Bailong Elevator, park shuttles, and cableways.",
        image: shanghaiZhangjiajieAsset.wulingyuan,
        hotel: "Wulingyuan hotel",
        meals: ["Breakfast"],
        transport: "Private transfer outside the park, then official scenic-area transport",
        activities: [
          {
            time: "Morning",
            title: "Bailong Elevator and Yuanjiajie",
            description:
              "Reach the upper landscape and follow a viewpoint route with photography and rest stops.",
          },
          {
            time: "Afternoon",
            title: "Tianzi Mountain",
            description:
              "Continue by official shuttle for a different perspective across the quartz-sandstone pillars.",
          },
        ],
        guideNote:
          "Private vehicles cannot enter the core scenic area. Your guide stays with you and manages shared park shuttles, tickets, queues, and route decisions.",
        coordinates: { latitude: 29.354, longitude: 110.475 },
      },
      {
        day: 5,
        title: "Golden Whip Stream and Optional Glass Bridge",
        destination: "Zhangjiajie National Forest Park",
        summary:
          "A gentler forest-and-water morning, followed by a glass experience only for travelers who want it.",
        image: shanghaiZhangjiajieAsset.goldenWhipStream,
        hotel: "Carefully selected Zhangjiajie City hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle and scenic-area access",
        activities: [
          {
            time: "Morning",
            title: "Golden Whip Stream",
            description:
              "Walk a selected 2-4 kilometre section beneath the peaks rather than automatically completing the full valley trail.",
          },
          {
            time: "Afternoon",
            title: "Zhangjiajie Grand Canyon",
            description:
              "Cross the Glass Bridge only if everyone is comfortable; a non-glass alternative can be arranged before tickets are confirmed.",
          },
          {
            time: "Evening",
            title: "Move to Zhangjiajie City",
            description:
              "Relocate to the city to reduce the following morning's transfer to Tianmen Mountain.",
          },
        ],
        guideNote:
          "Wild macaques may be present near Golden Whip Stream. Keep food packed away, give wildlife space, and follow your guide's instructions.",
        coordinates: { latitude: 29.323, longitude: 110.439 },
      },
      {
        day: 6,
        title: "Tianmen Mountain",
        destination: "Zhangjiajie City",
        summary:
          "Cableway, cliff scenery, and Tianmen Cave on a route adapted to weather, operations, and walking comfort.",
        image: shanghaiZhangjiajieAsset.tianmenCableway,
        hotel: "Zhangjiajie City hotel",
        meals: ["Breakfast"],
        transport: "Private transfer and Tianmen Mountain transport system",
        activities: [
          {
            time: "Morning",
            title: "Cableway and cliff route",
            description:
              "Use the confirmed entry route, then follow a selected cliffside path with regular pauses; glass walkways are optional.",
          },
          {
            time: "Afternoon",
            title: "Tianmen Cave",
            description:
              "Continue toward the natural arch using the most suitable operating route; the 999-step staircase is not compulsory.",
          },
        ],
        guideNote:
          "Visibility changes quickly. The local team may reorder Days 4-6 when weather and ticket availability support a better experience.",
        coordinates: { latitude: 29.05, longitude: 110.478 },
      },
      {
        day: 7,
        title: "Return to Shanghai",
        destination: "Zhangjiajie to Shanghai",
        summary:
          "Return one day before the international departure, allowing more protection against disruption and a calm final evening.",
        image: shanghaiZhangjiajieAsset.shanghaiNight,
        hotel: "Shanghai hotel selected around the final departure plan",
        meals: ["Breakfast"],
        transport: "Private transfers and economy-class domestic flight",
        activities: [
          {
            time: "Morning",
            title: "Depart Zhangjiajie",
            description:
              "Transfer privately to the airport with realistic timing for baggage and the confirmed flight.",
          },
          {
            time: "Afternoon",
            title: "Arrive in Shanghai",
            description:
              "Meet the Shanghai driver and return to the hotel for a relaxed final night.",
          },
        ],
        guideNote:
          "If timing and energy allow, add a simple riverside walk or dinner; no fixed sightseeing is required.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        day: 8,
        title: "Shanghai Departure",
        destination: "Shanghai",
        summary:
          "Breakfast and a private airport transfer timed around the confirmed international flight.",
        image: shanghaiZhangjiajieAsset.privateMpv,
        meals: ["Breakfast"],
        transport: "Private airport transfer",
        activities: [
          {
            title: "A protected final morning",
            description:
              "Check out and transfer to the correct terminal with a sensible departure time reconfirmed by the local team.",
          },
          {
            title: "Later-flight options",
            description:
              "Late check-out, extra vehicle time, or a light activity can be quoted separately when useful.",
          },
        ],
        guideNote:
          "Very early flights may require a breakfast box, subject to hotel policy. There is no hotel stay tonight.",
        coordinates: { latitude: 31.1443, longitude: 121.8083 },
      },
    ],
    accommodations: [
      {
        name: "Carefully Selected Shanghai Stay",
        destination: "Shanghai, 3 nights in total",
        description:
          "Central access for the first chapter and a practical final night selected around the departure plan.",
        roomStyle: "Confirmed after inquiry",
        highlights: ["Breakfast included", "Room and bedding confirmed in writing"],
        image: shanghaiZhangjiajieAsset.shanghaiDusk,
      },
      {
        name: "Wulingyuan National Park Base",
        destination: "Wulingyuan, 2 nights",
        description:
          "A well-positioned base near the park entrance, reducing morning driving before the main scenic days.",
        roomStyle: "Confirmed after inquiry",
        highlights: ["Near scenic-area access", "Selected for recovery and sleep quality"],
        image: shanghaiZhangjiajieAsset.hero,
      },
      {
        name: "Zhangjiajie City Base",
        destination: "Zhangjiajie City, 2 nights",
        description:
          "Convenient for Tianmen Mountain and the airport, avoiding unnecessary backtracking before the return flight.",
        roomStyle: "Confirmed after inquiry",
        highlights: ["Convenient city location", "Room configuration checked before booking"],
        image: shanghaiZhangjiajieAsset.tianmenCave,
      },
    ],
    included: [
      "Seven nights at the hotels confirmed in your written quotation",
      "Hotel breakfast on Days 2-8",
      "Private airport transfers in Shanghai and Zhangjiajie",
      "Air-conditioned private touring vehicle outside restricted scenic areas",
      "Professional English-speaking local guides on sightseeing days",
      "Economy-class domestic flights between Shanghai and Zhangjiajie when listed in the final confirmation",
      "Standard admission, park shuttles, elevators, and cableways required by the confirmed itinerary",
      "Huangpu River cruise and Glass Bridge only when listed in the final confirmation",
      "Bottled water during touring and 24-hour emergency support",
      "No compulsory shopping stops",
    ],
    excluded: [
      "International flights to and from China",
      "Lunches and dinners throughout the journey",
      "Visa, travel insurance, medical costs, and personal expenses",
      "Early check-in, late check-out, room upgrades, and single supplements",
      "Guide and driver gratuities",
      "Optional shows, premium cruise upgrades, and activities not confirmed in writing",
      "Excess baggage and airline seat-selection fees unless specifically included",
      "Extra costs caused by weather, traffic, flight disruption, or events beyond reasonable control",
    ],
    optionalExperiences: [
      {
        title: "Zhangjiajie Glass Bridge",
        description:
          "Add the Grand Canyon glass bridge only when the group is comfortable and current venue rules fit the day.",
        badges: ["Optional", "Weather dependent"],
        image: shanghaiZhangjiajieAsset.glassBridge,
      },
      {
        title: "A slower Shanghai neighborhood morning",
        description:
          "Use the transfer day for coffee, a bakery, or a small park instead of adding another major sight.",
        badges: ["Local life", "Flexible"],
        image: shanghaiZhangjiajieAsset.shanghaiBund,
      },
      {
        title: "Adjustable Tianmen Mountain route",
        description:
          "Select cliff walks, glass sections, escalator-assisted access, and rest points around comfort and operations.",
        badges: ["Nature", "Pacing"],
        image: shanghaiZhangjiajieAsset.tianmenCave,
      },
    ],
    transportation: {
      title: "Private logistics outside the parks, smart shared systems inside them.",
      description:
        "Private transfers connect airports, hotels, and scenic areas. Inside protected parks, official shared shuttles, elevators, cableways, and escalators are required.",
      items: [
        {
          label: "Private transfers",
          value: "Air-conditioned vehicle",
          helper: "Vehicle size is confirmed around travelers, luggage, and mobility needs.",
        },
        {
          label: "Domestic flights",
          value: "Shanghai-Zhangjiajie return",
          helper: "Economy fare, schedule, and baggage basis are confirmed before payment.",
        },
        {
          label: "Protected areas",
          value: "Official park transport",
          helper: "Your guide manages required shared systems and adjusts the operating order.",
        },
      ],
    },
    routeMap: {
      title: "City energy, mountain scale, and a protected return.",
      description:
        "Begin with two Shanghai nights, spend four nights across the Zhangjiajie region, then return to Shanghai before the international departure.",
      stops: [
        {
          name: "Shanghai",
          days: "Days 1-3 and 7-8",
          description: "Yu Garden, the Bund, Huangpu River lights, and the final departure buffer.",
          coordinates: { latitude: 31.2304, longitude: 121.4737 },
        },
        {
          name: "Wulingyuan",
          days: "Days 3-5",
          description:
            "Yuanjiajie, Tianzi Mountain, Golden Whip Stream, and the Grand Canyon option.",
          coordinates: { latitude: 29.345, longitude: 110.551 },
        },
        {
          name: "Zhangjiajie City",
          days: "Days 5-7",
          description: "Tianmen Mountain, city hotel base, and the return flight to Shanghai.",
          coordinates: { latitude: 29.117, longitude: 110.479 },
        },
      ],
    },
    gallery: [
      shanghaiZhangjiajieAsset.shanghaiDusk,
      shanghaiZhangjiajieAsset.shanghaiNight,
      shanghaiZhangjiajieAsset.shanghaiBund,
      shanghaiZhangjiajieAsset.hero,
      shanghaiZhangjiajieAsset.wulingyuan,
      shanghaiZhangjiajieAsset.goldenWhipStream,
      shanghaiZhangjiajieAsset.glassBridge,
      shanghaiZhangjiajieAsset.tianmenCableway,
      shanghaiZhangjiajieAsset.privateMpv,
    ],
    faqs: [
      {
        question: "Is this a fixed package?",
        answer:
          "It is a complete eight-day tour that can be adjusted. Hotels, room types, flights, vehicle size, tickets and final price are confirmed in writing for your dates and group.",
      },
      {
        question: "Are the Glass Bridge and glass walkways compulsory?",
        answer:
          "No. Glass experiences are optional. A non-glass alternative or a slower afternoon can be arranged before tickets are confirmed.",
      },
      {
        question: "How difficult is the walking?",
        answer:
          "The route is easy to moderate and uses cableways, elevators, escalators, and adjustable walking sections. Uneven paths, steps, queues, and changing weather cannot be removed completely.",
      },
      {
        question: "Why does the journey return to Shanghai on Day 7?",
        answer:
          "The final Shanghai night protects the international departure from the risk and stress of a same-day domestic connection.",
      },
      {
        question: "Can you support dietary or mobility needs?",
        answer:
          "Yes, when shared before quotation. Tell us about allergies, vegetarian or vegan needs, halal preferences, walking comfort, child seats, and room arrangements so they can be checked properly.",
      },
    ],
    related: {
      tours: [],
      destinations: [
        {
          name: "Shanghai",
          description: "Historic riverfront architecture, neighborhood life, and Pudong's skyline.",
          image: destinationAsset.shanghaiSkyline,
          href: "/destinations/shanghai",
        },
        {
          name: "Zhangjiajie",
          description:
            "Sandstone peaks, forest paths, cableways, and weather-shaped mountain days.",
          image: destinationAsset.zhangjiajieForest,
          href: "/destinations/zhangjiajie",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=8-Day%20Shanghai%20%26%20Zhangjiajie%20Private%20Tour%20Quotation",
      whatsappHref:
        "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20quotation%20for%20the%208-day%20Shanghai%20and%20Zhangjiajie%20private%20tour.",
      scheduleCallHref: "tel:+447985052302",
      defaultMessage:
        "I am interested in the 8-Day Shanghai & Zhangjiajie Private Tour. Please prepare a quotation for my party.",
    },
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getTourSlugs() {
  return tours.map((tour) => tour.slug);
}
