import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import WorkSection from "./WorkSection";

const card = (name: string) => screen.getByRole("article", { name });
const links = (el: HTMLElement) => within(el).queryAllByRole("link");

describe("WorkSection", () => {
  it("shows the five projects in order", () => {
    render(<WorkSection />);
    const names = screen.getAllByRole("article").map((a) => a.getAttribute("aria-label"));
    expect(names).toEqual(["maitty", "snipux", "scrib", "linkables", "Clip-It"]);
  });

  it("links the open-source projects to their GitHub repos in a new tab", () => {
    render(<WorkSection />);
    for (const name of ["maitty", "snipux"]) {
      const [link, ...rest] = links(card(name));
      expect(rest).toHaveLength(0);
      expect(link.getAttribute("href")).toBe(`https://github.com/CydoEntis/${name}`);
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

  it("gives linkables and Clip-It no links yet", () => {
    render(<WorkSection />);
    expect(links(card("linkables"))).toHaveLength(0);
    expect(links(card("Clip-It"))).toHaveLength(0);
  });

  it("never links to the paid apps' source", () => {
    const { container } = render(<WorkSection />);
    const hrefs = [...container.querySelectorAll("a")].map((a) => a.href.toLowerCase());
    for (const repo of ["scrib", "linkables", "clip-it"]) {
      expect(hrefs.some((h) => h.includes(`github.com/cydoentis/${repo}`))).toBe(false);
    }
  });

  it("shows the linkables icon in place of a screenshot", () => {
    render(<WorkSection />);
    expect(within(card("linkables")).getByAltText("linkables icon")).toBeTruthy();
    expect(within(card("linkables")).queryByAltText("linkables screenshot")).toBeNull();
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
