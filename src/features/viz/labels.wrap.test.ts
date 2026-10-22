import { describe, expect, it } from "vitest";
import { fitLabel } from "@/features/viz/labels.ts";

describe("fitLabel wrapping", () => {
  it("breaks slugs after dashes", () => {
    const fit = fitLabel("use-restaurant-platform-api Flag", 70, 40);
    expect(fit).not.toBeNull();
    expect(fit!.lines.join("")).toContain("use-");
    expect(fit!.lines.length).toBeGreaterThan(1);
  });
  it("hard-splits an oversized unbroken word", () => {
    const fit = fitLabel("supercalifragilisticexpialidocious", 50, 40);
    expect(fit).not.toBeNull();
    expect(fit!.lines.join("")).toBe("supercalifragilisticexpialidocious");
  });
  it("keeps plain words space-joined", () => {
    expect(fitLabel("hello world", 200, 40)!.lines).toEqual(["hello world"]);
  });
});
