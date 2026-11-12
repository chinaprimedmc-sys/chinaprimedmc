import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wuhan.svg",
  alt: "Wuhan planning diagram comparing a Hankou neighborhood base, Wuchang history and an East Lake stay; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const wuhanGuide: ExpandedDestination = {
  id: "wuhan",
  name: "Wuhan",
  region: "central",
  kicker: "Bronze-age music, river-city neighborhoods & Hubei breakfasts",
  description:
    "Build a Wuhan stay around the Hubei Provincial Museum, a well-chosen historic neighborhood and time by the water, with hotel and station choices that keep river crossings purposeful.",
  stay: "3–4 nights",
  bestFor: "Regional history, everyday food and a deeper Yangtze journey",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "jingzhou",
    "xiangyang",
    "enshi",
    "wudang-mountains",
    "yichang",
    "nanjing",
    "shanghai",
    "zhangjiajie",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Wuhan Travel Guide: Museums, Food & Where to Stay",
    seoTitle: "Wuhan Travel Guide: Food, Museums & Hotels",
    seoDescription:
      "Plan Wuhan with Hankou vs Wuchang hotel advice, Yellow Crane Tower, Hubei Provincial Museum, East Lake, station transfers and a well-paced private stay.",
    answer:
      "Wuhan (武汉) is Hubei's capital, where the Han River meets the Yangtze. The city brings together the historic towns of Hankou, Wuchang and Hanyang. Visit for the Hubei Provincial Museum's archaeological collections, Yellow Crane Tower's literary associations, former trading neighborhoods and a distinctive breakfast culture. It rewards travelers interested in how a large Chinese city works beyond the classic first-trip sights. Plan by area: a morning in Hankou and a museum visit in Wuchang need a real river crossing, not a short walk between neighboring attractions.",
    stayAnswer:
      "Three nights usually give two full days: one for Wuchang's history and museum interests, another for Hankou's neighborhoods and food. Four nights add a separate East Lake day or allow a slower split between the museum and Yellow Crane Tower. Two nights work for one selected focus. A rail stopover is useful only when the actual station, luggage arrangements and onward departure leave enough time; Wuhan is too spread out to treat a short connection as a full city visit.",
    hotelAnswer:
      "Start with Hankou around Jianghan Road and the historic riverfront if neighborhood walks, restaurants and evenings near the Yangtze matter most. Choose Wuchang for a particular hotel and a sightseeing plan centered on Yellow Crane Tower or the museum side of the city. An East Lake property suits guests who will spend time in its setting. For a high-end stay, compare the booked room's outlook, quietness and comfort alongside daily transfers. A river-view label does not establish a walkable waterfront entrance or equal convenience for every attraction.",
    sightseeingQuestion: "Should you prioritize Yellow Crane Tower or Hubei Provincial Museum?",
    sightseeingAnswer:
      "Choose Yellow Crane Tower for poetry, the river landscape and the story of a repeatedly rebuilt landmark; the present tower was completed in 1985, rather than surviving intact from antiquity. Choose Hubei Provincial Museum for archaeology, especially the bronze bells and other finds from the tomb of Marquis Yi of Zeng. That tomb was excavated in Suizhou, not at the museum site in Wuhan. With two full days, both may fit, but give each proper attention. Any scheduled replica-bell performance is separate from seeing the archaeological collection.",
    visitorResources: [
      {
        label: "Wuhan municipal government, English portal",
        href: "https://english.wuhan.gov.cn/",
        scope:
          "Municipal background and visitor orientation. Date-specific attraction access, transport operation, hotels and river activities need confirmation with the relevant operator.",
      },
      {
        label: "Hubei Provincial Museum",
        href: "https://www.hbww.org/",
        scope:
          "Institutional information and collection context. Review the museum's current opening, reservation process for your document, exhibition availability and any separate performance booking before fixing the visit.",
      },
    ],
    serviceScope:
      "A tailored Wuhan proposal can set out the hotel and room, guided areas, road-transfer hours, named admissions and onward connection. The value lies in a coherent route and interpretation that makes Hubei's history understandable. Museum specialist access, bell performances, boat trips and hosted food experiences require their own availability and agreement. Share walking needs, dietary requirements and train details before the daily order is fixed.",
    routeAdvice:
      "Use Wuhan as a deliberate middle-Yangtze chapter, rather than another city added only because a train passes through. Nanjing adds former-capital history farther downriver; Shanghai adds an international arrival or departure city. Zhangjiajie offers a different landscape-focused extension, with its own transfer and several usable days. There is no matching published Wuhan itinerary recommended here. Use the outline below to discuss a tailored stay, then compare the complete hotel-to-hotel travel sequence before choosing the next stop.",
    practicalPlanning: {
      timing:
        "Group Wuchang visits together and give Hankou its own neighborhood time. Reserve the museum window before fitting other activities around it. Breakfast is part of the experience rather than an extra stop after a long hotel meal; start with a few chosen dishes and time to sit. In hot weather, put exposed walks early and make a midday indoor visit or hotel break part of the plan.",
      walking:
        "Expect stretches of pavement, museum standing, landscaped paths and some steps at historical sites. The tower, its surrounding grounds and any viewing level are distinct access questions. East Lake is extensive: a short lakeside walk, cycling outing and long greenway circuit are very different commitments. Choose a named entrance, a manageable section and an actual pickup point instead of assuming a car can follow every waterside path.",
      cost: "Compare room category and view, guiding hours, road transfers, named tickets and the actual rail or flight connection. Museum admission, a special exhibition, interpretation and a replica-bell performance are separate items to clarify. For a river outing, identify the operator, pier, duration, seating and included service. A higher hotel rate is worthwhile when the room and time there improve the trip; it does not purchase exclusive access to the city's public landmarks.",
    },
    attractions: [
      "Hubei Provincial Museum",
      "Yellow Crane Tower / Huanghelou",
      "Hankou historic streets and Jianghan Road surroundings",
      "East Lake / Donghu, on a selected route",
      "Selected Yangtze riverfront walks",
    ],
    stays: [
      {
        label: "2 nights: one full day with a clear priority",
        advice:
          "Choose a museum-and-Wuchang introduction or a Hankou neighborhood and food day. Fit any additional attraction around the complete travel schedule, rather than promising the tower, museum, lake and both riverbanks in one rushed circuit.",
      },
      {
        label: "3 nights: two distinct city days",
        advice:
          "Separate Wuchang's historical interests from Hankou's streets and meals. Add only a short lake or riverside section when time and weather fit. This is a useful first stay for travelers who want context without turning the visit into a comprehensive city survey.",
      },
      {
        label: "4 nights or more: protect a lake day or go deeper",
        advice:
          "Make East Lake a separate interest, split the museum and tower across less demanding days, or explore another carefully selected historical subject. Extra nights are useful when the hotel is part of the holiday and you want room for an unhurried breakfast and evenings.",
      },
    ],
    hotelAreas: [
      {
        name: "Hankou: Jianghan Road and historic riverfront surroundings",
        advice:
          "A good starting point for street architecture, meals and evening walks. Compare the actual block, traffic noise, river access and vehicle meeting point. Pedestrian areas can make the last luggage transfer less straightforward, while a room facing a busy street may feel very different from a quiet high-floor room in the same hotel.",
      },
      {
        name: "Wuchang: city sightseeing base",
        advice:
          "Useful for a stay emphasizing this bank's history and institutions. Yellow Crane Tower, the museum and East Lake are not one compact hotel neighborhood. Select an address against the actual day's visits and evening food preferences; a district name alone is too broad to establish convenience.",
      },
      {
        name: "East Lake: a property-led slower stay",
        advice:
          "Consider for a specific room, grounds and accessible waterside setting you will use. Establish how the property connects to your selected lake section and to city sightseeing. A distant lake-facing hotel can suit a relaxed stay, but is less persuasive when every day starts with an early cross-city transfer.",
      },
      {
        name: "Station or airport hotels",
        advice:
          "Choose for a genuine early departure or late arrival need. Wuhan railway station, Hankou station, Wuchang station and Tianhe Airport serve different locations. An overnight near one of them is a logistical decision, rather than automatically the best base for two days of sightseeing.",
      },
    ],
    tradeoffs: [
      {
        title: "Give the bells their archaeological context",
        advice:
          "At Hubei Provincial Museum, focus on what the Marquis Yi finds reveal about music, ritual and elite life in the early Warring States period. A planned explanation of a few objects is more useful than racing through every gallery. Seeing the ancient bells and hearing a scheduled performance using replicas are different experiences; book the latter separately if it matters to your visit.",
      },
      {
        title: "Read Yellow Crane Tower as a changing cultural landmark",
        advice:
          "Its meaning comes from poetry, repeated rebuilding and its relationship with the river city. The current building is modern, so visit for that layered story and the setting rather than expecting untouched ancient timber. Weather affects distant views; a literary or architectural explanation remains valuable even when the skyline is hazy.",
      },
      {
        title: "Choose one useful East Lake section",
        advice:
          "A short lakeside outing, a garden visit and a cycling day need different entrances, time and fitness. Give the route a start, finish and seated break. Cherry blossom travel brings another reservation and crowd question around the university or relevant gardens; blossoms are seasonal and those locations are not interchangeable with the whole East Lake area.",
      },
      {
        title: "A Wuhan river cruise is not a Three Gorges cruise",
        advice:
          "A local sightseeing sailing shows a city riverfront when operating. A multi-night Three Gorges cruise is a separate journey whose embarkation city, ship and sailing date must be established; many itineraries use Chongqing and Yichang rather than Wuhan. Do not select a Wuhan hotel assuming a local pier is the departure point for the cruise you have booked.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jingzhou",
        advice:
          "Jingzhou adds a different archaeological and defensive-city focus. Compare its actual museum collections and an optional Xiongjiazhong visit with the Wuhan museum route so each contributes a distinct subject. Allow a settled local day and use the correct stations and full hotel transfers rather than treating the rail connection as sightseeing time.",
      },
      {
        slug: "xiangyang",
        advice:
          "Xiangyang provides a different Hubei historical chapter: the river-and-defense setting, Gulongzhong associations and local beef noodles. Compare the correct railway stations and both hotel transfers, then leave one or two full days for the chosen subjects. A train connection does not automatically leave time for the old city or an outlying visit.",
      },
      {
        slug: "enshi",
        advice:
          "Enshi adds a different western Hubei chapter of limestone landscapes and regional food. Allow three or four settled nights for selected canyons and culture, choose the exact station pair and assess the full hotel transfer. It is a separate regional stay, not a Wuhan day trip.",
      },
      {
        slug: "wudang-mountains",
        advice:
          "Wudang adds a distinct Daoist mountain chapter near Shiyan. Allow two or three settled nights for selected palace or summit routes, assessing the steps left after the cableway. Compare dated services and the full station-to-room transfer; this is not a local Wuhan day trip.",
      },
      {
        slug: "yichang",
        advice:
          "Yichang adds a Three Gorges engineering or river-landscape chapter, distinct from Wuhan's museum and city neighborhoods. Decide whether the plan is a dam visit, a short boat or a separately booked multi-night cruise. Compare exact stations, collection points and actual piers; a Wuhan connection does not automatically leave time for sightseeing before a ship deadline.",
      },
      {
        slug: "nanjing",
        advice:
          "Compare two Yangtze cities with different stories: Wuhan's river trade and Hubei collections, then Nanjing's capital history and Purple Mountain monuments. Allow full days in each and check the actual railway service and station pair; sharing a river does not make them neighboring day-trip stops.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai can provide an international gateway and a different urban chapter. Compare trains and flights using the complete transfer, luggage and usable day, then retain a proper Shanghai stay rather than treating it only as an interchangeable connection point.",
      },
      {
        slug: "zhangjiajie",
        advice:
          "Add Zhangjiajie for sandstone scenery after Wuhan's city and museum days. Establish the exact transport and final hotel transfer, then allow enough time for separate park interests. Do not assume a direct connection or a short drive simply because both appear in a Central China travel plan.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn generally offer a more comfortable balance for neighborhood walks and lakeside time. Summer can be very hot, humid and rainy: shorten exposed walks and use an indoor or hotel break. Winter can feel cold and damp, making the actual room's heating and a flexible outdoor schedule important. Spring blossoms are an optional seasonal interest, with variable flowering, crowds and location-specific access; the city's history and food remain better reasons for a trip that must work on fixed dates.",
    orientation:
      "The three historic towns help explain Wuhan. Hankou developed as a trading center, Wuchang holds major historical and cultural institutions, and Hanyang occupies another part of the river confluence. Modern Wuhan extends far beyond these old centers. The Yangtze and Han River are different waterways, while East Lake is a separate inland landscape. Plan the stay around the actual hotel and visits, with deliberate crossings rather than repeatedly moving between banks.",
    experiences: [
      "Explore Hubei's archaeological history through a selected museum route, with the Marquis Yi bells explained in context",
      "Connect Yellow Crane Tower's poetry and rebuilding story with a manageable Wuchang walk",
      "Enjoy a Hankou breakfast and selected trading-era streets, leaving time to notice architecture and everyday life",
    ],
    planningNotes: [
      "Name Wuhan, Hankou or Wuchang railway station exactly on every transfer request",
      "Set the museum window and hotel bank before grouping the day's visits",
      "Treat East Lake, a local river outing and any multi-night Yangtze cruise as separate decisions",
    ],
    arrival:
      "Wuhan Tianhe International Airport (WUH), Wuhan railway station, Hankou railway station and Wuchang railway station are distinct arrival points. Match pickup to the ticket's full name and the actual hotel address. Include the final drive, luggage and station exit when comparing a train with a flight. Onward cruise guests should send the ship's embarkation instructions as well: Wuhan is not a substitute name for Yichang or Chongqing.",
    gettingAround:
      "Road transfers help connect larger areas, while selected walks reveal more within a neighborhood. The metro is an option for independent time, with its own station walking and luggage considerations. Plan one bank or adjoining area at a time, adjusting for weather and traffic. At the lake, tower grounds and pedestrian streets, agree the walking section and meeting point before setting off; the driver's road access is not the same as visitor access to every path.",
    stayStrategy:
      "Use one hotel for a short first visit. Start with the area's usefulness for your evenings and main sightseeing day, then compare the actual room. For a premium stay, quiet sleep, reliable temperature control, a comfortable bathroom, breakfast and a good pickup arrangement matter alongside the view. If a lake hotel is the attraction, retain a half day to enjoy it; if museum and neighborhood days dominate, a practical city base can be the better choice.",
    firstTimerNote:
      "Wuhan becomes more rewarding when you choose a few subjects and connect them. Let a museum object explain the regional past, a Hankou street show the trading city, and breakfast introduce the contemporary city. Avoid filling a transit stop with scattered landmarks. Two properly paced days give a clearer sense of place than many brief stops separated by river crossings.",
    faqs: [
      {
        question: "Is Wuhan worth visiting on a first trip to China?",
        answer:
          "Yes for travelers drawn to regional archaeology, river-city history and everyday food. It is a more specific choice than an essential stop for every first trip. Include it when those interests and the complete transport route justify two useful days, rather than adding it solely because a train passes through.",
      },
      {
        question: "How many days do you need in Wuhan?",
        answer:
          "Two full days, usually with three nights, allow a selected Wuchang introduction and a separate Hankou neighborhood day. Add a third full day for East Lake, a slower museum visit or more hotel time. Two nights normally require choosing one main focus.",
      },
      {
        question: "Is it better to stay in Hankou or Wuchang?",
        answer:
          "Hankou suits historic streets, dining and riverfront evenings; Wuchang can suit a plan focused on its historical sites and institutions. Both cover large areas. Compare the exact hotel with your route, room quietness and evening preferences. East Lake is a separate property-led choice, not a guarantee of central convenience.",
      },
      {
        question: "Are Wuhan, Hankou and Wuchang railway stations the same?",
        answer:
          "No. They are different stations serving the same large city. Use the full station name printed on the ticket for pickup and allow the complete journey from your hotel. A booking that says only Wuhan city is insufficient for a precise station transfer.",
      },
      {
        question:
          "What is the difference between Hubei Provincial Museum's bells and a bell performance?",
        answer:
          "The archaeological collection includes the ancient bronze bells from the tomb of Marquis Yi of Zeng, excavated in Suizhou. A scheduled performance using replicas is a separate visitor activity, with its own availability and booking. Museum entry alone should not be taken as a guaranteed performance ticket.",
      },
      {
        question: "Is Yellow Crane Tower an original ancient building?",
        answer:
          "The present tower was completed in 1985 after a long history of earlier towers and rebuilding. It remains an important cultural landmark for its poetry, city setting and continuing symbolism. Visit with that context, rather than expecting an intact ancient timber structure.",
      },
      {
        question: "Can you take a Three Gorges cruise from Wuhan?",
        answer:
          "Establish the exact itinerary and embarkation instructions before planning transfers. Many multi-night Three Gorges sailings use Chongqing and Yichang. A local Wuhan sightseeing boat is a different experience. Your ship, sailing date and named pier determine where you must be; do not infer Wuhan embarkation from the words Yangtze cruise.",
      },
      {
        question: "What should I eat for breakfast in Wuhan?",
        answer:
          "Start with reganmian, or hot dry noodles, typically dressed with sesame paste, and consider doupi, a pan-fried layered snack commonly filled with glutinous rice and savory ingredients. Fillings, sauces and stocks vary. Ask about sesame, peanuts, soy, meat, shellfish and shared preparation when relevant to your dietary needs.",
      },
      {
        question: "Is Wuhan suitable for a private trip with limited walking?",
        answer:
          "A selective stay can be planned around shorter walks, seated meals and road transfers. Review museum standing, tower access, the exact lake path and vehicle meeting points individually. Share stair, balance and wheelchair needs before selecting sites; a private car does not make every visitor route step-free.",
      },
    ],
    culturalStory: {
      title: "From a bronze ensemble to a river trading city",
      paragraphs: [
        "The Marquis Yi collection provides an unusually tangible introduction to ancient music and ceremonial life. The arrangement of bells is an ensemble, not simply a row of decorative bronzes. Ask how material, tuning and ritual use relate, and distinguish what the excavated objects show from what a modern performance demonstrates. The tomb's Suizhou origin also matters: the Wuhan museum interprets a wider regional past, rather than presenting every object as something found beneath the modern city.",
        "Hankou offers a different historical scale. Selected trading-era streets reveal connections among river transport, commerce and architecture, while Yellow Crane Tower's literary tradition shows how the river landscape was remembered and reimagined. These histories should retain their differences. A rebuilt landmark, a surviving facade and a contemporary commercial street tell different kinds of stories; good guiding helps you read each without describing the entire city as an unchanged old town.",
      ],
    },
    foodStory: {
      title: "Make breakfast part of the visit",
      paragraphs: [
        "Wuhan's breakfast tradition is often described locally as guozao. Reganmian, hot dry noodles, is a good starting point: the noodles are mixed with a savory dressing, commonly including sesame paste, rather than served as a bowl of noodle soup. Doupi offers another texture, with a pan-fried outer layer and glutinous-rice filling. Order a manageable selection and eat while it is fresh. A short, well-explained breakfast can introduce more than a long checklist of dishes you are too full to enjoy.",
        "Hubu Alley is a familiar visitor food street, but it is not the only place to taste the city's cooking. Match the venue to hygiene, seating, the day's route and what you actually want to eat. Discuss sesame and other allergens, meat or seafood fillings, chili and shared equipment before ordering. For a longer meal, choose Hubei dishes around the group's preferences rather than assuming every traveler wants the most adventurous or heavily seasoned option.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle on the chosen bank",
        description:
          "Transfer from the named airport or railway station. Keep dinner near the hotel and add only a short riverfront or neighborhood walk that suits the actual arrival and weather.",
      },
      {
        day: "Full day 1",
        title: "Hubei collections and Wuchang's landmark story",
        description:
          "Build the day around confirmed museum access and a selected collection route. Add Yellow Crane Tower when the walking and opening window work, with lunch and a break. If both would feel rushed, move the tower to an additional day rather than shorten the museum to a photo stop.",
      },
      {
        day: "Full day 2",
        title: "Breakfast and the trading-city streets of Hankou",
        description:
          "Try a few chosen breakfast dishes, then explore a manageable architectural route near Jianghan Road and the historic riverfront. Retain time for a seated meal and an afternoon rest. A local river sailing is an optional, separately confirmed activity.",
      },
      {
        day: "Optional extra full day",
        title: "Give East Lake its own time",
        description:
          "Choose one lake area for a shorter walk, garden interest or a separately arranged cycling outing. Match the route and pickup to the group and weather. This extra day needs an additional night or departure that genuinely leaves a full usable day.",
      },
      {
        day: "Departure",
        title: "Continue with the complete connection planned",
        description:
          "Allow the full transfer to the booked station or flight. Nanjing, Shanghai or Zhangjiajie each needs its own time and actual transport plan. This is an illustrative stay, not a published package or a promise that every optional visit is included.",
      },
    ],
  },
};
