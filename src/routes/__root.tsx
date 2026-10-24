import { Outlet, createRootRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <div id="top" className="relative min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  ),
});
