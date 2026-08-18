"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, ShieldCheck, ShoppingBag, UserRoundCheck } from "lucide-react";
import Link from "next/link";
import type { CSSProperties, PointerEvent } from "react";

import { ContentContainer } from "@/components/layout/content-container";
import type { MediaAsset } from "@/types/component-library";

type HomeHeroMotionProps = {
  desktopImage: MediaAsset;
  mobileImage: MediaAsset;
  eyebrow: string;
  title: string;
  copy: string;
  primary: { label: string; href: string };
  trustItems: string[];
};

export function HomeHeroMotion({
  desktopImage,
  mobileImage,
  eyebrow,
  title,
  copy,
  primary,
  trustItems,
}: HomeHeroMotionProps) {
  const shouldReduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const parallaxX = useSpring(pointerX, { stiffness: 70, damping: 22, mass: 0.85 });
  const parallaxY = useSpring(pointerY, { stiffness: 70, damping: 22, mass: 0.85 });
  const titleLines = title.split("\n").filter(Boolean);
  const trustIcons = [ShieldCheck, UserRoundCheck, ShoppingBag];

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
          <source
            media="(min-width: 768px)"
            srcSet="/home/shanghai-blue-hour-desktop-hero-1280.avif 1280w, /home/shanghai-blue-hour-desktop-hero-1600.avif 1600w, /home/shanghai-blue-hour-desktop-hero-1920.avif 1920w, /home/shanghai-blue-hour-desktop-hero.avif 2400w"
            sizes="100vw"
            type="image/avif"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/home/shanghai-blue-hour-desktop-hero-1280.webp 1280w, /home/shanghai-blue-hour-desktop-hero-1920.webp 1920w"
            sizes="100vw"
            type="image/webp"
          />
          <source
            srcSet="/home/shanghai-blue-hour-mobile-hero-480.avif 480w, /home/shanghai-blue-hour-mobile-hero-768.avif 768w"
            sizes="100vw"
            type="image/avif"
          />
          <img
            src="/home/shanghai-blue-hour-mobile-hero-768.webp"
            srcSet="/home/shanghai-blue-hour-mobile-hero-414.webp 414w, /home/shanghai-blue-hour-mobile-hero-768.webp 768w"
            sizes="100vw"
            alt=""
            width={mobileImage.width}
            height={mobileImage.height}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="home-conversion-hero__image"
            onError={(event) => {
              event.currentTarget.style.opacity = "0";
            }}
          />
        </picture>
      </motion.div>
      <div className="home-conversion-hero__shade" aria-hidden="true" />

      <ContentContainer
        size="xl"
        className="home-conversion-hero__content relative z-20 flex h-full flex-col justify-center"
      >
        <div className="max-w-[48rem] text-white">
          <p className="home-conversion-hero__eyebrow text-xs font-semibold text-white/72 uppercase">
            {eyebrow}
          </p>

          <span className="home-conversion-hero__gold-line" aria-hidden="true" />

          <h1 className="home-conversion-hero__title mt-6 max-w-[46rem]">
            {titleLines.map((line, lineIndex) => (
              <span key={line} className="home-conversion-hero__title-line-mask">
                <span
                  className="home-conversion-hero__title-line"
                  style={{ "--hero-line-index": lineIndex } as CSSProperties}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="home-conversion-hero__copy mt-7 max-w-[38rem] text-base leading-7 text-white/82 md:max-w-none md:text-lg md:leading-8 md:whitespace-nowrap">
            {copy}
          </p>

          <div className="home-conversion-hero__actions mt-7">
            <Link href={primary.href} className="home-conversion-hero__journey-cta">
              <span>{primary.label}</span>
              <span className="home-conversion-hero__journey-arrow" aria-hidden="true">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </ContentContainer>

      <div className="home-conversion-hero__trust-dock" aria-label="Why travelers choose AVIORA">
        <ContentContainer size="xl">
          <div className="home-conversion-hero__trust-standard">
            <span className="home-conversion-hero__trust-label">The AVIORA standard</span>
            <div className="home-conversion-hero__trust-items">
              {trustItems.map((item, index) => {
                const TrustIcon = trustIcons[index] ?? ShieldCheck;

                return (
                  <span key={item}>
                    <TrustIcon size={18} strokeWidth={1.55} aria-hidden="true" />
                    <span>{item}</span>
                  </span>
                );
              })}
            </div>
          </div>
        </ContentContainer>
      </div>

      <Link
        href="#aviora-standard"
        className="home-conversion-hero__scroll"
        aria-label="Discover the AVIORA standard"
      >
        <span className="home-conversion-hero__scroll-line" aria-hidden="true" />
        <ArrowDown size={15} aria-hidden="true" />
      </Link>

      <style>{`
        .home-conversion-hero--motion .home-conversion-hero__content {
          padding-block: var(--site-nav-offset);
        }

        .home-conversion-hero--motion .home-conversion-hero__content > div,
        .home-conversion-hero--motion .home-conversion-hero__trust-standard {
          margin-left: clamp(1rem, 3.5vw, 3.5rem);
        }

        .home-conversion-hero--motion {
          font-family: var(--font-cormorant);
        }

        .home-conversion-hero--motion .home-conversion-hero__title {
          display: grid;
          font-family: var(--font-cormorant);
          font-feature-settings: "kern" 1, "liga" 1;
          font-size: var(--type-hero, 3.875rem);
          font-synthesis: none;
          font-weight: 500;
          letter-spacing: 0;
          line-height: 1.02;
          row-gap: 0.15em;
          text-shadow: 0 2px 24px rgba(2, 12, 20, 0.2);
          text-rendering: optimizeLegibility;
        }

        .home-conversion-hero--motion .home-conversion-hero__eyebrow {
          color: rgba(255, 255, 255, 0.86);
          font-size: var(--type-eyebrow, 0.8125rem);
          font-weight: 600;
          letter-spacing: 0;
          line-height: 1.2;
        }

        .home-conversion-hero--motion .home-conversion-hero__copy {
          color: rgba(255, 255, 255, 0.96);
          font-size: var(--type-lead, 1.25rem);
          font-weight: 500;
          line-height: 1.45;
          text-shadow: 0 2px 16px rgba(2, 12, 20, 0.38);
        }

        .home-conversion-hero--motion .home-conversion-hero__copy,
        .home-conversion-hero--motion .home-conversion-hero__actions {
          margin-top: 2rem;
        }

        .home-conversion-hero__title-line-mask {
          display: block;
          margin-block: -0.06em -0.12em;
          overflow: hidden;
          padding-block: 0.06em 0.12em;
          white-space: nowrap;
        }

        .home-conversion-hero__title-line {
          display: block;
          will-change: transform, opacity;
        }

        .home-conversion-hero--motion .home-conversion-hero__actions {
          align-items: center;
          display: flex;
        }

        .home-conversion-hero--motion .home-conversion-hero__journey-cta {
          animation: home-hero-cta-breathe 3.8s ease-in-out infinite;
          align-items: center;
          backdrop-filter: blur(18px) saturate(125%);
          -webkit-backdrop-filter: blur(18px) saturate(125%);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.07));
          border: 1px solid rgba(255, 255, 255, 0.46);
          border-radius: 999px;
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.28),
            inset 0 -1px 0 rgba(255, 255, 255, 0.06),
            0 8px 24px rgba(4, 15, 23, 0.16),
            0 0 24px rgba(230, 244, 252, 0.14);
          color: white;
          display: inline-flex;
          font-size: var(--type-action, 1rem);
          font-weight: 600;
          gap: 0.65rem;
          isolation: isolate;
          justify-content: space-between;
          min-height: 2.85rem;
          overflow: hidden;
          padding: 0.35rem 1.05rem 0.35rem 1.1rem;
          position: relative;
          text-decoration: none;
          transition:
            border-color 320ms ease,
            box-shadow 360ms ease,
            translate 280ms cubic-bezier(0.16, 1, 0.3, 1);
          translate: 0 0;
          will-change: transform;
        }

        .home-conversion-hero--motion .home-conversion-hero__journey-cta::after {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.72), transparent);
          content: "";
          height: 1px;
          left: 16%;
          opacity: 0.62;
          pointer-events: none;
          position: absolute;
          right: 16%;
          top: 0;
        }

        .home-conversion-hero--motion .home-conversion-hero__journey-cta:hover,
        .home-conversion-hero--motion .home-conversion-hero__journey-cta:focus-visible {
          border-color: rgba(255, 255, 255, 0.68);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.36),
            inset 0 -1px 0 rgba(255, 255, 255, 0.08),
            0 10px 28px rgba(4, 15, 23, 0.18),
            0 0 34px rgba(230, 244, 252, 0.28);
          translate: 0 -2px;
        }

        .home-conversion-hero--motion .home-conversion-hero__journey-cta:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.92);
          outline-offset: 0.25rem;
        }

        .home-conversion-hero--motion .home-conversion-hero__journey-arrow {
          align-items: center;
          color: rgba(255, 255, 255, 0.92);
          display: flex;
          flex: 0 0 1.1rem;
          height: 1.1rem;
          justify-content: center;
          position: relative;
          width: 1.1rem;
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-dock {
          bottom: clamp(5rem, 8vh, 6.5rem);
          left: 0;
          pointer-events: none;
          position: absolute;
          right: 0;
          z-index: 24;
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-standard {
          max-width: 36rem;
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-label {
          color: rgba(255, 255, 255, 0.82);
          display: block;
          font-size: var(--type-eyebrow, 0.8125rem);
          font-weight: 600;
          letter-spacing: 0;
          line-height: 1;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-items {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          padding-top: 0.9rem;
          position: relative;
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-items::before {
          animation: home-hero-line-breathe 3.6s ease-in-out 0.45s infinite;
          background: rgba(255, 255, 255, 0.52);
          box-shadow: 0 0 10px rgba(226, 242, 251, 0.12);
          content: "";
          height: 1px;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          transform-origin: left center;
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-items span {
          align-items: center;
          color: rgba(255, 255, 255, 0.96);
          display: inline-flex;
          font-size: var(--type-meta, 0.9375rem);
          font-weight: 600;
          gap: 0.55rem;
          line-height: 1.4;
          min-height: 1.85rem;
          padding-inline: 1rem;
          white-space: nowrap;
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-items span > svg {
          color: rgba(255, 255, 255, 0.82);
          flex: 0 0 auto;
          filter: drop-shadow(0 0 8px rgba(226, 242, 251, 0.16));
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-items span:first-child {
          padding-left: 0;
        }

        .home-conversion-hero--motion .home-conversion-hero__trust-items span + span {
          border-left: 1px solid rgba(255, 255, 255, 0.28);
        }

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
          display: block;
          height: 1px;
          margin-top: 1rem;
          position: relative;
          transform-origin: left center;
          width: clamp(4.5rem, 8vw, 7rem);
        }

        .home-conversion-hero__gold-line::after {
          animation: home-hero-line-breathe 3.6s ease-in-out infinite;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 0 10px rgba(226, 242, 251, 0.16);
          content: "";
          inset: 0;
          position: absolute;
          transform-origin: left center;
        }

        .home-conversion-hero__scroll {
          gap: 0.65rem;
        }

        .home-conversion-hero__scroll-line {
          animation: home-hero-scroll-pulse 1.8s ease-in-out infinite;
          background: rgba(255, 255, 255, 0.68);
          display: block;
          height: 1px;
          transform-origin: center;
          width: 3.75rem;
        }

        .home-navigation-entrance:not(.is-scrolled) .brand-wordmark {
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

        @keyframes home-hero-line-breathe {
          0%, 100% { opacity: 0.52; transform: scaleX(0.76); }
          50% { opacity: 1; transform: scaleX(1); }
        }

        @keyframes home-hero-cta-breathe {
          0%, 100% { transform: scale(0.985); }
          50% { transform: scale(1.02); }
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

        @media (min-width: 768px) and (prefers-reduced-motion: no-preference) {
          .home-conversion-hero--motion .home-conversion-hero__eyebrow {
            animation: home-hero-detail-enter 720ms cubic-bezier(0.16, 1, 0.3, 1) 120ms both;
          }

          .home-conversion-hero--motion .home-conversion-hero__gold-line {
            animation: home-hero-line-enter 760ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both;
          }

          .home-conversion-hero--motion .home-conversion-hero__title-line {
            animation: home-hero-text-settle 820ms cubic-bezier(0.16, 1, 0.3, 1)
              calc(260ms + var(--hero-line-index, 0) * 90ms) both;
          }

          .home-conversion-hero--motion .home-conversion-hero__copy {
            animation: home-hero-text-settle 720ms cubic-bezier(0.16, 1, 0.3, 1) 420ms both;
          }

          .home-conversion-hero--motion .home-conversion-hero__actions,
          .home-conversion-hero--motion .home-conversion-hero__trust-dock {
            animation: home-hero-detail-enter 720ms cubic-bezier(0.16, 1, 0.3, 1) 520ms both;
          }
        }

        @keyframes home-hero-text-settle {
          from { transform: translate3d(0, 10px, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        @keyframes home-hero-detail-enter {
          from { opacity: 0; transform: translate3d(0, 8px, 0); }
          to { opacity: 1; transform: translate3d(0, 0, 0); }
        }

        @keyframes home-hero-line-enter {
          from { transform: scaleX(0.35); }
          to { transform: scaleX(1); }
        }

        @media (max-width: 767px) {
          .home-conversion-hero--motion .home-conversion-hero__content {
            padding-bottom: 8.75rem;
            padding-top: 6.8rem;
          }

          .home-conversion-hero--motion .home-conversion-hero__content > div,
          .home-conversion-hero--motion .home-conversion-hero__trust-standard {
            margin-left: 0;
          }

          .home-conversion-hero--motion .home-conversion-hero__title {
            font-size: var(--type-hero, 2.4375rem);
            line-height: 1.06;
            row-gap: 0.12em;
          }

          .home-conversion-hero--motion .home-conversion-hero__copy {
            font-size: 0.82rem;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 1.5;
            margin-top: 1.35rem;
            max-width: none;
            white-space: nowrap;
          }

          .home-conversion-hero--motion .home-conversion-hero__actions {
            margin-top: 1.35rem;
          }

          .home-conversion-hero--motion .home-conversion-hero__journey-cta {
            font-size: var(--type-action, 0.9375rem);
            min-height: 2.75rem;
            padding: 0.32rem 0.85rem 0.32rem 0.95rem;
          }

          .home-conversion-hero--motion .home-conversion-hero__journey-arrow {
            flex-basis: 1.05rem;
            height: 1.05rem;
            width: 1.05rem;
          }

          .home-conversion-hero--motion .home-conversion-hero__trust-dock {
            bottom: 5.1rem;
          }

          .home-conversion-hero--motion .home-conversion-hero__trust-standard {
            max-width: 100%;
          }

          .home-conversion-hero--motion .home-conversion-hero__trust-label {
            font-size: var(--type-eyebrow, 0.75rem);
            margin-bottom: 0.7rem;
          }

          .home-conversion-hero--motion .home-conversion-hero__trust-items {
            padding-top: 0.75rem;
          }

          .home-conversion-hero--motion .home-conversion-hero__trust-items span {
            flex-direction: column;
            font-size: var(--type-meta, 0.875rem);
            gap: 0.38rem;
            justify-content: center;
            padding-inline: clamp(0.35rem, 2vw, 0.65rem);
            text-align: center;
            white-space: normal;
          }

          .home-conversion-hero--motion .home-conversion-hero__trust-items span > svg {
            height: 1rem;
            width: 1rem;
          }

          .home-conversion-hero--motion .home-conversion-hero__trust-items span:first-child {
            padding-left: 0;
          }

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
          .home-conversion-hero--motion .home-conversion-hero__journey-cta,
          .home-conversion-hero--motion .home-conversion-hero__trust-items::before,
          .home-conversion-hero__gold-line::after,
          .home-conversion-hero__scroll-line,
          .home-navigation-entrance:not(.is-scrolled) .brand-wordmark,
          .home-navigation-entrance nav[aria-label="Primary"] > a,
          .home-navigation-entrance > div > div:last-child,
          .home-navigation-entrance > div > div:nth-last-child(2) {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .home-conversion-hero--motion .home-conversion-hero__journey-cta {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
