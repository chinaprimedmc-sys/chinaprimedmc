import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yandang-mountain.svg",
  alt: "Original Yandang Mountain planning schematic comparing Lingfeng, Lingyan and Dalongqiu, two or three nights and scenic-village versus station-area accommodation; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const yandangMountainGuide: ExpandedDestination = {
  id: "yandang-mountain",
  name: "Yandang Mountain",
  region: "east",
  kicker: "Rock landscapes worth reading slowly, with the route chosen first",
  description:
    "Explore Yandangshan through carefully chosen Lingfeng, Lingyan and Dalongqiu routes, with realistic walking, weather flexibility and a base that avoids repeated city transfers.",
  stay: "2 nights for one selective full day; 3 for two distinct landscape days",
  bestFor:
    "Rock formations, landscape interpretation and a focused southern Zhejiang mountain stay",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["nanxi-river", "wenzhou", "linhai", "ningbo", "jinyun", "huangshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yandang Mountain Travel Guide: Routes, Walking & Where to Stay",
    seoTitle: "Yandang Mountain Guide: Routes & Hotels",
    seoDescription:
      "Compare Yandangshan's Lingfeng, Lingyan and Dalongqiu. Plan realistic walking, 2–3 nights, hotel bases and station transfers for a tailored Zhejiang trip.",
    answer:
      "Yandang Mountain (雁荡山), or Yandangshan, is a volcanic-rock landscape in the Yueqing area of Wenzhou, Zhejiang. This guide focuses on the northern Yandang scenic sectors commonly visited around Lingfeng (灵峰), Lingyan (灵岩) and Dalongqiu (大龙湫). They are separate outings with different entrances and walking demands, not one continuous summit trail. Two nights give a selective full day; three allow two more varied landscape days. Choose the actual paths before choosing how many sectors to include, and compare a local scenic-area base with repeated journeys from Wenzhou city. The wider Yandang name also appears in other mountain-area labels, so use the full entrance and property addresses.",
    stayAnswer:
      "Start with two nights for one full day, choosing a principal sector and a complementary shorter visit if energy and conditions allow. Arrival or departure time is useful only when the real journey leaves enough hours. Three nights provide two full days for different routes, a slower pace and some flexibility around rain or visibility. A day visit from a suitable nearby base can work for a focused introduction, but all three sectors plus an evening route should not be assumed. Longer stays need a specific walking, photography or cultural interest rather than a requirement to collect every entrance.",
    hotelAnswer:
      "Compare Xianglingtou (响岭头) and the established visitor-settlement area for access to the main scenic sectors and nearby meals. Choose the precise road and room: proximity to an entrance can come with restaurant or traffic noise. A more secluded property needs a clear reason to stay there, reliable dinner and full daily transfers. A Yandangshan station-area room serves a gateway purpose and may not suit an evening around Lingfeng. Check bathroom, dampness, heating or cooling, breakfast, stairs, luggage approach and the booked outlook rather than a scenic photograph of the property.",
    sightseeingQuestion: "Which Yandang routes should I choose: Lingfeng, Lingyan or Dalongqiu?",
    sightseeingAnswer:
      "Choose Lingfeng for changing rock silhouettes and a selected cultural or valley route; an evening visit is a separate decision with its own footing and current arrangements. Choose Lingyan for a contrasting rock-and-valley chapter, specifying whether the plan stays on a shorter route or adds more demanding upper paths. Choose Dalongqiu for the waterfall setting and its surrounding cliffs, accepting that water flow varies. For one full day, choose a main interest and a manageable contrast instead of promising every sector in depth. Ask for the actual walking and descent, not just the scenic-area names.",
    visitorResources: [
      {
        label: "Yueqing municipal government",
        href: "https://www.yueqing.gov.cn/",
        scope:
          "Reference entry point for local background and public notices, mainly in Chinese. Confirm current northern Yandang entrances, open paths, internal transport, ticket components and evening arrangements with the responsible scenic operator. General information does not establish every path as open or a cultural presentation as operating on your date.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services to Yandangshan and alternatives for the actual journey. The station still requires a road transfer to the hotel or selected entrance. Compare both local transfers, boarding and luggage with direct road travel rather than infer a short door-to-door journey from the mountain's name on the ticket.",
      },
    ],
    serviceScope:
      "A tailored Yandang visit should name the sectors, actual paths, guide language, admissions, internal transport where required, pickup and return. Specify the remaining steps, any upper-path option and an easier alternative before agreeing the day. An evening route needs its own transport and footing assessment. For a stay, identify the room category, meals and final luggage approach. Interpretation should help you understand the rock forms and cultural setting while leaving time to look, sit and change the route when conditions warrant it.",
    routeAdvice:
      "Share your dates, starting hotel, available nights, comfortable stair load and main interest: rock formations, waterfalls, photography or a gentler landscape visit. We can compare two selective nights with three nights and two distinct walking days, choosing the base and gateway from the actual paths. Continue to Wenzhou for city food or Linhai for a historic urban chapter when that adds useful contrast. Request a tailored plan with named routes, rooms and included services; no matching published Yandang Mountain package is currently listed here.",
    practicalPlanning: {
      timing:
        "Give the principal sector a comfortable daylight window and a seated meal before another substantial route. Check opening, internal transport and any evening-entry arrangements for the travel date. Keep arrival-day plans flexible after a long journey. Heavy rain can affect paths and visibility; a waterfall photograph should not be the only reason a visit works. For departure, allow the complete return from the actual trail end, luggage collection and station transfer rather than measure the day from the scenic entrance alone.",
      walking:
        "A valley introduction, an upper path and an evening rock-viewing route have different demands. Ask for the start, finish, steps, narrow sections, exposed edges, descent and places to rest. Some worthwhile landscape visits can be shorter, but a low viewpoint is not automatically step-free. Wet stone and reduced light can change the suitability of the same route. A private car helps between entrances; it cannot remove terrain inside a sector. Guests with mobility needs should receive a named shorter plan rather than a generic promise of an easy mountain day.",
      cost: "Compare the same sectors, current ticket components, guide time, internal transport and complete transfers. An evening route or an upper-path addition may change the quote and the walking day. Check the exact room, breakfast, dinner availability and cancellation terms when comparing properties. Premium value comes from useful geological and cultural explanation, sleep, realistic pacing and a clear fallback, rather than more admissions or an unconfirmed special-access claim.",
    },
    attractions: [
      "Lingfeng / 灵峰 for a selected rock-landscape and cultural route",
      "A Lingfeng evening visit only when the actual route, access and lighting suit the group",
      "Lingyan / 灵岩 for a contrasting valley-and-cliff chapter, with upper paths assessed separately",
      "Dalongqiu / 大龙湫 for the waterfall setting, with realistic flow expectations",
      "A temple or cultural space on the chosen open route, respecting current use and photography rules",
      "An unhurried meal and time in the actual visitor-settlement base",
    ],
    stays: [
      {
        label: "Day visit / one principal landscape",
        advice:
          "From a suitable starting point, choose a sector for its actual route and leave time for lunch and the complete return. Add a shorter contrast only when it fits. A hurried look at all three entrances is not the same introduction as understanding one landscape well.",
      },
      {
        label: "2 nights / one selective full day",
        advice:
          "Choose a local base that serves the main route and dinner. Use the full day for a principal sector and a complementary shorter chapter when appropriate. An arrival or departure visit, including any evening plan, depends on the actual journey and energy.",
      },
      {
        label: "3 nights / two distinct full days",
        advice:
          "Give different sectors their own comfortable windows and leave room for rest or changes in conditions. A second day can support a longer route or a slower cultural interest rather than repeat another demanding walk. The room should work in wet weather as well as on a clear evening.",
      },
    ],
    hotelAreas: [
      {
        name: "Xianglingtou and the main visitor settlement / practical scenic access",
        advice:
          "Map the actual entrances and meal options from the property. Compare room position, restaurant sound, road noise, bathroom, climate control, stairs and pickup. A convenient local base can reduce transfers, but the booked room still matters more than an entrance-distance label alone.",
      },
      {
        name: "A specific quieter property / time on site and reliable meals",
        advice:
          "Choose it for its actual room and setting, checking the final approach, dinner, dampness, heating or cooling and full daily drives. Seclusion is useful only when it improves the stay; it should not create repeated journeys for every meal and trail.",
      },
      {
        name: "Yandangshan station area / a deliberate gateway choice",
        advice:
          "Consider this for the actual arrival or departure need. Compare the complete scenic transfers and evening dining with a visitor-settlement room. A station using the mountain name is not beside every entrance, and a transit night should be described as such.",
      },
    ],
    tradeoffs: [
      {
        title: "Three sectors are three route decisions",
        advice:
          "Lingfeng, Lingyan and Dalongqiu offer different subjects, entrances and walking. Choose the guest's main interest first and ask what the actual second route adds. A careful planner compares gradients, transfer and time to look rather than equate three tickets with a better day.",
      },
      {
        title: "An evening route is not a daylight walk repeated after dinner",
        advice:
          "Lingfeng's silhouettes can be interpreted differently after dark, but reduced light changes footing and the ability to see the path. Confirm the current route, entry and return arrangements. Daylight alone can provide a complete landscape visit when an evening outing does not suit the group.",
      },
      {
        title: "Waterfall flow and a worthwhile day are separate questions",
        advice:
          "Dalongqiu's visible flow varies with conditions. Decide whether the cliffs and landscape interpretation still interest you when water is limited, and check current information rather than promise a dramatic cascade. Heavy rain does not justify approaching a closed path for a stronger photograph.",
      },
      {
        title: "Rock nicknames can help observation without replacing geology",
        advice:
          "Use changing silhouettes and local stories to encourage looking, then explain the volcanic-rock setting at an appropriate level. Distinguish geological processes from imaginative names and legend. A guide should not invent precise ages, scientific claims or a mythical origin as historical fact.",
      },
      {
        title: "Northern Yandang is not every place using the Yandang name",
        advice:
          "This guide's principal sectors are in the northern scenic area near the Yueqing visitor bases. Other regional Yandang labels refer to different places and journeys. Send the full Chinese entrance and room address before choosing a station or quote, and avoid treating the wider name as one connected walking park.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "nanxi-river",
        advice:
          "Nanxi River adds village architecture and a slower rural stay, offering a different subject after rock-landscape walks. Choose a small Yantou, Cangpo or Furong cluster and the actual property before fixing the full transfer. Give Shiweyan a separate purpose; a river activity is optional and not included by implication.",
      },
      {
        slug: "wenzhou",
        advice:
          "Wenzhou city adds old commercial streets, regional food and an Ou River cultural chapter. Choose a city night for those interests or useful arrival logistics, not because Yandang belongs to the wider municipality. Compare going directly to Yandangshan and the actual scenic base with returning to the city after every walk.",
      },
      {
        slug: "linhai",
        advice:
          "Linhai adds a walled-city and Ziyang Street chapter farther north. Its urban history and local food can provide a useful contrast to mountain routes. Settle the actual station, room and city-wall walking load, counting the complete connection rather than only the train sector.",
      },
      {
        slug: "ningbo",
        advice:
          "Ningbo offers book culture, collections and museum architecture, a different purpose from another mountain day. Keep enough useful time for the chosen city interests and compare the full gateway-to-hotel journey. A brief station change does not constitute a meaningful Ningbo visit.",
      },
      {
        slug: "jinyun",
        advice:
          "Jinyun's Xiandu landscape offers a different rock-and-rural chapter inland, with its own base, river context and walking choices. Compare the actual landscapes and full journey before adding both. A stronger route may keep one rock destination and add a genuinely different cultural day.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan in Anhui is a separate granite mountain journey, often with substantial stairs and its own cableways and hotel sequence. Yandang is not a shortened version of that experience. If combining them, compare the total walking burden, usable nights and complete transfer rather than collect two famous mountain names.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit selected walks, though rain, haze and busy holidays remain possible. Summer needs cooling and shorter exposed sections; heavy rain or tropical weather can affect routes and transport. Winter may be cold and damp, especially in a poorly heated room. Choose dates for the wider journey, then check the specific route and forecast. Waterfall flow, clear rock silhouettes and evening visibility vary; plan a day that still has value through interpretation and a suitable shorter route.",
    orientation:
      "Yandangshan can refer to a wider mountain region. This guide concentrates on the northern scenic sectors around Lingfeng, Lingyan and Dalongqiu in the Yueqing area of Wenzhou, Zhejiang. They have different entrances, while Xianglingtou and nearby visitor-settlement properties serve different final approaches. Yandangshan railway station is a road gateway, not a trailhead. Yueqing city and central Wenzhou remain separate visits, and other regional Yandang labels should not be substituted into the quote without a new route assessment.",
    experiences: [
      "Read changing rock silhouettes through a selected Lingfeng route",
      "Give Lingyan or Dalongqiu a contrasting purpose and realistic walking window",
      "Stay locally long enough to enjoy a meal and a slower view of the landscape",
    ],
    planningNotes: [
      "Choose actual paths and descent before counting sectors",
      "Assess evening footing and waterfall conditions as separate decisions",
      "Compare the real station-to-room journey with repeated city transfers",
    ],
    arrival:
      "Check dated trains to Yandangshan and compare the complete onward road to the actual property or entrance with direct transport from the starting hotel. Include boarding, luggage and the road at both ends. Wenzhou city and its stations serve different journeys and should not be used automatically. After a long arrival, settle the room and meal before committing to an evening route. A same-day flight connection needs its own airport, terminal and complete buffer.",
    gettingAround:
      "Use a planned vehicle or the currently required internal transport between named sectors, with each entrance and pickup settled. Within a sector, the actual path, steps and turnaround matter more than the map distance. Do not assume a private car can follow every trail or bypass visitor management. Keep toilets, seated breaks and a shorter route in the plan, and agree how a weather change affects the next stop and return to the hotel.",
    stayStrategy:
      "For a focused visit, a suitable local room can save repeated trips from Wenzhou city. Compare visitor-settlement convenience with a quieter property's actual meal and transfer needs. Check bathroom, noise, dampness, temperature control, stairs and luggage. Two nights give one full day and three give two; arrival and departure do not add full days automatically. Choose a room comfortable enough to enjoy when rain shortens the walking plan.",
    firstTimerNote:
      "Yandang works well when the route invites you to look rather than rush. Pick the landscape that makes you curious, choose paths matched to your stairs and descent tolerance, and add a complementary sector only when it improves the day. You can understand the mountain without every upper route, an evening walk or peak waterfall flow.",
    faqs: [
      {
        question: "Is Yandang Mountain worth visiting?",
        answer:
          "It can be for volcanic-rock landscapes, changing silhouettes and selected valley, cliff or waterfall routes. Choose it for those interests and a suitable local stay, rather than expect one continuous summit hike. It adds a different chapter to southern Zhejiang city or village travel when usable days and full transfers work.",
      },
      {
        question: "How many nights do I need at Yandangshan?",
        answer:
          "Two nights give one selective full day; three provide two full days for different routes and a slower pace. Use arrival or departure hours only when the actual connections leave time. A day visit can suit one main landscape, while a longer stay needs a distinct walking, cultural or photography interest.",
      },
      {
        question: "Can I visit Lingfeng, Lingyan and Dalongqiu in one day?",
        answer:
          "Selected visits may fit a busy day under suitable arrangements, but that does not mean every route can be explored comfortably. Compare the actual paths, transfers, steps and time to look. For a relaxed introduction, start with one principal sector and a shorter contrast; an evening route is a separate decision.",
      },
      {
        question: "Is Yandang Mountain suitable for travelers who cannot manage many stairs?",
        answer:
          "Some shorter landscape plans may suit, but the named path and current access must be assessed. Ask for remaining steps, slopes, descent, seating and the final vehicle point rather than a general easy-walk promise. A private car helps between entrances but does not make every valley or viewpoint step-free.",
      },
      {
        question: "Should I visit Lingfeng in daylight or at night?",
        answer:
          "Daylight supports a detailed view of the landscape and footing. An evening route offers a different silhouette-based interpretation when current access and conditions permit, but reduced light may make it unsuitable for some guests. Choose it separately according to interest, balance, energy and the full return arrangement.",
      },
      {
        question: "Is Dalongqiu waterfall always flowing strongly?",
        answer:
          "No. Visible flow varies with conditions, and a dramatic photograph does not establish what you will see on your date. Check current information and decide whether the cliff setting and wider landscape still interest you. Heavy rain can also affect safe access, so follow the responsible operator's current route instructions.",
      },
      {
        question: "Where should I stay for Yandang Mountain?",
        answer:
          "Compare Xianglingtou and the main visitor settlement for scenic access and meals, a specific quieter property for its actual room and setting, or a station-area room for a deliberate gateway need. Check noise, dampness, bathroom, climate control, dinner and full transfers to the chosen entrances.",
      },
      {
        question: "Can I stay in Wenzhou city and visit Yandang?",
        answer:
          "Yes, when the full return journey and a selective route work. Compare that excursion with going directly to a local base, especially for more than one walking day or an evening visit. Shared municipal context does not make every Wenzhou city hotel close to the northern Yandang sectors.",
      },
      {
        question: "Which station serves Yandang Mountain?",
        answer:
          "Yandangshan railway station is a useful option when dated services fit the starting point and final address. It still needs a road transfer to the room or sector entrance. Compare both local journeys and luggage with direct road transport rather than treat the station name as arrival at a trailhead.",
      },
      {
        question: "Can I combine Yandang with Nanxi River?",
        answer:
          "Yes, as a regional plan with separate bases or carefully assessed complete transfers. A rock-landscape day and a named Nanxi village or countryside route offer different interests. Choose the actual property and public route first; a broad Wenzhou label does not make them a single compact day or include rafting.",
      },
    ],
    culturalStory: {
      title: "Look twice at the same rock, then ask a different kind of question",
      paragraphs: [
        "At Yandang, a change of position can alter the silhouette of a peak or the apparent relationship between two rock forms. Traditional names and stories can make that observation enjoyable, provided they are presented as interpretation rather than geological proof. Explain the volcanic-rock setting through what the guest can actually see, without inventing exact ages or scientific claims. Leave room for quiet looking; the value of a landscape guide is not measured by how many nicknames can be recited before the next entrance.",
        "A temple or cultural space on the selected route adds another scale of meaning, with current use, photography and open areas respected. Distinguish surviving fabric, repair and modern visitor facilities rather than call every structure unchanged. Lingfeng after dark is also a different act of viewing, not a guarantee of a performance or privileged access. A thoughtful day connects observation, cultural context and the guest's comfort while allowing each sector to retain its character.",
      ],
    },
    foodStory: {
      title: "Plan the meal as part of a comfortable mountain day",
      paragraphs: [
        "A seated lunch between sectors can be more valuable than another rushed viewpoint. Choose vegetables, tofu or another suitable protein and dishes the actual kitchen prepares well. The visitor area's proximity to the coast may bring seafood onto menus, but it does not prove local wild catch or a particular day's freshness. Ask about fish bones, shellfish, stock and portion size, and let the group choose a straightforward alternative when a specialty does not appeal.",
        "For a village guesthouse or quieter property, settle dinner availability and timing before returning from a late route. Check soy, wheat, fish, shellfish, pork, alcohol and shared equipment for dietary needs. A mountain-themed menu does not establish the origin of mushrooms or other ingredients, and a rural stay does not include a private household meal without a willing host. Reliable food, water and rest support the experience more than an obligatory tasting or purchase stop.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the local base and choose a shorter introduction",
        description:
          "Complete the actual station or hotel transfer and settle luggage. Use a manageable nearby route only if the journey leaves time and energy. Decide separately whether a current Lingfeng evening visit suits the group, with dinner and the return arrangement clear.",
      },
      {
        day: "Full day / principal sector",
        title: "Give the chosen landscape time and interpretation",
        description:
          "Follow the agreed Lingfeng, Lingyan or Dalongqiu route, matching steps and descent to the group. Leave time to observe changing views and rest. Keep an upper-path option distinct from a shorter valley introduction rather than expand the walking once already committed.",
      },
      {
        day: "Lunch and complementary chapter",
        title: "Change pace before adding another route",
        description:
          "Take a seated meal and choose a shorter contrasting sector only when conditions and energy allow. Day visitors preserve the full gateway return; overnight guests can protect time at the room instead of insisting on a third entrance. Any weather change should improve the plan rather than trigger a rushed substitute.",
      },
      {
        day: "Optional second full day / departure",
        title: "Explore a distinct route or continue without a forced detour",
        description:
          "With three nights, give another sector its own comfortable window and a different purpose. Otherwise collect luggage and allow the complete transfer to the next hotel or station. This outline supports a tailored proposal with the selected paths, room and included services confirmed for your dates.",
      },
    ],
  },
};
