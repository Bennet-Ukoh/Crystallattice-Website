import { z } from "zod"

export type ActionResult = {
  success: boolean
  message: string
  errors?: Record<string, string[]>
  data?: any
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

import { userLoginSchema, contactFormSchema } from "./validations"

export async function loginUser(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  try {
    await sleep(1500)

    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const role = formData.get("role") as string

    // Validate input using Zod
    const parsed = userLoginSchema.safeParse({ email, password, role })

    if (!parsed.success) {
      return {
        success: false,
        message: "Validation failed.",
        errors: parsed.error.flatten().fieldErrors,
      }
    }

    // Destructure validated data
    const { email: validatedEmail, password: validatedPassword, role: validatedRole } = parsed.data

    // Demo authentication logic
    const validCredentials = {
      "student@crystallattice.com": { password: "student123", role: "student" },
      "instructor@crystallattice.com": { password: "instructor123", role: "instructor" },
    }

    const user = validCredentials[validatedEmail as keyof typeof validCredentials]
    
    if (!user || user.password !== validatedPassword || user.role !== validatedRole) {
      return {
        success: false,
        message: "Invalid email or password.",
      }
    }

    // Here you would typically:
    // 1. Verify credentials against database
    // 2. Create session/JWT token
    // 3. Set authentication cookies
    console.log("User login successful:", { email: validatedEmail, role: validatedRole })

    return {
      success: true,
      message: "Login successful! Redirecting to dashboard...",
      data: { email: validatedEmail, role: validatedRole },
    }
  } catch (error) {
    return {
      success: false,
      message: "Login failed. Please try again.",
    }
  }
}

export async function submitContactForm(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  await sleep(1500)
  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    console.error(parsed.error.flatten().fieldErrors)
    return {
      success: false,
      message: "Invalid form data",
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  console.log("Contact form submitted with data:", parsed.data)

  return {
    success: true,
    message: "Your message has been sent successfully!",
  }
}
