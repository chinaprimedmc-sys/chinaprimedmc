/**
 * 全站按钮语义：正式变体承担清晰职责，旧名称仅作为迁移期兼容别名。
 * 页面不得新增视觉变体；需要不同语义时应先扩展此处的设计契约。
 */
const primary =
  "border border-[var(--color-ink)] bg-[var(--color-ink)] text-white hover:border-[var(--color-forest)] hover:bg-[var(--color-forest)]";

const secondary =
  "border border-[var(--color-ink)] bg-transparent text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-white";

const text =
  "border border-transparent bg-transparent px-0 text-[var(--color-ink)] shadow-none underline decoration-[var(--color-line-strong)] underline-offset-4 hover:decoration-[var(--color-forest)]";

const darkOnLight = primary;

const lightOnImage =
  "border border-white bg-white text-[var(--color-ink)] hover:bg-transparent hover:text-white";

const glass =
  "glass-action rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface-strong)] text-[var(--color-ink)] shadow-[var(--button-glass-shadow)] backdrop-blur-2xl [-webkit-backdrop-filter:var(--glass-filter)] hover:bg-white";

const whatsappFrosted =
  "border border-[var(--color-forest)] bg-[var(--color-forest)] text-white hover:border-[var(--color-forest-hover)] hover:bg-[var(--color-forest-hover)]";

export const buttonVariants = {
  primary,
  secondary,
  text,
  darkOnLight,
  lightOnImage,
  glass,

  /* 迁移期兼容：现有调用保持功能，视觉统一到上面的五个语义变体。 */
  explore: secondary,
  light: lightOnImage,
  outline: secondary,
  frosted: glass,
  frostedSubtle: glass,
  lightFrosted: glass,
  lightFrostedSubtle: glass,
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
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] font-semibold tracking-normal transition-[background-color,border-color,color,transform] duration-[var(--motion-duration-micro)] ease-[var(--motion-ease-out)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none";

export const iconButtonStyles =
  "glass-action grid size-11 shrink-0 place-items-center rounded-full border border-[var(--glass-border)] bg-[var(--glass-surface-strong)] text-[var(--color-ink)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-xl [-webkit-backdrop-filter:var(--glass-filter)] transition-[background-color,border-color,color,transform] duration-[var(--motion-duration-micro)] active:scale-[0.98] hover:border-[var(--color-line-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-focus)] disabled:pointer-events-none disabled:opacity-40 motion-reduce:transition-none";
