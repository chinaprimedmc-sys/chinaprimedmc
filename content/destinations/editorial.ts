import type { ExplorerDestination } from "@/content/destinations/explorer";

export type DestinationEditorial = {
  bestTime: string;
  orientation: string;
  experiences: [string, string, string];
  planningNotes: [string, string, string];
  arrival: string;
  gettingAround: string;
  stayStrategy: string;
  firstTimerNote: string;
  faqs: Array<{ question: string; answer: string }>;
  culturalStory: { title: string; paragraphs: [string, string] };
  foodStory: { title: string; paragraphs: [string, string] };
  itinerary: Array<{ day: string; title: string; description: string }>;
};

export const destinationEditorial: Record<string, DestinationEditorial> = {
  beijing: {
    bestTime:
      "April to May and September to October are usually comfortable for walking, although public holidays can be busy. Check your dates against the Chinese holiday calendar before booking. Summer calls for shade, water and indoor breaks; winter visits need warm layers, especially on the exposed Great Wall.",
    orientation:
      "Beijing suits travelers who want to understand imperial China and visit the Great Wall within one stay. Its sights are spread out: the Forbidden City is central, the Summer Palace is in the northwest, and Mutianyu is outside the city. Choose one major visit per day, then add a nearby meal, park or neighborhood walk if energy allows.",
    experiences: [
      "Explore the Forbidden City with a guide who explains the emperors’ courts, ceremonies and daily life",
      "Give the Great Wall its own day, with the section chosen around mobility and crowd tolerance",
      "Balance monumental Beijing with hutong lanes, temple parks and neighborhood food",
    ],
    planningNotes: [
      "Reserve the Forbidden City and other high-demand sites before arrival",
      "Expect security checks and extensive walking even with private transport",
      "Choose the Great Wall section according to fitness, season and preferred cable-car access",
    ],
    arrival:
      "Beijing Capital Airport and Beijing Daxing Airport both serve international arrivals. High-speed rail connects Beijing with Xi'an and Shanghai; the correct station matters because the terminals are far apart.",
    gettingAround:
      "The metro is extensive, but a private vehicle is valuable when combining large sites, traveling with luggage, or managing children and older parents. Vehicles cannot remove the walking inside palace and temple complexes.",
    stayStrategy:
      "For a first visit, stay within practical reach of the historic center rather than choosing a hotel only for a skyline view. Count full sightseeing days separately from nights. Four nights usually give three full days between arrival and departure; three nights require a more selective route and favorable transport times.",
    firstTimerNote:
      "Do not judge distances by the map alone. Beijing blocks, security zones and attraction entrances can turn a short-looking transfer into a substantial part of the day.",
    faqs: [
      {
        question: "How many days do first-time visitors need in Beijing?",
        answer:
          "Allow three full sightseeing days for a strong introduction, usually with four nights when arrival and departure are separate travel days. Add a fifth night for the Summer Palace, slower pacing or specialist interests. Three nights can work only with selective sightseeing and suitable flight or train times.",
      },
      {
        question: "Which Great Wall section is best for international visitors?",
        answer:
          "Mutianyu suits many first-time visitors because it combines restored scenery with cable-car options. The best choice still depends on mobility, season, photography goals and crowd tolerance.",
      },
      {
        question: "Can Beijing work for families and senior travelers?",
        answer:
          "Yes, with a route matched to the group. Keep one major attraction per day, schedule seated breaks and check the hotel’s lift and vehicle access. Tell the planner about walking tolerance, stairs, wheelchair use or a child’s nap schedule before booking. A private vehicle helps between sights; it cannot reach every entrance or remove walking inside them.",
      },
      {
        question: "Can a private guide guarantee Forbidden City tickets or skip security?",
        answer:
          "No. Ticket availability, passport requirements, opening arrangements and security controls apply to private visitors too. AVIORA checks the booking plan and adjusts the sequence around confirmed admission; private service is not a promise of special access or queue-free entry.",
      },
      {
        question: "Does the Mutianyu cable car make the Great Wall step-free?",
        answer:
          "No. Mountain transport can reduce the approach climb, but gradients, uneven surfaces and watchtower steps remain on the Wall. Explain mobility needs and comfort with heights before choosing the cable car, chairlift or walking section.",
      },
      {
        question: "Should I book a Beijing day tour or a longer private itinerary?",
        answer:
          "A private Mutianyu day suits travelers who already have accommodation and other arrangements. A Beijing-focused multi-day itinerary helps coordinate city sightseeing and the Wall within one stay. Choose a Beijing, Xi’an and Shanghai journey when the wider China route and domestic connections also need planning; the published product and written proposal define the services.",
      },
    ],
    culturalStory: {
      title: "Imperial landmarks and everyday life in the hutongs",
      paragraphs: [
        "Beijing served as the political center of the Ming and Qing dynasties, and its old city was organized around a powerful north-south axis. The Forbidden City, Temple of Heaven and historic gates were not isolated monuments: together they expressed how the state, ritual and urban life were ordered.",
        "Hutong lanes and public parks offer a different view of the city: courtyard entrances, neighborhood shops and places where residents exercise and meet friends. Pair a palace visit with a short neighborhood walk to see both. These lanes are residential; ask before photographing people and do not enter private courtyards without an invitation.",
      ],
    },
    foodStory: {
      title: "What to eat in Beijing beyond roast duck",
      paragraphs: [
        "Roast duck is worth planning as a sit-down meal, with time for serving and shared side dishes. For a simpler lunch, try zhajiangmian: wheat noodles served with a savory soybean sauce and vegetables. Dumplings, sesame flatbreads and seasonal vegetable dishes offer other ways to explore northern Chinese cooking.",
        "Many restaurant dishes are intended for sharing. Tell your guide about allergies and dietary requirements before choosing a restaurant, including whether meat stock, sauces or shared cooking equipment are a concern. For a Wall outing, agree on the lunch stop in advance rather than waiting until everyone is tired and hungry.",
      ],
    },
    itinerary: [
      {
        day: "Full day 1",
        title: "Imperial Beijing",
        description:
          "Make the Forbidden City the main visit, subject to confirmed admission. Add nearby Jingshan Park only if you are comfortable with its uphill steps; otherwise choose a meal and rest after the palace walk.",
      },
      {
        day: "Full day 2",
        title: "Temple and local life",
        description:
          "Visit the Temple of Heaven in the morning, then allow time for lunch and a break. A short hutong walk can follow if the group is comfortable with another transfer and more walking.",
      },
      {
        day: "Full day 3",
        title: "The Great Wall",
        description:
          "Take a separate day for Mutianyu, with the walking section and mountain transport chosen before departure. Leave the return evening flexible in case of traffic or tired legs.",
      },
      {
        day: "Optional extra day",
        title: "Summer Palace or a personal interest",
        description:
          "Use an additional full day for the Summer Palace or specialist interest. With only four nights, keep arrival and departure for travel rather than assuming a fourth sightseeing day.",
      },
    ],
  },
  xian: {
    bestTime:
      "March to May and September to early November are often comfortable for museum visits and city walks. Summer heat can make outdoor wall visits tiring; winter is colder but often quieter. Check holiday dates and museum reservation rules before fixing your route.",
    orientation:
      "Xi’an merits more than a quick stop at the Terracotta Warriors. The museum is outside the center; the City Wall, Great Mosque area and food neighborhoods are in the city. Two full sightseeing days let you give the museum one day and explore the Old City on another.",
    experiences: [
      "See the Terracotta Army with a guide who separates archaeological evidence from popular legend",
      "Choose a short City Wall walk or suitable bicycle ride rather than assuming you need the full circuit",
      "Explore the Muslim Quarter through its food, Great Mosque and long-standing community",
    ],
    planningNotes: [
      "Make the Terracotta Warriors the main visit of the day, with time for transfers, entry and the exhibition halls",
      "Discuss halal requirements, allergies and mosque access before a food-focused visit",
      "Compare actual Beijing–Xi’an rail and flight schedules, including hotel transfers and boarding time",
    ],
    arrival:
      "Xi’an can be reached by high-speed rail or flight. Xi’an North Railway Station and Xi’an Xianyang International Airport are outside the Old City, and they are not interchangeable transfer points. Check the station or airport on your ticket, then plan the road journey to your actual hotel.",
    gettingAround:
      "The metro is useful for central journeys, while a private vehicle helps with the Terracotta Warriors and luggage transfers. Hotel entrances, pedestrian streets and attraction rules affect where a driver can stop. Allow for walking inside the museum and up to City Wall entrances.",
    stayStrategy:
      "Three nights usually give two full sightseeing days between arrival and departure. Two nights can work with suitable train or flight times, but may leave only one full day. Choose the Bell Tower or South Gate area for central evenings, or Qujiang when the pagoda district or a particular hotel is your priority.",
    firstTimerNote:
      "The Terracotta Warriors museum is outside central Xi’an. A short-looking attraction list can hide a long transfer, entry procedures and time standing in large halls. Keep the afternoon flexible rather than adding every Old City sight after the museum.",
    faqs: [
      {
        question: "How many days and nights do I need in Xi’an?",
        answer:
          "Allow two full sightseeing days, usually with three nights when arrival and departure are separate travel days. Give the Terracotta Warriors one day and the Old City another. Two nights can work with favorable transport times, but you may need to choose fewer city sights.",
      },
      {
        question: "Should I fly or take the train from Beijing to Xi’an?",
        answer:
          "Compare the actual high-speed train and flight schedules, including hotel transfers, luggage and boarding time. Xi’an North Railway Station is outside the center, so the scheduled train journey is only part of the trip. Choose the connection that fits your complete route and confirmed times.",
      },
      {
        question: "Is Xi’an suitable for Muslim travelers?",
        answer:
          "Xi’an has a long-standing Muslim community and halal restaurants, especially around the Muslim Quarter. Confirm ingredients and preparation for your dietary needs, and check Great Mosque visitor access and prayer arrangements for your date. A market food walk is not the same as a planned mosque visit.",
      },
      {
        question: "Are museum tickets included in the private Terracotta Warriors day tour?",
        answer:
          "Standard museum admission for confirmed travelers is included in AVIORA’s published day tour. Booking and entry follow current identity, reservation and security rules; private guiding does not guarantee tickets or exclusive viewing. Lunch, City Wall admission, bicycle rental and clay-making are separate unless confirmed in writing.",
      },
      {
        question: "Can children or older travelers visit the Terracotta Warriors?",
        answer:
          "Often yes, with a plan matched to walking tolerance, standing, hearing and rest needs. Private transfers help between locations, but museum halls still involve crowds and walking. Share stroller or wheelchair requirements before booking and shorten the Old City portion if the museum is tiring.",
      },
      {
        question: "Can the day tour pick me up at Xi’an North Railway Station or the airport?",
        answer:
          "Airport and railway-station transfers can be checked separately when the timing works; they are not part of the central-hotel pickup and return price. Share the exact train or flight, arrival time, luggage and final address before confirming a museum visit on a travel day.",
      },
    ],
    culturalStory: {
      title: "From the Qin army to the Silk Road city of Chang’an",
      paragraphs: [
        "The Terracotta Army was made for the mausoleum of Qin Shi Huang, China’s first emperor. A visit becomes more rewarding when the rows of figures are understood as evidence of military organization, craftsmanship and burial practice. A guide should explain what archaeology shows and distinguish it from reconstruction or legend.",
        "Later Chang’an, associated with today’s Xi’an, became a major Tang-era capital and a center of exchange along the Silk Road. The surviving City Wall is from a later period. The Great Mosque and Muslim Quarter add another part of the city’s history: faith, trade and communities that remain part of everyday Xi’an.",
      ],
    },
    foodStory: {
      title: "Noodles, flatbreads and the food of the Muslim Quarter",
      paragraphs: [
        "Try broad biangbiang noodles if you enjoy wheat noodles and chili seasoning, or ask for a milder preparation. Yangrou paomo combines pieces of flatbread with lamb soup. Roujiamo fillings vary by shop, so ask what meat is used rather than assuming every version is the same.",
        "The Muslim Quarter is both a neighborhood and a busy visitor destination. Choose dishes around your appetite and dietary needs rather than trying to fit every famous snack into one meal. Confirm halal preparation, meat stocks, chili oil and allergy concerns directly; proximity to the mosque does not answer every dietary question.",
      ],
    },
    itinerary: [
      {
        day: "Full day 1",
        title: "Terracotta Warriors and a flexible return",
        description:
          "Give the museum several hours, with pickup arranged around confirmed entry. Return for a rest or one short Old City stop if time and energy allow; do not assume wall cycling and a full food walk will also fit.",
      },
      {
        day: "Full day 2",
        title: "City Wall and the Old City",
        description:
          "Choose an appropriate wall section, then explore historic streets or the Great Mosque area subject to access. Plan lunch around your interests and dietary needs, with a break between larger visits.",
      },
      {
        day: "Optional extra day",
        title: "A museum or Tang-era interest",
        description:
          "Add a specific museum or heritage site after checking its opening and reservation requirements. With a three-night stay, keep arrival and departure for travel rather than assuming a third full sightseeing day.",
      },
    ],
  },
  shanghai: {
    bestTime:
      "March to May and October to November are usually comfortable for walking. Summer can be hot, humid and rainy; winter is cool and can feel damp. Keep a museum or indoor break available in poor weather, and check holiday dates before planning busy gardens and waterfront evenings.",
    orientation:
      "Shanghai works as an arrival city, a contrast to Beijing and Xi’an, or a final stop before an international flight. The Bund and Yu Garden show different parts of its history, while former-concession streets reward a slower walk. Plan by district rather than crossing the river repeatedly to collect viewpoints.",
    experiences: [
      "Walk a manageable section of the Bund and compare the historic west bank with Pudong’s towers",
      "Visit Yu Garden’s interior, distinguishing the classical garden from the surrounding shopping streets",
      "Explore former-concession streets through architecture, neighborhood food and a seated break",
    ],
    planningNotes: [
      "Check PVG or SHA, the airport terminal and the exact railway station before arranging transfers",
      "Distinguish an ordinary public-ferry crossing from a separately booked sightseeing cruise",
      "Keep enough time between domestic travel and a separately booked international departure",
    ],
    arrival:
      "Pudong International Airport (PVG) and Hongqiao Airport (SHA) are different airports. Hongqiao Railway Station is another departure point, even though it is part of the same wider transport hub as Hongqiao Airport. Send the flight code, terminal or train station with your hotel address before confirming transfers.",
    gettingAround:
      "The metro is useful for independent central journeys. A private vehicle helps with luggage and transfers across districts, but road access, traffic and walking from drop-off points still affect the day. In a compact neighborhood, walking between stops can be simpler than moving the car repeatedly.",
    stayStrategy:
      "Three nights usually give two full sightseeing days between arrival and departure. Two nights often leave one full day, suitable for a selective introduction. Choose the Bund for riverfront evenings, former-concession or Jing’an addresses for neighborhood access, and Lujiazui for a particular hotel, business location or tower view.",
    firstTimerNote:
      "Pudong is a large district. A skyline hotel in Lujiazui is not necessarily close to Pudong Airport. Likewise, Hongqiao Airport, its terminals and Hongqiao Railway Station are not interchangeable pickup addresses. Use the exact point printed on your ticket.",
    faqs: [
      {
        question: "How many days and nights should I spend in Shanghai?",
        answer:
          "Allow two full sightseeing days, usually with three nights if arrival and departure are separate travel days. Two nights can cover a selective one-day introduction. Add time for a separate day trip, specialist interest or a less hurried start after a long flight.",
      },
      {
        question: "Should I stay near the Bund or in the former French Concession?",
        answer:
          "Choose the Bund for riverfront evenings and historic waterfront architecture. Former-concession streets suit cafes, restaurants and neighborhood walks. Compare the actual hotel address, room noise, lifts and transport access: neither area is a single compact block, and a central address does not remove every transfer.",
      },
      {
        question: "Are Pudong and Hongqiao airports interchangeable?",
        answer:
          "No. Pudong International Airport uses code PVG and Hongqiao Airport uses SHA. Confirm the airport and terminal on your ticket. Hongqiao Railway Station is a separate departure point, so an airport pickup instruction is not enough for a train connection.",
      },
      {
        question: "Does the private Shanghai day tour include a Huangpu sightseeing cruise?",
        answer:
          "The published base tour includes one ordinary public-ferry crossing when operating, not a sightseeing cruise or private vessel. A longer river cruise, Shanghai Tower, lunch and evening service are separate unless included in the written confirmation. Yu Garden interior admission is included in the base tour, subject to operation and confirmed entry arrangements.",
      },
      {
        question: "Can a Shanghai day tour start at the airport or cruise port?",
        answer:
          "It can be assessed separately using your flight or ship details, actual terminal, entry arrangements, luggage and required return time. The central-hotel day-tour price does not include airport, station or cruise-port service. Confirm current entry eligibility through official guidance before booking a layover plan.",
      },
      {
        question: "Is Shanghai suitable for children and older travelers?",
        answer:
          "Yes, with visits matched to walking, stairs, rest needs and the weather. Use shorter waterfront and neighborhood walks with seated breaks. Share stroller or wheelchair needs before booking; private transfers do not remove garden steps, crowded streets or public-ferry boarding requirements.",
      },
    ],
    culturalStory: {
      title: "A port city best understood on both sides of the Huangpu",
      paragraphs: [
        "The Bund’s former banks, hotels and trading houses face Lujiazui’s towers across the Huangpu River. They reflect different periods of Shanghai’s growth as a port and financial center. A short, well-explained waterfront walk can be more useful than visiting several high viewpoints in the same day.",
        "Away from the river, lilong lane housing and former-concession streets show how trade, migration and everyday urban life shaped the city. These are inhabited neighborhoods, not open-air museum sets. Stay in public areas, keep entrances clear and ask before photographing residents or entering a courtyard.",
      ],
    },
    foodStory: {
      title: "Soup dumplings, pan-fried buns and Shanghainese cooking",
      paragraphs: [
        "Xiaolongbao contain hot broth: let them cool, take a small bite and sip carefully rather than eating one whole. Shengjianbao are pan-fried buns with a crisp base and a juicy filling. Pork is common in both, but fillings vary; ask before ordering if you have dietary restrictions.",
        "For a fuller meal, explore soy-braised dishes, vegetables and seasonal produce rather than ordering only dumplings. Sweetness and richness vary by dish. Tell the restaurant about shellfish, meat stock, soy and other allergy or dietary concerns; a vegetable dish is not automatically vegetarian. Plan a meal near the day’s route instead of crossing the city for one famous shop.",
      ],
    },
    itinerary: [
      {
        day: "Full day 1",
        title: "Yu Garden and the riverfront",
        description:
          "Make Yu Garden and a selected stretch of the Bund the main visits, with a lunch break and transfer time. Add a public-ferry crossing only if operation and the onward route fit; a sightseeing cruise is a separate choice.",
      },
      {
        day: "Full day 2",
        title: "Neighborhood streets and a personal interest",
        description:
          "Choose a former-concession walk, a museum or an art interest around your hotel and the weather. Leave time to sit down for food or coffee. Check admission before building the day around a particular exhibition.",
      },
      {
        day: "Optional extra day",
        title: "A day trip or more time in Shanghai",
        description:
          "Plan Suzhou or a water town as a separate excursion with its own transport and walking needs, or stay in the city. With three nights, keep arrival and departure for travel rather than assuming a third full sightseeing day.",
      },
    ],
  },
  chengdu: {
    bestTime:
      "Spring and autumn are often comfortable for Chengdu’s outdoor visits. Summer can be hot and humid, so start the panda visit early and leave room for shade and rest. Cooler weather does not guarantee active pandas; rain and animal-welfare decisions can change the open areas in any season.",
    orientation:
      "Chengdu suits travelers who want pandas without giving up time for food and everyday city life. Keep the panda visit on one morning, then choose a shorter afternoon. A separate full day gives tea, neighborhoods and a meal time of their own. Leshan and Jiuzhaigou are additional journeys, not nearby stops to attach to that morning.",
    experiences: [
      "Visit Chengdu Panda Base early, following current openings and animal-welfare guidance",
      "Sit for tea in People’s Park and observe how a public teahouse is used by local residents",
      "Explore Sichuan food through a few well-chosen dishes matched to spice tolerance and dietary needs",
    ],
    planningNotes: [
      "Confirm the exact panda facility, gate and identity-linked admission before setting hotel pickup",
      "Keep lunch, tea, internal carts and evening activities distinct from the published panda-day inclusions",
      "Count full sightseeing days separately from nights, and give Leshan its own day if selected",
    ],
    arrival:
      "Chengdu has two airports: Tianfu (TFU) and Shuangliu (CTU). Check the airport and terminal on the flight ticket; they are different transfer destinations. For a train, use the exact station on the booking. Confirm the hotel address and arrival time before arranging an early panda visit the following morning.",
    gettingAround:
      "The metro is useful for independent city journeys. Private transfers help with the panda base, luggage and out-of-town visits. Inside the panda base, walking and any permitted internal transport follow its own rules; the private vehicle does not provide door-to-enclosure access.",
    stayStrategy:
      "Three nights usually allow two full sightseeing days between arrival and departure: one panda-and-light-afternoon day and one city day. Four nights add another full day for Leshan or more food, tea and culture. Choose a hotel with useful dining access and confirm early breakfast and pickup arrangements for the panda day.",
    firstTimerNote:
      "Chengdu Research Base of Giant Panda Breeding and panda facilities near Dujiangyan are not the same destination. Confirm the actual facility and entry gate. A private tour can coordinate guiding and transfers, but cannot guarantee cubs, outdoor activity or contact with animals.",
    faqs: [
      {
        question: "How many days and nights do I need in Chengdu?",
        answer:
          "Allow two full sightseeing days for pandas and city life, usually with three nights when arrival and departure are separate travel days. Four nights create an extra full day for Leshan or more Chengdu. A Jiuzhaigou extension needs its own transfers, accommodation and park days.",
      },
      {
        question: "Which panda base does the private Chengdu day tour visit?",
        answer:
          "The published day tour visits Chengdu Research Base of Giant Panda Breeding. Other facilities near Dujiangyan are separate destinations. Follow the facility, gate and entry period on your confirmed booking when arranging pickup.",
      },
      {
        question: "Does an early visit guarantee active pandas or panda cubs?",
        answer:
          "No. Cooler early conditions can help with outdoor viewing and walking, but animal behavior, weather, habitat openings and welfare decisions determine what is visible. No specific panda, cub, feeding time or animal contact is promised.",
      },
      {
        question: "Are lunch, tea and electric carts included in the panda day tour?",
        answer:
          "The published base tour includes central-hotel pickup and return, a private guide and vehicle, standard panda-base admission and a flexible People’s Park walk. Lunch, tea, internal electric carts, cooking classes and performances are separate unless included in your written confirmation.",
      },
      {
        question: "Can Sichuan meals be arranged without very spicy food?",
        answer:
          "Yes. Choose dishes as well as a heat level: Sichuan cooking includes mild dishes, soups and vegetables alongside chili-heavy recipes. Tell the planner about meat stocks, peanuts, sesame, soy, shellfish and other dietary concerns. A mild or split hotpot does not by itself resolve allergies or shared-equipment requirements.",
      },
      {
        question: "Should I add Leshan to a Chengdu stay?",
        answer:
          "Add a separate day if the Giant Buddha and its setting interest you and the road travel and walking suit the group. Discuss steps and any boat-view option before booking; operation is date-dependent. In the published five-day Chengdu route, a slower city day is an alternative to Leshan.",
      },
    ],
    culturalStory: {
      title: "Pandas, public parks and time at the tea table",
      paragraphs: [
        "The panda base introduces conservation and animal care, but it is only one part of Chengdu. In People’s Park, tea tables are places for conversation and long visits, rather than just a quick drink before the next attraction. Leave enough time to sit if you want to experience this part of the city.",
        "Chengdu’s historical interests range from Shu culture to religious sites and the wider region’s irrigation history. Choose a particular interest instead of adding every temple and museum. At busy parks and teahouses, respect shared space and ask before photographing people; hosted tea, a performance and a park walk are different experiences.",
      ],
    },
    foodStory: {
      title: "How to enjoy Sichuan food beyond the hottest dishes",
      paragraphs: [
        "Sichuan pepper creates a tingling sensation that is different from chili heat. Mapo tofu and dan dan noodles vary in heat and ingredients, while kung pao chicken often contains peanuts. Ask about the actual recipe: tofu or vegetable dishes may use meat, and dish names alone do not establish vegetarian or allergy suitability.",
        "Choose a balanced shared meal with milder dishes, vegetables and soup alongside stronger flavors. For hotpot, discuss the broth, dipping sauces and shared cooking equipment before ordering. A split pot offers different broths but is not an allergy safeguard. If you want a cooking session, confirm the menu, host, group format and dietary fit separately.",
      ],
    },
    itinerary: [
      {
        day: "Full day 1",
        title: "Panda morning and a lighter afternoon",
        description:
          "Start from the confirmed hotel for the booked gate and entry period. Follow a focused public-base route, then have lunch and rest. A short People’s Park walk can follow if the group has energy; tea and other additions need separate confirmation.",
      },
      {
        day: "Full day 2",
        title: "City neighborhoods, food and tea",
        description:
          "Choose a neighborhood or historical interest, a Sichuan meal and time to sit. A cooking class or museum can replace part of the day rather than being added to an already full schedule.",
      },
      {
        day: "Optional extra day",
        title: "Leshan or more time in Chengdu",
        description:
          "Use a separate day for the Giant Buddha after checking transfers, steps and access, or stay in Chengdu. With only three nights, keep arrival and departure for travel rather than assuming a third full sightseeing day.",
      },
    ],
  },
  chongqing: {
    bestTime:
      "March to May and October to November are often more comfortable for walking. Summer can be very hot and humid, so shorten outdoor blocks and plan indoor breaks. Rain, mist and haze affect river views in any season; keep the evening route flexible rather than promising clear skyline photographs.",
    orientation:
      "Chongqing is built around hills and the meeting of the Yangtze and Jialing rivers. Nearby map pins can sit on different street levels, and a river crossing may require a much longer transfer than it appears. Plan one connected district at a time, using vehicles and public transport where they reduce effort or add something to the visit.",
    experiences: [
      "Understand the river confluence in daylight before choosing a shorter evening skyline route",
      "Use a hillside neighborhood, Liziba viewing stop or cableway ride to understand the city’s changing levels",
      "Plan a hotpot meal with the broth, ingredients and dietary needs agreed before ordering",
    ],
    planningNotes: [
      "Check hotel entrance levels, lift access and the actual vehicle meeting point",
      "Choose one connected evening route rather than crossing the rivers for every famous viewpoint",
      "Keep Dazu Rock Carvings as a separate day, with the site choice and road transfers confirmed",
    ],
    arrival:
      "Chongqing Jiangbei International Airport (CKG) and the city’s railway stations are different arrival points. For a Chengdu train, check the exact Chongqing station on the ticket before arranging pickup. Send the hotel entrance instructions as well as the address; road access and building levels affect the final handover.",
    gettingAround:
      "Private vehicles help connect districts, carry luggage and avoid some climbs. Rail and the Yangtze River Cableway can also be part of a visit when operating and useful to the route. Steps, slopes, queues and walks from drop-off points remain; the car cannot meet you at every riverfront or hillside stop.",
    stayStrategy:
      "Three nights usually allow two full days between arrival and departure. Two nights often leave one full city day and require a more selective visit. Choose a hotel by its actual entrance, nearby dining and the planned route as well as its room view. A fourth night creates more room for Dazu or a slower stay.",
    firstTimerNote:
      "Ask which level a hotel lobby or meeting point is on. Ground level on one side of a building may be several floors above a street on another side. A short route on a map may include stairs, and the driver’s legal pickup point may be elsewhere.",
    faqs: [
      {
        question: "How many days and nights do I need in Chongqing?",
        answer:
          "Allow two full sightseeing days, usually with three nights when arrival and departure are separate travel days. Two nights can suit a selective one-day introduction. Add time for Dazu Rock Carvings or a specialist interest rather than squeezing an out-of-town excursion into a city evening.",
      },
      {
        question: "Where should I stay for a first Chongqing visit?",
        answer:
          "Jiefangbei and central Yuzhong can be useful for restaurants and city sightseeing; Chaotianmen and north-bank hotels offer different river settings. Check the exact entrance, lobby level, lift access and vehicle approach. A famous skyline view is not a substitute for a practical hotel location.",
      },
      {
        question: "Is Chongqing suitable for older travelers or people who find stairs difficult?",
        answer:
          "It can work with a carefully chosen route, shorter walks and suitable hotel entrances. Share walking tolerance, balance and wheelchair or stroller needs before booking. Vehicles and lifts can reduce some effort, but slopes, stairs, crowds and indirect access remain at many places.",
      },
      {
        question: "Can I see Hongya Cave, Liziba and ride the Yangtze River Cableway in one day?",
        answer:
          "It may be possible, but the locations, transfers, operating hours and queues must fit your date and walking pace. Decide which experiences matter most and keep alternatives. A daytime viewing stop, a public transport ride and an evening Hongya Cave view are different commitments; none guarantees a particular photo or crowd level.",
      },
      {
        question: "Can Chongqing hotpot be arranged with less spice?",
        answer:
          "Ask for a suitable mild broth or split pot and discuss numbing Sichuan pepper separately from chili heat. Confirm the actual broth, sauces and ingredients. Shared cooking equipment and splashes can still matter for allergies or dietary restrictions, so a mild pot alone is not enough for every requirement.",
      },
      {
        question: "Is Dazu included on the open Chongqing day in the 11-day journey?",
        answer:
          "No. In the published Chengdu–Chongqing–Zhangjiajie framework, the Chongqing open day has no automatic guide, vehicle or excursion. Dazu and other private experiences are quoted separately when selected. You can keep the day for independent exploration or rest instead.",
      },
    ],
    culturalStory: {
      title: "River trade, hillsides and a city entered at different levels",
      paragraphs: [
        "The Yangtze and Jialing rivers shaped Chongqing’s role as a transport and trading center. Steep terrain led to stairways, bridges and streets that meet buildings at different levels. Begin with the rivers and hills in daylight: the night skyline makes more sense once you understand what sits on each bank.",
        "Chongqing also served as China’s wartime capital during the Second Sino-Japanese War. Choose a museum or historical visit if this interests you, with opening and reservations checked separately. Away from the viewpoints, neighborhood shops, markets and hillside lanes show a working city; keep doorways clear and respect residents when stopping for photographs.",
      ],
    },
    foodStory: {
      title: "Hotpot, small noodles and choosing your level of heat",
      paragraphs: [
        "Chongqing hotpot often uses a rich broth flavored with chili and numbing Sichuan pepper. Decide on broth, dipping sauce and ingredients before the meal, and ask how long unfamiliar foods need to cook. Beef fat is common in traditional broths, so vegetarians and travelers with religious dietary needs should check the actual recipe and preparation.",
        "For a simpler meal, Chongqing xiaomian offers noodles with a seasoned sauce; suanlafen are sour-and-spicy starch noodles. Recipes and toppings vary, including peanuts, meat and chili oil. State what you need to avoid rather than relying on a dish name or the word mild. Choose a restaurant near the evening’s final stop so dinner does not require another cross-city journey.",
      ],
    },
    itinerary: [
      {
        day: "Full day 1",
        title: "River geography and one evening view",
        description:
          "Use daylight for a connected central-city route and a view of the rivers. Leave time for a seated break, then choose a Hongya Cave or riverfront perspective around conditions and the agreed pickup point. Eat nearby rather than adding another distant stop.",
      },
      {
        day: "Full day 2",
        title: "A neighborhood, local transit and food",
        description:
          "Choose a hillside walk, a Liziba viewing stop or cableway ride according to interests, operation and walking comfort. Add time for lunch or hotpot. In the 11-day product, the open Chongqing day requires a separately selected guide or vehicle if you want private service.",
      },
      {
        day: "Optional extra day",
        title: "Dazu or a slower city stay",
        description:
          "Use a separate full day for Dazu after confirming sites, road travel and walking, or stay in Chongqing for history, food or rest. With three nights, do not assume an extra full day beyond the two between arrival and departure.",
      },
    ],
  },
  leshan: {
    bestTime:
      "Spring and autumn are often comfortable for a Leshan visit, but rain and river conditions still affect the viewing options. Summer heat can make stair routes and queues tiring. Check current site and boat notices for your date rather than choosing a month on the assumption of guaranteed sailing or quiet paths.",
    orientation:
      "Leshan is worth a full day when the Giant Buddha’s history and river setting interest you. A boat view emphasizes the complete figure and cliff; a land visit offers a closer perspective with different walking demands. Choose that experience first, then arrange the Chengdu transfers and meal around it.",
    experiences: [
      "Understand the Tang-era Buddhist sculpture in its cliff-and-river setting",
      "Choose a boat perspective or suitable land route instead of assuming both are needed",
      "Leave time for a Leshan meal, with dishes chosen around spice tolerance and dietary needs",
    ],
    planningNotes: [
      "Allow a full day including Chengdu transfers, waiting, the selected visit and a meal",
      "Check the actual walking paths or boat boarding arrangements before committing for anyone avoiding stairs",
      "Agree a workable alternative if river operation or path access changes",
    ],
    arrival:
      "Reach Leshan from Chengdu by private road transfer or a train with local transport at both ends. The railway station is not the Giant Buddha entrance or a boat pier. Compare the complete hotel-to-site journey, then confirm the exact departure station and meeting points if traveling by rail.",
    gettingAround:
      "Local transfers connect the station, hotel, sightseeing entrance and any booked pier. Land routes and boat boarding have different access requirements, and neither is automatically step-free. Ask which approach is planned, where the vehicle stops and how much walking remains from that point.",
    stayStrategy:
      "For a focused Buddha visit, return to the same Chengdu hotel after a full day. Stay one night if extra Leshan time is valuable or it fits a separately planned regional route. Mount Emei needs its own transport, accommodation and mountain schedule; an overnight in Leshan does not by itself make both visits practical.",
    firstTimerNote:
      "A boat view is not a land visit with fewer steps, and it is not guaranteed to operate. It gives a different perspective and may still require pier walking, waiting and boarding steps. If you cannot use the cliff route, agree a suitable fallback before departure.",
    faqs: [
      {
        question: "Can I visit the Leshan Giant Buddha as a day trip from Chengdu?",
        answer:
          "Yes. Allow a full day for road travel or rail with transfers, the chosen viewing approach, waiting and a meal. Keep the return evening flexible and avoid a tight onward flight or train. In the published five-day Chengdu route, Leshan is a separate optional day.",
      },
      {
        question: "Should I choose the Leshan boat view or walking route?",
        answer:
          "Choose a boat for the full figure in its river-and-cliff setting, subject to sailing and boarding conditions. Choose a land visit for closer detail if the open route and walking demands suit you. Cliff paths can involve steep steps and queues; neither option guarantees a quiet viewpoint or every part of the site.",
      },
      {
        question: "Can older travelers or people with knee problems visit Leshan?",
        answer:
          "Many can with the right approach, but assess the actual route before booking. A boat may reduce cliff climbing while still requiring walking and boarding steps. Share stair, balance, wheelchair and rest needs so the vehicle-to-viewpoint journey can be reviewed honestly.",
      },
      {
        question: "What if the Leshan boat is not operating?",
        answer:
          "Discuss an alternative that fits the group rather than automatically switching to a demanding cliff walk. Current site access, river conditions and your ticket terms affect the options. Agree a revised viewing plan, another visit or more Chengdu time, including any known price effect.",
      },
      {
        question: "Do I need to stay overnight in Leshan?",
        answer:
          "Not for most focused day trips from Chengdu. An overnight can suit more local time or a wider itinerary, but compare the hotel move and luggage handling with keeping your Chengdu base. Plan Mount Emei separately rather than assuming it fits into the same sightseeing day.",
      },
      {
        question: "Is Leshan automatically included in the five-day Chengdu tour?",
        answer:
          "No. The published framework offers Leshan or more time in Chengdu. Select the day and confirm the viewing method, guiding, transport, tickets and meals in the written proposal. The linked five-day product is a Chengdu-based journey, not a separately published standalone Leshan day tour.",
      },
    ],
    culturalStory: {
      title: "A Tang-era Buddha carved into a river cliff",
      paragraphs: [
        "Work on the Leshan Giant Buddha began in the eighth century during the Tang dynasty. The seated figure was carved into the cliff overlooking the meeting of the Min, Dadu and Qingyi rivers. Its religious purpose and the wish to protect river travelers help explain why this location mattered, beyond the sculpture’s size.",
        "The relationship between the figure, cliff and water is central to the visit. From the river you can understand the overall scale; on land, where access permits, the setting and closer details become more apparent. A guide can connect the sculpture’s Buddhist meaning with its construction and drainage, rather than treating it only as a photograph.",
      ],
    },
    foodStory: {
      title: "Make time for a Leshan lunch",
      paragraphs: [
        "Leshan is known for boboji: skewered ingredients served in a seasoned broth or sauce, often with chili and sesame. The name refers to chicken, but a selection may include vegetables and other ingredients. Check what is on each skewer and how it is prepared before ordering for allergies or dietary restrictions.",
        "Sweet-skinned duck and local tofu dishes offer other options. Ask about heat, meat stock, soy, sesame and shared preparation rather than assuming a vegetable dish is vegetarian. Choose a meal near the day’s route and leave room for it; crossing the city for several famous snacks can make the Chengdu return unnecessarily rushed.",
      ],
    },
    itinerary: [
      {
        day: "Before departure",
        title: "Confirm the viewing plan and transfer",
        description:
          "Check the open route or operating boat, mobility needs and the correct entrance or pier. Arrange road pickup or train-plus-local transfers from the actual Chengdu hotel; avoid fixing a minute-by-minute return around an uncertain queue.",
      },
      {
        day: "Main visit",
        title: "See the Buddha from your chosen perspective",
        description:
          "Give the boat view or land visit its own time. Follow current access instructions and take breaks as needed. Add a second perspective only when operation, tickets, energy and the return plan make it worthwhile.",
      },
      {
        day: "Meal and return",
        title: "Eat locally, then return to Chengdu",
        description:
          "Plan a meal before or after the main visit according to the confirmed route. Return to your Chengdu base with a flexible evening, or continue to a separately confirmed overnight arrangement.",
      },
    ],
  },
  jiuzhaigou: {
    bestTime:
      "Late spring through autumn often suits a broad outdoor visit, while autumn color brings strong demand. Winter offers a different landscape but colder conditions and possible access changes. Choose dates around the conditions you are willing to accept, then check current park and transport notices rather than assuming every area will be open.",
    orientation:
      "Jiuzhaigou is a mountain-region stay, not a short excursion from Chengdu. Its lakes, waterfalls and forest valleys reward a full park day with a few selected walks. Allow separate transfer days and choose a hotel around actual park access. A longer stay creates more flexibility, but does not guarantee clear weather or suitability at altitude.",
    experiences: [
      "Spend a full day among lakes, waterfalls and forest, choosing walking sections around your interests and energy",
      "Use the shared park buses to reduce distances while leaving time to stop and look closely",
      "Understand the valley’s Tibetan village history and travel respectfully in the wider region",
    ],
    planningNotes: [
      "Count the road transfer after the train or flight as part of your arrival day",
      "Assess altitude, steps, bus boarding and walking needs before choosing the daily route",
      "Treat Huanglong as an optional higher-elevation visit and confirm the final departure point",
    ],
    arrival:
      "From Chengdu, compare available rail, flight and road options for your date. The regional railway station or Jiuzhai Huanglong Airport is not the park entrance: each needs an onward road transfer. Confirm the actual arrival point, driver meeting arrangements and final hotel before treating the journey as complete.",
    gettingAround:
      "Private transfers connect the hotel, park entrance and onward transport points. Inside Jiuzhaigou, visitors normally use shared park buses and walk selected paths or boardwalks. Bus routes, boarding, queues and open walking sections follow park rules; a private guide helps plan within that system rather than replacing it.",
    stayStrategy:
      "Three nights allow an arrival day, a full park day, a flexible second day and departure. Two nights can work for one focused park day with suitable transport times, but give less room for rest or changes. Check actual hotel distance from the entrance, breakfast timing, heating and lifts before choosing by scenery alone.",
    firstTimerNote:
      "A transport booking labeled for Jiuzhaigou does not put you at the park gate. Include the final road transfer and check where you will sleep. Huanglong is a separate, higher-elevation visit, and its cableway does not eliminate altitude exposure or all walking.",
    faqs: [
      {
        question: "How many nights do I need in the Jiuzhaigou area?",
        answer:
          "Three nights allow arrival, one full park day, a flexible second day and departure. Two nights can suit a focused park visit if transport times work, but leave less flexibility. Extra days, repeat park entry and Huanglong require their own confirmed arrangements; they are not automatic hotel-stay inclusions.",
      },
      {
        question: "Does a train or flight from Chengdu arrive at Jiuzhaigou National Park?",
        answer:
          "No. Regional rail arrivals and Jiuzhai Huanglong Airport need a road transfer to the park-area hotel or entrance. Compare the full hotel-to-hotel journey and confirm the exact arrival point, luggage plan and meeting details before choosing a connection.",
      },
      {
        question: "Can my private vehicle drive me around Jiuzhaigou National Park?",
        answer:
          "Ordinary private-tour vehicles do not replace the park’s shared transport system. Private service handles the agreed outside transfers and guiding, while park buses and selected walking sections make up the visit inside. Queues, boarding and access rules still apply.",
      },
      {
        question: "Is Jiuzhaigou suitable for older travelers or people with limited mobility?",
        answer:
          "It depends on individual walking, balance, health and altitude considerations. Park buses reduce some distances but do not remove steps, boarding or standing. Share specific mobility needs before booking and seek medical advice where relevant; an easy walking plan does not guarantee altitude suitability.",
      },
      {
        question: "Is Huanglong included automatically with Jiuzhaigou?",
        answer:
          "No. Huanglong is a separate scenic area at higher elevation. In the published seven-day route, it is an optional second-day choice when health, walking, weather and current access support it. A gentler day can replace it; confirm tickets and transport for the selected option in writing.",
      },
      {
        question: "Does the seven-day Chengdu and Jiuzhaigou tour return to Chengdu?",
        answer:
          "The published framework ends in the Jiuzhaigou area after three nights in Chengdu and three in the region. A Chengdu return can be added and quoted separately, including extra time or accommodation when needed. Confirm the ending before booking an onward flight from Chengdu.",
      },
    ],
    culturalStory: {
      title: "A protected valley with a Tibetan village history",
      paragraphs: [
        "Jiuzhaigou means ‘Valley of Nine Villages,’ referring to Tibetan settlements in the area. Mineral-rich water, carbonate deposits, fallen trees and forest contribute to the lakes and waterfalls visitors come to see. Take time to notice a few places rather than trying to photograph every stop on the park map.",
        "The valley belongs within the wider cultural landscape of northern Sichuan, where Tibetan and Qiang communities have distinct histories and traditions. Ask before photographing people and respect religious sites and private spaces. Local identity should be explained with care, rather than treating every settlement or performance as the same culture.",
      ],
    },
    foodStory: {
      title: "Plan meals around the park day and your hotel",
      paragraphs: [
        "Park-area restaurants and hotels serve a range of Sichuan and regional dishes; some menus include yak meat or barley-based foods. Ask what is actually in a dish and how it is prepared. A Tibetan-style name or vegetable description does not establish halal, vegetarian or allergy suitability.",
        "Confirm early breakfast and the day’s lunch arrangement before entering the park, following current food and visitor rules. Tell the planner about dietary needs before choosing the hotel or restaurant. The local range differs from Chengdu, so discuss workable meal options instead of relying on finding a particular dish after a long walking day.",
      ],
    },
    itinerary: [
      {
        day: "Arrival day",
        title: "Complete the regional transfer and settle in",
        description:
          "Connect the confirmed train, flight or road journey with the final hotel transfer. Keep the evening light and check breakfast, pickup and park entry arrangements rather than adding a major scenic stop.",
      },
      {
        day: "Full park day",
        title: "Lakes, waterfalls and selected walks",
        description:
          "Use shared park buses and a manageable selection of paths, leaving room for queues, lunch and rest. Adjust the route to open areas, weather and how the group feels instead of treating every viewpoint as compulsory.",
      },
      {
        day: "Flexible second day",
        title: "Choose another visit or a gentler day",
        description:
          "Consider Huanglong only after reviewing its separate journey, higher elevation, walking and current access. Alternatively choose a gentler local plan or rest. Any second park entry needs its own confirmed ticket and service arrangements.",
      },
      {
        day: "Departure day",
        title: "Leave from the confirmed regional connection",
        description:
          "Allow the road transfer and boarding time for the actual airport or station. If returning to Chengdu, confirm that additional connection and any extra night before relying on it for an international departure.",
      },
    ],
  },
  zhangjiajie: {
    bestTime:
      "April to May and September to November are often comfortable, but mountain visibility changes quickly. Mist can be atmospheric; heavy rain or low cloud may require a different sequence.",
    orientation:
      "Zhangjiajie is a region with several distinct scenic areas, not one viewpoint. Wulingyuan, Yuanjiajie, Tianzi Mountain, Golden Whip Stream and Tianmen Mountain require different bases and transport logic.",
    experiences: [
      "See the sandstone pillars from contrasting cliff-top and valley perspectives",
      "Use cableways, lifts and park shuttles intelligently to manage walking load",
      "Spend time in the forest and streams instead of reducing the region to one famous platform",
    ],
    planningNotes: [
      "Choose Wulingyuan or Zhangjiajie City according to the next day's sightseeing area",
      "Keep one flexible window for weather-dependent mountain views",
      "Discuss steps, heights and cableway comfort before fixing the route",
    ],
    arrival:
      "Zhangjiajie has a regional airport and rail connections. Arrival in Zhangjiajie City does not mean you are already at the Wulingyuan park entrances; the final transfer must be included.",
    gettingAround:
      "Private vehicles handle airport, station, hotel and park-gate transfers. Inside major scenic areas, travelers use regulated park buses, cableways and lifts shared with other visitors.",
    stayStrategy:
      "Wulingyuan is practical for the national forest park, while Zhangjiajie City suits Tianmen Mountain and transport connections. Three to four nights, sometimes split between bases, reduce backtracking.",
    firstTimerNote:
      "A hotel labeled 'Zhangjiajie' may be far from the entrance needed the next morning. Confirm the exact base, not only the city name.",
    faqs: [
      {
        question: "Should I stay in Wulingyuan or Zhangjiajie City?",
        answer:
          "Use Wulingyuan for national forest park days and Zhangjiajie City for Tianmen Mountain and many transport connections. A split stay can be the most efficient choice.",
      },
      {
        question: "How many days are enough for Zhangjiajie?",
        answer:
          "Three full sightseeing days provide a strong introduction. Four nights offer better weather flexibility and a more manageable walking pace.",
      },
      {
        question: "Is Zhangjiajie suitable for travelers with limited mobility?",
        answer:
          "Some major viewpoints are accessible with cableways, lifts and shuttle buses, but steps and queues remain. The route must be selected around the traveler's specific mobility needs.",
      },
    ],
    culturalStory: {
      title: "A landscape shaped by geology, weather and Tujia culture",
      paragraphs: [
        "Zhangjiajie's quartz-sandstone pillars were shaped over immense periods by uplift, water and erosion. Their vertical forms look otherworldly, yet the region is a real ecological system of forest, streams and changing mountain weather rather than a single cinematic viewpoint.",
        "The wider area is also home to Tujia and other communities whose history predates modern tourism. A thoughtful guide separates genuine regional context from staged claims, while helping visitors understand how park development, conservation and local livelihoods interact.",
      ],
    },
    foodStory: {
      title: "Hunan flavors after a day in the mountains",
      paragraphs: [
        "Local cooking belongs to the broader Hunan tradition, known for fresh chilies, smoked ingredients, pickled vegetables and direct, savory flavors. Meals can feel particularly restorative after cool or wet mountain days.",
        "Spice tolerance should be discussed before ordering, and mountain-area restaurant choices should balance regional character with consistency. The most useful guide orders a coherent shared meal instead of presenting unfamiliar dishes without explanation.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "Yuanjiajie and Tianzi Mountain",
        description: "Use lifts, shuttles and cableways for the main cliff-top pillar landscapes.",
      },
      {
        day: "Day 2",
        title: "Golden Whip Stream",
        description:
          "Experience the forest and sandstone from the valley rather than another high platform.",
      },
      {
        day: "Day 3",
        title: "Tianmen Mountain",
        description:
          "Move to the city base for the cableway, cliff route and Tianmen Cave when conditions allow.",
      },
      {
        day: "Day 4",
        title: "Weather buffer or chosen extension",
        description: "Keep flexibility for photography, Grand Canyon or a slower mountain day.",
      },
    ],
  },
  guilin: {
    bestTime:
      "Spring and autumn are often comfortable outdoors, but spring rain can affect river levels and views. Summer is hot and humid; winter is cooler and may bring lower water levels. Check the cruise operator’s sailing for your date, and keep outdoor plans flexible when the forecast is unsettled.",
    orientation:
      "Guilin is useful for arrival and connections; Yangshuo is the better base for countryside and slower evenings. The scheduled Li River cruise can take you south from Guilin to Yangshuo, but ports, boarding and luggage arrangements must be confirmed for the booked sailing. Longji Rice Terraces are a separate mountain trip, not an add-on to the cruise day.",
    experiences: [
      "Travel from Guilin to Yangshuo on a scheduled shared Li River cruise, with the finish and luggage plan confirmed in advance",
      "Choose one Yangshuo activity around weather and mobility: a countryside walk, a suitable river experience or time to rest",
      "Plan Longji as a separate mountain excursion when terraced fields and village visits justify the extra road travel",
    ],
    planningNotes: [
      "Confirm the sailing, assigned port, ticket category, any onboard meal and luggage handoff for your date",
      "Choose Guilin or Yangshuo by your arrival point, next hotel and departure plan as well as scenery",
      "Allow Longji a separate day or overnight; road transfers, steps and seasonal field conditions affect the visit",
    ],
    arrival:
      "Guilin Liangjiang International Airport, Guilin railway stations, the Li River cruise port and Yangshuo town are separate places. Yangshuo Railway Station is outside town near Xingping. Check the airport or station printed on your ticket and arrange the transfer to the exact hotel, port or station.",
    gettingAround:
      "Private vehicles are useful for airport, station, hotel and countryside transfers. The river cruise is a scheduled shared sailing, not a private boat charter. In Yangshuo, the best local transport depends on weather, traffic, distance and the traveler’s comfort with cycling or walking.",
    stayStrategy:
      "Three nights can cover an arrival, the Li River journey and one full Yangshuo countryside day if transport times work. Four nights give room for weather changes or a slower pace. Split nights between Guilin and Yangshuo when an early cruise, late arrival or separate Longji visit makes the extra hotel move worthwhile.",
    firstTimerNote:
      "Guilin and Yangshuo are not one compact base. The airport, cruise port, Yangshuo town and Yangshuo railway station are separate points. Before booking, confirm the address for each pickup and drop-off, who moves your luggage and where you will sleep after the cruise.",
    faqs: [
      {
        question: "How many days do I need for Guilin and Yangshuo?",
        answer:
          "Allow three nights for an arrival, the Li River cruise and one full Yangshuo day, subject to your transport times. Four nights are more comfortable for a slower pace or weather flexibility. Longji generally needs a separate day or overnight extension.",
      },
      {
        question: "Should I stay in Guilin or Yangshuo?",
        answer:
          "Guilin is practical for a late arrival, early cruise pickup or a fixed Guilin departure. Yangshuo is better for countryside and slower evenings. One night in Guilin followed by two in Yangshuo can work, but base the split on confirmed arrival, cruise and departure times.",
      },
      {
        question: "Is the Li River cruise private?",
        answer:
          "No. The published AVIORA day tour uses a scheduled four-star public sailing shared with other passengers. Your guide, road transfers and agreed luggage arrangements are private for your party. A private boat charter is not included.",
      },
      {
        question:
          "Can I finish the Li River cruise day in Yangshuo instead of returning to Guilin?",
        answer:
          "Yes, the published private day tour can finish at a confirmed Yangshuo hotel, with normal pre-confirmed luggage carried separately by the private vehicle. A return to central Guilin is also available and priced before booking. Confirm your hotel address and selected finish in the written proposal.",
      },
      {
        question: "Can I visit Longji Rice Terraces after the Li River cruise?",
        answer:
          "Longji is a separate mountain excursion with substantial road travel and walking. Plan it as another day or an overnight extension rather than adding it after the cruise. The route, village access and field conditions depend on season and the arrangements confirmed for your date.",
      },
      {
        question: "Does Yangshuo Railway Station serve the town center?",
        answer:
          "No. Yangshuo Railway Station is outside the town near Xingping, so allow a road transfer between the station and your hotel. Check the exact station on your ticket and do not confuse a cruise arrival in Yangshuo with a rail departure from the town center.",
      },
    ],
    culturalStory: {
      title: "A river landscape shaped by life as much as scenery",
      paragraphs: [
        "The limestone peaks along the Li River are internationally recognized, but the landscape is also home to farms, towns and working river routes. A slower itinerary leaves room to notice how villages, fields and roads fit into the scenery instead of treating the cruise as a string of photo stops.",
        "In Yangshuo, tourism, farming and village life sit side by side. Walk respectfully through inhabited areas and ask before photographing residents. Longji adds a different highland landscape: terraces are working agricultural land, and the visit involves mountain roads and walking between viewpoints and villages.",
      ],
    },
    foodStory: {
      title: "River fish, rice noodles and a countryside table",
      paragraphs: [
        "Guilin rice noodles are a common local breakfast. Yangshuo is known for beer fish, a freshwater fish dish cooked with beer, alongside rice dishes and seasonal vegetables. Tell the restaurant if you avoid alcohol, and ask how the fish is priced before ordering, and mention allergies or dietary needs before a shared meal is prepared.",
        "Plan meals around the day’s route: port mornings and cruise schedules leave less flexibility than an ordinary Yangshuo day. Confirm restaurant hours and dietary arrangements for your date rather than relying on a particular dish or venue being available.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive in Guilin",
        description:
          "Keep the evening light. Stay in Guilin if the arrival is late or the confirmed cruise pickup makes a Yangshuo transfer impractical.",
      },
      {
        day: "Day 2",
        title: "Li River to Yangshuo",
        description:
          "Take the booked shared cruise. Confirm the port, luggage handoff and Yangshuo hotel finish before departure; a Guilin return adds a separate road journey.",
      },
      {
        day: "Day 3",
        title: "Yangshuo countryside",
        description:
          "Choose a countryside walk, a separately confirmed river activity or a slower hotel day around weather, mobility and interest.",
      },
      {
        day: "Day 4",
        title: "Departure or a separate Longji extension",
        description:
          "Keep Longji for a separate extension with adequate road and walking time, or use this day for onward travel. Avoid a tight same-day cruise-to-flight connection.",
      },
    ],
  },
};

export function getDestinationEditorial(destination: ExplorerDestination): DestinationEditorial {
  const content = destinationEditorial[destination.id];
  if (!content) throw new Error(`Missing destination editorial for ${destination.id}.`);
  return content;
}
