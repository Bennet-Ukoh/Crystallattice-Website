import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import { blogs, blogDetailPage } from "@/lib/content"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"

interface BlogDetailPageProps {
  params: {
    id: string
  }
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const blog = blogs.find((b) => b.id.toString() === params.id)

  if (!blog) {
    notFound()
  }

  return (
    <>
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blogs
                </Link>

                <div className="space-y-6">
                  <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent">
                    Tech Insights
                  </Badge>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance text-primary">{blog.title}</h1>

                  <div className="flex items-center gap-6 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(blog.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{blog.author}</span>
                    </div>
                    <Button variant="outline" size="sm" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                  <Image
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    fill
                    sizes="100vw"
                    style={{objectFit: "cover"}}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <div className="prose prose-lg max-w-none">
                  <div className="text-xl text-muted-foreground mb-8 font-medium">{blog.excerpt}</div>

                  <div
                    className="space-y-6 text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-primary">{blogDetailPage.relatedArticles.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogs
                    .filter((b) => b.id !== blog.id)
                    .map((relatedBlog, index) => (
                      <Link key={relatedBlog.id} href={`/blogs/${relatedBlog.id}`}>
                        <div className="bg-background rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer group">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(relatedBlog.date).toLocaleDateString()}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors text-primary">
                            {relatedBlog.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">{relatedBlog.excerpt}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container px-4 mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-6 max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-balance text-primary">{blogDetailPage.cta.title}</h2>
                <p className="text-muted-foreground text-pretty">
                  {blogDetailPage.cta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={blogDetailPage.cta.primaryButtonLink}>{blogDetailPage.cta.primaryButtonText}</Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href={blogDetailPage.cta.secondaryButtonLink}>{blogDetailPage.cta.secondaryButtonText}</Link>
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
