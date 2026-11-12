import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhanjiang.svg",
  alt: "Original Zhanjiang planning schematic separating Chikan old-city walks, Xiashan history, bay hotels and a separately planned Naozhou Island visit; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const zhanjiangGuide: ExpandedDestination = {
  id: "zhanjiang",
  name: "Zhanjiang",
  region: "south",
  kicker: "A southern port city worth understanding beyond the waterfront",
  description:
    "Explore Zhanjiang through Chikan streets, Xiashan's Guangzhouwan history and considered seafood meals, with bay hotel choices and a separate Naozhou Island plan.",
  stay: "2–3 nights for city heritage and coastal time",
  bestFor: "Port-city history, everyday coastal life and regional food",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["guangzhou", "haikou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhanjiang Travel Guide: Chikan, Xiashan & Stays",
    seoTitle: "Zhanjiang Guide: Chikan, Xiashan & Stays",
    seoDescription:
      "Plan Zhanjiang's Chikan old city, Xiashan history and seafood. Compare bay hotel bases, two- or three-night stays and a separately arranged Naozhou Island visit.",
    answer:
      "Zhanjiang (湛江) is a port city in southwestern Guangdong, on the Leizhou Peninsula. Come for a coastal city with distinct historical layers and a considered regional food chapter, rather than assume it is a secluded beach resort. Chikan (赤坎) offers selected old commercial streets; Xiashan (霞山) adds the history of the former French leased territory of Guangzhouwan, often written Kouang-Tchéou-Wan in older sources. These are separate city areas. Two nights give one full day; three can separate heritage from a different coastal subject or useful hotel time. Naozhou Island (硇洲岛) requires its own ferry and road plan. Leizhou city is a separate destination; add it for its own cultural interests, with time for the journey.",
    stayAnswer:
      "Two nights suit one substantial city day between arrival and departure. Three allow distinct Chikan and Xiashan interests at a slower pace, or a carefully assessed additional chapter. One night should remain selective and depends on useful arrival and departure hours. A Naozhou visit needs the full mainland road, waiting, sailing and island transport before deciding between a day outing and local nights. Extra time should add depth, a worthwhile room or a different experience rather than repeat similar bay viewpoints. Do not turn a southbound connection into a claim to have explored the whole peninsula.",
    hotelAnswer:
      "Compare an actual Chikan-area hotel for selected old-city and food interests, Xiashan for a history-led stay, and a precisely located bay-facing property when the room and downtime are central. These labels do not establish the same roads or atmosphere. Check quiet, bathroom, temperature control, breakfast, dinner and pickup. Sea view, direct shore access and supervised swimming are different things. An island room needs separate assessment of meals, bathroom, climate control and final vehicle access; a fishing-village setting does not establish full-service resort standards.",
    sightseeingQuestion: "Should I choose Chikan, Xiashan or Naozhou Island?",
    sightseeingAnswer:
      "Choose Chikan for a defined walk through commercial streets and present city life. Choose Xiashan for a specific introduction to Guangzhouwan's leased-territory history through actual buildings and reliable evidence. Choose Naozhou when its island landscape or lighthouse interest justifies a separate transport chain. With one full day, prioritize the city subjects that matter most and keep the route coherent. An island excursion is not simply another waterfront stop after lunch; assess complete access and useful local hours before adding it.",
    visitorResources: [
      {
        label: "Zhanjiang municipal government",
        href: "https://www.zhanjiang.gov.cn/",
        scope:
          "City background and dated notices, mainly in Chinese. Confirm the selected Chikan or Xiashan route, public building access, Naozhou ferry and responsible visitor operator separately. General promotion does not establish an open interior, lighthouse ascent, specialist or specific hotel service.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and exact stations, then the complete hotel roads. Zhanjiang, Zhanjiang West and any other ticketed gateway require their own transfer assessment. A rail service involving the Qiongzhou Strait should be understood through its actual dated itinerary, not treated as an ordinary short city transfer.",
      },
    ],
    serviceScope:
      "A proposal should name the actual room, gateway, full vehicle and guide time, selected public street and building routes, admissions and meals. A Xiashan history visit should identify the institution and accessible evidence rather than promise every former colonial building is open. An island plan needs the actual piers, dated sailing, passenger or vehicle terms, luggage, island-side transport and cancellation alternative. A lighthouse exterior and tower entry are different arrangements. Private guiding does not authorize closed buildings, working port areas or private fishing premises.",
    routeAdvice:
      "Guangzhou provides a contrasting Cantonese city and trade-history chapter. Haikou provides a different Hainan old-city and island gateway, with the full Qiongzhou Strait approach reviewed separately. Choose actual services, properties and useful nights before combining them; being on a southbound route does not remove the distance or weather dependence. No matching published Zhanjiang product is recommended here. Share dates, gateways, room expectations, walking preferences and whether the priority is city history, food or an island interest for a proposal with one clear purpose per day.",
    practicalPlanning: {
      timing:
        "Give the main city walk enough time for explanation, shade, a seated break and a meal. Protect any open-building visit within confirmed hours. For Naozhou, count the full road to the actual pier, waiting, sailing, island travel and return; verify whether the booked vehicle travels or a different vehicle meets you. Do not make a critical flight or train depend on a fragile same-day ferry return. A Hainan connection needs its own dated service and complete arrival plan.",
      walking:
        "Check the actual city route for road crossings, uneven paving, thresholds, shade, toilets and seating. An arcade does not provide continuous shelter or step-free access. A bay promenade need not become an end-to-end walk. Boats add boarding and luggage requirements; island paths and lighthouse surroundings can have different surfaces and access. Agree a worthwhile shorter option and an indoor alternative with actual opening rather than infer ease from a coastal photograph.",
      cost: "Compare room category and actual view, full vehicle and guide time, named admissions, meals and any ferry or island-side transport. Clarify separately whether a specialist, private boat or building interior is confirmed. Seafood prices need species, weight or portion basis and any cooking charge stated before ordering. A premium quote should demonstrate interpretation, dependable rooms, meal planning and useful time rather than imply private port access, a guaranteed valuable purchase or a particular sea condition.",
    },
    attractions: [
      "A selected Chikan / 赤坎 commercial-street and old-city walk",
      "Xiashan / 霞山 Guangzhouwan heritage, using actual accessible buildings and evidence",
      "A defined public bayfront walk, selected for shade, seating and a comfortable return",
      "Naozhou Island / 硇洲岛, through a separately confirmed ferry and local road plan",
      "Naozhou Lighthouse / 硇洲灯塔 as an access-specific historical subject, without promised tower ascent",
      "A regional meal introducing actual seafood preparations and Zhanjiang-style chicken",
    ],
    stays: [
      {
        label: "1 night / a focused city stop",
        advice:
          "Choose one manageable city subject around actual arrival and departure. Keep the scope modest. A brief stop works best for one historical area; leave an island excursion for a longer stay.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Use one suitable base for the main city interest, a thoughtful meal and rest. Combine Chikan and Xiashan only when actual roads and visiting time support it. Avoid placing the essential visit on an uncertain arrival.",
      },
      {
        label: "3 nights / two distinct days",
        advice:
          "Can separate city heritage from another defined coastal subject or worthwhile property time. Naozhou still requires a complete access assessment; it is not automatically included because an extra night exists. Choose island overnights only when the actual room and useful time justify them.",
      },
    ],
    hotelAreas: [
      {
        name: "Chikan / selected old-city and food interests",
        advice:
          "Compare exact addresses for the chosen walk, dinner, quiet and pickup. Check room bathroom, climate control, breakfast and bags. A historic-looking frontage is not evidence of heritage accommodation or a peaceful room.",
      },
      {
        name: "Xiashan / a history-led city base",
        advice:
          "Choose when the actual property supports selected public buildings and meals. Check the complete roads to the booked gateway and Chikan. A Xiashan address does not put every former Guangzhouwan building on the same walk or guarantee open interiors.",
      },
      {
        name: "A particular bay-facing property / comfort and downtime",
        advice:
          "Assess the booked room, view, noise, food and indoor seating before the waterfront image. Check the actual public shore approach. A bay hotel does not automatically offer a bathing beach, a boat departure or secluded resort grounds.",
      },
      {
        name: "Naozhou / a separate island decision",
        advice:
          "Consider when the island interest and actual room justify staying. Confirm bathroom, cooling or heating, dinner, luggage access, pier transfer and a practical alternative after sailing changes. A local inn and a full-service coastal resort are different expectations.",
      },
    ],
    tradeoffs: [
      {
        title: "Chikan in Zhanjiang is not Chikan in Kaiping",
        advice:
          "Both names can appear as Chikan / 赤坎, but the Zhanjiang city area and Kaiping's separate town are different destinations. Use the full city and actual street address. In Zhanjiang, ask what particular façades, street patterns and current businesses reveal about local commerce rather than apply another town's history to similar-looking arcades.",
      },
      {
        title: "Guangzhouwan is a historical name, not Guangzhou city",
        advice:
          "The former leased territory is associated with the area of present-day Zhanjiang. Its name can mislead travelers reading older Latin-script sources. Explain the period and location before interpreting a building. Distinguish surviving fabric, later repair and current commemorative presentation; colonial history is more than a decorative architectural style.",
      },
      {
        title: "A working port and a beach resort serve different purposes",
        advice:
          "A city bay can offer a worthwhile walk and comfortable hotel without being a swimming destination. Working harbors and operational facilities have their own access rules. Choose actual public scenery and room benefits rather than promise unrestricted port access or clear bathing water from a coastline label.",
      },
      {
        title: "A lighthouse interest needs an actual visitor route",
        advice:
          "Naozhou's lighthouse can introduce navigation, maritime connections and the island landscape, but current approach, surroundings and any interior access must be checked. Seeing the exterior is different from climbing the tower. Give the ferry, local road and useful viewing time a real place in the plan rather than add the name to a city checklist.",
      },
      {
        title: "A longer peninsula route should keep local identities distinct",
        advice:
          "Zhanjiang municipality includes other city and county choices; Leizhou city has its own cultural and base decisions. Add one only when its specific interests justify the extra road time. The same applies to a Hainan extension: choose its actual gateway and local nights rather than use the strait crossing as proof of a seamless sightseeing day.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds a different Cantonese city and trade-history stay. Compare dated services, exact gateways and both hotel roads before choosing useful nights. The published Guangzhou–Shenzhen business itinerary does not automatically include this southwestern Guangdong extension.",
      },
      {
        slug: "haikou",
        advice:
          "Haikou introduces a different Hainan old-city and island-gateway chapter. Check the actual flight or complete Qiongzhou Strait itinerary, terminals, luggage and final room transfer. A nominal ferry duration excludes the approach and waiting; weather and operations require a practical alternative.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Cooler dates can make city and island walking more comfortable, with actual rain, temperature and holidays checked. Summer needs shade, drinking water and shorter exposed blocks; storms can affect ferry and coastal plans. Choose current conditions and a property with good indoor comfort rather than promise a particular sea color, sunset or operating boat from a seasonal description. A museum alternative needs its own verified opening, and a strait connection deserves separate contingency.",
    orientation:
      "Zhanjiang lies in southwestern Guangdong on the Leizhou Peninsula. Chikan and Xiashan are distinct urban areas; Naozhou requires its own island approach, while Wuchuan's Zhanjiang Wuchuan Airport is a separate gateway address. Leizhou, Wuchuan and Lianjiang are separate county-level cities within the wider municipality, each with different hotel and transport choices. Guangzhouwan / 广州湾 is a historical territorial name associated with Zhanjiang, not Guangzhou. Chikan here is not Kaiping's Chikan. For an island overnight, book the actual ferry approach and room; a city-seafront address is not an island base.",
    experiences: [
      "Read Chikan's selected commercial streets through actual buildings and present city life",
      "Understand Xiashan's Guangzhouwan history through evidence and accessible sites",
      "Enjoy a considered coastal meal and choose an island chapter only when the full access plan works",
    ],
    planningNotes: [
      "Separate Chikan, Xiashan and Naozhou before choosing the room and days",
      "Use the full city name to distinguish Chikan and historical Guangzhouwan references",
      "Count the whole island or Hainan connection, including roads and waiting",
    ],
    arrival:
      "Compare the exact dated rail service or Zhanjiang Wuchuan Airport approach with the booked hotel and principal city area. Zhanjiang and Zhanjiang West are different station choices. The airport name does not place it beside every city hotel. For Naozhou or a Hainan continuation, identify the actual terminals, passenger or vehicle arrangement, bags and final room road. Keep an essential historical visit away from uncertain arrival and protect critical onward connections from tight ferry assumptions.",
    gettingAround:
      "Choose coherent area-led days using actual street routes, public building entrances, meals and pickup points. Clarify vehicle waiting, guide accompaniment and luggage. City roads, island ferry services and working port areas have different access arrangements. A private guide does not open closed buildings or authorize entry to private fishing spaces. Where history is central, specify the relevant interpretation and language rather than assume transport alone provides a substantive cultural visit.",
    stayStrategy:
      "Two nights give one full city day; three can add a distinct chapter without rushing. Compare Chikan, Xiashan and a particular bay property on sleep, bathroom, climate control, meals and complete roads. An island overnight requires its own room and transport assessment. High-end value comes from thoughtful explanation, dependable comfort and meal planning rather than describing every coastal room as a private resort or every day as an island escape.",
    firstTimerNote:
      "Decide whether the main interest is port-city history, food or a specific island landscape. Then ask what a second day adds and which base reduces unnecessary roads. A well-explained street walk, a useful historical visit and an unhurried meal can offer more than collecting bay landmarks between long transfers. You do not need an island to make the city stay worthwhile.",
    faqs: [
      {
        question: "Is Zhanjiang worth visiting?",
        answer:
          "It can be for travelers interested in port-city history, regional food and a slower southern Guangdong chapter. Chikan and Xiashan provide different historical subjects. Choose it for those interests rather than assume every coastal city is a beach resort.",
      },
      {
        question: "How many nights should I spend in Zhanjiang?",
        answer:
          "Two nights give one full local day; three allow separate city interests or a distinct coastal chapter. One night should stay selective. An island visit needs the whole ferry and local road assessment before deciding whether it fits or deserves its own nights.",
      },
      {
        question: "Should I stay in Chikan or Xiashan?",
        answer:
          "Choose the actual hotel around the main street or historical route, meals, quiet and complete gateway roads. Chikan and Xiashan are different areas. A bay-facing property can suit downtime, but its view alone does not establish convenience or a bathing beach.",
      },
      {
        question: "What is Guangzhouwan or Kouang-Tchéou-Wan?",
        answer:
          "It is a historical name associated with the former French leased territory in the area of present-day Zhanjiang. It is not Guangzhou city. Use the period, specific building and reliable evidence to understand the history rather than treat the name as an architectural style.",
      },
      {
        question: "Is Zhanjiang's Chikan the same as Kaiping's Chikan?",
        answer:
          "No. Chikan / 赤坎 names different places in Zhanjiang and Kaiping. Use the full city, Chinese address and actual hotel or visitor entrance so a booking or historical explanation cannot be confused between them.",
      },
      {
        question: "Can I visit Naozhou Island from Zhanjiang?",
        answer:
          "A visit can be proposed after the actual ferry, piers, local transport, public access and return are confirmed. Count the complete mainland approach and island road. A lighthouse exterior visit does not guarantee tower entry, and a critical same-day departure needs a robust return plan.",
      },
      {
        question: "How do I plan a private Zhanjiang visit?",
        answer:
          "Share dates, gateways, room and walking preferences, and whether the priority is city history, food or an island subject. Ask for exact public routes, full transfers, actual meals and any confirmed specialist. No matching published product is recommended here; build the proposal around useful local time.",
      },
    ],
    culturalStory: {
      title: "Read a port city through particular streets and historical evidence",
      paragraphs: [
        "Chikan and Xiashan offer different ways into the city. A selected Chikan street can reveal commercial space, covered walking, shopfronts and how people use older buildings now. Xiashan introduces the history of Guangzhouwan through particular structures and the institutions that interpret them. Ask which features survive from a stated period, which were repaired and what evidence supports the account. A façade is a starting observation, not proof of an unchanged interior or one simple colonial story. Leave time for the lived city rather than treating it as an empty photographic set.",
        "An island or bay chapter shifts attention to maritime connections. A lighthouse, public shore and working harbor have different purposes and permissions. Explain what the selected site reveals about navigation and local livelihoods without inventing a fishing-family encounter or entering operational spaces. The peninsula also contains distinct local cultures and city histories that need their own guides. A thoughtful Zhanjiang stay begins that understanding without pretending one city circuit completes the whole region.",
      ],
    },
    foodStory: {
      title: "Order the seafood clearly, then give the meal time",
      paragraphs: [
        "A seafood meal is most useful when guests understand what they are ordering. Ask the actual kitchen about the species, preparation, portion or weight basis and any separate cooking fee before agreeing. Steamed fish, shellfish and a vegetable dish make different demands on appetite and dietary needs. A live display, fishing-port address or local reputation does not prove wild origin or a sustainability claim. Check bones, shellfish, stocks, soy, wheat-containing sauces and shared preparation as relevant; serious requirements need the actual kitchen's confirmed capacity and an alternative.",
        "Zhanjiang-style chicken can offer another regional preparation question without requiring a second heavy meal. Ask how the bird is cooked and served, what the dipping sauce contains and how the portion suits the group. The place name is not proof of one breed, husbandry method or identical recipe. Balance the table and allow comfortable seating and a relaxed return. Before an island or late gateway arrival, agree the real dinner option rather than assume every coastal property has a full kitchen open when guests reach it.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into one useful city base",
        description:
          "Complete the exact airport or station road, check the booked room and keep the first meal or walk modest. Review current public building access and the selected historical route rather than attach the essential visit to uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "Give the city history and food a coherent route",
        description:
          "Choose a substantive Chikan or Xiashan chapter, adding the other only when roads and useful visiting time support it. Keep interpretation, shade, a meal and seated pauses. A bay landmark can be a modest complement rather than another full circuit.",
      },
      {
        day: "Optional full day 2 / three-night stay",
        title: "Choose a different coastal purpose",
        description:
          "Add another meaningful city subject, worthwhile property time or a separately confirmed Naozhou outing. For the island, test the whole ferry and road chain and actual public access. These are alternatives, not a promise to complete every shore and lighthouse in one day.",
      },
      {
        day: "Departure",
        title: "Protect the complete onward connection",
        description:
          "Allow breakfast, luggage and the full gateway or next-hotel road. A Guangzhou or Haikou continuation needs its own dated service and useful local time. This outline is illustrative, not a published package or guarantee of ferries, lighthouse ascent, private venues and current operation.",
      },
    ],
  },
};
