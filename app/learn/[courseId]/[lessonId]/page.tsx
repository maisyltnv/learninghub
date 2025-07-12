import { VideoPlayer } from "@/components/learn/video-player"
import { LessonSidebar } from "@/components/learn/lesson-sidebar"
import { LessonContent } from "@/components/learn/lesson-content"
import { getCurrentUser } from "@/lib/auth"
import { getCourseWithLessons, getLessonById } from "@/lib/api/courses"
import { redirect, notFound } from "next/navigation"

interface LearnPageProps {
  params: {
    courseId: string
    lessonId: string
  }
}

export default async function LearnPage({ params }: LearnPageProps) {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  const course = await getCourseWithLessons(params.courseId)
  const lesson = await getLessonById(params.lessonId)

  if (!course || !lesson) {
    notFound()
  }

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 flex flex-col">
          <VideoPlayer lesson={lesson} />
          <LessonContent lesson={lesson} />
        </div>
        <LessonSidebar course={course} currentLessonId={params.lessonId} />
      </div>
    </div>
  )
}
