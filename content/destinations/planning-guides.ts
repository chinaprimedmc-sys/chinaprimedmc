/** Decision-led destination editing. Only add guides after product and article links are checked. */
export type DestinationPlanningGuide = {
  title: string;
  seoTitle: string;
  seoDescription: string;
  stayHeading?: string;
  hotelHeading?: string;
  answer: string;
  serviceScope: string;
  attractions: string[];
  stays: Array<{ label: string; advice: string }>;
  hotelAreas: Array<{ name: string; advice: string }>;
  tradeoffs: Array<{ title: string; advice: string; articleSlug?: string; articleLabel?: string }>;
  products: Array<{ slug: string; label: string; reason: string }>;
  articles: Array<{ slug: string; label: string }>;
  connections: Array<{ slug: string; advice: string }>;
};

export const destinationPlanningGuides: Record<string, DestinationPlanningGuide> = {
  beijing: {
    title: "Beijing Private Tours & Travel Planning",
    seoTitle: "Beijing Private Tours: Great Wall, Stay & Itineraries",
    seoDescription:
      "Plan Beijing with a private guide: compare stays, hotel areas, Great Wall access and walking needs. Explore a 5-day Beijing tour or a private Mutianyu day.",
    answer:
      "Beijing brings together the Forbidden City, Temple of Heaven, hutong neighborhoods and access to the Great Wall. Allow three full sightseeing days for an introduction, with four or five nights giving more room around arrival and departure. Keep the Great Wall as a separate day; use the city days for nearby groups of sights rather than crossing Beijing repeatedly.",
    serviceScope:
      "AVIORA plans private Beijing tours with guiding, road transfers and the services agreed in your written proposal. A private guide helps explain the sites and adjust the sequence; a private vehicle supports transfers between them. Attractions remain public, security checks and queues still apply, and palace courtyards and Wall sections require walking. Ticket availability and mountain transport must be confirmed for your dates.",
    attractions: ["Forbidden City", "Temple of Heaven", "Summer Palace", "Mutianyu Great Wall"],
    stays: [
      {
        label: "2 nights: choose one priority",
        advice:
          "Arrival and departure can leave only one full day. Choose either a city introduction or the Great Wall; do not assume two nights cover both comfortably.",
      },
      {
        label: "3 nights: a selective introduction",
        advice:
          "With an early arrival and late departure, two full days plus partial days can work. Set aside a full day for the Wall and keep city sightseeing selective. With late arrival or early departure, add a night.",
      },
      {
        label: "4 nights: a strong first visit",
        advice:
          "Three full sightseeing days allow imperial Beijing, a separate Great Wall day, and temples or hutong life. Arrival and departure remain travel days.",
      },
      {
        label: "5 nights: more room for interests",
        advice:
          "Add the Summer Palace, a museum or a slower neighborhood day. Extra time is especially useful for children, older parents and travelers recovering from a long flight.",
      },
    ],
    hotelAreas: [
      {
        name: "Wangfujing and Dongcheng",
        advice:
          "A practical first-visit base for central history, restaurants and transfers. Check the hotel’s actual vehicle access and distance to attraction entrances; a central address does not eliminate security queues or walking.",
      },
      {
        name: "Hutong and courtyard stays",
        advice:
          "Choose for neighborhood atmosphere and smaller-scale lodging. Confirm stairs, lifts, room layout, sound insulation and how close a vehicle can reach before booking for children or older travelers.",
      },
      {
        name: "Chaoyang and the CBD",
        advice:
          "Useful when business appointments, contemporary dining or a particular hotel are priorities. Allow for transfers into the historic center rather than treating a skyline hotel as the most convenient base for every sightseeing day.",
      },
    ],
    tradeoffs: [
      {
        title: "Give the Great Wall a separate day",
        advice:
          "Mutianyu lies outside central Beijing. Road travel, mountain transport and time on the Wall make it a substantial outing. Combining it with a full Forbidden City visit weakens both experiences and leaves little margin for traffic or queues.",
      },
      {
        title: "Cable cars reduce climbing, not every step",
        articleSlug: "mutianyu-badaling-jinshanling-great-wall",
        articleLabel: "Compare Great Wall sections before choosing your day trip",
        advice:
          "Mutianyu’s cable car and chairlift serve different access points. Wall surfaces, tower steps and gradients remain. Discuss knee problems, balance and comfort with heights before choosing an access route. A cable car does not make the visit step-free.",
      },
      {
        title: "Group city sights by geography and energy",
        advice:
          "Plan the Forbidden City as the main commitment of a day. Put the Temple of Heaven on another morning, and allow a separate half day or longer for the Summer Palace in the northwest. A hutong meal or short neighborhood walk can complete a day without another major ticketed site.",
      },
      {
        title: "Treat reservations as part of the route",
        articleSlug: "forbidden-city-tickets-foreigners",
        articleLabel: "Read the Forbidden City ticket guide for foreign visitors",
        advice:
          "Confirm passport details and date-specific booking rules before finalizing a palace day. A guide does not override ticket limits or closures. Keep a workable alternative sequence instead of promising access before admission is secured.",
      },
      {
        title: "Beijing with kids: plan around breaks",
        advice:
          "Alternate a large site with a meal, rest or short park visit. In summer, reduce the midday outdoor schedule. If you need a stroller or child seat, discuss the route and vehicle before booking; steps, uneven paving and restricted vehicle access still affect the day.",
      },
      {
        title: "Beijing with older parents: describe walking needs",
        advice:
          "Tell the planner how long each person can walk comfortably, whether stairs are difficult and whether seated breaks or a wheelchair are needed. Confirm lift access at the hotel and the distance from the vehicle to the entrance. A shorter sightseeing list often helps more than adding a private car to an otherwise packed day.",
      },
    ],
    products: [
      {
        slug: "beijing-great-wall-private-5-day-tour",
        label: "Explore the 5-day private Beijing tour",
        reason:
          "Start here for a Beijing-focused visit. Compare its published day-by-day schedule with the length of stay above; arrival and departure days are not extra full sightseeing days.",
      },
      {
        slug: "private-mutianyu-great-wall-day-tour",
        label: "See the private Mutianyu Great Wall day tour",
        reason:
          "Choose this when your Beijing accommodation or wider trip is already arranged and you want a guide and private transfers for the Wall. Review hotel pickup, tickets, mountain transport choices and walking requirements on the product page.",
      },
      {
        slug: "beijing-xian-shanghai-private-10-day-tour",
        label: "See the 10-day Beijing, Xi’an & Shanghai tour",
        reason:
          "Choose this for a first China journey combining imperial Beijing, the Terracotta Army and modern Shanghai. Check the complete itinerary before adding extra Beijing sights or changing onward transport.",
      },
    ],
    articles: [
      {
        slug: "where-to-stay-in-beijing-first-time",
        label: "Compare Beijing hotel areas for a first visit",
      },
      {
        slug: "mutianyu-badaling-jinshanling-great-wall",
        label: "Compare Mutianyu, Badaling and Jinshanling",
      },
      {
        slug: "forbidden-city-tickets-foreigners",
        label: "Plan Forbidden City tickets with a foreign passport",
      },
    ],
    connections: [
      {
        slug: "xian",
        advice:
          "Add Xi’an for the Terracotta Army and the history of China’s earlier capitals. Compare the actual rail or flight schedule and protect time for the station or airport transfer; the travel day should not also carry a full sightseeing program.",
      },
      {
        slug: "shanghai",
        advice:
          "Add Shanghai for neighborhoods, riverfront architecture and a modern contrast. Choose arrival and departure cities around the complete itinerary and confirmed international flights, not a presumed best direction for every traveler.",
      },
    ],
  },
  guilin: {
    title: "Guilin & Yangshuo Private Tours and Travel Planning",
    seoTitle: "Guilin & Yangshuo Private Tours: Cruise & Where to Stay",
    seoDescription:
      "Plan Guilin and Yangshuo with practical advice on hotel bases, nights, cruise luggage and transfers. Explore a Li River cruise day with a private guide.",
    answer:
      "Use Guilin as an arrival base and Yangshuo for countryside time among the limestone peaks. Three nights allow an arrival day, a Li River cruise day, one full countryside day and departure. Four nights give more room for weather changes or a slower pace. If you are staying in Yangshuo after the cruise, arrange a one-way finish and luggage delivery rather than returning to Guilin just to change hotels again.",
    serviceScope:
      "AVIORA’s published Li River day tour combines a private guide and road transfers with a scheduled four-star public cruise shared with other passengers. It starts at a confirmed central Guilin hotel and ends at a Yangshuo hotel, or returns to Guilin when that option is selected and priced. Accommodation, airport or railway-station transfers, rafting and other activities are not automatically included. The product page and written proposal define the booked services; vessel, boarding arrangements and sailing remain subject to the operator and river conditions.",
    attractions: ["Li River", "Yulong River", "Longji Rice Terraces"],
    stays: [
      {
        label: "2 nights: choose a river day or countryside stay",
        advice:
          "With arrival and departure on separate days, you have one full day. A cruise with a Guilin return can suit a fixed Guilin base; a Yangshuo stay suits travelers who prefer countryside time. Do not count on fitting both into one short stop without checking transport times.",
      },
      {
        label: "3 nights: river plus one countryside day",
        advice:
          "One night in Guilin followed by two in Yangshuo works when the booked sailing and arrival times fit. Cruise south on the first full day, explore the countryside on the second, then leave from the confirmed airport or station on departure day.",
      },
      {
        label: "4 nights: a less hurried outdoor visit",
        advice:
          "Add a second full day in Yangshuo for a village walk, a suitable river activity or time at your hotel. Extra time helps you adjust outdoor plans around rain; it does not guarantee clear views or operating sailings.",
      },
      {
        label: "5 nights or more: consider a separate Longji extension",
        advice:
          "If the rice terraces are a priority, plan their road transfers and mountain stay separately from the cruise. Work out the order from your arrival and departure points before booking hotels. An extra night creates options, but exact travel times and village access still need checking.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Guilin: practical before a cruise",
        advice:
          "Useful for an arrival night, city dining and the next morning’s port transfer. Check that the actual hotel address falls within the tour’s pickup area. The airport, railway stations and cruise port are separate locations; a Guilin address does not mean they are nearby.",
      },
      {
        name: "Yangshuo town: restaurants within easier reach",
        advice:
          "Choose town if walking to dinner matters more than a secluded setting. Check room location and evening noise near busy streets such as West Street. Confirm where the driver can stop and how far luggage must be carried to reception.",
      },
      {
        name: "Yangshuo countryside and the Yulong River area",
        advice:
          "Choose a countryside hotel for open views and quieter time between outings. Ask about nearby food, hotel dining, road access, lifts and transport after dinner. A scenic address can mean more driving for meals, station transfers and activities elsewhere.",
      },
    ],
    tradeoffs: [
      {
        title: "Finish in Yangshuo or return to Guilin?",
        advice:
          "End in Yangshuo when your next hotel is there; this avoids a road return followed by another southbound journey. Return to Guilin when keeping the same hotel is more useful and you accept the additional driving. Confirm the final hotel address and the total for that finish before booking.",
        articleSlug: "li-river-cruise-yangshuo-or-guilin-return",
        articleLabel: "Compare a Yangshuo finish with a Guilin return",
      },
      {
        title: "Move luggage by road when changing hotels",
        advice:
          "For the published Yangshuo-finish tour, a normal pre-confirmed quantity of luggage can travel in the private vehicle to the agreed hotel. Send the number and size of bags before confirmation. Keep your passport, medication and valuables with you, and agree where the luggage handover takes place.",
      },
      {
        title: "The Li River cruise and Yulong rafting are different outings",
        advice:
          "The Guilin-to-Yangshuo cruise is a longer scheduled passenger-boat journey. A Yulong River raft is a separate local experience with its own eligibility, boarding and water conditions. Rafting is optional on the published tour; do not assume it will fit after the cruise or suit every child or older traveler.",
      },
      {
        title: "Check boarding steps before traveling with limited mobility",
        advice:
          "Ask about the actual port, gangway, steps, onboard seating and toilets for the booked sailing. Share wheelchair dimensions and walking or balance needs before booking. A private vehicle cannot make every boat or river activity accessible.",
        articleSlug: "li-river-cruise-with-children-seniors-accessibility",
        articleLabel: "Check Li River cruise planning for children and older travelers",
      },
      {
        title: "Keep onward departures away from a tight cruise connection",
        advice:
          "Do not book a close evening flight or train on the assumption that the boat always arrives on time. River operation and road traffic can change the day. Yangshuo railway station is outside the town near Xingping; check the station printed on your ticket and allow for the transfer, luggage and boarding procedures.",
      },
      {
        title: "Give Longji its own place in the itinerary",
        advice:
          "Longji is a separate mountain excursion, not a nearby stop after a Yangshuo cruise. Choose it for terrace scenery and village life if the extra road travel is worthwhile. Ask about walking surfaces, steps, luggage handling and seasonal field conditions rather than assuming the terraces will look like a particular photograph.",
        articleSlug: "guilin-yangshuo-itinerary-5-days",
        articleLabel: "Explore a longer Guilin and Yangshuo itinerary",
      },
    ],
    products: [
      {
        slug: "guilin-yangshuo-li-river-cruise-private-day-tour",
        label: "Explore the Li River cruise day with private guide and transfers",
        reason:
          "Choose this when you need the river day coordinated within your wider stay: central Guilin pickup, a shared four-star cruise, a short private Yangshuo countryside visit and your chosen finish. Compare the Yangshuo-hotel finish with the priced Guilin-return option. This is a day tour; overnight hotels and a multi-day itinerary are separate arrangements.",
      },
    ],
    articles: [
      { slug: "guilin-yangshuo-itinerary-5-days", label: "Plan a longer Guilin and Yangshuo stay" },
      {
        slug: "li-river-cruise-yangshuo-or-guilin-return",
        label: "Choose where to finish your Li River cruise day",
      },
      {
        slug: "li-river-cruise-with-children-seniors-accessibility",
        label: "Plan the river day with children or older parents",
      },
    ],
    connections: [
      {
        slug: "shanghai",
        advice:
          "Add Shanghai for urban neighborhoods and riverfront architecture after the countryside. Compare the available flight or rail options for your dates and include the transfer from your actual Yangshuo or Guilin hotel. An early departure may make a final night closer to the departure point worthwhile.",
      },
      {
        slug: "zhangjiajie",
        advice:
          "Add Zhangjiajie if sandstone peaks and mountain viewpoints are a separate priority. It brings more transfers, outdoor days and walking; do not treat it as a nearby excursion from Yangshuo. Confirm the transport connection and allow a travel day before building the mountain schedule.",
      },
    ],
  },
  xian: {
    title: "Xi’an Private Tours & Terracotta Warriors Travel Planning",
    seoTitle: "Xi’an Private Tours: Terracotta Warriors, Stays & Routes",
    seoDescription:
      "Plan Xi’an with two full days for the Terracotta Warriors and Old City. Compare hotel areas, walking needs and private day tours or longer China routes.",
    answer:
      "Xi’an combines the Terracotta Warriors outside the city with the City Wall, Muslim Quarter and historic neighborhoods in the center. Allow two full sightseeing days, usually with three nights when arrival and departure are separate travel days. Make the museum the main visit on one day and keep the other for the Old City. A two-night stop can work with suitable transport times, but it leaves less time for both.",
    serviceScope:
      "AVIORA’s published Terracotta Warriors day tour includes a private guide, vehicle, central Xi’an hotel pickup and return, museum admission and a flexible Old City walk. The museum remains public: ticket confirmation, identity checks, crowds and walking still apply. Lunch, City Wall admission, bicycle rental, clay-making and airport or station transfers are separate unless confirmed in the written proposal. A private guide does not provide exclusive access to the pits.",
    attractions: ["Terracotta Warriors Museum", "Xi’an City Wall", "Great Mosque of Xi’an"],
    stays: [
      {
        label: "1 night: a museum-focused stop",
        advice:
          "Only consider this with transport times that leave a workable museum visit and road transfers. There may be little time for the city itself. Send arrival and departure details before booking tickets or assuming a day tour will fit.",
      },
      {
        label: "2 nights: a selective introduction",
        advice:
          "Arrival and departure on separate days leave one full day. Prioritize the Terracotta Warriors and add a short city walk if energy allows. An early arrival or late departure may create more time, but count those hours from actual tickets rather than treating them as another full day.",
      },
      {
        label: "3 nights: two full sightseeing days",
        advice:
          "Give the Terracotta Warriors one day with a flexible return, then explore the City Wall, Muslim Quarter or another city interest on the second. This separates the out-of-town museum from a longer Old City visit and leaves arrival and departure for travel.",
      },
      {
        label: "4 nights: add a specific historical interest",
        advice:
          "Use an extra day for a museum, Tang-era heritage or a separate archaeological visit. Check reservations before building the day around a particular museum. More nights are useful when history is a priority, rather than simply adding extra stops to the Warriors day.",
      },
    ],
    hotelAreas: [
      {
        name: "Bell and Drum Towers: central evenings",
        advice:
          "Useful for restaurants and access to the Old City on foot. Check the room’s exposure to street noise, the hotel entrance and where a driver can stop. A central location helps with evenings; it does not shorten every museum, airport or station transfer.",
      },
      {
        name: "South Gate and the City Wall area",
        advice:
          "Consider this area for wall views, evening walks and a choice of hotels near the historic center. Check which side of the wall the hotel is on and the actual walking route to restaurants. A map pin beside the wall does not mean you can enter the wall there.",
      },
      {
        name: "Greater Wild Goose Pagoda and Qujiang",
        advice:
          "Choose this area when Tang heritage, the pagoda district or a particular hotel matters most. You will usually need transport to the Bell Tower and Muslim Quarter. Ask about evening crowds and road access around busy attractions before choosing a hotel for a quieter stay.",
      },
    ],
    tradeoffs: [
      {
        title: "Plan the Terracotta Warriors as the day’s main visit",
        advice:
          "The museum is outside central Xi’an. Road travel, entry, several exhibition areas and time standing at viewing barriers add up. Keep the return flexible rather than promising the full City Wall, a museum and a food walk after the pits.",
        articleSlug: "terracotta-warriors-one-day-visit-pits-guide",
        articleLabel: "Read the Terracotta Warriors visit guide",
      },
      {
        title: "Choose a short wall walk before committing to cycling",
        advice:
          "You do not need to complete the wall circuit to enjoy the views. Discuss steps, uneven paving, heat and balance before choosing a walk or bicycle ride. City Wall admission and bicycle rental are separate additions to the published day tour; confirm availability and suitability first.",
      },
      {
        title: "With children or older parents, reduce standing and extra stops",
        advice:
          "Tell the planner about walking tolerance, hearing needs, stroller or wheelchair use and the need for seated breaks. Large museum halls and crowds can be tiring even with private transfers. Shorten the Old City portion when needed; vehicle service cannot remove the walking inside the museum.",
        articleSlug: "terracotta-warriors-accessibility-walking-guide",
        articleLabel: "Check walking and accessibility at the Terracotta Warriors",
      },
      {
        title: "Plan meals and mosque visits around your needs",
        advice:
          "The Muslim Quarter is a living neighborhood as well as a food destination. Ask about ingredients and preparation rather than assuming every nearby restaurant meets your dietary requirements. Confirm Great Mosque visitor access, dress expectations and prayer arrangements for your visit; a market walk is not the same as a planned mosque visit.",
      },
      {
        title: "Compare Beijing–Xi’an travel from hotel to hotel",
        advice:
          "Compare the actual train and flight options, including hotel transfers, luggage and boarding time. Xi’an North Railway Station and Xi’an Xianyang International Airport are outside the Old City. A train’s scheduled journey time alone is not the total travel time, and a transfer day should not also carry a full museum program.",
        articleSlug: "beijing-xian-itinerary-how-many-days",
        articleLabel: "Plan time between Beijing and Xi’an",
      },
      {
        title: "Keep museum admission and optional activities distinct",
        advice:
          "Standard Terracotta Warriors admission is included in the published day tour for confirmed travelers, subject to ticket confirmation. Match passport details to the booking. Lunch, wall access, bicycles and clay-making are separate choices; request the additions you want before confirming the day.",
      },
    ],
    products: [
      {
        slug: "private-xian-terracotta-warriors-day-tour",
        label: "Explore the private Terracotta Warriors day tour",
        reason:
          "Choose this if your Xi’an accommodation and wider trip are already arranged. It connects central-hotel pickup, museum admission, private guiding and a flexible Old City walk. Check separate costs for airport or station connections, lunch, City Wall access and activities before booking.",
      },
      {
        slug: "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
        label: "Explore the 6-day Xi’an and Beijing private tour",
        reason:
          "Choose this for a focused two-city journey linking the Terracotta Warriors with Beijing and the Great Wall. Review the published allocation of nights and travel days: this shorter combined route is more selective than taking a separate extended stay in each city.",
      },
      {
        slug: "beijing-xian-shanghai-private-10-day-tour",
        label: "Explore the 10-day Beijing, Xi’an and Shanghai tour",
        reason:
          "Choose this when you need a complete first China route, including historic capitals and a modern-city finish. Compare the full itinerary and intercity arrangements before adding extra Xi’an sightseeing or changing arrival and departure cities.",
      },
    ],
    articles: [
      {
        slug: "terracotta-warriors-one-day-visit-pits-guide",
        label: "Understand the Terracotta Warriors before your visit",
      },
      {
        slug: "terracotta-warriors-accessibility-walking-guide",
        label: "Plan museum walking, standing and mobility needs",
      },
      {
        slug: "beijing-xian-itinerary-how-many-days",
        label: "Work out how much time to give Beijing and Xi’an",
      },
    ],
    connections: [
      {
        slug: "beijing",
        advice:
          "Pair Xi’an with Beijing for the Qin-era army, later imperial landmarks and the Great Wall. Choose the direction around confirmed flights and rail services. Keep enough time for transfers and boarding instead of treating the intercity journey as unused sightseeing time.",
      },
      {
        slug: "chengdu",
        advice:
          "Add Chengdu for pandas, Sichuan food and teahouse life after Xi’an’s archaeology. Compare available train or flight times and allow for the actual station or airport transfer. Keep a panda morning after a night in Chengdu rather than tying it to an uncertain arrival.",
      },
    ],
  },
  shanghai: {
    title: "Shanghai Private Tours & First-Visit Travel Planning",
    seoTitle: "Shanghai Private Tours: Where to Stay, Airports & Routes",
    seoDescription:
      "Plan Shanghai with practical advice on hotel areas, Pudong and Hongqiao airports, nights and sightseeing. Compare a private city day with longer China tours.",
    answer:
      "Allow two full sightseeing days for Shanghai, usually with three nights when arrival and departure are separate travel days. Use one day for Yu Garden, the Bund and a river view, and another for neighborhoods, food or a museum. Shanghai works as either an arrival city or a final stop; choose the order around your actual flights and wider route. A one-day visit can cover a useful selection, but it should not include every skyline attraction and neighborhood.",
    serviceScope:
      "AVIORA’s published Shanghai day tour includes a private guide, vehicle, central-hotel pickup and return, Yu Garden interior admission and one ordinary public-ferry crossing when operating. The ferry is shared transport, not a private boat or a sightseeing cruise. Lunch, Shanghai Tower, a night cruise and airport, station or cruise-port transfers are separate unless confirmed in writing. Guiding can adapt the route; it does not remove public queues, venue rules or walking.",
    attractions: ["The Bund", "Yu Garden", "Shanghai Tower"],
    stays: [
      {
        label: "1 night: fit the visit to confirmed transport",
        advice:
          "A single night may leave only part of a day. Choose a short waterfront or neighborhood visit rather than assuming time for a full city tour. Send flight or train details first, especially if you are considering an airport or cruise-port connection.",
      },
      {
        label: "2 nights: one focused sightseeing day",
        advice:
          "Arrival and departure on separate days leave one full day. Yu Garden, a Bund walk and one neighborhood can give a useful introduction, subject to opening, traffic and walking pace. Keep an observation deck or evening cruise optional.",
      },
      {
        label: "3 nights: two full days for a first visit",
        advice:
          "Separate the Old City and waterfront from a second day of neighborhood walks, food or a museum. This gives room for a lunch break and a return to the hotel without treating arrival after a long flight as a full sightseeing day.",
      },
      {
        label: "4 nights or more: add a day trip or personal interest",
        advice:
          "Consider a separately planned Suzhou or water-town day, or more time for art, architecture and food. Check the extra journey, tickets and walking before committing. A day trip uses a full day; it should not be squeezed between several Shanghai attractions.",
      },
    ],
    hotelAreas: [
      {
        name: "The Bund and nearby central Huangpu",
        advice:
          "Choose this area for riverfront evenings and historic architecture. Check whether the room actually has a river view, where the vehicle can stop and how far the hotel is from the promenade. A Bund hotel does not automatically include easy walking access to every Old City sight.",
      },
      {
        name: "Former French Concession and central Jing’an",
        advice:
          "Useful for tree-lined streets, cafes, restaurants and neighborhood walks. The former concession covers a large area, so compare the actual address and metro access. Ask about lifts, stairs and vehicle access at smaller heritage properties rather than assuming the building suits every traveler.",
      },
      {
        name: "Lujiazui in Pudong",
        advice:
          "Choose for tower views, business appointments or a particular hotel. The Bund is on the opposite riverbank; even a short-looking journey needs a crossing. Pudong is a large district, and a Lujiazui hotel is not an airport hotel simply because both are in Pudong.",
      },
    ],
    tradeoffs: [
      {
        title: "Confirm PVG, SHA and the exact railway station",
        advice:
          "Pudong International Airport (PVG), Hongqiao Airport (SHA) and Hongqiao Railway Station are different departure points. Hongqiao airport terminals and the railway station are not one interchangeable pickup address. Check the code, terminal or station on every ticket before arranging a transfer; do not book a tight airport change from a map estimate.",
        articleSlug: "shanghai-pudong-hongqiao-airport-guide",
        articleLabel: "Compare Pudong and Hongqiao airport transfers",
      },
      {
        title: "Group Old City and riverfront visits before adding another district",
        advice:
          "Yu Garden and the Bund can form a useful day, with time for a meal and transfers. A former-concession walk adds another area; an observation deck adds entry and queue time. Choose priorities instead of treating the private vehicle as a way to fit every attraction into eight hours.",
      },
      {
        title: "A public ferry, river cruise and observation deck serve different purposes",
        advice:
          "An ordinary ferry crosses the river on the operator’s route; it is not a narrated skyline cruise. A sightseeing cruise is a separate longer outing, while Shanghai Tower offers a high-level view subject to visibility and admission. Choose the experience you actually want and confirm its ticket and timing separately.",
      },
      {
        title: "Use a private guide and driver where they help most",
        advice:
          "Private transport is useful with luggage, tired children, older parents or a route across several districts. In a compact neighborhood, walking may be more practical than repeated vehicle pickups. Share walking tolerance, stairs and rest needs first, then decide where the car should meet you.",
      },
      {
        title: "Treat airport and cruise-port visits as a separate plan",
        advice:
          "A central-hotel day tour is not automatically a layover or shore excursion. Immigration, baggage, the actual port terminal and the required return time all affect what fits. Verify entry eligibility through current official guidance, then request a route based on confirmed transport details and a realistic return margin.",
        articleSlug: "shanghai-day-tour-cruise-port-airport-pickup",
        articleLabel: "Plan Shanghai sightseeing around an airport or cruise-port connection",
      },
      {
        title: "Stay in Shanghai before a separate international departure",
        advice:
          "If you are returning from another Chinese city on a separately booked service, consider arriving in Shanghai the day before your international flight. Compare the cost of the extra night with the consequences of a missed connection. The appropriate margin depends on your tickets, airline rules and actual arrival point.",
      },
    ],
    products: [
      {
        slug: "private-shanghai-day-tour-guide-driver",
        label: "Explore the Shanghai private day tour with guide and driver",
        reason:
          "Choose this when your hotel and wider trip are already arranged and you want one coordinated city day. Review the included Yu Garden visit and ordinary public ferry, central-hotel pickup area and walking requirements. Airport or port service, tower admission, lunch and evening touring need separate confirmation.",
      },
      {
        slug: "beijing-xian-shanghai-private-10-day-tour",
        label: "Explore the 10-day Beijing, Xi’an and Shanghai tour",
        reason:
          "Choose this for a first China journey combining imperial Beijing, the Terracotta Warriors and Shanghai. Check how many sightseeing days the complete route gives each city before adding a day trip or changing your departure flight.",
      },
      {
        slug: "shanghai-zhangjiajie-floating-peaks",
        label: "Explore the 8-day Shanghai and Zhangjiajie private tour",
        reason:
          "Choose this when the contrast between Shanghai and sandstone mountain scenery matters more than a classic capital-city route. Review the published city stays, mountain walking, domestic connections and final-night arrangement before choosing flights.",
      },
    ],
    articles: [
      {
        slug: "where-to-stay-in-shanghai-first-time",
        label: "Compare Shanghai hotel areas for your first visit",
      },
      {
        slug: "shanghai-pudong-hongqiao-airport-guide",
        label: "Check Pudong, Hongqiao and your airport transfer plan",
      },
      {
        slug: "shanghai-day-tour-cruise-port-airport-pickup",
        label: "Assess an airport or cruise-port sightseeing day",
      },
    ],
    connections: [
      {
        slug: "beijing",
        advice:
          "Pair Shanghai with Beijing for a contrast between port-city history, imperial landmarks and the Great Wall. Compare available train and flight times with transfers at both ends. Decide which city comes first around your international tickets, not a fixed rule that one is always the better arrival.",
      },
      {
        slug: "guilin",
        advice:
          "Add Guilin and Yangshuo for karst scenery and countryside time. Check the actual flight or rail connection and the transfer to your chosen hotel. A late Guilin arrival may suit a city overnight before the next day’s cruise rather than an immediate journey to Yangshuo.",
      },
    ],
  },
  chengdu: {
    title: "Chengdu Private Tours: Pandas, Food & Travel Planning",
    seoTitle: "Chengdu Private Tours: Pandas, Food & Where to Stay",
    seoDescription:
      "Plan Chengdu with realistic panda-viewing expectations, hotel areas, Sichuan food and nights. Compare a private panda day, a 5-day stay or a Jiuzhaigou route.",
    answer:
      "Allow two full sightseeing days for a focused Chengdu visit, usually with three nights between arrival and departure. Give the pandas a morning after a night in the city, then leave the afternoon lighter. Use another day for tea, food and neighborhoods. Four nights give an extra full day for Leshan or more Chengdu; a Jiuzhaigou extension needs a separate plan for travel, higher elevation and park visits.",
    serviceScope:
      "AVIORA’s published panda day tour includes central Chengdu hotel pickup and return, a private guide and vehicle, standard Chengdu Research Base of Giant Panda Breeding admission and a flexible People’s Park walk. The base is public and controls animal areas, entry and welfare. Lunch, tea, internal electric carts, cooking classes and performances are separate unless confirmed in writing. Private guiding does not include animal contact, exclusive enclosures or guaranteed sightings of a particular panda or cub.",
    attractions: [
      "Chengdu Research Base of Giant Panda Breeding",
      "People’s Park",
      "Leshan Giant Buddha",
    ],
    stays: [
      {
        label: "2 nights: pandas and a selective city introduction",
        advice:
          "Arrival and departure on separate days leave one full day. Plan an early panda visit and a short city afternoon or rest. Do not assume there is also time for Leshan, a cooking class and an evening performance.",
      },
      {
        label: "3 nights: two full days in Chengdu",
        advice:
          "Keep the panda morning on one day and use the other for neighborhoods, food and tea. This suits a focused city stop without changing hotels or adding a long out-of-town excursion.",
      },
      {
        label: "4 nights: add Leshan or a slower city day",
        advice:
          "Three full days let you choose a separate Leshan outing or spend more time on cooking, museums and local life. The published five-day Chengdu route uses four hotel nights; its arrival and departure are not extra full sightseeing days.",
      },
      {
        label: "5 nights or more: add a specific regional interest",
        advice:
          "Consider a separate Dujiangyan or Qingcheng Mountain visit if its history or walking appeals, or keep more city time. Do not allocate Jiuzhaigou from the Chengdu night count alone: calculate its transfers, separate accommodation and park days before choosing transport.",
      },
    ],
    hotelAreas: [
      {
        name: "Tianfu Square and the central city",
        advice:
          "A practical base for city visits and onward transfers. Compare the actual hotel’s walking access to restaurants and metro entrances. Ask about the pickup point and an early breakfast arrangement before a panda morning.",
      },
      {
        name: "Chunxi Road and Taikoo Li",
        advice:
          "Choose for restaurants, shopping and evening activity. Check room location, street noise and vehicle access around busy pedestrian areas. A lively central address can work well for dinner without making every pickup convenient.",
      },
      {
        name: "Near People’s Park or Wenshu Monastery",
        advice:
          "Consider these different central neighborhoods for park visits, tea or historic streets. Check the exact address rather than treating them as one district. Smaller properties may have stairs or limited vehicle access; confirm these before booking for children or older parents.",
      },
    ],
    tradeoffs: [
      {
        title: "Confirm the panda facility and entry gate",
        advice:
          "The published day tour visits Chengdu Research Base of Giant Panda Breeding. Other panda facilities, including those near Dujiangyan, are separate journeys. Use the facility, gate and entry period on the confirmed booking when setting pickup; ‘the panda base’ is not a complete transfer instruction.",
        articleSlug: "chengdu-panda-base-morning-visit-itinerary",
        articleLabel: "Plan the panda morning around the correct base and gate",
      },
      {
        title: "Stay in Chengdu the night before your panda visit",
        advice:
          "An early pickup works better from a confirmed hotel than from an arriving flight or train. Cooler morning conditions can help outdoor viewing, but pandas may rest or move indoors. Let the guide adapt to open areas and staff instructions rather than promising a fixed feeding time or a famous individual panda.",
      },
      {
        title: "Choose a shorter route in heat or with limited mobility",
        advice:
          "The base involves walking between habitats, standing and possible queues. Share walking tolerance, stroller or wheelchair needs and heat sensitivity before booking. Internal carts have their own operation, routes and fees; a private road vehicle does not travel with you through every visitor area.",
        articleSlug: "chengdu-panda-base-heat-rain-accessibility",
        articleLabel: "Check heat, rain and walking needs at Chengdu Panda Base",
      },
      {
        title: "Choose one city experience after the panda morning",
        advice:
          "A People’s Park walk, seated tea, cooking session and opera performance are different activities. Decide which matters most after lunch and rest. The published panda day includes a flexible park walk; tea drinks, a hosted table, cooking and evening service require separate confirmation.",
      },
      {
        title: "Treat Leshan as a separate day",
        advice:
          "Travel to the Giant Buddha adds a substantial outing beyond Chengdu. Discuss the walking route, steps and any river-view option before choosing it; boat operations and access are date-dependent. Keeping a city day instead is a complete alternative, not a missed compulsory stop.",
        articleSlug: "how-many-days-in-chengdu-itinerary",
        articleLabel: "Compare a city-only stay with extra time for Leshan",
      },
      {
        title: "Name your airport and next destination before booking hotels",
        advice:
          "Chengdu Tianfu International Airport (TFU) and Chengdu Shuangliu International Airport (CTU) are different airports. Confirm the exact station for rail travel as well. A Jiuzhaigou journey needs its own road connections and higher-elevation planning; the published seven-day route ends in the Jiuzhaigou area, so add a Chengdu return if your flight requires one.",
      },
    ],
    products: [
      {
        slug: "chengdu-pandas-sichuan-table",
        label: "Explore the 5-day Chengdu panda and Sichuan food tour",
        reason:
          "Start here for a Chengdu-focused stay with four hotel nights, pandas, tea and food. The published route offers a separate Leshan day or more city time. Compare the daily plan and confirm the selected meals, activities and Leshan option in your proposal.",
      },
      {
        slug: "private-chengdu-panda-day-tour-early-morning",
        label: "Explore the private early-morning Chengdu panda day tour",
        reason:
          "Choose this when your hotel and wider route are already arranged. It coordinates central-hotel pickup, admission, private guiding and a flexible People’s Park walk. Review the separate costs for tea, lunch, internal carts and other additions before booking.",
      },
      {
        slug: "chengdu-pandas-jiuzhaigou-private-7-day-tour",
        label: "Explore the 7-day Chengdu and Jiuzhaigou private journey",
        reason:
          "Choose this when pandas and city food are part of a wider Sichuan nature trip. Review the three Chengdu nights, three Jiuzhaigou-area nights, walking and transport plan. It finishes in the Jiuzhaigou area; confirm an added return if you need to depart from Chengdu.",
      },
    ],
    articles: [
      {
        slug: "chengdu-panda-base-morning-visit-itinerary",
        label: "Plan a practical morning at Chengdu Panda Base",
      },
      {
        slug: "chengdu-panda-base-heat-rain-accessibility",
        label: "Prepare for heat, rain and walking at the panda base",
      },
      {
        slug: "how-many-days-in-chengdu-itinerary",
        label: "Decide how many days to give Chengdu and Leshan",
      },
    ],
    connections: [
      {
        slug: "leshan",
        advice:
          "Choose Leshan for the Giant Buddha and its river setting if the extra journey suits your interests and mobility. Keep it separate from the panda morning, and confirm the walking or boat-view plan rather than assuming both are always available.",
      },
      {
        slug: "chongqing",
        advice:
          "Add Chongqing for a contrasting river city, night views and hotpot. Compare actual rail departures and the arrival station before arranging the hotel transfer. Allow for Chongqing’s slopes and stairs if the group needs gentler walking.",
      },
      {
        slug: "jiuzhaigou",
        advice:
          "Add Jiuzhaigou for lakes, forests and mountain scenery. It needs separate accommodation, transport and park days, with altitude and walking considered before booking. Confirm where the route ends and how you will reach your next flight or train.",
      },
    ],
  },
  chongqing: {
    title: "Chongqing Private Tours & Travel Planning",
    seoTitle: "Chongqing Private Tours: Night Views, Hotels & Routes",
    seoDescription:
      "Plan Chongqing with practical advice on hotel access, hills, night views and hotpot. Compare stays and explore an 11-day Chengdu–Chongqing–Zhangjiajie tour.",
    answer:
      "Allow two full sightseeing days for a first Chongqing visit, usually with three nights when arrival and departure are separate travel days. Use daylight to understand the hills and rivers, then plan one connected evening for the skyline. Map distance alone is misleading: neighboring streets may be on different levels, and river crossings add travel. A private route should reduce unnecessary climbing and backtracking while leaving time for meals and rest.",
    serviceScope:
      "AVIORA’s published Chengdu–Chongqing–Zhangjiajie journey includes a three-night Chongqing stay, coordinated intercity travel and a guided city day. Its Chongqing open day is independent unless you choose additional private service. Hotels, transport, guide coverage, attraction tickets and evening arrangements are defined in the written proposal. Public transit and attractions remain shared; private transport does not eliminate stairs, queues or walking from legal drop-off points.",
    attractions: ["Hongya Cave", "Yangtze River Cableway", "Liziba Station", "Dazu Rock Carvings"],
    stays: [
      {
        label: "2 nights: one full city day",
        advice:
          "With arrival and departure on separate days, concentrate on city geography, one neighborhood and one night-view route. Avoid adding a substantial out-of-town excursion or assuming the arrival evening will support a long tour.",
      },
      {
        label: "3 nights: two full days to choose your pace",
        advice:
          "Separate an orientation and skyline day from food, neighborhoods or a slower day. This leaves arrival and departure for travel. In the published 11-day route, one of these days is open time; extra guiding and vehicle service must be selected separately.",
      },
      {
        label: "4 nights: add a specific excursion or more rest",
        advice:
          "An extra full day can make room for Dazu Rock Carvings or specialist food, history or photography. Decide what the added day is for before booking. Dazu is a substantial road outing, not a quick stop between central viewpoints.",
      },
    ],
    hotelAreas: [
      {
        name: "Jiefangbei and central Yuzhong",
        advice:
          "A useful starting point for restaurants and many first-visit sights. Check the exact entrance, vehicle approach and walking route back after dinner. A central pin can hide a staircase, a steep slope or a lobby accessed from another building level.",
      },
      {
        name: "Chaotianmen and the river confluence",
        advice:
          "Choose this area for the river setting or a particular hotel. Confirm the room’s view direction, the lobby level and how to reach the promenade. Riverfront on a listing does not mean step-free access to the water or a short vehicle route to every attraction.",
      },
      {
        name: "Jiangbeizui and other north-bank river hotels",
        advice:
          "Consider the north bank for a hotel preference or a different skyline perspective. Allow for bridge crossings to Yuzhong and check nearby dining and pickup access. A view across the river can be appealing without being the most convenient base for a short central-city visit.",
      },
    ],
    tradeoffs: [
      {
        title: "Check the hotel entrance, not just the address",
        advice:
          "Ask where the vehicle stops, which level the lobby occupies and whether lifts connect the entrances you will use. Share luggage, stroller and mobility needs before booking. A shorter horizontal distance can still involve more climbing than a longer drive to a suitable entrance.",
      },
      {
        title: "Choose a Hongya Cave view or a walk through the area",
        advice:
          "Seeing the illuminated complex from a riverbank and exploring its commercial walkways are different visits. Choose the priority around crowds, weather and walking comfort. Agree the pickup point before entering busy streets, and avoid promising several cross-river photo stops in one evening.",
        articleSlug: "3-day-chongqing-itinerary",
        articleLabel: "Plan a Chongqing city and night-view route",
      },
      {
        title: "Use the cableway and Liziba only when they fit the route",
        advice:
          "The Yangtze River Cableway and the rail line through Liziba are separate public transport experiences in different locations. Queues, operating conditions and transfers affect both. Choose a ride or a viewing stop for its place in the day; a private guide cannot guarantee an empty cabin, viewing position or uninterrupted operation.",
      },
      {
        title: "Describe steps, balance and heat tolerance before booking",
        advice:
          "Tell the planner how long each person can walk, whether stairs are difficult and whether lifts or seated breaks are needed. Vehicle transfers and selected viewpoints can reduce effort, but cannot make every hillside street accessible. In summer, shorten outdoor blocks and leave time to cool down indoors.",
      },
      {
        title: "Treat Dazu as a separate full-day choice",
        advice:
          "Visit Dazu Rock Carvings for a specific interest in sculpture and religious history. Confirm the site or sites, road travel and walking before selecting it. In the 11-day route, it is a paid option for the Chongqing open day; staying in the city or resting is also a complete choice.",
      },
      {
        title: "Plan Chengdu and Zhangjiajie connections around actual tickets",
        advice:
          "For Chengdu rail travel, check the train and exact Chongqing arrival station before setting transfers. For Zhangjiajie, select the workable rail or flight connection for your date and the correct final hotel base. Allow a travel day and a quiet arrival evening before mountain walking.",
        articleSlug: "chengdu-chongqing-zhangjiajie-itinerary",
        articleLabel: "Compare the full Chengdu, Chongqing and Zhangjiajie route",
      },
    ],
    products: [
      {
        slug: "chengdu-chongqing-zhangjiajie-private-11-day-tour",
        label: "Explore the 11-day Chengdu, Chongqing and Zhangjiajie journey",
        reason:
          "Choose this for a wider trip combining pandas and Sichuan food, Chongqing’s cityscape and Zhangjiajie’s mountains. The framework gives Chongqing three nights, one core city day and an open day. Check the transport and hotel plan; guiding, vehicles and excursions on the open day are separate unless selected in writing.",
      },
    ],
    articles: [
      {
        slug: "3-day-chongqing-itinerary",
        label: "Plan Chongqing by geography, walking and evening views",
      },
      {
        slug: "chengdu-chongqing-zhangjiajie-itinerary",
        label: "Work out how Chongqing fits between Chengdu and Zhangjiajie",
      },
    ],
    connections: [
      {
        slug: "chengdu",
        advice:
          "Pair Chongqing with Chengdu for pandas, tea and a different Sichuan city experience. Compare confirmed rail times and stations, and include hotel transfers at both ends. Avoid turning the transfer into a full panda morning plus a long Chongqing night tour.",
      },
      {
        slug: "zhangjiajie",
        advice:
          "Continue to Zhangjiajie for sandstone peaks and forest paths if the group wants more outdoor scenery. The connection and hotel base need separate planning. Consider the combined load of Chongqing stairs and mountain walking when choosing rest time and additional attractions.",
      },
    ],
  },
  leshan: {
    title: "Leshan Giant Buddha: Private Visits from Chengdu",
    seoTitle: "Leshan Giant Buddha: Boat or Walking Visit from Chengdu",
    seoDescription:
      "Plan a Leshan Giant Buddha visit from Chengdu: compare boat and walking views, steps, transfers and an overnight stay. Explore the optional Leshan day in our Chengdu tour.",
    stayHeading: "Day trip or overnight: how much time does Leshan need?",
    hotelHeading: "Where to base a Leshan visit",
    answer:
      "Plan Leshan as a full day from Chengdu if the Giant Buddha is your main interest. Choose the viewing approach before fixing the transport: a boat shows the figure in its cliff-and-river setting, while a land visit brings you closer but can involve steep steps and queues. An overnight is useful for a slower Leshan visit or a separately planned Mount Emei extension; it is not necessary simply to include the Buddha in a Chengdu stay.",
    serviceScope:
      "AVIORA’s published five-day Chengdu route offers Leshan as a separate day, with more Chengdu time as an alternative. The route is a private planning framework: selected transport, guiding, admission, any boat ticket and meals must be specified in the written proposal. A private vehicle or guide does not control river sailings, site openings, queues or cliff-path access. The linked product is a multi-day Chengdu route, not a separately published bookable Leshan day tour.",
    attractions: ["Leshan Giant Buddha"],
    stays: [
      {
        label: "Day trip: return to your Chengdu hotel",
        advice:
          "Choose this for a focused Buddha visit without changing hotels. Allow a full day for the road journey or rail plus local transfers, the selected viewing route and a meal. Keep the return flexible rather than linking it to a tight evening flight or train.",
      },
      {
        label: "1 night: more time for Leshan itself",
        advice:
          "An overnight can reduce the pressure to return immediately and allow a longer meal or another local visit. It does not guarantee fewer queues or an operating boat the next morning. Compare the extra hotel move and luggage handling with the value of more time in the city.",
      },
      {
        label: "A longer extension: plan Mount Emei separately",
        advice:
          "If Mount Emei is a priority, work out the mountain route, transport, accommodation and physical demands before adding nights. Leshan and Mount Emei are separate sightseeing plans; do not assume a full mountain visit fits after the Buddha or that both use the same station and entrance.",
      },
    ],
    hotelAreas: [
      {
        name: "Keep your Chengdu base for a day trip",
        advice:
          "This avoids packing and changing rooms for a single excursion. Share the exact hotel, pickup needs and any later reservation so the road or rail plan can be assessed from door to door. Leave the Chengdu return evening light.",
      },
      {
        name: "Stay in Leshan when the extra time has a purpose",
        advice:
          "Choose a hotel around your next day’s plans, dining and vehicle access. Leshan city, the railway station, sightseeing entrances and boat departure points are different locations. Check the actual address, lifts and luggage drop-off before choosing a room for a river view.",
      },
    ],
    tradeoffs: [
      {
        title: "Boat view: see the full figure and its setting",
        advice:
          "A river view can show the Buddha’s scale without taking the cliff descent. It is a different perspective from a land visit, not a shortcut to every viewpoint. Confirm the operating pier, boarding steps, waiting arrangements and suitability for your group; water, weather and navigation conditions can alter or suspend sailings.",
        articleSlug: "leshan-giant-buddha-day-trip-guide",
        articleLabel: "Compare the boat view with the land visit at Leshan",
      },
      {
        title: "Walking visit: choose it for detail, with honest stair expectations",
        advice:
          "The land approach lets you see the site and surrounding setting more closely. The cliffside route can involve steep, narrow steps, queues and uneven ground. Ask which paths are actually open and whether your planned visit includes a descent; do not assume every land ticket or route gives the same access.",
      },
      {
        title: "For older parents or children, assess access beyond the main viewpoint",
        advice:
          "Share knee, balance, heat and walking needs before choosing the route. Check the distance from the vehicle, places to rest, toilets and any gangway or stair use. A boat may reduce climbing but is not automatically step-free, and a private transfer cannot remove all walking at the heritage site.",
      },
      {
        title: "Compare road and rail from hotel to viewing point",
        advice:
          "A train journey still needs travel to the Chengdu station, boarding time and onward transport in Leshan. A private road journey avoids the station change but remains subject to traffic. Compare the full sequence, luggage and return flexibility rather than choosing only by the advertised rail time.",
      },
      {
        title: "Keep the panda morning and Leshan on separate days",
        advice:
          "Both involve travel and public-site timing. Combining them usually gives up time at one visit and creates a long day. In a four-night Chengdu stay, keep a panda day, a city day and a separate Leshan choice, with arrival and departure treated as travel days.",
        articleSlug: "5-day-chengdu-leshan-itinerary",
        articleLabel: "See how Leshan fits into a five-day Chengdu stay",
      },
      {
        title: "Agree an alternative before a weather-sensitive visit",
        advice:
          "If a boat is unavailable, the cliff route is not automatically a suitable replacement for someone avoiding steps. Discuss another workable viewing option, a revised visit or more Chengdu time, and confirm any ticket or price changes before accepting the alternative when timing permits.",
      },
    ],
    products: [
      {
        slug: "chengdu-pandas-sichuan-table",
        label: "Explore the 5-day Chengdu tour with an optional Leshan day",
        reason:
          "Choose this when Leshan is part of a broader Chengdu visit with pandas, tea and Sichuan food. The four-night framework offers a separate Leshan day or more city time. Confirm your viewing method and the selected tickets, transfers and meals; the published product is not a standalone Leshan day-tour package.",
      },
    ],
    articles: [
      {
        slug: "leshan-giant-buddha-day-trip-guide",
        label: "Plan the Leshan Giant Buddha day trip from Chengdu",
      },
      {
        slug: "5-day-chengdu-leshan-itinerary",
        label: "Give pandas, Chengdu and Leshan their own time",
      },
    ],
    connections: [
      {
        slug: "chengdu",
        advice:
          "Use Chengdu for the panda visit, tea and city food, with Leshan on a separate day if it suits the group. Keeping the same hotel can simplify luggage. For onward travel, confirm the actual Chengdu airport or railway station and leave enough time after the excursion.",
      },
    ],
  },
  jiuzhaigou: {
    title: "Jiuzhaigou Private Tours & Mountain Travel Planning",
    seoTitle: "Jiuzhaigou Private Tours: Transport, Hotels & Walking",
    seoDescription:
      "Plan Jiuzhaigou with practical transport, hotel, altitude and walking advice. Explore a 7-day Chengdu and Jiuzhaigou tour and check where the journey ends.",
    answer:
      "Give Jiuzhaigou a full park day, with separate time to arrive and leave the region. Three nights allow an arrival day, the main park visit, a flexible second day and departure. Two nights can suit a focused visit if the transport times work, but leave less room for weather or rest. The journey from Chengdu is not finished when the train or flight arrives: you still need a road transfer to your hotel near the park.",
    serviceScope:
      "AVIORA’s published seven-day Chengdu and Jiuzhaigou journey combines three nights in each area, with the transport, hotels, guiding and tickets specified in the written proposal. Inside Jiuzhaigou, visitors use the park’s shared transport system and selected walking routes; the private road vehicle does not replace it. Huanglong is optional and higher than the main Jiuzhaigou visit. The seven-day framework ends in the Jiuzhaigou area; a Chengdu return is an additional arrangement.",
    attractions: ["Jiuzhaigou National Park", "Huanglong Scenic Area"],
    stays: [
      {
        label: "2 nights: one focused park day",
        advice:
          "This can work when arrival and departure leave a full day between them. Keep both transfer days light and prioritize Jiuzhaigou itself. Do not assume Huanglong or a second park entry will fit; exact transport and ticket arrangements decide what is realistic.",
      },
      {
        label: "3 nights: a flexible regional stay",
        advice:
          "Use one full day for the park and another for rest, a separately planned scenic visit or an appropriate Huanglong option. This is the Jiuzhaigou-area allocation in the published seven-day journey. The second day is not automatically another included park entry or a promise that Huanglong will be suitable.",
      },
      {
        label: "4 nights or more: add time with a purpose",
        advice:
          "Extra time can help with slower photography, rest or another regional interest. It does not guarantee clear weather or eliminate altitude effects. Confirm each added visit, admission and service day rather than assuming a longer hotel stay includes repeated access to the park.",
      },
    ],
    hotelAreas: [
      {
        name: "Near the park entrance in Zhangzha",
        advice:
          "Choose for a simpler park morning, but check the exact road distance, drop-off and walk to entry. ‘Near Jiuzhaigou’ can describe a wide area. Ask about heating, lifts, breakfast timing and nearby meals as well as the room category.",
      },
      {
        name: "Resort hotels farther along the valley",
        advice:
          "Choose a particular resort for its rooms or facilities if you accept the extra road transfer to the park. Confirm driving time for your dates, dining options and where the driver meets you. A mountain view does not mean the hotel is within walking distance of admission.",
      },
      {
        name: "Station- or airport-area overnight for a specific connection",
        advice:
          "Use this only when the confirmed route makes it worthwhile. The airport and regional rail arrival points are not the park entrance, and the transfer may cross higher terrain. Compare the next day’s journey before moving away from a park-area base; check the sleeping location as well as the transport schedule.",
      },
    ],
    tradeoffs: [
      {
        title: "Compare Chengdu connections from hotel to hotel",
        advice:
          "Include Chengdu station or airport access, boarding, the rail or flight segment and the final mountain road transfer. A station name associated with Jiuzhaigou does not mean you have reached the valley. Confirm the actual arrival point, luggage arrangements and driver meeting point before booking the hotel.",
        articleSlug: "chengdu-to-jiuzhaigou-transport",
        articleLabel: "Compare train, flight and road journeys to Jiuzhaigou",
      },
      {
        title: "Choose walks around the park’s transport system",
        advice:
          "Park buses reduce distance between areas, but boarding, waiting, steps and walks to viewpoints remain. Choose a few walking sections with rest points rather than trying every stop. Share wheelchair dimensions, balance needs or limited walking tolerance before confirmation; a private guide cannot make every route step-free.",
        articleSlug: "jiuzhaigou-altitude-walking-accessibility",
        articleLabel: "Assess Jiuzhaigou’s altitude, walking and accessibility",
      },
      {
        title: "Assess Huanglong separately from Jiuzhaigou",
        advice:
          "Huanglong is a different scenic area at higher elevation, with its own road journey, access and walking. A cableway, when operating, does not remove altitude exposure or all steps. Choose it only when the group’s health, mobility, weather and route support the extra visit; a gentler day is a valid alternative.",
      },
      {
        title: "Keep the arrival day light without treating it as a guarantee",
        advice:
          "Avoid a packed sightseeing schedule after the mountain transfer. Tell the planner about relevant health and mobility concerns, and seek medical advice before booking if altitude may affect you. Rest time or a private vehicle does not guarantee that higher-elevation travel is suitable for everyone.",
      },
      {
        title: "Choose the season for its tradeoffs, not one perfect photograph",
        advice:
          "Autumn color, spring conditions and winter scenery vary by year. Cold, rain, snow, maintenance and visitor management can affect paths or transport. Review current opening and access notices for your date and keep priorities flexible instead of promising every lake, waterfall and viewpoint.",
        articleSlug: "best-time-to-visit-jiuzhaigou",
        articleLabel: "Compare Jiuzhaigou seasons before choosing dates",
      },
      {
        title: "Confirm the journey end before booking international flights",
        advice:
          "The seven-day Chengdu–Jiuzhaigou route ends in the Jiuzhaigou area. If your next flight leaves Chengdu, add and price the return connection, any extra hotel night and the correct airport transfer. Do not treat the final regional departure as a guaranteed same-day international-flight connection.",
      },
    ],
    products: [
      {
        slug: "chengdu-pandas-jiuzhaigou-private-7-day-tour",
        label: "Explore the 7-day Chengdu and Jiuzhaigou private journey",
        reason:
          "Choose this for pandas, Sichuan food and a three-night Jiuzhaigou-area stay in one regional route. Review the full park day and the optional second-day choices, including Huanglong only when suitable. The route finishes in the Jiuzhaigou area; a return to Chengdu is added separately if your onward plans need it.",
      },
    ],
    articles: [
      {
        slug: "chengdu-to-jiuzhaigou-transport",
        label: "Compare the complete Chengdu-to-Jiuzhaigou journey",
      },
      {
        slug: "jiuzhaigou-altitude-walking-accessibility",
        label: "Check altitude, park walking and mobility needs",
      },
      {
        slug: "best-time-to-visit-jiuzhaigou",
        label: "Choose a Jiuzhaigou season with realistic expectations",
      },
    ],
    connections: [
      {
        slug: "chengdu",
        advice:
          "Pair Jiuzhaigou with Chengdu for pandas, tea and Sichuan meals. Keep the regional transfer on a separate travel day. If returning for an international flight, confirm the actual Chengdu airport and consider an overnight margin rather than relying on a tight mountain-to-airport connection.",
      },
    ],
  },
};
