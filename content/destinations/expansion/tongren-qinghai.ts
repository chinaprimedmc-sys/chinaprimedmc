import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/tongren-qinghai.svg",
  alt: "Original Tongren Qinghai planning schematic comparing a Regong art visit, monastery interpretation and two nights in one town base; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const tongrenQinghaiGuide: ExpandedDestination = {
  id: "tongren-qinghai",
  name: "Tongren Qinghai",
  region: "northwest",
  kicker: "Regong art, working traditions and time to look closely",
  description:
    "Discover Tongren's Regong art through thoughtful thangka interpretation, a considered monastery visit and a comfortable town base on a Qinghai journey.",
  stay: "2 nights for one full cultural day",
  bestFor: "Tibetan Buddhist art, thangka interpretation and a slower Qinghai–Gansu journey",
  interests: ["heritage", "food"],
  relatedDestinationIds: ["yushu", "xining", "xiahe", "qinghai-lake"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tongren Qinghai Travel Guide: Regong Art & Thangka",
    seoTitle: "Tongren Qinghai Guide: Regong Art & Stays",
    seoDescription:
      "Explore Tongren, Qinghai: Regong thangka art, Wutun and Rongwo monastery visits, two-night planning, town hotels and connections to Xining and Xiahe.",
    answer:
      "Tongren (同仁), also encountered as Rebkong, is a city in Huangnan Tibetan Autonomous Prefecture, Qinghai, known for Regong arts. It is a different place from Tongren (铜仁) in Guizhou. Come for Tibetan Buddhist art and the relationship between workshops, monasteries and everyday life, rather than another sequence of temple photographs. A two-night stay gives one full day to combine a carefully explained art visit with selected monastery surroundings. The town is at roughly 2,500 meters; the actual hotel and road elevations need their own review. Regong arts are on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity, which recognizes a living tradition, not guaranteed visitor access to any artist or religious interior.",
    stayAnswer:
      "Two nights are a useful starting point: arrive without rushing, spend a full day on Regong art and selected religious heritage, then continue. Three can suit a confirmed specialist session, a second art interest or a gentler pace. One night works only when the roads leave meaningful visiting time; arriving late and leaving early misses the reason to come. A return outing from Xining is a different proposition with a substantial road component. Compare the complete day rather than choose it simply to avoid changing hotels.",
    hotelAnswer:
      "A dependable Tongren town hotel is usually the most practical base for a first cultural stay. Compare the exact room's heating, bathroom, hot water, quiet, breakfast and vehicle approach, then the roads to the selected visits. A central address makes dinner easier but may bring street noise. A quieter edge-of-town hotel can work with coordinated transport. A workshop-area guesthouse needs a separate comfort and meal assessment: proximity to art does not establish a hosted experience or a high-end room. Check accommodation arrangements for the actual travelers before confirming the itinerary.",
    sightseeingQuestion: "Should I prioritize Wutun art or Rongwo Monastery?",
    sightseeingAnswer:
      "Let the interest determine the balance. Wutun, also written Wutong, is associated with Regong art traditions; upper and lower monastery settings and any separate working studio are different visits. Rongwo Monastery, also called Longwu, provides a religious and town context. For an art-focused day, start with clear explanation of a thangka's subject and composition, then look for those ideas in an available religious setting. If religious history matters more, reverse the emphasis. A working artist meeting, public monastery visit, introductory painting exercise and purchase appointment need distinct arrangements; booking one does not establish the others.",
    visitorResources: [
      {
        label: "UNESCO: Regong arts",
        href: "https://ich.unesco.org/en/RL/regong-arts-00207",
        scope:
          "Reference for the intangible-heritage inscription and the tradition's broader scope, including thangka, sculpture and related arts. This is not a World Heritage property listing, artist booking service or confirmation of access to a particular workshop, ritual or monastery hall.",
      },
      {
        label: "Qinghai provincial government",
        href: "https://www.qinghai.gov.cn/",
        scope:
          "Regional information and dated public notices, mainly in Chinese. Check current roads, local visitor arrangements and the responsible institutions for the proposed dates. A general tourism description does not confirm an artist appointment, open interior or a particular hotel's services.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General altitude guidance rather than personal medical clearance. Review the full ascent, sleeping elevations and individual health with an appropriate clinician. A lower town than some nearby plateau destinations still requires a considered plan.",
      },
    ],
    serviceScope:
      "A worthwhile art proposal names the host or institution when confirmed, language support, subject, duration, group size, what may be observed and whether there is any hands-on component. It also states the actual hotel, road transport, meals, monastery visitor arrangements and included fees. A general guide may offer context while a specific artistic discussion needs suitable subject knowledge and interpretation. Purchasing should remain optional. Private guiding cannot guarantee an artist is working, authorize photography or open a restricted hall. Tell us whether you want art appreciation, an introductory activity or purchase advice so the arrangement can be assessed honestly.",
    routeAdvice:
      "Tongren can add an art-focused chapter to Xining or form part of a properly paced journey toward Xiahe in Gansu. These are full transport and sleeping-elevation decisions, not spare excursions after a complete cultural day. Qinghai Lake offers a separate landscape chapter, with higher terrain and its own roads. No matching published Tongren or Regong tour is recommended here. For a tailored proposal, share dates, arrival and onward gateways, previous sleeping elevation, art interests, walking needs and room expectations; the first decision is how much meaningful cultural time to protect.",
    practicalPlanning: {
      timing:
        "Secure the art appointment before fixing the day's sequence. Religious visitor hours, the host's working schedule, meals and interpretation time may not align with a rigid list of stops. Give one substantial subject room to develop instead of scheduling a new monastery every hour. A festival is a separate dated journey with crowding, rooms and community access to assess; it should not be added casually to a quiet workshop itinerary.",
      walking:
        "Ask about the actual approach, courtyard surfaces, steps, standing time, seating and toilets for each visit. A short walk can still involve uneven paving or prolonged standing during interpretation. Review the roughly 2,500-meter town setting, any higher roads and the next sleeping altitude. Discuss individual health needs with a qualified clinician; a private car and comfortable room are useful logistics, not a substitute for an appropriate ascent plan.",
      cost: "Compare the named room, full road journey, guide and interpreter roles, host time, entry arrangements and any materials. A specialist discussion and an introductory painting session have different preparation costs. Clarify whether a sales visit is involved and any commission relationship; a valuable cultural session should remain worthwhile without a purchase. Artworks, framing, packing, shipping and export checks are separate expenses unless expressly included.",
    },
    attractions: [
      "Regong thangka interpretation, with a confirmed suitable host when available",
      "Selected public visits in the Wutun or Wutong monastery setting",
      "Rongwo or Longwu Monastery and its relationship to the town",
      "A separately arranged introduction to sculpture or another Regong art form",
      "Town streets and a relaxed meal between the day's substantial visits",
      "A festival only as a distinct dated plan with current community arrangements",
    ],
    stays: [
      {
        label: "1 night / a focused stop on a wider route",
        advice:
          "Choose one main art or monastery interest and protect its useful hours. Check both roads before booking: late arrival and early departure do not create a cultural visit merely because the hotel is in Tongren. Avoid attaching several additional sights to the departure drive.",
      },
      {
        label: "2 nights / one complete cultural day",
        advice:
          "Use one settled town base. Combine a substantial art introduction with selected monastery context, lunch and time to revisit questions. This is a stronger first-visit starting point than a rushed round trip, provided the actual room and road plan suit the guests.",
      },
      {
        label: "3 nights / a second confirmed purpose",
        advice:
          "Add time for another art medium, a longer hosted session or a genuinely slower stay. Confirm what distinguishes the extra day before extending. Do not promise a multi-day masterclass, festival participation or private teaching simply because more nights have been booked.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Tongren / easier meals and town time",
        advice:
          "A practical choice for a compact cultural visit. Compare the precise room's noise, heating, bathroom, lift or stairs and pickup point. Walkable dining is useful, but a central hotel label does not establish that every art visit is within walking distance.",
      },
      {
        name: "A quieter town-edge address / coordinated transport",
        advice:
          "Can suit guests who value sleep and a dependable room over evening strolling. Check the actual restaurant hours, breakfast, vehicle approach and roads to both Wutun and Rongwo interests. A grand lobby or star label is less useful than evidence of the booked room's comfort.",
      },
      {
        name: "A specific workshop-area guesthouse / assess separately",
        advice:
          "Consider only when the room, food, host relationship and travel purpose genuinely work. Verify hot water, heating, private bathroom, sound and luggage access. Staying nearby is not permission to enter a studio at will, attend rituals or photograph residents.",
      },
    ],
    tradeoffs: [
      {
        title: "Learn to read the image before comparing prices",
        advice:
          "Start with the depicted figure, identifying attributes, arrangement and intended use. Ask the interpreter to distinguish iconographic rules from the artist's own choices. A close look at line, color and detail gives a novice a more useful foundation than hearing that a painting took many months or uses expensive pigments.",
      },
      {
        title: "A demonstration and a hands-on session teach different things",
        advice:
          "Watching drawing, color preparation or detail work reveals a process; an introductory exercise lets a visitor try a limited technique. Neither is completion of a traditional thangka or formal religious training. Ask what is actually prepared, which steps you will see and what can be taken away. Children need a suitable format, materials and duration.",
      },
      {
        title: "UNESCO recognition applies to a living tradition",
        advice:
          "Regong arts encompass more than one kind of painting and more than one artist. The intangible-heritage listing does not make every shop a certified workshop or every artist meeting an included public service. Ask how the chosen visit explains the tradition and who will lead it rather than rely on a UNESCO label alone.",
      },
      {
        title: "Monastery context should deepen the art visit",
        advice:
          "A selected religious visit can explain how images function within practice, architecture and community life. It need not become a hunt for every interior. Respect worshippers, observe local photography instructions and keep teaching or ritual participation separate from ordinary sightseeing. Interpretation should explain the setting without interrupting its use.",
      },
      {
        title: "Buying art deserves its own conversation",
        advice:
          "Ask who made the work, the material and technique, whether it is a reproduction, what documentation accompanies it and how the final price is determined. Do not infer age, provenance, natural pigments or investment value from appearance. Larger, older or culturally sensitive objects need appropriate export advice before purchase; a seller's assurance is not the whole assessment.",
      },
      {
        title: "A Qinghai–Gansu route needs more than a line on a map",
        advice:
          "Tongren and Xiahe have distinct art and monastery strengths, so visiting both can be worthwhile when the interpretation develops rather than repeats. Review complete roads, higher sections, operating conditions and sleep. Avoid making a full art day compete with a long transfer and another major monastery arrival visit.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yushu",
        advice:
          "Yushu offers a separate, higher city stay around Jiegu Monastery, the Gyanak Mani stones and selected religious-memory subjects. Review the complete transport, overnight profile, actual room and modest arrival before combining it with northeastern Qinghai. Shared cultural interests do not make it a local excursion or guarantee readiness for the higher stay.",
      },
      {
        slug: "xining",
        advice:
          "Xining adds regional collections, city food and a separately planned Kumbum visit. It can provide a gateway chapter before Tongren's Regong art focus. Compare the complete road, useful arrival hours and sleeping elevations rather than treat the capital hotel as a convenient base for every Qinghai outing.",
      },
      {
        slug: "xiahe",
        advice:
          "Xiahe adds Labrang and a different Gannan religious setting. Give Tongren's image-making traditions and Labrang's monastery interpretation distinct purposes, with meaningful nights in each. Confirm the actual road and ascent rather than describe the connection as a short extension.",
      },
      {
        slug: "qinghai-lake",
        advice:
          "Qinghai Lake adds landscape rather than another art stop. Its higher elevation, selected shore route and overnight comfort need separate planning. Choose a sensible sequence through the actual roads and bases; a shared province does not make the lake a spare afternoon from Tongren.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through early autumn is a useful starting point for a cultural road journey, with temperatures and road conditions checked for the actual route. Summer holiday demand can affect rooms and busy religious settings. Cooler months may suit an art-led stay when the host, heating, meals and roads are confirmed. Festivals follow their own calendars and community arrangements; choose one deliberately rather than promise a quiet visit and a major gathering at once. Indoor art interests offer substance beyond landscape weather, but a workshop is not automatically open because the town is accessible.",
    orientation:
      "Tongren city lies in Huangnan Tibetan Autonomous Prefecture in eastern Qinghai. Older English references may call it Tongren County, while Rebkong and Regong appear in cultural and art contexts. Use 同仁, Qinghai and the full Chinese hotel address for bookings, keeping it separate from 铜仁 in Guizhou. This guide centers on the town, Regong art and selected Wutun and Rongwo interests. Choose a focused town-and-art visit, then allow additional days for other Huangnan monasteries or surrounding counties.",
    experiences: [
      "Read a thangka through its subject, composition, line and color with useful interpretation",
      "Place selected art traditions within the living religious settings of Wutun and Rongwo",
      "Keep time for a thoughtful conversation and a relaxed town meal rather than constant transfers",
    ],
    planningNotes: [
      "Confirm the actual art host, language, subject and format before fixing the visiting day",
      "Choose a dependable room and review the full road and sleeping-elevation sequence",
      "Separate public visiting, personal invitations, hands-on learning and optional purchases",
    ],
    arrival:
      "Xining is an important gateway to compare, using the dated flight or train plus the full road to the actual Tongren room. A station in a wider regional plan is not the town or the art venue. For a journey from Xiahe or elsewhere in Gansu, assess the actual public road, higher sections, daylight and local arrangements. Keep a meaningful art appointment away from uncertain arrival, and allow a suitable night before the main visit. Check exact Chinese place names with the driver and property to avoid confusion with Guizhou Tongren.",
    gettingAround:
      "Organize the selected town and Wutun visits around one substantial cultural focus at a time. A retained vehicle can make separate sites easier to combine but does not replace walking, waiting or institution-specific arrangements. Confirm the precise entrances and pickup points, allow a comfortable meal and use permitted paths. Religious courtyards, working studios and residential spaces have different expectations. Ask before photographing people or work in progress, and never use a private guide's presence as proof of permission.",
    stayStrategy:
      "For two nights, favor one well-assessed town room and a full day with strong interpretation. Spend the planning effort on the host's suitability, clear language support, sound pacing, sleep and food. Those details are more valuable than a vague promise of exclusive access. Guests with a serious artistic interest should explain it in advance so the proposed session goes beyond a generic demonstration. Any purchase visit should have an agreed purpose and leave room to decline comfortably.",
    firstTimerNote:
      "You do not need specialist knowledge to enjoy Regong art. Ask three useful questions: Who or what is depicted? Which details help identify the subject? How was this particular work made? Let those answers guide the rest of the visit. Then compare the image in a workshop with its role in a religious setting, where public access allows. That progression makes a small number of well-explained visits more rewarding than a long list of unfamiliar monastery names.",
    faqs: [
      {
        question: "Is Tongren in Qinghai the same as Tongren in Guizhou?",
        answer:
          "No. Tongren in Qinghai is 同仁, associated with Rebkong and Regong arts in Huangnan prefecture. Tongren in Guizhou is 铜仁, a different city. Use the province, Chinese characters and full hotel address when arranging transport and accommodation.",
      },
      {
        question: "What is the difference between Tongren, Rebkong and Regong?",
        answer:
          "Tongren is the administrative place name used here for the Qinghai city. Rebkong is encountered in Tibetan cultural contexts, while Regong is common in English references to the area's art traditions. The terms overlap in travel writing but should not replace a precise address or the name of a specific art venue.",
      },
      {
        question: "How many nights should I spend in Tongren for Regong art?",
        answer:
          "Two nights allow one full cultural day between arrival and departure. Three can suit a confirmed additional session or a slower stay. One night needs careful roads and useful visiting hours; hotel nights alone do not establish an artist appointment.",
      },
      {
        question: "Can I take a thangka painting class in Tongren?",
        answer:
          "An introductory activity may be possible with a confirmed suitable host. Agree the technique, materials, interpretation, duration and take-home result. A demonstration is different from hands-on learning, and a short activity should not be described as completing a traditional thangka or receiving formal religious training.",
      },
      {
        question: "Are Regong arts a UNESCO World Heritage Site?",
        answer:
          "Regong arts are inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity. This recognizes a living tradition; it is different from a World Heritage property inscription and does not establish access to a particular studio or monastery interior.",
      },
      {
        question: "Can I combine Tongren and Xiahe on one itinerary?",
        answer:
          "Yes, they can form distinct chapters of a carefully planned Qinghai–Gansu journey. Protect useful cultural time in each and review the actual road, higher sections, sleeping elevations and current traveler arrangements. Do not compress a full art visit and a major Labrang visit around a long transfer.",
      },
      {
        question: "What should I check before buying a thangka?",
        answer:
          "Ask about the maker, materials, technique, reproduction status, documentation, price, packing and any shipping or export requirements. Natural pigments, age and investment value should not be inferred from appearance. Keep buying optional and separate from the quality of the cultural visit.",
      },
    ],
    culturalStory: {
      title: "An image becomes more interesting when you can read it",
      paragraphs: [
        "A first encounter with a thangka can feel visually overwhelming. Begin with the central subject, then look at posture, hand gestures, attributes and the arrangement of surrounding figures. A good interpreter relates these details to the specific work rather than reciting a generic history of Tibetan Buddhism. Once you know where to look, a small change in line or expression becomes meaningful, and the visit becomes a conversation rather than a succession of sales descriptions.",
        "Regong arts also extend beyond portable paintings to sculpture and other forms connected with religious settings. Ask how drawing, proportion, color and finishing contribute to the object in front of you. Contemporary working pieces, older religious objects and shop reproductions serve different purposes. Respect the maker's time and the community's use of images; neither a close technical explanation nor a UNESCO inscription turns a working tradition into an unrestricted visitor attraction.",
      ],
    },
    foodStory: {
      title: "Use the meal to slow the cultural day down",
      paragraphs: [
        "Leave a proper lunch interval between the main visits. Depending on the actual restaurant, noodle dishes, steamed breads, lamb dishes or dairy-based foods may offer an introduction to the town's overlapping culinary traditions. Ask what is freshly prepared and how dishes are shared rather than order an oversized regional tasting menu by default. A warm meal and a comfortable place to sit also give space to discuss what you have just seen before entering another religious setting.",
        "Confirm wheat, dairy, meat stocks, sesame, nuts and shared preparation where relevant. A vegetable dish does not establish vegetarian preparation, and a regional or ethnic label does not confirm an individual kitchen's halal or allergy arrangements. Check the actual restaurant and hotel breakfast, especially for strict needs. Serious allergies and coeliac requirements need the provider's confirmed capacity and a practical alternative rather than an improvised request after arrival.",
      ],
    },
    itinerary: [
      {
        day: "Day 1 / arrive and settle",
        title: "Protect the following day's cultural time",
        description:
          "Complete the gateway road, settle into the confirmed town room and have an unhurried meal. Review the art appointment and current monastery arrangements. A modest town orientation can fit when arrival and health allow; the essential hosted visit should not depend on a perfectly punctual arrival.",
      },
      {
        day: "Day 2 / art and context",
        title: "Move from reading an image to understanding its setting",
        description:
          "Begin with a confirmed Regong art introduction, looking closely at a specific work and process. Keep time for questions and lunch, then visit selected permitted Wutun or Rongwo surroundings with interpretation that develops the morning's ideas. A separate hands-on session or purchase conversation requires its own agreed format.",
      },
      {
        day: "Day 3 / onward journey",
        title: "Continue to Xining or a considered Xiahe chapter",
        description:
          "Allow breakfast, bags and the full road without forcing another major cultural visit before departure. Continue only within a suitable ascent and transport plan. An additional local day needs a distinct confirmed purpose. This outline is illustrative, not a published package or a guarantee of hosts, rooms, festivals, open halls or activities.",
      },
    ],
  },
};
