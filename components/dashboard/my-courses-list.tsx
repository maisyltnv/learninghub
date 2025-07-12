"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Play } from "lucide-react"
import Link from "next/link"

interface MyCoursesListProps {
  userId: string
}

export function MyCoursesList({ userId }: MyCoursesListProps) {
  // Mock data - replace with actual API call
  const enrolledCourses = [
    {
      id: "1",
      title: "Complete React Development Course",
      instructor: "John Smith",
      thumbnail: "/placeholder.svg?height=200&width=300",
      progress: 75,
      totalLessons: 120,
      completedLessons: 90,
      duration: "40 hours",
      rating: 4.8,
      students: 12500,
      category: "Programming",
      level: "Intermediate",
      lastAccessed: "2 days ago",
    },
    {
      id: "2",
      title: "UI/UX Design Masterclass",
      instructor: "Sarah Johnson",
      thumbnail: "/placeholder.svg?height=200&width=300",
      progress: 45,
      totalLessons: 95,
      completedLessons: 43,
      duration: "35 hours",
      rating: 4.9,
      students: 8900,
      category: "Design",
      level: "Beginner",
      lastAccessed: "1 week ago",
    },
    {
      id: "3",
      title: "Digital Marketing Strategy",
      instructor: "Mike Davis",
      thumbnail: "/placeholder.svg?height=200&width=300",
      progress: 90,
      totalLessons: 80,
      completedLessons: 72,
      duration: "25 hours",
      rating: 4.7,
      students: 15600,
      category: "Marketing",
      level: "Intermediate",
      lastAccessed: "3 days ago",
    },
  ]

  return (
    <div className="space-y-6">
      {enrolledCourses.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="text-center space-y-4">
              <h3 className="text-lg font-semibold">No courses enrolled yet</h3>
              <p className="text-muted-foreground">Start your learning journey by enrolling in a course</p>
              <Button asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {course.category}
                  </Badge>
                  <Badge className="absolute top-4 right-4" variant="outline">
                    {course.level}
                  </Badge>
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Button size="icon" className="rounded-full">
                      <Play className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-2">{course.title}</h3>
                    <p className="text-sm text-muted-foreground">by {course.instructor}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      {course.completedLessons} of {course.totalLessons} lessons completed
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground">Last accessed: {course.lastAccessed}</div>

                  <div className="flex space-x-2">
                    <Button className="flex-1" asChild>
                      <Link href={`/learn/${course.id}/1`}>{course.progress > 0 ? "Continue" : "Start"} Learning</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/courses/${course.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
