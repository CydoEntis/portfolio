import { useEffect } from "react";
import Hero from "@/features/hero/Hero";
import Statement from "@/features/statement/Statement";
import WorkSection from "@/features/work/WorkSection";
import About from "@/features/about/About";
import Experience from "@/features/experience/Experience";
import Contact from "@/features/contact/Contact";
import { revealOnScroll } from "@/lib/reveal";

export default function Home() {
  useEffect(() => revealOnScroll(), []);

  return (
    <>
      <Hero />
      <WorkSection />
      <Statement />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
