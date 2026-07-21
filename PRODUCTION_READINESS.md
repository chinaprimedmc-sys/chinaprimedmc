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

Use `.env.example` as the authoritative inventory. Production requires:

- Supabase URL, anonymous key, and service-role key for private inquiries.
- Sanity project ID, dataset, and revalidation secret for public content.
- Cloudflare R2 account, access keys, bucket, and public URL for CMS media.
- `ADMIN_USERNAME`, a unique random `ADMIN_PASSWORD`, `ADMIN_SESSION_SECRET`,
  `ADMIN_SESSION_VERSION`, and `RATE_LIMIT_SALT` for the owner dashboard.
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY` for inquiry abuse protection.
- `NEXT_PUBLIC_SITE_URL=https://www.chinaprimedmc.com` for canonical and Turnstile hostname checks.

Never place service-role keys, admin credentials, or secret keys in a `NEXT_PUBLIC_*` variable.

## Admin Access

In production, open `/admin` and enter the application credentials configured through:

```text
ADMIN_USERNAME
ADMIN_PASSWORD
```

The application issues a four-hour, signed, HttpOnly, Secure, SameSite Strict session cookie.
Increment `ADMIN_SESSION_VERSION` whenever every existing admin session must be revoked.

## Rollback

Keep the previous successful deployment available in the hosting platform. If a production issue is found:

1. Roll back to the previous deployment.
2. Disable optional analytics variables if they caused CSP or script issues.
3. Verify `/`, `/contact`, `/search`, `/admin`, `/sitemap.xml`, and `/robots.txt`.

## Backup

Back up Supabase inquiries, the Sanity production dataset, Cloudflare R2 objects, and deployment
environment variables. Test restoration periodically instead of treating backup creation as proof of
recoverability.

## Prelaunch Manual Checks

- Confirm final domain points to the production deployment.
- Confirm `ADMIN_USERNAME` and `ADMIN_PASSWORD` are set.
- Confirm `/admin` redirects to login and protected APIs return `401` without a session.
- Confirm old `/api/admin/cms`, `/api/admin/cms/revisions`, and `/api/admin/media` endpoints return
  `410` after authentication.
- Complete Turnstile and submit a real inquiry, then confirm it appears only in the protected admin.
- Upload valid and invalid image fixtures to confirm signature and dimension validation.
- Confirm public pages use nonce-based CSP while `/studio` uses its isolated Sanity policy.
- Inspect Search Console after sitemap submission.
