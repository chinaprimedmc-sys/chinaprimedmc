export const i18nConfig = {
  defaultLocale: "en",
  locales: ["en", "de", "fr", "it"] as const,
  defaultCurrency: "USD",
  supportedCurrencies: ["USD", "EUR", "GBP", "AUD", "CAD"] as const,
  defaultTimeZone: "Asia/Shanghai",
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
export type Currency = (typeof i18nConfig.supportedCurrencies)[number];
