import { describe, expect, it } from "vitest";
import { MODULES, filterModules } from "@/lib/modules";

describe("module catalogue", () => {
  it("offers both Ghost and Blatant modules on 1.21.11", () => {
    expect(filterModules(MODULES, { mode: "ghost", version: "1.21.11" }).length).toBeGreaterThan(0);
    expect(filterModules(MODULES, { mode: "blatant", version: "1.21.11" }).length).toBeGreaterThan(0);
  });

  it("offers both Ghost and Blatant modules on 1.8.9", () => {
    expect(filterModules(MODULES, { mode: "ghost", version: "1.8.9" }).length).toBeGreaterThan(0);
    expect(filterModules(MODULES, { mode: "blatant", version: "1.8.9" }).length).toBeGreaterThan(0);
  });

  it("only supports 1.21.11 and 1.8.9", () => {
    const versions = new Set(MODULES.flatMap((m) => m.versions));
    expect([...versions].sort()).toEqual(["1.21.11", "1.8.9"]);
  });
});
