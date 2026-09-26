/**
 * 全站按钮语义：五个正式变体承担清晰职责，旧名称仅作为迁移期兼容别名。
 * 页面不得新增视觉变体；需要不同语义时应先扩展此处的设计契约。
 */
const primary =
  "border border-white/80 bg-white/76 text-[var(--color-ink)] shadow-[var(--button-glass-shadow)] backdrop-blur-2xl [-webkit-backdrop-filter:blur(var(--glass-blur))_saturate(135%)] hover:border-white hover:bg-white/90 hover:shadow-[var(--button-glass-shadow-hover)]";

const secondary =
  "border border-white/72 bg-white/46 text-[var(--color-ink)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-2xl [-webkit-backdrop-filter:blur(var(--glass-blur))_saturate(130%)] hover:border-white/92 hover:bg-white/68 hover:shadow-[var(--button-glass-shadow)]";

const text =
  "rounded-[var(--radius-pill)] border border-transparent bg-transparent px-0 text-[var(--color-ink)] shadow-none underline decoration-[var(--color-line-strong)] underline-offset-4 hover:decoration-[var(--color-forest)]";

const darkOnLight = primary;

const lightOnImage =
  "border border-white/82 bg-white/72 text-[var(--color-ink)] shadow-[var(--button-glass-shadow)] backdrop-blur-2xl [-webkit-backdrop-filter:blur(var(--glass-blur))_saturate(135%)] hover:border-white hover:bg-white/88 hover:shadow-[var(--button-glass-shadow-hover)]";

const whatsappFrosted =
  "border border-[#71ee9e] bg-[#25d366]/94 text-white shadow-[0_10px_28px_rgba(37,211,102,0.26),inset_0_1px_0_rgba(255,255,255,0.42)] backdrop-blur-xl hover:border-[#8bf4b1] hover:bg-[#20c85e] hover:shadow-[0_14px_34px_rgba(37,211,102,0.32),inset_0_1px_0_rgba(255,255,255,0.5)]";

export const buttonVariants = {
  primary,
  secondary,
  text,
  darkOnLight,
  lightOnImage,

  /* 迁移期兼容：现有调用保持功能，视觉统一到上面的五个语义变体。 */
  explore: secondary,
  light: lightOnImage,
  outline: secondary,
  glass: lightOnImage,
  frosted: secondary,
  frostedSubtle: secondary,
  lightFrosted: lightOnImage,
  lightFrostedSubtle: lightOnImage,
  whatsappFrosted,
  ghost: text,
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

export const buttonSizes = {
  sm: "min-h-11 gap-2 px-5 py-2.5 text-sm",
  md: "min-h-12 gap-2.5 px-6 py-3 text-sm",
  lg: "min-h-14 gap-3 px-8 py-3.5 text-base",
} as const;

export type ButtonSize = keyof typeof buttonSizes;

export const buttonBaseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] font-semibold tracking-normal transition-[background-color,border-color,box-shadow,color,transform] duration-[var(--motion-duration-micro)] ease-[var(--motion-ease-out)] hover:-translate-y-px active:translate-y-0 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none motion-reduce:hover:transform-none";

export const iconButtonStyles =
  "grid size-11 shrink-0 place-items-center rounded-[var(--radius-pill)] border border-white/78 bg-white/62 text-[var(--color-ink)] shadow-[var(--button-glass-shadow)] backdrop-blur-2xl transition-[background-color,border-color,box-shadow,transform] duration-[var(--motion-duration-micro)] ease-[var(--motion-ease-out)] hover:-translate-y-px hover:border-white hover:bg-white/82 hover:shadow-[var(--button-glass-shadow-hover)] active:translate-y-0 active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none motion-reduce:hover:transform-none";
