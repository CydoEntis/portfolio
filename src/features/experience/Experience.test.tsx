import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Experience from "./Experience";

const rows = (label: string) =>
  within(screen.getByRole("list", { name: label }))
    .getAllByRole("listitem")
    .map((r) => r.textContent);

describe("Experience", () => {
  it("lists work newest first, marking the current job", () => {
    render(<Experience />);
    expect(rows("Work")).toEqual([
      "Full Stack DeveloperDrive Smart ↗Apr 2023 – Presentcurrent",
      "Software Engineer InternBay Master ↗Jan 2021 – May 2022",
    ]);
  });

  it("lists education after work", () => {
    render(<Experience />);
    const headings = screen.getAllByRole("heading", { level: 3 }).map((h) => h.textContent);
    expect(headings).toEqual(["Work", "Education"]);
    expect(rows("Education")).toEqual([
      "B.S. Software EngineeringWestern Governors UniversitySep 2021 – May 2023",
      "A.S. Computer ScienceOcean County CollegeSep 2019 – Jan 2021",
    ]);
  });

  it("links the companies that have a site", () => {
    render(<Experience />);
    expect(screen.getByRole("link", { name: /Drive Smart/ }).getAttribute("href")).toBe(
      "https://www.drivesmart.auto",
    );
    expect(screen.getByRole("link", { name: /Bay Master/ }).getAttribute("href")).toBe(
      "https://www.bay-master.com/",
    );
  });
});
