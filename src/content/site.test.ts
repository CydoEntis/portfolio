import { describe, expect, it } from "vitest";
import { EARLIER_WORK, PROJECTS } from "./site";

const project = (name: string) => PROJECTS.find((p) => p.name === name);

describe("site content", () => {
  it("lists the six projects in the design's order", () => {
    expect(PROJECTS.map((p) => p.name)).toEqual([
      "maitty",
      "linkables",
      "scrib",
      "snipux",
      "Clip-It",
      "Reign of Crowns",
    ]);
  });

  it("links the paid apps to their landing pages", () => {
    expect(project("scrib")?.action?.href).toBe("https://getscrib.com");
    expect(project("linkables")?.action?.href).toBe("https://linkables.app");
  });

  it("links Clip-It to its Chrome Web Store listing", () => {
    expect(project("Clip-It")?.action?.href).toMatch(/^https:\/\/chromewebstore\.google\.com\/detail\//);
  });

  it("never links a private or paid project to its source", () => {
    for (const name of ["scrib", "linkables", "Clip-It", "Reign of Crowns"]) {
      expect(project(name)?.action?.href ?? "").not.toContain("github.com");
    }
  });

  it("keeps all eight earlier projects", () => {
    expect(EARLIER_WORK).toHaveLength(8);
  });

  it("uses no em dashes in any copy", async () => {
    const site = await import("./site");
    expect(JSON.stringify(site)).not.toContain(String.fromCharCode(0x2014));
  });
});
