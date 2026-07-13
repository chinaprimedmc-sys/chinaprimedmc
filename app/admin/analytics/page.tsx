import { AdminPageHeader, AdminPanel, QuickNote } from "@/features/admin/admin-components";

export default function AdminAnalyticsPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="数据统计"
        title="数据统计模块已预留。"
        description="未来可展示流量来源、热门内容、转化路径、搜索词、收藏与询盘漏斗。"
        primaryLabel="规划指标"
      />
      <AdminPanel title="建议指标" description="先保证数据口径统一，再接入图表。">
        <QuickNote>
          核心指标建议包括页面浏览、搜索词、My Trip 收藏、表单提交、WhatsApp 点击和热门线路。
        </QuickNote>
      </AdminPanel>
    </>
  );
}
