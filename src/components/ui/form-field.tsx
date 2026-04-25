import { cn } from "@/lib/utils"
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react"

const labelClasses =
  "text-xs font-medium uppercase tracking-[0.15em] text-foreground/50"

const inputClasses =
  "rounded-md border border-foreground/10 bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/30 focus:border-foreground/30"

interface FormLabelProps {
  htmlFor: string
  children: string
  className?: string
}

export function FormLabel({ htmlFor, children, className }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className={cn(labelClasses, className)}>
      {children}
    </label>
  )
}

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
  inputClassName?: string
}

export function FormInput({
  label,
  id,
  className,
  inputClassName,
  ...props
}: FormInputProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <FormLabel htmlFor={id!}>{label}</FormLabel>
      <input
        id={id}
        className={cn(inputClasses, inputClassName)}
        {...props}
      />
    </div>
  )
}

interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  className?: string
  textareaClassName?: string
}

export function FormTextarea({
  label,
  id,
  className,
  textareaClassName,
  ...props
}: FormTextareaProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <FormLabel htmlFor={id!}>{label}</FormLabel>
      <textarea
        id={id}
        className={cn("resize-none", inputClasses, textareaClassName)}
        {...props}
      />
    </div>
  )
}
