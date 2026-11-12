import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/mangshi.svg",
  alt: "Mangshi planning schematic separating a relaxed city and food day, selected pagoda visits and a separately planned Tengchong extension; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const mangshiGuide: ExpandedDestination = {
  id: "mangshi",
  name: "Mangshi",
  region: "southwest",
  kicker: "A relaxed Dehong city for Buddhist architecture and a distinctive table",
  description:
    "Give Mangshi time for pagoda settings, local food and an unhurried city rhythm, with honest advice on hotel comfort, the gold and silver sites and a separate western Yunnan route.",
  stay: "2–3 nights",
  bestFor: "Regional food, Buddhist architecture and a slower western Yunnan city stay",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["tengchong", "kunming", "xishuangbanna"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Mangshi Travel Guide: Pagodas, Food & Where to Stay",
    seoTitle: "Mangshi Travel Guide: Pagodas, Food & Where to Stay",
    seoDescription:
      "Plan two or three nights in Mangshi with gold and silver pagoda choices, local food, hotel checks, the right airport transfer and a separate Tengchong stay.",
    answer:
      "Mangshi (芒市), formerly known as Luxi, is the capital of Dehong Dai and Jingpo Autonomous Prefecture in western Yunnan. It suits travelers interested in Buddhist architecture, regional food and a slower city stay rather than a packed landmark circuit. The Menghuan golden pagoda and the separate silver-pagoda visitor site, Shubao Ta's tree-and-pagoda setting and a well-planned meal offer different subjects. Mangshi is not in Xishuangbanna, and its airport is not Tengchong's airport. Choose it for its own city experience, then decide whether a separate Tengchong chapter adds enough contrast to justify the road journey.",
    stayAnswer:
      "Two nights usually provide one full day for selected city interests and regional food. Three nights allow a slower pace, a second distinct subject or more hotel time without turning every meal into a rushed stop. One night can serve a practical arrival, but a late flight and early onward drive leave little reason to call it a Mangshi visit. Add Tengchong nights separately. A quieter city rhythm does not mean every pagoda, garden, market and neighboring border town belongs in one day.",
    hotelAnswer:
      "Choose a specific city hotel for meals, pickup and a manageable route between interests, or a quieter property when room comfort and downtime matter more than walking out into the busiest lanes. Check the quoted room, air conditioning, soundproofing, breakfast and car access. A gold-pagoda view, an attractive courtyard and a fully staffed resort are different offers. A property outside the center needs an honest account of evening food and transfers. Do not assume a tropical-looking garden means the same service or privacy in every room.",
    sightseeingQuestion: "Should you visit the golden pagoda, silver pagoda or both?",
    sightseeingAnswer:
      "Choose the Menghuan golden pagoda for its particular Buddhist architectural setting and context. Consider the separate silver-pagoda visitor site when its design, landscape or photographic interest genuinely adds something different. They are not one ticket or one interchangeable viewpoint by default. Confirm current admissions, walking, steps and visiting hours for each. A private guide can explain the sites, but does not turn a visitor attraction into exclusive religious access or guarantee a quiet sunset photograph. One thoughtful visit can be enough when food and city life are the main purpose.",
    visitorResources: [
      {
        label: "Mangshi municipal government",
        href: "https://www.dhms.gov.cn/",
        scope:
          "Municipal public information and administrative context, mainly in Chinese. Confirm current pagoda and garden visitor arrangements, local notices and any proposed out-of-city route through the responsible authority or venue. City promotion does not verify hotel standards, private cultural hosts or border-area access.",
      },
      {
        label: "Dehong prefecture government",
        href: "https://www.dh.gov.cn/",
        scope:
          "Regional background and public notices for Dehong. Use current official information for the precise route, passport and proposed locations; a Mangshi city visit does not establish access to every border-area destination or eligibility to cross into another country.",
      },
    ],
    serviceScope:
      "A tailored Mangshi proposal can name the hotel and room, exact airport pickup, selected pagoda or city route, guiding and meals. Agree which admissions and any local visitor transport are included. Food-focused guiding, classes, specialist interpretation, cultural hosts and a Tengchong extension need separate scope and availability. Private road service does not imply access to households, ceremonies or restricted border locations. Share dietary needs, walking ability, heat tolerance and preferred balance of food, architecture and rest before choosing the sequence.",
    routeAdvice:
      "Mangshi can pair with Tengchong when a city-and-food stay and a separate Heshun, volcanic or hot-spring chapter both deserve enough nights. Kunming is another possible gateway when actual flights and connections fit. Xishuangbanna offers a different southern Yunnan setting, not a nearby excursion. No matching published Mangshi product is recommended here. Use the illustrative two-night outline to request a tailored stay with selected visits and dependable meals, adding the western Yunnan extension only when its full road journey and accommodation are clear.",
    practicalPlanning: {
      timing:
        "Build the full day around a selected architectural subject, a comfortable meal and a city interest in a sensible sequence. Check the current visitor hours and light expectations without making sunset the only reason to go. Leave a midday break in hot conditions and avoid scheduling another late food outing after every full day. If continuing to Tengchong, keep the road transfer visible rather than presenting it as an incidental gap between two complete sightseeing programs.",
      walking:
        "Hilltop visitor sites, pagoda grounds and garden paths can involve steps, slopes and exposed standing. Agree the specific route, resting options and vehicle stopping point. A car reaching a site does not establish step-free access around it. City pavements and market aisles have their own uneven or crowded sections. For limited mobility, choose a shorter route and inspect the hotel's room-to-restaurant access as well as the sightseeing.",
      cost: "Compare room category, occupancy, breakfast, complete transfers, guiding and named admissions. The golden and silver sites should be identified separately, with current visitor transport or fees clarified. A food walk can involve purchases rather than a fully included seated meal. For a premium stay, spend on a suitable room, good sleep, meaningful explanation and meals that fit dietary needs, rather than an overfilled itinerary or unverified exclusive host.",
    },
    attractions: [
      "Menghuan golden pagoda / 勐焕大金塔 on a selected visitor route",
      "The separate Menghuan silver-pagoda / 勐焕银塔 visitor site",
      "Shubao Ta / 树包塔, with its tree-and-pagoda relationship explained",
      "Mengbanaxi Rare Garden / 勐巴娜西珍奇园 as a managed collection and garden visit",
      "A selected city market or regional food route with practical seating and preparation reviewed",
      "Tengchong as a separately planned onward stay, not a city attraction",
    ],
    stays: [
      {
        label: "1 night: a practical stop, if timing works",
        advice:
          "Use the evening or morning for one nearby interest only when the tickets leave useful time. A late arrival and early transfer are not a full city experience. Keep meals straightforward and do not promise both pagoda sites, a garden and comprehensive food touring between connections.",
      },
      {
        label: "2 nights: one worthwhile full day",
        advice:
          "Choose a pagoda or other architectural subject, a regional meal and a selected city interest at a comfortable pace. One good base is enough. Leave room for heat, visitor arrangements and the group's appetite rather than trying to eat or photograph everything in a single circuit.",
      },
      {
        label: "3 nights: a slower city and food stay",
        advice:
          "Add a second distinct subject, a confirmed food-focused session or time at the property. This works for guests who enjoy ordinary city detail and unhurried meals. Another night does not require a distant border excursion, and any Tengchong stay still needs its own nights and full transfer.",
      },
    ],
    hotelAreas: [
      {
        name: "A central city base near the meals and streets you will use",
        advice:
          "Consider for evening dining and practical pickup. Check the exact street, room position, traffic noise and walking route rather than using central as a quality guarantee. A neighborhood with several food choices can suit independent evenings, while light sleepers may prefer a quieter room or another specific address.",
      },
      {
        name: "A property chosen for quietness, grounds or a view",
        advice:
          "Useful when the room and time at the hotel are part of the visit. Confirm what the quoted category actually sees, whether terraces and pools are private or shared, and how meals work. A distant view of a pagoda is different from convenient access to the visitor site. Review the full drive to town and the indoor experience on a wet afternoon.",
      },
      {
        name: "An airport-oriented overnight",
        advice:
          "Use for a specific flight when it genuinely improves rest or the departure. Confirm the transfer, early breakfast and service hours. An airport hotel is a practical decision, not the same city-and-food base as a central stay. Compare the whole schedule before sacrificing a useful evening location for a nominally shorter morning drive.",
      },
    ],
    tradeoffs: [
      {
        title: "Treat the golden and silver sites as different choices",
        advice:
          "Ask what each visit adds: architectural explanation, religious context, landscape or a designed photographic setting. Their present-day structures and visitor experiences should not be described as interchangeable ancient monuments. Confirm the exact route, current access and separate admissions. Crowds, weather and light can change photography, so choose the substance of the visit rather than promising an empty frame at a fixed time.",
      },
      {
        title: "The tree-wrapped pagoda and rare garden need honest interpretation",
        advice:
          "Shubao Ta is a specific tree-and-built-heritage interest, not evidence that every structure in the city is untouched or the same age. Mengbanaxi Rare Garden is a managed garden and collection, not a wild rainforest expedition. A thoughtful guide explains what you are looking at and distinguishes the site's story, current setting and any uncertain historical claim rather than inventing an exact age or provenance.",
      },
      {
        title: "Dehong culture is not one generic Southeast Asian atmosphere",
        advice:
          "Mangshi's Dai, Jingpo and other communities have distinct traditions and contemporary lives. Choose a clear subject, place and appropriate interpretation. A public religious site, commercial display, festival and home invitation have different access and purposes. Architecture or a meal can provide meaningful context without promising a private host, a ceremony or a performance whenever a tour arrives.",
      },
      {
        title: "Food touring needs the right pace and a real meal plan",
        advice:
          "A market browse, snack walk and seated dinner are different experiences. Agree what is included, whether portions are shared and how dietary needs will be handled. Several sweet drinks and small snacks may be enjoyable without replacing lunch. Choose fewer stops with explanation and comfortable seating rather than making the day a challenge to consume every social-media favorite.",
      },
      {
        title: "Mangshi and Tengchong are separate airports and stays",
        advice:
          "Dehong Mangshi Airport serves Mangshi; Tengchong Tuofeng Airport serves a different city and route. Do not buy a ticket using the western-Yunnan label alone. A road combination can be worthwhile, but allow the complete journey, a meal and useful nights in each place. Heshun, hot springs and volcanic scenery are not Mangshi city stops to fit around a flight transfer.",
      },
      {
        title: "A borderland setting does not make every border excursion available",
        advice:
          "If considering Ruili or another out-of-city destination, review the precise locations, current access and passport-related requirements before adding it. A standard city visit does not establish entry to every border area or permission to cross into Myanmar. Commercial markets, local roads and international crossings have different arrangements. Keep any extension separate and confirmed rather than selling proximity as guaranteed access.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "tengchong",
        advice:
          "Tengchong adds Heshun history, volcanic geology and a separately specified hot-spring stay. Give it its own nights and choose the complete road transfer deliberately. A Mangshi food-and-city introduction can complement it, but the two airports, hotels and daily routes are not interchangeable.",
      },
      {
        slug: "kunming",
        advice:
          "Kunming can provide a city stay or a useful flight connection when the current services work. Choose enough time for its actual interests rather than adding nights solely because a ticket connects there. Confirm the full airport or station transfer and a separately agreed onward flight to Mangshi.",
      },
      {
        slug: "xishuangbanna",
        advice:
          "Xishuangbanna offers tropical plant interests and a different Dai cultural context in southern Yunnan. It is not a local Mangshi excursion or a substitute airport for Dehong. Combine them only when the contrast, available nights and complete transport justify two separate chapters.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler, drier part of the year is often a useful starting point for city walks and architectural visits. Hot periods call for shade and breaks, while wetter conditions can affect exposed viewpoints, roads and the comfort of outdoor dining. A palm-lined photograph does not establish the same temperature or pool experience throughout the year. Festival dates and public events need current confirmation and should not be promised from a generic cultural calendar. Check Mangshi and the onward destination separately, especially when combining it with a higher or cooler Tengchong stay.",
    orientation:
      "Mangshi is the capital of Dehong in western Yunnan and was formerly known as Luxi. It is distinct from Jinghong in Xishuangbanna and from Tengchong farther along a different regional route. City streets, hilltop pagoda sites, the rare garden and the airport need their own timing even on a relaxed stay. Use the Chinese hotel address and precise visitor site rather than treating gold pagoda, silver pagoda and every view from a hotel gallery as the same location.",
    experiences: [
      "Explore a selected Buddhist architectural setting with current access and walking understood",
      "Enjoy a regional food route that explains dishes and leaves time for a proper seated meal",
      "Use a comfortable city base for a slower Dehong introduction before a separate western Yunnan chapter",
    ],
    planningNotes: [
      "Name the golden or silver visitor site and its route rather than promising a generic pagoda tour",
      "Check the room, noise, meals and heat-aware schedule before choosing by a tropical-looking photograph",
      "Keep Tengchong transfers, border excursions and cultural hosts separate from ordinary city inclusions",
    ],
    arrival:
      "Dehong Mangshi Airport uses code LUM. Tengchong Tuofeng Airport uses TCZ and serves a different city, so the full ticket matters for pickup and the hotel sequence. Check current flights, luggage and the final address before booking a western Yunnan combination. Child seats, mobility arrangements and a transfer onward to Tengchong need explicit agreement. Do not assume a local flight arrival includes a border-area excursion or an international crossing.",
    gettingAround:
      "Plan road transfers for the hilltop sites and any longer outing, with walking sections, meal stops and pickup points agreed. A city food route can use a different balance of walking and local transport. Review slopes, parking and any venue transport rather than assuming the vehicle reaches every photographic point. Leave time for an easy return in heat or rain, and avoid adding a distant excursion to a day already carrying an onward road transfer.",
    stayStrategy:
      "Choose one base for two or three nights, prioritizing sleep, cooling, bathroom comfort, breakfast and the evening food options you will actually use. A quiet room can be more valuable than a view if nearby activity continues late. Compare a central property with a quieter setting honestly, including transport back to meals. For a Mangshi-Tengchong trip, make the hotel move serve a different subject and enough usable time rather than collecting two short check-ins.",
    firstTimerNote:
      "Mangshi is best chosen for the combination of place, food and pace, not because it offers an endless list of major monuments. One thoughtful architectural visit, a good meal and time to notice the city can make a strong day. If the proposal relies only on repeated pagoda photos and hurried snacks, reduce the stops and improve the explanation. A considered city stay can be worthwhile without promising exclusive access or calling everything hidden and untouched.",
    faqs: [
      {
        question: "Where is Mangshi, and is it the same as Luxi?",
        answer:
          "Mangshi is the capital of Dehong Dai and Jingpo Autonomous Prefecture in western Yunnan and was formerly known as Luxi. It is a different destination from Jinghong in Xishuangbanna and from Tengchong. Confirm the Chinese address when comparing older names, hotels or tickets.",
      },
      {
        question: "How many nights should I stay in Mangshi?",
        answer:
          "Two nights provide one full day for selected architectural interests and regional food. Three nights allow a slower rhythm or another distinct subject. A one-night connection can work, but a late arrival and early onward drive leave little usable city time.",
      },
      {
        question: "Should I visit both Mangshi's gold and silver pagodas?",
        answer:
          "Choose by what each site adds to your interests. The Menghuan golden pagoda and the separate silver-pagoda visitor site have different routes, purposes and admissions to confirm. One informed visit can be enough when the main priorities are food and a relaxed city introduction.",
      },
      {
        question: "Are Mangshi's pagoda visits easy for limited mobility?",
        answer:
          "Review the specific route, steps, slopes, resting points and vehicle stop. A car reaching a hilltop visitor area does not establish step-free access around it. Select a shorter route or another subject when the actual conditions do not suit the traveler.",
      },
      {
        question: "Is Mangshi good for a food-focused trip?",
        answer:
          "It can suit guests who enjoy regional dishes and a slower city rhythm. Choose a small number of explained stops, clarify portions and inclusions, and include a suitable seated meal. Allergies, spice, meat stocks, dairy and shared preparation need attention rather than relying on dish photographs.",
      },
      {
        question: "Can I combine Mangshi and Tengchong?",
        answer:
          "Yes, when their different subjects and enough useful nights justify the complete road journey. Mangshi provides a city-and-food chapter; Tengchong adds Heshun, volcanic and hot-spring interests. The airports are different, and neither destination should be reduced to a rushed flight-transfer stop.",
      },
      {
        question: "Which airport serves Mangshi?",
        answer:
          "Dehong Mangshi Airport uses LUM. Tengchong Tuofeng uses TCZ and is not another Mangshi arrival point. Use the full ticket and hotel address for pickup, and agree any road continuation separately.",
      },
      {
        question: "Can I add Ruili or cross into Myanmar?",
        answer:
          "Review any precise border-area route and current access separately for the traveler's passport and proposed locations. A Mangshi city stay does not establish access to every border destination or permission for an international crossing. Keep unconfirmed extensions out of the agreed city itinerary.",
      },
    ],
    culturalStory: {
      title: "Understand the city through particular places, not a borrowed atmosphere",
      paragraphs: [
        "Mangshi's architecture and food can introduce Dehong without reducing its Dai, Jingpo and other communities to a single style. A pagoda visit, a public street and a regional meal offer different kinds of context. Good interpretation identifies the place and current use, distinguishing religious meaning, designed visitor settings and ordinary city life. Present-day structures can be worth seeing without being described as unchanged ancient monuments.",
        "Cultural depth also comes from respecting boundaries. A public religious visit is not a ceremony invitation, and a commercial display is not access to a household. Choose specific subjects and consenting participants when a hosted encounter is available. The city does not need to be sold as a substitute for another country or a stage of exotic traditions; its own places, food and contemporary rhythm provide enough reason to visit.",
      ],
    },
    foodStory: {
      title: "Make room for a proper Dehong meal",
      paragraphs: [
        "Rice-based breakfasts, regional noodle or rice-strand preparations, grilled dishes and herb-forward accompaniments can offer different starting points for a Mangshi food day. Ask what is in the bowl or sauce rather than assuming one photograph describes every recipe. Sour, spicy and fresh flavors can be rewarding when the guide helps choose a balanced meal and a level of heat the group enjoys. Different community and restaurant traditions should retain their own context rather than being collapsed into one generic cuisine.",
        "Paoluda, a popular sweet drink or dessert, is another possible stop, with coconut, bread and other ingredients varying by preparation; it may include dairy and is not a universal allergy-safe option. Several snacks need not replace a seated lunch. Clarify meat stocks, fish or fermented ingredients, peanuts, dairy and shared equipment for dietary needs. A good food-focused visit offers explanation, comfort and choice, without requiring every guest to finish every signature item.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the city base and enjoy an easy first meal",
        description:
          "Transfer from the confirmed airport to the booked hotel, with the room and evening food plan clear. Add a short nearby walk only if timing and conditions suit. A late flight should not carry a fixed pagoda or sunset commitment.",
      },
      {
        day: "Full day",
        title: "One architectural subject, regional food and a slower city interest",
        description:
          "Choose the golden or silver site, or both only when their differences interest the group and the route fits. Allow current entry arrangements, steps and a comfortable meal. Add a selected garden, tree-pagoda or food interest without turning the day into a full landmark-and-snack circuit.",
      },
      {
        day: "Optional second full day",
        title: "Add depth rather than another distant checklist",
        description:
          "Use a third night for a different city topic, a confirmed food session or time at the property. A border-area excursion needs separate access review and is not an automatic filler. Keep the day's pace suitable for heat, weather and appetite.",
      },
      {
        day: "Departure or Tengchong continuation",
        title: "Give the next journey its own time",
        description:
          "Allow the exact airport transfer or the complete road journey to a separately booked Tengchong stay. This two-night outline, with an optional third night, is illustrative rather than a published product or a promise of private cultural hosts and border access.",
      },
    ],
  },
};
