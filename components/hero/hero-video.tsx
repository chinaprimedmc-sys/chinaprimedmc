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
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
          <div className="absolute inset-0 bg-black/42" />
        </>
      }
    >
      <div className="max-w-5xl text-center text-white">
        <h1 className="text-5xl leading-[0.94] font-semibold tracking-[-0.04em] md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/84 md:text-xl md:leading-8">
            {subtitle}
          </p>
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
