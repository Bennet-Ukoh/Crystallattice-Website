import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { ArrowRight, Code, Award } from "lucide-react"
import { siteInfo } from "@/lib/content"
import { HeroSection, CtaButton } from "@/components/hero-section"

export function Hero() {
  const ctaButtons: CtaButton[] = [
    {
      text: "Our Services",
      href: "/services",
      isPrimary: true,
    },
    {
      text: "Training Programs",
      href: "/training",
      icon: Code,
      variant: "outline",
    },
  ];

  return (
    <HeroSection
      title={siteInfo.heroSection.titlePart1 + " " + siteInfo.heroSection.titlePart2}
      description={siteInfo.tagline}
      backgroundImage={siteInfo.heroSection.backgroundImage}
      ctaButtons={ctaButtons}
      titleHighlight={siteInfo.heroSection.titlePart2}
    >
      {/* Additional content for the Hero, like stats, can be passed as children or handled within HeroSection if it becomes too complex */}
      {/* <div className="container px-4 mx-auto text-center relative z-10 pt-16">
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
      </div> */}
    </HeroSection>
  );
}
