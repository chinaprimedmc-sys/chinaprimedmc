# China Prime DMC Deployment Log

## 2026-10-25

- Canonical host enforcement: all non-canonical hosts (including `*.vercel.app`
  deployment aliases) now 308-redirect to `https://www.chinaprimedmc.com` at the
  proxy middleware layer when `VERCEL_ENV=production`, with `X-Robots-Tag: noindex`
  on the redirect. Preview deployments and local previews are unaffected.

## 2026-06-30

- Platform: Vercel
- Scope: `chinaprimedmc`
- Project: `chinaprimedmc`
- Production domain: `https://www.chinaprimedmc.com`
- Deployment URL: retired (superseded deployments return 404; see canonical host enforcement above)

### Changes

- Switched Vercel project preset from Vite to Next.js.
- Cleared the stale `dist/public` output directory setting.
- Deployed the Next.js 16 app to production.
- Added server-side HTTP Basic Auth protection for `/admin`, `/component-showcase`, and `/component-playground`.

### Required Production Environment

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `NEXT_PUBLIC_SITE_URL`
- `INQUIRY_NOTIFICATION_EMAIL`

### Verification

- `https://www.chinaprimedmc.com/` returned `200`.
- `https://www.chinaprimedmc.com/contact` returned `200`.
- `https://www.chinaprimedmc.com/journal` returned `200`.
- `https://www.chinaprimedmc.com/admin/settings` returned `401` without credentials.
- `https://www.chinaprimedmc.com/admin/settings` returned `200` with valid credentials.
- `https://chinaprimedmc.com/*` redirects to `https://www.chinaprimedmc.com/*`.
