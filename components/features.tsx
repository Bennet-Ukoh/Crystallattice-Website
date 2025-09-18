import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Zap, Shield, Palette, Code, Smartphone, Rocket, Database, Settings } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with Next.js 15.5.2 App Router for optimal performance and developer experience.",
  },
  {
    icon: Shield,
    title: "Type Safe",
    description: "Full TypeScript support with strict type checking and excellent IntelliSense.",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Tailwind CSS v4 with shadcn/ui components for consistent, accessible design.",
  },
  {
    icon: Code,
    title: "Server Actions",
    description: "Form handling with Server Actions and Zod validation for robust data processing.",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Mobile-first design that looks great on all devices and screen sizes.",
  },
  {
    icon: Rocket,
    title: "Animations",
    description: "Smooth Framer Motion animations with pre-built components and variants.",
  },
  {
    icon: Database,
    title: "Production Ready",
    description: "Optimized build configuration with proper error handling and loading states.",
  },
  {
    icon: Settings,
    title: "Developer Tools",
    description: "ESLint, TypeScript, and modern tooling configured for the best development experience.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container px-4 mx-auto">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Everything You Need to Build Modern Apps</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              This scaffold includes all the essential tools and configurations for building production-ready Next.js
              applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
