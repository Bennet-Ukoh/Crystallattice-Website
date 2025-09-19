import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Code, Cpu, GraduationCap, Handshake } from "lucide-react"
import { services, servicesSection } from "@/lib/content"

const iconMap = {
  Code,
  Cpu,
  GraduationCap,
  Handshake,
}

export function ServicesPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary">{servicesSection.title}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {servicesSection.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-pretty">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <Button
              size="lg"
              asChild
              className="bg-accent text-primary-foreground hover:bg-accent/90"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
