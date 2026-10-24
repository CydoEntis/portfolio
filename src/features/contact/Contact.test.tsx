import { afterEach, describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "./Contact";

afterEach(() => vi.unstubAllGlobals());

function fillAndSend() {
  fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada" } });
  fireEvent.change(screen.getByLabelText("Your email"), { target: { value: "ada@example.com" } });
  fireEvent.change(screen.getByLabelText("Message"), { target: { value: "Hello" } });
  fireEvent.click(screen.getByRole("button", { name: "Send message" }));
}

function stubFetch(response: Promise<Response>) {
  const fetch = vi.fn(() => response);
  vi.stubGlobal("fetch", fetch);
  return fetch;
}

describe("Contact", () => {
  it("never shows an email address", () => {
    const { container } = render(<Contact formKey="key" />);
    expect(container.querySelector('a[href^="mailto:"]')).toBeNull();
    expect(container.textContent).not.toContain("@");
  });

  it("hides the form until it has an access key", () => {
    render(<Contact formKey="" />);
    expect(screen.queryByRole("button", { name: "Send message" })).toBeNull();
  });

  it("sends the message to Web3Forms with the access key", async () => {
    const fetch = stubFetch(Promise.resolve(Response.json({ success: true })));
    render(<Contact formKey="key" />);
    fillAndSend();
    const sent = await screen.findByText("Thanks. Message sent. I'll reply soon.");
    expect(document.activeElement).toBe(sent);
    const [url, init] = fetch.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe("https://api.web3forms.com/submit");
    expect(JSON.parse(init.body as string)).toMatchObject({
      access_key: "key",
      name: "Ada",
      email: "ada@example.com",
      message: "Hello",
    });
  });

  it("keeps the message and says so when sending fails", async () => {
    stubFetch(Promise.resolve(Response.json({ success: false }, { status: 400 })));
    render(<Contact formKey="key" />);
    fillAndSend();
    expect((await screen.findByRole("alert")).textContent).toContain("didn't send");
    expect((screen.getByLabelText("Message") as HTMLTextAreaElement).value).toBe("Hello");
  });

  it("says so when the network is down", async () => {
    stubFetch(Promise.reject(new TypeError("Failed to fetch")));
    render(<Contact formKey="key" />);
    fillAndSend();
    expect(await screen.findByRole("alert")).toBeTruthy();
  });

  it("links GitHub, LinkedIn and the résumé", () => {
    render(<Contact formKey="" />);
    expect(screen.getByRole("link", { name: "GitHub" }).getAttribute("href")).toBe(
      "https://github.com/CydoEntis",
    );
    expect(screen.getByRole("link", { name: "LinkedIn" }).getAttribute("href")).toBe(
      "https://www.linkedin.com/in/cody-stine-dev/",
    );
    const resume = screen.getByRole("link", { name: "Résumé.pdf" });
    expect(resume.getAttribute("href")).toBe("/resume.pdf");
    expect(resume.hasAttribute("download")).toBe(true);
  });
});
