alter table public.inquiries
  add column if not exists landing_page text,
  add column if not exists referrer text,
  add column if not exists utm_source text,
  add column if not exists utm_medium text,
  add column if not exists utm_campaign text,
  add column if not exists utm_content text,
  add column if not exists utm_term text,
  add column if not exists gclid text,
  add column if not exists viewed_journeys text[] not null default '{}';

comment on column public.inquiries.landing_page is 'First page visited in the current browser session.';
comment on column public.inquiries.referrer is 'External referrer recorded at the planning form.';
comment on column public.inquiries.viewed_journeys is 'Journey slugs carried into the inquiry flow.';

create index if not exists inquiries_utm_source_idx
  on public.inquiries (utm_source) where utm_source is not null;
create index if not exists inquiries_landing_page_idx
  on public.inquiries (landing_page) where landing_page is not null;
