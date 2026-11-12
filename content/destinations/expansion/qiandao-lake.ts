import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qiandao-lake.svg",
  alt: "Original Qiandao Lake planning schematic comparing a lake hotel, a selected island cruise and the complete station transfer; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const qiandaoLakeGuide: ExpandedDestination = {
  id: "qiandao-lake",
  name: "Qiandao Lake",
  region: "east",
  kicker: "Choose a lakeside stay worth slowing down for",
  description:
    "Plan Qiandao Lake around a well-chosen hotel, realistic station transfers and an optional island cruise, with room for rest instead of an attraction checklist.",
  stay: "2–3 nights for a lake stay; longer for deliberate downtime",
  bestFor: "Lakeside rest, comfortable family time and a slower break between cities",
  interests: ["landscape", "food"],
  relatedDestinationIds: ["jiande", "hangzhou", "huangshan", "hongcun", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qiandao Lake Travel Guide: Hotels, Cruises & Itinerary",
    seoTitle: "Qiandao Lake Guide: Hotels, Cruises & Stays",
    seoDescription:
      "Plan Qiandao Lake with town versus lake-hotel advice, two or three nights, an optional island cruise and the full station transfer from Hangzhou routes.",
    answer:
      "Qiandao Lake in western Zhejiang is best approached as a lakeside hotel break, with a cruise or shore outing chosen around the property. Two nights give one full day; three allow an outing and a separate rest day. This island-dotted reservoir lies in Chun'an County, within the wider Hangzhou area, and was formed for hydropower. Choose the lake sector before the room: the railway station, town, cruise piers and outlying hotels require different transfers.",
    stayAnswer:
      "Choose two nights for a simple break with one full day at the hotel or a selected cruise. Three nights give two different days: for example, an island outing and a slower property day. One night can work with early arrival and useful departure hours, but a late check-in followed by an early train leaves little benefit from a resort address. Longer stays need room facilities, food and available activities that suit the group. Do not book extra nights solely because the lake has many islands; the point is the quality of the stay, not the number visited.",
    hotelAnswer:
      "Compare a Qiandaohu town or town-edge property for meals and practical services with a named lakeside resort for its actual bedroom, outlook and facilities. A more distant peninsula or rural property can be worthwhile when you intend to stay there, but adds road time for the station, piers and outside dining. Check the booked view, balcony privacy, shoreline path, pool season, family bed setup, heating or cooling, dinner and pickup. A lake-view label does not establish a private beach, swimming permission or direct access to a cruise pier.",
    sightseeingQuestion: "Do I need an island cruise to enjoy Qiandao Lake?",
    sightseeingAnswer:
      "No. A good room, a selected public lakeside walk and time to rest can make a worthwhile stay. Choose a cruise when being on the water and visiting the actual scheduled islands appeal to you. Compare the departure pier, route, shared or separately arranged service, boarding, stairs, time ashore and return before booking. Different lake sectors and piers are not interchangeable. Guests who dislike boarding, crowds or extended sightseeing may prefer a shore-based day rather than buy the broadest island program.",
    visitorResources: [
      {
        label: "Chun'an county government",
        href: "https://www.qdh.gov.cn/",
        scope:
          "Official county context and dated public notices, mainly in Chinese. Confirm current scenic-area sectors, piers, boat operation, permitted activities and property services with the responsible operators. A lake tourism description does not establish swimming access, pool opening or a particular room view.",
      },
      {
        label: "Hangzhou municipal government",
        href: "https://www.hangzhou.gov.cn/",
        scope:
          "Wider regional context and public-service information. Qiandao Lake is within the broader Hangzhou administrative geography but is a separate travel chapter from West Lake. A municipal label does not establish a short transfer or a combined ticket.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and exact station names. Qiandaohu / 千岛湖 station is not at every lake hotel or departure pier. Compare the complete route to the actual property, and distinguish nearby regional station names rather than select one solely by rail duration.",
      },
    ],
    serviceScope:
      "A proposal should name the property and room category, full station or airport transfers, meals, any pool or children's facility relied on, and the exact scope of a cruise or shore outing. State whether a boat is shared or separately arranged and what happens if weather affects operation. Cycling, water sports, fishing, swimming, spa services and supervised children's activities need current availability and appropriate arrangements; none follows automatically from a resort booking. Agree a useful indoor alternative and protect the rest time that justified the stay.",
    routeAdvice:
      "Use Qiandao Lake for a slower chapter after Hangzhou, or within a separately planned journey toward Huangshan. Share your dates, actual gateways, available nights, room priorities, children's ages where relevant and preference for cruising or downtime. We can assess a tailored stay around the chosen hotel and lake sector, including the complete station transfers. Hongcun adds a different village subject with its own roads and nights; add it when the travel leaves useful time in both places.",
    practicalPlanning: {
      timing:
        "Choose the property and the purpose of the stay first. A cruise day needs the actual pier check-in, boarding, island visits, meals and return, not just time on the water. Keep a different day free if the room and grounds are the reason for booking. Do not place an essential cruise before a tight onward train. Pool operation, children's programs and food outlets can vary by date; build a plan around the facilities confirmed for your stay.",
      walking:
        "A lake hotel may occupy a hillside, with long corridors, slopes and steps between room, restaurant and shore. Ask for the actual route, lifts and any buggy service before assuming a resort is easy to navigate. Cruises introduce boarding gaps, piers and island paths or stairs. A shorter shore day may suit some guests better. Check seating, toilets, shade and the return pickup; a private vehicle cannot remove the remaining walking on an island.",
      cost: "Compare room category, breakfast and dinner, full transfers, any separate facility charges, boat service, scenic-area admission and island transport. A resort package can cover different services from an independent room booking. Clarify the cancellation or replacement arrangements for weather-dependent activities. A premium should deliver a room and daily routine that work well, rather than a vague lake-view promise, unconfirmed private water access or an attraction list you will not use.",
    },
    attractions: [
      "A specific lakeside hotel and its genuinely available grounds and facilities",
      "A selected public shore walk with actual access, distance and pickup checked",
      "A named island-cruise route from its exact operating pier",
      "A chosen island viewpoint only when its stairs and visitor route suit the guests",
      "Qiandaohu town for practical dining and a different local-service base",
      "A separately assessed cycling route, with traffic, surface, distance and support reviewed",
      "A regional fish meal or another suitable seated meal with clear ingredients and portion scope",
    ],
    stays: [
      {
        label: "1 night / only with useful hours",
        advice:
          "Choose an early enough arrival to enjoy the setting and keep the next morning unhurried. A late arrival and early train are a transport stop. A distant resort can make that stop more complicated without adding meaningful lake time.",
      },
      {
        label: "2 nights / a simple break",
        advice:
          "Use the full day for the hotel and a manageable shore outing, or one selected cruise. Leave meals and rest realistic. If you choose the cruise, accept that it uses much of the only full day and assess whether the remaining property time justifies the room rate.",
      },
      {
        label: "3 nights / an outing and a rest day",
        advice:
          "Separate a water or shore excursion from a slower day at the property. This can work well for families or guests recovering from a busy city or mountain chapter, provided food, rooms and indoor facilities genuinely suit them. Extra nights should reduce pressure rather than create another compulsory attraction day.",
      },
    ],
    hotelAreas: [
      {
        name: "Qiandaohu town or its edge / meals and practical access",
        advice:
          "Choose an exact address for dining, pickup and the places you will use. Compare the bedroom and noise with the actual lakeside outlook. A town base can be practical without offering a secluded resort setting; decide which matters more for this chapter.",
      },
      {
        name: "A named lakeside resort / the room and facilities lead",
        advice:
          "Confirm the booked view, balcony, bedding, bathroom, temperature control and distances to breakfast or dinner. Ask which pools, restaurants and indoor spaces operate on your dates and whether family services require reservations or separate payment. A brand or exterior photograph is not a facility guarantee.",
      },
      {
        name: "A more distant peninsula or rural property / deliberate seclusion",
        advice:
          "Assess the full station journey, meals, road access and what remains enjoyable in rain. Choose it when the setting earns time at the property. Daily drives to a town restaurant or an unrelated cruise pier can undermine the rest you hoped to gain.",
      },
      {
        name: "A station-oriented room / a particular departure need",
        advice:
          "Consider it for an actual early or late connection after checking the full address and meal options. Station proximity is not lakeside proximity. Compare one convenient transfer with the effect on the rest of the stay before choosing it as the main base.",
      },
    ],
    tradeoffs: [
      {
        title: "A cruise is one way to see the lake, not an obligation",
        advice:
          "Choose it for the actual water journey and island sequence. Ask how long the whole outing lasts, what is shared, where you board and how much walking remains. If the guests want to sleep late, read and enjoy the hotel, that is a valid lake holiday rather than an incomplete sightseeing visit.",
      },
      {
        title: "Lake view, shore access and swimming are different claims",
        advice:
          "A bedroom may look over water without having a suitable public path nearby. A path does not establish a supervised swimming area, and a hotel pool follows its own opening and use rules. Request the particular services you need instead of interpreting every water photograph as a beach holiday.",
      },
      {
        title: "Qiandaohu station is a gateway, not the resort entrance",
        advice:
          "Lake roads and property locations can make the final transfer a substantial part of arrival. Compare ticket times with pickup, bags, hotel check-in and useful hours at the destination. A shorter train with an awkward final journey is not automatically the more relaxed option.",
      },
      {
        title: "Cycling is a chosen route, not a compulsory lap of the lake",
        advice:
          "Select a manageable section with suitable surfaces, traffic conditions, bikes and support. Family cycling and an endurance ride are different activities. Do not promise a continuous easy traffic-free circuit from every hotel, and keep the return plan and weather alternative explicit.",
      },
      {
        title: "Submerged-city photographs do not describe an ordinary visitor route",
        advice:
          "The reservoir's creation submerged settlements, giving the landscape an important modern history. Underwater images of historic remains are not evidence of a public walk, ordinary boat viewing or an included dive. Any specialist underwater activity requires its own current authorized provider and suitability assessment; do not build a general leisure stay around it.",
      },
      {
        title: "West Lake and the Xin'an River need their own plans",
        advice:
          "Hangzhou's West Lake is an urban cultural landscape in another part of the municipality. Jiande and downstream Xin'an River interests are different local routes. A shared regional geography or water-system history does not make these hotel bases, piers or attractions interchangeable.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jiande",
        advice:
          "Jiande offers a separate Meicheng and downstream river-town chapter, with its own room and full transfer decisions. Add it when history and river setting provide something different from the reservoir stay. For a short trip, one settled water-facing base may be more rewarding than changing hotels for similar views.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou offers West Lake, city culture and a separately arranged tea-country visit. Qiandao Lake is a different reservoir and accommodation chapter. Compare the complete hotel-to-hotel journey and give the lake useful nights rather than add another distant water photograph to a busy city day.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan adds a distinct mountain route with its own stairs, gateway and lodging. A lake break can provide a gentler chapter when the full connection works, but do not schedule a major cruise immediately before a tight mountain transfer. Huangshan North, a mountain gateway and an on-mountain room are separate arrival decisions.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun adds a village and architecture interest in Anhui. Give it a specific purpose and a full onward plan, including the final road and luggage approach. A lake resort does not make the village a neighboring outing, even when both fit a longer regional journey.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai can provide an international gateway and an urban contrast before or after a slower lake stay. Check dated trains, exact stations and both final transfers. Existing Shanghai products do not automatically include a lake hotel, cruise or children's activity program.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are sensible starting points for shore walking and mild-weather rest, with rain and actual temperature still relevant. Summer can suit guests wanting currently operating pools, but heat, humidity and busy dates change the daily rhythm. Winter may suit a quiet room-led break if heating, restaurants and indoor facilities meet the brief. Water visibility, island views and boat operation vary with weather. Choose the services available on your dates rather than assume a resort runs every advertised activity year-round.",
    orientation:
      "Qiandao Lake is the Thousand Island Lake reservoir in Chun'an County, within Hangzhou's wider administrative geography in western Zhejiang. Town, railway station, lake sectors, cruise piers and outlying hotels are different places. Use full Chinese property and pier names rather than a broad Qiandao Lake address. Jiande and the downstream Xin'an River are separate planning subjects. Choose a lake sector and hotel first, then a compatible cruise or shore outing; trying to cover several sectors can turn a restful stay into a sequence of transfers.",
    experiences: [
      "Enjoy an assessed lakeside room and a daily routine with time to rest",
      "Choose one operating cruise or suitable shore route for a different lake perspective",
      "Understand the reservoir's modern history and try a meal that suits the group",
    ],
    planningNotes: [
      "Choose the property before assigning a pier or island itinerary",
      "Count the full station transfer and usable hours between hotel nights",
      "Confirm pools, family services and water activities individually rather than infer them from resort imagery",
    ],
    arrival:
      "Research dated trains to Qiandaohu / 千岛湖 station and the complete road to the booked hotel. Hangzhou and Shanghai gateways require both station transfers, bags and a useful arrival hour. Compare a full road proposal when appropriate rather than the rail segment alone. A hotel shuttle needs its actual timetable, pickup point, reservation and luggage capacity confirmed. Keep the essential cruise or prepaid activity away from an uncertain arrival window.",
    gettingAround:
      "Group activities around the actual hotel and a chosen pier or shore section. A lake map can understate road travel around inlets and peninsulas, so use real addresses and pickup points. Check the route from room to restaurant, pool and shore as well as the public excursion. Private transport helps between locations but does not remove boarding requirements or island steps. Boat operations and any water activity follow current local and operator conditions independently of a room booking.",
    stayStrategy:
      "A settled two- or three-night stay is strongest when the room and daily routine are the reason for coming. Resist moving between lake hotels unless the change creates a clear benefit. For families, specify beds, children's ages, supervision needs, meal timing and indoor alternatives. For a quiet couple's stay, check acoustic privacy and activity around the booked room. Premium value comes from actual facilities, sleep and useful time rather than an unverified private-shore or villa label.",
    firstTimerNote:
      "Ask whether you want a lake holiday or an island-sightseeing day. Both are valid, but they call for different room, pier and timing choices. If the itinerary spends the only full day away from a costly resort, reconsider the room or add useful rest time. The clearest plan makes the reason for staying visible in the daily schedule.",
    faqs: [
      {
        question: "Is Qiandao Lake worth staying overnight?",
        answer:
          "Yes, when the specific room, setting and available facilities justify a slower lake chapter. Two nights give one full day; three allow a selected outing and a separate rest day. A late arrival and early departure rarely make the most of a resort stay.",
      },
      {
        question: "Should I spend two or three nights at Qiandao Lake?",
        answer:
          "Choose two for one simple full day at the hotel or a selected cruise. Choose three for two distinct days, with time for both an outing and rest. The property, meals and actual operating facilities should support the extra night.",
      },
      {
        question: "Can I enjoy Qiandao Lake without an island cruise?",
        answer:
          "Yes. A good room, suitable public shore walk, meals and downtime can be the whole purpose. Choose a cruise only when the exact route, boarding, island walking and total time suit you. It is optional rather than a requirement for a complete stay.",
      },
      {
        question: "Where should I stay at Qiandao Lake?",
        answer:
          "Compare town convenience with a specific lakeside resort or more distant rural setting. Use the booked room, dinner, facilities and complete station and pier transfers to decide. A lake-view label alone does not establish shore access, quiet or the best location for your plan.",
      },
      {
        question: "Is Qiandaohu railway station close to lake hotels?",
        answer:
          "The final journey depends on the exact hotel, and the station is not at every resort or cruise pier. Check the complete pickup-to-room transfer and useful arrival hours. Confirm any hotel shuttle separately rather than assume it meets your train.",
      },
      {
        question: "Can I swim in Qiandao Lake?",
        answer:
          "Do not infer permission or suitable conditions from a shoreline or clear-water photograph. Check a current authorized swimming arrangement if relevant, or the booked hotel's actual pool rules and operation. Lake access, a pool and supervised swimming are different services.",
      },
      {
        question: "Is Qiandao Lake the same as Hangzhou West Lake?",
        answer:
          "No. Qiandao Lake is a reservoir in Chun'an County in western Zhejiang; West Lake is a different cultural landscape in Hangzhou's urban area. They require separate hotel and transport plans. A wider Hangzhou administrative address does not make them one city-center outing.",
      },
      {
        question: "Is Qiandao Lake suitable for families?",
        answer:
          "It can be with the right room, meals and currently available facilities. Confirm beds, pool operation, any supervised children's service and indoor alternatives for the travel dates. A long island circuit or remote property is not automatically the best choice for every age group.",
      },
    ],
    culturalStory: {
      title: "Read a reservoir landscape as modern history",
      paragraphs: [
        "The islands seen today are part of a landscape transformed by the Xin'an River hydropower project. That history matters: the water brought a new geography and submerged earlier settlements rather than preserving an unchanged natural scene. A useful guide can explain this transformation without turning it into a promise of visible underwater ruins. Ordinary shore and boat visits show the contemporary reservoir landscape.",
        "A slower stay can leave room to understand that setting as well as enjoy it. Choose a public viewpoint or shore route that suits the guests, and connect the explanation to what is actually visible. Local communities and permitted working activities remain part of the place. Scenic branding does not turn every shore into private resort land or every historic association into a bookable experience.",
      ],
    },
    foodStory: {
      title: "Choose a lake meal with clear portions and ingredients",
      paragraphs: [
        "Fish-head soup is a recognizable Qiandao Lake food interest where genuinely offered. Ask which fish and preparation the kitchen uses, how large the portion is and how it fits the rest of the meal. A shared regional dish can be enjoyable without becoming a compulsory banquet for a small group. At a more remote resort, assess ordinary dinner choices as carefully as the signature dish, especially over several nights.",
        "Check fish bones, shellfish, stocks, preserved ingredients, wheat or soy-based seasonings and shared preparation where relevant. A vegetable dish may still use animal stock. Serious allergies, vegetarian or halal requirements need a specific kitchen's confirmed capacity and an alternative. A lake setting does not establish the source of every ingredient, and a regional specialty name is not proof of suitability for every guest.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Arrive with time to enjoy the room",
        description:
          "Complete the station-to-property journey, settle in and take a meal. A short assessed shore walk can fit if arrival and weather allow. Keep a major cruise away from an uncertain arrival and check which facilities are actually available during the stay.",
      },
      {
        day: "Full day 1 / a selected outing or simple rest",
        title: "Choose the kind of lake day you want",
        description:
          "Follow a named operating cruise with the full pier, boarding and island sequence allowed, or enjoy the property and a manageable shore route. Include a realistic lunch and rest. Do not sell both as compulsory full programs within the same day.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Make the extra night reduce pressure",
        description:
          "Use a different rhythm: a slow breakfast, available facilities, a short supported ride or another selected shore interest. Any activity needs current confirmation and suitability checks. Keep an indoor fallback that still makes the chosen property worth staying in.",
      },
      {
        day: "Departure / onward city or mountain chapter",
        title: "Allow the whole final transfer",
        description:
          "Checkout, reach the actual ticketed station and continue to a separately planned next chapter. Do not insert a major cruise before a tight departure. This is an illustrative outline, not a published package or guarantee of rooms, pools, boats, childcare or current activities.",
      },
    ],
  },
};
