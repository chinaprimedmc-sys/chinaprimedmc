import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhaoqing.svg",
  alt: "Original Zhaoqing planning schematic distinguishing Seven Star Crags, Dinghu Mountain and a Duan inkstone interest with different city bases; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const zhaoqingGuide: ExpandedDestination = {
  id: "zhaoqing",
  name: "Zhaoqing",
  region: "south",
  kicker: "Lakeside limestone, forested slopes and the craft of an inkstone",
  description:
    "Choose Zhaoqing for a considered Guangdong landscape break: separate Seven Star Crags from Dinghu Mountain, assess walking and discover what makes Duan inkstones interesting.",
  stay: "2–3 nights for one or two distinct local days",
  bestFor: "Lake-and-limestone scenery, selected forest walks and Chinese writing culture",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["guangzhou", "foshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhaoqing Travel Guide: Crags, Dinghu & Where to Stay",
    seoTitle: "Zhaoqing Guide: Crags, Dinghu & Stays",
    seoDescription:
      "Plan Zhaoqing's Seven Star Crags, Dinghu Mountain and Duan inkstone interests. Compare two- or three-night stays, city hotel areas, walking and Guangzhou transfers.",
    answer:
      "Zhaoqing (肇庆) is a city in western Guangdong, with a useful contrast between the lake-and-limestone scenery of Seven Star Crags and the forested slopes of Dinghu Mountain. Seven Star Crags, or Qixingyan (七星岩), is not the same visit as Dinghushan (鼎湖山). Duan inkstones add a different cultural subject: how stone, workmanship and water support the preparation of ink for writing and painting. Two nights give one full day; three allow two distinct days without forcing the lake, mountain and craft into one circuit. Choose a specific Duanzhou city or Dinghu-area base around the main purpose and the actual room. Zhaoqing East station is a gateway, not automatically the closest location for every hotel or visitor entrance.",
    stayAnswer:
      "Two nights suit a selective landscape or cultural day between arrival and departure. Three give two full days and can separate Seven Star Crags from a chosen Dinghu route or confirmed inkstone session. One night can work for a focused stop with favorable transport, but a late arrival and early departure leave little useful time. A day trip from Guangzhou is another option for one clear purpose when the complete return is comfortable. Additional nights should add depth or worthwhile rest, not repeat lake viewpoints or create an unnecessary hotel move.",
    hotelAnswer:
      "Compare a Duanzhou city hotel for meals and selected urban or lake interests, a named Xinghu/Seven Star Crags-area property for its actual setting, and a Dinghu-area room for a mountain-led stay. These are different choices, not equivalent scenic neighborhoods. Check the booked room's quiet, bathroom, temperature control, breakfast, luggage access and pickup. A lake view does not establish direct scenic-area entry; a mountain-facing room does not remove the drive and walking to a temple or trail. Use the exact hotel and entrance to compare complete transfers.",
    sightseeingQuestion: "Should I choose Seven Star Crags or Dinghu Mountain?",
    sightseeingAnswer:
      "Choose Seven Star Crags for a defined lake-and-limestone route, with the actual walking, optional climb or boat segment selected for the group. Choose Dinghu Mountain for a specific forest and religious-history interest, with slopes, steps, internal transport and return assessed. Neither name describes one universally easy route. For a short visit, one well-chosen outing usually gives more useful time than rushing both. With three nights, separate them into distinct days if both genuinely interest you. An inkstone session is another cultural choice, not an automatic shopping stop between the landscapes.",
    visitorResources: [
      {
        label: "Zhaoqing municipal government",
        href: "https://www.zhaoqing.gov.cn/",
        scope:
          "City background and dated notices, mainly in Chinese. Confirm the exact Seven Star Crags or Dinghu visitor route, entrance, current transport and operating facilities with the responsible provider. A city description does not confirm a boat, temple interior, specialist host or particular room.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and exact stations, then both hotel transfers. Zhaoqing East, Zhaoqing and Dinghushan station references are not interchangeable pickup instructions. Choose the actual service and full address rather than infer convenience from the city name.",
      },
    ],
    serviceScope:
      "A proposal should identify the actual hotel and room, gateway, complete transfers, guide language, selected public routes, admissions, internal transport and meals. At Seven Star Crags, distinguish a lower walking route, a climb and any operating boat. At Dinghu, name the route and explain the walking remaining after transport. An inkstone visit should specify whether it is collection interpretation, a maker demonstration, a practical ink-grinding session or shopping. A specialist, workshop, temple interior or private space needs its own confirmed arrangement. Buying is optional; private guiding does not authorize closed trails or authenticate a stone's origin and market value.",
    routeAdvice:
      "Guangzhou adds Cantonese food and trading history, with dated rail and complete road transfers reviewed before choosing a day visit or overnight. Foshan adds a different Lingnan craft and temple context, including Shiwan ceramics; compare it with inkstone learning for a purposeful cultural route. No matching published Zhaoqing product is recommended here. Share your dates, actual gateways, walking and stair preferences, room expectations and interest in landscapes or writing culture. Ask for a proposal showing one clear priority per day and the actual route that suits it.",
    practicalPlanning: {
      timing:
        "Choose the exact entrance, walking start and finish before fixing the day. Allow entry, any internal transfers, questions, lunch and rest rather than use only a headline attraction duration. Protect a confirmed host session from uncertain arrival. A long mountain outing should not be attached casually to a ticketed departure. For a Guangzhou return, count both terminal transfers and the road from the final visitor exit, not just the fast train segment.",
      walking:
        "Lake-level paths, rock climbs, cave sections if selected, temple approaches and forest trails have different demands. Check actual steps, gradients, wet surfaces, shade, toilets, seating and exit options. Internal transport may shorten one leg without removing the remaining climb. Agree a coherent shorter route for guests who do not want the full outing. Do not assume step-free access from a lakeside photograph or that a private car can enter every mountain route.",
      cost: "Compare room category, complete vehicle and guide time, named admissions, internal transport, any boats and actual meals. An inkstone specialist or practical session needs a defined format and fee. Tea, craft purchases and shipping are separate unless stated. Clarify any sales commission. A premium quote should improve room comfort, interpretation, pacing and support rather than imply unrestricted park access or a guaranteed valuable purchase.",
    },
    attractions: [
      "Seven Star Crags / Qixingyan, on a selected lake-and-limestone visitor route",
      "Dinghu Mountain / Dinghushan, with a specific open forest or temple approach",
      "Qingyun Temple as a selected Dinghu religious-history subject under current access",
      "An identified Duan inkstone collection, maker demonstration or learning session",
      "A selected Duanzhou city-history walk, including historic walls where currently accessible",
      "A regional meal explaining Zhaoqing's wrapped zongzi rather than another rushed snack stop",
    ],
    stays: [
      {
        label: "Day visit or 1 night / one clear purpose",
        advice:
          "Choose the lake, a defined mountain outing or a confirmed cultural subject around the actual transport window. Keep the route selective. A short stop should not be sold as complete coverage of both scenic areas, every climb and local craft.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Use one suitable base for the principal experience, meals and rest. A modest arrival and departure protect the full day. Add a complementary city or craft interest only when the actual access, road and guest energy support it.",
      },
      {
        label: "3 nights / two different full days",
        advice:
          "Can separate lake scenery from a chosen forest route or substantial inkstone interest. Adjust the order to current conditions within booking terms. The extra night should add contrast or comfort rather than repeat similar viewpoints and unnecessary shopping.",
      },
    ],
    hotelAreas: [
      {
        name: "Duanzhou city / meals and urban services",
        advice:
          "Assess a specific hotel for quiet, bathroom, temperature control, breakfast and pickup, then the full road to the selected lake or mountain entrance. A dependable city room can suit a high-comfort stay without being sold as a secluded retreat.",
      },
      {
        name: "Xinghu / Seven Star Crags surroundings / a particular lakeside setting",
        advice:
          "Choose by the booked view, room and worthwhile hotel time. Check road noise, actual shore access, meals and the visitor entrance. Looking across water is not proof that guests can walk directly into the scenic area or take a boat from the property.",
      },
      {
        name: "Dinghu area / a mountain-led base",
        advice:
          "Useful only when the actual hotel and route improve the chosen outing. Compare the remaining road, walking start, room quiet and evening food. Proximity to Zhaoqing East or a mountain label is not a guarantee of convenient access to both scenic areas.",
      },
    ],
    tradeoffs: [
      {
        title: "A scenic-area name is not a walking specification",
        advice:
          "Seven Star Crags can mean different combinations of shore paths, viewpoints and climbs. Dinghu likewise needs an actual forest or temple route. Ask what is included, what remains optional and how guests return. A shorter coherent outing is more useful than a long list whose physical demands are unspecified.",
      },
      {
        title: "Lake scenery and forest interpretation offer different value",
        advice:
          "At the lake, look at the relationship between limestone, water, planted edges and the surrounding city rather than rely on a comparison with Guilin. At Dinghu, identify the visible forest features and the particular route's religious or ecological context. A general biodiversity reputation does not promise wildlife sightings or access to research plots.",
      },
      {
        title: "An inkstone is a working object as well as a collectible",
        advice:
          "A useful session begins with how water and an ink stick produce usable ink on a prepared surface. Then discuss shape, stone, finishing and any carving using the actual example. A maker demonstration, trying ink grinding and a retail appointment are different formats. A famous regional name alone does not establish a piece's origin, age, grade or price.",
      },
      {
        title: "Dinghu is not an invitation to every forest path",
        advice:
          "Follow the current visitor route and any closures. Wet conditions, conservation needs and operator decisions can alter the outing. A private guide does not open protected areas or promise a quiet temple interior. Confirm the actual public access and a worthwhile alternative rather than infer permission from a trail on a map.",
      },
      {
        title: "A slower stay needs a room that rewards the pause",
        advice:
          "If a scenic hotel is part of the reason to stay, assess sleep, bathroom, climate control, food and indoor seating before the view. Rainy-day comfort matters when the main plans are outdoors. A practical city room and a well-chosen day route can be better than a scenic property with services that do not meet the guest's needs.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "guangzhou",
        advice:
          "Guangzhou provides a different Cantonese city, food and trading-history stay. Compare the exact ticketed stations and both room transfers before choosing a Zhaoqing outing or extra nights. The published Guangzhou–Shenzhen business product does not automatically include this landscape or inkstone extension.",
      },
      {
        slug: "foshan",
        advice:
          "Foshan adds temple craftsmanship, Shiwan ceramics and a different urban craft context. Give each subject a clear learning question and its own confirmed host where needed. Shared Lingnan geography does not make Zhaoqing's parks and Foshan's craft districts one compact touring area.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for lake and forest walking, with the actual rain, heat and holiday calendar checked. Wet paths can change a mountain plan even when a city walk remains comfortable. Summer calls for shade, water and shorter exposed blocks; colder dates change room and meal preferences. Choose the actual public route and an indoor alternative rather than promise a particular view, open boat program or wildlife encounter from a seasonal description.",
    orientation:
      "Zhaoqing is a large municipality in western Guangdong. Duanzhou's urban and Xinghu-area interests and Dinghu Mountain occupy different parts of the local plan. Qixingyan / 七星岩 means Seven Star Crags; Dinghushan / 鼎湖山 is the separate mountain destination. Do not confuse it with Dinghu Peak at Jinyun Xiandu in Zhejiang. Duan inkstones are a regional craft interest, not a single automatically open workshop. For a short stay, prioritize the city and Seven Star Crags or a separate Dinghu Mountain day; a craft visit needs a named venue and an agreed appointment where required.",
    experiences: [
      "Appreciate the lake-and-limestone setting on a route matched to the group's walking preferences",
      "Explore a selected Dinghu forest or religious-history subject with an honest return plan",
      "Understand a Duan inkstone through its practical use and actual workmanship",
    ],
    planningNotes: [
      "Separate Seven Star Crags from Dinghu Mountain before allocating days",
      "Specify remaining steps and walking after any internal transport",
      "Treat an inkstone lesson, a maker visit and buying as different arrangements",
    ],
    arrival:
      "Compare actual dated trains and full road transfers through the exact ticketed station. Zhaoqing East, Zhaoqing and Dinghushan references should match the booking; the most convenient gateway depends on the hotel and main outing. A Guangzhou fast train time excludes terminal access, bags and the road to the room. Keep the main visit away from uncertain arrival and allow the full return from the final visitor exit before departure. Any proposed airport approach needs its own complete road plan.",
    gettingAround:
      "Use a vehicle plan built around the actual hotel and visitor entrances, with waiting and pickup clear. Inside a scenic area, operating shuttles, boats and public walking routes follow their own terms. Agree whether the guide accompanies every segment, where explanation is possible and how a shorter option works. Driving, general guiding and specialist craft interpretation are distinct roles. Stay on open public routes and do not enter workshops, private land or research areas without the relevant arrangement.",
    stayStrategy:
      "Two nights give one full day; three can separate distinct landscape and cultural subjects. Choose one suitable base unless moving rooms produces a real advantage. Compare Duanzhou services, an actual lakeside setting and a Dinghu-area stay on complete roads, booked view, quiet, bathroom and meals. A high-end proposal should improve interpretation, comfort and time rather than disguise remaining steps or promise a private landscape. An important craft or temple visit need not require sleeping nearby.",
    firstTimerNote:
      "Ask for the walking route before choosing the scenic-area name. Then ask what a second day adds. A manageable lakeside outing and a thoughtful inkstone explanation may suit one guest, while another prefers a separate forest day. The right plan follows those priorities rather than fitting every attraction into the hours between two fast trains.",
    faqs: [
      {
        question: "Is Zhaoqing worth visiting from Guangzhou?",
        answer:
          "It can be for a focused lake, forest or inkstone interest when the complete return leaves useful time. Compare a selective day visit with two or three nights for a slower stay. Do not choose solely from the fast train duration, which excludes both terminal and hotel transfers.",
      },
      {
        question: "Are Seven Star Crags and Dinghu Mountain the same place?",
        answer:
          "No. Seven Star Crags / Qixingyan is a lake-and-limestone visitor area, while Dinghu Mountain / Dinghushan is a separate forested mountain destination. Each needs its own entrance, public route and complete transport plan.",
      },
      {
        question: "How many nights should I spend in Zhaoqing?",
        answer:
          "Two nights give one full local day; three allow two distinct days for selected landscapes or a substantial cultural subject. One night or a day visit should remain selective. Additional time is useful when it deepens the experience or improves comfort.",
      },
      {
        question: "Where should I stay in Zhaoqing?",
        answer:
          "Compare a Duanzhou city hotel, a particular Xinghu-area property and a Dinghu-area base according to the main purpose. Check exact roads, room quiet, bathroom, climate control, meals and pickup. A scenic label does not guarantee a better room or convenient access to both parks.",
      },
      {
        question: "Can I visit without a strenuous mountain climb?",
        answer:
          "Choose a specific route with actual steps, gradients, distances and return options reviewed. Some plans can prioritize lower walking or cultural subjects, but no scenic-area label guarantees step-free access. Internal transport does not automatically remove all remaining walking.",
      },
      {
        question: "What is a Duan inkstone?",
        answer:
          "It is an inkstone associated with the Zhaoqing region, used with water and an ink stick to prepare ink for writing or painting. A useful visit explains the actual stone and working surface. A regional name is not independent authentication of a retail piece's origin, age or value.",
      },
      {
        question: "Which published Zhaoqing tour is recommended here?",
        answer:
          "No matching published product is recommended. A tailored proposal should identify the room, full transport, guide, exact scenic routes, meals and any confirmed craft session. The sample outline is not a package or guarantee of boats, specialists and private access.",
      },
    ],
    culturalStory: {
      title: "A landscape and a writing tool invite close observation",
      paragraphs: [
        "Seven Star Crags becomes more interesting when a guide connects visible limestone, water, paths and the surrounding city. A viewpoint is one way to read that relationship; an inscription, where actually present and accessible, introduces another layer of how people have responded to the landscape. Identify the particular object and evidence rather than assign a famous author or precise date to every mark. At Dinghu, forest and religious history should likewise be explained through the route the group can actually follow, with research and conservation areas kept distinct from public sightseeing.",
        "An inkstone shifts attention from the broad scene to a small working surface. The interaction of stone, water and the ink stick helps explain why practical qualities matter alongside carving and appearance. A prepared session lets beginners understand the process before discussing labels or price. Maker knowledge, a practical exercise and independent valuation are different things. Cultural depth does not require buying an expensive piece, entering a restricted workshop or being promised an introduction to a master who has not agreed to meet.",
      ],
    },
    foodStory: {
      title: "A wrapped rice parcel deserves more than a quick photograph",
      paragraphs: [
        "Zhaoqing's guozheng zong, a substantial wrapped glutinous-rice preparation, offers a specific food subject. Ask the kitchen about the wrapper, beans, filling, preparation and portion size; recipes and service vary. It may suit sharing or taking a small portion rather than treating a large parcel as a light snack before another full meal. A vegetable, tofu or soup dish can help balance the table. A regional name does not establish one universal recipe or a particular sourcing claim.",
        "Check pork or other meat, beans, soy, wheat-containing sauces, peanuts, sesame, eggs and shared preparation as relevant. A rice-based food is not automatically suitable for every allergy or diet. Serious requirements need the actual kitchen's confirmed capacity and an alternative. For a mountain day, agree lunch, drinking water and the timing of dinner before departure. A comfortable meal and enough rest between outings matter more than adding another detour for a famous dish.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / one suitable base",
        title: "Settle before the main outing",
        description:
          "Complete the exact gateway road, check the booked room and keep the first walk or meal modest. Review current scenic-area routes and any host appointment. Do not make an essential landscape or craft session depend on an uncertain arrival.",
      },
      {
        day: "Full day 1 / chosen main landscape",
        title: "Give the actual route enough time",
        description:
          "Use the selected Seven Star Crags or Dinghu route, with the walking, internal transport and return clearly defined. Keep interpretation, lunch and rest. These are alternatives for a focused day, not a promise to complete both scenic areas and every optional activity.",
      },
      {
        day: "Optional full day 2 / three-night stay",
        title: "Add a different subject",
        description:
          "Choose the other landscape when it provides useful contrast, or a confirmed inkstone session and selected city context. Distinguish learning from shopping and religious public access from a private invitation. Adjust the order to current conditions within booking terms.",
      },
      {
        day: "Departure",
        title: "Protect the complete onward connection",
        description:
          "Allow breakfast, bags and the full station or next-hotel road. Continue to Guangzhou or Foshan with useful time for its own subjects. This outline is illustrative, not a published package, authentication service or guarantee of trails, boats, hosts and current operation.",
      },
    ],
  },
};
