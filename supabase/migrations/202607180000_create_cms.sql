create extension if not exists pgcrypto;

create table if not exists public.cms_media_assets (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  url text not null,
  storage_path text not null unique,
  mime_type text not null,
  size_bytes bigint not null default 0,
  width integer,
  height integer,
  alt_text text not null,
  category text not null default 'general',
  usage text not null default 'website',
  object_position text not null default '50% 50%',
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_journeys (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  subtitle text,
  summary text,
  route text,
  duration_label text,
  price text,
  best_for text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  hero_image_id uuid references public.cms_media_assets(id) on delete set null,
  mobile_hero_image_id uuid references public.cms_media_assets(id) on delete set null,
  seo_title text,
  seo_description text,
  content jsonb not null default '{}',
  sort_order integer not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_blog_posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  subtitle text,
  summary text,
  category text,
  author text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  hero_image_id uuid references public.cms_media_assets(id) on delete set null,
  mobile_hero_image_id uuid references public.cms_media_assets(id) on delete set null,
  seo_title text,
  seo_description text,
  content jsonb not null default '{}',
  sort_order integer not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_destinations (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  subtitle text,
  summary text,
  region text,
  recommended_stay text,
  best_season text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  hero_image_id uuid references public.cms_media_assets(id) on delete set null,
  mobile_hero_image_id uuid references public.cms_media_assets(id) on delete set null,
  seo_title text,
  seo_description text,
  content jsonb not null default '{}',
  sort_order integer not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_homepage_sections (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  subtitle text,
  summary text,
  status text not null default 'draft' check (status in ('draft', 'published')),
  hero_image_id uuid references public.cms_media_assets(id) on delete set null,
  mobile_hero_image_id uuid references public.cms_media_assets(id) on delete set null,
  seo_title text,
  seo_description text,
  content jsonb not null default '{}',
  sort_order integer not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_site_settings (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  subtitle text,
  summary text,
  status text not null default 'published' check (status in ('draft', 'published')),
  content jsonb not null default '{}',
  seo_title text,
  seo_description text,
  sort_order integer not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.cms_audit_logs (
  id uuid primary key default gen_random_uuid(),
  actor_email text,
  action text not null,
  resource_type text not null,
  resource_id uuid,
  before_data jsonb,
  after_data jsonb,
  created_at timestamptz not null default now()
);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'cms-media', 'cms-media', true, 5242880,
  array['image/webp', 'image/jpeg', 'image/png']::text[]
)
on conflict (id) do nothing;
