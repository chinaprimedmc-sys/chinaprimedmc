import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/pingyao.svg",
  alt: "Pingyao planning diagram comparing an old-city courtyard, a hotel outside the walls and a separate temple-art excursion; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const pingyaoGuide: ExpandedDestination = {
  id: "pingyao",
  name: "Pingyao",
  region: "north",
  kicker: "A walled merchant city, courtyard nights & remarkable temple art",
  description:
    "Understand Pingyao through its streets, merchant institutions and courtyard spaces, then choose whether temple sculpture or timber architecture deserves an extra day.",
  stay: "2–3 nights",
  bestFor: "Merchant history, courtyard stays and Shanxi architecture",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["taiyuan", "datong", "beijing", "xian"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Pingyao Travel Guide: Courtyard Hotels, History & Temples",
    seoTitle: "Pingyao Travel Guide: Courtyard Hotels & Temples",
    seoDescription:
      "Plan Pingyao with old-city hotel comparisons, banking history, Shuanglin and Zhenguo temple choices, walking advice and a tailored Shanxi itinerary.",
    answer:
      "Pingyao is a historic walled city in central Shanxi, known for its urban layout, courtyard buildings and institutions associated with merchant and remittance-bank history. Choose it for a stay that connects streets, domestic spaces, commerce and local government, rather than only a wall walk. The UNESCO Ancient City of Ping Yao property also includes Shuanglin Temple and Zhenguo Temple outside the walled city. These are separate excursions with different artistic and architectural interests, not additional names for the main shopping streets.",
    stayAnswer:
      "Two nights give one full day for a selected old-city route and time for evening meals. Three nights provide a second full day for Shuanglin, Zhenguo or a more relaxed courtyard stay. One night can be a focused introduction with compatible arrival and departure tickets, but leaves little room for both the town and outlying temple art. Add nights when you want to look closely, not simply because a ticket lists many buildings. A late arrival and early train are not a full day of sightseeing.",
    hotelAnswer:
      "Stay inside the walls for courtyard atmosphere and nearby evening walks, after checking noise, room privacy, bathroom, temperature control and the final luggage approach. An edge-of-old-city property may offer a useful balance of atmosphere and pickup access. Outside-wall accommodation can simplify road access and provide a different room setup, with transfers or walking into the historic center. A kang-style platform, antique furniture or luxury label does not establish the mattress, heating or modern comfort of the actual booked room.",
    sightseeingQuestion: "Should you visit Shuanglin Temple or Zhenguo Temple?",
    sightseeingAnswer:
      "Choose Shuanglin for a strong interest in painted sculpture and the arrangement of figures within temple halls. Choose Zhenguo for an interest in early timber architecture, including its celebrated Ten Thousand Buddhas Hall, alongside its sculptural context. Both can enrich a Shanxi itinerary, but should have time for interpretation and their actual road approaches. They are outside the walled city and not interchangeable stops. Confirm current hall access and photography rules, and avoid assuming a city sightseeing ticket covers every outlying site.",
    visitorResources: [
      {
        label: "UNESCO: Ancient City of Ping Yao",
        href: "https://whc.unesco.org/en/list/812/",
        scope:
          "Background on the listed city and the Shuanglin and Zhenguo temple components. This does not establish current admissions, all accessible interiors, ticket coverage or the age and condition of an individual hotel building.",
      },
      {
        label: "Pingyao county government",
        href: "https://www.pingyao.gov.cn/",
        scope:
          "County background and public notices. Confirm current visitor access, local traffic rules, individual temple arrangements and accommodation services separately for the travel date.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Pingyao stay with the actual courtyard or modern hotel, guide, road service, named admissions and onward rail arrangements specified in the proposal. Private guiding should explain the merchant, civic and religious subjects you select. It does not provide private use of public lanes, closed halls or permission to enter residents' rooms. A special host, workshop or expert visit needs its own agreement; luggage support and any local transfer to a pedestrian-area hotel should be explicit.",
    routeAdvice:
      "Pingyao can connect with Datong for a deeper Shanxi art-and-architecture journey, or with Beijing and Xi'an through a checked rail and hotel sequence. Taiyuan may serve a gateway or an additional cultural chapter, depending on actual services and interests. There is no published Pingyao package recommended here. Use the outline to discuss a tailored route with selected city sites, temple visits and real transfer time rather than assuming every place mentioned is included.",
    practicalPlanning: {
      timing:
        "Choose a small set of city interiors that explain different functions: a remittance institution, a domestic courtyard or a county-government setting. Pair them with a manageable lane or wall section and a proper meal. Put outlying temples into a geographic road plan rather than squeezing them between a late checkout and a fixed train. Evening performances, where available, have separate tickets and schedules and should not be assumed from a city stay.",
      walking:
        "Historic paving, thresholds, courtyards and wall-access stairs present different demands. A generally level street does not mean every room or institution is step-free. Road vehicles may not reach the hotel door; check the permitted final transfer and luggage arrangement. Temple halls can add steps and standing, and rain or ice can affect footing. Select the actual route and seated breaks before promising a comprehensive old-city walk.",
      cost: "Compare the actual room and bedding, bathroom, heating or cooling, road and local hotel transfers, guide hours, selected admissions and outlying temple journeys. Confirm the current city-ticket scope and whether the temples require separate tickets. A heritage-room premium should reflect a room and service you value, not an unsupported claim that every beam or furnishing is antique. Meals, performance tickets, purchases and specialist visits should be identified separately.",
    },
    attractions: [
      "Selected Pingyao city-wall and street routes",
      "Rishengchang remittance-bank museum",
      "Selected courtyard and county-government interiors",
      "Shuanglin Temple",
      "Zhenguo Temple",
    ],
    stays: [
      {
        label: "1 night: a selected city introduction",
        advice:
          "Use the actual arrival window and full departure plan to choose a few interests. A courtyard evening can be worthwhile, but do not promise the entire city and both outlying temples on a short stop.",
      },
      {
        label: "2 nights: a full day and an unhurried evening",
        advice:
          "Give the city a coherent historical route, leaving time for a meal and the chosen hotel. Add a temple only when another usable window genuinely accommodates its full drive and visit, rather than reducing the city to a hurried walk.",
      },
      {
        label: "3 nights or more: temple art and closer looking",
        advice:
          "Use a second full day for one or both outlying temple interests when access and appetite suit. Extra nights can also support slower courtyard time; they do not require entering every museum or repeating similar merchant-house displays.",
      },
    ],
    hotelAreas: [
      {
        name: "Courtyard properties inside the walls",
        advice:
          "Choose for the particular courtyard, evening setting and room. Verify sound between rooms, privacy, ventilation, bathroom and temperature control, along with mattress type and any steps. Confirm where the vehicle stops and how guests and bags reach the door.",
      },
      {
        name: "Old-city edges and gate surroundings",
        advice:
          "Compare for a balance of access and atmosphere, checking the actual gate, pedestrian route and pickup. Being near a gate is not proof of an easy room approach, a quiet street or a short walk to every selected interior.",
      },
      {
        name: "Modern accommodation outside the walls",
        advice:
          "Consider for a specific room layout, facilities or road access. Include the real journey to evening meals and old-city visits, and check the station transfer. Outside the walls is not one uniform hotel district; the actual address determines convenience.",
      },
    ],
    tradeoffs: [
      {
        title: "Follow the money without reducing every building to a bank",
        advice:
          "Rishengchang can introduce the piaohao remittance business and the movement of money across distance. A domestic courtyard and a county-government complex explain different parts of urban life. Ask for a connected story rather than treating all ticketed interiors as interchangeable merchant museums. Avoid presenting modern banking concepts as exact equivalents without explaining the historical context.",
      },
      {
        title: "The city ticket is a purchase decision, not an itinerary",
        advice:
          "Check current admission rules, named inclusions, validity and any limits on entry. Walking along public streets and entering a paid institution are different activities. Even when several sites share a ticket, select those that add new understanding. Outlying temples, evening performances and particular exhibitions should have their inclusion confirmed separately.",
      },
      {
        title: "Heritage atmosphere and sleep quality need separate checks",
        advice:
          "A beautiful courtyard can have shared circulation, sound transmission, seasonal temperature challenges or a room reached by steps. A kang-style bed platform is not a uniform mattress or heating specification. Ask about the booked room and bathroom, not only the public courtyard photographed online. A quieter modern or edge property can be the right choice for a guest who wants history by day and simpler comfort at night.",
      },
      {
        title: "A wall walk and a temple-art day serve different interests",
        advice:
          "Choose a wall section for urban form and views, reviewing its stairs and exposed conditions. Choose the outlying temples for specific sculpture or timber architecture, allowing time to look inside accessible halls. Guests who do not enjoy extended stair climbing can still have a rich city-and-temple visit when the individual routes suit their needs.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "taiyuan",
        advice:
          "Taiyuan can add Jinci and selected Shanxi Museum galleries as a distinct cultural introduction, or serve as a transparent gateway. Compare the actual station, both hotel journeys and Pingyao's final old-city approach. Do not treat a short scheduled train ride as enough time for Jinci, a provincial collection and a full Pingyao visit in one day.",
      },
      {
        slug: "datong",
        advice:
          "Datong adds Northern Wei sculpture at Yungang and a different urban temple chapter. Give both destinations separate stays and check the actual rail or road sequence. The Hanging Temple near Hunyuan is a further excursion, not automatically a convenient stop on every Datong–Pingyao transfer.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing adds imperial history and a Great Wall choice to Pingyao's merchant-city scale. Compare the real station pair, hotel approaches and baggage arrangements before choosing services. A short rail description does not establish a useful same-day city visit at both ends.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an provides an earlier imperial-capital perspective and the Terracotta Army. Choose the full rail and hotel sequence so each place has usable time. A Pingyao stop can deepen the route, but should not consume the day reserved for Xi'an's main visit through an overambitious transfer schedule.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit urban walks, with wind and temperature swings still possible. Summer needs shade, water and a midday break. Winter can be very cold; room heating and safe footing matter as much as a picturesque courtyard. Public holidays and popular weekends can change crowd levels and hotel noise. Choose the exact room and a route that remains worthwhile without empty lanes, snow or a particular evening lighting effect.",
    orientation:
      "Pingyao is in central Shanxi. The walled city, modern town, Shuanglin Temple and Zhenguo Temple occupy separate locations. Pingyaogucheng railway station, used by many high-speed services, is distinct from Pingyao railway station; the old-city wording in the former's name does not mean a platform inside the walls. Taiyuan airport and stations require another transfer decision. Use the actual ticket, hotel address and final approach to plan the stay.",
    experiences: [
      "Follow a selected route from city layout to remittance history and domestic courtyard space",
      "Enjoy an old-city evening with a room chosen for real privacy, warmth and sleep",
      "Choose Shuanglin's painted sculpture or Zhenguo's early timber architecture for a separate art-focused excursion",
    ],
    planningNotes: [
      "Check the booked room and final vehicle-to-door approach before choosing a courtyard hotel",
      "Select city interiors for different stories rather than trying to exhaust a combined ticket",
      "Distinguish Pingyaogucheng station from Pingyao station and allow full road time for outlying temples",
    ],
    arrival:
      "Confirm the exact railway station on the ticket. Pingyaogucheng and Pingyao stations are different pickups, and a Taiyuan flight or rail arrival is not an arrival at the old-city hotel. Allow baggage, road service and the permitted final approach inside the walls. Check how the driver and hotel coordinate luggage and local transfers, especially after dark or in poor weather. Keep the arrival itinerary selective rather than treating the station name as proof of immediate sightseeing access.",
    gettingAround:
      "Use walking and any permitted local transport for selected old-city visits, with road transfers for the stations and outlying temples. Agree which vehicle can go where and what service is included; a private road car should not be assumed to reach every courtyard entrance. For wall sections and temples, review steps, entry points and the final pickup. A sensible geographic sequence saves more time than trying to link every attraction in ticket-list order.",
    stayStrategy:
      "Choose one base for two or three nights. A courtyard stay is worthwhile when its room, service and evening setting fit you, not just because it has decorative lanterns. Check noise, bathroom, bedding, temperature control, luggage handling and the actual restaurant options. For guests who prioritize simpler access or a specific modern room, sleeping outside the walls and visiting the old city can be a good balance. Avoid moving hotels merely to sample two different labels.",
    firstTimerNote:
      "Pingyao's value lies in relationships between streets, buildings and institutions. Ask how commerce, households and local administration shared the city, then choose a few spaces that illustrate the answer. An extra temple day introduces different artistic material rather than more of the same urban walk. A private visit should provide good interpretation and realistic comfort; it does not make the public city empty or grant access to residents' private rooms.",
    faqs: [
      {
        question: "How many nights should I stay in Pingyao?",
        answer:
          "Two nights give one full day and an old-city evening. Three nights add a second full day for Shuanglin, Zhenguo or slower courtyard time. One night needs compatible arrivals and departures and should focus on selected city interests rather than promise the complete region.",
      },
      {
        question: "Should I stay inside or outside Pingyao's walls?",
        answer:
          "Stay inside for a specific courtyard experience and nearby evenings, checking sound, bathroom, bedding and luggage access. Stay near the edge or outside when the actual room and road access suit you better. Heritage atmosphere does not by itself establish modern sleep quality or step-free access.",
      },
      {
        question: "Do I need a ticket to visit Pingyao?",
        answer:
          "Distinguish walking on public streets from entering specific attractions, and check current rules for the date. Establish what the actual city ticket includes, its validity and any entry limits. Outlying temples and performances should not be assumed to share the same admission.",
      },
      {
        question: "Should I choose Shuanglin or Zhenguo Temple?",
        answer:
          "Choose Shuanglin for painted sculpture and Zhenguo for a particular interest in early timber architecture alongside its other heritage. They are different sites outside the walled city. Allow proper visits and road time, and confirm current hall access and photography rules.",
      },
      {
        question: "Are Pingyao railway station and Pingyaogucheng station the same?",
        answer:
          "No. They are different stations with separate pickup and transfer arrangements. Pingyaogucheng's old-city name does not mean it is inside the walls. Use the actual station and service on the ticket and include the final hotel approach.",
      },
      {
        question: "Is Pingyao suitable for travelers with limited mobility?",
        answer:
          "A selected visit may work after checking the exact hotel, paving, thresholds and local transport. Wall access and temple halls have different stair demands. A vehicle outside a gate does not establish a step-free route to the room, so review each part of the approach.",
      },
      {
        question: "Can I combine Datong, Pingyao and Xi'an?",
        answer:
          "Yes, with a checked transport sequence and separate usable days for their different historical subjects. Decide the actual rail or road connections and hotel nights before adding excursions. Hunyuan or a rural temple is not automatically a convenient stop on every intercity transfer.",
      },
      {
        question: "What food should I try in Pingyao?",
        answer:
          "Pingyao beef and Shanxi noodle dishes offer useful starting points if they suit your diet. Pingyao beef is a prepared local specialty, not simply any beef ordered in town; ask how the particular dish is served. Check wheat, meat stocks, sauces and preparation for allergies or strict dietary needs.",
      },
    ],
    culturalStory: {
      title: "Read the merchant city through the spaces it needed",
      paragraphs: [
        "A remittance institution such as Rishengchang becomes more interesting when the guide explains why merchants needed to move value without moving the same quantity of physical money. Follow how that work related to rooms, records and trusted relationships, rather than assuming the building operated exactly like a present-day bank. Then compare the institution with a household courtyard or government setting to understand different demands on urban space.",
        "Outside the walls, Shuanglin and Zhenguo add a different lens. Sculptural groupings and timber halls ask for close attention to materials, arrangement and religious context. Their inclusion in the UNESCO property should not turn them into a hurried extension of an urban ticket circuit. Choose a visit because the art or architecture interests you, follow current rules and give accessible interiors time to reveal their differences.",
      ],
    },
    foodStory: {
      title: "Choose a real regional meal between courtyards",
      paragraphs: [
        "Pingyao beef is a recognizable local specialty with a preparation and presentation distinct from simply ordering an arbitrary beef dish. Pair a suitable portion with noodles, vegetables or other dishes selected for appetite and preference. Shanxi's flour-based foods offer another direction; ask about the particular shape and cooking method rather than treating every translated noodle name as equivalent. A seated lunch can give a long architectural walk a comfortable rhythm.",
        "Discuss wheat, soy, meat stocks, sauces and shared preparation when choosing the restaurant. A vegetable dish does not establish vegetarian stock, and a beef specialty does not prove halal suitability. Guests who prefer a quieter meal can eat away from the busiest commercial lane without losing the old-city evening. A courtyard-room booking should not be assumed to include all meals or an appropriate breakfast before an early train.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the courtyard by the actual permitted route",
        description:
          "Transfer from the named station or gateway, settle in and keep the first meal local. Allow for luggage and the final approach before adding a short evening walk.",
      },
      {
        day: "Full day 1",
        title: "City form, commerce and a domestic contrast",
        description:
          "Choose a few complementary interiors and a manageable street or wall section with time for interpretation and lunch. Do not let a combined ticket dictate a rushed visit to every listed building.",
      },
      {
        day: "Optional extra full day",
        title: "Give temple art its own window",
        description:
          "Choose Shuanglin, Zhenguo or both according to interest, current access and the complete road plan. A slower courtyard day is another valid choice, and a performance needs its own booking if wanted.",
      },
      {
        day: "Departure",
        title: "Continue with the next destination's time protected",
        description:
          "Allow packing, the local hotel approach and the full journey to the actual station or onward hotel. This outline is illustrative, not a published package or a promise that every named attraction is included.",
      },
    ],
  },
};
