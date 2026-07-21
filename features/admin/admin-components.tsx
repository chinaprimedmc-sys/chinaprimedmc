import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Copy,
  Eye,
  MoreHorizontal,
  Plus,
  Save,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/cn";
import type { MediaAsset } from "@/types/component-library";

type AdminPageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export function AdminPageHeader({
  actions,
  description,
  eyebrow = "China Prime DMC 后台",
  primaryLabel = "新增内容",
  secondaryLabel = "预览网站",
  title,
}: AdminPageHeaderProps) {
  return (
    <section className="grid gap-5 rounded-[2rem] border border-white/70 bg-white/72 p-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl md:p-6 lg:grid-cols-[1fr_auto] lg:items-end">
      <div>
        <Badge>{eyebrow}</Badge>
        <h1 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.035em] md:text-5xl">
          {title}
        </h1>
        <p className="text-muted mt-3 max-w-3xl text-sm leading-6 md:text-base">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {actions || (
          <>
            <Button variant="secondary" className="gap-2">
              <Eye size={16} aria-hidden="true" />
              {secondaryLabel}
            </Button>
            <Button className="gap-2">
              <Plus size={16} aria-hidden="true" />
              {primaryLabel}
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

export function AdminStatCard({
  helper,
  label,
  tone = "neutral",
  value,
}: {
  label: string;
  value: string;
  helper: string;
  tone?: "neutral" | "positive" | "warning";
}) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-muted text-sm font-semibold">{label}</p>
          <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{value}</p>
        </div>
        <span
          className={cn(
            "grid size-10 place-items-center rounded-full",
            tone === "positive" && "bg-emerald-50 text-emerald-700",
            tone === "warning" && "bg-amber-50 text-amber-700",
            tone === "neutral" && "bg-foreground/5 text-foreground",
          )}
        >
          {tone === "warning" ? <Clock3 size={17} /> : <CheckCircle2 size={17} />}
        </span>
      </div>
      <p className="text-muted mt-4 text-sm leading-6">{helper}</p>
    </Card>
  );
}

export function AdminPanel({
  action,
  children,
  description,
  title,
}: {
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Card className="overflow-hidden">
      <div className="border-border flex flex-wrap items-start justify-between gap-4 border-b p-5">
        <div>
          <h2 className="text-xl font-semibold tracking-[-0.025em]">{title}</h2>
          {description ? <p className="text-muted mt-1 text-sm leading-6">{description}</p> : null}
        </div>
        {action}
      </div>
      <div className="p-5">{children}</div>
    </Card>
  );
}

export function AdminContentTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: Array<Array<ReactNode>>;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[48rem] border-separate border-spacing-0 text-left text-sm">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="border-border text-muted border-b px-3 py-3 font-semibold"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="group">
              {row.map((cell, cellIndex) => (
                <td
                  key={`${rowIndex}-${cellIndex}`}
                  className="border-border/70 border-b px-3 py-4 align-middle"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "已发布" || status === "优秀" || status === "已成交"
      ? "bg-emerald-50 text-emerald-700"
      : status === "草稿" || status === "待发布" || status === "良好"
        ? "bg-amber-50 text-amber-700"
        : status === "新询盘"
          ? "bg-blue-50 text-blue-700"
          : "bg-foreground/5 text-muted";

  return <Badge className={cn("tracking-normal normal-case", tone)}>{status}</Badge>;
}

export function ContentTitleCell({
  image,
  meta,
  title,
}: {
  title: string;
  meta: string;
  image?: MediaAsset;
}) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      {image ? (
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          width={96}
          height={72}
          sizes="96px"
          objectPosition={image.objectPosition}
          frameClassName="size-14 shrink-0 rounded-2xl"
          className="h-full w-full"
        />
      ) : null}
      <div className="min-w-0">
        <p className="truncate font-semibold">{title}</p>
        <p className="text-muted mt-1 truncate text-xs">{meta}</p>
      </div>
    </div>
  );
}

export function RowActions() {
  return (
    <div className="flex justify-end gap-1">
      <Button size="sm" variant="ghost" aria-label="预览" className="size-9 px-0">
        <Eye size={15} aria-hidden="true" />
      </Button>
      <Button size="sm" variant="ghost" aria-label="复制" className="size-9 px-0">
        <Copy size={15} aria-hidden="true" />
      </Button>
      <Button size="sm" variant="ghost" aria-label="更多操作" className="size-9 px-0">
        <MoreHorizontal size={15} aria-hidden="true" />
      </Button>
    </div>
  );
}

export function FormSection({
  children,
  description,
  title,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="border-border rounded-[1.75rem] border bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold tracking-[-0.02em]">{title}</h2>
        <p className="text-muted mt-1 text-sm leading-6">{description}</p>
      </div>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}

export function SeoLengthMeter({
  label,
  max,
  value,
}: {
  label: string;
  value: number;
  max: number;
}) {
  const percent = Math.min(100, Math.round((value / max) * 100));
  const healthy = value >= Math.round(max * 0.45) && value <= max;

  return (
    <div className="grid gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold">{label}</span>
        <span className={healthy ? "text-emerald-700" : "text-amber-700"}>
          {value}/{max}
        </span>
      </div>
      <div className="bg-foreground/8 h-2 overflow-hidden rounded-full">
        <div
          className={cn("h-full rounded-full", healthy ? "bg-emerald-500" : "bg-amber-500")}
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}

export function QuickNote({ children }: { children: ReactNode }) {
  return (
    <div className="border-border bg-background/76 text-muted rounded-[1.25rem] border p-4 text-sm leading-6">
      {children}
    </div>
  );
}

export function AdminLinkCard({
  description,
  href,
  title,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group border-border rounded-[1.5rem] border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-[-0.02em]">{title}</h3>
          <p className="text-muted mt-2 text-sm leading-6">{description}</p>
        </div>
        <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

export function DraftEditorPreview({ defaultValue }: { defaultValue: string }) {
  return (
    <Textarea
      defaultValue={defaultValue}
      className="min-h-56 rounded-[1.5rem] text-sm leading-7"
      aria-label="正文编辑器"
    />
  );
}

export function SaveBar() {
  return (
    <div className="sticky bottom-4 z-20 flex flex-wrap items-center justify-between gap-3 rounded-full border border-white/70 bg-white/76 p-2 pl-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl">
      <p className="text-muted text-sm">自动保存已开启。所有修改会先进入草稿。</p>
      <div className="flex gap-2">
        <Button variant="secondary">保存草稿</Button>
        <Button className="gap-2">
          <Save size={16} aria-hidden="true" />
          发布
        </Button>
      </div>
    </div>
  );
}
