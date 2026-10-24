import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("links each section by its anchor", () => {
    render(<Header />);
    const expected = {
      Work: "#work",
      About: "#about",
      Experience: "#experience",
      Contact: "#contact",
    };
    for (const [label, href] of Object.entries(expected)) {
      expect(screen.getByRole("link", { name: label }).getAttribute("href")).toBe(href);
    }
  });

  it("opens GitHub in a new tab", () => {
    render(<Header />);
    const github = screen.getByRole("link", { name: "GitHub ↗" });
    expect(github.getAttribute("href")).toBe("https://github.com/CydoEntis");
    expect(github.getAttribute("target")).toBe("_blank");
    expect(github.getAttribute("rel")).toBe("noreferrer");
  });
});
