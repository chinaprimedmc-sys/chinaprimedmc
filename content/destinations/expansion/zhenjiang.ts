import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhenjiang.svg",
  alt: "Original Zhenjiang planning schematic comparing Jinshan, Jiaoshan and Beigushan, a Xijindu evening and hotel-base choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const zhenjiangGuide: ExpandedDestination = {
  id: "zhenjiang",
  name: "Zhenjiang",
  region: "east",
  kicker: "Choose a river hill, follow the old crossing and stay for dinner",
  description:
    "Discover Zhenjiang through one of its three river hills, Xijindu's old crossing streets and a meal shaped by aromatic vinegar, with clear choices on day trips and overnight stays.",
  stay: "A focused day visit or 1–2 nights for river landscapes, culture and food",
  bestFor: "Jiangsu cultural extensions, temple and calligraphy interests, and regional food",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["changzhou", "yangzhou", "nanjing", "suzhou", "wuxi", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhenjiang Travel Guide: Three Hills, Xijindu & Where to Stay",
    seoTitle: "Zhenjiang Guide: River Hills, Food & Stays",
    seoDescription:
      "Choose Zhenjiang's Jinshan, Jiaoshan or Beigushan, explore Xijindu and local vinegar food, and compare a day trip with 1–2 nights on a tailored Jiangsu route.",
    answer:
      "Zhenjiang (镇江), historically written Chinkiang in English, is a city on the south side of the Yangtze in Jiangsu. A rewarding introduction pairs one of its three well-known river hills with Xijindu's historic crossing streets and a local meal. Choose Jinshan for its temple setting and White Snake associations, Jiaoshan for an island-and-calligraphy interest, or Beigushan for river viewpoints and historical or literary interpretation. A focused day from Nanjing or Yangzhou can work; one or two nights add a useful evening and time for a second, different chapter. The city's aromatic vinegar is a food-culture subject, not an automatic factory appointment.",
    stayAnswer:
      "One night is useful when arrival and departure leave a substantial visit plus an evening in the city. Two nights provide one full day and more flexibility for Jiaoshan's crossing, an interior or a slower meal. Add a second hill only when its character interests you; all three are not compulsory. A day visit can be enough for one hill and a manageable Xijindu chapter when complete transfers fit. If your main interests remain in Nanjing or Yangzhou, compare keeping that hotel rather than moving rooms for a short stop.",
    hotelAnswer:
      "Choose the Xijindu side of the city when its lanes, dinner and a cultural evening are the reason for staying. A central hotel may offer easier vehicle access, meals and a comfortable mixed route, with a separate trip to the historic streets. A modern river-view property can suit a particular room and outlook, but check the distance to the planned entrance and restaurants. Compare sound insulation, bathroom, lifts, climate control, breakfast and the final luggage approach. A station-area room serves a transfer purpose; it is not automatically the best base for a river-hill visit or an evening walk.",
    sightseeingQuestion: "Which Zhenjiang hill should I visit: Jinshan, Jiaoshan or Beigushan?",
    sightseeingAnswer:
      "Choose Jinshan for a temple-and-hill visit and an introduction to the White Snake legend, with the route's stairs assessed first. Choose Jiaoshan for a managed island outing, Dinghui Temple and a calligraphy interest, allowing for the crossing and the current open displays. Choose Beigushan for a more focused historical and literary hill visit, including the Ganlu Temple setting and river viewpoints that suit the route. They are different places, not three entrances to one park. Start with one and give the next part of the day a different purpose, such as Xijindu, a museum or lunch.",
    visitorResources: [
      {
        label: "Zhenjiang municipal government",
        href: "https://www.zhenjiang.gov.cn/",
        scope:
          "Reference entry point for city background and public notices, mainly in Chinese. Confirm each hill's open route, Jiaoshan crossing, museum displays and current entry with its responsible venue. A municipal description does not confirm a vinegar-factory visit, private cultural host, river cruise or hotel facility.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and complete station names, especially Zhenjiang and Zhenjiang South. Compare both road transfers with direct hotel-to-hotel transport. A convenient rail service to one station does not make the final trip to Xijindu or a hill entrance identical to the journey from another station.",
      },
    ],
    serviceScope:
      "A tailored Zhenjiang visit should identify the chosen hill, accessible route, Xijindu section or museum, guide language, admissions and complete pickup and return. For Jiaoshan, specify how the current crossing fits the day and retain a worthwhile alternative. A food plan should distinguish a seated meal, tasting, museum and any separately confirmed producer appointment. An overnight proposal should name the room category and luggage approach. Good guiding connects landscape, historical evidence and local stories while leaving time to look, eat and rest.",
    routeAdvice:
      "Tell us whether you are most interested in temples, calligraphy, river landscapes, literary history or local food, along with your dates, starting hotel, available nights and walking needs. We can compare a focused day from Nanjing or Yangzhou with a Zhenjiang overnight, then choose a hill and a genuinely different second chapter. On a wider Jiangsu journey, let Yangzhou's gardens or Nanjing's capital history justify the next stay. Ask for a tailored plan with the visits, room, transport and included services clearly stated; no matching published Zhenjiang package is currently listed here.",
    practicalPlanning: {
      timing:
        "Put the principal hill visit in a comfortable daylight window, with time for its current entry and pedestrian route. Jiaoshan needs the actual crossing, last return and weather conditions considered before any fixed onward journey. Museums and temple interiors follow their own opening arrangements. Xijindu can provide a shorter afternoon or evening chapter, but an evening lane walk does not establish that every interior remains open. Leave room for a proper meal instead of placing all three hills before a tight train departure.",
      walking:
        "A low hill can still involve sustained stairs, uneven paving and a tiring descent. Choose the named route, viewpoint and turnaround according to the group's needs. Temple terraces and historic lanes add thresholds and standing; some Xijindu approaches involve slopes or steps. For Jiaoshan, check boarding, gangways, the landing route and remaining walking as well as the crossing itself. A private car improves the journeys between places but cannot remove all pedestrian sections. Request rest points and a shorter cultural alternative when mobility or weather warrants it.",
      cost: "Compare the same chosen hill, admissions, crossing where applicable, guide time and complete transfers. A second scenic area changes both fees and the time available for interpretation. Check room position, breakfast and luggage assistance when comparing a historic-area stay with a central hotel. Keep a food museum, tasting, restaurant meal and producer appointment as separate inclusions, and make retail purchases optional. A premium should buy clarity, useful explanation and comfort rather than unverified private access or a full-day checklist.",
    },
    attractions: [
      "Jinshan Temple / 金山寺 and its hill setting for a focused visit and White Snake cultural context",
      "Jiaoshan / 焦山, Dinghui Temple / 定慧寺 and a current calligraphy or inscription display, with the crossing planned separately",
      "Beigushan / Beigu Mountain, Ganlu Temple / 甘露寺 and a manageable river-view route",
      "Xijindu / Xijin Ferry historic streets as a cultural walk, not an assumed operating ferry",
      "Zhenjiang Museum for a relevant current display and the former consular-area architectural setting",
      "A local noodle meal, aromatic vinegar tasting or separately confirmed food-culture visit",
      "An evening near the chosen city base, with time for dinner and rest",
    ],
    stays: [
      {
        label: "Day visit / one hill and a different city chapter",
        advice:
          "From the actual Nanjing or Yangzhou hotel, compare the full return journey first. Choose one hill and a manageable Xijindu section, museum or meal according to access and energy. Keep Jiaoshan's crossing within a comfortable buffer; a second hill is optional rather than the measure of a successful day.",
      },
      {
        label: "1 night / a useful evening and a substantial visit",
        advice:
          "Stay when arrival and departure give enough time for the main hill and a relaxed dinner or Xijindu walk. Choose the room for that purpose and check the luggage approach. A late arrival followed by an early train is a transit night, not the same introduction to the city.",
      },
      {
        label: "2 nights / one full day with more flexibility",
        advice:
          "Give the chosen hill proper time, pair it with an interior or food interest, and use the extra arrival or departure hours for Xijindu or a contrasting second hill. Retain weather flexibility for Jiaoshan. Two nights need not become three scenic areas and repeated stair climbing.",
      },
    ],
    hotelAreas: [
      {
        name: "Xijindu side / a purposeful cultural evening",
        advice:
          "Choose the precise property and room if historic lanes and dinner are central to the stay. Check steps, vehicle stopping, the last luggage section, bathroom and noise from evening businesses. A heritage-style exterior does not establish the age of the guest room or the quality of its sound insulation and heating.",
      },
      {
        name: "Central Zhenjiang / a practical mixed sightseeing base",
        advice:
          "Compare convenient dining, room comfort and full transfers to the chosen hills and Xijindu. Map the actual address rather than a generic center pin. A modern hotel may make access and sleep easier than a lane property, while still allowing a deliberately planned evening in the historic area.",
      },
      {
        name: "A selected river-view property / choose the room and purpose",
        advice:
          "Assess the booked category's outlook, nearby roads, noise, dining and permitted walking routes. A river-related name does not guarantee an open view from every room or an easy walk to the hill entrances. Keep enough time at the property to justify its location, especially when it adds city transfers.",
      },
    ],
    tradeoffs: [
      {
        title: "The three hills should be compared, not collected",
        advice:
          "Jinshan emphasizes temple and legend, Jiaoshan an island setting and calligraphy, and Beigushan historical and literary interpretation. Choose the subject that makes you curious, then assess its current route. Visiting all three can repeat transport and stairs while leaving less time to understand any one place. A hill and a different city interest can make a more varied day.",
      },
      {
        title: "Jiaoshan's crossing is part of the itinerary",
        advice:
          "Plan from the current visitor crossing and its return arrangements, allowing for weather and any management changes. Check the landing, boarding requirements and the time needed on the island. An island outing is different from an open-ended riverbank walk or a Yangtze sightseeing cruise, and neither a private guide nor a scenic ticket guarantees every sailing.",
      },
      {
        title: "A former ferry crossing is not a present-day boat service",
        advice:
          "Xijindu's appeal lies in reading an old crossing landscape through lanes, buildings and the city's relationship with the river. The name Xijin Ferry does not establish an operating passenger ferry from the streets. Use the built environment and a relevant museum display to explain the history rather than promise a boat because of the English place name.",
      },
      {
        title: "Separate history, poetry and popular stories",
        advice:
          "The White Snake tradition associated with Jinshan and Three Kingdoms stories connected with Ganlu Temple can enrich the visit when presented as literature, legend and later interpretation. They are not proof that every narrated scene happened in the building now visible. Explain surviving fabric, repair and modern displays clearly, and give historical evidence its own place in the story.",
      },
      {
        title: "A vinegar label and a production visit answer different questions",
        advice:
          "Zhenjiang aromatic vinegar is also widely encountered under the older Chinkiang name. A meal can introduce its flavor; a collection or food-history display can explain the tradition. A working producer visit requires separate permission, a real appointment and an agreed visitor route. Buying a bottle is optional and does not substitute for useful cultural interpretation.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "changzhou",
        advice:
          "Changzhou adds a selected Qingguo Lane and Tianning city chapter, or a dedicated family park day farther along the southern Jiangsu corridor. Choose it for a distinct purpose and compare the full gateway-to-hotel journey. Keep enough useful time for both cities rather than repeat a rushed historic-street stop at each.",
      },
      {
        slug: "yangzhou",
        advice:
          "Yangzhou lies on the north side of the Yangtze and adds merchant gardens, Slender West Lake and Huaiyang meals. Compare a selective cross-river day with a purposeful stay using the actual hotels, traffic and dated transport. The shared regional setting does not make its gardens part of a compact Zhenjiang hill circuit.",
      },
      {
        slug: "nanjing",
        advice:
          "Nanjing adds capital history, substantial museums and a different city scale. Protect useful days there before adding Zhenjiang as an excursion or overnight. Compare the full hotel-to-hotel road journey with rail plus both local transfers, and do not place a Jiaoshan crossing immediately before a tight onward connection.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou adds classical gardens and canal neighborhoods, a different cultural focus from Zhenjiang's river hills and crossing history. Choose the major garden and useful nights first. The connection should deepen the Jiangnan journey rather than turn both cities into a sequence of brief entrances between trains.",
      },
      {
        slug: "wuxi",
        advice:
          "Wuxi adds Jichang Garden, Huishan and Taihu, with separate western Lingshan or Nianhuawan choices. Give its garden-and-lake chapter a distinct purpose and realistic time. Taihu scenery is not another Zhenjiang river viewpoint, and the actual Wuxi station and hotel determine the onward transfer.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai provides a contrasting city stay and international gateways. For Zhenjiang, compare a fuller Jiangsu route with a long return excursion from the actual Shanghai hotel. Include both station transfers and flight buffers, and let a useful Zhenjiang evening or next regional stay justify the move.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit hill visits and historic streets, with rain and busy holidays still possible. Summer calls for cooling, shorter exposed sections and seated indoor breaks. Winter can feel cold and damp, particularly near the river, so room heating and a flexible walking plan matter. River views depend on visibility and Jiaoshan's crossing on current operating conditions. Choose a day that still works through food and cultural interpretation when the preferred viewpoint or crossing is less appealing.",
    orientation:
      "Zhenjiang is a prefecture-level city on the south side of the Yangtze in Jiangsu, with Yangzhou across the river to the north. Jinshan, Jiaoshan and Beigushan are different visitor areas, while Xijindu is a historic crossing district with its own lanes and accommodation decisions. Zhenjiang railway station and Zhenjiang South are distinct gateways. Danyang, Jurong and Yangzhong are separate county-level cities within the wider municipality. Add one for a specific interest, allowing for the full journey from your Zhenjiang hotel. Use the full Chinese hotel, entrance and station addresses when planning the route.",
    experiences: [
      "Choose a river hill for its temple, calligraphy or literary interest and explore it with context",
      "Read Xijindu as a historic crossing landscape, then leave time for an unhurried city meal",
      "Understand aromatic vinegar through flavor and local food rather than an obligatory shopping visit",
    ],
    planningNotes: [
      "Start with one hill, then add a different cultural or food chapter",
      "For Jiaoshan, include the current crossing and return buffer in the day plan",
      "Compare a useful city night with keeping the existing Nanjing or Yangzhou hotel",
    ],
    arrival:
      "Compare the dated services to Zhenjiang and Zhenjiang South with the full journey from the actual Nanjing, Shanghai or other starting hotel. Include boarding, luggage and the final road to the room or hill entrance. From Yangzhou, compare a complete road transfer with any suitable dated rail plan rather than infer convenience from a map. A hotel near a station and a room near Xijindu serve different purposes. For flights, specify the airport and terminal and allow the full onward process rather than base the day on the train segment alone.",
    gettingAround:
      "Use a vehicle between the chosen hill and a different city chapter where it improves the visit. Treat each hill's entrance, internal pedestrian route and pickup as its own arrangement; Jiaoshan additionally needs the crossing plan. At Xijindu, choose a manageable lane section and confirm the final vehicle meeting point rather than wander until a fixed departure becomes tight. Include toilets, seated breaks and a shorter alternative for guests who tire on steps. Private transport improves connections but does not make every temple terrace or historic lane step-free.",
    stayStrategy:
      "Stay for a useful evening and enough time to understand the main visit. A Xijindu-side room can serve dinner and lanes, while a central modern hotel may make luggage, access and sleep easier. A river-view property should earn its location through the booked room and time on site. Check noise, bathroom, lifts, temperature control, breakfast and the vehicle approach. If one selective day fits comfortably from Nanjing or Yangzhou, another room move is optional rather than a prerequisite for seeing Zhenjiang well.",
    firstTimerNote:
      "Begin with the subject that interests you most: Jinshan's temple and White Snake tradition, Jiaoshan's island and calligraphy, or Beigushan's historical and literary setting. Add Xijindu or a meal for contrast. Three hills, a museum, a producer and a cross-river excursion are not necessary to make a worthwhile introduction. Clear choices and time to understand them will add more than another admission ticket.",
    faqs: [
      {
        question: "Is Zhenjiang worth visiting?",
        answer:
          "It can be for a distinctive combination of river hills, temple or calligraphy interests, Xijindu's crossing history and local food. Choose one main hill and a complementary city chapter. If time is limited and your priorities are Nanjing's museums or Yangzhou's gardens, protect those days before adding another stop.",
      },
      {
        question: "How many nights should I spend in Zhenjiang?",
        answer:
          "One night works when transport leaves a substantial visit and a useful evening. Two nights give one full day and more flexibility for Jiaoshan or a second cultural interest. A focused day trip can be enough for one hill and a manageable Xijindu or food chapter when complete transfers fit.",
      },
      {
        question: "Can I visit Zhenjiang on a day trip from Nanjing or Yangzhou?",
        answer:
          "Yes, with a selective plan and the full return journey included. Compare the actual starting hotel, dated rail where useful and both road transfers. Choose one hill and a complementary stop rather than promise all three plus Xijindu. Jiaoshan's current crossing needs a comfortable return buffer.",
      },
      {
        question: "Which is better: Jinshan, Jiaoshan or Beigushan?",
        answer:
          "Jinshan suits temple and White Snake cultural interests; Jiaoshan adds an island setting, Dinghui Temple and calligraphy subjects; Beigushan suits historical and literary interpretation with a selected river-view route. Choose by interest and walking needs, then confirm the current route rather than treat all three as compulsory.",
      },
      {
        question: "Do I need a boat to visit Jiaoshan?",
        answer:
          "Plan Jiaoshan as an island visit using the current managed visitor crossing. Confirm the operating arrangement, weather, boarding, last return and on-island route for the date. Do not assume a private guide can override a suspended crossing or that an island visit is the same service as a Yangtze sightseeing cruise.",
      },
      {
        question: "Is Xijindu an operating ferry terminal?",
        answer:
          "For this visit, Xijindu is a historic crossing district to explore through its streets, buildings and cultural context. The English name Xijin Ferry does not establish a present-day passenger service from those lanes. Any current boat journey would need its own named operator, route and arrangements.",
      },
      {
        question: "Where should I stay in Zhenjiang?",
        answer:
          "Choose the Xijindu side for a deliberate historic-lane evening, a central hotel for practical access and meals, or a specific river-view property for its actual room and setting. Check steps, luggage approach, noise, bathroom and complete transfers rather than assume a heritage exterior or water-related name guarantees comfort.",
      },
      {
        question: "Is Chinkiang vinegar the same regional name as Zhenjiang vinegar?",
        answer:
          "Chinkiang is an older English spelling associated with Zhenjiang, and the name is widely used for the city's aromatic vinegar. Judge the actual bottle, ingredients and producer rather than assume every dark vinegar has the same origin or recipe. A food tasting and a working production visit are separate arrangements.",
      },
      {
        question: "Can I visit a Zhenjiang vinegar producer?",
        answer:
          "Only with a real provider and confirmed visitor arrangement. A factory, food-history display, shop and restaurant tasting offer different experiences. Agree the content, language, current access and any booking terms before adding the visit, with purchases optional and a useful food alternative if production access is unavailable.",
      },
      {
        question: "Which station should I use: Zhenjiang or Zhenjiang South?",
        answer:
          "Choose from the actual dated services and final address, comparing both road transfers and the total journey. The stations are different gateways, and the best rail sector is not automatically the best hotel-to-hotel route. Allow enough time after a hill or island visit for the real station transfer.",
      },
    ],
    culturalStory: {
      title: "Let river landscape, written culture and later stories remain distinct",
      paragraphs: [
        "Zhenjiang's three hills offer different ways to understand the city. At Jinshan, explain the temple setting alongside the White Snake tradition without treating a popular story as a record of a historical event. At Jiaoshan, the calligraphy and inscription tradition, including the subject of Yihe Ming (瘗鹤铭), gives a reason to choose a relevant current display rather than visit only for a river photograph. At Beigushan, poetry and historical interpretation can shape a focused route through the hill and Ganlu Temple setting. In each place, distinguish historical evidence, surviving fabric, repair and later storytelling.",
        "Xijindu changes the scale from a hill to the old crossing district. Read the lanes, thresholds and buildings as a way into the city's movement of people and goods, while recognizing present-day businesses and restoration. Zhenjiang Museum can add another perspective through a relevant display and the former consular-area architectural setting when open. A thoughtful visit does not require every building to be original or every interior accessible; it requires a clear account of what the guest is actually seeing and how it relates to the wider river city.",
      ],
    },
    foodStory: {
      title: "A noodle lunch makes room for the vinegar story",
      paragraphs: [
        "Guogai mian (锅盖面), usually translated as pot-lid noodles, offers a practical seated lunch between a hill visit and the next cultural stop. The name refers to the small lid associated with the noodle-cooking tradition, not a topping in the bowl. Choose the topping and ask about the stock rather than assume a plain-looking bowl is vegetarian. Zhenjiang aromatic vinegar, often labeled Chinkiang vinegar abroad, can introduce the city's flavor tradition in a small tasting at the table. Compare the aroma and balance with the actual food instead of treating a large bottle purchase as the purpose of the visit. For coeliac, wheat, alcohol or other strict dietary needs, check the specific ingredients and preparation rather than infer suitability from the word rice or vinegar.",
        "Yaorou (肴肉), often described as crystal pork or a chilled pork-and-aspic specialty, is another optional shared tasting when properly prepared and stored by the kitchen. Ask about portion size, seasoning and pork before ordering for the group, then add vegetables and other dishes that suit the guests. A noodle meal, vinegar-history display, tasting and producer appointment answer different interests. The day can be worthwhile with a good lunch and explanation alone; a cooking or production session should enter the plan only when a real host and arrangements are confirmed.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / optional first evening",
        title: "Settle into the right base and enjoy a city meal",
        description:
          "Complete the station or hotel transfer, check in and choose a comfortable dinner. If staying near Xijindu and time allows, take a manageable lane walk with the return route settled. Keep the principal hill visit for daylight and adequate energy rather than force it into the end of a travel day.",
      },
      {
        day: "Full day / morning",
        title: "Give one river hill a clear purpose",
        description:
          "Choose Jinshan, Jiaoshan or Beigushan according to the cultural interest and current route. Allow time for explanation, steps and rest. At Jiaoshan, include the crossing and last return in the plan before setting any later appointment; a boat transfer should support the visit rather than dictate a rushed circuit.",
      },
      {
        day: "Lunch and afternoon",
        title: "Change pace through food and the old crossing district",
        description:
          "Take a seated noodle lunch or another suitable meal, with a small vinegar tasting if wanted. Choose Xijindu, a relevant museum display or a shorter contrasting interest according to opening and energy. Day visitors protect the complete return transfer; overnight guests can leave more time for dinner and rest.",
      },
      {
        day: "Optional extra chapter / departure",
        title: "Add a different interest before continuing",
        description:
          "Use available time for a contrasting second hill or a confirmed food-culture interest when it earns the visit. Continue to Yangzhou or Nanjing with the actual station or hotel and full transfer settled. This outline supports a tailored proposal; confirm the selected sites, crossing, room and included services for the dates.",
      },
    ],
  },
};
