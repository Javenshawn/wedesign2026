create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'customer' check (role in ('customer', 'admin', 'designer')),
  created_at timestamptz not null default now()
);

create table if not exists public.packages (
  id text primary key,
  name text not null,
  price integer not null,
  original_price integer,
  delivery text not null,
  features jsonb not null default '[]'::jsonb,
  stripe_price_id text,
  active boolean not null default true
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  package_id text references public.packages(id),
  stripe_checkout_session_id text unique,
  stripe_payment_intent_id text,
  amount_total integer,
  currency text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete set null,
  customer_id uuid references auth.users(id) on delete set null,
  package_id text references public.packages(id),
  title text not null default 'Logo Design Project',
  status text not null default 'brief_pending',
  progress integer not null default 0,
  designer_name text,
  due_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.briefs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  brand_name text,
  industry text,
  target_audience text,
  style_direction text,
  colors text,
  reference_notes text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.project_updates (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  status text not null,
  message text,
  progress integer,
  created_at timestamptz not null default now()
);

create table if not exists public.deliverables (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  file_path text not null,
  file_name text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  sender_id uuid references auth.users(id) on delete set null,
  body text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  category text,
  excerpt text,
  body text,
  hero_image text,
  published_at timestamptz
);

create table if not exists public.newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.packages enable row level security;
alter table public.orders enable row level security;
alter table public.projects enable row level security;
alter table public.briefs enable row level security;
alter table public.project_updates enable row level security;
alter table public.deliverables enable row level security;
alter table public.messages enable row level security;
alter table public.blog_posts enable row level security;
alter table public.newsletter_subscriptions enable row level security;

create policy "public can read active packages"
  on public.packages for select
  to anon, authenticated
  using (active = true);

create policy "public can read published blog posts"
  on public.blog_posts for select
  to anon, authenticated
  using (published_at is not null and published_at <= now());

create policy "public can subscribe to newsletter"
  on public.newsletter_subscriptions for insert
  to anon, authenticated
  with check (email is not null and position('@' in email) > 1);

create policy "customers can read own orders"
  on public.orders for select
  using (auth.uid() = user_id);

create policy "customers can read own projects"
  on public.projects for select
  using (auth.uid() = customer_id);

create policy "customers can manage own briefs"
  on public.briefs for all
  using (
    exists (
      select 1 from public.projects
      where projects.id = briefs.project_id
      and projects.customer_id = auth.uid()
    )
  );

insert into public.packages (id, name, price, original_price, delivery, features)
values
  ('economy', 'Economy', 199, 299, '7-Day Delivery', '["3 Original Logo Concepts","2 Revision Rounds","High-Resolution Files (PNG, JPG)","Basic Brand Guidelines","Email Support"]'),
  ('business', 'Business', 399, 599, '3-Day Rush Delivery', '["5 Original Logo Concepts","Unlimited Revisions","High-Resolution Files (PNG, JPG, SVG, PDF)","Complete Brand Guidelines","Business Card Design","Social Media Kit","Priority Support"]'),
  ('private-jet', 'Private Jet', 799, 1199, '24-Hour Rush Delivery', '["10 Original Logo Concepts","Unlimited Revisions","All File Formats + Source Files","Premium Brand Guidelines","Dedicated Account Manager","1-on-1 Design Consultation"]')
on conflict (id) do nothing;
