import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/shaoguan.svg",
  alt: "Original Shaoguan planning schematic comparing Danxia Mountain, Nanhua Temple and city versus mountain bases; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const shaoguanGuide: ExpandedDestination = {
  id: "shaoguan",
  name: "Shaoguan",
  region: "south",
  kicker: "Red cliffs and Chan Buddhist history in northern Guangdong",
  description:
    "Plan Shaoguan around Danxia Mountain's red sandstone scenery or Nanhua Temple's Chan Buddhist history, with realistic walking, hotel bases and onward travel.",
  stay: "2–3 nights for one or two full local days",
  bestFor: "Red-cliff landscapes, Buddhist history and a slower northern Guangdong journey",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["guangzhou", "qingyuan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Shaoguan Travel Guide: Danxia & Nanhua Temple",
    seoTitle: "Shaoguan Guide: Danxia, Nanhua & Stays",
    seoDescription:
      "Compare Danxia Mountain and Nanhua Temple, city and mountain hotel bases, two- or three-night itineraries, walking and complete transfers from Guangzhou.",
    answer:
      "Shaoguan (韶关) is a city in northern Guangdong and a gateway to two quite different subjects: Danxia Mountain's red sandstone landscape and Nanhua Temple's importance in Chan Buddhist history. Mount Danxia, also called Danxiashan (丹霞山), lies in the Renhua area outside the urban center; Nanhua Temple (南华寺) is in Qujiang. They are not adjacent city sights. Two nights give one full day for a clear priority; three allow separate landscape and temple days. Stay in the city for a practical base or near the chosen Danxia entrance when mountain time justifies it. Compare the actual hotel, route and transfers before booking trains. This is Guangdong's Danxia Mountain, not Zhangye's colored hills in Gansu.",
    stayAnswer:
      "Choose two nights for one substantial Danxia or cultural day between arrival and departure. Three nights provide two full days and make it easier to give the mountain and Nanhua their own attention. A one-night stop can suit a limited visit with favorable transport. A day trip from Guangzhou needs a selective purpose and a comfortable complete return; fast rail alone does not establish a good mountain day. Extra nights should support a second worthwhile route, better rest or a confirmed specialist interest rather than repeated viewpoints.",
    hotelAnswer:
      "Compare a central Shaoguan hotel for meals and urban services, an actual Danxiashan-area property for mountain access, and a Qujiang base only when the specific address improves the cultural plan. The city and scenic-area entrances are different bases. Near the mountain, check the room's bathroom, heating or cooling, dampness, noise, breakfast and final vehicle access. A rural inn can have a useful location without full-service hotel standards. A city hotel can offer dependable comfort while requiring a longer drive to the first trail. Check both the hotel address and the entrance used by the proposed route.",
    sightseeingQuestion: "Should I prioritize Danxia Mountain or Nanhua Temple?",
    sightseeingAnswer:
      "Choose Danxia for red cliffs, layered rock and a landscape walk matched to your fitness. Choose Nanhua for a considered introduction to Chan Buddhist history and a living religious setting. They provide different kinds of depth. A temple visit is not simply a short extra on the way down from every mountain route, and a mountain visit need not include every summit. With two full days, separate them; with one, choose the subject that interests you most and keep a complementary stop modest.",
    visitorResources: [
      {
        label: "Shaoguan municipal government",
        href: "https://www.sg.gov.cn/",
        scope:
          "Municipal background and dated notices, mainly in Chinese. Check the exact Danxia entrance, public trail, any cableway or boat operation and Nanhua visitor arrangements with the responsible institution for your dates. A city introduction does not confirm a room, specialist or religious program.",
      },
      {
        label: "UNESCO: China Danxia",
        href: "https://whc.unesco.org/en/list/1335/",
        scope:
          "Reference for the serial World Heritage property and its landscape significance. The designation does not make every red-rock site part of the property or verify current visitor access, transport, weather or hotel services.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and exact station names. Shaoguan and Shaoguan East are different gateways; compare the complete hotel and scenic-area transfers rather than choosing solely by rail journey time.",
      },
    ],
    serviceScope:
      "Ask for the actual room, station, vehicle and guide hours, selected visitor entrances, named routes, admissions and meals. For Danxia, distinguish walking, any operating cableway and any separate boat outing; specify the steps remaining after transport. For Nanhua, distinguish general public visiting and cultural explanation from religious participation or a private appointment. A specialist, monastic meeting, workshop or private space needs a separate confirmed arrangement. A good private plan improves pacing and interpretation while following the same public access rules.",
    routeAdvice:
      "Guangzhou offers a contrasting Cantonese city, food and trading-history stay. Qingyuan offers separate countryside and resort choices, with Yingde and Lianzhou developed in their own guides. Compare the actual roads and useful visiting hours before linking northern Guangdong stops: sharing a provincial region is not evidence that everything fits into one day. No matching published Shaoguan product is recommended here. Send your dates, gateways, preferred walking, room expectations and interest in geology or Buddhist history for a proposal built around those priorities.",
    practicalPlanning: {
      timing:
        "Put the main landscape visit on a full local day where possible. Count entry, internal transport, climbing, interpretation, lunch, rests and the return from the actual trail exit. Sunrise is a separate decision involving dark access, weather, sleep and operating rules, not a standard promise. Protect an onward train from an uncertain mountain finish. Nanhua should have time for orientation and quiet observation rather than be squeezed into the remaining minutes.",
      walking:
        "Ask for the named Danxia route, ascent, descent and remaining stairs after any cableway. Steep or wet rock steps can make the descent as demanding as the climb. A boat view, lower walk and summit route are different experiences. Check seating, toilets, shade and shorter return choices. Temple courtyards and halls can also involve thresholds and steps; religious interest does not imply step-free access. Agree a worthwhile alternative for anyone who will not follow the full route.",
      cost: "Compare complete vehicle and guide time, exact room category, admissions, separately priced internal transport, optional boat segments and meals. A lower room rate may mean a longer trail transfer or weaker meal provision. A higher quote should explain better rooms, interpretation, support and usable time. Purchases, donations and any specialist session should be identified separately; a temple visit does not require a shopping stop or an unsolicited ritual fee.",
    },
    attractions: [
      "Danxia Mountain / Danxiashan, on a named public landscape route",
      "A selected Zhanglaofeng / Elder Peak route when its steps and access suit the group",
      "Jinjiang river scenery through an independently confirmed walking or boat plan",
      "Nanhua Temple in Qujiang, for Chan Buddhist history and public religious-site visiting",
      "A selected Shaoguan city walk and regional meal between the main outings",
      "An actual landscape interpretation session focused on visible rock, layers and erosion",
    ],
    stays: [
      {
        label: "Day visit or 1 night / a selective stop",
        advice:
          "Choose one main subject around the exact transport window. A limited temple visit or defined landscape outing can work; a tight stop should not be described as complete coverage of Danxia, Nanhua and surrounding counties.",
      },
      {
        label: "2 nights / one full local day",
        advice:
          "Settle before the principal outing and choose a base that supports it. Keep arrival and departure modest. If Danxia is the reason to travel, protect useful mountain time rather than spending the full day transferring between unrelated sights.",
      },
      {
        label: "3 nights / two distinct full days",
        advice:
          "Separate a suitable Danxia route from Nanhua and selected city context. Keep room changes to a minimum unless a mountain stay offers a real benefit. Adjust outdoor order within actual booking terms when conditions change.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Shaoguan / practical city services",
        advice:
          "Compare the booked room's quiet, bathroom, temperature control, breakfast and pickup. This can suit mixed landscape and cultural days, but review the full drive to each entrance. A station hotel is not automatically the best base for meals or the mountain.",
      },
      {
        name: "Danxiashan / a mountain-led stay",
        advice:
          "Choose an exact property and entrance, not just a scenic-area label. Check evening meals, dampness, insulation, luggage handling and the morning road. Sunrise ambitions should not override sleep or imply pre-opening access. Confirm whether vehicle access reaches the door.",
      },
      {
        name: "Qujiang / a specific cultural-route base",
        advice:
          "Consider only when the actual property and roads support the Nanhua-led plan. Compare room standards and dinner options with the city alternative. Proximity to the temple does not imply monastic accommodation, private religious access or a secluded retreat.",
      },
    ],
    tradeoffs: [
      {
        title: "Danxia is a landform, not a promise of rainbow stripes",
        advice:
          "At Guangdong's Danxiashan, look for red sedimentary rock, cliffs, pillars and the relationship between resistant layers and erosion. Zhangye in Gansu is a different destination. UNESCO's China Danxia is a serial property with multiple components, not a name for every red hill. A useful explanation begins with the landscape visible on the chosen route.",
      },
      {
        title: "A cableway and a summit walk answer different needs",
        advice:
          "Internal transport may remove one ascent without eliminating approach paths, stairs or the return. Review the complete circuit and what happens if a guest turns back. A lower route with careful interpretation can be more rewarding than an uncomfortable summit push. Boat scenery, when operating, provides another perspective rather than an equivalent substitute for every walk.",
      },
      {
        title: "Nanhua deserves context before the camera comes out",
        advice:
          "The temple is associated with Huineng, the Sixth Patriarch in the Chan tradition. Explain the distinction between religious lineage, devotional accounts and independently documented history. Public hall access, photography, ceremonies and any conversation with clergy follow current arrangements. Do not promise a viewing of a particular relic, a meditation class or a private audience from a general temple visit.",
      },
      {
        title: "Mountain sleep and city comfort require an actual comparison",
        advice:
          "A room nearer Danxia can improve the first approach, while a city hotel may offer more dependable services and food choices. Assess the actual room rather than equate countryside with luxury. If the property itself is a major part of the stay, check somewhere comfortable to sit and eat when outdoor plans change.",
      },
      {
        title: "Do not turn a red-cliff day into a checklist",
        advice:
          "Choose a main route and explain what it adds: broad views, close rock observation or a river perspective. Include lunch and pauses. A short list with a coherent route is more useful than collecting every named formation while losing time in repeated transfers. Extend the stay only for a genuinely different experience.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "guangzhou",
        advice:
          "Pair northern Guangdong landscape or Buddhist history with Guangzhou's Cantonese food and city heritage. Check the exact stations, both hotel roads and useful hours. The existing Guangzhou–Shenzhen business itinerary does not automatically include Shaoguan or Danxia.",
      },
      {
        slug: "qingyuan",
        advice:
          "Qingyuan adds different countryside, tea and resort decisions. Select the actual county and property, then compare complete roads with a direct rail return. Its regional name does not put every Yingde or Lianzhou experience on the way to Shaoguan.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for walking, subject to actual rain, temperature and holidays. Rain can reduce views and make steps slippery; summer needs shade, water and shorter exposed blocks. Colder stays make room heating and early starts more consequential. Sunrise and mist are weather-dependent, not included outcomes. Keep a worthwhile cultural or indoor alternative and review current mountain operations before departure.",
    orientation:
      "Shaoguan is a large municipality in northern Guangdong. The urban center, Renhua's Danxia Mountain and Qujiang's Nanhua Temple require different roads. Danxiashan / 丹霞山 is the named mountain destination, while danxia is also a wider geological term. Choose a city-cultural day, a Danxia Mountain stay or a Nanhua Temple visit as the main focus. Ruyuan and Nanxiong need separate road and overnight decisions.",
    experiences: [
      "Read red sandstone cliffs through visible layers and erosion on a suitable Danxia route",
      "Explore Nanhua Temple's place in Chan Buddhist history with respectful public visiting",
      "Balance the main outings with regional food and a room chosen for real comfort",
    ],
    planningNotes: [
      "Separate the city, Danxia Mountain and Nanhua before choosing a base",
      "Specify the full ascent and descent, including stairs after transport",
      "Give geological and religious interpretation their own time and evidence",
    ],
    arrival:
      "Compare dated trains to the exact ticketed station: Shaoguan and Shaoguan East are distinct. Add terminal access, bags, the full hotel transfer and the later road to the attraction. A fast Guangzhou rail segment is not the total trip. A road approach from another northern Guangdong base should specify the actual addresses and rest stops. Avoid making a key temple or mountain visit depend on an uncertain arrival.",
    gettingAround:
      "Plan transport around the hotel and named visitor entrances, with waiting, guide accompaniment and pickup agreed. Public scenic-area transport has its own operating terms. A vehicle outside the park does not remove internal walking. Separate the mountain and temple unless a genuinely selective plan leaves time for both. A driver, general guide and specialist in geology or Buddhist history have different roles; specify the explanation you want.",
    stayStrategy:
      "Two nights support one full day; three can separate Danxia from Nanhua. Compare a city room with a precisely located mountain stay on sleep, bathroom, temperature control, meals and the complete road. One suitable base may be easier than a short split stay. The premium value lies in interpretation, realistic pacing and dependable support, rather than claims of private mountains, unrestricted religious access or guaranteed sunrise.",
    firstTimerNote:
      "Start with the experience you want, then choose the route and room. A memorable red-cliff walk does not require every summit, and a thoughtful temple visit does not require a special ceremony. Ask what the plan lets you understand, how much walking remains and where you can rest. Those answers are more useful than the number of attractions listed.",
    faqs: [
      {
        question: "Is Shaoguan worth visiting from Guangzhou?",
        answer:
          "Yes for travelers with a clear interest in Danxia's red-cliff landscapes or Nanhua's Chan Buddhist history. Compare a selective day visit with two or three nights. Fast rail does not include station transfers, scenic-area transport, walking or the complete return.",
      },
      {
        question: "Is Danxia Mountain the same as Zhangye Danxia?",
        answer:
          "No. Danxia Mountain / Danxiashan is in the Shaoguan area of Guangdong; Zhangye's colored hills are in Gansu. They are different destinations with different landscapes, gateways and itineraries. Do not book Guangdong expecting Zhangye's striped panoramas.",
      },
      {
        question: "How many nights do I need in Shaoguan?",
        answer:
          "Two nights give one full local day for a main priority. Three provide two full days, allowing Danxia and Nanhua to be visited separately. One night needs a selective plan with favorable arrival and departure times.",
      },
      {
        question: "Should I stay in Shaoguan city or near Danxia Mountain?",
        answer:
          "Choose the city for practical services and mixed outings, or a specific mountain-area property when it improves the main landscape day. Compare actual room comfort, meals, entrance and full roads. Scenic proximity alone does not establish a better stay.",
      },
      {
        question: "Can I visit Danxia without a strenuous climb?",
        answer:
          "Ask for a named lower route or separately operating river outing, with access, remaining stairs and return reviewed. A cableway does not remove every step. Neither a scenic-area name nor a photograph establishes step-free access.",
      },
      {
        question: "Why is Nanhua Temple important?",
        answer:
          "It is closely associated with Huineng, revered as the Sixth Patriarch in the Chan Buddhist tradition. A useful visit explains that lineage and the living temple setting. Specific halls, relic viewing, photography and religious participation depend on current access and arrangements.",
      },
      {
        question: "Which published Shaoguan tour can I book from this page?",
        answer:
          "No matching published product is recommended here. Request a tailored proposal specifying the room, complete transport, guide, public routes, meals and any specialist session. The sample outline is not an existing package or a promise of sunrise, boats or private temple access.",
      },
    ],
    culturalStory: {
      title: "Learn to read the rock, then change the question at the temple",
      paragraphs: [
        "Danxia rewards looking closely as well as looking far. Red sedimentary layers, steep faces and isolated forms offer a way to discuss deposition, uplift and erosion without treating the landscape as a collection of curious silhouettes. The explanation should refer to features visible on the chosen route; a precise age or formation story needs a reliable source. The China Danxia World Heritage designation provides a wider geological context, while a local walk gives that context something concrete to attach to. A good guide leaves time for both observation and questions.",
        "At Nanhua, the central subject changes from geological process to religious memory and practice. Huineng's place in Chan lineage helps explain why the temple matters beyond its architecture. Distinguish what a tradition teaches from what a historical source establishes, and explain the objects and spaces actually accessible that day. Quiet observation can be valuable without a ceremony or conversation with clergy. Respectful interpretation begins by treating the temple as a religious institution with its own rhythms, not a stage arranged for a visitor's photograph.",
      ],
    },
    foodStory: {
      title: "Plan a northern Guangdong table around the day's appetite",
      paragraphs: [
        "A Shaoguan meal offers a chance to notice northern Guangdong's Cantonese and Hakka influences without imposing one fixed regional menu. Ask about the actual preparation of a tofu dish, vegetables, chicken or a local preserved ingredient, then choose a balanced table rather than several heavy signature dishes. Preserved foods can be salty; a preparation called home-style does not reveal every ingredient. If a rural meal is part of the outing, agree the kitchen and menu instead of assuming food will be available at the final trail exit.",
        "Before a mountain day, arrange breakfast, drinking water, lunch and a practical dinner time. Confirm meat or fish stocks, soy, wheat-containing sauces, peanuts, sesame and shared preparation where relevant. A vegetable dish is not automatically vegetarian, and tofu does not establish an allergen-safe kitchen. Serious dietary needs require the actual restaurant's confirmed capacity and an alternative. Comfortable seating, a useful meal break and an unhurried return add more to the stay than another detour for a famous dish.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Choose a base that supports the main day",
        description:
          "Complete the actual station road, settle into the booked room and keep the first meal or walk modest. Review current trail conditions, remaining steps and the pickup plan. Avoid tying the essential landscape visit to an uncertain train arrival.",
      },
      {
        day: "Full day 1",
        title: "Give Danxia a coherent route",
        description:
          "Follow the selected public landscape route with time for interpretation, lunch and rest. Any cableway or boat must be separately confirmed and the complete return understood. A lower walk and a summit circuit are alternatives chosen for the group, not an obligation to complete both.",
      },
      {
        day: "Optional full day 2 / three-night stay",
        title: "Change pace at Nanhua",
        description:
          "Visit the temple under current public arrangements, with Chan history explained through accessible spaces. Add a modest city or food interest when time allows. A geology-led guest might instead choose a distinct confirmed landscape route; neither option implies private religious access.",
      },
      {
        day: "Departure",
        title: "Leave room for the complete onward journey",
        description:
          "Allow breakfast, luggage and the road to the exact station or next hotel. Continue to Guangzhou or a carefully selected Qingyuan-area base without squeezing in a last mountain circuit. This is an illustrative outline, not a published package or guarantee of operations and specialist access.",
      },
    ],
  },
};
