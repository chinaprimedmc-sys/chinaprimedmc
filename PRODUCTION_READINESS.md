# China Prime DMC V2 Production Readiness

## Deployment

Use a production build, not the development server.

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

For Vercel or another managed Next.js platform, use the platform build command:

```bash
pnpm build
```

## Required Environment Variables

- `NEXT_PUBLIC_SITE_URL`: canonical public origin, for example `https://chinaprimedmc.com`
- `ADMIN_USERNAME`: admin username for `/admin`, `/component-showcase`, and `/component-playground`
- `ADMIN_PASSWORD`: admin password for `/admin`, `/component-showcase`, and `/component-playground`
- `INQUIRY_NOTIFICATION_EMAIL`: operational inbox for future server-side inquiry delivery

Optional analytics variables:

- `NEXT_PUBLIC_GA4_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_CLARITY_ID`

## Admin Access

In production, open `/admin` and enter the HTTP Basic Auth credentials configured through:

```text
ADMIN_USERNAME
ADMIN_PASSWORD
```

Without valid credentials, admin routes return `401`.

## Rollback

Keep the previous successful deployment available in the hosting platform. If a production issue is found:

1. Roll back to the previous deployment.
2. Disable optional analytics variables if they caused CSP or script issues.
3. Verify `/`, `/contact`, `/search`, `/admin`, `/sitemap.xml`, and `/robots.txt`.

## Backup

This release uses static content files. Before connecting a database-backed CMS, back up:

- `content/`
- `public/`
- deployment environment variables
- any future media storage bucket

## Prelaunch Manual Checks

- Confirm final domain points to the production deployment.
- Confirm `ADMIN_USERNAME` and `ADMIN_PASSWORD` are set.
- Confirm `/admin` returns `401` without credentials in production.
- Submit a test inquiry via the mailto flow.
- Inspect Search Console after sitemap submission.
