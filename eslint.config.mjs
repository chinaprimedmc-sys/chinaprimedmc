import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import { globalIgnores } from "eslint/config";

const eslintConfig = [
  globalIgnores([
    ".next/**",
    ".vercel/**",
    ".codex-deploy/**",
    ".next-*-cache-stale-*/**",
    "artifacts/**",
    "outputs/**",
    "public/maps/vendor/**",
    "public/og/generated/**",
    "playwright-report/**",
    "test-results/**",
    ".lighthouseci/**",
  ]),
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
