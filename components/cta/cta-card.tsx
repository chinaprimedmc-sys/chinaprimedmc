import type { ReactNode } from "react";

import { CtaButton } from "@/components/cta/cta-button";
import { OptimizedImage } from "@/components/media/optimized-image";
import { cn } from "@/lib/utils/cn";
import type { LinkAction, MediaAsset } from "@/types/component-library";

type CtaCardProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primary?: LinkAction;
  secondary?: LinkAction;
  media?: ReactNode;
  image?: MediaAsset;
  variant?: "solid" | "glass" | "image";
  className?: string;
};

export function CtaCard({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  media,
  image,
  variant = "glass",
  className,
}: CtaCardProps) {
  const isImage = variant === "image";
  const primaryIsWhatsapp = primary?.href.includes("wa.me") ?? false;
  const secondaryIsWhatsapp = secondary?.href.includes("wa.me") ?? false;
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[2rem] p-6 md:p-10",
        variant === "glass" &&
          "border border-white/65 bg-white/58 shadow-[var(--shadow-glass)] backdrop-blur-2xl",
        variant === "solid" && "bg-foreground text-background",
        isImage && "min-h-96 text-white",
        className,
      )}
    >
      {isImage && image ? (
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width:1024px) 1200px, 100vw"
            objectPosition={image.objectPosition}
            frameClassName="h-full"
            className="h-full w-full"
          />
        </div>
      ) : null}
      {isImage && !image && media ? (
        <div className="absolute inset-0 z-0 [&_article]:h-full [&_article]:rounded-none [&_img]:h-full [&_img]:w-full">
          {media}
        </div>
      ) : null}
      {isImage ? <div className="absolute inset-0 z-10 bg-black/42" /> : null}
      <div className="relative z-20 max-w-2xl">
        {eyebrow ? (
          <p className="mb-4 text-xs font-semibold tracking-[0.2em] uppercase opacity-75">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-3xl leading-tight font-semibold tracking-[-0.02em] md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-xl text-base leading-7 opacity-78 md:text-lg">{description}</p>
        ) : null}
        {primary || secondary ? (
          <div className="mt-7 flex flex-wrap gap-3">
            {primary ? (
              <CtaButton
                href={primary.href}
                variant={primaryIsWhatsapp ? "whatsappFrosted" : isImage ? "light" : "primary"}
                target={primaryIsWhatsapp ? "_blank" : undefined}
                rel={primaryIsWhatsapp ? "noreferrer" : undefined}
              >
                {primary.label}
              </CtaButton>
            ) : null}
            {secondary ? (
              <CtaButton
                href={secondary.href}
                variant={secondaryIsWhatsapp ? "whatsappFrosted" : isImage ? "glass" : "outline"}
                target={secondaryIsWhatsapp ? "_blank" : undefined}
                rel={secondaryIsWhatsapp ? "noreferrer" : undefined}
              >
                {secondary.label}
              </CtaButton>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
