import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/mianzhu.svg",
  alt: "Original Mianzhu planning schematic comparing New Year picture interpretation, a named printmaking session and city or rural rooms; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const mianzhuGuide: ExpandedDestination = {
  id: "mianzhu",
  name: "Mianzhu",
  region: "southwest",
  kicker: "New Year pictures, meaningful craft encounters and time to look closely",
  description:
    "Discover Mianzhu's New Year picture tradition through a defined museum or studio visit, with practical advice on woodblock printing, coloring, hosts and Chengdu connections.",
  stay: "A focused day trip or 2 nights for a deeper craft stay",
  bestFor: "Printmaking, folk art and family craft learning",
  interests: ["heritage", "food"],
  relatedDestinationIds: ["guanghan", "chengdu", "chongzhou", "qionglai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Mianzhu Travel Guide: New Year Art & Craft Visits",
    seoTitle: "Mianzhu Guide: New Year Art & Craft Visits",
    seoDescription:
      "Plan Mianzhu's New Year picture heritage: compare museum and studio visits, woodblock printing and coloring, day trips, local rooms and Chengdu transfers.",
    answer:
      "Mianzhu (绵竹) is a county-level city administered by Deyang, north of Chengdu in Sichuan. Its distinctive cultural reason to visit is Mianzhu New Year pictures, or Mianzhu nianhua: a folk-art tradition associated with woodblock-printed outlines and hand-applied color, often made for seasonal household display. Choose an interpretive museum visit, a named studio demonstration or an actual practical session according to your interests. Those are different services, not automatically included in a generic craft-village visit. A focused day trip can suit one substantial encounter; two local nights create a full day for deeper learning when the host and room justify staying.",
    stayAnswer:
      "Choose a day trip for one confirmed museum-and-craft subject with lunch and the complete return to the actual Chengdu hotel. One night can reduce a pressured return only when arrival and departure leave useful local hours. Two nights give a complete day without moving bags and can support a longer session, a different local interest and a quieter pace. Longer stays need a defined learning program or another substantive purpose. A studio photograph or a heritage label is not enough reason to add nights without knowing who will host and what guests will learn.",
    hotelAnswer:
      "Compare a specific Mianzhu city hotel for meals, practical services and the actual venue road with a rural property near the confirmed host. A New Year Painting Village label does not place every accommodation beside the working artist or establish hotel-level comfort. Check quiet, room temperature, bathroom, bedding, breakfast, dinner, stairs and luggage approach. Deyang city is another base with its own road to Mianzhu; a regional hotel name does not make it local. Keep a Chengdu room if a focused outing works better than moving for an unremarkable overnight.",
    sightseeingQuestion: "Should I choose a museum, an artist demonstration or a hands-on session?",
    sightseeingAnswer:
      "Choose museum interpretation for the images, household uses and development of the tradition, using the currently available display. Choose a named studio demonstration to watch actual stages and ask the maker questions. Choose a practical session for a task suited to your time and ability, such as printing from an existing block or coloring a prepared outline. Carving a block is a different, more demanding activity involving tools. A visit should make its format clear in advance; a short sales presentation is not equivalent to a lesson or a conversation with a specialist.",
    visitorResources: [
      {
        label: "Mianzhu municipal government",
        href: "https://www.mianzhu.gov.cn/",
        scope:
          "Local context and dated public notices, primarily in Chinese. Verify the actual museum, studio and village visitor arrangement separately. Municipal heritage descriptions do not establish a named artist's presence, current teaching language, private access or a particular room.",
      },
      {
        label: "Deyang municipal government",
        href: "https://www.deyang.gov.cn/",
        scope:
          "Wider regional information. Deyang, Mianzhu and Guanghan have separate routes and visitor subjects. A regional cultural promotion does not establish current admissions, an excavation visit or the availability of a particular local host.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and exact stations. Compare the complete route from the ticketed station to the actual Mianzhu venue or room, including any Deyang-area road transfer. A place name in a rail search is not proof of a convenient direct service on the desired date.",
      },
    ],
    serviceScope:
      "A proposal should name the venue or host, actual format, duration, teaching language or interpreter, task, materials, age suitability and take-home arrangements. Specify the room, complete transport, guide, meals and public admissions separately. Printing, coloring, block carving and purchasing are different commitments. A named master or specialist must actually be confirmed; private guiding does not guarantee their attendance or entry to a household. Agree an informative alternative if the host is unavailable, with any change explained before substituting a retail stop.",
    routeAdvice:
      "Mianzhu can deepen a Chengdu journey for guests interested in folk art rather than simply add another general sightseeing day. Chongzhou's Daoming bamboo weaving and Qionglai's tea or ceramic interests provide useful comparisons for choosing a craft direction; neither is a nearby room-to-room walk or an automatic same-day addition. No matching published Mianzhu tour is recommended here. Share your dates, actual Chengdu base, art interests, children's ages and preferred level of participation to develop a tailored visit.",
    practicalPlanning: {
      timing:
        "Schedule the confirmed host or principal public venue first. Allow time to understand the image, watch a process, practice if booked and ask questions. Coloring and wet materials may need time before packing. Lunar New Year associations do not establish year-round performances, open workshops or the same production activity on every date. Keep a specialist appointment away from an uncertain flight arrival and protect the complete return before an inflexible train or onward event.",
      walking:
        "Review museum standing time, studio seating, thresholds, stairs and village surfaces for the actual venues. Printing and painting may be more suitable than a long walk for some guests, but still require a comfortable posture and suitable hand movements. Carving involves sharp tools and needs a different age and safety assessment. Ask about tables, lighting, toilets, rest and vehicle approach. A quiet-looking courtyard does not prove step-free access or an adapted workstation.",
      cost: "Compare the full Chengdu return or onward transport, actual host fee, interpreter, materials, teaching time, meals, admissions and exact room if staying. A shared introduction, private lesson and extended specialist visit have different value. Finished works, shipping and extra materials should be clearly separate unless included. A premium should buy a well-matched host, useful explanation and comfortable pacing, rather than an unsupported promise of exclusive access, guaranteed master attendance or investment-grade art.",
    },
    attractions: [
      "Mianzhu New Year picture interpretation through an actually available museum display",
      "A named working-studio demonstration with the process explained",
      "A suitable printing or coloring introduction when the host and task are confirmed",
      "A selected public route in the New Year painting village area, with exact venue addresses",
      "A regional meal and time to discuss the images rather than rush between shops",
      "A city or rural room chosen for the real craft day and comfortable sleep",
    ],
    stays: [
      {
        label: "Day trip / one substantial art encounter",
        advice:
          "Give a confirmed museum, studio or lesson sequence time, with lunch and the complete road. Choose the host and format before adding a village walk. A practical session need not be squeezed between several unrelated regional attractions to make the day feel worthwhile.",
      },
      {
        label: "1 night / only if the useful hours improve",
        advice:
          "Consider when it protects an actual appointment or gives a worthwhile local evening. Review the real arrival and departure windows and the room's comfort. A late check-in followed by an early departure does not automatically create deeper cultural contact.",
      },
      {
        label: "2 nights / one full day without bags",
        advice:
          "Allow a more substantial art session and an informative complement with room for rest. Confirm the host's program and the actual dining before booking. A longer learning project should be designed with the teacher rather than assumed to emerge from a standard village visit.",
      },
    ],
    hotelAreas: [
      {
        name: "Mianzhu city / practical services and local roads",
        advice:
          "Useful for specific venue visits, meals and a settled local base. Assess the exact room, quiet and transfers to the actual studio. A city hotel does not establish that all painting-related sites can be reached on foot.",
      },
      {
        name: "A named rural property / only with a useful host connection",
        advice:
          "Choose for the actual location, room and local time it provides. Check heating or cooling, bathroom, sound, dinner, breakfast and where a car can stop. Painted walls and a craft-village address do not establish a working class, specialist host or boutique service.",
      },
      {
        name: "Deyang city / another regional base",
        advice:
          "Use when a genuine Deyang interest or gateway makes the room sensible, counting the full Mianzhu road. Do not book solely because it appears under the same regional travel search. The extra transfer should improve the wider itinerary rather than reduce useful studio time.",
      },
      {
        name: "Keep the Chengdu hotel / for a focused outing",
        advice:
          "Retain the city room when one substantial art visit and a return road work comfortably. This avoids packing for a single night and can give better evening dining options. Compare the whole day before deciding an overnight is necessarily more meaningful.",
      },
    ],
    tradeoffs: [
      {
        title: "A New Year picture is more than a bright souvenir",
        advice:
          "Ask about the image's intended place in a household, the figures or motifs and the wishes it expresses. Door guardians, auspicious subjects and narrative scenes call for different explanations. Symbolism belongs to the particular work; do not assign one universal meaning to every image in a shop.",
      },
      {
        title: "Printed outlines and hand color deserve separate attention",
        advice:
          "Look at the block's line, how ink reaches the paper and how brush-applied color changes the final image. Different makers and works may use different methods. A prepared printing exercise can make one stage understandable without pretending guests have completed the whole craft or carved their own block.",
      },
      {
        title: "Choose participation for the guest, not the photograph",
        advice:
          "A simple print or coloring task can suit a short introduction or family visit. Carving needs time, instruction, tool control and suitable supervision. Agree the actual task and materials before arrival, including what younger children can do and how anyone declining the activity can still enjoy the visit.",
      },
      {
        title: "Museum, workshop and decorated village are different evidence",
        advice:
          "A display explains a tradition, a working studio shows a current practice and painted public walls create a visitor streetscape. None automatically proves that a particular artist will host. Use exact names and opening arrangements instead of treat every painting-themed location as the same experience.",
      },
      {
        title: "Let purchases remain an informed choice",
        advice:
          "Ask who designed, printed and colored the work, what is handmade, how editions or copies are described and how the piece should be packed. A commercial reproduction can be an enjoyable souvenir when labeled honestly. Do not infer provenance, rarity or resale value from a heritage label or a host's title alone.",
      },
      {
        title: "A wider regional route needs another day of attention",
        advice:
          "The Deyang region contains different cities and cultural subjects; being in the same region does not make every museum or studio a small add-on. Compare full roads, reservations and the effort of looking closely. An unhurried art encounter can be stronger than a day that constantly interrupts learning to move on.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "guanghan",
        advice:
          "Guanghan adds Sanxingdui's ancient-Shu archaeology, a different subject from New Year picture traditions. Give the museum a substantial visit and protect the actual Mianzhu host window. Shared Deyang administration does not make a meaningful craft session spare time after a full museum outing.",
      },
      {
        slug: "chengdu",
        advice:
          "Use Chengdu for a separate city, food or panda introduction, then choose Mianzhu for a defined folk-art interest. Compare the actual hotel pickup, host appointment and full return. Existing Chengdu itineraries do not automatically include Mianzhu studios, teaching or specialist access.",
      },
      {
        slug: "chongzhou",
        advice:
          "Compare Mianzhu's New Year pictures with Daoming bamboo craft in Chongzhou. Both benefit from a real host and good interpretation, but the materials and activities are different. Choose the stronger interest for a short visit or allow separate days and full transfers for both.",
      },
      {
        slug: "qionglai",
        advice:
          "Qionglai adds tea learning, Pingle and a distinct ceramic-history direction. It is another regional chapter with its own room, host and roads. Do not market a Mianzhu class and a full Qionglai countryside route as effortless halves of the same day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "A specific indoor museum or studio session can be worthwhile beyond one narrow travel season, but the actual opening and host availability are decisive. Spring and autumn can suit a mixed indoor and village day. Summer needs cooling and a rain plan; winter can feel damp and cold, making a warm room and comfortable teaching space important. Lunar New Year may affect working hours and availability rather than guarantee public demonstrations. Choose dates around the confirmed visit, not a generic festival promise.",
    orientation:
      "Mianzhu belongs to the Deyang administrative area north of Chengdu. The city center, painting-related public venues, named studios and village locations are separate route choices. Deyang city and Guanghan offer separate urban and museum visits; allow additional days if they are important to your trip. Chongzhou and Qionglai sit in different directions within a broader Sichuan craft itinerary. Use precise Chinese venue and hotel addresses before assessing what fits in a day.",
    experiences: [
      "Read a New Year picture through its figures, household purpose and visual language",
      "Watch a defined printing or coloring stage with a host who can explain it",
      "Try a suitable practical task with time for questions and optional purchases",
    ],
    planningNotes: [
      "Confirm museum, demonstration, lesson and shopping as distinct formats",
      "Choose the actual host, language and task before fixing the road schedule",
      "Assess the room and useful local hours before adding an overnight",
    ],
    arrival:
      "Start from the actual Chengdu hotel, ticketed station or airport and the precise Mianzhu venue. Chengdu Tianfu and Shuangliu airports require different roads. If using rail, confirm dated services and the complete final transfer, including any Deyang-area gateway. Keep a host appointment away from an uncertain flight arrival. A return ticket needs time for the class to finish, work to be packed and the entire road to the correct station.",
    gettingAround:
      "Group the actual studio, public venue, meal and room sensibly. A private car simplifies roads but does not provide specialist interpretation or access to every courtyard. Agree where a vehicle can stop and the remaining walking. A studio visit should have suitable seating, toilets and time to ask questions. Confirm permission before close photography or filming of people and working processes rather than assume a public village address permits everything inside.",
    stayStrategy:
      "Use a focused Chengdu day trip when one good visit is the objective. Stay locally only when the program and room add useful time or comfort. A city hotel can be more practical than a photogenic rural address with limited food or repeated roads. Premium value comes from a well-chosen host, prepared interpretation, a suitable task, a good meal and an unhurried day. Private or specialist services require actual confirmation, not adjectives in a proposal.",
    firstTimerNote:
      "Decide whether you mainly want to understand the pictures, watch a skilled maker or make a simple piece yourself. Tell the planner which matters most, because it changes the host, materials and time. A short class can teach one process well; it should not promise to turn a visitor into a block carver or guarantee an encounter with an unnamed master.",
    faqs: [
      {
        question: "Is Mianzhu worth visiting from Chengdu?",
        answer:
          "Yes, for a genuine interest in folk art, printmaking or a well-arranged family craft visit. Confirm one substantive encounter and the full return road. A generic shopping stop alone may not justify the journey.",
      },
      {
        question: "What are Mianzhu New Year pictures?",
        answer:
          "They are a local nianhua tradition associated with household New Year display, printed outlines and hand-applied color. Images can include protective, auspicious and narrative subjects. Methods and meanings should be explained for the particular work rather than assumed identical for every piece.",
      },
      {
        question: "Can I take a woodblock-printing class in Mianzhu?",
        answer:
          "Research it with a named host and a defined task. Printing from a prepared block, coloring and carving are different activities. Confirm language, time, materials, age suitability and the take-home arrangement before booking.",
      },
      {
        question: "Is a Mianzhu craft visit suitable for children?",
        answer:
          "It can be when the task, tools, seating and session length suit their ages. A prepared printing or coloring activity may be more appropriate than carving. Agree supervision and an enjoyable alternative for anyone who does not want to participate.",
      },
      {
        question: "How many nights should I stay in Mianzhu?",
        answer:
          "A focused day trip can suit one main art interest. Two nights give one full local day; one night depends on useful arrival and departure hours. Stay longer only for a defined program or another substantive purpose.",
      },
      {
        question: "Do I have to buy artwork during a studio visit?",
        answer:
          "Purchases should be optional unless an agreed object is explicitly part of the service. Hosting, teaching and materials should be priced clearly. Ask about authorship, production, packing and shipping rather than infer provenance from a craft-village label.",
      },
      {
        question: "Is Lunar New Year the only time to visit Mianzhu?",
        answer:
          "No. A confirmed museum or studio visit can explain the tradition at other times. Holiday schedules can affect availability, and public performances are not guaranteed. Choose the actual open venue and host rather than rely on the festival association alone.",
      },
    ],
    culturalStory: {
      title: "Look at what the picture was meant to do",
      paragraphs: [
        "New Year pictures were made to be used, displayed and understood in household settings, rather than only collected behind glass. Ask where a particular image belongs and what its figures, gestures and colors communicate. A door guardian and a narrative scene need different explanation. Looking at function as well as style makes the work more meaningful than treating every bright print as the same decorative souvenir.",
        "Then look at the process: the quality of a line, the meeting of paper and block, and the choices made when color is applied. Contemporary practice can include traditional methods, new designs, visitor exercises and commercial reproductions. Explain those differences honestly. Respect the maker's working time and photography preferences; a thoughtful cultural encounter does not require a promise of exclusive access or performance on demand.",
      ],
    },
    foodStory: {
      title: "Give the craft day a proper seated meal",
      paragraphs: [
        "A Sichuan lunch can be a welcome pause between close-looking and practical work. Discuss the amount of chili and numbing pepper separately, choose suitable portions and ask what the actual kitchen prepares well. A few well-chosen dishes often work better than an oversized tasting menu before a seated art session. Local cultural interest does not require a compulsory alcohol tasting or a particular rich dish.",
        "Check stocks, pork, wheat, soy, sesame and shared preparation where relevant. A vegetable dish or a request for mild food does not establish vegetarian, allergy, coeliac or halal suitability. Serious dietary needs require a particular kitchen's confirmed capacity and a practical alternative. For an overnight, review breakfast and dinner along with the room, especially if a rural address leaves few nearby options after the host visit.",
      ],
    },
    itinerary: [
      {
        day: "Day-trip option / from Chengdu",
        title: "Give one art subject the day it needs",
        description:
          "Reach the confirmed museum or host, understand the images and follow the agreed demonstration or activity. Allow lunch, questions and packing. Add a nearby public walk only when useful, then return to the actual Chengdu room with the full road planned.",
      },
      {
        day: "Two-night option / arrival",
        title: "Settle without rushing the main appointment",
        description:
          "Reach the named room, eat and take a modest local orientation if useful hours remain. Keep a specialist session away from uncertain arrival. The overnight should improve comfort or local time rather than simply move the same bags to a new address.",
      },
      {
        day: "Full local day",
        title: "Look, learn and try one process well",
        description:
          "Give the actual host program time for explanation, demonstration and participation where booked. Use a suitable museum or local interest as a complement, with lunch and rest. Keep purchases optional and distinguish visitor work from the maker's finished pieces.",
      },
      {
        day: "Departure / onward Sichuan route",
        title: "Protect the complete connection",
        description:
          "Allow breakfast, bags, any finished-work packing and the full road to the next room or ticketed station. This outline is illustrative, not a published package or a guarantee of artists, classes, rooms, private households, festival activity or current openings.",
      },
    ],
  },
};
