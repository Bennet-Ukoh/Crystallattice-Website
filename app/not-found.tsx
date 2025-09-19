import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-muted/10">
      <h1 className="text-5xl font-bold text-primary">404</h1>
      <p className="text-xl text-muted-foreground">This page could not be found.</p>
      <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
