import type { ExpandedDestination } from "./types";

export const shenzhenGuide: ExpandedDestination = {
  id: "shenzhen",
  name: "Shenzhen",
  region: "south",
  kicker: "Modern China, design & a district that fits",
  description:
    "Explore Shenzhen through design, contemporary city life and a thoughtfully chosen waterfront or business base, with private visits matched to real access and your agenda.",
  stay: "2–4 nights; agenda-led for business",
  bestFor: "Modern China and business with leisure",
  interests: ["city", "food", "heritage"],
  relatedDestinationIds: ["dongguan", "huizhou", "hong-kong", "guangzhou", "shanghai"],
  assets: {
    hero: {
      src: "/destinations/planning/shenzhen.svg",
      alt: "Shenzhen hotel-area planning diagram comparing Futian, Nanshan and Shekou, and Bao’an; schematic rather than a map or photograph",
      width: 1600,
      height: 1200,
    },
    gallery: [
      {
        src: "/destinations/planning/shenzhen.svg",
        alt: "Shenzhen hotel-area planning diagram comparing Futian, Nanshan and Shekou, and Bao’an; schematic rather than a map or photograph",
        width: 1600,
        height: 1200,
      },
    ],
  },
  planning: {
    title: "Shenzhen Travel Guide: Districts, Design & Private Tours",
    seoTitle: "Shenzhen Travel Guide: Districts & Private Tours",
    seoDescription:
      "Choose a Shenzhen base for meetings, design or waterfront time. Compare Futian, Nanshan and Shekou, transfer gateways and a tailor-made Guangzhou–Shenzhen trip.",
    answer:
      "Shenzhen is a useful choice for travelers interested in contemporary China: design, business, technology and the everyday life of a fast-changing city. Its attractions and appointments are spread across different districts, so a strong visit begins with one or two clear interests. A well-located hotel and realistic access arrangements matter more than collecting technology-themed stops that may not be open to visitors.",
    stayAnswer:
      "Two nights give one full day for a focused introduction or a set of appointments in a manageable area. Three nights allow two full days, with time for different districts or a waterfront break. Four nights can suit a slower stay or a fuller business agenda. Treat a one-night stop within a combined Guangzhou route as a brief chapter, not several days of Shenzhen sightseeing.",
    hotelAnswer:
      "Choose Futian for many central business addresses and civic or cultural visits, Nanshan for appointments and interests in the western part of the city, or Shekou for a particular waterfront stay and dining setting. Bao’an may serve an airport or nearby business purpose. Check the actual office, venue and departure point; the district name alone is too broad to predict a convenient journey.",
    sightseeingQuestion: "Should you stay in Futian, Nanshan or Shekou?",
    sightseeingAnswer:
      "Start with the addresses you will use most. Futian can suit a central business-and-culture plan; Nanshan can make sense for western districts and selected technology interests; Shekou may be appealing when waterfront hotel time and nearby dining are priorities. Compare the exact properties and transfers. Moving hotels after every appointment usually costs more time than it saves on a short trip.",
    visitorResources: [
      {
        label: "Shenzhen municipal government, English portal",
        href: "https://www.sz.gov.cn/en_szgov/",
        scope:
          "City background and official public information. It does not grant company admission, guarantee autonomous-vehicle availability or confirm your individual entry eligibility.",
      },
      {
        label: "Shenzhen Bao’an International Airport",
        href: "https://www.szairport.com/",
        scope:
          "Airport passenger information and current notices. Use the actual ticket and terminal instructions for your departure; airport information does not establish Hong Kong boundary transfer permissions.",
      },
    ],
    serviceScope:
      "We organize Shenzhen around your actual addresses, hotel and interests, with private transfers, guiding or bilingual support as agreed. A business itinerary specifies the support needed for each appointment and the vehicle service window. Company access, factory visits, technical interpretation and public smart-mobility experiences require their own confirmation. We keep a practical alternative when an optional visit or service cannot operate.",
    routeAdvice:
      "Our flexible Guangzhou and Shenzhen business journey combines the cities when your agenda benefits from both. The four-day hotel example gives Shenzhen one night after two in Guangzhou; the usual four-to-seven-day planning range can be adjusted around appointments and flights. If design, food and city life are your main interests, discuss a leisure-focused stay instead of assuming the business example is already the right itinerary.",
    practicalPlanning: {
      timing:
        "Group visits by district and leave working time between appointments. A technology showroom, waterfront walk and meeting on opposite sides of the city can consume a day in transfers. Pick one meaningful innovation or cultural chapter with confirmed access rather than building a schedule from a list of famous company names.",
      walking:
        "Business districts, stations and exhibition venues can involve long approaches, queues and standing even with private transfers. Waterfront walks vary in length and shade, while older urban areas can have narrower lanes. Describe walking tolerance and the need for seated breaks before choosing the route or hotel.",
      cost: "Compare hotel dates, district, room setup, vehicle hours, interpretation level and the actual transfer gateway. Private company appointments or specialist interpretation may add costs beyond a city guide. Hong Kong boundary service, extra service hours and optional experiences must be stated in the proposal rather than assumed from a combined-city title.",
    },
    attractions: [
      "OCT-LOFT creative area",
      "Huaqiangbei electronics district",
      "Futian civic and business districts",
      "Nanshan",
      "Shekou waterfront",
      "Shenzhen design and contemporary culture",
    ],
    stays: [
      {
        label: "1 night: a short city chapter",
        advice:
          "Useful within a combined business route, with limited time between arrival and departure. Keep priorities selective and do not count it as a complete two-day visit.",
      },
      {
        label: "2 nights: one focused full day",
        advice:
          "Choose a business cluster or an introduction to modern city life in a manageable area. Leave the departure route clear.",
      },
      {
        label: "3–4 nights: separate your interests",
        advice:
          "Use different days for appointments and culture, or distinct districts. Add hotel and waterfront time if that is part of the value you want from the stay.",
      },
    ],
    hotelAreas: [
      {
        name: "Futian",
        advice:
          "Consider for central business, civic and cultural addresses. Check whether the hotel actually serves your meetings and railway departure, not just whether it is described as central.",
      },
      {
        name: "Nanshan and Shekou",
        advice:
          "Consider the precise western district or waterfront setting you want. Nanshan covers a broad area, and a Shekou hotel is not automatically convenient for every technology appointment. Check the daily road plan and evening dining.",
      },
      {
        name: "Bao’an and the airport side",
        advice:
          "Choose when the airport or nearby appointments justify the base. An early flight can make convenience valuable, but compare what it means for the rest of the stay before spending every night far from your main interests.",
      },
    ],
    tradeoffs: [
      {
        title: "Technology interest needs a real visit plan",
        advice:
          "Establish whether the proposed experience is a public exhibition, a retail showroom, a privately approved company visit or something else. A guide’s availability does not establish corporate access. Ask what you will learn and what alternative serves the same interest if access falls through.",
      },
      {
        title: "Public smart mobility is not a private vehicle service",
        advice:
          "Autonomous-vehicle rides, where available, can depend on operating zone, accounts, eligibility and current service. Treat them as an optional experience and confirm the requirements. Your essential transfers should have their own dependable arrangement.",
      },
      {
        title: "A Hong Kong connection needs its own decision",
        advice:
          "Compare the actual airport or station, border process, luggage and required documents. A mainland driver and vehicle cannot simply be assumed to continue across the boundary. Decide the permitted transfer method before fixing a tight appointment or flight connection.",
      },
      {
        title: "Build leisure into the geography",
        advice:
          "A good restaurant or waterfront walk near your day’s final commitment can be more rewarding than a distant famous stop. Choose an evening the group can enjoy without another long return journey, especially after meetings or an exhibition.",
      },
    ],
    products: [
      {
        slug: "guangzhou-shenzhen-tailor-made-business-tour-4-day",
        label: "Explore the tailor-made Guangzhou & Shenzhen business journey",
        reason:
          "The journey coordinates both cities around the actual agenda, including private transport and agreed language support. Shenzhen has one night in the four-day hotel example; add time if several appointments, a design interest or waterfront leisure matter. The selected innovation chapter, service hours and any boundary transfer must be confirmed before booking.",
        comparison: {
          bestFor:
            "Business travelers wanting both cities coordinated around confirmed appointments.",
          localPlan:
            "One Shenzhen night in the four-day hotel example; the final allocation follows your agenda.",
          importantChoice:
            "Company access, factory visits, Robotaxi operation and Hong Kong boundary arrangements are not automatic.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "dongguan",
        advice:
          "Dongguan offers a different garden, Humen history or village chapter alongside separately confirmed business interests. Name the actual districts, host addresses and ticketed gateways before choosing a shared base or additional nights. A regional technology theme does not supply private campus access or supplier verification.",
      },
      {
        slug: "huizhou",
        advice:
          "Huizhou adds a separately chosen lake-city, Luofu Mountain or Huidong coastal chapter. Compare the complete gateway road and exact room rather than assume all Huizhou hotels serve the beach. Existing Shenzhen products do not automatically include the extension, resort services or sea activities.",
      },
      {
        slug: "hong-kong",
        advice:
          "Hong Kong adds distinct neighborhoods, art and food beyond a gateway transfer. Use its own guide to compare Island and Kowloon stays, exact stations, separate entry eligibility and local services. A Shenzhen vehicle booking does not automatically include an eligible through car, Hong Kong guiding or a city sightseeing stay.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou brings Cantonese food, trading history and exhibition commitments. Link the cities when the agenda supports the move, and plan the intercity transfer between the actual last and first addresses.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai adds another perspective on modern China and design. Compare the full flight or rail journey and hotel transfers before deciding whether both cities add enough distinct value to the trip.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Autumn and winter often offer more comfortable outdoor conditions than hot, humid summer days, though rain and cooler spells still occur. Summer storms can disrupt plans. Business and exhibition dates may determine timing; keep outdoor alternatives and verify current conditions rather than relying only on a seasonal label.",
    orientation:
      "Shenzhen is a broad city with different centers of business, culture and waterfront life. Futian, Nanshan, Shekou, Bao’an, the airport and the railway stations should be treated as separate planning points. Match the base to your actual addresses and interests, then select visits within that geography.",
    experiences: [
      "Explore OCT-LOFT for creative spaces or Huaqiangbei for the electronics trade; choose your interest before choosing the district",
      "Arrange one relevant innovation or business-context visit with access confirmed",
      "Make time for a suitable waterfront walk and meal rather than another distant stop",
    ],
    planningNotes: [
      "Use exact addresses to choose the hotel and daily service window",
      "Confirm whether an innovation visit is public or privately approved",
      "Treat Hong Kong gateways and mainland transfers as distinct arrangements",
    ],
    arrival:
      "Shenzhen Bao’an International Airport and the city’s railway stations serve different routes. Shenzhen North, Futian and other stations are not interchangeable pickup points. Confirm the ticket and final hotel. If arriving through Hong Kong, review the boundary transfer method and applicable entry requirements separately.",
    gettingAround:
      "The metro can suit independent journeys when the stations and walking work for you. A private vehicle helps with luggage, appointments and separated districts, but service hours and approved pickup points still apply. Walking between nearby stops can be more sensible than repeatedly moving a vehicle.",
    stayStrategy:
      "For a short stay, use one base that serves the largest concentration of appointments or interests. Compare room comfort, breakfast, workspace and luggage access as well as category. A waterfront hotel is valuable when you can spend time there, not merely when it looks appealing in a photograph.",
    firstTimerNote:
      "A technology-themed itinerary is not proof of access to a particular company, factory or experimental service. Ask what is confirmed and how it relates to your interests. Keep optional experiences separate from the essential appointments and transfers.",
    faqs: [
      {
        question: "Is Shenzhen worth visiting for leisure?",
        answer:
          "It can be, especially if design, electronics trading or contemporary urban life interests you. OCT-LOFT, Huaqiangbei and the Shekou waterfront offer different perspectives. With limited time on a first China trip, compare those interests with Guangzhou’s Cantonese food and historic neighborhoods before allocating nights.",
      },
      {
        question: "How many days do I need in Shenzhen?",
        answer:
          "One full day can introduce a focused area, usually with two nights. Two full days, commonly with three nights, allow different districts or interests. A business visit follows its confirmed appointments rather than a fixed sightseeing duration.",
      },
      {
        question: "Is Futian or Nanshan better for a first visit?",
        answer:
          "Choose by your actual appointments and interests. Futian can suit a central business-and-culture plan; Nanshan can serve western districts and selected technology interests. Compare precise hotel and visit addresses before deciding.",
      },
      {
        question: "Can a private Shenzhen tour include company or factory visits?",
        answer:
          "Only when the host organization approves the visit and the terms are confirmed. Public showrooms, private appointments and factory assessments are different services. Neither city guiding nor a technology-themed itinerary guarantees access.",
      },
      {
        question: "Is a Robotaxi ride guaranteed?",
        answer:
          "No. Public operation can depend on date, zone, accounts, eligibility and service conditions. Treat it as an optional experience and keep essential private transport separately arranged.",
      },
      {
        question: "Can I arrive in Shenzhen through Hong Kong?",
        answer:
          "It can be planned around the actual gateway, documents, luggage and permitted transfer method. Verify current entry eligibility and boundary arrangements. A standard mainland vehicle is not automatically authorized to cross.",
      },
      {
        question: "Does the Guangzhou–Shenzhen tour give several days in Shenzhen?",
        answer:
          "The four-day hotel example includes one Shenzhen night. The journey is flexible, commonly planned over four to seven days, and your final allocation follows the agenda. Ask for more Shenzhen time if several appointments or leisure interests matter.",
      },
    ],
    culturalStory: {
      title: "Look beyond the company names",
      paragraphs: [
        "OCT-LOFT and Huaqiangbei offer distinct introductions to contemporary Shenzhen. OCT-LOFT is a former industrial area adapted for creative uses; check which exhibitions and spaces are open during your stay. Huaqiangbei is a working electronics trading district. Browsing its shops can reveal the variety of that trade, but is not a factory tour, product authentication service or sourcing assessment. Choose the experience that matches your curiosity.",
        "Different areas reveal different parts of the city. A business cluster, waterfront neighborhood and older urban community should not be collapsed into one image of “the future.” Choose the perspective that interests you and respect the privacy of workplaces, residents and people photographed along the way.",
      ],
    },
    foodStory: {
      title: "Let the city’s range work for your group",
      paragraphs: [
        "Shenzhen’s dining reflects people arriving from many parts of China, alongside Cantonese and regional southern food. This gives a private group useful choices, but a cuisine label does not establish dietary suitability. Discuss ingredients, cooking oils, stocks and shared preparation before reserving a meal.",
        "For a working trip, plan meals around the day’s final address and your preferred level of formality. A private room, suitable menu and reliable timing may be more useful than a distant celebrated venue. Leave a relaxed waterfront or neighborhood dinner for a day when the schedule allows it.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle in near tomorrow’s priorities",
        description:
          "Transfer from the exact terminal or station and keep the first evening local. Confirm the next pickup and appointment addresses.",
      },
      {
        day: "Full day 1",
        title: "One district and a clear purpose",
        description:
          "Protect fixed meetings, or choose a focused contemporary-city introduction. Add an innovation visit only when its access and relevance are confirmed.",
      },
      {
        day: "Optional full day",
        title: "A different perspective",
        description:
          "With another night, choose design, a different district or waterfront time. Avoid adding a distant area solely to make the day appear fuller.",
      },
      {
        day: "Departure",
        title: "Use the correct gateway",
        description:
          "Leave enough time for the actual airport or station and any boundary process. Do not attach a tight final appointment to an uncertain cross-boundary connection.",
      },
    ],
  },
};
