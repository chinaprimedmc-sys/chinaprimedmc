import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/linhai.svg",
  alt: "Original Linhai planning schematic separating the Taizhou city-wall walk, Ziyang Street and old-town hotel choices; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const linhaiGuide: ExpandedDestination = {
  id: "linhai",
  name: "Linhai",
  region: "east",
  kicker: "A walled city, working streets and a different side of Zhejiang",
  description:
    "Explore Linhai's Taizhou city wall, Ziyang Street and old-town food, with realistic walking choices, hotel advice and a route that leaves time for the city itself.",
  stay: "1–2 nights; 3 for a separate regional interest",
  bestFor:
    "Historic urban landscapes, local food and a less familiar Zhejiang stop beyond Hangzhou",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["yandang-mountain", "wenzhou", "shaoxing", "hangzhou", "jinyun"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Linhai Travel Guide: City Wall, Old Town & Where to Stay",
    seoTitle: "Linhai Travel Guide: City Wall & Old Town Stays",
    seoDescription:
      "Plan 1–2 nights in Linhai, Zhejiang: Taizhou city-wall walks, Ziyang Street, East Lake, local food, hotel locations and complete station transfers.",
    answer:
      "Linhai (临海) is a county-level city within Taizhou, Zhejiang, in eastern China. Its main historic-city visit combines the Taizhou Prefecture City Wall, Ziyang Street, East Lake and the Longxing Temple area. The wall is often marketed as the Jiangnan Great Wall, but it is an urban fortification, not a section of the Great Wall near Beijing. One night can support a selective introduction when transfers leave enough time; two nights give a full day without rushing the wall and old streets. Linhai is a strong choice for travelers interested in how a historic city works at street level, with regional food and urban life alongside heritage sightseeing. It is not a coastal resort merely because the wider Taizhou region has a coastline.",
    stayAnswer:
      "Allow two nights for an arrival afternoon, one full day and a useful departure morning. This gives room to choose a suitable wall section, explore Ziyang Street beyond a snack stop and add East Lake or a temple visit according to interest. One night can work with early arrival and a later onward journey, but a late check-in followed by an early train leaves little city time. Three nights need a separate reason, such as a deliberately slower stay or a researched excursion with its own transport and walking assessment. Do not count Tiantai, Xianju or Taizhou's coast as nearby city-center sights that fit automatically into the same day.",
    hotelAnswer:
      "Compare an old-town or old-town-edge property with a modern Linhai city hotel using the exact room and route to the places you want to see. Proximity to Ziyang Street can support an evening walk, but a character building may have stairs, limited vehicle access or street noise. A modern hotel can offer different room space and luggage access, with an additional trip to the old city. Confirm bathroom, bed, temperature control, lift, breakfast and the actual pickup point. A hotel labeled Taizhou might be in a different urban district and a poor base for a Linhai-focused stay. A river view or historic facade is only part of the accommodation decision.",
    sightseeingQuestion: "Is the Linhai city wall worth visiting, and do I need to walk all of it?",
    sightseeingAnswer:
      "The city wall is a rewarding introduction when the route matches your stamina and the weather. Its appeal lies in the changing relationship between fortifications, slopes, city streets and the riverside setting, rather than a claim that it resembles every northern Great Wall view. You do not need to complete the entire circuit. Agree the actual entrance, ascent, section, available exits and pickup before setting off. A shorter wall visit combined with a meal and old-town walk can be more satisfying than a long circuit that leaves everyone exhausted. For guests who cannot manage steps, build the day around assessed lower-level streets and views rather than promise an effortless wall ascent.",
    visitorResources: [
      {
        label: "Linhai municipal government",
        href: "https://www.linhai.gov.cn/",
        scope:
          "Administrative, heritage and local visitor background, mainly in Chinese. Use dated notices and the responsible operator to confirm current wall entrances, open sections, ticket scope, East Lake or temple access and events. Background information is not a live operational check.",
      },
      {
        label: "Taizhou municipal government, Zhejiang",
        href: "https://www.zjtz.gov.cn/",
        scope:
          "Regional context for Zhejiang's Taizhou and its separate cities and districts. Linhai's old city should not be confused with every Taizhou hotel, museum, station or coastal excursion. Check the actual address of each proposed stop.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated rail services and full station names. Linhai railway station requires an onward transfer to the old town. A ticket to a station called Taizhou does not by itself establish a convenient Linhai arrival.",
      },
    ],
    serviceScope:
      "A proposal should name the wall route, entry and exit, actual admissions, guide language, meal approach and hotel room if staying. Describe the steps and remaining walking, including the final approach from the vehicle. A food walk should specify tastings and dietary feasibility rather than promise access to every small kitchen. Any craft encounter, specialist interpretation, temple program or private room needs separate confirmation with the responsible provider. Private guiding does not grant closed-site access or a right to enter residents' homes. Current tickets, weather, opening and road arrangements must be checked for the travel date; this guide does not establish their availability.",
    routeAdvice:
      "Use Linhai as a distinct historic-city chapter rather than squeeze it between distant attractions. Shaoxing adds literary history, canals and yellow rice wine; Hangzhou adds West Lake and tea landscapes. Jinyun offers a different landscape-led stay around Xiandu but requires a separate complete journey. Tell us your arrival and departure gateways, available nights, walking tolerance and interest in food, city defenses or architecture. No matching published Linhai product is recommended here. A tailored route should first protect enough time in each place, then compare the real transport and hotel choices. A product elsewhere in Zhejiang does not automatically include Linhai.",
    practicalPlanning: {
      timing:
        "Choose the wall window around the actual temperature, rain, available daylight and current operating hours. Exposed and steep stretches are a poor place to discover that the day is hotter or wetter than expected. Use another part of the day for a seated meal, streets or an appropriate open interior. Public-street access, ticketed wall entry, East Lake and temple opening are separate questions. Holiday dates and local events can change traffic and crowding. Evening atmosphere on Ziyang Street does not mean all heritage interiors remain open after dark.",
      walking:
        "Expect steps, changes in gradient and a cumulative walking load on the wall. State the actual ascent and exit rather than describe the whole route as a gentle city stroll. Footing can become slippery in rain, and exposed stretches require sensible heat management. Old streets and historic properties can add thresholds, uneven paving and stairs after the wall visit. For limited mobility, assess a lower-level itinerary, toilets, seating and pickup points individually. A private vehicle reduces transfers but cannot remove the physical demands inside the chosen heritage route.",
      cost: "Compare named wall or other admissions, guide duration, full station transfers, vehicle waiting and the actual room category. A food walk should say what tastings are included and what remains an optional personal purchase. Longer regional excursions need separate vehicle and time allowances. Premium value comes from a route that suits the guest, clear cultural interpretation, comfortable breaks and a well-chosen room, rather than a promise of an empty street or an undefined luxury experience. Exact prices and current ticket combinations must come from a dated proposal.",
    },
    attractions: [
      "Taizhou Prefecture City Wall / Jiangnan Great Wall through a selected current route",
      "Ziyang Street and chosen side streets for historic-city context and local food",
      "East Lake / Donghu as a separate landscaped stop with current admission checked",
      "Longxing Temple area and its pagoda context, with actual open spaces identified",
      "A riverside view that helps relate the old city to its landscape",
      "A small selection of regional dishes explained by the actual kitchen or guide",
      "Shaoxing, Hangzhou or Jinyun as separate onward planning chapters",
    ],
    stays: [
      {
        label: "1 night / a selective introduction with favorable transfers",
        advice:
          "Arrive with useful daylight, choose either a suitable wall route or the old-town introduction first, then allow a morning for the complementary subject. If the transport leaves only an evening meal and a rushed walk, reconsider whether this stop improves the wider journey.",
      },
      {
        label: "2 nights / one complete city day",
        advice:
          "Use a full day to balance a selected wall section with Ziyang Street, a seated meal and East Lake or the Longxing area. Keep the arrival afternoon and departure morning flexible. The extra night is valuable because it removes pressure, not because every attraction needs a separate day.",
      },
      {
        label: "3 nights / add a genuinely different interest",
        advice:
          "Stay longer for a deliberately slower food and architecture visit or a separately researched excursion. Specify the destination, road journey, physical effort and reason for returning to the same hotel. Do not fill an extra day with a distant mountain or coast trip whose actual logistics have not been assessed.",
      },
    ],
    hotelAreas: [
      {
        name: "Old town or its immediate edge / evening access",
        advice:
          "Check the specific address relative to Ziyang Street, the wall entrance and dinner. A character property can be appealing, but stairs, room noise and the final luggage walk matter. Request a confirmed room category and a clear pickup point rather than assume every historic building provides full modern hotel facilities.",
      },
      {
        name: "Modern Linhai city / room comfort and vehicle approach",
        advice:
          "Compare actual room size, bathroom, lift, breakfast and noise, then account for travel back to the historic area. A modern base may make sense for guests who prioritize sleep and straightforward luggage access. Confirm restaurant options and evening transport instead of judging convenience by the municipal name alone.",
      },
      {
        name: "A station or wider Taizhou property / only for a specific reason",
        advice:
          "Choose a gateway room when an actual early departure or another Taizhou chapter justifies it. Plot the route to Linhai's old city before booking. A station-area stay can cost the evening atmosphere you came for, while a hotel elsewhere in the prefecture may create unnecessary repeated transfers.",
      },
    ],
    tradeoffs: [
      {
        title: "A shorter wall route can make a better complete day",
        advice:
          "Agree where the route becomes steep and where it can end before committing to a long circuit. The useful comparison is a rewarding section plus enough energy for the old town, versus a wall walk that consumes the whole day. A shorter route still requires a real entrance, exit and mobility assessment.",
      },
      {
        title: "Linhai is a historic city, not an undiscovered village",
        advice:
          "Ziyang Street includes contemporary commerce and tourism alongside older urban fabric. Use side streets and selected buildings to explain the city without claiming everything is unchanged or every business is traditional. Residents should be treated as people going about their lives, not as unbooked cultural hosts.",
      },
      {
        title: "The Jiangnan Great Wall name needs context",
        advice:
          "Explain it as a name used for Linhai's city wall, shaped by the needs and setting of an urban defense system. It is not the Beijing-area Great Wall, and a southern city-wall visit should not be sold as an interchangeable substitute for a northern mountain-wall excursion. Judge it on its own history and views.",
      },
      {
        title: "Linhai and Shaoxing offer different reasons to stop",
        advice:
          "Choose Linhai for the relationship between wall, old streets and local food. Choose Shaoxing for a literary and canal-city focus with a distinct wine culture. Both can work on a longer Zhejiang journey, but limited nights may be better spent understanding one place properly than adding another fast hotel change.",
      },
      {
        title: "The wider Taizhou region needs its own map and time",
        advice:
          "Tiantai, Xianju and coastal places are different destinations with different road journeys and physical demands. A Linhai hotel does not automatically make every regional highlight a simple excursion. Decide whether an onward stay, a specifically planned day or leaving a place for another trip gives the better experience.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yandang-mountain",
        advice:
          "Yandang Mountain adds a contrasting rock-landscape chapter south of Linhai, with Lingfeng, Lingyan and Dalongqiu as different route decisions. Compare a local scenic-area stay with a selective day visit, counting full transfers and the combined steps after a Linhai wall walk. Choose the actual room and gateway instead of returning to a city base by default.",
      },
      {
        slug: "wenzhou",
        advice:
          "Wenzhou adds city food and old commercial streets, with Yandang rock landscapes, Nanxi River villages and Dongtou as separate regional decisions. Choose one main landscape and the actual base before setting the connection. A good southbound route can avoid repeated returns to central Wenzhou when a different station and direct transfer serve the next hotel better.",
      },
      {
        slug: "shaoxing",
        advice:
          "Shaoxing adds literary places, canals and yellow rice wine to Linhai's city-wall and old-street focus. Compare exact stations and both hotel transfers, keeping enough time for each subject. A continuous Zhejiang story is more useful than repeating a generic old-town walk in every stop.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou offers West Lake, Longjing tea and different city or rural hotel choices. Choose its actual rail gateway and allow the onward transfer to Linhai's historic area. Protect a real lake or tea day rather than turn Hangzhou into nothing more than a connection label.",
      },
      {
        slug: "jinyun",
        advice:
          "Jinyun changes the emphasis from an urban wall and street landscape to Xiandu's distinctive scenery and a slower landscape stay. Treat it as a separately planned journey with the actual property and route chosen, not as an attraction immediately outside Linhai's old-town gates.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit the combination of steps, streets and outdoor meals, with rain and variable temperatures still possible. Summer heat, humidity and heavy weather can affect an exposed wall walk; plan a shorter route and a cooler indoor break. Winter can be damp and cold, so heating and footwear matter. Check current forecasts and site notices near the date rather than promise year-round access to every section. Public holidays can bring substantial visitor activity even in places less familiar to international travelers.",
    orientation:
      "Linhai is a county-level city in Taizhou, Zhejiang. Taizhou Fucheng refers to the historic prefectural-city setting in Linhai, not the entire modern Taizhou urban area. This is 台州 in Zhejiang, not 泰州 in Jiangsu. The city wall, Ziyang Street, East Lake and Longxing area are individual visits with different entrances and walking needs. Linhai railway station is outside the old-town sightseeing area. Use full Chinese addresses for hotels, station pickup and the chosen wall entrance.",
    experiences: [
      "Read a selected wall section through its relationship with slopes, streets and the river",
      "Explore Ziyang Street and chosen lanes with time for food and architectural details",
      "Balance the active wall visit with East Lake, a temple area or a comfortable old-town evening",
    ],
    planningNotes: [
      "Agree the wall entrance, steep sections, exit and pickup before walking",
      "Separate Linhai's historic city from stations and hotels elsewhere in Taizhou",
      "Choose one or two nights by useful city time, then plan any regional excursion separately",
    ],
    arrival:
      "For a rail arrival, use the exact booked station name and a complete road transfer to the hotel or historic area. Linhai, Taizhou and other regional stations should not be treated as interchangeable just because services appear in a broader Taizhou search. Compare actual schedules, both final transfers and luggage when coming from Hangzhou or Shaoxing. An airport arrival needs its own full road journey. If the arrival day is uncertain, leave the demanding or time-limited wall visit for the following morning rather than rush to a gate before closing.",
    gettingAround:
      "Use walking within a selected old-town route and arranged road transport for stations, the hotel or a distant pickup point. The wall needs its own entry-to-exit plan; a point on a map does not establish that guests can descend there. Check current permitted vehicle approaches to pedestrian streets. Put rest stops and a suitable meal between demanding sections, and keep a lower-effort alternative for poor weather. A regional excursion is a separate transport day, not simply an extension of the local walking loop.",
    stayStrategy:
      "For a focused first visit, two nights can preserve a full city day and reduce pressure from train times. An old-town-edge hotel can work well when the actual room is quiet and luggage access is manageable. Choose a modern city room if it better meets the guest's sleep, bathroom or mobility needs, allowing for the evening return journey. Avoid a wider Taizhou hotel simply because it appears in a regional search; the address must fit the Linhai itinerary.",
    firstTimerNote:
      "Ask whether the priority is the wall walk, historic urban life or food. Start with one clear subject and give it enough time, then add a contrasting stop. Linhai can be a less familiar international choice while still having busy domestic visitor periods and a contemporary commercial street. A good visit makes those layers understandable instead of promising an empty, untouched city or a line of exclusive experiences.",
    faqs: [
      {
        question: "Where is Linhai in China?",
        answer:
          "Linhai is a county-level city within Taizhou, Zhejiang, in eastern China. Its historic city includes the Taizhou Prefecture City Wall and Ziyang Street. Zhejiang's Taizhou is different from Taizhou in Jiangsu, and a hotel elsewhere in the prefecture is not automatically a convenient Linhai base.",
      },
      {
        question: "Is Linhai worth visiting on a Zhejiang trip?",
        answer:
          "It is a strong fit for travelers interested in a city wall, historic streets and regional food beyond the best-known Hangzhou sights. Allow enough time to combine a suitable wall section with the old town. With very limited nights, compare its distinctive value against spending longer in your existing bases.",
      },
      {
        question: "How many days do I need in Linhai?",
        answer:
          "Two nights give one full day for a selected wall route, Ziyang Street, a meal and another interest such as East Lake. One night works with favorable arrival and departure times. A third night should support a slower stay or a separately planned regional interest rather than an inflated checklist.",
      },
      {
        question: "Is the Jiangnan Great Wall part of the Great Wall near Beijing?",
        answer:
          "No. In Linhai, Jiangnan Great Wall is a name used for the historic Taizhou city wall. It is an urban fortification with its own setting and history, not a Beijing-area Great Wall section. Plan its actual steps, entrance and route rather than assume the two experiences are interchangeable.",
      },
      {
        question: "Do I have to walk the whole Linhai city wall?",
        answer:
          "No. A selected open section can provide a worthwhile visit when the entry, ascent, exit and pickup are understood. Check the actual route and weather; a shorter section can still have demanding steps. Travelers unable to manage them need an assessed lower-level alternative rather than a promise of an accessible wall circuit.",
      },
      {
        question: "Where should I stay in Linhai?",
        answer:
          "Compare a property in or near the old town with a modern Linhai city hotel. Choose the actual room, quiet, bathroom and luggage access, then consider the journey to Ziyang Street and the chosen wall gate. A broad Taizhou address or a station-area hotel may not suit an old-town-focused visit.",
      },
      {
        question: "Can I visit Linhai from Hangzhou by train?",
        answer:
          "Check dated services to the exact station through China Railway, then include the road transfer to Linhai's old town. Compare complete journeys rather than only the train segment. A day visit needs favorable schedules and a selective route; an overnight can preserve useful city time when transfers would otherwise dominate.",
      },
      {
        question: "Is Linhai a beach destination?",
        answer:
          "The historic-city visit is inland and centered on the wall, streets, lake and local food. The wider Taizhou region has separate coastal destinations, but they are not part of an old-town walking route. Any beach or island chapter needs its own transport, seasonal and service assessment.",
      },
      {
        question: "What local food should I try in Linhai?",
        answer:
          "Ask a good local kitchen about a manageable selection of regional dishes, maixia wheat-based pieces in broth, or pancake preparations such as shibingtong. Names alone do not establish ingredients: maixia is not automatically a shrimp dish, while fillings, stocks and seafood vary. Explain allergies and dietary needs before choosing tastings.",
      },
    ],
    culturalStory: {
      title: "Read the wall and the street as parts of the same city",
      paragraphs: [
        "The most useful wall visit looks outward and inward. Notice how the fortification responds to slopes, how gates connect movement and how the river relates to the urban setting. Then return to the streets below, where buildings, shops and routes give a different scale to the place. The comparison makes Linhai more than a wall photograph followed by an unrelated shopping stop. Ask the guide to distinguish documented history, later repairs and the visitor route available today.",
        "Ziyang Street and the Longxing area introduce other layers of the former prefectural city. Choose a building detail, a lane connection or a religious site for close attention, rather than assume all structures have the same age or function. A temple's current spaces and practice need respectful explanation, with photography and entry following actual rules. Residents' homes are not public displays; meaningful cultural interpretation should come from evidence and willing participation rather than unannounced access.",
      ],
    },
    foodStory: {
      title: "Use a few dishes to understand the local kitchen",
      paragraphs: [
        "A small, well-explained selection is more rewarding than grazing until lunch becomes impossible. Maixia refers to small wheat-based pieces cooked in broth; the name should not be translated into a guarantee of shrimp. Shibingtong is a thin pancake roll whose fillings depend on the preparation. Ask how a dish is made, what texture to expect and whether it is a snack or a substantial portion. A proper seated meal gives space to discuss these differences and recover after a wall walk.",
        "The wider region's coastal connections do not mean every kitchen serves the same seafood or that it will suit every guest. Check actual ingredients, bones, shellfish, meat stock, wheat, soy and shared equipment. A vegetable filling may still be cooked with animal ingredients. Serious allergies and vegetarian or religious diets need a kitchen that can explain its preparation and offer a workable alternative. Tastings should be optional and clearly scoped, with no pressure to buy packaged products or accept an unsuitable dish.",
      ],
    },
    itinerary: [
      {
        day: "Arrival afternoon",
        title: "Settle in and understand the old-city layout",
        description:
          "Complete the actual station or road transfer, leave luggage at the chosen property and take a manageable orientation walk. Use Ziyang Street and a seated meal to introduce local life. Keep demanding steps and final-entry deadlines away from an uncertain arrival.",
      },
      {
        day: "Full-day morning",
        title: "Walk the wall section that suits you",
        description:
          "Use the agreed entrance and current open route, with its ascent, rest points, exit and pickup understood. Focus on city, slope and river relationships. Adjust for rain, heat and energy rather than assume completing a long circuit is the measure of a successful visit.",
      },
      {
        day: "Afternoon and evening",
        title: "Return to street level and add a different subject",
        description:
          "Take a proper lunch, then choose East Lake, the Longxing area or more old-town detail according to current opening and interests. Leave room for rest and a good dinner instead of adding a distant regional excursion after the wall.",
      },
      {
        day: "Departure morning",
        title: "Continue with a coherent Zhejiang route",
        description:
          "Allow breakfast and any short final walk before the full transfer toward Shaoxing, Hangzhou or another separately planned destination. This two-night outline is illustrative, not a published package or a guarantee of wall access, particular rooms, private hosts or included tickets.",
      },
    ],
  },
};
