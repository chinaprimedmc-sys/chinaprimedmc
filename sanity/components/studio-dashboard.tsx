"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, BookOpenText, Globe2, House, MapPinned, Plane, Plus } from "lucide-react";
import Link from "next/link";
import { useClient } from "sanity";

type Counts = { journeys: number; destinations: number; posts: number };

const quickActions = [
  {
    label: "新建行程",
    note: "路线、逐日安排与图片",
    href: "/studio/intent/create/template=journey;type=journey/",
    icon: Plane,
  },
  {
    label: "新建目的地",
    note: "城市介绍与旅行建议",
    href: "/studio/intent/create/template=destination;type=destination/",
    icon: MapPinned,
  },
  {
    label: "新建博客",
    note: "攻略、灵感与 SEO 内容",
    href: "/studio/intent/create/template=blogPost;type=blogPost/",
    icon: BookOpenText,
  },
];

export function StudioDashboard() {
  const client = useClient({ apiVersion: "2025-02-19" });
  const [counts, setCounts] = useState<Counts | null>(null);

  useEffect(() => {
    void client
      .fetch<Counts>(
        `{"journeys": count(*[_type == "journey"]), "destinations": count(*[_type == "destination"]), "posts": count(*[_type == "blogPost"])}`,
        {},
        { perspective: "published" },
      )
      .then(setCounts);
  }, [client]);

  return (
    <main
      style={{
        minHeight: "100%",
        background: "#f6f7f4",
        color: "#171916",
        padding: "clamp(24px, 4vw, 56px)",
      }}
    >
      <div style={{ width: "min(1120px, 100%)", margin: "0 auto" }}>
        <header
          style={{ display: "grid", gap: 16, paddingBottom: 32, borderBottom: "1px solid #dfe2dc" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#4d6658",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "#3f7759" }} />
            内容系统运行正常
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: 24,
              alignItems: "end",
            }}
          >
            <div>
              <p style={{ margin: 0, color: "#6a6f68", fontSize: 13 }}>AVIORA CONTENT STUDIO</p>
              <h1
                style={{
                  margin: "10px 0 0",
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(36px, 5vw, 64px)",
                  fontWeight: 500,
                  lineHeight: 1,
                }}
              >
                今天要更新什么？
              </h1>
            </div>
            <a href="/" target="_blank" rel="noreferrer" style={secondaryLinkStyle}>
              <Globe2 size={17} /> 查看网站 <ArrowUpRight size={15} />
            </a>
          </div>
        </header>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            borderBottom: "1px solid #dfe2dc",
          }}
        >
          <Stat label="已发布行程" value={counts?.journeys} />
          <Stat label="目的地" value={counts?.destinations} />
          <Stat label="博客文章" value={counts?.posts} />
          <Stat label="媒体存储" value="R2" />
        </section>

        <section style={{ padding: "36px 0" }}>
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16 }}
          >
            <div>
              <p style={eyebrowStyle}>快速开始</p>
              <h2 style={sectionTitleStyle}>创建新内容</h2>
            </div>
            <Plus size={22} color="#5c655e" />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
              marginTop: 20,
            }}
          >
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.href} href={action.href} style={actionStyle}>
                  <Icon size={20} color="#41624f" />
                  <strong style={{ fontSize: 16 }}>{action.label}</strong>
                  <span style={{ color: "#6a6f68", fontSize: 13, lineHeight: 1.6 }}>
                    {action.note}
                  </span>
                  <ArrowUpRight size={17} style={{ marginTop: 8 }} />
                </Link>
              );
            })}
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(280px, .9fr)",
            gap: 28,
            padding: "36px 0",
            borderTop: "1px solid #dfe2dc",
          }}
        >
          <div>
            <p style={eyebrowStyle}>发布流程</p>
            <h2 style={sectionTitleStyle}>四步完成一次更新</h2>
            <ol style={{ listStyle: "none", margin: "24px 0 0", padding: 0, display: "grid" }}>
              {[
                "填写内容并生成 URL Slug",
                "上传图片并填写英文 Alt 文本",
                "检查 SEO 标签中的标题与描述",
                "点击 Publish，再打开前台预览确认",
              ].map((item, index) => (
                <li
                  key={item}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "36px 1fr",
                    gap: 12,
                    padding: "15px 0",
                    borderTop: "1px solid #dfe2dc",
                    alignItems: "center",
                  }}
                >
                  <span style={{ color: "#42614f", fontFamily: "Georgia, serif", fontSize: 20 }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: 14, lineHeight: 1.6 }}>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <aside
            style={{
              background: "#173c2f",
              color: "white",
              padding: 28,
              borderRadius: 8,
              alignSelf: "start",
            }}
          >
            <House size={22} />
            <h3
              style={{
                margin: "22px 0 0",
                fontFamily: "Georgia, serif",
                fontSize: 28,
                fontWeight: 500,
              }}
            >
              最常用的入口
            </h3>
            <p
              style={{
                margin: "12px 0 22px",
                color: "rgba(255,255,255,.68)",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              首页精选控制首页展示顺序；全站设置管理导航、邮箱、WhatsApp 与社交链接。
            </p>
            <div style={{ display: "grid", gap: 10 }}>
              <Link href="/studio/content/home-page" style={darkLinkStyle}>
                编辑首页精选 <ArrowUpRight size={15} />
              </Link>
              <Link href="/studio/content/site-settings" style={darkLinkStyle}>
                修改全站设置 <ArrowUpRight size={15} />
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string | number | undefined }) {
  return (
    <div style={{ padding: "28px 24px 28px 0" }}>
      <div style={{ fontFamily: "Georgia, serif", fontSize: 40, lineHeight: 1 }}>
        {value ?? "..."}
      </div>
      <div style={{ marginTop: 9, color: "#6a6f68", fontSize: 13 }}>{label}</div>
    </div>
  );
}

const eyebrowStyle = { margin: 0, color: "#657169", fontSize: 12, fontWeight: 700 } as const;
const sectionTitleStyle = {
  margin: "8px 0 0",
  fontFamily: "Georgia, serif",
  fontSize: 30,
  fontWeight: 500,
} as const;
const secondaryLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  border: "1px solid #cfd4ce",
  borderRadius: 999,
  padding: "11px 16px",
  background: "white",
  color: "#242824",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 700,
} as const;
const actionStyle = {
  display: "grid",
  gap: 10,
  minHeight: 190,
  padding: 22,
  border: "1px solid #d9ddd7",
  borderRadius: 8,
  background: "white",
  color: "#171916",
  textDecoration: "none",
} as const;
const darkLinkStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: "1px solid rgba(255,255,255,.18)",
  padding: "13px 0",
  color: "white",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 700,
} as const;
