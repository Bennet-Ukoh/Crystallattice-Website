import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, User, ArrowRight } from "lucide-react"
import { blogs, blogsPage } from "@/lib/content"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function BlogsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-16">
        <HeroSection
          title={blogsPage.hero.title}
          description={blogsPage.hero.description}
        />

        {/* Blog Posts Grid */}
        <section className="py-24 bg-muted/10">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogs.map((blog, index) => (
                <ScrollReveal key={blog.id} delay={index * 0.1}>
                  <Link href={`/blogs/${blog.id}`}>
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                      <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                        <Image
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{objectFit: "cover"}}
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            Tech Insights
                          </Badge>
                        </div>
                      </div>

                      <CardHeader>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(blog.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{blog.author}</span>
                          </div>
                        </div>
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors text-primary">
                          {blog.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent>
                        <CardDescription className="text-base leading-relaxed text-pretty mb-4">
                          {blog.excerpt}
                        </CardDescription>
                        <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-24 bg-gradient-to-r from-primary/20 via-background to-accent/20">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-balance text-primary">{blogsPage.newsletterCta.title}</h2>
                <p className="text-xl text-muted-foreground text-pretty">
                  {blogsPage.newsletterCta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-input bg-background"
                  />
                  <Button size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  )
}
