import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Clock, Users } from "lucide-react"
import Link from "next/link"

const featuredCourses = [
  {
    id: 1,
    title: "Complete React Development Course",
    instructor: "John Smith",
    rating: 4.8,
    students: 12500,
    duration: "40 hours",
    price: 89.99,
    originalPrice: 199.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Programming",
    level: "Intermediate",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Johnson",
    rating: 4.9,
    students: 8900,
    duration: "35 hours",
    price: 79.99,
    originalPrice: 179.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Design",
    level: "Beginner",
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    instructor: "Mike Davis",
    rating: 4.7,
    students: 15600,
    duration: "25 hours",
    price: 69.99,
    originalPrice: 149.99,
    image: "/placeholder.svg?height=200&width=300",
    category: "Marketing",
    level: "Intermediate",
  },
]

export function FeaturedCourses() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Courses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular courses, carefully selected by our expert instructors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {course.category}
                  </Badge>
                  <Badge className="absolute top-4 right-4" variant="outline">
                    {course.level}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">by {course.instructor}</p>

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
                  <Link href={`/courses/${course.id}`}>Enroll Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/courses">View All Courses</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
