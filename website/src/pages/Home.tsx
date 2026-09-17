import { Seo } from "../components/marketing/Seo"
import { Hero } from "../components/sections/Hero"
import { Problem } from "../components/sections/Problem"
import { Workflow } from "../components/sections/Workflow"
import { ModulesStrip } from "../components/sections/ModulesStrip"
import { ProofStrip } from "../components/sections/ProofStrip"
import { FinalCTA } from "../components/sections/FinalCTA"
import { homeSeo } from "../data/home"

/** Minimal ICP homepage: Hero → Problem → How → Modules → Proof → CTA */
export default function Home() {
  return (
    <>
      <Seo title={homeSeo.title} description={homeSeo.description} />
      <Hero />
      <Problem />
      <Workflow />
      <ModulesStrip />
      <ProofStrip />
      <FinalCTA id="demo" />
    </>
  )
}
