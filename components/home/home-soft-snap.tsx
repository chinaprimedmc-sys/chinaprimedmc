"use client";

import { useEffect } from "react";

export function HomeSoftSnap() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!desktop.matches || reducedMotion.matches) return;

    let scrollTimer = 0;
    let animationFrame = 0;
    let isAnimating = false;
    let lastScrollY = window.scrollY;
    let direction: "up" | "down" = "down";

    function getTargets() {
      return Array.from(
        document.querySelectorAll<HTMLElement>(
          ".home-immersive-page > section, [data-home-snap-point]",
        ),
      )
        .map((element) => element.getBoundingClientRect().top + window.scrollY)
        .sort((a, b) => a - b);
    }

    function cancelSnap() {
      if (!isAnimating) return;
      window.cancelAnimationFrame(animationFrame);
      isAnimating = false;
    }

    function animateTo(target: number) {
      cancelSnap();

      const start = window.scrollY;
      const distance = target - start;
      if (Math.abs(distance) < 3) return;

      const startedAt = performance.now();
      const duration = Math.min(620, Math.max(420, 360 + Math.abs(distance) * 1.15));
      isAnimating = true;

      function step(now: number) {
        if (!isAnimating) return;
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;

        window.scrollTo(0, start + distance * eased);

        if (progress < 1) {
          animationFrame = window.requestAnimationFrame(step);
          return;
        }

        isAnimating = false;
      }

      animationFrame = window.requestAnimationFrame(step);
    }

    function settleNearChapter() {
      if (isAnimating) return;

      const current = window.scrollY;
      const activeScrollStage = Array.from(
        document.querySelectorAll<HTMLElement>("[data-home-scroll-stage]"),
      ).find((element) => {
        const top = element.getBoundingClientRect().top + window.scrollY;
        const finalPinnedPosition = top + element.offsetHeight - window.innerHeight;
        return current > top + 4 && current < finalPinnedPosition - 4;
      });

      if (activeScrollStage) return;

      const targets = getTargets();
      const directionalTargets = targets.filter((target) =>
        direction === "down" ? target >= current - 24 : target <= current + 24,
      );
      const rankedTargets = (directionalTargets.length ? directionalTargets : targets)
        .map((target) => ({ target, distance: Math.abs(target - current) }))
        .sort((a, b) => a.distance - b.distance);
      const closest = rankedTargets[0];
      const nearest = closest?.target;
      const distance =
        nearest === undefined ? Number.POSITIVE_INFINITY : Math.abs(nearest - current);
      const threshold = Math.min(180, Math.max(112, window.innerHeight * 0.2));

      if (nearest === undefined || distance < 4 || distance > threshold) return;

      animateTo(nearest);
    }

    const supportsScrollEnd = "onscrollend" in window;
    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      if (!isAnimating && Math.abs(nextScrollY - lastScrollY) > 1) {
        direction = nextScrollY > lastScrollY ? "down" : "up";
      }
      lastScrollY = nextScrollY;
      if (isAnimating) return;
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(settleNearChapter, supportsScrollEnd ? 260 : 320);
    };

    const handleScrollEnd = () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(settleNearChapter, 110);
    };

    const interruptSnap = () => {
      window.clearTimeout(scrollTimer);
      cancelSnap();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", interruptSnap, { passive: true });
    window.addEventListener("touchstart", interruptSnap, { passive: true });
    window.addEventListener("pointerdown", interruptSnap, { passive: true });
    window.addEventListener("keydown", interruptSnap);
    if (supportsScrollEnd) window.addEventListener("scrollend", handleScrollEnd);

    return () => {
      window.clearTimeout(scrollTimer);
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scrollend", handleScrollEnd);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", interruptSnap);
      window.removeEventListener("touchstart", interruptSnap);
      window.removeEventListener("pointerdown", interruptSnap);
      window.removeEventListener("keydown", interruptSnap);
    };
  }, []);

  return null;
}
