import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xiangyang.svg",
  alt: "Original Xiangyang planning schematic comparing Xiangcheng old-city history, Gulongzhong and a separate Tangcheng entertainment visit, with hotel-bank choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const xiangyangGuide: ExpandedDestination = {
  id: "xiangyang",
  name: "Xiangyang",
  region: "central",
  kicker: "A Han River city where history and its retellings meet",
  description:
    "Explore Xiangyang's walled-city setting, Gulongzhong's Three Kingdoms associations and distinctive beef-noodle breakfasts, with Tangcheng and hotel areas clearly distinguished.",
  stay: "2–3 nights for one or two full days",
  bestFor: "City defenses, Three Kingdoms interpretation and regional food",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["nanyang", "wudang-mountains", "wuhan", "shiyan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xiangyang Travel Guide: History, Food & Stays",
    seoTitle: "Xiangyang Guide: Old City, Food & Stays",
    seoDescription:
      "Plan Xiangyang's old city and Gulongzhong, distinguish Tangcheng, compare Xiangcheng and Fancheng hotels, and choose two or three nights with Wudang links.",
    answer:
      "Xiangyang (襄阳), in northwestern Hubei, offers a rewarding city stay for travelers interested in defensive landscapes, Three Kingdoms stories and everyday food. The Han River separates Xiangcheng (襄城), with the main walled old-city setting, from Fancheng (樊城), a different urban and hotel area. Gulongzhong (古隆中), also written Ancient Longzhong, is a separate cultural-landscape visit associated with Zhuge Liang. Tangcheng (唐城) is a modern film and visitor complex, not a surviving Tang-dynasty city. Two nights give one full day; three allow the old city and a distinct outlying subject to receive proper attention.",
    stayAnswer:
      "Choose two nights for a selected old-city route, regional food and one carefully fitted additional subject. Three nights give two full days: a city-history day and a separate Gulongzhong or other clearly chosen interest. A Tangcheng evening can replace another activity rather than extend an already full day into exhaustion. One night is a selective stop with favorable transport, not a complete visit. Longer stays should have a specific purpose, such as deeper historical interests or time at a worthwhile hotel, rather than repeat similar street and wall walks.",
    hotelAnswer:
      "Begin with an actual Xiangcheng hotel when old-city walks and evenings near the historical area are central. Compare Fancheng for a particular room, restaurant choice or an itinerary that genuinely benefits from that side of the Han River. A Xiangyang East station-area stay serves a different arrival or departure brief. Check the full road to your chosen sights, river crossings, room quietness, bathroom, breakfast and pickup access. An old-town label does not guarantee a historic building, and a river-view room does not establish an easy walk to the old-city entrance.",
    sightseeingQuestion: "Should you choose the old city, Gulongzhong or Tangcheng?",
    sightseeingAnswer:
      "Choose the old city for the relationship between defenses, river and urban life, using the sections actually open to visitors. Choose Gulongzhong for Zhuge Liang and Three Kingdoms interpretation, with historical association, commemorative buildings and later storytelling distinguished. Choose Tangcheng for designed film scenery, photography or a specifically confirmed entertainment program. They answer different interests. Tangcheng is not an original Tang capital, and a Gulongzhong visit should not describe every structure as a surviving residence from Zhuge Liang's lifetime. With limited time, select the subject that interests you most rather than collect all three names.",
    visitorResources: [
      {
        label: "Xiangyang municipal government",
        href: "https://www.xiangyang.gov.cn/",
        scope:
          "City background and public notices. Confirm the specific wall section, museum location, Gulongzhong route, Tangcheng program and current visitor arrangements with the actual venue.",
      },
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check the dated train service and exact station. Xiangyang East and Xiangyang station are separate gateways; add the road to the actual hotel before choosing the arrival or departure.",
      },
    ],
    serviceScope:
      "A useful Xiangyang proposal should identify the actual city route, wall or museum access, outlying visit, room and guide language. Tell us whether military history, Three Kingdoms literature, breakfast culture or a modern entertainment evening matters most. Agree the walking and standing, meal timing and full vehicle hours. A performance, hosted meal or specialist historian requires a separate named arrangement. Private guiding can make the places and their evidence understandable; it does not make public paths exclusive or turn a commemorative building into an original ancient residence.",
    routeAdvice:
      "Wudang Mountain adds a different Daoist architectural landscape with its own full days, accommodation and remaining mountain steps. Wuhan adds major archaeological collections, Hankou neighborhoods and another distinctive breakfast culture. Shiyan city deserves time only for a named museum, industrial-history subject or useful arrival sequence. There is no matching published Xiangyang product recommended here. Share dates, gateways, room expectations and the historical subjects that interest you for a tailored itinerary showing the complete journeys and what each local day adds.",
    practicalPlanning: {
      timing:
        "Group the selected Xiangcheng old-city interests into one coherent route, with a meal and seated break. Give Gulongzhong its own substantial visiting window and the complete road transfer. If choosing Tangcheng, obtain the actual dated opening and program before scheduling an evening, then protect time for dinner and the return. A museum or wall access window should be confirmed before it becomes the reason for an overnight.",
      walking:
        "Distinguish a level neighborhood walk from wall stairs, uneven paving, museum standing and a longer landscaped Gulongzhong route. Ask which wall section is open and where you ascend and descend; an impressive perimeter on a map is not a continuous accessible visitor path. Tangcheng can also involve substantial walking and standing. Agree a shorter worthwhile route, seating and pickup points rather than infer ease from a flat-looking city photograph.",
      cost: "Compare actual rooms and river-view categories, full road and guide hours, named admissions, meals and any separately ticketed entertainment. A Tangcheng entrance, a particular performance, transport and photography service are different items. For a premium stay, establish what improves the trip: a quiet room, good interpretation, comfortable transfers and enough time. A higher rate does not secure an empty old city, unrestricted wall access or entry to closed heritage buildings.",
    },
    attractions: [
      "Xiangcheng / 襄城 old-city streets and selected public historical areas",
      "A specifically open Xiangyang city-wall / 襄阳城墙 section",
      "Gulongzhong / 古隆中 for Zhuge Liang and Three Kingdoms interpretation",
      "A named Xiangyang museum visit with the current venue and exhibitions confirmed",
      "Tangcheng / 唐城 as a modern film and visitor complex, when that experience is wanted",
      "A selected Han River walk and a breakfast introducing Xiangyang beef noodles",
    ],
    stays: [
      {
        label: "1 night / a selective city stop",
        advice:
          "Useful only when the complete arrival and departure leave time for one main subject and a meal. Do not promise the old city, Gulongzhong, a museum and a long entertainment evening around a short overnight.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Give the city a coherent historical introduction and a regional breakfast. Add an outlying subject only if actual visiting time, roads and energy allow; two nights are not two full days.",
      },
      {
        label: "3 nights / two different days",
        advice:
          "Separate old-city history from Gulongzhong or another chosen subject. A modern Tangcheng evening can fit when wanted, with enough rest and current program confirmation. Leave space for the room and a proper meal rather than add another attraction automatically.",
      },
    ],
    hotelAreas: [
      {
        name: "Xiangcheng: prioritize the old-city setting",
        advice:
          "A starting point for guests who want historical walks and nearby evenings. Check the actual block, traffic noise, vehicle pickup and distance to the chosen route. A hotel described as old-town style may be a modern building and may have very different access from a room inside a pedestrian lane.",
      },
      {
        name: "Fancheng: compare the exact room and daily crossings",
        advice:
          "Can work for a chosen property, dining or plans on that side of the Han River. Compare the actual crossings and return after dinner before choosing it for a Xiangcheng-led visit. Being beside the same river does not make two hotels equally convenient for the old city.",
      },
      {
        name: "Xiangyang East approach: a specific rail brief",
        advice:
          "Consider only when the correct train and an early or late travel sequence justify it. Check the real station-to-room luggage route, meals and onward transfer. Near Xiangyang East is not the same as near Xiangyang station or near the walled old city.",
      },
    ],
    tradeoffs: [
      {
        title: "Defensive history is more than a wall photograph",
        advice:
          "Use the river, gates, street pattern and visible masonry to explain the city's strategic setting. Distinguish surviving fabric, restoration and later commemoration through the evidence available at the actual site. A historical siege story does not make every section of wall the same age or every gate open to visitors.",
      },
      {
        title: "Three Kingdoms history and literary retelling need their own labels",
        advice:
          "Gulongzhong provides a way into Zhuge Liang's associations with the region. Explain the difference between historical accounts, later literature and the present commemorative landscape. Historical associations are richer when clearly explained; there is no need to claim a reconstructed interior is an untouched room from the third century.",
      },
      {
        title: "Tangcheng can be enjoyable when sold as the experience it is",
        advice:
          "Choose its designed settings and confirmed visitor program for photography or entertainment. It is not a substitute for the historical old city. Ask about the dated program, walk, seating and return; costumes, a photographer and a particular performance are included only when expressly agreed.",
      },
      {
        title: "A good breakfast deserves time in the schedule",
        advice:
          "Choose an actual noodle shop with suitable seating and kitchen capability instead of inserting a rushed tasting after a full hotel breakfast. Clarify broth, chili, wheat and portions. Guests who prefer a milder meal or do not eat beef should have a worthwhile alternative.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "nanyang",
        advice:
          "Nanyang offers Han stone-relief interpretation and its own Wuhou commemorative tradition. Explain the historical geography, evidence and later memory in both places rather than claim a visitor building resolves every Zhuge Liang question. Compare dated transport, actual rooms and useful days before combining the cities.",
      },
      {
        slug: "wudang-mountains",
        advice:
          "Pair a Han River historical city with Daoist architecture and mountain scenery. Check the dated train and both hotel transfers, then give Wudang its own useful nights. The mountain's scenic buses, cableway and remaining steps need separate assessment from the Xiangyang city walk.",
      },
      {
        slug: "wuhan",
        advice:
          "Wuhan adds Hubei Provincial Museum, Hankou river-trade history and a contrasting breakfast culture. Allow proper city days and compare the correct station pair. Shared Hubei geography does not turn the two cities into one local sightseeing base.",
      },
      {
        slug: "shiyan",
        advice:
          "Add Shiyan city only when its collections, automotive-history interest or arrival sequence justify the time. If Wudang is the purpose, compare going directly to a mountain base. A rail connection is not a city visit, and a cultural tour does not include a factory appointment.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for city walking and an outdoor Gulongzhong visit. Summer can be hot and humid, so combine early walks, shade, seated meals and indoor time. Winter needs warm clothing for exposed wall and river sections. Current venue openings and Chinese public holidays matter as much as the season. A peony display, performance or other dated event should be included only after checking the actual program, not assumed from an attractive seasonal image.",
    orientation:
      "Xiangcheng lies south of the Han River and contains the principal walled old-city setting; Fancheng is on the other side. Gulongzhong is outside the old-city walking circuit, while Tangcheng is a different modern visitor destination. Xiangyang East / 襄阳东 and Xiangyang / 襄阳 stations are separate gateways; Xiangyang Liuji Airport is another transfer. The historical name Xiangfan (襄樊) may appear in older material. Use current Chinese addresses rather than treating old and modern labels as separate destinations.",
    experiences: [
      "Read Xiangyang's river-and-defense setting through a selected old-city and open wall route",
      "Explore Gulongzhong with Zhuge Liang's historical associations distinguished from later literature and commemoration",
      "Taste a carefully chosen beef-noodle breakfast and leave a modern Tangcheng visit as a separate interest-led choice",
    ],
    planningNotes: [
      "Choose Xiangcheng or Fancheng using the full daily route and actual room rather than the city name alone",
      "Keep the historical old city, Gulongzhong and modern Tangcheng distinct in the itinerary",
      "Confirm the correct station, museum venue, wall access and any dated entertainment before fixing the day order",
    ],
    arrival:
      "Use the ticketed station or airport to calculate the full transfer to the selected hotel. Xiangyang East and Xiangyang station serve different arrival locations; neither name identifies the final old-city pickup. A Wudang extension needs the dated onward service and both road legs. Keep an uncertain arrival away from the essential museum window or an inflexible performance time, and protect a proper local day if the city is an important interest.",
    gettingAround:
      "A thoughtful route groups old-city subjects, then uses a separate transfer for Gulongzhong or another outlying visit. River crossings and hotel location can change the order. A vehicle helps between areas but cannot follow every pedestrian lane or remove wall steps and venue standing. Identify actual pickup points and a manageable end to the walk. For an evening program, agree dinner, exit and the return journey rather than assume a daytime vehicle booking covers a late finish.",
    stayStrategy:
      "Two nights give one full day; three allow the old city and an outlying historical subject to receive different days. Compare the exact room's quietness, bathroom, temperature control and dinner options, particularly if the stay follows a mountain visit. A river-view upgrade is useful only when the view and time in the room matter. A clear historical theme and comfortable pacing can make a premium city stay more valuable than simply booking the most expensive room.",
    firstTimerNote:
      "Decide which story interests you: the strategic river city, Zhuge Liang and Three Kingdoms traditions, everyday food or designed film scenery. Then choose the actual places that support it. Xiangyang is easier to understand when these experiences are connected thoughtfully rather than all described as an ancient town tour.",
    faqs: [
      {
        question: "Is Xiangyang worth visiting for foreign travelers?",
        answer:
          "It can be rewarding for travelers interested in historical defenses, Three Kingdoms interpretation and a regional city beyond China's classic first-trip circuit. Allow useful local time and a guide who makes the context clear. On a short trip without those interests, compare it with the extra transport and the destination time you would remove.",
      },
      {
        question: "How many nights should I spend in Xiangyang?",
        answer:
          "Two nights give one full day for a selective introduction. Three give two days to separate old-city history from Gulongzhong or another chosen subject. One night needs favorable transport and a narrow focus. Arrival and departure hours determine the useful time, not the night count alone.",
      },
      {
        question: "Should I stay in Xiangcheng or Fancheng?",
        answer:
          "Start with Xiangcheng for a visit centered on the main walled old-city setting. Compare Fancheng for a specific hotel, dining or interests on that side of the Han River. Check actual river crossings, room comfort and pickup. A shared river-view label does not make the locations equivalent.",
      },
      {
        question: "Is Tangcheng an original Tang-dynasty city?",
        answer:
          "No. Tangcheng is a modern film and visitor complex with designed historical settings. It can suit photography or an actual entertainment program, but should be distinguished from Xiangyang's historical old-city fabric. Confirm any performance, costumes or photography service separately.",
      },
      {
        question: "What is Gulongzhong, and why visit?",
        answer:
          "Gulongzhong, or Ancient Longzhong, is a cultural landscape associated with Zhuge Liang and Three Kingdoms traditions. Visit for interpretation of those associations and later commemoration. Do not expect every present building to be an original structure from Zhuge Liang's lifetime; choose the visit when the subject interests you.",
      },
      {
        question: "Are Xiangyang East and Xiangyang station the same place?",
        answer:
          "No. Xiangyang East / 襄阳东 and Xiangyang / 襄阳 are different stations. Use the ticketed service and the whole road to the actual hotel to compare options. An old-city visit during a connection needs sufficient time for both transfers, luggage and the return, not just a gap between trains.",
      },
      {
        question: "Can I combine Xiangyang and Wudang Mountain?",
        answer:
          "Yes when dated transport and useful days support both. Xiangyang adds city defenses, Three Kingdoms interpretation and food; Wudang adds Daoist architecture and a separate mountain route. Give the mountain its own accommodation and assess scenic transport, remaining stairs and walking rather than use a city hotel for every day.",
      },
      {
        question: "What should I try for breakfast in Xiangyang?",
        answer:
          "Xiangyang beef noodles are a useful local introduction, with broth, beef and chili preparations varying by shop. Ask about wheat, soy, stock, spice and portions. Huangjiu may accompany local breakfasts, but it is alcoholic and optional; tea or water and a suitable alternative meal should be available for guests who prefer them.",
      },
    ],
    culturalStory: {
      title: "A strategic city, a historical figure and their later stories",
      paragraphs: [
        "The Han River helps explain Xiangyang's strategic role. Read the relationship between the city, defenses and river before treating a gate as an isolated photo stop. The visible landscape includes layers of survival, repair and later change. A good explanation identifies the evidence available at the particular place rather than assigning every brick to a famous siege or describing the whole urban area as unchanged since antiquity.",
        "Gulongzhong introduces Zhuge Liang through historical association and later cultural memory, including the influence of Three Kingdoms literature. These layers deserve clear labels. Tangcheng offers another kind of retelling through modern film scenery and visitor entertainment. Distinguishing them does not diminish the experience: it lets guests choose whether they want historical inquiry, commemorative landscape or a designed evening setting, and understand what they are seeing.",
      ],
    },
    foodStory: {
      title: "Give beef noodles a real breakfast window",
      paragraphs: [
        "A Xiangyang beef-noodle breakfast works best as a proper meal rather than a hurried bowl added after the hotel buffet. Choose an actual shop for seating, preparation and the group's preferred spice level. Discuss the broth, beef, noodle type and bowl size, and order a manageable amount before adding other dishes. Local breakfast habits may include huangjiu; explain that it contains alcohol rather than present it as a compulsory soft drink or a required part of the tasting.",
        "Wheat, soy, beef, meat stock and chili are relevant ingredients to discuss, and a meat-free topping does not establish vegetarian broth. Serious allergies need an actual kitchen assessment and a useful alternative. For lunch or dinner, balance regional preparations with vegetables and suitable staples, using the kitchen's strengths. A hosted tasting or cooking session requires a separate arrangement; ordinary restaurant assistance should not be described as a private culinary encounter.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / night 1",
        title: "Settle on the right side of the river",
        description:
          "Complete the actual station or airport transfer and enjoy dinner near the selected base. Add a manageable old-city or river walk only when arrival hours allow. Confirm the next day's wall or museum route and breakfast plan.",
      },
      {
        day: "Full day 1 / night 2",
        title: "Understand the old city through defenses and everyday life",
        description:
          "Begin with a suitable beef-noodle breakfast or an agreed alternative. Follow the selected old-city and open wall route, with interpretation, seated breaks and a proper meal. Add a named museum only when its current venue and opening fit; do not assume every collection is in the same walking circuit.",
      },
      {
        day: "Optional full day 2 / night 3",
        title: "Choose the historical or entertainment subject you actually want",
        description:
          "Give Gulongzhong a thoughtful visiting window when Zhuge Liang and Three Kingdoms traditions appeal. A Tangcheng program is a separate optional interest with its own dated arrangements, dinner and return. It can replace other activity rather than make a supposedly relaxed day longer.",
      },
      {
        day: "Departure",
        title: "Continue to a separate Wudang or Wuhan chapter",
        description:
          "Use the correct station and full onward transfer. Wudang's mountain itinerary and Wuhan's city stay each need their own useful days. This illustrative two- or three-night outline is not a published package and does not guarantee wall sections, exhibitions, performances, private access or hotel rooms.",
      },
    ],
  },
};
