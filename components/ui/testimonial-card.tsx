import * as React from 'react'
import { Star, Quote } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  rating: number
  image?: string
  className?: string
}

export function TestimonialCard({
  name,
  role,
  testimonial,
  rating,
  image,
  className
}: TestimonialCardProps) {
  // Generate better avatar fallback text
  const getAvatarFallback = (name: string): string => {
    if (!name || name === "Anonymous Customer") return "AN"
    
    // Handle initials (like "AA" or "A.")
    if (/^[A-Z.]{1,3}$/.test(name.trim())) {
      return name.trim().replace('.', '').substring(0, 2).toUpperCase()
    }
    
    // For full names, get first two letters of first and last name
    const nameParts = name.trim().split(' ').filter(part => part.length > 0)
    if (nameParts.length >= 2) {
      return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
    } else if (nameParts.length === 1) {
      return nameParts[0].substring(0, 2).toUpperCase()
    }
    
    return "AN"
  }

  return (
    <Card className={cn(
      'h-full relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 group',
      className
    )}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Quote icon decoration */}
      <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors duration-300">
        <Quote className="w-12 h-12 transform rotate-180" />
      </div>

      <CardContent className="p-6 flex flex-col h-full relative z-10">
        {/* Star Rating */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'w-5 h-5 transition-all duration-300',
                i < rating 
                  ? 'fill-yellow-400 text-yellow-400 drop-shadow-sm' 
                  : 'text-gray-300 dark:text-gray-600'
              )}
            />
          ))}
        </div>

        {/* Testimonial Text */}
        <blockquote className="text-foreground/90 text-base leading-relaxed mb-8 flex-grow font-medium italic">
          "{testimonial}"
        </blockquote>

        {/* Author Info */}
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
          <Avatar className="w-12 h-12 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-primary-foreground text-sm font-semibold">
              {getAvatarFallback(name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-base text-foreground group-hover:text-primary transition-colors duration-300 truncate">
              {name}
            </div>
            <div className="text-sm text-foreground/70 font-medium">
              {role}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
