import { expandedDestinationGuides } from "./expansion";
/** Decision-led destination editing. Only add guides after product and article links are checked. */
export type DestinationPlanningGuide = {
  title: string;
  seoTitle: string;
  seoDescription: string;
  stayHeading?: string;
  hotelHeading?: string;
  answer: string;
  stayAnswer: string;
  hotelAnswer: string;
  sightseeingQuestion: string;
  sightseeingAnswer: string;
  visitorResources: Array<{ label: string; href: string; scope: string }>;
  mediaCredits?: Array<{ label: string; href: string; license: string; licenseHref: string }>;
  serviceScope: string;
  routeAdvice: string;
  routeHeading?: string;
  practicalPlanning: { timing: string; walking: string; cost: string };
  attractions: string[];
  stays: Array<{ label: string; advice: string }>;
  hotelAreas: Array<{ name: string; advice: string }>;
  tradeoffs: Array<{ title: string; advice: string; articleSlug?: string; articleLabel?: string }>;
  products: Array<{
    slug: string;
    label: string;
    reason: string;
    comparison: { bestFor: string; localPlan: string; importantChoice: string };
  }>;
  articles: Array<{ slug: string; label: string }>;
  connections: Array<{ slug: string; advice: string }>;
};

export const destinationPlanningGuides: Record<string, DestinationPlanningGuide> = {
  ...Object.fromEntries(expandedDestinationGuides.map((guide) => [guide.id, guide.planning])),

  beijing: {
    practicalPlanning: {
      timing:
        "Our Mutianyu day tour takes around 7–9 hours from hotel pickup to return, including the drive and time on the Wall. The five-day Beijing route gives three full sightseeing days between arrival and departure. Keep a fixed flight or train deadline separate from the Wall day unless the complete transfer has been agreed.",
      walking:
        "At Mutianyu, a short cable-car out-and-back can involve roughly 30–60 minutes of Wall walking, plus queues, stops and movement through the lower visitor area. This is a shorter walking option, but it still involves steps and uneven surfaces. Palace days also involve large courtyards and standing; describe stair tolerance and the need for seated breaks.",
      cost: "When comparing Beijing tours, look at hotel nights and room setup, guided days, pickup address and the cable car or chairlift option at the Great Wall. On the standalone Mutianyu day tour, cable-car or chairlift/toboggan tickets and lunch are separate unless selected. A lower starting quote may simply cover fewer of those items.",
    },
    stayAnswer:
      "Allow three full sightseeing days in Beijing, usually with four nights when arrival and departure are separate travel days. Use one day for the Forbidden City and nearby historic streets, one for the Great Wall, and one for temples or another major site. With only two full days, leave some city sights out rather than compressing everything.",
    hotelAnswer:
      "For a first Beijing visit, Wangfujing and Dongcheng are practical starting points for the historic center. A hutong courtyard hotel offers more neighborhood atmosphere but needs closer checks on stairs and vehicle access. Choose Chaoyang for business plans or a particular hotel, accepting longer transfers to many historic sights.",
    sightseeingQuestion: "Can you visit the Forbidden City and Great Wall in one day?",
    sightseeingAnswer:
      "For a first Beijing visit, plan the Forbidden City and the Great Wall on separate days. Both need substantial time for travel, entry and walking. Putting them together leaves little room for traffic, security or a proper visit. With one free day, choose the sight that matters most; even with a private vehicle, these visits need time for travel and entry.",
    visitorResources: [
      {
        label: "Palace Museum visitor information",
        href: "https://intl.dpm.org.cn/visit.html",
        scope:
          "Check the museum’s current opening, reservation and visitor instructions before fixing your palace day.",
      },
      {
        label: "Mutianyu Great Wall official website",
        href: "https://en.mutianyugreatwall.com/",
        scope:
          "Check visitor services and current operating information. Confirm the mountain transport selected for your visit separately.",
      },
    ],
    routeAdvice:
      "Choose our five-day Beijing tour for a stay focused on the capital, or the Mutianyu day tour if your hotel and other plans are already booked. For a first trip that also takes in the Terracotta Warriors and Shanghai, start with the ten-day route. We can discuss the right balance of sightseeing, travel days and time on your own.",
    title: "Beijing Private Tours & Travel Guide",
    seoTitle: "Beijing Travel Guide: Great Wall & Where to Stay",
    seoDescription:
      "Plan Beijing with a private guide: compare stays, hotel areas, Great Wall access and walking needs. Explore a 5-day Beijing tour or a private Mutianyu day.",
    answer:
      "Beijing brings together imperial landmarks, the Great Wall and the everyday life of the hutongs. Give the Forbidden City time to unfold, spend a separate day at the Wall, and leave room for neighborhood walks and good meals. Grouping nearby sights keeps the days rewarding without spending them crossing the city.",
    serviceScope:
      "We plan your Beijing visits around your hotel, interests and walking pace, with private guiding and road transfers as agreed in your proposal. Your guide brings the history into focus and helps you navigate each visit. We set out the tickets and any cable-car or chairlift arrangements before booking. Admission remains subject to availability, and normal security checks, queues and walking apply.",
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
    ],
    products: [
      {
        slug: "beijing-great-wall-private-5-day-tour",
        comparison: {
          bestFor: "A Beijing-focused first visit.",
          localPlan: "Four nights; three full sightseeing days.",
          importantChoice:
            "The final city day in this itinerary combines Temple of Heaven and Summer Palace; request a slower split if needed.",
        },
        label: "Explore the 5-day private Beijing tour",
        reason:
          "Our five-day Beijing tour gives you four nights and three full sightseeing days, with the Forbidden City, Mutianyu and other major landmarks planned as one stay. Review the final city day if you prefer a slower pace; we can discuss giving the Temple of Heaven and Summer Palace more time.",
      },
      {
        slug: "private-mutianyu-great-wall-day-tour",
        comparison: {
          bestFor: "A Great Wall day trip when your hotel and other plans are booked.",
          localPlan: "One private day, planned at 7–9 hours.",
          importantChoice:
            "Choose your cable-car or chairlift option; lift tickets and lunch are extra unless included.",
        },
        label: "See the private Mutianyu Great Wall day tour",
        reason:
          "Our Mutianyu day tour takes care of the guide and road transfers when your Beijing hotel and other plans are already booked. Choose the Wall route and cable-car or chairlift option around your walking comfort, then review the tickets, pickup area and lunch arrangements before booking.",
      },
      {
        slug: "beijing-xian-shanghai-private-10-day-tour",
        comparison: {
          bestFor: "A complete first trip through three cities.",
          localPlan: "Four Beijing nights; three full sightseeing days, including the Great Wall.",
          importantChoice:
            "The whole route also has intercity travel and an independent Shanghai day; compare the complete plan.",
        },
        label: "See the 10-day Beijing, Xi’an & Shanghai tour",
        reason:
          "Our ten-day Beijing, Xi’an and Shanghai tour connects the Great Wall, Terracotta Warriors and Shanghai in one itinerary. Beijing has four nights and three full sightseeing days. Review the whole route before adding visits, so the extra time works with your intercity travel and flights.",
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
        slug: "chengde",
        advice:
          "Chengde adds the Qing court's Mountain Resort landscape and distinct outlying temples. Allow a separate stay for estate and temple days, with route choices matched to walking and stairs. A Jinshanling stop changes the road sequence and physical demands; it is not automatically included in the city connection.",
      },
      {
        slug: "tianjin",
        advice:
          "Tianjin adds trading-city architecture, Haihe riverfront time and a different northern food tradition. Compare a focused rail day trip with an overnight for a particular hotel and evening. Protect Beijing's main sightseeing days and check both exact stations; Binhai and cruise-port transfers need a separate plan.",
      },
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
    practicalPlanning: {
      timing:
        "Our Guilin-to-Yangshuo cruise day is usually 9–11 hours, including hotel pickup, the shared sailing and the selected countryside finish. A Guilin road return generally makes the day longer. Keep flights or trains away from a tight post-cruise connection; neither the sailing nor the road transfer has a guaranteed finish time.",
      walking:
        "The cruise offers seated time, but the hotel transfer, port, gangway, onboard stairs and countryside stops still matter. For a wheelchair or limited balance, ask about the actual vessel and boarding route before choosing the day. Cycling and rafting need separate decisions; neither is necessary to enjoy a Yangshuo stay.",
      cost: "Compare the selected cruise tickets, child seating, luggage quantity, guide language and final hotel. The standard itinerary ends in Yangshuo; private road return to Guilin costs extra. Airport or station transfers, rafting, shows and overnight hotels are separate unless listed. Choose the finish around your next night before comparing totals.",
    },
    stayAnswer:
      "Allow three nights for a Guilin and Yangshuo visit with a cruise and one full countryside day. A practical sequence is one night in Guilin and two in Yangshuo, if arrival and sailing times fit. Four nights allow a slower outdoor stay. Give Longji a separate place in the route rather than adding it after the cruise.",
    hotelAnswer:
      "Stay in central Guilin before a cruise if it fits your arrival and pickup arrangements. Choose Yangshuo town for easier access to restaurants, or the Yulong River countryside for a quieter setting with more reliance on transfers. If your next hotel is in Yangshuo, agree a one-way cruise-day finish and luggage delivery before booking.",
    sightseeingQuestion:
      "Should you stay in Yangshuo after the Li River cruise or return to Guilin?",
    sightseeingAnswer:
      "Finish the Li River cruise day in Yangshuo if you will sleep there; returning to Guilin first creates unnecessary backtracking. Choose a Guilin return when your hotel or onward travel makes that base more useful. Confirm the exact hotel, luggage arrangements and return price. The cruise and Yulong River rafting are separate experiences, with different boarding and operating conditions.",
    visitorResources: [
      {
        label: "Guangxi regional visitor information",
        href: "https://en.gxzf.gov.cn/",
        scope:
          "Regional travel context. For your actual cruise, confirm the vessel, port, boarding access and sailing with the operator named in your booking; regional information does not confirm a sailing.",
      },
    ],
    routeAdvice:
      "Our Li River cruise day works well between an existing Guilin booking and a Yangshuo stay. Choose a Yangshuo finish if your next hotel is there, or a private return to Guilin if that fits your plans better. For a longer trip, ask us to build in hotels, more countryside time or a separate Longji visit.",
    title: "Guilin & Yangshuo Private Tours & Travel Guide",
    seoTitle: "Guilin & Yangshuo: Cruise, Hotels & Private Tours",
    seoDescription:
      "Plan Guilin and Yangshuo with practical advice on hotel bases, nights, cruise luggage and transfers. Explore a Li River cruise day with a private guide.",
    answer:
      "Guilin and Yangshuo offer limestone peaks, river scenery and a slower few days in the countryside. Use Guilin for an arrival night before the Li River cruise, then stay in Yangshuo if village walks and time among the landscapes are your priority. Choosing the right finish for the cruise saves unnecessary backtracking.",
    serviceScope:
      "We coordinate your hotel pickup, private guide, road transfers and cruise-day finish. The river journey is on a scheduled four-star cruise shared with other passengers; your land arrangements are private. The base itinerary ends at a Yangshuo hotel, with a private Guilin return available at extra cost. Your proposal lists luggage arrangements, tickets and any additions. Hotels, airport or station transfers and rafting are separate unless included; sailing and boarding arrangements follow the cruise operator’s conditions.",
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
          "For our Yangshuo-finish tour, a normal pre-confirmed quantity of luggage can travel in the private vehicle to the agreed hotel. Send the number and size of bags before confirmation. Keep your passport, medication and valuables with you, and agree where the luggage handover takes place.",
      },
      {
        title: "Check boarding steps before traveling with limited mobility",
        advice:
          "Ask about the actual port, gangway, steps, onboard seating and toilets for the booked sailing. Share wheelchair dimensions and walking or balance needs before booking. A private vehicle cannot make every boat or river activity accessible.",
        articleSlug: "li-river-cruise-with-children-seniors-accessibility",
        articleLabel: "Check Li River cruise planning for children and older travelers",
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
        slug: "guilin-yangshuo-longji-private-5-day-tour",
        comparison: {
          bestFor: "A complete five-day regional journey with four hotel nights.",
          localPlan:
            "Two Guilin nights, a separate Longji day, a shared Li River cruise and two Yangshuo nights.",
          importantChoice:
            "Review Longji steps, actual hotel locations and your exact departure point; quote confirmed for your dates.",
        },
        label: "Explore five days in Guilin, Yangshuo and Longji",
        reason:
          "Add four hotel nights, a dedicated terrace excursion, Yangshuo countryside time and arrival and departure transfers. Your guide and road services are private; the cruise is shared. Hotels, tickets, walking and price are confirmed in writing.",
      },
      {
        slug: "guilin-yangshuo-li-river-cruise-private-day-tour",
        comparison: {
          bestFor: "A Li River cruise day within a trip you have already planned.",
          localPlan:
            "One cruise-and-countryside day, usually 9–11 hours; overnight accommodation booked separately.",
          importantChoice:
            "The cruise is shared with other passengers, and the standard itinerary ends in Yangshuo. Private return to Guilin costs extra.",
        },
        label: "Explore the Li River cruise day with private guide and transfers",
        reason:
          "Our Li River cruise day connects a Guilin hotel stay with river scenery and a short private Yangshuo countryside visit. The scheduled four-star cruise is shared with other passengers. Choose a Yangshuo hotel finish or pay for a private return to Guilin; overnight accommodation is arranged separately.",
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
        slug: "longji-rice-terraces",
        advice:
          "Longji needs its own mountain-road journey and a choice between Ping’an and Dazhai/Jinkeng. Compare a focused day visit with one or two village nights, checking field conditions, final hotel steps and luggage. The Li River cruise day does not include the terraces.",
      },
      {
        slug: "sanjiang",
        advice:
          "Sanjiang adds Chengyang's Dong village architecture and covered bridge as a separate cultural stay. Allow useful local nights, a suitable room and the complete dated connection from Guilin or Yangshuo. Existing Guilin tours do not automatically include Chengyang, village hosts or performances; compare this extension with a separate Zhaoxing stay.",
      },
      {
        slug: "daxin",
        advice:
          "Daxin offers Detian Waterfall and a separately chosen Mingshi countryside property in another part of Guangxi. Compare the full transfer and meaningful contrast before adding a second karst stay. Existing Li River and Yangshuo products do not include Daxin hotels, boats or border-related arrangements by default.",
      },

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
    practicalPlanning: {
      timing:
        "Our Terracotta Warriors day tour is planned around eight hours from a confirmed central Xi’an hotel, including the museum, transfers and a selected Old City walk. Airport or station connections change that window. In the ten-day China route, Xi’an has two nights and one full sightseeing day, less than the two full days recommended for a fuller city visit.",
      walking:
        "The museum involves indoor standing and walking between viewing areas; City Wall access adds a different set of stairs and walking choices. Ask for essential museum visits first, then decide whether a short Old City walk or a paid Wall activity fits the remaining energy. A driver cannot accompany you through the exhibition spaces.",
      cost: "The standalone Warriors day tour includes standard museum admission and one selected Old City walk. Compare any airport or station supplement, lunch, City Wall or tower tickets and additional service hours separately. When comparing multi-city tours, include the rail or flight segment and actual Xi’an hotel nights, not just the overall trip length.",
    },
    stayAnswer:
      "Allow two full sightseeing days in Xi’an, usually with three nights when arrival and departure are separate travel days. Give the Terracotta Warriors the main part of one day, then use the other for the Old City, food and a selected historic site. Two nights can work with favorable transport times, but require a more selective plan.",
    hotelAnswer:
      "Stay inside or near Xi’an’s City Wall if Old City walks, restaurants and evenings out are priorities. Check the hotel’s road access and nearby noise as carefully as its map position. A railway-station or airport hotel makes sense for a specific connection, but usually adds travel to a first visit focused on the historic center.",
    sightseeingQuestion: "Can you visit the Terracotta Warriors and Xi’an’s Old City in one day?",
    sightseeingAnswer:
      "A Terracotta Warriors visit and a short Old City walk can fit into one Xi’an day when starting from a central hotel. Make the museum the main visit and keep the city portion flexible. Adding airport or station transfers, City Wall activities and a long meal changes the timing; do not assume a standard city day covers all of them.",
    visitorResources: [
      {
        label: "Emperor Qinshihuang’s Mausoleum Site Museum",
        href: "https://www.bmy.com.cn/",
        scope:
          "Use the museum’s visitor information and notices for current admission arrangements. The guided route and extra city activities are defined by your booked tour.",
      },
    ],
    routeAdvice:
      "If your hotel and onward travel are booked, our Terracotta Warriors day tour takes care of the museum day and a flexible Old City walk. The six-day Xi’an and Beijing tour gives Xi’an two full sightseeing days but keeps Beijing brief. Choose the ten-day route to add Shanghai, or ask us to extend the city where you want more time.",
    title: "Xi’an Private Tours & Terracotta Warriors Guide",
    seoTitle: "Xi’an Travel Guide: Terracotta Warriors & Stays",
    seoDescription:
      "Plan Xi’an with two full days for the Terracotta Warriors and Old City. Compare hotel areas, walking needs and private day tours or longer China routes.",
    answer:
      "Xi’an rewards time both at the Terracotta Warriors and in the Old City. Spend a day understanding the museum with your guide, then explore the City Wall, neighborhood food and historic streets at a gentler pace. The museum lies outside the city, so keeping the two parts of your stay distinct makes the visit easier to enjoy.",
    serviceScope:
      "Our Terracotta Warriors day tour brings together a private guide, driver and vehicle, central Xi’an hotel pickup and return, standard museum admission and a flexible Old City walk. We explain how the museum visit fits with your afternoon plans and set out the full price before booking. Lunch, City Wall tickets, cycling, clay-making and airport or station transfers are extra unless listed. Museum reservations and identity checks still apply; guiding does not provide exclusive access to the pits.",
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
        title: "Choose a short wall walk before committing to cycling",
        advice:
          "You do not need to complete the wall circuit to enjoy the views. Discuss steps, uneven paving, heat and balance before choosing a walk or bicycle ride. City Wall admission and bicycle rental are separate additions to our day tour; confirm availability and suitability first.",
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
    ],
    products: [
      {
        slug: "private-xian-terracotta-warriors-day-tour",
        comparison: {
          bestFor: "A guided museum day when you already have a hotel booked.",
          localPlan: "About eight hours; museum visit and a flexible Old City walk.",
          importantChoice:
            "Airport/station connections, Wall tickets and lunch are separate unless added.",
        },
        label: "Explore the private Terracotta Warriors day tour",
        reason:
          "Our Terracotta Warriors day tour combines central-hotel pickup, museum admission, a private guide and a flexible Old City walk. It works well when your hotel and onward travel are booked. Airport or station transfers, lunch and paid City Wall activities are extra unless included in your proposal.",
      },
      {
        slug: "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
        comparison: {
          bestFor: "Two historic cities, with more time to explore Xi’an.",
          localPlan: "Three Xi’an nights; two full city/museum sightseeing days.",
          importantChoice:
            "Beijing has only one full sightseeing day and a compressed palace/Wall plan; ask for an extra day to separate them.",
        },
        label: "Explore the 6-day Xi’an and Beijing private tour",
        reason:
          "Our six-day Xi’an and Beijing tour gives Xi’an two full sightseeing days. Beijing has just one full sightseeing day, with a compact palace-and-Wall plan. Ask us to add time in Beijing if you want those visits on separate days.",
      },
      {
        slug: "beijing-xian-shanghai-private-10-day-tour",
        comparison: {
          bestFor: "A first trip that also includes Shanghai.",
          localPlan: "Two Xi’an nights; one full sightseeing day.",
          importantChoice:
            "This is shorter than the two-full-day Xi’an recommendation. Add a night if Old City time matters.",
        },
        label: "Explore the 10-day Beijing, Xi’an and Shanghai tour",
        reason:
          "Our ten-day route combines Beijing, Xi’an and Shanghai, with two nights and one full sightseeing day in Xi’an. It suits a broad first trip. If archaeology, food and the Old City are particular interests, ask us about adding a night before fixing the intercity connections.",
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
        slug: "yinchuan",
        advice:
          "Continue to Yinchuan for a different northwestern chapter: Helan rock art, Western Xia history and Hui food culture. The Muslim-friendly China route uses three Yinchuan-area nights before a separate Zhongwei desert night. Compare the actual flight or rail schedule and hotel transfers; a regional connection is not an extra full sightseeing day.",
      },
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
    practicalPlanning: {
      timing:
        "Our Shanghai city day is planned around eight hours from central-hotel pickup to return, including transfers and a lunch break. It is not eight hours of continuous walking. An airport layover or cruise call needs a different pickup-to-return calculation, including entry procedures, luggage and the required return margin.",
      walking:
        "Yu Garden, the Bund, ferry access and neighborhood streets combine walking with vehicle transfers. Select a manageable neighborhood section rather than trying to walk every district. Describe stair, stroller or wheelchair needs before the ferry and garden route is fixed; a private car does not remove walking within these places.",
      cost: "Compare central-hotel service with airport or port service before comparing prices. Our city day includes Yu Garden and an ordinary public ferry; tower admission, a sightseeing cruise, lunch and evening touring are different costs. On the ten-day China route, Shanghai’s second full day is independent unless extra guided service is added.",
    },
    stayAnswer:
      "Allow two full sightseeing days in Shanghai, usually with three nights between arrival and departure. Use one day for Yu Garden, the Bund and a river view, and the other for neighborhoods, food or a museum. With one day, select a connected city route. Do not add a water-town excursion without allowing another suitable day.",
    hotelAnswer:
      "For a first Shanghai visit, compare the Bund and People’s Square for central sightseeing with Jing’an and the former French Concession for neighborhood time and dining. A Pudong hotel may suit a particular view or business address, but check river crossings. Choose an airport hotel for a specific connection, not as a convenient base for all city sightseeing.",
    sightseeingQuestion:
      "Can you take a Shanghai day tour during an airport layover or cruise stop?",
    sightseeingAnswer:
      "A Shanghai layover or cruise-stop tour needs a separate timing assessment using your actual terminal, entry arrangements, luggage and required return time. A central-hotel city tour is not automatically suitable or priced for that visit. Airport and port transfers reduce sightseeing time, so confirm the full pickup-to-return plan before choosing attractions.",
    visitorResources: [
      {
        label: "Shanghai Airport passenger information",
        href: "https://www.shairport.com/ensh/",
        scope:
          "Check the actual airport, terminal and passenger transport information. Entry eligibility and a private transfer must be confirmed separately.",
      },
      {
        label: "Shanghai Metro passenger information",
        href: "https://service.shmetro.com/en/",
        scope:
          "Use for public-transit planning; allow for station access and walking as well as the train journey.",
      },
    ],
    routeAdvice:
      "Choose our Shanghai day tour for one guided city day around an existing hotel booking. The ten-day Beijing, Xi’an and Shanghai route suits a first trip focused on the Great Wall, Terracotta Warriors and city life. For a stronger contrast between city and scenery, consider Shanghai and Zhangjiajie. We can help you choose the route before you commit to flights.",
    title: "Shanghai Private Tours & First-Time Visitor Guide",
    seoTitle: "Shanghai Travel Guide: Hotels & Private Tours",
    seoDescription:
      "Plan Shanghai with practical advice on hotel areas, Pudong and Hongqiao airports, nights and sightseeing. Compare a private city day with longer China tours.",
    answer:
      "Shanghai combines riverfront architecture, historic neighborhoods and contemporary city life. Enjoy the Bund and Yu Garden, then leave time for a neighborhood walk, a museum or an unhurried meal. The city works well at either end of a China trip; your international flights and wider route should guide the order.",
    serviceScope:
      "Our Shanghai day tour includes a private guide, driver and vehicle, central-hotel pickup and return, entry to Yu Garden and one crossing on an ordinary public ferry when operating. Your guide connects the city’s history with the neighborhoods you visit. The ferry is shared public transport; sightseeing cruises, tower tickets, lunch, evening touring and airport, station or port transfers are extra unless listed. We agree the route and service hours with you before booking, allowing for walking and normal public access.",
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
        title: "A public ferry, river cruise and observation deck serve different purposes",
        advice:
          "An ordinary ferry crosses the river on the operator’s route; it is not a narrated skyline cruise. A sightseeing cruise is a separate longer outing, while Shanghai Tower offers a high-level view subject to visibility and admission. Choose the experience you actually want and confirm its ticket and timing separately.",
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
        slug: "shanghai-suzhou-hangzhou-private-7-day-tour",
        label: "Explore the 7-day Shanghai, Suzhou and Hangzhou private tour",
        reason:
          "Follow a one-way six-night route through Shanghai, a Suzhou garden and Hangzhou tea country, with one Zhujiajiao excursion. Private local transfers connect two public trains; the itinerary ends in Hangzhou and is quoted for your dates.",
        comparison: {
          bestFor: "A complete Jiangnan regional journey with six hotel nights.",
          localPlan:
            "Shanghai three nights, Suzhou one and Hangzhou two; a garden, one water town and one hosted tea tasting.",
          importantChoice:
            "Two hotel changes, self-carried train luggage and local guide handovers. Return to Shanghai is separate.",
        },
      },
      {
        slug: "private-shanghai-day-tour-guide-driver",
        comparison: {
          bestFor: "A guided city day when you already have a hotel booked.",
          localPlan: "About eight hours from a confirmed central hotel.",
          importantChoice:
            "Includes Yu Garden and an ordinary public ferry; airport/port service and sightseeing cruises are separate.",
        },
        label: "Explore the Shanghai private day tour with guide and driver",
        reason:
          "Our Shanghai day tour brings together Yu Garden, the Bund, an ordinary public-ferry crossing and a neighborhood walk, with private guiding and road transfers. It starts and finishes at a central hotel. Airport or port service, tower entry, lunch and evening plans are extra unless agreed.",
      },
      {
        slug: "beijing-xian-shanghai-private-10-day-tour",
        comparison: {
          bestFor: "Shanghai as part of a classic first China route.",
          localPlan: "Three Shanghai nights; one guided city day plus one independent full day.",
          importantChoice:
            "Add private service for the independent day only if wanted; it is not a second included guided day.",
        },
        label: "Explore the 10-day Beijing, Xi’an and Shanghai tour",
        reason:
          "Our ten-day Beijing, Xi’an and Shanghai itinerary finishes with three nights in Shanghai, one guided city day and one free day. Keep that day for your own interests or ask us to add a guided visit. Review the departure timing before adding an out-of-city excursion.",
      },
      {
        slug: "shanghai-zhangjiajie-floating-peaks",
        comparison: {
          bestFor: "A city-and-mountain trip rather than historic capitals.",
          localPlan:
            "Shanghai city sightseeing on Day 2, plus arrival time and a final Shanghai night.",
          importantChoice:
            "The full route includes three Zhangjiajie scenic days and domestic connections; check flight timing before booking.",
        },
        label: "Explore the 8-day Shanghai and Zhangjiajie private tour",
        reason:
          "Our eight-day Shanghai and Zhangjiajie tour pairs city life with sandstone landscapes, including a separate Tianmen Mountain day and a final night back in Shanghai. Review the mountain walks, hotel changes and domestic connections before booking your international flights.",
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
        slug: "shengsi",
        advice:
          "Shengsi adds a sea escape with Sijiao and Shengshan–Gouqi as different bases. Allow the mainland road, actual sailing and island hotel transfer, with a separate return plan before fixed flights. Existing Shanghai tours do not include these ferries or rooms unless explicitly stated; choose useful island nights rather than a rushed photographic detour.",
      },
      {
        slug: "hangzhou",
        advice:
          "Add Hangzhou for West Lake, Longjing tea and a different hotel setting. Compare a focused day trip with two or three nights, including station-to-hotel transfers. This extension is separately planned and is not an automatic addition to a Shanghai day tour or published multi-city route.",
      },
      {
        slug: "suzhou",
        advice:
          "Choose Suzhou for classical gardens and canal neighborhoods. A selective day trip can work, while an overnight stay adds local evening time. Confirm the actual rail stations and garden reservations; Tongli or Zhouzhuang needs a separate decision rather than being added to every city visit.",
      },
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
    practicalPlanning: {
      timing:
        "Our panda-and-city day is planned around eight hours, usually 7–9 hours from central-hotel pickup to return. If you only want the panda morning, ask us for a shorter visit and a separate quote. Keep Leshan on another day, and give a Jiuzhaigou extension separate transfer and park days rather than treating it as an extra city outing.",
      walking:
        "The Panda Base covers a large area, and walking depends on the gate and enclosures selected. An early start can help the sequence but does not guarantee animal activity or remove queues. Tell the planner about comfortable walking periods, rest needs and any wheelchair or stroller before deciding whether to add the afternoon park walk.",
      cost: "For the panda day, distinguish included standard admission and People’s Park walking from internal carts, tea, lunch and optional hosted activities. For a longer stay, the Leshan viewing choice, hotel category and extra guided days affect the quote. A Jiuzhaigou journey also needs regional transport and any return to Chengdu priced into the comparison.",
    },
    stayAnswer:
      "Allow two full sightseeing days in Chengdu, usually with three nights: one panda morning with a lighter afternoon, and one city day for tea, food and neighborhoods. Four nights give a separate full day for Leshan or more Chengdu time. A Jiuzhaigou extension needs additional transfer and park days rather than a spare afternoon.",
    hotelAnswer:
      "For a first Chengdu stay, compare a central base around Tianfu Square or Chunxi Road with a quieter neighborhood hotel that still has convenient road access. Check evening dining, breakfast and the early panda-day pickup. Staying near the Panda Base may shorten that morning’s transfer, but can be less useful for the rest of a city-focused visit.",
    sightseeingQuestion: "Can you visit the Chengdu Panda Base and Leshan in one day?",
    sightseeingAnswer:
      "Keep the Chengdu Panda Base and Leshan on separate days for a first visit. The panda morning has its own entry and walking time, while Leshan adds an out-of-city journey and a choice of boat or land access. Combining both usually sacrifices time at one visit and creates a long day; choose one if only a day is available.",
    visitorResources: [
      {
        label: "Chengdu Panda Base tickets and reservations",
        href: "https://www.panda.org.cn/en/service/ticket",
        scope: "Check current reservation instructions before selecting your visit date.",
      },
      {
        label: "Chengdu Panda Base visitor notices",
        href: "https://www.panda.org.cn/en/service/notice",
        scope:
          "Check current visitor notices. Animal activity and visibility are not guaranteed by a reservation or private guide.",
      },
    ],
    routeAdvice:
      "Choose our five-day Chengdu tour for pandas, food and a choice of Leshan or more city time. If your hotel and wider trip are booked, the panda day tour covers a single guided day. The seven-day Chengdu and Jiuzhaigou route adds a mountain-park stay. It ends in the Jiuzhaigou area, so tell us if you need a return to Chengdu.",
    title: "Chengdu Private Tours: Pandas, Food & Local Life",
    seoTitle: "Chengdu Private Tours: Pandas, Food & Where to Stay",
    seoDescription:
      "Plan Chengdu with realistic panda-viewing expectations, hotel areas, Sichuan food and nights. Compare a private panda day, a 5-day stay or a Jiuzhaigou route.",
    answer:
      "Chengdu is a place to enjoy pandas, Sichuan cooking and the rhythm of teahouses and neighborhood life. Give the panda visit its own morning, then slow down over lunch or tea. Add Leshan on another day if it interests you; for Jiuzhaigou, allow time for a separate mountain stay and the journey there.",
    serviceScope:
      "We arrange Chengdu visits around your hotel, interests and preferred pace. Our panda day tour includes central-hotel pickup and return, a private guide, driver and vehicle, standard Panda Base admission and a flexible People’s Park walk. Your proposal distinguishes the included visits from tea, lunch, internal carts and optional activities. The visit is for observing pandas: animal activity is unpredictable, and the visit does not include touching, feeding, volunteering or keeper access. Leshan and Jiuzhaigou require their own agreed arrangements.",
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
          "Three full days let you choose a separate Leshan outing or spend more time on cooking, museums and local life. Our five-day Chengdu route uses four hotel nights; its arrival and departure are not extra full sightseeing days.",
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
          "Our day tour visits Chengdu Research Base of Giant Panda Breeding. Dujiangyan and other panda facilities require different routes. We use the booked facility, entrance and admission time to plan your pickup, so tell us if you have a particular panda site in mind.",
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
        title: "Name your airport and next destination before booking hotels",
        advice:
          "Chengdu Tianfu International Airport (TFU) and Chengdu Shuangliu International Airport (CTU) are different airports. Confirm the exact station for rail travel as well. A Jiuzhaigou journey needs its own road connections and higher-elevation planning; our seven-day route ends in the Jiuzhaigou area, so add a Chengdu return if your flight requires one.",
      },
    ],
    products: [
      {
        slug: "chengdu-pandas-sichuan-table",
        comparison: {
          bestFor: "A city base for pandas, food and optional Leshan.",
          localPlan: "Four Chengdu nights; panda day, city day and a Leshan-or-city choice.",
          importantChoice:
            "Select Leshan or more Chengdu time; specify meals and viewing method in the proposal.",
        },
        label: "Explore the 5-day Chengdu panda and Sichuan food tour",
        reason:
          "Our five-day Chengdu tour gives you four nights for pandas, food and tea, with a choice of Leshan or more city time on a separate day. Choose the experiences that interest you, then review the meals, activities and any Leshan viewing arrangements in your proposal.",
      },
      {
        slug: "private-chengdu-panda-day-tour-early-morning",
        comparison: {
          bestFor: "A panda visit and city walk when you already have a hotel booked.",
          localPlan: "About eight hours; Panda Base plus a People’s Park walk.",
          importantChoice:
            "Tea, lunch, internal carts and hosted activities are separate unless added.",
        },
        label: "Explore the private early-morning Chengdu panda day tour",
        reason:
          "Our panda day tour combines central-hotel pickup, standard Panda Base admission, private guiding and a flexible People’s Park walk. It suits travelers who already have a hotel and wider itinerary. Tea, lunch, internal carts and other activities are extra unless included.",
      },
      {
        slug: "chengdu-pandas-jiuzhaigou-private-7-day-tour",
        comparison: {
          bestFor: "Pandas followed by a mountain-park stay.",
          localPlan:
            "Three Chengdu nights and two full days for pandas and city sightseeing before the regional transfer.",
          importantChoice:
            "The trip ends in the Jiuzhaigou area; add a Chengdu return if your departure needs it.",
        },
        label: "Explore the 7-day Chengdu and Jiuzhaigou private journey",
        reason:
          "Our seven-day Chengdu and Jiuzhaigou itinerary pairs three Chengdu nights with three in the mountain region. It suits travelers who want both city life and park scenery. The trip ends in the Jiuzhaigou area; tell us if you need a return connection to Chengdu.",
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
        slug: "mount-emei",
        advice:
          "Mount Emei adds a Buddhist mountain chapter with Golden Summit or selected lower temples. Protect useful local nights, review the full bus, cableway and walking chain, and compare actual sleeping elevation and rooms. Existing Chengdu products do not automatically include Emei accommodation, admission or scenic transport.",
      },
      {
        slug: "dujiangyan",
        advice:
          "Dujiangyan adds a working water-heritage chapter northwest of the city. Compare the full outing, public route, bridge and step demands with a local overnight or separate Qingcheng day. A panda facility in the Dujiangyan area is a distinct destination and does not establish an included irrigation-system visit.",
      },
      {
        slug: "guanghan",
        advice:
          "Guanghan's Sanxingdui Museum adds a focused ancient-Shu chapter beyond Chengdu's city and panda interests. Protect substantial gallery time, breaks and the full return rather than combine it with Leshan. The 12-day family journey offers it as one Chengdu choice-day option; other Chengdu products do not automatically include it.",
      },
      {
        slug: "mianzhu",
        advice:
          "Mianzhu adds a specific New Year picture and printmaking interest north of Chengdu. Confirm whether the visit is museum interpretation, a studio demonstration or practical teaching, then compare the complete road and local room options. Existing Chengdu itineraries do not automatically include Mianzhu hosts or classes.",
      },
      {
        slug: "qionglai",
        advice:
          "Qionglai adds Pingle, a confirmed tea visit or selected ceramic heritage southwest of the central city. Choose one lead subject for a day trip, or two or three nights for a rural chapter and separate mountain interest. Existing Chengdu itineraries do not automatically include Qionglai hosts, rooms or Tiantai routes.",
      },
      {
        slug: "chongzhou",
        advice:
          "Choose Chongzhou for a defined Daoming bamboo-craft visit, Jiezi walk or settled countryside stay. A focused day trip can keep your Chengdu room; two local nights create one full day. Confirm the actual host and teaching format rather than substitute a shopping stop. Existing Chengdu tours do not automatically include this extension.",
      },
      {
        slug: "langzhong",
        advice:
          "Langzhong adds a smaller historic river-town stay with courtyard streets, Zhang Fei commemoration and examination history. Allow useful nights and check the bedroom, noise and luggage access. Compare the full dated train or road journey rather than treat this as a short panda-day add-on. Existing Chengdu products do not include the extension.",
      },
      {
        slug: "danba",
        advice:
          "Danba provides a distinct village-and-tower chapter through a substantial western Sichuan road journey. Compare the actual room, village approach and complete pass and sleeping-altitude profile. A Chengdu city or panda product does not include Danba accommodation or private hosts by default.",
      },
      {
        slug: "mount-siguniang",
        advice:
          "Mount Siguniang requires a separately assessed highland stay and road journey. Choose the actual valley, maximum and sleeping elevations, walking and individual suitability. A shuttle-assisted day remains a high-altitude visit, and existing Chengdu products do not automatically include this extension.",
      },

      {
        slug: "qingcheng-mountain",
        advice:
          "Choose Qingcheng for Daoist heritage and forest walking, or a separate resort stay. Compare a city-based excursion with two or three nights nearby; the published retreat protects seven consecutive mountain-area nights. Review the actual stairs, hotel address and quiet-day service before choosing.",
      },
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
    practicalPlanning: {
      timing:
        "Allow separate daylight and evening time for Chongqing rather than assuming several cross-river stops fit one short night tour. The linked eleven-day journey gives the city three nights, one guided sightseeing day and one free day. To have two arranged sightseeing days, add the guide and vehicle services for the free day explicitly.",
      walking:
        "Describe walking tolerance in minutes, whether stairs are manageable and whether a lift is essential. In Chongqing, vehicle drop-off level and the route to reception or a viewpoint matter more than straight-line map distance. Shorter neighborhood walks and one connected evening can be more useful than a long list of photo stops.",
      cost: "Keep Chongqing’s free day independent, or ask us to quote a guided city day, a Dazu excursion or an evening activity. Additional guide and vehicle hours affect the total. When choosing a central or river-view hotel, compare entrance access as well as the room category.",
    },
    stayAnswer:
      "Allow two full sightseeing days in Chongqing, usually with three nights between arrival and departure. Use daylight for the river-city layout and neighborhoods, then group nearby night views into one evening. If Dazu is a priority, allow a separate excursion day or replace city time. The linked eleven-day tour’s free day needs separately agreed services.",
    hotelAnswer:
      "For a first Chongqing stay, consider Jiefangbei or Yuzhong for central city sightseeing, then check the exact street level and vehicle drop-off. A short map distance can hide stairs or a steep approach. Choose a quieter hotel across the river only after comparing the crossings required by your planned days.",
    sightseeingQuestion: "Does a private car make Chongqing easy to visit with limited walking?",
    sightseeingAnswer:
      "A private car can reduce transfers and backtracking in Chongqing, but cannot remove every slope, stairway or walk from a drop-off point. Plan around specific entrances, manageable walking sections and seated breaks. Share walking tolerance before choosing the hotel and viewpoints; a central address or skyline view does not establish easy access.",
    visitorResources: [
      {
        label: "UNESCO: Dazu Rock Carvings",
        href: "https://whc.unesco.org/en/list/912/",
        scope:
          "Heritage background for a separate Dazu excursion. This source does not establish current tickets, access or inclusion in a Chongqing tour.",
      },
    ],
    routeAdvice:
      "Our eleven-day Chengdu, Chongqing and Zhangjiajie tour places Chongqing between pandas and mountain scenery. It gives the city three nights, one guided sightseeing day and one free day. You can keep that day independent or ask for additional guiding and transport. If you are visiting Chongqing on its own, ask us to plan a city stay around your dates.",
    title: "Chongqing Private Tours & Travel Guide",
    seoTitle: "Chongqing Travel Guide: Night Views & Hotels",
    seoDescription:
      "Plan Chongqing with practical advice on hotel access, hills, night views and hotpot. Compare stays and explore an 11-day Chengdu–Chongqing–Zhangjiajie tour.",
    answer:
      "Chongqing’s hills, rivers and evening skyline make it a distinctive city stop. Explore a neighborhood in daylight, leave time for a local meal, then enjoy a connected route through the night views. Careful planning of street levels, river crossings and pickup points helps you spend more time enjoying the city and less time retracing your steps.",
    serviceScope:
      "In our eleven-day Chengdu, Chongqing and Zhangjiajie tour, we coordinate the three-night Chongqing stay, intercity travel and one guided city day. The free day is yours to use independently, with additional private guiding, transport or an excursion available by separate arrangement. Your proposal sets out hotels, tickets, evening plans and service hours. We plan pickup points and walking sections around the city’s terrain; public attractions and transit still involve shared access and some walking.",
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
          "Separate an orientation and skyline day from food, neighborhoods or a slower day. This leaves arrival and departure for travel. In our 11-day route, one of these days is open time; extra guiding and vehicle service must be selected separately.",
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
        title: "Treat Dazu as a separate full-day choice",
        advice:
          "Visit Dazu Rock Carvings for a specific interest in sculpture and religious history. Confirm the site or sites, road travel and walking before selecting it. In the 11-day route, it is a paid option for the Chongqing free day; staying in the city or resting is also a complete choice.",
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
        comparison: {
          bestFor: "Chongqing between Chengdu and Zhangjiajie.",
          localPlan: "Three Chongqing nights; one guided sightseeing day plus one free day.",
          importantChoice:
            "Ask us to add a second guided city day or a Dazu excursion if you want one.",
        },
        label: "Explore the 11-day Chengdu, Chongqing and Zhangjiajie journey",
        reason:
          "Our eleven-day route connects Chengdu’s pandas and food, Chongqing’s river-city sights and Zhangjiajie’s mountains. Chongqing has three nights, one guided city day and one free day. Keep the free day independent or ask us to quote guiding, transport or an excursion.",
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
        slug: "langzhong",
        advice:
          "Langzhong provides a quieter Sichuan old-town contrast to Chongqing's steep urban riverfronts. Give the lanes and selected interiors a useful full day, with an assessed room and a verified onward connection. It is a separate overnight chapter, not a neighborhood excursion or an included stop on existing Chongqing tours.",
      },
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
    practicalPlanning: {
      timing:
        "Protect a full day from Chengdu for the Leshan journey, meal and selected viewing method. The linked five-day Chengdu route places Leshan on a separate optional day, not after the panda morning. If using rail, include station access and local transfers at both ends instead of treating train time as the complete outing.",
      walking:
        "A land visit can involve steep stairs and queues; a boat changes the viewing angle but may still require steps at boarding. For limited mobility, agree the actual route from vehicle to viewing point and what happens if the chosen approach is unavailable. Switching from boat to cliff stairs is not an equivalent fallback for every traveler.",
      cost: "Compare road service with rail plus local transfers, then identify guiding, admission, any boat ticket and meals. In the Chengdu five-day itinerary, decide whether to include Leshan before comparing the total. Keeping your Chengdu hotel can avoid a luggage move; an overnight or Mount Emei extension adds accommodation and a different transport plan.",
    },
    stayAnswer:
      "Allow a full day for a Leshan Giant Buddha excursion from Chengdu, including transfers and the selected viewing method. Most visitors focused on the Buddha can return to the same Chengdu hotel. Add an overnight for a slower Leshan visit or a separately planned Mount Emei extension, rather than assuming every Buddha visit requires a hotel change.",
    hotelAnswer:
      "Keep your Chengdu hotel for a focused Leshan day trip if the transfer plan works; this avoids moving luggage for one visit. Stay in Leshan when local food, a slower visit or an onward route makes the overnight worthwhile. For Mount Emei, choose the next base around the actual mountain access and transport plan.",
    sightseeingQuestion: "Is the Leshan Giant Buddha better by boat or on foot?",
    sightseeingAnswer:
      "Choose a Leshan boat visit for the overall view of the Giant Buddha from the river, or a land visit for closer detail if the steps and queues suit you. Boat operation depends on river and local operating conditions, and boarding may involve steps. For limited mobility, assess the actual boarding or land route before deciding; neither option is automatically step-free.",
    visitorResources: [
      {
        label: "UNESCO: Mount Emei and Leshan Giant Buddha",
        href: "https://whc.unesco.org/en/list/779/",
        scope:
          "Heritage context for the Buddha and Mount Emei. Confirm current boat operation and cliff-path access separately for your visit; the heritage listing is not an operating notice.",
      },
    ],
    routeAdvice:
      "Our five-day Chengdu itinerary keeps the panda visit and optional Leshan excursion on separate days. Choose the Leshan option, then discuss boat or land access, meals and transport with us. If you already have a Chengdu hotel and only need a day trip, ask for a separate proposal; the itinerary below is a multi-day Chengdu tour.",
    routeHeading: "How to include Leshan in a Chengdu tour",
    title: "Leshan Giant Buddha: Private Visits from Chengdu",
    seoTitle: "Leshan Giant Buddha: Boat or Walk from Chengdu",
    seoDescription:
      "Visit the Leshan Giant Buddha from Chengdu: compare boat and walking routes, steps and transfers. See the optional Leshan day in our private Chengdu tour.",
    stayHeading: "Day trip or overnight: how much time does Leshan need?",
    hotelHeading: "Where to base a Leshan visit",
    answer:
      "The Leshan Giant Buddha is best appreciated with a viewing approach that suits you. A boat offers the full figure in its cliff-and-river setting; a land visit brings you closer to the detail but can involve steep steps and queues. Choose how you want to see it first, then plan the journey from Chengdu.",
    serviceScope:
      "We can include Leshan as a separate day in your five-day Chengdu itinerary, with more city time as an alternative. We agree the viewing approach with you and specify transport, guiding, admission, any boat ticket and meals in your proposal. Boat operation and cliff-path access depend on local conditions. If access changes, the alternative needs to suit your walking ability as well as your interests. The linked itinerary is a Chengdu tour with an optional Leshan day.",
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
        comparison: {
          bestFor: "Leshan within a broader Chengdu stay.",
          localPlan: "A separate optional Leshan day within four Chengdu nights.",
          importantChoice:
            "Select boat or land access and the included services; this is not a standalone Leshan day-tour product.",
        },
        label: "Explore the 5-day Chengdu tour with an optional Leshan day",
        reason:
          "Our five-day Chengdu itinerary gives pandas and the optional Leshan visit separate days within a four-night stay. Choose the Leshan option if the Buddha is a priority, then agree boat or land access, transport and meals. For a standalone day trip, ask us for a separate proposal.",
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
        slug: "mount-emei",
        advice:
          "Mount Emei adds a distinct Buddhist mountain and forest stay. The shared UNESCO property does not create a combined entrance or remove the full transfer. Allow useful Emei nights and review summit transport, steps and sleeping altitude; a Leshan itinerary does not automatically include the mountain.",
      },
      {
        slug: "chengdu",
        advice:
          "Use Chengdu for the panda visit, tea and city food, with Leshan on a separate day if it suits the group. Keeping the same hotel can simplify luggage. For onward travel, confirm the actual Chengdu airport or railway station and leave enough time after the excursion.",
      },
    ],
  },
  jiuzhaigou: {
    practicalPlanning: {
      timing:
        "Allow separate arrival and departure days around the main Jiuzhaigou park day. Our seven-day route has three nights in Chengdu and three in the Jiuzhaigou area; its second mountain day is flexible. It ends in the region, so a return to Chengdu needs additional transport time and possibly another hotel night.",
      walking:
        "Park buses reduce distance but leave boarding, waiting and selected boardwalk or viewpoint walks. Decide which walking sections matter most and where to turn back. Huanglong adds higher elevation and a different physical load; comfort on a city walk does not establish that it is suitable. Discuss relevant health concerns before booking and seek medical advice where needed.",
      cost: "Compare the actual regional arrival point, final road transfer, hotel location and park admissions. A second park entry, Huanglong and a return to Chengdu are separate choices to confirm. Compare the cost of a complete arrival-to-departure route, including any extra night, rather than a train fare or hotel rate in isolation.",
    },
    stayAnswer:
      "Allow one full day for the main Jiuzhaigou park visit, with separate time to arrive and leave the region. Two nights can support that focused plan when connections fit. Three nights add a flexible day for rest or another visit you choose; they do not automatically include another park entry or a Huanglong excursion.",
    hotelAnswer:
      "For the main Jiuzhaigou visit, compare hotels near the park entrance in Zhangzha with resorts farther along the valley. Check the actual hotel-to-entry transfer, heating, lifts, breakfast and evening meals. A regional station or airport hotel suits a particular connection, but should not be mistaken for a convenient park-entrance base.",
    sightseeingQuestion: "Can you visit Jiuzhaigou and Huanglong in one day?",
    sightseeingAnswer:
      "Plan Jiuzhaigou and Huanglong as separate scenic visits. Jiuzhaigou deserves a full park day, while Huanglong has its own road journey, higher elevation and walking demands. A cableway does not remove altitude exposure. Add Huanglong only when the group’s health, mobility and route support it; a rest day is a valid alternative.",
    visitorResources: [
      {
        label: "Jiuzhaigou Scenic Area official website",
        href: "https://www.jiuzhai.com/",
        scope:
          "Check current park notices and visitor arrangements before confirming the park day.",
      },
      {
        label: "China Railway 12306 English FAQ",
        href: "https://www.12306.cn/en/faq.html",
        scope:
          "Check rail passenger procedures and use the actual service and station for your travel date. A regional train arrival still requires a road transfer to the park-area hotel.",
      },
    ],
    routeAdvice:
      "Our seven-day Chengdu and Jiuzhaigou tour combines pandas and Sichuan food with a mountain-park stay. Start with the main Jiuzhaigou visit, then decide whether rest or another scenic day suits your group. Consider Huanglong separately because of its higher elevation. The tour ends in the region; we can discuss an added return to Chengdu if your onward travel requires it.",
    title: "Jiuzhaigou Private Tours & Travel Guide",
    seoTitle: "Jiuzhaigou Travel Guide: Transport & Hotels",
    seoDescription:
      "Plan Jiuzhaigou with practical transport, hotel, altitude and walking advice. Explore a 7-day Chengdu and Jiuzhaigou tour and check where the journey ends.",
    answer:
      "Jiuzhaigou offers lakes, forest and waterfalls, with park buses linking the areas you explore on foot. Give the scenery a full day and allow separate time for the mountain journey. A well-chosen hotel and a realistic transfer plan help you arrive ready to enjoy the park rather than treating it as a rushed outing from Chengdu.",
    serviceScope:
      "Our seven-day Chengdu and Jiuzhaigou tour includes three nights in each area, with hotels, transport, guiding and tickets detailed in your proposal. Your guide helps you choose walks within the park’s shared bus system; the private road vehicle serves the transfers outside it. Huanglong is an optional visit at higher elevation. The itinerary ends in the Jiuzhaigou area, with a return to Chengdu arranged separately if needed. We clarify these choices before you book.",
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
          "Use one full day for the park and another for rest, a separately planned scenic visit or an appropriate Huanglong option. This is the Jiuzhaigou-area allocation in our seven-day journey. The second day is not automatically another included park entry or a promise that Huanglong will be suitable.",
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
    ],
    products: [
      {
        slug: "chengdu-pandas-jiuzhaigou-private-7-day-tour",
        comparison: {
          bestFor: "Chengdu and a mountain stay with transport and visits arranged together.",
          localPlan: "Three Jiuzhaigou-area nights; one main park day and one flexible day.",
          importantChoice:
            "Huanglong, repeat park entry and return to Chengdu are not automatic additions.",
        },
        label: "Explore the 7-day Chengdu and Jiuzhaigou private journey",
        reason:
          "Our seven-day itinerary combines Chengdu’s pandas and food with three nights in the Jiuzhaigou area. It includes a main park day and a flexible second mountain day. Review whether Huanglong suits your group, and add a return to Chengdu if your onward travel requires it.",
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
        slug: "huanglong",
        advice:
          "Huanglong adds a separate high-altitude travertine landscape, not another section of Jiuzhaigou. Review its actual cableway connection, remaining walking, full road journey and sleeping elevations before choosing it. It is not included in the published seven-day route; any addition is separately arranged and priced.",
      },
      {
        slug: "chengdu",
        advice:
          "Pair Jiuzhaigou with Chengdu for pandas, tea and Sichuan meals. Keep the regional transfer on a separate travel day. If returning for an international flight, confirm the actual Chengdu airport and consider an overnight margin rather than relying on a tight mountain-to-airport connection.",
      },
    ],
  },
  zhangjiajie: {
    practicalPlanning: {
      timing:
        "The Shanghai eight-day route gives Zhangjiajie three full scenic days: two forest park days and a separate Tianmen day. The eleven-day southwest route has two guided forest park days plus a free day. To compare them fairly, identify whether Tianmen or another excursion is selected and which day’s private service is included.",
      walking:
        "Cableways and the Bailong Elevator reduce climbs but leave walks, queues, steps and height exposure. Choose a shorter valley distance and selected viewpoints if the full route is too demanding. Describe knee, balance and height concerns before tickets are fixed; a paid lift is not evidence that every connecting path is accessible.",
      cost: "Compare the included scenic areas and the required buses, elevators and cableways, not just an overall “Zhangjiajie” label. Tianmen, the Grand Canyon and guide or vehicle service on the free day may change the quote. A split Wulingyuan/city stay can reduce backtracking, but should include a clear luggage and hotel-transfer arrangement.",
    },
    stayAnswer:
      "Allow three full sightseeing days for a first Zhangjiajie visit combining two national forest park days with a separate Tianmen Mountain day, usually with four nights. With two full days, choose two forest park days or a selective park-and-Tianmen combination. The Grand Canyon glass bridge needs its own time and booking; four nights do not create a fourth full sightseeing day.",
    hotelAnswer:
      "Stay in Wulingyuan for repeated national forest park visits and consider Zhangjiajie City for Tianmen Mountain or a suitable departure connection. A split stay can reduce backtracking if the route justifies a hotel change. Confirm the park entrance, Tianmen boarding arrangement and luggage movement before booking bases from map distance alone.",
    sightseeingQuestion:
      "Are Zhangjiajie National Forest Park, Tianmen Mountain and the glass bridge the same place?",
    sightseeingAnswer:
      "Zhangjiajie National Forest Park, Tianmen Mountain and the Grand Canyon glass bridge are separate outings with different access and booking arrangements. Tianmen’s glass walkways are not the Grand Canyon bridge. Choose which scenic areas matter to you, then compare the tour’s included visits; a product labeled “Zhangjiajie” does not automatically include all three.",
    visitorResources: [
      {
        label: "UNESCO: Wulingyuan Scenic and Historic Interest Area",
        href: "https://whc.unesco.org/en/list/640/",
        scope:
          "Landscape and heritage context for Wulingyuan. This listing does not confirm Tianmen or Grand Canyon admission, ticket availability or daily scenic-transport operation.",
      },
    ],
    routeAdvice:
      "Choose our eight-day Shanghai and Zhangjiajie tour for a city-and-mountain trip with a separate Tianmen Mountain day. The eleven-day route adds Chengdu’s pandas and Chongqing before two forest park days. Its free Zhangjiajie day can remain independent or include separately quoted Tianmen, Grand Canyon or private-service options. Compare the actual visits and guided days as well as the total trip length.",
    title: "Zhangjiajie Private Tours & Travel Guide",
    seoTitle: "Zhangjiajie Private Tours: Parks, Hotels & Walking",
    seoDescription:
      "Plan Zhangjiajie with clear advice on Wulingyuan, Tianmen Mountain, hotel bases, walking and park transport. Compare Shanghai and southwest China private tours.",
    answer:
      "Zhangjiajie offers sandstone pillars, forest walks and dramatic mountain viewpoints. Give the national forest park time for both the views from above and the valley scenery below. Tianmen Mountain and the Grand Canyon are separate visits; choosing the experiences you most want to see makes the hotel plan and daily pace much clearer.",
    serviceScope:
      "We coordinate private guiding and road transfers with the buses, elevators and cableways used inside Zhangjiajie’s scenic areas. Those scenic transport services are shared and subject to operation. The Shanghai eight-day itinerary includes a separate Tianmen Mountain day; the eleven-day Chengdu, Chongqing and Zhangjiajie itinerary offers Tianmen and the Grand Canyon as optional visits on the free day, priced separately. Your proposal sets out the hotel bases, tickets, transport and days with a guide.",
    attractions: [
      "Zhangjiajie National Forest Park",
      "Yuanjiajie",
      "Tianzi Mountain",
      "Golden Whip Stream",
      "Tianmen Mountain",
      "Zhangjiajie Grand Canyon",
    ],
    stays: [
      {
        label: "2 nights: choose one scenic priority",
        advice:
          "Arrival and departure on separate days leave one full sightseeing day. Choose the forest park or Tianmen according to your main interest, ticket availability and transport times. This is a focused stop, not enough time for a complete visit to every scenic area.",
      },
      {
        label: "3 nights: two full park days or a selective combination",
        advice:
          "Give both days to the forest park for cliff-top and valley scenery, or choose one forest-park day and one Tianmen day with fewer stops. A two-day combination is more selective than the three-day plan and still needs time for the transfer between bases.",
      },
      {
        label: "4 nights: three full sightseeing days",
        advice:
          "Two forest park days and a separate Tianmen day make a practical first-visit itinerary. Split hotel bases only when the sequence and onward travel justify the move. Four nights do not create a fourth full day between arrival and departure.",
      },
      {
        label: "5 nights or more: add flexibility or a distinct extra visit",
        advice:
          "Use extra time for rest, photography or a separately confirmed Grand Canyon visit. A weather buffer does not guarantee clearer views, spare admission or free re-entry. Confirm additional tickets, guiding and transport if you want to revisit or move a booked scenic day.",
      },
    ],
    hotelAreas: [
      {
        name: "Wulingyuan: convenient for forest park days",
        advice:
          "A useful base for repeated national forest park visits. Check the entrance used by your route and the actual hotel-to-gate transfer; Wulingyuan is an area, not one hotel cluster beside every gate. Ask about breakfast, lifts and dinner options before choosing by mountain views alone.",
      },
      {
        name: "Zhangjiajie City: Tianmen and transport connections",
        advice:
          "Consider a city stay for the confirmed Tianmen route, airport or railway departure. Check the actual boarding point and hotel access instead of assuming all Tianmen tickets start in the same place. A city hotel adds a transfer when your next day is in the Wulingyuan forest park.",
      },
      {
        name: "Split stays or outlying retreats",
        advice:
          "A move from Wulingyuan to the city can reduce backtracking before Tianmen or departure, but adds packing and luggage handling. A quieter retreat may suit longer stays if its road access and dining work. Agree the hotel change and luggage plan before booking consecutive scenic days.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose the base and gate from the next day’s route",
        advice:
          "Confirm where you enter, how the route finishes and where the vehicle will meet you. A hotel labeled ‘Zhangjiajie’ may be far from the gate you need. For a split stay, arrange luggage movement rather than assuming you can carry large bags through a full mountain day.",
        articleSlug: "where-to-stay-in-zhangjiajie",
        articleLabel: "Compare Wulingyuan and Zhangjiajie City hotel bases",
      },
      {
        title: "Cableways and the Bailong Elevator reduce climbs, not all walking",
        advice:
          "Expect walks between transport stops and viewpoints, queues, steps and uneven surfaces. Discuss knees, balance, wheelchair or stroller needs and comfort with heights before choosing a route. A private guide can shorten sections and choose alternatives but cannot make every viewpoint accessible.",
        articleSlug: "how-difficult-is-zhangjiajie",
        articleLabel: "Assess Zhangjiajie’s walking, steps and height exposure",
      },
      {
        title: "Keep glass experiences optional",
        advice:
          "Tianmen’s glass walkways and the Grand Canyon glass bridge are different attractions. Tell the planner about discomfort with heights before tickets and routes are fixed. Confirm whether a glass section can be omitted on the selected route rather than assuming every experience is compulsory or easily bypassed.",
      },
      {
        title: "Use weather flexibility within the actual booking rules",
        advice:
          "Mist may hide the pillars, and wind or severe weather can affect transport or access. Ask which days can be reordered and which tickets have fixed entry or route conditions. An extra night gives options, but does not promise an operating cableway, another admission slot or a clear panorama.",
      },
    ],
    products: [
      {
        slug: "shanghai-zhangjiajie-floating-peaks",
        comparison: {
          bestFor: "Shanghai city life, the forest park and Tianmen Mountain.",
          localPlan: "Four Zhangjiajie-area nights; two forest park days and one Tianmen day.",
          importantChoice:
            "The Grand Canyon glass bridge is optional; verify the split hotel bases and scenic transport.",
        },
        label: "Explore the 8-day Shanghai and Zhangjiajie private tour",
        reason:
          "Our eight-day Shanghai and Zhangjiajie tour gives the forest park and Tianmen Mountain their own days, with a final night back in Shanghai. Review the Wulingyuan and city hotel sequence, mountain transport and domestic connections. The Grand Canyon glass bridge is an optional addition.",
      },
      {
        slug: "chengdu-chongqing-zhangjiajie-private-11-day-tour",
        comparison: {
          bestFor: "Pandas, Chongqing and the forest park in one route.",
          localPlan: "Four Zhangjiajie-area nights; two guided forest park days plus one free day.",
          importantChoice:
            "Tianmen, the Grand Canyon and private guiding and transport on the free day can be added at an agreed extra cost.",
        },
        label: "Explore the 11-day Chengdu, Chongqing and Zhangjiajie journey",
        reason:
          "Our eleven-day Chengdu, Chongqing and Zhangjiajie tour includes two guided forest park days and one free day in Zhangjiajie. Keep it for rest or ask us to add Tianmen, the Grand Canyon or private guiding and transport. Those additions are quoted separately.",
      },
    ],
    articles: [
      {
        slug: "tianmen-mountain-vs-zhangjiajie-national-forest-park",
        label: "Choose between Tianmen Mountain and forest-park scenery",
      },
      {
        slug: "where-to-stay-in-zhangjiajie",
        label: "Decide where to stay for your Zhangjiajie route",
      },
      {
        slug: "how-difficult-is-zhangjiajie",
        label: "Check walking, steps and cableway comfort before booking",
      },
    ],
    connections: [
      {
        slug: "changsha",
        advice:
          "Changsha adds a different Hunan chapter through Mawangdui discoveries, Yuelu learning history and regional food. Give it useful city nights and a confirmed museum plan, then compare dated trains and both hotel transfers. The published Zhangjiajie products do not automatically include Changsha rooms, sightseeing or this extension.",
      },
      {
        slug: "chongqing",
        advice:
          "Pair Zhangjiajie with Chongqing for a contrast between sandstone scenery and a river city. Confirm the actual rail or flight connection and allow the final transfer to the correct hotel base. Consider the combined walking load of city stairs and mountain days when choosing rest time.",
      },
      {
        slug: "guilin",
        advice:
          "Add Guilin and Yangshuo if river scenery and countryside are a separate priority. They are another regional stay, not a nearby excursion from Zhangjiajie. Check the available connection, hotel transfer and onward route before assuming a cruise will fit the next morning.",
      },
    ],
  },
};
