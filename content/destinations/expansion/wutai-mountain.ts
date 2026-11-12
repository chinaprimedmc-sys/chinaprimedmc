import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wutai-mountain.svg",
  alt: "Original Mount Wutai planning schematic separating Taihuai temples, the higher terraces and outlying timber architecture; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const wutaiMountainGuide: ExpandedDestination = {
  id: "wutai-mountain",
  name: "Wutai Mountain",
  region: "north",
  kicker: "A living Buddhist landscape, with a route chosen for its meaning",
  description:
    "Plan Mount Wutai through selected Taihuai temples, realistic walking and mountain hotels, with the five terraces and outlying timber architecture treated separately.",
  stay: "2–3 nights for selected temples; allow more for distinct outlying subjects",
  bestFor: "Buddhist culture, temple architecture and a deeper Shanxi journey",
  interests: ["heritage", "landscape"],
  relatedDestinationIds: ["jiuhua-mountain", "taiyuan", "datong", "pingyao", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Mount Wutai Travel Guide: Temples, Routes & Hotels",
    seoTitle: "Mount Wutai Guide: Temples, Routes & Hotels",
    seoDescription:
      "Plan Mount Wutai with Taihuai temple choices, two or three nights, hotel comfort and realistic steps. Separate terrace visits from a timber-architecture route.",
    answer:
      "Mount Wutai (五台山), also called Wutai Shan, is a Buddhist sacred mountain landscape in northeastern Shanxi, associated with Manjushri, the bodhisattva of wisdom. Its World Heritage significance encompasses a religious and architectural landscape rather than one temple entrance. For a first cultural visit, start with a selected group of temples around Taihuai and time to understand their different traditions. The five higher terraces are another route with greater exposure to altitude and weather. Two nights give one focused full day; three allow two distinct days. Foguang Temple and Nanchan Temple belong to a separately planned timber-architecture interest, not a pair of neighboring stops in every Taihuai walk.",
    stayAnswer:
      "Allow two nights for one full Taihuai temple day when the arrival and departure roads work. Three nights support two different days, such as more detailed temple interpretation and a separately assessed outlying subject. If the five terraces or a wider architecture route are essential, give the actual journey and visitor sequence their own time rather than add them to a full temple day. One night is selective. Longer stays need a defined religious, architectural or walking purpose, suitable accommodation and a realistic weather alternative.",
    hotelAnswer:
      "Choose a specific Taihuai-area property for access to the selected temple sequence, or a named approach-road hotel when its room and pickup arrangements justify the address. A hotel in Wutai County town or near a station is a different base, not an automatic short walk to the main temple area. Check the complete road, current traffic arrangements, quiet, bedding, heating, hot water, bathroom, stairs, breakfast and dinner. A premium or temple-themed name does not establish a luxury room, monastic accommodation or privileged religious access.",
    sightseeingQuestion: "Should I choose Taihuai temples, the five terraces or Foguang Temple?",
    sightseeingAnswer:
      "Choose Taihuai for a focused introduction to the living Buddhist landscape. Xiantong Temple, the White Pagoda setting at Tayuan Temple and Pusading provide different architectural and religious subjects, with the actual routes and stairs checked. Choose the five terraces for a separate higher mountain interest, assessing transport, altitude, conditions and individual suitability. Choose Foguang Temple or Nanchan Temple for the history of timber construction, with travel and current building access confirmed. Select by the question you want answered rather than attempt every famous name in one day.",
    visitorResources: [
      {
        label: "UNESCO: Mount Wutai",
        href: "https://whc.unesco.org/en/list/1279/",
        scope:
          "Background on the World Heritage property's religious landscape and architectural significance. The listing is not a current visitor timetable and does not guarantee temple interiors, terrace transport, photography, special ceremonies or access to every building mentioned in a heritage description.",
      },
      {
        label: "Shanxi provincial government",
        href: "https://www.shanxi.gov.cn/",
        scope:
          "Regional context and dated public notices, primarily in Chinese. Current scenic-area entry, traffic, temples, high routes and conservation arrangements need confirmation with the responsible local bodies. Province-level coverage is not a permit for closed religious or heritage spaces.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and full station names. Wutaishan station is not a Taihuai temple entrance. Compare the exact ticketed gateway, current onward road and booked room; do not choose a service solely because the station contains the mountain name.",
      },
    ],
    serviceScope:
      "A proposal should name the hotel and room, exact arrival gateway, selected temples, actual visitor entrances, full road days, guide language, admissions and meals. State which parts involve steps, longer standing or a higher route, and check maximum and sleeping elevations for the chosen plan. Terrace services, specialist architecture interpretation and any religious program need current arrangements and guest suitability assessed. Private guiding does not authorize private monastic rooms, conservation access, photography or a personal meeting with clergy. Agree a worthwhile lower or indoor alternative when the principal route changes.",
    routeAdvice:
      "Mount Wutai can connect a Shanxi architecture and Buddhist-culture journey through Taiyuan and Datong when the complete roads and useful nights fit. Pingyao adds a different merchant-town subject farther along a wider regional route. Beijing is another gateway chapter, not a reason to reduce the mountain to an unrealistic return-day excursion. No matching published Mount Wutai tour is recommended here. Share dates, actual gateways, religious or architectural interests, walking and health considerations and room priorities for a tailored plan with explicit inclusions.",
    practicalPlanning: {
      timing:
        "Choose a few temples with distinct purposes and leave time for interpretation, worship activity, lunch and rest. Do not treat the main area as a museum circuit whose pace is entirely yours to set. A terrace day depends on its current transport and conditions; an outlying timber-temple visit needs its own full road and opening window. Keep essential halls away from uncertain arrival hours. Religious dates, holidays and local traffic arrangements can affect the sequence and should be reviewed for the travel dates.",
      walking:
        "Taihuai temple visits can include thresholds, courtyard paving, steps, steep approaches and prolonged standing. Pusading's approach is a different stair decision from a shorter temple visit below. The higher terraces add altitude, wind, cold and variable ground; transport does not remove that exposure. Assess the actual maximum and sleeping elevations, medical suitability and options to reduce the route. Agree seating, toilets and pickup. A private car does not make every hall or terrace accessible.",
      cost: "Compare the exact room, meals, complete gateway and road transfers, guide language and preparation, named admissions and any current internal transport. A Taihuai day, a higher-terrace route and an outlying architecture day have different scope. Confirm what changes if the planned route cannot operate. A premium should buy reliable comfort, meaningful explanation and appropriate pacing rather than guaranteed private ceremonies, closed halls or permission to photograph sacred objects.",
    },
    attractions: [
      "A selected Xiantong Temple public route, with its religious and architectural context explained",
      "Tayuan Temple and the White Pagoda setting, respecting current worship and photography rules",
      "Pusading only through an assessed approach and currently available visitor areas",
      "A shorter Taihuai temple sequence chosen around the guests' actual walking needs",
      "One or more higher terraces only through a separately assessed current route",
      "Foguang Temple as a distinct timber-architecture excursion with current public access checked",
      "Nanchan Temple as another separately routed architecture subject rather than an assumed add-on",
    ],
    stays: [
      {
        label: "1 night / a selective stop",
        advice:
          "Useful only when the full roads leave time for a meaningful temple subject and rest. A late room arrival and early departure are not a complete cultural visit. Keep the principal hall or interpretation session away from a closing-time arrival.",
      },
      {
        label: "2 nights / one considered Taihuai day",
        advice:
          "Give selected temples a full day with meals, seated breaks and context. Choose a practical assessed room and protect the day from another long transfer. Do not imply that this automatically includes all five terraces or distant timber temples.",
      },
      {
        label: "3 nights / two distinct interests",
        advice:
          "Add more detailed temple interpretation, a suitable separately planned higher route or an outlying architecture chapter. Choose the actual route, access and physical demands first. Extra time should create depth, flexibility or a gentler pace rather than another list of unconfirmed temple interiors.",
      },
    ],
    hotelAreas: [
      {
        name: "Taihuai area / access to the selected temple day",
        advice:
          "Check the exact address and route to the temples you intend to visit, not just a scenic-area label. Assess quiet, heating, bedding, hot water, bathroom, lift or stairs, meals and pickup. Religious proximity does not establish silent nights or a special relationship with a monastery.",
      },
      {
        name: "A named approach-road property / a specific room or transfer advantage",
        advice:
          "Compare room comfort with the full daily temple journey and current traffic arrangements. A property outside the main cluster can work when its facilities and roads suit the plan, but every morning's transfer needs counting. Check dinner and what remains useful if weather changes the outing.",
      },
      {
        name: "Wutai County town or a station-oriented room / another geographic base",
        advice:
          "Use it for a defined transport or architecture-route reason after reviewing the complete onward road. A county or station name is not proof of proximity to Taihuai. Compare the exact pickup, meals, sleep and next day's main subject before choosing it as a mountain base.",
      },
    ],
    tradeoffs: [
      {
        title: "Taihuai and the five terraces are different physical choices",
        advice:
          "A selected temple walk does not entail a five-terrace circuit. Higher routes have different altitude, exposure, transport and weather considerations, even when some driving is available. Choose them for a real interest and individual suitability rather than assume every visitor must complete the mountain's name literally.",
      },
      {
        title: "A living religious landscape is not a private performance",
        advice:
          "Worshippers, clergy and daily observance have their own purposes. Follow instructions, allow others space and ask before photographing people. A ceremony that happens during a visit is not a guaranteed inclusion; a guide should explain respectfully rather than promise personal blessings, private rites or access to monastic living areas.",
      },
      {
        title: "Foguang and Nanchan need an architecture itinerary of their own",
        advice:
          "Foguang Temple's East Hall is dated to 857 and Nanchan Temple's main hall to 782, making them particularly valuable for an interest in Tang-period timber construction. Look at the hall's structural rhythm, roof and bracket system with suitable interpretation rather than assume all later buildings in either complex share that date. They are not a pair of adjoining halls within the central Taihuai cluster. Check the exact roads, current public buildings and interpretation. A historic designation does not guarantee interior photography, open conservation areas or an appointment with a researcher.",
      },
      {
        title: "A temple's founding date is not the date of every visible building",
        advice:
          "Explain the actual hall, sculpture, repair and later additions being seen. The larger institution may have a longer history than surviving fabric. This makes a visit more meaningful than attaching the oldest available date to every structure or treating restored decoration as unchanged original work.",
      },
      {
        title: "Mountain comfort is about the actual room and route",
        advice:
          "Check heating, hot water, bedding, meals and the vehicle approach before luxury or retreat branding. Cold, altitude and a long temple day can change what feels comfortable. A higher room rate does not establish specialist medical provision, a monastery stay or immunity from mountain conditions.",
      },
      {
        title: "A station name is not an arrival at the temples",
        advice:
          "Rail gateways and main visitor areas can be far apart in practical travel terms. Compare a dated train with the whole final road and useful local hours, and protect the return before a fixed departure. The fastest rail segment is not automatically the best full journey.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jiuhua-mountain",
        advice:
          "Jiuhua Mountain in Anhui offers a different Buddhist landscape associated with Dizang, rather than Wutai's Manjushri tradition. It belongs to a separate southern journey, with Jiuhua Street temple choices, Tiantai walking and its own gateway and rooms. A specialist route should justify the long connection and distinct cultural context rather than treat sacred mountains as interchangeable stops.",
      },
      {
        slug: "taiyuan",
        advice:
          "Taiyuan provides Shanxi Museum and Jinci as a different regional introduction. Compare the actual gateway and complete road to your Mount Wutai room. A city day and mountain temple stay need their own useful time; a Taiyuan address or station does not make the mountain a short local outing.",
      },
      {
        slug: "datong",
        advice:
          "Datong adds Yungang's Buddhist sculpture and its own temple and city-history subjects. The comparison can deepen a Shanxi journey when the full road and nights work. Do not place a complete Mount Wutai temple day, a substantial transfer and a rushed grotto visit into one nominal sightseeing day.",
      },
      {
        slug: "pingyao",
        advice:
          "Pingyao adds a different merchant and banking-history chapter in a walled town. Give it its own base and onward connection rather than assume all Shanxi heritage sites are neighboring excursions. Compare the whole trip's walking and hotel moves before adding more locations.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing offers imperial-capital culture and possible gateway services. Choose the actual dated connection and full onward roads, keeping main visits off uncertain arrival windows. Existing Beijing products do not automatically include Mount Wutai, terrace transport or a Shanxi architecture extension.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose the season around the actual route. A Taihuai cultural visit and a higher-terrace day face different conditions. Spring and autumn can be cold, summer can bring rain and busy religious or holiday periods, and winter requires a serious review of snow, ice, roads and hotel operation. Higher places may remain markedly colder and more exposed than the room's location. Confirm the principal public route and a worthwhile alternative rather than assign one ideal month to every Mount Wutai interest.",
    orientation:
      "Mount Wutai is a sacred mountain landscape in northeastern Shanxi. Taihuai is the principal temple-area base for many cultural visitors; the five higher terraces form another route. Wutai County town, station gateways and outlying Foguang or Nanchan architecture interests are distinct locations. Use full Chinese hotel and temple names before comparing transfers. For a temple-focused stay, choose accommodation around the selected mountain route. Wutai County town and Xinzhou city are separate bases, with additional travel to the temples.",
    experiences: [
      "Understand Manjushri devotion through a selected group of living Taihuai temples",
      "Read an actual hall, pagoda or courtyard through its architectural and religious layers",
      "Choose a higher route or a timber-architecture excursion only when it adds a suitable distinct subject",
    ],
    planningNotes: [
      "Separate the Taihuai temple day from higher terraces and outlying timber buildings",
      "Check the actual maximum and sleeping elevations, steps and individual suitability",
      "Confirm the room, current access and full gateway transfer before fixing the sequence",
    ],
    arrival:
      "Research dated trains and the complete onward road from the exact station to the booked property. Wutaishan station is not the central temple cluster. If a Taiyuan or another airport gateway is proposed, confirm the operating flight and full remaining journey. Keep principal halls and specialist interpretation off uncertain arrival windows. Current mountain traffic and weather can change the final leg, so use a realistic pickup-to-room plan and a protected onward departure margin.",
    gettingAround:
      "Choose a coherent temple sequence with actual entrances, steps, seating, toilets, meals and pickup. Current scenic-area and monastery traffic arrangements determine where vehicles can go. Higher-terrace services require a separate route and suitability assessment; a private car does not confer unrestricted mountain access. A guide's religious or architecture knowledge should be agreed, and is different from a driver. Adjust calmly around worship, conservation work and changing visitor areas.",
    stayStrategy:
      "A settled two- or three-night stay can reduce luggage moves and allow thoughtful temple visits. Choose the actual Taihuai or approach-road room around comfort and the main subject, with heating, hot water, meals and pickup assessed. An outlying architecture route may call for a different road pattern rather than repeated returns to one remote room. High-end value comes from interpretation, rest and dependable arrangements rather than an invented exclusive religious encounter.",
    firstTimerNote:
      "Begin by deciding whether your interest is Buddhist culture, historic timber buildings or the higher mountain landscape. Those interests can be combined with enough time, but they are not one standard physical experience. A few temples understood well can provide a more rewarding introduction than a hurried effort to complete every summit and hall.",
    faqs: [
      {
        question: "Is Mount Wutai worth visiting without climbing the five terraces?",
        answer:
          "Yes. A selected Taihuai temple visit can be a substantial cultural experience in its own right. The higher terraces are a separate altitude, weather and transport decision. Choose them only when the interest and individual suitability justify the route.",
      },
      {
        question: "How many nights should I spend at Mount Wutai?",
        answer:
          "Two nights give one focused full day for selected temples; three allow two distinct days or a gentler pace. Higher routes and outlying timber temples need their own travel and visitor time. One night is selective and depends on useful arrival and departure hours.",
      },
      {
        question: "Where should I stay for Mount Wutai temples?",
        answer:
          "Compare a specific Taihuai-area room with a named approach-road property using the actual temple route, heating, hot water, meals and pickup. County-town and station hotels are different bases. A broad mountain or scenic-area address does not establish a short walk to the main temples.",
      },
      {
        question: "Is Mount Wutai suitable for travelers with limited mobility?",
        answer:
          "Suitability depends on the chosen temples, room and current visitor routes. Thresholds, steps and standing can matter even below the higher terraces. Assess the actual elevations and individual health needs as well as walking; a private car does not make the route step-free or remove altitude exposure.",
      },
      {
        question: "Can I visit Foguang Temple and Nanchan Temple from Taihuai?",
        answer:
          "Research them as separately routed architecture visits with current access, complete roads and useful opening hours assessed. They are not neighboring parts of one central temple walk. Choose whether the specific buildings and interpretation justify a separate day or a different regional road sequence.",
      },
      {
        question: "Can I photograph inside Mount Wutai temples?",
        answer:
          "Follow the current instructions at each temple and hall. Public admission does not establish permission to photograph interiors, sacred objects or people. Ask when uncertain and respect worshippers; private guiding does not override the rules.",
      },
      {
        question: "Does Wutaishan railway station serve the temple entrance?",
        answer:
          "No. It is a transport gateway requiring a separate onward road to the actual hotel and temple area. Check the dated service and full transfer, not just the mountain name on a ticket. Compare the whole journey with other appropriate gateways for your route.",
      },
      {
        question: "Can I arrange a private ceremony or monk meeting?",
        answer:
          "Do not assume such access is available or included. Religious institutions and clergy decide their own arrangements. A useful cultural visit can rely on public temples and respectful interpretation without a promised personal encounter or private ritual.",
      },
    ],
    culturalStory: {
      title: "Look at a sacred landscape through different living traditions",
      paragraphs: [
        "Mount Wutai is associated with Manjushri and encompasses a Buddhist landscape rather than a single architectural style or one unchanging institution. Different temple traditions and later patrons have shaped what visitors see. A prepared guide can connect a hall, pagoda or ritual space to that wider history while separating documented evidence, religious belief and later presentation. That is more useful than applying the oldest founding date to every building.",
        "The visitor is also entering places where worship continues. Give people space, follow instructions and let the day accommodate the institution's rhythms. A public ceremony is not a performance ordered for a tour group, and an attractive courtyard is not permission to enter private rooms. Understanding those boundaries can deepen the experience without requiring special access or a personal meeting with clergy.",
      ],
    },
    foodStory: {
      title: "Plan warm meals and discuss ingredients explicitly",
      paragraphs: [
        "A mountain temple day benefits from a proper seated meal and a place to rest rather than a rushed snack between long approaches. Shanxi noodles can provide a useful regional starting point, while the actual kitchen and available dishes should lead the order. Ask what food is served near your hotel in the evening and when breakfast begins. Temple-associated vegetarian meals, where genuinely available to visitors, are a specific service rather than an automatic inclusion in every stay.",
        "A vegetarian label still needs checking for the guest's requirements: wheat noodles, soy, sesame, nuts and shared preparation may matter. Elsewhere, a vegetable dish may use meat stock, and a temple-area address does not certify every restaurant as vegetarian or halal. Serious allergies, coeliac needs and other strict diets require a specific kitchen's confirmed capacity and a workable alternative before reaching a limited-choice mountain base.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Complete the gateway road and settle in",
        description:
          "Reach the booked room, eat and rest. A modest orientation may fit if actual arrival, altitude suitability and opening hours allow it. Keep the principal temple sequence and any specialist session off an uncertain late arrival.",
      },
      {
        day: "Full day 1 / selected Taihuai temples",
        title: "Choose different subjects rather than every entrance",
        description:
          "Follow a coherent group of currently available temples with interpretation, walking breaks and lunch. Consider Xiantong and the Tayuan pagoda setting, adding a more demanding approach only when it fits the guests. Respect worship and keep a worthwhile shorter alternative.",
      },
      {
        day: "Full day 2 / for a three-night or longer plan",
        title: "Select a distinct second chapter",
        description:
          "Choose further temple depth, a separately assessed higher route or an outlying timber-architecture subject with its complete roads and current access checked. Do not require the terraces, Foguang and Nanchan together. The appropriate choice depends on interest, health, weather and useful time.",
      },
      {
        day: "Departure / onward Shanxi or another gateway",
        title: "Protect the complete final connection",
        description:
          "Allow checkout, the actual mountain road and the ticketed gateway transfer. Continue to a separately planned Taiyuan, Datong or other chapter. This outline is illustrative, not a published package or guarantee of rooms, halls, terrace services, ceremonies or current operation.",
      },
    ],
  },
};
