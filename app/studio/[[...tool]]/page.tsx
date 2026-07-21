import type { Metadata } from "next";
import { NextStudio } from "next-sanity/studio";

import config from "@/sanity.config";

export const metadata: Metadata = {
  title: "AVIORA 内容后台",
  robots: { index: false, follow: false },
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}
