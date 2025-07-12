import { DashboardLayout } from "@/components/layout/dashboard-layout"
import { MyCoursesList } from "@/components/dashboard/my-courses-list"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: "My Courses - LearnHub",
  description: "Your enrolled courses",
}

export default async function MyCoursesPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect("/auth/login")
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">My Courses</h1>
          <p className="text-muted-foreground">Continue learning from where you left off</p>
        </div>
        <MyCoursesList userId={user.id} />
      </div>
    </DashboardLayout>
  )
}
