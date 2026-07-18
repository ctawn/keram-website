create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 2 and 120),
  phone text not null check (char_length(phone) between 7 and 40),
  destination text not null check (char_length(destination) between 2 and 160),
  locale text not null default 'ar' check (locale in ('ar', 'en')),
  source text not null default 'website',
  status text not null default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  created_at timestamptz not null default now()
);

alter table public.enquiries enable row level security;

create policy "anonymous visitors may create enquiries"
on public.enquiries for insert to anon
with check (status = 'new' and source = 'website');

-- No public select, update, or delete policy is intentionally defined.
