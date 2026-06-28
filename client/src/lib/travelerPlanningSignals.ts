export type PlanningSignalLanguage = "English" | "Deutsch" | "Francais" | "Italiano";

export interface TravelerPlanningSignal {
  id: string;
  language: PlanningSignalLanguage;
  journeyId: string;
  journeyTitle: string;
  travelerProfile: string;
  concern: string;
  planningResponse: string;
}

export const planningSignalLanguages: Array<"All" | PlanningSignalLanguage> = ["All", "English", "Deutsch", "Francais", "Italiano"];

const englishSignals: TravelerPlanningSignal[] = [
  ["classic-china-first-trip-8-day", "8-Day Classic China First Trip", "First-time China travelers", "Will China feel too complicated for a first visit?", "This route keeps the story clear: imperial Beijing, ancient Xi'an, and modern Shanghai, with private guides translating the culture and the logistics."],
  ["beijing-great-wall-gubei-private-5-day", "5-Day Beijing, Great Wall & Gubei Private Escape", "Couples on a short private trip", "Can a short China trip still feel special?", "The overnight near the Great Wall gives the journey an atmospheric pause instead of turning Beijing into a compressed sightseeing checklist."],
  ["family-theme-park-china-10-day", "10-Day Family China with Theme Parks, Pandas & Big Cities", "Families traveling with children", "Will the children stay excited after the first few monuments?", "The route blends pandas, theme parks, big-city moments, and private touring so children have their own reasons to love China."],
  ["senior-friendly-classic-china-12-day", "12-Day Senior-Friendly Classic China", "Older parents and adult children", "Will the trip be too tiring for older parents?", "The pacing protects comfort with shorter walking blocks, stronger hotel locations, private transfers, and fewer rushed transitions."],
  ["yangtze-river-classic-china-13-day", "13-Day Classic China & Yangtze River Private Journey", "Travelers wanting slower scenic days", "Can a longer China route include time to breathe?", "The Yangtze cruise section gives the itinerary a slower middle chapter after the major city and heritage days."],
  ["east-china-gardens-huangshan-9-day", "9-Day Shanghai, Hangzhou, Suzhou & Huangshan Scenic Trip", "Garden, design, and mountain travelers", "Is East China only about Shanghai?", "Shanghai opens the route, but Suzhou gardens, Hangzhou lake culture, and Huangshan peaks give it elegance and visual depth."],
  ["south-china-guilin-yangshuo-6-day", "6-Day Guangzhou, Guilin & Yangshuo Scenic Trip", "Food and landscape travelers", "Can South China combine food, city energy, and scenery?", "Guangzhou brings culinary confidence, while Guilin and Yangshuo deliver the river landscapes many travelers imagine before arriving."],
  ["chengdu-chongqing-pandas-food-5-day", "5-Day Chengdu & Chongqing Food, Pandas and City Lights", "Food and city travelers", "Will this feel different from the classic Beijing-Xi'an-Shanghai route?", "Chengdu and Chongqing show a more contemporary, flavorful, and cinematic side of China with pandas, hotpot, teahouses, and night views."],
  ["jiuzhaigou-chengdu-chongqing-family-6-day", "6-Day Chongqing, Jiuzhaigou & Chengdu Family Nature Trip", "Families who want nature without losing comfort", "Can we add major scenery without making the trip too hard?", "The route balances Chongqing city energy, Jiuzhaigou's lakes, and Chengdu's softer finish so the nature chapter feels rewarding, not punishing."],
  ["zhangjiajie-fenghuang-private-5-day", "5-Day Zhangjiajie & Fenghuang Avatar Mountains Trip", "Nature-first travelers", "Is Zhangjiajie worth building a trip around?", "The sandstone peaks create the wow moment, while Fenghuang adds a gentler old-town chapter so the route has contrast."],
  ["women-scenic-china-11-day", "11-Day Women-Friendly Beijing, Zhangjiajie, Hangzhou & Shanghai", "Women-friendly private travel", "Can the trip feel independent but still supported?", "Private guides, beautiful neighborhoods, softer evening choices, and careful hotel locations keep the journey graceful without over-managing it."],
  ["female-culture-lifestyle-10-day", "10-Day Women-Friendly Culture, Food & Lifestyle China", "Culture-focused women travelers", "Can a China trip feel stylish rather than heavy?", "This route favors walkable culture, food, teahouse moments, refined districts, and private support over exhausting monument stacking."],
  ["muslim-friendly-classic-china-8-day", "8-Day Muslim-Friendly Beijing, Xi'an & Shanghai", "Muslim families visiting China", "Will halal-aware meal planning be handled seriously?", "The route builds realistic restaurant planning, mosque-aware timing where practical, and Xi'an's Muslim heritage into the trip from the start."],
  ["silk-road-gansu-ningxia-8-day", "8-Day Gansu & Ningxia Silk Road Desert Trip", "Culture and desert travelers", "Can the Silk Road feel vivid rather than academic?", "Desert light, grottoes, Yellow River culture, and northwest food give the route a cinematic story travelers can feel."],
  ["xinjiang-xian-silk-road-14-day", "14-Day Xinjiang, Gansu & Xi'an Silk Road Journey", "History and Silk Road travelers", "How do we make a long Silk Road route make sense?", "Starting in Xi'an and moving west turns the journey into a readable narrative from ancient capital to oasis cultures."],
  ["southern-xinjiang-private-9-day", "9-Day Southern Xinjiang Pamir & Kashgar Trip", "Muslim-friendly private travelers", "Will Xinjiang feel remote or difficult to understand?", "Kashgar, Pamir scenery, bazaars, and private guide context make the region feel human, layered, and easier to navigate."],
  ["yunnan-shangri-la-meili-8-day", "8-Day Yunnan, Shangri-La & Meili Snow Mountain", "Mountain and culture travelers", "Can Yunnan feel premium without becoming overbuilt?", "Dali, Shangri-La, monasteries, and snow mountains create a spacious highland route with atmosphere and restraint."],
  ["southwest-grand-china-14-day", "14-Day Southwest China, Yangtze & Zhangjiajie Grand Trip", "Longer private China vacations", "Can a big China trip have variety without feeling chaotic?", "The itinerary uses a clear sequence of city, mountain, river, and southwest landscapes so the ambition feels controlled."],
  ["guizhou-ethnic-karst-6-day", "6-Day Guizhou Villages, Waterfalls & Karst Trip", "Repeat travelers and photographers", "Where should repeat travelers go beyond the obvious icons?", "Guizhou answers with villages, waterfalls, karst scenery, and living culture that feel less expected than standard first-trip routes."],
  ["inner-mongolia-culture-5-day", "5-Day Inner Mongolia Grassland & Hohhot Culture", "Families wanting open landscapes", "Can China include wide-open landscapes without a hard expedition?", "Hohhot culture and grassland days add space, summer air, and contrast after more urban China chapters."],
  ["hulunbuir-arxan-8-day", "8-Day Hulunbuir Grassland, Ergun & Arxan Nature Trip", "Summer nature travelers", "Where can families find a calm summer route in China?", "Hulunbuir and Arxan create a green, open, seasonal journey with nature as the main rhythm."],
  ["tibet-lhasa-nyingchi-8-day", "8-Day Tibet Lhasa, Namtso & Nyingchi Private Journey", "Highland travelers", "How do we approach Tibet without rushing altitude?", "The route gives altitude, permits, pacing, and scenic transitions the respect they need before adding more activity."],
  ["sichuan-tibetan-nature-10-day", "10-Day Sichuan Tibetan Nature, Pandas & Jiuzhaigou", "Families and nature lovers", "Can pandas be part of a deeper nature trip?", "Chengdu gives the emotional panda moment, while Jiuzhaigou, Huanglong, and Tibetan-edge landscapes make the trip much larger."],
  ["women-beijing-xian-shanghai-11-day", "11-Day Women-Friendly Beijing, Xi'an, Suzhou & Shanghai", "Women-friendly classic China travel", "Can a classic route feel softer and more personal?", "The route adds gardens, walkable districts, private guide support, and better-paced evenings to the famous Beijing-Xi'an-Shanghai spine."],
  ["luxury-east-yunnan-12-day", "12-Day Luxury East China & Yunnan Private Journey", "Luxury scenery and culture travelers", "Can one trip combine polish and wild scenery?", "East China's elegance and Yunnan's highland atmosphere create a route that feels curated rather than simply long."],
  ["family-nature-china-10-day", "10-Day Family Nature China with Pandas, Zhangjiajie & Guilin", "Soft-adventure families", "Can big landscapes work for mixed ages?", "The itinerary keeps the scenery dramatic while using private transfers, realistic timing, and varied days to keep family energy intact."],
  ["senior-east-china-relaxed-7-day", "7-Day Senior-Friendly Shanghai, Suzhou & Hangzhou", "Senior-friendly East China travel", "Can East China be beautiful without too many hotel changes?", "Shanghai, Suzhou, and Hangzhou keep distances short while still offering gardens, lake culture, food, and elegant city life."],
  ["muslim-silk-road-deep-12-day", "12-Day Muslim-Friendly Silk Road: Xi'an, Gansu & Xinjiang", "Muslim-friendly Silk Road travelers", "Can Muslim-friendly travel feel like the main story, not a workaround?", "The route places Muslim heritage, Silk Road history, meal planning, and mosque-aware context near the center of the journey."],
  ["guangzhou-hong-kong-guilin-family-8-day", "8-Day Guangzhou, Guilin, Yangshuo & Pearl River Family Trip", "Families entering through South China", "Can a South China family trip avoid too much complexity?", "Guangzhou, the Pearl River region, and Guilin scenery give families a warm, visual route with manageable transitions."],
  ["beijing-inner-mongolia-summer-8-day", "8-Day Beijing & Inner Mongolia Summer Family Trip", "Summer family travelers", "Can we pair the Great Wall with something children will feel?", "Beijing provides the icons, while Inner Mongolia gives open grassland, summer space, and a completely different memory of China."],
].map(([journeyId, journeyTitle, travelerProfile, concern, planningResponse], index) => ({
  id: `en-${String(index + 1).padStart(2, "0")}`,
  language: "English",
  journeyId,
  journeyTitle,
  travelerProfile,
  concern,
  planningResponse,
}));

const germanSignals: TravelerPlanningSignal[] = [
  ["classic-china-first-trip-8-day", "8-Day Classic China First Trip", "Erstreisende nach China", "Wirkt China beim ersten Mal zu kompliziert?", "Die Route ordnet Peking, Xi'an und Shanghai so, dass Kultur, Transfers und Tagesrhythmus leichter verstaendlich werden."],
  ["family-theme-park-china-10-day", "10-Day Family China with Theme Parks, Pandas & Big Cities", "Familien mit Kindern", "Bleiben Kinder nach den ersten Sehenswuerdigkeiten interessiert?", "Pandas, Themenparks, Grossstaedte und private Fuehrung geben Kindern eigene Hoehepunkte, ohne die Eltern auf Kultur verzichten zu lassen."],
  ["senior-friendly-classic-china-12-day", "12-Day Senior-Friendly Classic China", "Reisen mit aelteren Eltern", "Ist die Reise fuer aeltere Eltern zu anstrengend?", "Kuerzere Gehzeiten, gute Hotelstandorte, private Transfers und weniger Eile machen die klassischen Orte deutlich angenehmer."],
  ["silk-road-gansu-ningxia-8-day", "8-Day Gansu & Ningxia Silk Road Desert Trip", "Kultur- und Wuesterreisende", "Kann die Seidenstrasse lebendig statt theoretisch wirken?", "Wueste, Grotten, Gelber Fluss und nordwestliche Esskultur machen die Geschichte der Route sichtbar und greifbar."],
  ["yunnan-shangri-la-meili-8-day", "8-Day Yunnan, Shangri-La & Meili Snow Mountain", "Berge und Kultur", "Kann Yunnan hochwertig wirken, ohne ueberladen zu sein?", "Dali, Shangri-La, Kloster und Schneeberge schaffen eine ruhige Hochlandroute mit viel Atmosphaere."],
  ["chengdu-chongqing-pandas-food-5-day", "5-Day Chengdu & Chongqing Food, Pandas and City Lights", "Staedte- und Food-Reisende", "Zeigt diese Route ein anderes China als die Klassiker?", "Chengdu und Chongqing bringen Pandas, Teehaeuser, Hotpot, Nachtlichter und modernes Stadtleben in eine kompakte private Reise."],
  ["east-china-gardens-huangshan-9-day", "9-Day Shanghai, Hangzhou, Suzhou & Huangshan Scenic Trip", "Paare und Designreisende", "Ist Ostchina mehr als Shanghai?", "Shanghai, Suzhou, Hangzhou und Huangshan verbinden Skyline, Gartenkultur, See und Berge zu einer eleganten Route."],
  ["southern-xinjiang-private-9-day", "9-Day Southern Xinjiang Pamir & Kashgar Trip", "Muslimfreundliche Privatreisen", "Fuehlt sich Xinjiang zu abgelegen an?", "Kashgar, Pamir-Landschaften, Basare und private Erklaerung machen die Region naeher, menschlicher und leichter planbar."],
  ["zhangjiajie-fenghuang-private-5-day", "5-Day Zhangjiajie & Fenghuang Avatar Mountains Trip", "Naturreisende", "Ist Zhangjiajie allein eine Reise wert?", "Die Felslandschaft schafft den grossen Wow-Moment, Fenghuang ergaenzt danach eine weichere Altstadt-Atmosphaere."],
  ["south-china-guilin-yangshuo-6-day", "6-Day Guangzhou, Guilin & Yangshuo Scenic Trip", "Landschaft und Kulinarik", "Kann Suedchina Essen, Stadt und Landschaft verbinden?", "Guangzhou liefert kulinarische Energie, Guilin und Yangshuo bringen die ikonischen Flusslandschaften dazu."],
].map(([journeyId, journeyTitle, travelerProfile, concern, planningResponse], index) => ({
  id: `de-${String(index + 1).padStart(2, "0")}`,
  language: "Deutsch",
  journeyId,
  journeyTitle,
  travelerProfile,
  concern,
  planningResponse,
}));

const frenchSignals: TravelerPlanningSignal[] = [
  ["classic-china-first-trip-8-day", "8-Day Classic China First Trip", "Premier voyage en Chine", "La Chine sera-t-elle trop complexe pour une premiere fois?", "Pekin, Xi'an et Shanghai donnent une structure claire, avec des guides prives pour rendre la culture et les deplacements plus simples."],
  ["family-theme-park-china-10-day", "10-Day Family China with Theme Parks, Pandas & Big Cities", "Familles avec enfants", "Les enfants auront-ils envie de suivre tout le voyage?", "Pandas, parcs, grandes villes et activites faciles a comprendre creent un rythme plus naturel pour une famille."],
  ["yangtze-river-classic-china-13-day", "13-Day Classic China & Yangtze River Private Journey", "Voyage lent et panoramique", "Un long voyage peut-il garder des moments calmes?", "La croisiere sur le Yangtze donne une respiration au milieu de l'itineraire apres les villes et les grands sites."],
  ["guizhou-ethnic-karst-6-day", "6-Day Guizhou Villages, Waterfalls & Karst Trip", "Voyageurs curieux", "Ou aller pour voir une Chine moins attendue?", "Le Guizhou apporte villages, cascades, paysages karstiques et culture vivante, avec une sensation plus confidentielle."],
  ["tibet-lhasa-nyingchi-8-day", "8-Day Tibet Lhasa, Namtso & Nyingchi Private Journey", "Hauts plateaux", "Comment eviter de se precipiter en altitude?", "Le rythme prend en compte altitude, permis, transferts et temps d'adaptation avant d'ajouter trop d'activites."],
  ["east-china-gardens-huangshan-9-day", "9-Day Shanghai, Hangzhou, Suzhou & Huangshan Scenic Trip", "Voyage esthetique", "Peut-on avoir une Chine elegante et tres visuelle?", "Shanghai, Suzhou, Hangzhou et Huangshan forment une progression entre ville, jardins, eau et montagnes."],
  ["muslim-friendly-classic-china-8-day", "8-Day Muslim-Friendly Beijing, Xi'an & Shanghai", "Voyageurs musulmans", "Les repas halal-friendly seront-ils anticipes?", "La route integre la planification des repas, le contexte musulman de Xi'an et des notes pratiques avant le depart."],
  ["jiuzhaigou-chengdu-chongqing-family-6-day", "6-Day Chongqing, Jiuzhaigou & Chengdu Family Nature Trip", "Ville et nature", "Peut-on combiner ville spectaculaire et nature sans fatigue excessive?", "Chongqing, Jiuzhaigou et Chengdu creent un contraste fort, avec une fin plus douce pour garder le voyage fluide."],
  ["women-scenic-china-11-day", "11-Day Women-Friendly Beijing, Zhangjiajie, Hangzhou & Shanghai", "Voyage feminin prive", "Peut-on se sentir libre tout en etant accompagnee?", "Guides prives, quartiers agreables, soirees plus douces et bons hotels creent un cadre rassurant sans rigidite."],
  ["sichuan-tibetan-nature-10-day", "10-Day Sichuan Tibetan Nature, Pandas & Jiuzhaigou", "Familles et nature", "Les pandas peuvent-ils faire partie d'un voyage plus profond?", "Chengdu apporte l'emotion des pandas, tandis que Jiuzhaigou et Huanglong donnent une vraie ampleur naturelle."],
].map(([journeyId, journeyTitle, travelerProfile, concern, planningResponse], index) => ({
  id: `fr-${String(index + 1).padStart(2, "0")}`,
  language: "Francais",
  journeyId,
  journeyTitle,
  travelerProfile,
  concern,
  planningResponse,
}));

const italianSignals: TravelerPlanningSignal[] = [
  ["classic-china-first-trip-8-day", "8-Day Classic China First Trip", "Primo viaggio in Cina", "La Cina sara troppo difficile da capire al primo viaggio?", "Pechino, Xi'an e Shanghai raccontano tre anime diverse del Paese con una struttura semplice e guide private."],
  ["beijing-great-wall-gubei-private-5-day", "5-Day Beijing, Great Wall & Gubei Private Escape", "Viaggi brevi privati", "Un viaggio breve puo sembrare comunque speciale?", "La notte vicino alla Grande Muraglia aggiunge atmosfera e trasforma Pechino in un'esperienza piu memorabile."],
  ["family-theme-park-china-10-day", "10-Day Family China with Theme Parks, Pandas & Big Cities", "Famiglie con bambini", "I bambini si annoieranno durante un viaggio culturale?", "Panda, parchi, citta e momenti privati rendono la Cina piu facile da amare anche per i bambini."],
  ["xinjiang-xian-silk-road-14-day", "14-Day Xinjiang, Gansu & Xi'an Silk Road Journey", "Storia e Via della Seta", "Come dare senso a una lunga rotta sulla Via della Seta?", "Partire da Xi'an e muoversi verso ovest crea una narrazione chiara tra capitale antica, deserti e oasi."],
  ["yunnan-shangri-la-meili-8-day", "8-Day Yunnan, Shangri-La & Meili Snow Mountain", "Montagne e cultura", "La Cina puo sembrare ampia, calma e scenografica?", "Dali, Shangri-La, monasteri e montagne innevate danno alla rotta un respiro diverso dai classici itinerari urbani."],
  ["chengdu-chongqing-pandas-food-5-day", "5-Day Chengdu & Chongqing Food, Pandas and City Lights", "Citta e gastronomia", "Dove vedere una Cina urbana e contemporanea?", "Chengdu e Chongqing uniscono panda, cucina, quartieri vivi e luci notturne in un ritmo molto attuale."],
  ["senior-east-china-relaxed-7-day", "7-Day Senior-Friendly Shanghai, Suzhou & Hangzhou", "Viaggi senior in Cina orientale", "Si puo viaggiare in Cina orientale senza troppi cambi hotel?", "Shanghai, Suzhou e Hangzhou tengono le distanze contenute e privilegiano giardini, lago, cibo e comfort."],
  ["zhangjiajie-fenghuang-private-5-day", "5-Day Zhangjiajie & Fenghuang Avatar Mountains Trip", "Paesaggi naturali", "Dove trovare il vero momento wow?", "Zhangjiajie offre una scena naturale quasi irreale, mentre Fenghuang aggiunge un finale piu morbido e poetico."],
  ["south-china-guilin-yangshuo-6-day", "6-Day Guangzhou, Guilin & Yangshuo Scenic Trip", "Sud della Cina", "Si puo unire cucina locale e paesaggio iconico?", "Guangzhou apre con sapore e vita locale, poi Guilin e Yangshuo portano la Cina da cartolina."],
  ["east-china-gardens-huangshan-9-day", "9-Day Shanghai, Hangzhou, Suzhou & Huangshan Scenic Trip", "Viaggi fotografici e culturali", "La rotta puo avere un vero ritmo visivo?", "Shanghai, Hangzhou, Suzhou e Huangshan alternano skyline, acqua, giardini e montagne con una progressione elegante."],
].map(([journeyId, journeyTitle, travelerProfile, concern, planningResponse], index) => ({
  id: `it-${String(index + 1).padStart(2, "0")}`,
  language: "Italiano",
  journeyId,
  journeyTitle,
  travelerProfile,
  concern,
  planningResponse,
}));

export const travelerPlanningSignals: TravelerPlanningSignal[] = [
  ...englishSignals,
  ...germanSignals,
  ...frenchSignals,
  ...italianSignals,
];
