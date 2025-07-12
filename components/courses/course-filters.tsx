"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, X } from "lucide-react"

const categories = [
  "Programming",
  "Design",
  "Marketing",
  "Business",
  "Data Science",
  "Photography",
  "Music",
  "Language",
]

const levels = ["Beginner", "Intermediate", "Advanced"]

const durations = ["0-5 hours", "5-10 hours", "10-20 hours", "20+ hours"]

export function CourseFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "")
  const [priceRange, setPriceRange] = useState([0, 200])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (searchTerm) {
      params.set("search", searchTerm)
    } else {
      params.delete("search")
    }
    router.push(`/courses?${params.toString()}`)
  }

  const handleFilterChange = (key: string, value: string, checked: boolean) => {
    const params = new URLSearchParams(searchParams.toString())
    if (checked) {
      params.set(key, value.toLowerCase())
    } else {
      params.delete(key)
    }
    router.push(`/courses?${params.toString()}`)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setPriceRange([0, 200])
    router.push("/courses")
  }

  return (
    <div className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <Input placeholder="Search courses..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Button type="submit" className="w-full">
              Search
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={searchParams.get("category") === category.toLowerCase()}
                onCheckedChange={(checked) => handleFilterChange("category", category, checked as boolean)}
              />
              <Label htmlFor={category} className="text-sm font-normal">
                {category}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Level */}
      <Card>
        <CardHeader>
          <CardTitle>Level</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {levels.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={level}
                checked={searchParams.get("level") === level.toLowerCase()}
                onCheckedChange={(checked) => handleFilterChange("level", level, checked as boolean)}
              />
              <Label htmlFor={level} className="text-sm font-normal">
                {level}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle>Price Range</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider value={priceRange} onValueChange={setPriceRange} max={200} step={10} className="w-full" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </CardContent>
      </Card>

      {/* Duration */}
      <Card>
        <CardHeader>
          <CardTitle>Duration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {durations.map((duration) => (
            <div key={duration} className="flex items-center space-x-2">
              <Checkbox
                id={duration}
                checked={searchParams.get("duration") === duration.toLowerCase()}
                onCheckedChange={(checked) => handleFilterChange("duration", duration, checked as boolean)}
              />
              <Label htmlFor={duration} className="text-sm font-normal">
                {duration}
              </Label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Clear Filters */}
      <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
        <X className="h-4 w-4 mr-2" />
        Clear Filters
      </Button>
    </div>
  )
}
