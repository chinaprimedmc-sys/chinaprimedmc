import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xining.svg",
  alt: "Xining planning schematic distinguishing a city introduction, a separate Kumbum Monastery visit and a higher Qinghai Lake chapter; not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const xiningGuide: ExpandedDestination = {
  id: "xining",
  name: "Xining",
  region: "northwest",
  kicker: "A city worth understanding before the plateau journey begins",
  description:
    "Give Qinghai's capital time for regional history, Tibetan Buddhist and Muslim heritage, and a well-paced introduction before a separately planned Qinghai Lake or wider plateau journey.",
  stay: "2–3 city nights; longer with the lake",
  bestFor: "Regional history, religious heritage and a considered plateau introduction",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "yushu",
    "mangya",
    "tongren-qinghai",
    "qilian",
    "xiahe",
    "lhasa",
    "yining",
    "qinghai-lake",
    "zhangye",
    "xian",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xining Travel Guide: Monasteries, Food & Where to Stay",
    seoTitle: "Xining Travel Guide: Culture, Food & Where to Stay",
    seoDescription:
      "Plan two or three nights in Xining with Kumbum Monastery, museum and hotel choices, regional food, altitude context and a separate Qinghai Lake chapter.",
    answer:
      "Xining (西宁) is the capital of Qinghai in northwest China, at roughly 2,300 meters above sea level. It is a city with its own history, food and religious communities, not simply an airport for Qinghai Lake. A selected museum visit, the Dongguan Mosque area and Kumbum Monastery offer different perspectives on the region. Kumbum, also called Ta'er Monastery, is in Huangzhong outside the central city; Qinghai Lake is a separate, higher destination. Start with a comfortable city base and a modest first-day plan before deciding how much road travel and altitude to add.",
    stayAnswer:
      "Two city nights usually give one full day for a focused introduction. Three nights leave room for a museum-and-neighborhood day and a separate Kumbum visit at an easier pace. Count lake travel and any lakeside nights separately; they should not silently replace the days you expected to spend in the city. Time in Xining may be useful before going higher, but a particular number of nights does not guarantee acclimatization or make a later ascent suitable for every traveler.",
    hotelAnswer:
      "Compare a well-located central hotel for meals and selected city visits with a property chosen primarily for room comfort, quietness and straightforward pickup. The Dongguan area can suit a specific neighborhood interest, but verify the street, access and room noise. A station-oriented or airport hotel serves a transport purpose rather than the same city experience. Check cooling or heating, bedding, breakfast and non-smoking arrangements. A room sold with oxygen equipment is not evidence of medical supervision or a reason to disregard altitude symptoms.",
    sightseeingQuestion: "How should you combine Kumbum Monastery and Xining's city sights?",
    sightseeingAnswer:
      "Treat Kumbum as a separate cultural outing with its road journey, walking and visitor arrangements allowed. Give a city day to a selected collection and neighborhood rather than trying to complete every religious and museum stop before a long drive to the lake. The Qinghai Provincial Museum and the Qinghai Tibetan Culture Museum are separate institutions with different collections and locations. Choose by your interest and current exhibitions. At Dongguan Mosque, public viewing, prayer, religious participation and interior access are different matters; a guided city visit does not promise access to every space.",
    visitorResources: [
      {
        label: "Xining municipal government",
        href: "https://www.xining.gov.cn/",
        scope:
          "Municipal public information, mainly in Chinese. Use the relevant institution for current museum exhibitions, monastery visitor arrangements, mosque access and local notices. City background is not evidence that a particular religious space, collection or hotel service is available on your dates.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Confirm the ticketed station, date and service, including any onward route. A rail journey to Xining does not establish suitable acclimatization or include the final city or lakeside road transfer.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General travel-health background on altitude and ascent. It does not assess an individual traveler or certify this itinerary as suitable. Discuss personal health and ascent plans with a qualified clinician; hotel equipment and private guiding are not medical care.",
      },
    ],
    serviceScope:
      "A tailored Xining proposal can identify the hotel and room, exact airport or station pickup, selected museum, Kumbum outing, guide hours and meals. Specify any onward lake transfer separately. Specialist interpretation, access beyond public visitor areas and religious or cultural hosts require their own confirmation. Halal dining, prayer timing and other dietary needs should be discussed in detail rather than inferred from the city's Muslim communities. Share relevant mobility and altitude concerns before choosing the higher chapters; transport and guiding do not provide medical clearance.",
    routeAdvice:
      "Xining can introduce Qinghai before a selected lake stay or connect with a wider Gansu route when the transport, altitude profile and available nights make sense. Zhangye and Xi'an offer different cultural and landscape chapters, not nearby excursions. No matching published Xining product is recommended here. Use the illustrative city outline to request a tailored plan that gives Xining its own time, separates the lake services and explains every substantial transfer rather than selling an undifferentiated northwest loop.",
    practicalPlanning: {
      timing:
        "Keep arrival unhurried, with a straightforward meal and little scheduled exertion. On a full city day, pair one collection with a neighborhood interest and seated breaks. Give Kumbum its own practical road-and-walking window. Museum reservations, closures and prayer or religious schedules can affect the sequence; choose alternatives before combining a fixed visit with an onward train. A late train arrival is not an extra usable sightseeing day.",
      walking:
        "Altitude can make ordinary walking feel different, while monastery thresholds, steps and standing add their own demands. Agree a shorter route, resting points and a comfortable pace rather than a full-site checklist. Museum galleries may also involve prolonged walking. A private car helps between places but cannot necessarily reach every entrance or remove stairs. Do not dismiss new or worsening symptoms as a normal part of sightseeing; pause the ascent and obtain appropriate medical assessment.",
      cost: "Compare the room category, breakfasts, complete transfers, guiding language and named admissions. A city day and a monastery outing have different vehicle requirements; lake travel adds another service day and possibly accommodation. Clarify specialist interpretation, prayer-aware meal planning and any supplementary services. A premium should buy better rest, useful explanation and realistic timing, not a claim that an oxygen-equipped room makes altitude risk disappear.",
    },
    attractions: [
      "Kumbum / Ta'er Monastery in Huangzhong, as a separate city-outskirts outing",
      "The Dongguan Mosque neighborhood with current access and religious practice respected",
      "Qinghai Provincial Museum, chosen for current collections and exhibitions",
      "Qinghai Tibetan Culture Museum, a separate museum option",
      "A selected regional food or market interest with dietary needs discussed",
      "Qinghai Lake as a separately planned higher-altitude chapter",
    ],
    stays: [
      {
        label: "1 night: a transport stop with limited expectations",
        advice:
          "An overnight can be practical between connections, but it is not a meaningful city introduction or proof of acclimatization. Keep any outing modest and allow rest. Do not attach Kumbum, several collections and a lake excursion to the hours around two transport bookings.",
      },
      {
        label: "2 nights: one focused full day",
        advice:
          "Choose a museum-and-neighborhood introduction or a well-paced monastery interest. Fit the plan to arrival, energy and visitor arrangements. If the lake is the main reason to travel, keep its road journey and higher elevation visible rather than advertising the same nights as both city time and a complete lake visit.",
      },
      {
        label: "3 city nights: context before a separate landscape chapter",
        advice:
          "Two full days allow city history and a separate Kumbum outing, with rest between subjects. This can be a useful starting point for a considered regional trip, but individual altitude suitability still needs review. Add the lake or other high areas only when the whole route is appropriate and there is enough usable time.",
      },
    ],
    hotelAreas: [
      {
        name: "Central city, chosen by exact address",
        advice:
          "A starting point for varied meals, road pickup and selected city interests. Compare quietness, room condition, climate control and the route to places you will use. Central does not mean every museum or religious site is walkable from the hotel. A dependable room and easy first evening are valuable before a more demanding road chapter.",
      },
      {
        name: "Dongguan-area neighborhood stay",
        advice:
          "Consider when the neighborhood and nearby dining are a genuine interest. Check street activity, car access, room position and whether a quieter alternative better suits your sleep. Proximity to a mosque does not establish admission to religious spaces or that every nearby restaurant meets a guest's specific halal or dietary requirements.",
      },
      {
        name: "A modern hotel selected for comfort and pickup",
        advice:
          "Useful when the room, breakfast, quietness and vehicle access matter more than immediate neighborhood atmosphere. Review the actual journey to city visits rather than choosing by brand alone. Confirm the booked category and services. Do not treat an altitude-related marketing claim or oxygen amenity as medical support.",
      },
      {
        name: "Station or airport-oriented accommodation",
        advice:
          "Use for a particular departure or connection, with the full transfer reviewed. Xining Caojiabao Airport, code XNN, is outside the city center; an airport address is not another central-city base. A station hotel can be practical without offering the city stay described elsewhere in this guide.",
      },
    ],
    tradeoffs: [
      {
        title: "Xining is lower than the lake, but is not sea level",
        advice:
          "The city sits at roughly 2,300 meters, while Qinghai Lake's surface is around 3,200 meters and some road routes go higher. Check daytime high points and sleeping elevations rather than only the altitude of the starting hotel. Fitness, luxury accommodation or arriving by train does not guarantee protection from altitude illness. Discuss individual suitability with a qualified clinician and keep the route flexible; a prepaid excursion is not a reason to continue higher when symptoms require attention.",
      },
      {
        title: "Kumbum is a living monastery, not simply a collection of photo rooms",
        advice:
          "Allow time for context, courtyards and the selected visitor route without assuming every hall, artwork or religious activity can be entered or photographed. Butter sculpture, religious art and monastic practice are distinct subjects that benefit from an informed guide. Confirm current visitor arrangements and dress respectfully. A private tour does not give access to rituals, monks' living areas or spaces closed to visitors.",
      },
      {
        title: "Choose a museum for its subject, not for the biggest collection claim",
        advice:
          "The provincial museum and the Tibetan culture museum are different choices. Ask which collections are accessible, how they serve your interest and whether suitable interpretation is available. A major textile or artwork may require particular visitor arrangements or may not be accessible in the way a photograph suggests. One well-explained visit with time to look can be better than two rushed collections followed by a long monastery drive.",
      },
      {
        title: "Religious heritage and Muslim-friendly service are related, not interchangeable",
        advice:
          "Seeing the Dongguan neighborhood can add context to Xining's Muslim heritage. A guest needing halal meals or prayer-aware scheduling also needs specific restaurants, preparation questions and timing addressed. Do not infer those arrangements from a neighborhood name or a generic Muslim-friendly label. Keep visitors' curiosity and worshippers' use of religious spaces respectful, with photography and interior access checked at the site.",
      },
      {
        title: "A Qinghai-to-Gansu road journey is a landscape day, not a short connection",
        advice:
          "Routes toward the Qilian Mountains and Zhangye can involve long driving, higher sections and seasonal conditions. Compare road travel with an available rail or flight sequence and the experience you actually want. Do not schedule numerous photo stops and a fixed late attraction as if the transfer were a spare interval. The route's highest point, overnight base and contingency deserve the same attention as the destination names.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yushu",
        advice:
          "Yushu offers a separate, higher city stay around Jiegu Monastery, the Gyanak Mani stones and selected religious-memory subjects. Review the complete transport, overnight profile, actual room and modest arrival before combining it with northeastern Qinghai. Shared cultural interests do not make it a local excursion or guarantee readiness for the higher stay.",
      },
      {
        slug: "mangya",
        advice:
          "Mangya adds a distinct western Qaidam landscape decision: its own Emerald Lake, Aiken Spring and a Huatugou base. Compare the complete road stages, overnight elevations and actual rooms before adding it. It is not a local excursion, and the guide separates ground views from aerial imagery and any Lenghu extension.",
      },
      {
        slug: "tongren-qinghai",
        advice:
          "Tongren in Qinghai adds a focused Regong art chapter, distinct from Guizhou Tongren. Give thangka interpretation and selected Wutun or Rongwo visits a useful full day, with a dependable town room and the complete road reviewed. An art host, class and purchase appointment are separate arrangements.",
      },
      {
        slug: "qilian",
        advice:
          "Qilian County adds a distinct mountain chapter centered on Babao, Zhuo’er Mountain and a considered Arou Monastery visit. Count the full road, higher sections and useful local nights before continuing toward Zhangye. It is not the whole Qilian range, and Menyuan flowering fields or grassland riding need separate decisions.",
      },
      {
        slug: "xiahe",
        advice:
          "Xiahe adds Labrang Monastery and a distinct Gannan setting. Review the actual road journey, sleeping elevations, useful nights and current local access. Kumbum and Labrang deserve different explanations rather than a repeated generic temple circuit.",
      },
      {
        slug: "lhasa",
        advice:
          "Lhasa is in Tibet Autonomous Region, with separate organized travel arrangements and authorization beyond a Qinghai visit. A Xining stop or onward train does not guarantee acclimatization. Review the actual transport, sleeping elevations, health needs and confirmed city reservations rather than treating a rail ticket as a complete Tibet itinerary.",
      },
      {
        slug: "yining",
        advice:
          "Yining introduces a different northern Xinjiang city and the wider Ili valley. Select actual neighborhood and landscape chapters with their own bases, transport and current access review. It is not a local Qinghai extension, and similar-sounding regional names should not replace full Chinese hotel and station addresses.",
      },
      {
        slug: "qinghai-lake",
        advice:
          "Choose a selected lake visit or overnight with the higher altitude, full road journey and room quality reviewed. The lake is not in Xining city, and returning to a lower city hotel does not erase the day's exposure to higher elevations. Keep the lake plan separate from the city's useful full days.",
      },
      {
        slug: "zhangye",
        advice:
          "Zhangye adds Danxia geology and a Gansu city chapter. A scenic crossing can be a major day with higher roads; an available rail route creates different transfers. Choose the connection by altitude, comfort, season and time rather than assuming a northwest regional label makes it an easy drive.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an adds imperial-capital history before or after Qinghai. Compare the complete train or flight journey, both hotel transfers and a useful stay in each place. An overnight train or gradual-looking map line is not a medical guarantee of acclimatization for the next higher destination.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The warmer part of the year is a common starting point for combining city visits with the wider Qinghai landscape, but sun, wind and cool evenings still call for layers. Peak summer demand can affect rooms and roads. Spring and autumn bring greater variation and should be judged against the actual higher route, not only city conditions. Winter requires a separate review of roads, visitor arrangements and hotel comfort. A mild city afternoon does not predict the weather at a lake shore or mountain pass.",
    orientation:
      "Xining lies in Qinghai in northwest China, with its central neighborhoods, museums, Huangzhong's Kumbum Monastery and the airport in different locations. The province is geographically and operationally distinct from Tibet Autonomous Region; do not apply one area's travel arrangements to every other plateau destination. Any onward restricted area, Tibet journey or special route requires its own current eligibility and access checks. Qinghai Lake is another higher landscape chapter beyond the city, not the name of an urban park.",
    experiences: [
      "Understand the region through a selected collection and Xining's living city neighborhoods",
      "Give Kumbum Monastery an informed, respectful visit with walking and current access reviewed",
      "Enjoy a regional meal and an unhurried city base before deciding whether to travel higher",
    ],
    planningNotes: [
      "Plan around roughly 2,300 meters in Xining and a separate higher profile for lake and mountain routes",
      "Choose the museum, monastery and neighborhood sequence by interest and pace rather than a full checklist",
      "Confirm the exact gateway, room, meal needs and every substantial onward transfer before comparing proposals",
    ],
    arrival:
      "Xining Caojiabao Airport uses code XNN and is outside the central city. Xining railway station creates a different road transfer. Use the full ticket details, luggage and hotel address for pickup; do not assume airport and rail arrival are interchangeable service arrangements. Keep the first evening easy after a tiring connection. Reaching the city by train rather than plane does not establish that an individual is ready for a lake or mountain ascent the following morning.",
    gettingAround:
      "Plan city transfers and the Kumbum outing according to their different locations, with standing and walking kept realistic. Museum and religious-site visitor transport, where offered, has separate access rules. A hotel day does not need a driver and guide on standby when rest is the better plan. For the lake or a Gansu crossing, agree a complete road day, meal and stopping pattern, with an alternative if weather or the traveler's condition changes the route.",
    stayStrategy:
      "Start with two or three city nights in a comfortable room and a sensible first-day schedule. Prioritize quietness, bedding, temperature control, meals and pickup over a long facilities list. Choose any lakeside room separately for its real elevation, comfort and service rather than assuming city standards continue unchanged. A route can be impressive on paper while offering too little rest; protect useful nights and keep individual altitude suitability under review.",
    firstTimerNote:
      "Give Xining a reason to be in the journey beyond a departure point. A collection, a thoughtful Kumbum visit and a regional meal can make the later landscape more understandable. Equally, leave time unfilled when rest is needed. The quality of a plateau introduction comes from context and pace, not from proving how many sights can be reached before the first lake photograph.",
    faqs: [
      {
        question: "How many nights should I stay in Xining?",
        answer:
          "Two city nights give one full day for a focused introduction; three allow a city-and-museum day and a separate Kumbum outing. Add lake travel and lakeside nights separately. A fixed number of nights does not guarantee acclimatization or suitability for a higher route.",
      },
      {
        question: "What is Xining's altitude compared with Qinghai Lake?",
        answer:
          "Xining is roughly 2,300 meters above sea level; Qinghai Lake's surface is around 3,200 meters, and some roads go higher. Review daytime high points and sleeping elevations together. Fitness, a train journey or hotel oxygen equipment does not establish individual protection from altitude illness.",
      },
      {
        question: "Are Kumbum and Ta'er Monastery the same place?",
        answer:
          "Yes. Kumbum is also commonly called Ta'er Monastery. It is in Huangzhong outside central Xining, so allow a separate road-and-walking outing. Current access, religious activity and photography rules determine the visitor experience; a private tour does not open every hall.",
      },
      {
        question: "Which museum should I visit in Xining?",
        answer:
          "Compare the Qinghai Provincial Museum with the separate Qinghai Tibetan Culture Museum by subject, current exhibitions, accessible collections and available interpretation. One well-paced visit can be more useful than rushing both. Confirm any particular artwork or gallery before building the day around it.",
      },
      {
        question: "Can tourists enter Dongguan Mosque?",
        answer:
          "Check current visitor arrangements at the site and respect worshippers and prayer times. Neighborhood viewing, religious participation and access to interiors are different matters. A city tour does not promise entry to every religious space or permission to photograph people and prayer.",
      },
      {
        question: "Does staying in Xining prepare everyone for the plateau?",
        answer:
          "No fixed stay guarantees acclimatization. Review the full ascent and sleeping elevations with appropriate medical advice for personal circumstances. Rest, a comfortable hotel and a flexible route matter, but new or worsening symptoms should not be dismissed in order to continue to a prepaid higher excursion.",
      },
      {
        question: "Can I visit Qinghai Lake from Xining in a day?",
        answer:
          "A selected return outing can be considered when the full road day, altitude and visitor arrangements fit the traveler. It is not a short city excursion or a complete circuit of the lake. Compare that plan with an overnight whose room and higher sleeping elevation have been reviewed separately.",
      },
      {
        question: "Is Xining suitable for Muslim-friendly travel?",
        answer:
          "Its Muslim communities and regional food can support a meaningful visit, but services still need detail. Agree specific halal dining requirements, preparation questions, prayer timing and guide support. A mosque-area address or general Muslim-friendly description does not confirm every restaurant or service arrangement.",
      },
    ],
    culturalStory: {
      title: "Understand different traditions without reducing them to a single plateau story",
      paragraphs: [
        "Xining offers a valuable introduction to a region where Tibetan Buddhist, Muslim and other communities have distinct histories and contemporary lives. Kumbum's religious setting, Dongguan's neighborhood and a museum collection ask different questions. Good guiding explains the selected subject and avoids treating all plateau culture as one decorative backdrop. A few well-understood places can provide more context than a fast circuit of buildings identified only by religion.",
        "Living religious places are also places of use, with spaces and times that may not be available to visitors. Respect dress, photography and local instruction without assuming that paying for a private guide changes those boundaries. A scholarly conversation, religious participation or private host would need a specific arrangement. The value of a city introduction lies in clear explanation and attentive observation, not a promise of privileged access.",
      ],
    },
    foodStory: {
      title: "Let a regional meal be clear, comfortable and unhurried",
      paragraphs: [
        "Noodle dishes, lamb preparations, niangpi cold flour-based sheets and regional yogurt can provide different starting points for a Xining meal. Ask about the particular preparation rather than treating each name as one standardized dish. A yogurt serving is not automatically made from yak milk, and a cold noodle-style dish may contain sauces or accompaniments that matter for dietary needs. A small selection with a warm drink and seated rest can be a better first-evening plan than an ambitious food crawl.",
        "For guests requiring halal food, vegetarian dishes or allergy-aware preparation, agree the actual venue and questions to ask. Meat stocks, shared equipment, sauces and portion sizes deserve attention. Prayer-aware timing is a separate planning matter from ordering dinner. Tea, market browsing and a hosted cooking or food session also offer different levels of interaction; keep any special host optional until availability and the subject are clear.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the city and keep the evening easy",
        description:
          "Transfer from the ticketed airport or station to the booked room. Have a straightforward meal, rest and assess how the day feels rather than scheduling a full first-evening tour. Do not make a higher outing an automatic consequence of arriving on time.",
      },
      {
        day: "Full day 1",
        title: "A collection and a living neighborhood",
        description:
          "Choose a museum whose current collections fit your interest, then a selected neighborhood or regional meal at a modest pace. Respect any religious visitor arrangements. Keep seated breaks and an easy return available rather than filling every interval with another stop.",
      },
      {
        day: "Full day 2",
        title: "Kumbum with time for context",
        description:
          "Allow the separate road journey and an agreed monastery route with its thresholds, steps and current access. Use informed interpretation and leave room for rest. A different shorter plan should remain possible if conditions or the traveler's needs change.",
      },
      {
        day: "Departure or a separately planned lake chapter",
        title: "Choose the next elevation and journey deliberately",
        description:
          "Continue to the booked onward service, or begin a lake chapter only when its altitude, road day and room have been reviewed. This three-night city outline is illustrative, not a published product, medical assessment or promise of optional private access.",
      },
    ],
  },
};
