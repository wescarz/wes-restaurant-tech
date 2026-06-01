import Stripe from "stripe";

const secretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = secretKey
  ? new Stripe(secretKey, { typescript: true })
  : (null as unknown as Stripe);

export const PLANS = {
  pase: {
    monthly: process.env.STRIPE_PRICE_PASE_MONTHLY ?? "price_pase_monthly",
    yearly: process.env.STRIPE_PRICE_PASE_YEARLY ?? "price_pase_yearly",
  },
  "control-pase": {
    monthly: process.env.STRIPE_PRICE_CONTROL_PASE_MONTHLY ?? "price_control_pase_monthly",
    yearly: process.env.STRIPE_PRICE_CONTROL_PASE_YEARLY ?? "price_control_pase_yearly",
  },
} as const;

export type PlanId = keyof typeof PLANS;
