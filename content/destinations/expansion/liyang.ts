import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/liyang.svg",
  alt: "Liyang planning schematic comparing Tianmu Lake, Nanshan Bamboo Sea and a countryside hotel stay; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const liyangGuide: ExpandedDestination = {
  id: "liyang",
  name: "Liyang",
  region: "east",
  kicker: "A lake, a bamboo landscape and a better reason to slow down",
  description:
    "Choose a Liyang countryside stay around Tianmu Lake or Nanshan Bamboo Sea, with hotel location, walking, meals and the complete railway transfer made clear.",
  stay: "2–3 nights for a countryside break",
  bestFor: "Lake stays, bamboo scenery and slower Jiangnan itineraries",
  interests: ["landscape", "food", "heritage"],
  relatedDestinationIds: ["changzhou", "yixing", "nanjing", "anji"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Liyang Travel Guide: Tianmu Lake, Bamboo & Where to Stay",
    seoTitle: "Liyang Travel Guide: Tianmu Lake, Bamboo & Stays",
    seoDescription:
      "Compare Tianmu Lake and Nanshan Bamboo Sea for a Liyang stay: hotel bases, walking, hot-spring questions, railway transfers and a useful 2–3-night plan.",
    answer:
      "Liyang (溧阳) is a county-level city within Changzhou in Jiangsu, with countryside travel focused on Tianmu Lake, Nanshan Bamboo Sea and individual rural properties. These are separate locations and choices, not one walkable resort. Liyang works best when you want a comfortable break from larger cities and have selected a hotel and one or two worthwhile outings. It is less compelling as a rushed checklist of scenic-area entrances. Choose the setting, room and pace before deciding how many attractions the stay needs.",
    stayAnswer:
      "Two nights provide one full day for a selected lake or bamboo outing with time at the property. Three nights allow two distinct interests or a slower day without another hotel move. One night can work for a short regional break, but the transfer may consume much of the usable stay. A day trip is possible only when the complete journey and a focused visit make sense. Do not equate a short rail segment with a full day beside the lake.",
    hotelAnswer:
      "Choose a Tianmu Lake-area property for a lake-focused stay, checking the actual shoreline access and view from the quoted room. Choose the Nanshan area when bamboo scenery or a specific hot-spring property is the main interest. A rural design hotel can be the destination itself, while a city hotel serves different dining and transport priorities. Review dinner, heating or cooling, room-to-restaurant access and wet-weather options. A Liyang address, lake-view label or hot-spring marketing phrase does not establish the complete experience.",
    sightseeingQuestion: "Is Tianmu Lake or Nanshan Bamboo Sea better for your Liyang stay?",
    sightseeingAnswer:
      "Choose Tianmu Lake when a lake setting, a selected shore or boat visit and time at the hotel are the priorities. Choose Nanshan Bamboo Sea for a managed bamboo-landscape outing with the route and internal transport suited to your walking ability. A hot-spring visit is a separate service to confirm, even when nearby. With three nights, you can consider both areas if they offer different value. With two nights, a stronger hotel and one well-planned outing can be more rewarding than spending the full day between entrances.",
    visitorResources: [
      {
        label: "Liyang municipal government",
        href: "https://www.liyang.gov.cn/",
        scope:
          "Municipal context and public notices, mainly in Chinese. Confirm current Tianmu Lake and Nanshan admissions, boat operations, internal transport and property services with their responsible operators. A destination reference does not guarantee a pool, private trail, hotel room or all-inclusive ticket.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference for the named station and dated service. Liyang station and Wawushan station are different gateways. Neither should be selected without the actual property address and final transfer. A Changzhou arrival requires a separate local transport assessment.",
      },
    ],
    serviceScope:
      "A tailored proposal can identify the exact property and room, station transfers, selected scenic visit, guiding, meals and any separately confirmed boat or bathing service. Ask which tickets and internal transport are included, and what remains optional. A hotel booking does not automatically include every pool, spa treatment, scenic-area entry or dinner. Private transport improves the connection between places but does not grant private access to a lake, trail or bamboo landscape. State whether your priority is walking, photography, family time or quiet hotel time before comparing the arrangements.",
    routeAdvice:
      "Liyang can provide a countryside chapter after Nanjing or another Jiangnan city. Yixing adds a distinct pottery subject; Anji is an alternative bamboo-and-countryside stay in Zhejiang rather than a necessary extra stop. There is no matching published Liyang itinerary recommended here. Use the illustrative two-night plan with an optional third night to request a property-led break. A useful proposal should show what the hotel contributes, why the selected outing suits you and the full onward connection.",
    practicalPlanning: {
      timing:
        "Choose the main outing and leave usable time at the property. Check the current boat or internal transport arrangements before fixing a scenic-area sequence. A late checkout, pool session or lunch can require its own booking and should not be assumed. On a short break, one good landscape day and a quiet evening can be enough. Avoid adding an early distant start immediately after a late arrival just to include both lake and bamboo areas.",
      walking:
        "Distinguish hotel grounds, shore paths, boat boarding and the route inside Nanshan Bamboo Sea. Steps, slopes, queues and standing can remain even when a shuttle or cableway is available. Confirm which current transport serves which section, along with closures and a shorter option. A ground-floor room is not enough if breakfast or bathing facilities require stairs. Describe mobility needs and comfortable outdoor duration before selecting the property and scenic route.",
      cost: "Compare the actual room, meal plan, full station transfers, admissions and internal transport. Boat rides, cableways, tourist transport, bathing entry, treatments and a private soaking facility may have separate fees or conditions. Check age or height rules directly where relevant. A scenic-area package is only useful if its included sections suit the group. For a premium stay, pay for a demonstrable room, setting, dining or service benefit rather than an unverified list of complimentary experiences.",
    },
    attractions: [
      "Tianmu Lake / Tianmuhu, with a selected visitor route and current boat arrangements",
      "Nanshan Bamboo Sea / Nanshan Zhuhai as a separate managed landscape visit",
      "A named hot-spring property or bathing facility with access and inclusions confirmed",
      "A countryside hotel chosen for its setting, room and real activities",
      "A local tea subject with a confirmed host rather than an assumed harvest visit",
      "A selected countryside drive or walk, not an attempt to cover every section of the No. 1 tourist road",
    ],
    stays: [
      {
        label: "1 night: a focused short break",
        advice:
          "Use one property and one main interest when arrival and departure leave useful time. A late arrival followed by an early train is mainly a sleep stop, not a countryside retreat. Confirm dinner and the final transfer rather than assuming a rural hotel has flexible late service.",
      },
      {
        label: "2 nights: one outing and real hotel time",
        advice:
          "Choose a lake or bamboo day, then keep the rest of the stay comfortable. This can be a good format between city chapters when the property offers something you actually want to use. A better room, an unrushed meal and a suitable walk may add more than a second distant entrance.",
      },
      {
        label: "3 nights: two distinct interests or a slower day",
        advice:
          "Consider the other landscape area, a confirmed tea visit or a quieter property day. Check the complete road pattern before combining them. There is no requirement to fill the extra day with attractions, but the hotel's dining and indoor options should support a more relaxed stay.",
      },
    ],
    hotelAreas: [
      {
        name: "Tianmu Lake area / lake-led stay",
        advice:
          "Check the exact shore, view from the quoted room and access to a usable walk. Some properties with a lake-area address may not provide direct waterside access. Compare dining, pickup, boat-visit logistics and the room's noise. A view, balcony and private shoreline are different features and should be described separately.",
      },
      {
        name: "Nanshan area / bamboo and a specific bathing property",
        advice:
          "Consider when the bamboo outing or a named hot-spring facility is the main purpose. Establish the distance from hotel to entrance, available dinner and whether bathing entry is included for the booked room. Pool opening, private facilities, child access and treatments require their own confirmation. The area's name is not a guarantee that every hotel supplies the same experience.",
      },
      {
        name: "A rural design property / the stay as the main event",
        advice:
          "Ask what you can actually do without a long drive: a walk, a good meal, a usable pool or a confirmed activity. Review wet-weather alternatives, room-to-restaurant access and transport for outside dining. Architecture and attractive photographs do not establish quiet rooms, strong service or extensive English-language activities.",
      },
      {
        name: "Liyang city / practical urban base",
        advice:
          "Useful when independent dining, urban convenience or a particular transport plan matters more than a retreat setting. Show the journey to each selected countryside visit. A city hotel can be a sensible choice, but should not be described as a lakeside resort simply because it is within the same municipality.",
      },
    ],
    tradeoffs: [
      {
        title: "Tianmu Lake, Nanshan Bamboo Sea and the hotel are three decisions",
        advice:
          "The lake area, bamboo scenic area and individual properties have different entrances, activities and operating arrangements. Choose which setting you want to live in for the stay, then select an outing. A hotel package may cover one activity but not the transport or another scenic area. Putting every name in a proposal does not mean they form an easy, walkable resort circuit.",
      },
      {
        title: "Nanshan is a managed attraction, not a guaranteed solitary forest walk",
        advice:
          "Bamboo scenery can be rewarding without being wilderness. Visitor infrastructure, transport, popular viewpoints and busy periods shape the experience. Review the actual route and optional sections rather than promising empty trails or effortless access. A quieter property-side walk is another possibility only when the route is genuinely usable and its access has been established. Do not assume a scenic-area ticket grants access to surrounding private land.",
      },
      {
        title: "Hot-spring access needs a precise description",
        advice:
          "A hotel room, communal bathing ticket, in-room tub and private soaking facility are different things. Ask about the booked category, operating hours, water provision, clothing and shared-space rules, age restrictions and what the fee covers. Seasonal operation and maintenance can affect availability. Avoid medical or therapeutic promises. Anyone with a relevant medical concern should seek individual advice rather than relying on the property's wellness language.",
      },
      {
        title: "A lake visit is not necessarily a beach holiday",
        advice:
          "A lake-view room, a visitor boat and an accessible shore walk offer different experiences. Do not assume swimming, kayaking, fishing or uninterrupted shoreline access is permitted. Confirm each activity with its responsible operator and keep a useful alternative for weather or suspension. The visit should remain worthwhile without relying on a boat departure that has not been checked for your dates.",
      },
      {
        title: "Compare Liyang with Anji instead of collecting similar stops",
        advice:
          "Both can provide bamboo scenery and countryside properties, but their locations, hotel choices, tea subjects and onward routes differ. Select the property and activity that best serve the overall trip. Include both only when each contributes something distinct. Yixing's pottery can offer a clearer contrast than a second similar bamboo outing, provided its host and the complete transfer make sense.",
      },
      {
        title: "The countryside road is a route-planning tool, not an attraction count",
        advice:
          "Liyang's No. 1 tourist road connects a wider countryside landscape. It should not be sold as one short scenic drive covering every section. Choose the useful segment for a meal, viewpoint or actual visit, allowing for traffic and safe stopping. A colored road marking or a photograph from another season does not establish that the full journey is worthwhile on the day.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "changzhou",
        advice:
          "Changzhou city adds Qingguo Lane, Tianning Temple and regional food as a cultural contrast to the lake-and-bamboo countryside. Choose a city visit or night for those interests and compare the complete gateway sequence. A Dinosaur Park day is a different family decision, not an automatic part of a Liyang stay.",
      },
      {
        slug: "yixing",
        advice:
          "Yixing adds zisha pottery and Dingshu's craft setting, a different reason to travel from a lake-and-hotel break. Keep a confirmed collection or studio subject and the full transfer visible. Do not promise a pottery class simply because the two cities are relatively near each other.",
      },
      {
        slug: "nanjing",
        advice:
          "Nanjing provides capital history, museums and a selected city-wall or Purple Mountain route before a quieter countryside stay. Compare the actual stations and hotel transfers. A change of pace works best when Liyang has enough usable nights rather than serving as another hurried stop.",
      },
      {
        slug: "anji",
        advice:
          "Anji is an alternative Zhejiang countryside chapter with bamboo and a distinct green-tea subject. Compare named properties, activities and the full onward route. Including both destinations requires different experiences; there is no need to repeat a similar scenic-area day to make the trip feel comprehensive.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit countryside time and selected walks, with rain and busy holiday dates still possible. Summer requires heat-aware planning and a usable indoor or shaded alternative; do not assume a hotel pool operates or a lake allows swimming. Winter can suit a property-led break if room heating, dining and any bathing service are confirmed. Tea harvesting, bamboo-shoot season and particular views depend on current conditions. Choose the stay for its underlying appeal rather than a guaranteed seasonal photograph.",
    orientation:
      "Liyang lies within Changzhou's wider administrative area in Jiangsu. Liyang city, Tianmu Lake and Nanshan Bamboo Sea are different bases and visits. Tianmu Lake is also written Tianmuhu; it should not be confused with Tianmu Mountain in Zhejiang. Nanshan Zhuhai means Nanshan Bamboo Sea here, not the city of Zhuhai in Guangdong. Use full Chinese addresses to distinguish a scenic entrance, a resort district and a specific hotel.",
    experiences: [
      "Choose a lake-focused outing with a usable shore route or a currently operating boat visit",
      "Explore Nanshan's bamboo landscape through a route matched to the group's walking ability",
      "Spend worthwhile time at a carefully chosen property, with meals and any bathing service specified",
    ],
    planningNotes: [
      "Compare Tianmu Lake, Nanshan and city hotel locations before booking the room",
      "Confirm scenic admission, internal transport, boats and hot-spring access as separate inclusions",
      "Choose Liyang or another bamboo destination by the actual stay rather than repeating similar attractions",
    ],
    arrival:
      "Check Liyang station and Wawushan station against the actual property and service before booking. A geographically closer station is useful only if the dated train and onward transfer fit. Arriving through Changzhou or a more distant airport creates another local journey. Include luggage, pickup, dinner and the final approach to a rural hotel. Keep the first evening flexible and do not make the essential boat trip or scenic-area entry depend on an uncertain arrival connection.",
    gettingAround:
      "Plan road transfers between the station, property and selected landscape areas. A private vehicle can simplify separate addresses but does not replace scenic-area transport or walking. Establish where pickup is possible and whether the driver remains available. Resort grounds, public roads and attraction routes have different access. For independent hotel time, agree how dinner or a later return will work rather than assuming on-demand transport is equally convenient at every rural property.",
    stayStrategy:
      "Choose one base for a short break and give it enough time. Compare the quoted room, view, noise, climate control, bathroom and meal arrangements before resort branding. For families, check room occupancy, bedding and access rules for pools or bathing; for a quieter couple's stay, establish the actual room setting rather than promising an adults-only atmosphere. A third night should deepen the stay through a different subject or better rest, not require an unnecessary property move.",
    firstTimerNote:
      "Liyang is a choice about the quality of the pause. It does not need to compete with China's major historical cities on the number of famous sights. A comfortable property, a well-chosen walk and a good meal can justify the stay when the overall itinerary has become busy. If you want dense museums, active nightlife or a series of rare cultural appointments, another destination may be a better use of limited days.",
    faqs: [
      {
        question: "Is Liyang worth visiting on a first trip to China?",
        answer:
          "It can be when you want a countryside pause and a specific hotel or landscape appeals. It is less essential for a short trip focused on major historical sights. Choose the stay for its setting, room and selected outings rather than adding it solely to increase the destination count.",
      },
      {
        question: "How many nights should I spend in Liyang?",
        answer:
          "Two nights allow one full day and useful hotel time. Three nights allow two distinct interests or a slower day. One night works only when the complete transfer leaves enough usable time. A short train segment alone does not establish the value of a one-night countryside stay.",
      },
      {
        question: "Should I stay near Tianmu Lake or Nanshan Bamboo Sea?",
        answer:
          "Choose Tianmu Lake for a lake-led stay and Nanshan for a bamboo outing or a particular nearby bathing property. Compare exact room, dinner, access and transfers. They are separate locations, and a hotel in one area does not automatically include activities in the other.",
      },
      {
        question: "Is Tianmu Lake the same place as Tianmu Mountain?",
        answer:
          "No. This guide concerns Tianmu Lake, or Tianmuhu, in Liyang, Jiangsu. Tianmu Mountain is a different destination in Zhejiang. Use the full destination and Chinese property address when booking transport or accommodation rather than the shared Tianmu name alone.",
      },
      {
        question: "Is Nanshan Bamboo Sea suitable if I cannot walk far?",
        answer:
          "It depends on the selected route, current internal transport and your stair tolerance. A managed attraction can still require walking, standing and steps. Confirm entrances, transport sections, toilets, seating and a shorter alternative before booking; a vehicle to the gate is not proof of access throughout.",
      },
      {
        question: "Does a Liyang hot-spring hotel include private bathing?",
        answer:
          "Not automatically. A room, shared bathing ticket, in-room tub and private soaking facility have different terms. Confirm the booked category, operation, water provision, access rules and charges. Do not infer a private hot-spring experience from the hotel's general name or a photograph of another room.",
      },
      {
        question: "Can I swim or take a boat on Tianmu Lake?",
        answer:
          "Treat each activity separately. A lake stay does not establish permission to swim, and boat routes depend on the responsible operator and current conditions. Confirm a specific service and an alternative for suspension rather than assuming unrestricted lake access.",
      },
      {
        question: "Should I choose Liyang or Anji?",
        answer:
          "Compare the actual properties, selected landscape activities, tea interests and onward route. Liyang offers a lake-and-bamboo combination; Anji has its own countryside and green-tea choices. Both can work, but including both needs distinct purposes rather than two similar bamboo scenic-area days.",
      },
      {
        question: "Can I combine Liyang with a Yixing pottery visit?",
        answer:
          "Yes, when the full transfer and an actual collection or confirmed host leave useful time. Yixing's pottery is a different subject from Liyang's lake and bamboo stay. A two-base route needs enough nights; otherwise choose a focused excursion or the destination that best matches your interests.",
      },
    ],
    culturalStory: {
      title: "Read the countryside through the choices that shape the stay",
      paragraphs: [
        "Liyang's appeal is partly about how a working countryside becomes a place to visit: tea and bamboo landscapes, villages, roads, managed scenic areas and contemporary hotels coexist. The useful question is what each setting actually offers. A lake visitor route and a village walk provide different views of the region; a designed retreat offers another. None needs to be described as untouched to be interesting, and contemporary hospitality should not be mistaken for an unchanged historic village.",
        "A genuine tea or craft encounter needs a person, a topic and a clear arrangement. Passing a field or stopping at a shop does not automatically provide access to production or a family home. Select a public route or confirmed host and respect the limits of working and residential spaces. Good interpretation can explain how the landscape is used today without turning residents into an attraction or promising that every rural scene comes with private access.",
      ],
    },
    foodStory: {
      title: "A fish-head casserole is a shared meal, not a mandatory tasting",
      paragraphs: [
        "Tianmu Lake's fish-head casserole is a recognizable regional food subject, but a large shared dish may not suit every party. Ask about the fish, portion or weight basis, stock, total price and other dishes before ordering. Bones and serving style matter for children and anyone who prefers easier eating. A thoughtful table can include suitable vegetables, tofu and other cooked dishes rather than treating one famous specialty as the measure of an authentic meal.",
        "Bamboo shoots and local tea can add context when in season and properly explained. Clarify meat or fish stocks, sauces, allergies and shared preparation; a vegetable name does not establish a vegetarian dish. At a secluded property, confirm dinner times, menu flexibility and what happens after a late arrival. The best meal arrangement is one that fits appetite, dietary needs and the day's route, with enough time to enjoy it.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the property and use the setting",
        description:
          "Transfer from the named station and settle into the booked room. Take a short suitable walk or simply enjoy the property if timing and weather allow. Confirm dinner in advance rather than placing an essential activity immediately after the train.",
      },
      {
        day: "Full day",
        title: "Choose the lake or the bamboo landscape",
        description:
          "Use the main outing for Tianmu Lake or Nanshan Bamboo Sea with the actual walking and visitor transport agreed. Keep a seated meal and enough time back at the property. A bathing session is a separately confirmed option, not an automatic extra attached to the bamboo ticket.",
      },
      {
        day: "Optional second full day",
        title: "Add a different interest or a quieter day",
        description:
          "With a third night, choose the other landscape area, a confirmed tea subject or a property day that the facilities genuinely support. Avoid repeating a similar bamboo visit in Yixing or Anji just to fill the schedule. Keep an indoor alternative for rain or suspended boat operations.",
      },
      {
        day: "Departure",
        title: "Continue with the complete transfer allowed",
        description:
          "Leave time for breakfast, checkout and the correct station, or continue to a separately planned Yixing pottery chapter. Nanjing provides a different city-and-history contrast. This two-night outline with an optional third night is illustrative, not a published package or guarantee of boat, pool or private bathing access.",
      },
    ],
  },
};
