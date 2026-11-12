import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/puzhehei.svg",
  alt: "Original Puzhehei planning schematic comparing seasonal lotus and lake visits, a separate Qinglongshan climb and village versus Qiubei hotel bases; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const puzheheiGuide: ExpandedDestination = {
  id: "puzhehei",
  name: "Puzhehei",
  region: "southwest",
  kicker: "Karst hills and water, with the season and the room chosen carefully",
  description:
    "Plan Puzhehei for lakes, karst hills and village time, with honest lotus-season advice, boat and viewpoint choices, hotel-area comparisons and a full Kunming connection.",
  stay: "2 nights for one full day; 3 for a slower landscape stay",
  bestFor: "Karst-and-water scenery, seasonal lotus interests and a quieter-paced Yunnan chapter",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["bamei", "kunming", "jianshui", "yuanyang", "xingyi", "guilin"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Puzhehei Travel Guide: Lotus Season, Boats & Where to Stay",
    seoTitle: "Puzhehei Guide: Lotus Season, Boats & Stays",
    seoDescription:
      "Plan Puzhehei in Yunnan: lotus season, boat-route choices, Qinglongshan walking and village hotels. Compare two or three nights and the full Kunming transfer.",
    answer:
      "Puzhehei in southeastern Yunnan suits travelers who enjoy lakes, rounded karst hills and a slower village stay. Two nights give one full day; three allow a lake outing, time at your property and a separately assessed Qinglongshan viewpoint walk. Summer lotus adds seasonal interest, with bloom varying by location and conditions. Choose the village and hotel before the transfer: Puzhehei railway station, the scenic villages and Qiubei town are different places.",
    stayAnswer:
      "Two nights give an arrival, one full day and a departure morning, a useful first stay when the full gateway journey fits. Three nights provide two full days for a slower pace, a specific photography interest or time at a particularly suitable property. One night can introduce the landscape with favorable arrival and departure hours, but can become a hurried transfer stop. A Kunming day excursion needs its complete station and local transfers counted; regular rail service alone does not make it a relaxing lake day.",
    hotelAnswer:
      "Compare a named room in the Puzhehei village area with one in Xianrendong or another identified scenic-area village; their views, lanes and pickup arrangements differ. Qiubei county town offers a different balance of conventional services and daily travel to the landscape. A station-area room serves a transit purpose. Check what the booked lake or hill view actually faces, bedroom noise, bathroom, heating or cooling, dampness, meals, steps and luggage access. Waterfront marketing does not establish a private shore, quiet sleep or boat departure outside the door.",
    sightseeingQuestion: "Is Puzhehei worth visiting outside lotus season?",
    sightseeingAnswer:
      "Yes when you want karst hills, water and a suitable village stay, and the actual season, access and property support that interest. Without lotus, the visit needs to stand on the landscape and pace rather than the expectation of summer flower photographs. If flowers are the main reason to travel, choose dates using current local observations and keep flexibility; no fixed calendar guarantees full bloom. Winter or a dry-looking landscape can produce a different stay, so compare current conditions with the image you have in mind before booking.",
    visitorResources: [
      {
        label: "Qiubei county government",
        href: "https://www.ynqb.gov.cn/",
        scope:
          "Reference entry point for county background and public notices, mainly in Chinese. Confirm current scenic-area routes, boat operation, public paths, viewpoint access and village arrangements through the responsible operator or host. This reference does not establish a bloom forecast, particular boat itinerary or open climb for your date.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Compare dated services to Puzhehei station and the exact Kunming departure station. Add the road journey to the actual village or room, boarding and luggage at both ends. A station bearing the destination name is not a lakeside hotel arrival.",
      },
    ],
    serviceScope:
      "A tailored Puzhehei proposal should name the village, property and room, gateway transfers, guiding, meals and selected public routes. For a boat outing, state the current operator, embarkation point, route or sector, shared or private basis, boarding arrangements and weather terms. A viewpoint climb needs a separate walking assessment. Village cultural conversations, household visits and food activities require willing hosts and agreed content. Public scenery does not establish access to private fields, a wetland interior or protected water, and no lotus bloom, clear sunrise or wildlife sighting is a service guarantee.",
    routeAdvice:
      "Treat Puzhehei as a southeastern Yunnan stay with its own useful days, rather than an extra stop on the northern Dali–Shaxi–Lijiang route. Send your dates, starting point, walking needs and priorities—lotus, lake scenery, a viewpoint or property time—for a tailored proposal. We can compare two or three nights and explain how the village and room affect the day. The final outline should identify transport, any lake activity and a workable wet-weather alternative.",
    practicalPlanning: {
      timing:
        "Choose one main landscape interest in each half-day and leave a proper lunch and time to enjoy the room. Match lotus or photography interests to current conditions rather than assume every stretch of water has flowers. A boat route and Qinglongshan climb have different operating and weather constraints; do not put both tightly against an onward train. Early light can add a cold or dark approach, while summer midday heat calls for shade and rest.",
      walking:
        "Village lanes, embankments and the final room approach can involve uneven or wet surfaces. A short waterside stroll is different from Qinglongshan's stepped ascent and descent. Ask for continuous walking, remaining steps, handrails, seats and a shorter alternative. Boat boarding adds its own gaps, balance and seating questions. A private vehicle cannot eliminate a viewpoint climb or make every boat accessible; choose the actual activity for the guest.",
      cost: "Compare the exact room and view, meal basis, full station transfers, guide time and the selected boat or scenic transport. Tickets may cover different sectors or activities; the proposal should name what is included rather than say all Puzhehei. A room with a view does not include private water access, a boat, photography transport or a cultural host. Confirm change terms when weather affects an activity, with purchases and optional outings identified separately.",
    },
    attractions: [
      "A selected lake-and-karst route in the Puzhehei / 普者黑 landscape",
      "Seasonal lotus through permitted visitor routes, with bloom checked near travel",
      "Puzhehei village or Xianrendong / 仙人洞 village as distinct base and walking choices",
      "Qinglongshan / 青龙山 viewpoint through a separately assessed open route",
      "A specified operating boat route with boarding and weather conditions understood",
      "A genuinely arranged village-cultural or food conversation, separate from a public walk",
    ],
    stays: [
      {
        label: "1 night / a selective introduction",
        advice:
          "Choose only when arrival and departure leave useful landscape time and the room meets your needs. Keep the main interest focused and count both station transfers. Late arrival, an early viewpoint climb and immediate departure can create more fatigue than enjoyment.",
      },
      {
        label: "2 nights / one full landscape day",
        advice:
          "Use the full day for a selected lake activity and village time, with a seated meal and rest. Add a viewpoint only when the route and conditions suit the group. Two nights can be enough without trying to visit every lake sector.",
      },
      {
        label: "3 nights / a slower stay or a defined second interest",
        advice:
          "Separate a climb or photography interest from the lake day, or enjoy a property that genuinely rewards the time. An extra morning provides flexibility rather than guaranteed bloom or clear weather. More nights need a good room and a reason to stay, not repeated similar boat circuits.",
      },
    ],
    hotelAreas: [
      {
        name: "A named Puzhehei village-area property / the actual landscape view",
        advice:
          "Check the precise room orientation and route to the water rather than rely on an aerial hotel photograph. Ask about road and restaurant noise, bathroom, dampness, climate control, breakfast, dinner and the final vehicle point. A scenic-area room is not automatically a quiet retreat.",
      },
      {
        name: "Xianrendong or another specified village / a different address and setting",
        advice:
          "Compare the property's actual room, meals and lane approach with the visits you want. Village listings can refer to different locations, with separate transfers to a boat pier or hill entrance. A courtyard or local-style facade does not prove historic fabric, private use or a host available on demand.",
      },
      {
        name: "Qiubei county town or a station-area hotel / a practical base",
        advice:
          "Qiubei can suit conventional services and meals, with road journeys to the selected scenery. A station-area room serves an actual rail connection and is another location. Compare the complete daily route before trading a village evening for one convenient departure.",
      },
    ],
    tradeoffs: [
      {
        title: "Lotus season is a planning window, not a booking guarantee",
        advice:
          "Summer is the usual lotus-interest period, with timing and appearance varying across water bodies and years. Ask which current visitor route has the flowers you want and whether the viewing is from shore or boat. Earlier and later phases look different; a wide green field may have fewer open flowers than a promotional photograph suggests. Keep a worthwhile lake-and-village plan even if the bloom does not match expectations.",
      },
      {
        title: "A boat ticket should describe the experience, not just the destination",
        advice:
          "Different sectors and craft can produce different pace, seating, exposure and activity. Ask where you board and finish, what route operates, whether you share, what flotation equipment is provided and how cancellation works. Some summer outings can involve splashing and lively groups; confirm whether that is part of the chosen experience before promising a quiet glide. A private guide does not make a shared public boat private.",
      },
      {
        title: "Qinglongshan's view requires an ascent and a way down",
        advice:
          "Choose the viewpoint because the wider hill-and-water perspective appeals, then assess the actual open route, remaining climb, footing and descent. Sunrise adds darkness and an earlier start; it does not remove cloud or guarantee color. Wet steps, exposure and the guest's knees or balance can make a waterside alternative more sensible. Do not describe the climb as a flat photo stop.",
      },
      {
        title: "Village life is not a scheduled cultural performance",
        advice:
          "Learn which community and current local history belong to the place being visited, rather than describe all Yunnan villages as one culture. Public streets do not include households, courtyards, ceremonies or farm work. A hosted conversation or food session needs a willing person, appropriate interpretation and agreed terms. Traditional-style visitor buildings should not automatically be called untouched heritage.",
      },
      {
        title: "Puzhehei and the northern Yunnan route serve different trips",
        advice:
          "Puzhehei lies in southeastern Yunnan, while Dali, Shaxi, Lijiang and Shangri-La form a different regional sequence. A rail connection through Kunming does not make the lake stay a free stop on that northern itinerary. Compare the complete transport and useful nights before adding it; a shorter, coherent route can give more enjoyment than collecting landscapes across the province.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "bamei",
        advice:
          "Bamei in Guangnan adds a cave-and-river approach and enclosed village valley to Puzhehei’s open lakes. Compare a day visit with a named village room, and assess the complete road or rail journey including both station transfers. Seasonal lotus and Bamei access require separate checks.",
      },
      {
        slug: "kunming",
        advice:
          "Kunming can provide a useful gateway and a separate city-food or collection chapter. Compare dated trains and the actual departure station against your city hotel, then include the final Puzhehei station-to-room road. A late gateway arrival is not a full Kunming day or a relaxed lake arrival.",
      },
      {
        slug: "jianshui",
        advice:
          "Jianshui adds architecture, courtyard history and a separately arranged purple-pottery interest. It offers a different subject from the lakes, but the connection needs its own full road or rail plan and usable nights. Do not infer an easy direct train or compact day circuit from both places being south of Kunming.",
      },
      {
        slug: "yuanyang",
        advice:
          "Yuanyang adds a different agricultural landscape, terrace seasons and village context. Its roads, viewpoints and sleeping base need a separate plan; lotus timing and the desired terrace appearance do not necessarily coincide. Choose the seasonal priorities before combining the two into a longer southeastern Yunnan trip.",
      },
      {
        slug: "xingyi",
        advice:
          "Xingyi in Guizhou offers Wanfenglin countryside and a separate Maling River Gorge decision. This is a cross-regional landscape comparison, not a nearby boat-to-boat connection. Compare the complete transport, nights and distinct experiences before extending beyond Yunnan.",
      },
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo offer another karst-and-river trip with a different transport network and range of stays. Compare the kind of water activity, village time, walking and room you want rather than describe Puzhehei as an interchangeable smaller Guilin. A thematic comparison does not establish a short direct transfer.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Summer is the principal lotus-interest season, but rain, heat, water and the exact growth stage affect the visit. Check current observations close to travel rather than treat one month as guaranteed peak bloom. Spring and autumn can suit landscape and village time with a different appearance. Winter may offer cooler, quieter-feeling conditions at some times but also colder rooms and a different waterside scene. Holiday crowds and weather remain variable. Choose for the actual season and the room, not a single promotional flower photograph.",
    orientation:
      "Puzhehei is a scenic lake-and-karst region in Qiubei County, Wenshan Zhuang and Miao Autonomous Prefecture, Yunnan. The county town, railway station, Puzhehei village, Xianrendong village, boat embarkation points and Qinglongshan are distinct places. This guide covers selected public visitor routes and a base decision, not every lake, cave, village, household, trail or provider in the region. Individual scenic names and permits do not automatically grant access to private land or protected water.",
    experiences: [
      "Enjoy a selected karst-and-water route suited to the actual season",
      "Choose lotus viewing, a boat outing or a Qinglongshan perspective for distinct reasons",
      "Spend useful time in a suitable village property with meals and transport settled",
    ],
    planningNotes: [
      "Choose the season for the landscape you want, keeping bloom and weather expectations realistic",
      "Specify the boat sector, atmosphere and boarding rather than buy a vague lake package",
      "Compare village rooms, Qiubei and the complete station connection before booking",
    ],
    arrival:
      "Compare dated services to Puzhehei railway station using the exact Kunming departure station and room-to-station approach. Continue by the actual road transfer to the chosen village or property; the station name does not put you at a boat pier. Include boarding, luggage and meal timing. For Jianshui or Yuanyang, compare the whole onward route instead of assuming a convenient direct rail link. A late arrival needs dinner and room access settled before another outing is promised.",
    gettingAround:
      "Use a defined local road plan to connect the room, selected village walk, boat pier and hill entrance. Scenic-area transport and public visitor rules can affect where a private car stops, so confirm the last walking section. Walking, cycling and boating are different activities; a picturesque lane does not establish safe bike conditions or public water access. Agree surfaces, shade, toilets, seats and a shorter option, with a weather alternative that is actually feasible.",
    stayStrategy:
      "For two or three nights, one well-chosen property can be simpler than moving between similar scenic villages. Compare the actual view, sleep, bathroom, climate control, dinner and luggage approach. A modern room with a useful position may suit some guests better than an atmospheric-looking property with weak heating or noisy neighbors. Qiubei and station-oriented rooms solve different practical needs. Let the proposed day routes and the time you will spend at the property determine the choice.",
    firstTimerNote:
      "Start with the landscape you want to enjoy: lotus, a boat-level view of hills, a wider viewpoint or a comfortable village stay. Choose one or two interests well instead of buying every available sector. A full lake day can be rewarding without a dawn climb, compulsory splashing or a staged household visit. The best plan is the one whose season, activities and room actually match the guest.",
    faqs: [
      {
        question: "Is Puzhehei worth visiting?",
        answer:
          "Choose Puzhehei for karst hills, lakes and a suitable village stay, with lotus as a seasonal extra. Two nights give one full day when the gateway journey fits. It is most rewarding when the actual water activity, walking and room match your interests rather than a fixed photograph.",
      },
      {
        question: "When is lotus season in Puzhehei?",
        answer:
          "Summer is the usual lotus-interest period, but bloom varies by year, weather, water body and stage of growth. Check current local observations and the actual viewing route close to travel. No fixed date guarantees full flowers, clear skies or the appearance of a promotional photograph.",
      },
      {
        question: "Is Puzhehei worth visiting outside lotus season?",
        answer:
          "Yes if the hills, water, village setting and chosen property appeal in their current seasonal appearance. If flowers are the main purpose, reconsider dates or expectations. Outside summer, plan around the landscape itself, current visitor access, temperature and reliable meals rather than promise a lotus experience.",
      },
      {
        question: "How many nights should I spend in Puzhehei?",
        answer:
          "Two nights provide one full day, a useful introduction. Three nights leave a second full day for a separate viewpoint, slower pace or a valued property. One night needs useful arrival and departure hours; extra nights add flexibility, not guaranteed bloom or clear sunrise.",
      },
      {
        question: "Where should I stay in Puzhehei?",
        answer:
          "Compare the exact Puzhehei village-area room with Xianrendong or another named village property. Qiubei county town and station-area rooms serve different practical needs. Check the booked view, meals, noise, dampness, heating or cooling, steps and the final vehicle approach.",
      },
      {
        question: "How do I get from Kunming to Puzhehei?",
        answer:
          "Compare dated rail services to Puzhehei station and the exact Kunming departure station. Include transfers from your Kunming room and onward to the chosen village hotel, plus boarding and luggage. The train sector alone does not describe the complete journey or a relaxed day trip.",
      },
      {
        question: "Are all Puzhehei boat trips quiet and private?",
        answer:
          "No. Routes, craft, sharing and atmosphere differ, and some summer activities can involve splashing. Confirm the actual operator, sector, boarding, seating, flotation equipment and weather terms. Private guiding does not make a public boat private or establish that every advertised sector operates.",
      },
      {
        question: "Is Qinglongshan an easy viewpoint?",
        answer:
          "It requires a separately assessed ascent and descent, with steps and footing depending on the actual open route. Rain, darkness and balance or knee concerns can change suitability. Ask for remaining climb, rest points and a shorter alternative instead of treating it as a flat roadside photo stop.",
      },
      {
        question: "Can I combine Puzhehei with Jianshui and Yuanyang?",
        answer:
          "A longer southeastern Yunnan plan can be discussed when the full connections, useful nights and seasonal priorities fit. Jianshui's architecture and Yuanyang's terraces add different subjects. Do not assume an easy direct train or that peak lotus and the desired terrace appearance happen at the same time.",
      },
      {
        question: "Does the existing northern Yunnan tour include Puzhehei?",
        answer:
          "No. The published Dali–Shaxi–Lijiang–Shangri-La journey is a different regional route. Puzhehei needs a separately planned extension with its own gateway, room, local transport and activities. The outline here is a planning example, not a newly published package.",
      },
    ],
    culturalStory: {
      title: "A landscape of water also has people and working boundaries",
      paragraphs: [
        "The appeal of Puzhehei comes from the relationship between hills, water, vegetation and settlement. A useful guide can explain how the chosen route connects those elements rather than describe each hill as an isolated photo stop. What is visible changes with season and water conditions. A village walk should acknowledge current buildings, commercial activity and ordinary routines, without calling every waterside property an untouched traditional home.",
        "Cultural depth depends on knowing which community and local history belong to the place being visited. Do not copy the same ethnic description from another Yunnan destination or expect residents to provide a performance. Ask before close photographs and keep farms, homes, ceremonies and protected shoreline outside a public walk unless appropriate access has been agreed. A genuinely arranged conversation can add value, but the landscape remains worthwhile without an invented private encounter.",
      ],
    },
    foodStory: {
      title: "Take the meal as seriously as the view",
      paragraphs: [
        "Plan a seated lunch away from the pressure to board the next boat or climb before a train. Ask the chosen kitchen what it prepares well and choose suitable vegetables, a staple and protein in manageable portions. Fish can be an interest for guests who enjoy it, with bones, source and preparation discussed; a lakeside address does not prove a fish was caught locally or that every kitchen specializes in it. Lotus in the landscape does not mean every lotus-themed dish is available or locally sourced.",
        "For a village stay, establish dinner, breakfast and any advance ordering before arrival. Check meat stocks, fish, soy, wheat, pork and shared preparation as relevant, and keep unfamiliar snacks optional. A hosted kitchen visit or cooking activity needs a willing provider and defined content. Good meals, a dry comfortable seat and reliable service can be more valuable than a staged banquet or a long list of compulsory tastings between scenic stops.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first evening",
        title: "Reach the actual room and understand the setting",
        description:
          "Complete the station or road transfer and settle luggage. Use a short permitted public walk when daylight and weather fit, then enjoy a confirmed dinner. Review current water, flower and route conditions before choosing the next day's priority.",
      },
      {
        day: "Full day / principal landscape interest",
        title: "Choose one clear lake experience",
        description:
          "Take the specified operating boat sector or a suitable shore route, with the expected atmosphere and boarding understood. View lotus only where the actual season and permitted route support it. Leave enough time to look, ask questions and return for a proper meal.",
      },
      {
        day: "Full day / a different perspective or rest",
        title: "Assess the climb rather than assume it",
        description:
          "Choose a suitable Qinglongshan route when access, weather and walking ability fit, or retain a gentler village and waterside plan. With a third night, separate this interest onto another day and enjoy more property time. Sunrise and clear views remain weather-dependent.",
      },
      {
        day: "Departure / onward southeastern Yunnan",
        title: "Keep the complete connection visible",
        description:
          "Leave with the full station transfer and boarding counted, or continue on a separately assessed Jianshui or Yuanyang sequence. The final tailored proposal should name the village, room, selected lake activity, any climb, transport, meals and weather alternatives, without implying a new published product.",
      },
    ],
  },
};
