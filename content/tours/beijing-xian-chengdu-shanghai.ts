import { destinationAsset } from "@/content/destinations/assets";
import {
  fourCityAsset,
  fourCityGallery,
} from "@/content/tours/beijing-xian-chengdu-shanghai-assets";
import { firstChinaAsset } from "@/content/tours/assets";
import type { Tour } from "@/types/tour";

const slug = "beijing-xian-chengdu-shanghai-private-11-day-tour";

export const beijingXianChengduShanghaiTour: Tour = {
  slug,
  title: "11-Day Beijing, Xi'an, Chengdu & Shanghai Private Tour",
  subtitle:
    "A privately guided first journey through imperial Beijing, historic Xi'an, Chengdu's pandas and contemporary Shanghai.",
  duration: "11 Days / 10 Nights",
  route: "Beijing, Xi'an, Chengdu, Shanghai",
  styles: ["First-time China", "Family", "Culture", "Food"],
  hero: {
    eyebrow: "Signature first-time China journey",
    image: fourCityAsset.hero,
    primary: { label: "Explore Itinerary", href: "#itinerary" },
    secondary: { label: "Request a Private Proposal", href: "#proposal" },
  },
  seo: {
    title: "11-Day Beijing Xi'an Chengdu Shanghai Private Tour",
    description:
      "Explore Beijing, Xi'an, Chengdu and Shanghai on an 11-day private China tour with expert guides, pandas, the Great Wall and flexible daily pacing.",
    keywords: [
      "Beijing Xi'an Chengdu Shanghai private tour",
      "11 day China private tour",
      "China private tour with pandas",
      "first time China itinerary",
      "private China family tour",
      "Great Wall Terracotta Warriors panda tour",
    ],
  },
  overview: {
    pitch: "Four defining sides of China, connected through one privately supported journey.",
    facts: [
      {
        label: "Duration",
        value: "11 days / 10 nights",
        helper: "Beijing 3 nights, Xi'an 2, Chengdu 2 and Shanghai 3.",
      },
      {
        label: "Route",
        value: "4 defining cities",
        helper: "Imperial history, ancient heritage, pandas and contemporary China.",
      },
      {
        label: "Travel Style",
        value: "Private and tailor-made",
        helper: "Private local guiding and transfers, adjusted around your party.",
      },
      {
        label: "Pacing",
        value: "Balanced, adjustable",
        helper: "Walking, start times and rest windows are reviewed before confirmation.",
      },
      {
        label: "Suitable For",
        value: "Couples, families and older parents",
        helper: "A strong first-China route for private parties of two or more.",
      },
      {
        label: "Proposal",
        value: "Prepared for your dates",
        helper: "Hotels, room needs and final services are confirmed in writing.",
      },
    ],
  },
  planningSupport: {
    eyebrow: "Why this route works",
    title: "Recognizable highlights without making every day feel the same.",
    description:
      "Each city has a clear role in the journey. Beijing establishes imperial scale, Xi'an gives history depth, Chengdu changes the rhythm through pandas and food, and Shanghai brings the route into the present.",
    items: [
      {
        label: "For first visits",
        value: "Easy to understand",
        helper: "Four places international travelers already associate with China.",
      },
      {
        label: "For families",
        value: "Different interests stay engaged",
        helper: "History, wildlife, food and modern city life create natural variety.",
      },
      {
        label: "For confidence",
        value: "Transitions are managed",
        helper: "Station, airport, luggage and local arrival details are planned together.",
      },
    ],
    note: "This is a starting framework, not a fixed group departure. We adjust the route when your international flights, mobility, dietary needs or preferred pace require it.",
  },
  highlights: [
    {
      title: "The Great Wall at a considered hour",
      description:
        "Visit Mutianyu with the start time, cable-car plan and walking section shaped around weather, crowds and your group's comfort.",
      category: "Culture",
      image: fourCityAsset.greatWall,
    },
    {
      title: "The Terracotta Warriors with context",
      description:
        "A private guide connects the excavation pits to Qin history, craftsmanship and the wider story of Xi'an rather than leaving the site as a photo stop.",
      category: "First-time China",
      image: fourCityAsset.xianTerracotta,
    },
    {
      title: "Pandas before the day gets busy",
      description:
        "Plan an early Chengdu Panda Base visit around seasonal conditions and the animals' more active morning hours, with honest guidance on walking and crowds.",
      category: "Family",
      image: fourCityAsset.pandaHighlight,
    },
    {
      title: "Shanghai as a modern finale",
      description:
        "Finish with the Bund, neighborhood life and the skyline, leaving one flexible day for deeper Shanghai, a water town or Suzhou.",
      category: "Culture",
      image: fourCityAsset.shanghaiBund,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Beijing",
      destination: "Beijing",
      summary:
        "Meet your driver for a private airport transfer, settle into your hotel and keep the first evening light after the flight.",
      image: fourCityAsset.arrival,
      hotel: "Beijing stay: hotel and room category confirmed in your private proposal",
      meals: ["As confirmed in the written proposal"],
      transport: "Private airport transfer",
      activities: [
        {
          title: "A clear arrival",
          description:
            "Your meeting point, vehicle, luggage space and hotel transfer are confirmed before departure.",
        },
        {
          title: "A deliberately light evening",
          description:
            "Rest after the flight or take a short neighborhood introduction when arrival time and energy allow.",
        },
      ],
      guideNote:
        "We shape the first day around the international flight rather than forcing sightseeing into an arrival window.",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
    },
    {
      day: 2,
      title: "Imperial Beijing in context",
      destination: "Beijing",
      summary:
        "Explore the Forbidden City and Beijing's historic axis with private storytelling, sensible walking blocks and time to understand what you are seeing.",
      image: fourCityAsset.beijingImperial,
      hotel: "Beijing stay: confirmed in your private proposal",
      meals: ["Breakfast when included with the confirmed hotel"],
      transport: "Private vehicle and English-speaking guide",
      activities: [
        {
          time: "Morning",
          title: "The Forbidden City",
          description:
            "Follow a route chosen around entry availability, interests and walking comfort, with historical context rather than a rushed checklist.",
        },
        {
          time: "Afternoon",
          title: "A wider view of imperial Beijing",
          description:
            "Continue to Jingshan, the Temple of Heaven or a quieter historic neighborhood according to the final day plan.",
        },
      ],
      guideNote:
        "Forbidden City tickets are date-specific. We confirm the operating plan and suitable alternatives before booking.",
      coordinates: { latitude: 39.9163, longitude: 116.3972 },
    },
    {
      day: 3,
      title: "Mutianyu Great Wall",
      destination: "Beijing",
      summary:
        "Spend an unhurried day at Mutianyu, with the Wall section and access method matched to your group's energy and the season.",
      image: fourCityAsset.greatWall,
      hotel: "Beijing stay: confirmed in your private proposal",
      meals: ["Breakfast when included", "Other meals as confirmed"],
      transport: "Private return transfer to Mutianyu",
      activities: [
        {
          time: "Morning",
          title: "A better-timed departure",
          description:
            "Leave according to season, traffic and entry timing, with a private vehicle rather than a shared sightseeing coach.",
        },
        {
          time: "Late morning and afternoon",
          title: "Walk the Wall at your own level",
          description:
            "Choose cable-car access and a suitable watchtower section, allowing time for views, photographs and rest.",
        },
      ],
      guideNote:
        "The Great Wall remains uneven and stepped. We explain the physical expectations honestly and adjust the visit where possible.",
      coordinates: { latitude: 40.4319, longitude: 116.5704 },
    },
    {
      day: 4,
      title: "High-speed rail to Xi'an",
      destination: "Beijing to Xi'an",
      summary:
        "Move from Beijing to Xi'an with private station transfers and rail details coordinated as one journey rather than separate bookings.",
      image: fourCityAsset.rail,
      hotel: "Xi'an stay: hotel and room category confirmed in your private proposal",
      meals: ["Breakfast when included", "Meals during travel as confirmed"],
      transport: "Private station transfers and high-speed rail",
      activities: [
        {
          title: "Departure support",
          description:
            "Your driver delivers you to the correct station with enough time for security, boarding and luggage handling.",
        },
        {
          title: "Xi'an arrival",
          description:
            "Meet your local driver after the train and transfer directly to the selected hotel, with a light evening if timing allows.",
        },
      ],
      guideNote:
        "Train number, seat class and station names are confirmed in the final written proposal.",
      coordinates: { latitude: 34.3416, longitude: 108.9398 },
    },
    {
      day: 5,
      title: "Terracotta Warriors and Xi'an",
      destination: "Xi'an",
      summary:
        "Give the Terracotta Warriors a focused private visit, then return to the city for its walls, food culture or an earlier finish.",
      image: fourCityAsset.xianTerracotta,
      hotel: "Xi'an stay: confirmed in your private proposal",
      meals: ["Breakfast when included", "Other meals as confirmed"],
      transport: "Private vehicle and English-speaking guide",
      activities: [
        {
          time: "Morning",
          title: "Terracotta Warriors",
          description:
            "Explore the principal excavation pits with context on the Qin dynasty, conservation and the individual details of the figures.",
        },
        {
          time: "Afternoon",
          title: "Choose the right Xi'an conclusion",
          description:
            "Continue to the City Wall, a historic neighborhood or a food-focused experience according to interest and energy.",
        },
      ],
      guideNote:
        "The museum can be busy. Timing, walking expectations and current ticket rules are reviewed for your date.",
      coordinates: { latitude: 34.3841, longitude: 109.2785 },
    },
    {
      day: 6,
      title: "Xi'an heritage, then travel to Chengdu",
      destination: "Xi'an to Chengdu",
      summary:
        "Use the morning for one final layer of Xi'an before a managed high-speed rail journey to Chengdu.",
      image: fourCityAsset.xianSunset,
      hotel: "Chengdu stay: hotel and room category confirmed in your private proposal",
      meals: ["Breakfast when included", "Meals as confirmed"],
      transport: "Private station transfers and high-speed rail",
      activities: [
        {
          time: "Morning",
          title: "A final Xi'an chapter",
          description:
            "Choose the Giant Wild Goose Pagoda area, City Wall, Muslim food culture or a slower hotel departure.",
        },
        {
          time: "Afternoon",
          title: "Travel to Chengdu",
          description:
            "Continue by high-speed rail, with departure and arrival transfers coordinated around the confirmed train.",
        },
      ],
      guideNote:
        "Dietary and halal requirements should be shared before the proposal so restaurant research can be specific.",
      coordinates: { latitude: 30.5728, longitude: 104.0668 },
    },
    {
      day: 7,
      title: "Giant pandas and Chengdu life",
      destination: "Chengdu",
      summary:
        "Visit the pandas during the more favorable morning window, then slow the day down through tea-house life and Sichuan food.",
      image: fourCityAsset.chengduPandas,
      hotel: "Chengdu stay: confirmed in your private proposal",
      meals: ["Breakfast when included", "Other meals as confirmed"],
      transport: "Private vehicle and English-speaking guide",
      activities: [
        {
          time: "Early morning",
          title: "Chengdu Panda Base",
          description:
            "Start early when conditions are generally better for animal activity, while allowing for the scale and walking involved at the base.",
        },
        {
          time: "Afternoon",
          title: "Tea, parks and local rhythm",
          description:
            "Experience Chengdu beyond the pandas through a tea house, neighborhood walk or food experience chosen for your group.",
        },
      ],
      guideNote:
        "Animal activity cannot be guaranteed. We plan around season and opening conditions without making unrealistic promises.",
      coordinates: { latitude: 30.7385, longitude: 104.1425 },
    },
    {
      day: 8,
      title: "Fly from Chengdu to Shanghai",
      destination: "Chengdu to Shanghai",
      summary:
        "Take a domestic flight to Shanghai with private airport transfers and a relaxed first look at the city after arrival.",
      image: fourCityAsset.shanghaiArrival,
      hotel: "Shanghai stay: hotel and room category confirmed in your private proposal",
      meals: ["Breakfast when included", "Meals during travel as confirmed"],
      transport: "Private airport transfers and domestic flight",
      activities: [
        {
          title: "A managed domestic flight day",
          description:
            "Flight timing, baggage allowance, airport choice and transfers are checked together before ticketing.",
        },
        {
          title: "First evening in Shanghai",
          description:
            "Settle in and take a light Bund or neighborhood introduction when arrival time permits.",
        },
      ],
      guideNote:
        "The final flight is selected around schedule reliability, baggage needs and the location of your Shanghai hotel.",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
    },
    {
      day: 9,
      title: "Historic and contemporary Shanghai",
      destination: "Shanghai",
      summary:
        "Read the city across both banks of the Huangpu, then move into neighborhoods where Shanghai feels more personal.",
      image: fourCityAsset.shanghaiBund,
      hotel: "Shanghai stay: confirmed in your private proposal",
      meals: ["Breakfast when included", "Other meals as confirmed"],
      transport: "Private vehicle and English-speaking guide as confirmed",
      activities: [
        {
          time: "Morning",
          title: "The Bund and Shanghai's architectural story",
          description:
            "Use the waterfront to understand the city's international history and its relationship with Pudong across the river.",
        },
        {
          time: "Afternoon",
          title: "Neighborhood Shanghai",
          description:
            "Choose historic lanes, design and architecture, a market or a food-led walk rather than default shopping stops.",
        },
      ],
      guideNote: "The sequence changes with weather, weekday, museum opening and your interests.",
      coordinates: { latitude: 31.2402, longitude: 121.4905 },
    },
    {
      day: 10,
      title: "Choose your final full day",
      destination: "Shanghai or nearby",
      summary:
        "Keep the final full day genuinely flexible: deepen Shanghai, visit a water town or travel privately to Suzhou.",
      image: fourCityAsset.waterTown,
      hotel: "Shanghai stay: confirmed in your private proposal",
      meals: ["Breakfast when included", "Other meals as confirmed"],
      transport: "Private touring or rail plan according to the selected option",
      activities: [
        {
          title: "Option one: deeper Shanghai",
          description:
            "Focus on food, contemporary art, architecture, family activities or an easier day with generous free time.",
        },
        {
          title: "Option two: water-town perspective",
          description:
            "Consider Zhujiajiao for a closer excursion or Suzhou for gardens and historic canals, subject to your preferred pace.",
        },
      ],
      guideNote:
        "We recommend the option only after considering season, day of week and how much movement your party wants late in the trip.",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
    },
    {
      day: 11,
      title: "Depart Shanghai",
      destination: "Shanghai",
      summary:
        "Your driver collects you for a private airport transfer planned around the correct terminal, traffic and check-in time.",
      image: fourCityAsset.shanghaiDeparture,
      meals: ["Breakfast when included with the confirmed hotel"],
      transport: "Private departure transfer",
      activities: [
        {
          title: "A clear departure",
          description:
            "Hotel checkout, luggage and airport timing are aligned with your international or onward flight.",
        },
      ],
      guideNote:
        "A final activity is added only when the flight time leaves a comfortable and reliable window.",
      coordinates: { latitude: 31.1443, longitude: 121.8083 },
    },
  ],
  accommodations: [
    {
      name: "Beijing historic-centre stay",
      destination: "Beijing, 3 nights",
      description:
        "Selected around access to the historic centre, room requirements and a sensible balance between atmosphere and transfer time.",
      roomStyle: "Hotel and room category confirmed after inquiry",
      highlights: ["Practical location", "Breakfast option", "Private transfers"],
      image: fourCityAsset.beijingHotel,
    },
    {
      name: "Xi'an central stay",
      destination: "Xi'an, 2 nights",
      description:
        "A well-placed base for the City Wall, evening exploration and the road journey to the Terracotta Warriors.",
      roomStyle: "Hotel and room category confirmed after inquiry",
      highlights: ["Central access", "Family room planning", "Breakfast option"],
      image: fourCityAsset.xianHotel,
    },
    {
      name: "Chengdu city stay",
      destination: "Chengdu, 2 nights",
      description:
        "Chosen for rest, food access and the wider transport plan rather than simply selecting the most recognizable hotel name.",
      roomStyle: "Hotel and room category confirmed after inquiry",
      highlights: ["Comfortable base", "Dining access", "Airport and rail planning"],
      image: fourCityAsset.chengduHotel,
    },
    {
      name: "Shanghai finale",
      destination: "Shanghai, 3 nights",
      description:
        "Choose between Bund access, a characterful historic neighborhood or a modern business-district base according to your priorities.",
      roomStyle: "Hotel and room category confirmed after inquiry",
      highlights: ["Location choice", "International departure access", "Room-view options"],
      image: fourCityAsset.shanghaiHotel,
    },
  ],
  included: [
    "Private itinerary design around your dates, travelers and preferred pace",
    "Hotels and daily breakfasts listed in the final written proposal",
    "Private airport, station and sightseeing transfers listed in the final proposal",
    "English-speaking local guide service as confirmed for each destination",
    "High-speed rail and domestic flight arrangements listed in the final proposal",
    "Attraction admission and required scenic-area transport listed in the final proposal",
    "Family, older-traveler, halal, vegetarian and allergy planning when requested in advance",
    "Local support before arrival and while traveling in China",
    "No forced shopping visits",
  ],
  excluded: [
    "International flights",
    "China visa costs or documentation services unless specifically stated",
    "Meals, drinks and optional experiences not listed in the final proposal",
    "Travel insurance, medical costs and personal expenses",
    "Gratuities unless stated in the final proposal",
    "Any service not confirmed in the final written proposal",
  ],
  optionalExperiences: [
    {
      title: "A family-shaped version",
      description:
        "Adjust start times, walking blocks, room configuration and hands-on activities around children or a multigenerational group.",
      badges: ["Family", "Flexible pacing"],
      image: fourCityAsset.familyTravel,
    },
    {
      title: "Food with local guidance",
      description:
        "Add selected Beijing, Xi'an, Chengdu or Shanghai food experiences with dietary needs checked before confirmation.",
      badges: ["Food", "Local life"],
      image: fourCityAsset.food,
    },
    {
      title: "A quieter final day",
      description:
        "Keep Day 10 in Shanghai, add free time or choose a nearby excursion according to energy, weather and interests.",
      badges: ["Tailor-made", "Slow travel"],
      image: fourCityAsset.finalDay,
    },
  ],
  transportation: {
    title: "Four cities, with every transition planned as part of the journey.",
    description:
      "Private transfers protect the complicated moments around stations and airports. Rail and flight details are selected for your dates, luggage and group rather than presented as generic inclusions.",
    items: [
      {
        label: "Beijing to Xi'an",
        value: "High-speed rail",
        helper: "Seat class, train number and both station transfers confirmed in writing.",
      },
      {
        label: "Xi'an to Chengdu",
        value: "High-speed rail",
        helper: "A practical city-centre connection with coordinated luggage and arrival support.",
      },
      {
        label: "Chengdu to Shanghai",
        value: "Domestic flight",
        helper: "Schedule, airport and baggage allowance checked before ticketing.",
      },
      {
        label: "Within each city",
        value: "Private transfers",
        helper: "Vehicle size is selected around passenger count, luggage and mobility needs.",
      },
    ],
  },
  routeMap: {
    title: "A clear first journey from imperial China to the present.",
    description:
      "The route moves east and south through four contrasting cities, using rail where it is practical and a domestic flight for the longest transition.",
    stops: [
      {
        name: "Beijing",
        days: "Days 1-4",
        description: "Arrival, imperial Beijing and a privately paced Great Wall day.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        name: "Xi'an",
        days: "Days 4-6",
        description: "Terracotta Warriors, ancient-city context and local food culture.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        name: "Chengdu",
        days: "Days 6-8",
        description: "Giant pandas, tea-house life and Sichuan flavors.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        name: "Shanghai",
        days: "Days 8-11",
        description: "Historic waterfront, contemporary city life and a flexible final day.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
    ],
  },
  gallery: fourCityGallery,
  faqs: [
    {
      question: "Is this a fixed group tour?",
      answer:
        "No. It is a private route framework. Dates, hotels, room types, guide service, transport and daily pacing are tailored to your party and confirmed in writing.",
    },
    {
      question: "How is the final price calculated?",
      answer:
        "The displayed starting price is an indicative per-person planning figure based on four guests sharing two rooms outside peak periods. Your written proposal recalculates the final price around travel dates, party size, room configuration, hotel preference, guide service, transport and selected experiences.",
    },
    {
      question: "Is this a good first trip to China?",
      answer:
        "Yes. Beijing, Xi'an, Chengdu and Shanghai provide a clear introduction to imperial history, ancient heritage, pandas, regional food and contemporary China without requiring travelers to understand many lesser-known destinations first.",
    },
    {
      question: "Can this journey work for children or older parents?",
      answer:
        "The private format allows us to review walking blocks, rest windows, room needs, vehicle access and daily start times. The Great Wall, Forbidden City and panda base still involve walking, so we discuss individual needs honestly before confirmation.",
    },
    {
      question: "Can you support halal, vegetarian or allergy requirements?",
      answer:
        "Yes, when requirements are shared before quotation. We research suitable restaurants and adjust meal timing, but availability and certification vary by city and must be checked for the actual travel dates.",
    },
    {
      question: "Are the trains and domestic flight included?",
      answer:
        "They are included only when listed in your final written proposal. The proposal confirms train class, flight baggage allowance, station and airport names, and all related private transfers.",
    },
    {
      question: "Can we replace the final Shanghai day with Suzhou or a water town?",
      answer:
        "Yes. Day 10 can remain in Shanghai or become a private visit to Suzhou or a suitable water town. We recommend the option after considering the season, weekday and your preferred pace.",
    },
    {
      question: "Are there compulsory shopping stops?",
      answer:
        "No. This journey has no compulsory shopping stops. Markets, design districts or shopping time are added only when they genuinely interest you.",
    },
  ],
  related: {
    tours: [
      {
        title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
        description:
          "A shorter first-China route for travelers who prefer three cities without the Chengdu chapter.",
        tags: ["9 days", "First-time China"],
        image: firstChinaAsset.shanghaiWaterfrontGroup,
        route: "Beijing, Xi'an, Shanghai",
        duration: "9 days / 8 nights",
        href: "/tours/first-china-beautifully-paced",
      },
      {
        title: "7-Day Chengdu Panda & Jiuzhaigou Private Journey",
        description:
          "A more nature-led Sichuan route combining pandas, food and Jiuzhaigou's alpine scenery.",
        tags: ["7 days", "Nature"],
        image: destinationAsset.jiuzhaigouLake,
        route: "Chengdu, Jiuzhaigou",
        duration: "7 days / 6 nights",
        href: "/tours/chengdu-pandas-jiuzhaigou-private-7-day-tour",
      },
    ],
    destinations: [
      {
        name: "Beijing",
        description: "Imperial landmarks, historic neighborhoods and the Great Wall.",
        image: destinationAsset.beijingForbiddenCityWide,
        href: "/destinations/beijing",
      },
      {
        name: "Xi'an",
        description: "Terracotta Warriors, ancient walls and Silk Road history.",
        image: destinationAsset.xianTerracotta,
        href: "/destinations/xian",
      },
      {
        name: "Chengdu",
        description: "Giant pandas, tea-house culture and Sichuan food.",
        image: destinationAsset.chengduPanda,
        href: "/destinations/chengdu",
      },
      {
        name: "Shanghai",
        description: "Historic waterfront architecture and contemporary city life.",
        image: destinationAsset.shanghaiSkyline,
        href: "/destinations/shanghai",
      },
    ],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=11-Day%20Beijing%20Xi%27an%20Chengdu%20Shanghai%20Private%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20tailored%20proposal%20for%20the%2011-day%20Beijing%2C%20Xi%27an%2C%20Chengdu%20and%20Shanghai%20private%20tour.%0A%0ATravelers%3A%0ADates%3A%0AHotel%20preference%3A%0ADietary%20or%20mobility%20needs%3A%0AQuestions%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20tailored%20proposal%20for%20the%2011-day%20Beijing%2C%20Xi%27an%2C%20Chengdu%20and%20Shanghai%20private%20tour.",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I am interested in the 11-Day Beijing, Xi'an, Chengdu & Shanghai Private Tour. Please recommend the right hotels, transport and daily pace for my group.",
  },
};

export const beijingXianChengduShanghaiSlug = slug;
