import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jianchuan.svg",
  alt: "Original Jianchuan planning schematic separating the county town and woodcarving from a Shaxi valley stay and selected Shibaoshan routes; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const jianchuanGuide: ExpandedDestination = {
  id: "jianchuan",
  name: "Jianchuan",
  region: "southwest",
  kicker: "Look closely at the woodwork, then choose your valley base",
  description:
    "Explore Jianchuan Old Town and woodcarving traditions, with clear choices between a town visit, a confirmed maker session and separate Shaxi or Shibaoshan time.",
  stay: "A focused town visit or 1–2 local nights; Shaxi needs its own valley-stay plan",
  bestFor: "Woodcraft, vernacular architecture and a more considered Dali–Lijiang route",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["heqing", "shaxi", "dali", "lijiang", "weishan", "nuodeng"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jianchuan Travel Guide: Old Town, Woodcarving & Shaxi Choices",
    seoTitle: "Jianchuan Guide: Old Town, Woodcarving & Shaxi",
    seoDescription:
      "Plan Jianchuan in Yunnan: old-town architecture, woodcarving visits and hotel choices, with Shaxi and Shibaoshan kept distinct and realistic onward transfers.",
    answer:
      "Jianchuan (剑川) is a county in Yunnan's Dali prefecture; its county town is a separate place from Shaxi, although Shaxi also lies within the county. Visit Jianchuan Old Town for a selective architectural walk and an introduction to local woodcarving traditions. A properly arranged maker conversation can deepen that interest, but a shop visit is not automatically a workshop. Choose a focused town stop or one useful night; two local nights give a full day when the craft or architecture genuinely warrants it. Shaxi's valley hotels and Shibaoshan's temple and grotto routes require separate location and walking decisions.",
    stayAnswer:
      "A town visit with lunch can work on a wider route if the complete road plan leaves useful time. One night allows a more relaxed architectural walk and morning start. Two nights give one full day for deeper interpretation and a confirmed craft visit or another chosen county interest. If your priority is Sideng's square and valley life, stay in Shaxi instead and assess any Jianchuan town outing separately. A county name on a hotel listing is not a reason to add both town and valley nights when one base would serve the trip better.",
    hotelAnswer:
      "Compare a named room in or near Jianchuan Old Town with a county-town hotel offering easier vehicle access and more conventional facilities. Check noise, heating, bathroom, beds, stairs and the final luggage approach before choosing a converted house. A Shaxi courtyard is a different valley location, with its own meals and road journeys. A rural or lakeside property should be chosen for the specific setting and operation, not assumed to provide easy access to every county attraction. Pin the room against the actual town walk, host and onward route.",
    sightseeingQuestion: "What is the difference between Jianchuan, Shaxi and Shibaoshan?",
    sightseeingAnswer:
      "Jianchuan is the county and the name commonly used for its county town. Shaxi (沙溪) is a separate valley destination within Jianchuan County, centered for many visitors on Sideng's square and nearby villages. Shibaoshan (石宝山) is a separate mountain and heritage outing with temple and grotto choices. They are related geographically, but not one walking circuit or interchangeable hotel address. Choose the town for architecture and a defined woodcarving interest, Shaxi for a valley stay, and a selected Shibaoshan route when its art, religious setting and walking suit you.",
    visitorResources: [
      {
        label: "Jianchuan county government",
        href: "https://www.jianchuan.gov.cn/",
        scope:
          "Reference entry point for county background and public notices, mainly in Chinese. Confirm current old-town interiors, heritage collections, individual Shibaoshan routes, lake access and maker arrangements through the responsible venue or host. This link does not establish a workshop appointment or open grotto for your date.",
      },
      {
        label: "Dali prefecture government",
        href: "https://www.dali.gov.cn/",
        scope:
          "Regional context for distinguishing Jianchuan County, Dali city and the county's separate visitor places. A shared prefecture or county does not establish short transfers, a common ticket or the same hotel base.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Compare dated services to the actual wider gateway used by the itinerary. Dali or Lijiang rail arrivals still need the full road transfer to the selected Jianchuan or Shaxi room. Use the named station on the ticket; do not assume a county-town rail arrival or station-side heritage visit.",
      },
    ],
    serviceScope:
      "A tailored Jianchuan proposal should specify the town route, guide language, pickup and return, meal basis and any named collection or host. For woodcarving, distinguish viewing finished objects, watching work, talking with a maker and participating in a supervised activity. Agree the subject, tools, safety arrangements, interpretation and purchase expectations. A heritage walk does not include private homes or workshops. For Shibaoshan, name the chosen sector and what walking remains instead of quoting a generic mountain visit.",
    routeAdvice:
      "Tell us whether you are interested in doors and courtyard architecture, woodcarving technique, a Shaxi valley stay or Shibaoshan's art. We can compare a town stop with one or two local nights and keep the complete Dali–Lijiang road sequence realistic. No published product is recommended here for a Jianchuan Old Town or woodcarving stay. If Shaxi is the stronger fit, its separate guide links to the existing Yunnan journey with a Shaxi stay; that itinerary does not automatically include a county-town maker visit. Request a tailored extension with the selected visits and services named.",
    practicalPlanning: {
      timing:
        "Leave an uninterrupted window for a useful town walk and conversation rather than arrive shortly before a host must close. Put a confirmed craft appointment and lunch at the center of the day. Shaxi, a Shibaoshan sector and the county town need separate road and visiting allowances; do not put all of them into a transfer day simply because they share a county. Keep a substantial onward connection separate from the most important appointment where possible.",
      walking:
        "Old lanes and courtyards can involve stone paving, thresholds, steps and standing while looking at details. Ask for a coherent shorter route, seats and a clear vehicle meeting point. A workshop may add stairs, sawdust, machinery or restricted working areas. Shibaoshan introduces mountain paths and further steps, while Qianshishan is another hill-route choice. Assess these separately; a gentle town walk does not establish suitability for a mountain excursion.",
      cost: "Compare the same room, vehicle hours, guide or interpreter, entries and meal basis. A shop introduction, a maker conversation and a participatory class have different costs and expectations. Any materials, finishing, packing and delivery should be stated separately. Buying carved wood requires information about timber, provenance, treatment and destination import rules; a local craft label does not establish export clearance or exempt restricted species.",
    },
    attractions: [
      "Jianchuan Old Town / 剑川古城 for a selected public architectural route",
      "Doors, screens and carved architectural details, with age and repair explained",
      "A woodcarving collection or separately confirmed maker visit in the county",
      "Shaxi / 沙溪 as a distinct valley destination and overnight choice",
      "Selected Shibaoshan / 石宝山 temple or grotto routes, including Shizhongshan where accessible",
      "Jianhu / 剑湖 or Qianshishan / 千狮山 only as separately assessed interests",
    ],
    stays: [
      {
        label: "Town stop / architecture and lunch",
        advice:
          "Choose a coherent public route and one clear subject, with a proper meal and complete onward road journey counted. A confirmed maker can be the main reason for stopping. Avoid describing a brief walk and a shop as comprehensive county coverage.",
      },
      {
        label: "1 night / a more useful town visit",
        advice:
          "Arrive with enough daylight to orient yourself and enjoy dinner. Use the next morning for selected architecture or a dated appointment before the onward drive. Choose the room for sleep and access; a late arrival followed by an early departure adds little cultural time.",
      },
      {
        label: "2 nights / one full day for a defined interest",
        advice:
          "Allow more time for architectural explanation, a genuinely arranged craft session or a selected separate outing. If Sideng and valley evenings are the purpose, compare staying in Shaxi instead. Additional town nights should have a reason beyond the administrative county name.",
      },
    ],
    hotelAreas: [
      {
        name: "Jianchuan Old Town or its immediate edge / an architectural stay",
        advice:
          "Check the named room, evening noise, bathroom, heating, steps and distance from the vehicle. A courtyard can be attractive without offering acoustic privacy or a staffed restaurant. Establish dinner and breakfast before choosing it for a quiet overnight.",
      },
      {
        name: "A county-town hotel / easier pickup and conventional facilities",
        advice:
          "Compare the actual walk or short transfer to the selected streets and collection. Easier luggage access and reliable room facilities can be a useful trade for a less historic setting. Check street noise, meals and the next day's departure route rather than choose by star category alone.",
      },
      {
        name: "Shaxi or a specific rural property / a different visitor base",
        advice:
          "Shaxi rooms serve a valley stay, not a night in Jianchuan Old Town. Other rural or lakeside properties also need their own addresses, meal plans and road assessment. Choose the setting you want to spend time in, then count the journeys to the town, host or mountain sector.",
      },
    ],
    tradeoffs: [
      {
        title: "Read woodwork as part of a building before treating it as a product",
        advice:
          "Look at where the carving sits: a door panel, screen or decorative component has a different purpose from a structural joint. Ask how the design responds to the building and how repair or replacement can be recognized. Similar motifs can have different meanings in context. A short, well-explained doorway can teach more than a long shopping visit, and a carved panel alone does not date the whole house.",
      },
      {
        title: "A maker visit needs a useful question and a willing host",
        advice:
          "Ask to understand a specific process, such as drawing a pattern, rough shaping or finishing, when that work is genuinely taking place. Confirm whether visitors observe, handle a sample or use tools under supervision. A retailer is not necessarily a maker, and a named craft tradition does not guarantee access to a master. Keep photography and purchases by agreement, with buying optional unless the proposal clearly says otherwise.",
      },
      {
        title: "Shibaoshan is a choice of sectors, not a promise to see every carving",
        advice:
          "The wider heritage landscape includes religious buildings and rock-cut art with different approaches. A Shizhongshan grotto interest and a temple-focused visit are not identical routes. Ask which places are open, how they are reached, the remaining climb and any interior photography rules. A useful explanation of selected art can be more rewarding than attempting every stop on the mountain.",
      },
      {
        title: "A lake setting is not automatic recreational access",
        advice:
          "Jianhu is a lake and wetland interest requiring permitted access and seasonal judgment. Choose a public route appropriate to the visitor and local protection rules; do not assume boats, unrestricted shoreline entry, drone permission or guaranteed bird sightings. A lakeside room and a guided nature outing are separate arrangements, each needing its own location and purpose.",
      },
      {
        title: "Stone lions and carved wood explain different crafts",
        advice:
          "Qianshishan's stone-lion interest is a separate hill outing, not evidence of woodcarving activity or an alternative name for Shibaoshan. It needs its own walking and access check. Choose it because sculpture and the setting interest you, rather than add it solely to increase a carving-themed itinerary's stop count.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "heqing",
        advice:
          "Heqing offers a silvercraft subject through a defined Xinhua host or collection, a different material from Jianchuan woodcarving. Each host needs a separate appointment, interpretation and road plan. Keep purchases optional and choose depth rather than consecutive showroom stops; a Caohai landscape interest and any local night require their own arrangements.",
      },
      {
        slug: "shaxi",
        advice:
          "Use Shaxi for Sideng's square, a valley hotel and a deliberately chosen Shibaoshan route. Its guide links to the existing northern Yunnan journey with two Shaxi nights. Compare that real itinerary with a separately agreed Jianchuan town or woodcarving extension; the county relationship does not add those services to the published trip.",
      },
      {
        slug: "dali",
        advice:
          "Dali adds Erhai, Bai village architecture and Cangshan choices. A wider architecture route can compare actual doors, courtyards and material use without assuming one style represents every community. Use the starting Dali room, complete road transfer and host appointment to decide the order, not prefectural proximity alone.",
      },
      {
        slug: "lijiang",
        advice:
          "Lijiang adds a different old-town and Naxi cultural setting, plus mountain choices with their own elevation and weather decisions. Keep the Jianchuan appointment selective and preserve useful arrival time. Do not combine a substantial craft visit with an ambitious mountain excursion on the same onward travel day.",
      },
      {
        slug: "weishan",
        advice:
          "Weishan offers county-town food and Nanzhao context south of Dali, with a separate Weibaoshan temple decision. It can suit a longer regional history journey, but it is not an adjacent Jianchuan neighborhood. Compare the complete sequence and distinct subjects before adding another old-town stay.",
      },
      {
        slug: "nuodeng",
        advice:
          "Nuodeng adds hillside salt-trade history and a different guesthouse and walking decision. Count the full detour, remaining steps and luggage approach. Choose it for that distinct village experience rather than assume every Dali-prefecture heritage destination fits into a single short circuit.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit town walks, with strong sun and cool mornings still possible. Summer rain can make paving and mountain paths slippery and change the usefulness of an outdoor extension. Winter calls for a careful room-heating check and a comfortable indoor place for meals. A craft visit follows the host's working calendar, not a generic festival or seasonal promise. Check the actual route, weather and appointment before organizing a stay around them.",
    orientation:
      "This guide focuses on Jianchuan County's town and a defined woodcarving interest in Yunnan's Dali prefecture. Shaxi lies within the county but is a separate valley destination with its own guide. Shibaoshan, Jianhu and Qianshishan are separate places and route choices. A county-wide administrative name does not make them one scenic area or put all rooms near Sideng. Choose a town-and-woodcarving focus or a separate Shaxi valley stay; combining them needs time for the road as well as the visits.",
    experiences: [
      "Read doors, courtyard details and repair through a selective old-town walk",
      "Understand a specific woodcarving process through a collection or confirmed maker conversation",
      "Choose a distinct Shaxi stay or mountain sector when it adds to the wider journey",
    ],
    planningNotes: [
      "Distinguish the county town, Shaxi valley and individual mountain routes before choosing a room",
      "Confirm the host and type of craft activity before treating a shop visit as a workshop",
      "Keep the complete Dali–Lijiang journey and useful arrival hours in the plan",
    ],
    arrival:
      "Jianchuan town can be considered within a wider road journey between Dali and Lijiang, but the actual stops and hotel addresses determine whether it fits. Shaxi requires a different local approach and its own valley time. From a wider rail or air gateway, include luggage, the complete road journey and the final room access. Do not use a county name as a station instruction or fix a maker appointment immediately after a tightly timed connection.",
    gettingAround:
      "Walk a selected old-town route rather than repeat every lane. Agree the vehicle stopping point and a seated meal before adding a collection or workshop at a separate address. Shaxi, a mountain sector, a maker area and the lake each need a defined road plan. Ask about the last pedestrian section, toilets, seats and weather alternative. A private vehicle does not remove internal stairs or provide permission to enter homes, working spaces or protected shoreline.",
    stayStrategy:
      "For a town-focused overnight, choose the actual room and meal plan before adding atmosphere to the description. Compare a courtyard with an edge or conventional hotel for sleep, heating, bathroom, stairs and luggage access. If the valley is the main purpose, use a Shaxi room and allow a separate town visit only when useful. One comfortable base with clear daily plans can be better than two hotel changes whose only distinction is the name on the listing.",
    firstTimerNote:
      "Choose one object or doorway and ask how it was made, where it belongs and what has changed. That can turn an unfamiliar town into an understandable architectural visit. You do not need to buy furniture or promise a private masterclass to appreciate the tradition. Make a longer stop only when the guide, host and available time can give the subject real depth.",
    faqs: [
      {
        question: "Is Jianchuan worth visiting?",
        answer:
          "Choose Jianchuan town for an architectural walk and a defined interest in woodcarving. A focused stop or useful overnight can add depth to a Dali–Lijiang journey. If valley life and Sideng's square are your priority, compare a Shaxi stay instead rather than add town nights without a separate purpose.",
      },
      {
        question: "Is Jianchuan the same place as Shaxi?",
        answer:
          "No. Shaxi is a valley destination within Jianchuan County; Jianchuan's county town is another place. They share a county, but not the same hotel area or pedestrian center. Use the village or town name and final property address when planning transport and accommodation.",
      },
      {
        question: "What is Jianchuan known for?",
        answer:
          "Travel interests include the county town's architecture and woodcarving traditions, with Shaxi and Shibaoshan as separate destinations within the wider county. A useful visit explains actual buildings, materials and techniques rather than assume every carved object is locally made or every traditional-looking house is unchanged.",
      },
      {
        question: "Can I visit a woodcarving workshop in Jianchuan?",
        answer:
          "A visit requires a willing host and a date-specific arrangement. Confirm the address, language, process being shown and whether the visit is observation, conversation or supervised participation. A retail shop does not establish access to production or a master artisan, and tool use needs its own safety arrangements.",
      },
      {
        question: "How many nights should I spend in Jianchuan?",
        answer:
          "A town stop with lunch can work on a suitable wider route. One useful night adds a more relaxed visit; two nights give a full day for deeper architecture or a confirmed craft interest. If Shaxi is the main reason to come, compare its valley base and allocate those nights separately.",
      },
      {
        question: "Where should I stay for Jianchuan Old Town?",
        answer:
          "Compare a suitable room in or near the old town with a county-town hotel offering easier pickup. Check noise, heating, bathroom, stairs and the final luggage approach. A property in Shaxi is a different valley base even if its listing also uses the name Jianchuan County.",
      },
      {
        question: "Can I combine Jianchuan Old Town and Shibaoshan in one day?",
        answer:
          "A selective combination depends on the starting point, chosen mountain sector, current access and remaining walk. A substantial maker appointment or full onward drive may make it rushed. Choose a meaningful town focus or a limited mountain route rather than promise every county highlight in a single transfer day.",
      },
      {
        question: "Are the Shibaoshan carvings and Qianshishan stone lions the same attraction?",
        answer:
          "No. Shibaoshan's religious and rock-cut-art routes and Qianshishan's stone-lion hill interest are separate places. They also differ from a woodcarving visit. Choose the actual subject and walking route, then confirm access and transport rather than use carving as a reason to treat them as one attraction.",
      },
      {
        question: "Can I bring carved wood home from Jianchuan?",
        answer:
          "Check the timber species, provenance, treatment, packing and export or destination import requirements before buying. Some woods and objects may have restrictions. A small souvenir, a large furniture shipment and an object sold as antique raise different questions; a seller's description alone does not establish clearance or authenticity.",
      },
      {
        question: "Does the published Shaxi tour include Jianchuan Old Town?",
        answer:
          "The existing Yunnan journey includes a Shaxi stay, but a shared county does not make a Jianchuan town or woodcarving visit an automatic inclusion. Read the current route and request any town or maker extension explicitly, with the host, transport, time and fees specified.",
      },
    ],
    culturalStory: {
      title: "A doorway can make a craft tradition understandable",
      paragraphs: [
        "Begin with a doorway or screen and look at its place in the building. Distinguish a carved surface from a structural joint, and ask what the motif, material and scale contribute. A repaired house can still provide an interesting example when old and newer work are explained honestly. This keeps the walk grounded in things the guest can see, rather than turning Bai architectural culture into a list of symbols assumed to have one meaning everywhere.",
        "A maker conversation can carry those questions into the present. Compare a design, an unfinished piece and a finished surface when the host is willing and those stages are available. Ask about the work actually being done and the relationship between hand tools, machinery and finishing. Do not infer an object's age, entirely handmade production or local provenance from a picturesque workshop. The value lies in understanding decisions and skill, with photographs and any purchase by agreement.",
      ],
    },
    foodStory: {
      title: "Give the craft day a good meal, not a compulsory banquet",
      paragraphs: [
        "A straightforward meal of rice, vegetables, tofu and suitable meat dishes can provide the pause an architectural walk needs. Ask which preparations the selected kitchen does well and whether a local tofu dish fits the guest's tastes. Bai banquet traditions sometimes discussed as an eight-bowl meal involve a format and occasion, not a universal lunch available on demand. For a small party, selected dishes may offer a better balance than ordering a large ceremonial spread simply for the label.",
        "Arrange the timing so lunch does not interrupt the maker's agreed session or leave guests eating hurriedly before a long drive. Check stocks, pork, soy, wheat, dairy and shared preparation as relevant, with seasonal ingredients identified by the kitchen. A mushroom dish needs reliable sourcing and preparation; a countryside setting is not a safety assurance. A three-course tea presentation, where genuinely offered, should have a willing host and explanation rather than be treated as an automatic part of every Bai village visit.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / a focused town stop",
        title: "Start with a small, interpretable architectural route",
        description:
          "Complete the road journey and settle luggage if staying. Walk selected public lanes, using one doorway or courtyard detail to explain materials, function and repair. Keep private interiors outside the route unless a specific visit has been agreed.",
      },
      {
        day: "Craft and lunch",
        title: "Give the actual process time",
        description:
          "Use the confirmed collection or host to explore one woodcarving question. Establish what can be seen, photographed or handled, with purchases optional unless clearly agreed otherwise. Follow with a seated meal and enough time before the onward journey.",
      },
      {
        day: "Optional full day",
        title: "Choose a separate subject rather than every county stop",
        description:
          "For a longer stay, select deeper town interpretation, a defined craft session or one separate outing. A Shibaoshan sector needs its own access and walking plan; a lake interest needs permitted public access. If the valley is the priority, compare moving the main stay to Shaxi.",
      },
      {
        day: "Onward travel",
        title: "Let the next base serve a different interest",
        description:
          "Continue to the selected Shaxi, Dali or Lijiang room with the complete transfer counted. Follow the Shaxi guide to review the existing Yunnan itinerary when that valley stay fits. A final tailored proposal should name any Jianchuan extension, room, host, guide language, entries and included services.",
      },
    ],
  },
};
