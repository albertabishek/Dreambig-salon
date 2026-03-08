'use client'

import { Button } from '@/components/ui/button'

interface ServiceFiltersProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ServiceFilters({
  categories,
  activeCategory,
  onCategoryChange,
}: ServiceFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => onCategoryChange(category)}
          variant={activeCategory === category ? 'default' : 'outline'}
          className={
            activeCategory === category
              ? 'bg-accent text-accent-foreground hover:bg-accent/90'
              : 'border-border text-foreground hover:border-accent'
          }
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
