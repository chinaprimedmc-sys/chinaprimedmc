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
  title: "China, Considered: Beijing, Xi'an, Chengdu & Shanghai",
  subtitle:
    "A private first journey from Beijing's imperial scale to Xi'an's living history, Chengdu's everyday rhythm and Shanghai after dark.",
  duration: "12–13 Days / 11–12 Nights",
  route: "Beijing, Xi'an, Chengdu, Shanghai",
  styles: ["First-time China", "Family", "Culture", "Food"],
  hero: {
    eyebrow: "Signature first-time China journey",
    image: fourCityAsset.hero,
    primary: { label: "Explore Itinerary", href: "#itinerary" },
    secondary: { label: "Plan My Trip", href: "#proposal" },
  },
  seo: {
    title: "Beijing, Xi'an, Chengdu & Shanghai Private Tour",
    description:
      "A 12- or 13-day private China journey through Beijing, Xi'an, Chengdu and Shanghai, with local support, landmark visits, pandas and a protected free day.",
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
    pitch: "One clear first journey through four distinct ways of experiencing China.",
    facts: [
      {
        label: "Duration",
        value: "12–13 days / 11–12 nights",
        helper: "The considered version gives each city three nights and protects a full Free Day.",
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
    title: "The landmarks matter. So does the space between them.",
    description:
      "Beijing establishes imperial scale, Xi'an gives history depth, Chengdu changes the rhythm through pandas, tea and food, and Shanghai brings the route into the present. Choose the efficient 12-day rhythm or give the journey one more day to breathe.",
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
    note: "This is a private journey framework, not a fixed group departure. Choose the 12-day essential rhythm or the 13-day considered rhythm, then shape the Free Day around your party.",
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
      meals: ["Hotel breakfast"],
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
      meals: ["Hotel breakfast; special welcome dinner"],
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
      meals: ["Hotel breakfast"],
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
      meals: ["Hotel breakfast"],
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
        "See the Terracotta Warriors with the story brought to life, then return to Xi'an by public transport and walking for a closer look at the city beyond its headline sights.",
      image: fourCityAsset.xianTerracotta,
      hotel: "Xi'an stay: confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Public transport + walking with a local guide",
      activities: [
        {
          time: "Morning",
          title: "Terracotta Warriors",
          description:
            "Your guide helps you read the excavation pits in context, from the ambition of the Qin dynasty to the quiet details that make each figure feel individual.",
        },
        {
          time: "Afternoon",
          title: "See Xi'an as it is lived",
          description:
            "Ride with local residents, walk through the historic lanes and follow the city toward its food streets. Your guide takes care of the routes and small translations, leaving you free to notice the everyday Xi'an around you.",
        },
      ],
      guideNote:
        "The public-transport journey is part of the experience, not a compromise. It brings you closer to how Xi'an actually moves, while your local guide makes every connection comfortable, clear and worthwhile.",
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
      meals: ["Hotel breakfast"],
      transport: "Private station transfers and high-speed rail",
      activities: [
        {
          time: "Morning",
          title: "A final Xi'an chapter",
          description:
            "Choose the Giant Wild Goose Pagoda area, City Wall or Muslim food culture, moving by metro, bus and on foot with a local guide who can open up the history, flavours and everyday stories along the way.",
        },
        {
          time: "Afternoon",
          title: "Travel to Chengdu",
          description:
            "Continue by high-speed rail, with departure and arrival transfers coordinated around the confirmed train.",
        },
      ],
      guideNote:
        "We keep the morning local and unhurried. When it is time for Chengdu, your station transfer is arranged separately, so you can enjoy the public-transport experience without worrying about the onward journey.",
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
      meals: ["Hotel breakfast"],
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
      meals: ["Hotel breakfast"],
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
      meals: ["Hotel breakfast"],
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
      meals: ["Hotel breakfast"],
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
      meals: ["Hotel breakfast"],
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
    "Selected hotels with daily hotel breakfasts",
    "One special welcome dinner on Day 2",
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
        days: "Days 1-3",
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
        days: "Days 7-9",
        description: "Giant pandas, tea-house life and Sichuan flavors.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        name: "Shanghai",
        days: "Days 10-13",
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
        "Yes. Beijing, Xi'an, Chengdu and Shanghai provide a clear first introduction to imperial history, ancient heritage, regional food, pandas and contemporary China. The 13-day version adds more recovery and local-life space between the major landmarks.",
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
        "Yes. The 12-day version keeps one Free Day in Xi'an; the 13-day version protects a full Free Day in Chengdu. Shanghai can remain local or become a private visit to Suzhou or a suitable water town after we consider the season, weekday and your preferred pace.",
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
      "mailto:chinaprimedmc@gmail.com?subject=China%20Considered%20Private%20Journey&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20proposal%20for%20the%2012-%20or%2013-day%20Beijing%2C%20Xi%27an%2C%20Chengdu%20and%20Shanghai%20private%20journey.%0A%0ATravelers%3A%0ADates%3A%0APace%20preference%3A%0AFree%20Day%20service%3A%0AHotel%20preference%3A%0AQuestions%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20proposal%20for%20the%2012-%20or%2013-day%20Beijing%2C%20Xi%27an%2C%20Chengdu%20and%20Shanghai%20private%20journey.",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I am interested in the 12- or 13-day China Considered journey. Please recommend the right hotels, transport, pace and Free Day service for my group.",
  },
};

export const beijingXianChengduShanghaiSlug = slug;
