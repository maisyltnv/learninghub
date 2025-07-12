export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "student" | "instructor" | "admin"
  createdAt: string
  updatedAt: string
}

export interface Course {
  id: string
  title: string
  slug: string
  description: string
  thumbnail: string
  instructor: Instructor
  price: number
  originalPrice: number
  rating: number
  students: number
  duration: string
  lessons: number
  category: string
  level: string
  curriculum: Lesson[]
  createdAt: string
  updatedAt: string
}

export interface Instructor {
  id: string
  name: string
  avatar: string
  bio: string
  rating: number
  students: number
  courses: number
}

export interface Lesson {
  id: string
  title: string
  description?: string
  duration: string
  type: "video" | "quiz" | "assignment" | "reading"
  videoUrl?: string
  content?: string
  completed?: boolean
  order: number
}

export interface Enrollment {
  id: string
  userId: string
  courseId: string
  progress: number
  completedLessons: string[]
  enrolledAt: string
  lastAccessedAt: string
}

export interface Quiz {
  id: string
  lessonId: string
  title: string
  questions: Question[]
}

export interface Question {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

export interface Certificate {
  id: string
  userId: string
  courseId: string
  issuedAt: string
  certificateUrl: string
}
