import type React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface FormFieldProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string[]
  className?: string
  children?: React.ReactNode
}

export function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  error,
  className,
  children,
}: FormFieldProps) {
  const hasError = error && error.length > 0

  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={name} className={hasError ? "text-destructive" : ""}>
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>

      {children || (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={hasError ? "border-destructive focus-visible:ring-destructive" : ""}
        />
      )}

      {hasError && <p className="text-sm text-destructive">{error[0]}</p>}
    </div>
  )
}
