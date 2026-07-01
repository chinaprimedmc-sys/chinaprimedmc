import { Download, Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AdminContentTable,
  AdminPageHeader,
  AdminPanel,
  AdminStatCard,
  RowActions,
  StatusBadge,
} from "@/features/admin/admin-components";
import { inquiries } from "@/features/admin/admin-data";

const pipeline = [
  { label: "新询盘", value: "8", helper: "需要 24 小时内首次回复", tone: "warning" as const },
  { label: "跟进中", value: "16", helper: "正在确认预算、时间和偏好", tone: "neutral" as const },
  { label: "已报价", value: "9", helper: "等待客人反馈或调整方案", tone: "neutral" as const },
  { label: "已成交", value: "5", helper: "本周确认订单", tone: "positive" as const },
];

export default function AdminInquiriesPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="询盘管理"
        title="让每一条咨询都能被及时跟进。"
        description="统一查看来源页面、兴趣线路、客户国家、当前状态和运营备注，未来可接入邮件与 WhatsApp 工作流。"
        primaryLabel="新增备注"
        secondaryLabel="导出数据"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {pipeline.map((item) => (
          <AdminStatCard key={item.label} {...item} />
        ))}
      </section>

      <AdminPanel
        title="询盘列表"
        description="支持搜索、筛选、排序、导出和状态流转。"
        action={
          <div className="flex flex-wrap gap-2">
            <div className="relative w-full min-w-56 sm:w-64">
              <Search
                className="text-muted absolute top-1/2 left-3 -translate-y-1/2"
                size={16}
                aria-hidden="true"
              />
              <Input className="pl-9" placeholder="搜索姓名、邮箱、国家" />
            </div>
            <Button variant="secondary" className="gap-2">
              <Filter size={16} aria-hidden="true" />
              筛选
            </Button>
            <Button variant="secondary" className="gap-2">
              <Download size={16} aria-hidden="true" />
              导出
            </Button>
          </div>
        }
      >
        <AdminContentTable
          columns={["客户", "国家", "邮箱", "来源页面", "咨询内容", "提交时间", "状态", "操作"]}
          rows={inquiries.map((inquiry) => [
            <span key="name" className="font-semibold">
              {inquiry.name}
            </span>,
            inquiry.country,
            <span key="email" className="text-muted">
              {inquiry.email}
            </span>,
            <span key="source" className="text-muted text-xs">
              {inquiry.source}
            </span>,
            inquiry.interest,
            inquiry.submittedAt,
            <StatusBadge key="status" status={inquiry.status} />,
            <RowActions key="actions" />,
          ])}
        />
      </AdminPanel>
    </>
  );
}
