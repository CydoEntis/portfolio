const EASE = "cubic-bezier(.2,.7,.2,1)";

/**
 * Fades `[data-reveal]` elements up as they scroll into view.
 *
 * Only elements that start below the fold are hidden, so nothing a visitor
 * can already see ever blinks out. Everything shows at once for reduced
 * motion, printing, a background tab, or a browser without
 * IntersectionObserver. Returns a cleanup function.
 */
export function revealOnScroll(root: ParentNode = document): () => void {
  if (
    typeof IntersectionObserver === "undefined" ||
    document.hidden ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return () => {};
  }

  const fold = window.innerHeight * 0.9;
  const pending = [...root.querySelectorAll<HTMLElement>("[data-reveal]")].filter(
    (el) => el.getBoundingClientRect().top > fold,
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
    el.addEventListener("transitionend", () => (el.style.transition = ""), { once: true });
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

  const showAll = () => {
    pending.forEach(show);
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
