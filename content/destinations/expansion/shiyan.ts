import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/shiyan.svg",
  alt: "Original Shiyan planning schematic separating city museums, a Wudang Mountain stay and a separately planned Danjiangkou reservoir visit; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const shiyanGuide: ExpandedDestination = {
  id: "shiyan",
  name: "Shiyan",
  region: "central",
  kicker: "A purposeful city stop beyond the Wudang gateway",
  description:
    "Decide whether Shiyan deserves a city night for museums and industrial history, or whether to continue to Wudang Mountain, with separate Danjiangkou planning.",
  stay: "1–2 city nights; Wudang and reservoir nights are separate",
  bestFor: "Regional collections, modern industrial history and a considered Wudang gateway stay",
  interests: ["heritage", "city", "landscape"],
  relatedDestinationIds: ["danjiangkou", "wudang-mountains", "shennongjia", "wuhan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Shiyan Travel Guide: City, Wudang & Stays",
    seoTitle: "Shiyan Guide: City, Wudang & Where to Stay",
    seoDescription:
      "Choose a Shiyan city stay or a Wudang Mountain base. Plan museums, industrial history, station transfers and a separately assessed Danjiangkou visit.",
    answer:
      "Shiyan (十堰), in northwestern Hubei, is both a working city and a gateway to the Wudang Mountains. A city stay makes most sense for a specific museum interest, modern automotive history or an arrival schedule that benefits from a comfortable overnight. It is not essential for every Wudang visitor: if the mountains are the main purpose, compare going directly to the appropriate mountain-foot hotel. Danjiangkou (丹江口), a separate county-level city within the wider Shiyan municipality, introduces reservoir and water-management interests through another route. One city night can support a useful arrival and selected visit; two give one full day. Count a Wudang stay separately rather than calling a city overnight a complete mountain visit.",
    stayAnswer:
      "Choose one Shiyan city night when it improves the actual arrival or departure, or leaves time for a named museum visit. Choose two for a full city day with regional collections and an industrial-history subject that genuinely interests you. Add nights only for a different confirmed purpose. Wudang generally needs its own two- or three-night plan for selected architectural and mountain routes. A Danjiangkou excursion or reservoir-side night requires its own road and property assessment; it should not be presented as a brief lakeside stop beside every Shiyan hotel.",
    hotelAnswer:
      "Compare a central city room for museums, dinner and local services with an exact Shiyan East station-area property for a rail-focused overnight. A Wudang mountain-foot hotel serves a different brief and can avoid repeatedly traveling from the city. For Danjiangkou, choose the precise town or reservoir-area address only after fixing the actual visitor route. Judge an upgrade by quiet, bathroom, temperature control, breakfast and the usefulness of the location. A skyline view, station label or reservoir-view description says little about the next day's complete journey.",
    sightseeingQuestion: "Should you stay in Shiyan city or go straight to Wudang Mountain?",
    sightseeingAnswer:
      "Go directly to a suitable Wudang base when the mountain is the purpose and the complete arrival transfer works. Stay in Shiyan city when a museum, industrial-history interest, business appointment or real transport schedule gives the city night value. Shiyan East, Shiyan station, Wudangshan West and Shiyan Wudangshan Airport are different gateways; use the station or airport printed on the ticket. A city hotel does not remove Wudang's scenic buses, cableway approach or remaining steps. The decision should follow the actual itinerary rather than the broad phrase near Wudang.",
    visitorResources: [
      {
        label: "Shiyan municipal government",
        href: "https://www.shiyan.gov.cn/",
        scope:
          "Municipal background and public information. Check individual museum exhibitions, visitor arrangements, properties and any proposed industrial visit separately; a city introduction is not an appointment confirmation.",
      },
      {
        label: "UNESCO: Ancient Building Complex in the Wudang Mountains",
        href: "https://whc.unesco.org/en/list/705/",
        scope:
          "Context for Wudang's defined World Heritage architectural property. This does not place the entire city or reservoir within that property, or confirm current mountain transport and religious-site access.",
      },
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Confirm the dated service, actual station and booking details. Compare both road transfers before choosing a Shiyan or Wudang-area room.",
      },
    ],
    serviceScope:
      "A useful proposal should explain why a Shiyan city night is included, then identify the room, museum or public visit, guide language and full transfer. For an automotive interest, specify whether the visit is a public exhibition, a company appointment or an operating production facility. Host, purpose, identity requirements, language and photography permission need confirmation. A driver, cultural guide, business interpreter and technical specialist have different roles. A general city tour does not establish factory access or a commercial introduction.",
    routeAdvice:
      "Use the Wudang guide for a mountain stay with selected palaces, summit routes and assessed steps. Shennongjia adds forest and wetland interests through a separate regional journey, with its own useful nights. Wuhan adds major Hubei archaeological collections and river-city neighborhoods. There is no matching published Shiyan itinerary recommended here. Share your actual arrival ticket, interests, room expectations and walking preferences so a tailored plan can show whether a city stay adds value or whether the time is better spent at the next base.",
    practicalPlanning: {
      timing:
        "Check a museum's current opening, document requirements and exhibitions before making it the reason for a city overnight. Put a company appointment in the schedule only after the host confirms it. A reservoir journey needs the complete road and actual visiting point. Keep the main Wudang day separate from a tight departure, even if the arrival ticket says Shiyan or Wudangshan.",
      walking:
        "City museum visits can involve extended standing, while urban walks need chosen sections with seating, toilets and manageable road crossings. A dam viewpoint, reservoir path, boat boarding and a Wudang summit route have different demands. Ask about each actual approach and return, including steps left after mechanized transport. A private vehicle does not make every attraction step-free or provide access to working infrastructure.",
      cost: "Compare the actual room, full vehicle and guide hours, named admissions and any separately arranged interpretation or host. Company appointments, business interpretation and technical consultation should be scoped separately. For a reservoir outing, identify the route, boat if any, meals and weather alternative. Paying more should improve the room, explanation or use of time; it does not purchase unrestricted industrial access, a private shoreline or guaranteed water conditions.",
    },
    attractions: [
      "Shiyan Museum / 十堰市博物馆, using the current collection and exhibition program",
      "Selected public automotive-history interpretation, with the actual venue identified",
      "A manageable city neighborhood walk and a regional meal",
      "Wudang Mountains / 武当山 through a separate mountain-base plan",
      "Danjiangkou / 丹江口 reservoir or water-management interests through a separately assessed route",
      "Yunyang / 郧阳 historical and archaeological interests only through named public venues and confirmed access",
    ],
    stays: [
      {
        label: "No city night / continue to the main destination",
        advice:
          "Often the sensible choice when Wudang is the whole purpose and the actual arrival transfer works. A city needs a reason to be included; publishing a Shiyan guide is not a reason to add another hotel change to every journey.",
      },
      {
        label: "1 city night / a purposeful gateway stop",
        advice:
          "Use the room for a comfortable arrival or departure and a selected local interest when time allows. A museum visit depends on opening and usable hours. Keep mountain and reservoir ambitions outside a short overnight unless separately planned.",
      },
      {
        label: "2 city nights / one full local day",
        advice:
          "Make room for a museum, thoughtful interpretation of the city's industrial development and a relaxed meal. A confirmed business appointment can replace a sightseeing subject. Add Danjiangkou only after comparing the full journey with the city time it removes.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Shiyan: city collections, meals and services",
        advice:
          "Choose an actual block near your named interests, then check room quietness, vehicle access and dinner options. The city is not one compact walking precinct. A room convenient for a museum may be less useful for an early rail departure than its central label suggests.",
      },
      {
        name: "Shiyan East station approach: a rail-focused overnight",
        advice:
          "Useful only for the correct station and a schedule that benefits from the location. Confirm the full luggage route and pickup, breakfast and evening meal. Near Shiyan station and near Shiyan East are different descriptions, and neither implies proximity to Wudang's scenic entrance.",
      },
      {
        name: "Wudang mountain foot: a separate sightseeing base",
        advice:
          "Compare when the next days are focused on mountain architecture or walking. Confirm the actual entrance transfer, room comfort, meals and luggage arrangement. Mountain-foot and scenic-area rooms are different options; neither should be booked merely because an airport carries the Wudangshan name.",
      },
    ],
    tradeoffs: [
      {
        title: "Industrial history does not require an unconfirmed factory tour",
        advice:
          "Shiyan's automotive development can be discussed through a suitable public exhibition, urban history and credible interpretation. A production-line visit is a different, permission-based activity. Identify the actual company and host before describing it as available, and do not substitute a retail showroom for a factory without telling the traveler.",
      },
      {
        title: "A fossil display and an excavation are different visits",
        advice:
          "Regional human-origins and fossil interests need a named institution and current objects. Ask whether you will see an original, a cast, a reconstruction or an explanatory display. A fossil associated with the wider region does not prove it is on view in the city museum, and a research site is not automatically open to tourists.",
      },
      {
        title: "Danjiangkou needs its own purpose and route",
        advice:
          "Choose a specific reservoir landscape or permitted water-management visit, with the location and access explained. A dam, city waterfront, reservoir cruise and the wider water-transfer system are not one interchangeable attraction. Do not imply a normal ticket grants access to operational areas, or assume swimming and boating are available throughout a managed drinking-water landscape.",
      },
      {
        title: "A city guide and a mountain guide solve different problems",
        advice:
          "Use Shiyan to decide whether the city deserves time and which gateway works. Use the Wudang guide to choose palaces, scenic transport, summit walking and mountain accommodation. This keeps the city chapter useful without duplicating the mountain itinerary or obscuring its physical demands.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "danjiangkou",
        advice:
          "Danjiangkou provides a separate reservoir and water-management chapter. Choose the actual permitted dam route, shore or confirmed boat, then compare the full roads and room. A mention in the Shiyan itinerary is not a city, reservoir and boat package; use the dedicated guide to decide whether a day visit or overnight adds value.",
      },
      {
        slug: "wudang-mountains",
        advice:
          "Give Wudang its own two or three nights for selected Daoist architecture and mountain routes. Use the complete hotel-to-entrance journey, permitted transport and remaining steps. A Shiyan gateway night may help arrival but does not replace a full local mountain day.",
      },
      {
        slug: "shennongjia",
        advice:
          "Shennongjia offers a contrasting forest and wetland stay. Compare the dated gateway and complete mountain roads before choosing Muyu, Pingqian or a northern base. Allow useful local nights and assess motion sickness and accumulated walking rather than treating it as a short extra from Shiyan.",
      },
      {
        slug: "wuhan",
        advice:
          "Wuhan adds Hubei Provincial Museum, major river-city history and distinctive breakfasts. Use the actual station pair and both hotel transfers, and keep time for a proper city stay. A rail connection through Wuhan does not automatically leave a museum visiting window.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for a mixture of city visits and outdoor time. Summer can be hot with heavy rain; winter may suit selected indoor interests while mountain and road conditions need separate checking. The city, reservoir and Wudang high routes should not share one weather assumption. Match the actual visit with opening days and the Chinese holiday calendar before booking a short stop around a single attraction.",
    orientation:
      "Shiyan city is not Wudang's scenic entrance. Shiyan East / 十堰东, Shiyan / 十堰 and Wudangshan West / 武当山西 are different station names; Shiyan Wudangshan Airport is another arrival point. Danjiangkou and Yunyang are distinct directions within the wider municipal planning area. Use the Chinese address of the actual museum, hotel or appointment, then build the road sequence. A municipality's name does not describe the distance between its farthest interests.",
    experiences: [
      "Explore a selected Shiyan Museum route with objects, casts and historical interpretation clearly distinguished",
      "Understand the city's automotive identity through an actual public venue or a separately confirmed industrial appointment",
      "Choose a city meal and manageable local walk, or a separately scoped Danjiangkou landscape visit when it adds a different subject",
    ],
    planningNotes: [
      "Compare the city overnight with going directly to a suitable Wudang base; include it only when it adds value",
      "Use the exact station, airport and hotel addresses rather than a broad Shiyan or Wudang gateway label",
      "Confirm museum displays, company hosts and permitted reservoir visits independently; none follows from a private-car booking",
    ],
    arrival:
      "Check the ticketed service and actual arrival point before choosing the room. Shiyan East and Wudangshan West can lead to different hotel decisions; the conventional Shiyan station and airport require their own transfer estimates. Add luggage collection, dinner and the full road, especially for a mountain-foot room. Do not book a timed museum visit against an optimistic arrival unless the current opening and complete journey leave sufficient margin.",
    gettingAround:
      "Build each day around a small number of named places. A vehicle can help with luggage, scattered city interests and the next regional base, while normal venue security and walking remain. Business appointments need an agreed meeting point and the right interpreter. Danjiangkou calls for a separate road plan. At Wudang, regulated scenic transport and mountain paths replace the assumption that a city driver can deliver guests directly to every palace.",
    stayStrategy:
      "One city night is a useful possibility, not a default requirement. Two nights should have a clear full-day purpose. Compare the room and practical evening with staying at the mountain foot or continuing onward. For high-end guests, a quiet room, dependable meals and fewer unnecessary check-ins often matter more than adding another destination name to the itinerary. A reservoir property is a separate choice to assess on its own merits.",
    firstTimerNote:
      "Ask why the city night is included. A museum interest, a confirmed appointment or a better arrival sequence is a clear answer. Because Wudang is near Shiyan is not enough by itself. An honest comparison may recommend going straight to the mountains; that can be better planning than selling a city stop the traveler does not need.",
    faqs: [
      {
        question: "Is Shiyan worth visiting apart from Wudang Mountain?",
        answer:
          "It can be worthwhile for a specific regional museum interest, automotive history or a confirmed business purpose. For travelers interested only in Daoist architecture and mountain scenery, a direct Wudang base may use time better. Choose a city stay for a named experience, not just the gateway label.",
      },
      {
        question: "How many nights should I spend in Shiyan city?",
        answer:
          "One night can support a useful arrival or departure with a selected visit. Two provide a full city day. Wudang mountain nights and any Danjiangkou stay should be counted separately. If the city adds no particular interest and transport fits, no city overnight may be necessary.",
      },
      {
        question: "Is Shiyan East the same station as Wudangshan West?",
        answer:
          "No. Shiyan East / 十堰东 and Wudangshan West / 武当山西 are different stations. Shiyan / 十堰 is another station name. Use the exact ticket, dated service and both hotel transfers to compare options rather than treating every station in the wider region as the same gateway.",
      },
      {
        question: "Can I visit a car factory in Shiyan?",
        answer:
          "Only if the specific company or facility confirms an appropriate visit with a named host, purpose, timing, document requirements and permissions. A city tour or private driver does not establish factory entry. A public exhibition, showroom and operating production line are different experiences and should be described separately.",
      },
      {
        question: "Is Danjiangkou Reservoir a quick stop from Shiyan?",
        answer:
          "Assess the actual destination and full roads first. Danjiangkou city, a permitted dam viewpoint and a particular reservoir outing are different choices. Confirm access, walking and any boat separately. Do not treat a large managed reservoir as one attraction beside the city hotel or assume unrestricted swimming and boating.",
      },
      {
        question: "Should I sleep in Shiyan before visiting Wudang?",
        answer:
          "Only when the city interest or actual arrival makes it useful. A suitable mountain-foot room may be a better start for a Wudang-focused stay. Compare both complete transfers, room comfort and meals, then protect a full mountain day with its scenic buses and remaining walking assessed.",
      },
      {
        question: "Can I combine Shiyan, Wudang and Shennongjia?",
        answer:
          "Yes when the useful days and complete regional transfers justify all three. Decide whether Shiyan itself needs a night, give Wudang its own architectural and mountain plan, and choose the correct Shennongjia base for forest or wetland interests. These are separate planning decisions, not three sights in one city day.",
      },
    ],
    culturalStory: {
      title: "A modern industrial city within a much longer regional story",
      paragraphs: [
        "Shiyan's automotive identity provides a way to understand modern urban development: production, migration, work and the services that grow around industry. Interpretation is strongest when it uses a real public exhibition or a properly agreed visit rather than promises access to any factory carrying a familiar brand. A city is also where people live, study and eat; a brief neighborhood walk can add ordinary context without turning residents into a staged attraction.",
        "Regional collections can open a much longer historical perspective, including archaeological and fossil interests associated with the wider area. Explain the provenance and status of the object actually displayed, and distinguish evidence from a reconstruction. Wudang's Daoist architecture is a separate cultural landscape, while Danjiangkou introduces questions about water infrastructure and settlement. These subjects enrich one another when their places and evidence stay clear, rather than being compressed into a single ancient-city story.",
      ],
    },
    foodStory: {
      title: "Plan the meal around the real city or mountain day",
      paragraphs: [
        "Use the city stay for a comfortable meal chosen from the actual kitchen's strengths: a balanced selection of vegetables, tofu, rice or noodles, and meat or fish if wanted. For a reservoir-related fish dish, ask about species, source, bones, portion and preparation; a nearby reservoir is not evidence that fish is wild-caught or taken from protected waters. There is no need to insist on a specialty platter when a well-prepared simple dinner suits the group better.",
        "Discuss meat stock, pork, soy, wheat, chili and shared equipment before ordering when dietary requirements matter. A tofu or vegetable dish need not be vegetarian. Confirm early breakfast and the next day's lunch before leaving for the mountain or a long road transfer. A hosted meal, cooking lesson or producer encounter needs its own arrangement; it is not automatically included because the itinerary describes regional food.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / night 1",
        title: "Make the gateway night useful",
        description:
          "Transfer to the actual city room, have dinner and confirm the next day's named visit. A short local walk or museum stop depends on real arrival hours and current opening. If going straight to Wudang is the better plan, use that alternative instead of inserting this city night.",
      },
      {
        day: "Optional full day / night 2",
        title: "Explore the city for a clear interest",
        description:
          "Give the selected museum time for interpretation and a proper meal. Add an actual public automotive-history subject or a separately confirmed appointment. A Danjiangkou excursion is an alternative full-route decision, not another guaranteed stop after completing the city program.",
      },
      {
        day: "Onward day",
        title: "Continue to a distinct mountain or regional stay",
        description:
          "Transfer to the correct Wudang hotel, Shennongjia base or departure gateway. The mountain has its own scenic transport, walking and dates. This illustrative city outline is not a published package and does not guarantee exhibitions, company entry, reservoir operations or particular hotel rooms.",
      },
    ],
  },
};
