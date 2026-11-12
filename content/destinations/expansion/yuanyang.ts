import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yuanyang.svg",
  alt: "Yuanyang planning diagram comparing a terrace-area base, official viewpoints and a separately chosen village walk; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const yuanyangGuide: ExpandedDestination = {
  id: "yuanyang",
  name: "Yuanyang",
  region: "southwest",
  kicker: "A living terrace landscape, village context & time for changing weather",
  description:
    "Choose a Yuanyang terrace base for the season and the experience you want, with useful time for viewpoints, village context and rest instead of chasing a guaranteed sunrise.",
  stay: "2–3 nights; longer for dedicated photography",
  bestFor: "Agricultural landscapes, photography and Hani cultural context",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["jianshui", "dali", "shaxi"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yuanyang Travel Guide: Rice Terraces, Hotels & Seasons",
    seoTitle: "Yuanyang Rice Terraces: When to Go & Stay",
    seoDescription:
      "Plan Yuanyang rice terraces with seasonal choices, Duoyishu and Bada viewpoints, hotel-location advice, village walks and a tailored route from Jianshui.",
    answer:
      "Yuanyang is a county in southern Yunnan's Honghe prefecture, known for a major part of the Honghe Hani Rice Terraces cultural landscape. Visit for a working agricultural system linking forest, villages, water and terraced fields, not simply a single mountain viewpoint. The best base is usually chosen around the terrace-area visits you want, rather than the county name alone. Reflection photography, green growing fields and harvest scenery are different seasonal subjects; decide which matters before selecting dates and accommodation.",
    stayAnswer:
      "Two nights provide a full day and, if arrivals allow, more than one early or late landscape window. Three nights add a second full day for village context, a suitable walk and some flexibility around fog or rain. Dedicated photographers may want longer, but extra nights cannot guarantee clear views. One night can become a long road journey followed by a single uncertain dawn. Keep the complete Jianshui or Kunming transfer separate from the time you want to spend on the terraces.",
    hotelAnswer:
      "Compare a Duoyishu-area stay for the particular terrace setting, a base around Shengcun for a different balance of services and access, or Xinjie when the actual hotel and route suit you. Review the exact address, room view and road approach: not every Yuanyang hotel overlooks terraces. Nansha, the lower county-seat area, is a different base from the mountain terrace villages. For any rural property, confirm heating or cooling, bathroom, meals, stairs, luggage help and early-morning pickup before choosing it for a photograph.",
    sightseeingQuestion: "When should you visit Yuanyang for reflections or green terraces?",
    sightseeingAnswer:
      "For water-filled reflection scenes, consider the post-harvest and pre-planting period, broadly late autumn through early spring, while checking the actual agricultural stage and water conditions locally. Growing-season fields provide a different green landscape, and harvest timing varies by elevation and farming practice. Duoyishu is commonly considered for dawn and Bada for later light, but neither guarantees a clear sky, visible sun or empty platforms. Choose a season and stay that remain worthwhile through village and landscape interpretation even when a famous view is obscured.",
    visitorResources: [
      {
        label: "UNESCO: Cultural Landscape of Honghe Hani Rice Terraces",
        href: "https://whc.unesco.org/en/list/1111/",
        scope:
          "Background on the listed cultural landscape and the relationships among forests, water, villages and terraces. This does not establish current scenic tickets, exact planting dates, trail conditions or access to private fields and homes.",
      },
      {
        label: "Yuanyang county government",
        href: "https://www.hhyy.gov.cn/",
        scope:
          "County background and public information. Confirm actual road conditions, viewpoints, village visitor arrangements and agricultural conditions separately for the travel date.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Yuanyang stay with the named property, guide, road service, selected viewpoints and any village walk listed in the proposal. A private vehicle does not provide exclusive platforms, unrestricted field access or a guaranteed photograph. Hosted meals or household visits require an actual willing host and agreed arrangements. Describe mobility and photography needs early so the hotel approach, walking surface and dawn transport can be reviewed before booking.",
    routeAdvice:
      "Jianshui and Yuanyang can form a complementary southern Yunnan route: architectural and craft interests followed by an agricultural landscape stay. Give each place its own nights and include the full mountain-road transfer. Kunming is a broader gateway decision, not proof of a short day trip to the terraces. There is no published Yuanyang product recommended on this page; the outline is illustrative and a written proposal should specify hotel position, guide and vehicle hours, site access and onward travel.",
    practicalPlanning: {
      timing:
        "Plan the first useful viewpoint around the actual arrival and hotel access rather than assuming a long transfer will deliver sunset. Keep early photography, breakfast, rest and a possible village walk in separate windows. Mountain visibility can change, so discuss a realistic alternative instead of filling the day with repeated long drives between obscured views. A second full day can add context and flexibility, not a guarantee that the weather will clear.",
      walking:
        "Official viewing areas, village lanes and paths among terraces have different surfaces and access conditions. Steps, wet stone, mud, narrow edges and agricultural water channels can be challenging. A scenic view may be possible without a field walk, but the exact platform and hotel route still need review. Use a suitable local route, stay off planted plots and do not treat irrigation banks as public hiking trails. Rain or fog can justify shortening a walk.",
      cost: "Compare the actual property and room, road-transfer hours, dawn or evening vehicle service, guide support, admissions and any separately hosted experience. A terrace-view category needs a room-level description and does not guarantee visibility. Remote meals, luggage assistance or a specialized photography guide should be identified if needed. A premium should correspond to real comfort, time or expertise, not an unsupported claim to private viewpoints, home access or predictable light.",
    },
    attractions: [
      "Duoyishu terrace viewpoints",
      "Bada terrace viewpoints",
      "Selected Hani village context and authorized walks",
      "Honghe Hani Rice Terraces agricultural landscape",
    ],
    stays: [
      {
        label: "1 night: one uncertain landscape window",
        advice:
          "Possible for a selective stop when the full arrival and departure work, but easily dominated by road travel. Do not base the entire journey on a single dawn or promise a village walk after a late arrival.",
      },
      {
        label: "2 nights: a full day in the terrace area",
        advice:
          "Choose viewpoints and a suitable village or interpretive interest around current conditions. Keep breakfast and rest after an early start, with an evening session only if the group wants it and the weather supports it.",
      },
      {
        label: "3 nights or more: context and weather flexibility",
        advice:
          "Add a second full day for a different route, a slower walk or focused photography. Avoid repeating every viewpoint simply because more time is available. Additional nights provide opportunities rather than guaranteed clear views.",
      },
    ],
    hotelAreas: [
      {
        name: "Duoyishu and selected terrace villages",
        advice:
          "Choose a specific property for its actual view, comfort and relationship to your intended routes. Check whether the vehicle reaches the door, how many steps remain, room temperature, bathroom, meals and dawn pickup. A terrace-facing photograph does not prove the booked room shares that outlook.",
      },
      {
        name: "Shengcun and nearby accommodation",
        advice:
          "Compare for the actual combination of meals, local services and road access to selected viewpoints. Confirm the exact street, noise, facilities and daily drive rather than assuming every address in the area offers a panoramic room or easy walking to platforms.",
      },
      {
        name: "Xinjie or a separately selected town base",
        advice:
          "Consider when a particular hotel and service access fit the trip, accepting the full journeys to the chosen terrace sites. Distinguish Xinjie from Nansha and from rural villages. A county-center label is not enough to establish a practical base for repeated dawn visits.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose an agricultural season before a photographic promise",
        advice:
          "Water, growing rice and harvest each create different subjects. Timing is influenced by elevation, farming and weather, so a month alone cannot establish the appearance of every field. Ask about the current conditions for the selected area and use reference images as examples, not as guaranteed outcomes. Heavy processing and a different season can make online photographs misleading planning tools.",
      },
      {
        title: "Dawn and dusk are choices, not compulsory daily routines",
        advice:
          "Duoyishu and Bada are often associated with different light windows, but visibility, road access and personal comfort should shape the day. A traveler who wants a slower morning can still appreciate terrace structure and cultural context. If sunrise is important, agree the actual departure, warm clothing, breakfast and return; do not promise sun through fog or force the whole group into every session.",
      },
      {
        title: "A working landscape needs consent and careful walking",
        advice:
          "Fields and water channels support local livelihoods. Follow the agreed visitor route, keep off crops and ask before photographing individuals or entering a house. A village name does not grant access to every courtyard. Payment for a ticket or private guide is not permission to stage farm work, interrupt residents or use a drone wherever you choose.",
      },
      {
        title: "UNESCO context is broader than a viewpoint circuit",
        advice:
          "The cultural landscape's significance includes forest stewardship, water management, settlements and farming, not only the appearance of reflective terraces. Ask for interpretation of those relationships and distinguish listed boundaries from the wider county. A viewpoint ticket should not be described as access to every listed village, home, trail or field.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jianshui",
        advice:
          "Jianshui adds Confucian and domestic architecture, Tuanshan village and purple pottery. Give it a separate stay and plan the complete road journey to the terrace-area hotel. Do not use the same afternoon for an extensive Jianshui visit, a long transfer and a fixed Yuanyang sunset appointment.",
      },
      {
        slug: "dali",
        advice:
          "Dali offers Erhai and Bai village interests in a different part of Yunnan. It is a wider itinerary connection, not a nearby terrace excursion. Compare the full route through actual gateways and leave usable days in each place; the published northern Yunnan product does not include Yuanyang.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi's Tea Horse Road valley adds another cultural and landscape setting, but belongs to a separate northern Yunnan route. Join it to the terraces only when the real transfer sequence and available nights justify it, rather than reusing a northern itinerary unchanged.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The water-filled period broadly from late autumn into early spring is often chosen for reflection photography, subject to actual farming and water conditions. Growing rice and harvest offer other seasonal interests. Fog can be atmospheric or hide the landscape completely; clear sunrise and sunset views remain uncertain. Rain affects path safety and road plans, while rural rooms may feel cold or damp in cooler weather. Choose the actual hotel and a trip whose value includes interpretation, not just one famous image.",
    orientation:
      "Yuanyang county is part of Honghe Hani and Yi Autonomous Prefecture in southern Yunnan. The mountain terrace area, including Duoyishu and Bada, is distinct from the lower Nansha county-seat area. Shengcun, Xinjie and individual village hotels offer different locations and access. The UNESCO name Honghe Hani Rice Terraces describes a cultural landscape, not a single village or hotel district. Establish the actual property and viewpoint sequence before estimating any transfer.",
    experiences: [
      "Read the terraces through the relationship between forest, water, villages and working fields rather than only a single viewpoint",
      "Choose a Duoyishu or Bada viewing window around current conditions and your preferred pace",
      "Add a suitable village walk with local context, respect for residents and a properly planned meal",
    ],
    planningNotes: [
      "Choose the agricultural season and real hotel location before committing to sunrise or reflection expectations",
      "Review steps, wet paths, room temperature and the vehicle-to-room approach for the exact property",
      "Keep the complete road transfer from Jianshui or Kunming separate from promised viewpoint time",
    ],
    arrival:
      "Plan a complete road arrival from the actual gateway or previous hotel. A Kunming airport or railway arrival is not an arrival at the terraces, and a Jianshui train still needs onward road travel. Use the mountain hotel address, not simply Yuanyang county, for the transfer. Allow for winding roads, rest and any final luggage approach; discuss motion sensitivity and avoid making a first-night viewpoint dependent on a tight or uncertain connection.",
    gettingAround:
      "Road transfers connect selected viewpoints and villages, while the final access can involve platforms, stairs and footpaths. Agree the real pickup points and internal transport arrangements where relevant. Group visits sensibly around the property and changing conditions rather than crossing the area repeatedly to chase every photograph. For a longer walk, establish the actual local route, guide, surface, weather alternative and return vehicle before setting out.",
    stayStrategy:
      "On a two- or three-night stay, one comfortable terrace-area base usually saves packing and preserves flexibility. Check sleep, heating or cooling, bathroom, food, hot water and room humidity as carefully as the view. A guesthouse may offer an excellent setting with a simpler service model than a city hotel. Guests who value road access or less walking should choose the actual approach and room first, then adapt the viewpoint plan around it.",
    firstTimerNote:
      "The terraces are a changing place of work and community life. Reflective water, mist and green fields are different expressions of the same landscape, not evidence that a visit outside one photographic season is meaningless. Learn what the land is doing during your stay, choose a manageable route and leave room for the weather. A good guide should make the landscape understandable even when a famous distant ridge disappears into cloud.",
    faqs: [
      {
        question: "When is the best time to visit Yuanyang rice terraces?",
        answer:
          "Choose by your subject: the post-harvest and pre-planting period, broadly late autumn to early spring, is often considered for water reflections; growing and harvest seasons show different landscapes. Confirm the actual farming stage and conditions locally. No season guarantees clear light, water in every plot or visible sunrise.",
      },
      {
        question: "How many nights should I stay in Yuanyang?",
        answer:
          "Two nights give a full day and more than one possible landscape window when transfers allow. Three nights add context and weather flexibility. A single night can be dominated by travel and one uncertain dawn; dedicated photography may justify longer, with no guarantee of clear views.",
      },
      {
        question: "Where should I stay for the Yuanyang rice terraces?",
        answer:
          "Compare the actual property near your intended terrace routes, including Duoyishu, Shengcun or Xinjie-area options. Nansha is a different lower county-seat location. Check road access, room view, stairs, temperature, bathroom and meals rather than booking by the county name alone.",
      },
      {
        question: "Are Duoyishu and Bada the same viewpoint?",
        answer:
          "No. They are different terrace-viewing areas with separate road approaches and visitor arrangements. Duoyishu is commonly considered for dawn and Bada for later light, but actual visibility, access and personal pace matter more than a fixed photography rule.",
      },
      {
        question: "Can I visit Yuanyang as a day trip from Kunming?",
        answer:
          "Plan a separate terrace stay instead of assuming a practical short excursion. The complete road journey, mountain approach and uncertain viewing conditions need time. A Kunming arrival still requires a gateway-to-hotel plan and should not be counted as a full terrace day.",
      },
      {
        question: "Can I walk through the Yuanyang rice terraces?",
        answer:
          "Choose an actual permitted local route with suitable guidance and current conditions checked. Wet stone, mud, steps, narrow banks and irrigation channels can be difficult. Fields are working agricultural land, not unrestricted trails; stay off crops, respect residents and arrange the return pickup.",
      },
      {
        question: "Can I see the terraces without a strenuous hike?",
        answer:
          "A viewpoint-focused visit may work, but platforms and hotel approaches can still involve walking and stairs. Review the exact site, room and vehicle access for your needs rather than relying on a generic accessible-tour label. A long village or field walk is optional.",
      },
      {
        question: "Can I combine Jianshui and Yuanyang?",
        answer:
          "Yes, with separate nights and a complete road-transfer plan. Jianshui adds architecture, pottery and food before or after the agricultural landscape. Avoid promising extensive sightseeing at both ends of a transfer day, and choose dates around the real conditions that matter to you.",
      },
    ],
    culturalStory: {
      title: "Look beyond the reflection to the system that sustains it",
      paragraphs: [
        "A terrace panorama becomes more meaningful when the explanation follows water downhill: from forested upper slopes through villages and into cultivated steps. The landscape reflects long-term knowledge and cooperation as well as physical labor. Ask how water is shared and how settlement, forest and farming relate, using a local account rather than assuming every village follows an identical routine. This turns a viewpoint into an introduction to a living cultural landscape.",
        "People are not props within the scenery. A farmer may be working, a doorway may be private and a path may exist for cultivation rather than tourists. Ask permission before close portraits and household visits, follow the agreed route and do not stage activities as spontaneous village life. A well-arranged encounter identifies its host and purpose; public heritage status does not create personal access to a resident's home or labor.",
      ],
    },
    foodStory: {
      title: "Make a warm meal part of the mountain stay",
      paragraphs: [
        "After an early viewpoint session, a suitable breakfast and a warm place to sit can improve the whole day. Local meals may feature rice, vegetables and different meat or preserved preparations, but choose by the actual kitchen and season rather than expecting one fixed Hani menu. Ask the guide or host to explain how a selected dish relates to local ingredients. Food can add a human scale to the agricultural story without turning dinner into a staged ceremony.",
        "Rural accommodation may have a smaller menu and need advance notice for meals. Discuss allergies, meat preferences, vegetarian or halal requirements, cooking fats and stock before booking the property. Do not infer vegetarian preparation from visible vegetables or assume a hosted dinner is included with a village visit. Confirm drinking water, breakfast timing and dinner availability, particularly after late photography or before an early road departure.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the terrace-area base without a rushed promise",
        description:
          "Allow the full road journey and hotel approach. Add a nearby viewpoint only if conditions and daylight genuinely permit; settle in, discuss the landscape and confirm breakfast and the next day's road plan.",
      },
      {
        day: "Full day 1",
        title: "A viewing window and a human-scale landscape story",
        description:
          "Choose the early or later viewpoint that suits the group and conditions. Include rest, a proper meal and a suitable village or interpretive visit, rather than driving continuously between every platform.",
      },
      {
        day: "Optional extra full day",
        title: "Add a different route or flexibility around weather",
        description:
          "Use the extra time for another landscape perspective, an appropriate walk or a slower stay. Do not assume a second day guarantees clearing fog, a home visit or an unrestricted field route.",
      },
      {
        day: "Departure",
        title: "Protect the complete onward transfer",
        description:
          "Allow the full journey to Jianshui, Kunming or another confirmed destination. A dawn session needs to fit breakfast, packing and the real departure. This outline is illustrative, not a published package or a guarantee of particular light.",
      },
    ],
  },
};
