import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/tengchong.svg",
  alt: "Tengchong planning diagram comparing a historic town base, a hot-spring-led stay and a separate volcanic landscape day; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const tengchongGuide: ExpandedDestination = {
  id: "tengchong",
  name: "Tengchong",
  region: "southwest",
  kicker: "Volcanic landscapes, thermal waters & a borderland old town",
  description:
    "Make a deliberate Yunnan journey for Tengchong's volcanic landscape, hot-spring bathing and Heshun's historic lanes, choosing a stay that gives each experience enough time.",
  stay: "3–5 nights",
  bestFor: "Slow travel, thermal bathing and western Yunnan history",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["nujiang", "dali", "lijiang", "shaxi", "mangshi"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tengchong Travel Guide: Hot Springs, Heshun & Volcanoes",
    seoTitle: "Tengchong Travel Guide: Hot Springs & Heshun",
    seoDescription:
      "Plan Tengchong around Heshun, volcanic parks and thermal bathing. Compare hot-spring hotels, town bases, walking, arrival and a realistic western Yunnan route.",
    answer:
      "Tengchong is a western Yunnan destination near the Myanmar border, where volcanic geology, geothermal activity and the historic settlement of Heshun create a different trip from Yunnan's better-known northern old towns. Choose it for time at a particular hot-spring property, a considered walk through Heshun, or a landscape-focused visit. These experiences occupy different areas and should not be compressed into a single transfer day. Thermal bathing here is a leisure experience, not medical treatment, and a hotel advertising hot springs may provide very different water and facilities from another.",
    stayAnswer:
      "Three nights allow two full days for Heshun and either hot-spring time or a selected volcanic-area visit. Four nights make it easier to enjoy a particular resort and see both a heritage and landscape interest without rushing. Five nights can suit a slower wellness-led stay or a broader regional excursion. Two nights are possible for one main theme, but a long arrival or departure transfer can leave only one useful day. Add nights for time at the property and meaningful local context, not just to tick off dispersed sites.",
    hotelAnswer:
      "Choose a Tengchong city base for services and easier access to local meals; choose Heshun for historic-lane atmosphere and a slower evening, after checking vehicle access, room sound and steps. A hot-spring resort outside the center suits guests who want bathing and hotel time, but needs a careful review of the exact pool, water source, temperature control, privacy, food and daily drive to other sites. A resort label does not establish that every room has a private bath or that bathing is suitable for every guest.",
    sightseeingQuestion: "Should I stay in Heshun or at a Tengchong hot-spring resort?",
    sightseeingAnswer:
      "Stay in Heshun when historic lanes, a slower village evening and heritage architecture matter most, accepting that vehicles may not reach every guesthouse door. Choose a hot-spring resort when the actual bathing facilities and time at the property are central to the trip, accepting road transfers to town and volcanic sites. A city hotel can simplify meals and logistics for a short stay. Compare the exact room and route before booking; one base rarely delivers all three settings equally well.",
    visitorResources: [
      {
        label: "Tengchong municipal government",
        href: "https://www.tengchong.gov.cn/",
        scope:
          "Municipal background and public information. Verify actual scenic-area access, hot-spring facilities, transport and current visitor instructions with each operator for the travel date.",
      },
      {
        label: "Yunnan provincial government",
        href: "https://www.yunnan.gov.cn/",
        scope:
          "Provincial context and public notices. This does not verify an individual resort's water source, treatment claims, room features or guest access.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Tengchong stay with the named hotel, road transfers, guide, admissions and hot-spring facilities listed clearly in the proposal. Private transport does not provide restricted-border access or permission to enter private homes. Confirm bathing conditions, privacy, water source and any health considerations directly with the actual property; hot-spring bathing is not a medical service. Any cross-border excursion or special community visit requires separate legal, operational and host confirmation.",
    routeAdvice:
      "Tengchong is best treated as a dedicated western Yunnan chapter, not a casual add-on to the Dali–Shaxi–Lijiang–Shangri-La overland route. Compare available flights and their schedules with the real road transfer from the airport. Dali can be a broader regional connection, but the complete transfer still needs to fit the trip. There is no published Tengchong itinerary recommended on this page; the sample plan is illustrative and a written proposal should identify the actual gateway, hotel sequence and services.",
    practicalPlanning: {
      timing:
        "Choose the hotel and primary experience before ordering the days. Give Heshun a useful walk and time to understand its settlement history. Put a volcanic or geothermal landscape visit on a separate day from a long road arrival; keep hot-spring time flexible around the property's actual facilities and guest instructions. Seasonal flower displays are not guaranteed on a fixed calendar, so plan for geology and heritage even if blossoms are not at their best.",
      walking:
        "Heshun's lanes and thresholds can be uneven, with steps in historic buildings and possible vehicle restrictions in the old settlement. Volcanic parks can involve stairs, slopes and exposed walking; a crater viewpoint is not automatically level or wheelchair accessible. Resort bathing has separate entry, changing and pool-surface considerations. Discuss mobility, balance, heat tolerance and bathing preferences before setting a route; a private vehicle does not resolve internal steps.",
      cost: "Compare resort room type, the actual bathing access included, meal plan, private vehicle hours, guide depth, scenic-area admissions and the transfer from the chosen airport or station. A private bath, mineral-water source, opening hours and family access must be tied to the exact property and room. A high room rate or wellness label does not substantiate therapeutic benefits, exclusive pools, treatment credentials or a private host experience.",
    },
    attractions: [
      "Heshun Ancient Town",
      "Tengchong Volcanic Geothermal National Geopark area",
      "Rehai / Hot Sea geothermal scenic area",
      "Separately selected hot-spring bathing",
      "Western Yunnan frontier and wartime history sites",
      "Beihai Wetland, if current access and conditions suit the trip",
    ],
    stays: [
      {
        label: "2 nights: commit to one main experience",
        advice:
          "Choose a hot-spring-led stay or a Heshun introduction and keep the other interest short. Check the real arrival transfer before assuming there will be a full first afternoon.",
      },
      {
        label: "3–4 nights: heritage, landscape and bathing",
        advice:
          "Allow separate days for Heshun and one selected volcanic or regional site, with protected hotel time for bathing. A city, old-town and resort sequence requires packing and transfer time; move hotels only when the distinct setting is worth it.",
      },
      {
        label: "5 nights or more: make the property part of the holiday",
        advice:
          "Add genuine resort time, a carefully selected history visit or another verified regional interest. Do not fill slower days with unconfirmed cross-border excursions or repeat drives simply to increase the attraction count.",
      },
    ],
    hotelAreas: [
      {
        name: "Tengchong city",
        advice:
          "A practical choice for restaurants, services and straightforward pickups. Check the actual distance to Heshun and the resort or geopark area; several short-looking map links can become separate drives. Choose a room with suitable sleep and temperature control rather than relying on a city-center label.",
      },
      {
        name: "Heshun Ancient Town and its edges",
        advice:
          "Choose for atmosphere and a walkable relationship with the historic settlement. Confirm where the vehicle can stop, how luggage reaches the guesthouse, room stairs, soundproofing and meal availability. An old courtyard offers character but may have less predictable privacy and modern facilities.",
      },
      {
        name: "Hot-spring resort areas outside the center",
        advice:
          "Choose a particular property when bathing and time there are important. Verify which pools or baths are included, water management, opening schedule, age restrictions, room category, meals and the return drive after bathing. Different properties use different facilities; a district name is not evidence of a specific geothermal source or treatment.",
      },
    ],
    tradeoffs: [
      {
        title: "Rehai's geothermal scenery and hotel bathing are different experiences",
        advice:
          "Rehai, often translated as Hot Sea, is known for visible geothermal activity such as steaming ground and hot-water features. Treat it as a named scenic visit with its own route, rather than assuming every hotel bath is there or that admission includes a resort soak. Stay within marked visitor areas and follow safety instructions around hot water and steam. Choose the scenic interest and any bathing facility separately.",
      },
      {
        title: "Hot-spring bathing is not a medical treatment",
        advice:
          "Ask the property about the actual water source, temperature, pool maintenance, privacy, shower and changing facilities. Follow its safety instructions and seek personal medical advice when needed. Do not assume mineral content treats an illness, that every bath is natural geothermal water or that a private plunge pool is included in the room category.",
      },
      {
        title: "Heshun is a lived-in settlement, not a private film set",
        advice:
          "Its lanes and houses make more sense through migration, trade and local life than through a quick photograph circuit. Respect residents, private courtyards and current visitor routes. Ask before photographing people or entering a home. A heritage guesthouse may have stairs, shared spaces and limited vehicle access; select it for the particular experience rather than assuming modern resort service.",
      },
      {
        title: "Volcanic landscape visits need a named route",
        advice:
          "Confirm which park entrance and features are included, how internal transfers work and how much climbing remains. A volcanic cone, crater rim and geothermal area are not interchangeable stops. Avoid promising a lava tube, active eruption or unrestricted crater access without a specific verified site and current permission.",
      },
      {
        title: "The border location does not imply a border excursion",
        advice:
          "Tengchong's proximity to Myanmar is part of its regional context, not a promise of a day trip across the border or access to border-controlled areas. Any cross-border plan has distinct visa, transport, security and operator requirements. Keep a mainland Yunnan itinerary within confirmed lawful access and current travel guidance.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "nujiang",
        advice:
          "Nujiang’s regional guide explains the wider valley journey, lower and middle overnight stages, full gateway roads and separate side-valley decisions. Use it to judge whether the available nights and rooms support a rewarding trip, with Bingzhongluo local days counted within the regional plan rather than replacing the approach.",
      },
      {
        slug: "mangshi",
        advice:
          "Mangshi adds a distinct Dehong city-and-food chapter with selected Buddhist architectural interests. Give it useful nights and allow the full road transfer rather than treating its airport as interchangeable with Tengchong's. The value is a different city rhythm, not another compulsory stop between Heshun and a hot-spring stay.",
      },
      {
        slug: "dali",
        advice:
          "Dali offers Erhai and Bai village interests in a separate part of Yunnan. Link the two only after checking available flights or the complete road journey and adding the required transfer time. The published Tea Horse Road itinerary does not include Tengchong, so it should not be presented as a ready-made extension.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi adds a Tea Horse Road valley, courtyard stays and a different historic-town scale. It belongs to a distinct overland route. Compare the full road sequence and days rather than implying a direct local transfer from Tengchong.",
      },
      {
        slug: "lijiang",
        advice:
          "Lijiang adds Naxi heritage and a different mountain-and-old-town chapter. It is not a next-door stop; choose the real connection and altitude sequence before joining it to western Yunnan. Avoid reusing the northern Yunnan itinerary unchanged for a Tengchong journey.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Tengchong's highland southwest-Yunnan setting can make it milder than many lowland destinations, but temperatures, rain and visibility vary. Wet conditions affect outdoor walking; cooler weather may make bathing appealing while changing what a remote property feels like at night. Check seasonal flower or wetland conditions for the exact dates rather than guaranteeing a bloom. Hot-spring facilities operate according to each property's schedule and maintenance, not the broad season label.",
    orientation:
      "Tengchong is a county-level city administered by Baoshan in western Yunnan. Heshun, the central city, volcanic landscapes, wetland areas and many resort properties are separate locations. Tengchong Tuofeng Airport is distinct from Baoshan Yunrui Airport and from the road gateways used by some wider Yunnan itineraries. Use the exact flight, hotel address and road transfer when deciding which route is practical; do not assume Dali or Lijiang is a short drive away.",
    experiences: [
      "Walk selected Heshun lanes with context for the settlement's frontier, migration and trading history",
      "Compare a named volcanic landscape visit with the actual climbing and internal transport it involves",
      "Protect unhurried time at a verified hot-spring property without treating bathing as a medical treatment",
    ],
    planningNotes: [
      "Verify the property's actual hot-spring facilities, room access and meal arrangements rather than relying on a wellness label",
      "Separate the real airport and road-transfer time from the day's sightseeing allowance",
      "Respect Heshun residents and confirm steps, vehicle access and bathing needs before booking",
    ],
    arrival:
      "Check the actual flight and named airport before choosing the hotel or promising a same-day experience. Tengchong Tuofeng and Baoshan Yunrui are different gateways with different road journeys. Build in baggage and private transfer time, especially for an out-of-town resort or Heshun property with limited vehicle approach. Do not make a timed hot-spring session or scenic-area entry depend on a connection that has not been confirmed.",
    gettingAround:
      "A private road vehicle can connect the city, Heshun, volcanic parks and a selected resort, but distances and internal access still matter. Agree the day's geographic grouping and where the driver can wait or collect you. Old-town lanes may not admit the vehicle to the guesthouse; park viewpoints and bathing areas have their own walking, shuttle and entry rules. Avoid trying to cover dispersed areas as if Tengchong were a compact pedestrian town.",
    stayStrategy:
      "Decide whether the hotel is primarily a comfortable base or a destination in its own right. For a resort, protect time for the actual bath, room, food and grounds. For Heshun, choose a guesthouse whose heritage character fits your desired level of privacy, steps, soundproofing and luggage support. If the itinerary includes both, compare the benefit of changing hotels with the drive saved; on a three-night stay, one base may be kinder than moving twice.",
    firstTimerNote:
      "Tengchong makes a stronger trip when you choose one human story and one landscape interest alongside the hotel experience. Heshun helps explain migration and borderland exchange; the volcanic area offers a geological perspective; a hot spring gives time to slow down. None should be reduced to a promise of an untouched village, an active volcano or a cure. Let the actual room and route shape the days.",
    faqs: [
      {
        question: "How many days do you need in Tengchong?",
        answer:
          "Three nights allow two full days for Heshun and either a volcanic-area visit or hotel bathing. Four nights make it easier to include all three at a slower pace. Five can suit a resort-led stay or another verified regional interest. Two nights require choosing one main theme and checking the arrival gateway carefully.",
      },
      {
        question: "Is Rehai the same as a Tengchong hot-spring hotel?",
        answer:
          "No. Rehai, also called Hot Sea, is a geothermal scenic-area visit. A hotel's bathing facilities have their own location, access and included services. A Rehai admission should not be assumed to include a resort bath, and a hot-spring hotel should not be assumed to be inside Rehai.",
      },
      {
        question: "Is Tengchong worth visiting for hot springs?",
        answer:
          "It can be, if you select a property for its actual water, baths, room and service and want time there. Hot-spring facilities differ by hotel and may require a particular room or separate charge. Verify what is included and treat bathing as leisure, not medical treatment.",
      },
      {
        question: "Should I stay in Heshun or at a hot-spring resort?",
        answer:
          "Choose Heshun for historic lanes and a slower settlement stay, checking steps, luggage and vehicle access. Choose a resort when its actual baths and grounds are central, accepting separate road transfers. A city hotel can suit a short stay with more meal choices. Compare the exact property rather than expecting one base to provide all three experiences.",
      },
      {
        question: "Can I visit Heshun and the volcanic park in one day?",
        answer:
          "Possibly, with a selective route and the actual locations, opening conditions and walking reviewed, but a relaxed visit to both may need separate days. A resort session and long arrival transfer also use meaningful time. Do not use map distance alone to promise a full day of visits.",
      },
      {
        question: "Are Tengchong hot springs safe for everyone?",
        answer:
          "No bathing facility is suitable for every person or condition. Follow the hotel's water-temperature and health instructions and seek personal medical advice when relevant. Check access, changing arrangements, children's rules and supervision for the actual bath; do not rely on therapeutic claims in marketing language.",
      },
      {
        question: "Is Tengchong an active volcano?",
        answer:
          "The area is known for volcanic landforms and geothermal activity, but that does not mean visitors will see an active eruption. Choose a named, officially accessible geological site and check its current route. Do not promise lava, an open crater or unrestricted volcanic access.",
      },
      {
        question: "Can I travel from Dali to Tengchong by car?",
        answer:
          "Road travel may be possible, but the complete distance, road conditions, service hours and usable sightseeing time need a current itinerary check. Compare it with available flights and airport transfers. Dali, Baoshan and Tengchong are not interchangeable gateways, and the published Tea Horse Road product does not include Tengchong.",
      },
      {
        question: "Is Tengchong close enough to visit Myanmar?",
        answer:
          "Its borderland setting does not imply that a cross-border excursion is available or appropriate. Such travel has separate entry, security, visa and operator requirements. Do not add a Myanmar visit or restricted-area access without current official guidance and confirmed lawful arrangements.",
      },
    ],
    culturalStory: {
      title: "Understand Heshun through movement across the frontier",
      paragraphs: [
        "Heshun's historic houses and lanes reflect a place shaped by families, commerce and movement beyond the immediate valley. Rather than treating it as a preserved backdrop, ask how migration and long-distance trade influenced its architecture and community life. Details in a courtyard or lane become more legible when a guide connects them to the local history and explains what visitors can and cannot enter.",
        "The western Yunnan borderland has a complex past, and individual residents may have different relationships to it. Avoid reducing the area to an exotic frontier or assuming a present-day household represents one historical narrative. Listen to local interpretation, respect private homes and ask permission before photographs. An arranged cultural experience should identify the host, setting and consent in advance; a hotel booking does not create access to a private family.",
      ],
    },
    foodStory: {
      title: "Let western Yunnan ingredients shape an unhurried meal",
      paragraphs: [
        "Dajiujia is a Tengchong specialty made by stir-frying pieces of erkuai, a rice cake, with accompaniments that vary by cook. The chewy rice-cake texture is part of its appeal; egg, meat, vegetables and seasoning need to be checked rather than inferred from the name. It is not automatically vegetarian or gluten-free simply because the main ingredient is rice. Pair a selected local dish with seasonal vegetables and a meal that suits the group, instead of sampling hurriedly between dispersed sites.",
        "Share allergies, vegetarian preferences, halal requirements and spice tolerance before selecting a restaurant. Stocks, preserved ingredients and shared cooking can matter even when meat is not visible in a finished dish. A resort may have a narrower menu than town, and an old-town guesthouse may require advance meal arrangements. Confirm dinner and breakfast at the exact property, particularly when it lies outside the central dining area.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the right western-Yunnan gateway",
        description:
          "Use the booked airport and actual property address to plan the transfer. Keep the first evening local; do not promise a full village or volcano visit after a long road connection.",
      },
      {
        day: "Full day 1",
        title: "Heshun's settlement history at walking pace",
        description:
          "Choose a coherent lane and architecture walk, allow for uneven surfaces and steps, and leave time for a meal. Respect private doors and confirm any arranged host visit separately.",
      },
      {
        day: "Full day 2",
        title: "Choose volcanic landscape or protected resort time",
        description:
          "Select a named geological route after checking current access and walking. Alternatively make the hotel and its verified baths the main experience; do not make both a strenuous circuit and a full spa day compete for the same hours.",
      },
      {
        day: "Optional extra full day",
        title: "Add a distinct regional interest or a slower stay",
        description:
          "Consider a verified history or wetland visit if current access and seasonal conditions suit, or keep time at the property. A cross-border excursion is not assumed. Four or more nights allow a calmer pace without requiring additional hotel moves.",
      },
      {
        day: "Departure",
        title: "Continue by a confirmed flight or full road transfer",
        description:
          "Allow the real transfer to the named airport or onward destination. Dali and northern Yunnan are separate route choices, not nearby add-ons. This outline is illustrative and is not a published product.",
      },
    ],
  },
};
