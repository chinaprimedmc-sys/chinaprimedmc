import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/guiyang.svg",
  alt: "Guiyang planning schematic distinguishing city context, a separate Qingyan outing and actual provincial connections; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const guiyangGuide: ExpandedDestination = {
  id: "guiyang",
  name: "Guiyang",
  region: "southwest",
  kicker: "Guizhou's city introduction, with the wider province given its own time",
  description:
    "Plan Guiyang for provincial collections, regional food and a selected Qingyan visit, comparing hotel districts, wet-weather options and complete Guizhou connections.",
  stay: "2 city nights; 3 with a distinct separate outing",
  bestFor: "Guizhou context, regional food and a considered start to village or landscape journeys",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["fanjing-mountain", "xingyi", "libo", "zhaoxing", "zhenyuan", "chishui"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Guiyang Travel Guide: Food, Qingyan & Where to Stay",
    seoTitle: "Guiyang Travel Guide: Food, Qingyan & Hotels",
    seoDescription:
      "Plan Guiyang with museum and food choices, Qingyan Ancient Town, hotel areas and full station transfers. Compare separate Libo, Zhaoxing and Zhenyuan stays.",
    answer:
      "Guiyang (贵阳), the capital of Guizhou, can provide useful provincial context and a comfortable city base before a separate landscape or village chapter. Two nights give one full day for a relevant collection, selected public streets and regional food. Three nights can add Qingyan Ancient Town or another distinct outing without rushing it between trains. The central city, Guanshanhu district, Qingyan in Huaxi and the main transport gateways are different planning points. Guiyang is not a convenient single base for every Guizhou attraction: Libo, Zhaoxing, Zhenyuan and Chishui deserve their own routes and useful nights.",
    stayAnswer:
      "One night may be practical for a connection but can leave little beyond dinner and rest. Two nights allow a focused city introduction with a collection and food. Three nights support Qingyan or another substantive interest on a separate day. If village or karst scenery is the sole priority, keep Guiyang's role modest instead of adding redundant city nights. Count actual gateway transfers and dated onward services. A long travel day through the province should not also be described as a full Guiyang day, a complete village visit and an effortless hotel move.",
    hotelAnswer:
      "Compare a specific central Nanming or Yunyan address for city meals and selected public streets with a Guanshanhu property chosen for room comfort, the provincial museum or a practical rail sequence. A Qingyan-area stay provides a different setting in Huaxi, not the same city evening. An airport- or station-oriented hotel solves another transport need. Check the quoted room, quiet, heating or cooling, bathroom, lift and breakfast. Districts are broad: use actual addresses and all daily journeys rather than assume a modern hotel, old-town label or station proximity gives every advantage.",
    sightseeingQuestion:
      "Should you choose Guiyang city, Qingyan Ancient Town or Qianling Mountain?",
    sightseeingAnswer:
      "Choose the city for a relevant museum collection, a coherent street or riverside route and food. Guizhou Provincial Museum is in Guanshanhu, separate from the central Jiaxiu Pavilion setting; confirm current exhibitions and opening. Qingyan is a distinct Huaxi outing for selected lanes, buildings and regional history, with original fabric, restoration and present commerce explained. Qianling Mountain Park offers another mix of walking, slopes, religious interest and wildlife; it is not automatically a flat urban stroll. Choose one meaningful contrast rather than promise every setting in one short day. A canyon or cave attraction such as Tianhetan is another separate route and access decision, not an obligatory add-on to Qingyan.",
    visitorResources: [
      {
        label: "Guiyang municipal government",
        href: "https://www.guiyang.gov.cn/",
        scope:
          "City context and public notices, mainly in Chinese. Check the actual institution or operator for current exhibitions, reservations, Qingyan visitor areas, park routes and local transport. City information does not establish a particular host, hotel room or privately accessible interior.",
      },
      {
        label: "Guizhou provincial government",
        href: "https://www.guizhou.gov.cn/",
        scope:
          "Provincial background and public-service information. The province contains distinct destinations with different roads and bases. Confirm individual sites, local cultural arrangements, weather-related access and services separately; a regional description is not proof that every attraction works as a Guiyang day trip.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services, full station names and tickets. Guiyang North, Guiyang East and Guiyang station are distinct gateways. The train arrival for a county or scenic region still needs a road transfer to the actual hotel or entrance.",
      },
    ],
    serviceScope:
      "A proposal should name the hotel and room, actual airport or station, complete transfers, selected museum and city route, guide language and meal basis. Qingyan, Qianling Mountain and a cave or canyon activity need their own access and walking descriptions. A hosted cultural session, religious interior, private meal or craft demonstration requires consent and an available provider; a provincial museum display does not imply access to the communities represented. A private guide does not guarantee a reservation, closed-area entry, a ceremony or an empty old town. Existing products elsewhere on the site should not be assumed to contain any of these city or provincial services.",
    routeAdvice:
      "Use Guiyang as a considered city introduction or a transparent transport gateway before separately chosen Guizhou chapters. Libo offers forested karst and water routes; Zhaoxing provides a different Dong-village setting; Zhenyuan has a river-town focus; Chishui lies in another part of the province. Select meaningful contrasts and full nights rather than attempt all of them from one hotel. No matching published Guiyang product is recommended here. Request a tailored route with dates, arrival and departure bookings, cultural or food interests, walking needs, room priorities and desired pace. The full route should explain every substantial transfer.",
    practicalPlanning: {
      timing:
        "Start with the actual museum opening and gateway journeys, then add a coherent city walk and seated meal. Keep Qingyan separate when a proper town visit is wanted, including the Huaxi road journey and any current entry arrangements. A wet day may favor an available collection and a good meal, but not every indoor venue is open or reservable at short notice. Do not attach a weather-dependent canyon or cave service to an essential departure without a workable alternative and full return margin.",
      walking:
        "City streets add crossings, thresholds and uneven paving; galleries involve standing. Qingyan's stone lanes, slopes and wall sections have different demands from a short level-looking photo stop. Qianling Mountain routes require an actual ascent and return assessment, and wild macaques should not be fed, touched or approached for photographs. Cave or canyon outings add separate steps, wet surfaces, confined sections or boat boarding. A private car does not remove every walk, and a scenic shuttle does not prove a full route is step-free.",
      cost: "Compare the exact room, breakfasts, complete transfers, guide hours and named admissions. Clarify museum reservation support, any selected Qingyan interiors or wall sections, and actual park transport where applicable. A cave outing, boat, performance, hosted meal or specialist session is a separate service question, not implied by a broad city tour. A higher quote should explain better comfort, interpretation and timing without guaranteeing closed access or adding compulsory shopping under a cultural label.",
    },
    attractions: [
      "Guizhou Provincial Museum in Guanshanhu, chosen for actual current collections",
      "Jiaxiu Pavilion's riverside setting and a selected central-city route, with interior access confirmed separately",
      "Qingyan Ancient Town in Huaxi as a distinct history and walking outing",
      "Qianling Mountain Park on a route matched to slopes, wildlife boundaries and current access",
      "A thoughtful regional food interest with a suitable actual kitchen",
      "Tianhetan or another named cave-and-water landscape only with its actual service format reviewed",
      "Libo, Zhaoxing, Zhenyuan or Chishui as separate provincial chapters",
    ],
    stays: [
      {
        label: "1 night: a connection and a useful meal",
        advice:
          "Choose the correct gateway and a comfortable room with straightforward meals. A late arrival and early departure do not amount to a city introduction. Keep any short walk optional and avoid making an important reservation depend on uncertain transport.",
      },
      {
        label: "2 city nights: one focused full day",
        advice:
          "Give a relevant collection and one city interest proper time, with food and rest. Choose one base around the actual visits and onward connection. Avoid a checklist that spends the useful day crossing between every district.",
      },
      {
        label: "3 nights: add Qingyan or another distinct interest",
        advice:
          "Use the extra day for a coherent Huaxi or other named route, reviewing surfaces, access and the full return. A hill park, old town and cave service are not automatically simultaneous inclusions. Keep an appropriate wet-weather alternative.",
      },
    ],
    hotelAreas: [
      {
        name: "A central Nanming or Yunyan address / city meals and evenings",
        advice:
          "Compare exact streets, noise, room orientation, vehicle pickup and the selected public route. Nearby dining can be useful, but central is not a guarantee of quiet or proximity to the provincial museum. Check bathroom, heating or cooling and breakfast before choosing a decorative room.",
      },
      {
        name: "Guanshanhu / a particular room, museum or rail balance",
        advice:
          "Choose a named property for actual facilities and full daily journeys. The district is not one compact hotel zone, and neither Guiyang North nor Guiyang East should be treated as automatically next door. Count transfers to central evening interests and meals.",
      },
      {
        name: "Qingyan or Huaxi / a separate setting choice",
        advice:
          "Consider a specific property only when the local stay and room justify it. Check quiet, meals, steps, bathroom and road access. A traditional facade does not establish historic fabric or luxury service; the property may be less practical for repeated city or rail journeys.",
      },
      {
        name: "An airport- or station-oriented overnight / transport purpose",
        advice:
          "Use the actual terminal or ticketed station and a genuine early or late need. Confirm transfer operation, food and the room. Avoid an extra hotel move solely to reduce one theoretical leg when it adds luggage and check-in work to the whole trip.",
      },
    ],
    tradeoffs: [
      {
        title: "A gateway role and a city holiday are different",
        advice:
          "Guiyang's food and collections can justify useful nights, but a transport-only overnight is also valid. Describe the actual time honestly. Do not attach three districts and an old town to the hours between a late arrival and a fixed onward train.",
      },
      {
        title: "The provincial collection is not a private cultural encounter",
        advice:
          "A museum can introduce material culture, archaeology and different communities through actual exhibits. It does not provide permission to enter villages, homes or ceremonies. If a living cultural subject is wanted, identify the place, consenting provider, language and agreed content separately.",
      },
      {
        title: "Qingyan is a town with historical layers and commerce",
        advice:
          "Explain visible structures, surviving fabric, restoration and current use rather than promise an unchanged ancient settlement. Public lanes and ticketed interiors differ. A quiet local room or hosted interest needs evidence; a heritage label does not guarantee private access, empty streets or family hospitality.",
      },
      {
        title: "Qianling Mountain requires route and wildlife judgment",
        advice:
          "Selected park sections, a hill climb and religious visits have different effort. Review steps, weather and return. Macaques remain wild animals, not a scheduled encounter to be fed or touched. Keep food secured and follow current park instructions rather than approach for portraits.",
      },
      {
        title: "A canyon or cave service is a different activity",
        advice:
          "At Tianhetan or another selected site, name the actual walking, boat, cave or other format and current operation. Review wet steps, boarding, low-light or confined sections and suitability. A generic scenic admission should not be sold as every activity or as an easy alternative for all guests.",
      },
      {
        title: "Rain can change the plan without making the day worthless",
        advice:
          "Use an actually open collection, seated interpretation and food when outdoor routes become unsuitable. Confirm reservations and roads rather than assume any indoor place can absorb a changed group. Wet stone lanes and scenic waters need current judgment; a private vehicle is not a weather guarantee.",
      },
      {
        title: "Guizhou is not one compact day-trip circuit",
        advice:
          "Libo, Zhaoxing, Zhenyuan and Chishui lie on different routes with distinct gateway and overnight decisions. A fast intercity service may help one leg while leaving substantial final transfers. Select one or two meaningful chapters for a shorter trip and explain why each gets its own time.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "fanjing-mountain",
        advice:
          "Fanjingshan adds a forest mountain and Buddhist cultural setting through a separate northeastern Guizhou stay. Compare the dated train, actual Tongren or Tongren South gateway and full road to Jiangkou. Give the mountain its own full day and assess stairs after the cableway instead of promising an effortless day trip from Guiyang.",
      },
      {
        slug: "xingyi",
        advice:
          "Xingyi adds Wanfenglin's peak-and-field countryside and a separately assessed Maling River Gorge interest. Allow two or three useful nights and compare the actual dated connection with both hotel transfers. A Guiyang stay does not cover southwestern Guizhou, and similar scenic themes do not make every destination a local outing.",
      },
      {
        slug: "libo",
        advice:
          "Libo adds selected forested karst and Xiaoqikong water routes. Give it useful park days and a named base, comparing actual rail and road connections plus both hotel transfers. A station arrival is not arrival at the scenic entrance.",
      },
      {
        slug: "zhaoxing",
        advice:
          "Zhaoxing offers a distinct Dong-village stay, with its own room, host consent and walking decisions. Use the actual regional station and final road leg. Provincial museum context can enrich the visit but does not promise ceremonies or entry to private homes.",
      },
      {
        slug: "zhenyuan",
        advice:
          "Zhenyuan adds river-town history and a separate overnight decision, including actual room noise and any cliffside or river outing. Count the complete connection and useful evenings rather than make a distant late arrival look like a full city-and-town day.",
      },
      {
        slug: "chishui",
        advice:
          "Chishui provides red-rock and waterfall landscapes in northern Guizhou. It needs a separate route, base and walking assessment. Combine when the contrast and available nights justify the journey, not simply because both places appear under the same province.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through autumn can be useful for a city-and-provincial route, with Guiyang often considered for a less oppressive summer setting than some lower cities. That is not a guarantee of cool or dry days: rain, humidity and local heat still affect walking. Winter can feel damp and cold, making room heating important. Choose actual museum opening, route conditions and forecasts, and plan wet-weather options. Conditions at a waterfall, canyon or distant village should not be inferred from the city forecast alone.",
    orientation:
      "Guiyang is Guizhou's capital in southwest China. Central Nanming and Yunyan, Guanshanhu's museum and modern properties, Qingyan in Huaxi, Longdongbao airport and the separate North, East and central rail stations create different journeys. The broader municipal area is not one compact sightseeing core. Use full Chinese addresses and dated tickets, then distinguish Guiyang city time from separate Guizhou landscape and village bases.",
    experiences: [
      "Use a chosen collection and city route to understand Guizhou context",
      "Explore Qingyan or another distinct outing with the real walking visible",
      "Enjoy regional food and a dependable room before the next provincial chapter",
    ],
    planningNotes: [
      "Compare actual hotel addresses, museum opening and full gateway journeys",
      "Keep old-town walking, hill routes and cave or boat activities separate",
      "Choose useful nights for distant Guizhou chapters instead of forcing one city base",
    ],
    arrival:
      "Confirm Longdongbao airport and terminal, or the full ticketed station: Guiyang North, Guiyang East and Guiyang station are different. Arrange the actual exit or meeting point, luggage and hotel leg. A broad Guiyang pickup can hide the cross-city road time that shapes the day. Keep uncertain arrivals modest and avoid scheduling a difficult reservation or timed scenic service immediately after transport. For onward provincial travel, include the destination station-to-hotel or scenic-area road journey.",
    gettingAround:
      "Combine selected city walks with road or suitable urban transport, allowing the actual institution entrance and pickup. The museum, central riverfront, Qingyan and Qianling Mountain are not one continuous walking route. Agree steps, seating, toilets and how the day shortens if rain or energy changes. Scenic transport and boat or cave services have their own current conditions. Private guiding does not remove physical demands, authorize closed areas or make wild animals appropriate for contact.",
    stayStrategy:
      "Keep one comfortable city base for a short stay, choosing room quiet, bathroom, climate control, meals and all journeys before a broad central or resort label. Guanshanhu and central-city properties may each suit different schedules; a Qingyan stay needs a specific local purpose. Avoid extra hotel moves for small theoretical savings, but do not force one base to serve distant provincial parks. A dependable room and unhurried dinner can add value between more demanding travel days.",
    firstTimerNote:
      "Decide how much of Guiyang you actually want: a provincial collection, a food introduction, Qingyan or simply a practical night's rest. A good itinerary can keep the gateway modest without treating it as disposable. Select useful contrasts and give later villages and landscapes their own time. Cultural depth requires specific explanation and consented arrangements, not a provincial label or an invented promise that every community is available for private access.",
    faqs: [
      {
        question: "Is Guiyang worth visiting or just a gateway?",
        answer:
          "It can be worth two city nights for a relevant collection, regional food and selected public streets. A transport-only night is a different valid role. Decide by interests and actual usable hours rather than add a city checklist around inconvenient arrivals and departures.",
      },
      {
        question: "How many nights should I spend in Guiyang?",
        answer:
          "Two city nights provide one focused day; three can add Qingyan or another distinct outing. One may provide only dinner and sleep. Count all gateway transfers and keep separate Libo or village nights outside the Guiyang city allocation.",
      },
      {
        question: "Where should I stay in Guiyang?",
        answer:
          "Compare actual central Nanming or Yunyan addresses with suitable Guanshanhu properties through room quiet, meals, museum and gateway journeys. A Qingyan or airport stay serves another purpose. Broad district labels do not establish convenience for every visit.",
      },
      {
        question: "Is Qingyan Ancient Town in central Guiyang?",
        answer:
          "It is in Huaxi and should be treated as a distinct outing with its own road journey, selected lanes and current admission scope. A city-center hotel is not at its entrance. The historic-town label also does not mean every visible building is unchanged original fabric.",
      },
      {
        question: "Is Qianling Mountain Park suitable for gentle walking?",
        answer:
          "A selected route may suit, but assess slopes, steps, rest and return rather than assume the whole park is level. Wild macaques should not be fed, touched or approached for photographs. Follow current park instructions and choose the actual sections around the guests' needs.",
      },
      {
        question: "What can I do in Guiyang when it rains?",
        answer:
          "A currently open and reservable collection, seated cultural explanation and a good meal can form a useful alternative. Check actual opening and transfers. Rain can make stone lanes and scenic routes slippery, so do not assume a private car makes every outdoor plan suitable.",
      },
      {
        question: "Can I visit Libo, Zhaoxing and Zhenyuan from one Guiyang hotel?",
        answer:
          "They are distinct regional chapters with different roads, gateways and overnight value. Compare complete journeys and useful days. A short rail segment does not make every destination a comfortable return excursion; a shorter trip should choose the most meaningful contrasts.",
      },
      {
        question: "Are Guiyang North and Guiyang East the same station?",
        answer:
          "No. Guiyang North, Guiyang East and Guiyang station are separate arrivals, and Longdongbao airport is another gateway. Use the full dated booking and an actual meeting point for pickup, including the final hotel leg.",
      },
      {
        question: "Is a published Guiyang tour recommended here?",
        answer:
          "No matching published product is recommended. Use the outline to request a tailored route with dates, actual gateways, room and walking needs, food preferences and desired provincial chapters. Local services, reservations and hosts need confirmation.",
      },
    ],
    culturalStory: {
      title: "Use provincial context without replacing local voices",
      paragraphs: [
        "A relevant Guizhou collection can introduce archaeology, materials, craft and different cultural settings. Objects and displays need provenance and a distinction between original material, reconstruction and interpretation. One museum cannot represent every community's contemporary life. A useful guide selects subjects and leaves time for questions rather than claim that a short gallery circuit prepares visitors to understand every village in the province.",
        "Qingyan offers another way to read a settlement through its documented role, visible structures, rebuilding and current commerce. The visitor experience should respect residents, religious practice and private interiors. If a living craft or cultural session is wanted elsewhere, name the actual place and consenting host. A historical explanation, public performance and private hosted encounter are different experiences, each with its own value and arrangements.",
      ],
    },
    foodStory: {
      title: "Separate sourness, chili and dietary needs",
      paragraphs: [
        "Guiyang can provide an enjoyable introduction through a suitable bowl of noodles, a selected sour-soup dish or a silken vegetable-wrap meal such as siwawa, with the preparation explained. Sourness and heat are different qualities, so choose the actual broth and condiments rather than assume every guest wants the same spicy tasting menu. A comfortable table and manageable portions can make a stronger city memory than several compulsory snack queues or a long circuit of fashionable brands.",
        "Discuss wheat, soy, peanuts, sesame, fermented ingredients, fish, pork, offal and meat stocks with the actual kitchen. A vegetable wrap does not establish that every dipping sauce or the whole meal is vegan or allergy-safe. Mild preparation cannot remove ingredients already present in a broth. Serious requirements need demonstrated kitchen capacity and an alternative. A hosted kitchen visit, private meal or demonstration requires consent and a confirmed provider rather than being implied by a food-tour label.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual room and settle into a useful first meal",
        description:
          "Meet at the full ticketed station or booked terminal and complete the hotel transfer. Keep any central walk short and optional. Check the next day's actual collection and reservation rather than make a timed visit depend on uncertain arrival.",
      },
      {
        day: "Full city day",
        title: "A chosen collection, one city interest and time for food",
        description:
          "Give the relevant display proper explanation, allowing cross-city travel, lunch and rest. Add a selected public street or riverside route when conditions suit. Rain can shift the balance toward a currently available indoor subject.",
      },
      {
        day: "Optional second full day",
        title: "Qingyan or another distinct, suitable outing",
        description:
          "With a third night, plan a coherent Huaxi route or another actual interest with its full return. A hill park, cave boat and old town are separate options, not mandatory simultaneous inclusions. Confirm weather alternatives and physical demands.",
      },
      {
        day: "Departure",
        title: "Begin a separately planned Guizhou chapter",
        description:
          "Allow the correct station or airport leg and the next destination's final road transfer. This two-night outline with an optional third night is illustrative, not a published package or guarantee of reservations, scenic operation, ceremonies or private hosts.",
      },
    ],
  },
};
