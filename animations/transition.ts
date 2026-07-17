import { motionTokens } from "@/design-system/tokens";

export const transitions = {
  page: {
    duration: motionTokens.duration.transition,
    ease: motionTokens.easing.inOut,
  },
  micro: {
    duration: motionTokens.duration.micro,
    ease: motionTokens.easing.out,
  },
  cinematic: {
    duration: motionTokens.duration.transition,
    ease: motionTokens.easing.inOut,
  },
} as const;
