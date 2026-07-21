import type { Metadata } from "next";

import { StudioClient } from "@/app/studio/studio-client";

export const metadata: Metadata = {
  title: "AVIORA 内容后台",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <StudioClient />;
}
