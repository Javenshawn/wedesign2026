# WeDesign

Local-first version of the WeDesign logo design platform.

## Run locally

```bash
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## What works now

- Marketing pages matching the supplied WeDesign direction.
- Package selection with a local mock checkout.
- Customer dashboard with local project and brief data.
- Admin workspace with mock project status controls.
- Integration placeholders for Supabase, Stripe, Vercel, and a custom domain.

## Later account setup

When phone authentication is available again:

1. Create the Supabase project and fill `.env.local`.
2. Create Stripe products/prices and fill the Stripe keys.
3. Push the project to GitHub.
4. Import the GitHub repo into Vercel.
5. Add the GoDaddy domain in Vercel and update DNS records in GoDaddy.
