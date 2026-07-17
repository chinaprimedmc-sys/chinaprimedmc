import type { Variants } from "framer-motion";

import { motionTokens } from "@/design-system/tokens";

export const motionLibrary = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
    },
  },
  fadeUp: {
    hidden: { opacity: 0, y: motionTokens.offset.enter },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
    },
  },
  slide: {
    hidden: { opacity: 0, x: motionTokens.offset.enter },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
    },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
    },
  },
  reveal: {
    hidden: { opacity: 0, clipPath: "inset(0 0 18% 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0% 0)",
      transition: { duration: motionTokens.duration.transition, ease: motionTokens.easing.inOut },
    },
  },
  imageZoom: {
    rest: { scale: 1 },
    hover: {
      scale: 1.045,
      transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
    },
  },
  glassTransition: {
    initial: { opacity: 0, backdropFilter: "blur(0px)" },
    animate: {
      opacity: 1,
      backdropFilter: "blur(24px)",
      transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
    },
  },
} satisfies Record<string, Variants>;

export const viewportOnce = {
  once: true,
  margin: "-12% 0px -12% 0px",
} as const;
