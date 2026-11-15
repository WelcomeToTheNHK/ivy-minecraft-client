export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  blurb: string;
  popular?: boolean;
}

export const PLANS: Plan[] = [
  { id: "3-month", name: "3 Month License", price: 3, period: "3 months", blurb: "Try every module for a season." },
  { id: "6-month", name: "6 Month License", price: 4, period: "6 months", blurb: "Half a year of Ivy." },
  { id: "1-year", name: "1 Year License", price: 5, period: "1 year", blurb: "A full year of updates.", popular: true },
  { id: "permanent", name: "Permanent License", price: 8, period: "forever", blurb: "Pay once. Every update, forever." },
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
