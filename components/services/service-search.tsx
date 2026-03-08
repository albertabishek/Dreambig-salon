'use client'

import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

interface ServiceSearchProps {
  value: string
  onChange: (value: string) => void
}

export function ServiceSearch({ value, onChange }: ServiceSearchProps) {
  return (
    <div className="relative">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 size-5" />
      <Input
        type="search"
        placeholder="Search services..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-12 bg-card border-border text-foreground placeholder:text-foreground/50"
      />
    </div>
  )
}
