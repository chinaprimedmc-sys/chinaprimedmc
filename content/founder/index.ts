/**
 * 创始人来信的单一内容源。
 * 输入：无。输出：姓名、职务、来信分段与金句，供 /about/founder 与 About 页入口使用。
 * 网站公开的编辑版创始人来信。内容以已确认的品牌事实和创始人理念为依据，不添加未经核实的个人履历或轶事。
 */
export const founder = {
  name: "Guohui Shi",
  jobTitle: "Founder",
  organization: "AVIORA China Travel",
  tagline: "Private & Tailor-Made Journeys Across China",
  path: "/about/founder",
  photo: {
    src: "/company/founder-chongqing-travel-agents-2026.webp",
    alt: "Founder photograph supplied by AVIORA, with two attendees in front of the 2026 Chongqing International Travel Agents Matchmaking Session backdrop",
    width: 1024,
    height: 1536,
    caption:
      "2026 Chongqing International Travel Agents Matchmaking Session · Chongqing, China · April 26, 2026",
  },
  pullQuote: "Discovering China should be an experience to remember, not a journey to navigate.",
  closingLine: "Your journey. Your interests. Your own way of discovering China.",
  intro: [
    "My name is Guohui Shi. I founded AVIORA because I believe discovering China should feel like an experience you remember, not a puzzle you have to solve along the way.",
    "China is home to me. It is also a country too varied to be understood through a checklist alone: imperial capitals and contemporary cities, celebrated landscapes and neighborhood streets, regional food traditions and the ordinary rhythms of daily life. Every place has more than one story, and every traveler notices something different.",
    "For a visitor coming from abroad, the distance between wanting to see China and feeling ready to travel here can be significant. You may be comparing cities without knowing how long the journeys between them really take. You may be wondering how a station works, what to do when a plan changes, or whether the details you care about will be understood.",
    "These are practical questions, but they shape the whole experience. I wanted to build a travel company that would take them seriously, so our guests could spend less of their attention navigating arrangements and more of it discovering the country.",
  ],
  sections: [
    {
      id: "personal-travel",
      title: "Why I Believe Travel Should Be Personal",
      paragraphs: [
        "A journey belongs to the people taking it. A family with children may need fewer hotel changes and a gentler start to the morning. A couple may want quiet time as much as a full day of sightseeing. A traveler returning to China may be less interested in repeating the famous stops than in understanding a place more deeply.",
        "Those are not small differences to work around after an itinerary has already been fixed. They are the starting point. We ask what you are curious about, how you like to travel, what would make you comfortable and what you would rather leave out. From there, we can decide which places belong together, how long to stay and where a private guide, driver or local experience would add value.",
        "A tailor-made journey should not mean adding more to every day. Sometimes the thoughtful choice is to remove a city, allow more time between visits or choose a hotel that makes the next morning easier. The route has to work in real life, not only look appealing on a map.",
        "That is why AVIORA focuses on private travel. Your priorities shape the plan, and the proposed arrangements are set out for you to review before you decide to book.",
      ],
    },
    {
      id: "hospitality",
      title: "What Good Hospitality Looks Like to Me",
      paragraphs: [
        "Hospitality is often described as a feeling. In travel, that feeling comes from things people have taken the time to get right.",
        "It is a guide who understands what you are interested in, rather than delivering the same explanation to every group. It is a driver who knows the meeting point and the day’s timing. It is a realistic schedule that leaves room for a meal, a rest or an unexpected delay. It is someone explaining the available options when the original plan is no longer practical.",
        "None of these details is spectacular on its own. Together, they can change how it feels to be far from home. They are also the details we can take responsibility for discussing clearly: what is included, what depends on availability, what a request will cost and what alternatives exist.",
        "For me, genuine care does not mean promising that nothing will ever change. It means being prepared, communicating honestly and helping find the next workable step when it does.",
      ],
    },
    {
      id: "discovering-china",
      title: "A More Open Door to China",
      paragraphs: [
        "I hope visitors will see more than the images they already know. Beijing and Xi’an hold layers of imperial history. Shanghai tells a different story of trade and change. Guilin opens onto a landscape shaped by water and limestone. Chengdu invites you to slow down over food and local life. Farther west, the scale of the scenery can make a journey feel entirely different again.",
        "There is no single right way to experience these places. The right journey depends on the time you have, the people traveling with you and what you want to understand. It should respect the places and communities you visit, while giving you the context to appreciate what makes each one distinct.",
        "Our team is based in China, and our work is to connect that local coordination with the questions and expectations international travelers bring with them. We arrange private journeys, day tours and local services through our registered China travel company, with the agreed scope explained in writing before you book.",
        "I founded AVIORA with the hope that more people would feel comfortable saying yes to China, even if they do not yet know exactly how to plan it. If we have done our work well, you will return home with more than photographs. You will have a clearer sense of the place, the people and the moments that made the journey yours.",
      ],
    },
    {
      id: "before-you-begin",
      title: "A Note Before You Begin",
      paragraphs: [
        "Every inquiry starts with a conversation, not an obligation. Tell us what you are considering, what matters to you and what you are unsure about. We will help you explore the practical possibilities, explain what needs to be confirmed and prepare a proposal you can consider in your own time.",
        "Thank you for considering a journey here. I hope we have the opportunity to welcome you to China.",
      ],
    },
  ],
  welcome: "Welcome to AVIORA China Travel.",
} as const;
