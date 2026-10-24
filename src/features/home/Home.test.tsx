import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {
  it("has a target for every nav link", () => {
    const { container } = render(<Home />);
    for (const id of ["work", "about", "experience", "contact"]) {
      expect(container.querySelector(`#${id}`), id).not.toBeNull();
    }
  });
});
