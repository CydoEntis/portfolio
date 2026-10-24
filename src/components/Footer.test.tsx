import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("credits Cody and Chief", () => {
    render(<Footer />);
    expect(screen.getByText(/Built by Cody\./)).toBeTruthy();
    expect(screen.getByText("Supervised by Chief.")).toBeTruthy();
  });

  it("links back to the top of the page", () => {
    render(<Footer />);
    expect(screen.getByRole("link", { name: "back to top ↑" }).getAttribute("href")).toBe(
      "#top",
    );
  });
});
