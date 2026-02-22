import { NextResponse } from "next/server";
import { stripe, PLANS } from "@/lib/stripe";

export async function POST(req: Request) {
  if (!stripe) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }
  try {
    const body = await req.json();
    const { priceId, customerEmail, planId, yearly } = body as {
      priceId?: string;
      customerEmail?: string;
      planId?: string;
      yearly?: boolean;
    };

    let resolvedPriceId = priceId;
    if (!resolvedPriceId && planId) {
      const plan = PLANS[planId as keyof typeof PLANS];
      if (plan) resolvedPriceId = yearly ? plan.yearly : plan.monthly;
    }

    if (!resolvedPriceId) {
      return NextResponse.json({ error: "Missing priceId or planId" }, { status: 400 });
    }

    const origin = process.env.NEXT_PUBLIC_SITE_URL ?? req.headers.get("origin") ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [{ price: resolvedPriceId, quantity: 1 }],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/precios`,
      customer_email: customerEmail || undefined,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
}
