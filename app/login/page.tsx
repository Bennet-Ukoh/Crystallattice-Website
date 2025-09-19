"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useActionState } from "react"
import { loginUser } from "@/lib/actions"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code2, Loader2, Eye, EyeOff, GraduationCap, User } from "lucide-react"
import { loginPage } from "@/lib/content"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState<"student" | "instructor">("student")
  const router = useRouter()
  const [studentState, studentFormAction] = useActionState(loginUser, null)
  const [instructorState, instructorFormAction] = useActionState(loginUser, null)

  useEffect(() => {
    if (studentState?.success) {
      toast({
        title: "Success",
        description: studentState.message,
      })
      router.push(`/dashboard?role=student`)
    } else if (studentState?.success === false) {
      toast({
        title: "Error",
        description: studentState.message,
        variant: "destructive",
      })
    }
  }, [studentState, router])

  useEffect(() => {
    if (instructorState?.success) {
      toast({
        title: "Success",
        description: instructorState.message,
      })
      router.push(`/dashboard?role=instructor`)
    } else if (instructorState?.success === false) {
      toast({
        title: "Error",
        description: instructorState.message,
        variant: "destructive",
      })
    }
  }, [instructorState, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-md space-y-6 pt-10">
        {/* Logo */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl">Crystallattice</span>
          </Link>
          <p className="text-muted-foreground mt-2">Sign in to your account</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full" onValueChange={(value) => setActiveTab(value as "student" | "instructor")}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" className="data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent">Student Login</TabsTrigger>
                <TabsTrigger value="instructor" className="data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent">Instructor Login</TabsTrigger>
              </TabsList>
              <TabsContent value="student">
                <form action={studentFormAction} className="space-y-4 pt-4">
                  {studentState?.success === false && (
                    <Alert variant="destructive">
                      <AlertDescription>{studentState.message}</AlertDescription>
                    </Alert>
                  )}
                  <input type="hidden" name="role" value="student" />
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input
                      id="student-email"
                      name="email"
                      type="email"
                      placeholder={loginPage.studentLogin.emailPlaceholder}
                      defaultValue={loginPage.studentLogin.defaultEmail}
                      disabled={studentState?.success === true}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="student-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        defaultValue={loginPage.studentLogin.defaultPassword}
                        disabled={studentState?.success === true}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={studentState?.success === true}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={studentState?.success === true}>
                    {studentState?.success === true ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      loginPage.studentLogin.buttonText
                    )}
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  <Link href="/forgot-password" className="text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </TabsContent>
              <TabsContent value="instructor">
                <form action={instructorFormAction} className="space-y-4 pt-4">
                  {instructorState?.success === false && (
                    <Alert variant="destructive">
                      <AlertDescription>{instructorState.message}</AlertDescription>
                    </Alert>
                  )}
                  <input type="hidden" name="role" value="instructor" />
                  <div className="space-y-2">
                    <Label htmlFor="instructor-email">Email</Label>
                    <Input
                      id="instructor-email"
                      name="email"
                      type="email"
                      placeholder={loginPage.instructorLogin.emailPlaceholder}
                      defaultValue={loginPage.instructorLogin.defaultEmail}
                      disabled={instructorState?.success === true}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instructor-password">Password</Label>
                    <div className="relative">
                      <Input
                        id="instructor-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        defaultValue={loginPage.instructorLogin.defaultPassword}
                        disabled={instructorState?.success === true}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={instructorState?.success === true}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <Button type="submit" className="w-full" disabled={instructorState?.success === true}>
                    {instructorState?.success === true ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Signing in...
                      </>
                    ) : (
                      loginPage.instructorLogin.buttonText
                    )}
                  </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                  <Link href="/forgot-password" className="text-primary hover:underline">
                    Forgot your password?
                  </Link>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center text-sm">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup" className="text-primary hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-sm">{loginPage.demoCredentials.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="text-xs">
              <p className="font-medium">{loginPage.demoCredentials.student.label}</p>
              <p>Email: {loginPage.demoCredentials.student.email}</p>
              <p>Password: {loginPage.demoCredentials.student.password}</p>
            </div>
            <div className="text-xs">
              <p className="font-medium">{loginPage.demoCredentials.instructor.label}</p>
              <p>Email: {loginPage.demoCredentials.instructor.email}</p>
              <p>Password: {loginPage.demoCredentials.instructor.password}</p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
