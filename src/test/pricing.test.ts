import { describe, expect, it } from "vitest";
import { PLANS, formatPrice, startingPrice } from "@/lib/pricing";

const price = (name: string) => PLANS.find((p) => p.name === name)?.price;

describe("pricing", () => {
  it("3 Month License costs $3.00", () => expect(formatPrice(price("3 Month License")!)).toBe("$3.00"));
  it("6 Month License costs $4.00", () => expect(formatPrice(price("6 Month License")!)).toBe("$4.00"));
  it("1 Year License costs $5.00", () => expect(formatPrice(price("1 Year License")!)).toBe("$5.00"));
  it("Permanent License costs $8.00", () => expect(formatPrice(price("Permanent License")!)).toBe("$8.00"));
  it("offers exactly these four plans and starts at $3.00", () => {
    expect(PLANS).toHaveLength(4);
    expect(formatPrice(startingPrice())).toBe("$3.00");
  });
});
