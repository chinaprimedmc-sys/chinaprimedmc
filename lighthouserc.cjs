module.exports = {
  ci: {
    collect: {
      startServerCommand: "pnpm start --hostname 127.0.0.1 --port 3149",
      startServerReadyPattern: "Ready",
      url: [
        "http://127.0.0.1:3149/",
        "http://127.0.0.1:3149/tours/china-family-tour-with-pandas-12-day-private-tour",
      ],
      numberOfRuns: 3,
      settings: { chromeFlags: "--no-sandbox --disable-dev-shm-usage" },
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.8 }],
        "categories:accessibility": ["warn", { minScore: 0.95 }],
        "categories:seo": ["warn", { minScore: 0.95 }],
        "largest-contentful-paint": ["warn", { maxNumericValue: 3000 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
      },
    },
    upload: { target: "filesystem", outputDir: "artifacts/lighthouse" },
  },
};
