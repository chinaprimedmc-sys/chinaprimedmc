import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jiuhua-mountain.svg",
  alt: "Original Jiuhua Mountain planning schematic distinguishing Jiuhua Street temple visits, a separate Tiantai walking decision and mountain-village versus lower-gateway accommodation; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const jiuhuaMountainGuide: ExpandedDestination = {
  id: "jiuhua-mountain",
  name: "Jiuhua Mountain",
  region: "east",
  kicker: "A living Buddhist mountain, best approached with time and respect",
  description:
    "Plan Jiuhuashan around a thoughtful temple route, realistic steps and the right overnight base. Choose Jiuhua Street, Tiantai and lower-area visits for their differences.",
  stay: "2 nights for a focused introduction; 3 for a separate mountain day",
  bestFor: "Buddhist cultural interests, pilgrimage-aware guiding and selective mountain walks",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "chizhou",
    "huangshan",
    "hongcun",
    "xuancheng",
    "hefei",
    "nanjing",
    "wutai-mountain",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jiuhua Mountain Travel Guide: Temples, Walks & Where to Stay",
    seoTitle: "Jiuhua Mountain Guide: Temples & Where to Stay",
    seoDescription:
      "Plan Jiuhuashan's temple routes, Tiantai walking and mountain-village or lower-gateway hotels. Practical advice for a respectful, tailored 2–3-night visit.",
    answer:
      "Jiuhua Mountain (九华山), also called Jiuhuashan, is a Buddhist sacred mountain in the Chizhou area of Anhui, associated with Dizang, or Kshitigarbha Bodhisattva. Its central planning choice is how to balance living religious places, walking and rest. Begin with a selected temple route around Jiuhua Street (九华街), then decide separately whether Tiantai (天台) adds a mountain day that suits your abilities. Two nights allow a focused introduction with one full day; three give two full days and more room for the higher route. A private guide can explain context and pacing, while worship, access and photography remain subject to each temple's rules.",
    stayAnswer:
      "Start with two nights when one full temple-focused day meets your interests. Use arrival and departure hours only when the complete transfers leave useful time. Three nights allow a separate Tiantai day or a slower cultural visit without treating every temple as compulsory. A day trip can offer a limited introduction from a suitable nearby base, but the gateway, mountain transport and return must fit. For pilgrims, agree the actual worship priorities and time needed; a standard sightseeing day is not automatically an appropriate pilgrimage itinerary.",
    hotelAnswer:
      "Choose a room near Jiuhua Street when evenings in the mountain settlement and easier access to the selected temple route matter. Check the final approach, steps, vehicle restrictions, luggage and sound from nearby activity. A lower-gateway property around the Kecun area can offer a different room and arrival arrangement, with a separate journey to the mountain settlement. A Chizhou city room serves another gateway purpose and is not beside the temples. Compare heating or cooling, dampness, bathroom, bed, lifts, breakfast and dinner before booking; the location label 'Jiuhua Mountain' alone is too broad.",
    sightseeingQuestion: "Should I choose a temple day or the Tiantai route?",
    sightseeingAnswer:
      "Choose a temple-focused day when Buddhist culture, architecture and understanding worship are the priority, or when prolonged steps would reduce enjoyment. Jiuhua Street, Huacheng Temple and a carefully selected additional site can provide a substantive visit. Choose Tiantai as a separate mountain chapter when its actual walking, weather and transport suit the group. A cableway can reduce ascent but does not make every terrace and viewpoint step-free. With limited time, a well-explained temple route is more valuable than a rushed attempt to reach every high point.",
    visitorResources: [
      {
        label: "Chizhou municipal government",
        href: "https://www.chizhou.gov.cn/",
        scope:
          "Reference entry point for regional background and public notices, mainly in Chinese. Check current mountain transport, visitor management, each temple route and hotel access with the responsible operators. Regional information does not establish ritual participation, a private monastic audience or admission to restricted religious spaces.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and full station names, including Jiuhuashan or Chizhou where relevant to the actual itinerary. A railway station named for the mountain is still a gateway requiring onward transport. Compare both local transfers and the final hotel approach rather than assume the train arrives in Jiuhua Street.",
      },
    ],
    serviceScope:
      "A tailored visit should name the selected temples and mountain route, guide language, current admissions, internal transport, cableway choices and full pickup and return. Explain walking and stair tolerance before choosing Tiantai or a hill-side temple. For an overnight, specify the room category, vehicle meeting point and luggage arrangement. A religious visitor's priorities need a respectful brief; donations and personal devotional choices should remain voluntary. A private guide does not confer special religious access or replace the authority of a temple's community.",
    routeAdvice:
      "Tell us whether this is a cultural visit, a personal pilgrimage or a mountain-and-temple journey. Share dates, starting point, available nights, stair tolerance and room priorities. We can compare a focused Jiuhua Street stay with a three-night plan that gives Tiantai its own day, then connect it to Huangshan or a different Anhui cultural chapter when the complete journey works. Request a tailored proposal identifying the visits, room, transport and included services. No matching published Jiuhua Mountain package is currently listed here.",
    practicalPlanning: {
      timing:
        "Keep the main temple route within current opening and worship arrangements, leaving room to observe respectfully and rest. Buddhist calendar dates, weekends and holidays can affect visitor numbers and room demand; confirm the relevant dates rather than assume a mountain village is quiet. For Tiantai, work backward from the actual last transport and descent, allowing weather flexibility. An evening near the hotel does not establish late access to every temple. Protect the complete gateway transfer before a fixed train or flight.",
      walking:
        "Describe a comfortable stair load and descent tolerance, not just a preferred walking duration. Temple thresholds, terraces and hill-side paths can involve steps even on a cultural day. Baisui Palace and Tiantai require their own route and transport assessment. Cableways or other internal transport, where operating, still leave approaches, boarding and walking beyond the upper station. Request a named shorter route, seating and a practical alternative when mobility or weather makes the higher plan unsuitable.",
      cost: "Compare the same temple selection, mountain admission, internal transport, cableways, guide time, hotel category and full transfers. Separate a lower-area attraction from the main mountain arrangements rather than assume one ticket covers every site. Check meals, luggage help and current hotel-access terms. Donations, incense and personal purchases should not become compulsory extras or a measure of religious benefit. Premium value comes from clear interpretation, comfort, realistic pacing and a useful fallback.",
    },
    attractions: [
      "Jiuhua Street / Jiuhua Jie for the mountain settlement and a selected temple route",
      "Huacheng Temple / 化城寺 as an introduction to the mountain's Buddhist context",
      "The Roushen Baodian / 肉身宝殿 sacred setting, subject to current access and religious etiquette",
      "Baisui Palace / 百岁宫 as a separate hill-side cultural and walking choice",
      "Tiantai / 天台 for a deliberately chosen higher mountain route",
      "The lower-area Dayuan Cultural Park / 大愿文化园 as a distinct modern visitor-complex decision",
      "A quiet meal and time to understand the relationship between pilgrimage and daily mountain life",
    ],
    stays: [
      {
        label: "Day introduction / a limited temple route",
        advice:
          "Use a nearby base only when the complete gateway and mountain transfers leave useful time. Choose the actual temples and lunch, with a comfortable return. Adding Tiantai and a lower-area complex to the same short day changes the pace substantially; a limited visit should be described honestly.",
      },
      {
        label: "2 nights / one full temple-focused day",
        advice:
          "Choose the room according to the main cultural route and luggage needs. Give the full day to a few well-explained temples and rest, using arrival or departure time for a shorter chapter only when the connection allows. Count steps and usable hours rather than the number of temple names.",
      },
      {
        label: "3 nights / a separate higher-route or slower cultural day",
        advice:
          "Allow one day for the settlement and temples and a second for Tiantai or another distinct interest. Keep the order flexible around conditions, subject to confirmed arrangements. The extra night should improve pacing and understanding rather than require the higher route when it does not suit the guest.",
      },
    ],
    hotelAreas: [
      {
        name: "Jiuhua Street area / a mountain-settlement stay",
        advice:
          "Useful when the temple route and time in the settlement are central to the visit. Check the actual room, noise, bathroom, temperature control, steps and final luggage section. Confirm current vehicle access and pickup rather than promise door-to-door private-car service from every property.",
      },
      {
        name: "Lower gateway around Kecun / a different arrival and room choice",
        advice:
          "Compare the property's comfort, dining and actual onward mountain transport. A lower room may suit arrival logistics or particular hotel requirements but adds a separate journey to the selected temples. Map the real entrance and internal-transport connection, not just a broad scenic-area address.",
      },
      {
        name: "Chizhou city / a deliberate gateway night",
        advice:
          "Choose a city room for a practical rail or air connection, dinner or an independent city interest. It is not a substitute for a mountain overnight beside Jiuhua Street. Assess the full next-day journey and whether the extra room move improves the overall trip.",
      },
    ],
    tradeoffs: [
      {
        title: "A sacred mountain is more than a series of viewpoints",
        advice:
          "Jiuhuashan is associated with Dizang and remains a place of worship. A cultural visitor can learn through architecture, practice and thoughtful explanation without participating in rituals. Let worshippers use the space, follow local photography instructions and ask before joining any activity. Avoid treating monastic life as an arranged spectacle.",
      },
      {
        title: "Cableway access does not settle the walking question",
        advice:
          "Choose the actual Tiantai or Baisui Palace route before discussing transport. Boarding, upper-station approaches, terraces and the return may still involve steps. Ask which part of the day the transport reduces and what remains. A shorter, rewarding temple route can be preferable to a high point reached at the cost of comfort.",
      },
      {
        title: "The lower modern complex is a separate choice",
        advice:
          "Dayuan Cultural Park and its monumental Buddhist presentation provide a different setting from the mountain settlement's temple route. Decide whether that experience adds value, then confirm its own admission, walking and transfer. A modern complex, an active temple and a mountain landscape need different interpretation rather than one generic ancient-site label.",
      },
      {
        title: "Explain sacred traditions with respect and clear attribution",
        advice:
          "The mountain's association with the monk Jin Qiaojue and Dizang is a religious and historical subject to explain carefully. At sacred halls, distinguish devotional understanding from what can be observed on the current visitor route. Respect restricted views and photography rather than imply that a guided visit offers privileged access to sacred remains or ceremonies.",
      },
      {
        title: "Room comfort can matter more than proximity alone",
        advice:
          "A mountain-settlement address can improve the route but still involve steps, dampness or evening sound. A lower property can offer a room you prefer while adding daily transport. Compare the actual room and complete plan, including dinner and luggage, instead of equating a remote setting or traditional facade with a premium stay.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "chizhou",
        advice:
          "Chizhou city can add a useful gateway night, a selected Pingtian Lake walk and regional food. Compare those interests with going directly to the mountain or lower gateway. A city room is not beside the temples; include the full repeated road journey and final mountain transport when choosing the base.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan adds a different granite mountain landscape with its own gateway, cableways, remaining stairs and possible mountain night. Compare the combined walking burden and leave time between the chapters. Jiuhua Street and the Huangshan entrance are different addresses; two mountain names do not create one shared hotel base.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun adds a village-architecture chapter in the Huangshan area, a useful change of scale after temple terraces and mountain walks. Choose its actual room and public route separately and allow the full road journey. A village night should add usable time and comfort rather than another late check-in between demanding days.",
      },
      {
        slug: "xuancheng",
        advice:
          "Xuancheng adds a literary city interest and separate Jing County Xuan-paper venues. A confirmed paper visit can offer a different cultural subject from Jiuhuashan, but choose the actual provider, county base and complete transfer. It is not an automatic short stop beside the mountain gateway.",
      },
      {
        slug: "hefei",
        advice:
          "Hefei can provide a different Anhui city chapter and relevant collections when the actual journey supports it. Compare going directly to the appropriate mountain gateway with adding a city night. The provincial capital is not automatically the best transit point for every Jiuhuashan itinerary.",
      },
      {
        slug: "nanjing",
        advice:
          "Nanjing adds substantial museums and capital history, with a different city pace. Protect enough useful time there and compare the complete rail or road plan to the actual Jiuhuashan hotel. A religious visit and a major museum day each deserve attention rather than being squeezed around the same transfer.",
      },
      {
        slug: "wutai-mountain",
        advice:
          "Wutai Mountain in Shanxi offers a different Buddhist setting associated with Manjushri, with its own temple choices, weather and wider travel requirements. It is a separate northern journey, not a nearby excursion. A specialist Buddhist-cultural route should justify the long connection and prepare the distinct context rather than treat sacred mountains as interchangeable stops.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit temple and mountain visits, with rain, mist and busy dates still possible. Summer requires cooling, shorter exposed sections and rest; winter may bring cold, slippery conditions and changes to routes or transport. The mountain settlement and higher Tiantai route can feel different on the same day. Check the actual forecast and operating notices, and choose a visit that remains worthwhile without a clear distant view. Buddhist calendar dates and public holidays require their own demand and access assessment.",
    orientation:
      "Jiuhua Mountain, or Jiuhuashan, is a sacred mountain and managed visitor landscape in the Qingyang County area of Chizhou, Anhui. Jiuhua Street, higher Tiantai routes, the lower gateway and Dayuan Cultural Park are different visitor chapters. Chizhou city, Chizhou station and Jiuhuashan station require their own final transfers. The name Tiantai here identifies a Jiuhuashan route, not Tiantai County in Zhejiang. Stay near the mountain route for a temple-focused visit. Chizhou city and Qingyang town are separate accommodation choices, so compare the full journey to your first visitor entrance.",
    experiences: [
      "Understand Jiuhuashan's Dizang tradition through a respectful, selected temple route",
      "Give the mountain settlement time for observation, explanation and a seated meal",
      "Choose a higher Tiantai chapter only when its walking and weather suit the group",
    ],
    planningNotes: [
      "Separate cultural sightseeing, personal pilgrimage and a mountain-walking brief",
      "Choose the actual route before booking cableways, rooms and luggage arrangements",
      "Treat temple etiquette, internal transport and lower-area admissions as distinct requirements",
    ],
    arrival:
      "Compare dated services to Jiuhuashan or Chizhou station where useful, with both local transfers and the actual hotel's final approach. Neither a mountain-named station nor a Chizhou ticket means arrival beside the temples. For a flight connection, identify the airport, terminal and dated service rather than infer convenience from the regional name. Confirm the current lower-gateway and mountain transport plan, including where the private vehicle stops and how luggage reaches the room. Leave a flexible first visit after a long arrival.",
    gettingAround:
      "Group the Jiuhua Street temple visits into a manageable route and treat Tiantai as a separate mountain decision. Current visitor management may require internal transport rather than a private car throughout. Confirm the relevant boarding points, operating windows and final pickup. For guests who tire on stairs, plan selected interiors, shorter approaches and seated breaks. A guide can adjust interpretation and pacing but cannot remove terrain, override a closure or arrange access to restricted religious spaces.",
    stayStrategy:
      "A Jiuhua Street room can add time in the mountain settlement, while a lower-gateway property may better meet a particular room or arrival need. Chizhou is a separate city-base decision. Compare the actual bathroom, bed, heating or cooling, dampness, noise, meals, lifts or stairs and luggage approach. Two nights give one full day; three give two. Choose a stay that works in poor weather and does not rely on a sunrise view or access to a special ceremony.",
    firstTimerNote:
      "You do not need to visit every temple or make a ritual offering to have a meaningful cultural introduction. Begin with the mountain's Dizang association, a selected temple route and enough time to understand what you see. Choose Tiantai for a real walking interest and suitable conditions, rather than as proof that the visit is complete. Explain personal religious priorities and stair needs early so the proposal can respect both.",
    faqs: [
      {
        question: "What is Jiuhua Mountain known for?",
        answer:
          "Jiuhua Mountain, or Jiuhuashan, is a Buddhist sacred mountain in Anhui associated with Dizang, also called Kshitigarbha Bodhisattva. A visit combines living temples, pilgrimage culture, a mountain settlement and selected walking routes. The best introduction depends on whether your priority is religious culture, personal pilgrimage or landscape.",
      },
      {
        question: "Can non-Buddhists visit Jiuhuashan?",
        answer:
          "Yes, as respectful cultural visitors following current access and temple rules. You do not need to participate in worship or buy incense to understand the mountain. Give worshippers space, ask before joining activities and follow each temple's photography instructions. Guiding does not authorize restricted religious access.",
      },
      {
        question: "How many nights should I spend at Jiuhua Mountain?",
        answer:
          "Two nights give one full day for a focused temple introduction; three give two full days for a separate Tiantai route or slower cultural visit. Arrival and departure add usable time only when the full transfers allow it. Personal pilgrimage priorities may require a different plan from standard sightseeing.",
      },
      {
        question: "Should I stay near Jiuhua Street or below the mountain?",
        answer:
          "Choose Jiuhua Street for time in the settlement and easier access to the selected temple route, after checking steps, luggage and room comfort. A lower-gateway property offers a different arrival and room choice but adds onward mountain transport. Chizhou city is a separate gateway base, not another name for either area.",
      },
      {
        question: "Does the Tiantai cableway remove all the steps?",
        answer:
          "No. Cableway use can reduce ascent but leaves approaches, boarding, terraces and walking beyond the station, depending on the selected route. Assess the actual remaining stairs and descent before choosing Tiantai. A shorter temple-focused day may better suit guests with knee, balance or stamina concerns.",
      },
      {
        question: "Can I visit Jiuhuashan in one day?",
        answer:
          "A limited temple introduction can work from a suitable nearby base when the complete gateway and mountain transfers fit. Choose a few named sites and lunch rather than promise the settlement, Tiantai and the lower modern complex together. An overnight can make the pace and cultural understanding more rewarding.",
      },
      {
        question: "Is Dayuan Cultural Park included in a mountain visit?",
        answer:
          "Only when the actual itinerary and admission arrangements say so. The lower-area modern complex is a different visitor setting from the mountain settlement and Tiantai. Confirm its own access, walking and transfer requirements instead of assuming a mountain ticket, hotel rate or private guide includes every site.",
      },
      {
        question: "Which station should I use for Jiuhua Mountain?",
        answer:
          "Compare dated services to Jiuhuashan and Chizhou where relevant, including both local transfers and the final room approach. A station named Jiuhuashan is still a gateway, not arrival in Jiuhua Street. Choose the route from the actual starting point and current mountain-transport arrangement.",
      },
      {
        question: "Can I combine Jiuhuashan with Huangshan?",
        answer:
          "Yes, as a planned regional journey with separate gateways, rooms and full transfers. Huangshan has its own substantial stairs even with cableways, so compare the combined walking burden and leave rest. A two-mountain itinerary needs more than moving between scenic names on consecutive days.",
      },
      {
        question: "Can a private guide arrange a blessing or monastic meeting?",
        answer:
          "Do not assume so. Religious participation, ceremonies and any meeting depend on the actual temple community and its current arrangements. Explain personal priorities respectfully and confirm what is permitted. Private guiding provides interpretation and planning, not special religious status or guaranteed access to a monk.",
      },
    ],
    culturalStory: {
      title: "A living religious landscape deserves more than a sightseeing checklist",
      paragraphs: [
        "Jiuhuashan's association with Dizang gives the temples a shared religious context while each place retains its own history and community. The tradition connected with Jin Qiaojue is a subject to explain with care, distinguishing historical accounts, devotional understanding and later presentation. At Huacheng Temple and other selected sites, look at how visitors move, worshippers use the space and buildings frame the mountain settlement. Respect any restriction on photography and access; cultural understanding does not require entering every hall or observing a ceremony at close range.",
        "The sacred setting of Roushen Baodian, the hill-side Baisui Palace and the higher Tiantai route create different experiences and walking demands. A useful guide explains those differences before the day begins, including what is actually visible on the open route. The lower Dayuan complex adds a modern monumental presentation and should be described as such. Religious continuity, later rebuilding and contemporary visitor facilities can coexist; explaining them accurately gives the guest more than calling every structure ancient or every visit a pilgrimage.",
      ],
    },
    foodStory: {
      title: "A comfortable meal matters on a day of terraces and steps",
      paragraphs: [
        "Vegetarian food is a natural interest on a Buddhist-cultural journey, but choose the actual kitchen and meal rather than assume every mountain restaurant is vegetarian or temple-run. Tofu, mushrooms and vegetables can make a satisfying pause between visits; ask about broth, sauces, shared equipment and the season's real ingredients. A menu's mountain-food description does not prove wild origin. Select portion sizes and a seated break that support the day's walking, with warm food particularly welcome in cool or damp weather.",
        "A monastic meal, commercial vegetarian restaurant and hotel dinner are different arrangements. If a religious dining setting is available to visitors, respect its current schedule and etiquette rather than promise it as an exclusive experience. For serious allergies, vegan requirements or other strict diets, confirm soy, wheat, egg, milk, stock and cross-contact with a kitchen able to explain its preparation. Keep a dependable alternative and settle dinner near the actual room before choosing a remote property or a late return from Tiantai.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Complete the gateway journey and settle the room",
        description:
          "Use the agreed mountain transport and final luggage plan to reach the actual property. Keep the first walk short and explain etiquette before the main temple day. Have dinner and rest rather than schedule an essential religious or cultural encounter immediately after an uncertain connection.",
      },
      {
        day: "Full day / cultural introduction",
        title: "Follow a selected Jiuhua Street temple route",
        description:
          "Begin with Huacheng Temple or the agreed cultural sequence, then choose a complementary site according to access and steps. Leave time for explanation, observation and a seated meal. Assess Roushen Baodian or Baisui Palace as specific route choices rather than compulsory additions to every visit.",
      },
      {
        day: "Optional second full day",
        title: "Give Tiantai or a slower interest its own time",
        description:
          "Choose the higher route only when conditions, transport and remaining walking fit the group. Otherwise use a shorter cultural day or a separately planned lower-area visit. Settle descent and last transport before starting, with enough time to return for dinner and rest.",
      },
      {
        day: "Departure",
        title: "Continue with the next gateway and walking burden settled",
        description:
          "Collect luggage and allow the complete mountain and road transfer to the actual station or next hotel. A Huangshan continuation needs its own room and stair plan; a village or city chapter may provide a welcome change of pace. This outline supports a tailored proposal with named visits, rooms and included services confirmed for the dates.",
      },
    ],
  },
};
