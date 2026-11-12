import { shanghaiSuzhouHangzhou7DayTour } from "@/content/tours/shanghai-suzhou-hangzhou-7-day";
import { guilinYangshuoLongji5DayTour } from "@/content/tours/guilin-yangshuo-longji-5-day";
import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
import { firstChina10DayTour } from "@/content/tours/first-china-10-day";
import { beijingXianChengduShanghaiTour } from "@/content/tours/beijing-xian-chengdu-shanghai";
import { chengduChongqingZhangjiajieTour } from "@/content/tours/chengdu-chongqing-zhangjiajie";
import { chinaConsidered12DayTour } from "@/content/tours/china-considered-12-day";
import { chinaFamily12DayTour } from "@/content/tours/china-family-12-day";
import { guilinYangshuoLiRiverDayTour } from "@/content/tours/guilin-yangshuo-li-river-day-tour";
import { privateChengduPandaDayTour } from "@/content/tours/private-chengdu-panda-day-tour";
import { guangzhouShenzhenBusiness4DayTour } from "@/content/tours/guangzhou-shenzhen-business-4-day";
import { yunnanTeaHorseRoad10DayTour } from "@/content/tours/yunnan-tea-horse-road-10-day";
import { muslimFriendlyChinaDesert13DayTour } from "@/content/tours/muslim-friendly-china-desert-13-day";
import { mutianyuPrivateDayTour } from "@/content/tours/mutianyu-private-day-tour";
import { privateShanghaiDayTour } from "@/content/tours/private-shanghai-day-tour";
import { privateXianTerracottaDayTour } from "@/content/tours/private-xian-terracotta-day-tour";
import { qingchengMountainWellness10DayTour } from "@/content/tours/qingcheng-mountain-wellness-10-day";
import {
  beijingUnhurriedAsset,
  chengduAsset,
  shanghaiZhangjiajieAsset,
} from "@/content/tours/assets";
import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

const xianBeijingImage = (src: string, alt: string): MediaAsset => ({
  src: `/tours/xian-beijing-private-journey/${src}`,
  alt,
  width: 1600,
  height: 1067,
});

const xianBeijingGalleryAlt = [
  "Coffee overlooking Shichahai and Beijing's historic rooftops",
  "A quiet cafe storefront in Beijing's Guozijian hutong area",
  "A tree-lined Beijing hutong with a relaxed neighborhood atmosphere",
  "A bright guest room inside a Beijing courtyard residence",
  "A landscaped courtyard at a traditional Beijing siheyuan stay",
  "Traditional interior details inside a Beijing courtyard residence",
  "A garden pond and historic architecture in a Beijing courtyard",
  "Xi'an's old city illuminated during a winter festival evening",
  "Colorful festival decorations in central Xi'an at night",
  "Crowds and historic architecture during an illuminated Xi'an evening",
  "An autumn road surrounded by golden foliage near Beijing",
  "A traveler among vivid autumn leaves near the Great Wall",
  "Beijing's modern CBD skyline at blue hour",
  "A spacious premium seat aboard a China high-speed train",
  "The interior of a modern China high-speed train carriage",
  "The Forbidden City seen from Jingshan Park in Beijing",
  "Close portrait detail of a Terracotta Warrior in Xi'an",
  "Rows of Terracotta Warriors inside the main excavation hall",
  "The Terracotta Army excavation pits near Xi'an",
  "Xi'an City Wall and historic towers at sunset",
  "The Giant Wild Goose Pagoda illuminated at night in Xi'an",
  "Traditional Xi'an architecture glowing after dark",
  "The Temple of Heaven framed by historic park architecture in Beijing",
  "Xi'an-style halal barbecue prepared over an open grill",
  "The Hall of Prayer for Good Harvests reflected after rain in Beijing",
] as const;

const xianBeijingAsset = {
  hero: xianBeijingImage(
    "hero.webp",
    "The Great Wall rising above the mountains near Beijing in warm evening light",
  ),
  day01: xianBeijingImage("day-01.webp", "Xi'an City Wall and Yongning Gate glowing after rain"),
  day02: xianBeijingImage(
    "day-02.webp",
    "Terracotta Warriors standing in formation at the Emperor Qinshihuang museum",
  ),
  day03: xianBeijingImage("day-03.webp", "Datang Everbright City illuminated at night in Xi'an"),
  day04: xianBeijingImage(
    "day-04.webp",
    "China high-speed train prepared for the journey from Xi'an to Beijing",
  ),
  day05: xianBeijingImage("day-05.webp", "Aerial view of the Forbidden City and imperial Beijing"),
  day06: xianBeijingImage(
    "day-06.webp",
    "Mutianyu Great Wall crossing autumn mountains near Beijing",
  ),
  gallery: xianBeijingGalleryAlt.map((alt, index) =>
    xianBeijingImage(`gallery-${String(index + 1).padStart(2, "0")}.webp`, alt),
  ),
} satisfies Record<string, MediaAsset | MediaAsset[]>;

const chengduJiuzhaigouImage = (src: string, alt: string, width = 1600, height = 1067) => ({
  src: `/tours/chengdu-pandas-jiuzhaigou/${src}`,
  alt,
  width,
  height,
});

const chengduJiuzhaigouAsset = {
  hero: chengduJiuzhaigouImage(
    "hero.webp",
    "Autumn forest and a turquoise lake in Jiuzhaigou National Park",
  ),
  day01: chengduJiuzhaigouImage(
    "day-01.webp",
    "Traditional covered tea bowl in a Chengdu tea house",
  ),
  day02: chengduJiuzhaigouImage(
    "day-02.webp",
    "Giant panda resting among bamboo at Chengdu Panda Base",
  ),
  day03: chengduJiuzhaigouImage("day-03.webp", "Tea house setting in Chengdu's People's Park"),
  day04: chengduJiuzhaigouImage(
    "day-04.webp",
    "Summer mountain lake and forest scenery near Jiuzhaigou",
  ),
  day05: chengduJiuzhaigouImage(
    "day-05.webp",
    "Clear turquoise lake surrounded by forest in Jiuzhaigou",
  ),
  day06: chengduJiuzhaigouImage(
    "day-06.webp",
    "Autumn colours reflected in a Jiuzhaigou mountain lake",
  ),
  day07: chengduJiuzhaigouImage(
    "day-07.webp",
    "Mountain valley and alpine lake scenery in Jiuzhaigou",
  ),
  gallery: Array.from({ length: 13 }, (_, index) =>
    chengduJiuzhaigouImage(
      `gallery-${String(index + 1).padStart(2, "0")}.webp`,
      "Sichuan and Jiuzhaigou scenery from a private China journey",
      1200,
      800,
    ),
  ),
};

const baseTours: Tour[] = [
  shanghaiSuzhouHangzhou7DayTour,
  guilinYangshuoLongji5DayTour,
  guilinYangshuoLiRiverDayTour,
  privateChengduPandaDayTour,
  privateXianTerracottaDayTour,
  privateShanghaiDayTour,
  guangzhouShenzhenBusiness4DayTour,
  mutianyuPrivateDayTour,
  chinaConsidered12DayTour,
  chinaFamily12DayTour,
  muslimFriendlyChinaDesert13DayTour,
  qingchengMountainWellness10DayTour,
  yunnanTeaHorseRoad10DayTour,
  chengduChongqingZhangjiajieTour,
  beijingXianChengduShanghaiTour,
  firstChina10DayTour,
  {
    slug: "chengdu-pandas-sichuan-table",
    title: "5-Day Chengdu Panda and Sichuan Food Tour",
    subtitle:
      "Early panda encounters, teahouse culture and Sichuan food, with a private guide and one comfortable Chengdu base.",
    duration: "5 Days / 4 Nights",
    route: "Chengdu and Leshan",
    styles: ["Family", "Food", "Culture", "Senior-friendly"],
    hero: {
      eyebrow: "Private Chengdu journey",
      image: chengduAsset.heroPanda,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Plan This Tour", href: "#enquiry" },
    },
    seo: {
      title: "5-Day Chengdu Panda and Sichuan Food Tour",
      description:
        "Spend five days in Chengdu with four hotel nights, private guides, panda viewing and Sichuan food experiences. Choose Leshan or a slower city day before booking.",
      keywords: [
        "Chengdu private tour pandas Sichuan food 5 days",
        "Chengdu cooking class private tour",
        "Chengdu Leshan five day itinerary",
        "Chengdu panda tour hotel package",
      ],

      preserveCopy: true,
    },
    overview: {
      pitch:
        "See Chengdu at its best hours, then enjoy its food and daily life without changing hotels.",
      facts: [
        {
          label: "Hotels",
          value: "Four Chengdu hotel nights; property and room category confirmed",
        },
        {
          label: "Pacing",
          value: "One base; public panda viewing, city walks and one selected regional day",
        },
        {
          label: "Suitable for",
          value:
            "Travelers who want pandas and Sichuan food from one Chengdu base rather than a four-city China itinerary.",
        },
      ],

      practicalities: [
        {
          label: "Best for",
          value:
            "Travelers who want pandas and Sichuan food from one Chengdu base rather than a four-city China itinerary.",
        },
        {
          label: "Nights and gateways",
          value:
            "Four nights in Chengdu, arriving on Day 1 and departing on Day 5. Confirm Tianfu, Shuangliu or the exact rail station.",
        },
        {
          label: "Service days",
          value:
            "Private guide and separate driver on the confirmed sightseeing days, with airport or station arrival and departure transfers.",
        },
        {
          label: "Panda visit",
          value:
            "Public Chengdu Research Base observation, planned around opening and conditions; no guaranteed behavior, cub, holding or keeper access.",
        },
        {
          label: "Food experience",
          value:
            "The proposal specifies the Day 3 cooking session or meal, host, ingredients, dietary arrangements and included food. These are not unlimited restaurant meals.",
        },
        {
          label: "Day 4 choice",
          value:
            "Choose Leshan or a Chengdu-focused day before booking. Different transfers, tickets and activity costs are priced for the selected version.",
        },
        {
          label: "Hotels and breakfast",
          value:
            "Four hotel nights and breakfasts on Days 2–5 are part of the package basis, with properties, rooms and occupancy specified in writing.",
        },
        {
          label: "Walking",
          value:
            "The Panda Base and Wuhou Shrine involve walking and standing. Leshan land steps and any river-view option require a separate access and operating review.",
        },
        {
          label: "Starting-price basis",
          value: getPublishedPriceDisclosure("chengdu-pandas-sichuan-table"),
        },
      ],

      answer:
        "A five-day private Chengdu stay with four hotel nights, arrival and departure transfers, panda viewing and Sichuan food culture. Use one city base for guided visits, tea-house time and the confirmed cooking or meal experience. Choose a Leshan excursion or a slower Chengdu day before booking. Breakfasts and the selected services are listed in the proposal; animal contact and unlimited tastings are not included.",
    },
    highlights: [
      {
        title: "A morning with Chengdu's pandas",
        description:
          "Plan an early public visit around the base's opening arrangements and your group's walking comfort. Afterward, return to Chengdu for a flexible park visit and lunch break; animal activity and crowd levels vary, and tea or meals are included only as listed in your proposal.",
        category: "Family",
        image: chengduAsset.pandaDetail,
      },
      {
        title: "Sichuan, at your level of heat",
        description:
          "A personally vetted guide can introduce markets, tea, and local dishes around allergies, children, and your comfort with spice.",
        category: "Food",
        image: chengduAsset.food,
      },
      {
        title: "Chengdu's softer social rhythm",
        description:
          "Tea, parks, and neighbourhood life give the route a gentler centre before you decide whether Leshan belongs in the final day.",
        category: "Culture",
        image: chengduAsset.tea,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive into Chengdu's easy pace",
        destination: "Chengdu",
        summary:
          "Your private driver meets you at the airport or station and settles you into the city without adding a sightseeing obligation.",
        image: chengduAsset.heroCity,
        hotel: "Chengdu stay: selected comfort tier",
        meals: ["No meals included today"],
        transport: "Private airport or station transfer",
        activities: [
          {
            title: "A soft first evening",
            description:
              "Take a gentle walk through a neighbourhood such as Kuixinglou, or simply rest before your first full day.",
          },
        ],
        guideNote: "Arrival timing and the first evening are shaped around your flight and energy.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        day: 2,
        title: "Pandas before the day begins",
        destination: "Chengdu",
        summary:
          "Visit the Chengdu Research Base early, aiming for cooler conditions and a useful observation window. Panda activity and crowd levels vary; neither is guaranteed. Return to the city for the tea arrangement confirmed in your proposal.",
        image: chengduAsset.pandaMorning,
        hotel: "Chengdu stay: selected comfort tier",
        meals: ["Breakfast; other meals as arranged"],
        transport: "Private vehicle and guide",
        activities: [
          {
            time: "Morning",
            title: "Chengdu Research Base",
            description:
              "Your guide keeps the route shaded and manageable, with time to pause rather than chase every enclosure.",
          },
          {
            time: "Afternoon",
            title: "People's Park tea",
            description:
              "Walk through the park and pause at a teahouse if you wish. A reserved table, hosted tea, drinks or lunch are included only when specifically listed in your proposal; otherwise these are personal purchases.",
          },
        ],
        guideNote:
          "The panda base is the day's main experience; the afternoon remains intentionally light.",
        coordinates: { latitude: 30.7337, longitude: 104.1436 },
      },
      {
        day: 3,
        title: "A city understood through taste",
        destination: "Chengdu",
        summary:
          "Move between Wuhou Shrine, old lanes, and a food experience that can be fragrant and mild or properly fiery.",
        image: chengduAsset.spice,
        hotel: "Chengdu stay: selected comfort tier",
        meals: ["Breakfast; Sichuan meal or cooking experience as arranged"],
        transport: "Private vehicle and guide",
        activities: [
          {
            title: "History and neighbourhood texture",
            description:
              "Visit Wuhou Shrine or nearby lanes with a guide who explains the city without turning the day into a lecture.",
          },
          {
            title: "Market or cooking",
            description:
              "Confirm one food experience before booking: the specified Sichuan meal or cooking session, with its host, menu, duration and any market visit stated in your proposal. A food walk is a different format; tastings and meal coverage must be listed rather than assumed.",
          },
        ],
        guideNote: "A slower afternoon, extra tea, or a rest window can replace any optional stop.",
        coordinates: { latitude: 30.6499, longitude: 104.0557 },
      },
      {
        day: 4,
        title: "Leshan, or more Chengdu",
        destination: "Leshan / Chengdu",
        summary:
          "Choose the Leshan day trip or a Chengdu-based alternative before the proposal is confirmed. Leshan is a longer road day; a city route offers more time for a market, gallery or lunch. They are different service plans, with tickets, meals and price checked in advance.",
        image: chengduAsset.leshan,
        hotel: "Chengdu stay: selected comfort tier",
        meals: ["Breakfast; lunch as arranged"],
        transport:
          "Private vehicle, separate driver and local guide for the selected Leshan or Chengdu route during the confirmed hours",
        activities: [
          {
            title: "Leshan option",
            description:
              "Choose a land visit or a river-view cruise after reviewing steps, standing, boarding, weather and current operation. These offer different views and costs; neither is assumed to be step-free, and a boat cannot be guaranteed to operate.",
          },
          {
            title: "Chengdu alternative",
            description: "Keep the day local with tea, a market, or an unhurried meal.",
          },
        ],
        guideNote: "Leshan is optional and never treated as a test of endurance.",
        coordinates: { latitude: 29.5483, longitude: 103.7677 },
      },
      {
        day: 5,
        title: "A final morning, then onward",
        destination: "Chengdu",
        summary:
          "Have breakfast and keep any remaining time for rest or an independent neighborhood walk before your private departure transfer. The confirmed flight or train sets the pickup time; guided sightseeing or extra vehicle hours require a separate arrangement.",
        image: chengduAsset.rail,
        meals: ["Breakfast"],
        transport: "Private departure transfer",
        activities: [
          {
            title: "A final choice",
            description:
              "Enjoy breakfast or an independent walk only when the confirmed pickup time leaves a comfortable margin. Late checkout, paid tea and additional guiding are separate unless listed in your proposal.",
          },
          {
            title: "Onward support",
            description:
              "We remain reachable as you continue to Xi'an, Chongqing, or your next China chapter.",
          },
        ],
        guideNote:
          "Departure timing follows your confirmed connection, with a practical margin for the group.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
    ],
    accommodations: [
      {
        name: "Private travel comfort | selected around your group",
        destination: "Chengdu",
        description:
          "Four nights at a Chengdu hotel selected around your preferred comfort tier, room arrangement and access to the confirmed routes. The proposal names the property and room category; early check-in, connecting rooms and upgrades require confirmation.",
        roomStyle: "Hotel and room configuration confirmed after inquiry",
        highlights: ["Private transfers", "Quiet rest", "Easy access"],
        image: chengduAsset.carInterior,
      },
    ],
    included: [
      "Four hotel nights in Chengdu, with property, room category and occupancy named in your proposal",
      "Hotel breakfasts on Days 2–5",
      "Private arrival and departure transfers and private vehicle with a separate driver for the listed sightseeing days",
      "Local private guide in the confirmed language on Days 2–4",
      "Listed public admissions and the Sichuan meal or cooking experience specifically identified in the written proposal",
      "The Day 4 Leshan or Chengdu route selected before booking; the quote specifies tickets, service hours and any difference in price",
      "Pre-trip planning and local travel support; unlisted meals, tastings and extra activities are separate",
    ],
    excluded: [
      "International flights",
      "China visa fees or documentation costs when applicable",
      "Hotel, guide, transport and meal upgrades not listed in your quotation",
      "Personal expenses and travel insurance",
    ],
    optionalExperiences: [
      {
        title: "A gentler walking rhythm",
        description:
          "Adjust panda-base routes, rest windows, vehicle support, and daily starts around children or older travelers.",
        badges: ["Senior-aware", "Family"],
        image: chengduAsset.car,
      },
      {
        title: "Food and tea texture",
        description:
          "Build in a market, tea house, or cooking moment around appetite and spice tolerance.",
        badges: ["Food", "Local life"],
        image: chengduAsset.teaDetail,
      },
      {
        title: "A human point of contact",
        description:
          "Your personally vetted guide remains part of the experience, with direct support when the plan needs to change.",
        badges: ["Flexible", "Private"],
        image: chengduAsset.guide,
      },
    ],
    transportation: {
      title: "Private transport keeps the route light.",
      description:
        "A private car and driver handle airport, city, panda-base, and optional Leshan transfers, with the day able to slow down when the group needs it.",
      items: [
        {
          label: "Airport",
          value: "Private arrival and departure support",
          helper: "Included when listed in your written quotation.",
        },
        {
          label: "City transfer",
          value: "Private car and driver",
          helper: "No forced group joins or coach timetable.",
        },
        {
          label: "Onward",
          value: "Rail or flight support",
          helper: "Station and luggage flow can be arranged.",
        },
      ],
    },
    routeMap: {
      title: "A compact Chengdu chapter.",
      description:
        "Four nights in Chengdu create room for pandas, food, tea, and a considered Leshan option without overfilling every day.",
      stops: [
        {
          name: "Chengdu",
          days: "Days 1-5",
          description: "Pandas, tea houses, Wuhou Shrine, Sichuan food, and flexible city time.",
          coordinates: { latitude: 30.5728, longitude: 104.0668 },
        },
        {
          name: "Leshan",
          days: "Optional Day 4",
          description:
            "The Giant Buddha, reached by private car when the group wants the wider day.",
          coordinates: { latitude: 29.5483, longitude: 103.7677 },
        },
      ],
    },
    gallery: [
      chengduAsset.routeLeshan,
      chengduAsset.cityGalleryOne,
      chengduAsset.cityGalleryTwo,
      chengduAsset.cityGalleryThree,
      chengduAsset.teaGalleryOne,
      chengduAsset.teaGalleryTwo,
      chengduAsset.teaGalleryThree,
    ],
    faqs: [
      {
        question: "What does this private tour cost, and what is the starting-price basis?",
        answer: getPublishedPriceDisclosure("chengdu-pandas-sichuan-table"),
      },
      {
        question: "Are four hotel nights included in the Chengdu package?",
        answer:
          "Yes, in the five-day package basis. The proposal names the Chengdu property, room category, occupancy and four nights, plus hotel breakfasts on Days 2–5. A day-service-only arrangement is a different quote. Hotel upgrades, early check-in and extra beds are not automatically included.",
      },
      {
        question: "What is the difference between this and the one-day panda tour?",
        answer:
          "This journey coordinates a four-night stay, airport or station transfers and several days of Chengdu life and food. The one-day tour covers a hotel-to-hotel Panda Base and People’s Park day without accommodation. Choose the longer stay for regional depth and a confirmed cooking or food experience, not extra panda-access privileges.",
      },
      {
        question: "Do we visit Chengdu Panda Base or Dujiangyan?",
        answer:
          "The planned city visit uses the Chengdu Research Base of Giant Panda Breeding, with the facility confirmed in your proposal. Dujiangyan, Wolong and Bifengxia are different destinations and are not automatically included. A different base changes the road plan, ticketing and cost.",
      },
      {
        question: "Does an early visit guarantee active pandas?",
        answer:
          "No. Earlier public visiting hours may be a useful planning choice, but activity depends on the animals, season and husbandry. We do not promise cubs, a particular enclosure or any handling. The guide adapts the public walking route and breaks to conditions.",
      },
      {
        question: "Is Leshan included, or is Day 4 a free choice?",
        answer:
          "Day 4 is selected before booking. The priced proposal states whether it includes a private Leshan excursion or a Chengdu day, with the associated tickets and service hours. The options are not assumed to have the same cost.",
      },
      {
        question: "Can we see the Leshan Giant Buddha by boat instead of climbing?",
        answer:
          "Ask for the actual route to be checked. A land visit and river-view cruise are different products with different views, queues and operating conditions. Water, weather and operator decisions can affect sailing. No boat departure, step-free access or replacement arrangement is automatic.",
      },
      {
        question: "Can the Sichuan cooking experience be mild or vegetarian?",
        answer:
          "Tell us before booking about spice preferences, vegetarian requirements and allergies. The host, menu and kitchen arrangements need confirmation; removing chili does not by itself remove meat stock, peanuts or cross-contact. The written inclusion should state the meal or class and whether any market visit is part of it.",
      },
      {
        question: "Are tea, tastings and every lunch included?",
        answer:
          "No. Hotel breakfasts and expressly listed meals or cooking services are included. A tea-house visit or food-oriented walk does not mean unlimited drinks or tastings. The proposal identifies what is paid in advance and what you buy independently, so you can choose without compulsory sales stops.",
      },
      {
        question: "Can older travelers or children take this Chengdu tour?",
        answer:
          "Often, with individual planning. Discuss Panda Base distances, heat, stairs, child ages and any Leshan route before confirmation. A single hotel base reduces packing but does not make the sites step-free. Personal care, specialist equipment and babysitting are separate arrangements.",
      },
      {
        question: "Which airport should we use for arrival and departure?",
        answer:
          "State the actual flight: Chengdu Tianfu (TFU) and Shuangliu (CTU) require different transfers. Rail arrivals need the full station name. The itinerary does not treat an arrival time as sightseeing time, and the final transfer is set around check-in and traffic rather than a fixed morning tour.",
      },
    ],
    related: {
      useListedTours: true,
      tours: [
        {
          title: "Private Chengdu Panda Tour with Hotel Pickup",
          description:
            "Choose a single panda-and-park day if your Chengdu hotel and wider plans are already arranged.",
          tags: ["Family", "Nature", "Culture"],
          image: {
            src: "/tours/private-chengdu-panda-day-tour/01-chengdu-panda-base-morning.webp",
            alt: "A giant panda resting among trees at Chengdu Research Base of Giant Panda Breeding",
            width: 1600,
            height: 2133,
          },
          route: "Chengdu hotel · Chengdu Panda Base · People's Park · Chengdu hotel",
          duration: "1 day · private · about 8 hours",
          href: "/tours/private-chengdu-panda-day-tour-early-morning",
        },
        {
          title: "7-Day Chengdu and Jiuzhaigou Private Tour",
          description:
            "Add three mountain-area nights and a full Jiuzhaigou park day instead of staying entirely in Chengdu.",
          tags: ["Nature", "Family", "Food"],
          image: {
            src: "/tours/chengdu-pandas-jiuzhaigou/hero.webp",
            alt: "Autumn forest and a turquoise lake in Jiuzhaigou National Park",
            width: 1600,
            height: 1067,
          },
          route: "Chengdu · Jiuzhaigou",
          duration: "7 days / 6 nights",
          href: "/tours/chengdu-pandas-jiuzhaigou-private-7-day-tour",
        },
      ],

      destinations: [
        {
          name: "Chengdu",
          description: "Pandas, tea houses, Sichuan food, and a slower sense of daily life.",
          image: {
            src: "/home/chengdu-panda.webp",
            alt: "A giant panda in Chengdu",
            width: 1920,
            height: 1200,
            objectPosition: "54% 42%",
          },
          href: "/destinations/chengdu",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=Customize%20Chengdu%2C%20Pandas%20%26%20Sichuan%20Table",
      whatsappHref:
        "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20learn%20more%20about%20the%205-day%20Chengdu%20panda%20and%20Sichuan%20food%20private%20tour.",
      scheduleCallHref: "tel:+8618027438191",
      defaultMessage:
        "I am interested in Chengdu, Pandas & Sichuan Table. Please suggest the best pacing for my travelers.",
    },

    planningResources: [
      {
        label: "Chengdu Panda Base: official visitor notices",
        href: "https://www.panda.org.cn/en/service/notice",
        officialPublisher: "Chengdu Research Base of Giant Panda Breeding",
        description:
          "Check public visitor notices for the Chengdu Research Base. This is not evidence of access at another panda center or permission to touch animals.",
      },
      {
        label: "China Railway 12306: passenger information",
        href: "https://www.12306.cn/en/faq.html",
        officialPublisher: "China Railway 12306",
        description:
          "Check accepted identification, ticketing, boarding and baggage guidance. The train, class, seat and transfer arrangements are confirmed for your dates.",
      },
      {
        label: "Plan Chengdu and Leshan",
        href: "/destinations/chengdu",
        description:
          "Compare a city stay with regional excursions and the practical choices for your dates.",
      },
    ],

    faqLimit: 13,

    updatedAt: "2026-11-12",

    inquiryChecklist: [
      "Dates, travelers, rooms and hotel preference",
      "Choose Leshan or a Chengdu-based Day 4",
      "Cooking class or hosted meal preference",
      "Allergies, spice tolerance and dietary needs",
      "Walking comfort and guide language",
    ],

    comparison: {
      title: "A Chengdu stay or a single panda day?",
      intro:
        "Food and tea need their own time. The five-day version adds a hotel base and deeper city experiences.",
      columns: ["Decision", "This five-day package", "Panda day service"],
      rows: [
        ["Accommodation", "Four Chengdu hotel nights", "No accommodation"],
        ["Food program", "The meal or class named in the proposal", "Lunch and tea cost extra"],
        ["Day 4", "Leshan or city route selected before booking", "No additional touring day"],
      ],
      href: "/tours/private-chengdu-panda-day-tour-early-morning",
      linkLabel: "Compare the alternative itinerary",
    },
  },
  {
    slug: "chengdu-pandas-jiuzhaigou-private-7-day-tour",
    title: "7-Day Chengdu and Jiuzhaigou Private Tour",
    subtitle:
      "Giant pandas, Sichuan food and Jiuzhaigou's alpine lakes, connected with private support and a comfortable daily rhythm.",
    duration: "7 Days / 6 Nights",
    route: "Chengdu, Jiuzhaigou",
    styles: ["Nature", "Family", "Food", "Photography", "Senior-friendly"],
    hero: {
      eyebrow: "Private Sichuan journey",
      image: chengduJiuzhaigouAsset.hero,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Request a Tailored Proposal", href: "#enquiry" },
    },
    seo: {
      title: "7-Day Chengdu and Jiuzhaigou Private Tour",
      description:
        "Combine Chengdu pandas and Sichuan food with Jiuzhaigou in seven days. See six hotel nights, mountain transfers, park transport and the optional Huanglong day.",
      keywords: [
        "Chengdu panda Jiuzhaigou private tour 7 days",
        "Chengdu to Jiuzhaigou train private transfer",
        "Jiuzhaigou Huanglong altitude tour",
        "Jiuzhaigou tour end airport or Chengdu",
      ],

      preserveCopy: true,
    },
    overview: {
      pitch:
        "See pandas at a better hour, understand Chengdu through food and tea, then reach Jiuzhaigou with the regional logistics handled around your group.",
      facts: [
        { label: "Hotels", value: "3 nights Chengdu and 3 near Jiuzhaigou; properties confirmed" },
        {
          label: "Pacing",
          value:
            "City sightseeing and mountain transfers; altitude and park walking require review",
        },
        {
          label: "Suitable for",
          value:
            "Nature-focused visitors who want pandas and alpine lakes, with time for mountain transfers and individual altitude review.",
        },
      ],

      practicalities: [
        {
          label: "Best for",
          value:
            "Nature-focused visitors who want pandas and alpine lakes, with time for mountain transfers and individual altitude review.",
        },
        {
          label: "Nights and endpoint",
          value:
            "3 Chengdu nights and 3 Jiuzhaigou-area nights. Day 7 departs from the confirmed mountain-area gateway; it does not automatically return to Chengdu.",
        },
        {
          label: "Mountain connection",
          value:
            "The Day 4 plan combines a booked rail or alternative domestic connection with a private road transfer. A station is not the park gate; the full transfer is confirmed.",
        },
        {
          label: "Private service",
          value:
            "Local private guides and road transfers on the specified touring and travel days. Park buses and booked rail or flights remain shared public services.",
        },
        {
          label: "Pandas and food",
          value:
            "Public Panda Base visit plus the agreed Chengdu food experience; no direct panda contact or guaranteed animal behavior.",
        },
        {
          label: "Park day",
          value:
            "Day 5 focuses on Jiuzhaigou using required park transport and selected walking sections, subject to reservation and operation.",
        },
        {
          label: "Day 6 choice",
          value:
            "Select a gentler local day or separately confirmed Huanglong. Ticket, guide, road time and any price difference are stated before booking.",
        },
        {
          label: "Altitude and walking",
          value:
            "Jiuzhaigou, the mountain gateway and Huanglong have different elevations. Shuttle access does not remove all walking, stairs, cold or altitude exposure.",
        },
        {
          label: "Meals",
          value:
            "Hotel breakfasts and the specified food experience are included as confirmed; other meals, drinks and personal purchases are separate.",
        },
        {
          label: "Starting-price basis",
          value: getPublishedPriceDisclosure("chengdu-pandas-jiuzhaigou-private-7-day-tour"),
        },
      ],

      answer:
        "A seven-day private journey combining Chengdu pandas and Sichuan culture with Jiuzhaigou’s lakes and forests. Spend three nights in Chengdu and three near Jiuzhaigou, with the listed rail, road transfers, guides and park services confirmed together. Huanglong is an optional higher-altitude Day 6 choice. The published route ends in the Jiuzhaigou area; returning to Chengdu needs a separately arranged connection or extra day.",
    },
    planningSupport: {
      eyebrow: "Before your proposal",
      title: "Mountain logistics deserve a clear plan.",
      description:
        "The right connection, hotel location and walking plan depend on your dates, party and onward travel.",
      items: [
        {
          label: "Journey end",
          value: "Jiuzhaigou area",
          helper: "A return to Chengdu can be added as an eighth day.",
        },
        {
          label: "Altitude",
          value: "Discuss before booking",
          helper: "Huanglong is optional and higher than the main Jiuzhaigou visit.",
        },
        {
          label: "Dietary needs",
          value: "Checked in advance",
          helper: "Share halal, vegetarian and allergy requirements before quotation.",
        },
        {
          label: "Season",
          value: "Conditions vary",
          helper: "Weather, access and transport schedules shape the final plan.",
        },
      ],
      note: "Your written proposal will confirm the operating transport, hotels, tickets and included services for your dates.",
    },
    highlights: [
      {
        title: "Pandas at a better hour",
        description:
          "An early private transfer supports a calmer visit and a better chance of seeing active pandas before the day becomes busier.",
        category: "Family",
        image: chengduJiuzhaigouAsset.day02,
      },
      {
        title: "Jiuzhaigou without the planning burden",
        description:
          "Regional transport, private road transfers, park arrangements and hotel stays are connected around your dates rather than left as separate bookings.",
        category: "Nature",
        image: chengduJiuzhaigouAsset.day05,
      },
      {
        title: "Two contrasting sides of Sichuan",
        description:
          "Chengdu's tea houses and kitchens lead naturally into forested valleys, clear lakes and changing mountain light.",
        category: "Photography",
        image: chengduJiuzhaigouAsset.day03,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Chengdu",
        destination: "Chengdu",
        summary:
          "Meet your local team on arrival and transfer privately to your hotel. The first evening stays light so you can settle in and begin without pressure.",
        image: chengduJiuzhaigouAsset.day01,
        hotel: "Chengdu stay: hotel and room category selected after inquiry",
        meals: ["No meals included today"],
        transport: "Private airport or station transfer",
        activities: [
          {
            title: "Private arrival support",
            description:
              "Your driver meets the confirmed flight or train and takes you directly to the selected hotel.",
          },
          {
            title: "A deliberately quiet evening",
            description:
              "Rest after the journey or take a short neighbourhood walk if your arrival time and energy allow.",
          },
        ],
        guideNote:
          "Arrival support and transfer timing are arranged around your confirmed details.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        day: 2,
        title: "Pandas and a quiet Chengdu afternoon",
        destination: "Chengdu",
        summary:
          "Begin with a carefully timed visit to Chengdu Panda Base, then return to the city for tea, a relaxed neighbourhood walk or time at leisure.",
        image: chengduJiuzhaigouAsset.day02,
        hotel: "Chengdu stay: hotel and room category selected after inquiry",
        meals: ["Breakfast; other meals as confirmed"],
        transport: "Private vehicle and multilingual guide",
        activities: [
          {
            time: "Morning",
            title: "Chengdu Research Base",
            description:
              "Follow a manageable route through the panda areas with time to pause rather than rushing between every enclosure.",
          },
          {
            time: "Afternoon",
            title: "Tea house or neighbourhood time",
            description:
              "Choose a traditional tea house, a short local walk or a restful afternoon according to the group.",
          },
        ],
        guideNote:
          "Earlier starts generally support a more comfortable panda visit; the afternoon remains flexible.",
        coordinates: { latitude: 30.7337, longitude: 104.1436 },
      },
      {
        day: 3,
        title: "Sichuan flavours and local life",
        destination: "Chengdu",
        summary:
          "Explore Chengdu through its food culture and everyday rhythm, with a private guide adapting the day around spice tolerance, dietary needs and energy.",
        image: chengduJiuzhaigouAsset.day03,
        hotel: "Chengdu stay: hotel and room category selected after inquiry",
        meals: ["Breakfast; food experience as confirmed"],
        transport: "Private vehicle and multilingual guide",
        activities: [
          {
            title: "Market and neighbourhood context",
            description:
              "See how local ingredients, tea and daily routines fit into Chengdu life with explanation from your guide.",
          },
          {
            title: "A Sichuan table shaped around you",
            description:
              "Choose a food-oriented walk, meal or cooking session before booking so the proposal names its format, host and any food charge. Private guiding does not automatically include a paid lunch, tastings or a cooking class; unlisted food and drinks are separate.",
          },
        ],
        guideNote:
          "Halal, vegetarian, allergy and other dietary requirements must be shared before confirmation so suitable options can be checked.",
        coordinates: { latitude: 30.657, longitude: 104.066 },
      },
      {
        day: 4,
        title: "From Chengdu into the mountains",
        destination: "Chengdu to Jiuzhaigou",
        summary:
          "Travel towards Jiuzhaigou using the most suitable rail and private road connection operating for your dates, as the landscape changes from urban Sichuan to mountain valleys.",
        image: chengduJiuzhaigouAsset.day04,
        hotel: "Jiuzhaigou area stay: selected around park access and comfort",
        meals: ["Breakfast; other meals as confirmed"],
        transport: "Rail and private road transfer, confirmed for your travel date",
        activities: [
          {
            title: "Managed regional connection",
            description:
              "Tickets, station assistance and the onward private transfer are coordinated as one journey rather than separate bookings.",
          },
          {
            title: "Settle into the Jiuzhaigou area",
            description:
              "Keep the evening free for rest, an early meal and adjustment before the national park day.",
          },
        ],
        guideNote:
          "The exact connection depends on seasonal schedules and operating conditions and will be stated in your written proposal.",
        coordinates: { latitude: 33.2609, longitude: 103.9186 },
      },
      {
        day: 5,
        title: "Jiuzhaigou's lakes and forested valleys",
        destination: "Jiuzhaigou",
        summary:
          "Spend a full day among Jiuzhaigou's clear lakes, waterfalls and forested valleys, with the route adjusted around weather, walking comfort and the places that matter most to you.",
        image: chengduJiuzhaigouAsset.day05,
        hotel: "Jiuzhaigou area stay: selected around park access and comfort",
        meals: ["Breakfast; other meals as confirmed"],
        transport: "Private hotel transfers and national park transport",
        activities: [
          {
            title: "A considered national park route",
            description:
              "Use the park transport and selected walking sections to experience the valleys without treating every stop as compulsory.",
          },
          {
            title: "Time for changing light",
            description:
              "The day leaves room to pause at the lakes and viewpoints that suit the season and visibility.",
          },
        ],
        guideNote:
          "Park transport reduces distance, but paths, steps, queues and changing weather cannot be removed completely.",
        coordinates: { latitude: 33.252, longitude: 103.918 },
      },
      {
        day: 6,
        title: "A second mountain day, chosen carefully",
        destination: "Jiuzhaigou / Huanglong",
        summary:
          "Choose a gentler second day around Jiuzhaigou or consider Huanglong when the season, weather, access, health and walking ability make it appropriate.",
        image: chengduJiuzhaigouAsset.day06,
        hotel: "Jiuzhaigou area stay: selected around park access and comfort",
        meals: ["Breakfast; other meals as confirmed"],
        transport: "Private vehicle according to the confirmed option",
        activities: [
          {
            title: "Gentler Jiuzhaigou option",
            description:
              "Use the day for a slower scenic experience, cultural context or rest rather than repeating a demanding park schedule.",
          },
          {
            title: "Huanglong option",
            description:
              "Huanglong is a separately quoted option with different road travel, tickets and altitude considerations. Confirm suitability and availability before replacing the gentler Day 6 plan; its transport and admission are not included merely because it appears here.",
          },
        ],
        guideNote:
          "Huanglong is a separately quoted optional route, reaches higher altitude and is never compulsory. The base proposal must name the gentler Day 6 plan and its actual service; adding Huanglong changes tickets, transfers and potentially timing.",
        coordinates: { latitude: 32.754, longitude: 103.83 },
      },
      {
        day: 7,
        title: "Depart from the Jiuzhaigou area",
        destination: "Jiuzhaigou",
        summary:
          "Transfer privately to Jiuzhai Huanglong Airport or your confirmed onward connection. An additional return to Chengdu can be arranged as an eighth day.",
        image: chengduJiuzhaigouAsset.day07,
        meals: ["Breakfast"],
        transport: "Private departure transfer",
        activities: [
          {
            title: "Onward travel support",
            description:
              "Departure timing is planned around the confirmed flight or onward arrangement with a practical margin.",
          },
          {
            title: "Optional Chengdu return",
            description:
              "Add an extra night and return connection when your international flight or wider China route requires it.",
          },
        ],
        guideNote:
          "This seven-day version ends in the Jiuzhaigou area; a Chengdu return is quoted separately.",
        coordinates: { latitude: 32.8533, longitude: 103.6822 },
      },
    ],
    accommodations: [
      {
        name: "Chengdu stay | selected around location and rest",
        destination: "Chengdu",
        description:
          "Your hotel is selected around room configuration, breakfast, reliable access and an easy return after private touring.",
        roomStyle: "Hotel tier and room category confirmed after inquiry",
        highlights: ["Well-planned location", "Breakfast", "Private transfers"],
        image: chengduJiuzhaigouAsset.gallery[0],
      },
      {
        name: "Jiuzhaigou stay | selected around park access",
        destination: "Jiuzhaigou",
        description:
          "The mountain stay is chosen around park access, heating or climate comfort, room needs and realistic transfer times.",
        roomStyle: "Hotel tier and room category confirmed after inquiry",
        highlights: ["Park access", "Mountain comfort", "Local support"],
        image: chengduJiuzhaigouAsset.gallery[1],
      },
    ],
    included: [
      "Private itinerary planning around your dates and travelers",
      "Six hotel nights: three in Chengdu and three in the Jiuzhaigou area, plus hotel breakfasts on Days 2–7",
      "Private airport, station and road transfers listed in the final proposal",
      "Local private guide in the confirmed language on the listed guided days; transfer-day assistance specified separately",
      "The confirmed Chengdu-to-mountain rail and private road connection; an alternative flight arrangement is separately confirmed and priced",
      "National park transport and attraction tickets listed in the final proposal",
      "Local support before arrival and while traveling",
      "No forced shopping visits",
    ],
    excluded: [
      "International flights",
      "China visa costs or documentation services unless stated",
      "Meals, drinks and optional experiences not listed in the final proposal",
      "Travel insurance, medical costs and personal expenses",
      "Any service not confirmed in the final written proposal",
    ],
    optionalExperiences: [
      {
        title: "A gentler mountain rhythm",
        description:
          "Adjust park sections, starts, rest windows and the second scenic day around children, older travelers or walking comfort.",
        badges: ["Flexible pace", "Private"],
        image: chengduJiuzhaigouAsset.gallery[2],
      },
      {
        title: "Dietary planning before arrival",
        description:
          "Discuss halal, vegetarian, allergy and spice requirements so suitable restaurants and menus can be checked before confirmation.",
        badges: ["Dietary care", "Food"],
        image: chengduJiuzhaigouAsset.gallery[3],
      },
      {
        title: "An eighth day back to Chengdu",
        description:
          "Add a return connection and Chengdu night when it creates a safer or more comfortable onward departure.",
        badges: ["Onward travel", "Flexible"],
        image: chengduJiuzhaigouAsset.gallery[4],
      },
    ],
    transportation: {
      title: "The transport plan is part of the product.",
      description:
        "Chengdu and Jiuzhaigou are connected using the most suitable operating rail, road or flight combination for your dates, with private transfers at each end.",
      items: [
        {
          label: "Chengdu",
          value: "Private city transfers",
          helper: "Airport, panda base and city touring as confirmed.",
        },
        {
          label: "Regional connection",
          value: "Schedule checked by date",
          helper: "The exact rail, road or flight arrangement is confirmed in writing.",
        },
        {
          label: "Jiuzhaigou",
          value: "Private local transfers",
          helper: "Hotel, park and departure logistics according to the final plan.",
        },
      ],
    },
    routeMap: {
      title: "From Sichuan's capital to its alpine valleys.",
      description:
        "Three Chengdu nights create room for pandas and local life before three nights in the Jiuzhaigou area protect the mountain experience from a rushed turnaround.",
      stops: [
        {
          name: "Chengdu",
          days: "Days 1-4",
          description: "Arrival, pandas, tea, Sichuan food and the managed regional connection.",
          coordinates: { latitude: 30.5728, longitude: 104.0668 },
        },
        {
          name: "Jiuzhaigou",
          days: "Days 4-7",
          description:
            "Alpine lakes, forested valleys, a flexible second mountain day and onward departure.",
          coordinates: { latitude: 33.2609, longitude: 103.9186 },
        },
      ],
    },
    gallery: [
      chengduJiuzhaigouAsset.hero,
      chengduJiuzhaigouAsset.day01,
      chengduJiuzhaigouAsset.day02,
      chengduJiuzhaigouAsset.day03,
      chengduJiuzhaigouAsset.day04,
      chengduJiuzhaigouAsset.day05,
      chengduJiuzhaigouAsset.day06,
      chengduJiuzhaigouAsset.day07,
      ...chengduJiuzhaigouAsset.gallery,
    ],
    faqs: [
      {
        question: "What does this private tour cost, and what is the starting-price basis?",
        answer: getPublishedPriceDisclosure("chengdu-pandas-jiuzhaigou-private-7-day-tour"),
      },
      {
        question: "Does the seven-day tour return to Chengdu?",
        answer:
          "No, not by default. It ends with the confirmed departure transfer from the Jiuzhaigou area on Day 7. An onward train or flight must be checked for your actual departure. A more relaxed return to Chengdu can be designed as an eighth day, with the extra transfer, ticket and night priced separately.",
      },
      {
        question: "How do we travel from Chengdu to Jiuzhaigou?",
        answer:
          "The planned connection combines rail and private road travel where practical for the dates. Your proposal names the service, station, seat class, arrival pickup and remaining road transfer. Do not treat a mountain-area station as the park entrance. If schedules require another route, its timing and cost must be agreed.",
      },
      {
        question: "Is Huanglong included on Day 6?",
        answer:
          "It is a choice requiring confirmation, not a compulsory second park. The proposal specifies whether Day 6 is Huanglong or a gentler local plan, what tickets and transport are included and any cost difference. Health, altitude, weather and operating access are reviewed before accepting Huanglong.",
      },
      {
        question: "Is Jiuzhaigou suitable for someone worried about altitude?",
        answer:
          "It requires an individual review. The valley, gateway and nearby Huanglong have different elevations, and a lower route does not remove all exposure. Discuss medical concerns with your clinician; tell us about walking and altitude limitations before booking. A guide and private car are not medical supervision.",
      },
      {
        question: "Are park buses and cableways private?",
        answer:
          "No. Required scenic-area transport is normally shared under the park’s rules. Private vehicles connect hotels and authorized access points; they do not automatically drive through protected visitor routes. Included lifts, buses and admissions are identified in the proposal, with queues and operating conditions explained.",
      },
      {
        question: "Can we avoid long walks in Jiuzhaigou?",
        answer:
          "The guide can select fewer stops and shorter walking sections, using operating park transport where appropriate. Boarding, paths, steps and waiting still remain. Share comfortable walking and standing limits and any equipment needs. A shuttle-based plan is not a guarantee of step-free access throughout the day.",
      },
      {
        question: "What panda access is included in Chengdu?",
        answer:
          "A standard public viewing visit at the confirmed facility with private local guiding and transfers. No holding, feeding, keeper work, volunteering or guaranteed cub sighting is included. Timing follows public entry rules; the route and breaks can change with weather, animal welfare and crowds.",
      },
      {
        question: "What happens if weather or park controls change the visit?",
        answer:
          "The team checks known material changes and explains workable alternatives, service differences and applicable booking terms. A closed valley, suspended lift or disrupted train cannot be treated as if the same product still operates unchanged. No automatic full refund or identical replacement is promised outside the agreed terms.",
      },
      {
        question: "Which hotel location is used near Jiuzhaigou?",
        answer:
          "The proposal names the actual property, room and access plan, balancing comfort with the drive to the park. A hotel marketed with the regional name is not necessarily at the entrance. The final plan should state morning pickup and transfer arrangements rather than relying on the hotel’s destination label.",
      },
      {
        question: "When should we visit for autumn colors or quieter conditions?",
        answer:
          "Autumn foliage is a seasonal possibility, not a guarantee for a particular booking. Weather, holidays and capacity can affect demand and routes. Choose dates after comparing your scenery priorities, cold tolerance and availability; booking a private guide does not remove public park crowds or reservation requirements.",
      },
    ],
    related: {
      useListedTours: true,
      tours: [
        {
          title: "5-Day Chengdu Panda and Sichuan Food Tour",
          description:
            "Stay at one Chengdu hotel and choose a food-focused city program when mountain transfers and altitude do not suit.",
          tags: ["Family", "Food", "Culture"],
          image: {
            src: "/tours/chengdu-pandas/chengdu-hero-panda.webp",
            alt: "A giant panda resting among bamboo near Chengdu",
            width: 6016,
            height: 4016,
          },
          route: "Chengdu and Leshan",
          duration: "5 days / 4 nights",
          href: "/tours/chengdu-pandas-sichuan-table",
        },
        {
          title: "8-Day Shanghai and Zhangjiajie Private Tour",
          description:
            "Choose sandstone pillars and Tianmen Mountain via Shanghai instead of Jiuzhaigou’s highland lakes.",
          tags: ["Nature", "Luxury", "Family"],
          image: {
            src: "/tours/shanghai-zhangjiajie-floating-peaks/zhangjiajie-sunny-peaks.webp",
            alt: "Sunlit sandstone peaks and forested valleys in Zhangjiajie",
            width: 1600,
            height: 800,
          },
          route: "Shanghai · Wulingyuan · Zhangjiajie",
          duration: "8 days / 7 nights",
          href: "/tours/shanghai-zhangjiajie-floating-peaks",
        },
      ],

      destinations: [
        {
          name: "Chengdu",
          description: "Pandas, tea houses, Sichuan food and an easy local rhythm.",
          image: {
            src: "/tours/chengdu-pandas-jiuzhaigou/day-02.webp",
            alt: "Giant panda resting among bamboo at Chengdu Panda Base",
            width: 1600,
            height: 1067,
          },
          href: "/destinations/chengdu",
        },
        {
          name: "Jiuzhaigou",
          description:
            "Clear alpine lakes, waterfalls and forested valleys shaped by season and light.",
          image: {
            src: "/tours/chengdu-pandas-jiuzhaigou/day-05.webp",
            alt: "Clear turquoise lake surrounded by forest in Jiuzhaigou",
            width: 1600,
            height: 1067,
          },
          href: "/destinations/jiuzhaigou",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=7-Day%20Chengdu%20Panda%20%26%20Jiuzhaigou%20Private%20Journey",
      whatsappHref:
        "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20tailored%20proposal%20for%20the%207-day%20Chengdu%20Panda%20and%20Jiuzhaigou%20private%20journey.",
      scheduleCallHref: "tel:+8618027438191",
      defaultMessage:
        "I am interested in the 7-Day Chengdu Panda & Jiuzhaigou Private Journey. Please recommend the right hotels, transport plan and daily pace for my group.",
    },

    planningResources: [
      {
        label: "Jiuzhaigou: official scenic-area information",
        href: "https://www.jiuzhai.com/",
        officialPublisher: "Jiuzhaigou scenic area",
        description:
          "Check dated visitor notices, admission and park operation. A park notice does not confirm your rail connection, hotel or private transfer.",
      },
      {
        label: "Chengdu Panda Base: official visitor notices",
        href: "https://www.panda.org.cn/en/service/notice",
        officialPublisher: "Chengdu Research Base of Giant Panda Breeding",
        description:
          "Check public visitor notices for the Chengdu Research Base. This is not evidence of access at another panda center or permission to touch animals.",
      },
      {
        label: "China Railway 12306: passenger information",
        href: "https://www.12306.cn/en/faq.html",
        officialPublisher: "China Railway 12306",
        description:
          "Check accepted identification, ticketing, boarding and baggage guidance. The train, class, seat and transfer arrangements are confirmed for your dates.",
      },
      {
        label: "Chengdu to Jiuzhaigou: the complete connection",
        href: "/journal/chengdu-to-jiuzhaigou-transport",
        description: "Review the station-to-park road transfer as part of the journey.",
      },
      {
        label: "Jiuzhaigou altitude and walking",
        href: "/journal/jiuzhaigou-altitude-walking-accessibility",
        description: "Compare elevation, park transport and unavoidable walking before booking.",
      },
    ],

    faqLimit: 13,

    updatedAt: "2026-11-12",

    inquiryChecklist: [
      "Dates and Chengdu arrival details",
      "Choose local departure or an extra return-to-Chengdu day",
      "Travelers, rooms and luggage",
      "Altitude and walking considerations",
      "Whether to price optional Huanglong",
    ],

    comparison: {
      title: "Jiuzhaigou lakes or Zhangjiajie sandstone peaks?",
      intro:
        "Choose the landscape and gateway pattern you want; these are different parks in different regions.",
      columns: ["Decision", "This seven-day journey", "Shanghai–Zhangjiajie eight-day journey"],
      rows: [
        [
          "Landscape",
          "Jiuzhaigou lakes and forest valleys",
          "Wulingyuan pillars and Tianmen Mountain",
        ],
        [
          "Gateways",
          "Chengdu arrival; local mountain-area departure",
          "Shanghai arrival and return",
        ],
        [
          "Planning issue",
          "Altitude and rail-to-road mountain connection",
          "Domestic flights, stairs, heights and weather",
        ],
      ],
      href: "/tours/shanghai-zhangjiajie-floating-peaks",
      linkLabel: "Compare the alternative itinerary",
    },
  },
  {
    slug: "beijing-great-wall-private-5-day-tour",
    title: "5-Day Beijing and Great Wall Private Tour",
    subtitle:
      "One well-located hotel, private support and five considered days across imperial Beijing and the Great Wall.",
    duration: "5 Days / 4 Nights",
    route: "Beijing",
    styles: ["Culture", "Luxury", "Senior-friendly", "Muslim-friendly"],
    hero: {
      eyebrow: "Private Beijing journey",
      image: beijingUnhurriedAsset.hero,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Plan My Beijing Journey", href: "#enquiry" },
    },
    seo: {
      title: "5-Day Beijing and Great Wall Private Tour",
      description:
        "Explore Beijing in five days with four hotel nights, private guides and drivers, the Forbidden City, hutongs and a dedicated Mutianyu Great Wall day.",
      keywords: [
        "Beijing Great Wall private tour 5 days",
        "Beijing tour hotel airport transfers included",
        "Forbidden City Mutianyu private itinerary",
        "Beijing private guide separate driver",
      ],

      preserveCopy: true,
    },
    overview: {
      pitch:
        "Beijing's essential landmarks, one hotel base and a daily plan adjusted to your interests and walking comfort.",
      facts: [
        { label: "Hotels", value: "Four nights in one confirmed Beijing hotel" },
        {
          label: "Pacing",
          value: "Three sightseeing days; walking and standing at major heritage sites",
        },
        {
          label: "Suitable for",
          value:
            "Visitors who want Beijing’s imperial sites and Great Wall in one city stay, without arranging a multi-city China tour.",
        },
      ],

      practicalities: [
        {
          label: "Best for",
          value:
            "Visitors who want Beijing’s imperial sites and Great Wall in one city stay, without arranging a multi-city China tour.",
        },
        {
          label: "Nights",
          value: "Four nights in one Beijing hotel; arrival on Day 1 and departure on Day 5.",
        },
        {
          label: "Sightseeing service",
          value:
            "Private English-speaking guide and separate professional driver on Days 2–4; other languages and service hours confirmed before booking.",
        },
        {
          label: "Main route",
          value:
            "Forbidden City and hutongs on Day 2, Mutianyu on Day 3, Temple of Heaven and Summer Palace on Day 4. Beijing days may swap around reservations.",
        },
        {
          label: "Transport",
          value:
            "Private arrival and departure transfers plus the listed touring vehicle. Airports, stations, luggage capacity and any out-of-area supplement are confirmed.",
        },
        {
          label: "Tickets",
          value:
            "The confirmed standard admissions and required scenic-area transport are included. Mutianyu cable-car or other lift tickets are included only if expressly selected.",
        },
        {
          label: "Meals",
          value: "Hotel breakfasts on Days 2–5; lunches and dinners are separate unless added.",
        },
        {
          label: "Walking",
          value:
            "Palace courts, garden paths and Wall steps require walking and standing. Day 4 spans two large sites and can be shortened by prior agreement.",
        },
        {
          label: "Starting-price basis",
          value: getPublishedPriceDisclosure("beijing-great-wall-private-5-day-tour"),
        },
      ],

      answer:
        "Spend five days in Beijing with one hotel base, four nights and private transfers. Explore the Forbidden City and hutongs, give Mutianyu Great Wall its own day, then visit the Temple of Heaven and Summer Palace. A private English-speaking guide and separate driver support the listed sightseeing days. Breakfast and confirmed standard admissions are included; lunch, dinner, workshops and optional cable-car tickets are separate.",
    },
    planningSupport: {
      eyebrow: "Muslim-friendly planning",
      title: "Built around your requirements, confirmed before your journey.",
      description:
        "We do not assume what comfortable travel means for your family. Share your dietary, prayer, privacy and pacing needs, then we check the practical details against your actual Beijing dates and route.",
      items: [
        {
          label: "Halal, no-pork or no-alcohol preferences",
          value: "Dining preferences",
          helper:
            "Tell us whether a certification requirement is essential and how you would like meals handled.",
        },
        {
          label: "Daily prayer windows and Friday considerations",
          value: "Prayer timing",
          helper:
            "The route can keep suitable breaks in mind where timing and venue operations allow.",
        },
        {
          label: "Nearby mosque or prayer-space information",
          value: "Local context",
          helper:
            "Specific access, opening hours and practical details are checked rather than assumed.",
        },
        {
          label: "Walking load, privacy and family comfort",
          value: "A measured pace",
          helper:
            "Starts, rest periods, room arrangements and route intensity are reviewed around your group.",
        },
      ],
      note: "Specific restaurant certification, mosque access, prayer space and opening hours are checked for your dates before booking. Meal costs are paid directly unless your written quotation includes them.",
    },
    highlights: [
      {
        title: "Imperial Beijing, without the checklist",
        description:
          "Give the Forbidden City time for context, architecture and photography, then let your multilingual host or guide adjust the route around walking comfort and interest.",
        category: "Culture",
        image: beijingUnhurriedAsset.forbiddenCityOverview,
      },
      {
        title: "The Great Wall at a gentler rhythm",
        description:
          "Choose the Mutianyu route, start time and cable-car option around the group, with a private vehicle and a measured return to the city.",
        category: "Senior-friendly",
        image: beijingUnhurriedAsset.greatWallOverview,
      },
      {
        title: "Faith and dietary needs, planned before confirmation",
        description:
          "Tell us about halal preferences, certification requirements, no-pork or no-alcohol needs, prayer timing and privacy preferences. We check practical options for your actual dates and route.",
        category: "Muslim-friendly",
        image: beijingUnhurriedAsset.dining,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Beijing, then settle in",
        destination: "Beijing",
        summary:
          "A private arrival transfer, calm hotel check-in, and an intentionally light first evening shaped around your flight time.",
        image: beijingUnhurriedAsset.arrivalHutong,
        hotel:
          "One Beijing hotel throughout the journey, selected and confirmed around your comfort level",
        meals: ["No meals included today"],
        transport: "Private airport or railway-station transfer",
        activities: [
          {
            title: "Private arrival support",
            description:
              "Meet your local representative, move smoothly with your luggage, and transfer directly to the confirmed Beijing stay.",
          },
          {
            title: "A soft first evening",
            description:
              "Rest at the hotel or take a short neighborhood introduction if arrival time and energy allow.",
          },
        ],
        guideNote:
          "Share dietary, prayer, mobility and room preferences before arrival so the local team can prepare the right first-day support.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        day: 2,
        title: "The Forbidden City and hutong life",
        destination: "Beijing",
        summary:
          "Follow the imperial axis with multilingual local support, then move into the quieter scale of Beijing's hutongs and courtyard life.",
        image: beijingUnhurriedAsset.forbiddenCity,
        hotel: "Beijing hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle, multilingual support and walking",
        activities: [
          {
            time: "Morning",
            title: "Forbidden City",
            description:
              "Explore the palace complex through stories, architectural details and photo pauses, with the walking route adjusted to the group.",
          },
          {
            time: "Afternoon",
            title: "Hutong lanes, with an optional workshop",
            description:
              "Follow a selected public neighborhood walk after the palace, or finish earlier if the group prefers. A private cultural workshop or courtyard lunch is a separately quoted addition with its own host, venue and duration; it may replace part of the walk or require extra service hours.",
          },
        ],
        guideNote:
          "Lunch and prayer timing can be planned around the Forbidden City and hutong route. Specific restaurant certification, prayer space and opening hours are checked for your dates before booking.",
        coordinates: { latitude: 39.9163, longitude: 116.3972 },
      },
      {
        day: 3,
        title: "Mutianyu Great Wall, at your pace",
        destination: "Beijing",
        summary:
          "Give Beijing's most iconic landscape a full day, with the walking route, start time and cable-car option chosen around your travelers.",
        image: beijingUnhurriedAsset.greatWallSunrise,
        hotel: "Beijing hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle and multilingual support; scenic-area transport as required",
        activities: [
          {
            time: "Morning",
            title: "Mutianyu Great Wall",
            description:
              "Take a quieter section of the Wall with time for views, photography and rest rather than a rushed loop.",
          },
          {
            time: "Afternoon",
            title: "Flexible descent and return",
            description:
              "Use the ascent and descent selected in your written proposal, then return to Beijing with the evening free. Cable car, chairlift and toboggan tickets are separate unless expressly included; operation and eligibility are checked for the travel date.",
          },
        ],
        guideNote:
          "The Wall includes uneven surfaces, steps and changing weather. Dining and prayer timing can be built into the day after the route and requirements are confirmed.",
        coordinates: { latitude: 40.4319, longitude: 116.5704 },
      },
      {
        day: 4,
        title: "Temple of Heaven and Summer Palace",
        destination: "Beijing",
        summary:
          "A measured cultural day combining ritual architecture, open space, water and a more spacious view of Beijing life.",
        image: beijingUnhurriedAsset.summerPalace,
        hotel: "Beijing hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle, multilingual support and walking",
        activities: [
          {
            time: "Morning",
            title: "Temple of Heaven",
            description:
              "Notice the symbolism, proportions and park life around the Hall of Prayer for Good Harvests.",
          },
          {
            time: "Afternoon",
            title: "Summer Palace",
            description:
              "Follow a focused walking route around selected garden and lakeside areas. A lake boat is an optional paid service, subject to operation and separate confirmation; it is not needed to complete the planned visit.",
          },
        ],
        guideNote:
          "The afternoon remains flexible for rest, prayer timing or a shorter cultural route. Your local host or guide can recommend and reserve suitable places; meal costs are paid directly unless the final confirmation states otherwise.",
        coordinates: { latitude: 39.9998, longitude: 116.275 },
      },
      {
        day: 5,
        title: "A considered Beijing departure",
        destination: "Beijing",
        summary:
          "Breakfast, a final quiet morning where the flight allows, and a private transfer timed around your onward journey.",
        image: beijingUnhurriedAsset.privateMpv,
        meals: ["Breakfast"],
        transport: "Private airport or railway-station transfer",
        activities: [
          {
            title: "Protected departure timing",
            description:
              "Leave the hotel with realistic time for traffic, baggage and the confirmed terminal or station.",
          },
          {
            title: "A light final option",
            description:
              "For later departures, a short nearby walk or relaxed breakfast extension can be discussed separately.",
          },
        ],
        guideNote:
          "There is no hotel stay tonight. Early departures may require a breakfast box, subject to hotel policy.",
        coordinates: { latitude: 40.0799, longitude: 116.6031 },
      },
    ],
    accommodations: [
      {
        name: "One Carefully Selected Beijing Stay",
        destination: "Beijing, 4 nights",
        description:
          "Keep the route simple with one hotel base, reducing luggage movement and making the daily rhythm easier to adjust.",
        roomStyle: "Comfortable, Luxury or bespoke tier confirmed after inquiry",
        highlights: ["Breakfast on Days 2-5", "Room configuration and bedding checked in writing"],
        image: beijingUnhurriedAsset.hotelRoom,
      },
    ],
    included: [
      "Four nights at the Beijing hotel confirmed in your written quotation",
      "Hotel breakfast on Days 2-5",
      "Private airport or railway-station arrival and departure transfers",
      "Air-conditioned private touring vehicle",
      "Private English-speaking guide and separate professional driver on the listed sightseeing days; other languages confirmed on request",
      "Standard admission and scenic-area transport required by the confirmed itinerary",
      "Mutianyu cable-car option only when listed in the final confirmation",
      "No compulsory shopping stops",
      "Planning discussion for dietary preferences, prayer timing, walking comfort and privacy needs",
    ],
    excluded: [
      "International flights, visa, travel insurance and personal expenses",
      "Lunches and dinners unless specifically included in your written quotation",
      "Specific restaurant meal costs unless stated in the final confirmation",
      "Room upgrades, single supplements, early check-in and late check-out",
      "Optional cultural workshops, boat rides or cable-car upgrades unless confirmed",
      "Host, guide and driver gratuities",
      "Extra costs caused by weather, traffic, venue operations or events beyond reasonable control",
    ],
    optionalExperiences: [
      {
        title: "Mutianyu cable-car option",
        description:
          "Reduce the climbing load when it suits the group. Operating conditions, tickets and the final route are confirmed before booking.",
        badges: ["Optional", "Pacing"],
        image: beijingUnhurriedAsset.greatWallWalk,
      },
      {
        title: "A private hutong cultural workshop",
        description:
          "Add a hands-on moment such as a traditional craft or courtyard experience when it fits the group's interests and energy.",
        badges: ["Culture", "Private"],
        image: beijingUnhurriedAsset.handsOnCulture,
      },
      {
        title: "A more flexible dining plan",
        description:
          "Share halal preferences, certification requirements, no-pork or no-alcohol needs and prayer timing before we check suitable options for your dates.",
        badges: ["Muslim-friendly", "Planning"],
        image: beijingUnhurriedAsset.dining,
      },
    ],
    transportation: {
      title: "Private support, with the route kept easy to understand.",
      description:
        "Private airport transfers and a dedicated vehicle connect one Beijing hotel with the city's historic sites and the Mutianyu Great Wall.",
      items: [
        {
          label: "Arrival and departure",
          value: "Private transfer",
          helper:
            "Vehicle size is selected around travelers, luggage and the confirmed airport or station.",
        },
        {
          label: "Sightseeing days",
          value: "Private touring vehicle",
          helper:
            "A private English-speaking guide and separate driver support the listed sightseeing days. Other guide languages require confirmation.",
        },
        {
          label: "Great Wall access",
          value: "Scenic-area transport",
          helper:
            "Cable-car or other venue transport is included only when listed in the final confirmation.",
        },
      ],
    },
    routeMap: {
      title: "One hotel base. Five days of Beijing context.",
      description:
        "Stay in Beijing throughout, moving between imperial landmarks, hutong neighborhoods, the Mutianyu mountains and the city's open garden spaces.",
      stops: [
        {
          name: "Central Beijing",
          days: "Days 1-2",
          description:
            "Arrival, the Forbidden City, hutong life and a private cultural workshop option.",
          coordinates: { latitude: 39.9163, longitude: 116.3972 },
        },
        {
          name: "Mutianyu",
          days: "Day 3",
          description:
            "A full Great Wall day with a route and cable-car option shaped around your group.",
          coordinates: { latitude: 40.4319, longitude: 116.5704 },
        },
        {
          name: "Temple of Heaven and Summer Palace",
          days: "Day 4",
          description:
            "Ritual architecture, water, gardens and flexible time for rest or prayer planning.",
          coordinates: { latitude: 39.9998, longitude: 116.275 },
        },
        {
          name: "Beijing departure",
          days: "Day 5",
          description: "A private transfer timed around your onward flight or rail connection.",
          coordinates: { latitude: 40.0799, longitude: 116.6031 },
        },
      ],
    },
    gallery: [
      beijingUnhurriedAsset.hero,
      beijingUnhurriedAsset.forbiddenCityOverview,
      beijingUnhurriedAsset.forbiddenCityGuide,
      beijingUnhurriedAsset.hutongLife,
      beijingUnhurriedAsset.greatWallSunrise,
      beijingUnhurriedAsset.greatWallWalk,
      beijingUnhurriedAsset.summerPalace,
      beijingUnhurriedAsset.handsOnCulture,
      beijingUnhurriedAsset.dining,
      beijingUnhurriedAsset.hotelRoom,
      beijingUnhurriedAsset.privateMpv,
    ],
    faqs: [
      {
        question: "What does this private tour cost, and what is the starting-price basis?",
        answer: getPublishedPriceDisclosure("beijing-great-wall-private-5-day-tour"),
      },
      {
        question: "Does this five-day Beijing tour include hotels and airport transfers?",
        answer:
          "Yes. The package includes four nights in the named Beijing hotel and the confirmed arrival and departure transfers. The proposal specifies rooms, beds, breakfast, airport or station and vehicle capacity. Early check-in, late checkout and unusual transfer hours are not assumed. Staying in one hotel avoids packing between sightseeing days.",
      },
      {
        question: "Will we have both a private guide and a driver?",
        answer:
          "Yes. The listed sightseeing days use a private English-speaking guide and a separate professional driver. They have different roles: your guide interprets the sites and manages the visit while the driver handles the vehicle. Other languages and any evening extension need date-specific confirmation. Arrival and departure transfers do not automatically include a full guided tour.",
      },
      {
        question: "Are Forbidden City tickets guaranteed?",
        answer:
          "No. Standard admission is planned, but tickets must be successfully reserved under the museum’s current rules. The Beijing sightseeing days can be reordered where practical. Ask what happens if admission cannot be secured before paying; a private guide does not create an allocation or override security and capacity limits.",
      },
      {
        question: "Does the Mutianyu day include the cable car?",
        answer:
          "Only when selected and listed in the final confirmation. Standard admission and required scenic-area transport are distinct from mountain lifts. Discuss enclosed cable car, chairlift or walking before booking and check the total. The Great Wall still has steps and slopes after lift access.",
      },
      {
        question: "Are Temple of Heaven and Summer Palace too much for one day?",
        answer:
          "They form the proposed third sightseeing day, but they are both large sites with travel between them. The guide selects focused routes rather than promising every garden, hall and lake activity. Tell us if you prefer one major site with more rest. Removing or replacing admissions should be agreed before the final quote.",
      },
      {
        question: "How much walking is involved for older travelers?",
        answer:
          "There is substantial walking or standing at the palace, gardens and Great Wall, even with a private vehicle. Share individual stair, balance and heat limitations. A shorter route may be possible, but this is not automatically a step-free tour and personal care or mobility equipment are not included.",
      },
      {
        question: "Can we add a hutong cooking class or a courtyard lunch?",
        answer:
          "Yes, as a separately quoted activity with a confirmed host, meal, venue and duration. A hutong walk does not itself include a private-home visit or cooking lesson. Adding a workshop may replace another stop or extend guide and vehicle time; the revised plan should explain the trade-off.",
      },
      {
        question: "Are meals or shopping stops built into the tour?",
        answer:
          "Hotel breakfasts are included. Lunch and dinner remain independent unless specifically added, and there are no compulsory shopping stops. Tell us dietary needs so suitable options can be checked. A restaurant reservation is not automatically a paid meal or certification of an allergy-safe kitchen.",
      },
      {
        question: "Can we arrive by train and depart from a different Beijing airport?",
        answer:
          "Yes, subject to a written transfer plan. State the exact station or airport and flight or train details. Beijing Capital and Daxing are different gateways; the pickup timing depends on the confirmed one. The last day does not assume sightseeing fits before any departure.",
      },
      {
        question: "Should we choose this or a private Great Wall day tour?",
        answer:
          "Choose five days if you want Beijing accommodation, arrival and departure transfers and three guided sightseeing days planned together. Choose the Mutianyu day tour if you already have your Beijing stay arranged and only need one day’s hotel-to-hotel service. Their included lift and meal arrangements must be compared separately.",
      },
    ],
    related: {
      useListedTours: true,
      tours: [
        {
          title: "Private Mutianyu Great Wall Tour from Beijing",
          description:
            "Choose a single Wall day if your Beijing accommodation and other sightseeing are already arranged.",
          tags: ["Culture", "Family", "Photography"],
          image: {
            src: "/tours/mutianyu-private-day-tour/01-mutianyu-great-wall-autumn-panorama.webp",
            alt: "Mutianyu Great Wall winding through autumn-colored mountains near Beijing",
            width: 2160,
            height: 3240,
          },
          route: "Beijing · Mutianyu Great Wall · Beijing",
          duration: "1 day · private",
          href: "/tours/private-mutianyu-great-wall-day-tour",
        },
        {
          title: "6-Day Xi'an and Beijing Private Tour",
          description:
            "Add the Terracotta Army and a high-speed train connection, with two Xi’an nights and three in Beijing.",
          tags: ["First-time China", "Culture", "Luxury"],
          image: {
            src: "/tours/xian-beijing-private-journey/hero.webp",
            alt: "The Great Wall rising above the mountains near Beijing in warm evening light",
            width: 1600,
            height: 1067,
          },
          route: "Xi'an · Beijing",
          duration: "6 days / 5 nights",
          href: "/tours/xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
        },
      ],

      destinations: [
        {
          name: "Beijing",
          description:
            "Imperial architecture, hutong neighborhoods, the Great Wall and a capital with many different rhythms.",
          image: {
            src: "/home/editorial/great-wall-private-china-travel.webp",
            alt: "A traveler looking across the Great Wall near Beijing",
            width: 1086,
            height: 1448,
            objectPosition: "50% 44%",
          },
          href: "/destinations/beijing",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=5-Day%20Beijing%20%26%20Great%20Wall%20Private%20Tour%20Quotation",
      whatsappHref:
        "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20quotation%20for%20the%205-day%20private%20Beijing%20tour.%0A%0AMuslim-friendly%20planning%20needs%3A%20",
      scheduleCallHref: "tel:+8618027438191",
      defaultMessage:
        "I am interested in the 5-Day Beijing & Great Wall Private Tour. Please help me plan dining preferences, prayer timing and a suitable pace for my travelers.",
    },

    planningResources: [
      {
        label: "The Palace Museum: official visitor information",
        href: "https://intl.dpm.org.cn/visit.html",
        officialPublisher: "The Palace Museum",
        description:
          "Check reservation, identification and visitor notices for your travel date. Private guiding does not bypass museum admission rules.",
      },
      {
        label: "Mutianyu Great Wall: official visitor information",
        href: "https://www.mutianyugreatwall.com/",
        officialPublisher: "Mutianyu Great Wall scenic area",
        description:
          "Check visitor notices and mountain-transport operation. Admission, shuttle and lift tickets are distinct services; the written proposal specifies which are included.",
      },
      {
        label: "China entry requirements: official information",
        href: "https://en.nia.gov.cn/",
        officialPublisher: "National Immigration Administration of China",
        description:
          "Check the rule that applies to your passport and full international route. Booking this tour does not establish visa-free or transit eligibility.",
      },
    ],

    faqLimit: 13,

    updatedAt: "2026-11-12",

    inquiryChecklist: [
      "Dates and flight or rail details",
      "Travelers, rooms and hotel preference",
      "Great Wall walking and lift preferences",
      "Guide language and dietary requirements",
      "Any optional hosted experience",
    ],

    comparison: {
      title: "Five days in Beijing or one Great Wall day?",
      intro:
        "Choose the package if you need accommodation and several days of private touring. Choose the day service if your Beijing arrangements already exist.",
      columns: ["Decision", "This five-day package", "Mutianyu day service"],
      rows: [
        ["Accommodation", "Four Beijing hotel nights", "No accommodation"],
        ["Sightseeing", "Palace, Wall and further Beijing visits", "One Mutianyu outing"],
        ["Best fit", "A supported Beijing stay", "An addition to your own itinerary"],
      ],
      href: "/tours/private-mutianyu-great-wall-day-tour",
      linkLabel: "Compare the alternative itinerary",
    },
  },
  {
    slug: "shanghai-zhangjiajie-floating-peaks",
    title: "8-Day Shanghai and Zhangjiajie Private Tour",
    subtitle:
      "Shanghai's riverfront and Zhangjiajie's sandstone peaks, connected by private transfers, local guides and a protected final night.",
    duration: "8 Days / 7 Nights",
    route: "Shanghai, Wulingyuan, Zhangjiajie",
    styles: ["Nature", "Luxury", "Family", "Photography"],
    hero: {
      eyebrow: "Private Shanghai and Zhangjiajie journey",
      image: shanghaiZhangjiajieAsset.hero,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Request My Quotation", href: "#enquiry" },
    },
    seo: {
      title: "8-Day Shanghai and Zhangjiajie Private Tour",
      description:
        "Combine Shanghai and Zhangjiajie in eight days with seven hotel nights, private guides, domestic flights, Wulingyuan and Tianmen Mountain. Glass Bridge is optional.",
      keywords: [
        "Shanghai Zhangjiajie private tour 8 days",
        "Zhangjiajie Wulingyuan Tianmen Mountain itinerary",
        "Shanghai Zhangjiajie flights private tour",
        "Zhangjiajie tour Glass Bridge optional",
      ],

      preserveCopy: true,
    },
    overview: {
      pitch:
        "Contemporary Shanghai and extraordinary mountain scenery, joined by a carefully managed domestic flight plan.",
      facts: [
        { label: "Hotels", value: "Shanghai 2 · Wulingyuan 2 · Zhangjiajie City 2 · Shanghai 1" },
        {
          label: "Pacing",
          value: "Mountain sightseeing with shared lifts, steps and 3 hotel changes",
        },
        {
          label: "Suitable for",
          value:
            "Visitors who want a major city and sandstone-mountain contrast, accepting hotel changes, flights and public scenic transport.",
        },
      ],

      practicalities: [
        {
          label: "Best for",
          value:
            "Visitors who want a major city and sandstone-mountain contrast, accepting hotel changes, flights and public scenic transport.",
        },
        {
          label: "Nights",
          value:
            "Shanghai 2 nights, Wulingyuan 2, Zhangjiajie City 2 and final Shanghai 1: 7 nights across 4 stay blocks.",
        },
        {
          label: "Flights",
          value:
            "Economy domestic flights Shanghai–Zhangjiajie and back are included as confirmed, with actual dates, airports, baggage and fare conditions stated.",
        },
        {
          label: "Park geography",
          value:
            "Wulingyuan / Zhangjiajie National Forest Park, Tianmen Mountain and the Glass Bridge are separate places and ticket products.",
        },
        {
          label: "Included mountain plan",
          value:
            "Yuanjiajie and Tianzi Mountain, selected Golden Whip Stream walking and Tianmen Mountain, with the confirmed required admission and park transport.",
        },
        {
          label: "Optional services",
          value:
            "Glass Bridge and Huangpu sightseeing cruise are included only if separately selected and listed. They are not implied by landscape or night photographs.",
        },
        {
          label: "Private and shared",
          value:
            "Private road transfers and local guiding; park buses, elevators, cableways and public attractions are shared.",
        },
        {
          label: "Return buffer",
          value:
            "Day 7 returns to Shanghai before the Day 8 international departure. This adds margin but does not guarantee protection against every flight disruption.",
        },
        {
          label: "Meals and walking",
          value:
            "Hotel breakfasts on Days 2–8 are included; lunch and dinner are separate. Mountain steps, boarding, standing and exposed viewpoints remain.",
        },
        {
          label: "Starting-price basis",
          value: getPublishedPriceDisclosure("shanghai-zhangjiajie-floating-peaks"),
        },
      ],

      answer:
        "Combine Shanghai with Zhangjiajie in eight days and seven nights. After Shanghai, fly to the mountain region for Wulingyuan’s sandstone peaks, Golden Whip Stream and a separate Tianmen Mountain day. Private local guides, transfers and the confirmed park transport are included. Fly back to Shanghai on Day 7 before departure on Day 8; Glass Bridge and river-cruise additions are optional.",
    },
    highlights: [
      {
        title: "Shanghai from old lanes to river lights",
        description:
          "Explore Yu Garden, the Bund and Shanghai's changing waterfront. A Huangpu sightseeing cruise is a separately selected option; the quote confirms its ticket, timing and any additional service hours.",
        category: "Culture",
        image: shanghaiZhangjiajieAsset.shanghaiDusk,
      },
      {
        title: "Among Zhangjiajie's floating peaks",
        description:
          "Use the Bailong Elevator, official park shuttles, and cableways to reach Yuanjiajie and Tianzi Mountain without overloading the day.",
        category: "Nature",
        image: shanghaiZhangjiajieAsset.wulingyuan,
      },
      {
        title: "A protected final night in Shanghai",
        description:
          "Return to Shanghai one day before the international departure, creating a calmer ending and a practical buffer around the domestic flight.",
        category: "Luxury",
        image: shanghaiZhangjiajieAsset.shanghaiNight,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Shanghai",
        destination: "Shanghai",
        summary:
          "Meet your representative, transfer privately to the hotel, and keep the first evening deliberately light.",
        image: shanghaiZhangjiajieAsset.privateMpv,
        hotel:
          "Carefully selected Shanghai hotel; final property and room category confirmed in writing",
        meals: ["No meals included today"],
        transport: "Private airport or railway-station transfer",
        activities: [
          {
            title: "Private arrival support",
            description:
              "A vehicle selected around your party and luggage takes you directly to the confirmed hotel.",
          },
          {
            title: "A quiet first evening",
            description:
              "Settle in, confirm the next morning's meeting time, and keep dinner flexible near the hotel.",
          },
        ],
        guideNote:
          "The first day is about arriving well. Drive time is usually 45-90 minutes, depending on the airport, hotel, and traffic.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        day: 2,
        title: "Old and New Shanghai",
        destination: "Shanghai",
        summary:
          "Explore Yu Garden and a selected stretch of the Bund with your private guide. A Huangpu evening cruise can be added only when selected and priced in your proposal; otherwise return to the hotel after the confirmed city route.",
        image: shanghaiZhangjiajieAsset.shanghaiBund,
        hotel: "Shanghai hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle, walking, and standard river cruise when confirmed",
        activities: [
          {
            time: "Morning",
            title: "Yu Garden and the Old City",
            description:
              "Explore rockwork, water, pavilions, and nearby lanes with context from your private guide.",
          },
          {
            time: "Afternoon",
            title: "The Bund",
            description:
              "Walk a selected section of the waterfront where early twentieth-century architecture faces modern Pudong.",
          },
          {
            time: "Evening",
            title: "Optional Huangpu evening cruise",
            description:
              "Add a shared sightseeing cruise only if its ticket, sailing, guiding and return transport are selected and priced in your proposal. Weather and operator decisions affect sailing; declining the cruise leaves the confirmed daytime itinerary in place.",
          },
        ],
        guideNote: "Typical walking is 3-5 kilometres and can be adjusted around the group.",
        coordinates: { latitude: 31.2397, longitude: 121.4998 },
      },
      {
        day: 3,
        title: "Shanghai to Zhangjiajie",
        destination: "Shanghai to Wulingyuan",
        summary:
          "A slow city morning followed by the best confirmed domestic connection to Zhangjiajie.",
        image: shanghaiZhangjiajieAsset.shanghaiDusk,
        hotel: "Carefully selected Wulingyuan hotel near the national-park entrance",
        meals: ["Breakfast"],
        transport: "Private transfers and economy-class domestic flight",
        activities: [
          {
            time: "Morning",
            title: "Shanghai at street level",
            description:
              "Keep any remaining morning for an independent walk close to the hotel, or ask for a separately confirmed guided activity. The airport pickup and actual flight schedule take priority.",
          },
          {
            time: "Afternoon",
            title: "Domestic connection",
            description:
              "Transfer privately to the airport and fly on the best confirmed schedule; a direct service is preferred when operating.",
          },
          {
            time: "Evening",
            title: "Arrive in Wulingyuan",
            description:
              "Meet the local team and continue approximately 45-60 minutes to the hotel near the national park.",
          },
        ],
        guideNote:
          "Seasonal flight schedules may require a different timing or connection. The final sector and baggage basis are confirmed before payment.",
        coordinates: { latitude: 29.345, longitude: 110.551 },
      },
      {
        day: 4,
        title: "Yuanjiajie and Tianzi Mountain",
        destination: "Wulingyuan Scenic Area",
        summary:
          "The classic high-peaks day, made more manageable with the Bailong Elevator, park shuttles, and cableways.",
        image: shanghaiZhangjiajieAsset.wulingyuan,
        hotel: "Wulingyuan hotel",
        meals: ["Breakfast"],
        transport: "Private transfer outside the park, then official scenic-area transport",
        activities: [
          {
            time: "Morning",
            title: "Bailong Elevator and Yuanjiajie",
            description:
              "Reach the upper landscape and follow a viewpoint route with photography and rest stops.",
          },
          {
            time: "Afternoon",
            title: "Tianzi Mountain",
            description:
              "Continue by official shuttle for a different perspective across the quartz-sandstone pillars.",
          },
        ],
        guideNote:
          "Private vehicles cannot enter the core scenic area. Your guide stays with you and manages shared park shuttles, tickets, queues, and route decisions.",
        coordinates: { latitude: 29.354, longitude: 110.475 },
      },
      {
        day: 5,
        title: "Golden Whip Stream and Optional Glass Bridge",
        destination: "Zhangjiajie National Forest Park",
        summary:
          "Walk a selected Golden Whip Stream section, then transfer to Zhangjiajie City for the next two nights. A Grand Canyon Glass Bridge visit is an optional paid addition, selected before booking and checked against park time, the hotel move and your comfort with heights.",
        image: shanghaiZhangjiajieAsset.goldenWhipStream,
        hotel: "Carefully selected Zhangjiajie City hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle and scenic-area access",
        activities: [
          {
            time: "Morning",
            title: "Golden Whip Stream",
            description:
              "Walk a selected 2-4 kilometre section beneath the peaks rather than automatically completing the full valley trail.",
          },
          {
            time: "Afternoon",
            title: "Optional Grand Canyon Glass Bridge",
            description:
              "The Grand Canyon and Glass Bridge are separate from the forest-park visit. Add them only when their tickets, transfers and guide hours are quoted and confirmed. Without that addition, keep the agreed forest route and city transfer; a non-glass alternative needs its own service and price confirmation.",
          },
          {
            time: "Evening",
            title: "Move to Zhangjiajie City",
            description:
              "Relocate to the city to reduce the following morning's transfer to Tianmen Mountain.",
          },
        ],
        guideNote:
          "Wild macaques may be present near Golden Whip Stream. Keep food packed away, give wildlife space, and follow your guide's instructions.",
        coordinates: { latitude: 29.323, longitude: 110.439 },
      },
      {
        day: 6,
        title: "Tianmen Mountain",
        destination: "Zhangjiajie City",
        summary:
          "Cableway, cliff scenery, and Tianmen Cave on a route adapted to weather, operations, and walking comfort.",
        image: shanghaiZhangjiajieAsset.tianmenCableway,
        hotel: "Zhangjiajie City hotel",
        meals: ["Breakfast"],
        transport: "Private transfer and Tianmen Mountain transport system",
        activities: [
          {
            time: "Morning",
            title: "Cableway and cliff route",
            description:
              "Use the confirmed entry route, then follow a selected cliffside path with regular pauses; glass walkways are optional.",
          },
          {
            time: "Afternoon",
            title: "Tianmen Cave",
            description:
              "Continue toward the natural arch using the most suitable operating route; the 999-step staircase is not compulsory.",
          },
        ],
        guideNote:
          "Visibility changes quickly. The local team may reorder Days 4-6 when weather and ticket availability support a better experience.",
        coordinates: { latitude: 29.05, longitude: 110.478 },
      },
      {
        day: 7,
        title: "Return to Shanghai",
        destination: "Zhangjiajie to Shanghai",
        summary:
          "Return one day before the international departure, allowing more protection against disruption and a calm final evening.",
        image: shanghaiZhangjiajieAsset.shanghaiNight,
        hotel: "Shanghai hotel selected around the final departure plan",
        meals: ["Breakfast"],
        transport: "Private transfers and economy-class domestic flight",
        activities: [
          {
            time: "Morning",
            title: "Depart Zhangjiajie",
            description:
              "Transfer privately to the airport with realistic timing for baggage and the confirmed flight.",
          },
          {
            time: "Afternoon",
            title: "Arrive in Shanghai",
            description:
              "Meet the Shanghai driver and return to the hotel for a relaxed final night.",
          },
        ],
        guideNote:
          "If timing and energy allow, add a simple riverside walk or dinner; no fixed sightseeing is required.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
      {
        day: 8,
        title: "Shanghai Departure",
        destination: "Shanghai",
        summary:
          "Breakfast and a private airport transfer timed around the confirmed international flight.",
        image: shanghaiZhangjiajieAsset.privateMpv,
        meals: ["Breakfast"],
        transport: "Private airport transfer",
        activities: [
          {
            title: "A protected final morning",
            description:
              "Check out and transfer to the correct terminal with a sensible departure time reconfirmed by the local team.",
          },
          {
            title: "Later-flight options",
            description:
              "Late check-out, extra vehicle time, or a light activity can be quoted separately when useful.",
          },
        ],
        guideNote:
          "Very early flights may require a breakfast box, subject to hotel policy. There is no hotel stay tonight.",
        coordinates: { latitude: 31.1443, longitude: 121.8083 },
      },
    ],
    accommodations: [
      {
        name: "Carefully Selected Shanghai Stay",
        destination: "Shanghai, 3 nights in total",
        description:
          "Central access for the first chapter and a practical final night selected around the departure plan.",
        roomStyle: "Confirmed after inquiry",
        highlights: ["Breakfast included", "Room and bedding confirmed in writing"],
        image: shanghaiZhangjiajieAsset.shanghaiDusk,
      },
      {
        name: "Wulingyuan National Park Base",
        destination: "Wulingyuan, 2 nights",
        description:
          "A well-positioned base near the park entrance, reducing morning driving before the main scenic days.",
        roomStyle: "Confirmed after inquiry",
        highlights: ["Near scenic-area access", "Selected for recovery and sleep quality"],
        image: shanghaiZhangjiajieAsset.hero,
      },
      {
        name: "Zhangjiajie City Base",
        destination: "Zhangjiajie City, 2 nights",
        description:
          "Convenient for Tianmen Mountain and the airport, avoiding unnecessary backtracking before the return flight.",
        roomStyle: "Confirmed after inquiry",
        highlights: ["Convenient city location", "Room configuration checked before booking"],
        image: shanghaiZhangjiajieAsset.tianmenCave,
      },
    ],
    included: [
      "Seven nights at the hotels confirmed in your written quotation",
      "Hotel breakfast on Days 2-8",
      "Private airport transfers in Shanghai and Zhangjiajie",
      "Air-conditioned private touring vehicle outside restricted scenic areas",
      "Professional multilingual local guides on sightseeing days",
      "Economy-class domestic flights between Shanghai and Zhangjiajie when listed in the final confirmation",
      "Standard admission, park shuttles, elevators, and cableways required by the confirmed itinerary",
      "Huangpu River cruise and Glass Bridge only when listed in the final confirmation",
      "Bottled water during touring and 24-hour emergency support",
      "No compulsory shopping stops",
    ],
    excluded: [
      "International flights to and from China",
      "Lunches and dinners throughout the journey",
      "Visa, travel insurance, medical costs, and personal expenses",
      "Early check-in, late check-out, room upgrades, and single supplements",
      "Guide and driver gratuities",
      "Optional shows, premium cruise upgrades, and activities not confirmed in writing",
      "Excess baggage and airline seat-selection fees unless specifically included",
      "Extra costs caused by weather, traffic, flight disruption, or events beyond reasonable control",
    ],
    optionalExperiences: [
      {
        title: "Zhangjiajie Glass Bridge",
        description:
          "Add the Grand Canyon glass bridge only when the group is comfortable and current venue rules fit the day.",
        badges: ["Optional", "Weather dependent"],
        image: shanghaiZhangjiajieAsset.glassBridge,
      },
      {
        title: "A slower Shanghai neighborhood morning",
        description:
          "Use the transfer day for coffee, a bakery, or a small park instead of adding another major sight.",
        badges: ["Local life", "Flexible"],
        image: shanghaiZhangjiajieAsset.shanghaiBund,
      },
      {
        title: "Adjustable Tianmen Mountain route",
        description:
          "Select cliff walks, glass sections, escalator-assisted access, and rest points around comfort and operations.",
        badges: ["Nature", "Pacing"],
        image: shanghaiZhangjiajieAsset.tianmenCave,
      },
    ],
    transportation: {
      title: "Private logistics outside the parks, smart shared systems inside them.",
      description:
        "Private transfers connect airports, hotels, and scenic areas. Inside protected parks, official shared shuttles, elevators, cableways, and escalators are required.",
      items: [
        {
          label: "Private transfers",
          value: "Air-conditioned vehicle",
          helper: "Vehicle size is confirmed around travelers, luggage, and mobility needs.",
        },
        {
          label: "Domestic flights",
          value: "Shanghai-Zhangjiajie return",
          helper: "Economy fare, schedule, and baggage basis are confirmed before payment.",
        },
        {
          label: "Protected areas",
          value: "Official park transport",
          helper: "Your guide manages required shared systems and adjusts the operating order.",
        },
      ],
    },
    routeMap: {
      title: "City energy, mountain scale, and a protected return.",
      description:
        "Begin with two Shanghai nights, spend four nights across the Zhangjiajie region, then return to Shanghai before the international departure.",
      stops: [
        {
          name: "Shanghai",
          days: "Days 1-3 and 7-8",
          description: "Yu Garden, the Bund, Huangpu River lights, and the final departure buffer.",
          coordinates: { latitude: 31.2304, longitude: 121.4737 },
        },
        {
          name: "Wulingyuan",
          days: "Days 3-5",
          description:
            "Yuanjiajie, Tianzi Mountain, Golden Whip Stream, and the Grand Canyon option.",
          coordinates: { latitude: 29.345, longitude: 110.551 },
        },
        {
          name: "Zhangjiajie City",
          days: "Days 5-7",
          description: "Tianmen Mountain, city hotel base, and the return flight to Shanghai.",
          coordinates: { latitude: 29.117, longitude: 110.479 },
        },
      ],
    },
    gallery: [
      shanghaiZhangjiajieAsset.shanghaiDusk,
      shanghaiZhangjiajieAsset.shanghaiNight,
      shanghaiZhangjiajieAsset.shanghaiBund,
      shanghaiZhangjiajieAsset.hero,
      shanghaiZhangjiajieAsset.wulingyuan,
      shanghaiZhangjiajieAsset.goldenWhipStream,
      shanghaiZhangjiajieAsset.glassBridge,
      shanghaiZhangjiajieAsset.tianmenCableway,
      shanghaiZhangjiajieAsset.privateMpv,
    ],
    faqs: [
      {
        question: "What does this private tour cost, and what is the starting-price basis?",
        answer: getPublishedPriceDisclosure("shanghai-zhangjiajie-floating-peaks"),
      },
      {
        question: "Does this itinerary include both Wulingyuan and Tianmen Mountain?",
        answer:
          "Yes, in the proposed confirmed package, on separate days. Wulingyuan contains the sandstone-pillar park areas, while Tianmen Mountain is nearer Zhangjiajie City and uses another ticket and transport system. They are not two names for one attraction. Operating routes and ticket options need date-specific confirmation.",
      },
      {
        question: "Is the Zhangjiajie Glass Bridge included?",
        answer:
          "Not automatically. It is an optional separate attraction and ticket, considered after the Golden Whip Stream plan and the move to the city hotel. Adding it affects road time, walking, service hours and cost. The existing itinerary does not include every glass walkway or promise suitability for travelers afraid of heights.",
      },
      {
        question: "How many times do we change hotels?",
        answer:
          "The seven nights use Shanghai for two nights, Wulingyuan for two, Zhangjiajie City for two and Shanghai again for the final night. Moving from Wulingyuan to the city makes the Tianmen and airport chapters more practical. The return Shanghai hotel may differ from the first one and is confirmed in the proposal.",
      },
      {
        question: "Are the two domestic flights and airport transfers included?",
        answer:
          "Yes, as specified in the written package. Check the actual Shanghai airport, flight times, economy fare, baggage and all local transfers before booking international tickets. A published route does not establish a specific nonstop schedule on every date. Any connection or schedule change is explained in the proposal.",
      },
      {
        question: "Why return to Shanghai a day before departure?",
        answer:
          "The final Shanghai night reduces reliance on a same-day mountain flight connecting with an international departure. It is a planning buffer, not a disruption guarantee or insurance policy. Your tickets’ connection conditions, baggage and travel insurance remain important, and major cancellations can still require a revised plan.",
      },
      {
        question: "How difficult is the walking in Zhangjiajie?",
        answer:
          "Lifts and cableways reduce some climbing but do not remove steps, queues, standing, boarding and uneven paths. The guide selects routes around conditions and the group. Share knees, balance, wheelchair needs and comfort with heights before booking. A panoramic photo does not prove that its viewpoint is accessible to everyone.",
      },
      {
        question: "Do we have a private vehicle inside the national park?",
        answer:
          "No private-car access is assumed through restricted core areas. The driver handles authorized road transfers, and your guide accompanies the booked public park systems. Required buses, elevators and cableways are included only as stated. Shared operations can have queues and route changes.",
      },
      {
        question: "Is a Huangpu River evening cruise included in Shanghai?",
        answer:
          "Only if selected in the final confirmation. The city itinerary and its skyline photographs do not automatically include a cruise, premium seats, private boat or extended nighttime guide service. If you want one, the ticket, transfers, guide hours and return plan need to be priced together.",
      },
      {
        question: "What if cloud or wind affects Tianmen Mountain?",
        answer:
          "Visibility and operation cannot be guaranteed. The team reviews the available route and any material closure with you, explains possible alternatives and applies the written change terms. A different attraction is not automatically equivalent. Tell us if your booking depends on one particular cableway or glass feature.",
      },
      {
        question: "Should we choose this or Chengdu Chongqing Zhangjiajie?",
        answer:
          "Choose eight days for Shanghai gateways, a city-and-mountain contrast and a return Shanghai night. Choose eleven days for Sichuan food, pandas, Chongqing and a mountain finish, with two independent days. Tianmen is planned in this eight-day route but not automatically included in the eleven-day route.",
      },
    ],
    related: {
      useListedTours: true,
      tours: [
        {
          title: "11-Day Chengdu, Chongqing and Zhangjiajie Tour",
          description:
            "Choose eleven days with Chengdu and Chongqing, two independent days and departure from Zhangjiajie.",
          tags: ["Nature", "Food", "Photography"],
          image: {
            src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/hero-01.webp",
            alt: "International travelers looking across Zhangjiajie's sandstone peaks in soft mountain light",
            width: 1600,
            height: 1067,
            priority: true,
          },
          route: "Chengdu · Chongqing · Zhangjiajie",
          duration: "11 days / 10 nights",
          href: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour",
        },
        {
          title: "Private Shanghai Day Tour with Guide and Driver",
          description:
            "Keep only a private Shanghai day if you are arranging the mountain region and flights yourself.",
          tags: ["Culture", "Food", "Family"],
          image: {
            src: "/tours/private-shanghai-day-tour/01-shanghai-lujiazui-at-dusk.webp",
            alt: "Lujiazui skyline at dusk, with the Oriental Pearl Tower and Shanghai Tower",
            width: 4649,
            height: 6000,
          },
          route: "Shanghai hotel · Old City · Bund · Former French Concession · Shanghai hotel",
          duration: "1 day · private · about 8 hours",
          href: "/tours/private-shanghai-day-tour-guide-driver",
        },
      ],

      destinations: [
        {
          name: "Shanghai",
          description: "Historic riverfront architecture, neighborhood life, and Pudong's skyline.",
          image: {
            src: "/home/shanghai-pudong-skyline.webp",
            alt: "Shanghai Pudong skyline at dusk",
            width: 1920,
            height: 1080,
            objectPosition: "50% 45%",
          },
          href: "/destinations/shanghai",
        },
        {
          name: "Zhangjiajie",
          description:
            "Sandstone peaks, forest paths, cableways, and weather-shaped mountain days.",
          image: {
            src: "/home/zhangjiajie-national-forest.webp",
            alt: "Sandstone pillar forest in Zhangjiajie",
            width: 1920,
            height: 1200,
            objectPosition: "52% 38%",
          },
          href: "/destinations/zhangjiajie",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=8-Day%20Shanghai%20%26%20Zhangjiajie%20Private%20Tour%20Quotation",
      whatsappHref:
        "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20quotation%20for%20the%208-day%20Shanghai%20and%20Zhangjiajie%20private%20tour.",
      scheduleCallHref: "tel:+8618027438191",
      defaultMessage:
        "I am interested in the 8-Day Shanghai & Zhangjiajie Private Tour. Please prepare a quotation for my party.",
    },

    planningResources: [
      {
        label: "UNESCO: Wulingyuan Scenic and Historic Interest Area",
        href: "https://whc.unesco.org/en/list/640/",
        officialPublisher: "UNESCO World Heritage Centre",
        description:
          "Understand the sandstone landscape and protected property. This is not the operating authority for Tianmen Mountain, the Glass Bridge, park lifts or ticket availability.",
      },
      {
        label: "How difficult is Zhangjiajie?",
        href: "/journal/how-difficult-is-zhangjiajie",
        description:
          "Understand steps, cableways, public transport and exposure before choosing a route.",
      },
      {
        label: "Explore Zhangjiajie",
        href: "/destinations/zhangjiajie",
        description:
          "Distinguish the pillar park, Tianmen Mountain and separate glass attractions.",
      },
    ],

    faqLimit: 13,

    updatedAt: "2026-11-12",

    inquiryChecklist: [
      "Dates and international flight details",
      "Travelers, rooms and luggage",
      "Walking comfort with stairs and heights",
      "Whether to price the optional glass bridge or river cruise",
      "Guide language and dietary requirements",
    ],

    comparison: {
      title: "Shanghai and peaks or a southwest-China circuit?",
      intro:
        "Choose the city chapters and trip length rather than assuming every Zhangjiajie tour includes the same mountains.",
      columns: ["Decision", "This eight-day route", "11-day southwest route"],
      rows: [
        ["City chapters", "Shanghai", "Chengdu and Chongqing"],
        ["Tianmen Mountain", "Listed in the base itinerary", "Optional paid Day 10 choice"],
        ["Finish", "Return to Shanghai for the final night", "Depart Zhangjiajie"],
      ],
      href: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour",
      linkLabel: "Compare the alternative itinerary",
    },
  },
  {
    slug: "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
    title: "6-Day Xi'an and Beijing Private Tour",
    subtitle:
      "Terracotta Warriors, the Great Wall and two imperial capitals, arranged with private guiding, comfortable rail travel and a pace shaped around your group.",
    duration: "6 Days / 5 Nights",
    route: "Xi'an, Beijing",
    styles: ["First-time China", "Culture", "Luxury", "Family", "Muslim-friendly"],
    hero: {
      eyebrow: "Private two-city China journey",
      image: xianBeijingAsset.hero,
      primary: { label: "Explore Itinerary", href: "#itinerary" },
      secondary: { label: "Request My Tailored Proposal", href: "#enquiry" },
    },
    seo: {
      title: "6-Day Xi'an and Beijing Private Tour",
      description:
        "Visit Xian and Beijing in six days with private guides, five hotel nights and high-speed rail. See the Terracotta Army, Forbidden City and Great Wall. Plan a trip.",
      keywords: [
        "Xian Beijing private tour 6 days",
        "Terracotta Warriors Forbidden City Great Wall itinerary",
        "Xian to Beijing high speed train private tour",
        "six day China history tour",
      ],

      preserveCopy: true,
    },
    overview: {
      pitch:
        "Two of China's most meaningful chapters, privately paced: Xi'an for the Terracotta Warriors and Silk Road heritage, then Beijing for imperial landmarks and the Great Wall.",
      facts: [
        {
          label: "Hotels",
          value: "Two nights Xi’an and three Beijing; five confirmed hotel nights",
        },
        { label: "Pacing", value: "Focused museum and heritage days; rail transfer on Day 3" },
        {
          label: "Suitable for",
          value:
            "Travelers with a short stay who want the Terracotta Army and Beijing’s imperial sites without attempting two major Beijing visits in one day.",
        },
      ],

      practicalities: [
        {
          label: "Best for",
          value:
            "Travelers with a short stay who want the Terracotta Army and Beijing’s imperial sites without attempting two major Beijing visits in one day.",
        },
        {
          label: "Night allocation",
          value:
            "Xi’an 2 nights and Beijing 3 nights: 5 hotel nights. The transfer is on Day 3, leaving Days 4 and 5 for Beijing sightseeing.",
        },
        {
          label: "Route",
          value:
            "Arrive Xi’an; Terracotta Army Day 2; high-speed rail Day 3; Forbidden City Day 4; Mutianyu Day 5; Beijing departure Day 6.",
        },
        {
          label: "Private service",
          value:
            "Local private guides and separate drivers on the listed sightseeing days, plus the booked station, airport and hotel transfers.",
        },
        {
          label: "Rail",
          value:
            "Xi’an–Beijing high-speed rail is part of the selected package, with class, station, time, baggage and fare rules specified before booking.",
        },
        {
          label: "Admissions",
          value:
            "Standard Terracotta Army, Forbidden City and Mutianyu admissions, subject to successful reservation. Other city tickets are included only if named.",
        },
        {
          label: "Meals and options",
          value:
            "Hotel breakfasts on Days 2–6; lunches, dinners, clay workshops and Great Wall cable-car or chairlift tickets are separate unless selected.",
        },
        {
          label: "Walking",
          value:
            "Museum halls, large palace courts, stations and the Wall involve distance, steps and queues. This is a focused cultural route, not a step-free itinerary.",
        },
        {
          label: "Starting-price basis",
          value: getPublishedPriceDisclosure(
            "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
          ),
        },
      ],

      answer:
        "Connect Xi’an and Beijing in six days with five hotel nights: two in Xi’an and three in Beijing. Visit the Terracotta Army, travel north by high-speed rail, then give the Forbidden City and Mutianyu Great Wall separate days. Private local guides, drivers, listed admissions and transfers are included as confirmed. Breakfasts are included; other meals, workshops and optional Great Wall lift tickets are separate.",
    },
    highlights: [
      {
        title: "Meet the Terracotta Warriors with context",
        description:
          "A private guide helps you read the museum as an archaeological story, from the scale of the pits to the individuality of the figures.",
        category: "Culture",
        image: xianBeijingAsset.day02,
      },
      {
        title: "Travel between capitals with ease",
        description:
          "The Xi'an to Beijing high-speed rail journey replaces airport friction with a direct, comfortable transition through China's interior.",
        category: "Culture",
        image: xianBeijingAsset.day04,
      },
      {
        title: "Walk the Great Wall on your terms",
        description:
          "Mutianyu is planned around the season, your preferred start time, walking comfort and whether a cable car makes the day more enjoyable.",
        category: "Nature",
        image: xianBeijingAsset.day06,
      },
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrive in Xi'an",
        destination: "Xi'an",
        summary:
          "Arrive in Xi'an, meet your local representative and settle into the first historical chapter without adding a demanding sightseeing schedule.",
        image: xianBeijingAsset.day01,
        hotel: "Xi'an hotel selected around the Old City and your room requirements",
        meals: ["No meals included today"],
        transport: "Private airport or railway-station transfer",
        activities: [
          {
            time: "Arrival",
            title: "A smooth welcome",
            description:
              "Your driver meets you at the confirmed arrival point and takes you directly to the hotel with luggage space planned in advance.",
          },
          {
            time: "Evening",
            title: "Optional City Wall atmosphere",
            description:
              "If arrival timing and energy allow, take a short orientation walk near Yongning Gate or keep the evening open for rest and a suitable dinner.",
          },
        ],
        guideNote:
          "Arrival timing is kept flexible. The final meeting point and transfer plan are confirmed around your international or domestic connection.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        day: 2,
        title: "The Terracotta Warriors",
        destination: "Xi'an / Lintong",
        summary:
          "Spend the main day with the Terracotta Warriors, using a private guide to bring scale, craft and the First Emperor's world into focus.",
        image: xianBeijingAsset.day02,
        hotel: "Xi'an hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle to and from the museum",
        activities: [
          {
            time: "Morning",
            title: "Pit 1, 2 and 3",
            description:
              "Visit the principal excavation halls in a considered order, with time to look closely at the figures, horses, weapon details and restoration work.",
          },
          {
            time: "Afternoon",
            title: "A flexible return to Xi'an",
            description:
              "Return at a sensible pace, with the option of a quieter museum, hotel rest or a private introduction to local food depending on the group.",
          },
        ],
        guideNote:
          "Museum entry and open exhibition areas depend on the confirmed ticket and current operating arrangements. Your guide checks photography and equipment rules with the museum; follow the notices displayed on the day.",
        coordinates: { latitude: 34.3841, longitude: 109.2785 },
      },
      {
        day: 3,
        title: "High-Speed Rail to Beijing",
        destination: "Xi'an to Beijing",
        summary:
          "Travel from Xi'an to Beijing by the confirmed high-speed train, with private station transfers at both ends. Leave the evening for check-in, dinner and rest; no major Beijing monument is added to this transfer day.",
        image: xianBeijingAsset.day03,
        hotel: "Beijing hotel selected around the historic centre and departure plan",
        meals: ["Breakfast"],
        transport: "Private station transfers and confirmed high-speed rail",
        activities: [
          {
            time: "At the confirmed train time",
            title: "One coordinated rail journey",
            description:
              "Your local teams coordinate hotel departure, station arrival and luggage. The proposal specifies the train and seat class; public station security and boarding rules apply.",
          },
          {
            time: "After arrival",
            title: "Settle into Beijing",
            description:
              "Meet the Beijing driver and transfer to the hotel. A nearby self-guided walk is optional if time and energy allow.",
          },
        ],
        guideNote:
          "The proposal names the train, seat class, stations and private transfers at both ends. Allow time for public security and boarding. Tell us before booking if you need help carrying or lifting bags; porter service or an accompanying guide requires a separate arrangement.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        day: 4,
        title: "The Forbidden City and Beijing at Street Level",
        destination: "Beijing",
        summary:
          "Give the Forbidden City a dedicated sightseeing day, with a focused private interpretation of palace architecture and imperial life. A shorter hutong introduction can follow when time and energy allow. Adjust the day order around confirmed reservations and opening arrangements.",
        image: xianBeijingAsset.day04,
        hotel: "Beijing hotel selected around the historic centre and departure plan",
        meals: ["Breakfast"],
        transport: "Private vehicle, local guide and walking",
        activities: [
          {
            time: "At the confirmed reservation time",
            title: "The Forbidden City",
            description:
              "Follow a selected palace route with time for context and pauses. Admission depends on successful reservation; private guiding does not bypass public security or queues.",
          },
          {
            time: "Remaining service time",
            title: "A shorter neighborhood perspective",
            description:
              "Choose a manageable hutong walk or return to the hotel. The Temple of Heaven is a possible substitute agreed before booking, rather than another major site promised on top.",
          },
        ],
        guideNote:
          "The palace reservation determines the practical day order. If the Beijing visits need to swap, the team checks both attraction tickets and guide availability; a transfer booking does not guarantee museum entry.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        day: 5,
        title: "A Full Day for Mutianyu Great Wall",
        destination: "Beijing / Mutianyu",
        summary:
          "Travel privately to Mutianyu and spend the day on one Great Wall section. Your guide sets a realistic walking route with turn-back points and time for the return drive. The Forbidden City is visited on a different day.",
        image: xianBeijingAsset.day06,
        hotel: "Beijing hotel",
        meals: ["Breakfast"],
        transport: "Private vehicle; cable car or chairlift optional at the Great Wall",
        activities: [
          {
            time: "Morning",
            title: "Private drive to Mutianyu",
            description:
              "The pickup time allows for road conditions and the planned wall route. Admission and required scenic-area transport are specified in your proposal.",
          },
          {
            time: "At the Wall",
            title: "Selected watchtowers and a sensible return",
            description:
              "Walk as far as suits the least-mobile traveler. Cable car, chairlift and toboggan are optional extras unless expressly added; stairs and uneven paving remain even with a lift.",
          },
          {
            time: "Afternoon",
            title: "Return to Beijing",
            description:
              "Allow for lunch at your expense and the return drive. No second major Beijing monument is added after the Wall.",
          },
        ],
        guideNote:
          "The Great Wall involves uneven ground and steps even when assisted access is used. We match the section and timing honestly to the group.",
        coordinates: { latitude: 40.4319, longitude: 116.5704 },
      },
      {
        day: 6,
        title: "A Thoughtful Beijing Departure",
        destination: "Beijing",
        summary:
          "Leave Beijing with a practical airport transfer and enough margin for your confirmed international flight, or extend the journey when you prefer more time.",
        image: xianBeijingAsset.day05,
        meals: ["Breakfast"],
        transport: "Private airport transfer",
        activities: [
          {
            title: "A calm final morning",
            description:
              "Keep the morning open for breakfast, a short neighborhood walk or a late check-out when available and useful.",
          },
          {
            title: "Onward travel support",
            description:
              "Transfer timing is reviewed around the terminal, luggage, traffic and airline check-in requirements before departure.",
          },
        ],
        guideNote:
          "The journey can be extended with additional Beijing nights, a slower Great Wall day or another city when your wider China plans require it.",
        coordinates: { latitude: 40.0799, longitude: 116.6031 },
      },
    ],
    accommodations: [
      {
        name: "Xi'an historic-centre stay",
        destination: "Xi'an, 2 nights",
        description:
          "A well-located hotel selected around access to the Old City, room configuration, breakfast and a comfortable return after the museum day.",
        roomStyle: "Hotel tier and room category confirmed after inquiry",
        highlights: ["Central access", "Breakfast", "Room needs checked"],
        image: xianBeijingAsset.gallery[0],
      },
      {
        name: "Beijing historic-centre stay",
        destination: "Beijing, 3 nights",
        description:
          "A practical, comfortable base selected around the historic centre, airport plan and your preferred balance of convenience and atmosphere.",
        roomStyle: "Hotel tier and room category confirmed after inquiry",
        highlights: ["Well-planned location", "Breakfast", "Private transfers"],
        image: xianBeijingAsset.gallery[3],
      },
    ],
    included: [
      "Five hotel nights: two in Xi'an and three in Beijing, with properties and room categories named in the proposal",
      "Hotel breakfasts on Days 2–6",
      "Private arrival and departure transfers and station transfers at both ends of the rail journey",
      "Local private guide and separate driver for the scheduled sightseeing on Days 2, 4 and 5",
      "Confirmed Xi'an–Beijing high-speed rail; train and seat class stated before booking",
      "Standard admission and required scenic-area transport for the listed confirmed visits; Great Wall lifts are extra unless added",
      "Dietary and prayer-timing planning when shared before confirmation; unlisted meals are separate",
      "Local planning support and no compulsory shopping stops",
    ],
    excluded: [
      "International flights",
      "China visa costs or documentation services unless stated",
      "Meals, drinks and optional experiences not listed in the final proposal",
      "Travel insurance, medical costs and personal expenses",
      "Any service not confirmed in the final written proposal",
    ],
    optionalExperiences: [
      {
        title: "Muslim-friendly dining and heritage",
        description:
          "Plan suitable halal restaurants, local Muslim food culture, prayer timing and restaurant locations around the day rather than leaving dining to chance.",
        badges: ["Muslim-friendly", "Food"],
        image: xianBeijingAsset.gallery[23],
      },
      {
        title: "A slower Great Wall day",
        description:
          "Adjust the Wall section, cable-car option, start time and rest windows around walking comfort, weather and photography priorities.",
        badges: ["Flexible pace", "Private"],
        image: xianBeijingAsset.day06,
      },
      {
        title: "An extra Beijing chapter",
        description:
          "Add a night for the Summer Palace, a deeper hutong day, a more spacious Forbidden City visit or a gentler departure.",
        badges: ["Extendable", "Local life"],
        image: xianBeijingAsset.gallery[0],
      },
    ],
    transportation: {
      title: "The transition between cities is part of the design.",
      description:
        "Private transfers, confirmed rail details and local support keep the journey clear between Xi'an's heritage and Beijing's imperial scale.",
      items: [
        {
          label: "Xi'an",
          value: "Private city and airport transfers",
          helper: "Vehicle size and luggage space confirmed around your group.",
        },
        {
          label: "Intercity rail",
          value: "Xi'an to Beijing high-speed rail",
          helper: "Train number, seat class and station transfers confirmed in writing.",
        },
        {
          label: "Beijing",
          value: "Private touring and airport support",
          helper: "Great Wall access and departure timing planned by date and comfort.",
        },
      ],
    },
    routeMap: {
      title: "Two imperial capitals, privately paced.",
      description:
        "Two nights in Xi'an allow a focused Terracotta Army visit before a train transfer to three nights in Beijing. The Forbidden City and Mutianyu Great Wall each have their own sightseeing day.",
      stops: [
        {
          name: "Xi'an",
          days: "Days 1–3",
          description:
            "Arrival and Terracotta Army, with a short Old City introduction only when practical.",
          coordinates: { latitude: 34.3416, longitude: 108.9398 },
        },
        {
          name: "Beijing",
          days: "Days 3–6",
          description:
            "Rail arrival, a separate Forbidden City day, a full Mutianyu day and departure.",
          coordinates: { latitude: 39.9042, longitude: 116.4074 },
        },
      ],
    },
    gallery: [
      xianBeijingAsset.hero,
      xianBeijingAsset.day01,
      xianBeijingAsset.day02,
      xianBeijingAsset.day03,
      xianBeijingAsset.day04,
      xianBeijingAsset.day05,
      xianBeijingAsset.day06,
      ...xianBeijingAsset.gallery,
    ],
    faqs: [
      {
        question: "What does this private tour cost, and what is the starting-price basis?",
        answer: getPublishedPriceDisclosure(
          "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
        ),
      },
      {
        question: "Can the Forbidden City and Great Wall be visited on separate days?",
        answer:
          "Yes. Stay two nights in Xi'an and three in Beijing, travel by train on Day 3, then give the Forbidden City and Mutianyu separate days. Days 4 and 5 can swap around confirmed reservations. Each major visit has room for its road transfers, public entry procedures and a route suited to your group.",
      },
      {
        question: "How are the five hotel nights split between Xi'an and Beijing?",
        answer:
          "Two nights in Xi'an and three in Beijing. Xi'an has an arrival day and a dedicated Terracotta Army day before the Day 3 train. Beijing has two complete sightseeing days and departure on Day 6. Add a Xi'an night if you want a separate full day for the City Wall, food or additional museums.",
      },
      {
        question: "Are high-speed rail tickets and station transfers included?",
        answer:
          "Yes, for the sector specified in the proposal. It names the train, class, departure and arrival stations, fare conditions and local transfers. A transfer day still includes security, boarding and luggage handling; it is not automatically a free afternoon of guided sightseeing. International flights remain separate.",
      },
      {
        question: "Does the Terracotta Army visit include an archaeologist?",
        answer:
          "The standard service is a private local guide and regular museum admission. A specialist researcher, curator or restricted-area visit is not included. Tell us your historical interests so interpretation can be focused, and ask separately if you want a particular specialist to be checked.",
      },
      {
        question: "Are Forbidden City tickets guaranteed if we book a private tour?",
        answer:
          "No. The museum’s date-specific reservation and entry rules apply to private tours too. The Beijing days can swap where practical. The proposal should explain what is offered if tickets cannot be secured. Private guiding does not bypass security or create special ticket access.",
      },
      {
        question: "Are Great Wall cable-car tickets included in this price?",
        answer:
          "Not automatically. Admission and the required scenic-area transport are distinguished from optional mountain lifts. Select your ascent and descent before booking; the proposal lists any cable-car or chairlift ticket and charge. Even with a lift, Wall steps and uneven ground remain.",
      },
      {
        question: "Can we add Xi’an City Wall, a clay workshop or a halal meal?",
        answer:
          "Request the specific activity before confirmation. It may fit around the museum or require extra time, and its ticket, host, transport and meal cost must be stated. A Muslim Quarter walk does not verify every restaurant’s ingredients or certification. These extras are not bundled merely because Xi’an is on the route.",
      },
      {
        question: "Is six days enough for a first China visit?",
        answer:
          "It is enough for this focused two-city framework if you accept the travel day and a selective itinerary. It does not cover Shanghai, pandas or a full independent Xi’an city day. The ten-day three-city route is better if your available time allows wider coverage without adding multiple major visits to each day.",
      },
      {
        question: "Can we start in Beijing and finish in Xi’an?",
        answer:
          "Ask for a reversed proposal. Rail timing, hotel nights, arrival and departure gateways and attraction reservations must be redesigned together. Do not book international flights on the assumption that simply reading this itinerary backwards preserves the same availability or price.",
      },
      {
        question: "Is this suitable for older parents?",
        answer:
          "Suitability depends on walking, balance, stamina and the rail connection, not age alone. Share actual support needs before booking. The itinerary uses private transfers and separate major Beijing days, but does not include a porter, personal care, wheelchair equipment or a guaranteed short daily walking limit.",
      },
    ],
    related: {
      useListedTours: true,
      tours: [
        {
          title: "Private Terracotta Warriors Tour from Xi'an",
          description:
            "Keep only the Terracotta Army day if you already have Xi’an accommodation and onward travel.",
          tags: ["Culture", "Family", "Photography"],
          image: {
            src: "/tours/private-xian-terracotta-warriors-day-tour/01-xian-terracotta-warriors.webp",
            alt: "Rows of life-sized Terracotta Warriors inside the Qin emperor's mausoleum pits in Xi'an",
            width: 1600,
            height: 2400,
          },
          route: "Xi'an hotel · Terracotta Warriors · Xi'an Old City · Xi'an hotel",
          duration: "1 day · private · about 8 hours",
          href: "/tours/private-xian-terracotta-warriors-day-tour",
        },
        {
          title: "10-Day Private Tour of Beijing, Xi'an and Shanghai",
          description:
            "Allow ten days for Beijing, Xi’an and Shanghai, with nine hotel nights and one independent day.",
          tags: ["First-time China", "Culture", "Photography"],
          image: {
            src: "/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.jpg",
            alt: "The Great Wall winding across mountain ridges near Beijing in warm evening light",
            width: 1920,
            height: 1080,
          },
          route: "Beijing · Xi'an · Shanghai",
          duration: "10 days / 9 nights",
          href: "/tours/beijing-xian-shanghai-private-10-day-tour",
        },
      ],

      destinations: [
        {
          name: "Xi'an",
          description:
            "Terracotta Warriors, ancient city walls, Silk Road history and Muslim food culture.",
          image: {
            src: "/home/xian-terracotta-army.webp",
            alt: "Terracotta Army figures in Xi'an",
            width: 1400,
            height: 927,
            objectPosition: "50% 48%",
          },
          href: "/destinations/xian",
        },
        {
          name: "Beijing",
          description:
            "The Forbidden City, hutongs, imperial parks and the Great Wall beyond the city.",
          image: {
            src: "/home/editorial/great-wall-private-china-travel.webp",
            alt: "A traveler looking across the Great Wall near Beijing",
            width: 1086,
            height: 1448,
            objectPosition: "50% 44%",
          },
          href: "/destinations/beijing",
        },
      ],
    },
    inquiry: {
      emailHref:
        "mailto:chinaprimedmc@gmail.com?subject=6-Day%20Xi%27an%20%26%20Beijing%20Private%20Tour%20Quotation&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20learn%20more%20about%20the%206-day%20Xi%27an%20and%20Beijing%20private%20tour.%0A%0ATravelers%3A%0ADates%3A%0AHotel%20preference%3A%0ADietary%20or%20prayer%20requirements%3A%0AQuestions%3A%0A",
      whatsappHref:
        "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20tailored%20proposal%20for%20the%206-day%20Xi%27an%20and%20Beijing%20private%20tour.%20I%27m%20interested%20in%20the%20Terracotta%20Warriors%2C%20the%20Great%20Wall%20and%20Muslim-friendly%20planning.",
      scheduleCallHref: "tel:+8618027438191",
      defaultMessage:
        "I am interested in the 6-Day Xi'an & Beijing Private Tour. Please recommend the right hotels, rail plan, daily pace and dining arrangements for my group.",
    },

    planningResources: [
      {
        label: "Terracotta Army: official museum ticketing",
        href: "https://www.bmy.com.cn/jingtai/bmyweb/ticketing.html",
        officialPublisher: "Emperor Qinshihuang’s Mausoleum Site Museum",
        description:
          "Consult reservation and entry information for the booked date. A museum ticket does not include private guiding or workshop access.",
      },
      {
        label: "The Palace Museum: official visitor information",
        href: "https://intl.dpm.org.cn/visit.html",
        officialPublisher: "The Palace Museum",
        description:
          "Check reservation, identification and visitor notices for your travel date. Private guiding does not bypass museum admission rules.",
      },
      {
        label: "Mutianyu Great Wall: official visitor information",
        href: "https://www.mutianyugreatwall.com/",
        officialPublisher: "Mutianyu Great Wall scenic area",
        description:
          "Check visitor notices and mountain-transport operation. Admission, shuttle and lift tickets are distinct services; the written proposal specifies which are included.",
      },
      {
        label: "China Railway 12306: passenger information",
        href: "https://www.12306.cn/en/faq.html",
        officialPublisher: "China Railway 12306",
        description:
          "Check accepted identification, ticketing, boarding and baggage guidance. The train, class, seat and transfer arrangements are confirmed for your dates.",
      },
    ],

    faqLimit: 13,

    updatedAt: "2026-11-12",

    inquiryChecklist: [
      "Dates and arrival / departure gateways",
      "Travelers, rooms and hotel preference",
      "Preferred train class and luggage",
      "Great Wall lift preferences and walking comfort",
      "Guide language and dietary requirements",
    ],

    comparison: {
      title: "Two capitals or three cities?",
      intro:
        "This six-day route focuses on northern heritage. Add Shanghai and more time when the modern-city chapter matters.",
      columns: ["Decision", "This six-day route", "10-day classic route"],
      rows: [
        ["Nights", "Xi’an 2 and Beijing 3", "Beijing 4, Xi’an 2 and Shanghai 3"],
        ["Direction", "Arrive Xi’an; depart Beijing", "Arrive Beijing; depart Shanghai"],
        [
          "Great Wall and palace",
          "Separate full sightseeing days",
          "Separate full sightseeing days",
        ],
      ],
      href: "/tours/beijing-xian-shanghai-private-10-day-tour",
      linkLabel: "Compare the alternative itinerary",
    },
  },
];

export const tours: Tour[] = baseTours;

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function getTourSlugs() {
  return tours.map((tour) => tour.slug);
}
