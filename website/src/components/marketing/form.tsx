import type { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react"
import { cx } from "../../lib/utils"
import { buttonClasses } from "../ui/Button"

const fieldBase =
  "w-full rounded-[var(--radius-sm)] border border-[var(--color-line-strong)] bg-[var(--color-panel)] px-3.5 py-2.5 text-[13.5px] text-[var(--color-ink)] placeholder:text-[var(--color-ink-faint)] outline-none transition-colors focus:border-[var(--color-signal)] focus:ring-1 focus:ring-[var(--color-signal)]/25"

export function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-[12.5px] font-medium text-[var(--color-ink-secondary)]">
        {label}
        {required && <span className="ml-1 text-[var(--color-solar)]">*</span>}
      </label>
      <div className="mt-1.5">{children}</div>
    </div>
  )
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cx(fieldBase, props.className)} />
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cx(fieldBase, "resize-none", props.className)} />
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={cx(fieldBase, props.className)} />
}

export function SubmitButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="submit" {...props} className={buttonClasses("solar", "lg", className)}>
      {children}
    </button>
  )
}

export function FormSuccess({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-signal)]/30 bg-[var(--color-signal)]/8 p-8 text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-signal)]/40 text-[var(--color-signal)]">
        ✓
      </div>
      <h3 className="font-display mt-4 text-[18px] font-medium text-[var(--color-ink)]">{title}</h3>
      <p className="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-[var(--color-ink-secondary)]">{body}</p>
    </div>
  )
}
