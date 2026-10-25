import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import WorkSection from "./WorkSection";

const card = (name: string) => screen.getByRole("article", { name });
const links = (el: HTMLElement) => within(el).queryAllByRole("link");

describe("WorkSection", () => {
  it("shows the six projects in order", () => {
    render(<WorkSection />);
    const names = screen.getAllByRole("article").map((a) => a.getAttribute("aria-label"));
    expect(names).toEqual(["maitty", "linkables", "scrib", "snipux", "Clip-It", "Reign of Crowns"]);
  });

  it("shows each project's icon", () => {
    render(<WorkSection />);
    for (const article of screen.getAllByRole("article")) {
      const name = article.getAttribute("aria-label");
      expect(within(article).getByAltText(`${name} icon`)).toBeTruthy();
    }
  });

  it("marks Reign of Crowns as coming soon with no link", () => {
    render(<WorkSection />);
    expect(within(card("Reign of Crowns")).getByText("Coming soon")).toBeTruthy();
    expect(links(card("Reign of Crowns"))).toHaveLength(0);
  });

  it("links maitty and snipux to their sites in a new tab", () => {
    render(<WorkSection />);
    for (const [name, href] of [
      ["maitty", "https://maitty.app"],
      ["snipux", "https://snipux.com"],
    ]) {
      const [link, ...rest] = links(card(name));
      expect(rest).toHaveLength(0);
      expect(link.textContent).toContain("Visit site");
      expect(link.getAttribute("href")).toBe(href);
      expect(link.getAttribute("target")).toBe("_blank");
    }
  });

  it("links scrib to its landing page only", () => {
    render(<WorkSection />);
    const [link, ...rest] = links(card("scrib"));
    expect(rest).toHaveLength(0);
    expect(link.textContent).toContain("Visit site");
    expect(link.getAttribute("href")).toBe("https://getscrib.com");
  });

  it("links linkables to its landing page only", () => {
    render(<WorkSection />);
    const [link, ...rest] = links(card("linkables"));
    expect(rest).toHaveLength(0);
    expect(link.getAttribute("href")).toBe("https://linkables.app");
  });

  it("links Clip-It to its Chrome Web Store listing only", () => {
    render(<WorkSection />);
    const [link, ...rest] = links(card("Clip-It"));
    expect(rest).toHaveLength(0);
    expect(link.textContent).toContain("Add to Chrome");
    expect(link.getAttribute("href")).toContain("chromewebstore.google.com/detail/");
  });

  it("never links to the paid apps' source", () => {
    const { container } = render(<WorkSection />);
    const hrefs = [...container.querySelectorAll("a")].map((a) => a.href.toLowerCase());
    for (const repo of ["scrib", "linkables", "clip-it", "reign-of-crowns"]) {
      expect(hrefs.some((h) => h.includes(`github.com/cydoentis/${repo}`))).toBe(false);
    }
  });

  it("lists the eight earlier projects with their GitHub links", () => {
    render(<WorkSection />);
    const list = screen.getByRole("list", { name: "Earlier work" });
    const rows = within(list).getAllByRole("listitem");
    expect(rows).toHaveLength(8);
    expect(
      within(list).getByRole("link", { name: "PupDrive on GitHub" }).getAttribute("href"),
    ).toBe("https://github.com/CydoEntis/PupDrive");
  });

  it("has no links to the old hosted sites", () => {
    const { container } = render(<WorkSection />);
    const hrefs = [...container.querySelectorAll("a")].map((a) => a.href);
    expect(hrefs.some((h) => h.includes("codystine.com"))).toBe(false);
  });
});
