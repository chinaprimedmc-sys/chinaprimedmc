import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qingyuan.svg",
  alt: "Original Qingyuan planning schematic separating city and resort bases, Yingde tea and karst interests and a distinct Lianzhou cave chapter; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const qingyuanGuide: ExpandedDestination = {
  id: "qingyuan",
  name: "Qingyuan",
  region: "south",
  kicker: "Northern Guangdong countryside, chosen for a real purpose",
  description:
    "Choose a Qingyuan stay by its actual setting: city services, a well-assessed resort, Yingde tea and karst countryside or a distinct Lianzhou cave journey.",
  stay: "2–3 nights for one coherent chapter",
  bestFor: "Countryside breaks, defined tea interests and carefully chosen resort stays",
  interests: ["landscape", "food", "heritage"],
  relatedDestinationIds: ["shaoguan", "lianzhou", "yingde", "guangzhou", "huizhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qingyuan Travel Guide: Countryside, Tea & Resort Stays",
    seoTitle: "Qingyuan Guide: Countryside, Tea & Stays",
    seoDescription:
      "Plan Qingyuan beyond a generic day trip: compare city and resort bases, Yingde tea and karst countryside, Lianzhou caves, real transfers and two-night stays.",
    answer:
      "Qingyuan (清远) is a large prefecture-level city in northern Guangdong, not a single resort district just outside Guangzhou. Its urban and Qingxin-area bases, Yingde's tea and karst interests, and Lianzhou's cave landscapes require different roads and useful local time. For a short stay, choose one coherent chapter and the exact property before fixing the gateway. Two nights give one full day; three can add another distinct subject or more hotel time. This regional guide helps choose the route, while separate Yingde and Lianzhou guides develop their local planning choices.",
    stayAnswer:
      "Two nights are a useful starting point for one substantial local day between arrival and departure. Three can support slower countryside time, a second confirmed learning interest or a property that genuinely rewards downtime. A focused day trip from Guangzhou can work for a specific closer route when the full return is comfortable. It is not proof that Yingde, Lianzhou and every resort fit in the same excursion. A larger northern Guangdong journey needs complete roads, appropriate bases and useful visiting time at each chapter rather than more destination labels in one short break.",
    hotelAnswer:
      "Compare Qingcheng city services, a precisely located Qingxin or other resort property, a specific Yingde countryside base and a separate Lianzhou town or rural stay. Those are different trips, not interchangeable hotel districts. For a countryside room, check the actual bathroom, temperature control, dampness, bedding, noise, meals and final road. A hot-spring label needs details of which pools are open, admission, temperature, privacy, cleaning and guest suitability. A room-only rate does not establish bathing access, private pools or any health benefit.",
    sightseeingQuestion: "Should I choose a resort break, Yingde or Lianzhou?",
    sightseeingAnswer:
      "Choose a resort-led stay when the actual room, food and facilities are the reason to leave the city. Choose Yingde for a distinct tea-learning or Yingxi karst-countryside interest, with the host and route confirmed. Choose Lianzhou when a cave and northern landscape chapter justify the longer journey and its own base. A cave walk, cave boat, outdoor river activity and rafting are different arrangements. For two or three nights, one well-chosen purpose usually delivers more than a circuit built around everything marketed under Qingyuan.",
    visitorResources: [
      {
        label: "Qingyuan municipal government",
        href: "https://www.gdqy.gov.cn/",
        scope:
          "Regional context and dated public notices, mainly in Chinese. Check the actual county, visitor institution, public route and operator for the proposed dates. Municipal tourism promotion does not verify a specific resort, pool, tea host, cave boat or adventure activity.",
      },
      {
        label: "Guangdong provincial government",
        href: "https://www.gd.gov.cn/",
        scope:
          "Provincial information and public notices. Verify current local weather-related access, roads and responsible operators separately. A general destination description is not evidence that every route is open or that a private vehicle can reach every rural property.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and precise stations, then compare the complete road to the chosen property and subject. Qingyuan, Yingde-area and other regional stations serve different plans. A fast train segment does not remove the final countryside transfer.",
      },
    ],
    serviceScope:
      "A proposal should name the actual base, property and room, full gateways and roads, guide language, defined public visits, host when confirmed, meals and included facilities. For a tea session, specify the learning subject, actual producer or interpreter and whether there is demonstration, tasting or hands-on work. A private pool, rafting, cave boat or other activity needs its own provider, terms and suitability assessment. Private transport does not authorize closed roads, restricted caves or access to homes and working farms. Agree a useful alternative before making an uncertain outdoor operation the whole day.",
    routeAdvice:
      "Guangzhou provides a contrasting city chapter with Cantonese food and trading history, or a gateway for a selected Qingyuan route. Huizhou offers another choice between city culture, mountains and coastal property time; it is an alternative or separate stay, not an automatic extension. No matching published Qingyuan product is recommended here. Share dates, actual gateways, room expectations, walking and motion needs, bathing preferences and whether tea, countryside or rest matters most to develop a tailored route with a clear purpose for every night.",
    practicalPlanning: {
      timing:
        "Work from the actual hotel and main interest, not a municipality-wide attractions list. Include the full gateway road, final approach, check-in, meals and departure before allocating sightseeing. Weekends and holidays can change road pressure and resort atmosphere. A tea appointment needs a reliable window, while cave and activity operation can respond to weather and local conditions. Keep an uncertain outdoor segment separate from a tight onward flight or train.",
      walking:
        "Assess the exact route's steps, slopes, surfaces, shade, seats, toilets and pickup. Karst countryside can be enjoyed through different public routes, but an attractive rural image is not proof of level access. Cave paths may involve wet ground, low light, stairs and boat boarding; ask about the actual permitted route. A rafting or glass-viewpoint attraction has a separate physical and eligibility assessment. Bathing also requires guest-specific suitability, especially when heat, mobility or health needs are relevant.",
      cost: "Compare the real room, meals, complete road hours, guide and interpreter roles, host time and facility or activity admission. A resort rate may omit certain pools, spa services, transport or dinner. A producer visit and an introductory tasting have different preparation and learning value. Clarify what happens when a host or outdoor operation is unavailable, and keep purchases separate from the quality of the visit. A premium should improve comfort and coordination rather than imply private countryside or a medical outcome.",
    },
    attractions: [
      "A specific Qingyuan or Qingxin-area property with worthwhile room and meal time",
      "Yingde black-tea learning as a separately arranged regional chapter",
      "A defined public Yingxi karst-countryside route within Yingde",
      "Lianzhou Underground River as a distinct cave chapter under current operation",
      "A selected city or countryside meal that supports the actual daily road",
      "An optional pool or activity only when its operator, terms and guest suitability are confirmed",
    ],
    stays: [
      {
        label: "Day trip / one selected closer interest",
        advice:
          "Choose a specific route and count the complete return to the actual Guangzhou hotel. One coherent outing can work better than moving for an unremarkable room. Do not describe a long transfer, a brief photograph and an activity queue as an unhurried countryside day.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Settle into a property that suits the purpose, then give the main host, public route or hotel time its own day. Protect meals and rest. A late arrival and early departure leave little meaningful countryside time even when the booking lists two nights.",
      },
      {
        label: "3 nights or a wider route / an additional real purpose",
        advice:
          "Add a different confirmed subject, a slower rhythm or worthwhile property time. A second distant county needs its own full roads and usable stay. Extra nights should deepen the trip, not multiply similar tastings, paid activities or compulsory hotel changes.",
      },
    ],
    hotelAreas: [
      {
        name: "Qingcheng city / services and a specific regional road",
        advice:
          "Compare exact hotel location, quiet, room comfort, breakfast and the road to the selected interest. A city room can be sensible for practical needs without being sold as a secluded countryside retreat. Check the actual station transfer rather than assume all Qingyuan gateways serve the same place.",
      },
      {
        name: "A named Qingxin or other resort property / property-led time",
        advice:
          "Assess the actual room, open facilities, meal choices, noise and indoor comfort. Confirm pool access, operating periods, cleaning and any private-bathing claim. A resort theme or hot-spring photograph does not establish privacy, health benefits or a full-service experience in every room category.",
      },
      {
        name: "Yingde countryside / tea or karst focus",
        advice:
          "Choose a precise base for the selected host and route. Yingde town, tea properties and the Yingxi landscape do not occupy one location. Check final roads, meals, bathroom, temperature control and luggage before paying for atmosphere; a tea-themed room does not guarantee production access.",
      },
      {
        name: "Lianzhou town or a specific rural stay / a separate northern chapter",
        advice:
          "Compare the actual cave approach, room, food and onward road. A city-wide Qingyuan hotel search can obscure how far this is from another proposed base. Treat a cave visit and a countryside overnight as distinct choices, with public operation and actual facilities checked separately.",
      },
    ],
    tradeoffs: [
      {
        title: "One municipal name conceals several different holidays",
        advice:
          "A hotel-led break, Yingde tea journey and Lianzhou cave visit have different geography and daily rhythms. Use the actual place and property names in the proposal. A regional guide helps make the choice; it should not imply that mentioning a county has completed its detailed planning or that every destination can be reached from one convenient hotel.",
      },
      {
        title: "A tea visit should explain a product and process",
        advice:
          "Yingde is associated with black tea, called hong cha in Chinese. A useful session identifies the actual leaves and product, explains processing and brewing, and gives guests time to compare what they taste. Picking and processing follow real work, not a daily visitor performance. Ask what will be seen or tried rather than assume a plantation photograph establishes a hosted production visit.",
      },
      {
        title: "Karst countryside needs a route, not a comparison slogan",
        advice:
          "Yingxi's limestone landscape can reward a selected public walk and time to observe the relationship between peaks, fields and settlement. It does not need to be sold as an interchangeable version of Guilin. Choose the exact route, shade, road exposure and effort, and respect working fields and private homes. A guide cannot turn every farm path into public access.",
      },
      {
        title: "A cave boat and outdoor rafting are different commitments",
        advice:
          "A controlled cave visitor route may include its own walking and boarding requirements, while outdoor rafting involves different water, weather, operator and eligibility conditions. Confirm what is actually open and appropriate. Do not infer a gentle experience from the word river or promise that an alternative water activity will always replace a cancelled one.",
      },
      {
        title: "Bathing should be chosen for comfort, not medical promises",
        advice:
          "Check the actual pool, privacy, temperature, steps, changing space, cleaning and supervision. A hot-spring label is not evidence that every room has natural-source water or a private bath. Ask an appropriate clinician about individual health concerns. Agree the real facility and service rather than claim a therapeutic result from a short resort stay.",
      },
      {
        title: "A cultural encounter needs a willing host",
        advice:
          "A rural setting or ethnic-community label does not establish a home invitation, performance or ceremony. If deeper cultural learning matters, identify the actual host, subject, language and consent. A public village walk and a personal conversation can both be worthwhile when honestly arranged; neither should rely on residents receiving unexpected visitors.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "shaoguan",
        advice:
          "Shaoguan adds Danxia red sandstone and Nanhua Temple as distinct subjects. Choose the actual Qingyuan-area base and compare the complete onward road with a direct rail connection. Tea, caves, red cliffs and temple history should each receive useful time rather than become one rushed regional checklist.",
      },
      {
        slug: "lianzhou",
        advice:
          "Lianzhou’s dedicated guide separates the Underground River cave from Huangchuan Three Gorges and compares one- or two-night stays, cave walking, boat boarding and full roads. Add this northern chapter for a genuine cave or river interest, with useful time and a suitable base rather than a rushed extra stop.",
      },
      {
        slug: "yingde",
        advice:
          "Yingde's dedicated guide develops black-tea learning, Yinghong No. 9 terminology and the choice between town, actual tea venues and western Yingxi countryside. Choose the host and real property before the station. A Lianzhou extension adds a separate cave-and-river subject; give it enough time rather than attaching it to a full Yingde day.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds Cantonese food and trading history, or a gateway for the actual Qingyuan chapter. Compare the complete room-to-room journey rather than a short train segment. The published Guangzhou–Shenzhen business route does not automatically include rural hosts, resorts or Qingyuan activities.",
      },
      {
        slug: "huizhou",
        advice:
          "Huizhou offers a different city, mountain or coastal property decision in eastern Guangdong. Compare the purpose before adding another hotel-led escape. Shared provincial geography does not create a short local connection or make the two regions' rooms, roads and activities interchangeable.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Compare spring and autumn dates for countryside walking with the actual rain, temperature and holiday calendar. Summer can bring heat, heavy rain and altered river or trail operation. Cooler periods may suit a resort-led stay, but pool use still needs current opening, temperature and personal suitability checked. Tea production follows the actual producer's schedule and weather, while a properly arranged tasting can be meaningful outside harvest. Do not sell a single month as proof of green scenery, active processing, open caves and every water activity together.",
    orientation:
      "Qingyuan spans a large part of northern Guangdong. Qingcheng's urban services, Qingxin-area properties, Yingde tea and karst landscapes, and Lianzhou cave interests are distinct bases and route decisions. The broader municipality should not be confused with its urban center. This regional guide does not replace the dedicated Yingde and Lianzhou guides or complete every county, village, activity and cultural community. Use the exact Chinese property, station and visitor entrance names when planning transport.",
    experiences: [
      "Choose one countryside or resort purpose and give it useful local time",
      "Learn about identified Yingde teas through a confirmed session with clear interpretation",
      "Read a selected karst or cave landscape through an appropriate public route",
    ],
    planningNotes: [
      "Choose the actual chapter and room before fixing the station or gateway",
      "Confirm the host, learning format, public route and full road rather than rely on a regional label",
      "Assess bathing, boats, rafting and other activities separately for conditions and guest suitability",
    ],
    arrival:
      "Compare actual dated trains or roads from Guangzhou and other gateways with the complete transfer to the named property. A station in the wider Qingyuan municipality is not the countryside hotel or the selected host. For Yingde and Lianzhou, review their own full approach rather than assume a city arrival solves the journey. Send the actual booking and Chinese address for pickup, protect substantive appointments from uncertain arrival, and allow a realistic departure margin when rain or holiday traffic changes the road.",
    gettingAround:
      "Plan the vehicle around the actual host, property, public route and meal. A private car cannot make distant county chapters fit comfortably in one day or follow guests through caves and village paths. Confirm parking, the final approach, bags, walking and pickup before departure. Public roads, working farms, religious or community spaces and paid activity venues follow different rules. Do not improvise entry to a closed route or replace a cancelled activity without assessing the alternative's actual demands.",
    stayStrategy:
      "For two or three nights, one dependable base usually offers more useful time than frequent check-ins. Choose the property for its actual purpose and keep room comfort, meals and a weather alternative visible in the proposal. If a second county is essential, give it enough useful nights and a distinct subject. High-end planning is the combination of suitable sleep, interpretation, food and transport, not a promise of private landscapes or an unlimited menu of activities.",
    firstTimerNote:
      "Ask what makes the full day worthwhile if the main outdoor activity cannot run. A strong resort might offer genuine room and facility time; a tea-led stay might retain a meaningful confirmed session; a cave plan needs an appropriate alternative of its own. Then compare the full roads. Qingyuan is most rewarding when the itinerary has one clear purpose and a base that supports it, rather than a list of attractions scattered across the municipality.",
    faqs: [
      {
        question: "Is Qingyuan one compact countryside destination near Guangzhou?",
        answer:
          "No. Qingyuan is a large municipality in northern Guangdong. The city, Qingxin resorts, Yingde interests and Lianzhou cave chapter have different roads and bases. A selected closer outing may work from Guangzhou, but that does not make the whole region one easy day trip.",
      },
      {
        question: "How many nights should I spend in Qingyuan?",
        answer:
          "Two nights give one full day for one coherent chapter; three can add another distinct interest or slower hotel time. A wider multi-county route needs complete transfer days and useful local stays. Count arrival and departure before fixing the duration.",
      },
      {
        question: "Should I choose a Qingyuan resort or an Yingde countryside stay?",
        answer:
          "Choose the resort when the actual room, meals and facilities are the purpose. Choose Yingde for a confirmed tea or karst interest and a suitable local base. Compare exact addresses and full roads; a Qingyuan hotel label does not place every property near the tea host or peaks.",
      },
      {
        question: "Can I visit Yingde tea producers outside harvest?",
        answer:
          "A confirmed tasting or learning session can be worthwhile outside active picking. Production observation and hands-on work depend on the actual producer, weather and consent. Agree identified teas, language, subject and format rather than assume a year-round factory demonstration.",
      },
      {
        question: "Is Lianzhou Underground River the same as Qingyuan rafting?",
        answer:
          "No. A cave visitor route with any operating boat segment and an outdoor rafting activity have different locations, conditions and physical requirements. Check the actual operator, route and current operation for each; the word river does not establish the same experience.",
      },
      {
        question: "Does a hot-spring hotel include a private bath?",
        answer:
          "Not automatically. Confirm the actual room and pool, admission, privacy, opening, temperature, cleaning and steps. A room-only booking or hot-spring theme is not proof of a private natural-source bath, and no medical outcome should be assumed.",
      },
      {
        question: "Is a Qingyuan extension included in your Guangzhou–Shenzhen tour?",
        answer:
          "No extension should be assumed from the regional setting. No matching published Qingyuan product is recommended here. A countryside, tea or resort chapter needs a tailored proposal specifying the property, roads, hosts, activities and inclusions.",
      },
    ],
    culturalStory: {
      title: "Tea and countryside become interesting through specific questions",
      paragraphs: [
        "A useful tea session begins with an identified product rather than a famous regional name. Ask which leaves are being tasted, how their processing develops the cup and how brewing changes the result. Black tea and the Chinese term hong cha describe the same broad category from different naming perspectives, not contradictory colors. A good host can connect the terminology to the actual tea without turning the visit into a lesson in expensive labels or an obligation to purchase.",
        "The countryside also has working lives beyond its views. Fields, village lanes and craft or food production are not an unrestricted visitor set. Interpretation should explain the particular place and the people who have agreed to participate. A regional guide can suggest a subject, but a meaningful hosted exchange needs actual consent, language support and time. That approach respects contemporary life rather than imply every rural community offers the same traditional performance.",
      ],
    },
    foodStory: {
      title: "A good rural meal needs an actual kitchen and a practical time",
      paragraphs: [
        "Qingyuan chicken is a familiar regional food reference, but a worthwhile meal depends on the actual kitchen, preparation and sourcing claim rather than the dish name alone. Ask what is freshly cooked, how portions are shared and whether chicken, tofu, vegetables, rice or noodles fit the group's appetite. A countryside lunch should support the day's roads and learning instead of add another long drive solely for a promotional restaurant name.",
        "Check soy, wheat, sesame, peanuts, eggs, meat stocks and shared preparation where relevant. A vegetable dish does not establish vegetarian cooking, and a rural kitchen may have limited capacity for serious allergies. Confirm ability and a practical alternative in advance. For tea-led visits, plan food and non-tea drinks as well as caffeine preferences; guests should be able to decline another cup without reducing the value of the cultural session.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / one chosen base",
        title: "Reach the actual property and settle well",
        description:
          "Complete the gateway road and final approach, check the quoted room and confirm meals and current operation. Review the next day's host or public route. Keep an essential appointment away from uncertain arrival rather than promise an ambitious activity before check-in.",
      },
      {
        day: "Full local day",
        title: "Give one purpose enough time",
        description:
          "Use the confirmed tea or countryside route, a separately planned cave chapter or genuine resort time according to the chosen base. Allow interpretation, lunch and rest. These are different alternatives, not a single municipal circuit. Pools, boats and rafting require their own current suitability and operation review.",
      },
      {
        day: "Departure or another meaningful day",
        title: "Protect the full onward connection",
        description:
          "Allow breakfast, bags and the real road to the ticketed gateway or next room. Add a third night for a distinct subject or slower stay. A distant second county needs another route assessment. This outline is illustrative, not a published package or guarantee of hosts, production, pools, boats, activities or private access.",
      },
    ],
  },
};
