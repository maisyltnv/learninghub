import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Emily Chen",
    role: "Software Developer",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "LearnHub transformed my career. The courses are well-structured and the instructors are incredibly knowledgeable. I landed my dream job after completing the React course!",
  },
  {
    id: 2,
    name: "David Rodriguez",
    role: "UX Designer",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The UI/UX design course exceeded my expectations. The practical projects and feedback from instructors helped me build a strong portfolio that impressed employers.",
  },
  {
    id: 3,
    name: "Sarah Thompson",
    role: "Marketing Manager",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "As a busy professional, I appreciated the flexibility of learning at my own pace. The digital marketing course gave me the skills to advance in my career.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from learners who transformed their careers with LearnHub
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 mb-6">"{testimonial.content}"</blockquote>

                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
