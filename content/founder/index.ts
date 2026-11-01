/**
 * 创始人来信的单一内容源。
 * 输入：无。输出：姓名、职务、来信分段与金句，供 /about/founder 与 About 页入口使用。
 * 关键规则：正文是创始人本人的原文，改动需经本人确认；这里不放任何未经核实的履历。
 */
export const founder = {
  name: "Guohui Shi",
  jobTitle: "Founder",
  organization: "AVIORA CHINA",
  tagline: "Private & Tailor-Made Journeys Across China",
  path: "/about/founder",
  pullQuote: "Discovering China should be an experience to remember, not a journey to navigate.",
  closingLine: "Your journey. Your interests. Your own way of discovering China.",
  intro: [
    "My name is Guohui Shi, and I founded AVIORA CHINA with a simple belief: discovering China should be an experience to remember, not a journey to navigate.",
    "China is my home. It is a country I know not only through its famous landmarks, but through its history, culture, everyday life, and the remarkable diversity of its people and places.",
    "Over the years, I have come to appreciate something about international travel: visiting a country and truly experiencing it are two very different things.",
    "For many international visitors, planning a trip to China can be challenging. The language, transportation, distances between destinations, and unfamiliar travel arrangements can make even an exciting journey feel complicated.",
    "I wanted to offer something better.",
  ],
  sections: [
    {
      title: "A Different Way to Experience China",
      paragraphs: [
        "I believe travel should be personal.",
        "A family travelling with children has different needs from a couple celebrating an anniversary. Someone discovering China for the first time may want to explore its iconic landmarks, while a returning visitor may be looking for quieter places and deeper cultural experiences.",
        "A fixed itinerary cannot always accommodate these differences.",
        "That is why AVIORA CHINA focuses on private, tailor-made journeys.",
        "We take the time to understand each traveller's interests, expectations, pace, and priorities before putting a journey together.",
        "From private guides and dedicated drivers to hotel arrangements and carefully selected experiences, every detail should serve a purpose: making your time in China more comfortable, meaningful, and enjoyable.",
      ],
    },
    {
      title: "Hospitality Is in the Details",
      paragraphs: [
        "I have always believed that a good travel experience is about more than visiting beautiful places.",
        "It is also about knowing that someone is taking care of the details.",
        "A knowledgeable guide who brings history to life. A driver who understands the importance of punctuality. A thoughtfully planned route that avoids unnecessary rushing. Clear communication when plans need to change.",
        "These things may not always appear in a photograph, but they make a real difference to a journey.",
        "At AVIORA CHINA, we believe that genuine hospitality is demonstrated through the little things, especially when our guests are far from home.",
      ],
    },
    {
      title: "Bringing China Closer to the World",
      paragraphs: [
        "China has so much to offer, and no two journeys need to be the same.",
        "From the imperial heritage of Beijing and Xi'an to the landscapes of Guilin, the energy of Shanghai, the food culture of Chengdu, and the extraordinary scenery of China's western regions, every destination offers a different perspective on the country.",
        "My goal is to help international travellers discover these places with confidence, curiosity, and a genuine connection to China.",
        "We are not here simply to fill your itinerary with attractions.",
        "We are here to help you experience China in a way that feels right for you.",
      ],
    },
  ],
  welcome: "Welcome to AVIORA CHINA.",
} as const;
