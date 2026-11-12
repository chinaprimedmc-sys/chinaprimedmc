import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/dunhuang.svg",
  alt: "Dunhuang stay-planning diagram comparing a town base, a Mingsha Mountain hotel and a longer western excursion; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const dunhuangGuide: ExpandedDestination = {
  id: "dunhuang",
  name: "Dunhuang",
  region: "northwest",
  kicker: "Buddhist cave art, an oasis city & a considered desert stay",
  description:
    "Plan Dunhuang around a meaningful Mogao Caves visit, the right hotel and manageable desert time, then decide whether a longer Silk Road journey adds the depth you want.",
  stay: "3–4 nights",
  bestFor: "Buddhist art, Silk Road history and desert landscapes",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "mangya",
    "kashgar",
    "xian",
    "zhongwei",
    "zhangye",
    "jiayuguan",
    "datong",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Dunhuang Travel Guide: Mogao Caves & Desert Stays",
    seoTitle: "Dunhuang Travel Guide: Mogao Caves & Hotels",
    seoDescription:
      "Plan Dunhuang with Mogao Caves booking questions, town and desert hotel choices, Mingsha Mountain advice and realistic Silk Road connections.",
    answer:
      "Dunhuang is an oasis city in western Gansu, best known for the Buddhist paintings and sculpture of the Mogao Caves and the dunes near Mingsha Mountain and Crescent Moon Spring. Visit for the relationship between art, religion, patronage and Silk Road exchange, with desert scenery as a complementary chapter. Dunhuang is the city and wider travel area; Mogao is a particular heritage site outside the center. A worthwhile stay gives the cave visit proper attention rather than fitting it between a long arrival and a departure.",
    stayAnswer:
      "Three nights usually give two full days: one centered on Mogao and another for selected desert or oasis interests, with breaks in the heat. Four nights allow more art context, a quieter hotel stay or a separately chosen western excursion. Two nights can work for a selective introduction if the cave reservation and arrival schedule align. Do not assume the arrival afternoon can absorb Mogao or that a long drive west leaves time for another complete sightseeing day.",
    hotelAnswer:
      "Choose a Dunhuang town base for straightforward meals and access to city services. Compare Mingsha Mountain-area properties when the particular hotel's setting and time there matter, checking the actual dune view and scenic-area approach. A remote desert camp is a different proposition: verify bedding, bathroom, temperature control, meals, electricity and the final vehicle transfer. A hotel described as desert-facing is not automatically inside the dunes, beside Crescent Moon Spring or a private desert experience.",
    sightseeingQuestion: "How should you plan a Mogao Caves visit?",
    sightseeingAnswer:
      "Start with the official visitor arrangements for your date and identity document, then establish the ticket category, reporting location, language and what the booked visit actually includes. Standard, restricted or specially arranged visits may have different conditions; do not assume a private city guide can choose caves, extend time inside or secure specialist access. The site's staff control the cave route and conservation rules. Keep sufficient time for the visitor process, any included interpretation or transfers, and the guided visit itself.",
    visitorResources: [
      {
        label: "UNESCO: Mogao Caves",
        href: "https://whc.unesco.org/en/list/440/",
        scope:
          "Background on the site's Buddhist art, history and World Heritage significance. This is not a source for current cave selections, ticket availability, language services or special access.",
      },
      {
        label: "Dunhuang Academy",
        href: "https://www.dha.ac.cn/",
        scope:
          "Institutional background and the starting point for official site notices. Confirm current visitor instructions and authorized reservation channels for the travel date; the homepage does not establish a particular booking or private access.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Dunhuang stay with the actual hotel, guiding, road transfers, admissions and onward travel listed in the proposal. Ask for the Mogao visitor category and language arrangements in writing. Private road service and an accompanying guide remain separate from the heritage site's own group, guide and cave rules. A researcher meeting, conservation visit, special cave or private opening requires specific documented authorization and must not be assumed from a premium tour description.",
    routeAdvice:
      "Use Dunhuang as a focused art-and-desert stay or a chapter in a longer Gansu itinerary. Zhangye and Jiayuguan can add distinct landscape and frontier-history subjects, but their travel days and hotels need planning rather than being treated as nearby half-day additions. Xi'an can provide an earlier imperial-capital context through a separately checked connection. There is no published Dunhuang package recommended on this page; the outline is illustrative and a tailored proposal should specify the exact route and services.",
    practicalPlanning: {
      timing:
        "Let the confirmed Mogao visit determine the day around it. Keep a meal and rest before a selected dune outing, rather than treating every period of daylight as touring time. A western route toward Yumen Pass or the Yadan landscape is a substantial separate road day with limited opportunities to improvise services. Match it to your interests, comfort and actual conditions, not merely a desire to collect all Dunhuang attractions.",
      walking:
        "Mogao visits can involve standing, steps and moving between caves under site instructions; check the actual arrangements for mobility needs. Sand walking is harder than the same distance on a paved path, and dune ridges can be steep and exposed. A visit to Crescent Moon Spring does not require committing everyone to a strenuous dune climb. Plan shade, water, sun protection and a shorter alternative, especially for children or anyone sensitive to heat.",
      cost: "Compare the actual Mogao visit category and interpretation, hotel room, guide and vehicle hours, admissions and internal transport. A long western drive, desert camp or additional art-focused service needs its own specification. Camel rides, off-road activities, performances and photography sessions are not automatically included in a private tour. A higher price should correspond to identifiable comfort, time or interpretation, not an unsupported promise of restricted access.",
    },
    attractions: [
      "Mogao Caves",
      "Mingsha Mountain and Crescent Moon Spring",
      "Dunhuang Museum",
      "Selected Dunhuang oasis and town visits",
      "Yumen Pass or Dunhuang Yadan as a separate western excursion",
    ],
    stays: [
      {
        label: "2 nights: a selective art-and-desert introduction",
        advice:
          "Protect the confirmed Mogao visit and one manageable landscape outing. This works only when arrival and departure genuinely support them; it does not comfortably include every western site or a remote camp move.",
      },
      {
        label: "3 nights: two full days with room to pause",
        advice:
          "Separate the principal art visit from additional oasis or desert time. Choose a museum or town interest for context and retain a useful break. Weather and site conditions still determine what can happen on each day.",
      },
      {
        label: "4 nights or more: add a distinct subject",
        advice:
          "Choose a western frontier or landscape day, deeper art context, or genuine time at a carefully selected property. More nights should improve the experience rather than simply add more exposed driving or promise a second cave visit without a booking.",
      },
    ],
    hotelAreas: [
      {
        name: "Dunhuang town and central neighborhoods",
        advice:
          "Useful for a wider choice of meals, city services and uncomplicated road pickups. Check room noise and the actual street if you want to be near evening markets. Being central does not put Mogao within walking distance or guarantee an early breakfast before a timed visit.",
      },
      {
        name: "Mingsha Mountain surroundings",
        advice:
          "Consider a particular property for its outlook, room and hotel time. Confirm whether the view is from the booked room, how the scenic-area entrance is reached and what meals are available. A nearby dune does not make public access private or remove transport and ticket requirements.",
      },
      {
        name: "Separately arranged desert camp or remote stay",
        advice:
          "Choose only after reviewing the exact location, road and final transfer, bathroom, heating or cooling, dust protection, power and dinner. Distinguish a short activity camp from accommodation suitable for an overnight. Quiet, darkness and clear skies cannot be established by a tent photograph alone.",
      },
    ],
    tradeoffs: [
      {
        title: "Art interest should determine the Mogao arrangement",
        advice:
          "For a first visit, coherent historical explanation may matter more than the number of caves. If a particular period or painting is central to your trip, ask what an authorized visit can actually accommodate before booking the wider itinerary. Special categories are subject to their own access and conservation conditions; an accompanying private guide cannot substitute a desired cave for a closed one.",
      },
      {
        title: "Choose a dune experience, not an activity bundle",
        advice:
          "Mingsha Mountain and Crescent Moon Spring can be appreciated through a selected walk and viewpoint. A camel ride, strenuous climb or motor activity changes the day and needs separate consideration of operation, comfort and suitability. Travelers can choose different levels of exertion. Follow designated routes and do not promise that a popular scenic area will be empty at sunset.",
      },
      {
        title: "Western ruins and Yadan need their own road decision",
        advice:
          "Yumen Pass, other frontier remains and Yadan formations address different interests from the decorated Buddhist caves. Distances, exposed weather and limited services matter as much as the list of stops. Choose a coherent route with food, water and a realistic return, rather than attaching every western site to a Mogao morning or fixed departure.",
      },
      {
        title: "Conservation shapes the visit and the photographs",
        advice:
          "Observe the site's current rules for photography, lighting, bags and behavior; do not plan on photographing inside the caves. The fragile surfaces and controlled visitor process are part of why access is managed. Use authorized reproductions or museum interpretation for closer study where available. Desert light and star photographs remain dependent on conditions, not the price of the hotel.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "mangya",
        advice:
          "Mangya adds a distinct western Qaidam landscape decision: its own Emerald Lake, Aiken Spring and a Huatugou base. Compare the complete road stages, overnight elevations and actual rooms before adding it. It is not a local excursion, and the guide separates ground views from aerial imagery and any Lenghu extension.",
      },
      {
        slug: "kashgar",
        advice:
          "Kashgar adds a different southern Xinjiang oasis-city chapter, with old-city interpretation, Uyghur food and craft interests. Give the city its own nights and use actual transport rather than treating it as a nearby Gansu extension. Any Pamir route is another separately reviewed decision, and the existing Ningxia product does not include Xinjiang.",
      },
      {
        slug: "datong",
        advice:
          "Datong's Yungang Grottoes provide a different Northern Wei sculptural chapter from Mogao's cave-art tradition. This is a thematic connection across northern China, requiring a real transport plan and separate nights rather than a local extension or a substitute booking.",
      },
      {
        slug: "jiayuguan",
        advice:
          "Jiayuguan adds Ming frontier history and selected wall sites elsewhere on the corridor. A full circuit is not an extra visit within a Mogao day. Choose a stop or overnight around the actual transport, walking ability and protected cave reservation.",
      },
      {
        slug: "zhangye",
        advice:
          "Zhangye adds colorful Danxia, contrasting rock forms and its own city culture. Treat it as a separate corridor stay, potentially with a distinct Jiayuguan chapter, and allow the actual rail or road travel. A park visit in Zhangye is not an extra afternoon within a Dunhuang cave day.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an adds imperial-capital history and an eastern context for a Silk Road journey. Compare actual flights or rail journeys with their complete transfers; it is not a short local connection. Give each city full days rather than counting an intercity travel day as a cave or Terracotta Army day.",
      },
      {
        slug: "zhongwei",
        advice:
          "Zhongwei offers a different Yellow River and Tengger Desert chapter. Include both only when the river setting, lodge and wider route justify another desert stay. This is a separate Ningxia destination, not a nearby Dunhuang excursion, and the existing Ningxia product does not include Dunhuang.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring and autumn can suit a balance of art and outdoor time, with variable wind and temperatures. Summer can bring intense heat and strong sun, so plan rest and shorter exposed walks. Winter can be cold, with reduced services or different site arrangements that need checking before booking. Sand and wind may affect outdoor plans in any season. Build the stay around the art and selected landscape interests rather than a guarantee of sunset colors, stars or a particular weather window.",
    orientation:
      "Dunhuang town, Mogao Caves, Mingsha Mountain and the western desert excursion routes are separate locations. The airport and Dunhuang railway station require their own transfers. Liuyuan and Liuyuan South, sometimes considered in wider rail planning, are not central Dunhuang arrivals and add a substantial road leg. Confirm the station name before selecting a train; a convenient timetable elsewhere on the corridor may not create a convenient arrival at the hotel.",
    experiences: [
      "Explore Buddhist cave art through the authorized Mogao visit, with history and language arrangements chosen deliberately",
      "See Mingsha Mountain and Crescent Moon Spring at a level of walking that fits the group",
      "Pair an oasis meal and museum context with a separately chosen Silk Road landscape or frontier-history day",
    ],
    planningNotes: [
      "Establish Mogao booking category, identity-document process and language before setting the sightseeing order",
      "Distinguish Dunhuang station from Liuyuan-area stations and include the complete road transfer",
      "Review heat, sand walking and the real comforts of a desert overnight before adding activities",
    ],
    arrival:
      "Use the airport or named railway station on the actual ticket and include baggage and hotel transfer time. Check seasonal schedules instead of assuming a direct flight from every major city. When a journey uses Liuyuan or Liuyuan South, assess the additional road transfer before comparing it with Dunhuang station. Keep Mogao's fixed visitor process away from an uncertain arrival; a late arrival can still work well when the first evening is left simple.",
    gettingAround:
      "A planned road vehicle helps connect the town, cave visitor facilities and desert interests, but site shuttles, guided cave access and sand walking remain separate. Establish where the driver can drop off and collect you, what internal transport is included and how long the quoted service lasts. A long western outing should have a clear route, rest stops, food and weather alternative. Do not improvise off designated desert roads or treat a scenic transfer as unrestricted dune driving.",
    stayStrategy:
      "Choose one comfortable base for a short stay unless an overnight elsewhere is a real highlight. Check sleeping comfort, dust, temperature control, bathroom, breakfast time and the ability to return for a midday rest. A hotel near the dunes can be worthwhile if you have time to enjoy it. For a remote night, request the actual facilities and final approach in writing; a camp is not automatically equivalent to a fully serviced hotel, however attractive its setting.",
    firstTimerNote:
      "Dunhuang rewards some preparation. A brief introduction to Buddhist imagery and the role of merchants and donors can make a controlled, finite cave visit far more meaningful. Ask what to look for before entering, then use time afterward for questions. Desert activities are optional: a traveler can have an excellent Dunhuang stay without riding a camel, climbing a steep dune or sleeping in a tent.",
    faqs: [
      {
        question: "How many days should I spend in Dunhuang?",
        answer:
          "Two full days, often with three nights, suit Mogao and selected desert or oasis interests. Add another full day for a longer western excursion, deeper art context or hotel time. Two nights require arrival, cave access and departure to align and should remain selective.",
      },
      {
        question: "How do foreign visitors book the Mogao Caves?",
        answer:
          "Use the official visitor instructions and authorized booking route for your date and identity document. Establish the ticket category, reporting point, language and included cave visit before payment. Ask your planner to confirm the actual arrangements in writing rather than relying on a general promise of Mogao access.",
      },
      {
        question: "Can a private guide arrange any Mogao cave I want?",
        answer:
          "No such access should be assumed. The heritage site's staff and conservation conditions control cave opening and routes. Any special visit requires its own authorization and confirmed terms. A private city guide or premium hotel booking does not guarantee a particular cave, a researcher meeting or a private opening.",
      },
      {
        question: "Can I take photographs inside the Mogao Caves?",
        answer:
          "Do not plan on interior photography. Follow the site's current photography and lighting rules and your site guide's instructions. Exterior photography and any separate exhibitions have their own rules; a private tour does not waive them.",
      },
      {
        question: "Where should I stay in Dunhuang?",
        answer:
          "Choose town for meals and city convenience, a Mingsha Mountain-area property for its specific room and setting, or a remote camp only after checking full overnight facilities. Confirm the real address and transfers: desert-facing, scenic-area access and a private dune stay are different claims.",
      },
      {
        question: "Do I have to climb dunes or ride a camel in Dunhuang?",
        answer:
          "No. Select a suitable walk or viewpoint around Mingsha Mountain and Crescent Moon Spring and discuss the actual surfaces and distances. Camel rides and strenuous climbs are optional, separately assessed activities. Different members of a private group can prefer different exertion levels.",
      },
      {
        question: "Is Liuyuan South station the same as Dunhuang station?",
        answer:
          "No. They are different rail gateways. Liuyuan-area arrivals add a substantial road journey to Dunhuang, so compare the complete station-to-hotel plan rather than the train time alone. Always give the driver the actual station and service details.",
      },
      {
        question: "Can I visit Zhangye and Jiayuguan as Dunhuang day trips?",
        answer:
          "Treat them as separate corridor stops with their own travel time, not nearby extras. Decide whether their landscape and frontier-history interests warrant additional nights. Compare the actual rail or road services, station transfers and usable sightseeing time before setting the order.",
      },
    ],
    culturalStory: {
      title: "Look for the people behind the paintings",
      paragraphs: [
        "Mogao is not a single-period art gallery. Its caves preserve centuries of religious expression, with differences in painted figures, sculpture, architectural space and the representation of donors. Before entering, ask for a few visual themes to follow: how stories are arranged, how figures guide attention and how patronage connects the sacred space to the society outside it. This approach gives a short selection of caves a coherent purpose without needing to see every celebrated image.",
        "Dunhuang's Silk Road importance includes the movement of ideas, materials and texts as well as trade. The manuscript discoveries associated with the Library Cave form a separate historical story; access to original objects in collections elsewhere should not be implied by a Mogao ticket. Museum interpretation and authorized reproductions can extend the conversation. The strongest private planning supports understanding before and after the site visit while respecting how the site itself is managed.",
      ],
    },
    foodStory: {
      title: "Plan an oasis meal around appetite and the day's rhythm",
      paragraphs: [
        "Noodles, lamb dishes and seasonal fruit provide several ways into Dunhuang's food. Yellow noodles, often called huang mian, are a local point of interest; toppings and accompanying meats vary, so order by the actual preparation rather than an untranslated name. Some local menus feature donkey meat, which need not be part of your introduction. Choose a seated lunch or dinner that leaves the group comfortable after standing at the caves or walking on sand.",
        "An evening market can be enjoyable for atmosphere, but it is not the only place to eat well or a guarantee of food suitable for everyone. Discuss allergens, meat choices, cooking fats, broths and preparation. Muslim-friendly dining needs the actual restaurant and relevant assurance checked, rather than being inferred from a northwest location. If sleeping outside town, arrange dinner, drinking water and breakfast around the lodging and next morning's departure before committing to the stay.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the oasis",
        description:
          "Transfer from the actual airport or station and keep the first meal straightforward. Introduce the art and confirm the next day's reporting details instead of attaching Mogao to an uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "Mogao with time to understand it",
        description:
          "Follow the confirmed site arrangement, including any visitor facilities and internal transfers. Leave room for questions and rest afterward; add only a complementary interest that genuinely fits.",
      },
      {
        day: "Full day 2",
        title: "Oasis context and a manageable dune visit",
        description:
          "Choose a museum or town interest around access and appetite. Visit Mingsha Mountain and Crescent Moon Spring with suitable walking and breaks; do not assume every optional activity or a particular sunset is included.",
      },
      {
        day: "Optional extra full day",
        title: "Choose a distinct western journey or hotel time",
        description:
          "Consider Yumen Pass or a Yadan-focused road day with its full distance, supplies and weather plan. Alternatively retain the day for art context or a slower stay. This needs additional usable time and is not part of a two-full-day outline.",
      },
      {
        day: "Departure",
        title: "Continue along a deliberate route",
        description:
          "Allow the complete gateway transfer or onward corridor journey. This is a planning outline, not an existing package, and every optional visit or lodging change needs its own confirmation.",
      },
    ],
  },
};
