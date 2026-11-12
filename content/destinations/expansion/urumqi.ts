import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/urumqi.svg",
  alt: "Urumqi planning schematic distinguishing a museum and city day, a separate Tianchi excursion and the actual airport or station; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const urumqiGuide: ExpandedDestination = {
  id: "urumqi",
  name: "Urumqi",
  region: "northwest",
  kicker: "Xinjiang context before the wider journey",
  description:
    "Plan Urumqi for museum context, regional food and a considered city stay, with clear choices on hotel location, the Grand Bazaar and a separate Tianchi excursion.",
  stay: "2 city nights; 3 with a separate landscape day",
  bestFor: "Regional history, food and a practical introduction to a wider Xinjiang route",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["sayram-lake", "kuqa", "turpan", "kashgar", "yining", "kanas", "hemu"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Urumqi Travel Guide: Museums, Hotels & Tianchi",
    seoTitle: "Urumqi Travel Guide: Museums, Hotels & Tianchi",
    seoDescription:
      "Plan Urumqi with museum and Grand Bazaar choices, hotel areas, regional food, actual gateways and a separate Tianchi day. Compare onward Xinjiang routes.",
    answer:
      "Urumqi (乌鲁木齐), also written Ürümqi or Wulumuqi, is the capital of Xinjiang in northwest China. Two city nights provide a full day for regional museum context, a selected neighborhood or bazaar interest and a good meal. Three nights can add a separate Tianchi / Heavenly Lake outing in Fukang, outside the city. Choose the actual hotel and arrival point before filling the schedule: the airport, Urumqi Railway Station and Urumqi South are different locations. Urumqi is a modern regional capital, not an interchangeable substitute for Kashgar's old-city setting or a base for every Xinjiang landscape.",
    stayAnswer:
      "One night can serve a transport connection, but it may leave little beyond a meal and sleep. Two city nights allow one useful full day without making museum access depend on an uncertain arrival. Three nights can give Tianchi its own day or allow another distinct city interest. If onward travel is the priority, keep the city visit focused rather than add nights for repeated shopping. Count actual airport or station transfers, opening hours and departures: a long daylight window does not turn a late arrival into a full sightseeing day.",
    hotelAnswer:
      "Compare a suitable central or museum-oriented property with an address selected for the Grand Bazaar area, a rail connection or an airport overnight. The best choice depends on the full stay, not one attraction. Check the quoted room, cooling or heating, soundproofing, breakfast and the route to meals. Near the bazaar does not mean quiet or next to every museum; an airport-area room solves a flight need rather than the same city experience. Confirm that the actual property can complete the required check-in arrangements for your travelers before making a nonrefundable booking.",
    sightseeingQuestion: "Should you choose Xinjiang Museum, the Grand Bazaar or Tianchi?",
    sightseeingAnswer:
      "Choose Xinjiang Museum for a grounded introduction to regional history, selecting actual collections and allowing time to understand them. Exhibits can change, and no particular famous object should be promised without confirmation. The International Grand Bazaar in the Erdaoqiao area is a contemporary visitor and commercial complex: useful for a chosen food, architecture or shopping interest, not a claim to an unchanged ancient market. Tianchi is a separate mountain-lake outing with road travel, entry, internal transport and remaining walking. Select the city first if you want context; add the lake when its actual landscape route and weather justify a dedicated day.",
    visitorResources: [
      {
        label: "Urumqi municipal government",
        href: "https://www.urumqi.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Use the actual venue, transport provider and hotel for current exhibitions, reservations, gateways and services. City information does not establish foreign-guest room arrangements or permission for every onward area.",
      },
      {
        label: "Xinjiang regional government",
        href: "https://www.xinjiang.gov.cn/",
        scope:
          "Regional context and public-service information. Xinjiang is geographically extensive and local conditions vary. Confirm traveler-specific access, any applicable documentation and the actual route with the responsible authorities and providers before booking; a regional tourism reference is not a clearance for every place.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services, full station names and tickets. Distinguish Urumqi Railway Station from Urumqi South and include the last hotel transfer. Confirm the time convention and actual service rather than infer routing from a general map.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the hotel and room, actual airport or station pickup, museum and bazaar scope, guiding language, meals and any separate Tianchi day. Confirm current entry and reservation procedures with the venues. For onward Xinjiang travel, check each guest's documents, local conditions, accommodation and any route-specific requirements. Cultural hosts, private kitchens, specialist interpretation and religious interiors need separate consent and arrangements. A private guide does not provide unrestricted access, exclusive museum space or permission to photograph people and sensitive locations without consent.",
    routeAdvice:
      "Urumqi can introduce Xinjiang before Turpan's oasis history, an Ili journey through Yining or a separate southern chapter in Kashgar. Choose actual flights, trains and full road legs rather than attempt every part of Xinjiang from one hotel. No matching published Urumqi product is recommended here. Use the outline to request a route with dates, passports, gateway bookings, museum and food interests, walking needs and room priorities. The existing Ningxia journey is a different destination product and should not be assumed to include Urumqi or any Xinjiang service.",
    practicalPlanning: {
      timing:
        "State meeting times in Beijing time, UTC+8, and use the ticketed transport time. If anyone uses another local convention, resolve it explicitly in writing. Put the museum on a confirmed opening and reservation day, then add a manageable city interest and seated meal. Give Tianchi a separate road-and-visitor window, with a weather alternative. Keep document and entry procedures in the real schedule rather than promise a tightly packed sequence based only on driving distance.",
      walking:
        "Museum galleries involve standing and walking; the bazaar has its own surfaces, thresholds and crowding. Choose shorter routes and seating where needed. Tianchi adds a higher, more exposed mountain setting, internal transport and a selected shore or viewpoint route. A shuttle does not make every path step-free. Review slopes, boarding, toilets and return access for the actual plan rather than label a scenic day easy from a photograph.",
      cost: "Compare the exact room, complete transfers, guide language and hours, named admissions and reservation support. Clarify Tianchi entry, internal transport and any optional boat, cableway or other activity only if actually selected and available. Do not assume all scenic-area services are included or necessary. Hosted food experiences and specialist meetings require their own confirmed basis. A premium should improve room comfort, explanation and timing, not promise special permissions or compulsory shopping disguised as culture.",
    },
    attractions: [
      "Xinjiang Museum, with current collections and reservations checked",
      "International Grand Bazaar / Erdaoqiao, as a selected contemporary commercial and food interest",
      "A coherent city neighborhood or park route with actual access and walking reviewed",
      "A seated regional meal matched to the guests' dietary needs",
      "Tianchi / Heavenly Lake in Fukang as a separately planned mountain outing",
      "Turpan, Ili or Kashgar as distinct onward chapters rather than local city excursions",
    ],
    stays: [
      {
        label: "1 night: a connection with realistic expectations",
        advice:
          "Prioritize the correct gateway transfer, a meal and sleep. A late arrival and early departure do not provide museum time. Choose a hotel for the actual onward journey and avoid promising a city tour simply because the booking includes a night.",
      },
      {
        label: "2 city nights: one useful introduction",
        advice:
          "Give a relevant collection and selected city interest a full day with meals and rest. A comfortable single base works well. Confirm opening and reservations before adding a museum to a fixed departure morning.",
      },
      {
        label: "3 nights: a separate landscape or cultural day",
        advice:
          "Add Tianchi when the actual route and weather suit, or another substantive city interest. Leave flexibility rather than assume a lake view is guaranteed. The extra day should not depend on an unconfirmed host or be filled with repeated souvenir stops.",
      },
    ],
    hotelAreas: [
      {
        name: "A central or museum-oriented property / city context",
        advice:
          "Choose the exact address around the intended collection, meals and pickup. Compare room condition, quiet and temperature control. Central is not a guarantee that every visit is walkable; count cross-city journeys and check the actual museum entrance.",
      },
      {
        name: "Grand Bazaar / Erdaoqiao area / a specific evening interest",
        advice:
          "Consider when nearby food and the commercial setting matter. Check street activity, noise, road approach and room facilities. A themed property or bazaar view is not evidence of private cultural access, quiet sleep or suitability for every guest.",
      },
      {
        name: "Station- or airport-oriented hotel / transport priorities",
        advice:
          "Use the correct station or terminal and a genuine early or late connection need. Check meals, transfer operation and the quoted room. An airport label is not a city-center location, and a station-area stay should be compared across the complete trip rather than one shorter pickup.",
      },
    ],
    tradeoffs: [
      {
        title: "Urumqi's value is context, not a promise to show all of Xinjiang",
        advice:
          "A regional capital can introduce collections, food and contemporary life. Kashgar, Yining and Turpan have distinct settings and require their own time. Do not compress them into a single generic Silk Road experience or sell distant landscapes as local hotel excursions.",
      },
      {
        title: "A museum visit depends on the actual display",
        advice:
          "Choose the subject and current venue arrangements. Famous objects may be rotated, conserved or unavailable. Explain original material, reproductions and interpretation appropriately. A knowledgeable guide adds value without promising a specific gallery, researcher meeting or out-of-hours visit.",
      },
      {
        title: "The Grand Bazaar is a commercial place",
        advice:
          "Enjoy architecture, a selected meal or a genuine shopping interest while recognizing contemporary visitor infrastructure. Buying should be optional. A commercial performance is different from an invited cultural conversation, and neither establishes permission to enter private homes or photograph residents.",
      },
      {
        title: "Tianchi deserves its own route decision",
        advice:
          "The lake lies outside Urumqi in Fukang. Include the complete road journey, admission, internal transport and selected walking. Boats or cableways, where operating, are distinct optional services rather than automatic necessities. Clouds and weather can change the view and the available route.",
      },
      {
        title: "Time conventions need explicit agreement",
        advice:
          "Tickets and formal schedules use Beijing time. Informal local references can differ. Put the agreed convention in the written itinerary and confirm pickups with full dates, especially around early departures. Long summer evenings do not extend every venue's opening hours.",
      },
      {
        title: "Foreign-guest arrangements are checked for the actual route",
        advice:
          "Confirm documents, room check-in and any local or route-specific requirements before payment. Ordinary city sightseeing and a distant border or remote-area chapter are different planning scopes. Do not invent a blanket permit rule or promise unrestricted access from a general regional description.",
      },
      {
        title: "A high-end stay needs practical evidence",
        advice:
          "Ask what improves the trip: sleep, bathroom, climate control, guiding depth, meal suitability and realistic transfers. Decorative themes, premium labels and a private vehicle do not establish specialist expertise, quiet rooms or authorized cultural access. Confirm the actual providers and inclusions.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "sayram-lake",
        advice:
          "Sayram Lake adds a different mountain-lake setting in Bortala on a wider western Xinjiang route. Compare the actual dated connection, full roads and a named room before choosing a travel-day stop or settled stay. Flowers, still water and early access are not guaranteed by a scenic hotel label.",
      },
      {
        slug: "kuqa",
        advice:
          "Kuqa offers a distinct ancient Kucha, Kizil cave-art and Subash archaeology chapter. Confirm the actual traveler and site arrangements, dated connection and room before fixing the route. A regional gateway stay does not establish access to every cave or an open seasonal mountain road.",
      },
      {
        slug: "hemu",
        advice:
          "Hemu offers a distinct Altay village stay with cabin comfort, river walks and separately chosen winter or ski services. It requires actual local nights and a complete gateway-to-village road sequence. A flight or railway connection through Urumqi does not make Hemu a local excursion or include Kanas by default.",
      },
      {
        slug: "kanas",
        advice:
          "Kanas adds a northern Altay lake-and-forest chapter with its own local nights, gateway and full road transfers. Compare the actual flights or rail-and-road sequence and locate the room in Jiadengyu or the managed scenic area. It is not a day excursion from Urumqi, and Hemu needs a separate village plan if added.",
      },
      {
        slug: "turpan",
        advice:
          "Turpan adds oasis settlement, irrigation history and selected ruins. Compare a dated rail-and-transfer day visit with an overnight, especially in hot weather. The station, city hotel and scattered sites are different places; a short train segment is not the complete excursion.",
      },
      {
        slug: "kashgar",
        advice:
          "Kashgar provides a separate southern oasis-city chapter with its own neighborhoods and cultural interpretation. Compare actual flight or rail journeys and useful nights. It is not a return day trip from Urumqi or a substitute for the capital's museum context.",
      },
      {
        slug: "yining",
        advice:
          "Yining introduces Ili through city neighborhoods before separately chosen countryside bases. Review dated services and the full road sequence. Do not attach every lake and grassland to a brief Urumqi-and-Yining city break.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit a city-focused introduction, with variable temperature and wind still possible. Summer may support a wider regional route but can be hot in the city; Tianchi has a different mountain climate. Winter requires warm clothing, a properly heated room and current road and scenic-service checks. Choose the wider itinerary by actual interests and conditions, not one season label for all Xinjiang. Holiday demand and exhibition schedules also affect the city plan.",
    orientation:
      "Urumqi is Xinjiang's regional capital in the north of the region. The airport, principal railway station, Urumqi South, museum and Grand Bazaar create different transfers. Tianchi / Heavenly Lake lies in Fukang outside the city. Use full Chinese addresses, the actual ticketed station and terminal, and an explicit Beijing-time convention. Kashgar, Turpan and the Ili valley are separate destinations with distinct travel days and planning questions.",
    experiences: [
      "Understand regional history through a chosen museum collection",
      "Explore one coherent city food or bazaar interest without compulsory shopping",
      "Choose a separate Tianchi day or a realistic onward Xinjiang chapter",
    ],
    planningNotes: [
      "Confirm full gateways, hotel check-in arrangements and current venue entry procedures",
      "Put Beijing time, UTC+8, explicitly on pickups and dated transport",
      "Treat Tianchi and other Xinjiang destinations as separate route decisions",
    ],
    arrival:
      "Use the airport and terminal shown on the actual booking, or distinguish Urumqi Railway Station from Urumqi South on the rail ticket. Confirm the pickup point, documents, luggage and final road journey. Check any proposed service for the travel date rather than rely on an old route description. Keep arrival modest after a long journey and avoid making a reserved museum visit depend on an uncertain landing. Confirm the agreed time convention in every pickup message.",
    gettingAround:
      "Combine transfers with selected city walks and seated breaks. Allow the actual venue entrance and any document procedures. The museum and bazaar are not one continuous walking area. A Tianchi outing adds its own road, scenic transport, walking and weather decision; a city vehicle booking does not automatically include every activity. Follow local instructions and ask before portraits, religious-space visits or photographs of sensitive locations.",
    stayStrategy:
      "Keep one city base for two or three nights, chosen around the actual visits and gateways. Prioritize soundproofing, comfortable beds, bathroom, heating or cooling and suitable meals. A transport-area hotel may suit a brief connection, while a well-positioned city room can improve usable time on a longer stay. Confirm the actual property and category for the travelers, rather than infer service or check-in capacity from a booking platform label.",
    firstTimerNote:
      "Start with the role Urumqi plays in your trip. A collection and a meal can make a useful introduction before different landscapes and communities elsewhere in Xinjiang. Tianchi is optional, not a compulsory stop between flights. A thoughtful itinerary gives each chapter enough time and explains its particular value, avoiding a long sequence of generic bazaars, shopping and scenic drives presented as cultural depth.",
    faqs: [
      {
        question: "Is Urumqi worth visiting?",
        answer:
          "It can be worth two city nights for regional museum context, food and a considered introduction to Xinjiang. A transport-only night serves a different purpose. Decide by your interests and actual usable hours rather than add a city checklist around two inconvenient connections.",
      },
      {
        question: "How many nights do I need in Urumqi?",
        answer:
          "Two city nights allow one full introduction. Three can add a separate Tianchi outing or another distinct interest. One may provide only a meal and sleep. Include airport or station transfers and museum opening before judging the available time.",
      },
      {
        question: "Is Tianchi a day trip from Urumqi?",
        answer:
          "It can be planned as a separate excursion to Fukang when current roads, scenic operation and the guest's needs fit. Include entry, internal transport, walking and return. Weather can alter the view or route; a lake day should not depend on a fixed onward departure without adequate margin.",
      },
      {
        question: "Is the Grand Bazaar an ancient market?",
        answer:
          "The International Grand Bazaar is a contemporary commercial and visitor complex in the Erdaoqiao area. It can suit selected food, architecture or shopping interests, but should not be presented as an unchanged ancient market or a guaranteed private cultural encounter.",
      },
      {
        question: "Which Urumqi station should I use?",
        answer:
          "Use the full station on the dated ticket. Urumqi Railway Station and Urumqi South are distinct. Compare the actual service and both transfers; the destination city name alone does not identify the correct pickup.",
      },
      {
        question: "What time zone should we use in Urumqi?",
        answer:
          "Use Beijing time, UTC+8, explicitly for tickets and formal arrangements. If someone refers to an informal local convention, clarify the difference in writing. Confirm the date as well as the hour for early pickups and overnight transport.",
      },
      {
        question: "Can foreign visitors book any proposed Xinjiang route?",
        answer:
          "Do not assume blanket access or invent a blanket prohibition. Check each traveler's documents, actual hotel arrangements, current local conditions and any requirements for the specific areas. Ordinary city visits and remote or border extensions need separate review.",
      },
      {
        question: "Is there a published Urumqi tour on this page?",
        answer:
          "No matching published product is recommended. The outline supports a tailored request with dates, passports, gateways, room needs and interests. Actual access, local providers, transport and inclusions must be confirmed before booking.",
      },
    ],
    culturalStory: {
      title: "Use regional context without flattening local identities",
      paragraphs: [
        "A carefully chosen museum visit can introduce different periods, routes and communities represented in Xinjiang. Objects need provenance, context and a clear distinction between an original, reconstruction and interpretation. A good explanation also recognizes that one collection cannot represent every community's present life. Choose the actual display and the guide's knowledge rather than promise a single definitive story of the entire region.",
        "The city and Grand Bazaar show contemporary urban and commercial life alongside cultural references. A shop, restaurant, performance and consented hosted conversation are different experiences. Explain them as such, keep purchases optional and respect people who are working or worshipping. Cultural depth comes from specific, informed interpretation and room for questions, not an unsupported claim to exclusive access or an ancient atmosphere at every stop.",
      ],
    },
    foodStory: {
      title: "Choose a meal by kitchen and preparation",
      paragraphs: [
        "A selected meal might explore noodles, pilaf, grilled meats or baked breads, with the actual dish and preparation explained. The region's food traditions are varied; do not present every restaurant as interchangeable or assume a meat-heavy banquet suits everyone. A comfortable table, sensible portions and enough time to eat can add more than several hurried food-photo stops. A kitchen demonstration is a separate arrangement, not an automatic part of lunch.",
        "Discuss wheat, meat stocks, dairy, nuts, sesame, chili and shared utensils with the actual kitchen. Vegetarian ingredients do not prove vegetarian stock, and halal suitability needs establishment-specific confirmation. Serious allergies require capacity and alternatives rather than reassurance based on a dish name. Confirm prayer-aware timing and other needs when requested, without assuming a city label settles them.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual city room and rest",
        description:
          "Meet at the booked terminal or full station, using Beijing time and a clear pickup. Settle in, confirm meals and keep any short outing optional. Museum reservations should not depend on an uncertain arrival.",
      },
      {
        day: "Full city day",
        title: "A relevant collection and one coherent city interest",
        description:
          "Visit the confirmed museum or chosen alternative, then add a selected bazaar or neighborhood route and a seated meal. Allow transfers, entry procedures and rest rather than repeat shopping stops.",
      },
      {
        day: "Optional second full day",
        title: "Tianchi or a distinct cultural subject",
        description:
          "With a third night, give the mountain-lake outing a complete road, scenic-transport and walking plan with a weather alternative. Any boat, cableway or private host is separately selected and confirmed, not automatically included.",
      },
      {
        day: "Departure",
        title: "Start the next chapter with the full journey visible",
        description:
          "Use the correct gateway and onward service. This two-night city outline with an optional third night is illustrative, not a published package or guarantee of exhibits, scenic operation, special permissions or private cultural access.",
      },
    ],
  },
};
