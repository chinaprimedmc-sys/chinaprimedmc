create extension if not exists pgcrypto;

create table if not exists public.rate_limits (
  bucket text not null,
  key_hash text not null,
  window_start timestamptz not null,
  request_count integer not null default 1 check (request_count > 0),
  primary key (bucket, key_hash, window_start)
);

alter table public.rate_limits enable row level security;
revoke all on table public.rate_limits from anon, authenticated;

create or replace function public.consume_rate_limit(
  rate_bucket text,
  rate_key_hash text,
  rate_limit integer,
  rate_window_seconds integer
) returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  current_window timestamptz;
  current_count integer;
begin
  if rate_limit < 1 or rate_window_seconds < 1 then
    return false;
  end if;
  current_window := to_timestamp(
    floor(extract(epoch from now()) / rate_window_seconds) * rate_window_seconds
  );
  delete from public.rate_limits
  where window_start < now() - interval '7 days';
  insert into public.rate_limits (bucket, key_hash, window_start, request_count)
  values (rate_bucket, rate_key_hash, current_window, 1)
  on conflict (bucket, key_hash, window_start)
  do update set request_count = public.rate_limits.request_count + 1
  returning request_count into current_count;
  return current_count <= rate_limit;
end;
$$;

revoke all on function public.consume_rate_limit(text, text, integer, integer) from public, anon, authenticated;
grant execute on function public.consume_rate_limit(text, text, integer, integer) to service_role;

revoke insert on table public.inquiries from anon;
drop policy if exists "Anonymous visitors can submit inquiries" on public.inquiries;

create table if not exists public.cms_revisions (
  id uuid primary key default gen_random_uuid(),
  resource_type text not null,
  resource_id uuid not null,
  revision_number integer not null,
  snapshot jsonb not null,
  created_at timestamptz not null default now(),
  unique (resource_type, resource_id, revision_number)
);

alter table public.cms_revisions enable row level security;
revoke all on table public.cms_revisions from anon, authenticated;
create index if not exists cms_revisions_resource_idx
  on public.cms_revisions (resource_type, resource_id, revision_number desc);

create or replace function public.capture_cms_change()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  resource_kind text := replace(tg_table_name, 'cms_', '');
  next_revision integer;
begin
  if tg_op = 'UPDATE' then
    select coalesce(max(revision_number), 0) + 1
      into next_revision
      from public.cms_revisions
      where resource_type = resource_kind and resource_id = old.id;

    insert into public.cms_revisions (resource_type, resource_id, revision_number, snapshot)
    values (resource_kind, old.id, next_revision, to_jsonb(old));

    insert into public.cms_audit_logs (
      actor_email, action, resource_type, resource_id, before_data, after_data
    ) values (
      coalesce(current_setting('request.jwt.claim.email', true), 'service-role'),
      'update', resource_kind, new.id, to_jsonb(old), to_jsonb(new)
    );
    return new;
  end if;

  insert into public.cms_audit_logs (
    actor_email, action, resource_type, resource_id, before_data, after_data
  ) values (
    coalesce(current_setting('request.jwt.claim.email', true), 'service-role'),
    lower(tg_op), resource_kind, case when tg_op = 'DELETE' then old.id else new.id end,
    case when tg_op = 'DELETE' then to_jsonb(old) else null end,
    case when tg_op = 'INSERT' then to_jsonb(new) else null end
  );
  if tg_op = 'DELETE' then
    return old;
  end if;
  return new;
end;
$$;

do $$
declare
  table_name text;
begin
  foreach table_name in array array[
    'cms_journeys', 'cms_blog_posts', 'cms_destinations',
    'cms_homepage_sections', 'cms_site_settings'
  ] loop
    execute format('drop trigger if exists capture_cms_change_trigger on public.%I', table_name);
    execute format(
      'create trigger capture_cms_change_trigger after insert or update or delete on public.%I for each row execute function public.capture_cms_change()',
      table_name
    );
  end loop;
end;
$$;

alter table public.cms_destinations enable row level security;
alter table public.cms_homepage_sections enable row level security;
alter table public.cms_site_settings enable row level security;
alter table public.cms_audit_logs enable row level security;

revoke all on table public.cms_destinations from anon, authenticated;
revoke all on table public.cms_homepage_sections from anon, authenticated;
revoke all on table public.cms_site_settings from anon, authenticated;
revoke all on table public.cms_audit_logs from anon, authenticated;

grant select on table public.cms_destinations to anon, authenticated;
grant select on table public.cms_homepage_sections to anon, authenticated;
grant select on table public.cms_site_settings to anon, authenticated;

drop policy if exists "Public can read published destinations" on public.cms_destinations;
create policy "Public can read published destinations"
  on public.cms_destinations for select to anon, authenticated
  using (status = 'published');

drop policy if exists "Public can read published homepage sections" on public.cms_homepage_sections;
create policy "Public can read published homepage sections"
  on public.cms_homepage_sections for select to anon, authenticated
  using (status = 'published');

drop policy if exists "Public can read published site settings" on public.cms_site_settings;
create policy "Public can read published site settings"
  on public.cms_site_settings for select to anon, authenticated
  using (status = 'published');

create index if not exists rate_limits_expiry_idx on public.rate_limits (window_start);
create index if not exists cms_audit_logs_created_idx on public.cms_audit_logs (created_at desc);

comment on table public.cms_revisions is 'Immutable CMS snapshots captured before every update.';
comment on table public.rate_limits is 'Hashed, non-identifying counters for public endpoint abuse protection.';

create or replace function public.media_is_referenced(media_id uuid)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.cms_journeys
    where hero_image_id = media_id or mobile_hero_image_id = media_id
       or content::text like '%' || (select url from public.cms_media_assets where id = media_id) || '%'
    union all
    select 1 from public.cms_blog_posts
    where hero_image_id = media_id or mobile_hero_image_id = media_id
       or content::text like '%' || (select url from public.cms_media_assets where id = media_id) || '%'
    union all
    select 1 from public.cms_destinations
    where hero_image_id = media_id or mobile_hero_image_id = media_id
       or content::text like '%' || (select url from public.cms_media_assets where id = media_id) || '%'
    union all
    select 1 from public.cms_homepage_sections
    where hero_image_id = media_id or mobile_hero_image_id = media_id
       or content::text like '%' || (select url from public.cms_media_assets where id = media_id) || '%'
  );
$$;

revoke all on function public.media_is_referenced(uuid) from public, anon, authenticated;
grant execute on function public.media_is_referenced(uuid) to service_role;
