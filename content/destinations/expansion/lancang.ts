import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/lancang.svg",
  alt: "Original Lancang county planning schematic separating the county-town base, a confirmed Laodabao visit and a dedicated Jingmai Mountain stay; not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const lancangGuide: ExpandedDestination = {
  id: "lancang",
  name: "Lancang",
  region: "southwest",
  kicker: "Lahu cultural context and a county route beyond the tea-forest headline",
  description:
    "Choose a Lancang county stay around a clear cultural purpose, separating town services, Laodabao and a dedicated Jingmai Mountain chapter.",
  stay: "2–3 nights for a focused county chapter",
  bestFor: "Lahu cultural learning, considered village visits and southern Yunnan route planning",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["jingmai-mountain", "puer", "xishuangbanna"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Lancang Travel Guide: Lahu Culture, Laodabao & Stays",
    seoTitle: "Lancang Guide: Lahu Culture & Where to Stay",
    seoDescription:
      "Plan Lancang County beyond Jingmai Mountain: Lahu cultural context, Laodabao visits, town hotels, airport transfers and a focused two- or three-night stay.",
    answer:
      "Lancang Lahu Autonomous County (澜沧拉祜族自治县) is part of the wider Pu'er municipality in southern Yunnan. It is not the Simao urban center, the whole Lancang River or another name for Jingmai Mountain. Jingmai's tea-forest landscape lies within the county, but a broader Lancang visit needs its own reason: Lahu cultural learning, a properly arranged Laodabao visit or a practical town base between distinct chapters. Two nights allow one full local day; three can add a genuinely different subject. Choose a confirmed host and actual room before adding a county stay simply to collect another destination name.",
    stayAnswer:
      "Two nights work as a starting point for one focused cultural day, with arrival and departure separate. Three can provide time for another confirmed visit, a slower town rhythm or more comfortable transport. A county-town night can also serve a genuine gateway need, but that is different from a full cultural stay. If Jingmai Mountain is the sole purpose, consider going to the actual mountain property instead of adding town nights automatically. A combined county-and-mountain journey needs usable time in each base and the full road between them.",
    hotelAnswer:
      "Choose a named county-town hotel when dining, services and the selected local route make it practical. Menglang (勐朗), the county-seat area, is different from a Jingmai village stay. Check the actual room's noise, bathroom, temperature control, dampness, breakfast, stairs or lift and vehicle approach. A rural property near a cultural visit requires its own assessment of meals, sleep and host arrangements. On Jingmai, choose the village or mountain hotel for a dedicated tea-forest chapter, using the detailed mountain guide. Neither a Lahu-themed hotel nor a village address establishes private hospitality or an included performance.",
    sightseeingQuestion: "Should I add Lancang town and Laodabao to a Jingmai Mountain trip?",
    sightseeingAnswer:
      "Add them when they provide a distinct cultural purpose and the actual appointments, roads and room standard justify the time. Laodabao (老达保) is associated with Lahu musical culture, but a public village walk, a scheduled performance and a hosted discussion are different visits. Ask what is available, who will lead it and how the interpretation works. If the holiday is primarily about tea forests and village time on Jingmai, protect that stay instead of turning the county into a rushed circuit. Town services can be useful without being presented as an attraction in themselves.",
    visitorResources: [
      {
        label: "Lancang county government",
        href: "https://www.lancang.gov.cn/",
        scope:
          "County background and dated notices, primarily in Chinese. Check the actual village, public visitor operation, host, local roads and institution for the proposed dates. A cultural introduction does not establish a daily performance, a private invitation or an available room.",
      },
      {
        label: "Pu'er municipal government",
        href: "https://www.puershi.gov.cn/",
        scope:
          "Wider administrative and regional context. Distinguish Simao city, Lancang county town, the airport and specific mountain villages. Regional tourism information is not a complete dated transport plan or verification of a particular cultural provider.",
      },
      {
        label: "UNESCO: Jingmai Mountain old tea-forest cultural landscape",
        href: "https://whc.unesco.org/en/list/1665/",
        scope:
          "Reference for the defined heritage landscape within Lancang County. Inscription does not cover the entire county as one property, certify every tea sold locally or establish entry to homes, ceremonies, working spaces or all forest paths.",
      },
    ],
    serviceScope:
      "A county proposal should identify the actual hotel, all roads and gateway transfers, guide and interpreting language, host or institution when confirmed, subject, duration, meals and visitor fees. State whether Laodabao involves a public visit, booked performance, workshop or conversation, and what remains optional. Music, household hospitality, religious participation and photography require appropriate consent and arrangements. A private guide cannot produce a community gathering on demand. A strong cultural visit offers context and time for questions rather than promise access on the strength of a theme or ethnic label.",
    routeAdvice:
      "Use this guide to decide whether a county-town and Lahu cultural chapter belongs in the journey. Use the Jingmai Mountain guide for the detailed tea-forest and village stay. Simao city-area Pu'er and Jinghong in Xishuangbanna are separate bases with complete roads and dated gateways to compare. No matching published Lancang product is recommended here. Share the actual arrival and departure, dates, room expectations, walking needs and whether the interest is music, contemporary community life or tea; a tailored proposal should explain what each added night contributes.",
    practicalPlanning: {
      timing:
        "Fix the substantive host or institution first, then arrange the village route and meal. Do not make an essential conversation depend on an uncertain arrival flight. A public performance may have its own calendar and group arrangements; a quiet discussion needs a different setting. Keep time for interpretation and questions rather than plan consecutive short stops. Review wet-season roads and the actual departure journey before treating the final morning as another full visiting session.",
      walking:
        "Ask about each village route's gradients, paving, steps, shade, seating and toilets. A short public walk, a seated musical discussion and a longer countryside route have different demands. Confirm room access and the vehicle pickup as well as attraction walking. Heat, rain, slippery surfaces and mountain-road motion can matter more than distance. A car cannot enter every lane or remove steps, and a town hotel is not proof of step-free cultural access.",
      cost: "Compare the exact room, complete road hours, guide and interpreter roles, host or performance arrangement, meals and admissions. A general village outing and a private learning session are different services. Clarify whether a sales visit is involved and keep purchases optional. Tea, instruments, recordings, packing, delivery and any destination-country restrictions need their own terms; a cultural visit does not automatically include international shipping or reproduction rights.",
    },
    attractions: [
      "A confirmed Laodabao visit with a clear musical or cultural purpose",
      "A properly interpreted conversation with a willing local host, when available",
      "A selected public county-town route and a relaxed local meal",
      "A distinct Jingmai Mountain stay using its own village and tea-forest plan",
      "A separately arranged tea session with identified products and a specific learning focus",
      "A manageable countryside route chosen for the actual guests and current access",
    ],
    stays: [
      {
        label: "1 town night / a genuine gateway purpose",
        advice:
          "Useful when the transport, arrival hour or room requirements justify it. Be clear that an overnight between roads is not a complete county visit. Do not promise an artist, family meal or major performance in a short uncertain window before the onward transfer.",
      },
      {
        label: "2 nights / one full local cultural day",
        advice:
          "Choose a dependable base and one substantial subject, with interpretation, lunch and time for questions. Add a modest complementary public route when useful. This is a focused introduction rather than completion of all Lancang or an additional full Jingmai holiday.",
      },
      {
        label: "3 nights or a split stay / a second clear purpose",
        advice:
          "Add a confirmed distinct learning session or slower county time. If moving to Jingmai, choose the actual mountain property and protect its useful days; count the full transfer and new check-in. More nights should improve depth and comfort rather than multiply similar tastings or staged encounters.",
      },
    ],
    hotelAreas: [
      {
        name: "Menglang county-seat area / services and a specific local route",
        advice:
          "Compare actual hotels by sleep, bathroom, temperature, breakfast and the road to the chosen interest. Central dining can help, while street-facing rooms may be noisy. A town base is a practical choice when it serves the plan, not evidence that the tea forests or every village are nearby.",
      },
      {
        name: "A named rural property / assess the complete stay",
        advice:
          "Ask about bathroom, hot water, bedding, insects, dampness, sound, meals, luggage and vehicle approach. Establish the real host relationship independently of the room booking. A rural setting may be attractive but does not automatically offer quiet, a performance, English interpretation or reliable facilities.",
      },
      {
        name: "Jingmai Mountain / a separate tea-forest base",
        advice:
          "Choose when the mountain landscape, selected villages and tea learning are the reason to stay. Use the dedicated guide to compare village and other mountain properties. Daily commuting from town and sleeping in a mountain village create different holidays, even though both lie within Lancang County.",
      },
    ],
    tradeoffs: [
      {
        title: "Lancang County is broader than its best-known tea landscape",
        advice:
          "The county guide should answer base and route questions that a Jingmai guide cannot. Add a county chapter for a real local interest, not because a shared administrative name makes every stop essential. Conversely, a mountain stay does not automatically introduce the range of Lahu cultural life across the county.",
      },
      {
        title: "Music needs context, not just a scheduled song",
        advice:
          "For Laodabao, ask who is performing or speaking, how the song will be introduced and whether translation includes its subject and present-day use. A conversation, public show and informal musical exchange offer different kinds of understanding. Contemporary creativity is valuable in its own right; avoid presenting every guitar or public performance as an unchanged ancient ritual.",
      },
      {
        title: "A village walk is not a personal invitation",
        advice:
          "Public lanes do not make homes, courtyards or places of worship open to visitors. Arrange any hosted meeting with a willing participant, suitable payment or terms and clear language support. Ask before portraits, recording or entering work areas. Residents should be able to decline without the visitor's day depending on an improvised encounter.",
      },
      {
        title: "A shorter tea introduction can be useful without becoming a mountain stay",
        advice:
          "A well-arranged seated session can explain identified teas, processing or brewing when time or mobility limits a longer route. It is not equivalent to walking Jingmai's tea-forest landscape. Let the actual learning meet the guest's needs rather than describe every tasting as a plantation tour or every purchase as proof of origin.",
      },
      {
        title: "The airport name does not decide the best gateway",
        advice:
          "Lancang Jingmai Airport is not the county hotel or the tea forest. Compare actual dated services, connections and the entire road to the booked room with options through Pu'er or Xishuangbanna. A convenient-looking flight segment can still leave an awkward arrival or a substantial final transfer.",
      },
      {
        title: "A high-end county visit is built from specific arrangements",
        advice:
          "A quiet suitable room, a thoughtful interpreter, an informed willing host, a comfortable meal and well-paced roads can make a modest setting deeply rewarding. Decorative branding cannot supply those things. Ask what has been confirmed and keep a useful alternative if a host is unavailable, rather than build the day around a vague promise of exclusivity.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jingmai-mountain",
        advice:
          "Jingmai is the dedicated guide for tea forests, Wengji and Nuogan choices, mountain rooms and a deeper tea stay within Lancang County. Use it to plan the actual mountain chapter rather than duplicate the county-town day. A shared county does not make the full road, host appointments and hotel move disappear.",
      },
      {
        slug: "puer",
        advice:
          "Pu'er's Simao urban area adds a different city and selected tea or coffee interests. It is not Lancang county town. Compare the actual gateways, complete road and useful local nights, choosing distinct learning rather than repeat a generic tasting in each place.",
      },
      {
        slug: "xishuangbanna",
        advice:
          "Xishuangbanna adds a separate southern Yunnan chapter, with Jinghong, Dai cultural context and a considered botanical-garden option. Check the actual road and chosen base; neither a tropical label nor a shared tea interest makes these communities and visits interchangeable.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates for the specific host, route and room as well as the season. Drier periods can make village and road planning easier, but temperatures, dust or haze may affect comfort and views. Rain can change rural surfaces and travel, while the room still needs suitable ventilation or temperature control. A musical visit depends on the actual participants and program, not a guaranteed year-round performance calendar. Tea work follows the producer and weather; a cultural county stay need not depend on catching a harvest.",
    orientation:
      "Lancang Lahu Autonomous County lies within Pu'er in southern Yunnan, with its county seat in the Menglang area. The county, Lancang Jingmai Airport, Laodabao, Jingmai Mountain and the Simao urban center are distinct locations. The Lancang River is a much larger geographical subject, not another name for this county itinerary. Choose a Menglang-area base for county-town needs, or a Jingmai property for time in the tea landscape; compare the full roads before combining them. Keep full Chinese addresses and exact venue names in the transport plan.",
    experiences: [
      "Understand a selected Lahu cultural subject through a willing informed host and useful interpretation",
      "Give Laodabao music a clear context rather than treat a performance as the whole culture",
      "Choose a town or mountain base that supports comfortable roads, meals and meaningful local time",
    ],
    planningNotes: [
      "Keep county-town services, Laodabao and the dedicated Jingmai chapter geographically distinct",
      "Confirm the host, format, interpretation, consent and actual subject before building the day",
      "Compare the complete airport or city gateway with the real room and departure road",
    ],
    arrival:
      "Compare actual dated flights into Lancang Jingmai Airport with the complete transfer to the chosen property, and compare alternatives through Pu'er or Xishuangbanna only when the whole journey makes sense. An airport name is not a village address. Rail options serving another city still require the full onward road and a suitable connection. Confirm pickup using the flight or train booking and Chinese hotel name, protect a substantive host session from uncertain arrival, and leave a realistic departure margin for road changes.",
    gettingAround:
      "Plan roads around the selected venue, meal and overnight rather than an unlimited county circuit. Ask about road surface, bends, walking beyond the vehicle and useful rest stops. Laodabao and a mountain-village route require their own timing and access choices. Private transport does not open homes, religious buildings or working areas. For a guest who needs less walking, arrange a genuinely suitable seated subject and assess its entrance, toilets and room approach instead of simply shortening a route on paper.",
    stayStrategy:
      "Use a county-town base for a confirmed county interest or a real transport advantage. Use a Jingmai base for a mountain-led holiday. A split stay is worthwhile when both chapters have substantive time and the hotel move improves the experience. For higher expectations, verify the actual room and meals, guide language and host expertise. A strong proposal should remain valuable without a performance on demand, a private household invitation or a shopping purchase.",
    firstTimerNote:
      "Decide what you want to learn before choosing how many villages to visit. For a musical interest, ask what the song means, who sings it and how people use or adapt it today. For tea, ask which product you are tasting and how it was made. Then choose the host and setting that can answer those questions. A few specific conversations with good interpretation offer more than a long sequence of loosely described ethnic stops.",
    faqs: [
      {
        question: "Is Lancang the same as Pu'er city?",
        answer:
          "No. Lancang is a Lahu autonomous county within the wider Pu'er municipality. Pu'er's Simao urban center is a separate base. Use the county, actual town and full Chinese hotel address when comparing transport and accommodation.",
      },
      {
        question: "Is Jingmai Mountain in Lancang County?",
        answer:
          "Yes. The tea-forest cultural landscape lies within Lancang County, but the county is larger than that destination. Choose the dedicated Jingmai guide for mountain villages, forest routes and mountain stays; use this guide for broader county-base and cultural choices.",
      },
      {
        question: "How many nights should I spend in Lancang?",
        answer:
          "Two nights allow one full focused county day. Three can add another confirmed subject or slower pacing. A separate Jingmai chapter needs its own useful time and complete transfer. A single gateway night should not be presented as a full cultural visit.",
      },
      {
        question: "What can I expect from a Laodabao visit?",
        answer:
          "Laodabao is associated with Lahu musical culture. Confirm whether the visit involves public space, a scheduled performance, a workshop or a hosted conversation, with actual participants and interpretation. Music, home entry and informal recording are not guaranteed by arriving in the village.",
      },
      {
        question: "Should I stay in Lancang town or on Jingmai Mountain?",
        answer:
          "Choose the county town for a real services, gateway or county-cultural purpose; choose a mountain property when tea forests and selected Jingmai villages are central. Compare the full roads, actual room and host appointments. They are different bases, not equivalent hotel neighborhoods.",
      },
      {
        question: "Is Lancang Jingmai Airport beside the tea forest?",
        answer:
          "Do not treat the airport as the forest or hotel entrance. The final road depends on the actual property and village. Compare dated flights, connections, pickup and the entire journey with other gateways before deciding which arrival is most practical.",
      },
      {
        question: "Do I need to buy tea or attend a performance to enjoy Lancang?",
        answer:
          "No. A well-arranged cultural discussion, public village route or identified tasting can be valuable without buying. Choose a clear learning purpose and a suitable confirmed provider. Purchasing, performances and hosted hospitality should be separately agreed choices.",
      },
    ],
    culturalStory: {
      title: "Let a musical visit explain people, not just a label",
      paragraphs: [
        "A performance is an entry point, not a complete portrait of Lahu life. Ask about the subject of a particular song, the language used, the people performing and the occasion for which it is sung. Contemporary arrangements and instruments can be part of a living creative tradition rather than evidence that the experience is less worthwhile. Good interpretation makes those relationships visible and leaves space for the participants to describe their own work.",
        "A cultural visit also needs clear boundaries. Listening in a public setting, joining an agreed activity, entering a home and recording a conversation involve different permissions. Ask before taking close portraits or publishing recordings, and respect a decision not to participate. The quality lies in an informed exchange and appropriate compensation or terms, not in a visitor's ability to obtain spontaneous access to private life.",
      ],
    },
    foodStory: {
      title: "Choose the actual kitchen, not a generic ethnic menu",
      paragraphs: [
        "Use a relaxed meal to make room for conversation between the day's main visits. Ask the specific kitchen which dishes it prepares well and how rice, vegetables, herbs, meats or dipping sauces fit together on that table. A town restaurant, village meal and hotel dinner offer different choices and should be described individually. A family meal is worthwhile only when there is a willing host and a clear arrangement; it is not an assumed inclusion in a village walk.",
        "Review pork, fish, meat stocks, soy, eggs, wheat, nuts and shared preparation as relevant. A vegetable dish does not establish vegan cooking, and a rural host may not have the facilities to manage a serious allergy. Confirm actual capacity and a suitable alternative in advance. Discuss spice, drinking water and non-tea drinks as well as caffeine preferences; a tea-country itinerary should not require guests to drink more tea than they enjoy.",
      ],
    },
    itinerary: [
      {
        day: "Day 1 / arrival",
        title: "Settle into the base that serves the county plan",
        description:
          "Complete the actual gateway road, check the quoted room and have a comfortable meal. Review the following day's host and format. Keep the main cultural session away from an uncertain arrival; town time can remain modest rather than chase an unconfirmed performance.",
      },
      {
        day: "Day 2 / a focused cultural day",
        title: "Give one subject a proper conversation",
        description:
          "Use a confirmed Laodabao or other selected cultural arrangement with interpretation, time for questions, lunch and rest. Add a complementary public route only when it has a clear purpose. A musical activity, private home or recording opportunity requires its own consent and terms.",
      },
      {
        day: "Day 3 / onward or another distinct day",
        title: "Continue to the actual mountain or city chapter",
        description:
          "Allow breakfast, bags and the full road to Jingmai, Pu'er or the chosen gateway. Add another county night only for a genuine additional interest. A mountain stay should retain useful days of its own. This outline is illustrative, not a published product or a guarantee of hosts, performances, rooms, tea production or private access.",
      },
    ],
  },
};
