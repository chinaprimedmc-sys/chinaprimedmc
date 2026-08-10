"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { PointerEvent } from "react";

import { CtaButton } from "@/components/cta";
import { ContentContainer } from "@/components/layout/content-container";
import type { MediaAsset } from "@/types/component-library";

type HomeHeroMotionProps = {
  desktopImage: MediaAsset;
  mobileImage: MediaAsset;
  eyebrow: string;
  title: string;
  copy: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  trustItems: string[];
};

export function HomeHeroMotion({
  desktopImage,
  mobileImage,
  eyebrow,
  title,
  copy,
  primary,
  secondary,
  trustItems,
}: HomeHeroMotionProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const parallaxX = useSpring(pointerX, { stiffness: 70, damping: 22, mass: 0.85 });
  const parallaxY = useSpring(pointerY, { stiffness: 70, damping: 22, mass: 0.85 });
  const titleWords = title.split(/\s+/).filter(Boolean);
  const copyDelay = 0.76 + titleWords.length * 0.18;

  function updateParallax(event: PointerEvent<HTMLElement>) {
    if (shouldReduceMotion || event.pointerType === "touch") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
    pointerX.set(normalizedX * -36);
    pointerY.set(normalizedY * -36);
  }

  function resetParallax() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <section
      className="home-conversion-hero home-conversion-hero--motion"
      onPointerMove={updateParallax}
      onPointerLeave={resetParallax}
    >
      <motion.div
        className="home-conversion-hero__parallax"
        style={shouldReduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
        role="img"
        aria-label={desktopImage.alt}
      >
        <picture className="home-conversion-hero__media">
          <source media="(min-width: 768px)" srcSet={desktopImage.src} type="image/avif" />
          <img
            src={mobileImage.src}
            alt=""
            width={mobileImage.width}
            height={mobileImage.height}
            loading="eager"
            fetchPriority="high"
            className="home-conversion-hero__image"
          />
        </picture>
      </motion.div>
      <div className="home-conversion-hero__shade" aria-hidden="true" />

      <ContentContainer
        size="xl"
        className="home-conversion-hero__content relative z-20 flex h-full flex-col justify-end"
      >
        <div className="max-w-[48rem] text-white">
          <motion.p
            className="home-conversion-hero__eyebrow text-xs font-semibold text-white/72 uppercase"
            initial={shouldReduceMotion ? false : { opacity: 0, x: -18, letterSpacing: "0.38em" }}
            animate={{ opacity: 1, x: 0, letterSpacing: "0.16em" }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow}
          </motion.p>

          <motion.span
            className="home-conversion-hero__gold-line"
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.85, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
          />

          <h1 className="home-conversion-hero__title mt-5 max-w-[46rem] font-serif text-[clamp(3.35rem,7.4vw,6.75rem)] leading-[0.9] font-medium text-balance">
            {titleWords.map((word, index) => (
              <span key={`${word}-${index}`}>
                <span className="home-conversion-hero__word-mask">
                  <motion.span
                    className="home-conversion-hero__word"
                    initial={shouldReduceMotion ? false : { y: "118%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 125,
                      damping: 15,
                      mass: 0.82,
                      delay: 0.58 + index * 0.18,
                    }}
                  >
                    {word}
                  </motion.span>
                </span>
                {index < titleWords.length - 1 ? " " : null}
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-[38rem] text-base leading-7 text-white/82 md:text-lg md:leading-8"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: copyDelay, ease: [0.16, 1, 0.3, 1] }}
          >
            {copy}
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-5"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: copyDelay + 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            <CtaButton href={primary.href} size="md">
              {primary.label}
            </CtaButton>
            <Link href={secondary.href} className="home-conversion-hero__secondary">
              {secondary.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="home-conversion-hero__trust"
          aria-label="Why travelers choose AVIORA"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, delay: copyDelay + 0.34, ease: [0.16, 1, 0.3, 1] }}
        >
          {trustItems.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>
      </ContentContainer>

      <Link
        href={secondary.href}
        className="home-conversion-hero__scroll"
        aria-label="See featured journeys"
      >
        <span className="home-conversion-hero__scroll-line" aria-hidden="true" />
        <ArrowDown size={15} aria-hidden="true" />
      </Link>

      <style>{`
        .home-conversion-hero__parallax {
          inset: -22px;
          pointer-events: none;
          position: absolute;
          will-change: transform;
        }

        .home-conversion-hero--motion .home-conversion-hero__image {
          animation: home-hero-ken-burns 18s ease-in-out infinite alternate;
          transform-origin: 58% 48%;
          will-change: transform;
        }

        .home-conversion-hero__gold-line {
          background: #c7a567;
          display: block;
          height: 1px;
          margin-top: 1rem;
          transform-origin: left center;
          width: clamp(4.5rem, 8vw, 7rem);
        }

        .home-conversion-hero__word-mask {
          display: inline-block;
          margin-top: -0.08em;
          overflow: hidden;
          padding-top: 0.08em;
          vertical-align: bottom;
        }

        .home-conversion-hero__word {
          display: inline-block;
          will-change: transform, opacity;
        }

        .home-conversion-hero__scroll {
          gap: 0.65rem;
        }

        .home-conversion-hero__scroll-line {
          animation: home-hero-scroll-pulse 1.8s ease-in-out infinite;
          background: #c7a567;
          display: block;
          height: 1px;
          transform-origin: center;
          width: 3.75rem;
        }

        .home-navigation-entrance .brand-wordmark {
          animation: home-nav-brand-enter 760ms cubic-bezier(0.16, 1, 0.3, 1) 80ms both;
        }

        .home-navigation-entrance nav[aria-label="Primary"] > a {
          animation: home-nav-link-enter 680ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .home-navigation-entrance nav[aria-label="Primary"] > a:nth-child(1) { animation-delay: 150ms; --nav-enter-y: -16px; }
        .home-navigation-entrance nav[aria-label="Primary"] > a:nth-child(2) { animation-delay: 210ms; --nav-enter-y: 16px; }
        .home-navigation-entrance nav[aria-label="Primary"] > a:nth-child(3) { animation-delay: 270ms; --nav-enter-y: -16px; }
        .home-navigation-entrance nav[aria-label="Primary"] > a:nth-child(4) { animation-delay: 330ms; --nav-enter-y: 16px; }
        .home-navigation-entrance nav[aria-label="Primary"] > a:nth-child(5) { animation-delay: 390ms; --nav-enter-y: -16px; }
        .home-navigation-entrance nav[aria-label="Primary"] > a:nth-child(6) { animation-delay: 450ms; --nav-enter-y: 16px; }

        .home-navigation-entrance > div > div:last-child,
        .home-navigation-entrance > div > div:nth-last-child(2) {
          animation: home-nav-actions-enter 760ms cubic-bezier(0.16, 1, 0.3, 1) 360ms both;
        }

        @keyframes home-hero-ken-burns {
          0% {
            transform: translate3d(-0.8%, 0.6%, 0) scale(1.04);
          }
          100% {
            transform: translate3d(1.2%, -1%, 0) scale(1.1);
          }
        }

        @keyframes home-hero-scroll-pulse {
          0%, 100% { opacity: 0.38; transform: scaleX(0.62); }
          50% { opacity: 1; transform: scaleX(1); }
        }

        @keyframes home-nav-brand-enter {
          from { opacity: 0; transform: translate3d(-24px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes home-nav-link-enter {
          from { opacity: 0; transform: translate3d(0, var(--nav-enter-y, -16px), 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes home-nav-actions-enter {
          from { opacity: 0; transform: translate3d(24px, 0, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @media (max-width: 767px) {
          .home-conversion-hero__parallax {
            inset: 0;
            transform: none !important;
          }

          .home-conversion-hero--motion .home-conversion-hero__image {
            animation-name: home-hero-ken-burns-mobile;
            transform-origin: 50% 50%;
          }

          .home-conversion-hero__scroll-line {
            width: 2.75rem;
          }
        }

        @keyframes home-hero-ken-burns-mobile {
          0% { transform: scale(1.035); }
          100% { transform: scale(1.075); }
        }

        @media (prefers-reduced-motion: reduce) {
          .home-conversion-hero--motion .home-conversion-hero__image,
          .home-conversion-hero__scroll-line,
          .home-navigation-entrance .brand-wordmark,
          .home-navigation-entrance nav[aria-label="Primary"] > a,
          .home-navigation-entrance > div > div:last-child,
          .home-navigation-entrance > div > div:nth-last-child(2) {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
