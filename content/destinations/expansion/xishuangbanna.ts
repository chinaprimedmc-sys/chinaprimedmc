import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xishuangbanna.svg",
  alt: "Xishuangbanna planning schematic comparing Jinghong city, a Menglun botanical-garden chapter and a property-led resort stay; original schematic, not a map or destination photograph",
  width: 1600,
  height: 1200,
};

export const xishuangbannaGuide: ExpandedDestination = {
  id: "xishuangbanna",
  name: "Xishuangbanna",
  region: "southwest",
  kicker: "Tropical plants, Dai heritage and a slower southern Yunnan rhythm",
  description:
    "Choose a worthwhile Xishuangbanna stay by separating Jinghong city, Menglun's botanical garden and resort time, with clear advice on heat, walking, temple visits and where to base the trip.",
  stay: "4–5 nights",
  bestFor: "Botanical interests, Dai cultural context and tropical hotel downtime",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["puer", "kunming", "mangshi"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xishuangbanna Travel Guide: Gardens, Culture & Stays",
    seoTitle: "Xishuangbanna Travel Guide: Gardens & Where to Stay",
    seoDescription:
      "Compare Jinghong, Menglun and resort stays in Xishuangbanna, with botanical-garden choices, Dai heritage, weather, walking and a relaxed four-night plan.",
    answer:
      "Xishuangbanna (西双版纳), often shortened to Banna, is a Dai autonomous prefecture in southern Yunnan. Jinghong is its main city, not a synonym for the whole region. Choose the destination for tropical plant interests, Dai cultural context, distinctive food and a well-chosen hotel, rather than assuming every rainforest image or village attraction lies nearby. The Xishuangbanna Tropical Botanical Garden is at Menglun in Mengla County, a separate journey from central Jinghong. A good stay balances one substantial outing at a time with meals, shade and space to enjoy the property.",
    stayAnswer:
      "Four nights provide three full days: enough for a selected city-and-culture introduction, a botanical-garden day and time at the hotel. Five nights allow another distinct subject or a slower rhythm without daily long drives. Three nights can work when the plan has a clear priority and convenient transport. A split stay near Menglun can make sense for a serious botanical interest, but the extra check-in should improve access or the experience, not simply add a second hotel name.",
    hotelAnswer:
      "Choose a specific Jinghong base for city meals and selected cultural visits, the Gaozhuang area for a livelier visitor district, a property-led resort for grounds and downtime, or a Menglun-area stay when the botanical garden is central to the trip. Check the exact address, room noise, air conditioning, pool seasonality, food and road access. A tropical resort may be far from the places you want to visit. A night-market location is not automatically a quiet retreat, and a forest-themed property does not establish access to protected woodland.",
    sightseeingQuestion: "Should you stay in Jinghong or near Menglun's botanical garden?",
    sightseeingAnswer:
      "Stay in Jinghong when varied dining, city culture and one selected garden outing suit the holiday. Consider Menglun when you want more time for plants and a nearby property that justifies the move. The garden has different sections and routes; a broad collection visit and a more demanding eastern-area walk are not the same day. Check the current layout, transport and walking before choosing. For a short break, one base with a focused outing can be better than two brief stays dominated by packing and transfers.",
    visitorResources: [
      {
        label: "Xishuangbanna prefecture government",
        href: "https://www.xsbn.gov.cn/",
        scope:
          "Regional public information and administrative context, mainly in Chinese. Confirm current religious-site access, public events, road notices and village visitor arrangements through the relevant authority or venue. Regional promotion does not establish private cultural hosts or a particular hotel's facilities.",
      },
      {
        label: "Xishuangbanna Tropical Botanical Garden, Chinese Academy of Sciences",
        href: "https://english.xtbg.cas.cn/",
        scope:
          "Institutional background for the botanical garden and its scientific work. Check current visitor routes, collection access, opening arrangements and any public interpretation separately. A visitor ticket does not include research access, a scientist meeting or every forest route.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Check the exact service and station, then the road journey to Jinghong, Menglun or the chosen resort. Domestic rail availability does not establish eligibility for a cross-border journey on the wider China-Laos corridor.",
      },
    ],
    serviceScope:
      "A tailored stay can identify the hotel and room, exact airport or station transfer, selected garden route, city visits, guiding and meals. Name any required internal visitor transport and admissions. Specialist plant interpretation, village hosts, classes, spa services, family activities and evening events require separate availability and terms. Private guiding does not open research collections, religious interiors or households. Share plant interests, heat tolerance, mobility, children's ages and desired downtime before choosing the base and daily schedule.",
    routeAdvice:
      "Xishuangbanna can connect through Kunming or combine with a carefully defined Pu'er chapter when transport and useful nights support both. Pu'er's Simao city and Jingmai Mountain create different onward journeys. Mangshi offers another western Yunnan cultural and food interest, but it is not a nearby Banna day trip. No matching published Xishuangbanna product is recommended here. Use the illustrative four-night outline to request a tailored stay with one clear purpose per day and named accommodation rather than a package of every tropical attraction.",
    practicalPlanning: {
      timing:
        "Plan outdoor walking around the weather, shade, venue hours and the group's energy. A botanical-garden day needs the complete drive, local transport where used, time to look and a proper meal. Keep an easier afternoon or another slower day instead of placing a long evening outing after every excursion. Night markets can be an optional evening interest, not a compulsory late finish before an early road departure.",
      walking:
        "Garden paths, forest sections, temple steps and resort grounds create different walking demands. Choose the specific route, distance, gradient and resting points rather than promising an effortless tropical stroll. Heat and humidity can make a modest route tiring. A buggy or shuttle, where operating, does not reach every collection or remove all steps. Check room-to-restaurant and room-to-pool distances, particularly in a large hillside property.",
      cost: "Compare the quoted room, occupancy, breakfast, meals and cancellation terms alongside the complete transfers and touring days. Garden admission, internal transport, specialist interpretation, performances and children's sessions may be separate. A resort benefit can depend on room category, date or age. Paying more should improve sleep, food, facilities or the quality of explanation, not merely buy a busier schedule or an unsupported promise of private rainforest access.",
    },
    attractions: [
      "Xishuangbanna Tropical Botanical Garden at Menglun, on a selected visitor route",
      "Jinghong city and a thoughtfully chosen local food interest",
      "Manting Park and the separate nearby Zongfo Buddhist site, with their different purposes respected",
      "Gaozhuang Xishuangjing as a contemporary visitor and evening district",
      "A named resort with time to enjoy its grounds and usable facilities",
      "A consenting village or specialist plant encounter when appropriately arranged",
    ],
    stays: [
      {
        label: "3 nights: a focused short stay",
        advice:
          "Use one base and two full days for the strongest interests. Choose between a garden-led visit, a city-and-culture introduction and substantial hotel downtime rather than promising all of them comprehensively. Convenient arrival and departure make a significant difference to usable time.",
      },
      {
        label: "4 nights: a balanced first visit",
        advice:
          "Three full days allow a cultural or city subject, a separate botanical outing and a slower day. This is a useful starting point for combining learning with tropical hotel time. Keep additional attractions optional and review whether the garden transfer suits the chosen base.",
      },
      {
        label: "5 nights or more: depth without daily transfers",
        advice:
          "Add a distinct interest, a properly arranged host or more time at the property. A Menglun split stay can serve a serious plant interest when the accommodation and route justify moving. Extra nights do not require stacking several commercial forest or village attractions with similar content.",
      },
    ],
    hotelAreas: [
      {
        name: "Jinghong city, selected by exact neighborhood",
        advice:
          "Consider for varied meals and selected city visits. Check the street, room quietness, pickup point and practical evening route. A riverside label does not establish a peaceful room or the same view in every category. A city base can work well when you want one substantial outing and relaxed meals rather than a secluded resort holiday.",
      },
      {
        name: "Gaozhuang Xishuangjing",
        advice:
          "Choose knowingly for a visitor district with evening activity, shops and food options. It is a contemporary tourism setting, not an intact ancient town. Confirm soundproofing, room position, vehicle access and how late nearby activity continues. Guests seeking early nights or seclusion may prefer a different specific property.",
      },
      {
        name: "A property-led resort outside the busiest visitor lanes",
        advice:
          "Choose the room, grounds, dining and facilities first, then assess the drive to planned outings. Check pool operation, shade, indoor comfort, family benefits and walking within the property. A resort name does not answer whether a garden day requires a long transfer. Make sure there is enough unscheduled time to use the features you are paying for.",
      },
      {
        name: "Menglun and the botanical-garden area",
        advice:
          "A distinct base when plants are the main purpose and a suitable property is available. Confirm the entrance relationship, route to meals and the exact room rather than assuming a garden-area address includes admission or after-hours access. A scientific institution nearby does not make the hotel a research-hosted experience.",
      },
    ],
    tradeoffs: [
      {
        title: "A botanical garden is not the same as a wild rainforest excursion",
        advice:
          "The garden combines curated plant collections and different landscape sections. Choose a visitor route for what you want to learn, with accurate identification and manageable walking. A protected forest excursion elsewhere has different rules, terrain and interpretation. Neither should be sold through a vague jungle promise. Specialist knowledge, research access and after-dark activities need individual confirmation rather than being inferred from an admission ticket.",
      },
      {
        title: "Separate a park visit, a monastery and a cultural performance",
        advice:
          "Manting Park, the nearby Zongfo religious setting and an evening show offer different experiences with separate access and purposes. Public entertainment is not the same as participating in religious life or meeting a household. Agree what the visit is intended to explain, dress appropriately at religious sites and respect photography instructions. A private tour does not guarantee access to ceremonies or normally closed spaces.",
      },
      {
        title: "A village encounter needs more than a destination label",
        advice:
          "Xishuangbanna contains diverse communities and places, not one uniform traditional village experience. Identify the venue, participants, topic, consent and language support. A public village route, commercial attraction, cooking session and home invitation are different arrangements. If the right host is unavailable, a thoughtful museum, temple or food interest can be more valuable than a staged claim of exclusive authenticity.",
      },
      {
        title: "Let the weather influence both hotel and touring choices",
        advice:
          "The cooler, drier part of the year is often considered for a first visit, but conditions still vary. Hot periods make shade, breaks and room cooling important; wetter conditions can affect paths and roads. A tropical address does not guarantee a warm usable pool in every season. Imagine a wet afternoon indoors and check seating, meals and suitable facilities before paying a resort premium.",
      },
      {
        title: "Wildlife is not a guaranteed interaction",
        advice:
          "A landscape visit does not promise a wild elephant sighting or access to animals. If a wildlife-related venue is proposed, ask what the visit actually involves and distinguish observation, a managed attraction and direct interaction. Do not present a performance or hands-on activity as conservation merely because animals are involved. Choose experiences for their real educational value and current arrangements, not a guaranteed photograph.",
      },
      {
        title: "Cross-border proximity is not cross-border eligibility",
        advice:
          "The regional railway and map can make Laos appear like a simple extra stop, but international travel requires the right documents, tickets, entry arrangements and service handover. A domestic Xishuangbanna itinerary does not include those automatically. Review any cross-border chapter separately for the traveler's passport and full route, and do not let an unconfirmed extension disrupt a well-paced stay in southern Yunnan.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "puer",
        advice:
          "Pu'er adds a focused tea or coffee subject when the host, base and transport fit. Decide whether you mean Simao city or a separate Jingmai Mountain stay before selecting the connection. They are different journeys, and a train to Pu'er does not place you at every tea forest in the prefecture.",
      },
      {
        slug: "kunming",
        advice:
          "Kunming provides a different city and climate setting, with Green Lake, regional food or a separate Stone Forest outing. Compare the actual rail or flight service and both hotel transfers. A connection through the capital does not require several nights unless those interests improve the trip.",
      },
      {
        slug: "mangshi",
        advice:
          "Mangshi offers a separate Dehong city chapter with Buddhist architecture and a different food setting. It is in western Yunnan, not a nearby day trip from Jinghong. Compare the complete transport and give each place its own reason and useful nights rather than grouping them under a generic tropical-culture label.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler, drier part of the year is a common starting point for combining plants, culture and hotel downtime. Hot spells still need an easier outdoor pace, and the wetter season requires flexibility for rain and slippery routes. A botanical collection changes through the year, so a particular flowering or fruiting display should be checked rather than guaranteed. Water-splashing festival dates and public celebrations need current confirmation; attending a festival, seeing a commercial show and visiting a household are different experiences.",
    orientation:
      "Xishuangbanna is a prefecture, Jinghong its main city, and Menglun a separate place in Mengla County. Gaozhuang, central Jinghong, an outer-city resort and the botanical-garden area create different overnight plans. The Lancang River through the region is part of the river system known downstream as the Mekong, but a river view does not establish a boat itinerary or international connection. Use Chinese property addresses and exact visitor sites when comparing road journeys.",
    experiences: [
      "Explore a selected botanical route with time for plant interpretation, shade and a comfortable pace",
      "Understand a specific Dai cultural or religious subject through a respectful public visit or confirmed host",
      "Enjoy regional food and a suitable tropical property with genuinely usable downtime",
    ],
    planningNotes: [
      "Distinguish Jinghong city, the wider prefecture, Menglun and the chosen resort before booking",
      "Review heat, humidity, route surfaces and room-to-facility distances rather than relying on tropical imagery",
      "Keep cultural hosts, evening shows, wildlife activities and cross-border travel separate from assumed inclusions",
    ],
    arrival:
      "Xishuangbanna Gasa Airport uses code JHG and serves the Jinghong area. Xishuangbanna railway station creates a different transfer; other stations along the corridor may serve different parts of the region. Choose by the final hotel address and complete journey, not the prefecture name alone. Send the ticket, luggage and any child-seat or mobility needs before arranging pickup. A domestic arrival does not include a cross-border service or establish permission to continue into another country.",
    gettingAround:
      "Plan a vehicle for the botanical outing or other substantial excursion, with start time, meals and finish agreed. Central city days may use a different balance of walking and local transport. Garden shuttles and resort buggies have their own routes and hours. Keep a shorter alternative available in heat or rain, and avoid pairing a full garden day with another distant attraction just because both are advertised as being in Xishuangbanna.",
    stayStrategy:
      "For four or five nights, start with one strong base and a realistic daily rhythm. Add a Menglun stay only when it meaningfully improves a plant-focused visit. Check the exact room, air conditioning, bathroom, shade, dining, pool operation and noise. For families, confirm beds, ages, supervision and activity charges; for couples, check privacy and the position of shared spaces. A resort should provide time and comfort you actually use rather than become an expensive overnight between long drives.",
    firstTimerNote:
      "Choose the main reason to come: plants, a cultural introduction or a relaxing property stay. Let the other interests support it. A botanical day, a considered public cultural visit and an unhurried hotel day can make a stronger first trip than a series of similar commercial attractions. The destination's depth comes from clear interpretation and a suitable pace, not from promising an untouched jungle or access to every village.",
    faqs: [
      {
        question: "Is Xishuangbanna the same as Jinghong?",
        answer:
          "No. Xishuangbanna is a Dai autonomous prefecture; Jinghong is its main city. Menglun's botanical garden and other county-level destinations require separate road planning. A hotel labeled Xishuangbanna does not establish proximity to every attraction.",
      },
      {
        question: "How many nights should I stay in Xishuangbanna?",
        answer:
          "Four nights give three full days for a selected cultural introduction, a separate botanical outing and hotel time. Five nights allow a slower rhythm or another distinct subject. Three nights work best with a focused plan and convenient transport rather than an attempt to cover every advertised attraction.",
      },
      {
        question: "Should I stay in Jinghong or Menglun?",
        answer:
          "Choose Jinghong for city meals and culture with a selected garden outing. Consider Menglun when the botanical garden is the main purpose and a nearby property justifies moving. Check the complete transfer, garden route, accommodation and meal options rather than assuming both bases offer the same stay.",
      },
      {
        question: "Is Gaozhuang an ancient town?",
        answer:
          "It is a contemporary visitor district with evening activity, shops and food options, not an intact ancient town. It can suit guests who enjoy that atmosphere. Check room noise, access and the actual late-evening environment before choosing it for a quiet resort holiday.",
      },
      {
        question: "Is the botanical garden an easy walk?",
        answer:
          "It depends on the section and route. Curated collection paths and more demanding eastern-area routes have different surfaces and gradients. Heat and humidity add to the effort. Review distance, shade, steps, resting points and current visitor transport for the individual traveler.",
      },
      {
        question: "Can I meet a Dai family or join a ceremony?",
        answer:
          "Only with a specific appropriate arrangement and consent. A public village visit, commercial performance, cooking session and private home invitation are different experiences. A guide and vehicle do not automatically provide access to households or religious activity.",
      },
      {
        question: "Can I combine Xishuangbanna with Pu'er?",
        answer:
          "Yes, when the selected base, host and complete transport support both. Pu'er's Simao city and Jingmai Mountain create different onward plans. Specify the actual place and preserve useful nights instead of assuming every tea-country destination is a nearby extension from Jinghong.",
      },
      {
        question: "Does a Xishuangbanna trip include travel to Laos?",
        answer:
          "No. Cross-border travel needs separately confirmed documents, tickets, entry arrangements and services for the traveler's passport and full route. The domestic railway corridor and geographic proximity do not establish eligibility or an included international extension.",
      },
    ],
    culturalStory: {
      title: "Give living culture a specific subject and a respectful setting",
      paragraphs: [
        "Dai cultural life is an important part of Xishuangbanna, but the prefecture contains different communities, places and contemporary ways of living. A Buddhist site, a public village route and a city meal each offer a different perspective. Choose what can be clearly explained without making people into a performance. Architecture, religious practice and food become more meaningful when connected to a particular place rather than presented as a single exotic atmosphere.",
        "A commercial show can be enjoyable when it is described honestly as entertainment. It does not substitute for religious participation or a consenting conversation with a resident. Festival celebrations, household visits and special hosts need their own arrangements. Respect current access, photography and dress instructions at religious sites, and let a modest public visit remain worthwhile without a claim of private access or an exclusive authentic encounter.",
      ],
    },
    foodStory: {
      title: "Build a regional meal around flavor and clear preparation",
      paragraphs: [
        "A selected Dai-style meal can introduce herbs, sour and spicy flavors, grilled preparations, rice and vegetables, with dishes explained rather than ordered as a generic banquet. Pineapple rice and other visitor favorites are choices, not proof that every table represents the same tradition. Ask about portions, spice, fish, meat stocks and sauces. A market walk can help explain ingredients, while a comfortable seated meal gives the group time to enjoy them.",
        "Night-market browsing, a restaurant dinner and a hosted cooking session have different hygiene, seating and dietary arrangements. Discuss allergies and shared preparation, and do not assume an apparently vegetable dish is free of fish sauce, meat stock or other ingredients. For resort days, check dinner choices and service times so a remote setting does not force another evening drive. Good food planning adds local character while keeping the holiday comfortable.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen base and settle into the climate",
        description:
          "Transfer from the exact airport or station to the booked property. Keep dinner simple and any nearby walk optional. A late arrival should not carry a compulsory night-market visit or be counted as a full resort day.",
      },
      {
        day: "Full day 1",
        title: "A city and cultural introduction",
        description:
          "Choose a coherent Jinghong route with one cultural subject and a regional meal. Separate park, religious and entertainment visits, respecting current access. Leave shade, seated breaks and time at the hotel rather than filling every hour outdoors.",
      },
      {
        day: "Full day 2",
        title: "A botanical day with a defined route",
        description:
          "Allow the complete Menglun journey and the agreed garden sections, with suitable interpretation, walking and local transport. Choose the route for the group's interests and energy. Do not attach another distant forest attraction automatically to a substantial garden visit.",
      },
      {
        day: "Full day 3",
        title: "Use the property or add one genuinely different interest",
        description:
          "Enjoy hotel downtime, a shorter food or cultural subject, or a confirmed host when available. Adjust to weather and energy. A fifth night can add flexibility or a distinct topic without turning every morning into another long transfer.",
      },
      {
        day: "Departure",
        title: "Continue with the domestic or separately agreed onward plan",
        description:
          "Allow the final hotel-to-gateway journey and the ticketed service. Pu'er, Kunming or another destination needs its own complete connection. This four-night outline is illustrative, not a published product or promise of optional hosts, wildlife activities or cross-border services.",
      },
    ],
  },
};
