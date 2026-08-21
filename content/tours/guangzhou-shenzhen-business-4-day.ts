import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

// Photography is intentionally pending. The shared pending-visual treatment shows
// the real route without presenting an unrelated image as part of this product.
const pendingImage: MediaAsset = {
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "Photography for the Guangzhou and Shenzhen business journey is being prepared",
  width: 1920,
  height: 1080,
};

const hotelByPlace = {
  guangzhou: "Selected premium Guangzhou business hotel · 2 nights · two rooms",
  shenzhen: "Selected premium Shenzhen business hotel · 1 night · two rooms",
};

export const guangzhouShenzhenBusiness4DayTour: Tour = {
  slug: "guangzhou-shenzhen-tailor-made-business-tour-4-day",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-08-21",
  title: "Four Days, Built Around Your Business",
  subtitle:
    "Send us the flights, meetings and exhibition hours that are already fixed. We arrange Guangzhou, Shenzhen, hotels, private transport, bilingual support and meaningful time between them around your agenda.",
  duration: "4 Days / 3 Nights",
  route: "Guangzhou, Shenzhen",
  styles: ["Business", "Luxury", "Culture", "Food"],
  hero: {
    eyebrow: "AVIORA tailor-made Greater Bay business journey",
    image: pendingImage,
    primary: { label: "Build Around My Schedule", href: "#inquiry" },
    secondary: { label: "See the Flexible Framework", href: "#itinerary" },
  },
  seo: {
    title: "4-Day Guangzhou & Shenzhen Tailor-Made Business Tour",
    description:
      "A private 4-day Guangzhou and Shenzhen business tour built around your meetings, flights and exhibition dates, with premium hotels, private transport, bilingual support and flexible cultural or technology experiences.",
    keywords: [
      "Guangzhou Shenzhen business tour",
      "4 day Greater Bay Area itinerary",
      "Canton Fair private tour",
      "Guangzhou business travel support",
      "Shenzhen technology tour",
      "tailor made China business trip",
      "bilingual business assistant Guangzhou",
      "private business tour China",
    ],
  },
  overview: {
    pitch:
      "This is not a fixed sightseeing package. Share what cannot move: flights, meetings, exhibition hours, supplier visits and preferred cities. AVIORA then builds the rooms, vehicles, bilingual support, meals and optional Guangzhou or Shenzhen experiences around those commitments. The four-day plan below is a useful starting framework, and every block can move, shorten or disappear.",
    facts: [
      {
        label: "Duration",
        value: "4 days / 3 nights",
        helper: "Extendable to two, five or six days without changing the planning method.",
      },
      {
        label: "Best For",
        value: "Executives, founders, buyers and small business teams",
        helper: "Especially useful when part of the schedule is already confirmed independently.",
      },
      {
        label: "Schedule",
        value: "Your fixed commitments come first",
        helper:
          "Meetings, fair hours and flights are placed before any cultural or technology block.",
      },
      {
        label: "Hotels",
        value: "Premium business hotels selected by meeting geography",
        helper:
          "Two rooms for four guests; exact hotels are named after the working locations are known.",
      },
      {
        label: "Private Service",
        value: "One China-based operating team",
        helper: "Airport, vehicle, bilingual support and confirmed bookings are held together.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Your Agenda",
      days: "Before arrival",
      title: "Begin with what is already fixed, not with our sightseeing list",
      description:
        "Flights, exhibition sessions, meetings and supplier addresses are plotted first. We check airport, city and transfer logic before proposing hotels or adding a single optional experience.",
      see: "A clear operating plan showing what is fixed, how long each transfer needs and which periods remain genuinely usable.",
      do: "Send confirmed and tentative commitments in any format; AVIORA turns them into one workable sequence.",
      feel: "That the trip is being designed around the reason you are traveling, rather than competing with it.",
    },
    {
      location: "Guangzhou Life",
      days: "Flexible half day",
      title: "Understand family culture through a market, a kitchen and a real table",
      description:
        "Shop for seasonal ingredients with a local cultural host, prepare a Cantonese meal and use the table to discuss family roles, hospitality and the historical influence of the Twenty-Four Filial Exemplars, including how people interpret those stories today.",
      see: "A working neighborhood market, the ingredients behind Cantonese home cooking and family values expressed through ordinary food rituals.",
      do: "Choose ingredients, cook several dishes and join a contextual conversation rather than watch a staged cooking demonstration.",
      feel: "That traditional ideas are being explained with nuance, not presented as a rulebook for modern Chinese life.",
    },
    {
      location: "Guangzhou Business",
      days: "Your priority block",
      title: "Use the city for the meeting, fair or supplier task that brought you here",
      description:
        "The day can hold Canton Fair attendance, a confirmed exhibition, your own meetings, a market study or a pre-arranged supplier visit. Bilingual support is briefed around your sector and required level of involvement.",
      see: "The exhibition halls, commercial district, market or supplier setting relevant to your stated objective.",
      do: "Meet, compare, record and move through the day with transport and language support already coordinated.",
      feel: "That logistics remain in the background while the useful conversations stay in front of you.",
    },
    {
      location: "Shenzhen",
      days: "Flexible full or half day",
      title: "See an operating innovation city, not a collection of technology props",
      description:
        "Select a confirmed company showroom, innovation district, smart-mobility chapter or manufacturing context that matches your interests. A Robotaxi ride may be attempted only where current operating zones, account access and availability make it practical.",
      see: "Modern business districts, rapid urban infrastructure and one date-confirmed technology or industry setting.",
      do: "Continue meetings or add a focused innovation chapter, with the private vehicle remaining the dependable transport plan.",
      feel: "That the technology is connected to how the city works rather than added merely for novelty.",
    },
    {
      location: "Departure",
      days: "Final day",
      title: "Leave from the airport that fits the actual next commitment",
      description:
        "Guangzhou, Shenzhen and Hong Kong departures create very different transfer requirements. The final meeting, luggage, border logic and airport buffer are designed backward from the ticket you actually hold.",
      see: "One final schedule with the correct terminal, pickup point, luggage plan and realistic traffic or border allowance.",
      do: "Use remaining time for a meeting, a light cultural block or simply uninterrupted work before departure.",
      feel: "That the journey closes without sacrificing the last useful hours or gambling with the flight.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Agenda-First Standard",
    title: "Customization is an operating method, not an open-ended promise.",
    description:
      "We separate fixed commitments, movable priorities and optional experiences before pricing. This keeps the journey flexible while making responsibility, service hours and costs clear.",
    items: [
      {
        label: "01 · Fixed first",
        value: "Flights, fairs and confirmed meetings anchor the plan",
        helper:
          "We do not place sightseeing where it creates a late arrival or weakens a business priority.",
      },
      {
        label: "02 · Address check",
        value: "Every important location is mapped before hotels are proposed",
        helper:
          "Guangzhou and Shenzhen are large; a prestigious hotel in the wrong district can waste hours.",
      },
      {
        label: "03 · Support level",
        value: "Guide, interpreter or business assistant roles are stated clearly",
        helper:
          "Sector knowledge, meeting participation and translation expectations are confirmed before matching personnel.",
      },
      {
        label: "04 · Movable modules",
        value: "Culture, food and technology fit the remaining windows",
        helper:
          "Each optional block can be moved, shortened, replaced or removed without breaking the core trip.",
      },
      {
        label: "05 · Reliable transport",
        value: "A suitable private MPV is the base plan",
        helper:
          "A specific vehicle model is guaranteed only when named in the written proposal; service hours are confirmed, not described as unlimited.",
      },
      {
        label: "06 · Written handover",
        value: "One final operating itinerary for guests and suppliers",
        helper:
          "Pickup points, contacts, meeting addresses, tickets and confirmed boundaries are kept in one version.",
      },
    ],
    note: "Exhibition badges remain subject to the organizer's eligibility, application and collection rules. Company visits, Robotaxi rides and named vehicles are only included when confirmed in writing. Any traditional Chinese medicine consultation is educational unless separately provided as a licensed medical service; no diagnosis or health outcome is promised.",
  },
  highlights: [
    {
      title: "A schedule built from your immovable commitments",
      description:
        "Flights, fairs, meetings and supplier locations determine the route. Optional experiences use the remaining time instead of forcing the business trip to follow a tour template.",
      category: "Business",
      image: pendingImage,
    },
    {
      title: "Guangzhou family culture through food and conversation",
      description:
        "Market shopping, shared cooking and a carefully hosted discussion make family ethics and the Twenty-Four Filial Exemplars understandable without reducing modern China to an old moral text.",
      category: "Culture",
      image: pendingImage,
    },
    {
      title: "Shenzhen innovation matched to a real interest",
      description:
        "Choose smart mobility, an innovation district, a confirmed showroom or an industry context, with honest boundaries around access and date-specific availability.",
      category: "Business",
      image: pendingImage,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive ready, with the first commitment already protected",
      destination: "Guangzhou",
      summary:
        "Meet the confirmed flight or rail arrival, manage luggage and move directly to a hotel chosen around the next day's geography. Payments, connectivity, documents and the operating schedule are checked only to the level you need. Dinner can be hosted, reserved privately or left completely free.",
      image: pendingImage,
      hotel: hotelByPlace.guangzhou,
      meals: ["Arrival dinner when selected in the written proposal"],
      transport:
        "Private Guangzhou airport or railway transfer; vehicle size matched to party and luggage",
      activities: [
        {
          title: "Door-to-room arrival",
          description:
            "Terminal or station, pickup point, luggage, hotel access and room readiness are coordinated against the actual arrival.",
        },
        {
          title: "Only the useful briefing",
          description:
            "Review the next pickup, documents, contacts and any last schedule change without turning arrival night into a seminar.",
        },
      ],
      guideNote:
        "The starting city can be Shenzhen or Hong Kong instead. The final route and price are rebuilt around the actual arrival.",
      coordinates: { latitude: 23.1291, longitude: 113.2644 },
    },
    {
      day: 2,
      title: "Your Guangzhou priorities, plus a culture module that can move around them",
      destination: "Guangzhou",
      summary:
        "Use the principal hours for the Canton Fair, another exhibition, your own meetings, a supplier visit or a market study. When the schedule allows, enter a neighborhood market with a local host, select ingredients and cook a Cantonese meal while exploring family hospitality and the historical influence of the Twenty-Four Filial Exemplars. A separately confirmed traditional Chinese medicine visit can introduce pulse-taking and diagnostic traditions without promising a medical result.",
      image: pendingImage,
      hotel: hotelByPlace.guangzhou,
      meals: ["Breakfast", "Market-to-kitchen Cantonese meal when selected"],
      transport:
        "Private vehicle during the confirmed service window; exhibition drop-off and pickup planned around current access rules",
      activities: [
        {
          title: "Your business block comes first",
          description:
            "Exhibition hours, meetings and supplier appointments remain the fixed spine; bilingual support is briefed around the confirmed purpose.",
        },
        {
          title: "Market, kitchen and family culture",
          description:
            "Shop for seasonal ingredients, prepare several home-style Cantonese dishes and discuss how food, hospitality, elders and family responsibility are understood across generations.",
        },
        {
          title: "Traditional Chinese medicine in context",
          description:
            "Where selected, visit a suitable institution for an introduction to history, pulse-taking and consultation logic. Clinical diagnosis or treatment is outside the base experience.",
        },
      ],
      guideNote:
        "Canton Fair badge applications are made under the organizer's official rules. AVIORA can assist with the process but does not sell admission or promise a VIP bypass. The culture and TCM modules can be shortened, moved or removed.",
      coordinates: { latitude: 23.1291, longitude: 113.2644 },
    },
    {
      day: 3,
      title: "Move to Shenzhen only when the agenda says it is useful",
      destination: "Guangzhou to Shenzhen",
      summary:
        "Travel privately to the Shenzhen district best aligned with your meetings or selected innovation chapter. Continue business appointments or add one confirmed view of the city's technology and manufacturing economy. If a public Robotaxi service is workable for the date, zone and accounts, the team can assist; the private vehicle remains the guaranteed operating plan.",
      image: pendingImage,
      hotel: hotelByPlace.shenzhen,
      meals: ["Breakfast", "Business lunch or dinner when selected"],
      transport: "Private intercity MPV and local Shenzhen service during the confirmed hours",
      activities: [
        {
          title: "A transfer placed around the diary",
          description:
            "Departure time, vehicle and luggage are set from the last Guangzhou commitment and first Shenzhen address.",
        },
        {
          title: "One relevant Shenzhen chapter",
          description:
            "Select a confirmed company showroom, innovation district, smart-mobility experience or other industry context tied to your interests.",
        },
      ],
      guideNote:
        "Company access, factory visits and Robotaxi operation are date-specific and never guaranteed by the published itinerary. Alternatives are agreed before booking.",
      coordinates: { latitude: 22.5431, longitude: 114.0579 },
    },
    {
      day: 4,
      title: "Use the last hours well, then leave through the right gateway",
      destination: "Shenzhen, Guangzhou or Hong Kong departure",
      summary:
        "Keep the morning for a final meeting, focused visit or uninterrupted work. The transfer is then built backward from the confirmed terminal, ticket, luggage and any border requirement, whether departure is from Shenzhen, Guangzhou or Hong Kong.",
      image: pendingImage,
      hotel: "Departure day",
      meals: ["Breakfast", "Departure meal when confirmed"],
      transport: "Private airport, rail or agreed cross-boundary transfer named in the proposal",
      activities: [
        {
          title: "A final usable window",
          description:
            "Choose business time, a light neighborhood chapter or no programmed activity before departure.",
        },
        {
          title: "Gateway-specific handover",
          description:
            "Pickup point, traffic, border process where relevant, terminal and check-in buffer are checked against the actual ticket.",
        },
      ],
      guideNote:
        "Cross-boundary vehicle permissions and Hong Kong transfer arrangements must be confirmed separately; a standard mainland vehicle cannot be assumed to cross the border.",
      coordinates: { latitude: 22.6393, longitude: 113.8107 },
    },
  ],
  accommodations: [
    {
      name: "Selected premium Guangzhou business hotel",
      destination: "Guangzhou",
      description:
        "Two nights chosen from the actual exhibition, meeting and arrival geography, with room comfort, breakfast timing and vehicle access reviewed before brand prestige alone.",
      roomStyle: "Two rooms; exact category, bedding and cancellation terms named before booking",
      highlights: [
        "Meeting-location review",
        "Reliable vehicle access",
        "Business breakfast",
        "Two-night base",
      ],
      image: pendingImage,
    },
    {
      name: "Selected premium Shenzhen business hotel",
      destination: "Shenzhen",
      description:
        "One night in the district that best supports the confirmed Shenzhen commitment and departure gateway, avoiding a visually impressive but operationally poor location.",
      roomStyle:
        "Two rooms; exact category and district confirmed after the Shenzhen agenda is known",
      highlights: [
        "Agenda-led district",
        "Late arrival handling",
        "Departure logic",
        "Private transfer",
      ],
      image: pendingImage,
    },
  ],
  included: [
    "3 nights in selected premium business hotels based on four guests sharing two rooms: 2 nights in Guangzhou and 1 night in Shenzhen in the sample framework",
    "Private arrival, Guangzhou-to-Shenzhen and departure transfers, plus private vehicle service during the day-by-day windows named in the written proposal",
    "English-speaking guide, interpreter or bilingual business assistant during the confirmed service periods, with the exact role and hours stated before booking",
    "Pre-trip agenda review covering flights, meetings, exhibition sessions, supplier addresses, hotel geography and transfer feasibility",
    "Market-to-kitchen Cantonese cultural experience with ingredients and hosted meal when selected in the confirmed itinerary",
    "Traditional Chinese medicine cultural introduction at a suitable confirmed institution when selected; educational scope only unless a licensed medical service is separately contracted",
    "One confirmed Shenzhen innovation, industry or urban-technology chapter selected for the travel date",
    "Daily hotel breakfast and the additional meals specifically identified in the written proposal",
    "China-based operating support and one final itinerary containing confirmed addresses, contacts, pickup points and service boundaries",
    "No compulsory shopping stops",
  ],
  excluded: [
    "International or domestic flights, China visa, travel insurance and personal expenses",
    "Canton Fair or exhibition credentials, admission charges and organizer fees unless explicitly named as included",
    "A VIP fast-track, queue bypass or access outside the organizer's official rules",
    "Supplier sourcing, commercial due diligence, factory audit, legal advice, negotiation or professional simultaneous interpretation unless separately quoted",
    "Guaranteed entry to a named company, factory, private facility or technology campus before written confirmation",
    "Guaranteed Robotaxi operation, drone flight or other service controlled by a third-party operator, regulation, weather or operating zone",
    "Unlimited or 24-hour vehicle and bilingual-assistant service; confirmed daily hours and overtime rules apply",
    "Medical diagnosis, treatment, medication or a promised health outcome from any traditional Chinese medicine experience",
    "Hong Kong accommodation or cross-boundary vehicle service unless specifically included",
  ],
  optionalExperiences: [
    {
      title: "Canton Fair operating support",
      description:
        "Add official pre-registration guidance, document checks, fair-day routing and appropriately briefed bilingual support under the current organizer rules.",
      badges: ["Official process", "Date-specific"],
      image: pendingImage,
    },
    {
      title: "Supplier visit and sector specialist upgrade",
      description:
        "Add a confirmed visit, sector-relevant assistant, structured visit notes or deeper interpretation only after the company, purpose and professional boundary are agreed.",
      badges: ["Business", "Quoted separately"],
      image: pendingImage,
    },
    {
      title: "Hong Kong gateway extension",
      description:
        "Add a cross-boundary transfer and one or two Hong Kong nights when flight logic or business commitments make the third city genuinely useful.",
      badges: ["Optional", "+1 or 2 nights"],
      image: pendingImage,
    },
  ],
  transportation: {
    title: "The vehicle follows the agenda; the agenda does not exist to fill the vehicle",
    description:
      "A suitable private MPV is planned around actual party size, luggage, meeting addresses and service hours. A named model such as a Toyota Alphard is confirmed only when written into the proposal, and Hong Kong cross-boundary service requires a separately eligible vehicle.",
    items: [
      {
        label: "Arrival",
        value: "Guangzhou, Shenzhen or Hong Kong gateway",
        helper: "The route is rebuilt if the practical starting point changes.",
      },
      {
        label: "Daily service",
        value: "Private MPV for confirmed hours",
        helper: "Pickup points, waiting periods, mileage and overtime terms are stated in writing.",
      },
      {
        label: "Intercity",
        value: "Private Guangzhou-to-Shenzhen transfer",
        helper:
          "High-speed rail can replace it when traffic, timing or party size makes rail stronger.",
      },
      {
        label: "Departure",
        value: "Gateway-specific airport or rail handover",
        helper: "Traffic and border allowances are calculated from the actual terminal and ticket.",
      },
    ],
  },
  routeMap: {
    title: "A two-city framework that can begin, end or pause where you need",
    description:
      "The sample uses two Guangzhou nights and one Shenzhen night. Meetings may reverse the cities, keep all three nights in one base or add Hong Kong after feasibility and cost are reviewed.",
    stops: [
      {
        name: "Guangzhou",
        days: "Days 1-2 · 2 nights",
        description: "Arrival, exhibition or meeting time, plus movable food and culture modules.",
        coordinates: { latitude: 23.1291, longitude: 113.2644 },
      },
      {
        name: "Shenzhen",
        days: "Days 3-4 · 1 night",
        description:
          "Meetings, one relevant innovation chapter and the most practical departure gateway.",
        coordinates: { latitude: 22.5431, longitude: 114.0579 },
      },
    ],
  },
  gallery: [],
  faqs: [
    {
      question: "Is this a fixed four-day itinerary?",
      answer:
        "No. It is a private operating framework. Send us your flights, meetings, exhibition hours, supplier addresses and priorities. We place those fixed commitments first, then propose hotels, transfers, bilingual support, meals and optional cultural or technology modules around them. Every sample day can move, change or be removed before confirmation.",
    },
    {
      question: "What does the US$2,280 starting price include?",
      answer:
        "It is an indicative per-person starting price based on four guests sharing two rooms outside major exhibition and peak periods, equivalent to a group total from US$9,120. It assumes three premium hotel nights, the named private transfers and vehicle windows, confirmed bilingual support, breakfast, the selected Guangzhou culture module, one Shenzhen innovation chapter and China-based operating support as detailed in the written proposal.",
    },
    {
      question: "Can two executives book this journey?",
      answer:
        "Yes. A typical two-person version starts from approximately US$2,880 per person outside major exhibition periods, depending on rooms, vehicle hours, bilingual support and the experiences selected. The exact total is quoted after the fixed schedule is reviewed.",
    },
    {
      question: "Can you guarantee Canton Fair VIP access or fast-track entry?",
      answer:
        "No. Overseas buyer eligibility, registration, badges, collection and entry remain governed by the Canton Fair organizer's current official rules. AVIORA can assist with the published process, documents, routing, transport and on-site bilingual support, but does not sell an unofficial badge, bypass or access right.",
    },
    {
      question: "What happens in the Guangzhou market and cooking experience?",
      answer:
        "With a suitable local host, guests visit a working market, choose seasonal ingredients and prepare a Cantonese home-style meal. Conversation explores hospitality, family roles, relationships with elders and the historical influence of the Twenty-Four Filial Exemplars, including different modern interpretations. It is cultural dialogue, not a moral lesson or a claim that every Chinese family lives the same way.",
    },
    {
      question: "Does the traditional Chinese medicine pulse consultation provide a diagnosis?",
      answer:
        "Not in the base cultural experience. It introduces the history, language and logic of traditional Chinese medicine, which may include observing pulse-taking at a suitable confirmed institution. Medical diagnosis, treatment, medication or health claims require a separately contracted licensed provider and are not promised by this tour.",
    },
    {
      question: "Is a Robotaxi ride guaranteed in Shenzhen?",
      answer:
        "No. Public Robotaxi services depend on the travel date, current operating zone, account or identity requirements, dispatch availability and regulation. AVIORA may assist when it is practical, but the private vehicle remains the reliable transport plan and a confirmed alternative is agreed before booking.",
    },
    {
      question: "Can the journey start in Shenzhen or end in Hong Kong?",
      answer:
        "Yes. The four-day sequence can be reversed, kept in one city or extended into Hong Kong. Cross-boundary vehicles, immigration requirements, luggage and airport timing are different from mainland transfers, so the exact service and price are confirmed after the flights and passports are reviewed.",
    },
    {
      question: "What level of bilingual business support is included?",
      answer:
        "The written proposal distinguishes a guide, interpreter and business assistant, and states service hours and meeting involvement. Sector specialization, simultaneous interpretation, negotiation, due diligence, factory audits and professional reports are not assumed; they can be scoped and quoted separately.",
    },
    {
      question: "Can we extend the journey beyond four days?",
      answer:
        "Yes. Additional fair days, supplier visits, factories, Hong Kong or leisure time can extend the framework to five or six days. AVIORA will show the added hotels, vehicle hours, bilingual support and confirmed visits as separate services before you commit.",
    },
  ],
  related: {
    tours: [
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A longer premium private journey for guests adding China's classic capitals before or after their business commitments.",
        tags: ["Private", "Luxury", "First-time China"],
        image: pendingImage,
        route: "Beijing · Xi'an · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
      },
      {
        title: "Ten Days at Qingcheng Mountain",
        description:
          "A private mountain retreat for executives who want a protected recovery chapter after a demanding China schedule.",
        tags: ["Wellness", "Private", "Quiet luxury"],
        image: pendingImage,
        route: "Chengdu · Qingcheng Mountain",
        duration: "10 days / 9 nights",
        href: "/tours/qingcheng-mountain-private-wellness-retreat-10-day",
      },
    ],
    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Guangzhou%20and%20Shenzhen%20Business%20Journey&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20you%20to%20build%20a%20Guangzhou%20and%20Shenzhen%20journey%20around%20my%20business%20schedule.%0A%0AFixed%20flights%20or%20arrival%3A%0AFixed%20meetings%20or%20exhibition%20hours%3A%0ATravellers%20and%20rooms%3A%0ABilingual%20support%20needed%3A%0AOptional%20culture%20or%20technology%20interests%3A%0ADeparture%20gateway%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%20have%20flights%2C%20meetings%20or%20exhibition%20plans%20for%20Guangzhou%20and%20Shenzhen.%20Please%20build%20the%20hotels%2C%20private%20transport%2C%20bilingual%20support%20and%20optional%20experiences%20around%20my%20schedule.",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I would like AVIORA to build a Guangzhou and Shenzhen journey around my confirmed flights, meetings and exhibition plans.",
  },
};
