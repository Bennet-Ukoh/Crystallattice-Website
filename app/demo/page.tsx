"use client"

import { useActionState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FormField } from "@/components/form-field"
import { SubmitButton } from "@/components/submit-button"
import { PageTransition } from "@/components/page-transition"
import { AnimatedCounter } from "@/components/animated-counter"
import { subscribeToNewsletter, registerUser } from "@/lib/actions"
import { MotionDiv, fadeInUp, staggerContainer, staggerItem } from "@/components/ui/motion"
import { Sparkles, Users, Zap } from "lucide-react"

export default function DemoPage() {
  const [newsletterState, newsletterAction] = useActionState(subscribeToNewsletter, null)
  const [registrationState, registrationAction] = useActionState(registerUser, null)

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container px-4 py-16 mx-auto">
          <MotionDiv variants={staggerContainer} initial="initial" animate="animate" className="space-y-16">
            {/* Header */}
            <MotionDiv variants={staggerItem} className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-balance">Interactive Demo</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Experience the power of Server Actions, form validation, and smooth animations.
              </p>
            </MotionDiv>

            {/* Stats */}
            <MotionDiv variants={staggerItem}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="text-center">
                    <Sparkles className="h-8 w-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-3xl">
                      <AnimatedCounter from={0} to={99} />%
                    </CardTitle>
                    <CardDescription>Performance Score</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Users className="h-8 w-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-3xl">
                      <AnimatedCounter from={0} to={1250} />+
                    </CardTitle>
                    <CardDescription>Happy Developers</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="text-center">
                    <Zap className="h-8 w-8 mx-auto text-primary mb-2" />
                    <CardTitle className="text-3xl">
                      <AnimatedCounter from={0} to={15} />
                      ms
                    </CardTitle>
                    <CardDescription>Average Load Time</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </MotionDiv>

            {/* Forms */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Newsletter Form */}
              <MotionDiv variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>Newsletter Subscription</CardTitle>
                    <CardDescription>Subscribe to get updates about new features and releases.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form action={newsletterAction} className="space-y-4">
                      <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        error={newsletterState?.errors?.email}
                      />
                      <SubmitButton className="w-full">Subscribe to Newsletter</SubmitButton>
                      {newsletterState?.success && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                          <p className="text-green-800 text-sm">{newsletterState.message}</p>
                        </div>
                      )}
                      {newsletterState?.success === false && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-red-800 text-sm">{newsletterState.message}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </MotionDiv>

              {/* Registration Form */}
              <MotionDiv variants={fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle>User Registration</CardTitle>
                    <CardDescription>Create an account to access premium features.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form action={registrationAction} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          label="First Name"
                          name="firstName"
                          placeholder="John"
                          required
                          error={registrationState?.errors?.firstName}
                        />
                        <FormField
                          label="Last Name"
                          name="lastName"
                          placeholder="Doe"
                          required
                          error={registrationState?.errors?.lastName}
                        />
                      </div>
                      <FormField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        error={registrationState?.errors?.email}
                      />
                      <FormField
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        error={registrationState?.errors?.password}
                      />
                      <FormField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        required
                        error={registrationState?.errors?.confirmPassword}
                      />
                      <SubmitButton className="w-full">Create Account</SubmitButton>
                      {registrationState?.success && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                          <p className="text-green-800 text-sm">{registrationState.message}</p>
                        </div>
                      )}
                      {registrationState?.success === false && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                          <p className="text-red-800 text-sm">{registrationState.message}</p>
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </MotionDiv>
            </div>

            {/* Back to Home */}
            <MotionDiv variants={staggerItem} className="text-center">
              <Button asChild size="lg">
                <a href="/">← Back to Home</a>
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </div>
    </PageTransition>
  )
}
