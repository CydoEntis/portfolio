import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Experience from "./Experience";

describe("Experience", () => {
  it("lists each role newest first with its dates", () => {
    render(<Experience />);
    const roles = screen.getAllByTestId("role").map((r) => r.textContent);
    expect(roles).toEqual([
      expect.stringContaining("Full Stack DeveloperDrive Smart ↗Apr 2023 — Aug 2024"),
      expect.stringContaining("B.S. Software EngineeringWestern Governors UniversitySep 2021 — May 2023"),
      expect.stringContaining("Software Engineer InternBay Master ↗Jan 2021 — May 2022"),
      expect.stringContaining("A.S. Computer ScienceOcean County CollegeSep 2019 — Jan 2021"),
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

  it("shows no bullet points while none are written", () => {
    render(<Experience />);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
  });
});
