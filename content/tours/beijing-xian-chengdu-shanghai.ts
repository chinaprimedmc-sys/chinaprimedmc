import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
import {
  fourCityAsset,
  fourCityGallery,
} from "@/content/tours/beijing-xian-chengdu-shanghai-assets";
import type { Tour } from "@/types/tour";

const slug = "beijing-xian-chengdu-shanghai-private-11-day-tour";

export const beijingXianChengduShanghaiTour: Tour = {
  slug,
  title: "12-Day Private China Tour: Shanghai to Beijing",
  subtitle:
    "A 12-day private journey from Shanghai's riverfront and layered neighborhoods to Chengdu's public panda observation and food culture, Xi'an's ancient heritage, and Beijing's imperial landmarks and Great Wall.",
  duration: "12 Days / 11 Nights",
  route: "Shanghai, Chengdu, Xi'an, Beijing",
  styles: ["First-time China", "Family", "Culture", "Food"],
  hero: {
    eyebrow: "Signature first-time China journey",
    image: fourCityAsset.hero,
    primary: { label: "Explore Itinerary", href: "#itinerary" },
    secondary: { label: "Plan My Trip", href: "#enquiry" },
  },
  seo: {
    title: "12-Day Private China Tour: Shanghai to Beijing",
    description:
      "A private 12-day tour from Shanghai to Beijing via Chengdu and Xian, with panda viewing, cultural visits, private guides and a full Jinshanling Great Wall day.",
    keywords: [
      "Shanghai Chengdu Xian Beijing 12 day private tour",
      "China private tour Jinshanling Great Wall",
      "Dujiangyan panda visit private China tour",
      "China tour Shanghai arrival Beijing departure",
    ],

    preserveCopy: true,
  },
  overview: {
    pitch:
      "A single, carefully sequenced route through China's modern waterfront, living traditions and imperial history.",
    facts: [
      { label: "Hotels", value: "Selected hotels and room categories named in the proposal" },
      { label: "Pacing", value: "Cultural sightseeing with an active Jinshanling hiking day" },
      {
        label: "Suitable for",
        value:
          "First-time or returning visitors who want four cities, regional culture and an active Great Wall walk rather than a family-specific program.",
      },
    ],

    practicalities: [
      {
        label: "Best for",
        value:
          "First-time or returning visitors who want four cities, regional culture and an active Great Wall walk rather than a family-specific program.",
      },
      {
        label: "Nights and direction",
        value:
          "12 days / 11 nights: Shanghai 3, Chengdu 3, Xi’an 2 and Beijing 3. Arrive in Shanghai and depart from Beijing.",
      },
      {
        label: "Domestic travel",
        value:
          "Shanghai–Chengdu flight; Chengdu–Xi’an and Xi’an–Beijing connections are selected and ticketed as stated in the proposal. Train class, baggage and transfers must be specified.",
      },
      {
        label: "Hotels",
        value:
          "Selected hotels with breakfast; property, room category and occupancy are named before booking. Luxury room categories are not automatic.",
      },
      {
        label: "Panda facility",
        value:
          "A public visit to the confirmed Dujiangyan panda facility. This is not the Chengdu city Panda Base and does not include volunteering or backstage access.",
      },
      {
        label: "Cultural appointments",
        value:
          "The proposed TCM introduction and Sichuan spirits visit need a confirmed provider, appointment, language and scope. TCM is educational, not a medical service.",
      },
      {
        label: "Great Wall",
        value:
          "Jinshanling has uneven, steep and exposed sections. Route length, turnaround and fitness are reviewed; cable cars or an easier section are separate design choices.",
      },
      {
        label: "Meals",
        value:
          "Hotel breakfasts begin after the first hotel night; the listed welcome dinner is included. Other meals and tastings are included only when expressly stated.",
      },
      {
        label: "Private and public services",
        value:
          "Local guiding and road vehicles are private during the agreed hours. Museums, panda enclosures, rail, flights and any shared river cruise remain public services.",
      },
      {
        label: "Starting-price basis",
        value: getPublishedPriceDisclosure("beijing-xian-chengdu-shanghai-private-11-day-tour"),
      },
    ],

    answer:
      "Travel privately from Shanghai to Beijing in 12 days, with three nights in Shanghai, three in Chengdu, two in Xi’an and three in Beijing. The route combines city culture, a public Dujiangyan panda visit, the Terracotta Army and an active Jinshanling Great Wall day. Local guides, selected hotels and the listed domestic connections are arranged for your party; meals and specialist visits follow the proposal.",
  },
  planningSupport: {
    eyebrow: "Why this route works",
    title: "Four cities, connected around the experiences that matter.",
    description:
      "Begin in Shanghai with its gardens, old lanes and river skyline. Continue to Chengdu for public panda observation and Sichuan's culinary traditions, then follow Xi'an's ancient story north to Beijing and the Great Wall. Your private proposal will map each intercity connection and city transfer around your dates.",
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
      title: "Observe pandas at Dujiangyan",
      description:
        "Observe pandas from the public visitor areas at the confirmed Dujiangyan facility. Your private guide explains behavior, habitat and the role of the care center, with time to watch rather than hurry between enclosures.",
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
      title: "See Shanghai's waterfront from the river",
      description:
        "See Shanghai's historic waterfront and Pudong skyline from the river experience named in your proposal. A shared sightseeing cruise and a private charter are different arrangements; vessel category, sailing time and any extra cost are confirmed before booking.",
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
      meals: ["No breakfast included before the first hotel night; other meals as confirmed"],
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
      transport: "Private vehicle and multilingual guide",
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
        "Museum opening, the confirmed river-cruise category and sailing time are checked for your travel date.",
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
        "Visit the public areas of Dujiangyan Panda Base with private guide interpretation of panda behavior, habitat and the work of a care facility. This is a public visitor experience, not an exclusive or backstage conservation program.",
      image: fourCityAsset.chengduPandas,
      hotel: "Chengdu stay: confirmed in your private proposal",
      meals: ["Hotel breakfast"],
      transport: "Private transfers and guided visit, as confirmed",
      activities: [
        {
          time: "Morning",
          title: "Panda observation with private interpretation",
          description:
            "Observe the animals from permitted public viewing areas and discuss behavior and habitat. No touching, holding, keeper access or volunteer participation is included or guaranteed.",
        },
      ],
      guideNote:
        "Confirm the named Dujiangyan facility, public ticket, visiting hours and road transfers in the proposal. This is a different destination from the Chengdu Research Base.",
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
      transport: "Private vehicle and multilingual guide as confirmed",
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
      question: "What does this private tour cost, and what is the starting-price basis?",
      answer: getPublishedPriceDisclosure("beijing-xian-chengdu-shanghai-private-11-day-tour"),
    },
    {
      question: "Where does this 12-day China tour start and end?",
      answer:
        "Start in Shanghai and finish in Beijing over 12 days and 11 nights: Shanghai 3 nights, Chengdu 3, Xi'an 2 and Beijing 3. The route includes three city-to-city journeys and an active Jinshanling Great Wall day. Confirm the domestic connections before booking international arrival and departure flights.",
    },
    {
      question: "How is this different from the Beijing Xian Shanghai ten-day tour?",
      answer:
        "This route adds Chengdu and a third city-to-city move, includes different cultural appointments and finishes with an active Jinshanling Great Wall day. The ten-day journey uses three cities and Mutianyu. Choose four cities for that broader cultural range, not because twelve days automatically means a gentler pace.",
    },
    {
      question: "Does the Dujiangyan panda visit include a volunteer program?",
      answer:
        "No volunteer place, keeper role, feeding, holding or backstage access is included. The plan is a public visitor experience with private guiding and transfers. The exact facility and access are named in the proposal. Do not confuse Dujiangyan with the Chengdu Research Base or assume their ticket rules are identical.",
    },
    {
      question: "How demanding is the Jinshanling Great Wall walk?",
      answer:
        "It is an active mountain-wall visit with uneven steps, steep gradients and exposed stretches. A fixed distance is not imposed before discussing your ability and the season. Tell us about knees, balance, heat or a fear of heights. Changing to Mutianyu or a shorter route requires a revised plan, not a promise of equivalent access.",
    },
    {
      question: "Is the traditional Chinese medicine session a consultation or treatment?",
      answer:
        "The proposed session is a cultural and educational introduction with the provider and content confirmed for your dates. It does not diagnose, prescribe or promise a health outcome. Medical services would require separately contracted qualified care; do not stop or change medication because of an itinerary activity.",
    },
    {
      question: "Does the Shanghai river experience include a private yacht?",
      answer:
        "Not automatically. The proposal must name any included river ticket or charter and specify whether it is shared or private. A standard sightseeing cruise is not a private yacht. Sailing time and visibility depend on the operator and conditions, and an unavailable sunset does not create a new included service.",
    },
    {
      question: "Are the domestic flights and rail tickets included?",
      answer:
        "The package includes the domestic sectors expressly listed in the written proposal, with departure points, classes, baggage, fare conditions and local transfers. The designed route flies Shanghai to Chengdu and then continues north. Exact schedules and rail-versus-flight choices are checked for the dates; international flights remain separate.",
    },
    {
      question: "Are spirits tastings suitable for non-drinkers?",
      answer:
        "The Sichuan visit is about production and regional food culture, with any tasting separately identified. Tell us if you avoid alcohol or want an alternative. Do not assume an alcohol-free production site or a suitable substitute without confirmation. Underage travelers do not participate in alcohol tasting.",
    },
    {
      question: "Is this the same as the twelve-day family tour?",
      answer:
        "No. This route is designed around adult cultural interests and Jinshanling walking. The family itinerary travels Beijing to Shanghai, uses age-matched workshops and family room planning, and protects more child-oriented downtime. A family can request adaptation, but this page does not automatically supply that family package.",
    },
    {
      question: "Can we change the order or shorten the journey?",
      answer:
        "Yes, as a revised proposal. Changing gateways, removing a city or replacing Jinshanling affects nights, transport, reservations and price. Keep international tickets flexible until the operator has checked the domestic route. A shorter trip does not cost a fixed fraction of the twelve-day price.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "12-Day Private China Family Tour with Pandas",
        description:
          "Choose age-aware workshops, family room planning and protected breaks for travel with children.",
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
      {
        title: "10-Day Private Tour of Beijing, Xi'an and Shanghai",
        description:
          "Choose a shorter three-city introduction with fewer hotel changes and no Chengdu chapter.",
        tags: ["First-time China", "Culture", "Photography"],
        image: {
          src: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.jpg",
          alt: "The Great Wall winding across mountain ridges near Beijing in warm evening light",
          width: 1920,
          height: 1080,
        },
        route: "Beijing · Xi'an · Shanghai",
        duration: "10 days / 9 nights",
        href: "/tours/beijing-xian-shanghai-private-10-day-tour",
      },
    ],

    destinations: [
      {
        name: "Beijing",
        description: "Imperial landmarks, historic neighborhoods and the Great Wall.",
        image: {
          src: "/home/editorial/great-wall-private-china-travel.webp",
          alt: "A traveler looking across the Great Wall near Beijing",
          width: 1086,
          height: 1448,
          objectPosition: "50% 44%",
        },
        href: "/destinations/beijing",
      },
      {
        name: "Xi'an",
        description: "Terracotta Warriors, ancient walls and Silk Road history.",
        image: {
          src: "/home/xian-terracotta-army.webp",
          alt: "Terracotta Army figures in Xi'an",
          width: 1400,
          height: 927,
          objectPosition: "50% 48%",
        },
        href: "/destinations/xian",
      },
      {
        name: "Chengdu",
        description: "Giant pandas, tea-house culture and Sichuan food.",
        image: {
          src: "/home/chengdu-panda.webp",
          alt: "A giant panda in Chengdu",
          width: 1920,
          height: 1200,
          objectPosition: "54% 42%",
        },
        href: "/destinations/chengdu",
      },
      {
        name: "Shanghai",
        description: "Historic waterfront architecture and contemporary city life.",
        image: {
          src: "/home/shanghai-pudong-skyline.webp",
          alt: "Shanghai Pudong skyline at dusk",
          width: 1920,
          height: 1080,
          objectPosition: "50% 45%",
        },
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

  planningResources: [
    {
      label: "The Palace Museum: official visitor information",
      href: "https://intl.dpm.org.cn/visit.html",
      officialPublisher: "The Palace Museum",
      description:
        "Check reservation, identification and visitor notices for your travel date. Private guiding does not bypass museum admission rules.",
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
      label: "China entry requirements: official information",
      href: "https://en.nia.gov.cn/",
      officialPublisher: "National Immigration Administration of China",
      description:
        "Check the rule that applies to your passport and full international route. Booking this tour does not establish visa-free or transit eligibility.",
    },
  ],

  faqLimit: 13,

  updatedAt: "2026-11-12",

  inquiryChecklist: [
    "Dates and arrival in Shanghai / departure from Beijing",
    "Number of travelers, rooms and hotel preference",
    "Walking comfort for Jinshanling and archaeological sites",
    "Guide language and interests",
    "Optional cultural sessions and dietary needs",
  ],

  comparison: {
    title: "Four cities or a focused three-city first trip?",
    intro:
      "The panda and Sichuan chapter adds another city move. Keep three cities when you prefer fewer hotel bases.",
    columns: ["Decision", "This four-city journey", "10-day Beijing–Xi’an–Shanghai journey"],
    rows: [
      ["Route", "Shanghai → Chengdu → Xi’an → Beijing", "Beijing → Xi’an → Shanghai"],
      ["Hotel bases", "Four bases and three changes", "Three bases and two changes"],
      [
        "Main difference",
        "Dujiangyan pandas, Sichuan culture and active Jinshanling walking",
        "A shorter introduction without a panda city",
      ],
    ],
    href: "/tours/beijing-xian-shanghai-private-10-day-tour",
    linkLabel: "Compare the alternative itinerary",
  },
};

export const beijingXianChengduShanghaiSlug = slug;
