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
            className="h-full w-full object-cover"
            src={videoSrc}
            poster={poster}
            muted
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-black/42" />
        </>
      }
    >
      <div className="max-w-5xl text-center text-white">
        <h1 className="type-hero">{title}</h1>
        {subtitle ? (
          <p className="type-body mx-auto mt-6 max-w-2xl text-white/84">{subtitle}</p>
        ) : null}
        {primary || secondary ? (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {primary ? (
              <CtaButton href={primary.href} variant="light">
                {primary.label}
              </CtaButton>
            ) : null}
            {secondary ? (
              <CtaButton href={secondary.href} variant="glass">
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
