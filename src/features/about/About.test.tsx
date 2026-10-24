import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import About from "./About";

describe("About", () => {
  it("introduces Cody in three paragraphs", () => {
    render(<About />);
    expect(screen.getByRole("heading", { name: "Hi, I'm Cody." })).toBeTruthy();
    expect(screen.getByText(/likes turning ideas into working software/)).toBeTruthy();
    expect(screen.getByText(/I experiment a lot\./)).toBeTruthy();
    expect(
      screen.getByText((_, el) =>
        el?.tagName === "P" &&
        el.textContent ===
          "When I'm not at the keyboard, I'm usually out with Chief, who also serves as head of QA.",
      ),
    ).toBeTruthy();
  });

  it("shows the illustration of Cody and Chief", () => {
    render(<About />);
    const img = screen.getByAltText("Illustration of Cody with his dog Chief on his shoulder");
    expect(img.getAttribute("src")).toBe("/about/cody-chief.webp");
  });
});
