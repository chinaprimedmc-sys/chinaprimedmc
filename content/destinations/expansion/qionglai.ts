import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qionglai.svg",
  alt: "Original Qionglai planning schematic separating Pingle old town, tea visits, Tiantai Mountain and kiln heritage; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const qionglaiGuide: ExpandedDestination = {
  id: "qionglai",
  name: "Qionglai",
  region: "southwest",
  kicker: "Tea, river-town time and a quieter side of the Chengdu region",
  description:
    "Plan Qionglai around Pingle old town, an actual tea host, Tiantai Mountain or Qiong kiln heritage, with useful advice on hotel bases and a slower Sichuan stay.",
  stay: "A focused day trip or 2–3 nights",
  bestFor: "Tea and ceramics interests, river-town evenings and gentle rural time",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["chengdu", "chongzhou", "leshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qionglai Travel Guide: Pingle, Tea & Where to Stay",
    seoTitle: "Qionglai Guide: Pingle, Tea & Rural Stays",
    seoDescription:
      "Plan Qionglai near Chengdu: compare Pingle old town, tea visits, Tiantai Mountain, Qiong kiln heritage, rural hotels and focused day trips or longer stays.",
    answer:
      "Qionglai (邛崃) is a county-level city administered by Chengdu, southwest of the central city in Sichuan. It offers distinct travel interests: Pingle old town beside the Baimo River, tea-growing countryside, Tiantai Mountain's forest landscape and Qiong kiln ceramic heritage. They are separate visits, not one compact attraction. Choose one main subject for a day trip from Chengdu. Two nights give a complete day and useful local hours; three can separate a town or tea day from a substantial mountain interest. A worthwhile stay depends on the actual host, route and room, rather than a promise that every village provides private tea picking or every old lane is unchanged.",
    stayAnswer:
      "A day trip can suit a focused Pingle visit, a confirmed tea session or a selected city-and-ceramics interest. Two nights create one full day without packing and can justify a quieter evening or early walk. Three nights allow two distinct days, for example tea and town interests followed by an assessed Tiantai route. One night is useful only when arrival and departure leave real time. A longer stay needs an enjoyable room and specific interests; it should not consist of repeated transfers between every place carrying a Qionglai label.",
    hotelAnswer:
      "Compare a Qionglai center or Linqiong-area hotel for urban services and heritage interests, a specific Pingle room for town hours, and a rural or mountain property for the activity it actually serves. A Pingle base is not automatically at the Tiantai visitor entrance or beside the chosen tea host. Confirm sound insulation, temperature control, bathroom, bedding, meals and vehicle approach. A river-view room needs its own noise and safety review. If one short visit is enough, keeping a Chengdu hotel can be more comfortable than moving for a single night.",
    sightseeingQuestion:
      "Should I choose Pingle, a tea visit, Tiantai Mountain or Qiong kiln heritage?",
    sightseeingAnswer:
      "Choose Pingle for a selected river-town walk and meal, ideally with time beyond a brief photo stop. Choose tea for a confirmed host and a defined tasting, growing or processing subject. Choose Tiantai Mountain for an actual forest route suited to the weather and walking ability. Choose Qiong kiln heritage for archaeological and ceramic interpretation through currently accessible displays or visitor areas. A short visit should have one lead subject. A tea-growing landscape does not establish a class, and a historic kiln site does not automatically offer working pottery lessons.",
    visitorResources: [
      {
        label: "Qionglai municipal government",
        href: "https://www.qionglai.gov.cn/",
        scope:
          "Local historical context and dated notices, primarily in Chinese. Verify current public access to gardens, displays, kiln-related areas and mountain routes with the responsible site. Municipal tourism information does not confirm a particular tea host, workshop, room or activity.",
      },
      {
        label: "Chengdu municipal government",
        href: "https://www.chengdu.gov.cn/",
        scope:
          "Wider regional information. Being within the Chengdu administrative area does not mean Qionglai's center, Pingle, a tea property, Tiantai Mountain and central Chengdu share one short transfer or one operating arrangement.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and actual station names. A Qionglai rail arrival requires an onward road to the selected room, village or visitor entrance. Compare the whole journey with a direct hotel pickup before choosing transport.",
      },
    ],
    serviceScope:
      "A proposal should name the tea host or public venue, visit format, language or interpreter, room, transfers, guiding, admissions and meals. Separate tasting from picking, processing, teaching and shopping. Explain the mountain route, remaining steps and transport rather than promise a generic easy hike. A pottery activity needs its own working venue and material, firing and delivery arrangements. Private guiding does not authorize excavations, farm work, private homes or closed trails. Agree a useful alternative to an unavailable host or weather-dependent outing.",
    routeAdvice:
      "Qionglai can provide a slower rural and cultural chapter after Chengdu's city and panda interests. Chongzhou offers a different craft direction through Daoming bamboo weaving; comparing the two may be more useful than visiting both hurriedly. Leshan adds a distinct Giant Buddha and river chapter with its own transport and visitor choices. No matching published Qionglai tour is recommended here. Share dates, the actual Chengdu base, tea or ceramics interests, walking limits and room priorities to shape a tailored outing or stay.",
    practicalPlanning: {
      timing:
        "Schedule a named tea host or principal site first, then place lunch and a nearby walk around it. Tasting and explanation need time without pressure to buy. Picking and processing depend on the actual crop and work taking place. A Tiantai day requires its own entrance, transport, walking and return plan. Avoid placing a fixed flight or train immediately after a substantial mountain outing. Local evenings should be useful, not just late check-ins after collecting too many stops.",
      walking:
        "Pingle lanes, bridge approaches, riverside edges and wet paving require attention even on a town day. A tea garden can involve slopes, uneven ground and work paths rather than a landscaped visitor walkway. Tiantai's actual forest route may include steps and slippery sections; assess it separately from a town stroll. Agree footwear, seats, toilets, turn-back options and vehicle approach. A rural hotel and a river-facing room need their own stair and luggage review.",
      cost: "Compare the complete Chengdu return or onward journey, room and meals, interpretation, host time, tasting materials, admissions and any required internal transport. A specialist tea session and a retail tasting are different services. Buying tea or ceramics should be optional unless an agreed item is explicitly part of the booking. Shipping, firing and delivery can be separate. Pay for useful explanation, suitable pacing and a comfortable base rather than an unsupported promise of exclusive plantations or archaeological access.",
    },
    attractions: [
      "Pingle old town and a selected public Baimo River-side route",
      "A named tea-growing or tasting visit with format and language agreed",
      "Tiantai Mountain through an actually open route matched to the group",
      "Qiong kiln heritage through currently accessible interpretation or public visitor areas",
      "A selected Linqiong and city-history interest when it adds to the itinerary",
      "A comfortable rural meal and room with time to enjoy the setting",
    ],
    stays: [
      {
        label: "Day trip / one priority",
        advice:
          "Choose Pingle, a substantive tea visit or a defined ceramics interest, with a meal and one sensible complement. Compare the complete road from the actual Chengdu hotel. A full tea session and a substantial mountain route are not minor additions to the same short day.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Choose a base that supports the main interest and gives useful evening or morning hours. A confirmed host visit and a selective town walk can provide enough depth without repeated packing. Judge the room and food as part of the experience, not merely somewhere to sleep between transfers.",
      },
      {
        label: "3 nights / two distinct days",
        advice:
          "Separate town and tea interests from an assessed forest or ceramics day. Recheck whether each route still works from one base. Extra nights should improve depth, comfort and weather flexibility, not create an obligation to complete every named site.",
      },
    ],
    hotelAreas: [
      {
        name: "Qionglai center / Linqiong and practical services",
        advice:
          "Consider for a city-history or ceramics-led plan, dining and convenient services. Compare exact venue and room locations. Pingle, tea countryside and mountain visitor areas remain separate roads; a central address is not automatically the best rural base.",
      },
      {
        name: "Pingle area / river-town hours",
        advice:
          "Choose for an evening and morning you intend to use. Check lane, restaurant and riverside noise, room humidity, cooling or heating, bathroom and where vehicles stop. A historic-town address does not establish an original historic building, quiet riverfront or boutique service standard.",
      },
      {
        name: "A named tea-country property / host and room together",
        advice:
          "A rural room can be rewarding when the actual host, dining, road and weather plan fit. Confirm whether tea activities are on site, nearby or separately arranged. Check who teaches, language, seasonal content and what guests can do when farming or rain changes the plan.",
      },
      {
        name: "Tiantai direction / a mountain-led stay",
        advice:
          "Assess the property's real position against the chosen visitor route, not only a Tiantai label. Ask about temperature, damp, meals, bags and current road or internal transport. A wooded setting does not establish luxury facilities or effortless access to every path.",
      },
    ],
    tradeoffs: [
      {
        title: "Tea tasting is available on different terms from tea picking",
        advice:
          "A tasting can compare preparation and flavor with stored finished tea. Picking depends on the actual field, season, weather and permission; processing follows real production rather than a visitor timetable. Agree the main learning objective and a worthwhile alternative if there is no suitable crop or production that day.",
      },
      {
        title: "Ask better questions than whether a tea is the best",
        advice:
          "Compare leaf appearance, aroma, water and repeated infusions, with origin and processing explained for the particular tea. Price, a famous regional name and a ceremonial presentation do not establish quality by themselves. A good host lets guests learn and ask questions without making a purchase the condition of hospitality.",
      },
      {
        title: "Pingle rewards selected local time, not an ancient-town checklist",
        advice:
          "Give the relationship between lanes, river, bridges and present-day commerce some attention. Distinguish historic associations, repairs and modern visitor businesses rather than date the entire streetscape to one era. A quieter hour may help the visit, but empty lanes and an unchanged historic scene are not guaranteed.",
      },
      {
        title: "Tiantai is a different day from riverside wandering",
        advice:
          "Name the public route, entrance, transport and return before judging physical effort. Forest shade does not remove steps, rain or slippery ground. Seasonal firefly or water-related marketing is not proof of an operating activity or a guaranteed sighting; research the actual experience separately.",
      },
      {
        title: "Qiong kiln history is not a pottery workshop reservation",
        advice:
          "Archaeological remains and museum interpretation explain historic production; a modern studio offers another kind of experience. Distinguish an original kiln, excavated material, reconstruction and contemporary work. If guests want to make something, confirm the separate teacher, material, firing and delivery rather than promise a finished ceramic object during a brief heritage visit.",
      },
      {
        title: "Choose a rural stay for what it improves",
        advice:
          "An early walk, thoughtful tea session, good dinner and quiet sleep can justify moving out of Chengdu. A distant photogenic property with limited food and repeated long roads may not. High-end value comes from the complete experience, with named hosts and any special services confirmed separately.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "chengdu",
        advice:
          "Chengdu provides the city, food and panda chapter, with Qionglai as a focused day or rural extension. Use the actual urban hotel and gateway to assess transfers. Existing Chengdu itineraries do not automatically include Pingle, a Qionglai tea host or Tiantai Mountain.",
      },
      {
        slug: "chongzhou",
        advice:
          "Chongzhou offers Daoming bamboo weaving and its own town or rural choices. Compare the craft purpose with Qionglai's tea and ceramic interests before deciding whether both deserve time. Choose a confirmed host in each place and allow time for the connecting road; the two craft visits should add different insights.",
      },
      {
        slug: "leshan",
        advice:
          "Leshan adds the Giant Buddha and a different river landscape. Give its land or boat visit a separate decision and allow the complete connection. A full tea, Pingle or forest day should not be compressed to fit an uncertain same-day Buddha visit and onward departure.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for mixed town, countryside and forest time. The actual tea crop, production and host availability matter more than a generic spring-picking claim. Summer can be hot and wet, with mountain rain affecting paths and operation. Winter can feel damp and cold; room heating, hot water and meals become important. Flowering, harvest, fireflies and other seasonal subjects vary by year and location. Choose dates for the confirmed experience, with a worthwhile alternative when conditions change.",
    orientation:
      "Qionglai lies southwest of central Chengdu within its wider administrative area. The city center, Pingle, tea-country addresses and Tiantai Mountain occupy different parts of the route. The Qionglai city destination is also distinct from the much wider Qionglai mountain-range name. For a short stay, choose one main focus: the city, Pingle, tea country or Tiantai Mountain. Each involves a different balance of walking and road time. Use the precise Chinese property and venue addresses before drawing a practical itinerary from regional place names.",
    experiences: [
      "Explore Pingle's relationship between lanes, river and present-day town life",
      "Learn from a defined tea session or accessible Qiong kiln interpretation",
      "Give a suitable forest route or an enjoyable rural room time of its own",
    ],
    planningNotes: [
      "Choose the main subject before the room and road sequence",
      "Separate tea tasting, farm work, processing and purchases",
      "Assess Tiantai as a real mountain outing rather than an effortless town add-on",
    ],
    arrival:
      "Compare direct road pickup from the actual Chengdu hotel with a dated train and its final transfer. Chengdu Tianfu and Shuangliu airports are different journeys; neither should be reduced to a generic Chengdu pickup. A Qionglai station arrival does not place guests in Pingle or beside a mountain entrance. Keep a named host appointment away from uncertain flights, and allow bags, food and the whole onward road before a fixed departure.",
    gettingAround:
      "Use a deliberate sequence between the room, host, public site and meal. A private car can simplify the countryside day but does not replace interpretation or enter every lane, field or regulated scenic route. Mountain internal transport, where required, is a separate arrangement. Agree comfortable walking, seats, toilets and pickup. Avoid repeatedly returning across the area just to add another attraction name.",
    stayStrategy:
      "Two or three nights can support a slower stay when the room and full days deserve it. Keep a Chengdu base for a selective outing. Compare quiet, temperature, bathroom, meals and rainy-day comfort rather than a rural or heritage label alone. Guests interested in tea need useful explanation and a confirmed host; guests seeking rest need real unscheduled time. A high-end proposal should explain how those choices improve the trip instead of rely on the word private.",
    firstTimerNote:
      "Decide whether you want a river-town day, tea learning, ceramic history or a forest outing. They can combine with enough time, but they are not interchangeable activities in one compact park. Pick the strongest interest, then give the room, meal and next stop a sensible place around it. That usually creates a better trip than trying to finish every pin on a regional map.",
    faqs: [
      {
        question: "Is Qionglai worth visiting from Chengdu?",
        answer:
          "Yes, when Pingle, tea learning, kiln history or a rural stay is a genuine interest. Choose one main subject for a day trip. A longer stay needs a good room and useful local days rather than only extra transfers.",
      },
      {
        question: "How many nights should I stay in Qionglai?",
        answer:
          "Two nights give one full day and useful evening or morning hours; three allow two distinct days. A focused day trip can also work. One night depends on real arrival and departure times, while a mountain day needs its own complete route assessed.",
      },
      {
        question: "Can I pick tea near Qionglai?",
        answer:
          "Only with a suitable actual crop, permission, host and seasonal conditions. A tasting does not include picking or processing automatically. Agree the learning objective and an alternative before booking rather than promise farm work on every date.",
      },
      {
        question: "Should I stay in Pingle or Qionglai center?",
        answer:
          "Pingle can suit useful old-town evenings and mornings; the city center can suit heritage and practical services. A tea or mountain property serves another purpose. Compare precise room locations, noise, meals and complete roads to your chosen visits.",
      },
      {
        question: "Can I combine Pingle and Tiantai Mountain in one day?",
        answer:
          "Assess the actual route, walking, internal transport, meals and return before deciding. A brief town stop and a substantial mountain day are different commitments. With enough nights, separating them usually preserves more useful time and a less pressured pace.",
      },
      {
        question: "Does a Qiong kiln visit include pottery making?",
        answer:
          "No. Heritage interpretation and a working studio class are separate offers. A practical session needs a confirmed teacher, materials and a clear account of firing and delivery. Do not assume a short archaeological visit produces a finished take-home ceramic piece.",
      },
      {
        question: "Is Qionglai the same as the Qionglai Mountains?",
        answer:
          "No. Qionglai is a city destination in the wider Chengdu area; the mountain-range name refers to a much broader landscape. This guide covers selected city and local countryside interests, not every mountain route sharing the name.",
      },
    ],
    culturalStory: {
      title: "Two ways to understand materials and place",
      paragraphs: [
        "Tea and ceramics provide different ways to look beyond an old-town streetscape. In a tea session, notice the leaf, preparation, aroma and how flavor changes across infusions. With kiln heritage, look for the relationship between clay, glaze, firing and the material evidence on display. Useful interpretation explains what can actually be observed rather than turn every object or cup into a superlative claim.",
        "Pingle adds another layer through its river setting and present-day commercial life. Historic associations and modern visitor businesses can coexist without either being hidden. Ask what belongs to an earlier structure, later repair or contemporary presentation. A meaningful visit does not need a claim of unchanged ancient life, a private archaeological encounter or a tea host performing the same seasonal work for every guest.",
      ],
    },
    foodStory: {
      title: "A meal should make the day more comfortable",
      paragraphs: [
        "Use a seated Sichuan lunch to slow the pace between a host visit and a walk. Discuss chili and numbing pepper separately, choose portions that suit the group and ask which dishes the kitchen prepares well. Tea tasting deserves its own attention rather than being rushed into the end of a large meal. A farm-style restaurant is a dining choice, not proof that everything served was produced beside the table.",
        "Check stocks, pork, wheat, soy, sesame and shared preparation as relevant. Mild food is not automatically suitable for an allergy, coeliac requirement, vegetarian diet or halal need. Serious restrictions require the actual kitchen's confirmed capacity and an alternative. At a rural or mountain room, review dinner and breakfast before booking; attractive views do not compensate for unsuitable meals or an unexpected late road to eat.",
      ],
    },
    itinerary: [
      {
        day: "Day-trip option",
        title: "Choose one reason to leave Chengdu",
        description:
          "Make Pingle, a confirmed tea session or selected city-and-ceramics interpretation the lead subject. Allow lunch, questions and a nearby complement only when it improves the visit. Return to the actual Chengdu room with the whole road planned.",
      },
      {
        day: "Two- or three-night option / arrival",
        title: "Settle into the right base",
        description:
          "Reach the named property, eat and enjoy a modest local orientation if useful hours remain. Keep the essential host or mountain plan away from uncertain arrival. An evening should be part of the reason to stay, rather than only a late check-in.",
      },
      {
        day: "Full day 1",
        title: "Give tea, town or ceramics room to unfold",
        description:
          "Follow the actual booked subject with time for explanation and a comfortable meal. A host may combine a tasting with another appropriate learning activity, but picking and processing need their own confirmation. Keep purchases optional and the rest of the day selective.",
      },
      {
        day: "Full day 2 / for three nights",
        title: "Add a genuinely different day",
        description:
          "Choose an assessed Tiantai forest route or another substantial interest suited to the weather and guests. Alternatively, retain meaningful room and countryside time. Do not add a mountain merely to fill a free day without checking effort, operation and the full return.",
      },
      {
        day: "Departure",
        title: "Protect the complete onward connection",
        description:
          "Allow breakfast, luggage and the actual road to the next hotel or ticketed gateway. This outline is illustrative, not a published package or a guarantee of hosts, tea crops, kiln access, rooms, fireflies or current activities.",
      },
    ],
  },
};
