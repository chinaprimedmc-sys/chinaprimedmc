# About, company and founder identity optimization

Date: 2026-11-11

## Delivered

- Added shared English identity summaries in `content/about/identity.ts` for the About introduction, company introduction, founder profile and text feeds.
- Distinguished the AVIORA China Travel guest brand, China Prime DMC travel-trade name and the Guangzhou legal operating company. The company page presents the relationship in a responsive, white-background definition list.
- Assigned the March 28, 2018 registration date and legal name to the operator node in organization JSON-LD, retaining the existing brand and founder identifiers. No brand founding date or legal-company founder has been inferred.
- Connected the founder profile to the TTG Asia article as coverage of the named person. Participation is not described as certification or endorsement.
- Kept human-facing summaries focused on travel services and written booking responsibilities. Supplemental text feeds explicitly explain date attribution and company-reported information.
- Preserved service-story links to their source feedback and verbatim quotations. The source label identifies feedback hosted by AVIORA; these accounts are not independently audited booking records.
- Preserved the pure-white editorial presentation and supplied event photograph. No new photographic identity or biographical details were inferred.

## Validation

- `pnpm typecheck`: passed.
- Targeted ESLint for changed About/company/founder pages, identity content, shared components, schema and text feeds: passed.
- `node --test tests/about-identity.test.mjs`: 3 passed. Covers date/entity attribution, evidence qualifications and service-story quotation/source integrity.
- `git diff --check`: passed.
- Consulted the installed Next.js JSON-LD guide; the existing JSON-LD component uses a native script and escapes unsafe characters.

## Limits and follow-up

This is a local content and structured-data change, not a deployment or confirmation of Google indexing. Live browser visual acceptance, Search Console inspection and external schema validation were not completed in this environment. Earlier build attempts encountered sandbox IPC and external Google Fonts DNS restrictions; a complete production build is not asserted.

AI Overview selection, ranking and citations cannot be guaranteed. Shared summaries and JSON-LD improve consistency; llms.txt is supplemental and is not a promise of Google inclusion. Company-reported registration/service facts and historical guest feedback still require their own underlying records; publication flags are not independent verification. The TTG article does not establish AVIORA's brand founding date or independently validate the full brand/operator relationship.

After deployment, inspect the three canonical URLs in Search Console, validate the rendered organization/profile JSON-LD and check mobile/desktop appearance. Keep actual registration, tourism-license and guest publication records available for factual review.
