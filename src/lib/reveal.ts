const EASE = "cubic-bezier(.2,.7,.2,1)";

/**
 * Fades `[data-reveal]` elements up as they scroll into view.
 *
 * Only elements that start fully below the viewport are hidden, so nothing a visitor
 * can already see ever blinks out. Everything shows at once for reduced
 * motion, printing, a background tab, or a browser without
 * IntersectionObserver. Returns a cleanup function.
 */
export function revealOnScroll(root: ParentNode = document): () => void {
  if (
    typeof IntersectionObserver === "undefined" ||
    document.hidden ||
    // A link to a section scrolls there after this runs; leave it all shown.
    location.hash ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return () => {};
  }

  const fold = window.innerHeight;
  const pending = [...root.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
    (el) => el.getBoundingClientRect().top >= fold,
  );

  for (const el of pending) {
    const siblings = [...(el.parentElement?.children ?? [])].filter((c) =>
      c.hasAttribute("data-reveal"),
    );
    const delay = (Math.min(siblings.indexOf(el), 6) % 4) * 70;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = `opacity .8s ${EASE} ${delay}ms, transform .8s ${EASE} ${delay}ms`;
  }

  // The inline transition would shadow the element's own (a card's hover
  // background, say), so it goes once the fade has finished.
  const show = (el: HTMLElement) => {
    // Children's hover transitions bubble here too; only the fade's own end counts.
    const done = (event: TransitionEvent) => {
      if (event.target !== el) return;
      el.style.transition = "";
      el.removeEventListener("transitionend", done);
    };
    el.addEventListener("transitionend", done);
    el.style.opacity = "";
    el.style.transform = "";
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        show(entry.target as HTMLElement);
        observer.unobserve(entry.target);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  pending.forEach((el) => observer.observe(el));

  // Printing or leaving the tab shows everything at once, never mid-fade.
  const showAll = () => {
    for (const el of pending) {
      el.style.transition = "";
      el.style.opacity = "";
      el.style.transform = "";
    }
    observer.disconnect();
  };
  const onVisibility = () => document.hidden && showAll();
  window.addEventListener("beforeprint", showAll);
  document.addEventListener("visibilitychange", onVisibility);

  return () => {
    showAll();
    window.removeEventListener("beforeprint", showAll);
    document.removeEventListener("visibilitychange", onVisibility);
  };
}
