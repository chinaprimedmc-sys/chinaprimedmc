import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xiahe.svg",
  alt: "Xiahe planning schematic comparing Labrang Monastery, a separate grassland outing and a town base at roughly 2900 meters; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const xiaheGuide: ExpandedDestination = {
  id: "xiahe",
  name: "Xiahe",
  region: "northwest",
  kicker: "Labrang, living Tibetan culture and time to understand the setting",
  description:
    "Plan a considered Xiahe stay around Labrang Monastery, with clear choices on altitude, town hotels, Sangke grassland and a wider Gannan route.",
  stay: "2–3 nights, subject to a suitable ascent plan",
  bestFor: "Tibetan Buddhist history, monastery interpretation and selected grassland time",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "tongren-qinghai",
    "langmusi",
    "gannan",
    "lanzhou",
    "xining",
    "tianshui",
    "zhangye",
    "zoige",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xiahe Travel Guide: Labrang, Altitude & Where to Stay",
    seoTitle: "Xiahe Travel Guide: Labrang, Altitude & Hotels",
    seoDescription:
      "Plan 2–3 nights in Xiahe for Labrang Monastery: compare town hotels, Sangke grassland, altitude, Lanzhou transfers and a wider Gannan itinerary.",
    answer:
      "Xiahe (夏河) is a county and monastery town in Gannan Tibetan Autonomous Prefecture, Gansu. Labrang Monastery, also written Labuleng, is its main cultural reason to visit: a living Tibetan Buddhist institution, with public surroundings and interior visits requiring different arrangements. The town is at roughly 2,900 meters above sea level. Two nights allow a focused full day; three can add a separate grassland outing and more breathing space, when the ascent plan suits you. Choose Xiahe for explanation, observation and a well-paced stay rather than a checklist of temples and staged pastoral activities.",
    stayAnswer:
      "Two nights are a useful starting point for a first visit, giving Labrang a full day without attaching it to a long arrival drive. Three nights allow a distinct Sangke outing, more time in town or rest. One night can work within a suitable wider route, but a late arrival and early departure leave little cultural time. Nights in Xiahe are not a guarantee of acclimatization: review the preceding sleeping elevation, the full road profile and any higher onward destinations before deciding the duration.",
    hotelAnswer:
      "Start by choosing between a town address near Labrang, a modern property elsewhere in town and a separately located grassland stay. Around the monastery, check street noise, room heating, bathroom, stairs and the actual walk to dinner. A modern hotel may improve room comfort or pickup while requiring short transfers. A grassland property needs evidence of the actual bed, heating, hot water, toilets, meals and road approach; tent or lodge branding alone says little about comfort. For a short cultural visit, one dependable town base is usually more useful than moving hotels for one view.",
    sightseeingQuestion:
      "How should you divide time between Labrang Monastery and Sangke grassland?",
    sightseeingAnswer:
      "Give Labrang priority if Tibetan Buddhist history is the reason for coming. Separate a contextual walk through permitted public areas from the currently available interior visitor route; an outside guide cannot promise access to every hall. Use Sangke as a distinct landscape outing with a named location and purpose, such as a manageable walk or time at a confirmed property. A road viewpoint, commercial activity area, long hike and horse ride are different experiences. A short visit gains more from one thoughtful monastery day and one clearly chosen contrast than from collecting every grassland attraction.",
    visitorResources: [
      {
        label: "Gannan prefecture government",
        href: "https://www.gnzrmzf.gov.cn/",
        scope:
          "Regional background and public notices, mainly in Chinese. Check the relevant authority and provider for dated roads, visitor conditions and services. Gannan is a large prefecture; information about the region does not establish one compact sightseeing circuit or access to any specific religious interior.",
      },
      {
        label: "Gansu provincial government",
        href: "https://www.gansu.gov.cn/",
        scope:
          "Provincial context and public-service information. Xiahe lies in Gansu, outside the Tibet Autonomous Region; this geographical distinction is not a blanket clearance for every visitor or nearby area. Confirm any applicable restrictions, local access and hotel arrangements for the proposed dates and passport.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General guidance on altitude and ascent, not individual medical advice or clearance for this itinerary. Review health and sleeping elevations with a qualified clinician. A private vehicle, hotel oxygen equipment or several booked nights does not remove altitude risk.",
      },
    ],
    serviceScope:
      "A Xiahe proposal should identify the actual hotel and room, full arrival route, guiding language, selected public and interior monastery arrangements, meals and any grassland service. A monastery's own visitor arrangements can differ from the privately booked guide's role; spell out both. Religious participation, festivals, private teaching, family hospitality, horse riding and specialist meetings require separate consent and confirmation. Guiding does not buy entry to restricted halls or private life. Current local access and foreign-guest hotel arrangements should be checked before payment, including any onward Gannan areas.",
    routeAdvice:
      "Use Xiahe as a focused Gannan chapter, often considered from Lanzhou, with the whole arrival and ascent planned before sightseeing. Xining offers a different city and monastery context; Tianshui adds a different Buddhist-art tradition. Zhangye belongs to a longer corridor journey, not a day trip from Xiahe. There is no matching published Xiahe product recommended here. Request a tailored route with dates, previous sleeping elevation, walking needs and cultural interests. A useful proposal will explain why each additional night or transfer improves the trip rather than call the whole northwest one easy loop.",
    practicalPlanning: {
      timing:
        "Leave arrival modest, particularly after a substantial ascent. Plan Labrang around actual interior visitor arrangements and religious activity, allowing a meal, rest and time to understand what you see. Keep a grassland outing separate from a rushed long-distance departure. Festival dates may change accommodation demand and access; observing a festival is not a guaranteed performance included with a normal sightseeing day. A road arrival after dark is not a full day in the monastery town.",
      walking:
        "The monastery area involves walking, thresholds, steps and periods of standing at altitude. A public circumambulation route is not automatically a short or level walk; choose a portion that suits and follow local direction. Ask before portraits, respect worship and follow hall-specific photography rules. Sangke routes require their own review of terrain, weather, shelter and toilets. Less walking does not lower the sleeping altitude. Stop and seek appropriate medical assessment for concerning symptoms rather than continuing higher to keep an itinerary.",
      cost: "Compare hotel heating and bathroom quality, the complete vehicle route, guide language and hours, named admissions and meals. Clarify whether monastery interpretation is delivered by your guide, a site-arranged visitor service or both. Grassland activities, a named host, horse riding and remote-property meals need their own itemized basis. A higher quote should buy useful interpretation, reliable logistics and comfort; it should not imply exclusive religious access or a cure for altitude concerns.",
    },
    attractions: [
      "Labrang / Labuleng Monastery, with public areas and interior visitor access distinguished",
      "A selected portion of the monastery's circumambulation route, respecting worship",
      "Xiahe town streets and a carefully chosen meal rather than a compulsory shopping stop",
      "Sangke grassland as a separate named landscape outing",
      "A genuinely arranged cultural or craft subject, when a suitable host consents",
      "A wider Gannan journey only with each stop, sleeping elevation and road day reviewed",
    ],
    stays: [
      {
        label: "1 night: a selective stop in an appropriate wider route",
        advice:
          "Consider only when arrival, altitude suitability and onward timing leave useful time. Do not pair a late check-in with an early departure and describe it as an in-depth Labrang visit. Protect rest and a real meal before adding activities.",
      },
      {
        label: "2 nights: a focused Labrang introduction",
        advice:
          "Allow one full day for interpretation, selected walking and interior arrangements where available. Keep the actual hotel comfortable enough for rest. This is a cultural pacing recommendation, not a medical acclimatization formula.",
      },
      {
        label: "3 nights: monastery depth and a landscape contrast",
        advice:
          "Add a distinct Sangke outing or more time for an actual cultural interest. Leave enough flexibility for weather and energy. An extra night should have a purpose beyond a second round of similar photo stops or unconfirmed hospitality.",
      },
    ],
    hotelAreas: [
      {
        name: "Town streets near Labrang / cultural convenience",
        advice:
          "Choose the exact address and room orientation. Check evening activity, early street sounds, heating, bathroom, stairs and the vehicle approach. Near the monastery does not mean quiet, a view, a private entrance or early access to religious halls.",
      },
      {
        name: "A modern town hotel / room comfort and pickup",
        advice:
          "Compare beds, temperature control, hot water, lifts, non-smoking arrangements and breakfast. Include the short daily transfers and dinner options. Dependable sleep can be more valuable than a decorative Tibetan theme without reliable facilities.",
      },
      {
        name: "Sangke or another countryside property / a separate stay choice",
        advice:
          "Review its actual location, road, weather plan, meals, heating and private bathroom. Ask what a normal day there involves beyond the room photograph. A remote stay may suit a landscape chapter but is not automatically the best base for repeated monastery visits.",
      },
    ],
    tradeoffs: [
      {
        title: "Labrang is a working institution",
        advice:
          "Visit to understand its buildings, learning traditions and present religious life. Public streets, a circumambulation route and ticketed interiors have different boundaries. An arranged guide can provide context without promising a ritual, private teaching, every hall or unrestricted photographs.",
      },
      {
        title: "Xiahe is not the whole of Gannan",
        advice:
          "Gannan includes widely separated towns, monasteries and landscapes. Langmusi, Zhagana and other possible additions require their own roads, nights, access and altitude assessment. A three-night Xiahe stay is not a complete Gannan circuit, and a shared regional name does not make the stops local excursions.",
      },
      {
        title: "Sangke needs a purpose beyond the grassland label",
        advice:
          "Choose a specific route, property or activity. Roadside views, visitor activity areas and a substantial hike deliver different experiences. Seasonal grazing, weather and visitor infrastructure affect the landscape. Do not promise a flower meadow, secluded nomad encounter or untouched wilderness from a general seasonal description.",
      },
      {
        title: "Comfort matters more than themed decoration",
        advice:
          "Heating, hot water, bedding, soundproofing and a workable bathroom determine the overnight experience. A beautifully decorated lobby does not establish the standard of the quoted room. Check the property and category, then decide whether monastery proximity or a different room setup matters more.",
      },
      {
        title: "Altitude applies even to an easy cultural day",
        advice:
          "The town sits around 2,900 meters and other proposed stops can be higher. Review the whole ascent and individual suitability. A mostly seated day or an oxygen-equipped hotel does not remove the physiological exposure. The schedule must allow changes when a guest feels unwell.",
      },
      {
        title: "Horse riding and hospitality are optional arrangements",
        advice:
          "If riding is wanted, review operator, equipment, supervision, route and the guest's experience. For a hosted meal or cultural meeting, confirm consent, language, content and payment separately. Neither should be presented as an automatic right to enter local lives or a compulsory purchase opportunity.",
      },
      {
        title: "Use the full gateway journey",
        advice:
          "Lanzhou city, Lanzhou West station and Lanzhou Zhongchuan airport are different pickup points. Any proposed Gannan Xiahe airport service needs a dated operating check and its own transfer. Compare the complete door-to-door route and ascent instead of treating an airport name as arrival in town.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "tongren-qinghai",
        advice:
          "Tongren in Qinghai adds Regong thangka and related art traditions before or after Labrang. Let image-making and religious context build on one another rather than repeat a generic monastery circuit. Protect useful local nights and review the complete road and sleeping elevations; artist appointments need their own confirmation.",
      },
      {
        slug: "langmusi",
        advice:
          "Langmusi adds a distinct border-town chapter with separate Sertri and Kirti / Ge’erdi institutions, rather than another name for Labrang. Allow the full road and local nights, compare the actual room and sleeping elevation, and assess any valley walk separately. A two-night Xiahe stay does not silently include this additional journey.",
      },
      {
        slug: "gannan",
        advice:
          "Use the Gannan regional guide to decide whether Langmusi, Zhagana or Hezuo adds a distinct subject beyond a focused Labrang stay. Compare actual bases, full road days, sleeping elevations and current access before adding them. A four- to six-night regional framework is a different trip from two or three nights in Xiahe, not a reason to replace useful local time with a hurried loop.",
      },
      {
        slug: "zoige",
        advice:
          "Zoige / Ruoergai in Sichuan adds a separate wetland and Yellow River landscape chapter after or before Xiahe. Review the whole road and sleeping-elevation sequence, with any Langmusi stop given a named site and current access. Allow distinct nights and useful time rather than turn a cross-region journey into a day excursion from Labrang.",
      },
      {
        slug: "lanzhou",
        advice:
          "Lanzhou offers a different city chapter, Gansu collections and a common arrival gateway. Specify whether pickup is at Zhongchuan airport, Lanzhou West or Lanzhou station, then count the full road journey and ascent to Xiahe. A city overnight does not guarantee altitude readiness.",
      },
      {
        slug: "xining",
        advice:
          "Xining adds Qinghai city culture and the separate Kumbum Monastery context. Review the full route, road conditions and sleeping elevations. The monasteries have distinct histories; combining them should deepen understanding rather than repeat generic temple visits.",
      },
      {
        slug: "tianshui",
        advice:
          "Tianshui adds Maijishan's Buddhist sculpture and a different city base. Join the chapters through actual dated rail and road connections, often requiring a gateway change. Give the grotto visit its own full time and assess its cliffside steps separately from Labrang walking.",
      },
      {
        slug: "zhangye",
        advice:
          "Zhangye provides contrasting landforms and corridor history in a longer Gansu journey. Count the connection through the actual gateway and useful nights. It is a separate chapter, not a convenient local landscape detour from Xiahe.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through early autumn can suit a first combination of monastery and grassland interests, with cool evenings and changeable weather still possible. Summer landscapes do not guarantee flowers, dry paths or empty roads. Winter can offer a different town atmosphere but brings cold, heating requirements and potential road disruption. Religious calendars and public holidays can change demand and visitor arrangements. Choose dates for the actual interests and review forecasts and access near travel, rather than promise festivals or private ceremonies from a calendar alone.",
    orientation:
      "Xiahe county lies in Gannan Tibetan Autonomous Prefecture in southern Gansu, outside the Tibet Autonomous Region. The visitor town is centered on Labrang and sits at roughly 2,900 meters. Sangke is a separate landscape outing; other Gannan places may need substantial journeys and different sleeping elevations. Use the full Chinese hotel address and an actual pickup point, separating Lanzhou's airport, stations and city from the onward road service.",
    experiences: [
      "Understand Labrang through a selected route and appropriate interpretation",
      "Choose a meaningful Sangke outing with its own walking and weather plan",
      "Stay comfortably in town before deciding how much wider Gannan travel to add",
    ],
    planningNotes: [
      "Review the complete ascent and sleeping elevations, even for a gentle itinerary",
      "Separate monastery public areas, interior visitor arrangements and religious participation",
      "Choose the actual room, heating, bathroom and full gateway transfer before adding activities",
    ],
    arrival:
      "Lanzhou is a common planning gateway, but its airport, city and stations are different origins for the onward road journey. Confirm the exact meeting point, route, breaks and arrival hour. Proposed flights to Gannan Xiahe airport require a current schedule check and a separate transfer; do not base a nonrefundable plan on an assumed service. Share the preceding sleeping elevation and review the full ascent. A road transfer is also a travel day, so keep arrival sightseeing optional and modest.",
    gettingAround:
      "Use selected walks around Labrang and town, with a vehicle for separate landscape outings. Set clear meeting points and agree how far the vehicle can actually approach. Religious routes, interiors and grassland terrain need different footwear and effort assessments. A longer route around the monastery need not be completed to gain insight. Roads and weather can change plans; a private car provides flexibility but does not authorize access or make every Gannan destination suitable as a day trip.",
    stayStrategy:
      "Use one comfortable town base for a short Labrang-focused stay. Prioritize heating, sleep, bathroom and easy meals; choose proximity only after checking the actual room and approach. Add a countryside overnight when the property and landscape genuinely justify moving, not because a tent photograph looks exclusive. Discuss rest and contingency time before expanding toward higher or more remote areas. A worthwhile high-end stay is coherent and well explained rather than packed with unconfirmed encounters.",
    firstTimerNote:
      "Begin with what you want to understand: Labrang's religious and learning traditions, the town's cultural setting or a particular landscape interest. One good explanation and time to observe can be more rewarding than many hurried entrances. Travel respectfully, follow local instructions and keep physical effort modest at first. Neither a regional label nor a private-guide booking guarantees interior access, spontaneous hospitality or suitability at altitude.",
    faqs: [
      {
        question: "Where is Xiahe, and is it in Tibet?",
        answer:
          "Xiahe is in Gannan Tibetan Autonomous Prefecture, Gansu, outside the Tibet Autonomous Region. Its Tibetan cultural setting does not place it under the same geographical jurisdiction as Lhasa. Check current local access and any onward areas for the actual passport and dates rather than assume this distinction settles every travel requirement.",
      },
      {
        question: "How many nights should I spend in Xiahe?",
        answer:
          "Two nights give a focused Labrang day; three add a separate grassland interest or a slower stay. One night needs favorable transport timing. Review your full ascent and individual health separately: a recommended stay length does not guarantee acclimatization.",
      },
      {
        question: "What is the altitude of Xiahe?",
        answer:
          "The town is roughly 2,900 meters above sea level, with variation by location. Other Gannan stops and roads may be higher. Review sleeping elevations and ascent with appropriate medical advice when needed. Less walking and hotel oxygen equipment do not remove altitude exposure.",
      },
      {
        question: "Can a private guide take me inside every Labrang hall?",
        answer:
          "No. Public areas and interior visitor arrangements differ, and religious use or closures can change access. A proposal should distinguish your private guide's explanation from any monastery-arranged service. Restricted halls, ceremonies and private teaching are not automatic inclusions.",
      },
      {
        question: "Where should I stay for Labrang Monastery?",
        answer:
          "A suitable town hotel is usually practical for two or three nights. Compare actual monastery proximity with heating, bathroom, soundproofing and pickup. A grassland property serves a different purpose and needs its own road and comfort review.",
      },
      {
        question: "Is Sangke grassland worth adding to Xiahe?",
        answer:
          "It can provide a useful contrast when the actual location, season and activity suit. Choose a manageable walk, landscape time or confirmed property rather than assume every grassland stop is secluded or includes authentic hospitality. Horse riding is optional and needs separate operator and suitability checks.",
      },
      {
        question: "Can I visit Xiahe as a day trip from Lanzhou?",
        answer:
          "Compare the entire return road journey with the time available at Labrang and the altitude change. An overnight plan often gives a more coherent cultural visit. Do not judge feasibility from distance alone or promise a monastery, grassland and relaxed return without a dated practical route.",
      },
      {
        question: "Is a Xiahe tour available on this page?",
        answer:
          "No matching published product is recommended here. The outline supports a tailored proposal. Share dates, previous sleeping elevations, room and walking needs, and the subjects you want explained so access, logistics and actual local services can be checked.",
      },
    ],
    culturalStory: {
      title: "Give Labrang time for explanation and observation",
      paragraphs: [
        "Labrang is an important center of the Gelug tradition of Tibetan Buddhism. Its significance goes beyond a collection of photogenic halls: religious learning, institutions, architecture and the relationship with the surrounding town deserve distinct explanations. A useful visit begins with a clear introduction and a selected route, helping you read what is visible without assuming that every impressive building is open to tourists. Specialist depth should be matched to the guide's demonstrated knowledge and language ability.",
        "This remains a place of worship and daily life. Follow the direction of local devotional routes, avoid interrupting people and respect photography and interior instructions. Do not treat worshippers as a scheduled cultural performance. A consented conversation or hosted subject can add depth when genuinely arranged, but observation from permitted areas also has value. Good guiding makes the boundaries understandable while leaving time to look and listen.",
      ],
    },
    foodStory: {
      title: "Plan warm, satisfying meals around the cultural day",
      paragraphs: [
        "Local meals may include noodles, dumplings, mutton dishes, dairy products and Tibetan-style breads or tea. Choose a restaurant and preparation that suit the guests rather than assume everyone wants the same regional tasting menu. A warm seated lunch and a manageable dinner can improve a day of walking and standing. If butter tea is of interest, approach it as a particular taste and cultural context, not a compulsory test of authenticity.",
        "Discuss wheat, dairy, meat stocks, offal, spice and shared preparation in advance. Vegetarian dishes may still use animal stock, and a dairy-based drink is not suitable for every guest. Muslim dining needs require confirmation with the actual establishment rather than assumptions about a town's population. Serious allergy requirements need a kitchen capable of meeting them and a practical alternative; a guide's translation alone does not establish that capacity.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach a dependable town base and keep the evening modest",
        description:
          "Follow the agreed gateway and full road route, with breaks and the ascent reviewed. Settle into the actual room, have a straightforward meal and rest. A short introduction is optional; do not make an interior visit depend on an uncertain arrival.",
      },
      {
        day: "Full day",
        title: "Understand Labrang through a selected cultural route",
        description:
          "Combine contextual explanation, permitted public walking and the actual interior visitor arrangement if available. Include lunch, sitting and rest. Match the length to energy and interest rather than complete every devotional circuit or viewpoint.",
      },
      {
        day: "Optional second full day",
        title: "A distinct Sangke or confirmed cultural interest",
        description:
          "With a third night, choose an actual landscape route or a separately arranged subject. Include weather alternatives, toilets and the full return. Riding, private hospitality and religious participation are not assumed.",
      },
      {
        day: "Departure",
        title: "Continue with the full route and altitude profile visible",
        description:
          "Leave enough time for the actual gateway or next base. This two-night outline with an optional third night is illustrative, not a published package or a medical ascent recommendation. Current access, room availability and local services require confirmation.",
      },
    ],
  },
};
