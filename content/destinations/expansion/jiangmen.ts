import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jiangmen.svg",
  alt: "Original Jiangmen planning schematic separating Pengjiang city heritage, Xinhui chenpi learning and a dedicated Kaiping chapter; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const jiangmenGuide: ExpandedDestination = {
  id: "jiangmen",
  name: "Jiangmen",
  region: "south",
  kicker: "Overseas Chinese history, riverside arcades and the craft of chenpi",
  description:
    "Explore Jiangmen through Wuyi emigrant history, a selected old-city walk and Xinhui aged citrus peel, with clear choices between city, Xinhui and Kaiping stays.",
  stay: "2–3 nights for city heritage and a distinct Xinhui day",
  bestFor: "Overseas Chinese history, food culture and thoughtful western Pearl River Delta routes",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["heshan-guangdong", "enping", "taishan-guangdong", "kaiping", "foshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jiangmen Travel Guide: Wuyi Heritage & Xinhui",
    seoTitle: "Jiangmen Guide: Wuyi, Xinhui & Stays",
    seoDescription:
      "Plan Jiangmen's overseas Chinese heritage, riverside arcades and Xinhui chenpi. Compare city bases, two- or three-night stays and a separate Kaiping extension.",
    answer:
      "Jiangmen (江门) is a city and wider municipality in the western Pearl River Delta, Guangdong, with a strong connection to overseas Chinese migration. A worthwhile city stay can combine Wuyi history, a selected Changdi riverside arcade walk and regional food; Xinhui (新会) adds a distinct interest in chenpi, aged dried citrus peel used in cooking and drinks. Pengjiang city, Xinhui and Kaiping are different bases with different roads. Two nights give one full local day; three can separate city heritage from a substantial Xinhui outing. Kaiping's diaolou villages deserve their own route and often their own nights. This guide develops Jiangmen city and Xinhui choices rather than counting every place in the municipality as one compact attraction.",
    stayAnswer:
      "Two nights work for one focused city or Xinhui day between arrival and departure. Three provide two full days, allowing overseas Chinese history and an old-city walk to sit apart from a confirmed chenpi visit or selected landscape outing. A one-night stop can work with convenient transport and a modest scope. A day trip from Guangzhou or Foshan needs a clear purpose and enough time after both gateway transfers. If Kaiping is important, plan its villages separately instead of spending the same short stay repeatedly driving back to a Jiangmen city hotel.",
    hotelAnswer:
      "Compare Pengjiang for city services and selected heritage visits, a particular Xinhui hotel for a Xinhui-led plan, and a separate Kaiping property when diaolou villages are the priority. Use exact addresses and full roads. Assess quiet, bathroom, temperature control, breakfast, luggage access and evening meals. A room in an arcade district may have stairs or nighttime activity; a modern city hotel may offer more predictable comfort. Jiangmen station is not the center of every itinerary, and an address labeled Jiangmen does not establish proximity to the Kaiping villages.",
    sightseeingQuestion: "Should I choose Jiangmen city, Xinhui or Kaiping?",
    sightseeingAnswer:
      "Choose Jiangmen city for a museum-led introduction to overseas Chinese history, riverside arcades and a practical urban stay. Choose Xinhui for a defined chenpi learning interest or a particular landscape route. Choose Kaiping for selected diaolou clusters and their architectural context, using its dedicated guide. These subjects complement each other when each has useful time. With one full day, choose one main chapter; with two, a city day and a carefully arranged Xinhui day offer contrast without pretending to complete the whole municipality.",
    visitorResources: [
      {
        label: "Jiangmen municipal government",
        href: "https://www.jiangmen.gov.cn/",
        scope:
          "Regional background, museum and cultural information and dated notices, mainly in Chinese. Confirm the actual museum entrance, open collection, city route, Xinhui venue and responsible provider for the proposed dates. General promotion does not confirm a producer appointment, harvest, specialist or private family access.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and exact station names, then both hotel roads. Jiangmen, Jiangmen East and Xinhui are different gateways; a Kaiping journey needs its own station and final road. Use the ticketed Chinese name and complete hotel address for pickup.",
      },
    ],
    serviceScope:
      "A proposal should name the actual hotel and room, gateway, complete transfers, guide language, museum and street route, admissions, meals and any Xinhui session. Distinguish a chenpi retail introduction, a guided tasting, a producer visit and hands-on work. State the host, format and fee for any confirmed appointment. A heritage tour explains public evidence; genealogy research, archive consultation, family introductions and village household entry require their own scope, permissions and realistic expectations. Buying chenpi is optional and is not a condition of cultural learning.",
    routeAdvice:
      "Kaiping adds specific diaolou village clusters, Liyuan and a separate Chikan decision. Foshan adds a different Lingnan craft, temple and urban-history chapter. Build the connection around the exact properties and chosen subjects, allowing worthwhile local hours instead of collecting municipal labels. No matching published Jiangmen product is recommended here. Share your dates, gateways, room expectations and interest in migration history, architecture, food or family roots for a proposal that specifies what each day will help you understand.",
    practicalPlanning: {
      timing:
        "Give the museum and city walk enough time for explanation, questions and a meal. Schedule a confirmed Xinhui host around the actual appointment, not around a presumed all-day workshop. Citrus growing, harvest, peel preparation, drying and aging occur on different timelines; one visit will not demonstrate every stage. Protect the onward connection from a long rural return. A seasonal activity should have a worthwhile alternative if production or weather does not support it.",
      walking:
        "Review actual city surfaces, road crossings, shade, seating and toilets. Arcades can offer shelter without providing a continuous step-free route; thresholds and upper floors vary. A chenpi shop, storage space, orchard and production floor have different access conditions. For Guifeng Mountain or a birding outing, specify the public route, slopes, any boat boarding and full return rather than assume all Xinhui visits involve gentle city walking.",
      cost: "Compare the room category, full vehicle and guide time, named admissions and actual meals. Any chenpi tasting, producer appointment or specialist should have a defined format and fee. Purchases, shipping, genealogy research and archive work are separate unless stated. A premium quote should demonstrate better interpretation, comfortable pacing, dependable meals and room quality rather than imply guaranteed family discoveries, an authenticated valuable purchase or private access to public institutions.",
    },
    attractions: [
      "Jiangmen Wuyi Museum of Overseas Chinese / 江门五邑华侨华人博物馆, with the open collection and entrance confirmed",
      "A selected Changdi / 长堤 riverside arcade walk in the city",
      "A named Xinhui chenpi venue for a defined introduction, tasting or confirmed producer visit",
      "Guifeng Mountain / Guifengshan / 圭峰山 in Xinhui, on a route suited to the group",
      "Xiaoniao Tiantang / 小鸟天堂 as a separate habitat and visitor-route decision, without promised bird sightings",
      "A regional meal showing how a kitchen actually uses chenpi rather than a compulsory shopping stop",
    ],
    stays: [
      {
        label: "Day visit or 1 night / one clear chapter",
        advice:
          "Choose city heritage or a defined Xinhui interest around actual transport. A short visit should not claim complete coverage of Jiangmen, Kaiping and the wider Wuyi region. Keep the return comfortable and any host appointment confirmed.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Choose one suitable base for the main museum, city or Xinhui experience. A modest arrival and departure protect the full day. Add a complementary stop only when the actual road and opening leave time for a useful visit.",
      },
      {
        label: "3 nights / two different full days",
        advice:
          "Separate city history and arcades from a substantive Xinhui subject. Keep a coherent meal and rest plan. If diaolou villages are the main second interest, compare an actual Kaiping stay rather than assuming repeated city-hotel returns are best.",
      },
    ],
    hotelAreas: [
      {
        name: "Pengjiang / city heritage and urban services",
        advice:
          "Compare exact hotels for the museum, chosen street route and dinner options. Check room quiet, bathroom, climate control, pickup and bags. An attractive historic façade is not evidence of a preserved historic interior or full-service accommodation.",
      },
      {
        name: "Xinhui / a clearly defined local purpose",
        advice:
          "Useful when the actual address supports the chenpi venue or selected landscape route. Compare roads to each stop, room comfort and evening food. A district label does not put a hotel beside every orchard, workshop or Guifeng entrance.",
      },
      {
        name: "Kaiping / a separate village chapter",
        advice:
          "Choose through the dedicated Kaiping guide when the diaolou route justifies its own base. Compare the actual village clusters and room rather than treat Kaiping as a Jiangmen city neighborhood. A room move should save meaningful road time or improve the experience.",
      },
    ],
    tradeoffs: [
      {
        title: "Wuyi is a regional history, not one sightseeing gate",
        advice:
          "Wuyi / 五邑 refers to the Five Counties cultural region associated with Xinhui, Taishan, Kaiping, Enping and Heshan; historic terms and present administrative boundaries need context. It is not Wuyi Mountain / 武夷山 in Fujian. A city museum can introduce migration, remittances and home connections, while a family-history visit needs a specific ancestral place: dialects, migration histories and family records differ across the region.",
      },
      {
        title: "Read an arcade street as a working urban place",
        advice:
          "On a selected Changdi route, look at covered pedestrian space, upper-floor façades, shopfronts and the relationship to the river and trade. Ask which features survive, which were repaired and how buildings are used now. A photographic exterior does not establish an exact construction date or open interiors. Include a seated pause rather than turn every façade into another rushed stop.",
      },
      {
        title: "Chenpi learning is more useful than an age label alone",
        advice:
          "Chenpi is dried citrus peel; Xinhui adds a particular origin and production tradition. Compare aroma, preparation, storage and culinary use through the actual samples. Harvest date, years stored, growing origin and product condition are separate claims. A seller's age statement is not independent authentication, and a visitor tasting should not become an investment or medical recommendation.",
      },
      {
        title: "An orchard and an aging store show different parts of the process",
        advice:
          "Fruit on a tree, fresh peel, drying peel and stored chenpi answer different questions. Ask which stage the venue can genuinely explain on your dates. A polished showroom can offer a useful introduction without being a working farm; a production visit needs permission and suitable conditions. Do not promise harvesting, drying or food preparation as an automatic year-round activity.",
      },
      {
        title: "Ancestral interest needs a different brief from sightseeing",
        advice:
          "If family roots are the reason to travel, begin with known names, original Chinese characters, places and documents the guest chooses to share. Establish research scope, privacy and likely sources before the trip. A guide cannot infer a lineage from a surname, guarantee living relatives or open private archives. A good heritage itinerary remains valuable even when a family connection cannot be established.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "heshan-guangdong",
        advice:
          "Heshan develops Gulao waterways, selected public walks and a separately confirmed local Wing Chun interest. Compare the exact visitor area, actual boat and full hotel roads before choosing a day visit or extra nights. A regional Wuyi introduction does not include a teacher appointment or private water access.",
      },
      {
        slug: "enping",
        advice:
          "Enping adds a separately chosen hot-spring stay and selected Xiema or Feng Ru cultural interests. Compare the actual room, bathing inclusions and full hotel road. A city heritage itinerary does not automatically include resort access, private tubs or a village host.",
      },
      {
        slug: "taishan-guangdong",
        advice:
          "Taishan in Guangdong, also known as Toisan or Hoisan, develops Taicheng, selected Duanfen heritage and family-root planning in its own guide. Choose the exact village and useful nights. Shangchuan and Xiachuan need a separate dated transport and hotel plan; a Wuyi introduction does not automatically include them.",
      },
      {
        slug: "kaiping",
        advice:
          "Kaiping develops diaolou architecture and selected village clusters in detail. Use the exact villages, Chikan or Liyuan choice and booked room to plan the connection. Being within Jiangmen municipality does not make the rural route an extension of the Changdi city walk.",
      },
      {
        slug: "foshan",
        advice:
          "Foshan adds temple craftsmanship, Shiwan ceramics or a separate Shunde food chapter. Give each a specific purpose and useful nights. Check exact hotel-to-hotel roads or dated trains; shared Lingnan geography does not make every cultural site adjacent.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for city and village walking, with actual rain, heat and holiday demand checked. Summer needs shade, water and shorter exposed blocks. A chenpi interest is not limited to harvest season: a confirmed tasting or interpretation of stored peel can offer value at another time. Orchard work, fresh peeling and drying depend on the actual crop and venue. Weather and habitat conditions affect a landscape or birding plan; choose dates around the main purpose rather than promise one seasonal scene.",
    orientation:
      "Jiangmen is a municipality in the western Pearl River Delta, Guangdong, with Pengjiang city, Jianghai, Xinhui and other distinct local planning areas. Kaiping, Taishan, Enping and Heshan are separate county-level city choices. Wuyi / 五邑 is the regional Five Counties term, not Fujian's Wuyi Mountain / 武夷山. Xinhui's Guifeng Mountain / 圭峰山 is also different from Heyuan's Guifeng Tower / 龟峰塔. Full Chinese addresses help separate hotel, station and visitor locations. For ancestral-village research or an island stay, identify the actual locality before choosing a hotel in Jiangmen city.",
    experiences: [
      "Connect overseas Chinese migration and home ties with objects in a selected museum collection",
      "Read a riverside arcade street through trade, architecture and present use",
      "Understand Xinhui chenpi through actual samples, production stages and culinary choices",
    ],
    planningNotes: [
      "Separate Pengjiang, Xinhui and Kaiping before choosing hotel nights",
      "Specify the actual chenpi host, format and seasonal process on view",
      "Treat genealogy as a scoped research project rather than a guaranteed sightseeing outcome",
    ],
    arrival:
      "Compare dated services to the actual station and its full road to the room. Jiangmen, Jiangmen East and Xinhui names are not interchangeable pickup instructions. Kaiping requires its own gateway and village transfer assessment. A Guangzhou or Foshan rail duration excludes terminal access, bags and both hotel roads. Keep the essential museum or host session away from uncertain arrival and allow the complete return from the last visitor stop before an onward train.",
    gettingAround:
      "Build each day around actual addresses: museum and city route, a particular Xinhui venue or a distinct mountain or habitat visit. Clarify guide language, vehicle waiting, bags and pickup. A private car does not eliminate city thresholds or open a home, archive or factory. If interpretation is central, specify the relevant knowledge as well as conversational English. Choose fewer well-explained stops rather than use a municipal boundary as a reason to tour everything in one day.",
    stayStrategy:
      "Two nights give one full local day; three allow separate city and Xinhui chapters. Choose Pengjiang or a specific Xinhui room around the main purpose, with quiet sleep, bathroom, climate control, meals and complete roads reviewed. Consider separate Kaiping nights for a substantial village route. High-end value comes from careful interpretation, a dependable room, sensible pacing and genuine confirmed appointments, rather than an expensive purchase or unverified claim of exclusive family access.",
    firstTimerNote:
      "Begin with the story that interests you: overseas migration, a riverside trading city or the making and use of chenpi. Then choose the relevant objects, streets and people the plan can actually include. A museum day and a well-arranged tasting can be more memorable than a circuit across every place carrying the Jiangmen name. Ask what each stop adds and how much time you will have to understand it.",
    faqs: [
      {
        question: "Is Jiangmen worth visiting beyond Kaiping?",
        answer:
          "Yes for travelers interested in overseas Chinese history, riverside arcade streets or Xinhui chenpi. Those subjects can justify their own city and Xinhui days. Kaiping's diaolou remain a separate architectural chapter rather than the only reason to consider Jiangmen.",
      },
      {
        question: "Is Kaiping part of Jiangmen?",
        answer:
          "Kaiping is a county-level city within Jiangmen municipality, but its urban area and diaolou villages are separate from a Pengjiang city stay. Compare exact gateways, village clusters and hotel roads instead of treating the administrative relationship as a short local transfer.",
      },
      {
        question: "What does Wuyi mean in Jiangmen?",
        answer:
          "Wuyi / 五邑 means Five Counties and refers to the cultural region associated with Xinhui, Taishan, Kaiping, Enping and Heshan. Historical usage and current boundaries need context. It is different from Wuyi Mountain / 武夷山 in Fujian.",
      },
      {
        question: "How many nights should I spend in Jiangmen?",
        answer:
          "Two nights give one full local day; three allow separate city-heritage and Xinhui days. A short stop should remain selective. Add dedicated Kaiping time when its village architecture is an important part of the trip.",
      },
      {
        question: "Where should I stay for Jiangmen and Xinhui?",
        answer:
          "Compare a Pengjiang city hotel with a particular Xinhui property according to the main visits. Check complete roads, quiet, bathroom, climate control and meals. Kaiping's villages may justify a different base; a general Jiangmen address does not put every stop nearby.",
      },
      {
        question: "Can I visit a chenpi producer in Xinhui?",
        answer:
          "A producer visit is possible to propose when the actual venue, host, language, date and format are confirmed. It differs from a retail introduction or tasting. Harvesting and processing depend on season and current work; a visit does not authenticate age or guarantee access to every production stage.",
      },
      {
        question: "Which published Jiangmen itinerary is recommended here?",
        answer:
          "No matching published product is recommended. Ask for a tailored proposal naming the room, transport, selected heritage visits, meals and any confirmed chenpi session. The example outline is not a package, genealogy guarantee or promise of private household access.",
      },
    ],
    culturalStory: {
      title: "Follow the connections between a home region and lives overseas",
      paragraphs: [
        "Jiangmen's overseas Chinese history becomes more tangible through particular objects and places: a letter, a remittance record, a family photograph or the architecture of a building supported by money earned elsewhere. A museum-led visit should identify the actual item, its date and whose experience it represents. Migration did not produce one uniform success story. Work, separation, return and changing family ties provide different questions. A selected city walk can then connect those themes with river trade and urban space without pretending every arcade façade tells the same family's story.",
        "Xinhui chenpi introduces another kind of connection between place and identity. The interest lies in growing origin, fruit and peel preparation, storage, aroma and the ways cooks use the ingredient. A clear session follows the samples actually available and separates observed qualities from a seller's claims. The cultural experience need not end in a purchase. If guests are also exploring family roots, keep that inquiry separate and respectful: a surname, dialect or regional association is a starting question, not proof of ancestry or permission to approach a household.",
      ],
    },
    foodStory: {
      title: "Taste chenpi as an ingredient before treating it as a souvenir",
      paragraphs: [
        "Dried citrus peel can contribute fragrance, bitterness and a lingering citrus character to a dish or drink. Ask the kitchen to explain how much it uses, when it is added and what other flavors it supports. A chenpi drink, a slow-cooked preparation and a small tasting of steeped peel show different applications; the useful comparison is sensory rather than a contest for the oldest label. A citrus aroma alone does not prove Xinhui origin or years of storage, and a culinary tradition is not evidence of a health benefit.",
        "Build a balanced Cantonese meal around actual ingredients and appetite rather than add chenpi to every course. Confirm stocks, meat, soy, wheat-containing sauces, peanuts, sesame and shared preparation where relevant. Sweet drinks may have added sugar, and a shop sample is not a full meal. Agree portion sizes, tea preferences and a comfortable lunch between visits. Purchases and shipping should have clear prices and terms, with destination-country food import rules checked separately if guests want to take peel home.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle before following the region's stories",
        description:
          "Complete the exact station road and check the booked room. Keep the first meal or walk modest. Confirm the museum and any Xinhui appointment rather than make an essential cultural visit depend on uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "Connect the museum with the riverside city",
        description:
          "Use the selected open collection for overseas Chinese history, then a manageable Changdi arcade route and a regional meal. Link visible objects and buildings with evidence. Leave time for questions, seating and the present-day city rather than treating it as an empty historic set.",
      },
      {
        day: "Optional full day 2 / three-night stay",
        title: "Give Xinhui a distinct purpose",
        description:
          "Choose a confirmed chenpi introduction, tasting or producer session with the format stated. Add Guifeng Mountain or Xiaoniao Tiantang only when the selected route, conditions and full roads leave useful time. These are choices, not a promise to complete all Xinhui interests in one circuit.",
      },
      {
        day: "Departure",
        title: "Continue with a clear next chapter",
        description:
          "Allow breakfast, bags and the full gateway or next-hotel transfer. Continue to selected Kaiping villages or Foshan with its own useful visiting time. This outline is illustrative, not a published package, genealogy service or guarantee of production, hosts and current access.",
      },
    ],
  },
};
