alter table public.cms_journeys enable row level security;
alter table public.cms_blog_posts enable row level security;
alter table public.cms_media_assets enable row level security;

revoke all on table public.cms_journeys from anon, authenticated;
revoke all on table public.cms_blog_posts from anon, authenticated;
revoke all on table public.cms_media_assets from anon, authenticated;

grant select on table public.cms_journeys to anon, authenticated;
grant select on table public.cms_blog_posts to anon, authenticated;
grant select on table public.cms_media_assets to anon, authenticated;

drop policy if exists "Public can read published journeys" on public.cms_journeys;
drop policy if exists "Published journeys are readable" on public.cms_journeys;
create policy "Public can read published journeys"
  on public.cms_journeys for select to anon, authenticated
  using (status = 'published');

drop policy if exists "Public can read published blog posts" on public.cms_blog_posts;
drop policy if exists "Published blog posts are readable" on public.cms_blog_posts;
create policy "Public can read published blog posts"
  on public.cms_blog_posts for select to anon, authenticated
  using (status = 'published');

drop policy if exists "Public can read CMS media metadata" on public.cms_media_assets;
create policy "Public can read CMS media metadata"
  on public.cms_media_assets for select to anon, authenticated
  using (true);

update public.cms_journeys
set status = 'draft', updated_at = now()
where status = 'published'
  and slug in (
    'china-with-kids-made-effortless',
    'first-china-beautifully-paced',
    'great-wall-sunrise-ancient-capitals',
    'imperial-china-jiangnan-elegance',
    'scenic-china-peaks-rivers-rice-terraces',
    'silk-road-china-deserts-caves-ancient-routes'
  );

update storage.buckets
set public = true,
    file_size_limit = 5242880,
    allowed_mime_types = array['image/webp', 'image/jpeg', 'image/png']::text[]
where id = 'cms-media';

drop policy if exists "Public can view CMS media" on storage.objects;
create policy "Public can view CMS media"
  on storage.objects for select to public
  using (bucket_id = 'cms-media');

create index if not exists cms_journeys_status_sort_idx
  on public.cms_journeys (status, sort_order, published_at desc);
create index if not exists cms_blog_posts_status_sort_idx
  on public.cms_blog_posts (status, sort_order, published_at desc);
