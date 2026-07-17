import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { JsonLd } from "@/lib/seo/json-ld";
import { PageTransition } from "@/components/loading/page-transition";
import { createMetadata } from "@/lib/seo/metadata";
import { organizationSchema } from "@/lib/seo/schema";
import { AppProviders } from "@/providers/app-providers";
import "@/styles/globals.css";

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf9f5",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <AppProviders>
          <PageTransition>{children}</PageTransition>
        </AppProviders>
        <JsonLd id="organization-schema" data={organizationSchema()} />
      </body>
    </html>
  );
}
