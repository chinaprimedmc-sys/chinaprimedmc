import Link from "next/link";

import { getAdminCmsRows, getAdminMedia } from "@/lib/cms/data";
import type { CmsBlogPost, CmsJourney } from "@/lib/cms/types";
import { getAdminInquiries } from "@/lib/inquiries/data";

export default async function AdminDashboardPage() {
  const [inquiries, journeys, posts, media] = await Promise.all([
    getAdminInquiries(),
    getAdminCmsRows<CmsJourney>("cms_journeys"),
    getAdminCmsRows<CmsBlogPost>("cms_blog_posts"),
    getAdminMedia(),
  ]);
  const cards = [
    {
      label: "新询盘",
      value: inquiries.filter((item) => item.status === "new").length,
      href: "/admin/inquiries",
    },
    { label: "行程", value: journeys.length, href: "/admin/tours" },
    { label: "博客", value: posts.length, href: "/admin/journal" },
    { label: "媒体", value: media.length, href: "/admin/media" },
  ];
  return (
    <div className="grid gap-7">
      <div>
        <p className="text-muted text-xs font-semibold tracking-[0.14em] uppercase">实时数据</p>
        <h1 className="mt-2 text-4xl font-semibold">运营概览</h1>
        <p className="text-muted mt-2">所有数字均直接来自 Supabase，不包含示例数据。</p>
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
