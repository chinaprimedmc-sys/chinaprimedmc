import { AdminPageHeader, AdminPanel, QuickNote } from "@/features/admin/admin-components";

export default function AdminSystemPage() {
  return (
    <>
      <AdminPageHeader
        eyebrow="系统设置"
        title="系统设置模块已预留。"
        description="未来用于权限、角色、审计日志、自动保存策略、Webhooks 和系统健康检查。"
        primaryLabel="规划权限"
      />
      <AdminPanel title="后续建设方向" description="涉及安全与权限，建议等认证系统确定后再开发。">
        <QuickNote>
          权限系统应支持管理员、编辑、运营、SEO 和只读访客，并记录关键发布操作。
        </QuickNote>
      </AdminPanel>
    </>
  );
}
