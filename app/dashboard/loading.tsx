import { Skeleton } from "@/components/ui/skeleton"
import { Navigation } from "@/components/navigation"

export default function Loading() {
  return (
    <>
      <Navigation />
      <main className="pt-16 container mx-auto px-4 py-12">
        {/* Header Skeleton */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div className="space-y-2">
            <Skeleton className="h-10 w-64" />
            <Skeleton className="h-6 w-96" />
          </div>
          <Skeleton className="h-10 w-24" />
        </div>

        {/* Stats Cards Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Skeleton className="h-[120px]" />
          <Skeleton className="h-[120px]" />
          <Skeleton className="h-[120px]" />
        </div>

        {/* Quick Actions Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Skeleton className="h-[100px]" />
            <Skeleton className="h-[100px]" />
          </div>
        </div>

        {/* Recent Activity Skeleton */}
        <div>
          <Skeleton className="h-8 w-48 mx-auto mb-8" />
          <div className="max-w-4xl mx-auto space-y-4">
            <Skeleton className="h-[150px]" />
          </div>
        </div>
      </main>
    </>
  )
}
