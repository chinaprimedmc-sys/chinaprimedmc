import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/longji-rice-terraces.svg",
  alt: "Original Longji planning schematic comparing Ping'an and Dazhai Jinkeng terrace areas, village nights and remaining steps after road or cableway access; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const longjiRiceTerracesGuide: ExpandedDestination = {
  id: "longji-rice-terraces",
  name: "Longji Rice Terraces",
  region: "south",
  kicker: "Choose the village, the season and the walk before the viewpoint",
  description:
    "Plan Longji around Ping'an or Dazhai's Jinkeng terraces, with a mountain room, seasonal field conditions and realistic walking and luggage arrangements.",
  stay: "2 nights for one full terrace day; 1 for a focused overnight",
  bestFor: "Agricultural landscapes, village architecture and a slower Guangxi stay",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["guilin", "sanjiang", "zhaoxing", "yuanyang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Longji Rice Terraces Guide: Ping'an, Dazhai & Village Stays",
    seoTitle: "Longji Rice Terraces: Ping'an or Dazhai & Stays",
    seoDescription:
      "Plan Longji Rice Terraces: compare Ping'an and Dazhai Jinkeng, overnight stays or a Guilin day trip, seasonal views, steps, cableway access and luggage.",
    answer:
      "Visit the Longji Rice Terraces north of Guilin for working mountain landscapes, village walks and views that change with the farming season. Choose Ping'an or Dazhai's Jinkeng terraces as your main base: each has different roads, accommodation and walking routes. Two nights give one full day; one night can work with useful arrival and departure hours. Decide whether you want irrigated fields, green growth or harvest colors before choosing dates, since timing varies each year.",
    stayAnswer:
      "Two nights give one full terrace day between road journeys, with time for a suitable walk, village context, meals and the property. One night can offer an evening and morning when transfers leave useful daylight, but not necessarily a full day. A Guilin-based day trip is selective: choose one area and count the whole road journey and final walking. Three nights suit a slower rural stay or a distinct second area when the room and transfer plan justify it. Count Yangshuo and Li River cruise days separately.",
    hotelAnswer:
      "Choose the actual village and property before booking a terrace-view room. Ping'an and the Dazhai/Jinkeng area offer different walking sequences, while Tiantou (田头) is another accommodation location within the wider Jinkeng landscape, not a synonym for roadside Dazhai. Ask where the vehicle stops, how bags reach reception and whether the room requires more stairs. Check quietness, bathroom, heating or cooling, meals and the view from the booked bedroom. A Longsheng town hotel serves a different purpose and should not be presented as a terrace-village stay.",
    sightseeingQuestion: "Should I choose Ping'an or Dazhai and Jinkeng at Longji?",
    sightseeingAnswer:
      "Choose Ping'an for a village-centered introduction with viewpoints and walking selected around the actual room. Compare Dazhai/Jinkeng when its broader terrace setting, chosen property or an operating cableway to the Golden Buddha Peak direction suits your plans. Cableway access can reduce part of an ascent, but does not remove every queue, step or hotel approach. Neither area is automatically quieter, easier or better in every season. Choose by the complete route, current field condition and room, not a claim that one is universally the best.",
    visitorResources: [
      {
        label: "Guilin municipal government",
        href: "https://www.gl.gov.cn/",
        scope:
          "Regional background and dated public notices, mainly in Chinese. Confirm the actual Longji visitor area, operating roads, local transport, cableway and admissions with the responsible operator. A general destination description does not establish current crop stages or an accessible route.",
      },
      {
        label: "Guangxi regional visitor information",
        href: "https://en.gxzf.gov.cn/",
        scope:
          "English-language regional context. Longsheng county, terrace villages and cultural communities are not interchangeable visitor locations. Confirm exact visits and any hosted encounter separately.",
      },
      {
        label: "China Meteorological Administration weather service",
        href: "https://weather.cma.cn/",
        scope:
          "Official forecast and warning starting point. A county forecast cannot establish visibility at every viewpoint or the footing on a particular village path; use current local conditions for the day's route.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the selected terrace area, room, complete road service, permitted local transport, admissions and the actual walking route. Specify guide language, meals, any dawn or evening service, luggage handling and the final approach to the property. Cableway use, where selected and operating, should be listed explicitly. Hosted conversations, craft visits or household meals require willing participants and separate agreement. A private guide does not provide exclusive platforms, permission to enter planted fields or a guarantee of clear terraces.",
    routeAdvice:
      "Longji can be a focused excursion from Guilin or a one- or two-night terrace stay before an onward Yangshuo or Sanjiang chapter. Share your dates, gateways, walking tolerance and preferred field scenery so we can compare those options. A tailored proposal should identify the village, room, luggage approach and full transfers. Our Li River cruise day does not include Longji; the mountain extension needs its own time and arrangements.",
    practicalPlanning: {
      timing:
        "Plan one main terrace area per focused day and keep the complete winding-road journey visible. A village room may require local transport and walking after the main drive. Leave time for lunch, breaks and the return; do not promise sunset after an uncertain late transfer. A second area needs its own road and walking allowance. A Li River cruise with a Yangshuo finish is a different full-day commitment, not the first half of a Longji excursion.",
      walking:
        "Expect slopes, steps and uneven surfaces on many village and viewpoint routes. Wet stone, mud and narrow paths can change balance and effort. Ask about the exact route from vehicle drop-off to reception, bedroom and selected viewpoint, including the return. A shorter viewpoint plan can be assessed, but do not describe a whole area as wheelchair-accessible because a cableway operates there. Stay on permitted paths, avoid cultivated plots and irrigation edges, and shorten the outing when conditions warrant it.",
      cost: "Compare the named room, full vehicle hours, guide, admissions, selected local transport, cableway where applicable, meals and luggage assistance. Clarify what happens if the cableway or a chosen route cannot operate. A terrace-view category should describe the actual window or balcony, not just the hotel's shared roof terrace. Photography expertise, early transport and any host appointment should be separately defined rather than implied by the word private.",
    },
    attractions: [
      "Ping'an / 平安 village and a selected terrace-viewing route",
      "Dazhai and Jinkeng / 大寨金坑 terraces as a separate visitor-area choice",
      "Tiantou / 田头 accommodation and walking context within the Jinkeng area",
      "Golden Buddha Peak / 金佛顶 direction, with actual cableway and remaining walking checked",
      "Public village lanes, timber-building context and agricultural interpretation",
      "A suitable terrace-area room with time for meals and changing light",
    ],
    stays: [
      {
        label: "Day visit / one selected area",
        advice:
          "Use a specific Guilin pickup and return plan and choose the area and walking in advance. Include road time, lunch and final access. This suits guests who prefer to keep their city room, but trades away the village evening and a flexible morning.",
      },
      {
        label: "1 night / an evening and morning when the road plan fits",
        advice:
          "Choose a property you can reach comfortably with luggage, and protect useful local hours. A late arrival followed by an early departure is a hotel move with little terrace time. A dawn opportunity is possible, not a guarantee of sun or visibility.",
      },
      {
        label: "2 nights / one full terrace day",
        advice:
          "Separate the main walking and village time from road arrival and departure. Leave a seated meal and time at the property. Three nights can suit a slower stay or another assessed area, but do not add a village change solely to collect more viewpoint names.",
      },
    ],
    hotelAreas: [
      {
        name: "Ping'an village / the room and its complete approach",
        advice:
          "Compare a named room with the selected village and viewpoint route. Ask about vehicle access, any local transfer, luggage carry and steps to both reception and bedroom. Check evening noise and meals, not only the view advertised for the property.",
      },
      {
        name: "Dazhai, Jinkeng and Tiantou / distinguish the exact location",
        advice:
          "Plot the property against your actual trail, drop-off and any cableway use. A Tiantou room and one nearer a Dazhai road arrival can have different final approaches. Confirm the bedroom view, warmth, hot water and dinner before choosing a remote setting.",
      },
      {
        name: "Guilin or Longsheng town / a different accommodation choice",
        advice:
          "Keep Guilin when retaining a city base matters more than staying in the landscape. A Longsheng town room may serve a road itinerary, but is not automatically a terrace-view hotel. Count the remaining road and walking each time you visit the fields.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose the agricultural stage, then verify the actual fields",
        advice:
          "Water-filled plots, fresh planting, green growth and golden pre-harvest fields are different subjects. Late spring into early summer is commonly considered for watered and newly planted scenes, summer for green fields and early autumn for ripening crops. Timing varies by elevation, weather and local practice; fields can be harvested at different times. Ask for dated local conditions rather than treat a fixed month or an old promotional photograph as a guarantee.",
      },
      {
        title: "Cableway assistance is only one part of the route",
        advice:
          "An operating Jinkeng cableway can reduce part of the ascent in its own direction. Establish boarding access, queues, remaining steps, the viewing area and the way back. It does not serve every village, hotel or terrace trail. If step-free access is essential, assess the complete journey and a suitable alternative before committing to the stay.",
      },
      {
        title: "The room's location can matter more than another viewpoint",
        advice:
          "A room that supports an unhurried morning can be more useful than a distant property with an impressive general terrace-view label. Confirm what is visible from your bedroom, where breakfast is served and how the final approach works in rain. A higher room or village can bring a different view while adding stairs and luggage handling; make that choice knowingly.",
      },
      {
        title: "A village is a community, not a scheduled cultural performance",
        advice:
          "Zhuang and Yao communities are central to Longji's cultural landscape, but different villages have their own histories and residents. Explain the specific place rather than assign one costume or custom to everyone. A public performance, a retail demonstration and a personal conversation are different experiences. Seek consent for photographs and do not promise hair displays, private homes or ceremonies as automatic inclusions.",
      },
      {
        title: "Field paths are part of working agriculture",
        advice:
          "Terrace walls, channels and planted plots support cultivation, not unrestricted visitor access. Use permitted paths and keep tripods and feet out of crops and irrigation works. A photogenic edge can be narrow or slippery. A route between villages needs a proper current assessment of distance, ascent, footing and pickup; it is not automatically a short stroll between adjacent names on a map.",
      },
      {
        title: "Longji and Yuanyang are different journeys",
        advice:
          "Longji fits a Guangxi route through Guilin and selected village regions. Yuanyang belongs to a separate southern Yunnan itinerary and has its own Hani agricultural landscape and seasonal rhythm. Do not transfer Yuanyang's reflection calendar or UNESCO listing to Longji. Choose by the wider route and the kind of rural stay you want, not by treating all Chinese rice terraces as interchangeable.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo add river and karst scenery to the mountain agricultural stay. Choose the order from actual gateways and hotel nights. The existing cruise day finishes in Yangshuo unless a Guilin return is arranged, and does not include Longji; give the terrace transfer and stay their own time.",
      },
      {
        slug: "sanjiang",
        advice:
          "Sanjiang's Chengyang area adds Dong settlement architecture and covered bridges, distinct from Longji's terrace-village setting. Assess the full road sequence and exact room in each place. Sanjiang South station is not a Longji terrace entrance or a substitute for the final village transfer.",
      },
      {
        slug: "zhaoxing",
        advice:
          "Zhaoxing offers another Dong village chapter in Guizhou, with drum towers and a separately assessed Tang'an walk. Choose a coherent road or rail sequence with full transfers. A shared countryside theme does not make Longji and Zhaoxing one compact day route.",
      },
      {
        slug: "yuanyang",
        advice:
          "Use Yuanyang as a planning comparison for a different Yunnan holiday, not a nearby extension. Its Hani terraces, bases and water-filled viewing period have their own context. Choose the region first, then refine the agricultural season and room.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose watered fields, green growth or harvest color as different seasonal interests. Broadly, late spring and early summer can bring watered and newly planted scenes, summer green growth, and early autumn ripening crops before harvest. The actual stage varies across areas and years, so confirm dated field conditions before booking specifically for one appearance. Winter can be quiet but may show bare or stubbled fields rather than continuous reflections. Rain, fog and cloud can hide a view in any season; a comfortable room, village context and a flexible walk give the stay value beyond a single photograph.",
    orientation:
      "Longji is a terrace landscape in Longsheng Various Nationalities Autonomous County, administered by Guilin in Guangxi. Longsheng town, Ping'an, Dazhai/Jinkeng and Tiantou are different locations. Longji is not a neighborhood of Yangshuo or a short stop beside a Li River cruise port. This guide compares selected terrace areas and village stays, not every Longsheng settlement, hot-spring property, trail or cultural program.",
    experiences: [
      "Understand a working agricultural landscape through an appropriate viewpoint and village route",
      "Choose Ping'an or Jinkeng by the actual room, season and walking you want",
      "Enjoy a considered village stay with meals, luggage and time for changing light planned",
    ],
    planningNotes: [
      "Choose one main terrace area before booking the room and road journey",
      "Confirm the actual agricultural stage rather than rely on a fixed seasonal photograph",
      "Count the final hotel approach, steps, luggage and return even with cableway assistance",
    ],
    arrival:
      "Plan the full road connection from the actual Guilin hotel, airport, railway station or another agreed base. Guilin, Guilin North and Guilin West stations are distinct, while Yangshuo station does not deliver guests to the terraces or to Yangshuo town. Include road breaks, visitor-area entry, permitted local transfers and remaining walking. Send luggage quantities in advance and agree storage or assistance where appropriate. A road arrival in Longsheng county does not mean you have reached the selected terrace hotel.",
    gettingAround:
      "Use a road and walking plan specific to Ping'an or the selected Jinkeng area. Confirm where the touring vehicle may go, any local transport and the final route to the room. The cableway, where selected and operating, serves its own direction rather than an all-area circuit. For a village-to-village walk, establish current permitted paths, total ascent and descent, lunch, weather and pickup before presenting it as an activity. Rain can justify a shorter viewpoint-and-village day.",
    stayStrategy:
      "One well-chosen village base can be enough for two nights. Choose it for the bedroom, actual access and the surrounding route, then leave time to enjoy the setting. Add another area only when it brings a distinct interest worth the road and walking. A city-based day visit is a valid alternative for guests who prefer their Guilin room or cannot manage the proposed village approach. Neither a rural overnight nor a cableway should be sold as automatically effortless.",
    firstTimerNote:
      "Start with the landscape you want to see and how comfortably you walk on steps and uneven ground. Then choose the area, room and number of nights. A first visit does not require every famous platform or a long cross-village hike. One well-explained agricultural view, a thoughtful village walk and an unhurried meal can provide a fuller experience than rushing between several similar panoramas.",
    faqs: [
      {
        question: "Are Longji and Longsheng rice terraces the same destination?",
        answer:
          "Longsheng rice terraces is often used for the Longji terrace destination in Longsheng county, Guangxi. The county town and individual terrace villages are different places. Confirm Ping'an, Dazhai/Jinkeng and the actual hotel rather than rely on the broad Longsheng name.",
      },
      {
        question: "Should I visit Ping'an or Dazhai at Longji?",
        answer:
          "Choose by the complete village route, current fields and room. Ping'an offers a village-centered terrace visit; Dazhai/Jinkeng has a different landscape and a cableway option in the Golden Buddha Peak direction when operating. Neither is universally easier, quieter or better.",
      },
      {
        question: "How many nights should I spend at Longji Rice Terraces?",
        answer:
          "Two nights provide one full terrace day. One works when road arrival and departure leave useful local hours. A Guilin day visit should concentrate on one area. Three nights suit a slower property stay or a distinct second area with a realistic transfer plan.",
      },
      {
        question: "When are Longji rice terraces filled with water or golden?",
        answer:
          "Late spring into early summer is commonly considered for watered and newly planted scenes, summer for green growth and early autumn for ripening crops. Actual irrigation, planting and harvest vary by field, elevation and year. Confirm dated local conditions instead of booking on a guaranteed calendar or promotional photograph.",
      },
      {
        question: "Can I visit Longji as a day trip from Guilin?",
        answer:
          "A selective day visit can be assessed from the actual Guilin pickup point. Choose one terrace area and count the full road journey, lunch, local access and walking. It trades away village evening time and is separate from the Li River cruise day.",
      },
      {
        question: "Does the Longji cableway remove all the walking?",
        answer:
          "No. The Jinkeng cableway, when operating, reduces part of an ascent in its own direction. Boarding, queues, remaining steps, viewpoints and hotel access still need checking. It does not serve every village or establish a fully accessible terrace holiday.",
      },
      {
        question: "Can a private car reach my Longji hotel?",
        answer:
          "That depends on the exact property and current vehicle arrangements. Confirm the final drop-off, any local transfer, luggage assistance and steps to reception and the bedroom. A village name, road nearby or terrace-view room category does not establish doorstep access.",
      },
      {
        question: "Is Longji suitable for travelers who need easier walking?",
        answer:
          "A shorter route can be assessed using the actual viewpoints, transport and hotel approach. Many village paths involve slopes, steps and wet or uneven surfaces. Share walking, balance and step-free requirements before choosing the area; a private vehicle or cableway does not solve every access need.",
      },
      {
        question: "Should I choose Longji or Yuanyang rice terraces?",
        answer:
          "Choose Longji for a Guangxi itinerary linked with Guilin and selected village regions. Yuanyang is a separate southern Yunnan journey with Hani cultural context and a different agricultural rhythm. Do not transfer seasonal calendars or heritage designations from one to the other.",
      },
      {
        question: "Does your Li River cruise tour include Longji?",
        answer:
          "No. The published cruise day connects Guilin with a Yangshuo finish, or a separately arranged Guilin return. Longji needs its own road plan and selected terrace visit. No matching Longji product is listed here; ask about a tailored extension with dates, nights and walking needs.",
      },
    ],
    culturalStory: {
      title: "Look beyond the curves of the fields",
      paragraphs: [
        "A terrace is both a striking form and a place where work happens. Water channels, retaining edges, access paths and the position of a village help explain how the landscape functions. Ask what is being planted, how water reaches the plots and what work the current season requires. Interpretation grounded in what is visible can make a green summer visit as rewarding as a reflected sky before planting, without pretending the fields are maintained for photography.",
        "Zhuang and Yao histories contribute to Longji's cultural landscape, but a visitor should learn about the particular village rather than reduce the region to one costume or staged custom. Timber buildings, public spaces and contemporary livelihoods offer useful questions. Distinguish a paid show or shop presentation from a hosted conversation, and seek consent for personal photographs. There is no need to enter a private home or request a ceremony to understand the relationship between settlement and cultivation.",
      ],
    },
    foodStory: {
      title: "Plan a village meal around the walk, not around a performance",
      paragraphs: [
        "Ask the actual kitchen what it prepares well and when it can serve. Bamboo-cooked rice may be an interesting choice where genuinely offered, but it is not the only way to enjoy a village meal. Choose portions, vegetables and other dishes to suit the guest, and explain whether a preparation includes meat or stock. A seated lunch with time to discuss the agricultural landscape can add more value than another hurried viewpoint.",
        "Discuss bamboo-rice fillings, meat broths, soy, nuts and shared preparation for dietary needs. A rustic presentation or vegetable appearance does not establish vegetarian food or allergy suitability. A remote room needs a dependable dinner and breakfast arrangement, particularly around early photography or a long road departure. Hosted meals and cooking activities require a willing provider and separately agreed content; neither is included simply because local food is described on this page.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / one selected terrace base",
        title: "Complete the whole hotel approach",
        description:
          "Allow the full road drive, any permitted local transfer and final walking or luggage assistance. Settle into the actual room and choose only a short orientation if daylight and energy allow. Do not make sunset a condition of enjoying arrival.",
      },
      {
        day: "Full day / terraces and village context",
        title: "Give one area enough time to become meaningful",
        description:
          "Use the actual conditions to select a suitable viewpoint and village walk. Explain cultivation, water and settlement, then leave a seated lunch and breaks. Cableway use, if selected, follows its current operation and remaining-access assessment.",
      },
      {
        day: "Full-day afternoon / depth or a gentler pace",
        title: "Choose a worthwhile second interest without collecting platforms",
        description:
          "Add a suitable public village route, an agreed hosted interest or time at the property. These are alternatives within the same full day. Another terrace area or a longer village-to-village walk requires a separately assessed road or trail plan.",
      },
      {
        day: "Departure / Guilin, Yangshuo or another agreed base",
        title: "Keep the onward connection realistic",
        description:
          "Complete the room-to-vehicle approach with luggage and allow the whole road journey. Protect train and flight connections and give any Li River cruise a separate day. This two-night outline is illustrative, not a published product or a promise of specific field color or weather.",
      },
    ],
  },
};
