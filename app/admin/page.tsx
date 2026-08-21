import Link from "next/link";

import { journeyCatalog } from "@/content/tours/catalog";
import { journalArticles } from "@/content/journal";
import { getPublicDestinations } from "@/lib/cms/public-content";
import { getAdminInquiries } from "@/lib/inquiries/data";

export default async function AdminDashboardPage() {
  const [inquiries, destinations] = await Promise.all([
    getAdminInquiries(),
    getPublicDestinations(),
  ]);
  const r2Configured = Boolean(
    process.env.CLOUDFLARE_R2_ACCOUNT_ID &&
    process.env.CLOUDFLARE_R2_ACCESS_KEY_ID &&
    process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY &&
    process.env.CLOUDFLARE_R2_BUCKET &&
    process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL,
  );
  const cards = [
    {
      label: "新询盘",
      value: inquiries.filter((item) => item.status === "new").length,
      href: "/admin/inquiries",
    },
    { label: "已发布行程", value: journeyCatalog.length, href: "/tours" },
    { label: "目的地", value: destinations.length, href: "/destinations" },
    { label: "已发布博客", value: journalArticles.length, href: "/journal" },
    {
      label: "R2 图片",
      value: r2Configured ? "正常" : "待配置",
      href: "/admin/media",
    },
  ];
  return (
    <div className="grid gap-7">
      <div>
        <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">实时数据</p>
        <h1 className="mt-2 text-4xl font-semibold">运营概览</h1>
        <p className="text-muted mt-2">
          客户询盘由 Supabase 安全保存；公开内容由代码仓库维护并随网站发布。
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="border-border rounded-xl border bg-white p-5"
          >
            <p className="text-muted text-sm">{card.label}</p>
            <p className="mt-3 text-4xl font-semibold">{card.value}</p>
          </Link>
        ))}
      </div>
      <section className="border-border rounded-xl border bg-white p-5">
        <h2 className="text-xl font-semibold">最近询盘</h2>
        <div className="mt-4 grid gap-3">
          {inquiries.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="border-border flex flex-wrap justify-between gap-3 border-t pt-3"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-muted text-sm">{item.email || item.whatsapp}</p>
              </div>
              <p className="text-muted text-sm">
                {new Date(item.created_at).toLocaleString("zh-CN")}
              </p>
            </div>
          ))}
          {!inquiries.length ? <p className="text-muted text-sm">目前还没有真实询盘。</p> : null}
        </div>
      </section>
    </div>
  );
}
