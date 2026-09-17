import { intelligence } from "../../data/home"
import { CornerFrame } from "../ui/CornerFrame"

export function ReportLibraryMockup() {
  return (
    <CornerFrame tone="line" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Report library</span>
        <span className="font-mono text-[10.5px] text-[var(--color-solar)]">{intelligence.reportCount} reports</span>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {intelligence.reportGroups.map((group) => (
          <div key={group.name} className="rounded-[6px] border border-[var(--color-line)] bg-[var(--color-inset)] p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-[var(--color-ink)]">{group.name}</span>
              <span className="font-mono text-[10px] text-[var(--color-ink-faint)]">{group.items.length}</span>
            </div>
            <ul className="mt-2 space-y-1">
              {group.items.map((item) => (
                <li key={item} className="truncate text-[11.5px] text-[var(--color-ink-muted)]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </CornerFrame>
  )
}
