import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { revealOnScroll } from "./reveal";

type Callback = (entries: { isIntersecting: boolean; target: Element }[]) => void;
let intersect: Callback;

class FakeObserver {
  constructor(callback: Callback) {
    intersect = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}

function element(top: number) {
  const el = document.createElement("div");
  el.setAttribute("data-reveal", "");
  el.getBoundingClientRect = () => ({ top }) as DOMRect;
  document.body.append(el);
  return el;
}

function reducedMotion(on: boolean) {
  vi.stubGlobal("matchMedia", (query: string) => ({ matches: on && query.includes("reduce") }));
}

beforeEach(() => {
  vi.stubGlobal("IntersectionObserver", FakeObserver);
  vi.stubGlobal("innerHeight", 800);
  reducedMotion(false);
});

afterEach(() => {
  vi.unstubAllGlobals();
  document.body.innerHTML = "";
  history.replaceState(null, "", "/");
});

describe("revealOnScroll", () => {
  it("never hides what is already on screen, even at the very bottom", () => {
    const visible = element(790);
    revealOnScroll();
    expect(visible.style.opacity).toBe("");
  });

  it("hides what starts below the screen until it scrolls into view", () => {
    const below = element(1200);
    revealOnScroll();
    expect(below.style.opacity).toBe("0");
    intersect([{ isIntersecting: true, target: below }]);
    expect(below.style.opacity).toBe("");
  });

  it("shows everything when printing", () => {
    const below = element(1200);
    revealOnScroll();
    window.dispatchEvent(new Event("beforeprint"));
    expect(below.style.opacity).toBe("");
  });

  it("shows everything when cleaned up", () => {
    const below = element(1200);
    revealOnScroll()();
    expect(below.style.opacity).toBe("");
  });

  it("hides nothing for reduced motion", () => {
    reducedMotion(true);
    const below = element(1200);
    revealOnScroll();
    expect(below.style.opacity).toBe("");
  });

  it("hides nothing without IntersectionObserver", () => {
    vi.stubGlobal("IntersectionObserver", undefined);
    const below = element(1200);
    revealOnScroll();
    expect(below.style.opacity).toBe("");
  });

  it("hides nothing when the page opens at a section link", () => {
    history.replaceState(null, "", "/#contact");
    const below = element(1200);
    revealOnScroll();
    expect(below.style.opacity).toBe("");
  });
});
