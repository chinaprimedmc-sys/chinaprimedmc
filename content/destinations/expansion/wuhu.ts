import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wuhu.svg",
  alt: "Original Wuhu planning schematic comparing river-port history, iron painting, city stays and separate family theme-park days; not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const wuhuGuide: ExpandedDestination = {
  id: "wuhu",
  name: "Wuhu",
  region: "east",
  kicker: "A Yangtze trading city where iron becomes a picture",
  description:
    "Discover Wuhu through river-port history, iron painting and shrimp-roe noodles, with practical advice on old-town visits, hotel areas and onward travel through Anhui.",
  stay: "1–2 nights for a selective city visit; longer for a separate family park day",
  bestFor: "Craft curiosity, Yangtze city life and a less familiar Anhui stop",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["nanjing", "xuancheng", "huangshan", "hefei", "anqing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Wuhu Travel Guide: Iron Painting, Old Town & Where to Stay",
    seoTitle: "Wuhu Travel Guide: Iron Painting, Old Town & Hotels",
    seoDescription:
      "Is Wuhu worth visiting? Explore iron painting, river-port history and shrimp-roe noodles. Compare old-town and hotel areas, nights and an onward Anhui route.",
    answer:
      "Wuhu (芜湖) is a Yangtze River city in Anhui, east China. It rewards travelers interested in a working city's trading history, Wuhu iron painting and local food rather than a checklist of major national monuments. Start with the relationship between the Qingyi River and the Yangtze, then combine a selective old-town walk with a relevant collection or an arranged craft conversation. One useful night can give a short introduction; two nights allow a full day with less rushing. Wuhu is a separate destination from Wuhan in Hubei, and its city center is not a base at the entrance to Huangshan mountain.",
    stayAnswer:
      "A day visit can work from a suitable starting point when it leaves time for one cultural focus and a meal after both station transfers. One night adds an evening and a useful morning; two nights give a full day for the old-city setting, a collection and a confirmed iron-painting interest. Add a further night if a family wants a separate theme-park day. Do not count an evening arrival and early departure as a substantive visit, or make an artisan appointment a last-minute stop before a train.",
    hotelAnswer:
      "For a short cultural visit, compare the Jinghu and Zhongshan Road pedestrian-area surroundings with a specific central riverside property. Pin the room against the chosen visits and dinner, not just the district name. Chengdong, the eastern city around the municipal and museum area, offers a different base, while a park-oriented or station hotel serves a particular logistical need. Check the actual room view, noise, bathroom, climate control, breakfast and vehicle access. A Yangtze-facing address does not automatically provide a quiet room or direct access to a waterside path.",
    sightseeingQuestion: "Is Wuhu Ancient Town the same as Jiuzi Ancient Town?",
    sightseeingAnswer:
      "No. Wuhu Ancient Town (芜湖古城) refers to the central historic-area visitor precinct, where restoration, reconstruction and present-day commercial use need to be distinguished. Jiuzi Ancient Town (鸠兹古镇) is a separate tourism development drawing on traditional architectural styles; Jiuzi is also a historical name associated with Wuhu. Neither name means that every visible building is an untouched old structure. Choose one for the actual architecture, interpretation, atmosphere and dated program, rather than visiting both on the assumption that they are equivalent surviving ancient towns.",
    visitorResources: [
      {
        label: "Wuhu municipal government",
        href: "https://www.wuhu.gov.cn/",
        scope:
          "Reference entry point for municipal background and public notices, mainly in Chinese. Check the responsible venue separately for museum reservations, public routes, craft displays and dated visitor arrangements. This link does not establish current access to a workshop or an evening program.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Compare dated services and the exact station, including Wuhu or Wuhu South when appropriate. Wuhu Xuanzhou Airport is a different gateway. Count the full hotel-to-station journey, boarding and transfers at both ends rather than compare train time alone.",
      },
    ],
    serviceScope:
      "A tailored Wuhu proposal should name the chosen precinct, museum or collection, guide language, transport hours, admissions and meal basis. For iron painting, distinguish viewing finished pieces, seeing a demonstration, meeting a maker and doing a supervised activity. These are separate arrangements with different access and safety requirements. Ask who will explain the process and which work is actually happening. Public heritage, a private car and an artisan's name do not imply a private workshop, specialist appointment or guaranteed making session.",
    routeAdvice:
      "Tell us where you are arriving from, your available nights and whether iron painting, port history, food or a family park day is the main reason to stop. We can compare a short city stay with a longer Anhui route through Xuancheng or Huangshan, or capital history in Nanjing. No matching published Wuhu itinerary is currently listed here. Request a tailored plan that names the visits, interpretation, room, complete transfers and any separately confirmed host, rather than adding unrelated sightseeing to justify more nights.",
    practicalPlanning: {
      timing:
        "Plan one main cultural subject in each half-day and leave a seated lunch between outdoor walking and a collection. Check museum opening and reservation arrangements before fixing rail tickets. A riverfront visit depends on weather and permitted public access, while a craft appointment needs its own agreed window. A theme park is a distinct family day, not an evening add-on to an already full history itinerary.",
      walking:
        "A city visit can be paced more gently than a mountain route, but pedestrian streets, old precinct surfaces, thresholds, museum standing and the last walk from a vehicle still matter. Ask for seats, toilets, shade and a shorter option. Riverside exposure can be uncomfortable in heat, wind or rain. Zheshan's hill paths and any wider-region scenic outing need separate assessment; a private vehicle cannot establish step-free access inside a site.",
      cost: "Compare the same room category, guide hours, full transfers, admissions and meal basis. A craft conversation, demonstration and participatory session should each be priced and described accurately. Any artwork purchase, packing and shipping are separate decisions. A premium visit earns its value through clear interpretation, a relevant host when confirmed, comfortable pacing and sleep, rather than a vague promise of exclusive access.",
    },
    attractions: [
      "Wuhu Ancient Town / 芜湖古城, with restoration and current use explained",
      "Selected permitted public riverfront sections and the Qingyi–Yangtze trading context",
      "Wuhu Museum / 芜湖市博物馆, when its current collections and visitor arrangements fit",
      "Wuhu iron painting / 芜湖铁画, through a relevant collection or separately confirmed host",
      "Zheshan Park / 赭山公园, with a route matched to walking ability",
      "Jiuzi Ancient Town / 鸠兹古镇 or a named Fantawild park as separate, purpose-led choices",
    ],
    stays: [
      {
        label: "Day visit / one subject and a proper meal",
        advice:
          "Choose a public city walk and a collection or confirmed craft focus, keeping the station journey realistic. If the desired maker or exhibition is unavailable, reassess the purpose before committing to a long excursion. Wuhu does not need to be added to every Nanjing itinerary.",
      },
      {
        label: "1–2 nights / a city visit with breathing room",
        advice:
          "One useful night allows an evening meal and a selective introduction. Two nights provide a full day for a more coherent port-history and iron-painting sequence, with enough time to ask questions and enjoy the room. Use arrival and departure hours honestly when comparing these options.",
      },
      {
        label: "3 nights or more / a defined additional purpose",
        advice:
          "Add a separate theme-park day for interested families, a deeper confirmed craft interest or a specific wider-region outing. Confirm the exact park and activity before extending the stay. Longer stays should deliver a distinct experience rather than repeat reconstructed streets.",
      },
    ],
    hotelAreas: [
      {
        name: "Jinghu and the Zhongshan Road surroundings / central city life",
        advice:
          "Compare the room with dinner options and the actual old-town and riverfront route. Pedestrian streets can make a walk enjoyable but may move the luggage drop-off away from the entrance. Check evening noise and room orientation rather than assume a central address suits light sleepers.",
      },
      {
        name: "A specific central riverside property / a room-led choice",
        advice:
          "Confirm which river, the booked view and whether a permitted public waterfront walk is convenient. Compare road noise, dinner, lifts and the trip to the next station. A river view can justify time in the room; it does not make every cultural visit walkable.",
      },
      {
        name: "Chengdong or a named park or station base / a practical purpose",
        advice:
          "These are separate locations, not one hotel neighborhood. Chengdong can serve particular eastern-city visits; a park base should match the exact family park; a station room should solve a real departure need. Compare the complete city journeys before trading evening convenience for a particular property.",
      },
    ],
    tradeoffs: [
      {
        title: "Iron painting is a material and technique, not just a souvenir category",
        advice:
          "Wuhu iron painting uses worked iron to form pictorial compositions, often drawing on the lines and subjects of Chinese ink painting. Look at how stems, branches or figures are joined and how open space and shadow contribute to the image. It is not ink painted on a flat iron sheet. A guide can make a finished piece understandable even when no production is taking place; an active forge or hands-on metalwork requires separate permission and safety arrangements.",
      },
      {
        title: "Read the old precinct as layers of a living city",
        advice:
          "Wuhu's river connections and commercial history explain why the city developed here. Ask which visible structures survive, which have been repaired or rebuilt and how the area functions today. Wuhu Ancient Town and Jiuzi Ancient Town have different locations and visitor propositions. A traditional-looking facade alone is insufficient evidence for a building's age or an authentic domestic interior.",
      },
      {
        title: "A working river is not an automatic cruise itinerary",
        advice:
          "Use a permitted public viewpoint to understand the river's scale, movement and commercial role. Do not infer public access to docks, working vessels or cargo areas. A photograph of a waterfront does not establish an operating passenger cruise. If a boat outing is proposed, confirm its actual operator, departure, route and weather policy separately.",
      },
      {
        title: "Families need the exact Fantawild park, not just the brand",
        advice:
          "Wuhu has distinct Fantawild-branded attractions with different themes and activities. Choose the named park from the current official offering, then check height restrictions, language, opening and show arrangements, weather and the interests of each child. Tickets and transfers should identify that park; do not assume a shared ticket or that all shows will be understandable in English.",
      },
      {
        title: "Wuhu, Xuancheng and Huangshan offer different reasons to travel",
        advice:
          "Wuhu suits river-city history and iron painting. Xuancheng introduces a literary landscape and a separately planned Jing County Xuan-paper interest. Huangshan mountain needs its own gateway, remaining-stair assessment and possibly a mountain overnight. Choose two complementary chapters with useful time instead of turning the three into a same-day highlights circuit.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "nanjing",
        advice:
          "Nanjing adds capital history, major collections and a separate Purple Mountain day. Wuhu can introduce a smaller-scale river-port and craft subject if that genuinely interests you. Compare dated station pairs and both hotel transfers, preserving useful museum time rather than treating either city as a station-side stop.",
      },
      {
        slug: "xuancheng",
        advice:
          "Compare worked-iron pictures with the use and making of Xuan paper through a properly arranged Jing County interest. The materials reward different questions and hosts. Xuancheng city, a county paper venue and Wuhu are distinct addresses; confirm the full sequence before fixing either craft appointment.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan adds a separate mountain landscape with cableways, remaining stairs and gateway or mountain-room decisions. Count the whole journey from Wuhu to the chosen base. Huangshan city and the mountain entrance are not interchangeable, and a rail connection does not make a late arrival suitable for an ambitious mountain ascent.",
      },
      {
        slug: "hefei",
        advice:
          "Hefei can add an Anhui collection or urban-history subject and may serve a particular transport sequence. Choose a meaningful visit or a necessary gateway rather than an extra night merely because it is the provincial capital. Compare the full station-to-room journey with going directly to the next destination.",
      },
      {
        slug: "anqing",
        advice:
          "Anqing offers another Yangtze city with Yingjiang Temple and a separately assessed Huangmei opera interest. Choose it for that contrast rather than duplicate generic waterfront walks. A suitable opera program, temple access and useful overnight should drive the sequence, with the full connection counted.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn often offer more comfortable conditions for city walking, with rain and holiday demand still worth considering. Summer can be hot and humid: put exposed riverfront walking earlier or later, keep lunch seated and use an available indoor collection when suitable. Winter can feel cold and damp, so check heating rather than rely on the hotel's star category. A craft appointment follows the host's calendar; a park or evening program has its own operating and weather conditions.",
    orientation:
      "Wuhu / 芜湖 is an Anhui city on the Yangtze, connected with the Qingyi River and a history of river trade. This guide covers a selective urban visit, not every county and scenic area administered by Wuhu. Wuhu Ancient Town, Jiuzi Ancient Town, Wuhu Museum, individual Fantawild parks and the railway and airport gateways occupy different locations. Wuhu is distinct from Wuhan / 武汉 in Hubei. Huangshan mountain and Xuancheng-region paper venues require separate travel plans.",
    experiences: [
      "Read river trade through a selective old-city walk and a relevant collection",
      "Understand how worked iron creates line, space and shadow in Wuhu iron painting",
      "Make time for shrimp-roe noodles and an unhurried city meal",
    ],
    planningNotes: [
      "Distinguish Wuhu Ancient Town from the separate Jiuzi Ancient Town development",
      "Confirm what an iron-painting visit includes before assuming a workshop or class",
      "Give family parks and the onward Huangshan journey their own useful time",
    ],
    arrival:
      "Compare dated rail services to Wuhu or Wuhu South against the exact hotel and first visit. Wuhu Xuanzhou Airport is another gateway with its own road transfer, not a central rail station. Check both local transfers, boarding and luggage when considering an excursion from Nanjing or another city. For Huangshan, distinguish the railway destination, city hotel and actual mountain gateway before choosing the connection. A late arrival needs a workable dinner and next pickup rather than an extra sightseeing promise.",
    gettingAround:
      "Group the central public walk and meal, then use transport for the actual museum, craft host or separate attraction. The city's administrative boundary does not make its visitor sites a compact walking circuit. Agree the pedestrian entrance and meeting point before arriving in a car-free precinct. Keep riverfront access on permitted public paths and use a shorter outdoor option in uncomfortable weather. Jiuzi and a named theme park should each be assessed as a separate journey.",
    stayStrategy:
      "Choose a central base for a short cultural stay when it makes dinner and the first walk easier. Choose a particular river-view room when the room itself is part of the experience, with the view and noise checked. Eastern-city, park and station bases serve different purposes and may increase other transfers. Comfortable bedding, a good bathroom, reliable heating or cooling, breakfast and an accessible luggage approach can matter more than a heritage label. Two nights provide a full day; extra nights need a clear interest.",
    firstTimerNote:
      "Wuhu makes most sense when you arrive with a question: how did river trade shape this city, or how does a maker turn iron into a picture? A concise explanation and time to look can make a modest stop memorable. If neither subject appeals and your China time is short, give those nights to a destination that does. If they do appeal, protect a proper cultural window instead of squeezing Wuhu between two stations.",
    faqs: [
      {
        question: "Is Wuhu worth visiting on an Anhui trip?",
        answer:
          "Yes for travelers interested in river-port history, iron painting and everyday city food. A selective day or one to two useful nights can work depending on the complete journey and confirmed visits. It is an interest-led stop, so compare its value with the time you want for Huangshan, villages or Nanjing's larger historical collections.",
      },
      {
        question: "What is Wuhu iron painting?",
        answer:
          "Wuhu iron painting, or tiehua / 铁画, uses worked iron to create pictorial compositions, often related to Chinese ink-painting subjects and line. Look at joins, open space and shadow as well as the subject. Viewing a finished work, seeing a demonstration and taking part in a supervised activity are different experiences.",
      },
      {
        question: "Can I visit an iron-painting workshop in Wuhu?",
        answer:
          "A workshop visit needs a willing host and a date-specific agreement. Confirm the address, language, activity, safety arrangements and purchase expectations. A public display or shop does not establish access to active production, a master artisan or a hands-on session. A well-interpreted collection can still provide a worthwhile introduction.",
      },
      {
        question: "Are Wuhu Ancient Town and Jiuzi Ancient Town the same place?",
        answer:
          "No. Wuhu Ancient Town / 芜湖古城 is the central historic-area visitor precinct; Jiuzi Ancient Town / 鸠兹古镇 is a separate traditional-style tourism development. Ask what survives, what has been restored or rebuilt and what is scheduled for your date. Do not book one expecting the location or content of the other.",
      },
      {
        question: "How many nights should I spend in Wuhu?",
        answer:
          "One useful night can support a short cultural introduction and meal. Two nights give a full day for a more relaxed city, collection and confirmed craft sequence. Add another night for a separate family park day or a defined additional interest, accounting for real arrival and departure hours.",
      },
      {
        question: "Where should I stay in Wuhu for sightseeing?",
        answer:
          "Compare central Jinghu and Zhongshan Road surroundings with a specific central riverside property. Choose Chengdong, a park base or a station hotel only for the actual visits or transport need. Pin the room against dinner and pickup, and check noise, the booked view, bathroom and climate control.",
      },
      {
        question: "Can I visit Wuhu as a day trip from Nanjing?",
        answer:
          "A focused day can work with suitable dated services and enough time after both local transfers. Select one cultural subject and lunch rather than try to combine the old town, a distant park and a workshop. If a particular host is the reason to go, confirm that appointment before choosing trains.",
      },
      {
        question: "Is Wuhu a good base for Huangshan mountain?",
        answer:
          "Wuhu can be an earlier stop on an Anhui route, but it is not a hotel base at Huangshan's mountain entrance. Plan the complete onward connection to the actual gateway or room, including transfers from the arrival station. Mountain walking, cableways and any mountain overnight need their own day and baggage plan.",
      },
      {
        question: "What should I eat in Wuhu?",
        answer:
          "Shrimp-roe noodles, xiazi mian / 虾籽面, offer a specific local interest for guests who eat shellfish. Ask about the actual broth, seasoning and noodle ingredients, then balance a tasting with a seated meal. Shrimp roe and stocks can be unsuitable for allergies or vegetarian diets, so the kitchen needs explicit requirements.",
      },
      {
        question: "Is Wuhu the same city as Wuhan?",
        answer:
          "No. Wuhu / 芜湖 is in Anhui; Wuhan / 武汉 is Hubei's provincial capital. Use the Chinese city name, province and exact railway station or airport when booking. Similar English spelling does not mean they share a local transfer or sightseeing area.",
      },
    ],
    culturalStory: {
      title: "Follow the trading river, then look closely at a line of iron",
      paragraphs: [
        "The relationship between the Qingyi River and the Yangtze gives Wuhu's commercial story a physical starting point. Instead of treating the old precinct as a collection of attractive facades, ask how goods moved, where people traded and how a working waterfront differed from today's visitor space. A guide can relate the wider history to the actual places being seen while identifying repair, reconstruction and current commercial use. A public walk should never imply entry to working docks or private interiors.",
        "Iron painting offers a change of scale, from the river system to an individual line. In a finished work, a branch, bird or landscape is shaped through material, joins and empty space; the effect depends on more than recognizing the subject. Compare a section close up with the complete composition and, where the display permits, the shadow it casts. A clear explanation can reveal the craft without a staged demonstration. If a maker agrees to receive visitors, build the conversation around the actual work and questions rather than an assumed private masterclass.",
      ],
    },
    foodStory: {
      title: "Let a bowl of noodles introduce the city, then sit down to lunch",
      paragraphs: [
        "Xiazi mian gives a short Wuhu visit a specific food question: how do shrimp roe, broth and a simple bowl of noodles work together? Choose a kitchen for the quality of what it actually serves, ask about the ingredients and avoid treating a famous food name as a guarantee of a particular shop. A small tasting can be enough before a separate balanced meal; there is no need to turn the day into a compulsory sequence of snack purchases.",
        "For a full meal, agree a comfortable seat, suitable vegetables and protein, manageable portions and the day's timing. Ask about shellfish, fish stock, pork, soy, wheat and shared equipment as relevant; removing visible shrimp does not remove an ingredient from the broth. Fish dishes also need a clear conversation about bones. Good planning makes lunch a welcome pause between the walk and the next visit, and leaves room for guests who prefer a familiar breakfast or a quieter evening near their hotel.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / a useful first evening",
        title: "Settle into the city rather than start another transfer",
        description:
          "Reach the exact room, leave luggage and choose a nearby meal. If daylight, weather and public access fit, use a short riverfront or central walk to introduce the trading-city setting. Keep an evening arrival simple and protect the next day's cultural appointment.",
      },
      {
        day: "Main day / morning",
        title: "Read the old precinct through its commercial history",
        description:
          "Walk a selective Wuhu Ancient Town route with surviving fabric, restoration and present use explained. Connect the city to the Qingyi and Yangtze rather than add every traditional-looking street. Use seats and a shorter walk where needed, then take a proper lunch.",
      },
      {
        day: "Main day / afternoon",
        title: "Choose a collection or a confirmed craft conversation",
        description:
          "Visit the relevant open museum collection or the agreed iron-painting host, allowing time to understand materials and composition. Specify what is included and keep purchases optional unless otherwise agreed. If no suitable host is available, use an interpretable public collection rather than promise active production.",
      },
      {
        day: "Departure / optional additional day",
        title: "Continue with a complementary subject",
        description:
          "Depart for Nanjing, Xuancheng or the chosen Huangshan base with full transfers counted. Families staying longer can devote a separate day to a named park after checking the actual activities and restrictions. The final proposal should identify rooms, visits, guide language, transport and any confirmed host separately.",
      },
    ],
  },
};
