import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jingzhou.svg",
  alt: "Original Jingzhou planning schematic comparing the old city, archaeological collections and a separate Xiongjiazhong chariot-pit visit, with old-city or Shashi stays; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const jingzhouGuide: ExpandedDestination = {
  id: "jingzhou",
  name: "Jingzhou",
  region: "central",
  kicker: "Look beyond the Three Kingdoms story to the objects beneath it",
  description:
    "Plan Jingzhou for a walled-city setting, Chu and Han archaeology and regional food, with the museum, Xiongjiazhong chariot pits and Shashi hotel choices explained.",
  stay: "2–3 nights for one or two full days",
  bestFor: "Archaeology, city defenses and a deeper middle-Yangtze journey",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["yichang", "wuhan", "xiangyang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jingzhou Travel Guide: Museum, Walls & Stays",
    seoTitle: "Jingzhou Guide: Museum, Walls & Stays",
    seoDescription:
      "Plan Jingzhou's museum and old city, compare Chu chariot-pit visits and Shashi hotels, and choose two or three nights with a separate Yichang connection.",
    answer:
      "Jingzhou (荆州), in Hubei's middle-Yangtze region, is worth considering for archaeology and a walled-city landscape that add depth to a river journey. Start with the old city and Jingzhou Museum, where the current collections can introduce Chu culture and Han-period life. The Xiongjiazhong site (熊家冢), marketed as the Chu King's Chariot and Horse Array / 楚王车马阵, is a separate outlying archaeological visit. Two nights give one full day; three allow city and museum interests to be separated from a deeper archaeological excursion. Shashi (沙市) is another urban area and hotel choice, not another name for the old-city gate. A Yangtze cruise booking does not automatically include Jingzhou.",
    stayAnswer:
      "Choose two nights for a selected museum route, old-city context and a thoughtful meal. Three nights give two full days and can support a separate Xiongjiazhong visit when archaeology genuinely interests you. One night needs favorable arrival and departure hours and a narrow focus. A day excursion can work when an existing base and the actual trains leave useful time, but should be compared with a settled overnight. Extra nights need another distinct subject or a worthwhile hotel experience, not repeated wall and gate photographs.",
    hotelAnswer:
      "Start with a specific old-city-area property when museum and historical walks are central. Compare a Shashi hotel for its actual room, restaurants and a plan that benefits from that part of the city. A Jingzhou station-area room serves a different rail brief. Check the complete roads to the museum, chosen wall entrance and any archaeological site, alongside room quietness, bathroom, breakfast and pickup. Old-city style does not establish a heritage building, and river view does not put a hotel beside the main historical sights.",
    sightseeingQuestion:
      "Jingzhou Museum, the city wall or the Chu chariot pits: what should come first?",
    sightseeingAnswer:
      "Start with the museum if you want archaeological objects and an introduction to Chu and Han history; check the actual exhibitions and allow time for interpretation. Add a selected old-city and open wall route to understand defenses and urban geography. Choose Xiongjiazhong for the scale and setting of an elite Chu burial landscape and its chariot-and-horse pits, with a separate road journey. The tourism name Chu King's Chariot and Horse Array is not proof that the tomb's occupant has been conclusively identified as a particular king. One full day calls for selection, not a promise to cover all three comprehensively.",
    visitorResources: [
      {
        label: "Jingzhou municipal government",
        href: "https://www.jingzhou.gov.cn/",
        scope:
          "City background and public information. Confirm the current museum venue, exhibitions, wall sections and archaeological visitor arrangements with each actual venue before fixing the day.",
      },
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check the dated service and exact station. Add both hotel transfers before comparing a Jingzhou stop with a through journey to Yichang or Wuhan.",
      },
    ],
    serviceScope:
      "A useful Jingzhou proposal should identify the actual museum route, open wall section, archaeological excursion if selected, room and complete vehicle hours. Share whether your interest is Chu material culture, Han daily life, defensive history or Three Kingdoms storytelling. Those are related but different subjects, and a general introduction should not be sold as a specialist archaeological study. A curator meeting, research-area visit or private collection access needs its own named arrangement. Normal museum rules, public paths and current opening conditions still apply with a private guide.",
    routeAdvice:
      "Yichang adds a distinct river and engineering chapter, with a dam visit, defined boat outing or separately booked multi-night cruise. Wuhan adds broader Hubei collections and river-city neighborhoods. Xiangyang provides another defensive city and a different Three Kingdoms-related landscape. There is no matching published Jingzhou product recommended here. Share dates, gateways, walking preferences and the subjects that interest you so a tailored proposal can show why each stop deserves time and how the complete hotel-to-hotel journey works.",
    practicalPlanning: {
      timing:
        "Confirm the museum opening and desired exhibitions first, then fit the old-city route around a proper meal and breaks. Give Xiongjiazhong its own substantial window with the complete road transfer. Avoid placing the essential museum visit against an uncertain arrival or a fixed ship collection. If continuing to a Yichang cruise, use the booked collection and actual pier instructions rather than assume the river journey starts in central Jingzhou.",
      walking:
        "Museum standing, wall stairs, old-city paving and an archaeological visitor route have different demands. Identify the exact wall ascent and descent, remaining steps and a worthwhile shorter option. An impressive perimeter is not a promise of a continuously open accessible circuit. At the archaeological site, ask about the actual approach, viewing paths, seating and weather exposure. A private vehicle reduces travel between places, not every step within them.",
      cost: "Compare the actual room, guide expertise, full road hours, named admissions, museum interpretation and meals. An archaeological excursion, specialist session and ordinary city walk should be scoped separately. A premium quote should demonstrate a quiet room, clear explanations and comfortable pacing; it does not establish private museum opening, permission to enter burial chambers or access to closed excavation areas. Any transfer to a cruise is a separate complete journey to the booked meeting point.",
    },
    attractions: [
      "Jingzhou Museum / 荆州博物馆, with current Chu and Han collections confirmed",
      "Jingzhou old city / 荆州古城 and a specifically open city-wall section",
      "Xiongjiazhong / 熊家冢, also marketed as Chu King's Chariot and Horse Array / 楚王车马阵",
      "A selected gate-and-moat route explaining the city’s defensive setting",
      "A defined Shashi / 沙市 neighborhood or riverside interest when it fits the route",
      "A regional meal introducing Jingzhou-style fish cake with ingredients explained",
    ],
    stays: [
      {
        label: "1 night / a focused introduction",
        advice:
          "Choose one main subject and a manageable meal or walk within real arrival and departure hours. Keep expectations selective. A brief overnight is not a full archaeological and Three Kingdoms survey.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Pair a thoughtfully chosen museum visit with selected old-city context, breaks and regional food. Add another subject only when it contributes something distinct and the actual day has room.",
      },
      {
        label: "3 nights / two separate days",
        advice:
          "Allow the museum and city to retain their own pace, then make an outlying archaeological interest a separate day when wanted. Extra time can also support a deeper collection visit rather than another long excursion for guests with different interests.",
      },
    ],
    hotelAreas: [
      {
        name: "Old-city surroundings: museum and historical focus",
        advice:
          "Choose the actual address for the selected museum and wall route. Check pickup, quiet, bathroom and dinner options. A property inside a pedestrian or heritage-style area may involve a longer final luggage approach, while a nearby modern room can be more comfortable for the same visits.",
      },
      {
        name: "Shashi: compare the actual property and daily roads",
        advice:
          "Can suit a particular hotel, restaurant plan or urban interest in that area. Calculate the complete return to the old city before booking for a heritage-led stay. A riverfront label describes a setting, not equal proximity to every attraction.",
      },
      {
        name: "Jingzhou railway-station approach: a specific travel sequence",
        advice:
          "Consider when the correct train and real timing justify the location. Check the full room-to-terminal route, breakfast, dinner and sightseeing transfer. A station room can be practical, but should not replace a better city evening solely because it looks closer on a booking map.",
      },
    ],
    tradeoffs: [
      {
        title: "Chu, Han and Three Kingdoms are different historical chapters",
        advice:
          "Chu material culture predates the Han period, while Three Kingdoms history and its later literary retellings add another layer. Use the dates and provenance of actual objects rather than combine every exhibit under a single Three Kingdoms label. This makes a museum visit understandable even for guests who have never read the novel.",
      },
      {
        title: "The chariot-pit attraction is not an open royal burial chamber",
        advice:
          "Xiongjiazhong offers a specific archaeological landscape and visitor display. Explain what is excavated, what is visible and what remains an interpretation. Do not promise entry into a tomb chamber, direct contact with objects or a securely named royal occupant because of the attraction's promotional English name.",
      },
      {
        title: "A wall route should explain the city, not exhaust the guest",
        advice:
          "Choose a section that shows the relationship between gate, defenses, moat and present city, with its history and restoration explained. A complete perimeter walk is not required to understand the place. Assess steps, shade and a sensible finish rather than treating maximum distance as a better-value tour.",
      },
      {
        title: "A cruise connection is not automatically a Jingzhou excursion",
        advice:
          "The ship's actual dated program governs its shore visits and collection. A Yangtze name on a product does not establish Jingzhou inclusion. If adding the city independently, compare both road or rail legs, luggage and the real embarkation deadline, with a separate useful stay where needed.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yichang",
        advice:
          "Pair Jingzhou's collections and city defenses with a different engineering or river subject in Yichang. Use the actual train and both road transfers. A separately booked cruise needs its own collection point, pier and deadline; reaching Yichang station is not the same as boarding the ship.",
      },
      {
        slug: "wuhan",
        advice:
          "Wuhan adds Hubei Provincial Museum, river-trade history and breakfast culture. Compare what the two museum visits contribute rather than duplicate a broad archaeology introduction. Allow useful city time and the correct station-to-hotel transfers at both ends.",
      },
      {
        slug: "xiangyang",
        advice:
          "Xiangyang adds a Han River defensive setting and Gulongzhong's Zhuge Liang associations. Give the full connection and each city proper time. Distinguish Jingzhou's Chu and Han collections from later Three Kingdoms interpretation instead of marketing both as identical ancient-city stops.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for museum and city walks. Summer can be hot and humid, so place exposed wall sections early and protect indoor time and a seated midday break. Winter needs layers for wind and damp conditions outdoors. Current museum opening, holiday demand and archaeological visitor arrangements matter more than a generic best-season label for a short stay. Check the actual dates before booking around one essential exhibition.",
    orientation:
      "The main walled old-city setting, Jingzhou Museum, the broader Shashi urban area and Xiongjiazhong outside the city are distinct planning places. A current museum address and exhibition should be confirmed rather than inferred from an old map or guidebook. Historical Jingzhou can also refer to a much wider region in texts; it is not identical to the boundaries of today's city. Use actual Chinese addresses and the dated train to build a realistic daily route.",
    experiences: [
      "Explore selected Chu and Han material through current museum objects, with dates and provenance explained",
      "Read the old city's defensive setting through a manageable gate, moat and open wall route",
      "Choose a separate Xiongjiazhong archaeological visit when the chariot-and-horse pits add a subject you genuinely want to understand",
    ],
    planningNotes: [
      "Keep Chu archaeology, Han daily life and Three Kingdoms retellings distinct rather than assign all objects one historical label",
      "Confirm the actual museum, open wall section and Xiongjiazhong visitor route before fixing the day order",
      "Choose old-city or Shashi accommodation from the full itinerary, and scope any cruise connection independently",
    ],
    arrival:
      "Compare the dated train to Jingzhou railway station or an operating flight to Jingzhou Shashi Airport through the full transfer to the selected room. An airport in the wider municipality does not imply a short old-city drive. For a Yichang or Wuhan connection, add both hotel roads and luggage handling. Keep an essential museum window separate from an uncertain arrival and avoid turning a brief rail stop into an assumed full city tour.",
    gettingAround:
      "Group selected old-city and museum interests, then plan an outlying archaeological visit separately. A private vehicle helps with luggage and scattered places, while pedestrian approaches, wall steps and museum standing remain. Identify the guide's route, pickup and shorter alternatives. If the visit ends at another city's hotel or a cruise collection, specify that full road leg rather than assume a standard local vehicle day covers it.",
    stayStrategy:
      "Two nights give one full day for a selective museum-and-city introduction. Three can separate that chapter from a serious archaeological excursion or allow a slower collection visit. Compare actual old-city and Shashi rooms through quiet, bathroom, temperature control, meals and roads. A premium stay earns its value through interpretation and comfortable pacing, not a claim of exclusive access to public heritage sites.",
    firstTimerNote:
      "Begin with what interests you: objects and ancient life, the defensive city, or a specific archaeological landscape. The places become easier to understand when their chronology and evidence are clear. A famous Three Kingdoms connection can introduce the city, but should not obscure the much earlier Chu and Han subjects that may be the strongest reason to visit.",
    faqs: [
      {
        question: "Is Jingzhou worth visiting for foreign travelers?",
        answer:
          "It can be rewarding for travelers interested in archaeology, historical city defenses and a deeper middle-Yangtze route. It is especially useful when a thoughtful museum visit and selected old-city walk appeal. On a short first China trip without those interests, compare the complete detour with the time you would lose elsewhere.",
      },
      {
        question: "How many nights do I need in Jingzhou?",
        answer:
          "Two nights provide one full day for a selected museum and old-city introduction. Three give two days and can support a separate Xiongjiazhong visit or deeper collection time. One night needs favorable transport and a narrow focus. Count full visiting days separately from arrival and departure.",
      },
      {
        question: "Should I stay near Jingzhou old city or in Shashi?",
        answer:
          "Start with an actual old-city-area room for a museum-and-history-led visit. Compare Shashi when a particular property, meal plan or urban interest justifies its daily roads. Check quiet, bathroom, pickup and the exact attraction entrances. Neither an old-town label nor a river view establishes the best location by itself.",
      },
      {
        question: "What is the Chu King's Chariot and Horse Array?",
        answer:
          "It is a tourism name associated with the Xiongjiazhong archaeological site and its chariot-and-horse pits outside the city. The display and the wider burial landscape need their own visiting route. The name does not by itself prove a particular king's identity or establish access inside a royal tomb chamber.",
      },
      {
        question: "Is Jingzhou Museum only about the Three Kingdoms?",
        answer:
          "No. Chu and Han archaeology provides important earlier subjects, alongside other material in the actual exhibition program. Ask for a selected route with chronology and object provenance explained. Current displays determine what can be seen; a famous collection item should not be promised without checking its exhibition status.",
      },
      {
        question: "Can I walk around the whole Jingzhou city wall?",
        answer:
          "Do not assume the full perimeter is a continuously open visitor route. Choose the actual open section, entrance, ascent and descent with current rules confirmed. A shorter gate, moat and wall visit can explain the city well while avoiding unnecessary stairs, exposure and repeated views.",
      },
      {
        question: "Is Jingzhou included in a Yangtze cruise from Yichang?",
        answer:
          "Only when the specific booked cruise program expressly includes it. An independent Jingzhou visit needs its own road or rail sequence, luggage plan and time before the actual cruise collection or pier. A shared Yangtze setting is not evidence that an existing itinerary includes the city.",
      },
      {
        question: "What local food should I try in Jingzhou?",
        answer:
          "Jingzhou-style fish cake can introduce a regional preparation, with the actual kitchen's recipe explained. Ask about fish, possible pork, egg, starch, bones and shared equipment; it should not be assumed vegetarian, pork-free or suitable for a fish allergy. Balance it with vegetables and suitable staples rather than make every dish a fish specialty.",
      },
    ],
    culturalStory: {
      title: "Use objects to separate three different historical layers",
      paragraphs: [
        "Chu material culture gives visitors a way into a major regional tradition before the imperial Han period. At a museum, lacquer, burial objects and other displayed material should be read through the actual label, provenance and current interpretation. Han-period objects answer different questions about daily life, belief and burial. An original, a cast and a reconstructed scene contribute in different ways; identifying which is which makes the visit more useful rather than less impressive.",
        "Three Kingdoms history and later literature provide another route into Jingzhou's cultural memory. They should not replace the earlier chronology or turn every visible defense into a third-century structure. At Xiongjiazhong, the scale of the archaeological setting can raise questions about elite status and burial practice without claiming certainty about a named occupant. A thoughtful visit connects visible evidence and interpretation while leaving genuine uncertainty clear.",
      ],
    },
    foodStory: {
      title: "Fish cake is a preparation to understand, not an ingredient guarantee",
      paragraphs: [
        "Jingzhou-style fish cake introduces a different texture and preparation from a whole fish brought to the table. Ask how the actual kitchen combines fish with other ingredients and how the dish is served. Recipes may involve pork, egg or starch, so a fish name alone does not establish what is in it. Order a suitable portion as part of a balanced meal with vegetables and staples, and give guests who prefer something simpler a proper alternative.",
        "Discuss fish allergies, pork, egg, soy, wheat, stock and shared equipment before ordering. A vegetable dish may contain animal ingredients, and a regional specialty label is not evidence of dietary suitability. Plan the meal near the real museum or road route rather than add another lengthy transfer for a famous dish. A hosted tasting, cooking lesson or producer visit needs its own confirmed arrangement and should not be implied by ordinary restaurant assistance.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / night 1",
        title: "Settle near the interests you have chosen",
        description:
          "Complete the actual station or airport transfer and enjoy a suitable meal. A short old-city or local walk is optional when arrival and energy allow. Confirm the museum venue, opening, route and next day's pace.",
      },
      {
        day: "Full day 1 / night 2",
        title: "Connect archaeological objects with the defensive city",
        description:
          "Give the selected museum collection a meaningful visit, then follow a manageable old-city, gate or open wall route with lunch and breaks. Explain the different historical layers. The actual order follows museum hours, weather and confirmed access, not an assumption that every section stays open all day.",
      },
      {
        day: "Optional full day 2 / night 3",
        title: "Go deeper into a specific archaeological subject",
        description:
          "Choose Xiongjiazhong when its chariot-and-horse pits and burial landscape genuinely interest the group, with full road and visitor paths assessed. Alternatively use the time for a deeper confirmed collection or distinct local interest. Do not promise a tomb chamber, curator appointment or active excavation access.",
      },
      {
        day: "Departure",
        title: "Continue with the river connection clearly scoped",
        description:
          "Transfer to the actual station or next hotel. Any Yichang cruise has its own collection point, pier and dated program. This illustrative two- or three-night outline is not a published package and does not guarantee exhibitions, wall sections, private access or rooms.",
      },
    ],
  },
};
