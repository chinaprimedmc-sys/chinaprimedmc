import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wanning.svg",
  alt: "Wanning planning schematic comparing Riyue Bay surfing, Shimei Bay or Shenzhou Peninsula resort stays and a separate Xinglong coffee outing; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const wanningGuide: ExpandedDestination = {
  id: "wanning",
  name: "Wanning",
  region: "south",
  kicker: "Choose your bay before you book the beach holiday",
  description:
    "Compare Wanning's Riyue Bay, Shimei Bay and Shenzhou Peninsula for surfing, a comfortable resort stay and independent evenings, with Xinglong coffee and complete arrival advice.",
  stay: "4–6 nights for a coast-led stay",
  bestFor: "Surf interests, slower beach stays and Hainan coffee culture",
  interests: ["landscape", "food"],
  relatedDestinationIds: ["haikou", "sanya", "lingshui"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Wanning Travel Guide: Best Bays, Surfing & Where to Stay",
    seoTitle: "Wanning Travel Guide: Bays, Surfing & Stays",
    seoDescription:
      "Compare Riyue Bay, Shimei Bay and Shenzhou Peninsula for a Wanning stay, with surf-lesson questions, Xinglong coffee, hotel checks and arrival advice.",
    answer:
      "Wanning (万宁) is a city on Hainan's east coast, with several distinct beach areas rather than one compact resort town. Riyue Bay is the natural starting point for a surf-focused visit; Shimei Bay and Shenzhou Peninsula offer different settings for a property-led coastal stay. Xinglong adds an inland coffee and food interest. Choose the bay and actual hotel around how you want to spend the day: lessons, pool time, walking, meals or independent evenings. A Wanning address alone does not tell you which of those experiences is nearby.",
    stayAnswer:
      "Four nights give three full days for settling in, a selected activity and time to enjoy the property. Five or six nights allow another lesson, a coffee outing or simply more flexibility around weather. Three nights can work when the connections are convenient, but gives little room to recover a weather-dependent activity. Keep one base unless the second location genuinely changes the holiday. Moving between several Hainan bays can consume the downtime you came to enjoy.",
    hotelAnswer:
      "Choose Riyue Bay when access to the actual surf provider and the surrounding visitor scene matter most; check noise and the room's position rather than assuming every stay is a quiet retreat. Compare named properties at Shimei Bay or Shenzhou Peninsula for the room, pools, meals, shore route and independent dining. An Xinglong property serves a different inland stay. A sea-view room, a beachfront hotel and a usable supervised bathing area are separate features. Establish the exact daily routes before comparing a resort's headline rate.",
    sightseeingQuestion: "Is Riyue Bay, Shimei Bay or Shenzhou Peninsula right for you?",
    sightseeingAnswer:
      "Start with Riyue Bay for a surf-led holiday and a provider whose instruction suits your level. Start with Shimei Bay for a selected resort-and-coast setting, or Shenzhou Peninsula for a property whose room, grounds and daily facilities match your priorities. These are planning starting points, not guarantees of quiet, beginner waves or safe swimming. Non-surfers should compare the actual hotel day and dining rather than choose solely on surfing reputation. With a short stay, one well-chosen bay is usually more useful than a circuit of similar beach photographs.",
    visitorResources: [
      {
        label: "Wanning municipal government",
        href: "https://wanning.hainan.gov.cn/",
        scope:
          "Municipal background and public notices, mainly in Chinese. Confirm current beach guidance, weather-related restrictions and individual visitor arrangements with the responsible authority or operator. The city's surf reputation does not certify an instructor, guarantee suitable conditions or establish hotel services.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway reference for the named station and dated service. Wanning and Shenzhou stations create different local connections. Select using the actual property and service rather than assuming a station name places you beside the intended beach or surf school.",
      },
      {
        label: "National Immigration Administration of China",
        href: "https://en.nia.gov.cn/",
        scope:
          "Official immigration information for the passport, arrival route and complete itinerary. Hainan-specific entry arrangements should not be assumed to allow onward mainland travel. Confirm eligibility before committing to a combined island-and-mainland trip.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the exact room, occupancy, meal plan, airport or station transfers and any selected Xinglong or coastal outing. For surfing, name the provider, language, instructor-to-student arrangement, equipment, lesson format, ability requirements and cancellation terms. A private road transfer is not a private lesson, and a lesson is not supervised childcare. Hotel days need not include a guide and vehicle on standby. Tell us whether the priority is learning, rest, family facilities, food or quiet evenings so that the services support the holiday rather than fill every hour.",
    routeAdvice:
      "Wanning can be a slower coastal chapter after a more active China trip when flights and entry arrangements work. Sanya offers different bays and hotel choices; Lingshui provides another set of resort areas between the two. Compare named properties and experiences before booking multiple bases. No matching published Wanning product is recommended here. Use the illustrative four-night outline to request a tailored stay with actual activities and enough unscheduled time, keeping onward mainland travel consistent with the applicable entry arrangement.",
    practicalPlanning: {
      timing:
        "Protect the first full day for settling in and reviewing the actual beach, pool and lesson arrangements. Give a surf lesson a suitable window selected by the provider for current conditions rather than insisting on a fixed sunrise slot. Leave room for rest afterward. Put a coffee or food outing on a different day when it adds variety, and keep weather-dependent activities away from a tightly timed departure. There is no need to arrange a guided excursion every morning.",
      walking:
        "Large properties may involve a considerable walk between room, breakfast, pools and beach. Review lifts, slopes, buggy availability and the actual room location. Sand and surf entry are different from a paved shore walk; boat boarding is another assessment again. Ask about seating, toilets and shade for non-participants during a lesson. A hotel marked accessible still needs an individual room-and-route review, including the route to dinner and any activity meeting point.",
      cost: "Compare the exact room and occupancy, meals, full transfers and included facilities. Surf instruction, board rental, photography and transport to a lesson location may have different fees. Confirm equipment responsibility and what happens when conditions are unsuitable. Children's bedding, club sessions, pool heating or a particular resort benefit should not be inferred from general marketing. Premium value comes from the room, useful service and time to enjoy them, not a long list of activities that remain unconfirmed.",
    },
    attractions: [
      "Riyue Bay / Riyuewan for a specifically arranged surf interest",
      "Shimei Bay / Shimeiwan and a selected property's actual shore relationship",
      "Shenzhou Peninsula / Shenzhou Bandao as a separate hotel and coastal base",
      "Xinglong coffee culture through a defined tasting, collection or confirmed production visit",
      "A selected Xinglong food or tropical-plant interest with the venue and route specified",
      "Dongshan Ridge as an optional separate cultural-and-landscape outing with walking assessed",
    ],
    stays: [
      {
        label: "3 nights: a focused coastal break",
        advice:
          "Choose one base and use the two full days mainly for the property and one chosen interest. This works best with convenient connections. Do not promise a full surf course, an inland tour and several resort areas when the useful time is limited.",
      },
      {
        label: "4 nights: a balanced first stay",
        advice:
          "Three full days allow settling in, a lesson or other selected activity and a quiet day. A short Xinglong outing can be an alternative rather than a compulsory addition. Keep a useful plan for non-surfers and an alternative when the sea is unsuitable.",
      },
      {
        label: "5–6 nights: repeat an interest without rushing",
        advice:
          "Add another appropriate lesson, coffee visit or more hotel time. Extra days improve flexibility but do not guarantee surf conditions, sunshine or progress on a board. A second hotel should add a distinct experience large enough to justify packing and the complete transfer.",
      },
    ],
    hotelAreas: [
      {
        name: "Riyue Bay / a surf-led base",
        advice:
          "Map the room against the actual lesson provider, food and evening environment. The broader visitor scene can suit independent cafes and activity, but nearby music, traffic or construction can affect sleep. Confirm room quietness and facilities instead of assuming a surf-town address supplies either resort comfort or a secluded beach.",
      },
      {
        name: "Shimei Bay / a specific resort-and-coast stay",
        advice:
          "Compare the quoted room, shore route, pools, dinner and options outside the property. A partial sea view and direct beach access are different features. Establish swimming guidance and any supervised area on the day; a photograph of calm water is not a condition report for your stay.",
      },
      {
        name: "Shenzhou Peninsula / a property-led holiday",
        advice:
          "Choose for the actual property and its daily experience, not the peninsula label alone. Review room location, walking distances, usable facilities and independent dining. A station called Shenzhou is still a transfer away from the booked hotel, and the full arrival should be included in comparisons.",
      },
      {
        name: "Xinglong or Wanning city / a different inland purpose",
        advice:
          "Consider when a particular food, coffee or practical urban interest is the focus. These are not interchangeable beachfront hotel areas. Show the complete drive to the chosen coast and dinner options before choosing a lower rate or an inland resort described only under the city name.",
      },
    ],
    tradeoffs: [
      {
        title: "A famous surf bay does not guarantee a beginner lesson",
        advice:
          "Match the provider, spot and day's conditions to ability, swimming confidence and age. A beginner's introduction and an experienced surfer's session need different instruction and expectations. Ask how unsuitable conditions, fatigue or an early stop are handled. A private instructor cannot remove currents or guarantee standing up in one lesson. Non-participants need a comfortable plan rather than an assumption that everyone will enter the water.",
      },
      {
        title: "Surfing, sea swimming and a hotel pool are separate activities",
        advice:
          "Conditions appropriate for one activity do not establish suitability for another. Follow current local notices and the responsible provider's assessment. Check designated bathing arrangements, supervision and the actual pool's operation separately. Choose a property with an enjoyable land-based day so that the holiday does not depend on entering the sea whenever the group wants.",
      },
      {
        title: "Coffee deserves a clear format beyond a plantation photograph",
        advice:
          "Xinglong can add a worthwhile discussion of Hainan coffee and the area's overseas Chinese connections. A cafe tasting, display garden, roasting explanation and production visit offer different access. Confirm the venue, host, language and what can actually be seen. Growing, harvest and processing do not necessarily happen together during a short appointment, and a tropical setting is not proof of a private farm invitation.",
      },
      {
        title: "A quieter coast is not the same as an empty or private beach",
        advice:
          "Room position, holidays, nearby activity and the property's layout can matter as much as the bay. Do not infer exclusive shoreline access from a resort's photographs. Ask about music, family facilities, pickup, evening dining and a quiet room category. A good holiday can use a shared coast honestly described, without a promise of seclusion that has not been verified.",
      },
      {
        title: "Compare Wanning with Sanya before splitting the stay",
        advice:
          "Choose Wanning for a particular bay, surf interest or property, and Sanya for a different hotel or destination purpose. Neither city name is a universal quality ranking. A split stay works when the contrast deserves several nights; otherwise use one base and protect downtime. Airport choice, rail services, luggage and the final hotel drive should be visible before comparing headline flight prices.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "haikou",
        advice:
          "Haikou adds Qilou arcaded streets, Hainan collections and a selected volcanic-landscape excursion as a northern city chapter. Compare a useful city stay with a gateway-only night, using the exact airport or station and the full transfer to the Wanning property. Haikou's coast and winter conditions should not be assumed identical to the chosen Wanning bay.",
      },
      {
        slug: "sanya",
        advice:
          "Use Sanya's bay guide to compare actual hotel stays rather than treating the city as one interchangeable resort. A surf-led Wanning chapter and a particular Sanya property may complement each other, but require enough nights and the complete transfer. Sea swimming and facility access still need their own checks in either location.",
      },
      {
        slug: "lingshui",
        advice:
          "Lingshui adds Clear Water Bay, Xiangshui Bay and other purpose-specific stays farther along the east coast. Choose a distinct property or outing rather than moving for another similar sea-view room. Confirm whether the address is in Wanning or Lingshui before arranging pickup or comparing dinner and activity access.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler part of the year can suit a warm-weather break, while still bringing cloudy, windy or cooler periods. Warmer months require realistic expectations for heat, humidity, showers and storm disruption. Surf conditions are a separate consideration from comfortable pool weather and should be assessed for the guest's level by the provider. Typhoon-related restrictions can affect roads, trains, boats and beaches. Choose a property with room comfort, dining and alternatives you would enjoy even when an outdoor activity cannot operate.",
    orientation:
      "Wanning's city center, Riyue Bay, Shimei Bay, Shenzhou Peninsula and Xinglong create different travel patterns. They are not one walkable coastal strip. The English bay names may appear joined as Riyuewan or Shimeiwan; use the full Chinese property and activity addresses to avoid ambiguity. Hainan is the island province, not an airport or a compact resort district, and a Wanning stay does not automatically cover Sanya or Lingshui.",
    experiences: [
      "Choose the actual bay, room and daily facilities for a coast-led holiday rather than a list of hotel names",
      "Arrange suitable surf instruction or another defined coastal activity with a comfortable alternative for non-participants",
      "Add a focused Xinglong coffee or food interest with its venue, interpretation and complete journey clear",
    ],
    planningNotes: [
      "Compare Riyue Bay, Shimei Bay and Shenzhou Peninsula by the actual holiday you want",
      "Confirm lesson format, equipment, ability requirements and unsuitable-condition terms individually",
      "Match airport or station and any entry arrangement to the entire Hainan and mainland route",
    ],
    arrival:
      "Compare the full journey through Haikou Meilan Airport, code HAK, or Sanya Phoenix Airport, code SYX, including any onward rail and hotel transfer. They serve different parts of Hainan and are not interchangeable pickups. Wanning and Shenzhou stations have different relationships to individual properties. Choose the dated service and final address, send the ticket and luggage details, and arrange child seats or mobility assistance separately. A shorter train segment does not always produce the easier hotel arrival.",
    gettingAround:
      "Use planned transfers for arrival and a selected outing, leaving hotel days free when that serves the holiday. Confirm where a lesson actually begins and whether getting there is included. A car linking bays does not grant access to hotel facilities or make every coastal road a pleasant walk. For independent evenings, check the route to food and the return arrangement, especially at a more self-contained property. Keep the actual service hours clear rather than assuming a driver remains available all day.",
    stayStrategy:
      "Start with one base for four to six nights and compare the room you will occupy, not a mixed gallery of suites and villas. Review sleep, bedding, bathroom, climate control, breakfast, pool operation and dining. For couples seeking quiet, ask about room setting and nearby activity; for families, check occupancy, supervision and actual age rules. A premium stay should make the daily routine easier and more enjoyable without relying on an excursion every morning.",
    firstTimerNote:
      "You do not have to surf to enjoy Wanning, but you should choose it for a real reason: a particular hotel, coast, coffee interest or slower rhythm. Guests who want dense cultural sightseeing may prefer to keep more days elsewhere in China. A successful beach chapter has enough unscheduled time to use the property and a worthwhile alternative when the activity that inspired the booking cannot run.",
    faqs: [
      {
        question: "Where should I stay in Wanning: Riyue Bay, Shimei Bay or Shenzhou Peninsula?",
        answer:
          "Begin with Riyue Bay for an actual surf-led plan, or compare specific Shimei Bay and Shenzhou Peninsula properties for a resort stay. Check room quietness, pools, meals, shore access and full transfers. The bay name alone does not establish the right holiday or suitable sea conditions.",
      },
      {
        question: "Is Wanning worth visiting if I do not surf?",
        answer:
          "Yes, when a particular coast, property or Xinglong coffee interest appeals. Compare the non-surfing day, including meals, pool and walking, before choosing by surf reputation. A good hotel and one worthwhile outing can be enough; a short trip focused on major historical sights may be better served elsewhere.",
      },
      {
        question: "How many nights should I spend in Wanning?",
        answer:
          "Four nights allow three full days for settling in, one activity and rest. Five or six provide more flexibility or another lesson. Three can work with convenient connections. Additional days do not guarantee sunshine or surf conditions, so choose a stay that remains enjoyable on land.",
      },
      {
        question: "Is Riyue Bay suitable for beginner surfers?",
        answer:
          "A suitable provider must assess the lesson location, current conditions and your age, ability and swimming confidence. A famous surf destination does not make every spot or day appropriate for beginners. Confirm instruction, equipment, supervision and cancellation terms rather than expecting a guaranteed result from one lesson.",
      },
      {
        question: "Can I swim in the sea at every Wanning resort?",
        answer:
          "No. A beachfront address or a surf activity does not establish a suitable bathing area. Follow current local guidance and confirm supervision and conditions at the actual location. Check the pool separately and retain an enjoyable alternative when entering the sea is inappropriate.",
      },
      {
        question: "Can I visit a coffee farm in Xinglong?",
        answer:
          "Only with a specific venue and access confirmed. A cafe, display garden, tasting and working production visit are different experiences. Ask who hosts, what can be seen and which language is available. A harvest or processing demonstration should not be inferred from the name coffee farm.",
      },
      {
        question: "Should I fly to Sanya or Haikou for Wanning?",
        answer:
          "Compare the complete journey from SYX or HAK through any rail connection to the actual property. Both require an onward plan and serve different parts of Hainan. Choose by the dated service, luggage and final transfer rather than assuming either airport is simply Wanning's airport.",
      },
      {
        question: "Can I combine Wanning with mainland China under Hainan entry rules?",
        answer:
          "Check current official immigration guidance for your passport, arrival route and entire itinerary. Hainan-specific eligibility should not be assumed to permit onward mainland travel. Confirm the applicable arrangement before booking the connected journey; this guide does not determine entry eligibility.",
      },
    ],
    culturalStory: {
      title: "Let Xinglong add context to the coastal break",
      paragraphs: [
        "A Wanning stay can include more than a beach view without becoming a daily sightseeing tour. Xinglong's coffee and food offer a starting point for understanding connections between Hainan and overseas Chinese communities. The depth depends on the actual venue and interpretation: a cup in a cafe, an explained roasting process and a collection tell different stories. Choose one that gives the guest something to understand, rather than using a farm photograph as a substitute for access.",
        "The contemporary surf scene is another layer of the area, with visitor businesses and changing coastal life. It need not be presented as an untouched fishing village to be enjoyable. Respect working and residential spaces, agree photography and avoid turning a public neighborhood into an implied private encounter. A thoughtful local outing can stand alongside hotel time while keeping the reason for the holiday clear.",
      ],
    },
    foodStory: {
      title: "Plan a regional meal that suits the beach day",
      paragraphs: [
        "Wanning can offer Hainanese meals and Xinglong coffee without making seafood or caffeine compulsory. Dongshan goat is a recognizable regional subject when a suitable kitchen can explain its preparation; it need not turn into a compulsory climb at Dongshan Ridge. A few balanced dishes with vegetables, tofu and suitable fish or meat can be more comfortable than an overfilled tasting schedule between lessons and pool time.",
        "For seafood, agree species, live or prepared weight, cooking charges and the total price basis before ordering. Clarify fish stock, meat broth, dipping sauces, shellfish and shared preparation for dietary needs. Coffee tasting needs its own serving and caffeine expectations, especially later in the day. At a self-contained hotel, compare the actual dinner options and children's portions so that a pleasant room does not leave every meal dependent on an unplanned transfer.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen bay and settle in",
        description:
          "Transfer from the exact airport or station to the booked room, with dinner kept straightforward. Use only activities whose opening and access fit the actual arrival. A late connection should not carry an essential surf lesson or fixed coffee-host appointment.",
      },
      {
        day: "Full day 1",
        title: "Learn the property and the coast",
        description:
          "Enjoy the room, meals and usable facilities. Review any lesson with the provider against the day's conditions and the participants' abilities. Give non-surfers a comfortable plan and do not confuse a surfable sea with permission for unsupervised swimming.",
      },
      {
        day: "Full day 2",
        title: "One defined interest, with time afterward",
        description:
          "Choose suitable surf instruction or a focused Xinglong coffee-and-food outing with complete transport and interpretation. Leave an unhurried meal and hotel time. Additional nights can support a second lesson without guaranteeing the same conditions or a particular progression.",
      },
      {
        day: "Full day 3",
        title: "Keep a flexible coastal day",
        description:
          "Use the property, an agreed shorter outing or a weather-appropriate activity. Avoid spending the day moving between several similar beaches simply to complete a checklist. The stay should remain worthwhile when an outdoor operator cannot run.",
      },
      {
        day: "Departure",
        title: "Continue with the entire connection planned",
        description:
          "Allow the full airport or station journey, or move to a separately justified Lingshui or Sanya stay. Check the entry arrangement for any mainland continuation. This four-night outline is illustrative, not a published package or guarantee of waves, sunshine or private beach access.",
      },
    ],
  },
};
