import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { StudioClient } from "@/app/studio/studio-client";

export const metadata: Metadata = {
  title: "AVIORA 内容后台",
  robots: { index: false, follow: false },
};

export default async function StudioPage({ params }: { params: Promise<{ tool?: string[] }> }) {
  const { tool } = await params;
  if (!tool?.length || (tool.length === 1 && tool[0] === "content")) {
    redirect("/studio/content/dashboard");
  }
  return <StudioClient />;
}
