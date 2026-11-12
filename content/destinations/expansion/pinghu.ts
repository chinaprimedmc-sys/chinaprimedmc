import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/pinghu.svg",
  alt: "Original Pinghu planning schematic separating Mo Family Manor and the city lake from Zhapu and Jiulongshan bay-side stays, with day-visit and hotel-base choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const pinghuGuide: ExpandedDestination = {
  id: "pinghu",
  name: "Pinghu",
  region: "east",
  kicker: "A merchant house, a city lake and a separate bay-side decision",
  description:
    "Plan Pinghu around Mo Family Manor and a selected East Lake walk, then decide whether Zhapu or a Jiulongshan property adds enough value to justify a separate stay.",
  stay: "A focused day visit or 1 city night; 2 nights for a specific additional purpose",
  bestFor:
    "Jiangnan domestic architecture, a slower city stop and carefully chosen bay-side interests",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["jiaxing", "xitang", "haining", "shanghai", "hangzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Pinghu Travel Guide: Mo Family Manor, East Lake & Stays",
    seoTitle: "Pinghu Travel Guide: Manor, Lake & Stays",
    seoDescription:
      "Explore Pinghu's Mo Family Manor and East Lake. Choose a day visit or city night, compare Zhapu and Jiulongshan stays, and plan a Shanghai day trip.",
    answer:
      "Pinghu (平湖) is a county-level city within Jiaxing municipality in northeastern Zhejiang, adjoining the Shanghai region. Its clearest cultural introduction is Mo Family Manor, a late-Qing residence, followed by a manageable walk around part of the city's East Lake, or Donghu (东湖). Choose a day visit or one night when that domestic-architecture subject, a local meal and a slower city stop appeal to you. Zhapu (乍浦) and Jiulongshan (九龙山) offer separate bay-side route and property decisions farther south. They are not hotel neighborhoods around the city lake. A Hangzhou Bay view does not establish a bathing beach, swimming access or a complete seaside-resort experience.",
    stayAnswer:
      "A relaxed half day for the manor, a selected lake walk and a meal, plus complete transfers, can suit a first city introduction. One night adds an evening and a useful morning when the room and route justify staying. Two nights need a specific additional purpose, such as a current museum display, a separately planned Zhapu visit or a property you want to enjoy. If your real goal is a Jiulongshan stay, compare going directly to the actual property. A city night should not be added automatically because the hotel or booking uses the wider Pinghu name.",
    hotelAnswer:
      "Choose the central Danghu area when the priority is Mo Family Manor, the city lake and convenient meals. A Zhapu or Jiulongshan property serves a different bay-side purpose and needs its own access, dining and transport assessment. Check the exact room, bathroom, bed, sound insulation, heating or cooling, breakfast and final approach. Confirm current pools, family facilities, walks and any separately managed estate amenities before treating a property as a resort. A bay-view room, a golf-related name or a striking building does not establish included activities, permitted shoreline access or the comfort of the booked category.",
    sightseeingQuestion: "Is Pinghu worth a stop between Shanghai and Jiaxing?",
    sightseeingAnswer:
      "It can be if a focused merchant-house visit and a local city walk add something you want to understand. Mo Family Manor gives a clear subject for travelers interested in the layout and social life of a Jiangnan household. If you already have little time for Shanghai, Suzhou's gardens or a selected water-town stay, protecting those nights may be more valuable than another move. Choose Pinghu deliberately rather than treating its regional location as proof that every route passes conveniently through the center. The bay-side chapter should earn its own time and room choice.",
    visitorResources: [
      {
        label: "Pinghu municipal government",
        href: "https://www.pinghu.gov.cn/",
        scope:
          "Starting point for city background and links to current local culture or visitor notices, mainly in Chinese. Confirm current manor or museum access, exact shore routes and property arrangements with the relevant operator. Municipal background does not establish entry to a port, private estate or hotel facility.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and full gateway names for the actual route. Jiaxing South or Jiashan South may be relevant to different journeys, but each still requires an assessed road transfer. Do not assume a proposed or similarly named station serves the visit; compare the real ticket and final address with direct road transport.",
      },
    ],
    serviceScope:
      "Plan the city visit around a named manor route, a manageable lake section and a seated meal, with the guide language, admissions, pickup and return clearly agreed. For an overnight, choose the room category and dining before adding sightseeing. A southern chapter should identify the actual Zhapu site or Jiulongshan property, its current access and the facilities you want to use. Specialist cultural meetings and leisure activities can be considered when an actual provider and arrangements are confirmed.",
    routeAdvice:
      "Start with the experience you want: a manor-and-lake day from Shanghai, an unhurried city night, or time at a particular bay-side property. Share your dates, starting hotel, available nights and walking needs so we can compare the complete journeys and recommend the most useful base. On a wider Jiangnan trip, choose the next chapter for its difference: Jiaxing for South Lake and Yuehe, Xitang for covered canal passages, or Haining for a separately timed tidal-bore visit. Ask for a tailored Pinghu plan with the proposed stops, room and included services set out clearly.",
    practicalPlanning: {
      timing:
        "Put Mo Family Manor and any museum visit within their confirmed opening and booking arrangements, then keep the lake walk and meal flexible. A public lake path, historic interior, temple or pagoda setting and hotel facility may have different access terms. Seasonal lantern events and exhibitions need dated confirmation rather than an assumption of year-round operation. In hot or wet weather, shorten exposed sections and take a proper indoor break. Leave enough time for the real station or Shanghai return journey instead of adding the bay as an afterthought before departure.",
      walking:
        "Assess the manor's actual visitor route for thresholds, steps, seating and usable alternatives. Choose one East Lake section rather than assume a complete circuit is needed. The approach to a pagoda viewpoint is not a promise of tower entry or climbing. For a Zhapu or Jiulongshan outing, check the specific public route, surface, slope, toilets and vehicle stopping point. A private car cannot remove every pedestrian section or authorize access to a restricted shore or estate. Guests with mobility needs should receive a named shorter route and a workable room approach.",
      cost: "Compare the same pickup and return addresses, vehicle or rail plus road transport, guide time, named interiors and current admissions. A bay-side room may change dining costs and add transfers for city visits. Check the actual room, breakfast, facilities, estate terms and cancellation conditions rather than compare exterior photographs or a low headline rate. Premium value comes from good interpretation, manageable journeys, sleep and a clear scope, not unconfirmed activities or repeated drives between a city and a distant hotel.",
    },
    attractions: [
      "Mo Family Manor / Mo Shi Zhuang Yuan for a focused Jiangnan domestic-architecture visit",
      "A selected East Lake / Donghu shore section that fits the actual walking budget",
      "The Baoben Pagoda setting as a named lake-side viewpoint, with access checked separately",
      "Pinghu Museum when the current displays match the guest's interests",
      "Local watermelon-lantern culture as a subject, with events or demonstrations confirmed separately",
      "Zhapu and a specifically chosen Jiulongshan site or property as a separate southern chapter",
      "A seated local meal and an unhurried city evening when staying overnight",
    ],
    stays: [
      {
        label: "Day visit / manor, selected lake walk and lunch",
        advice:
          "Allow a relaxed half day in the city, plus the complete transfers. Give the house proper attention, choose a manageable lake section and sit down for a meal. Add a museum only when the actual display and opening justify it, and leave out a distant bay-side stop if it would rush the main visit.",
      },
      {
        label: "1 night / a purposeful city stop",
        advice:
          "Choose a room that serves the cultural visit and dinner, with time on both sides of check-in. A city evening and breakfast can make a slower route comfortable. A late arrival followed by an early departure is a transit night rather than a full introduction to Pinghu.",
      },
      {
        label: "2 nights / a clear additional interest or property stay",
        advice:
          "Use this for a relevant cultural display, a separately planned Zhapu chapter or a property you actively want to enjoy. Compare staying at that property with commuting from the city. Do not fill the extra day with unconfirmed resort facilities or a shoreline visit that has no suitable public route.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Danghu area / city culture and convenient meals",
        advice:
          "Map the actual manor entrance, selected lake section and restaurants. Check the room's noise, bathroom, lifts, temperature control and drop-off access. A lake-related hotel label does not establish a view from the booked room or an easy walk to every planned site.",
      },
      {
        name: "Zhapu / a separate bay-side town visit",
        advice:
          "Choose the property and public visit for a specific reason, then verify the complete road from the city or gateway. Assess dining, the room outlook and the actual permitted shore route. The surrounding port economy does not create public access to working harbor facilities or guarantee a leisure waterfront.",
      },
      {
        name: "Jiulongshan property / confirm the exact place and facilities",
        advice:
          "Separate the scenic place name, private estate, hotel and individually operated amenities. Check the booked room, access, current pools, dining and any activity inclusions. A recognizable estate name is not a promise of beach use, golf, boating or unrestricted grounds, and other Chinese destinations also use Jiulongshan as a name.",
      },
    ],
    tradeoffs: [
      {
        title: "A merchant house is a distinct subject from a water-town circuit",
        advice:
          "At Mo Family Manor, focus on the sequence of rooms and courtyards, movement through the household and the relationship between reception and domestic spaces. That can add depth to a Jiangnan route without another canal-town hotel. More interiors are useful only when their interpretation changes, not simply to extend the sight count.",
      },
      {
        title: "East Lake here is a city visit, not every place called Donghu",
        advice:
          "Use Pinghu and the exact Chinese address when arranging pickup. Donghu means East Lake and appears in other destinations, including Wuhan. Likewise, Pinghu should not be confused with Hangzhou's West Lake viewpoint named Pinghu Qiuyue. Similar translated names are not the same attraction or hotel location.",
      },
      {
        title: "Hangzhou Bay is not a beach-holiday guarantee",
        advice:
          "Judge a southern stay by the actual hotel, permitted walks, current facilities and interests you want to pursue. A bay view does not establish a bathing beach, swimming, water sports or an operating boat. Working port areas and privately managed grounds have their own boundaries; leisure access must be confirmed individually.",
      },
      {
        title: "Lantern culture and a scheduled visitor activity are different",
        advice:
          "Pinghu's watermelon-lantern tradition is a useful local subject. A festival, museum presentation, retail display and hands-on session offer different experiences and may be seasonal or appointment-based. Confirm what the guest will actually see or do rather than promise a year-round workshop from the cultural association alone.",
      },
      {
        title: "A quiet-looking hotel photograph does not describe the whole stay",
        advice:
          "Check actual room position, nearby roads or businesses, sound insulation, climate control and dining. A city room may be more practical for the manor; a southern property needs enough time on site to justify its location. Recommend the base that serves the real plan instead of equating remoteness with comfort.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jiaxing",
        advice:
          "Jiaxing city adds South Lake's historical context and Yuehe canal-side streets. Pinghu is a separate county-level city within the wider municipality, not a district beside those sites. Compare the actual cultural interests and full hotel-to-hotel journey before adding another city night.",
      },
      {
        slug: "xitang",
        advice:
          "Xitang offers covered waterfront passages and a selected bridge-and-lane walk in Jiashan. Compare that setting with Pinghu's focused manor-and-city visit. An overnight in either place should follow the actual room, evening and morning you want, rather than a goal of collecting every nearby water town.",
      },
      {
        slug: "haining",
        advice:
          "Haining adds Yanguan and Qiantang tidal-bore planning, with a separate dated forecast and permitted viewing facility. A Pinghu bay view is not a substitute tide-viewing arrangement. Give the Haining visit its own timing, complete transfer and alternative rather than attach it to an already full city-and-coast day.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai provides a contrasting city chapter and international gateways. Compare a direct road journey from the real hotel with dated rail and final transfers. Being near the Shanghai region does not make every terminal or city district equally convenient, and a return road journey needs a proper buffer before a flight.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, Longjing tea and a substantial city stay. Keep Pinghu city distinct from the West Lake viewpoint with a similar name. Add the manor chapter when the guest's interests and full journey justify it, while protecting useful lake and tea time rather than a sequence of rushed city stops.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit the manor and city-lake walk, with rain and busy holiday periods still possible. Summer calls for cooling, shade and shorter exposed stretches; winter can be cold and damp, especially toward the bay. A waterfront address does not guarantee a clear view or comfortable wind conditions. Check actual cultural-event dates and current museum displays separately. Watermelon-lantern associations do not mean a demonstration or festival takes place whenever you arrive.",
    orientation:
      "Pinghu is a county-level city within Jiaxing municipality in northeastern Zhejiang. Central Danghu, the city East Lake, Zhapu and individual Jiulongshan properties require different addresses and route decisions. The manor-and-lake introduction is not a continuous walk to the bay. The place name Donghu needs the Pinghu context, and Jiulongshan is used elsewhere in China. Send the full Chinese hotel, attraction and gateway details rather than rely on a translated place name or a regional map pin.",
    experiences: [
      "Read Mo Family Manor through rooms, courtyards and the organization of a Jiangnan household",
      "Pair a manageable East Lake walk with a relevant cultural display or local meal",
      "Add a named Zhapu or Jiulongshan interest only when its actual access and property justify the journey",
    ],
    planningNotes: [
      "Choose between a city visit and a separate bay-side stay before booking the room",
      "Check the actual rail gateway, final road journey and complete return transfer",
      "Confirm manor interiors, shoreline access and hotel facilities as separate arrangements",
    ],
    arrival:
      "Compare a complete road pickup from the actual Shanghai, Jiaxing or Hangzhou hotel with dated trains to a gateway that works for the final Pinghu address. Jiaxing South and Jiashan South are different stations and may serve different approaches; confirm the real service rather than infer a route from a place name. Include both terminal transfers, boarding, luggage and the final road. For airport arrivals, specify the terminal and flight before choosing the connection. A central-city hotel and a Zhapu or Jiulongshan property may need quite different onward arrangements.",
    gettingAround:
      "Group Mo Family Manor, a selected lake section and the chosen cultural display into a manageable city plan, using a vehicle where actual distances warrant it. Treat a southern Zhapu or Jiulongshan outing as a separate road stage. Confirm current entrance and pickup points, rest stops, toilets and indoor alternatives. A private car cannot provide access to a working port, a restricted shore or private grounds, and a hotel name does not establish permission to use every nearby amenity.",
    stayStrategy:
      "For one city night, prioritize the actual cultural route, dinner and sleep. For a southern property stay, leave enough time to enjoy its confirmed facilities and dining rather than drive back to the city for every activity. Compare room category, noise, bathroom, climate control, breakfast and access. If the main purpose is an introductory manor-and-lake visit and the day trip works, keeping the existing hotel may be the more comfortable choice. Another room move should add usable time or a distinct experience.",
    firstTimerNote:
      "Begin with what Pinghu adds to your wider route. A late-Qing household, a slower city meal and a manageable lake walk can be a worthwhile chapter without an ambitious coast circuit. A bay-side property is a separate choice with its own access and comfort requirements. The route can be stronger when it omits a distant stop rather than tries to turn every part of the municipality into one day of sightseeing.",
    faqs: [
      {
        question: "Where is Pinghu, and is it part of Jiaxing?",
        answer:
          "Pinghu is a county-level city within Jiaxing municipality in northeastern Zhejiang, adjoining the Shanghai region. It is separate from Jiaxing's central-city South Lake and Yuehe visit. Use 平湖市 and the exact hotel or attraction address for transport, especially when comparing the city with Zhapu or Jiulongshan.",
      },
      {
        question: "Is Pinghu worth visiting?",
        answer:
          "It can be for Mo Family Manor's domestic architecture, a selected East Lake walk, a relevant cultural display and local food. Choose those interests deliberately. If time is short and your main priorities are other Jiangnan cities or a particular water town, protecting those stays may be more valuable than an extra hotel move.",
      },
      {
        question: "How many nights should I spend in Pinghu?",
        answer:
          "A relaxed half day in the city plus transfers can introduce the manor and a lake section. One night adds a useful evening and morning. Two nights need an additional purpose or a property you want to use. A Zhapu or Jiulongshan stay should be judged separately from the city hotel choice.",
      },
      {
        question: "Can I visit Pinghu on a day trip from Shanghai?",
        answer:
          "Yes, when the full return journey leaves enough time for the actual city visits and lunch. Compare direct road transport with dated rail to a suitable gateway and both local transfers. Shanghai districts and airport terminals are different starting points. Avoid adding a distant coast stop or a tight onward flight to an already full day.",
      },
      {
        question: "What should I see at Mo Family Manor?",
        answer:
          "Focus on the sequence of rooms and courtyards and how the household organized reception, movement and domestic space. Confirm the current open route and explain historic fabric, repair and displayed objects accurately. A public visit does not establish that every room is open, every object is original or a specialist host is available.",
      },
      {
        question: "Should I stay in Pinghu city or Jiulongshan?",
        answer:
          "Choose central Danghu for the manor, city-lake walk and meals. Choose a named Jiulongshan property when its actual room, confirmed facilities and time on site are the reason for the stay. They are separate bases. A bay view or estate name does not establish beach use, swimming, golf, boating or unrestricted grounds.",
      },
      {
        question: "Is Pinghu's East Lake the same as Hangzhou's West Lake?",
        answer:
          "No. Pinghu's Donghu is the city East Lake. Hangzhou's West Lake is a different destination, including a viewpoint called Pinghu Qiuyue whose name can cause confusion. East Lake is also an English name used elsewhere in China. Use the city and full Chinese address when arranging the visit.",
      },
      {
        question: "Can I see watermelon-lantern making in Pinghu?",
        answer:
          "Only when an actual current display, event or provider is confirmed. A seasonal festival, museum presentation and hands-on session are different experiences. The local cultural association does not establish a year-round workshop. Check the date, content, language and any booking terms before adding it to the itinerary.",
      },
    ],
    culturalStory: {
      title: "A household gives the wider Jiangnan story a smaller scale",
      paragraphs: [
        "Mo Family Manor, or Mo Shi Zhuang Yuan (莫氏庄园), offers a focused way to understand a late-Qing residence through its spatial organization. Follow the accessible sequence of courts, halls and rooms and ask how family life, visitors and household work used the building. Explain repair and current display choices separately from the historical house. The visit should not depend on assuming every furnishing is original or every door leads to an accessible room. A few well-explained details can be more useful than a fast inventory of carved surfaces.",
        "At East Lake, or Donghu (东湖), change scale from household space to a city waterfront, choosing a section and a Baoben Pagoda (报本塔) viewpoint that fit the actual route. Pinghu's watermelon-lantern tradition, xigua deng (西瓜灯), adds another local cultural subject, but a story about the craft is not a confirmed demonstration. Distinguish seasonal events, current displays and living providers. In the southern bay-side chapter, make the same distinction between public landscapes, working port areas and privately managed grounds.",
      ],
    },
    foodStory: {
      title: "Taste the local association, then choose a meal that suits you",
      paragraphs: [
        "Pinghu's zaodan (糟蛋), eggs preserved in a rice-wine preparation, offers a distinctive tasting for guests interested in local preserved foods. Ask the actual producer about ingredients, preparation and storage, and choose a cooked alternative if the texture or preparation does not appeal. A small shared tasting can be enough. Add vegetables and other dishes the kitchen handles well, and ask about the actual provenance and bones of any fish or seafood. A bay-side restaurant does not prove every ingredient came from the adjacent water.",
        "Check egg, alcohol, pork, fish, shellfish, soy, wheat, broth and shared equipment for dietary requests. Preserved preparations and restaurant recipes vary; a familiar-looking dish is not automatically suitable for a serious allergy, vegetarian diet or an alcohol-free preference. Use a kitchen able to explain its preparation and keep an alternative when it cannot meet the need. A food tasting, retail stop and cooking session require different arrangements, with any host or hands-on participation confirmed separately and purchases kept optional.",
      ],
    },
    itinerary: [
      {
        day: "Morning / arrival",
        title: "Give the manor a clear architectural focus",
        description:
          "Complete the journey to the actual entrance or hotel and arrange luggage if staying. Visit Mo Family Manor when the current route is open, allowing time to understand rooms, courts and household movement. Adjust the route for thresholds, seating and the group's needs rather than rush every accessible room.",
      },
      {
        day: "Lunch and afternoon",
        title: "Connect the house with a manageable city-lake chapter",
        description:
          "Take a seated lunch, then choose an East Lake section and viewpoint or a relevant current museum display. Leave rest and weather flexibility. Day visitors protect the full return transfer rather than add Zhapu or a distant property as an unplanned last stop.",
      },
      {
        day: "Optional overnight or separate southern outing",
        title: "Let the real room and purpose determine the next stage",
        description:
          "Enjoy a city dinner and morning when a central room serves the plan. For a Zhapu or Jiulongshan chapter, name the actual public site or property and confirm access, dining and facilities before making the journey. A bay-view description alone does not create an activity itinerary.",
      },
      {
        day: "Departure",
        title: "Continue with the exact gateway and next base settled",
        description:
          "Collect luggage and allow the complete road and rail buffers for the actual station or hotel. Continue to Jiaxing for South Lake and Yuehe, Xitang for a canal-town stay, or your next city when that adds a distinct chapter. Use this outline to discuss a tailored plan with the stops, accommodation and services confirmed for your dates.",
      },
    ],
  },
};
