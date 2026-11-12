import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qinhuangdao.svg",
  alt: "Original Qinhuangdao planning schematic separating Shanhaiguan history, Laolongtou coastal defenses, Beidaihe accommodation and a separately confirmed Aranya visit; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const qinhuangdaoGuide: ExpandedDestination = {
  id: "qinhuangdao",
  name: "Qinhuangdao",
  region: "north",
  kicker: "Choose the Great Wall chapter, then the right stretch of coast",
  description:
    "Plan Qinhuangdao around Shanhaiguan and Laolongtou, with clear Beidaihe versus city hotel choices and a separate, access-aware Aranya architecture decision.",
  stay: "2–3 nights for a focused history-and-coast stay",
  bestFor: "Great Wall history, coastal downtime and selected contemporary architecture",
  interests: ["heritage", "landscape", "city"],
  relatedDestinationIds: ["tangshan", "beidaihe", "beijing", "tianjin", "chengde"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qinhuangdao Travel Guide: Shanhaiguan, Coast & Hotels",
    seoTitle: "Qinhuangdao Guide: Great Wall, Coast & Hotels",
    seoDescription:
      "Plan Qinhuangdao with Shanhaiguan and Laolongtou, Beidaihe hotel choices, 2–3 nights, rail gateways and a separately confirmed Aranya architecture visit.",
    answer:
      "Qinhuangdao (秦皇岛) is a coastal city in northeastern Hebei on the Bohai Sea, east of Beijing. Its clearest cultural reason to visit is Shanhaiguan, where a major Ming Great Wall pass and nearby coastal defenses explain the relationship between mountain routes, settlement and the sea. Laolongtou, often translated as Old Dragon's Head, is a separate coastal site. Beidaihe offers another accommodation and seaside chapter southwest of the main city, while Aranya is a distinct contemporary resort-community destination farther along the coast. Two nights allow one focused full day; three can give the Wall history and coast useful time of their own. Choose the actual sites, hotel and transport before treating the municipal name as one compact beach resort.",
    stayAnswer:
      "Two nights work for a selected Shanhaiguan-and-Laolongtou day when arrival and departure fit. Three nights add a different coastal day or more time at a well-chosen property. A longer resort stay needs its own reason, such as actual beach facilities, family downtime or a confirmed architecture interest. One night is selective. A Beijing return outing can be researched for a focused historical visit, but it is a weaker fit if you expect both substantial interpretation and an unhurried seaside break. Count the final transfers and useful hours, not just the train's advertised journey.",
    hotelAnswer:
      "Choose Shanhaiguan for a history-led chapter, a specific Haigang city property for practical meals and room comfort, or a named Beidaihe hotel when the seaside stay is central to the brief. These locations create different daily roads. An Aranya booking is a separate property-and-access decision. Check the actual beach or promenade route, room outlook, quiet, heating or cooling, meals, lift and pickup. Sea view does not mean direct sand access, and beach access does not establish swimming conditions. For a premium stay, confirm the room and services you will use rather than infer them from resort branding.",
    sightseeingQuestion: "Should I choose Shanhaiguan, Laolongtou, Beidaihe or Aranya?",
    sightseeingAnswer:
      "Give each a purpose. Shanhaiguan introduces a fortified pass, selected wall structures and town history. Laolongtou provides a different coastal-defense setting and the familiar Wall-meets-the-sea image. Beidaihe is a seaside base or selected coastal outing, not another Great Wall entrance. Aranya can suit a defined architecture, exhibition or resort interest only when the actual venue and entry arrangements are confirmed. A good short stay pairs a coherent history day with a distinct coastal interest; it does not require every famous photograph along the wider shoreline.",
    visitorResources: [
      {
        label: "Qinhuangdao municipal government",
        href: "https://www.qhd.gov.cn/",
        scope:
          "Official municipal context and public notices, mainly in Chinese. Confirm actual heritage-site operation, beach conditions and local services with the responsible parties. A municipal tourism overview does not establish an open tower, a lifeguarded swimming area or access to a private resort venue.",
      },
      {
        label: "UNESCO: The Great Wall",
        href: "https://whc.unesco.org/en/list/438/",
        scope:
          "Background on the wider World Heritage property and its significance. The Wall has geographically separate sections and different surviving fabric, restoration and visitor routes. The listing is not a ticket, opening notice or guarantee that every tower or coastal structure can be entered.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and full station names. Qinhuangdao, Shanhaiguan and Beidaihe stations serve different final road journeys. Include the actual hotel and selected sites when choosing a train; a city-name search does not identify the most useful arrival for every coastal property.",
      },
    ],
    serviceScope:
      "A proposal should name each heritage site and actual visitor route, hotel and room, station pickup, full road days, guide language, admissions and meals. Explain whether walls, towers or buildings are open internally or viewed from outside. Confirm any Aranya venue, exhibition, accommodation-linked access or event separately with the responsible operator for the actual travelers and dates. A private vehicle, restaurant booking or hotel reservation elsewhere does not grant entry to every resort space. Swimming, sailing, birding, specialist architecture guiding and drone use need their own suitable conditions and confirmed service where available.",
    routeAdvice:
      "Qinhuangdao can add a distinct Great Wall-and-coast chapter after Beijing or Tianjin. Choose it for the contrast, not as another interchangeable Wall excursion. Chengde adds a different Qing estate-and-temple setting with a separate connection and useful nights. No matching published Qinhuangdao tour is recommended here. Request a tailored plan with dates, gateways, history or architecture interests, beach expectations and room priorities. Existing Beijing Great Wall products do not automatically include Shanhaiguan, Laolongtou, coastal accommodation or Aranya access.",
    practicalPlanning: {
      timing:
        "Keep Shanhaiguan and Laolongtou as named visits with real entrances, travel, walking and lunch. Do not attach a distant resort venue simply because it appears on the same coastline. Summer demand and holidays can affect roads, rooms and the feel of popular beaches. A seasonal event or venue needs its actual admission arrangement, while a sea sunrise depends on weather and the chosen outlook. Protect the correct station transfer before departure and keep essential visits off uncertain arrival hours.",
      walking:
        "Wall stairs, tower access, courtyard paving and prolonged standing differ from a level promenade or sandy beach. Check the actual open route, gradients, seating and final vehicle access. A hill section such as Jiaoshan is a different physical undertaking from a selective pass visit. Coastal wind, wet paving, sand and summer heat can change effort. Agree toilets, pickup and a shorter worthwhile option. A private car does not remove the final steps or make every historic building and shoreline accessible.",
      cost: "Compare the specific room and season, breakfast, full station transfers, guide hours, named heritage admissions and any venue tickets or reservation services. A city history day and a resort day buy different experiences. Clarify pool, beach facilities, children's activities or event access rather than assume they follow from the room rate. A premium should deliver comfort, interpretation and useful location, not a guaranteed empty beach, clear sunrise, private Wall section or unrestricted architecture access.",
    },
    attractions: [
      "Shanhaiguan pass and a selected currently open wall or gate-tower route",
      "Laolongtou / Old Dragon's Head as a distinct coastal-defense visit",
      "A coherent Shanhaiguan town walk with surviving fabric and later restoration explained",
      "A selected Beidaihe coastal route when its actual conditions and purpose fit",
      "A named Aranya building, exhibition or resort stay only with current entry confirmed",
      "Jiaoshan as a separately assessed hill-and-Wall undertaking, not a default easy addition",
      "A specific seasonal birding interest with an appropriate guide and lawful access, without a sighting guarantee",
    ],
    stays: [
      {
        label: "1 night / one selective history chapter",
        advice:
          "Choose a focused subject when the actual trains and entry hours leave useful time. A late room arrival and early departure do not provide a full heritage day and a seaside holiday. Keep the property and meals practical rather than travel across the city for a brief beach photograph.",
      },
      {
        label: "2 nights / one complete local day",
        advice:
          "Protect a well-paced Shanhaiguan-and-Laolongtou day when the route and walking suit the guests. Leave meals, interpretation and a realistic return to the room. A separate resort or architecture venue should not quietly consume the history time you expected.",
      },
      {
        label: "3 nights / history and a different coastal day",
        advice:
          "Add actual property time, a suitable coastal route or a separately confirmed architecture interest. Decide whether one base or a purposeful move works better. More nights do not guarantee swimming weather, quiet beaches, a venue booking or clear morning light.",
      },
    ],
    hotelAreas: [
      {
        name: "Shanhaiguan / a history-led base",
        advice:
          "Check the actual approach to the chosen pass or town route, room quiet, bathroom, temperature control, dinner and luggage handling. A historic-town address does not prove an old building or heritage-room standard. Count the road to Laolongtou and onward station separately.",
      },
      {
        name: "Haigang city or a named waterfront property / practical comfort",
        advice:
          "Compare the precise outlook, promenade access, meals, room category and daily transfers. A waterfront listing may serve a city stay rather than a sandy-beach holiday. Choose it for actual room and location benefits, with the correct arrival station and heritage road day mapped.",
      },
      {
        name: "Beidaihe / a separately chosen seaside stay",
        advice:
          "Assess the exact property, walk to the coast, seasonal operation, noise, meals and any swimming facilities. The district name does not establish a private beach, lifeguards, warm water or a quiet resort atmosphere. Give the coastal purpose real time and count the road to Shanhaiguan.",
      },
      {
        name: "Aranya / a specific accommodation-and-access proposal",
        advice:
          "Name the actual property, community location and intended venues, then confirm how access works for the dates and guests. A hotel booking should not be interpreted as a universal pass to every building, performance or exhibition. Check meals, booked view, beach facilities and final station transfer as part of the whole stay.",
      },
    ],
    tradeoffs: [
      {
        title: "Shanhaiguan and Laolongtou are different visitor sites",
        advice:
          "The pass and the coastal defenses explain different parts of the Ming defensive landscape. They are not one entrance or a continuous short walk along the Wall. Name the actual route and what survives, what has been repaired or reconstructed and which spaces are open. A photograph of the sea-end structure does not describe the whole Shanhaiguan visit.",
      },
      {
        title: "A famous Wall endpoint needs historical qualification",
        advice:
          "Laolongtou is commonly described as the Great Wall meeting the sea, and Shanhaiguan as a major eastern gateway of the Ming defensive system. Use that context without reducing all Chinese frontier walls across periods to one single line with one undisputed eastern end. Explain the selected structures and their historical role rather than turn a convenient slogan into a universal geographical claim.",
      },
      {
        title: "A coastal room is not a swimming promise",
        advice:
          "The Bohai coast has a seasonal climate, and water conditions, designated areas and operating lifeguards need current review. Sea view, promenade access, sand access and supervised swimming are separate benefits. Choose an alternative coastal or indoor plan that remains worthwhile if swimming is unsuitable, especially for a family stay outside the warmer period.",
      },
      {
        title: "Beidaihe and Aranya are not interchangeable resort labels",
        advice:
          "Beidaihe is a distinct district and seaside destination; Aranya is a separate contemporary resort-community decision in the wider coast's planning geography. Use the full property and venue addresses. An image labeled Beidaihe, Beidaihe New Area or Qinhuangdao may not identify the same beach or daily road pattern. Do not choose a hotel by a broad coastal tag alone.",
      },
      {
        title: "Architecture photographs do not establish public entry",
        advice:
          "An exterior, an exhibition interior, a performance and a stay within a resort community have different access arrangements. Confirm the exact Aranya venue and dated admission before making it the reason for the trip. A social-media image, a cafe reservation or a general beach visit is not evidence that the guest can enter every library, chapel or cultural building.",
      },
      {
        title: "A hill section of the Wall is another physical choice",
        advice:
          "Jiaoshan or a longer mountain route should be assessed separately from pass courtyards and a coastal viewpoint. Confirm the actual open section, steps, height exposure, current transport and weather. Do not use a relatively level sea-front image to imply that every nearby Wall experience is suitable for limited mobility.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "tangshan",
        advice:
          "Tangshan offers an inland contrast to the coastal defenses: Kailuan industrial heritage, ceramics and the history of urban rebuilding. Choose a focused cultural day and a comfortable city base. An Eastern Qing Tombs excursion is another road day, not a convenient extra stop between every Tangshan and Qinhuangdao hotel.",
      },
      {
        slug: "beidaihe",
        advice:
          "The Beidaihe guide goes deeper on a coastal stay: exact room-to-shore access, family routines, migration-season birding and the difference between traditional Beidaihe, Nandaihe and Aranya addresses. Give the seaside chapter useful time rather than quietly replace its only full day with a distant heritage outing. Swimming and specialist services need their own current confirmation.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing adds a different imperial-capital chapter and other Great Wall settings. Compare the dated train or full road journey, actual stations and both final transfers. A Beijing Wall day and Shanhaiguan's pass-and-coast history are different experiences; an existing Beijing product does not include this coastal extension by implication.",
      },
      {
        slug: "tianjin",
        advice:
          "Tianjin offers a separate port-city architecture and urban-history stay. Give it useful local time rather than treat it only as a connection. Compare the actual train and hotel-to-hotel sequence before joining a city chapter to a Qinhuangdao history or beach stay.",
      },
      {
        slug: "chengde",
        advice:
          "Chengde adds a Qing estate, gardens and distinct Buddhist temples in another part of Hebei. Research the actual dated connection and full transfers instead of assuming the shared province makes a short local drive. Each heritage landscape deserves its own nights and physical assessment.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose the season by purpose. Spring and autumn can suit a history-and-coastal-walking visit when the actual weather is comfortable, while summer is a common starting point for researching a seaside holiday and can bring high demand, heat and rain. Swimming needs current conditions and actual facilities, not a seasonal guarantee. Winter is a different cold-coast experience with potentially reduced resort services. Migration-season birding is a specialist interest requiring actual habitat, dates and guiding; it should not be promised as a routine sighting on every beach day.",
    orientation:
      "Qinhuangdao is a coastal municipality in Hebei. Shanhaiguan lies toward its eastern side, with Laolongtou forming a separate coastal site; the main Haigang urban area and Beidaihe create different bases farther along the coast. Aranya needs its own exact property and venue location. Qinhuangdao, Shanhaiguan and Beidaihe railway stations are not interchangeable. This regional guide helps choose the trip's purpose; use the separate Beidaihe guide for coastal accommodation and daily pacing. Neither guide establishes current admission to every coastal development.",
    experiences: [
      "Understand Shanhaiguan as a fortified pass within a wider defensive landscape",
      "Give Laolongtou its own coastal-history context and actual visitor route",
      "Choose a seaside or confirmed architecture day that genuinely contrasts with the heritage visit",
    ],
    planningNotes: [
      "Name the pass, sea-end site, hotel and exact station separately",
      "Distinguish room view, beach access, swimming and resort-venue admission",
      "Assess hill-Wall routes and specialist interests independently from a gentle coastal walk",
    ],
    arrival:
      "Choose the dated service and station that fit the actual base: Qinhuangdao / 秦皇岛, Shanhaiguan / 山海关 or Beidaihe / 北戴河. Include the complete road to the room or visitor entrance, luggage and useful arrival hours. An airport proposal needs a verified dated operating flight and full final transfer. Keep essential interiors, exhibitions and the main heritage subject off uncertain arrival windows, and protect a realistic return before an onward departure.",
    gettingAround:
      "Plan named road stages between heritage sites, the chosen coast and any separate resort venue. A private vehicle does not enter every pedestrian area, remove tower steps or confer venue admission. Agree parking, the final walk, toilets, seating, lunch and pickup. Beach outings need the actual permitted shore and current conditions, while hill walking and specialist photography require their own assessment. Avoid spending a whole coastal day crossing between properties chosen from unrelated photographs.",
    stayStrategy:
      "For two nights, choose one base that serves the main history or coastal purpose and acknowledge the road to the other interests. Three nights can support a distinct second day without forcing another hotel move. A longer resort stay should be justified by actual room quality, food, facilities and time you want to spend there. Confirm every important venue or activity separately. Premium value means the promised services match the real stay, not an assumption that an expensive coastal room supplies private sand and universal access.",
    firstTimerNote:
      "Ask whether the trip is primarily about Ming defensive history, seaside rest or contemporary architecture. Then choose the room and station around that purpose. You can combine two interests with enough time, but a pass tower, beach image and famous cultural building do not necessarily form one convenient day. A clear main subject and honest transfers make the coastal extension much easier to judge.",
    faqs: [
      {
        question: "Is Qinhuangdao worth visiting from Beijing?",
        answer:
          "It can be for a focused Shanhaiguan-and-Laolongtou history chapter or a distinct coastal stay. Choose the actual sites, season, hotel and complete transfers. A quick return outing and an unhurried seaside break are different trips; a short train time alone does not supply both.",
      },
      {
        question: "How many nights should I spend in Qinhuangdao?",
        answer:
          "Two nights provide one focused full day; three can add a different coastal or confirmed architecture day. One night is selective. Longer stays should have an actual resort or specialist purpose. Count the final station transfers and useful local hours rather than hotel nights alone.",
      },
      {
        question: "Are Shanhaiguan and Laolongtou the same place?",
        answer:
          "No. Shanhaiguan's pass and selected wall or town route are distinct from Laolongtou's coastal-defense site. Name each entrance, current visitor route and transfer. They offer complementary historical subjects, not one shared entrance or a guaranteed continuous short walk along the Wall.",
      },
      {
        question: "Where does the Great Wall meet the sea?",
        answer:
          "Laolongtou, or Old Dragon's Head, near Shanhaiguan is the familiar coastal site associated with that description. Explain it within the Ming defensive landscape and distinguish surviving fabric from later restoration. The slogan should not be used to describe every historical frontier wall as one single line with one universal endpoint.",
      },
      {
        question: "Should I stay in Shanhaiguan or Beidaihe?",
        answer:
          "Choose a specific Shanhaiguan room for a history-led stay or a named Beidaihe property when the seaside chapter deserves time. Compare the actual room, meals, coast access and full roads. Neither address automatically provides the best base for every heritage site and resort venue.",
      },
      {
        question: "Can I visit Aranya's buildings without staying there?",
        answer:
          "Check current access for each exact venue, date and traveler before confirming the trip. Community entry, exhibitions, performances and accommodation-linked arrangements may differ. A photograph, cafe booking or hotel elsewhere does not establish permission to enter every cultural building or resort space.",
      },
      {
        question: "Can I swim at Qinhuangdao or Beidaihe?",
        answer:
          "Assess the actual season, current water and weather conditions, designated area and operating supervision. A sea-view room or beach walk does not establish safe or available swimming. Agree a worthwhile alternative if the conditions are unsuitable, particularly for children or a shoulder-season visit.",
      },
      {
        question: "Which railway station should I use for Qinhuangdao?",
        answer:
          "Choose the actual dated service and hotel route. Qinhuangdao, Shanhaiguan and Beidaihe stations serve different final journeys. Give the driver the full ticketed station and property address; a broad city or coast label does not identify the most convenient pickup for every itinerary.",
      },
    ],
    culturalStory: {
      title: "Read a defensive landscape beyond a single famous image",
      paragraphs: [
        "Shanhaiguan and Laolongtou show why the relationship between mountain corridors, settlement and sea mattered to a defensive system. Their value lies in understanding the particular structures and terrain, rather than collecting another generic Great Wall photograph. Good interpretation distinguishes the Ming setting, later events, surviving fabric and modern restoration. A reconstructed coastal view can still be informative when its status is explained clearly instead of presented as an untouched ancient scene.",
        "The wider coastal journey can then introduce a different history of seaside use and contemporary development. A modern cultural building, a beach property and an older town neighborhood tell different stories. Name the actual subject and respect the boundary between public space, a ticketed venue and a residential community. Specialist guiding or a hosted conversation needs a genuine available provider; architecture interest does not imply private access or permission to photograph residents.",
      ],
    },
    foodStory: {
      title: "Let a coastal meal be transparent and well timed",
      paragraphs: [
        "Seafood can be part of a Qinhuangdao meal for guests who want it, but the actual species, portion, price basis and cooking method should be clear before ordering. Coastal location alone does not establish freshness, sustainable sourcing or a fixed affordable menu. A few suitable cooked dishes, vegetables and a staple can make a comfortable lunch between heritage visits. Not every guest needs a seafood banquet to enjoy a seaside stay.",
        "Clarify shellfish, fish sauce or stock, wheat, nuts and shared equipment where dietary needs matter. Serious seafood allergies require a confirmed kitchen's capacity and a workable alternative, not merely removal of visible prawns from a dish. Vegetarian, halal and other requirements also need specific venue assessment. Arrange breakfast and late-arrival food with the actual property, and keep meal time realistic rather than sacrifice it for another distant coastal photograph.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / the actual station and chosen base",
        title: "Settle in without overloading the first window",
        description:
          "Transfer to the booked room with luggage, meals and actual arrival hours allowed. A modest local orientation can fit when conditions support it. Keep essential heritage or venue entry off an uncertain late arrival rather than promise an important tower just before closing.",
      },
      {
        day: "Full day 1 / a coherent pass-and-coast history day",
        title: "Connect Shanhaiguan with Laolongtou",
        description:
          "Use the selected currently open routes, with separate transfers, walking, interpretation and lunch. Explain the roles and restoration history of the actual structures. Choose a shorter useful option when steps, weather or guest needs make the fuller route unsuitable.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Give the coast a different purpose",
        description:
          "Enjoy actual property time and a suitable coastal route, or a specifically confirmed Aranya architecture interest when the full road and access fit. Swimming, exhibitions and performances are separate conditions. The day should remain worthwhile without clear sunrise light or a private beach atmosphere.",
      },
      {
        day: "Departure / the complete onward connection",
        title: "Allow the real final road journey",
        description:
          "Reach the ticketed station or begin a separately confirmed Beijing, Tianjin or Chengde chapter with enough transfer margin. This outline is illustrative, not a published package or a guarantee of rooms, venue access, swimming, weather or current site operation.",
      },
    ],
  },
};
