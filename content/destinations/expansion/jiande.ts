import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jiande.svg",
  alt: "Original Jiande planning schematic separating Xin'anjiang city, Meicheng old town and a selected riverside stay; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const jiandeGuide: ExpandedDestination = {
  id: "jiande",
  name: "Jiande",
  region: "east",
  kicker: "A river journey with an old-town chapter of its own",
  description:
    "Plan Jiande around Meicheng, the Xin'an River and a comfortable local base, with clear distinctions from Qiandao Lake and a realistic two-night itinerary.",
  stay: "2 nights for one focused day; 3 for a slower river stay",
  bestFor: "River landscapes, Meicheng history and a quieter Zhejiang detour",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["hangzhou", "qiandao-lake", "huangshan", "shaoxing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jiande Travel Guide: Meicheng, River Stays & Itinerary",
    seoTitle: "Jiande Guide: Meicheng, River & Where to Stay",
    seoDescription:
      "Plan Jiande with Meicheng old town, Xin'an River walks and practical hotel choices. Compare two or three nights and a separate Qiandao Lake stay.",
    answer:
      "Jiande (建德) is a county-level city administered by Hangzhou in western Zhejiang. Its strongest leisure chapter combines a selected Xin'an River setting with Meicheng (梅城), the historic seat associated with Yanzhou, and a relaxed local meal. The modern Xin'anjiang urban area, Meicheng and individual riverside hotels are different bases, not neighboring entrances to one attraction. Two nights give one focused full day; three allow a separate river interest or more time at a property worth enjoying. Jiande is distinct from Qiandao Lake in neighboring Chun'an County, even though both belong to the wider Xin'an River story.",
    stayAnswer:
      "Choose two nights for a considered Meicheng visit and a selected river perspective, with arrival and departure counted as travel rather than complete sightseeing days. Three nights suit a slower room-led stay or a second distinct local interest. A day visit can work from a suitable starting point when the whole return journey leaves useful hours, but do not assume that a Hangzhou administrative address means a short city-center outing. One night is selective. More time needs a clear reason in the room, landscape or cultural subject rather than a longer checklist.",
    hotelAnswer:
      "Compare the Xin'anjiang urban area for practical meals and a chosen river walk with a specific Meicheng or old-town-edge room for time in the lanes. A more isolated riverside property can suit rest when the exact setting and facilities justify its roads. Use the actual address: Jiande station, the modern city center and Meicheng are separate points. Check quiet, bathroom, bedding, temperature control, lift or stairs, breakfast, dinner and pickup. A river-view listing does not establish a balcony, public shore path or swimming access.",
    sightseeingQuestion: "Should I prioritize Meicheng, the Xin'an River or a rural outing?",
    sightseeingAnswer:
      "Choose Meicheng for an old-town walk that explains Yanzhou's administrative and trading past, distinguishing surviving fabric from restoration and contemporary visitor streets. Choose a named Xin'an River section for a landscape walk or a separately confirmed boat service. A rural village, cave or outdoor activity is another route with different physical demands and should earn its place through a specific interest. For one full day, pair a coherent town visit with one manageable river subject and a proper meal. A river hotel does not require a boat outing to be worthwhile.",
    visitorResources: [
      {
        label: "Jiande municipal government",
        href: "https://www.jiande.gov.cn/",
        scope:
          "Official local context and dated public notices, mainly in Chinese. Confirm current Meicheng visitor routes, river services, weather-related restrictions and public attractions with the responsible operators. A city description does not establish a specific hotel's outlook, open interior or operating boat route.",
      },
      {
        label: "Hangzhou municipal government",
        href: "https://www.hangzhou.gov.cn/",
        scope:
          "Wider regional information. Jiande and Hangzhou's central West Lake area are different travel chapters despite the administrative relationship. Regional publicity does not make every river, reservoir or rural attraction one local excursion.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and precise station names. Compare Jiande / 建德 station with the full road to the chosen room or Meicheng entrance. Do not treat Jiande, Qiandaohu and other regional station names as interchangeable pickups.",
      },
    ],
    serviceScope:
      "A proposal should identify the actual hotel and room, exact gateway, full vehicle sequence, town route, guide language, admissions where applicable and meals. If including a boat, state the operator, route, boarding point, duration and weather alternative. Cycling, swimming, fishing, paddling, cave visits, private courtyards and hosted meals need their own appropriate arrangements and suitability checks. Private transport does not authorize river access or entry to private buildings. Agree a shorter or indoor alternative that retains the reason for the stay.",
    routeAdvice:
      "Jiande can add a quieter river-and-town chapter to a Hangzhou journey or a considered regional route toward Qiandao Lake and Huangshan. Include it when Meicheng, a particular river setting or an assessed property adds something different. Two consecutive waterside hotel changes may not improve a short trip; compare the experiences before booking both Jiande and a lake resort. Shaoxing provides a different literary and canal-city comparison in another direction. No matching published Jiande tour is recommended here. Share dates, gateways, cultural interests, walking needs and room priorities for a tailored route with named inclusions.",
    practicalPlanning: {
      timing:
        "Use a reliable full-day window for Meicheng and the chosen river perspective rather than a rushed stop between distant hotels. Leave time for lunch, sitting and an unhurried return. Any mist or reflection interest depends on conditions; schedule a useful ordinary walk rather than promise a photographic effect. River services and water levels follow their own current arrangements. Protect the full final drive before a train, especially if an activity has a fixed return time.",
      walking:
        "Old-town routes can involve stone paving, thresholds, steps and long periods on foot. A wall or tower approach, where open, may create a different stair load from the streets below. Riverside paths vary by location and can be wet or exposed. Confirm seating, toilets, actual drop-off and pickup. Boat boarding and any rural or cave route need separate assessment. A privately arranged vehicle does not make all old buildings or water edges step-free.",
      cost: "Compare the actual room, breakfast and dinner options, complete transfers, guiding hours and any named admissions or river service. A public promenade walk and a boat outing have different scope. A remote property can add transport and meal costs even when the room looks good value. A premium should buy sleep, comfort, useful time and clear interpretation rather than unverified private waterfront, guaranteed mist or a special host without an agreement.",
    },
    attractions: [
      "Meicheng / Yanzhou Ancient City through a selected public lane-and-history walk",
      "A specific currently open Meicheng cultural building, with its historical layers explained",
      "A named Xin'an River promenade or public viewpoint with practical pickup",
      "A separately confirmed river boat route when its scope and boarding suit the group",
      "A selected riverside property and its actually available grounds or facilities",
      "A regional meal with Yanzhou-style flavors and the level of heat agreed",
      "A rural, cycling or cave interest only as a separately assessed outing",
    ],
    stays: [
      {
        label: "Day visit / one coherent town-and-river subject",
        advice:
          "Use the real starting point and full return road to judge whether Meicheng, lunch and one landscape stop fit comfortably. Do not add the trip simply because Jiande sits within Hangzhou's wider administration. A well-paced single subject can be more useful than a transfer-day circuit.",
      },
      {
        label: "2 nights / one useful full day",
        advice:
          "Settle into a suitable room, give Meicheng and a selected river perspective the full day and allow a relaxed evening meal. Keep the principal visit away from uncertain arrival hours. Choose the base that matches these interests instead of the hotel with the most dramatic generic river photograph.",
      },
      {
        label: "3 nights / a slower property or second-interest stay",
        advice:
          "Add a separate local subject or more rest when the room, meals and available facilities support it. A boat day and a town walk should be selected by interest rather than treated as compulsory. Longer stays need a useful rain plan and a reason beyond another night beside water.",
      },
    ],
    hotelAreas: [
      {
        name: "Xin'anjiang urban area / practical meals and a selected river setting",
        advice:
          "Compare an actual river-facing room with a quieter practical address and the walk you intend to use. Check traffic, bedding, bathroom, temperature control and pickup. This is a different base from Meicheng; count the full cultural-day transfer rather than assume the historic town is next door.",
      },
      {
        name: "Meicheng or its edge / time in the old-town setting",
        advice:
          "A suitable room can make early or later lane walks easier. Ask about restaurant noise, courtyard acoustics, privacy, stairs and luggage approach. Confirm dinner and bathroom facilities. Historic styling does not establish original fabric, luxury service or step-free access.",
      },
      {
        name: "A named rural riverside property / a deliberate retreat",
        advice:
          "Check the exact shore position, room outlook, restaurant opening, wet-weather access and facilities available on your dates. Choose it when the property earns usable time. A remote setting can become less restful if every meal and cultural interest requires another long drive.",
      },
      {
        name: "A station-oriented hotel / a specific connection",
        advice:
          "Consider it when the exact train time justifies the location, then check the rest of the daily route and meal options. Station proximity is not proximity to every river walk or to the modern city center. Give the driver the full booked address and ticketed station.",
      },
    ],
    tradeoffs: [
      {
        title: "Jiande, Xin'anjiang and Meicheng describe different scales",
        advice:
          "Jiande is the wider city entity; Xin'anjiang can refer to the modern urban area as well as the river name in English usage; Meicheng is a distinct historic-town chapter. Use full addresses and a map of the actual day. Broad destination names do not establish that your hotel, station and main visit are within walking distance.",
      },
      {
        title: "Yanzhou history needs more than an ancient-town label",
        advice:
          "Meicheng's former administrative role provides a useful way to discuss transport, trade and civic life. Explain which structures are older, restored or reconstructed and what the current displays show. Contemporary visitor streets can be enjoyable, but should not be presented as a wholly unchanged premodern town.",
      },
      {
        title: "A river walk and a boat trip serve different days",
        advice:
          "Walking can suit guests who want flexibility, seating and time to notice the surroundings. A boat has fixed boarding, route, operation and remaining walking. Choose it for what the specific journey adds rather than infer it from a waterfront hotel or a photograph of a different reach of river.",
      },
      {
        title: "Mist and cool-water imagery are not service guarantees",
        advice:
          "Atmospheric photographs show particular conditions, not an effect that can be scheduled. A worthwhile river visit should still make sense without mist. Do not infer swimming suitability, access or temperature from promotional descriptions; use current authorized arrangements for any water-based activity.",
      },
      {
        title: "Two water destinations should earn two different chapters",
        advice:
          "Qiandao Lake offers a reservoir and island or resort context; Jiande can offer Meicheng and a selected downstream river setting. Both can work on a longer route, but a short trip may benefit from one settled waterside base. Compare the actual purpose before adding another room change.",
      },
      {
        title: "Outdoor activity is more specific than a green landscape",
        advice:
          "A cycling section needs a suitable surface, traffic assessment, equipment and support. A cave visit needs its own steps, light and enclosed-space review. River sports depend on a current appropriate operator and conditions. None becomes an included easy activity simply because the hotel is in the countryside.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, city culture and a separately chosen tea interest. Jiande needs its own useful time and full station-to-hotel journey. A wider municipal relationship does not make Meicheng a neighborhood walk from a West Lake hotel, and existing Hangzhou services do not automatically include it.",
      },
      {
        slug: "qiandao-lake",
        advice:
          "Qiandao Lake offers a separate reservoir and property-led stay. Choose both when the river-town and lake chapters genuinely differ for the guests, with complete transfers and useful nights. Otherwise, compare one comfortable base rather than spend a short holiday packing between similar water views.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan adds a distinct mountain plan with stairs, gateways and lodging assessed separately. Jiande may provide a gentler stop along a considered regional journey, but a rail corridor alone does not create a complete itinerary. Protect the final connection and the mountain's actual arrival requirements.",
      },
      {
        slug: "shaoxing",
        advice:
          "Shaoxing provides a literary and canal-neighborhood comparison elsewhere in Zhejiang. Choose it for those specific interests, not as another interchangeable old-town label. The onward route and room locations need their own planning; allow separate nights when Shaoxing’s literary and canal heritage is a priority.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for town and river walking, with rain and actual temperature still important. Summer can be hot and humid even when river imagery suggests coolness; protect shade, meals and rest. Winter puts more weight on room heating and shorter outdoor sessions. Mist, reflections and river services vary with current conditions rather than one guaranteed season. Select an ordinary-weather cultural route and a useful indoor or shorter alternative before organizing the trip around a particular photograph.",
    orientation:
      "Jiande is a county-level city administered by Hangzhou in western Zhejiang. The Xin'anjiang urban area, Meicheng, Jiande railway station and outlying riverside properties form separate parts of a stay. Yanzhou Ancient City is a useful search label associated with Meicheng, not a second unrelated destination to count again. Qiandao Lake lies in neighboring Chun'an and requires its own lake plan. Full Chinese names and property addresses reduce confusion between a river name, a town and the whole administrative city.",
    experiences: [
      "Understand Meicheng through its former Yanzhou role and actual public streets",
      "Choose a specific river perspective with a manageable walk or confirmed boat route",
      "Enjoy a regional meal and a room selected for comfort rather than a generic scenic label",
    ],
    planningNotes: [
      "Choose between Xin'anjiang city, Meicheng and a rural room using the actual daily route",
      "Give mist, river services and outdoor activity a current conditions check",
      "Add Qiandao Lake only when it brings a different experience worth another transfer",
    ],
    arrival:
      "Search dated trains to Jiande / 建德 station and include the complete final road to the booked address. Compare actual services from Hangzhou or another gateway, with hotel transfers at both ends. A property shuttle needs its timetable, pickup point, luggage arrangements and reservation confirmed. Keep a key town interior or boat departure away from an uncertain arrival window. For an onward train, count checkout, bags, the actual road and the station margin rather than a best-case drive alone.",
    gettingAround:
      "Group Meicheng streets and cultural subjects into a coherent walk with lunch and rest, then plan the chosen river section or property separately. Identify actual entrances, steps, seats, toilets and pickup. A driver and a guide able to explain local history provide different services. Private transport does not open closed buildings or authorize river access. In rain or unsuitable river conditions, adjust the route around a useful cultural subject rather than improvise on an unassessed water edge.",
    stayStrategy:
      "Two settled nights can give a quieter rhythm without another remote hotel move. Choose Meicheng for town hours, Xin'anjiang city for a practical base, or an assessed rural property for a specific room and rest benefit. Compare quiet, bedding, bathroom, temperature control, meals and vehicle approach before boutique or river-view branding. Premium value should be visible in the comfort and usefulness of the day, not rely on an unconfirmed private shoreline or a guaranteed photographic effect.",
    firstTimerNote:
      "Ask what Jiande adds to the rest of your Zhejiang trip: Meicheng's history, a particular river setting or a room you want to enjoy. Then give that subject enough time. If the itinerary already has several water and old-town stops, choose a real difference or keep more nights in one place rather than add another location purely for coverage.",
    faqs: [
      {
        question: "Is Jiande worth visiting from Hangzhou?",
        answer:
          "It can be for Meicheng history, a chosen Xin'an River setting or a worthwhile local property. Check the complete journey and allow useful time. A wider Hangzhou administrative address does not mean it is a short city-center excursion from West Lake.",
      },
      {
        question: "How many nights should I stay in Jiande?",
        answer:
          "Two nights give one focused full day; three suit a slower property stay or a separate second interest. One night is selective and depends on usable arrival and departure hours. More nights need a clear local purpose rather than a longer attraction list.",
      },
      {
        question: "Should I stay in Meicheng or Xin'anjiang city?",
        answer:
          "Choose a specific Meicheng room for time in the old-town setting, or an assessed Xin'anjiang urban address for practical meals and a selected river route. Compare room facilities, quiet, luggage access and full daily transfers. They are different bases within Jiande.",
      },
      {
        question: "Is Meicheng the same as Yanzhou Ancient City?",
        answer:
          "Yanzhou Ancient City is a visitor label associated with Meicheng and its historical administrative role. Use the actual Meicheng entrance, street or property address rather than count the two names as separate towns. Check what is older, restored or reconstructed along the public route.",
      },
      {
        question: "Is Jiande the same destination as Qiandao Lake?",
        answer:
          "No. Jiande includes a river-and-town chapter with Meicheng and the Xin'anjiang urban area. Qiandao Lake is a reservoir in neighboring Chun'an County. The connected water-system story does not make their hotels, stations, piers or visits interchangeable.",
      },
      {
        question: "Do I need a boat trip to enjoy the Xin'an River?",
        answer:
          "No. A selected public walk or viewpoint and a comfortable room may fit the brief better. Choose a boat for its actual route and what it adds, with current operation, boarding, remaining walking and a weather alternative confirmed.",
      },
      {
        question: "Can I see river mist in Jiande?",
        answer:
          "Mist depends on local conditions and cannot be promised as an included experience. Plan a river route that remains worthwhile without it, with flexible timing where possible. A photograph is not evidence of the effect on your travel date.",
      },
      {
        question: "Is Jiande food very spicy?",
        answer:
          "Some Yanzhou-style dishes can be chili-forward, unlike a general expectation of mild Zhejiang cooking. Ask about the particular dish and request your preferred heat level. Confirm stock, fish, meat, wheat and other dietary concerns with the actual kitchen rather than rely on a regional label.",
      },
    ],
    culturalStory: {
      title: "Read the old town through its regional role",
      paragraphs: [
        "Meicheng becomes more interesting when its streets are connected to the history of Yanzhou rather than described only as picturesque. A former administrative center offers questions about movement, trade, civic institutions and the relationship between settlement and river. Choose a guide who can explain those connections through the actual places visited, distinguishing historical evidence from a generic ancient-town story.",
        "The visible town includes layers of repair, restoration and contemporary visitor use. Explain those layers instead of presenting every facade or wall as unchanged ancient fabric. Shops, religious spaces and domestic life have different purposes, and an open doorway is not permission to enter. A slower public walk can provide a meaningful chapter without invented private access or a requirement to buy something at each stop.",
      ],
    },
    foodStory: {
      title: "Ask about Yanzhou flavor before assuming mildness",
      paragraphs: [
        "A Jiande meal can challenge the expectation that all Zhejiang food is gentle or sweet. Yanzhou-style dishes may use assertive chili and savory flavors, so discuss the actual menu and your preferred heat level. Ask what is seasonal and what a kitchen does well rather than require a fixed tasting list. A comfortable seated meal gives the day a useful pause between old-town walking and a selected river route.",
        "River fish needs attention to bones, preparation and the ingredients in sauces or broth. Vegetables may use meat stock, and a regional dish name does not establish vegetarian, halal or allergy suitability. Clarify wheat, soy-based seasonings, shellfish and shared equipment where relevant. At a remote hotel, confirm both breakfast and dinner capacity for serious dietary requirements and agree an alternative before the stay.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Settle into the base you actually chose",
        description:
          "Complete the station transfer and room check-in, then a modest local walk and meal if useful hours remain. A Meicheng room and a modern-city river hotel create different evenings. Keep the principal cultural visit and any fixed boat departure for a reliable full-day window.",
      },
      {
        day: "Full day / second night",
        title: "Connect Meicheng with a selected river perspective",
        description:
          "Give the public old-town route proper explanation, allow a seated lunch and rest, then choose a manageable river viewpoint or separately confirmed boat service. Include the complete road between subjects. You do not need a cave, cycle route and additional remote village to make the day worthwhile.",
      },
      {
        day: "Optional extra day / third night",
        title: "Add a distinct interest or useful rest",
        description:
          "Enjoy the assessed property or choose one second local interest with its actual route, effort and operation checked. Preserve an alternative for rain or river conditions. Do not use the extra night to turn the whole stay into transfers between interchangeable water views.",
      },
      {
        day: "Departure / onward Zhejiang or Anhui chapter",
        title: "Protect the complete final connection",
        description:
          "Reach the ticketed station with checkout, bags and the actual road allowed, or follow a separately planned hotel-to-hotel journey. This outline is illustrative, not a published package or a guarantee of rooms, boat services, mist, activities or current openings.",
      },
    ],
  },
};
