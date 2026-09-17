import { Routes, Route } from "react-router-dom"
import { MarketingLayout } from "./components/marketing/MarketingLayout"

import Home from "./pages/Home"
import ProductOverview from "./pages/product/ProductOverview"
import ModulePage from "./pages/product/ModulePage"
import SolutionPage from "./pages/solutions/SolutionPage"
import Pricing from "./pages/Pricing"
import Security from "./pages/Security"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Demo from "./pages/Demo"
import Customers from "./pages/Customers"
import Resources from "./pages/Resources"
import Privacy from "./pages/legal/Privacy"
import Terms from "./pages/legal/Terms"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <Routes>
      <Route element={<MarketingLayout />}>
        <Route index element={<Home />} />

        <Route path="product" element={<ProductOverview />} />
        <Route path="product/:slug" element={<ModulePage />} />

        <Route path="solutions/:slug" element={<SolutionPage />} />

        <Route path="pricing" element={<Pricing />} />
        <Route path="security" element={<Security />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="demo" element={<Demo />} />

        <Route path="customers" element={<Customers />} />
        <Route path="resources" element={<Resources />} />

        <Route path="legal/privacy" element={<Privacy />} />
        <Route path="legal/terms" element={<Terms />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
