import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/** Resets scroll position on route change so inner pages don't inherit the previous page's scroll offset. */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
  }, [pathname])

  return null
}
