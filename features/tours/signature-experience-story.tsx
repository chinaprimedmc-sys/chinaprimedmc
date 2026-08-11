"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import type { TourHighlight } from "@/types/tour";

type SignatureExperienceStoryProps = {
  highlights: TourHighlight[];
};

const ease = [0.16, 1, 0.3, 1] as const;

export function SignatureExperienceStory({ highlights }: SignatureExperienceStoryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const active = highlights[activeIndex] ?? highlights[0];

  if (!active) return null;

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.72fr)] lg:gap-16">
      <div className="hidden lg:block">
        <div className="sticky top-24 h-[68svh] min-h-[34rem] overflow-hidden rounded-lg bg-[#dfe7df]">
          <AnimatePresence mode="sync" initial={false}>
            <motion.div
              key={active.title}
              className="absolute inset-0"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.985 }}
              transition={{ duration: 0.8, ease }}
            >
              <OptimizedImage
                src={active.image.src}
                alt={active.image.alt}
                fill
                sizes="62vw"
                objectPosition={active.image.objectPosition}
                frameClassName="h-full w-full bg-[#dfe7df]"
                className="h-full w-full brightness-[1.02] saturate-[1.08]"
                showSkeleton={false}
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute right-5 bottom-5 z-20 flex items-center gap-3 rounded-full border border-white/72 bg-white/78 px-4 py-2 text-xs font-semibold text-[#172019] shadow-sm backdrop-blur-xl">
            <span>{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="h-px w-8 bg-black/22" aria-hidden="true" />
            <span>{String(highlights.length).padStart(2, "0")}</span>
          </div>
        </div>
      </div>

      <div className="grid">
        {highlights.map((highlight, index) => (
          <motion.article
            key={highlight.title}
            className="grid min-h-0 content-center border-b border-black/10 py-10 first:pt-0 last:border-b-0 lg:min-h-[58vh] lg:py-16"
            onViewportEnter={() => setActiveIndex(index)}
            initial={reduceMotion ? false : { opacity: 0.36, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.56 }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="mb-6 aspect-[3/2] overflow-hidden rounded-lg bg-[#dfe7df] lg:hidden">
              <OptimizedImage
                src={highlight.image.src}
                alt={highlight.image.alt}
                width={highlight.image.width ?? 1200}
                height={highlight.image.height ?? 800}
                sizes="100vw"
                objectPosition={highlight.image.objectPosition}
                frameClassName="h-full w-full"
                className="h-full w-full"
                showSkeleton={false}
              />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.16em] text-[var(--accent)] uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-[var(--accent)]/42" aria-hidden="true" />
              <p className="text-xs font-semibold tracking-[0.12em] text-[var(--text-secondary)] uppercase">
                {highlight.category}
              </p>
            </div>
            <h3 className="mt-4 max-w-xl font-serif text-[2.5rem] leading-[0.96] font-medium md:text-[3.35rem]">
              {highlight.title}
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--text-secondary)] md:text-base">
              {highlight.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
