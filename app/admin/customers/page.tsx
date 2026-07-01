import { AdminPageHeader, AdminPanel, QuickNote } from "@/features/admin/admin-components";

export default function AdminCustomersPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="客户管理"
        title="客户管理模块已预留。"
        description="未来可沉淀客户偏好、国家、预算、家庭成员、历史询盘和成交记录。"
        primaryLabel="规划字段"
      />
      <AdminPanel title="后续建设方向" description="当前 Sprint 仅预留入口，不开发完整 CRM。">
        <QuickNote>建议在接入真实询盘数据库后，再设计客户合并、标签、权限和隐私策略。</QuickNote>
      </AdminPanel>
    </>
  );
}
