import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/tongren.svg",
  alt: "Original Tongren, Guizhou planning schematic comparing Bijiang city time, a Fanjingshan mountain base and separate Tongren or Tongren South station transfers; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const tongrenGuide: ExpandedDestination = {
  id: "tongren",
  name: "Tongren",
  region: "southwest",
  kicker: "A useful river-city evening when the journey gives it a purpose",
  description:
    "Decide whether to stay in Tongren, Guizhou for Jinjiang river walks and Zhongnanmen streets or continue to Jiangkou for Fanjingshan, with exact station advice.",
  stay: "1–2 city nights when a local interest or gateway schedule justifies them",
  bestFor: "A regional city introduction, river walks and thoughtful Fanjingshan connections",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["fanjing-mountain", "zhenyuan", "guiyang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tongren Guizhou Guide: City & Mountain Stays",
    seoTitle: "Tongren, Guizhou Guide: City & Stays",
    seoDescription:
      "Compare Tongren city and Jiangkou for Fanjingshan. Plan Jinjiang walks, Zhongnanmen streets, hotel areas and Tongren versus Tongren South transfers.",
    answer:
      "Tongren (铜仁), in northeastern Guizhou, can add a useful river-city evening and regional introduction before or after Fanjingshan. Bijiang (碧江), with the Jinjiang (锦江) river setting and Zhongnanmen (中南门) historical district, is a different experience from the mountain. Choose a city night for a specific local interest or a real arrival and departure advantage; if Fanjingshan is the only purpose, compare continuing directly to a suitable Jiangkou room. Tongren station and Tongren South station are different gateways. This Guizhou city is also distinct from Tongren (同仁) in Qinghai, known for Regong art.",
    stayAnswer:
      "One night can support an arrival, a regional dinner and a selected city walk when the actual transport leaves useful hours. Two nights give one full day for a coherent Bijiang introduction or a clearly chosen local subject. No city night may be the better option when the mountain is the purpose and the transfer to Jiangkou works. Count Fanjingshan nights separately: a Tongren overnight is not a complete mountain visit. Longer city stays need an independent reason rather than repeated waterfront walks or distant scenic names inserted to fill time.",
    hotelAnswer:
      "Compare an actual Bijiang city property for Jinjiang walks, meals and a selected Zhongnanmen visit. A Tongren station-area room serves a different railway brief, while a Tongren South-area room is a separate location again. Jiangkou town or the eastern mountain-foot approach can better serve a Fanjingshan-focused stay. Check the exact address, quiet, bathroom, temperature control, breakfast and vehicle pickup. A river view is worthwhile when you will enjoy the room; it does not establish an easy old-quarter walk or a short mountain transfer.",
    sightseeingQuestion:
      "Should you stay in Tongren city or go straight to Jiangkou for Fanjingshan?",
    sightseeingAnswer:
      "Choose Tongren city when a useful arrival, departure or specific river-city interest justifies the room. Continue to an appropriate Jiangkou or mountain-foot base when the mountain is the main priority and the full transfer works. Add the actual road from the ticketed station, then compare breakfast, entry timing and the next morning's journey. Tongren South is not another name for the central Tongren station. A city hotel described as a Fanjingshan gateway does not remove the road, scenic transport or steep paths on the mountain.",
    visitorResources: [
      {
        label: "Tongren municipal government",
        href: "https://www.trs.gov.cn/",
        scope:
          "Municipal background and public information. Confirm current district visits, museum venue and exhibitions, rooms, transport and any hosted activity with the actual operator or institution.",
      },
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and the exact Chinese station name. Tongren / 铜仁 and Tongren South / 铜仁南 are different gateways; compare the complete hotel road before selecting the ticket.",
      },
    ],
    serviceScope:
      "A useful proposal should show whether a Tongren city stay adds value, the actual room and walk, meal arrangements and the full next transfer. Explain whether the interest is local urban history, a river evening or a quieter break around the mountain journey. A museum specialist, community host, boat or particular performance needs a separate confirmed arrangement. Private guiding can explain the places you actually visit; it does not establish entry to private homes, protected areas or closed historical buildings.",
    routeAdvice:
      "Use the Fanjingshan guide for the mountain entrance, cableway, remaining steps and Jiangkou accommodation decisions. Zhenyuan adds a different river-town and religious-architectural chapter with its own useful nights. Guiyang can provide provincial context and a larger arrival or departure city. There is no matching published Tongren product recommended here. Share the ticketed gateway, dates, room expectations and walking preferences for a plan that explains whether a city night improves the journey or whether to continue directly to the next base.",
    practicalPlanning: {
      timing:
        "Keep a city arrival selective, with a proper dinner and one manageable river or historical-district route. For a full day, choose a named cultural subject before adding another transfer. Check any museum or building opening rather than treating a district walk as guaranteed interior access. Keep an essential Fanjingshan entry separate from an optimistic city departure, and use the real dated entry window when choosing the preceding night's location.",
      walking:
        "Choose a defined river section and historical-district route, with shade, seating, toilets and pickup points. Riverside paths may include steps, wet surfaces, road crossings or level changes. A broad old-town label does not establish step-free paving or vehicle access at the hotel door. A mountain extension has different physical demands and should be assessed separately; a gentle city evening does not make the Fanjingshan summit route suitable for every guest.",
      cost: "Compare the actual room and view, full guide and vehicle hours, named admissions, meals and complete station transfers. A local city day, a road transfer to Jiangkou and mountain guiding are different scopes. A premium quote should improve comfort, interpretation and time use, not imply a private historical quarter, guaranteed river boat or cultural encounter. A station hotel may save one road leg while making another longer; compare the whole journey before judging value.",
    },
    attractions: [
      "A selected Jinjiang / 锦江 public river walk in the Bijiang city area",
      "Zhongnanmen / 中南门 historical district, with surviving, restored and contemporary elements distinguished",
      "A named local museum or cultural venue when its current location and exhibitions support the visit",
      "An actual regional meal chosen around the city route and dietary needs",
      "Fanjingshan / 梵净山 as a separate mountain stay and route assessment",
      "A separately agreed public village or local cultural interest, without assumed private access",
    ],
    stays: [
      {
        label: "No city night / continue to the main interest",
        advice:
          "Often appropriate when Fanjingshan is the purpose and the full arrival transfer to Jiangkou works. A city guide creates a useful choice, not an obligation to add another hotel change.",
      },
      {
        label: "1 night / a purposeful city evening",
        advice:
          "Use actual arrival hours for a meal, a manageable walk and rest. A late arrival may justify a comfortable room without pretending it includes a city tour. Check the following morning's complete road before choosing the location.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Choose when a city-history or other specifically identified local interest deserves a day. Give it interpretation and breaks rather than add a long outlying excursion simply to fill the schedule. Count the Fanjingshan chapter separately.",
      },
    ],
    hotelAreas: [
      {
        name: "Bijiang city and the actual Jinjiang or Zhongnanmen route",
        advice:
          "A starting point for a city evening and selected historical streets. Compare the exact block, road noise, river access, room quality and vehicle meeting point. A heritage-style room can be modern, while a well-located modern hotel may make the same cultural visit more comfortable.",
      },
      {
        name: "Tongren station approach: the correct rail brief",
        advice:
          "Consider for a specific service and room that improve the arrival or departure. Check the actual luggage route, breakfast and evening food. Do not assume a central-station hotel also suits a ticket from Tongren South.",
      },
      {
        name: "Jiangkou or the Fanjingshan eastern mountain foot",
        advice:
          "A separate base choice when the mountain is the priority. Compare complete roads, room warmth or cooling, bathroom, meals and the actual entry journey. Neither a mountain-view label nor a guesthouse style proves a luxury standard or eliminates steps.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose the station before assuming a city visit fits",
        advice:
          "Tongren and Tongren South serve different locations. A long gap between trains is not automatically usable city time once both roads, luggage, meals and return checks are counted. Compare the complete sequence; an overnight or direct onward transfer may be more rewarding than a rushed attempt to see Zhongnanmen during a connection.",
      },
      {
        title: "A historical district is also a present-day place",
        advice:
          "At Zhongnanmen, distinguish surviving buildings, restoration, modern visitor uses and occupied spaces. Ask what the particular lane or structure demonstrates instead of describing the whole quarter as an untouched ancient settlement. Public streets do not authorize entering private interiors or photographing residents without consent.",
      },
      {
        title: "Tongren city or a separate mountain stay?",
        advice:
          "The wider Tongren region contains different county and mountain destinations. Fanjingshan, Jiangkou and any village or canyon interest require their own route decisions. Mentioning several names in a city article should not imply that a short stay covers every place or that all share the same local driving radius.",
      },
      {
        title: "A river evening and a boat excursion are different experiences",
        advice:
          "A short public walk can offer a useful sense of place without another ticket. If a boat is proposed, identify its current operator, pier, route, boarding and cancellation terms. Do not infer a cruise from a riverside hotel, an old photograph or the availability of lights along the water.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "fanjing-mountain",
        advice:
          "Give Fanjingshan its own full mountain day, normally supported by two local nights. Compare the Tongren-city night with going directly to Jiangkou. Scenic transport, cableway queues and remaining summit steps are separate from the city transfer, and an extra guide cannot override mountain closures.",
      },
      {
        slug: "zhenyuan",
        advice:
          "Zhenyuan adds a distinct river-town stay with Qinglongdong and selected lanes. Compare the full actual road or rail connection and leave proper evenings there. Choose the rooms for quiet and access rather than assume every river-town address provides the same experience.",
      },
      {
        slug: "guiyang",
        advice:
          "Guiyang can add provincial collections, food and a larger city gateway. Check the actual train and both hotel transfers. If Tongren is only a connection, compare going directly to the mountain instead of inserting city nights at every gateway.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for city walking, with rain still possible. Summer can be hot and humid, so use shorter early or evening walks and a proper midday break. Winter needs layers for damp, exposed river sections. Assess Fanjingshan weather independently from the city forecast, and compare dates with Chinese public holidays before choosing a short stay around a specific visit or train.",
    orientation:
      "This guide concerns Tongren / 铜仁 in Guizhou, centered on a selected Bijiang city visit, not Tongren / 同仁 in Qinghai. Jinjiang and Zhongnanmen provide an urban walking subject; Jiangkou and Fanjingshan are different bases. Tongren station / 铜仁站, Tongren South / 铜仁南站 and Tongren Fenghuang Airport each require their own road calculation. The airport's name does not mean Fenghuang old town or the mountain is beside its exit.",
    experiences: [
      "Follow a manageable Jinjiang river and Zhongnanmen district route with the present city and historical fabric clearly explained",
      "Enjoy a regional meal and comfortable evening when actual arrival hours give them value",
      "Choose a direct mountain transfer or a city night through the complete itinerary, not a gateway label alone",
    ],
    planningNotes: [
      "Distinguish Tongren and Tongren South stations before selecting the hotel or promising a city visit during a connection",
      "Compare Bijiang city and Jiangkou mountain accommodation as separate choices with different morning roads",
      "Keep Guizhou Tongren and Qinghai Tongren distinct, and confirm any interior, boat or hosted visit separately",
    ],
    arrival:
      "Use the ticketed station or operating flight and the precise room address to calculate the journey. Add luggage, meals and the final vehicle approach. A ticket to Tongren South should not be planned as arrival at Tongren city station. If the next day is Fanjingshan, compare a city night with the full onward transfer to Jiangkou and the mountain entry arrangements before booking both rooms.",
    gettingAround:
      "Group a short river and historical-district route with food and rest rather than cross the city repeatedly. A vehicle helps between the actual gateway, room and onward base, but may not reach every pedestrian lane or riverside path. Identify pickup and a shorter walk. A separate mountain, boat or village excursion needs its own operating details, physical assessment and permissions rather than being assumed within a generic local vehicle day.",
    stayStrategy:
      "Start by asking whether the city has a purpose beyond receiving the train. One night can provide a good meal, walk and rest; two should have a full-day subject worth choosing. The best premium option may be fewer hotel changes and a direct transfer to a dependable mountain room. When staying in the city, compare quiet, bathroom, temperature control and dinner as carefully as a river view.",
    firstTimerNote:
      "Tell the planner the exact station name before discussing sightseeing. Then decide whether you want the city, the mountain or both. This simple order prevents a convenient-looking train and a hotel labeled Tongren from producing an unexpectedly long day with little useful local time.",
    faqs: [
      {
        question: "Is Tongren worth an overnight before Fanjingshan?",
        answer:
          "Yes when an actual arrival or departure, river-city interest or comfortable evening gives the night value. If the mountain is the only purpose and the complete transfer works, going directly to Jiangkou may be better. Compare the ticketed gateway, room and next morning's road rather than add a city night automatically.",
      },
      {
        question: "How many nights should I spend in Tongren city?",
        answer:
          "One can support a useful arrival, meal and selected walk. Two give a full city day for a specific local interest. No city night may be necessary for a mountain-focused itinerary. Count Fanjingshan accommodation separately instead of treating every Tongren-region night as a city visit.",
      },
      {
        question: "Is Tongren South station the same as Tongren station?",
        answer:
          "No. Tongren / 铜仁 and Tongren South / 铜仁南 are different stations. Compare the dated train and the complete road to the chosen city or Jiangkou hotel. The shortest rail time does not necessarily produce the shortest overall journey.",
      },
      {
        question: "What is there to do in Tongren besides Fanjingshan?",
        answer:
          "A selected Bijiang city introduction can combine Jinjiang river scenery, Zhongnanmen historical-district interpretation and a regional meal. Add a museum or another local interest only when its actual venue and visiting arrangements support it. The value is a coherent city chapter, not a promise to cover the whole municipality.",
      },
      {
        question: "Should I stay in Tongren or Jiangkou for the mountain?",
        answer:
          "Compare a specific Jiangkou or eastern mountain-foot room when Fanjingshan is the priority. A Tongren city room may suit a different arrival or local interest but adds its own mountain-day road. Choose using the full route, room comfort, breakfast and actual entry window.",
      },
      {
        question: "Is Tongren in Guizhou the same as Regong in Qinghai?",
        answer:
          "No. Tongren / 铜仁 in Guizhou is a different place from Tongren / 同仁 in Qinghai, associated with Regong art. Use the province, Chinese name and actual airport or station when booking. They are not alternative spellings for one destination.",
      },
      {
        question: "Can I visit Tongren city between trains?",
        answer:
          "Only if the complete outgoing and return roads, luggage plan and actual visiting time fit the correct stations and departures. A timetable gap alone is insufficient, especially when Tongren South is involved. Compare a worthwhile overnight or direct connection with a rushed city detour.",
      },
    ],
    culturalStory: {
      title: "A regional city deserves interpretation beyond its gateway role",
      paragraphs: [
        "The Jinjiang setting and a selected Zhongnanmen walk offer a way to discuss river movement, streets, buildings and the city's changing uses. Focus on what the actual place demonstrates: building form, circulation, materials and how a lane is used today. Distinguish surviving fabric, later repair and modern visitor development rather than call the entire district an unchanged ancient town. A working city can be interesting without being turned into a staged historical scene.",
        "The wider Tongren region includes different communities and county histories. Those identities should be explained through a specific place, reliable interpretation and consent, not a generic minority-village promise. A public district walk, museum display, performance and private conversation are different visits. Keep the scale clear: one thoughtful city evening can add context, but it does not establish knowledge of every community in northeastern Guizhou.",
      ],
    },
    foodStory: {
      title: "Choose a meal that makes the city night worthwhile",
      paragraphs: [
        "Use the actual kitchen and the day's needs to choose a balanced meal: rice or noodles, vegetables, tofu and meat or fish if wanted, with chili discussed in advance. A regional snack or noodle preparation can be a useful introduction when the cook explains the real ingredients. Do not insist on a long tasting list after a late train, or claim a dish is unique to Tongren merely because it is served there.",
        "Ask about pork, meat stock, soy, wheat, peanuts and shared equipment when dietary needs matter. A vegetable dish may still contain animal ingredients. For a river-related fish meal, clarify species, source, bones, portion and price basis rather than assume a wild local catch. Confirm breakfast before an onward mountain transfer; a hosted food encounter or cooking session needs a separate arrangement and should not be implied by ordinary dining assistance.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / night 1",
        title: "Turn a useful gateway night into a comfortable evening",
        description:
          "Transfer from the actual station or airport to the agreed Bijiang room. Enjoy dinner and a selected short river or district walk when hours and energy allow. A late arrival can simply be a rest night; it should not be sold as a complete city tour.",
      },
      {
        day: "Optional full day / night 2",
        title: "Give a chosen city subject proper attention",
        description:
          "Use a coherent Zhongnanmen and Jinjiang route with a proper meal, breaks and historical interpretation. Add a named open cultural venue only when it contributes a distinct subject. A boat, private home or community host requires a separate actual agreement.",
      },
      {
        day: "Onward day",
        title: "Continue to the correct mountain or regional base",
        description:
          "Complete the agreed Jiangkou, Zhenyuan or railway transfer, with luggage and full roads included. Fanjingshan follows its own entry, transport and walking plan. This illustrative city outline is not a published package and does not guarantee venues, boats, private encounters or rooms.",
      },
    ],
  },
};
