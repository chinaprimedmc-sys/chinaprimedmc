import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jinan.svg",
  alt: "Jinan planning diagram distinguishing an old-city spring walk, a separate eastern museum visit and additional Shandong travel; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const jinanGuide: ExpandedDestination = {
  id: "jinan",
  name: "Jinan",
  region: "east",
  kicker: "Spring-fed lanes, lakeside life & a thoughtful Shandong stay",
  description:
    "Understand Jinan through its springs and old-city waterways, choose a hotel that supports the walk, and allow separate time for Shandong collections or a wider provincial journey.",
  stay: "2–3 nights",
  bestFor: "Everyday city life, spring landscapes and regional history",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["taian", "qufu", "qingdao", "tianjin", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jinan Travel Guide: Springs, Old City & Where to Stay",
    seoTitle: "Jinan Travel Guide: Springs & Where to Stay",
    seoDescription:
      "Plan Jinan with Baotu Spring and Daming Lake choices, old-city hotel advice, Shandong Museum, station transfers and a well-paced route onward to Qingdao.",
    answer:
      "Jinan (济南) is Shandong's capital, known for natural springs that shape its parks, waterways and old-city neighborhoods. Visit for a different urban experience from China's major imperial monuments: spring pools, waterside lanes, Daming Lake and a regional food tradition. Baotu Spring is a principal introduction, but the value of a stay lies in connecting the water landscape with everyday city life. This is Jinan in Shandong, not Ji'an in Jiangxi. The nickname Spring City refers here to water springs; it should not be confused with Kunming's use of the same English nickname for its climate.",
    stayAnswer:
      "Two nights usually give one full day for a selected spring-and-old-city route, with arrival and departure treated as travel periods. Three nights add a second full day for Shandong Museum, another chosen subject or a slower pace. One night can work with a useful arrival and late departure, but should not promise all the springs, the lake, the museum and a mountain walk. If Mount Tai or Qufu matters, give those places their own travel and visiting time rather than treating Jinan as proof they fit into the same day.",
    hotelAnswer:
      "For a first spring-focused stay, compare actual hotel addresses around Quancheng Square and the old-city or Daming Lake surroundings. Choose the exact street for walking access, quiet sleep, dining and vehicle pickup; being near a lake does not establish a lake view from the room. An eastern-city property can suit Shandong Museum or a particular modern hotel, with separate journeys back to the old center. Jinan West or East station accommodation serves a different logistical need. A premium room should improve comfort and the complete route, not simply carry a spring or heritage name.",
    sightseeingQuestion: "Should you prioritize Baotu Spring or Daming Lake?",
    sightseeingAnswer:
      "Choose Baotu Spring for a focused introduction to Jinan's spring pools and landscaped setting. Choose Daming Lake for a broader waterside landscape, a selected shore walk and time to observe local life. They complement one another but are different visits. With one full day, combine a meaningful spring visit with a manageable old-city and lake section, instead of attempting every park and the whole lake perimeter. Spring flow, water level and weather vary, so plan for the landscape and its story rather than a guaranteed photographic appearance.",
    visitorResources: [
      {
        label: "Jinan municipal government",
        href: "https://www.jinan.gov.cn/",
        scope:
          "Municipal context and public notices. Verify attraction access, spring conditions, museum reservations, lake activities and accommodation services with the relevant operator for your date.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Check the actual train, date and full station names, including both ends of any Shandong connection; this does not establish a hotel-to-hotel transfer time.",
      },
    ],
    serviceScope:
      "A tailored Jinan proposal can specify the hotel and room, a selected spring-and-neighborhood route, guiding, road transfers and named admissions. Interpretation should connect the water, city layout and regional history. A lake boat, particular museum exhibition, food host or specialist meeting needs its own availability and inclusion. Share walking limits, dietary needs and actual train details before setting the order and pace.",
    routeAdvice:
      "Jinan can anchor an inland Shandong chapter before Qingdao's coastal neighborhoods. Beijing or Tianjin offers a different northern-city context when the actual transport sequence fits. Mount Tai and Qufu add distinct mountain and Confucian subjects, each requiring its own practical assessment and usable visiting time. There is no matching published Jinan product recommended here. Use the outline below to discuss a tailored stay, then choose the onward city by interest and complete hotel-to-hotel travel rather than the provincial map alone.",
    practicalPlanning: {
      timing:
        "Give the spring and old-city area a coherent walking window with lunch and seated breaks. Choose a lake section before adding more parks. Put Shandong Museum on a separate or deliberately shortened day because it lies east of the old center and deserves attention of its own. A train departure should follow a complete transfer plan, not depend on finishing a long lake circuit at an assumed time.",
      walking:
        "Expect mixed paving, thresholds, narrow lanes, water edges and standing at spring pools. A short old-city route can be easier than a full lakeside circuit, but check its actual surfaces and seating. Qianfoshan, or Thousand Buddha Mountain, adds slopes and steps and needs a different mobility decision. Discuss the entrance, selected path and meeting point rather than assuming a private vehicle reaches every waterside lane.",
      cost: "Compare the room and address, guided hours, named park or museum arrangements, road transfers and actual rail class. Lake activities, additional exhibitions and optional mountain transport should be specified separately when included. A central hotel can save some transfers; a modern eastern property may justify driving when the room and schedule suit. Judge a premium by useful comfort, interpretation and time rather than unverified private spring access or priority admission.",
    },
    attractions: [
      "Baotu Spring / Baotu Quan",
      "Daming Lake on a selected shore route",
      "Black Tiger Spring / Heihu Quan surroundings",
      "Qushuiting Street and selected old-city lanes",
      "Shandong Museum as a separate collection-led visit",
      "Qianfoshan / Thousand Buddha Mountain as an optional hill interest",
    ],
    stays: [
      {
        label: "1 night: one clear introduction",
        advice:
          "Choose the spring-and-old-city subject when the actual travel times leave a useful window. A late arrival and early train leave little sightseeing value. Avoid claiming a complete lake walk, several spring parks and the provincial museum from one short stop.",
      },
      {
        label: "2 nights: one full spring-and-city day",
        advice:
          "Visit a selected spring setting, connect nearby lanes and a manageable lake section, then leave time for a good meal. Use partial travel days gently. This is a sensible introduction when Jinan's water landscape is your main interest.",
      },
      {
        label: "3 nights or more: add a distinct regional subject",
        advice:
          "Give Shandong Museum its own useful window, choose a separate hill interest or slow the walking pace. Add another Shandong destination only with its real transfers and visiting needs included. More nights should deepen the stay rather than turn each day into another version of the same park walk.",
      },
    ],
    hotelAreas: [
      {
        name: "Quancheng Square and the central spring district",
        advice:
          "A useful first comparison for a spring-focused stay and city dining. Check the exact entrance-to-hotel walk, crossings, room noise and pickup. A central address helps with selected visits but does not put every spring, museum or station within an easy stroll.",
      },
      {
        name: "Daming Lake and old-city surroundings",
        advice:
          "Consider for waterside atmosphere or a particular smaller property. Establish the actual lake section, pedestrian access, luggage handling, bathroom and sound insulation. A lane address may add character while making vehicle access less convenient; compare both before booking for guests with mobility needs.",
      },
      {
        name: "Eastern city and museum-oriented stays",
        advice:
          "Choose a specific modern hotel or eastern appointment as the reason to stay here. Include the old-city drive and evening food plan. Shandong Museum is one destination in a broad district; its name on a hotel description does not prove walking proximity or confirmed admission.",
      },
      {
        name: "Jinan West, Jinan East or airport accommodation",
        advice:
          "Useful for an actual early departure or late arrival. These are different gateways, not one transport district. Compare the exact ticket with both the hotel and sightseeing plan before choosing convenience for a single train over the rest of the stay.",
      },
    ],
    tradeoffs: [
      {
        title: "Follow a water story rather than count springs",
        advice:
          "Baotu Spring, Black Tiger Spring and old-city waterways offer different settings. Choose a sequence that explains how water shapes the city, with a route the group can comfortably walk. Pools and channels are not swimming or unrestricted drinking-water facilities. Enjoy the public landscape, follow local barriers and obtain drinking water from a suitable source rather than copying an unfamiliar practice seen along the way.",
      },
      {
        title: "A lived-in lane and a busy food street do different jobs",
        advice:
          "Qushuiting's waterside lanes can support a quieter architectural and neighborhood walk; Furong Street is a more concentrated visitor food-and-shopping interest. Both can be lively, and neither guarantees a scene untouched by tourism or modern life. Choose a few details to understand, respect residents and do not assume access to private courtyards.",
      },
      {
        title: "Separate regional collections from a mountain climb",
        advice:
          "Shandong Museum offers a collection-led introduction to the wider province. Qianfoshan offers a different landscape and religious-hill interest with its own walking demands. They are not interchangeable rainy-day substitutes. Let the collection, weather, access and physical ability determine the choice instead of automatically adding both after a full spring-and-lake day.",
      },
      {
        title: "Mount Tai and Qufu need their own visiting windows",
        advice:
          "Mount Tai is a mountain journey near Tai'an, while Qufu is associated with Confucius and major ritual and architectural sites. Neither is simply another park in Jinan. Review the exact station, final road transfer, entry and walking before fitting either into a wider route. A rail connection alone does not establish time for a full mountain visit or a meaningful Confucian heritage day.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "taian",
        advice:
          "Tai'an provides a separate Mount Tai stay with a deliberately chosen walking or assisted route. Compare exact stations, hotel transfers and the actual return stages before making it a day visit. Protect Jinan's spring and museum time, and do not assume cable assistance removes all upper-mountain steps.",
      },
      {
        slug: "qufu",
        advice:
          "Qufu adds the distinct ceremonial, family and lineage settings of the Confucius temple, Kong family mansion and cemetery. Compare a selective day visit with two nights that protect one full cultural day. Use the exact stations and both final transfers; the museum and Nishan are separate choices rather than automatic additions to every Jinan excursion.",
      },
      {
        slug: "qingdao",
        advice:
          "Qingdao adds coastal neighborhoods, a different architectural history and time by the sea. Allow separate nights and select the actual train and station pair. Jinan's springs and Qingdao's seafront provide contrast; they are not two stops to exhaust during one transfer day.",
      },
      {
        slug: "tianjin",
        advice:
          "Tianjin adds river trade, former-concession streets and Haihe evenings. Choose it for that different urban story, then assess the full station-to-hotel connection. Shared northern food or rail links do not make the cities interchangeable day trips.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing supplies an imperial-capital and Great Wall chapter alongside Jinan's water-shaped city. Retain proper Beijing sightseeing days and compare the exact train, stations and transfers. A short stay in each city is less convincing when every usable morning is lost to travel.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn generally offer a comfortable basis for city walking, with changing temperatures and some rain still possible. Summer can be hot, humid and rainy, so shorten exposed sections and retain a midday break. Winter can be cold, making the room's heating and shorter outdoor routes important. Spring flow and water appearance depend on conditions rather than a guaranteed calendar window. Choose the water landscape, city and regional history as the core interests instead of planning around one photograph of a pool in full flow.",
    orientation:
      "Jinan's old center brings several spring, lane and lake interests into a useful visitor area, but the modern city extends much farther. Shandong Museum lies east of that core; Qianfoshan adds another direction and a hill route. Jinan railway station, Jinan West and Jinan East are distinct gateways. Yaoqiang airport is another transfer. Use those real locations to choose a hotel and day plan rather than assuming everything in a provincial capital is close to the old-city walk.",
    experiences: [
      "Connect a principal spring with selected old-city waterways, learning how water shaped the neighborhood",
      "Choose a manageable Daming Lake section with time for everyday city life and a seated break",
      "Add a regional collection or a thoughtful Shandong meal instead of rushing through every park",
    ],
    planningNotes: [
      "Choose the actual spring, lane and lake route before fixing the walking length",
      "Distinguish Jinan, Jinan West and Jinan East stations from the airport transfer",
      "Give Shandong Museum, Qianfoshan and onward provincial visits their own time",
    ],
    arrival:
      "Jinan Yaoqiang International Airport uses code TNA. Jinan railway station, Jinan West and Jinan East are different rail arrival points. Send the exact ticket and hotel address for pickup. A Shandong route may use another city's station later; identify both ends rather than booking a generic provincial transfer. For a short stay, compare the complete journey with luggage, boarding and the final road connection.",
    gettingAround:
      "Selected walking works well within the old-city area, with road transfers for the hotel, museum and farther interests. Narrow lanes and pedestrian spaces need agreed meeting points. Keep the route short enough to notice the water and buildings rather than repeatedly rushing back to a car. Review steps, surfaces and resting places for mobility needs; a scenic loop on a map is not proof of a convenient wheelchair route.",
    stayStrategy:
      "Use one base for a short visit. Choose central walking convenience when springs and old-city evenings are the priority, or a particular eastern property when its room and schedule justify driving. Compare quietness, bedding, bathroom, climate control, breakfast and luggage access. Protect time to enjoy the hotel if it is a major part of the choice. An overnight that leaves only sleep between trains adds less value than two nights with one complete day.",
    firstTimerNote:
      "Jinan rewards attention to how a city lives with water. A spring pool, a narrow channel, a household frontage and a broad lake are different scales of the same story. Follow a few of those connections and leave time to sit and eat. That gives the visit a clearer purpose than using Jinan solely as a rail base while promising every major Shandong attraction around it.",
    faqs: [
      {
        question: "Is Jinan worth visiting in Shandong?",
        answer:
          "Yes if natural springs, old-city waterways and everyday urban life appeal to you. It offers a different focus from Qingdao's coast, Mount Tai or Qufu's Confucian heritage. Choose it for that interest and allow a full usable day rather than adding it only as a station stop.",
      },
      {
        question: "How many days do you need in Jinan?",
        answer:
          "One full day, usually with two nights, suits a selected spring, old-city and lake introduction. Three nights add a second full day for Shandong Museum, a different subject or a slower pace. One night depends on actual arrival and departure and requires a narrower focus.",
      },
      {
        question: "Where should I stay in Jinan for the springs?",
        answer:
          "Compare actual addresses around Quancheng Square and the old-city or Daming Lake surroundings. Check the selected walking route, quietness, bathroom, luggage and vehicle access. A lake-area name does not establish a lake-view room or a useful visitor entrance.",
      },
      {
        question: "Are Baotu Spring and Daming Lake the same attraction?",
        answer:
          "No. Baotu Spring introduces a spring-pool and landscaped setting; Daming Lake offers a broader waterside landscape with different walking choices. They can complement one another, but choose a manageable sequence rather than assuming one entry or short circuit covers both completely.",
      },
      {
        question: "Can you combine Jinan, Mount Tai and Qufu in one visit?",
        answer:
          "They can form a wider Shandong route with separate usable visiting periods and exact transport. Mount Tai requires a mountain-access and physical-ability decision; Qufu needs its own heritage time. Do not assume one Jinan day covers all three simply because trains connect their wider areas.",
      },
      {
        question: "Which Jinan station is best for sightseeing?",
        answer:
          "Choose by the actual train and complete hotel transfer. Jinan railway station is different from Jinan West and Jinan East, and services use different gateways. A shorter scheduled train ride is not automatically the fastest or most comfortable journey to your particular hotel.",
      },
      {
        question: "Are Jinan and Ji'an the same city?",
        answer:
          "No. Jinan is Shandong's capital, written 济南. Ji'an in Jiangxi is another city, written 吉安. Use the province and exact station or airport when booking. The English nickname Spring City also needs context because it is used for more than one Chinese city.",
      },
      {
        question: "What food should I try in Jinan?",
        answer:
          "Shandong cooking offers wheat-based foods, soups and varied savory dishes. Tangcu liyu, sweet-and-sour carp, is a familiar regional choice and contains bones; a simpler noodle, dumpling or vegetable meal may suit others better. Ask about stocks, fillings, seafood, sauces and shared preparation for allergies or dietary requirements.",
      },
    ],
    culturalStory: {
      title: "Understand a city through its water",
      paragraphs: [
        "Jinan's springs are not simply decorative ponds placed in a modern park. Their relationship with channels, settlements and the lake helps explain the city's identity. A useful walk changes scale: look closely at a spring setting, follow a selected lane and then compare it with the wider waterside landscape. The guide's role is to connect those observations, while distinguishing natural water behavior from later landscaping and visitor facilities.",
        "The neighborhood is contemporary as well as historical. Busy visitor streets, quieter household fronts and modern businesses coexist. Respect doors, courtyards and people rather than treating every lane as a staged scene. If regional history is the main interest, add a carefully chosen museum collection with its own time and context. The water-shaped city and the province's archaeological story complement one another without needing to become the same rushed walk.",
      ],
    },
    foodStory: {
      title: "A Shandong meal with enough time to enjoy it",
      paragraphs: [
        "Jinan is a useful place to explore Shandong cooking through a seated meal rather than a series of crowded snack stops. Sweet-and-sour carp, often called tangcu liyu, offers one recognizable direction, with fish bones and a pronounced sauce to consider. Wheat foods, soups and vegetables can provide a more comfortable starting point for guests who prefer a simpler meal. Choose portions and dishes around the group instead of assuming everyone wants the same regional signature.",
        "Furong Street can be enjoyable for atmosphere and selected tastes, but it is not the only way to eat locally. A quieter restaurant near the day's route may work better for conversation, seating and dietary care. Discuss meat stocks, seafood, wheat, sesame, soy, sauces and shared equipment before ordering where relevant. Guide-assisted ordering is useful; the actual restaurant still needs to understand any strict restriction.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle near the chosen city interest",
        description:
          "Transfer from the named station or airport. Keep the first meal convenient and add only a short neighborhood or lake-side introduction that fits the actual time and weather.",
      },
      {
        day: "Full day 1",
        title: "Springs, lanes and a selected lake shore",
        description:
          "Choose a principal spring visit, then connect manageable old-city lanes and a Daming Lake section with lunch and seated breaks. Avoid trying to complete every spring park and the entire lake perimeter.",
      },
      {
        day: "Optional extra full day",
        title: "A regional collection or a different city subject",
        description:
          "Give Shandong Museum a useful window subject to current admission, or select another interest with a separately reviewed walking route. This extra day normally needs a third night; Mount Tai or Qufu requires a wider transport and visiting plan.",
      },
      {
        day: "Departure",
        title: "Continue to a distinct Shandong chapter",
        description:
          "Allow the complete station transfer before continuing to Qingdao or another planned destination. Beijing or Tianjin needs its own usable time. This outline is illustrative, not a published product or an assurance that every optional visit is included.",
      },
    ],
  },
};
