import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CourseFilters } from "@/components/courses/course-filters"
import { CourseGrid } from "@/components/courses/course-grid"
import { Suspense } from "react"
import { CourseGridSkeleton } from "@/components/courses/course-grid-skeleton"

export const metadata = {
  title: "All Courses - LearnHub",
  description: "Browse our comprehensive collection of online courses",
}

export default function CoursesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">All Courses</h1>
          <p className="text-muted-foreground">Discover courses that match your interests and career goals</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <CourseFilters />
          </aside>

          <div className="flex-1">
            <Suspense fallback={<CourseGridSkeleton />}>
              <CourseGrid searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
