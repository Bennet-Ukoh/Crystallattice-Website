import Link from "next/link"
import { siteInfo, navLinks } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { footerContent } from "@/lib/content"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const iconMap = {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
  }

  return (
    <footer className="bg-card text-card-foreground py-12 md:py-16 border-t border-muted/20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-primary">{siteInfo.name}</h3>
          <p className="text-muted-foreground text-sm">{siteInfo.description}</p>
          <div className="flex space-x-4">
            {footerContent.socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap]
              return (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Contact Us</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>{footerContent.contactInfo.address}</p>
            <p>Email: {footerContent.contactInfo.email}</p>
            <p>Phone: {footerContent.contactInfo.phone}</p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">
            {footerContent.newsletter.title}
          </h3>
          <p className="text-muted-foreground text-sm">
            {footerContent.newsletter.description}
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder={footerContent.newsletter.placeholder}
              className="flex-grow"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 text-center mt-8 pt-8 border-t border-muted/20">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {siteInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
