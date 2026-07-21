import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AdminShell } from "@/features/admin/admin-shell";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "后台管理系统",
  description: "AVIORA 询盘与网站运营后台。",
  path: "/admin",
  noIndex: true,
  noFollow: true,
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
