import { useEffect } from "react"

/**
 * Lightweight SEO stub: sets document title + meta description on mount.
 * No external dependency — real OG/meta tooling can replace this later.
 */
export function Seo({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    const fullTitle = `${title} · HelioLattice`
    document.title = fullTitle

    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement("meta")
        tag.setAttribute("name", "description")
        document.head.appendChild(tag)
      }
      tag.setAttribute("content", description)
    }
  }, [title, description])

  return null
}
