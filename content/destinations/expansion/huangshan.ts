import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/huangshan.svg",
  alt: "Huangshan planning diagram distinguishing Tunxi city, Tangkou mountain gateway and on-mountain hotels; schematic rather than a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const huangshanGuide: ExpandedDestination = {
  id: "huangshan",
  name: "Huangshan",
  region: "east",
  kicker: "Yellow Mountain walks & a carefully chosen overnight",
  description:
    "Plan Huangshan around the stairs you can comfortably manage, the actual cableway route and whether an on-mountain night adds value, with village time arranged separately.",
  stay: "3–4 nights for mountain and villages",
  bestFor: "Mountain landscapes and thoughtful walking routes",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: [
    "tianzhu-mountain",
    "shitai",
    "jiuhua-mountain",
    "xuancheng",
    "qiandao-lake",
    "hefei",
    "hongcun",
    "hangzhou",
    "shanghai",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Huangshan Travel Guide: Yellow Mountain Routes & Hotels",
    seoTitle: "Huangshan Travel Guide: Routes & Mountain Hotels",
    seoDescription:
      "Plan Yellow Mountain with realistic stair expectations, cableway choices and mountain hotels. Compare Tunxi, Tangkou and a separate Hongcun village stay.",
    answer:
      "Huangshan, often called Yellow Mountain or the Yellow Mountains in English, is a granite mountain landscape known for pines, rock formations and changing cloud. The essential planning choice is the walking route, not the number of viewpoints. Cableways can reduce the ascent but leave substantial stairs on the mountain. Decide whether you want a selective day visit or an on-mountain night, then choose the gateway, hotel and baggage arrangements to match.",
    stayAnswer:
      "A focused mountain visit can use two gateway nights with one full day between them, but the exact arrival and onward journey determine whether that works. Three or four nights across the region allow a mountain chapter plus Hongcun or another village, with travel and different hotels counted honestly. An on-mountain night can make a longer walking route possible without returning to the gateway the same day; it does not guarantee sunrise, cloud views or easier walking.",
    hotelAnswer:
      "Stay in Tunxi, the main urban area of Huangshan city, for city dining, an old-street visit and some transport connections. Choose Tangkou near the southern mountain gateway for a mountain-focused plan. Choose an on-mountain hotel only after reviewing the walking route from the selected cableway, room facilities and luggage. Hongcun is a separate village base, not a hotel neighborhood at the mountain entrance. Properties marketed as Huangshan can be far apart.",
    sightseeingQuestion: "Should you sleep on Huangshan or visit in one day?",
    sightseeingAnswer:
      "Choose a day visit when a selective route fits your walking ability and you prefer a lower-altitude hotel with simpler luggage arrangements. Stay on the mountain when the overnight location improves the route and you accept its stairs, facilities and baggage limits. The room should make sense even in cloud or rain. A sunrise outing is weather-dependent and may involve additional dark or cold walking; it is not the reason to overlook an unsuitable hotel approach.",
    visitorResources: [
      {
        label: "UNESCO: Mount Huangshan",
        href: "https://whc.unesco.org/en/list/547/",
        scope:
          "Background on the mountain's natural and cultural significance. This does not verify current cableway operation, open paths, entrance arrangements, weather or mountain-hotel availability.",
      },
      {
        label: "Huangshan municipal government",
        href: "https://www.huangshan.gov.cn/",
        scope:
          "Regional background and public announcements. Confirm the scenic operator's date-specific access instructions and each transport or hotel booking separately.",
      },
    ],
    serviceScope:
      "We can discuss a private Huangshan plan with the selected mountain route, guide, hotel sequence and transfers specified in the proposal. Explain stair tolerance and any knee, balance or access needs before choosing the route. Private guiding helps interpretation and pacing; it does not remove public transport, weather-related changes or stairs. Scenic-area access, mountain transport and luggage services must be confirmed for the travel date.",
    routeAdvice:
      "Plan Huangshan as a tailored regional chapter, possibly connected with Hangzhou or Shanghai and a separate Hongcun stay. Begin with the usable days and walking ability, then decide whether a mountain night improves the trip. This page does not currently recommend a published Huangshan package. Your proposal should identify each hotel base, cableway plan, remaining walking, baggage arrangement and onward gateway before booking.",
    practicalPlanning: {
      timing:
        "Start from the actual gateway and selected cableway, then work through the open walking route and hotel or descent point. Allow for scenic transfers, entry, queues, meals and breaks rather than counting only the cableway ride. Keep the mountain day separate from a tight flight or long-distance train deadline. If combining villages, place them on a different usable day rather than after an ambitious descent.",
      walking:
        "Huangshan routes can involve repeated stone stairways, uneven or wet surfaces, exposed sections and substantial walking after cableway arrival. Ask for the specific route and approximate effort, including the path to any hotel. A short map distance can conceal many steps. Choose a different regional focus if the remaining walking is unsuitable; cableway access alone is not an accessibility guarantee.",
      cost: "Compare gateway and on-mountain room nights, actual room category, admissions, cableway sectors, scenic transport, guiding, baggage storage or carrying arrangements and hotel-to-hotel transfers. Mountain dining and room facilities differ from city resorts. A lower quote may use a different route or omit essential transport, while a premium price cannot guarantee weather or a clear sunrise.",
    },
    attractions: [
      "Mount Huangshan",
      "Huangshan granite peaks and pine landscapes",
      "Tunxi Old Street",
    ],
    stays: [
      {
        label: "2 gateway nights: a focused mountain day",
        advice:
          "Use the single full day for an agreed out-and-back or other suitable route. Arrival must leave time to reach the right base; an early onward departure still needs its own transfer.",
      },
      {
        label: "Gateway plus mountain night: route-led",
        advice:
          "Choose the overnight only when the approach and onward walking fit the group. Confirm which luggage stays below, what you carry and how the mountain hotel relates to the selected cableways.",
      },
      {
        label: "3–4 regional nights: mountain and village",
        advice:
          "Allow separate time for Hongcun or another cultural interest, with each hotel move counted. Extra nights can improve the pace and flexibility, but do not guarantee a second mountain entry or a particular view.",
      },
    ],
    hotelAreas: [
      {
        name: "Tunxi and Huangshan's urban area",
        advice:
          "Consider for dining, an old-street chapter and the overall arrival or departure plan. Check the exact airport or rail transfer and morning drive to the mountain. A city hotel is not a mountain-gateway property simply because its address says Huangshan.",
      },
      {
        name: "Tangkou and the southern gateway",
        advice:
          "Consider for a mountain-focused stay. Confirm the actual transfer point, hotel pickup, baggage storage and dining. The gateway still has scenic-area transport and entry arrangements; the road vehicle does not necessarily take you to the cableway door.",
      },
      {
        name: "On-mountain accommodation",
        advice:
          "Choose by the open route, cableway and remaining stairs, not the hotel name alone. Verify room category, heating, bathroom, meals and how luggage reaches the property. Mountain location can provide atmosphere but should not be assumed to match the facilities of a city luxury hotel.",
      },
    ],
    tradeoffs: [
      {
        title: "Cableways change the route, not the mountain",
        advice:
          "Yungu and Yuping are different route choices on the southern approach. Ask which is proposed, what walking remains and how you return. Operation and open paths must be checked for the date. Do not promise a full circuit or named peak from a generic cable-car ticket.",
      },
      {
        title: "Choose an overnight for its actual route",
        advice:
          "A mountain night can reduce the need to descend on the first day, but reaching the hotel may still be demanding. Confirm the path to dinner and any viewpoint as well as the room. Optional sunrise walking should remain optional, with a worthwhile plan if the sky is obscured.",
      },
      {
        title: "Carry only what the mountain plan supports",
        advice:
          "Establish where larger luggage stays and what you need for the overnight. Check storage, transfer and any separately arranged carrying service rather than assuming a vehicle follows you. Keep essential medication, weather layers and personal necessities accessible throughout the route.",
      },
      {
        title: "Separate scenery from weather promises",
        advice:
          "Cloud can reveal or hide the mountain, and rain, wind or winter conditions can change access. Ask how the guide adapts the route and what cancellation terms apply. A sea of clouds, named summit or sunrise photograph cannot be guaranteed by private service.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "tianzhu-mountain",
        advice:
          "Tianzhu Mountain near Qianshan offers a separate granite-landscape journey with its own visitor routes and hotel bases. Compare the actual viewpoints, remaining stairs after cableways and full gateway journeys before choosing either or both. It is not a guaranteed quiet or effortless alternative; a city or village chapter may offer more contrast on a shorter trip.",
      },
      {
        slug: "shitai",
        advice:
          "Shitai offers a different countryside stay and selected Guniujiang stream-and-valley routes. Compare the exact Shitai-side entrance, rural property and full road journey with the Huangshan stair and hotel sequence. Include both for distinct interests and usable nights, not as interchangeable versions of the same mountain visit.",
      },
      {
        slug: "jiuhua-mountain",
        advice:
          "Jiuhua Mountain offers a distinct Buddhist-cultural chapter associated with Dizang, with a selected temple route around Jiuhua Street and Tiantai as a separate walking decision. Compare the combined stairs, rooms and complete transfer before joining the two mountains. A lower-walking cultural day or a rest chapter may add more value than another demanding summit route.",
      },
      {
        slug: "xuancheng",
        advice:
          "Xuancheng adds a literary city chapter and separate Jing County Xuan-paper interests, a different subject from mountain walking. Choose the actual paper venue and usable nights before setting the connection. A confirmed craft appointment, rural room and Huangshan gateway are different addresses; compare full transfers and luggage rather than treat southern Anhui as one compact visitor area.",
      },
      {
        slug: "qiandao-lake",
        advice:
          "Qiandao Lake can provide a gentler lakeside break before or after a carefully assessed mountain chapter. Compare the complete connection to the actual hotel and protect useful rest time. The lake station, resort and cruise pier are separate places; do not put a major island outing immediately before a tight onward transfer to the mountain gateway.",
      },
      {
        slug: "hefei",
        advice:
          "Hefei can add selected Anhui Museum galleries and a city-history subject, or serve as a clear gateway. Compare actual stations and the final road to Tunxi, Tangkou or the booked village. The capital is not a mountain base, and a short rail segment should not replace useful nights near the landscape you came to enjoy.",
      },
      {
        slug: "hongcun",
        advice:
          "Add Hongcun for Huizhou village architecture and a contrasting pace. Give it a separate stay or useful daytime window, including the road transfer and luggage. It is not a short walk from the mountain gateway.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake and tea rather than another mountain day. Compare the exact rail stations, hotel transfers and usable time. Keep a significant mountain walk away from a tight onward connection.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai offers a different city chapter and international connections. Confirm whether the route uses rail or air and the complete gateway transfer. A Huangshan North ticket does not mean you are already at the scenic entrance.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit mountain walking, with rain, cloud and variable temperatures still possible. Summer can bring heat, wet weather and busy periods; winter can mean ice, cold and altered operations. Plan around the group's comfort and current route conditions, not a promised season of clear views. Holiday demand can affect both mountain rooms and transport.",
    orientation:
      "Huangshan is both a city name and the name used for the mountain destination. Tunxi, Huangshan North railway station, Tangkou, the scenic transport system and on-mountain hotels are separate places. Hongcun belongs to a different village chapter. Use actual addresses and route names to avoid mistaking a city arrival for arrival at the mountain.",
    experiences: [
      "Follow a selected mountain route for granite, pines and changing views at a realistic stair pace",
      "Stay on the mountain only when the route and hotel approach make the overnight worthwhile",
      "Balance the mountain with Tunxi or a separately planned Huizhou village visit",
    ],
    planningNotes: [
      "Review remaining stairs after the cableway and the exact hotel approach",
      "Confirm gateway, mountain transport and luggage arrangements separately",
      "Leave room for route changes without promising clear skies or sunrise",
    ],
    arrival:
      "Huangshan North railway station, other regional stations and Huangshan Tunxi International Airport are different gateways. Confirm the ticket and first hotel before arranging pickup. The onward road journey to Tangkou or a village is part of the travel day. An evening arrival may suit a gateway night; do not attach an uncertain arrival to the last available mountain ascent.",
    gettingAround:
      "A private road vehicle connects the booked arrival point, gateway hotels and villages within the agreed service. Inside the mountain scenic area, designated transport, cableways and walking form the actual route. A private guide does not imply exclusive transport or access to a closed path. Confirm where the group, vehicle and stored luggage meet after descent.",
    stayStrategy:
      "Work through the nights as a sequence: arrival base, any mountain night, descent and village or departure hotel. Avoid carrying large luggage between unsuitable properties. For premium travelers, the best choice may be a comfortable gateway or village stay with a selective mountain day rather than an on-mountain room whose approach or facilities do not fit.",
    firstTimerNote:
      "Huangshan is not a cable-car viewpoint with no further effort. The mountain remains a walking destination even when the initial ascent is mechanized. Describe what the group can manage and choose a route on that evidence; leaving out a demanding section is a sensible planning choice.",
    faqs: [
      {
        question: "Are Huangshan and the Yellow Mountains the same destination?",
        answer:
          "Yes, Huangshan is commonly called Yellow Mountain or the Yellow Mountains in English. Huangshan is also the name of the wider city, so confirm whether a booking refers to Tunxi, the mountain gateway or an on-mountain hotel.",
      },
      {
        question: "Can I visit Huangshan without hiking up from the bottom?",
        answer:
          "A cableway can reduce the initial ascent, but substantial stairs and walking may remain between viewpoints, transport and hotels. Review the actual route before booking. A cableway-based visit is not necessarily step-free or suitable for limited mobility.",
      },
      {
        question: "Is it worth staying overnight on Huangshan?",
        answer:
          "It can be when the hotel location improves a route you can comfortably manage. Check the remaining stairs, room facilities, meals and luggage. The night does not guarantee sunrise or cloud views, and a selective day trip may suit some travelers better.",
      },
      {
        question: "Should I stay in Tunxi or Tangkou?",
        answer:
          "Choose Tunxi for a city base and some arrival or departure plans; choose Tangkou for a mountain-focused gateway stay. Compare actual addresses, transport connections and the next morning's route. Neither is the same as an on-mountain hotel.",
      },
      {
        question: "Can I visit Huangshan and Hongcun in one day?",
        answer:
          "A selective combination may be technically possible under some arrangements, but it reduces time at both and adds road travel after mountain walking. For a first visit or gentler pace, use separate days and count the transfers honestly.",
      },
      {
        question: "Can you guarantee the sea of clouds or a sunrise view?",
        answer:
          "No. Weather and open routes determine what is visible and accessible. Choose a mountain plan and accommodation that still make sense in cloud, with agreed alternatives and cancellation terms.",
      },
    ],
    culturalStory: {
      title: "Understand why these mountains became images",
      paragraphs: [
        "Huangshan's granite forms, pines and changing cloud have long attracted artists and writers. A guided walk can connect that visual tradition to the landscape in front of you: how a rock shape frames a view, how a tree holds attention and how cloud changes the scale. Those connections give a few carefully selected stops more meaning than a long list of summit names.",
        "The mountain also sits within a wider Huizhou travel region, where villages and merchant-era architecture provide a different cultural perspective. Keep those settings distinct. A village visit deserves its own interpretation and time, rather than becoming an incidental shopping stop after an exhausting descent.",
      ],
    },
    foodStory: {
      title: "Plan mountain meals as part of the route",
      paragraphs: [
        "On a walking day, timing and a suitable place to sit can matter more than an elaborate menu. Confirm where lunch fits between transport and the hotel, what is available and what the group needs to carry. Do not assume a remote mountain restaurant provides the same range or flexibility as a city venue.",
        "In Tunxi or a village stay, Huizhou cooking offers a regional contrast, including preserved flavors and dishes whose texture or aroma may be unfamiliar. Explain preferences and dietary requirements before ordering; stocks, sauces and preparation need checking. An overnight booking should state which meals are included and what happens when weather changes the day's arrival time.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the right mountain base",
        description:
          "Transfer to the confirmed gateway hotel, review conditions and prepare a manageable bag. Leave fixed ascent arrangements separate from a late arrival.",
      },
      {
        day: "Mountain day",
        title: "Follow the selected open route",
        description:
          "Use the confirmed scenic transport and cableway, with walking, breaks and weather reviewed. Descend to the gateway or continue to the booked mountain hotel according to the agreed plan.",
      },
      {
        day: "Following day",
        title: "Descend or turn to village culture",
        description:
          "An overnight mountain plan needs its descent and baggage reunion. A village visit follows only when the road transfer and available energy leave a worthwhile window.",
      },
      {
        day: "Departure",
        title: "Protect the onward gateway",
        description:
          "Travel from the actual hotel to the booked station or airport. This outline illustrates choices; it is not a published package with all variants included.",
      },
    ],
  },
};
