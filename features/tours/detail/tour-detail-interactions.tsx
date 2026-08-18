"use client";

import { useEffect, useRef, type AnchorHTMLAttributes, type ReactNode } from "react";

import { trackCtaClick, trackEvent } from "@/lib/analytics/events";

export function TourDetailAnalytics({ journeySlug }: { journeySlug: string }) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    trackEvent("tour_detail_view", { journey: journeySlug.slice(0, 160) });
  }, [journeySlug]);

  return null;
}

type TrackedTourLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  journeySlug: string;
  label: string;
  placement: string;
};

export function TrackedTourLink({
  children,
  href,
  journeySlug,
  label,
  placement,
  onClick,
  ...props
}: TrackedTourLinkProps) {
  return (
    <a
      {...props}
      href={href}
      onClick={(event) => {
        trackCtaClick(label, href, placement, journeySlug);
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
