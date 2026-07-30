"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/media/optimized-image";
import { motionTokens } from "@/design-system/tokens/motion";
import { cn } from "@/lib/utils/cn";
import type { CardMeta, ComponentVariant, LinkAction, MediaAsset } from "@/types/component-library";

type BaseMediaCardProps = {
  title: string;
  description?: string;
  image?: MediaAsset;
  href?: string;
  eyebrow?: string;
  badges?: string[];
  meta?: CardMeta[];
  action?: LinkAction;
  variant?: ComponentVariant;
  className?: string;
};

const variants = {
  small: "min-h-72",
  medium: "min-h-96",
  large: "min-h-[30rem]",
  featured: "min-h-[34rem] md:col-span-2",
};

const imageSizes = {
  small: "(min-width:1024px) 31vw, (min-width:640px) 48vw, 100vw",
  medium: "(min-width:1024px) 31vw, (min-width:640px) 48vw, 100vw",
  large: "(min-width:1024px) 62vw, 100vw",
  featured: "(min-width:1024px) 62vw, 100vw",
};

const cardHoverTransition = {
  duration: motionTokens.duration.enter,
  ease: motionTokens.easing.out,
};
const cardTapTransition = {
  duration: motionTokens.duration.micro,
  ease: motionTokens.easing.out,
};
const mediaZoom: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: cardHoverTransition },
  tap: { scale: 1.02, transition: cardTapTransition },
};

export function BaseMediaCard({
  title,
  description,
  image,
  href,
  eyebrow,
  badges,
  meta,
  action,
  variant = "medium",
  className,
}: BaseMediaCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const content = (
    <motion.article
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={
        shouldReduceMotion
          ? { rest: { y: 0 }, hover: { y: 0 }, tap: { y: 0 } }
          : {
              rest: { y: 0 },
              hover: {
                y: -6,
                transition: cardHoverTransition,
              },
              tap: {
                y: -2,
                transition: cardTapTransition,
              },
            }
      }
      className={cn(
        "group relative flex overflow-hidden rounded-[1.75rem] bg-[var(--bg-secondary)] text-white shadow-sm transition-shadow duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] hover:shadow-[0_28px_80px_rgba(43,42,37,0.18)] active:shadow-[0_18px_48px_rgba(43,42,37,0.14)] motion-reduce:transition-none",
        variants[variant],
        className,
      )}
    >
      {image ? (
        <motion.div
          variants={shouldReduceMotion ? { rest: { scale: 1 }, hover: { scale: 1 } } : mediaZoom}
          className="absolute inset-0"
        >
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            sizes={imageSizes[variant]}
            objectPosition={image.objectPosition}
            frameClassName="h-full bg-[var(--bg-secondary)]"
            className="h-full w-full motion-reduce:transform-none"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-neutral-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/34 via-black/8 to-transparent opacity-0 transition-opacity duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] group-hover:opacity-100 group-active:opacity-70 motion-reduce:transition-none" />
      <motion.div
        variants={
          shouldReduceMotion
            ? { rest: { y: 0 }, hover: { y: 0 }, tap: { y: 0 } }
            : {
                rest: { y: 0 },
                hover: { y: -8, transition: cardHoverTransition },
                tap: { y: -3, transition: cardTapTransition },
              }
        }
        className="relative z-10 mt-auto grid w-full gap-4 p-5 md:p-6"
      >
        <div className="flex flex-wrap gap-2">
          {eyebrow ? (
            <Badge className="border-white/25 bg-white/18 text-white backdrop-blur-xl">
              {eyebrow}
            </Badge>
          ) : null}
          {badges?.map((badge) => (
            <Badge key={badge} className="border-white/25 bg-white/18 text-white backdrop-blur-xl">
              {badge}
            </Badge>
          ))}
        </div>
        <div>
          <h3 className="text-2xl leading-tight font-semibold tracking-[-0.02em] md:text-3xl">
            {title}
          </h3>
          {description ? (
            <p className="mt-2 text-sm leading-6 text-white/86">{description}</p>
          ) : null}
        </div>
        {meta?.length ? (
          <dl className="grid grid-cols-2 gap-2 rounded-3xl border border-white/18 bg-white/12 p-3 text-xs backdrop-blur-xl">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-white/60">{item.label}</dt>
                <dd className="mt-1 font-semibold">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {action ? (
          <span className="inline-flex items-center gap-2 text-sm font-semibold">
            {action.label}
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        ) : null}
      </motion.div>
    </motion.article>
  );

  return href ? (
    <Link href={href} className="block focus-visible:outline-none">
      {content}
    </Link>
  ) : (
    content
  );
}
