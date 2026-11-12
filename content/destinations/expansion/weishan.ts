import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/weishan.svg",
  alt: "Original Weishan planning schematic comparing an old-town food and history visit, a separate Weibaoshan temple route and courtyard or edge-of-town stays; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const weishanGuide: ExpandedDestination = {
  id: "weishan",
  name: "Weishan",
  region: "southwest",
  kicker: "Morning noodles, trading streets and a mountain of Daoist temples",
  description:
    "Explore Weishan south of Dali for old-town streets, Nanzhao context and local breakfasts, with a separate Weibaoshan temple day and carefully chosen courtyard stays.",
  stay: "A focused day from Dali, or 2 nights for the town and a separate mountain interest",
  bestFor: "Food curiosity, regional history and a thoughtful alternative old-town stay",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["dali", "shaxi", "nuodeng", "kunming", "lijiang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Weishan Travel Guide: Old Town, Food & Weibaoshan",
    seoTitle: "Weishan Guide: Old Town, Food & Weibaoshan",
    seoDescription:
      "Plan Weishan near Dali: compare a day trip or overnight, local noodles, courtyard stays and Weibaoshan temples, with clear advice on walking and onward travel.",
    answer:
      "Weishan, south of Dali in Yunnan, rewards an unhurried old-town walk, regional food and an introduction to Nanzhao history. Choose a Dali day trip for the town, or two local nights when you want a full day for Weibaoshan's Daoist temples or another countryside interest. The old town and Weibaoshan are separate outings, with mountain slopes and steps to consider. Leave time for food shops and everyday street life between the historic towers.",
    stayAnswer:
      "A day trip from a suitable Dali base can introduce the old town and a proper meal when the full return journey leaves useful time. One night adds an evening and the opportunity for a local breakfast. Two nights provide a full day for Weibaoshan or a deeper town and county interest, with arrival and departure kept manageable. Three nights make sense for guests who particularly value the room, slower meals and a separately arranged cultural visit. They are unnecessary if you want only a short street walk before continuing north.",
    hotelAnswer:
      "Choose a courtyard stay in or near the old-town core for morning food and evening walks, after checking the room's privacy, noise, bathroom and heating. An edge-of-town hotel may provide easier vehicle and luggage access. A rural or mountain-area property needs its own reason to stay and reliable meals; it is not another central old-town address. Traditional architecture does not establish sound insulation, step-free access or full-service hospitality. Ask for the named room, final approach and breakfast arrangements before deciding that a heritage stay suits your trip.",
    sightseeingQuestion: "Should I visit Weishan or spend another day in Dali Old Town?",
    sightseeingAnswer:
      "Choose Weishan when regional food, its street layout and a different historical perspective justify a separate journey. Dali Old Town gives easier access to your existing Dali stay, Cangshan and Erhai plans; Weishan lies south of Dali and is not another lane of that town. It can be a worthwhile change of subject, but the full journey matters. For a short Yunnan trip, a well-paced Dali day can be better than adding a second old town without knowing what you want to understand there.",
    visitorResources: [
      {
        label: "Weishan county government",
        href: "https://www.dlweishan.gov.cn/",
        scope:
          "Reference entry point for county background and public notices, mainly in Chinese. Confirm current access to towers, temple routes, exhibitions and village places through the responsible venue or local host. This reference does not establish today's openings, a ceremony or private-house access.",
      },
      {
        label: "Dali prefecture government",
        href: "https://www.dali.gov.cn/",
        scope:
          "Regional background for distinguishing Weishan County from Dali city and the Erhai area. A shared prefecture does not make the destinations one sightseeing district or establish a convenient hotel-to-hotel transfer.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Compare dated services to the station that suits the final itinerary, including Weishan when available for the journey. Include station transfers, boarding and the distance between the Dali railway gateway and any Dali Old Town or lakeside room. Rail availability does not prove a short door-to-door excursion.",
      },
    ],
    serviceScope:
      "A tailored Weishan visit should identify the town route, language of interpretation, pickup and return, meal basis and any separately chosen mountain section. For Weibaoshan, agree the entrance, temple interests, remaining climb and shorter alternative. A Donglianhua village interest needs a distinct road plan and appropriate local arrangements. Access to a mosque, private house, workshop or kitchen is separate from walking public streets. Any hosted conversation or food activity should have a willing host, a clear purpose and agreed terms.",
    routeAdvice:
      "Weishan works as a focused Dali excursion or a short extension for travelers interested in food, Nanzhao history and Daoist temples. Share your Dali hotel, dates and main interests so we can compare a town day with two local nights, giving Weibaoshan its own realistic schedule. This would be a tailored extension: the published northern Yunnan journey does not include Weishan. Your proposal should specify the selected visits, room, guiding, transfers and meals.",
    practicalPlanning: {
      timing:
        "If breakfast is a main interest, stay locally or choose a departure that genuinely reaches the desired kitchen while it serves that meal. Use the old-town core for a coherent walk and lunch rather than fill the day with repeated streets. Weibaoshan needs its own road journey, ascent and descent; choose a limited temple route rather than count every building as a compulsory stop. Leave a complete return buffer before an onward train.",
      walking:
        "The town core can support shorter walks, with paving, thresholds, sun exposure and places to sit still worth checking. Tower interiors, if open, are a separate stair decision. Weibaoshan is a mountain route with a different physical demand, not a level continuation of the town walk. Confirm the chosen route's climb, footing, handrails and rest points. Ask about the elevations of the room and mountain section if altitude affects your planning; do not infer suitability from the word temple.",
      cost: "Compare the same room category, complete road or rail transfers, guiding time, admissions and meal basis. A day excursion may avoid changing rooms but includes a full return journey; an overnight adds accommodation and can improve food and visiting time. Village hosts, specialist interpretation and participatory food sessions are separate arrangements. The strongest premium value is a well-chosen room, thoughtful explanation, good meals and time to enjoy them.",
    },
    attractions: [
      "Weishan Old Town / 巍山古城 and its central street layout",
      "Gongchen Tower / 拱辰楼 and Xinggong Tower / 星拱楼 as orientation points",
      "Nanzhao / 南诏 history explained with the distinction between regional origins and later capitals",
      "Weibaoshan / 巍宝山 for a separately selected Daoist temple and mountain route",
      "A local breakfast or lunch focused on rou ersi / 肉饵丝 or another suitable kitchen specialty",
      "Donglianhua / 东莲花 as a separate village and caravan-history interest when arrangements fit",
    ],
    stays: [
      {
        label: "Day visit / the town and a meal",
        advice:
          "Choose a few central streets, tower viewpoints and a useful historical explanation from a suitable Dali base. Keep time for lunch and the full return. Do not add the mountain merely because its name resembles the town's or a train reaches the county.",
      },
      {
        label: "1 night / an evening and local breakfast",
        advice:
          "Arrive with useful daylight, settle into a suitable room and enjoy dinner without an immediate return drive. Leave time for a morning bowl and a further short walk. Confirm where breakfast will be served rather than assume a courtyard hotel's breakfast is the same as a local food visit.",
      },
      {
        label: "2 nights / one full day for a distinct interest",
        advice:
          "Add a manageable Weibaoshan route or deeper town and county context. A village interest should have a defined subject and local arrangement. Keep the full day coherent; choosing the mountain does not also require a distant village and every town interior.",
      },
    ],
    hotelAreas: [
      {
        name: "Old-town core / food and evening walks",
        advice:
          "Choose the room for access to the streets and meals you actually want. Check bedroom orientation, shared courtyards, bathroom layout, steps and heating or cooling. Ask how far luggage travels from the permitted vehicle stopping point. A peaceful courtyard photograph cannot establish the noise level after dark.",
      },
      {
        name: "Old-town edge or county-town hotel / easier arrivals",
        advice:
          "Compare a short approach to the central streets with easier vehicle pickup and more conventional facilities. Check the actual pedestrian route and dinner options. A room outside a historic lane can be a better choice when luggage, sleep or limited mobility takes priority.",
      },
      {
        name: "A specific rural or mountain-area stay / a separate setting",
        advice:
          "Choose only when the property, meals and time in the setting make the journey worthwhile. Confirm the road, heating, dampness, staffing and transport to the town or chosen temple entrance. A mountain label does not put every temple within a gentle walk of the room.",
      },
    ],
    tradeoffs: [
      {
        title: "Nanzhao history needs more than an ancient-capital label",
        advice:
          "Weishan is closely associated with Nanzhao's origins, while the kingdom's later political centers and wider history extend beyond this town. Ask how the visible streets, surviving material and later buildings relate to those different periods. Do not present the whole current town as an unchanged Nanzhao capital or merge Nanzhao and the later Dali Kingdom into one dynasty. A simple chronological explanation helps English-speaking guests understand what they are seeing.",
      },
      {
        title: "A landmark can remain meaningful through rebuilding",
        advice:
          "Gongchen Tower is an important town landmark whose upper structure has been rebuilt following a fire. Distinguish that history from the street layout and other surviving or repaired fabric. Xinggong Tower is a separate orientation point. Explain what is visible and accessible on the date; neither an old name nor a restored exterior establishes the age of every component or public access to the upper floor.",
      },
      {
        title: "Weibaoshan is its own mountain and religious visit",
        advice:
          "Choose the temple subjects and walking route for an interest in Daoist practice, architecture or the forest setting. Individual compounds and their approaches have different access and steps. Follow local instructions around worship and photography, and do not expect a ceremony to be arranged for the group. A shorter meaningful route can be stronger than a strenuous attempt to see every temple.",
      },
      {
        title: "Donglianhua adds a different community and trading story",
        advice:
          "This separate Hui village interest can add caravan history and a different architectural and religious context. Keep the road journey and chosen public route explicit. A mosque is a place of worship, with visitor access and photography governed locally; a residence is not an open museum. Any conversation, meal or interior visit needs appropriate agreement rather than an assumption that a cultural tour includes private households.",
      },
      {
        title: "Weishan, Shaxi and Nuodeng are not interchangeable quiet towns",
        advice:
          "Weishan offers a county-town food and history visit south of Dali; Shaxi has a market-square and valley-stay focus on a northern Yunnan route; Nuodeng adds hillside salt history and a more demanding final walking approach. Choose for the distinct interest, room and complete connection. None should be sold as an empty or undiscovered place, and three similar-looking heritage stops may not improve a short itinerary.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "dali",
        advice:
          "Dali adds Erhai, Bai village interests and Cangshan choices. Compare a Weishan excursion with a separate overnight using your Dali room's actual location; a lakeside property and Dali railway station can have very different starting journeys. The published Dali itinerary needs an explicitly agreed extension to include Weishan.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi offers Sideng's market square, valley walks and a separate Shibaoshan interest. Weishan lies south of Dali, while Shaxi belongs to a different onward sequence toward Lijiang. Give the connecting journey and each overnight a purpose rather than treat Weishan as a free stop on every Dali-to-Shaxi transfer.",
      },
      {
        slug: "nuodeng",
        advice:
          "Nuodeng adds salt history, sloping village lanes and a distinct guesthouse decision. Compare its road detour, luggage approach and steps with Weishan's county-town base. A multi-stop regional history route can work with enough nights, but shared Dali-prefecture geography does not make these two one compact excursion.",
      },
      {
        slug: "kunming",
        advice:
          "Kunming can add city food, a collection or a separate Stone Forest interest. Compare dated services to the best gateway and include the final Weishan transfer. Choose useful city time if staying in Kunming, rather than add a night solely because the journey passes through its transport network.",
      },
      {
        slug: "lijiang",
        advice:
          "Lijiang adds Naxi heritage and a separate mountain landscape. Protect its own useful nights and elevation decisions, using Dali or Shaxi only when the complete sequence improves the trip. Weishan is an agreed southern extension, not an automatic inclusion in the published northern route.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit town walking, with strong sun and cooler mornings still worth planning for. Summer rain can affect outdoor time and make mountain steps slippery; keep a suitable town-based alternative instead of promising every temple. Winter brings colder mornings and evenings, so check room heating and bathroom comfort. Local festivals can change crowd levels, rooms and religious access. Attend only the visitor arrangements that actually apply, and do not assume a cultural festival creates private access or a performance on demand.",
    orientation:
      "This guide concerns Weishan / 巍山 in Yunnan: the county town and selected nearby interests in Weishan Yi and Hui Autonomous County, within Dali prefecture. It is distinct from Dali city and its old town, and from Weishan / 微山 in Shandong. The old-town core, Weibaoshan and Donglianhua are separate places with different routes. Give Weibaoshan or Donglianhua its own excursion time rather than treating either as part of an old-town walk. Use the province, Chinese characters and final address when discussing rooms and transport.",
    experiences: [
      "Understand the town's trading streets and Nanzhao associations through a clear historical sequence",
      "Compare a local rice-noodle breakfast with other Weishan food interests at a relaxed pace",
      "Choose a separate Weibaoshan temple route or a defined village interest when it suits you",
    ],
    planningNotes: [
      "Choose a town-focused day or an overnight around useful hours and breakfast interests",
      "Assess Weibaoshan's route and remaining steps separately from the old-town walk",
      "Match the courtyard room, luggage access and regional transfer to the actual guest",
    ],
    arrival:
      "Compare dated rail services and a complete road transfer from the actual Dali hotel or other starting point. A Weishan rail arrival, where a suitable service exists, still needs a final local journey; a Dali rail arrival is not arrival in Dali Old Town or Weishan. Include boarding and transfers at both ends before choosing train over car. Weishan lies south of Dali, so check the whole route before attaching it to a northbound Shaxi or Lijiang transfer. Avoid a late arrival followed by an early departure if the purpose is to enjoy the town.",
    gettingAround:
      "Walk the central streets in manageable sections, using a named vehicle meeting point for the final lane approach. Keep a seated meal and places to pause in the day. Weibaoshan and Donglianhua each need their own road plan, local access check and route selection; they are not extensions of one pedestrian circuit. Assess mountain steps independently of the town and retain a shorter alternative. A private vehicle helps between places but cannot remove thresholds, steep sections or restrictions inside religious sites.",
    stayStrategy:
      "An old-town courtyard suits guests who want to step out for food and enjoy the evening, provided the room is quiet and comfortable. Check heating, hot water, beds, sound insulation, stairs and the distance from luggage drop-off. An edge location may offer a better compromise for some guests. A night in a traditional house should earn its place through the room and setting, not a generic luxury label. Two nights are useful for a full day; one can be enough when the town and breakfast are the main interests.",
    firstTimerNote:
      "Begin with the town's layout and a good explanation of Nanzhao's regional story, then let the meal and a few streets give the day its rhythm. You do not need a mountain circuit or private family visit to justify the stop. If Weibaoshan genuinely interests you, give it appropriate time and choose the route for your walking ability. Weishan adds most when it answers a different question from the other old towns on your journey.",
    faqs: [
      {
        question: "Is Weishan worth visiting from Dali?",
        answer:
          "Yes when local food, old-town streets and Nanzhao history appeal enough to justify the full journey south. Choose a focused day with lunch or stay overnight for evening and breakfast time. If your priority is Erhai or Cangshan and time is short, another well-planned Dali day may serve you better.",
      },
      {
        question: "How many nights should I spend in Weishan?",
        answer:
          "One useful night adds an evening and local breakfast; two nights provide a full day for Weibaoshan or a deeper town and county interest. A day visit can work from a suitable base. Three nights need a particular room, slow pace or defined additional interest rather than a longer list of streets.",
      },
      {
        question: "What is the difference between Weishan Old Town and Dali Old Town?",
        answer:
          "They are separate towns. Weishan is south of Dali city and offers its own food, street layout and Nanzhao associations. Dali Old Town is connected to a different set of Erhai, Cangshan and village plans. Shared regional history does not put the two in one walkable sightseeing area.",
      },
      {
        question: "Can I visit Weishan and Weibaoshan in one day?",
        answer:
          "A selective combination may work when starting locally with a suitable mountain route. From a Dali hotel, the full return journey, temple access, climb, descent and meal can make that combination rushed. Choose a town-focused day or allow a local overnight when the mountain is an important interest.",
      },
      {
        question: "Is Weibaoshan suitable for gentle walking?",
        answer:
          "That depends on the selected entrance, temple approaches and remaining climb. It is a mountain outing with steps and uneven surfaces, not a flat town walk. Ask for route details, rest points and a shorter option. Driving to an entrance does not establish step-free access to the temples.",
      },
      {
        question: "What should I eat in Weishan?",
        answer:
          "Rou ersi / 肉饵丝, rice strips commonly served with a pork-based preparation, gives interested guests a specific local breakfast. Long-noodle dishes and rice-jelly refreshments offer other subjects where available. Check the chosen kitchen's ingredients and meal times; noodles or rice dishes are not automatically vegetarian or safe for every allergy.",
      },
      {
        question: "Where should I stay in Weishan?",
        answer:
          "Compare a suitable old-town courtyard with an edge-of-town hotel. The first can improve evening and breakfast access; the second may ease vehicle pickup and luggage. Check room quietness, stairs, heating, bathroom and actual meal arrangements. A rural or mountain property is a separate setting with different transfers.",
      },
      {
        question: "Can I visit Donglianhua village and its mosque?",
        answer:
          "A village interest requires a separate route and current local arrangements. Mosque entry and photography follow the site's rules and worship schedule; public streets do not imply access to religious interiors or homes. A hosted conversation or meal needs appropriate consent and a named arrangement.",
      },
      {
        question: "Is Weishan on the way from Dali to Shaxi?",
        answer:
          "Weishan is south of Dali, while Shaxi is part of a different northbound sequence toward Lijiang. It should be planned as a deliberate extension, with the full connection checked, rather than assumed to be a simple stop on every Dali-to-Shaxi transfer.",
      },
      {
        question: "Is Weishan in Yunnan the same as Weishan in Shandong?",
        answer:
          "No. Weishan / 巍山 in Yunnan and Weishan / 微山 in Shandong are different places. Use the province, Chinese characters, named station and final property address for bookings. This guide concerns Yunnan's historic town and selected county interests within Dali prefecture.",
      },
    ],
    culturalStory: {
      title: "A street plan opens a longer regional history",
      paragraphs: [
        "Use the central streets and the two tower landmarks to establish the shape of the town before introducing dates and dynasties. Weishan's association with Nanzhao's origins provides a starting point, but the kingdom's later centers, the subsequent Dali Kingdom and the buildings visible today belong to different historical chapters. A good explanation separates them, connecting what is actually in front of the guest with the larger regional story instead of calling every facade Nanzhao-era architecture.",
        "The wider county offers other perspectives when there is time to explore them properly. A selected Weibaoshan temple route introduces Daoist religious settings and mountain approaches; a Donglianhua interest adds a Hui community and caravan-related history. These are different places and living contexts, not interchangeable cultural performances. Respect worship, residents and photography instructions. The depth comes from understanding a few places well, with a local conversation only when someone has genuinely agreed to receive the group.",
      ],
    },
    foodStory: {
      title: "Give breakfast its own place in the itinerary",
      paragraphs: [
        "Rou ersi is a useful introduction to Weishan's food culture: rice strips with a meat preparation, commonly pork, whose broth, texture and accompaniments deserve more attention than a quick photograph. Ersi are strips, distinct from erkuai rice cakes even though both belong to Yunnan's rice-food vocabulary. A long-noodle dish can offer another interest, but a kitchen serving noodles does not automatically provide a making lesson. Choose what the kitchen does well and reach it during the appropriate meal service.",
        "A refreshment called liangxia / 凉虾 can cause another translation misunderstanding: the name describes the shape of the rice-jelly pieces rather than identifying them as seafood. Ask how that particular vendor prepares it and about water, ice and sweeteners. For all meals, discuss meat stocks, pork, wheat, soy and shared equipment as relevant. A Hui village setting does not establish the halal status of every nearby kitchen; guests with religious or medical requirements need the actual preparation checked. Keep tastings optional and leave space for a comfortable seated meal.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / a focused day visit",
        title: "Begin with the streets and a clear historical frame",
        description:
          "Complete the transfer and leave luggage if staying. Use Gongchen and Xinggong tower viewpoints to orient a selective old-town walk, explaining surviving fabric, rebuilding and the different periods in the town's story. Keep tower interiors conditional on current access and the guest's stair preference.",
      },
      {
        day: "Town food and evening",
        title: "Let the meal set a comfortable pace",
        description:
          "Choose a kitchen for its actual specialty and service time, then continue with a manageable public route or return to the room. A day visitor departs with the full return counted; an overnight guest gains dinner and a less hurried morning, without a promised private household or staged event.",
      },
      {
        day: "Optional full day",
        title: "Choose the mountain or a defined county interest",
        description:
          "With two nights, use the full day for a selected Weibaoshan temple route matched to the guest's ability, or a distinct village interest with local arrangements. Preserve lunch, rest and the complete road journey. Keep a town-based alternative if weather or access changes.",
      },
      {
        day: "Breakfast / onward travel",
        title: "Continue with a different regional chapter",
        description:
          "Enjoy a suitable local breakfast when service and departure allow. Continue toward the chosen Dali room, rail gateway or wider route, counting the complete connection to Shaxi or Nuodeng. The final proposal should specify rooms, language, visits, transfers and any separately agreed hosts or meals.",
      },
    ],
  },
};
