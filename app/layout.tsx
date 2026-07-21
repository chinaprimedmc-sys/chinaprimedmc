import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { SocialContactRail } from "@/components/cta/social-contact-rail";
import { JsonLd } from "@/lib/seo/json-ld";
import { PageTransition } from "@/components/loading/page-transition";
import { createMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { AppProviders } from "@/providers/app-providers";
import { getPublicSiteSettings } from "@/lib/cms/public-content";
import "@/styles/globals.css";

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#faf9f5",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const settings = await getPublicSiteSettings();
  return (
    <html lang="en-US" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <AppProviders>
          <PageTransition>{children}</PageTransition>
        </AppProviders>
        <Analytics />
        <SpeedInsights />
        <SocialContactRail whatsappHref={settings.whatsappHref} email={settings.email} />
        <JsonLd id="organization-schema" data={organizationSchema()} />
        <JsonLd id="website-schema" data={websiteSchema()} />
      </body>
    </html>
  );
}
