import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jingdezhen.svg",
  alt: "Jingdezhen planning diagram comparing historical ceramics, contemporary studios and a hands-on class; schematic rather than a map or destination photograph",
  width: 1600,
  height: 1200,
};

export const jingdezhenGuide: ExpandedDestination = {
  id: "jingdezhen",
  name: "Jingdezhen",
  region: "east",
  kicker: "Porcelain history, working studios & a class with purpose",
  description:
    "Explore Jingdezhen through historical ceramics and contemporary makers, with a studio session chosen for what you want to learn and honest arrangements for firing and shipping.",
  stay: "3–4 nights",
  bestFor: "Ceramics, design and private creative travel",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: [
    "yaoli",
    "fuliang",
    "nanchang",
    "hongcun",
    "huangshan",
    "hangzhou",
    "wuyuan",
    "jianshui",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jingdezhen Travel Guide: Ceramics, Studios & Where to Stay",
    seoTitle: "Jingdezhen Travel Guide: Ceramics & Studio Visits",
    seoDescription:
      "Plan Jingdezhen for porcelain history, Taoxichuan and a meaningful pottery class. Compare hotel areas, studio access, firing and shipping before booking.",
    answer:
      "Jingdezhen in Jiangxi is worth visiting when ceramics are an interest you want to understand rather than simply buy. Its historical production, museums and contemporary studios offer different perspectives on porcelain. Begin with context, then choose a maker encounter or class that matches your curiosity and ability. A short pottery session is an introduction to one technique, not a complete porcelain-making process, and a studio visit is not automatically private access to a working artist.",
    stayAnswer:
      "Three nights give two full days: one for historical context and selected collections, another for a confirmed studio session and contemporary creative areas. Four nights allow more time for making, a separate craft neighborhood or a slower hotel stay. Two nights can work for one focused day, but should not promise a museum survey, several studios and a finished fired piece to carry away. Longer learning programs need a teacher and schedule designed for that purpose.",
    hotelAnswer:
      "Choose near Taoxichuan when its contemporary creative setting, nearby dining and time around the area are part of the stay. Compare central-city properties for a history-focused route and the actual addresses of your selected museums. A quieter property farther out can suit hotel time or a particular studio, but adds transfers and may limit independent meals. Check the precise room and pickup point; a ceramic-themed hotel is not proof of a working studio or included class.",
    sightseeingQuestion:
      "What is the difference between a Jingdezhen studio visit and a pottery class?",
    sightseeingAnswer:
      "A studio visit focuses on looking, discussion or a demonstration with a host who agrees to receive you. A class gives you time to try a specific technique with teaching and suitable materials. Neither automatically includes glazing, firing or international delivery. Agree the teacher, activity, language support, duration, group size and outcome before booking. If you want to meet a particular artist or learn an advanced process, that needs a separate confirmed arrangement.",
    visitorResources: [
      {
        label: "Jingdezhen municipal government",
        href: "https://www.jdz.gov.cn/",
        scope:
          "City background and public information. This does not confirm museum reservations, market dates, a named artist, private studio access, firing schedules or shipping services.",
      },
    ],
    serviceScope:
      "We can discuss a private Jingdezhen plan with guiding, transfers, hotels and any agreed ceramic session specified in the proposal. A worthwhile host explains the process and welcomes the visit on clear terms. Private artists, workshops and production areas are not automatically open. Name the learning goal, interpretation needs, purchase expectations and any firing or delivery arrangements before confirming; a cultural visit is not an authenticity appraisal or investment service.",
    routeAdvice:
      "Plan Jingdezhen as a tailored ceramics chapter rather than an unplanned shopping stop on a wider itinerary. It can be considered alongside Huizhou villages or another East China destination when the actual transport and interests justify the connection. This page does not currently recommend a published Jingdezhen package. Your proposal should specify the museums, host or class, hotel base and any post-visit handling of work rather than treating every option in this guide as included.",
    practicalPlanning: {
      timing:
        "Give historical context and hands-on learning separate useful windows. Leave time to reach the studio, meet the teacher, understand the materials and clean up; an uncertain train arrival is a poor basis for a fixed class. Contemporary markets, demonstrations and individual spaces have their own schedules. Confirm those for the travel date rather than assuming a creative district operates as one attraction with uniform opening hours.",
      walking:
        "Museums can involve substantial standing and movement between galleries. Creative districts and workshop areas may add uneven paving, thresholds, stairs and limited seating. For a class, ask about chair height, wheel or table setup, hand strength and whether a seated alternative is possible. A private session can adapt only within the teacher's facilities and the selected technique.",
      cost: "Compare teaching time, host expertise, materials, interpreter support, class size, private vehicle hours and admission. Establish whether glazing, firing, packing, domestic forwarding and international shipping are included or separate. Kiln results and transport risk need clear terms. A costly piece, a private appointment and a premium hotel do not automatically make a visit educational or suitable for your group.",
    },
    attractions: [
      "Jingdezhen Imperial Kiln Museum area",
      "China Ceramics Museum in Jingdezhen",
      "Taoxichuan creative district",
      "Selected Jingdezhen ceramic studios",
    ],
    stays: [
      {
        label: "2 nights: one focused full day",
        advice:
          "Choose historical context and one complementary interest. A short day should not be sold as an introduction to every process plus a finished piece ready for departure.",
      },
      {
        label: "3 nights: history and a studio day",
        advice:
          "Separate collections and kiln history from a confirmed class or host encounter. Leave some flexibility around individual opening arrangements and the time the group wants to spend looking.",
      },
      {
        label: "4 nights or more: deeper creative time",
        advice:
          "Add nights for a specific learning plan or a different craft interest. Check whether extra sessions genuinely progress the technique; more nights alone do not guarantee that a piece will be fired before you leave.",
      },
    ],
    hotelAreas: [
      {
        name: "Taoxichuan and its surrounding city area",
        advice:
          "Consider for a stay centered on contemporary ceramics, design and nearby evening time. Check the particular hotel's street, sound, room quality and actual walking route. Markets and events are date-specific, so choose a property you would enjoy without one.",
      },
      {
        name: "Central city for selected historical visits",
        advice:
          "Compare addresses against the actual museums, kiln-history visits and meals you want. A central label does not establish easy walking between all sites. Confirm pickup, luggage access and room comfort rather than relying on a short map radius.",
      },
      {
        name: "A quieter hotel or studio-oriented base farther out",
        advice:
          "Choose deliberately for the property or a particular confirmed host. Verify road transfers, meals and what you will do between appointments. A ceramic theme or rural setting does not establish workshop access, private teaching or resort-level service.",
      },
    ],
    tradeoffs: [
      {
        title: "Historical context and contemporary making complement each other",
        advice:
          "An imperial-kiln visit, a broad ceramics collection and a contemporary creative district answer different questions. Select the sequence that interests you instead of treating them as interchangeable shopping stops. Museum buildings, archaeological areas and exhibitions may have separate entry arrangements.",
      },
      {
        title: "Choose one technique for a short class",
        advice:
          "Wheel throwing, hand-building and surface decoration involve different skills and outcomes. Ask what a beginner can realistically attempt and what the teacher does afterward. A brief session should not promise mastery, a complete production process or a museum-quality result.",
      },
      {
        title: "Agree what happens to the object after the visit",
        advice:
          "Clay work may need drying, glazing and firing after you leave. Confirm who finishes it, what changes are expected, whether breakage or firing failure can occur and how packing and shipping are charged. Delivery dates, customs and damage claims require clear terms; a same-day class does not imply a finished item in your suitcase.",
      },
      {
        title: "Keep collecting separate from sightseeing",
        advice:
          "If buying matters, discuss budget and whether you want contemporary work, everyday objects or a specialist collecting interest. Ask for provenance, maker details and a receipt appropriate to the purchase. A guide's introduction is not an independent appraisal, authenticity guarantee or promise of investment value. Antiquities and culturally regulated objects need separate lawful export advice.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yaoli",
        advice:
          "Yaoli adds a riverside settlement and a separately chosen Raonan heritage or Wanghu nature visit beyond the city ceramics circuit. Compare a focused day with two rural nights, checking the room, meals and full roads. A heritage display is not a pottery class, and a city studio visit does not include Yaoli by default.",
      },
      {
        slug: "fuliang",
        advice:
          "Fuliang adds county history, a separately confirmed tea lesson and selected rural settings beyond the city ceramics circuit. Keep your Jingdezhen room for one focused excursion, or add a countryside stay when the actual property and activity justify it. Tea picking, Hanxi art and Yaoli are separate current choices, not automatic inclusions.",
      },
      {
        slug: "nanchang",
        advice:
          "Nanchang can add Tengwang Pavilion, selected provincial collections or a separately chosen Haihunhou archaeology excursion. Use it as a clear city chapter or gateway, comparing actual station and hotel transfers. Leave useful nights in Jingdezhen for ceramic learning rather than rely on repeated return journeys from the capital.",
      },
      {
        slug: "jianshui",
        advice:
          "Jianshui in southern Yunnan offers a different clay and polished purple-pottery tradition alongside courtyard architecture. Compare the actual making experience rather than assuming it is porcelain. This is a thematic link across China, not a neighboring studio visit or an included stop on a Jiangxi route.",
      },
      {
        slug: "wuyuan",
        advice:
          "Wuyuan adds village architecture and a rural stay. Choose a named village base and route, then calculate the full transfer before booking a studio session in Jingdezhen. Flowers, autumn color and Huangling displays are separate seasonal interests, not guaranteed scenery on every date.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun adds Huizhou architecture and a village stay, offering a different cultural chapter from ceramics. Compare the complete regional connection and road transfers. Do not put a fixed workshop immediately after an uncertain village-to-city arrival.",
      },
      {
        slug: "huangshan",
        advice:
          "Add Huangshan for mountain scenery only when its remaining stairs, hotel changes and route suit the group. Ceramics and the mountain need separate usable days, with luggage and the actual rail gateways planned rather than assumed.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds lake landscape and tea. Compare the full journey between the actual stations and hotels, and give each private host a realistic window. Tea and pottery can form a thoughtful craft-focused trip without requiring every day to be a class.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit city walks and time between creative spaces, with rain and busy periods still possible. Summer can be hot and humid; winter makes room heating and studio comfort important. Host availability, exhibitions and markets depend on the actual date. A useful museum-and-studio plan should not rely entirely on an outdoor event or a promise of live production at every stop.",
    orientation:
      "Jingdezhen is a working city in Jiangxi, not a single enclosed pottery attraction. Historical kiln areas, museum collections, Taoxichuan and individual studios occupy different addresses. Start with the subject you want to understand, then the hosts and route. Do not confuse a public creative district with approved access to every business or production space within it.",
    experiences: [
      "Connect porcelain history with selected collections and the imperial-kiln landscape",
      "Explore Taoxichuan or another confirmed creative area for a contemporary perspective on ceramics",
      "Try one clearly defined technique with a suitable teacher and written firing or delivery arrangements",
    ],
    planningNotes: [
      "Agree the class outcome, host, interpretation and purchase expectations before booking",
      "Separate making time from drying, firing and delivery after departure",
      "Choose the hotel against actual museum and studio addresses, not a broad ceramic theme",
    ],
    arrival:
      "Jingdezhen North railway station and Jingdezhen Luojia Airport are separate gateways, with onward journeys to the actual hotel or studio. Confirm the precise ticket and pickup point before arranging the first appointment. Leave room for check-in and a meal after travel. If connecting from another regional stop, calculate both road legs and the available transport rather than assuming a short map distance means an easy morning class.",
    gettingAround:
      "Use road transfers between selected museum and studio addresses, with manageable walking inside each area. Some workshops have limited vehicle approach, stairs or shared working spaces. Agree where the guide and driver wait during a class and what service continues afterward. Independent evening exploring works best when the hotel actually serves the area you want to use.",
    stayStrategy:
      "For a creative trip, a well-placed comfortable room and an informed host usually matter more than a themed lobby. Check breakfast, quiet, temperature control and a practical place for any purchases. If staying farther out, establish meals and transport between appointments. Keep enough unscheduled time to browse or reflect without turning every pause into another retail stop.",
    firstTimerNote:
      "Porcelain making involves multiple stages and different skills. Seeing a demonstration, trying a wheel and acquiring a finished object are separate experiences. Be clear about what you want to learn and what you expect to take home, then choose a session that can honestly deliver that outcome.",
    faqs: [
      {
        question: "Is Jingdezhen worth visiting if I am not buying ceramics?",
        answer:
          "Yes, if the history, design and processes interest you. Collections, kiln history and a thoughtfully hosted studio encounter can make a substantive cultural visit without a purchase. Confirm that shopping is optional and choose a program focused on learning.",
      },
      {
        question: "How many days should I spend in Jingdezhen?",
        answer:
          "Two full days, commonly with three nights, allow historical context and a separate studio or class day. Two nights can suit one focused day. Add time for a specific learning plan rather than assuming a longer stay guarantees a finished fired piece.",
      },
      {
        question: "Can beginners take a private pottery class in Jingdezhen?",
        answer:
          "A suitable session can be discussed with a confirmed teacher. Choose a specific technique and agree duration, materials, language support and the realistic beginner outcome. Accessibility and the table or wheel setup also need checking.",
      },
      {
        question: "Can I take my pottery home the same day?",
        answer:
          "Do not assume so. A clay piece may need drying, glazing and firing after the class. Agree whether the session produces an immediately portable object or requires later handling, with packing, delivery, risks and charges clearly stated.",
      },
      {
        question: "Is Taoxichuan the same as the Imperial Kiln Museum?",
        answer:
          "No. Taoxichuan is a contemporary creative district, while the imperial-kiln area provides a different historical and museum perspective. They are separate visits with their own addresses and opening arrangements.",
      },
      {
        question: "Are studio visits and artisan meetings guaranteed?",
        answer:
          "Only a host, date and terms actually confirmed in your proposal can be promised. Artists and production spaces are not automatically open to visitors. Public markets, retail shops, demonstrations and private appointments are different experiences.",
      },
      {
        question: "Can you arrange international shipping for ceramic purchases?",
        answer:
          "Discuss the seller's or studio's actual service before buying. Packing, insurance, costs, customs responsibilities and damage or firing-failure terms need agreement. Travel planning alone does not establish a guaranteed delivery date or independent authenticity assessment.",
      },
    ],
    culturalStory: {
      title: "Follow the work from historical objects to living practice",
      paragraphs: [
        "Jingdezhen's value is easier to understand when finished ceramics are connected with the skills and stages behind them. Historical collections can introduce form, decoration and production context; a confirmed contemporary studio visit shows how an individual maker approaches materials and design today. Those are complementary perspectives rather than evidence that every workshop repeats one uninterrupted historical practice.",
        "A good encounter leaves the maker room to work and the visitor time to ask useful questions. Establish interpretation, photography and any demonstration before arriving. Named artists and private studios should not be advertised without their agreement. The experience can be memorable because the explanation is precise, without claims of exclusive access or celebrity introductions.",
      ],
    },
    foodStory: {
      title: "Let meals support a day of looking and making",
      paragraphs: [
        "Looking closely in museums and concentrating in a class can be tiring in different ways. Keep a proper meal break and choose food near the day's route rather than adding another cross-city journey. Jiangxi cooking can be assertive in flavor and spice, so describe preferences before a menu is chosen instead of assuming every regional specialty will suit the group.",
        "Discuss allergies, vegetarian requirements and ingredients in stocks, sauces and shared preparation. A tea break in a studio is not necessarily lunch, and a creative-district visit does not automatically include a hosted meal. For a quieter hotel outside the central areas, confirm dinner and breakfast before relying on spontaneous alternatives after an evening appointment.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle in before the first appointment",
        description:
          "Transfer to the selected hotel, confirm the following day's bookings and keep the first evening local. Avoid tying a private class to an uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "Build the historical context",
        description:
          "Choose a museum and kiln-history chapter with time for interpretation and a meal. Add another collection only when it serves a different question rather than repeating the same overview.",
      },
      {
        day: "Full day 2",
        title: "Meet a process and try one technique",
        description:
          "Use the confirmed studio or teaching session, then explore a contemporary creative area if time and openings suit. Confirm what happens to any work after departure.",
      },
      {
        day: "Departure",
        title: "Finish the practical arrangements",
        description:
          "Check purchase receipts, packing and any agreed forwarding details before the station or airport transfer. This is an illustrative plan, not an automatically included published package.",
      },
    ],
  },
};
