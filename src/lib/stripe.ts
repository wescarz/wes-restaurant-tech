import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = secretKey
  ? new Stripe(secretKey, { typescript: true })
  : (null as unknown as Stripe);

export const PLANS = {
  starter: {
    monthly: process.env.STRIPE_PRICE_STARTER_MONTHLY ?? "price_starter_monthly",
    yearly: process.env.STRIPE_PRICE_STARTER_YEARLY ?? "price_starter_yearly",
  },
  professional: {
    monthly: process.env.STRIPE_PRICE_PRO_MONTHLY ?? "price_pro_monthly",
    yearly: process.env.STRIPE_PRICE_PRO_YEARLY ?? "price_pro_yearly",
  },
  enterprise: {
    monthly: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY ?? "price_enterprise_monthly",
    yearly: process.env.STRIPE_PRICE_ENTERPRISE_YEARLY ?? "price_enterprise_yearly",
  },
} as const;
