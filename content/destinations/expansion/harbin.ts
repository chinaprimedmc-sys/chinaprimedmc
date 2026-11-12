import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/harbin.svg",
  alt: "Harbin planning diagram separating a central city base, a confirmed seasonal ice visit and a separately planned ski extension; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const harbinGuide: ExpandedDestination = {
  id: "harbin",
  name: "Harbin",
  region: "northeast",
  kicker: "Ice artistry, railway-city history & winter days with room to warm up",
  description:
    "Plan Harbin around the actual seasonal ice attractions, a comfortable hotel and manageable outdoor sessions, with city architecture and regional meals giving the stay depth.",
  stay: "3–4 nights for a winter introduction",
  bestFor: "Winter ice art, city history and a thoughtful family pace",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["changbai-mountain", "beijing", "shanghai", "shenyang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Harbin Travel Guide: Ice Festival, Hotels & Winter Plans",
    seoTitle: "Harbin Travel Guide: Ice Festival & Hotels",
    seoDescription:
      "Plan Harbin's winter ice attractions with date checks, hotel-area advice, warm-up breaks, clothing and a realistic city or ski extension tailored to your group.",
    answer:
      "Harbin is Heilongjiang's capital in northeast China, known for large seasonal ice and snow installations and a cityscape shaped in part by railway development and international exchange. Harbin Ice and Snow World, the Sun Island snow-sculpture exhibition and central-city sights are different visits, not one festival gate. Choose the actual operating attractions before fixing winter dates. Beyond the ice season, the city still offers architecture, riverfront time and regional food, but should not be sold as the same winter holiday with the sculptures removed.",
    stayAnswer:
      "Three nights give two full days for a selected city introduction and a confirmed seasonal ice visit, with warm-up breaks and a sensible evening. Four nights provide another day for a separate snow-sculpture interest, museum or slower family pace. Two nights can suit one focused full day when flights or trains align, but should not promise every winter park and a ski excursion. A ski or rural snow stay is a separate route and accommodation decision rather than spare time within the city visit.",
    hotelAnswer:
      "Compare Daoli and the Central Street surroundings for city walks and meal choices, a particular river-facing property for its real view and access, or Songbei for the actual hotel's relationship to the selected attractions north of the river. Songbei is a wide area, not a guarantee of a short walk to an ice venue. Choose reliable room heating, a practical pickup, breakfast and nearby warm meals. A central label does not mean every entrance or vehicle meeting point is convenient in severe cold.",
    sightseeingQuestion: "When should you book Harbin for the ice festival?",
    sightseeingAnswer:
      "Book around the current season's actual opening information for the named attractions you want, rather than assuming a ceremonial festival date is the opening date of every park. Ice construction, trial opening, full visitor operation and closure can follow different schedules and depend on conditions. January is commonly considered for winter installations, but no month alone guarantees a specific venue or feature. Before committing to the wider trip, confirm operating dates, visitor arrangements and a city alternative if conditions change.",
    visitorResources: [
      {
        label: "Harbin municipal government",
        href: "https://www.harbin.gov.cn/",
        scope:
          "City background and public notices. Check current seasonal attraction announcements and the actual operator's tickets, opening hours and visitor instructions separately.",
      },
      {
        label: "Heilongjiang provincial government",
        href: "https://www.hlj.gov.cn/",
        scope:
          "Provincial context and public information. This does not verify a particular ice venue, ski resort, winter activity, temperature forecast or guest-room heating.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Harbin stay with the named hotel, guide, road transfers, attractions and admissions itemized in the proposal. Private road service should have a clear pickup and warm-up plan, but it does not allow unrestricted vehicle access inside pedestrian or ice venues. Slides, rides, ski lessons, equipment, performances and special activities are included only when stated. A private guide does not remove public queues or guarantee all seasonal features will operate.",
    routeAdvice:
      "Harbin can be a dedicated winter city chapter connected with Beijing or another confirmed gateway. Decide the actual ice venues and suitable outdoor pace before adding skiing or a rural snow stay. Yabuli and Xuexiang require their own road or rail sequence, property review and usable nights; they are not interchangeable city attractions. There is no published Harbin package recommended here. The sample outline is illustrative, and the final proposal should distinguish city services from any separately planned extension.",
    practicalPlanning: {
      timing:
        "Keep outdoor sessions manageable and make indoor meals and breaks part of the itinerary rather than an emergency fallback. An evening ice visit uses transfer, entrance, walking and return time; do not precede it with an exhausting full day outdoors. A snow-sculpture exhibition has its own daylight and visitor conditions. Work from actual opening, last entry and transport arrangements, not simply the time a landmark is illuminated in a photograph.",
      walking:
        "Snow, compacted ice, steps and slippery entrances can change the difficulty of a short city walk. Use suitable insulated footwear with grip and a route matched to balance and cold tolerance. Review the actual venue and assistance for mobility needs; an icy open space is not automatically accessible. Keep children and less cold-tolerant guests on a shorter plan, and do not assume the same exposure time suits everyone in a private group.",
      cost: "Compare room and heating, guide and vehicle service hours, named attraction tickets and any separately charged activity. Evening service, distant transfers, ski equipment, lessons and specialist clothing arrangements can change the quote. Confirm cancellation terms for seasonal operations. A premium should buy identifiable comfort, planning or service, not a promise of private ice parks, zero queues or guaranteed snow conditions.",
    },
    attractions: [
      "Harbin Ice and Snow World, subject to the actual seasonal operation",
      "Sun Island seasonal snow-sculpture exhibition",
      "Central Street / Zhongyang Dajie",
      "Saint Sophia Cathedral square and confirmed interior access",
      "Selected Songhua River waterfront routes",
    ],
    stays: [
      {
        label: "2 nights: one focused full day",
        advice:
          "Choose a confirmed winter venue and a short city interest, with warm meals and rest. Late arrival, heavy luggage or an early flight can remove the useful extra windows that a short visit depends on.",
      },
      {
        label: "3 nights: city context and an ice visit",
        advice:
          "Separate a manageable architectural introduction from the main seasonal venue. Allow a slower morning after an evening outing rather than scheduling another predawn start automatically.",
      },
      {
        label: "4 nights or more: choose a second subject",
        advice:
          "Add a separate snow-sculpture visit, confirmed museum or more comfortable family pace. Skiing or a rural snow overnight needs its own complete plan; extra city nights alone do not establish a useful resort day.",
      },
    ],
    hotelAreas: [
      {
        name: "Daoli and Central Street surroundings",
        advice:
          "Consider for architecture, meals and selected evening walks. Verify the actual street, road pickup, room heating and noise. A pedestrian setting may mean a final outdoor walk with luggage, so agree the vehicle-to-door approach in advance.",
      },
      {
        name: "Specific Songhua River-facing properties",
        advice:
          "Choose the booked room and its real outlook, not a general river-view label. Confirm access to dining, the winter walkway and vehicle collection. An attractive river scene does not establish permission or safety to walk onto ice.",
      },
      {
        name: "Songbei and northern-river accommodation",
        advice:
          "Compare the individual hotel's room, facilities and road journey to your selected seasonal venues. The district covers a broad area; proximity on a map does not remove traffic, public entrances or exposed walking. Include the return to city interests and the departure gateway.",
      },
    ],
    tradeoffs: [
      {
        title: "A festival name is not a single ticket or fixed operating window",
        advice:
          "Name the actual attraction, date and ticket category in the proposal. Large ice installations, snow sculpture, public decorations and individual activities can have separate access and schedules. Verify what is operating for the travel year rather than copying dates from an older season. Do not imply every festival feature opens together or remains available until the same day.",
      },
      {
        title: "Cold-weather comfort is part of the experience design",
        advice:
          "Use insulating layers, a protective outer layer, warm hat, gloves and suitable boots, chosen for actual conditions and personal needs. Discuss dry spare items, indoor breaks and the pickup plan before a long outing. Phone and camera batteries can lose performance in cold; keep practical essentials available without turning photography into prolonged exposure. Seek personal medical advice when needed rather than assuming a city tour suits every health condition.",
      },
      {
        title: "The frozen river is not unrestricted public terrain",
        advice:
          "Use only currently authorized visitor routes or supervised activities and follow local closures. A frozen-looking surface, another visitor's photograph or a guide's presence is not proof that independent ice walking is safe. Motor, sled and animal-based activities require separate suitability and operator assessment. A riverfront walk can be enjoyed without going onto the ice.",
      },
      {
        title: "City heritage deserves more than a European-facade label",
        advice:
          "Central Street and Saint Sophia's surroundings make more sense through railway development, migration and the city's changing communities. Distinguish the exterior square from whatever interior use and admission is actually available. Select a coherent walk with interpretation, acknowledging different historical layers rather than describing Harbin simply as a Russian city preserved unchanged.",
      },
      {
        title: "Skiing and rural snow stays are separate holidays within the route",
        advice:
          "Yabuli resort choices and Xuexiang village stays have different purposes, access and accommodation. Establish the real journey, equipment, teaching language, slope suitability and property facilities where relevant. Neither should be sold as an effortless spare-afternoon addition. For a short trip, a good city stay can be better than repeated long transfers for experiences the group does not strongly want.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "changbai-mountain",
        advice:
          "Changbai Mountain offers a separate crater-lake, forest or ski stay in Jilin. Choose its actual side, property and gateway, and allow the full connection from Harbin. Give skiing and scenic visits their own useful days rather than attach the mountain to a short city ice-festival itinerary.",
      },
      {
        slug: "shenyang",
        advice:
          "Shenyang adds an early Qing palace, imperial-tomb landscape and regional collections, a different subject from Harbin's railway-city history and seasonal ice art. Check the exact train and both hotel transfers, and give each city useful days. Winter comfort and attraction operation need separate review in each place.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing adds imperial history and a Great Wall visit with a different outdoor plan. Compare actual trains or flights and both hotel transfers; do not assume a winter travel day is another full sightseeing day. Review clothing and comfort across both destinations rather than scheduling prolonged exposure every day.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai offers a different urban and climate setting after a northern winter chapter. Check the actual flight, airport and arrival transfer before adding city touring. A broad China itinerary can combine them, but the connection is a dedicated travel decision rather than a local excursion.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose winter for the seasonal ice and snow venues only after checking the actual year's operation. Cold can be severe, and warm-up breaks are essential to a comfortable route. Summer and early autumn offer a different city visit with architecture, food and riverfront time, without the winter ice installations. Spring thaw and autumn transitions bring other weather and surface conditions. Do not use a single fixed festival date, snowfall promise or temperature figure as a substitute for a date-specific plan.",
    orientation:
      "Harbin is the capital of Heilongjiang in northeast China. Central Street lies on the established city side of the Songhua River, while Sun Island and major north-river venues require separate access. Harbin, Harbin West and Harbin North railway stations are different gateways; Taiping airport adds its own road journey. Yabuli and Xuexiang are outside the central-city plan. Confirm the exact station, venue and hotel before comparing transfer times or choosing a base.",
    experiences: [
      "Enjoy a confirmed seasonal ice installation through a manageable route with planned warm-up and return arrangements",
      "Read Central Street and Saint Sophia's surroundings through railway history and changing communities",
      "Make a northeast-China meal and comfortable indoor pause part of the day rather than a rushed gap between outdoor activities",
    ],
    planningNotes: [
      "Verify the actual season and named attraction rather than treating every ice-festival reference as one booking",
      "Review footwear, balance, cold tolerance and indoor breaks before fixing outdoor duration",
      "Choose the exact hotel and gateway, and plan skiing or rural snow accommodation separately",
    ],
    arrival:
      "Use the airport terminal or railway station shown on the actual ticket. Harbin, Harbin West and Harbin North are not interchangeable pickups. Confirm the indoor meeting point where possible, luggage and the vehicle approach to the hotel so guests are not left searching outdoors. Winter disruptions can affect travel; keep the arrival evening simple and avoid making an expensive timed venue depend on a tight connection.",
    gettingAround:
      "Road transfers can connect the selected city and north-river interests, with walking inside venues and pedestrian streets. Agree the pickup location, communication and quoted service hours for an evening visit. Do not assume a private vehicle enters an ice park or waits beside every viewpoint. Weather, traffic and slippery surfaces can slow the day, so fewer well-chosen visits and reliable indoor breaks often improve the holiday.",
    stayStrategy:
      "Choose one base that balances the actual attractions, room comfort and meals. Review heating, bedding, ventilation, bathroom, coat storage, breakfast and vehicle collection. A room category or riverside photograph does not prove warmth or convenient winter access. Families may value connecting-room arrangements and a simple warm meal more than a dramatic location; these need actual confirmation. Move to a ski resort or rural property only when the distinct stay justifies packing and another transfer.",
    firstTimerNote:
      "Harbin's winter appeal is strongest when the day remains comfortable enough to enjoy it. A selected ice visit, an interpreted city walk and a good meal can make a fuller introduction than several outdoor parks in succession. Rides, slides, skiing and river activities are optional. Outside winter, choose the city for its own architecture and regional context rather than promising a substitute version of the ice festival.",
    faqs: [
      {
        question: "When is the Harbin Ice Festival open?",
        answer:
          "Check the actual season's announcements for each named venue. Ceremonial dates, trial opening, full operation and closure are not necessarily the same, and weather can affect arrangements. January is commonly considered for winter installations, but do not book a specific feature on the month alone.",
      },
      {
        question: "How many days should I spend in Harbin in winter?",
        answer:
          "Three nights give two full days for city context and a selected ice visit with breaks. Four nights add another subject or slower family pace. Two nights require a focused plan, and ski or rural snow extensions need separate travel time and accommodation decisions.",
      },
      {
        question: "Are Ice and Snow World and Sun Island the same attraction?",
        answer:
          "No. They are different visits with their own seasonal operation, tickets and visitor arrangements. Distinguish large ice installations from the snow-sculpture exhibition and confirm what is operating for your dates. A general festival reference does not identify a single admission covering everything.",
      },
      {
        question: "Where should I stay in Harbin for winter sightseeing?",
        answer:
          "Compare a Daoli or Central Street-area property for meals and city walks with a particular Songbei hotel for its actual relationship to the chosen north-river venues. Check heating, pickup and final outdoor approach. Neither district name guarantees a short walk to every attraction.",
      },
      {
        question: "What should I wear in Harbin in winter?",
        answer:
          "Plan insulating layers, a protective outer layer, warm head and hand coverage and insulated footwear with suitable grip for the actual forecast and personal needs. Keep outdoor sessions manageable, with dry spares and indoor breaks where appropriate. A warm vehicle does not remove exposure inside pedestrian venues.",
      },
      {
        question: "Is Harbin suitable for children in winter?",
        answer:
          "It can be with a route designed for the children's ages, cold tolerance and needs, including shorter outdoor sessions, suitable clothing and dependable indoor meals and rest. Check each activity's rules and physical demands. Do not assume every slide, long queue or late ice visit suits every child.",
      },
      {
        question: "Can I visit Yabuli or Xuexiang as a short Harbin outing?",
        answer:
          "Treat them as separate excursion or overnight decisions with full road or rail travel and actual services checked. Skiing needs equipment, lessons and suitable slopes if wanted; a rural snow stay needs its own room and heating review. They are not interchangeable city attractions or guaranteed spare-afternoon additions.",
      },
      {
        question: "Is Harbin worth visiting outside winter?",
        answer:
          "It can suit an interest in railway-city history, architecture, regional food and riverfront time in the appropriate weather. Choose it for that different visit rather than expecting winter installations year-round. The right length of stay depends on the actual city and regional interests you select.",
      },
    ],
    culturalStory: {
      title: "Look past the facade to the railway city",
      paragraphs: [
        "Harbin's streets make more sense when connected to railway development and the movement of people, skills and trade. Architectural details can introduce different periods and communities, but an attractive facade alone does not tell a building's whole story. A focused walk around Central Street and Saint Sophia's surroundings can explain changing uses and urban relationships without assuming every historic interior is open.",
        "The city should not be reduced to a single foreign influence or an unchanged European image. Local life, northeast-China identity and multiple historical layers belong in the interpretation. Ice and snow installations are another expression of the city, involving contemporary design and seasonal work rather than simply a natural spectacle. Giving both city history and present-day creation time makes a winter visit more substantial than moving between illuminated photographs.",
      ],
    },
    foodStory: {
      title: "Let a warm table set the winter rhythm",
      paragraphs: [
        "Dumplings, stews and other northeast-China dishes can provide a welcome seated meal between outdoor sessions. Harbin red sausage, hongchang, and Russian-influenced breads offer other directions, but ask what the actual product contains and how it is served. A food introduction can compare methods and influences without implying every local specialty belongs to one cuisine or that everyone must enjoy the same rich meal.",
        "Choose a restaurant with suitable seating, reliable access and dishes that fit the group. Pork, wheat, dairy, stocks and shared cooking can matter for dietary requirements; a sausage name or vegetarian-looking plate is not enough to establish ingredients or preparation. Confirm breakfast for early departures and dinner after an evening venue. A planned warm meal is part of good winter pacing, not merely time left over after every activity has been added.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Meet indoors and reach a comfortable base",
        description:
          "Use the actual gateway and agreed pickup, allow baggage and the final hotel approach, and keep the first meal simple. Do not attach a fixed evening venue to an uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "City history and a confirmed ice visit",
        description:
          "Choose a short architectural introduction, a warm lunch and rest before the selected seasonal venue. Allow the complete entrance, walking and return plan; rides and features depend on actual operation and separate inclusion.",
      },
      {
        day: "Full day 2",
        title: "A second subject with a manageable outdoor window",
        description:
          "Consider the operating snow-sculpture exhibition, a confirmed museum or another city interest. Match exposure and breaks to the group rather than assuming another long day outside is essential.",
      },
      {
        day: "Optional extra full day",
        title: "Slow the pace or plan a distinct extension",
        description:
          "Use the extra time for family comfort or a separate interest. Any ski or rural snow chapter needs a complete travel and accommodation plan; it is not automatically included because another night is available.",
      },
      {
        day: "Departure",
        title: "Protect the real winter gateway transfer",
        description:
          "Allow the full road journey and appropriate travel margin for the named station or airport. This outline is illustrative, not a published package or a guarantee of specific seasonal attractions or weather.",
      },
    ],
  },
};
