import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xuancheng.svg",
  alt: "Original Xuancheng planning schematic separating Jingting Mountain and city culture from Jing County Xuan-paper interests and a distinct rural stay; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const xuanchengGuide: ExpandedDestination = {
  id: "xuancheng",
  name: "Xuancheng",
  region: "east",
  kicker: "Poetry in the city, paper-making country beyond it",
  description:
    "Explore Xuancheng through Jingting Mountain and literary history, then decide whether a separately arranged Jing County paper visit or countryside stay belongs in your southern Anhui route.",
  stay: "A focused city day or 1 night; 2–3 regional nights for a specific craft and countryside plan",
  bestFor:
    "Chinese painting and calligraphy interests, literary landscapes and thoughtful southern Anhui extensions",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "wuhu",
    "chizhou",
    "huangshan",
    "hongcun",
    "nanjing",
    "hefei",
    "hangzhou",
    "jingdezhen",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xuancheng Travel Guide: Poetry, Xuan Paper & Where to Stay",
    seoTitle: "Xuancheng Guide: Xuan Paper, Poetry & Stays",
    seoDescription:
      "Plan Xuancheng's literary sights and a separate Jing County Xuan-paper visit. Compare city and rural bases, workshop questions and a tailored Anhui route.",
    answer:
      "Xuancheng (宣城) is a city and wider prefectural area in southeastern Anhui. The city introduction centers on Jingting Mountain (敬亭山), poetry and a selected cultural visit; the best-known Xuan-paper craft interests lie farther afield in Jing County, or Jingxian (泾县). They require different addresses, transfers and often a different overnight base. Choose a focused city day or one useful night for the literary landscape. Add regional nights when a real paper collection, demonstration or confirmed workshop and countryside stay justify them. A city called Xuancheng is not a single walkable paper-making village, and the term 'rice paper' does not identify every sheet sold as Xuan paper.",
    stayAnswer:
      "A city day can introduce a manageable Jingting Mountain route and a complementary cultural stop or meal. One city night adds a useful evening or morning when transport fits. For a paper-focused regional visit, compare two or three nights across the actual bases rather than assume every night should be in central Xuancheng. Two nights give one full day; three give two, with arrival and departure hours counted honestly. Add a village or a second craft subject only when it offers something distinct. A short appointment in Jing County may be better served by staying near the confirmed venue than by commuting repeatedly from the city.",
    hotelAnswer:
      "Choose central Xuancheng for a city-focused visit, convenient meals and access to the selected literary route. For Jing County paper interests, compare the exact county-town or rural property with the venue and next destination. A village room near a desired landscape can suit a different purpose again. Check bathroom, noise, heating or cooling, breakfast, lifts or stairs, luggage access and available dinner. A county address, traditional facade or paper-themed hotel name does not establish proximity to the craft provider, an included class or a comfortable room. Settle the route before choosing the base.",
    sightseeingQuestion: "Should I stay in Xuancheng city for a Xuan-paper trip?",
    sightseeingAnswer:
      "Not automatically. Xuancheng city works for Jingting Mountain and literary interests, while a paper-focused visit in Jing County needs its own venue, journey and room decision. Start with the actual collection, provider or workshop you want to visit, then compare a nearby base with a complete excursion from the city. If the only purpose is an essential maker appointment, going directly to the appropriate county base may be more useful. Keep a central city night when it adds a distinct cultural chapter, not merely because Xuan paper and Xuancheng share a name.",
    visitorResources: [
      {
        label: "Xuancheng municipal government",
        href: "https://www.xuancheng.gov.cn/",
        scope:
          "Reference entry point for city and regional background and local notices, mainly in Chinese. Verify the actual Jingting route, cultural display, county venue and room separately. Municipal context does not confirm a working producer's permission, private home access or a visitor class.",
      },
      {
        label: "UNESCO: Traditional handicrafts of making Xuan paper",
        href: "https://ich.unesco.org/en/RL/traditional-handicrafts-of-making-xuan-paper-00201",
        scope:
          "Reference for the recognized craft tradition and its context. Recognition of a tradition does not authenticate a retail sheet or maker, establish a public production route, or confirm a particular demonstration, class or appointment. Current visitor access must be checked with the named venue or provider.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and full station names. Xuancheng, Jingxian and other regional stations serve different final journeys; choose by the actual venue and property. Include both road transfers and luggage rather than compare only the rail sector or infer the best gateway from a prefecture name.",
      },
    ],
    serviceScope:
      "A tailored visit should name the city route or county venue, guide language, current admission, pickup and complete onward transport. For paper, specify whether the guest will see a collection, watch an agreed demonstration, try a supervised activity or meet a willing specialist. Confirm the teaching content, materials, interpretation, safety boundaries and what can be taken away. An overnight proposal should identify the exact room and meal arrangements. Purchases remain optional, and provenance, conservation advice and overseas shipping are separate questions rather than automatic benefits of a guided visit.",
    routeAdvice:
      "Tell us whether the main interest is poetry, painting materials, an introduction to paper-making or a slower rural stay. Share dates, starting hotel, available nights, walking needs and any genuine workshop or buying questions. We can compare a city stop with going directly to a confirmed Jing County venue and design the most useful sequence of rooms. Continue toward Huangshan for a separately planned mountain route, Hongcun for a village chapter or Jingdezhen for a different ceramics tradition when the complete journey makes sense. Request a tailored proposal with named visits and services; no matching published Xuancheng package is currently listed here.",
    practicalPlanning: {
      timing:
        "Put any essential paper appointment at the center of the county day, with the full transfer and a relaxed arrival buffer. A collection's opening, demonstration schedule and working producer's availability may differ. Plan Jingting Mountain for a suitable daylight and weather window, with an indoor cultural option when needed. A village walk should have its own purpose and time rather than fill the gap between distant appointments. Leave room for lunch, questions and the onward journey instead of treating the region as one compact scenic area.",
      walking:
        "Jingting Mountain routes may include slopes, steps and a tiring descent; choose the start, finish and turnaround for the group. Museums involve standing, while production or demonstration spaces can have wet floors, equipment and restricted working areas. Confirm a safe visitor route and a seated learning option before a craft session. Rural lanes may have uneven stone, thresholds and a final luggage walk. A private car helps between places but does not remove every step or give access to working rooms and private houses.",
      cost: "Compare the same base sequence, complete transfers, guide expertise, venue access and the exact class or demonstration. A brief retail explanation and paid specialist teaching offer different value. Materials, finished sheets, drying, packaging and shipping may be separate. Check rural room facilities, dinner and cancellation terms rather than compare exterior photographs alone. A premium should support interpretation, a comfortable room and enough time with the subject, not an unverified master appointment or a promise that a purchase will gain value.",
    },
    attractions: [
      "A selected Jingting Mountain / Jingtingshan route with literary interpretation and realistic walking",
      "The Xie Tiao Pavilion / 谢朓楼 cultural setting, with the current open route and historical presentation checked",
      "A relevant Xuancheng city collection or cultural display rather than an obligatory list of interiors",
      "A separately chosen Jing County / Jingxian Xuan-paper collection, demonstration or confirmed provider",
      "Paper-and-ink comparison through a real supervised learning session when arranged",
      "A distinct Taohuatan / Peach Blossom Pool or Zhaji village interest in Jing County when the route warrants it",
      "A local meal and an unhurried evening at the chosen city or rural base",
    ],
    stays: [
      {
        label: "City day / literary landscape and a complementary stop",
        advice:
          "Choose a manageable Jingting route and one cultural interest or meal around the full journey. Give the poetry useful context and leave time to rest. A paper appointment elsewhere in the prefecture should not be added casually to an already full city day.",
      },
      {
        label: "1 city night / a purposeful evening or morning",
        advice:
          "Stay centrally when the city chapter and complete connection justify it. Use the room to make the visit more comfortable rather than add a transit night by default. A late arrival and early departure do not create the same opportunity as a usable city day.",
      },
      {
        label: "2 regional nights / one focused craft day",
        advice:
          "Choose the actual base near the confirmed paper venue or a practical county-town room. Give the collection and learning session enough time, with a meal and a relevant alternative. Decide separately whether the city adds enough value to warrant another transfer or room change.",
      },
      {
        label: "3 regional nights / a second distinct chapter",
        advice:
          "Add a well-chosen village or landscape day, time at a particular property, or another genuine cultural interest. Compare keeping one useful county base with changing rooms. Three nights should deepen the understanding of materials and place rather than require repeated paper shops.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Xuancheng / city culture and convenient meals",
        advice:
          "Choose the address for Jingting access, the desired cultural stop, dining and the actual station. Check the room category, road noise, bathroom, lifts, temperature control and pickup. A central city base is not automatically convenient for a specific Jing County paper venue.",
      },
      {
        name: "Jing County town or a named paper-area property / craft-focused planning",
        advice:
          "Start with the confirmed venue and next destination, then compare the complete journey from each proposed room. Ask about dinner, breakfast, bathroom, heating or cooling, noise and luggage access. A paper-themed property or nearby shop does not prove a working-maker relationship, included teaching or independent authentication of a purchase.",
      },
      {
        name: "A specific countryside or village property / a separate stay decision",
        advice:
          "Choose the actual room and village for time on site, a suitable walk and reliable meals. Assess the final road, steps, moisture, temperature control, bathroom and current construction or evening noise. Taohuatan, Zhaji and other rural addresses are not interchangeable bases or one continuous walking district.",
      },
    ],
    tradeoffs: [
      {
        title: "City, prefecture and craft origin are different scales",
        advice:
          "Xuancheng can mean the city or its wider administrative area. Jing County has its own towns, station and craft routes. A good city introduction can explain the regional paper story without completing every county visit. For a specialist trip, choose the real venue first and let the geographic distinctions determine the transport and rooms.",
      },
      {
        title: "Xuan paper is more precise than the label rice paper",
        advice:
          "Traditional Xuan-paper making is associated with qingtan tree bark and rice straw, not a sheet made simply from edible rice. The English retail term rice paper is used for different materials and cannot identify a sheet's fiber, origin or purpose. Ask what the actual paper contains, how it was made and which painting or calligraphy use it suits. A printed label alone does not settle those questions.",
      },
      {
        title: "Try how the sheet handles ink before choosing a purchase",
        advice:
          "Sheng xuan / 生宣 generally describes unsized, absorbent paper; shu xuan / 熟宣 is sized for more controlled handling, with partially sized papers offering other choices. Under appropriate supervision, compare a small ink wash, line and wet brush on identified samples. Product treatments vary, so use the actual sheet and maker's information rather than assume one category suits every painter or that a brief activity proves provenance.",
      },
      {
        title: "Paper-making is a sequence, not a guaranteed single-session result",
        advice:
          "Preparing fibers, forming sheets, pressing, drying and finishing involve different work and timescales. A visitor may see only the stages currently operating or try a simplified supervised activity. Ask which stages are demonstrated and whether anything made during the session will be ready to take away. A short workshop is not a promise to complete the full traditional process or enter every production room.",
      },
      {
        title: "Paper, brushes, ink and inkstones need their own expertise",
        advice:
          "The writing materials often grouped as the Four Treasures of the Study are related in use but have different craft traditions and supply chains. A paper specialist is not automatically an inkstone or brush maker, and a shop selling all four does not prove local manufacture. Choose the session around a real question, with any expert meeting, purchase advice and shipment agreed separately.",
      },
      {
        title: "A rural stay should earn its time beyond the photographs",
        advice:
          "Taohuatan's poetic associations and a Zhaji village walk can offer different interests from a city hill or paper collection. Choose the actual place, permitted public route and room before adding it. Explain surviving buildings, restoration and modern use without calling every lane unchanged, and keep private courtyards and residents' daily lives outside the visit unless there is an explicit invitation.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "wuhu",
        advice:
          "Wuhu offers river-port history and iron painting, a material contrast to a separately arranged Jing County Xuan-paper interest. Use clear questions about line, composition and making rather than two generic craft-shopping stops. Confirm the actual hosts, addresses and full transfer before fixing appointments; a collection visit does not guarantee active production.",
      },
      {
        slug: "chizhou",
        advice:
          "Chizhou offers Pingtian Lake and different literary associations, with Jiuhua Mountain as a separate Buddhist-cultural chapter. Choose a distinct question for each stop rather than repeat generic poet-name sightseeing. Compare full transfers and usable nights before adding another city base.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan adds a granite mountain chapter with its own gateway, cableways, remaining stairs and possible mountain overnight. A paper venue in the Xuancheng region is not a hotel neighborhood at the mountain entrance. Compare the full journey and baggage plan, and avoid putting an essential maker appointment immediately before a demanding mountain connection.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun offers a separate village and architectural setting in Yi County, Huangshan. Compare it with a specific Xuancheng-region rural stay for the different interest and room rather than collect several village nights. A paper stop, Taohuatan and Hongcun do not form one compact visitor district, so allow time for the road between them as well as the visits.",
      },
      {
        slug: "nanjing",
        advice:
          "Nanjing provides a contrasting city chapter through capital history and major collections. Compare its actual hotel-to-venue journey with going directly to the appropriate Xuancheng or Jing County base. Protect useful museum time in Nanjing and enough buffer before a confirmed craft appointment rather than fill every transfer day with sightseeing.",
      },
      {
        slug: "hefei",
        advice:
          "Hefei offers a different Anhui city and collection-based chapter. It is not an automatic gateway for every southern county venue. Choose the dated rail or road plan from the actual starting point and final hotel, including both local transfers, rather than add a capital-city night solely because the places share a province.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake and Longjing tea, with its own city and rural-provider decisions. A paper-and-tea journey can be rewarding when each encounter has a real host and enough time. Settle the exact venues, overnight sequence and complete connections rather than promise several specialist visits on the same travel day.",
      },
      {
        slug: "jingdezhen",
        advice:
          "Jingdezhen adds a different materials tradition through porcelain, collections and separately arranged studios. A paper-and-ceramics comparison can deepen an art-focused journey, but the cities are separate destinations. Agree actual providers, language and usable nights rather than infer a combined masterclass package or authentication service from the shared craft theme.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit city walks and countryside stays, with rain and holiday traffic still possible. Summer needs cooling and shorter exposed stretches; winter can be cold and damp, making reliable heating and warm meals important. A working craft schedule does not follow a simple sightseeing season, and different production stages may not be visible on the same day. Choose dates for the wider journey, then confirm the host, venue and current visitor arrangements. A rural room should remain comfortable in wet weather rather than depend entirely on a scenic courtyard.",
    orientation:
      "Xuancheng is a prefecture-level city and wider administrative area in southeastern Anhui. The city literary route, Jing County / Jingxian paper interests, Taohuatan and Zhaji, and other county stays need different addresses and transfer decisions. Jing County's 泾县 is distinct from other Chinese places romanized Jingxian. Jixi, Jingde, Ningguo and Guangde are also separate destinations within the wider area, not alternate names for the city center. Historic Huizhou is a cultural-geographic subject, not a label that makes every southern Anhui village administratively or historically identical.",
    experiences: [
      "Read Jingting Mountain through poetry, landscape and a walking route matched to the group",
      "Understand Xuan paper through identified materials and a real collection or confirmed teaching session",
      "Choose one countryside chapter for its place, public route and room rather than a generic village label",
    ],
    planningNotes: [
      "Choose the city or actual county venue before booking stations, transfers and rooms",
      "Agree which paper-making stages or sample comparisons the visitor can actually see or try",
      "Keep materials purchases, provenance advice and overseas shipping separate from the experience fee",
    ],
    arrival:
      "Compare dated rail and direct road journeys to the actual first venue or hotel. Xuancheng and Jingxian stations are different gateways; other regional stops serve their own final approaches. Include both local transfers, boarding, luggage and a sensible arrival buffer before any essential appointment. For an international connection, specify the airport and terminal rather than compare only the domestic train segment. A central city room, county-town hotel and rural property may need quite different arrival plans.",
    gettingAround:
      "Group the city literary visits into a manageable chapter and treat the Jing County paper route as a separate road plan. Within the county, name the collection, provider, village and meal rather than assume every paper interest is beside the station. Confirm the final entrance and a safe visitor route around any equipment. For rural stays, check vehicle stopping and the remaining luggage walk. Guests with mobility needs should receive a shorter route, seating and an indoor alternative, with private homes and working areas accessed only by explicit agreement.",
    stayStrategy:
      "For a city introduction, prioritize a practical room, meals and the Jingting route. For a craft-focused visit, a base near the actual appointment may add more value than a central Xuancheng night. A rural stay deserves time for its own public walk, dinner and rest. Compare noise, moisture, bathroom, climate control, stairs, breakfast and final approach. Count usable days across the region and avoid changing rooms merely because several places share the Xuancheng label.",
    firstTimerNote:
      "Begin with the question that brought you here. A traveler curious about poetry needs a different day from a painter comparing papers or a guest seeking a comfortable rural break. Choose a real cultural subject and a suitable base, then add one contrasting experience. The route can be rich without a succession of shops, an invented master encounter or a visit to every county in the prefecture.",
    faqs: [
      {
        question: "Is Xuancheng worth visiting?",
        answer:
          "It can be for Jingting Mountain's literary setting, a focused city cultural visit or a separately arranged regional Xuan-paper interest. It works best when you have a reason to understand the poetry, materials or countryside. If your main priority is Huangshan's mountain landscape and time is limited, protect that route before adding another base.",
      },
      {
        question: "Is Xuan paper made in Xuancheng city?",
        answer:
          "The best-known traditional craft interests are in Jing County, or Jingxian, within the wider Xuancheng area. The city center and an individual paper venue are different places. Choose the actual collection, provider or appointment before deciding the station, road transfer and overnight base.",
      },
      {
        question: "How many nights should I spend in the Xuancheng region?",
        answer:
          "A focused city day or one useful night can introduce the literary landscape. For a paper appointment and countryside chapter, compare two or three regional nights across the actual bases: two nights give one full day, while three give two. A city night is optional when going directly to a county venue serves the main purpose better.",
      },
      {
        question: "Is Xuan paper the same as rice paper?",
        answer:
          "Not necessarily. Rice paper is a broad English retail term used for different materials. Traditional Xuan-paper making is associated with qingtan tree bark and rice straw. Ask about the actual fibers, origin, process and intended use rather than assume the English label or a decorative package identifies the sheet.",
      },
      {
        question: "What is the difference between sheng xuan and shu xuan?",
        answer:
          "Sheng xuan generally means unsized, absorbent paper, while shu xuan is sized for more controlled handling of ink and washes. Partially sized papers offer other choices. Compare identified samples for your own painting or calligraphy use because treatments and behavior vary; the category alone does not prove origin or quality.",
      },
      {
        question: "Can I try traditional paper-making?",
        answer:
          "Only through a real provider and confirmed visitor session. Ask which stages you will see, what you can try, the language, materials and what will be ready to take away. A short supervised activity does not reproduce the entire preparation, forming, pressing, drying and finishing process or establish access to every working room.",
      },
      {
        question: "Should I stay in Xuancheng city or Jing County?",
        answer:
          "Choose central Xuancheng for the city literary route and meals. Choose a county-town or rural base when the real paper venue, countryside time and onward journey make it more useful. Check the exact property, room, dinner and final approach rather than decide from a broad prefecture name or a paper-themed hotel label.",
      },
      {
        question: "Can I combine a paper visit with Taohuatan or Zhaji?",
        answer:
          "Yes, when the complete road journey and usable time justify it. These are distinct places with different public routes and room choices, not stops within one paper-making village. Choose one for its poetic, architectural or stay value, and keep residents' private homes outside the route unless explicitly invited.",
      },
      {
        question: "Can I combine Xuancheng with Huangshan or Hongcun?",
        answer:
          "Yes, as a planned regional route with the actual bases and full transfers settled. Huangshan needs its own walking and gateway decisions; Hongcun is a separate village in the Huangshan area. Leave an adequate buffer after a craft appointment and count room changes and luggage honestly rather than assume all southern Anhui interests are close together.",
      },
      {
        question: "Does a guided paper visit include buying advice or shipping?",
        answer:
          "Only when the scope explicitly says so. Interpretation, a class, independent provenance advice, a purchase and international shipping are different services. Ask about the identified paper, sizes, treatment, packaging, fees and responsibility for damage before buying. Purchases should remain optional, with no investment-value promise attached to the visit.",
      },
    ],
    culturalStory: {
      title: "From a literary landscape to the material that receives the brush",
      paragraphs: [
        "Jingting Mountain offers a way to read Xuancheng through poetry rather than a checklist of viewpoints. Li Bai's association with the mountain and the city's Xie Tiao tradition can help explain how a landscape becomes a cultural reference, while the walking route remains a practical choice. At the Xie Tiao Pavilion setting, distinguish historical association, later rebuilding and current presentation. A commemorative building does not need to be unchanged from a poet's lifetime to support a thoughtful visit, but the explanation should make the difference clear.",
        "In Jing County, turn from the literary image to the sheet itself. Traditional Xuan-paper making brings together fibers, preparation, skilled sheet formation and finishing; the recognized craft is more than an attractive shop display. A useful encounter explains the stages genuinely visible and compares identified sheets without pretending a visitor activity conveys a maker's full skill. The region's paper, brushes, ink and inkstones connect through use in the study, yet their makers, materials and histories remain distinct. Follow the actual craft question rather than expect one workshop to represent them all.",
      ],
    },
    foodStory: {
      title: "Let the meal suit the base instead of chasing a generic regional banquet",
      paragraphs: [
        "A city lunch and a rural dinner serve different moments in the journey. Choose vegetables, tofu preparations, a suitable protein and portions the kitchen handles well, then ask what is genuinely seasonal. Bamboo shoots, mushrooms and local river-fish dishes may appear on menus, but the dish name alone does not establish origin, wild collection or suitability for the group. Ask about bones, stock, preserved ingredients, chili and advance ordering. After a paper session, a seated meal with time for questions can be more useful than another shop stop.",
        "Southern Anhui menus may also offer Huizhou-associated dishes such as fermented mandarin fish or hairy tofu. These are specific preparations with distinctive aromas and textures, not a requirement for every guest or a label that makes all Xuancheng food identical to historic Huizhou cuisine. Start with a small shared tasting only when the actual kitchen and guests suit it. Check soy, wheat, fish, pork, alcohol and shared equipment for dietary needs, and keep a straightforward alternative. A home meal or cooking session needs a willing host and agreed content rather than an assumption of private household access.",
      ],
    },
    itinerary: [
      {
        day: "Optional city chapter",
        title: "Read Jingting Mountain through a manageable literary route",
        description:
          "Arrive at the actual city hotel or entrance and choose a walk matched to the group's slopes and descent tolerance. Pair it with a relevant cultural display or the Xie Tiao setting when open, plus a proper meal. Omit the city night when it adds little to a trip whose main purpose is a county paper appointment.",
      },
      {
        day: "Craft-focused day / morning",
        title: "Start with the real venue and the question you want answered",
        description:
          "Complete the road journey to the confirmed Jing County collection or provider, leaving a comfortable arrival buffer. See the agreed material and process introduction, distinguishing a collection, working demonstration and visitor activity. Compare identified papers with a supervisor when that is part of the session.",
      },
      {
        day: "Craft-focused day / afternoon",
        title: "Leave time for the meal, discussion and a different pace",
        description:
          "Take a seated lunch and continue only with the agreed stages, samples or cultural interest. Settle any optional purchase, drying, packaging or shipping as a separate decision. Leave time to return to the actual room rather than add a distant village solely to fill the schedule.",
      },
      {
        day: "Optional countryside day / departure",
        title: "Choose one place that adds a distinct regional chapter",
        description:
          "Use a Taohuatan, Zhaji or other named rural plan for its actual public route, poetry, architecture or property, with meals and weather flexibility settled. Continue toward the next hotel or station with the full journey allowed. This outline supports a tailored proposal; confirm venues, rooms, appointments and included services for your dates.",
      },
    ],
  },
};
