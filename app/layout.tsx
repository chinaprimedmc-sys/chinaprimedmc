import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { headers } from "next/headers";
import type { ReactNode } from "react";

import { EnquiryDialog } from "@/components/forms/enquiry-dialog";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { WebSiteSchema } from "@/components/seo/website-schema";
import { MotionController } from "@/components/motion/motion-controller";
import { journeyCatalog } from "@/content/tours/catalog";
import { getJourneyHeadline } from "@/content/tours/card-copy";
import { ConsentAwareServices } from "@/components/privacy/consent-aware-services";
import { CookieConsent } from "@/components/privacy/cookie-consent";
import { CspNonceProvider } from "@/components/security/csp-nonce-provider";
import { PageTransition } from "@/components/loading/page-transition";
import { createMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter-loaded",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-newsreader-loaded",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const rootMetadata = createMetadata();
export const metadata: Metadata = {
  ...rootMetadata,
  title: {
    default: siteConfig.siteName,
    template: `%s | ${siteConfig.name}`,
  },
};
export const dynamic = "force-dynamic";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

/** 询盘弹窗只需要 slug→标题，用来提示“您正在咨询…”。 */
const journeyTitles = Object.fromEntries(
  journeyCatalog.map((item) => [item.slug, getJourneyHeadline(item) ?? item.title]),
);

export default async function RootLayout({ children }: { children: ReactNode }) {
  const requestHeaders = await headers();
  const nonce = requestHeaders.get("x-nonce") ?? "";
  return (
    <html
      lang="en-US"
      className={`${inter.variable} ${newsreader.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <CspNonceProvider nonce={nonce}>
          <PageTransition>{children}</PageTransition>
          <EnquiryDialog journeyTitles={journeyTitles} />
          <MotionController />
        </CspNonceProvider>
        <CookieConsent />
        <ConsentAwareServices />
        <OrganizationSchema />
        <WebSiteSchema />
      </body>
    </html>
  );
}
