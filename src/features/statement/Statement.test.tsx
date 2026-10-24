import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Statement from "./Statement";

describe("Statement", () => {
  it("reads as one sentence", () => {
    const { container } = render(<Statement />);
    expect(container.textContent).toBe(
      "I like building useful software regardless of where it runs — browser, desktop, terminal, or game engine.",
    );
  });
});
