import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/puyuan.svg",
  alt: "Original Puyuan planning schematic separating the managed historic-town visit from textile businesses, comparing a day trip with an overnight and checking room and entry arrangements; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const puyuanGuide: ExpandedDestination = {
  id: "puyuan",
  name: "Puyuan",
  region: "east",
  kicker: "A canal-town stay chosen for its spaces, not a claim of untouched history",
  description:
    "Compare Puyuan with Wuzhen, plan a selective canal-and-courtyard visit, and choose a comfortable overnight with clear entry, room, luggage and textile-activity arrangements.",
  stay: "A focused day visit or 1 night; 2 nights for a property-led slower stay",
  bestFor: "Canal-town design, architectural photography and a considered overnight near Tongxiang",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["tongxiang", "wuzhen", "xitang", "hangzhou", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Puyuan Travel Guide: Canal Walks, Hotels & Wuzhen Compared",
    seoTitle: "Puyuan Travel Guide: Day Trip or Overnight?",
    seoDescription:
      "Compare Puyuan and Wuzhen, choose a day trip or overnight, and plan canal walks, hotel areas, Tongxiang transfers and realistic textile interests.",
    answer:
      "Choose Puyuan Ancient Town in Zhejiang for a canal-and-courtyard walk or an unhurried hotel stay in a carefully managed visitor setting. A day is enough for an introduction; one night adds value when dinner, the room and a morning walk are part of the appeal. Historical textile associations sit alongside extensive restoration and modern development. Check that your booking refers to the visitor area, also called Puyuan Fashion Ancient Town, rather than the wider town in Tongxiang.",
    stayAnswer:
      "A relaxed half day in the visitor area, plus complete transfers, can suit a first introduction when you choose a manageable route and leave time for a meal. One night adds an evening and a morning if arrival and departure preserve those hours. Two nights are a choice for a property you want to use, architectural drawing or photography, or an independently arranged interest. They are not a sightseeing requirement. A late arrival and early departure can remove most of the overnight benefit, and another night does not guarantee empty canals, a special event or a textile workshop.",
    hotelAnswer:
      "Compare the actual property within the managed visitor setting with hotels outside it that may offer easier road access. Confirm which building and room you are booking, the view, bathroom, bed, sound insulation, heating or cooling, breakfast and final luggage route. Establish whether entry, re-entry and any internal transport are included in the specific rate. A Puyuan address can refer to the wider town, including commercial areas away from the desired walk. A canal-facing room may face other visitors or dining activity; a quieter room and a better bathroom may matter more than a particular exterior photograph.",
    sightseeingQuestion: "Should I choose Puyuan or Wuzhen?",
    sightseeingAnswer:
      "Choose Puyuan when its actual room, canal-and-courtyard spaces and contemporary visitor-town design appeal to you. Choose Wuzhen using the specific Dongzha/Xizha route and property you want, rather than a general water-town label. Both require honest descriptions of historic fabric, restoration and present-day visitor management. Neither is always quieter, more authentic or more luxurious. For a short trip, choose one and protect time in Shanghai, Hangzhou or Suzhou. Add a second town only when the architectural subjects, rooms and available days make the difference worthwhile.",
    visitorResources: [
      {
        label: "Tongxiang municipal government",
        href: "https://www.tx.gov.cn/",
        scope:
          "Starting point for town background and links to current local culture or visitor notices, mainly in Chinese. Confirm the exact visitor-area entrance, current opening, ticket scope, property terms and named cultural spaces with the actual operator. Municipal background does not establish a dated event or an available textile host.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and full station names. Tongxiang station is a separate gateway from Puyuan's visitor entrance or hotel. Compare both terminal transfers and the final road with a direct road journey from the actual city base; a municipal destination name is not a pickup address.",
      },
    ],
    serviceScope:
      "A tailored Puyuan plan should name the included visitor area and cultural spaces, guide language, current admission arrangements, walking route, exact pickup and complete transfers. For an overnight, specify the property, room category, check-in and last luggage approach. A boat, performance, tea activity or special cultural space needs its own confirmed terms. A textile-learning visit is separate from the town walk and requires an actual provider. Private guiding does not include exclusive streets, production access, a designer meeting or entry to every attractive building. No host, event or particular room is promised by this guide.",
    routeAdvice:
      "Choose Puyuan for a deliberate water-town day or property stay, then compare it with Wuzhen or Xitang before adding another similar stop. Share your starting hotel, dates, available nights and interests in architecture, photography or textiles. We can assess a tailored plan that gives the chosen town useful time and explains the room, entry and transfers. A textile workshop or designer visit needs a confirmed appointment. Puyuan services are separately agreed rather than assumed within a Shanghai or Hangzhou city tour.",
    practicalPlanning: {
      timing:
        "Confirm the visitor area's current schedule, named interiors and entry terms for the actual date. A public walk, religious space, separately managed garden, boat, performance and hotel check-in may have different arrangements. Do not build the day around an event seen in an old promotion. Weekends, holidays and private functions can change the experience. Early or late walks may feel different but cannot guarantee solitude. In summer, use cooling and a seated indoor break; in rain, shorten exposed sections and bridge crossings instead of insisting on the whole circuit.",
      walking:
        "Assess the selected canal route for bridges, thresholds, paving, seating, toilets and a practical shorter option. Broad-looking paths in a photograph do not establish a step-free route to every room or cultural space. Check the actual hotel approach, lifts, permitted internal transport and luggage handling. Boat boarding has its own demands and is not automatically an accessibility solution. A private car can help between the station and entrance but cannot reach every pedestrian lane or remove the walking within a large visitor area.",
      cost: "Compare the same starting and return addresses, guide time, vehicle or rail plus local transport, named admissions and any separately booked activity. For a room, add the exact category, breakfast, entry or re-entry, luggage and current facility terms. Clarify cancellation and alternatives if a cultural space or event is unavailable. Premium value should appear in a suitable room, coherent interpretation, comfortable pacing and clear inclusions. It is not established by a luxury adjective, a textile-shopping commission or a claim that every building is historic.",
    },
    attractions: [
      "A selected canal-and-bridge route through the managed visitor area",
      "Fushan Temple / Fushan Si for a distinct cultural subject when its current route is open",
      "Shufang Chanyuan when access and the actual visit terms are confirmed",
      "Courtyards, rooflines and changing waterfront views approached as a design subject",
      "A separate, genuinely arranged textile-learning interest rather than an assumed factory visit",
      "A comfortable meal and time at the actual property for an overnight",
      "Wuzhen or Xitang as alternatives chosen for their particular routes and rooms",
    ],
    stays: [
      {
        label: "Day visit / a selected route and a proper meal",
        advice:
          "Give the visitor area a relaxed half day, plus the full transfers. Choose a canal route and one cultural space for different subjects, then sit down for lunch. Compare keeping the existing city hotel with moving luggage, and leave out another distant water town if it would rush the visit.",
      },
      {
        label: "1 night / protect the evening and following morning",
        advice:
          "Arrive with time for the chosen interiors and room check-in, enjoy dinner without a return transfer and leave time after breakfast. Confirm the exact entry and luggage terms. An evening program should be an expressly confirmed addition, not the sole justification for a room booked from an old photograph.",
      },
      {
        label: "2 nights / let the property and slower purpose earn the time",
        advice:
          "Choose this for a room and facilities you want to enjoy, sustained drawing or photography, or a confirmed specialist interest. Leave time unprogrammed. Two nights do not need to be filled with repeated canal loops, shopping or a second water-town excursion that adds little understanding.",
      },
    ],
    hotelAreas: [
      {
        name: "Within the managed visitor setting / the room and guest terms first",
        advice:
          "Useful when the evening, morning and property are central to the stay. Check the actual building, room, stairs or lift, bathroom, noise, climate control and luggage approach. Clarify admission, re-entry, breakfast and how any permitted internal transport works. Historic-style design is not proof of an original historic structure.",
      },
      {
        name: "Outside the visitor area / road access and wider-town hotels",
        advice:
          "Can suit easier pickup, room facilities or a practical budget choice. Verify the journey to the desired entrance, evening meals and return, rather than use the town name as a distance measure. A room near contemporary textile businesses may serve a professional visit while offering a different experience from a canal-town overnight.",
      },
      {
        name: "Existing city base or a Wuzhen room / compare the whole route",
        advice:
          "Keep the Shanghai, Hangzhou or other city hotel when a selective day visit is enough. A Wuzhen property is a separate town choice, not a Puyuan hotel area. Count the actual journeys, luggage handling and useful hours before including both towns or changing rooms again.",
      },
    ],
    tradeoffs: [
      {
        title: "Puyuan town and the visitor area are different scopes",
        advice:
          "The wider town includes businesses, residents and contemporary streets beyond the managed destination. Confirm the specific entrance and property rather than assume every Puyuan address leads to the canal walk. A visitor ticket also does not include access to the textile economy around it.",
      },
      {
        title: "A thoughtful reconstruction can be interesting when described honestly",
        advice:
          "Distinguish documented older fabric, repair, reconstruction and new visitor facilities. Look at the relationship between water, courts, rooflines and walking routes as well as individual details. Guests can enjoy a designed setting without being told it is an unchanged ancient village or that every interior has the same history.",
      },
      {
        title: "A named cultural space needs its own access check",
        advice:
          "Fushan Temple and Shufang Chanyuan should each be assessed for current opening, route and visit terms. Do not assume a garden, terrace or tea setting seen in a photograph is a public passage included with every ticket. Establish whether a separate booking, activity or purchase is involved, then give guests a clear choice.",
      },
      {
        title: "Textile learning, clothing retail and business sourcing are different visits",
        advice:
          "Decide whether the interest is materials and making, a finished garment or a professional discussion. A knitwear reputation does not establish public factory entry or a willing host. Agree the provider, language, photography and purchase expectations before adding an activity to a leisure itinerary.",
      },
      {
        title: "A photogenic room and a restful stay require separate checks",
        advice:
          "Ask about the exact room outlook, neighboring restaurants, passing voices, sound insulation and available facilities. A quieter courtyard or less prominent building may deliver better sleep. A famous facade or canal reflection should complement a comfortable bed, bathroom and practical access, not replace them.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "tongxiang",
        advice:
          "Tongxiang is the wider county-level city, with a Wutong urban base and separate Shimen art-and-literature interests. Add one purposeful cultural subject when its actual opening and complete road route work. A city night is not automatically needed before a Puyuan property stay, so stay in Puyuan itself when unhurried evenings in the town matter most.",
      },
      {
        slug: "wuzhen",
        advice:
          "Compare Puyuan's actual property and canal-and-courtyard route with Wuzhen's Dongzha/Xizha choices and guest arrangements. Both are within Tongxiang but require separate complete journeys. One chosen town can be enough; include two only when the differences and available nights justify another transfer.",
      },
      {
        slug: "xitang",
        advice:
          "Xitang offers covered waterfront passages and selected bridge-and-lane walking in Jiashan. Compare that architectural subject, evening activity and specific room with Puyuan. Choose using the route and sleep requirements rather than assume either town is always quieter or more authentic.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, Longjing tea and a contrasting city chapter. Compare direct road transport with dated rail and both terminal transfers to the actual Puyuan address. Protect useful lake and tea time instead of adding a rushed visitor-town loop between fixed bookings.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai offers a city stay and international gateways. A Puyuan day trip needs the full return journey; an overnight needs luggage and a useful morning. Compare the actual Shanghai hotel and rail gateway, and keep flight connections separate from uncertain road conditions or activity schedules.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit walking and architectural observation, with rain and busy holidays still possible. Summer requires shade, cooling and shorter outdoor stretches; canals do not remove heat or humidity. Winter can be cold and damp, so heating and warm indoor breaks matter. Trees around a named cultural site can add seasonal interest, but color, light and empty viewpoints are not guaranteed. Check dated event and space access separately rather than choose the whole stay from a promotional image.",
    orientation:
      "Puyuan town is within Tongxiang, Jiaxing municipality, Zhejiang. The managed destination marketed as Puyuan Fashion Ancient Town is a more specific visitor area within the wider town. Contemporary textile businesses, visitor entrances and individual hotels have different addresses. Tongxiang station is another location again. Wuzhen is a separate town within Tongxiang; Xitang is in Jiashan. Use the exact visitor entrance and check-in point for transport, not the provincial, municipal or town name alone.",
    experiences: [
      "Read the relationship between canals, courtyards, rooflines and selected bridge views",
      "Choose an actually accessible cultural space for a subject beyond another canal photograph",
      "Enjoy the room, dinner and morning that justify an unhurried overnight",
    ],
    planningNotes: [
      "Separate the managed visitor area, wider town and textile businesses",
      "Confirm the actual room, entry terms, named spaces and luggage route",
      "Compare one chosen town with a multi-town trip using complete transfers and useful hours",
    ],
    arrival:
      "Compare a direct road pickup from the actual Shanghai, Hangzhou or other city hotel with dated trains through the gateway that best serves the final address. Tongxiang station still requires a road transfer to Puyuan. Include the departure-hotel journey, boarding, luggage and the exact check-in or entrance. A visitor-area arrival point may not be the hotel reception or room. Agree permitted internal transport and the last luggage walk if relevant. Keep a separately booked activity or last interior entry away from uncertain international arrivals and tight onward connections.",
    gettingAround:
      "Choose a coherent walking route with seats and indoor breaks, rather than repeat bridges to reach every photographed building. Check the current route to Fushan Temple and any arranged Shufang Chanyuan visit. A cultural space may have different access terms from a public lane. Confirm boat operation, boarding and route separately, and do not assume it substitutes for the walk to a room. In wet or hot weather, shorten the plan while retaining one clear architectural or cultural subject.",
    stayStrategy:
      "Keep the existing city hotel for a day visit unless Puyuan's actual room, evening and morning are part of what you want. For one night, preserve usable time around check-in; for two, leave room to enjoy the property or pursue a real additional interest. Verify sleep, bathroom, temperature control, meals, entry and luggage before choosing by appearance. A planned visitor setting can support a comfortable stay when described accurately, without an invented claim of exclusive streets or untouched village life.",
    firstTimerNote:
      "Decide whether the appeal is the architecture, a particular room or a genuinely arranged textile interest. Build around that priority, then choose one cultural space or a manageable canal route that adds understanding. The town does not need to be misrepresented as unchanged to be enjoyable. If you mainly want Wuzhen's specific visitor areas or Xitang's covered corridors, choose that destination instead of adding Puyuan automatically.",
    faqs: [
      {
        question: "Where is Puyuan Ancient Town?",
        answer:
          "Puyuan is a town within Tongxiang, Jiaxing municipality, Zhejiang. Puyuan Ancient Town or Puyuan Fashion Ancient Town refers to a managed visitor destination within the wider town. Use 濮院时尚古镇 and the actual entrance or hotel address for transfers; contemporary businesses elsewhere in Puyuan are different destinations.",
      },
      {
        question: "Is Puyuan worth visiting?",
        answer:
          "It can be for a selected canal-and-courtyard walk, architectural photography, an accessible cultural space or a property you want to enjoy. Choose it for those actual qualities, with an honest understanding of restoration and modern development. On a short trip, one water town plus contrasting city time may be more rewarding than several similar stops.",
      },
      {
        question: "Is Puyuan an untouched historic village?",
        answer:
          "No. The town has a historical textile association, while the managed visitor setting includes restoration and substantial modern development. Individual buildings and cultural spaces need their own historical explanation. You can enjoy its design, canals and room choices without treating every facade as original or the whole setting as unchanged village life.",
      },
      {
        question: "Is Puyuan or Wuzhen better for an overnight?",
        answer:
          "Choose by the actual property, visitor route, entry arrangements and purpose of the stay. Wuzhen has distinct Dongzha/Xizha choices; Puyuan offers its own canal-and-courtyard setting and rooms. Neither is always quieter or more luxurious. Compare dinner, luggage, sleep and the complete onward journey before adding both.",
      },
      {
        question: "How many nights should I spend in Puyuan?",
        answer:
          "A relaxed half-day visit plus transfers can introduce the setting. One night adds dinner and a morning when the schedule preserves them. Two nights suit property time, drawing or photography, or a confirmed additional interest rather than being necessary for the introductory sights. A late arrival and early departure reduce the benefit.",
      },
      {
        question: "Can I visit Puyuan on a day trip from Shanghai or Hangzhou?",
        answer:
          "Yes, when the complete return journey leaves enough time for the chosen walk, a cultural space and lunch. Compare direct road transport with dated rail and both terminal transfers. Tongxiang station is not the visitor entrance. Avoid attaching several towns or a tight flight connection to the same day.",
      },
      {
        question: "Where should I stay in Puyuan?",
        answer:
          "Compare the exact property within the managed visitor setting with an outside hotel that offers easier road access or serves a different purpose. Verify room position, noise, bathroom, climate control, meals, entry and luggage. A Puyuan hotel name does not establish a canal-view room or walking access to every cultural space.",
      },
      {
        question: "Does a Puyuan hotel booking include tickets and cultural-space entry?",
        answer:
          "Check the exact rate and guest terms. Accommodation, visitor admission, re-entry, internal transport, boats, events and separately managed spaces are distinct items unless expressly included. Confirm Shufang Chanyuan and any specific activity separately rather than infer access from an attractive photograph or a general hotel description.",
      },
      {
        question: "Can I add a textile workshop or designer visit in Puyuan?",
        answer:
          "Only when an actual provider and visit are confirmed. Clothing retail, a working facility, a professional sourcing meeting and a hands-on activity require different arrangements. Agree the purpose, language, photography, time and purchase expectations. A visitor-town ticket and the region's knitwear reputation do not establish factory or designer access.",
      },
    ],
    culturalStory: {
      title: "Read the spaces honestly, then decide what you want to learn",
      paragraphs: [
        "Puyuan's historical textile associations and contemporary knitwear economy help explain why fabric and fashion appear in its visitor identity. They do not make every shop a production studio or every demonstration a working process open to guests. A useful interpretation separates the town's older story, modern commercial activity and the design of the managed visitor area. Look at how canals, courts, bridges and rooflines are arranged, and explain repair, reconstruction and new use without turning visual appeal into an unsupported claim of age.",
        "Fushan Temple, or Fushan Si (福善寺), can provide a distinct cultural subject when its current route is accessible. Treat worship spaces and photography rules with care, and describe seasonal trees without guaranteeing color or an empty courtyard. Shufang Chanyuan (漱芳禅园) needs its own access assessment and should not be assumed to share every public-lane or temple arrangement. A smaller number of well-explained spaces can be more rewarding than collecting buildings whose history or entry terms have not been established.",
      ],
    },
    foodStory: {
      title: "A comfortable meal is part of the stay you are choosing",
      paragraphs: [
        "Choose a kitchen and meal time that work with the actual route, not just a picturesque waterside table. Regional menus may offer freshwater fish, pork preparations, seasonal vegetables and shared pot dishes; ask about bones, ingredients, portions and cooking style. A Tongxiang-style bao (煲) is a pot preparation, not one fixed recipe, so confirm the version being served. Regional names and canal views do not prove that ingredients were caught locally or that every dish is unique to Puyuan.",
        "Ask about broth, fish, shellfish, pork, soy, wheat, egg and shared equipment for dietary needs. Vegetable and tofu dishes are not automatically vegetarian, and a small kitchen may be unable to control serious allergy cross-contact. For an overnight, check restaurant hours, breakfast and alternatives before choosing a property around an evening photograph. A tasting, a retail visit and a cooking activity need different arrangements; keep purchases optional and confirm any host or hands-on session separately.",
      ],
    },
    itinerary: [
      {
        day: "Morning / arrival",
        title: "Reach the correct entrance with the selected spaces in mind",
        description:
          "Complete the journey from the actual city base or station and arrange luggage if staying. Confirm current entry terms and begin a manageable canal-and-bridge route. Put the chosen cultural space within its actual opening or booked access rather than assume every building is open throughout the day.",
      },
      {
        day: "Lunch and afternoon",
        title: "Add a cultural subject and time to look closely",
        description:
          "Take a seated lunch and include Fushan Temple or another confirmed space for a distinct subject. Add Shufang Chanyuan only under the actual agreed terms. Leave rest and weather flexibility. Day visitors allow time for the complete return journey rather than rush to another water town.",
      },
      {
        day: "Optional overnight",
        title: "Use the room and evening that justify staying",
        description:
          "Settle into the confirmed room, enjoy dinner and choose an evening walk according to access, light and weather. Include a performance or activity only when its date, venue and booking are confirmed. The stay does not provide private streets or access to every terrace and cultural space.",
      },
      {
        day: "Following morning",
        title: "Leave time for breakfast before a contrasting next chapter",
        description:
          "Use a short morning walk if conditions suit, collect luggage and continue to the exact next hotel or station. A second night needs an additional purpose agreed in advance. This outline is illustrative, not a published package or a guarantee of rooms, tickets, boats, events, workshops or specialist access.",
      },
    ],
  },
};
