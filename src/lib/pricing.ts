export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  blurb: string;
  popular?: boolean;
}

export const PLANS: Plan[] = [
  { id: "monthly", name: "Monthly", price: 9.99, period: "30 days", blurb: "Try every module for a month." },
  { id: "quarterly", name: "Quarterly", price: 19.99, period: "90 days", blurb: "The sweet spot for a full season.", popular: true },
  { id: "lifetime", name: "Lifetime", price: 39.99, period: "forever", blurb: "Pay once. Every update, forever." },
];

export const PLAN_INCLUDES = [
  "Every Ghost module",
  "Every Blatant module",
  "1.21.11 and 1.8.9",
  "Cloud configs",
  "Self-destruct",
  "Discord support",
];

export const startingPrice = () => Math.min(...PLANS.map((p) => p.price));
export const formatPrice = (n: number) => `$${n.toFixed(2)}`;
