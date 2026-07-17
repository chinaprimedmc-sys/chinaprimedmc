export const motionTokens = {
  duration: {
    micro: 0.2,
    enter: 0.5,
    transition: 0.6,
    shimmer: 1.6,
  },
  durationMs: {
    micro: 200,
    enter: 500,
    transition: 600,
    shimmer: 1600,
  },
  durationCss: {
    micro: "200ms",
    enter: "500ms",
    transition: "600ms",
    shimmer: "1600ms",
  },
  easing: {
    out: [0.16, 1, 0.3, 1],
    inOut: [0.65, 0, 0.35, 1],
  },
  easingCss: {
    out: "cubic-bezier(0.16, 1, 0.3, 1)",
    inOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  },
  offset: {
    enter: 12,
    enterCss: "12px",
  },
} as const;
