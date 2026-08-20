"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { trackCtaClick } from "@/lib/analytics/events";

type TrackedLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
  trackingLabel: string;
  trackingPlacement: string;
  journeySlug?: string;
};

export function TrackedLink({
  href,
  children,
  trackingLabel,
  trackingPlacement,
  journeySlug,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        trackCtaClick(trackingLabel, href, trackingPlacement, journeySlug);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
