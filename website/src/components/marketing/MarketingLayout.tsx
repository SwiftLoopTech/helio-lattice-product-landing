import { Outlet } from "react-router-dom"
import { Nav } from "../sections/Nav"
import { Footer } from "../sections/Footer"
import { ScrollToTop } from "./ScrollToTop"

export function MarketingLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-bg)] text-[var(--color-ink)]">
      <ScrollToTop />
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
