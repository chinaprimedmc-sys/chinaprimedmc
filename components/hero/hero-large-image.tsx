import { ArrowDown } from "lucide-react";
import type { ReactNode } from "react";

import { CtaButton } from "@/components/cta";
import { HeroLayout } from "@/components/layout";
import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import type { LinkAction, MediaAsset } from "@/types/component-library";

type HeroLargeImageProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: MediaAsset;
  primary?: LinkAction;
  secondary?: LinkAction;
  align?: "left" | "center";
  overlay?: "soft" | "medium" | "strong";
  children?: ReactNode;
};

const overlays = {
  soft: "bg-black/25",
  medium: "bg-black/38",
  strong: "bg-black/52",
};

export function HeroLargeImage({
  eyebrow,
  title,
  subtitle,
  image,
  primary,
  secondary,
  align = "center",
  overlay = "medium",
  children,
}: HeroLargeImageProps) {
  return (
    <HeroLayout
      align={align}
      media={
        <>
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            loading="eager"
            priority={image.priority ?? true}
            sizes="100vw"
            objectPosition={image.objectPosition}
            frameClassName="h-full"
            className="h-full w-full"
          />
          <div className={cn("absolute inset-0", overlays[overlay])} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.38)_100%)]" />
        </>
      }
    >
      <div className="max-w-5xl text-white">
        {eyebrow ? (
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-5xl leading-[0.96] font-semibold tracking-[-0.04em] text-balance md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/88 md:text-xl md:leading-8">
            {subtitle}
          </p>
        ) : null}
        {primary || secondary ? (
          <div className={cn("mt-8 flex flex-wrap gap-3", align === "center" && "justify-center")}>
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
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs tracking-[0.18em] text-white/75 uppercase md:flex">
        <ArrowDown size={14} aria-hidden="true" />
        Scroll
      </div>
    </HeroLayout>
  );
}
