import { motionTokens } from "@/design-system/tokens";

export const transitions = {
  page: {
    duration: motionTokens.duration.slow,
    ease: motionTokens.ease.apple,
  },
  micro: {
    duration: motionTokens.duration.fast,
    ease: motionTokens.ease.standard,
  },
  cinematic: {
    duration: motionTokens.duration.cinematic,
    ease: motionTokens.ease.apple,
  },
} as const;
