import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/kaiping.svg",
  alt: "Kaiping planning schematic distinguishing selected diaolou villages, Liyuan Garden and a separate Chikan visit or overnight; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const kaipingGuide: ExpandedDestination = {
  id: "kaiping",
  name: "Kaiping",
  region: "south",
  kicker: "Emigrant histories told through towers, villages and a changing landscape",
  description:
    "Explore Kaiping's diaolou through a small number of well-chosen village visits, with clear advice on tower stairs, Liyuan Garden, Chikan, hotel bases and the complete countryside journey.",
  stay: "2–3 nights or a focused full-day excursion",
  bestFor: "Architecture, overseas-Chinese history and a considered countryside stay",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["taishan-guangdong", "jiangmen", "guangzhou", "foshan", "shunde"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Kaiping Travel Guide: Diaolou, Villages & Where to Stay",
    seoTitle: "Kaiping Travel Guide: Diaolou, Villages & Stays",
    seoDescription:
      "Choose Kaiping diaolou villages, Liyuan Garden and Chikan with practical advice on tower stairs, day trips, overnight bases and overseas-Chinese history.",
    answer:
      "Kaiping (开平) is a county-level city within Jiangmen, Guangdong, best known for diaolou: multi-story buildings whose defensive and residential roles reflect local conditions and overseas-Chinese connections. The UNESCO-listed Kaiping Diaolou and Villages is a distributed heritage property, not one enclosed attraction or a single tower. Zili, Jinjiangli and Majianglong provide different village settings; Liyuan Garden and Chikan add other subjects. Choose a small number of places and time to understand them rather than treating every tower photograph as another quick stop on the same walk.",
    stayAnswer:
      "A focused full-day excursion from Guangzhou or another agreed base can provide a selected introduction when the complete return journey leaves enough time. Two nights in the Kaiping area give one full day plus more flexible arrival and departure periods. Three nights allow a second village, garden or town subject at a slower pace. A countryside overnight is worthwhile when the room, meals and location improve the visit, not simply because sunrise photography is advertised. Count a long arrival drive separately from time exploring villages.",
    hotelAnswer:
      "Compare Kaiping's urban area for services and road access, a specific village-area property for its setting, or a named Chikan hotel for a stay built around that managed visitor district. Each creates a different route. Check the exact room, bathroom, climate control, stairs, soundproofing, dinner and final luggage approach. A restored building, a modern hotel and a rural guesthouse are different offers. A tower view does not establish tower access, and a Chikan room does not mean every diaolou village is nearby on foot.",
    sightseeingQuestion: "Which Kaiping villages and sites should you choose?",
    sightseeingAnswer:
      "Choose Zili for a selected village-and-tower introduction, Jinjiangli for a different group of buildings and settlement context, or Majianglong for its village landscape and vegetation setting. Add Liyuan when an emigrant family's garden estate deepens the architectural story. Chikan offers another townscape and visitor experience, not an interchangeable diaolou village. Select by your interests, current access, road pattern and willingness to climb. One village explored carefully with a contrasting second subject can be more rewarding than rushing every named component of the heritage property.",
    visitorResources: [
      {
        label: "Kaiping municipal government",
        href: "https://www.kaiping.gov.cn/",
        scope:
          "Municipal background and public notices, mainly in Chinese. Confirm current village, tower, garden and Chikan visitor arrangements through the responsible venue or authority. A city reference does not establish interior access, a resident host, photography permission or hotel facilities.",
      },
      {
        label: "UNESCO World Heritage Centre: Kaiping Diaolou and Villages",
        href: "https://whc.unesco.org/en/list/1112/",
        scope:
          "Official heritage background and the scope of the serial property. It is not a current ticket bundle or proof that every diaolou, Liyuan Garden or Chikan visitor area has the same designation, ownership or public access.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Compare actual services to Kaiping South or another suitable gateway with the full drive to the hotel and selected villages. A rail arrival in the region is not arrival at a diaolou entrance or a replacement for local transport planning.",
      },
    ],
    serviceScope:
      "A tailored proposal can name the hotel and room, exact gateway, village clusters, guide hours, vehicle, admissions and meals. Specify which tower interiors are intended and the current public route rather than promising every building. Family-history research, private homes, specialist architectural interpretation, workshops and arranged photography need separate evidence, consent and scope. Private transport does not provide access to occupied houses, roofs, fields or closed structures. Share your architectural interests, stair tolerance and desired balance of village time and rest before selecting the route.",
    routeAdvice:
      "Kaiping can add a distinct emigrant-architecture chapter after Guangzhou, Foshan or a Shunde food stay when the complete transport and useful nights fit. These are separate bases and subjects, not one compact Guangdong circuit. No matching published Kaiping product is recommended here. Use the illustrative two-night outline to request a tailored visit, choosing actual village clusters and a suitable room instead of attaching an unquoted countryside extension to the existing Guangzhou-Shenzhen business journey.",
    practicalPlanning: {
      timing:
        "Group the selected sites by the actual road route and allow parking, entry, walking, explanation and a seated meal. The distance between village entrances is only part of the day. A tower interior can take time even when the building looks small from outside. Keep a Chikan evening or another fixed appointment separate from an overfilled village circuit, and leave an alternative if a building or visitor route is unavailable.",
      walking:
        "Village paving, thresholds, tower stairs and garden routes involve different demands. Diaolou stairs can be steep and narrow, and upper floors may not suit limited mobility or a fear of heights. An exterior architectural visit can still be worthwhile without climbing. Agree the public route, resting points, toilets and vehicle access. A car reaching the village does not establish step-free access to a house, viewpoint or hotel room.",
      cost: "Compare the room category, meals, complete transfers, guide language and named admissions. Different clusters, garden visits, local visitor transport and a managed town area may have separate tickets or conditions. A package label should identify what is included rather than imply every Kaiping attraction is covered. A higher-end stay should improve room comfort, interpretation and time on site, not depend on an unverified private house, exclusive village or access to every tower roof.",
    },
    attractions: [
      "Zili village / 自力村 as a selected diaolou and settlement introduction",
      "Jinjiangli / 锦江里 and its distinct tower-and-village context",
      "Majianglong / 马降龙 for a different village landscape setting",
      "Sanmenli / 三门里 when its specific heritage interest and current access fit the route",
      "Liyuan Garden / 立园 as a separate emigrant-family estate subject",
      "Chikan / 赤坎 with its arcade townscape, contemporary visitor arrangements and hotel choices explained",
    ],
    stays: [
      {
        label: "A full-day excursion: a selected introduction",
        advice:
          "Choose a small number of sites with a coherent road pattern and a real meal. Compare the complete return journey from the starting hotel. This format is selective; it should not promise all heritage components, a full garden visit, a comprehensive Chikan experience and several tower climbs.",
      },
      {
        label: "2 nights: village time without a same-day return",
        advice:
          "Use one full day for a chosen village cluster and a contrasting subject, with arrival or departure time left realistic. An overnight can improve pace and evening comfort when the property and meals are suitable. Do not count a late arrival as a free additional village day.",
      },
      {
        label: "3 nights: a second architectural subject and flexibility",
        advice:
          "Give another village, Liyuan or Chikan proper time rather than repeating brief tower photographs. Retain a slower period at the hotel and an alternative for rain. A split stay needs a clear benefit, since nearby hotel moves consume the time that makes a rural visit enjoyable.",
      },
    ],
    hotelAreas: [
      {
        name: "Kaiping urban area",
        advice:
          "A practical starting point for services, meals and road outings. Check the exact neighborhood, room quietness and drive to the selected clusters. A city hotel may provide dependable comfort without the rural atmosphere shown in destination photography. Choose it knowingly rather than assuming every Kaiping address sits among diaolou.",
      },
      {
        name: "A named village-area property",
        advice:
          "Consider when the actual room and landscape are part of the reason to stay. Review road access, parking-to-room distance, stairs, bathroom, cooling or heating, dinner and breakfast. Historic character does not establish soundproofing or modern facilities. Nearby fields and houses remain working or private spaces, not hotel amenities available without permission.",
      },
      {
        name: "A Chikan-focused hotel stay",
        advice:
          "Choose for that townscape and the specific property's experience, with the current visitor-area and hotel-access arrangements clarified. It is a different stay from a quiet independent village property. Ask about evening activity, room location, meals, luggage and any entry benefits. A themed or restored setting does not establish that all streets and buildings are unchanged historic fabric.",
      },
    ],
    tradeoffs: [
      {
        title: "UNESCO recognition does not make every site one ticketed park",
        advice:
          "The listed property includes specific village components, while the broader Kaiping travel landscape contains other towers, gardens and town interests. Choose the actual places and explain their relationship to the designation. Do not present all of Liyuan or Chikan as interchangeable components merely because they share emigrant histories. Current tickets and public access are separate from heritage status and need their own check.",
      },
      {
        title: "Look at how a tower worked, not only how it looks",
        advice:
          "Diaolou differ in purpose, layout and decoration. A useful visit relates defensive features, residence, local conditions and overseas connections to the particular building. Hybrid forms deserve careful explanation rather than a blanket label of European architecture. Select interiors that are actually open and suitable for the group. Exterior details and village context can still tell a substantial story when climbing is not appropriate.",
      },
      {
        title: "Village landscapes are lived-in places with access boundaries",
        advice:
          "A public visitor route does not give permission to enter every house, field or roof. Ask before photographing identifiable residents and keep equipment away from doorways and work. A quieter scene is not evidence of an abandoned village, and a picturesque water or field view can change with weather and agricultural use. Private guiding should improve interpretation and communication, not promise a village emptied for photography.",
      },
      {
        title: "Chikan needs an honest account of restoration and contemporary tourism",
        advice:
          "Its arcade townscape and overseas-Chinese context can add another chapter, but the present visitor experience involves redevelopment, restoration and managed tourism. Explain what is being visited now rather than selling it as a wholly untouched street of everyday life. A hotel stay, public town visit and evening performance are different services with their own access and hours. Choose them for their real value, not a promise to step into an unchanged past.",
      },
      {
        title: "Family-history travel is a research task, not an automatic homecoming",
        advice:
          "An ancestral connection can make the region personally meaningful, but a surname or village lead does not establish a relative, surviving house or archive appointment. Agree the research scope, available records, language and uncertainty separately. A heritage tour can explain migration history without promising genealogical findings, private family meetings or access to a specific home. Share any existing Chinese documents before designing that specialist chapter.",
      },
      {
        title: "Do not make the return journey the hidden cost of a day trip",
        advice:
          "A selected excursion can work well, but only when the complete roads or rail-and-road combination leave usable site time. Kaiping South station is not a village entrance, and a vehicle is still needed for many cluster combinations. Compare an overnight when a same-day return would create a rushed meal and very brief stops. The best choice depends on the actual starting hotel and next destination, not the shortest published train segment.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "taishan-guangdong",
        advice:
          "Taishan adds a different emigrant-era arcade subject at Meijia Dayuan in Duanfen and selected city or ancestral-village interests. Compare actual buildings and sources rather than treat every place as a Kaiping UNESCO component. Family-root work and Taishanese interpretation require their own brief; island stays need separate time.",
      },
      {
        slug: "jiangmen",
        advice:
          "Jiangmen city adds a museum-led overseas Chinese history introduction, a Changdi riverside arcade walk and a separate Xinhui chenpi interest. Give these their own time and compare the actual bases. A Jiangmen city room is not automatically the most convenient overnight choice for Kaiping village clusters.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou provides a trading-city and Cantonese cultural chapter before or after the countryside. Compare the full day-trip return with a Kaiping overnight, including the exact station or road route. The existing Guangzhou-Shenzhen business itinerary does not automatically include diaolou visits or rural accommodation.",
      },
      {
        slug: "foshan",
        advice:
          "Foshan adds Lingnan temple craftsmanship and a separate Shiwan ceramics interest. Those subjects can contrast with Kaiping's emigrant architecture, but require their own time and complete transfer. A broad Guangdong heritage label is not a reason to compress both destinations into a day dominated by driving.",
      },
      {
        slug: "shunde",
        advice:
          "Shunde adds a food-led stay and selected garden, village or art interests within Foshan. Choose the main meal and base there before setting the Kaiping connection. A rural tower day should not be squeezed between a large lunch in one district and a fixed dinner in another distant place.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler parts of the year are useful starting points for village walking and time outdoors. Summer brings heat, humidity and rain, so exposed paths and tower interiors need a comfortable pace. Storm-related conditions can affect roads and outdoor visits. Agricultural fields, reflections and particular light vary with the actual season and weather. Choose the architecture and village context for their own value rather than booking around a guaranteed sunrise, green field or empty view.",
    orientation:
      "Kaiping is a county-level city within Jiangmen in Guangdong. Its urban area, diaolou village clusters, Liyuan Garden, Chikan and Kaiping South station are separate locations. The UNESCO heritage is distributed across named components, not one old-town gate. Use the specific village and Chinese hotel address to build the route. Jiangmen as a regional name does not mean the same overnight base or final road journey as Kaiping.",
    experiences: [
      "Understand a selected diaolou through its layout, defensive features and overseas-Chinese connections",
      "Explore a village setting or emigrant-family garden with time to notice its distinct context",
      "Choose a suitable countryside or town base that improves pace rather than adds another rushed check-in",
    ],
    planningNotes: [
      "Name the village clusters, actual interiors and public route instead of promising every tower",
      "Check stairs, room access, meals and the full gateway-to-village transfer before booking",
      "Keep Chikan redevelopment, family-history research and optional private hosts clear in the proposal",
    ],
    arrival:
      "Compare actual rail services to Kaiping South or another suitable gateway with the complete road journey to the hotel and chosen clusters. Guangzhou Baiyun Airport, code CAN, can serve a wider route but requires a substantial onward connection to assess, not an automatic short pickup. Send the ticketed arrival, luggage and Chinese property address. Keep a long arrival day separate from fixed interior visits or a host appointment that would be difficult to move.",
    gettingAround:
      "A planned vehicle is useful for a selected cluster-and-garden route, with parking, walking and meal stops agreed. Public visitor transport, where required or offered, has its own arrangements. A private car cannot necessarily reach every house or hotel entrance. Group places by the actual road pattern and leave time to explore on foot rather than treating each village as a quick roadside photograph. Keep a shorter alternative for weather or reduced energy.",
    stayStrategy:
      "For two or three nights, choose one base that serves the main architectural subjects and provides dependable meals and sleep. The urban area, a village property and Chikan offer different experiences. Review the exact room, noise, temperature control, bathroom, stairs and luggage access, then compare the daily road burden. An overnight is most convincing when it adds usable time and comfort, not just a second hotel location to a Guangdong itinerary.",
    firstTimerNote:
      "Choose one good village introduction and a contrasting subject before adding more stops. The story lies in how buildings, local life and overseas connections fit together, not in the number of towers photographed. A knowledgeable explanation and time to look can make even an exterior-focused visit substantial. Keep claims about ancestry, private access and untouched village life proportionate to what can actually be shown.",
    faqs: [
      {
        question: "Where is Kaiping, and is it part of Jiangmen?",
        answer:
          "Kaiping is a county-level city within Jiangmen in Guangdong. Its urban area, village clusters and Chikan create different overnight and road choices. A Jiangmen regional address or station does not automatically place you near the selected diaolou village.",
      },
      {
        question: "Is Kaiping better as a day trip or an overnight?",
        answer:
          "A focused day excursion can work when the complete return journey leaves enough time for selected sites and a meal. An overnight can improve pace, evening comfort and the route to a second subject. Compare the actual hotel, road pattern and useful time rather than the shortest train segment alone.",
      },
      {
        question: "How many nights should I spend in Kaiping?",
        answer:
          "Two nights give one full day plus flexible arrival and departure periods. Three nights allow a second village, Liyuan or Chikan subject at a slower pace. Extra nights should improve depth or comfort, not create a requirement to photograph every tower or change hotels repeatedly.",
      },
      {
        question: "Which Kaiping villages should I visit?",
        answer:
          "Choose Zili for a selected village-and-tower introduction, Jinjiangli for a different building and settlement context, or Majianglong for its village landscape setting. Sanmenli may add a specific heritage interest when access and routing fit. A small, well-explained selection is often better than rushing every component.",
      },
      {
        question: "Can I climb every diaolou?",
        answer:
          "No. Interior access depends on the building's current arrangements, and stairs can be steep or narrow. Choose actual open structures and a route suited to the traveler. Exterior architecture and village context can remain worthwhile when upper floors or climbing are unavailable or unsuitable.",
      },
      {
        question: "Are Liyuan Garden and Chikan the same as the UNESCO villages?",
        answer:
          "They are separate travel interests in the wider Kaiping landscape, not interchangeable village components or one shared ticket by default. UNESCO status, ownership, public access and current admissions should be checked for the actual place rather than inferred from a broad destination label.",
      },
      {
        question: "Is Chikan an untouched old town?",
        answer:
          "Its arcade townscape and emigrant history are important, but the present visitor setting involves redevelopment, restoration and managed tourism. Choose a visit or hotel stay for what it offers now, with access, evening activity and room arrangements made clear rather than promising an unchanged historic scene.",
      },
      {
        question: "Can a Kaiping trip include ancestral research?",
        answer:
          "Only as a separately defined research task with available records, language support and uncertainty explained. A surname or village lead does not guarantee relatives, a surviving house or archive access. Share existing Chinese documents before agreeing the scope; an ordinary heritage tour does not promise genealogical findings.",
      },
      {
        question: "Can older travelers enjoy Kaiping's villages?",
        answer:
          "A carefully chosen exterior and village route can work, but assess paving, thresholds, shade, toilets and the final hotel approach. Tower climbing is a separate decision. A car reaching the village does not establish step-free access, so choose the specific public route around the traveler's abilities.",
      },
    ],
    culturalStory: {
      title: "Follow the overseas connections without losing the local setting",
      paragraphs: [
        "Kaiping's diaolou are useful starting points for understanding how migration, remittances, local conditions and building choices interacted. Different towers served different purposes, and decorative references from abroad sit within a particular rural landscape. A guide should explain the selected structure and its setting rather than reduce every building to a European-style castle. Villages, domestic arrangements and materials can tell as much as a rooftop panorama.",
        "The wider story also includes gardens, town commerce and families with continuing connections elsewhere. That does not make every visit a personal homecoming or every resident available as a host. Distinguish documented history, interpretation and claims that still need evidence. A respectful public route can provide depth without private house entry, genealogical certainty or an assertion that village life has remained unchanged for visitors to photograph.",
      ],
    },
    foodStory: {
      title: "Use a dependable meal to make the countryside day work",
      paragraphs: [
        "A selected local meal can introduce rice dishes, vegetables and suitable meat or fish preparations without turning the architectural day into a second food marathon. Eel claypot rice is one regional possibility when the venue, preparation and the group's preferences fit; fish, bones, sauces and cooking deserve explanation rather than an automatic must-eat instruction. A balanced shared order and clear portions can be more valuable than a long list of specialties.",
        "For rural accommodation, confirm dinner hours, advance ordering and breakfast before fixing an early departure. Stocks, sauces, seafood and shared equipment matter for dietary needs even when a menu translation sounds simple. A tea break or snack stop should not quietly replace a comfortable seated lunch. Good meal planning leaves enough energy and time to understand the buildings rather than pushing the whole day toward the next transfer.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen base and settle in",
        description:
          "Allow the complete road journey from the ticketed gateway and any final luggage approach. Keep dinner clear and a nearby walk optional. Do not count a late check-in as an extra full village day or tie arrival to a difficult-to-move private appointment.",
      },
      {
        day: "Full day",
        title: "A village introduction and one contrasting subject",
        description:
          "Explore a selected cluster with its buildings, setting and actual interior access explained. Add a suitable meal and a contrasting garden or village interest only when the route fits. Choose tower climbing individually and leave exterior-focused alternatives available.",
      },
      {
        day: "Optional second full day",
        title: "Give another chapter proper time",
        description:
          "Use a third night for a different village, Liyuan or a clearly described Chikan visit, with restoration and current visitor arrangements understood. Keep time at the property and adjust for weather rather than adding several similar quick photographs.",
      },
      {
        day: "Departure",
        title: "Continue with the full countryside connection allowed",
        description:
          "Use the actual station, airport or onward Guangdong base, accounting for the final meal and road journey. This two-night framework with an optional third night is illustrative, not a published product or a promise of every interior, private home or family-history discovery.",
      },
    ],
  },
};
