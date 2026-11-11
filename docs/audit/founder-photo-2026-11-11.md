# Founder photograph integration

User supplied `重庆国际旅行商大会团队肖像.png` as a founder photograph and requested implementation. Added a web-optimized asset at `public/company/founder-chongqing-travel-agents-2026.webp` (1024 × 1536; 150,098 bytes from a 2,001,740-byte original). Original file retained unchanged.

The image is shown in full at its 2:3 ratio on the founder page and About's founder section. Two people remain visible; no specific left/right identity or second person's role is inferred. The caption uses the event title, date and location visible in the supplied photograph: 2026 Chongqing International Travel Agents Matchmaking Session, April 26, 2026, Chongqing, China. No award, endorsement or partnership is implied.

Page backgrounds remain white; blue is confined to the original photograph. The founder hero uses text and image columns on desktop, stacked on mobile. Image dimensions reserve layout space; founder hero photo loads with priority, About photo uses default lazy loading.

Validation: inspected the compressed image; TypeScript, targeted ESLint and whitespace checks passed. The full build stopped in its social-media generation pre-step because the sandbox denied tsx's IPC socket (`listen EPERM`), before Next.js compilation. Browser rendering has not been verified.
