select jsonb_build_object(
  'inquiries_anon_insert_revoked', not has_table_privilege('anon', 'public.inquiries', 'INSERT'),
  'rate_limit_function_service_only',
    has_function_privilege('service_role', 'public.consume_rate_limit(text,text,integer,integer)', 'EXECUTE')
    and not has_function_privilege('anon', 'public.consume_rate_limit(text,text,integer,integer)', 'EXECUTE'),
  'cms_revision_table_exists', to_regclass('public.cms_revisions') is not null,
  'cms_trigger_count', (
    select count(*) from information_schema.triggers
    where trigger_schema = 'public' and trigger_name = 'capture_cms_change_trigger'
  ),
  'rls_tables', (
    select jsonb_object_agg(c.relname, c.relrowsecurity)
    from pg_class c join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public'
      and c.relname in (
        'inquiries', 'rate_limits', 'cms_revisions', 'cms_audit_logs',
        'cms_journeys', 'cms_blog_posts', 'cms_destinations',
        'cms_homepage_sections', 'cms_site_settings', 'cms_media_assets'
      )
  )
) as backend_verification;
