import {
  AdminLinkCard,
  AdminPageHeader,
  AdminPanel,
  AdminStatCard,
  ContentTitleCell,
  StatusBadge,
} from "@/features/admin/admin-components";
import {
  adminArticles,
  adminJourneys,
  dashboardStats,
  hotDestinations,
  inquiries,
  recentEdits,
} from "@/features/admin/admin-data";

export default function AdminDashboardPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="数据概览"
        title="今天需要关注什么？"
        description="快速查看询盘、热门内容、待发布事项和网站健康状态，让运营团队先处理最重要的事情。"
        primaryLabel="新增 Journey"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <AdminStatCard
            key={stat.label}
            {...stat}
            tone={stat.tone as "neutral" | "positive" | "warning"}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <AdminPanel title="近期询盘" description="优先处理新询盘和已报价客户。">
          <div className="grid gap-3">
            {inquiries.slice(0, 3).map((inquiry) => (
              <div
                key={inquiry.email}
                className="border-border bg-background/72 flex flex-wrap items-center justify-between gap-3 rounded-[1.25rem] border p-4"
              >
                <div>
                  <p className="font-semibold">{inquiry.name}</p>
                  <p className="text-muted mt-1 text-sm">
                    {inquiry.country} / {inquiry.interest}
                  </p>
                </div>
                <StatusBadge status={inquiry.status} />
              </div>
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="热门目的地" description="用于判断首页和推荐位内容优先级。">
          <div className="grid gap-3">
            {hotDestinations.map((destination) => (
              <div key={destination.name} className="grid grid-cols-[1fr_auto] items-center gap-3">
                <div>
                  <p className="font-semibold">{destination.name}</p>
                  <p className="text-muted text-sm">{destination.views} 次浏览</p>
                </div>
                <StatusBadge status={destination.status} />
              </div>
            ))}
          </div>
        </AdminPanel>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <AdminPanel title="热门 Journeys" description="未来可接入真实访问和询盘转化数据。">
          <div className="grid gap-4">
            {adminJourneys.slice(0, 2).map((journey) => (
              <ContentTitleCell
                key={journey.slug}
                title={journey.title}
                meta={journey.route}
                image={journey.image}
              />
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="热门文章" description="内容团队可优先更新带来询盘的文章。">
          <div className="grid gap-4">
            {adminArticles.slice(0, 2).map((article) => (
              <ContentTitleCell
                key={article.slug}
                title={article.title}
                meta={article.category}
                image={article.image}
              />
            ))}
          </div>
        </AdminPanel>

        <AdminPanel title="最近编辑" description="便于团队交接和内容复盘。">
          <div className="grid gap-3">
            {recentEdits.map((edit) => (
              <div
                key={`${edit.title}-${edit.time}`}
                className="bg-background/72 rounded-[1rem] p-3"
              >
                <p className="text-sm font-semibold">{edit.title}</p>
                <p className="text-muted mt-1 text-xs">
                  {edit.type} / {edit.owner} / {edit.time}
                </p>
              </div>
            ))}
          </div>
        </AdminPanel>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <AdminLinkCard
          title="目的地管理"
          description="维护 Hero、图库、FAQ、SEO 和推荐关系。"
          href="/admin/destinations"
        />
        <AdminLinkCard
          title="Journeys 管理"
          description="编辑每日行程、酒店、费用、图库、关系和询盘引导。"
          href="/admin/journeys"
        />
        <AdminLinkCard
          title="询盘管理"
          description="查看客户来源、状态、备注并跟进报价。"
          href="/admin/inquiries"
        />
        <AdminLinkCard
          title="SEO 管理"
          description="集中检查标题、描述、Canonical 和 Schema。"
          href="/admin/seo"
        />
      </section>
    </>
  );
}
