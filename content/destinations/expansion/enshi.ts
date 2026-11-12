import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/enshi.svg",
  alt: "Original Enshi planning schematic comparing a Grand Canyon walking day, a separately planned Hefeng Pingshan boat visit and city or mountain accommodation; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const enshiGuide: ExpandedDestination = {
  id: "enshi",
  name: "Enshi",
  region: "central",
  kicker: "Choose your canyon, then give it a proper day",
  description:
    "Compare Enshi Grand Canyon, Hefeng's Pingshan boat scenery and a city stay with Tujia cultural context, clear walking advice and realistic mountain transfers.",
  stay: "3–4 nights for two or three distinct local days",
  bestFor: "Karst scenery, regional food and thoughtful cultural interpretation",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["yichang", "wuhan", "zhangjiajie"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Enshi Travel Guide: Canyons, Culture & Stays",
    seoTitle: "Enshi Guide: Canyons, Culture & Stays",
    seoDescription:
      "Plan Enshi Grand Canyon, compare Hefeng Pingshan and choose city or mountain hotels. Get walking advice, a 3–4-night outline and onward Yichang planning.",
    answer:
      "Enshi (恩施), in western Hubei, suits travelers who want dramatic limestone scenery alongside regional food and a better understanding of Tujia culture. Enshi city is a gateway within the wider Enshi Tujia and Miao Autonomous Prefecture; it is not the location of every attraction carrying the Enshi name. Enshi Grand Canyon (恩施大峡谷) is primarily a substantial walking choice. Pingshan Canyon (屏山峡谷), in Hefeng County, is a separate journey associated with narrow water passages and boat views. Three nights give two full days; four allow another distinct subject or a less compressed pace. Choose the landscapes you actually want before deciding where to sleep.",
    stayAnswer:
      "Allow three nights for an arrival, one carefully selected Grand Canyon day, a separate cultural or less demanding day, and departure. Four nights provide three full days and can support a separately assessed Hefeng Pingshan excursion. Two nights suit one main landscape interest when arrival and departure work. A night near the Grand Canyon may reduce repeated road travel, but only makes sense with an adequate room and a coherent onward route. Do not add Pingshan, a Qingjiang boat trip and Luyuanping merely to fill a four-night list: they require different journeys and levels of effort.",
    hotelAnswer:
      "Choose an Enshi city hotel for restaurant choice, an easier arrival and a base for different directions. Choose a specific Grand Canyon-area property when the canyon is the main commitment and reducing that day's road travel matters. Consider a Hefeng or Pingshan-area night only for a route that genuinely benefits from it. Compare heating or cooling, bathroom, damp and noise, luggage access and dinner as carefully as the view. A mountain guesthouse, a city hotel with broad facilities and a secluded retreat offer different experiences; the word boutique does not establish the standard of the room.",
    sightseeingQuestion: "Enshi Grand Canyon or Pingshan Canyon: which should you choose?",
    sightseeingAnswer:
      "Choose Enshi Grand Canyon for limestone pillars, escarpments and an active day on established mountain paths. Qixingzhai (七星寨) and Yunlong Ground Fissure (云龙地缝) are different sections, so ask which are included and assess each route. Choose Pingshan in Hefeng for a separately planned narrow-canyon and boat experience, with its own approach walks, boarding and dated operating conditions. It is not a short boat add-on inside Enshi Grand Canyon. Neither a cableway nor a boat makes the whole visit step-free. With limited time, one well-chosen canyon is more rewarding than two hurried transfers.",
    visitorResources: [
      {
        label: "Enshi prefectural government",
        href: "https://www.enshi.gov.cn/",
        scope:
          "Regional background and public notices. Confirm the specific scenic area, current route, tickets, visitor transport and weather-related operation with its actual operator before booking.",
      },
      {
        label: "UNESCO: Tusi Sites",
        href: "https://whc.unesco.org/en/list/1474/",
        scope:
          "World Heritage context for the serial Tusi Sites property, including Tangya in Xianfeng. This does not make the modern Enshi Tusi City attraction a component of that property or confirm current visitor access.",
      },
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated rail services and the exact stations. Add the complete station-to-hotel and hotel-to-attraction journeys before choosing arrival or departure times.",
      },
    ],
    serviceScope:
      "A useful Enshi proposal should identify the actual canyon sections, expected stairs and exposed paths, visitor transport, hotel rooms, guided language, meals and road-transfer hours. Tell us how long you comfortably walk, whether descending stairs or heights are a concern, and whether culture or a second landscape matters most. A hosted cultural visit, specialist interpreter, private boat or particular performance needs its own named arrangement. Private transport improves the journey between places; it cannot follow every mountain path or guarantee a scenic area remains open.",
    routeAdvice:
      "Yichang adds a different Hubei chapter: choose a Three Gorges Dam visit, a defined river outing or a separately booked multi-night Yangtze cruise. Wuhan adds major archaeological collections and river-city food. Zhangjiajie is worth combining only when you want another substantial mountain stay and have allowed the complete transfer. There is no matching published Enshi itinerary recommended here. Share dates, arrival city, room expectations and walking preferences so a tailored route can show what each day adds, with the hotel-to-hotel journey and inclusions clearly set out.",
    practicalPlanning: {
      timing:
        "Give the selected Grand Canyon route its own day, including the road, visitor transport, queues, lunch and descent. A city cultural afternoon is a useful contrast on another day. Treat Hefeng Pingshan as a separate excursion or overnight sequence after comparing the complete road and visiting time. Keep a fixed train or flight outside an ambitious canyon day. Agree which days can switch if weather affects the main outdoor visit.",
      walking:
        "Ask for the route through each included section, not just the total distance. Continuous stairs, steep descents, wet stone, narrow ledges and exposure can matter more than kilometers. Cableways and escalators, where operating and included, reduce particular sections rather than remove every step. Pingshan also involves land access and boarding. Travelers uncomfortable with heights or repeated stairs should choose a different day, not rely on being able to leave a one-way route halfway through.",
      cost: "Compare the actual scenic sections and admissions, visitor shuttles, cableway or other uphill/downhill transport, guiding, full vehicle hours, rooms and meals. A headline canyon ticket need not include every transport stage. For a boat experience, clarify whether it is shared, its route and the arrangements if operation changes. A premium stay should buy a better room, thoughtful interpretation and a more comfortable pace; it does not establish empty public paths, private cultural access or a particular color of water.",
    },
    attractions: [
      "Enshi Grand Canyon / 恩施大峡谷, with Qixingzhai and Yunlong sections assessed separately",
      "Hefeng Pingshan Canyon / 鹤峰屏山峡谷, as a separate road and boat plan",
      "Enshi Tusi City / 恩施土司城, interpreted as a modern cultural attraction",
      "Selected Enshi city meals and public cultural visits",
      "A specifically identified Qingjiang river excursion, when it fits the route",
      "Tangya Tusi archaeological site / 唐崖土司城址 in Xianfeng, for a separately researched historical interest",
    ],
    stays: [
      {
        label: "2 nights / one main landscape day",
        advice:
          "Use the full day for one assessed canyon route. Keep arrival and departure selective. This is an introduction, not a promise to see all of Enshi prefecture or add Hefeng and several cultural sites.",
      },
      {
        label: "3 nights / two contrasting days",
        advice:
          "Pair a canyon walking day with a city cultural visit, regional meal and time to recover. A less strenuous second day can improve the trip more than another early start for a distant landscape.",
      },
      {
        label: "4 nights / three full days",
        advice:
          "Add a separately assessed Pingshan trip, a defined river outing or a deeper cultural subject. Choose one clear addition and compare the road burden. Split hotel bases only when the useful time gained outweighs packing and checking in again.",
      },
    ],
    hotelAreas: [
      {
        name: "Enshi city: restaurants and a flexible regional base",
        advice:
          "A practical starting point for arrival, dinner and excursions in more than one direction. Check the actual address, road noise, vehicle access and transfer to the chosen canyon. A hotel described as near the station may serve a different purpose from one selected for a relaxed city evening.",
      },
      {
        name: "Grand Canyon surroundings: prioritize the mountain day",
        advice:
          "Useful when a verified property reduces an inconvenient return drive or supports a calmer morning. Compare the exact scenic entrance and the room's temperature control, hot water, bedding, sound insulation and meals. A view on a booking photograph is not evidence of an unobstructed view from your room.",
      },
      {
        name: "Hefeng or Pingshan direction: a separate route decision",
        advice:
          "Consider for a genuine Pingshan-focused sequence. Confirm the whole journey from the room to the visitor entrance, meals and onward transport. Being in the same prefecture does not make this an interchangeable base for the Grand Canyon or city sightseeing.",
      },
    ],
    tradeoffs: [
      {
        title: "One well-understood canyon can be enough",
        advice:
          "The Grand Canyon's high paths and Pingshan's water passages provide different perspectives, but a second gorge is not essential for every guest. Compare what you will see and do with the additional road time. For a mixed-interest couple, a cultural day and a comfortable afternoon may be the stronger choice.",
      },
      {
        title: "A modern Tusi attraction and Tangya are different historical visits",
        advice:
          "Enshi Tusi City is a modern visitor complex drawing on Tusi history and regional architecture. Tangya in Xianfeng is an archaeological component of UNESCO's Tusi Sites property and needs its own journey and interpretation. Do not use a photograph of one to sell the other, or describe the modern complex as an intact ancient UNESCO palace.",
      },
      {
        title: "A boat photograph does not define the complete day",
        advice:
          "Pingshan images often emphasize a small boat and clear water. The actual experience also includes the road, approach, boarding, other visitors and the current river conditions. Choose it for the canyon setting; no responsible plan can promise the same light, water clarity or empty composition as a promotional photograph.",
      },
      {
        title: "Luyuanping is a separate walking commitment",
        advice:
          "Luyuanping / 鹿院坪 is not another name for Pingshan, nor an automatic short extra after the Grand Canyon. Assess its approach, stairs, return route and available transport independently. Add it only for travelers who want that particular walking experience and have the time and stamina for it.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yichang",
        advice:
          "Pair Enshi's upland karst with Yichang's river and engineering interests. Check the exact train service and both road transfers, then protect a separate useful Yichang day or the booked cruise collection window. A train arrival does not place you at the dam or ship pier.",
      },
      {
        slug: "wuhan",
        advice:
          "Wuhan supplies a contrasting introduction to Hubei through archaeological collections, Hankou streets and breakfast culture. Allow proper city time and use the correct station. Choose whether to explore Wuhan or simply connect there; the two plans need different arrival margins and hotel choices.",
      },
      {
        slug: "zhangjiajie",
        advice:
          "Compare the value of two mountain regions with the full transfer and repeated walking demands. Give Zhangjiajie's sandstone landscapes their own base and full days. Published Zhangjiajie journeys do not automatically include Enshi; any extension needs a separate agreed scope.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are sensible starting points for a walking-led stay, with changeable mountain weather still part of the plan. Summer can be green, hot and humid, with heavy rain affecting routes or boats; winter needs assessment of cold, wet or icy surfaces and actual operations. Avoid judging a season only by a clear-water photograph. Check Chinese public holidays, the specific route and the current forecast, and preserve a worthwhile cultural or rest-day alternative.",
    orientation:
      "Enshi can mean the city or the much wider autonomous prefecture. The Grand Canyon lies outside the city, Pingshan is in Hefeng, and Tangya is in Xianfeng. Qingjiang / 清江 is a river name used across a wider area: an Enshi-area boat trip and a Changyang-area trip near Yichang are different bookings. Have the Chinese attraction name and actual entrance address written into the itinerary. A map label reading Enshi is not enough to estimate a day's driving.",
    experiences: [
      "Read Enshi Grand Canyon's limestone pillars and escarpments on a route matched to your comfort with steps and heights",
      "Choose a separate Hefeng Pingshan boat day only when its water-level perspective justifies the full journey",
      "Explore Tujia historical context and local food through named places and specific dishes, with contemporary community life respected",
    ],
    planningNotes: [
      "Name the canyon and included sections: Qixingzhai, Yunlong and Hefeng Pingshan are not interchangeable",
      "Assess descending stairs, exposed paths and remaining walking after any cableway before booking",
      "Choose city or mountain rooms using complete roads, meals and room comfort, with a usable weather alternative",
    ],
    arrival:
      "Enshi railway station and Enshi Xujiaping Airport are separate gateways. Check the dated service before deciding whether to arrive from Wuhan, Yichang or elsewhere, then add the whole journey to the booked hotel. A Grand Canyon-area room is not a city transfer, while Hefeng calls for another route. Keep the arrival day flexible unless the actual schedule leaves ample useful time. Have the final departure station or airport, luggage and pickup details settled before choosing the last night's location.",
    gettingAround:
      "A private vehicle can make regional travel more comfortable, especially with luggage or a split stay. Scenic-area shuttles, boats and mountain paths remain separate stages, so establish where your driver stops and where the guide accompanies you. Avoid a daily loop that crosses the same long road merely to keep one hotel. Equally, do not move hotels for a small theoretical saving if packing, luggage transfer and a weaker room cancel the benefit.",
    stayStrategy:
      "For three nights, a well-chosen city base can support one canyon day and a contrasting cultural day. For four nights, compare keeping that base with a purposeful mountain or Hefeng night. Price the actual room rather than a generic hotel category: quiet, temperature control, bathroom, breakfast, dinner and pickup matter after a long walking day. A rural setting is a reason to stay only when you have time to enjoy it and the room meets the group's needs.",
    firstTimerNote:
      "Start with your knees and interests, not a list of the most photographed places. Tell the planner how you manage sustained descents, heights and uneven wet surfaces. Then choose the main canyon, one contrasting subject and the right base. This produces a clearer, more enjoyable Enshi stay than buying several scenic names before finding out what each day involves.",
    faqs: [
      {
        question: "Is Enshi worth visiting on a first trip to China?",
        answer:
          "Yes for travelers who actively want limestone scenery, substantial outdoor time and a regional Hubei chapter. It needs useful local days and suitable walking routes. On a short first trip focused on Beijing, Xi'an and Shanghai, adding Enshi may create too much travel; compare the complete journey with the experiences you would remove.",
      },
      {
        question: "How many days do I need in Enshi?",
        answer:
          "Three nights give two full days, enough for a selected Grand Canyon route and a contrasting city or cultural day. Four nights give three days and can support a separately planned Pingshan trip. Two nights work for one main interest. Arrival hours, stair tolerance and the actual hotel locations determine the right pace.",
      },
      {
        question: "Is Pingshan Canyon inside Enshi Grand Canyon?",
        answer:
          "No. Pingshan Canyon is in Hefeng County and has its own road approach and visitor operation. Enshi Grand Canyon includes different mountain and ground-fissure sections, such as Qixingzhai and Yunlong. Ask for the Chinese attraction names, actual route and transport stages so a quotation is unambiguous.",
      },
      {
        question: "Can I visit Enshi Grand Canyon without much walking?",
        answer:
          "Do not assume that a cableway ticket makes the whole visit easy. The chosen route may still involve substantial stairs, descents and exposed paths. Ask for section-specific assessment and a genuinely suitable alternative if those demands are unsuitable. A shorter plan should be agreed before entering a route with limited exit choices.",
      },
      {
        question: "Should I stay in Enshi city or near the Grand Canyon?",
        answer:
          "City accommodation supports restaurants, arrival and excursions in different directions. A verified canyon-area room can reduce road travel for a mountain-focused stay. Compare the complete itinerary, room comfort, meals and pickup. Pingshan in Hefeng is a separate base decision, not another nearby Enshi city hotel zone.",
      },
      {
        question: "Is Enshi Tusi City a UNESCO World Heritage Site?",
        answer:
          "The modern Enshi Tusi City attraction is not the Tangya archaeological site. Tangya, in Xianfeng County, is a component of UNESCO's serial Tusi Sites property. They offer different kinds of interpretation and require different journeys. Specify which place you want to visit rather than treating their Tusi names as interchangeable.",
      },
      {
        question: "Can I combine Enshi with Yichang and a Yangtze cruise?",
        answer:
          "It can form a coherent mountain-and-river journey when the dated transport and cruise program align. Allow the full transfer to Yichang and the actual collection point or pier. Count cruise nights separately and keep a demanding canyon day away from a fixed embarkation deadline. No existing Enshi-inclusive cruise package is implied here.",
      },
      {
        question: "What should I eat in Enshi?",
        answer:
          "Ask about hezha, a soybean-based preparation often cooked with greens, and a balanced selection of local dishes, potatoes and seasonal vegetables. Recipes and additions vary, so ask about meat, stock, chili, soy and shared equipment. Smoked or cured pork is another regional interest where served; choose an actual preparation rather than an obligatory tasting platter.",
      },
    ],
    culturalStory: {
      title: "Understand Tusi history without confusing the places",
      paragraphs: [
        "Tusi refers to systems of hereditary local leadership operating within relationships with imperial authorities. It is a subject of administration, territory and community history, not simply a label for an ornate building. At the modern Enshi Tusi City attraction, ask how the architecture and displays interpret that history, which elements are reconstructions and what the objects actually demonstrate. Tangya's archaeological remains in Xianfeng answer a different historical question and belong to a separate itinerary.",
        "Tujia culture is also contemporary. Houses, language, food and performance have specific local contexts; people are not an attraction category. A public performance may be a worthwhile staged introduction when described honestly, while a museum or consent-based conversation can support a different level of inquiry. Daughters' City / Nü'ercheng is a commercial visitor setting, not evidence that every event is an unchanged village custom. Seek a clearly explained visit rather than a promise of an exclusive encounter with an entire community.",
      ],
    },
    foodStory: {
      title: "Hezha and a meal that fits the mountain day",
      paragraphs: [
        "Hezha / 合渣 offers a useful introduction to local home-style cooking: a soybean preparation associated with greens and a soft, substantial texture. Ask how the kitchen makes it and whether meat or other additions are included. A meal can combine it with potatoes, vegetables and a carefully chosen meat dish rather than several heavy or similarly seasoned specialties. After a long canyon walk, a seated meal at a practical hour often adds more enjoyment than another distant food stop.",
        "Cured or smoked pork can introduce another regional flavor, but preparation, saltiness and accompaniments vary. Order portions for the real group and discuss bones, chili and ingredients. Soy is central to hezha; a vegetable dish may contain meat stock or pork. Dietary requirements need a confirmed kitchen plan. Enshi Yulu / 恩施玉露 tea is another cultural interest, but a tea menu, retail tasting and an arranged producer visit are different experiences; clarify origin and the actual visit before building a day around it.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / night 1",
        title: "Settle into the city and choose the right walking route",
        description:
          "Transfer to the agreed hotel, have a regional meal and review the canyon sections with the guide. Keep an optional short city outing within real arrival hours. Confirm the next day's weather, shoes, lunch and any separate scenic transport.",
      },
      {
        day: "Full day 1 / night 2",
        title: "Give the selected Grand Canyon route a full day",
        description:
          "Follow the agreed sections, with time for limestone scenery, breaks and the complete descent. Choose Qixingzhai, Yunlong or a suitable assessed combination according to effort and operation. Return to a comfortable dinner rather than add another distant attraction.",
      },
      {
        day: "Full day 2 / night 3",
        title: "Change pace with culture and regional cooking",
        description:
          "Use a named city cultural visit, such as an interpreted modern Tusi City visit, with its historical status explained. Leave room for a proper meal and recovery. A special host, performance or tea appointment is included only if separately agreed, not assumed by this outline.",
      },
      {
        day: "Optional full day 3 / night 4",
        title: "Choose one genuinely different extension",
        description:
          "Add a separately assessed Hefeng Pingshan trip if the road, approach and boat conditions fit. Alternatively choose a defined river outing, a deeper cultural interest or a rest day. A Tangya archaeological excursion needs its own route assessment; this is a choice of additions, not a promise to include all of them.",
      },
      {
        day: "Departure",
        title: "Continue with the complete connection understood",
        description:
          "Transfer to the correct station, airport or next base. A Yichang stay or cruise follows its own hotel, collection and pier arrangements. This illustrative three- or four-night outline is not a published package and does not guarantee rooms, boats, weather, private access or any cultural appointment.",
      },
    ],
  },
};
