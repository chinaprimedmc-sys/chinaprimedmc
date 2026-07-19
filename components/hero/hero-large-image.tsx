import { ArrowDown } from "lucide-react";
import type { ReactNode } from "react";

import { CtaButton } from "@/components/cta";
import { RotatingHeroTitle } from "@/components/hero/rotating-hero-title";
import { WhatsAppIcon } from "@/components/icons";
import { HeroLayout } from "@/components/layout";
import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import type { LinkAction, MediaAsset } from "@/types/component-library";

type HeroLargeImageProps = {
  eyebrow?: string;
  brandLockup?: {
    name: string;
    descriptor: string;
  };
  title: string;
  rotatingTitle?: {
    fixedText: string;
    items: string[];
  };
  subtitle?: string;
  image: MediaAsset;
  primary?: LinkAction;
  secondary?: LinkAction;
  align?: "left" | "center";
  composition?: "default" | "editorial";
  overlay?: "subtle" | "soft" | "medium" | "strong";
  children?: ReactNode;
};

const overlays = {
  subtle: "bg-black/20",
  soft: "bg-black/25",
  medium: "bg-black/38",
  strong: "bg-black/52",
};

export function HeroLargeImage({
  eyebrow,
  brandLockup,
  title,
  rotatingTitle,
  subtitle,
  image,
  primary,
  secondary,
  align = "center",
  composition = "default",
  overlay = "medium",
  children,
}: HeroLargeImageProps) {
  if (composition === "editorial") {
    return (
      <section className="home-hero-split relative overflow-hidden bg-[var(--bg-primary)]">
        <div className="home-hero-split__inner">
          <div className="home-hero-split__copy">
            <div className="w-full max-w-[34rem] min-w-0">
              {brandLockup ? (
                <div
                  className="home-hero-brand"
                  aria-label={`${brandLockup.name}, ${brandLockup.descriptor}`}
                >
                  <span className="home-hero-brand__wordmark">{brandLockup.name}</span>
                  <span className="home-hero-brand__descriptor">{brandLockup.descriptor}</span>
                </div>
              ) : eyebrow ? (
                <p className="hero-eyebrow mb-6 text-[0.68rem] text-[var(--text-secondary)] md:mb-7">
                  {eyebrow}
                </p>
              ) : null}
              <h1 className="home-hero-split__title max-w-full font-serif text-[clamp(3rem,13vw,4rem)] leading-[0.95] font-medium tracking-[-0.01em] text-balance break-words text-[var(--text-primary)] md:text-[clamp(4.4rem,5.6vw,6.5rem)] md:leading-[0.92] md:tracking-[-0.015em]">
                {rotatingTitle ? <RotatingHeroTitle {...rotatingTitle} /> : title}
              </h1>
              {subtitle ? (
                <p className="mx-auto mt-7 max-w-[31rem] text-base leading-7 text-[var(--text-secondary)] md:mx-0 md:mt-9 md:text-lg md:leading-8">
                  {subtitle}
                </p>
              ) : null}
              {primary || secondary ? (
                <div className="mt-8 flex w-full flex-wrap justify-center gap-3 md:mt-10 md:justify-start">
                  {primary ? (
                    <CtaButton
                      href={primary.href}
                      variant="lightFrosted"
                      size="sm"
                      className="min-h-12 px-6 py-3.5 sm:px-8"
                    >
                      {primary.label}
                    </CtaButton>
                  ) : null}
                  {secondary ? (
                    <CtaButton
                      href={secondary.href}
                      variant="whatsappFrosted"
                      size="sm"
                      target="_blank"
                      rel="noreferrer"
                      className="min-h-12 flex-row gap-2.5 px-6 py-3.5 sm:px-8"
                    >
                      <WhatsAppIcon className="size-[19px] shrink-0" />
                      <span>{secondary.label}</span>
                    </CtaButton>
                  ) : null}
                </div>
              ) : null}
              {children}
            </div>
          </div>

          <div className="home-hero-split__media">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              loading="eager"
              priority={image.priority ?? true}
              sizes="(min-width: 768px) 58vw, calc(100vw - 1.5rem)"
              objectPosition={image.objectPosition}
              frameClassName="h-full w-full bg-transparent"
              className="home-hero-split__image h-full w-full object-contain object-bottom md:object-right-bottom"
            />
            <div className="home-hero-split__blend" aria-hidden="true" />
          </div>
        </div>
      </section>
    );
  }

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
          <div className={cn("absolute inset-0 z-10", overlays[overlay])} />
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_42%,transparent_0%,rgba(0,0,0,0.1)_42%,rgba(0,0,0,0.38)_100%)]" />
        </>
      }
    >
      <div className="hero-copy-contrast relative z-20 w-full max-w-5xl min-w-0 text-white">
        {eyebrow ? <p className="hero-eyebrow mb-5 text-xs text-white/80">{eyebrow}</p> : null}
        <h1 className="max-w-full font-serif text-[clamp(2.6rem,12vw,4rem)] leading-[0.98] font-medium tracking-[-0.01em] text-balance break-words md:text-7xl md:tracking-[-0.015em] lg:text-8xl">
          {rotatingTitle ? <RotatingHeroTitle {...rotatingTitle} /> : title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/88 md:text-xl md:leading-8">
            {subtitle}
          </p>
        ) : null}
        {primary || secondary ? (
          <div
            className={cn(
              "mt-8 flex w-full flex-wrap gap-3",
              align === "center" && "justify-center",
            )}
          >
            {primary ? (
              <CtaButton
                href={primary.href}
                variant="primary"
                size="sm"
                className="min-h-12 px-5 py-3 sm:min-h-14 sm:px-8 sm:py-4"
              >
                {primary.label}
              </CtaButton>
            ) : null}
            {secondary ? (
              <CtaButton
                href={secondary.href}
                variant="glass"
                size="sm"
                className="min-h-12 px-5 py-3 sm:min-h-14 sm:px-8 sm:py-4"
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
