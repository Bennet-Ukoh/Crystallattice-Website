import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { contactPage } from "@/lib/content"
import { HeroSection } from "@/components/hero-section"

export default function ContactPage() {
  const iconMap = {
    Mail,
    Phone,
    MapPin,
    Clock
  }
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection
          title={contactPage.hero.title}
          description={contactPage.hero.description}
        />

        {/* Contact Content */}
        <section className="py-24 bg-muted/10">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">{contactPage.introduction.title}</h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {contactPage.introduction.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactPage.contactInfo.map((item, index) => {
                      const Icon = iconMap[item.icon as keyof typeof iconMap]
                      return (
                        <div key={index} className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-lg ${item.color === "primary" ? "bg-primary/10" : "bg-accent/10"} flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`h-6 w-6 ${item.color === "primary" ? "text-primary" : "text-accent"}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1 text-primary">{item.title}</h3>
                            {item.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </ScrollReveal>

              {/* Contact Form */}
              <ScrollReveal delay={0.2}>
                <div className="bg-muted/30 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-6 text-primary">Send us a Message</h3>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
