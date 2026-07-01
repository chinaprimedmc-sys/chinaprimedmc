export const motionTokens = {
  duration: {
    instant: 0.12,
    fast: 0.2,
    base: 0.36,
    slow: 0.72,
    cinematic: 1.2,
  },
  ease: {
    standard: [0.22, 1, 0.36, 1],
    enter: [0.16, 1, 0.3, 1],
    exit: [0.7, 0, 0.84, 0],
    apple: [0.2, 0.8, 0.2, 1],
  },
} as const;
