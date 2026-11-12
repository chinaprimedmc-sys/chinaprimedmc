import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/sanjiang.svg",
  alt: "Original Sanjiang planning schematic separating Chengyang Eight Villages, the county town and a distinct Zhaoxing stay; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const sanjiangGuide: ExpandedDestination = {
  id: "sanjiang",
  name: "Sanjiang",
  region: "south",
  kicker: "Dong village architecture, covered bridges and a stay with time to listen",
  description:
    "Plan Sanjiang through Chengyang's Dong villages and covered bridge, with county-town and village rooms compared, practical station transfers and respectful cultural visits.",
  stay: "2 nights for one full village day; 3 for a slower stay",
  bestFor: "Dong architecture, village walks and a cultural extension from Guilin",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "rongshui",
    "liuzhou",
    "longji-rice-terraces",
    "guilin",
    "zhaoxing",
    "guiyang",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Sanjiang Travel Guide: Chengyang Villages & Hotels",
    seoTitle: "Sanjiang Guide: Chengyang Villages & Hotels",
    seoDescription:
      "Plan Sanjiang and Chengyang Eight Villages with covered-bridge context, village or town hotels, two-night stays, station transfers and a Zhaoxing comparison.",
    answer:
      "Sanjiang Dong Autonomous County (三江侗族自治县) is in northern Guangxi, administered by Liuzhou. Its principal village interest is Chengyang Eight Villages, including the covered Chengyang Wind and Rain Bridge and Dong settlement architecture. The county town, the Chengyang village area and Sanjiang South railway station are separate places. Two nights give one complete village day and useful local hours; three allow a gentler pace or a separately researched interest. Choose a specific village room for atmosphere or a county-town hotel for practical comfort, then account for the complete road. Zhaoxing in Guizhou is another Dong village destination, not another name for Chengyang.",
    stayAnswer:
      "Allow two nights when the villages are a real interest: one full day leaves room for architecture, public lanes, meals and rest. Three nights can suit slower walking, meaningful room time or a separately confirmed cultural visit. One night may work when actual arrival and departure give useful hours, but does not automatically provide a full village day. A brief stop is selective. Before adding nights, establish what guests want to learn and whether the room is comfortable enough to enjoy beyond a quick photograph.",
    hotelAnswer:
      "Compare an exact Chengyang-area room for early or later village hours with a county-town hotel for established facilities, dining and other services. In a village property, inspect stairs, floor and wall sound, heating or cooling, bathroom, hot water, bedding, meals and luggage approach. Timber style does not establish original historic fabric, quiet sleep or boutique service. A room outside the village gate may still be convenient if its actual transport works. A county-town stay needs a distinct road to Chengyang; a Sanjiang address alone does not locate it beside the bridge.",
    sightseeingQuestion:
      "Should I stay in Chengyang, visit from the county town or choose Zhaoxing instead?",
    sightseeingAnswer:
      "Stay around Chengyang when the actual room and village hours are central to the trip. Visit from the county town when its room, meals and access better suit the guests, counting both road legs. Compare Zhaoxing as a separate Guizhou stay with its own drum-tower neighborhoods and Tang'an walking decision. Shared Dong cultural themes do not make the two destinations interchangeable or require visiting both. Choose the stronger route and room for a short trip; include both only when their differences and useful nights justify the connection.",
    visitorResources: [
      {
        label: "Sanjiang county government",
        href: "https://www.sanjiang.gov.cn/",
        scope:
          "Local context and dated notices, primarily in Chinese. Confirm the actual public visitor route, current admission, internal transport and cultural arrangements with responsible venues. A county tourism description does not establish a household invitation, scheduled performance, room or named host.",
      },
      {
        label: "Liuzhou municipal government",
        href: "https://www.liuzhou.gov.cn/",
        scope:
          "Wider regional information. Sanjiang is a separate county destination from Liuzhou city. A shared administrative region does not mean its village, airport, city sights and railway gateways form a short local circuit or one service arrangement.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and exact stations. Sanjiang South / 三江南 needs a separate road to the booked room and Chengyang visitor area. Compare the whole journey and pickup instructions rather than assume the county name identifies a village entrance.",
      },
    ],
    serviceScope:
      "A proposal should name the room, station or road gateway, village entrance, required transport, public route, guide, meals and admissions. A hosted conversation, craft activity, home visit or performance needs its own confirmed format, language, permissions and cost. A private guide does not authorize entry to houses or guarantee a private song, ceremony or community gathering. Explain remaining walking, seating, toilets and the room approach. Agree a useful wet-weather alternative and how guests can decline a staged or physically demanding activity without losing the day's purpose.",
    routeAdvice:
      "Sanjiang can add a distinct village-architecture chapter to Guilin and Yangshuo's landscape-focused stay, using actual rail or road services and both hotel transfers. Zhaoxing offers a separate comparison or another carefully paced stop in a longer route. Guiyang can provide a Guizhou city and provincial-history chapter beyond that. No matching published Sanjiang tour is recommended here. Share dates, actual gateways, walking needs and whether architecture, cultural learning or village accommodation matters most to develop a tailored plan.",
    practicalPlanning: {
      timing:
        "Give the public village route time for explanation and a comfortable meal rather than require all eight villages as a checklist. Bridge, drum-tower spaces and lanes repay different kinds of attention. Early or later hours can feel different, but quieter conditions and community activity are not guaranteed. A scheduled performance needs its actual date and venue confirmed. Keep an essential visit away from uncertain arrival and allow the full station road before departure.",
      walking:
        "Review stone paving, bridge approaches, steps, lane gradients and wet surfaces for the actual route. A shorter village walk is different from a longer countryside outing. A hotel may have more stairs than the public route, especially with bags. Agree places to sit, toilets and where vehicles can stop. Covered architecture offers some shelter, not a guarantee that the complete day is dry or step-free. Discuss knees, balance and other needs before selecting the room and sequence.",
      cost: "Compare the exact room, meals, full station or gateway transfers, public admissions, required internal transport and prepared guiding. A craft session, hosted meal, home visit and performance are separate offers unless explicitly included. Clarify what the guest actually receives rather than use a general cultural-experience fee. A premium should buy suitable access, good interpretation and a comfortable pace, not an unsupported promise of private village use or guaranteed access to community life.",
    },
    attractions: [
      "Chengyang Wind and Rain Bridge through its currently available public visitor route",
      "A selected Chengyang Eight Villages walk rather than compulsory coverage of every settlement",
      "Drum towers, public gathering spaces and timber architecture explained in context",
      "A county-town architectural or interpretive interest when it adds something distinct",
      "A hosted cultural activity only with actual permissions, format and language agreed",
      "A suitable village meal and a room that makes the overnight worthwhile",
    ],
    stays: [
      {
        label: "1 night / a selective stop",
        advice:
          "Use when transport leaves a worthwhile afternoon or morning and the room supports the visit. A late station arrival followed by early departure does not provide a full day. Keep the village route modest rather than add a long walk and a performance automatically.",
      },
      {
        label: "2 nights / one full village day",
        advice:
          "Give bridge and settlement architecture time, with a suitable public walk, lunch and rest. Choose the room for real comfort and its relationship to the route. A well-explained selective visit can be more valuable than trying to tick off every village name.",
      },
      {
        label: "3 nights / a slower cultural stay",
        advice:
          "Add a distinct researched interest or gentler split between local hours, learning and room time. Confirm any host and activity rather than assume more nights create personal access. Extra time should deepen the experience, not fill each day with another staged event.",
      },
    ],
    hotelAreas: [
      {
        name: "Chengyang village area / useful local hours",
        advice:
          "Choose the exact room for the village setting you want and check noise, temperature, bathroom, stairs and luggage. Ask what dining remains available after the main visitor hours. A timber facade and balcony are not evidence of quiet, historic fabric or high-end facilities.",
      },
      {
        name: "Chengyang approach or edge / judge the actual convenience",
        advice:
          "An edge property may offer simpler vehicle access or a different level of comfort. Check the actual road, gate, internal transport and final walk. Being outside the busiest lane can help some guests, but does not automatically remove road noise or create an easy public route.",
      },
      {
        name: "Sanjiang county town / services and room comfort",
        advice:
          "Compare for established facilities, meals and the full station-to-room journey. Allow the complete Chengyang outing separately and retain useful village hours. A comfortable town hotel can be the better choice when a particular village room has poor sound insulation, stairs or unsuitable food.",
      },
      {
        name: "A station-led stop / only for a genuine gateway need",
        advice:
          "A room chosen near the actual rail gateway solves a transport problem, not necessarily the village experience. Check meals, comfort and the remaining Chengyang road. Avoid trading away the best local hours simply because the hotel and train share a Sanjiang label.",
      },
    ],
    tradeoffs: [
      {
        title: "Look at how shared architecture is used",
        advice:
          "A covered bridge is a route and a place to pause; drum-tower spaces help explain settlement and social life. Notice the relationship between structure, roof, circulation and gathering areas rather than treat every building as an isolated photo. Respect contemporary use and avoid occupying shared space in a way that disrupts local activity.",
      },
      {
        title: "Historic associations and current buildings need separate explanation",
        advice:
          "Distinguish an earlier structure, repair, rebuilding and contemporary presentation. A community's long history does not date every visible timber member, and a county-town landmark need not share the same history as the Chengyang bridge. Ask about the particular building rather than repeat one ancient-village claim for the whole route.",
      },
      {
        title: "A staged performance is not the same as a community gathering",
        advice:
          "A visitor show can be enjoyable when its format, language and setting are clear. It does not prove access to a private ceremony or everyday singing in every village. Confirm the actual program and let guests choose participation without presenting residents' cultural life as something available on demand.",
      },
      {
        title: "Village atmosphere does not override room comfort",
        advice:
          "Sound, stairs, damp, temperature and bathroom layout can determine whether the overnight is restful. Compare a named room with a practical town alternative and assess the full daily roads. A high-end brief is better served by honest tradeoffs than by calling every rural guesthouse a luxury homestay.",
      },
      {
        title: "Chengyang and Zhaoxing can be alternatives",
        advice:
          "Both offer Dong architectural interests, but their village layouts, approach roads, rooms and nearby walks differ. A short itinerary may benefit from choosing one and staying longer. If visiting both, explain the contrasting purpose and allow the complete connection instead of repeating the same generic village day.",
      },
      {
        title: "A personal encounter needs permission and purpose",
        advice:
          "Public lanes are not invitations into houses. A hosted meal, craft conversation or portrait session requires agreement, clear expectations and suitable interpretation. Ask before close photography and follow any restrictions. Meaningful contact can be modest and respectful without a promise of exclusive access or an unnamed cultural master.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "rongshui",
        advice:
          "Rongshui adds a distinct county stay for selected village interpretation and Beijiang landscape. Choose the actual community, room and complete roads; a festival, host or Yuanbao Mountain route needs separate confirmation. It is not a city-neighborhood visit or a substitute for every Dong village interest.",
      },
      {
        slug: "liuzhou",
        advice:
          "Liuzhou offers a distinct urban chapter through manufacturing history, luosifen food and the Liu River setting. Two city nights give one full day. Assess actual dated transport and both hotel transfers; a public industrial museum does not imply factory access, and the city does not substitute for Sanjiang village time.",
      },
      {
        slug: "longji-rice-terraces",
        advice:
          "Longji adds a distinct agricultural landscape and Ping’an or Jinkeng village stay. Choose the exact room and walking, then assess the full road connection with Sanjiang. Terrace fields and Dong settlement architecture deserve different interpretation; neither stop completes the other.",
      },
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo add river and karst landscapes to a distinct Sanjiang village stay. Compare dated services and the full final road to the room. Existing Guilin products do not include Chengyang or Sanjiang teaching, rooms and performances unless expressly stated.",
      },
      {
        slug: "zhaoxing",
        advice:
          "Compare Zhaoxing's drum-tower neighborhoods and separate Tang'an route with Chengyang's settlement and covered-bridge interest. Choose one for a short trip or give both a distinct purpose and useful nights. Confirm the actual station pair and both room transfers; shared Dong culture does not make them one village area.",
      },
      {
        slug: "guiyang",
        advice:
          "Guiyang offers provincial collections, food and a different city context in Guizhou. Keep the complete rail or road sequence and final hotel transfers explicit. A connection through a station does not automatically leave useful museum time before a village or onward departure.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for village walks, with actual rain and temperature still important. Summer can be hot, humid and wet; winter can feel damp and cold, so room heating matters. Farming scenes, festivals and community activity vary by place and date, not a fixed visitor timetable. Choose the actual public route, room and confirmed program, with a shorter or indoor alternative if conditions make a long walk unsuitable.",
    orientation:
      "Sanjiang is an autonomous county within Liuzhou, Guangxi. The county town, Chengyang Eight Villages and Sanjiang South station create separate arrival and daily-route decisions. Zhaoxing is in Guizhou and is another destination, while Guilin city and Yangshuo form their own stays. This guide covers selected Sanjiang planning decisions, not every county village, the whole Liuzhou region or all Dong communities. Use precise Chinese addresses for the room, visitor entrance and station pickup.",
    experiences: [
      "Understand a covered bridge and settlement spaces through their structure and use",
      "Walk a selected public village route with enough time for explanation and rest",
      "Choose a genuinely hosted activity only when its permissions and purpose are clear",
    ],
    planningNotes: [
      "Distinguish the county town, Chengyang and the actual railway gateway",
      "Choose village atmosphere or town comfort using a particular room",
      "Keep shows, public walks and private cultural visits separate",
    ],
    arrival:
      "Research dated services to the actual Sanjiang gateway, including Sanjiang South where appropriate, and the complete road to the booked room. A Guilin or Liuzhou flight arrival adds a different onward journey. Agree Chinese station and hotel names, identity requirements, luggage and the driver's pickup point. Keep the principal village route away from uncertain arrival and allow the full transfer before a ticketed departure rather than treat reaching the county as reaching the train.",
    gettingAround:
      "Current visitor rules determine road access, internal transport and where vehicles stop around Chengyang. A private driver and a culturally prepared guide provide different services. Plan the actual lanes and bridge approaches, meals, seats, toilets and return. A countryside extension needs its own public path and weather review. Do not use private yards or fields as shortcuts or assume every lane remains convenient with bags and limited mobility.",
    stayStrategy:
      "Two settled nights can make the village visit less dependent on rushed transport windows. Choose the actual room for sleep and comfort, then use the local hours it creates. A town base can be the more suitable premium choice when village facilities do not meet the guests' needs. Extra nights should add a real learning interest or gentler pace. The quality of interpretation and respectful access matters more than describing an ordinary visit as exclusive.",
    firstTimerNote:
      "Choose the village experience and the room together. Staying in Chengyang can provide useful quieter hours, but only if the bedroom and meals suit you; a well-planned town-based visit is a valid alternative. You do not need to see every village, join a performance or enter a home to have a meaningful introduction to Dong architecture and local life.",
    faqs: [
      {
        question: "Is Sanjiang worth visiting from Guilin?",
        answer:
          "Yes, for a distinct interest in Dong settlement architecture and a slower village stay. Give it useful local hours and the complete connection. A quick bridge photograph between tight transfers provides a much narrower visit.",
      },
      {
        question: "How many nights should I stay in Sanjiang?",
        answer:
          "Two nights provide one full village day; three allow a gentler pace or another confirmed interest. One night depends on real arrival and departure hours. Choose the room and route before adding extra nights without a purpose.",
      },
      {
        question: "Should I stay in Chengyang or Sanjiang town?",
        answer:
          "Chengyang can provide useful local hours when the specific room, meals and luggage access suit. The county town can offer practical facilities with a separate village road. Compare actual properties rather than assume a rural guesthouse is automatically more comfortable or authentic.",
      },
      {
        question: "Is Chengyang the same as Zhaoxing?",
        answer:
          "No. Chengyang is in Sanjiang, Guangxi; Zhaoxing is a separate Dong village destination in Guizhou. Both have architectural interests, but different layouts, rooms and surrounding routes. Choose one for a short trip or give each a distinct purpose in a longer journey.",
      },
      {
        question: "Is Sanjiang South station beside Chengyang village?",
        answer:
          "No. Plan the full road from the actual ticketed station to the room and visitor area. The county name on a train ticket does not identify the village entrance. Confirm the station's Chinese name and pickup instructions before travel.",
      },
      {
        question: "Can I visit a Dong family or hear traditional singing?",
        answer:
          "Arrange any hosted visit or program separately with actual permission, language, format and cost agreed. A public walk does not include home entry, a ceremony or singing on demand. A staged visitor performance is another choice and should be described clearly.",
      },
      {
        question: "Is Chengyang suitable for limited mobility?",
        answer:
          "Assess the actual paving, bridge approaches, steps, room stairs and vehicle access. A shorter public route with seats may suit some guests, but the area is not automatically step-free. The bedroom and luggage approach deserve the same review as sightseeing.",
      },
    ],
    culturalStory: {
      title: "Read architecture as part of shared space",
      paragraphs: [
        "A covered bridge is more than a roof over a crossing. Its structure, places to pause and relationship to paths and water help explain how people move and spend time together. Drum towers and their surrounding spaces offer another way to understand settlement. Look at those connections rather than treat every building as an isolated monument to photograph and leave.",
        "The villages are contemporary places as well as cultural destinations. Repairs, new buildings, visitor services and everyday routines coexist. Distinguish what is historic, rebuilt or newly presented, and respect the people using public and private spaces. A guide can give a substantial account of architecture and community without promising a private ceremony, portraying residents as performers or reducing Dong life to a single costume image.",
      ],
    },
    foodStory: {
      title: "Let a village meal add understanding and rest",
      paragraphs: [
        "Oil tea, youcha, can be one local food interest when a suitable host or kitchen actually offers it. Ask about the preparation, accompaniments and ingredients rather than assume a plain cup of tea. A selected regional meal can provide time to sit after village walking and talk about what you have seen. A hosted family meal and a restaurant lunch are different arrangements; neither needs to be described as a private banquet to be worthwhile.",
        "Check stocks, meat, wheat, soy, sesame, nuts and shared preparation where relevant. A tea-based name or vegetable dish does not establish vegetarian, allergy, coeliac or halal suitability. Serious needs require the actual kitchen's confirmed capacity and an alternative. Confirm breakfast and dinner near a village room, especially after main visitor hours, instead of rely on a photograph of a communal meal or assume every guest wants alcohol and group participation.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Reach the actual room, not just the county",
        description:
          "Complete the ticketed station or road pickup and the full final approach. Eat and settle, with a modest public orientation if useful hours remain. Keep essential interpretation or a named host appointment away from an uncertain arrival.",
      },
      {
        day: "Full village day",
        title: "Give bridge, lanes and shared spaces time",
        description:
          "Follow a selected Chengyang public route with cultural explanation, seats, lunch and rest. Add a hosted activity or actual performance only when separately confirmed and wanted. Do not turn all eight villages into a compulsory physical checklist.",
      },
      {
        day: "Optional full day / for three nights",
        title: "Deepen one interest or slow the pace",
        description:
          "Choose another researched local subject or a gentler split between walking, learning and room time. A countryside route needs its own path and weather review. Extra time does not establish a household invitation or an unscheduled cultural event.",
      },
      {
        day: "Departure / Guilin or Guizhou",
        title: "Protect the complete onward journey",
        description:
          "Allow breakfast, luggage and the full road to the correct station or next room. This outline is illustrative, not a published package or a guarantee of rooms, hosts, performances, household access, festivals or current activities.",
      },
    ],
  },
};
