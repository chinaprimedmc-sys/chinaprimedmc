import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/fuzhou.svg",
  alt: "Fuzhou planning diagram comparing historic lanes, a separate shipbuilding heritage visit and a regional extension; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const fuzhouGuide: ExpandedDestination = {
  id: "fuzhou",
  name: "Fuzhou",
  region: "south",
  kicker: "Historic lanes, jasmine tea and a different side of Fujian",
  description:
    "Choose Fuzhou for courtyard architecture, Fujian collections and local food, with practical advice on Sanfang Qixiang, hotel areas and onward journeys.",
  stay: "2–3 nights; longer for a separately chosen excursion",
  bestFor: "Architecture, regional history, jasmine tea and a less hurried city stay",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["pingtan", "quanzhou", "xiapu", "wuyishan", "xiamen"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Fuzhou Travel Guide: Historic Lanes, Food & Hotels",
    seoTitle: "Fuzhou Travel Guide: Historic Lanes, Food & Hotels",
    seoDescription:
      "Plan 2–3 nights in Fuzhou: Sanfang Qixiang, Fujian Museum, hotel areas, jasmine tea and food, with full connections to Xiapu, Quanzhou or Wuyishan.",
    answer:
      "Fuzhou (福州), also encountered in older English sources as Foochow, is the capital of Fujian in southeastern China. Choose it for Sanfang Qixiang's lanes and courtyard houses, provincial collections, jasmine tea and a food tradition distinct from southern Fujian. Two nights give one focused city day; three allow a second subject such as shipbuilding history in Mawei or a gentler pace. Central Fuzhou is a river city: arriving at an airport on the coast does not make a downtown hotel a beach resort. Fuzhou in Fujian is also distinct from Fuzhou (抚州) in Jiangxi. Use the province and Chinese name when checking hotels and tickets.",
    stayAnswer:
      "Allow two nights for a full day combining a selected Sanfang Qixiang house or exhibition, a manageable neighborhood walk and a good regional meal. Three nights let you give Fujian Museum and West Lake more time or devote a separate outing to Mawei's shipbuilding heritage. A connection night works when transport is the main purpose, but an evening arrival and early departure are not a city day. Pingtan, a rural Yongtai stay or a longer mountain visit needs its own time budget; adding each to a short city break can turn a relaxed trip into repeated road journeys.",
    hotelAnswer:
      "Start with an exact Gulou address if Sanfang Qixiang, central dining, West Lake and the museum are your priorities. Check the actual walking route: a district name or old-town label does not establish that every visit is around the corner. Compare a Taijiang riverside property for room comfort and evening dining, allowing transfers back to your chosen heritage sites. Cangshan is a broad district; a historic Yantai Mountain neighborhood stay and a modern business hotel there offer different settings. Choose station or Changle airport accommodation only when it improves the full journey. Quiet rooms, cooling, breakfast and easy pickup matter more than a vague premium category.",
    sightseeingQuestion: "Should you choose Sanfang Qixiang, Fujian Museum or Mawei?",
    sightseeingAnswer:
      "Sanfang Qixiang, usually translated as Three Lanes and Seven Alleys, is the starting point for a focused architecture-and-city walk. Nanhou Street's shops are only one part of the district; choose a particular public house or display to understand the courtyard layout beyond the commercial frontage. Fujian Museum provides a separate provincial collection visit near West Lake, with current exhibitions and reservations checked. Mawei is an outlying shipbuilding and naval-history chapter, not another lane beside the old town. Pick the specific museum or surviving site and give its interpretation, transport and opening enough time. Two well-explained subjects are more useful than a race through every district.",
    visitorResources: [
      {
        label: "Fuzhou municipal government",
        href: "https://www.fuzhou.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Use the actual attraction or institution for current hours, ticket scope and reservations. General city information does not verify a hotel room, a private host or access to a historic interior.",
      },
      {
        label: "Fujian provincial government",
        href: "https://www.fujian.gov.cn/",
        scope:
          "Regional context and public-service information. Confirm named collections, transport and any coastal or island excursion separately. This is background reading, not evidence of a dated tea session, ferry operation or resort service.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and full station names. Fuzhou and Fuzhou South are different stations; match the province and Chinese name where needed. A train time does not include the transfer between a platform, hotel and next appointment.",
      },
    ],
    serviceScope:
      "Ask for a named hotel and room, full airport or station transfer, selected public interiors, guide language, meals and any separate excursion. A Sanfang Qixiang walk should identify the houses or exhibitions intended, with their current entry conditions. Tea tasting, scenting demonstrations, specialist interpretation and hot-spring bathing each need a specific provider and confirmed scope. A private guide does not confer private access to occupied homes, closed buildings, workshops or religious spaces. Explain whether an activity is a public visit, a shared commercial session or a genuinely arranged private appointment.",
    routeAdvice:
      "Fuzhou can introduce northern and central Fujian before Xiapu's working coast, Wuyishan's rock tea and mountain landscape, or Quanzhou's maritime and religious heritage farther south. Xiamen and Gulangyu add another distinct city-and-island chapter. Choose the route around useful nights, actual rail services and complete hotel transfers. No matching published Fuzhou itinerary is recommended here. For a tailored proposal, send dates, entry and exit points, architecture or tea interests, room priorities and walking needs. Ask which visits are included and which need a separate quote; an existing Fujian itinerary elsewhere does not automatically include Fuzhou.",
    practicalPlanning: {
      timing:
        "Make any chosen house or museum opening the anchor, then add a coherent walk and lunch. Do not reserve all the heritage explanation for the evening, when interiors may be closed even though shops remain active. Mawei needs a separate transport block. In hot or wet weather, alternate short outdoor sections with a confirmed indoor visit and seated breaks. If a coastal extension matters, plan by actual weather and the activity rather than squeeze it between a city tour and a departure train.",
      walking:
        "Historic lanes can involve uneven surfaces, thresholds, steps and crowds. Narrow interiors and upper floors need their own access checks. Museum galleries add standing, while West Lake paths should be selected by distance and resting points. Yantai Mountain's street name does not imply a flat route: choose slopes and steps that suit the guest. Private transfers reduce journeys between districts but still leave walking inside pedestrian areas. Ask for actual drop-off and pickup points and a shorter alternative.",
      cost: "Compare the actual room category, breakfasts, gateway transfers, guiding hours, named interior admissions and meals. A Mawei excursion, coastal drive, tea host or bathing session has a different service scope from a city walk. For hot springs, clarify private or shared bathing, room versus day-use access, hygiene arrangements and the specific facilities offered. Premium spending should buy better sleep, useful interpretation, comfortable timing and a confirmed experience, rather than a string of unsupported exclusivity claims.",
    },
    attractions: [
      "Sanfang Qixiang / Three Lanes and Seven Alleys, with selected accessible houses and exhibitions",
      "Nanhou Street as the commercial spine of a wider historic district",
      "Fujian Museum and a manageable West Lake walk as a separate collection-and-landscape pairing",
      "Yantai Mountain streets in Cangshan, with slopes and the condition of particular buildings considered",
      "Mawei shipbuilding and naval heritage as a dedicated excursion with named sites",
      "Jasmine tea through an explained tasting or a specifically arranged learning session",
      "Local fish balls, rouyan and other regional dishes chosen with their actual ingredients explained",
    ],
    stays: [
      {
        label: "2 nights: a focused first introduction",
        advice:
          "Use one comfortable base for Sanfang Qixiang, a chosen house or exhibition and a regional meal. Leave room for explanation and rest. If the museum is your main interest, shorten the lanes rather than force a second major subject into a late afternoon.",
      },
      {
        label: "3 nights: two genuinely different city days",
        advice:
          "Add a provincial collection-and-West Lake day, a Mawei heritage excursion or a slower second neighborhood day. Choose by interest; these are alternatives, not mandatory additions to the same day. Keep one hotel unless changing locations provides a clear benefit.",
      },
      {
        label: "4 nights or more: a purposeful extension",
        advice:
          "Give a particular rural retreat, island interest or extended cultural subject its own plan. Compare staying near that experience against returning to central Fuzhou each night. Extra nights should improve time on the ground rather than justify a longer checklist.",
      },
    ],
    hotelAreas: [
      {
        name: "Gulou / central heritage and collections",
        advice:
          "Plot the hotel against the actual lanes, selected house, museum and restaurants. A courtyard-style stay may have atmospheric spaces but can involve steps, limited vehicle access or less sound insulation. A conventional room with a lift and reliable cooling may suit better; check the real room rather than judge by the lobby.",
      },
      {
        name: "Taijiang and the river / contemporary comfort",
        advice:
          "A specific riverside property can work for room comfort and evenings, allowing city transfers. Check whether the booked room actually has the requested river view and whether construction, roads or events affect quiet. Riverside does not mean every heritage visit is walkable.",
      },
      {
        name: "Cangshan / a chosen neighborhood or property",
        advice:
          "Distinguish the Yantai Mountain area from the wider district. Review slopes, restaurant access, pickup and bridges on the daily route. Choose this base for its actual setting and room advantages, allowing the journey to Gulou and onward transport.",
      },
      {
        name: "A station or Changle airport overnight / connection convenience",
        advice:
          "Match the exact gateway and dated departure, including the final road or public-transport leg. Fuzhou station, Fuzhou South and Changle airport are separate locations. One easy departure may come at the cost of city time; compare the entire stay before moving hotels.",
      },
    ],
    tradeoffs: [
      {
        title: "Look beyond the main shopping street",
        advice:
          "Sanfang Qixiang is more rewarding when a guide explains a courtyard plan, visible details and the documented life of a particular house. Check which interiors are currently accessible and which need separate admission. A handsome frontage alone does not establish the age or originality of everything behind it.",
      },
      {
        title: "City architecture and shipbuilding history need different time",
        advice:
          "Mawei's industrial and naval subject can be compelling for an interested guest, but it brings its own transfer and institutional opening. Explain the specific visit rather than sell a generic port panorama. If the subject does not interest the group, use that time for a fuller city day.",
      },
      {
        title: "Tea tasting is different from watching production",
        advice:
          "A jasmine-tea tasting can happen outside the scenting season. Seeing flowers and tea being worked together requires the relevant season, location, producer and appointment. A shop session is not automatically a workshop, and purchasing tea should remain optional. Specify language and learning content before booking.",
      },
      {
        title: "A hot-spring reputation does not select a bathing experience",
        advice:
          "Choose the actual venue, water and facility information, bathing format, privacy, clothing rules and hotel or day-use inclusion. Check suitability with the guest's own clinician when medical conditions are relevant. A spa label or bathtub image is insufficient evidence of a private mineral-water bath, and no health outcome should be promised.",
      },
      {
        title: "Pingtan is a separate coastal choice",
        advice:
          "An island visit deserves an actual interest, weather plan, transport and useful daylight. Photogenic coastlines, marine activities and seasonal phenomena are not guaranteed by a city booking. Compare an island stay against a return outing; central Fuzhou's cultural strengths do not depend on adding a beach excursion.",
      },
      {
        title: "Fuzhou and Quanzhou offer different Fujian stories",
        advice:
          "Fuzhou adds the provincial capital, courtyard neighborhoods and jasmine-tea interest. Quanzhou adds a different maritime and living religious landscape. They can complement one another when both receive useful time; a shared province does not make their architecture, dialects and food interchangeable.",
      },
      {
        title: "Food names can conceal animal ingredients",
        advice:
          "Fish balls may contain a pork filling, and rouyan wrappers are traditionally made using pork rather than an ordinary flour-only wonton skin. Ask about the actual recipe, stock, seafood, cooking wine and shared equipment. A light-looking soup or translated dumpling label is not a dietary assurance.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "pingtan",
        advice:
          "Pingtan adds a distinct island stay with stone-house villages and a chosen coastal base. Compare the actual Fuzhou hotel or airport with a complete road journey or rail plus local transfers. Choose two or three nights when the property and pace justify it, and keep blue tears, boats and swimming as condition-dependent possibilities rather than promises.",
      },
      {
        slug: "xiapu",
        advice:
          "Xiapu adds a working coast and tidal-flat landscapes. Agree the photography or non-photography purpose, tidal windows, actual base and the full station-to-property journey. A train arrival should not be treated as arrival at a coastal viewpoint or a guarantee of sunset light.",
      },
      {
        slug: "wuyishan",
        advice:
          "Wuyishan offers rock-tea learning and a separate scenic stay. Compare actual station names, hotel transfers and the timing of any confirmed tea appointment. Fuzhou jasmine tea and Wuyishan rock tea provide different subjects; allow each an explanation rather than repeat two generic shop visits.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou adds port history, religious sites and southern Fujian food. Compare a day visit with useful separate nights, using complete hotel-to-hotel transport. Select its actual heritage sites rather than assume a short walk from whichever station has a convenient train.",
      },
      {
        slug: "xiamen",
        advice:
          "Xiamen adds coastal city time and Gulangyu's distinct architectural history. Give the island its own ferry, luggage and accommodation decision. Choose the right rail stations at both ends and avoid making an island connection depend on a tight arrival.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can work well for city walks, with rain and variable temperatures still possible. Summer heat, humidity and heavy rain can change outdoor plans; typhoons may disrupt flights, coastal journeys and activities. Winter can feel damp and cool, making effective room heating worth checking. A jasmine-production visit depends on the producer's actual seasonal work, not a general pleasant-weather label. Choose city dates around your subjects and give exposed coastal extensions a separate weather decision.",
    orientation:
      "Fuzhou is Fujian's capital on the Min River. Gulou's central lanes, provincial museum and West Lake form one planning focus; Taijiang's riverside, Cangshan's neighborhoods and Mawei's shipbuilding heritage create different journeys. Changle airport serves the wider city from the coast. Fuzhou and Fuzhou South railway stations are separate. Older sources may use Foochow; Fuzhou in Jiangxi has different Chinese characters and is a different destination. Use full names in tickets and written pickup details.",
    experiences: [
      "Read a courtyard district through a chosen house and a well-paced walk",
      "Compare jasmine tea and local food with their ingredients and methods explained",
      "Choose provincial collections or a distinct Mawei heritage excursion for a second day",
    ],
    planningNotes: [
      "Name the intended historic interiors and confirm access rather than promise every house",
      "Choose hotel areas by exact visits, quiet and complete gateway transfers",
      "Separate tea tasting, seasonal production and hot-spring facilities into clear service choices",
    ],
    arrival:
      "Use the full flight or train booking, distinguishing Changle airport, Fuzhou station and Fuzhou South. Include arrival formalities, luggage and the real transfer to the hotel before estimating usable sightseeing time. A modern rail connection does not eliminate the journey across the city. Keep any arrival-day walk flexible and arrange a practical meal. For an onward rural or coastal property, check final access and dinner rather than assume a station in the wider region is close to the room.",
    gettingAround:
      "Combine a small number of district-to-district transfers with coherent walks. The historic lanes have pedestrian sections, thresholds and interiors that cannot be reached by car. Yantai Mountain routes require their own slope assessment. Mawei is better treated as a dedicated excursion than an extra stop between central visits. Agree actual pickup points and rest breaks, and adapt for heat or rain. A shorter walk with good interpretation is often more satisfying than several disconnected photo stops.",
    stayStrategy:
      "For two or three city nights, one well-chosen hotel normally keeps the trip simpler. Compare central access with room quality, sleep, meals and onward transport. A heritage address should earn its place through the actual room and surroundings, not decorative photographs alone. If an island or rural experience becomes the main purpose, consider a separate local base. Avoid spending most of each day returning to a city room solely to preserve a one-hotel plan.",
    firstTimerNote:
      "Choose Fuzhou because its city subjects appeal to you, rather than because every Fujian itinerary must include the capital. One full day can introduce courtyard architecture and food; a second should add a subject you actually want to understand. Visitors drawn primarily to tea mountains, tidal landscapes or maritime religious heritage may prefer more time in Wuyishan, Xiapu or Quanzhou. A tailored route should make that choice clear before adding nights.",
    faqs: [
      {
        question: "Is Fuzhou worth visiting for a first trip to Fujian?",
        answer:
          "Yes, if courtyard neighborhoods, regional collections, jasmine tea and local food appeal to you. Two nights give a focused city day. It is a different choice from Xiamen's island-and-coast setting or Quanzhou's maritime and religious heritage, so choose by interest rather than capital-city status.",
      },
      {
        question: "How many days do I need in Fuzhou?",
        answer:
          "Two nights allow one full city day; three allow a second subject or slower pace. Mawei, a fuller museum visit or an arranged tea session can justify extra time. An island or rural extension needs its own complete journey and should not automatically be added to the same short city break.",
      },
      {
        question: "What is Sanfang Qixiang, and is everything included in one ticket?",
        answer:
          "The name means Three Lanes and Seven Alleys. It is a historic district, not one house or museum. Public streets, selected interiors, exhibitions and any combined admission can have different conditions. Check the current list and choose particular buildings instead of promising entry to every courtyard.",
      },
      {
        question: "Where should I stay in Fuzhou for sightseeing?",
        answer:
          "Compare a precise Gulou address for central heritage and collections with a Taijiang riverside or selected Cangshan property for its actual room and setting. Check quiet, cooling, lift access, meals and full transfers. Airport or station accommodation makes sense when a specific connection outweighs city convenience.",
      },
      {
        question: "Can I see jasmine tea being made in Fuzhou?",
        answer:
          "A tasting and an explanation are different from watching seasonal scenting work. Production requires a suitable producer, date, location and confirmed access. Ask what the session teaches, which language is available and whether it is a shop tasting or a workshop; do not assume a year-round production demonstration.",
      },
      {
        question: "Can I visit Mawei on the same day as Sanfang Qixiang?",
        answer:
          "A selective combination may fit when actual opening, roads and interests align, but it reduces time for both subjects. For guests interested in shipbuilding and naval history, a separate excursion allows better interpretation and a calmer day. Name the actual sites rather than promise every museum in one outing.",
      },
      {
        question: "Are Fuzhou station and Fuzhou South the same?",
        answer:
          "No. Match the full station name on the dated ticket and include the hotel transfer. Changle airport is another gateway. Specify Fujian and, when necessary, 福州 to distinguish the city from Fuzhou in Jiangxi, written 抚州.",
      },
      {
        question: "Are Fuzhou fish balls and rouyan suitable for vegetarians?",
        answer:
          "They should not be assumed suitable. Fish balls can include a pork filling, and traditional rouyan uses a pork-based wrapper. Stocks and sauces add further ingredients. Discuss the actual preparation and alternatives with the kitchen, especially for religious diets or serious allergies.",
      },
      {
        question: "Should I combine Fuzhou with Xiapu, Wuyishan or Quanzhou?",
        answer:
          "Choose Xiapu for a working coast and carefully timed photography, Wuyishan for rock tea and mountain scenery, or Quanzhou for maritime and living religious heritage. Compare complete journeys and useful nights. No matching published Fuzhou product is recommended here; these are directions for a tailored request.",
      },
    ],
    culturalStory: {
      title: "A courtyard tells more than a street of facades",
      paragraphs: [
        "Sanfang Qixiang rewards attention to the relationship between lane, entrance, courtyard and rooms. A selected house can show how space organized family life, status and movement, while a documented resident's story adds a particular historical perspective. Identify surviving material, later work and interpretation honestly. The district also has active commerce: a shop frontage and an accessible historic interior are different experiences, each better understood on its own terms.",
        "Mawei opens another subject through shipbuilding, technical learning and naval history. It needs a clear narrative and specific sites rather than an interchangeable old-town walk. Fuzhou's own dialect and regional traditions also deserve distinction from southern Fujian. Good guiding helps visitors connect these subjects without pretending a single museum, house or host can represent the whole province. Occupied buildings and private life remain outside a public sightseeing ticket unless a visit is genuinely agreed.",
      ],
    },
    foodStory: {
      title: "Understand the wrapper, filling and fragrance",
      paragraphs: [
        "Fish balls and rouyan are useful starting points precisely because their translated names reveal only part of the dish. A fish-ball preparation may combine a fish exterior with a meat filling; traditional rouyan uses a thin pork-based wrapper. Ask a guide to explain texture and method as well as flavor. A seated meal can introduce a few distinctive dishes more comfortably than a long snack checklist, particularly in humid weather or before an onward transfer.",
        "Jasmine tea offers another kind of sensory lesson: compare the tea base, floral fragrance and brewing rather than equate stronger perfume with better quality. A tasting can be valuable without a purchase or production demonstration. Discuss fish, pork, shellfish, wheat, soy, cooking wine, stock and shared equipment with the actual kitchen. Buddha Jumps Over the Wall recipes can vary greatly in ingredients, price and preparation needs; order deliberately, with clear dietary information and an agreed price rather than as an automatic luxury-course promise.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the city and its food",
        description:
          "Complete the transfer from the actual station or airport, check the room and allow dinner. Add a short neighborhood introduction only if useful daylight and energy remain. Keep timed historic interiors for a day with dependable arrival.",
      },
      {
        day: "Full city day",
        title: "Understand a house, then the surrounding lanes",
        description:
          "Visit a confirmed Sanfang Qixiang interior and explore a selected lane route with architectural context. Allow a seated regional lunch and rest. Add a modest tea tasting or another central interest when genuinely arranged, keeping purchases optional.",
      },
      {
        day: "Optional second full day",
        title: "Choose a distinct second subject",
        description:
          "Choose Fujian Museum and a manageable West Lake walk, a dedicated Mawei heritage excursion or a slower neighborhood day. Match opening, transfers and walking to the group. These are alternatives rather than a promise to fit every district into one day.",
      },
      {
        day: "Departure",
        title: "Continue to a deliberately chosen Fujian chapter",
        description:
          "Allow the full station journey or onward transfer and protect the next destination's check-in and meal. This two-night outline, with an optional third night, is illustrative. It is not a published package or a guarantee of private interiors, tea production, bathing facilities or coastal conditions.",
      },
    ],
  },
};
