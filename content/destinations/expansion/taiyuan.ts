import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/taiyuan.svg",
  alt: "Taiyuan planning schematic distinguishing Shanxi Museum, Jinci and a separate Pingyao or Datong stay; original diagram, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const taiyuanGuide: ExpandedDestination = {
  id: "taiyuan",
  name: "Taiyuan",
  region: "north",
  kicker: "Understand Shanxi before following its architecture farther",
  description:
    "Choose Taiyuan for Shanxi Museum, Jinci's architecture and regional food, with hotel-area advice and a realistic onward plan for Pingyao or Datong.",
  stay: "2–3 nights for a focused cultural introduction",
  bestFor: "Shanxi collections, timber architecture and a well-paced regional journey",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["wutai-mountain", "handan", "pingyao", "datong", "beijing", "xian"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Taiyuan Travel Guide: Jinci, Shanxi Museum & Hotels",
    seoTitle: "Taiyuan Travel Guide: Jinci, Shanxi Museum & Hotels",
    seoDescription:
      "Plan 2–3 nights in Taiyuan with Jinci, Shanxi Museum, hotel areas, noodle dishes and full station transfers before a separate Pingyao or Datong stay.",
    answer:
      "Taiyuan (太原) is the capital of Shanxi in northern China. Choose it for Shanxi Museum's regional collections, Jinci's architecture and sculpture, and a useful introduction to a province rich in historic buildings. Two nights give one full day for a selected main subject; three allow the museum and Jinci separate time. Taiyuan is a large modern city, not a preserved walled town like Pingyao. Shanxi (山西) is also a different province from Shaanxi (陕西), home to Xi'an. The additional vowel matters when checking a route. Pingyao and Datong are separate destinations with their own nights and complete transfers.",
    stayAnswer:
      "A single night can serve a gateway and meal when flights or trains require it. Two nights offer one full day: choose Jinci with a complementary interest, or a deeper collection-and-city day. Three nights give a second full day for the other subject without compressing the museum, Jinci and a regional transfer together. A fourth night needs a distinct purpose, such as a specifically chosen additional heritage visit or slower pace. Count the real arrival, departure and road journeys before deciding how many visits fit; a short intercity train does not eliminate station transfers.",
    hotelAnswer:
      "Compare an actual Yingze or Xiaodian address for city meals and room comfort with a western Fen River / Wanbailin property selected for the museum and its real surroundings. A modern southern hotel can work for some gateways but may lengthen central visits. A Jinyuan or Jinci-area stay serves a different outlying heritage focus. Plot the exact room, dinner, museum, Jinci and departure point. Check quiet, heating or cooling, lift, breakfast, bathroom and pickup. A river-view category needs confirmation for the booked room; a district name or luxury label cannot establish convenience for every part of the stay.",
    sightseeingQuestion: "Should you prioritize Jinci or Shanxi Museum?",
    sightseeingAnswer:
      "Choose Jinci for a site-based encounter with historic architecture, sculpture, water and landscape, including the celebrated Shengmu Hall / Hall of the Holy Mother and its sculptural setting, subject to current access. It lies outside the central city and deserves a real journey and time on site. Choose Shanxi Museum for a collection-based introduction to the province's archaeology, art and history, selecting galleries by interest and current opening. These visits complement each other but are not neighboring stops. With only one full day, protect the stronger interest instead of adding both to an already crowded arrival or onward-transfer schedule.",
    visitorResources: [
      {
        label: "Taiyuan municipal government",
        href: "https://www.taiyuan.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Confirm named heritage sites, current access, reservations and transport with the actual institutions. General city information does not establish a room view, specialist guide or permission to enter a closed hall.",
      },
      {
        label: "Shanxi provincial government",
        href: "https://www.shanxi.gov.cn/",
        scope:
          "Provincial context and public-service information. Shanxi is distinct from Shaanxi. Background heritage descriptions do not verify current museum displays, ticket scope or access to every historic building mentioned in a regional route.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and full station names. Distinguish Taiyuan South from Taiyuan station and verify the actual Pingyao or Datong arrival point. Scheduled rail time excludes both station-to-hotel transfers and the final approach to heritage accommodation.",
      },
    ],
    serviceScope:
      "Ask for the actual hotel and room, full gateway transfers, guide language, selected museum galleries, named heritage sites and meals. Jinci, an additional temple and any Tianlongshan visit need their own current access and road plan. Specialist architectural or sculptural interpretation should identify the provider and content rather than promise a curator meeting or research access. Private guiding cannot open closed halls, remove photography rules or authorize touching historic material. A noodle demonstration, vinegar-related visit or hosted meal requires a willing provider, agreed language and a clear distinction between learning and optional purchasing.",
    routeAdvice:
      "Use Taiyuan as a worthwhile cultural introduction or an honestly described gateway, then give Pingyao and Datong separate stays. Pingyao adds merchant institutions, courtyard accommodation and outlying temple art; Datong adds Yungang and a different architectural chapter. Beijing or Xi'an can frame the wider journey when actual services leave useful time. No matching published Taiyuan product is recommended here. Request a tailored proposal with dates, full gateways, architecture or collection interests, room priorities and walking needs. Ask which sites fit best and which should be omitted, with all regional transfers visible.",
    practicalPlanning: {
      timing:
        "Anchor a day around the main interest and its current opening or reservation, with time for explanation and a proper lunch. Jinci's journey, entrance and site walk need a dedicated block. A museum visit should identify relevant galleries rather than promise the entire collection before a train. Keep uncertain arrivals modest and do not use the departure day as the default slot for an outlying timed visit. Confirm the actual final station and check-in requirements before fixing the last sightseeing stop.",
      walking:
        "Jinci includes paths, thresholds, steps and standing; access to historic spaces needs its own assessment. Museum galleries add sustained standing even indoors. An urban street route can involve crossings, uneven surfaces and evening crowds. Choose manageable distances, seating, toilets and pickup. A private car reduces district-to-district travel without reaching every hall or removing the remaining walk. Winter ice, summer heat or wet stone can change the route; agree a shorter option rather than describe every heritage visit as easy.",
      cost: "Compare the real room, breakfast, complete gateway journeys, guide language and hours, named admissions and reservation support. A museum-and-city day differs from an outlying heritage excursion or long regional transfer. Specialist interpretation, a hosted food session or an additional temple needs clear scope and actual availability. Spending more should improve sleep, understanding and time use rather than buy an unsupported promise of exclusive access, empty halls or a private encounter with a named expert.",
    },
    attractions: [
      "Shanxi Museum through selected currently open galleries",
      "Jinci and the Shengmu Hall / Hall of the Holy Mother setting, subject to access",
      "A chosen Fen River walk with actual crossings, distance and weather considered",
      "Chongshan Temple as a separate religious and architectural interest when appropriate",
      "A selected city-street and noodle meal introduction, with present use explained",
      "Tianlongshan as a separately researched heritage excursion, not an automatic Jinci ticket inclusion",
      "Pingyao or Datong as distinct onward stays, not additional Taiyuan city sights",
    ],
    stays: [
      {
        label: "1 night: an honest gateway stay",
        advice:
          "Use a dependable room, meal and correct onward transfer. A brief city introduction may fit favorable timing, but late arrival and early departure do not justify promising the museum and Jinci. Choose the room around the actual connection rather than a generic city-center label.",
      },
      {
        label: "2 nights: one focused cultural day",
        advice:
          "Prioritize Jinci or a collection-and-city subject with a manageable contrast and lunch. Give the strongest interest enough time for explanation. If trying to include both main visits, assess current opening and full journeys first and be willing to leave one for another trip.",
      },
      {
        label: "3 nights: two complementary subjects",
        advice:
          "Give Shanxi Museum and Jinci separate useful time, adding only a coherent smaller interest. One comfortable base usually works. A further night should follow a distinct visit or slower pace rather than a need to fill every hour before moving to Pingyao or Datong.",
      },
    ],
    hotelAreas: [
      {
        name: "A central Yingze or Xiaodian address / meals and urban comfort",
        advice:
          "Check the actual room, street noise, heating or cooling and dining choices. These districts are broad and do not put every hotel beside the same attractions. Compare the museum, Jinci and gateway journeys before choosing a central label over a better room elsewhere.",
      },
      {
        name: "A western Fen River / Wanbailin property / museum-oriented planning",
        advice:
          "Consider a particular hotel for the museum and its room or riverside setting, while allowing the route to other visits and dinner. A river promenade may not have a convenient crossing or pickup exactly where wanted. Confirm the actual view and quiet rather than infer them from the property's general images.",
      },
      {
        name: "Jinyuan or Jinci surroundings / an outlying heritage focus",
        advice:
          "This can make sense for a specific property and useful time near the intended site. Compare facilities, meals and complete arrival and departure with a city base. Proximity to one heritage visit does not mean every museum, airport and station is close.",
      },
      {
        name: "A Taiyuan South or airport-oriented room / a specific connection",
        advice:
          "Choose only when the actual ticket and departure hour justify the tradeoff. Taiyuan South, Taiyuan station and Wusu airport are different locations. Include pickup and the full hotel journey; moving rooms for a theoretical saving can cost more usable city time than it provides.",
      },
    ],
    tradeoffs: [
      {
        title: "Jinci deserves architectural explanation",
        advice:
          "A useful visit connects the arrangement of buildings, water, sculpture and documented historical layers. Name what is intended to be seen and distinguish original material, restoration and later additions. Viewing a hall or sculpture from an authorized public position is different from unrestricted entry or close-up photography. Do not guarantee access to every object or interior.",
      },
      {
        title: "A provincial collection is a selection, not the entire province",
        advice:
          "Choose current galleries that prepare the guest for the wider route. Objects can introduce materials, religious art or archaeology without making every site a compulsory onward stop. Confirm display and reservation, and distinguish the collection's interpretation from a promise that a particular famous object will be on view.",
      },
      {
        title: "A reconstructed old-city attraction needs an honest description",
        advice:
          "Commercial or reconstructed heritage-style districts can offer food and an evening atmosphere, but should not be presented as entirely surviving ancient urban fabric. Explain the particular place and current use. Guests seeking documented old buildings may prefer more time at a chosen historic site rather than another shopping frontage.",
      },
      {
        title: "Tianlongshan is a separate research and access decision",
        advice:
          "A mountain-and-grotto heritage visit needs its own road conditions, currently open areas and interpretation. It is not simply another hall inside Jinci. Historic photographs, objects now elsewhere and present remains must be distinguished; do not imply that every sculpture in an art-history account remains visible in its original setting.",
      },
      {
        title: "Pingyao is not a railway-platform sightseeing stop",
        advice:
          "Compare complete hotel-to-hotel transport and the final old-city approach. A short train ride leaves luggage, pickup and walking to organize. A day visit can suit a narrow purpose, while separate nights support courtyard life, evening meals and outlying temples. Do not promise all of Pingyao's main subjects between two Taiyuan activities.",
      },
      {
        title: "Datong adds a distinct regional chapter",
        advice:
          "Yungang, Datong's city temples and the Hanging Temple near Hunyuan have their own access and time needs. Choose actual gateways and stays rather than use one Shanxi label to imply proximity. Combining museum context, Jinci and northern cave art can be rewarding when enough days are allocated.",
      },
      {
        title: "A noodle or vinegar experience needs an actual format",
        advice:
          "A restaurant meal, commercial demonstration, production visit and private lesson are different services. Ask what can be observed or tried, who explains it and whether purchasing is optional. Dietary suitability depends on noodles, stock, toppings, sauces and shared equipment, not simply a province's reputation for noodles and vinegar.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "wutai-mountain",
        advice:
          "Mount Wutai adds a living Buddhist landscape with a selected Taihuai temple stay, separate higher terraces and an independently routed timber-architecture interest. Choose the actual room, full gateway road and physical suitability. Shanxi Museum and Jinci provide useful context, but a Taiyuan city day does not automatically include the mountain.",
      },
      {
        slug: "handan",
        advice:
          "Handan in Hebei adds Xiangtangshan grottoes and a different Zhao-history subject, with Guangfu or Wahuang Palace requiring separate local days. Compare actual dated rail or road services and full transfers before joining it to a Shanxi route. It is not an informal short detour from Jinci or a generic substitute for another Buddhist-art site.",
      },
      {
        slug: "pingyao",
        advice:
          "Pingyao adds a walled merchant city, courtyard nights and separately selected Shuanglin or Zhenguo temple art. Compare the actual station and full final approach to the hotel. Give it useful nights rather than rely on a brief train duration as proof of a complete day visit.",
      },
      {
        slug: "datong",
        advice:
          "Datong adds Yungang's cave sculpture and a different urban temple story. It deserves separate days and a checked rail or road sequence. Hunyuan's Hanging Temple is a further excursion, not a guaranteed convenient stop on every Taiyuan–Datong transfer.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing provides a capital-and-Great-Wall chapter through actual dated transport and full hotel transfers. Protect proper visiting time at both ends. A published Beijing product does not automatically include Taiyuan rooms, Jinci or Shanxi Museum.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an in Shaanxi adds a different historical capital and the Terracotta Warriors. Distinguish Shaanxi from Shanxi in written plans and tickets. Choose a sequence with useful nights, perhaps including Pingyao when justified, rather than compress all three into consecutive transfer days.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit outdoor heritage visits, with wind, temperature changes and rain still possible. Summer can bring heat and rain, making a well-timed outdoor route and an available indoor collection a useful balance. Winter is cold; check heating, daylight and possible ice at paths and thresholds. Major holiday periods can change crowds and accommodation demand. A museum's current opening and the intended heritage access matter more than a broad seasonal claim of quiet or perfect weather.",
    orientation:
      "Taiyuan is Shanxi's capital on the Fen River. Central city hotels, the provincial museum on the western side of the river, Jinci to the southwest, Wusu airport and the separate Taiyuan and Taiyuan South stations create different journeys. Pingyao lies in another part of central Shanxi and Datong farther north. Shanxi and Shaanxi are different provinces. Use the actual address and full Chinese ticket details instead of assuming a regional or district name describes one compact sightseeing area.",
    experiences: [
      "Use selected Shanxi Museum galleries to understand the wider regional journey",
      "Read Jinci through its architecture, sculpture, water and historical layers",
      "Enjoy a thoughtful noodle meal before a separately planned Pingyao or Datong stay",
    ],
    planningNotes: [
      "Give Jinci and the museum time based on actual opening and complete journeys",
      "Compare exact hotel addresses with sleep, meals and all transport points",
      "Distinguish Taiyuan, Taiyuan South, Pingyao stations and the provinces Shanxi and Shaanxi",
    ],
    arrival:
      "Use the full Wusu airport booking or the ticketed station, distinguishing Taiyuan South from Taiyuan station. Include luggage, meeting and the complete journey to the actual hotel. An airport arrival is not arrival at Jinci or a Pingyao courtyard room. If continuing directly to another destination, confirm the final approach and meal rather than attach a full city tour to a long travel day. Keep museum reservations away from uncertain arrivals where possible.",
    gettingAround:
      "Combine planned road or suitable urban transport with manageable walks at the actual sites. The museum, central streets and Jinci are different journeys, and a private vehicle cannot reach every historic hall. Choose real pickup points and time for rest. A Tianlongshan excursion or regional transfer needs its own road assessment and service hours. In poor weather, use a genuinely available alternative rather than assume every indoor site is open without reservation.",
    stayStrategy:
      "Choose one comfortable base for a short city stay, balancing sleep, meals, the principal visits and onward transport. A named riverside room or heritage-style setting should add a real benefit, not simply look impressive in a listing. A practical gateway night is a valid choice when honestly described. If Pingyao is the main purpose, compare direct onward transfer with a useful Taiyuan cultural stop instead of returning to the same city hotel each evening.",
    firstTimerNote:
      "Taiyuan works best when you decide whether it is a cultural chapter or a transport gateway. Shanxi Museum can make later architecture and art easier to understand; Jinci offers a strong site-based subject of its own. Neither needs a rushed checklist of minor stops to justify a stay. Use the city to make the wider route clearer, then give Pingyao and Datong time for their different histories and settings.",
    faqs: [
      {
        question: "Is Taiyuan worth visiting or just a gateway to Pingyao?",
        answer:
          "It is worth a focused stay for Jinci, Shanxi Museum and regional food when those subjects interest you. Two nights give one full day; three allow two complementary days. A gateway-only night is also valid, but should not be described as enough for every main cultural visit.",
      },
      {
        question: "How many days do I need in Taiyuan?",
        answer:
          "Allow two nights for one focused day or three for separate museum and Jinci time. A single night may serve a connection and meal. Judge the actual useful hours and hotel-to-site journeys rather than count a late arrival and early departure as sightseeing days.",
      },
      {
        question: "Should I visit Jinci or Shanxi Museum?",
        answer:
          "Jinci suits a site-based interest in architecture, sculpture and landscape; Shanxi Museum suits a collection-based regional introduction. They complement each other but occupy different locations. With one full day, prioritize the stronger interest and check the complete route before trying to include both.",
      },
      {
        question: "Where should I stay in Taiyuan for sightseeing?",
        answer:
          "Compare an exact central Yingze or Xiaodian address with a particular western Fen River / Wanbailin property for the museum. Jinci-area or gateway hotels serve other priorities. Check room comfort, noise, meals and complete transfers rather than assume one district is closest to every visit.",
      },
      {
        question: "Can I visit Pingyao as a day trip from Taiyuan?",
        answer:
          "A focused visit can be considered when the full transport and useful time fit, but separate nights allow more of the town, evening atmosphere and outlying temples. Include both station transfers, luggage and the final old-city approach. A short scheduled train time is only part of the journey.",
      },
      {
        question: "Are Taiyuan station and Taiyuan South the same?",
        answer:
          "No. Use the full station name on the dated ticket and the actual meeting point. Wusu airport is another gateway. A proposal should also identify the precise Pingyao or Datong station for an onward journey.",
      },
      {
        question: "Are Shanxi and Shaanxi the same province?",
        answer:
          "No. Taiyuan, Pingyao and Datong are in Shanxi (山西). Xi'an is in Shaanxi (陕西). Both can appear in a wider history-focused route, but the spelling difference marks different places and should be clear in bookings and written plans.",
      },
      {
        question: "Does a Taiyuan private guide provide access to every Jinci hall?",
        answer:
          "No. Current site rules, conservation and opening determine access. A guide can explain authorized public areas and the visible architecture or sculpture, but cannot promise closed interiors, unrestricted photography or private handling of historic objects.",
      },
      {
        question: "Is a published Taiyuan private tour recommended here?",
        answer:
          "No matching published product is recommended. Use this guide to request a tailored route with dates, gateways, principal interests, room priorities and walking needs. The proposal should identify real hotels, included visits and transfers, with Pingyao or Datong separately allocated time.",
      },
    ],
    culturalStory: {
      title: "Connect the object, the building and the place",
      paragraphs: [
        "Shanxi Museum and Jinci offer different ways into the province. A gallery can place an object in an archaeological or artistic sequence, while a site visit connects buildings, sculpture and landscape through what remains visible. Good interpretation does not turn those approaches into the same generic history talk. It identifies the particular object or feature, its documented context and the difference between original material, restoration and later interpretation.",
        "That preparation can make a wider Shanxi route more rewarding. Pingyao's merchant institutions, Shuanglin's painted sculpture, Zhenguo's timber architecture and Yungang's cave art are different subjects, each requiring its own time and explanation. Taiyuan can introduce questions to follow rather than a list that must be completed. A specialist's contribution is strongest when the actual knowledge and subject are clear; a premium label alone is not evidence of scholarly access or expertise.",
      ],
    },
    foodStory: {
      title: "Choose the noodle by method, then the meal by the guest",
      paragraphs: [
        "Shanxi's noodle traditions provide a useful introduction when a guide explains how a particular noodle is formed, its texture and the accompanying broth or topping. Knife-shaved noodles are one example, not the only regional meal worth trying. Vinegar can be discussed through how it changes a dish rather than as a compulsory tasting or shopping stop. Choose comfortable seating, sensible portions and a meal timed around the day's visits.",
        "Ask the actual kitchen about wheat, meat stock, soy, egg, dairy and shared utensils. A bowl without visible meat may still use an animal-based broth or topping preparation. Vegetarian requests and serious allergies need advance discussion and workable alternatives. A noodle-making demonstration or vinegar-production visit can add depth when the people, location and activity are genuinely arranged. A restaurant booking or souvenir shop does not automatically provide that learning experience.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the real city base",
        description:
          "Meet at the booked airport or full station name, complete the hotel transfer and allow a regional meal. Keep any short city walk optional. Avoid making a timed museum visit depend on uncertain arrival formalities or roads.",
      },
      {
        day: "First full day",
        title: "Give the main subject enough time",
        description:
          "Choose Jinci with a coherent smaller interest, or a collection-and-city day based on actual opening. Include explanation, a seated lunch and manageable walking. Do not add a Pingyao round trip simply because an intercity train appears short.",
      },
      {
        day: "Optional second full day",
        title: "Add the complementary museum or site",
        description:
          "With a third night, give the other principal subject useful time. Any further temple or specialist session should have a clear purpose and current access. Keep room for rest rather than repeat similar visits to fill the schedule.",
      },
      {
        day: "Departure",
        title: "Continue to a distinct Shanxi chapter",
        description:
          "Use the full onward transfer and named station or hotel, protecting the next destination's check-in and dinner. This two-night outline with an optional third night is illustrative, not a published package or a guarantee of galleries, private interiors or specialist appointments.",
      },
    ],
  },
};
