import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/chengde.svg",
  alt: "Chengde planning diagram separating the Mountain Resort palace and lake areas, selected outlying temples and a separately planned Jinshanling extension; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const chengdeGuide: ExpandedDestination = {
  id: "chengde",
  name: "Chengde",
  region: "north",
  kicker: "Qing garden landscapes, Buddhist temples & time beyond Beijing",
  description:
    "Understand Chengde as a second Qing imperial setting, with a selective Mountain Resort route, contrasting temples and hotel choices that leave time to appreciate the landscape.",
  stay: "2–3 nights",
  bestFor: "Qing history, imperial gardens and Buddhist architecture",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["qinhuangdao", "shijiazhuang", "beijing", "tianjin", "datong"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Chengde Travel Guide: Mountain Resort, Temples & Hotels",
    seoTitle: "Chengde Travel Guide: Resort, Temples & Hotels",
    seoDescription:
      "Plan Chengde beyond Beijing: compare Mountain Resort routes, Puning and Putuo Zongcheng temples, two or three nights, hotel areas and station transfers.",
    answer:
      "Chengde (承德), historically known in English as Jehol or Rehe, is a city in Hebei northeast of Beijing. Its Mountain Resort and outlying temples form a UNESCO World Heritage property. Visit to understand how the Qing court combined seasonal residence, government, garden design and relationships with different peoples and religious traditions. The Mountain Resort, or Bishu Shanzhuang, is a historic imperial estate, not a modern hotel resort. Its palace, lakes, open landscapes and hills offer different visitor routes, while the outlying temples are separate visits beyond the estate.",
    stayAnswer:
      "Two nights usually leave one full day for a selected Mountain Resort route and perhaps one temple if the pace and access allow. Three nights give two full days: one for the estate and one for contrasting temples, with time for meals and rest. A Beijing day trip can provide a focused introduction with suitable transport, but is a poor fit for travelers expecting the whole resort and several major temples. Add time for a distinct interest rather than trying to walk every part of a large historic landscape.",
    hotelAnswer:
      "Start with a central hotel whose actual address serves the Mountain Resort's visitor entrance and evening dining. A property near a particular temple may suit a quieter setting, but needs separate transfers for the estate and meals. A countryside or destination hotel should justify its location through the room, grounds and time you plan to spend there. Chengde South station hotels serve another logistical purpose. For a premium stay, assess quietness, bedding, bathroom, temperature control, food and road access rather than assuming an imperial name means historic royal accommodation.",
    sightseeingQuestion: "Should you visit Puning Temple or Putuo Zongcheng Temple?",
    sightseeingAnswer:
      "Choose Puning for its Buddhist architectural ensemble and renowned large wooden image of Avalokiteshvara, with respect for its religious setting. Choose Putuo Zongcheng for its monumental terraces, layered architecture and Qing engagement with Tibetan Buddhist forms. It is sometimes called the Little Potala Palace, but it is a Chengde monument with its own history, not the Potala Palace in Lhasa. These are separate visits. Pick by interest, stairs and available time; the shared label outlying temples does not make them one quick circuit.",
    visitorResources: [
      {
        label: "UNESCO: Mountain Resort and its Outlying Temples, Chengde",
        href: "https://whc.unesco.org/en/list/703/",
        scope:
          "Background on the historic estate, temples and World Heritage significance. The listing does not establish current ticket combinations, open halls, internal transport, photography permission or accessible visitor routes.",
      },
      {
        label: "Chengde municipal government",
        href: "https://www.chengde.gov.cn/",
        scope:
          "Municipal context and public notices. Obtain date-specific opening, reservations, transport and accommodation information from the relevant site or operator before fixing the route.",
      },
    ],
    serviceScope:
      "A tailored Chengde proposal can specify the hotel, guided estate route, selected temples, road transfers and named tickets or internal transport. The guiding should connect the landscape and buildings with Qing history, rather than describe every temple as another palace. Access to closed rooms, private religious ceremonies and specialist meetings is not assumed. Share stair tolerance, walking limits and the desired depth of interpretation before the full-day sequence is agreed.",
    routeAdvice:
      "Chengde adds depth to a Beijing stay when imperial history and designed landscapes matter to you. Tianjin provides a different trading-city chapter; Datong introduces another period of Buddhist art and architecture. Choose these as distinct stays with complete transfers. Jinshanling can be considered as its own Great Wall interest in the wider Chengde administrative area, but it is not an extra stop inside Chengde city. No matching published Chengde city itinerary is recommended here. The outline is illustrative and can inform a tailored proposal.",
    practicalPlanning: {
      timing:
        "Let the estate have the main visitor window of a day. Choose the palace-and-lake sequence first, then decide whether additional terrain adds value. Give each temple enough time for its approach, interpretation and return to the vehicle. Keep meals and rest within the plan. A rail departure needs a separate transfer buffer rather than relying on an assumed quick exit from a large landscaped site.",
      walking:
        "The Mountain Resort's lake paths and mountain routes have different distances and gradients. A gentler selected route can still include uneven paving, thresholds, steps and standing. Internal visitor transport, when available, serves defined routes and does not make every building or hillside accessible. Temple terraces and staircases need individual review. Agree actual entrances, walking sections, seated breaks and vehicle pickup before choosing a route for knees, balance or wheelchair needs.",
      cost: "Compare hotel location and room category, guided hours, exact site tickets, internal transport and complete station transfers. A combined ticket, when offered, is a purchase arrangement rather than a recommendation to visit every included place. Specialist interpretation, optional activities and additional road days need their own inclusion. Premium value comes from useful time, comfort and explanation, not a promise of private access to imperial buildings or empty temples.",
    },
    attractions: [
      "Mountain Resort / Bishu Shanzhuang: selected palace and lake areas",
      "Mountain Resort hills as a separate route choice",
      "Puning Temple",
      "Putuo Zongcheng Temple",
      "Xumifushou Temple as a distinct additional interest",
    ],
    stays: [
      {
        label: "1 night: choose a principal subject",
        advice:
          "Works when the actual arrival and departure leave a substantial visit window. Prioritize a selected estate route or a focused temple interest, adding another site only if time and energy genuinely allow. A late arrival and early departure do not create a full sightseeing day.",
      },
      {
        label: "2 nights: one full day and realistic travel periods",
        advice:
          "A practical introduction centered on the Mountain Resort, with a possible selected temple on a usable partial day. Fit the temple to the transport schedule rather than promising the whole World Heritage property. Keep a proper dinner and time to rest after walking.",
      },
      {
        label: "3 nights: estate and temples on separate days",
        advice:
          "Give the estate a full day and choose one or two contrasting temples on another, matched to stairs and interest. This allows more explanation and less rushing. Additional nights should serve a specific landscape, architectural subject or hotel stay rather than duplicate similar visits.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Chengde near the actual estate entrance",
        advice:
          "A useful starting point for a first visit and evening meals. Compare the exact walking route to the visitor entrance, traffic, room quietness and vehicle access. Near the Mountain Resort can refer to different parts of its large boundary; proximity to a wall does not establish a useful pedestrian entrance.",
      },
      {
        name: "Temple-side or other quieter city-edge properties",
        advice:
          "Consider a particular hotel when its room and setting add value. Check dinner, breakfast, heating or cooling, stairs and the drive to each chosen site. Being close to one temple does not put every temple and the estate within a short walk or provide out-of-hours religious access.",
      },
      {
        name: "Chengde South station surroundings",
        advice:
          "Choose for a genuine rail-timing need or a specific property, with daily city transfers included in the comparison. The station and historic estate are separate places. For a multi-night heritage visit, a station address should earn its place through the complete schedule rather than transport branding alone.",
      },
      {
        name: "Wider countryside or a Jinshanling-area stay",
        advice:
          "These require their own itinerary rationale and actual address. A Wall-focused hotel in the wider municipality does not serve the same purpose as a Chengde city base. Review room comfort, meals, walking and onward driving before splitting nights between a landscape stay and city sightseeing.",
      },
    ],
    tradeoffs: [
      {
        title: "The Mountain Resort is a landscape, not one palace hall",
        advice:
          "The palace, lakes, open grounds and hills explain different aspects of the imperial estate. A selected sequence can show how residence and landscape worked together without attempting every path. Choose the hill section for its actual route and physical demands, not simply because the ticket gives access to a large area. A well-paced palace-and-lake day is a complete choice in its own right.",
      },
      {
        title: "Compare two temples for a reason",
        advice:
          "Puning and Putuo Zongcheng reward different questions about religious practice, monumental form and Qing patronage. Xumifushou is another distinct complex, not an alternate name for either. Ask which architectural features and historical relationships you want explained, then choose the visits that supply a useful contrast. Conservation, religious use and current openings determine what can actually be seen.",
      },
      {
        title: "Little Potala is a nickname, not a substitute for Lhasa",
        advice:
          "Putuo Zongcheng draws on Tibetan Buddhist architectural forms within Chengde's Qing court setting. Its identity should not be reduced to a replica label, and visiting it is not the same cultural or geographical experience as visiting Tibet. Explain the monument's own purpose and context; do not use the nickname to imply Tibetan travel permissions, particular ceremonies or access to unrelated places.",
      },
      {
        title: "Jinshanling changes the transfer and the physical demands",
        advice:
          "Jinshanling lies in Luanping County within the wider Chengde administrative area. Its ridges, exposed sections and uneven steps deserve a separately designed Wall outing. Check the exact route, weather, actual transport and hotel sequence before adding it between Beijing and Chengde. A Wall stop plus a complete resort visit is not a comfortable default travel day, and a cable-car option cannot be assumed to remove every climb.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "qinhuangdao",
        advice:
          "Qinhuangdao offers a contrasting Ming defensive landscape at Shanhaiguan and Laolongtou, with a separate seaside or architecture decision. Research the whole actual connection and suitable local nights rather than assume a shared Hebei label makes a short excursion. A Chengde estate-and-temple stay does not automatically include the coast or private resort access.",
      },
      {
        slug: "shijiazhuang",
        advice:
          "Shijiazhuang adds Hebei Museum and a separately chosen Zhengding architecture day, with different archaeological and Buddhist-art subjects. It is another part of Hebei, not a short outing from the Mountain Resort. Compare the full dated connection and useful nights rather than turn both destinations into hurried provincial checklist stops.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing provides the principal imperial-capital context; Chengde adds the Qing court's seasonal landscape and outlying temples. Keep enough Beijing time for the palace and a separate Great Wall day. Use actual train stations and both hotel transfers to compare a short excursion with two or three Chengde nights.",
      },
      {
        slug: "tianjin",
        advice:
          "Tianjin introduces trading-city streets, former concessions and Haihe evenings after Chengde's imperial landscape. Treat it as a separate urban interest, with its own station and central hotel decisions. Establish the actual connection rather than assuming all Beijing-area destinations form a short circular road trip.",
      },
      {
        slug: "datong",
        advice:
          "Datong adds Yungang sculpture and an earlier Buddhist history. It can enrich an architecture-led northern journey, but needs a separate stay and complete transfer plan. Do not describe its cave art, Chengde's Qing temples and Beijing's imperial buildings as interchangeable versions of the same sightseeing day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through early autumn generally offers more scope for lake and garden time, with heat, rain and busy summer dates still possible. The historic role as a summer retreat does not mean every day is cool. Autumn can bring attractive landscape color and cooler walking, while the exact timing varies. Winter is cold and some outdoor experiences or routes may be limited; a winter stay should be designed around confirmed access and short outdoor periods rather than a summer photograph. Choose the underlying history as the reason to visit.",
    orientation:
      "Chengde city lies northeast of Beijing in Hebei. The Mountain Resort occupies a large historic landscape, with separate outlying temple complexes beyond it. Chengde South railway station and the older Chengde station are different gateways. The wider municipality also contains places far from the central estate, including the Jinshanling area in Luanping County. Use the exact hotel and site, not the municipal name alone, to assess road time and whether a change of base is worthwhile.",
    experiences: [
      "Read the Mountain Resort's palace and selected lake landscapes as parts of a working Qing court setting",
      "Compare Puning with a separately chosen outlying temple for architecture, religious context and historical meaning",
      "Enjoy a slower northern stay with a well-chosen room, regional meals and time between large heritage visits",
    ],
    planningNotes: [
      "Distinguish Chengde South, Chengde station and the actual hotel when planning arrival",
      "Choose estate terrain and temple stairs before settling the number of visits per day",
      "Treat a Jinshanling outing as its own road and walking plan, not an automatic city-transfer stop",
    ],
    arrival:
      "Confirm whether the train arrives at Chengde South or Chengde station and give the driver the ticket's full details. From Beijing, use the actual departure station and include both hotel transfers; a high-speed journey time is not the complete visit. An airport arrival needs its own road assessment. Travelers coming via Jinshanling should agree the Wall visit, luggage, walking route and final hotel separately rather than assuming a standard transfer includes a guided hike.",
    gettingAround:
      "Road transfers connect the hotel, estate and temples, while each site has its own walking and visitor arrangements. The private vehicle's access ends at permitted road points. Review any internal transport route and its remaining walking before booking it as a comfort measure. At temples, account for the approach, steps, thresholds and return to pickup. A shorter, well-explained visit can be more rewarding than pushing through multiple demanding terraces.",
    stayStrategy:
      "Three nights are useful when the estate and temples deserve separate full days; two nights suit a more selective introduction. Use one city base unless a different landscape stay has a clear purpose. Compare room quietness, bedding, bathroom, climate control, restaurant arrangements and transfers. A property styled around imperial imagery is not automatically part of the historic estate, and a heritage setting should still meet the group's practical comfort needs.",
    firstTimerNote:
      "The most useful question in Chengde is how the landscape and temples served the Qing court, not how many gates you can enter. Start with the estate, choose a contrasting temple and allow the guide time to connect them. Palace rooms, garden scenery and Buddhist worship settings need different explanations. That sequence creates a deeper understanding than treating the whole city as a summer palace with many similar annexes.",
    faqs: [
      {
        question: "Is Chengde worth visiting from Beijing?",
        answer:
          "Yes for travelers interested in Qing history, imperial garden landscapes and Buddhist architecture. It adds a different court setting rather than another copy of Beijing's Forbidden City. Protect enough Beijing time first, then give Chengde a focused day or preferably a separate stay if both the estate and temples matter.",
      },
      {
        question: "How many nights do you need in Chengde?",
        answer:
          "Two nights generally provide one full day for a selected introduction. Three nights give two full days, allowing the Mountain Resort and contrasting temples on separate days. One night needs favorable transport and a narrow focus; arrival and departure do not automatically count as full sightseeing days.",
      },
      {
        question: "Is Chengde Mountain Resort a hotel?",
        answer:
          "The name refers to Bishu Shanzhuang, a historic Qing imperial estate with palace, lake and mountain landscapes. It does not mean your hotel booking includes accommodation inside the royal complex. Choose a separate hotel by its actual address, room and daily transfer plan.",
      },
      {
        question: "Which Chengde temples should I visit?",
        answer:
          "Puning and Putuo Zongcheng provide useful contrasting interests: a religious and architectural ensemble with a large wooden Avalokiteshvara image, and a monumental Qing complex drawing on Tibetan Buddhist forms. Xumifushou adds another separate subject. Choose by interest, stairs and current access rather than assuming every outlying temple belongs in one day.",
      },
      {
        question: "Is the Little Potala Palace the same as the Potala Palace in Tibet?",
        answer:
          "No. Little Potala is a common nickname for Putuo Zongcheng Temple in Chengde. It has its own Qing court history and setting. The Potala Palace is in Lhasa; the two should not be confused in travel planning or cultural interpretation.",
      },
      {
        question: "Is Chengde suitable for travelers with limited walking?",
        answer:
          "A selective route may work, but the actual estate paths, thresholds, temple terraces, seating and vehicle meeting points need review. Palace-and-lake routes and mountain routes have different demands. Internal transport does not make every area step-free. Share mobility needs before choosing the specific sites.",
      },
      {
        question: "Can I combine Chengde and Jinshanling Great Wall?",
        answer:
          "They can be considered within a wider route after checking the actual road sequence, hotel nights, weather and walking ability. Jinshanling is in Luanping County, not inside central Chengde's Mountain Resort. Give the Wall its own useful window rather than promising it alongside a full estate visit on one travel day.",
      },
      {
        question: "Are Chengde South and Chengde railway stations the same?",
        answer:
          "No. They are different arrival points. Use the exact station on the ticket, the correct Beijing departure station and the complete hotel transfer when planning the visit. A general rail time between the cities does not establish your door-to-door schedule.",
      },
      {
        question: "Does a Chengde heritage ticket cover every temple and transport?",
        answer:
          "Check the exact ticket and date with the relevant operator. The World Heritage designation is not a ticket product, and a combined admission does not automatically include internal transport, every open hall or unrelated activities. Set the itinerary by interest and physical ability before choosing the purchase arrangement.",
      },
    ],
    culturalStory: {
      title: "A court landscape with several architectural languages",
      paragraphs: [
        "The Mountain Resort was more than a place to escape summer heat. Its residence, administrative role and designed landscapes formed another setting for Qing rule beyond Beijing. The way buildings, water and open terrain were arranged is part of the historical subject. On a selected walk, ask how the palace sequence differs from the lake landscapes and what each allowed the court to do. You do not need to climb every hillside to understand that relationship.",
        "The outlying temples extend the story through religious patronage and the court's relationships with different communities. Puning, Putuo Zongcheng and Xumifushou should retain their own identities instead of being reduced to decorative copies of buildings elsewhere. Look at approaches, terraces, spatial sequence and religious imagery with appropriate explanation. Respect worship, barriers and photography rules; an active or historically significant religious space is not simply a backdrop for private staging.",
      ],
    },
    foodStory: {
      title: "A northern meal that supports the day's pace",
      paragraphs: [
        "Chengde's regional table can introduce northern grains, noodles, mushrooms and meat dishes, with preparations varying by restaurant. Rather than pursuing a supposed imperial banquet, ask for a few well-cooked dishes that suit the group and the season. A warm seated lunch can be particularly welcome between exposed landscape visits in cooler weather. Explain any interest in regional grain foods to the guide so the meal adds a local subject rather than becoming a generic tour-group stop.",
        "Mushroom dishes may use meat stock or sauces, and apparently simple grain or vegetable preparations are not automatically suitable for every restriction. Share allergies, vegetarian requirements, halal needs and preferences before a venue is chosen. Review ingredients and preparation directly. A satisfying meal, convenient location and enough time to eat contribute more to a premium day than an unverified royal label or an excessive number of dishes.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into a useful city base",
        description:
          "Transfer from the named station or other arrival point. Keep the first meal convenient and choose only a short local introduction that fits the actual time and weather. Do not treat the travel day as an automatic complete Mountain Resort visit.",
      },
      {
        day: "Full day 1",
        title: "Palace context and a selected lake landscape",
        description:
          "Give the Mountain Resort the main visitor window. Build a route around the accessible palace areas and a manageable lake section, with meals and breaks. Add a hill route only when its actual access, terrain and time suit the group.",
      },
      {
        day: "Additional full day",
        title: "Contrasting temples with time to understand them",
        description:
          "Choose Puning and another appropriate complex, such as Putuo Zongcheng, according to interest, stairs and confirmed openings. Retain a seated lunch and afternoon flexibility. A three-night stay normally creates this second full day; a two-night stay requires choosing fewer visits.",
      },
      {
        day: "Departure",
        title: "Continue through the planned northern connection",
        description:
          "Allow the complete station or road transfer. Beijing, Tianjin or Datong needs its own usable time; Jinshanling requires a separately agreed Wall plan. This is an illustrative stay, not a published product or an assurance that every mentioned option is included.",
      },
    ],
  },
};
