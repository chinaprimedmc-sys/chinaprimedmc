import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qingcheng-mountain.svg",
  alt: "Qingcheng Mountain planning diagram comparing a mountain visit, a short overnight stay and a seven-night retreat; schematic, not a geographic map",
  width: 1600,
  height: 1200,
};

export const qingchengMountainGuide: ExpandedDestination = {
  id: "qingcheng-mountain",
  name: "Qingcheng Mountain",
  region: "southwest",
  kicker: "Daoist heritage, forest paths & time to stay",
  description:
    "Choose between a Qingcheng mountain visit and a slower resort stay near Chengdu, with walking routes, cultural context and genuinely unscheduled time planned separately.",
  stay: "2–3 nights; 7 for the retreat",
  bestFor: "Daoist culture and quiet mountain stays",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["dujiangyan", "chongzhou", "chengdu", "leshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qingcheng Mountain Travel Guide: Visits & Retreats",
    seoTitle: "Qingcheng Mountain: Travel Guide & Retreats",
    seoDescription:
      "Plan Qingcheng Mountain near Chengdu: compare day trips, overnight stays, walking routes and a private retreat with seven uninterrupted mountain-area nights.",
    answer:
      "Qingcheng Mountain, also written Qingcheng Shan, combines forested paths with an important Daoist cultural landscape near Chengdu. Visit for a focused mountain day if temples and walking are the priority, or stay nearby when a quiet hotel, tea and time outside a sightseeing schedule matter equally. A resort stay and a mountain climb are different experiences: choose the purpose first, then the route and number of nights.",
    stayAnswer:
      "A day trip can suit one selected mountain route from Chengdu, provided the return journey and walking fit the day. Two nights nearby give one full day for a mountain visit and a little hotel time; three nights allow Dujiangyan and Qingcheng on separate days. Our ten-day retreat makes a different commitment: two Chengdu nights followed by seven consecutive Qingcheng-area nights, with one hotel change and protected quiet time.",
    hotelAnswer:
      "Choose a Qingcheng-area resort for hotel time and access to a selected mountain entrance, Dujiangyan city for a more urban base and interest in the irrigation heritage, or Chengdu when the mountain is only one excursion within a city stay. Check the actual address and approach. A property described as near Qingcheng is not necessarily inside the scenic area, walkable to a temple or convenient for every mountain route.",
    sightseeingQuestion: "Should you take a Qingcheng Mountain day trip or stay overnight?",
    sightseeingAnswer:
      "Choose a day trip when one mountain visit is the goal and you prefer to keep your Chengdu hotel. Stay two or three nights if you want to separate the excursion from resort time or a Dujiangyan visit. Choose the seven-night retreat when the continuous base and slower rhythm are central to the holiday. Do not book a week simply to fit in more sights: the value is having fewer daily obligations.",
    visitorResources: [
      {
        label: "UNESCO: Mount Qingcheng and the Dujiangyan Irrigation System",
        href: "https://whc.unesco.org/en/list/1001/",
        scope:
          "Background on the World Heritage property and its cultural significance. This does not confirm current tickets, mountain transport, path conditions, resort availability or a private cultural session.",
      },
    ],
    serviceScope:
      "We plan the selected mountain route, transfers, hotel and any privately arranged cultural sessions around your interests and walking comfort. The proposal specifies the teacher or host, venue, language support and service hours where applicable. Public temples remain shared religious places. The retreat is non-medical: it provides no diagnosis, clinical treatment or promised physical or mental-health outcome.",
    routeAdvice:
      "Our ten-day private Qingcheng retreat starts with two nights in Chengdu and protects seven uninterrupted nights at a selected mountain-area resort. It includes a Dujiangyan half day, one tailored Qingcheng day, confirmed tai chi, tea and Daoist cultural interpretation, and two selected resort treatments per guest, planned for 60–90 minutes each subject to suitability and provider confirmation. Read the day-by-day meals and staffing before booking: Day 7 has no scheduled sightseeing, guide or vehicle, although its listed treatment and dinner are arranged. This is a retreat itinerary, not a short mountain excursion.",
    practicalPlanning: {
      timing:
        "Keep arrival and hotel check-in separate from an ambitious mountain walk. Give a selected Qingcheng route its own usable day, with room to shorten it for rain or fatigue. If Dujiangyan is equally important, consider a second day rather than compressing two substantial interests around a return to Chengdu. Place optional pandas or another city before or after a seven-night retreat, preserving the continuous stay.",
      walking:
        "Forest paths can involve slopes, long stair sections and slippery surfaces after rain. A shorter or lower route does not mean step-free access, and cableways or other scenic transport do not remove every approach. Review the actual route, entrance, rest opportunities and remaining stairs before booking. Resort paths, treatment rooms and the room itself need a separate access check.",
      cost: "Compare room category, number of nights, treatment inclusions, listed meals, guiding days and vehicle hours. Seven resort nights with selected sessions differ from a room-only break or daily private touring. Additional treatments, unlisted meals, flights and medical care are separate. A named resort or suite is confirmed only when specified in writing; the destination name does not establish a particular brand or service level.",
    },
    attractions: [
      "Mount Qingcheng Daoist cultural landscape",
      "Qingcheng forest paths",
      "Dujiangyan Irrigation System",
    ],
    stays: [
      {
        label: "Day trip: one mountain priority",
        advice:
          "Keep the Chengdu hotel and select a route that fits the full return journey. Leave out a second major attraction if it would turn the day into a race between entrances.",
      },
      {
        label: "2–3 nights: mountain and hotel time",
        advice:
          "Two nights provide one full day; three allow a separate Dujiangyan visit or a resort day. Choose a hotel you want to spend time in, rather than treating every extra night as a reason to add another excursion.",
      },
      {
        label: "7 nights: a continuous retreat base",
        advice:
          "The published retreat follows two Chengdu nights with seven in the Qingcheng area. Keep that sequence when the point is continuity, private sessions and protected quiet hours. A shorter stay needs a separate proposal.",
      },
    ],
    hotelAreas: [
      {
        name: "Qingcheng-area resorts and foothill stays",
        advice:
          "Consider when the hotel setting is part of the holiday. Check the exact mountain entrance served, road approach, room location, dining choices and wet-weather spaces. Confirm whether treatment rooms and breakfast require stairs or outdoor walks, particularly for a longer stay.",
      },
      {
        name: "Dujiangyan city",
        advice:
          "Consider for an urban base and a stronger focus on the irrigation system and local dining. It is a different setting from a secluded resort; compare daily transfers and evening surroundings before choosing it for a quiet retreat.",
      },
      {
        name: "Chengdu",
        advice:
          "Keep a city base when Qingcheng is one day within a panda, food and neighborhood itinerary. Confirm the hotel-to-entrance transfer rather than assuming the railway station name means arrival at the mountain gate.",
      },
    ],
    tradeoffs: [
      {
        title: "Front Mountain and Back Mountain are different choices",
        advice:
          "The Front Mountain is the usual starting point for an interest in Daoist temples; the Back Mountain is more associated with landscape walking. Do not treat them as interchangeable entrances or promise both in one relaxed day. Ask which route is proposed and check current access and transport before confirming the visit.",
      },
      {
        title: "A shorter walk still needs an access review",
        advice:
          "Describe comfortable stair counts or walking duration, knee concerns and the need for seated breaks. A cableway can change the effort but cannot establish that the entire visit is suitable. If the mountain does not fit, retain the hotel stay and choose a different cultural or garden-based activity.",
      },
      {
        title: "Private teaching depends on the teacher and setting",
        advice:
          "A tai chi session can introduce movement and practice at a suitable level; a Daoist cultural conversation explains ideas and context. Agree who leads each session, how it is interpreted and what participation involves. Do not assume temple ceremonies, private religious access or therapeutic care are part of either.",
      },
      {
        title: "Protect time that has no program",
        advice:
          "Decide how much support you want on quiet days. In the published retreat, Day 7 has no scheduled guide, vehicle or sightseeing. Its arranged treatment and dinner do not imply continuous staffing. Request any additional service in advance rather than filling the day by default.",
      },
    ],
    products: [
      {
        slug: "qingcheng-mountain-private-wellness-retreat-10-day",
        label: "Explore the 10-day private Qingcheng retreat",
        reason:
          "Choose this journey for two Chengdu nights and seven consecutive mountain-area nights, combining selected cultural sessions, one tailored mountain day and protected time at a resort. It includes two confirmed treatments per guest and breakfasts plus seven specified lunches or dinners. Compare the actual hotel, walking route, meal schedule and unescorted periods before deciding whether the retreat fits your holiday.",
        comparison: {
          bestFor:
            "Travelers who want a continuous resort base and cultural context, with fewer daily obligations.",
          localPlan: "Seven Qingcheng-area nights after two Chengdu nights; one hotel change.",
          importantChoice:
            "Non-medical retreat; Day 7 has no scheduled guide or vehicle. Named resorts and teachers require written confirmation.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "dujiangyan",
        advice:
          "Dujiangyan explains river division, sediment management and irrigation through a selected public heritage route. Give it separate useful time from a substantial mountain walk. The retreat includes a focused half day, while a town evening and local hotel are different choices from the Qingcheng resort base.",
      },
      {
        slug: "chongzhou",
        advice:
          "Chongzhou offers a different countryside chapter through Daoming bamboo craft, Jiezi or a carefully chosen rural room. Give a confirmed workshop its own time and compare exact property transfers. This is a separately planned extension; the published Qingcheng retreat does not automatically include Chongzhou visits.",
      },
      {
        slug: "chengdu",
        advice:
          "Begin with city time for tea, Sichuan food and an optional panda visit, arranged as its own day. Confirm whether the arrival airport is Tianfu or Shuangliu. The retreat uses two Chengdu nights before the mountain stay; extra interests may need extra nights.",
      },
      {
        slug: "leshan",
        advice:
          "Leshan adds a different heritage interest around the Giant Buddha and its river setting. Plan it as a separate outing or an extension before or after the retreat, with boat or land arrangements and walking reviewed independently. It is not a nearby substitute for the Qingcheng mountain day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit walking and time outdoors, with rain still possible. Summer brings humidity and wet-weather planning; winter can feel cold and damp, making room heating and indoor comfort especially important. Choose dates around the experience you want, check holiday demand and review conditions before the mountain day rather than treating any month as a promise of clear views.",
    orientation:
      "Qingcheng is a mountain-area stay near Dujiangyan, within the wider Chengdu travel region. A scenic entrance, a railway station, Dujiangyan city and a resort address are separate places. The Front and Back Mountain routes also serve different interests. Start with the actual hotel and route instead of treating every booking labeled Qingcheng as one compact destination.",
    experiences: [
      "Follow a selected temple-and-forest route with Daoist cultural context and realistic walking expectations",
      "Give Dujiangyan its own time to understand the irrigation landscape rather than using it as a hurried extra stop",
      "Balance confirmed tai chi or tea sessions with quiet hours at a resort you want to stay in",
    ],
    planningNotes: [
      "Compare the exact mountain route, remaining stairs and rainy-day alternative",
      "Confirm hotel location, room comfort and meal choices for the length of the stay",
      "Distinguish scheduled private sessions from unescorted hotel time and additional services",
    ],
    arrival:
      "Arrive via Chengdu or another agreed connection and plan the complete journey to the actual hotel. Chengdu Tianfu (TFU) and Shuangliu (CTU) are different airports. Rail may serve part of the journey, but the station-to-hotel or station-to-entrance transfer remains a separate leg. Share flight or train numbers, luggage and pickup requirements before selecting the route; do not book a tight mountain visit against an uncertain arrival.",
    gettingAround:
      "Use road transfers for hotel changes and the selected entrances, with service hours specified. Inside a scenic area, public shuttles, boats or cableways may form part of a route only when confirmed; private guiding does not make public transport exclusive. A hotel vehicle arrangement also does not mean a driver is available during every quiet afternoon.",
    stayStrategy:
      "For a longer stay, compare the room itself, heating or cooling, sound, privacy, bathroom access and the walk to meals. Ask what can be enjoyed comfortably in rain. A beautiful garden is valuable only if its paths and the room layout suit you. Choose meals and treatment appointments around the desired rhythm, keeping enough time without reservations.",
    firstTimerNote:
      "A wellness retreat is a style of travel, not a medical service. Explain relevant access needs and discuss treatment suitability with the provider. Neither the destination's Daoist heritage nor a premium resort label establishes a health benefit, a particular practitioner or access to private temple spaces.",
    faqs: [
      {
        question: "Is Qingcheng Mountain worth visiting from Chengdu?",
        answer:
          "Yes, if Daoist heritage and forest walking interest you and the selected route suits your mobility. Choose one mountain priority for a day trip. Stay nearby when hotel time, a separate Dujiangyan visit or a slower rhythm would make the extra hotel move worthwhile.",
      },
      {
        question: "Should I choose Qingcheng Front Mountain or Back Mountain?",
        answer:
          "Start with the Front Mountain for an interest in Daoist temples, or consider the Back Mountain for a more landscape-focused walk. Confirm the specific route, current access and remaining stairs. They are different visits, not two entrances to the same short walk.",
      },
      {
        question: "Can I visit Qingcheng and Dujiangyan in one day?",
        answer:
          "A selective combined day may be possible, but it leaves less time at each site and needs a realistic return journey. For cultural depth or a gentler pace, use separate days. Ask which sections and walking are included before deciding a combined visit is good value.",
      },
      {
        question: "Is Qingcheng Mountain suitable for travelers who cannot manage many stairs?",
        answer:
          "Suitability depends on the exact route. Lower paths and scenic transport can reduce effort but do not guarantee step-free access. Review remaining stairs and resort access individually; a hotel-based stay can still be worthwhile when the mountain walk is unsuitable.",
      },
      {
        question: "How long is the private Qingcheng retreat?",
        answer:
          "The core journey is ten days and nine nights: two nights in Chengdu followed by seven consecutive Qingcheng-area nights. It uses one hotel change. Optional pandas or another city chapter should be placed before or after the retreat rather than interrupting it.",
      },
      {
        question: "Does the retreat include a guide and driver every day?",
        answer:
          "No. Service follows the agreed program. Day 7 has no scheduled sightseeing, guide or vehicle, while its listed treatment and dinner are arranged at agreed times. Extra services and additional outings require confirmation and may change the cost.",
      },
      {
        question: "Is Six Senses Qing Cheng Mountain guaranteed?",
        answer:
          "A property such as Six Senses may be proposed, but the resort and room category are guaranteed only when named in writing. Compare the actual setting, access, dining and treatment arrangements rather than choosing solely from a brand reference.",
      },
      {
        question: "Are meals and spa treatments all included?",
        answer:
          "The published retreat includes hotel breakfasts, seven specified lunches or dinners, and two selected resort treatments per guest as confirmed. Day 4 lunch is independent. Treatments are planned for 60–90 minutes subject to suitability and provider confirmation; extra treatments and unlisted meals are separate.",
      },
    ],
    culturalStory: {
      title: "Give the Daoist landscape time to make sense",
      paragraphs: [
        "Qingcheng's significance is more than a collection of temple buildings. Its forested setting and religious history provide a way to discuss Daoist ideas, practice and the relationship between people and landscape. A thoughtful guide connects what you see with that context, selecting a route that leaves room for explanation rather than treating the mountain as a fitness target.",
        "Temples are shared places of worship as well as visitor sites. Follow local instructions on photography, dress and behavior, and ask before photographing people or rituals. A separately arranged cultural conversation or tai chi class adds value through the teacher and interpretation; it does not imply a private ceremony, personal spiritual authority or exclusive access.",
      ],
    },
    foodStory: {
      title: "Choose food that supports the stay you want",
      paragraphs: [
        "A longer resort stay needs more thought about food than a single restaurant reservation. Discuss breakfast timing, menu variety and how much dining you want at the property versus outside it. Sichuan food offers choices beyond a succession of hotpot meals; ask for a balance of flavors, preparation styles and spice levels that suits the group.",
        "Vegetable dishes are not automatically vegetarian: stocks, rendered fat and shared preparation need checking. Explain allergies and dietary requirements before menus are agreed. For the retreat, compare the seven specified included lunches or dinners with the remaining meals, so an unhurried day does not become an unexpected search for somewhere suitable to eat.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the chosen mountain-area base",
        description:
          "Transfer from Chengdu or the agreed gateway, check room access and keep the evening light. A late arrival is not the right moment to begin a mountain route.",
      },
      {
        day: "Full day 1",
        title: "One selected mountain route",
        description:
          "Visit for temple context and forest paths at your pace, with remaining stairs and transport reviewed beforehand. Shorten or change the plan when weather or walking comfort requires it.",
      },
      {
        day: "Optional full day",
        title: "Dujiangyan or time at the hotel",
        description:
          "With a third night, choose a separate irrigation-heritage visit or protect the day for hotel time. A private class or treatment is included only when specifically arranged.",
      },
      {
        day: "Departure",
        title: "Leave with a complete onward transfer",
        description:
          "Work back from the actual train or flight and allow for the hotel approach and station or airport. This short-stay outline is separate from the published seven-night retreat program.",
      },
    ],
  },
};
