import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/fuding.svg",
  alt: "Fuding planning schematic separating a city base, a named white-tea host and a Taimu Mountain or coastal day; original schematic, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const fudingGuide: ExpandedDestination = {
  id: "fuding",
  name: "Fuding",
  region: "south",
  kicker: "White tea with a clear purpose, plus a considered scenic day",
  description:
    "Plan Fuding for white-tea learning and a selected mountain or coastal chapter, with host formats, city and rural stays, Taimu Mountain walking and rail gateways clearly distinguished.",
  stay: "3 nights, or 2 for a focused tea visit",
  bestFor: "White-tea learning, regional food and a quieter Fujian chapter",
  interests: ["food", "heritage", "landscape"],
  relatedDestinationIds: ["xiapu", "wuyishan", "quanzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Fuding Travel Guide: White Tea, Taimu Mountain & Stays",
    seoTitle: "Fuding Travel Guide: White Tea & Scenic Stays",
    seoDescription:
      "Plan Fuding for white tea: compare host visits, city and rural hotels, Taimu Mountain walking, coastal alternatives and a 2–3-night itinerary.",
    answer:
      "Fuding (福鼎) is a county-level city within Ningde in northeastern Fujian, best approached as a white-tea destination with a separate choice of mountain or coastal scenery. Three nights give two full days: one for a genuinely informative tea session and another for Taimu Mountain or a selected alternative. Tea shops, gardens and working producers provide different experiences; the useful question is what you will learn and who will explain it. A tasting can be rewarding outside harvest, while live picking and processing depend on the actual season, work and host consent.",
    stayAnswer:
      "Choose two nights for a focused tea visit when the host and transport leave a useful full day. Three nights allow tea and a separate Taimu Mountain or coastal chapter without rushing both into one day. Four nights can suit a deeper confirmed interest or a slower rural stay, but should not be filled with repeated sales tastings. Count the actual station transfer and appointment time before treating arrival or departure as a full day. A longer stay does not guarantee live manufacture or a particular producer's availability.",
    hotelAnswer:
      "A Fuding city base can provide practical meals, room choices and pickup for separate tea and scenic days. A named rural tea-area property may support a quieter setting, with its own road, dining, language and staffing considerations. A stay chosen for Taimu Mountain serves a different route and may not be close to the confirmed tea host. Compare the exact property, room, noise, bathroom, breakfast and each day's travel. A tea-themed hotel does not itself establish access to a working garden, specialist or factory.",
    sightseeingQuestion: "Should you choose Fuding or Wuyishan for a tea-focused trip?",
    sightseeingAnswer:
      "Choose Fuding for an interest in white tea, its leaf styles, withering, drying, brewing and the questions around age and storage. Choose Wuyishan for rock tea, an oolong tradition with a different processing and landscape context. Both can be worthwhile when actual hosts offer distinct learning; two generic shop tastings add less. Compare the named session, interpretation, season, hotel and full transfer before deciding. Fuding also requires its own choice between tea time, Taimu Mountain walking and a coastal chapter rather than promising every subject in a short stay.",
    visitorResources: [
      {
        label: "Fuding municipal government",
        href: "https://www.fuding.gov.cn/",
        scope:
          "Official starting point for city background and public notices. Confirm the responsible scenic operator, tea host and transport arrangements separately. A city reference does not authenticate tea for sale, establish private production access or verify a particular property's standards.",
      },
      {
        label: "UNESCO Global Geoparks: Ningde",
        href: "https://www.unesco.org/en/iggp/geoparks/ningde",
        scope:
          "Geological background on the wider geopark context that includes Taimu Mountain. A geopark designation is not a single ticket, a guarantee of open trails or evidence that every part is near Fuding. Confirm the actual scenic entrance, walking route and current visitor arrangements with the responsible operator.",
      },
      {
        label: "Fujian provincial government: English portal",
        href: "https://www.fujian.gov.cn/english/",
        scope:
          "Provincial destination and regional background for a wider Fujian journey. Use current operator information for specific admissions, trains and host sessions. This reference is not a dated service verification or an independent certificate of a tea product's origin, grade or age.",
      },
    ],
    serviceScope:
      "A proposed Fuding stay should name the hotel, actual station, selected tea host, learning focus, language and session format. Distinguish a tasting room, garden walk, working production visit and hands-on activity, with host consent and actual seasonal work clear. Confirm purchases are optional and set any fee independently of a shopping expectation. Scenic admissions, remaining steps, local transfers and alternatives belong in the written proposal. Private guiding does not establish restricted production access, a famous maker appointment, product authentication or a health benefit from tea.",
    routeAdvice:
      "Fuding can be a tea-focused stay or a distinct chapter beside Xiapu's working coast. Wuyishan offers a meaningful contrast for guests who want to understand white tea and rock tea through genuinely different sessions. Quanzhou adds urban heritage farther along a wider Fujian journey. No matching published Fuding product is recommended here. Use the illustrative three-night outline to request a proposal, stating your tea knowledge, whether buying matters, walking tolerance and preferred room standards. Confirm the host and useful days before fixing the scenic additions.",
    practicalPlanning: {
      timing:
        "Give the tea session an unhurried window with actual interpretation rather than fitting it between a long mountain walk and a train. Harvest and processing follow real work and weather; a broad spring date is not a production appointment. A tasting can be arranged around available teas outside production when the host agrees. Keep Taimu Mountain as its own physical and transport decision, with current openings, forecast, meals and return transfer considered.",
      walking:
        "Tea gardens can involve slopes, narrow paths, mud and sun; a tasting room may offer a different level of access. Ask for the actual route and seating rather than calling all tea visits gentle. Taimu Mountain routes can involve sustained steps, uneven rock and narrow passages. Review the selected circuit, clearances, handrails, rest points and any available transport. A private car cannot remove the mountain's remaining approach or turn a garden into a step-free venue.",
      cost: "Compare the exact room, transfers, guide or interpreter, host fee, tasting selection and scenic tickets. Separate the cost of learning from any tea purchase. If buying, request the named product, origin claim, harvest or production date, net weight, storage information and price basis, and retain the receipt. Expensive packaging, a guide introduction or a compelling story is not independent authentication. Shipping, customs and the destination country's food rules require their own checks rather than an assumed hotel-to-home service.",
    },
    attractions: [
      "A confirmed white-tea tasting with a defined learning focus and optional purchasing",
      "A named tea garden visit when route, season and host permission fit",
      "An actual working-production explanation only when the producer can host it",
      "A selected Taimu Mountain route matched to steps, clearances and weather",
      "A separately planned coastal chapter around a named locality such as Yujing",
      "Fuding city meals and streets chosen to complement the tea and scenic days",
    ],
    stays: [
      {
        label: "2 nights: one substantial tea day",
        advice:
          "Choose a confirmed host and enough time to taste, ask questions and understand the actual teas. Add a short city interest when the transport permits. Do not promise a full mountain circuit, live manufacture and several estates from one useful full day.",
      },
      {
        label: "3 nights: tea and a distinct scenic chapter",
        advice:
          "Give tea one day and Taimu Mountain or a selected coastal interest another. Keep meals and hotel time useful, adjusting the sequence to the host and weather. One base can work when its actual road position serves both days.",
      },
      {
        label: "4 nights: deepen a confirmed interest",
        advice:
          "Add another session only when it teaches a different subject, such as brewing or a clear comparison of styles, rather than repeating a sales presentation. A slower rural stay should stand on the room, meals and setting even without live picking or production.",
      },
    ],
    hotelAreas: [
      {
        name: "Fuding city / meals and practical transfers",
        advice:
          "Consider for restaurant choices, a range of room categories and straightforward pickup. Check the actual drive to the host, scenic entrance and station. A city name is not a guarantee of a short transfer. Compare soundproofing, breakfast, beds, bathroom and early or late reception arrangements.",
      },
      {
        name: "A named tea-area property / a setting-led stay",
        advice:
          "Choose the precise address and verify road access, luggage, room temperature, bathroom, staffing and dinner. A tea-area location does not establish an English-speaking host or permission to enter surrounding production spaces.",
      },
      {
        name: "Taimu Mountain area / a scenic-route priority",
        advice:
          "Select a property when the chosen mountain day or another actual local interest justifies the base. Compare the final approach to the entrance, nearby meals and the separate tea-host drive. A mountain-view image does not identify the quoted room, current visibility or the amount of walking after arrival.",
      },
      {
        name: "A named coastal stay / a separate holiday choice",
        advice:
          "Assess the actual outlook, room, dining and shore access before using the coast as the base for a tea trip. It may add travel to both the host and mountain. A coastal address does not guarantee a swimming beach, extensive resort facilities or a useful scenic visit in poor weather.",
      },
    ],
    tradeoffs: [
      {
        title: "White tea is a processing category, not simply pale tea",
        advice:
          "Fuding white tea is associated with withering and drying rather than the processing used for green tea or Wuyi oolong. A useful session can compare leaf material, processing, brewing and storage through actual examples. Color alone does not establish the category, origin or quality. Ask the host to explain what is in the cup rather than relying on a garden backdrop.",
      },
      {
        title: "Silver Needle, White Peony and Shou Mei are not age labels",
        advice:
          "Baihao Yinzhen, often called Silver Needle, Bai Mudan or White Peony, and Shou Mei describe different white-tea styles associated with different leaf material. They do not automatically prove a product's age, origin or value, and one label does not make every example superior. Compare identified teas and preparation; a guided tasting should help you understand preferences without pressuring you toward the most expensive tin.",
      },
      {
        title: "Aged tea requires evidence, and tea is not a medical treatment",
        advice:
          "An older-looking leaf or compressed cake is not proof of a claimed harvest year. Ask about production date, storage and traceable product information, and treat uncertain claims accordingly. Age alone does not establish quality. Do not accept medicinal promises as a reason to buy or use tea instead of medical care; a cultural visit can explain a tradition without endorsing a treatment claim.",
      },
      {
        title: "Picking, processing and tasting are separate experiences",
        advice:
          "Live work depends on season, weather, the producer's schedule and permission. A garden can be visited without active harvest, and a thoughtful tasting can be valuable outside production. Confirm what will actually happen, which areas visitors may enter and whether the host can interpret the process. A sales room or demonstration should be described honestly rather than advertised as unrestricted access to a working factory.",
      },
      {
        title: "Taimu Mountain needs a route choice, not a generic easy-walk label",
        advice:
          "Different circuits can involve substantial stairs, rock surfaces and narrow passages. Assess the actual guest's knees, balance, comfort with heights and confined spaces. Any shuttle or other mountain transport leaves its own approach and remaining walks. A shorter selected route may work better than chasing the complete circuit, and poor visibility should not turn the day into a compulsory endurance outing.",
      },
      {
        title: "Fuding and Taimushan railway stations are different gateways",
        advice:
          "Choose the actual dated train and station for the hotel and planned sequence. Taimushan station is not the mountain entrance, while a Fuding rail arrival still needs its own hotel transfer. Do not interchange names in pickup instructions or choose solely by the intercity train time. Compare the complete journey and leave a fixed host appointment clear of arrival uncertainty.",
      },
      {
        title: "A coastal addition or boat is a separate arrangement",
        advice:
          "A place such as Yujing offers a different setting from a tea garden or mountain route. Choose a specific land-based interest, and check current access and local conditions. Any island or boat extension requires a named operator, boarding and return plan, suitability and weather alternative. It is not automatically included through a private car day or a general Fuding destination label.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "xiapu",
        advice:
          "Xiapu adds tidal-flat and working-coast interests. Give photography its own tide and light windows, then protect a useful Fuding tea appointment. Compare the actual stations or road journey and hotel transfers; a scenic photograph and a white-tea learning session need different conditions and expertise.",
      },
      {
        slug: "wuyishan",
        advice:
          "Wuyishan provides a different tea tradition through rock tea, an oolong, with its own river and mountain choices. Combine the destinations when actual hosts offer distinct learning. Compare the full transfer and effort, rather than repeating generic tastings or assuming both Fujian tea areas form one compact garden visit.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou adds southern Fujian trading history, temples and urban food. Keep a meaningful city stay and check the actual train and both hotel transfers. A shared province does not make a fixed food or heritage appointment practical immediately after an uncertain arrival.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring can be important for tea work, but the exact activity depends on weather, leaf and producer; it is not guaranteed by choosing a month. Tasting and interpretation may remain worthwhile outside harvest with a suitable host. Spring and autumn can suit selected walks, while summer heat, heavy rain and typhoon-related conditions affect mountain and coastal plans. Winter requires attention to room comfort and exposed routes. Confirm actual forecasts, openings and host activity closer to travel rather than promising a harvest or clear mountain view.",
    orientation:
      "Fuding is a county-level city within Ningde in northeastern Fujian, distinct from the wider prefecture. The city hotel, tea-area hosts, Taimu Mountain and coastal localities are different route points. Taimu Mountain is also written Taimushan, including in the railway station name. Fuding station and Taimushan station are not interchangeable, and neither name alone establishes the final hotel or scenic-entrance journey.",
    experiences: [
      "Learn white-tea styles, processing and brewing through a clearly identified tasting",
      "Visit a named garden or producer only with the actual host, season and access agreed",
      "Choose a mountain or coastal day that complements the tea rather than overwhelms it",
    ],
    planningNotes: [
      "Confirm the tea host, language, learning aim and optional purchase basis before booking",
      "Compare exact hotel addresses, room standards and the correct rail gateway",
      "Review Taimu Mountain steps, narrow passages and a worthwhile weather alternative",
    ],
    arrival:
      "Compare actual services to Fuding and Taimushan railway stations, then include the hotel transfer. A station bearing the mountain name is not the scenic entrance. If arriving by air through a wider Fujian or southern Zhejiang gateway, compare the full onward journey and dated connections rather than the apparent map distance. Send the actual ticket and full address for pickup. A private tea session should have its own reliable window, not depend on making every connection immediately after a flight.",
    gettingAround:
      "Use planned road transfers between the actual hotel, host and selected scenic route. A city tasting and a hillside garden have different access needs; vehicle availability does not grant entry to production areas. Taimu Mountain may require operator transport and still involves remaining walks. Agree pickup, lunch and finish time rather than treating a driver day as unlimited travel. Any coastal boat extension needs a separate operator and weather plan.",
    stayStrategy:
      "Choose one base for a short first stay after the actual host and scenic priority are identified. A rural property can be worthwhile when the room, dinner and setting meet expectations; a city hotel may be more practical for varied meals and transport. Check quiet, bedding, temperature control, bathroom and staffing directly. Hotel atmosphere and tea expertise are separate qualities, so do not pay for a tea-themed room on the assumption that a meaningful producer visit is included.",
    firstTimerNote:
      "Begin with what you want to learn: how white tea is made, how styles differ, how to brew it or how to assess a purchase. That question makes choosing a host much easier. A small number of well-explained teas can offer more than many cups without context. Add the mountain or coast only when the time and physical demands suit; a good tea stay does not need every regional sight to justify it.",
    faqs: [
      {
        question: "Is Fuding worth visiting for white tea?",
        answer:
          "It can be very rewarding when a confirmed host provides useful explanation, identified teas and optional purchasing. Choose the session for its learning focus, not merely a tea-shop address. A tasting room, garden and working producer offer different experiences, and live work depends on the actual season and permission.",
      },
      {
        question: "How many nights should I stay in Fuding?",
        answer:
          "Two nights can suit one focused tea day with convenient transport. Three give tea and a separate Taimu Mountain or coastal chapter. Four need a deeper confirmed interest or worthwhile rural stay. Count the real station transfer and host timing before treating arrival and departure as full sightseeing days.",
      },
      {
        question: "Should I choose Fuding or Wuyishan for tea?",
        answer:
          "Choose Fuding for white tea and Wuyishan for rock tea, an oolong tradition. Compare the actual host, interpretation, season and hotel rather than the destination label alone. Both can make sense when the sessions teach different subjects and the full transfer fits the wider trip.",
      },
      {
        question: "Can I visit a Fuding tea farm outside harvest?",
        answer:
          "A garden walk or tasting may be possible with a confirmed host, but live picking and processing cannot be assumed. Agree the actual date, route, language and content. A thoughtful tasting can work outside production; a sales room should not be represented as a working farm experience.",
      },
      {
        question: "Are Silver Needle and White Peony different ages of the same tea?",
        answer:
          "No. Baihao Yinzhen or Silver Needle, Bai Mudan or White Peony, and Shou Mei describe different styles associated with different leaf material. They do not by themselves prove age, origin or value. Ask for clear product information and compare identified teas rather than assuming one label guarantees superior quality.",
      },
      {
        question: "Does aged white tea have guaranteed health benefits?",
        answer:
          "No health or treatment benefit is promised here. Age claims need evidence, and age alone does not establish quality. A cultural tasting can explain traditions without endorsing medicinal claims or replacing medical care. Ask about production date, storage and traceable product information if considering a purchase.",
      },
      {
        question: "Can I visit Taimu Mountain without a difficult climb?",
        answer:
          "Assess the actual selected route: stairs, uneven rock, narrow passages and remaining approach walks vary. Operator transport does not make the mountain step-free. Describe knees, balance, walking limits and comfort with heights or confined spaces in advance. A shorter route or a different scenic day may be more suitable.",
      },
      {
        question: "Are Fuding and Taimushan the same railway station?",
        answer:
          "No. They are different rail gateways, and Taimushan station is not the mountain entrance. Compare the actual dated service, hotel and final road transfer. Use the complete ticket and station name for pickup rather than a general Fuding or Taimu Mountain arrival description.",
      },
      {
        question: "Do I have to buy tea during a private visit?",
        answer:
          "A learning visit should have its host fee and optional purchase basis agreed in advance. Ask for product details, weight, origin and date claims, storage information and a receipt if buying. Guiding is not independent authentication, and shipping or import permission is a separate question.",
      },
    ],
    culturalStory: {
      title: "Understand the work behind the cup",
      paragraphs: [
        "White tea can appear simple in a cup while depending on choices about leaf, withering, drying and storage. A useful Fuding session connects those decisions to the identified examples being tasted. The producer's own method should be presented as that producer's practice, not a rule that every garden follows identically. A working space may be unavailable during production, and that limitation should improve the explanation rather than be concealed behind a promise of access.",
        "Tea knowledge also includes hospitality, brewing and the language used to describe differences. Ask questions, compare preparation and separate a cultural story from evidence about a product for sale. A genuine host can provide a valuable encounter without being advertised as a celebrated master or a private family connection. Consent, clear interpretation and time to understand matter more than the number of estates visited.",
      ],
    },
    foodStory: {
      title: "Keep tea tasting and meals in a comfortable balance",
      paragraphs: [
        "A local meal can introduce Fuding beyond its tea reputation. Rou pian, a local pork preparation, is one possible interest; coastal dishes and seafood offer another when the kitchen and guests suit. Explain the actual preparation, portions and ingredients instead of making one snack compulsory. Plan a proper meal around tasting, and let guests decline additional cups rather than assuming a long succession of teas is always enjoyable.",
        "Clarify pork, fish, shellfish, wheat, starches, sauces, stocks and shared preparation. A familiar English dish name may conceal a different recipe, so confirm with the actual kitchen. For seafood, agree weight or portion and preparation before ordering. Offer drinking water and non-tea options, and choose a restaurant for reliable suitability and comfort rather than assuming a rustic setting proves authenticity or a high price proves quality.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen base and confirm the host plan",
        description:
          "Use the actual rail gateway and agreed road transfer, settle in and have an easy meal. Review the next day's host, content and optional purchase basis. Keep an essential specialist session away from uncertain arrival connections.",
      },
      {
        day: "Full day 1",
        title: "A substantial white-tea learning day",
        description:
          "Meet the confirmed host for a defined tasting and explanation, adding a garden or production space only when season, access and consent fit. Leave time for questions, lunch and a comfortable return. Buying is a separate optional decision.",
      },
      {
        day: "Full day 2",
        title: "Choose the mountain or a contrasting coastal interest",
        description:
          "Use a selected Taimu Mountain circuit when conditions and walking suit, or a separately defined coastal or slower local chapter. Review remaining steps, narrow passages and the weather alternative. Do not add an unconfirmed boat or another shop merely to fill the day.",
      },
      {
        day: "Departure",
        title: "Protect the complete onward journey",
        description:
          "Use the correct station, allow the actual road transfer and keep purchases or shipping separate from departure assumptions. This three-night outline is illustrative, not a published product or a guarantee of named hosts, harvest work, tea provenance, health benefits or private scenic access.",
      },
    ],
  },
};
