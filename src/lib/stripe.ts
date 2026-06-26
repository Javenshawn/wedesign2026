import Stripe from "stripe";

export function getStripeServerClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    return null;
  }

  return new Stripe(secretKey, {
    apiVersion: "2025-02-24.acacia"
  });
}

export function getStripePriceId(packageId: string) {
  const priceMap: Record<string, string | undefined> = {
    economy: process.env.STRIPE_PRICE_ECONOMY,
    business: process.env.STRIPE_PRICE_BUSINESS,
    "private-jet": process.env.STRIPE_PRICE_PRIVATE_JET
  };

  return priceMap[packageId];
}
