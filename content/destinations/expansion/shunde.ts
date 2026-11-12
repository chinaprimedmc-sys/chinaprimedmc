import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/shunde.svg",
  alt: "Shunde planning schematic distinguishing a Daliang food-and-garden base, another selected district and a Guangzhou return excursion; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const shundeGuide: ExpandedDestination = {
  id: "shunde",
  name: "Shunde",
  region: "south",
  kicker: "A food-led stay with gardens, neighborhoods and time at the table",
  description:
    "Plan Shunde around a few well-chosen meals and a coherent district route, with Daliang, Ronggui, Beijiao and village interests clearly separated and practical advice for a day trip or overnight.",
  stay: "A focused day trip or 2–3 nights",
  bestFor: "Cantonese cooking, Lingnan gardens and a slower food-focused stay",
  interests: ["food", "heritage", "city"],
  relatedDestinationIds: ["zhongshan", "guangzhou", "chaozhou", "shenzhen", "foshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Shunde Travel Guide: Food, Gardens & Where to Stay",
    seoTitle: "Shunde Travel Guide: Food, Gardens & Where to Stay",
    seoDescription:
      "Choose a Shunde day trip or overnight with Daliang, Ronggui and Beijiao base advice, Qinghui Garden, meal planning, dietary checks and Guangzhou transfers.",
    answer:
      "Shunde (顺德) is a district of Foshan in Guangdong, known for a distinctive culinary tradition within the wider Cantonese food landscape. It is not one compact food street or a neighborhood of central Guangzhou. Daliang, Ronggui, Beijiao, Xingtan and Jun'an create different restaurant and sightseeing routes. Come for a few well-explained meals, with a garden, neighborhood, village or art interest between them. Shunde's UNESCO Creative City of Gastronomy recognition provides useful cultural context; it is not a guarantee about every restaurant, chef or visitor experience using the destination name.",
    stayAnswer:
      "A focused day trip from Guangzhou can work for one coherent district route and a proper meal when the complete return journey fits. Two nights give one full day plus more flexible evening and breakfast time. Three nights allow another distinct district or a slower food-and-culture rhythm. Stay longer because you enjoy the subject and the property, not to turn every meal into another cross-district drive. A late arrival and early departure do not provide the same experience as a dedicated food day.",
    hotelAnswer:
      "Choose a Daliang base for Qinghui Garden and the nearby food-and-city interests you will actually use, Ronggui for a route centered on that part of Shunde, or Beijiao when a specific hotel, art visit or onward connection makes it the right choice. A more rural base needs its own review of meals and road access. Map the shortlisted restaurants and visits before booking: a Shunde label does not tell you how far they are from the room. Confirm quietness, bedding, breakfast, climate control and pickup rather than choosing solely by a restaurant's reputation nearby.",
    sightseeingQuestion: "Should you visit Shunde from Guangzhou or stay overnight?",
    sightseeingAnswer:
      "Choose a return outing when one selected district, a cultural interest and a proper meal are enough. Stay overnight when dinner, breakfast, a second subject or a particular hotel meaningfully improves the visit. Compare the full road journey with a train plus both terminal transfers, using the exact stations and addresses. A day trip should not promise Daliang, Ronggui, Beijiao, Fengjian village and Jun'an as one effortless circuit. An overnight earns its value through useful time and a coherent route, not simply the chance to add more eating stops.",
    visitorResources: [
      {
        label: "Shunde district government",
        href: "https://www.shunde.gov.cn/",
        scope:
          "District public information and local context, mainly in Chinese. Confirm current garden and village visitor arrangements, road notices, public events and relevant institutions through the responsible authority. Destination promotion does not verify restaurant reservations, chef access or a hotel's facilities.",
      },
      {
        label: "UNESCO Creative Cities Network",
        href: "https://www.unesco.org/en/creative-cities",
        scope:
          "Official network reference for Shunde's City of Gastronomy context. The designation is not a restaurant rating, food-safety assessment or endorsement of every business, class or tour marketed under Shunde's name.",
      },
      {
        label: "He Art Museum",
        href: "https://www.hem.org/",
        scope:
          "Institutional reference for the museum in Beijiao. Check current exhibitions, reservations, opening arrangements and visitor access before including it. An architectural interest or ticket does not imply a private collection tour, curator meeting or access to every space.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Compare the actual station and dated service with both road transfers. Shunde, Shunde College, Ronggui, Foshan West and Guangzhou South are distinct names and locations, not interchangeable instructions for the same hotel or restaurant route.",
      },
    ],
    serviceScope:
      "A tailored proposal can identify the hotel and room, exact gateway, vehicle, guide hours, selected garden or city route and the meals included. Distinguish a restaurant reservation, guided tasting, market browse and hosted cooking session in writing. A chef meeting, kitchen access, specialist food interpreter, village host or boat activity needs its own availability and agreement. Share allergies, dietary needs, appetite, meal budget and whether the priority is learning or simply eating well before choosing venues. Private transport does not provide exclusive restaurant or household access.",
    routeAdvice:
      "Shunde can complement Guangzhou through a focused excursion or separate stay with its own culinary and cultural purpose. Shenzhen is another city chapter with a different road or rail connection. Chaozhou offers Teochew cooking farther east and needs enough time to make the contrast worthwhile. The existing Guangzhou-Shenzhen business product does not include a Shunde food extension, so no matching published Shunde product is recommended here. Use the illustrative two-night plan to request a tailored route with named areas, clear meal inclusions and manageable travel between them.",
    practicalPlanning: {
      timing:
        "Place the main meal first in the day's design, including reservation, service pattern and any advance-order dishes. Add a nearby garden, neighborhood or collection rather than crossing the district repeatedly. Leave time between eating stops and keep a seated meal distinct from a snack walk. Restaurant opening hours, booking rules and preparation can vary; an early train or flight needs its own departure allowance rather than an optimistic final tasting.",
      walking:
        "Garden thresholds, stone paving, village lanes, museum circulation and market aisles involve different conditions. Agree the route, seating, toilets and vehicle meeting points. A restaurant can have steps, upper-floor seating or a busy waiting area even when the main road is accessible. Boats, where offered, need a separate boarding review. Check the hotel's room-to-breakfast route as well as the outing before describing the visit as easy for limited mobility.",
      cost: "Compare the room, complete transport, guide language, admissions and the actual meal basis. A shared tasting menu, a la carte meal, seafood ordered by weight and a series of snacks have different totals. Confirm portions, drinks, private-room charges where applicable and any advance orders. A higher-end food trip should buy thoughtful ordering, suitable seating, clear dietary communication and good pacing, not pressure to purchase the most expensive ingredients or claim a celebrity-chef encounter.",
    },
    attractions: [
      "Qinghui Garden in Daliang, on a selected Lingnan garden route",
      "Daliang food and neighborhood interests grouped into a coherent day",
      "Ronggui as a separate restaurant or city chapter when it adds a real subject",
      "He Art Museum in Beijiao, with current exhibitions and visitor arrangements checked",
      "Fengjian water village in Xingtan as a distinct cultural outing",
      "A Jun'an cooking interest only when the venue, order and full road journey are justified",
    ],
    stays: [
      {
        label: "A day trip: one district and a strong main meal",
        advice:
          "Choose a coherent route from the Guangzhou base and compare the complete return journey. A garden or collection plus a meal can make a useful introduction. Avoid selling a comprehensive all-Shunde experience based on a short train ride that excludes terminal transfers and restaurant time.",
      },
      {
        label: "2 nights: a focused stay with an unhurried evening",
        advice:
          "Use one full day plus suitable arrival or departure time for food and a cultural subject near the base. Dinner and breakfast can justify staying when they fit the group. Keep the first and final journeys visible rather than counting them as extra full days.",
      },
      {
        label: "3 nights: a second distinct topic",
        advice:
          "Add another district, a confirmed hosted food session or more time at a worthwhile property. Choose the contrast deliberately rather than repeating a similar meal in several places. Extra nights should reduce rushing and improve understanding, not create a requirement to eat continuously.",
      },
    ],
    hotelAreas: [
      {
        name: "Daliang",
        advice:
          "A practical starting point when Qinghui Garden and selected nearby restaurants form the core of the stay. Check the exact street, room quietness, walk to meals and vehicle pickup. A central Daliang address does not make every Shunde restaurant close, and proximity to busy food lanes can affect sleep.",
      },
      {
        name: "Ronggui",
        advice:
          "Choose for a route genuinely centered on that part of the district, with restaurants and other interests mapped first. Compare the room and evening environment rather than moving here merely to add another food-area name. The return drive to a Daliang-centered day can change the value of the hotel.",
      },
      {
        name: "Beijiao",
        advice:
          "Consider when a specific property, He Art Museum visit or onward connection gives the area a clear purpose. It is a different base from Daliang or Ronggui. Check current exhibitions, restaurant choices and complete transfers before treating it as the most convenient location for all Shunde interests.",
      },
      {
        name: "A Guangzhou return base",
        advice:
          "Useful when you prefer one city hotel and a focused excursion. Choose the outing around the actual starting address, road or rail connection and return meal plans. Staying in Guangzhou can simplify the wider holiday without providing the same dinner-and-breakfast time as a separate Shunde overnight.",
      },
    ],
    tradeoffs: [
      {
        title: "Let one area shape the day instead of following a scattered restaurant list",
        advice:
          "Daliang, Ronggui, Beijiao, Xingtan and Jun'an are different parts of Shunde. Pin the main meal, hotel and cultural visit before deciding what else fits. A famous dish on the other side of the district may cost more time than it adds pleasure. A few carefully chosen venues with explanation can provide a stronger food day than a sequence assembled from social-media popularity.",
      },
      {
        title: "A food reputation is not a chef appointment or a guaranteed table",
        advice:
          "Identify the restaurant, booking policy, menu and service that can actually be arranged. A private guide is not private kitchen access, and a popular venue may have a different reservation or waiting pattern from a fine-dining restaurant. A cooking class or chef conversation needs a confirmed host and topic. If that arrangement is unavailable, a well-ordered meal can still be a valuable culinary experience without overstating it.",
      },
      {
        title: "Qinghui Garden, a water village and an art museum offer different cultural days",
        advice:
          "Choose Qinghui for a Lingnan garden subject in Daliang, Fengjian for a separate village-and-waterway interest, or He Art Museum for its architecture and current art program in Beijiao. They are not adjacent stops or substitutes for the same experience. Confirm current access and the route's walking demands. One well-explained visit can be enough between meals, especially when a food-focused holiday needs appetite and rest.",
      },
      {
        title: "Milk desserts and delicate fish dishes need ingredient-level discussion",
        advice:
          "Double-skin milk and ginger-milk desserts are dairy-based preparations, and recipes or accompaniments can introduce other allergens. A light-looking dish is not automatically vegetarian, lactose-free or free of fish stock. Ask about bones, cooking and shared preparation for fish dishes, with fully cooked alternatives selected where appropriate. The guide's role is to translate choices clearly, not pressure every guest to eat the signature item.",
      },
      {
        title: "Group dishes and advance orders should match the traveling party",
        advice:
          "A preparation such as Jun'an steamed pork may be ordered and served in a format better suited to a group than a couple. Confirm the venue, order requirements, portion and full price basis before building a day around it. Seafood sold by weight and banquet-style menus need the same clarity. A smaller party can have an excellent meal without replicating a large local celebration table.",
      },
      {
        title: "A short train ride does not define a short food excursion",
        advice:
          "The right station depends on the hotel, restaurant and visitor route. Shunde, Shunde College and Ronggui do not serve identical local plans; Foshan West is not another name for Daliang. Compare the complete journey with a direct road transfer, including luggage and the return time. A rail option can work well, but the headline segment alone is not the itinerary.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "zhongshan",
        advice:
          "Zhongshan adds Cuiheng history, selected Shiqi streets and a different landscape-design subject at Qijiang Park. Choose a clear cultural purpose and pace a Shiqi pigeon meal separately from the Shunde food day. Compare actual district roads and useful hours before adding another hotel or meal stop.",
      },
      {
        slug: "foshan",
        advice:
          "Use Foshan's guide for Chancheng's Ancestral Temple and Shiwan ceramics, which offer a different subject from a Shunde food day. Shunde is within the municipality, but the routes and hotel choices are not interchangeable. Give the heritage chapter useful time and compare the actual transfer rather than treating it as an extra nearby stop between meals.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds trading-city history and a broader Cantonese urban context. Choose a focused Shunde day trip or a separate overnight by comparing useful meal and cultural time with both transfers. The existing business itinerary's Guangzhou days do not automatically include a Shunde culinary extension.",
      },
      {
        slug: "chaozhou",
        advice:
          "Chaozhou adds Teochew food, gongfu tea and an eastern Guangdong old-city subject. It is a separate journey rather than another nearby Shunde food district. Preserve useful nights and explain the culinary differences so the combination adds depth instead of repeating a generic Guangdong meal.",
      },
      {
        slug: "shenzhen",
        advice:
          "Shenzhen provides contemporary design, city and business interests with a different gateway and hotel pattern. Compare the full road or rail connection and keep the final restaurant day away from a tight departure. A regional city link is useful only when both chapters have enough usable time.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler parts of the year are useful starting points for combining meals with garden or village walks. Summer needs heat-aware pacing, shade and flexibility for rain or storm-related transport disruption. Indoor dining and collections can support a varied visit, but actual opening hours and bookings still matter. A culinary destination can be rewarding in different seasons without guaranteeing every ingredient, chef or festival. Check dates against holidays, restaurant service patterns and the current exhibition program when art is a priority.",
    orientation:
      "Shunde is a district within Foshan, not one compact old town and not central Guangzhou. Daliang, Ronggui, Beijiao, Xingtan and Jun'an create different local routes. Qinghui Garden, He Art Museum and Fengjian village belong to different parts of the district. The hotel address and main meal should determine the day, not a broad Foshan or Shunde map pin. Exact station names also matter, since similarly described rail options can leave you with very different final transfers.",
    experiences: [
      "Enjoy a well-ordered Shunde meal with dishes, portions and preparation explained",
      "Pair the table with a selected Lingnan garden, village or contemporary-art subject",
      "Choose a coherent day trip or worthwhile overnight without repeated cross-district driving",
    ],
    planningNotes: [
      "Map the hotel, main meal and cultural subject before choosing which part of Shunde to visit",
      "Clarify restaurant booking, advance orders, shared portions, drinks and meal inclusions",
      "Keep dietary needs, kitchen access, chef hosts and station transfers explicit rather than assumed",
    ],
    arrival:
      "Guangzhou Baiyun Airport, code CAN, can serve a wider Guangdong itinerary, but the complete transfer to the chosen Shunde hotel needs its own plan. Rail options should be compared by the exact service and final address, not only a short headline journey from Guangzhou South. Send the ticket, luggage and hotel or restaurant location before arranging pickup. A Foshan-related arrival does not automatically place you in Daliang, Ronggui or Beijiao.",
    gettingAround:
      "A planned road route can make sense for a food day with several carefully chosen addresses, while a focused district visit may use a different mix of rail, local transfer and walking. Agree the restaurant finish, pickup and any cultural stop with enough time to eat. Village boats, museum access and garden routes have separate arrangements. Avoid crossing the district several times for small tastes when one area can provide a better-paced introduction.",
    stayStrategy:
      "Choose one base for two or three nights. Daliang can work for its garden and food interests; Ronggui or Beijiao should have their own clear purpose. Review the actual room, noise, breakfast, climate control and evening dining before choosing by hotel category. Staying in Guangzhou is also a valid option for a focused return outing. The best plan depends on the whole holiday, not a rule that every food destination requires another hotel move.",
    firstTimerNote:
      "A strong Shunde visit is not an eating competition. Start with a main meal, explain a few dishes well and add a cultural subject that fits the same area. Leave time to digest, walk and enjoy the room. For experienced food travelers, define the techniques or ingredients you want to understand so the visit goes beyond a familiar dessert stop and a generic list of famous restaurants.",
    faqs: [
      {
        question: "Is Shunde a city or part of Foshan?",
        answer:
          "Shunde is a district of Foshan in Guangdong. Its food destination identity covers different areas such as Daliang, Ronggui, Beijiao, Xingtan and Jun'an. They are not one compact restaurant neighborhood, so exact addresses matter for the hotel and daily route.",
      },
      {
        question: "Is Shunde better as a day trip or an overnight from Guangzhou?",
        answer:
          "A day trip can suit one coherent district route and a proper meal when the full return connection works. An overnight adds value when dinner, breakfast, a second topic or a specific hotel merits the stay. Compare the complete transport and usable time rather than deciding from the train segment alone.",
      },
      {
        question: "How many nights should I spend in Shunde?",
        answer:
          "Two nights give one full day and more flexible evening or breakfast time. Three nights allow another distinct topic or a slower food-and-culture rhythm. A focused day trip is another option; extra nights should improve depth and comfort rather than create continuous eating or repeated long drives.",
      },
      {
        question: "Should I stay in Daliang, Ronggui or Beijiao?",
        answer:
          "Choose Daliang for a route centered on Qinghui Garden and nearby food interests, Ronggui for a genuinely Ronggui-focused plan, or Beijiao for a specific property, art visit or connection. Map the main meal and outings first. A Shunde hotel label does not make every district equally convenient.",
      },
      {
        question: "Does Shunde's UNESCO gastronomy recognition endorse every restaurant?",
        answer:
          "No. The Creative City of Gastronomy recognition provides cultural context, not a rating or endorsement of each restaurant, chef, class or tour. Choose venues through their actual menu, service, booking arrangements and fit with the travelers' needs.",
      },
      {
        question: "Can a Shunde food tour accommodate allergies or vegetarian diets?",
        answer:
          "It needs specific venue and preparation checks. Discuss fish and meat stocks, sauces, dairy, eggs, bones and shared equipment rather than relying on a dish name. Milk desserts are not dairy-free, and a light or vegetable-looking dish may contain other ingredients. Agree suitable alternatives before fixing the menu.",
      },
      {
        question: "Can I visit a chef's kitchen or take a cooking class?",
        answer:
          "Only with a confirmed host, topic and access arrangement. A restaurant meal, guided tasting, market visit and hands-on session are different services. A private guide or reservation does not automatically provide kitchen entry, a chef meeting or a class.",
      },
      {
        question: "Are Qinghui Garden, Fengjian village and He Art Museum close together?",
        answer:
          "They are in different parts of Shunde: Qinghui in Daliang, Fengjian in Xingtan and He Art Museum in Beijiao. Choose by the subject and full road pattern rather than assuming one continuous walk. A single well-chosen cultural stop can be enough between meals.",
      },
      {
        question: "Which station should I use for Shunde?",
        answer:
          "Choose the exact station and service around the hotel and planned visits. Shunde, Shunde College, Ronggui, Foshan West and Guangzhou South are different locations. Compare both terminal transfers with a direct road option; the rail segment alone does not establish the fastest or most comfortable day.",
      },
    ],
    culturalStory: {
      title: "Use the table to understand a place, then look beyond it",
      paragraphs: [
        "Shunde's culinary reputation becomes more useful when connected to techniques, ingredients and the way a meal is shared. A guide can explain why a particular preparation matters without turning every restaurant into a master-chef encounter. UNESCO's gastronomy context recognizes a place's cultural relationship with food; it does not remove the need to choose the right venue, menu and service for the guests. Ordinary meals can be meaningful when the questions and explanation are good.",
        "A garden, water village or contemporary art visit adds another way to read the district. Qinghui's spaces, Fengjian's waterways and He Art Museum's architecture and exhibitions are different subjects, not decorative pauses between compulsory dishes. Choose one with enough time to understand it. Respect public routes, homes and working spaces, and keep any specialist or private access separate from a normal visitor ticket.",
      ],
    },
    foodStory: {
      title: "Order for the people at the table, not for a checklist",
      paragraphs: [
        "A thoughtful Shunde meal can show delicate cooking, contrasting textures and careful use of ingredients without requiring the largest banquet. Ask the guide and venue to explain the chosen fish, vegetable, meat or tofu preparation and how many dishes the party needs. A technique-led conversation is often more useful than a list of supposed must-eats. Jun'an steamed pork or another group-scale preparation should be chosen only when the order requirements and portion make sense for the travelers.",
        "Double-skin milk and ginger-milk desserts can be enjoyable additions, with milk, eggs and other ingredients clarified by the actual recipe. Desserts and snacks need not replace a proper meal, and a food-focused day should leave room for preference and appetite. Confirm seafood weight or portion pricing, drinks, sauces, broths and shared preparation. Good ordering gives guests choice, clear costs and a comfortable table rather than pressure to prove enthusiasm through constant eating.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the base with the first meal kept simple",
        description:
          "Transfer to the selected area and settle into the booked room. Use a suitable nearby dinner if timing allows, with any advance orders already agreed. A late arrival should not carry a long multi-restaurant walk or another cross-district journey.",
      },
      {
        day: "Full day",
        title: "A coherent cultural subject and the main meal",
        description:
          "Choose a Daliang garden-and-food route or another clearly defined area. Allow interpretation, a comfortable seated meal and time between tastes. A village or art visit is an alternative with its own road pattern, not an automatic addition to every garden day.",
      },
      {
        day: "Optional second full day",
        title: "Add a distinct district or confirmed learning session",
        description:
          "Use a third night for another real subject, a properly arranged host or time at the property. Review the full journey before adding Ronggui, Beijiao, Fengjian or Jun'an. Avoid repeating similar meals simply to fill the schedule.",
      },
      {
        day: "Departure",
        title: "Continue with enough time for the final transfer",
        description:
          "Use the exact station, airport or onward city and leave space after the last meal. A focused Guangzhou return outing is another valid format. This two-night framework with an optional third night is illustrative, not a published product or a promise of private kitchens, chef meetings or classes.",
      },
    ],
  },
};
