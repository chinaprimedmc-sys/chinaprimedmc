create extension if not exists pgcrypto;

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'proposal_sent', 'won', 'lost')),
  source_page text not null,
  journey_slug text,
  traveler_type text not null check (traveler_type in ('family', 'couple', 'solo', 'small-group')),
  adults integer not null check (adults between 1 and 20),
  children integer not null default 0 check (children between 0 and 20),
  traveling_with_seniors boolean not null default false,
  travel_timing text,
  trip_duration text,
  destinations text[] not null default '{}',
  budget_tier text not null check (budget_tier in ('comfortable', 'luxury', 'ultra-bespoke')),
  travel_styles text[] not null default '{}',
  preferred_contact_methods text[] not null default '{}',
  name text not null,
  email text,
  whatsapp text,
  phone text,
  notes text
);

alter table public.inquiries enable row level security;

revoke all on table public.inquiries from anon, authenticated;
grant insert on table public.inquiries to anon;

drop policy if exists "Anonymous visitors can submit inquiries" on public.inquiries;
create policy "Anonymous visitors can submit inquiries"
  on public.inquiries
  for insert
  to anon
  with check (
    status = 'new'
    and length(trim(name)) between 1 and 120
    and (email is not null or whatsapp is not null or phone is not null)
  );

create index if not exists inquiries_created_at_idx on public.inquiries (created_at desc);
create index if not exists inquiries_status_idx on public.inquiries (status);
create index if not exists inquiries_journey_slug_idx on public.inquiries (journey_slug) where journey_slug is not null;

comment on table public.inquiries is 'Private China journey inquiries submitted through the public planning form.';
comment on column public.inquiries.source_page is 'Path or source identifier that led the visitor to the inquiry form.';
