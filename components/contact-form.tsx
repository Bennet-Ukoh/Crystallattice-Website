"use client"

import { useActionState, useEffect } from "react"
import { FormField } from "@/components/form-field"
import { SubmitButton } from "@/components/submit-button"
import { submitContactForm } from "@/lib/actions"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null)
  const { toast } = useToast()

  useEffect(() => {
    if (state?.success) {
      toast({
        title: "Message sent!",
        description: state.message,
      })
    } else if (state?.success === false) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      })
    }
  }, [state, toast])

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Name" name="name" placeholder="Your full name" required error={state?.errors?.name} />
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="your@email.com"
          required
          error={state?.errors?.email}
        />
      </div>

      <FormField
        label="Subject"
        name="subject"
        placeholder="What's this about?"
        required
        error={state?.errors?.subject}
      />

      <FormField label="Message" name="message" required error={state?.errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us more about your inquiry..."
          required
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
        />
      </FormField>

      <SubmitButton className="w-full">Send Message</SubmitButton>
    </form>
  )
}
