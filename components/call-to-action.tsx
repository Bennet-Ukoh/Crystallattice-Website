import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, UserPlus } from "lucide-react"
import { homePageCta } from "@/lib/content"

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/10 via-background to-accent/10">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary">
              {homePageCta.title}
            </h2>
            <p className="text-xl text-muted-foreground text-pretty">
              {homePageCta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <Button
                size="lg"
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-transform"
              >
                <Link href={homePageCta.primaryButtonLink}>
                  <UserPlus className="mr-2 h-4 w-4" />
                  {homePageCta.primaryButtonText}
                </Link>
              </Button>

              {/* Secondary CTA */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="hover:border-primary hover:text-primary transition-colors"
              >
                <Link href={homePageCta.secondaryButtonLink}>
                  {homePageCta.secondaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
