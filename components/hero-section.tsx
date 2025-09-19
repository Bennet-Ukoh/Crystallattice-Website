import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowRight, Code } from "lucide-react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react";

export interface CtaButton {
  text: string;
  href: string;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
  icon?: LucideIcon; // Lucide icon component
  isPrimary?: boolean;
}

interface HeroSectionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  backgroundImage?: string;
  ctaButtons?: CtaButton[];
  titleHighlight?: string; // For a highlighted part of the title
  children?: React.ReactNode; // Add children prop
}

export function HeroSection({ title, description, backgroundImage, ctaButtons, titleHighlight, children }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen py-24 md:py-32 flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Background"
            fill // Use fill for background images
            sizes="100vw" // Important for responsive images with fill
            style={{objectFit: "cover"}}
            priority
          />
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />
        </div>
      )}

      <div className="container px-4 mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              {typeof title === 'string' && titleHighlight ? (
                <>
                  {title.split(titleHighlight)[0]}
                  <span className="block text-accent">{titleHighlight}</span>
                  {title.split(titleHighlight)[1]}
                </>
              ) : (
                title
              )}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              {description}
            </p>

            {ctaButtons && ctaButtons.length > 0 && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                {ctaButtons.map((button, index) => {
                  const Icon = button.icon;
                  return (
                    <Button
                      key={index}
                      size="lg"
                      asChild
                      variant={button.variant || (button.isPrimary ? "default" : "outline")}
                      className={button.isPrimary ? "bg-accent text-accent-foreground hover:bg-accent/90" : ""}
                    >
                      <Link href={button.href}>
                        {Icon && <Icon className="mr-2 h-4 w-4" />}
                        {button.text}
                        {!Icon && <ArrowRight className="ml-2 h-4 w-4" />}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            )}
            {children} {/* Render children here */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
