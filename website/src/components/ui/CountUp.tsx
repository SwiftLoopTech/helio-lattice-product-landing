import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "motion/react"

/** Animates the leading integer in a label (e.g. "78 / 89", "~300", "21 reports"). */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState<string>(reduce ? value : value.replace(/\d+/, "0"))

  const match = value.match(/\d+/)

  useEffect(() => {
    if (!inView || reduce || !match) {
      if (reduce) setDisplay(value)
      return
    }
    const target = parseInt(match[0], 10)
    const duration = 900
    const start = performance.now()

    let raf: number
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)
      setDisplay(value.replace(/\d+/, String(current)))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
