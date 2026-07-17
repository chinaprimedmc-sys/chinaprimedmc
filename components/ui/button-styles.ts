export const buttonVariants = {
  primary:
    "border border-[rgba(255,255,255,0.15)] bg-[rgba(22,21,18,0.7)] !text-white shadow-[0_12px_32px_rgba(22,21,18,0.14)] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] hover:bg-[rgba(22,21,18,0.78)] hover:shadow-[0_16px_38px_rgba(22,21,18,0.2)] hover:backdrop-blur-[16px]",
  secondary:
    "border border-[var(--border)] bg-[rgba(250,250,247,0.7)] text-foreground shadow-[0_10px_28px_rgba(22,21,18,0.06)] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] hover:bg-[rgba(240,239,235,0.84)] hover:backdrop-blur-[16px]",
  outline:
    "border border-foreground/22 bg-[rgba(250,250,247,0.38)] text-foreground backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] hover:border-foreground/35 hover:bg-[rgba(240,239,235,0.68)] hover:backdrop-blur-[16px]",
  ghost: "border border-transparent bg-transparent text-foreground hover:bg-foreground/5",
  glass:
    "border border-[rgba(255,255,255,0.28)] bg-[rgba(22,21,18,0.46)] !text-white shadow-[0_12px_32px_rgba(22,21,18,0.12)] backdrop-blur-[12px] [-webkit-backdrop-filter:blur(12px)] hover:bg-[rgba(22,21,18,0.58)] hover:shadow-[0_16px_38px_rgba(22,21,18,0.18)] hover:backdrop-blur-[16px]",
  frosted:
    "border border-white/50 bg-white/20 !text-white shadow-[0_14px_38px_rgba(8,18,30,0.18)] backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] hover:border-white/65 hover:bg-white/28 hover:shadow-[0_18px_46px_rgba(8,18,30,0.24)]",
  frostedSubtle:
    "border border-white/35 bg-white/10 !text-white shadow-[0_12px_32px_rgba(8,18,30,0.14)] backdrop-blur-[16px] [-webkit-backdrop-filter:blur(16px)] [text-shadow:0_1px_12px_rgba(0,0,0,0.35)] hover:border-white/55 hover:bg-white/18 hover:shadow-[0_16px_40px_rgba(8,18,30,0.2)]",
  lightFrosted:
    "border border-white/90 bg-white/72 text-[var(--text-primary)] shadow-[0_14px_36px_rgba(22,21,18,0.09)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-white hover:bg-white/88 hover:shadow-[0_18px_44px_rgba(22,21,18,0.13)]",
  lightFrostedSubtle:
    "border border-[rgba(22,21,18,0.12)] bg-white/38 text-[var(--text-primary)] shadow-[0_12px_30px_rgba(22,21,18,0.05)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-[rgba(22,21,18,0.2)] hover:bg-white/64 hover:shadow-[0_16px_38px_rgba(22,21,18,0.09)]",
  whatsappFrosted:
    "border border-[rgba(18,140,72,0.32)] bg-[rgba(37,211,102,0.24)] !text-[#075e2d] shadow-[0_12px_30px_rgba(18,140,72,0.12)] backdrop-blur-[18px] [-webkit-backdrop-filter:blur(18px)] hover:border-[rgba(18,140,72,0.44)] hover:bg-[rgba(37,211,102,0.32)] hover:shadow-[0_16px_38px_rgba(18,140,72,0.18)]",
} as const;

export const buttonSizes = {
  sm: "min-h-11 gap-2 px-5 py-3 text-sm",
  md: "min-h-14 gap-2.5 px-8 py-4 text-sm",
  lg: "min-h-16 gap-3 px-9 py-4 text-base",
} as const;

export const buttonBaseStyles =
  "inline-flex items-center justify-center rounded-lg font-medium transition-[background-color,border-color,box-shadow,backdrop-filter,opacity,transform] duration-[var(--motion-duration-micro)] ease-[var(--motion-ease-out)] focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none";
