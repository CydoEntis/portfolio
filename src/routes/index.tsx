import { createFileRoute } from "@tanstack/react-router";
import Hero from "@/features/hero/Hero";
import Statement from "@/features/statement/Statement";
import WorkSection from "@/features/work/WorkSection";
import Workbench from "@/features/workbench/Workbench";
import About from "@/features/about/About";

export const Route = createFileRoute("/")({
  component: Home,
});

export function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <Statement />
      <Workbench />
      <About />
    </>
  );
}
