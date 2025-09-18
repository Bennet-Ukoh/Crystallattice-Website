import { z } from "zod"

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
})

export type NewsletterData = z.infer<typeof newsletterSchema>

// User registration schema
export const userRegistrationSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(30, "First name must be less than 30 characters"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(30, "Last name must be less than 30 characters"),
    email: z.string().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password must be less than 100 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one number",
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export type UserRegistrationData = z.infer<typeof userRegistrationSchema>

// User login schema
export const userLoginSchema = z.object({
  email: z.string().email("Please enter a valid email address").max(100, "Email must be less than 100 characters"),
  password: z.string().min(1, "Password is required").max(100, "Password must be less than 100 characters"),
  role: z.enum(["student", "instructor"], { required_error: "Role is required" }),
})

export type UserLoginData = z.infer<typeof userLoginSchema>
