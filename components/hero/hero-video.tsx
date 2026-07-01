import type { ReactNode } from "react";

import { CtaButton } from "@/components/cta";
import { HeroLayout } from "@/components/layout";
import type { LinkAction } from "@/types/component-library";

type HeroVideoProps = {
  title: string;
  subtitle?: string;
  videoSrc: string;
  poster?: string;
  primary?: LinkAction;
  secondary?: LinkAction;
  children?: ReactNode;
};

export function HeroVideo({
  title,
  subtitle,
  videoSrc,
  poster,
  primary,
  secondary,
  children,
}: HeroVideoProps) {
  return (
    <HeroLayout
      media={
        <>
          <video
            className="absolute inset-0 z-0 h-full w-full object-cover"
            src={videoSrc}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div
            className="hero-overlay absolute inset-0 z-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            aria-hidden="true"
          />
        </>
      }
    >
      <div className="max-w-5xl text-white">
        <h1 className="text-5xl leading-[0.94] font-semibold tracking-[-0.04em] md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/84 md:text-xl md:leading-8">
            {subtitle}
          </p>
        ) : null}
        {primary || secondary ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {primary ? (
              <CtaButton href={primary.href} variant="glass">
                {primary.label}
              </CtaButton>
            ) : null}
            {secondary ? (
              <CtaButton
                href={secondary.href}
                variant="outline"
                className="border-white/45 text-white hover:bg-white/12"
              >
                {secondary.label}
              </CtaButton>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </HeroLayout>
  );
}
