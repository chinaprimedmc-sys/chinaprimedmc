import type { Metadata, Viewport } from "next";
import { Lora } from "next/font/google";
import { headers } from "next/headers";
import type { ReactNode } from "react";

import { ConsentAwareServices } from "@/components/privacy/consent-aware-services";
import { CookieConsent } from "@/components/privacy/cookie-consent";
import { CspNonceProvider } from "@/components/security/csp-nonce-provider";
import { JsonLd } from "@/lib/seo/json-ld";
import { PageTransition } from "@/components/loading/page-transition";
import { createMetadata } from "@/lib/seo/metadata";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import "@/styles/globals.css";

const lora = Lora({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-lora-loaded",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = createMetadata();
export const dynamic = "force-dynamic";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f4f6f5",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const requestHeaders = await headers();
  const nonce = requestHeaders.get("x-nonce") ?? "";
  return (
    <html lang="en-US" className={lora.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <CspNonceProvider nonce={nonce}>
          <PageTransition>{children}</PageTransition>
        </CspNonceProvider>
        <CookieConsent />
        <ConsentAwareServices />
        <JsonLd id="organization-schema" data={organizationSchema()} />
        <JsonLd id="website-schema" data={websiteSchema()} />
      </body>
    </html>
  );
}
