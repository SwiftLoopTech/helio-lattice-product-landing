import { useTheme } from "../../lib/theme"
import { cx } from "../../lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={cx(
        "inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-line-strong)] text-[var(--color-ink-secondary)] transition-colors hover:border-[var(--color-signal)] hover:text-[var(--color-ink)]",
        className,
      )}
    >
      {isDark ? (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
          <circle cx="8" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.4" />
          <path
            d="M8 1.5V2.75M8 13.25V14.5M1.5 8H2.75M13.25 8H14.5M3.05 3.05L3.93 3.93M12.07 12.07L12.95 12.95M12.95 3.05L12.07 3.93M3.93 12.07L3.05 12.95"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M13.5 9.2A5.75 5.75 0 0 1 6.8 2.5 5.75 5.75 0 1 0 13.5 9.2Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
