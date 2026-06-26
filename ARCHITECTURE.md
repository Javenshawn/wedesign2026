# WeDesign Architecture

## Current local mode

The app runs without Supabase or Stripe credentials. Package selection writes a local order to `localStorage`, then redirects to a simulated checkout success page. This lets the product flow be built tonight while external account access is blocked.

## Production target

- App: Next.js on Vercel.
- Repository: GitHub.
- Database/auth/storage: Supabase.
- Payments: Stripe Checkout.
- Domain: GoDaddy DNS pointed to Vercel.

## Production data model

- `profiles`: user profile and role.
- `packages`: Economy, Business, Private Jet.
- `orders`: Stripe checkout/payment records.
- `projects`: customer logo projects.
- `briefs`: customer brand/design requirements.
- `project_updates`: timeline and progress events.
- `deliverables`: final logo files in Supabase Storage.
- `messages`: customer/admin project conversation.
- `blog_posts`: content marketing articles.
- `newsletter_subscriptions`: email captures.

## Stripe flow

1. Customer chooses a package.
2. `/api/checkout` creates a Stripe Checkout Session.
3. Stripe redirects the customer to success or cancel URL.
4. Stripe webhook verifies payment.
5. Webhook creates the paid order and project in Supabase.
6. Customer dashboard shows the new project.

Current implementation:

- Without Stripe environment variables, `/api/checkout` stays in local simulation mode.
- With `STRIPE_SECRET_KEY` and package price ids, `/api/checkout` creates a real Checkout Session.
- `/api/webhooks/stripe` verifies Stripe signatures and upserts paid orders when Supabase service credentials are present.

## Supabase flow

Use Supabase Auth for sign in, Postgres for records, Row Level Security for access control, and Storage for final deliverables.

Start from `supabase/schema.sql` after Supabase account access is available.
