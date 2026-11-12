import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xiamen.svg",
  alt: "Xiamen stay-planning diagram comparing the urban island, eastern coast and Gulangyu overnight; schematic rather than a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const xiamenGuide: ExpandedDestination = {
  id: "xiamen",
  name: "Xiamen",
  region: "south",
  kicker: "Coastal city days & a carefully planned Gulangyu visit",
  description:
    "Choose Xiamen for coastal city time and Gulangyu's layered architecture, with the right hotel base, ferry arrangements and a realistic balance of walking and rest.",
  stay: "3–4 nights",
  bestFor: "Coastal culture and a comfortable Fujian gateway",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["shantou", "quanzhou", "wuyishan", "guangzhou", "fujian-tulou", "sanya"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xiamen Travel Guide: Gulangyu, Hotels & Coastal Stays",
    seoTitle: "Xiamen Travel Guide: Gulangyu & Where to Stay",
    seoDescription:
      "Plan Xiamen and Gulangyu with hotel-area comparisons, ferry and luggage advice, coastal walks and a tailored connection to Quanzhou or Wuyishan.",
    answer:
      "Xiamen is a coastal city in Fujian that can combine neighborhood food, sea-facing walks and a visit to Gulangyu, the nearby island also known as Kulangsu. Choose it for a slower city chapter and a practical regional base, rather than expecting every coastal hotel to offer a beach-resort holiday. Gulangyu is a separate ferry visit with its own walking and luggage arrangements. Decide whether to visit for the day or stay overnight before choosing hotels and onward transport.",
    stayAnswer:
      "Three nights give two full days: one for a selected Gulangyu visit and another for Xiamen neighborhoods or coastal time. Four nights allow a slower hotel stay or another distinct interest. Two nights can suit one focused day, but should not promise Gulangyu, extensive city touring and a full regional excursion. Add Quanzhou or a Fujian Tulou chapter as a separate decision with the complete transfers, not as a spare afternoon.",
    hotelAnswer:
      "Choose an urban Xiamen Island base around your actual city interests and evening meals; compare Zhongshan Road and nearby areas with the specific hotel and vehicle approach in mind. An eastern coastal property may suit hotel time but adds different daily transfers. Stay on Gulangyu only when its atmosphere is worth the ferry, walking and luggage logistics. Xiamen North station and other mainland-area addresses are not the same location as an urban island hotel.",
    sightseeingQuestion: "Should you stay on Gulangyu or visit it for the day?",
    sightseeingAnswer:
      "Choose a day visit when you want to keep one Xiamen hotel and simplify luggage. Stay overnight when a particular property and island evening are central to the holiday, after checking ferry access, room conditions and the walk from the pier. An overnight does not guarantee quiet lanes or easy access to every building. Keep a fixed flight or train departure separate from a tightly timed ferry return.",
    visitorResources: [
      {
        label: "UNESCO: Kulangsu, a Historic International Settlement",
        href: "https://whc.unesco.org/en/list/1541/",
        scope:
          "Background on Gulangyu/Kulangsu's heritage significance. This does not confirm current ferries, pier rules, individual building admission, hotel access or a private interior visit.",
      },
      {
        label: "Xiamen municipal government, English portal",
        href: "https://www.xm.gov.cn/english/",
        scope:
          "City background and public information. Confirm the actual operator's date-specific ferry, transport and visitor instructions separately.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Xiamen plan with the selected hotel, guiding, road transfers, ferry arrangements and admissions specified in the proposal. A private guide does not make the scheduled ferry private or remove identity checks and public operating conditions. Gulangyu properties and private interiors require their own access confirmation. Explain walking, stairs and luggage needs before choosing an island overnight.",
    routeAdvice:
      "Plan Xiamen as a tailored city stay or Fujian gateway, possibly paired with Quanzhou for maritime history or Wuyishan for tea and landscape. Begin with the full days and actual arrival or departure tickets, then decide whether Gulangyu needs an overnight. We do not currently recommend a published Xiamen package on this page. The final proposal should state the hotel sequence, ferry, road service and any regional extension rather than treating all the examples below as included.",
    practicalPlanning: {
      timing:
        "Give Gulangyu a useful window that includes the road journey to the correct terminal, check-in or boarding procedures, ferry crossing and island walking. Group Xiamen city visits separately instead of promising a complete coastal circuit after an ambitious island day. A Tulou excursion needs its own substantial road plan and selected cluster; it is not another stop on the urban island.",
      walking:
        "Gulangyu's lanes can involve slopes, steps, uneven paving and a significant walk from the pier to a hotel or attraction. Reduced general road traffic does not mean step-free access. Review the actual route and any separately available assistance. Xiamen coastal walks also vary in shade, distance and road crossings; select a manageable section rather than a generic full promenade.",
      cost: "Compare hotel position, room category, ferry tickets, road transfers, guide time and individual site admissions. An island overnight may add luggage assistance and a different hotel transfer pattern. Coastal room views and resort facilities need room-level confirmation. Meals, scenic boats and regional visits should be separately identified rather than assumed from the words private tour or sea-view hotel.",
    },
    attractions: [
      "Gulangyu / Kulangsu",
      "Xiamen Zhongshan Road area",
      "Nanputuo Temple",
      "Selected Xiamen coastal walks",
    ],
    stays: [
      {
        label: "2 nights: one focused full day",
        advice:
          "Choose Gulangyu or a selective city introduction. Arrival and departure may leave little extra time, especially when the booked gateway is distant from the hotel.",
      },
      {
        label: "3 nights: city and island separately",
        advice:
          "Give the Gulangyu visit and Xiamen neighborhoods different days. Keep a proper meal and rest in the plan rather than turning every spare hour into another attraction.",
      },
      {
        label: "4 nights or more: stay for a distinct interest",
        advice:
          "Add hotel time or a separately selected regional chapter only when the transport and interests justify it. More nights do not remove ferry conditions or make distant places part of the same city day.",
      },
    ],
    hotelAreas: [
      {
        name: "Urban Xiamen Island and Zhongshan Road surroundings",
        advice:
          "Consider for neighborhood food and city-focused time. Check the actual street, room sound, pickup point and ferry-terminal journey. A central label does not establish proximity to the terminal used by your particular service.",
      },
      {
        name: "Eastern coast and sea-facing properties",
        advice:
          "Choose for a specific hotel and time there. Verify the room view, beach or promenade access, dining and daily road transfers. A coastal setting does not guarantee safe swimming, private beach access or full resort facilities.",
      },
      {
        name: "Gulangyu / Kulangsu",
        advice:
          "Choose deliberately for an island stay. Confirm the exact pier-to-room walk, stairs, luggage help, bathroom, temperature control and meals. A historic house can provide atmosphere without offering the access or sound insulation of a modern city hotel.",
      },
    ],
    tradeoffs: [
      {
        title: "Ferry planning begins with the actual service",
        advice:
          "Check the operator, departure terminal, arrival pier, date, ticket and identity-document requirements for your visitor category. Do not assume all departures use the nearest waterfront terminal or that a return service uses the same arrangement. Leave time for normal boarding and a weather-aware alternative.",
      },
      {
        title: "Read Gulangyu as more than an architecture collection",
        advice:
          "The island's history includes international connections, local communities and changing uses of buildings. Select a coherent walk and confirmed interiors rather than assuming every historic house is open. Respect residents and ask before photographing people or entering private spaces.",
      },
      {
        title: "Island atmosphere and hotel comfort are separate",
        advice:
          "A quiet-looking lane does not prove a quiet room, and a small island does not make luggage easy. Compare the actual room and route to it. Guests prioritizing road access or a simpler departure may prefer a Xiamen hotel with a daytime island visit.",
      },
      {
        title: "Choose a regional excursion by its own value",
        advice:
          "Quanzhou, Tulou clusters and Wuyishan offer different experiences and travel demands. Do not add them merely because a map labels them Fujian. Select the place, complete connection and usable time, then decide whether another overnight improves the trip.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "shantou",
        advice:
          "Shantou adds Little Park’s port-city streets and an urban Teochew food stay, with a separate Nan’ao Island decision. Choose distinct subjects and useful nights rather than repeat the same tasting list. Compare exact stations and full hotel transfers; the wider Chaoshan name does not make every city or island a local stop.",
      },
      {
        slug: "sanya",
        advice:
          "Sanya adds a more hotel-led tropical stay, a different purpose from Xiamen's coastal city and Gulangyu architecture. Choose the actual bay, room and facilities, then compare flights and both hotel transfers. Check immigration eligibility for the complete itinerary; a Hainan-specific arrangement should not be assumed valid for a mainland chapter.",
      },
      {
        slug: "fujian-tulou",
        advice:
          "Choose a named Tulou cluster for an architectural excursion or a separately checked village overnight. Include the full road journey and do not assume every building is circular or every interior is open. Keep the visit away from a tight Gulangyu return or fixed departure.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou adds a different maritime heritage story and southern Fujian food. A selective day visit may work with the full transport plan, while separate nights provide greater depth. Count station transfers rather than treating rail time as the complete excursion.",
      },
      {
        slug: "wuyishan",
        advice:
          "Wuyishan adds rock tea and scenic walking with its own hotel and weather considerations. Compare the actual stations, daily services and both road transfers. Keep a fixed tea-host appointment away from an uncertain arrival.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds Cantonese food and a different southern city history. Choose the complete flight or rail connection around your wider itinerary rather than assuming the two coastal regions form a short local transfer.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit city walks and coastal time, with rain and variable temperatures still possible. Summer can be hot and humid and needs attention to coastal storms and current notices; winter is not a guaranteed beach season. Ferry operation follows actual conditions. Choose a comfortable hotel and a useful city alternative so the visit does not depend entirely on one crossing or a clear sea view.",
    orientation:
      "Xiamen includes an urban island and wider mainland areas. Gulangyu is a separate island, reached through the booked ferry arrangement. The airport, Xiamen railway station, Xiamen North and individual coastal properties occupy different locations. Work from actual tickets and addresses rather than treating every Xiamen booking as near the same city center.",
    experiences: [
      "Explore a selected Gulangyu route with architectural and community context, using confirmed ferry arrangements",
      "Choose a Xiamen neighborhood walk and southern Fujian meal at a manageable pace",
      "Leave meaningful time for a well-chosen coastal hotel or a separate regional cultural chapter",
    ],
    planningNotes: [
      "Confirm the ferry terminal, pier, ticket and document requirements rather than assuming the nearest departure",
      "Review Gulangyu slopes, room stairs and luggage before choosing an overnight",
      "Keep station and airport deadlines separate from a tightly timed island return",
    ],
    arrival:
      "Use the airport or railway station stated on your actual ticket and reconfirm the airport and terminal near travel. Xiamen and Xiamen North railway stations are different pickups. Include the road transfer to the exact property, especially for mainland-area or coastal hotels. If sleeping on Gulangyu, the ferry and final luggage approach add further legs; a late arrival may be better served by an urban first night.",
    gettingAround:
      "Road transfers connect the selected urban and regional points, while Gulangyu requires the booked ferry and a suitable island route. Do not assume the same vehicle travels with you or reaches the island hotel. Any local mobility assistance has its own availability and rules. For independent city time, choose routes around the actual hotel and walking comfort rather than a city-wide checklist.",
    stayStrategy:
      "Decide whether the hotel is primarily a convenient city base or part of the holiday through its setting. Check privacy, noise, room temperature, bathroom, meals and pickup. A heritage island room and a modern sea-facing property provide different comforts. Keep hotel changes proportionate to a short stay, allowing enough time to enjoy whichever setting you choose.",
    firstTimerNote:
      "Xiamen and Gulangyu can be a relaxed chapter when the logistics are explicit. The island crossing is not just a line on a map, and a coastal view is not a complete resort specification. Choose the actual room and route, then let the available time determine the sightseeing.",
    faqs: [
      {
        question: "How many days should I spend in Xiamen?",
        answer:
          "Two full days, commonly with three nights, allow a Gulangyu visit and a separate city or coastal day. Two nights suit a more focused introduction. Add regional travel with its full connections rather than counting it as spare city time.",
      },
      {
        question: "Are Gulangyu and Kulangsu the same island?",
        answer:
          "Yes. Gulangyu is also known as Kulangsu, the name used in the UNESCO listing. It is separate from Xiamen's urban island and requires a specific ferry and onward walking plan.",
      },
      {
        question: "Should I sleep on Gulangyu or stay in Xiamen?",
        answer:
          "Stay on Gulangyu for the particular property and island evening if stairs and luggage work for you. Stay in urban Xiamen for simpler road access and a single city base, visiting the island by day. Check exact room and ferry arrangements before choosing.",
      },
      {
        question: "Which ferry terminal should I use for Gulangyu?",
        answer:
          "Use the terminal and arrival pier specified by the actual operator and ticket for your date and visitor category. Do not assume the nearest terminal serves your booking. Check identity requirements, boarding time and return arrangements separately.",
      },
      {
        question: "Is Gulangyu suitable for travelers with limited mobility?",
        answer:
          "Suitability depends on the actual pier, route, hotel and available assistance. Slopes, uneven paving, stairs and substantial walking can remain. A generally car-free environment does not make every route step-free.",
      },
      {
        question: "Can I visit Fujian Tulou as a short Xiamen outing?",
        answer:
          "Tulou visits need a named cluster and a substantial separate road plan. Compare a full excursion with an overnight if the buildings and village context are important. Do not attach a distant cluster to a packed Gulangyu or departure day.",
      },
      {
        question: "Can I combine Xiamen and Quanzhou?",
        answer:
          "Yes, with the actual rail services and complete hotel transfers planned. A focused day visit is different from a deeper Quanzhou stay. Give each place time for its distinct cultural interests rather than duplicating a hurried city introduction.",
      },
    ],
    culturalStory: {
      title: "Understand an island through more than its facades",
      paragraphs: [
        "Gulangyu's architectural variety becomes more meaningful when connected to its international history and local communities. A carefully selected walk can explain different building uses and relationships without assuming every interior is open. Give the guide time for context rather than moving only between the most photographed viewpoints.",
        "The island remains a place of homes, businesses and ordinary daily movement. Follow visitor instructions, respect private doorways and ask before photographing people. An overnight provides a different rhythm but not ownership of the lanes. The strongest experience comes from a good route and interpretation, not a promise that the island will be empty or reserved for your group.",
      ],
    },
    foodStory: {
      title: "Leave room for a southern Fujian meal",
      paragraphs: [
        "Xiamen's neighborhood food can provide a welcome change from a day of ferries and walking. Seafood, noodles and local snacks offer different directions, but choose according to the group's appetite and preferences. A seated meal near the route can be more comfortable than an extended tasting circuit, particularly in heat or after a hilly island walk.",
        "Confirm ingredients and preparation for allergies and dietary needs. Seafood, broths, sauces and shared cooking can matter even when a dish's name is unfamiliar or sounds vegetable-based. A scenic island stay may have fewer suitable alternatives close by, so discuss dinner and breakfast before booking. A ferry ticket or city visit does not automatically include meals.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the base that serves the stay",
        description:
          "Transfer from the actual gateway and keep the first evening local. Add an island hotel only when the ferry and luggage approach fit the arrival.",
      },
      {
        day: "Full day 1",
        title: "Gulangyu with a coherent route",
        description:
          "Use confirmed ferry arrangements and selected walks or interiors. Allow for boarding, rest and a meal rather than treating the crossing as instant access to every attraction.",
      },
      {
        day: "Full day 2",
        title: "City neighborhoods or coastal time",
        description:
          "Choose a different Xiamen perspective and leave time for the hotel. A regional excursion is separately assessed and does not automatically fit this city day.",
      },
      {
        day: "Departure",
        title: "Protect the onward gateway",
        description:
          "Work backward from the booked train or flight, including any island crossing and baggage. This outline is illustrative rather than a published package with all options included.",
      },
    ],
  },
};
