import { destinationAsset } from "@/content/destinations/assets";
import type { Tour } from "@/types/tour";

const firstChinaInquiry =
  "mailto:chinaprimedmc@gmail.com?subject=Customize%20First%20China%20Beautifully%20Paced&body=Hi%20China%20Prime%20DMC%2C%0A%0AI%27d%20like%20to%20customize%20First%20China%2C%20Beautifully%20Paced.%0A%0ATravelers%3A%0ADates%3A%0APreferred%20comfort%20level%3A%0AKey%20concerns%3A%0A";

export const tours: Tour[] = [
  {
    slug: "first-china-beautifully-paced",
    title: "First China, Beautifully Paced",
    subtitle:
      "A private 11-day journey through Beijing, Xi'an, Chengdu, and Shanghai for travelers who want the icons without the exhaustion.",
    duration: "11 Days / 10 Nights",
    route: "Beijing, Xi'an, Chengdu, Shanghai",
    styles: ["First-time China", "Family", "Culture", "Luxury"],
    hero: {
      eyebrow: "Private journey proposal",
      image: destinationAsset.greatWallJinshanling,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Customize My Journey", href: "#inquiry" },
    },
    seo: {
      title: "11 Day Private China Tour: Beijing, Xi'an, Chengdu and Shanghai",
      description:
        "Customize an 11-day private China itinerary with Beijing, Xi'an, Chengdu, and Shanghai. Designed for first-time travelers, families, and luxury private travel.",
      keywords: [
        "private China tour",
        "11 day China itinerary",
        "luxury China travel",
        "China family tour",
        "Beijing Xi'an Chengdu Shanghai tour",
      ],
    },
    overview: {
      pitch:
        "This is the calm version of a first China trip: major icons, private guides, smart transfer days, child- and senior-aware pacing, and enough quiet moments for the country to feel personal.",
      facts: [
        {
          label: "Duration",
          value: "11 days",
          helper: "A balanced rhythm for first-time travelers.",
        },
        {
          label: "Destinations",
          value: "4 cities",
          helper: "Imperial, historic, playful, and modern China.",
        },
        {
          label: "Travel Style",
          value: "Private, flexible",
          helper: "Designed around your family and pace.",
        },
        {
          label: "Difficulty",
          value: "Easy to moderate",
          helper: "Walking days are shaped carefully.",
        },
        {
          label: "Suitable For",
          value: "Couples, families, seniors",
          helper: "Private logistics reduce friction.",
        },
        {
          label: "Price Guide",
          value: "Upon request",
          helper: "Varies by hotel tier, season, and guide style.",
        },
      ],
    },
    highlights: [
      {
        title: "Beijing with context, not crowds",
        description:
          "See the Forbidden City, temple life, and hutong texture with a guide who knows when to pause.",
        category: "Culture",
        image: destinationAsset.greatWallBright,
      },
      {
        title: "Xi'an without rushing the story",
        description:
          "Let the Terracotta Army feel human, then balance it with food streets, old city walls, and slower evenings.",
        category: "First-time China",
        image: destinationAsset.xianTerracotta,
      },
      {
        title: "Chengdu made playful",
        description:
          "Pandas, tea houses, relaxed food choices, and softer days after the heavier imperial chapters.",
        category: "Family",
        image: destinationAsset.chengduPanda,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Beijing",
        destination: "Beijing",
        summary:
          "Private airport welcome, hotel check-in, and a gentle first evening shaped around jet lag.",
        image: destinationAsset.templeOfHeaven,
        hotel: "Luxury hotel in central Beijing",
        meals: ["Welcome snacks"],
        transport: "Private airport transfer",
        activities: [
          {
            title: "Arrival support",
            description:
              "Your guide meets you at arrivals and helps with the first practical details.",
          },
          {
            title: "Soft landing evening",
            description: "Optional neighborhood walk or early rest depending on your flight time.",
          },
        ],
        guideNote:
          "The first day should build confidence, not pressure. We keep it light unless you arrive early.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        day: 2,
        title: "Imperial Beijing",
        destination: "Beijing",
        summary:
          "A carefully paced Forbidden City route, temple atmosphere, and private storytelling instead of a checklist.",
        image: destinationAsset.gubeiWaterTown,
        hotel: "Luxury hotel in central Beijing",
        meals: ["Breakfast", "Lunch"],
        transport: "Private car",
        activities: [
          {
            time: "Morning",
            title: "Forbidden City",
            description: "Move through the palace axis with historical context and photo pauses.",
          },
          {
            time: "Afternoon",
            title: "Temple or hutong texture",
            description: "Choose a quieter cultural layer based on energy and interest.",
          },
        ],
        guideNote:
          "For families, we shorten museum blocks and add hands-on breaks. For photographers, we tune timing around light.",
        coordinates: { latitude: 39.9163, longitude: 116.3972 },
      },
      {
        day: 3,
        title: "Great Wall day",
        destination: "Beijing",
        summary:
          "A dedicated Wall day with private timing, fewer rushed stops, and enough space for the moment to land.",
        image: destinationAsset.beijingForbiddenCityWide,
        hotel: "Luxury hotel in central Beijing",
        meals: ["Breakfast", "Lunch"],
        transport: "Private car",
        activities: [
          {
            title: "Private Great Wall excursion",
            description: "Select the section based on season, fitness, and crowd tolerance.",
          },
          {
            title: "Slow return",
            description: "Keep the afternoon flexible for rest, tea, or a relaxed dinner.",
          },
        ],
        guideNote:
          "We choose the Wall section around season, fitness, crowd tolerance, and the kind of experience you want.",
        coordinates: { latitude: 40.4319, longitude: 116.5704 },
      },
      {
        day: 4,
        title: "High-speed rail to Xi'an",
        destination: "Xi'an",
        summary:
          "Move from imperial Beijing to ancient Xi'an with luggage support and a calm first look at the city wall.",
        image: destinationAsset.xianCityWall,
        hotel: "Heritage-inspired hotel in Xi'an",
        meals: ["Breakfast"],
        transport: "High-speed rail and private transfers",
        activities: [
          {
            title: "Rail transfer support",
            description:
              "Your team handles station timing, tickets, luggage flow, and arrival pickup.",
          },
          {
            title: "Xi'an orientation",
            description: "A short city wall or old quarter introduction if energy allows.",
          },
        ],
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        day: 5,
        title: "Terracotta Army and old Xi'an",
        destination: "Xi'an",
        summary:
          "A deeper Terracotta Army visit balanced with city flavor, Muslim Quarter texture, and private pacing.",
        image: destinationAsset.xianTerracotta,
        hotel: "Heritage-inspired hotel in Xi'an",
        meals: ["Breakfast", "Lunch"],
        transport: "Private car",
        activities: [
          {
            title: "Terracotta Army",
            description:
              "Understand the site as a human-scale story, not only an archaeological headline.",
          },
          {
            title: "Old city food walk",
            description:
              "Taste Xi'an carefully, with halal-aware alternatives available when requested.",
          },
        ],
        guideNote:
          "This day can become Muslim-friendly, family-focused, or photography-led without changing the core route.",
        coordinates: { latitude: 34.384, longitude: 109.278 },
      },
      {
        day: 6,
        title: "Fly to Chengdu",
        destination: "Chengdu",
        summary:
          "A lighter transition day into Sichuan, with tea-house rhythm and softer evening choices.",
        image: destinationAsset.kuanzhaiAlley,
        hotel: "Comfortable design hotel in Chengdu",
        meals: ["Breakfast"],
        transport: "Domestic flight and private transfers",
        activities: [
          {
            title: "Chengdu tea-house afternoon",
            description: "Ease into the city with tea, slower streets, and a less formal pace.",
          },
        ],
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        day: 7,
        title: "Pandas and Chengdu life",
        destination: "Chengdu",
        summary:
          "Panda time at a smarter hour, followed by a relaxed food or culture experience that fits your group.",
        image: destinationAsset.chengduPanda,
        hotel: "Comfortable design hotel in Chengdu",
        meals: ["Breakfast", "Lunch"],
        transport: "Private car",
        activities: [
          {
            time: "Morning",
            title: "Panda experience",
            description: "Visit when pandas are more active and children are still fresh.",
          },
          {
            time: "Afternoon",
            title: "Food, parks, or culture",
            description:
              "Choose a cooking, tea, or neighborhood experience based on your interests.",
          },
        ],
        coordinates: { latitude: 30.7334, longitude: 104.148 },
      },
      {
        day: 8,
        title: "Shanghai arrival",
        destination: "Shanghai",
        summary:
          "Fly east into modern China, with a skyline evening and a softer introduction to the city's scale.",
        image: destinationAsset.shanghaiSkyline,
        hotel: "Contemporary hotel in central Shanghai",
        meals: ["Breakfast"],
        transport: "Domestic flight and private transfers",
        activities: [
          {
            title: "Bund and skyline evening",
            description:
              "A cinematic first impression of Shanghai without overloading the transfer day.",
          },
        ],
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        day: 9,
        title: "Old and new Shanghai",
        destination: "Shanghai",
        summary:
          "Architecture, food, local neighborhoods, and elegant contrast between treaty-port history and future city energy.",
        image: destinationAsset.yuGarden,
        hotel: "Contemporary hotel in central Shanghai",
        meals: ["Breakfast", "Lunch"],
        transport: "Private car and short walks",
        activities: [
          {
            title: "Shanghai contrasts",
            description:
              "Pair skyline views with quieter lanes, food stops, and architecture-led storytelling.",
          },
        ],
        guideNote:
          "Shopping is never forced. The day stays experience-led unless you request boutique retail time.",
        coordinates: { latitude: 31.2406, longitude: 121.4908 },
      },
      {
        day: 10,
        title: "Flexible final day",
        destination: "Shanghai",
        summary:
          "Keep one day open for a water town, art and design, family downtime, or deeper food exploration.",
        image: destinationAsset.shanghaiTower,
        hotel: "Contemporary hotel in central Shanghai",
        meals: ["Breakfast"],
        transport: "Private car or rail depending on choice",
        activities: [
          {
            title: "Choose your ending",
            description:
              "Water town, museums, food, wellness, or a slower city day before departure.",
          },
        ],
        guideNote:
          "The last full day should match your energy. We avoid ending the trip with a forced march.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        day: 11,
        title: "Depart Shanghai",
        destination: "Shanghai",
        summary:
          "Private airport transfer, departure support, and optional post-trip extension planning.",
        image: destinationAsset.shanghaiSkyline,
        meals: ["Breakfast"],
        transport: "Private airport transfer",
        activities: [
          {
            title: "Departure support",
            description: "Airport timing, luggage help, and a calm ending to the route.",
          },
        ],
        coordinates: { latitude: 31.1443, longitude: 121.8083 },
      },
    ],
    accommodations: [
      {
        name: "Central Beijing luxury base",
        destination: "Beijing",
        description:
          "Selected for easier access to imperial sites, reliable service, and a calm return after big walking days.",
        roomStyle: "Deluxe or family connecting rooms",
        highlights: ["Historic access", "Breakfast quality", "Private transfer efficiency"],
        image: destinationAsset.beijingForbiddenCityWide,
      },
      {
        name: "Chengdu design stay",
        destination: "Chengdu",
        description:
          "A softer hotel chapter with comfortable rooms, good dining access, and a relaxed Sichuan rhythm.",
        roomStyle: "Premier room or suite upgrade",
        highlights: ["Easy panda access", "Food neighborhoods", "Family-friendly pacing"],
        image: destinationAsset.chengduTeaHouse,
      },
    ],
    included: [
      "Private English-speaking guides in each city",
      "Private airport, rail, and city transfers",
      "Domestic transport planning and ticket support",
      "Curated sightseeing and timed reservations",
      "Daily operational support while traveling",
    ],
    excluded: [
      "International flights",
      "China visa fees when required",
      "Personal expenses and optional upgrades",
      "Travel insurance",
      "Meals not listed in the final proposal",
    ],
    optionalExperiences: [
      {
        title: "Halal-aware food planning",
        description:
          "Restaurant checks, guide notes, and route choices for Muslim families who want comfort without losing local flavor.",
        badges: ["Muslim-friendly", "Food"],
        image: destinationAsset.xianTerracotta,
      },
      {
        title: "Private photography moments",
        description:
          "Earlier starts, cleaner viewpoints, and guide coordination for travelers who care about images.",
        badges: ["Photography", "Luxury"],
        image: destinationAsset.greatWallJinshanling,
      },
      {
        title: "Family hands-on layer",
        description:
          "Dumplings, pandas, tea, calligraphy, and child-friendly museum pacing woven into the main route.",
        badges: ["Family", "Culture"],
        image: destinationAsset.yangshuoYulongRiver,
      },
    ],
    transportation: {
      title: "Transfers should make China feel easy.",
      description:
        "The route uses private cars, high-speed rail, and selected domestic flights only where they protect comfort and time.",
      items: [
        {
          label: "Airport",
          value: "Private meet-and-greet",
          helper: "Arrival and departure support.",
        },
        {
          label: "Rail",
          value: "High-speed train",
          helper: "Beijing to Xi'an with guided station flow.",
        },
        {
          label: "Flights",
          value: "Selected domestic legs",
          helper: "Used when they preserve the journey rhythm.",
        },
      ],
    },
    routeMap: {
      title: "A clean first-China arc.",
      description:
        "Imperial Beijing, ancient Xi'an, relaxed Chengdu, and modern Shanghai create a route that feels complete without trying to see everything.",
      stops: [
        {
          name: "Beijing",
          days: "Days 1-3",
          description: "Imperial scale, hutongs, temples, and the Great Wall.",
          coordinates: { latitude: 39.9042, longitude: 116.4074 },
        },
        {
          name: "Xi'an",
          days: "Days 4-5",
          description: "Terracotta Army, old city texture, and food culture.",
          coordinates: { latitude: 34.3416, longitude: 108.9398 },
        },
        {
          name: "Chengdu",
          days: "Days 6-7",
          description: "Pandas, tea houses, and softer Sichuan pacing.",
          coordinates: { latitude: 30.5728, longitude: 104.0668 },
        },
        {
          name: "Shanghai",
          days: "Days 8-11",
          description: "Skyline, architecture, food, and an elegant final chapter.",
          coordinates: { latitude: 31.2304, longitude: 121.4737 },
        },
      ],
    },
    gallery: [
      destinationAsset.beijingForbiddenCity,
      destinationAsset.xianTerracotta,
      destinationAsset.chengduPanda,
      destinationAsset.chengduTeaHouse,
      destinationAsset.shanghaiTower,
      destinationAsset.yuGarden,
    ],
    faqs: [
      {
        question: "Can this route be adjusted for children or older parents?",
        answer:
          "Yes. The structure is designed for private pacing, so museum time, walking blocks, meal timing, and transfer days can be softened without losing the core journey.",
      },
      {
        question: "Is this a fixed package?",
        answer:
          "No. Treat this as a strong first route idea. Hotels, daily starts, dining, special interests, and comfort level should be customized before confirmation.",
      },
      {
        question: "Can the trip be made Muslim-friendly?",
        answer:
          "Yes. Xi'an and larger cities can support halal-aware planning, and the route can include restaurant checks, prayer-time sensitivity, and guide briefing.",
      },
      {
        question: "How much walking should we expect?",
        answer:
          "Beijing and Xi'an can involve significant walking, but the private route can shorten site blocks, add vehicle support, and include rest periods.",
      },
    ],
    related: {
      tours: [
        {
          title: "China With Kids",
          description:
            "A softer family route with pandas, rivers, hands-on food, and shorter city days.",
          tags: ["Family", "Children"],
          image: destinationAsset.yangshuoYulongRiver,
          route: "Beijing, Chengdu, Yangshuo, Shanghai",
          duration: "9-11 days",
          href: firstChinaInquiry,
        },
        {
          title: "Imperial China and Cinematic Landscapes",
          description:
            "Pair Beijing and Xi'an with one dramatic nature chapter for stronger visual contrast.",
          tags: ["Culture", "Photography"],
          image: destinationAsset.zhangjiajieAvatarPeaks,
          route: "Beijing, Xi'an, Zhangjiajie",
          duration: "8-10 days",
          href: firstChinaInquiry,
        },
      ],
      destinations: [
        {
          name: "Beijing",
          description:
            "The clearest first chapter for imperial China, temple life, and the Great Wall.",
          image: destinationAsset.greatWallBright,
          href: "/destination/beijing",
        },
      ],
    },
    inquiry: {
      emailHref: firstChinaInquiry,
      whatsappHref: firstChinaInquiry,
      scheduleCallHref: firstChinaInquiry,
      defaultMessage:
        "I am interested in First China, Beautifully Paced. Please suggest the best route, hotel level, and pacing for my travelers.",
    },
  },
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getTourSlugs() {
  return tours.map((tour) => tour.slug);
}
