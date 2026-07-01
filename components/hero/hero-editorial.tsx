import { CtaButton } from "@/components/cta";
import { HeroLayout } from "@/components/layout";
import { OptimizedImage } from "@/components/media/optimized-image";
import type { LinkAction, MediaAsset } from "@/types/component-library";

type HeroEditorialProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: MediaAsset;
  primary?: LinkAction;
  secondary?: LinkAction;
};

export function HeroEditorial({
  eyebrow,
  title,
  subtitle,
  image,
  primary,
  secondary,
}: HeroEditorialProps) {
  return (
    <HeroLayout
      align="left"
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
            frameClassName="absolute inset-0 z-0 h-full"
            className="h-full w-full"
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
        {eyebrow ? (
          <p className="mb-5 text-xs font-semibold tracking-[0.22em] text-white/80 uppercase">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-balance md:text-7xl lg:text-8xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/86 md:text-xl md:leading-8">
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
      </div>
    </HeroLayout>
  );
}
