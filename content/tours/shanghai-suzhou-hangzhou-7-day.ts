import { jiangnanImages } from "@/content/tours/jiangnan-images";
import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
import type { Tour } from "@/types/tour";

export const shanghaiSuzhouHangzhou7DayTour: Tour = {
  slug: "shanghai-suzhou-hangzhou-private-7-day-tour",
  visualStatus: "ready",
  updatedAt: "2026-11-12",
  title: "7-Day Shanghai, Suzhou & Hangzhou Private Tour",
  subtitle:
    "From Shanghai neighborhoods to Suzhou garden design and Hangzhou tea country, with three Shanghai nights, one Suzhou night and two Hangzhou nights. Private local guiding and road transfers connect with two shared high-speed train journeys; the route ends in Hangzhou.",
  duration: "7 Days / 6 Nights",
  durationIso: "P7D",
  route: "Shanghai · Zhujiajiao day trip · Suzhou · Hangzhou",
  styles: ["Culture", "Nature", "Food", "Photography"],
  hero: {
    eyebrow: "Private Jiangnan journey · gardens, a water town and tea · Shanghai in, Hangzhou out",
    image: jiangnanImages.hero,
    primary: {
      label: "Plan My Jiangnan Journey",
      href: "#enquiry",
    },
    secondary: {
      label: "Explore the Seven Days",
      href: "#itinerary",
    },
  },
  seo: {
    title: "7-Day Shanghai, Suzhou & Hangzhou Private Tour",
    description:
      "Explore Shanghai, Suzhou and Hangzhou in seven days with private guides, a Zhujiajiao visit, gardens and tea. Six nights, two rail journeys, Hangzhou finish.",
    preserveCopy: true,
    keywords: [
      "Shanghai Suzhou Hangzhou private tour 7 days",
      "Shanghai Suzhou Hangzhou itinerary 7 days",
      "China gardens and tea private tour",
      "Shanghai to Hangzhou private itinerary",
      "Suzhou overnight private tour",
      "Zhujiajiao water town private tour from Shanghai",
      "Hangzhou Longjing tea tasting private tour",
    ],
  },
  overview: {
    pitch:
      "Discover Jiangnan through the ways people have shaped it: Shanghai's streets and waterfront, canals crossed by stone bridges, a Suzhou garden composed around changing views, and tea hills beyond West Lake. Give each setting a distinct place in the week, with one water town and one principal Suzhou garden rather than a list of similar stops. Local guides connect the details while private transfers simplify the handovers.",
    answer:
      "This seven-day Shanghai, Suzhou and Hangzhou private tour includes six hotel nights, Zhujiajiao water town, a Suzhou garden and a Hangzhou tea tasting. Stay three nights in Shanghai, one in Suzhou and two in Hangzhou, with two hotel changes. Private local guiding and road transfers connect two shared high-speed train journeys. The route ends in Hangzhou; hotels, tickets and price are confirmed in writing.",
    practicalities: [
      {
        label: "Route and nights",
        value:
          "Seven days / six nights: Shanghai nights 1–3, Suzhou night 4, Hangzhou nights 5–6. Two hotel changes. Zhujiajiao is a day trip from Shanghai, not another overnight base.",
      },
      {
        label: "Private and shared services",
        value:
          "Private local English-speaking guides and separate drivers with private road vehicles during the agreed programme. The two intercity trains and public attraction facilities are shared. A guide does not accompany the trains in the base version.",
      },
      {
        label: "Rail and luggage",
        value:
          "Proposed second-class tickets from Shanghai to Suzhou on Day 4 and Suzhou to Hangzhou on Day 5. Carry your own bags through stations and onto trains; no porter or separate road luggage delivery is included. Exact stations, seats, train times and identity requirements are confirmed before booking.",
      },
      {
        label: "Walking and access",
        value:
          "Expect garden paths, thresholds, uneven old-town paving and bridge steps, plus station walking. Share wheelchair, stroller, stair and lifting needs before we select routes and hotels. Private transfers do not make the whole itinerary step-free.",
      },
      {
        label: "Gardens and water town",
        value:
          "Yu Garden in Shanghai, one selected Zhujiajiao admission package and the Humble Administrator's Garden in Suzhou form the proposed paid-visit basis. Additional gardens, Suzhou Museum and boat rides are not default inclusions. Reservations and substitutions are confirmed for your dates.",
      },
      {
        label: "Tea experience",
        value:
          "One hosted Longjing-area tea introduction and tasting on Day 6, with venue, duration and teas served named in the proposal. No compulsory purchase. Picking, specialist teaching, premium tea grades and private plantation access are not implied.",
      },
      {
        label: "Meals",
        value:
          "Six hotel breakfasts on Days 2–7, subject to serving times. The hosted tea tasting is listed separately; lunches, dinners and other drinks are at your expense unless added to the written quote.",
      },
      {
        label: "Arrival and departure",
        value:
          "Arrive at your confirmed Shanghai airport or station on Day 1; depart from Hangzhou Xiaoshan International Airport (HGH) or a named Hangzhou station on Day 7. Shanghai Pudong (PVG) and Hongqiao (SHA) are different airports. Return to Shanghai is not included.",
      },
      {
        label: "Price and confirmation",
        value: getPublishedPriceDisclosure("shanghai-suzhou-hangzhou-private-7-day-tour"),
      },
    ],
    facts: [
      {
        label: "Duration",
        value: "7 days / 6 nights",
      },
      {
        label: "Overnight bases",
        value: "Shanghai 3 nights · Suzhou 1 night · Hangzhou 2 nights",
      },
      {
        label: "Hotel changes",
        value: "Two",
      },
      {
        label: "Hotels",
        value: "Named properties and room categories in your proposal",
      },
      {
        label: "Transport",
        value: "Private road transfers · two shared high-speed trains",
      },
      {
        label: "Finish",
        value: "Hangzhou; Shanghai return quoted separately",
      },
    ],
  },
  highlights: [
    {
      title: "Shanghai beyond a single skyline",
      description:
        "Connect Yu Garden and the Old City with the Bund and a selected neighborhood walk, with interpretation and breaks rather than a race between viewpoints.",
      category: "Culture",
      image: jiangnanImages.street,
    },
    {
      title: "One water town, one considered garden visit",
      description:
        "Visit Zhujiajiao from your Shanghai base, then spend a Suzhou night around the Humble Administrator's Garden and a separate old-town walk. Each stop has its own purpose.",
      category: "Culture",
      image: jiangnanImages.waterTown,
    },
    {
      title: "West Lake and the tea landscape",
      description:
        "Finish in Hangzhou with a selected lakeside route and a hosted tea tasting. Discuss production and preparation without a compulsory purchase or a year-round harvest promise.",
      category: "Food",
      image: jiangnanImages.tea,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Shanghai and settle in",
      destination: "Shanghai",
      summary:
        "Meet your driver at the Shanghai airport or station named in your proposal and transfer to your hotel for three nights. Keep the arrival day free of major sightseeing commitments; any additional walk depends on your arrival time and is separately agreed.",
      image: jiangnanImages.hero,
      meals: ["Meals at your own expense"],
      transport: "Private arrival transfer",
      activities: [
        {
          title: "A precise arrival handover",
          description:
            "Your plan names PVG, SHA or the exact railway station, the meeting point, luggage capacity and local contact. Airport names are not interchangeable.",
        },
        {
          title: "Time to recover",
          description:
            "Settle in and review the week. A late flight does not require rushing through a prepaid attraction on the arrival day.",
        },
      ],
      transit:
        "The hotel and actual terminal determine transfer time; confirm the schedule against your ticket.",
      steps: "Hotel and terminal walking only.",
      rest: "Hotel time after arrival.",
      hotel: "Shanghai · first of three nights",
    },
    {
      day: 2,
      title: "Shanghai: garden, streets and waterfront",
      destination: "Shanghai",
      summary:
        "Explore Yu Garden and the Old City, then continue to the Bund and a selected former French Concession neighborhood walk. Your guide connects garden design, trade and everyday city life; the route allows seated breaks and avoids adding a tower or evening cruise by default.",
      image: jiangnanImages.bazaar,
      meals: ["Breakfast", "Lunch and dinner at your own expense"],
      transport: "Private local vehicle and guide during the agreed service window",
      activities: [
        {
          title: "Yu Garden and the Old City",
          description:
            "Visit the paid garden subject to its actual opening and booking arrangements. The neighboring bazaar is a different space; your guide distinguishes the garden visit from shopping streets.",
        },
        {
          title: "The Bund in context",
          description:
            "Read the waterfront through its architecture and the river's role in the city. Walking here does not include a sightseeing cruise or a tower ticket.",
        },
        {
          title: "A neighborhood chapter",
          description:
            "Select a manageable street walk with time to pause. Interior visits, specialist hosts and additional admissions are only included when named in the proposal.",
        },
      ],
      transit:
        "Private urban transfers around the confirmed route; traffic and queues affect timing.",
      steps:
        "City pavements, garden paths, thresholds and standing; shorter walking sections by agreement.",
      rest: "A seated lunch break and planned pauses.",
      hotel: "Shanghai · second night",
    },
    {
      day: 3,
      title: "Zhujiajiao: a water-town day from Shanghai",
      destination: "Zhujiajiao · return to Shanghai",
      summary:
        "Travel privately to Zhujiajiao for canals, stone bridges and a selected walking route through the old town, then return to the same Shanghai hotel. This is the only water-town excursion in the base itinerary; a canal boat is optional, not automatically included.",
      image: jiangnanImages.waterTown,
      meals: ["Breakfast", "Lunch and dinner at your own expense"],
      transport: "Private return road transfer and local guiding",
      activities: [
        {
          title: "One town with time to look",
          description:
            "Follow a selected route around canals and bridges. The written proposal identifies the admission package and any paid interiors; it does not promise every attraction or empty lanes.",
        },
        {
          title: "Walk, pause or add a boat",
          description:
            "Plan breaks and lunch around walking ability and weather. Ask separately about a boat ride, its boarding steps, shared or private basis and additional charge.",
        },
        {
          title: "Return ready for Suzhou",
          description:
            "Return to Shanghai and pack for tomorrow. Do not add Tongli, Zhouzhuang or another distant water town to the same day.",
        },
      ],
      transit:
        "Reserve a separate excursion day; exact travel and touring hours depend on the hotel, traffic and selected admission route.",
      steps:
        "Uneven paving, stepped bridges and canal edges; a shorter route needs advance review.",
      rest: "Seated breaks and a return to your existing Shanghai room.",
      hotel: "Shanghai · third night",
    },
    {
      day: 4,
      title: "Travel to Suzhou and explore a classical garden",
      destination: "Shanghai · Suzhou",
      summary:
        "Check out and take a confirmed public high-speed train to Suzhou with private transfers at both ends. Meet your local guide and visit the Humble Administrator's Garden after allowing for the station handover, luggage and a meal break. Stay one night in Suzhou; additional gardens and the museum are not scheduled by default.",
      image: jiangnanImages.suzhou,
      meals: ["Breakfast", "Lunch and dinner at your own expense"],
      transport: "Private station transfers · shared second-class high-speed train · local guide",
      activities: [
        {
          title: "A train journey with clear handovers",
          description:
            "The proposal names both stations, train and pickup points. Local guidance ends at the permitted station handover; no guide rides with you unless separately booked. Carry your own bags on the train.",
        },
        {
          title: "Luggage before garden touring",
          description:
            "Agree whether bags go to the hotel or remain secured in the local vehicle before check-in. Early room access is subject to hotel arrangements; valuables stay with you.",
        },
        {
          title: "One garden, examined carefully",
          description:
            "Explore the Humble Administrator's Garden through its paths, water, buildings and framed views. Admission, the confirmed visiting slot and a named alternative if unavailable are resolved before booking.",
        },
      ],
      transit:
        "Train time is only one part of the hotel-to-hotel move; include station access, security, boarding, bag handling and local transfers.",
      steps: "Station walking and lifting, then garden paths, thresholds and standing.",
      rest: "Meal break and a restrained garden afternoon.",
      hotel: "Suzhou · one night",
    },
    {
      day: 5,
      title: "Suzhou old town, then onward to Hangzhou",
      destination: "Suzhou · Hangzhou",
      summary:
        "Take a selected Pingjiang Road-area walk before a confirmed public high-speed train to Hangzhou. Private road transfers connect each end. Check into your Hangzhou hotel for two nights; a short West Lake orientation is possible only if the booked train and arrival leave enough time.",
      image: jiangnanImages.canal,
      meals: ["Breakfast", "Lunch and dinner at your own expense"],
      transport: "Private local transfers · shared second-class high-speed train · local guides",
      activities: [
        {
          title: "A morning beyond the garden",
          description:
            "Follow a short canal-side old-town route with your Suzhou guide, leaving time to collect bags and reach the correct station. Paid interiors and boat trips are not added automatically.",
        },
        {
          title: "Continue without returning to Shanghai",
          description:
            "Travel on the actual booked service to the named Hangzhou station. A change in timetable may require adjusting the morning walk; the train connection takes priority.",
        },
        {
          title: "Settle beside the final chapter",
          description:
            "Meet the Hangzhou team and check in. If time permits, make a short lakeside orientation; the full Hangzhou programme is tomorrow, so late rail arrival does not depend on fitting in another attraction.",
        },
      ],
      transit:
        "Confirm the actual Suzhou–Hangzhou train and both stations before fixing the morning schedule.",
      steps:
        "Old-town paving, station walking and luggage lifting; optional short lakeside section.",
      rest: "Protect check-in and hotel time after the second hotel change.",
      hotel: "Hangzhou · first of two nights",
    },
    {
      day: 6,
      title: "Hangzhou: West Lake and a hosted tea tasting",
      destination: "Hangzhou · Longjing tea area",
      summary:
        "Spend the day on a selected West Lake walking route and a Longjing-area tea introduction and tasting. Your guide connects the lake landscape with the surrounding tea hills, with transport and a lunch break between chapters. Harvest work, lake boats, temples and evening shows are not default inclusions.",
      image: jiangnanImages.lake,
      meals: ["Breakfast", "Hosted tea tasting", "Lunch and dinner at your own expense"],
      transport: "Private local vehicle and guide",
      activities: [
        {
          title: "West Lake at a manageable scale",
          description:
            "Choose a specific lakeside section for landscape, history and breaks. This is not a promise to walk the entire lake, see every viewpoint or include a sightseeing boat.",
        },
        {
          title: "Understand tea without a sales obligation",
          description:
            "Meet the confirmed host for the included introduction and tasting, with interpretation from your guide. The proposal identifies the venue, session length and teas served; buying tea is optional.",
        },
        {
          title: "Season changes the tea landscape",
          description:
            "Ask about farm activity if harvest matters to you. Picking and specialist workshops require separate confirmation; a spring harvest scene cannot be promised for every date.",
        },
      ],
      transit:
        "Local road transfers link the selected lake section, tea venue and hotel; weekends and holidays may require route adjustments.",
      steps:
        "Lakeside paths and tea-venue access; farm slopes or field steps only if a suitable route is confirmed.",
      rest: "Seated tea session, lunch break and agreed hotel return.",
      hotel: "Hangzhou · second night",
    },
    {
      day: 7,
      title: "Depart from Hangzhou",
      destination: "Hangzhou · confirmed departure point",
      summary:
        "After breakfast, take a private departure transfer to Hangzhou Xiaoshan International Airport (HGH) or the Hangzhou railway station named in your proposal. No major sightseeing is scheduled before departure. This version does not return to Shanghai.",
      image: jiangnanImages.vehicle,
      meals: ["Breakfast, subject to hotel serving time"],
      transport: "Private departure transfer",
      activities: [
        {
          title: "Match the driver to your departure ticket",
          description:
            "Confirm the exact station or airport terminal, hotel address and departure time. A Hangzhou city label alone is not enough to plan the transfer.",
        },
        {
          title: "Rework a Shanghai departure before booking",
          description:
            "If your flight leaves from PVG or SHA, request a separately priced transfer and connection review. An extra night or a change of final base may be appropriate; tight same-day connections are not guaranteed.",
        },
      ],
      transit:
        "Set pickup from the actual hotel and ticket, allowing road time and the required carrier check-in margin.",
      steps: "Hotel and terminal walking.",
      rest: "No scheduled sightseeing before departure.",
    },
  ],
  accommodations: [
    {
      name: "Your selected Shanghai hotel",
      destination: "Shanghai · 3 nights",
      description:
        "Choose a location suited to the city walks and the Zhujiajiao excursion. Your written proposal names the property, room, bedding, breakfast and cancellation terms. A Bund view, suite or named luxury brand is not assumed.",
      roomStyle: "Double or twin as quoted",
      highlights: ["Three consecutive nights", "Arrival and water-town excursion from one base"],
      image: {
        src: "/tours/placeholders/shanghai-suzhou-hangzhou.svg",
        alt: "Shanghai, Suzhou and Hangzhou — placeholder awaiting client-supplied photography",
        width: 1600,
        height: 1000,
      },
    },
    {
      name: "Your selected Suzhou stay",
      destination: "Suzhou · 1 night",
      description:
        "Balance old-town atmosphere with vehicle access and the actual arrival and departure stations. Review stairs, lifts and luggage handling before selecting a heritage-style property; early check-in is not guaranteed.",
      roomStyle: "Room category confirmed before booking",
      highlights: [
        "One overnight between garden and old-town visits",
        "Station and luggage logistics checked",
      ],
      image: {
        src: "/tours/placeholders/shanghai-suzhou-hangzhou.svg",
        alt: "Shanghai, Suzhou and Hangzhou — placeholder awaiting client-supplied photography",
        width: 1600,
        height: 1000,
      },
    },
    {
      name: "Your selected Hangzhou hotel",
      destination: "Hangzhou · 2 nights",
      description:
        "The photograph is a room reference, not a confirmed property or included room category. Discuss lakeside access versus the transfer time to tea country and your departure point. A lake-view room is a specific category to quote, not a consequence of staying in Hangzhou.",
      roomStyle: "Location, bedding and room view as quoted",
      highlights: ["Two consecutive nights", "Departure from Hangzhou reviewed before booking"],
      image: jiangnanImages.room,
    },
  ],
  included: [
    "Proposed six hotel nights: Shanghai three, Suzhou one, Hangzhou two, with six breakfasts subject to serving times and the confirmed room basis.",
    "Private local English-speaking guides, separate drivers and private road vehicles for scheduled touring on Days 2–6, with exact guide windows and station handovers confirmed. No intercity train escort in the base version.",
    "Driver-only Day 1 Shanghai arrival transfer and Day 7 Hangzhou departure transfer to the named terminal or station, plus the scheduled local station transfers.",
    "Two public high-speed rail journeys: Shanghai–Suzhou and Suzhou–Hangzhou, with second-class tickets as the proposed base; stations, trains and seats confirmed subject to booking.",
    "Listed paid visits: Yu Garden, the Humble Administrator's Garden and the selected Zhujiajiao admission package, with reservation and substitution arrangements specified in writing.",
    "One hosted Longjing-area tea introduction and tasting with the venue, duration and teas served confirmed. No compulsory tea purchase or shopping stops.",
  ],
  excluded: [
    "International flights and travel to Shanghai or onward from Hangzhou, except the two intercity rail journeys expressly listed.",
    "Return transport to Shanghai, an extra final night, train escorts, porters and separate road luggage delivery unless added in writing.",
    "Lunches, dinners and drinks other than hotel breakfasts and the confirmed tea tasting.",
    "Water-town boats, West Lake boats, Shanghai sightseeing cruises, towers, Suzhou Museum, extra gardens, temples and evening shows unless added to the proposal.",
    "Tea picking, specialist tea workshops, premium tea purchases, upgraded train classes, extra guide hours, child seats and accessible vehicle upgrades unless specifically quoted.",
    "Visas, insurance, gratuities and personal expenses.",
  ],
  optionalExperiences: [],
  transportation: {
    title: "Private local support, two public rail journeys",
    description:
      "Local guides and private road vehicles connect your hotels with the actual stations and visits. Guests carry bags on the trains; guide accompaniment, porters and separate road delivery are not included. Confirm lifting needs and bag dimensions before booking.",
    items: [
      {
        label: "Shanghai to Suzhou",
        value:
          "Day 4: public high-speed train, proposed second class, with private station transfers.",
      },
      {
        label: "Suzhou to Hangzhou",
        value:
          "Day 5: public high-speed train, proposed second class, with the morning walk fitted around the confirmed service.",
      },
      {
        label: "Final transfer",
        value:
          "Day 7: driver-only transfer to the specified Hangzhou airport or station. Shanghai return is separate.",
      },
    ],
  },
  routeMap: {
    title: "One way through Jiangnan",
    description:
      "Three overnight bases and one Shanghai-based water-town excursion. The map is orientation, not a rail timetable or a guarantee of road travel times.",
    stops: [
      {
        name: "Shanghai",
        days: "Days 1–3 · 3 nights",
        description: "Arrival, city exploration and a separate Zhujiajiao day trip.",
        coordinates: {
          latitude: 31.2304,
          longitude: 121.4737,
        },
      },
      {
        name: "Zhujiajiao",
        days: "Day 3 · excursion",
        description: "One selected water town; return to the Shanghai hotel.",
        coordinates: {
          latitude: 31.112,
          longitude: 121.056,
        },
      },
      {
        name: "Suzhou",
        days: "Days 4–5 · 1 night",
        description: "A classical garden visit and a separate old-town chapter.",
        coordinates: {
          latitude: 31.299,
          longitude: 120.585,
        },
      },
      {
        name: "Hangzhou",
        days: "Days 5–7 · 2 nights",
        description: "West Lake, a hosted tea tasting and departure from Hangzhou.",
        coordinates: {
          latitude: 30.274,
          longitude: 120.155,
        },
      },
    ],
  },
  gallery: [
    jiangnanImages.hero,
    jiangnanImages.street,
    jiangnanImages.bazaar,
    jiangnanImages.waterTown,
    jiangnanImages.waterfront,
    jiangnanImages.suzhou,
    jiangnanImages.canal,
    jiangnanImages.lane,
    jiangnanImages.lake,
    jiangnanImages.boat,
    jiangnanImages.tea,
    jiangnanImages.room,
    jiangnanImages.vehicle,
  ],
  faqLimit: 30,
  faqs: [
    {
      question: "Is seven days enough for Shanghai, Suzhou and Hangzhou?",
      answer:
        "Seven days and six nights work for this one-way route: three Shanghai nights, one Suzhou night and two Hangzhou nights. Arrival and departure are included in the seven days, leaving five main touring days. Add a night if you want more gardens, museum time or a flight schedule that reduces the available days.",
    },
    {
      question: "Should we fly into Shanghai and out of Hangzhou?",
      answer:
        "That is the proposed direction. Arrive at the confirmed Shanghai airport and depart from Hangzhou Xiaoshan International Airport, code HGH, or a specified Hangzhou railway station. Check suitable flights before booking. Returning to Shanghai is a different finish requiring extra transport and possibly a revised final night.",
    },
    {
      question: "Does this tour return to Shanghai on Day 7?",
      answer:
        "No. The base route ends in Hangzhou. If your international flight departs from Shanghai, send the airport and departure time before booking. We review road or rail travel, terminal transfers and check-in margins; a Shanghai return and any additional night are separately quoted, not assumed to fit before every flight.",
    },
    {
      question: "How many times do we change hotels?",
      answer:
        "Twice: Shanghai to Suzhou on Day 4, then Suzhou to Hangzhou on Day 5. The six nights are three in Shanghai, one in Suzhou and two in Hangzhou. If avoiding a one-night stay matters most, ask for a different version with Suzhou as a day excursion; it changes the transport and touring plan.",
    },
    {
      question: "Why stay overnight in Suzhou instead of visiting on a day trip?",
      answer:
        "One Suzhou night gives the garden visit and the old-town walk separate parts of the day, without returning to Shanghai. It also adds a hotel change. This version suits travelers who value time in Suzhou more than keeping one fewer hotel; a day-trip version can be designed separately.",
    },
    {
      question: "Are the high-speed trains private, and which class is included?",
      answer:
        "No. The proposed Shanghai–Suzhou and Suzhou–Hangzhou journeys use scheduled public trains, with second-class seats as the base. Train numbers, stations, times and seats depend on the actual booking. First- or business-class seats cost extra unless included in your written quote; adjacent seats cannot be promised before allocation.",
    },
    {
      question: "Will a guide travel with us on the trains?",
      answer:
        "The base plan uses local guides and confirmed station handovers; it does not include a guide accompanying you between cities. You carry your own bags through security and onto the train. If you need an escort or hands-on luggage assistance, request it before booking so tickets, staffing and any permitted assistance can be checked.",
    },
    {
      question: "How is luggage handled between Shanghai, Suzhou and Hangzhou?",
      answer:
        "Your bags travel with you on both trains. Private vehicles connect the hotels and named stations, but separate road luggage delivery and porters are not included. Tell us bag numbers, sizes and lifting needs before booking. The plan must respect current railway luggage rules and practical storage space.",
    },
    {
      question: "Which Shanghai, Suzhou and Hangzhou railway stations do we use?",
      answer:
        "The written itinerary names each station and train. Shanghai and Shanghai Hongqiao are different stations; Suzhou and Suzhou North are different; Hangzhou and Hangzhou East are different. We book transfers against the actual tickets, not just the city name. Do not assume short rail time equals short hotel-to-hotel travel.",
    },
    {
      question: "Which Suzhou garden is included?",
      answer:
        "The proposed paid garden visit is the Humble Administrator's Garden. Admission and any booking requirements are checked for your date. Additional gardens and the Suzhou Museum are not automatically included. If admission is unavailable, agree a named alternative and any price difference before confirmation rather than assuming all gardens are interchangeable.",
    },
    {
      question: "Which water town do we visit?",
      answer:
        "This version includes a private day excursion from Shanghai to Zhujiajiao on Day 3. It does not also include Tongli, Zhouzhuang, Wuzhen or Nanxun. The quote identifies the included admission package; a canal boat ride is optional and separately priced. Choose one water town rather than repeating similar stops.",
    },
    {
      question: "Is the water-town boat ride included?",
      answer:
        "No. The standard Zhujiajiao visit uses walking routes, with the selected admission package specified in your quote. A boat ride is optional, subject to operation, boarding suitability and its own fee. We confirm whether the boat is shared or privately hired if you request it.",
    },
    {
      question: "Is the Longjing tea experience a shopping stop?",
      answer:
        "The proposed Hangzhou day includes one hosted tea introduction and tasting, with the venue, duration and teas served confirmed in the quote. Buying tea is optional and not a condition of joining the experience. This does not guarantee a famous tea master, exclusive plantation access or a particular tea grade.",
    },
    {
      question: "Can we pick tea leaves or see the Longjing harvest?",
      answer:
        "Only if the season, grower, weather and working arrangements permit a separately confirmed activity. Leaf picking is not included in the base tasting and cannot be promised year-round. If visiting outside harvest time, the experience focuses on the tea landscape, preparation and tasting rather than a staged harvest claim.",
    },
    {
      question: "Are Yu Garden, the Suzhou gardens and West Lake all UNESCO sites?",
      answer:
        "No. The Classical Gardens of Suzhou and the West Lake Cultural Landscape of Hangzhou are separate UNESCO World Heritage properties. This does not make every garden, Shanghai stop, tea venue or water town on the route a World Heritage site. The linked UNESCO records explain the specific properties and their scope.",
    },
    {
      question: "How much walking is involved, and is the route wheelchair accessible?",
      answer:
        "Expect city pavements, garden paths and standing, plus thresholds, uneven paving and stepped bridges in the old towns. We propose shorter sections and seated breaks after reviewing your needs. A private car does not make the full route step-free. Wheelchair dimensions, station assistance and hotel access need individual confirmation.",
    },
    {
      question: "Can families take this private Jiangnan tour?",
      answer:
        "Yes, subject to a route and room plan suited to the actual ages. Discuss train luggage, garden walking, bridge steps, bedding and any child seats first. Child train and attraction arrangements follow current rules; we do not apply a blanket child discount or assume a lap child has a separate seat.",
    },
    {
      question: "What happens if it rains or an attraction is closed?",
      answer:
        "We review walking conditions, supplier notices and the available service window, then agree a shorter route, reordered visit or suitable alternative. Replacement admissions, extra transport and refunds follow the confirmed terms. We do not promise clear West Lake views, empty gardens, a boat ride or identical access in all weather.",
    },
    {
      question: "When is the best time for this Shanghai, Suzhou and Hangzhou tour?",
      answer:
        "Choose dates around your comfort with heat, humidity, rain and crowds, as well as flights and room availability. Spring and autumn are often considered for outdoor touring, but weather and demand vary. Tea harvest dates and blossom displays are seasonal, not guaranteed features. Chinese holidays can change crowd levels, ticket access and prices.",
    },
    {
      question: "How much does this seven-day private tour cost?",
      answer: getPublishedPriceDisclosure("shanghai-suzhou-hangzhou-private-7-day-tour"),
    },
    {
      question: "What meals, tickets and transfers are included?",
      answer:
        "The proposed basis is six hotel breakfasts, the listed paid visits to Yu Garden, the Humble Administrator's Garden and the selected Zhujiajiao admission package, one hosted tea tasting, two second-class intercity rail journeys and the scheduled private transfers. Other meals, cruises, water-town boats and extra attractions are separate unless added in writing.",
    },
    {
      question: "Can this itinerary use visa-free entry or transit?",
      answer:
        "Eligibility depends on your nationality, travel document, ports, onward itinerary and the rules effective on your dates. A seven-day itinerary does not itself establish eligibility, and leaving from a different city is not proof of qualification. Check current National Immigration Administration guidance and your carrier before booking.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [],
    destinations: [],
  },
  planningResources: [
    {
      label: "Shanghai destination guide",
      href: "/destinations/shanghai",
      description: "Review city neighborhoods, arrival choices and the Shanghai stay.",
    },
    {
      label: "Suzhou destination guide",
      href: "/destinations/suzhou",
      description: "Understand gardens and the old town before deciding on the overnight.",
    },
    {
      label: "Hangzhou destination guide",
      href: "/destinations/hangzhou",
      description: "Plan the lake, tea landscape and hotel location.",
    },
    {
      label: "Need just one Shanghai day?",
      href: "/tours/private-shanghai-day-tour-guide-driver",
      description:
        "Use the standalone day service if your hotels and wider regional route are already arranged.",
    },
    {
      label: "Classical Gardens of Suzhou: UNESCO property record",
      href: "https://whc.unesco.org/en/list/813/",
      officialPublisher: "UNESCO World Heritage Centre",
      description:
        "Authoritative background and boundaries for the Suzhou garden property. It does not establish current garden tickets, opening hours or special access for our guests.",
    },
    {
      label: "West Lake Cultural Landscape: UNESCO property record",
      href: "https://whc.unesco.org/en/list/1334/",
      officialPublisher: "UNESCO World Heritage Centre",
      description:
        "Context for the specific Hangzhou World Heritage landscape. It does not make every tea venue or other stop a listed site, or confirm current visitor operations.",
    },
    {
      label: "China Railway 12306",
      href: "https://www.12306.cn/en/index.html",
      officialPublisher: "China Railway 12306",
      description:
        "Consult current booking, document and luggage guidance, then check the actual ticket and stations. No train, seat, baggage allowance or refund rule is treated as confirmed by this link alone.",
    },
    {
      label: "National Immigration Administration",
      href: "https://en.nia.gov.cn/",
      officialPublisher: "National Immigration Administration",
      description:
        "Check entry and transit guidance against nationality, ports and onward travel. The itinerary length and open-jaw routing do not establish visa-free eligibility.",
    },
  ],
  inquiryChecklist: [
    "Dates, adults and child ages",
    "Arrival airport or station and intended departure from Hangzhou or Shanghai",
    "Rooms, bedding, hotel style and view preferences",
    "Bag numbers and sizes, lifting needs, stairs and walking limits",
    "Guide language and requested train class or escort",
    "Dietary needs, tea interests and optional boat requests",
  ],
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=7-Day%20Shanghai%20Suzhou%20Hangzhou%20Private%20Tour",
    whatsappHref:
      "https://wa.me/8618027438191?text=Please%20help%20me%20plan%20a%20seven-day%20Shanghai%2C%20Suzhou%20and%20Hangzhou%20private%20tour.",
    defaultMessage:
      "Please help me plan seven days in Shanghai, Suzhou and Hangzhou. My dates, party, room preferences, luggage and walking needs, and exact arrival and departure connections are:",
  },
};
