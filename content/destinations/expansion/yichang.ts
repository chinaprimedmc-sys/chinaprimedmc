import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yichang.svg",
  alt: "Original Yichang planning schematic distinguishing a Three Gorges Dam visit, a short river excursion and a multi-night Yangtze cruise, with city and actual embarkation transfers; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const yichangGuide: ExpandedDestination = {
  id: "yichang",
  name: "Yichang",
  region: "central",
  kicker: "Choose the river experience before choosing the transfer",
  description:
    "Plan Yichang around the actual Three Gorges experience: a dam visit, a selective gorge outing or a separately booked Yangtze cruise, with clear hotel and pier logistics.",
  stay: "1–2 city nights; cruise nights are a separate itinerary",
  bestFor: "Yangtze landscapes, engineering history and a well-planned Three Gorges gateway stay",
  interests: ["landscape", "heritage", "city"],
  relatedDestinationIds: [
    "jingzhou",
    "shennongjia",
    "enshi",
    "wudang-mountains",
    "wuhan",
    "chongqing",
    "zhangjiajie",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yichang Travel Guide: Three Gorges Dam, Cruises & Stays",
    seoTitle: "Yichang Guide: Three Gorges, Dam & Cruises",
    seoDescription:
      "Plan Yichang hotels and transfers, compare the Three Gorges Dam with short boats and Yangtze cruises, and distinguish city meeting points from actual piers.",
    answer:
      "Yichang (宜昌) is a city in western Hubei and a major gateway to the Three Gorges region of the Yangtze. A Three Gorges Dam sightseeing visit, a short river excursion and a multi-night cruise between the Yichang area and Chongqing are different experiences, with different tickets, meeting points and schedules. Two city nights give one full day for a focused dam or gorge interest; a cruise has its own nights and embarkation plan. The city hotel, visitor collection point and actual ship may be far apart, with road transfers involved. Choose the experience first, then the room and transport. Yichang is also a real river city, so a comfortable meal, local walk and time to settle can be more useful than adding a rushed attraction before boarding.",
    stayAnswer:
      "One night can serve a favorable arrival, a selective visit or a buffer before an actual cruise arrangement. Two nights give one full day without attaching sightseeing to uncertain rail or flight times. Three city nights need a distinct second interest, such as another properly planned landscape route or a slower stay. Count any ship nights separately: an evening departure does not mean a city hotel is included, and an early collection can remove most of a supposed free day. After disembarkation, allow the real transfer and connection time rather than book an optimistic onward departure based on the city name alone.",
    hotelAnswer:
      "For a city stay, compare a riverfront or central property in Xiling or Wujiagang with the exact room and daily route in mind. A river view can support a pleasant evening, but check road access, room noise and the actual waterfront walk. A room near Yichang East railway station serves a different gateway brief from a central dinner-and-walk base. Accommodation near the dam or a particular embarkation area should be chosen for that location, not substituted as if every Yichang address were equally convenient. Confirm the actual cruise collection or pier instructions before deciding where to sleep, with luggage and meal times included.",
    sightseeingQuestion:
      "Should I choose the Three Gorges Dam, a short boat trip or a Yangtze cruise?",
    sightseeingAnswer:
      "Choose the dam visit for engineering scale, river management and a specific current sightseeing route. Choose a short boat when its actual stretch of river, duration and boarding arrangement provide the landscape experience you want. Choose a multi-night cruise for a ship-based journey with its own cabin, meals, shore visits and pace. A short excursion does not cover the same journey as a cruise to Chongqing, and a dam ticket does not establish ship-lock or ship-lift transit. Ask what you will actually see, where you board and finish, and which transfers are included before comparing prices.",
    visitorResources: [
      {
        label: "Yichang municipal government",
        href: "https://www.yichang.gov.cn/",
        scope:
          "Local administrative, visitor and transport background, mainly in Chinese. Check dated operator instructions for the exact site, meeting point, pier, identity requirements and current access. General city information does not confirm a vessel, cabin or a particular shore program.",
      },
      {
        label: "China Three Gorges Corporation",
        href: "https://www.ctg.com.cn/",
        scope:
          "Background on the engineering organization and Three Gorges project. It is not a booking confirmation or evidence of unrestricted visitor access to working infrastructure. Current tourism arrangements require the responsible visitor operator's information.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and exact railway stations. A Yichang East arrival still requires the actual hotel, collection-point or pier transfer. Compare the complete route and connection time, not just the train segment.",
      },
    ],
    serviceScope:
      "A proposal should state whether it is a city stay, dam outing, short boat or multi-night cruise, then name the actual route, admissions, guiding and complete transfers. For a cruise, identify the vessel, travel date, upstream or downstream direction, cabin and deck, meals, shore program, optional charges and collection-to-ship sequence. Establish luggage handling and the real final approach, including any steps or gangway. Private road service does not imply private access to working dam infrastructure or a private boat. A ship-lift passage, lock transit, performance or hosted visit needs its own explicit operating confirmation; none is promised by this destination guide.",
    routeAdvice:
      "Use Yichang deliberately within the wider journey. Wuhan adds provincial collections and city neighborhoods; Chongqing provides a distinct city chapter at the other end of some multi-night cruise itineraries; Zhangjiajie is a separate mountain destination with its own transport and walking plan. No matching published Yichang or Yangtze-cruise itinerary is listed here. Existing Chongqing products do not automatically include a cruise, Yichang hotel, dam excursion or onward transfer. Share dates, exact gateways, available nights, mobility needs and whether the priority is engineering, river scenery or ship-based travel before a tailored sequence is proposed.",
    practicalPlanning: {
      timing:
        "Start with the dated site, boat or ship instructions, including identity checks, collection deadline, road transfer and actual embarkation. Keep sightseeing away from a tight boarding window. A city meeting time may precede reaching the vessel by a substantial interval, while disembarkation still leaves a road journey. River conditions, weather and operating decisions can change programs. A late-afternoon train is not automatically compatible with a same-day cruise collection, and a published arrival date does not establish the earliest safe onward flight.",
      walking:
        "Assess the actual route rather than assume a boat holiday is step-free. Piers, changing river levels, gangways, luggage approaches and shore excursions can involve steps, gradients and uneven surfaces. A ship with a lift may still have decks or activities not reached by it; check the booked cabin and guest requirements. Dam viewpoints and gorge sites have their own remaining walking. For limited mobility, obtain a specifically assessed transfer, vessel and shore plan, including what can be omitted and where a comfortable alternative exists.",
      cost: "Compare like-for-like services: the exact dam or boat route, guide duration, complete transfers and room, or the named ship, cabin, deck, meals and shore program. Identify collection transport, port or service charges, optional excursions and any gratuity policy in the actual quote. A headline cruise fare can omit items important to the guest. Premium value should be visible in cabin suitability, sleep, food, interpretation and transfer support rather than an undefined luxury label or an assumed lock passage. Exact prices and conditions require a dated proposal.",
    },
    attractions: [
      "Three Gorges Dam through a specifically identified current visitor route",
      "A selected Xiling Gorge river experience, defined by actual route and boat",
      "Sanyou Cave / Three Visitors' Cave area for a distinct literary and landscape interest",
      "An appropriate central riverside walk and a good meal within the city stay",
      "Zigui's Qu Yuan-related heritage setting as a separate direction, with site interpretation made clear",
      "A multi-night Yangtze cruise only as an independently confirmed ship itinerary",
      "Wuhan, Chongqing or Zhangjiajie as distinct onward planning chapters",
    ],
    stays: [
      {
        label: "1 city night / a purposeful gateway stay",
        advice:
          "Use it to settle after a long journey, prepare for the actual collection point or enjoy a selective visit when useful hours remain. Compare a central room with the real transfer required. Do not describe a late arrival and early cruise collection as a full sightseeing day.",
      },
      {
        label: "2 city nights / one focused full day",
        advice:
          "Choose a dam or gorge-led route, with a proper meal and manageable walking. Add a different small subject only when the actual transport and time support it. A city evening and comfortable room can make the stay more rewarding than a second distant stop.",
      },
      {
        label: "A cruise sequence / count ship and city nights separately",
        advice:
          "Plan the exact upstream or downstream program first, then add a city night only where it improves arrival, connection or local time. The two directions can have different schedules and lengths; do not assume a reversed map means an identical itinerary. Protect both ends of the journey.",
      },
      {
        label: "3 city nights / add a separate interest",
        advice:
          "Choose a second full day for a genuinely distinct landscape, literary or regional subject, with the exact route researched. Qingjiang outings in Changyang, for example, are a separate tributary-region decision, not another name for the Yangtze's Three Gorges. Avoid adding long drives merely to fill a night.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Yichang or a chosen riverfront / a real city stay",
        advice:
          "Compare the actual room view, quiet, bathroom, breakfast and access to dinner or a waterfront walk. City riverfront is not a synonym for cruise pier. Check how the chosen base connects to the dam outing or the operator's actual collection point.",
      },
      {
        name: "Yichang East station area / a gateway-focused room",
        advice:
          "Choose this when an actual train schedule or practical need justifies it. Compare the room and local dining with the cost in city time. A station-near property still needs a confirmed road plan to a site, collection point or ship.",
      },
      {
        name: "Dam-side or a named embarkation-area property / a different location",
        advice:
          "Plot the exact address and the reason to stay there. It may serve a specific itinerary but is not interchangeable with a central Yichang hotel. Confirm meal options, room comfort, onward pickup and whether the supposed proximity actually reduces the booked transfer.",
      },
      {
        name: "The booked ship / assess the cabin as accommodation",
        advice:
          "Check cabin and deck, actual balcony or window, noise exposure, bathroom, lift coverage, meals and any wanted facilities. An attractive vessel photograph does not establish the particular room. Confirm the exact ship rather than infer its standards from a generic river-cruise category.",
      },
    ],
    tradeoffs: [
      {
        title: "A collection point is not necessarily the pier",
        advice:
          "Some programs collect guests in Yichang and continue by road to a different embarkation point, including Maoping-area arrangements when specified. The meeting address, vehicle leg and actual vessel must all appear in the instructions. Do not book a room or flight on the assumption that the ship is moored beside the central hotel.",
      },
      {
        title: "Dam sightseeing does not mean cruising through the infrastructure",
        advice:
          "A visitor route can explain engineering from permitted places without including a lock or ship-lift passage. Conversely, a boat itinerary has its own route and current operating arrangements. Confirm any transit explicitly and distinguish public visitor areas from working infrastructure; a private guide does not change those boundaries.",
      },
      {
        title: "The Three Gorges name needs a real route behind it",
        advice:
          "The wider region is not one compact attraction with one entrance. A short excursion in a selected part of Xiling Gorge, a dam visit and a multi-night journey toward Chongqing cover different places. Ask for the named stretch, vessel, start and finish rather than compare products solely by a shared Three Gorges label.",
      },
      {
        title: "A river cruise and an urban river-view room are different experiences",
        advice:
          "A central hotel can provide sleep, dining choice and a city walk without committing to several ship nights. A cruise adds a different rhythm, cabin environment, onboard life and shore program. Choose according to what the guest wants to do, not a belief that reaching Yichang makes cruising obligatory.",
      },
      {
        title: "Cultural sites need their present-day setting explained",
        advice:
          "Qu Yuan-related places around Zigui offer literary and commemorative context; a named hometown attraction is not automatically a surviving ancient residence. Sanyou Cave adds another literary-landscape subject with its own current access and walking. Describe the actual site, interpretation and later development rather than promise unchanged ancient life.",
      },
      {
        title: "Shore visits and optional charges shape the cruise as much as the cabin",
        advice:
          "Compare included and optional outings, guiding language, physical effort, meal timing and what guests can do if they decline an excursion. An expensive cabin does not automatically make every shore activity private, accessible or included. A well-explained standard choice can suit a guest better than an ill-defined upgrade.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jingzhou",
        advice:
          "Jingzhou adds a city-defense and archaeological chapter, with Chu and Han collections and a separately assessed Xiongjiazhong excursion. Compare the actual train and both road transfers, then give the city useful local time. A Yangtze cruise does not automatically include Jingzhou, and a city visit should not be squeezed against a fixed ship collection.",
      },
      {
        slug: "shennongjia",
        advice:
          "Shennongjia adds a forest and mountain stay to a Yangtze journey. Allow useful local days and choose the actual Muyu, Pingqian or northern base before fixing transport. Keep the complete mountain-road transfer separate from a tight cruise collection deadline; a hotel in the district is not beside the Yichang pier.",
      },
      {
        slug: "enshi",
        advice:
          "Enshi adds upland limestone scenery and Tujia historical context to a river journey. Give the selected canyon its own full day and assess stairs before booking. Compare the dated train and both road transfers, keeping a fixed cruise collection separate from a demanding mountain day.",
      },
      {
        slug: "wudang-mountains",
        advice:
          "Wudang adds Daoist architecture and a mountain stay to a river-focused journey. Choose the full rail or road connection and give the mountain its own useful nights. Keep a full summit day separate from a fixed cruise check-in, and assess remaining cableway steps before choosing the route.",
      },
      {
        slug: "wuhan",
        advice:
          "Wuhan adds Hubei Provincial Museum, Hankou neighborhoods and a distinct river-city stay. Compare exact railway stations and both hotel transfers, keeping real time for its collections and food. A connection through Wuhan does not mean a museum visit fits before Yichang boarding.",
      },
      {
        slug: "chongqing",
        advice:
          "Chongqing can be the city chapter at the other end of a specifically booked multi-night Yangtze cruise. Confirm direction, dates, actual embarkation and disembarkation, and all road legs before fixing city rooms. Existing Chongqing tours do not include that cruise or Yichang services unless expressly stated.",
      },
      {
        slug: "zhangjiajie",
        advice:
          "Zhangjiajie adds a different mountain landscape with its own hotel, route and physical demands. Compare the actual transport sequence and usable days after disembarkation rather than assume two landscape destinations make a convenient same-day connection. Keep the new mountain day separate from uncertain river arrivals.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit a mix of river views and outdoor visits, with rain and variable conditions still possible. Summer can be hot and humid, while heavy weather or river conditions may affect particular operations. Winter city and river visits need suitable clothing and a realistic view of outdoor time. A cruise season does not guarantee every vessel, shore program or passage runs on a chosen date. Check the actual operator's dated program and current notices rather than buy a seasonal photograph.",
    orientation:
      "Yichang city, Yichang East railway station, Yichang Sanxia Airport and the Three Gorges Dam are separate arrival and sightseeing places. A cruise may use a city collection point followed by road travel to its real pier; Maoping is not central Yichang. Xiling Gorge is a river landscape, not one attraction pin that identifies every boat. Zigui and Changyang directions require distinct route planning. Use full Chinese addresses and the operator's actual collection instructions, especially when arranging luggage and onward transport.",
    experiences: [
      "Understand the Three Gorges through a specifically chosen engineering or river-landscape visit",
      "Compare a short boat with a named multi-night ship itinerary rather than a generic cruise label",
      "Use a comfortable city stay, meal and actual pier transfer to make the wider journey work",
    ],
    planningNotes: [
      "Separate dam entry, short river outings and multi-night cruises before choosing services",
      "Confirm collection point, road transfer, actual pier and complete disembarkation journey",
      "Assess cabin, gangway and shore walking against real guest needs and inclusions",
    ],
    arrival:
      "Build the plan from the actual Yichang East train, Yichang Sanxia flight or other agreed road gateway. Count the entire journey to the hotel, collection point and real pier, including identity checks and luggage. Keep a meaningful margin for a fixed embarkation deadline rather than treat arrival in the municipality as arrival at the ship. After a cruise, use the current disembarkation and road-transfer instructions to choose the onward train or flight. A separate city night can be useful when it improves the actual sequence, not merely as a generic precaution.",
    gettingAround:
      "Use a coherent road plan for the city, dam or an outlying visit, with the permitted visitor transport stages explained. A boat is a defined experience, not transport to every site along the river. Establish real meeting points and what happens to luggage when a sightseeing day ends at a different collection area. Confirm steps, gradients and the final ship approach for the exact program. A group with limited mobility needs assessed options, not a general claim that a private vehicle or river holiday removes walking.",
    stayStrategy:
      "Choose a city room for the actual dinner, walk and transfer plan, then treat any ship cabin as a separate accommodation choice. One night can make a gateway day useful; two protect a full local day. A dam-side property, station hotel and central riverfront hotel serve different briefs. A cabin upgrade should be judged by its real deck, noise, view, facilities and guest needs, not automatically treated as the highest-value use of the budget.",
    firstTimerNote:
      "Ask three simple questions before comparing quotations: what river experience is included, where do I actually board, and what happens at the other end? Then compare the room or cabin, meals, shore visits and physical demands. This makes a Three Gorges proposal understandable and helps avoid buying a dam excursion when you expected a long cruise, or booking a city pickup as though it were a walk to the ship.",
    faqs: [
      {
        question: "Where is Yichang, and why visit?",
        answer:
          "Yichang is in western Hubei and is a major gateway to the Three Gorges region. It can support a focused dam or river-landscape visit, a real city stay or a separately booked multi-night cruise. Choose the actual experience first; the city name alone does not identify the site, vessel or pier.",
      },
      {
        question: "How many nights should I spend in Yichang?",
        answer:
          "Two city nights give one full local day. One can serve a useful arrival or a specific cruise sequence when schedules fit. Count ship nights separately and allow the actual collection or disembarkation transfer. A third city night should support a distinct interest rather than fill time between unclear connections.",
      },
      {
        question: "Is a Three Gorges Dam visit the same as a Yangtze cruise?",
        answer:
          "No. A dam visit follows a specific visitor route, a short boat covers a defined river stretch, and a multi-night cruise has its own vessel, cabin and program. Compare their actual start, finish, inclusions and time. A shared Three Gorges name does not make the experiences interchangeable.",
      },
      {
        question: "Do Yangtze cruises board in central Yichang?",
        answer:
          "Do not assume so. Some programs use a city collection point followed by a road transfer to a different actual pier, including Maoping-area arrangements when specified. Confirm the exact meeting address, vehicle leg, deadline and ship before booking hotels or onward travel.",
      },
      {
        question: "Should I cruise upstream or downstream between Yichang and Chongqing?",
        answer:
          "Choose using the actual vessel, dated schedule, nights, shore program and the city stays at both ends. Upstream and downstream programs can differ; a reversed map does not establish identical duration or inclusions. Confirm both real piers and any road transfers before fixing flights or hotels.",
      },
      {
        question: "Does a cruise include the Three Gorges ship lift or locks?",
        answer:
          "Only when the specific dated program expressly includes the relevant operating passage. A dam ticket, general cruise description or old photograph is not confirmation. Identify the actual vessel and route, any separate activity and current conditions rather than assume every ship transits the same infrastructure.",
      },
      {
        question: "Where should I stay in Yichang before a cruise?",
        answer:
          "Choose after obtaining the actual collection and transfer instructions. A central or riverfront hotel can support a meal and city evening; a station or embarkation-area room may suit another sequence. Compare exact room comfort, breakfast, luggage and the complete journey, not a generic near-the-river label.",
      },
      {
        question: "Is a Three Gorges cruise suitable for limited mobility?",
        answer:
          "It needs vessel- and route-specific assessment of gangways, pier steps, cabin and lift access, bathrooms and shore excursions. Changing river levels can affect approaches. A ship holiday is not automatically step-free; agree what is feasible, what can be omitted and the alternatives before booking.",
      },
      {
        question: "What can I do in Yichang without a multi-night cruise?",
        answer:
          "Consider a properly chosen dam visitor route, a defined short river excursion, Sanyou Cave's literary-landscape setting or a comfortable city walk and meal. Choose by actual access, walking and useful hours. You do not need a long cruise simply because Yichang is part of the journey.",
      },
      {
        question: "Can I fly or take a train immediately after disembarking?",
        answer:
          "Use the booked program's actual disembarkation and road-transfer instructions to assess the connection. The vessel, collection area, station and airport may be separate places. Do not select the earliest departure on the assumption that arrival in the Yichang area means you are already beside the terminal.",
      },
    ],
    culturalStory: {
      title: "The river connects engineering, literature and contemporary life",
      paragraphs: [
        "A dam-focused visit becomes more useful when it explains what the guest can actually see: scale, permitted viewpoints and the relationship between engineering and the river landscape. Keep working infrastructure distinct from tourist access. A guide can discuss the project's wider setting without claiming a simple story of progress captures every historical, environmental or community experience. The river is a living transport and settlement corridor as well as a view.",
        "A literary-landscape stop such as Sanyou Cave or a Qu Yuan-related place around Zigui provides a different way into the region. Explain the specific association, the visible site and later commemorative development rather than call every named hometown an unchanged ancient residence. Pairing one clear cultural subject with the river can add depth, while ordinary city time reminds visitors that Yichang is more than a transfer label on a cruise booking.",
      ],
    },
    foodStory: {
      title: "Choose the meal for the real city or ship day",
      paragraphs: [
        "A city meal offers flexibility before or after fixed cruise dining. Ask the actual kitchen for a balanced selection suited to the group, with freshwater fish preparations, vegetables and regional flavors explained where served. Clarify bones, spice, portions and whether dishes are shared. Guests who prefer simpler food should have a proper option rather than an obligatory river-fish tasting. On a ship, assess the actual dining format, hours and alternatives instead of infer them from the cabin category.",
        "Discuss fish, shellfish, meat stock, pork, soy, wheat, nuts and shared equipment when dietary needs matter. A vegetable dish may still contain animal ingredients. Serious allergies and religious or vegetarian requirements need confirmed kitchen capability and a workable alternative, particularly over several ship nights. A special meal, cooking lesson or hosted encounter requires its own arrangement; it is not included merely because a proposal describes local food culture.",
      ],
    },
    itinerary: [
      {
        day: "Arrival afternoon",
        title: "Reach the real city base and settle in",
        description:
          "Complete the station or airport transfer, confirm the next day's actual route and enjoy a suitable meal or short riverfront walk. Keep a timed boat or cruise collection separate from uncertain arrival. Check the final written embarkation instructions if the wider journey includes a ship.",
      },
      {
        day: "Full-day morning",
        title: "Follow the selected engineering or river-landscape brief",
        description:
          "Use the specifically booked dam route or short river experience, with identity checks, transport stages, remaining walking and current operations understood. Interpret the setting rather than suggest a visitor ticket provides access to all infrastructure or every gorge.",
      },
      {
        day: "Afternoon and evening",
        title: "Keep the second subject selective",
        description:
          "Take a proper meal and add one coherent local interest only when the route leaves enough time. Return to the actual hotel or follow a separately confirmed cruise collection sequence. A cave, Zigui direction and another boat should not all be stacked into a supposedly relaxed afternoon.",
      },
      {
        day: "Departure or separate cruise chapter",
        title: "Complete the actual onward journey",
        description:
          "Coordinate luggage and the full station, airport or ship transfer. Any multi-night cruise follows its own dated program rather than this city outline. This one-to-two-night example is illustrative, not a published package or a guarantee of vessels, lock passages, private access, rooms or river conditions.",
      },
    ],
  },
};
