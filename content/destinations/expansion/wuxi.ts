import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wuxi.svg",
  alt: "Original Wuxi planning schematic separating Huishan and Jichang Garden, Yuantouzhu on Taihu, and a distinct Lingshan or Nianhuawan stay; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const wuxiGuide: ExpandedDestination = {
  id: "wuxi",
  name: "Wuxi",
  region: "east",
  kicker: "A garden against the hills, a broad lake and a deliberate choice of base",
  description:
    "Discover Wuxi through Huishan, Jichang Garden and a selected Taihu outing. Compare city convenience with a lake-side stay and treat Lingshan or Nianhuawan as a separate chapter.",
  stay: "2 nights for city culture and Taihu; a selective day visit or 3 nights for more time",
  bestFor:
    "Jiangnan garden design, Taihu landscapes and a slower extension from Shanghai or Suzhou",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "changzhou",
    "suzhou",
    "yixing",
    "changshu",
    "huzhou",
    "shanghai",
    "hangzhou",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Wuxi Travel Guide: Taihu, Jichang Garden & Where to Stay",
    seoTitle: "Wuxi Travel Guide: Taihu, Gardens & Stays",
    seoDescription:
      "Plan Wuxi's Jichang Garden, Huishan and Taihu. Compare Yuantouzhu, Lingshan and Nianhuawan, choose a hotel base, and build a tailored 2–3-night Jiangnan stay.",
    answer:
      "Wuxi (无锡) is a city in southern Jiangsu on the northern side of Taihu, or Lake Tai. Its strongest introduction combines Huishan Ancient Town and Jichang Garden with a separately planned lake outing, often at Yuantouzhu. Choose two nights when you want both city culture and landscape without rushing; a selective day trip can suit one main interest. Lingshan's Buddhist visitor complex and Nianhuawan's contemporary themed resort are distinct western outings with their own admission and hotel decisions. Wuxi offers a different perspective from Suzhou's central gardens, but it does not need to be added to every short Jiangnan itinerary.",
    stayAnswer:
      "Two nights usually give one full day, so put Huishan and Jichang Garden first and fit a selected Taihu chapter around usable arrival or departure time only if the journeys work. Three nights provide two full days: one for city culture and one for Yuantouzhu, a chosen lake-side property, or a separate Lingshan and Nianhuawan plan. A day trip from Shanghai or Suzhou works best with one main chapter and lunch. If a resort evening is the priority, compare staying there directly instead of adding a central hotel and another transfer. Count actual sightseeing hours rather than assume each hotel night creates a full day.",
    hotelAnswer:
      "Choose central Wuxi for convenient meals, city evenings and a mixed cultural route. A specific Taihu-area hotel suits guests who want its room and setting, with separate drives to the historic city. Choose the Lingshan or Nianhuawan area when those western visits and time at the property are the main purpose. A hotel described as being in Binhu District may still be far from the desired entrance; the district name is not a walkability guarantee. Compare the exact room outlook, noise, bathroom, heating or cooling, dining, public-path access and complete transfers before choosing the base.",
    sightseeingQuestion: "Is Wuxi worth adding to a Suzhou or Shanghai itinerary?",
    sightseeingAnswer:
      "Yes, when the combination of Jichang Garden's relationship with the hills and a broad Taihu landscape adds something you want to experience. Suzhou is the stronger first choice for a concentrated introduction to its major classical gardens and historic canal neighborhoods. Wuxi can add a different scale of landscape rather than another day of similar garden entrances. With limited nights, choose the place that best serves the main interest. With more time, connect them through a thoughtful contrast and a useful overnight rather than a rushed train-and-taxi excursion.",
    visitorResources: [
      {
        label: "Wuxi municipal government",
        href: "https://www.wuxi.gov.cn/",
        scope:
          "Reference entry point for city background and public notices, mainly in Chinese. Confirm current Huishan and Jichang Garden entry, lake routes, seasonal management and the specific Lingshan or Nianhuawan arrangements with the relevant venue. General municipal information does not establish an included boat, performance, private cultural visit or hotel facility.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and full station names, including Wuxi, Wuxi East or Wuxi New Area where relevant. Compare both local transfers with direct road travel. Arriving at one Wuxi station does not establish a short journey to every Taihu hotel, and Yixing has its own station and final transfer.",
      },
    ],
    serviceScope:
      "A tailored Wuxi visit should identify the selected garden and Huishan route, Taihu entrance or western outing, guide language, admissions and complete pickup and return. Specify walking needs and a worthwhile indoor alternative. For an overnight, agree the actual property, room and dining rather than promise a generic lake resort. A clay-figurine session, boat, cultural host or evening show needs its own confirmed provider and terms. Private guiding should help explain the garden and wider landscape while leaving enough time to enjoy them.",
    routeAdvice:
      "Start with the contrast you want: a garden-and-lake stay beyond Suzhou, a particular Taihu hotel, or time at Lingshan and Nianhuawan. Send your dates, starting hotel, available nights and walking preferences. We can compare a selective day visit with a two- or three-night Wuxi stay and settle the most useful base. Continue to Yixing for a separately arranged pottery interest or keep Suzhou for its classical gardens. Ask for a tailored proposal with the chosen stops, room, transport and included services; no matching published Wuxi itinerary is currently listed here.",
    practicalPlanning: {
      timing:
        "Give Huishan and Jichang Garden a coherent morning or afternoon within their actual entry arrangements, then leave time for a seated meal. A Yuantouzhu outing requires its own entrance, internal route and return plan. Cherry-blossom dates, event operations, lake visibility and boat schedules vary; plan from current conditions rather than a fixed annual promise. Lingshan and Nianhuawan also need realistic time, especially if an evening is central to the visit. Protect the complete return journey before a train or flight instead of trying to finish every western site on departure day.",
      walking:
        "Jichang Garden and Huishan can involve thresholds, stone surfaces, steps and standing. Choose the actual courtyards and garden route rather than assume an old-town visit is fully step-free. Yuantouzhu can add substantial walking between the entrance, viewpoints and any pier; internal transport does not necessarily remove all of it. Lake paths can be exposed to sun, rain and wind. For Lingshan, discuss the specific route and stair demands before booking. Request a named shorter option, seating and a suitable vehicle meeting point for mobility needs.",
      cost: "Compare full transfers, guide expertise, named admissions and the actual lake or western route. Check whether a garden, boat, internal vehicle, show or resort activity is included or separately charged. A lake-view category and a room merely at a lake-area hotel are different purchases. Include dining and repeated city transfers when comparing a remote property with a central room. For a craft session, separate the experience fee, materials, any firing or shipping and optional purchases.",
    },
    attractions: [
      "Jichang Garden / Ji Chang Yuan for composition, water and the relationship with the hills",
      "Huishan Ancient Town for selected lanes, ancestral-hall context and a manageable cultural route",
      "Yuantouzhu / Turtle Head Isle as a Taihu peninsula outing, with any boat assessed separately",
      "A selected Nanchang Street and canal-side evening near a suitable city base",
      "Lingshan's Buddhist visitor complex as a distinct cultural and walking choice",
      "Nianhuawan / Nianhua Bay as a contemporary themed resort, not an unchanged historic village",
      "Meiyuan for a separate garden interest, with flowering conditions checked for the dates",
      "Huishan clay-figurine culture through a relevant display or a confirmed craft provider",
    ],
    stays: [
      {
        label: "Day visit / one main chapter and lunch",
        advice:
          "Choose Huishan and Jichang Garden, or a focused Taihu outing, around the complete journey from the actual Shanghai or Suzhou hotel. Add a complementary stop only when it fits comfortably. Combining the garden, Yuantouzhu, Lingshan, Nianhuawan and a late return is a different pace from a relaxed introduction.",
      },
      {
        label: "2 nights / city culture with a selective lake chapter",
        advice:
          "Use the full day for Huishan and Jichang Garden, with a proper meal and time to understand the spaces. Add a shorter lake chapter on arrival or departure only if transport and weather allow. Otherwise keep the visit focused, or add a night for a genuinely separate landscape day.",
      },
      {
        label: "3 nights / two distinct full days",
        advice:
          "Give one day to city culture and one to Yuantouzhu, a chosen property or a western Lingshan and Nianhuawan plan. Retain time for the room, meals and weather flexibility. A longer stay is most useful when the second day changes the experience rather than adds more similar entrances.",
      },
      {
        label: "A property-led overnight / go to the actual destination",
        advice:
          "For a particular lake-area or Nianhuawan stay, compare traveling directly to the property and using its confirmed facilities. A central Wuxi night is optional when it adds little to that purpose. Arrange the next station or hotel transfer from the actual western address, not a generic city-center journey.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Wuxi / city culture, meals and evening flexibility",
        advice:
          "A useful starting point for mixed sightseeing and varied dining. Choose the exact address according to Huishan access, the desired evening and station needs. A canal-facing room may have evening sound; compare the booked room's position, insulation, bathroom, lifts and drop-off rather than assume every central property offers the same convenience.",
      },
      {
        name: "Taihu area / a specific hotel and landscape setting",
        advice:
          "Choose a property for the actual room and time by the lake, then map the journey to the chosen Yuantouzhu entrance and historic city. Check dining, room outlook, public walks and current facilities. The Taihu name covers a large landscape, so a hotel using it is not automatically beside your sightseeing route or a usable public shore.",
      },
      {
        name: "Lingshan and Nianhuawan area / a separate western stay",
        advice:
          "This choice makes sense when the western visits or a particular resort evening are central to the trip. Identify the exact property, room, admissions, re-entry arrangements and current evening program. Lingshan, Nianhuawan and all hotels using those names are not a single interchangeable ticket or address; assess the full return to the city or station.",
      },
    ],
    tradeoffs: [
      {
        title: "A garden and the town around it are related, not identical tickets",
        advice:
          "Jichang Garden can anchor a focused garden-design visit while Huishan adds lanes and the history of ancestral halls. Settle the actual open route and admission components before planning every interior. Look at water, rockwork, changes of view and the garden's relationship with the hills; one well-explained sequence is more useful than rushing through every courtyard.",
      },
      {
        title: "Turtle Head Isle is a peninsula visit before it is a boat plan",
        advice:
          "Yuantouzhu is commonly translated as Turtle Head Isle, but the main setting is a peninsula projecting into Taihu. A useful visit can focus on selected land routes and lake views. An island boat adds a separate journey, weather dependency and walking at both ends. Check the actual sailing and ticket terms rather than assume an English name requires an island excursion.",
      },
      {
        title: "Plan cherry blossoms as a seasonal interest, not a fixed-date guarantee",
        advice:
          "Yuantouzhu is well known for spring cherry blossoms, but bloom stages depend on the season and conditions. If flowers are the main purpose, leave scheduling flexibility and check current reports and visitor management close to travel. If dates are fixed, build a good garden-and-lake visit that remains worthwhile without peak bloom.",
      },
      {
        title: "Lingshan and Nianhuawan offer different kinds of cultural experience",
        advice:
          "Lingshan combines Buddhist imagery and religious space within a modern visitor complex. Nianhuawan is a contemporary resort and themed cultural setting with its own accommodation and programming. Choose them for those actual experiences rather than describe both as an untouched ancient water town or treat a resort stay as a private religious encounter.",
      },
      {
        title: "Taihu is much larger than one hotel's view",
        advice:
          "Wuxi, Suzhou and Huzhou offer different Taihu approaches and room choices. A north-side Wuxi plan does not establish coverage of every shore, island or south-side property. Choose the base for the actual route and room, and let the lake time earn its place rather than repeat long transfers for similar viewpoints.",
      },
      {
        title: "A clay-figurine tradition does not guarantee a workshop",
        advice:
          "Huishan clay figurines offer a local craft subject distinct from Yixing's zisha teapots. A display, retail shop, demonstration and hands-on session provide different levels of learning. For a session, confirm a real host, language, duration, materials and what the guest can take away, keeping purchases optional and authorship claims separate from the guide's introduction.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "changzhou",
        advice:
          "Changzhou offers Qingguo Lane and Tianning Temple as a different city introduction, or a separately planned Dinosaur Park family day. Compare those specific interests with more time for Wuxi gardens and Taihu. Liyang countryside is its own base, so choose the actual property and complete transfers rather than treat it as another central city stop.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou adds its major classical gardens and canal neighborhoods; Wuxi adds Jichang's hill relationship and a northern Taihu chapter. Give each a distinct purpose and enough usable time. They are different hotel bases, and a short dated train service still needs both local transfers. A limited itinerary may be stronger with one city explored well.",
      },
      {
        slug: "yixing",
        advice:
          "Yixing is a county-level city within Wuxi's wider municipality, with its own station, city base and Dingshu pottery routes. Choose it for a real zisha interest and a separately confirmed collection or maker visit. It is not another attraction beside Yuantouzhu; compare the full journey and whether a pottery-area overnight adds value.",
      },
      {
        slug: "changshu",
        advice:
          "Changshu offers Yushan, selected scholarly or garden spaces and Shanghu, with Shajiabang as another independent choice. Add it when the hill, cultural interests or actual room offer a useful contrast. Avoid filling consecutive days with similar lakeside circuits simply because the places share a Jiangnan setting.",
      },
      {
        slug: "huzhou",
        advice:
          "Huzhou provides a different city and southern Taihu hotel perspective in Zhejiang. It is not another Wuxi neighborhood or a quick walk across the lake. Compare the actual hotel-to-hotel journey and purpose; Nanxun, Moganshan and Anji each require their own decisions beyond a general Huzhou or Taihu label.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai is a contrasting city chapter and international gateway. Compare direct road transport with dated trains and the actual Wuxi station, including both hotel transfers. For a day visit, keep one main interest and a complete return buffer. A western Wuxi resort address needs its own airport or station plan, especially before a fixed international departure.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake and Longjing tea, a different landscape and city stay from Taihu. Protect useful time for those interests instead of treating another lake name as a reason for a rushed stop. A fixed tea appointment, actual hotel and complete journey should shape the connection.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring can suit gardens and Taihu outings, with Yuantouzhu cherry blossoms a distinct date-sensitive interest. Autumn can offer comfortable walking conditions, though rain, haze and busy holidays remain possible. Summer requires cooling, shorter exposed stretches and indoor breaks; winter can feel cold and damp, particularly by the lake. Choose dates for the wider journey, then check current bloom, weather and any event arrangements. A clear long-distance lake view, peak flowers or an operating boat should not be the only reason the day works.",
    orientation:
      "Wuxi is a prefecture-level city in Jiangsu on the northern side of Taihu. Central Wuxi, Huishan and Jichang Garden, Yuantouzhu, and the Lingshan/Nianhuawan area are distinct route chapters. Binhu is a large district rather than one compact hotel neighborhood. Taihu also borders other destinations; Huzhou's southern-shore properties are not interchangeable with a Wuxi base. Yixing and Jiangyin are separate county-level cities within the wider municipality. Use full Chinese hotel, entrance and station details rather than rely on a translated lake name.",
    experiences: [
      "Understand Jichang Garden through changing views, water and the relationship with the hills",
      "Pair a selected Huishan cultural route with a local meal and a different city evening",
      "Give Taihu or a western Lingshan and Nianhuawan stay its own purpose and time",
    ],
    planningNotes: [
      "Count usable days before combining city culture with a substantial lake outing",
      "Choose between central convenience, a specific Taihu hotel and a separate western stay",
      "Confirm garden admission, lake transport and resort programming as distinct arrangements",
    ],
    arrival:
      "Use the exact ticketed station: Wuxi, Wuxi East and Wuxi New Area serve different approaches, and the relevant choice depends on the dated service and final address. Compare the full rail journey, including both road transfers and luggage, with direct travel from the actual Shanghai or Suzhou hotel. For an airport connection, specify the airport, terminal and flight and allow the complete process. Do not place an essential interior visit immediately after a connection that could run late. Yixing has a separate station and local route despite belonging to the wider Wuxi municipality.",
    gettingAround:
      "Group Huishan and Jichang Garden as a focused cultural chapter, then choose a separate Taihu or western outing. A vehicle helps between these areas, but the actual entrance, internal transport and walking still matter. For Yuantouzhu, confirm the selected land route and any boat independently; for a resort evening, settle the actual finish and return or room. Guests with mobility needs should receive a named shorter route and practical rest plan. Avoid repeated cross-city journeys caused by booking a hotel before deciding which area matters most.",
    stayStrategy:
      "For a mixed visit, central Wuxi can make meals and city evenings easier. For a lake or resort stay, choose the actual property and protect enough time on site to enjoy its confirmed room, dining and facilities. Assess noise, outlook, bathroom, climate control, breakfast and vehicle access. Two nights provide one full day, while three nights provide two; use arrival and departure hours honestly. A particular hotel can justify a stay, but another room move should add usable time or a different experience.",
    firstTimerNote:
      "Begin with Jichang Garden and Huishan if cultural interpretation is the priority, or a specific Taihu outing if the landscape matters most. Add the other chapter when the usable days and weather allow. Lingshan and Nianhuawan deserve a deliberate choice rather than automatic inclusion in a city checklist. Tell the planner which experience you would regret missing, and let the rest of the route support it.",
    faqs: [
      {
        question: "Is Wuxi worth visiting, or should I stay longer in Suzhou?",
        answer:
          "Choose Wuxi for Jichang Garden's hill setting, Huishan and a distinct Taihu or western resort chapter. Stay longer in Suzhou when its major classical gardens and canal neighborhoods are the main interest and nights are limited. Combining them is most useful when each has a clear purpose and enough usable time.",
      },
      {
        question: "How many nights should I spend in Wuxi?",
        answer:
          "Two nights usually give one full day, with arrival and departure time available only when the transport allows it. Three nights provide two full days for city culture and a separate lake or western outing. A selective day visit is possible; a property-focused overnight can also work when going directly to the actual hotel.",
      },
      {
        question: "Can I visit Wuxi on a day trip from Shanghai or Suzhou?",
        answer:
          "Yes, with a selective plan and the complete return journey included. Compare direct road travel with dated rail and both local transfers. Choose Huishan and Jichang Garden, or a focused Taihu outing, before adding more. The garden, Yuantouzhu, Lingshan and Nianhuawan do not form one compact walking circuit.",
      },
      {
        question: "Is Yuantouzhu an island, and do I need to take a boat?",
        answer:
          "Yuantouzhu, often translated as Turtle Head Isle, is principally a peninsula setting on Taihu. A visit can focus on selected land routes and lake views. An island boat is an additional choice with its own current sailing, weather, ticket and walking considerations; the English name does not make a boat necessary.",
      },
      {
        question: "When are the cherry blossoms at Yuantouzhu?",
        answer:
          "Spring is the usual planning season, but the precise bloom stage varies with the year and conditions. Check current local reports and visitor arrangements close to travel and leave flexibility if flowers are the main purpose. With fixed dates, plan a worthwhile garden-and-lake day that does not depend on peak bloom.",
      },
      {
        question: "Should I stay in central Wuxi or near Taihu?",
        answer:
          "Choose central Wuxi for a mixed cultural route and convenient meals. Choose a particular Taihu property when its actual room, setting and time on site are part of the trip. Map the real entrances and transfers: a lake-related hotel name or Binhu District address does not establish easy access to every planned visit.",
      },
      {
        question: "What is the difference between Lingshan and Nianhuawan?",
        answer:
          "Lingshan is a Buddhist visitor complex with religious spaces and modern cultural presentation. Nianhuawan, also called Nianhua Bay, is a contemporary themed resort with its own stays and programming. They are separate visitor decisions; confirm actual admissions, walking, current evening plans and hotel inclusions for the dates.",
      },
      {
        question: "Are Jichang Garden and Huishan Ancient Town the same visit?",
        answer:
          "They can form one coherent cultural outing, but the garden, public lanes and individual interiors have their own access arrangements. Choose the current open route and admissions rather than assume every ancestral hall or garden space is included. Leave time to understand the garden's water, rockwork and relationship with the hills.",
      },
      {
        question: "Which Wuxi railway station should I use?",
        answer:
          "Choose from the actual dated services and final address, comparing Wuxi, Wuxi East and Wuxi New Area where relevant. Include the road at both ends, boarding and luggage. The most convenient station for a central hotel may differ from the best approach to a western lake or resort property.",
      },
      {
        question: "Can I visit Yixing as part of a Wuxi trip?",
        answer:
          "Yes, when the full journey and pottery interests justify it. Yixing is a separate county-level city with its own station, and Dingshu's studios and collections require their own plan. A real maker appointment needs confirmation; the shared municipality does not make it an automatic short extension of a Yuantouzhu visit.",
      },
    ],
    culturalStory: {
      title: "Read the garden against the landscape before moving to the lake",
      paragraphs: [
        "Jichang Garden, or Ji Chang Yuan (寄畅园), offers a useful lesson in how a garden relates to its wider setting. Notice where a path reveals water, how rockwork and planting guide attention, and how the hills enter the composition. Move slowly enough to compare a view from more than one position. Huishan's lanes and ancestral-hall history add social context beyond the garden, with each accessible interior interpreted through its actual fabric, repair and current use. Huishan clay figurines provide another local subject when a relevant display or genuine provider is available.",
        "At Taihu, change scale from a composed garden view to a broad water landscape. Yuantouzhu's peninsula is one selected approach, not a complete introduction to every shore or island. In a different western chapter, explain Lingshan's religious spaces and modern visitor complex on their own terms, and Nianhuawan as a contemporary resort rather than an ancient village preserved without change. The journey becomes richer when the guide makes those differences clear instead of applying the same historical label to every attractive building.",
      ],
    },
    foodStory: {
      title: "Choose a meal for the kitchen and the pace of the day",
      paragraphs: [
        "Wuxi's xiaolongbao offer a useful introduction to the local preference for a sweeter savory balance, though recipes and sweetness vary by kitchen. Eat a broth-filled dumpling carefully and start with a small order before adding more. Jiang paigu (酱排骨), braised pork ribs in a rich sauce, makes a different shared dish rather than a second version of the dumpling lunch. Add vegetables and choose portions for the group. For vegetarian, alcohol-free or allergy requests, check the filling, stock, sauce and shared preparation instead of relying on the English dish name.",
        "Menus may also describe Taihu's 'three whites' through fish, white shrimp and silverfish. Ask the restaurant what it is actually serving, how it is sourced and cooked, and whether bones or shellfish suit the guests. A lake-view table does not prove wild catch from the adjacent water. A seated meal can be one of the day's best pauses without a shopping stop or elaborate banquet, and a cooking or craft-linked food session should be arranged with a real host when that is the experience you want.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first evening",
        title: "Settle into the base that serves the route",
        description:
          "Complete the actual station or hotel transfer and check in. If staying centrally and energy allows, choose a manageable Nanchang Street and canal-side evening with dinner. For a lake or western property, enjoy its actual setting and dining rather than add an immediate return across the city.",
      },
      {
        day: "Full day / city culture",
        title: "Give Huishan and Jichang Garden time to make sense",
        description:
          "Follow the confirmed garden and town route, looking closely at changing views, water and the relationship with the hills. Select interiors for their different stories, then take a proper seated lunch. Keep the afternoon adjustable for rest, weather or a relevant cultural display rather than count every courtyard as a separate achievement.",
      },
      {
        day: "Optional second full day / landscape choice",
        title: "Choose a Taihu outing or a distinct western chapter",
        description:
          "At Yuantouzhu, select a land route and decide separately whether a current boat adds enough value. Alternatively, give Lingshan and a planned Nianhuawan evening or stay their own time and transfers. These are choices for a tailored route, not a requirement to combine all sites in one day.",
      },
      {
        day: "Departure",
        title: "Continue with the next interest and gateway settled",
        description:
          "Allow the complete transfer to the actual station, airport connection or next hotel. Continue to Suzhou for its gardens or Yixing for a separately confirmed pottery interest when that adds value. This outline supports a tailored proposal with the selected visits, room and included services confirmed for your dates.",
      },
    ],
  },
};
