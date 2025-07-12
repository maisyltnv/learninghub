import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CourseHero } from "@/components/course/course-hero"
import { CourseCurriculum } from "@/components/course/course-curriculum"
import { CourseInstructor } from "@/components/course/course-instructor"
import { CourseReviews } from "@/components/course/course-reviews"
import { notFound } from "next/navigation"
import { getCourseBySlug } from "@/lib/api/courses"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug)

  if (!course) {
    return {
      title: "Course Not Found - LearnHub",
    }
  }

  return {
    title: `${course.title} - LearnHub`,
    description: course.description,
    openGraph: {
      title: course.title,
      description: course.description,
      images: [course.thumbnail],
    },
  }
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CourseHero course={course} />
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <CourseCurriculum course={course} />
              <CourseInstructor instructor={course.instructor} />
              <CourseReviews courseId={course.id} />
            </div>
            <div className="lg:col-span-1">{/* Course sidebar with purchase options */}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
