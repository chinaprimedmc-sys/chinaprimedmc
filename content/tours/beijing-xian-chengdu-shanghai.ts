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
  title: "China Through the Ages: Shanghai, Chengdu, Xi'an & Beijing",
  subtitle:
    "A 12-day private journey from Shanghai's riverfront and layered neighborhoods to Chengdu's panda conservation and food culture, Xi'an's ancient heritage, and Beijing's imperial landmarks and Great Wall.",
  duration: "12 Days / 11 Nights",
  route: "Shanghai, Chengdu, Xi'an, Beijing",
  styles: ["First-time China", "Family", "Culture", "Food"],
  hero: {
    eyebrow: "Signature first-time China journey",
    image: fourCityAsset.hero,
    primary: { label: "Explore Itinerary", href: "#itinerary" },
    secondary: { label: "Plan My Trip", href: "#proposal" },
  },
  seo: {
    title: "12-Day Shanghai, Chengdu, Xi'an & Beijing Private China Tour",
    description:
      "Explore Shanghai, Chengdu, Xi'an and Beijing on one 12-day private China journey, from a close-up panda visit to the Terracotta Warriors and Great Wall.",
    keywords: [
      "Shanghai Chengdu Xi'an Beijing private tour",
      "12 day Shanghai Chengdu Xi'an Beijing tour",
      "China private tour with pandas",
      "first time China itinerary",
      "private China family tour",
      "Great Wall Terracotta Warriors panda tour",
    ],
  },
  overview: {
    pitch:
      "A single, carefully sequenced route through China's modern waterfront, living traditions and imperial history.",
    facts: [
      {
        label: "Duration",
        value: "12 days / 11 nights",
        helper: "Shanghai 3 nights, Chengdu 3, Xi'an 2 and Beijing 3.",
      },
      {
        label: "Route",
        value: "4 defining cities",
        helper: "Shanghai, Chengdu, Xi'an and Beijing, in that order.",
      },
      {
        label: "Travel Style",
        value: "A private trip, not a fixed departure",
        helper: "Dates, hotels, room setup and daily rhythm are confirmed for your party.",
      },
      {
        label: "Pacing",
        value: "One defined 12-day itinerary",
        helper: "A clear day-by-day route with no alternate duration to compare.",
      },
      {
        label: "Suitable For",
        value: "First-time visitors",
        helper: "Landmarks, food, wildlife and modern city life in one coherent route.",
      },
      {
        label: "Proposal",
        value: "A written, itemized proposal",
        helper:
          "Hotel choices, transport, inclusions and final pricing are confirmed before booking.",
      },
    ],
  },
  planningSupport: {
    eyebrow: "Why this route works",
    title: "Four cities, connected around the experiences that matter.",
    description:
      "Begin in Shanghai with its gardens, old lanes and river skyline. Continue to Chengdu for panda conservation and Sichuan's culinary traditions, then follow Xi'an's ancient story north to Beijing and the Great Wall. Your private proposal will map each intercity connection and city transfer around your dates.",
    items: [
      {
        label: "For first visits",
        value: "A clear first impression",
        helper: "Each city adds a different chapter instead of repeating the same sightseeing day.",
      },
      {
        label: "For families",
        value: "More than landmark stops",
        helper: "History, pandas, food and contemporary neighborhoods give the route range.",
      },
      {
        label: "For confidence",
        value: "The handoffs are planned",
        helper: "Train and flight details are matched with station, airport and luggage transfers.",
      },
    ],
    note: "This is one 12-day private itinerary, not a fixed group departure. Your written proposal confirms hotels, transport, inclusions and pricing for your travel dates.",
  },
  highlights: [
    {
      title: "Walk the Jinshanling Great Wall",
      description:
        "Experience a more rugged stretch of the Wall on a guided hike. The route and walking expectations should be reviewed against your group's fitness and the conditions on your dates.",
      category: "Culture",
      image: fourCityAsset.greatWall,
    },
    {
      title: "See panda conservation up close",
      description:
        "Visit the Dujiangyan Panda Base for a conservation-focused experience that adds context to the encounter, not just a quick photo stop.",
      category: "Nature",
      image: fourCityAsset.pandaHighlight,
    },
    {
      title: "Taste Sichuan beyond the dining table",
      description:
        "Explore the region's culinary traditions and spirit-making culture with local interpretation, connecting what you taste to the place and its craft.",
      category: "Food",
      image: fourCityAsset.food,
    },
    {
      title: "Sail Shanghai's skyline at sunset",
      description:
        "See the Huangpu waterfront from a private yacht as the skyline changes with the evening light, then explore the city's historic neighborhoods and contemporary art.",
      category: "Culture",
      image: fourCityAsset.shanghaiBund,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Shanghai",
      destination: "Shanghai",
      summary:
        "Meet your local guide on arrival, transfer to your hotel and leave time to recover from the journey. If your arrival time allows, ease into the city before dinner.",
      image: fourCityAsset.arrival,
      hotel: "Shanghai stay: hotel and room category confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private airport transfer",
      activities: [
        {
          title: "A considered arrival",
          description:
            "Your arrival meeting point, vehicle and luggage arrangements are confirmed before departure.",
        },
        {
          title: "Time to settle in",
          description:
            "Keep the first hours light. Your guide can suggest a nearby walk or a comfortable place to eat, depending on your arrival time.",
        },
      ],
      guideNote:
        "The day is planned around your actual arrival rather than a fixed sightseeing schedule.",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
    },
    {
      day: 2,
      title: "Discover Shanghai's old lanes and a different view of wellness",
      destination: "Shanghai",
      summary:
        "Wander through Yuyuan Garden and the lively lanes of the old city, then explore traditional Chinese medicine through a private expert-led session.",
      image: fourCityAsset.shanghaiBund,
      hotel: "Shanghai stay: confirmed in your private proposal",
      meals: ["Hotel breakfast; hosted welcome dinner"],
      transport: "Private vehicle and English-speaking guide",
      activities: [
        {
          time: "Morning",
          title: "Yuyuan Garden and Bazaar",
          description:
            "Explore classical garden design and the busy lanes around it with a guide who can put the neighborhood's history in context.",
        },
        {
          time: "Afternoon",
          title: "A private traditional Chinese medicine session",
          description:
            "Meet a practitioner for an introduction to traditional Chinese medicine and its place in everyday wellness. The provider and session are confirmed for your dates.",
        },
      ],
      guideNote:
        "The session is cultural and educational; it is not a substitute for medical advice or treatment.",
      coordinates: { latitude: 31.2272, longitude: 121.4922 },
    },
    {
      day: 3,
      title: "See Shanghai from the river at sunset",
      destination: "Shanghai",
      summary:
        "Move between Shanghai's historic streets, creative districts and contemporary art before seeing the skyline from the Huangpu River at sunset.",
      image: fourCityAsset.shanghaiBund,
      hotel: "Shanghai stay: confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private touring; Huangpu River cruise as confirmed",
      activities: [
        {
          time: "Morning",
          title: "The Former French Concession",
          description:
            "Walk a leafy stretch of the former concession and see how Shanghai's architecture reflects its layered past.",
        },
        {
          time: "Late morning and afternoon",
          title: "Xintiandi, Shanghai Museum East and the Huangpu",
          description:
            "Explore Xintiandi and China's artistic heritage with a museum visit, then take a Huangpu River cruise as the city lights come on.",
        },
      ],
      guideNote:
        "Museum opening, yacht availability and sailing time are checked for your travel date.",
      coordinates: { latitude: 31.2402, longitude: 121.4905 },
    },
    {
      day: 4,
      title: "Fly from Shanghai to Chengdu",
      destination: "Shanghai to Chengdu",
      summary:
        "Leave Shanghai for Chengdu by domestic flight. Airport transfers and flight timing are coordinated together, with the evening left open after arrival.",
      image: fourCityAsset.shanghaiArrival,
      hotel: "Chengdu stay: hotel and room category confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private airport transfers and domestic flight as listed in your proposal",
      activities: [
        {
          title: "One connected airport transfer",
          description:
            "Your departure pickup, airport and baggage needs are reviewed with the flight before ticketing.",
        },
        {
          title: "Arrive in Chengdu",
          description:
            "Meet your driver and transfer to your hotel. Keep the rest of the day easy, depending on the flight schedule.",
        },
      ],
      guideNote:
        "The confirmed proposal names the flight, airport, baggage allowance and transfer arrangements.",
      coordinates: { latitude: 30.5728, longitude: 104.0668 },
    },
    {
      day: 5,
      title: "Meet the pandas at Dujiangyan",
      destination: "Chengdu and Dujiangyan",
      summary:
        "Spend time at the Dujiangyan Panda Base, where a conservation-focused visit can offer a deeper understanding of the work behind panda care.",
      image: fourCityAsset.chengduPandas,
      hotel: "Chengdu stay: confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private transfers and guided visit, as confirmed",
      activities: [
        {
          time: "Morning",
          title: "A conservation-led panda experience",
          description:
            "Learn about panda protection and care in context. Access to behind-the-scenes areas is not assumed and must be confirmed for the actual date.",
        },
      ],
      guideNote:
        "The base is outside central Chengdu; transfer time, access and any conservation activity are confirmed in the proposal.",
      coordinates: { latitude: 30.9976, longitude: 103.6477 },
    },
    {
      day: 6,
      title: "Explore Chengdu's culinary and craft traditions",
      destination: "Chengdu",
      summary:
        "Use a full day to understand Sichuan through its food culture and traditional spirit-making heritage, with the exact visits shaped around availability and your interests.",
      image: fourCityAsset.food,
      hotel: "Chengdu stay: confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private touring and local transfers as confirmed",
      activities: [
        {
          time: "Morning",
          title: "Sichuan flavors and local food culture",
          description:
            "Explore how regional ingredients, technique and local tastes shape Sichuan cooking. Any tasting or meal inclusion is specified in your proposal.",
        },
        {
          time: "Afternoon",
          title: "The story behind traditional spirits",
          description:
            "Discover the heritage and process behind Sichuan's spirit-making traditions through a locally hosted visit, subject to confirmation for your date.",
        },
      ],
      guideNote:
        "The visits and any tastings are confirmed against your dates and the services listed in your proposal.",
      coordinates: { latitude: 30.5728, longitude: 104.0668 },
    },
    {
      day: 7,
      title: "Travel from Chengdu to Xi'an",
      destination: "Chengdu to Xi'an",
      summary:
        "Continue north to Xi'an. Your proposal confirms the flight or train, transfers and luggage arrangements for your dates.",
      image: fourCityAsset.rail,
      hotel: "Xi'an stay: hotel and room category confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Intercity transport and private transfers as listed in your proposal",
      activities: [
        {
          title: "A planned city-to-city handoff",
          description:
            "Departure time, luggage, station or airport access and arrival pickup are treated as one connection rather than separate bookings.",
        },
      ],
      guideNote:
        "The specific service is confirmed once schedules and inventory for your dates are available.",
      coordinates: { latitude: 34.3416, longitude: 108.9398 },
    },
    {
      day: 8,
      title: "Explore Xi'an's ancient heritage",
      destination: "Xi'an",
      summary:
        "Spend the day with Xi'an's defining heritage, including the Terracotta Warriors and the stories of the Qin empire.",
      image: fourCityAsset.xianTerracotta,
      hotel: "Xi'an stay: confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private touring and transfers as confirmed",
      activities: [
        {
          time: "Morning",
          title: "The Terracotta Warriors",
          description:
            "Explore the excavation pits with a guide who can explain the scale, history and craftsmanship behind the figures.",
        },
        {
          time: "Afternoon",
          title: "Xi'an's historic character",
          description:
            "Continue the city's story through its historic center, with the route adjusted around opening times and your interests.",
        },
      ],
      guideNote:
        "Admission, transfers and any additional stops are listed in the date-specific proposal.",
      coordinates: { latitude: 34.3841, longitude: 109.2785 },
    },
    {
      day: 9,
      title: "Travel from Xi'an to Beijing",
      destination: "Xi'an to Beijing",
      summary:
        "Leave Xi'an for Beijing and settle into the capital. Your proposal confirms the transport and arrival handoff for your dates.",
      image: fourCityAsset.rail,
      hotel: "Beijing stay: hotel and room category confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Intercity transport and private transfers as listed in your proposal",
      activities: [
        {
          time: "Morning",
          title: "A connected departure and arrival",
          description:
            "The transfer to your departure point and pickup on arrival are planned around the confirmed schedule.",
        },
      ],
      guideNote:
        "The actual rail or flight arrangement is subject to confirmation for your travel dates.",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
    },
    {
      day: 10,
      title: "See Beijing's imperial heart",
      destination: "Beijing",
      summary:
        "Explore the Forbidden City and Beijing's historic axis with a guide who brings the imperial setting and its stories into focus.",
      image: fourCityAsset.beijingImperial,
      hotel: "Beijing stay: confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private vehicle and English-speaking guide as confirmed",
      activities: [
        {
          title: "The Forbidden City",
          description:
            "Follow a route shaped around ticket availability and your interests, with time to understand the palace complex beyond its grand entrances.",
        },
        {
          title: "Beijing's historic center",
          description:
            "Continue through the historic center or a nearby cultural site, depending on opening times and the day's pace.",
        },
      ],
      guideNote:
        "Forbidden City tickets are date-specific; availability is checked before the itinerary is finalized.",
      coordinates: { latitude: 39.9163, longitude: 116.3972 },
    },
    {
      day: 11,
      title: "Hike the Jinshanling Great Wall",
      destination: "Beijing",
      summary:
        "Spend a full day on the Jinshanling section, a more rugged landscape for travelers who want a substantial walk along the Wall.",
      image: fourCityAsset.shanghaiDeparture,
      hotel: "Beijing stay: confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private round-trip transfer and guided hike, as confirmed",
      activities: [
        {
          title: "The Jinshanling section",
          description:
            "Walk a dramatic stretch of the Great Wall with time to take in its watchtowers and mountain setting. The route, duration and terrain are reviewed before confirmation.",
        },
      ],
      guideNote:
        "Jinshanling is a physically active visit with uneven steps; it is not an easy-access Wall section.",
      coordinates: { latitude: 40.6764, longitude: 117.2348 },
    },
    {
      day: 12,
      title: "Depart from Beijing",
      destination: "Beijing",
      summary:
        "Your driver takes you to the airport serving your departure, with pickup timing planned around traffic, luggage and check-in.",
      image: fourCityAsset.shanghaiDeparture,
      hotel: "Departure day",
      meals: ["Hotel breakfast"],
      transport: "Private departure transfer as listed in your proposal",
      activities: [
        {
          title: "A clear final handoff",
          description:
            "Airport, terminal and pickup time are reconfirmed against your flight before departure.",
        },
      ],
      guideNote:
        "No extra sightseeing is added unless your flight timing leaves a reliable window.",
      coordinates: { latitude: 40.0799, longitude: 116.6031 },
    },
  ],
  accommodations: [
    {
      name: "Shanghai, three nights",
      destination: "Shanghai, 3 nights",
      description:
        "A central base selected around your room needs, sightseeing plan and transfer times.",
      roomStyle: "Hotel and room category confirmed in your proposal",
      highlights: ["Central location", "Room needs considered", "Breakfast included"],
      image: fourCityAsset.shanghaiHotel,
    },
    {
      name: "Chengdu, three nights",
      destination: "Chengdu, 3 nights",
      description:
        "A comfortable base for the panda visit, Sichuan food culture and the onward connection.",
      roomStyle: "Hotel and room category confirmed in your proposal",
      highlights: ["Convenient base", "Dining nearby", "Breakfast included"],
      image: fourCityAsset.chengduHotel,
    },
    {
      name: "Xi'an, two nights",
      destination: "Xi'an, 2 nights",
      description:
        "Stay close to the historic center, with room for the City Wall, evening exploration and the Terracotta Warriors.",
      roomStyle: "Hotel and room category confirmed in your proposal",
      highlights: ["Historic-center access", "Family room planning", "Breakfast included"],
      image: fourCityAsset.xianHotel,
    },
    {
      name: "Beijing, three nights",
      destination: "Beijing, 3 nights",
      description:
        "A central base selected around your room needs, sightseeing plan and transfer times.",
      roomStyle: "Hotel and room category confirmed in your proposal",
      highlights: ["Central location", "Room needs considered", "Breakfast included"],
      image: fourCityAsset.beijingHotel,
    },
  ],
  included: [
    "Private itinerary planning around your travel dates and party",
    "Selected hotels with daily hotel breakfast",
    "A hosted welcome dinner on Day 2",
    "The private transfers, local guide services and sightseeing transport listed in your proposal",
    "High-speed rail and domestic flight arrangements listed in your proposal",
    "Attraction admission and required scenic-area transport listed in your proposal",
    "Advance planning for family, mobility, halal, vegetarian and allergy needs",
    "Local support before arrival and while you travel in China",
    "No compulsory shopping stops",
  ],
  excluded: [
    "International flights and travel insurance",
    "Visa fees and personal expenses",
    "Optional experiences not selected in your proposal",
    "Gratuities",
  ],
  optionalExperiences: [
    {
      title: "A better fit for your family",
      description:
        "Plan start times, walking distances, room setup and activities around your children's ages or your multigenerational group.",
      badges: ["Family", "Flexible pacing"],
      image: fourCityAsset.familyTravel,
    },
    {
      title: "A local food experience",
      description:
        "Add a guided food experience in Beijing, Xi'an, Chengdu or Shanghai. Dietary needs are checked before arrangements are confirmed.",
      badges: ["Food", "Local life"],
      image: fourCityAsset.food,
    },
  ],
  transportation: {
    title: "The city changes are part of the plan.",
    description:
      "We coordinate each train or flight with the station or airport transfer around it. Your proposal spells out the route, service and luggage arrangements for your dates.",
    items: [
      {
        label: "Shanghai to Chengdu",
        value: "Domestic connection",
        helper: "The flight and airport transfers are confirmed for your travel dates.",
      },
      {
        label: "Chengdu to Xi'an",
        value: "Intercity connection",
        helper: "Train or flight, luggage and arrival transfer are confirmed together.",
      },
      {
        label: "Xi'an to Beijing",
        value: "Intercity connection",
        helper: "The service and station or airport transfers are confirmed for your dates.",
      },
      {
        label: "Within each city",
        value: "Private transfers",
        helper: "Vehicle size is matched to your party, luggage and mobility needs.",
      },
    ],
  },
  routeMap: {
    title: "From Shanghai to China's imperial north.",
    description:
      "Travel west from Shanghai to Chengdu, continue to Xi'an, then finish in Beijing. Exact intercity services are confirmed around your dates.",
    stops: [
      {
        name: "Shanghai",
        days: "Days 1–3",
        description: "Settle in, explore historic neighborhoods and see the Huangpu at sunset.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        name: "Chengdu",
        days: "Days 4–6",
        description: "Visit the pandas and explore Sichuan's food and craft traditions.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        name: "Xi'an",
        days: "Days 7–8",
        description: "Explore the Terracotta Warriors and the city's historic center.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        name: "Beijing",
        days: "Days 9–12",
        description: "See the Forbidden City, walk Jinshanling and depart from Beijing.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
    ],
  },
  gallery: fourCityGallery,
  faqs: [
    {
      question: "Is this a fixed group tour?",
      answer:
        "No. This is a private route, not a fixed group departure. We confirm your dates, hotel and room choices, guide service, transport and daily pace in a written proposal.",
    },
    {
      question: "How is the final price calculated?",
      answer:
        "Pricing is prepared for your dates, party size, room setup, hotel choices, transport and confirmed experiences. Request a written proposal for the full price.",
    },
    {
      question: "Is this a good first trip to China?",
      answer:
        "Yes. The 12-day route brings together contemporary Shanghai, Chengdu's pandas and food, Xi'an's ancient history, and Beijing's imperial landmarks and Great Wall.",
    },
    {
      question: "Can this journey work for children or older parents?",
      answer:
        "We can review walking distances, rest breaks, room needs, vehicle access and start times with you. The Great Wall, Forbidden City and Panda Base still involve walking, so we discuss mobility needs before confirming the plan.",
    },
    {
      question: "Can you support halal, vegetarian or allergy requirements?",
      answer:
        "Share dietary requirements before we prepare your proposal. We check suitable restaurants and meal arrangements for your dates; availability and certification vary by city.",
    },
    {
      question: "Are the trains and domestic flight included?",
      answer:
        "Your written proposal lists each included train or flight, the class or baggage allowance, and the related station or airport transfers.",
    },
    {
      question: "Can we extend the trip beyond 12 days?",
      answer:
        "This is one defined 12-day route. If you have extra time, tell us when you enquire and we can discuss a separately quoted extension.",
    },
    {
      question: "Are there compulsory shopping stops?",
      answer:
        "No. There are no compulsory shopping stops. We include a market or shopping time only when you ask for it or it has a clear connection to your interests.",
    },
  ],
  related: {
    tours: [
      {
        title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
        description: "See Beijing, Xi'an and Shanghai in less time, without the Chengdu chapter.",
        tags: ["9 days", "First-time China"],
        image: firstChinaAsset.shanghaiWaterfrontGroup,
        route: "Beijing, Xi'an, Shanghai",
        duration: "9 days / 8 nights",
        href: "/tours/first-china-beautifully-paced",
      },
      {
        title: "7-Day Chengdu Panda & Jiuzhaigou Private Journey",
        description:
          "Pair Chengdu's pandas and food with Jiuzhaigou's alpine lakes and forest scenery.",
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
      "mailto:chinaprimedmc@gmail.com?subject=12-Day%20Shanghai%2C%20Chengdu%2C%20Xi%27an%20%26%20Beijing%20Private%20Journey&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20proposal%20for%20the%2012-day%20Shanghai%2C%20Chengdu%2C%20Xi%27an%20and%20Beijing%20private%20journey.%0A%0ATravelers%3A%0ADates%3A%0AHotel%20preference%3A%0AQuestions%3A%0A",
    whatsappHref:
      "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20proposal%20for%20the%2012-day%20Shanghai%2C%20Chengdu%2C%20Xi%27an%20and%20Beijing%20private%20journey.",
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "I am interested in the 12-day Shanghai, Chengdu, Xi'an and Beijing private journey. Please send me a proposal for my group and travel dates.",
  },
};

export const beijingXianChengduShanghaiSlug = slug;
