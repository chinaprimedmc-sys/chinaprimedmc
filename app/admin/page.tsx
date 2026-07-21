import Link from "next/link";

import { getPublishedCmsJourneys, getPublishedCmsPosts } from "@/lib/cms/data";
import { getAdminInquiries } from "@/lib/inquiries/data";

export default async function AdminDashboardPage() {
  const [inquiries, journeys, posts] = await Promise.all([
    getAdminInquiries(),
    getPublishedCmsJourneys(),
    getPublishedCmsPosts(),
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
    { label: "已发布行程", value: journeys.length, href: "/studio/structure/journey" },
    { label: "已发布博客", value: posts.length, href: "/studio/structure/blogPost" },
    { label: "R2 媒体", value: r2Configured ? "已接通" : "待配置", href: "/studio" },
  ];
  return (
    <div className="grid gap-7">
      <div>
        <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">实时数据</p>
        <h1 className="mt-2 text-4xl font-semibold">运营概览</h1>
        <p className="text-muted mt-2">
          客户询盘由 Supabase 安全保存；公开内容由 Sanity 管理，图片存储在 Cloudflare R2。
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
                <p className="text-muted text-sm">{item.email || item.whatsapp || item.phone}</p>
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
