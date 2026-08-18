import {
  chengduChongqingZhangjiajieAsset as asset,
  chengduChongqingZhangjiajieGallery,
  chengduImages,
  chongqingImages,
  optionalImages,
  zhangjiajieImages,
} from "@/content/tours/chengdu-chongqing-zhangjiajie-assets";
import type { Tour } from "@/types/tour";

const slug = "chengdu-chongqing-zhangjiajie-private-11-day-tour";
const inquiryMessage =
  "Hello AVIORA, I would like a tailored proposal for the 11-day Chengdu, Chongqing and Zhangjiajie private journey. Please advise on dates, hotels, pacing and the best choices for the two open days.";

export const chengduChongqingZhangjiajieTour: Tour = {
  slug,
  title: "11-Day Chengdu, Chongqing & Zhangjiajie",
  subtitle:
    "Giant pandas, Sichuan flavors, Chongqing's vertical cityscape and Zhangjiajie's floating peaks, privately arranged with two days left open for your own rhythm.",
  duration: "11 Days / 10 Nights",
  route: "Chengdu, Chongqing, Zhangjiajie",
  styles: ["Nature", "Food", "Photography", "Family", "Luxury"],
  hero: {
    eyebrow: "Private nature and city journey",
    image: asset.hero,
    primary: { label: "Explore the 11 Days", href: "#itinerary" },
    secondary: { label: "Request a Private Proposal", href: "#proposal" },
  },
  seo: {
    title: "11-Day Chengdu Chongqing Zhangjiajie Private Tour",
    description:
      "Explore Chengdu, Chongqing and Zhangjiajie on an 11-day private China tour with pandas, Sichuan food, flexible open days and expert local support.",
    keywords: [
      "Chengdu Chongqing Zhangjiajie private tour",
      "11 day Chengdu Chongqing Zhangjiajie itinerary",
      "private China panda and Zhangjiajie tour",
      "Chongqing Zhangjiajie luxury tour",
      "Chengdu pandas Chongqing Zhangjiajie tour",
      "private Zhangjiajie tour for families",
      "China nature and food itinerary",
    ],
  },
  overview: {
    pitch:
      "Three vivid chapters of southwest China, joined without turning the journey into a race.",
    facts: [
      {
        label: "Duration",
        value: "11 days / 10 nights",
        helper:
          "Three nights Chengdu, three Chongqing and four Zhangjiajie, adjusted to transport.",
      },
      {
        label: "Route",
        value: "3 contrasting places",
        helper: "Pandas and food, a vertical river city, then sandstone mountains.",
      },
      {
        label: "Travel Style",
        value: "Private and tailor-made",
        helper: "Private local guiding, transfers and a proposal built for your party.",
      },
      {
        label: "Pacing",
        value: "Balanced with 2 open days",
        helper: "Keep them free or add experiences only when they suit you.",
      },
      {
        label: "Best For",
        value: "Couples, families and photographers",
        helper: "Especially travelers drawn to wildlife, food and remarkable landscapes.",
      },
      {
        label: "Proposal",
        value: "Prepared for your dates",
        helper: "Hotels, transport and optional experiences are confirmed in writing.",
      },
    ],
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
      meals: ["As confirmed in your written proposal"],
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
      meals: ["Breakfast when included with the confirmed hotel", "Other meals as confirmed"],
      transport: "Private vehicle and English-speaking guide",
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
      meals: ["Breakfast when included", "Tastings or meals only as confirmed"],
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
        "Travel between the two cities with private station transfers, coordinated luggage handling and a gentle first look at Chongqing.",
      image: asset.rail,
      hotel: "Chongqing stay: hotel and room category confirmed in your private proposal",
      meals: ["Breakfast when included", "Other meals as confirmed"],
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
            "After check-in, take a short introduction to Chongqing's levels and river geography when timing allows.",
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
      meals: ["Breakfast when included", "Other meals as confirmed"],
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
            "See the skyline from a suitable riverbank or viewpoint, with a cruise added only when it improves the evening.",
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
      meals: ["Breakfast when included", "Other meals independently or as confirmed"],
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
      meals: ["Breakfast when included", "Meals during travel as confirmed"],
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
      meals: ["Breakfast when included", "Other meals as confirmed"],
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
      meals: ["Breakfast when included", "Other meals as confirmed"],
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
      meals: ["Breakfast when included", "Other meals independently or as confirmed"],
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
        "Tianmen Mountain and the Grand Canyon are separate paid experiences. We recommend only one for a comfortable day.",
      coordinates: { latitude: 29.1171, longitude: 110.4792 },
    },
    {
      day: 11,
      title: "Depart Zhangjiajie",
      destination: "Zhangjiajie",
      summary:
        "Meet your driver for a private airport or station transfer, timed around your confirmed onward journey.",
      image: asset.departure,
      meals: ["Breakfast when included with the confirmed hotel"],
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
    "Private arrival and departure transfers listed in the final proposal",
    "Private sightseeing vehicle and English-speaking guide on confirmed guided days",
    "Accommodation and daily hotel breakfast when stated in the final proposal",
    "Intercity rail or domestic flight services specifically listed in writing",
    "Entrance tickets and mandatory scenic transport specifically listed in writing",
    "Twenty-four-hour local contact support while traveling",
    "No compulsory shopping stops",
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
      question: "Is eleven days enough for Chengdu, Chongqing and Zhangjiajie?",
      answer:
        "Yes, when the route is privately managed. It includes three substantive Chengdu days, a full Chongqing city day, two core Zhangjiajie park days and two deliberately open days. We can add nights when you prefer even more rest or need a particular flight connection.",
    },
    {
      question: "Are Days 6 and 10 really free to use as we wish?",
      answer:
        "Yes. They can remain completely open with no touring service, or become paid private experiences selected in advance. Your proposal separates the core journey, open days and optional additions clearly.",
    },
    {
      question: "Is this a fixed group tour?",
      answer:
        "No. It is a private route framework. Dates, hotels, room types, guide service, transport and daily pacing are tailored to your party and confirmed in writing.",
    },
    {
      question: "How is the final price calculated?",
      answer:
        "The displayed starting price is an indicative per-person planning figure based on four guests sharing two rooms outside peak periods. Your written proposal recalculates the final price around travel dates, party size, room configuration, hotel preference, transport and selected open-day experiences.",
    },
    {
      question: "How physically demanding is Zhangjiajie?",
      answer:
        "The parks involve walking, stairs, slopes, scenic lifts and sometimes queues. Private planning lets us choose suitable sections and rest windows, but it cannot remove every physical demand. We discuss mobility and comfort honestly before confirmation.",
    },
    {
      question: "What happens if mountain weather affects visibility?",
      answer:
        "Local guides can adjust the order of viewpoints where tickets and operating rules allow. The open day also gives the route useful flexibility, although clear views can never be guaranteed in a mountain environment.",
    },
    {
      question: "Can this journey work for children or older parents?",
      answer:
        "Yes for many private groups, provided we understand ages, mobility and room needs early. We can shorten walking sections, use suitable scenic transport and protect rest time, while explaining unavoidable stairs or long park days clearly.",
    },
    {
      question: "Can you support halal, vegetarian or allergy requirements?",
      answer:
        "Yes, when requirements are shared before quotation. We research practical meal options in each location, but certification and availability vary and must be checked for your actual dates.",
    },
    {
      question: "Are the hotels shown guaranteed?",
      answer:
        "No. Images communicate the intended room and location style. Your proposal names the actual available properties, room categories, breakfast terms and cancellation conditions before you confirm.",
    },
    {
      question: "Are there compulsory shopping stops?",
      answer:
        "No. This journey has no compulsory shopping stops. Markets, shopping districts or portrait experiences are included only when they genuinely interest you.",
    },
  ],
  related: {
    tours: [
      {
        title: "7-Day Chengdu Panda & Jiuzhaigou Private Journey",
        description:
          "A shorter, alpine alternative combining Chengdu's pandas and food with Jiuzhaigou's lakes.",
        tags: ["7 days", "Pandas and nature"],
        image: chengduImages[12] ?? asset.pandaMorning,
        route: "Chengdu, Jiuzhaigou",
        duration: "7 days / 6 nights",
        href: "/tours/chengdu-pandas-jiuzhaigou-private-7-day-tour",
      },
      {
        title: "8-Day Shanghai & Zhangjiajie Private Journey",
        description:
          "Pair Shanghai's waterfront energy with Zhangjiajie's sandstone peaks in a shorter two-region route.",
        tags: ["8 days", "City and nature"],
        image: zhangjiajieImages[14] ?? asset.yuanjiajie,
        route: "Shanghai, Zhangjiajie",
        duration: "8 days / 7 nights",
        href: "/tours/shanghai-zhangjiajie-floating-peaks",
      },
    ],
    destinations: [
      {
        name: "Chengdu",
        description: "Giant pandas, tea-house culture and Sichuan flavor.",
        image: chengduImages[11] ?? asset.pandaMorning,
        href: "/destinations/chengdu",
      },
      {
        name: "Chongqing",
        description: "A river metropolis shaped by hills, bridges and unexpected levels.",
        image: chongqingImages[6] ?? asset.chongqingBlueHour,
        href: "/destinations/chongqing",
      },
      {
        name: "Zhangjiajie",
        description: "Sandstone pillar forests, mountain mist and layered park trails.",
        image: zhangjiajieImages[14] ?? asset.yuanjiajie,
        href: "/destinations/zhangjiajie",
      },
    ],
  },
  inquiry: {
    emailHref: `mailto:chinaprimedmc@gmail.com?subject=${encodeURIComponent(
      "11-Day Chengdu Chongqing Zhangjiajie Private Tour",
    )}&body=${encodeURIComponent(`${inquiryMessage}\n\nTravelers:\nDates:\nHotel preference:\nDietary or mobility needs:\nQuestions:\n`)}`,
    whatsappHref: `https://wa.me/447985052302?text=${encodeURIComponent(inquiryMessage)}`,
    scheduleCallHref: "tel:+447985052302",
    defaultMessage: inquiryMessage,
  },
};

export const chengduChongqingZhangjiajieSlug = slug;
