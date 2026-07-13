import type { Metadata } from "next";
import type { ReactNode } from "react";

import { AdminShell } from "@/features/admin/admin-shell";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createMetadata({
  title: "后台管理系统",
  description: "China Prime DMC 中文内容管理后台。",
  path: "/admin",
  noIndex: true,
});

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
