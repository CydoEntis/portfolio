import { afterEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";

afterEach(() => {
  vi.doUnmock("@/content/site");
  vi.resetModules();
});

async function renderContact() {
  const { default: Contact } = await import("./Contact");
  return render(<Contact />);
}

describe("Contact", () => {
  it("hides the email link while no address is set", async () => {
    const { container } = await renderContact();
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
  });

  it("shows the email link once an address is set", async () => {
    vi.doMock("@/content/site", async (importOriginal) => ({
      ...(await importOriginal<typeof import("@/content/site")>()),
      EMAIL: "a@b.c",
    }));
    await renderContact();
    expect(screen.getByRole("link", { name: "a@b.c" }).getAttribute("href")).toBe(
      "mailto:a@b.c",
    );
  });

  it("links GitHub, LinkedIn and the résumé", async () => {
    await renderContact();
    expect(screen.getByRole("link", { name: "GitHub ↗" }).getAttribute("href")).toBe(
      "https://github.com/CydoEntis",
    );
    expect(screen.getByRole("link", { name: "LinkedIn ↗" }).getAttribute("href")).toBe(
      "https://www.linkedin.com/in/cody-stine-dev/",
    );
    const resume = screen.getByRole("link", { name: "Résumé.pdf ↓" });
    expect(resume.getAttribute("href")).toBe("/resume.pdf");
    expect(resume.hasAttribute("download")).toBe(true);
  });
});
