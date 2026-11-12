import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/tianjin.svg",
  alt: "Tianjin planning diagram comparing a central architecture visit, a separate Binhai or cruise-port stay and a Jizhou countryside extension; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const tianjinGuide: ExpandedDestination = {
  id: "tianjin",
  name: "Tianjin",
  region: "north",
  kicker: "Trading-city streets, Haihe evenings & a different northern table",
  description:
    "Explore Tianjin's architecture and food beyond a quick photo stop, with practical advice on a Beijing day trip, a relaxed overnight and the very different logistics of Binhai or a cruise-port transfer.",
  stay: "1–3 nights",
  bestFor: "Architecture, regional food and a city contrast to Beijing",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "tangshan",
    "beidaihe",
    "qinhuangdao",
    "beijing",
    "datong",
    "pingyao",
    "chengde",
    "jinan",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tianjin Travel Guide: Beijing Day Trips & Where to Stay",
    seoTitle: "Tianjin Travel Guide: Day Trips & Where to Stay",
    seoDescription:
      "Plan Tianjin from Beijing: compare a day trip with overnight stays, Wudadao and Haihe visits, central vs Binhai hotels, stations, food and cruise transfers.",
    answer:
      "Tianjin (天津), also written Tientsin in older English sources, is a municipality southeast of Beijing. Its central districts combine Haihe riverfront views, former foreign-concession architecture, Chinese trading traditions and distinctive northern food. Choose it for a different urban history from Beijing's imperial monuments. A focused rail day trip can be worthwhile; an overnight adds quieter morning walks and a riverfront evening. Central Tianjin, the coastal Binhai area and the countryside around Jizhou are different travel bases within a large municipality, not interchangeable names for one compact city center.",
    stayAnswer:
      "Choose a day trip for one architectural neighborhood, a local lunch and a selected riverfront walk. One night makes room for an evening and another morning, provided your actual trains leave useful time. Two nights usually give one full day between travel days, a comfortable basis for a central-city visit. Three nights add a second full day for another historical subject or a separately assessed excursion. A Binhai attraction, cruise-port transfer or Jizhou countryside stay needs its own place in the schedule.",
    hotelAnswer:
      "For central sightseeing, compare a specific Haihe riverfront hotel with an address around the Five Great Avenues, or Wudadao, and the wider Xiaobailou area. The former favors the river setting; the latter can suit leafy streets, restaurants and an architectural walk. Check the exact building, room, quietness and pickup rather than relying on a heritage or river-view label. Choose Binhai for a genuine coastal-district or cruise-related purpose, not as an equivalent base for central Tianjin. A Jizhou hotel serves a separate countryside or mountain plan.",
    sightseeingQuestion: "Should you visit Wudadao or the Italian-style area?",
    sightseeingAnswer:
      "Wudadao, commonly translated as the Five Great Avenues, suits a walk through a wider district of villas and varied architectural styles, with an explanation of the people and institutions connected to them. The Italian-style area occupies a different former-concession district and offers a more concentrated visitor setting. They are separate neighborhoods, neither a complete account of Tianjin nor a guarantee of access inside historic houses. With a short visit, choose one well-interpreted walk and time by the Haihe before adding another similar streetscape.",
    visitorResources: [
      {
        label: "Tianjin municipal government, English portal",
        href: "https://en.tj.gov.cn/",
        scope:
          "Municipal background and visitor orientation. Confirm individual building access, attractions, boat departures, performances, hotel services and port arrangements with the relevant operator before booking.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Use the actual date, train and full station names; a general Beijing–Tianjin connection does not establish your departure station, ticket availability or hotel-to-hotel journey time.",
      },
    ],
    serviceScope:
      "A tailored Tianjin proposal can specify the hotel and room, guided neighborhood route, road transfers, selected admissions and train arrangements. For an architecture-focused visit, ask for interpretation of the buildings' context rather than a succession of exterior photographs. Boat trips, interior visits, craft hosts and performances need separate availability and inclusion. Port or airport service requires the exact terminal, timings, luggage and onward destination before a sightseeing program can be assessed.",
    routeAdvice:
      "Tianjin works best when it adds something you want: a trading-city history, a specific hotel, an evening on the Haihe or a different food tradition. From Beijing, compare a focused day trip with an overnight rather than automatically changing hotels. Datong and Pingyao introduce different northern histories and deserve separate travel days and stays. No matching published Tianjin product is recommended here. Use the illustrative outline to discuss a tailored visit, with transport and optional activities identified in the proposal.",
    practicalPlanning: {
      timing:
        "Start with the available time between station or terminal transfers. A central-city day can combine one main neighborhood, lunch and a riverfront section without crossing the municipality repeatedly. Leave a boat ride or additional interior visit optional until its actual operation is known. An overnight is most useful when you protect the evening and following morning instead of arriving late and leaving at dawn.",
      walking:
        "Architectural streets are rewarding on foot, but long blocks, road crossings, uneven paving and limited seating can make a full district tiring. Plan a shorter loop and a seated break. Museum standing, riverside paths and boarding a boat create different demands. Ask about the actual route, entrance and vehicle meeting point; a hotel ramp does not establish step-free access through every historic property or visitor area.",
      cost: "Compare guiding depth, road hours, rail class, hotel room and named admissions. A public river cruise, a private charter and an unbooked waterfront walk are different services. Building interiors, craft visits and performance tickets should appear as specific items when included. A premium hotel is most useful when its room, location and time there improve the stay; the city name or heritage styling alone does not establish that value.",
    },
    attractions: [
      "Five Great Avenues / Wudadao architectural district",
      "Selected Haihe riverfront walks",
      "Italian-style former-concession area",
      "Ancient Culture Street / Guwenhua Jie",
      "Tianjin Museum, when its collections fit your interests",
      "Yangliuqing as a separate woodblock-printing interest",
    ],
    stays: [
      {
        label: "Day trip: a coherent central-city introduction",
        advice:
          "Choose an architectural walk, lunch and a riverfront section around confirmed trains. Starting from Beijing, include both station transfers and boarding time. Keep Binhai, the cruise port and Jizhou outside this plan unless the whole day is designed around one of them instead.",
      },
      {
        label: "1 night: keep the evening and morning",
        advice:
          "A useful choice for a river-facing stay and slower streets before returning to Beijing or continuing elsewhere. Check how much time your trains actually leave; one night does not automatically provide two full days. Avoid changing hotels if the stay would amount only to sleep between transfers.",
      },
      {
        label: "2 nights: one full day with breathing room",
        advice:
          "Use the full day for central neighborhoods and a selected museum or cultural interest, with a proper meal and rest. Arrival and departure remain travel periods. This suits guests who value the hotel and a less hurried pace more than collecting additional distant sights.",
      },
      {
        label: "3 nights or more: add a distinct second subject",
        advice:
          "Consider Yangliuqing's printing tradition, a collection-led museum day or a genuinely relevant Binhai visit. Jizhou countryside and Huangyaguan Great Wall need separate road planning and may justify another base. Extra nights should serve a clear interest rather than repeat similar shopping streets.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Haihe riverfront",
        advice:
          "Choose a property for the actual room view, walk to the riverside and evening meal options. Opposite banks and different sections create different daily routes. Confirm whether the view is from your booked room, whether nearby construction or traffic affects sleep and where the driver can meet you.",
      },
      {
        name: "Wudadao, Xiaobailou and nearby central addresses",
        advice:
          "A starting point for architectural streets and city dining. Compare a historic building with a modern hotel by bathroom, lift, sound insulation, temperature control and service, not just exterior character. A former residence used as a hotel needs a room-level review rather than a blanket claim of heritage luxury.",
      },
      {
        name: "Binhai and cruise-related stays",
        advice:
          "Useful for a specific coastal-district appointment, attraction or ship departure. Binhai is extensive, and a hotel carrying its name is not necessarily near your terminal. Use the exact port or venue, actual road transfer and confirmed timing. Central-city touring requires another substantial movement, not a short neighborhood walk.",
      },
      {
        name: "Jizhou countryside or mountain properties",
        advice:
          "Choose for the actual setting and a countryside-led plan. Review room comfort, meals, road access and the visits you intend to make. Do not book a northern Tianjin resort expecting easy daily walks around central Wudadao or convenient cruise embarkation.",
      },
    ],
    tradeoffs: [
      {
        title: "Architecture needs context as well as attractive facades",
        advice:
          "A good walk distinguishes former concessions, Chinese institutions, individual residents and later changes in use. Wudadao's varied villas and the Italian-style district are different historical settings. Some buildings remain in private or institutional use. Plan meaningful exterior interpretation, adding interiors only where actual visitor access is confirmed.",
      },
      {
        title: "Choose a craft subject rather than a generic shopping stop",
        advice:
          "Ancient Culture Street can introduce shops and contemporary interpretations of local traditions; its name does not mean every building is ancient or every object handmade. Yangliuqing woodblock New Year prints offer a more focused art-history interest in a separate area. A museum display, retail visit, demonstration and hands-on session require different arrangements. Identify which you want before committing the time.",
      },
      {
        title: "A Haihe evening can be rewarding without a boat ticket",
        advice:
          "A selected riverside walk and a good meal may suit a short stay better than another timed activity. If a cruise matters, establish the pier, sailing, seating and boarding route, then fit dinner around it. Weather, river conditions and operation affect sailings; do not make a fixed train departure depend on an assumed boat finish time.",
      },
      {
        title: "Cruise-port sightseeing starts with the ship's timetable",
        advice:
          "Use the cruise line's named terminal, disembarkation process and required return time. Include immigration where applicable, luggage and the complete road journey before deciding whether central Tianjin or Beijing is feasible. These are alternative visits, not a promise that both cities fit. Confirm entry eligibility through official channels; a booked car or guide does not establish immigration permission.",
      },
      {
        title: "Choose language-dependent entertainment carefully",
        advice:
          "Tianjin's xiangsheng, or crosstalk, is a spoken comic tradition whose wordplay can be difficult without strong Chinese. A performance can interest language learners, but should not be sold as automatically understandable to English-speaking guests. Explain the format, language and actual show before booking; architecture, food or a visual craft subject may better suit the group.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "tangshan",
        advice:
          "Tangshan adds coal-industry history, ceramics and the story of rebuilding after the 1976 earthquake. Give these subjects a focused city day rather than another hurried museum stop. The Eastern Qing Tombs near Zunhua require a separate road day; choose the dated train and both hotel transfers around the interests that justify the stay.",
      },
      {
        slug: "beidaihe",
        advice:
          "Beidaihe can add a slower seaside chapter after Tianjin when the actual season, room and full connection fit. Choose coastal rest, family downtime or a separately researched birding brief rather than assume tropical-resort conditions. Use the exact property address and station, distinguishing traditional Beidaihe from Nandaihe and Aranya.",
      },
      {
        slug: "qinhuangdao",
        advice:
          "Qinhuangdao adds a distinct Shanhaiguan and Laolongtou Great Wall chapter on the Bohai coast, with a separately chosen Beidaihe stay or confirmed Aranya interest. Compare the actual train, station and full hotel transfers. Port-city architecture, coastal defenses and a resort day are different subjects; give each useful time rather than assume one coastal label makes them neighboring outings.",
      },
      {
        slug: "jinan",
        advice:
          "Jinan offers a different water-shaped city through spring pools, old-city lanes and Daming Lake. Allow a separate stay and check the exact train stations and hotel transfers. Qingdao can extend a Shandong route with its own coastal chapter, rather than making all three cities a hurried transit sequence.",
      },
      {
        slug: "chengde",
        advice:
          "Chengde adds a Qing court landscape and separate Buddhist temple complexes, a different subject from Tianjin's trading-city streets. Establish the complete station or road sequence and allow a useful Chengde stay. Neither the Mountain Resort nor Jinshanling is a short extension to a central Tianjin sightseeing day.",
      },
      {
        slug: "beijing",
        advice:
          "Tianjin's river trade and architectural neighborhoods offer a contrast to Beijing's palaces and Great Wall. Choose a day trip when hotel changes would consume useful time, or an overnight for a particular hotel and evening. Check the exact Beijing station, Tianjin station and both hotel transfers before comparing options.",
      },
      {
        slug: "datong",
        advice:
          "Datong adds Yungang's Buddhist sculpture and distinct northern temple history. It is a separate itinerary chapter, not a nearby Tianjin excursion. Establish the actual rail or road connection and protect a useful stay rather than taking time away from the caves to fit another city into the route.",
      },
      {
        slug: "pingyao",
        advice:
          "Compare Tianjin's port-city architecture with Pingyao's walled merchant-city setting and courtyard stays. The shared trading theme does not make them neighbors. Choose the transport sequence and nights deliberately, then assess whether both places add enough contrast for your available days.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are generally comfortable for architectural streets and riverside walks, with wind and temperature changes still possible. Summer can be hot, humid and rainy, so shorten exposed routes and use an indoor or hotel break. Winter brings cold conditions and wind by the river; choose warm layers and shorter outdoor sections. Holiday and weekend crowds can change the experience of popular streets. Pick the city's history, food and hotel setting as the core interests rather than relying on a particular evening sailing or seasonal view.",
    orientation:
      "Central Tianjin follows the Haihe, with several distinct historical districts rather than one old-town enclosure. Wudadao and the Italian-style area are different neighborhood choices. Binhai lies toward the coast, while Jizhou and Huangyaguan Great Wall belong to a different countryside and mountain direction. The municipality's large extent matters more than a shared Tianjin address: name the actual hotel, station, attraction or terminal before judging the journey.",
    experiences: [
      "Walk a selected Wudadao route with the buildings' residents, institutions and changing uses explained",
      "Enjoy a Haihe evening with a riverfront walk or separately confirmed sailing, leaving time for dinner",
      "Taste Tianjin breakfast and choose a focused craft or museum interest beyond a generic souvenir stop",
    ],
    planningNotes: [
      "Match the full railway station or cruise-terminal name to the actual hotel and route",
      "Choose central Tianjin, Binhai or Jizhou as distinct travel purposes before booking accommodation",
      "Keep building interiors, boats, craft hosts and performances separate from an exterior neighborhood walk",
    ],
    arrival:
      "Tianjin Binhai International Airport (TSN), Tianjin railway station, Tianjin West and Tianjin South are different gateways. Tianjin railway station is a useful central reference, but your particular train may use another station; follow the ticket. Binhai-area stations are not interchangeable with central Tianjin. From Beijing, the high-speed train ride is only one part of the day: include the correct Beijing station, boarding, luggage and both city transfers. Cruise guests need the ship's exact terminal instructions as well.",
    gettingAround:
      "Use planned road transfers between districts and shorter walks within them. A metro journey can work for independent time, with station access and luggage considered. Pedestrian streets, attraction entrances and river piers may require separate meeting points. Group nearby interests so the day is spent understanding the city rather than repeatedly finding the car. For a bicycle or other local sightseeing vehicle, review the provider, route and suitability before treating it as an easier substitute for walking.",
    stayStrategy:
      "For a first central-city stay, use one hotel and compare a genuine river setting with architectural-neighborhood convenience. Review the exact room, sleep, bathroom, climate control, breakfast and pickup. A special hotel is persuasive when the schedule leaves time to enjoy it. An overnight from Beijing adds value through a relaxed evening and morning; it adds less when transport leaves only a late check-in and early checkout. Coastal or countryside accommodation needs a different rationale and daily route.",
    firstTimerNote:
      "Tianjin is not a smaller version of imperial Beijing. Its appeal lies in a different historical argument: river commerce, foreign concessions, Chinese urban life and the way buildings and traditions have changed. Choose a few streets with good interpretation and a meal you will enjoy. That produces a fuller visit than rushing between several European-looking facades without understanding why they are there.",
    faqs: [
      {
        question: "Is Tianjin worth a day trip from Beijing?",
        answer:
          "Yes if architectural neighborhoods, river-city history and regional food appeal to you. Choose one main walk, lunch and a Haihe section around confirmed trains. If your Beijing stay is already short, protect its major sights first rather than adding Tianjin only because the rail ride looks short.",
      },
      {
        question: "How many days should I spend in Tianjin?",
        answer:
          "A focused day gives a central-city introduction. One night can add an evening and morning when trains fit; two nights normally provide one full day between travel days. Three nights allow a second full day for a distinct interest. Binhai or Jizhou visits need their own time and transfer assessment.",
      },
      {
        question: "Where should I stay in Tianjin for sightseeing?",
        answer:
          "Compare a central Haihe hotel with an address around Wudadao or Xiaobailou. Choose the exact room and location against the intended walks, meals and station transfer. Binhai suits a specific coastal-district or port purpose; Jizhou serves a separate countryside plan. Neither is an interchangeable central-city base.",
      },
      {
        question: "Are Wudadao and the Italian-style area the same place?",
        answer:
          "No. Wudadao, or the Five Great Avenues, and the Italian-style former-concession area are different architectural neighborhoods. Choose by the historical interest and available walking time. Seeing either district from the street does not establish access inside its historic buildings.",
      },
      {
        question: "Which Tianjin railway station should I use from Beijing?",
        answer:
          "Use the station pair that fits the actual train and complete route. Tianjin railway station provides a central reference, while Tianjin West, Tianjin South and Binhai-area stations serve different locations. Confirm the Beijing departure station as well, and allow transfers and boarding rather than comparing train duration alone.",
      },
      {
        question: "Can I visit Beijing from Tianjin cruise port?",
        answer:
          "It needs a separate assessment using the ship, exact terminal, date, disembarkation and required return time, entry eligibility, traffic and full road journey. Do not assume central Tianjin and Beijing sightseeing both fit. Establish the safe usable window and one priority before adding attractions.",
      },
      {
        question: "Is Huangyaguan Great Wall in central Tianjin?",
        answer:
          "No. Huangyaguan is in the Jizhou area of the wider municipality and needs a separate road excursion or countryside stay. Its slopes and steps require their own mobility review. It is not an extra city-center stop after a complete architecture day, nor automatically a substitute for a Beijing-based Wall route.",
      },
      {
        question: "What food should I try in Tianjin?",
        answer:
          "Jianbing guozi is a savory breakfast pancake commonly folded around a crisp or fried component. Goubuli is a well-known local baozi name, while mahua is a twisted fried snack. Styles, fillings and sauces vary. Choose dishes for your taste and ask about wheat, egg, sesame, soy, meat and shared preparation when relevant.",
      },
      {
        question: "Are Tianjin and Tientsin the same city?",
        answer:
          "Yes. Tientsin is an older English spelling seen in historical writing. Use Tianjin and the exact modern station, hotel or terminal name for travel bookings. Historical spellings should help identify the place, not create duplicate destination pages.",
      },
      {
        question: "Is Tianjin crosstalk suitable for English-speaking visitors?",
        answer:
          "Xiangsheng depends heavily on spoken Chinese and wordplay. It can interest Chinese speakers or learners, but is not automatically accessible to guests who expect an English-language show. Check the actual language and format before booking, and choose another cultural subject if comprehension is central to enjoying the evening.",
      },
    ],
    culturalStory: {
      title: "Read the city through trade, institutions and changing streets",
      paragraphs: [
        "Tianjin's architecture records its role as a river and port trading city. Former-concession districts contain different histories, building types and later uses; the broad label European-style is only the beginning of the explanation. On a selected walk, ask who commissioned a building, how it was used and what survives or has changed. A restored facade, a privately occupied residence and a public museum require different kinds of access and interpretation.",
        "Chinese commercial and artistic traditions add another dimension. Yangliuqing New Year prints can open a conversation about auspicious imagery, workshop practice and the relationship between printed outlines and hand coloring. A display can explain the craft without a promised private artisan meeting. Let the available venue and the depth of your interest determine whether this becomes a separate excursion; it should add understanding rather than function as an obligatory shop visit.",
      ],
    },
    foodStory: {
      title: "Begin with breakfast, then leave room for a proper lunch",
      paragraphs: [
        "Jianbing guozi is a useful introduction to Tianjin's breakfast habits: a freshly cooked pancake wrapped around a fried or crisp component, with savory condiments. Recipes and fillings vary, so ask what a stall uses rather than assuming every pancake is identical. Baozi offers another direction; Goubuli is a famous local name, not a generic translation of all steamed buns. Order a modest amount and eat it fresh instead of making breakfast a tasting competition.",
        "Mahua is a twisted fried snack, often bought to take away, and is different from a full meal. For lunch or dinner, choose a seated restaurant around your appetite, desired seasoning and the day's route. Wheat, egg, sesame, soy, meat fillings and shared cooking equipment matter for dietary needs. A helpful guide explains ingredients and local distinctions, while the best meal remains one the group actually enjoys rather than a list of famous names.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Make the overnight earn its place",
        description:
          "Transfer from the named station or airport to the central hotel. Use the available evening for a selected Haihe walk and dinner, or a separately confirmed river sailing. A late arrival leaves less reason to change hotels solely for one night.",
      },
      {
        day: "Full day 1",
        title: "An architectural walk and a different urban history",
        description:
          "Explore a manageable Wudadao route, leaving time for explanation, a seated break and lunch. Choose another distinct subject afterward, such as a collection-led museum visit or a focused culture-street introduction. Add the Italian-style area only when it contributes a useful comparison and the pace allows.",
      },
      {
        day: "Optional extra full day",
        title: "Choose a second subject, not another checklist",
        description:
          "Consider Yangliuqing printing traditions or a particular Binhai interest after reviewing venue access and transfers. Jizhou and Huangyaguan require their own road and walking plan and may suit a different base. This day needs an additional night or a departure that genuinely leaves a full usable day.",
      },
      {
        day: "Departure",
        title: "Continue through the exact gateway booked",
        description:
          "Allow the complete station, airport or port transfer. Beijing can follow with its own usable time; Datong or Pingyao require a deliberate onward connection and separate stay. This outline is illustrative, not a published package, and optional visits are not automatically included.",
      },
    ],
  },
};
