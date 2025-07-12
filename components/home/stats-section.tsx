import { Users, BookOpen, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Students",
    description: "Learning and growing every day",
  },
  {
    icon: BookOpen,
    value: "1,200+",
    label: "Courses Available",
    description: "Across various disciplines",
  },
  {
    icon: Award,
    value: "25,000+",
    label: "Certificates Issued",
    description: "Recognizing achievements",
  },
  {
    icon: Globe,
    value: "150+",
    label: "Countries Reached",
    description: "Global learning community",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Trusted by Learners Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our growing community of learners and start your journey today
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
