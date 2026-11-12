import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wenzhou.svg",
  alt: "Original Wenzhou planning schematic separating the city, Yandang Mountain, Nanxi River and Dongtou, with different accommodation and arrival choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const wenzhouGuide: ExpandedDestination = {
  id: "wenzhou",
  name: "Wenzhou",
  region: "east",
  kicker: "Choose the city, the rock landscape, the river villages or the coast",
  description:
    "Discover Wenzhou's old-city streets and regional food, then choose a distinct Yandang Mountain, Nanxi River or Dongtou stay with the right base and complete transfers.",
  stay: "1–2 city nights; 3–4 regional nights for one substantial landscape chapter",
  bestFor:
    "Southern Zhejiang culture, regional food and thoughtfully chosen mountain or village extensions",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "dongtou",
    "nanxi-river",
    "yandang-mountain",
    "linhai",
    "ningbo",
    "lishui",
    "songyang",
    "hangzhou",
    "fuzhou",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Wenzhou Travel Guide: City, Mountains, River Villages & Stays",
    seoTitle: "Wenzhou Guide: City, Landscapes & Stays",
    seoDescription:
      "Plan Wenzhou city and compare Yandang Mountain, Nanxi River and Dongtou. Choose useful nights, actual hotel bases and complete transfers for a tailored route.",
    answer:
      "Wenzhou (温州) is a city and wider prefectural area in southern Zhejiang. The city offers old commercial streets, an Ou River setting and a distinctive food culture. Its regional landscapes require different plans: Yandang Mountain (雁荡山) for rock formations and selected mountain routes, the Nanxi River (楠溪江) area in Yongjia for village and river-country interests, and Dongtou (洞头) for a separately chosen coastal stay. Start with one or two city nights or go directly to the landscape base that serves your main interest. A regional Wenzhou label does not make these places one compact day trip, and the city is not an obligatory hotel base for all of them.",
    stayAnswer:
      "One useful city night can add an old-street walk, dinner and a shorter cultural visit when transport fits. Two nights provide one full day for a more thoughtful city introduction. For a substantial city-plus-landscape route, compare three or four nights across the actual bases: the room moves and usable arrival hours matter. Choose one of Yandang, Nanxi River or Dongtou first. Combining all three needs a longer itinerary and distinct reasons to change bases, not just another scenic name. If the landscape is the sole purpose, assess traveling directly there rather than adding a city night by default.",
    hotelAnswer:
      "Choose a central Wenzhou room for the old-city route, meals and an urban evening; compare the exact address and vehicle approach. A Yandang-area property serves selected mountain sectors, a Nanxi River-area stay serves a particular village and river route, and a Dongtou property serves a coastal purpose. They are different bases. Check the booked room's bathroom, sound insulation, climate control, breakfast, dinner options and final approach. A river or sea view does not establish a public walk, swimming access or reliable dining, and a rural room should be comfortable in wet weather as well as in photographs.",
    sightseeingQuestion: "Should I choose Yandang Mountain, Nanxi River or Dongtou?",
    sightseeingAnswer:
      "Choose Yandang for its rock landscape and a selected mountain route matched to your walking needs. Choose Nanxi River for a specific village, public walking route and countryside stay, with any river activity assessed separately. Choose Dongtou for a particular coastal property and named shore interest, after checking conditions and access. None is automatically the best choice for every guest. A shorter trip is often stronger with one landscape chapter explored well, especially when a city visit and the full onward journey also need time.",
    visitorResources: [
      {
        label: "Wenzhou municipal government",
        href: "https://www.wenzhou.gov.cn/",
        scope:
          "Reference entry point for city and regional background and public notices, mainly in Chinese. Confirm current city interiors, Jiangxin Island access, named mountain sectors, village routes, coastal sites and activities separately. Regional information does not establish private-house access, rafting, a usable beach or a particular hotel facility.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and full station names for the actual route. Wenzhou South, Wenzhou North and Yandangshan serve different final journeys where suitable services exist. Compare the complete hotel or venue transfer rather than infer the best gateway from the broad Wenzhou name or the train sector alone.",
      },
    ],
    serviceScope:
      "A tailored Wenzhou plan should identify the city walk or named landscape route, guide language, admissions, exact pickup and complete onward transport. Specify walking needs, useful rest points and a wet-weather alternative. For a regional stay, agree the actual property, room and dinner plan. River activities, boats, coastal access and specialist cultural meetings need their own real providers and confirmed conditions. Private guiding helps explain the place and pace the day; it does not authorize access to private homes, working facilities or restricted shores.",
    routeAdvice:
      "Tell us which experience matters most: city food and history, Yandang's rock formations, Nanxi River villages or time at a specific coastal property. Share dates, starting hotel, available nights, walking needs and room priorities. We can compare a selective city stop with a regional stay and choose the gateway from the final address. Continue north to Linhai or Ningbo for a different urban-cultural chapter, or inland toward Lishui for a separately planned rural interest. Request a tailored proposal with named visits, rooms and services; no matching published Wenzhou package is currently listed here.",
    practicalPlanning: {
      timing:
        "Keep the city introduction selective, with a proper meal and a relevant cultural visit rather than several distant regional detours. An outing to Jiangxin Island needs current access and return arrangements checked before a fixed departure. At Yandang, named sectors and any evening presentation follow different schedules; Nanxi village visits and a coast stay need their own daylight and weather plan. Heavy rain, storms or strong coastal winds can change outdoor access. Leave enough time for the actual next station or hotel instead of returning across the region just to use a familiar city gateway.",
      walking:
        "Old-city streets can involve uneven surfaces, thresholds and standing. Choose a manageable route around Wuma Street and the surrounding cultural area rather than assume every lane is equally useful. Yandang's sectors have different stairs, slopes and distances; a scenic-area name does not describe the effort. Village lanes and coastal viewpoints add their own surfaces and exposure. Request the named start, finish, rest points and shorter alternative, especially for knees or balance. A private car improves connections but cannot remove every path, step or restricted entrance.",
      cost: "Compare the same city and landscape sequence, complete transfers, guide time, named admissions and room categories. Separate internal transport, any boat or river activity and a specialist session from general guiding. A landscape base can add dining and road costs even when its room rate looks attractive. Check cancellation terms and a sensible alternative for weather-dependent activities. Premium value comes from comfortable rooms, good interpretation, realistic journeys and enough time, not a promise of exclusive villages or unverified access.",
    },
    attractions: [
      "Wuma Street / 五马街 and a selected old-city lane route for commercial and everyday urban context",
      "A relevant current Wenzhou Museum display when it matches the cultural interest",
      "Jiangxin Island / 江心屿 for a distinct Ou River cultural outing, with access and return confirmed",
      "Yandang Mountain's named sectors, such as Lingfeng, Lingyan or Dalongqiu, chosen for their differences",
      "A specific Nanxi River village or public countryside route in Yongjia",
      "A named Dongtou coastal site and a property chosen for its actual setting",
      "A local meal introducing Wenzhou fish-ball preparations, noodles or other dishes from the actual kitchen",
    ],
    stays: [
      {
        label: "1 city night / a useful food and old-street chapter",
        advice:
          "Choose this when arrival and departure leave an evening and a meaningful visit. Keep the route manageable and the meal unhurried. A late flight and early train create a transit night, not the same city introduction.",
      },
      {
        label: "2 city nights / one full day",
        advice:
          "Give the old-city and cultural interests proper attention, with an Ou River or Jiangxin chapter only when current access and time fit. Do not automatically spend the full day driving to several regional landscapes and back.",
      },
      {
        label: "3–4 regional nights / one substantial landscape choice",
        advice:
          "Compare a useful city night with going directly to the chosen Yandang, Nanxi River or Dongtou base. Give the landscape enough time and retain weather flexibility. Confirm the exact overnight sequence instead of assuming all nights belong in central Wenzhou.",
      },
      {
        label: "Longer regional route / distinct reasons for each move",
        advice:
          "Add another landscape when its experience genuinely differs and usable days support it. Count complete road journeys, luggage and check-in. A mountain day, village day and coastal stay can be rewarding, but each should earn its time and room choice.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Wenzhou / city culture and meals",
        advice:
          "Map the actual old-city route, restaurants and room. Check road or evening noise, lifts, bathroom, climate control and pickup. A station-area or airport hotel serves a different purpose from a central cultural stay.",
      },
      {
        name: "Yandang-area property / a specific mountain plan",
        advice:
          "Choose from the named sectors and actual road approach, then compare the room, dining, noise and final luggage walk. A property using Yandang in its name is not automatically beside every entrance or appropriate for every walking route.",
      },
      {
        name: "Nanxi River / a named Yongjia village or countryside base",
        advice:
          "Start with the desired village and public route, then assess dinner, bathroom, moisture, stairs, climate control and vehicle access. The river-area label covers different places; it does not guarantee a waterfront path, a usable swimming place or a confirmed rafting service.",
      },
      {
        name: "Dongtou / a particular coastal stay",
        advice:
          "Choose the actual property, room outlook, meals and permitted shore route. Check wind exposure, steps and the final approach. A sea view is different from a bathing beach, and an island-related address does not establish a required or operating ferry.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose the region before choosing the station",
        advice:
          "The best gateway for a central city hotel may differ from the best approach to Yandang or a Yongjia village. Compare dated services, both road transfers and the actual final address. An administrative relationship does not make a central Wenzhou hotel a convenient base for every regional visit.",
      },
      {
        title: "Yandang is not one interchangeable mountain circuit",
        advice:
          "Lingfeng, Lingyan and Dalongqiu offer different landscapes and walking decisions. Choose the named sector, route and current access for your interest and abilities. An evening route, waterfall visit and longer mountain walk should not be sold as one effortless continuous outing; water flow and visibility depend on conditions.",
      },
      {
        title: "A village visit and a river activity need different plans",
        advice:
          "Nanxi River can support architecture, public walks and a rural stay without requiring a boat or raft. Any activity needs a named provider, current conditions, boarding requirements and terms. Respect private courtyards and daily village life rather than assume that private guiding includes household entry.",
      },
      {
        title: "Coastal scenery is not a beach-holiday guarantee",
        advice:
          "For Dongtou, judge the stay by the actual property, meals, public routes and current conditions. A sea-view room does not establish safe swimming, a clean bathing beach, a fishing trip or an operating boat. Keep a useful alternative for wind and rain and let the room itself justify time at the coast.",
      },
      {
        title: "A business reputation does not create a visitor appointment",
        advice:
          "Wenzhou's commercial history can be a subject for city interpretation. Retail browsing, business meetings, wholesale sourcing and factory access are different services. If business is the priority, define the actual sector, contacts, interpreting and appointment needs separately instead of using a leisure guide as an unverified supplier introduction.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "dongtou",
        advice:
          "Dongtou adds a coastal stay with selected village and rocky-shore visits. Choose the actual room, named routes and full road transfer before adding nights. A sea view is different from a managed beach or suitable swimming; offshore trips are separately assessed activities, not an automatic part of a coastal hotel stay.",
      },
      {
        slug: "nanxi-river",
        advice:
          "Nanxi River adds selected Yantou, Cangpo and Furong village walks in Yongjia, with a rural overnight when the room and usable days justify it. Compare the exact village cluster and property rather than use Wenzhou city as an automatic base. Shiweyan and river activities require separate route choices.",
      },
      {
        slug: "yandang-mountain",
        advice:
          "Use the independent Yandang guide to choose Lingfeng, Lingyan and Dalongqiu for their different routes, walking and landscape interests. A local scenic-area base may suit two walking days better than repeated Wenzhou city transfers. Check the actual paths, evening footing and waterfall conditions before counting sectors or choosing the station.",
      },
      {
        slug: "linhai",
        advice:
          "Linhai adds a distinct walled-city and Ziyang Street chapter farther north in Zhejiang. Choose its own room and wall-walking route rather than treat it as another Wenzhou neighborhood. Compare the complete journey and a useful overnight with returning to the same regional gateway after every stop.",
      },
      {
        slug: "ningbo",
        advice:
          "Ningbo adds book culture, museum architecture and maritime history, with city and Dongqian Lake hotels serving different purposes. Keep enough useful time for its own interests. A Wenzhou landscape base and a Ningbo city hotel need a full connection plan, not merely a comparison of train sectors.",
      },
      {
        slug: "lishui",
        advice:
          "Lishui offers a separate inland city and regional base decision. Choose the specific cultural or countryside interest before adding the connection. A generic prefecture name does not make every village, terrace or property part of one compact route from Wenzhou.",
      },
      {
        slug: "songyang",
        advice:
          "Songyang adds specific village and architectural interests within the Lishui area. Compare the actual property, public route and complete road journey with a Nanxi River stay. The strongest trip may choose one rural chapter well rather than repeat several village hotel moves without a different purpose.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, Longjing tea and a substantial city stay. Protect useful lake and tea time before adding southern Zhejiang. Choose dated rail or road transport from the actual Wenzhou-region base, including both final transfers, rather than infer the journey from the city names alone.",
      },
      {
        slug: "fuzhou",
        advice:
          "Fuzhou provides a different Fujian city chapter, including its historic lanes and regional food. A southbound coastal journey can make sense when the exact gateways and usable nights work. It is a new destination rather than an automatic day excursion from a Wenzhou rural or mountain property.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit city walks and selected regional landscapes, with rain and busy holidays still possible. Summer brings heat and humidity, while heavy rain and tropical weather can disrupt mountain, river or coastal plans. Winter calls for reliable heating and warm indoor breaks, particularly in a damp rural room. Choose dates for the wider journey and check the specific forecast, route and operating notices. A waterfall, sea view or village reflection should not be the only reason the day remains worthwhile.",
    orientation:
      "Wenzhou is both a city and a wide prefectural area in southern Zhejiang. Its central urban route, Yandang in the Yueqing area, Nanxi River in Yongjia and Dongtou require different addresses and accommodation decisions. Yueqing and Rui'an are separate county-level cities within Wenzhou; choose a specific local route before deciding whether either merits an overnight. Jiangxin Island is in the Ou River and is not the same outing as Dongtou's coast. Use full Chinese venue, station and room details instead of a broad Wenzhou map pin.",
    experiences: [
      "Read the old-city commercial landscape through a selected walk and local meal",
      "Choose a mountain, river-village or coastal chapter for its actual differences",
      "Stay where the room and complete route support time to understand the place",
    ],
    planningNotes: [
      "Choose one regional landscape first, then settle the base and usable nights",
      "Compare the actual station-to-property journey rather than the city name",
      "Define river activities, shore access and business appointments separately",
    ],
    arrival:
      "Compare the dated route to the actual first hotel or venue. Wenzhou South, Wenzhou North and Yandangshan are different gateways where relevant services exist, and each requires its own final journey. For flights, use the exact airport, terminal and date, including immigration or luggage where applicable. A late arrival may justify a practical city or gateway night, but compare going directly to the intended base when comfortable. Do not place an essential cultural appointment immediately after an uncertain connection.",
    gettingAround:
      "Group the old-city interests into one manageable chapter, with a vehicle for the actual distances to a museum, river visit or hotel. Treat each regional landscape as a separate road plan. At Yandang, select the sector and remaining walking; at Nanxi River, name the village and any provider; at Dongtou, identify the property and permitted shore route. Include toilets, seated breaks and a useful alternative. Private transport does not remove every mountain step, village threshold or weather-related closure.",
    stayStrategy:
      "A central room serves food and city culture, while a specific landscape base should leave enough time to enjoy its own setting. Compare actual room comfort, noise, bathroom, moisture, heating or cooling, dinner and final luggage access. A traditional facade or scenic window is only part of the stay. Count the complete transfers and usable days across all rooms, and avoid returning to central Wenzhou solely because a booking site groups the whole region under the same name.",
    firstTimerNote:
      "Begin with the experience that makes this part of Zhejiang worth your time. City food and commercial history, Yandang rock formations, Nanxi villages and Dongtou coastal views are different interests. Choose one main landscape and a complementary city chapter if wanted. Leaving out a distant stop can improve the trip more than adding another hotel move and a short viewpoint visit.",
    faqs: [
      {
        question: "Is Wenzhou worth visiting?",
        answer:
          "It can be for regional food, old-city commercial history and a deliberately chosen mountain, village or coastal extension. It works best when you identify what interests you rather than expect every famous regional landscape beside the city hotel. With limited time, choose one main chapter and give it enough useful hours.",
      },
      {
        question: "How many nights should I spend in the Wenzhou region?",
        answer:
          "One useful city night can add dinner and a shorter visit; two give one full day. Compare three or four regional nights for a city-and-landscape route, with the actual bases and complete transfers counted. All three landscapes require a longer plan and reasons to change rooms, rather than automatic inclusion.",
      },
      {
        question: "Should I choose Yandang Mountain or Nanxi River?",
        answer:
          "Choose Yandang for rock landscapes and selected mountain routes matched to walking ability. Choose Nanxi River for a particular village, public countryside walk and rural stay, with activities separately confirmed. Compare the real property and full journey; neither is automatically the better choice for every traveler.",
      },
      {
        question: "Can I visit Yandang, Nanxi River and Dongtou in one day?",
        answer:
          "That is not a useful relaxed introduction. They require different journeys and time on site, and their routes have distinct walking and weather needs. Start with one landscape chapter, then decide whether another warrants a separate day and base. A short visit to a map pin is not the same experience as exploring the place.",
      },
      {
        question: "Should I stay in Wenzhou city for Yandang Mountain?",
        answer:
          "Not automatically. Choose the actual Yandang sector and room, then compare going directly to that base with a complete excursion from the city. A city night is useful when its food, cultural visit or arrival logistics adds value. Yandangshan station and a central Wenzhou station serve different final journeys.",
      },
      {
        question: "Can I go rafting on the Nanxi River?",
        answer:
          "Only when a named provider, current operating conditions and suitable visitor arrangement are confirmed. Check the exact route, boarding, weather, participant requirements and inclusions. A village visit or river-view room does not include an activity, and a useful countryside day can work without one.",
      },
      {
        question: "Is Dongtou suitable for a beach holiday?",
        answer:
          "Judge the actual property and named shore site rather than the coastal label. A sea view does not establish swimming, water sports or a bathing beach. Check the room, dining, public route, weather and any activity independently, with a worthwhile alternative for wind or rain.",
      },
      {
        question: "Which station should I use for Wenzhou?",
        answer:
          "Choose from dated services and the final address, comparing Wenzhou South, Wenzhou North or Yandangshan where relevant. Include both local transfers, boarding and luggage. The most useful gateway for a city hotel can differ from the best approach to a mountain property or Yongjia village.",
      },
      {
        question: "Can I visit Jiangxin Island during a city stay?",
        answer:
          "It can be a distinct Ou River cultural chapter when current access, the open route and the complete return fit. Confirm the actual visitor arrangements and weather, leaving a buffer before any onward departure. It is not the same outing as a Dongtou coastal stay.",
      },
      {
        question: "Can a private trip include a Wenzhou factory visit?",
        answer:
          "Only with a real business brief, willing provider and confirmed appointment. Retail, wholesale sourcing, interpreting and production access are different services. A leisure guide and private vehicle do not establish supplier relationships or quality guarantees; define the sector and any later commercial work separately.",
      },
    ],
    culturalStory: {
      title: "Read the commercial city and its countryside at different scales",
      paragraphs: [
        "A walk around Wuma Street and selected old-city lanes can introduce Wenzhou through the relationship between trade, streets and everyday urban life. Choose actual buildings and current displays that support the story, distinguishing historical fabric, repair and modern retail presentation. The wider commercial reputation is context, not evidence of access to a private business. Jiangxin Island offers another Ou River perspective when its current visitor route works, while a museum display can deepen a subject without extending the day into distant landscapes.",
        "Beyond the city, Yandang's rock formations, Nanxi River villages and Dongtou's coastal settlements have their own histories and physical settings. Explain the chosen place through a named public route rather than apply one generic ancient-village or hidden-paradise label. A village may be a lived-in place with contemporary buildings and daily work; a scenic viewpoint can have modern visitor infrastructure. Respect residents' space, distinguish restoration from surviving fabric and let the regional differences shape the route.",
      ],
    },
    foodStory: {
      title: "Order for the actual kitchen, with a small tasting before a full feast",
      paragraphs: [
        "Wenzhou fish balls, yuwan (鱼丸), are often encountered in a form and texture different from the smooth round balls familiar from other cuisines. Ask the kitchen how it prepares them and whether they come in soup or another dish, checking bones, fish and seasoning. Local sticky-rice breakfasts can also be a useful introduction, but toppings, broth and pork vary. Start with a small order and explain dietary needs before choosing a bowl. A menu's regional name is an invitation to ask, not a fixed recipe or provenance guarantee.",
        "A coastal or village menu may offer seafood, river fish and local vegetable dishes. Choose the actual preparation and portion size, ask about bones, shellfish, stock, soy, wheat and alcohol, and do not infer wild or local catch from a waterfront table. Wenzhou's duck tongue, yashe (鸭舌), can be an optional small shared tasting for interested guests rather than a compulsory challenge. A comfortable meal can carry the food story without a purchase stop, while cooking or household dining requires a real willing host and clear arrangements.",
      ],
    },
    itinerary: [
      {
        day: "Optional city chapter",
        title: "Connect the old streets with a proper local meal",
        description:
          "Arrive at the actual central room or chosen entrance and take a manageable old-city walk. Add a relevant display or Jiangxin outing only when its current access and complete return fit. Leave time for dinner and rest; omit the city night when going directly to the main landscape serves the trip better.",
      },
      {
        day: "Regional transfer",
        title: "Move to the base that serves the main interest",
        description:
          "Complete the journey to the chosen Yandang, Nanxi River or Dongtou property. Check in and use a shorter introduction near the actual base rather than add several distant sectors. Settle the next day's route, weather alternative and dinner arrangements.",
      },
      {
        day: "Full landscape day",
        title: "Give one place time to reveal its differences",
        description:
          "Choose named Yandang sectors, a specific village and public river-country route, or a permitted Dongtou shore visit. Match walking to the group and any activity to a confirmed provider. Allow a seated lunch, rest and time at the room instead of driving between all three landscapes.",
      },
      {
        day: "Departure or an additional distinct chapter",
        title: "Continue from the actual regional gateway",
        description:
          "Choose another chapter only when the experience and usable time justify it. Otherwise allow the full journey to the next hotel, station or flight connection. This outline supports a tailored proposal; confirm visits, rooms, activity conditions and included services for your dates.",
      },
    ],
  },
};
