import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

// Photography is intentionally pending. The shared visualStatus handling prevents this
// contract asset from appearing as photography for the journey.
const pendingImage: MediaAsset = {
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "Photography for the Qingcheng Mountain retreat is being prepared",
  width: 1920,
  height: 1080,
};

const hotelByPlace = {
  chengdu: "Selected luxury Chengdu hotel · 2 nights · two rooms",
  qingcheng: "Selected Qingcheng Mountain luxury retreat · 7 nights · two rooms",
};

export const qingchengMountainWellness10DayTour: Tour = {
  slug: "qingcheng-mountain-private-wellness-retreat-10-day",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-08-21",
  title: "Ten Days at Qingcheng Mountain",
  subtitle:
    "Ten private days shaped by forest, Daoist tradition and time entirely your own. Arrive with nothing to manage; leave with a rhythm worth keeping.",
  duration: "10 Days / 9 Nights",
  route: "Chengdu, Qingcheng Mountain",
  styles: ["Wellness", "Luxury", "Nature", "Culture"],
  hero: {
    eyebrow: "AVIORA private Daoist-inspired retreat",
    image: pendingImage,
    primary: { label: "Design My Private Retreat", href: "#inquiry" },
    secondary: { label: "See the 10-Day Rhythm", href: "#itinerary" },
  },
  seo: {
    title: "10-Day Private Wellness Retreat in China",
    description:
      "A 10-day private luxury wellness retreat in Chengdu and Qingcheng Mountain with tai chi, Daoist culture, tea, forest walks, spa treatments and protected unscheduled time.",
    keywords: [
      "China wellness retreat",
      "luxury wellness retreat China",
      "Qingcheng Mountain retreat",
      "private wellness travel China",
      "Daoist wellness retreat",
      "Six Senses Qing Cheng Mountain itinerary",
      "China retreat for women",
      "executive wellness retreat China",
    ],
  },
  overview: {
    pitch:
      "Spend two gentle nights in Chengdu, then stay seven uninterrupted nights beneath Qingcheng Mountain. Private tai chi, tea, Daoist cultural interpretation, restorative treatments and quiet forest walks are balanced with protected hours in which nothing is scheduled. Rooms, meals, transfers and daily decisions are held by one China-based team.",
    facts: [
      {
        label: "Duration",
        value: "10 days / 9 nights",
        helper: "Chengdu 2 nights and Qingcheng Mountain 7 nights, with only one hotel change.",
      },
      {
        label: "Best For",
        value: "Executives, women, couples and private groups",
        helper: "For people who value privacy, cultural substance and genuinely unclaimed time.",
      },
      {
        label: "Daily Rhythm",
        value: "One anchor, one choice and protected blank space",
        helper: "No consecutive early starts and no pressure to complete every optional activity.",
      },
      {
        label: "Hotels",
        value: "Luxury Chengdu base and Qingcheng retreat",
        helper:
          "Two rooms for four guests; exact properties and room categories are named before booking.",
      },
      {
        label: "Private Service",
        value: "AVIORA Quiet Journey Standard",
        helper:
          "Rhythm profile, minimal transitions, private support and protected unscheduled hours.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Chengdu",
      days: "Days 1-2",
      title: "Arrive without immediately beginning another itinerary",
      description:
        "The first forty-eight hours remove decisions rather than add attractions. Your arrival, room, first meals and next transfer are already held, while Chengdu introduces a slower social rhythm through tea and an unhurried neighborhood morning.",
      see: "A contemporary Chinese city at human scale: shaded streets, a working tea house, courtyard life and the quiet details normally missed between headline sights.",
      do: "Sleep, take tea with a private host, discuss the rhythm you want from the mountain stay and choose either a gentle walk or complete hotel time.",
      feel: "That the journey has started without asking you to perform, organize or recover quickly from the flight.",
    },
    {
      location: "Entering Qingcheng",
      days: "Days 3-4",
      title: "Let the mountain set the pace before any practice begins",
      description:
        "A private road transfer replaces airports and railway stations. After settling in beneath Qingcheng Mountain, movement begins gently and the ideas behind Daoist balance are explained without turning a living tradition into theatre.",
      see: "Forested slopes, tiled roofs, bamboo, mountain weather and the first temple paths rising beyond the resort landscape.",
      do: "Settle into the room, walk only as far as feels right, then meet a private tai chi teacher and a cultural interpreter whose roles are confirmed in advance.",
      feel: "The difference between being entertained and being given enough space to become present.",
    },
    {
      location: "Tea and Water",
      days: "Days 5-6",
      title: "Drink tea without watching the clock; read a landscape shaped by water",
      description:
        "Tea provides attention without performance. The following day, Dujiangyan reveals how an ancient water system still works through redirection rather than force, giving the journey a cultural idea deeper than relaxation alone.",
      see: "Tea opening in the cup, a long mountain afternoon and the channels, bridges and river landscape of the Dujiangyan irrigation system.",
      do: "Share a private tea session, receive one individually selected resort treatment and explore Dujiangyan on a focused half-day route.",
      feel: "That doing less can make a place more legible, and that control is not the only way to create order.",
    },
    {
      location: "The Mountain",
      days: "Days 7-8",
      title: "One day asks nothing; the next opens the mountain quietly",
      description:
        "Day Seven is deliberately protected from touring. On Day Eight, enter Qingcheng's paths at the most suitable time and level, with temple etiquette, steps and weather discussed before the route is chosen.",
      see: "An unscheduled day changing with the weather, then moss, stone steps, forest shade and Daoist temple architecture within the mountain landscape.",
      do: "Choose sleep, spa, reading or solitude, followed the next day by a privately guided lower- or upper-mountain route adapted to your walking comfort.",
      feel: "No fear of wasting the day, followed by a mountain experience that does not need to be conquered.",
    },
    {
      location: "Taking It Home",
      days: "Days 9-10",
      title: "Keep one useful rhythm instead of chasing a dramatic transformation",
      description:
        "The final full day gathers what genuinely worked: a short movement sequence, a way of preparing tea, a breathing practice or simply a more deliberate morning. Departure is protected from last-minute sightseeing.",
      see: "A final quiet morning in the forest and the same landscape now familiar enough to notice in smaller detail.",
      do: "Repeat one chosen practice with a teacher, record a simple version for home where permitted, share a private farewell dinner and leave with a fully managed airport transfer.",
      feel: "Not that a holiday has ended, but that one realistic part of its rhythm can continue after returning home.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Quiet Journey Standard",
    title: "Quiet is designed operationally, not added as a mood.",
    description:
      "Before pricing, we learn what actually gives or drains your energy. The route, room, meals, practitioners and contact rhythm are then built to reduce decisions while preserving your freedom to change your mind.",
    items: [
      {
        label: "01 · Rhythm profile",
        value: "Sleep, energy, food and privacy preferences before pricing",
        helper:
          "We ask about early starts, social energy, movement comfort, dietary needs and how much contact you want each day.",
      },
      {
        label: "02 · One transition",
        value: "Two hotel bases across all ten days",
        helper:
          "No domestic flight interrupts the retreat; Chengdu and Qingcheng are connected by private road transfer.",
      },
      {
        label: "03 · Protected time",
        value: "One principal experience and unclaimed hours",
        helper:
          "Free time is treated as part of the purchased design and is not filled with last-minute sightseeing.",
      },
      {
        label: "04 · Confirmed people",
        value: "Teachers and practitioners matched to the brief",
        helper:
          "Names, qualifications, language support, venue and boundaries are confirmed before an experience is promised.",
      },
      {
        label: "05 · Choice without pressure",
        value: "Every practice remains voluntary",
        helper:
          "Tai chi, tea, spa and cultural sessions can be shortened, replaced or declined without turning the day into a failure.",
      },
      {
        label: "06 · Return gently",
        value: "Departure and one take-home ritual are planned",
        helper:
          "The final day protects airport timing, while one practical movement, tea or breathing sequence can be documented where permitted.",
      },
    ],
    note: "This is a private cultural and wellbeing journey, not medical treatment, psychotherapy or a guaranteed health outcome. Any clinical consultation or treatment requires a separately confirmed, appropriately qualified provider.",
  },
  highlights: [
    {
      title: "Seven uninterrupted nights beneath Qingcheng Mountain",
      description:
        "The product earns its calm through continuity: one mountain room, no mid-retreat airport and enough time for the landscape to become familiar rather than briefly consumed.",
      category: "Luxury",
      image: pendingImage,
    },
    {
      title: "Private tai chi with cultural meaning, not staged performance",
      description:
        "Movement is adapted to the guest, while a separate interpreter can explain the Daoist ideas and historical context without presenting a teacher as a mystical guarantee.",
      category: "Culture",
      image: pendingImage,
    },
    {
      title: "A full day that is intentionally left alone",
      description:
        "No guide waits in the lobby and no attraction is added to justify the price. Sleep, spa, reading and solitude are protected as part of the journey itself.",
      category: "Wellness",
      image: pendingImage,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Chengdu, with nothing else expected of you",
      destination: "Chengdu",
      summary:
        "Your private team meets the confirmed flight, manages luggage and takes you directly to the hotel. There is no compulsory welcome tour and no briefing that cannot wait; the room, first meal and next morning are arranged around arrival time.",
      image: pendingImage,
      hotel: hotelByPlace.chengdu,
      meals: ["Arrival meal or room service as confirmed"],
      transport: "Private Chengdu airport transfer with luggage support",
      activities: [
        {
          title: "A protected arrival",
          description:
            "Terminal, vehicle, luggage capacity, room readiness and a suitable first meal are checked around the actual flight.",
        },
        {
          title: "Nothing to catch up on",
          description:
            "Sleep, bathe, eat or remain in the room. Any orientation can happen the following day.",
        },
      ],
      guideNote:
        "Early check-in, room category and arrival meal are requests until confirmed in the written proposal.",
      coordinates: { latitude: 30.5728, longitude: 104.0668 },
    },
    {
      day: 2,
      title: "Chengdu at human pace, followed by a private rhythm conversation",
      destination: "Chengdu",
      summary:
        "Begin late enough to respect the flight recovery. A tea-house chapter introduces Chengdu through observation rather than a list of sights, followed by a private conversation about sleep, movement, food, privacy and the level of support wanted at the mountain.",
      image: pendingImage,
      hotel: hotelByPlace.chengdu,
      meals: ["Breakfast", "Private tea-house lunch or equivalent"],
      transport: "Private vehicle with a short, optional neighborhood walk",
      activities: [
        {
          title: "Tea-house life without a performance",
          description:
            "Sit with a host who can explain the social rhythm, tea choices and surrounding neighborhood while leaving room simply to observe.",
        },
        {
          title: "Your Quiet Journey profile",
          description:
            "Confirm preferred wake times, guide contact, treatment interests, food needs, walking comfort and how much of the mountain stay should remain untouched.",
        },
      ],
      guideNote:
        "The tea venue and host are selected for comfort, context and date-specific availability; no exclusive public venue is implied.",
      coordinates: { latitude: 30.6611, longitude: 104.0633 },
    },
    {
      day: 3,
      title: "Enter Qingcheng Mountain without another travel day",
      destination: "Chengdu to Qingcheng Mountain",
      summary:
        "Travel privately from Chengdu to the Qingcheng area, usually in around ninety minutes depending on traffic and the confirmed hotel. Check in for seven nights, learn only what is useful and leave the remainder of the day open.",
      image: pendingImage,
      hotel: hotelByPlace.qingcheng,
      meals: ["Breakfast", "Private or resort welcome dinner"],
      transport: "Private overland transfer from Chengdu to the confirmed Qingcheng retreat",
      activities: [
        {
          title: "One room for the next seven nights",
          description:
            "The team handles luggage, check-in, room requests and the first resort meal so there is no second arrival to manage.",
        },
        {
          title: "A short orientation, only if useful",
          description:
            "See the spa, paths and dining spaces, or go directly to the room and meet them later at your own pace.",
        },
      ],
      guideNote:
        "A property such as Six Senses Qing Cheng Mountain may be proposed, but the exact hotel and room category are only guaranteed when named in writing.",
      coordinates: { latitude: 30.9047, longitude: 103.5655 },
    },
    {
      day: 4,
      title: "Learn stillness through movement, then understand its context",
      destination: "Qingcheng Mountain",
      summary:
        "Meet a private tai chi teacher for a gentle session shaped around mobility and experience. Later, a cultural interpreter introduces the Daoist ideas connected with Qingcheng without making spiritual claims on the guest's behalf.",
      image: pendingImage,
      hotel: hotelByPlace.qingcheng,
      meals: ["Breakfast", "Private light lunch"],
      transport: "Private local transfer if the confirmed practice venue requires it",
      activities: [
        {
          title: "Private movement at your actual level",
          description:
            "Work with balance, weight shift, breath and a short sequence; the session can be seated, shortened or made more active.",
        },
        {
          title: "Daoist thought without mystification",
          description:
            "Discuss Qingcheng's place in Daoist history and the ideas behind balance, attention and non-forcing with clear English interpretation.",
        },
      ],
      guideNote:
        "Teacher, interpreter, venue and session length are confirmed for the dates. No named master or private temple access is promised before agreement.",
      coordinates: { latitude: 30.8994, longitude: 103.5704 },
    },
    {
      day: 5,
      title: "Take tea without watching the clock",
      destination: "Qingcheng Mountain",
      summary:
        "A private tea session slows attention to water, leaf, aroma and conversation rather than turning tea into a demonstration. One included resort treatment is placed where it best suits the day; the remaining hours stay free.",
      image: pendingImage,
      hotel: hotelByPlace.qingcheng,
      meals: ["Breakfast", "Private tea session", "Resort dinner"],
      transport: "No transfer unless the confirmed tea host is off property",
      activities: [
        {
          title: "A tea table with room for silence",
          description:
            "Taste a small, considered selection and understand preparation, provenance and etiquette without pressure to buy tea.",
        },
        {
          title: "First individually selected treatment",
          description:
            "Choose a confirmed 60- to 90-minute resort treatment after reviewing preferences and contraindications with the provider.",
        },
      ],
      guideNote:
        "Spa menus and treatment suitability are provider-led and date-specific. Medical or therapeutic outcomes are not promised.",
      coordinates: { latitude: 30.9047, longitude: 103.5655 },
    },
    {
      day: 6,
      title: "Dujiangyan: what water can teach without becoming a lecture",
      destination: "Qingcheng Mountain and Dujiangyan",
      summary:
        "Use a focused half day to understand how Dujiangyan has managed river water for more than two millennia without a conventional dam. Return early enough that the cultural excursion does not consume the mountain stay.",
      image: pendingImage,
      hotel: hotelByPlace.qingcheng,
      meals: ["Breakfast", "Private local lunch"],
      transport: "Private vehicle and guide; walking route adapted before departure",
      activities: [
        {
          title: "The working logic of Dujiangyan",
          description:
            "See the river, channels and key viewpoints with an interpreter who explains how division, flow and seasonal water management work.",
        },
        {
          title: "An afternoon returned to you",
          description:
            "The guide leaves after the half-day chapter; the remainder is not backfilled with another attraction.",
        },
      ],
      guideNote:
        "Dujiangyan includes walking, bridges, steps and exposure to weather. A lower-effort route or full retreat day can replace it.",
      coordinates: { latitude: 31.002, longitude: 103.605 },
    },
    {
      day: 7,
      title: "A day that asks nothing of you",
      destination: "Qingcheng Mountain",
      summary:
        "There is no guide waiting in the lobby and no attraction held in reserve. Sleep late, read, use the spa, remain alone or change your mind. A second included treatment and dinner are coordinated only around the time you choose.",
      image: pendingImage,
      hotel: hotelByPlace.qingcheng,
      meals: ["Breakfast", "Private or resort dinner"],
      transport: "No scheduled transport",
      activities: [
        {
          title: "Protected unscheduled time",
          description:
            "The day remains genuinely free; AVIORA support is available without requiring contact or an activity decision.",
        },
        {
          title: "Second individually selected treatment",
          description:
            "A confirmed 60- to 90-minute treatment can be scheduled late enough to preserve sleep and changed within supplier terms.",
        },
      ],
      guideNote:
        "Treatment cancellation windows and resort availability are confirmed in the proposal. Declining a session does not trigger replacement sightseeing.",
      coordinates: { latitude: 30.9047, longitude: 103.5655 },
    },
    {
      day: 8,
      title: "Walk Qingcheng as a mountain, not a task",
      destination: "Qingcheng Mountain",
      summary:
        "Choose a lower- or upper-mountain route after reviewing weather, steps, cable transport and energy. The aim is to understand the forest and Daoist sites without measuring success by distance or the highest point reached.",
      image: pendingImage,
      hotel: hotelByPlace.qingcheng,
      meals: ["Breakfast", "Private mountain-area lunch"],
      transport: "Private vehicle, guide and confirmed public site transport where useful",
      activities: [
        {
          title: "A route selected for this particular day",
          description:
            "Begin at a quieter practical time and choose the mountain sector around walking comfort, weather, closures and crowd conditions.",
        },
        {
          title: "Living religious landscape",
          description:
            "Read temple architecture and Daoist history respectfully, with photography and access boundaries explained before entry.",
        },
      ],
      guideNote:
        "Qingcheng is not fully step-free. Temple entry, cable transport and private cultural access remain subject to current rules and conditions.",
      coordinates: { latitude: 30.8988, longitude: 103.5708 },
    },
    {
      day: 9,
      title: "Choose one rhythm worth taking home",
      destination: "Qingcheng Mountain",
      summary:
        "Return to the element that felt most useful: a short tai chi sequence, tea preparation, breath-led movement or a quiet morning structure. The teacher helps make it realistic for home rather than ceremonial only in China.",
      image: pendingImage,
      hotel: hotelByPlace.qingcheng,
      meals: ["Breakfast", "Private farewell dinner"],
      transport: "Local private transfer only if required by the chosen session",
      activities: [
        {
          title: "A practical return session",
          description:
            "Repeat and simplify one voluntary practice, with written notes or a short personal recording where the teacher permits.",
        },
        {
          title: "A farewell without a closing performance",
          description:
            "Share a private dinner shaped around preferred food and conversation, then leave the evening open for packing and sleep.",
        },
      ],
      guideNote:
        "Any recording requires the teacher's consent. The practice is educational and does not replace medical or mental-health care.",
      coordinates: { latitude: 30.9047, longitude: 103.5655 },
    },
    {
      day: 10,
      title: "Leave without turning departure into another deadline",
      destination: "Qingcheng Mountain to Chengdu",
      summary:
        "Your team confirms the flight, terminal, traffic allowance, luggage and meal timing before the private transfer. No sightseeing is added before the airport unless the flight genuinely allows it and you request it.",
      image: pendingImage,
      hotel: "Departure day",
      meals: ["Breakfast", "Departure meal if included in the confirmed timing"],
      transport: "Private transfer to Chengdu Tianfu or Shuangliu airport",
      activities: [
        {
          title: "A final unhurried morning",
          description:
            "Keep breakfast and check-out calm, with the pickup time built from the actual airport, terminal and traffic conditions.",
        },
        {
          title: "Door-to-terminal handover",
          description:
            "The team manages luggage and the airport transfer, with international connection details checked before departure.",
        },
      ],
      guideNote:
        "The correct Chengdu airport matters: Tianfu and Shuangliu have different transfer times. The written plan names the terminal and pickup buffer.",
      coordinates: { latitude: 30.319, longitude: 104.445 },
    },
  ],
  accommodations: [
    {
      name: "Selected luxury Chengdu arrival hotel",
      destination: "Chengdu",
      description:
        "Two nights in a quiet, high-service city hotel chosen for room comfort, airport logic and an easy departure toward Qingcheng rather than for the longest list of nearby sights.",
      roomStyle:
        "Two rooms; quiet location, bedding and room proximity requested before confirmation",
      highlights: [
        "Two-night arrival buffer",
        "Quiet-room review",
        "Late-start planning",
        "Private transfer",
      ],
      image: pendingImage,
    },
    {
      name: "Selected Qingcheng Mountain luxury retreat",
      destination: "Qingcheng Mountain",
      description:
        "Seven consecutive nights at a property selected for actual room quality, forest or garden setting, spa practice, food flexibility and access to Qingcheng. A resort such as Six Senses Qing Cheng Mountain may be proposed when it is the strongest fit for the dates.",
      roomStyle:
        "Two premium rooms or villas; exact property, room category, view, inclusions and cancellation terms named before booking",
      highlights: [
        "Seven-night continuity",
        "Two included treatments per guest",
        "Protected unscheduled day",
        "No mid-retreat flight",
      ],
      image: pendingImage,
    },
  ],
  included: [
    "9 nights based on four guests sharing two rooms: 2 nights in a selected luxury Chengdu hotel and 7 nights in a selected Qingcheng Mountain luxury retreat",
    "Daily hotel breakfast plus the seven private, hosted or resort lunches and dinners identified in the confirmed proposal",
    "Private English-speaking guide or interpreter, private vehicle and airport support on the confirmed service days",
    "Private Chengdu-to-Qingcheng transfer and private Qingcheng-to-Chengdu airport transfer",
    "AVIORA Quiet Journey Standard: pre-trip rhythm profile, one hotel change, protected unscheduled hours, room and meal requirements, and China-based support",
    "Private tea-house chapter in Chengdu, private tai chi sessions, Daoist cultural interpretation, private tea session, Dujiangyan half-day and privately guided Qingcheng Mountain day as confirmed",
    "Two individually selected 60- to 90-minute resort wellbeing treatments per guest, subject to provider consultation and written confirmation",
    "Confirmed entrance tickets and public site transport specifically named in the written proposal",
    "No compulsory shopping stops and no replacement sightseeing added to the protected retreat day",
  ],
  excluded: [
    "International or domestic flights to and from Chengdu",
    "Visa, travel insurance, medical care, medication and personal health expenses",
    "Meals, drinks, minibar and room-service charges not stated as included in the written proposal",
    "Medical diagnosis, psychotherapy, clinical treatment or any guaranteed physical or mental-health outcome",
    "Additional spa treatments, premium practitioner programs, private medical consultations or therapies not specifically quoted",
    "Guaranteed Six Senses, named suites, named teachers, private temple access or exclusive public-site access unless confirmed in writing",
    "Personal purchases, laundry and gratuities unless specifically included",
  ],
  optionalExperiences: [
    {
      title: "Three-night Hangzhou private extension",
      description:
        "Add West Lake, Longjing tea and contemplative garden culture after the retreat, with a domestic flight and a clearly separated second journey chapter rather than interrupting the seven-night mountain stay.",
      badges: ["Optional", "+3 nights"],
      image: pendingImage,
    },
    {
      title: "Private practitioner and suite upgrade",
      description:
        "Add a larger room or villa, more individual treatments and a deeper movement, sleep or nutrition program only after provider qualifications and personal suitability are reviewed.",
      badges: ["Signature", "Quoted to date"],
      image: pendingImage,
    },
    {
      title: "Panda conservation morning before the retreat",
      description:
        "Add a carefully timed panda-base visit in Chengdu without reducing the seven Qingcheng nights. The experience is observational and never promises animal contact.",
      badges: ["Pre-retreat", "Optional"],
      image: pendingImage,
    },
  ],
  transportation: {
    title: "One hotel change, no domestic flight and no repeated packing",
    description:
      "The core route deliberately stays within Chengdu and Qingcheng. Private road transfers keep luggage and timing under one team's control, while the correct airport is checked against the guest's actual flights.",
    items: [
      {
        label: "Chengdu arrival",
        value: "Private airport-to-hotel transfer",
        helper:
          "Tianfu or Shuangliu airport, terminal, luggage and room timing confirmed in advance.",
      },
      {
        label: "Chengdu to Qingcheng",
        value: "Private road transfer",
        helper: "Usually around ninety minutes, depending on traffic and the confirmed properties.",
      },
      {
        label: "Retreat days",
        value: "No routine daily vehicle requirement",
        helper:
          "Local transfers are used only when the selected teacher, tea host or cultural route requires them.",
      },
      {
        label: "Qingcheng departure",
        value: "Private transfer to the correct Chengdu airport",
        helper:
          "Pickup is calculated around the actual airport, terminal, flight and traffic buffer.",
      },
    ],
  },
  routeMap: {
    title: "Two bases, one uninterrupted mountain stay",
    description:
      "Chengdu absorbs the international arrival. Qingcheng then becomes home for seven nights, allowing the product to feel like a retreat rather than a multi-city itinerary.",
    stops: [
      {
        name: "Chengdu",
        days: "Days 1-3 · 2 nights",
        description: "Arrival recovery, tea-house life and a private rhythm conversation.",
        coordinates: { latitude: 30.5728, longitude: 104.0668 },
      },
      {
        name: "Qingcheng Mountain",
        days: "Days 3-10 · 7 nights",
        description:
          "Tai chi, tea, Daoist context, forest, treatments and protected unclaimed time.",
        coordinates: { latitude: 30.9047, longitude: 103.5655 },
      },
    ],
  },
  gallery: [],
  faqs: [
    {
      question: "Where are Chengdu and Qingcheng Mountain?",
      answer:
        "Chengdu is the capital of Sichuan Province in southwest China and the international gateway for this journey. Qingcheng Mountain lies near Dujiangyan, roughly 70 kilometers northwest of central Chengdu. The private road transfer usually takes around ninety minutes depending on traffic and the confirmed hotels. The journey starts and ends in Chengdu, so no domestic flight is required inside the core itinerary.",
    },
    {
      question: "What does the US$11,800 starting price include?",
      answer:
        "It is an indicative per-person starting price based on four guests sharing two rooms outside peak periods, equivalent to a group total from US$47,200. It includes nine nights, private transfers, confirmed guiding and cultural sessions, seven listed lunches or dinners, two resort treatments per guest, entrance arrangements and AVIORA Quiet Journey Standard support as detailed in the written proposal.",
    },
    {
      question: "Is Six Senses Qing Cheng Mountain guaranteed?",
      answer:
        "Only when it is named with the room category, rate and cancellation terms in your written confirmation. The published design assumes a genuine luxury retreat standard and may propose Six Senses Qing Cheng Mountain or another property after comparing actual availability, room condition, inclusions and fit for your dates.",
    },
    {
      question: "Is this a medical or mental-health retreat?",
      answer:
        "No. This is a private cultural and wellbeing journey, not medical treatment, psychotherapy or rehabilitation. Tai chi, tea, spa and breathing-related experiences are voluntary and do not promise to diagnose, treat or cure a condition. Any clinical service requires a separately confirmed qualified provider and your own medical advice where appropriate.",
    },
    {
      question: "Why are there so few destinations in ten days?",
      answer:
        "Because continuity is the product. Two Chengdu nights absorb the international arrival, then seven nights in one Qingcheng room remove repeated packing, check-in and travel decisions. Adding another city to the middle would weaken the quiet the journey is designed to deliver.",
    },
    {
      question: "Do we have to join every tai chi, tea or spa session?",
      answer:
        "No. This is a private journey, not a fixed group retreat. Every session can be adjusted, shortened or declined. Protected free time remains free and is not automatically replaced by sightseeing because you choose not to attend an activity.",
    },
    {
      question: "Is this suitable for a woman traveling alone?",
      answer:
        "Yes, subject to the same personal, health and travel review used for every guest. AVIORA can request female guides or practitioners where available, coordinate every airport and hotel handover, record preferred contact levels and keep a China-based support channel active throughout. Specific personnel are confirmed before booking.",
    },
    {
      question: "How physically demanding is Qingcheng Mountain?",
      answer:
        "The resort days can be very gentle, but the historic mountain includes stone steps, slopes, weather exposure and sections that are not step-free. We select a lower- or upper-mountain route only after reviewing walking comfort and current transport. Dujiangyan or the mountain day can be replaced with a lower-effort cultural alternative.",
    },
    {
      question: "Does the journey require a digital detox?",
      answer:
        "No. You decide how connected to remain. We can reduce nonessential messages, agree one daily contact window and keep printed information available, but phones and work contact are never confiscated or treated as a failure of the retreat.",
    },
    {
      question: "How should international travelers reach Chengdu?",
      answer:
        "The journey starts and ends in Chengdu. Depending on your origin and date, you may fly directly or connect through a major Asian or Chinese gateway. International flights are excluded. Share the proposed flights before ticketing so AVIORA can verify whether they use Tianfu or Shuangliu airport and build the arrival and departure days around the actual terminal.",
    },
    {
      question: "Can we add Hangzhou, pandas or another part of China?",
      answer:
        "Yes, but additions should sit before or after the seven-night Qingcheng stay rather than break it apart. A panda morning can be added in Chengdu, while Hangzhou works best as a separate three-night extension after the retreat. AVIORA will show the extra transport and price clearly before confirmation.",
    },
  ],
  related: {
    tours: [
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A premium first-China route for travelers who want the classic capitals with protected recovery between landmark days.",
        tags: ["First-time China", "Luxury", "Private"],
        image: pendingImage,
        route: "Beijing · Xi'an · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
      },
      {
        title: "Chengdu: Pandas & the Sichuan Table",
        description:
          "A focused private Chengdu extension combining pandas, tea-house life and Sichuan food culture.",
        tags: ["Chengdu", "Food", "Wildlife"],
        image: pendingImage,
        route: "Chengdu",
        duration: "4 days / 3 nights",
        href: "/tours/chengdu-pandas-sichuan-table",
      },
    ],
    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Ten%20Days%20at%20Qingcheng%20Mountain&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20private%20proposal%20for%20Ten%20Days%20at%20Qingcheng%20Mountain.%0A%0ATravel%20dates%20or%20month%3A%0ATravellers%3A%0ARooms%20and%20bed%20setup%3A%0APreferred%20daily%20rhythm%3A%0AMovement%2C%20spa%20or%20dietary%20considerations%3A%0AAnything%20you%20should%20plan%20around%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20to%20plan%20Ten%20Days%20at%20Qingcheng%20Mountain.%20Please%20advise%20on%20dates%2C%20the%20seven-night%20retreat%2C%20room%20options%20and%20a%20private%20quote%20for%20four%20guests.",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I am interested in Ten Days at Qingcheng Mountain. Please advise on retreat availability, room options, daily rhythm and a private quote for four guests.",
  },
};
