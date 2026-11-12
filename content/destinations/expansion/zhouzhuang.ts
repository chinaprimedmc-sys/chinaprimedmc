import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhouzhuang.svg",
  alt: "Original Zhouzhuang planning schematic comparing a city-based day trip with an overnight, historic houses with canal walks, and exact hotel access; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const zhouzhuangGuide: ExpandedDestination = {
  id: "zhouzhuang",
  name: "Zhouzhuang",
  region: "east",
  kicker: "Look beyond the bridge photograph",
  description:
    "Choose a thoughtful Zhouzhuang day trip or overnight, with historic-house interpretation, canal walks, boat choices and room-level advice for a comfortable water-town visit.",
  stay: "A day visit or 1 night; 2 nights for a purposeful slower stay",
  bestFor:
    "Jiangnan canal architecture, historic houses and a selective extension from Shanghai or Suzhou",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["tongli", "wuzhen", "suzhou", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhouzhuang Water Town Guide: Day Trip or Overnight?",
    seoTitle: "Zhouzhuang Guide: Day Trip, Boats & Where to Stay",
    seoDescription:
      "Plan Zhouzhuang from Shanghai or Suzhou: day trip or overnight, Shen and Zhang houses, canal boats, hotel access and comparisons with Tongli and Wuzhen.",
    answer:
      "Zhouzhuang, within Kunshan near Suzhou, offers canal walks, the Twin Bridges and merchant-house history at Shen House or Zhang House. A day trip from Shanghai or Suzhou works when the full return journey leaves useful visiting time. One night adds an evening and morning; compare that benefit with the effort of moving hotels. A boat ride provides another perspective but needs separate arrangements. This is an established visitor town, so plan for company on the busiest streets.",
    stayAnswer:
      "Choose a day visit if you want a focused introduction while keeping a comfortable Shanghai or Suzhou hotel. Allow time for an actual house interior, a canal route and a seated meal, rather than spend the day moving between water towns. One night is worthwhile when you arrive with useful afternoon time and can enjoy dinner and the following morning. Two nights need a distinct reason: the property, a slower architecture or photography interest, or a genuinely arranged cultural activity. A late arrival and early departure add packing without much local experience. Count usable hours, not just the number of hotel nights.",
    hotelAnswer:
      "Compare a named property within the historic walking area with one outside it, using the exact room and final approach. A canal-side guesthouse may provide atmosphere but also stairs, passing voices, narrow access or different bathroom and insulation standards. A larger outside-area property can offer other facilities or simpler luggage handling, with the trip back to the evening streets to assess. Confirm bed, bathroom, heating or cooling, quiet, breakfast, lift and where the vehicle can stop. A Zhouzhuang or Kunshan address does not establish that the hotel is within the desired walking area. Admission and re-entry should be checked separately from the room rate.",
    sightseeingQuestion: "What is worth seeing in Zhouzhuang beyond the Twin Bridges?",
    sightseeingAnswer:
      "Use a historic house to understand the town at a different scale from the canals. At Shen House / Shenting or Zhang House / Zhangting, ask how rooms, courtyards, movement and waterside access relate to family life and commerce, distinguishing documented fabric from later work. The Twin Bridges, Shide Bridge and Yong'an Bridge, are a useful point on a wider walk rather than the entire visit. A boat can change your view of bridge spans and waterside facades when its actual route adds something. Choose fewer subjects with good explanation instead of collecting every interior included in a ticket.",
    visitorResources: [
      {
        label: "Zhouzhuang official tourism website",
        href: "https://www.zhouzhuang.net/",
        scope:
          "Starting point for destination and operator information. Confirm dated admission scope, open interiors, boats, hotel arrangements, re-entry, events and actual pickup points with the responsible operator. General promotion does not establish a private boat, room view or current opening.",
      },
      {
        label: "Kunshan municipal government",
        href: "https://www.ks.gov.cn/",
        scope:
          "Administrative and local background, mainly in Chinese. Zhouzhuang is within Kunshan, in Suzhou. A municipal address or transport reference does not establish a short walk from a station or unrestricted entry to historic buildings and private premises.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and full station names. Kunshan South and Suzhou stations are separate road-transfer gateways, not arrivals inside Zhouzhuang. Compare both station transfers and luggage with the complete road journey from the actual city hotel.",
      },
    ],
    serviceScope:
      "A proposal should specify the actual canal route, chosen house interiors, admissions, guide language, complete city transfers and the room if staying. Identify where the vehicle stops and how luggage reaches a pedestrian-area property. A boat needs its own route, boarding requirements, private or shared format and inclusion terms. A boatman's song, craft encounter, show or hosted visit is not automatically part of a boat ride or walking tour. Private guiding adds interpretation and flexibility, not exclusive streets, after-hours entry or access to residents' homes. Establish current arrangements for the travel date before promising a particular activity.",
    routeAdvice:
      "Pair Zhouzhuang's merchant houses and canals with Suzhou's classical gardens or Shanghai's city history. If you prefer a garden within the water town, compare Tongli before choosing. Share your dates, actual city hotel, available hours, walking needs and interest in houses, photography or an overnight. We can assess a tailored day or one-night stay, setting out the full transfer, entry, guiding and any boat arrangements. These services are separate from a city-only itinerary.",
    practicalPlanning: {
      timing:
        "Put the chosen house visits within their confirmed opening and keep the walk and meal around them. Public-lane access, ticketed interiors, boat operation and evening programs may have different schedules. An early or late walk can change the atmosphere but does not guarantee quiet. Weekends, holidays and special events can affect traffic, rooms and visitor numbers. In hot or wet weather, shorten the exposed route and take a proper indoor break rather than rush through every included stop. Keep the return journey compatible with the actual city dinner, train or onward flight.",
      walking:
        "Expect bridge steps, thresholds, uneven paving and potentially slippery stone. The cumulative number of canal crossings matters more than the small scale of a map. Historic houses and guest rooms may add their own stairs or narrow approaches. Check the particular route, toilets, seating and any usable alternatives for limited mobility. Boat boarding can require balance and steps, so a boat is not automatically an accessible substitute for walking. A private road vehicle can reduce city transfers but cannot reach every lane, interior or waterside room.",
      cost: "Compare the complete pickup and return addresses, vehicle or rail-plus-road sequence, guide time, exact admissions and room category. A boat, performance, cultural activity or additional interior may be a separate item even when a walking-area ticket is included. For an overnight, check breakfast, luggage and re-entry. Identify optional purchases clearly. Premium value comes from useful local time, thoughtful interpretation, a suitable room and a well-paced day rather than an undefined luxury label or a promise of empty canals.",
    },
    attractions: [
      "Twin Bridges / Shuangqiao: Shide Bridge and Yong'an Bridge within a wider canal route",
      "Shen House / Shenting for a historically grounded house visit",
      "Zhang House / Zhangting as a separate architectural subject when it adds a difference",
      "A selected canal-side and side-lane walk connecting bridges, buildings and everyday movement",
      "An optional operating boat route with actual boarding and format confirmed",
      "A comfortable local meal and an evening walk when an overnight earns its place",
      "Suzhou gardens, Tongli or Wuzhen as distinct onward choices or alternatives",
    ],
    stays: [
      {
        label: "A day visit / keep the city hotel",
        advice:
          "Choose one or two complementary subjects, a coherent canal walk and a seated meal. Compare the complete journey from the real Shanghai or Suzhou hotel, not just a short train segment. Avoid losing the day to a circuit of several distant water towns.",
      },
      {
        label: "1 night / make the evening and morning useful",
        advice:
          "Arrive in time for the desired interiors, settle into a confirmed room and enjoy dinner without a long return drive. Leave a useful morning before departure. Confirm luggage, entry and breakfast so the hotel move supports a slower stay rather than introduces avoidable work.",
      },
      {
        label: "2 nights / the property or a specific interest should justify it",
        advice:
          "Use the extra time for a property you genuinely want to enjoy, drawing or photography at a relaxed pace, or an actually arranged cultural interest. Do not manufacture a second full sightseeing day by repeating similar bridges and interiors. Leave room to sit, look and understand the place.",
      },
    ],
    hotelAreas: [
      {
        name: "Historic walking area / choose the room, not just the canal address",
        advice:
          "Assess the exact room's position, bathroom, stairs, sound insulation and temperature control. A canal window can bring passing voices or activity as well as a view. Establish the final walk and luggage assistance from the permitted road approach, with entry and re-entry terms checked for the booking.",
      },
      {
        name: "Outside the historic core / compare facilities and evening access",
        advice:
          "A larger or road-accessible property can suit guests who prioritize room comfort, luggage or a particular facility. Plot the actual journey to the chosen entrance and dinner. Near Zhouzhuang is not the same as inside the walking area, and a facility shown in marketing needs current confirmation.",
      },
      {
        name: "Shanghai or Suzhou base / avoid an unnecessary hotel change",
        advice:
          "Stay in the city neighborhood that supports the wider itinerary, then make Zhouzhuang a selective day. The best transport choice depends on the actual starting address, not a general claim that one city is always easier. Include the complete return journey and a manageable day for everyone in the group.",
      },
    ],
    tradeoffs: [
      {
        title: "Zhouzhuang or Tongli depends on the subject you want",
        advice:
          "Zhouzhuang can suit a canal-and-historic-house introduction with an optional boat. Tongli gives a clear garden focus through Retreat and Reflection Garden. Choose using the actual sites, city base and available time; neither town is permanently empty or free of contemporary tourism. A meaningful choice is more useful than a ranking based on one busy photograph.",
      },
      {
        title: "Zhouzhuang or Wuzhen is also an accommodation decision",
        advice:
          "Compare Zhouzhuang's specific room and house-and-canal route with Wuzhen's Dongzha/Xizha areas and actual overnight property. The locations, admissions and transfer sequences differ. Choose both only when the subjects and nights justify another move, not simply because they appear together in a list of famous water towns.",
      },
      {
        title: "Shen Wansan's stories and Shen House's history are different things",
        advice:
          "Local stories about the merchant Shen Wansan can add context, but the present Qing-period Shen House should not be introduced as his surviving personal home. Ask the guide to distinguish the documented building, later family associations and popular legend. This makes the interior more interesting than a loosely repeated richest-man story.",
      },
      {
        title: "A boat changes the angle, not the entire visit",
        advice:
          "Water-level views help explain bridges and facades, while walking gives closer access to houses and lanes. Compare the current boat route with the walk you already plan. Establish boarding, seating, weather arrangements and sharing before paying; do not assume every boat enters the same canals or includes entertainment.",
      },
      {
        title: "Canal atmosphere and sleep quality need separate checks",
        advice:
          "A room on a lively stretch may be attractive during the day and noisy when the guest wants to rest. The quieter room may face a courtyard or a less photographed lane. Compare the actual bed, bathroom, sound insulation and access with the view instead of treating a canal-facing label as proof of a premium stay.",
      },
      {
        title: "A visitor town can still reward a thoughtful visit",
        advice:
          "Commerce, restoration and domestic tourism are part of Zhouzhuang today. Good interpretation can connect the visible waterways, buildings and movement without claiming every shop or street scene is unchanged ancient life. Residents and staff should not be expected to provide an unarranged personal encounter for a visitor's idea of authenticity.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "shanghai",
        advice:
          "Shanghai offers a contrasting urban stay and major transport gateways. Compare a Zhouzhuang day visit from the exact city hotel with an overnight whose room and local time justify moving luggage. Include the full return journey and avoid placing a short water-town visit against a tight international departure.",
      },
      {
        slug: "tongli",
        advice:
          "Tongli offers a garden-led alternative through Retreat and Reflection Garden, alongside a separate canal-town setting. Compare that with Zhouzhuang's actual house interiors and boat route. Most short trips need one chosen town; add another only when the difference and complete transfer justify the time.",
      },
      {
        slug: "wuzhen",
        advice:
          "Wuzhen adds a different Dongzha/Xizha visitor and accommodation model in Zhejiang. Compare the room, evening plans and full road or rail-and-road journey with a Zhouzhuang stay. Do not treat it as another district of the same town or a compulsory extension to a first water-town visit.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou provides classical gardens and city canal neighborhoods that can give the water-town visit a useful contrast. Protect enough time for the city, then compare a Zhouzhuang excursion with a separate overnight. Suzhou's actual hotel and railway station determine the complete route.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit walking and time beside the water, with rain and holiday crowds still possible. Summer needs heat-aware timing and indoor breaks; canals do not remove humidity. Winter can be cold and damp, making a warm room and meal valuable. Conditions affect boat operation and the comfort of bridge crossings. Choose dates for the wider journey and check current arrangements rather than promise mist, blossom or quiet streets from a seasonal image.",
    orientation:
      "Zhouzhuang lies within Kunshan, in Suzhou, Jiangsu. It is separate from Suzhou's historic city center and from Shanghai. Kunshan South railway station and Suzhou's stations are gateways requiring road transport, not stops inside the water town. Shen House / Shenting and Zhang House / Zhangting are individual interiors; Twin Bridges / Shuangqiao refers to Shide Bridge and Yong'an Bridge. Tongli and Wuzhen are different towns, with their own areas and admission arrangements.",
    experiences: [
      "Use a historic house to understand rooms, courtyards and waterside movement beyond the bridge view",
      "Follow a coherent canal route and compare an optional boat's actual perspective",
      "Enjoy a proper meal and an honestly chosen room when the overnight adds value",
    ],
    planningNotes: [
      "Choose day visit or overnight by complete travel and useful local hours",
      "Separate house admission, public-lane access, boats and any evening program",
      "Check the exact room, noise, stairs, luggage and final vehicle approach",
    ],
    arrival:
      "Compare a complete road pickup from the actual Shanghai or Suzhou base with rail through a specifically named station plus local road transport. Kunshan South is not Zhouzhuang, and the fastest train segment may not produce the easiest full journey. Allow both station transfers, luggage, traffic and the final walk to the chosen entrance or property. For an overnight, establish the check-in point and who handles bags before arrival. Keep last-entry interiors and onward flights separate from an uncertain road transfer.",
    gettingAround:
      "Walk a selected loop that links the house visit, bridges and a suitable meal without repeated crossings solely to collect more landmarks. Confirm pickup at a real permitted road point. A boat is an optional defined route, not transport to every room or entrance. Rain, heat and the group's energy can change what is enjoyable, so retain a shorter route and clear meeting point. Children and guests with limited mobility need the actual steps, toilets and breaks assessed rather than a general assurance that the town is small.",
    stayStrategy:
      "Keep the city hotel for a day visit unless the real Zhouzhuang room and useful evening and morning justify moving. One night should add local time rather than just a different postal address. Two nights work for a slow property-led or specific-interest stay, with space left unprogrammed. A larger outside room can be a better fit than a historic guesthouse if bathroom, stairs or noise would compromise comfort; choose knowingly and allow the actual return to the walking area.",
    firstTimerNote:
      "Start with the question you want the town to answer: how canal and household life connect, what a boat reveals, or whether an overnight would be enjoyable. Use the guide to explain specific buildings and visible details rather than repeat a string of ancient-town superlatives. A selective, well-paced visit with a comfortable meal can leave a stronger impression than several similar towns and a collection of hurried bridge photographs.",
    faqs: [
      {
        question: "Where is Zhouzhuang, and is it in Shanghai?",
        answer:
          "Zhouzhuang is within Kunshan, in Suzhou, Jiangsu, not in Shanghai. It can be visited from Shanghai or Suzhou with a complete transport plan. Use the town name 周庄 and the full property or entrance address instead of assuming a broad Kunshan or Suzhou location identifies the arrival point.",
      },
      {
        question: "Can I visit Zhouzhuang on a day trip from Shanghai?",
        answer:
          "Yes, when the actual pickup, return journey and a selective visit fit the day. Compare direct road transport with a named rail gateway plus both local transfers. Include a house visit, canal walk and proper meal rather than add several water towns or judge the day by a short train segment alone.",
      },
      {
        question: "Is Zhouzhuang a good day trip from Suzhou?",
        answer:
          "It can add a distinct house-and-canal setting to a Suzhou garden itinerary. Count the complete journey from the actual hotel and protect time for Suzhou itself. With very limited days, a well-chosen city garden and neighborhood may be more rewarding than adding another rushed excursion.",
      },
      {
        question: "Should I stay overnight in Zhouzhuang?",
        answer:
          "Stay when the chosen room, dinner and following morning add value. A day visit is sensible if you prefer to keep the city hotel. Late check-in and early departure can remove most of the benefit, and an overnight does not guarantee empty canals or every interior open in the evening.",
      },
      {
        question: "Should I choose Zhouzhuang or Tongli?",
        answer:
          "Choose Zhouzhuang for a particular canal-and-historic-house route or a suitable boat experience. Tongli adds a clear garden subject through Retreat and Reflection Garden. Compare the actual sites, transport and interests; neither town is universally quieter or more authentic, and most short trips do not require both.",
      },
      {
        question: "Is Zhouzhuang or Wuzhen better for an overnight?",
        answer:
          "Compare the actual property and room as well as the town. Zhouzhuang has its house-and-canal setting, while Wuzhen has separate Dongzha/Xizha choices and different overnight arrangements. Access, admissions, luggage and the complete onward route matter more than a general ranking of famous water towns.",
      },
      {
        question: "Is a boat ride included in Zhouzhuang admission?",
        answer:
          "Check the exact dated ticket or proposal. A walking-area or house admission should not be assumed to include a boat. Confirm the operating route, boarding, seating, private or shared format and weather arrangements. Any song, host or performance is separate unless explicitly included.",
      },
      {
        question: "Was Shen House the home of Shen Wansan?",
        answer:
          "Do not introduce the present Qing-period Shen House as the surviving personal home of the much earlier merchant Shen Wansan. Distinguish the documented building and later family associations from popular stories. The actual architecture is worth understanding without merging different periods into one legend.",
      },
      {
        question: "Is Zhouzhuang suitable for limited mobility?",
        answer:
          "It needs a route-specific assessment of bridge steps, thresholds, paving, house interiors and the hotel approach. Plan toilets, seating and a workable pickup. A private car or boat does not automatically make the historic area step-free; choose a shorter assessed route rather than assume its compact map means easy access.",
      },
      {
        question: "What is Wansan pork hock in Zhouzhuang?",
        answer:
          "Wansan pork hock is a rich braised pork dish associated with local food culture and stories about Shen Wansan. It is substantial and often better shared than added to a long tasting list. Confirm the portion, preparation and ingredients, and choose alternatives for guests who do not eat pork.",
      },
    ],
    culturalStory: {
      title: "A house gives the canal town its human scale",
      paragraphs: [
        "A bridge photograph shows how waterways meet; a house visit can explain how people occupied the spaces beside them. Look at the transition from entrance to courtyard and hall, the light reaching different rooms and the relationship between a building and the canal. Compare Shen House and Zhang House only when their visible differences and the interpretation add something. Two unexplained interiors are less useful than one visit that makes a guest notice the town differently afterward.",
        "Stories about wealth and the merchant Shen Wansan are part of Zhouzhuang's visitor narrative, but they should be separated from the date and documented history of the building in front of you. Repairs, restoration and present-day visitor use add further layers. A guide who makes those distinctions can be engaging without presenting legend as proof. Public streets and open interiors do not provide permission to enter homes or photograph residents without regard for their wishes.",
      ],
    },
    foodStory: {
      title: "Choose one regional centerpiece and leave room for a good meal",
      paragraphs: [
        "Wansan pork hock is a familiar local name for a rich braised pork preparation, with a portion and texture worth explaining before ordering. A group that wants to try it may be happier sharing one dish with vegetables and simpler accompaniments than sampling every snack first. Guests who avoid pork should have a proper alternative planned. A canal-side table can add atmosphere, but seating, temperature and a kitchen that cooks well matter more than the view alone.",
        "Ask about pork or meat stock, fish and shellfish, soy, wheat and shared preparation equipment when dietary needs matter. A vegetable or tofu dish may still contain animal ingredients. Serious allergies require a kitchen that can explain its preparation and an alternative if it cannot. Local food stories can be enjoyable without proving that a present-day recipe has survived unchanged for centuries. Keep tastings and purchases optional, with any cooking class or hosted meal separately arranged.",
      ],
    },
    itinerary: [
      {
        day: "Arrival or day-visit morning",
        title: "Reach the correct entrance and begin with a house",
        description:
          "Complete the journey from the actual city base and arrange luggage if staying. Visit the selected open house with enough explanation to understand rooms, courtyards and the waterside setting. Keep its confirmed opening separate from a late or uncertain transfer.",
      },
      {
        day: "Lunch and afternoon",
        title: "Connect bridges, canals and a proper meal",
        description:
          "Follow a manageable route including the Twin Bridges area when it fits, then take a seated meal. Add a boat or a contrasting interior only when it improves the visit. Day visitors return to their city hotel with the complete onward journey allowed.",
      },
      {
        day: "Optional overnight",
        title: "Use the room and evening you chose to stay for",
        description:
          "Settle into the confirmed property, enjoy dinner and choose an evening walk according to current access and weather. Do not assume the houses, boats or performances run late because public lanes remain accessible. The room's comfort should justify the hotel move.",
      },
      {
        day: "Following morning",
        title: "Leave time before returning to a different city chapter",
        description:
          "Enjoy breakfast and a short walk if suitable, then coordinate luggage and the exact road pickup. A second night needs a clear additional purpose. This day-or-overnight outline is illustrative, not a published package or a guarantee of boat operation, empty streets, ticket inclusions, private hosts or room views.",
      },
    ],
  },
};
