"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "student" | "instructor" | "admin"
}

interface DashboardOverviewProps {
  user: User
}

export function DashboardOverview({ user }: DashboardOverviewProps) {
  // Mock data - replace with actual API calls
  const stats = {
    enrolledCourses: 5,
    completedCourses: 2,
    totalHours: 45,
    certificates: 2,
  }

  const recentCourses = [
    {
      id: "1",
      title: "Complete React Development Course",
      progress: 75,
      thumbnail: "/placeholder.svg?height=60&width=80",
      instructor: "John Smith",
    },
    {
      id: "2",
      title: "UI/UX Design Masterclass",
      progress: 45,
      thumbnail: "/placeholder.svg?height=60&width=80",
      instructor: "Sarah Johnson",
    },
    {
      id: "3",
      title: "Digital Marketing Strategy",
      progress: 90,
      thumbnail: "/placeholder.svg?height=60&width=80",
      instructor: "Mike Davis",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Enrolled Courses</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.enrolledCourses}</div>
            <p className="text-xs text-muted-foreground">Active learning paths</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.completedCourses}</div>
            <p className="text-xs text-muted-foreground">Courses finished</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalHours}</div>
            <p className="text-xs text-muted-foreground">Total time invested</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Certificates</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.certificates}</div>
            <p className="text-xs text-muted-foreground">Achievements earned</p>
          </CardContent>
        </Card>
      </div>

      {/* Continue Learning Section */}
      <Card>
        <CardHeader>
          <CardTitle>Continue Learning</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentCourses.map((course) => (
              <div key={course.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-16 h-12 object-cover rounded"
                />
                <div className="flex-1 space-y-2">
                  <h4 className="font-medium">{course.title}</h4>
                  <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                  <div className="flex items-center space-x-2">
                    <Progress value={course.progress} className="flex-1" />
                    <span className="text-sm text-muted-foreground">{course.progress}%</span>
                  </div>
                </div>
                <Button asChild>
                  <Link href={`/learn/${course.id}/1`}>Continue</Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
