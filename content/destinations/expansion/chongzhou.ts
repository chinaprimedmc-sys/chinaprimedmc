import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/chongzhou.svg",
  alt: "Original Chongzhou planning schematic separating Daoming bamboo craft, Jiezi old town and rural accommodation; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const chongzhouGuide: ExpandedDestination = {
  id: "chongzhou",
  name: "Chongzhou",
  region: "southwest",
  kicker: "Bamboo craft, old-town lanes and a slower Chengdu countryside stay",
  description:
    "Choose Chongzhou for Daoming bamboo weaving, a selective Jiezi old-town visit or settled countryside time, with honest advice on workshops, hotels and Chengdu transfers.",
  stay: "A focused day trip or 2 nights for a rural stay",
  bestFor: "Craft-minded travelers, families and a slower Sichuan interlude",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["mianzhu", "qionglai", "chengdu", "qingcheng-mountain", "leshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Chongzhou Travel Guide: Bamboo Craft & Rural Stays",
    seoTitle: "Chongzhou Guide: Bamboo Craft & Rural Stays",
    seoDescription:
      "Plan Chongzhou near Chengdu: compare Daoming bamboo craft, Jiezi old town, Yanhua Chi, rural hotels, day trips and two-night stays with practical workshop advice.",
    answer:
      "Chongzhou (崇州) is a county-level city administered by Chengdu, west of the central city in Sichuan. It offers several different reasons to leave the urban itinerary: bamboo-weaving traditions around Daoming, the lanes and river setting of Jiezi old town, historic gardens in the Chongzhou center and a rural overnight stay. These places do not form one walkable attraction. For a day trip, choose one main subject and a nearby complement. Stay two nights when a good room, an actual craft session and unhurried countryside time are part of the purpose. A Chengdu visit alone does not cover Chongzhou, and a bamboo-themed building is not evidence that a weaving lesson is available.",
    stayAnswer:
      "A day trip works for one focused Daoming or Jiezi visit with lunch and the complete return to Chengdu. One night can provide an evening and morning but often leaves no full day between check-in and departure. Two nights give one complete day for a confirmed workshop and selected local exploring without moving bags. Three nights need a stronger reason, such as substantial hotel time or separately researched craft interests. Do not add nights merely to collect nearby place names; decide what guests will actually do between meals and sleep.",
    hotelAnswer:
      "Compare a central Chongzhou hotel for gardens, food and practical services, a specific Daoming-area rural property for the craft route, and a Jiezi-area room for useful old-town hours. None is automatically the best base for all three. Rural architecture and a photogenic courtyard do not establish quiet sleep, effective cooling, heating or a comfortable bathroom. Ask about the exact room, road approach, luggage, dinner, breakfast and weekend events. Stay in Chengdu when the countryside visit is brief and moving hotels would add more inconvenience than value.",
    sightseeingQuestion: "Should I choose Daoming, Jiezi or Chongzhou's historic garden?",
    sightseeingAnswer:
      "Choose Daoming for a real interest in bamboo craft, with a particular workshop or host arranged. Choose Jiezi for a selective old-town walk, riverside time and a meal, accepting that it is also a busy contemporary visitor destination. Choose Yanhua Chi in the Chongzhou center for a historic garden interest and a different reading of the city. A short visit should have one lead subject. Combining all three without time for explanation, food and transfers usually weakens the day, especially when a practical craft session is the priority.",
    visitorResources: [
      {
        label: "Chongzhou municipal government",
        href: "https://www.chongzhou.gov.cn/",
        scope:
          "Local context and dated public notices, primarily in Chinese. Verify current garden and venue openings with the responsible site. A tourism description does not establish an individual artisan's availability, workshop language, hotel room or rural access arrangement.",
      },
      {
        label: "Chengdu municipal government",
        href: "https://www.chengdu.gov.cn/",
        scope:
          "Wider Chengdu regional context and public information. Administrative inclusion within Chengdu does not make central-city sightseeing, Chongzhou, Qingcheng Mountain and Dujiangyan one compact visitor area or a single ticket.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and exact ticketed stations. A train to a Chongzhou-area gateway still needs the final road to the actual village, room or venue. Compare complete journeys rather than station names alone.",
      },
    ],
    serviceScope:
      "A proposal should identify the craft venue or host, the actual format, teaching language or interpreter, session length, materials, suitable ages and what guests can take home. Name the hotel and room, public sites, transport, guiding and meals separately. A private car is transport, not an English-speaking craft instructor. A family home, working studio, closed religious space or private courtyard requires explicit permission. Agree a useful alternative if a host becomes unavailable, rather than replace a booked class with an unannounced shopping stop.",
    routeAdvice:
      "Chongzhou can follow Chengdu's city, food or panda days when guests want a different pace. Qingcheng Mountain offers a separate Daoist landscape and more physical walking, with its own hotel and route decisions. Leshan is another regional chapter with a substantial journey and its own Buddha-viewing choices; it should not be appended to the same short craft day. No matching published Chongzhou tour is recommended here. Share your dates, Chengdu hotel, craft interests, children's ages and room priorities to discuss a tailored day or stay.",
    practicalPlanning: {
      timing:
        "Anchor the day around the confirmed host or principal site. A workshop needs arrival, introduction, demonstration, practice, questions and packing, not just the nominal teaching time. Add one nearby walk or meal rather than stack distant stops. Weekend leisure traffic and events can change the feel of Jiezi and rural properties. For a stay, protect both useful local hours and time to enjoy the room instead of arriving late and leaving immediately after breakfast.",
      walking:
        "Village lanes, old-town paving, thresholds, garden paths and workshop seating need individual review. Bamboo work can involve fine hand movements, sharp tools or sustained sitting; choose an adapted task for children or limited dexterity. Shaded village time is not the same as a mountain hike. Confirm vehicle approach, bag distance, toilets and places to rest. A rural property should be assessed room by room rather than described generally as accessible because the surroundings look flat.",
      cost: "Compare the complete Chengdu return or onward road, guide preparation, interpreter, actual host fee, teaching materials, meals, admissions where applicable and the exact room. A demonstration, practical class and extended specialist visit have different costs and purposes. Purchases are optional and separate unless clearly agreed. A premium should buy useful teaching, a comfortable base and thoughtful timing; it does not imply an exclusive master encounter or private use of an entire village.",
    },
    attractions: [
      "A named Daoming bamboo-weaving visit, with demonstration or teaching format agreed",
      "Jiezi old town through public lanes and a selected riverside walk",
      "Yanhua Chi historic garden in the Chongzhou center through its current visitor route",
      "A seasonal countryside walk on an appropriate public path",
      "A regional lunch with enough time for questions and rest",
      "A rural room chosen for sleep, meals and a genuine reason to stay",
    ],
    stays: [
      {
        label: "Day trip / one main interest",
        advice:
          "Choose a confirmed Daoming craft visit or a Jiezi-led day, with lunch and one sensible complement. Keep the complete pickup and return to the actual Chengdu hotel explicit. A productive craft session is worth more than rushing through three unrelated photo stops.",
      },
      {
        label: "1 night / only when arrival and departure help",
        advice:
          "Use a quieter evening or morning and a room you want to enjoy. Review the actual hours on both days; one night does not automatically create a full local day. Keep workshop timing separate from an uncertain check-in or a fixed onward train.",
      },
      {
        label: "2 nights / one complete countryside day",
        advice:
          "Settle into one base, give a workshop time and retain a gentle walk or garden interest. Compare travel to the selected subjects before booking the room. Extra space in the schedule should make the visit more personal, not create pressure to include every town and mountain nearby.",
      },
    ],
    hotelAreas: [
      {
        name: "Chongzhou center / gardens, meals and services",
        advice:
          "Useful for a Yanhua Chi and town-focused stay or guests who prefer established urban services. Compare the room, quiet and actual pickup. Daoming and Jiezi still require separate road planning; a central Chongzhou address is not a village doorstep.",
      },
      {
        name: "Daoming countryside / craft-led rural time",
        advice:
          "Choose a specific property for its relationship to the actual host and its room comfort. Ask about dinner, breakfast, insect screens where relevant, heating or cooling, bathroom privacy and luggage approach. A bamboo design theme does not establish a working craft program at the hotel.",
      },
      {
        name: "Jiezi area / useful old-town hours",
        advice:
          "Compare an exact room for lane or roadside noise, crowds, vehicle access and after-dark dining. An old-town label can refer to very different locations and building conditions. A courtyard can be attractive while still requiring a serious sound, temperature and bathroom check.",
      },
      {
        name: "Keep the Chengdu room / when moving adds little",
        advice:
          "A day trip can be the better choice if the visit is short or the rural room adds little comfort. Retain the central hotel, make one focused outing and return for the evening. An overnight should earn its place through the experience rather than be treated as automatically more authentic.",
      },
    ],
    tradeoffs: [
      {
        title: "Watching, learning and buying are different visits",
        advice:
          "A demonstration can explain technique without hands-on teaching. A class needs a task suited to the available time and guest ability. Shopping needs provenance, price and shipping questions. Agree which you want so a short sales presentation is not substituted for learning, and guests never feel required to purchase to justify a visit.",
      },
      {
        title: "Ask what you will learn from bamboo weaving",
        advice:
          "Look at how bamboo is prepared into strips, how an edge is finished and how tension affects the shape. In a short introduction, prepared materials and a simple pattern may be more appropriate than trying every production stage. The task, teacher and explanation matter more than an ambitious promise to make a complex object from scratch.",
      },
      {
        title: "Jiezi is a living visitor destination, not a preserved empty set",
        advice:
          "Historic associations, repaired buildings, modern shops and everyday tourism coexist. Walk a selected route and discuss what you see instead of assigning one ancient construction date to the entire streetscape. An early or later visit may feel different, but quiet lanes and empty photographs are not guaranteed.",
      },
      {
        title: "Countryside views are seasonal and agricultural",
        advice:
          "Fields are working landscapes, not permanent flower displays. Planting, harvest, weather and land access change what is visible. Choose a public route and respect crops, water channels and household space. A host's permission for a studio does not extend to every nearby house or field.",
      },
      {
        title: "A garden adds a different kind of attention",
        advice:
          "At Yanhua Chi, allow time for the relationship between water, paths, planting and buildings rather than a rapid lap. Explain the garden's historical layers without treating every present structure as original. The central-city location makes it a distinct choice from a village craft visit or an old-town riverside walk.",
      },
      {
        title: "High-end means a better day, not an unnamed exclusive host",
        advice:
          "A prepared interpreter, appropriate task, comfortable seat, good lunch and enough time to ask questions can make a craft visit exceptional. Confirm any named specialist or private session separately. A fashionable hotel or the word 'artisan' cannot establish the quality of the teaching or special access.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "mianzhu",
        advice:
          "Compare Daoming bamboo weaving with Mianzhu's New Year picture tradition north of Chengdu. Printing or coloring provides a different craft task and interpretation. Choose one main interest for a short outing, or allow separate days, confirmed hosts and full roads if both are important.",
      },
      {
        slug: "qionglai",
        advice:
          "Qionglai offers Pingle river-town time, tea interests and Qiong kiln heritage as a different local chapter. Compare those subjects with Chongzhou's bamboo craft before deciding whether both deserve nights. Each host, room and transfer needs its own plan; do not compress both cities and a mountain into one workshop day.",
      },
      {
        slug: "chengdu",
        advice:
          "Use Chengdu for a distinct city, food or panda chapter, then choose a focused Chongzhou day or settled rural extension. Existing Chengdu products do not automatically include Daoming or Jiezi. Compare the actual urban hotel road and keep time for the main craft subject.",
      },
      {
        slug: "qingcheng-mountain",
        advice:
          "Qingcheng adds Daoist architecture and mountain walking, with its own physical demands. Decide whether to change base or make a separately assessed visit; a Chongzhou room is not interchangeable with a Qingcheng retreat. The existing retreat product does not establish inclusion of Chongzhou craft visits.",
      },
      {
        slug: "leshan",
        advice:
          "Leshan introduces the Giant Buddha and river setting as another regional chapter. Allow the complete road or rail connection and choose its land or boat perspective separately. Do not compress a substantial craft session and a full Leshan visit into the same short outing.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for village walks and outdoor meals, with rain and temperature still relevant. Summer can be hot, humid and wet, making shade, cooling and a proper indoor break important. Winter can feel damp and chilly; check actual room heating rather than rely on an attractive fireplace image. Flowering, field color and harvest vary by location and year. Weekends and holidays can feel busier, so choose dates around the actual host, room and purpose rather than a generic claim of empty countryside.",
    orientation:
      "Chongzhou is within the wider Chengdu administrative area, but its center, Daoming villages and Jiezi old town are different destinations on the ground. Central Chengdu, the two principal airports and mountain visitor areas create further separate routes. Choose a city, bamboo-craft or Jiezi focus for a short stay. Neighboring Qionglai and Pengzhou require additional travel and should earn their place through a distinct interest. Use Chinese addresses for the particular room and workshop before comparing travel options.",
    experiences: [
      "Understand bamboo weaving through a defined Daoming visit rather than a generic craft-shopping stop",
      "Choose a Jiezi walk or Yanhua Chi garden for a contrasting local subject",
      "Enjoy a countryside meal and a comfortable room with genuine time to settle in",
    ],
    planningNotes: [
      "Confirm the actual host, format, language and task before promising a workshop",
      "Choose the rural room around sleep, meals and the road to your main interest",
      "Give each day one lead subject rather than combine every western Chengdu attraction",
    ],
    arrival:
      "Start with the actual Chengdu hotel, ticketed station or airport and the precise Chongzhou destination. Chengdu Tianfu and Shuangliu airports are distinct road journeys. A rail option needs a dated service and a final transfer to the correct village or room. If continuing after a workshop, protect the whole onward connection and leave time to pack the work. Keep a named host appointment away from an uncertain flight arrival.",
    gettingAround:
      "Plan the road sequence between the exact workshop, lunch, walk and hotel. A car can simplify the outing but cannot drive into every lane, courtyard or public garden. Agree walking, pickup, toilets and a comfortable seated break. For specialist craft interests, arrange interpretation rather than expect the driver to explain materials and technique. Avoid repeatedly crossing between the center, Daoming and Jiezi merely to fill an itinerary.",
    stayStrategy:
      "Stay two nights when the room, local evening and full day genuinely improve the experience. Keep a Chengdu base for a short focused outing. A rural property should work in rain as well as sunshine: assess indoor space, meals, temperature, sound and what children can comfortably do. Premium value comes from a useful host, good explanation, an appropriate pace and a room that lets guests sleep well. Special access is a separately evidenced arrangement, not a property style.",
    firstTimerNote:
      "Tell the planner whether you want to watch an artisan work, learn a simple technique or choose a finished piece. Those lead to different hosts and schedules. Then decide whether Jiezi, a garden or the room deserves the remaining time. Chongzhou works best as a deliberate change of pace from Chengdu, not a checklist of everything that can be pinned west of the city.",
    faqs: [
      {
        question: "Is Chongzhou worth visiting from Chengdu?",
        answer:
          "Yes, when bamboo craft, an old-town walk, a historic garden or a rural stay is a real interest. Choose one main subject for a day trip. If the plan is only a few photographs without a meaningful visit or useful room, moving out of Chengdu may add little.",
      },
      {
        question: "Can I take a bamboo-weaving class in Daoming?",
        answer:
          "Treat it as a service to confirm with a specific host. Agree the task, language, duration, materials, age suitability and take-home work. A village visit, demonstration or bamboo-themed building does not automatically include a practical lesson.",
      },
      {
        question: "Should I visit Daoming or Jiezi old town?",
        answer:
          "Choose Daoming for an arranged bamboo-craft interest and Jiezi for old-town lanes, river time and a meal. They are separate road stops. A short day should prioritize the stronger interest instead of promise equal depth at both.",
      },
      {
        question: "How many nights should I stay in Chongzhou?",
        answer:
          "A focused day trip is often enough for one subject. Two nights give one full countryside day and useful hotel time. One night depends on the real arrival and departure hours; three need a stronger craft, leisure or accommodation purpose.",
      },
      {
        question: "Is Chongzhou suitable for families?",
        answer:
          "It can be when the craft task, tools, sitting time, meals and room suit the children's ages. Confirm a simple activity rather than assume an adult workshop adapts automatically. Include toilets, rest and safe public walking, and respect working fields and household boundaries.",
      },
      {
        question: "Can I combine Chongzhou with Qingcheng Mountain?",
        answer:
          "Consider it as a separate route and physical day with the exact hotel transfers assessed. A substantive craft session and a full mountain visit both need time. An existing Qingcheng retreat does not automatically include Chongzhou or establish its workshop services.",
      },
      {
        question: "Does a private Chongzhou visit require buying craft products?",
        answer:
          "Purchases should be optional unless a specific material or object is explicitly part of the agreed service. Teaching, hosting and shopping are different costs. Ask about provenance, shipping and materials when buying rather than assume every item in a craft village was made by the person you meet.",
      },
    ],
    culturalStory: {
      title: "Read the craft through material and technique",
      paragraphs: [
        "Daoming's bamboo-weaving interest is strongest when the material becomes understandable. Look at the width and flexibility of a strip, how a pattern repeats, how the maker changes tension and how a rim is finished. These small decisions explain skill more clearly than a claim that every object is an ancient masterpiece. A short class can focus on one prepared task while a demonstration shows more demanding stages safely.",
        "Tradition also includes adaptation, contemporary design and ordinary household use. Distinguish the maker's own work, items brought in for sale and a visitor exercise. Ask before photographing people or entering a working room, and let the host explain which stages are practical that day. Thoughtful interpretation gives the visit depth without requiring an exclusive encounter or turning someone's working life into a staged performance.",
      ],
    },
    foodStory: {
      title: "Let a regional lunch support the countryside day",
      paragraphs: [
        "A Sichuan meal can provide a relaxed pause after close handwork or a lane walk. Ask for a balanced selection of vegetables, a suitable main dish and the amount of chili and numbing pepper you enjoy. Farm-style dining is a format to assess, not a guarantee that every ingredient was grown beside the table. A good host can explain the cooking and ingredients without turning lunch into a compulsory oversized tasting menu.",
        "Check stocks, pork, wheat, soy, sesame and shared preparation where relevant. A vegetable dish or a mild request does not establish vegetarian, allergy, coeliac or halal suitability. Serious needs require a particular kitchen's confirmed capacity and an alternative. At a rural property, review breakfast and dinner as carefully as the bedroom; a pleasant courtyard does not help if the only suitable meal requires an unexpected late road trip.",
      ],
    },
    itinerary: [
      {
        day: "Day-trip option / departure from Chengdu",
        title: "Give one craft or old-town subject time",
        description:
          "Reach a confirmed Daoming host for the agreed format, or choose a Jiezi-led visit. Allow a proper lunch and one nearby complement if useful. Return to the actual Chengdu hotel with the complete road planned; this is a selective day, not every Chongzhou interest.",
      },
      {
        day: "Two-night option / arrival",
        title: "Settle into a room worth staying for",
        description:
          "Travel to the named property, check the facilities and enjoy a modest local walk or garden visit if hours suit. Keep an essential host appointment away from an uncertain arrival. Eat locally and let the evening be part of the reason to stay.",
      },
      {
        day: "Full local day",
        title: "Learn, eat and explore at a comfortable pace",
        description:
          "Give the actual workshop its time, including introduction, practice and questions. Follow with lunch and a selected local route. Choose the order around the host and weather. Do not automatically add a distant mountain, a second town and another craft sales stop.",
      },
      {
        day: "Departure / onward route",
        title: "Leave with the connection protected",
        description:
          "Allow breakfast, bags and the complete road to the next hotel or ticketed gateway. This outline is illustrative, not a published package or a guarantee of hosts, rooms, classes, private access, flowering or current activities.",
      },
    ],
  },
};
