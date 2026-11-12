import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yinchuan.svg",
  alt: "Yinchuan planning diagram comparing city accommodation, the Helan foothills and a separate Zhongwei desert stay; schematic rather than a map or photograph",
  width: 1600,
  height: 1200,
};

export const yinchuanGuide: ExpandedDestination = {
  id: "yinchuan",
  name: "Yinchuan",
  region: "northwest",
  kicker: "Western Xia history, Helan landscapes & Hui food culture",
  description:
    "Use Yinchuan as a considered Ningxia base for Western Xia history, Helan Mountain rock art and Hui food traditions, with the desert planned as a separate stay.",
  stay: "3–4 nights",
  bestFor: "Northwestern history and food with context",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["alxa", "zhongwei", "xian"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yinchuan Travel Guide: Ningxia History & Private Tours",
    seoTitle: "Yinchuan Travel Guide: History & Where to Stay",
    seoDescription:
      "Plan Yinchuan for Western Xia history, Helan rock art and Hui food. Compare city and foothill stays, dietary planning and a private Ningxia desert route.",
    answer:
      "Yinchuan is the capital of Ningxia in northwest China, useful for travelers who want to understand a region beyond the classic first-trip cities. Western Xia history, Helan Mountain rock art and Hui food traditions offer different ways into the place. Give those interests time rather than treating the city as a transfer point for the dunes. Zhongwei is a separate desert chapter, with its own accommodation and onward transport.",
    stayAnswer:
      "Three nights usually give two full days: one for a selected history or Helan-area visit, another for food, cultural context and a different interest. Four nights allow more separation between the Western Xia tombs, rock art and time with a confirmed host. Add a Zhongwei desert night to that allocation rather than assuming a distant lodge is simply another Yinchuan hotel. Our published China journey uses three Yinchuan-area nights before one desert night.",
    hotelAnswer:
      "Choose a city hotel when varied dining, museums and evening convenience are priorities. Compare the exact addresses in the older city around Xingqing with newer areas such as Jinfeng; neither district name alone establishes the best hotel for your route. A Helan foothill property can suit a quieter landscape stay but may reduce independent meal choices. Verify the actual setting, room quality and daily road journeys before choosing by photographs.",
    sightseeingQuestion: "Should you stay in Yinchuan or go straight to the Zhongwei desert?",
    sightseeingAnswer:
      "Stay in Yinchuan if Western Xia history, rock art and local food culture interest you. Go directly to the Zhongwei area only when the desert is the main purpose and the arrival connection supports it. Combining both works well when you allow separate nights and transfers; it does not make every Ningxia attraction part of one short city excursion.",
    visitorResources: [
      {
        label: "Ningxia regional government",
        href: "https://www.nx.gov.cn/",
        scope:
          "Regional background and public announcements. This is not confirmation of current site admission, mosque access, restaurant certification, host availability or desert accommodation.",
      },
    ],
    serviceScope:
      "We shape Yinchuan around the history, landscape and food that interest you, with private guiding, transport, selected meals and hosts specified in the proposal. For dietary requirements, agree the evidence you need: certification, ownership, ingredients and preparation are different questions. A cultural visit or prayer-aware schedule does not guarantee access to a mosque, private home or named host.",
    routeAdvice:
      "Our 13-day Muslim-friendly China journey gives the Yinchuan area three nights after Xi’an, followed by one Zhongwei desert night and one Shanghai night. Its Ningxia chapter includes a selected Helan rock-art visit and a confirmed Hui food or cultural encounter. The Western Xia tombs are a separate planning interest, not an automatic inclusion in that program. Choose the published route when its wider cities and dietary approach fit; ask for a different Ningxia plan if your main interest is archaeology, wine or a longer regional stay.",
    practicalPlanning: {
      timing:
        "Group visits by geography. A museum introduction can make an outdoor heritage site more meaningful, while a food encounter deserves a proper meal window and interpretation. Leave arrival light and give the transfer to Zhongwei its own daylight plan. Do not build the itinerary around an unconfirmed Friday mosque visit or a host who has not agreed to receive visitors.",
      walking:
        "Rock-art and archaeological visits can involve exposed paths, uneven ground, steps and standing with limited shade. Ask what part of each site is proposed and how far it is from the vehicle. Heat, wind and cold can matter as much as distance. A lower-effort museum alternative should still be checked for opening arrangements and access.",
      cost: "Compare room category, hotel location, guide expertise, out-of-city vehicle hours, admission and arranged meals or hosts. Ningxia accommodation should be assessed property by property rather than promised as equivalent to every major-city five-star hotel. Dietary verification and a privately hosted meal require specific arrangements; a restaurant label or room-only rate does not describe the complete service.",
    },
    attractions: [
      "Western Xia tombs",
      "Helan Mountain rock art",
      "Ningxia Museum",
      "Yellow River landscapes near Yinchuan",
    ],
    stays: [
      {
        label: "2 nights: one clear priority",
        advice:
          "Use the single full day for a selected historical or Helan-area route. Do not assume it also covers a substantial hosted meal, every museum and the Zhongwei desert.",
      },
      {
        label: "3 nights: two complementary days",
        advice:
          "Separate an outdoor heritage day from food, a museum or cultural time. The published China journey uses this allocation, with arrival and onward travel treated separately.",
      },
      {
        label: "4 nights or more: follow the interest",
        advice:
          "Allow separate days for Western Xia history and rock art, then add a confirmed specialist interest or a quieter day. Extra time should deepen the visit rather than repeat distant landscape stops.",
      },
    ],
    hotelAreas: [
      {
        name: "Xingqing and older-city addresses",
        advice:
          "Compare for local dining and a city-focused stay. Check the actual property, street surroundings, room sound and pickup point. A historic-city location does not itself mean a heritage hotel or that a chosen restaurant is within an easy walk.",
      },
      {
        name: "Jinfeng and newer-city hotels",
        advice:
          "Consider when a particular hotel's room setup, dining or position fits the route. Verify journeys to your chosen museum, restaurants and out-of-city visits; newer does not automatically mean more convenient.",
      },
      {
        name: "Helan foothill properties",
        advice:
          "Choose deliberately for landscape and time at the property. Confirm meals, heating or cooling, luggage access and transfer needs. A winery-associated stay is a different choice from an alcohol-free or prayer-focused itinerary and should never be substituted without discussion.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose the history you want to understand",
        advice:
          "The Western Xia tombs relate to the Tangut-led Western Xia state; Helan rock art opens a different set of questions about earlier peoples and landscape. Ask which site and interpretation your day includes. They should not become interchangeable photo stops under a generic Silk Road label.",
      },
      {
        title: "Treat Hui culture as lived experience",
        advice:
          "A market conversation, a hosted meal and a religious visit serve different purposes. Agree the host, language, compensation and photography permissions. No one household or meal represents every Hui community, and private homes are not open simply because a guide knows the area.",
      },
      {
        title: "Verify diet rather than relying on a regional label",
        advice:
          "Ningxia's Hui heritage does not make every restaurant, hotel breakfast or kitchen suitable for every Muslim traveler. State whether you require certification, Muslim ownership, alcohol restrictions or separation of equipment. If the available evidence falls short, choose another arrangement or acknowledge the limitation before booking.",
      },
      {
        title: "Discuss wine as an optional, separate interest",
        advice:
          "The Helan foothills are also associated with wine production. A winery visit can be relevant to some travelers, but appointment access, language, tasting and transport need confirmation. Alcohol-related visits are not included by default in our Muslim-friendly journey; do not conflate the two experiences.",
      },
    ],
    products: [
      {
        slug: "muslim-friendly-china-tour-great-wall-desert-stars",
        label: "Explore the 13-day Muslim-friendly China journey",
        reason:
          "This wider route pairs Beijing and Xi’an with three Yinchuan-area nights, one Zhongwei desert night and a Shanghai finale. Choose it for a private cultural journey shaped around your stated food, prayer and room needs. Review the selected rock-art visit, confirmed hosts, actual accommodation and transport before booking; it is not a promise of every Yinchuan attraction or universally certified kitchens.",
        comparison: {
          bestFor:
            "Travelers combining China's major historic cities with Hui food culture and a desert stay.",
          localPlan:
            "Three Yinchuan-area nights, followed by one Zhongwei desert night within 13 days and 12 nights.",
          importantChoice:
            "Dietary evidence, mosque access and hosts require confirmation; the Western Xia tombs are not a default listed inclusion.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "alxa",
        advice:
          "Alxa Left Banner can add a separately planned desert chapter with Bayanhot and a named Tengger route. Compare the full cross-region road and exact accommodation. Alxa Right Banner's Badain Jaran and distant Ejina are different journeys; the published Ningxia itinerary does not automatically include them.",
      },
      {
        slug: "zhongwei",
        advice:
          "Add a separate desert stay for a different landscape and time around sunset. Plan the actual lodge approach, baggage arrangements and departure gateway; do not treat a Zhongwei booking as another central Yinchuan night.",
      },
      {
        slug: "xian",
        advice:
          "Xi’an provides a contrasting historical chapter around imperial archaeology and Chinese-Islamic heritage. Compare current flight or rail schedules and complete hotel transfers rather than assuming one fixed connection is available every day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit outdoor heritage visits, with wind and variable temperatures still possible. Summer needs shade, water and a realistic midday plan; winter brings cold that changes the appeal of long exposed stops. Check dates, holiday demand and the actual forecast before fixing outdoor visits. A clear seasonal label does not guarantee comfortable conditions or a desert sky.",
    orientation:
      "Yinchuan is a city base within Ningxia, not another name for the whole region. The Western Xia tombs, selected Helan rock-art areas, the Yellow River and Zhongwei are distinct planning points. Decide which interests merit time, then choose accommodation and transport around those addresses. Ningxia and Xinjiang are different regions.",
    experiences: [
      "Explore Western Xia history through a selected museum and archaeological visit, with the actual route agreed",
      "Read Helan rock art in its landscape rather than treating the images as isolated photographs",
      "Share a confirmed Hui food or cultural encounter with time for questions and respectful interpretation",
    ],
    planningNotes: [
      "Separate Yinchuan nights from the Zhongwei desert allocation",
      "Agree dietary evidence, host consent and any prayer priorities before booking",
      "Review exposed walking, temperature and a suitable indoor alternative",
    ],
    arrival:
      "Yinchuan Hedong International Airport and the railway station are separate gateways. Confirm the ticket, terminal or station and exact hotel before choosing pickup. A late arrival should leave room for check-in and a suitable meal rather than a long first excursion. Onward travel from a desert lodge needs its own plan and may use a different airport or station.",
    gettingAround:
      "Private road transport can connect heritage sites, hotel and arranged meals, with driving and guiding hours agreed. Central-city walking does not replace those out-of-city journeys. Use the booked entrance and host address to plan the day; a broad place name such as Helan Mountain is insufficient for a precise pickup-to-return schedule.",
    stayStrategy:
      "Choose the hotel for the time you will actually spend there: room comfort, quiet, breakfast, diet, privacy and accessible pickup. For a foothill stay, check independent dining options and the wet- or windy-day setting. Compare the strongest suitable confirmed property rather than assuming every regional luxury label describes the same facilities.",
    firstTimerNote:
      "Yinchuan is a useful introduction to Ningxia when history and food culture interest you, not a shorthand for every Muslim community in China. Discuss your own needs and curiosity. Faith-aware planning, a hosted cultural meal and sightseeing access are separate arrangements, each with its own confirmation.",
    faqs: [
      {
        question: "How many days should I spend in Yinchuan?",
        answer:
          "Two full days, usually with three nights, provide a useful introduction to a selected history or Helan-area visit and food or cultural time. Add a day for deeper Western Xia interest or another specialist chapter. Keep a Zhongwei desert night separate.",
      },
      {
        question: "Are Yinchuan and Ningxia the same place?",
        answer:
          "No. Yinchuan is the capital city of Ningxia Hui Autonomous Region. Zhongwei is another city in the region, with a distinct desert stay and transfer plan. Ningxia is also different from Xinjiang.",
      },
      {
        question: "Can I visit the Western Xia tombs and Helan rock art in one day?",
        answer:
          "A selective plan may be possible, but the sites, walking and interpretation need their own time. Compare the exact route and opening arrangements. With a strong interest in history or a gentler pace, use separate days rather than trying to cover both completely.",
      },
      {
        question: "Is all food in Yinchuan halal?",
        answer:
          "No blanket claim is appropriate. Restaurants, hotel breakfasts and kitchens differ. Agree whether certification, Muslim ownership, ingredient checks, preparation separation or alcohol restrictions are required, then verify the actual arrangement against those needs.",
      },
      {
        question: "Can I visit a mosque or join Friday prayers?",
        answer:
          "Plan the request around your faith needs, current local rules and confirmed access. A prayer-aware itinerary does not guarantee admission to every mosque, and sightseeing visitors should not assume access to worship areas. Confirm timing and etiquette in advance.",
      },
      {
        question: "Does the published Ningxia route include a winery visit?",
        answer:
          "No alcohol-related visit is included by default in the Muslim-friendly journey. A wine-focused interest requires a separate agreed plan, with venue access, language, tasting and transport confirmed.",
      },
    ],
    culturalStory: {
      title: "Distinguish the layers of Ningxia's history",
      paragraphs: [
        "The Western Xia tombs and Helan rock art invite different kinds of interpretation. The former connect to the Tangut-led state and its imperial history; the latter ask you to look at marks, terrain and the people who used the landscape over time. A useful guide explains what can be established and where interpretation remains uncertain, rather than attaching one sweeping story to every site.",
        "Hui food and community life add a living dimension to that historical visit. A hosted conversation works best when the setting, language and questions suit the people involved. Ask permission before recording or photographing, and understand that a restaurant, religious institution and private home have different boundaries. The value comes from context and consent, not from claiming exclusive access.",
      ],
    },
    foodStory: {
      title: "Make the table part of the regional story",
      paragraphs: [
        "Lamb, noodles and seasonal produce offer an introduction to Ningxia's food traditions. A well-paced meal leaves time to discuss ingredients and preparation with a willing cook or host, rather than simply ordering a list of regional dishes. Explain spice preferences, allergies and the group's appetite before choosing a menu; an elaborate meal is not always the best fit after an outdoor day.",
        "For Muslim travelers, a familiar-looking menu does not settle questions about certification, stocks, cooking fats or shared equipment. Hotel breakfasts need their own review. Agree your required evidence before reservations and keep a suitable fallback for late arrivals or a changed host. Non-Muslim travelers can enjoy the same cultural depth without treating a community's food as a staged performance.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into Ningxia",
        description:
          "Transfer to the confirmed Yinchuan-area hotel and keep dinner and the first evening manageable. Add a short local introduction only when the arrival allows it.",
      },
      {
        day: "Full day 1",
        title: "Choose a history and landscape chapter",
        description:
          "Focus on Helan rock art or Western Xia history, with interpretation, walking and conditions reviewed. A second substantial site is a choice to assess, not a default extra.",
      },
      {
        day: "Full day 2",
        title: "Food, culture and a different perspective",
        description:
          "Choose a confirmed hosted meal, museum or cultural interest, respecting prayer needs and host availability. This general outline does not add every option to the published product.",
      },
      {
        day: "Departure",
        title: "Continue to the desert or another city",
        description:
          "Use the actual lodge, station or airport to plan the transfer. If continuing to Zhongwei, protect check-in and daylight rather than adding a distant final Yinchuan stop.",
      },
    ],
  },
};
