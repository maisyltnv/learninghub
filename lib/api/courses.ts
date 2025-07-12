// Mock API functions - replace with actual API calls

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  thumbnail: string
  instructor: {
    id: string
    name: string
    avatar: string
    bio: string
  }
  price: number
  originalPrice: number
  rating: number
  students: number
  duration: string
  lessons: number
  category: string
  level: string
  curriculum: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  duration: string
  type: "video" | "quiz" | "assignment"
  videoUrl?: string
  completed?: boolean
}

export async function getCourseBySlug(slug: string): Promise<Course | null> {
  // Mock data - replace with actual API call
  const mockCourse: Course = {
    id: "1",
    title: "Complete React Development Course",
    slug: "complete-react-development",
    description: "Master React from basics to advanced concepts with hands-on projects and real-world applications.",
    thumbnail: "/placeholder.svg?height=400&width=600",
    instructor: {
      id: "1",
      name: "John Smith",
      avatar: "/placeholder.svg?height=60&width=60",
      bio: "Senior React Developer with 8+ years of experience building scalable web applications.",
    },
    price: 89.99,
    originalPrice: 199.99,
    rating: 4.8,
    students: 12500,
    duration: "40 hours",
    lessons: 120,
    category: "Programming",
    level: "Intermediate",
    curriculum: [
      {
        id: "1",
        title: "Introduction to React",
        duration: "15 min",
        type: "video",
        videoUrl: "/placeholder-video.mp4",
      },
      {
        id: "2",
        title: "Setting up Development Environment",
        duration: "20 min",
        type: "video",
        videoUrl: "/placeholder-video.mp4",
      },
      {
        id: "3",
        title: "React Fundamentals Quiz",
        duration: "10 min",
        type: "quiz",
      },
    ],
  }

  return mockCourse
}

export async function getCourseWithLessons(courseId: string): Promise<Course | null> {
  // Mock implementation
  return getCourseBySlug("complete-react-development")
}

export async function getLessonById(lessonId: string): Promise<Lesson | null> {
  // Mock data
  return {
    id: lessonId,
    title: "Introduction to React",
    duration: "15 min",
    type: "video",
    videoUrl: "/placeholder-video.mp4",
  }
}
