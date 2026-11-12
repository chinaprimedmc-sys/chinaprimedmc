import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/luoyang.svg",
  alt: "Luoyang planning diagram separating Longmen cave art, a city hotel base and a selected second historical subject; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const luoyangGuide: ExpandedDestination = {
  id: "luoyang",
  name: "Luoyang",
  region: "central",
  kicker: "Longmen sculpture, successive capitals & a considered Henan stay",
  description:
    "Give Longmen's Buddhist sculpture time and context, choose Luoyang's other historical layers deliberately, and build a comfortable city stay around the real rail and road connections.",
  stay: "2–3 nights",
  bestFor: "Buddhist art, early Chinese history and a Xi'an extension",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["gongyi", "anyang", "dengfeng", "zhengzhou", "xian", "datong", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Luoyang Travel Guide: Longmen, Hotels & Ancient Capitals",
    seoTitle: "Luoyang Travel Guide: Longmen & Where to Stay",
    seoDescription:
      "Plan Luoyang's Longmen Grottoes, museums and White Horse Temple. Compare hotel bases, walking, peony-season expectations and a tailored Xi'an connection.",
    answer:
      "Luoyang is a Henan city associated with successive Chinese capitals, best known to many travelers for the Buddhist sculpture of the Longmen Grottoes. Choose it for the relationship between monumental cave art, changing centers of power and museum collections, rather than assuming every ancient capital occupied the present old-town streets. Longmen is a separate riverside site south of the urban center. A meaningful stay gives the caves proper interpretation and chooses another historical subject instead of rushing through every place carrying a capital-history label.",
    stayAnswer:
      "Two nights provide one full day for Longmen and a selected city interest when access and the full transfers allow. Three nights add a second full day for White Horse Temple, a museum or another well-chosen subject. One night can support a focused cave visit with compatible rail tickets, but should not promise the city, several museums and a Dengfeng excursion. A peony visit, if important, needs its own garden and seasonal check rather than a spare hour assumed within the history circuit.",
    hotelAnswer:
      "Compare a modern Luolong-area property for its actual road relationship to Longmen and Luoyang Longmen station, an old-city or Laocheng-area base for evening streets and meals, or a central urban hotel for a particular room and service level. These districts cover broad areas: use the address rather than assuming a district name establishes short transfers. A scenic-area property can suit a specific stay, but room quality, dining and the journey to other sights need review. Check noise, bathroom, temperature control and pickup before selecting a heritage-style room.",
    sightseeingQuestion: "Do you need to visit both banks at Longmen Grottoes?",
    sightseeingAnswer:
      "Make the principal west-bank sculptures, including the Fengxian Temple ensemble when accessible, the core of a first visit. The east-bank side can offer a different perspective across the river and other site interests, but adds its own walking and route decisions. Review the actual entrance, crossings, exit, steps and internal transport before treating both banks as a short level loop. Choose the route around art interest and stamina, not the expectation that every ticket component must be completed.",
    visitorResources: [
      {
        label: "UNESCO: Longmen Grottoes",
        href: "https://whc.unesco.org/en/list/1003/",
        scope:
          "Background on Longmen's Buddhist sculpture and World Heritage significance. This does not confirm current cave openings, routes, evening admission, photography rules or internal transport.",
      },
      {
        label: "Luoyang municipal government",
        href: "https://www.ly.gov.cn/",
        scope:
          "City background and public notices. Check each attraction's current visitor instructions, museum reservations, seasonal gardens and transport arrangements separately for the travel date.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Luoyang stay with the named hotel, guide, road transfers, admissions and onward rail arrangements itemized in the proposal. Guiding should match the art and historical subjects you want to understand. Private transport does not remove Longmen's internal walking, stairs or conservation rules. Closed caves, evening access, specialist meetings and private religious spaces require their own confirmed arrangements and should not be inferred from a premium tour description.",
    routeAdvice:
      "Luoyang can deepen a Xi'an or Beijing itinerary, or form part of a separate Henan route with Zhengzhou and Dengfeng. Use actual stations, full road transfers and usable days to choose the order. Shaolin and Songshan are a distinct excursion or regional chapter, not another Longmen entrance. There is no published Luoyang package recommended on this page. The outline is illustrative; a written proposal should identify the selected cave route, museum or temple and every intercity leg.",
    practicalPlanning: {
      timing:
        "Give Longmen a useful window for the visitor approach, selected caves, interpretation, crossings where chosen and return pickup. Do not judge it only by a map distance from the station. Pair it with a modest second interest and a meal when the schedule allows. Reserve museums around their current booking and opening arrangements. A full Dengfeng or mountain excursion should not be attached to a cave day and a fixed evening departure by default.",
      walking:
        "Longmen includes riverside walking and steps to important sculptures, with different demands on the two banks. An internal shuttle does not eliminate every approach or stair. Review the actual route for mobility, knees and balance, and choose a shorter plan where needed. White Horse Temple and museum visits have their own surfaces, thresholds and standing time. Summer heat, rain or winter footing can change what is comfortable even on a familiar route.",
      cost: "Compare the actual hotel room, guide expertise, road-service hours, selected admissions and included internal transport. A second bank, evening arrangement, specialist interpretation, garden or distant excursion may alter the schedule or quote. Museum entry, special exhibitions, meals and rail class should be identified separately. A premium should correspond to real time, comfort or expertise, not a promise of empty caves, privileged access or guaranteed peony bloom.",
    },
    attractions: [
      "Longmen Grottoes and selected riverside routes",
      "Luoyang Museum",
      "White Horse Temple / Baima Si",
      "Selected old-city streets and meals",
      "A named peony garden when actual seasonal conditions justify it",
    ],
    stays: [
      {
        label: "1 night: a focused Longmen stop",
        advice:
          "Choose the main cave-art visit when the real trains and transfers leave useful time. Do not use the station's Longmen name as evidence that the site can be seen between any two services.",
      },
      {
        label: "2 nights: one full day with city context",
        advice:
          "Give Longmen the principal window and choose a complementary museum or city interest if current access and energy allow. Keep a proper meal and avoid filling an arrival evening with another distant attraction.",
      },
      {
        label: "3 nights or more: a second historical subject",
        advice:
          "Add White Horse Temple, deeper museum time or a separately reviewed regional interest. A spring garden can justify time when the actual bloom suits; more nights do not guarantee flowers or make Songshan an effortless add-on.",
      },
    ],
    hotelAreas: [
      {
        name: "Luolong and the southern modern city",
        advice:
          "Compare for the actual room and road sequence to Longmen, selected museums and the booked station. The area is broad; a Luolong address does not guarantee a walkable relationship to any of them. Check evening meals, traffic approach and departure timing.",
      },
      {
        name: "Laocheng and old-city surroundings",
        advice:
          "Choose for selected evening lanes and local dining, verifying noise, road pickup, stairs and luggage. The present visitor streets should not be confused with every historical capital site in the wider Luoyang region. A heritage-style room may be recent construction with a different comfort specification.",
      },
      {
        name: "Central urban or specifically selected scenic-area properties",
        advice:
          "Choose a particular property for its facilities or setting after comparing the full drives to chosen visits. These are separate locations, not one uniform hotel district. Confirm the actual room, food, bathroom, temperature control and gateway transfer rather than relying on a central or scenic label.",
      },
    ],
    tradeoffs: [
      {
        title: "Longmen's art deserves more than one famous photograph",
        advice:
          "The site includes work from different periods, with major Northern Wei and Tang chapters. Ask the guide to compare scale, figure treatment and setting among accessible examples instead of identifying every image simply as the same Buddha. Give Fengxian's ensemble context when open, while recognizing that conservation and visitor arrangements may restrict particular approaches. A short interpreted selection can be more meaningful than racing the full site.",
      },
      {
        title: "White Horse Temple and a museum answer different questions",
        advice:
          "White Horse Temple, traditionally associated with an early chapter in Buddhism's establishment in China, is a religious and architectural setting with its own changing history. Luoyang Museum offers collections and archaeological context, subject to current displays. Choose by interest, not because both sound ancient. Access to religious spaces, exhibitions and photography follows each venue's actual rules.",
      },
      {
        title: "The ancient capitals are not all the same location",
        advice:
          "Successive historical centers occupied different places in the wider region. A modern old-town walk, an archaeological site and a museum reconstruction are different experiences. Ask which period and physical evidence a visit concerns, and do not imply that every structure in a popular heritage district survives unchanged from an imperial capital. Add a specialist archaeological subject only when its actual visitor access and interpretation are established.",
      },
      {
        title: "Peonies are seasonal plants, not a fixed festival backdrop",
        advice:
          "Spring, often around April, is associated with Luoyang's peonies, but bloom varies with weather, cultivar and garden. Select a named garden and check current conditions if flowers are central to the trip. Festival dates, peak bloom and visitor crowding are different considerations. The historical itinerary should still be worthwhile if the exact flowering stage differs from the image you hoped for.",
      },
      {
        title: "Shaolin, performances and Songshan walking need separate choices",
        advice:
          "A Dengfeng excursion may involve a temple, pagoda forest, a scheduled demonstration or mountain routes, each with different access and physical demands. Do not treat a demonstration as a private lesson or a monastery visit as a complete hike. Include the full road journey, actual program and return before adding it to a short Luoyang stay.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "gongyi",
        advice:
          "Gongyi\u2019s cave sculpture can deepen comparison with Longmen, while the Kang Baiwan compound and Song tomb landscapes add different subjects. Give the selected visit real time instead of treating it as an automatic brief stop between cities. Confirm the complete route, current access and hotel or onward gateway.",
      },
      {
        slug: "anyang",
        advice:
          "Anyang offers a different period and kind of evidence through Yinxu and oracle-bone inscriptions. Give the late Shang subject a focused museum-and-site day rather than repeat an ancient-capital label. Assess the full connection and hotel sequence; neither city is a quick extra after the other\u2019s principal visit.",
      },
      {
        slug: "dengfeng",
        advice:
          "Dengfeng offers Shaolin Temple and pagodas, plus distinct monument and Songshan mountain interests. Compare a focused Luoyang-based excursion with a local night using both road journeys. Longmen and Shaolin each deserve interpretation and walking time; a mountain hike is a separate decision.",
      },
      {
        slug: "zhengzhou",
        advice:
          "Zhengzhou adds Henan Museum and a distinct Shang-period city interest. Compare dated trains and both station transfers, choosing useful nights rather than a return excursion by default. Dengfeng is another separately planned subject; a Zhengzhou gateway does not automatically include its temple, lessons or mountain walking.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an adds imperial-capital history and the Terracotta Army, complementing Luoyang's cave sculpture and collections. Compare the actual station pair, train and both road transfers. Give the main visit in each city its own usable day rather than expecting a rail transfer to leave complete sightseeing time at both ends.",
      },
      {
        slug: "datong",
        advice:
          "Datong's Yungang Grottoes provide a different Northern Wei sculptural context and city temple interests. This is a thematic connection requiring a dedicated transport sequence and nights, not a nearby excursion. Compare historical subjects rather than assuming one cave site automatically makes another unnecessary.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing adds later imperial sites, neighborhoods and a Great Wall choice. Check the complete rail or flight plan and named gateways, preserving meaningful days in each city. A Henan extension should be based on interests and available nights rather than an automatic stop added to every Beijing route.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit outdoor cave-art and city visits. Spring peony interest often centers on April, but the actual garden and bloom need checking, with crowding and hotel demand considered separately. Summer can be hot and humid, requiring shade and breaks during Longmen walking. Winter calls for warm clothing and a route adapted to current conditions. Neither clear views nor a quiet sculpture platform is guaranteed by the season; choose the art and history as the underlying reason to visit.",
    orientation:
      "Luoyang is in western Henan. Longmen is south of the urban center; White Horse Temple lies in a different direction, and successive archaeological capital sites occupy their own areas. Luoyang Longmen railway station and Luoyang railway station are distinct gateways. The Longmen station name does not mean direct arrival inside the grottoes. Beijiao airport and any Zhengzhou gateway require their own full transfers. Use actual addresses and tickets before planning a sightseeing window.",
    experiences: [
      "Explore selected Longmen sculptures through their Northern Wei and Tang contexts, with a route matched to walking comfort",
      "Choose a museum or White Horse Temple for a complementary historical question rather than another generic ancient-site stop",
      "Enjoy a Luoyang meal and a selected city walk, with a peony garden added only when the actual season and interests justify it",
    ],
    planningNotes: [
      "Review Longmen's west bank, optional crossing, stairs and final exit before agreeing the day's route",
      "Distinguish the station, grottoes, modern old-city streets and actual archaeological sites",
      "Treat peony bloom, museum reservations and any Dengfeng extension as separately confirmed decisions",
    ],
    arrival:
      "Use the exact station or airport on the ticket. Luoyang Longmen and Luoyang railway stations have different pickups; Zhengzhou airport is a different gateway and cannot be treated as a city arrival without its transfer. Include luggage, the hotel approach and visitor entry before promising Longmen on arrival. Keep the first visit selective when a connection is uncertain, and agree the actual departure-station return time in advance.",
    gettingAround:
      "Road transfers connect the selected grottoes, museum, city and temple interests, while Longmen has its own internal visitor route and walking. Establish the entrance, any included shuttle, crossing and pickup before setting out. A private car cannot follow every riverside path or reach an elevated sculptural platform. Group visits by location and give a Dengfeng journey its own road plan rather than assuming it fits into spare city time.",
    stayStrategy:
      "Choose one base for a short stay, balancing actual daily roads, room comfort and evening meals. Old-city atmosphere can be attractive but comes with specific noise and access conditions. A modern Luolong hotel can suit a different room and transport need without being adjacent to every site. Check bedding, bathroom, heating or cooling, breakfast and road collection. A good private plan should make the hotel work for the itinerary, not move guests between locations merely to sample labels.",
    firstTimerNote:
      "Luoyang is strongest when the history is put in order. Begin with a clear subject at Longmen, then use a museum or another setting to understand a different chapter. Some famous names describe traditions, later buildings or archaeological locations rather than one unchanged ancient city. A thoughtful guide should explain that distinction and help you choose what to see, leaving enough time to look and rest rather than filling every day with claims to antiquity.",
    faqs: [
      {
        question: "How many days should I spend in Luoyang?",
        answer:
          "Two nights give one full day for Longmen and selected city context. Three nights add a second full day for White Horse Temple, a museum or another reviewed interest. One night requires compatible tickets and a focused plan, without assuming time for Dengfeng or every museum.",
      },
      {
        question: "Can I visit Longmen Grottoes as a day trip from Xi'an?",
        answer:
          "A focused visit may be possible with suitable actual trains and the full station-to-site transfers, but compare the complete schedule and entry window first. A Luoyang overnight gives more room for interpretation and a second subject. The rail ride alone does not determine whether a relaxed day trip works.",
      },
      {
        question: "Do I need to see both sides of Longmen Grottoes?",
        answer:
          "Not every visitor needs the same full circuit. Prioritize the principal west-bank art for a first introduction, then assess the east-bank perspective and other interests against walking ability and time. Confirm the actual entrance, crossings, steps and exit rather than assuming both banks form a short level loop.",
      },
      {
        question: "Is Longmen suitable for travelers with limited mobility?",
        answer:
          "Suitability depends on the selected route, visitor approach, steps and actual assistance. Important sculptures can require stairs, and internal transport does not remove every walk. Discuss knees, balance and mobility needs before booking and choose a realistic reduced route if appropriate.",
      },
      {
        question: "Where should I stay in Luoyang?",
        answer:
          "Compare a specific Luolong hotel for its road sequence, an old-city-area property for evenings, or another urban base for the actual room and service. Check the address, noise, temperature control, meals and pickup rather than assuming any district is convenient for every attraction.",
      },
      {
        question: "When do peonies bloom in Luoyang?",
        answer:
          "Spring, often around April, is the usual planning period, but the actual stage varies by weather, cultivar and garden. Confirm current conditions at a named garden and distinguish festival programming from peak bloom. Do not promise a specific floral scene solely from the calendar.",
      },
      {
        question: "Can I combine Longmen and Shaolin Temple in one day?",
        answer:
          "It needs a careful current assessment of road time, visitor arrangements and how selective each visit would be; it should not be sold as an automatically relaxed day. Give Dengfeng its own excursion when depth or mountain walking matters. Temple entry, a demonstration and a hike are different activities.",
      },
      {
        question: "Is Luoyang Longmen station inside the grottoes?",
        answer:
          "No. It is a railway gateway with a separate road and visitor-entry plan to reach Longmen. It is also distinct from Luoyang railway station. Use the exact ticket and complete transfer before estimating a same-day cave visit or fixed onward departure.",
      },
    ],
    culturalStory: {
      title: "Read changing power through the carved image",
      paragraphs: [
        "Longmen offers a way to compare how Buddhist images and their settings changed across periods. Start with a few accessible examples, looking at scale, posture, clothing and the relationship between a figure and the cliff around it. Connect those observations to the historical context rather than only naming a dynasty or presenting every image as identical. This makes the visit useful even when conservation prevents entry to a particular cave.",
        "The wider city's successive capital histories need another kind of care. A museum object, an archaeological foundation and a modern heritage district are different forms of evidence. Ask the guide which kind you are seeing and what is known about it. White Horse Temple introduces religious tradition and a changing built setting, while a museum can supply material context. Choosing between them by question produces a more coherent stay than collecting the longest list of ancient claims.",
      ],
    },
    foodStory: {
      title: "Decide how much of a water banquet you actually want",
      paragraphs: [
        "Luoyang's water banquet, shui xi, is associated with a sequence of dishes in which soups and liquid-rich preparations play an important role. A full banquet can be more food and time than a small group wants, so ask whether selected dishes or another regional meal would suit better. The name does not mean a meal on a boat or every dish being plain soup. Use the occasion to ask about actual ingredients and the serving sequence rather than treating the label as a fixed menu for all restaurants.",
        "Local soup and noodle meals offer other options, especially around a substantial cave visit. Discuss stocks, wheat, meat, sauces, spice and shared cooking before ordering for allergies or dietary requirements. A vegetable-looking dish does not establish vegetarian preparation, and a famous local meal does not guarantee halal suitability. Choose enough seated time and an appropriate portion size instead of rushing an elaborate banquet before a train or another long walk.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual city gateway and base",
        description:
          "Transfer from the named station or airport and keep the first meal local. Add a short city interest only when the connection and hotel approach leave useful time.",
      },
      {
        day: "Full day 1",
        title: "Longmen with a chosen route and historical context",
        description:
          "Prioritize the main sculpture interest, review any additional bank and allow lunch and rest. Add a city or museum subject only when its current access and the full schedule genuinely fit.",
      },
      {
        day: "Optional extra full day",
        title: "Choose another chapter rather than another checklist",
        description:
          "Consider White Horse Temple, deeper museum time or a named seasonal garden. A Dengfeng excursion needs its own transport and program assessment; do not assume it includes a mountain hike or a private martial-arts class.",
      },
      {
        day: "Departure",
        title: "Continue with the next main visit protected",
        description:
          "Allow the complete transfer to the actual station or onward hotel. This is an illustrative planning outline, not a published package, fixed floral promise or guarantee of all mentioned site access.",
      },
    ],
  },
};
