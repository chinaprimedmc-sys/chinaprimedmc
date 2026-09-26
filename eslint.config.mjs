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
    "supabase/.temp/**",
  ]),
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
