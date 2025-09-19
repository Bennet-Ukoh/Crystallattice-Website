import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Play, Clock, Users, ArrowRight, Code, GraduationCap } from "lucide-react"
import { courses, trainingPage } from "@/lib/content"
import Link from "next/link"
import { HeroSection, CtaButton } from "@/components/hero-section"
import Image from "next/image"

export default function TrainingPage() {
  const iconMap = {
    Users,
    Code,
    GraduationCap
  }

  const ctaButtons: CtaButton[] = [
    {
      text: trainingPage.cta.primaryButtonText,
      href: trainingPage.cta.primaryButtonLink,
      isPrimary: true,
      icon: ArrowRight,
    },
    {
      text: trainingPage.cta.secondaryButtonText,
      href: trainingPage.cta.secondaryButtonLink,
      variant: "outline",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection
          title={trainingPage.hero.title}
          description={trainingPage.hero.description}
          ctaButtons={ctaButtons}
        />

        {/* Courses Grid */}
        <section className="py-24 bg-muted/10">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <ScrollReveal key={course.id} delay={index * 0.1}>
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                      {course.media.endsWith(".mp4") || course.media.includes("youtube.com") ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          {course.media.includes("youtube.com") ? (
                            <iframe
                              src={course.media}
                              title={course.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="absolute inset-0 w-full h-full"
                            ></iframe>
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Play className="h-8 w-8 text-white ml-1" />
                            </div>
                          )}
                        </div>
                      ) : (
                        <Image
                          src={course.media || "/placeholder.svg"}
                          alt={course.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: "cover"}}
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-accent/10 text-accent">
                          {course.media.endsWith(".mp4") || course.media.includes("youtube.com") ? "Video Course" : "Interactive"}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{course.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-base leading-relaxed text-pretty">
                        {course.description}
                      </CardDescription>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>8-12 weeks</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>20-30 students</span>
                        </div>
                      </div>

                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                        <Link href="/login">
                          Enroll Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-muted/30">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary">Why Choose Our Training?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  Our programs are designed with industry needs in mind
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trainingPage.features.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap]
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div className="text-center space-y-4">
                      <div className={`w-16 h-16 rounded-full ${feature.icon === "Code" ? "bg-accent/10" : "bg-primary/10"} flex items-center justify-center mx-auto`}>
                        <Icon className={`h-8 w-8 ${feature.icon === "Code" ? "text-accent" : "text-primary"}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-primary">{feature.title}</h3>
                      <p className="text-muted-foreground text-pretty">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-primary/20 via-background to-accent/20">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary">{trainingPage.cta.title}</h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  {trainingPage.cta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={trainingPage.cta.primaryButtonLink}>
                      {trainingPage.cta.primaryButtonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href={trainingPage.cta.secondaryButtonLink}>{trainingPage.cta.secondaryButtonText}</Link>
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  )
}
