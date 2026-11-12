import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jingmai-mountain.svg",
  alt: "Jingmai Mountain planning schematic separating an actual village base, a permitted tea-forest route and a confirmed host session; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const jingmaiMountainGuide: ExpandedDestination = {
  id: "jingmai-mountain",
  name: "Jingmai Mountain",
  region: "southwest",
  kicker: "Understand the tea landscape before choosing the tasting",
  description:
    "Plan a Jingmai Mountain stay around old tea forests, distinct villages and a confirmed host, with realistic roads, room standards and a clear distinction from Pu'er city.",
  stay: "3–4 nights",
  bestFor: "Tea landscapes, living cultural heritage and a slower southern Yunnan stay",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["lancang", "puer", "xishuangbanna", "shaxi", "fuding"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jingmai Mountain Travel Guide: Tea Forests, Villages & Stays",
    seoTitle: "Jingmai Mountain Guide: Tea Forests & Stays",
    seoDescription:
      "Plan 3–4 nights on Jingmai Mountain: compare village stays, tea-forest walks, host sessions, gateways and the separate journey from Pu'er city.",
    answer:
      "Jingmai Mountain in southern Yunnan is worth visiting to understand how tea growing, forest management and village life shape a living cultural landscape. Three nights give two full days for selected villages, a permitted forest walk and an informative tea session. Choose the host and accommodation before the gateway. The UNESCO-listed old tea forests lie in Lancang County, far from a simple Pu'er city outing. Visits should respect working forests and private homes.",
    stayAnswer:
      "Allow three nights for a first focused stay with two full days. Four nights provide a slower rhythm or another distinct host or landscape interest. Two nights can support a selective introduction when the complete arrival and departure work, but leave limited time after the mountain road journey. Combining the Simao city area of Pu'er with Jingmai requires separate usable time and the full transfer; they are not interchangeable hotel neighborhoods. Extra nights should deepen understanding or improve comfort, not multiply shopping sessions.",
    hotelAnswer:
      "Choose a named village or mountain-area property for its actual position, room, host capacity and daily route. Wengji and Nuogan are different villages, not synonyms for one old town. Compare steps, luggage access, bathroom, temperature control, bedding, noise and meals before paying for atmosphere. A larger property elsewhere in the mountain area may offer a different comfort-and-transfer balance. A Lancang county-town hotel serves another purpose again. Neither a tea-themed room nor a village address establishes forest views, an English-speaking tea specialist or a private invitation.",
    sightseeingQuestion: "Should you choose a village stay, a forest walk or a tea session?",
    sightseeingAnswer:
      "Build the stay around complementary subjects. A selected village route introduces buildings, community space and present-day life. A permitted forest walk helps explain cultivation within a forest setting. A confirmed tasting or producer session explains identified teas, processing and brewing. These are different arrangements and need not all happen in the same village or afternoon. Start with one strong host and a manageable route. A seated session can be valuable when a longer walk is unsuitable, but should not be advertised as the same experience as walking the forest.",
    visitorResources: [
      {
        label: "UNESCO: Cultural Landscape of Old Tea Forests of the Jingmai Mountain in Pu’er",
        href: "https://whc.unesco.org/en/list/1665/",
        scope:
          "Official background on the inscribed cultural landscape, its scope and significance. The listing does not certify tea offered for sale, open every forest or home, or verify accommodation and hosts.",
      },
      {
        label: "Lancang county government",
        href: "https://www.lancang.gov.cn/",
        scope:
          "County background and public notices, mainly in Chinese. Confirm the actual village, local roads, visitor arrangements and responsible venue separately. County information does not establish a specific producer appointment, harvest activity or a property's standards.",
      },
      {
        label: "Pu'er municipal government",
        href: "https://www.puershi.gov.cn/",
        scope:
          "Wider prefecture-level context. Simao city and the Jingmai area require different location and transport decisions. Regional tea promotion does not prove a particular tea's origin, age, tree source, host availability or the operation of a dated transport service.",
      },
    ],
    serviceScope:
      "A tailored proposal should identify the actual property and room, gateway, mountain transfers, selected village and permitted walking route, guide language and confirmed tea host. Distinguish interpretation, tasting, production observation and any hands-on work. Confirm seasonal activity, access, consent and optional purchasing rather than promising picking or private family hospitality. Specialist expertise and shipping require their own arrangements. Private guiding does not grant unrestricted forest access, reserve an empty village or authenticate a tea product. Name the included subject and actual service before describing the visit as high-end.",
    routeAdvice:
      "Build a tailored Jingmai chapter around useful time with the landscape and a well-matched tea host. It can pair with Xishuangbanna or city-area Pu'er when the actual roads and gateways work. Shaxi offers a different Tea Horse Road story elsewhere in Yunnan and needs a separate travel stage. Share your dates, tea knowledge, caffeine preferences, walking needs and room expectations. We can use the illustrative three-night outline to assess a route and clearly specify the visits and transfers.",
    practicalPlanning: {
      timing:
        "Give the essential host a reliable window after arrival rather than tying it to an uncertain flight and mountain transfer. Pair a manageable village route with one substantial session, leaving time for questions, lunch and rest. Picking and processing follow the actual producer's work and weather. A quieter day or another village should add a different subject, not repeat the same tasting. Review current road conditions and allow a complete departure transfer before fixing onward transport.",
      walking:
        "Forest paths can involve roots, mud, slopes and uneven ground; village routes may add steps, thresholds and limited vehicle access. A tea forest is not automatically a maintained level garden. Review the exact route, distance, seating, toilets and room approach for the actual guests. A seated tasting and shorter public village walk can be a valid alternative, but do not imply every guest can enter every forest or that a private vehicle follows the walking path.",
      cost: "Compare the exact room, meals, complete transfers, guiding language, specialist or host fee and actual visit format. Keep tea purchases separate from learning. If buying, ask for product identity, origin claim, production date, weight, processing and storage information, with a receipt. A famous landscape, high price or guide introduction is not independent proof of ancient-tree provenance. Shipping, customs and destination-country food rules need their own checks; a tea cake purchase does not include automatic international delivery.",
    },
    attractions: [
      "A permitted walk within the old tea-forest cultural landscape",
      "Wengji village on a defined route respecting residents and current access",
      "Nuogan village as a separate setting rather than another name for Wengji",
      "A confirmed tea host explaining identified leaves, processing or brewing",
      "A selected viewpoint when access, visibility and the group's interest suit",
      "A named property and local meal that contribute to the slower mountain stay",
    ],
    stays: [
      {
        label: "2 nights: a selective first introduction",
        advice:
          "Choose one main village-and-host interest with the complete gateway transfer visible. This can work with convenient arrivals, but should not promise multiple production visits, extensive forest walks and every village between two transport bookings.",
      },
      {
        label: "3 nights: two full days with distinct purposes",
        advice:
          "Use one day for a selected landscape-and-village route and another for a meaningful tea session or different cultural subject. Keep the order responsive to host work and conditions. One carefully chosen base usually offers more than changing rooms for each village.",
      },
      {
        label: "4 nights: deeper learning or a slower rhythm",
        advice:
          "Add a genuinely different subject, more hotel time or flexibility for the host's schedule. Extra nights do not guarantee harvest activity, clear views or private access. The property and alternative plan should remain worthwhile when rain limits a walk.",
      },
    ],
    hotelAreas: [
      {
        name: "A named village property / close cultural context",
        advice:
          "Compare the actual room, privacy, stairs, sound insulation, temperature control and bathroom. Confirm the vehicle stop, luggage arrangement and meals. A resident setting can include ordinary work and neighborhood noise; it should not be sold as an empty private retreat or assumed family invitation.",
      },
      {
        name: "A mountain-area hotel / a different comfort-and-route balance",
        advice:
          "Assess the exact address against the selected villages and host. A more extensive hotel may offer useful facilities while adding daily road travel. Check the actual category, outlook, staffing, food and wet-weather comfort. A mountain label or large budget does not prove old-tea-forest views from every room.",
      },
      {
        name: "Lancang county town / a gateway or services choice",
        advice:
          "Choose only when the actual transport or room requirements justify it. Compare the full journey to each main interest rather than presenting the town as another village base on Jingmai. Gateway convenience on one night can create more travel during the rest of the stay.",
      },
    ],
    tradeoffs: [
      {
        title: "The heritage landscape is not a certification for a tea cake",
        advice:
          "UNESCO recognition concerns a particular cultural landscape and its significance. It does not authenticate the origin, tree age, harvest year or quality of a product offered nearby. Ask for traceable product information and distinguish cultural interpretation from a sales claim. Visiting a forest or tasting with a guide is not independent authentication.",
      },
      {
        title: "Old tea forests are not a conventional plantation tour",
        advice:
          "The relationship between forest, cultivation and community is central to the visit. Follow permitted routes and the host's instructions instead of entering plots or handling plants for photographs. A general village visit does not establish access to every forest area. The setting deserves explanation beyond a line of trees and a tasting counter.",
      },
      {
        title: "Wengji and Nuogan need distinct routes and respectful interpretation",
        advice:
          "The villages have their own community settings and should not be flattened into one generic ethnic stop. Public space, a residence, a place of worship and a working tea area have different access and photography rules. Ask before portraits and establish any hosted conversation with consent. No ceremony, costume session or family meal is assumed.",
      },
      {
        title: "A good tasting does not require live picking",
        advice:
          "Picking and processing are seasonal work, not a daily performance for visitors. A clear tasting can explain leaf, processing and brewing outside harvest when the host has suitable identified teas. Confirm the actual content and language. A shop demonstration can be useful if honestly described, but should not become a promise of hands-on production or unrestricted factory access.",
      },
      {
        title: "Ancient-tree, aged and raw or ripe describe different claims",
        advice:
          "Tree-source claims, product age and processing category are not interchangeable. Sheng, often called raw Pu'er, and shou, often called ripe Pu'er, require an explanation of processing rather than a simple old-versus-young comparison. Ask about the actual product and storage. Cultural traditions can be discussed without medical promises or pressure to buy a costly tea.",
      },
      {
        title: "Pu'er city, Lancang and Jingmai are different arrival decisions",
        advice:
          "A ticket to Pu'er does not put the guest in a Jingmai village. Lancang Jingmai Airport is another gateway and is not the same location as the tea forest. Check actual dated flights, road transfers and arrival times; an airport sharing the name does not guarantee the best connection. Choose the full hotel-to-hotel journey rather than the shortest flight segment.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "lancang",
        advice:
          "Lancang's county guide helps decide whether a town base or a distinct Laodabao and Lahu cultural subject adds value beyond the mountain stay. Confirm the host, format and full road rather than assume a performance or personal invitation. County-town nights should earn their place without reducing useful tea-forest days.",
      },
      {
        slug: "puer",
        advice:
          "Use the Pu'er guide to compare Simao city, city-area tea or coffee interests and a distinct Jingmai stay. The shared prefecture name does not make the bases interchangeable. Allow the complete road transfer and useful time in each place rather than assume a mountain day trip from the city.",
      },
      {
        slug: "xishuangbanna",
        advice:
          "Xishuangbanna adds a different southern Yunnan chapter through Jinghong, selected cultural interests or a separately planned botanical visit. Compare the actual road or other dated transport and chosen bases. A shared tea theme does not make all forests, communities and producer appointments equivalent.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi offers a different village and trading-route context in northwestern Yunnan. It is not a nearby Jingmai excursion. Give each place useful nights and compare the entire transfer through actual gateways, choosing distinct content rather than selling a continuous local Tea Horse Road drive.",
      },
      {
        slug: "fuding",
        advice:
          "Fuding in Fujian offers a white-tea comparison for a separate, properly planned journey. Choose it when distinct confirmed sessions justify the distance. Processing, hosts, scenery and transport differ; the common tea interest does not establish a short connection or repeated generic tasting format.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose around the desired learning and comfort, not only a harvest photograph. Tea work follows actual leaf, weather and producer schedules; tasting may be worthwhile outside production. Wetter periods can affect forest surfaces and mountain roads, while cooler mornings and evenings call for appropriate layers and a comfortable room. Clear views and mist are different possibilities, neither guaranteed. Check current forecasts, road notices and host activity before departure rather than treating a month as proof of picking, processing or a cloud scene.",
    orientation:
      "Jingmai Mountain lies in Lancang County within the wider Pu'er area of southern Yunnan. Simao city, Lancang town, the airport, individual villages and forest routes occupy different places. Wengji and Nuogan are distinct village chapters, and the heritage designation does not extend identical visitor access to every tea mountain in Yunnan. Use actual Chinese property and village names when arranging transport, hosts and room expectations.",
    experiences: [
      "Understand the relationship between tea cultivation, forest and village life on a permitted route",
      "Learn from a confirmed host through identified teas and a clear processing or brewing focus",
      "Stay at a carefully checked property with time for meals, sleep and a slower mountain rhythm",
    ],
    planningNotes: [
      "Choose the real village base and host before fixing the airport or city gateway",
      "Check forest walking, room steps, luggage, temperature control and actual dinner arrangements",
      "Keep heritage recognition, product provenance, seasonal work and private access as separate questions",
    ],
    arrival:
      "Compare actual dated options through Lancang Jingmai Airport, Pu'er or another proposed gateway with the complete road transfer to the named property. The airport is not the tea-forest entrance, and a Pu'er city arrival serves a different location. Do not assume a rail ticket under the prefecture name removes the final mountain journey. Send the actual booking and Chinese address for pickup, and protect essential host appointments from uncertain arrival connections.",
    gettingAround:
      "Plan a vehicle for actual village and host locations, with permitted walks and pickup points clear. Forest paths, residential lanes and property approaches may remain beyond the car. Agree daily road hours, lunch and rest rather than promising every village in one unlimited circuit. Rain or road conditions may change the order. A private vehicle and guide do not grant entry to homes, working spaces, religious areas or restricted forest routes.",
    stayStrategy:
      "One base generally works for a three- or four-night first stay when it fits the selected subjects. Assess the exact room's bathroom, beds, temperature control, quiet and approach, then the host and daily route. A beautiful village setting and high service standards are separate qualities. Protect downtime and a useful wet-weather alternative rather than paying for atmosphere during a schedule dominated by transfers and repeated tastings.",
    firstTimerNote:
      "You do not need advanced tea knowledge to appreciate Jingmai, but a clear learning question helps. Ask how forest cultivation, processing and community life relate, then taste identified examples without an obligation to buy. Choose fewer places with enough explanation. A good cultural visit respects the people and landscape, offers practical comfort and remains valuable without live harvest or a spectacular sky.",
    faqs: [
      {
        question: "Is Jingmai Mountain in Pu'er city?",
        answer:
          "No. It lies in Lancang County within the much wider Pu'er area, separate from the Simao urban center. Compare the actual gateway and full road transfer to the named village. A Pu'er city hotel or rail arrival is not a tea-forest stay.",
      },
      {
        question: "How many nights should I spend on Jingmai Mountain?",
        answer:
          "Three nights give two full days for selected villages, a permitted landscape route and a meaningful tea session. Four allow deeper learning or a slower pace. Two can suit a focused introduction with convenient transport, but count the complete mountain arrival and departure before deciding.",
      },
      {
        question: "Should I stay in Wengji or Nuogan?",
        answer:
          "Choose the actual property, room and host rather than the village name alone. The villages offer different settings and need their own route. Compare steps, luggage access, bathroom, temperature control, quiet, meals and daily transport. Neither name guarantees private hospitality or an English-speaking tea specialist.",
      },
      {
        question: "Can I visit Jingmai outside tea harvest?",
        answer:
          "A selected landscape route and well-arranged tasting may be worthwhile outside production. Picking and processing depend on actual work, weather and host consent. Confirm the date, content, language and access instead of assuming a year-round hands-on harvest activity.",
      },
      {
        question: "Does UNESCO recognition prove that tea is from ancient trees?",
        answer:
          "No. Recognition concerns the inscribed cultural landscape, not every product sold nearby. Origin, tree-source, harvest-year and quality claims need their own evidence. A guide introduction, forest walk or premium price is not independent authentication of a tea cake.",
      },
      {
        question: "Can Jingmai suit travelers who do not want a long forest walk?",
        answer:
          "A seated session and a shorter permitted village route may suit, but check actual steps, slopes, toilets, seating and room access. Forest paths can be uneven or muddy. Describe the guests' needs before choosing the visit; a private car does not make every route step-free.",
      },
      {
        question: "Do raw and ripe Pu'er mean young and old tea?",
        answer:
          "No. Sheng or raw and shou or ripe refer to different processing categories. Age and storage are separate questions. Ask the host to identify the actual teas and explain the process rather than treating a dark color, compressed cake or ripe label as proof of years of age.",
      },
      {
        question: "Is there a published Jingmai Mountain tour on this page?",
        answer:
          "No matching published product is recommended. The outline illustrates a possible stay. Request a proposal with dates, room expectations, walking needs and tea interests; actual local providers, host availability, access and inclusions need confirmation before booking.",
      },
    ],
    culturalStory: {
      title: "Read the forest and the villages together",
      paragraphs: [
        "The significance of Jingmai's old tea-forest landscape involves cultivation, forest relationships and community practices together. It is richer than a claim that visitors have found the oldest or most expensive tea tree. A useful guide connects visible features with documented context and the host's own explanation, without presenting every community or producer as identical. The landscape is lived in and worked, not preserved solely as a visitor display.",
        "Wengji, Nuogan and other selected village subjects should be approached through their particular settings. Respect religious space, private homes, work and photography instructions. Any hosted conversation requires consent, useful interpretation and a clear arrangement. Cultural depth comes from understanding those relationships; it does not require an invented family connection, a performance on demand or private entry to every building.",
      ],
    },
    foodStory: {
      title: "Give meals and tea different roles in the day",
      paragraphs: [
        "A thoughtful tasting uses identified teas, enough time for questions and preparation suited to the subject. It need not mean many strong cups without a meal. Agree portions, caffeine preferences and the option to decline another infusion. Local food should be explained through the actual kitchen and ingredients rather than one generic ethnic menu imposed on every village. A simple shared meal can contribute to the stay when its host and basis are genuinely confirmed.",
        "Ask about pork, fish, eggs, soy, wheat, nuts, herbs, stocks, sauces and shared preparation as relevant to the chosen dishes. A vegetable plate does not establish a vegan meal, and a small rural kitchen may have limited capacity for a serious allergy. Confirm alternatives ahead, including non-tea drinks and drinking water. Tea purchases, meals and private hospitality are separate inclusions rather than assumed benefits of entering a village.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual mountain base",
        description:
          "Complete the agreed gateway and road transfer, settle into the quoted room and confirm meals. Review the next day's host and permitted route. Keep an essential specialist appointment away from uncertain flight or road connections.",
      },
      {
        day: "Full day 1",
        title: "A selected village and tea-forest landscape",
        description:
          "Use a manageable permitted route with community life, cultivation and forest context explained. Include lunch and rest. Access to homes, worship spaces or working areas is not assumed, and a shorter route can replace a longer walk when needed.",
      },
      {
        day: "Full day 2",
        title: "A meaningful tea session and a distinct contrast",
        description:
          "Meet the confirmed host for a defined learning focus and optional purchasing. Add another village or landscape subject only when it deepens understanding. A fourth night allows a slower rhythm or a genuinely different session without guaranteeing harvest work.",
      },
      {
        day: "Departure",
        title: "Allow the full mountain and onward journey",
        description:
          "Use the actual gateway and transfer, keeping purchases or shipping separate from transport assumptions. This three-night outline is illustrative, not a published product or guarantee of hosts, live production, ancient-tree provenance, medical benefits or private access.",
      },
    ],
  },
};
