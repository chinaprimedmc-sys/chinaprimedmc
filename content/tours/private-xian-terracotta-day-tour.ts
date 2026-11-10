import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

const xianImage = (file: string, alt: string, width: number, height: number): MediaAsset => ({
  src: `/tours/private-xian-terracotta-warriors-day-tour/${file}`,
  alt,
  width,
  height,
});

const terracottaWarriors = xianImage(
  "01-xian-terracotta-warriors.webp",
  "Rows of life-sized Terracotta Warriors inside the Qin emperor's mausoleum pits in Xi'an",
  1600,
  2400,
);
const bellTowerEvening = xianImage(
  "02-xian-bell-tower-evening.webp",
  "Xi'an Bell Tower illuminated at dusk above the surrounding city",
  1086,
  1448,
);
const bellTowerNight = xianImage(
  "03-xian-bell-tower-night.webp",
  "Xi'an Bell Tower glowing against the deep blue evening sky",
  1086,
  1448,
);
const tangDynastyNightscape = xianImage(
  "04-xian-tang-dynasty-nightscape.webp",
  "Traditional Tang-style architecture illuminated in Xi'an at night",
  1077,
  1446,
);
const clayWarriorWorkshop = xianImage(
  "05-xian-clay-warrior-workshop.webp",
  "A visitor shaping a small clay figure by hand at a Xi'an pottery workshop",
  1440,
  1920,
);

export const privateXianTerracottaDayTour: Tour = {
  slug: "private-xian-terracotta-warriors-day-tour",
  visualStatus: "ready",
  publishedAt: "2026-08-21",
  updatedAt: "2026-11-10",
  title: "Private Terracotta Warriors Tour from Xi'an",
  subtitle:
    "Explore the Terracotta Army with your own guide and driver, museum admission and central Xi'an hotel pickup. Keep time for one Old City walk; lunch, City Wall tickets and clay-warrior making are optional. No compulsory shopping or jade-factory stops.",
  duration: "1 Day · Private · About 8 hours",
  durationIso: "PT8H",
  route: "Xi'an hotel · Terracotta Warriors · Xi'an Old City · Xi'an hotel",
  styles: ["Culture", "Family", "Photography"],
  hero: {
    eyebrow:
      "Private Xi'an day tour · guide, driver and Terracotta Warriors admission · no shopping",
    image: terracottaWarriors,
    primary: { label: "Check My Date", href: "#enquiry" },
    secondary: { label: "See What Is Included", href: "#included" },
  },
  seo: {
    title: "Private Terracotta Warriors Tour from Xi'an",
    description:
      "Visit the Terracotta Army from Xi'an with a private guide, driver, hotel pickup and museum tickets. Explore the main pits, then choose an Old City walk.",
    preserveCopy: true,
    keywords: [
      "private Terracotta Warriors tour from Xi'an",
      "Terracotta Army tour with guide and driver",
      "Terracotta Warriors tour with hotel pickup and tickets",
      "Xi'an private day tour English speaking guide",
      "Terracotta Warriors private tour no shopping",
    ],
  },
  overview: {
    pitch:
      "Look beyond the ranks of figures: compare faces and armor, follow the military formations and ask how broken fragments become restored warriors. Your guide connects the main pits with Qin history and conservation, adapting the depth to your interests. The museum is the day's priority. After lunch, choose one short Old City walk rather than trying to fit every Xi'an landmark into the afternoon.",
    answer:
      "This private Terracotta Warriors tour from Xi'an is an approximately eight-hour day for one booking party, with a private guide, a separate driver, central-hotel pickup and return, and standard museum admission. The planned museum route covers Pits 1, 2 and 3 when open, followed by one flexible Xi'an Old City walk. The Terracotta Army is in Lintong, outside central Xi'an. Lunch, City Wall admission, clay-warrior making and airport or railway-station transfers are separate; private touring does not provide exclusive access or guaranteed queue-free entry.",
    practicalities: [
      {
        label: "Duration",
        value:
          "About 8 hours from central Xi'an hotel pickup to return; the confirmed service window governs the day.",
      },
      {
        label: "Museum and location",
        value:
          "The Terracotta Army at Emperor Qinshihuang's Mausoleum Site Museum in Lintong, outside central Xi'an. The core guided visit is the principal excavation-pit area.",
      },
      {
        label: "Private service",
        value:
          "Your own guide, a separate driver and an air-conditioned vehicle. Museum halls, security checks and public streets are shared with other visitors.",
      },
      {
        label: "Guide language",
        value:
          "Request an English-speaking guide or another available language; the language and date-specific availability are confirmed before booking.",
      },
      {
        label: "Admission and identity",
        value:
          "Standard Terracotta Warriors museum admission is included, subject to reservation confirmation. Current identity and entry-document requirements are checked for your date.",
      },
      {
        label: "Afternoon route",
        value:
          "One selected Old City walk, such as the Bell and Drum Tower surroundings, Muslim Quarter lanes or City Wall exterior. Tower interiors, City Wall entry and paid tastings are not automatically included.",
      },
      {
        label: "Walking and access",
        value:
          "Allow for walking between exhibition areas, standing, queues and possible steps. Mobility needs and any optional museum transport are reviewed before confirmation.",
      },
      {
        label: "Pickup and return",
        value:
          "Central Xi'an hotels; Xi'an Xianyang International Airport (XIY), Xi'an North Railway Station and non-central addresses are separately quoted.",
      },
      {
        label: "Price and accommodation",
        value:
          "One written total for your private party. Lunch, City Wall tickets, clay-making and additional service hours are separate unless listed. No overnight accommodation is included.",
      },
    ],
    facts: [
      {
        label: "Suitable for",
        value: "Xi'an visitors who want a privately guided museum day with time for questions",
      },
      {
        label: "Pacing",
        value: "Museum walking and substantial standing; a shorter Old City walk can be agreed",
      },
      {
        label: "Time",
        value: "About 8 hours door to door",
        helper:
          "A typical central-hotel pickup is 08:30–09:00. Exact timing depends on your address, traffic, ticket window, crowds and selected upgrades.",
      },
      {
        label: "Included",
        value: "Private vehicle, guide and Terracotta Warriors admission",
        helper:
          "Pickup and return are included at hotels in Xi'an's main urban districts. Airport, railway-station and distant locations are priced before booking.",
      },
      {
        label: "You will understand",
        value: "Scale, military structure, individuality, archaeology and conservation",
        helper:
          "The visit is designed around the questions most first-time visitors actually have, not only a circuit through three buildings.",
      },
      {
        label: "Walking",
        value: "Easy to moderate, with substantial standing",
        helper:
          "The museum is large and busy. Distances, ramps, stairs, heat and standing time should be discussed before confirmation when mobility is a concern.",
      },
      {
        label: "Service promise",
        value: "Private, no shopping and clear before the day",
        helper:
          "One operating message confirms the hotel, pickup, entry requirements, guide contact, service window and selected upgrades.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Your Xi'an Hotel",
      days: "Before departure",
      title: "Leave with the admission and return plan already settled",
      description:
        "Send your Xi'an hotel, date, party details and preferred guide language first. Any identity details required for tickets are requested through the agreed booking channel after availability is checked. We confirm the pickup window, ticket basis, guide contact and practical route before the vehicle arrives.",
      see: "One clear operating plan stating where the day begins, what is included and how you return.",
      do: "Tell us about children, walking limitations, archaeology interests, dietary needs or a train or flight connection.",
      feel: "That the complicated part of visiting a ticketed museum has been dealt with before breakfast.",
    },
    {
      location: "Terracotta Warriors · Pit 1",
      days: "The first impact",
      title: "Stand before the army at full scale—and know what you are looking at",
      description:
        "Pit 1 is the moment most travelers have imagined: ranks of life-sized infantry beneath an immense excavation hall. Your guide positions the visit around crowd flow, then explains formation, restoration and why every warrior is not simply an identical moulded figure.",
      see: "The largest excavated formation, restored warriors, active archaeological areas and the scale of an imperial project buried for more than two millennia.",
      do: "Compare faces, hairstyles, armor and posture; identify repaired and unrestored sections; and pause where the formation reads most clearly.",
      feel: "The difference between recognizing a famous image and finally understanding its physical scale.",
    },
    {
      location: "Pits 2 & 3 · Conservation Story",
      days: "Look closer",
      title: "Move from spectacle to evidence: rank, command, cavalry and unfinished archaeology",
      description:
        "The smaller pits help explain how the army functioned. Your guide uses infantry, cavalry, chariots, officers and the command structure to turn the site into a readable military and archaeological story. Displays and operating conditions determine which close-view artifacts are available on the day.",
      see: "Different military units, command arrangements, selected close-view warriors or artifacts and the contrast between excavation and reconstruction.",
      do: "Read rank through clothing and headgear, ask how archaeologists reconstruct fragments, and understand why original pigment is so difficult to preserve.",
      feel: "That the warriors are individual historical evidence rather than thousands of interchangeable statues.",
    },
    {
      location: "Xi'an Old City",
      days: "Afternoon",
      title: "Return to a living city shaped by walls, trade, faith and food",
      description:
        "After independent lunch time or a pre-arranged meal, return toward central Xi'an for a flexible Old City chapter. Depending on traffic, energy and interests, walk near the Bell and Drum Towers, the Muslim Quarter food lanes or the City Wall exterior. Admission-based experiences are added only when selected.",
      see: "Historic city geometry, market lanes, local food preparation and the living multicultural texture behind Xi'an's Silk Road reputation.",
      do: "Walk with context, pause for an independent snack if desired and choose whether a City Wall or artisan upgrade earns a place in your day.",
      feel: "That Xi'an is not only an archaeological day trip but a city whose historical layers are still visible and lived in.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Private Day Tour Standard",
    title: "One major site, properly prepared and clearly explained.",
    description:
      "A private Terracotta Warriors day earns its value by removing the wrong kind of uncertainty: passport-linked admission, hotel pickup, traffic, what to see inside a large museum and whether a shopping stop has been hidden in the route.",
    items: [
      {
        label: "01 · Hotel-first pickup",
        value: "Your actual Xi'an address is checked before confirmation",
        helper:
          "Airport, railway-station, distant-hotel and unusual return supplements are stated before payment.",
      },
      {
        label: "02 · Passport-linked admission",
        value: "Terracotta Warriors admission is included and arranged for the confirmed guests",
        helper:
          "Names, passport details, date and current reservation requirements must match the final booking information.",
      },
      {
        label: "03 · Historical interpretation",
        value: "The guide connects the pits, Qin history, archaeology and conservation",
        helper:
          "The museum remains public and crowded; good interpretation makes the visit coherent without claiming exclusive access.",
      },
      {
        label: "04 · Honest walking plan",
        value: "The route is adjusted around the people traveling",
        helper:
          "Private transport reduces city logistics but cannot remove museum walking, standing, queues or every stair.",
      },
      {
        label: "05 · No shopping",
        value: "No jade factory, souvenir workshop or commission stop",
        helper:
          "An artisan workshop appears only when you choose the hands-on clay-warrior experience and its price is confirmed separately.",
      },
      {
        label: "06 · Transparent upgrades",
        value: "Lunch, City Wall and clay making remain optional",
        helper:
          "You see what each addition costs and whether it changes the service window before you commit.",
      },
    ],
    note: "Terracotta Warriors admission and museum access follow live reservation, passport, security, capacity and operating rules. Xi'an City Wall, bicycles, workshops and performance venues follow their own weather, age, height, safety and availability conditions. AVIORA confirms the date-specific plan but cannot guarantee empty halls, unrestricted display access or an attraction that closes unexpectedly.",
  },
  highlights: [
    {
      title: "Pit 1 with the scale put into context",
      description:
        "See the famous formation with a guide who explains military order, individual details, excavation and restoration instead of leaving you to decode an immense hall alone.",
      category: "Culture",
      image: terracottaWarriors,
    },
    {
      title: "Pits 2 and 3: military roles and archaeological evidence",
      description:
        "Use Pits 2 and 3 to understand cavalry, command, rank and archaeological evidence beyond the best-known panoramic view.",
      category: "Culture",
      image: terracottaWarriors,
    },
    {
      title: "Xi'an as a living old city, not only a museum transfer",
      description:
        "Finish with a flexible Old City walk around walls, towers, market lanes and food culture, without turning the afternoon into compulsory shopping.",
      category: "Photography",
      image: bellTowerEvening,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Terracotta Army in depth, then Xi'an's living Old City",
      destination: "Xi'an · Lintong · Xi'an",
      summary:
        "Meet your private guide and driver at the confirmed Xi'an hotel. Travel to the Emperor Qinshihuang's Mausoleum Site Museum, use the included passport-linked admission and explore the principal Terracotta Warriors pits with structured interpretation. After independent lunch time or a selected meal, return toward Xi'an for one selected Old City walk near the Bell and Drum Towers, Muslim Quarter lanes or City Wall exterior before a private hotel return. Exact sequencing follows ticket timing, traffic, crowds, weather and the group.",
      image: terracottaWarriors,
      hotel: "No overnight stay required · pickup and return at your Xi'an hotel",
      meals: ["Independent lunch time; selected Xi'an noodle lunch available as an upgrade"],
      transport:
        "Private central-Xi'an hotel pickup and return, with private vehicle and professional driver during the confirmed service window",
      activities: [
        {
          title: "Central Xi'an hotel pickup and drive to Lintong",
          time: "Around 08:30\u201309:00 pickup \u00b7 allow roughly 1\u20131.5 hours on the road",
          description:
            "Meet your private guide and driver at the confirmed hotel. The museum is outside the city center; departure follows your ticket window and hotel address. Traffic can extend this planning range, so no fixed arrival time or immediate admission is promised.",
        },
        {
          title: "Museum arrival and included admission",
          time: "Entry checks and queues vary by date",
          description:
            "Follow the confirmed ticket and identity process, with your guide coordinating the arrival. Standard admission does not bypass security or public queues. Bring the entry documents specified in your booking confirmation; extra on-site transport is used only if available and agreed.",
        },
        {
          title: "Pits 1, 2 and 3 with your private guide",
          time: "Plan around 2.5\u20133 hours for the main museum visit",
          description:
            "Prioritize the principal pits when open. Compare Pit 1's formations with military roles and command arrangements in Pits 2 and 3. The guide adapts the order to crowd flow, access and your interests, separating archaeological evidence from interpretation. No particular exhibit, empty viewpoint or special access is guaranteed.",
        },
        {
          title: "Lunch break",
          time: "Allow around 45\u201360 minutes",
          description:
            "Keep lunch independent or select a pre-arranged local meal. Meals, drinks and tastings are separate unless listed in the quote. Share allergies or dietary requirements before booking; a Muslim Quarter walk does not by itself verify a halal meal.",
        },
        {
          title: "Return toward Xi'an and one Old City walk",
          time: "Afternoon \u00b7 allow roughly 1\u20131.5 hours for the return drive and around 45\u201360 minutes for a selected walk",
          description:
            "Choose one practical area: the Bell and Drum Tower surroundings, Muslim Quarter lanes or City Wall exterior. The plan is adjusted to traffic, museum time and energy. City Wall or tower admission and clay-warrior making are optional; they may replace this walk or require separately quoted extra hours.",
        },
        {
          title: "Private return to your Xi'an hotel",
          time: "Usually around 16:30\u201317:00 \u00b7 timing is illustrative",
          description:
            "Return to the agreed central hotel or address within the confirmed service window. Traffic, queues and a longer museum visit can change the finish. Any flight or train connection must be assessed before booking rather than assumed to fit after the tour.",
        },
      ],
      guideNote:
        "For the initial inquiry, send the date, hotel, party size, child ages, preferred language, walking or hearing needs and any flight or train deadline. Any required ticket identity information is collected later through the agreed booking channel. Private guiding does not provide exclusive access or personal-care assistance.",
      coordinates: { latitude: 34.3841, longitude: 109.2785 },
    },
  ],
  accommodations: [
    {
      name: "Your Xi'an hotel or confirmed central address",
      destination: "Xi'an",
      description:
        "This is a private day tour, so no overnight stay is included. Service begins and ends at a hotel in Xi'an's main urban districts or another confirmed central location. Airport, railway-station and non-standard pickup requirements are priced before booking.",
      roomStyle: "No overnight stay required",
      highlights: [
        "Hotel-first planning",
        "Confirmed admission",
        "Private return",
        "No hotel change",
      ],
      image: bellTowerEvening,
    },
  ],
  included: [
    "Private pickup and return at a hotel in Xi'an's main urban districts; airport, railway-station, out-of-area and non-standard locations are quoted before booking",
    "Private air-conditioned vehicle with professional driver for the confirmed service window",
    "Private guide for the confirmed Terracotta Warriors and selected Old City route; requested language and availability confirmed before booking",
    "Terracotta Warriors museum admission for the confirmed travelers",
    "Pre-trip review of hotel address, date, group details, passport-linked ticket information, walking preferences and route priorities",
    "Bottled water in the vehicle and one final operating message with pickup, contacts and the confirmed plan",
    "No compulsory shopping stops, jade factories or commission-based souvenir workshops",
  ],
  excluded: [
    "Lunch, drinks, personal purchases, gratuities, travel insurance and items not expressly listed as included",
    "Xi'an City Wall or tower admission, bicycle rental, clay-warrior making, food tastings, shows and any optional museum transport unless selected in the written confirmation",
    "Airport or railway-station pickup or drop-off, out-of-area hotels, late-night return or additional vehicle and guide hours unless quoted",
    "Guaranteed access to a specific display, viewing position, workshop, performance or venue affected by reservation, security, weather, maintenance, capacity or operator decisions",
    "Wheelchair, porter, medical care, hearing equipment or accessibility services unless separately requested and confirmed",
  ],
  optionalExperiences: [
    {
      title: "Make your own miniature clay warrior",
      description:
        "After seeing the original army, add a practical clay-warrior session with a date-confirmed local host or artisan setting. This is an optional hands-on experience, not a disguised shopping stop; the format, host, time required, any take-home item and whether it replaces the Old City walk or adds service hours are confirmed before payment.",
      badges: ["Hands-on", "Host availability"],
      image: clayWarriorWorkshop,
    },
    {
      title: "Selected Xi'an noodle lunch",
      description:
        "Add a pre-arranged local lunch, with an approachable fixed menu and dietary review. Drinks and dishes beyond the agreed menu remain separate.",
      badges: ["Dietary needs checked"],
      image: tangDynastyNightscape,
    },
    {
      title: "Xi'an City Wall admission",
      description:
        "Add City Wall admission when the day's timing, weather and walking level make an elevated old-city view worthwhile. The route, gate and whether it replaces the included exterior walk or needs extra service time are confirmed with the final plan.",
      badges: ["Weather considered"],
      image: bellTowerNight,
    },
    {
      title: "City Wall bicycle rental",
      description:
        "Add bicycle rental after City Wall admission, subject to the operator's current age, height, deposit, weather and safety rules. It is not recommended automatically for every traveler.",
      badges: ["Admission separate", "Rules apply"],
      image: terracottaWarriors,
    },
    {
      title: "Additional private touring time",
      description:
        "Add private guide, driver and vehicle time by the hour, subject to date-specific availability. Use it for a slower museum visit, a longer Old City chapter or a confirmed evening plan.",
      badges: ["Subject to availability"],
      image: terracottaWarriors,
    },
  ],
  transportation: {
    title: "One private vehicle from your Xi'an hotel to the museum and back",
    description:
      "The Terracotta Warriors museum lies outside central Xi'an. A private vehicle removes the transfer puzzle and keeps the return connected to your Old City plan. It does not guarantee a fixed travel time through city and Lintong traffic or remove walking inside the public museum.",
    items: [
      {
        label: "Pickup",
        value: "Xi'an hotel lobby or confirmed central address",
        helper:
          "Main urban hotel districts are included; airports, railway stations and distant addresses are checked first.",
      },
      {
        label: "Vehicle",
        value: "Private air-conditioned car or MPV",
        helper:
          "Vehicle size is matched to the party and luggage, then named in the final operating plan.",
      },
      {
        label: "At the museum",
        value: "Walking between public exhibition areas with your private guide",
        helper:
          "Museum shuttles, wheelchairs and other services are used only when available and confirmed for the date.",
      },
      {
        label: "Return",
        value: "Old City chapter and direct return to the confirmed Xi'an address",
        helper:
          "The afternoon route and any approved address change are stated before the day begins.",
      },
    ],
  },
  routeMap: {
    title: "From your Xi'an hotel to the army—and back to the living city",
    description:
      "The practical route begins at your hotel, travels privately to the Terracotta Warriors museum in Lintong, then returns toward Xi'an's Old City before the hotel drop-off. Optional workshops, meals and City Wall access are added only when confirmed.",
    stops: [
      {
        name: "Xi'an hotel pickup",
        days: "Start",
        description: "A confirmed lobby or central-address pickup.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        name: "Terracotta Warriors museum",
        days: "Main visit",
        description:
          "Included passport-linked admission and private interpretation of the principal pits.",
        coordinates: { latitude: 34.3841, longitude: 109.2785 },
      },
      {
        name: "Xi'an Old City",
        days: "Afternoon",
        description: "A flexible cultural walk, with admission-based upgrades shown separately.",
        coordinates: { latitude: 34.261, longitude: 108.942 },
      },
      {
        name: "Xi'an hotel return",
        days: "Finish",
        description: "Private return to the confirmed central address.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
    ],
  },
  gallery: [
    terracottaWarriors,
    bellTowerEvening,
    bellTowerNight,
    tangDynastyNightscape,
    clayWarriorWorkshop,
  ],
  faqLimit: 18,
  faqs: [
    {
      question: "What is included in this private Terracotta Warriors tour from Xi'an?",
      answer:
        "The core package includes central Xi'an hotel pickup and return, a private guide, a separate driver and air-conditioned vehicle, standard Terracotta Warriors museum admission, bottled water and one selected Old City walk during the agreed service window. Plan about eight hours. Lunch, City Wall or tower entry, bicycles, clay-making and extra service hours are separate unless listed in your quote.",
    },
    {
      question: "Are Terracotta Warriors tickets included, and do I need my passport?",
      answer:
        "Standard museum admission for the confirmed travelers is included, subject to reservation availability. We check the current booking and entry-document requirements for your date and ask for any required identity details through the agreed booking channel after the initial availability check. Follow the written instructions about original documents and ensure ticket details match the traveler. An inquiry is not a ticket reservation.",
    },
    {
      question: "Can I book an English-speaking guide and private driver?",
      answer:
        "Yes, request an English-speaking guide when you inquire; the language and availability are confirmed for your date. Your guide accompanies the planned museum visit and explains the historical context, while a separate driver handles the vehicle. Other languages or a specialist archaeology interest can be requested. A standard guide booking does not promise an archaeologist or access to restricted research areas.",
    },
    {
      question: "How long do we spend at the Terracotta Army museum?",
      answer:
        "We normally plan around 2.5\u20133 hours for the principal museum visit, with arrival checks, road travel and lunch considered separately. The actual pace depends on crowds, open areas and your interests. A central Xi'an to Lintong drive may take roughly 1\u20131.5 hours each way as a planning range, with longer traffic delays possible. This is why the museum remains the priority over a long afternoon checklist.",
    },
    {
      question: "Does the tour visit all three Terracotta Warriors pits?",
      answer:
        "The planned route includes Pits 1, 2 and 3 when open. Your guide may change their order around crowd flow and operating conditions. Available artifacts and displays vary; a named exhibit, close-up viewpoint or active conservation area is not guaranteed. Tell us if a particular archaeological topic matters so we can check what can be included.",
    },
    {
      question: "Does a private tour include skip-the-line or VIP museum access?",
      answer:
        "No. Standard admission and private guiding do not bypass security, capacity controls or public queues, and they do not provide exclusive access to the pits. Advance ticket arrangements remove the need to organize the booking yourself; they are not a promise of immediate entry. Any special-access claim would require separate verified arrangements and is not part of this product.",
    },
    {
      question: "How much does a private Terracotta Warriors tour cost for two people or a family?",
      answer:
        "We provide one written total for your actual private party. The quote states the date, adult and child numbers, vehicle, guide language, pickup and return addresses, service window and selected extras. Ticket arrangements and vehicle needs can differ between a couple and a family. No numerical starting price is currently verified for this tour; the full total is confirmed before payment.",
    },
    {
      question: "Can you pick us up at Xi'an airport or Xi'an North Railway Station?",
      answer:
        "Potentially, with a separate quote and a route reviewed around the actual arrival or departure. Xi'an Xianyang International Airport (XIY), Xi'an North Railway Station and other non-central pickups are not included in the central-hotel package. Send flight or train details, luggage and a firm return deadline. Waiting, road travel and station or airport procedures reduce available sightseeing time; a shortened route may be necessary.",
    },
    {
      question: "Can I visit the Terracotta Warriors as a day trip from Beijing or Shanghai?",
      answer:
        "This product starts and ends at a confirmed Xi'an hotel or separately agreed local address. It does not include flights, intercity rail or long-distance connections from Beijing or Shanghai. A same-day arrival and departure must be reviewed as a separate plan with realistic transfer and check-in buffers. An overnight in Xi'an often leaves more useful time for the museum.",
    },
    {
      question: "Does the Old City walk include Xi'an City Wall admission?",
      answer:
        "No. The included afternoon component is one selected public-area walk, such as the Bell and Drum Tower surroundings, Muslim Quarter lanes or City Wall exterior. It does not automatically include walking on top of the wall, tower interiors, bicycle rental or several neighborhoods. If you choose City Wall admission, the quote states the ticket and whether it replaces the walk or needs extra time.",
    },
    {
      question: "Does the tour include Lishan Garden or entry to the emperor's tomb?",
      answer:
        "The core guided route is the principal Terracotta Warriors excavation-pit area. Do not assume a separate guided visit to Lishan Garden, every part of the museum complex or a particular additional exhibition. We check current ticket coverage and transfer arrangements for your date, then quote any additional guided route and time. This tour does not offer access to the emperor's burial chamber; ticket coverage and the sites physically visited are different questions.",
    },
    {
      question: "Are there jade-factory stops, and can we make a clay warrior instead?",
      answer:
        "There are no compulsory jade-factory, souvenir-workshop or commission sales stops. Clay-warrior making is a separately selected hands-on activity, subject to the host's availability and a confirmed format. It may replace the Old City walk or require additional guide and vehicle hours. The host, price and any take-home item are stated before booking; participation does not require an extra purchase.",
    },
    {
      question: "Is lunch included, and can you arrange halal or other dietary meals?",
      answer:
        "Lunch is separate unless a defined meal appears in your written quote. You can eat independently or request an arranged lunch with dietary requirements reviewed before booking. A walk through the Muslim Quarter is not a halal meal guarantee. Tell us what verification or allergy precautions you need so we can check the actual restaurant and menu; drinks, tastings and extra dishes are separate unless listed.",
    },
    {
      question:
        "Is the Terracotta Warriors tour suitable for children, older travelers or wheelchair users?",
      answer:
        "Suitability depends on the individual traveler. The museum involves walking between halls, standing, queues and possible steps or uneven surfaces; private transport does not make the site fully accessible. Share child ages, stroller or wheelchair use, stairs and standing tolerance, and hearing needs. We review a shorter route and any available site services before confirmation. Guiding does not include lifting, medical care or personal-care assistance.",
    },
    {
      question: "What happens if it rains, an exhibition closes or tickets are unavailable?",
      answer:
        "Indoor exhibition halls do not remove outdoor transfers, walking or queues. Weather and live access can change the plan. A requested date remains subject to ticket and supplier confirmation; if the core visit cannot be arranged, we explain the available alternatives before you agree. If conditions change after booking, the written change and cancellation terms apply. Any additional paid service needs agreement before a new charge.",
    },
    {
      question: "How do I check availability and book the Xi'an tour?",
      answer:
        "Send your preferred date, party size and child ages, hotel or pickup address, guide language, interests, walking needs and any fixed train or flight deadline. Do not include passport numbers in the initial inquiry. We check guide, vehicle and ticket arrangements, then send a written proposal and any necessary booking-data instructions. The date is confirmed only after the agreed terms, required payment and written booking and supplier confirmation.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "Xi'an & Beijing: Warriors, Walls and Imperial Capitals",
        description:
          "A six-day private journey linking the Terracotta Army, Xi'an's living heritage, high-speed rail, imperial Beijing and the Great Wall.",
        tags: ["Private", "History", "High-speed rail"],
        image: terracottaWarriors,
        route: "Xi'an · Beijing",
        duration: "6 days / 5 nights",
        href: "/tours/xian-beijing-terracotta-warriors-great-wall-private-6-day-tour",
      },
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A premium 12-day private China journey with three full Xi'an nights and time to understand the Terracotta Army without a rushed connection.",
        tags: ["Private", "First-time China", "Easy pace"],
        image: terracottaWarriors,
        route: "Beijing · Xi'an · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
      },
    ],
    destinations: [],
  },
  planningResources: [
    {
      label: "Xi'an destination guide",
      href: "/destinations/xian",
      description:
        "Choose which city sights to keep for another day instead of crowding the museum afternoon.",
    },
    {
      label: "Terracotta Army ticket guide for international visitors",
      href: "/journal/terracotta-army-tickets-foreign-visitors",
      description:
        "Understand identity, reservation and entry questions before confirming the visit.",
    },
    {
      label: "Official museum information",
      href: "https://www.bmy.com.cn/",
      description:
        "Use Emperor Qinshihuang's Mausoleum Site Museum for its current notices and access information; the plan is confirmed for your travel date.",
    },
    {
      label: "UNESCO: Mausoleum of the First Qin Emperor",
      href: "https://whc.unesco.org/en/list/441/",
      description:
        "Read the World Heritage property's historical context; the listing is not a ticket or guided-access promise.",
    },
  ],
  inquiryChecklist: [
    "Preferred date, adult numbers and children's ages",
    "Xi'an hotel or pickup address, return point and any train or flight deadline",
    "Preferred guide language and archaeology or family interests",
    "Walking, standing, hearing, dietary and luggage requirements",
    "Optional City Wall entry, clay-warrior session or lunch; flight or train details for terminal pickups",
  ],
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Xi%27an%20Terracotta%20Warriors%20Day%20Tour&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20to%20check%20a%20private%20Xi%27an%20Terracotta%20Warriors%20day%20tour.%0A%0ADate%3A%0ANumber%20of%20guests%20and%20ages%20if%20children%3A%0AXi%27an%20hotel%20or%20pickup%20address%3A%0AAny%20airport%20or%20railway%20connection%3A%0AOptional%20experiences%20of%20interest%3A%0AAny%20mobility%2C%20hearing%2C%20dietary%20or%20other%20considerations%3A%0A",
    whatsappHref: `https://wa.me/8618027438191?text=${encodeURIComponent("Hello AVIORA, I would like a private-group quote for the Terracotta Warriors tour from Xi'an.\nPreferred date:\nAdults and children (with ages):\nXi'an hotel / pickup address:\nReturn address and fixed train or flight deadline:\nPreferred guide language:\nMain interests: archaeology / family / photography\nOptional: City Wall / clay-warrior making / lunch\nWalking, standing, hearing, dietary and luggage needs:\nIf airport or station: flight / train and arrival / departure details:\nPlease advise any required ticket-booking documents after checking availability.")}`,
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "I would like to check a private Xi'an Terracotta Warriors day tour from my Xi'an hotel.",
  },
};
