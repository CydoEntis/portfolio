import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import Workbench from "./Workbench";

describe("Workbench", () => {
  it("shows what is being built and how far along it is", () => {
    render(<Workbench />);
    const rows = within(screen.getByRole("list", { name: "Currently building" })).getAllByRole(
      "listitem",
    );
    expect(rows.map((r) => r.textContent)).toEqual([
      expect.stringMatching(/^tinkery.*in progress$/),
      expect.stringMatching(/^crowns.*prototype$/),
    ]);
  });
});
