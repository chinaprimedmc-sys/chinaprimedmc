# China Prime DMC V2.0 Architecture

## Purpose

This foundation establishes a long-lived Next.js 16 frontend architecture before any business pages are built.

## Principles

- Pages assemble sections and features.
- Features own business logic.
- Components remain reusable and brand-system driven.
- Design tokens are the source of visual truth.
- Animation comes from the motion system.
- SEO and structured data are generated through shared helpers.
- B2C and future B2B modules stay isolated.

## Directory Map

- `app/`: Next.js App Router, root layout, metadata, loading, not-found, sitemap, robots.
- `components/`: reusable UI, foundation, and media components.
- `animations/`: shared Framer Motion and GSAP-ready motion presets.
- `design-system/`: tokens and primitives.
- `features/`: future business domains.
- `sections/`: future page sections composed from components and features.
- `layouts/`: future shared layout shells.
- `hooks/`: reusable React hooks.
- `services/`: external APIs, server actions, CMS, email, analytics.
- `lib/`: utilities, SEO helpers, i18n helpers.
- `providers/`: app-level client providers.
- `types/`: shared TypeScript contracts.
- `constants/`: global constants such as navigation.
- `content/`: future MDX/data content.
- `config/`: site, i18n, and runtime configuration.
- `styles/`: Tailwind v4 global stylesheet.

## Guardrails

- Do not add page-specific styling outside the design system unless a component abstraction is missing.
- Do not write animation variants inside pages.
- Do not hard-code colors, spacing, motion curves, or breakpoints in page files.
- Do not mix B2B and B2C feature logic.
