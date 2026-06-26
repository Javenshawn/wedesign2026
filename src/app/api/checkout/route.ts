import { NextResponse } from "next/server";
import { getSiteUrl, integrationMode } from "@/lib/integrations";
import { getStripePriceId, getStripeServerClient } from "@/lib/stripe";

export async function POST(request: Request) {
  const body = (await request.json()) as { packageId?: string; orderId?: string };
  const packageId = body.packageId || "business";
  const siteUrl = getSiteUrl();

  if (!integrationMode.stripe) {
    return NextResponse.json({
      mode: "local",
      url: `/checkout/success?package=${packageId}&order=${body.orderId || "local"}`
    });
  }

  const stripe = getStripeServerClient();
  const priceId = getStripePriceId(packageId);

  if (!stripe || !priceId) {
    return NextResponse.json(
      {
        error: "Stripe is enabled but the package price id is missing."
      },
      { status: 400 }
    );
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1
      }
    ],
    metadata: {
      packageId,
      localOrderId: body.orderId || ""
    },
    success_url: `${siteUrl}/checkout/success?package=${packageId}&order={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/logo-design`
  });

  return NextResponse.json({
    mode: "stripe",
    url: session.url
  });
}
