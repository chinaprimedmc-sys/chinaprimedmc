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
  journeySlug?: string;
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
  journeySlug,
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
              <h1 className="type-hero home-hero-split__title max-w-full break-words text-[var(--text-primary)]">
                {rotatingTitle ? <RotatingHeroTitle {...rotatingTitle} /> : title}
              </h1>
              {subtitle ? (
                <p className="type-body mx-auto mt-7 max-w-[31rem] text-[var(--text-secondary)] md:mx-0 md:mt-9">
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
                      data-cta-placement="hero"
                      data-journey-slug={journeySlug}
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
                      data-cta-placement="hero-secondary"
                      data-journey-slug={journeySlug}
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
        <h1 className="type-hero max-w-full break-words">
          {rotatingTitle ? <RotatingHeroTitle {...rotatingTitle} /> : title}
        </h1>
        {subtitle ? (
          <p className="type-body mx-auto mt-6 max-w-2xl text-white/88">{subtitle}</p>
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
                variant="light"
                size="sm"
                className="min-h-12 px-5 py-3 sm:min-h-14 sm:px-8 sm:py-4"
                data-cta-placement="hero"
                data-journey-slug={journeySlug}
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
                data-cta-placement="hero-secondary"
                data-journey-slug={journeySlug}
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
