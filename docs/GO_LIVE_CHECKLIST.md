# WeDesign Go-Live Checklist

## Accounts

- GitHub repository created.
- Vercel project imported from GitHub.
- Supabase project created.
- Stripe account created with live mode enabled.
- GoDaddy domain ready.

## Supabase

- Run `supabase/schema.sql` in the SQL editor.
- Create a Storage bucket for deliverables.
- Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and `SUPABASE_SERVICE_ROLE_KEY`.
- Review Row Level Security policies before launch.

## Stripe

- Create three products: Economy, Business, Private Jet.
- Copy the three live price ids into environment variables.
- Add webhook endpoint: `/api/webhooks/stripe`.
- Subscribe webhook to `checkout.session.completed`.
- Add `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET`.

## Vercel

- Add all environment variables to Vercel.
- Deploy from GitHub.
- Test preview deployment before production.
- Add the custom domain in Vercel.

## GoDaddy DNS

- Point the apex/root domain to Vercel using the value Vercel gives you.
- Point `www` to Vercel using the CNAME value Vercel gives you.
- Wait for DNS and SSL to finish provisioning.

## Launch checks

- Test package checkout in Stripe test mode.
- Confirm webhook creates an order in Supabase.
- Confirm dashboard shows the paid project.
- Confirm admin workflow can update project status.
- Add Privacy Policy, Terms of Service, Refund Policy, and support email.
