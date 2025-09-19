import { Navigation } from "@/components/navigation"
import { ServicesPreview } from "@/components/services-preview"
import { CoursesPreview } from "@/components/courses-preview"
import { PartnersSection } from "@/components/partners"
import { CallToAction } from "@/components/call-to-action"
import { HeroSection } from "@/components/hero-section"
import { siteInfo } from "@/lib/content"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="flex min-h-screen flex-col">
        <HeroSection
          title={`${siteInfo.heroSection.titlePart1} ${siteInfo.heroSection.titlePart2}`}
          description={siteInfo.tagline}
          backgroundImage={siteInfo.heroSection.backgroundImage}
          ctaButtons={
            siteInfo.heroSection.ctaButtons.map((btn) => ({
              ...btn,
              variant: btn.variant as
                "outline"
            }))
          }
          titleHighlight={siteInfo.heroSection.titlePart2}
        />

        <section className="bg-primary/20">
          <ServicesPreview />
        </section>

        <section className="bg-accent/20">
          <CoursesPreview />
        </section>

        <section className="bg-gradient-to-r from-muted/20 to-background">
          <PartnersSection />
        </section>

        <section className="bg-gradient-to-r from-primary/20 via-background to-accent/20">
          <CallToAction />
        </section>
      </main>
    </>
  )
}
