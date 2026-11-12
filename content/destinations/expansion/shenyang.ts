import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/shenyang.svg",
  alt: "Shenyang planning diagram distinguishing the old-city palace, Zhaoling tomb and a separate provincial museum visit; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const shenyangGuide: ExpandedDestination = {
  id: "shenyang",
  name: "Shenyang",
  region: "northeast",
  kicker: "Early Qing power, imperial tombs & a deeper northeastern city stay",
  description:
    "Explore the Qing dynasty before Beijing through Shenyang's palace and a selected imperial tomb, with realistic museum time, neighborhood meals and hotel choices for the actual season.",
  stay: "2–3 nights",
  bestFor: "Early Qing history, regional collections and northeastern food",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["beijing", "chengde", "harbin", "changchun", "dalian"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Shenyang Travel Guide: Qing Palace, Tombs & Hotels",
    seoTitle: "Shenyang Travel Guide: Qing Palace & Hotels",
    seoDescription:
      "Plan Shenyang with Mukden Palace context, Zhaoling choices, Liaoning Provincial Museum, hotel areas, exact station transfers and a well-paced northeast stay.",
    answer:
      "Shenyang (沈阳), historically known as Mukden, is Liaoning's capital in northeast China. Visit for the early Qing imperial palace, a selected imperial tomb and the history of a major modern northeastern city. Shenyang Imperial Palace, also called Mukden Palace or Shenyang Gugong, belongs to the same UNESCO serial property as Beijing's Forbidden City but is a different site with its own architectural sequence and pre-1644 court context. A visit becomes most rewarding when those differences are explained, rather than treating it as a smaller substitute for Beijing.",
    stayAnswer:
      "Two nights usually provide one full day for the palace and a carefully selected second interest, with meals and travel periods kept realistic. Three nights create two full days, allowing a separate tomb or provincial museum visit and a less hurried pace. One night works only when actual trains or flights leave a substantial visitor window. If the museum collections, modern history and several religious or imperial sites all matter, add time or choose among them rather than promising a comprehensive city survey in one day.",
    hotelAnswer:
      "Compare the Zhongjie and old-city surroundings for palace-area walks and meals, a specific hotel around Qingnian Street or the city-center business areas for full-service comfort, and a northern address when Zhaoling or Shenyang North station genuinely shapes the schedule. These are broad areas, so use the exact property and daily route. Hunnan can suit an actual southern appointment or museum-led stay, but is not automatically convenient for the old city. For a premium trip, room quietness, heating or cooling, breakfast, bathroom and easy pickup matter more than an imperial or central label.",
    sightseeingQuestion: "Should you choose Zhaoling or Liaoning Provincial Museum?",
    sightseeingAnswer:
      "Choose Zhaoling, the tomb of Hong Taiji and Empress Xiaoduanwen within the wider Beiling Park setting, for an imperial funerary landscape and another Qing historical subject. Choose Liaoning Provincial Museum for regional collections and selected exhibitions in Hunnan, south of the old center. They are different visits in different directions. The museum is not an annex inside the palace, and a general park visit should not be assumed to include every tomb space. Review the actual access and choose by interest, weather, walking and available time.",
    visitorResources: [
      {
        label: "UNESCO: Imperial Palaces of the Ming and Qing Dynasties in Beijing and Shenyang",
        href: "https://whc.unesco.org/en/list/439/",
        scope:
          "Historical and architectural context for the serial property. This does not establish a shared visitor ticket, current open halls, exhibition contents or booking procedures at either palace.",
      },
      {
        label: "UNESCO: Imperial Tombs of the Ming and Qing Dynasties",
        href: "https://whc.unesco.org/en/list/1004/",
        scope:
          "Background on the serial funerary heritage property, including the Shengjing tombs. Heritage boundaries and significance do not establish current park tickets, tomb admission or accessible routes.",
      },
      {
        label: "Shenyang municipal government, English portal",
        href: "https://english.shenyang.gov.cn/",
        scope:
          "Municipal orientation and public information. Confirm the selected institution's current reservations, document requirements, openings and transport separately before fixing the itinerary.",
      },
    ],
    serviceScope:
      "A tailored Shenyang proposal can set out the hotel and room, guided palace route, selected tomb or museum, road-transfer hours and named admissions. Ask for interpretation that distinguishes early Qing court history from the city's later political and industrial development. Specialist meetings, closed rooms, religious ceremonies and private museum access are not assumed. Share walking limits, cold tolerance and dietary needs before choosing the daily sequence.",
    routeAdvice:
      "Shenyang can deepen a Beijing visit through the Qing court's earlier setting, or add a history-focused chapter before Harbin. Chengde contributes a different, later imperial landscape, with its own nights and complete transport. Select those places for the historical questions they answer, not because every northeastern rail route needs another stop. No matching published Shenyang product is recommended here. The outline below is illustrative and can inform a tailored proposal with actual services and optional visits distinguished.",
    practicalPlanning: {
      timing:
        "Give the palace a proper visitor window, then choose one complementary subject rather than rushing between several distant institutions. Check the museum's date-specific opening before placing it on a departure day. In winter, alternate outdoor approaches with genuinely available warm indoor breaks. In any season, include a seated meal and the actual station transfer before deciding how many attractions fit.",
      walking:
        "Palace courtyards, thresholds, stairs and exhibition standing present different demands from a park walk or a large museum. At Zhaoling, the approach and the selected tomb area need their own distance review. Snow or ice can affect surfaces in winter. Identify the actual entrance, shorter route, seating and vehicle meeting point; a private car does not remove internal walking or establish step-free access to historical buildings.",
      cost: "Compare hotel room and location, guiding depth, road hours, named admissions and the complete rail or flight connection. A park ticket, tomb entry and additional exhibition can be separate arrangements. Specialist interpretation and extended evening service should be identified when included. A premium should improve comfort, understanding and usable time rather than promise empty courtyards, priority access or unrestricted photography.",
    },
    attractions: [
      "Shenyang Imperial Palace / Mukden Palace / Shenyang Gugong",
      "Zhongjie and selected old-city streets",
      "Zhaoling imperial tomb and its Beiling Park setting",
      "Liaoning Provincial Museum in Hunnan",
      "Fuling imperial tomb as a separate eastern excursion",
      "Selected modern-history sites when appropriate to the group",
    ],
    stays: [
      {
        label: "1 night: a focused palace introduction",
        advice:
          "Choose only when actual transport leaves time for a useful palace visit and a meal. An evening arrival followed by an early train provides little sightseeing. Do not assume the provincial museum and both major tombs fit around a short stop.",
      },
      {
        label: "2 nights: one full day with one complement",
        advice:
          "Center the day on the palace and choose a neighborhood, collection or tomb interest according to the route and access. A partial travel day can add something small if it genuinely fits. Keep enough time for interpretation rather than making the stay a race between entrances.",
      },
      {
        label: "3 nights or more: two clear historical days",
        advice:
          "Separate the palace and old-city introduction from a tomb or provincial collection day. Add a modern-history subject only when it matters to the group. This pace allows better winter breaks, meals and hotel time without pretending every site has the same opening or physical demands.",
      },
    ],
    hotelAreas: [
      {
        name: "Zhongjie and the old-city surroundings",
        advice:
          "A starting point for the palace, street life and meals. Check the actual distance to the visitor entrance, pedestrian access, luggage handling, room noise and pickup. A shopping-street address can be lively late into the evening and may not be the quietest room choice in the same neighborhood.",
      },
      {
        name: "Qingnian Street and central business areas",
        advice:
          "Compare a specific full-service property for room comfort, dining and road access. The corridor covers a substantial area, not one compact sightseeing district. Match its exact address to the palace, museum and evening preferences before choosing it solely for a skyline view or brand.",
      },
      {
        name: "Northern city, Beiling or Shenyang North surroundings",
        advice:
          "Useful when the actual tomb visit, hotel or rail connection supports the choice. These are different locations within a broad area. A station hotel is not automatically near Zhaoling's relevant entrance, and a park-facing room does not establish a short palace transfer.",
      },
      {
        name: "Hunnan and southern-city properties",
        advice:
          "Choose for a particular hotel, appointment, museum plan or transport sequence. Review daily driving, restaurant options and the exact gateway on your ticket. Being south of the center does not make every Hunnan hotel an airport hotel or a convenient base for all historical visits.",
      },
    ],
    tradeoffs: [
      {
        title: "Read the palace as an early Qing court",
        advice:
          "The relationship among ceremonial spaces, residential areas and the palace's different building groups is the subject, not simply their size compared with Beijing. Ask what belongs to the early court setting and what reflects later use or additions. Open halls and exhibitions vary; a good route retains its meaning without promising every room or a specific object on display.",
      },
      {
        title: "Zhaoling and Fuling are different imperial tombs",
        advice:
          "Zhaoling is associated with Hong Taiji and Empress Xiaoduanwen; Fuling, in a different eastern setting, is associated with Nurhaci and Empress Xiaocigao. Choose one for its landscape, historical question and actual route before adding the other. Park grounds, tomb spaces, steps and admission arrangements need separate review. Two tomb names do not describe one short visitor circuit.",
      },
      {
        title: "A provincial collection deserves more than a gap in the schedule",
        advice:
          "Liaoning Provincial Museum can broaden the stay beyond palace architecture, but its Hunnan location and substantial collections need useful time. Choose a few galleries or a particular exhibition that actually interests you, subject to availability. Confirm admission for the relevant identity document and avoid promising a famous painting or temporary display without current evidence.",
      },
      {
        title: "Modern history changes the tone of the day",
        advice:
          "The Zhang family residence and the September 18 historical subject introduce different periods and emotional demands from an imperial garden or food walk. Choose the actual institution and depth of discussion. Memorial material requires care with children and sensitive guests; it should not be an automatic entertainment stop squeezed before a train. Explain the context and leave time to absorb it.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "dalian",
        advice:
          "Dalian adds a coastal city chapter after Shenyang’s early Qing history, with central architecture, a selected shoreline and a different hotel brief. Compare actual stations and both hotel transfers. Choose central Dalian, Xinghai Bay or Donggang for a city stay; outlying Jinshitan needs its own resort or excursion plan rather than a generic seaside promise.",
      },
      {
        slug: "changchun",
        advice:
          "Changchun adds twentieth-century history and Chinese film heritage, distinct from Shenyang's early Qing setting. Puyi's later Manchukuo court should not be confused with a Qing imperial palace. Check the actual train, both hotel transfers and useful nights before combining the cities.",
      },
      {
        slug: "beijing",
        advice:
          "Compare the early Qing court in Shenyang with the dynasty's later Beijing setting. Allow the Forbidden City and Great Wall their own Beijing days. Establish the actual rail service, station pair and both hotel transfers before deciding the order and usable visiting time.",
      },
      {
        slug: "chengde",
        advice:
          "Chengde adds a later Qing seasonal landscape and outlying temples rather than another version of Shenyang's palace. It requires a separate stay and complete transport plan. Choose the historical comparison deliberately instead of assuming every imperial site belongs in one compact northern circuit.",
      },
      {
        slug: "harbin",
        advice:
          "Harbin adds railway-city architecture and, in the appropriate season, separately confirmed ice and snow attractions. Shenyang contributes a different history. Check the train, stations, hotel transfers and winter operation rather than selling the two cities as one interchangeable snow holiday.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring and early autumn often suit courtyard and park walking, with temperature changes still possible. Summer can be warm, humid and rainy; retain shade, water and an indoor break. Winter is cold and outdoor paving may be icy. Choose reliable hotel heating, suitable footwear and shorter outdoor sessions. Shenyang's palace and collections provide year-round historical reasons to visit, but the winter route needs its own pace rather than the same summer itinerary with heavier clothing.",
    orientation:
      "Shenyang's palace and Zhongjie lie in the old-city visitor area. Zhaoling and Beiling Park are farther north, Fuling lies in a different eastern direction, and Liaoning Provincial Museum is in Hunnan to the south. The city's rail gateways and Taoxian Airport are separate locations again. Group visits by geography and attention rather than assuming that every place named Shenyang fits within a short central walk.",
    experiences: [
      "Explore the early Qing palace through its architectural sequence and the court history before Beijing",
      "Choose a distinct imperial-tomb landscape or a carefully selected provincial collection with time for interpretation",
      "Enjoy a northeastern meal and an old-city neighborhood introduction without sacrificing warmth or rest",
    ],
    planningNotes: [
      "Name Shenyang, Shenyang North or Shenyang South station exactly on transfer requests",
      "Set palace, tomb and museum priorities before choosing the hotel and daily road sequence",
      "Plan winter surfaces, heating and actual warm-up stops separately from ordinary road transfers",
    ],
    arrival:
      "Shenyang Taoxian International Airport uses code SHE. Shenyang railway station, Shenyang North and Shenyang South are different rail gateways. Use the full ticket details and actual hotel address for pickup. Compare trains or flights with luggage, boarding and final road transfers included. A hotel described as central or near a station should be checked against the exact arrival and main sightseeing route.",
    gettingAround:
      "Road transfers help connect the old city, tombs, museum and hotel. Within each site, select a manageable walk and agreed meeting point. The metro can serve independent city time, with station walking and winter conditions considered. Pedestrian areas and historical precincts may prevent doorstep pickup; establish where the car can actually stop before beginning a route with limited mobility or heavy luggage.",
    stayStrategy:
      "Use one base for a short first stay. Three nights provide a more useful split between the old-city palace and a separate tomb or museum day. Compare quiet sleep, bathroom, temperature control, breakfast, nearby meals and pickup rather than choosing by a broad district label alone. In winter, reliable room warmth and short practical transfers can be more valuable than a distant view; in every season, leave time to use the room you selected.",
    firstTimerNote:
      "Shenyang adds most when the early Qing story matters to you. A palace route, one complementary historical subject and a regional meal can give a clearer understanding than many unrelated stops. Keep periods distinct: early court life, later imperial remembrance and modern conflict require different explanation. Good guiding should make those connections clear without flattening them into a single story of ancient China.",
    faqs: [
      {
        question: "Is Shenyang worth visiting on a China trip?",
        answer:
          "Yes for early Qing history, imperial architecture and a deeper northeastern city visit. It is a specific interest choice rather than an essential stop for every first trip. Allow a useful palace visit and another selected subject, with actual transport that leaves time to understand them.",
      },
      {
        question: "How many days do you need in Shenyang?",
        answer:
          "One full day, usually with two nights, supports a focused palace introduction and one complementary interest. Three nights create two full days for a more thoughtful palace, tomb or museum split. One night needs favorable transport and a narrower plan.",
      },
      {
        question: "Is Mukden Palace the same as Shenyang Imperial Palace?",
        answer:
          "Yes. Mukden Palace, Shenyang Imperial Palace and Shenyang Gugong refer to the same palace complex. Mukden is a historical name associated with Shenyang. The site is distinct from Beijing's Forbidden City even though both belong to the same UNESCO serial property.",
      },
      {
        question: "Should I visit Shenyang's palace after Beijing's Forbidden City?",
        answer:
          "It can be worthwhile when the early Qing court and architectural differences interest you. It is not simply a smaller replacement for Beijing. Ask for interpretation of its own building groups, court context and later changes, and choose another destination if a second imperial subject does not appeal.",
      },
      {
        question: "Are Zhaoling, Beiling Park and Fuling the same place?",
        answer:
          "Zhaoling is the imperial tomb within the wider Beiling Park setting. Fuling is a different tomb in an eastern part of Shenyang. Park access and the selected tomb spaces can have distinct visitor arrangements. Use the actual site and entrance when planning tickets, walking and pickup.",
      },
      {
        question: "Where should I stay in Shenyang for sightseeing?",
        answer:
          "Compare an actual Zhongjie or old-city address with a specific central full-service hotel. Northern or Hunnan properties can suit a particular tomb, museum or travel sequence, but are not equally convenient for every visit. Review room quietness, heating or cooling, meals and exact transfers.",
      },
      {
        question: "Is Liaoning Provincial Museum inside Shenyang Imperial Palace?",
        answer:
          "No. It is a separate institution in Hunnan, south of the old-city palace area. Give it its own transfer and selected collection route. Current openings, admission procedures and temporary exhibitions should be checked with the institution before fixing the day.",
      },
      {
        question: "Can I visit Shenyang in winter with limited walking?",
        answer:
          "A shorter route may be possible after reviewing courtyard surfaces, thresholds, steps, park distances and actual indoor breaks. Snow and ice can change suitability. Share balance, knee and wheelchair needs before selecting sites; a heated car does not make the visitor routes step-free or ice-free.",
      },
      {
        question: "Which station should I use in Shenyang?",
        answer:
          "Choose the train and station that fit the complete route. Shenyang, Shenyang North and Shenyang South are different stations. Match pickup to the ticket and actual hotel, comparing boarding, luggage and both road transfers rather than the scheduled train ride alone.",
      },
    ],
    culturalStory: {
      title: "The Qing story before and beyond Beijing",
      paragraphs: [
        "Shenyang's palace lets a guide explain an earlier court setting rather than begin Qing history only with Beijing. Its ceremonial and residential spaces, building groups and later use deserve attention on their own terms. Ask how architecture organized court life and what the surviving ensemble can reliably tell us. This approach gives the visit a purpose even for guests who already know Beijing's larger palace complex.",
        "The imperial tombs extend that story through memory, ritual and landscape. A modern-history site or provincial collection then opens a different period, requiring its own context. Keep those subjects distinct, and identify original fabric, restoration or later display where reliable evidence permits. The city is a living provincial capital, not an unchanged royal backdrop; its meals, neighborhoods and modern development are part of the visit too.",
      ],
    },
    foodStory: {
      title: "Make room for a northeastern meal",
      paragraphs: [
        "Shenyang offers a useful introduction to northeastern cooking through dumplings, hearty stews and preparations using suancai, fermented cabbage. Choose the filling, meat, broth and portion size rather than assuming a familiar English label describes every version. A warm seated meal can be a particularly welcome part of a winter sightseeing day. Smaller portions and a few contrasting dishes often work better than ordering every regional specialty.",
        "Dumpling fillings may contain pork, seafood or other ingredients; a vegetable-looking stew can use meat stock. Discuss wheat, soy, sesame, seafood, sauces and shared equipment when relevant to the group's restrictions. A food walk and a carefully chosen seated meal serve different needs. Pick a venue that supports dietary communication, comfort and the day's actual route instead of treating the busiest old-city street as the only authentic choice.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the exact city base",
        description:
          "Transfer from the named airport or railway station. Keep the first meal convenient and add only a short neighborhood introduction that fits the actual arrival and weather.",
      },
      {
        day: "Full day 1",
        title: "The early Qing palace and selected old-city life",
        description:
          "Give the palace a substantial visit with explanation and breaks, then enjoy lunch and a manageable Zhongjie-area walk. Add another institution only when its access, tone and time suit the group rather than using every gap for another ticket.",
      },
      {
        day: "Additional full day",
        title: "An imperial landscape or a provincial collection",
        description:
          "Choose Zhaoling or Liaoning Provincial Museum as the main subject, adding a contrasting visit only if the geography and pace allow. A three-night stay normally provides this second full day. Fuling is a separate choice with its own transfer, not another name for Zhaoling.",
      },
      {
        day: "Departure",
        title: "Continue with a distinct historical chapter",
        description:
          "Allow the complete station or airport transfer before continuing to Beijing, Harbin or another planned stay. Chengde needs its own usable time and actual connection. This outline is illustrative, not a published package or a promise that every mentioned option is included.",
      },
    ],
  },
};
