"use client";

/**
 * 本模块职责：首页的"一句话找行程"——三个词可选，选完跳到 /tours 并带上同一组筛选参数。
 * 输入：无（选项来自 journeys-curation）。
 * 输出：一个带三个下拉的句子和一个跳转链接，参数名与 /tours 的 JourneyFinder 一致（days / who / see）。
 * 不负责：筛选结果本身，由 /tours 渲染。
 */

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  companionChoices,
  interestChoices,
  lengthChoices,
} from "@/content/tours/journeys-curation";

import styles from "./home.module.css";

export function HomeSentence() {
  const [days, setDays] = useState("any");
  const [who, setWho] = useState("any");
  const [see, setSee] = useState("any");

  const params = new URLSearchParams();
  if (days !== "any") params.set("days", days);
  if (who !== "any") params.set("who", who);
  if (see !== "any") params.set("see", see);
  const query = params.toString();
  const href = `/tours${query ? `?${query}` : ""}#journey-catalog`;

  return (
    <div className={styles.sentenceBlock}>
      <p className={styles.sentence}>
        I’m traveling{" "}
        <select aria-label="Trip length" value={days} onChange={(e) => setDays(e.target.value)}>
          {lengthChoices.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>{" "}
        with{" "}
        <select aria-label="Who is traveling" value={who} onChange={(e) => setWho(e.target.value)}>
          {companionChoices.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>
        , hoping to see{" "}
        <select aria-label="Interests" value={see} onChange={(e) => setSee(e.target.value)}>
          {interestChoices.map((choice) => (
            <option key={choice.value} value={choice.value}>
              {choice.label}
            </option>
          ))}
        </select>
        .
      </p>
      <Link className={styles.sentenceLink} href={href}>
        Show my journeys <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </div>
  );
}
