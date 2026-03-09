'use client'

import * as React from 'react'
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Testimonial } from '@/lib/parseReviewsData'
import Autoplay from 'embla-carousel-autoplay'
import { motion } from 'framer-motion'

type CarouselApi = UseEmblaCarouselType[1]

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
  className?: string
}

export function TestimonialsCarousel({ testimonials, className }: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    skipSnaps: false,
    dragFree: false,
    loop: true,
    slidesToScroll: 1,
  }, [
    Autoplay({ delay: 5000, playOnInit: true }),
  ])

  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([])

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const scrollTo = React.useCallback((index: number) => {
    emblaApi?.scrollTo(index)
  }, [emblaApi])

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi?.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className={cn(
      'py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background/95 to-accent/5 relative overflow-hidden',
      className
    )}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Client Reviews</span>
            </div>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Testimonials
          </h2>
          
          <p className="text-foreground/80 max-w-3xl mx-auto text-xl mb-3 font-medium">
            What Our Clients Say
          </p>
          
          <p className="text-foreground/60 max-w-2xl mx-auto text-base">
            Trusted by customers for professional styling and great service. Read their experiences and discover why we're the top choice in the area.
          </p>

          {/* Rating summary */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-foreground/70 font-medium">4.9 out of 5</span>
            <span className="text-foreground/50 text-sm">({testimonials.length} reviews)</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex-none w-full md:w-1/2 lg:w-1/3 px-3 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0 }}
                  viewport={{ once: true }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -left-4 sm:-left-6 -translate-y-1/2 rounded-full w-12 h-12 bg-background/90 backdrop-blur-md border-2 border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group hidden sm:flex"
            disabled={!canScrollPrev}
            onClick={scrollPrev}
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            <span className="sr-only">Previous testimonials</span>
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -right-4 sm:-right-6 -translate-y-1/2 rounded-full w-12 h-12 bg-background/90 backdrop-blur-md border-2 border-border/50 hover:border-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group hidden sm:flex"
            disabled={!canScrollNext}
            onClick={scrollNext}
          >
            <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-200" />
            <span className="sr-only">Next testimonials</span>
          </Button>
        </motion.div>

        {/* Enhanced Dot Indicators */}
        <motion.div 
          className="flex justify-center gap-3 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={cn(
                'h-3 p-0 rounded-full transition-all duration-300 bg-border hover:bg-primary/50',
                index === selectedIndex
                  ? 'bg-primary w-12 shadow-lg shadow-primary/25'
                  : 'hover:w-8'
              )}
              onClick={() => scrollTo(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </Button>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-foreground/60 mb-6">
            Ready to experience our exceptional service?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Book Your Appointment
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
