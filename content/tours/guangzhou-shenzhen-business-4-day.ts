import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
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
  guangzhou:
    "Selected premium Guangzhou business hotel · 2 nights · rooms confirmed for your party",
  shenzhen: "Selected premium Shenzhen business hotel · 1 night · rooms confirmed for your party",
};

export const guangzhouShenzhenBusiness4DayTour: Tour = {
  slug: "guangzhou-shenzhen-tailor-made-business-tour-4-day",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-11-12",
  title: "Guangzhou and Shenzhen Private Business Tour",
  subtitle:
    "A private Guangzhou and Shenzhen business tour usually takes 4–7 days, but the length is never fixed. Send us your flights, meetings, exhibitions and supplier visits; we build the cities, hotels, transport, bilingual support and meaningful time around them.",
  duration: "4–7 Days / Fully Tailor-Made",
  route: "Guangzhou, Shenzhen",
  styles: ["Business", "Luxury", "Culture", "Food"],
  hero: {
    eyebrow: "Tailor-made Guangzhou & Shenzhen business tour",
    image: pendingImage,
    primary: { label: "Build My Business Journey", href: "#enquiry" },
    secondary: { label: "See the Flexible Framework", href: "#itinerary" },
  },
  seo: {
    title: "Guangzhou and Shenzhen Private Business Tour",
    description:
      "Plan Guangzhou and Shenzhen around meetings and exhibitions, with private transfers and confirmed bilingual support. Four-day hotel example; longer stays tailored.",
    keywords: [
      "Guangzhou Shenzhen business trip private guide",
      "Canton Fair private transfer bilingual assistant",
      "Shenzhen business interpreter private driver",
      "Guangzhou Shenzhen four day business itinerary",
    ],

    preserveCopy: true,
  },
  overview: {
    pitch:
      "This private business tour is not a fixed sightseeing package, and 4–7 days is a planning range rather than a choice between only four days and seven. Share what cannot move: flights, meetings, exhibition hours, supplier visits and preferred cities. AVIORA then determines the right number of nights and builds the rooms, vehicles, bilingual support, meals and optional Guangzhou or Shenzhen experiences around those commitments. The four-day plan below is simply a starting framework; every block can move, shorten, expand, disappear or be replaced.",
    facts: [
      {
        label: "Hotels",
        value: "Sample: Guangzhou 2 nights and Shenzhen 1; premium business rooms confirmed",
      },
      {
        label: "Pacing",
        value: "Agenda-led with contracted daily service hours; culture is optional",
      },
      {
        label: "Suitable for",
        value:
          "Business travelers who already have meetings, exhibition or supplier priorities and need practical local coordination, with optional cultural time.",
      },
    ],

    practicalities: [
      {
        label: "Best for",
        value:
          "Business travelers who already have meetings, exhibition or supplier priorities and need practical local coordination, with optional cultural time.",
      },
      {
        label: "Price example",
        value:
          "The published starting rate applies to the selected 4-day / 3-night framework, not every 4–7-day business itinerary.",
      },
      {
        label: "Nights",
        value:
          "Sample framework: Guangzhou 2 nights and Shenzhen 1. Hotels are chosen around the actual meeting geography, not sightseeing alone.",
      },
      {
        label: "Vehicle service",
        value:
          "Private arrival, intercity and departure transfers plus the stated daily service windows. Driver hours, waiting, overtime, parking and extra districts require explicit agreement.",
      },
      {
        label: "Language role",
        value:
          "The proposal names whether you have a guide, bilingual assistant or interpreter, the languages, subject matter, hours and confidentiality arrangements.",
      },
      {
        label: "Exhibitions",
        value:
          "Registration, credentials, organizer fees and access follow the event’s rules. A booked vehicle does not grant fair admission or VIP access.",
      },
      {
        label: "Company visits",
        value:
          "Appointments require the company’s written confirmation. A technology chapter may use a suitable public venue rather than private factory or campus access.",
      },
      {
        label: "Culture and meals",
        value:
          "Hotel breakfasts and only the selected, listed meals or cultural modules are included. Agenda changes can replace or remove optional activities.",
      },
      {
        label: "Hong Kong and health",
        value:
          "Cross-boundary transfers and Hong Kong accommodation are separate unless expressly included. Any TCM introduction is educational, not a clinical service.",
      },
      {
        label: "Starting-price basis",
        value: getPublishedPriceDisclosure("guangzhou-shenzhen-tailor-made-business-tour-4-day"),
      },
    ],

    answer:
      "A private Guangzhou and Shenzhen business trip built around your meetings, exhibition sessions and confirmed visits. The four-day example includes three hotel nights, agreed vehicle windows, intercity transfer and the specified bilingual support; four to seven days can be designed separately. Canton Fair credentials, supplier due diligence, professional interpreting and Hong Kong border services are not automatic inclusions. Optional cultural modules fit around the working agenda.",
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
        "If your meeting schedule allows, shop for seasonal ingredients with a local host and prepare a Cantonese meal. The conversation can explore local food and hospitality; venue, menu, session length and dietary arrangements are confirmed in your proposal.",
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
        "A market visit and hosted Cantonese cooking session offer a personal introduction to Guangzhou beyond the meeting room. Include this module only when it fits the working agenda, with menu, host, venue and timing agreed in advance.",
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
        "Keep the main service window for your confirmed exhibition sessions, meetings or company appointments. If time allows, add the selected market-to-kitchen Cantonese meal or a separately confirmed cultural introduction to traditional Chinese medicine. These modules fit around your agenda; they are not extra commitments to complete after a full working day.",
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
          title: "Optional Cantonese market and kitchen session",
          description:
            "If selected in your proposal, visit a neighborhood market with a culinary host, prepare Cantonese dishes and share a meal. Venue, menu, duration and dietary arrangements are confirmed around your working agenda.",
        },
        {
          title: "Optional introduction to traditional Chinese medicine",
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
        "Use the final morning for an agreed meeting or uninterrupted work, then take the private transfer to the mainland departure gateway named in your proposal. Shenzhen and Guangzhou require different pickup plans. A Hong Kong departure needs separately contracted cross-boundary transport and a review of the applicable entry requirements.",
      image: pendingImage,
      meals: ["Breakfast", "Departure meal when confirmed"],
      transport:
        "Private airport or rail departure transfer within the confirmed mainland service area; Hong Kong or cross-boundary service is separately quoted",
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
      roomStyle:
        "Rooms for your actual party; exact category, bedding and cancellation terms named before booking",
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
        "Rooms for your actual party; exact category and district confirmed after the Shenzhen agenda is known",
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
    "3 nights in selected premium business hotels with rooms and occupancy confirmed for your actual party: 2 nights in Guangzhou and 1 night in Shenzhen in the sample framework",
    "Private arrival, Guangzhou-to-Shenzhen and departure transfers, plus private vehicle service during the day-by-day windows named in the written proposal",
    "Guide or bilingual business-assistant support during the confirmed service periods, with language, role and hours stated; specialist or professional interpreting requires its own agreed scope and quote",
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
      question: "What does this private tour cost, and what is the starting-price basis?",
      answer: getPublishedPriceDisclosure("guangzhou-shenzhen-tailor-made-business-tour-4-day"),
    },
    {
      question: "Does the starting price cover four days or seven days?",
      answer:
        "It applies to the selected four-day, three-night example. Four to seven days describes the possible planning range, not a seven-day entitlement at the same price. The final proposal is built from your fixed agenda, hotel nights, daily hours, addresses and required language role.",
    },
    {
      question: "Can you arrange Canton Fair admission or buyer credentials?",
      answer:
        "Only the service specifically agreed and permitted by the organizer can be offered. Credentials, registration, fees and entry eligibility are not automatically included. Use the official organizer’s process and confirm requirements for your category. A private assistant or car does not provide VIP access or queue bypass.",
    },
    {
      question: "Is the bilingual assistant a professional business interpreter?",
      answer:
        "Not necessarily. A guide, bilingual coordinator, consecutive interpreter and simultaneous interpreter have different roles and preparation needs. State the language pair, industry, meeting format and terminology in advance. The proposal identifies the contracted role and hours; professional interpreting is separately scoped rather than implied by bilingual support.",
    },
    {
      question: "Does this include supplier sourcing, factory audits or negotiation?",
      answer:
        "No. Transport and language coordination do not replace sourcing, due diligence, technical inspection, legal advice or a commercial negotiation mandate. Such work requires a separately agreed scope and qualified provider. You remain responsible for business decisions and should not treat a sightseeing visit as a verified supplier assessment.",
    },
    {
      question: "Can you guarantee access to a Shenzhen technology company?",
      answer:
        "No named company, factory or private campus is guaranteed before written permission and appointment confirmation. The selected innovation chapter may use an appropriate public exhibition or urban visit instead. Do not book on the basis of a company logo or assume that a driver can obtain access on arrival.",
    },
    {
      question: "How many hours are the driver and assistant available?",
      answer:
        "Only the daily windows stated in the proposal. Confirm start and finish locations, waiting time, overtime rates and any evening work before payment. Guangzhou–Shenzhen travel consumes part of the schedule. A multi-day booking is not unlimited or 24-hour staffed service.",
    },
    {
      question: "Can the trip fit around changing meetings and fair dates?",
      answer:
        "That is the planning purpose, but availability and change conditions still matter. Share fixed commitments, tentative appointments, supplier addresses and travel deadlines. Late changes can affect hotels, staffing, parking and overtime. A cultural meal or visit should be moved or removed rather than displace a business commitment.",
    },
    {
      question: "Can you arrange Hong Kong departure or cross-border transfers?",
      answer:
        "Ask for a separately confirmed plan. Border eligibility, vehicle permissions, baggage handling, operating hours and the actual Hong Kong terminal must be reviewed. A Shenzhen vehicle booking does not automatically include a through car, border clearance or Hong Kong hotel night.",
    },
    {
      question: "Are Robotaxi rides or traditional Chinese medicine treatments included?",
      answer:
        "A public Robotaxi trial depends on operating zone, account access, regulation and availability; the confirmed private road transfer remains the main plan. A selected TCM introduction is cultural and educational. Medical diagnosis or treatment is not included without a separate qualified clinical arrangement.",
    },
    {
      question: "Can you accommodate confidentiality and restricted photography?",
      answer:
        "Share requirements before confirmation so staff roles, documents, photography permissions and any confidentiality agreement can be reviewed. Do not assume an NDA, legal privilege or factory photography permission merely from booking the itinerary. Sensitive commercial materials should use the agreed handling process rather than a public initial inquiry.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "Private Shanghai Day Tour with Guide and Driver",
        description:
          "Add a separate Shanghai day if meetings take you to Shanghai and you have a free day there; intercity travel is additional.",
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
      {
        title: "10-Day Qingcheng Mountain Wellness Retreat",
        description:
          "Consider a separate ten-day Chengdu and Qingcheng retreat after the working trip, with gateway travel arranged separately.",
        tags: ["Wellness", "Luxury", "Nature"],
        image: {
          src: "/home/editorial/great-wall-private-china-travel.webp",
          alt: "Photography for the Qingcheng Mountain retreat is being prepared",
          width: 1920,
          height: 1080,
        },
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
      "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20have%20flights%2C%20meetings%20or%20exhibition%20plans%20for%20Guangzhou%20and%20Shenzhen.%20Please%20build%20the%20hotels%2C%20private%20transport%2C%20bilingual%20support%20and%20optional%20experiences%20around%20my%20schedule.",
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "I would like AVIORA to build a Guangzhou and Shenzhen journey around my confirmed flights, meetings and exhibition plans.",
  },

  planningResources: [
    {
      label: "Canton Fair: official organizer",
      href: "https://www.cantonfair.org.cn/",
      officialPublisher: "China Import and Export Fair",
      description:
        "Official reference for registration, event information and visitor access. Dates, credentials and category-specific eligibility need current organizer confirmation.",
    },
    {
      label: "China entry requirements: official information",
      href: "https://en.nia.gov.cn/",
      officialPublisher: "National Immigration Administration of China",
      description:
        "Check the rule that applies to your passport and full international route. Booking this tour does not establish visa-free or transit eligibility.",
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

  inquiryChecklist: [
    "Fixed meeting addresses, dates and daily agenda",
    "Travelers, rooms and luggage",
    "Guide, bilingual assistant or specialist interpreter needs",
    "Fair registration or prearranged factory visit status",
    "Confidentiality, dietary and optional cultural preferences",
  ],

  comparison: {
    title: "A business operating plan or a leisure itinerary?",
    intro:
      "Begin with fixed appointments. Add a separate leisure route when you have enough days outside the working agenda.",
    columns: ["Decision", "This business framework", "10-day classic leisure route"],
    rows: [
      [
        "Starting point",
        "Confirmed meetings, exhibition sessions and addresses",
        "Sightseeing priorities",
      ],
      [
        "Duration basis",
        "Four-day example; four to seven days quoted separately",
        "Ten days and nine nights",
      ],
      [
        "Language support",
        "Role, subject matter and working hours contracted",
        "Local sightseeing guides",
      ],
    ],
    href: "/tours/beijing-xian-shanghai-private-10-day-tour",
    linkLabel: "Compare the alternative itinerary",
  },
};
