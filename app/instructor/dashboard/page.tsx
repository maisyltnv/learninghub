import { InstructorLayout } from "@/components/layout/instructor-layout"
import { InstructorOverview } from "@/components/instructor/instructor-overview"
import { getCurrentUser } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata = {
  title: "Instructor Dashboard - LearnHub",
  description: "Manage your courses and students",
}

export default async function InstructorDashboardPage() {
  const user = await getCurrentUser()

  if (!user || user.role !== "instructor") {
    redirect("/dashboard")
  }

  return (
    <InstructorLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Instructor Dashboard</h1>
          <p className="text-muted-foreground">Manage your courses and track student progress</p>
        </div>
        <InstructorOverview instructorId={user.id} />
      </div>
    </InstructorLayout>
  )
}
