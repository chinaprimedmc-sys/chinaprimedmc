import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { SocialContactRail } from "@/components/cta/social-contact-rail";
import { AttributionCapture } from "@/components/analytics/attribution-capture";
import { CspNonceProvider } from "@/components/security/csp-nonce-provider";
import { JsonLd } from "@/lib/seo/json-ld";
import { PageTransition } from "@/components/loading/page-transition";
import { createMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { AppProviders } from "@/providers/app-providers";
import { getPublicSiteSettings } from "@/lib/cms/public-content";
import "@/styles/globals.css";

export const metadata: Metadata = createMetadata();
export const dynamic = "force-dynamic";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf9f5",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const requestHeaders = await headers();
  const nonce = requestHeaders.get("x-nonce") ?? "";
  const settings = await getPublicSiteSettings();
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <CspNonceProvider nonce={nonce}>
          <AppProviders>
            <PageTransition>{children}</PageTransition>
          </AppProviders>
        </CspNonceProvider>
        <AttributionCapture />
        <Analytics />
        <SpeedInsights />
        <SocialContactRail whatsappHref={settings.whatsappHref} email={settings.email} />
        <JsonLd id="organization-schema" data={organizationSchema()} />
        <JsonLd id="website-schema" data={websiteSchema()} />
      </body>
    </html>
  );
}
