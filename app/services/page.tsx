import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Code, Cpu, GraduationCap, Handshake, ArrowRight } from "lucide-react"
import { services, servicesPage } from "@/lib/content"
import Link from "next/link"
import { HeroSection, CtaButton } from "@/components/hero-section"

const iconMap = {
  Code,
  Cpu,
  GraduationCap,
  Handshake,
}

export default function ServicesPage() {
  const ctaButtons: CtaButton[] = [
    {
      text: servicesPage.cta.buttonText,
      href: servicesPage.cta.buttonLink,
      isPrimary: true,
      icon: ArrowRight,
    },
  ];

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection
          title={servicesPage.hero.title}
          description={servicesPage.hero.description}
          ctaButtons={ctaButtons}
        />

        {/* Services Grid */}
        <section className="py-24">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
                const isAccent = index % 2 !== 0 // Alternate accent color for icons
                return (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <CardHeader className="pb-4">
                        <div className={`w-16 h-16 rounded-xl ${isAccent ? "bg-accent/10" : "bg-primary/10"} flex items-center justify-center mb-6`}>
                          <Icon className={`h-8 w-8 ${isAccent ? "text-accent" : "text-primary"}`} />
                        </div>
                        <CardTitle className="text-2xl mb-2 text-primary">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed text-pretty">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-muted/30">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary">{servicesPage.cta.title}</h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  {servicesPage.cta.description}
                </p>
                <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={servicesPage.cta.buttonLink}>
                    {servicesPage.cta.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  )
}
