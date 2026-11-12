import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/danjiangkou.svg",
  alt: "Original Danjiangkou planning schematic comparing a permitted dam visit, a defined reservoir outing and city or waterside accommodation; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const danjiangkouGuide: ExpandedDestination = {
  id: "danjiangkou",
  name: "Danjiangkou",
  region: "central",
  kicker: "Understand the water landscape before choosing the view",
  description:
    "Plan Danjiangkou for reservoir scenery and water-management context, with dam and boat visits distinguished, exact hotel locations and a separate Wudang stay.",
  stay: "1–2 nights for a focused water-landscape chapter",
  bestFor: "Reservoir landscapes, engineering context and a slower contrast to Wudang",
  interests: ["landscape", "heritage"],
  relatedDestinationIds: ["shiyan", "wudang-mountains", "yichang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Danjiangkou Travel Guide: Reservoir & Stays",
    seoTitle: "Danjiangkou Guide: Reservoir, Dam & Stays",
    seoDescription:
      "Plan Danjiangkou Reservoir with dam versus boat choices, city or waterside hotel advice, one- or two-night stays and a separate Wudang Mountain plan.",
    answer:
      "Danjiangkou (丹江口) is a county-level city within the wider Shiyan municipality in northwestern Hubei. Visit for a considered reservoir-landscape and water-management chapter, rather than assume it is a beach or water-sports resort. Danjiangkou Reservoir extends across Hubei and Henan; the city, the dam, a particular boat route and the middle route of China's South-to-North Water Diversion Project are related but distinct subjects. Two nights give one full local day; one can work for a selective stop with suitable arrival and departure. Wudang Mountain is a separate architectural and mountain visit, with its own hotel and physical demands.",
    stayAnswer:
      "Choose two nights if you want one full day for a specifically permitted dam or water-landscape route, a proper meal and time at a worthwhile hotel. One night can suit a focused stop when the complete road journey leaves useful hours. A day excursion may be better when there is only one site you want and another base already works. Longer stays need a clear reason, such as an actual property you will enjoy or another independently assessed subject. Extra reservoir nights do not automatically add a boat, island access or a Wudang summit day.",
    hotelAnswer:
      "Compare a city property for restaurants, services and a coherent visitor route with a precisely located waterside property for time in the room and its surroundings. A broad reservoir-view label can hide a long approach or limited dinner choices. Check the actual room view, quiet, heating or cooling, bathroom, breakfast and vehicle access. A Wudang mountain-foot room is a different base. Choose the side and address that serve your next day, not simply the closest-looking point on a map of the reservoir.",
    sightseeingQuestion: "Should you choose a dam visit or a reservoir boat trip?",
    sightseeingAnswer:
      "Choose a permitted dam visitor route if the main interest is engineering and the relationship between the structure, river and reservoir. Choose a specifically identified boat outing for a water-level landscape perspective, only when current operation and the full boarding route are confirmed. They are not interchangeable, and a general dam ticket does not establish a boat or access inside working infrastructure. Confirm the real start, finish, duration, walking and seating before deciding whether to combine them. If no suitable boat operates, a well-chosen land visit can still provide a worthwhile day.",
    visitorResources: [
      {
        label: "Danjiangkou municipal government",
        href: "https://www.djk.gov.cn/",
        scope:
          "City background and public notices. Confirm the actual visitor area, current opening, road approach, boat operator and property separately before fixing a visit.",
      },
      {
        label: "Ministry of Water Resources of China",
        href: "https://www.mwr.gov.cn/",
        scope:
          "Institutional background for water management and infrastructure. A ministry description does not authorize a technical visit, access to working facilities or a particular tourism service.",
      },
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check the actual dated service and station. Danjiangkou station, Shiyan East and Wudangshan West are different gateways with separate road transfers to the chosen room and visitor route.",
      },
    ],
    serviceScope:
      "A tailored proposal should identify the permitted visitor route, actual room, full road transfers, guide language and meal plan. If a boat is proposed, it should name the operator, route, boarding requirements, shared or private basis and weather alternative. A technical meeting, specialist explanation or entry to an operating facility needs a separate confirmed host and permission. Share whether engineering, landscape photography or a restful overnight is the priority; those interests lead to different days and different uses of the budget.",
    routeAdvice:
      "Wudang adds Daoist architecture and mountain scenery, with its own useful nights, scenic transport and remaining steps. Shiyan adds a city museum or industrial-history interest only when that subject deserves time. Yichang offers a different river and engineering comparison: a Three Gorges Dam visit or a separately booked Yangtze cruise is not a continuation of the same local reservoir outing. There is no matching published Danjiangkou product recommended here. Share dates, gateways, room expectations and interests to discuss a coherent extension with the complete hotel-to-hotel journey explained.",
    practicalPlanning: {
      timing:
        "Build the day around one named visitor route and the real road approach. A waterside meal or short walk can complement it if the location works. Add a boat only after confirming the operator, boarding and current schedule. Keep a weather-dependent water outing separate from a tight train or flight. If the hotel is a main reason to stay, preserve time there instead of booking a late arrival and early departure.",
      walking:
        "Assess the actual dam viewpoint, landscaped path or boat approach for steps, gradients, exposure, seating and toilets. Water level can change the appearance of the shore and the boarding approach. A reservoir photograph does not establish level access. Discuss balance, luggage and life-jacket fit for any boat, and choose a useful land alternative for guests who prefer not to board. A private car cannot enter all waterfront or infrastructure areas.",
      cost: "Compare the actual room category and view, full vehicle and guide hours, named admission, meals and any confirmed boat service. Shared sightseeing, a private charter and a technical visit are different scopes. Clarify cancellation and the alternative if the boat does not operate. A premium quote should improve room comfort, interpretation and the day’s practical arrangements; it should not imply unrestricted infrastructure access, a private reservoir or guaranteed clear water and light.",
    },
    attractions: [
      "A specifically permitted Danjiangkou Dam / 丹江口大坝 visitor route",
      "Danjiangkou Reservoir / 丹江口水库 from selected public land viewpoints",
      "A defined reservoir boat outing only when a suitable operator and current service are confirmed",
      "A manageable city waterfront or neighborhood walk with an actual start and finish",
      "Water-management interpretation distinguishing the reservoir, dam and wider diversion system",
      "Wudang Mountain / 武当山 through a separate architectural and mountain plan",
    ],
    stays: [
      {
        label: "Day visit / one clear subject",
        advice:
          "Suitable when a named land visit and the complete return journey work from the existing base. Protect time to understand the subject and have a meal. Do not add an overnight solely because a city has a destination page.",
      },
      {
        label: "1 night / a selective stop",
        advice:
          "Choose when arrival and departure leave useful local hours or when a real room and evening improve the journey. Keep the plan focused; one short overnight leaves too little time for a dam visit, a boat trip, several shore locations and a mountain excursion.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Allows a thoughtful engineering or landscape day and time to enjoy the actual property. Add a different subject only when its journey is justified. Wudang mountain nights remain a separate part of the route.",
      },
    ],
    hotelAreas: [
      {
        name: "Danjiangkou city: services and a focused visit",
        advice:
          "Start here for an actual city-based route with dinner and everyday services. Compare the precise block, road noise, pickup and the journey to your named visitor entrance. Near the water does not mean near the dam entrance or boat pier.",
      },
      {
        name: "A named reservoir-side property: stay for the setting",
        advice:
          "Choose only after checking the exact shore, access road and room view. Ask about dinner, heating or cooling, bathroom, quiet and what you can actually do on the grounds. A reservoir-view room does not include shore access, swimming, a boat or a supervised activity.",
      },
      {
        name: "Wudang mountain foot: prioritize the next mountain day",
        advice:
          "A better alternative when Wudang is the principal purpose and a separate Danjiangkou night adds little. Calculate the complete drive after the selected reservoir visit. Check actual mountain-foot room and meal arrangements rather than regard every property in the wider municipality as interchangeable.",
      },
    ],
    tradeoffs: [
      {
        title: "A reservoir is a managed landscape",
        advice:
          "Danjiangkou has water-supply, infrastructure and environmental responsibilities as well as scenic value. Use permitted public routes. A quiet shore is not automatically a beach, an empty stretch of water is not permission to swim, and a hotel view is not evidence of an authorized private boating service.",
      },
      {
        title: "The dam and the wider diversion project are not one attraction",
        advice:
          "The reservoir is associated with the middle route of the South-to-North Water Diversion Project, but the system extends far beyond a local dam viewpoint. A proposal should state the place actually visited and explain what can be seen there. Do not assume a Danjiangkou city stay includes a trip to a distant canal headworks or operating facility.",
      },
      {
        title: "Choose landscape time rather than repeated viewpoints",
        advice:
          "One thoughtfully chosen shore section with a meal and proper explanation can be more rewarding than several similar roadside stops. Photographers should compare orientation, permitted access and the real time available. Water level, haze and light change the view; none can be purchased as an itinerary inclusion.",
      },
      {
        title: "A specialist question needs the right interpreter",
        advice:
          "A cultural guide can explain a visitor route, while a technical study visit may need engineering expertise, an agreed host and a clearly defined purpose. Translation, technical advice and operational access are separate services. State the required depth before booking rather than assume any private tour provides a professional infrastructure briefing.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "wudang-mountains",
        advice:
          "Use Wudang for a contrasting Daoist architectural landscape and give its chosen routes their own full days. Compare the exact mountain-foot or scenic-area hotel, permitted transport and remaining steps. A reservoir outing is not a substitute for a mountain stay or a reliable extra after a long summit day.",
      },
      {
        slug: "shiyan",
        advice:
          "Shiyan can add a museum or automotive-history interest, or serve a particular arrival. Compare the actual station and both room transfers before inserting a city night. An engineering interest at the reservoir does not automatically establish a company or factory appointment in Shiyan.",
      },
      {
        slug: "yichang",
        advice:
          "Yichang offers a separate Three Gorges engineering and Yangtze river chapter. Compare the full transport sequence and actual visitor route. A multi-night cruise needs its own vessel, dates, cabin and pier arrangements; it is not included simply because both places involve dams and water.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for a mixture of land visits and time outdoors, with weather and actual operations still determining the day. Summer can be hot and rainy; winter needs clothing suited to exposed viewpoints and shorter outdoor breaks. Water level and visibility vary, and a date alone does not establish a particular shoreline appearance or boat service. Check holiday demand and the current operator before fixing a water-led itinerary.",
    orientation:
      "Danjiangkou city is in Hubei, while the reservoir extends into Henan. The city hotel, dam visitor entrance, selected shore and any boat pier are distinct addresses. Danjiangkou station / 丹江口站, Shiyan East / 十堰东 and Wudangshan West / 武当山西 should be compared through actual dated services and complete roads. A broad reservoir map can conceal different arms of water and long journeys around them. Have the Chinese destination and pickup point written into the plan.",
    experiences: [
      "Understand the relationship between a permitted dam viewpoint, the reservoir and wider water-management questions",
      "Give one selected shore or confirmed boat route time for landscape observation rather than collecting similar viewpoints",
      "Balance the water landscape with a comfortable meal and a separately planned Wudang architectural stay",
    ],
    planningNotes: [
      "Name the actual visitor entrance or pier; city, dam, reservoir and canal infrastructure are different places",
      "Confirm current permitted routes and boat operation without assuming access to working facilities or protected shore",
      "Choose the room for its exact location, view, meals and comfort, and count Wudang nights separately",
    ],
    arrival:
      "Start from the dated ticket and actual station or airport. A Danjiangkou arrival, Shiyan East arrival and flight to Shiyan Wudangshan Airport call for different road sequences. Add the transfer to the precise room, meal needs and the next visitor entrance. If arriving from a Wudang hotel, count the complete hotel departure and road journey rather than the distance between two broad map labels. Keep the first day selective unless actual arrival leaves substantial useful time.",
    gettingAround:
      "Use a coherent road plan between the city, named visitor route and hotel. A boat, when confirmed, follows a defined operating route rather than serving every shore. Establish where the guide accompanies you, where the driver waits and how luggage is handled if the day ends at another base. Follow current restrictions around infrastructure and managed water. A quieter-looking road or shoreline does not establish public access.",
    stayStrategy:
      "Begin with one full day and decide whether it works as an excursion, one night with favorable transport or two nights. A waterside property deserves an overnight when the room, meals and time there are part of the holiday. If it only produces a longer drive and little useful local time, a city or Wudang room may be better. High-end planning should make that comparison transparent rather than treat a remote view as proof of quality.",
    firstTimerNote:
      "Ask what you will actually see: the dam from a visitor area, a particular reservoir landscape, a boat route or a technical meeting. Then ask where you sleep and what the full journey involves. Clear answers distinguish a worthwhile water-landscape chapter from an itinerary that lists several impressive infrastructure names without identifying the experience.",
    faqs: [
      {
        question: "Is Danjiangkou worth visiting with Wudang Mountain?",
        answer:
          "It can add a different water-landscape and engineering subject when those interests appeal and the complete route works. It is optional, not a necessary stop for every Wudang visitor. Compare one thoughtful local day with the mountain time or rest you would give up.",
      },
      {
        question: "How many nights do I need in Danjiangkou?",
        answer:
          "Two nights give one full day, while one can suit a selective visit with favorable arrival and departure. A day excursion may work better from an existing base. Additional nights should support a worthwhile property or another specific subject, not just more versions of the same reservoir view.",
      },
      {
        question: "Is Danjiangkou Reservoir entirely in Hubei?",
        answer:
          "No. The reservoir extends across Hubei and Henan, while Danjiangkou city is in Hubei. Choose the actual shore, visitor entrance and room address before estimating the journey. A shared reservoir name does not make sites on different sides neighboring attractions.",
      },
      {
        question: "Does a Danjiangkou Dam visit include a boat trip?",
        answer:
          "Only if a specific boat service is expressly included and confirmed. A land visitor route and a reservoir boat outing have different tickets, transport, physical demands and operating conditions. Ask for the operator, pier, route and alternative if the boat does not run.",
      },
      {
        question: "Can I swim or go kayaking in Danjiangkou Reservoir?",
        answer:
          "Do not assume these are permitted or available. The reservoir is a managed water-supply and infrastructure landscape. Use only a specifically authorized activity with its current operating conditions confirmed. A hotel beside the water or an empty shore does not establish recreational access.",
      },
      {
        question: "Should I stay in Danjiangkou city or beside the reservoir?",
        answer:
          "Choose the city for a defined route and convenient services; choose an actual waterside property when the room and setting justify time there. Compare full roads, dinner, temperature control and the real room view. A Wudang-focused traveler may be better served by a separate mountain-foot base.",
      },
      {
        question: "Can I visit the operating water-diversion facilities?",
        answer:
          "Only where the specific facility permits the proposed visitor route or confirms a separate appointment. Public background information about the project is not access permission. A technical visit needs a named host, purpose, language and current arrangements; ordinary sightseeing should describe the actual permitted viewpoints.",
      },
    ],
    culturalStory: {
      title: "Read a water landscape through more than its view",
      paragraphs: [
        "A reservoir is both scenery and a landscape shaped by infrastructure. Danjiangkou can introduce the relationship between stored water, river management and the much wider middle-route diversion system. A useful explanation starts with what is visible from the permitted place, then distinguishes that observation from technical processes elsewhere. Avoid suggesting that one lookout reveals the whole system or that a guided visit provides access to operating structures.",
        "The human story matters alongside engineering: settlement, livelihoods and environmental care belong in an honest regional interpretation. Present supported history without inventing a single experience shared by every local household. A public city visit, an agreed conversation and a specialist study meeting are different encounters. Combining the reservoir with Wudang works best when each place retains its own subject, rather than treating water infrastructure as an extension of Daoist temple history.",
      ],
    },
    foodStory: {
      title: "Ask about the fish, not just the reservoir name",
      paragraphs: [
        "Where fish is offered, ask the actual species, source, portion or weight basis, bones and preparation before ordering. A restaurant near the water does not prove its fish comes from protected reservoir waters, is wild-caught or is sustainably sourced. Choose a balanced meal with vegetables, tofu and suitable staples rather than order an oversized fish merely because the setting suggests it. A simple well-timed lunch can be more valuable than a distant specialty stop.",
        "Discuss fish allergies, soy, wheat, meat stock, chili and shared equipment when dietary requirements matter. A vegetable dish or tofu preparation may contain animal ingredients. Confirm dinner and breakfast at an outlying property, especially if another restaurant requires a drive. A fishing activity, hosted meal or cooking session needs a separate lawful and confirmed arrangement; none is implied by a reservoir-view room.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / night 1",
        title: "Reach the right shore or city room",
        description:
          "Complete the actual gateway transfer, settle in and have dinner. A short permitted walk is optional within useful arrival hours. Review the next day's named route, walking and any boat arrangements rather than treat the whole reservoir as one flexible attraction.",
      },
      {
        day: "Full day / night 2",
        title: "Explore one clear water-landscape subject",
        description:
          "Follow the agreed dam visitor route or defined landscape outing, with proper explanation, lunch and rest. Add a boat only when specifically confirmed and worthwhile. Keep the alternative on land useful if weather or operation changes, and leave time for the actual property when that is a reason to stay.",
      },
      {
        day: "Departure or separate Wudang chapter",
        title: "Continue without compressing the next destination",
        description:
          "Transfer to the correct station or next hotel. A Wudang stay has its own full days, scenic transport and physical demands. This illustrative one- or two-night plan is not a published package and does not guarantee boats, technical appointments, private access, rooms or water conditions.",
      },
    ],
  },
};
