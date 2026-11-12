import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/heqing.svg",
  alt: "Original Heqing planning schematic comparing Xinhua silvercraft, a permitted Caohai wetland route and county-town or village stays, with full Lijiang transfers; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const heqingGuide: ExpandedDestination = {
  id: "heqing",
  name: "Heqing",
  region: "southwest",
  kicker: "Silvercraft with a purpose, and room to notice the wetland landscape",
  description:
    "Consider Heqing for Xinhua silvercraft and a carefully chosen Caohai wetland visit, with practical advice on maker appointments, silver purchases and a useful overnight.",
  stay: "A focused excursion or 1 useful night; 2 nights for a confirmed deeper interest",
  bestFor: "Silvercraft curiosity, a slower Yunnan extension and an interest-led Lijiang excursion",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["lijiang", "dali", "jianchuan", "shaxi", "weishan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Heqing Travel Guide: Xinhua Silvercraft, Caohai & Stays",
    seoTitle: "Heqing Guide: Xinhua Silvercraft & Where to Stay",
    seoDescription:
      "Plan Heqing in Yunnan for Xinhua silvercraft and Caohai wetland scenery. Compare a Lijiang excursion, local stays, maker visits and silver-buying questions.",
    answer:
      "Heqing, south of Lijiang in Yunnan, is worth considering for Xinhua village's silverworking tradition. A rewarding visit explains a particular process with a willing maker, rather than simply touring shops. Choose a focused excursion or one local night; stay longer for a confirmed craft interest or a suitable wetland outing at Caohai. Check the exact venue before choosing transport. Heqing lies in Dali prefecture, and its Caohai is distinct from other wetlands with the same name.",
    stayAnswer:
      "A focused excursion can suit a Lijiang stay when the full return journey leaves time for the agreed visit and lunch. One useful night can improve the pace and leave room for a morning outing. Two nights give a full day, justified by a meaningful maker appointment, a specific room or a defined wetland interest. There is no need to change hotels for a short shop visit. If no suitable host or nature route is available, compare a shorter stop or more time in your existing Lijiang or Dali base.",
    hotelAnswer:
      "Compare a Heqing county-town room for meals and practical services with a named Xinhua-area property for a more craft-focused setting. A rural or wetland-area room is a separate choice that needs reliable dinner, heating, bathroom comfort and road access. Check the actual bedroom, privacy, noise and distance from the vehicle; a village courtyard does not establish full-service hospitality. Staying in Lijiang and making an excursion can be preferable when a local room does not meet your needs. Use the exact host and route addresses before choosing a base.",
    sightseeingQuestion: "Is a Xinhua silvercraft visit worthwhile if I do not want to shop?",
    sightseeingAnswer:
      "Yes, when the visit is designed around explanation and a willing host or relevant collection. Ask to understand how an actual object is shaped, decorated, joined or finished, with the work shown matched to what is happening that day. Viewing a finished piece, observing production and taking part are separate formats. Agree any hosting or activity fee and keep purchases optional. A retail stop with no interpretation may offer little to a guest who wants to understand the craft rather than buy an object.",
    visitorResources: [
      {
        label: "Heqing county government",
        href: "https://www.heqing.gov.cn/",
        scope:
          "Reference entry point for county background and public notices, mainly in Chinese. Confirm current Xinhua visitor arrangements, individual hosts, public wetland routes and local access through the responsible venue or operator. This reference does not verify a maker appointment, boat outing or bird sighting.",
      },
      {
        label: "Dali prefecture government",
        href: "https://www.dali.gov.cn/",
        scope:
          "Regional context for distinguishing Heqing County from Dali city, Erhai and the Lijiang visitor area. Shared prefectural administration does not establish a short excursion from every Dali hotel or one continuous heritage district.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Compare dated services and the station that suits the full itinerary, including Heqing where relevant. Count station-to-room and station-to-host transfers separately. Lijiang railway station and Lijiang Sanyi Airport are different gateways; neither is an automatic pickup address for every Heqing visit.",
      },
    ],
    serviceScope:
      "A tailored Heqing proposal should name the host or collection, guide language, activity format, pickup and return, meal basis and any chosen wetland route. For silvercraft, agree what will be demonstrated, whether tools are used, safety arrangements, materials and what can be taken away. Ask whether the visit is independent of a purchase and how any retail component works. Private guiding does not guarantee a master artisan, open production rooms or private households. Nature activities need their own permitted route and weather alternative.",
    routeAdvice:
      "Choose Heqing when silverworking or a particular wetland interest adds something distinct to your Yunnan trip. Share your Lijiang hotel, dates, craft interests and available nights; we can compare an excursion with one useful local overnight. A tailored proposal should identify the actual host, room, activity and complete transfers. The existing Dali–Shaxi–Lijiang journey excludes Heqing, so this extension would be planned and priced separately.",
    practicalPlanning: {
      timing:
        "Let a confirmed maker appointment shape the day and leave time for questions rather than schedule a rushed visit before a flight. Put lunch between distinct interests. Add a wetland route only when public access, season and weather support it; the desired light or wildlife may require its own time window. Airport proximity is not a substitute for checking the entire road, activity finish and airline check-in requirement.",
      walking:
        "Village paving, courtyards and workshop thresholds need an actual route check, with seats and toilets identified. Working areas may have noise, sharp tools, heat or fumes; agree where visitors can safely observe. Wetland paths can be exposed, damp or slippery, with sections unsuitable for some walkers. Assess any boat boarding separately if a legal operating activity is genuinely available. A level-looking landscape does not make every path step-free.",
      cost: "Compare guiding, transport, a defined hosting or activity fee, materials and meals on the same basis. A craft session and a shopping stop are different offers. Silver objects may be priced by weight, workmanship, design and seller terms; ask for the actual metal description, itemized price and receipt. A maker's association with Xinhua does not certify every object in a shop. Packing, alteration, shipping and any independent testing are separate decisions.",
    },
    attractions: [
      "Xinhua / 新华 village and a defined silvercraft interest",
      "A willing silversmith or relevant collection with the actual process explained",
      "Heqing county-town streets or a local meal as part of a selective visit",
      "Heqing Caohai / 鹤庆草海 through permitted public routes and seasonal judgment",
      "A named village or rural property chosen for the actual room and setting",
      "A suitable landscape viewpoint without assuming boat, drone or protected-area access",
    ],
    stays: [
      {
        label: "Focused excursion / a craft subject and lunch",
        advice:
          "Choose a willing host or interpretable collection and include the full return to the actual hotel. Keep the visit worthwhile without purchases. If the main purpose is a brief look at a showroom, reassess whether the journey adds enough to the trip.",
      },
      {
        label: "1 useful night / less pressure on the day",
        advice:
          "Choose a suitable local room when it improves the appointment and onward sequence. Leave time to enjoy dinner and a morning interest. Do not add an overnight solely because a map places Heqing between two better-known destinations.",
      },
      {
        label: "2 nights / a defined full day",
        advice:
          "Allow deeper craft explanation or a specific, permitted seasonal nature plan, with an appropriate room and meals. Do not fill a second day with repeated retail visits. If the property or activities do not justify the time, a shorter stop may be the better choice.",
      },
    ],
    hotelAreas: [
      {
        name: "Heqing county town / practical services and meals",
        advice:
          "Compare the actual room, evening food and trips to Xinhua or the chosen landscape route. Check noise, heating, hot water, bed and pickup access. A county-town base can simplify meals without putting every host or wetland entrance within walking distance.",
      },
      {
        name: "A named Xinhua-area property / a craft-focused stay",
        advice:
          "Choose for the room, village setting and actual appointment plan. Confirm bathroom privacy, staffing, breakfast, dinner, luggage and workshop distance. An attractive courtyard is not proof of quiet sleep or a silversmith receiving guests next door.",
      },
      {
        name: "A specific rural room or a Lijiang base / different tradeoffs",
        advice:
          "A rural room requires its own food, temperature and road check. A Lijiang hotel can preserve familiar services while adding a complete excursion. These are different locations and service models; compare them against the guest's comfort and the full daily journey.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose the process before the showroom",
        advice:
          "A silversmith may be shaping, chasing a surface, joining components or finishing a piece, but not every stage will be active during a short visit. Start with the actual object and ask which work can be explained. A demonstration arranged for visitors can still be useful when described honestly; it is different from unrestricted access to a working studio or making a complete vessel yourself.",
      },
      {
        title: "Silver color and a stamped number are not independent authentication",
        advice:
          "Ask whether an item is solid silver, an alloy or plated, what fineness is claimed and what evidence supports that description. Compare weight and workmanship alongside the stated metal, and keep the receipt and seller terms. A stamp or attractive story alone does not independently verify purity, age or provenance. For a significant purchase, consider appropriate independent testing and understand the limits of any certificate.",
      },
      {
        title: "A silver vessel needs a use question as well as an appearance question",
        advice:
          "For a cup or kettle, ask about food-contact suitability, joins, linings, care and whether heating is intended. A decorative object is a different product from everyday tableware. Do not infer health benefits, water purification or safe use from the word silver. A maker visit should improve understanding, not turn an unsupported wellness claim into a reason to buy.",
      },
      {
        title: "Caohai is a place-specific wetland visit, not a guaranteed bird show",
        advice:
          "Specify Heqing's Caohai rather than another location with the same name. Use permitted public paths or a properly confirmed operator when an activity is proposed. Water levels, vegetation, weather and wildlife change; no bird species or sighting should be guaranteed. Protected sections, reed beds and private land are not open shortcuts. Do not assume a photograph of a boat proves a current visitor service.",
      },
      {
        title: "Heqing is a deliberate extension, not a compulsory stop on every Yunnan route",
        advice:
          "Compare the actual Dali, Shaxi and Lijiang hotel sequence. A craft appointment, wetland detour or local overnight can materially change the transfer day. If the guest has little interest in silverwork, more time in a valley or old-town base may be preferable. A county's location near a gateway does not make every outing compatible with a tight departure.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "lijiang",
        advice:
          "Compare a complete Heqing excursion from your Lijiang hotel with a local overnight. Dayan, Shuhe and an outlying resort create different starting journeys. Keep any Jade Dragon Snow Mountain or gorge plan on its own schedule, and confirm a separate Heqing extension rather than assume it is included in a published Lijiang stay.",
      },
      {
        slug: "dali",
        advice:
          "Dali adds Erhai, village architecture and Cangshan choices. A broad material-culture route can compare selected interests without promising every craft or village in one day. Start with the actual Dali room and complete transfer, not shared prefectural geography, when deciding whether Heqing fits.",
      },
      {
        slug: "jianchuan",
        advice:
          "Jianchuan offers a woodcarving and town-architecture subject, a useful material contrast to silverwork when the guest genuinely wants both. Each maker needs a separate appointment and road plan. Do not turn two craft interests into consecutive compulsory shopping visits or infer a shared host.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi offers Sideng's square and a distinct valley stay. Its guide links to the existing northern Yunnan itinerary, which does not automatically include Heqing. Preserve useful valley time and compare the complete detour before adding a silvercraft visit on the onward day.",
      },
      {
        slug: "weishan",
        advice:
          "Weishan adds food and Nanzhao context south of Dali, with a separate Weibaoshan temple choice. It belongs to a longer regional plan rather than an adjacent Heqing outing. Choose the different cultural questions and useful nights before adding another county base.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit village and landscape visits, with sun exposure and cool mornings still important. Summer rain may change public paths, wetland conditions and outdoor comfort. Winter requires a heating and meal-service check for small properties. Wetland vegetation and birds are seasonal and variable; choose a specific nature interest with current local guidance rather than assume winter automatically guarantees sightings. The silversmith's availability follows the actual working calendar.",
    orientation:
      "Heqing / 鹤庆 is a county within Dali prefecture in Yunnan, south of Lijiang. The county town, Xinhua village and the chosen Caohai access point are separate addresses. For a short visit, choose a silverworking appointment or a permitted wetland route as the main purpose, then check whether the two fit without rushing. Xinhua and Caohai are names used elsewhere in China, so pair them with Heqing, Yunnan and the final Chinese address. Lijiang city, its airport and its railway station are distinct gateways and transfer decisions.",
    experiences: [
      "Understand how a silver object is shaped and decorated through a defined visit",
      "Consider a permitted wetland route when its season and access fit the day",
      "Enjoy a local meal and a comfortable pace without obligatory purchases",
    ],
    planningNotes: [
      "Agree the host, activity format and purchase expectations before confirming the visit",
      "Distinguish claimed silver purity, workmanship and independent authentication",
      "Count the full hotel, host and gateway journeys before attaching an excursion to a departure",
    ],
    arrival:
      "Compare the complete road journey from the selected Dali, Shaxi or Lijiang hotel, or dated rail services to an appropriate station such as Heqing where the itinerary supports it. Lijiang Sanyi Airport is another gateway requiring its own pickup and check-in plan. A host's address and the final hotel matter more than a county name. Leave a realistic buffer before a flight or train instead of treating a supposedly nearby craft stop as time-free.",
    gettingAround:
      "Use a defined road plan between the county town, Xinhua, the chosen room and any permitted wetland route. Walk manageable public village sections with seats, toilets and a vehicle meeting point agreed. A retail street, a working studio and a protected waterside path have different visitor conditions. Ask about the final approach and weather alternative. Private transport connects the places but cannot open workshops or provide access to closed wetland sections.",
    stayStrategy:
      "Choose one useful night only when the room and available hours improve the trip. A county-town hotel may simplify meals; a named Xinhua-area stay may support a particular host; a rural room needs a stronger setting and service check. Compare all of them with keeping a suitable Lijiang hotel and making an excursion. Sleep, hot water, heating, bathroom privacy, luggage access and a reliable dinner are more useful evidence of comfort than a luxury label attached to a village address.",
    firstTimerNote:
      "Arrive with a question about an object rather than a requirement to buy something. Ask how its shape is made, which work is done by hand and what the finish changes. A small number of well-explained stages can make a rewarding visit. If no host or collection can support that interest, shorten or reconsider the stop rather than replace the promised craft depth with a succession of showrooms.",
    faqs: [
      {
        question: "Is Heqing worth visiting?",
        answer:
          "Choose Heqing when Xinhua silvercraft or a defined wetland interest genuinely appeals. A focused excursion or one useful night can work with a suitable host and complete transport plan. It is an interest-led extension rather than a necessary stop on every Dali–Lijiang itinerary.",
      },
      {
        question: "What is Xinhua village known for?",
        answer:
          "Xinhua in Heqing, Yunnan is associated with silverworking. A useful visit distinguishes the actual maker, process and finished objects from general retail. Viewing, observing a demonstration and participating are separate experiences, each needing clear arrangements.",
      },
      {
        question: "Can I visit a silversmith without buying anything?",
        answer:
          "Yes when a willing host or relevant collection offers an appropriately arranged visit. Agree any hosting fee, language, subject and activity in advance, with purchases optional. A showroom visit with no explanation is a different proposition from a defined craft conversation.",
      },
      {
        question: "Can I make a silver object in Xinhua?",
        answer:
          "Only through an actual supervised activity offered by a willing host. Confirm the object, tools, materials, safety, finishing time and what can be taken away. A workshop visit does not automatically include participation or the ability to complete a complex cup or vessel during one short session.",
      },
      {
        question: "How do I judge a silver purchase in Heqing?",
        answer:
          "Ask for the metal description, claimed fineness, weight, workmanship basis, receipt and return terms. Solid silver, alloy and plated objects differ. A stamp or seller story alone is not independent verification; significant purchases may warrant appropriate testing and a clearer provenance record.",
      },
      {
        question: "Can Heqing be a day trip from Lijiang?",
        answer:
          "A focused excursion can work when the actual hotel, host and full return journey leave useful visiting and meal time. Confirm a desired appointment before planning the day. Do not add a mountain excursion or tight airport departure merely because the places appear near each other on a map.",
      },
      {
        question: "How many nights should I stay in Heqing?",
        answer:
          "One useful night may improve a craft appointment and allow a morning interest. Two nights need a meaningful full-day plan and a suitable property. For a brief visit, keeping a comfortable Lijiang room and making an excursion may avoid an unnecessary hotel move.",
      },
      {
        question: "Can I see birds or take a boat at Heqing Caohai?",
        answer:
          "Birds, water and vegetation vary with season and conditions, so sightings are not guaranteed. Use permitted public access. A boat outing requires a current, legitimate operator and appropriate weather; neither an old photograph nor the wetland name establishes an operating service.",
      },
      {
        question: "Where should I stay for Xinhua silvercraft?",
        answer:
          "Compare a named Xinhua-area room with a Heqing county-town hotel, and consider a Lijiang excursion as another option. Check the actual host address, meals, heating, bathroom, noise and luggage approach. A village location alone does not establish comfort or a workshop appointment.",
      },
      {
        question: "Does the existing Yunnan tour include Heqing?",
        answer:
          "The published northern Yunnan route includes Dali, Shaxi and Lijiang, but Heqing is not an automatic inclusion. Request an explicit extension with the host, room if needed, transfers, activity format and fees specified. Nearby geography does not add a silvercraft visit to the existing product.",
      },
    ],
    culturalStory: {
      title: "Follow one object from shape to surface",
      paragraphs: [
        "A silvercraft visit becomes easier to understand when the host begins with one object: a vessel, small ornament or component whose form and decoration can be seen clearly. Ask which stages shaped it, where components join and how the final surface is produced. A finished piece and an unfinished example can reveal different decisions. The point is to understand actual work, not to assume every item in the room was made there or entirely by hand.",
        "Xinhua is a place where people live and work as well as a visitor destination. Observe agreed working areas, ask before close photographs and keep access to homes separate. A demonstration can be valuable when its purpose is clear; a specialist or family meeting needs its own willing host. Let the conversation serve the guest's curiosity, with any retail element transparent and no suggestion that buying is the price of respectful interest.",
      ],
    },
    foodStory: {
      title: "Let lunch support the visit rather than become a sales interval",
      paragraphs: [
        "Choose a seated meal for the kitchen's actual strengths and the time available between the craft appointment and onward journey. Rice, suitable vegetables, tofu and a preferred protein can make a balanced lunch without an invented must-eat list. Ask which dishes are prepared that day and agree portions, spice and any stocks. A village address does not guarantee a private household meal or a ceremonial banquet.",
        "For an overnight, confirm dinner and breakfast before arriving at a small property; a rural setting can offer fewer late alternatives than a city base. Discuss soy, wheat, pork, dairy and shared preparation as relevant. The silvercraft theme should not become an unsupported claim that a vessel makes food or water healthier. If tea is served, enjoy the conversation while keeping the drink, the craft explanation and any object purchase as distinct choices.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / start of an excursion",
        title: "Reach the agreed host with time to settle",
        description:
          "Complete the journey from the actual hotel or gateway and leave luggage where appropriate. Begin with a short public village orientation, then confirm the visit's purpose and what is available to see. Keep private homes and active working areas outside the route unless access is agreed.",
      },
      {
        day: "Main craft visit",
        title: "Understand a process before considering a purchase",
        description:
          "Follow a selected object or available stage with clear English explanation. Keep observation, participation and buying distinct. Confirm metal descriptions and terms for any purchase, then take an unhurried meal rather than schedule repeated showrooms.",
      },
      {
        day: "Optional landscape or overnight",
        title: "Choose the wetland for its actual conditions",
        description:
          "Use a permitted Caohai route when access, weather and season suit the group, with no boat or wildlife guarantee. Otherwise shorten the outdoor section or enjoy the room and a suitable local alternative. An overnight should improve pace and comfort, not merely add another hotel name.",
      },
      {
        day: "Return / onward travel",
        title: "Preserve the complete connection",
        description:
          "Return to Lijiang or continue to the selected next base with the full road plan and departure buffer counted. Consult the Dali, Shaxi and Lijiang guides for the existing wider Yunnan journey. The final Heqing extension should identify its host, room, interpretation, transport and included services separately.",
      },
    ],
  },
};
