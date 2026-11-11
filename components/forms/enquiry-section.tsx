"use client";

/**
 * 本模块职责：页内询盘区块——标题、三条承诺、HubSpot 表单、WhatsApp 与邮件备选。
 * 输入：标题与说明文案、可选的行程上下文、埋点位置名。
 * 输出：带 id="enquire" 与 data-enquiry-inline 的区块；全局弹窗发现它就会滚动到这里而不是再弹一个表单。
 * 不负责：表单字段与提交（HubSpot）、弹窗（见 enquiry-dialog.tsx）。
 * 关键规则：同一页面最多出现一个 HubSpot 表单实例，避免重复的表单 id；
 * 不承诺未核实的内容——回复时间沿用站点现有说法；不提价格。
 */

import Link from "next/link";

import { formQuote as quote, formStats } from "@/content/home/form-quote";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics/events";

import { LazyHubSpotForm } from "./lazy-hubspot-form";
import styles from "./enquiry-section.module.css";

const whatsapp = "https://wa.me/8618027438191";

const promises = [
  "A licensed China operator, registered in Guangzhou",
  "Route, hotels, inclusions and price in writing before you pay",
  "No compulsory shopping stops, and no payment to enquire",
  "A China-based specialist replies, normally within a day",
];

export function EnquirySection({
  placement,
  title = "Tell us about your trip",
  intro = "Share your dates, who is travelling and what matters most. A few lines is enough to start a conversation with our China team.",
  journeyTitle,
  destinationName,
  tone = "light",
}: {
  placement: string;
  title?: string;
  intro?: string;
  /** 来自某个具体行程页时，用一句话提示访客，提交时 HubSpot 会自动记录当前页面地址。 */
  journeyTitle?: string;
  destinationName?: string;
  tone?: "light" | "stone";
}) {
  return (
    <section
      id="enquire"
      data-enquiry-inline
      className={`${styles.section} ${tone === "stone" ? styles.stone : ""}`}
      aria-labelledby={`enquire-title-${placement}`}
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.kicker}>Plan your journey</p>
          <h2 id={`enquire-title-${placement}`}>{title}</h2>
          <p className={styles.intro}>{intro}</p>
          {journeyTitle ? (
            <p className={styles.context}>
              You are asking about <strong>{journeyTitle}</strong>.
            </p>
          ) : null}
        </div>
        <div className={styles.form}>
          <LazyHubSpotForm
            planningContext={destinationName ? { destinationName } : undefined}
            onVisible={() => trackEvent("enquiry_form_view", { placement })}
          />
        </div>
        <aside className={styles.reassurance} aria-label="Planning expectations and guest feedback">
          <h3 className={styles.reassuranceTitle}>Before you book</h3>
          <ul className={styles.promises}>
            {promises.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Link href="/reviews" className={styles.rating}>
            <b>{formStats.average}</b> · Guest feedback on our website
          </Link>
          <figure className={styles.quote}>
            <blockquote>“{quote.text}”</blockquote>
            <figcaption>
              {quote.author}, {quote.location}
            </figcaption>
          </figure>
          <p className={styles.alt}>
            Prefer to talk first?{" "}
            <a
              href={whatsapp}
              onClick={() => trackEvent("whatsapp_click", { placement: `enquiry-${placement}` })}
            >
              Message us on WhatsApp
            </a>{" "}
            or <a href={`mailto:${siteConfig.email}`}>email our China team</a>. Company, licence and
            office details are on our <Link href="/company">company page</Link>.
          </p>
        </aside>
      </div>
    </section>
  );
}
