import { motion, useReducedMotion } from "motion/react"

export function LineChart({
  values,
  width = 320,
  height = 96,
  color = "var(--color-series-1)",
  ariaLabel,
}: {
  values: number[]
  width?: number
  height?: number
  color?: string
  ariaLabel: string
}) {
  const reduce = useReducedMotion()
  const max = Math.max(...values)
  const min = Math.min(...values)
  const range = max - min || 1
  const pad = 8

  const points = values.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * (width - pad * 2)
    const y = height - pad - ((v - min) / range) * (height - pad * 2)
    return [x, y] as const
  })

  const path = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
  const areaPath = `${path} L${points[points.length - 1][0]},${height - pad} L${points[0][0]},${height - pad} Z`

  return (
    <svg
      role="img"
      aria-label={ariaLabel}
      viewBox={`0 0 ${width} ${height}`}
      className="w-full"
      style={{ height }}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} stroke="var(--color-line)" strokeWidth="1" />
      <path d={areaPath} fill="url(#lineFade)" />
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === points.length - 1 ? 3.5 : 2} fill={color} />
      ))}
    </svg>
  )
}
