"use client";

import { PanelLeftClose, PanelLeftOpen, Search } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { adminNavigation } from "@/features/admin/admin-data";
import { cn } from "@/lib/utils/cn";

type AdminShellProps = {
  children: ReactNode;
};

export function AdminShell({ children }: AdminShellProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [query, setQuery] = useState("");

  const navigation = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return adminNavigation;
    return adminNavigation.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [query]);

  if (pathname === "/admin/login") return children;

  return (
    <div className="bg-background text-foreground min-h-svh">
      <aside
        className={cn(
          "border-border fixed inset-y-0 left-0 z-40 hidden border-r bg-white/78 p-4 shadow-sm backdrop-blur-2xl transition-[width] duration-300 ease-[var(--ease-apple)] lg:flex lg:flex-col",
          collapsed ? "w-[5.25rem]" : "w-72",
        )}
      >
        <div className="flex h-12 items-center justify-between gap-3">
          <Link href="/admin" className="min-w-0">
            <span className={cn("block text-sm font-semibold", collapsed && "sr-only")}>
              China Prime DMC
            </span>
            <span className={cn("text-muted block text-xs", collapsed && "sr-only")}>
              询盘与运营中心
            </span>
            {collapsed ? (
              <span className="bg-foreground text-background grid size-10 place-items-center rounded-2xl text-sm font-bold">
                CP
              </span>
            ) : null}
          </Link>
          <button
            type="button"
            onClick={() => setCollapsed((value) => !value)}
            className="border-border hover:bg-foreground/5 grid size-10 shrink-0 place-items-center rounded-full border bg-white transition"
            aria-label={collapsed ? "展开导航" : "折叠导航"}
          >
            {collapsed ? <PanelLeftOpen size={17} /> : <PanelLeftClose size={17} />}
          </button>
        </div>

        <label className={cn("mt-5 grid gap-2", collapsed && "hidden")}>
          <span className="sr-only">搜索菜单</span>
          <span className="relative">
            <Search
              size={16}
              aria-hidden="true"
              className="text-muted absolute top-1/2 left-3 -translate-y-1/2"
            />
            <Input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜索菜单"
              className="h-10 rounded-full pl-9 text-sm"
            />
          </span>
        </label>

        <nav className="mt-5 grid gap-1" aria-label="后台主导航">
          {navigation.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            const content = (
              <>
                <Icon size={18} aria-hidden="true" />
                <span className={cn("truncate", collapsed && "sr-only")}>{item.label}</span>
              </>
            );

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex min-h-11 items-center gap-3 rounded-2xl px-3 text-sm font-medium transition",
                  active
                    ? "bg-foreground text-background"
                    : "text-muted hover:bg-foreground/5 hover:text-foreground",
                )}
              >
                {content}
              </Link>
            );
          })}
        </nav>

        <div
          className={cn(
            "border-border bg-background/82 mt-auto rounded-[1.5rem] border p-4",
            collapsed && "hidden",
          )}
        >
          <p className="text-sm font-semibold">运营提示</p>
          <p className="text-muted mt-2 text-xs leading-5">
            内容编辑请进入 Sanity；客户询盘继续在此处安全管理。
          </p>
          <button
            type="button"
            className="text-muted mt-4 text-xs font-semibold underline underline-offset-4"
            onClick={async () => {
              await fetch("/api/admin/session", { method: "DELETE" });
              router.replace("/admin/login");
              router.refresh();
            }}
          >
            退出后台
          </button>
        </div>
      </aside>

      <div
        className={cn(
          "transition-[padding] duration-300 ease-[var(--ease-apple)]",
          collapsed ? "lg:pl-[5.25rem]" : "lg:pl-72",
        )}
      >
        <header className="border-border bg-background/82 sticky top-0 z-30 border-b px-5 py-3 backdrop-blur-2xl lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="font-semibold">
              AVIORA 运营中心
            </Link>
            <Button size="sm" variant="secondary">
              预览网站
            </Button>
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {adminNavigation.slice(0, 8).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "border-border shrink-0 rounded-full border bg-white px-3 py-2 text-xs font-semibold",
                  pathname === item.href && "bg-foreground text-background",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </header>

        <main className="mx-auto grid max-w-[96rem] gap-6 px-5 py-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
  );
}
