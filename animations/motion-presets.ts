import type { Variants } from "framer-motion";

import { motionTokens } from "@/design-system/tokens";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: motionTokens.offset.enter },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
  },
};

export const reveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 0 16% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: motionTokens.duration.transition, ease: motionTokens.easing.inOut },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
  },
};

export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.045,
    transition: { duration: motionTokens.duration.enter, ease: motionTokens.easing.out },
  },
};
