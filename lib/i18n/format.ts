import type { Currency, Locale } from "@/config/i18n";

export function formatCurrency(value: number, currency: Currency = "USD", locale: Locale = "en") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(date: Date, locale: Locale = "en") {
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
