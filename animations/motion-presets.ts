import type { Variants } from "framer-motion";

import { motionTokens } from "@/design-system/tokens";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: motionTokens.duration.base, ease: motionTokens.ease.enter },
  },
};

export const reveal: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 0 16% 0)" },
  visible: {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease.apple },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: motionTokens.duration.base, ease: motionTokens.ease.enter },
  },
};

export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.045,
    transition: { duration: motionTokens.duration.slow, ease: motionTokens.ease.apple },
  },
};
