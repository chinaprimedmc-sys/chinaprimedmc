import { AlertTriangle, CheckCircle2, CircleAlert, RefreshCw } from "lucide-react";
import Link from "next/link";

import { buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/button-styles";
import { AdminPageHeader, AdminPanel } from "@/features/admin/admin-components";
import { SystemRefreshButton } from "@/features/admin/system-refresh-button";
import { getSystemHealthReport, type HealthStatus } from "@/lib/admin/system-health";
import { cn } from "@/lib/utils/cn";

export const dynamic = "force-dynamic";

const statusCopy: Record<HealthStatus, { label: string; helper: string }> = {
  healthy: {
    label: "系统正常",
    helper: "主要后端服务均可使用。",
  },
  warning: {
    label: "可用但需优化",
    helper: "核心功能可用，但有项目会影响运营效率。",
  },
  critical: {
    label: "需要立即处理",
    helper: "存在会影响后台或询盘流程的配置问题。",
  },
};

export default async function AdminSystemPage() {
  const report = await getSystemHealthReport();
  const visibleActions = report.checks.filter((check) => check.action);

  return (
    <>
      <AdminPageHeader
        eyebrow="系统健康"
        title="后端状态，一眼看清。"
        description="这里检查内容后台、询盘数据库、媒体库、发布刷新、表单安全和后台登录配置。页面不会展示任何密钥或客户资料。"
        actions={
          <>
            <Link
              href="/"
              target="_blank"
              className={cn(buttonBaseStyles, buttonVariants.secondary, buttonSizes.md, "gap-2")}
            >
              预览网站
            </Link>
            <SystemRefreshButton />
          </>
        }
      />

      <section className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
        <div
          className={cn(
            "rounded-[2rem] border p-6 shadow-[var(--shadow-glass)]",
            report.overall === "healthy" && "border-emerald-100 bg-emerald-50/80",
            report.overall === "warning" && "border-amber-100 bg-amber-50/80",
            report.overall === "critical" && "border-rose-100 bg-rose-50/80",
          )}
        >
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "grid size-12 place-items-center rounded-full bg-white",
                report.overall === "healthy" && "text-emerald-700",
                report.overall === "warning" && "text-amber-700",
                report.overall === "critical" && "text-rose-700",
              )}
            >
              {report.overall === "healthy" ? (
                <CheckCircle2 size={22} aria-hidden="true" />
              ) : report.overall === "warning" ? (
                <AlertTriangle size={22} aria-hidden="true" />
              ) : (
                <CircleAlert size={22} aria-hidden="true" />
              )}
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.12em] text-black/48 uppercase">
                Overall
              </p>
              <h2 className="mt-1 text-3xl font-semibold tracking-[-0.04em]">
                {statusCopy[report.overall].label}
              </h2>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-black/62">
            {statusCopy[report.overall].helper}
          </p>
          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/72 px-3 py-2 text-xs font-semibold text-black/56">
            <RefreshCw size={14} aria-hidden="true" />
            {new Intl.DateTimeFormat("zh-CN", {
              dateStyle: "medium",
              timeStyle: "short",
              timeZone: "Asia/Shanghai",
            }).format(new Date(report.generatedAt))}
          </p>
        </div>

        <AdminPanel title="优先处理" description="只列出会影响上线稳定性或运营效率的事项。">
          {visibleActions.length ? (
            <div className="grid gap-3">
              {visibleActions.map((check) => (
                <div
                  key={check.id}
                  className="border-border rounded-[1.35rem] border bg-white/72 p-4"
                >
                  <p className="text-sm font-semibold">{check.label}</p>
                  <p className="text-muted mt-1 text-sm leading-6">{check.action}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted text-sm leading-6">
              暂无必须处理的后端事项。后续可以继续接入自动图片压缩和即时询盘通知。
            </p>
          )}
        </AdminPanel>
      </section>

      <AdminPanel title="服务状态" description="这些检查都在服务端执行，不暴露密钥和客户数据。">
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {report.checks.map((check) => (
            <article
              key={check.id}
              className="border-border rounded-[1.5rem] border bg-white p-4 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold tracking-[-0.01em]">{check.label}</p>
                  <p className="text-muted mt-2 text-sm leading-6">{check.detail}</p>
                </div>
                <StatusDot status={check.status} />
              </div>
            </article>
          ))}
        </div>
      </AdminPanel>
    </>
  );
}

function StatusDot({ status }: { status: HealthStatus }) {
  return (
    <span
      className={cn(
        "grid size-10 shrink-0 place-items-center rounded-full",
        status === "healthy" && "bg-emerald-50 text-emerald-700",
        status === "warning" && "bg-amber-50 text-amber-700",
        status === "critical" && "bg-rose-50 text-rose-700",
      )}
      aria-label={status}
    >
      {status === "healthy" ? (
        <CheckCircle2 size={18} aria-hidden="true" />
      ) : status === "warning" ? (
        <AlertTriangle size={18} aria-hidden="true" />
      ) : (
        <CircleAlert size={18} aria-hidden="true" />
      )}
    </span>
  );
}
