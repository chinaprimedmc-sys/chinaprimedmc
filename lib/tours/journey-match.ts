import type { JourneyCatalogItem } from "@/content/tours/catalog";

export type MatchAnswers = {
  time: "one-day" | "four-seven" | "eight-twelve" | "thirteen-plus" | "flexible";
  company: "couple" | "family" | "friends" | "solo";
  interests: Array<"icons" | "together" | "nature" | "culture">;
  pace: "easy" | "balanced" | "active";
};

const times = ["one-day", "four-seven", "eight-twelve", "thirteen-plus", "flexible"] as const;
const companies = ["couple", "family", "friends", "solo"] as const;
const interests = ["icons", "together", "nature", "culture"] as const;
const paces = ["easy", "balanced", "active"] as const;

export function readMatchAnswers(raw: string | null): MatchAnswers | null {
  if (!raw) return null;
  const parts = raw.split(".");
  if (parts.length !== 4) return null;
  const [time, company, interestsRaw, pace] = parts;
  const selected = interestsRaw?.split(",") ?? [];
  if (
    !times.includes(time as MatchAnswers["time"]) ||
    !companies.includes(company as MatchAnswers["company"]) ||
    !paces.includes(pace as MatchAnswers["pace"]) ||
    selected.length < 1 ||
    selected.length > 2 ||
    new Set(selected).size !== selected.length ||
    !selected.every((value) => interests.includes(value as MatchAnswers["interests"][number]))
  )
    return null;
  return {
    time: time as MatchAnswers["time"],
    company: company as MatchAnswers["company"],
    interests: selected as MatchAnswers["interests"],
    pace: pace as MatchAnswers["pace"],
  };
}

export function writeMatchAnswers(answers: MatchAnswers) {
  return `${answers.time}.${answers.company}.${answers.interests.join(",")}.${answers.pace}`;
}

export function describeMatchAnswers(answers: MatchAnswers) {
  const time = {
    "one-day": "one day",
    "four-seven": "4–7 days",
    "eight-twelve": "8–12 days",
    "thirteen-plus": "13 days or more",
    flexible: "flexible dates",
  }[answers.time];
  const company = {
    couple: "traveling as a couple",
    family: "traveling as a family",
    friends: "traveling with friends",
    solo: "traveling solo",
  }[answers.company];
  const focus = answers.interests
    .map(
      (interest) =>
        ({
          icons: "iconic places",
          together: "family time",
          nature: "landscapes",
          culture: "local culture",
        })[interest],
    )
    .join(" and ");
  const pace = { easy: "room to linger", balanced: "a balanced pace", active: "full days" }[
    answers.pace
  ];
  return `${time}; ${company}; interested in ${focus}; ${pace}`;
}

function durationFits(item: JourneyCatalogItem, time: MatchAnswers["time"]) {
  if (time === "flexible") return true;
  if (time === "one-day") return item.recommendedDaysMin <= 1 && item.recommendedDaysMax >= 1;
  if (time === "four-seven") return item.recommendedDaysMin <= 7 && item.recommendedDaysMax >= 4;
  if (time === "eight-twelve") return item.recommendedDaysMin <= 12 && item.recommendedDaysMax >= 8;
  return item.recommendedDaysMax >= 13;
}

function companyFits(item: JourneyCatalogItem, company: MatchAnswers["company"]) {
  const type = {
    couple: "couples",
    family: "families",
    friends: "private-groups",
    solo: "solo-travelers",
  } as const;
  return item.travelerFilters.includes(type[company]);
}

function interestFits(item: JourneyCatalogItem, interest: MatchAnswers["interests"][number]) {
  if (interest === "icons")
    return item.experienceFilters.some((value) => ["great-wall", "ancient-china"].includes(value));
  if (interest === "together")
    return item.highlights.some((highlight) => /family|child|hands-on|panda/i.test(highlight));
  if (interest === "nature") return item.experienceFilters.includes("scenery");
  return item.experienceFilters.includes("local-life");
}

export function matchJourneys(items: JourneyCatalogItem[], answers: MatchAnswers) {
  return items
    .map((item, index) => {
      const duration = durationFits(item, answers.time);
      const company = companyFits(item, answers.company);
      const interestCount = answers.interests.filter((interest) =>
        interestFits(item, interest),
      ).length;
      const pace = item.discovery.pace === answers.pace;
      const reasons = [
        duration && answers.time !== "flexible"
          ? `${item.durationLabel} fits your time away.`
          : null,
        company && answers.company === "family"
          ? "Designed for families traveling together."
          : null,
        company && answers.company === "couple" ? "Suited to couples traveling privately." : null,
        interestCount
          ? `Includes ${answers.interests
              .filter((interest) => interestFits(item, interest))
              .map(
                (interest) =>
                  ({
                    icons: "China’s icons",
                    together: "family time",
                    nature: "landscapes",
                    culture: "local life",
                  })[interest],
              )
              .join(" and ")}.`
          : null,
        pace ? "Its planned pace aligns with yours." : null,
      ].filter((reason): reason is string => Boolean(reason));
      const differences = [
        !duration && answers.time !== "flexible"
          ? `This route takes ${item.durationLabel}, outside your selected time.`
          : null,
        !company && answers.company === "family" ? "This is not the dedicated family route." : null,
        !company && answers.company === "solo"
          ? "Solo travel is not listed for this route; ask us to adapt it."
          : null,
        !company && answers.company === "couple"
          ? "This route is not specifically listed for couples; ask us how it can be tailored."
          : null,
        !company && answers.company === "friends"
          ? "This route is not listed for private groups; ask us how it can be tailored."
          : null,
        ...answers.interests
          .filter((interest) => !interestFits(item, interest))
          .map(
            (interest) =>
              ({
                icons: "China's iconic sites are not a focus of this route.",
                together: "Dedicated family activities are not a focus of this route.",
                nature: "Landscapes are not a focus of this route.",
                culture: "Local-life experiences are not a focus of this route.",
              })[interest],
          ),
        !pace
          ? `This route's published pace is ${item.discovery.pace}, rather than ${answers.pace}. Ask us about adjusting the days.`
          : null,
      ].filter((difference): difference is string => Boolean(difference));
      return {
        item,
        exact: duration && company && interestCount === answers.interests.length && pace,
        score: (duration ? 5 : 0) + (company ? 6 : 0) + interestCount * 2 + (pace ? 1 : 0),
        reasons,
        differences,
        index,
      };
    })
    .sort((a, b) => b.score - a.score || a.index - b.index);
}
