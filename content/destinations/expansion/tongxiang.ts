import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/tongxiang.svg",
  alt: "Original Tongxiang planning schematic separating Wutong city, Puyuan, Shimen and Wuzhen, with city-room, specialist-interest and station-transfer choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const tongxiangGuide: ExpandedDestination = {
  id: "tongxiang",
  name: "Tongxiang",
  region: "east",
  kicker: "Choose the cultural interest before you choose the city night",
  description:
    "Look beyond the Wuzhen station transfer: compare Tongxiang's city base, Puyuan textile interests and Shimen's Feng Zikai connection, with distinct hotel and route decisions.",
  stay: "A purposeful day visit or 1 city night; count water-town nights separately",
  bestFor: "Modern Chinese art and writing, textile interests and a more selective Jiangnan route",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["puyuan", "wuzhen", "jiaxing", "haining", "hangzhou", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tongxiang Travel Guide: City, Puyuan, Shimen & Wuzhen",
    seoTitle: "Tongxiang Travel Guide: Beyond Wuzhen",
    seoDescription:
      "Compare Tongxiang city, Puyuan textile interests and Shimen's Feng Zikai connection. Choose a useful overnight, Wuzhen base and complete station transfers.",
    answer:
      "Tongxiang (桐乡) is a county-level city within Jiaxing municipality in northern Zhejiang. Wuzhen is one town within it, not another name for the whole city. Beyond a Wuzhen stay, Tongxiang can be interesting for a selected city museum visit, Puyuan's textile and visitor-town setting, or Shimen's connection with the artist and essayist Feng Zikai. These are separate places and subjects, so choose one that adds meaning to your journey. A central city night around Wutong can suit an actual cultural or professional purpose. If you are only using Tongxiang railway station to reach Wuzhen, you may not need a city hotel at all.",
    stayAnswer:
      "Choose a day visit when one named cultural subject and a meal fit the complete journey from your existing base. One city night can make sense when a confirmed visit, a comfortable room and useful time before or after it justify the stop. Two nights need a broader purpose, such as separate literary and textile interests with real access, or time at a property you want to use. Count Wuzhen or a Puyuan property stay separately from a Wutong city night. Do not add nights simply because several towns share a Tongxiang address, and do not build a longer stay around a workshop that has not agreed to receive visitors.",
    hotelAnswer:
      "For an urban stay, compare the actual Wutong-area hotel with the chosen museum, meals and next day's road route. For a water-town overnight, choose the named Wuzhen or Puyuan property and confirm its visitor-area, entry and luggage terms. A station-area room serves a different purpose again. Check the exact bedroom, bathroom, sound insulation, temperature control, breakfast and pickup approach. A Tongxiang hotel label can cover very different locations; it does not establish walking distance to Wuzhen, Puyuan or Shimen. Avoid repeated commuting when a room at the place you actually want to experience would work better.",
    sightseeingQuestion: "Is Tongxiang worth visiting beyond Wuzhen?",
    sightseeingAnswer:
      "Yes, when modern Chinese art and writing, a particular museum collection or an actually arranged textile interest appeals to you. Feng Zikai's Shimen connection provides a different subject from Wuzhen's canal-town stay, while Puyuan combines textile associations with a separately managed visitor setting. If your interest is simply an introductory water-town walk and you have few days, a good Wuzhen stay plus Hangzhou or Shanghai may be stronger than adding the city automatically. Tongxiang should earn its place through a clear visit, not merely appear because its name is printed on the train ticket.",
    visitorResources: [
      {
        label: "Tongxiang municipal government",
        href: "https://www.tx.gov.cn/",
        scope:
          "Starting point for local background and links to current cultural or visitor information, mainly in Chinese. Confirm the exact institution, exhibition, property or visitor-area terms with the actual operator. A municipal reference does not establish production access, an available host or a dated cultural program.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services to the full station name. Tongxiang railway station is a separate gateway from Wutong city, Wuzhen, Puyuan and Shimen. Compare both terminal transfers and the actual onward road with a direct road journey from the starting hotel.",
      },
    ],
    serviceScope:
      "A tailored visit should name the actual cultural site or host, learning focus, guide language, current admission or appointment arrangements, exact pickup and full transfers. Textile retail, a showroom, a working facility and a hands-on session are different experiences. Any professional meeting requires a willing provider and agreement on language, photography and the purpose of the visit. Private guiding does not imply factory entry, access to collections in storage or a meeting with an artist's family. For an overnight, specify the property and room category. No specialist, workshop, host or private access is promised by this guide.",
    routeAdvice:
      "Tell us whether you are arriving for Wuzhen, a literary interest, textiles or a wider Jiangnan trip, with dates, available nights and room requirements. We can compare a direct station-to-town transfer with a deliberate Tongxiang city or specialist-interest stop. Keep Jiaxing's South Lake, Haining's dated tide plan and Hangzhou's lake and tea interests distinct. No matching published Tongxiang city itinerary is listed here. A Wuzhen or wider China product includes city visits, Puyuan, Shimen, professional meetings or accommodation only when its actual itinerary and service scope say so.",
    practicalPlanning: {
      timing:
        "Choose the actual visit and opening or appointment first, then arrange the sequence and room. Museums, former residences, visitor towns and working businesses do not share a single schedule. A public holiday can increase town traffic while reducing the availability of a particular professional host. Leave time for the final road from the station and a seated meal. Harvest, textile production and craft demonstrations are not year-round visitor programs by default. If access is unavailable, use a relevant public cultural visit or omit the detour rather than substitute an unannounced sales stop.",
      walking:
        "Assess each destination separately. A city museum, a former-residence route and a canal-town walk can involve different steps, thresholds, seating and luggage arrangements. Puyuan and Wuzhen visitor areas may have pedestrian sections and a final walk to the room. A private car cannot reach every doorway or make a historic-style building step-free. Check toilets, lifts, shade, indoor breaks and a shorter route for the actual group. Do not make Shimen, Puyuan and Wuzhen one compulsory circuit merely because they appear in the same municipal guide.",
      cost: "Compare the same hotel and station addresses, vehicle time, guide language, named visits, current admissions and any separately agreed specialist fee. For textiles, distinguish a learning visit from retail or a commercial sourcing appointment and clarify purchase expectations in advance. Add the exact room, breakfast, luggage handling and visitor-area terms for an overnight. Premium value is a meaningful confirmed subject, capable interpretation, comfortable logistics and enough time to absorb it, rather than a list of unconfirmed hosts or unnecessary hotel changes.",
    },
    attractions: [
      "Tongxiang Museum when the current collection displays match the visitor's interests",
      "Wutong as an urban base for a selected cultural visit and local meal",
      "Shimen and the Feng Zikai / Yuanyuan Hall connection as a separate art-and-literature chapter",
      "Puyuan's textile associations, distinguished from its managed historic-town visitor area",
      "A specifically arranged textile or professional visit when the provider and learning focus are confirmed",
      "Wuzhen's Dongzha/Xizha choices as a separate town stay, not automatic city coverage",
      "Hangbaiju chrysanthemum tea as a local tasting interest, without a promised farm visit",
    ],
    stays: [
      {
        label: "No city night / continue to the real destination",
        advice:
          "If the ticket is simply your gateway to Wuzhen or another confirmed property, compare a direct onward transfer. Add a city stop only when the actual open visit, luggage plan and usable hours make it worthwhile. A station arrival alone is not a reason to change hotels twice.",
      },
      {
        label: "1 night / one clear cultural or professional purpose",
        advice:
          "Stay in the base that serves the actual visit, with a comfortable meal and enough time around check-in. A city museum and an agreed specialist meeting can be useful reasons, but they should not be assumed available. Explain what happens if the intended host or display cannot be included.",
      },
      {
        label: "2 nights / distinct interests or a property-led stay",
        advice:
          "Give separate art-and-literature and textile interests their own time, or use a property you actively want to enjoy. Compare this with splitting the nights between different bases. Do not turn every day into long drives to towns that could have been visited more comfortably from another room.",
      },
    ],
    hotelAreas: [
      {
        name: "Wutong urban area / a city visit with convenient meals",
        advice:
          "Map the actual museum, appointment and restaurants rather than book by the city label alone. Check room noise, lifts, bathroom, temperature control and drop-off access. A well-located city room can suit a purposeful short stay without needing to imitate a water-town guesthouse.",
      },
      {
        name: "Wuzhen or Puyuan / choose the town and property",
        advice:
          "Book the place whose evening, morning and room you want to experience. Wuzhen has separate Dongzha/Xizha choices; Puyuan has its own visitor-area and hotel arrangements. Confirm entry, re-entry, check-in and luggage separately. A visitor-town property and a historic original house are not interchangeable descriptions.",
      },
      {
        name: "Shimen visit or station-area room / solve the actual route",
        advice:
          "A Shimen literary interest needs its own journey and current site access. A station room may serve a practical departure but can add travel for dinner and culture. Compare the complete sequence with keeping the existing city or town hotel; neither location is automatically the best base for the wider municipality.",
      },
    ],
    tradeoffs: [
      {
        title: "Tongxiang and Wuzhen are different levels of place",
        advice:
          "Tongxiang is the wider county-level city; Wuzhen is one town within it. Stay in Wuzhen if evenings in the water town are the priority; choose a Tongxiang city hotel for a wider urban or cultural itinerary. Use the precise town, property and station in every booking and transfer.",
      },
      {
        title: "Puyuan's visitor town and textile economy are distinct interests",
        advice:
          "Historic textile associations, contemporary knitwear businesses and a managed canal-town visit can be connected in the interpretation, but they do not share automatic access. A visitor-area ticket does not include a production facility, designer meeting or hands-on workshop. Distinguish surviving heritage, restoration and modern development rather than call every facade original.",
      },
      {
        title: "A literary former residence needs interpretation, not only a photograph",
        advice:
          "At a Feng Zikai-related Shimen visit, explain the artist's drawing, writing and attention to everyday life using the spaces and displays currently accessible. Distinguish the historical home and its story from reconstruction or commemorative presentation. A specialist discussion needs its own provider; a public visit does not imply access to personal archives or family members.",
      },
      {
        title: "A textile shopping stop is not a cultural workshop",
        advice:
          "Agree whether the guest wants to learn about materials and making, buy finished clothing or discuss commercial sourcing. Each requires a different provider, time allowance and language support. Keep purchase expectations explicit and do not replace an unavailable workshop with a showroom without telling the guest.",
      },
      {
        title: "The best route may omit a city stop",
        advice:
          "A short first Jiangnan trip can be stronger with one chosen water town and enough time in Hangzhou, Shanghai or Suzhou. Add Tongxiang's other interests when they are specific enough to justify the journey. Recommending fewer stops can preserve the depth and comfort that make the trip worthwhile.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "puyuan",
        advice:
          "Puyuan now has a separate guide to its managed canal-and-courtyard visitor setting, named cultural spaces and day-visit versus overnight choices. Use it to compare actual rooms, entry and luggage terms, and keep textile learning separate from clothing retail or assumed factory access. A city-level overview is not a substitute for choosing the specific town property and route.",
      },
      {
        slug: "wuzhen",
        advice:
          "Wuzhen is a separate town within Tongxiang, with Dongzha/Xizha routes and property arrangements of its own. Compare going directly there with adding a purposeful city or Shimen chapter. A Tongxiang station transfer or Wutong room does not automatically provide the water-town evening you want.",
      },
      {
        slug: "jiaxing",
        advice:
          "Jiaxing city offers South Lake's modern historical context and Yuehe canal-side streets. Tongxiang sits within the wider municipality but is not a neighborhood beside those sites. Compare the actual cultural interests and complete hotel-to-hotel journey rather than add a city night solely for the name.",
      },
      {
        slug: "haining",
        advice:
          "Haining adds a separate Yanguan and Qiantang tide-planning subject, with Xiashi literary interests as another option. Its viewing window needs a dated assessment and permitted facility. Do not make a fixed tide visit depend on an uncertain textile appointment or a tightly packed circuit of towns.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou offers West Lake, Longjing tea and a contrasting city stay. Compare dated trains to the exact Tongxiang gateway and both local transfers with road travel. Protect useful lake and tea time rather than turn a short Hangzhou stay into repeated commuting to unconfirmed specialist visits.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai provides metropolitan culture and international gateways. Compare a direct road trip with rail through Tongxiang and the final journey to the actual town or host. A short train segment does not describe the whole visit, and flight connections need buffers independent of workshop or visitor-town schedules.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit selected town walks, with rain and holiday crowds still possible. Summer calls for cooling, shade and indoor breaks; winter needs warm rooms and shorter exposed sections. A literary or museum visit may depend more on current opening and the guest's interests than on a scenic season. Hangbaiju harvest and processing are seasonal working activities, not standing visitor programs. Choose dates for the whole Jiangnan trip and any actual host availability rather than promise blossoms, field access or a live production demonstration.",
    orientation:
      "Tongxiang is within the wider Jiaxing municipality in northern Zhejiang. Wutong is the central urban base; Wuzhen, Puyuan and Shimen are separate towns and route decisions. Tongxiang railway station is another location again and does not deliver passengers directly to a water-town entrance. Feng Zikai's Shimen connection is a different literary subject from Mao Dun's Wuzhen association. Use the exact town, current site name and hotel address rather than treat all Tongxiang cultural interests as one pedestrian district.",
    experiences: [
      "Choose one cultural display or Shimen art-and-literature interest with time for interpretation",
      "Separate Puyuan's visitor-town setting from any actually arranged textile-learning visit",
      "Enjoy a local meal and the right base instead of repeatedly commuting between town hotels",
    ],
    planningNotes: [
      "Choose the real subject and current access before adding a city night",
      "Separate Wutong, Wuzhen, Puyuan, Shimen and the railway gateway in every transfer",
      "Confirm the host, language and purchase expectations for any specialist visit",
    ],
    arrival:
      "Compare dated trains to Tongxiang with a direct road journey from the actual Shanghai, Hangzhou or other city hotel. Include the departure transfer, boarding, luggage and the final road to Wutong, Wuzhen, Puyuan or Shimen. The railway station is not the city museum, town entrance or professional meeting address. For an overnight, agree the exact check-in point and last luggage approach. Avoid fixing a specialist appointment or final interior entry too close to an uncertain flight arrival or a train connection with little recovery time.",
    gettingAround:
      "Treat the city and individual towns as separate road stages, then choose a manageable walking route at the destination. Check current interiors, thresholds, lifts, seating, toilets and rain or heat alternatives. A private vehicle reduces some transfers but does not create access to a working facility or every pedestrian lane. For a professional visit, agree the meeting address and contact arrangements with the actual provider. If a host becomes unavailable, use the agreed alternative rather than improvise access or substitute shopping without consent.",
    stayStrategy:
      "Use a Wutong city room when it serves the real cultural or professional visit. Use the named Wuzhen or Puyuan property when the town evening and room are the reason to stay. Keep the existing Hangzhou or Shanghai hotel when a focused day visit is sufficient. Compare exact rooms, sleep, bathroom, climate control, breakfast and luggage arrangements. Premium planning should make the route simpler and the subject clearer, not add a nominal city night that leaves less time at the destination the guest actually values.",
    firstTimerNote:
      "Ask what you would like to understand beyond the canal-town scenery. Feng Zikai's observation of everyday life, a museum subject or a real textile encounter can each provide a distinct reason to go farther. One well-interpreted interest is enough for a purposeful detour. If none appeals, a direct Wuzhen stay is a sensible choice; the wider city does not need to be added merely because the rail ticket uses its name.",
    faqs: [
      {
        question: "Is Tongxiang the same place as Wuzhen?",
        answer:
          "No. Tongxiang is a county-level city within Jiaxing municipality, Zhejiang, and Wuzhen is one town within it. Wutong city, Puyuan, Shimen, the railway station and individual hotels are separate locations. Use the exact destination address rather than the municipal name alone for pickup and room bookings.",
      },
      {
        question: "Is Tongxiang worth visiting beyond Wuzhen?",
        answer:
          "It can be for a specific art-and-literature interest, current museum display or actually arranged textile visit. Choose the subject first, then assess the route. If your interest is an introductory water-town stay and time is short, going directly to Wuzhen and preserving time in other cities may be more worthwhile.",
      },
      {
        question: "Should I stay in Tongxiang city or Wuzhen?",
        answer:
          "Choose the city for a real Wutong-area cultural or professional purpose and convenient urban meals. Choose Wuzhen when its visitor areas, actual property and evening are the priority. Compare the complete transfer, room and usable hours. A city room is not an interchangeable substitute for a water-town overnight.",
      },
      {
        question: "Does Tongxiang railway station serve Wuzhen directly?",
        answer:
          "Tongxiang is a railway gateway, not the Wuzhen entrance or hotel. Check dated services and arrange the final road transfer to the actual check-in point. Wutong, Puyuan and Shimen need different addresses again. Include both terminal transfers and luggage when comparing train travel with a direct road journey.",
      },
      {
        question: "What is the difference between Puyuan and Wuzhen?",
        answer:
          "They are separate towns within Tongxiang. Wuzhen has distinct Dongzha/Xizha visitor and property choices. Puyuan offers its own textile associations and managed historic-town setting. Compare the specific room, visit and full journey; a visitor-town booking in either place does not include a working textile facility or specialist host.",
      },
      {
        question: "Can I visit a textile workshop in Tongxiang or Puyuan?",
        answer:
          "Only when an actual provider and visit are confirmed. A retail showroom, working facility, commercial meeting and hands-on activity are different arrangements. Agree the learning or business purpose, language, photography, timing and purchase expectations in advance. The region's textile reputation does not establish public factory access.",
      },
      {
        question: "Where can I explore Feng Zikai's connection with Tongxiang?",
        answer:
          "Shimen and the Yuanyuan Hall association provide a distinct art-and-literature subject. Confirm the current site, accessible displays, opening and interpretation before planning the journey. Distinguish the historical home and its story from reconstruction or commemorative presentation; a former-residence visit does not imply access to private archives or family members.",
      },
      {
        question: "How many nights do I need in Tongxiang?",
        answer:
          "A purposeful day or one city night can serve one cultural or professional interest. Two nights need distinct additional interests or time at a property you want to use. Count Wuzhen or Puyuan nights according to their own stay plan. If Tongxiang is only the railway gateway, a city night may be unnecessary.",
      },
    ],
    culturalStory: {
      title: "Give art, writing and textile work different kinds of attention",
      paragraphs: [
        "Feng Zikai (丰子恺), known for drawing and essays attentive to ordinary life, offers a different way to approach the region from a sequence of scenic bridges. At a Shimen (石门) visit connected with Yuanyuan Hall, or Yuanyuantang (缘缘堂), choose a few works or biographical themes that can be explained well. Distinguish the historical house from later reconstruction and the current display setting. A public cultural visit can be rewarding without pretending to provide private archives, original objects in every room or a meeting with the family.",
        "Puyuan (濮院) connects a historical textile-trading story with a contemporary knitwear economy and a separately managed visitor-town setting. Explain how those strands differ: looking at a town, buying a garment and understanding a production process are not the same encounter. Compare surviving buildings, repairs and modern development rather than treat an attractive street as proof of unchanged history. For a specialist textile interest, the actual provider and learning content matter more than the number of shops passed or the label of a supposedly exclusive tour.",
      ],
    },
    foodStory: {
      title: "A local meal can be useful without becoming a shopping itinerary",
      paragraphs: [
        "Ask a kitchen about Tongxiang-style bao (煲), a pot or casserole preparation whose actual meat, seafood, vegetables, sauce and portion size vary by dish. Choose the version that suits the group rather than order by the regional name alone. A simple lunch with vegetables and another well-prepared dish may work better between visits than a long banquet. For a local drink, Hangbaiju (杭白菊), white chrysanthemum used for infusions, provides a subject tied to the region. A tasting is not a farm visit or a guarantee of harvest activity.",
        "Check broth, pork, fish, shellfish, soy, wheat, egg and shared equipment for dietary requests. For a chrysanthemum infusion or packaged blend, ask about the actual ingredients and any added tea, sweeteners or other botanicals; do not infer health benefits from a traditional name. Serious allergies require a kitchen able to explain and control its preparation. Keep retail purchases optional and distinguish a meal, a tasting and a hands-on session, each of which needs its own clear arrangements.",
      ],
    },
    itinerary: [
      {
        day: "Before arrival",
        title: "Choose one actual reason to visit beyond the station transfer",
        description:
          "Confirm the current cultural display, Shimen visit or textile provider and decide whether a city or town room serves it best. Compare the complete route with going directly to Wuzhen. Build an alternative around a real open visit rather than an unconfirmed list of hosts.",
      },
      {
        day: "Day visit or first day",
        title: "Give the chosen subject time and a comfortable meal",
        description:
          "Arrive at the actual address and take a focused museum, literary or agreed specialist visit. Leave time for interpretation, a seated meal and rest. Puyuan, Shimen and Wuzhen are alternatives or separate stages, not a compulsory one-day circuit through the entire city.",
      },
      {
        day: "Optional overnight",
        title: "Stay where the evening and the room add value",
        description:
          "Use a confirmed Wutong city room for the actual city purpose or the named water-town property for its own evening and morning. Confirm dinner, entry and luggage arrangements. A second night should add a distinct interest or property time rather than repeated commuting.",
      },
      {
        day: "Departure",
        title: "Continue with the station and next base clearly identified",
        description:
          "Collect luggage and allow the complete journey to the actual train or next hotel. This outline illustrates choices, not a published package. It does not guarantee factory access, designers, workshops, family meetings, original objects, farm activity, rooms or attraction inclusions.",
      },
    ],
  },
};
