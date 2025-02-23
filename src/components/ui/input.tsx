import * as React from "react"
import { cn } from "@/lib/utils"

const variants = {
  "border": "border-border border-2",
  "transparent": "border-transparent border-none",
} as const

type InputVariant = keyof typeof variants

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'variant'> {
  variant?: InputVariant
}

export function Input({
  className,
  type,
  variant = "border",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base md:text-sm",
        "dark:border-border",
        variants[variant],
        className
      )}
      {...props}
    />
  )
}