import { describe, expect, it } from "vitest";
import { EARLIER_WORK, EMAIL, FEATURED, MORE_WORK } from "./site";

describe("site content", () => {
  it("features maitty then snipux", () => {
    expect(FEATURED.map((p) => p.name)).toEqual(["maitty", "snipux"]);
  });

  it("lists scrib, linkables and Clip-It as more work", () => {
    expect(MORE_WORK.map((p) => p.name)).toEqual(["scrib", "linkables", "Clip-It"]);
  });

  it("links scrib to its landing page", () => {
    expect(MORE_WORK[0].action?.href).toBe("https://getscrib.com");
  });

  it("links linkables to its landing page", () => {
    expect(MORE_WORK[1].action?.href).toBe("https://linkables.app");
  });

  it("links Clip-It to its Chrome Web Store listing", () => {
    expect(MORE_WORK[2].action?.href).toMatch(/^https:\/\/chromewebstore\.google\.com\/detail\//);
  });

  it("never links a paid app to its source", () => {
    for (const project of MORE_WORK) {
      expect(project.action?.href ?? "").not.toContain("github.com");
    }
  });

  it("keeps all eight earlier projects", () => {
    expect(EARLIER_WORK).toHaveLength(8);
  });

  it("has Cody's contact email", () => {
    expect(EMAIL).toBe("cydoentis@gmail.com");
  });
});
