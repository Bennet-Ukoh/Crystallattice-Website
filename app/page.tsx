import { Navigation } from "@/components/navigation"
import { ServicesPreview } from "@/components/services-preview"
import { CoursesPreview } from "@/components/courses-preview"
import { Partners } from "@/components/partners"
import { CallToAction } from "@/components/call-to-action"
import { HeroSection, CtaButton } from "@/components/hero-section"
import { siteInfo, homePageCta } from "@/lib/content"
import { Code, ArrowRight, Award } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function HomePage() {
  const heroCtaButtons: CtaButton[] = [
    {
      text: "Our Services",
      href: "/services",
      isPrimary: true,
      icon: ArrowRight,
    },
    {
      text: "Training Programs",
      href: "/training",
      icon: Code,
      variant: "outline",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
        <HeroSection
          title={siteInfo.heroSection.titlePart1 + " " + siteInfo.heroSection.titlePart2}
          description={siteInfo.tagline}
          backgroundImage={siteInfo.heroSection.backgroundImage}
          ctaButtons={heroCtaButtons}
          titleHighlight={siteInfo.heroSection.titlePart2}
        >
          <div className="container px-4 mx-auto text-center relative z-10 pt-16">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                  {siteInfo.heroSection.stats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-3xl font-bold flex items-center justify-center gap-1">
                        <AnimatedCounter from={0} to={stat.value} />+
                        {stat.icon === "Award" && <Award className="h-6 w-6 fill-accent text-accent" />}
                      </div>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </HeroSection>

        {/* Services: visible purple tint */}
        <section className="bg-primary/20">
          <ServicesPreview />
        </section>

        {/* Courses: visible yellow tint */}
        <section className="bg-accent/20">
          <CoursesPreview />
        </section>

        {/* Partners: neutral block */}
        <section className="bg-muted">
          <Partners />
        </section>

        {/* CTA: stronger gradient highlight */}
        <section className="bg-gradient-to-r from-primary/20 via-background to-accent/20">
          <CallToAction />
        </section>
      </main>
    </>
  )
}
