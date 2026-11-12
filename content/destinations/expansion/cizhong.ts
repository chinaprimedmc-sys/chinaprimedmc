import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/cizhong.svg",
  alt: "Original Cizhong planning schematic comparing a Lancang valley village stay with Feilaisi mountain viewing, church and wine interests, and complete road connections; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const cizhongGuide: ExpandedDestination = {
  id: "cizhong",
  name: "Cizhong",
  region: "southwest",
  kicker: "A quieter Yunnan chapter beside the Lancang River",
  description:
    "Explore Cizhong's Catholic church, vineyard traditions and Lancang valley setting. Decide whether a village stay adds depth to your northwest Yunnan journey.",
  stay: "2 nights for a full village day; 1 only with useful road-day hours",
  bestFor: "Religious history, village landscapes and a slower northwest Yunnan stay",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["yubeng", "deqin", "shangri-la", "lijiang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Cizhong Travel Guide: Church, Vineyards & Village Stays",
    seoTitle: "Cizhong Travel Guide: Church, Wine & Where to Stay",
    seoDescription:
      "Plan Cizhong in Yunnan's Lancang valley: church and vineyard interests, one or two nights, hotel checks and road connections with Shangri-La and Meili.",
    answer:
      "Cizhong offers a distinctive cultural stop in northwest Yunnan's Lancang River valley, with a Catholic church, grape-growing traditions and village life below the Meili mountain region. Two nights allow one full day without relying on the arrival drive for sightseeing. Choose it for religious history and an unhurried valley stay. Church visits must respect worship, while a vineyard tasting needs a confirmed host; neither is automatically included in a village walk.",
    stayAnswer:
      "Two nights work best when you want one unhurried full day for the village, church context and a separately agreed food or wine interest. One night can work within a coherent road journey if arrival leaves useful daylight; a late arrival followed by an early departure gives little experience of the village. Three nights suit guests who actively want time at the property, reading, landscape or another identified local interest. Cizhong is not a place where adding nights automatically adds a long list of sights.",
    hotelAnswer:
      "Choose a named village or valley property by the room you will actually use: quietness, bed, bathroom, heating or cooling, steps, meals and vehicle access. Ask whether a river or vineyard view is from the bedroom, a shared terrace or another part of the property. Check the final luggage route, dinner availability and breakfast before a road departure. A Cizhong address does not guarantee walking access to the church, and a boutique or lodge label does not establish a particular standard. If the right room is unavailable, reconsider the overnight rather than substitute a very different location without explaining it.",
    sightseeingQuestion: "Should I stay in Cizhong or near Meili Snow Mountain?",
    sightseeingAnswer:
      "Choose Cizhong for village history, the church, grape-growing traditions and a quieter river-valley stay. Choose Feilaisi for viewing the Meili range from a specifically located room or viewpoint. They are different settings, elevations and road journeys. Combining them needs a full transfer day assessment and a reason to enjoy each stop; Cizhong should not be sold as the same mountain panorama at a different hotel. Yubeng trekking is a third, separate decision.",
    visitorResources: [
      {
        label: "Deqin county government",
        href: "https://www.deqin.gov.cn/",
        scope:
          "County background and dated local notices, mainly in Chinese. Confirm Cizhong church visiting arrangements, current roads and the proposed village route with the responsible local contacts. A background entry does not establish access to worship, private homes or production spaces.",
      },
      {
        label: "Diqing Tibetan Autonomous Prefecture government",
        href: "https://www.diqing.gov.cn/",
        scope:
          "Regional context for Shangri-La and Deqin. Check the exact travel-date road sequence and applicable visitor arrangements. Administrative proximity does not establish a short transfer or a particular hotel service.",
      },
      {
        label: "China Meteorological Administration weather service",
        href: "https://weather.cma.cn/",
        scope:
          "Starting point for official forecasts and warnings. A county forecast cannot describe every valley road, slope or hotel approach; route decisions also need current local information.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the room, full road transfers, guide language, meals, selected public walking route and agreed church visit. For a hosted conversation or wine interest, identify the willing provider, purpose, duration and inclusions. Keep tasting fees and purchases clear and optional. A private guide does not confer private worship, a meeting with clergy, entry to a home or access to a commercial winery. The value of a well-planned stay is good interpretation, a comfortable base and time to understand the place.",
    routeAdvice:
      "Cizhong can add religious history and a slower valley stay to a northwest Yunnan journey. Share your dates, available nights and interest in church history, food or wine; we can assess a tailored extension alongside Feilaisi and the full Shangri-La connection. Confirm the room and any hosted visit before fixing the road sequence. The existing ten-day Yunnan tour ends in Shangri-La, so Cizhong accommodation, transport and visits would be separately specified.",
    practicalPlanning: {
      timing:
        "Give the road approach its own time, then preserve daylight for understanding the village and settling into the room. Plan church visiting around actual access and worship rather than a fixed sightseeing slot. A winery appointment, vineyard walk and seated tasting have different schedules; choose what is genuinely available. Keep onward flights or trains away from an uncertain mountain-road arrival and agree how the plan changes if a road or visit is unavailable.",
      walking:
        "A village visit can include uneven lanes, slopes, steps and standing, even when the distance looks short. Ask for the exact route, places to sit, shade and a shorter alternative. The valley stay is lower than Feilaisi, but that does not remove higher sections from the full road journey or establish medical suitability. Review every overnight and the route's high points, particularly when combining Shangri-La or Meili. River scenery is not an invitation to swim or walk along an unassessed bank.",
      cost: "Compare the actual room and meals, complete vehicle days, guide interpretation, any agreed host time and the precise tasting or visit. Distinguish a public village walk from a hosted appointment. State bottles, shipping and other purchases separately. A higher price should buy a better room, thoughtful pacing or clearly defined service, rather than an unsupported promise of rare wine, private church access or a celebrity winemaker.",
    },
    attractions: [
      "Cizhong Catholic Church / 茨中天主教堂, with current visitor access checked",
      "A public village walk interpreting the church's setting and contemporary community",
      "The Lancang River valley landscape from an appropriate public or agreed property setting",
      "Grape-growing traditions, distinguished from a booked winery or tasting visit",
      "A separately arranged food or wine conversation with a willing local provider",
      "Time at a suitable village or valley property, with meals and room comfort established",
    ],
    stays: [
      {
        label: "1 night / a useful pause on a coherent road route",
        advice:
          "Choose only when the complete drive leaves enough daylight for a meaningful introduction and the room suits you. Confirm dinner and the next morning's departure. A photo stop followed by a late check-in is not a full cultural visit.",
      },
      {
        label: "2 nights / one full village day",
        advice:
          "Separate the village experience from both main road journeys. Use the full day for a considered church and village visit, a seated meal, an agreed additional interest and time at the property. This is the stronger choice for guests who want depth without a crowded schedule.",
      },
      {
        label: "3 nights / time in the valley for its own sake",
        advice:
          "Choose when the room and setting support a slower stay and there is something you actively want to do with the extra day. Agree any distinct walk or host in advance. Do not add a night on the assumption that every vineyard operates a visitor program.",
      },
    ],
    hotelAreas: [
      {
        name: "Village property / understand the exact walking setting",
        advice:
          "Compare the actual address with the church and chosen public lanes. Check bedroom noise, bathroom, steps, meals and pickup. Staying close can make a short walk easier, but privacy and sleep depend on the room rather than the village label.",
      },
      {
        name: "Valley lodge / choose the room and complete approach",
        advice:
          "Establish the property's location, bedroom view and transfer to the village. A secluded setting needs reliable dinner, breakfast and luggage arrangements. Choose it because you want time there, not because a landscape photograph suggests everything is within walking distance.",
      },
      {
        name: "Feilaisi or Deqin town / a different overnight decision",
        advice:
          "A mountain-viewing base or county-town room serves a different purpose. Assess the full road journey before considering Cizhong as an outing, and compare that with sleeping in the valley. Do not silently substitute one base for another under the broad Deqin name.",
      },
    ],
    tradeoffs: [
      {
        title: "Understand a living church before treating it as architecture",
        advice:
          "The church connects Catholic mission history with the community that uses the place today. Look at its visible forms and setting, then distinguish supported historical interpretation from stories about particular builders or events. Public visiting and religious participation are different arrangements. Ask before photographing people and follow the current rules inside; a service is not a performance scheduled for a tour.",
      },
      {
        title: "Grapes, local wine and a commercial winery are different experiences",
        advice:
          "A vineyard walk explains cultivation; a hosted tasting explores particular wines; a winery visit may show production where permitted. None automatically includes the others. Ask who made the wine, where its grapes were grown, what is available to taste and how it has been stored. A regional wine reputation does not prove that a celebrated estate is in Cizhong or accepts visitors.",
      },
      {
        title: "Choose the village for depth rather than a checklist",
        advice:
          "Cizhong suits travelers who enjoy explanation, quiet observation and time at a well-chosen property. It is a less natural choice for guests seeking shopping streets, nightlife or a new major attraction every hour. A full day can be rewarding without access to a private home or a second church. Decide whether that pace is part of the holiday you actually want.",
      },
      {
        title: "A lower valley stay does not describe the whole journey",
        advice:
          "Review the approach from Shangri-La and any continuation toward Feilaisi using current roads and the full elevation profile. Cizhong's river-valley setting does not mean every travel hour stays low. A stay here should not be presented as treatment for altitude illness or proof that the higher itinerary is suitable. Personal medical questions need qualified advice.",
      },
      {
        title: "Follow the correct river and the actual road",
        advice:
          "Cizhong is in the Lancang valley. Nujiang's Nu River and the Jinsha corridor are different valleys; the Three Parallel Rivers name does not make them one continuous riverside drive. A map can conceal ridges, junctions and long connections. Plan a cross-valley journey explicitly rather than add Bingzhongluo or another valley as a casual detour.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yubeng",
        advice:
          "Yubeng is a separate village-based walking stay. Compare Upper and Lower Yubeng rooms, Sacred Waterfall or Ice Lake routes, actual village access and the complete exit. Three village nights give two full days, excluding approach stays elsewhere. A lodge booking does not remove highland walking demands.",
      },
      {
        slug: "deqin",
        advice:
          "Compare Cizhong's village-and-river stay with Feilaisi's Meili viewing setting. Combining them can create two distinct chapters if the full road journey, rooms and available nights work. The shared county does not make the transfer negligible, and a Yubeng trek requires a separate plan.",
      },
      {
        slug: "shangri-la",
        advice:
          "Shangri-La offers a different highland city and monastery context and can form part of the wider road sequence. Count the complete journey and changing elevations. The published Yunnan tour's Shangri-La finish does not include a Cizhong extension.",
      },
      {
        slug: "lijiang",
        advice:
          "Lijiang provides an earlier Naxi cultural chapter on a longer Yunnan journey. Choose the intervening stays and full road days before combining it with Cizhong. The village is not a convenient short excursion from a Lijiang hotel.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose the season by the whole northwest Yunnan journey. Spring brings changing valley growth, while summer rain can affect roads and outdoor plans. Autumn may suit a vineyard interest, but harvesting and any participation depend on the grower, crop and actual date. Winter gives a different, quieter landscape and requires attention to room warmth and higher road sections. A valley property and a Feilaisi viewing stay can have very different conditions on the same trip. Confirm forecasts and local notices near travel rather than promise a harvest scene or clear mountains.",
    orientation:
      "Cizhong is a village in Deqin County, Diqing Tibetan Autonomous Prefecture, Yunnan, beside the Lancang valley corridor. It is outside the Tibet Autonomous Region. It is not Deqin county town, Feilaisi, Yubeng or a synonym for the whole Meili visitor region. The village's church and vineyard traditions support a distinct cultural stay. This guide does not claim to cover every Deqin village, all regional wine estates or the adjacent Nu and Jinsha valleys.",
    experiences: [
      "Explore the church's public setting with religious history and contemporary life explained",
      "Understand grape-growing and wine through a clearly defined, separately agreed visit",
      "Enjoy a quiet valley stay with a suitable room, good meals and an unhurried village day",
    ],
    planningNotes: [
      "Choose Cizhong for village culture; choose Feilaisi separately for Meili views",
      "Confirm church access and the precise content of any wine or hosted experience",
      "Plan complete road days, changing elevations and the actual room before adding nights",
    ],
    arrival:
      "Build the approach from the actual Shangri-La room or another agreed gateway using current roads. Cizhong has no rail arrival that delivers guests directly to the village; an airport or station elsewhere in Yunnan still leaves a substantial road journey. Count breaks, meals, final property access and luggage. A transfer from Feilaisi also needs a complete road plan. Avoid old fixed drive-time claims, protect onward connections and check traveler-specific arrangements for any wider borderward or cross-jurisdiction route.",
    gettingAround:
      "Combine an agreed public village walk with road transport where the actual property or selected interest requires it. Establish slopes, steps, seating and the church approach before describing the day as easy. Vineyards, homes, fields and production rooms can be private working spaces. Keep access to paths and hosts explicit, and use an appropriate viewpoint rather than improvising a walk beside the river or through cultivated land.",
    stayStrategy:
      "Two nights let you experience a full day without scheduling the church and a host into the uncertain end of a road transfer. A one-night stay should earn its hotel move through useful daylight and a coherent route. Three nights depend on the property and your appetite for quiet time. Compare the exact room and meal plan with another night near Meili or in Shangri-La; those alternatives offer different experiences rather than interchangeable Deqin accommodation.",
    firstTimerNote:
      "Start with a simple brief: a church-and-village visit, a comfortable meal and time to look at the valley. Add a wine interest only when its content is clear and it matters to you. You do not need to be a wine collector or a specialist in religion to enjoy the place. Equally, there is no reason to add the road journey if quiet village time is not what you want from this holiday.",
    faqs: [
      {
        question: "Where is Cizhong in China?",
        answer:
          "Cizhong (茨中) is a village in Deqin County, Diqing, northwest Yunnan, in the Lancang River valley. The river is known downstream as the Mekong. Cizhong is outside the Tibet Autonomous Region and is distinct from Deqin town, Feilaisi and Yubeng.",
      },
      {
        question: "Is Cizhong worth visiting?",
        answer:
          "Choose it for the Catholic church's cultural context, grape-growing traditions, village life and a quieter valley stay. It suits travelers who enjoy interpretation and a slower pace. It is less suitable if you want many major sights, nightlife or a quick excursion from Lijiang.",
      },
      {
        question: "How many nights should I spend in Cizhong?",
        answer:
          "Two nights give one full day between road journeys. One can work when arrival and departure leave useful village time. Three suit guests who want the property and quiet setting for their own sake or have another confirmed local interest.",
      },
      {
        question: "Can visitors go inside Cizhong Catholic Church?",
        answer:
          "Confirm current visiting arrangements before planning an interior visit. It is a place of worship, and public access, services, photography and any conversation with clergy are separate questions. A private guide does not guarantee an open interior or a special religious encounter.",
      },
      {
        question: "Can I visit a vineyard or taste wine in Cizhong?",
        answer:
          "A specific visit can be assessed with a willing provider. Confirm whether it is cultivation interpretation, a tasting or permitted production access, and identify the actual wines and inclusions. Vineyard scenery alone does not establish a public winery or a tasting appointment.",
      },
      {
        question: "Should I choose Cizhong or Feilaisi?",
        answer:
          "Cizhong offers village culture and a Lancang valley stay; Feilaisi offers a base for viewing the Meili range. Compare the rooms, full road route, elevations and useful nights. Combining them is possible to assess, but they are not interchangeable locations or one compact sightseeing area.",
      },
      {
        question: "Is Cizhong suitable if I am concerned about altitude?",
        answer:
          "Its valley setting is lower than Feilaisi, but the complete road journey may include much higher sections and other high overnight stops. Review the full itinerary and seek qualified medical advice about personal suitability. A lower hotel does not make the entire route medically suitable.",
      },
      {
        question: "Where should I stay in Cizhong?",
        answer:
          "Compare a named village property with a precisely located valley lodge. Check the actual room, sleep, bathroom, warmth or cooling, steps, meals and road access. A river-view label may describe a shared space rather than your bedroom, so establish what is being booked.",
      },
      {
        question: "Is Cizhong in the Nujiang valley?",
        answer:
          "No. Cizhong is in the Lancang valley; Nujiang follows a different river corridor. The Three Parallel Rivers name refers to a wider landscape, not one road linking every village. A cross-valley journey needs its own complete route and travel time.",
      },
      {
        question: "Does the ten-day Yunnan tour include Cizhong?",
        answer:
          "No. That published route ends in Shangri-La. No matching Cizhong product is listed here. Share dates, gateways, nights, room preferences and cultural or wine interests for a tailored assessment with separate road days and confirmed visit arrangements.",
      },
    ],
    culturalStory: {
      title: "A church in the valley, and a community around it",
      paragraphs: [
        "Cizhong's church gives a tangible starting point for understanding Catholic mission history in northwest Yunnan. The most rewarding interpretation moves between the visible building, the spread of religious ideas and the people who live here now. Look at the church's relationship to the village before turning architectural features into a simple story of East meeting West. The building's history, later repairs and present use deserve to be distinguished rather than folded into one romantic account.",
        "The wider region has Tibetan Buddhist as well as Catholic traditions, but that does not tell you what every resident believes or how every household lives. Let willing participants speak for their own experience, and make translation and the purpose of a conversation clear. Public lanes and a church visit can provide a meaningful introduction without entering a home or watching a service. Respectful curiosity gives the place more depth than treating the community as a backdrop for photographs.",
      ],
    },
    foodStory: {
      title: "Let a meal explain the valley without turning it into a sales stop",
      paragraphs: [
        "A comfortable lunch or dinner can connect the day's cultural discussion with what people grow and prepare locally. Ask the chosen kitchen what is seasonal and what it cooks well; do not build the meal around a fixed list of supposedly universal village specialties. If a wine is offered, ask who produced it, where the grapes came from and how the particular bottle is described. Local household production and commercial estate wine are different subjects, and neither needs to be declared superior for the meal to be interesting.",
        "Wine should be optional, with an equally considered nonalcoholic meal and no expectation to buy. Discuss allergies, meat stocks, dairy, grains and shared preparation with the actual kitchen. Agree any tasting portion, food pairing, bottle charge and shipping separately. Harvest activities or a hosted meal need a willing provider and the right date; a photograph of grapevines does not promise either. Good food, a comfortable seat and time to talk can be the most valuable part of an unhurried village day.",
      ],
    },
    itinerary: [
      {
        day: "Arrival road day",
        title: "Reach the valley and settle into the actual room",
        description:
          "Complete the agreed drive with breaks and current conditions considered. Use any useful daylight for a short orientation, then have a dependable dinner. A substantial church or host visit should not depend on an uncertain arrival hour.",
      },
      {
        day: "Full day / village and church",
        title: "Understand the place before adding another stop",
        description:
          "Explore an agreed public route and the church setting, with interior access only as confirmed. Leave time for interpretation, photographs where permitted and a seated meal. Adapt distance and standing to the actual group.",
      },
      {
        day: "Full-day afternoon / a chosen interest",
        title: "Add depth through a defined visit or quiet time",
        description:
          "Choose a separately agreed grape-growing or wine interest, another suitable public walk or time at the property. These are alternatives within the same full day, not a promise of every option. An extra night earns its place through a distinct interest or the slower stay you want.",
      },
      {
        day: "Departure road day",
        title: "Continue with the whole journey in view",
        description:
          "Transfer to the actual next base, allowing breaks and the complete approach. If continuing to Feilaisi, treat the mountain-viewing stay as a separate chapter. This two-night outline is illustrative and does not create a published package, a winery appointment or access to private religious life.",
      },
    ],
  },
};
