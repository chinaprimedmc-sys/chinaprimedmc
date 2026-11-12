import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/suzhou.svg",
  alt: "Suzhou accommodation planning diagram comparing the historic city, Jinji Lake and a separate water-town stay; schematic, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const suzhouGuide: ExpandedDestination = {
  id: "suzhou",
  name: "Suzhou",
  region: "east",
  kicker: "Classical gardens, canal neighborhoods & a thoughtful pace",
  description:
    "Choose Suzhou gardens for their differences, stay where the evenings suit you and treat a nearby water town as its own decision rather than an obligatory extra stop.",
  stay: "2–3 nights",
  bestFor: "Garden design and cultural stays near Shanghai",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "wuxi",
    "changshu",
    "yangzhou",
    "zhouzhuang",
    "tongli",
    "yixing",
    "shanghai",
    "hangzhou",
    "nanjing",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Suzhou Travel Guide: Gardens, Hotels & Canal Walks",
    seoTitle: "Suzhou Travel Guide: Gardens & Where to Stay",
    seoDescription:
      "Choose Suzhou gardens, compare old-city and Jinji Lake hotels, and plan canal walks or a water town. Practical advice for a tailored Shanghai extension.",
    answer:
      "Suzhou in Jiangsu rewards travelers interested in classical garden design, canal neighborhoods and a more intimate scale of cultural sightseeing near Shanghai. The best introduction compares a few places thoughtfully rather than collecting every garden. Allow time to notice framed views, rockwork, rooms and water, then leave room for a neighborhood walk and a proper meal. Tongli or Zhouzhuang is a separate water-town choice, not another name for the old city.",
    stayAnswer:
      "Two nights give one full day for selected gardens and a canal neighborhood, with evening time near the hotel. Three nights provide a second full day for another cultural interest or a separately planned water-town visit. A day trip from Shanghai can work when the route is selective and the complete station transfers are included. Add nights because you want to stay in Suzhou, not because every garden requires a separate day.",
    hotelAnswer:
      "Choose a historic-city base when garden visits, canal walks and nearby evening meals matter. Compare the exact lane and vehicle approach before booking a small courtyard property. Choose Jinji Lake for a particular modern hotel, room setup or business address, accepting separate journeys to many historic sights. A Tongli or Zhouzhuang stay offers a different evening setting and should be evaluated as its own hotel move.",
    sightseeingQuestion: "Which Suzhou gardens should you choose for a first visit?",
    sightseeingAnswer:
      "The Humble Administrator's Garden offers a substantial introduction to water-centered garden space; the smaller Master of the Nets Garden can provide a useful contrast in scale. The Lingering Garden is another option for an interest in its sequence of rooms, courts and rockwork. Pick one principal garden and a complementary interest before adding a second. Check current reservations and walking rather than promising every major garden in one relaxed day.",
    visitorResources: [
      {
        label: "UNESCO: Classical Gardens of Suzhou",
        href: "https://whc.unesco.org/en/list/813/",
        scope:
          "Background on the listed garden ensemble and its significance. This does not confirm current reservations, opening times, private access or admission to every garden through one ticket.",
      },
      {
        label: "Suzhou municipal government",
        href: "https://www.suzhou.gov.cn/",
        scope:
          "City background and public announcements. Verify each garden, water-town visit, host and transport arrangement separately for the travel date.",
      },
    ],
    serviceScope:
      "We can discuss Suzhou as part of a tailored China itinerary, specifying gardens, transfers, guiding, hotel and any agreed cultural session in the proposal. Your guide helps explain design and history rather than simply moving between entrances. Public gardens retain normal reservations, shared access and walking. A private garden visit, craft workshop or evening performance is included only when the venue and terms are confirmed.",
    routeAdvice:
      "Consider Suzhou as a tailored Shanghai extension when garden design and canal neighborhoods add something you want to understand. With more nights, compare adding Hangzhou for tea and lake landscapes, or a separate water-town stay. The seven-day Shanghai, Suzhou and Hangzhou route includes one Suzhou night, one principal garden and a separate old-town walk. The final route, room arrangements, admission and any private host are confirmed through an individual proposal rather than assumed from this illustrative guide.",
    practicalPlanning: {
      timing:
        "Choose a main garden while the group is ready to look closely, then give the next stop a different purpose: a museum, canal neighborhood, meal or arranged craft encounter. Avoid filling the day with repeated garden interiors simply because they are nearby on a list. Include station transfers and fixed booking windows before deciding whether a water town also fits.",
      walking:
        "Gardens can include thresholds, narrow passages, steps, uneven stone and waterside edges. A compact plan can still involve prolonged standing. Canal neighborhoods and bridges add their own surfaces and stairs. Ask about the actual route and room access for mobility needs; private road transport does not make a historic garden or lane step-free.",
      cost: "Compare the selected gardens and admissions, guide expertise, station transfers, hotel position and any arranged host or performance. A courtyard suite and a modern lake-area hotel serve different priorities. Water-town transport, boats and tickets may be additional components. Establish whether a silk or craft visit is learning, a workshop or retail, and whether purchases are optional.",
    },
    attractions: [
      "Humble Administrator's Garden",
      "Master of the Nets Garden",
      "Lingering Garden",
      "Pingjiang Road",
      "Shantang Street",
    ],
    stays: [
      {
        label: "Day trip: one garden and a different interest",
        advice:
          "Select a main garden and a manageable neighborhood or cultural stop. Work from the actual train and complete hotel transfers, rather than treating a short rail sector as the whole journey.",
      },
      {
        label: "2 nights: one full day and an evening",
        advice:
          "Stay for a focused garden day and a local meal or canal walk after checking in. The overnight should add atmosphere and breathing room, not another rushed list.",
      },
      {
        label: "3 nights: a second distinct chapter",
        advice:
          "Give another cultural interest or a water town its own day. If a small historic hotel is part of the appeal, protect enough time there to enjoy it.",
      },
    ],
    hotelAreas: [
      {
        name: "Historic city and canal neighborhoods",
        advice:
          "Consider for garden-focused visits and nearby evening walks. Check the specific street, vehicle access, luggage distance, noise and room stairs. A canal view can be appealing, but it does not establish a quiet room or easy doorstep pickup.",
      },
      {
        name: "Jinji Lake and modern Suzhou",
        advice:
          "Choose for a specific hotel, contemporary lake setting or business plan. Compare the real road journeys to historic gardens and return dining arrangements. A modern hotel can improve room convenience while changing the atmosphere of the stay.",
      },
      {
        name: "A separate Tongli or Zhouzhuang stay",
        advice:
          "Choose when water-town evening time is a priority and the added hotel move is worthwhile. Verify the town, room address, luggage approach, meals and ticket rules. A water-town booking should not be presented as a central Suzhou hotel.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose contrasting gardens rather than a count",
        advice:
          "Compare size, spatial sequence and the kind of design you want to understand. One substantial garden with good interpretation can be more rewarding than several rushed entrances. A second should add a different scale or perspective, with reservations reviewed for the actual day.",
      },
      {
        title: "Old city and water towns are different decisions",
        advice:
          "Pingjiang Road and Shantang Street provide canal-neighborhood experiences within the city. Tongli and Zhouzhuang require separate routing. Choose according to atmosphere, available time and walking, not a claim that you must see every version of a canal town.",
      },
      {
        title: "Keep craft and retail clearly described",
        advice:
          "Silk, embroidery and other crafts can be rewarding subjects when a knowledgeable host is available. Agree whether you will see work in progress, try a technique or visit a shop. Named artisans, workshop access and purchase-free sessions require confirmation rather than a generic factory-tour promise.",
      },
      {
        title: "Give small hotels a room-level check",
        advice:
          "Courtyard character can come with thresholds, stairs and limits on luggage access or sound insulation. Ask about the exact room, bathroom, temperature control and breakfast. Heritage atmosphere should support a comfortable stay rather than conceal unsuitable practical details.",
      },
    ],
    products: [
      {
        slug: "shanghai-suzhou-hangzhou-private-7-day-tour",
        label: "Explore the 7-day Shanghai, Suzhou and Hangzhou private tour",
        reason:
          "Follow a one-way six-night route through Shanghai, a Suzhou garden and Hangzhou tea country, with one Zhujiajiao excursion. Private local transfers connect two public trains; the itinerary ends in Hangzhou and is quoted for your dates.",
        comparison: {
          bestFor: "A complete Jiangnan regional journey with six hotel nights.",
          localPlan:
            "Shanghai three nights, Suzhou one and Hangzhou two; a garden, one water town and one hosted tea tasting.",
          importantChoice:
            "Two hotel changes, self-carried train luggage and local guide handovers. Return to Shanghai is separate.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "wuxi",
        advice:
          "Wuxi adds Jichang Garden's relationship with the hills and a separate northern Taihu outing at Yuantouzhu. Compare a focused day visit with a stay that leaves useful time for both culture and landscape. Lingshan and Nianhuawan are further choices rather than automatic additions to a Suzhou garden day; choose the actual hotel base and complete transfers first.",
      },
      {
        slug: "changshu",
        advice:
          "Changshu adds a hill-and-lake contrast through Yushan, a selected historic city space and Shanghu, with Shajiabang as a separate wetland and modern-history choice. It is a different city within the wider Suzhou municipality. Compare a selective day visit with one or two useful nights, protecting enough time for the main Suzhou gardens rather than attaching every Changshu outing to the same day.",
      },
      {
        slug: "yangzhou",
        advice:
          "Yangzhou can add a purposeful garden comparison through merchant patronage, Huaiyang food and Slender West Lake. Give each city a different cultural question and enough time for meals and slower looking. Verify the full connection and room locations; for a short trip, choose one city well rather than repeat a rushed garden circuit in both.",
      },
      {
        slug: "zhouzhuang",
        advice:
          "Zhouzhuang adds historic houses, bridges and a possible boat perspective outside the city. Compare it with Tongli's garden-led visit using the guest's interests and the actual Suzhou hotel transfer. Keep enough time for the city gardens and decide explicitly whether a day visit or a room change improves the wider itinerary.",
      },
      {
        slug: "tongli",
        advice:
          "Tongli adds Retreat and Reflection Garden and a separate canal-town setting in Wujiang. Compare a day visit from the actual Suzhou hotel with an overnight whose room, evening and morning justify moving luggage. Relate the garden's pond and framed views to the city garden already chosen rather than repeat similar visits without explanation.",
      },
      {
        slug: "yixing",
        advice:
          "Yixing adds zisha pottery and Dingshu's craft setting, a different subject from classical garden design. Choose a collection and a confirmed process-focused visit, with the full station and hotel transfers allowed. A retail stop is not automatically a specialist workshop.",
      },
      {
        slug: "nanjing",
        advice:
          "Nanjing adds capital history, a selected city-wall walk and Purple Mountain monuments, contrasting with Suzhou's gardens. Give its museums and larger sites their own time, and check the actual stations and hotel transfers before making it a short excursion.",
      },
      {
        slug: "shanghai",
        advice:
          "Combine Suzhou's garden and canal interests with Shanghai's urban neighborhoods and architecture. Choose the actual rail stations and hotel transfers; an early train is not always the most comfortable choice with substantial luggage or a distant pickup.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds lake landscape and tea rather than another sequence of Suzhou gardens. Give the places separate time when combining them, and compare the full route between the stations and properties you will actually use.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit gardens and neighborhood walks, with rain and busy holiday periods still possible. Summer needs heat-aware timing and breaks; winter can be cold and damp, making room comfort important. Seasonal flowers and foliage vary by garden and conditions. Choose dates for the overall trip rather than guaranteeing a particular display.",
    orientation:
      "Suzhou's historic city, modern Jinji Lake area and nearby water towns are different bases. The classical gardens are individual sites, not one enclosed attraction. Use exact garden entrances, hotel and railway station when planning transfers. This guide concerns Suzhou in Jiangsu, not the different city called Suzhou in Anhui.",
    experiences: [
      "Compare a main classical garden with a smaller or differently designed space, allowing time for interpretation",
      "Walk a manageable canal neighborhood with breaks and a meal rather than another series of entrances",
      "Arrange a genuine craft or cultural encounter when the host and activity match your interests",
    ],
    planningNotes: [
      "Select gardens for their differences and confirm individual admission arrangements",
      "Check historic-hotel stairs, noise and the final luggage approach",
      "Treat Tongli or Zhouzhuang as a separate route rather than an automatic extra stop",
    ],
    arrival:
      "Suzhou railway station and Suzhou North serve different journeys and are not interchangeable pickup points. Confirm the exact train and hotel before arranging the transfer. If arriving through a Shanghai airport, compare the complete onward journey, luggage handling and time of day; a nominally short train ride does not include the airport-to-station connection. Keep the first visit flexible after an international arrival.",
    gettingAround:
      "Use walking for selected garden and neighborhood sections, with road transfers between separate areas as agreed. Metro travel can suit some independent journeys but still requires the last approach to an entrance or hotel. A boat ride has its own route, boarding and operating arrangements, and should not be assumed to replace the road transfer to a water town.",
    stayStrategy:
      "Choose between old-city atmosphere and the features of a specific modern hotel. For a small historic stay, check the actual room and vehicle approach before prioritizing the photographs. For Jinji Lake, establish how evenings and garden-day transfers will work. Keep the number of hotel moves proportionate to a short Shanghai-area extension.",
    firstTimerNote:
      "The point of a Suzhou garden is not only its size or the number of buildings. Framed views, changes of scale and the relationship between rooms, stone and water reward slow looking. A good introduction leaves time for those details and does not require a full inventory of UNESCO-listed sites.",
    faqs: [
      {
        question: "Is Suzhou worth an overnight stay from Shanghai?",
        answer:
          "Yes, when an evening in a canal neighborhood or time at a chosen hotel is part of the appeal. Two nights give one full day for selected gardens and another interest. A day trip can work for a more limited introduction without changing hotels.",
      },
      {
        question: "Which Suzhou garden is best for a first visit?",
        answer:
          "The Humble Administrator's Garden provides a substantial introduction. The Master of the Nets offers a smaller-scale contrast, while the Lingering Garden is another option for its sequence of spaces and rockwork. Choose by interest, walking and reservations rather than trying to visit all three automatically.",
      },
      {
        question: "Should I stay in Suzhou old town or near Jinji Lake?",
        answer:
          "Choose the historic city for garden-focused touring, canal neighborhoods and nearby evening meals. Choose Jinji Lake for a particular modern hotel, lake setting or business address. Compare exact properties and transfers, including luggage access at historic stays.",
      },
      {
        question: "Can I visit Suzhou and Tongli or Zhouzhuang in one day?",
        answer:
          "A selective combined day may be possible, but it reduces time for gardens and adds travel. For a first visit or gentler pace, prioritize the city or give the water town a separate day. Confirm the exact route before adding it to a Shanghai day trip.",
      },
      {
        question: "Are Suzhou gardens wheelchair accessible?",
        answer:
          "Access varies by garden and selected route. Historic thresholds, stairs and narrow paths can remain even where some sections are easier. Review the actual entrances, paths, facilities and remaining barriers individually; a private vehicle does not establish step-free access.",
      },
      {
        question: "Are Suzhou and Hangzhou similar?",
        answer:
          "They offer complementary experiences. Suzhou emphasizes classical gardens and canal neighborhoods; Hangzhou combines West Lake with tea landscapes and different hotel settings. With limited time, choose the interest that matters more instead of adding a rushed second city.",
      },
    ],
    culturalStory: {
      title: "Look at gardens as sequences, not monuments",
      paragraphs: [
        "Suzhou's classical gardens work through relationships between rooms, rockwork, plants and water. A doorway frames the next scene; a turn reveals a different scale; a window connects spaces you have just walked through. This makes a considered route and explanation more useful than simply moving from one famous building to the next.",
        "Canal neighborhoods provide another perspective on the city, with homes, businesses and visitor activity sharing the streets. Keep a walk manageable, respect private doorways and ask before photographing people. A separately arranged embroidery or silk encounter can deepen the day when the host and activity are clear, without turning the visit into an obligatory sales stop.",
      ],
    },
    foodStory: {
      title: "Let a meal break the sequence of sightseeing",
      paragraphs: [
        "Suzhou's food can offer a useful change of pace between gardens. Noodles, freshwater ingredients and seasonal dishes provide different directions, but the group's preferences should shape the menu. Discuss sweetness, texture, fish bones and the amount of food before ordering. A nearby, well-timed meal can be more enjoyable than a celebrated venue that adds another long transfer.",
        "Explain allergies and dietary restrictions in advance. Broths, sauces, meat stocks and shared preparation can matter even when a dish looks vegetable-based. A tea stop is not necessarily a meal, and a craft visit does not automatically include lunch. For a courtyard stay, confirm breakfast and evening dining before relying on a picturesque but impractical location.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the chosen city base",
        description:
          "Transfer from the correct station or gateway, then enjoy a short nearby walk and meal if time allows. Keep fixed garden reservations separate from an uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "One main garden and a different city chapter",
        description:
          "Visit the selected garden with context and breaks. Follow with a complementary garden, canal neighborhood or museum only when the remaining time and walking suit the group.",
      },
      {
        day: "Optional full day",
        title: "Choose depth or a water town",
        description:
          "With a third night, add an agreed cultural interest or a separate Tongli or Zhouzhuang visit. Avoid another hotel move unless staying there adds real value.",
      },
      {
        day: "Departure",
        title: "Continue with the actual connection",
        description:
          "Build pickup around the booked train or onward gateway, allowing for luggage and boarding. This is an illustrative stay, not a published package with automatic inclusions.",
      },
    ],
  },
};
