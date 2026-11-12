import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jiayuguan.svg",
  alt: "Jiayuguan planning diagram comparing a selected corridor stop, one city night and a longer frontier-history stay; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const jiayuguanGuide: ExpandedDestination = {
  id: "jiayuguan",
  name: "Jiayuguan",
  region: "northwest",
  kicker: "A Ming frontier pass & a revealing pause on the Hexi Corridor",
  description:
    "Understand the Jiayuguan fortress in its desert-edge landscape, choose among separate wall sites, and decide whether a corridor stop or an overnight fits your Gansu journey.",
  stay: "1–2 nights, or a selective corridor stop",
  bestFor: "Ming frontier history and a deeper Gansu route",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["zhangye", "dunhuang", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jiayuguan Travel Guide: Fortress, Wall & Where to Stay",
    seoTitle: "Jiayuguan Travel Guide: Fortress & Hotels",
    seoDescription:
      "Plan Jiayuguan Fort, the Overhanging Great Wall and First Beacon. Compare a corridor stop with an overnight and connect Zhangye with Dunhuang realistically.",
    answer:
      "Jiayuguan is a Gansu city named for the fortified pass associated with the western end of the Ming Great Wall's main defensive line. Its value is the relationship between a monumental gate complex, wall remains and the narrow Hexi Corridor landscape. The fortress, Overhanging Great Wall and First Beacon are separate visits, not three names for the same entrance. Choose it for frontier history and context between Zhangye and Dunhuang rather than expecting another green, mountainous Beijing wall walk.",
    stayAnswer:
      "One night can support a selected fortress visit when the arrival or departure leaves usable time. Two nights give a full day for the pass and a complementary wall site without attaching them all to a long travel day. A through-stop can suit travelers who want only the principal fortress, provided luggage, vehicle service and the complete onward journey are planned. A longer stay should follow a specific history or museum interest rather than a fixed rule that every corridor city needs several days.",
    hotelAnswer:
      "For a short stay, a comfortable Jiayuguan city hotel with a practical vehicle approach and suitable meals is often the simplest base. A property toward the fortress can serve a particular sightseeing plan, but its actual room, food and transfer advantages need checking. An airport- or station-oriented hotel serves another purpose and is not automatically convenient for evening meals or the pass. Prioritize sleep, heating or cooling, breakfast timing and the real address over a generic Silk Road luxury label.",
    sightseeingQuestion: "Which Jiayuguan wall sites should you visit?",
    sightseeingAnswer:
      "Start with Jiayuguan Fort for the gates, courtyards, defenses and broader historical explanation. Add the Overhanging Great Wall, also called Xuanbi, when its steep stepped climb suits your interests and knees. Choose the First Beacon for a different sense of the wall's desert-edge setting and the nearby river gorge, checking the current visitor route. The three sites have separate locations and walking demands. Select a meaningful combination rather than assuming that a combined ticket makes every site essential or effortless.",
    visitorResources: [
      {
        label: "UNESCO: The Great Wall",
        href: "https://whc.unesco.org/en/list/438/",
        scope:
          "Background on the Great Wall as a wider historical defensive system. It does not establish current access to a particular Jiayuguan attraction, the authenticity of every visible structure or any site's ticket arrangements.",
      },
      {
        label: "Jiayuguan municipal government",
        href: "https://www.jyg.gov.cn/",
        scope:
          "City background and public notices. Confirm current scenic-area entrances, ticket scope, museum access, transport and visitor conditions with the actual operator for the travel date.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Jiayuguan visit with the named sites, hotel, guide, road service, admissions and onward connection itemized in the proposal. Private guiding should explain the pass and landscape in the language and depth you need. It does not mean private use of the fortress, access to closed towers or permission to walk unmaintained wall remains. A special museum, tomb or research visit requires its own authorization and cannot be assumed from the tour price.",
    routeAdvice:
      "Jiayuguan can provide frontier-history context between Zhangye's landforms and Dunhuang's Buddhist art. Compare a selective stop, one night and two nights according to the actual trains or road journey, baggage and desired sightseeing. This page does not currently recommend a published Jiayuguan product. The example below is for planning discussion; a written proposal should identify which wall sites, meals, hotel nights and transfer hours are included rather than treating every mentioned option as part of a package.",
    practicalPlanning: {
      timing:
        "Give the fortress time for explanation and a manageable route before adding another site. The Overhanging Wall and First Beacon require separate road legs and visitor arrangements. A long transfer plus all three sites can become a transit-heavy day. When continuing toward Dunhuang, count the whole road or rail connection and a proper meal, not simply the distance between city labels. Fixed departures should determine when the final visit ends.",
      walking:
        "Courtyards, wall-top access and towers present different surfaces and steps. The Overhanging Wall is a stepped climb, not a level alternative to the fortress. A visit to the pass can still be worthwhile with a ground-level focus if access and your needs align. For the First Beacon, review the current paths, viewing areas and edges rather than assuming a photograph establishes an easy route. Exposed wind, sun and winter cold may call for a shorter outdoor plan.",
      cost: "Compare the named sites, admission or combination-ticket scope, internal transport where applicable, road hours, guide time and hotel. A through-stop may need baggage arrangements and a different vehicle service from a city overnight. Extra museums, meals and corridor transfers should be separately identified. An inclusive ticket is not evidence of permission to enter every tower or use every attraction, and a premium quote should explain the actual service improvement.",
    },
    attractions: [
      "Jiayuguan Fort / Jiayu Pass",
      "Overhanging Great Wall / Xuanbi Great Wall",
      "First Beacon of the Great Wall",
      "Selected Jiayuguan museum interpretation",
    ],
    stays: [
      {
        label: "Selective through-stop: the principal pass",
        advice:
          "Focus on the fortress when the full vehicle or rail plan permits a useful visit. Establish luggage, pickup, meal and onward timing. Do not assume a train change alone leaves sufficient time to reach, understand and return from the site.",
      },
      {
        label: "1 night: a pause in the corridor",
        advice:
          "Use the available arrival or departure window for the pass, with another site only if time and walking ability support it. A late arrival followed by an early train is an overnight, not automatically a sightseeing opportunity.",
      },
      {
        label: "2 nights: a full frontier-history day",
        advice:
          "Give the fortress and one complementary wall site separate attention, with room for lunch and a suitable museum if open. Choose the second site by interest and effort instead of treating three entrances as a mandatory circuit.",
      },
    ],
    hotelAreas: [
      {
        name: "Jiayuguan city and established dining areas",
        advice:
          "A useful starting point for straightforward evening meals and a comfortable night. Check the exact room, road pickup, noise, temperature control and breakfast. City convenience does not place the fortress within walking distance.",
      },
      {
        name: "Properties toward the fortress area",
        advice:
          "Consider only when a particular hotel and its actual route improve the stay. Check meals, room quality and the full journey to the other wall sites and onward gateway. A fortress-area label does not prove a wall view or permission to visit outside public hours.",
      },
      {
        name: "Station- or airport-oriented accommodation",
        advice:
          "Choose for a genuine early or late travel need, using the correct gateway and address. Confirm dinner, breakfast and pickup rather than accepting an airport or station name as a complete location description. Avoid an extra hotel move solely for a small theoretical transfer saving.",
      },
    ],
    tradeoffs: [
      {
        title: "The Ming frontier is more useful than a claim to the end of every wall",
        advice:
          "Jiayuguan is commonly presented as the western end of the Ming Great Wall's main line. China's defensive walls have a much longer and more geographically varied history, so this should not imply that no earlier wall remains exist farther west. Ask the guide to explain the particular Ming pass and terrain instead of reducing it to a single national endpoint slogan.",
      },
      {
        title: "Restoration and surviving fabric need explanation",
        advice:
          "Visible towers, wall surfaces and visitor routes may include substantial restoration. A strong interpretation distinguishes the historical layout, surviving material and later work where evidence permits. Do not describe everything in a present-day photograph as untouched Ming construction. Rammed-earth remains elsewhere in the landscape also differ from the masonry wall sections many visitors first see near Beijing.",
      },
      {
        title: "A climb is optional, not proof of a complete visit",
        advice:
          "The Overhanging Wall adds height and exertion; the fortress provides its own architectural and historical value. Travelers with knee concerns or a preference for interpretation can choose a shorter route without losing the reason to stop in Jiayuguan. Review stairs, handrails and wind conditions before promising a wall-top experience for the whole group.",
      },
      {
        title: "Additional tombs and museums require a real subject",
        advice:
          "If painted Wei-Jin tombs or specialist collections interest you, establish the exact venue, what is currently accessible and how interpretation will work before extending the stay. An archaeological area is not a promise of an open decorated chamber. Keep any photography, confined-space and stair conditions explicit, and do not substitute an unconfirmed tomb visit for a booked corridor transfer.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "zhangye",
        advice:
          "Zhangye adds colorful Danxia, contrasting rock formations and city Buddhist heritage. Decide the actual travel day and park window before combining it with Jiayuguan. A late landscape session in Zhangye and an early pass visit require a realistic hotel and transport sequence.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang adds Mogao's Buddhist art, oasis context and selected dune time farther along the corridor. Its fixed cave visitor arrangements deserve their own day and hotel plan. Do not attach a full Jiayuguan circuit to a timed Mogao visit or call the intercity journey a free sightseeing day.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing offers a contrasting Great Wall setting, such as a selected Mutianyu visit, as well as imperial-capital history. The two can deepen a wider China journey but are not neighboring stops. Compare terrain, construction and purpose without assuming that visiting one wall makes every other section redundant.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring and autumn can suit outdoor history visits, with wind and temperature changes still important. Summer needs sun protection and pauses during exposed walking; winter can be very cold, with seasonal conditions and site access to check. Snow, clear mountain views and quiet courtyards are not assured. Choose a route that remains worthwhile through interpretation and a suitable hotel, rather than depending entirely on a dramatic landscape photograph.",
    orientation:
      "Jiayuguan city, the fortified pass, the Overhanging Wall and the First Beacon occupy different locations. The city lies in the Hexi Corridor between the wider Zhangye and Dunhuang chapters. Jiayuguan railway station and Jiayuguan South are separate pickups, and an airport arrival adds its own road leg. Nearby Jiuquan is another city name, not a reason to assume the same station, hotel or collection point.",
    experiences: [
      "Understand the fortified pass through its gates, defensive layout and relationship to the corridor landscape",
      "Choose a complementary wall site for its setting and actual walking demands rather than a mandatory three-stop circuit",
      "Use a comfortable city night and a regional meal to break a longer Gansu journey without losing the next destination's full day",
    ],
    planningNotes: [
      "Specify the fortress, Overhanging Wall and First Beacon separately when agreeing the route and ticket scope",
      "Match a through-stop or overnight to actual arrival, baggage and onward transfer arrangements",
      "Review steep steps, exposed weather and any optional tomb access before confirming the visit",
    ],
    arrival:
      "Use the exact airport or railway station on the booked ticket. Jiayuguan and Jiayuguan South railway stations are different meeting points; give the driver the service and station details rather than the destination name alone. Include luggage collection, the road journey to the hotel or pass, and any fixed onward departure. For a through-stop, agree how bags and pickup work throughout the visit before committing to a short connection.",
    gettingAround:
      "Use planned road transfers to connect the selected sites and gateway. Within each attraction, check the authorized route, any local transport and what walking remains. A private vehicle cannot automatically drive through pedestrian areas or remove stairs to a wall top. Confirm the final pickup point and service duration, especially when the same driver continues along the corridor rather than returning to a city hotel.",
    stayStrategy:
      "A good Jiayuguan night should make the wider trip easier: comfortable sleep, an appropriate dinner, a timely breakfast and a clear departure. Review bathroom, bedding, heating or cooling and room noise rather than booking only by category. If there is no particular hotel experience you want, keep one sensible base and avoid moving between city and gateway properties for marginal convenience. A second night earns its place when it provides an unhurried full day.",
    firstTimerNote:
      "Jiayuguan is most rewarding when you understand what the pass controlled and how the land shaped its defenses. A selected fortress visit with context can be enough for a traveler whose main interests lie elsewhere on the corridor. Guests who want more can add a complementary wall setting. Climbing every stair or visiting all ticketed sites is not a requirement for understanding the place.",
    faqs: [
      {
        question: "How long should I stay in Jiayuguan?",
        answer:
          "One night can support a selected fortress visit when arrival or departure leaves usable time. Two nights provide a full day for the pass and a complementary wall site. A through-stop is possible with a complete transport and baggage plan, but a short train connection does not automatically provide sightseeing time.",
      },
      {
        question: "Is Jiayuguan worth stopping at between Zhangye and Dunhuang?",
        answer:
          "Yes, if Ming frontier history and the fortified pass interest you. It adds a different subject from Zhangye's geology and Dunhuang's cave art. Choose a selective stop or overnight that preserves useful time in all three places rather than assuming a full three-site circuit fits every transfer day.",
      },
      {
        question: "Are Jiayuguan Fort and the Overhanging Great Wall the same site?",
        answer:
          "No. The fortress is the principal fortified pass complex; the Overhanging Wall, also called Xuanbi, is a separate stepped wall visit. The First Beacon is another location. Confirm which sites, road transfers and admissions your proposal includes.",
      },
      {
        question: "Is Jiayuguan the western end of the Great Wall?",
        answer:
          "It is commonly described as the western end of the Ming Great Wall's main defensive line. That does not mean it marks the limit of every Chinese wall built in every period. Earlier frontier remains farther west belong to a broader history that should be explained separately.",
      },
      {
        question: "Can I visit Jiayuguan without climbing steep stairs?",
        answer:
          "A selected ground-level fortress visit may be worthwhile, depending on current access and your needs. Wall tops and the Overhanging Wall have different stair demands. Ask for a route-specific review of surfaces, seating, entrances and pickup; do not rely on private transport as proof of step-free access.",
      },
      {
        question: "Does one Jiayuguan ticket include every wall attraction?",
        answer:
          "Check the current ticket category, named sites, validity and any separate transport or exhibition charges. Do not assume a combined ticket includes every activity or that every listed site should be visited in one day. The written proposal should state the selected route and included admissions.",
      },
      {
        question: "Where should I stay in Jiayuguan?",
        answer:
          "Start with a comfortable city hotel that suits meals and the actual road sequence. Consider a fortress-area property only when its room and location improve the stay, or gateway accommodation for a genuine travel need. Verify breakfast, temperature control, noise and the exact transfer rather than choosing by a broad hotel-area label.",
      },
      {
        question: "Is Jiayuguan South the same as Jiayuguan station?",
        answer:
          "No. They are different stations and require the correct pickup and transfer. Compare the complete station-to-site or station-to-hotel journey when selecting trains, and leave sufficient time for the return to your actual departure station.",
      },
    ],
    culturalStory: {
      title: "Read the pass as a system of movement and control",
      paragraphs: [
        "The fortress becomes more interesting when the visit follows the logic of its defenses: where an approach leads, how gates and enclosures relate, and why the surrounding corridor mattered. This was not a decorative landmark placed in an empty desert. Connect the architecture to the movement of people and goods and to the state's effort to manage a frontier. A guide who explains a few spatial relationships can make a compact visit more valuable than an exhaustive walk without context.",
        "Look at materials and setting as well as towers. Desert-region wall remains and restored visitor structures present a different view from the mountain masonry many travelers associate with Beijing. Ask which features are original, reconstructed or interpreted where reliable evidence allows. The landscape helps explain the pass, but distant mountains, light and visibility vary; its historical meaning should not depend on reproducing a famous photograph.",
      ],
    },
    foodStory: {
      title: "Give the corridor journey a proper meal break",
      paragraphs: [
        "A Jiayuguan stop need not be another hurried meal between stations. Noodle dishes, lamb preparations and simple cooked vegetables offer different directions for a regional lunch or dinner. Choose by the actual restaurant and preparation, with enough seated time after an exposed visit. A barbecue meal can appeal to some groups, while a quieter indoor table may suit guests who have already spent a long day on the road.",
        "Discuss meat preferences, wheat, broths, cooking oils, spice and any strict requirements before the restaurant is chosen. A northwest location or a lamb dish does not establish halal certification or suitable shared preparation. For an early departure, agree breakfast timing and what can genuinely be provided. A reliable meal and a good night's sleep often add more to a short corridor stay than an additional late activity.",
      ],
    },
    itinerary: [
      {
        day: "Arrival or through-stop",
        title: "Reach the actual gateway and choose the main visit",
        description:
          "Meet at the named station or continue by the agreed road service. Visit the fortress only when the complete arrival and onward schedule leaves useful time; otherwise settle into the city and keep dinner simple.",
      },
      {
        day: "Selected sightseeing window",
        title: "Understand the fortified pass",
        description:
          "Choose a manageable fortress route with historical explanation and breaks. This may fall on an arrival, full or departure day depending on the real tickets; it is not an extra full day created by a one-night stay.",
      },
      {
        day: "Optional full day with an additional night",
        title: "Add a complementary setting, not every available entrance",
        description:
          "Pair the fortress with the Overhanging Wall or First Beacon according to interest, steps and weather, avoiding a duplicate fortress visit if it was already completed. Consider a museum only with confirmed access and sufficient attention.",
      },
      {
        day: "Departure or onward road journey",
        title: "Protect the next corridor chapter",
        description:
          "Allow the complete transfer toward Zhangye, Dunhuang or the actual departure station. This is an illustrative planning sequence, not a published package or a promise that all three wall sites and optional visits are included.",
      },
    ],
  },
};
