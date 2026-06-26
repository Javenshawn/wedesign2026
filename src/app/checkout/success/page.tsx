import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { packages } from "@/data/site";

type SuccessPageProps = {
  searchParams: Promise<{
    package?: string;
    order?: string;
  }>;
};

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  const packageTier = packages.find((item) => item.id === params.package) || packages[1];

  return (
    <main className="page-shell compact-page">
      <section className="success-card">
        <CheckCircle2 size={48} />
        <span className="eyebrow">Local checkout complete</span>
        <h1>{packageTier.name} project started</h1>
        <p>
          Tonight this is saved locally on your computer. Tomorrow, Stripe will confirm the payment and
          Supabase will create the real project automatically.
        </p>
        <div className="success-details">
          <span>
            <strong>Package</strong>
            {packageTier.name}
          </span>
          <span>
            <strong>Total</strong>
            ${packageTier.price}
          </span>
          <span>
            <strong>Order</strong>
            {params.order || "local"}
          </span>
        </div>
        <div className="button-row">
          <Link className="button button-primary" href="/dashboard">
            Open Dashboard
          </Link>
          <Link className="button button-ghost" href="/design-hall">
            View Design Hall
          </Link>
        </div>
      </section>
    </main>
  );
}
