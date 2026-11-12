import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/meizhou.svg",
  alt: "Original Meizhou planning schematic distinguishing a city base, a selected Hakka house and a separate countryside property; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const meizhouGuide: ExpandedDestination = {
  id: "meizhou",
  name: "Meizhou",
  region: "south",
  kicker: "Understand Hakka houses through the lives and choices behind them",
  description:
    "Plan Meizhou for Hakka architecture, regional history and a thoughtful meal, with city versus countryside stays and clear distinctions between weilong houses and Fujian tulou.",
  stay: "2–3 nights for a focused Hakka cultural stay",
  bestFor: "Hakka architecture, regional food and carefully interpreted countryside visits",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["heyuan", "dabu", "fujian-tulou", "chaozhou", "huizhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Meizhou Travel Guide: Hakka Houses, Food & Stays",
    seoTitle: "Meizhou Guide: Hakka Houses, Food & Stays",
    seoDescription:
      "Plan Meizhou's Hakka houses and food: understand weilongwu vs Fujian tulou, choose city or countryside hotels, and compare two- or three-night cultural stays.",
    answer:
      "Meizhou (梅州) is a prefecture-level city in northeastern Guangdong closely associated with Hakka history, language and architecture. A focused visit pairs a clear introduction to Hakka culture with a selected house or village and a regional meal. Weilongwu (围龙屋), often translated as dragon-enclosing houses, are not simply another name for Fujian's tulou. Look at the actual building's layout, construction and present use rather than assume every Hakka house is round or open to visitors. Two nights give one full day; three allow a distinct countryside or learning interest. Meizhou's urban base, Meixian-area villages and a particular Yannanfei-area property require different roads and overnight choices. For a short stay, choose one well-explained house or village rather than several similar stops.",
    stayAnswer:
      "Two nights support one full day combining a selected museum or historical introduction, an appropriate house visit and a properly paced meal when the real locations fit. Three give a second full day for a distinct village, countryside stay or confirmed learning session. One night can be a selective stop with convenient transport, but not a comprehensive Hakka journey. Additional nights should deepen a specific subject or improve comfort rather than repeat similar house entrances. Count separate Dabu, other county or Fujian routes with their own useful time.",
    hotelAnswer:
      "Compare a named hotel in the Meizhou urban area for meals, museums and practical pickup with a specific countryside property chosen for its actual setting and service. Meijiang, Meixian and a tourism label such as Yannanfei are not interchangeable neighborhood instructions. Check the exact address, booked room, bathroom, temperature control, dampness, noise, stairs, luggage and breakfast. A heritage house can be worth visiting without being the best place to sleep. A tea-themed resort does not establish a producer appointment or meaningful processing visit; those need their own arrangement.",
    sightseeingQuestion: "Should I choose Meizhou Hakka houses or Fujian Tulou?",
    sightseeingAnswer:
      "Choose Meizhou when Hakka regional history, weilong house layouts and a broader city-and-countryside introduction are the main interests. Choose a named Fujian Tulou cluster when the particular earthen communal buildings and village setting are the reason to travel. Neither is a substitute for all Hakka culture, and not all tulou residents or buildings can be explained by one community label. Both can reward a considered comparison when the transport and nights justify it. With limited time, select one place and interpret its actual buildings well instead of rushing between regions to collect shapes.",
    visitorResources: [
      {
        label: "Meizhou municipal government",
        href: "https://www.meizhou.gov.cn/",
        scope:
          "Municipal background and dated notices, mainly in Chinese. Check the exact museum, house, village, public visitor route and responsible provider for the proposed dates. A regional heritage description does not establish household consent, open interiors, a particular room or a tea host.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and the exact ticketed station, then the complete road to the named hotel. Meizhou and Meizhou West are different station references. A fast rail segment does not establish a short final transfer to a rural house or property.",
      },
    ],
    serviceScope:
      "A proposal should identify the actual hotel and room, gateway, complete roads, guide language, museum or public house visits, meals and admissions. Specify what the guide will explain about the chosen building. A resident conversation, household meal, ancestral research, tea host or hands-on session needs a willing participant and its own confirmed format. Public village access does not open private rooms or ceremonial spaces. Private guiding does not authenticate family ancestry, guarantee an original interior or make a working tea venue available. Clarify voluntary purchases and agree an alternative if the essential host or building cannot be visited.",
    routeAdvice:
      "Fujian Tulou offers a separate architectural comparison with named clusters and its own road and hotel decisions. Chaozhou adds a different eastern Guangdong old-city, bridge and Teochew food subject. Huizhou offers another city, mountain or coastal choice farther southwest. Give each a distinct role and check the complete connection rather than infer convenient transfers from a regional map. No matching published Meizhou product is recommended here. Share dates, gateways, house or family-history interests, mobility, dietary needs and room expectations for a tailored plan with a clear reason for each visit.",
    practicalPlanning: {
      timing:
        "Begin with the actual museum opening and selected house access, then arrange a coherent route with meals and rest. A museum, public village lane and privately occupied building have different visiting terms. Do not protect a distant house visit only with an optimistic arrival estimate. For a countryside day, include both roads and the final approach. Keep the complete station or airport transfer visible on departure rather than adding another village merely because it appears nearby on a map.",
      walking:
        "Review thresholds, courtyard surfaces, steps, low light, narrow passages and village lanes at the actual house. A short geographic distance can involve difficult footing or a vehicle-free final stretch. Ask about toilets, seating, shade and a shorter alternative. Upper floors and private rooms are not automatically available. A rural property needs the same luggage and stair assessment as the visit itself; a scenic approach does not establish step-free access.",
      cost: "Compare booked rooms, complete transport, guide expertise and language, museum or house admissions, meals and actual host preparation. A specialist architectural explanation, a household visit and a simple exterior stop are different services. Clarify sales relationships around tea and other purchases. Paying more should improve interpretation, time, sleep and access that can legitimately be arranged, not imply unrestricted family hospitality or verified ancestry.",
    },
    attractions: [
      "A selected Hakka museum introduction, including China Hakka Museum under current arrangements",
      "A named, publicly accessible weilong house or village route with layout explained",
      "A selected Yannanfei-area countryside or tea interest, with the actual venue checked",
      "An appropriate Qiaoxi village visit as a distinct route and consent decision",
      "A thoughtfully ordered Hakka meal with ingredients and preparation explained",
    ],
    stays: [
      {
        label: "1 night / a selective cultural stop",
        advice:
          "Choose the principal subject and protect its actual visiting window. A late arrival and early departure do not leave a meaningful house-and-museum day. Keep meals and pickup simple rather than try to complete the municipality in one short stay.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Use one dependable base for a clear introduction, selected architecture and a regional meal. Match the actual museum and house locations before promising both. Time to understand a building is more useful than visiting several similar entrances without explanation.",
      },
      {
        label: "3 nights / a distinct countryside or learning day",
        advice:
          "Add a different village, properly arranged tea subject or useful property time. Keep each day's purpose clear. A third night should deepen the stay or improve pacing, not guarantee a private household, live production or multiple distant county visits.",
      },
    ],
    hotelAreas: [
      {
        name: "Meizhou urban area / culture and practical services",
        advice:
          "Choose the exact room for quiet, bathroom, heating or cooling, breakfast and pickup, with the roads to the selected museum and house. Compare Meijiang and Meixian addresses on actual convenience. A practical city hotel can support a richer countryside day without being sold as a rural retreat.",
      },
      {
        name: "A specific Yannanfei-area or countryside property / setting-led stay",
        advice:
          "Assess the booked room, dampness, sound, indoor comfort, food, final road and rainy-day alternative. A garden or tea view does not establish access to a maker. Choose the property because time there improves the holiday, not because all rural accommodation is assumed to be boutique luxury.",
      },
      {
        name: "A heritage-house stay / separately assessed accommodation",
        advice:
          "Check the exact operating property, room, bathroom, privacy, fire and access arrangements, stairs, luggage and host availability. Visiting a significant building and sleeping in it are different decisions. If the room cannot meet the guest's needs, retain a comfortable base and a thoughtful daytime visit.",
      },
    ],
    tradeoffs: [
      {
        title: "A weilong house should be read through its actual plan",
        advice:
          "A common pattern combines halls and lateral spaces with a curving rear enclosure, sometimes considered with an open front space or pond. Examples vary. Ask the guide to identify the actual building's circulation, household relationships, material and changes rather than infer a complete history from an aerial shape. Not every named Hakka residence follows the same form.",
      },
      {
        title: "Weilongwu and tulou are not interchangeable terms",
        advice:
          "The terms emphasize different architectural traditions and characteristics. Fujian tulou include different shapes and communal arrangements; Meizhou's houses also vary. A useful comparison names particular buildings, materials and layouts rather than claim all Hakka houses are circular fortresses. Shared cultural associations do not establish identical construction or visitor access.",
      },
      {
        title: "Qiaoxi and other villages need a selected subject",
        advice:
          "Choose the actual buildings, paths and stories that justify the road. Overseas connections, household history and later changes should be explained from evidence specific to the place. A public lane, ticketed building and privately occupied room have different boundaries. A village visit should not depend on uninvited residents providing hospitality or portraits.",
      },
      {
        title: "Yannanfei is not a guarantee of a tea-learning appointment",
        advice:
          "A landscape, hotel, tasting counter and producer session are different offers. Confirm the actual venue, identified tea, language and learning question. Live work follows the producer's real schedule and conditions. A well-prepared tasting can be worthwhile without staging a harvest, while an attractive tea-themed room may offer no specialist learning at all.",
      },
      {
        title: "Hakka identity is more varied than one migration story",
        advice:
          "Language, family histories, place and contemporary choices differ across communities. A museum introduction can provide context, but should not turn every resident into an example of an unchanged past. For ancestral interests, prepare names, Chinese characters and available records. Guiding is not a guarantee that a specific family connection or home can be found.",
      },
      {
        title: "Premium planning should improve the experience of looking and listening",
        advice:
          "Relevant interpretation, manageable approaches, good sleep and a well-timed meal provide tangible value. A private car cannot eliminate every threshold or authorize entry to a home. If the actual rural rooms are unsuitable, a comfortable city stay with fewer, better-explained visits can be the stronger choice.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "heyuan",
        advice:
          "Heyuan provides a contrasting reservoir and fossil-museum chapter, with selected Dongyuan Hakka village interests when they add a specific architectural question. Compare exact bases and full roads. Shared cultural interests do not make every village the same building type or turn the two municipalities into one local excursion.",
      },
      {
        slug: "dabu",
        advice:
          "Dabu’s dedicated guide compares Tai’an Lou, Hua’e Lou and selected Baihou subjects, with a Huliao base or a selective excursion. Choose a clear architectural difference and the full roads before adding another house. Dabu lies in Guangdong; a tulou reference does not place its buildings within the Fujian World Heritage property.",
      },
      {
        slug: "fujian-tulou",
        advice:
          "Choose a named Fujian cluster for a specific architectural comparison. Its buildings, village approach and accommodation require their own assessment. Shared Hakka interests do not make the connection local, and Meizhou's weilong houses should not be described as a substitute name for Fujian tulou.",
      },
      {
        slug: "chaozhou",
        advice:
          "Chaozhou adds Guangji Bridge, an old-city stay and distinct Teochew food and tea questions. Compare actual transport and useful nights before combining the cities. Give the cultures and cuisines their own explanation rather than flatten eastern Guangdong into one generic tradition.",
      },
      {
        slug: "huizhou",
        advice:
          "Huizhou provides a different Guangdong city, mountain or coastal base decision. Choose the actual purpose and complete road or rail connection. It is not a local hotel alternative for Meizhou's houses, and its regional guide does not supply a Hakka host or village appointment here.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for village walking, with actual heat, rain and holiday demand checked. Wet weather changes footing, house approaches and the comfort of rural rooms. Summer plans need shade, seated pauses and shorter outdoor blocks. Tea work follows the actual venue and weather rather than a guaranteed calendar. Select dates around the principal interests and a property that works indoors as well as in its promotional photographs.",
    orientation:
      "Meizhou is a large prefecture-level municipality in northeastern Guangdong. Its urban base, Meixian-area villages, Yannanfei and Qiaoxi visits require actual addresses and full roads. Dabu and other counties need separate local routes and enough time beyond the urban visit. Hakka is a cultural and linguistic identity across many places, not one style of village or a synonym for all residents of eastern Guangdong. Use full Chinese property and entrance names to distinguish the booked places from broad tourism labels.",
    experiences: [
      "Understand a selected Hakka house through layout, material and present use",
      "Connect regional history with a museum introduction and specific village evidence",
      "Enjoy an explained Hakka meal and a comfortable city or countryside base",
    ],
    planningNotes: [
      "Name the actual house and current public route before fixing the day",
      "Compare city services and countryside rooms using complete roads and real facilities",
      "Keep private households, tea sessions and ancestral research separately arranged",
    ],
    arrival:
      "Compare actual dated trains, including the exact Meizhou or Meizhou West station on the ticket, with any proposed flight gateway and complete hotel transfer. A regional arrival does not place the guest at a particular rural house. Send the Chinese hotel and visitor entrance addresses for pickup. Keep an essential host appointment away from uncertain arrival, allow a realistic final road and luggage approach, and protect the full departure transfer before adding another countryside stop.",
    gettingAround:
      "A planned vehicle can link the city, museum and selected countryside subject, but final village paths and house interiors remain on foot. Agree exact walking starts, finish, seating, toilets and pickup. Cultural guiding, driving and a resident's participation are distinct roles. Do not enter private rooms, ancestral spaces or working tea areas without appropriate permission. A shorter route with specific interpretation can be more rewarding than continuous driving between several houses.",
    stayStrategy:
      "Two nights suit one focused day; three can add a distinct countryside or learning purpose. Begin with a dependable city base unless the actual rural property earns its place through setting, room and service. Review bathroom, climate control, dampness, quiet, luggage and meals. Keep visit and accommodation decisions separate: an important house need not be a suitable hotel. A premium proposal should explain the comfort and learning it can deliver rather than rely on a heritage label.",
    firstTimerNote:
      "Ask the guide to show how one building works before asking how many houses you can visit. Where do people enter, gather, cook or worship, and what has changed? Those questions give a more useful introduction than a string of dramatic building names. Pair the architecture with a clear food subject and enough time for a proper meal, keeping private access and family-history research distinct.",
    faqs: [
      {
        question: "What is Meizhou worth visiting for?",
        answer:
          "A focused stay can combine Hakka regional history, a selected weilong house or village, and an explained meal. Its value lies in understanding particular buildings and lives, not simply collecting old-house photographs. Choose two or three nights when the actual transport and interests justify them.",
      },
      {
        question: "What is a weilong house?",
        answer:
          "Weilongwu is often translated as dragon-enclosing house. A common form combines halls and lateral spaces with a curving rear enclosure, though buildings vary. A useful visit explains the particular layout, construction, household relationships and later changes rather than infer everything from its outline.",
      },
      {
        question: "Are Meizhou Hakka houses the same as Fujian Tulou?",
        answer:
          "No. Weilongwu and tulou are not interchangeable names. Compare named examples by layout, construction and use; neither all Hakka houses nor all tulou are round. Each destination needs its own route and current visitor arrangements.",
      },
      {
        question: "How many nights should I spend in Meizhou?",
        answer:
          "Two nights give one full day for selected culture, architecture and food when the locations fit. Three allow a distinct countryside or confirmed learning day. One night is a selective stop, and additional county or Fujian travel should be planned separately.",
      },
      {
        question: "Should I stay in Meizhou city or the countryside?",
        answer:
          "Use a dependable city hotel for practical meals and cultural visits, or choose a specific rural property when its setting and actual room improve the stay. Check full roads, bathroom, climate control, dampness, quiet and luggage access. A heritage-house visit does not require sleeping there.",
      },
      {
        question: "Does a Yannanfei stay include a tea producer visit?",
        answer:
          "Not automatically. A hotel, garden setting, tasting and producer appointment are separate offers. Confirm the actual host, product, language, format and work underway before treating tea learning as an inclusion.",
      },
      {
        question: "Can you arrange Hakka ancestral research or a home visit?",
        answer:
          "Those require a separately assessed project, available records and willing participants. Prepare names, Chinese characters, places and dates. Ordinary cultural guiding does not guarantee a family connection, private household entry or access to ancestral records.",
      },
      {
        question: "Which published Meizhou tour is recommended here?",
        answer:
          "No matching published product is recommended. A tailored proposal should name the hotel, transport, guide, actual house or museum route, meals and any confirmed host. The sample outline is not a package or private-access guarantee.",
      },
    ],
    culturalStory: {
      title: "A house plan becomes meaningful when it explains relationships",
      paragraphs: [
        "An architectural visit should move from a recognizable form to the way people used it. A hall, courtyard, lateral room and rear enclosure each invite questions about gathering, household life, work and ritual. The answers need to come from the actual building and available evidence, not a rule applied to every Hakka residence. Construction material, repairs and changed use also matter. A restored house can teach a great deal when its history is explained honestly; an impressive silhouette alone cannot establish its age or original condition.",
        "Migration and overseas links form important parts of many family histories, but no single narrative explains all Hakka communities. A thoughtful museum and village visit makes room for language, education, contemporary livelihoods and residents' own decisions about tourism. Public access to a village is different from an invitation into a household or ancestral space. Let people decide whether to speak, be photographed or host visitors. Careful interpretation and time to listen create cultural depth without inventing personal connections.",
      ],
    },
    foodStory: {
      title: "Explain the preparation rather than make the meal a checklist",
      paragraphs: [
        "Stuffed tofu, salt-baked chicken and preserved-vegetable dishes are useful Hakka food references, with substantial variation by kitchen. Ask what fills the tofu, how the chicken is prepared and how a preserved ingredient changes flavor and texture. A dish name does not establish one universal recipe or sourcing claim. Order a balanced table with vegetables, a staple and portions that suit the group rather than prescribe every famous dish. Tea, if chosen, can have its own identified product and brewing question.",
        "Stuffed tofu may contain meat or seafood, chicken preparations and stocks vary, and a vegetable dish may not be vegetarian. Discuss soy, wheat, eggs, peanuts, sesame, dairy and shared preparation as relevant. Serious allergies and strict dietary needs require the actual kitchen's confirmed capacity and a practical alternative. Agree dinner at a rural property and breakfast before a road day. A comfortable meal at the right time is part of a high-quality cultural journey, not an afterthought between house visits.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / one suitable base",
        title: "Settle and define the cultural questions",
        description:
          "Complete the actual gateway road, check the booked room and enjoy an uncomplicated meal. Review the chosen museum, house and current access. A short local introduction can fit if time allows, but protect an essential host from uncertain arrival.",
      },
      {
        day: "Full day 1 / history and one architectural subject",
        title: "Understand a building rather than count entrances",
        description:
          "Use the selected museum introduction and an appropriate named house route when the actual roads and opening permit. Explain the layout, construction, present use and evidence for change. Keep a proper meal, rest and a shorter walking option visible.",
      },
      {
        day: "Optional full day 2 / three-night stay",
        title: "Add a different countryside interest",
        description:
          "Consider an appropriate Qiaoxi visit, a confirmed tea-learning subject or useful property time according to interests and conditions. These are alternatives, not compulsory additions to every day. Household access, live production and specialist sessions need their own arrangements.",
      },
      {
        day: "Departure / another distinct regional chapter",
        title: "Allow the complete onward journey",
        description:
          "Leave time for breakfast, bags and the actual station, airport or next-hotel transfer. Fujian Tulou, Chaozhou and other counties need their own useful stays. This outline is illustrative, not a published package, ancestry finding or guarantee of hosts, interiors and current access.",
      },
    ],
  },
};
