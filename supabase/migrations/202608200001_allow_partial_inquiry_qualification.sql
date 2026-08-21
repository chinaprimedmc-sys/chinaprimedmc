alter table public.inquiries
  drop constraint if exists inquiries_traveler_type_check;

alter table public.inquiries
  drop constraint if exists inquiries_budget_tier_check;

alter table public.inquiries
  alter column traveler_type drop not null,
  alter column adults drop not null,
  alter column children drop not null,
  alter column budget_tier drop not null;

alter table public.inquiries
  add constraint inquiries_traveler_type_check
  check (
    traveler_type is null
    or traveler_type in ('family', 'couple', 'solo', 'small-group', 'undecided')
  );

alter table public.inquiries
  add constraint inquiries_budget_tier_check
  check (
    budget_tier is null
    or budget_tier in ('comfortable', 'luxury', 'ultra-bespoke')
  );

comment on column public.inquiries.traveler_type is
  'Traveler profile when explicitly supplied; null means the visitor has not decided.';

comment on column public.inquiries.budget_tier is
  'Preferred comfort tier when explicitly supplied; null means no preference was supplied.';
