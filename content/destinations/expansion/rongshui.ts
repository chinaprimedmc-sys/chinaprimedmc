import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/rongshui.svg",
  alt: "Original Rongshui planning schematic distinguishing county-town accommodation, selected village visits and a separately assessed Yuanbao Mountain route; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const rongshuiGuide: ExpandedDestination = {
  id: "rongshui",
  name: "Rongshui",
  region: "south",
  kicker: "Give northern Guangxi's mountain communities time and context",
  description:
    "Plan Rongshui for village culture, the Beijiang landscape and a considered mountain stay. Compare county-town comfort, rural rooms and distinct Yuanbao Mountain routes.",
  stay: "2 nights for one selected local day; 3 for a distinct second interest",
  bestFor: "Village interpretation, rural landscapes and a slower northern Guangxi journey",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["liuzhou", "sanjiang", "longji-rice-terraces"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Rongshui Travel Guide: Villages, Mountain Routes & Stays",
    seoTitle: "Rongshui Guide: Villages, Mountains & Hotels",
    seoDescription:
      "Plan Rongshui in Guangxi: village visits, Beijiang scenery, county-town or rural hotels, two or three nights and a separately assessed Yuanbao Mountain route.",
    answer:
      "Rongshui, a Miao autonomous county in northern Guangxi, suits travelers interested in mountain communities, rural landscapes and the Beijiang river corridor. Two nights allow one full day for a selected village and landscape route. Choose between the county town's practical services and a rural property's setting after checking the roads, room and meals. Yuanbao Mountain needs a separate walking and access plan. Rongshui and nearby Rong'an are different counties, so check the station name carefully.",
    stayAnswer:
      "Two nights suit one well-chosen village-and-landscape day between arrival and departure. Three nights allow a genuinely different second interest or a slower stay at a suitable property. One night needs favorable travel hours and a narrower introduction. Decide the actual village and road sequence before fixing the number of nights: the county name does not make every settlement close to town. A mountain walk or remote overnight should determine its own required days rather than be squeezed into spare hours.",
    hotelAnswer:
      "Compare a named county-town hotel for dependable meals, pickup and facilities with a specifically located rural property for time in the landscape. Check the actual bedroom, sound insulation, bathroom, hot water, heating or cooling, stairs and breakfast. A timber-style room is not proof of historic fabric or quiet sleep. In a rural stay, establish dinner, language support, final road access and luggage. A room advertised with the Rongshui name may be far from your chosen village or the Yuanbao Mountain approach; use the full address and route.",
    sightseeingQuestion: "Should I choose a village day, Beijiang scenery or Yuanbao Mountain?",
    sightseeingAnswer:
      "Start with one selected public village route and good interpretation when culture is the priority. Add Beijiang landscape where it fits the actual road and walking plan; river scenery does not require a boat ride. Choose the Yuanbao Mountain direction only when a particular open route, physical demands and suitable base have been assessed. These are different briefs. A thoughtful village day with a willing host and a comfortable meal can be complete without a performance, a long trek or a change of hotel.",
    visitorResources: [
      {
        label: "Rongshui county government",
        href: "https://www.rongshui.gov.cn/",
        scope:
          "County background and dated local notices, mainly in Chinese. Confirm the chosen village route, mountain access, event and accommodation with the responsible local contacts. A county overview does not establish private-home access, an operating boat or an open hiking trail.",
      },
      {
        label: "Liuzhou municipal government",
        href: "https://www.liuzhou.gov.cn/",
        scope:
          "Wider geographic and public-notice context. Rongshui county, Liuzhou city and Sanjiang are distinct destinations; a shared municipal boundary does not establish a short connection or identical cultural traditions.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and the exact station used in the proposal. Rongshui and Rong'an are different names and locations. Add the complete road transfer to the actual room or village rather than equate a county rail arrival with arrival at the visit.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the village or landscape route, actual room, guide and interpreter roles, meals, admissions where applicable and complete vehicle days. A hosted conversation needs willing participants, a clear purpose and agreed payment where appropriate. Define whether an event is a public festival, a ticketed presentation or a separately arranged demonstration. A mountain outing needs a specific permitted route and a provider suited to the activity. Private guiding does not confer entry to homes, religious practice, protected areas or production spaces.",
    routeAdvice:
      "A tailored Rongshui visit works best around a clear cultural interest: settlement architecture, textiles, music or everyday livelihoods. Share that interest alongside your dates, gateway and available nights. We can assess a county-town base or rural overnight, followed by a coherent Liuzhou or Sanjiang connection. The proposal should name the selected community, interpretation and local activities. Confirm a particular host or event before making it the reason for a long journey.",
    practicalPlanning: {
      timing:
        "Choose the village and road sequence first, then protect time for translation, a seated meal and unhurried observation. A host's workday and a public festival have different schedules. Keep mountain-road travel outside the useful village hours and allow for breaks and changing conditions. Avoid filling an arrival afternoon with several remote settlements. An extra day should add a different question or a slower pace, not repeat similar staged stops.",
      walking:
        "Public village lanes can include slopes, uneven stone, steps, wet timber and road crossings. Ask about seating, toilets, shade and a shorter route. A rural room may add stairs after the main walk. A Yuanbao Mountain outing needs its own distance, ascent, descent, footing, weather and exit assessment; a mountain name does not define one standard visitor trail. Riverbanks and agricultural paths are not automatically public walking routes, and rain can justify a shorter plan.",
      cost: "Compare the exact room, complete vehicle hours, guide language, interpretation, meals and any agreed host or activity. Separate a public village walk from a hosted demonstration or festival visit. Textile purchases, performance tickets and optional boat services should be identified, not bundled into a vague cultural package. Premium value comes from understanding, a suitable room, comfortable pacing and clear arrangements rather than promises of untouched villages or exclusive access to a community.",
    },
    attractions: [
      "A selected public village route with the settlement and community identified in the proposal",
      "Beijiang / 贝江 landscape from an appropriate agreed public route or viewpoint",
      "A separately arranged textile, music or livelihood conversation with a willing provider",
      "County-town time for a dependable meal and local orientation",
      "A specifically located rural room when it adds useful landscape and village time",
      "Yuanbao Mountain / 元宝山 only through a separately assessed permitted route and base",
    ],
    stays: [
      {
        label: "1 night / a focused introduction when travel hours fit",
        advice:
          "Choose one principal question and an accessible local visit. Confirm the room and complete departure road. A late arrival and early onward journey leave little meaningful village time and should be described honestly.",
      },
      {
        label: "2 nights / one considered local day",
        advice:
          "Use a suitable base for a selected village, compatible landscape and a seated meal. Leave translation and resting time. Two nights do not mean two full days or automatic access to a remote mountain route.",
      },
      {
        label: "3 nights or a separate rural chapter / add a distinct purpose",
        advice:
          "Choose another confirmed interest, more time at the property or a specifically assessed mountain direction. A rural hotel move should improve the day's access or experience enough to justify bags and the extra road, not merely add another location label.",
      },
    ],
    hotelAreas: [
      {
        name: "County town / practical comfort and full-day excursions",
        advice:
          "Compare an actual hotel for sleep, bathroom, climate control, meals and pickup. Plot the full road to the selected village. Town can be the right base when its room and services suit the guest better than a remote overnight.",
      },
      {
        name: "A named village or Beijiang-area property / the actual setting matters",
        advice:
          "Establish the address, room view, road approach, final steps and meals. A river or village label does not prove public shore access or a short walk to the planned host. Check whether the property supports a comfortable evening as well as an attractive photograph.",
      },
      {
        name: "Yuanbao Mountain direction / a separate route-specific base",
        advice:
          "Choose only after identifying the actual open outing and its access. A property using the mountain name may not sit at the intended trailhead. Review warmth, meals, communications, luggage and the complete approach rather than infer services from a mountain-lodge description.",
      },
    ],
    tradeoffs: [
      {
        title: "Name the community rather than use a generic minority-village label",
        advice:
          "Miao identity is central to the county's name, but that does not describe every resident or settlement. Ask about the specific village, language, architecture and contemporary livelihood. Miao is a broad official category; local self-identification matters, and Hmong should not be imposed as a universal English synonym for every community. Interpretation should make people and place more understandable without calling them primitive, untouched or unchanged.",
      },
      {
        title: "A festival, a stage program and a conversation are different encounters",
        advice:
          "Lusheng music and festival traditions can be meaningful subjects when the particular community and occasion are explained. A public event follows its actual calendar; a ticketed program has defined presentation content; a hosted conversation depends on willing participants. None guarantees the others. Do not convert a lunar-calendar association into a fixed annual Western date or promise costumes and ceremonies on an ordinary village day.",
      },
      {
        title: "Textiles need material and maker questions before a purchase",
        advice:
          "If a textile interest is arranged, ask who made the actual piece, what technique is used, whether work is hand- or machine-produced and what the motifs mean to that maker. Contemporary work can be valuable without an antique story. A retail display is not automatically a household workshop or a demonstration by its producer. Keep purchases optional and agree description, price, condition and shipping separately.",
      },
      {
        title: "A river landscape does not imply an operating river activity",
        advice:
          "Beijiang scenery may be enjoyed from an agreed public route or suitable property without boarding a boat. Any cruise or raft needs the actual operator, current operation, boarding, life-saving equipment and suitability checked separately. Heavy rain can change a river outing and its banks. Do not substitute an improvised boat when the selected service cannot operate.",
      },
      {
        title: "The mountain direction needs more than a county overview",
        advice:
          "Yuanbao Mountain is not one standard half-day stroll. Select the permitted destination and actual route, identify protected-area boundaries where relevant, and review travel, terrain and help available. A scenic road or lodge description does not establish unrestricted trail access. Choose village and landscape time instead when a demanding or uncertain mountain outing does not fit the brief.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "liuzhou",
        advice:
          "Liuzhou adds manufacturing history, luosifen and the urban Liu River setting. Give that city its own useful day when those subjects matter. Review actual dated transport and both hotel transfers; Rongshui's municipal parent is not evidence that a village sits beside a city hotel.",
      },
      {
        slug: "sanjiang",
        advice:
          "Sanjiang's Chengyang area offers a distinct Dong settlement and covered-bridge subject. Compare the actual villages and questions so the stays complement each other. Plan full roads and rooms instead of treating Miao and Dong communities as interchangeable cultural stops.",
      },
      {
        slug: "longji-rice-terraces",
        advice:
          "Longji adds a terrace agricultural landscape with a separate choice of Ping'an or Jinkeng room and walking route. Choose the season and full connection before combining it with Rongshui. A regional village theme does not establish a short drive or the same field conditions.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates by the selected village, road route and purpose. Spring and autumn can suit mixed public walking and landscape time, while summer rain may affect roads, river activities and footing. Higher mountain settings have different temperatures and access constraints from the county town. Winter requires room and meal checks as well as appropriate layers. A festival-specific visit needs the confirmed local calendar and actual public arrangements; agricultural scenes and hosted activities follow real work and seasonal conditions rather than a fixed photography schedule.",
    orientation:
      "Rongshui Miao Autonomous County is administered by Liuzhou in Guangxi. It is distinct from Rong'an, and the county town, Beijiang corridor, individual villages and Yuanbao Mountain direction are separate locations. This guide covers county-base choices and selected cultural and landscape planning, not every community, protected mountain route or public festival. A modern administrative label does not define a single uniform culture across the whole county.",
    experiences: [
      "Understand a named village through public space, settlement and contemporary livelihoods",
      "Choose a landscape route and room suited to the actual roads, season and walking",
      "Explore a defined textile or music interest with willing participants and good interpretation",
    ],
    planningNotes: [
      "Identify the village, host and complete road before fixing the overnight base",
      "Keep public festivals, ticketed presentations and personal conversations distinct",
      "Assess Yuanbao Mountain separately from a county-town village day",
    ],
    arrival:
      "Compare the complete road journey from the actual Liuzhou, Sanjiang or other agreed base with any dated rail option. Use the exact booked station and distinguish Rongshui from Rong'an. Include station pickup, meals, road breaks and the final approach to the room or village. Arrival at the county station can still leave a substantial road journey to a remote village. Keep a tight onward train or flight away from an uncertain mountain-road return.",
    gettingAround:
      "Use a route with specified villages, public paths and pickup points. A private vehicle may reduce long transfers without reaching every doorway or removing steps. Check conditions and how the group returns before setting out on a longer walk. Homes, workshops, fields and religious spaces can be private; agree access and photography with the people involved rather than assume a guide can invite guests inside. River and mountain activities need their own operating assessment.",
    stayStrategy:
      "For a focused two-night introduction, a suitable county-town room can simplify service and meals. A rural overnight should earn its move through a better setting, useful local hours or a confirmed interest. Compare actual bedroom and access conditions before prioritizing atmosphere over sleep. Three nights can add depth without adding multiple hotel changes; a separate mountain chapter is planned from its route outward.",
    firstTimerNote:
      "Begin with what you want to understand, not a request to see an untouched village. Settlement, farming, textiles, music and contemporary work offer different questions. One well-interpreted public route and a comfortable meal can be rewarding without a performance or a home visit. If a particular demonstration is important, define and confirm it before travel rather than expect residents to supply it on arrival.",
    faqs: [
      {
        question: "Where is Rongshui in China?",
        answer:
          "Rongshui Miao Autonomous County (融水苗族自治县) is administered by Liuzhou in northern Guangxi. It is distinct from Rong'an County. The county town, selected villages, Beijiang corridor and Yuanbao Mountain direction have different travel requirements.",
      },
      {
        question: "Is Rongshui worth visiting?",
        answer:
          "Choose Rongshui for thoughtful village interpretation, rural landscapes and a slower northern Guangxi stay. Its value depends on the actual village, route and provider, rather than a long attraction checklist. It is less suited to guests expecting guaranteed daily festivals or effortless access to every mountain community.",
      },
      {
        question: "How many nights should I spend in Rongshui?",
        answer:
          "Two nights give one selected full local day. Three allow a distinct second interest or a slower rural stay. One night needs useful travel hours. A remote village or Yuanbao Mountain outing should determine its own road and overnight needs.",
      },
      {
        question: "Should I stay in Rongshui town or in a village?",
        answer:
          "Choose a named town hotel for its practical room and services, or a specifically located rural property when the setting and useful local time justify it. Compare sleep, bathroom, climate control, meals, steps and full road access. A village label alone does not establish comfort or a short approach.",
      },
      {
        question: "Can I visit a Miao family or see traditional music?",
        answer:
          "A hosted visit or music interest requires willing participants and separately agreed content. Public village access does not include a home or a performance. Identify the particular community and explain the encounter rather than promise every household follows the same tradition.",
      },
      {
        question: "When are the festivals in Rongshui?",
        answer:
          "Confirm the specific community, event, actual date and public arrangements for the travel year. Lunar-calendar associations do not translate to a fixed Western date every year. A public festival, a ticketed program and a separately arranged demonstration are different experiences.",
      },
      {
        question: "Is Yuanbao Mountain an easy outing from Rongshui town?",
        answer:
          "Do not assume one standard outing. Choose the precise permitted route and assess the complete road, terrain, ascent, descent, weather and base. A county overview or mountain-lodge name does not establish an open short trail or unrestricted protected-area access.",
      },
      {
        question: "Can I take a boat on the Beijiang?",
        answer:
          "Assess a specifically identified service with current operation, boarding and suitability confirmed. River scenery does not imply a boat inclusion. Water and weather conditions can change the plan, and a public landscape route can be worthwhile without a crossing or cruise.",
      },
      {
        question: "Should I visit Rongshui or Sanjiang?",
        answer:
          "Compare the actual villages and interests. Rongshui can support a selected Miao-community and mountain-landscape brief; Sanjiang's Chengyang area adds a distinct Dong settlement and covered-bridge subject. Neither represents every local resident, and combining them needs full transport and useful nights.",
      },
      {
        question: "Is there a published Rongshui tour here?",
        answer:
          "No matching product is listed. Share dates, gateways, nights, room requirements and cultural or walking interests for a tailored assessment. The sample outline is not a package or a promise of a family invitation, festival, boat or mountain access.",
      },
    ],
    culturalStory: {
      title: "Start with a place and a person, not a costume",
      paragraphs: [
        "A village becomes more understandable through specific questions: why buildings sit where they do, what the surrounding land supports, which language is used in a conversation and how people combine local work with life elsewhere. A good interpreter can connect what is visible with the experience of willing participants. Clothing, textiles and music can be meaningful parts of that account, but they should not become a shorthand suggesting every resident lives in the same way.",
        "Distinguish a public event from a demonstration prepared for visitors, and credit people for the knowledge and time they choose to share. Contemporary changes do not make a community less worthy of a visit. A conversation about today's work or a maker's decisions can be more revealing than a romantic claim that a village is unchanged. Consent, good translation and a clear purpose create depth without requiring access to someone's home or religious life.",
      ],
    },
    foodStory: {
      title: "A dependable meal gives a village day room to breathe",
      paragraphs: [
        "Choose the actual kitchen and meal time around the road and walking plan. Ask what is seasonal and what the cook prepares well instead of prescribing one supposedly universal Miao menu. Rice, vegetables and particular regional meat preparations can be discussed where genuinely served, with portions and flavors suited to the guest. A hosted meal is a separate willing arrangement; a town restaurant can also provide a comfortable and informative lunch.",
        "Discuss meat stock, soy, wheat-containing sauces, nuts and shared utensils when dietary needs matter. A vegetable-looking dish is not automatically vegetarian, and a rural kitchen may have fewer substitutes. Keep alcohol and unfamiliar dishes optional, including during any welcoming custom. Confirm breakfast before an early road departure and dinner at a remote property. Good food, a seat and time to talk can add more value than an elaborate banquet arranged mainly for photographs.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / the actual overnight base",
        title: "Complete the road and settle into a suitable room",
        description:
          "Allow the full station or intercity approach, breaks and any final luggage walk. Have a dependable meal and confirm the next day's village and provider. A late arrival is not a full cultural afternoon.",
      },
      {
        day: "Full day / a selected village question",
        title: "Understand settlement and everyday life through a public route",
        description:
          "Use an agreed village route with interpretation and time for questions. Include a hosted interest only as confirmed with willing participants. Leave a seated meal and breaks rather than hurry between several settlements.",
      },
      {
        day: "Compatible afternoon or separate second full day",
        title: "Add landscape or a defined interest deliberately",
        description:
          "Choose an appropriate Beijiang landscape route, a separately agreed maker conversation or time at the property. A mountain outing requires its own complete plan. These are alternatives, not automatic performances, boats or home visits.",
      },
      {
        day: "Departure / Liuzhou, Sanjiang or another agreed base",
        title: "Keep the whole onward journey visible",
        description:
          "Allow the complete room-to-vehicle and road or rail connection, with luggage and boarding counted. This two-to-three-night outline is illustrative, not a published package or confirmation that a festival or mountain route operates.",
      },
    ],
  },
};
