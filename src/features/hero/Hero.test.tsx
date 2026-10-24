import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Hero", () => {
  it("says I build software", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("I buildsoftware.");
  });

  it("points its buttons at work, GitHub and contact", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /View my work/ }).getAttribute("href")).toBe("#work");
    expect(screen.getByRole("link", { name: "Contact" }).getAttribute("href")).toBe("#contact");
    const github = screen.getByRole("link", { name: "GitHub" });
    expect(github.getAttribute("href")).toBe("https://github.com/CydoEntis");
    expect(github.getAttribute("target")).toBe("_blank");
  });

  it("lists every platform", () => {
    render(<Hero />);
    for (const label of [
      "web apps",
      "desktop",
      "terminal / tui",
      "cli tools",
      "browser extensions",
      "games",
    ]) {
      expect(screen.getByText(label)).toBeTruthy();
    }
  });

  it("hides the caret from screen readers", () => {
    const { container } = render(<Hero />);
    const caret = container.querySelector(".motion-caret");
    expect(caret?.getAttribute("aria-hidden")).toBe("true");
  });
});
