"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ScrollReveal } from "@/components/scroll-reveal"
import { User, GraduationCap, Eye, EyeOff } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { loginPage } from "@/lib/content"
import { useActionState } from "react"
import { loginUser } from "@/lib/actions"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()
  const [studentState, studentFormAction] = useActionState(loginUser, null)
  const [instructorState, instructorFormAction] = useActionState(loginUser, null)
  const [activeTab, setActiveTab] = useState<"student" | "instructor">("student")

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

  const showWelcomeMessage = studentState?.success || instructorState?.success

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection
          title={loginPage.hero.title}
          description={loginPage.hero.description}
        />

        {/* Login Options */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            {showWelcomeMessage ? (
              <ScrollReveal>
                <div className="bg-primary/10 text-primary-foreground p-6 rounded-lg text-center max-w-xl mx-auto space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Login Successful!</h2>
                  <p className="text-lg">Redirecting you to your dashboard...</p>
                </div>
              </ScrollReveal>
            ) : (
              <div className="max-w-xl mx-auto">
                <Tabs defaultValue="student" className="w-full" onValueChange={(value) => setActiveTab(value as "student" | "instructor")}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="student" className="data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent">Student Login</TabsTrigger>
                    <TabsTrigger value="instructor" className="data-[state=active]:text-accent data-[state=active]:border-b-2 data-[state=active]:border-accent">Instructor Login</TabsTrigger>
                  </TabsList>
                  <TabsContent value="student">
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <GraduationCap className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="text-2xl text-primary">{loginPage.studentLogin.title}</CardTitle>
                        <CardDescription className="text-base">
                          {loginPage.studentLogin.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <form action={studentFormAction}>
                          <input type="hidden" name="role" value="student" />
                          <div className="space-y-2">
                            <Label htmlFor="student-email">Email</Label>
                            <Input
                              id="student-email"
                              name="email"
                              type="email"
                              placeholder={loginPage.studentLogin.emailPlaceholder}
                              defaultValue={loginPage.studentLogin.defaultEmail}
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
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </div>
                          <Button className="w-full" type="submit" disabled={studentState?.success === true}>
                            {studentState?.success === true ? "Signing In..." : loginPage.studentLogin.buttonText}
                          </Button>
                          <div className="text-center">
                            <Button variant="link" className="text-sm">
                              Forgot your password?
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="instructor">
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader className="text-center pb-4">
                        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                          <User className="h-8 w-8 text-accent" />
                        </div>
                        <CardTitle className="text-2xl text-primary">{loginPage.instructorLogin.title}</CardTitle>
                        <CardDescription className="text-base">
                          {loginPage.instructorLogin.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <form action={instructorFormAction}>
                          <input type="hidden" name="role" value="instructor" />
                          <div className="space-y-2">
                            <Label htmlFor="instructor-email">Email</Label>
                            <Input
                              id="instructor-email"
                              name="email"
                              type="email"
                              placeholder={loginPage.instructorLogin.emailPlaceholder}
                              defaultValue={loginPage.instructorLogin.defaultEmail}
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
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                            </div>
                          </div>
                          <Button className="w-full" type="submit" disabled={instructorState?.success === true}>
                            {instructorState?.success === true ? "Signing In..." : loginPage.instructorLogin.buttonText}
                          </Button>
                          <div className="text-center">
                            <Button variant="link" className="text-sm">
                              Forgot your password?
                            </Button>
                          </div>
                        </form>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {/* Demo Credentials */}
            {!showWelcomeMessage && (
              <ScrollReveal delay={0.2}>
                <div className="mt-16 max-w-2xl mx-auto">
                  <div className="bg-muted/30 rounded-lg p-6 text-center">
                    <h3 className="font-semibold mb-2 text-primary">{loginPage.demoCredentials.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{loginPage.demoCredentials.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-medium">{loginPage.demoCredentials.student.label}</p>
                        <p>Email: {loginPage.demoCredentials.student.email}</p>
                        <p>Password: {loginPage.demoCredentials.student.password}</p>
                      </div>
                      <div>
                        <p className="font-medium">{loginPage.demoCredentials.instructor.label}</p>
                        <p>Email: {loginPage.demoCredentials.instructor.email}</p>
                        <p>Password: {loginPage.demoCredentials.instructor.password}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
