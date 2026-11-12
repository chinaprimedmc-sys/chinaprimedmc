import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/hong-kong.svg",
  alt: "Hong Kong planning schematic comparing Hong Kong Island, Kowloon and a separate island or cross-boundary chapter; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const hongKongGuide: ExpandedDestination = {
  id: "hong-kong",
  name: "Hong Kong",
  region: "south",
  kicker: "Choose a neighborhood, not just a skyline",
  description:
    "Plan Hong Kong around the right Island or Kowloon base, architecture, food and selected cultural visits, with realistic walking and separately confirmed mainland or Macao connections.",
  stay: "4–5 nights for a considered first visit",
  bestFor: "Urban culture, food, architecture and a well-planned regional gateway",
  interests: ["city", "heritage", "food"],
  relatedDestinationIds: ["macao", "shenzhen", "guangzhou", "taipei"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Hong Kong Travel Guide: Island or Kowloon & Where to Stay",
    seoTitle: "Hong Kong Travel Guide: Areas, Food & Stays",
    seoDescription:
      "Choose Hong Kong Island or Kowloon for a 4–5-night stay, with hotel-area tradeoffs, food, West Kowloon museums, walking and cross-boundary planning.",
    answer:
      "Hong Kong (香港) is a Special Administrative Region with distinct immigration arrangements, its own currency and a geography of dense urban neighborhoods, islands and country parks. A good first visit combines one Island-side neighborhood route, a different Kowloon or museum subject, and time for food rather than a race between skyline viewpoints. Hong Kong Island is only one part of Hong Kong. Choose the exact hotel and daily routes first; a harbor view does not establish quiet, convenient walking or the same transfer to the airport, railway station and ferry terminal.",
    stayAnswer:
      "Four nights provide three full days for different urban subjects and an unhurried meal rhythm. Five nights allow a separate island, landscape or deeper cultural interest without making every day a transfer. Three nights can work as a focused stopover with convenient flights, but leaves less time after arrival. A Macao or mainland chapter needs its own crossing, entry eligibility and useful time; it should not silently consume the only full Hong Kong day. Decide whether the visit is a real city stay or primarily a gateway before fixing nights.",
    hotelAnswer:
      "Choose Central or Sheung Wan for selected Island-side architecture, streets and dining; Admiralty or Wan Chai can suit a specific hotel and a different daily pattern. Tsim Sha Tsui provides a Kowloon harbor-and-museum base, while a West Kowloon property serves another set of routes. Compare the room, noise, actual floor area, bedding, lifts, breakfast and transport approach. A luxury label or a harbor-facing photograph does not answer those questions. The easiest hotel is the one that supports the places and evenings you will actually use.",
    sightseeingQuestion:
      "Should you choose Hong Kong Island, Kowloon, the Peak or an outlying island?",
    sightseeingAnswer:
      "Begin with an Island-side neighborhood and a contrasting Kowloon or West Kowloon subject. The Peak adds a viewpoint when visibility and its transport arrangements suit the day; a museum adds a different kind of depth. Lantau or another outlying island requires its own usable day and route rather than being another stop across the harbor. Choose by architecture, food, art, walking or landscape interest. A private vehicle can help with selected journeys, but ferries, MTR and walking may serve parts of the city better than keeping a car for every hour.",
    visitorResources: [
      {
        label: "Hong Kong Tourism Board",
        href: "https://www.discoverhongkong.com/eng/index.html",
        scope:
          "Official destination background and planning information. Confirm current venue access, exhibitions, events and transport through the responsible institution or operator. A tourism listing does not establish a private host, restaurant reservation or exclusive access.",
      },
      {
        label: "Hong Kong Immigration Department",
        href: "https://www.immd.gov.hk/eng/",
        scope:
          "Official Hong Kong entry and immigration information. Check the actual passport, purpose, stay and onward journey. Permission to enter mainland China does not itself determine Hong Kong eligibility, and the reverse also applies; a return to the mainland requires its own valid arrangement.",
      },
      {
        label: "MTR passenger information",
        href: "https://www.mtr.com.hk/en/customer/main/index.html",
        scope:
          "Official local rail, Airport Express and high-speed rail information. Confirm the exact station, ticket, current service and border process where applicable. Kowloon, Austin and Hong Kong West Kowloon are not interchangeable names for one boarding point.",
      },
      {
        label: "Hong Kong–Zhuhai–Macao Bridge: Hong Kong government portal",
        href: "https://www.hzmb.gov.hk/en/",
        scope:
          "Official bridge and Hong Kong Port background. Check actual service arrangements, port locations, documents and onward transfers. A bridge connection does not imply that an ordinary hired car can cross, that passengers remain in one vehicle or that port arrival is a central hotel arrival.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the room, exact gateway, selected neighborhood route, local guiding, meals and any reserved museum or dining arrangement. Hong Kong delivery and local providers must be confirmed separately rather than assumed from a mainland guide-and-driver booking. Define the days when a guide or vehicle adds value, and where local rail, ferry or walking is more appropriate. Cross-boundary services need their own eligible provider, documents, luggage plan, operating window and terms. A standard mainland vehicle booking does not automatically include Hong Kong, and a private transfer does not bypass immigration.",
    routeAdvice:
      "Hong Kong can be a substantial city stay or a gateway to a separately planned Shenzhen, Guangzhou or Macao chapter. Check immigration eligibility and the complete hotel-to-hotel connection in both directions, especially if leaving and returning to the mainland. No matching published Hong Kong sightseeing product is recommended here. The existing Guangzhou–Shenzhen business itinerary treats Hong Kong services separately and is not a Hong Kong city-tour product. Use the illustrative four-night outline to request a locally confirmed stay, with real neighborhoods and reservations rather than a transfer sold as a destination visit.",
    practicalPlanning: {
      timing:
        "Group visits by neighborhood and leave a real meal window. A Central-and-Sheung Wan walk, a West Kowloon museum visit and a Lantau day have different transport and energy needs. Check museum reservations, exhibition dates and closures before setting the sequence. Place a visibility-dependent viewpoint flexibly rather than making it the only essential event. A cross-boundary departure needs time for its actual formalities, not only the published train or ferry duration.",
      walking:
        "Hong Kong can involve hills, stairs, elevated walkways, station corridors and standing even when places look close on a map. Central's upper streets are a different walk from a waterfront promenade. Review the actual step-free route, lifts, rest points, toilets and hotel approach. An escalator or MTR station does not guarantee effortless access throughout a neighborhood. For islands, hikes or boat trips, assess terrain and boarding separately; a city vehicle cannot remove those demands.",
      cost: "Compare the quoted room's actual size, view, occupancy, bedding, breakfast and total charges. A partial harbor view, a suite and a connecting-room arrangement are different products. Dining deposits, cancellation terms, special menus, museum tickets and private guide hours need their own basis. Cross-boundary services can materially change the total. State what is priced in Hong Kong dollars and confirm accepted payment; do not assume mainland app, currency or account arrangements work identically everywhere.",
    },
    attractions: [
      "Central and Sheung Wan through a selected architecture, street or food route",
      "Victoria Harbour and a defined promenade or ferry journey",
      "The Peak with the actual transport, walking and visibility considered",
      "M+ or the Hong Kong Palace Museum in West Kowloon, chosen by current exhibitions",
      "A selected Tsim Sha Tsui, Jordan or other Kowloon neighborhood interest",
      "Lantau, an outlying island or a suitable country-park route as a separate day",
    ],
    stays: [
      {
        label: "3 nights: a focused stopover",
        advice:
          "Choose two distinct city subjects when flights leave useful time. Keep one base and protect meals. Adding a Macao day or a distant island can use much of the short stay; decide whether that is more valuable than a deeper Hong Kong introduction.",
      },
      {
        label: "4 nights: a balanced first city stay",
        advice:
          "Three full days allow an Island-side route, a contrasting Kowloon or museum day and a flexible subject. Leave evenings for dining rather than requiring a fixed tour every night. A viewpoint can move with visibility when the bookings permit.",
      },
      {
        label: "5 nights or more: another island, landscape or deeper interest",
        advice:
          "Add a separate Lantau or other island day, more art or a particular food interest. A mainland or Macao extension needs its own eligibility and crossing plan. Extra nights should provide usable time, not a requirement to book a different hotel on each side of the harbor.",
      },
    ],
    hotelAreas: [
      {
        name: "Central / Sheung Wan / a selected Island-side base",
        advice:
          "Useful for chosen architecture, streets, dining and specific transport links. Review hills, stairs, actual room noise and pickup; a harbor-near address may still have an awkward final approach. Compare the room's floor area and light, not only a neighborhood reputation or rooftop photograph.",
      },
      {
        name: "Admiralty / Wan Chai / a different Island-side pattern",
        advice:
          "Choose a named property for its relation to actual visits, meals or business commitments. A hotel above or beside a transport hub can be convenient while involving long internal corridors. Confirm the useful entrance, street-level approach and quiet room rather than assuming an Island address puts every evening within a short stroll.",
      },
      {
        name: "Tsim Sha Tsui / Kowloon waterfront and urban access",
        advice:
          "Compare the actual promenade route, museums, dining and station approach. A harbor-view room may face a different part of the water or require a different daily transfer from an Island hotel. Check street noise, lifts and luggage access. Crossing the harbor can be enjoyable, but should not be repeated unnecessarily between every activity.",
      },
      {
        name: "West Kowloon or an outlying base / a clear purpose",
        advice:
          "West Kowloon can support specific museums and rail connections, while an airport or island property serves another stay entirely. Review the actual access to evening meals and planned visits. A property near Kowloon station is not automatically beside the high-speed train's boarding point, and an airport hotel is not the same city experience.",
      },
    ],
    tradeoffs: [
      {
        title: "Island or Kowloon is a route choice, not a quality ranking",
        advice:
          "Both contain very different hotels and neighborhoods. Choose by the actual room and the balance of visits, dinner and arrival. A harbor view can be attractive without making a property the easiest base. One good hotel usually serves a four-night city visit better than moving across the harbor for another similar room, unless the second stay has a clear purpose.",
      },
      {
        title: "M+ and the Hong Kong Palace Museum are separate institutions",
        advice:
          "M+ focuses on visual culture, while the Hong Kong Palace Museum provides a different museum subject. Both are in West Kowloon, but current galleries, tickets, special exhibitions and opening arrangements need individual review. The latter is not a visit to Beijing's Palace Museum. Choose a real collection interest and enough time to look rather than promising every headline artwork or both museums in a hurried gap.",
      },
      {
        title: "A private car is useful selectively, not automatically all day",
        advice:
          "Waterfront walks, MTR and a chosen ferry journey can be more natural parts of the city than repeated road pickups. A private vehicle helps with luggage, particular access needs or a well-defined outlying route. Agree the actual service window and pickup point, with parking and pedestrian restrictions understood. A car does not remove neighborhood hills, museum walking or formalities at a border.",
      },
      {
        title: "A mainland connection is an immigration and logistics decision",
        advice:
          "Hong Kong has separate entry arrangements. High-speed rail, cross-boundary road services and different checkpoints create different journeys and luggage handling. Confirm the guest's permission for each entry and any return, the exact terminal and current process. A visa valid for one mainland entry may not support a second entry after Hong Kong. Do not infer eligibility or a through-car service from a short map distance to Shenzhen.",
      },
      {
        title: "The Peak and island routes should work with conditions",
        advice:
          "Visibility, weather and operating arrangements affect a viewpoint, ferry or exposed walk. A Peak Tram ticket, taxi arrival and a longer path are different visits. An outlying-island meal or village route needs its own crossing and return plan. Retain a worthwhile city or museum alternative rather than guaranteeing a skyline photograph or empty island because the tour is private.",
      },
      {
        title: "High-end dining needs a real reservation, not a category promise",
        advice:
          "A chef's counter, tasting menu, tea session and neighborhood meal have different lead times, deposits, dietary capacity and atmosphere. Name the venue only when an actual proposal can confirm it. Awards and reputation do not establish availability, a private dining room or suitability for every guest. A thoughtful local meal can be as important to the city experience as an ambitious restaurant booking.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "taipei",
        advice:
          "Taipei offers another substantial city stay with museums, tea and distinct neighborhoods. Compare actual flights and both airport transfers, checking Taiwan and Hong Kong entry separately. Local providers and services need their own confirmation; this is not an included extension to a mainland or Hong Kong booking.",
      },
      {
        slug: "macao",
        advice:
          "Macao adds a different historic-city and resort contrast. A day trip and an overnight offer different experiences, and both need current crossing, terminals and separate entry eligibility. Compare the complete hotel-to-hotel journey rather than assuming the ferry or bridge segment is the whole transfer.",
      },
      {
        slug: "shenzhen",
        advice:
          "Shenzhen adds contemporary design, business or a defined urban interest on the mainland. Confirm the exact checkpoint or rail service, entry eligibility and final hotel transfer. A Hong Kong guide-and-car booking does not automatically include cross-boundary service or the mainland day.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds Cantonese food and trading-city history, or a separately planned business agenda. Give it useful time and check the actual rail station or road service. The existing Guangzhou–Shenzhen product prices Hong Kong-related services separately rather than supplying a complete Hong Kong sightseeing stay.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler part of the year often suits urban walks, with variable cloud, visibility and cooler periods still possible. Summer brings heat, humidity and rain that can change the pace; typhoon-related arrangements may affect transport and outdoor services. Spring can also bring haze or fog. Choose dates for the whole journey, keep exposed activities flexible and check official notices closer to travel. A museum or food-led alternative should be a useful part of the plan, not a placeholder for a guaranteed skyline view.",
    orientation:
      "Hong Kong Island, Kowloon, the New Territories and outlying islands are different geographies. Central is not the whole destination, and Lantau is not an extra neighborhood across the urban harbor. Hong Kong International Airport is on Chek Lap Kok; Airport Express stations, Hong Kong West Kowloon high-speed rail and ferry terminals have different functions. Use exact addresses and the ticketed terminal before comparing transfers. Hong Kong dollars and local entry arrangements should not be confused with mainland currency or immigration.",
    experiences: [
      "Read a selected Island-side neighborhood through architecture, commerce and a well-chosen meal",
      "Choose a contrasting Kowloon or museum subject with current access and enough time to understand it",
      "Add an island, landscape or cross-boundary chapter only when the full route and usable days justify it",
    ],
    planningNotes: [
      "Choose the actual room and neighborhood around daily routes, dinner and the real arrival gateway",
      "Confirm museums, dining, local guiding and any cross-boundary services individually",
      "Review entry eligibility for Hong Kong, Macao and every mainland entry separately",
    ],
    arrival:
      "Hong Kong International Airport uses code HKG. Compare the complete road or Airport Express journey to the actual property, including luggage and the last connection. Hong Kong West Kowloon is the high-speed rail terminal, distinct from Kowloon Airport Express and Austin MTR stations, even when a walk connects parts of the area. Mainland train journeys have their own immigration process and arrival needs. Send the exact ticket and terminal rather than a generic Hong Kong pickup instruction.",
    gettingAround:
      "Use a considered combination of walking, local rail, a selected ferry or tram and private transfers where useful. Confirm the actual route, service hours and weather arrangements. A tram ride is a public urban experience unless a specific charter is separately contracted. Hills, station walking and pedestrian streets remain even with a driver. For Macao or mainland travel, add the actual crossing and onward vehicle plan rather than assuming a local city service continues through the boundary.",
    stayStrategy:
      "Start with one base for four or five nights, choosing the room category before comparing headline rates. Check size, beds, bathroom, noise, view, breakfast and the useful street or station entrance. For families, confirm occupancy and actual connecting-room arrangements; for couples, assess quiet and the evenings they want. A high-end stay earns its value through comfort, location, service and thoughtful reservations rather than a list of distant compulsory sights.",
    firstTimerNote:
      "Hong Kong rewards a day with a clear neighborhood focus. Let one walk, museum or meal lead the sequence instead of crossing the harbor repeatedly to collect landmarks. You can enjoy local transport as part of the experience without making every journey independent, and use a private transfer when it solves a real problem. The most useful plan shows how the city day actually works from the booked room to dinner.",
    faqs: [
      {
        question: "Should I stay on Hong Kong Island or in Kowloon?",
        answer:
          "Choose by the actual room, daily visits, dinner and arrival rather than a universal ranking. Central and Sheung Wan suit selected Island-side routes; Tsim Sha Tsui offers a different Kowloon pattern. Compare hills, noise, room size and the full station or airport connection before deciding on the harbor view alone.",
      },
      {
        question: "How many nights should I spend in Hong Kong?",
        answer:
          "Four nights allow three full days for contrasting city subjects and meals. Five add an island, landscape or deeper interest. Three can work with convenient flights. A Macao or mainland visit uses real crossing time and should not quietly replace the only full city day.",
      },
      {
        question: "Does a mainland China visa cover entry to Hong Kong?",
        answer:
          "Hong Kong has separate entry arrangements. Check current Immigration Department guidance for the actual passport, purpose and stay. Also confirm any onward or return mainland entry separately. A mainland visa or Hong Kong entry permission should not be treated as a universal authorization for the whole regional trip.",
      },
      {
        question: "Are Kowloon station and Hong Kong West Kowloon station the same?",
        answer:
          "No. Kowloon serves the Airport Express and local rail context, while Hong Kong West Kowloon is the high-speed rail terminal. Austin is another MTR station. Connections may involve walking, but the boarding points and procedures differ. Use the full ticketed station for luggage, pickup and timing.",
      },
      {
        question: "Do I need a private driver every day in Hong Kong?",
        answer:
          "Usually not. Selected walks, MTR and ferries can serve parts of the city well. A vehicle is useful for luggage, access needs or a defined outlying route. Agree service windows and meeting points rather than assuming a car removes hills, pedestrian approaches or cross-boundary formalities.",
      },
      {
        question: "Can I see M+ and the Hong Kong Palace Museum in one visit?",
        answer:
          "They are separate institutions in West Kowloon, with their own tickets, galleries and current exhibitions. Choose by subject and usable time. Combining them is possible only when the actual arrangements and pace suit you; the Hong Kong Palace Museum is not a visit to Beijing's Palace Museum.",
      },
      {
        question: "Is Macao an easy day trip from Hong Kong?",
        answer:
          "A focused visit can work when the complete crossing, entry eligibility, terminals and local transfers fit. The ferry or bridge segment alone is not the full journey. An overnight gives more time for Macao's historic area, a meal or a particular property without rushing back the same evening.",
      },
      {
        question: "Can the same private car take me from Shenzhen to my Hong Kong hotel?",
        answer:
          "Only with a separately confirmed eligible cross-boundary service and the applicable traveler arrangements. A normal mainland or Hong Kong city vehicle booking does not establish through access. Check the checkpoint, luggage handling, service window and whether changing vehicles is part of the actual plan.",
      },
    ],
    culturalStory: {
      title: "Read the city at street level as well as across the harbor",
      paragraphs: [
        "Hong Kong's skyline offers an introduction, but its neighborhoods reveal different layers of trade, migration, housing, religion and contemporary culture. A selected Central or Sheung Wan route can connect buildings with the streets around them; a Kowloon day tells another story. A museum adds interpretation of a different kind. The aim is to explain a few places clearly rather than imply that a single viewpoint captures the whole destination.",
        "Markets, temples and residential streets remain working and personal spaces. A guided walk is not permission to enter homes, photograph worshippers or interrupt a business. Choose public access or a genuinely arranged host and explain contemporary use rather than describing every old-looking building as unchanged heritage. Good local interpretation can make ordinary details legible without promising private access or a staged authentic encounter.",
      ],
    },
    foodStory: {
      title: "Give the meal its own place in the day",
      paragraphs: [
        "Dim sum, a cha chaan teng meal, roast meats or a well-explained regional table can offer different introductions to Hong Kong. Choose portions, venue and timing that suit the guests rather than treating every snack as compulsory. Tea service, ordering conventions and the pace of a busy dining room are useful things to explain. A special tasting menu can be another evening, with the actual reservation and dietary capacity confirmed.",
        "Clarify shellfish, pork, stocks, nuts, dairy, wheat, sauces and shared preparation. A vegetable filling or a dish name does not establish vegetarian cooking, and an English menu may still need ingredient discussion. Agree deposits, service charges, minimum-spend conditions and cancellation terms where they apply. A high-end food plan should improve comfort and understanding, not rely solely on awards or pressure the guest to consume a long checklist.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the booked neighborhood and settle in",
        description:
          "Use the exact airport or station transfer and keep the first meal straightforward. Add a nearby harbor or street walk only when timing allows. A late international arrival should not carry an essential dining deposit or a fixed museum slot.",
      },
      {
        day: "Full day 1",
        title: "An Island-side neighborhood with context",
        description:
          "Choose a coherent architecture-and-street route with a proper meal and manageable walking. A Peak visit can be added or moved when the actual transport, visibility and energy fit. Keep a worthwhile alternative rather than relying on a guaranteed skyline photograph.",
      },
      {
        day: "Full day 2",
        title: "A contrasting Kowloon or museum day",
        description:
          "Use a selected neighborhood or current museum subject with enough time to look and ask questions. Include the real harbor or rail connection and dinner. Do not make a second institution compulsory merely because both sit in West Kowloon.",
      },
      {
        day: "Full day 3",
        title: "Choose the interest that adds the most",
        description:
          "Consider an island, landscape, deeper food subject or another urban chapter with its own complete route. A fifth night gives more room for a separate interest. A Macao or mainland outing needs a distinct crossing and entry plan rather than being treated as another local stop.",
      },
      {
        day: "Departure",
        title: "Use the actual gateway and eligibility",
        description:
          "Allow the full terminal transfer and relevant border formalities. This four-night outline is illustrative, not a published product or guarantee of local providers, dining, through cars or admission. Mainland, Hong Kong and Macao services are included only when expressly confirmed.",
      },
    ],
  },
};
