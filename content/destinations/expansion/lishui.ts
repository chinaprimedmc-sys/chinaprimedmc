import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/lishui.svg",
  alt: "Lishui regional planning schematic distinguishing a city gateway, a selected countryside base and another county chapter; original schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const lishuiGuide: ExpandedDestination = {
  id: "lishui",
  name: "Lishui",
  region: "east",
  kicker: "A gateway to southern Zhejiang, with each rural chapter chosen deliberately",
  description:
    "Plan Lishui city and the wider region without confusing a rail gateway with a rural retreat: compare river villages, Songyang, Yunhe terraces, Jinyun scenery and Longquan craft interests.",
  stay: "3–5 nights for a selected regional route",
  bestFor: "River landscapes, rural architecture and a slower southern Zhejiang journey",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["yunhe", "jinyun", "longquan", "songyang", "hangzhou", "jingdezhen"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Lishui Travel Guide: City, Villages & Regional Routes",
    seoTitle: "Lishui Travel Guide: City, Villages & Routes",
    seoDescription:
      "Distinguish Lishui city from the wider Zhejiang region, with practical choices for Guyan Huaxiang, Songyang, Yunhe terraces, Jinyun and where to stay.",
    answer:
      "Lishui (丽水) is both a city in southwestern Zhejiang and the name of a much wider prefecture-level area containing distinct counties and county-level cities. The urban center in Liandu can serve as a transport and services base; Songyang's villages, Yunhe's rice terraces, Jinyun's Xiandu landscape and Longquan's craft traditions are separate travel chapters. Start by choosing the experience and actual overnight location, then the gateway. A hotel booked simply under Lishui may be in the city rather than beside the countryside subject you want to see. This regional guide helps you make those choices; it is not a claim that every county is covered by one city visit.",
    stayAnswer:
      "Three nights can support one clear regional focus with a suitable arrival and departure, or a city-and-river introduction with a selected outing. Four or five nights allow a second distinct chapter if the actual driving and hotel sequence work. For Songyang's mountain villages or a focused Yunhe photography stay, choose the appropriate rural base rather than returning to the city every night by default. Do not attempt all of Songyang, Yunhe, Jinyun and Longquan in a short checklist; their different subjects deserve usable time, meals and road transfers.",
    hotelAnswer:
      "Choose urban Liandu for services and a practical city gateway, a named property around the Guyan Huaxiang river area for that setting, or a base in the specific county where your main interest lies. A city hotel can be useful for the first or final night, while a rural hotel may better serve early or late landscape time. Compare the full itinerary rather than assuming one base suits the entire prefecture. For every property, confirm the actual room, climate control, meals, stairs, quietness and final vehicle approach.",
    sightseeingQuestion: "Which part of the Lishui region should you choose?",
    sightseeingAnswer:
      "Choose Guyan Huaxiang for a selected river-and-village visit, Songyang for mountain settlements and contemporary rural architecture, Yunhe for a rice-terrace landscape matched to the actual agricultural season, Jinyun for a selected Xiandu landscape route, or Longquan for a properly arranged celadon or sword-making interest. These are different places and experiences, not interchangeable versions of a generic rural China tour. Select one or two according to interest, mobility, hotel quality and complete transport. Specialist hosts, boat services, workshop access and particular photographic conditions require separate confirmation.",
    visitorResources: [
      {
        label: "Lishui municipal government",
        href: "https://www.lishui.gov.cn/",
        scope:
          "Municipal and regional public information, mainly in Chinese. Use the appropriate county or venue authority for current visitor arrangements, road notices, individual heritage sites and local services. A regional reference does not establish access to a workshop, suitable walking conditions or a hotel's facilities.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Check the actual station and service for the selected overnight base. Lishui, Songyang and Jinyun-related arrivals can create different onward road journeys; compare the entire connection rather than choosing a train by region name alone.",
      },
    ],
    serviceScope:
      "A tailored regional proposal can specify the selected counties, named accommodation and rooms, exact gateways, road transfers, guiding and meals. Agree the actual visitor routes and any chargeable local transport. A boat ride, tea session, craft workshop, specialist interpreter or community encounter requires its own availability and inclusion. Private road service does not give unrestricted access to fields, homes, active workshops or protected landscapes. Share the subjects you value most and the amount of walking or driving you find comfortable before choosing the regional sequence.",
    routeAdvice:
      "Use Lishui as a framework for a considered southern Zhejiang route, often connected through Hangzhou when actual services work. Songyang merits its own guide and base when villages and architecture are the main purpose. Jingdezhen can provide a separate ceramic chapter for guests comparing Longquan celadon with another tradition, but it is a different destination requiring its own transport and nights. No matching published Lishui product is recommended here. Request a tailored proposal around one or two genuine regional priorities rather than a list of every county's highlights.",
    practicalPlanning: {
      timing:
        "Name the overnight base and the day's main subject before adding secondary stops. Count city traffic, mountain roads, parking, local visitor transport and walking as part of the day. Avoid turning a distant rural subject into a short stop before an onward train. A city arrival night can be practical, but moving hotels every morning is not automatically the best way to experience the region. Compare fewer bases with the full road burden visible.",
      walking:
        "Riverfront paths, mountain villages, terrace viewpoints and Xiandu routes have different surfaces, steps and exposure. Select the actual route for each day; a scenic-area name does not establish a gentle walk. For limited mobility, review vehicle access, toilets, resting points and the hotel approach separately. A boat, shuttle or cableway, where offered, has its own boarding or access demands and should not be assumed to solve every mobility issue.",
      cost: "Compare the same accommodation standard, occupancy, meals and guide language alongside actual driving days. Admission, internal venue transport, boats, workshops and specialist hosts can be separate. A distant day trip from the city may save a hotel move but add road hours; a rural overnight may improve the experience while requiring more careful meal and luggage planning. A premium should buy an identifiable improvement in room, interpretation, comfort or time rather than a claim to cover more county names.",
    },
    attractions: [
      "Urban Liandu as a city and regional services base",
      "Guyan Huaxiang / 古堰画乡, with river-village and historic-weir interests distinguished",
      "Songyang's selected mountain villages and rural architecture",
      "Yunhe rice terraces, matched to current crop and visitor conditions",
      "Jinyun Xiandu, including a selected route around the Dinghu Peak landscape",
      "Longquan celadon or sword-making interests with a confirmed venue and topic",
    ],
    stays: [
      {
        label: "2 nights: city and one nearby subject",
        advice:
          "Keep expectations focused: a useful arrival, a selected river or city interest and departure. This is not a complete rural Lishui itinerary. If the real priority is a mountain village or terrace landscape, compare whether both nights should instead be in that specific area.",
      },
      {
        label: "3 nights: one substantial regional chapter",
        advice:
          "Two full days can support a chosen countryside base with time for a second local subject. Select the gateway around that base rather than using the city automatically. A city-and-river stay is another option, but it should not be described as covering Songyang, Yunhe, Jinyun and Longquan.",
      },
      {
        label: "4–5 nights: two different interests with a sensible route",
        advice:
          "Combine, for example, an architectural village stay with a different landscape or craft chapter when transport and availability justify it. Give each base enough time and allow for weather. The best sequence depends on entry and exit points, road comfort and the actual hosts, not a fixed all-region circuit.",
      },
    ],
    hotelAreas: [
      {
        name: "Urban Liandu / Lishui city",
        advice:
          "Useful for services, a specific railway connection or a city arrival night. Check the actual station transfer, neighborhood and room quietness. A well-equipped city hotel may offer dependable comfort without the rural outlook. Do not choose it solely because the booking platform labels every regional attraction as being in Lishui.",
      },
      {
        name: "Guyan Huaxiang river-area properties",
        advice:
          "Consider for the river setting and a selected local route. Confirm which village and riverbank the property occupies, how the car reaches it and whether any boat or walking connection is actually needed. A water view, easy luggage access and quiet evening are separate features. Check meals, road or visitor noise and current river conditions.",
      },
      {
        name: "A base in the selected countryside chapter",
        advice:
          "For Songyang, Yunhe, Jinyun or Longquan interests, compare actual accommodation in the relevant place. A rural base can improve timing but needs a room-and-access review: stairs, climate control, bathroom, meals and the final road. These locations are not interchangeable hotel neighborhoods of Lishui city. Match the address to the specific route before assessing value.",
      },
    ],
    tradeoffs: [
      {
        title: "Guyan and Huaxiang are related, but not the same visit",
        advice:
          "The combined name Guyan Huaxiang links a historic-weir interest around Yantou with the painting-village and river atmosphere around Dagangtou. The Tongji Weir is not simply another name for an art street. Decide whether engineering history, village lanes, river views or a suitable boat outing is your priority. Check the actual arrival point and current visitor connections rather than assuming the whole area is one continuous easy walk.",
      },
      {
        title: "Rice terraces follow agriculture, not a guaranteed visual calendar",
        advice:
          "Yunhe's water, planting, green growth and harvest appearances depend on local agricultural work and weather. Choose an actual viewpoint and walking route, then check current conditions close to travel. An advertised sea of clouds is a weather possibility, not an included service. If photography is central, consider a suitable local overnight and a flexible time window rather than promising dawn after a long city transfer.",
      },
      {
        title: "Xiandu scenery needs a specific route and honest photography expectations",
        advice:
          "Jinyun's Xiandu landscape includes the distinctive Dinghu Peak setting, but views, walking and visitor arrangements vary by the chosen route. Explain what the group will actually see and how much walking is involved. Do not promise the exact people, animals, light or mist shown in a promotional photograph. Any arranged photographic scene must be identified and agreed, not presented as an accidental glimpse of everyday life.",
      },
      {
        title: "Longquan crafts need the right venue and subject",
        advice:
          "Celadon ceramics and sword making are different traditions requiring different interpretation. A museum, retail showroom, active workshop and hands-on class offer different access. If craft is the reason to travel, identify the host, language, process and opportunity to observe before committing a long transfer. Do not imply firing access, a master appointment, a commission or legal export of a purchased item without checking the actual arrangement.",
      },
      {
        title: "Choose cultural depth without turning communities into a performance",
        advice:
          "A Jingning-related interest in She culture can add another regional subject when an appropriate venue or consenting host is available. An administrative county label does not establish a household encounter, ceremony or guaranteed costume performance. Treat a museum, public event, commercial attraction and private conversation as different visits. Choose a specific, respectful topic with reliable interpretation rather than adding a generic minority-village stop to every itinerary.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yunhe",
        advice:
          "Use the Yunhe guide to compare the actual crop scene, town and terrace-area hotels, viewpoint access and any early start. Its agricultural landscape deserves a useful window and a suitable base; a Lishui city hotel is not automatically convenient for sunrise.",
      },
      {
        slug: "jinyun",
        advice:
          "Use the Jinyun guide for Xiandu rock scenery, named quarry spaces and a distinct village chapter. Compare Jinyun West or the actual alternative station with the full hotel journey. Quarry openings and specialist interpretation need their own confirmation.",
      },

      {
        slug: "longquan",
        advice:
          "Use Longquan's own guide for celadon, sword-making and kiln-history choices. A collection, retail showroom, working studio and class offer different access. Confirm the actual host and room, then compare the full journey rather than treating Longquan as another neighborhood of Lishui city.",
      },
      {
        slug: "songyang",
        advice:
          "Use the Songyang guide to choose actual villages, room access and a town or mountain base. Three or four nights there can form a meaningful chapter rather than a rushed day across several villages. A Lishui city hotel does not automatically offer convenient access to every Songyang subject.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, urban culture and a distinct Longjing tea interest. Compare the actual service to the gateway best suited to your rural base, including both terminal transfers. Keep a useful stay in each place rather than treating southern Zhejiang as a short extension to a lake walk.",
      },
      {
        slug: "jingdezhen",
        advice:
          "For a serious ceramics interest, Jingdezhen can provide a separate comparison with Longquan celadon through its own kilns, collections and contemporary studios. It is in Jiangxi, not another local Lishui stop. Confirm actual transport, nights and distinct hosts so the second craft chapter adds understanding rather than repeat shopping.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for a rural route, with rain and changing temperatures still possible. Summer brings heat, humidity and storm-related disruption to consider for roads and exposed walks. Winter depends more on good room heating and a considered mix of indoor interpretation and shorter outings. Yunhe's agricultural appearance, Songyang's mist and a particular river or mountain view follow real conditions rather than fixed promotional dates. Check the selected county and activity, not only a general Lishui forecast.",
    orientation:
      "The name Lishui can mean the urban center in Liandu or the wider prefecture-level area. Guyan Huaxiang, Songyang, Yunhe, Jinyun and Longquan sit in different places and may call for different bases. Yunhe's terraces are not in Lishui's city center, and Songyang's mountain villages are not a single old-town neighborhood. Use Chinese names and exact addresses when comparing rail gateways, hotels and driving days. This page is the regional decision layer; individual destinations still need their own deeper planning.",
    experiences: [
      "Read the Ou River landscape through a selected village, riverbank or historic-weir interest",
      "Choose one substantial countryside chapter for architecture, rice terraces, mountain scenery or craft",
      "Build a slower regional stay around named accommodation, meaningful interpretation and realistic roads",
    ],
    planningNotes: [
      "Distinguish urban Lishui from the wider prefecture before booking hotels or transport",
      "Choose one or two county-level interests, then check the actual base, road hours and walking",
      "Keep crop stages, photographic scenes, boats and craft hosts separate from guaranteed services",
    ],
    arrival:
      "Lishui railway station can serve the city, while other actual services may fit a selected county better. Compare the ticketed gateway, arrival time and final road journey to the property before booking. Jinyun West and other stations are not alternative names for Lishui station. An airport connection through Hangzhou or another city requires its own complete transfer assessment. Share the exact ticket and Chinese hotel address, and allow for luggage and the final rural approach.",
    gettingAround:
      "Plan a vehicle around each day's actual subject, with meal and pickup points agreed. A local boat, shuttle or other visitor transport has separate operating and boarding arrangements. County-to-county driving can be substantial even when attractions appear under the same regional label. Avoid returning to the city out of habit if a suitable rural overnight improves the route, but compare that benefit with another check-in and luggage move. Private transport helps with timing; it does not remove steps or establish exclusive site access.",
    stayStrategy:
      "Use urban Liandu for a genuine gateway or city purpose, and a selected rural base when it improves the main experience. Keep the number of bases proportionate to available nights. For a three-night visit, one strong chapter is usually more satisfying than a succession of distant highlights. For a longer stay, require each move to change the landscape or subject meaningfully. Check every property's real room, dinner, climate control and access rather than carrying a city-hotel expectation into a remote converted building.",
    firstTimerNote:
      "The most useful first decision is not which ten attractions to include, but which two experiences deserve your time. Architecture and village life point toward a different route from terrace photography or craft learning. Use that choice to place the nights, then choose gateways and smaller stops. A focused, well-explained route can reveal more of the region than a comprehensive-looking list dominated by driving.",
    faqs: [
      {
        question: "Is Lishui a city or a region?",
        answer:
          "Both uses occur. Lishui has an urban center in Liandu and a much wider prefecture-level area containing different counties and county-level cities. Songyang, Yunhe, Jinyun and Longquan are separate travel chapters, not adjacent city neighborhoods.",
      },
      {
        question: "How many nights do I need in the Lishui region?",
        answer:
          "Three nights can support one substantial rural focus with suitable connections. Four or five nights allow a second distinct chapter when transport works. A short city-and-river visit is another option, but it should not be described as covering all the region's villages, terraces and craft centers.",
      },
      {
        question: "Should I stay in Lishui city for Songyang or Yunhe?",
        answer:
          "Compare the full return driving with a suitable rural base. The city can be practical for services or an arrival night, while a local overnight may improve early or late landscape time. Choose by the actual route, room quality, meals and mobility needs rather than the regional name on a booking site.",
      },
      {
        question: "What is the difference between Guyan and Huaxiang?",
        answer:
          "The combined Guyan Huaxiang name links a historic-weir interest around Yantou with the painting-village and river setting around Dagangtou. Choose the actual subject and check the arrival point and current visitor connections. It is not simply one art street beside every river-area hotel.",
      },
      {
        question: "When are Yunhe rice terraces filled with water?",
        answer:
          "The appearance depends on local agricultural work, weather and the selected area. Confirm current conditions close to travel rather than relying on a fixed annual photograph. Water, planting, green growth and harvest create different visits; mist or a sea of clouds is never guaranteed.",
      },
      {
        question: "Is Jinyun Xiandu part of Lishui city sightseeing?",
        answer:
          "Jinyun is a separate county within the wider Lishui region. Xiandu needs its own gateway or road journey and an actual visitor route. It should not be treated as a spare stop in a short city walk or a guarantee of the exact scene shown in promotional photography.",
      },
      {
        question: "Can I visit a Longquan celadon or sword workshop?",
        answer:
          "A visit requires a suitable venue and confirmed host, topic, language and access. A museum, showroom, active workshop and class are different experiences. Do not infer production access, a master meeting or a hands-on session from a retail stop or the town's craft reputation.",
      },
      {
        question: "Can older travelers enjoy a Lishui countryside route?",
        answer:
          "Yes, when the actual hotel and outings fit their abilities. Review slopes, steps, toilets, rest points, vehicle access and any boat boarding individually. The region's scenic reputation does not establish that every village, terrace viewpoint or mountain route is an easy walk.",
      },
      {
        question: "Can I combine Lishui with Hangzhou?",
        answer:
          "Yes, when actual rail or road connections and available nights support both. Choose the Lishui-region gateway around your selected rural base, including both terminal transfers. Keep usable time in Hangzhou and the countryside rather than counting transport as sightseeing.",
      },
    ],
    culturalStory: {
      title: "Let each place keep its own story",
      paragraphs: [
        "The Lishui region is more than a collection of green scenery. A historic irrigation work, a mountain settlement, a tea landscape and a craft workshop ask different questions about how people live and work. At Guyan Huaxiang, for example, the river-village atmosphere and the Tongji Weir's engineering interest offer related but distinct perspectives. Good guiding makes the chosen subject understandable without turning every stop into the same account of timeless rural life.",
        "Songyang's architecture, Longquan's crafts and Jingning's She cultural interests should retain their own context. Choose what can be responsibly explained through an actual place or consenting host. A public village route is not a home visit, a workshop reputation is not an appointment and an administrative cultural identity is not a promise of performance. The depth comes from a clear topic and thoughtful interpretation, not from claiming exclusive access across an entire region.",
      ],
    },
    foodStory: {
      title: "Use meals and tea to connect the regional chapters",
      paragraphs: [
        "A route through southern Zhejiang can vary its meals by the chosen locality rather than repeat the same supposed countryside feast. Ask about seasonal vegetables, tofu, preserved ingredients and suitable meat or freshwater fish dishes, with preparation and portions explained. A simple meal in the right place can be more useful than another cross-county restaurant drive. Do not describe every ingredient as wild, organic or freshly harvested without evidence.",
        "Tea interests deserve the same precision: identify the tea, host and purpose of a tasting rather than assuming all Zhejiang tea experiences are interchangeable. A second session should add a distinct subject to any Hangzhou or Songyang visit. Confirm stocks, sauces and shared preparation for dietary needs, and agree dinner hours at rural properties. Good regional planning makes meals dependable while leaving room for genuine local differences.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen base rather than stopping by default",
        description:
          "Use the exact rail or airport connection and complete road transfer. Stay in the city when it serves the arrival, or continue to a suitable rural property when timing allows. Keep dinner and the final luggage approach clear; a late arrival is not an extra landscape day.",
      },
      {
        day: "Full day 1",
        title: "Give the first regional subject proper time",
        description:
          "Choose a river-and-village interest or the principal countryside chapter near the base. Agree walking, local transport and a seated meal. Do not combine several distant counties merely because the stops share a Lishui label.",
      },
      {
        day: "Full day 2",
        title: "Add depth, not another rushed county",
        description:
          "Explore a distinct local topic, a confirmed craft or tea encounter, or more of the selected landscape. Keep room for weather and the group's energy. A second rural base belongs in a longer plan when its subject and transfer justify moving.",
      },
      {
        day: "Departure",
        title: "Continue from the gateway that fits the route",
        description:
          "Allow the actual road journey and station or airport process. Four or five nights can add a second regional chapter with its own usable time. This three-night framework is illustrative, not a published product or a claim to cover every county and optional service.",
      },
    ],
  },
};
