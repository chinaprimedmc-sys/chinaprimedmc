import type { JournalContentBlock } from "@/types/journal";

type Section = { title: string; paragraphs: string[] };
type Faq = { question: string; answer: string };

function article(sections: Section[], faqs: Faq[]): JournalContentBlock[] {
  return [
    ...sections.flatMap<JournalContentBlock>((section) => [
      { type: "heading", id: slugify(section.title), title: section.title },
      ...section.paragraphs.map<JournalContentBlock>((body) => ({ type: "paragraph", body })),
    ]),
    ...faqs.map<JournalContentBlock>(({ question, answer }) => ({
      type: "faq",
      question,
      answer,
    })),
  ];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const commercialArticleContent: Record<string, JournalContentBlock[]> = {
  "private-china-tour-vs-group-tour": article(
    [
      {
        title: "The short answer",
        paragraphs: [
          "Choose a group tour when a fixed departure, shared sightseeing and a lower entry price matter more than control over time. Choose a private China tour when the route, hotel standard, walking load, dietary needs or daily timing must fit your party. Neither format is universally better; the right answer depends on what would make the trip succeed or fail for you.",
          "China rewards good logistics. Major attractions use timed or passport-linked reservations, cities are large, and transfers can consume valuable hours when poorly sequenced. The comparison should therefore cover the whole journey—not only whether a guide is shared.",
        ],
      },
      {
        title: "Price and what the total represents",
        paragraphs: [
          "Group tours spread guide, coach and operating costs across more travelers. Private tours reserve guide and vehicle capacity for one party, so two travelers usually pay more per person. Families and small groups share those fixed services, which can narrow the difference.",
          "Compare identical inclusions before comparing totals: named hotels and room categories, guide hours, vehicle type, train or flight class, entrance tickets, meals, arrival support and exclusions. Our [private China tour pricing guide](/journal/private-china-tour-cost-2026) explains why two quotations with the same city names may represent very different trips.",
        ],
      },
      {
        title: "Pace, flexibility and access to your guide",
        paragraphs: [
          "A group follows one operating rhythm. That can be reassuring, but late starts, shopping stops or a pace designed for the average participant may not suit you. A private guide can adjust explanation, rest stops and visit order within reservation and opening-hour constraints.",
          "Private does not mean every decision can change instantly. Forbidden City tickets, popular trains and some attractions still require advance confirmation. The advantage is that the plan is built for your party before booking and your guide can make informed adjustments when conditions allow.",
        ],
      },
      {
        title: "Who gains the most from private travel",
        paragraphs: [
          "Families benefit from earlier panda visits, age-appropriate storytelling, suitable vehicles and flexible meal timing. Older or multigenerational travelers benefit from managed station transfers, realistic walking and hotel locations chosen to reduce repeated journeys. Travelers with allergies, halal requirements or strong cultural interests gain from advance research and a guide briefed on the details.",
          "Confident independent travelers may need private support only on complex days. A hybrid plan can combine a private Great Wall day, managed rail transfers and guided heritage visits with free evenings or independent Shanghai time. The [9-day Beijing, Xi'an and Shanghai journey](/tours/first-china-beautifully-paced) is a useful framework for this balance.",
        ],
      },
      {
        title: "Questions to ask before choosing",
        paragraphs: [
          "Ask a group operator about maximum group size, guaranteed departures, shopping stops, daily start times, single supplements and the policy when a traveler cannot match the walking pace. Ask a private operator who delivers each city, what daily service hours mean, how substitutions work and which reservations remain subject to availability.",
          "The best choice becomes clearer when you describe your travelers rather than asking for a label. Share dates, party size, hotel expectations and the two experiences you care about most through our [trip planning form](/start-planning?source=private-vs-group-mid), and we can explain which service pattern is proportionate.",
        ],
      },
    ],
    [
      {
        question: "Are private China tours always more expensive?",
        answer:
          "They usually cost more per person for couples because guide and vehicle services are not shared with a larger group. The difference can narrow for families and small private groups, but inclusions must be matched before comparing.",
      },
      {
        question: "Can I combine private touring with free time?",
        answer:
          "Yes. A sensible private itinerary can reserve support for complex sightseeing and transfers while leaving selected evenings or full days independent.",
      },
      {
        question: "Are group tours easier for a first visit to China?",
        answer:
          "They can be easy if the fixed route and pace suit you. Private travel is often easier when language, mobility, children, dietary needs or specific hotels require individual planning.",
      },
      {
        question: "Does private mean attraction tickets are guaranteed?",
        answer:
          "No responsible operator should promise capacity-controlled tickets before confirmation. Private planning improves preparation, but official release schedules and availability still apply.",
      },
      {
        question: "Which option is better for families?",
        answer:
          "Private travel usually offers better control over timing, rooms, vehicles and rest. A well-designed small group tour may still suit older children who enjoy a social fixed program.",
      },
    ],
  ),

  "11-day-beijing-xian-chengdu-shanghai-itinerary": article(
    [
      {
        title: "Why this route works in eleven days",
        paragraphs: [
          "Beijing, Xi'an, Chengdu and Shanghai form a clear first-China story: imperial history, the Silk Road and Terracotta Warriors, Sichuan life and giant pandas, then contemporary China. Eleven days is the minimum comfortable framework because every additional city creates a hotel change and an intercity sector.",
          "The route works best with three nights in Beijing, two in Xi'an, three in Chengdu and two in Shanghai, plus the final departure day. Exact flight times may change the balance. Travelers who want a slower Great Wall day or deeper Shanghai neighborhoods should add one or two nights.",
        ],
      },
      {
        title: "Days 1 to 3: Beijing",
        paragraphs: [
          "Use arrival day to recover rather than schedule a major monument. On the first full day, connect the Forbidden City with one wider piece of imperial Beijing, allowing enough time for passport checks and walking. Give the Great Wall its own day; Mutianyu is often the practical first-visit choice because access options support different walking levels.",
          "A well-located hotel reduces repeated cross-city transfers. Read the [Beijing destination guide](/destinations/beijing) before choosing an area, and avoid treating the Wall as an add-on to another full sightseeing day.",
        ],
      },
      {
        title: "Days 4 to 5: Xi'an",
        paragraphs: [
          "Travel by high-speed rail, with private station assistance if luggage or language is a concern. Reserve the next morning for the Terracotta Warriors, when energy and attention are strongest. The second half of the day can add the city wall, Muslim Quarter context or a quieter heritage site according to interest.",
          "Xi'an deserves interpretation. The archaeological site is more valuable when a guide explains the pits, preservation and imperial project rather than simply moving between viewpoints. Our [Terracotta Army visitor guide](/journal/terracotta-army-tickets-foreign-visitors) covers ticket and passport details.",
        ],
      },
      {
        title: "Days 6 to 8: Chengdu",
        paragraphs: [
          "Travel to Chengdu and keep the first evening light. Visit a panda base early on the next morning, then shift to tea-house or neighborhood life rather than stacking another major attraction. Use the third day for Sichuan food, a cultural experience or a Leshan option if the additional drive fits your pace.",
          "Pandas are only one chapter. Chengdu earns its place through the social rhythm of parks, tea and food. Compare three- and five-day choices in our [Chengdu planning guide](/journal/how-many-days-in-chengdu-itinerary).",
        ],
      },
      {
        title: "Days 9 to 11: Shanghai",
        paragraphs: [
          "A domestic flight is normally more practical than rail for Chengdu to Shanghai. Protect the arrival evening from ambitious sightseeing. The following day can connect the Bund's architecture with a neighborhood walk, while the last full day remains flexible for modern design, a water town or a slower finale.",
          "The complete [11-day Beijing, Xi'an, Chengdu and Shanghai private tour](/tours/beijing-xian-chengdu-shanghai-private-11-day-tour) shows how guide teams, rail, flight and transfers connect. It is a framework, not a requirement to use the same intensity every day.",
        ],
      },
      {
        title: "Who should modify this itinerary",
        paragraphs: [
          "Families may add a night in Chengdu and reduce late Shanghai evenings. Older travelers may add a Beijing night and schedule a lighter day after rail. Food-focused travelers may protect a Chengdu market or cooking experience. Anyone arriving after a long overnight flight should resist counting arrival day as a full sightseeing day.",
          "Share your flights, dates and room needs through our [11-day route request](/start-planning?source=journal-four-city-mid). We will identify where the published framework needs to change before checking services.",
        ],
      },
    ],
    [
      {
        question: "Is eleven days enough for four China cities?",
        answer:
          "Yes for a well-managed first journey, but it is the lower comfortable limit. Add time for slower walking, deeper food interests or more independent days.",
      },
      {
        question: "Should I take trains or flights?",
        answer:
          "High-speed rail works well between Beijing, Xi'an and Chengdu. A flight is generally more practical from Chengdu to Shanghai, subject to schedules for your dates.",
      },
      {
        question: "Can the route run in reverse?",
        answer:
          "Yes. International flights, seasonal conditions and ticket availability may make Shanghai-to-Beijing more sensible.",
      },
      {
        question: "Is this itinerary suitable for children?",
        answer:
          "It can be, with lighter monument days, early panda timing, suitable rooms and fewer late evenings.",
      },
      {
        question: "What should be booked first?",
        answer:
          "Confirm the route and international gateway cities first, then hotels and intercity transport. Capacity-controlled attractions are handled according to their release rules.",
      },
    ],
  ),

  "chengdu-jiuzhaigou-7-day-itinerary": article(
    [
      {
        title: "The right seven-day structure",
        paragraphs: [
          "A useful seven-day Chengdu and Jiuzhaigou itinerary gives Chengdu three nights and the Jiuzhaigou area three nights, with the final day used for onward travel. This protects one full panda-and-city day, one food or cultural day, and two meaningful mountain days.",
          "Do not plan Jiuzhaigou as a casual day trip from Chengdu. The regional connection, altitude, park scale and hotel location require their own chapter. The exact transport solution should be checked against current schedules for your dates.",
        ],
      },
      {
        title: "Days 1 to 3: pandas and Chengdu life",
        paragraphs: [
          "Keep arrival day easy. Visit a panda base early on day two, then use the afternoon for People's Park, tea or a neighborhood. On day three, explore Sichuan food at a level that suits your party, with a market, cooking experience or guided tasting rather than an unsupported list of famous dishes.",
          "The [Chengdu Panda Base ticket guide](/journal/chengdu-panda-base-tickets-foreigners) explains passport and timing considerations. Families should prioritize a manageable morning over trying to see every enclosure.",
        ],
      },
      {
        title: "Day 4: travel into the mountains",
        paragraphs: [
          "Treat the connection as a travel day. Confirm station or airport transfers, luggage handling and the final road sector before paying for nonrefundable services. A late arrival can undermine the next morning, so the cheapest schedule is not necessarily the best itinerary.",
          "Altitude affects people differently. Jiuzhaigou is not an extreme expedition, but a gentle first evening, hydration and realistic walking are sensible. Travelers with relevant medical concerns should seek personal medical advice before travel.",
        ],
      },
      {
        title: "Days 5 to 6: Jiuzhaigou and the second mountain day",
        paragraphs: [
          "Use one full day for Jiuzhaigou National Park, following a route that considers shuttle flow, walking comfort and changing light. The aim is not to collect every named lake; it is to experience the valleys without exhausting the party.",
          "Use the second mountain day for a gentler return to selected scenery, a date-appropriate nearby option or rest. Huanglong may be considered when conditions, altitude tolerance and transport make sense, but it should not be presented as an automatic add-on.",
        ],
      },
      {
        title: "Hotels, seasons and the onward journey",
        paragraphs: [
          "Choose a hotel for warmth, service reliability and practical access rather than a label alone. Seasonal conditions can change road comfort, opening arrangements and the amount of daylight. Autumn color is popular; summer is greener and often wetter; colder periods need additional operational checks.",
          "The [7-day Chengdu Panda and Jiuzhaigou private journey](/tours/chengdu-pandas-jiuzhaigou-private-7-day-tour) ends in the Jiuzhaigou area by design. Add a Chengdu return only when your onward flight requires it, rather than hiding another long transfer inside the final day.",
        ],
      },
    ],
    [
      {
        question: "How many days do I need for Chengdu and Jiuzhaigou?",
        answer:
          "Seven days is a practical minimum for three Chengdu nights, three mountain nights and an onward travel day. Add a day when returning to Chengdu is required.",
      },
      {
        question: "Can Jiuzhaigou be a day trip from Chengdu?",
        answer:
          "No. It deserves a multi-night stay because of distance, regional transport and the scale of the park.",
      },
      {
        question: "Is Jiuzhaigou suitable for families?",
        answer:
          "Yes for many families, provided the transport, weather, altitude and walking plan are appropriate for the children.",
      },
      {
        question: "Should I add Huanglong?",
        answer:
          "Only after checking season, transport, altitude comfort and the group's energy. A second easier Jiuzhaigou day can be more rewarding.",
      },
      {
        question: "When should I book?",
        answer:
          "Plan earlier for autumn color, school holidays and specific room needs. Final transport and park arrangements remain date-dependent.",
      },
    ],
  ),

  "shanghai-zhangjiajie-8-day-itinerary": article(
    [
      {
        title: "Why Shanghai and Zhangjiajie make sense together",
        paragraphs: [
          "Shanghai and Zhangjiajie create a strong contrast: an internationally connected modern gateway followed by one of China's most distinctive landscapes. Eight days works when the flight connection is treated as part of the itinerary and Zhangjiajie is given enough park time.",
          "A practical split is three Shanghai nights and four nights in the Zhangjiajie region, with one travel day between them. Travelers continuing elsewhere can adjust the final night around the onward flight.",
        ],
      },
      {
        title: "Days 1 to 3: Shanghai without a checklist",
        paragraphs: [
          "Use arrival day for recovery and a simple waterfront orientation if energy allows. On the first full day, connect the Bund's architecture with a neighborhood that shows lived-in Shanghai. Keep the next day flexible for contemporary design, food, a museum or a water-town excursion.",
          "Airport choice affects the first and last day. Read our [Pudong and Hongqiao airport guide](/journal/shanghai-pudong-hongqiao-airport-guide) before assuming every Shanghai flight uses the same gateway.",
        ],
      },
      {
        title: "Day 4: fly to Zhangjiajie",
        paragraphs: [
          "Build this day around an actual flight schedule. Airport transfers, check-in time and the drive to the right hotel area determine whether sightseeing is responsible. Avoid selling an optimistic full Shanghai morning and a mountain sunset unless the confirmed timings genuinely support both.",
          "For national-park days, Wulingyuan is usually the practical base. Zhangjiajie city is useful for the airport and Tianmen Mountain but creates repeated transfers to the forest park. Compare the trade-offs in our [where to stay in Zhangjiajie guide](/journal/where-to-stay-in-zhangjiajie).",
        ],
      },
      {
        title: "Days 5 to 7: three different landscape days",
        paragraphs: [
          "Use the first park day for the high viewpoints around Yuanjiajie and Tianzi Mountain, with route order adjusted for operations and crowds. Use another day for lower forest scenery such as Golden Whip Stream, creating a different sense of scale rather than repeating platforms.",
          "The third day can remain open, add Tianmen Mountain or use Zhangjiajie Grand Canyon when suitable. Weather matters: cloud can hide views temporarily but also create the atmosphere photographers seek. A flexible sequence is more valuable than promising a fixed viewpoint at a fixed hour.",
        ],
      },
      {
        title: "Pacing, walking and product fit",
        paragraphs: [
          "Cable cars, elevators and park shuttles reduce some climbing but do not remove queues, stairs or long days. Families and older travelers need a route designed around their real walking comfort. Hotel location, early starts and guide decisions have more influence than simply adding another attraction.",
          "See the complete [8-day Shanghai and Zhangjiajie private tour](/tours/shanghai-zhangjiajie-floating-peaks). Share your international flights and walking preferences through our [planning form](/start-planning?source=journal-shanghai-zjj-mid) before fixing the domestic connection.",
        ],
      },
    ],
    [
      {
        question: "Is eight days enough for Shanghai and Zhangjiajie?",
        answer:
          "Yes when Shanghai has two full days and Zhangjiajie has three usable landscape days, with a separate connection day.",
      },
      {
        question: "Should I stay in Wulingyuan or Zhangjiajie city?",
        answer:
          "Wulingyuan is generally better for the national forest park; the city is better for airport access and Tianmen Mountain. Some routes use both.",
      },
      {
        question: "Can I take a train from Shanghai?",
        answer:
          "Schedules and total travel time should be checked for your date. A domestic flight is commonly the practical choice for an eight-day itinerary.",
      },
      {
        question: "What if the mountains are cloudy?",
        answer:
          "Visibility changes quickly. A multi-day stay and flexible route order improve the chance of useful viewpoints but cannot guarantee clear weather.",
      },
      {
        question: "Is this route suitable for older travelers?",
        answer:
          "It can be adapted, but elevators and cable cars do not eliminate all walking, steps or queues. Honest mobility information is essential.",
      },
    ],
  ),

  "beijing-xian-itinerary-how-many-days": article(
    [
      {
        title: "The short answer: six days is the useful center",
        paragraphs: [
          "Allow six days for Beijing and Xi'an when you want the Great Wall, Forbidden City, Terracotta Warriors and one high-speed rail sector without reducing both cities to headline stops. Five days is possible but compressed; seven days creates room for deeper neighborhoods, slower walking or an easier arrival.",
          "Count nights and usable sightseeing days, not only calendar dates. An evening arrival and an early departure do not equal two destination days.",
        ],
      },
      {
        title: "A five-day fast route",
        paragraphs: [
          "A five-day plan normally gives Beijing two full days, uses one day partly for rail, and gives Xi'an one full day plus departure time. It protects the Forbidden City, Great Wall and Terracotta Warriors but leaves little resilience for jet lag, ticket timing or weather.",
          "This version suits travelers already in Asia or those adding Beijing and Xi'an to a wider route. First-time long-haul visitors should avoid scheduling the Forbidden City immediately after landing.",
        ],
      },
      {
        title: "The recommended six-day route",
        paragraphs: [
          "Use three nights in Beijing for arrival, imperial Beijing and a dedicated Great Wall day. Take a daytime high-speed train to Xi'an, then use two nights for the Terracotta Warriors and city heritage. This makes the rail journey a managed transition rather than an invisible gap.",
          "The [6-day Xi'an and Beijing private tour](/tours/xian-beijing-terracotta-warriors-great-wall-private-6-day-tour) can run in either logical direction depending on flights. The sequence should reflect your international gateways, not a fixed marketing map.",
        ],
      },
      {
        title: "When seven days is worth it",
        paragraphs: [
          "Add a seventh day for older travelers, families, food interests or a stronger Xi'an chapter. It can support a gentler Great Wall day, more hutong context, the city wall at an unhurried hour or a second Xi'an heritage experience.",
          "If Beijing is your only destination, the [5-day Beijing and Great Wall journey](/tours/beijing-great-wall-private-5-day-tour) provides a better one-hotel option than forcing Xi'an into too little time.",
        ],
      },
      {
        title: "Rail, tickets and hotel logic",
        paragraphs: [
          "High-speed rail is usually the right connection because it links city centers and avoids two airport transfers. First or business class may improve space, but availability and train choice matter. Passport details must match reservations.",
          "Book hotels for access to the planned sightseeing and station transfer, not merely a star label. Read the [China high-speed train guide](/journal/china-high-speed-train-foreigners) and share your flight details through our [planning form](/start-planning?source=journal-beijing-xian-mid) before fixing the order.",
        ],
      },
    ],
    [
      {
        question: "How many days should I spend in Beijing and Xi'an?",
        answer:
          "Six days is a practical center. Use five for a compact extension and seven for slower pacing or deeper cultural interests.",
      },
      {
        question: "Which city should I visit first?",
        answer:
          "Choose according to international flights and the wider route. Beijing-first is common, but Xi'an-first can be equally sensible.",
      },
      {
        question: "Is the high-speed train difficult for foreigners?",
        answer:
          "It is manageable with a passport-linked ticket and enough station time. Private transfer assistance can simplify luggage and platform navigation.",
      },
      {
        question: "Can children manage this itinerary?",
        answer:
          "Yes when the monument days include breaks and the Great Wall section and access method suit their age and confidence.",
      },
      {
        question: "Do I need a private guide in both cities?",
        answer:
          "Not for every hour, but interpretation adds significant value at the Forbidden City, Great Wall and Terracotta Warriors. Independent evenings can remain free.",
      },
    ],
  ),

  "best-time-to-visit-china": article(
    [
      {
        title: "There is no single best month for all of China",
        paragraphs: [
          "China spans very different climates and elevations. A comfortable month in Beijing may be rainy in another region, while Jiuzhaigou and Zhangjiajie can offer their most distinctive scenery under conditions that do not match a simple national forecast.",
          "For a classic Beijing, Xi'an and Shanghai route, spring and autumn are often attractive because temperatures are generally moderate. That does not make every spring or autumn date quiet, dry or inexpensive. Public holidays and major events can matter more than the season label.",
        ],
      },
      {
        title: "Spring: March to May",
        paragraphs: [
          "Spring can suit cultural routes as northern cities warm and days lengthen. Early March may still feel cool; late spring can become warm and busy. Air quality, rain and blossoms vary by year and place, so avoid promising one exact landscape condition.",
          "Spring is a useful time for the [Beijing, Xi'an and Shanghai journey](/tours/first-china-beautifully-paced), especially for travelers who prefer moderate walking temperatures. Check the Qingming and May Day holiday periods before fixing trains and hotels.",
        ],
      },
      {
        title: "Summer: June to August",
        paragraphs: [
          "Summer brings heat and humidity to many cities, school-holiday demand and rain in several regions. It also offers green landscapes and works for families tied to school calendars. The solution is not to declare summer unsuitable; it is to adjust start times, indoor breaks, hotel location and daily intensity.",
          "Chengdu and Chongqing can feel hot and humid, while mountain areas have their own rain and visibility patterns. Build weather resilience into a [Chengdu, Chongqing and Zhangjiajie route](/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour) rather than relying on one perfect-view day.",
        ],
      },
      {
        title: "Autumn: September to November",
        paragraphs: [
          "Autumn is popular for comfortable city weather and seasonal color, but demand rises around National Day Golden Week. Avoid treating October as one uniform period: the first week can be exceptionally busy, while later dates may be much easier.",
          "Jiuzhaigou autumn color attracts strong demand and exact timing varies. Reserve appropriate hotels and transport early, but do not promise peak foliage for a fixed date. Our [Golden Week guide](/journal/china-golden-week-travel-2026) explains why the calendar must be checked before the route.",
        ],
      },
      {
        title: "Winter: December to February",
        paragraphs: [
          "Winter can offer lower demand in some cities, crisp northern scenes and a different Great Wall atmosphere. It also brings short daylight, cold temperatures and possible weather disruption. Lunar New Year affects operating patterns, family travel and availability.",
          "A winter city route can work well for travelers comfortable with cold, especially with private vehicles and well-located hotels. Mountain destinations require date-specific checks for access, weather and service operation.",
        ],
      },
      {
        title: "Choose dates by priorities",
        paragraphs: [
          "Food and city culture can work year-round. Photography may benefit from atmosphere rather than only clear skies. Families may prioritize school calendars, while older travelers may prioritize moderate temperature and fewer crowds. List the trade-offs you can accept.",
          "Send your dates and preferred experiences through our [season-to-route planner](/start-planning?source=journal-best-time-mid). We will suggest destinations that fit the month and identify weather or crowd assumptions that cannot be guaranteed.",
        ],
      },
    ],
    [
      {
        question: "What is the best month to visit China?",
        answer:
          "There is no universal best month. April, May, September and later October often suit classic city routes, but regions, holidays and personal priorities change the answer.",
      },
      {
        question: "When should I avoid China because of crowds?",
        answer:
          "National Day Golden Week and some other public-holiday periods create strong domestic demand. Exact dates should be checked each year.",
      },
      {
        question: "Is summer too hot for China?",
        answer:
          "Many cities are hot and humid, but a well-paced trip can still work. Mountain routes and early starts may help, while rain remains a planning factor.",
      },
      {
        question: "When is Jiuzhaigou most beautiful?",
        answer:
          "Every season has a different character. Autumn color is famous but busy and not guaranteed for an exact date; summer is green and winter requires operational checks.",
      },
      {
        question: "How far ahead should I book?",
        answer:
          "Plan earlier for public holidays, autumn landscapes, premium rooms, family configurations and complex multi-city routes.",
      },
    ],
  ),

  "how-to-choose-private-china-tour-company": article(
    [
      {
        title: "Start with who will operate the trip",
        paragraphs: [
          "Ask whether the company is a licensed China travel operator, an overseas seller, a marketplace or an itinerary consultant. Each model can be legitimate, but you should understand who contracts hotels, guides and vehicles and who is responsible when services change.",
          "A polished website is not evidence of operating capacity. Request the legal company name, operating location, contact details and a clear explanation of how the trip is delivered across cities.",
        ],
      },
      {
        title: "Judge the proposal, not the adjective",
        paragraphs: [
          "Words such as luxury, authentic and tailor-made do not define a service. A useful proposal names or clearly specifies hotel standards and room assumptions, describes guide and vehicle coverage, identifies intercity transport and states what remains excluded or subject to availability.",
          "Use our [private China tour inclusions guide](/journal/what-is-included-private-china-tour) to compare proposals line by line. If an operator cannot explain a material price difference, the quotations are not ready to compare.",
        ],
      },
      {
        title: "Test their destination knowledge",
        paragraphs: [
          "Ask why a hotel area fits the itinerary, how much walking a day involves, which station a train uses and what changes in a public-holiday period. Strong answers acknowledge uncertainty and date-dependent operations instead of promising everything.",
          "Product depth matters. A company connecting Chengdu and Jiuzhaigou should explain the regional transport and final-night logic; one planning Shanghai and Zhangjiajie should distinguish Wulingyuan from Zhangjiajie city.",
        ],
      },
      {
        title: "Check guide, vehicle and support standards",
        paragraphs: [
          "Confirm guide language, daily service window, vehicle size, luggage assumptions and whether drivers also guide. Ask who monitors the journey when you change cities and how urgent problems are handled outside normal office hours.",
          "Private travel depends on human delivery. A named itinerary is only as strong as ticket handling, supplier confirmation, guide briefing and communication during the trip.",
        ],
      },
      {
        title: "Read payment and change terms before paying",
        paragraphs: [
          "The written terms should state deposit, balance timing, accepted payment methods, cancellation rules, supplier penalties and the process for material changes. Be cautious when pressure to pay arrives before the route and major assumptions are clear.",
          "Reviews can reveal patterns but do not replace contract detail. Look for comments about guide quality, problem resolution and whether the delivered trip matched the proposal—not only generic praise.",
        ],
      },
      {
        title: "A practical operator checklist",
        paragraphs: [
          "Before booking, verify legal identity, route logic, hotel and room assumptions, daily guide and vehicle coverage, transport class, major tickets, exclusions, substitution standards, payment terms and local support. Keep answers in writing.",
          "Ask AVIORA these questions through our [China trip planning form](/start-planning?source=journal-choose-operator-mid). We will explain our operating assumptions and identify what requires supplier confirmation for your dates.",
        ],
      },
    ],
    [
      {
        question: "Should a China tour company be licensed?",
        answer:
          "If it operates travel services in China, ask for its legal identity and licensing position. Overseas sellers and advisers should explain which licensed operator delivers the services.",
      },
      {
        question: "Are online reviews enough to choose an operator?",
        answer:
          "No. Reviews help identify patterns, but you still need a clear proposal, terms, legal identity and explanation of who operates the trip.",
      },
      {
        question: "Why do China tour quotations vary so much?",
        answer:
          "Hotels, room categories, guide hours, vehicles, transport class, tickets, meals and support can differ even when city names are identical.",
      },
      {
        question: "Should the company guarantee every attraction ticket?",
        answer:
          "Capacity-controlled tickets should be described honestly. The company should explain release schedules, required passport data and the substitution process.",
      },
      {
        question: "What should I receive before paying a deposit?",
        answer:
          "You should receive a clear route, major service assumptions, inclusions, exclusions, price, payment schedule and applicable change or cancellation terms.",
      },
    ],
  ),

  "is-private-china-tour-worth-it": article(
    [
      {
        title: "Value depends on the problem private service solves",
        paragraphs: [
          "A private China tour is worth the additional cost when it protects limited vacation time, makes complex transfers manageable, provides interpretation at important sites or adapts the route to real family, mobility or dietary needs. It is not automatically valuable simply because a car and guide are exclusive.",
          "Judge value against the complete trip. Missing a timed attraction, using an unsuitable hotel area or losing half a day to a weak connection can cost more than the visible saving in a thin package.",
        ],
      },
      {
        title: "Where private support has the strongest impact",
        paragraphs: [
          "Arrival, major railway stations, the Great Wall, the Terracotta Warriors, panda timing and multi-layered places such as Chongqing or Zhangjiajie often benefit from local planning and guiding. A guide can add context, while a vehicle and driver reduce transfer friction on days poorly served by simple point-to-point transport.",
          "This is particularly relevant for first-time visitors, families, older travelers and short trips. The [private versus group tour comparison](/journal/private-china-tour-vs-group-tour) helps distinguish service format from value.",
        ],
      },
      {
        title: "Where you may not need full private service",
        paragraphs: [
          "Free evenings, a slow neighborhood day, time in a well-connected Shanghai district or personal shopping may not need a guide and vehicle. Some travelers enjoy one independent day after gaining confidence with mobile payments and transport.",
          "A responsible private plan can include open days. Paying for unused service is not luxury; matching support to the itinerary is better value.",
        ],
      },
      {
        title: "Families and multigenerational groups",
        paragraphs: [
          "Private timing helps with early panda visits, children's attention, grandparents' walking comfort, suitable vehicles and meal schedules. Connecting rooms, bedding and luggage capacity must still be confirmed; private service does not solve poor hotel planning by itself.",
          "The value rises when several needs must be coordinated together. One guide briefing can connect dietary notes, attraction pacing and family interests across the day.",
        ],
      },
      {
        title: "How to decide before booking",
        paragraphs: [
          "List the days where failure would materially damage the trip. Price private support for those days, then compare a fully private route with a hybrid one. Verify exactly what each includes through our [2026 quotation guide](/journal/private-china-tour-cost-2026).",
          "Share your route and priorities through our [value-planning form](/start-planning?source=journal-private-worth-mid). We can recommend guided days, transfers and independent time without assuming every day needs the same service.",
        ],
      },
    ],
    [
      {
        question: "Is a private tour worth it for a first trip to China?",
        answer:
          "Often, especially when time is limited or the route includes several cities. The greatest value usually comes from complex sightseeing and transfers rather than constant supervision.",
      },
      {
        question: "Do I need a private guide every day?",
        answer:
          "No. Many strong itineraries combine guided cultural days and managed transfers with independent evenings or open days.",
      },
      {
        question: "Is private travel only for luxury hotels?",
        answer:
          "No. Private guiding and transport can be paired with dependable comfortable hotels. Service level and hotel level are separate decisions.",
      },
      {
        question: "Does private touring remove all queues?",
        answer:
          "No. Security, official ticketing and attraction operations still apply. Good timing and planning can reduce avoidable waiting but cannot remove public procedures.",
      },
      {
        question: "How can I compare value?",
        answer:
          "Compare identical hotel rooms, service hours, transport classes, tickets and support, then decide which flexibility and assistance matter to your party.",
      },
    ],
  ),

  "china-family-itinerary-10-to-14-days": article(
    [
      {
        title: "Start with family rhythm, not a city count",
        paragraphs: [
          "A family China itinerary works when children and adults can stay curious without spending every second day packing. Ten days can cover Beijing, Xi'an and Chengdu or Shanghai; twelve to fourteen days allows a slower four-city route or a landscape extension.",
          "Ask what your family actually enjoys: animals, food, hands-on culture, architecture, scenery or modern city life. The answer should shape the route more than a checklist of famous names.",
        ],
      },
      {
        title: "A 10-day family framework",
        paragraphs: [
          "Use three nights in Beijing, two in Xi'an and four in Chengdu or Shanghai, depending on the family's interests and international flights. Beijing offers the Great Wall and palace scale; Xi'an adds archaeology; Chengdu offers pandas, parks and a softer pace.",
          "The [Chengdu panda and Sichuan food journey](/tours/chengdu-pandas-sichuan-table) is a useful shorter family chapter, while the [11-day four-city route](/tours/beijing-xian-chengdu-shanghai-private-11-day-tour) gives a broader first visit.",
        ],
      },
      {
        title: "Build days children can enjoy",
        paragraphs: [
          "Pair one major sight with one human-scale experience. A Forbidden City morning can lead to a hutong snack or park; a panda visit can lead to tea or an easy neighborhood; the Terracotta Warriors need a clear explanation and a break rather than another museum immediately afterward.",
          "A private guide should adjust language and examples for the children, not simply deliver an adult lecture. Confirm whether the guide is comfortable with your children's ages and attention span.",
        ],
      },
      {
        title: "Rooms, vehicles and food",
        paragraphs: [
          "Family room availability is not guaranteed by the phrase family-friendly. Confirm bedding, connecting rooms, extra beds, breakfast, elevator access and cancellation conditions. Vehicle choice must account for international luggage, not only passenger seats.",
          "Food planning should be specific. Explain allergies, intolerances, religious requirements and how adventurous children are. A local guide can find suitable options, but final menus and restaurant availability remain date-dependent.",
        ],
      },
      {
        title: "Transfers and downtime",
        paragraphs: [
          "High-speed rail can be a memorable part of the trip when station support and luggage flow are planned. Avoid stacking a long train or flight with a major afternoon attraction unless arrival and energy make that realistic.",
          "Protect at least one flexible half-day every few days. It can become a park, market, pool, rest period or optional experience. Families often remember the unplanned breathing space as much as the landmark.",
        ],
      },
      {
        title: "Make the route fit your children",
        paragraphs: [
          "Share ages, interests, room needs, dietary notes and the longest walking day your family will enjoy through our [family trip planning form](/start-planning?source=journal-family-mid). We will show where to slow down, which cities to combine and what should stay optional.",
        ],
      },
    ],
    [
      {
        question: "Is China good for a family holiday?",
        answer:
          "Yes, when the route is paced around children, rooms, food, rest and reliable transfers rather than only adult sightseeing priorities.",
      },
      {
        question: "How many days should a family spend in China?",
        answer:
          "Ten days is a useful first framework; twelve to fourteen days allows more recovery time or a fourth city without making every day a transfer.",
      },
      {
        question: "Are pandas suitable for young children?",
        answer:
          "The early visit is often engaging, but plan around opening times, crowds, weather and the child's energy.",
      },
      {
        question: "Can children use high-speed trains in China?",
        answer:
          "Yes. Station timing, luggage support and suitable departure times make the experience much easier.",
      },
      {
        question: "Can you arrange allergy-aware meals?",
        answer:
          "Dietary requirements should be shared before confirmation. The operator can check restaurants and brief guides, while menus remain subject to local availability.",
      },
    ],
  ),

  "china-itinerary-older-travelers-10-days": article(
    [
      {
        title: "Comfort is a design decision",
        paragraphs: [
          "A comfortable China itinerary for older travelers is not defined by age. It is defined by walking comfort, stairs, heat tolerance, recovery time, room access, luggage handling and the confidence to ask for a change during the day.",
          "Ten days can work well with Beijing, Xi'an and Shanghai because high-speed rail connects the historic chapters and the route can use fewer hotel changes than a wider multi-region plan.",
        ],
      },
      {
        title: "A gentle 10-day route",
        paragraphs: [
          "Allow four nights in Beijing, two in Xi'an and three in Shanghai, with arrival or departure positioned around international flights. This gives the Great Wall its own day and leaves room for a lighter day after rail.",
          "The [9-day Beijing, Xi'an and Shanghai private journey](/tours/first-china-beautifully-paced) is a starting framework. Add a night when jet lag, mobility or a slower museum and neighborhood pace matters.",
        ],
      },
      {
        title: "Plan landmark days honestly",
        paragraphs: [
          "The Forbidden City and Great Wall involve distance, surfaces, queues and stairs even when access aids are available. A guide should explain the route before arrival and offer a shorter interpretation when needed, not encourage a traveler to push through.",
          "At the Terracotta Warriors, plan transport and seating so the archaeological experience remains the focus. Shanghai can provide more flexible indoor and neighborhood choices after the historic sites.",
        ],
      },
      {
        title: "Hotels, rail and vehicles",
        paragraphs: [
          "A well-located hotel can remove repeated taxi rides and reduce the distance to breakfast, restaurants and the elevator. Confirm room layout, walk from entrance to room, shower style and any mobility requirements rather than relying on a star rating.",
          "Private station transfers are useful when luggage, unfamiliar signage or platform timing create stress. Read the [high-speed rail guide for foreign visitors](/journal/china-high-speed-train-foreigners) and include realistic station time.",
        ],
      },
      {
        title: "Share the details that affect comfort",
        paragraphs: [
          "Tell us about walking limits, stairs, medical equipment, dietary needs, preferred room configuration and whether a traveling companion can assist. Use our [comfortable China route form](/start-planning?source=journal-older-travelers-mid) so the plan reflects real needs discreetly.",
        ],
      },
    ],
    [
      {
        question: "Is China suitable for older travelers?",
        answer:
          "Yes, with honest planning around walking, heat, stairs, rooms, transfers and recovery time. The route should be adapted to the individual traveler.",
      },
      {
        question: "Should older travelers avoid the Great Wall?",
        answer:
          "Not necessarily. Choose the section, access method and walking distance carefully, and allow a full day rather than combining it with another major sight.",
      },
      {
        question: "Are private vehicles useful for seniors?",
        answer:
          "They can reduce transfers and provide a place to rest between visits, but the vehicle does not eliminate walking at attractions.",
      },
      {
        question: "How many nights should I spend in Beijing?",
        answer:
          "Four nights often creates a more comfortable first chapter, especially when the Great Wall and jet lag are involved.",
      },
      {
        question: "Can you plan around mobility limitations?",
        answer:
          "Yes, when the details are shared early. Specific attraction access and surfaces must still be checked for the dates and chosen route.",
      },
    ],
  ),

  "how-many-days-in-china-7-10-14-day-itineraries": article(
    [
      {
        title: "Seven days: one clear China story",
        paragraphs: [
          "Seven days is best used for a focused route rather than a national highlights list. Choose Beijing and Xi'an, Chengdu and Jiuzhaigou, or Shanghai and Zhangjiajie. Each pairing has a different transport and pacing profile.",
          "A seven-day trip should normally include two or three destination chapters at most. If more cities appear, check how many usable sightseeing days remain after flights, trains and hotel changes.",
        ],
      },
      {
        title: "Ten days: the classic first visit",
        paragraphs: [
          "Ten days can connect Beijing, Xi'an and Shanghai with enough time for the Great Wall, Terracotta Warriors, city neighborhoods and a measured finale. Adding Chengdu is possible but requires careful flight and hotel planning.",
          "Use our [10-day first-time China itinerary](/journal/10-day-china-itinerary-first-time-visitors) as a decision framework, then adjust around flights, family rhythm and interests rather than copying every day.",
        ],
      },
      {
        title: "Fourteen days: add depth, not just distance",
        paragraphs: [
          "Fourteen days gives you room for Chengdu, a mountain extension or slower city chapters. It also gives recovery time after long transfers and more flexibility when weather changes an outdoor day.",
          "A two-week route can still feel rushed if it includes too many regions. The [11-day Chengdu, Chongqing and Zhangjiajie journey](/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour) shows how a landscape-led route uses open days and managed transitions.",
        ],
      },
      {
        title: "Count transition days honestly",
        paragraphs: [
          "A train or flight day may include hotel checkout, station or airport transfer, security, luggage, arrival and a new hotel. It can still include a light orientation, but it should not be sold as a full cultural day without checking the actual schedule.",
          "The right itinerary is often the one that removes one city. A coherent story with time to look around converts better than a map crowded with destinations that a traveler barely experiences.",
        ],
      },
      {
        title: "Choose your length with a specialist",
        paragraphs: [
          "Send your available nights, arrival and departure cities, and the three experiences you care about through our [itinerary planning form](/start-planning?source=journal-trip-length-mid). We will show what fits, what requires an internal flight and what belongs on a future trip.",
        ],
      },
    ],
    [
      {
        question: "Is seven days enough for China?",
        answer:
          "Yes for one focused pairing or a compact first route. It is not enough to experience many distant regions comfortably.",
      },
      {
        question: "Is ten days enough for Beijing, Xi'an and Shanghai?",
        answer:
          "Yes, with realistic city stays and well-managed rail. Eleven days is more comfortable when Chengdu is added.",
      },
      {
        question: "What can I add in fourteen days?",
        answer:
          "Add Chengdu, Jiuzhaigou, Zhangjiajie or slower city time, depending on season and transport. Do not add every option at once.",
      },
      {
        question: "Should I plan arrival day as a sightseeing day?",
        answer:
          "Usually no, especially after a long-haul flight. Use it for arrival support and a light orientation if energy allows.",
      },
      {
        question: "How many cities are too many?",
        answer:
          "There is no fixed number, but every added city needs a hotel change and transition. Compare usable sightseeing days before deciding.",
      },
    ],
  ),

  "what-is-included-private-china-tour": article(
    [
      {
        title: "Start with the written proposal",
        paragraphs: [
          "A private China tour proposal should identify what is included for your dates and party, not rely on a generic package label. The details should cover hotels, guides, vehicles, intercity transport, major tickets, meals, arrival support and exclusions.",
          "If a line is unclear, ask before paying. A transparent quotation can still change when suppliers confirm availability, but the assumptions and substitution process should be visible.",
        ],
      },
      {
        title: "Hotels and room configuration",
        paragraphs: [
          "Confirm the hotel name or defined standard, location, room category, occupancy, breakfast and cancellation conditions. Family and connecting rooms are often request-based until the property confirms them.",
          "A higher star rating does not automatically mean a better trip. Location, bedding, elevator access and the daily transfer pattern may matter more for your party.",
        ],
      },
      {
        title: "Guides, vehicles and arrival support",
        paragraphs: [
          "The proposal should state guide language, service days or hours, vehicle type, luggage capacity, airport and station transfers, and whether the driver also guides. Confirm what happens on free evenings and how overtime is handled.",
          "Arrival support can be especially valuable in a first visit: meeting point instructions, passport-linked tickets, luggage flow and a direct local contact reduce avoidable friction before the sightseeing begins.",
        ],
      },
      {
        title: "Trains, flights and tickets",
        paragraphs: [
          "Name the intercity sector, class and baggage conditions where relevant. High-speed rail and domestic flights have different station, airport and transfer implications. Tickets for capacity-controlled attractions should be identified rather than hidden inside “all entrance fees.”",
          "Our [high-speed train guide](/journal/china-high-speed-train-foreigners) and [Forbidden City ticket guide](/journal/forbidden-city-tickets-foreigners) explain why passport details and release schedules matter.",
        ],
      },
      {
        title: "Meals, experiences and exclusions",
        paragraphs: [
          "State which meals, restaurant reservations, shows and specialist experiences are included. Dietary requests should be briefed and checked, but a menu or restaurant may remain subject to local confirmation.",
          "Common exclusions include international flights, visas where required, travel insurance, personal spending, some meals, gratuities and optional activities. The written proposal takes priority over a general web article.",
        ],
      },
      {
        title: "A useful quotation checklist",
        paragraphs: [
          "Before comparing totals, check dates, travelers, hotels and rooms, guide coverage, vehicle and luggage assumptions, transport class, attraction tickets, meals, taxes, deposit, change terms and exclusions. Then ask what is confirmed and what remains provisional.",
          "Request a clearly scoped proposal through our [private China planning form](/start-planning?source=journal-inclusions-mid). We will explain the main assumptions before you decide whether to proceed.",
        ],
      },
    ],
    [
      {
        question: "Are international flights included?",
        answer:
          "Usually not unless the written quotation states otherwise. Check the specific proposal rather than assuming from the itinerary page.",
      },
      {
        question: "Are meals included in private China tours?",
        answer:
          "It varies. Breakfast, selected meals, restaurant reservations and special menus should each be stated clearly.",
      },
      {
        question: "Are attraction tickets guaranteed?",
        answer:
          "They remain subject to official capacity and release rules. The operator should explain the reservation process and substitution standard.",
      },
      {
        question: "Is travel insurance included?",
        answer:
          "It is commonly excluded. Travelers should arrange appropriate cover and check the operator's written terms.",
      },
      {
        question: "What makes a quotation comparable?",
        answer:
          "Identical dates, travelers, hotels, rooms, service hours, transport classes, tickets, meals and exclusions. The total alone is not enough.",
      },
    ],
  ),
};
