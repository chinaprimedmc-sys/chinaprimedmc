import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wuzhen.svg",
  alt: "Wuzhen planning schematic comparing Dongzha and Xizha, a day visit versus an overnight, and accommodation inside versus outside the visitor area; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const wuzhenGuide: ExpandedDestination = {
  id: "wuzhen",
  name: "Wuzhen",
  region: "east",
  kicker: "Choose the water-town stay, not just the photograph",
  description:
    "Compare Wuzhen's Dongzha and Xizha, day visits and overnight stays, with room, luggage and admission questions that make a canal-town break genuinely comfortable.",
  stay: "1–2 nights; a focused day visit is another option",
  bestFor:
    "Canal-town atmosphere, architecture and an unhurried overnight near Hangzhou or Shanghai",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "puyuan",
    "tongxiang",
    "xitang",
    "jiaxing",
    "nanxun",
    "tongli",
    "hangzhou",
    "suzhou",
    "shanghai",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Wuzhen Travel Guide: Dongzha, Xizha & Where to Stay",
    seoTitle: "Wuzhen Travel Guide: Dongzha, Xizha & Hotels",
    seoDescription:
      "Choose Dongzha or Xizha in Wuzhen, compare a day trip with 1–2 nights, and check inside-area hotels, admission, luggage and complete Hangzhou or Shanghai transfers.",
    answer:
      "Wuzhen in Zhejiang works as a water-town day visit or a one-night stay for canal walks, dinner and the morning atmosphere. Choose between Dongzha, the East Scenic Area, and Xizha, the West Scenic Area, before booking: they have separate routes and operating arrangements. Xizha is a common overnight choice; check room location, entry and luggage handling. Two nights suit a hotel-led break. Expect historic fabric alongside extensive restoration and contemporary visitor management.",
    stayAnswer:
      "A day visit can suit travelers who want a selective walk without moving hotels, provided the full return journey leaves enough time. One night adds an evening and a morning, though late check-in and early departure can leave little benefit. Two nights give a full day to enjoy the chosen area, a contrasting subject and the property without rushing onward. More nights need a distinct reason, such as a specifically booked arts program or a hotel-led break. Decide whether seeing both Dongzha and Xizha genuinely adds interest; buying a broader ticket is not a reason to fill the day with repeated similar routes.",
    hotelAnswer:
      "Compare a named Xizha visitor-area property with an outside-area hotel using the exact room, entry arrangement and final approach. An inside stay can make evening and early-morning time easier, but does not promise an empty canal or a room reached directly by road. Guesthouse-style rooms and larger hotel properties can differ in bathroom, stairs, sound insulation, temperature control and luggage handling. Outside-area rooms may offer easier vehicle access or different value, with re-entry and travel to dinner to assess. Confirm whether the booked rate includes any admission or breakfast and how leaving and returning works for the named guests. A Wuzhen postal address alone does not establish that a hotel is inside the desired area.",
    sightseeingQuestion: "Is Dongzha or Xizha better for a first Wuzhen visit?",
    sightseeingAnswer:
      "Choose by the actual experience and time available. Dongzha can provide a focused route through streets, waterways and selected cultural displays, with the current open interiors identified. Xizha offers a larger managed visitor setting often chosen for evening atmosphere and a hotel stay. Neither label guarantees absence of crowds or unaltered everyday village life. For a first overnight, begin with the preferred Xizha property and a coherent local route; add Dongzha when its particular displays or architecture offer a useful contrast. For a day visit, one well-paced area can be more satisfying than crossing both hurriedly. Match opening, admission and transport to the exact date rather than assume every facility runs late.",
    visitorResources: [
      {
        label: "Wuzhen official visitor website",
        href: "https://www.wuzhen.com.cn/",
        scope:
          "Starting point for the operator's visitor information and accommodation context. Confirm dated ticket scope, hotel inclusions, check-in, re-entry, luggage, transport, performances and open interiors directly. General promotion does not establish a particular room view or a private experience.",
      },
      {
        label: "Tongxiang municipal government",
        href: "https://www.tx.gov.cn/",
        scope:
          "Administrative and regional background, mainly in Chinese. Wuzhen is within Tongxiang; the city context is not proof of a compact walk from a railway station or permission to enter private premises.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and full station names. A Tongxiang railway booking still requires road transport to the chosen Wuzhen entrance or check-in point. Compare both station transfers and luggage before choosing rail over a complete road transfer.",
      },
    ],
    serviceScope:
      "A proposal should name the visitor area, hotel and exact room, admissions, breakfast, guide language and the complete road or rail-and-road journey. Explain the actual check-in point, permitted vehicle approach, luggage and final walk or internal transport. A boat ride, craft session, theatre event or private host requires separate operating and availability confirmation. A display of a traditional craft is not automatically a hands-on class or an invitation to a working studio. Private guiding does not confer after-hours access, empty lanes, closed interiors or unrestricted photography. Special events may change the visit and should be identified before booking.",
    routeAdvice:
      "Use Wuzhen as one purposeful water-town chapter between Shanghai, Hangzhou or Suzhou. Their metropolitan history, West Lake and tea, or classical gardens give the journey variety. Share your dates, exact city base, room preferences and interest in evenings or architecture; we can compare a tailored return day with an overnight, including luggage and the final hotel approach. Wuzhen entry, transfers and accommodation would be agreed separately from an existing Shanghai product.",
    practicalPlanning: {
      timing:
        "For an overnight, protect enough afternoon time to check in, understand the area and enjoy dinner before the evening walk. Keep the following morning useful rather than leave at dawn solely to reach another city appointment. Choose current interior opening as well as public-street access; evening lights do not establish that museums or craft displays remain open. If visiting for a particular arts event, secure the actual event arrangement and suitable room first. Weekends, holidays and special programs can change crowds, rates and access patterns.",
      walking:
        "Canal-town paths include paving, bridge steps, thresholds and potentially slippery surfaces. A scenic photograph can conceal the cumulative effort of several crossings. Check the actual hotel approach, lift or stairs, room location, luggage assistance, seating and toilets. Any permitted internal transport still leaves its own final walk. Boat boarding is not automatically an accessible alternative and should be assessed separately. Choose a coherent shorter route for limited mobility rather than promise that the whole area is flat or reachable by private car.",
      cost: "Compare exact room category, admissions, breakfast, re-entry terms, final hotel access, luggage and complete gateway transfers. A small guesthouse-style room and a larger hotel room are different products even within Xizha. Clarify any boat fare, shared or private format, craft session, show or event ticket. Optional shopping should remain optional. Premium value should be visible in room quiet, comfort, good interpretation and useful evening time, rather than a guarantee of private canals or exclusive village life.",
    },
    attractions: [
      "Dongzha / East Scenic Area through a selected current visitor route",
      "Xizha / West Scenic Area for a coherent canal-town walk and an actual chosen stay",
      "A specific accessible cultural or craft display, distinguished from a private class",
      "A selected evening canal route with current lighting, access and weather considered",
      "An optional operating boat route with actual boarding, format and scope confirmed",
      "A properly booked theatre or arts event only when the date and tickets are known",
      "Hangzhou, Suzhou or Shanghai as separate complementary city chapters",
    ],
    stays: [
      {
        label: "A day visit: one focused water-town introduction",
        advice:
          "Choose a principal area and a manageable route, including a seated meal and the full return journey. Add the other area only when a distinct subject and usable hours justify it. A day trip should not be judged solely by the quickest scheduled train segment.",
      },
      {
        label: "1 night: make the evening and morning count",
        advice:
          "Choose the actual room and check-in arrangement, arrive with useful afternoon time and allow a morning walk. If the schedule produces a late check-in and early departure, compare whether the hotel move adds enough value over a simpler day visit.",
      },
      {
        label: "2 nights: a full day without changing rooms",
        advice:
          "Use the property and a selected second subject at an unhurried pace. A confirmed arts interest or a slower hotel-led break can justify the extra night. Do not assume two nights require every admission, boat route and craft display on the operator's list.",
      },
    ],
    hotelAreas: [
      {
        name: "A named Xizha guesthouse-style property / the specific room matters",
        advice:
          "Check bathroom, bed, window, air conditioning or heating, stairs, noise and luggage. Canal-facing can bring an attractive setting alongside passing voices or activity. Confirm the actual room and final approach, and whether admissions, breakfast and re-entry are included in the booked terms.",
      },
      {
        name: "A larger Xizha hotel / facilities within the chosen visitor setting",
        advice:
          "Compare the precise location, room category, lift, breakfast and any facility wanted. An inside-area hotel can still involve substantial walking to dinner or the main evening route. Pools, spa services and other facilities require current confirmation rather than inference from a premium label.",
      },
      {
        name: "An outside-area Wuzhen hotel / vehicle access and different tradeoffs",
        advice:
          "Plot the actual distance to the intended entrance, current transport, dinner and evening return. Check room quiet and facilities alongside admission and re-entry conditions. A hotel described as near Wuzhen may be suitable, but should never be presented as inside Xizha without verification.",
      },
    ],
    tradeoffs: [
      {
        title: "A managed water town can be valuable when described honestly",
        advice:
          "Conservation, repaired or reconstructed fabric, visitor services and commercial operation all shape today's experience. Explain visible details and the documented history of a particular place rather than call everything unchanged ancient life. Good interpretation can make this relationship interesting without promising an untouched village.",
      },
      {
        title: "An overnight changes the rhythm, not ownership of the scene",
        advice:
          "A useful evening and morning can make a stay worthwhile, especially when the room and meals are enjoyable. Other guests, event visitors and staff still share the area. Do not guarantee empty canals or silence. Choose room position, sleep and timing carefully instead of equating a higher rate with exclusive public space.",
      },
      {
        title: "Both areas are optional choices, not a compulsory pair",
        advice:
          "A combined admission can be convenient only if its current scope matches the visit. Dongzha and Xizha need separate time and movement. Identify what the second area contributes before extending the route. Guests who prefer a slow walk, good lunch and rest may gain more from one well-chosen area.",
      },
      {
        title: "Boat rides need a real route and boarding plan",
        advice:
          "Confirm the operating pier, shared or private format, actual route, approximate duration from the operator and weather conditions. A canal photograph does not establish a service from the hotel door. Boarding, balance and steps matter for mobility, and a boat ticket should not be assumed included with general entry.",
      },
      {
        title: "A craft display is not automatically participation",
        advice:
          "A textile, dyeing or other heritage display can explain materials and methods. Watching a demonstration, taking a short class and entering an active maker's workspace are different arrangements. Check provider, language, duration and what the guest can actually do or keep, with no required purchase implied.",
      },
      {
        title: "Theatre and special events can lead the accommodation decision",
        advice:
          "A major program can change room demand, street activity and the atmosphere of the stay. Verify official dates, actual tickets, venues, language and access rather than promise a performance from the town's cultural reputation. A quiet holiday and an event-led visit may require different room positions and expectations.",
      },
      {
        title: "Another canal town is worthwhile only when it adds a difference",
        advice:
          "Do not attach multiple water towns simply to increase destination count. Suzhou's gardens and urban canal neighborhoods can provide a distinct subject, while Hangzhou offers lake and tea settings. Select the combination that improves understanding and pace; a guest does not need repeated similar bridge photographs to experience Jiangnan.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "puyuan",
        advice:
          "Compare Puyuan's specific room, canal-and-courtyard route and cultural-space arrangements with Wuzhen's Dongzha/Xizha choices. Both towns require an honest distinction between historic fabric, restoration and contemporary visitor design. Choose one for a short trip unless the differences and available nights justify another complete transfer and hotel move.",
      },
      {
        slug: "tongxiang",
        advice:
          "Tongxiang is the wider county-level city, with a Wutong urban base and separate Puyuan textile or Shimen art-and-literature interests. Compare a purposeful additional visit with going directly from the station to the actual Wuzhen property. A city hotel is not a substitute for the water-town evening, and a municipal textile reputation does not establish workshop access.",
      },
      {
        slug: "xitang",
        advice:
          "Xitang offers a different water-town route through covered canal-side passages, bridges and narrow lanes in Jiashan. Compare its actual room, evening atmosphere and complete journey with the Dongzha/Xizha visit and Wuzhen property. One chosen town can be enough; include a second only when the difference justifies another transfer and does not simply repeat the same canal-town brief.",
      },
      {
        slug: "jiaxing",
        advice:
          "Jiaxing city adds South Lake's modern historical context and a Yuehe canal-side walk, rather than another entrance to Wuzhen. Compare a deliberate city night with going directly to the actual Wuzhen property in Tongxiang. Jiaxing, Jiaxing South and Tongxiang are different railway gateways; use the full transfer and guest interests to decide whether both stays earn their place.",
      },
      {
        slug: "nanxun",
        advice:
          "Nanxun adds a focused silk-merchant story through gardens, a historic book collection and houses with Chinese and Western influences, followed by Baijianlou's residential canals. Compare those specific interests with the actual Dongzha/Xizha route and Wuzhen property. One chosen water town can be enough; add another only when the difference and full transfer justify it.",
      },
      {
        slug: "tongli",
        advice:
          "Tongli offers a garden-led water-town choice near Suzhou, centered on Retreat and Reflection Garden and a selected canal walk. Compare that subject with the actual Dongzha/Xizha visit and Wuzhen room before adding both towns. Tongli is in Jiangsu, while Wuzhen is in Zhejiang; allow a complete separate transfer and avoid repeating the same canal-town brief.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, Longjing tea and different city or countryside hotel settings. Compare a direct road journey with actual rail plus both final transfers. Preserve useful lake and tea time instead of make Wuzhen a rushed detour between fixed appointments.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou adds classical gardens and an urban canal-neighborhood context. Choose selected gardens and a real city stay, making the difference from Wuzhen explicit. Compare complete transport and avoid repeating several similar water-town excursions when one focused visit already serves the interest.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai provides a contrasting metropolitan chapter and transport gateways. Specify the actual city hotel or airport, luggage and complete road or rail-and-road sequence. A published Shanghai city day does not contain Wuzhen or its overnight services unless separately agreed.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit walking and an outdoor evening, with rain and variable temperatures still possible. Summer can be hot and humid; choose breaks and room cooling rather than assume canals make the walk cool. Winter may be damp and cold, making heating and warm meal arrangements valuable. Weekends, holidays and major events can change crowding and room demand in any season. Evening atmosphere and boat operation depend on the actual weather and program, not a guaranteed seasonal photograph.",
    orientation:
      "Wuzhen is a town within Tongxiang, Jiaxing, Zhejiang. Dongzha / East Scenic Area and Xizha / West Scenic Area are different visitor areas, with hotel and entry details to establish. Tongxiang railway station is a separate road transfer away. Shanghai, Hangzhou and Suzhou are distinct city bases rather than neighboring walking districts. Use full Chinese hotel and check-in addresses, particularly when a property is outside the visitor area or luggage must be handled separately from the private vehicle.",
    experiences: [
      "Understand a selected canal route through architecture, trade and later conservation",
      "Enjoy an actual comfortable room with useful evening and morning time",
      "Choose a craft display, boat or arts program for its real content and confirmed scope",
    ],
    planningNotes: [
      "Choose Dongzha, Xizha or both by subject and useful time",
      "Confirm admission, re-entry, luggage and the exact room's final approach",
      "Compare the complete city transfer before choosing a day visit or overnight",
    ],
    arrival:
      "Choose the actual city hotel, airport or railway gateway and the precise Wuzhen check-in point. A train to Tongxiang still leaves a road transfer, and arriving at a scenic entrance does not mean luggage is already in the room. Confirm pickup, luggage assistance and any permitted internal transport before booking. Keep a performance or last interior entry away from uncertain arrivals. A slower afternoon arrival with enough time to settle can improve the overnight more than one extra roadside attraction.",
    gettingAround:
      "Use a coherent walking route within the chosen area, with any currently available internal transport or boat separately described. Private road vehicles do not reach every canal-side room or pedestrian lane. Bridge steps, paving and the cumulative distance between meals, displays and hotel matter. Coordinate real pickup points for movement between areas or the onward city, and give guests a simple way to shorten the day without losing their transfer or dinner arrangement.",
    stayStrategy:
      "Choose the room before assuming an inside stay will feel premium. A quiet position, good bed, dependable bathroom and temperature control can matter more than a canal window. One night needs useful time on both sides; two nights work when a full day and the property add value. An outside-area hotel can be appropriate when its actual comfort and access fit. Avoid moving rooms solely to collect hotel categories or another water-town address.",
    firstTimerNote:
      "Decide whether the aim is a brief canal-town introduction, an atmospheric overnight or an event-led stay. Those briefs lead to different areas, tickets and rooms. Wuzhen's contemporary managed setting is part of what you are choosing, so ask for an honest explanation of the place and a route with room to enjoy it. A good plan may recommend one area and one night rather than a comprehensive circuit of every bridge and display.",
    faqs: [
      {
        question: "Where is Wuzhen, and is it part of Hangzhou?",
        answer:
          "Wuzhen is within Tongxiang, Jiaxing, in Zhejiang. It is a separate destination from Hangzhou, Shanghai and Suzhou, with road transport needed from the chosen city or station. Use the exact hotel and visitor-area entrance rather than assume a regional name identifies the arrival point.",
      },
      {
        question: "Should I visit Dongzha or Xizha in Wuzhen?",
        answer:
          "Choose Dongzha for a focused route and particular current cultural displays, or Xizha for a larger managed setting often selected for evening atmosphere and hotels. Both can work when they add a meaningful contrast. With limited time, one well-paced area can be better than rushing through both.",
      },
      {
        question: "Is one night in Wuzhen worth it?",
        answer:
          "It can be when the real room, evening and following morning add value. Arrive with useful afternoon time and avoid an unnecessarily early departure. A late check-in and early transfer may provide little benefit over a simpler day visit from the actual city base.",
      },
      {
        question: "Should I stay inside or outside Wuzhen's scenic area?",
        answer:
          "Compare the named property, room comfort and final approach. An inside Xizha stay may simplify evening and morning time; an outside room can offer different vehicle access or value. Confirm admission, re-entry, luggage, breakfast, stairs and the actual check-in arrangement for the booked rate.",
      },
      {
        question: "Does a Wuzhen hotel booking include admission and boat rides?",
        answer:
          "Only as stated in the actual booking terms. Confirm which area, dates, entry and re-entry are covered, and ask separately about boats, events and internal transport. A hotel address or premium package label should not be used as proof of every inclusion.",
      },
      {
        question: "Is Wuzhen suitable for travelers with limited walking?",
        answer:
          "Assess the actual route and room. Bridge steps, thresholds, paving and longer pedestrian sections can be demanding, and private cars cannot reach every location. Confirm lift or stairs, luggage help, shorter walks and any real transport option. Boat boarding also needs its own suitability check.",
      },
      {
        question: "Is Wuzhen an untouched ancient village?",
        answer:
          "No such description should be assumed. It combines historic canal-town fabric with conservation, repair, reconstruction and extensive contemporary visitor management. That can still make a worthwhile stay when the visible history and present operation are explained accurately.",
      },
      {
        question: "Should I choose Wuzhen or Suzhou?",
        answer:
          "Choose Wuzhen for a deliberately selected water-town day or overnight; choose Suzhou for classical gardens and urban canal neighborhoods. They can complement one another with useful nights. A short itinerary may be stronger with one clear subject than several repeated canal-town excursions.",
      },
      {
        question: "Is a published Wuzhen private tour recommended here?",
        answer:
          "No matching published product is recommended. Request a tailored plan with dates, actual gateways, day or overnight preference, room requirements and walking needs. The proposal should name the real area, hotel, admissions, luggage arrangement and included transfers.",
      },
    ],
    culturalStory: {
      title: "Water, streets and the way a place is presented today",
      paragraphs: [
        "A canal route becomes more interesting when a guide connects water, bridge, street and building to documented patterns of movement and commerce. Look closely at an actual structure or public display rather than assume every waterside facade has the same age and purpose. Repairs and reconstruction should be identified where relevant. Contemporary management also shapes how the guest experiences the town, from entry and accommodation to performances and commercial spaces.",
        "A craft or literary display offers a particular way into local and regional history. Its value depends on the actual content and explanation, not a promise that every activity continues unchanged from the past. A willing maker or specialist can add depth when genuinely arranged; a public demonstration is another valid format. Give the guest enough time to understand the distinction, with no expectation that residents or staff provide private access beyond the agreed visit.",
      ],
    },
    foodStory: {
      title: "Let a comfortable meal support the slower stay",
      paragraphs: [
        "Choose a few dishes the actual kitchen prepares well, with freshwater fish, vegetables, tofu or regional meat preparations explained according to the guest's preferences. Ask about bones, sweetness, portions and serving style before ordering. A canal-facing table can add atmosphere, but quiet, seating and a suitable meal matter too. Dinner should leave time to enjoy the evening rather than become a rushed stop before a long drive back to another city.",
        "Discuss meat stock, fish, shellfish, soy, wheat, nuts and shared equipment with the kitchen. A vegetable or tofu dish may still use animal ingredients. Serious allergies, religious diets and vegetarian requests require preparation capacity and an alternative. A wine or food-themed display is not automatically a private tasting or cooking lesson. Identify any additional host, activity and price clearly, and keep purchases optional.",
      ],
    },
    itinerary: [
      {
        day: "Arrival afternoon",
        title: "Check in with the final room approach understood",
        description:
          "Complete the road or rail-and-road transfer, entry procedure and luggage arrangement. Settle into the actual room, then begin a manageable orientation walk. Keep timed performances and final museum entry separate from uncertain arrival.",
      },
      {
        day: "Evening",
        title: "Enjoy dinner and one selected canal route",
        description:
          "Choose a suitable table and an unhurried evening walk according to current access and weather. A boat or performance is optional and separately confirmed. Do not promise empty lanes or every interior open after dark.",
      },
      {
        day: "Morning or optional full day",
        title: "Give the stay its slower moment",
        description:
          "Use a morning walk and breakfast before a one-night departure. With two nights, add a distinct current display, second area or confirmed activity when it improves the visit, leaving time at the property instead of filling every hour.",
      },
      {
        day: "Departure",
        title: "Continue toward a different Jiangnan subject",
        description:
          "Coordinate luggage, the actual pickup and the full onward journey to Hangzhou, Shanghai or Suzhou. This one-to-two-night outline is illustrative, not a published package or a guarantee of room views, boats, shows, private craft hosts or admission inclusions.",
      },
    ],
  },
};
