import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Play } from "lucide-react"
import { courses } from "@/lib/content"

export function CoursesPreview() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary">
              Training Programs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Hands-on courses designed to equip you with industry-relevant skills
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <ScrollReveal key={course.id} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                {/* Media preview */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                  {course.media.endsWith(".mp4") ? (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="h-12 w-12 text-primary" />
                    </div>
                  ) : (
                    <Image
                      src={course.media || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Card content */}
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-primary">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-pretty">
                    {course.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <Button
              size="lg"
              asChild
              className=" bg-accent text-primary-foreground hover:bg-accent/90 hover:text-accent-foreground"
            >
              <Link href="/training">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
