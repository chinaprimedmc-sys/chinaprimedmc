import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/dalian.svg",
  alt: "Original Dalian planning schematic comparing central architecture, Xinghai Bay, Donggang and outlying Jinshitan, with a separate Lüshun history day; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const dalianGuide: ExpandedDestination = {
  id: "dalian",
  name: "Dalian",
  region: "northeast",
  kicker: "A coastal city where the neighborhood changes the holiday",
  description:
    "Choose Dalian for architectural history, selected coastal walks and unhurried seafood meals, with a clear choice between a city hotel, a waterfront stay and an outlying resort.",
  stay: "2–3 nights for the city; 4 for a separate excursion or resort time",
  bestFor: "Coastal city breaks, architectural history and a slower Liaoning journey",
  interests: ["city", "heritage", "food", "landscape"],
  relatedDestinationIds: ["shenyang", "qingdao", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Dalian Travel Guide: Coastal Walks, Hotels & Itineraries",
    seoTitle: "Dalian Guide: Coast, Hotels & Itineraries",
    seoDescription:
      "Plan Dalian with Zhongshan Square, coastal walks and hotel advice: compare Xinghai Bay, Donggang and Jinshitan, then decide whether to add a Lüshun day trip.",
    answer:
      "Dalian (大连) is a coastal city in southern Liaoning, on the Liaodong Peninsula in northeast China. Its strongest short-stay combination is a considered architecture walk, a selected stretch of coast and time for good meals, rather than a checklist of distant beaches. Two nights suit one focused full day; three allow city history and the waterfront to have separate days. Central Zhongshan, Xinghai Bay and Donggang offer different urban bases, while Jinshitan, also called Golden Pebble Beach, is an outlying resort and landscape area. A sea-view room does not necessarily provide a sandy beach or suitable swimming. Choose the kind of holiday first, then the neighborhood and actual room.",
    stayAnswer:
      "Allow two nights for a compact city break with one full day and useful arrival or departure time. Three nights work better for two distinct days: architecture and collections on one, a coastal outing on the other. Four nights make sense when adding a separately planned Lüshun history day or genuine leisure time at Jinshitan. A late arrival followed by an early train is not a sightseeing day. Avoid moving between city and resort hotels for a single night unless the change delivers something you actually want; packing and transfers can consume the benefit.",
    hotelAnswer:
      "Choose central Zhongshan for architecture, restaurants and an urban evening; Xinghai Bay for a waterfront-led city stay; Donggang for a contemporary harbor-side setting; or Jinshitan for a separate resort brief. Compare the actual address, room aspect, noise, breakfast and access to dinner. A district name covers too much ground to establish walkability. At an outlying property, check seasonal dining and the precise relationship between the hotel, coast and any swimming area. For a premium stay, a quiet room with a useful outlook and an easy daily route matters more than a broad luxury label.",
    sightseeingQuestion: "Should I stay in central Dalian, Xinghai Bay, Donggang or Jinshitan?",
    sightseeingAnswer:
      "Stay central if architecture, food and a varied city break lead the trip. Choose Xinghai Bay when a waterfront hotel and coastal time matter alongside city visits. Donggang suits a modern waterfront atmosphere, with the exact room and evening noise checked. Choose Jinshitan when you want to spend real time in that outlying coastal area, accepting the separate journeys to central sights. These are alternative bases, not four adjacent neighborhoods to cover before lunch. For a first three-night stay, one well-chosen city base is often simpler than a hotel change.",
    visitorResources: [
      {
        label: "Dalian municipal government",
        href: "https://www.dl.gov.cn/",
        scope:
          "Official local background and dated public notices, mainly in Chinese. Check the responsible site or operator for current opening, visitor eligibility, coastal access and bookings. A city overview does not confirm a particular hotel, beach facility or Lüshun visit.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated train services and exact stations. Dalian and Dalian North are different gateways; include both hotel transfers before comparing a rail connection with flying.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the hotel and room, complete station or airport transfers, selected coastal sections, named cultural sites, guiding language and admissions. A private vehicle does not provide unrestricted beach, port or military-area access. For Lüshun, establish the exact sites and current eligibility for each traveler's documents before confirming the day. A boat, hosted meal, architecture specialist, private gallery visit or seafood market experience needs its own confirmed arrangement; none is included merely because the guide discusses local culture. Identify weather alternatives and the final walking approach where these affect the guest.",
    routeAdvice:
      "Pair Dalian with Shenyang for a contrast between the coast and the early Qing court's inland setting. Beijing adds a different imperial and contemporary city chapter. Qingdao is an alternative coastal-city choice, or a separate stay when the wider route justifies both. Compare actual dated transport and complete transfers rather than draw a convenient line across the sea: a ferry connection requires a verified service, terminal, schedule and conditions. No matching published Dalian itinerary is listed here. Share your dates, nights, preferred hotel setting and interest in history, coast or resort time to shape a tailored route.",
    practicalPlanning: {
      timing:
        "Give architecture, a selected coast and an outlying excursion their own realistic windows. Coastal wind, rain and visibility affect the experience, while summer weekends and holidays can change how a popular waterfront feels. Keep an indoor collection or a proper lunch as a useful alternative to a long exposed walk. For swimming or a boat, check the specific place and day's conditions; warm air and a hotel photograph do not establish safe water access. Do not build a fixed onward connection around an unverified ferry.",
      walking:
        "Central squares, seafront promenades, park paths and rocky coastal viewpoints have different surfaces and gradients. Select a manageable Binhai Road section and identify the vehicle pickup rather than promise the whole coastal road as a short walk. A bay-view hotel may still be separated from the water by roads, slopes or a long approach. Check steps, toilets, seating, shade and wind exposure for the exact outing. Limited mobility requires a route-level assessment, including museum access and the final approach, rather than a general claim that the city is flat.",
      cost: "Compare the exact room, stay dates, meals, complete transfers, guide time and admissions. Waterfront pricing can reflect a view or location without including beach facilities or swimming. At seafood restaurants, establish species, weight or portion basis, cooking charge and the agreed total before preparation where relevant. Sea cucumber and other expensive ingredients are optional tastes, not necessary proof of a premium meal. Spend on a suitable room, thoughtful interpretation and a coherent route before adding distant stops or undefined exclusive experiences.",
    },
    attractions: [
      "Zhongshan Square and a selective architecture walk through central Dalian",
      "Dalian Museum for a named, current exhibition interest",
      "A chosen Binhai Road coastal section with a clear start and pickup",
      "Xinghai Bay, distinguishing Xinghai Square from Xinghai Park",
      "Donggang's contemporary waterfront, with its modern themed development understood",
      "Jinshitan / Golden Pebble Beach as a separate coastal landscape or resort day",
      "A site-specific Lüshun / Port Arthur history excursion when current access is confirmed",
    ],
    stays: [
      {
        label: "2 nights / a focused city-and-coast introduction",
        advice:
          "Use one full day for an architecture-led morning and a selected coastal afternoon, keeping meals and the return journey comfortable. Choose a central or waterfront city hotel. Leave Jinshitan and a full Lüshun day for another visit unless one of them is the main reason for coming.",
      },
      {
        label: "3 nights / two complementary days",
        advice:
          "Give central architecture and a museum interest one day, then make the second about a coherent coast rather than several scattered bays. This allows weather flexibility and a quieter meal or hotel afternoon. It is a stronger city break than racing through every named waterfront.",
      },
      {
        label: "4 nights / a distinct history or resort chapter",
        advice:
          "Add Lüshun only with a defined historical brief and verified sites, or spend meaningful time at Jinshitan. Choose between them if leisure is the priority. Extra nights should reduce pressure and deepen the experience rather than simply produce more hours in a vehicle.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Zhongshan / architecture and a real city evening",
        advice:
          "Useful when old-city streets, restaurants and cultural visits lead the stay. Locate the exact hotel relative to the planned walk rather than assume the entire district is convenient. Check traffic noise, room aspect and the return after dinner. A sea view is not necessary for a rewarding Dalian visit.",
      },
      {
        name: "Xinghai Bay / a waterfront-led city base",
        advice:
          "Compare the actual bay outlook, distance to a pleasant walk and transfer to central architecture. Xinghai Square and Xinghai Park are distinct places; being near one does not mean being beside the other. Confirm the room category and approach to the water, not just the property's promotional view.",
      },
      {
        name: "Donggang / a contemporary waterfront setting",
        advice:
          "Choose for the modern seafront atmosphere and the particular hotel, accepting that historic central sights require their own route. Check the room's outlook, evening activity, dining and transport. The Venice-themed development is modern leisure architecture, not an old European settlement preserved in China.",
      },
      {
        name: "Jinshitan / an outlying resort and landscape base",
        advice:
          "Choose when beach-area leisure or the local coastal landscape deserves dedicated time. Confirm the hotel's actual beach relationship, permitted swimming, seasonal facilities and dining. Plan central Dalian as a separate journey. A resort address and a sea-view room do not establish private sand or lifeguarded swimming.",
      },
    ],
    tradeoffs: [
      {
        title: "A sea view, beach access and swimming are three different things",
        advice:
          "Dalian's coast includes promenades, rocky edges, beaches and developed waterfronts. Establish the specific shoreline and access before choosing a property for a beach holiday. Swimming depends on local rules, water and weather conditions, supervision and the guest's ability; a room photograph cannot answer those questions.",
      },
      {
        title: "Walk a selected coast rather than collecting every bay",
        advice:
          "Binhai Road links a broader coastal landscape. Select a section for the views and effort you want, with a clear endpoint and return. Combining every viewpoint with Jinshitan and central architecture creates a transfer-heavy day. One satisfying walk and a good lunch can be the better use of limited time.",
      },
      {
        title: "Lüshun needs a historical purpose and site-specific access checks",
        advice:
          "Lüshun, historically known in English as Port Arthur, offers a different chapter of regional history. It is not simply another city-center stop. Agree on named museums, memorial or heritage places and verify current foreign-visitor eligibility for those sites. Avoid both blanket claims that the whole area is closed and blanket promises that every place is open; sightseeing does not imply access to working ports or military facilities.",
      },
      {
        title: "Architecture should explain power as well as appearance",
        advice:
          "Around Zhongshan Square, different buildings and phases reflect Russian imperial ambitions, Japanese colonial rule and later Chinese urban life. An individual building's origin, later use and current access need separate explanation. A European-looking facade does not make the surrounding district European or reduce its history to a decorative walking tour.",
      },
      {
        title: "A modern themed waterfront is a different cultural experience",
        advice:
          "Donggang can be enjoyable for contemporary leisure and an evening setting. Describe its Venice-themed area honestly as a modern development. Travelers seeking historic architecture may prefer to spend their main cultural time in central streets, while those wanting a relaxed modern promenade may enjoy Donggang on its own terms.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "shenyang",
        advice:
          "Shenyang adds the early Qing palace, a selected imperial tomb and provincial collections to Dalian's coastal story. Use the actual railway stations and complete hotel transfers to protect useful days in both cities. The two places reward different interests rather than interchangeable northeast stopovers.",
      },
      {
        slug: "qingdao",
        advice:
          "Compare Qingdao for its own hillside neighborhoods, German colonial-era architecture, beer history and coast. Choose the city that best fits the guest's interests, or allow a distinct stay in each. Any sea crossing needs a verified dated service; geographical proximity across the water is not a transport booking.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing can anchor the wider trip with imperial collections and a separate Great Wall day. Compare actual flights or trains, arrival stations and hotel transfers before assigning nights. Keep a meaningful Dalian coastal day rather than reduce the visit to two terminal journeys around one dinner.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring and early autumn can suit architecture walks and coastal days, with variable wind and rain still possible. Summer favors a seaside-holiday brief but can bring heat, humidity and busy popular areas; suitable swimming requires a specific local assessment. Winter offers a different city visit, with cold and coastal wind making indoor time and warm breaks more important. It is not the same holiday as a summer resort stay. Choose dates for the intended experience rather than assume every northeast destination shares Harbin's winter appeal.",
    orientation:
      "Central Dalian, Xinghai Bay and Donggang are different city settings. Jinshitan lies farther out and should be planned as a distinct excursion or accommodation base. Lüshun is a separate southwestern history direction. Dalian railway station and Dalian North railway station are not interchangeable, and Dalian Zhoushuizi Airport adds another transfer. Use exact Chinese hotel and meeting addresses. The municipality is much larger than the short-stay visitor's central map, so a Dalian address alone says little about the daily route.",
    experiences: [
      "Read Zhongshan Square's architecture through the city's imperial, colonial and modern history",
      "Choose one rewarding coastal section with time for a good meal and the actual return",
      "Match the hotel to a city break, a waterfront stay or a separate Jinshitan resort brief",
    ],
    planningNotes: [
      "Distinguish Xinghai Square, Xinghai Park, Donggang and outlying Jinshitan",
      "Assess Lüshun by named sites and current visitor eligibility rather than blanket access claims",
      "Confirm the real shoreline, room and facilities before treating a sea view as a beach holiday",
    ],
    arrival:
      "Build the journey around the booked flight or train and the exact operating terminal. Dalian Zhoushuizi Airport, Dalian station and Dalian North require different hotel transfers. Check the whole arrival sequence, particularly for a Jinshitan base, rather than compare only time in the air or on the train. Use dated rail services for a Shenyang connection. A proposed ferry to or from Shandong needs current service, terminal, check-in, luggage and weather information; do not infer availability from an old route description or the map.",
    gettingAround:
      "Cluster the day by purpose and area: central architecture, a chosen coast, or a separate outlying excursion. Public transport can suit particular city legs, but compare the full route and remaining walk for the actual guest. A vehicle helps connect selected places without turning every bay into a compulsory stop. Identify real drop-off and pickup points, toilets and meal breaks; private transport does not remove park paths, slopes or restricted access. Keep coastal weather alternatives practical rather than far across the municipality.",
    stayStrategy:
      "Start with the holiday brief. For a three-night city visit, a single central, Xinghai or Donggang base usually avoids unnecessary packing. Choose the exact room for quiet, outlook and breakfast, then assess the route to dinner and the planned sights. Jinshitan deserves a separate accommodation decision when resort time is the purpose. Confirm facilities for the travel dates, especially outside the main summer period. A higher room category should deliver a stated benefit rather than an assumed private beach or a vague sea-facing promise.",
    firstTimerNote:
      "Choose one main reason to visit before comparing hotels: city architecture, a waterfront break or outlying resort time. Then ask how many useful days remain after transfers, which coast the room actually faces and what can be enjoyed if the weather changes. This keeps a first visit focused and makes a tailored proposal easier to judge than a long list of beach names.",
    faqs: [
      {
        question: "Is Dalian worth visiting on a first trip to China?",
        answer:
          "Yes when coastal city time, architectural history and a slower Liaoning route match your interests. It is a selective addition rather than an essential stop for every first visit. Allow two or three nights with useful sightseeing time; a distant resort or Lüshun adds a separate planning decision.",
      },
      {
        question: "How many days do I need in Dalian?",
        answer:
          "Two nights can provide one focused full day; three allow two complementary city-and-coast days. Consider four for a distinct Lüshun history day or real Jinshitan leisure. Count arrival and departure hours honestly and choose the outlying interests instead of trying to see the entire municipality.",
      },
      {
        question: "Where should I stay in Dalian for a first visit?",
        answer:
          "Compare central Zhongshan for architecture and dining, Xinghai Bay for a waterfront city stay and Donggang for a modern seafront setting. Choose Jinshitan for a separate resort brief. Check the actual address, room, noise and coast access; the district name alone cannot establish convenience.",
      },
      {
        question: "Is Jinshitan the same as Golden Pebble Beach?",
        answer:
          "Golden Pebble Beach is a commonly used English name for the Jinshitan destination area. It is an outlying coastal and resort choice, not central Dalian's beachfront. Identify the particular hotel, landscape site or beach you want, since the area name does not specify one entrance or a swimming arrangement.",
      },
      {
        question: "Can foreign visitors go to Lüshun, also called Port Arthur?",
        answer:
          "Plan around named sites and check current eligibility for the traveler's documents before booking. Neither a blanket ban on the whole area nor unrestricted access to every site is a sound planning assumption. A heritage or museum visit does not imply permission to enter working port or military areas.",
      },
      {
        question: "Can I swim in Dalian or use a private hotel beach?",
        answer:
          "Only assess this for a particular beach, property and travel date. A sea view does not establish beach access, private use, safe water or supervision. Confirm local permission, current conditions and facilities, and keep an enjoyable alternative if swimming is unsuitable.",
      },
      {
        question: "Are Xinghai Square and Xinghai Park the same place?",
        answer:
          "No. They are distinct places in the broader coastal city. Locate the exact hotel and selected walk before booking, and do not assume being near one means being beside the other. This distinction matters for walking distance, pickup and expectations of the shoreline.",
      },
      {
        question: "Is Dalian station the same as Dalian North?",
        answer:
          "No. Confirm the full station name on the actual train booking and arrange the corresponding transfer. Compare hotel-to-hotel time for a Shenyang or other rail connection, including luggage and arrival procedures, rather than treat every train labeled Dalian as using the same gateway.",
      },
    ],
    culturalStory: {
      title: "Look beyond the facades to the city that made them",
      paragraphs: [
        "Zhongshan Square provides a starting point for understanding Dalian's urban development, but the buildings should not be presented as one timeless European ensemble. Russian imperial development, Japanese colonial rule and later Chinese use belong to different phases with different power relationships. A worthwhile walk identifies selected buildings, their dates and changing functions, while distinguishing an exterior view from actual interior access. The history can be engaging without romanticizing colonial rule.",
        "Lüshun, known historically as Port Arthur, shifts the emphasis toward another strategic and historical setting on the peninsula. It needs a separately researched route and appropriate interpretation, not a hurried detour or a promise of port access. Back in central Dalian, current restaurants, offices and public spaces keep the story grounded in a living Chinese city. Donggang's contemporary development adds a modern leisure chapter, which is valuable when described honestly rather than passed off as surviving historic Europe.",
      ],
    },
    foodStory: {
      title: "Order for flavor and confidence, not the most expensive ingredient",
      paragraphs: [
        "Seafood can be a rewarding part of a Dalian stay, especially when the kitchen explains a few preparations and the group has time to eat comfortably. Establish whether an item is priced by weight, portion or piece, and whether preparation costs extra. Choose contrasting dishes and vegetables rather than order every premium ingredient. Sea cucumber has a distinctive texture and preparation tradition; guests who do not enjoy it should not feel they have missed the city. A regional comfort dish such as Dalian menzi, a starch-based snack often served with sesame and garlic sauces, offers a different entry into local food, with the actual recipe checked.",
        "Ask about fish bones, shellfish, sauces, stocks, sesame, soy and shared cooking equipment where dietary needs matter. A vegetable plate may contain seafood or animal stock, and a familiar dish name does not establish an allergen-free recipe. Non-seafood eaters deserve a balanced meal chosen with the kitchen. Serious allergies or religious requirements need confirmed capability and an alternative. A market visit, chef-led tasting or hosted meal is a separate arrangement, not an automatic feature of a coastal destination.",
      ],
    },
    itinerary: [
      {
        day: "Day 1 / arrival",
        title: "Settle into the neighborhood you chose",
        description:
          "Complete the actual airport or station transfer, then take a short local walk and an unhurried dinner if arrival allows. Use the evening to enjoy the hotel's setting. Do not attach a distant resort or timed heritage visit to an uncertain arrival window.",
      },
      {
        day: "Day 2 / city history",
        title: "Connect central architecture with a selected collection",
        description:
          "Begin with a focused Zhongshan Square and neighborhood walk that explains different building histories. Take a proper lunch, then choose Dalian Museum for an actual current exhibition interest or another coherent city subject. Check opening and booking before fixing the order; keep time to rest rather than fill every hour.",
      },
      {
        day: "Day 3 / the coast",
        title: "Choose a coastline instead of racing between them",
        description:
          "Select a manageable Binhai Road section or a Xinghai-led outing with the full return planned. If Donggang is the preferred contemporary setting, give it a useful window rather than treating it as historic Europe. Jinshitan can replace the city-coast day when its particular landscape is the priority; it should not be squeezed into the same list.",
      },
      {
        day: "Day 4 / departure or an additional night",
        title: "Finish comfortably, or make space for a separate chapter",
        description:
          "Use the actual onward train or flight to decide what fits before departure. With an additional night, consider a defined Lüshun history day after access checks, or genuine resort time instead. This three-night outline is illustrative, not a published package, and does not promise specific rooms, specialist hosts, swimming, ferries or restricted-area access.",
      },
    ],
  },
};
