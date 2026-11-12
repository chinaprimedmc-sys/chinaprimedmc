import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
import {
  chengduChongqingZhangjiajieAsset as asset,
  chengduChongqingZhangjiajieGallery,
  optionalImages,
} from "@/content/tours/chengdu-chongqing-zhangjiajie-assets";
import type { Tour } from "@/types/tour";

const slug = "chengdu-chongqing-zhangjiajie-private-11-day-tour";
const inquiryMessage =
  "Hello AVIORA, I would like a tailored proposal for the 11-day Chengdu, Chongqing and Zhangjiajie private journey. Please advise on dates, hotels, pacing and the best choices for the two open days.";

export const chengduChongqingZhangjiajieTour: Tour = {
  slug,
  title: "11-Day Chengdu, Chongqing and Zhangjiajie Tour",
  subtitle:
    "Giant pandas, Sichuan flavors, Chongqing's vertical cityscape and Zhangjiajie's floating peaks, privately arranged with two days left open for your own rhythm.",
  duration: "11 Days / 10 Nights",
  route: "Chengdu, Chongqing, Zhangjiajie",
  styles: ["Nature", "Food", "Photography", "Family", "Luxury"],
  hero: {
    eyebrow: "Private nature and city journey",
    image: asset.hero,
    primary: { label: "Explore the 11 Days", href: "#itinerary" },
    secondary: { label: "Plan My Trip", href: "#enquiry" },
  },
  seo: {
    title: "11-Day Chengdu, Chongqing and Zhangjiajie Tour",
    description:
      "Travel from Chengdu to Chongqing and Zhangjiajie in eleven days, with pandas, food culture, private local guides and two independent days. See what is included.",
    keywords: [
      "Chengdu Chongqing Zhangjiajie private tour 11 days",
      "China pandas Chongqing mountain itinerary",
      "Chongqing to Zhangjiajie private tour",
      "Zhangjiajie tour independent free days",
    ],

    preserveCopy: true,
  },
  overview: {
    pitch:
      "Three vivid chapters of southwest China, joined without turning the journey into a race.",
    facts: [
      {
        label: "Hotels",
        value: "Chengdu 3 · Chongqing 3 · Zhangjiajie 4; ten confirmed hotel nights",
      },
      {
        label: "Pacing",
        value: "Balanced guided chapters and 2 independent days; stairs and park walking remain",
      },
      {
        label: "Suitable for",
        value:
          "Travelers who want southwest China’s food, city life and mountain scenery, with room for independent choices rather than continuous escorted touring.",
      },
    ],

    practicalities: [
      {
        label: "Best for",
        value:
          "Travelers who want southwest China’s food, city life and mountain scenery, with room for independent choices rather than continuous escorted touring.",
      },
      {
        label: "Nights and direction",
        value:
          "Chengdu 3 nights, Chongqing 3 and Zhangjiajie 4: 10 nights. Arrive in Chengdu and depart from Zhangjiajie.",
      },
      {
        label: "Intercity travel",
        value:
          "Chengdu–Chongqing high-speed rail and a dated Chongqing–Zhangjiajie rail or flight arrangement, with private station or airport transfers.",
      },
      {
        label: "Guided chapters",
        value:
          "Chengdu Days 2–3, Chongqing Day 5 and Zhangjiajie Days 8–9 have the confirmed local service. Transfer-day assistance is stated separately.",
      },
      {
        label: "Independent days",
        value:
          "Days 6 and 10 include no scheduled private guide, vehicle, admission or activity. Adding services requires availability and a revised quote.",
      },
      {
        label: "Mountain scope",
        value:
          "The listed park visits prioritize Yuanjiajie, Tianzi Mountain and selected Golden Whip Stream walking. Tianmen Mountain and Glass Bridge are not automatically included.",
      },
      {
        label: "Hotels and food",
        value:
          "Ten confirmed hotel nights and specified breakfasts; other meals, tastings and tea are included only when identified in the written proposal.",
      },
      {
        label: "Walking",
        value:
          "Chongqing has stairs, slopes and layered streets; Zhangjiajie uses public transport plus walking and queues. Two free days do not make the route step-free.",
      },
      {
        label: "Starting-price basis",
        value: getPublishedPriceDisclosure("chengdu-chongqing-zhangjiajie-private-11-day-tour"),
      },
    ],

    answer:
      "Explore Chengdu, Chongqing and Zhangjiajie in eleven days with ten hotel nights. Combine public panda viewing and Sichuan food culture with Chongqing’s river city and Wulingyuan’s sandstone peaks. Private local guiding, confirmed intercity transport and transfers cover the listed service days. Days 6 and 10 are independent without included guides, vehicles or paid activities; Tianmen Mountain and other additions require a separate quote.",
  },
  planningSupport: {
    eyebrow: "Why eleven days works",
    title: "The highlights are protected, while two days remain genuinely yours.",
    description:
      "The route gives Chengdu, Chongqing and Zhangjiajie a distinct role. Essential sightseeing is privately managed, but Days 6 and 10 can stay completely open or become paid experiences chosen around weather, energy and interest.",
    items: [
      {
        label: "Core journey",
        value: "Clear and complete",
        helper: "Pandas, Chengdu life, Chongqing by day and night, and two Zhangjiajie park days.",
      },
      {
        label: "Open time",
        value: "No forced schedule",
        helper: "Use two days for rest, independent exploration or a privately arranged option.",
      },
      {
        label: "Local judgement",
        value: "Weather-aware planning",
        helper: "Mountain routes and start times are reviewed against current conditions.",
      },
    ],
    note: "This is a private route framework, not a fixed departure. We can shorten one open day, add another night or reverse the route when flights and train schedules make that more comfortable.",
  },
  highlights: [
    {
      title: "Pandas at the better hour",
      description:
        "Begin early, when conditions are generally better for animal activity, with realistic guidance on crowds and walking inside the base.",
      category: "Family",
      image: asset.pandaMorning,
    },
    {
      title: "Chengdu through tea and flavor",
      description:
        "Move beyond a landmark checklist through a local tea house, neighborhood life and Sichuan food shaped around your preferred level of spice.",
      category: "Food",
      image: asset.chengduFood,
    },
    {
      title: "Chongqing after the lights come on",
      description:
        "Understand the city's layered geography by day, then see its bridges, riverbanks and vertical architecture change at blue hour.",
      category: "Photography",
      image: asset.chongqingBlueHour,
    },
    {
      title: "Zhangjiajie beyond one viewpoint",
      description:
        "Give the national park two core days, separating cliff-top panoramas from the forest and stream below so the landscape has room to register.",
      category: "Nature",
      image: asset.yuanjiajie,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Chengdu",
      destination: "Chengdu",
      summary:
        "Meet your driver for a private airport or station transfer, settle into the hotel and keep the first evening light.",
      image: asset.chengduArrival,
      hotel: "Chengdu stay: hotel and room category confirmed in your private proposal",
      meals: ["No meals included today"],
      transport: "Private arrival transfer",
      activities: [
        {
          title: "A clear arrival",
          description:
            "Your meeting point, vehicle, luggage space and hotel transfer are confirmed before departure.",
        },
        {
          title: "A soft first evening",
          description:
            "Rest after the journey or take a short neighborhood walk when arrival time and energy allow.",
        },
      ],
      guideNote:
        "We plan Day 1 around your international or domestic arrival rather than forcing sightseeing into a limited window.",
      coordinates: { latitude: 30.5728, longitude: 104.0668 },
    },
    {
      day: 2,
      title: "Giant pandas in the morning",
      destination: "Chengdu",
      summary:
        "Visit a suitable panda base early, then slow the afternoon through one quieter side of Chengdu.",
      image: asset.pandaMorning,
      hotel: "Chengdu stay: confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "Private vehicle and multilingual guide",
      activities: [
        {
          time: "Early morning",
          title: "A better-timed panda visit",
          description:
            "Choose the panda facility and entry time around your date, seasonal conditions and the animals' usual morning rhythm.",
        },
        {
          time: "Afternoon",
          title: "A quieter Chengdu chapter",
          description:
            "Continue to a park, neighborhood or tea house according to energy rather than filling every hour.",
        },
      ],
      guideNote:
        "Animal activity cannot be guaranteed. We give honest advice on walking, heat and crowds before the visit.",
      coordinates: { latitude: 30.7385, longitude: 104.1425 },
    },
    {
      day: 3,
      title: "Chengdu at table and street level",
      destination: "Chengdu",
      summary:
        "Discover Chengdu's everyday rhythm through covered-bowl tea, local streets and a privately guided introduction to Sichuan flavor.",
      image: asset.chengduLife,
      hotel: "Chengdu stay: confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "Private vehicle and guided walking as confirmed",
      activities: [
        {
          time: "Morning",
          title: "Tea-house Chengdu",
          description:
            "Spend time where local routines are visible, with context from your guide and no need to rush the experience.",
        },
        {
          time: "Afternoon or evening",
          title: "Sichuan flavor, adjusted for you",
          description:
            "Explore regional dishes through a market, tasting walk or considered meal selected around spice tolerance and dietary needs.",
        },
      ],
      guideNote:
        "Tell us about allergies, vegetarian preferences or halal requirements before quotation so research can be specific.",
      coordinates: { latitude: 30.657, longitude: 104.066 },
    },
    {
      day: 4,
      title: "High-speed rail to Chongqing",
      destination: "Chengdu to Chongqing",
      summary:
        "Travel to Chongqing by the confirmed high-speed train, with private station transfers at both ends. After hotel check-in, rest or take an independent neighborhood walk; a guided arrival outing requires separately confirmed staff and service hours.",
      image: asset.rail,
      hotel: "Chongqing stay: hotel and room category confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "Private station transfers and high-speed rail",
      activities: [
        {
          title: "One managed transition",
          description:
            "Train, station names, seat class and both private transfers are selected together for your dates.",
        },
        {
          title: "First orientation in the mountain city",
          description:
            "After check-in, rest or use the local team's suggestions for a short independent walk near your hotel. A guide-led city introduction is not included on the transfer day unless added to the proposal.",
        },
      ],
      guideNote:
        "The final train and seat class are confirmed in writing; schedules can change by travel date.",
      coordinates: { latitude: 29.563, longitude: 106.5516 },
    },
    {
      day: 5,
      title: "Chongqing from daylight to blue hour",
      destination: "Chongqing",
      summary:
        "Read the city vertically through its streets, viewpoints and transit, then stay out as the riverfront lights appear.",
      image: asset.chongqingBlueHour,
      hotel: "Chongqing stay: confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "Private vehicle, guided walking and local transit where useful",
      activities: [
        {
          time: "Late morning",
          title: "The logic of a vertical city",
          description:
            "Use a carefully connected route through elevated streets, surprising ground levels and the city's distinctive transport.",
        },
        {
          time: "Blue hour and evening",
          title: "River light and city scale",
          description:
            "See the skyline from a suitable riverbank or viewpoint within the agreed guide and vehicle window. A river cruise, evening extension or extra transfer is separately selected and priced; the daytime booking is not unlimited evening service.",
        },
      ],
      guideNote:
        "Chongqing involves slopes, stairs and traffic. We adapt the walking route and vehicle access to your group.",
      coordinates: { latitude: 29.5628, longitude: 106.577 },
    },
    {
      day: 6,
      title: "Your Chongqing Day",
      destination: "Chongqing",
      summary:
        "Keep the day entirely open or add one paid private experience after you understand what genuinely interests you.",
      image: asset.chongqingOpenDay,
      hotel: "Chongqing stay: confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "None on an open day; private service available by request",
      activities: [
        {
          title: "Option 1: leave it open",
          description:
            "Sleep later, revisit a neighborhood, enjoy the hotel or explore independently without paying for unwanted touring.",
        },
        {
          title: "Option 2: add a private experience",
          description:
            "Consider Dazu Rock Carvings, a food-led day, a photography session or a quieter local route, quoted separately.",
        },
      ],
      guideNote:
        "The open day is intentional. Nothing is automatically added or charged; selected services appear clearly in your proposal.",
      coordinates: { latitude: 29.563, longitude: 106.5516 },
    },
    {
      day: 7,
      title: "Travel to Zhangjiajie",
      destination: "Chongqing to Zhangjiajie",
      summary:
        "Continue to Zhangjiajie using the most practical confirmed connection, with private transfers at both ends and a quiet evening near the park.",
      image: asset.zhangjiajieArrival,
      hotel: "Zhangjiajie stay: hotel and room category confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "Rail or flight and private transfers, selected for your date",
      activities: [
        {
          title: "A date-specific connection",
          description:
            "We compare the operating rail and flight schedules rather than promising a generic transfer that may not suit your date.",
        },
        {
          title: "Settle near the right park entrance",
          description:
            "Hotel location is chosen around the following days' route, comfort and evening preferences.",
        },
      ],
      guideNote:
        "Transport schedules determine the final shape of Day 7 and are confirmed before booking.",
      coordinates: { latitude: 29.1171, longitude: 110.4792 },
    },
    {
      day: 8,
      title: "Yuanjiajie and Tianzi Mountain",
      destination: "Zhangjiajie",
      summary:
        "Reach Zhangjiajie's elevated viewpoints for its defining sandstone pillars, using park transport and walking sections chosen for your group.",
      image: asset.yuanjiajie,
      hotel: "Zhangjiajie stay: confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "Private hotel transfer, park shuttle and scenic lift or cableway as confirmed",
      activities: [
        {
          time: "Morning",
          title: "Yuanjiajie's cliff-top landscape",
          description:
            "Use the more suitable access route and focus on a coherent set of viewpoints rather than racing across the whole park.",
        },
        {
          time: "Afternoon",
          title: "Tianzi Mountain",
          description:
            "Continue across layered sandstone formations, adapting the sequence to visibility, queues and walking comfort.",
        },
      ],
      guideNote:
        "Cloud and mist are part of the landscape but affect visibility. Your guide may reverse sections when conditions favor it.",
      coordinates: { latitude: 29.338, longitude: 110.446 },
    },
    {
      day: 9,
      title: "Golden Whip Stream and the lower forest",
      destination: "Zhangjiajie",
      summary:
        "Experience the park from below, following clear water and forest beneath the pillars for a calmer contrast with the previous day.",
      image: asset.goldenWhip,
      hotel: "Zhangjiajie stay: confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "Private hotel transfer and park shuttle as confirmed",
      activities: [
        {
          time: "Morning",
          title: "Golden Whip Stream",
          description:
            "Walk a suitable portion of the shaded valley trail, with distance and turnaround point matched to weather and energy.",
        },
        {
          time: "Afternoon",
          title: "A second forest perspective",
          description:
            "Continue toward Huangshizhai, Ten-mile Gallery or an earlier finish according to the day's conditions.",
        },
      ],
      guideNote:
        "The full stream route is not compulsory. We agree a realistic walking plan before entering the park.",
      coordinates: { latitude: 29.316, longitude: 110.425 },
    },
    {
      day: 10,
      title: "Your Zhangjiajie Day",
      destination: "Zhangjiajie",
      summary:
        "Protect a final day for rest, weather flexibility or one paid experience that adds something meaningfully different.",
      image: asset.zhangjiajieOpenDay,
      hotel: "Zhangjiajie stay: confirmed in your private proposal",
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "None on an open day; private service available by request",
      activities: [
        {
          title: "Option 1: keep the day yours",
          description:
            "Rest after two park days, enjoy the hotel or use the time independently without another compulsory excursion.",
        },
        {
          title: "Option 2: choose one distinct experience",
          description:
            "Consider Tianmen Mountain, Zhangjiajie Grand Canyon, a photography-led revisit or another route suited to the forecast.",
        },
      ],
      guideNote:
        "Day 10 has no standby guide, vehicle or reserved replacement tickets. Moving a weather-affected park visit here requires new availability and any additional charges to be agreed. Tianmen Mountain and the Grand Canyon are separately priced options; choose one if it fits the confirmed service window.",
      coordinates: { latitude: 29.1171, longitude: 110.4792 },
    },
    {
      day: 11,
      title: "Depart Zhangjiajie",
      destination: "Zhangjiajie",
      summary:
        "Meet your driver for a private airport or station transfer, timed around your confirmed onward journey.",
      image: asset.departure,
      meals: ["Hotel breakfast; other meals independent unless expressly included"],
      transport: "Private departure transfer",
      activities: [
        {
          title: "A planned departure",
          description:
            "Pickup time, terminal or station, luggage and onward details are checked before the final day.",
        },
        {
          title: "Continue or return home",
          description:
            "We can coordinate a domestic connection or extend the journey when your international flights require it.",
        },
      ],
      guideNote:
        "Do not book a tight independent connection before we review the operating schedule and transfer time.",
      coordinates: { latitude: 29.1028, longitude: 110.4436 },
    },
  ],
  accommodations: [
    {
      name: "Chengdu: central, calm and well connected",
      destination: "Chengdu",
      description:
        "A design-led city stay selected around room comfort, breakfast, neighborhood access and your preferred level of service.",
      roomStyle: "Comfortable, luxury or bespoke tier",
      highlights: ["Central location", "Quiet room requested", "Breakfast and room type confirmed"],
      image: asset.chengduHotel,
    },
    {
      name: "Chongqing: a view with practical access",
      destination: "Chongqing",
      description:
        "An elevated city stay chosen for both its outlook and the everyday reality of vehicle access, lifts and surrounding slopes.",
      roomStyle: "River-view preference available by request",
      highlights: ["Useful location", "View category confirmed", "Access reviewed for your group"],
      image: asset.chongqingHotel,
    },
    {
      name: "Zhangjiajie: close to the right landscape",
      destination: "Zhangjiajie",
      description:
        "A mountain-area stay selected around the planned park entrance, room quality, seasonal conditions and transfer time.",
      roomStyle: "Park-side comfort or higher-end retreat",
      highlights: [
        "Route-led location",
        "Mountain atmosphere",
        "Exact property confirmed in writing",
      ],
      image: asset.zhangjiajieHotel,
    },
  ],
  included: [
    "Ten hotel nights: Chengdu 3, Chongqing 3 and Zhangjiajie 4, with properties and rooms specified in the proposal",
    "Hotel breakfasts on Days 2–11",
    "Private arrival and departure transfers and the listed intercity station or airport transfers",
    "Local private guide and separate driver on scheduled sightseeing Days 2–3, 5 and 8–9; no standby service on independent Days 6 and 10",
    "Chengdu–Chongqing high-speed rail and the confirmed Chongqing–Zhangjiajie rail or flight sector, with class and baggage terms stated",
    "Standard admission and public scenic transport required by the listed confirmed visits",
    "China-based travel support and no compulsory shopping stops",
  ],
  excluded: [
    "International flights and services not named in the final proposal",
    "Open-day transport, guiding and admissions unless selected",
    "Paid optional experiences on Days 6 and 10 unless selected",
    "Meals, drinks and gratuities not specifically included in writing",
    "Travel insurance, visas and personal expenses",
    "Costs arising from weather, closures or traveler-requested changes after confirmation",
  ],
  optionalExperiences: [
    {
      title: "Dazu Rock Carvings private day",
      description:
        "Travel beyond central Chongqing for a guided encounter with one of southwest China's most important Buddhist sculptural sites.",
      badges: ["Day 6", "Full day", "Quoted separately"],
      image: asset.dazu,
    },
    {
      title: "A slower Chongqing day",
      description:
        "Build a private half or full day around food, photography, a quiet viewpoint, a cliffside cafe or a styled portrait experience.",
      badges: ["Day 6", "Flexible length", "Tailored"],
      image: optionalImages[1] ?? asset.chongqingOpenDay,
    },
    {
      title: "Tianmen Mountain",
      description:
        "Add the long cableway, high mountain paths and Tianmen Cave when weather, queues and walking expectations suit your group.",
      badges: ["Day 10", "Full day", "Weather dependent"],
      image: asset.zhangjiajieOpenDay,
    },
    {
      title: "Zhangjiajie Grand Canyon",
      description:
        "Choose the Grand Canyon and glass bridge as a separate experience, with honest guidance for heights, queues and physical comfort.",
      badges: ["Day 10", "Half or full day", "Quoted separately"],
      image: asset.glassBridge,
    },
  ],
  transportation: {
    title: "Three regions, connected as one privately managed journey.",
    description:
      "We select transport after checking your dates, luggage and operating schedules. Station and airport transitions are treated as part of the service, not left for you to solve independently.",
    items: [
      {
        label: "Chengdu to Chongqing",
        value: "High-speed rail",
        helper: "Train, seat class and private transfers at both ends confirmed in writing.",
      },
      {
        label: "Chongqing to Zhangjiajie",
        value: "Best date-specific connection",
        helper: "Rail or flight selected around operating schedule and total door-to-door time.",
      },
      {
        label: "Guided days",
        value: "Private vehicle",
        helper: "Vehicle size selected for travelers, luggage, route and mobility needs.",
      },
      {
        label: "Open days",
        value: "No automatic service",
        helper: "Private guiding and transport are added only when you choose an option.",
      },
    ],
  },
  routeMap: {
    title: "From Sichuan life to a vertical city and extraordinary mountains.",
    description:
      "The route moves east from Chengdu to Chongqing, then into Zhangjiajie's protected sandstone landscape, with two open days built into the eleven-day framework.",
    stops: [
      {
        name: "Chengdu",
        days: "Days 1-4",
        description: "Arrival, giant pandas, tea-house life and Sichuan food.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        name: "Chongqing",
        days: "Days 4-7",
        description: "Vertical urban geography, river light and one day entirely your own.",
        coordinates: { latitude: 29.563, longitude: 106.5516 },
      },
      {
        name: "Zhangjiajie",
        days: "Days 7-11",
        description: "Two core park days plus one open day for rest or a selected experience.",
        coordinates: { latitude: 29.1171, longitude: 110.4792 },
      },
    ],
  },
  gallery: chengduChongqingZhangjiajieGallery,
  faqs: [
    {
      question: "What does this private tour cost, and what is the starting-price basis?",
      answer: getPublishedPriceDisclosure("chengdu-chongqing-zhangjiajie-private-11-day-tour"),
    },
    {
      question: "What is included on the two open days?",
      answer:
        "Days 6 in Chongqing and 10 in Zhangjiajie are independent time. Your confirmed hotel and breakfast arrangements continue, but no private guide, vehicle, admission or paid activity is included by default. Support contacts remain as agreed. Ask for a separately priced service if you want one; an open day is not a driver waiting on standby.",
    },
    {
      question: "Does this tour include Tianmen Mountain?",
      answer:
        "No, not in the standard listed mountain chapter. The included design focuses on Wulingyuan’s pillar scenery and lower forest. Tianmen may be considered for Day 10 with separate tickets, transfers, guide hours and an availability review. It is a different attraction from the national forest park.",
    },
    {
      question: "Are hotel nights and intercity transport included?",
      answer:
        "The priced package identifies ten hotel nights and the domestic sectors in writing, with rooms, breakfast, train or flight class and transfer points. The complete itinerary should not rely on a generic transport promise. International flights and any unselected sector or upgrade remain separate.",
    },
    {
      question: "How do we travel from Chongqing to Zhangjiajie?",
      answer:
        "The connection is selected for your actual date and named in the proposal, together with the local transfers and remaining road time. Do not assume a published duration or direct service exists on every departure. The final plan considers total hotel-to-hotel time, luggage and arrival-hour practicality.",
    },
    {
      question: "Which panda experience is included in Chengdu?",
      answer:
        "A standard public viewing visit at the facility confirmed in your proposal, supported by private local guiding and road transport. It does not include holding, feeding, keeper work or guaranteed cub sightings. If a particular base matters, request it before confirmation so the route and costs can be checked.",
    },
    {
      question: "Are hotpot, tea and Sichuan meals included?",
      answer:
        "Only the food and drinks expressly identified in the proposal are included. A culinary walk introduces ingredients and local life but does not automatically include every tasting or a full meal. Tell us spice, dietary and allergy needs; a restaurant suggestion is not the same as a contracted kitchen service.",
    },
    {
      question: "Is Chongqing manageable for travelers with knee or balance problems?",
      answer:
        "It needs careful review. Elevation changes, steps, crossings and busy transit can matter even with a private vehicle. Share actual limitations so viewpoints, pickup points and walking sections can be chosen. The itinerary cannot promise an entirely flat city route or public lifts operating everywhere you need them.",
    },
    {
      question: "Can Day 10 be used to move a weather-affected park visit?",
      answer:
        "It provides possible time flexibility, not guaranteed spare staff or transferable tickets. A change depends on supplier availability, reservations, guide and vehicle hours and applicable fees. Any revised services should be agreed; keeping a day free does not automatically include an extra guided outing.",
    },
    {
      question: "Does the trip return to Chengdu or Shanghai?",
      answer:
        "No. The standard journey finishes in Zhangjiajie on Day 11 with the confirmed departure transfer. Onward flights, trains, extra nights and a different final gateway need a separate plan. Share your full international route before purchasing tickets so the last connection is realistic.",
    },
    {
      question: "How does this compare with Shanghai and Zhangjiajie in eight days?",
      answer:
        "This route adds pandas, Sichuan culture and Chongqing, uses two open days and finishes in the mountain region. The eight-day route is a Shanghai return journey and includes a dedicated Tianmen plan. Choose according to gateways and interests; shared Zhangjiajie scenery does not mean identical tickets or service coverage.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "7-Day Chengdu and Jiuzhaigou Private Tour",
        description:
          "Choose a shorter Chengdu-and-lakes route with six hotel nights; the mountain landscape and departure gateway differ.",
        tags: ["Nature", "Family", "Food"],
        image: {
          src: "/tours/chengdu-pandas-jiuzhaigou/hero.webp",
          alt: "Autumn forest and a turquoise lake in Jiuzhaigou National Park",
          width: 1600,
          height: 1067,
        },
        route: "Chengdu · Jiuzhaigou",
        duration: "7 days / 6 nights",
        href: "/tours/chengdu-pandas-jiuzhaigou-private-7-day-tour",
      },
      {
        title: "8-Day Shanghai and Zhangjiajie Private Tour",
        description:
          "Choose Shanghai and a shorter sandstone-mountain route that includes Tianmen and returns to Shanghai.",
        tags: ["Nature", "Luxury", "Family"],
        image: {
          src: "/tours/shanghai-zhangjiajie-floating-peaks/zhangjiajie-sunny-peaks.webp",
          alt: "Sunlit sandstone peaks and forested valleys in Zhangjiajie",
          width: 1600,
          height: 800,
        },
        route: "Shanghai · Wulingyuan · Zhangjiajie",
        duration: "8 days / 7 nights",
        href: "/tours/shanghai-zhangjiajie-floating-peaks",
      },
    ],

    destinations: [
      {
        name: "Chengdu",
        description: "Giant pandas, tea-house culture and Sichuan flavor.",
        image: {
          src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chengdu-12.webp",
          alt: "A young giant panda enjoying bamboo in Chengdu",
          width: 1600,
          height: 1067,
        },
        href: "/destinations/chengdu",
      },
      {
        name: "Chongqing",
        description: "A river metropolis shaped by hills, bridges and unexpected levels.",
        image: {
          src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/chongqing-07.webp",
          alt: "Raffles City rising above Chaotianmen in Chongqing",
          width: 1600,
          height: 1067,
        },
        href: "/destinations/chongqing",
      },
      {
        name: "Zhangjiajie",
        description: "Sandstone pillar forests, mountain mist and layered park trails.",
        image: {
          src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/zhangjiajie-15.webp",
          alt: "Zhangjiajie's quartz-sandstone pillars emerging from morning mist",
          width: 1600,
          height: 1067,
        },
        href: "/destinations/zhangjiajie",
      },
    ],
  },
  inquiry: {
    emailHref: `mailto:chinaprimedmc@gmail.com?subject=${encodeURIComponent(
      "11-Day Chengdu Chongqing Zhangjiajie Private Tour",
    )}&body=${encodeURIComponent(`${inquiryMessage}\n\nTravelers:\nDates:\nHotel preference:\nDietary or mobility needs:\nQuestions:\n`)}`,
    whatsappHref: `https://wa.me/8618027438191?text=${encodeURIComponent(inquiryMessage)}`,
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage: inquiryMessage,
  },

  planningResources: [
    {
      label: "Chengdu Panda Base: official visitor notices",
      href: "https://www.panda.org.cn/en/service/notice",
      officialPublisher: "Chengdu Research Base of Giant Panda Breeding",
      description:
        "Check public visitor notices for the Chengdu Research Base. This is not evidence of access at another panda center or permission to touch animals.",
    },
    {
      label: "China Railway 12306: passenger information",
      href: "https://www.12306.cn/en/faq.html",
      officialPublisher: "China Railway 12306",
      description:
        "Check accepted identification, ticketing, boarding and baggage guidance. The train, class, seat and transfer arrangements are confirmed for your dates.",
    },
    {
      label: "UNESCO: Wulingyuan Scenic and Historic Interest Area",
      href: "https://whc.unesco.org/en/list/640/",
      officialPublisher: "UNESCO World Heritage Centre",
      description:
        "Understand the sandstone landscape and protected property. This is not the operating authority for Tianmen Mountain, the Glass Bridge, park lifts or ticket availability.",
    },
    {
      label: "Chengdu, Chongqing and Zhangjiajie planning",
      href: "/journal/chengdu-chongqing-zhangjiajie-itinerary",
      description:
        "Review the city and mountain sequence, intercity travel and independent-day trade-offs.",
    },
  ],

  faqLimit: 13,

  updatedAt: "2026-11-12",

  inquiryChecklist: [
    "Dates and arrival / departure gateways",
    "Travelers, rooms and hotel preference",
    "Plans for independent Days 6 and 10",
    "Walking comfort, heights and luggage",
    "Dietary needs and optional Tianmen interest",
  ],

  comparison: {
    title: "Three southwest chapters or a shorter panda-and-lakes trip?",
    intro:
      "The eleven-day route adds Chongqing and independent days; the seven-day option explores a different mountain region.",
    columns: ["Decision", "This eleven-day route", "Seven-day Chengdu–Jiuzhaigou route"],
    rows: [
      ["Scenery", "Zhangjiajie sandstone pillars", "Jiuzhaigou lakes and waterfalls"],
      ["Cities", "Chengdu and Chongqing", "Chengdu"],
      [
        "Independent days",
        "Days 6 and 10 have no scheduled guide or vehicle",
        "Day 6 mountain option is agreed in the proposal",
      ],
    ],
    href: "/tours/chengdu-pandas-jiuzhaigou-private-7-day-tour",
    linkLabel: "Compare the alternative itinerary",
  },
};

export const chengduChongqingZhangjiajieSlug = slug;
