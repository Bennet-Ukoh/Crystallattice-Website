"use server"

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

// ----------------- EXISTING ACTIONS -----------------
export async function loginUser(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  try {
    await sleep(1500)

    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const role = formData.get("role") as string

    const parsed = userLoginSchema.safeParse({ email, password, role })

    if (!parsed.success) {
      return {
        success: false,
        message: "Validation failed.",
        errors: parsed.error.flatten().fieldErrors,
      }
    }

    const { email: validatedEmail, password: validatedPassword, role: validatedRole } = parsed.data

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

export async function submitContactForm(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
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

// ----------------- NEW ACTIONS -----------------

// Newsletter subscription
const newsletterSchema = z.object({
  email: z.string().email("A valid email is required"),
})

export async function subscribeToNewsletter(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  await sleep(1000)

  const parsed = newsletterSchema.safeParse({
    email: formData.get("email"),
  })

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid email address.",
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  console.log("Newsletter subscription:", parsed.data)

  return {
    success: true,
    message: "You have successfully subscribed to our newsletter!",
  }
}

// User registration
const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("A valid email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export async function registerUser(
  prevState: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  await sleep(1500)

  const parsed = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid registration details.",
      errors: parsed.error.flatten().fieldErrors,
    }
  }

  console.log("New user registered:", parsed.data)

  return {
    success: true,
    message: "Registration successful! You can now log in.",
    data: parsed.data,
  }
}
