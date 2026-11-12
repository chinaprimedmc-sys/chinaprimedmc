import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/lianzhou.svg",
  alt: "Original Lianzhou planning schematic distinguishing the Underground River cave, Huangchuan Three Gorges and city or rural bases; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const lianzhouGuide: ExpandedDestination = {
  id: "lianzhou",
  name: "Lianzhou",
  region: "south",
  kicker: "A cave journey worth planning beyond the entrance ticket",
  description:
    "Decide whether Lianzhou's Underground River earns a northern Guangdong detour, with cave access, Huangchuan river scenery, town stays and full transfers explained.",
  stay: "1–2 nights for a selective cave and river stay",
  bestFor: "Cave landscapes, river scenery and a quieter northern Guangdong stop",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["qingyuan", "yingde"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Lianzhou Travel Guide: Underground River & Stays",
    seoTitle: "Lianzhou Guide: Underground River & Stays",
    seoDescription:
      "Is Lianzhou worth the detour? Compare the Underground River cave, Huangchuan Three Gorges, one- or two-night stays, steps, boats and northern Guangdong transfers.",
    answer:
      "Lianzhou (连州) is a county-level city within Qingyuan in northern Guangdong. Its best-known visitor draw is Lianzhou Underground River, or Lianzhou Dixiahe (连州地下河), a limestone cave attraction associated with walking and an underground boat segment. Huangchuan Three Gorges (湟川三峡) is a separate open-air river landscape, not another name for the cave. Lianzhou makes most sense when a cave visit is a genuine interest or the city fits a wider northern Guangdong route. One night can support a selective stop when arrival and departure leave enough visiting time; two nights give a full day without depending on a rushed arrival. Choose the actual visitor entrance, room and complete road before fixing the plan.",
    stayAnswer:
      "One night can work for the Underground River alone if both travel days leave a reliable visiting window. Two nights give one full day and are a better starting point when a cave visit is the reason for the journey. A third night needs another worthwhile subject, a confirmed rural stay or deliberate rest; it is not necessary just to collect nearby tickets. If combining with Yingde, allocate that destination its own useful time rather than assume tea, Yingxi countryside and Lianzhou's cave all fit in a short stay at one hotel.",
    hotelAnswer:
      "Lianzhou's urban area is a practical base for dinner choices, everyday services and a road-based sightseeing plan. A specific rural or attraction-area property may shorten one journey or offer a quieter setting, but compare the actual room and meal arrangements before accepting the trade. Check heating or cooling, dampness, bathroom, bedding, noise, luggage access and breakfast hours. Staying near the cave does not place you beside every other attraction, and a hotel marketed under the wider Qingyuan name may be far from Lianzhou.",
    sightseeingQuestion: "Is Lianzhou Underground River worth a detour from Guangzhou?",
    sightseeingAnswer:
      "It can be worthwhile for travelers who enjoy caves and have time for the full journey and a comfortable overnight stop. It is a weaker choice when the only available plan is a long return drive around a brief visit or when steps and boat boarding do not suit the group. Compare the complete room-to-room journey with what else you would give up in Guangdong. The cave is a specific experience, not a compulsory stop on every southern China itinerary. An overnight visit can improve pacing, but cannot remove the physical demands of the actual route.",
    visitorResources: [
      {
        label: "Qingyuan municipal government",
        href: "https://www.gdqy.gov.cn/",
        scope:
          "Regional background and dated local notices, mainly in Chinese. Confirm the current Underground River visitor route, boat operation, responsible operator and road approach separately. A regional description does not establish ticket inclusions or accessibility for the proposed date.",
      },
      {
        label: "Guangdong provincial government",
        href: "https://www.gd.gov.cn/",
        scope:
          "Provincial context and public notices. Check current weather, local transport and attraction arrangements with the relevant local provider; a promotion or photograph is not confirmation that a particular cave or river segment is operating.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Compare dated trains to a practical regional gateway with the complete onward road. Do not infer a station location or convenient final transfer from similar place names. Confirm the exact station, hotel and visitor entrance in Chinese before booking.",
      },
    ],
    serviceScope:
      "A tailored proposal should identify the exact hotel and room, gateway, complete transfers, guide language, entrances, admissions and operating cave or river segments. Ask who interprets the geology and local context, how shared boats affect pacing, and where guide commentary is possible. Private transport does not make an attraction boat private or remove waiting, stairs and boarding. Specify meals, rest, luggage and a meaningful alternative if a segment changes. A private cave entry, reserved vessel, specialist host or village invitation needs separate evidence and confirmation.",
    routeAdvice:
      "Use Qingyuan's regional guide to decide whether the northern journey serves your interests better than a closer countryside or resort stay. Yingde offers a distinct black-tea and Yingxi landscape chapter; combining the two works best when each has useful time and the actual roads are acceptable. No matching published Lianzhou product is recommended here. For a tailored route, share your arrival and departure points, cave interest, available nights, walking and boarding needs, and room expectations. Ask for a room-to-room plan showing what you gain from the detour and what you leave out.",
    practicalPlanning: {
      timing:
        "Protect the cave visit from uncertain arrival and check the last usable entry, complete route and any boat cutoffs for the date. A ticket window alone does not show how long walking, grouping and boarding will take. Keep lunch and rest visible. Add Huangchuan only after checking its actual entrance, river program and full road; it is a separate outing. Allow the complete return to the ticketed gateway rather than plan another activity around the train departure time alone.",
      walking:
        "Treat the Underground River as a cave route with potential stairs, uneven or damp surfaces, changes in light and boat boarding, not a boat ride that avoids walking. Obtain the current route details for guests with limited mobility, balance concerns or difficulty in enclosed spaces. Ask about handrails, seating, toilet locations, unavoidable steps and the route back out. Check the actual boat entry and exit. A shorter option is useful only if the operator confirms where it goes and how the guest returns.",
      cost: "Compare full road hours, guide time, room, meals, cave admission and the precise boat or river inclusions. A headline entrance price may not describe the complete visit; optional activities and transfers should be itemized. If private boat use is proposed, confirm availability, capacity, route and terms rather than infer exclusivity from private guiding. A more expensive proposal should improve interpretation, comfort and pacing, not simply add more attractions.",
    },
    attractions: [
      "Lianzhou Underground River / Lianzhou Dixiahe, under the current visitor route",
      "The cave's operating underground boat segment, with boarding and remaining walking assessed",
      "Huangchuan Three Gorges as a separate open-air river landscape",
      "A selected public town or countryside walk that fits the actual base",
      "A local meal with enough time between transfers and visits",
    ],
    stays: [
      {
        label: "1 night / a selective stop",
        advice:
          "Prioritize the cave when the real arrival and departure windows support it. Leave out a second ticketed attraction if it turns the visit into a race. A late arrival and early departure do not constitute a useful cave stay simply because the hotel is booked.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Reach one comfortable base, give the main visit its own day and keep the second subject optional. This allows a better lunch and rest rhythm and reduces dependence on same-day arrival. Weather or operator changes can still affect the route.",
      },
      {
        label: "3 nights or a wider route / a distinct second purpose",
        advice:
          "Add time for a specific river, countryside or hosted interest that has been checked, or extend the journey to Yingde with its own suitable base. Avoid filling another day with similar caves solely to justify an extra night.",
      },
    ],
    hotelAreas: [
      {
        name: "Lianzhou urban area / practical services",
        advice:
          "A useful starting point for dinner options, shopping for essentials and a vehicle-based plan. Compare the exact hotel address with the cave and river entrances. Check quiet, bathroom quality, temperature control, breakfast and pickup space rather than choose by star label alone.",
      },
      {
        name: "A specific rural or attraction-area property / setting-led stay",
        advice:
          "Choose only when the room, food and actual location improve the holiday. Confirm the final road, luggage, dampness, sound, indoor seating and dinner arrangements. A cave-area location may serve one visit well while making other roads longer; assess the whole stay.",
      },
    ],
    tradeoffs: [
      {
        title: "The cave visit includes more than a boat",
        advice:
          "Ask for the current sequence of walking, stairs, waiting, boarding and exit. The underground river is part of a managed cave attraction, not an unrestricted waterway. Guests who can sit comfortably in a boat may still find the approach difficult. Decide from actual route information rather than a photograph of the easiest segment.",
      },
      {
        title: "Underground River and Huangchuan Three Gorges are different places",
        advice:
          "The cave offers enclosed limestone formations and a distinct underground setting. Huangchuan offers open-air river and gorge scenery under its own operating arrangements. Choose both for the contrast when the day allows it, not because a similar river label implies a single admission or entrance. Neither should be described as outdoor white-water rafting.",
      },
      {
        title: "Learn to read formations rather than collect fanciful names",
        advice:
          "A useful explanation connects water moving through limestone with the development of passages and mineral deposits. Stalactites hang from the ceiling; stalagmites rise from the floor. Colored lighting and imaginative feature names are visitor presentation, not the geological process itself. Do not touch formations or accept unsupported precise ages for individual features.",
      },
      {
        title: "Private guiding and a shared attraction can coexist",
        advice:
          "Your guide can prepare the visit, interpret what is visible and manage the day while boats and visitor flow remain shared. Ask how commentary works in a noisy or moving group and where there is room for questions. If exclusivity matters, request a confirmed arrangement and its limits rather than assume a private tour closes the attraction to others.",
      },
      {
        title: "Rain protection is not the same as guaranteed operation",
        advice:
          "An underground setting does not make a cave immune to water-related changes, access restrictions or slippery approaches. Check the operator's current route and the full road after significant weather. Keep the day's order flexible within booking terms and agree what happens if an essential segment is unavailable.",
      },
      {
        title: "A high-comfort stay starts with the road and room",
        advice:
          "Reliable pickup, a sensible arrival, a good bathroom, quiet sleep and a well-timed meal often matter more than adding a premium label to a cave visit. Assess whether a rural setting genuinely offers those benefits. A dependable town hotel can be the stronger choice when a scenic property lacks the food, indoor comfort or access the group needs.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "qingyuan",
        advice:
          "Qingyuan's regional guide compares closer city or resort bases with a dedicated northern Lianzhou chapter. Use it to decide the purpose of the journey. Qingyuan's urban center is a separate base, not the location of the cave entrance or an automatically convenient hotel for every county.",
      },
      {
        slug: "yingde",
        advice:
          "Yingde adds identified black-tea learning or Yingxi limestone countryside. Allocate it its own useful time, host and suitable room when necessary. A shared Qingyuan administrative parent does not make the tea venue, western countryside and Lianzhou cave neighboring stops on one easy excursion.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates around the complete road, walking comfort and current attraction operation. Spring and autumn are reasonable starting points for outdoor comfort, while heat, rain and holiday demand still need checking. The cave is sheltered but its paths, water-related operation and approaches can change. Huangchuan's open-air setting brings different weather exposure. Do not promise a particular water appearance, boat program or unrestricted route from a seasonal calendar alone.",
    orientation:
      "Lianzhou is a county-level city within the wider Qingyuan municipality. Lianzhou town, the Underground River entrance and Huangchuan Three Gorges are distinct locations. Use 连州地下河 for the cave and 湟川三峡 for the river landscape when checking pickup and admission. Nearby Liannan and Lianshan are separate destinations. Add them for a specific cultural or landscape interest, with time for the additional roads and a suitable local guide. A reference to northern Guangdong does not establish a short transfer or permission to visit a private home.",
    experiences: [
      "Read a limestone cave through a clear explanation of water, passages and formations",
      "Compare the underground setting with a separately planned open-air river landscape",
      "Enjoy a selective northern Guangdong stay with dependable meals, sleep and transport",
    ],
    planningNotes: [
      "Check the full cave walking and boarding sequence before judging suitability",
      "Keep Underground River and Huangchuan Three Gorges entrances and tickets distinct",
      "Use the actual gateway and room-to-room road to decide whether the detour earns its place",
    ],
    arrival:
      "Compare the full road from Guangzhou, an existing Guangdong stay or a proposed rail gateway. Check dated trains on 12306 and then the remaining road to the actual hotel; a regional station is not the cave. Match exact Chinese station and attraction names rather than rely on similar English names. Keep the essential visit away from a tight arrival and allow meals, rest and the final luggage approach. Any onward multi-destination route should show realistic visiting time as well as transport.",
    gettingAround:
      "A planned vehicle can connect the hotel, cave and selected river entrance, with clear waiting, meals and pickup arrangements. It does not remove cave steps or guarantee private boarding. Decide whether a guide joins the entire attraction route and where interpretation can take place. Town walking should use an actual selected public route; rural roads, private land and neighboring communities need their own planning rather than an unscheduled stop at a household.",
    stayStrategy:
      "Choose one night for a selective through-stop only when travel windows genuinely support it. For a dedicated cave journey, two nights provide a more comfortable full-day structure. Compare a practical urban hotel with a specific rural room on food, quiet, bathroom, climate control and complete roads. Add a third night for another distinct purpose or rest. A longer stay is not inherently more thoughtful if it repeats similar attractions or leaves guests in a room that does not suit them.",
    firstTimerNote:
      "Ask two questions before booking: what walking and boarding are unavoidable, and how much useful time remains after the full transfer? If both answers suit the group, a cave visit can be rewarding without a long list of extras. Let the guide connect the visible formations to a few clear ideas, then leave space for lunch and rest rather than rush immediately to the next entrance.",
    faqs: [
      {
        question: "Where is Lianzhou Underground River?",
        answer:
          "It is a cave attraction in Lianzhou, a county-level city within Qingyuan in northern Guangdong. The cave entrance is separate from Lianzhou town and from Qingyuan's urban center. Confirm the exact entrance and complete transfer when choosing a hotel or gateway.",
      },
      {
        question: "Is Lianzhou Underground River just a boat ride?",
        answer:
          "No. Plan for a cave visitor route with walking and potential stairs as well as the operating underground boat segment. Ask the operator for the current sequence, boarding, exit and any shorter option. A boat photograph does not establish step-free access.",
      },
      {
        question: "Is Huangchuan Three Gorges the same attraction?",
        answer:
          "No. Huangchuan Three Gorges is a separate open-air river landscape. Check its actual entrance, current river program, admissions and complete road independently. It is not another English name for Lianzhou Underground River.",
      },
      {
        question: "How many nights do I need in Lianzhou?",
        answer:
          "One night can support a selective stop with convenient travel windows. Two give one full day and suit a dedicated cave journey better. Add a third for a distinct confirmed interest or deliberate rest, not simply more ticketed stops.",
      },
      {
        question: "Can I visit Lianzhou on a day trip from Guangzhou?",
        answer:
          "Assess the full return road and useful visiting hours before choosing a day trip. An overnight stop may make a dedicated cave journey more comfortable. For limited time, compare a closer Guangdong outing rather than assume the long detour is essential.",
      },
      {
        question: "Is the cave suitable for travelers with limited mobility?",
        answer:
          "Suitability depends on the current route and the individual's needs. Check unavoidable stairs, surfaces, handrails, seating, toilets and boat boarding directly. Do not assume step-free access or that a private vehicle can bypass the cave approach.",
      },
      {
        question: "Is a Lianzhou tour available on this page?",
        answer:
          "No matching published product is recommended here. A tailored proposal should specify the actual room, full transport, guide, attraction route, admissions and operating boat segments before booking. The sample outline is not a package or access guarantee.",
      },
    ],
    culturalStory: {
      title: "Two ways to read water in a limestone landscape",
      paragraphs: [
        "Inside a cave, the most useful story is not how many shapes resemble animals or palaces. It is how water finds routes through rock, how passages develop and how mineral-bearing drips leave deposits. The familiar distinction between ceiling-hanging stalactites and floor-rising stalagmites gives a first-time visitor something concrete to recognize. An interpreter should separate the process from colored lighting and feature nicknames, and acknowledge what cannot be established about a particular formation from a visitor path.",
        "An open-air river journey offers a different scale: slopes, vegetation, settlements and the route through the valley. If Huangchuan is included, use that contrast rather than treat it as a second version of the underground boat. Contemporary town and rural life also deserve their own context. A guide should explain what is actually visible and welcome, without turning residents into a scheduled performance or suggesting access to neighboring communities that has not been arranged.",
      ],
    },
    foodStory: {
      title: "Make lunch part of the comfortable route",
      paragraphs: [
        "A cave day still needs a proper meal, water and a place to sit. Choose a kitchen that fits the route and can explain its dishes rather than add a long drive for a promotional restaurant name. Ask about northern Guangdong preparations, available vegetables, tofu, chicken, rice or noodles and portions suitable for the group. A river setting is not proof that a fish is locally caught; sourcing and cooking claims should be explained by the actual restaurant.",
        "Check soy, wheat, peanuts, sesame, eggs, meat stocks and shared preparation where relevant. A vegetable dish may contain stock or meat, so vegetarian and vegan requirements need explicit discussion. For serious allergies, confirm the kitchen's capacity and an alternative in advance. Breakfast timing, drinking water and an early dinner can contribute more to a comfortable travel day than an oversized banquet squeezed between two long transfers.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / Lianzhou base",
        title: "Complete the journey before adding an attraction",
        description:
          "Reach the named room, settle luggage and confirm the next day's route and operating segments. Use a modest public town walk or early meal if time allows. A one-night plan can place the cave on an arrival or departure day only when the actual window is reliable.",
      },
      {
        day: "Full local day / two-night stay",
        title: "Give the cave a clear place in the day",
        description:
          "Follow the current Underground River route with the agreed walking and boarding arrangements, useful interpretation and time for questions. Keep lunch and rest. Add Huangchuan only when its distinct experience, current program and roads fit comfortably; it is optional, not a promised second half of every cave ticket.",
      },
      {
        day: "Departure / onward route",
        title: "Leave room for the full gateway transfer",
        description:
          "Allow breakfast, bags and the complete road before a train or onward hotel. Continue to Yingde only with its own useful time and arrangements. This outline illustrates planning choices; it is not a published package, private-boat commitment or guarantee of attraction operation.",
      },
    ],
  },
};
