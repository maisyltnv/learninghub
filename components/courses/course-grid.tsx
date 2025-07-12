import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users, BookOpen } from "lucide-react"
import Link from "next/link"

// Mock data - replace with actual API call
const courses = [
  {
    id: 1,
    title: "Complete React Development Course",
    slug: "complete-react-development",
    instructor: "John Smith",
    rating: 4.8,
    students: 12500,
    duration: "40 hours",
    lessons: 120,
    price: 89.99,
    originalPrice: 199.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    level: "Intermediate",
    description: "Master React from basics to advanced concepts with hands-on projects.",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    slug: "ui-ux-design-masterclass",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 8900,
    duration: "35 hours",
    lessons: 95,
    price: 79.99,
    originalPrice: 179.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Design",
    level: "Beginner",
    description: "Learn modern UI/UX design principles and create stunning user experiences.",
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    slug: "digital-marketing-strategy",
    instructor: "Mike Davis",
    rating: 4.7,
    students: 15600,
    duration: "25 hours",
    lessons: 80,
    price: 69.99,
    originalPrice: 149.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Marketing",
    level: "Intermediate",
    description: "Build comprehensive digital marketing strategies that drive results.",
  },
  {
    id: 4,
    title: "Python for Data Science",
    slug: "python-data-science",
    instructor: "Dr. Lisa Wang",
    rating: 4.8,
    students: 9800,
    duration: "45 hours",
    lessons: 130,
    price: 99.99,
    originalPrice: 219.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Data Science",
    level: "Intermediate",
    description: "Master Python programming for data analysis and machine learning.",
  },
  {
    id: 5,
    title: "Business Strategy Fundamentals",
    slug: "business-strategy-fundamentals",
    instructor: "Robert Chen",
    rating: 4.6,
    students: 7200,
    duration: "30 hours",
    lessons: 75,
    price: 59.99,
    originalPrice: 129.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Business",
    level: "Beginner",
    description: "Learn essential business strategy concepts and frameworks.",
  },
  {
    id: 6,
    title: "Advanced JavaScript Concepts",
    slug: "advanced-javascript",
    instructor: "Alex Turner",
    rating: 4.9,
    students: 11200,
    duration: "38 hours",
    lessons: 110,
    price: 84.99,
    originalPrice: 189.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    level: "Advanced",
    description: "Deep dive into advanced JavaScript concepts and modern ES6+ features.",
  },
]

interface CourseGridProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export function CourseGrid({ searchParams }: CourseGridProps) {
  // Filter courses based on search params
  let filteredCourses = courses

  if (searchParams.category) {
    filteredCourses = filteredCourses.filter((course) => course.category.toLowerCase() === searchParams.category)
  }

  if (searchParams.level) {
    filteredCourses = filteredCourses.filter((course) => course.level.toLowerCase() === searchParams.level)
  }

  if (searchParams.search) {
    const searchTerm = searchParams.search.toString().toLowerCase()
    filteredCourses = filteredCourses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm) ||
        course.description.toLowerCase().includes(searchTerm) ||
        course.instructor.toLowerCase().includes(searchTerm),
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="relative">
                <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {course.category}
                </Badge>
                <Badge className="absolute top-4 right-4" variant="outline">
                  {course.level}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                <Link href={`/courses/${course.slug}`} className="hover:text-primary">
                  {course.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground mb-2">by {course.instructor}</p>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
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
                <div className="flex items-center space-x-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{course.lessons}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold">${course.price}</span>
                  <span className="text-sm text-muted-foreground line-through">${course.originalPrice}</span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/courses/${course.slug}`}>View Course</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No courses found matching your criteria.</p>
          <Button variant="outline" className="mt-4 bg-transparent" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
