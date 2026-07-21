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
  where bucket = rate_bucket
    and key_hash = rate_key_hash
    and window_start < now() - interval '7 days';

  insert into public.rate_limits (bucket, key_hash, window_start, request_count)
  values (rate_bucket, rate_key_hash, current_window, 1)
  on conflict (bucket, key_hash, window_start)
  do update set request_count = public.rate_limits.request_count + 1
  returning request_count into current_count;

  return current_count <= rate_limit;
end;
$$;

revoke all on function public.consume_rate_limit(text, text, integer, integer)
from public, anon, authenticated;
grant execute on function public.consume_rate_limit(text, text, integer, integer) to service_role;
