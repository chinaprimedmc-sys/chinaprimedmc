/**
 * 本模块职责：/journal 首页外壳——导航、杂志式文章浏览、底部邀请与页脚。
 * 输入：文章条目、精选文章 slug、初始查询字符串。
 * 输出：完整的 Journal 首页（结构化数据由路由层输出）。
 * 不负责：筛选与卡片（见 journal-magazine.tsx）。
 * 关键规则：数据条目已在服务端整理好，不带文章正文。
 */

import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { JournalAnalytics } from "@/features/journal/journal-analytics";
import { JournalMagazine } from "@/features/journal/journal-magazine";
import type { MagazineItem } from "@/lib/journal/magazine";

import styles from "./journal-magazine.module.css";

export function JournalHubTemplate({
  items,
  featuredSlug,
  initialQueryString,
}: {
  items: MagazineItem[];
  featuredSlug: string;
  initialQueryString?: string;
}) {
  return (
    <main style={{ background: "#fff" }}>
      <JournalAnalytics />
      <SiteNavigation />
      <JournalMagazine
        items={items}
        featuredSlug={featuredSlug}
        initialQueryString={initialQueryString}
      />

      <section
        className={styles.invite}
        style={{ margin: "0 clamp(20px, 3.4vw, 56px) clamp(40px, 6vw, 80px)" }}
        aria-labelledby="journal-invitation-title"
      >
        <h2 id="journal-invitation-title">Turn your research into a journey that works</h2>
        <p>
          Share your dates and priorities. Our China-based team will review the route and the
          practical details with you.
        </p>
        <Link
          href="/start-planning?source=journal-hub"
          data-journal-event="planning_start"
          data-placement="journal-final-invitation"
        >
          Plan my private journey
        </Link>
      </section>

      <SiteFooter
        columns={[
          {
            title: "Journal",
            items: [
              { label: "All guides", href: "/journal" },
              { label: "Destinations", href: "/destinations" },
              { label: "About AVIORA", href: "/about" },
            ],
          },
          {
            title: "Planning",
            items: [
              { label: "Private China Journeys", href: "/tours" },
              { label: "Plan My Trip", href: "/start-planning" },
              { label: "Email Us", href: "mailto:chinaprimedmc@gmail.com" },
            ],
          },
        ]}
        social={[
          { label: "Facebook", href: "https://www.facebook.com/p/Aviora-Travel-61593357154006/" },
          { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc/" },
        ]}
      />
    </main>
  );
}
