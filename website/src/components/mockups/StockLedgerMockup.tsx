import { CornerFrame } from "../ui/CornerFrame"

const rows = [
  { item: "Panel · 545 Wp", loc: "Main store", change: "+120", type: "Receipt" },
  { item: "Inverter · 4 kW hybrid", loc: "Vehicle · Ravi K.", change: "−2", type: "Issue" },
  { item: "Mounting rail · 3.2 m", loc: "Site · KA-1148", change: "−18", type: "Issue" },
  { item: "Earthing kit", loc: "Branch · Mysuru", change: "+30", type: "Transfer" },
]

export function StockLedgerMockup() {
  return (
    <CornerFrame tone="line" className="rounded-[var(--radius-lg)] border border-[var(--color-line)] bg-[var(--color-panel)] p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10.5px] tracking-wide text-[var(--color-ink-muted)] uppercase">Stock movement ledger</span>
        <span className="font-mono text-[10.5px] text-[var(--color-ink-faint)]">4 locations</span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-[12px]">
          <thead>
            <tr className="border-b border-[var(--color-line)] text-left font-mono text-[10px] tracking-wide text-[var(--color-ink-faint)] uppercase">
              <th className="pb-2 font-medium">Item</th>
              <th className="pb-2 font-medium">Location</th>
              <th className="pb-2 font-medium">Type</th>
              <th className="pb-2 text-right font-medium">Qty</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.item} className="border-b border-[var(--color-line)] last:border-0">
                <td className="py-2.5 pr-3 text-[var(--color-ink)]">{r.item}</td>
                <td className="py-2.5 pr-3 text-[var(--color-ink-muted)]">{r.loc}</td>
                <td className="py-2.5 pr-3 text-[var(--color-ink-muted)]">{r.type}</td>
                <td
                  className={
                    "py-2.5 text-right font-mono font-medium " +
                    (r.change.startsWith("+") ? "text-[var(--color-good)]" : "text-[var(--color-ink)]")
                  }
                >
                  {r.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CornerFrame>
  )
}
