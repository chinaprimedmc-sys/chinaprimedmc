import { CtaButton } from "@/components/cta";
import { ContentContainer } from "@/components/layout";
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
    <section className="bg-background min-h-[82svh] py-24 md:py-32">
      <ContentContainer size="xl" className="grid items-end gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="pb-4">
          {eyebrow ? (
            <p className="text-muted mb-5 text-xs font-semibold tracking-[0.22em] uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-5xl leading-[0.94] font-semibold tracking-[-0.04em] md:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="text-muted mt-6 max-w-xl text-base leading-7 md:text-lg">{subtitle}</p>
          ) : null}
          {primary || secondary ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {primary ? <CtaButton href={primary.href}>{primary.label}</CtaButton> : null}
              {secondary ? (
                <CtaButton href={secondary.href} variant="outline">
                  {secondary.label}
                </CtaButton>
              ) : null}
            </div>
          ) : null}
        </div>
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          width={image.width ?? 1200}
          height={image.height ?? 1400}
          sizes="(min-width:1024px) 52vw, 100vw"
          frameClassName="aspect-[4/5] rounded-[2.25rem]"
          className="h-full w-full"
          priority={image.priority}
        />
      </ContentContainer>
    </section>
  );
}
