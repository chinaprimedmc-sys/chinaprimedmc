import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/langzhong.svg",
  alt: "Original Langzhong planning schematic comparing an old-town overnight, courtyard room access and a separate hillside view; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const langzhongGuide: ExpandedDestination = {
  id: "langzhong",
  name: "Langzhong",
  region: "southwest",
  kicker: "Stay for the quieter lanes, courtyard life and river setting",
  description:
    "Plan an unhurried Langzhong old-town stay: compare courtyard inns with modern hotels, choose cultural visits and allow time for the Jialing River setting.",
  stay: "2 nights for one full day; 3 for a slower cultural stay",
  bestFor: "Historic streets, courtyard stays and a quieter contrast to Chengdu",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["chengdu", "chongqing", "pingyao"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Langzhong Travel Guide: Old Town, Hotels & Itinerary",
    seoTitle: "Langzhong Guide: Old Town & Where to Stay",
    seoDescription:
      "Is Langzhong worth an overnight? Plan two nights with old-town lanes, courtyard hotel advice, Zhang Fei history, river views and Chengdu connections.",
    answer:
      "Langzhong (阆中) is a historic city on the Jialing River in northeastern Sichuan, administered by Nanchong. Its appeal is the relationship between a walkable old-town street pattern, courtyard buildings, religious and civic sites, and a river landscape framed by hills. It rewards an overnight more than a hurried circuit of ticketed monuments: an early walk and an evening meal reveal a different rhythm from the busiest daytime streets. Two nights give one full day for the old town and a selected cultural visit; three suit slower exploration or a separately planned hillside excursion. Choose it for architectural detail and time on foot, with a carefully assessed room rather than an assumption that every old-town inn provides luxury comfort.",
    stayAnswer:
      "Allow two nights when the old town is the reason for coming. Use the full day for an early lane walk, one or two interiors, lunch and a rest before returning to the river or streets later. One night can work with useful arrival and departure hours, but a late check-in followed by an early train misses much of the benefit. Three nights allow a slower pace, more detailed cultural interpretation or an additional hillside subject. Beyond that, identify a specific interest rather than add days to a generic ancient-town visit.",
    hotelAnswer:
      "Stay inside the old town if an early walk from the door matters and the particular courtyard room meets your standards. Check its position relative to restaurants and evening activity, window privacy, stairs, bathroom, heating or cooling and the luggage walk from the vehicle drop-off. Choose an edge-of-old-town or modern-city hotel for easier pickup, lifts and more predictable room facilities, accepting a transfer or longer walk into the lanes. A river-view label is useful only when it describes the booked room; it does not establish quiet, a balcony or direct riverside access.",
    sightseeingQuestion: "What is worth seeing in Langzhong beyond the main shopping streets?",
    sightseeingAnswer:
      "Build the visit around the old town's layout and lived streets, then choose interiors that explain different subjects. Han Huanhou Shrine introduces the commemoration of Zhang Fei; the Sichuan Imperial Examination Museum adds an educational and administrative story; Huaguang Tower or Zhongtian Tower can help explain the townscape when their visitor routes are open. The river edge offers another perspective. A Jinping Mountain excursion is a separate walking and transport decision. Two well-explained interiors and time to notice courtyards are usually more rewarding than buying access to every attraction without a clear purpose.",
    visitorResources: [
      {
        label: "Langzhong municipal government",
        href: "https://www.langzhong.gov.cn/",
        scope:
          "Official local context and dated public notices, primarily in Chinese. Check current opening, ticket scope and any festival or river-management arrangements with the responsible site or operator. Municipal descriptions do not establish the age of every building, hotel quality or access to private courtyards.",
      },
      {
        label: "Sichuan Department of Culture and Tourism",
        href: "https://wlt.sc.gov.cn/",
        scope:
          "Provincial cultural and tourism information. Use it for context and dated notices rather than assuming a regional itinerary confirms today's monument interiors, performances, accommodation or transport.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and exact station names. Search Langzhong / 阆中 and the actual gateway. A train connection needs both station transfers and a useful arrival time; current direct services and journey durations must be checked for the travel date.",
      },
    ],
    serviceScope:
      "A tailored proposal should identify the hotel and room, vehicle drop-off and luggage arrangements, walking route, guide language, selected interiors, admissions and meals. If the plan includes a hillside view, river service, craft activity or performance, specify the operator and current availability. Courtyard households and places of worship remain working or private spaces; private guiding does not authorize entry, photography or a hosted encounter. Agree a rain alternative and a shorter walking option that retain the purpose of the visit.",
    routeAdvice:
      "Langzhong works as a deliberate historic-town chapter alongside Chengdu or a wider Sichuan journey, rather than an automatic extra on a panda day. Compare rail services with a complete road transfer and protect at least one useful full day in town. Chongqing can provide a very different river-city contrast when the actual connection and total trip length justify it. There is no matching published Langzhong product in the current catalog. Tell us your dates, gateways, cultural interests, walking needs and room priorities so the overnight and onward route can be planned together.",
    practicalPlanning: {
      timing:
        "Walk early for a quieter introduction, visit a selected interior during its opening hours and leave a proper lunch and rest window. Return later for another street or river perspective instead of repeating the busiest shopping stretch at midday. Public holidays can change crowd levels and the sound outside a room. Keep tower climbs and hillside viewpoints flexible in rain or poor visibility, and do not base a whole stay on an unconfirmed evening performance.",
      walking:
        "The old town can involve stone paving, thresholds, narrow lanes and prolonged standing, even where the main streets look level. Towers and hillside sites introduce a different load of stairs. Ask for the distance from vehicle to room with luggage and whether there is a ground-floor bedroom; a ground-floor room may still have entrance steps. Agree toilets, seated breaks, slippery-weather alternatives and the final pickup point. A central inn is not automatically an accessible inn.",
      cost: "Compare the room category, breakfast and porter help, full station transfers, guiding hours, specific monument admissions and any separate hillside transport. Walking through public lanes and entering ticketed interiors are different components; check the current ticket arrangement rather than assume one pass includes everything. Pay a premium for a quiet well-equipped room, thoughtful interpretation and good pacing, with any special activity explicitly confirmed.",
    },
    attractions: [
      "Old-town lanes and courtyard streets, read through their layout and changing uses",
      "Han Huanhou Shrine / Zhang Fei Temple, distinguishing commemoration from historical evidence",
      "Sichuan Imperial Examination Museum / Gongyuan, for examination and civic history",
      "Huaguang Tower or Zhongtian Tower through the currently available public route",
      "A selected Jialing River promenade walk, with current conditions checked",
      "Jinping Mountain as a separate viewpoint and walking choice",
      "A locally prepared meal featuring Langzhong specialties and clear ingredients",
    ],
    stays: [
      {
        label: "1 night / a selective introduction",
        advice:
          "Useful when you arrive early enough to walk and eat without rushing and can keep a little time the following morning. Choose one principal interior. A late arrival and early departure offer a bed stop rather than a meaningful old-town experience.",
      },
      {
        label: "2 nights / the strongest starting point",
        advice:
          "One full day gives room for early lanes, a cultural visit, lunch, a hotel rest and a later walk. This is a good balance for guests who enjoy architecture and local food but do not need a specialist research program. Protect that full day from another long transfer.",
      },
      {
        label: "3 nights / slower looking or a separate hill day",
        advice:
          "Add time for detailed interpretation, drawing or photography with permission, another cultural interior, or a selected Jinping Mountain outing. Keep the additional day distinct. A longer stay should improve the pace or deepen an interest, not simply add more shops.",
      },
    ],
    hotelAreas: [
      {
        name: "Inside the old town / atmosphere and early walks",
        advice:
          "Choose a particular room after checking restaurant noise, courtyard acoustics, privacy and facilities. Ask whether the bathroom is fully enclosed, whether heating and hot water suit the season, and how bags reach the door. Traditional styling does not prove an original building or a consistently comfortable room.",
      },
      {
        name: "At the old-town edge / a compromise worth checking",
        advice:
          "A property close to a practical drop-off can reduce luggage handling while keeping the lanes within reach. Measure the actual route to the places you will use, including evening return and any steps. An address described as near the ancient town can mean very different daily walks.",
      },
      {
        name: "A modern-city hotel / room comfort and pickup",
        advice:
          "Consider this when lifts, a larger bathroom, dependable climate control or vehicle access matter most. Compare the full transfer into the old town, breakfast and dinner options. Modern does not automatically mean better service, but a comfortable assessed room can be a wiser choice than an untested courtyard inn.",
      },
      {
        name: "A river-facing room / verify what the category includes",
        advice:
          "Request the exact outlook, floor, window arrangement and relationship to roads or evening activity. A river photograph in a listing may show a communal view rather than the booked bedroom. Check riverside conditions separately from the room description, especially in wet weather.",
      },
    ],
    tradeoffs: [
      {
        title: "An overnight reveals more than another ticketed stop",
        advice:
          "The value of staying is time in the lanes before and after the main visitor period, with a relaxed meal and a familiar route back to the room. If your schedule allows only a brief daytime visit, be selective about paid interiors. Do not fill the entire overnight with transfers and leave no time for the place itself.",
      },
      {
        title: "Courtyard character and quiet sleep need separate checks",
        advice:
          "Hard surfaces, shared yards and nearby restaurants can carry sound. Ask where the room sits within the building, not just whether the hotel is boutique. Stairs, winter comfort, bathroom ventilation and the last luggage stretch can matter more than lobby photographs. A well-chosen modern room is a valid way to enjoy historic streets.",
      },
      {
        title: "Zhang Fei history, commemoration and literary tradition are different layers",
        advice:
          "Han Huanhou Shrine is associated with the commemoration of Zhang Fei, the Three Kingdoms figure. A useful guide separates historical evidence, later stories and the buildings visible today. Familiar scenes from Romance of the Three Kingdoms can make the subject engaging without presenting every literary episode as documented local history.",
      },
      {
        title: "A historic street does not make every facade ancient",
        advice:
          "Look for the street pattern, building form, materials and evidence of repairs or later use. Restored, reconstructed and older surviving elements can coexist. Shops and staged entertainment are part of the contemporary visitor economy; distinguish them from private domestic life and surviving historic fabric.",
      },
      {
        title: "A tower climb and a hillside view are optional additions",
        advice:
          "Neither is essential to a rewarding old-town day. Check current access, stairs and visibility before choosing one. A good street-level explanation of the town and river may suit guests better than a climb added solely for a photograph. Boat services and any river activity require their own current operating checks.",
      },
      {
        title: "Langzhong is a separate journey from Chengdu",
        advice:
          "Allow for the full train or road sequence and both hotel transfers. It is not a short neighborhood outing after a panda visit. Give the stop useful nights, or keep your time in Chengdu and its closer surroundings. Northern Sichuan heritage and western Sichuan highland scenery are also different route choices.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "chengdu",
        advice:
          "Chengdu offers pandas, teahouses and a broader introduction to Sichuan food before a smaller historic-town stay. Compare the dated train with a full road transfer and allow time at both ends. Existing Chengdu tours do not include Langzhong by default; this extension needs its own nights, room and services.",
      },
      {
        slug: "chongqing",
        advice:
          "Chongqing adds a much larger, steeper river-city experience. The contrast can be rewarding, but it needs a verified connection and enough total nights. Do not replace Langzhong's only full day with a long transfer and then schedule an exhausting Chongqing evening.",
      },
      {
        slug: "pingyao",
        advice:
          "Pingyao is a comparison for travelers choosing between historic towns across a longer China trip, not a nearby onward stop. Its Shanxi merchant and banking history differs from Langzhong's Sichuan river setting and local cultural stories. Choose by historical interest and whole-trip geography rather than collect similar old-town photographs.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are sensible starting points for a walking stay, with rain and temperature still checked for your dates. Summer can be hot and humid; keep an early walk, indoor visit and midday rest rather than plan continuous sightseeing. Winter puts more weight on room heating and a warm place to sit. Public holidays and special events affect the pace and sound of the old town. River conditions and viewpoint visibility need their own review; a seasonal label does not guarantee a sunset, boat service or clear hill panorama.",
    orientation:
      "Langzhong is a county-level city administered by Nanchong in northeastern Sichuan. The historic center occupies a river setting within a much wider modern city and administrative area. Your railway arrival, hotel, old-town entrance, riverside route and any hillside excursion are separate locations. Use Langzhong / 阆中 on tickets and full Chinese hotel addresses. Nanchong city is a separate stop; book accommodation in Langzhong itself if evenings in the old town are your priority.",
    experiences: [
      "Read the old town through early lanes, courtyard forms and a selected cultural interior",
      "Compare Zhang Fei commemoration with the examination and civic-history story",
      "Enjoy a relaxed local meal and a river perspective without rushing every monument",
    ],
    planningNotes: [
      "Protect one full day between arrival and departure for an overnight to earn its place",
      "Check the exact bedroom, courtyard acoustics, stairs and luggage route before booking",
      "Keep tower climbs, hillside views and river services separate from the core walking plan",
    ],
    arrival:
      "Research dated services to Langzhong railway station and the complete transfer to the booked room. Compare actual train availability from Chengdu or your other gateway rather than rely on an old timetable. A road proposal should show the full pickup-to-hotel journey, a meal or comfort break where needed and a useful arrival hour. If arriving through a regional airport, assess both the flight and onward leg. Tell the hotel how many bags you have and agree help where vehicles cannot reach the door.",
    gettingAround:
      "Group old-town visits into a coherent walk with seated stops and lunch. Vehicles are most useful for the station, modern-city hotel or a separately chosen outlying viewpoint; they do not eliminate thresholds and lane walking. Confirm pickup points rather than assume a driver can collect from every inn. In wet weather, choose fewer slippery surfaces and a worthwhile indoor subject. Towers, temples and private courtyards have their own visitor instructions, independent of whether you have a private guide.",
    stayStrategy:
      "Choose the room around the experience you want: early street access and courtyard character, or easier vehicle access and more predictable facilities. Two settled nights are often more satisfying than a one-night sprint. Plan meals and rest as part of the stay. For a premium brief, specify quiet, bedding, bathroom, temperature control, luggage help and the quality of cultural explanation rather than depend on a luxury label or promise an exclusive town.",
    firstTimerNote:
      "Ask what you want to understand after the walk: the river-city layout, courtyard life, Zhang Fei's historical and literary layers, or the examination system. That question helps select useful interiors and a guide who can explain them. Langzhong does not need to be described as undiscovered to be rewarding; its strongest case is the time and attention an overnight allows.",
    faqs: [
      {
        question: "Is Langzhong worth visiting from Chengdu?",
        answer:
          "Yes, if historic streets, courtyard architecture and a slower overnight appeal to you and the full journey fits your itinerary. It is less compelling as a rushed add-on with no useful time between transfers. Allow two nights for one full day and choose the room carefully.",
      },
      {
        question: "How many nights should I stay in Langzhong?",
        answer:
          "Two nights are a strong starting point: one full day plus whatever arrival and departure hours permit. One night is selective; three support slower looking or an additional hillside interest. Count usable days, not just hotel bookings.",
      },
      {
        question: "Should I stay inside Langzhong Ancient Town?",
        answer:
          "Choose an old-town inn for early lane walks only after checking the particular room, noise, climate control, bathroom, stairs and luggage access. An edge-of-town or modern hotel can offer a more comfortable alternative, with the full route into the old town included in the decision.",
      },
      {
        question: "Can I visit Langzhong as a day trip?",
        answer:
          "A day visit is possible when the actual starting point and transport leave useful sightseeing hours. From Chengdu, compare the complete return journey with the time on foot before committing. An overnight gives an evening and early morning that a rushed return schedule cannot provide.",
      },
      {
        question: "Is Langzhong old town suitable for travelers with limited mobility?",
        answer:
          "Suitability depends on the specific route and room. Stone paving, thresholds, steps and the walk from vehicle to door need checking. Tower climbs and hillside outings can be omitted, but a ground-floor room is not necessarily step-free. Share walking and stair limits before booking.",
      },
      {
        question: "What is the difference between Langzhong and Pingyao?",
        answer:
          "They are in different parts of China and tell different stories. Langzhong combines a Sichuan river setting, courtyard streets and local civic and Zhang Fei traditions; Pingyao offers a walled Shanxi town with strong merchant and banking history. Compare the whole route and your interests rather than choose by the ancient-town label alone.",
      },
      {
        question: "Do I need a ticket for everything in Langzhong Ancient Town?",
        answer:
          "Distinguish walking the public streets from entering ticketed monuments, towers or exhibitions. Check the current pass and individual-entry rules for the places you actually want to see. Do not buy a broad package solely because it lists more sites.",
      },
      {
        question: "What local food should I try in Langzhong?",
        answer:
          "Consider Langzhong beef, local noodles and a taste of Baoning vinegar where these are genuinely served. Ask about the dish rather than assume a regional name describes every ingredient. Confirm meat, wheat, chili, stock and other dietary concerns with the kitchen.",
      },
    ],
    culturalStory: {
      title: "Look beyond the ancient-town label",
      paragraphs: [
        "Langzhong becomes more interesting when the guide explains how the streets, river and buildings work together. A courtyard doorway, a change in street direction or a sequence of rooms can offer more insight than another souvenir stop. The old town is also a contemporary place of trade, worship and daily life. Permission matters for domestic thresholds and personal photography; an attractive open door is not an invitation into someone's home.",
        "Choose a second subject that adds depth. Han Huanhou Shrine opens a conversation about Zhang Fei and the way historical figures are remembered through later stories. The examination museum provides a different lens on education, ambition and administration. Explain which structures and displays survive, have been repaired or represent later interpretation. That distinction makes the visit richer than presenting every building as unchanged ancient fabric.",
      ],
    },
    foodStory: {
      title: "Make a local meal part of the stay",
      paragraphs: [
        "Langzhong is associated with beef specialties and Baoning vinegar. Rather than turn the day into compulsory tasting stops, choose a seated meal and ask how the vinegar is used in the dishes you are eating. A bowl of local noodles can make a straightforward lunch; an unhurried dinner gives the overnight a purpose beyond another hotel. Food shopping and a cultural explanation are different things, so say clearly when a stop is commercial.",
        "Ingredients and preparation matter more than a famous dish name. Beef dishes are not proof of halal preparation, noodles may contain wheat, and stocks, chili oil or shared equipment may affect dietary suitability. Request the level of heat you actually want and confirm serious allergies with a capable kitchen. A hosted meal, cooking class or production visit is a separate service requiring an available provider, not something implied by this guide's discussion of food.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Settle in and learn the way back",
        description:
          "Transfer to the agreed drop-off and room, with luggage help where arranged. Take a short orientation walk and a relaxed dinner if arrival permits. Notice the evening activity near your room and choose an easy route for the following morning; leave the main cultural visit for a full day.",
      },
      {
        day: "Full day / second night",
        title: "Combine lanes, one historical story and a slower afternoon",
        description:
          "Begin with an early street walk, then choose Han Huanhou Shrine or the examination museum as the main interpreted interior. Have lunch and a rest before another short lane or riverside walk. Add a second interior only if opening hours, interest and energy support it. A tower climb is optional.",
      },
      {
        day: "Optional extra day / third night",
        title: "Deepen the cultural subject or choose a hillside view",
        description:
          "Use a three-night stay for more detailed architecture or history, or a separately planned Jinping Mountain outing with the stairs and weather assessed. Leave enough unstructured time for a meal and a return to the streets. A river trip or special activity needs separate current confirmation.",
      },
      {
        day: "Departure / onward Sichuan journey",
        title: "Keep the connection realistic",
        description:
          "Allow the full luggage walk, pickup and station journey before the ticketed departure, or continue by an agreed road route. This is a planning outline, not an existing packaged tour or a guarantee of specific rooms, open interiors, performances or river services.",
      },
    ],
  },
};
