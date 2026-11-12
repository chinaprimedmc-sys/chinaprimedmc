import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/changsha.svg",
  alt: "Changsha planning schematic comparing a museum-led city day, a separate west-bank route and actual hotel and rail choices; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const changshaGuide: ExpandedDestination = {
  id: "changsha",
  name: "Changsha",
  region: "central",
  kicker: "Han-dynasty discoveries, Hunan food and a city with its own rhythm",
  description:
    "Plan Changsha for Hunan Museum, selected city streets and regional food, comparing hotel areas, Yuelu walking and a separate Zhangjiajie chapter.",
  stay: "2–3 nights",
  bestFor: "Han-dynasty archaeology, Hunan food and a cultural city chapter before the mountains",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["zhangjiajie", "wuhan", "guilin"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Changsha Travel Guide: Museum, Food & Where to Stay",
    seoTitle: "Changsha Travel Guide: Museum, Food & Hotels",
    seoDescription:
      "Plan 2–3 nights in Changsha: Hunan Museum reservations, Mawangdui discoveries, hotel areas, Yuelu walking, food and full Zhangjiajie connections.",
    answer:
      "Changsha (长沙), the capital of Hunan, is a worthwhile city stop for Han-dynasty archaeology, regional food and contemporary urban life. Two nights provide one full day for Hunan Museum and a selected city or riverfront interest; three add a separate west-bank chapter around Yuelu Academy or another distinct subject. The museum displays discoveries from the Mawangdui Han tombs, which should not be confused with a tour through the original tomb site. Choose the actual hotel, reservation and transport before filling the day. Changsha is not inside Zhangjiajie, and a short rail segment does not make the mountain parks an effortless city excursion.",
    stayAnswer:
      "Two nights suit a focused first visit when the museum reservation and arrival pattern fit. Three nights leave a second full day for Yuelu Academy, selected walking, food or a slower pace. One night can work as a connection but may provide only an evening meal if transport is late and early. Do not add nights solely for repeated shopping districts or viral snack queues. Count the full transfer to Changsha South or the actual airport, and leave Zhangjiajie's park days separate from the journey there.",
    hotelAnswer:
      "Compare a central east-bank address near selected dining and city interests with a specific west-bank property around Yuelu or Meixi Lake, and a transport-oriented hotel for a real early departure. Wuyi Square and the busiest commercial streets can be convenient but noisy; check the exact room, glazing, orientation and pickup. A Meixi Lake property may offer a different room and setting, with extra travel to the museum and central evenings. A station-area room solves a connection need rather than the same city experience. Choose by all daily journeys, sleep and meals, not a generic central or luxury label.",
    sightseeingQuestion: "Should you prioritize Hunan Museum, Yuelu Academy or Orange Isle?",
    sightseeingAnswer:
      "Choose Hunan Museum for Mawangdui discoveries and the broader regional collection, subject to the actual reservation and exhibits. Yuelu Academy introduces a separate history of learning and architecture on the west bank; its visit does not require a full Yuelu Mountain climb. Orange Isle / Juzizhou offers another urban river landscape, with long distances and any current internal transport assessed separately. For one full day, a museum and one coherent city interest can be enough. With a second day, choose a meaningful west-bank route rather than promise the academy, summit, whole island and every old street as one easy outing.",
    visitorResources: [
      {
        label: "Hunan Museum",
        href: "https://www.hnmuseum.com/",
        scope:
          "Museum reference for collections and current visitor information. Confirm the actual reservation procedure, passport handling, opening, exhibitions and any separately ticketed display. A collection description does not guarantee that a particular object, gallery or guided service is available on your dates.",
      },
      {
        label: "Changsha municipal government",
        href: "https://www.changsha.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Check individual institutions and operators for Yuelu Academy admission, mountain routes, island access and local transport. Municipal information does not confirm a room, performance, private host or a current scenic service.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains, full station names and tickets. Changsha South, Changsha station and the selected Zhangjiajie arrival are distinct planning points. Include both hotel transfers and the final park-area journey rather than compare only the intercity segment.",
      },
    ],
    serviceScope:
      "A Changsha proposal should name the hotel and room, actual gateway, complete transfers, museum reservation basis, guiding language, selected walks and meals. State whether a specialist archaeology explanation or an institution-arranged service is genuinely available rather than equate routine escorting with curatorial access. Restaurant demonstrations, private hosted visits, performances and religious interiors require separate consent and confirmation. A private guide does not guarantee a museum slot, closed-gallery entry, a quiet shopping street or exclusive use of the riverfront. Keep purchases optional and confirm serious dietary requirements with actual kitchens.",
    routeAdvice:
      "Changsha can provide archaeological context and Hunan food before a separate Zhangjiajie landscape stay. Wuhan offers different regional collections and a Yangtze city setting; Guilin adds another distinct landscape chapter through actual dated transport. No matching published Changsha product is recommended here. Request a tailored stay with dates, museum priorities, room and sleep preferences, spice and dietary needs, walking tolerance and onward bookings. Existing Zhangjiajie products should not be assumed to include Changsha sightseeing, hotel nights or these additional transfers.",
    practicalPlanning: {
      timing:
        "Confirm the museum day before locking the rest of the city sequence, with the passport and reservation process understood. Keep lunch and a seated break between collection viewing and a selected street or waterfront route. Changsha's evening food and commercial areas can be lively, but a late night is optional. Give Yuelu or Orange Isle a realistic window with current transport and walking; do not attach every west-bank interest to a fixed onward train. Heat, rain and crowds may justify a shorter outdoor plan.",
      walking:
        "Museum galleries involve standing and walking, while city lanes add paving, crossings, thresholds and crowds. Yuelu Academy and Yuelu Mountain have different demands; a mountain summit is not an automatic part of the academy visit. Orange Isle can involve substantial distance even where internal transport operates. Assess the actual route, seating, toilets, steps and pickup. A private vehicle helps between places but does not make every historic interior or island path step-free.",
      cost: "Compare the exact room, quietness, breakfast, full gateway transfers, guiding language and actual admissions. Reservation support is a service question even where a permanent collection has no standard admission charge; do not imply that paying a premium guarantees entry. Clarify any island transport, separate exhibition, specialist interpretation or food session. A food walk and a seated tasting meal are different arrangements with different inclusions, and a higher quote should explain the practical improvement rather than promise exclusive cultural access.",
    },
    attractions: [
      "Hunan Museum and selected Mawangdui Han-tomb discoveries, with reservations confirmed",
      "Yuelu Academy as a focused learning-history and architecture visit",
      "A separately chosen Yuelu Mountain route when the actual climb suits",
      "Orange Isle / Juzizhou with current access and remaining distances reviewed",
      "Selected public streets such as Taiping Street or Chaozong Street, with present commercial life explained",
      "A Hunan meal or a coherent food route suited to the guests, without compulsory queues",
      "A Meixi Lake design or property interest only when it contributes something distinct",
    ],
    stays: [
      {
        label: "1 night: a selective connection and evening",
        advice:
          "Use the actual gateway and a comfortable room, with dinner and a short walk if timing allows. A late arrival and early departure are not a museum introduction. Do not depend on an unconfirmed reservation to justify a brief stop.",
      },
      {
        label: "2 nights: one museum-led city day",
        advice:
          "Give a relevant collection proper time, followed by one coherent street, food or river interest. Keep one base and allow rest. Prioritize useful explanation over a checklist of every famous snack and shopping area.",
      },
      {
        label: "3 nights: a distinct west-bank or slower city chapter",
        advice:
          "Add Yuelu Academy and an appropriately selected route, or a different substantive interest. Review the actual walking and cross-river journeys. A mountain climb, whole-island circuit and late evening should not all be compulsory simply because another day is available.",
      },
    ],
    hotelAreas: [
      {
        name: "Central east bank / dining and city evenings",
        advice:
          "Compare the precise address around Wuyi Square or another suitable central area, including street activity, room orientation, soundproofing and vehicle access. Proximity to nightlife is a tradeoff, not a universal benefit. The museum and west-bank sights still need their own routes.",
      },
      {
        name: "Yuelu or Meixi Lake / a specific west-bank setting",
        advice:
          "Choose a named property for actual room comfort, a relevant local interest and the daily transport pattern. These are broad areas, not one interchangeable hotel zone. Check dinner options and the return from central evenings; lake branding does not guarantee a view from the quoted room.",
      },
      {
        name: "Changsha South or airport-oriented accommodation / a real transport need",
        advice:
          "Use the correct station or terminal and actual service time. Compare meals, room facilities, transfer operation and the complete stay. An early connection can justify this choice, but a transport-area room should not be sold as the same central city experience.",
      },
    ],
    tradeoffs: [
      {
        title: "Mawangdui discoveries and the original tomb site are different visits",
        advice:
          "The museum collection is the principal starting point for understanding excavated objects and the Han-period burial context. A separate archaeological-site interest has its own location and current access. Do not promise an underground tomb tour from a museum reservation or treat an exhibit as the untouched original burial chamber.",
      },
      {
        title: "A museum slot needs confirmation",
        advice:
          "Review the actual booking process, dates, passport details and current displays. A guide can assist and interpret without overriding capacity or conservation rules. If the preferred date is unavailable, propose a truthful alternative or revise the stay rather than describe a reservation request as confirmed admission.",
      },
      {
        title: "Yuelu Academy is not a compulsory mountain climb",
        advice:
          "The academy's institutions, architecture and history provide their own reason to visit. A summit or longer hill route requires a separate effort and time decision. Guests wanting a gentler day can select a focused visit with rest, subject to the actual thresholds and steps.",
      },
      {
        title: "Orange Isle is not a short bridge-side photo stop for every route",
        advice:
          "Check the selected entrance, current operation of any internal transport and the walking left at each end. A riverside view from elsewhere and a visit along the island are different experiences. Heat, rain and long open sections can change what is sensible for the group.",
      },
      {
        title: "Hunan food should suit the guest",
        advice:
          "Chili, fermented ingredients and strong flavors can be explored through a thoughtful menu without making heat tolerance a test. A request for less spice does not remove chili already present in a preparation. Choose dishes with the actual kitchen and keep queues, offal and adventurous tastings optional.",
      },
      {
        title: "Contemporary food streets are not preserved ancient daily life",
        advice:
          "Taiping Street and other popular areas combine heritage references, restoration and current commerce. Explain visible evidence and present use rather than promise an untouched old town. Shopping can be enjoyable when chosen, but should not replace interpretation or depend on compulsory purchases.",
      },
      {
        title: "Changsha and Zhangjiajie need separate time",
        advice:
          "Check dated trains, full station names, both hotel transfers and the selected park base. A fast rail service does not include a forest-park day or make a return excursion automatically worthwhile. Give Zhangjiajie its own nights and walking assessment, keeping Changsha's city value distinct.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "zhangjiajie",
        advice:
          "Zhangjiajie adds a separate sandstone-and-forest chapter with its own base, park days and walking. Compare the actual train and final hotel transfer. The published Zhangjiajie itineraries shown there do not automatically include Changsha accommodation, museum visits or additional services.",
      },
      {
        slug: "wuhan",
        advice:
          "Wuhan offers Hubei's archaeological collections, Yangtze neighborhoods and a different food tradition. A museum-focused journey can justify both when explanations and actual exhibits differ. Use the ticketed stations and full transfers rather than assume the two city centers are linked door to door.",
      },
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo add a distinct river-and-countryside stay. Compare dated transport, the actual arrival point and the onward river itinerary. A shared southern-China journey does not make a cruise fit automatically after a late city departure.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can be comfortable starting points for a city-and-west-bank visit, with rain and temperature changes still possible. Summer can be hot and humid, making indoor collections, rest and shorter outdoor routes valuable. Winter may feel damp and cold, so check room heating and clothing rather than assume a southern city is warm. Holidays, museum demand and evening crowds can shape the experience. Choose the actual reservation and forecast, not a season label promising empty streets or perfect river views.",
    orientation:
      "Changsha is Hunan's capital on the Xiang River. Central east-bank dining areas, Hunan Museum, west-bank Yuelu interests and Meixi Lake form different routes. Changsha South, Changsha station and Huanghua airport are separate gateways. Orange Isle is another access and walking decision within the river landscape. Use the actual Chinese hotel address, station and venue name before assigning a day, especially when moving on to Zhangjiajie.",
    experiences: [
      "Understand Mawangdui discoveries through a selected museum visit",
      "Choose a coherent Yuelu or city route with the real walking visible",
      "Enjoy Hunan food at a suitable table before a separate mountain chapter",
    ],
    planningNotes: [
      "Confirm museum admission and the actual exhibit before fixing the city sequence",
      "Compare sleep, room orientation and complete daily journeys across hotel areas",
      "Keep Changsha city services separate from existing Zhangjiajie product inclusions",
    ],
    arrival:
      "Confirm whether the booking names Changsha South, Changsha station or Huanghua airport, then plan the actual hotel leg. Check terminal, exit or meeting point, luggage and the dated onward service. A station-area arrival is not arrival at the museum or an old street. Keep uncertain arrival days modest and avoid making a difficult museum reservation depend on a late train or flight. If continuing to Zhangjiajie, compare the whole door-to-door sequence and the selected park-area hotel.",
    gettingAround:
      "Combine selected walks with road or suitable urban transport, allowing cross-river travel and real pickup points. Museum visits, academy thresholds, hill paths and island distances need separate walking judgments. A city vehicle does not reach every lane or remove steps inside a venue. Plan seated breaks, toilets and the return from evening dining. Check current transport and access rather than assume a scenic vehicle, river service or mountain facility operates on the proposed date.",
    stayStrategy:
      "Use one comfortable base for two or three nights. Decide whether central evenings, quiet sleep, room comfort or a particular west-bank setting matters most, then compare actual properties. A less prominent address with a quiet room and straightforward pickup may work better than a balcony above lively commercial streets. Avoid a hotel move solely to save one theoretical transfer. A good city stay should remain enjoyable when rain shortens a walk or a reservation changes.",
    firstTimerNote:
      "Choose Changsha for something specific: Mawangdui's archaeological context, a learning-history interest or a well-planned food introduction. You do not need every island view, hill and viral snack to understand the city. One strong collection, useful explanation and a comfortable meal can provide a meaningful contrast before several mountain days. The route should make the choices and extra services clear rather than imply that passing through a gateway includes a complete city stay.",
    faqs: [
      {
        question: "Is Changsha worth visiting before Zhangjiajie?",
        answer:
          "It can be a worthwhile separate chapter for Hunan Museum, regional food and city history. Allow actual useful time and a separate transfer to Zhangjiajie. A late connection-only overnight is a different experience and should not be described as an in-depth city visit.",
      },
      {
        question: "How many nights should I spend in Changsha?",
        answer:
          "Two nights give one museum-led full day. Three add a separate west-bank or slower city chapter. One can work for a connection and evening when transport fits. Confirm reservations and both gateway transfers before counting sightseeing time.",
      },
      {
        question: "Do I need a reservation for Hunan Museum?",
        answer:
          "Check the museum's current procedure for your date, passport and intended exhibition. Treat a request and a confirmed booking as different states. A guide or premium payment does not override capacity, closures or display changes.",
      },
      {
        question: "Is visiting Mawangdui the same as visiting Hunan Museum?",
        answer:
          "No. The museum presents excavated discoveries and interpretation; the original tomb-site location is a separate interest with its own current access. Do not infer an underground tomb visit from admission to the museum's collection.",
      },
      {
        question: "Should I stay near Wuyi Square or Meixi Lake?",
        answer:
          "Compare central dining and evening convenience with actual room noise, sleep and the west-bank property's setting. Include museum, station and daily road journeys. Neither broad area is best for every itinerary, and a lake label does not guarantee the quoted room's view.",
      },
      {
        question: "Does visiting Yuelu Academy require climbing Yuelu Mountain?",
        answer:
          "A focused academy visit and a longer mountain route are different plans. Check the actual thresholds, steps and pickup for the academy, then add a hill walk only if time and ability suit. A summit should not be compulsory on a gentle cultural day.",
      },
      {
        question: "Is Orange Isle an easy short walk?",
        answer:
          "That depends on the chosen section, current transport and remaining distances. Review seating, exposure, steps and the full return. An island photograph or a sightseeing-vehicle label does not establish a short, step-free route.",
      },
      {
        question: "Can I enjoy Changsha food without very spicy dishes?",
        answer:
          "Choose a menu with the actual kitchen and explain tolerance in advance. Some dishes can be suitable, while others contain chili or fermented ingredients that cannot simply be removed. Confirm allergens, stocks and alternatives; less spicy does not mean allergy-safe.",
      },
      {
        question: "Is Changsha included in the Zhangjiajie tours linked elsewhere?",
        answer:
          "Do not assume so. No matching published Changsha product is recommended on this page. A city extension, museum visit, room nights and additional transfers need their own confirmed scope and quote. The outline is for tailored planning.",
      },
    ],
    culturalStory: {
      title: "Give the discoveries a clear historical setting",
      paragraphs: [
        "Mawangdui's Han-period discoveries are compelling when objects are explained through their materials, use, burial context and the questions they help answer. Choose the actual display and allow time to look closely. A celebrated object may not be on view, and the museum arrangement is not the original tomb interior. Good interpretation distinguishes archaeological evidence, reconstruction and uncertainty rather than use a sensational headline as the entire explanation.",
        "Yuelu Academy offers a different subject: institutions of learning, buildings, intellectual traditions and later history. It deserves its own explanation instead of being treated as another temple or merely the foot of a mountain climb. Popular streets meanwhile show layers of restoration, commerce and contemporary city life. Reading those differences can produce a deeper visit than presenting every old-looking facade as unchanged ancient fabric.",
      ],
    },
    foodStory: {
      title: "Make Hunan food a thoughtful meal, not a heat challenge",
      paragraphs: [
        "A useful introduction might compare a selected pepper-forward dish, a milder preparation, vegetables and a staple at a seated meal. Rice noodles or a small snack stop can add another perspective when portions and timing fit. Stinky tofu and other strongly flavored foods are optional tastes, not a test every visitor must pass. A queue at a fashionable brand should be a conscious choice rather than an automatic component of a premium city tour.",
        "Discuss fresh and dried chili, pickled ingredients, pork, offal, fish bones, wheat, soy, nuts and meat stock with the actual kitchen. Asking for less chili does not remove allergens or turn a vegetable dish vegan. Serious dietary needs require demonstrated preparation capacity and an alternative restaurant or meal plan. Private cooking sessions and market access behind the scenes need consent and confirmation; a guide's presence does not imply either.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual room and choose a comfortable first evening",
        description:
          "Use the booked station or terminal and complete hotel transfer. Have a seated meal and a short selected walk if timing suits. Keep museum entry on a confirmed, usable window rather than an uncertain arrival.",
      },
      {
        day: "Full city day",
        title: "A museum-led introduction and one coherent contrast",
        description:
          "Visit the confirmed collection with enough explanation and rest. Add a selected street, river or food interest rather than a long cross-city checklist. Protect lunch and sleep if more demanding mountain days follow.",
      },
      {
        day: "Optional second full day",
        title: "Yuelu or a distinct west-bank subject",
        description:
          "With a third night, choose the academy and an appropriate route, or another genuine interest. A summit, whole-island circuit and late-night food tour are separate options, not simultaneous mandatory inclusions.",
      },
      {
        day: "Departure",
        title: "Continue to a separately planned destination",
        description:
          "Allow the actual station journey and luggage, then the final hotel connection at the next stop. This two-night outline with an optional third night is illustrative, not a published package or guarantee of reservations, exhibitions, private hosts or scenic services.",
      },
    ],
  },
};
